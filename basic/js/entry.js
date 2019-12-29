import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import { getRandomSources, getGridOfSources, applyNoise, getPhyllotaxisSources, getWaveOfSources } from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
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

  // Set up the auxin sources using pre-made patterns
  let randomSources = getRandomSources(500, ctx, 10);
  let gridSources = getGridOfSources(150, 100, ctx, 10);
  let phyllotaxisSources = getPhyllotaxisSources(ctx);
  let waveSources = getWaveOfSources(ctx);

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
    'randomly placed sources and randomly',
    'placed vein roots.',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'v = toggle vein visibility',
    's = toggle source visibility',
    'a = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle vein tips',
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