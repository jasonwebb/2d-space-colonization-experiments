import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import Segment from '../../core/Segment';
import Source from '../../core/Source';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions'

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

  // Initialize auxin sources
  for(let i=0; i<2000; i++) {
    network.sources.push(
      new Source(
        new Vec2(
          random(window.innerWidth), 
          random(window.innerHeight)
        ),
        ctx
      )
    );
  }

  // Add an initial root vein at the bottom center of the screen
  network.segments.push(
    new Segment(
      null,
      new Vec2(window.innerWidth / 2, window.innerHeight),
      new Vec2(0, -1),
      ctx
    )
  )

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}


// Main program loop
let update = (timestamp) => {
  network.update();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
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