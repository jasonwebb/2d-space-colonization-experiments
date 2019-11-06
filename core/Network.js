import Defaults from './Defaults';
import KDBush from 'kdbush';
import * as Vec2 from 'vec2';
import { random } from './Utilities';
import { Delaunay } from 'd3-delaunay';

export default class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);

    this.sources = [];
    this.segments = [];  // segments are discrete line segments that form veins

    this.buildSpatialIndices();
  }

  update() {
    // Skip iteration if paused
    if(this.settings.IsPaused) {
      return;
    }

    // Associate auxin sources with nearby vein segments to figure out where growth should occur
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, only associate the closest vein segment
        case "Open":
          let nearbySegments = this.segmentsIndex.within(source.position.x, source.position.y, this.settings.AttractionDistance).map(id => this.segments[id]),
            closestSegment = null,
            record = this.settings.AttractionDistance;

          // Find the closest vein segment
          for(let segment of nearbySegments) {
            let distance = segment.position.distance(source.position);

            if(distance < this.settings.KillDistance) {
              source.reached = true;
              closestSegment = null;
            } else if(distance < record) {
              closestSegment = segment;
              record = distance;
            }
          }

          // Associate it with this auxin source
          if(closestSegment != null) {
            closestSegment.influencedBy.push(sourceID);
          }

          break;


        // For closed venation, associate with segments within relative neighborhood
        case "Closed":
          let segmentsWithSource = this.segments.concat(source);

          // Only move forward if a Delaunay triangulation is possible
          if(segmentsWithSource.length < 3) {
            continue;
          }

          let delaunay = Delaunay.from(segmentsWithSource, p => p.position.x, p => p.position.y),
            adjacentNeighbors = delaunay.neighbors(segmentsWithSource.length - 1),
            adjacentNeighborIDs = [];  // get neighbors adjacent to source

          for(let id of adjacentNeighbors) {
            adjacentNeighborIDs.push(id);
          }

          for(let [segmentID, testSegment] of adjacentNeighborIDs.map(id => this.segments[id]).entries()) {  // testSegment = v
            for(let secondSegment of adjacentNeighborIDs.map(id => this.segments[id])) {  // secondSegment = u
              const vsDistance = testSegment.position.distance(source.position),     // ||v - s||
                usDistance = secondSegment.position.distance(source.position),       // ||u - s||
                vuDistance = testSegment.position.distance(secondSegment.position);  // ||v - u||

              // testSegment is a relative neighbor of source if and only if
              // ||v - s|| < max{||u - s||, ||v - u||}
              if(vsDistance < Math.max(usDistance, vuDistance)) {
                if(vsDistance < this.settings.AttractionDistance) {
                  testSegment.influencedBy.push(source);  // influencedBy helps to point next vein segment in the right direction
                  source.isInfluencing.push(segmentID);   // isInfluencing helps to track when segments have reached their sources

                  if(vsDistance < this.settings.KillDistance) {
                    testSegment.hasReachedSource = true;
                  }
                }
              }
            }
          }

          break;
      }
    }

    // Grow the network by adding new vein segments onto any segments
    for(let segment of this.segments) {
      if(this.segments.length < 2) {
        this.segments.push(segment.getNextSegment());

      } else if(segment.influencedBy.length > 0) {
        // Add up normalized vectors pointing to each auxin source
        let averageDirection = new Vec2(0,0);

        for(let source of segment.influencedBy.map(id => this.sources[id])) {
        // for(let source of segment.influencedBy) {
          averageDirection.add(source.position.subtract(segment.position, true).normalize());
        }

        // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating segments in the same place
        // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
        averageDirection.add(new Vec2(random(-.1, .1), random(-.1, .1))).normalize();

        averageDirection.divide(segment.influencedBy.length).normalize();

        // Generate a new vein segment using this direction
        let nextSegment = segment.getNextSegment(averageDirection);

        this.segments.push(nextSegment);
      }
    }

    // Remove any auxin sources that have been reached by their associated vein segments
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the source as soon as any vein segment reaches it
        case "Open":
          if(source.reached) {
            this.sources.splice(sourceID, 1);
          }

          break;

        // For closed venation, remove the source only when all associated vein segments have reached it
        case "Closed":
          if(source.isInfluencing.length > 0) {
            let allSegmentsReached = true;

            for(let segment of source.isInfluencing.map(id => this.segments[id])) {
              if(!segment.hasReachedSource) {
                allSegmentsReached = false;
              }
            }

            if(allSegmentsReached) {
              this.sources.splice(sourceID, 1);
            }

            source.isInfluencing = [];
          }

          break;
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