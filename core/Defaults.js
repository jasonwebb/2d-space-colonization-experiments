export default {
  /**
   * Simulation configurations
   */

  OpenCells: true,          // venation can be "open" (true) or "closed" (false)
  SegmentLength: 10,        // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 100,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 10,         // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,


  /**
   * Rendering configurations
   */

  // Visibility toggles
  ShowSources: true,
  ShowVeins: true,

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Veins
  MinimumVeinThickness: 1,

  // Auxin sources
  AuxinRadius: 2
}