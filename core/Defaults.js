export default {
  /**
   * Simulation configurations
   */

  VenationPattern: "Open",  // venation can be "Open" or "Closed"
  SegmentLength: 5,        // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 100,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 10,         // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,          // pause/unpause state


  /**
   * Rendering configurations
   */

  // Visibility toggles
  ShowSources: true,
  ShowVeins: true,
  ShowVeinTips: false,

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Veins
  MinimumVeinThickness: 1,

  // Auxin sources
  AuxinRadius: 2
}