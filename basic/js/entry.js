import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import { getRandomAttractors, getGridOfAttractors, applyNoise, getPhyllotaxisAttractors, getWaveOfAttractors } from '../../core/AttractorPatterns';
import Node from '../../core/Node';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import Settings from './Settings';

let canvas, ctx;
let network;

let showHelp = true;

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
  network = new Network(ctx, Settings);

  // Set up the attractors using pre-made patterns
  let randomAttractors = getRandomAttractors(500, ctx, 10);
  let gridAttractors = getGridOfAttractors(150, 100, ctx, 10);
  let phyllotaxisAttractors = getPhyllotaxisAttractors(ctx);
  let waveAttractors = getWaveOfAttractors(ctx);

  network.attractors = gridAttractors;

  // Add a set of random root nodes throughout scene
  for(let i=0; i<10; i++) {
    network.addNode(
      new Node(
        null,
        new Vec2(
          random(window.innerWidth),
          random(window.innerHeight)
        ),
        true,
        ctx,
        Settings
      )
    )
  }

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}

let drawText = () => {
  let text = [
    'No colors, no fancy vein thickness, just',
    'randomly placed attractors and randomly',
    'placed root nodes.',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'b = toggle branch visibility',
    'a = toggle attractor visibility',
    'z = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillText('Basic', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,.5)';
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
    case "r":
      setupNetwork();
      break;

    // h = toggle help text
    case 'h':
      showHelp = !showHelp;
      break;
  }
});


// Kick off the application
setup();