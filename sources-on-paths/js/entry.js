import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import VeinNode from '../../core/VeinNode';
import Path from '../../core/Path';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import AuxinSource from '../../core/AuxinSource';

let canvas, ctx;
let network;

let currentPath;

let yPosition = 0;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new Network(ctx);

  // Add the bounds, sources, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  setupPath();
  addRootVeins();
}

  let setupPath = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    yPosition = cy;

    currentPath = new Path(
      [
        [cx - 400, cy + 400],
        [cx + 400, cy + 400]
      ],
      'Bounds',
      ctx
    );
  }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;

    network.addVeinNode(
      new VeinNode(
        null,
        new Vec2(
          cx,
          cy + 400
        ),
        true,
        ctx
      )
    )
  }

  let movePath = () => {
    if(!network.settings.IsPaused && yPosition > -800) {
      currentPath.moveBy(0,-2);
      yPosition = currentPath.origin.y;
    }
  }

  let generateSourcesOnPath = () => {
    let sources = [];
    const sourceSpacing = 10;
    let totalPathLength = currentPath.getTotalLength();
    const numberOfSources = totalPathLength / sourceSpacing;
    let previousSegmentRemainder = 0;

    // For each path segment ...
    for(let i=1; i<currentPath.polygon.length; i++) {
      const point0 = Vec2(currentPath.polygon[i-1][0] + currentPath.origin.x, currentPath.polygon[i-1][1] + currentPath.origin.y);
      const point1 = Vec2(currentPath.polygon[i][0] + currentPath.origin.x, currentPath.polygon[i][1] + currentPath.origin.y);
      const currentSegmentLength = point1.distance(point0);
      const availableLength = currentSegmentLength - previousSegmentRemainder;

      // We can fit at least one source onto this segment
      if(availableLength >= sourceSpacing) {
        let segmentDirection = point1.subtract(point0, true).normalize();

        // How many sources can we fit onto this segment?
        const numSources = Math.floor(availableLength / sourceSpacing);

        // Create as many auxin sources as we can
        for(let sourceIndex=0; sourceIndex<=numSources; sourceIndex++) {
          sources.push(
            new AuxinSource(
              point0.add(segmentDirection.multiply(sourceSpacing * sourceIndex, true), true),
              ctx
            )
          );
        }

        // Store remainder of segment length to offset next segment's source placement
        previousSegmentRemainder = numberOfSources * sourceSpacing;

      // Can't fit any sources onto this segment, so accumulate the length (previous segments might've also been too short)
      } else {
        previousSegmentRemainder += currentSegmentLength;
      }
    }

    network.sources = sources;
  }

// Main program loop
let update = (timestamp) => {
  if(!network.settings.IsPaused) {
    movePath();
    generateSourcesOnPath();

    network.update();
  }

  network.draw();
  currentPath.draw();

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();