import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import Node from '../../core/Node';
import Attractor from '../../core/Attractor';
import Path from '../../core/Path';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import Settings from './Settings';
import { GreekStatue } from './AttractorPatterns';

let canvas, ctx;
let network;

let showHelp = false;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new Network(ctx, Settings);

  // Add the bounds, attractors, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addAttractors();
  addRootNodes();
}

  let addAttractors = () => {
    let attractors = [];

    for(let coords of GreekStatue) {
      attractors.push(
        new Attractor(
          new Vec2(
            coords[0]*1.5 - 1300,
            coords[1]*1.5 - 200
          ),
          ctx,
          Settings
        )
      );
    }

    network.attractors = attractors;
  }

  // Create the network with initial conditions
  let addRootNodes = () => {
    network.addNode(
      new Node(
        null,
        new Vec2(
          window.innerWidth/2 - 440,
          window.innerHeight/2 + 100
        ),
        false,
        ctx,
        Settings
      )
    );

    // network.addNode(
    //   new Node(
    //     null,
    //     new Vec2(
    //       window.innerWidth/2 + 200,
    //       window.innerHeight/2
    //     ),
    //     false,
    //     ctx,
    //     Settings
    //   )
    // );
  }

let drawText = () => {
  let text = [
    'Attractors placed based on image data.',
    '',
    '1 = square',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'v = toggle branch visibility',
    's = toggle attractor visibility',
    'a = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Images', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  for(let i=0; i<text.length; i++) {
    ctx.fillText(text[i], 20, 22*i + 80);
  }
}

// Main program loop
let update = (timestamp) => {
  network.update();
  network.draw();

  if(showHelp) {
    drawText();
  }

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      resetNetwork();
      break;

    // h = toggle help text
    case 'h':
      showHelp = !showHelp;
      break;

    case '1':
      currentImage = SQUARE;
      resetNetwork();
      break;
  }
});


// Kick off the application
setup();