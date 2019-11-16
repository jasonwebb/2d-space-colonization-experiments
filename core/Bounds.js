import Defaults from './Defaults';

let inside = require('point-in-polygon');

export default class Bounds {
  constructor(polygon, ctx, settings) {
    this.polygon = polygon;
    this.ctx = ctx;

    this.settings = Object.assign({}, Defaults, settings);
  }

  contains(x, y) {
    return inside([x, y], this.polygon);
  }

  draw() {
    if(this.settings.ShowBounds) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.polygon[0][0], this.polygon[0][1]);

      for(let i = 0; i < this.polygon.length; i++) {
        this.ctx.lineTo(this.polygon[i][0], this.polygon[i][1]);
      }

      this.ctx.lineTo(this.polygon[0][0], this.polygon[0][1]);

      this.ctx.strokeStyle = this.settings.Colors.BoundsColor;
      this.ctx.stroke();
    }
  }
}