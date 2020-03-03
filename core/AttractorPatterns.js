import Attractor from './Attractor';
import Vec2 from 'vec2';
import { random, map } from './Utilities';
var SimplexNoise = require('simplex-noise');

export function getRandomAttractors(numAttractors, ctx, bounds = undefined, obstacles = undefined) {
  let attractors = [];
  let x, y;
  let isInsideAnyBounds, isInsideAnyObstacle, isOnScreen;

  for(let i=0; i<numAttractors; i++) {
    x = random(window.innerWidth);
    y = random(window.innerHeight);
    isInsideAnyBounds = false;
    isInsideAnyObstacle = false;
    isOnScreen = false;

    // Only allow attractors that are in the viewport
    if(
      x > 0 &&
      x < window.innerWidth &&
      y > 0 &&
      y < window.innerHeight
    ) {
      isOnScreen = true;
    }

    // Only allow root nodes inside of defined bounds
    if(bounds != undefined && bounds.length > 0) {
      for(let bound of bounds) {
        if(bound.contains(x, y)) {
          isInsideAnyBounds = true;
        }
      }
    }

    // Don't allow any root nodes that are inside of an obstacle
    if(obstacles != undefined && obstacles.length > 0) {
      for(let obstacle of obstacles) {
        if(obstacle.contains(x, y)) {
          isInsideAnyObstacle = true;
        }
      }
    }

    if(
      (isInsideAnyBounds || bounds === undefined) &&
      (!isInsideAnyObstacle || obstacles === undefined)
    ) {
      attractors.push(
        new Attractor(
          new Vec2(x,y),
          ctx
        )
      );
    }
  }

  return attractors;
}

export function getGridOfAttractors(numRows, numColumns, ctx, jitterRange = 0, bounds = undefined, obstacles = undefined) {
  let attractors = [];
  let x, y;
  let isInsideAnyBounds, isInsideAnyObstacle, isOnScreen;

  for(let i=0; i<=numRows; i++) {
    for(let j=0; j<=numColumns; j++) {
      x = (window.innerWidth / numColumns) * j + random(-jitterRange, jitterRange);
      y = (window.innerHeight / numRows) * i + random(-jitterRange, jitterRange);
      isInsideAnyBounds = false;
      isInsideAnyObstacle = false;
      isOnScreen = false;

      // Only allow attractors that are in the viewport
      if(
        x > 0 &&
        x < window.innerWidth &&
        y > 0 &&
        y < window.innerHeight
      ) {
        isOnScreen = true;
      }

      // Only allow attractors inside of any of the defined bounds (if used)
      if(bounds != undefined && bounds.length > 0) {
        for(let bound of bounds) {
          if(bound.contains(x, y)) {
            isInsideAnyBounds = true;
          }
        }
      }

      // Don't allow any root nodes that are inside of an obstacle (if used)
      if(obstacles != undefined && obstacles.length > 0) {
        for(let obstacle of obstacles) {
          if(obstacle.contains(x, y)) {
            isInsideAnyObstacle = true;
          }
        }
      }

      if(
        isOnScreen &&
        (isInsideAnyBounds || bounds === undefined) &&
        (!isInsideAnyObstacle || obstacles === undefined)
      ) {
        attractors.push(
          new Attractor(
            new Vec2(x,y),
            ctx
          )
        );
      }
    }
  }

  return attractors;
}

export function getPhyllotaxisAttractors(ctx) {
  let attractors = [];
  let numCircles = 5000,
  golden_ratio = (Math.sqrt(5)+1)/2 - 1,
  golden_angle = golden_ratio * (2*Math.PI),
  circle_rad = window.innerWidth/2;


  for(let i=0; i<numCircles; i++) {
    let ratio = i / numCircles,
      angle = i * golden_angle,
      spiral_rad = ratio * circle_rad;

    attractors.push(
      new Attractor(
        new Vec2(
          window.innerWidth/2 + Math.cos(angle) * spiral_rad,
          window.innerHeight/2 + Math.sin(angle) * spiral_rad
        ),
        ctx
      )
    );
  }

  return attractors;
}

export function getWaveOfAttractors(ctx) {
  let attractors = [];
  let numRows = 70;
  let numColumns = 100;
  let rowSpacing = window.innerHeight / numRows;
  let colSpacing = window.innerWidth / numColumns;

  for(let row = 0; row < numRows; row++) {
    for(let col = 0; col < numColumns; col++) {
      attractors.push(
        new Attractor(
          new Vec2(
            (col * colSpacing) + (Math.sin(map(col, 0, numColumns, 0, Math.PI * 2)) * 200),
            (row * rowSpacing) + (Math.sin(map(row, 0, numRows, 0, Math.PI * 2)) * 50)
          ),
          ctx
        )
      )
    }
  }

  return attractors;
}

export function applyNoise(attractors) {
  let noise = new SimplexNoise();

  for(let attractor of attractors) {
    attractor.position.x += noise.noise2D(attractor.position.x, attractor.position.y) * 10;
    attractor.position.y += noise.noise2D(souattractorrce.position.x, attractor.position.y) * 10;
  }

  return attractors;
}