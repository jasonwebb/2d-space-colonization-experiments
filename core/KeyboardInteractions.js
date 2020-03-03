import { exportSVG } from "./Utilities";

export function setupKeyListeners(network) {
  document.addEventListener('keypress', (e) => {
    switch(e.key) {
      // Space = pause/unpause
      case ' ':
        network.togglePause();
        break;

      // b = toggle branch visibility
      case 'b':
        network.toggleBranches();
        break;

      // a = toggle attractor visibility
      case 'a':
        network.toggleAttractors();
        break;

      // z = toggle attraction zone visibility
      case 'z':
        network.toggleAttractionZones();
        break;

      // t = toggle tip visibility
      case 't':
        network.toggleTips();
        break;

      // k = toggle kill zone visibility
      case 'k':
        network.toggleKillZones();
        break;

      // i = toggle influence lines visibility
      case 'i':
        network.toggleInfluenceLines();
        break;

      // b = toggle bounds visibility
      case 'b':
        network.toggleBounds();
        break;

      // o = toggle obstacles visibility
      case 'o':
        network.toggleObstacles();
        break;

      // e = export an SVG file of all visible geometry
      case 'e':
        exportSVG(network);
        break;

      // c = toggle auxin flux canalization
      case 'c':
        network.toggleCanalization();
        break;

      // p = toggle opacity blending
      case 'p':
        network.toggleOpacityBlending();
        break;
    }
  });
}