import { Light, Dark, Custom } from '../../core/ColorPresets';

export default {
  /**
    Sketch variables
  */
  UsePerBranchColors: false,


  /**
    Simulation configurations
  */

  VenationType: 'Closed',        // venation can be "Open" or "Closed"
  SegmentLength: 5,              // length of each branch segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 50,        // radius of influence (d_i) around each attractor that attracts nodes
  KillDistance: 5,               // distance (d_k) between attractor and nodes when branches are ended
  IsPaused: false,               // initial pause/unpause state
  EnableCanalization: true,      // turns on/off auxin flux canalization (line segment thickening)
  EnableOpacityBlending: false,  // turns on/off opacity


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowAttractors: true,        // toggled with 'a'
  ShowNodes: true,             // toggled with 'n'
  ShowTips: false,             // toggled with 't'
  ShowAttractionZones: false,  // toggled with 'z'
  ShowKillZones: false,        // toggled with 'k'
  ShowInfluenceLines: true,    // toggled with 'i'
  ShowBounds: false,           // toggled with 'b'
  ShowObstacles: false,        // toggled with 'o'

  // Modes
  RenderMode: 'Lines',  // draw branch segments as "Lines" or "Dots"

  // Colors
  Colors: Dark,

  // Line thicknesses
  BranchThickness: 1,
  TipThickness: 2,
  BoundsBorderThickness: 1
}