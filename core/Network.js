import Defaults from './Defaults';

export default class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);

    this.sources = [];   // sources are locations of auxin, the growth hormone
    this.segments = [];  // segments are discrete line segments that form veins
    this.roots = [];     // roots are locations where growth begins
  }

  update() {
    // For each auxin source ...
    for(let source of this.sources) {
      let closestSegment = null,
        record = this.settings.AttractionDistance;

      // Check if any vein segment is near enough to trigger removal of auxin source
      // TODO: implement knn searching by putting segments into spatial index
      for(let segment of this.segments) {
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

      // "Bend" the vein growth towards the nearest branch
      if(closestSegment != null) {
        let nextDirection = source.position.subtract(closestSegment.position, true);
        nextDirection.normalize();
        closestSegment.direction.add(nextDirection);
        closestSegment.count++;
      }
    }

    // Remove auxin sources as soon as a vein reaches them
    for(let [index, source] of this.sources.entries()) {
      if(source.reached) {
        this.sources.splice(index, 1);
      }
    }

    for(let segment of this.segments) {
      if(segment.count > 0) {
        segment.direction.divide(segment.count + 1);
        this.segments.push(segment.nextSegment());
        segment.reset();
      }
    }
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

  initializeTrunks() {
    // For each root vein segment ...
    for(let root of this.roots) {
      let currentSegment = root;
      let found = false;

      // Start searching for auxin sources ...
      while(!found) {
        // Check if root segment is within kill distance of any auxin source
        for(let source of this.sources) {
          const distance = currentSegment.position.distance(source.position);

          if(distance < this.settings.KillDistance) {
            found = true;
          }
        }

        // If not in kill range of a source, grow the vein
        if(!found) {
          let nextSegment = currentSegment.nextSegment();
          currentSegment = nextSegment;
          this.segments.push(currentSegment);
        }

        // Prevent infinite loops caused by too few auxin sources
        if(currentSegment.position.x < 0 || currentSegment.position.x > window.innerWidth || currentSegment.position.y < 0 || currentSegment.position.y > window.innerHeight) {
          console.log("Missed all sources");
          break;
        }
      }
    }
  }
}