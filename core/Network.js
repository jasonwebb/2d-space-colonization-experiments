import Defaults from './Defaults';
import KDBush from 'kdbush';

export default class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);

    this.sources = [];   // sources are locations of auxin, the growth hormone
    this.segments = [];  // segments are discrete line segments that form veins

    this.buildSpatialIndices();
  }

  update() {
    // Skip iteration if paused
    if(this.settings.IsPaused) {
      return;
    }

    // For each auxin source ...
    for(let [sourceID, source] of this.sources.entries()) {
      let closestSegment = null,
        record = this.settings.AttractionDistance;

      // Do knn search to find all segments within AttractionDistance of this auxin source
      let closestSegments = this.segmentsIndex.within(source.position.x, source.position.y, this.settings.AttractionDistance).map(id => this.segments[id]);

      // Use slightly different algorithms depending on whether we want to make open or closed venation networks
      switch(this.settings.VenationPattern) {
        case "Open":
          // Find the closest vein segment, and also check if any segment has reached its auxin source
          for(let segment of closestSegments) {
            let distance = source.position.distance(segment.position);

            if(distance < this.settings.KillDistance) {
              source.reached = true;
              closestSegment = null;
              break;
            } else if(distance < record) {
              closestSegment = segment;
              record = distance;
            }
          }

          // "Bend" the nearest vein segment towards this auxin source
          if(closestSegment != null) {
            let nextDirection = source.position.subtract(closestSegment.position, true);
            nextDirection.normalize();
            closestSegment.direction.add(nextDirection);
            closestSegment.count++;
          }

          break;

        case "Closed": 
          // TODO: extend for "closed" venation by allowing this source to influence direction of ALL nearby segments, not just the closest one

          for(let segment of closestSegments) {
            let distance = source.position.distance(segment.position);

            if(distance < this.settings.KillDistance) {
              // TODO: associate this segment (and all its descendent segments) with this auxin source for tracking later
            }

            // TODO: find the "tips" of each vein segment moving towards this auxin source and "bend" them each towards it
          }

          break;
      }
    }

    // Remove auxin sources as soon as a vein reaches them
    // TODO: extend this logic for "closed" venation type by waiting until all veins influenced by this source reach the source
    for(let [index, source] of this.sources.entries()) {
      if(source.reached) {
        this.sources.splice(index, 1);
      }
    }

    // Add new vein segments to any segments that were influenced by an auxin source this 
    // iteration, pointed towards the average location of all the auxin sources influencing it
    for(let segment of this.segments) {
      if(segment.count > 0) {
        segment.direction.divide(segment.count + 1);
        this.segments.push(segment.nextSegment());
        segment.reset();
      }
    }

    // Rebuild spatial indices
    this.buildSpatialIndices();
  }

  draw() {
    // Draw vein segments
    if(this.settings.ShowVeins) {
      for(let segment of this.segments) {
        segment.draw();
      }
    }

    // Draw auxin sources
    if(this.settings.ShowSources) {
      for(let source of this.sources) {
        source.draw();
      }
    }
  }

  buildSpatialIndices() {
    this.sourcesIndex = new KDBush(this.sources, p => p.position.x, p => p.position.y);
    this.segmentsIndex = new KDBush(this.segments, p => p.position.x, p => p.position.y);
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
  }

  toggleSources() {
    this.settings.ShowSources = !this.settings.ShowSources;
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}