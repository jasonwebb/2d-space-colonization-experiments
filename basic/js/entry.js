import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import VeinNode from '../../core/VeinNode';
import AuxinSource from '../../core/AuxinSource';
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

  // Generate randomly-placed auxin sources
  // for(let i=0; i<500; i++) {
  //   network.sources.push(
  //     new AuxinSource(
  //       new Vec2(
  //         random(window.innerWidth),
  //         random(window.innerHeight)
  //       ),
  //       ctx
  //     )
  //   );
  // }

  // Generate grid of auxin sources
  const xResolution = 50,
    yResolution = 50;

  for(let i=0; i<window.innerWidth / xResolution; i++) {
    for(let j=0; j<window.innerHeight / yResolution; j++) {
      network.sources.push(
        new AuxinSource(
          new Vec2(
            i * xResolution,
            j * yResolution
          ),
          ctx
        )
      );
    }
  }

  // Add an initial root vein at the bottom center of the screen
  // network.addVeinNode(
  //   new VeinNode(
  //     null,
  //     new Vec2(window.innerWidth / 2, window.innerHeight / 2),
  //     true,
  //     ctx
  //   )
  // );

  for(let i=0; i<10; i++) {
    network.addVeinNode(
      new VeinNode(
        null,
        new Vec2(random(window.innerWidth), random(window.innerHeight)),
        true,
        ctx
      )
    )
  }

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}


// Main program loop
let update = (timestamp) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
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