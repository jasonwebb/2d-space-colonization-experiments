import Defaults from './Defaults';
import KDBush from 'kdbush';
import * as Vec2 from 'vec2';
import { random } from './Utilities';

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

    // 1. Associate auxin source only with closest vein segment
    for(let [sourceID, source] of this.sources.entries()) {
      let nearbySegments = this.segmentsIndex.within(source.position.x, source.position.y, this.settings.AttractionDistance).map(id => this.segments[id]),
        closestSegment = null,
        record = this.settings.AttractionDistance;

      // a. Find the closest vein segment
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

      // b. Associate it with this auxin source
      if(closestSegment != null) {
        closestSegment.influencedBy.push(sourceID);
      }
    }


    for(let segment of this.segments) {
      if(segment.influencedBy.length > 0) {
        // 2. Add up normalized vectors pointing to each auxin source
        let averageDirection = new Vec2(0,0);

        for(let source of segment.influencedBy.map(id => this.sources[id])) {
          averageDirection.add(source.position.subtract(segment.position, true).normalize());
        }

        // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating segments in the same place
        // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
        averageDirection.add(new Vec2(random(-.1, .1), random(-.1, .1))).normalize();

        averageDirection.normalize().divide(segment.influencedBy.length).normalize();

        // 3. Generate a new vein segment using this direction
        let nextSegment = segment.getNextSegment(averageDirection);

        this.segments.push(nextSegment);
      }
    }

    // 4. Remove any auxin sources that have been reached by a vein segment
    for(let [index, source] of this.sources.entries()) {
      if(source.reached) {
        this.sources.splice(index, 1);
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