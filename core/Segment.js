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
    if(this.settings.VeinRenderMode == 'Lines' && this.parent != null) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.position.x, this.position.y);
      this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

      // TODO: vary vein thickness based on algorithm
      this.ctx.strokeStyle = '#333';
      this.ctx.lineWidth = this.settings.MinimumVeinThickness;
      this.ctx.stroke();
    } else if(this.settings.VeinRenderMode == 'Dots') {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);  // TODO: vary dot radius based on algorithm
  
      this.ctx.fillStyle = '#000';
      this.ctx.fill();
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