import Defaults from './Defaults';
import * as Vec2 from 'vec2';

export default class Segment {
  constructor(parent, position, direction, isTip, ctx, settings) {
    this.parent = parent;
    this.position = position;
    this.direction = direction;
    this.isTip = isTip;
    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);

    this.influencedBy = [];
    this.nextDirection = new Vec2(0,0);
    this.nextPosition;
  }

  draw() {
    if(this.parent != null) {
      if(this.settings.VeinRenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = this.settings.MinimumVeinThickness;  // TODO: vary vein thickness based on algorithm
        
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = '#ff0000';
          this.ctx.lineWidth = 3;
        }

        this.ctx.stroke();

      } else if(this.settings.VeinRenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);  // TODO: vary dot radius based on algorithm
    
        if(this.isTip) {
          this.ctx.fillStyle = '#ff0000';
        } else {
          this.ctx.fillStyle = '#000';
        }

        this.ctx.fill();
      }
    }
  }

  getNextSegment(averageSourceDirection) {
    this.isTip = false;
    // this.nextDirection = this.direction.add(averageSourceDirection, true).normalize();
    this.nextDirection = averageSourceDirection;
    this.nextPosition = this.position.add(this.nextDirection.multiply(this.settings.SegmentLength), true);
    this.influencedBy = [];

    return new Segment(
      this,
      this.nextPosition,
      this.nextDirection,
      true, 
      this.ctx, 
      this.settings
    );
  }
}