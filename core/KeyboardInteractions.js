export function setupKeyListeners(networks) {
  if(!(networks instanceof Array)) {
    networks = [networks];
  }

  document.addEventListener('keypress', (e) => {
    switch(e.key) {
      // Space = pause/unpause
      case " ":
        for(let network of networks) {
          network.togglePause();
        }

        break;

      // v = toggle vein visibility
      case "v":
        for(let network of networks) {
          network.toggleVeins();
        }

        break;

      // s = toggle auxin source visibility
      case "s":
        for(let network of networks) {
          network.toggleSources();
        }

        break;
    }
  });
}