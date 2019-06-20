export function setupKeyListeners(networks) {
  document.addEventListener('keyup', (e) => {
    switch(e.key) {
      case " ":
        for(let network of networks) {
          network.togglePause();
        }

        break;

      case "r":

        break;

      case "v":
        for(let network of networks) {
          network.toggleVeins();
        }

        break;

      case "s":
        for(let network of networks) {
          network.toggleSources();
        }

        break;
    }
  });
}