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
      this.ctx.globalAlpha = .02;
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

      // a = toggle attraction zone visibility
      case "a":
        for(let network of networks) {
          network.toggleAttractionZones();
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

  toggleAttractionZones() {
    this.settings.ShowAttractionZones = !this.settings.ShowAttractionZones;

    for(let source of this.sources) {
      source.settings.ShowAttractionZones = !source.settings.ShowAttractionZones;
    }
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

  getNextNode(averageSourceDirection) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRlbGF1bmF5L3NyYy9kZWxhdW5heS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGVsYXVuYXkvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1kZWxhdW5heS9zcmMvcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZGVsYXVuYXkvc3JjL3BvbHlnb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWRlbGF1bmF5L3NyYy92b3Jvbm9pLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kZWxhdW5hdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUFFQTtBQUNBLGVBQWUsdURBQU07QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYmFzaWMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYXNpYy9qcy9lbnRyeS5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uLy4uL2NvcmUvTmV0d29yayc7XHJcbmltcG9ydCBWZWluTm9kZSBmcm9tICcuLi8uLi9jb3JlL1ZlaW5Ob2RlJztcclxuaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4uLy4uL2NvcmUvQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi8uLi9jb3JlL1V0aWxpdGllcyc7XHJcbmltcG9ydCB7IHNldHVwS2V5TGlzdGVuZXJzIH0gZnJvbSAnLi4vLi4vY29yZS9LZXlib2FyZEludGVyYWN0aW9ucydcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gU2V0dXAgTmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gIHNldHVwTmV0d29yaygpO1xyXG5cclxuICAvLyBCZWdpbiBhbmltYXRpb24gbG9vcFxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG5cclxuLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbmxldCBzZXR1cE5ldHdvcmsgPSAoKSA9PiB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBHZW5lcmF0ZSByYW5kb21seS1wbGFjZWQgYXV4aW4gc291cmNlc1xyXG4gIGZvcihsZXQgaT0wOyBpPDIwMDA7IGkrKykge1xyXG4gICAgbmV0d29yay5zb3VyY2VzLnB1c2goXHJcbiAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCksXHJcbiAgICAgICAgICByYW5kb20od2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgICksXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSBncmlkIG9mIGF1eGluIHNvdXJjZXNcclxuICAvLyBjb25zdCB4UmVzb2x1dGlvbiA9IDEwMCxcclxuICAvLyAgIHlSZXNvbHV0aW9uID0gMjA7XHJcblxyXG4gIC8vIGZvcihsZXQgaT0wOyBpPHdpbmRvdy5pbm5lcldpZHRoIC8geFJlc29sdXRpb247IGkrKykge1xyXG4gIC8vICAgZm9yKGxldCBqPTA7IGo8d2luZG93LmlubmVySGVpZ2h0IC8geVJlc29sdXRpb247IGorKykge1xyXG4gIC8vICAgICBuZXR3b3JrLnNvdXJjZXMucHVzaChcclxuICAvLyAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgLy8gICAgICAgICBuZXcgVmVjMihcclxuICAvLyAgICAgICAgICAgaSAqIHhSZXNvbHV0aW9uLFxyXG4gIC8vICAgICAgICAgICBqICogeVJlc29sdXRpb25cclxuICAvLyAgICAgICAgICksXHJcbiAgLy8gICAgICAgICBjdHhcclxuICAvLyAgICAgICApXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICAvLyBBZGQgYW4gaW5pdGlhbCByb290IHZlaW4gYXQgdGhlIGJvdHRvbSBjZW50ZXIgb2YgdGhlIHNjcmVlblxyXG4gIGxldCBub2RlID0gbmV3IFZlaW5Ob2RlKFxyXG4gICAgbnVsbCxcclxuICAgIG5ldyBWZWMyKHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgd2luZG93LmlubmVySGVpZ2h0IC8gMiksXHJcbiAgICBuZXcgVmVjMigwLCAtMSksXHJcbiAgICB0cnVlLFxyXG4gICAgY3R4XHJcbiAgKTtcclxuXHJcbiAgbmV0d29yay5ub2Rlcy5wdXNoKG5vZGUpO1xyXG5cclxuICAvLyBTZXQgdXAgY29tbW9uIGtleWJvYXJkIGludGVyYWN0aW9uIGxpc3RlbmVyc1xyXG4gIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspO1xyXG59XHJcblxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgbmV0d29yay51cGRhdGUoKTtcclxuICBuZXR3b3JrLmRyYXcoKTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgXCJyXCI6XHJcbiAgICAgIHNldHVwTmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIEtpY2sgb2ZmIHRoZSBhcHBsaWNhdGlvblxyXG5zZXR1cCgpOyIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1eGluU291cmNlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuaXNJbmZsdWVuY2luZyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAuMDI7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZjAwJztcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF1eGluIHNvdXJjZVxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IC4yO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICogU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggdmVpbiBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogNTAsICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDEwLCAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdXhpbiBzb3VyY2VzIGFuZCBzZWdtZW50cyB3aGVuIHNlZ21lbnRzIGFyZSBlbmRlZFxyXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAvLyBwYXVzZS91bnBhdXNlIHN0YXRlXHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAgKi9cclxuXHJcbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXHJcbiAgU2hvd1NvdXJjZXM6IHRydWUsXHJcbiAgU2hvd1ZlaW5zOiB0cnVlLFxyXG4gIFNob3dWZWluVGlwczogdHJ1ZSxcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSxcclxuXHJcbiAgLy8gTW9kZXNcclxuICBWZWluUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgdmVpbiBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gVmVpbnNcclxuICBNaW5pbXVtVmVpblRoaWNrbmVzczogMSxcclxuXHJcbiAgLy8gQXV4aW4gc291cmNlc1xyXG4gIEF1eGluUmFkaXVzOiAzXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29ya3MpIHtcclxuICBpZighKG5ldHdvcmtzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICBuZXR3b3JrcyA9IFtuZXR3b3Jrc107XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgXCIgXCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHYgPSB0b2dnbGUgdmVpbiB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgXCJ2XCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHMgPSB0b2dnbGUgYXV4aW4gc291cmNlIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSBcInNcIjpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlU291cmNlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3Rpb25ab25lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBEZWxhdW5heSB9IGZyb20gJ2QzLWRlbGF1bmF5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VzID0gW107ICAvLyBzb3VyY2VzIChBdXhpblNvdXJjZXMpIGF0dHJhY3QgdmVpbiBub2Rlc1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdOyAgICAvLyBub2RlcyAoVmVpbk5vZGVzKSBhcmUgY29ubmVjdGVkIHRvIGZvcm0gdmVpbnNcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoZSBjbG9zZXN0IHZlaW4gbm9kZVxyXG4gICAgICAgIGNhc2UgXCJPcGVuXCI6XHJcbiAgICAgICAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLm5vZGVzSW5kZXgud2l0aGluKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UpLm1hcChpZCA9PiB0aGlzLm5vZGVzW2lkXSksXHJcbiAgICAgICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgICAgICAgLy8gRmluZCB0aGUgY2xvc2VzdCB2ZWluIG5vZGVcclxuICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgc291cmNlLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gQXNzb2NpYXRlIGl0IHdpdGggdGhpcyBhdXhpbiBzb3VyY2VcclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHdpdGggbm9kZXMgd2l0aGluIHJlbGF0aXZlIG5laWdoYm9yaG9vZFxyXG4gICAgICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgICAgIGxldCBub2Rlc1dpdGhTb3VyY2UgPSB0aGlzLm5vZGVzLmNvbmNhdChzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIE9ubHkgbW92ZSBmb3J3YXJkIGlmIGEgRGVsYXVuYXkgdHJpYW5ndWxhdGlvbiBpcyBwb3NzaWJsZVxyXG4gICAgICAgICAgaWYobm9kZXNXaXRoU291cmNlLmxlbmd0aCA8IDMpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGV0IGRlbGF1bmF5ID0gRGVsYXVuYXkuZnJvbShub2Rlc1dpdGhTb3VyY2UsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSksXHJcbiAgICAgICAgICAgIGFkamFjZW50TmVpZ2hib3JzID0gZGVsYXVuYXkubmVpZ2hib3JzKG5vZGVzV2l0aFNvdXJjZS5sZW5ndGggLSAxKSxcclxuICAgICAgICAgICAgYWRqYWNlbnROZWlnaGJvcklEcyA9IFtdOyAgLy8gZ2V0IG5laWdoYm9ycyBhZGphY2VudCB0byBzb3VyY2VcclxuXHJcbiAgICAgICAgICBmb3IobGV0IGlkIG9mIGFkamFjZW50TmVpZ2hib3JzKSB7XHJcbiAgICAgICAgICAgIGFkamFjZW50TmVpZ2hib3JJRHMucHVzaChpZCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZm9yKGxldCBbbm9kZUlELCB0ZXN0Tm9kZV0gb2YgYWRqYWNlbnROZWlnaGJvcklEcy5tYXAoaWQgPT4gdGhpcy5ub2Rlc1tpZF0pLmVudHJpZXMoKSkgeyAgLy8gdGVzdE5vZGUgPSB2XHJcbiAgICAgICAgICAgIGZvcihsZXQgc2Vjb25kTm9kZSBvZiBhZGphY2VudE5laWdoYm9ySURzLm1hcChpZCA9PiB0aGlzLm5vZGVzW2lkXSkpIHsgIC8vIHNlY29uZE5vZGUgPSB1XHJcbiAgICAgICAgICAgICAgY29uc3QgdnNEaXN0YW5jZSA9IHRlc3ROb2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbiksICAgICAvLyB8fHYgLSBzfHxcclxuICAgICAgICAgICAgICAgIHVzRGlzdGFuY2UgPSBzZWNvbmROb2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbiksICAgICAgIC8vIHx8dSAtIHN8fFxyXG4gICAgICAgICAgICAgICAgdnVEaXN0YW5jZSA9IHRlc3ROb2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNlY29uZE5vZGUucG9zaXRpb24pOyAgLy8gfHx2IC0gdXx8XHJcblxyXG4gICAgICAgICAgICAgIC8vIHRlc3ROb2RlIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2Ygc291cmNlIGlmIGFuZCBvbmx5IGlmXHJcbiAgICAgICAgICAgICAgLy8gfHx2IC0gc3x8IDwgbWF4e3x8dSAtIHN8fCwgfHx2IC0gdXx8fVxyXG4gICAgICAgICAgICAgIGlmKHZzRGlzdGFuY2UgPCBNYXRoLm1heCh1c0Rpc3RhbmNlLCB2dURpc3RhbmNlKSkge1xyXG4gICAgICAgICAgICAgICAgaWYodnNEaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRlc3ROb2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZSk7ICAvLyBpbmZsdWVuY2VkQnkgaGVscHMgdG8gcG9pbnQgbmV4dCB2ZWluIG5vZGUgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvblxyXG4gICAgICAgICAgICAgICAgICBzb3VyY2UuaXNJbmZsdWVuY2luZy5wdXNoKG5vZGVJRCk7ICAgLy8gaXNJbmZsdWVuY2luZyBoZWxwcyB0byB0cmFjayB3aGVuIG5vZGVzIGhhdmUgcmVhY2hlZCB0aGVpciBzb3VyY2VzXHJcblxyXG4gICAgICAgICAgICAgICAgICBpZih2c0Rpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXN0Tm9kZS5oYXNSZWFjaGVkU291cmNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdyB0aGUgbmV0d29yayBieSBhZGRpbmcgbmV3IHZlaW4gbm9kZXMgb250byBhbnkgbm9kZXNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKHRoaXMubm9kZXMubGVuZ3RoIDwgMikge1xyXG4gICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlLmdldE5leHROb2RlKCkpO1xyXG5cclxuICAgICAgfSBlbHNlIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXV4aW4gc291cmNlXHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSBuZXcgVmVjMigwLDApO1xyXG5cclxuICAgICAgICBmb3IobGV0IHNvdXJjZSBvZiBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5zb3VyY2VzW2lkXSkpIHtcclxuICAgICAgICAvLyBmb3IobGV0IHNvdXJjZSBvZiBub2RlLmluZmx1ZW5jZWRCeSkge1xyXG4gICAgICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQoc291cmNlLnBvc2l0aW9uLnN1YnRyYWN0KG5vZGUucG9zaXRpb24sIHRydWUpLm5vcm1hbGl6ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQobmV3IFZlYzIocmFuZG9tKC0uMSwgLjEpLCByYW5kb20oLS4xLCAuMSkpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgdmVpbiBub2RlIHVzaW5nIHRoaXMgZGlyZWN0aW9uXHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5leHROb2RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBhbnkgYXV4aW4gc291cmNlcyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgdmVpbiBub2Rlc1xyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2UgYXMgc29vbiBhcyBhbnkgdmVpbiBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlIFwiT3BlblwiOlxyXG4gICAgICAgICAgaWYoc291cmNlLnJlYWNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIG9ubHkgd2hlbiBhbGwgYXNzb2NpYXRlZCB2ZWluIG5vZGVzIGhhdmUgcmVhY2hlZCBpdFxyXG4gICAgICAgIGNhc2UgXCJDbG9zZWRcIjpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pc0luZmx1ZW5jaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGFsbE5vZGVzUmVhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmlzSW5mbHVlbmNpbmcubWFwKGlkID0+IHRoaXMubm9kZXNbaWRdKSkge1xyXG4gICAgICAgICAgICAgIGlmKCFub2RlLmhhc1JlYWNoZWRTb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIGFsbE5vZGVzUmVhY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWxsTm9kZXNSZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNvdXJjZS5pc0luZmx1ZW5jaW5nID0gW107XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgLy8gRHJhdyB2ZWluIG5vZGVzXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyBhdXhpbiBzb3VyY2VzXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzKSB7XHJcbiAgICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICAgIHNvdXJjZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU291cmNlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3Rpb25ab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGRpcmVjdGlvbiwgaXNUaXAsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLmlzVGlwID0gaXNUaXA7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuaW5mbHVlbmNlZEJ5ID0gW107XHJcbiAgICB0aGlzLmhhc1JlYWNoZWRTb3VyY2UgPSBmYWxzZTtcclxuICAgIHRoaXMubmV4dERpcmVjdGlvbiA9IG5ldyBWZWMyKDAsMCk7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICcjMzMzJztcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLk1pbmltdW1WZWluVGhpY2tuZXNzOyAgLy8gVE9ETzogdmFyeSB2ZWluIHRoaWNrbmVzcyBiYXNlZCBvbiBhbGdvcml0aG1cclxuXHJcbiAgICAgICAgLy8gSWYgc2hvd2luZyB0aXBzLCBvdmVycmlkZSB3aXRoIHRoaWNrZXIgcmVkIHN0eWxlc1xyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJyNmZjAwMDAnO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG5cclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdXhpblJhZGl1cywgdGhpcy5zZXR0aW5ncy5BdXhpblJhZGl1cywgMCwgMCwgTWF0aC5QSSAqIDIpOyAgLy8gVE9ETzogdmFyeSBkb3QgcmFkaXVzIGJhc2VkIG9uIGFsZ29yaXRobVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzAwMCc7XHJcblxyXG4gICAgICAgIC8vIElmIHNob3dpbmcgdGlwcywgb3ZlcnJpZGUgZmlsbCB0byBiZSByZWRcclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnI2ZmMDAwMCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE5leHROb2RlKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24pIHtcclxuICAgIHRoaXMuaXNUaXAgPSBmYWxzZTtcclxuXHJcbiAgICBpZihhdmVyYWdlU291cmNlRGlyZWN0aW9uID09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbi5jbG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gdGhpcy5uZXh0RGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24uYWRkKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24sIHRydWUpLm5vcm1hbGl6ZSgpOyAgLy8gY3VybHkgdmFyaWFudFxyXG4gICAgICB0aGlzLm5leHREaXJlY3Rpb24gPSBhdmVyYWdlU291cmNlRGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmV4dFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5uZXh0RGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc2V0dGluZ3MuU2VnbWVudExlbmd0aCksIHRydWUpO1xyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlaW5Ob2RlKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLm5leHRQb3NpdGlvbixcclxuICAgICAgdGhpcy5uZXh0RGlyZWN0aW9uLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICB0aGlzLmN0eCxcclxuICAgICAgdGhpcy5zZXR0aW5nc1xyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgRGVsYXVuYXRvciBmcm9tIFwiZGVsYXVuYXRvclwiO1xuaW1wb3J0IFBhdGggZnJvbSBcIi4vcGF0aC5qc1wiO1xuaW1wb3J0IFBvbHlnb24gZnJvbSBcIi4vcG9seWdvbi5qc1wiO1xuaW1wb3J0IFZvcm9ub2kgZnJvbSBcIi4vdm9yb25vaS5qc1wiO1xuXG5jb25zdCB0YXUgPSAyICogTWF0aC5QSTtcblxuZnVuY3Rpb24gcG9pbnRYKHApIHtcbiAgcmV0dXJuIHBbMF07XG59XG5cbmZ1bmN0aW9uIHBvaW50WShwKSB7XG4gIHJldHVybiBwWzFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxhdW5heSB7XG4gIGNvbnN0cnVjdG9yKHBvaW50cykge1xuICAgIGNvbnN0IHtoYWxmZWRnZXMsIGh1bGwsIHRyaWFuZ2xlc30gPSBuZXcgRGVsYXVuYXRvcihwb2ludHMpO1xuICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgIHRoaXMuaGFsZmVkZ2VzID0gaGFsZmVkZ2VzO1xuICAgIHRoaXMuaHVsbCA9IGh1bGw7XG4gICAgdGhpcy50cmlhbmdsZXMgPSB0cmlhbmdsZXM7XG4gICAgY29uc3QgaW5lZGdlcyA9IHRoaXMuaW5lZGdlcyA9IG5ldyBJbnQzMkFycmF5KHBvaW50cy5sZW5ndGggLyAyKS5maWxsKC0xKTtcbiAgICBjb25zdCBvdXRlZGdlcyA9IHRoaXMub3V0ZWRnZXMgPSBuZXcgSW50MzJBcnJheShwb2ludHMubGVuZ3RoIC8gMikuZmlsbCgtMSk7XG5cbiAgICAvLyBDb21wdXRlIGFuIGluZGV4IGZyb20gZWFjaCBwb2ludCB0byBhbiAoYXJiaXRyYXJ5KSBpbmNvbWluZyBoYWxmZWRnZS5cbiAgICBmb3IgKGxldCBlID0gMCwgbiA9IGhhbGZlZGdlcy5sZW5ndGg7IGUgPCBuOyArK2UpIHtcbiAgICAgIGluZWRnZXNbdHJpYW5nbGVzW2UgJSAzID09PSAyID8gZSAtIDIgOiBlICsgMV1dID0gZTtcbiAgICB9XG5cbiAgICAvLyBGb3IgcG9pbnRzIG9uIHRoZSBodWxsLCBpbmRleCBib3RoIHRoZSBpbmNvbWluZyBhbmQgb3V0Z29pbmcgaGFsZmVkZ2VzLlxuICAgIGxldCBub2RlMCwgbm9kZTEgPSBodWxsO1xuICAgIGRvIHtcbiAgICAgIG5vZGUwID0gbm9kZTEsIG5vZGUxID0gbm9kZTEubmV4dDtcbiAgICAgIGluZWRnZXNbbm9kZTEuaV0gPSBub2RlMC50O1xuICAgICAgb3V0ZWRnZXNbbm9kZTAuaV0gPSBub2RlMS50O1xuICAgIH0gd2hpbGUgKG5vZGUxICE9PSBodWxsKTtcbiAgfVxuICB2b3Jvbm9pKGJvdW5kcykge1xuICAgIHJldHVybiBuZXcgVm9yb25vaSh0aGlzLCBib3VuZHMpO1xuICB9XG4gICpuZWlnaGJvcnMoaSkge1xuICAgIGNvbnN0IHtpbmVkZ2VzLCBvdXRlZGdlcywgaGFsZmVkZ2VzLCB0cmlhbmdsZXN9ID0gdGhpcztcbiAgICBjb25zdCBlMCA9IGluZWRnZXNbaV07XG4gICAgaWYgKGUwID09PSAtMSkgcmV0dXJuOyAvLyBjb2luY2lkZW50IHBvaW50XG4gICAgbGV0IGUgPSBlMDtcbiAgICBkbyB7XG4gICAgICB5aWVsZCB0cmlhbmdsZXNbZV07XG4gICAgICBlID0gZSAlIDMgPT09IDIgPyBlIC0gMiA6IGUgKyAxO1xuICAgICAgaWYgKHRyaWFuZ2xlc1tlXSAhPT0gaSkgcmV0dXJuOyAvLyBiYWQgdHJpYW5ndWxhdGlvblxuICAgICAgZSA9IGhhbGZlZGdlc1tlXTtcbiAgICAgIGlmIChlID09PSAtMSkgcmV0dXJuIHlpZWxkIHRyaWFuZ2xlc1tvdXRlZGdlc1tpXV07XG4gICAgfSB3aGlsZSAoZSAhPT0gZTApO1xuICB9XG4gIGZpbmQoeCwgeSwgaSA9IDApIHtcbiAgICBpZiAoKHggPSAreCwgeCAhPT0geCkgfHwgKHkgPSAreSwgeSAhPT0geSkpIHJldHVybiAtMTtcbiAgICBsZXQgYztcbiAgICB3aGlsZSAoKGMgPSB0aGlzLl9zdGVwKGksIHgsIHkpKSA+PSAwICYmIGMgIT09IGkpIGkgPSBjO1xuICAgIHJldHVybiBjO1xuICB9XG4gIF9zdGVwKGksIHgsIHkpIHtcbiAgICBjb25zdCB7aW5lZGdlcywgcG9pbnRzfSA9IHRoaXM7XG4gICAgaWYgKGluZWRnZXNbaV0gPT09IC0xKSByZXR1cm4gLTE7IC8vIGNvaW5jaWRlbnQgcG9pbnRcbiAgICBsZXQgYyA9IGk7XG4gICAgbGV0IGRjID0gKHggLSBwb2ludHNbaSAqIDJdKSAqKiAyICsgKHkgLSBwb2ludHNbaSAqIDIgKyAxXSkgKiogMjtcbiAgICBmb3IgKGNvbnN0IHQgb2YgdGhpcy5uZWlnaGJvcnMoaSkpIHtcbiAgICAgIGNvbnN0IGR0ID0gKHggLSBwb2ludHNbdCAqIDJdKSAqKiAyICsgKHkgLSBwb2ludHNbdCAqIDIgKyAxXSkgKiogMjtcbiAgICAgIGlmIChkdCA8IGRjKSBkYyA9IGR0LCBjID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cbiAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICBjb25zdCBidWZmZXIgPSBjb250ZXh0ID09IG51bGwgPyBjb250ZXh0ID0gbmV3IFBhdGggOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qge3BvaW50cywgaGFsZmVkZ2VzLCB0cmlhbmdsZXN9ID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGhhbGZlZGdlcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbnN0IGogPSBoYWxmZWRnZXNbaV07XG4gICAgICBpZiAoaiA8IGkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgdGkgPSB0cmlhbmdsZXNbaV0gKiAyO1xuICAgICAgY29uc3QgdGogPSB0cmlhbmdsZXNbal0gKiAyO1xuICAgICAgY29udGV4dC5tb3ZlVG8ocG9pbnRzW3RpXSwgcG9pbnRzW3RpICsgMV0pO1xuICAgICAgY29udGV4dC5saW5lVG8ocG9pbnRzW3RqXSwgcG9pbnRzW3RqICsgMV0pO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckh1bGwoY29udGV4dCk7XG4gICAgcmV0dXJuIGJ1ZmZlciAmJiBidWZmZXIudmFsdWUoKTtcbiAgfVxuICByZW5kZXJQb2ludHMoY29udGV4dCwgciA9IDIpIHtcbiAgICBjb25zdCBidWZmZXIgPSBjb250ZXh0ID09IG51bGwgPyBjb250ZXh0ID0gbmV3IFBhdGggOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qge3BvaW50c30gPSB0aGlzO1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gcG9pbnRzLmxlbmd0aDsgaSA8IG47IGkgKz0gMikge1xuICAgICAgY29uc3QgeCA9IHBvaW50c1tpXSwgeSA9IHBvaW50c1tpICsgMV07XG4gICAgICBjb250ZXh0Lm1vdmVUbyh4ICsgciwgeSk7XG4gICAgICBjb250ZXh0LmFyYyh4LCB5LCByLCAwLCB0YXUpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyICYmIGJ1ZmZlci52YWx1ZSgpO1xuICB9XG4gIHJlbmRlckh1bGwoY29udGV4dCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvbnRleHQgPT0gbnVsbCA/IGNvbnRleHQgPSBuZXcgUGF0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCB7aHVsbH0gPSB0aGlzO1xuICAgIGxldCBub2RlID0gaHVsbDtcbiAgICBjb250ZXh0Lm1vdmVUbyhub2RlLngsIG5vZGUueSk7XG4gICAgd2hpbGUgKG5vZGUgPSBub2RlLm5leHQsIG5vZGUgIT09IGh1bGwpIGNvbnRleHQubGluZVRvKG5vZGUueCwgbm9kZS55KTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBidWZmZXIgJiYgYnVmZmVyLnZhbHVlKCk7XG4gIH1cbiAgaHVsbFBvbHlnb24oKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uO1xuICAgIHRoaXMucmVuZGVySHVsbChwb2x5Z29uKTtcbiAgICByZXR1cm4gcG9seWdvbi52YWx1ZSgpO1xuICB9XG4gIHJlbmRlclRyaWFuZ2xlKGksIGNvbnRleHQpIHtcbiAgICBjb25zdCBidWZmZXIgPSBjb250ZXh0ID09IG51bGwgPyBjb250ZXh0ID0gbmV3IFBhdGggOiB1bmRlZmluZWQ7XG4gICAgY29uc3Qge3BvaW50cywgdHJpYW5nbGVzfSA9IHRoaXM7XG4gICAgY29uc3QgdDAgPSB0cmlhbmdsZXNbaSAqPSAzXSAqIDI7XG4gICAgY29uc3QgdDEgPSB0cmlhbmdsZXNbaSArIDFdICogMjtcbiAgICBjb25zdCB0MiA9IHRyaWFuZ2xlc1tpICsgMl0gKiAyO1xuICAgIGNvbnRleHQubW92ZVRvKHBvaW50c1t0MF0sIHBvaW50c1t0MCArIDFdKTtcbiAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbdDFdLCBwb2ludHNbdDEgKyAxXSk7XG4gICAgY29udGV4dC5saW5lVG8ocG9pbnRzW3QyXSwgcG9pbnRzW3QyICsgMV0pO1xuICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIGJ1ZmZlciAmJiBidWZmZXIudmFsdWUoKTtcbiAgfVxuICAqdHJpYW5nbGVQb2x5Z29ucygpIHtcbiAgICBjb25zdCB7dHJpYW5nbGVzfSA9IHRoaXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB0cmlhbmdsZXMubGVuZ3RoIC8gMzsgaSA8IG47ICsraSkge1xuICAgICAgeWllbGQgdGhpcy50cmlhbmdsZVBvbHlnb24oaSk7XG4gICAgfVxuICB9XG4gIHRyaWFuZ2xlUG9seWdvbihpKSB7XG4gICAgY29uc3QgcG9seWdvbiA9IG5ldyBQb2x5Z29uO1xuICAgIHRoaXMucmVuZGVyVHJpYW5nbGUoaSwgcG9seWdvbik7XG4gICAgcmV0dXJuIHBvbHlnb24udmFsdWUoKTtcbiAgfVxufVxuXG5EZWxhdW5heS5mcm9tID0gZnVuY3Rpb24ocG9pbnRzLCBmeCA9IHBvaW50WCwgZnkgPSBwb2ludFksIHRoYXQpIHtcbiAgcmV0dXJuIG5ldyBEZWxhdW5heShcImxlbmd0aFwiIGluIHBvaW50c1xuICAgICAgPyBmbGF0QXJyYXkocG9pbnRzLCBmeCwgZnksIHRoYXQpXG4gICAgICA6IEZsb2F0NjRBcnJheS5mcm9tKGZsYXRJdGVyYWJsZShwb2ludHMsIGZ4LCBmeSwgdGhhdCkpKTtcbn07XG5cbmZ1bmN0aW9uIGZsYXRBcnJheShwb2ludHMsIGZ4LCBmeSwgdGhhdCkge1xuICBjb25zdCBuID0gcG9pbnRzLmxlbmd0aDtcbiAgY29uc3QgYXJyYXkgPSBuZXcgRmxvYXQ2NEFycmF5KG4gKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICBjb25zdCBwID0gcG9pbnRzW2ldO1xuICAgIGFycmF5W2kgKiAyXSA9IGZ4LmNhbGwodGhhdCwgcCwgaSwgcG9pbnRzKTtcbiAgICBhcnJheVtpICogMiArIDFdID0gZnkuY2FsbCh0aGF0LCBwLCBpLCBwb2ludHMpO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuZnVuY3Rpb24qIGZsYXRJdGVyYWJsZShwb2ludHMsIGZ4LCBmeSwgdGhhdCkge1xuICBsZXQgaSA9IDA7XG4gIGZvciAoY29uc3QgcCBvZiBwb2ludHMpIHtcbiAgICB5aWVsZCBmeC5jYWxsKHRoYXQsIHAsIGksIHBvaW50cyk7XG4gICAgeWllbGQgZnkuY2FsbCh0aGF0LCBwLCBpLCBwb2ludHMpO1xuICAgICsraTtcbiAgfVxufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIERlbGF1bmF5fSBmcm9tIFwiLi9kZWxhdW5heS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIFZvcm9ub2l9IGZyb20gXCIuL3Zvcm9ub2kuanNcIjtcbiIsImNvbnN0IGVwc2lsb24gPSAxZS02O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5feDAgPSB0aGlzLl95MCA9IC8vIHN0YXJ0IG9mIGN1cnJlbnQgc3VicGF0aFxuICAgIHRoaXMuX3gxID0gdGhpcy5feTEgPSBudWxsOyAvLyBlbmQgb2YgY3VycmVudCBzdWJwYXRoXG4gICAgdGhpcy5fID0gXCJcIjtcbiAgfVxuICBtb3ZlVG8oeCwgeSkge1xuICAgIHRoaXMuXyArPSBgTSR7dGhpcy5feDAgPSB0aGlzLl94MSA9ICt4fSwke3RoaXMuX3kwID0gdGhpcy5feTEgPSAreX1gO1xuICB9XG4gIGNsb3NlUGF0aCgpIHtcbiAgICBpZiAodGhpcy5feDEgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3gxID0gdGhpcy5feDAsIHRoaXMuX3kxID0gdGhpcy5feTA7XG4gICAgICB0aGlzLl8gKz0gXCJaXCI7XG4gICAgfVxuICB9XG4gIGxpbmVUbyh4LCB5KSB7XG4gICAgdGhpcy5fICs9IGBMJHt0aGlzLl94MSA9ICt4fSwke3RoaXMuX3kxID0gK3l9YDtcbiAgfVxuICBhcmMoeCwgeSwgcikge1xuICAgIHggPSAreCwgeSA9ICt5LCByID0gK3I7XG4gICAgY29uc3QgeDAgPSB4ICsgcjtcbiAgICBjb25zdCB5MCA9IHk7XG4gICAgaWYgKHIgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJuZWdhdGl2ZSByYWRpdXNcIik7XG4gICAgaWYgKHRoaXMuX3gxID09PSBudWxsKSB0aGlzLl8gKz0gYE0ke3gwfSwke3kwfWA7XG4gICAgZWxzZSBpZiAoTWF0aC5hYnModGhpcy5feDEgLSB4MCkgPiBlcHNpbG9uIHx8IE1hdGguYWJzKHRoaXMuX3kxIC0geTApID4gZXBzaWxvbikgdGhpcy5fICs9IFwiTFwiICsgeDAgKyBcIixcIiArIHkwO1xuICAgIGlmICghcikgcmV0dXJuO1xuICAgIHRoaXMuXyArPSBgQSR7cn0sJHtyfSwwLDEsMSwke3ggLSByfSwke3l9QSR7cn0sJHtyfSwwLDEsMSwke3RoaXMuX3gxID0geDB9LCR7dGhpcy5feTEgPSB5MH1gO1xuICB9XG4gIHJlY3QoeCwgeSwgdywgaCkge1xuICAgIHRoaXMuXyArPSBgTSR7dGhpcy5feDAgPSB0aGlzLl94MSA9ICt4fSwke3RoaXMuX3kwID0gdGhpcy5feTEgPSAreX1oJHsrd312JHsraH1oJHstd31aYDtcbiAgfVxuICB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fIHx8IG51bGw7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlnb24ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl8gPSBbXTtcbiAgfVxuICBtb3ZlVG8oeCwgeSkge1xuICAgIHRoaXMuXy5wdXNoKFt4LCB5XSk7XG4gIH1cbiAgY2xvc2VQYXRoKCkge1xuICAgIHRoaXMuXy5wdXNoKHRoaXMuX1swXS5zbGljZSgpKTtcbiAgfVxuICBsaW5lVG8oeCwgeSkge1xuICAgIHRoaXMuXy5wdXNoKFt4LCB5XSk7XG4gIH1cbiAgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuXy5sZW5ndGggPyB0aGlzLl8gOiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgUGF0aCBmcm9tIFwiLi9wYXRoLmpzXCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwiLi9wb2x5Z29uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZvcm9ub2kge1xuICBjb25zdHJ1Y3RvcihkZWxhdW5heSwgW3htaW4sIHltaW4sIHhtYXgsIHltYXhdID0gWzAsIDAsIDk2MCwgNTAwXSkge1xuICAgIGlmICghKCh4bWF4ID0gK3htYXgpID49ICh4bWluID0gK3htaW4pKSB8fCAhKCh5bWF4ID0gK3ltYXgpID49ICh5bWluID0gK3ltaW4pKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBib3VuZHNcIik7XG4gICAgY29uc3Qge3BvaW50cywgaHVsbCwgdHJpYW5nbGVzfSA9IHRoaXMuZGVsYXVuYXkgPSBkZWxhdW5heTtcbiAgICBjb25zdCBjaXJjdW1jZW50ZXJzID0gdGhpcy5jaXJjdW1jZW50ZXJzID0gbmV3IEZsb2F0NjRBcnJheSh0cmlhbmdsZXMubGVuZ3RoIC8gMyAqIDIpO1xuICAgIGNvbnN0IHZlY3RvcnMgPSB0aGlzLnZlY3RvcnMgPSBuZXcgRmxvYXQ2NEFycmF5KHBvaW50cy5sZW5ndGggKiAyKTtcbiAgICB0aGlzLnhtYXggPSB4bWF4LCB0aGlzLnhtaW4gPSB4bWluO1xuICAgIHRoaXMueW1heCA9IHltYXgsIHRoaXMueW1pbiA9IHltaW47XG5cbiAgICAvLyBDb21wdXRlIGNpcmN1bWNlbnRlcnMuXG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSAwLCBuID0gdHJpYW5nbGVzLmxlbmd0aDsgaSA8IG47IGkgKz0gMywgaiArPSAyKSB7XG4gICAgICBjb25zdCB0MSA9IHRyaWFuZ2xlc1tpXSAqIDI7XG4gICAgICBjb25zdCB0MiA9IHRyaWFuZ2xlc1tpICsgMV0gKiAyO1xuICAgICAgY29uc3QgdDMgPSB0cmlhbmdsZXNbaSArIDJdICogMjtcbiAgICAgIGNvbnN0IHgxID0gcG9pbnRzW3QxXTtcbiAgICAgIGNvbnN0IHkxID0gcG9pbnRzW3QxICsgMV07XG4gICAgICBjb25zdCB4MiA9IHBvaW50c1t0Ml07XG4gICAgICBjb25zdCB5MiA9IHBvaW50c1t0MiArIDFdO1xuICAgICAgY29uc3QgeDMgPSBwb2ludHNbdDNdO1xuICAgICAgY29uc3QgeTMgPSBwb2ludHNbdDMgKyAxXTtcbiAgICAgIGNvbnN0IGEyID0geDEgLSB4MjtcbiAgICAgIGNvbnN0IGEzID0geDEgLSB4MztcbiAgICAgIGNvbnN0IGIyID0geTEgLSB5MjtcbiAgICAgIGNvbnN0IGIzID0geTEgLSB5MztcbiAgICAgIGNvbnN0IGQxID0geDEgKiB4MSArIHkxICogeTE7XG4gICAgICBjb25zdCBkMiA9IGQxIC0geDIgKiB4MiAtIHkyICogeTI7XG4gICAgICBjb25zdCBkMyA9IGQxIC0geDMgKiB4MyAtIHkzICogeTM7XG4gICAgICBjb25zdCBhYiA9IChhMyAqIGIyIC0gYTIgKiBiMykgKiAyO1xuICAgICAgY2lyY3VtY2VudGVyc1tqXSA9IChiMiAqIGQzIC0gYjMgKiBkMikgLyBhYjtcbiAgICAgIGNpcmN1bWNlbnRlcnNbaiArIDFdID0gKGEzICogZDIgLSBhMiAqIGQzKSAvIGFiO1xuICAgIH1cblxuICAgIC8vIENvbXB1dGUgZXh0ZXJpb3IgY2VsbCByYXlzLlxuICAgIGxldCBub2RlID0gaHVsbDtcbiAgICBsZXQgcDAsIHAxID0gbm9kZS5pICogNDtcbiAgICBsZXQgeDAsIHgxID0gbm9kZS54O1xuICAgIGxldCB5MCwgeTEgPSBub2RlLnk7XG4gICAgZG8ge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dCwgcDAgPSBwMSwgeDAgPSB4MSwgeTAgPSB5MSwgcDEgPSBub2RlLmkgKiA0LCB4MSA9IG5vZGUueCwgeTEgPSBub2RlLnk7XG4gICAgICB2ZWN0b3JzW3AwICsgMl0gPSB2ZWN0b3JzW3AxXSA9IHkwIC0geTE7XG4gICAgICB2ZWN0b3JzW3AwICsgM10gPSB2ZWN0b3JzW3AxICsgMV0gPSB4MSAtIHgwO1xuICAgIH0gd2hpbGUgKG5vZGUgIT09IGh1bGwpO1xuICB9XG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgY29uc3QgYnVmZmVyID0gY29udGV4dCA9PSBudWxsID8gY29udGV4dCA9IG5ldyBQYXRoIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IHtkZWxhdW5heToge2hhbGZlZGdlcywgaHVsbH0sIGNpcmN1bWNlbnRlcnMsIHZlY3RvcnN9ID0gdGhpcztcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IGhhbGZlZGdlcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGNvbnN0IGogPSBoYWxmZWRnZXNbaV07XG4gICAgICBpZiAoaiA8IGkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgdGkgPSBNYXRoLmZsb29yKGkgLyAzKSAqIDI7XG4gICAgICBjb25zdCB0aiA9IE1hdGguZmxvb3IoaiAvIDMpICogMjtcbiAgICAgIGNvbnN0IHhpID0gY2lyY3VtY2VudGVyc1t0aV07XG4gICAgICBjb25zdCB5aSA9IGNpcmN1bWNlbnRlcnNbdGkgKyAxXTtcbiAgICAgIGNvbnN0IHhqID0gY2lyY3VtY2VudGVyc1t0al07XG4gICAgICBjb25zdCB5aiA9IGNpcmN1bWNlbnRlcnNbdGogKyAxXTtcbiAgICAgIHRoaXMuX3JlbmRlclNlZ21lbnQoeGksIHlpLCB4aiwgeWosIGNvbnRleHQpO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGh1bGw7XG4gICAgZG8ge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLmZsb29yKG5vZGUudCAvIDMpICogMjtcbiAgICAgIGNvbnN0IHggPSBjaXJjdW1jZW50ZXJzW3RdO1xuICAgICAgY29uc3QgeSA9IGNpcmN1bWNlbnRlcnNbdCArIDFdO1xuICAgICAgY29uc3QgdiA9IG5vZGUuaSAqIDQ7XG4gICAgICBjb25zdCBwID0gdGhpcy5fcHJvamVjdCh4LCB5LCB2ZWN0b3JzW3YgKyAyXSwgdmVjdG9yc1t2ICsgM10pO1xuICAgICAgaWYgKHApIHRoaXMuX3JlbmRlclNlZ21lbnQoeCwgeSwgcFswXSwgcFsxXSwgY29udGV4dCk7XG4gICAgfSB3aGlsZSAobm9kZSAhPT0gaHVsbCk7XG4gICAgcmV0dXJuIGJ1ZmZlciAmJiBidWZmZXIudmFsdWUoKTtcbiAgfVxuICByZW5kZXJCb3VuZHMoY29udGV4dCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvbnRleHQgPT0gbnVsbCA/IGNvbnRleHQgPSBuZXcgUGF0aCA6IHVuZGVmaW5lZDtcbiAgICBjb250ZXh0LnJlY3QodGhpcy54bWluLCB0aGlzLnltaW4sIHRoaXMueG1heCAtIHRoaXMueG1pbiwgdGhpcy55bWF4IC0gdGhpcy55bWluKTtcbiAgICByZXR1cm4gYnVmZmVyICYmIGJ1ZmZlci52YWx1ZSgpO1xuICB9XG4gIHJlbmRlckNlbGwoaSwgY29udGV4dCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IGNvbnRleHQgPT0gbnVsbCA/IGNvbnRleHQgPSBuZXcgUGF0aCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBwb2ludHMgPSB0aGlzLl9jbGlwKGkpO1xuICAgIGlmIChwb2ludHMgPT09IG51bGwpIHJldHVybjtcbiAgICBjb250ZXh0Lm1vdmVUbyhwb2ludHNbMF0sIHBvaW50c1sxXSk7XG4gICAgZm9yIChsZXQgaSA9IDIsIG4gPSBwb2ludHMubGVuZ3RoOyBpIDwgbjsgaSArPSAyKSB7XG4gICAgICBjb250ZXh0LmxpbmVUbyhwb2ludHNbaV0sIHBvaW50c1tpICsgMV0pO1xuICAgIH1cbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBidWZmZXIgJiYgYnVmZmVyLnZhbHVlKCk7XG4gIH1cbiAgKmNlbGxQb2x5Z29ucygpIHtcbiAgICBjb25zdCB7ZGVsYXVuYXk6IHtwb2ludHN9fSA9IHRoaXM7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSBwb2ludHMubGVuZ3RoIC8gMjsgaSA8IG47ICsraSkge1xuICAgICAgY29uc3QgY2VsbCA9IHRoaXMuY2VsbFBvbHlnb24oaSk7XG4gICAgICBpZiAoY2VsbCkgeWllbGQgY2VsbDtcbiAgICB9XG4gIH1cbiAgY2VsbFBvbHlnb24oaSkge1xuICAgIGNvbnN0IHBvbHlnb24gPSBuZXcgUG9seWdvbjtcbiAgICB0aGlzLnJlbmRlckNlbGwoaSwgcG9seWdvbik7XG4gICAgcmV0dXJuIHBvbHlnb24udmFsdWUoKTtcbiAgfVxuICBfcmVuZGVyU2VnbWVudCh4MCwgeTAsIHgxLCB5MSwgY29udGV4dCkge1xuICAgIGxldCBTO1xuICAgIGNvbnN0IGMwID0gdGhpcy5fcmVnaW9uY29kZSh4MCwgeTApO1xuICAgIGNvbnN0IGMxID0gdGhpcy5fcmVnaW9uY29kZSh4MSwgeTEpO1xuICAgIGlmIChjMCA9PT0gMCAmJiBjMSA9PT0gMCkge1xuICAgICAgY29udGV4dC5tb3ZlVG8oeDAsIHkwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHgxLCB5MSk7XG4gICAgfSBlbHNlIGlmIChTID0gdGhpcy5fY2xpcFNlZ21lbnQoeDAsIHkwLCB4MSwgeTEsIGMwLCBjMSkpIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKFNbMF0sIFNbMV0pO1xuICAgICAgY29udGV4dC5saW5lVG8oU1syXSwgU1szXSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5zKGksIHgsIHkpIHtcbiAgICBpZiAoKHggPSAreCwgeCAhPT0geCkgfHwgKHkgPSAreSwgeSAhPT0geSkpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5kZWxhdW5heS5fc3RlcChpLCB4LCB5KSA9PT0gaTtcbiAgfVxuICBfY2VsbChpKSB7XG4gICAgY29uc3Qge2NpcmN1bWNlbnRlcnMsIGRlbGF1bmF5OiB7aW5lZGdlcywgaGFsZmVkZ2VzLCB0cmlhbmdsZXN9fSA9IHRoaXM7XG4gICAgY29uc3QgZTAgPSBpbmVkZ2VzW2ldO1xuICAgIGlmIChlMCA9PT0gLTEpIHJldHVybiBudWxsOyAvLyBjb2luY2lkZW50IHBvaW50XG4gICAgY29uc3QgcG9pbnRzID0gW107XG4gICAgbGV0IGUgPSBlMDtcbiAgICBkbyB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5mbG9vcihlIC8gMyk7XG4gICAgICBwb2ludHMucHVzaChjaXJjdW1jZW50ZXJzW3QgKiAyXSwgY2lyY3VtY2VudGVyc1t0ICogMiArIDFdKTtcbiAgICAgIGUgPSBlICUgMyA9PT0gMiA/IGUgLSAyIDogZSArIDE7XG4gICAgICBpZiAodHJpYW5nbGVzW2VdICE9PSBpKSBicmVhazsgLy8gYmFkIHRyaWFuZ3VsYXRpb25cbiAgICAgIGUgPSBoYWxmZWRnZXNbZV07XG4gICAgfSB3aGlsZSAoZSAhPT0gZTAgJiYgZSAhPT0gLTEpO1xuICAgIHJldHVybiBwb2ludHM7XG4gIH1cbiAgX2NsaXAoaSkge1xuICAgIGNvbnN0IHBvaW50cyA9IHRoaXMuX2NlbGwoaSk7XG4gICAgaWYgKHBvaW50cyA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qge3ZlY3RvcnM6IFZ9ID0gdGhpcztcbiAgICBjb25zdCB2ID0gaSAqIDQ7XG4gICAgcmV0dXJuIFZbdl0gfHwgVlt2ICsgMV1cbiAgICAgICAgPyB0aGlzLl9jbGlwSW5maW5pdGUoaSwgcG9pbnRzLCBWW3ZdLCBWW3YgKyAxXSwgVlt2ICsgMl0sIFZbdiArIDNdKVxuICAgICAgICA6IHRoaXMuX2NsaXBGaW5pdGUoaSwgcG9pbnRzKTtcbiAgfVxuICBfY2xpcEZpbml0ZShpLCBwb2ludHMpIHtcbiAgICBjb25zdCBuID0gcG9pbnRzLmxlbmd0aDtcbiAgICBsZXQgUCA9IG51bGw7XG4gICAgbGV0IHgwLCB5MCwgeDEgPSBwb2ludHNbbiAtIDJdLCB5MSA9IHBvaW50c1tuIC0gMV07XG4gICAgbGV0IGMwLCBjMSA9IHRoaXMuX3JlZ2lvbmNvZGUoeDEsIHkxKTtcbiAgICBsZXQgZTAsIGUxO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaiArPSAyKSB7XG4gICAgICB4MCA9IHgxLCB5MCA9IHkxLCB4MSA9IHBvaW50c1tqXSwgeTEgPSBwb2ludHNbaiArIDFdO1xuICAgICAgYzAgPSBjMSwgYzEgPSB0aGlzLl9yZWdpb25jb2RlKHgxLCB5MSk7XG4gICAgICBpZiAoYzAgPT09IDAgJiYgYzEgPT09IDApIHtcbiAgICAgICAgZTAgPSBlMSwgZTEgPSAwO1xuICAgICAgICBpZiAoUCkgUC5wdXNoKHgxLCB5MSk7XG4gICAgICAgIGVsc2UgUCA9IFt4MSwgeTFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IFMsIHN4MCwgc3kwLCBzeDEsIHN5MTtcbiAgICAgICAgaWYgKGMwID09PSAwKSB7XG4gICAgICAgICAgaWYgKChTID0gdGhpcy5fY2xpcFNlZ21lbnQoeDAsIHkwLCB4MSwgeTEsIGMwLCBjMSkpID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgICBbc3gwLCBzeTAsIHN4MSwgc3kxXSA9IFM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKChTID0gdGhpcy5fY2xpcFNlZ21lbnQoeDEsIHkxLCB4MCwgeTAsIGMxLCBjMCkpID09PSBudWxsKSBjb250aW51ZTtcbiAgICAgICAgICBbc3gxLCBzeTEsIHN4MCwgc3kwXSA9IFM7XG4gICAgICAgICAgZTAgPSBlMSwgZTEgPSB0aGlzLl9lZGdlY29kZShzeDAsIHN5MCk7XG4gICAgICAgICAgaWYgKGUwICYmIGUxKSB0aGlzLl9lZGdlKGksIGUwLCBlMSwgUCwgUC5sZW5ndGgpO1xuICAgICAgICAgIGlmIChQKSBQLnB1c2goc3gwLCBzeTApO1xuICAgICAgICAgIGVsc2UgUCA9IFtzeDAsIHN5MF07XG4gICAgICAgIH1cbiAgICAgICAgZTAgPSBlMSwgZTEgPSB0aGlzLl9lZGdlY29kZShzeDEsIHN5MSk7XG4gICAgICAgIGlmIChlMCAmJiBlMSkgdGhpcy5fZWRnZShpLCBlMCwgZTEsIFAsIFAubGVuZ3RoKTtcbiAgICAgICAgaWYgKFApIFAucHVzaChzeDEsIHN5MSk7XG4gICAgICAgIGVsc2UgUCA9IFtzeDEsIHN5MV07XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChQKSB7XG4gICAgICBlMCA9IGUxLCBlMSA9IHRoaXMuX2VkZ2Vjb2RlKFBbMF0sIFBbMV0pO1xuICAgICAgaWYgKGUwICYmIGUxKSB0aGlzLl9lZGdlKGksIGUwLCBlMSwgUCwgUC5sZW5ndGgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250YWlucyhpLCAodGhpcy54bWluICsgdGhpcy54bWF4KSAvIDIsICh0aGlzLnltaW4gKyB0aGlzLnltYXgpIC8gMikpIHtcbiAgICAgIHJldHVybiBbdGhpcy54bWF4LCB0aGlzLnltaW4sIHRoaXMueG1heCwgdGhpcy55bWF4LCB0aGlzLnhtaW4sIHRoaXMueW1heCwgdGhpcy54bWluLCB0aGlzLnltaW5dO1xuICAgIH1cbiAgICByZXR1cm4gUDtcbiAgfVxuICBfY2xpcFNlZ21lbnQoeDAsIHkwLCB4MSwgeTEsIGMwLCBjMSkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoYzAgPT09IDAgJiYgYzEgPT09IDApIHJldHVybiBbeDAsIHkwLCB4MSwgeTFdO1xuICAgICAgaWYgKGMwICYgYzEpIHJldHVybiBudWxsO1xuICAgICAgbGV0IHgsIHksIGMgPSBjMCB8fCBjMTtcbiAgICAgIGlmIChjICYgMGIxMDAwKSB4ID0geDAgKyAoeDEgLSB4MCkgKiAodGhpcy55bWF4IC0geTApIC8gKHkxIC0geTApLCB5ID0gdGhpcy55bWF4O1xuICAgICAgZWxzZSBpZiAoYyAmIDBiMDEwMCkgeCA9IHgwICsgKHgxIC0geDApICogKHRoaXMueW1pbiAtIHkwKSAvICh5MSAtIHkwKSwgeSA9IHRoaXMueW1pbjtcbiAgICAgIGVsc2UgaWYgKGMgJiAwYjAwMTApIHkgPSB5MCArICh5MSAtIHkwKSAqICh0aGlzLnhtYXggLSB4MCkgLyAoeDEgLSB4MCksIHggPSB0aGlzLnhtYXg7XG4gICAgICBlbHNlIHkgPSB5MCArICh5MSAtIHkwKSAqICh0aGlzLnhtaW4gLSB4MCkgLyAoeDEgLSB4MCksIHggPSB0aGlzLnhtaW47XG4gICAgICBpZiAoYzApIHgwID0geCwgeTAgPSB5LCBjMCA9IHRoaXMuX3JlZ2lvbmNvZGUoeDAsIHkwKTtcbiAgICAgIGVsc2UgeDEgPSB4LCB5MSA9IHksIGMxID0gdGhpcy5fcmVnaW9uY29kZSh4MSwgeTEpO1xuICAgIH1cbiAgfVxuICBfY2xpcEluZmluaXRlKGksIHBvaW50cywgdngwLCB2eTAsIHZ4biwgdnluKSB7XG4gICAgbGV0IFAgPSBBcnJheS5mcm9tKHBvaW50cyksIHA7XG4gICAgaWYgKHAgPSB0aGlzLl9wcm9qZWN0KFBbMF0sIFBbMV0sIHZ4MCwgdnkwKSkgUC51bnNoaWZ0KHBbMF0sIHBbMV0pO1xuICAgIGlmIChwID0gdGhpcy5fcHJvamVjdChQW1AubGVuZ3RoIC0gMl0sIFBbUC5sZW5ndGggLSAxXSwgdnhuLCB2eW4pKSBQLnB1c2gocFswXSwgcFsxXSk7XG4gICAgaWYgKFAgPSB0aGlzLl9jbGlwRmluaXRlKGksIFApKSB7XG4gICAgICBmb3IgKGxldCBqID0gMCwgbiA9IFAubGVuZ3RoLCBjMCwgYzEgPSB0aGlzLl9lZGdlY29kZShQW24gLSAyXSwgUFtuIC0gMV0pOyBqIDwgbjsgaiArPSAyKSB7XG4gICAgICAgIGMwID0gYzEsIGMxID0gdGhpcy5fZWRnZWNvZGUoUFtqXSwgUFtqICsgMV0pO1xuICAgICAgICBpZiAoYzAgJiYgYzEpIGogPSB0aGlzLl9lZGdlKGksIGMwLCBjMSwgUCwgaiksIG4gPSBQLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbnMoaSwgKHRoaXMueG1pbiArIHRoaXMueG1heCkgLyAyLCAodGhpcy55bWluICsgdGhpcy55bWF4KSAvIDIpKSB7XG4gICAgICBQID0gW3RoaXMueG1pbiwgdGhpcy55bWluLCB0aGlzLnhtYXgsIHRoaXMueW1pbiwgdGhpcy54bWF4LCB0aGlzLnltYXgsIHRoaXMueG1pbiwgdGhpcy55bWF4XTtcbiAgICB9XG4gICAgcmV0dXJuIFA7XG4gIH1cbiAgX2VkZ2UoaSwgZTAsIGUxLCBQLCBqKSB7XG4gICAgd2hpbGUgKGUwICE9PSBlMSkge1xuICAgICAgbGV0IHgsIHk7XG4gICAgICBzd2l0Y2ggKGUwKSB7XG4gICAgICAgIGNhc2UgMGIwMTAxOiBlMCA9IDBiMDEwMDsgY29udGludWU7IC8vIHRvcC1sZWZ0XG4gICAgICAgIGNhc2UgMGIwMTAwOiBlMCA9IDBiMDExMCwgeCA9IHRoaXMueG1heCwgeSA9IHRoaXMueW1pbjsgYnJlYWs7IC8vIHRvcFxuICAgICAgICBjYXNlIDBiMDExMDogZTAgPSAwYjAwMTA7IGNvbnRpbnVlOyAvLyB0b3AtcmlnaHRcbiAgICAgICAgY2FzZSAwYjAwMTA6IGUwID0gMGIxMDEwLCB4ID0gdGhpcy54bWF4LCB5ID0gdGhpcy55bWF4OyBicmVhazsgLy8gcmlnaHRcbiAgICAgICAgY2FzZSAwYjEwMTA6IGUwID0gMGIxMDAwOyBjb250aW51ZTsgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIGNhc2UgMGIxMDAwOiBlMCA9IDBiMTAwMSwgeCA9IHRoaXMueG1pbiwgeSA9IHRoaXMueW1heDsgYnJlYWs7IC8vIGJvdHRvbVxuICAgICAgICBjYXNlIDBiMTAwMTogZTAgPSAwYjAwMDE7IGNvbnRpbnVlOyAvLyBib3R0b20tbGVmdFxuICAgICAgICBjYXNlIDBiMDAwMTogZTAgPSAwYjAxMDEsIHggPSB0aGlzLnhtaW4sIHkgPSB0aGlzLnltaW47IGJyZWFrOyAvLyBsZWZ0XG4gICAgICB9XG4gICAgICBpZiAoKFBbal0gIT09IHggfHwgUFtqICsgMV0gIT09IHkpICYmIHRoaXMuY29udGFpbnMoaSwgeCwgeSkpIHtcbiAgICAgICAgUC5zcGxpY2UoaiwgMCwgeCwgeSksIGogKz0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGo7XG4gIH1cbiAgX3Byb2plY3QoeDAsIHkwLCB2eCwgdnkpIHtcbiAgICBsZXQgdCA9IEluZmluaXR5LCBjLCB4LCB5O1xuICAgIGlmICh2eSA8IDApIHsgLy8gdG9wXG4gICAgICBpZiAoeTAgPD0gdGhpcy55bWluKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmICgoYyA9ICh0aGlzLnltaW4gLSB5MCkgLyB2eSkgPCB0KSB5ID0gdGhpcy55bWluLCB4ID0geDAgKyAodCA9IGMpICogdng7XG4gICAgfSBlbHNlIGlmICh2eSA+IDApIHsgLy8gYm90dG9tXG4gICAgICBpZiAoeTAgPj0gdGhpcy55bWF4KSByZXR1cm4gbnVsbDtcbiAgICAgIGlmICgoYyA9ICh0aGlzLnltYXggLSB5MCkgLyB2eSkgPCB0KSB5ID0gdGhpcy55bWF4LCB4ID0geDAgKyAodCA9IGMpICogdng7XG4gICAgfVxuICAgIGlmICh2eCA+IDApIHsgLy8gcmlnaHRcbiAgICAgIGlmICh4MCA+PSB0aGlzLnhtYXgpIHJldHVybiBudWxsO1xuICAgICAgaWYgKChjID0gKHRoaXMueG1heCAtIHgwKSAvIHZ4KSA8IHQpIHggPSB0aGlzLnhtYXgsIHkgPSB5MCArICh0ID0gYykgKiB2eTtcbiAgICB9IGVsc2UgaWYgKHZ4IDwgMCkgeyAvLyBsZWZ0XG4gICAgICBpZiAoeDAgPD0gdGhpcy54bWluKSByZXR1cm4gbnVsbDtcbiAgICAgIGlmICgoYyA9ICh0aGlzLnhtaW4gLSB4MCkgLyB2eCkgPCB0KSB4ID0gdGhpcy54bWluLCB5ID0geTAgKyAodCA9IGMpICogdnk7XG4gICAgfVxuICAgIHJldHVybiBbeCwgeV07XG4gIH1cbiAgX2VkZ2Vjb2RlKHgsIHkpIHtcbiAgICByZXR1cm4gKHggPT09IHRoaXMueG1pbiA/IDBiMDAwMVxuICAgICAgICA6IHggPT09IHRoaXMueG1heCA/IDBiMDAxMCA6IDBiMDAwMClcbiAgICAgICAgfCAoeSA9PT0gdGhpcy55bWluID8gMGIwMTAwXG4gICAgICAgIDogeSA9PT0gdGhpcy55bWF4ID8gMGIxMDAwIDogMGIwMDAwKTtcbiAgfVxuICBfcmVnaW9uY29kZSh4LCB5KSB7XG4gICAgcmV0dXJuICh4IDwgdGhpcy54bWluID8gMGIwMDAxXG4gICAgICAgIDogeCA+IHRoaXMueG1heCA/IDBiMDAxMCA6IDBiMDAwMClcbiAgICAgICAgfCAoeSA8IHRoaXMueW1pbiA/IDBiMDEwMFxuICAgICAgICA6IHkgPiB0aGlzLnltYXggPyAwYjEwMDAgOiAwYjAwMDApO1xuICB9XG59XG4iLCJcbmNvbnN0IEVQU0lMT04gPSBNYXRoLnBvdygyLCAtNTIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxhdW5hdG9yIHtcblxuICAgIHN0YXRpYyBmcm9tKHBvaW50cywgZ2V0WCwgZ2V0WSkge1xuICAgICAgICBpZiAoIWdldFgpIGdldFggPSBkZWZhdWx0R2V0WDtcbiAgICAgICAgaWYgKCFnZXRZKSBnZXRZID0gZGVmYXVsdEdldFk7XG5cbiAgICAgICAgY29uc3QgbiA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IG5ldyBGbG9hdDY0QXJyYXkobiAqIDIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpXSA9IGdldFgocCk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IERlbGF1bmF0b3IoY29vcmRzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihjb29yZHMpIHtcbiAgICAgICAgbGV0IG1pblggPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IG1pblkgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IG1heFggPSAtSW5maW5pdHk7XG4gICAgICAgIGxldCBtYXhZID0gLUluZmluaXR5O1xuXG4gICAgICAgIGNvbnN0IG4gPSBjb29yZHMubGVuZ3RoID4+IDE7XG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuaWRzID0gbmV3IFVpbnQzMkFycmF5KG4pO1xuXG4gICAgICAgIGlmIChuID4gMCAmJiB0eXBlb2YgY29vcmRzWzBdICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjb29yZHMgdG8gY29udGFpbiBudW1iZXJzLicpO1xuXG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgIGlmICh4IDwgbWluWCkgbWluWCA9IHg7XG4gICAgICAgICAgICBpZiAoeSA8IG1pblkpIG1pblkgPSB5O1xuICAgICAgICAgICAgaWYgKHggPiBtYXhYKSBtYXhYID0geDtcbiAgICAgICAgICAgIGlmICh5ID4gbWF4WSkgbWF4WSA9IHk7XG4gICAgICAgICAgICBpZHNbaV0gPSBpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ggPSAobWluWCArIG1heFgpIC8gMjtcbiAgICAgICAgY29uc3QgY3kgPSAobWluWSArIG1heFkpIC8gMjtcblxuICAgICAgICBsZXQgbWluRGlzdCA9IEluZmluaXR5O1xuICAgICAgICBsZXQgaTAsIGkxLCBpMjtcblxuICAgICAgICAvLyBwaWNrIGEgc2VlZCBwb2ludCBjbG9zZSB0byB0aGUgY2VudHJvaWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSBkaXN0KGN4LCBjeSwgY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0pO1xuICAgICAgICAgICAgaWYgKGQgPCBtaW5EaXN0KSB7XG4gICAgICAgICAgICAgICAgaTAgPSBpO1xuICAgICAgICAgICAgICAgIG1pbkRpc3QgPSBkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGkweCA9IGNvb3Jkc1syICogaTBdO1xuICAgICAgICBjb25zdCBpMHkgPSBjb29yZHNbMiAqIGkwICsgMV07XG5cbiAgICAgICAgbWluRGlzdCA9IEluZmluaXR5O1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHBvaW50IGNsb3Nlc3QgdG8gdGhlIHNlZWRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSBpMCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBkID0gZGlzdChpMHgsIGkweSwgY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0pO1xuICAgICAgICAgICAgaWYgKGQgPCBtaW5EaXN0ICYmIGQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaTEgPSBpO1xuICAgICAgICAgICAgICAgIG1pbkRpc3QgPSBkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBpMXggPSBjb29yZHNbMiAqIGkxXTtcbiAgICAgICAgbGV0IGkxeSA9IGNvb3Jkc1syICogaTEgKyAxXTtcblxuICAgICAgICBsZXQgbWluUmFkaXVzID0gSW5maW5pdHk7XG5cbiAgICAgICAgLy8gZmluZCB0aGUgdGhpcmQgcG9pbnQgd2hpY2ggZm9ybXMgdGhlIHNtYWxsZXN0IGNpcmN1bWNpcmNsZSB3aXRoIHRoZSBmaXJzdCB0d29cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09PSBpMCB8fCBpID09PSBpMSkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCByID0gY2lyY3VtcmFkaXVzKGkweCwgaTB5LCBpMXgsIGkxeSwgY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0pO1xuICAgICAgICAgICAgaWYgKHIgPCBtaW5SYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBpMiA9IGk7XG4gICAgICAgICAgICAgICAgbWluUmFkaXVzID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgaTJ4ID0gY29vcmRzWzIgKiBpMl07XG4gICAgICAgIGxldCBpMnkgPSBjb29yZHNbMiAqIGkyICsgMV07XG5cbiAgICAgICAgaWYgKG1pblJhZGl1cyA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gRGVsYXVuYXkgdHJpYW5ndWxhdGlvbiBleGlzdHMgZm9yIHRoaXMgaW5wdXQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzd2FwIHRoZSBvcmRlciBvZiB0aGUgc2VlZCBwb2ludHMgZm9yIGNvdW50ZXItY2xvY2t3aXNlIG9yaWVudGF0aW9uXG4gICAgICAgIGlmIChvcmllbnQoaTB4LCBpMHksIGkxeCwgaTF5LCBpMngsIGkyeSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSBpMTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBpMXg7XG4gICAgICAgICAgICBjb25zdCB5ID0gaTF5O1xuICAgICAgICAgICAgaTEgPSBpMjtcbiAgICAgICAgICAgIGkxeCA9IGkyeDtcbiAgICAgICAgICAgIGkxeSA9IGkyeTtcbiAgICAgICAgICAgIGkyID0gaTtcbiAgICAgICAgICAgIGkyeCA9IHg7XG4gICAgICAgICAgICBpMnkgPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2VudGVyID0gY2lyY3VtY2VudGVyKGkweCwgaTB5LCBpMXgsIGkxeSwgaTJ4LCBpMnkpO1xuICAgICAgICB0aGlzLl9jeCA9IGNlbnRlci54O1xuICAgICAgICB0aGlzLl9jeSA9IGNlbnRlci55O1xuXG4gICAgICAgIC8vIHNvcnQgdGhlIHBvaW50cyBieSBkaXN0YW5jZSBmcm9tIHRoZSBzZWVkIHRyaWFuZ2xlIGNpcmN1bWNlbnRlclxuICAgICAgICBxdWlja3NvcnQoaWRzLCBjb29yZHMsIDAsIGlkcy5sZW5ndGggLSAxLCBjZW50ZXIueCwgY2VudGVyLnkpO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYSBoYXNoIHRhYmxlIGZvciBzdG9yaW5nIGVkZ2VzIG9mIHRoZSBhZHZhbmNpbmcgY29udmV4IGh1bGxcbiAgICAgICAgdGhpcy5faGFzaFNpemUgPSBNYXRoLmNlaWwoTWF0aC5zcXJ0KG4pKTtcbiAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBBcnJheSh0aGlzLl9oYXNoU2l6ZSk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhIGNpcmN1bGFyIGRvdWJseS1saW5rZWQgbGlzdCB0aGF0IHdpbGwgaG9sZCBhbiBhZHZhbmNpbmcgY29udmV4IGh1bGxcbiAgICAgICAgbGV0IGUgPSB0aGlzLmh1bGwgPSBpbnNlcnROb2RlKGNvb3JkcywgaTApO1xuICAgICAgICB0aGlzLl9oYXNoRWRnZShlKTtcbiAgICAgICAgZS50ID0gMDtcbiAgICAgICAgZSA9IGluc2VydE5vZGUoY29vcmRzLCBpMSwgZSk7XG4gICAgICAgIHRoaXMuX2hhc2hFZGdlKGUpO1xuICAgICAgICBlLnQgPSAxO1xuICAgICAgICBlID0gaW5zZXJ0Tm9kZShjb29yZHMsIGkyLCBlKTtcbiAgICAgICAgdGhpcy5faGFzaEVkZ2UoZSk7XG4gICAgICAgIGUudCA9IDI7XG5cbiAgICAgICAgY29uc3QgbWF4VHJpYW5nbGVzID0gMiAqIG4gLSA1O1xuICAgICAgICBjb25zdCB0cmlhbmdsZXMgPSB0aGlzLnRyaWFuZ2xlcyA9IG5ldyBVaW50MzJBcnJheShtYXhUcmlhbmdsZXMgKiAzKTtcbiAgICAgICAgY29uc3QgaGFsZmVkZ2VzID0gdGhpcy5oYWxmZWRnZXMgPSBuZXcgSW50MzJBcnJheShtYXhUcmlhbmdsZXMgKiAzKTtcblxuICAgICAgICB0aGlzLnRyaWFuZ2xlc0xlbiA9IDA7XG5cbiAgICAgICAgdGhpcy5fYWRkVHJpYW5nbGUoaTAsIGkxLCBpMiwgLTEsIC0xLCAtMSk7XG5cbiAgICAgICAgZm9yIChsZXQgayA9IDAsIHhwLCB5cDsgayA8IGlkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgY29uc3QgaSA9IGlkc1trXTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogaSArIDFdO1xuXG4gICAgICAgICAgICAvLyBza2lwIG5lYXItZHVwbGljYXRlIHBvaW50c1xuICAgICAgICAgICAgaWYgKGsgPiAwICYmIE1hdGguYWJzKHggLSB4cCkgPD0gRVBTSUxPTiAmJiBNYXRoLmFicyh5IC0geXApIDw9IEVQU0lMT04pIGNvbnRpbnVlO1xuICAgICAgICAgICAgeHAgPSB4O1xuICAgICAgICAgICAgeXAgPSB5O1xuXG4gICAgICAgICAgICAvLyBza2lwIHNlZWQgdHJpYW5nbGUgcG9pbnRzXG4gICAgICAgICAgICBpZiAoaSA9PT0gaTAgfHwgaSA9PT0gaTEgfHwgaSA9PT0gaTIpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBmaW5kIGEgdmlzaWJsZSBlZGdlIG9uIHRoZSBjb252ZXggaHVsbCB1c2luZyBlZGdlIGhhc2hcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0S2V5ID0gdGhpcy5faGFzaEtleSh4LCB5KTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBzdGFydEtleTtcbiAgICAgICAgICAgIGxldCBzdGFydDtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRoaXMuX2hhc2hba2V5XTtcbiAgICAgICAgICAgICAgICBrZXkgPSAoa2V5ICsgMSkgJSB0aGlzLl9oYXNoU2l6ZTtcbiAgICAgICAgICAgIH0gd2hpbGUgKCghc3RhcnQgfHwgc3RhcnQucmVtb3ZlZCkgJiYga2V5ICE9PSBzdGFydEtleSk7XG5cbiAgICAgICAgICAgIHN0YXJ0ID0gc3RhcnQucHJldjtcbiAgICAgICAgICAgIGUgPSBzdGFydDtcbiAgICAgICAgICAgIHdoaWxlICghb3JpZW50KHgsIHksIGUueCwgZS55LCBlLm5leHQueCwgZS5uZXh0LnkpKSB7XG4gICAgICAgICAgICAgICAgZSA9IGUubmV4dDtcbiAgICAgICAgICAgICAgICBpZiAoZSA9PT0gc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGxpa2VseSBhIG5lYXItZHVwbGljYXRlIHBvaW50OyBza2lwIGl0XG4gICAgICAgICAgICBpZiAoIWUpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb25zdCB3YWxrQmFjayA9IGUgPT09IHN0YXJ0O1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGZpcnN0IHRyaWFuZ2xlIGZyb20gdGhlIHBvaW50XG4gICAgICAgICAgICBsZXQgdCA9IHRoaXMuX2FkZFRyaWFuZ2xlKGUuaSwgaSwgZS5uZXh0LmksIC0xLCAtMSwgZS50KTtcblxuICAgICAgICAgICAgZS50ID0gdDsgLy8ga2VlcCB0cmFjayBvZiBib3VuZGFyeSB0cmlhbmdsZXMgb24gdGhlIGh1bGxcbiAgICAgICAgICAgIGUgPSBpbnNlcnROb2RlKGNvb3JkcywgaSwgZSk7XG5cbiAgICAgICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGZsaXAgdHJpYW5nbGVzIGZyb20gdGhlIHBvaW50IHVudGlsIHRoZXkgc2F0aXNmeSB0aGUgRGVsYXVuYXkgY29uZGl0aW9uXG4gICAgICAgICAgICBlLnQgPSB0aGlzLl9sZWdhbGl6ZSh0ICsgMik7XG5cbiAgICAgICAgICAgIC8vIHdhbGsgZm9yd2FyZCB0aHJvdWdoIHRoZSBodWxsLCBhZGRpbmcgbW9yZSB0cmlhbmdsZXMgYW5kIGZsaXBwaW5nIHJlY3Vyc2l2ZWx5XG4gICAgICAgICAgICBsZXQgcSA9IGUubmV4dDtcbiAgICAgICAgICAgIHdoaWxlIChvcmllbnQoeCwgeSwgcS54LCBxLnksIHEubmV4dC54LCBxLm5leHQueSkpIHtcbiAgICAgICAgICAgICAgICB0ID0gdGhpcy5fYWRkVHJpYW5nbGUocS5pLCBpLCBxLm5leHQuaSwgcS5wcmV2LnQsIC0xLCBxLnQpO1xuICAgICAgICAgICAgICAgIHEucHJldi50ID0gdGhpcy5fbGVnYWxpemUodCArIDIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaHVsbCA9IHJlbW92ZU5vZGUocSk7XG4gICAgICAgICAgICAgICAgcSA9IHEubmV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdhbGtCYWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gd2FsayBiYWNrd2FyZCBmcm9tIHRoZSBvdGhlciBzaWRlLCBhZGRpbmcgbW9yZSB0cmlhbmdsZXMgYW5kIGZsaXBwaW5nXG4gICAgICAgICAgICAgICAgcSA9IGUucHJldjtcbiAgICAgICAgICAgICAgICB3aGlsZSAob3JpZW50KHgsIHksIHEucHJldi54LCBxLnByZXYueSwgcS54LCBxLnkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSB0aGlzLl9hZGRUcmlhbmdsZShxLnByZXYuaSwgaSwgcS5pLCAtMSwgcS50LCBxLnByZXYudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xlZ2FsaXplKHQgKyAyKTtcbiAgICAgICAgICAgICAgICAgICAgcS5wcmV2LnQgPSB0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh1bGwgPSByZW1vdmVOb2RlKHEpO1xuICAgICAgICAgICAgICAgICAgICBxID0gcS5wcmV2O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgdHdvIG5ldyBlZGdlcyBpbiB0aGUgaGFzaCB0YWJsZVxuICAgICAgICAgICAgdGhpcy5faGFzaEVkZ2UoZSk7XG4gICAgICAgICAgICB0aGlzLl9oYXNoRWRnZShlLnByZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJpbSB0eXBlZCB0cmlhbmdsZSBtZXNoIGFycmF5c1xuICAgICAgICB0aGlzLnRyaWFuZ2xlcyA9IHRyaWFuZ2xlcy5zdWJhcnJheSgwLCB0aGlzLnRyaWFuZ2xlc0xlbik7XG4gICAgICAgIHRoaXMuaGFsZmVkZ2VzID0gaGFsZmVkZ2VzLnN1YmFycmF5KDAsIHRoaXMudHJpYW5nbGVzTGVuKTtcbiAgICB9XG5cbiAgICBfaGFzaEVkZ2UoZSkge1xuICAgICAgICB0aGlzLl9oYXNoW3RoaXMuX2hhc2hLZXkoZS54LCBlLnkpXSA9IGU7XG4gICAgfVxuXG4gICAgX2hhc2hLZXkoeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihwc2V1ZG9BbmdsZSh4IC0gdGhpcy5fY3gsIHkgLSB0aGlzLl9jeSkgKiB0aGlzLl9oYXNoU2l6ZSkgJSB0aGlzLl9oYXNoU2l6ZTtcbiAgICB9XG5cbiAgICBfbGVnYWxpemUoYSkge1xuICAgICAgICBjb25zdCB7dHJpYW5nbGVzLCBjb29yZHMsIGhhbGZlZGdlc30gPSB0aGlzO1xuXG4gICAgICAgIGNvbnN0IGIgPSBoYWxmZWRnZXNbYV07XG5cbiAgICAgICAgLyogaWYgdGhlIHBhaXIgb2YgdHJpYW5nbGVzIGRvZXNuJ3Qgc2F0aXNmeSB0aGUgRGVsYXVuYXkgY29uZGl0aW9uXG4gICAgICAgICAqIChwMSBpcyBpbnNpZGUgdGhlIGNpcmN1bWNpcmNsZSBvZiBbcDAsIHBsLCBwcl0pLCBmbGlwIHRoZW0sXG4gICAgICAgICAqIHRoZW4gZG8gdGhlIHNhbWUgY2hlY2svZmxpcCByZWN1cnNpdmVseSBmb3IgdGhlIG5ldyBwYWlyIG9mIHRyaWFuZ2xlc1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgICAgcGwgICAgICAgICAgICAgICAgICAgIHBsXG4gICAgICAgICAqICAgICAgICAgIC98fFxcICAgICAgICAgICAgICAgICAgLyAgXFxcbiAgICAgICAgICogICAgICAgYWwvIHx8IFxcYmwgICAgICAgICAgICBhbC8gICAgXFxhXG4gICAgICAgICAqICAgICAgICAvICB8fCAgXFwgICAgICAgICAgICAgIC8gICAgICBcXFxuICAgICAgICAgKiAgICAgICAvICBhfHxiICBcXCAgICBmbGlwICAgIC9fX19hcl9fX1xcXG4gICAgICAgICAqICAgICBwMFxcICAgfHwgICAvcDEgICA9PiAgIHAwXFwtLS1ibC0tLS9wMVxuICAgICAgICAgKiAgICAgICAgXFwgIHx8ICAvICAgICAgICAgICAgICBcXCAgICAgIC9cbiAgICAgICAgICogICAgICAgYXJcXCB8fCAvYnIgICAgICAgICAgICAgYlxcICAgIC9iclxuICAgICAgICAgKiAgICAgICAgICBcXHx8LyAgICAgICAgICAgICAgICAgIFxcICAvXG4gICAgICAgICAqICAgICAgICAgICBwciAgICAgICAgICAgICAgICAgICAgcHJcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGEwID0gYSAtIGEgJSAzO1xuICAgICAgICBjb25zdCBiMCA9IGIgLSBiICUgMztcblxuICAgICAgICBjb25zdCBhbCA9IGEwICsgKGEgKyAxKSAlIDM7XG4gICAgICAgIGNvbnN0IGFyID0gYTAgKyAoYSArIDIpICUgMztcbiAgICAgICAgY29uc3QgYmwgPSBiMCArIChiICsgMikgJSAzO1xuXG4gICAgICAgIGlmIChiID09PSAtMSkgcmV0dXJuIGFyO1xuXG4gICAgICAgIGNvbnN0IHAwID0gdHJpYW5nbGVzW2FyXTtcbiAgICAgICAgY29uc3QgcHIgPSB0cmlhbmdsZXNbYV07XG4gICAgICAgIGNvbnN0IHBsID0gdHJpYW5nbGVzW2FsXTtcbiAgICAgICAgY29uc3QgcDEgPSB0cmlhbmdsZXNbYmxdO1xuXG4gICAgICAgIGNvbnN0IGlsbGVnYWwgPSBpbkNpcmNsZShcbiAgICAgICAgICAgIGNvb3Jkc1syICogcDBdLCBjb29yZHNbMiAqIHAwICsgMV0sXG4gICAgICAgICAgICBjb29yZHNbMiAqIHByXSwgY29vcmRzWzIgKiBwciArIDFdLFxuICAgICAgICAgICAgY29vcmRzWzIgKiBwbF0sIGNvb3Jkc1syICogcGwgKyAxXSxcbiAgICAgICAgICAgIGNvb3Jkc1syICogcDFdLCBjb29yZHNbMiAqIHAxICsgMV0pO1xuXG4gICAgICAgIGlmIChpbGxlZ2FsKSB7XG4gICAgICAgICAgICB0cmlhbmdsZXNbYV0gPSBwMTtcbiAgICAgICAgICAgIHRyaWFuZ2xlc1tiXSA9IHAwO1xuXG4gICAgICAgICAgICBjb25zdCBoYmwgPSBoYWxmZWRnZXNbYmxdO1xuXG4gICAgICAgICAgICAvLyBlZGdlIHN3YXBwZWQgb24gdGhlIG90aGVyIHNpZGUgb2YgdGhlIGh1bGwgKHJhcmUpOyBmaXggdGhlIGhhbGZlZGdlIHJlZmVyZW5jZVxuICAgICAgICAgICAgaWYgKGhibCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBsZXQgZSA9IHRoaXMuaHVsbDtcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnQgPT09IGJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnQgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZSA9IGUubmV4dDtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChlICE9PSB0aGlzLmh1bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbGluayhhLCBoYmwpO1xuICAgICAgICAgICAgdGhpcy5fbGluayhiLCBoYWxmZWRnZXNbYXJdKTtcbiAgICAgICAgICAgIHRoaXMuX2xpbmsoYXIsIGJsKTtcblxuICAgICAgICAgICAgY29uc3QgYnIgPSBiMCArIChiICsgMSkgJSAzO1xuXG4gICAgICAgICAgICB0aGlzLl9sZWdhbGl6ZShhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sZWdhbGl6ZShicik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXI7XG4gICAgfVxuXG4gICAgX2xpbmsoYSwgYikge1xuICAgICAgICB0aGlzLmhhbGZlZGdlc1thXSA9IGI7XG4gICAgICAgIGlmIChiICE9PSAtMSkgdGhpcy5oYWxmZWRnZXNbYl0gPSBhO1xuICAgIH1cblxuICAgIC8vIGFkZCBhIG5ldyB0cmlhbmdsZSBnaXZlbiB2ZXJ0ZXggaW5kaWNlcyBhbmQgYWRqYWNlbnQgaGFsZi1lZGdlIGlkc1xuICAgIF9hZGRUcmlhbmdsZShpMCwgaTEsIGkyLCBhLCBiLCBjKSB7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnRyaWFuZ2xlc0xlbjtcblxuICAgICAgICB0aGlzLnRyaWFuZ2xlc1t0XSA9IGkwO1xuICAgICAgICB0aGlzLnRyaWFuZ2xlc1t0ICsgMV0gPSBpMTtcbiAgICAgICAgdGhpcy50cmlhbmdsZXNbdCArIDJdID0gaTI7XG5cbiAgICAgICAgdGhpcy5fbGluayh0LCBhKTtcbiAgICAgICAgdGhpcy5fbGluayh0ICsgMSwgYik7XG4gICAgICAgIHRoaXMuX2xpbmsodCArIDIsIGMpO1xuXG4gICAgICAgIHRoaXMudHJpYW5nbGVzTGVuICs9IDM7XG5cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxufVxuXG4vLyBtb25vdG9uaWNhbGx5IGluY3JlYXNlcyB3aXRoIHJlYWwgYW5nbGUsIGJ1dCBkb2Vzbid0IG5lZWQgZXhwZW5zaXZlIHRyaWdvbm9tZXRyeVxuZnVuY3Rpb24gcHNldWRvQW5nbGUoZHgsIGR5KSB7XG4gICAgY29uc3QgcCA9IGR4IC8gKE1hdGguYWJzKGR4KSArIE1hdGguYWJzKGR5KSk7XG4gICAgcmV0dXJuIChkeSA+IDAgPyAzIC0gcCA6IDEgKyBwKSAvIDQ7IC8vIFswLi4xXVxufVxuXG5mdW5jdGlvbiBkaXN0KGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgZHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IGR5ID0gYXkgLSBieTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG5cbmZ1bmN0aW9uIG9yaWVudChweCwgcHksIHF4LCBxeSwgcngsIHJ5KSB7XG4gICAgcmV0dXJuIChxeSAtIHB5KSAqIChyeCAtIHF4KSAtIChxeCAtIHB4KSAqIChyeSAtIHF5KSA8IDA7XG59XG5cbmZ1bmN0aW9uIGluQ2lyY2xlKGF4LCBheSwgYngsIGJ5LCBjeCwgY3ksIHB4LCBweSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBweDtcbiAgICBjb25zdCBkeSA9IGF5IC0gcHk7XG4gICAgY29uc3QgZXggPSBieCAtIHB4O1xuICAgIGNvbnN0IGV5ID0gYnkgLSBweTtcbiAgICBjb25zdCBmeCA9IGN4IC0gcHg7XG4gICAgY29uc3QgZnkgPSBjeSAtIHB5O1xuXG4gICAgY29uc3QgYXAgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICBjb25zdCBicCA9IGV4ICogZXggKyBleSAqIGV5O1xuICAgIGNvbnN0IGNwID0gZnggKiBmeCArIGZ5ICogZnk7XG5cbiAgICByZXR1cm4gZHggKiAoZXkgKiBjcCAtIGJwICogZnkpIC1cbiAgICAgICAgICAgZHkgKiAoZXggKiBjcCAtIGJwICogZngpICtcbiAgICAgICAgICAgYXAgKiAoZXggKiBmeSAtIGV5ICogZngpIDwgMDtcbn1cblxuZnVuY3Rpb24gY2lyY3VtcmFkaXVzKGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpIHtcbiAgICBjb25zdCBkeCA9IGJ4IC0gYXg7XG4gICAgY29uc3QgZHkgPSBieSAtIGF5O1xuICAgIGNvbnN0IGV4ID0gY3ggLSBheDtcbiAgICBjb25zdCBleSA9IGN5IC0gYXk7XG5cbiAgICBjb25zdCBibCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgIGNvbnN0IGNsID0gZXggKiBleCArIGV5ICogZXk7XG4gICAgY29uc3QgZCA9IGR4ICogZXkgLSBkeSAqIGV4O1xuXG4gICAgY29uc3QgeCA9IChleSAqIGJsIC0gZHkgKiBjbCkgKiAwLjUgLyBkO1xuICAgIGNvbnN0IHkgPSAoZHggKiBjbCAtIGV4ICogYmwpICogMC41IC8gZDtcblxuICAgIHJldHVybiBibCAmJiBjbCAmJiBkICYmICh4ICogeCArIHkgKiB5KSB8fCBJbmZpbml0eTtcbn1cblxuZnVuY3Rpb24gY2lyY3VtY2VudGVyKGF4LCBheSwgYngsIGJ5LCBjeCwgY3kpIHtcbiAgICBjb25zdCBkeCA9IGJ4IC0gYXg7XG4gICAgY29uc3QgZHkgPSBieSAtIGF5O1xuICAgIGNvbnN0IGV4ID0gY3ggLSBheDtcbiAgICBjb25zdCBleSA9IGN5IC0gYXk7XG5cbiAgICBjb25zdCBibCA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgIGNvbnN0IGNsID0gZXggKiBleCArIGV5ICogZXk7XG4gICAgY29uc3QgZCA9IGR4ICogZXkgLSBkeSAqIGV4O1xuXG4gICAgY29uc3QgeCA9IGF4ICsgKGV5ICogYmwgLSBkeSAqIGNsKSAqIDAuNSAvIGQ7XG4gICAgY29uc3QgeSA9IGF5ICsgKGR4ICogY2wgLSBleCAqIGJsKSAqIDAuNSAvIGQ7XG5cbiAgICByZXR1cm4ge3gsIHl9O1xufVxuXG4vLyBjcmVhdGUgYSBuZXcgbm9kZSBpbiBhIGRvdWJseSBsaW5rZWQgbGlzdFxuZnVuY3Rpb24gaW5zZXJ0Tm9kZShjb29yZHMsIGksIHByZXYpIHtcbiAgICBjb25zdCBub2RlID0ge1xuICAgICAgICBpLFxuICAgICAgICB4OiBjb29yZHNbMiAqIGldLFxuICAgICAgICB5OiBjb29yZHNbMiAqIGkgKyAxXSxcbiAgICAgICAgdDogMCxcbiAgICAgICAgcHJldjogbnVsbCxcbiAgICAgICAgbmV4dDogbnVsbCxcbiAgICAgICAgcmVtb3ZlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIG5vZGUucHJldiA9IG5vZGU7XG4gICAgICAgIG5vZGUubmV4dCA9IG5vZGU7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLm5leHQgPSBwcmV2Lm5leHQ7XG4gICAgICAgIG5vZGUucHJldiA9IHByZXY7XG4gICAgICAgIHByZXYubmV4dC5wcmV2ID0gbm9kZTtcbiAgICAgICAgcHJldi5uZXh0ID0gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xuICAgIG5vZGUucHJldi5uZXh0ID0gbm9kZS5uZXh0O1xuICAgIG5vZGUubmV4dC5wcmV2ID0gbm9kZS5wcmV2O1xuICAgIG5vZGUucmVtb3ZlZCA9IHRydWU7XG4gICAgcmV0dXJuIG5vZGUucHJldjtcbn1cblxuZnVuY3Rpb24gcXVpY2tzb3J0KGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCwgY3gsIGN5KSB7XG4gICAgbGV0IGksIGosIHRlbXA7XG5cbiAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IDIwKSB7XG4gICAgICAgIGZvciAoaSA9IGxlZnQgKyAxOyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgIHRlbXAgPSBpZHNbaV07XG4gICAgICAgICAgICBqID0gaSAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA+PSBsZWZ0ICYmIGNvbXBhcmUoY29vcmRzLCBpZHNbal0sIHRlbXAsIGN4LCBjeSkgPiAwKSBpZHNbaiArIDFdID0gaWRzW2otLV07XG4gICAgICAgICAgICBpZHNbaiArIDFdID0gdGVtcDtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1lZGlhbiA9IChsZWZ0ICsgcmlnaHQpID4+IDE7XG4gICAgICAgIGkgPSBsZWZ0ICsgMTtcbiAgICAgICAgaiA9IHJpZ2h0O1xuICAgICAgICBzd2FwKGlkcywgbWVkaWFuLCBpKTtcbiAgICAgICAgaWYgKGNvbXBhcmUoY29vcmRzLCBpZHNbbGVmdF0sIGlkc1tyaWdodF0sIGN4LCBjeSkgPiAwKSBzd2FwKGlkcywgbGVmdCwgcmlnaHQpO1xuICAgICAgICBpZiAoY29tcGFyZShjb29yZHMsIGlkc1tpXSwgaWRzW3JpZ2h0XSwgY3gsIGN5KSA+IDApIHN3YXAoaWRzLCBpLCByaWdodCk7XG4gICAgICAgIGlmIChjb21wYXJlKGNvb3JkcywgaWRzW2xlZnRdLCBpZHNbaV0sIGN4LCBjeSkgPiAwKSBzd2FwKGlkcywgbGVmdCwgaSk7XG5cbiAgICAgICAgdGVtcCA9IGlkc1tpXTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGRvIGkrKzsgd2hpbGUgKGNvbXBhcmUoY29vcmRzLCBpZHNbaV0sIHRlbXAsIGN4LCBjeSkgPCAwKTtcbiAgICAgICAgICAgIGRvIGotLTsgd2hpbGUgKGNvbXBhcmUoY29vcmRzLCBpZHNbal0sIHRlbXAsIGN4LCBjeSkgPiAwKTtcbiAgICAgICAgICAgIGlmIChqIDwgaSkgYnJlYWs7XG4gICAgICAgICAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgICAgIH1cbiAgICAgICAgaWRzW2xlZnQgKyAxXSA9IGlkc1tqXTtcbiAgICAgICAgaWRzW2pdID0gdGVtcDtcblxuICAgICAgICBpZiAocmlnaHQgLSBpICsgMSA+PSBqIC0gbGVmdCkge1xuICAgICAgICAgICAgcXVpY2tzb3J0KGlkcywgY29vcmRzLCBpLCByaWdodCwgY3gsIGN5KTtcbiAgICAgICAgICAgIHF1aWNrc29ydChpZHMsIGNvb3JkcywgbGVmdCwgaiAtIDEsIGN4LCBjeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWlja3NvcnQoaWRzLCBjb29yZHMsIGxlZnQsIGogLSAxLCBjeCwgY3kpO1xuICAgICAgICAgICAgcXVpY2tzb3J0KGlkcywgY29vcmRzLCBpLCByaWdodCwgY3gsIGN5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZShjb29yZHMsIGksIGosIGN4LCBjeSkge1xuICAgIGNvbnN0IGQxID0gZGlzdChjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSwgY3gsIGN5KTtcbiAgICBjb25zdCBkMiA9IGRpc3QoY29vcmRzWzIgKiBqXSwgY29vcmRzWzIgKiBqICsgMV0sIGN4LCBjeSk7XG4gICAgcmV0dXJuIChkMSAtIGQyKSB8fCAoY29vcmRzWzIgKiBpXSAtIGNvb3Jkc1syICogal0pIHx8IChjb29yZHNbMiAqIGkgKyAxXSAtIGNvb3Jkc1syICogaiArIDFdKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEdldFgocCkge1xuICAgIHJldHVybiBwWzBdO1xufVxuZnVuY3Rpb24gZGVmYXVsdEdldFkocCkge1xuICAgIHJldHVybiBwWzFdO1xufVxuIiwiXG5pbXBvcnQgc29ydCBmcm9tICcuL3NvcnQnO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHdpdGhpbiBmcm9tICcuL3dpdGhpbic7XG5cbmNvbnN0IGRlZmF1bHRHZXRYID0gcCA9PiBwWzBdO1xuY29uc3QgZGVmYXVsdEdldFkgPSBwID0+IHBbMV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtEQnVzaCB7XG4gICAgY29uc3RydWN0b3IocG9pbnRzLCBnZXRYID0gZGVmYXVsdEdldFgsIGdldFkgPSBkZWZhdWx0R2V0WSwgbm9kZVNpemUgPSA2NCwgQXJyYXlUeXBlID0gRmxvYXQ2NEFycmF5KSB7XG4gICAgICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG5cbiAgICAgICAgY29uc3QgSW5kZXhBcnJheVR5cGUgPSBwb2ludHMubGVuZ3RoIDwgNjU1MzYgPyBVaW50MTZBcnJheSA6IFVpbnQzMkFycmF5O1xuXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuaWRzID0gbmV3IEluZGV4QXJyYXlUeXBlKHBvaW50cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZHNbaV0gPSBpO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpXSA9IGdldFgocG9pbnRzW2ldKTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaSArIDFdID0gZ2V0WShwb2ludHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIDAsIGlkcy5sZW5ndGggLSAxLCAwKTtcbiAgICB9XG5cbiAgICByYW5nZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiByYW5nZSh0aGlzLmlkcywgdGhpcy5jb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIHRoaXMubm9kZVNpemUpO1xuICAgIH1cblxuICAgIHdpdGhpbih4LCB5LCByKSB7XG4gICAgICAgIHJldHVybiB3aXRoaW4odGhpcy5pZHMsIHRoaXMuY29vcmRzLCB4LCB5LCByLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKGlkcywgY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWluWCA8PSB4IDogbWluWSA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1heFggPj0geCA6IG1heFkgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbSA9IChsZWZ0ICsgcmlnaHQpID4+IDE7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICAgICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbmV3TGVmdCwgbmV3UmlnaHQsIGluYyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ID0gY29vcmRzWzIgKiBrICsgaW5jXTtcbiAgICAgICAgbGV0IGkgPSBsZWZ0O1xuICAgICAgICBsZXQgaiA9IHJpZ2h0O1xuXG4gICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBrKTtcbiAgICAgICAgaWYgKGNvb3Jkc1syICogcmlnaHQgKyBpbmNdID4gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIHJpZ2h0KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGkgKyBpbmNdIDwgdCkgaSsrO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaiArIGluY10gPiB0KSBqLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRzWzIgKiBsZWZ0ICsgaW5jXSA9PT0gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGopO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBqLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA8PSBrKSBsZWZ0ID0gaiArIDE7XG4gICAgICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaikge1xuICAgIHN3YXAoaWRzLCBpLCBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGksIDIgKiBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGkgKyAxLCAyICogaiArIDEpO1xufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xuICAgIGNvbnN0IHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4oaWRzLCBjb29yZHMsIHF4LCBxeSwgciwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgcjIgPSByICogcjtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzcURpc3QoY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0sIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgY29uc3QgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIGNvbnN0IHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoc3FEaXN0KHgsIHksIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4IC0gciA8PSB4IDogcXkgLSByIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggKyByID49IHggOiBxeSArIHIgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3FEaXN0KGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgZHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IGR5ID0gYXkgLSBieTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG4iLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=