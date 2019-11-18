export function setupKeyListeners(networks) {
  if(!(networks instanceof Array)) {
    networks = [networks];
  }

  document.addEventListener('keypress', (e) => {
    switch(e.key) {
      // Space = pause/unpause
      case ' ':
        for(let network of networks) {
          network.togglePause();
        }

        break;

      // v = toggle vein visibility
      case 'v':
        for(let network of networks) {
          network.toggleVeins();
        }

        break;

      // s = toggle auxin source visibility
      case 's':
        for(let network of networks) {
          network.toggleSources();
        }

        break;

      // a = toggle attraction zone visibility
      case 'a':
        for(let network of networks) {
          network.toggleAttractionZones();
        }

        break;

      // t = toggle vein tip visibility
      case 't':
        for(let network of networks) {
          network.toggleVeinTips();
        }

        break;

      // k = toggle kill zone visibility
      case 'k':
        for(let network of networks) {
          network.toggleKillZones();
        }

        break;

      // i = toggle influence lines visibility
      case 'i':
        for(let network of networks) {
          network.toggleInfluenceLines();
        }

        break;

      // b = toggle bounds visibility
      case 'b':
        for(let network of networks) {
          network.toggleBounds();
        }

        break;

      // o = toggle obstacles visibility
      case 'o':
        for(let network of networks) {
          network.toggleObstacles();
        }

        break;
    }
  });
}