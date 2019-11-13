import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import SourcePatterns from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
import Bounds from '../../core/Bounds';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';

let canvas, ctx;
let network;
let bounds;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Set up bounding square
  setupBounds();

  // Setup Network with initial conditions
  setupNetwork();

  // Begin animation loop
  requestAnimationFrame(update);
}

let setupBounds = () => {
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let sideLength = 800;

  bounds = new Bounds(
    [
      [cx - sideLength/2, cy - sideLength/2],  // top left corner
      [cx + sideLength/2, cy - sideLength/2],  // top right corner
      [cx + sideLength/2, cy + sideLength/2],  // bottom right corner
      [cx - sideLength/2, cy + sideLength/2]   // bottom left corner
    ],
    ctx
  );
}

// Create the network with initial conditions
let setupNetwork = () => {
  // Initialize simulation object
  network = new Network(ctx);

  // Set up the auxin sources using pre-made patterns
  let randomSources = SourcePatterns.getRandomSources(500, ctx, bounds);
  let gridSources = SourcePatterns.getGridOfSources(60, 60, ctx, bounds);

  network.sources = gridSources;

  // Add a set of random root veins throughout scene
  for(let i=0; i<10; i++) {
    let x = random(window.innerWidth);
    let y = random(window.innerHeight);

    if((bounds != undefined && bounds.contains(x,y)) || bounds == undefined) {
      network.addVeinNode(
        new VeinNode(
          null,
          new Vec2(x, y),
          true,
          ctx
        )
      )
    }
  }

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}

// Main program loop
let update = (timestamp) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  network.update();
  network.draw();
  bounds.draw();

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case "r":
      setupNetwork();
      break;
  }
});


// Kick off the application
setup();