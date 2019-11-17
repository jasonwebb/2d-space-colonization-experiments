import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import SourcePatterns from '../../core/SourcePatterns';
import VeinNode from '../../core/VeinNode';
import Bounds from '../../core/Bounds';
import SVGLoader from '../../core/SVGLoader';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';

const leaf = require('../svg/leaf.svg');

let canvas, ctx;
let network;
let bounds;

const SQUARE = 0;
const CIRCLE = 1;
const LEAF = 2;
let currentBoundsShape = LEAF;

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
  switch(currentBoundsShape) {
    case SQUARE:
      bounds = getSquareBounds();
      break;

    case CIRCLE:
      bounds = getCircleBounds();
      break;

    case LEAF:
      bounds = getLeafBounds();
      break;
  }
}

let getSquareBounds = () => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const sideLength = 800;

  return new Bounds(
    [
      [cx - sideLength/2, cy - sideLength/2],  // top left corner
      [cx + sideLength/2, cy - sideLength/2],  // top right corner
      [cx + sideLength/2, cy + sideLength/2],  // bottom right corner
      [cx - sideLength/2, cy + sideLength/2]   // bottom left corner
    ],
    ctx
  );
}

let getCircleBounds = () => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const radius = 300;
  const resolution = 100;
  let points = [];

  for(let i = 0; i < resolution; i++) {
    let angle = 2 * Math.PI * i / resolution;
    let x = cx + Math.floor(radius * Math.cos(angle));
    let y = cy + Math.floor(radius * Math.sin(angle));

    points.push([x, y]);
  }

  return new Bounds(points, ctx);
}

let getLeafBounds = () => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const shapeWidth = 900;
  const shapeHeight = 900;

  let polygon = SVGLoader.load(leaf)[0];

  // Translate the design to the screen center
  for(let point of polygon) {
    point[0] = cx - shapeWidth/2 + point[0];
    point[1] = cy - shapeHeight/2 + point[1];
  }

  return new Bounds(polygon, ctx);
}

// Create the network with initial conditions
let setupNetwork = () => {
  // Initialize simulation object
  network = new Network(ctx);

  // Set up the auxin sources using pre-made patterns
  let randomSources = SourcePatterns.getRandomSources(500, ctx, bounds);
  let gridSources = SourcePatterns.getGridOfSources(80, 80, ctx, bounds);

  network.sources = gridSources;

  switch(currentBoundsShape) {
    case SQUARE:
    case CIRCLE:
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
          );
        }
      }

      break;

    case LEAF:
      // Put a single root note at the base of the leaf
      network.addVeinNode(
        new VeinNode(
          null,
          new Vec2(
            window.innerWidth / 2 - 5,
            window.innerHeight / 2 + 220
          ),
          true,
          ctx
        )
      );

      break;
  }

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);
}

// Main program loop
let update = (timestamp) => {
  network.update();
  network.drawBackground();
  bounds.draw();
  network.drawVeins();

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      setupNetwork();
      break;

    // b = toggle visibility of bounds
    case 'b':
      bounds.settings.ShowBounds = !bounds.settings.ShowBounds;
      break;

    case '1':
      currentBoundsShape = SQUARE;
      setupBounds();
      setupNetwork();
      break;

    case '2':
      currentBoundsShape = CIRCLE;
      setupBounds();
      setupNetwork();
      break;

    case '3':
      currentBoundsShape = LEAF;
      setupBounds();
      setupNetwork();
      break;
  }
});


// Kick off the application
setup();