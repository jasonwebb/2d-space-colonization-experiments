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
/* harmony import */ var _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/SourcePatterns */ "./core/SourcePatterns.js");
/* harmony import */ var _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/VeinNode */ "./core/VeinNode.js");
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

  // Set up the auxin sources using pre-made patterns
  let randomSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomSources(500, ctx);
  let gridSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getGridOfSources(60, 60, ctx);

  network.sources = gridSources;

  // Add a set of random root veins throughout scene
  for(let i=0; i<10; i++) {
    network.addVeinNode(
      new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
        null,
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerWidth),
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerHeight)
        ),
        true,
        ctx
      )
    )
  }

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__["setupKeyListeners"])(network);
}

// Main program loop
let update = (timestamp) => {
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

    this.influencingNodes = [];
  }

  draw() {
    // Draw the attraction zone
    if(this.settings.ShowAttractionZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.AttractionDistance, this.settings.AttractionDistance, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.AttractionZoneColor;
      this.ctx.fill();
    }

    // Draw the kill zone
    if(this.settings.ShowKillZones) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.KillDistance, this.settings.KillDistance, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.KillZoneColor;
      this.ctx.fill();
    }

    // Draw the auxin source
    if(this.settings.ShowSources) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, 1, 1, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.SourceColor;
      this.ctx.fill();
    }
  }
}

/***/ }),

/***/ "./core/ColorPresets.js":
/*!******************************!*\
  !*** ./core/ColorPresets.js ***!
  \******************************/
/*! exports provided: Light, Dark, Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dark", function() { return Dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return Custom; });
const Light = {
  BackgroundColor: 'rgba(255,255,255,1)',
  SourceColor: 'rgba(0,0,0,.5)',
  VeinColor: 'rgba(0,0,0,1)',
  VeinTipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(0,0,0,.1)',
  BoundsBorderColor: 'rgba(0,0,0,.1)',
  ObstacleFillColor: 'rgba(0,0,0,.7)'
}

const Dark = {
  BackgroundColor: 'rgba(0,0,0,.9)',
  SourceColor: 'rgba(255,255,255,.5)',
  VeinColor: 'rgba(255,255,255,1)',
  VeinTipColor: 'rgba(0,255,255,1)',
  AttractionZoneColor: 'rgba(255,255,255,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(255,255,255,.05)',
  BoundsBorderColor: 'rgba(255,255,255,.05)',
  ObstacleFillColor: 'rgba(255,255,255,1)'
}

const Custom = {
  BackgroundColor: 'rgb(242,242,242)',
  SourceColor: 'rgba(255,255,255,.6)',
  VeinColor: 'rgba(255,255,255,1)',
  InfluenceLinesColor: 'rgba(255,255,255,.3)',
  // BoundsFillColor: 'rgb(61,85,136)',
  // BoundsBorderColor: 'rgb(61,85,136)'
  BoundsFillColor: 'rgb(57, 126, 88)',
  BoundsBorderColor: 'rgb(210, 81, 94)',
  ObstacleFillColor: 'rgba(0,0,0,.1)'
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
/* harmony import */ var _ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPresets */ "./core/ColorPresets.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
    Simulation configurations
  */

  VenationType: 'Open',     // venation can be "Open" or "Closed"
  SegmentLength: 5,         // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 200,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,          // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,          // initial pause/unpause state


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowSources: false,           // toggled with 's'
  ShowVeins: true,              // toggled with 'v'
  ShowVeinTips: false,          // toggled with 't'
  ShowAttractionZones: false,   // toggled with 'a'
  ShowKillZones: false,         // toggled with 'k'
  ShowInfluenceLines: false,    // toggled with 'i'
  ShowBounds: true,             // toggled with 'b'
  ShowObstacles: true,          // toggled with 'o'

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  Colors: _ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Light"],

  // Line thicknesses
  VeinThickness: 1,
  VeinTipThickness: 2,
  BoundsBorderThickness: 0
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

      // i = toggle influence lines
      case 'i':
        for(let network of networks) {
          network.toggleInfluenceLines();
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





class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.sources = [];  // sources (AuxinSources) attract vein nodes
    this.nodes = [];    // nodes (VeinNodes) are connected to form veins

    this.nodesIndex;    // kd-bush spatial index for all nodes

    this.bounds;
    this.obstacles = [];

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
        // For open venation, only associate this source with its closest vein node
        case 'Open':
          let closestNode = this.getClosestNode(source, this.getNodesInAttractionZone(source));

          if(closestNode != null) {
            closestNode.influencedBy.push(sourceID);
            source.influencingNodes = [closestNode];
          }

          break;

        // For closed venation, associate this source with all nodes in its relative neighborhood
        case 'Closed':
          let neighborhoodNodes = this.getRelativeNeighborNodes(source);
          let nodesInKillZone = this.getNodesInKillZone(source);

          // Exclude nodes that are in the source's kill zone (these should stop growing)
          let nodesToGrow = neighborhoodNodes.filter((neighborNode) => {
            return !nodesInKillZone.includes(neighborNode);
          });

          source.influencingNodes = nodesToGrow;

          for(let node of nodesToGrow) {
            node.influencedBy.push(sourceID);
          }

          break;
      }
    }

    // Grow the network by adding new vein nodes onto any nodes being influenced by sources
    for(let node of this.nodes) {
      if(node.influencedBy.length > 0) {
        let averageDirection = this.getAverageDirection(node, node.influencedBy.map(id => this.sources[id]));
        let nextNode = node.getNextNode(averageDirection);
        let ok = true;

        // Don't grow if the next node goes out of the passed bounds
        if(this.bounds != undefined && !this.bounds.contains(nextNode.position.x, nextNode.position.y)) {
          ok = false;
        }

        // Don't grow if the next node goes inside any passed obstacle
        if(this.obstacles != undefined && this.obstacles.length > 0) {
          for(let obstacle of this.obstacles) {
            if(obstacle.contains(nextNode.position.x, nextNode.position.y)) {
              ok = false;
            }
          }
        }

        if(ok) {
          this.nodes.push(nextNode);
        }
      }

      node.influencedBy = [];
    }

    // Remove any auxin sources that have been reached by their associated vein nodes
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the source as soon as any vein node reaches it
        case 'Open':
          if(source.reached) {
            this.sources.splice(sourceID, 1);
          }

          break;

        // For closed venation, remove the source only when all associated vein nodes have reached it
        case 'Closed':
          if(source.influencingNodes.length === 0) {
            this.sources.splice(sourceID, 1);
          }

          break;
      }
    }

    // Rebuild spatial indices
    this.buildSpatialIndices();
  }

  draw() {
    this.drawBackground();
    this.drawBounds();
    this.drawObstacles();
    this.drawSources();
    this.drawVeins();
  }

  drawBackground() {
    // Erase the canvas
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.ctx.beginPath();
    this.ctx.fillStyle = this.settings.Colors.BackgroundColor;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  drawBounds() {
    if(this.settings.ShowBounds && this.bounds != undefined) {
      this.bounds.draw();
    }
  }

  drawObstacles() {
    if(this.settings.ShowObstacles && this.obstacles != undefined && this.obstacles.length > 0) {
      for(let obstacle of this.obstacles) {
        obstacle.draw();
      }
    }
  }

  drawVeins() {
    if(this.settings.ShowVeins) {
      for(let node of this.nodes) {
        node.draw();
      }
    }
  }

  drawSources() {
    for(let source of this.sources) {
      source.draw();

      // Draw lines between each source and the nodes they are influencing
      if(this.settings.ShowInfluenceLines && source.influencingNodes.length > 0) {
        for(let node of source.influencingNodes) {
          this.ctx.beginPath();
          this.ctx.moveTo(source.position.x, source.position.y);
          this.ctx.lineTo(node.position.x, node.position.y);
          this.ctx.strokeStyle = this.settings.Colors.InfluenceLinesColor;
          this.ctx.stroke();
        }
      }
    }
  }

  getRelativeNeighborNodes(source) {
    let fail;

    let nearbyNodes = this.getNodesInAttractionZone(source);
    let relativeNeighbors = [];
    let sourceToP0, sourceToP1, p0ToP1;

    // p0 is a relative neighbor of auxinPos iff
    // for any point p1 that is closer to auxinPos than is p0,
    // p0 is closer to auxinPos than to p1
    for(let p0 of nearbyNodes) {
      fail = false;
      sourceToP0 = p0.position.subtract(source.position, true);

      for(let p1 of nearbyNodes) {
        if(p0 === p1) {
          continue;
        }

        sourceToP1 = p1.position.subtract(source.position, true);

        if(sourceToP1.length() > sourceToP0.length()) {
          continue;
        }

        p0ToP1 = p1.position.subtract(p0.position, true);

        if(sourceToP0.length() > p0ToP1.length()) {
          fail = true;
          break;
        }
      }

      if(!fail) {
        relativeNeighbors.push(p0);
      }
    }

    return relativeNeighbors;
  }

  getNodesInAttractionZone(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.AttractionDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getNodesInKillZone(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.KillDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getClosestNode(source, nearbyNodes) {
    let closestNode = null,
      record = this.settings.AttractionDistance;

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

    return closestNode;
  }

  getAverageDirection(node, nearbySources) {
    // Add up normalized vectors pointing to each auxin source
    let averageDirection = new vec2__WEBPACK_IMPORTED_MODULE_2__(0,0);

    for(let source of nearbySources) {
      averageDirection.add(
        source.position.subtract(node.position, true).normalize()
      );
    }

    // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating nodes in the same place
    // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
    averageDirection.add(new vec2__WEBPACK_IMPORTED_MODULE_2__(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1))).normalize();

    averageDirection.divide(node.influencedBy.length).normalize();

    return averageDirection;
  }

  addVeinNode(node) {
    let ok = true;

    // Only put root veins inside the bounds
    if(this.bounds != undefined && !this.bounds.contains(node.position.x, node.position.y)) {
      ok = false;
    }

    // Don't put root veins inside of obstacles
    if(this.obstacles != undefined && this.obstacles.length > 0) {
      for(let obstacle of this.obstacles) {
        if(obstacle.contains(node.position.x, node.position.y)) {
          ok = false;
        }
      }
    }

    if(ok) {
      this.nodes.push(node);
      this.buildSpatialIndices();
    }
  }

  reset() {
    this.nodes = [];
    this.sources = [];

    this.buildSpatialIndices();
  }

  buildSpatialIndices() {
    this.nodesIndex = new kdbush__WEBPACK_IMPORTED_MODULE_1__["default"](this.nodes, p => p.position.x, p => p.position.y);
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
  }

  toggleVeinTips() {
    this.settings.ShowVeinTips = !this.settings.ShowVeinTips;

    for(let node of this.nodes) {
      node.settings.ShowVeinTips = !node.settings.ShowVeinTips;
    }
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

  toggleKillZones() {
    this.settings.ShowKillZones = !this.settings.ShowKillZones;

    for(let source of this.sources) {
      source.settings.ShowKillZones = !source.settings.ShowKillZones;
    }
  }

  toggleInfluenceLines() {
    this.settings.ShowInfluenceLines = !this.settings.ShowInfluenceLines;
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}

/***/ }),

/***/ "./core/SourcePatterns.js":
/*!********************************!*\
  !*** ./core/SourcePatterns.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SourcePatterns; });
/* harmony import */ var _AuxinSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuxinSource */ "./core/AuxinSource.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");




class SourcePatterns {
  constructor() {}

  static getRandomSources(numSources, ctx, bounds = undefined, obstacles = undefined) {
    let nodes = [];
    let x, y;
    let ok;

    for(let i=0; i<numSources; i++) {
      x = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerWidth);
      y = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerHeight);
      ok = true;

      if((bounds != undefined && !bounds.contains(x,y))) {
        ok = false;
      }

      if(obstacles != undefined && obstacles.length > 0) {
        for(let obstacle of obstacles) {
          if(obstacle.contains(x,y)) {
            ok = false;
          }
        }
      }

      if(ok) {
        nodes.push(
          new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
            ctx
          )
        );
      }
    }

    return nodes;
  }

  static getGridOfSources(numRows, numColumns, ctx, bounds = undefined, obstacles = undefined) {
    let nodes = [];
    let x, y;
    let ok;

    for(let i=0; i<=numRows; i++) {
      for(let j=0; j<=numColumns; j++) {
        x = (window.innerWidth / numColumns) * j + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-10,10);
        y = (window.innerHeight / numRows) * i + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-10,10);
        ok = true;

        if((bounds != undefined && !bounds.contains(x,y))) {
          ok = false;
        }

        if(obstacles != undefined && obstacles.length > 0) {
          for(let obstacle of obstacles) {
            if(obstacle.contains(x,y)) {
              ok = false;
            }
          }
        }

        if(ok) {
          nodes.push(
            new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
              new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
              ctx
            )
          );
        }
      }
    }

    return nodes;
  }
}

/***/ }),

/***/ "./core/Utilities.js":
/*!***************************!*\
  !*** ./core/Utilities.js ***!
  \***************************/
/*! exports provided: random, getCircleOfPoints, exportSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCircleOfPoints", function() { return getCircleOfPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSVG", function() { return exportSVG; });
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

function getCircleOfPoints(cx, cy, radius, resolution) {
  let angle, x, y;
  let points = [];

  for(let i = 0; i < resolution; i++) {
    angle = 2 * Math.PI * i / resolution;
    x = cx + Math.floor(radius * Math.cos(angle));
    y = cy + Math.floor(radius * Math.sin(angle));

    points.push([x, y]);
  }

  return points;
}

function exportSVG(network) {
  // Set up <svg> element
  let svg = document.createElement('svg');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
  svg.setAttribute('width', window.innerWidth);
  svg.setAttribute('height', window.innerHeight);
  svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);

  // Create paths for vein segments
  for(let node of network.nodes) {

  }

  // Create paths for bounds
  // for(let bound of network.bounds) {

  // }

  // Create paths for obstacles
  // for(let obstacle of network.obstacles) {

  // }

  // Force download of .svg file based on https://jsfiddle.net/ch77e7yh/1
  let svgDocType = document.implementation.createDocumentType('svg', "-//W3C//DTD SVG 1.1//EN", "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd");
  let svgDoc = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', svgDocType);
  svgDoc.replaceChild(svg, svgDoc.documentElement);
  let svgData = (new XMLSerializer()).serializeToString(svgDoc);

  let blob = new Blob([svgData.replace(/></g, '>\n\r<')]);
  saveAs(blob, 'venation-' + Date.now() + '.svg');
}

function createPathElFromPoints(points) {
  let pointsString = '';

  for(let [index, point] of points.entries()) {
    pointsString += point[0] + ',' + point[1];

    if(index < points.length - 1) {
      pointsString += ' ';
    }
  }

  let d = toPath({
    type: 'polyline',
    points: pointsString
  });

  let pathEl = document.createElement('path');
  pathEl.setAttribute('d', d);
  pathEl.setAttribute('style', 'fill: none; stroke: black; stroke-width: 1');

  return pathEl;
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


class VeinNode {
  constructor(parent, position, isTip, ctx, settings) {
    this.parent = parent;
    this.position = position;
    this.isTip = isTip;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencedBy = [];
  }

  draw() {
    if(this.parent != null) {
      if(this.settings.VeinRenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = this.settings.Colors.VeinTipColor;
          this.ctx.lineWidth = this.settings.VeinTipThickness;
        } else {
          this.ctx.strokeStyle = this.settings.Colors.VeinColor;
          this.ctx.lineWidth = this.settings.VeinThickness;
        }

        this.ctx.stroke();
        this.ctx.lineWidth = 1;

      } else if(this.settings.VeinRenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.position.x,
          this.position.y,
          1,
          1,
          0,
          0,
          Math.PI * 2
        );  // TODO: vary dot radius based on algorithm

        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.fillStyle = this.settings.Colors.VeinTipColor;
        } else {
          this.ctx.fillStyle = this.settings.Colors.VeinColor;
        }

        this.ctx.fill();
      }
    }
  }

  getNextNode(averageSourceDirection) {
    this.isTip = false;
    this.nextPosition = this.position.add(averageSourceDirection.multiply(this.settings.SegmentLength), true);

    return new VeinNode(
      this,
      this.nextPosition,
      true,
      this.ctx,
      this.settings
    );
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvU291cmNlUGF0dGVybnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9WZWluTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVjMi92ZWMyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYmFzaWMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9iYXNpYy9qcy9lbnRyeS5qc1wiKTtcbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uLy4uL2NvcmUvTmV0d29yayc7XHJcbmltcG9ydCBTb3VyY2VQYXR0ZXJucyBmcm9tICcuLi8uLi9jb3JlL1NvdXJjZVBhdHRlcm5zJztcclxuaW1wb3J0IFZlaW5Ob2RlIGZyb20gJy4uLy4uL2NvcmUvVmVpbk5vZGUnO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi8uLi9jb3JlL1V0aWxpdGllcyc7XHJcbmltcG9ydCB7IHNldHVwS2V5TGlzdGVuZXJzIH0gZnJvbSAnLi4vLi4vY29yZS9LZXlib2FyZEludGVyYWN0aW9ucyc7XHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxuLy8gQ3JlYXRlIGluaXRpYWwgY29uZGl0aW9ucyBmb3Igc2ltdWxhdGlvblxyXG5sZXQgc2V0dXAgPSAoKSA9PiB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBjYW52YXMgYW5kIGNvbnRleHRcclxuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tldGNoJyk7XHJcbiAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIC8vIFNldHVwIE5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICBzZXR1cE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbmxldCBzZXR1cE5ldHdvcmsgPSAoKSA9PiB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBTZXQgdXAgdGhlIGF1eGluIHNvdXJjZXMgdXNpbmcgcHJlLW1hZGUgcGF0dGVybnNcclxuICBsZXQgcmFuZG9tU291cmNlcyA9IFNvdXJjZVBhdHRlcm5zLmdldFJhbmRvbVNvdXJjZXMoNTAwLCBjdHgpO1xyXG4gIGxldCBncmlkU291cmNlcyA9IFNvdXJjZVBhdHRlcm5zLmdldEdyaWRPZlNvdXJjZXMoNjAsIDYwLCBjdHgpO1xyXG5cclxuICBuZXR3b3JrLnNvdXJjZXMgPSBncmlkU291cmNlcztcclxuXHJcbiAgLy8gQWRkIGEgc2V0IG9mIHJhbmRvbSByb290IHZlaW5zIHRocm91Z2hvdXQgc2NlbmVcclxuICBmb3IobGV0IGk9MDsgaTwxMDsgaSsrKSB7XHJcbiAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCksXHJcbiAgICAgICAgICByYW5kb20od2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgICksXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBjdHhcclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxufVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxuLy8gS2V5IGNvbW1hbmRzIHNwZWNpZmljIHRvIHRoaXMgc2tldGNoXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBzd2l0Y2goZS5rZXkpIHtcclxuICAgIC8vIHIgPSByZXNldCBzaW11bGF0aW9uIGJ5IHJlaW5pdGlhbGl6aW5nIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgICBjYXNlIFwiclwiOlxyXG4gICAgICBzZXR1cE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBLaWNrIG9mZiB0aGUgYXBwbGljYXRpb25cclxuc2V0dXAoKTsiLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXhpblNvdXJjZSB7XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGN0eCwgc2V0dGluZ3MgPSB7fSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jaW5nTm9kZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3Rpb25ab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBraWxsIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBhdXhpbiBzb3VyY2VcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuU291cmNlQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTGlnaHQgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgwLDAsMCwxKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgwLDI1NSwwLC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMCwwLDI1NSwxKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuNyknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjkpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b20gPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwyNDIsMjQyKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjMpJyxcclxuICAvLyBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoNjEsODUsMTM2KScsXHJcbiAgLy8gQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoNjEsODUsMTM2KSdcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoNTcsIDEyNiwgODgpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuMSknXHJcbn0iLCJpbXBvcnQgeyBMaWdodCwgRGFyaywgQ3VzdG9tIH0gZnJvbSAnLi9Db2xvclByZXNldHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKlxyXG4gICAgU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIFZlbmF0aW9uVHlwZTogJ09wZW4nLCAgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDIwMCwgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXV4aW4gc291cmNlIHRoYXQgYXR0cmFjdHMgdmVpbiBzZWdtZW50c1xyXG4gIEtpbGxEaXN0YW5jZTogNSwgICAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdXhpbiBzb3VyY2VzIGFuZCBzZWdtZW50cyB3aGVuIHNlZ21lbnRzIGFyZSBlbmRlZFxyXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dTb3VyY2VzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAncydcclxuICBTaG93VmVpbnM6IHRydWUsICAgICAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3YnXHJcbiAgU2hvd1ZlaW5UaXBzOiBmYWxzZSwgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ2snXHJcbiAgU2hvd0luZmx1ZW5jZUxpbmVzOiBmYWxzZSwgICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiB0cnVlLCAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ28nXHJcblxyXG4gIC8vIE1vZGVzXHJcbiAgVmVpblJlbmRlck1vZGU6ICdMaW5lcycsICAvLyBkcmF3IHZlaW4gc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogTGlnaHQsXHJcblxyXG4gIC8vIExpbmUgdGhpY2tuZXNzZXNcclxuICBWZWluVGhpY2tuZXNzOiAxLFxyXG4gIFZlaW5UaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAwXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29ya3MpIHtcclxuICBpZighKG5ldHdvcmtzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICBuZXR3b3JrcyA9IFtuZXR3b3Jrc107XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB2ID0gdG9nZ2xlIHZlaW4gdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd2JzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gcyA9IHRvZ2dsZSBhdXhpbiBzb3VyY2UgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdzJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlU291cmNlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVBdHRyYWN0aW9uWm9uZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdCA9IHRvZ2dsZSB2ZWluIHRpcCB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3QnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVWZWluVGlwcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBrID0gdG9nZ2xlIGtpbGwgem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gaSA9IHRvZ2dsZSBpbmZsdWVuY2UgbGluZXNcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUluZmx1ZW5jZUxpbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0IEtEQnVzaCBmcm9tICdrZGJ1c2gnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuc291cmNlcyA9IFtdOyAgLy8gc291cmNlcyAoQXV4aW5Tb3VyY2VzKSBhdHRyYWN0IHZlaW4gbm9kZXNcclxuICAgIHRoaXMubm9kZXMgPSBbXTsgICAgLy8gbm9kZXMgKFZlaW5Ob2RlcykgYXJlIGNvbm5lY3RlZCB0byBmb3JtIHZlaW5zXHJcblxyXG4gICAgdGhpcy5ub2Rlc0luZGV4OyAgICAvLyBrZC1idXNoIHNwYXRpYWwgaW5kZXggZm9yIGFsbCBub2Rlc1xyXG5cclxuICAgIHRoaXMuYm91bmRzO1xyXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggaXRzIGNsb3Nlc3QgdmVpbiBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKHNvdXJjZSwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIHNvdXJjZSdzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IG5vZGVzVG9Hcm93O1xyXG5cclxuICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBub2Rlc1RvR3Jvdykge1xyXG4gICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyB2ZWluIG5vZGVzIG9udG8gYW55IG5vZGVzIGJlaW5nIGluZmx1ZW5jZWQgYnkgc291cmNlc1xyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gdGhpcy5nZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5vZGUuaW5mbHVlbmNlZEJ5Lm1hcChpZCA9PiB0aGlzLnNvdXJjZXNbaWRdKSk7XHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgb2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBncm93IGlmIHRoZSBuZXh0IG5vZGUgZ29lcyBvdXQgb2YgdGhlIHBhc3NlZCBib3VuZHNcclxuICAgICAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgIXRoaXMuYm91bmRzLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgZ3JvdyBpZiB0aGUgbmV4dCBub2RlIGdvZXMgaW5zaWRlIGFueSBwYXNzZWQgb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9rKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbm9kZS5pbmZsdWVuY2VkQnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF1eGluIHNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIHZlaW4gbm9kZXNcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIGFzIHNvb24gYXMgYW55IHZlaW4gbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihzb3VyY2UucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2Ugb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIHZlaW4gbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYnVpbGQgc3BhdGlhbCBpbmRpY2VzXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICB0aGlzLmRyYXdCb3VuZHMoKTtcclxuICAgIHRoaXMuZHJhd09ic3RhY2xlcygpO1xyXG4gICAgdGhpcy5kcmF3U291cmNlcygpO1xyXG4gICAgdGhpcy5kcmF3VmVpbnMoKTtcclxuICB9XHJcblxyXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xyXG4gICAgLy8gRXJhc2UgdGhlIGNhbnZhc1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3Qm91bmRzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJvdW5kcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3T2JzdGFjbGVzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdWZWlucygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdTb3VyY2VzKCkge1xyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5kcmF3KCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGxpbmVzIGJldHdlZW4gZWFjaCBzb3VyY2UgYW5kIHRoZSBub2RlcyB0aGV5IGFyZSBpbmZsdWVuY2luZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyAmJiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBub2RlIG9mIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzb3VyY2UucG9zaXRpb24ueCwgc291cmNlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuSW5mbHVlbmNlTGluZXNDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKHNvdXJjZSkge1xyXG4gICAgbGV0IGZhaWw7XHJcblxyXG4gICAgbGV0IG5lYXJieU5vZGVzID0gdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKTtcclxuICAgIGxldCByZWxhdGl2ZU5laWdoYm9ycyA9IFtdO1xyXG4gICAgbGV0IHNvdXJjZVRvUDAsIHNvdXJjZVRvUDEsIHAwVG9QMTtcclxuXHJcbiAgICAvLyBwMCBpcyBhIHJlbGF0aXZlIG5laWdoYm9yIG9mIGF1eGluUG9zIGlmZlxyXG4gICAgLy8gZm9yIGFueSBwb2ludCBwMSB0aGF0IGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIGlzIHAwLFxyXG4gICAgLy8gcDAgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gdG8gcDFcclxuICAgIGZvcihsZXQgcDAgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgZmFpbCA9IGZhbHNlO1xyXG4gICAgICBzb3VyY2VUb1AwID0gcDAucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgIGZvcihsZXQgcDEgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgICBpZihwMCA9PT0gcDEpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291cmNlVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHNvdXJjZS5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKHNvdXJjZVRvUDEubGVuZ3RoKCkgPiBzb3VyY2VUb1AwLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAwVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHAwLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMC5sZW5ndGgoKSA+IHAwVG9QMS5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgZmFpbCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFmYWlsKSB7XHJcbiAgICAgICAgcmVsYXRpdmVOZWlnaGJvcnMucHVzaChwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVsYXRpdmVOZWlnaGJvcnM7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbktpbGxab25lKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi54LFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3ROb2RlKHNvdXJjZSwgbmVhcmJ5Tm9kZXMpIHtcclxuICAgIGxldCBjbG9zZXN0Tm9kZSA9IG51bGwsXHJcbiAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgc291cmNlLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb3Nlc3ROb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXV4aW4gc291cmNlXHJcbiAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IG5ldyBWZWMyKDAsMCk7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgbmVhcmJ5U291cmNlcykge1xyXG4gICAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChcclxuICAgICAgICBzb3VyY2UucG9zaXRpb24uc3VidHJhY3Qobm9kZS5wb3NpdGlvbiwgdHJ1ZSkubm9ybWFsaXplKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc21hbGwgYW1vdW50IG9mIHJhbmRvbSBcImppdHRlclwiIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2sgYmV0d2VlbiB0d28gYXV4aW4gc291cmNlcyBhbmQgZW5kbGVzc2x5IGdlbmVyYXRpbmcgbm9kZXMgaW4gdGhlIHNhbWUgcGxhY2VcclxuICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChuZXcgVmVjMihyYW5kb20oLS4xLCAuMSksIHJhbmRvbSgtLjEsIC4xKSkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uZGl2aWRlKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIGF2ZXJhZ2VEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBhZGRWZWluTm9kZShub2RlKSB7XHJcbiAgICBsZXQgb2sgPSB0cnVlO1xyXG5cclxuICAgIC8vIE9ubHkgcHV0IHJvb3QgdmVpbnMgaW5zaWRlIHRoZSBib3VuZHNcclxuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiAhdGhpcy5ib3VuZHMuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgIG9rID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgcHV0IHJvb3QgdmVpbnMgaW5zaWRlIG9mIG9ic3RhY2xlc1xyXG4gICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgb2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihvaykge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmVpblRpcHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICFub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVNvdXJjZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImltcG9ydCBBdXhpblNvdXJjZSBmcm9tICcuL0F1eGluU291cmNlJztcclxuaW1wb3J0IFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZVBhdHRlcm5zIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBnZXRSYW5kb21Tb3VyY2VzKG51bVNvdXJjZXMsIGN0eCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgbGV0IHgsIHk7XHJcbiAgICBsZXQgb2s7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8bnVtU291cmNlczsgaSsrKSB7XHJcbiAgICAgIHggPSByYW5kb20od2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICB5ID0gcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgIG9rID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmKChib3VuZHMgIT0gdW5kZWZpbmVkICYmICFib3VuZHMuY29udGFpbnMoeCx5KSkpIHtcclxuICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIG9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcclxuICAgICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKHgseSkpIHtcclxuICAgICAgICAgICAgb2sgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9rKSB7XHJcbiAgICAgICAgbm9kZXMucHVzaChcclxuICAgICAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgICAgbmV3IFZlYzIoeCx5KSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRHcmlkT2ZTb3VyY2VzKG51bVJvd3MsIG51bUNvbHVtbnMsIGN0eCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgbGV0IHgsIHk7XHJcbiAgICBsZXQgb2s7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8PW51bVJvd3M7IGkrKykge1xyXG4gICAgICBmb3IobGV0IGo9MDsgajw9bnVtQ29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnMpICogaiArIHJhbmRvbSgtMTAsMTApO1xyXG4gICAgICAgIHkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cykgKiBpICsgcmFuZG9tKC0xMCwxMCk7XHJcbiAgICAgICAgb2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZigoYm91bmRzICE9IHVuZGVmaW5lZCAmJiAhYm91bmRzLmNvbnRhaW5zKHgseSkpKSB7XHJcbiAgICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiBvYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcclxuICAgICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMoeCx5KSkge1xyXG4gICAgICAgICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9rKSB7XHJcbiAgICAgICAgICBub2Rlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgICAgbmV3IFZlYzIoeCx5KSxcclxuICAgICAgICAgICAgICBjdHhcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY2xlT2ZQb2ludHMoY3gsIGN5LCByYWRpdXMsIHJlc29sdXRpb24pIHtcclxuICBsZXQgYW5nbGUsIHgsIHk7XHJcbiAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICB4ID0gY3ggKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICB5ID0gY3kgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb2ludHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTVkcobmV0d29yaykge1xyXG4gIC8vIFNldCB1cCA8c3ZnPiBlbGVtZW50XHJcbiAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIHBhdGhzIGZvciB2ZWluIHNlZ21lbnRzXHJcbiAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgcGF0aHMgZm9yIGJvdW5kc1xyXG4gIC8vIGZvcihsZXQgYm91bmQgb2YgbmV0d29yay5ib3VuZHMpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBDcmVhdGUgcGF0aHMgZm9yIG9ic3RhY2xlc1xyXG4gIC8vIGZvcihsZXQgb2JzdGFjbGUgb2YgbmV0d29yay5vYnN0YWNsZXMpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBGb3JjZSBkb3dubG9hZCBvZiAuc3ZnIGZpbGUgYmFzZWQgb24gaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvY2g3N2U3eWgvMVxyXG4gIGxldCBzdmdEb2NUeXBlID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKCdzdmcnLCBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIsIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIpO1xyXG4gIGxldCBzdmdEb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudCgnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJywgc3ZnRG9jVHlwZSk7XHJcbiAgc3ZnRG9jLnJlcGxhY2VDaGlsZChzdmcsIHN2Z0RvYy5kb2N1bWVudEVsZW1lbnQpO1xyXG4gIGxldCBzdmdEYXRhID0gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Z0RvYyk7XHJcblxyXG4gIGxldCBibG9iID0gbmV3IEJsb2IoW3N2Z0RhdGEucmVwbGFjZSgvPjwvZywgJz5cXG5cXHI8JyldKTtcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XHJcblxyXG4gIGZvcihsZXQgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xyXG4gICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgaWYoaW5kZXggPCBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBwb2ludHNTdHJpbmcgKz0gJyAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgdHlwZTogJ3BvbHlsaW5lJyxcclxuICAgIHBvaW50czogcG9pbnRzU3RyaW5nXHJcbiAgfSk7XHJcblxyXG4gIGxldCBwYXRoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJyk7XHJcbiAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gIHBhdGhFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6IG5vbmU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMScpO1xyXG5cclxuICByZXR1cm4gcGF0aEVsO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRpcFRoaWNrbmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlZlaW5UaGlja25lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICAxLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7ICAvLyBUT0RPOiB2YXJ5IGRvdCByYWRpdXMgYmFzZWQgb24gYWxnb3JpdGhtXHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROZXh0Tm9kZShhdmVyYWdlU291cmNlRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWluTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzXHJcbiAgICApO1xyXG4gIH1cclxufSIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9