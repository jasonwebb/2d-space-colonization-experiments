import Defaults from './Defaults';

export default class Node {
  constructor(parent, position, isTip, ctx, settings, color = undefined) {
    this.parent = parent;       // reference to parent node, necessary for vein thickening later
    this.position = position;   // {vec2} of this node's position
    this.isTip = isTip;         // {boolean}
    this.ctx = ctx;             // global canvas context for drawing
    this.settings = Object.assign({}, Defaults, settings);
    this.color = color;         // color, usually passed down from parent

    this.influencedBy = [];     // references to all Attractors influencing this node each frame
    this.thickness = 0;         // thickness - this is increased during vein thickening process
  }

  draw() {
    if(this.parent != null) {
      // Smoothly ramp up opacity based on vein thickness
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = this.thickness / 3 + .2;
      }

      // "Lines" render mode
      if(this.settings.RenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        if(this.isTip && this.settings.ShowTips) {
          this.ctx.strokeStyle = this.settings.Colors.TipColor;
          this.ctx.lineWidth = this.settings.TipThickness;
        } else {
          if(this.color != undefined) {
            this.ctx.strokeStyle = this.color;
          } else {
            this.ctx.strokeStyle = this.settings.Colors.BranchColor;
          }

          this.ctx.lineWidth = this.settings.BranchThickness + this.thickness;
        }

        this.ctx.stroke();
        this.ctx.lineWidth = 1;

      // "Dots" render mode
      } else if(this.settings.RenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.position.x,
          this.position.y,
          1 + this.thickness / 2,
          1 + this.thickness / 2,
          0,
          0,
          Math.PI * 2
        );

        // Change color or "tip" nodes
        if(this.isTip && this.settings.ShowTips) {
          this.ctx.fillStyle = this.settings.Colors.TipColor;
        } else {
          this.ctx.fillStyle = this.settings.Colors.BranchColor;
        }

        this.ctx.fill();
      }

      // Reset global opacity if it was changed due to opacity gradient flag
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = 1;
      }
    }
  }

  // Create a new node in the provided direction and a pre-defined distance (SegmentLength)
  getNextNode(averageAttractorDirection) {
    this.isTip = false;
    this.nextPosition = this.position.add(averageAttractorDirection.multiply(this.settings.SegmentLength), true);

    return new Node(
      this,
      this.nextPosition,
      true,
      this.ctx,
      this.settings,
      this.color
    );
  }
}