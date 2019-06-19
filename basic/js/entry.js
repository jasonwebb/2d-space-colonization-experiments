import * as Vec2 from 'vec2';
import Network from '../../core/Network';
import Segment from '../../core/Segment';
import Source from '../../core/Source';
import { random } from '../../core/Utilities';

let canvas, ctx;
let network;

let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new Network(ctx);

  // Initialize auxin sources
  for(let i=0; i<1500; i++) {
    network.sources.push(
      new Source(
        new Vec2(
          random(window.innerWidth), 
          random(window.innerHeight)
        ),
        ctx
      )
    );
  }

  // Add an initial root vein at the bottom center of the screen
  const rootSegment = new Segment(
                        null,
                        new Vec2(window.innerWidth / 2, window.innerHeight),
                        new Vec2(0, -1),
                        ctx
                      );
  network.segments.push(rootSegment);
  network.roots.push(rootSegment);

  network.initializeTrunks();

  // Begin animation loop
  requestAnimationFrame(update);
}

let update = (timestamp) => {
  network.update();

  clear();
  network.draw();

  requestAnimationFrame(update);
}

let clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setup();