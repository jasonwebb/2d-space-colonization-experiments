import Defaults from './Defaults';

export default class Segment {
  constructor(parent, position, direction, ctx, settings) {
    this.parent = parent;
    this.position = position;
    this.direction = direction;

    this.originalDirection = this.direction.clone();
    this.count = 0;

    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);
  }

  draw() {
    if(this.parent != null) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.position.x, this.position.y);
      this.ctx.lineTo(this.parent.position.x, this.parent.position.y);
      this.ctx.strokeStyle = '#333';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
    }
  }

  reset() {
    this.direction = this.originalDirection;
    this.count = 0;
  }

  nextSegment() {
    let nextDirection = this.direction.multiply(this.settings.SegmentLength, true),
        nextPosition = this.position.add(nextDirection, true);
    return new Segment(this, nextPosition, this.direction.clone(), this.ctx, this.settings);
  }
}