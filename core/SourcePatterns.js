import AuxinSource from './AuxinSource';
import Vec2 from 'vec2';
import { random } from './Utilities';

export default class SourcePatterns {
  constructor() {}

  static getRandomSources(numSources, ctx) {
    let nodes = [];

    for(let i=0; i<numSources; i++) {
      nodes.push(
        new AuxinSource(
          new Vec2(
            random(window.innerWidth),
            random(window.innerHeight),
          ),
          ctx
        )
      );
    }

    return nodes;
  }

  static getGridOfSources(numRows, numColumns, ctx) {
    let nodes = [];

    for(let i=0; i<=numRows; i++) {
      for(let j=0; j<=numColumns; j++) {
        nodes.push(
          new AuxinSource(
            new Vec2(
              (window.innerWidth / numColumns) * j,
              (window.innerHeight / numRows) * i
            ),
            ctx
          )
        );
      }
    }

    return nodes;
  }
}