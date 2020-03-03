import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import Node from '../../core/Node';
import Path from '../../core/Path';
import { setupKeyListeners } from '../../core/KeyboardInteractions';
import Attractor from '../../core/Attractor';
import SVGLoader from '../../core/SVGLoader';

let canvas, ctx;
let network;

const leaf = require('../svg/leaf.svg');
const grassBlade = require('../svg/grass-blade.svg');

let currentPath;

const LINE = 0;
const TRIANGLE = 1;
const SQUARE = 2;
const DIAMOND = 3;
const CIRCLE = 4;
const LEAF = 5;
let currentPathShape = SQUARE;

let yPosition = 0;

let showHelp = true;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new Network(ctx);

  // Load the defined path
  setupPath();

  // Add the bounds, attractors, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  setupKeyListeners(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addRootNodes();
}

  let setupPath = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    yPosition = cy;

    switch(currentPathShape) {
      case LINE:
        currentPath = getHorizontalLine();
        break;

      case TRIANGLE:
        currentPath = getTriangleBounds();
        break;

      case SQUARE:
        currentPath = getSquareBounds();
        break;

      case DIAMOND:
        currentPath = getDiamondBounds();
        break;

      case CIRCLE:
        currentPath = getCircleBounds();
        break;

      case LEAF:
        currentPath = getLeafBounds();
        break;
    }

    if(currentPathShape != LINE) {
      currentPath.isCentered = true;
      currentPath.setScale(.01);
    }
  }

    let getHorizontalLine = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      return new Path(
        [
          [cx - 400, cy + 400],
          [cx + 400, cy + 400]
        ],
        'Bounds',
        ctx
      );
    }

    let getTriangleBounds = () => {
      const sideLength = 200;

      return new Path(
        [
          [sideLength/2, 0],
          [sideLength, 3*sideLength/4],
          [0, 3*sideLength/4],
          [sideLength/2, 0]
        ],
        'Bounds',
        ctx
      )
    }

    let getSquareBounds = () => {
      const sideLength = 200;

      return new Path(
        [
          [0, 0],  // top left corner
          [sideLength, 0],  // top right corner
          [sideLength, sideLength],  // bottom right corner
          [0, sideLength],  // bottom left corner
          [0, 0],  // top left corner
        ],
        'Bounds',
        ctx
      );
    }

    let getDiamondBounds = () => {
      const sideLength = 200;

      return new Path(
        [
          [sideLength/2, 0],
          [sideLength, sideLength/2],
          [sideLength/2, sideLength],
          [0, sideLength/2],
          [sideLength/2, 0]
        ],
        'Bounds',
        ctx
      );
    }

    let getCircleBounds = () => {
      const radius = 100;
      const resolution = 50;
      let points = [];

      for(let i = 0; i < resolution; i++) {
        let angle = 2 * Math.PI * i / resolution;
        let x = radius + Math.floor(radius * Math.cos(angle));
        let y = radius + Math.floor(radius * Math.sin(angle));

        points.push([x, y]);
      }

      points.push([points[0][0], points[0][1]]);

      return new Path(points, 'Bounds', ctx);
    }

    let getLeafBounds = () => {
      return new Path(SVGLoader.load(leaf)[0], 'Bounds', ctx);
    }

    let getGrassBladeBounds = () => {
      return new Path(SVGLoader.load(grassBlade)[0], 'Bounds', ctx);
    }

  // Create the network with initial conditions
  let addRootNodes = () => {
    const cx = window.innerWidth/2;
    let cy = window.innerHeight/2;

    if(currentPathShape == LINE) {
      cy = window.innerHeight - 100;
    }

    network.addNode(
      new Node(
        null,
        new Vec2(
          cx,
          cy
        ),
        true,
        ctx
      )
    )
  }

  let movePath = () => {
    if(!network.settings.IsPaused && yPosition > -800) {
      currentPath.moveBy(0,-2);
      yPosition = currentPath.origin.y;
    }
  }

  let scalePath = () => {
    if(!network.settings.IsPaused) {
      currentPath.setScale(1.01);
    }
  }

  let rotatePath = () => {
    if(!network.settings.IsPaused) {
      // TODO: rotate path
    }
  }

  let generateAttractorsOnPath = () => {
    // network.attractors = createEvenlySpacedAttractors();
    network.attractors = createSubdividedAttractors();
  }

    let createEvenlySpacedAttractors = () => {
      let attractors = [];
      const attractorSpacing = 10;
      let previousSegmentRemainder = 0;

      // For each path segment ...
      for(let i=1; i<currentPath.transformedPolygon.length; i++) {
        const point0 = Vec2(currentPath.transformedPolygon[i-1][0], currentPath.transformedPolygon[i-1][1]);
        const point1 = Vec2(currentPath.transformedPolygon[i][0], currentPath.transformedPolygon[i][1]);
        const currentSegmentLength = point1.distance(point0);
        const startingOffset = attractorSpacing - previousSegmentRemainder;
        const availableLength = currentSegmentLength - startingOffset;

        // We can fit at least one attractor onto this segment
        if(availableLength >= attractorSpacing) {
          let segmentDirection = point1.subtract(point0, true).normalize();

          // How many attractors can we fit onto this segment?
          const numAttractors = Math.floor(availableLength / attractorSpacing);

          // Create as many attractors as we can
          for(let attractorIndex=0; attractorIndex<=numAttractors; attractorIndex++) {
            attractors.push(
              new Attractor(
                point0.add(segmentDirection.multiply(attractorSpacing * attractorIndex + startingOffset, true), true),
                ctx
              )
            );
          }

          // Store remainder of segment length to offset next segment's attractor placement
          previousSegmentRemainder = availableLength - (numAttractors * attractorSpacing);

        // Can't fit any attractors onto this segment, so accumulate the length (previous segments might've also been too short)
        } else {
          previousSegmentRemainder += currentSegmentLength;
        }
      }

      return attractors;
    }

    let createSubdividedAttractors = () => {
      let attractors = [];

      // Create attractors at each vertex
      for(let i=0; i<currentPath.transformedPolygon.length; i++) {
        attractors.push(
          new Attractor(
            new Vec2(
              currentPath.transformedPolygon[i][0],
              currentPath.transformedPolygon[i][1]
            ),
            ctx
          )
        );
      }

      let newAttractors = [];

      // Recursively subdivide segments
      for(let i=1; i<attractors.length; i++) {
        const point0 = attractors[i-1].position;
        const point1 = attractors[i].position;
        subdivideSegment(point0, point1, i, newAttractors);
      }

      // Reverse the new attractors list so that indices don't shift as they are inserted
      newAttractors.sort((a,b) => {
        return b.index - a.index;
      });

      // Inject all the new attractors
      for(let newAttractor of newAttractors) {
        attractors.splice(newAttractor.index, 0, newAttractor.attractor);
      }

      return attractors;
    }

      // Split a segment (defined by two input points) by placing a attractor at it's midpoint
      let subdivideSegment = (point0, point1, originalIndex, newAttractors) => {
        const segmentLength = point1.distance(point0);

        // Only subdivide the segment if its long enough (terminates recursion in short segments)
        if(segmentLength > 20) {
          let midpointAttractor = getMidpointAttractor(point0, point1, segmentLength);
          newAttractors.push({
            index: originalIndex,
            attractor: midpointAttractor
          });

          // Recursively subdivide the new segments
          subdivideSegment(point0, midpointAttractor.position, originalIndex, newAttractors); // subdivide the left segment
          subdivideSegment(midpointAttractor.position, point1, originalIndex, newAttractors); // subdivide the right segment
        }
      }

      // Generate a new attractor exactly halfway between two others
      let getMidpointAttractor = (point0, point1, segmentLength) => {
        const segmentDirection = point1.subtract(point0, true).normalize();

        return new Attractor(
          point0.add(segmentDirection.multiply(segmentLength/2, true), true),
          ctx
        );
      }

let drawText = () => {
  let text = [
    'Attractors can be placed on the edges of paths,',
    'creating growth as they are scaled.',
    '',
    '1 = horizontal line moving upwards',
    '2 = triangle',
    '3 = square',
    '4 = diamond',
    '5 = circle',
    '6 = a leaf',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'n = toggle node visibility',
    'a = toggle attractor visibility',
    'z = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Marginal Growth', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  for(let i=0; i<text.length; i++) {
    ctx.fillText(text[i], 20, 22*i + 80);
  }
}

// Main program loop
let update = (timestamp) => {
  if(!network.settings.IsPaused) {
    if(currentPathShape == LINE) {
      movePath();
    }

    if(currentPathShape != LINE) {
      scalePath();
    }

    generateAttractorsOnPath();

    network.update();
  }

  network.draw();
  currentPath.draw();

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
      currentPathShape = LINE;
      setupPath();
      resetNetwork();
      break;

    case '2':
      currentPathShape = TRIANGLE;
      setupPath();
      resetNetwork();
      break;

    case '3':
      currentPathShape = SQUARE;
      setupPath();
      resetNetwork();
      break;

    case '4':
      currentPathShape = DIAMOND;
      setupPath();
      resetNetwork();
      break;

    case '5':
      currentPathShape = CIRCLE;
      setupPath();
      resetNetwork();
      break;

    case '6':
      currentPathShape = LEAF;
      setupPath();
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();