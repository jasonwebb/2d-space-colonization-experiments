import * as Vec2 from 'vec2';
import Network from '../../../core/Network';
import Node from '../../../core/Node';
import Attractor from '../../../core/Attractor';
import Path from '../../../core/Path';
import { random } from '../../../core/Utilities';
import { setupKeyListeners } from '../../../core/KeyboardInteractions';
import Settings from './Settings';
import { GreekStatue, GreekStatueExtents } from './AttractorPatterns';

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

    // Scale the coordinates to fit within the window
    const scale = Math.min(
      window.innerWidth / GreekStatueExtents.width,
      window.innerHeight / GreekStatueExtents.height
    ) * 0.8; // 0.8 to leave some margin

    // Center the pattern in the middle of the window
    const offsetX = (window.innerWidth - (GreekStatueExtents.width * scale)) / 2;
    const offsetY = (window.innerHeight - (GreekStatueExtents.height * scale)) / 2;

    for(let coords of GreekStatue) {
      const x = (coords[0] - GreekStatueExtents.minX) * scale + offsetX;
      const y = (coords[1] - GreekStatueExtents.minY) * scale + offsetY;
      
      attractors.push(
        new Attractor(
          new Vec2(x, y),
          ctx,
          Settings
        )
      );
    }

    network.attractors = attractors;
  
    for(let attractor of network.attractors) {
      attractor.settings = network.settings;
    }
  }

  // Create the network with initial conditions
  let addRootNodes = () => {
    network.addNode(
      new Node(
        null,
        new Vec2(
          window.innerWidth/2 - 190,
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