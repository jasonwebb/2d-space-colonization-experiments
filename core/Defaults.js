export default {
  ClosedCells: true,    // venation can be "open" (false) or "closed" (true)
  SegmentLength: 10,
  InfluenceRadius: 5,   // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 10      // distance (d_k) between auxin sources and segments when segments are ended
}