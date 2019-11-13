import AuxinSource from './AuxinSource';
import Vec2 from 'vec2';
import { random } from './Utilities';

export default class SourcePatterns {
  constructor() {}

  static getRandomSources(numSources, ctx, bounds = undefined) {
    let nodes = [];
    let x, y;

    for(let i=0; i<numSources; i++) {
      x = random(window.innerWidth);
      y = random(window.innerHeight);

      if((bounds != undefined && bounds.contains(x,y)) || bounds == undefined) {
        nodes.push(
          new AuxinSource(
            new Vec2(x, y),
            ctx
          )
        );
      }
    }

    return nodes;
  }

  static getGridOfSources(numRows, numColumns, ctx, bounds = undefined) {
    let nodes = [];
    let x, y;

    for(let i=0; i<=numRows; i++) {
      for(let j=0; j<=numColumns; j++) {
        x = (window.innerWidth / numColumns) * j + random(-10,10);
        y = (window.innerHeight / numRows) * i + random(-10,10);

        if((bounds != undefined && bounds.contains(x,y)) || bounds == undefined) {
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