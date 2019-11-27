import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import { getRandomSources, getGridOfSources } from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
import Path from '../../core/Path';
import SVGLoader from '../../core/SVGLoader';
import { setupKeyListeners } from '../../core/KeyboardInteractions';

let canvas, ctx;
let network;

let currentPath;

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

    currentPath = new Path(
      [
        [cx - 400, cy + 200],
        [cx + 400, cy + 200]
      ],
      'Bounds',
      ctx
    );
  }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
  }

  let movePath = () => {
    if(!network.settings.IsPaused) {
      currentPath.moveBy(0,-.5);
    }
  }

  let generateSourcesOnPath = () => {
    let sources = [];

    network.sources = sources;
  }

// Main program loop
let update = (timestamp) => {
  movePath();
  generateSourcesOnPath();

  network.update();
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