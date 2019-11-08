/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./basic/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./basic/js/entry.js":
/*!***************************!*\
  !*** ./basic/js/entry.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_VeinNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/VeinNode */ "./core/VeinNode.js");
/* harmony import */ var _core_AuxinSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/AuxinSource */ "./core/AuxinSource.js");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");







let canvas, ctx;
let network;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Setup Network with initial conditions
  setupNetwork();

  // Begin animation loop
  requestAnimationFrame(update);
}


// Create the network with initial conditions
let setupNetwork = () => {
  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Generate randomly-placed auxin sources
  for(let i=0; i<2000; i++) {
    network.sources.push(
      new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_3__["default"](
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerWidth),
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerHeight)
        ),
        ctx
      )
    );
  }

  // Generate grid of auxin sources
  // const xResolution = 100,
  //   yResolution = 20;

  // for(let i=0; i<window.innerWidth / xResolution; i++) {
  //   for(let j=0; j<window.innerHeight / yResolution; j++) {
  //     network.sources.push(
  //       new AuxinSource(
  //         new Vec2(
  //           i * xResolution,
  //           j * yResolution
  //         ),
  //         ctx
  //       )
  //     );
  //   }
  // }

  // Add an initial root vein at the bottom center of the screen
  let node = new _core_VeinNode__WEBPACK_IMPORTED_MODULE_2__["default"](
    null,
    new vec2__WEBPACK_IMPORTED_MODULE_0__(window.innerWidth / 2, window.innerHeight / 2),
    new vec2__WEBPACK_IMPORTED_MODULE_0__(0, -1),
    true,
    ctx
  );

  network.nodes.push(node);

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__["setupKeyListeners"])(network);
}


// Main program loop
let update = (timestamp) => {
  console.log('test2');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  network.update();
  network.draw();

  requestAnimationFrame(update);
}


// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case "r":
      setupNetwork();
      break;
  }
});


// Kick off the application
setup();

/***/ }),

/***/ "./core/AuxinSource.js":
/*!*****************************!*\
  !*** ./core/AuxinSource.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuxinSource; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class AuxinSource {
  constructor(position, ctx, settings = {}) {
    this.position = position;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.isInfluencing = [];
  }

  draw() {
    // Draw the attraction zone
    if(this.settings.ShowAttractionZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.AttractionDistance, this.settings.AttractionDistance, 0, 0, Math.PI * 2);
      this.ctx.globalAlpha = .01;
      this.ctx.fillStyle = '#f00';
      this.ctx.fill();
    }

    // Draw the auxin source
    this.ctx.beginPath();
    this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);
    this.ctx.globalAlpha = .2;
    this.ctx.fillStyle = '#000';
    this.ctx.fill();

    this.ctx.globalAlpha = 1;
  }
}

/***/ }),

/***/ "./core/Defaults.js":
/*!**************************!*\
  !*** ./core/Defaults.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Simulation configurations
   */

  VenationType: 'Open',    // venation can be "Open" or "Closed"
  SegmentLength: 5,        // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 50,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 10,        // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,         // pause/unpause state


  /**
   * Rendering configurations
   */

  // Visibility toggles
  ShowSources: true,
  ShowVeins: true,
  ShowVeinTips: true,
  ShowAttractionZones: false,

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Veins
  MinimumVeinThickness: 1,

  // Auxin sources
  AuxinRadius: 3
});

/***/ }),

/***/ "./core/KeyboardInteractions.js":
/*!**************************************!*\
  !*** ./core/KeyboardInteractions.js ***!
  \**************************************/
/*! exports provided: setupKeyListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupKeyListeners", function() { return setupKeyListeners; });
function setupKeyListeners(networks) {
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

/***/ }),

/***/ "./core/Network.js":
/*!*************************!*\
  !*** ./core/Network.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Network; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");
/* harmony import */ var kdbush__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kdbush */ "./node_modules/kdbush/src/index.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");
/* harmony import */ var d3_delaunay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-delaunay */ "./node_modules/d3-delaunay/src/index.js");






class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.sources = [];  // sources (AuxinSources) attract vein nodes
    this.nodes = [];    // nodes (VeinNodes) are connected to form veins

    this.buildSpatialIndices();
  }

  update() {
    // Skip iteration if paused
    if(this.settings.IsPaused) {
      return;
    }

    // Associate auxin sources with nearby vein nodes to figure out where growth should occur
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, only associate the closest vein node
        case "Open":
          let nearbyNodes = this.nodesIndex.within(source.position.x, source.position.y, this.settings.AttractionDistance).map(id => this.nodes[id]),
            closestNode = null,
            record = this.settings.AttractionDistance;

          // Find the closest vein node
          for(let node of nearbyNodes) {
            let distance = node.position.distance(source.position);

            if(distance < this.settings.KillDistance) {
              source.reached = true;
              closestNode = null;
            } else if(distance < record) {
              closestNode = node;
              record = distance;
            }
          }

          // Associate it with this auxin source
          if(closestNode != null) {
            closestNode.influencedBy.push(sourceID);
          }

          break;


        // For closed venation, associate with nodes within relative neighborhood
        case "Closed":
          let nodesWithSource = this.nodes.concat(source);

          // Only move forward if a Delaunay triangulation is possible
          if(nodesWithSource.length < 3) {
            continue;
          }

          let delaunay = d3_delaunay__WEBPACK_IMPORTED_MODULE_4__["Delaunay"].from(nodesWithSource, p => p.position.x, p => p.position.y),
            adjacentNeighbors = delaunay.neighbors(nodesWithSource.length - 1),
            adjacentNeighborIDs = [];  // get neighbors adjacent to source

          for(let id of adjacentNeighbors) {
            adjacentNeighborIDs.push(id);
          }

          for(let [nodeID, testNode] of adjacentNeighborIDs.map(id => this.nodes[id]).entries()) {  // testNode = v
            for(let secondNode of adjacentNeighborIDs.map(id => this.nodes[id])) {  // secondNode = u
              const vsDistance = testNode.position.distance(source.position),     // ||v - s||
                usDistance = secondNode.position.distance(source.position),       // ||u - s||
                vuDistance = testNode.position.distance(secondNode.position);  // ||v - u||

              // testNode is a relative neighbor of source if and only if
              // ||v - s|| < max{||u - s||, ||v - u||}
              if(vsDistance < Math.max(usDistance, vuDistance)) {
                if(vsDistance < this.settings.AttractionDistance) {
                  testNode.influencedBy.push(source);  // influencedBy helps to point next vein node in the right direction
                  source.isInfluencing.push(nodeID);   // isInfluencing helps to track when nodes have reached their sources

                  if(vsDistance < this.settings.KillDistance) {
                    testNode.hasReachedSource = true;
                  }
                }
              }
            }
          }

          break;
      }
    }

    // Grow the network by adding new vein nodes onto any nodes
    for(let node of this.nodes) {
      if(this.nodes.length < 2) {
        this.nodes.push(node.getNextNode());

      } else if(node.influencedBy.length > 0) {
        // Add up normalized vectors pointing to each auxin source
        let averageDirection = new vec2__WEBPACK_IMPORTED_MODULE_2__(0,0);

        for(let source of node.influencedBy.map(id => this.sources[id])) {
        // for(let source of node.influencedBy) {
          averageDirection.add(source.position.subtract(node.position, true).normalize());
        }

        // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating nodes in the same place
        // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
        averageDirection.add(new vec2__WEBPACK_IMPORTED_MODULE_2__(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1))).normalize();

        averageDirection.divide(node.influencedBy.length).normalize();

        // Generate a new vein node using this direction
        let nextNode = node.getNextNode(averageDirection);

        this.nodes.push(nextNode);
      }
    }

    // Remove any auxin sources that have been reached by their associated vein nodes
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the source as soon as any vein node reaches it
        case "Open":
          if(source.reached) {
            this.sources.splice(sourceID, 1);
          }

          break;

        // For closed venation, remove the source only when all associated vein nodes have reached it
        case "Closed":
          if(source.isInfluencing.length > 0) {
            let allNodesReached = true;

            for(let node of source.isInfluencing.map(id => this.nodes[id])) {
              if(!node.hasReachedSource) {
                allNodesReached = false;
              }
            }

            if(allNodesReached) {
              this.sources.splice(sourceID, 1);
            }

            source.isInfluencing = [];
          }

          break;
      }
    }

    // Rebuild spatial indices
    this.buildSpatialIndices();
  }

  draw() {
    // Draw vein nodes
    if(this.settings.ShowVeins) {
      for(let node of this.nodes) {
        node.draw();
      }
    }

    // Draw auxin sources
    if(this.settings.ShowSources) {
      for(let source of this.sources) {
        source.draw();
      }
    }
  }

  buildSpatialIndices() {
    this.nodesIndex = new kdbush__WEBPACK_IMPORTED_MODULE_1__["default"](this.nodes, p => p.position.x, p => p.position.y);
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
  }

  toggleSources() {
    this.settings.ShowSources = !this.settings.ShowSources;
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}

/***/ }),

/***/ "./core/Utilities.js":
/*!***************************!*\
  !*** ./core/Utilities.js ***!
  \***************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.random() * (max - min) + min;
}

/***/ }),

/***/ "./core/VeinNode.js":
/*!**************************!*\
  !*** ./core/VeinNode.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VeinNode; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);



class VeinNode {
  constructor(parent, position, direction, isTip, ctx, settings) {
    this.parent = parent;
    this.position = position;
    this.direction = direction;
    this.isTip = isTip;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencedBy = [];
    this.hasReachedSource = false;
    this.nextDirection = new vec2__WEBPACK_IMPORTED_MODULE_1__(0,0);
    this.nextPosition;
  }

  draw() {
    console.log('test');
    if(this.parent != null) {
      if(this.settings.VeinRenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = this.settings.MinimumVeinThickness;  // TODO: vary vein thickness based on algorithm

        // If showing tips, override with thicker red styles
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = '#ff0000';
          this.ctx.lineWidth = 2;
        }

        this.ctx.stroke();

      } else if(this.settings.VeinRenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);  // TODO: vary dot radius based on algorithm

        this.ctx.fillStyle = '#000';

        // If showing tips, override fill to be red
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.fillStyle = '#ff0000';
        }

        this.ctx.fill();
      }
    }
  }

  getNextSegment(averageSourceDirection) {
    this.isTip = false;

    if(averageSourceDirection == undefined) {
      this.nextDirection = this.direction.clone();
    } else {
      // this.nextDirection = this.direction.add(averageSourceDirection, true).normalize();  // curly variant
      this.nextDirection = averageSourceDirection;
    }

    this.nextPosition = this.position.add(this.nextDirection.multiply(this.settings.SegmentLength), true);
    this.influencedBy = [];

    return new VeinNode(
      this,
      this.nextPosition,
      this.nextDirection,
      true,
      this.ctx,
      this.settings
    );
  }
}

/***/ }),

/***/ "./node_modules/d3-delaunay/src/delaunay.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-delaunay/src/delaunay.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delaunay; });
/* harmony import */ var delaunator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! delaunator */ "./node_modules/delaunator/index.js");
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-delaunay/src/path.js");
/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polygon.js */ "./node_modules/d3-delaunay/src/polygon.js");
/* harmony import */ var _voronoi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voronoi.js */ "./node_modules/d3-delaunay/src/voronoi.js");





const tau = 2 * Math.PI;

function pointX(p) {
  return p[0];
}

function pointY(p) {
  return p[1];
}

class Delaunay {
  constructor(points) {
    const {halfedges, hull, triangles} = new delaunator__WEBPACK_IMPORTED_MODULE_0__["default"](points);
    this.points = points;
    this.halfedges = halfedges;
    this.hull = hull;
    this.triangles = triangles;
    const inedges = this.inedges = new Int32Array(points.length / 2).fill(-1);
    const outedges = this.outedges = new Int32Array(points.length / 2).fill(-1);

    // Compute an index from each point to an (arbitrary) incoming halfedge.
    for (let e = 0, n = halfedges.length; e < n; ++e) {
      inedges[triangles[e % 3 === 2 ? e - 2 : e + 1]] = e;
    }

    // For points on the hull, index both the incoming and outgoing halfedges.
    let node0, node1 = hull;
    do {
      node0 = node1, node1 = node1.next;
      inedges[node1.i] = node0.t;
      outedges[node0.i] = node1.t;
    } while (node1 !== hull);
  }
  voronoi(bounds) {
    return new _voronoi_js__WEBPACK_IMPORTED_MODULE_3__["default"](this, bounds);
  }
  *neighbors(i) {
    const {inedges, outedges, halfedges, triangles} = this;
    const e0 = inedges[i];
    if (e0 === -1) return; // coincident point
    let e = e0;
    do {
      yield triangles[e];
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) return; // bad triangulation
      e = halfedges[e];
      if (e === -1) return yield triangles[outedges[i]];
    } while (e !== e0);
  }
  find(x, y, i = 0) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return -1;
    let c;
    while ((c = this._step(i, x, y)) >= 0 && c !== i) i = c;
    return c;
  }
  _step(i, x, y) {
    const {inedges, points} = this;
    if (inedges[i] === -1) return -1; // coincident point
    let c = i;
    let dc = (x - points[i * 2]) ** 2 + (y - points[i * 2 + 1]) ** 2;
    for (const t of this.neighbors(i)) {
      const dt = (x - points[t * 2]) ** 2 + (y - points[t * 2 + 1]) ** 2;
      if (dt < dc) dc = dt, c = t;
    }
    return c;
  }
  render(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {points, halfedges, triangles} = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = triangles[i] * 2;
      const tj = triangles[j] * 2;
      context.moveTo(points[ti], points[ti + 1]);
      context.lineTo(points[tj], points[tj + 1]);
    }
    this.renderHull(context);
    return buffer && buffer.value();
  }
  renderPoints(context, r = 2) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {points} = this;
    for (let i = 0, n = points.length; i < n; i += 2) {
      const x = points[i], y = points[i + 1];
      context.moveTo(x + r, y);
      context.arc(x, y, r, 0, tau);
    }
    return buffer && buffer.value();
  }
  renderHull(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {hull} = this;
    let node = hull;
    context.moveTo(node.x, node.y);
    while (node = node.next, node !== hull) context.lineTo(node.x, node.y);
    context.closePath();
    return buffer && buffer.value();
  }
  hullPolygon() {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.renderHull(polygon);
    return polygon.value();
  }
  renderTriangle(i, context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_1__["default"] : undefined;
    const {points, triangles} = this;
    const t0 = triangles[i *= 3] * 2;
    const t1 = triangles[i + 1] * 2;
    const t2 = triangles[i + 2] * 2;
    context.moveTo(points[t0], points[t0 + 1]);
    context.lineTo(points[t1], points[t1 + 1]);
    context.lineTo(points[t2], points[t2 + 1]);
    context.closePath();
    return buffer && buffer.value();
  }
  *trianglePolygons() {
    const {triangles} = this;
    for (let i = 0, n = triangles.length / 3; i < n; ++i) {
      yield this.trianglePolygon(i);
    }
  }
  trianglePolygon(i) {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.renderTriangle(i, polygon);
    return polygon.value();
  }
}

Delaunay.from = function(points, fx = pointX, fy = pointY, that) {
  return new Delaunay("length" in points
      ? flatArray(points, fx, fy, that)
      : Float64Array.from(flatIterable(points, fx, fy, that)));
};

function flatArray(points, fx, fy, that) {
  const n = points.length;
  const array = new Float64Array(n * 2);
  for (let i = 0; i < n; ++i) {
    const p = points[i];
    array[i * 2] = fx.call(that, p, i, points);
    array[i * 2 + 1] = fy.call(that, p, i, points);
  }
  return array;
}

function* flatIterable(points, fx, fy, that) {
  let i = 0;
  for (const p of points) {
    yield fx.call(that, p, i, points);
    yield fy.call(that, p, i, points);
    ++i;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-delaunay/src/index.js ***!
  \***********************************************/
/*! exports provided: Delaunay, Voronoi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delaunay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delaunay.js */ "./node_modules/d3-delaunay/src/delaunay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delaunay", function() { return _delaunay_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _voronoi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voronoi.js */ "./node_modules/d3-delaunay/src/voronoi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Voronoi", function() { return _voronoi_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./node_modules/d3-delaunay/src/path.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-delaunay/src/path.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
const epsilon = 1e-6;

class Path {
  constructor() {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
  }
  moveTo(x, y) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  }
  lineTo(x, y) {
    this._ += `L${this._x1 = +x},${this._y1 = +y}`;
  }
  arc(x, y, r) {
    x = +x, y = +y, r = +r;
    const x0 = x + r;
    const y0 = y;
    if (r < 0) throw new Error("negative radius");
    if (this._x1 === null) this._ += `M${x0},${y0}`;
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) this._ += "L" + x0 + "," + y0;
    if (!r) return;
    this._ += `A${r},${r},0,1,1,${x - r},${y}A${r},${r},0,1,1,${this._x1 = x0},${this._y1 = y0}`;
  }
  rect(x, y, w, h) {
    this._ += `M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${+w}v${+h}h${-w}Z`;
  }
  value() {
    return this._ || null;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/polygon.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-delaunay/src/polygon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
class Polygon {
  constructor() {
    this._ = [];
  }
  moveTo(x, y) {
    this._.push([x, y]);
  }
  closePath() {
    this._.push(this._[0].slice());
  }
  lineTo(x, y) {
    this._.push([x, y]);
  }
  value() {
    return this._.length ? this._ : null;
  }
}


/***/ }),

/***/ "./node_modules/d3-delaunay/src/voronoi.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-delaunay/src/voronoi.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Voronoi; });
/* harmony import */ var _path_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./path.js */ "./node_modules/d3-delaunay/src/path.js");
/* harmony import */ var _polygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polygon.js */ "./node_modules/d3-delaunay/src/polygon.js");



class Voronoi {
  constructor(delaunay, [xmin, ymin, xmax, ymax] = [0, 0, 960, 500]) {
    if (!((xmax = +xmax) >= (xmin = +xmin)) || !((ymax = +ymax) >= (ymin = +ymin))) throw new Error("invalid bounds");
    const {points, hull, triangles} = this.delaunay = delaunay;
    const circumcenters = this.circumcenters = new Float64Array(triangles.length / 3 * 2);
    const vectors = this.vectors = new Float64Array(points.length * 2);
    this.xmax = xmax, this.xmin = xmin;
    this.ymax = ymax, this.ymin = ymin;

    // Compute circumcenters.
    for (let i = 0, j = 0, n = triangles.length; i < n; i += 3, j += 2) {
      const t1 = triangles[i] * 2;
      const t2 = triangles[i + 1] * 2;
      const t3 = triangles[i + 2] * 2;
      const x1 = points[t1];
      const y1 = points[t1 + 1];
      const x2 = points[t2];
      const y2 = points[t2 + 1];
      const x3 = points[t3];
      const y3 = points[t3 + 1];
      const a2 = x1 - x2;
      const a3 = x1 - x3;
      const b2 = y1 - y2;
      const b3 = y1 - y3;
      const d1 = x1 * x1 + y1 * y1;
      const d2 = d1 - x2 * x2 - y2 * y2;
      const d3 = d1 - x3 * x3 - y3 * y3;
      const ab = (a3 * b2 - a2 * b3) * 2;
      circumcenters[j] = (b2 * d3 - b3 * d2) / ab;
      circumcenters[j + 1] = (a3 * d2 - a2 * d3) / ab;
    }

    // Compute exterior cell rays.
    let node = hull;
    let p0, p1 = node.i * 4;
    let x0, x1 = node.x;
    let y0, y1 = node.y;
    do {
      node = node.next, p0 = p1, x0 = x1, y0 = y1, p1 = node.i * 4, x1 = node.x, y1 = node.y;
      vectors[p0 + 2] = vectors[p1] = y0 - y1;
      vectors[p0 + 3] = vectors[p1 + 1] = x1 - x0;
    } while (node !== hull);
  }
  render(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    const {delaunay: {halfedges, hull}, circumcenters, vectors} = this;
    for (let i = 0, n = halfedges.length; i < n; ++i) {
      const j = halfedges[i];
      if (j < i) continue;
      const ti = Math.floor(i / 3) * 2;
      const tj = Math.floor(j / 3) * 2;
      const xi = circumcenters[ti];
      const yi = circumcenters[ti + 1];
      const xj = circumcenters[tj];
      const yj = circumcenters[tj + 1];
      this._renderSegment(xi, yi, xj, yj, context);
    }
    let node = hull;
    do {
      node = node.next;
      const t = Math.floor(node.t / 3) * 2;
      const x = circumcenters[t];
      const y = circumcenters[t + 1];
      const v = node.i * 4;
      const p = this._project(x, y, vectors[v + 2], vectors[v + 3]);
      if (p) this._renderSegment(x, y, p[0], p[1], context);
    } while (node !== hull);
    return buffer && buffer.value();
  }
  renderBounds(context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    context.rect(this.xmin, this.ymin, this.xmax - this.xmin, this.ymax - this.ymin);
    return buffer && buffer.value();
  }
  renderCell(i, context) {
    const buffer = context == null ? context = new _path_js__WEBPACK_IMPORTED_MODULE_0__["default"] : undefined;
    const points = this._clip(i);
    if (points === null) return;
    context.moveTo(points[0], points[1]);
    for (let i = 2, n = points.length; i < n; i += 2) {
      context.lineTo(points[i], points[i + 1]);
    }
    context.closePath();
    return buffer && buffer.value();
  }
  *cellPolygons() {
    const {delaunay: {points}} = this;
    for (let i = 0, n = points.length / 2; i < n; ++i) {
      const cell = this.cellPolygon(i);
      if (cell) yield cell;
    }
  }
  cellPolygon(i) {
    const polygon = new _polygon_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.renderCell(i, polygon);
    return polygon.value();
  }
  _renderSegment(x0, y0, x1, y1, context) {
    let S;
    const c0 = this._regioncode(x0, y0);
    const c1 = this._regioncode(x1, y1);
    if (c0 === 0 && c1 === 0) {
      context.moveTo(x0, y0);
      context.lineTo(x1, y1);
    } else if (S = this._clipSegment(x0, y0, x1, y1, c0, c1)) {
      context.moveTo(S[0], S[1]);
      context.lineTo(S[2], S[3]);
    }
  }
  contains(i, x, y) {
    if ((x = +x, x !== x) || (y = +y, y !== y)) return false;
    return this.delaunay._step(i, x, y) === i;
  }
  _cell(i) {
    const {circumcenters, delaunay: {inedges, halfedges, triangles}} = this;
    const e0 = inedges[i];
    if (e0 === -1) return null; // coincident point
    const points = [];
    let e = e0;
    do {
      const t = Math.floor(e / 3);
      points.push(circumcenters[t * 2], circumcenters[t * 2 + 1]);
      e = e % 3 === 2 ? e - 2 : e + 1;
      if (triangles[e] !== i) break; // bad triangulation
      e = halfedges[e];
    } while (e !== e0 && e !== -1);
    return points;
  }
  _clip(i) {
    const points = this._cell(i);
    if (points === null) return null;
    const {vectors: V} = this;
    const v = i * 4;
    return V[v] || V[v + 1]
        ? this._clipInfinite(i, points, V[v], V[v + 1], V[v + 2], V[v + 3])
        : this._clipFinite(i, points);
  }
  _clipFinite(i, points) {
    const n = points.length;
    let P = null;
    let x0, y0, x1 = points[n - 2], y1 = points[n - 1];
    let c0, c1 = this._regioncode(x1, y1);
    let e0, e1;
    for (let j = 0; j < n; j += 2) {
      x0 = x1, y0 = y1, x1 = points[j], y1 = points[j + 1];
      c0 = c1, c1 = this._regioncode(x1, y1);
      if (c0 === 0 && c1 === 0) {
        e0 = e1, e1 = 0;
        if (P) P.push(x1, y1);
        else P = [x1, y1];
      } else {
        let S, sx0, sy0, sx1, sy1;
        if (c0 === 0) {
          if ((S = this._clipSegment(x0, y0, x1, y1, c0, c1)) === null) continue;
          [sx0, sy0, sx1, sy1] = S;
        } else {
          if ((S = this._clipSegment(x1, y1, x0, y0, c1, c0)) === null) continue;
          [sx1, sy1, sx0, sy0] = S;
          e0 = e1, e1 = this._edgecode(sx0, sy0);
          if (e0 && e1) this._edge(i, e0, e1, P, P.length);
          if (P) P.push(sx0, sy0);
          else P = [sx0, sy0];
        }
        e0 = e1, e1 = this._edgecode(sx1, sy1);
        if (e0 && e1) this._edge(i, e0, e1, P, P.length);
        if (P) P.push(sx1, sy1);
        else P = [sx1, sy1];
      }
    }
    if (P) {
      e0 = e1, e1 = this._edgecode(P[0], P[1]);
      if (e0 && e1) this._edge(i, e0, e1, P, P.length);
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      return [this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax, this.xmin, this.ymin];
    }
    return P;
  }
  _clipSegment(x0, y0, x1, y1, c0, c1) {
    while (true) {
      if (c0 === 0 && c1 === 0) return [x0, y0, x1, y1];
      if (c0 & c1) return null;
      let x, y, c = c0 || c1;
      if (c & 0b1000) x = x0 + (x1 - x0) * (this.ymax - y0) / (y1 - y0), y = this.ymax;
      else if (c & 0b0100) x = x0 + (x1 - x0) * (this.ymin - y0) / (y1 - y0), y = this.ymin;
      else if (c & 0b0010) y = y0 + (y1 - y0) * (this.xmax - x0) / (x1 - x0), x = this.xmax;
      else y = y0 + (y1 - y0) * (this.xmin - x0) / (x1 - x0), x = this.xmin;
      if (c0) x0 = x, y0 = y, c0 = this._regioncode(x0, y0);
      else x1 = x, y1 = y, c1 = this._regioncode(x1, y1);
    }
  }
  _clipInfinite(i, points, vx0, vy0, vxn, vyn) {
    let P = Array.from(points), p;
    if (p = this._project(P[0], P[1], vx0, vy0)) P.unshift(p[0], p[1]);
    if (p = this._project(P[P.length - 2], P[P.length - 1], vxn, vyn)) P.push(p[0], p[1]);
    if (P = this._clipFinite(i, P)) {
      for (let j = 0, n = P.length, c0, c1 = this._edgecode(P[n - 2], P[n - 1]); j < n; j += 2) {
        c0 = c1, c1 = this._edgecode(P[j], P[j + 1]);
        if (c0 && c1) j = this._edge(i, c0, c1, P, j), n = P.length;
      }
    } else if (this.contains(i, (this.xmin + this.xmax) / 2, (this.ymin + this.ymax) / 2)) {
      P = [this.xmin, this.ymin, this.xmax, this.ymin, this.xmax, this.ymax, this.xmin, this.ymax];
    }
    return P;
  }
  _edge(i, e0, e1, P, j) {
    while (e0 !== e1) {
      let x, y;
      switch (e0) {
        case 0b0101: e0 = 0b0100; continue; // top-left
        case 0b0100: e0 = 0b0110, x = this.xmax, y = this.ymin; break; // top
        case 0b0110: e0 = 0b0010; continue; // top-right
        case 0b0010: e0 = 0b1010, x = this.xmax, y = this.ymax; break; // right
        case 0b1010: e0 = 0b1000; continue; // bottom-right
        case 0b1000: e0 = 0b1001, x = this.xmin, y = this.ymax; break; // bottom
        case 0b1001: e0 = 0b0001; continue; // bottom-left
        case 0b0001: e0 = 0b0101, x = this.xmin, y = this.ymin; break; // left
      }
      if ((P[j] !== x || P[j + 1] !== y) && this.contains(i, x, y)) {
        P.splice(j, 0, x, y), j += 2;
      }
    }
    return j;
  }
  _project(x0, y0, vx, vy) {
    let t = Infinity, c, x, y;
    if (vy < 0) { // top
      if (y0 <= this.ymin) return null;
      if ((c = (this.ymin - y0) / vy) < t) y = this.ymin, x = x0 + (t = c) * vx;
    } else if (vy > 0) { // bottom
      if (y0 >= this.ymax) return null;
      if ((c = (this.ymax - y0) / vy) < t) y = this.ymax, x = x0 + (t = c) * vx;
    }
    if (vx > 0) { // right
      if (x0 >= this.xmax) return null;
      if ((c = (this.xmax - x0) / vx) < t) x = this.xmax, y = y0 + (t = c) * vy;
    } else if (vx < 0) { // left
      if (x0 <= this.xmin) return null;
      if ((c = (this.xmin - x0) / vx) < t) x = this.xmin, y = y0 + (t = c) * vy;
    }
    return [x, y];
  }
  _edgecode(x, y) {
    return (x === this.xmin ? 0b0001
        : x === this.xmax ? 0b0010 : 0b0000)
        | (y === this.ymin ? 0b0100
        : y === this.ymax ? 0b1000 : 0b0000);
  }
  _regioncode(x, y) {
    return (x < this.xmin ? 0b0001
        : x > this.xmax ? 0b0010 : 0b0000)
        | (y < this.ymin ? 0b0100
        : y > this.ymax ? 0b1000 : 0b0000);
  }
}


/***/ }),

/***/ "./node_modules/delaunator/index.js":
/*!******************************************!*\
  !*** ./node_modules/delaunator/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Delaunator; });

const EPSILON = Math.pow(2, -52);

class Delaunator {

    static from(points, getX, getY) {
        if (!getX) getX = defaultGetX;
        if (!getY) getY = defaultGetY;

        const n = points.length;
        const coords = new Float64Array(n * 2);

        for (let i = 0; i < n; i++) {
            const p = points[i];
            coords[2 * i] = getX(p);
            coords[2 * i + 1] = getY(p);
        }

        return new Delaunator(coords);
    }

    constructor(coords) {
        let minX = Infinity;
        let minY = Infinity;
        let maxX = -Infinity;
        let maxY = -Infinity;

        const n = coords.length >> 1;
        const ids = this.ids = new Uint32Array(n);

        if (n > 0 && typeof coords[0] !== 'number') throw new Error('Expected coords to contain numbers.');

        this.coords = coords;

        for (let i = 0; i < n; i++) {
            const x = coords[2 * i];
            const y = coords[2 * i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            ids[i] = i;
        }

        const cx = (minX + maxX) / 2;
        const cy = (minY + maxY) / 2;

        let minDist = Infinity;
        let i0, i1, i2;

        // pick a seed point close to the centroid
        for (let i = 0; i < n; i++) {
            const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist) {
                i0 = i;
                minDist = d;
            }
        }
        const i0x = coords[2 * i0];
        const i0y = coords[2 * i0 + 1];

        minDist = Infinity;

        // find the point closest to the seed
        for (let i = 0; i < n; i++) {
            if (i === i0) continue;
            const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
            if (d < minDist && d > 0) {
                i1 = i;
                minDist = d;
            }
        }
        let i1x = coords[2 * i1];
        let i1y = coords[2 * i1 + 1];

        let minRadius = Infinity;

        // find the third point which forms the smallest circumcircle with the first two
        for (let i = 0; i < n; i++) {
            if (i === i0 || i === i1) continue;
            const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
            if (r < minRadius) {
                i2 = i;
                minRadius = r;
            }
        }
        let i2x = coords[2 * i2];
        let i2y = coords[2 * i2 + 1];

        if (minRadius === Infinity) {
            throw new Error('No Delaunay triangulation exists for this input.');
        }

        // swap the order of the seed points for counter-clockwise orientation
        if (orient(i0x, i0y, i1x, i1y, i2x, i2y)) {
            const i = i1;
            const x = i1x;
            const y = i1y;
            i1 = i2;
            i1x = i2x;
            i1y = i2y;
            i2 = i;
            i2x = x;
            i2y = y;
        }

        const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
        this._cx = center.x;
        this._cy = center.y;

        // sort the points by distance from the seed triangle circumcenter
        quicksort(ids, coords, 0, ids.length - 1, center.x, center.y);

        // initialize a hash table for storing edges of the advancing convex hull
        this._hashSize = Math.ceil(Math.sqrt(n));
        this._hash = new Array(this._hashSize);

        // initialize a circular doubly-linked list that will hold an advancing convex hull
        let e = this.hull = insertNode(coords, i0);
        this._hashEdge(e);
        e.t = 0;
        e = insertNode(coords, i1, e);
        this._hashEdge(e);
        e.t = 1;
        e = insertNode(coords, i2, e);
        this._hashEdge(e);
        e.t = 2;

        const maxTriangles = 2 * n - 5;
        const triangles = this.triangles = new Uint32Array(maxTriangles * 3);
        const halfedges = this.halfedges = new Int32Array(maxTriangles * 3);

        this.trianglesLen = 0;

        this._addTriangle(i0, i1, i2, -1, -1, -1);

        for (let k = 0, xp, yp; k < ids.length; k++) {
            const i = ids[k];
            const x = coords[2 * i];
            const y = coords[2 * i + 1];

            // skip near-duplicate points
            if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
            xp = x;
            yp = y;

            // skip seed triangle points
            if (i === i0 || i === i1 || i === i2) continue;

            // find a visible edge on the convex hull using edge hash
            const startKey = this._hashKey(x, y);
            let key = startKey;
            let start;
            do {
                start = this._hash[key];
                key = (key + 1) % this._hashSize;
            } while ((!start || start.removed) && key !== startKey);

            start = start.prev;
            e = start;
            while (!orient(x, y, e.x, e.y, e.next.x, e.next.y)) {
                e = e.next;
                if (e === start) {
                    e = null;
                    break;
                }
            }
            // likely a near-duplicate point; skip it
            if (!e) continue;

            const walkBack = e === start;

            // add the first triangle from the point
            let t = this._addTriangle(e.i, i, e.next.i, -1, -1, e.t);

            e.t = t; // keep track of boundary triangles on the hull
            e = insertNode(coords, i, e);

            // recursively flip triangles from the point until they satisfy the Delaunay condition
            e.t = this._legalize(t + 2);

            // walk forward through the hull, adding more triangles and flipping recursively
            let q = e.next;
            while (orient(x, y, q.x, q.y, q.next.x, q.next.y)) {
                t = this._addTriangle(q.i, i, q.next.i, q.prev.t, -1, q.t);
                q.prev.t = this._legalize(t + 2);
                this.hull = removeNode(q);
                q = q.next;
            }

            if (walkBack) {
                // walk backward from the other side, adding more triangles and flipping
                q = e.prev;
                while (orient(x, y, q.prev.x, q.prev.y, q.x, q.y)) {
                    t = this._addTriangle(q.prev.i, i, q.i, -1, q.t, q.prev.t);
                    this._legalize(t + 2);
                    q.prev.t = t;
                    this.hull = removeNode(q);
                    q = q.prev;
                }
            }

            // save the two new edges in the hash table
            this._hashEdge(e);
            this._hashEdge(e.prev);
        }

        // trim typed triangle mesh arrays
        this.triangles = triangles.subarray(0, this.trianglesLen);
        this.halfedges = halfedges.subarray(0, this.trianglesLen);
    }

    _hashEdge(e) {
        this._hash[this._hashKey(e.x, e.y)] = e;
    }

    _hashKey(x, y) {
        return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
    }

    _legalize(a) {
        const {triangles, coords, halfedges} = this;

        const b = halfedges[a];

        /* if the pair of triangles doesn't satisfy the Delaunay condition
         * (p1 is inside the circumcircle of [p0, pl, pr]), flip them,
         * then do the same check/flip recursively for the new pair of triangles
         *
         *           pl                    pl
         *          /||\                  /  \
         *       al/ || \bl            al/    \a
         *        /  ||  \              /      \
         *       /  a||b  \    flip    /___ar___\
         *     p0\   ||   /p1   =>   p0\---bl---/p1
         *        \  ||  /              \      /
         *       ar\ || /br             b\    /br
         *          \||/                  \  /
         *           pr                    pr
         */
        const a0 = a - a % 3;
        const b0 = b - b % 3;

        const al = a0 + (a + 1) % 3;
        const ar = a0 + (a + 2) % 3;
        const bl = b0 + (b + 2) % 3;

        if (b === -1) return ar;

        const p0 = triangles[ar];
        const pr = triangles[a];
        const pl = triangles[al];
        const p1 = triangles[bl];

        const illegal = inCircle(
            coords[2 * p0], coords[2 * p0 + 1],
            coords[2 * pr], coords[2 * pr + 1],
            coords[2 * pl], coords[2 * pl + 1],
            coords[2 * p1], coords[2 * p1 + 1]);

        if (illegal) {
            triangles[a] = p1;
            triangles[b] = p0;

            const hbl = halfedges[bl];

            // edge swapped on the other side of the hull (rare); fix the halfedge reference
            if (hbl === -1) {
                let e = this.hull;
                do {
                    if (e.t === bl) {
                        e.t = a;
                        break;
                    }
                    e = e.next;
                } while (e !== this.hull);
            }
            this._link(a, hbl);
            this._link(b, halfedges[ar]);
            this._link(ar, bl);

            const br = b0 + (b + 1) % 3;

            this._legalize(a);
            return this._legalize(br);
        }

        return ar;
    }

    _link(a, b) {
        this.halfedges[a] = b;
        if (b !== -1) this.halfedges[b] = a;
    }

    // add a new triangle given vertex indices and adjacent half-edge ids
    _addTriangle(i0, i1, i2, a, b, c) {
        const t = this.trianglesLen;

        this.triangles[t] = i0;
        this.triangles[t + 1] = i1;
        this.triangles[t + 2] = i2;

        this._link(t, a);
        this._link(t + 1, b);
        this._link(t + 2, c);

        this.trianglesLen += 3;

        return t;
    }
}

// monotonically increases with real angle, but doesn't need expensive trigonometry
function pseudoAngle(dx, dy) {
    const p = dx / (Math.abs(dx) + Math.abs(dy));
    return (dy > 0 ? 3 - p : 1 + p) / 4; // [0..1]
}

function dist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}

function orient(px, py, qx, qy, rx, ry) {
    return (qy - py) * (rx - qx) - (qx - px) * (ry - qy) < 0;
}

function inCircle(ax, ay, bx, by, cx, cy, px, py) {
    const dx = ax - px;
    const dy = ay - py;
    const ex = bx - px;
    const ey = by - py;
    const fx = cx - px;
    const fy = cy - py;

    const ap = dx * dx + dy * dy;
    const bp = ex * ex + ey * ey;
    const cp = fx * fx + fy * fy;

    return dx * (ey * cp - bp * fy) -
           dy * (ex * cp - bp * fx) +
           ap * (ex * fy - ey * fx) < 0;
}

function circumradius(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = dx * ey - dy * ex;

    const x = (ey * bl - dy * cl) * 0.5 / d;
    const y = (dx * cl - ex * bl) * 0.5 / d;

    return bl && cl && d && (x * x + y * y) || Infinity;
}

function circumcenter(ax, ay, bx, by, cx, cy) {
    const dx = bx - ax;
    const dy = by - ay;
    const ex = cx - ax;
    const ey = cy - ay;

    const bl = dx * dx + dy * dy;
    const cl = ex * ex + ey * ey;
    const d = dx * ey - dy * ex;

    const x = ax + (ey * bl - dy * cl) * 0.5 / d;
    const y = ay + (dx * cl - ex * bl) * 0.5 / d;

    return {x, y};
}

// create a new node in a doubly linked list
function insertNode(coords, i, prev) {
    const node = {
        i,
        x: coords[2 * i],
        y: coords[2 * i + 1],
        t: 0,
        prev: null,
        next: null,
        removed: false
    };

    if (!prev) {
        node.prev = node;
        node.next = node;

    } else {
        node.next = prev.next;
        node.prev = prev;
        prev.next.prev = node;
        prev.next = node;
    }
    return node;
}

function removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.removed = true;
    return node.prev;
}

function quicksort(ids, coords, left, right, cx, cy) {
    let i, j, temp;

    if (right - left <= 20) {
        for (i = left + 1; i <= right; i++) {
            temp = ids[i];
            j = i - 1;
            while (j >= left && compare(coords, ids[j], temp, cx, cy) > 0) ids[j + 1] = ids[j--];
            ids[j + 1] = temp;
        }
    } else {
        const median = (left + right) >> 1;
        i = left + 1;
        j = right;
        swap(ids, median, i);
        if (compare(coords, ids[left], ids[right], cx, cy) > 0) swap(ids, left, right);
        if (compare(coords, ids[i], ids[right], cx, cy) > 0) swap(ids, i, right);
        if (compare(coords, ids[left], ids[i], cx, cy) > 0) swap(ids, left, i);

        temp = ids[i];
        while (true) {
            do i++; while (compare(coords, ids[i], temp, cx, cy) < 0);
            do j--; while (compare(coords, ids[j], temp, cx, cy) > 0);
            if (j < i) break;
            swap(ids, i, j);
        }
        ids[left + 1] = ids[j];
        ids[j] = temp;

        if (right - i + 1 >= j - left) {
            quicksort(ids, coords, i, right, cx, cy);
            quicksort(ids, coords, left, j - 1, cx, cy);
        } else {
            quicksort(ids, coords, left, j - 1, cx, cy);
            quicksort(ids, coords, i, right, cx, cy);
        }
    }
}

function compare(coords, i, j, cx, cy) {
    const d1 = dist(coords[2 * i], coords[2 * i + 1], cx, cy);
    const d2 = dist(coords[2 * j], coords[2 * j + 1], cx, cy);
    return (d1 - d2) || (coords[2 * i] - coords[2 * j]) || (coords[2 * i + 1] - coords[2 * j + 1]);
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function defaultGetX(p) {
    return p[0];
}
function defaultGetY(p) {
    return p[1];
}


/***/ }),

/***/ "./node_modules/kdbush/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/kdbush/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KDBush; });
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ "./node_modules/kdbush/src/sort.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range */ "./node_modules/kdbush/src/range.js");
/* harmony import */ var _within__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./within */ "./node_modules/kdbush/src/within.js");





const defaultGetX = p => p[0];
const defaultGetY = p => p[1];

class KDBush {
    constructor(points, getX = defaultGetX, getY = defaultGetY, nodeSize = 64, ArrayType = Float64Array) {
        this.nodeSize = nodeSize;
        this.points = points;

        const IndexArrayType = points.length < 65536 ? Uint16Array : Uint32Array;

        const ids = this.ids = new IndexArrayType(points.length);
        const coords = this.coords = new ArrayType(points.length * 2);

        for (let i = 0; i < points.length; i++) {
            ids[i] = i;
            coords[2 * i] = getX(points[i]);
            coords[2 * i + 1] = getY(points[i]);
        }

        Object(_sort__WEBPACK_IMPORTED_MODULE_0__["default"])(ids, coords, nodeSize, 0, ids.length - 1, 0);
    }

    range(minX, minY, maxX, maxY) {
        return Object(_range__WEBPACK_IMPORTED_MODULE_1__["default"])(this.ids, this.coords, minX, minY, maxX, maxY, this.nodeSize);
    }

    within(x, y, r) {
        return Object(_within__WEBPACK_IMPORTED_MODULE_2__["default"])(this.ids, this.coords, x, y, r, this.nodeSize);
    }
}


/***/ }),

/***/ "./node_modules/kdbush/src/range.js":
/*!******************************************!*\
  !*** ./node_modules/kdbush/src/range.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return range; });

function range(ids, coords, minX, minY, maxX, maxY, nodeSize) {
    const stack = [0, ids.length - 1, 0];
    const result = [];
    let x, y;

    while (stack.length) {
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();

        if (right - left <= nodeSize) {
            for (let i = left; i <= right; i++) {
                x = coords[2 * i];
                y = coords[2 * i + 1];
                if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
            }
            continue;
        }

        const m = Math.floor((left + right) / 2);

        x = coords[2 * m];
        y = coords[2 * m + 1];

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);

        const nextAxis = (axis + 1) % 2;

        if (axis === 0 ? minX <= x : minY <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? maxX >= x : maxY >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}


/***/ }),

/***/ "./node_modules/kdbush/src/sort.js":
/*!*****************************************!*\
  !*** ./node_modules/kdbush/src/sort.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortKD; });

function sortKD(ids, coords, nodeSize, left, right, depth) {
    if (right - left <= nodeSize) return;

    const m = (left + right) >> 1;

    select(ids, coords, m, left, right, depth % 2);

    sortKD(ids, coords, nodeSize, left, m - 1, depth + 1);
    sortKD(ids, coords, nodeSize, m + 1, right, depth + 1);
}

function select(ids, coords, k, left, right, inc) {

    while (right > left) {
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, inc);
        }

        const t = coords[2 * k + inc];
        let i = left;
        let j = right;

        swapItem(ids, coords, left, k);
        if (coords[2 * right + inc] > t) swapItem(ids, coords, left, right);

        while (i < j) {
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while (coords[2 * i + inc] < t) i++;
            while (coords[2 * j + inc] > t) j--;
        }

        if (coords[2 * left + inc] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }

        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}

function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


/***/ }),

/***/ "./node_modules/kdbush/src/within.js":
/*!*******************************************!*\
  !*** ./node_modules/kdbush/src/within.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return within; });

function within(ids, coords, qx, qy, r, nodeSize) {
    const stack = [0, ids.length - 1, 0];
    const result = [];
    const r2 = r * r;

    while (stack.length) {
        const axis = stack.pop();
        const right = stack.pop();
        const left = stack.pop();

        if (right - left <= nodeSize) {
            for (let i = left; i <= right; i++) {
                if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
            }
            continue;
        }

        const m = Math.floor((left + right) / 2);

        const x = coords[2 * m];
        const y = coords[2 * m + 1];

        if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);

        const nextAxis = (axis + 1) % 2;

        if (axis === 0 ? qx - r <= x : qy - r <= y) {
            stack.push(left);
            stack.push(m - 1);
            stack.push(nextAxis);
        }
        if (axis === 0 ? qx + r >= x : qy + r >= y) {
            stack.push(m + 1);
            stack.push(right);
            stack.push(nextAxis);
        }
    }

    return result;
}

function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}


/***/ }),

/***/ "./node_modules/vec2/vec2.js":
/*!***********************************!*\
  !*** ./node_modules/vec2/vec2.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;(function inject(clean, precision, undef) {

  var isArray = function (a) {
    return Object.prototype.toString.call(a) === "[object Array]";
  };

  var defined = function(a) {
    return a !== undef;
  };

  function Vec2(x, y) {
    if (!(this instanceof Vec2)) {
      return new Vec2(x, y);
    }

    if (isArray(x)) {
      y = x[1];
      x = x[0];
    } else if('object' === typeof x && x) {
      y = x.y;
      x = x.x;
    }

    this.x = Vec2.clean(x || 0);
    this.y = Vec2.clean(y || 0);
  }

  Vec2.prototype = {
    change : function(fn) {
      if (typeof fn === 'function') {
        if (this.observers) {
          this.observers.push(fn);
        } else {
          this.observers = [fn];
        }
      } else if (this.observers && this.observers.length) {
        for (var i=this.observers.length-1; i>=0; i--) {
          this.observers[i](this, fn);
        }
      }

      return this;
    },

    ignore : function(fn) {
      if (this.observers) {
        if (!fn) {
          this.observers = [];
        } else {
          var o = this.observers, l = o.length;
          while(l--) {
            o[l] === fn && o.splice(l, 1);
          }
        }
      }
      return this;
    },

    // set x and y
    set: function(x, y, notify) {
      if('number' != typeof x) {
        notify = y;
        y = x.y;
        x = x.x;
      }

      if(this.x === x && this.y === y) {
        return this;
      }

      var orig = null;
      if (notify !== false && this.observers && this.observers.length) {
        orig = this.clone();
      }

      this.x = Vec2.clean(x);
      this.y = Vec2.clean(y);

      if(notify !== false) {
        return this.change(orig);
      }
    },

    // reset x and y to zero
    zero : function() {
      return this.set(0, 0);
    },

    // return a new vector with the same component values
    // as this one
    clone : function() {
      return new (this.constructor)(this.x, this.y);
    },

    // negate the values of this vector
    negate : function(returnNew) {
      if (returnNew) {
        return new (this.constructor)(-this.x, -this.y);
      } else {
        return this.set(-this.x, -this.y);
      }
    },

    // Add the incoming `vec2` vector to this vector
    add : function(x, y, returnNew) {

      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      }

      x += this.x;
      y += this.y;


      if (!returnNew) {
        return this.set(x, y);
      } else {
        // Return a new vector if `returnNew` is truthy
        return new (this.constructor)(x, y);
      }
    },

    // Subtract the incoming `vec2` from this vector
    subtract : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      }

      x = this.x - x;
      y = this.y - y;

      if (!returnNew) {
        return this.set(x, y);
      } else {
        // Return a new vector if `returnNew` is truthy
        return new (this.constructor)(x, y);
      }
    },

    // Multiply this vector by the incoming `vec2`
    multiply : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      } else if (typeof y != 'number') {
        returnNew = y;
        y = x;
      }

      x *= this.x;
      y *= this.y;

      if (!returnNew) {
        return this.set(x, y);
      } else {
        return new (this.constructor)(x, y);
      }
    },

    // Rotate this vector. Accepts a `Rotation` or angle in radians.
    //
    // Passing a truthy `inverse` will cause the rotation to
    // be reversed.
    //
    // If `returnNew` is truthy, a new
    // `Vec2` will be created with the values resulting from
    // the rotation. Otherwise the rotation will be applied
    // to this vector directly, and this vector will be returned.
    rotate : function(r, inverse, returnNew) {
      var
      x = this.x,
      y = this.y,
      cos = Math.cos(r),
      sin = Math.sin(r),
      rx, ry;

      inverse = (inverse) ? -1 : 1;

      rx = cos * x - (inverse * sin) * y;
      ry = (inverse * sin) * x + cos * y;

      if (returnNew) {
        return new (this.constructor)(rx, ry);
      } else {
        return this.set(rx, ry);
      }
    },

    // Calculate the length of this vector
    length : function() {
      var x = this.x, y = this.y;
      return Math.sqrt(x * x + y * y);
    },

    // Get the length squared. For performance, use this instead of `Vec2#length` (if possible).
    lengthSquared : function() {
      var x = this.x, y = this.y;
      return x*x+y*y;
    },

    // Return the distance betwen this `Vec2` and the incoming vec2 vector
    // and return a scalar
    distance : function(vec2) {
      var x = this.x - vec2.x;
      var y = this.y - vec2.y;
      return Math.sqrt(x*x + y*y);
    },

    // Given Array of Vec2, find closest to this Vec2.
    nearest : function(others) {
      var
      shortestDistance = Number.MAX_VALUE,
      nearest = null,
      currentDistance;

      for (var i = others.length - 1; i >= 0; i--) {
        currentDistance = this.distance(others[i]);
        if (currentDistance <= shortestDistance) {
          shortestDistance = currentDistance;
          nearest = others[i];
        }
      }

      return nearest;
    },

    // Convert this vector into a unit vector.
    // Returns the length.
    normalize : function(returnNew) {
      var length = this.length();

      // Collect a ratio to shrink the x and y coords
      var invertedLength = (length < Number.MIN_VALUE) ? 0 : 1/length;

      if (!returnNew) {
        // Convert the coords to be greater than zero
        // but smaller than or equal to 1.0
        return this.set(this.x * invertedLength, this.y * invertedLength);
      } else {
        return new (this.constructor)(this.x * invertedLength, this.y * invertedLength);
      }
    },

    // Determine if another `Vec2`'s components match this one's
    // also accepts 2 scalars
    equal : function(v, w) {
      if (typeof v != 'number') {
        if (isArray(v)) {
          w = v[1];
          v = v[0];
        } else {
          w = v.y;
          v = v.x;
        }
      }

      return (Vec2.clean(v) === this.x && Vec2.clean(w) === this.y);
    },

    // Return a new `Vec2` that contains the absolute value of
    // each of this vector's parts
    abs : function(returnNew) {
      var x = Math.abs(this.x), y = Math.abs(this.y);

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Return a new `Vec2` consisting of the smallest values
    // from this vector and the incoming
    //
    // When returnNew is truthy, a new `Vec2` will be returned
    // otherwise the minimum values in either this or `v` will
    // be applied to this vector.
    min : function(v, returnNew) {
      var
      tx = this.x,
      ty = this.y,
      vx = v.x,
      vy = v.y,
      x = tx < vx ? tx : vx,
      y = ty < vy ? ty : vy;

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Return a new `Vec2` consisting of the largest values
    // from this vector and the incoming
    //
    // When returnNew is truthy, a new `Vec2` will be returned
    // otherwise the minimum values in either this or `v` will
    // be applied to this vector.
    max : function(v, returnNew) {
      var
      tx = this.x,
      ty = this.y,
      vx = v.x,
      vy = v.y,
      x = tx > vx ? tx : vx,
      y = ty > vy ? ty : vy;

      if (returnNew) {
        return new (this.constructor)(x, y);
      } else {
        return this.set(x, y);
      }
    },

    // Clamp values into a range.
    // If this vector's values are lower than the `low`'s
    // values, then raise them.  If they are higher than
    // `high`'s then lower them.
    //
    // Passing returnNew as true will cause a new Vec2 to be
    // returned.  Otherwise, this vector's values will be clamped
    clamp : function(low, high, returnNew) {
      var ret = this.min(high, true).max(low);
      if (returnNew) {
        return ret;
      } else {
        return this.set(ret.x, ret.y);
      }
    },

    // Perform linear interpolation between two vectors
    // amount is a decimal between 0 and 1
    lerp : function(vec, amount, returnNew) {
      return this.add(vec.subtract(this, true).multiply(amount), returnNew);
    },

    // Get the skew vector such that dot(skew_vec, other) == cross(vec, other)
    skew : function(returnNew) {
      if (!returnNew) {
        return this.set(-this.y, this.x)
      } else {
        return new (this.constructor)(-this.y, this.x);
      }
    },

    // calculate the dot product between
    // this vector and the incoming
    dot : function(b) {
      return Vec2.clean(this.x * b.x + b.y * this.y);
    },

    // calculate the perpendicular dot product between
    // this vector and the incoming
    perpDot : function(b) {
      return Vec2.clean(this.x * b.y - this.y * b.x);
    },

    // Determine the angle between two vec2s
    angleTo : function(vec) {
      return Math.atan2(this.perpDot(vec), this.dot(vec));
    },

    // Divide this vector's components by a scalar
    divide : function(x, y, returnNew) {
      if (typeof x != 'number') {
        returnNew = y;
        if (isArray(x)) {
          y = x[1];
          x = x[0];
        } else {
          y = x.y;
          x = x.x;
        }
      } else if (typeof y != 'number') {
        returnNew = y;
        y = x;
      }

      if (x === 0 || y === 0) {
        throw new Error('division by zero')
      }

      if (isNaN(x) || isNaN(y)) {
        throw new Error('NaN detected');
      }

      if (returnNew) {
        return new (this.constructor)(this.x / x, this.y / y);
      }

      return this.set(this.x / x, this.y / y);
    },

    isPointOnLine : function(start, end) {
      return (start.y - this.y) * (start.x - end.x) ===
             (start.y - end.y) * (start.x - this.x);
    },

    toArray: function() {
      return [this.x, this.y];
    },

    fromArray: function(array) {
      return this.set(array[0], array[1]);
    },
    toJSON: function () {
      return {x: this.x, y: this.y};
    },
    toString: function() {
      return '(' + this.x + ', ' + this.y + ')';
    },
    constructor : Vec2
  };

  Vec2.fromArray = function(array, ctor) {
    return new (ctor || Vec2)(array[0], array[1]);
  };

  // Floating point stability
  Vec2.precision = precision || 8;
  var p = Math.pow(10, Vec2.precision);

  Vec2.clean = clean || function(val) {
    if (isNaN(val)) {
      throw new Error('NaN detected');
    }

    if (!isFinite(val)) {
      throw new Error('Infinity detected');
    }

    if(Math.round(val) === val) {
      return val;
    }

    return Math.round(val * p)/p;
  };

  Vec2.inject = inject;

  if(!clean) {
    Vec2.fast = inject(function (k) { return k; });

    // Expose, but also allow creating a fresh Vec2 subclass.
    if ( true && typeof module.exports == 'object') {
      module.exports = Vec2;
    } else {
      window.Vec2 = window.Vec2 || Vec2;
    }
  }
  return Vec2;
})();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRlbGF1bmF5L3NyYy9kZWxhdW5heS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGVsYXVuYXkvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kZWxhdW5heS9zcmMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGVsYXVuYXkvc3JjL3BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRlbGF1bmF5L3NyYy92b3Jvbm9pLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWxhdW5hdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYmFzaWMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYXNpYy9qcy9lbnRyeS5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uLy4uL2NvcmUvTmV0d29yayc7XHJcbmltcG9ydCBWZWluTm9kZSBmcm9tICcuLi8uLi9jb3JlL1ZlaW5Ob2RlJztcclxuaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4uLy4uL2NvcmUvQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi8uLi9jb3JlL1V0aWxpdGllcyc7XHJcbmltcG9ydCB7IHNldHVwS2V5TGlzdGVuZXJzIH0gZnJvbSAnLi4vLi4vY29yZS9LZXlib2FyZEludGVyYWN0aW9ucydcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gU2V0dXAgTmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gIHNldHVwTmV0d29yaygpO1xyXG5cclxuICAvLyBCZWdpbiBhbmltYXRpb24gbG9vcFxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbmxldCBzZXR1cE5ldHdvcmsgPSAoKSA9PiB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBHZW5lcmF0ZSByYW5kb21seS1wbGFjZWQgYXV4aW4gc291cmNlc1xyXG4gIGZvcihsZXQgaT0wOyBpPDIwMDA7IGkrKykge1xyXG4gICAgbmV0d29yay5zb3VyY2VzLnB1c2goXHJcbiAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCksXHJcbiAgICAgICAgICByYW5kb20od2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgICksXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSBncmlkIG9mIGF1eGluIHNvdXJjZXNcclxuICAvLyBjb25zdCB4UmVzb2x1dGlvbiA9IDEwMCxcclxuICAvLyAgIHlSZXNvbHV0aW9uID0gMjA7XHJcblxyXG4gIC8vIGZvcihsZXQgaT0wOyBpPHdpbmRvdy5pbm5lcldpZHRoIC8geFJlc29sdXRpb247IGkrKykge1xyXG4gIC8vICAgZm9yKGxldCBqPTA7IGo8d2luZG93LmlubmVySGVpZ2h0IC8geVJlc29sdXRpb247IGorKykge1xyXG4gIC8vICAgICBuZXR3b3JrLnNvdXJjZXMucHVzaChcclxuICAvLyAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgLy8gICAgICAgICBuZXcgVmVjMihcclxuICAvLyAgICAgICAgICAgaSAqIHhSZXNvbHV0aW9uLFxyXG4gIC8vICAgICAgICAgICBqICogeVJlc29sdXRpb25cclxuICAvLyAgICAgICAgICksXHJcbiAgLy8gICAgICAgICBjdHhcclxuICAvLyAgICAgICApXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBBZGQgYW4gaW5pdGlhbCByb290IHZlaW4gYXQgdGhlIGJvdHRvbSBjZW50ZXIgb2YgdGhlIHNjcmVlblxyXG4gIGxldCBub2RlID0gbmV3IFZlaW5Ob2RlKFxyXG4gICAgbnVsbCxcclxuICAgIG5ldyBWZWMyKHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gMiksXHJcbiAgICBuZXcgVmVjMigwLCAtMSksXHJcbiAgICB0cnVlLFxyXG4gICAgY3R4XHJcbiAgKTtcclxuXHJcbiAgbmV0d29yay5ub2Rlcy5wdXNoKG5vZGUpO1xyXG5cclxuICAvLyBTZXQgdXAgY29tbW9uIGtleWJvYXJkIGludGVyYWN0aW9uIGxpc3RlbmVyc1xyXG4gIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspO1xyXG59XHJcblxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBjb25zb2xlLmxvZygndGVzdDInKTtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgbmV0d29yay51cGRhdGUoKTtcclxuICBuZXR3b3JrLmRyYXcoKTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgXCJyXCI6XHJcbiAgICAgIHNldHVwTmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIEtpY2sgb2ZmIHRoZSBhcHBsaWNhdGlvblxyXG5zZXR1cCgpOyIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1eGluU291cmNlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuaXNJbmZsdWVuY2luZyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAuMDE7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZjAwJztcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF1eGluIHNvdXJjZVxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IC4yO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICogU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggdmVpbiBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogNTAsICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDEwLCAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdXhpbiBzb3VyY2VzIGFuZCBzZWdtZW50cyB3aGVuIHNlZ21lbnRzIGFyZSBlbmRlZFxyXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAvLyBwYXVzZS91bnBhdXNlIHN0YXRlXHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAgKi9cclxuXHJcbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXHJcbiAgU2hvd1NvdXJjZXM6IHRydWUsXHJcbiAgU2hvd1ZlaW5zOiB0cnVlLFxyXG4gIFNob3dWZWluVGlwczogdHJ1ZSxcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSxcclxuXHJcbiAgLy8gTW9kZXNcclxuICBWZWluUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgdmVpbiBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gVmVpbnNcclxuICBNaW5pbXVtVmVpblRoaWNrbmVzczogMSxcclxuXHJcbiAgLy8gQXV4aW4gc291cmNlc1xyXG4gIEF1eGluUmFkaXVzOiAzXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29ya3MpIHtcclxuICBpZighKG5ldHdvcmtzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICBuZXR3b3JrcyA9IFtuZXR3b3Jrc107XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgXCIgXCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHYgPSB0b2dnbGUgdmVpbiB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgXCJ2XCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHMgPSB0b2dnbGUgYXV4aW4gc291cmNlIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlU291cmNlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBEZWxhdW5heSB9IGZyb20gJ2QzLWRlbGF1bmF5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VzID0gW107ICAvLyBzb3VyY2VzIChBdXhpblNvdXJjZXMpIGF0dHJhY3QgdmVpbiBub2Rlc1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdOyAgICAvLyBub2RlcyAoVmVpbk5vZGVzKSBhcmUgY29ubmVjdGVkIHRvIGZvcm0gdmVpbnNcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoZSBjbG9zZXN0IHZlaW4gbm9kZVxyXG4gICAgICAgIGNhc2UgXCJPcGVuXCI6XHJcbiAgICAgICAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLm5vZGVzSW5kZXgud2l0aGluKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UpLm1hcChpZCA9PiB0aGlzLm5vZGVzW2lkXSksXHJcbiAgICAgICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCB2ZWluIG5vZGVcclxuICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgc291cmNlLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQXNzb2NpYXRlIGl0IHdpdGggdGhpcyBhdXhpbiBzb3VyY2VcclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHdpdGggbm9kZXMgd2l0aGluIHJlbGF0aXZlIG5laWdoYm9yaG9vZFxyXG4gICAgICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgICAgIGxldCBub2Rlc1dpdGhTb3VyY2UgPSB0aGlzLm5vZGVzLmNvbmNhdChzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIE9ubHkgbW92ZSBmb3J3YXJkIGlmIGEgRGVsYXVuYXkgdHJpYW5ndWxhdGlvbiBpcyBwb3NzaWJsZVxyXG4gICAgICAgICAgaWYobm9kZXNXaXRoU291cmNlLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGRlbGF1bmF5ID0gRGVsYXVuYXkuZnJvbShub2Rlc1dpdGhTb3VyY2UsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSksXHJcbiAgICAgICAgICAgIGFkamFjZW50TmVpZ2hib3JzID0gZGVsYXVuYXkubmVpZ2hib3JzKG5vZGVzV2l0aFNvdXJjZS5sZW5ndGggLSAxKSxcclxuICAgICAgICAgICAgYWRqYWNlbnROZWlnaGJvcklEcyA9IFtdOyAgLy8gZ2V0IG5laWdoYm9ycyBhZGphY2VudCB0byBzb3VyY2VcclxuXHJcbiAgICAgICAgICBmb3IobGV0IGlkIG9mIGFkamFjZW50TmVpZ2hib3JzKSB7XHJcbiAgICAgICAgICAgIGFkamFjZW50TmVpZ2hib3JJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yKGxldCBbbm9kZUlELCB0ZXN0Tm9kZV0gb2YgYWRqYWNlbnROZWlnaGJvcklEcy5tYXAoaWQgPT4gdGhpcy5ub2Rlc1tpZF0pLmVudHJpZXMoKSkgeyAgLy8gdGVzdE5vZGUgPSB2XHJcbiAgICAgICAgICAgIGZvcihsZXQgc2Vjb25kTm9kZSBvZiBhZGphY2VudE5laWdoYm9ySURzLm1hcChpZCA9PiB0aGlzLm5vZGVzW2lkXSkpIHsgIC8vIHNlY29uZE5vZGUgPSB1XHJcbiAgICAgICAgICAgICAgY29uc3QgdnNEaXN0YW5jZSA9IHRlc3ROb2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbiksICAgICAvLyB8fHYgLSBzfHxcclxuICAgICAgICAgICAgICAgIHVzRGlzdGFuY2UgPSBzZWNvbmROb2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbiksICAgICAgIC8vIHx8dSAtIHN8fFxyXG4gICAgICAgICAgICAgICAgdnVEaXN0YW5jZSA9IHRlc3ROb2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNlY29uZE5vZGUucG9zaXRpb24pOyAgLy8gfHx2IC0gdXx8XHJcblxyXG4gICAgICAgICAgICAgIC8vIHRlc3ROb2RlIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2Ygc291cmNlIGlmIGFuZCBvbmx5IGlmXHJcbiAgICAgICAgICAgICAgLy8gfHx2IC0gc3x8IDwgbWF4e3x8dSAtIHN8fCwgfHx2IC0gdXx8fVxyXG4gICAgICAgICAgICAgIGlmKHZzRGlzdGFuY2UgPCBNYXRoLm1heCh1c0Rpc3RhbmNlLCB2dURpc3RhbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYodnNEaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRlc3ROb2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZSk7ICAvLyBpbmZsdWVuY2VkQnkgaGVscHMgdG8gcG9pbnQgbmV4dCB2ZWluIG5vZGUgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICBzb3VyY2UuaXNJbmZsdWVuY2luZy5wdXNoKG5vZGVJRCk7ICAgLy8gaXNJbmZsdWVuY2luZyBoZWxwcyB0byB0cmFjayB3aGVuIG5vZGVzIGhhdmUgcmVhY2hlZCB0aGVpciBzb3VyY2VzXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZih2c0Rpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0Tm9kZS5oYXNSZWFjaGVkU291cmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdyB0aGUgbmV0d29yayBieSBhZGRpbmcgbmV3IHZlaW4gbm9kZXMgb250byBhbnkgbm9kZXNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKHRoaXMubm9kZXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlLmdldE5leHROb2RlKCkpO1xyXG5cclxuICAgICAgfSBlbHNlIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXV4aW4gc291cmNlXHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSBuZXcgVmVjMigwLDApO1xyXG5cclxuICAgICAgICBmb3IobGV0IHNvdXJjZSBvZiBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5zb3VyY2VzW2lkXSkpIHtcclxuICAgICAgICAvLyBmb3IobGV0IHNvdXJjZSBvZiBub2RlLmluZmx1ZW5jZWRCeSkge1xyXG4gICAgICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQoc291cmNlLnBvc2l0aW9uLnN1YnRyYWN0KG5vZGUucG9zaXRpb24sIHRydWUpLm5vcm1hbGl6ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQobmV3IFZlYzIocmFuZG9tKC0uMSwgLjEpLCByYW5kb20oLS4xLCAuMSkpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdmVpbiBub2RlIHVzaW5nIHRoaXMgZGlyZWN0aW9uXHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5leHROb2RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBhbnkgYXV4aW4gc291cmNlcyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgdmVpbiBub2Rlc1xyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2UgYXMgc29vbiBhcyBhbnkgdmVpbiBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlIFwiT3BlblwiOlxyXG4gICAgICAgICAgaWYoc291cmNlLnJlYWNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIG9ubHkgd2hlbiBhbGwgYXNzb2NpYXRlZCB2ZWluIG5vZGVzIGhhdmUgcmVhY2hlZCBpdFxyXG4gICAgICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pc0luZmx1ZW5jaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGFsbE5vZGVzUmVhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmlzSW5mbHVlbmNpbmcubWFwKGlkID0+IHRoaXMubm9kZXNbaWRdKSkge1xyXG4gICAgICAgICAgICAgIGlmKCFub2RlLmhhc1JlYWNoZWRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGFsbE5vZGVzUmVhY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWxsTm9kZXNSZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNvdXJjZS5pc0luZmx1ZW5jaW5nID0gW107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgLy8gRHJhdyB2ZWluIG5vZGVzXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBhdXhpbiBzb3VyY2VzXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzKSB7XHJcbiAgICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICAgIHNvdXJjZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU291cmNlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heCA9IG1pbjtcclxuICAgIG1pbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG1pbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBhcmd1bWVudHMgdG8gYmUgbnVtYmVycycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlaW5Ob2RlIHtcclxuICBjb25zdHJ1Y3RvcihwYXJlbnQsIHBvc2l0aW9uLCBkaXJlY3Rpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5pc1RpcCA9IGlzVGlwO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG4gICAgdGhpcy5oYXNSZWFjaGVkU291cmNlID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBuZXcgVmVjMigwLDApO1xyXG4gICAgdGhpcy5uZXh0UG9zaXRpb247XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyMzMzMnO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuTWluaW11bVZlaW5UaGlja25lc3M7ICAvLyBUT0RPOiB2YXJ5IHZlaW4gdGhpY2tuZXNzIGJhc2VkIG9uIGFsZ29yaXRobVxyXG5cclxuICAgICAgICAvLyBJZiBzaG93aW5nIHRpcHMsIG92ZXJyaWRlIHdpdGggdGhpY2tlciByZWQgc3R5bGVzXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnI2ZmMDAwMCc7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcblxyXG4gICAgICB9IGVsc2UgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCAwLCAwLCBNYXRoLlBJICogMik7ICAvLyBUT0RPOiB2YXJ5IGRvdCByYWRpdXMgYmFzZWQgb24gYWxnb3JpdGhtXHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcclxuXHJcbiAgICAgICAgLy8gSWYgc2hvd2luZyB0aXBzLCBvdmVycmlkZSBmaWxsIHRvIGJlIHJlZFxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmYwMDAwJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dFNlZ21lbnQoYXZlcmFnZVNvdXJjZURpcmVjdGlvbikge1xyXG4gICAgdGhpcy5pc1RpcCA9IGZhbHNlO1xyXG5cclxuICAgIGlmKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uLmNsb25lKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLm5leHREaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbi5hZGQoYXZlcmFnZVNvdXJjZURpcmVjdGlvbiwgdHJ1ZSkubm9ybWFsaXplKCk7ICAvLyBjdXJseSB2YXJpYW50XHJcbiAgICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uZXh0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLm5leHREaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVpbk5vZGUoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHRoaXMubmV4dFBvc2l0aW9uLFxyXG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzXHJcbiAgICApO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWxhdW5hdG9yIGZyb20gXCJkZWxhdW5hdG9yXCI7XG5pbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoLmpzXCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwiLi9wb2x5Z29uLmpzXCI7XG5pbXBvcnQgVm9yb25vaSBmcm9tIFwiLi92b3Jvbm9pLmpzXCI7XG5cbmNvbnN0IHRhdSA9IDIgKiBNYXRoLlBJO1xuXG5mdW5jdGlvbiBwb2ludFgocCkge1xuICByZXR1cm4gcFswXTtcbn1cblxuZnVuY3Rpb24gcG9pbnRZKHApIHtcbiAgcmV0dXJuIHBbMV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGF1bmF5IHtcbiAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgY29uc3Qge2hhbGZlZGdlcywgaHVsbCwgdHJpYW5nbGVzfSA9IG5ldyBEZWxhdW5hdG9yKHBvaW50cyk7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgdGhpcy5oYWxmZWRnZXMgPSBoYWxmZWRnZXM7XG4gICAgdGhpcy5odWxsID0gaHVsbDtcbiAgICB0aGlzLnRyaWFuZ2xlcyA9IHRyaWFuZ2xlcztcbiAgICBjb25zdCBpbmVkZ2VzID0gdGhpcy5pbmVkZ2VzID0gbmV3IEludDMyQXJyYXkocG9pbnRzLmxlbmd0aCAvIDIpLmZpbGwoLTEpO1xuICAgIGNvbnN0IG91dGVkZ2VzID0gdGhpcy5vdXRlZGdlcyA9IG5ldyBJbnQzMkFycmF5KHBvaW50cy5sZW5ndGggLyAyKS5maWxsKC0xKTtcblxuICAgIC8vIENvbXB1dGUgYW4gaW5kZXggZnJvbSBlYWNoIHBvaW50IHRvIGFuIChhcmJpdHJhcnkpIGluY29taW5nIGhhbGZlZGdlLlxuICAgIGZvciAobGV0IGUgPSAwLCBuID0gaGFsZmVkZ2VzLmxlbmd0aDsgZSA8IG47ICsrZSkge1xuICAgICAgaW5lZGdlc1t0cmlhbmdsZXNbZSAlIDMgPT09IDIgPyBlIC0gMiA6IGUgKyAxXV0gPSBlO1xuICAgIH1cblxuICAgIC8vIEZvciBwb2ludHMgb24gdGhlIGh1bGwsIGluZGV4IGJvdGggdGhlIGluY29taW5nIGFuZCBvdXRnb2luZyBoYWxmZWRnZXMuXG4gICAgbGV0IG5vZGUwLCBub2RlMSA9IGh1bGw7XG4gICAgZG8ge1xuICAgICAgbm9kZTAgPSBub2RlMSwgbm9kZTEgPSBub2RlMS5uZXh0O1xuICAgICAgaW5lZGdlc1tub2RlMS5pXSA9IG5vZGUwLnQ7XG4gICAgICBvdXRlZGdlc1tub2RlMC5pXSA9IG5vZGUxLnQ7XG4gICAgfSB3aGlsZSAobm9kZTEgIT09IGh1bGwpO1xuICB9XG4gIHZvcm9ub2koYm91bmRzKSB7XG4gICAgcmV0dXJuIG5ldyBWb3Jvbm9pKHRoaXMsIGJvdW5kcyk7XG4gIH1cbiAgKm5laWdoYm9ycyhpKSB7XG4gICAgY29uc3Qge2luZWRnZXMsIG91dGVkZ2VzLCBoYWxmZWRnZXMsIHRyaWFuZ2xlc30gPSB0aGlzO1xuICAgIGNvbnN0IGUwID0gaW5lZGdlc1tpXTtcbiAgICBpZiAoZTAgPT09IC0xKSByZXR1cm47IC8vIGNvaW5jaWRlbnQgcG9pbnRcbiAgICBsZXQgZSA9IGUwO1xuICAgIGRvIHtcbiAgICAgIHlpZWxkIHRyaWFuZ2xlc1tlXTtcbiAgICAgIGUgPSBlICUgMyA9PT0gMiA/IGUgLSAyIDogZSArIDE7XG4gICAgICBpZiAodHJpYW5nbGVzW2VdICE9PSBpKSByZXR1cm47IC8vIGJhZCB0cmlhbmd1bGF0aW9uXG4gICAgICBlID0gaGFsZmVkZ2VzW2VdO1xuICAgICAgaWYgKGUgPT09IC0xKSByZXR1cm4geWllbGQgdHJpYW5nbGVzW291dGVkZ2VzW2ldXTtcbiAgICB9IHdoaWxlIChlICE9PSBlMCk7XG4gIH1cbiAgZmluZCh4LCB5LCBpID0gMCkge1xuICAgIGlmICgoeCA9ICt4LCB4ICE9PSB4KSB8fCAoeSA9ICt5LCB5ICE9PSB5KSkgcmV0dXJuIC0xO1xuICAgIGxldCBjO1xuICAgIHdoaWxlICgoYyA9IHRoaXMuX3N0ZXAoaSwgeCwgeSkpID49IDAgJiYgYyAhPT0gaSkgaSA9IGM7XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgX3N0ZXAoaSwgeCwgeSkge1xuICAgIGNvbnN0IHtpbmVkZ2VzLCBwb2ludHN9ID0gdGhpcztcbiAgICBpZiAoaW5lZGdlc1tpXSA9PT0gLTEpIHJldHVybiAtMTsgLy8gY29pbmNpZGVudCBwb2ludFxuICAgIGxldCBjID0gaTtcbiAgICBsZXQgZGMgPSAoeCAtIHBvaW50c1tpICogMl0pICoqIDIgKyAoeSAtIHBvaW50c1tpICogMiArIDFdKSAqKiAyO1xuICAgIGZvciAoY29uc3QgdCBvZiB0aGlzLm5laWdoYm9ycyhpKSkge1xuICAgICAgY29uc3QgZHQgPSAoeCAtIHBvaW50c1t0ICogMl0pICoqIDIgKyAoeSAtIHBvaW50c1t0ICogMiArIDFdKSAqKiAyO1xuICAgICAgaWYgKGR0IDwgZGMpIGRjID0gZHQsIGMgPSB0O1xuICAgIH1cbiAgICByZXR1cm4gYztcbiAgfVxuICByZW5kZXIoY29udGV4dCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvbnRleHQgPT0gbnVsbCA/IGNvbnRleHQgPSBuZXcgUGF0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7cG9pbnRzLCBoYWxmZWRnZXMsIHRyaWFuZ2xlc30gPSB0aGlzO1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gaGFsZmVkZ2VzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgaiA9IGhhbGZlZGdlc1tpXTtcbiAgICAgIGlmIChqIDwgaSkgY29udGludWU7XG4gICAgICBjb25zdCB0aSA9IHRyaWFuZ2xlc1tpXSAqIDI7XG4gICAgICBjb25zdCB0aiA9IHRyaWFuZ2xlc1tqXSAqIDI7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhwb2ludHNbdGldLCBwb2ludHNbdGkgKyAxXSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbdGpdLCBwb2ludHNbdGogKyAxXSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVySHVsbChjb250ZXh0KTtcbiAgICByZXR1cm4gYnVmZmVyICYmIGJ1ZmZlci52YWx1ZSgpO1xuICB9XG4gIHJlbmRlclBvaW50cyhjb250ZXh0LCByID0gMikge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvbnRleHQgPT0gbnVsbCA/IGNvbnRleHQgPSBuZXcgUGF0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7cG9pbnRzfSA9IHRoaXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBwb2ludHMubGVuZ3RoOyBpIDwgbjsgaSArPSAyKSB7XG4gICAgICBjb25zdCB4ID0gcG9pbnRzW2ldLCB5ID0gcG9pbnRzW2kgKyAxXTtcbiAgICAgIGNvbnRleHQubW92ZVRvKHggKyByLCB5KTtcbiAgICAgIGNvbnRleHQuYXJjKHgsIHksIHIsIDAsIHRhdSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXIgJiYgYnVmZmVyLnZhbHVlKCk7XG4gIH1cbiAgcmVuZGVySHVsbChjb250ZXh0KSB7XG4gICAgY29uc3QgYnVmZmVyID0gY29udGV4dCA9PSBudWxsID8gY29udGV4dCA9IG5ldyBQYXRoIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHtodWxsfSA9IHRoaXM7XG4gICAgbGV0IG5vZGUgPSBodWxsO1xuICAgIGNvbnRleHQubW92ZVRvKG5vZGUueCwgbm9kZS55KTtcbiAgICB3aGlsZSAobm9kZSA9IG5vZGUubmV4dCwgbm9kZSAhPT0gaHVsbCkgY29udGV4dC5saW5lVG8obm9kZS54LCBub2RlLnkpO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIGJ1ZmZlciAmJiBidWZmZXIudmFsdWUoKTtcbiAgfVxuICBodWxsUG9seWdvbigpIHtcbiAgICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb247XG4gICAgdGhpcy5yZW5kZXJIdWxsKHBvbHlnb24pO1xuICAgIHJldHVybiBwb2x5Z29uLnZhbHVlKCk7XG4gIH1cbiAgcmVuZGVyVHJpYW5nbGUoaSwgY29udGV4dCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvbnRleHQgPT0gbnVsbCA/IGNvbnRleHQgPSBuZXcgUGF0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7cG9pbnRzLCB0cmlhbmdsZXN9ID0gdGhpcztcbiAgICBjb25zdCB0MCA9IHRyaWFuZ2xlc1tpICo9IDNdICogMjtcbiAgICBjb25zdCB0MSA9IHRyaWFuZ2xlc1tpICsgMV0gKiAyO1xuICAgIGNvbnN0IHQyID0gdHJpYW5nbGVzW2kgKyAyXSAqIDI7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9pbnRzW3QwXSwgcG9pbnRzW3QwICsgMV0pO1xuICAgIGNvbnRleHQubGluZVRvKHBvaW50c1t0MV0sIHBvaW50c1t0MSArIDFdKTtcbiAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbdDJdLCBwb2ludHNbdDIgKyAxXSk7XG4gICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gYnVmZmVyICYmIGJ1ZmZlci52YWx1ZSgpO1xuICB9XG4gICp0cmlhbmdsZVBvbHlnb25zKCkge1xuICAgIGNvbnN0IHt0cmlhbmdsZXN9ID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHRyaWFuZ2xlcy5sZW5ndGggLyAzOyBpIDwgbjsgKytpKSB7XG4gICAgICB5aWVsZCB0aGlzLnRyaWFuZ2xlUG9seWdvbihpKTtcbiAgICB9XG4gIH1cbiAgdHJpYW5nbGVQb2x5Z29uKGkpIHtcbiAgICBjb25zdCBwb2x5Z29uID0gbmV3IFBvbHlnb247XG4gICAgdGhpcy5yZW5kZXJUcmlhbmdsZShpLCBwb2x5Z29uKTtcbiAgICByZXR1cm4gcG9seWdvbi52YWx1ZSgpO1xuICB9XG59XG5cbkRlbGF1bmF5LmZyb20gPSBmdW5jdGlvbihwb2ludHMsIGZ4ID0gcG9pbnRYLCBmeSA9IHBvaW50WSwgdGhhdCkge1xuICByZXR1cm4gbmV3IERlbGF1bmF5KFwibGVuZ3RoXCIgaW4gcG9pbnRzXG4gICAgICA/IGZsYXRBcnJheShwb2ludHMsIGZ4LCBmeSwgdGhhdClcbiAgICAgIDogRmxvYXQ2NEFycmF5LmZyb20oZmxhdEl0ZXJhYmxlKHBvaW50cywgZngsIGZ5LCB0aGF0KSkpO1xufTtcblxuZnVuY3Rpb24gZmxhdEFycmF5KHBvaW50cywgZngsIGZ5LCB0aGF0KSB7XG4gIGNvbnN0IG4gPSBwb2ludHMubGVuZ3RoO1xuICBjb25zdCBhcnJheSA9IG5ldyBGbG9hdDY0QXJyYXkobiAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGNvbnN0IHAgPSBwb2ludHNbaV07XG4gICAgYXJyYXlbaSAqIDJdID0gZnguY2FsbCh0aGF0LCBwLCBpLCBwb2ludHMpO1xuICAgIGFycmF5W2kgKiAyICsgMV0gPSBmeS5jYWxsKHRoYXQsIHAsIGksIHBvaW50cyk7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiogZmxhdEl0ZXJhYmxlKHBvaW50cywgZngsIGZ5LCB0aGF0KSB7XG4gIGxldCBpID0gMDtcbiAgZm9yIChjb25zdCBwIG9mIHBvaW50cykge1xuICAgIHlpZWxkIGZ4LmNhbGwodGhhdCwgcCwgaSwgcG9pbnRzKTtcbiAgICB5aWVsZCBmeS5jYWxsKHRoYXQsIHAsIGksIHBvaW50cyk7XG4gICAgKytpO1xuICB9XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgRGVsYXVuYXl9IGZyb20gXCIuL2RlbGF1bmF5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgVm9yb25vaX0gZnJvbSBcIi4vdm9yb25vaS5qc1wiO1xuIiwiY29uc3QgZXBzaWxvbiA9IDFlLTY7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl94MCA9IHRoaXMuX3kwID0gLy8gc3RhcnQgb2YgY3VycmVudCBzdWJwYXRoXG4gICAgdGhpcy5feDEgPSB0aGlzLl95MSA9IG51bGw7IC8vIGVuZCBvZiBjdXJyZW50IHN1YnBhdGhcbiAgICB0aGlzLl8gPSBcIlwiO1xuICB9XG4gIG1vdmVUbyh4LCB5KSB7XG4gICAgdGhpcy5fICs9IGBNJHt0aGlzLl94MCA9IHRoaXMuX3gxID0gK3h9LCR7dGhpcy5feTAgPSB0aGlzLl95MSA9ICt5fWA7XG4gIH1cbiAgY2xvc2VQYXRoKCkge1xuICAgIGlmICh0aGlzLl94MSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5feDEgPSB0aGlzLl94MCwgdGhpcy5feTEgPSB0aGlzLl95MDtcbiAgICAgIHRoaXMuXyArPSBcIlpcIjtcbiAgICB9XG4gIH1cbiAgbGluZVRvKHgsIHkpIHtcbiAgICB0aGlzLl8gKz0gYEwke3RoaXMuX3gxID0gK3h9LCR7dGhpcy5feTEgPSAreX1gO1xuICB9XG4gIGFyYyh4LCB5LCByKSB7XG4gICAgeCA9ICt4LCB5ID0gK3ksIHIgPSArcjtcbiAgICBjb25zdCB4MCA9IHggKyByO1xuICAgIGNvbnN0IHkwID0geTtcbiAgICBpZiAociA8IDApIHRocm93IG5ldyBFcnJvcihcIm5lZ2F0aXZlIHJhZGl1c1wiKTtcbiAgICBpZiAodGhpcy5feDEgPT09IG51bGwpIHRoaXMuXyArPSBgTSR7eDB9LCR7eTB9YDtcbiAgICBlbHNlIGlmIChNYXRoLmFicyh0aGlzLl94MSAtIHgwKSA+IGVwc2lsb24gfHwgTWF0aC5hYnModGhpcy5feTEgLSB5MCkgPiBlcHNpbG9uKSB0aGlzLl8gKz0gXCJMXCIgKyB4MCArIFwiLFwiICsgeTA7XG4gICAgaWYgKCFyKSByZXR1cm47XG4gICAgdGhpcy5fICs9IGBBJHtyfSwke3J9LDAsMSwxLCR7eCAtIHJ9LCR7eX1BJHtyfSwke3J9LDAsMSwxLCR7dGhpcy5feDEgPSB4MH0sJHt0aGlzLl95MSA9IHkwfWA7XG4gIH1cbiAgcmVjdCh4LCB5LCB3LCBoKSB7XG4gICAgdGhpcy5fICs9IGBNJHt0aGlzLl94MCA9IHRoaXMuX3gxID0gK3h9LCR7dGhpcy5feTAgPSB0aGlzLl95MSA9ICt5fWgkeyt3fXYkeytofWgkey13fVpgO1xuICB9XG4gIHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl8gfHwgbnVsbDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9seWdvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuXyA9IFtdO1xuICB9XG4gIG1vdmVUbyh4LCB5KSB7XG4gICAgdGhpcy5fLnB1c2goW3gsIHldKTtcbiAgfVxuICBjbG9zZVBhdGgoKSB7XG4gICAgdGhpcy5fLnB1c2godGhpcy5fWzBdLnNsaWNlKCkpO1xuICB9XG4gIGxpbmVUbyh4LCB5KSB7XG4gICAgdGhpcy5fLnB1c2goW3gsIHldKTtcbiAgfVxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fLmxlbmd0aCA/IHRoaXMuXyA6IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCBQYXRoIGZyb20gXCIuL3BhdGguanNcIjtcbmltcG9ydCBQb2x5Z29uIGZyb20gXCIuL3BvbHlnb24uanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9yb25vaSB7XG4gIGNvbnN0cnVjdG9yKGRlbGF1bmF5LCBbeG1pbiwgeW1pbiwgeG1heCwgeW1heF0gPSBbMCwgMCwgOTYwLCA1MDBdKSB7XG4gICAgaWYgKCEoKHhtYXggPSAreG1heCkgPj0gKHhtaW4gPSAreG1pbikpIHx8ICEoKHltYXggPSAreW1heCkgPj0gKHltaW4gPSAreW1pbikpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGJvdW5kc1wiKTtcbiAgICBjb25zdCB7cG9pbnRzLCBodWxsLCB0cmlhbmdsZXN9ID0gdGhpcy5kZWxhdW5heSA9IGRlbGF1bmF5O1xuICAgIGNvbnN0IGNpcmN1bWNlbnRlcnMgPSB0aGlzLmNpcmN1bWNlbnRlcnMgPSBuZXcgRmxvYXQ2NEFycmF5KHRyaWFuZ2xlcy5sZW5ndGggLyAzICogMik7XG4gICAgY29uc3QgdmVjdG9ycyA9IHRoaXMudmVjdG9ycyA9IG5ldyBGbG9hdDY0QXJyYXkocG9pbnRzLmxlbmd0aCAqIDIpO1xuICAgIHRoaXMueG1heCA9IHhtYXgsIHRoaXMueG1pbiA9IHhtaW47XG4gICAgdGhpcy55bWF4ID0geW1heCwgdGhpcy55bWluID0geW1pbjtcblxuICAgIC8vIENvbXB1dGUgY2lyY3VtY2VudGVycy5cbiAgICBmb3IgKGxldCBpID0gMCwgaiA9IDAsIG4gPSB0cmlhbmdsZXMubGVuZ3RoOyBpIDwgbjsgaSArPSAzLCBqICs9IDIpIHtcbiAgICAgIGNvbnN0IHQxID0gdHJpYW5nbGVzW2ldICogMjtcbiAgICAgIGNvbnN0IHQyID0gdHJpYW5nbGVzW2kgKyAxXSAqIDI7XG4gICAgICBjb25zdCB0MyA9IHRyaWFuZ2xlc1tpICsgMl0gKiAyO1xuICAgICAgY29uc3QgeDEgPSBwb2ludHNbdDFdO1xuICAgICAgY29uc3QgeTEgPSBwb2ludHNbdDEgKyAxXTtcbiAgICAgIGNvbnN0IHgyID0gcG9pbnRzW3QyXTtcbiAgICAgIGNvbnN0IHkyID0gcG9pbnRzW3QyICsgMV07XG4gICAgICBjb25zdCB4MyA9IHBvaW50c1t0M107XG4gICAgICBjb25zdCB5MyA9IHBvaW50c1t0MyArIDFdO1xuICAgICAgY29uc3QgYTIgPSB4MSAtIHgyO1xuICAgICAgY29uc3QgYTMgPSB4MSAtIHgzO1xuICAgICAgY29uc3QgYjIgPSB5MSAtIHkyO1xuICAgICAgY29uc3QgYjMgPSB5MSAtIHkzO1xuICAgICAgY29uc3QgZDEgPSB4MSAqIHgxICsgeTEgKiB5MTtcbiAgICAgIGNvbnN0IGQyID0gZDEgLSB4MiAqIHgyIC0geTIgKiB5MjtcbiAgICAgIGNvbnN0IGQzID0gZDEgLSB4MyAqIHgzIC0geTMgKiB5MztcbiAgICAgIGNvbnN0IGFiID0gKGEzICogYjIgLSBhMiAqIGIzKSAqIDI7XG4gICAgICBjaXJjdW1jZW50ZXJzW2pdID0gKGIyICogZDMgLSBiMyAqIGQyKSAvIGFiO1xuICAgICAgY2lyY3VtY2VudGVyc1tqICsgMV0gPSAoYTMgKiBkMiAtIGEyICogZDMpIC8gYWI7XG4gICAgfVxuXG4gICAgLy8gQ29tcHV0ZSBleHRlcmlvciBjZWxsIHJheXMuXG4gICAgbGV0IG5vZGUgPSBodWxsO1xuICAgIGxldCBwMCwgcDEgPSBub2RlLmkgKiA0O1xuICAgIGxldCB4MCwgeDEgPSBub2RlLng7XG4gICAgbGV0IHkwLCB5MSA9IG5vZGUueTtcbiAgICBkbyB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0LCBwMCA9IHAxLCB4MCA9IHgxLCB5MCA9IHkxLCBwMSA9IG5vZGUuaSAqIDQsIHgxID0gbm9kZS54LCB5MSA9IG5vZGUueTtcbiAgICAgIHZlY3RvcnNbcDAgKyAyXSA9IHZlY3RvcnNbcDFdID0geTAgLSB5MTtcbiAgICAgIHZlY3RvcnNbcDAgKyAzXSA9IHZlY3RvcnNbcDEgKyAxXSA9IHgxIC0geDA7XG4gICAgfSB3aGlsZSAobm9kZSAhPT0gaHVsbCk7XG4gIH1cbiAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBidWZmZXIgPSBjb250ZXh0ID09IG51bGwgPyBjb250ZXh0ID0gbmV3IFBhdGggOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qge2RlbGF1bmF5OiB7aGFsZmVkZ2VzLCBodWxsfSwgY2lyY3VtY2VudGVycywgdmVjdG9yc30gPSB0aGlzO1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gaGFsZmVkZ2VzLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgaiA9IGhhbGZlZGdlc1tpXTtcbiAgICAgIGlmIChqIDwgaSkgY29udGludWU7XG4gICAgICBjb25zdCB0aSA9IE1hdGguZmxvb3IoaSAvIDMpICogMjtcbiAgICAgIGNvbnN0IHRqID0gTWF0aC5mbG9vcihqIC8gMykgKiAyO1xuICAgICAgY29uc3QgeGkgPSBjaXJjdW1jZW50ZXJzW3RpXTtcbiAgICAgIGNvbnN0IHlpID0gY2lyY3VtY2VudGVyc1t0aSArIDFdO1xuICAgICAgY29uc3QgeGogPSBjaXJjdW1jZW50ZXJzW3RqXTtcbiAgICAgIGNvbnN0IHlqID0gY2lyY3VtY2VudGVyc1t0aiArIDFdO1xuICAgICAgdGhpcy5fcmVuZGVyU2VnbWVudCh4aSwgeWksIHhqLCB5aiwgY29udGV4dCk7XG4gICAgfVxuICAgIGxldCBub2RlID0gaHVsbDtcbiAgICBkbyB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0O1xuICAgICAgY29uc3QgdCA9IE1hdGguZmxvb3Iobm9kZS50IC8gMykgKiAyO1xuICAgICAgY29uc3QgeCA9IGNpcmN1bWNlbnRlcnNbdF07XG4gICAgICBjb25zdCB5ID0gY2lyY3VtY2VudGVyc1t0ICsgMV07XG4gICAgICBjb25zdCB2ID0gbm9kZS5pICogNDtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLl9wcm9qZWN0KHgsIHksIHZlY3RvcnNbdiArIDJdLCB2ZWN0b3JzW3YgKyAzXSk7XG4gICAgICBpZiAocCkgdGhpcy5fcmVuZGVyU2VnbWVudCh4LCB5LCBwWzBdLCBwWzFdLCBjb250ZXh0KTtcbiAgICB9IHdoaWxlIChub2RlICE9PSBodWxsKTtcbiAgICByZXR1cm4gYnVmZmVyICYmIGJ1ZmZlci52YWx1ZSgpO1xuICB9XG4gIHJlbmRlckJvdW5kcyhjb250ZXh0KSB7XG4gICAgY29uc3QgYnVmZmVyID0gY29udGV4dCA9PSBudWxsID8gY29udGV4dCA9IG5ldyBQYXRoIDogdW5kZWZpbmVkO1xuICAgIGNvbnRleHQucmVjdCh0aGlzLnhtaW4sIHRoaXMueW1pbiwgdGhpcy54bWF4IC0gdGhpcy54bWluLCB0aGlzLnltYXggLSB0aGlzLnltaW4pO1xuICAgIHJldHVybiBidWZmZXIgJiYgYnVmZmVyLnZhbHVlKCk7XG4gIH1cbiAgcmVuZGVyQ2VsbChpLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYnVmZmVyID0gY29udGV4dCA9PSBudWxsID8gY29udGV4dCA9IG5ldyBQYXRoIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuX2NsaXAoaSk7XG4gICAgaWYgKHBvaW50cyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnRleHQubW92ZVRvKHBvaW50c1swXSwgcG9pbnRzWzFdKTtcbiAgICBmb3IgKGxldCBpID0gMiwgbiA9IHBvaW50cy5sZW5ndGg7IGkgPCBuOyBpICs9IDIpIHtcbiAgICAgIGNvbnRleHQubGluZVRvKHBvaW50c1tpXSwgcG9pbnRzW2kgKyAxXSk7XG4gICAgfVxuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIGJ1ZmZlciAmJiBidWZmZXIudmFsdWUoKTtcbiAgfVxuICAqY2VsbFBvbHlnb25zKCkge1xuICAgIGNvbnN0IHtkZWxhdW5heToge3BvaW50c319ID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHBvaW50cy5sZW5ndGggLyAyOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5jZWxsUG9seWdvbihpKTtcbiAgICAgIGlmIChjZWxsKSB5aWVsZCBjZWxsO1xuICAgIH1cbiAgfVxuICBjZWxsUG9seWdvbihpKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uO1xuICAgIHRoaXMucmVuZGVyQ2VsbChpLCBwb2x5Z29uKTtcbiAgICByZXR1cm4gcG9seWdvbi52YWx1ZSgpO1xuICB9XG4gIF9yZW5kZXJTZWdtZW50KHgwLCB5MCwgeDEsIHkxLCBjb250ZXh0KSB7XG4gICAgbGV0IFM7XG4gICAgY29uc3QgYzAgPSB0aGlzLl9yZWdpb25jb2RlKHgwLCB5MCk7XG4gICAgY29uc3QgYzEgPSB0aGlzLl9yZWdpb25jb2RlKHgxLCB5MSk7XG4gICAgaWYgKGMwID09PSAwICYmIGMxID09PSAwKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh4MCwgeTApO1xuICAgICAgY29udGV4dC5saW5lVG8oeDEsIHkxKTtcbiAgICB9IGVsc2UgaWYgKFMgPSB0aGlzLl9jbGlwU2VnbWVudCh4MCwgeTAsIHgxLCB5MSwgYzAsIGMxKSkge1xuICAgICAgY29udGV4dC5tb3ZlVG8oU1swXSwgU1sxXSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhTWzJdLCBTWzNdKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbnMoaSwgeCwgeSkge1xuICAgIGlmICgoeCA9ICt4LCB4ICE9PSB4KSB8fCAoeSA9ICt5LCB5ICE9PSB5KSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLmRlbGF1bmF5Ll9zdGVwKGksIHgsIHkpID09PSBpO1xuICB9XG4gIF9jZWxsKGkpIHtcbiAgICBjb25zdCB7Y2lyY3VtY2VudGVycywgZGVsYXVuYXk6IHtpbmVkZ2VzLCBoYWxmZWRnZXMsIHRyaWFuZ2xlc319ID0gdGhpcztcbiAgICBjb25zdCBlMCA9IGluZWRnZXNbaV07XG4gICAgaWYgKGUwID09PSAtMSkgcmV0dXJuIG51bGw7IC8vIGNvaW5jaWRlbnQgcG9pbnRcbiAgICBjb25zdCBwb2ludHMgPSBbXTtcbiAgICBsZXQgZSA9IGUwO1xuICAgIGRvIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLmZsb29yKGUgLyAzKTtcbiAgICAgIHBvaW50cy5wdXNoKGNpcmN1bWNlbnRlcnNbdCAqIDJdLCBjaXJjdW1jZW50ZXJzW3QgKiAyICsgMV0pO1xuICAgICAgZSA9IGUgJSAzID09PSAyID8gZSAtIDIgOiBlICsgMTtcbiAgICAgIGlmICh0cmlhbmdsZXNbZV0gIT09IGkpIGJyZWFrOyAvLyBiYWQgdHJpYW5ndWxhdGlvblxuICAgICAgZSA9IGhhbGZlZGdlc1tlXTtcbiAgICB9IHdoaWxlIChlICE9PSBlMCAmJiBlICE9PSAtMSk7XG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxuICBfY2xpcChpKSB7XG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5fY2VsbChpKTtcbiAgICBpZiAocG9pbnRzID09PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7dmVjdG9yczogVn0gPSB0aGlzO1xuICAgIGNvbnN0IHYgPSBpICogNDtcbiAgICByZXR1cm4gVlt2XSB8fCBWW3YgKyAxXVxuICAgICAgICA/IHRoaXMuX2NsaXBJbmZpbml0ZShpLCBwb2ludHMsIFZbdl0sIFZbdiArIDFdLCBWW3YgKyAyXSwgVlt2ICsgM10pXG4gICAgICAgIDogdGhpcy5fY2xpcEZpbml0ZShpLCBwb2ludHMpO1xuICB9XG4gIF9jbGlwRmluaXRlKGksIHBvaW50cykge1xuICAgIGNvbnN0IG4gPSBwb2ludHMubGVuZ3RoO1xuICAgIGxldCBQID0gbnVsbDtcbiAgICBsZXQgeDAsIHkwLCB4MSA9IHBvaW50c1tuIC0gMl0sIHkxID0gcG9pbnRzW24gLSAxXTtcbiAgICBsZXQgYzAsIGMxID0gdGhpcy5fcmVnaW9uY29kZSh4MSwgeTEpO1xuICAgIGxldCBlMCwgZTE7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqICs9IDIpIHtcbiAgICAgIHgwID0geDEsIHkwID0geTEsIHgxID0gcG9pbnRzW2pdLCB5MSA9IHBvaW50c1tqICsgMV07XG4gICAgICBjMCA9IGMxLCBjMSA9IHRoaXMuX3JlZ2lvbmNvZGUoeDEsIHkxKTtcbiAgICAgIGlmIChjMCA9PT0gMCAmJiBjMSA9PT0gMCkge1xuICAgICAgICBlMCA9IGUxLCBlMSA9IDA7XG4gICAgICAgIGlmIChQKSBQLnB1c2goeDEsIHkxKTtcbiAgICAgICAgZWxzZSBQID0gW3gxLCB5MV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgUywgc3gwLCBzeTAsIHN4MSwgc3kxO1xuICAgICAgICBpZiAoYzAgPT09IDApIHtcbiAgICAgICAgICBpZiAoKFMgPSB0aGlzLl9jbGlwU2VnbWVudCh4MCwgeTAsIHgxLCB5MSwgYzAsIGMxKSkgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgIFtzeDAsIHN5MCwgc3gxLCBzeTFdID0gUztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoKFMgPSB0aGlzLl9jbGlwU2VnbWVudCh4MSwgeTEsIHgwLCB5MCwgYzEsIGMwKSkgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgICAgIFtzeDEsIHN5MSwgc3gwLCBzeTBdID0gUztcbiAgICAgICAgICBlMCA9IGUxLCBlMSA9IHRoaXMuX2VkZ2Vjb2RlKHN4MCwgc3kwKTtcbiAgICAgICAgICBpZiAoZTAgJiYgZTEpIHRoaXMuX2VkZ2UoaSwgZTAsIGUxLCBQLCBQLmxlbmd0aCk7XG4gICAgICAgICAgaWYgKFApIFAucHVzaChzeDAsIHN5MCk7XG4gICAgICAgICAgZWxzZSBQID0gW3N4MCwgc3kwXTtcbiAgICAgICAgfVxuICAgICAgICBlMCA9IGUxLCBlMSA9IHRoaXMuX2VkZ2Vjb2RlKHN4MSwgc3kxKTtcbiAgICAgICAgaWYgKGUwICYmIGUxKSB0aGlzLl9lZGdlKGksIGUwLCBlMSwgUCwgUC5sZW5ndGgpO1xuICAgICAgICBpZiAoUCkgUC5wdXNoKHN4MSwgc3kxKTtcbiAgICAgICAgZWxzZSBQID0gW3N4MSwgc3kxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFApIHtcbiAgICAgIGUwID0gZTEsIGUxID0gdGhpcy5fZWRnZWNvZGUoUFswXSwgUFsxXSk7XG4gICAgICBpZiAoZTAgJiYgZTEpIHRoaXMuX2VkZ2UoaSwgZTAsIGUxLCBQLCBQLmxlbmd0aCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRhaW5zKGksICh0aGlzLnhtaW4gKyB0aGlzLnhtYXgpIC8gMiwgKHRoaXMueW1pbiArIHRoaXMueW1heCkgLyAyKSkge1xuICAgICAgcmV0dXJuIFt0aGlzLnhtYXgsIHRoaXMueW1pbiwgdGhpcy54bWF4LCB0aGlzLnltYXgsIHRoaXMueG1pbiwgdGhpcy55bWF4LCB0aGlzLnhtaW4sIHRoaXMueW1pbl07XG4gICAgfVxuICAgIHJldHVybiBQO1xuICB9XG4gIF9jbGlwU2VnbWVudCh4MCwgeTAsIHgxLCB5MSwgYzAsIGMxKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChjMCA9PT0gMCAmJiBjMSA9PT0gMCkgcmV0dXJuIFt4MCwgeTAsIHgxLCB5MV07XG4gICAgICBpZiAoYzAgJiBjMSkgcmV0dXJuIG51bGw7XG4gICAgICBsZXQgeCwgeSwgYyA9IGMwIHx8IGMxO1xuICAgICAgaWYgKGMgJiAwYjEwMDApIHggPSB4MCArICh4MSAtIHgwKSAqICh0aGlzLnltYXggLSB5MCkgLyAoeTEgLSB5MCksIHkgPSB0aGlzLnltYXg7XG4gICAgICBlbHNlIGlmIChjICYgMGIwMTAwKSB4ID0geDAgKyAoeDEgLSB4MCkgKiAodGhpcy55bWluIC0geTApIC8gKHkxIC0geTApLCB5ID0gdGhpcy55bWluO1xuICAgICAgZWxzZSBpZiAoYyAmIDBiMDAxMCkgeSA9IHkwICsgKHkxIC0geTApICogKHRoaXMueG1heCAtIHgwKSAvICh4MSAtIHgwKSwgeCA9IHRoaXMueG1heDtcbiAgICAgIGVsc2UgeSA9IHkwICsgKHkxIC0geTApICogKHRoaXMueG1pbiAtIHgwKSAvICh4MSAtIHgwKSwgeCA9IHRoaXMueG1pbjtcbiAgICAgIGlmIChjMCkgeDAgPSB4LCB5MCA9IHksIGMwID0gdGhpcy5fcmVnaW9uY29kZSh4MCwgeTApO1xuICAgICAgZWxzZSB4MSA9IHgsIHkxID0geSwgYzEgPSB0aGlzLl9yZWdpb25jb2RlKHgxLCB5MSk7XG4gICAgfVxuICB9XG4gIF9jbGlwSW5maW5pdGUoaSwgcG9pbnRzLCB2eDAsIHZ5MCwgdnhuLCB2eW4pIHtcbiAgICBsZXQgUCA9IEFycmF5LmZyb20ocG9pbnRzKSwgcDtcbiAgICBpZiAocCA9IHRoaXMuX3Byb2plY3QoUFswXSwgUFsxXSwgdngwLCB2eTApKSBQLnVuc2hpZnQocFswXSwgcFsxXSk7XG4gICAgaWYgKHAgPSB0aGlzLl9wcm9qZWN0KFBbUC5sZW5ndGggLSAyXSwgUFtQLmxlbmd0aCAtIDFdLCB2eG4sIHZ5bikpIFAucHVzaChwWzBdLCBwWzFdKTtcbiAgICBpZiAoUCA9IHRoaXMuX2NsaXBGaW5pdGUoaSwgUCkpIHtcbiAgICAgIGZvciAobGV0IGogPSAwLCBuID0gUC5sZW5ndGgsIGMwLCBjMSA9IHRoaXMuX2VkZ2Vjb2RlKFBbbiAtIDJdLCBQW24gLSAxXSk7IGogPCBuOyBqICs9IDIpIHtcbiAgICAgICAgYzAgPSBjMSwgYzEgPSB0aGlzLl9lZGdlY29kZShQW2pdLCBQW2ogKyAxXSk7XG4gICAgICAgIGlmIChjMCAmJiBjMSkgaiA9IHRoaXMuX2VkZ2UoaSwgYzAsIGMxLCBQLCBqKSwgbiA9IFAubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jb250YWlucyhpLCAodGhpcy54bWluICsgdGhpcy54bWF4KSAvIDIsICh0aGlzLnltaW4gKyB0aGlzLnltYXgpIC8gMikpIHtcbiAgICAgIFAgPSBbdGhpcy54bWluLCB0aGlzLnltaW4sIHRoaXMueG1heCwgdGhpcy55bWluLCB0aGlzLnhtYXgsIHRoaXMueW1heCwgdGhpcy54bWluLCB0aGlzLnltYXhdO1xuICAgIH1cbiAgICByZXR1cm4gUDtcbiAgfVxuICBfZWRnZShpLCBlMCwgZTEsIFAsIGopIHtcbiAgICB3aGlsZSAoZTAgIT09IGUxKSB7XG4gICAgICBsZXQgeCwgeTtcbiAgICAgIHN3aXRjaCAoZTApIHtcbiAgICAgICAgY2FzZSAwYjAxMDE6IGUwID0gMGIwMTAwOyBjb250aW51ZTsgLy8gdG9wLWxlZnRcbiAgICAgICAgY2FzZSAwYjAxMDA6IGUwID0gMGIwMTEwLCB4ID0gdGhpcy54bWF4LCB5ID0gdGhpcy55bWluOyBicmVhazsgLy8gdG9wXG4gICAgICAgIGNhc2UgMGIwMTEwOiBlMCA9IDBiMDAxMDsgY29udGludWU7IC8vIHRvcC1yaWdodFxuICAgICAgICBjYXNlIDBiMDAxMDogZTAgPSAwYjEwMTAsIHggPSB0aGlzLnhtYXgsIHkgPSB0aGlzLnltYXg7IGJyZWFrOyAvLyByaWdodFxuICAgICAgICBjYXNlIDBiMTAxMDogZTAgPSAwYjEwMDA7IGNvbnRpbnVlOyAvLyBib3R0b20tcmlnaHRcbiAgICAgICAgY2FzZSAwYjEwMDA6IGUwID0gMGIxMDAxLCB4ID0gdGhpcy54bWluLCB5ID0gdGhpcy55bWF4OyBicmVhazsgLy8gYm90dG9tXG4gICAgICAgIGNhc2UgMGIxMDAxOiBlMCA9IDBiMDAwMTsgY29udGludWU7IC8vIGJvdHRvbS1sZWZ0XG4gICAgICAgIGNhc2UgMGIwMDAxOiBlMCA9IDBiMDEwMSwgeCA9IHRoaXMueG1pbiwgeSA9IHRoaXMueW1pbjsgYnJlYWs7IC8vIGxlZnRcbiAgICAgIH1cbiAgICAgIGlmICgoUFtqXSAhPT0geCB8fCBQW2ogKyAxXSAhPT0geSkgJiYgdGhpcy5jb250YWlucyhpLCB4LCB5KSkge1xuICAgICAgICBQLnNwbGljZShqLCAwLCB4LCB5KSwgaiArPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gajtcbiAgfVxuICBfcHJvamVjdCh4MCwgeTAsIHZ4LCB2eSkge1xuICAgIGxldCB0ID0gSW5maW5pdHksIGMsIHgsIHk7XG4gICAgaWYgKHZ5IDwgMCkgeyAvLyB0b3BcbiAgICAgIGlmICh5MCA8PSB0aGlzLnltaW4pIHJldHVybiBudWxsO1xuICAgICAgaWYgKChjID0gKHRoaXMueW1pbiAtIHkwKSAvIHZ5KSA8IHQpIHkgPSB0aGlzLnltaW4sIHggPSB4MCArICh0ID0gYykgKiB2eDtcbiAgICB9IGVsc2UgaWYgKHZ5ID4gMCkgeyAvLyBib3R0b21cbiAgICAgIGlmICh5MCA+PSB0aGlzLnltYXgpIHJldHVybiBudWxsO1xuICAgICAgaWYgKChjID0gKHRoaXMueW1heCAtIHkwKSAvIHZ5KSA8IHQpIHkgPSB0aGlzLnltYXgsIHggPSB4MCArICh0ID0gYykgKiB2eDtcbiAgICB9XG4gICAgaWYgKHZ4ID4gMCkgeyAvLyByaWdodFxuICAgICAgaWYgKHgwID49IHRoaXMueG1heCkgcmV0dXJuIG51bGw7XG4gICAgICBpZiAoKGMgPSAodGhpcy54bWF4IC0geDApIC8gdngpIDwgdCkgeCA9IHRoaXMueG1heCwgeSA9IHkwICsgKHQgPSBjKSAqIHZ5O1xuICAgIH0gZWxzZSBpZiAodnggPCAwKSB7IC8vIGxlZnRcbiAgICAgIGlmICh4MCA8PSB0aGlzLnhtaW4pIHJldHVybiBudWxsO1xuICAgICAgaWYgKChjID0gKHRoaXMueG1pbiAtIHgwKSAvIHZ4KSA8IHQpIHggPSB0aGlzLnhtaW4sIHkgPSB5MCArICh0ID0gYykgKiB2eTtcbiAgICB9XG4gICAgcmV0dXJuIFt4LCB5XTtcbiAgfVxuICBfZWRnZWNvZGUoeCwgeSkge1xuICAgIHJldHVybiAoeCA9PT0gdGhpcy54bWluID8gMGIwMDAxXG4gICAgICAgIDogeCA9PT0gdGhpcy54bWF4ID8gMGIwMDEwIDogMGIwMDAwKVxuICAgICAgICB8ICh5ID09PSB0aGlzLnltaW4gPyAwYjAxMDBcbiAgICAgICAgOiB5ID09PSB0aGlzLnltYXggPyAwYjEwMDAgOiAwYjAwMDApO1xuICB9XG4gIF9yZWdpb25jb2RlKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPCB0aGlzLnhtaW4gPyAwYjAwMDFcbiAgICAgICAgOiB4ID4gdGhpcy54bWF4ID8gMGIwMDEwIDogMGIwMDAwKVxuICAgICAgICB8ICh5IDwgdGhpcy55bWluID8gMGIwMTAwXG4gICAgICAgIDogeSA+IHRoaXMueW1heCA/IDBiMTAwMCA6IDBiMDAwMCk7XG4gIH1cbn1cbiIsIlxuY29uc3QgRVBTSUxPTiA9IE1hdGgucG93KDIsIC01Mik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlbGF1bmF0b3Ige1xuXG4gICAgc3RhdGljIGZyb20ocG9pbnRzLCBnZXRYLCBnZXRZKSB7XG4gICAgICAgIGlmICghZ2V0WCkgZ2V0WCA9IGRlZmF1bHRHZXRYO1xuICAgICAgICBpZiAoIWdldFkpIGdldFkgPSBkZWZhdWx0R2V0WTtcblxuICAgICAgICBjb25zdCBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgY29vcmRzID0gbmV3IEZsb2F0NjRBcnJheShuICogMik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBwb2ludHNbaV07XG4gICAgICAgICAgICBjb29yZHNbMiAqIGldID0gZ2V0WChwKTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaSArIDFdID0gZ2V0WShwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRGVsYXVuYXRvcihjb29yZHMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNvb3Jkcykge1xuICAgICAgICBsZXQgbWluWCA9IEluZmluaXR5O1xuICAgICAgICBsZXQgbWluWSA9IEluZmluaXR5O1xuICAgICAgICBsZXQgbWF4WCA9IC1JbmZpbml0eTtcbiAgICAgICAgbGV0IG1heFkgPSAtSW5maW5pdHk7XG5cbiAgICAgICAgY29uc3QgbiA9IGNvb3Jkcy5sZW5ndGggPj4gMTtcbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5pZHMgPSBuZXcgVWludDMyQXJyYXkobik7XG5cbiAgICAgICAgaWYgKG4gPiAwICYmIHR5cGVvZiBjb29yZHNbMF0gIT09ICdudW1iZXInKSB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGNvb3JkcyB0byBjb250YWluIG51bWJlcnMuJyk7XG5cbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogaSArIDFdO1xuICAgICAgICAgICAgaWYgKHggPCBtaW5YKSBtaW5YID0geDtcbiAgICAgICAgICAgIGlmICh5IDwgbWluWSkgbWluWSA9IHk7XG4gICAgICAgICAgICBpZiAoeCA+IG1heFgpIG1heFggPSB4O1xuICAgICAgICAgICAgaWYgKHkgPiBtYXhZKSBtYXhZID0geTtcbiAgICAgICAgICAgIGlkc1tpXSA9IGk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjeCA9IChtaW5YICsgbWF4WCkgLyAyO1xuICAgICAgICBjb25zdCBjeSA9IChtaW5ZICsgbWF4WSkgLyAyO1xuXG4gICAgICAgIGxldCBtaW5EaXN0ID0gSW5maW5pdHk7XG4gICAgICAgIGxldCBpMCwgaTEsIGkyO1xuXG4gICAgICAgIC8vIHBpY2sgYSBzZWVkIHBvaW50IGNsb3NlIHRvIHRoZSBjZW50cm9pZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZCA9IGRpc3QoY3gsIGN5LCBjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSk7XG4gICAgICAgICAgICBpZiAoZCA8IG1pbkRpc3QpIHtcbiAgICAgICAgICAgICAgICBpMCA9IGk7XG4gICAgICAgICAgICAgICAgbWluRGlzdCA9IGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaTB4ID0gY29vcmRzWzIgKiBpMF07XG4gICAgICAgIGNvbnN0IGkweSA9IGNvb3Jkc1syICogaTAgKyAxXTtcblxuICAgICAgICBtaW5EaXN0ID0gSW5maW5pdHk7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgcG9pbnQgY2xvc2VzdCB0byB0aGUgc2VlZFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IGkwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkaXN0KGkweCwgaTB5LCBjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSk7XG4gICAgICAgICAgICBpZiAoZCA8IG1pbkRpc3QgJiYgZCA+IDApIHtcbiAgICAgICAgICAgICAgICBpMSA9IGk7XG4gICAgICAgICAgICAgICAgbWluRGlzdCA9IGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkxeCA9IGNvb3Jkc1syICogaTFdO1xuICAgICAgICBsZXQgaTF5ID0gY29vcmRzWzIgKiBpMSArIDFdO1xuXG4gICAgICAgIGxldCBtaW5SYWRpdXMgPSBJbmZpbml0eTtcblxuICAgICAgICAvLyBmaW5kIHRoZSB0aGlyZCBwb2ludCB3aGljaCBmb3JtcyB0aGUgc21hbGxlc3QgY2lyY3VtY2lyY2xlIHdpdGggdGhlIGZpcnN0IHR3b1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IGkwIHx8IGkgPT09IGkxKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBjaXJjdW1yYWRpdXMoaTB4LCBpMHksIGkxeCwgaTF5LCBjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSk7XG4gICAgICAgICAgICBpZiAociA8IG1pblJhZGl1cykge1xuICAgICAgICAgICAgICAgIGkyID0gaTtcbiAgICAgICAgICAgICAgICBtaW5SYWRpdXMgPSByO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpMnggPSBjb29yZHNbMiAqIGkyXTtcbiAgICAgICAgbGV0IGkyeSA9IGNvb3Jkc1syICogaTIgKyAxXTtcblxuICAgICAgICBpZiAobWluUmFkaXVzID09PSBJbmZpbml0eSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBEZWxhdW5heSB0cmlhbmd1bGF0aW9uIGV4aXN0cyBmb3IgdGhpcyBpbnB1dC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN3YXAgdGhlIG9yZGVyIG9mIHRoZSBzZWVkIHBvaW50cyBmb3IgY291bnRlci1jbG9ja3dpc2Ugb3JpZW50YXRpb25cbiAgICAgICAgaWYgKG9yaWVudChpMHgsIGkweSwgaTF4LCBpMXksIGkyeCwgaTJ5KSkge1xuICAgICAgICAgICAgY29uc3QgaSA9IGkxO1xuICAgICAgICAgICAgY29uc3QgeCA9IGkxeDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBpMXk7XG4gICAgICAgICAgICBpMSA9IGkyO1xuICAgICAgICAgICAgaTF4ID0gaTJ4O1xuICAgICAgICAgICAgaTF5ID0gaTJ5O1xuICAgICAgICAgICAgaTIgPSBpO1xuICAgICAgICAgICAgaTJ4ID0geDtcbiAgICAgICAgICAgIGkyeSA9IHk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjZW50ZXIgPSBjaXJjdW1jZW50ZXIoaTB4LCBpMHksIGkxeCwgaTF5LCBpMngsIGkyeSk7XG4gICAgICAgIHRoaXMuX2N4ID0gY2VudGVyLng7XG4gICAgICAgIHRoaXMuX2N5ID0gY2VudGVyLnk7XG5cbiAgICAgICAgLy8gc29ydCB0aGUgcG9pbnRzIGJ5IGRpc3RhbmNlIGZyb20gdGhlIHNlZWQgdHJpYW5nbGUgY2lyY3VtY2VudGVyXG4gICAgICAgIHF1aWNrc29ydChpZHMsIGNvb3JkcywgMCwgaWRzLmxlbmd0aCAtIDEsIGNlbnRlci54LCBjZW50ZXIueSk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhIGhhc2ggdGFibGUgZm9yIHN0b3JpbmcgZWRnZXMgb2YgdGhlIGFkdmFuY2luZyBjb252ZXggaHVsbFxuICAgICAgICB0aGlzLl9oYXNoU2l6ZSA9IE1hdGguY2VpbChNYXRoLnNxcnQobikpO1xuICAgICAgICB0aGlzLl9oYXNoID0gbmV3IEFycmF5KHRoaXMuX2hhc2hTaXplKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGEgY2lyY3VsYXIgZG91Ymx5LWxpbmtlZCBsaXN0IHRoYXQgd2lsbCBob2xkIGFuIGFkdmFuY2luZyBjb252ZXggaHVsbFxuICAgICAgICBsZXQgZSA9IHRoaXMuaHVsbCA9IGluc2VydE5vZGUoY29vcmRzLCBpMCk7XG4gICAgICAgIHRoaXMuX2hhc2hFZGdlKGUpO1xuICAgICAgICBlLnQgPSAwO1xuICAgICAgICBlID0gaW5zZXJ0Tm9kZShjb29yZHMsIGkxLCBlKTtcbiAgICAgICAgdGhpcy5faGFzaEVkZ2UoZSk7XG4gICAgICAgIGUudCA9IDE7XG4gICAgICAgIGUgPSBpbnNlcnROb2RlKGNvb3JkcywgaTIsIGUpO1xuICAgICAgICB0aGlzLl9oYXNoRWRnZShlKTtcbiAgICAgICAgZS50ID0gMjtcblxuICAgICAgICBjb25zdCBtYXhUcmlhbmdsZXMgPSAyICogbiAtIDU7XG4gICAgICAgIGNvbnN0IHRyaWFuZ2xlcyA9IHRoaXMudHJpYW5nbGVzID0gbmV3IFVpbnQzMkFycmF5KG1heFRyaWFuZ2xlcyAqIDMpO1xuICAgICAgICBjb25zdCBoYWxmZWRnZXMgPSB0aGlzLmhhbGZlZGdlcyA9IG5ldyBJbnQzMkFycmF5KG1heFRyaWFuZ2xlcyAqIDMpO1xuXG4gICAgICAgIHRoaXMudHJpYW5nbGVzTGVuID0gMDtcblxuICAgICAgICB0aGlzLl9hZGRUcmlhbmdsZShpMCwgaTEsIGkyLCAtMSwgLTEsIC0xKTtcblxuICAgICAgICBmb3IgKGxldCBrID0gMCwgeHAsIHlwOyBrIDwgaWRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBpID0gaWRzW2tdO1xuICAgICAgICAgICAgY29uc3QgeCA9IGNvb3Jkc1syICogaV07XG4gICAgICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBpICsgMV07XG5cbiAgICAgICAgICAgIC8vIHNraXAgbmVhci1kdXBsaWNhdGUgcG9pbnRzXG4gICAgICAgICAgICBpZiAoayA+IDAgJiYgTWF0aC5hYnMoeCAtIHhwKSA8PSBFUFNJTE9OICYmIE1hdGguYWJzKHkgLSB5cCkgPD0gRVBTSUxPTikgY29udGludWU7XG4gICAgICAgICAgICB4cCA9IHg7XG4gICAgICAgICAgICB5cCA9IHk7XG5cbiAgICAgICAgICAgIC8vIHNraXAgc2VlZCB0cmlhbmdsZSBwb2ludHNcbiAgICAgICAgICAgIGlmIChpID09PSBpMCB8fCBpID09PSBpMSB8fCBpID09PSBpMikgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGZpbmQgYSB2aXNpYmxlIGVkZ2Ugb24gdGhlIGNvbnZleCBodWxsIHVzaW5nIGVkZ2UgaGFzaFxuICAgICAgICAgICAgY29uc3Qgc3RhcnRLZXkgPSB0aGlzLl9oYXNoS2V5KHgsIHkpO1xuICAgICAgICAgICAgbGV0IGtleSA9IHN0YXJ0S2V5O1xuICAgICAgICAgICAgbGV0IHN0YXJ0O1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5faGFzaFtrZXldO1xuICAgICAgICAgICAgICAgIGtleSA9IChrZXkgKyAxKSAlIHRoaXMuX2hhc2hTaXplO1xuICAgICAgICAgICAgfSB3aGlsZSAoKCFzdGFydCB8fCBzdGFydC5yZW1vdmVkKSAmJiBrZXkgIT09IHN0YXJ0S2V5KTtcblxuICAgICAgICAgICAgc3RhcnQgPSBzdGFydC5wcmV2O1xuICAgICAgICAgICAgZSA9IHN0YXJ0O1xuICAgICAgICAgICAgd2hpbGUgKCFvcmllbnQoeCwgeSwgZS54LCBlLnksIGUubmV4dC54LCBlLm5leHQueSkpIHtcbiAgICAgICAgICAgICAgICBlID0gZS5uZXh0O1xuICAgICAgICAgICAgICAgIGlmIChlID09PSBzdGFydCkge1xuICAgICAgICAgICAgICAgICAgICBlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbGlrZWx5IGEgbmVhci1kdXBsaWNhdGUgcG9pbnQ7IHNraXAgaXRcbiAgICAgICAgICAgIGlmICghZSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHdhbGtCYWNrID0gZSA9PT0gc3RhcnQ7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZmlyc3QgdHJpYW5nbGUgZnJvbSB0aGUgcG9pbnRcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5fYWRkVHJpYW5nbGUoZS5pLCBpLCBlLm5leHQuaSwgLTEsIC0xLCBlLnQpO1xuXG4gICAgICAgICAgICBlLnQgPSB0OyAvLyBrZWVwIHRyYWNrIG9mIGJvdW5kYXJ5IHRyaWFuZ2xlcyBvbiB0aGUgaHVsbFxuICAgICAgICAgICAgZSA9IGluc2VydE5vZGUoY29vcmRzLCBpLCBlKTtcblxuICAgICAgICAgICAgLy8gcmVjdXJzaXZlbHkgZmxpcCB0cmlhbmdsZXMgZnJvbSB0aGUgcG9pbnQgdW50aWwgdGhleSBzYXRpc2Z5IHRoZSBEZWxhdW5heSBjb25kaXRpb25cbiAgICAgICAgICAgIGUudCA9IHRoaXMuX2xlZ2FsaXplKHQgKyAyKTtcblxuICAgICAgICAgICAgLy8gd2FsayBmb3J3YXJkIHRocm91Z2ggdGhlIGh1bGwsIGFkZGluZyBtb3JlIHRyaWFuZ2xlcyBhbmQgZmxpcHBpbmcgcmVjdXJzaXZlbHlcbiAgICAgICAgICAgIGxldCBxID0gZS5uZXh0O1xuICAgICAgICAgICAgd2hpbGUgKG9yaWVudCh4LCB5LCBxLngsIHEueSwgcS5uZXh0LngsIHEubmV4dC55KSkge1xuICAgICAgICAgICAgICAgIHQgPSB0aGlzLl9hZGRUcmlhbmdsZShxLmksIGksIHEubmV4dC5pLCBxLnByZXYudCwgLTEsIHEudCk7XG4gICAgICAgICAgICAgICAgcS5wcmV2LnQgPSB0aGlzLl9sZWdhbGl6ZSh0ICsgMik7XG4gICAgICAgICAgICAgICAgdGhpcy5odWxsID0gcmVtb3ZlTm9kZShxKTtcbiAgICAgICAgICAgICAgICBxID0gcS5uZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2Fsa0JhY2spIHtcbiAgICAgICAgICAgICAgICAvLyB3YWxrIGJhY2t3YXJkIGZyb20gdGhlIG90aGVyIHNpZGUsIGFkZGluZyBtb3JlIHRyaWFuZ2xlcyBhbmQgZmxpcHBpbmdcbiAgICAgICAgICAgICAgICBxID0gZS5wcmV2O1xuICAgICAgICAgICAgICAgIHdoaWxlIChvcmllbnQoeCwgeSwgcS5wcmV2LngsIHEucHJldi55LCBxLngsIHEueSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IHRoaXMuX2FkZFRyaWFuZ2xlKHEucHJldi5pLCBpLCBxLmksIC0xLCBxLnQsIHEucHJldi50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGVnYWxpemUodCArIDIpO1xuICAgICAgICAgICAgICAgICAgICBxLnByZXYudCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVsbCA9IHJlbW92ZU5vZGUocSk7XG4gICAgICAgICAgICAgICAgICAgIHEgPSBxLnByZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSB0d28gbmV3IGVkZ2VzIGluIHRoZSBoYXNoIHRhYmxlXG4gICAgICAgICAgICB0aGlzLl9oYXNoRWRnZShlKTtcbiAgICAgICAgICAgIHRoaXMuX2hhc2hFZGdlKGUucHJldik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmltIHR5cGVkIHRyaWFuZ2xlIG1lc2ggYXJyYXlzXG4gICAgICAgIHRoaXMudHJpYW5nbGVzID0gdHJpYW5nbGVzLnN1YmFycmF5KDAsIHRoaXMudHJpYW5nbGVzTGVuKTtcbiAgICAgICAgdGhpcy5oYWxmZWRnZXMgPSBoYWxmZWRnZXMuc3ViYXJyYXkoMCwgdGhpcy50cmlhbmdsZXNMZW4pO1xuICAgIH1cblxuICAgIF9oYXNoRWRnZShlKSB7XG4gICAgICAgIHRoaXMuX2hhc2hbdGhpcy5faGFzaEtleShlLngsIGUueSldID0gZTtcbiAgICB9XG5cbiAgICBfaGFzaEtleSh4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHBzZXVkb0FuZ2xlKHggLSB0aGlzLl9jeCwgeSAtIHRoaXMuX2N5KSAqIHRoaXMuX2hhc2hTaXplKSAlIHRoaXMuX2hhc2hTaXplO1xuICAgIH1cblxuICAgIF9sZWdhbGl6ZShhKSB7XG4gICAgICAgIGNvbnN0IHt0cmlhbmdsZXMsIGNvb3JkcywgaGFsZmVkZ2VzfSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3QgYiA9IGhhbGZlZGdlc1thXTtcblxuICAgICAgICAvKiBpZiB0aGUgcGFpciBvZiB0cmlhbmdsZXMgZG9lc24ndCBzYXRpc2Z5IHRoZSBEZWxhdW5heSBjb25kaXRpb25cbiAgICAgICAgICogKHAxIGlzIGluc2lkZSB0aGUgY2lyY3VtY2lyY2xlIG9mIFtwMCwgcGwsIHByXSksIGZsaXAgdGhlbSxcbiAgICAgICAgICogdGhlbiBkbyB0aGUgc2FtZSBjaGVjay9mbGlwIHJlY3Vyc2l2ZWx5IGZvciB0aGUgbmV3IHBhaXIgb2YgdHJpYW5nbGVzXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgICBwbCAgICAgICAgICAgICAgICAgICAgcGxcbiAgICAgICAgICogICAgICAgICAgL3x8XFwgICAgICAgICAgICAgICAgICAvICBcXFxuICAgICAgICAgKiAgICAgICBhbC8gfHwgXFxibCAgICAgICAgICAgIGFsLyAgICBcXGFcbiAgICAgICAgICogICAgICAgIC8gIHx8ICBcXCAgICAgICAgICAgICAgLyAgICAgIFxcXG4gICAgICAgICAqICAgICAgIC8gIGF8fGIgIFxcICAgIGZsaXAgICAgL19fX2FyX19fXFxcbiAgICAgICAgICogICAgIHAwXFwgICB8fCAgIC9wMSAgID0+ICAgcDBcXC0tLWJsLS0tL3AxXG4gICAgICAgICAqICAgICAgICBcXCAgfHwgIC8gICAgICAgICAgICAgIFxcICAgICAgL1xuICAgICAgICAgKiAgICAgICBhclxcIHx8IC9iciAgICAgICAgICAgICBiXFwgICAgL2JyXG4gICAgICAgICAqICAgICAgICAgIFxcfHwvICAgICAgICAgICAgICAgICAgXFwgIC9cbiAgICAgICAgICogICAgICAgICAgIHByICAgICAgICAgICAgICAgICAgICBwclxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYTAgPSBhIC0gYSAlIDM7XG4gICAgICAgIGNvbnN0IGIwID0gYiAtIGIgJSAzO1xuXG4gICAgICAgIGNvbnN0IGFsID0gYTAgKyAoYSArIDEpICUgMztcbiAgICAgICAgY29uc3QgYXIgPSBhMCArIChhICsgMikgJSAzO1xuICAgICAgICBjb25zdCBibCA9IGIwICsgKGIgKyAyKSAlIDM7XG5cbiAgICAgICAgaWYgKGIgPT09IC0xKSByZXR1cm4gYXI7XG5cbiAgICAgICAgY29uc3QgcDAgPSB0cmlhbmdsZXNbYXJdO1xuICAgICAgICBjb25zdCBwciA9IHRyaWFuZ2xlc1thXTtcbiAgICAgICAgY29uc3QgcGwgPSB0cmlhbmdsZXNbYWxdO1xuICAgICAgICBjb25zdCBwMSA9IHRyaWFuZ2xlc1tibF07XG5cbiAgICAgICAgY29uc3QgaWxsZWdhbCA9IGluQ2lyY2xlKFxuICAgICAgICAgICAgY29vcmRzWzIgKiBwMF0sIGNvb3Jkc1syICogcDAgKyAxXSxcbiAgICAgICAgICAgIGNvb3Jkc1syICogcHJdLCBjb29yZHNbMiAqIHByICsgMV0sXG4gICAgICAgICAgICBjb29yZHNbMiAqIHBsXSwgY29vcmRzWzIgKiBwbCArIDFdLFxuICAgICAgICAgICAgY29vcmRzWzIgKiBwMV0sIGNvb3Jkc1syICogcDEgKyAxXSk7XG5cbiAgICAgICAgaWYgKGlsbGVnYWwpIHtcbiAgICAgICAgICAgIHRyaWFuZ2xlc1thXSA9IHAxO1xuICAgICAgICAgICAgdHJpYW5nbGVzW2JdID0gcDA7XG5cbiAgICAgICAgICAgIGNvbnN0IGhibCA9IGhhbGZlZGdlc1tibF07XG5cbiAgICAgICAgICAgIC8vIGVkZ2Ugc3dhcHBlZCBvbiB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgaHVsbCAocmFyZSk7IGZpeCB0aGUgaGFsZmVkZ2UgcmVmZXJlbmNlXG4gICAgICAgICAgICBpZiAoaGJsID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGxldCBlID0gdGhpcy5odWxsO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudCA9PT0gYmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudCA9IGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlID0gZS5uZXh0O1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKGUgIT09IHRoaXMuaHVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9saW5rKGEsIGhibCk7XG4gICAgICAgICAgICB0aGlzLl9saW5rKGIsIGhhbGZlZGdlc1thcl0pO1xuICAgICAgICAgICAgdGhpcy5fbGluayhhciwgYmwpO1xuXG4gICAgICAgICAgICBjb25zdCBiciA9IGIwICsgKGIgKyAxKSAlIDM7XG5cbiAgICAgICAgICAgIHRoaXMuX2xlZ2FsaXplKGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xlZ2FsaXplKGJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcjtcbiAgICB9XG5cbiAgICBfbGluayhhLCBiKSB7XG4gICAgICAgIHRoaXMuaGFsZmVkZ2VzW2FdID0gYjtcbiAgICAgICAgaWYgKGIgIT09IC0xKSB0aGlzLmhhbGZlZGdlc1tiXSA9IGE7XG4gICAgfVxuXG4gICAgLy8gYWRkIGEgbmV3IHRyaWFuZ2xlIGdpdmVuIHZlcnRleCBpbmRpY2VzIGFuZCBhZGphY2VudCBoYWxmLWVkZ2UgaWRzXG4gICAgX2FkZFRyaWFuZ2xlKGkwLCBpMSwgaTIsIGEsIGIsIGMpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMudHJpYW5nbGVzTGVuO1xuXG4gICAgICAgIHRoaXMudHJpYW5nbGVzW3RdID0gaTA7XG4gICAgICAgIHRoaXMudHJpYW5nbGVzW3QgKyAxXSA9IGkxO1xuICAgICAgICB0aGlzLnRyaWFuZ2xlc1t0ICsgMl0gPSBpMjtcblxuICAgICAgICB0aGlzLl9saW5rKHQsIGEpO1xuICAgICAgICB0aGlzLl9saW5rKHQgKyAxLCBiKTtcbiAgICAgICAgdGhpcy5fbGluayh0ICsgMiwgYyk7XG5cbiAgICAgICAgdGhpcy50cmlhbmdsZXNMZW4gKz0gMztcblxuICAgICAgICByZXR1cm4gdDtcbiAgICB9XG59XG5cbi8vIG1vbm90b25pY2FsbHkgaW5jcmVhc2VzIHdpdGggcmVhbCBhbmdsZSwgYnV0IGRvZXNuJ3QgbmVlZCBleHBlbnNpdmUgdHJpZ29ub21ldHJ5XG5mdW5jdGlvbiBwc2V1ZG9BbmdsZShkeCwgZHkpIHtcbiAgICBjb25zdCBwID0gZHggLyAoTWF0aC5hYnMoZHgpICsgTWF0aC5hYnMoZHkpKTtcbiAgICByZXR1cm4gKGR5ID4gMCA/IDMgLSBwIDogMSArIHApIC8gNDsgLy8gWzAuLjFdXG59XG5cbmZ1bmN0aW9uIGRpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCBkeCA9IGF4IC0gYng7XG4gICAgY29uc3QgZHkgPSBheSAtIGJ5O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cblxuZnVuY3Rpb24gb3JpZW50KHB4LCBweSwgcXgsIHF5LCByeCwgcnkpIHtcbiAgICByZXR1cm4gKHF5IC0gcHkpICogKHJ4IC0gcXgpIC0gKHF4IC0gcHgpICogKHJ5IC0gcXkpIDwgMDtcbn1cblxuZnVuY3Rpb24gaW5DaXJjbGUoYXgsIGF5LCBieCwgYnksIGN4LCBjeSwgcHgsIHB5KSB7XG4gICAgY29uc3QgZHggPSBheCAtIHB4O1xuICAgIGNvbnN0IGR5ID0gYXkgLSBweTtcbiAgICBjb25zdCBleCA9IGJ4IC0gcHg7XG4gICAgY29uc3QgZXkgPSBieSAtIHB5O1xuICAgIGNvbnN0IGZ4ID0gY3ggLSBweDtcbiAgICBjb25zdCBmeSA9IGN5IC0gcHk7XG5cbiAgICBjb25zdCBhcCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgIGNvbnN0IGJwID0gZXggKiBleCArIGV5ICogZXk7XG4gICAgY29uc3QgY3AgPSBmeCAqIGZ4ICsgZnkgKiBmeTtcblxuICAgIHJldHVybiBkeCAqIChleSAqIGNwIC0gYnAgKiBmeSkgLVxuICAgICAgICAgICBkeSAqIChleCAqIGNwIC0gYnAgKiBmeCkgK1xuICAgICAgICAgICBhcCAqIChleCAqIGZ5IC0gZXkgKiBmeCkgPCAwO1xufVxuXG5mdW5jdGlvbiBjaXJjdW1yYWRpdXMoYXgsIGF5LCBieCwgYnksIGN4LCBjeSkge1xuICAgIGNvbnN0IGR4ID0gYnggLSBheDtcbiAgICBjb25zdCBkeSA9IGJ5IC0gYXk7XG4gICAgY29uc3QgZXggPSBjeCAtIGF4O1xuICAgIGNvbnN0IGV5ID0gY3kgLSBheTtcblxuICAgIGNvbnN0IGJsID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgY29uc3QgY2wgPSBleCAqIGV4ICsgZXkgKiBleTtcbiAgICBjb25zdCBkID0gZHggKiBleSAtIGR5ICogZXg7XG5cbiAgICBjb25zdCB4ID0gKGV5ICogYmwgLSBkeSAqIGNsKSAqIDAuNSAvIGQ7XG4gICAgY29uc3QgeSA9IChkeCAqIGNsIC0gZXggKiBibCkgKiAwLjUgLyBkO1xuXG4gICAgcmV0dXJuIGJsICYmIGNsICYmIGQgJiYgKHggKiB4ICsgeSAqIHkpIHx8IEluZmluaXR5O1xufVxuXG5mdW5jdGlvbiBjaXJjdW1jZW50ZXIoYXgsIGF5LCBieCwgYnksIGN4LCBjeSkge1xuICAgIGNvbnN0IGR4ID0gYnggLSBheDtcbiAgICBjb25zdCBkeSA9IGJ5IC0gYXk7XG4gICAgY29uc3QgZXggPSBjeCAtIGF4O1xuICAgIGNvbnN0IGV5ID0gY3kgLSBheTtcblxuICAgIGNvbnN0IGJsID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgY29uc3QgY2wgPSBleCAqIGV4ICsgZXkgKiBleTtcbiAgICBjb25zdCBkID0gZHggKiBleSAtIGR5ICogZXg7XG5cbiAgICBjb25zdCB4ID0gYXggKyAoZXkgKiBibCAtIGR5ICogY2wpICogMC41IC8gZDtcbiAgICBjb25zdCB5ID0gYXkgKyAoZHggKiBjbCAtIGV4ICogYmwpICogMC41IC8gZDtcblxuICAgIHJldHVybiB7eCwgeX07XG59XG5cbi8vIGNyZWF0ZSBhIG5ldyBub2RlIGluIGEgZG91Ymx5IGxpbmtlZCBsaXN0XG5mdW5jdGlvbiBpbnNlcnROb2RlKGNvb3JkcywgaSwgcHJldikge1xuICAgIGNvbnN0IG5vZGUgPSB7XG4gICAgICAgIGksXG4gICAgICAgIHg6IGNvb3Jkc1syICogaV0sXG4gICAgICAgIHk6IGNvb3Jkc1syICogaSArIDFdLFxuICAgICAgICB0OiAwLFxuICAgICAgICBwcmV2OiBudWxsLFxuICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICByZW1vdmVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgbm9kZS5wcmV2ID0gbm9kZTtcbiAgICAgICAgbm9kZS5uZXh0ID0gbm9kZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIG5vZGUubmV4dCA9IHByZXYubmV4dDtcbiAgICAgICAgbm9kZS5wcmV2ID0gcHJldjtcbiAgICAgICAgcHJldi5uZXh0LnByZXYgPSBub2RlO1xuICAgICAgICBwcmV2Lm5leHQgPSBub2RlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgbm9kZS5wcmV2Lm5leHQgPSBub2RlLm5leHQ7XG4gICAgbm9kZS5uZXh0LnByZXYgPSBub2RlLnByZXY7XG4gICAgbm9kZS5yZW1vdmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gbm9kZS5wcmV2O1xufVxuXG5mdW5jdGlvbiBxdWlja3NvcnQoaWRzLCBjb29yZHMsIGxlZnQsIHJpZ2h0LCBjeCwgY3kpIHtcbiAgICBsZXQgaSwgaiwgdGVtcDtcblxuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gMjApIHtcbiAgICAgICAgZm9yIChpID0gbGVmdCArIDE7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgdGVtcCA9IGlkc1tpXTtcbiAgICAgICAgICAgIGogPSBpIC0gMTtcbiAgICAgICAgICAgIHdoaWxlIChqID49IGxlZnQgJiYgY29tcGFyZShjb29yZHMsIGlkc1tqXSwgdGVtcCwgY3gsIGN5KSA+IDApIGlkc1tqICsgMV0gPSBpZHNbai0tXTtcbiAgICAgICAgICAgIGlkc1tqICsgMV0gPSB0ZW1wO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVkaWFuID0gKGxlZnQgKyByaWdodCkgPj4gMTtcbiAgICAgICAgaSA9IGxlZnQgKyAxO1xuICAgICAgICBqID0gcmlnaHQ7XG4gICAgICAgIHN3YXAoaWRzLCBtZWRpYW4sIGkpO1xuICAgICAgICBpZiAoY29tcGFyZShjb29yZHMsIGlkc1tsZWZ0XSwgaWRzW3JpZ2h0XSwgY3gsIGN5KSA+IDApIHN3YXAoaWRzLCBsZWZ0LCByaWdodCk7XG4gICAgICAgIGlmIChjb21wYXJlKGNvb3JkcywgaWRzW2ldLCBpZHNbcmlnaHRdLCBjeCwgY3kpID4gMCkgc3dhcChpZHMsIGksIHJpZ2h0KTtcbiAgICAgICAgaWYgKGNvbXBhcmUoY29vcmRzLCBpZHNbbGVmdF0sIGlkc1tpXSwgY3gsIGN5KSA+IDApIHN3YXAoaWRzLCBsZWZ0LCBpKTtcblxuICAgICAgICB0ZW1wID0gaWRzW2ldO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgZG8gaSsrOyB3aGlsZSAoY29tcGFyZShjb29yZHMsIGlkc1tpXSwgdGVtcCwgY3gsIGN5KSA8IDApO1xuICAgICAgICAgICAgZG8gai0tOyB3aGlsZSAoY29tcGFyZShjb29yZHMsIGlkc1tqXSwgdGVtcCwgY3gsIGN5KSA+IDApO1xuICAgICAgICAgICAgaWYgKGogPCBpKSBicmVhaztcbiAgICAgICAgICAgIHN3YXAoaWRzLCBpLCBqKTtcbiAgICAgICAgfVxuICAgICAgICBpZHNbbGVmdCArIDFdID0gaWRzW2pdO1xuICAgICAgICBpZHNbal0gPSB0ZW1wO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGkgKyAxID49IGogLSBsZWZ0KSB7XG4gICAgICAgICAgICBxdWlja3NvcnQoaWRzLCBjb29yZHMsIGksIHJpZ2h0LCBjeCwgY3kpO1xuICAgICAgICAgICAgcXVpY2tzb3J0KGlkcywgY29vcmRzLCBsZWZ0LCBqIC0gMSwgY3gsIGN5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHF1aWNrc29ydChpZHMsIGNvb3JkcywgbGVmdCwgaiAtIDEsIGN4LCBjeSk7XG4gICAgICAgICAgICBxdWlja3NvcnQoaWRzLCBjb29yZHMsIGksIHJpZ2h0LCBjeCwgY3kpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlKGNvb3JkcywgaSwgaiwgY3gsIGN5KSB7XG4gICAgY29uc3QgZDEgPSBkaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBjeCwgY3kpO1xuICAgIGNvbnN0IGQyID0gZGlzdChjb29yZHNbMiAqIGpdLCBjb29yZHNbMiAqIGogKyAxXSwgY3gsIGN5KTtcbiAgICByZXR1cm4gKGQxIC0gZDIpIHx8IChjb29yZHNbMiAqIGldIC0gY29vcmRzWzIgKiBqXSkgfHwgKGNvb3Jkc1syICogaSArIDFdIC0gY29vcmRzWzIgKiBqICsgMV0pO1xufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xuICAgIGNvbnN0IHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0WChwKSB7XG4gICAgcmV0dXJuIHBbMF07XG59XG5mdW5jdGlvbiBkZWZhdWx0R2V0WShwKSB7XG4gICAgcmV0dXJuIHBbMV07XG59XG4iLCJcbmltcG9ydCBzb3J0IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgd2l0aGluIGZyb20gJy4vd2l0aGluJztcblxuY29uc3QgZGVmYXVsdEdldFggPSBwID0+IHBbMF07XG5jb25zdCBkZWZhdWx0R2V0WSA9IHAgPT4gcFsxXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS0RCdXNoIHtcbiAgICBjb25zdHJ1Y3Rvcihwb2ludHMsIGdldFggPSBkZWZhdWx0R2V0WCwgZ2V0WSA9IGRlZmF1bHRHZXRZLCBub2RlU2l6ZSA9IDY0LCBBcnJheVR5cGUgPSBGbG9hdDY0QXJyYXkpIHtcbiAgICAgICAgdGhpcy5ub2RlU2l6ZSA9IG5vZGVTaXplO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgICAgICBjb25zdCBJbmRleEFycmF5VHlwZSA9IHBvaW50cy5sZW5ndGggPCA2NTUzNiA/IFVpbnQxNkFycmF5IDogVWludDMyQXJyYXk7XG5cbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5pZHMgPSBuZXcgSW5kZXhBcnJheVR5cGUocG9pbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuY29vcmRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoICogMik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkc1tpXSA9IGk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGldID0gZ2V0WChwb2ludHNbaV0pO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0KGlkcywgY29vcmRzLCBub2RlU2l6ZSwgMCwgaWRzLmxlbmd0aCAtIDEsIDApO1xuICAgIH1cblxuICAgIHJhbmdlKG1pblgsIG1pblksIG1heFgsIG1heFkpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxuXG4gICAgd2l0aGluKHgsIHksIHIpIHtcbiAgICAgICAgcmV0dXJuIHdpdGhpbih0aGlzLmlkcywgdGhpcy5jb29yZHMsIHgsIHksIHIsIHRoaXMubm9kZVNpemUpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2UoaWRzLCBjb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCB4LCB5O1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1syICogaV07XG4gICAgICAgICAgICAgICAgeSA9IGNvb3Jkc1syICogaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCByaWdodCwgZGVwdGgpIHtcbiAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSByZXR1cm47XG5cbiAgICBjb25zdCBtID0gKGxlZnQgKyByaWdodCkgPj4gMTtcblxuICAgIHNlbGVjdChpZHMsIGNvb3JkcywgbSwgbGVmdCwgcmlnaHQsIGRlcHRoICUgMik7XG5cbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCBtIC0gMSwgZGVwdGggKyAxKTtcbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBtICsgMSwgcmlnaHQsIGRlcHRoICsgMSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbGVmdCwgcmlnaHQsIGluYykge1xuXG4gICAgd2hpbGUgKHJpZ2h0ID4gbGVmdCkge1xuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0ID4gNjAwKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCB6ID0gTWF0aC5sb2cobik7XG4gICAgICAgICAgICBjb25zdCBzID0gMC41ICogTWF0aC5leHAoMiAqIHogLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgY29uc3QgbmV3TGVmdCA9IE1hdGgubWF4KGxlZnQsIE1hdGguZmxvb3IoayAtIG0gKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdSaWdodCA9IE1hdGgubWluKHJpZ2h0LCBNYXRoLmZsb29yKGsgKyAobiAtIG0pICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgc2VsZWN0KGlkcywgY29vcmRzLCBrLCBuZXdMZWZ0LCBuZXdSaWdodCwgaW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICBsZXQgaSA9IGxlZnQ7XG4gICAgICAgIGxldCBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgY29uc3QgdG1wID0gYXJyW2ldO1xuICAgIGFycltpXSA9IGFycltqXTtcbiAgICBhcnJbal0gPSB0bXA7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihpZHMsIGNvb3JkcywgcXgsIHF5LCByLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCByMiA9IHIgKiByO1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNxRGlzdChjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICBjb25zdCB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmIChzcURpc3QoeCwgeSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCBkeCA9IGF4IC0gYng7XG4gICAgY29uc3QgZHkgPSBheSAtIGJ5O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cbiIsIjsoZnVuY3Rpb24gaW5qZWN0KGNsZWFuLCBwcmVjaXNpb24sIHVuZGVmKSB7XG5cbiAgdmFyIGlzQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcblxuICB2YXIgZGVmaW5lZCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSAhPT0gdW5kZWY7XG4gIH07XG5cbiAgZnVuY3Rpb24gVmVjMih4LCB5KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlYzIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZlYzIoeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgIHkgPSB4WzFdO1xuICAgICAgeCA9IHhbMF07XG4gICAgfSBlbHNlIGlmKCdvYmplY3QnID09PSB0eXBlb2YgeCAmJiB4KSB7XG4gICAgICB5ID0geC55O1xuICAgICAgeCA9IHgueDtcbiAgICB9XG5cbiAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHggfHwgMCk7XG4gICAgdGhpcy55ID0gVmVjMi5jbGVhbih5IHx8IDApO1xuICB9XG5cbiAgVmVjMi5wcm90b3R5cGUgPSB7XG4gICAgY2hhbmdlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChmbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbZm5dO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpPXRoaXMub2JzZXJ2ZXJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1tpXSh0aGlzLCBmbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGlnbm9yZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLm9ic2VydmVycywgbCA9IG8ubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlKGwtLSkge1xuICAgICAgICAgICAgb1tsXSA9PT0gZm4gJiYgby5zcGxpY2UobCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gc2V0IHggYW5kIHlcbiAgICBzZXQ6IGZ1bmN0aW9uKHgsIHksIG5vdGlmeSkge1xuICAgICAgaWYoJ251bWJlcicgIT0gdHlwZW9mIHgpIHtcbiAgICAgICAgbm90aWZ5ID0geTtcbiAgICAgICAgeSA9IHgueTtcbiAgICAgICAgeCA9IHgueDtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy54ID09PSB4ICYmIHRoaXMueSA9PT0geSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWcgPSBudWxsO1xuICAgICAgaWYgKG5vdGlmeSAhPT0gZmFsc2UgJiYgdGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIG9yaWcgPSB0aGlzLmNsb25lKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCk7XG4gICAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkpO1xuXG4gICAgICBpZihub3RpZnkgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShvcmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gcmVzZXQgeCBhbmQgeSB0byB6ZXJvXG4gICAgemVybyA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KDAsIDApO1xuICAgIH0sXG5cbiAgICAvLyByZXR1cm4gYSBuZXcgdmVjdG9yIHdpdGggdGhlIHNhbWUgY29tcG9uZW50IHZhbHVlc1xuICAgIC8vIGFzIHRoaXMgb25lXG4gICAgY2xvbmUgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCwgdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gbmVnYXRlIHRoZSB2YWx1ZXMgb2YgdGhpcyB2ZWN0b3JcbiAgICBuZWdhdGUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFkZCB0aGUgaW5jb21pbmcgYHZlYzJgIHZlY3RvciB0byB0aGlzIHZlY3RvclxuICAgIGFkZCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuXG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCArPSB0aGlzLng7XG4gICAgICB5ICs9IHRoaXMueTtcblxuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU3VidHJhY3QgdGhlIGluY29taW5nIGB2ZWMyYCBmcm9tIHRoaXMgdmVjdG9yXG4gICAgc3VidHJhY3QgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ID0gdGhpcy54IC0geDtcbiAgICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIGluY29taW5nIGB2ZWMyYFxuICAgIG11bHRpcGx5IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIHggKj0gdGhpcy54O1xuICAgICAgeSAqPSB0aGlzLnk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSb3RhdGUgdGhpcyB2ZWN0b3IuIEFjY2VwdHMgYSBgUm90YXRpb25gIG9yIGFuZ2xlIGluIHJhZGlhbnMuXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIGEgdHJ1dGh5IGBpbnZlcnNlYCB3aWxsIGNhdXNlIHRoZSByb3RhdGlvbiB0b1xuICAgIC8vIGJlIHJldmVyc2VkLlxuICAgIC8vXG4gICAgLy8gSWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5LCBhIG5ld1xuICAgIC8vIGBWZWMyYCB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgdmFsdWVzIHJlc3VsdGluZyBmcm9tXG4gICAgLy8gdGhlIHJvdGF0aW9uLiBPdGhlcndpc2UgdGhlIHJvdGF0aW9uIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIHRvIHRoaXMgdmVjdG9yIGRpcmVjdGx5LCBhbmQgdGhpcyB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZC5cbiAgICByb3RhdGUgOiBmdW5jdGlvbihyLCBpbnZlcnNlLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgeCA9IHRoaXMueCxcbiAgICAgIHkgPSB0aGlzLnksXG4gICAgICBjb3MgPSBNYXRoLmNvcyhyKSxcbiAgICAgIHNpbiA9IE1hdGguc2luKHIpLFxuICAgICAgcngsIHJ5O1xuXG4gICAgICBpbnZlcnNlID0gKGludmVyc2UpID8gLTEgOiAxO1xuXG4gICAgICByeCA9IGNvcyAqIHggLSAoaW52ZXJzZSAqIHNpbikgKiB5O1xuICAgICAgcnkgPSAoaW52ZXJzZSAqIHNpbikgKiB4ICsgY29zICogeTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShyeCwgcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJ4LCByeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgbGVuZ3RoIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIHNxdWFyZWQuIEZvciBwZXJmb3JtYW5jZSwgdXNlIHRoaXMgaW5zdGVhZCBvZiBgVmVjMiNsZW5ndGhgIChpZiBwb3NzaWJsZSkuXG4gICAgbGVuZ3RoU3F1YXJlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4geCp4K3kqeTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZW4gdGhpcyBgVmVjMmAgYW5kIHRoZSBpbmNvbWluZyB2ZWMyIHZlY3RvclxuICAgIC8vIGFuZCByZXR1cm4gYSBzY2FsYXJcbiAgICBkaXN0YW5jZSA6IGZ1bmN0aW9uKHZlYzIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54IC0gdmVjMi54O1xuICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2ZWMyLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIEFycmF5IG9mIFZlYzIsIGZpbmQgY2xvc2VzdCB0byB0aGlzIFZlYzIuXG4gICAgbmVhcmVzdCA6IGZ1bmN0aW9uKG90aGVycykge1xuICAgICAgdmFyXG4gICAgICBzaG9ydGVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgIG5lYXJlc3QgPSBudWxsLFxuICAgICAgY3VycmVudERpc3RhbmNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gb3RoZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGN1cnJlbnREaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2Uob3RoZXJzW2ldKTtcbiAgICAgICAgaWYgKGN1cnJlbnREaXN0YW5jZSA8PSBzaG9ydGVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IGN1cnJlbnREaXN0YW5jZTtcbiAgICAgICAgICBuZWFyZXN0ID0gb3RoZXJzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZWFyZXN0O1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IHRoaXMgdmVjdG9yIGludG8gYSB1bml0IHZlY3Rvci5cbiAgICAvLyBSZXR1cm5zIHRoZSBsZW5ndGguXG4gICAgbm9ybWFsaXplIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgLy8gQ29sbGVjdCBhIHJhdGlvIHRvIHNocmluayB0aGUgeCBhbmQgeSBjb29yZHNcbiAgICAgIHZhciBpbnZlcnRlZExlbmd0aCA9IChsZW5ndGggPCBOdW1iZXIuTUlOX1ZBTFVFKSA/IDAgOiAxL2xlbmd0aDtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgY29vcmRzIHRvIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgICAgIC8vIGJ1dCBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG8gMS4wXG4gICAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGFub3RoZXIgYFZlYzJgJ3MgY29tcG9uZW50cyBtYXRjaCB0aGlzIG9uZSdzXG4gICAgLy8gYWxzbyBhY2NlcHRzIDIgc2NhbGFyc1xuICAgIGVxdWFsIDogZnVuY3Rpb24odiwgdykge1xuICAgICAgaWYgKHR5cGVvZiB2ICE9ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHYpKSB7XG4gICAgICAgICAgdyA9IHZbMV07XG4gICAgICAgICAgdiA9IHZbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdyA9IHYueTtcbiAgICAgICAgICB2ID0gdi54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoVmVjMi5jbGVhbih2KSA9PT0gdGhpcy54ICYmIFZlYzIuY2xlYW4odykgPT09IHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgdGhhdCBjb250YWlucyB0aGUgYWJzb2x1dGUgdmFsdWUgb2ZcbiAgICAvLyBlYWNoIG9mIHRoaXMgdmVjdG9yJ3MgcGFydHNcbiAgICBhYnMgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciB4ID0gTWF0aC5hYnModGhpcy54KSwgeSA9IE1hdGguYWJzKHRoaXMueSk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgc21hbGxlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWluIDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4IDwgdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5IDwgdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIGxhcmdlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWF4IDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4ID4gdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5ID4gdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDbGFtcCB2YWx1ZXMgaW50byBhIHJhbmdlLlxuICAgIC8vIElmIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIGFyZSBsb3dlciB0aGFuIHRoZSBgbG93YCdzXG4gICAgLy8gdmFsdWVzLCB0aGVuIHJhaXNlIHRoZW0uICBJZiB0aGV5IGFyZSBoaWdoZXIgdGhhblxuICAgIC8vIGBoaWdoYCdzIHRoZW4gbG93ZXIgdGhlbS5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgcmV0dXJuTmV3IGFzIHRydWUgd2lsbCBjYXVzZSBhIG5ldyBWZWMyIHRvIGJlXG4gICAgLy8gcmV0dXJuZWQuICBPdGhlcndpc2UsIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIHdpbGwgYmUgY2xhbXBlZFxuICAgIGNsYW1wIDogZnVuY3Rpb24obG93LCBoaWdoLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhciByZXQgPSB0aGlzLm1pbihoaWdoLCB0cnVlKS5tYXgobG93KTtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyZXQueCwgcmV0LnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBQZXJmb3JtIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlY3RvcnNcbiAgICAvLyBhbW91bnQgaXMgYSBkZWNpbWFsIGJldHdlZW4gMCBhbmQgMVxuICAgIGxlcnAgOiBmdW5jdGlvbih2ZWMsIGFtb3VudCwgcmV0dXJuTmV3KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQodmVjLnN1YnRyYWN0KHRoaXMsIHRydWUpLm11bHRpcGx5KGFtb3VudCksIHJldHVybk5ldyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgc2tldyB2ZWN0b3Igc3VjaCB0aGF0IGRvdChza2V3X3ZlYywgb3RoZXIpID09IGNyb3NzKHZlYywgb3RoZXIpXG4gICAgc2tldyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLnksIHRoaXMueClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLnksIHRoaXMueCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBkb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnggKyBiLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIHBlcnBlbmRpY3VsYXIgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBwZXJwRG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi55IC0gdGhpcy55ICogYi54KTtcbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhbmdsZSBiZXR3ZWVuIHR3byB2ZWMyc1xuICAgIGFuZ2xlVG8gOiBmdW5jdGlvbih2ZWMpIHtcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMucGVycERvdCh2ZWMpLCB0aGlzLmRvdCh2ZWMpKTtcbiAgICB9LFxuXG4gICAgLy8gRGl2aWRlIHRoaXMgdmVjdG9yJ3MgY29tcG9uZW50cyBieSBhIHNjYWxhclxuICAgIGRpdmlkZSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGl2aXNpb24gYnkgemVybycpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgfSxcblxuICAgIGlzUG9pbnRPbkxpbmUgOiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gKHN0YXJ0LnkgLSB0aGlzLnkpICogKHN0YXJ0LnggLSBlbmQueCkgPT09XG4gICAgICAgICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueCAtIHRoaXMueCk7XG4gICAgfSxcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfSxcblxuICAgIGZyb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChhcnJheVswXSwgYXJyYXlbMV0pO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55fTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnKCcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJyknO1xuICAgIH0sXG4gICAgY29uc3RydWN0b3IgOiBWZWMyXG4gIH07XG5cbiAgVmVjMi5mcm9tQXJyYXkgPSBmdW5jdGlvbihhcnJheSwgY3Rvcikge1xuICAgIHJldHVybiBuZXcgKGN0b3IgfHwgVmVjMikoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgfTtcblxuICAvLyBGbG9hdGluZyBwb2ludCBzdGFiaWxpdHlcbiAgVmVjMi5wcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgODtcbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgVmVjMi5wcmVjaXNpb24pO1xuXG4gIFZlYzIuY2xlYW4gPSBjbGVhbiB8fCBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdHkgZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZihNYXRoLnJvdW5kKHZhbCkgPT09IHZhbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiBwKS9wO1xuICB9O1xuXG4gIFZlYzIuaW5qZWN0ID0gaW5qZWN0O1xuXG4gIGlmKCFjbGVhbikge1xuICAgIFZlYzIuZmFzdCA9IGluamVjdChmdW5jdGlvbiAoaykgeyByZXR1cm4gazsgfSk7XG5cbiAgICAvLyBFeHBvc2UsIGJ1dCBhbHNvIGFsbG93IGNyZWF0aW5nIGEgZnJlc2ggVmVjMiBzdWJjbGFzcy5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFZlYzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5WZWMyID0gd2luZG93LlZlYzIgfHwgVmVjMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFZlYzI7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==