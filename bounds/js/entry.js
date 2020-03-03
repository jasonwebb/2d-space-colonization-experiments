import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import { getRandomAttractors, getGridOfAttractors } from '../../core/AttractorPatterns';
import Node from '../../core/Node';
import Path from '../../core/Path';
import SVGLoader from '../../core/SVGLoader';
import { random } from '../../core/Utilities';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import Settings from './Settings';

const leaf = require('../svg/leaf.svg');
const veinsText = require('../svg/veins-text.svg');

let canvas, ctx;
let network;

const SQUARE = 0;
const CIRCLE = 1;
const LEAF = 2;
const VEINSTEXT = 3;
let currentBoundsShape = CIRCLE;

let showHelp = true;

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
  addBounds();
  addAttractors();
  addRootNodes();
}

  let addBounds = () => {
    switch(currentBoundsShape) {
      case SQUARE:
        network.bounds = getSquareBounds();
        break;

      case CIRCLE:
        network.bounds = getCircleBounds();
        break;

      case LEAF:
        network.bounds = getLeafBounds();
        break;

      case VEINSTEXT:
        network.bounds = getVeinsTextBounds();
        break;
    }
  }

    let getSquareBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const sideLength = 800;

      return [new Path(
        [
          [cx - sideLength/2, cy - sideLength/2],  // top left corner
          [cx + sideLength/2, cy - sideLength/2],  // top right corner
          [cx + sideLength/2, cy + sideLength/2],  // bottom right corner
          [cx - sideLength/2, cy + sideLength/2]   // bottom left corner
        ],
        'Bounds',
        ctx,
        Settings
      )];
    }

    let getCircleBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const radius = 350;
      const resolution = 100;
      let points = [];

      for(let i = 0; i < resolution; i++) {
        let angle = 2 * Math.PI * i / resolution;
        let x = cx + Math.floor(radius * Math.cos(angle));
        let y = cy + Math.floor(radius * Math.sin(angle));

        points.push([x, y]);
      }

      return [new Path(points, 'Bounds', ctx, Settings)];
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

      return [new Path(polygon, 'Bounds', ctx, Settings)];
    }

    let getVeinsTextBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const shapeWidth = 900;
      const shapeHeight = 900;

      let polygons = SVGLoader.load(veinsText);
      let bounds = [];

      for(let polygon of polygons) {
        // Translate the design to the screen center
        for(let point of polygon) {
          point[0] = cx - shapeWidth/2 + point[0];
          point[1] = cy - shapeHeight/2 + point[1];
        }

        bounds.push(new Path(polygon, 'Bounds', ctx, Settings));
      }

      return bounds;
    }

  let addAttractors = () => {
    // Set up the attractors using pre-made patterns
    let randomAttractors = getRandomAttractors(500, ctx, 10, network.bounds);
    let gridAttractors = getGridOfAttractors(150, 150, ctx, 10, network.bounds);

    network.attractors = gridAttractors;
  }

  // Create the network with initial conditions
  let addRootNodes = () => {
    let branchColors = [
      Settings.UsePerBranchColors ? 'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) + ')' : undefined,
      Settings.UsePerBranchColors ? 'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) + ')' : undefined,
      Settings.UsePerBranchColors ? 'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) + ')' : undefined,
      Settings.UsePerBranchColors ? 'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) + ')' : undefined,
      Settings.UsePerBranchColors ? 'rgb(' + random(100,255) + ',' + random(100,255) + ',' + random(100,255) + ')' : undefined
    ];

    switch(currentBoundsShape) {
      case SQUARE:
      case CIRCLE:
        // Add a set of random root nodes throughout scene
        for(let i=0; i<13; i++) {
          network.addNode(
            new Node(
              null,
              new Vec2(
                random(window.innerWidth),
                random(window.innerHeight)
              ),
              true,
              ctx,
              Settings,
              branchColors[i % branchColors.length]
            )
          );
        }

        break;

      case LEAF:
        // Put a single root note at the base of the leaf
        network.addNode(
          new Node(
            null,
            new Vec2(
              window.innerWidth / 2 - 5,
              window.innerHeight / 2 + 220
            ),
            true,
            ctx,
            Settings,
            branchColors[0]
          )
        );

        break;

      case VEINSTEXT:
        // V
        network.addNode(
          new Node(
            null,
            new Vec2(
              window.innerWidth / 2 - 330,
              window.innerHeight / 2 + 70
            ),
            true,
            ctx,
            Settings,
            branchColors[0]
          )
        );

        // E
        network.addNode(
          new Node(
            null,
            new Vec2(
              window.innerWidth / 2 - 200,
              window.innerHeight / 2
            ),
            true,
            ctx,
            Settings,
            branchColors[1]
          )
        );

        // I
        network.addNode(
          new Node(
            null,
            new Vec2(
              window.innerWidth / 2,
              window.innerHeight / 2
            ),
            true,
            ctx,
            Settings,
            branchColors[2]
          )
        );

        // N
        network.addNode(
          new Node(
            null,
            new Vec2(
              window.innerWidth / 2 + 100,
              window.innerHeight / 2
            ),
            true,
            ctx,
            Settings,
            branchColors[3]
          )
        );

        // S
        network.addNode(
          new Node(
            null,
            new Vec2(
              window.innerWidth / 2 + 410,
              window.innerHeight / 2
            ),
            true,
            ctx,
            Settings,
            branchColors[4]
          )
        );

        break;
    }
  }

let drawText = () => {
  let text = [
    'Shapes can be used to constrain growth.',
    '',
    '1 = square',
    '2 = circle',
    '3 = a leaf',
    '4 = the word "veins"',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'n = toggle node visibility',
    'a = toggle attractor visibility',
    'a = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillText('Bounds', 20, 40);

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
    case 'r':
      resetNetwork();
      break;

    // h = toggle help text
    case 'h':
      showHelp = !showHelp;
      break;

    case '1':
      currentBoundsShape = SQUARE;
      resetNetwork();
      break;

    case '2':
      currentBoundsShape = CIRCLE;
      resetNetwork();
      break;

    case '3':
      currentBoundsShape = LEAF;
      resetNetwork();
      break;

    case '4':
      currentBoundsShape = VEINSTEXT;
      resetNetwork();
      break;
  }
});


// Kick off the application
setup();