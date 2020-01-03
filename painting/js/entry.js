import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import { getRandomSources, getGridOfSources, applyNoise, getPhyllotaxisSources, getWaveOfSources } from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import Settings from './Settings';
import AuxinSource from '../../core/AuxinSource';

let canvas, ctx;
let network;

let showHelp = true;
let mouseX = 0;
let mouseY = 0;
let leftMouseIsDown = false;
let sourceRadius = 20;
let sourceQuantity = sourceRadius/2;
let maxRadius = 300;
let minRadius = 5;
let mouseLastMoved = Date.now();
let mouseTimeout = 2000;

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

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}

let drawText = () => {
  let text = [
    'Paint veins by clicking and dragging!',
    '',
    'Left click and drag for sources',
    'Right click to add "seed" vein',
    'Mouse wheel to increase/decrease radius',
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
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Painting', 20, 40);

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

  // Draw circle on mouse cursor for source spread radius
  if(Date.now() - mouseLastMoved < mouseTimeout) {
    ctx.beginPath();
    ctx.ellipse(mouseX, mouseY, sourceRadius, sourceRadius, 0, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(255,255,255,.4)';
    ctx.stroke();
  }

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

document.addEventListener('mousedown', (e) => {
  switch(e.button) {
    case 0:
      leftMouseIsDown = true;
      mouseLastMoved = Date.now();

      for(let i=0; i<sourceQuantity; i++) {
        let radius = random(-sourceRadius, sourceRadius);
        let angle = random(360);

        network.sources.push(
          new AuxinSource(
            new Vec2(
              e.clientX + Math.floor(radius * Math.cos(angle)),
              e.clientY + Math.floor(radius * Math.sin(angle))
            ),
            ctx,
            Settings
          )
        );
      }

      break;

    case 2:
      network.addVeinNode(
        new VeinNode(
          null,
          new Vec2(
            e.clientX,
            e.clientY
          ),
          true,
          ctx,
          Settings
        )
      );

      break;
  }
});

document.addEventListener('mouseup', (e) => {
  switch(e.button) {
    case 0:
      leftMouseIsDown = false;
      break;
  }
});

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if(leftMouseIsDown) {
    for(let i=0; i<sourceQuantity; i++) {
      let radius = random(-sourceRadius, sourceRadius);
      let angle = random(360);

      network.sources.push(
        new AuxinSource(
          new Vec2(
            e.clientX + Math.floor(radius * Math.cos(angle)),
            e.clientY + Math.floor(radius * Math.sin(angle))
          ),
          ctx,
          Settings
        )
      );
    }
  }

  mouseX = e.clientX;
  mouseY = e.clientY;
  mouseLastMoved = Date.now();
});

document.addEventListener('wheel', (e) => {
  if(
    sourceRadius + e.deltaY > minRadius &&
    sourceRadius + e.deltaY < maxRadius
  ) {
    sourceRadius += e.deltaY;
    sourceQuantity = sourceRadius/2;
  }

  mouseLastMoved = Date.now();
});


// Kick off the application
setup();