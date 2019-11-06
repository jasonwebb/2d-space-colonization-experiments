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
    this.hasReachedSource = false;
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

        // If showing tips, override with thicker red styles
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = '#ff0000';
          this.ctx.lineWidth = 2;
        }

        this.ctx.stroke();

      } else if(this.settings.VeinRenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);  // TODO: vary dot radius based on algorithm

        this.ctx.fillStyle = '#000';

        // If showing tips, override fill to be red
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.fillStyle = '#ff0000';
        }

        this.ctx.fill();
      }
    }
  }

  getNextSegment(averageSourceDirection) {
    this.isTip = false;

    if(averageSourceDirection == undefined) {
      this.nextDirection = this.direction.clone();
    } else {
      // this.nextDirection = this.direction.add(averageSourceDirection, true).normalize();  // curly variant
      this.nextDirection = averageSourceDirection;
    }

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