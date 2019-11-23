import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import SourcePatterns from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';

let canvas, ctx;
let network;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setup Network with initial conditions
  setupNetwork();

  // Begin animation loop
  requestAnimationFrame(update);
}

// Create the network with initial conditions
let setupNetwork = () => {
  // Initialize simulation object
  network = new Network(ctx);

  // Set up the auxin sources using pre-made patterns
  let randomSources = SourcePatterns.getRandomSources(500, ctx, 10);
  let gridSources = SourcePatterns.getGridOfSources(60, 60, ctx, 10);

  network.sources = gridSources;

  // Add a set of random root veins throughout scene
  for(let i=0; i<10; i++) {
    network.addVeinNode(
      new VeinNode(
        null,
        new Vec2(
          random(window.innerWidth),
          random(window.innerHeight)
        ),
        true,
        ctx,
        undefined,
        'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) + ')'
      )
    )
  }

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}

// Main program loop
let update = (timestamp) => {
  network.update();
  network.draw();

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