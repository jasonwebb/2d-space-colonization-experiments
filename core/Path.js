import Defaults from './Defaults';

let inside = require('point-in-polygon');

export default class Path {
  constructor(polygon, type, ctx, settings) {
    this.polygon = polygon;
    this.ctx = ctx;
    this.type = type;

    this.origin = {x:0, y:0};
    this.scale = 1;

    this.settings = Object.assign({}, Defaults, settings);
  }

  contains(x, y) {
    return inside([x, y], this.polygon);
  }

  moveBy(x, y) {
    this.origin.x += x;
    this.origin.y += y;
  }

  moveTo(x, y) {
    this.origin.x = x;
    this.origin.y = y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.polygon[0][0] + this.origin.x, this.polygon[0][1] + this.origin.y);

    for(let i = 0; i < this.polygon.length; i++) {
      this.ctx.lineTo(this.polygon[i][0] + this.origin.x, this.polygon[i][1] + this.origin.y);
    }

    this.ctx.lineTo(this.polygon[0][0] + this.origin.x, this.polygon[0][1] + this.origin.y);

    switch(this.type) {
      case 'Bounds':
        this.ctx.strokeStyle = this.settings.Colors.BoundsBorderColor;
        this.ctx.lineWidth = this.settings.BoundsBorderThickness;
        this.ctx.fillStyle = this.settings.Colors.BoundsFillColor;

        this.ctx.stroke();
        this.ctx.lineWidth = 1;

        break;

      case 'Obstacle':
        this.ctx.fillStyle = this.settings.Colors.ObstacleFillColor;
        break;
    }

    this.ctx.fill();
  }
}