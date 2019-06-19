/**
 * Auxin source
 */
import Defaults from './Defaults';

export default class Source {
  constructor(position, ctx, settings = {}) {
    this.position = position;
    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);

    this.reached = false;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.ellipse(this.position.x, this.position.y, 5, 5, 0, 0, Math.PI * 2);
    this.ctx.fillStyle = '#ffa';
    this.ctx.fill();
  }
}