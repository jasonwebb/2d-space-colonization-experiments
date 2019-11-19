import AuxinSource from './AuxinSource';
import Vec2 from 'vec2';
import { random } from './Utilities';
import Path from './Path';

export default class SourcePatterns {
  constructor() {}

  static getRandomSources(numSources, ctx, bounds = undefined, obstacles = undefined) {
    let nodes = [];
    let x, y;
    let ok;

    for(let i=0; i<numSources; i++) {
      x = random(window.innerWidth);
      y = random(window.innerHeight);
      ok = true;

      // Only put root veins inside the bounds
      if(bounds != undefined && bounds.length > 0) {
        for(let bound of bounds) {
          if(bound.contains(x,y)) {
            ok = true;
          }
        }
      }

      // Don't put root veins inside of obstacles
      if(obstacles != undefined && obstacles.length > 0) {
        for(let obstacle of obstacles) {
          if(!obstacle.contains(x,y)) {
            ok = true;
          }
        }
      }

      if(ok) {
        nodes.push(
          new AuxinSource(
            new Vec2(x,y),
            ctx
          )
        );
      }
    }

    return nodes;
  }

  static getGridOfSources(numRows, numColumns, ctx, bounds = undefined, obstacles = undefined) {
    let nodes = [];
    let x, y;
    let ok;

    for(let i=0; i<=numRows; i++) {
      for(let j=0; j<=numColumns; j++) {
        x = (window.innerWidth / numColumns) * j + random(-10,10);
        y = (window.innerHeight / numRows) * i + random(-10,10);
        ok = false;

        // Only put root veins inside the bounds
        if(bounds != undefined && bounds.length > 0) {
          for(let bound of bounds) {
            if(bound.contains(x,y)) {
              ok = true;
            }
          }
        }

        // Don't put root veins inside of obstacles
        if(obstacles != undefined && obstacles.length > 0) {
          for(let obstacle of obstacles) {
            if(obstacle.contains(x,y)) {
              ok = false;
            }
          }
        }

        if(ok) {
          nodes.push(
            new AuxinSource(
              new Vec2(x,y),
              ctx
            )
          );
        }
      }
    }

    return nodes;
  }
}