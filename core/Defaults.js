export default {
  /**
   * Simulation configurations
   */

  ClosedCells: true,        // venation can be "open" (false) or "closed" (true)
  SegmentLength: 10,        // length of each vein segment. Higher numbers mean smoother lines, but more computation cost
  AttractionDistance: 100,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 10,         // distance (d_k) between auxin sources and segments when segments are ended


  /**
   * Rendering configurations
   */

  // Visibility toggles
  ShowSources: true,
  ShowVeins: true,

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Veins
  VeinThickness: 2,

  // Auxin sources
  AuxinRadius: 2
}