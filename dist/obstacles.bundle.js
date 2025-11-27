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
/******/ 	return __webpack_require__(__webpack_require__.s = "./experiments/obstacles/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/Attractor.js":
/*!***************************!*\
  !*** ./core/Attractor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attractor; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class Attractor {
  constructor(position, ctx, settings = {}) {
    this.position = position;     // vec2 of this attractor's position
    this.ctx = ctx;               // global canvas context
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencingNodes = [];   // references to nodes this attractor is influencing each frame
    this.fresh = true;            // flag used to prevent attractors from being removed during first frame of Closed venation mode
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

    // Draw the attractor
    if(this.settings.ShowAttractors) {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, 1, 1, 0, 0, Math.PI * 2);
      this.ctx.fillStyle = this.settings.Colors.AttractorColor;
      this.ctx.fill();
    }
  }
}

/***/ }),

/***/ "./core/AttractorPatterns.js":
/*!***********************************!*\
  !*** ./core/AttractorPatterns.js ***!
  \***********************************/
/*! exports provided: getRandomAttractors, getGridOfAttractors, getPhyllotaxisAttractors, getWaveOfAttractors, applyNoise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomAttractors", function() { return getRandomAttractors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridOfAttractors", function() { return getGridOfAttractors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhyllotaxisAttractors", function() { return getPhyllotaxisAttractors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWaveOfAttractors", function() { return getWaveOfAttractors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNoise", function() { return applyNoise; });
/* harmony import */ var _Attractor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attractor */ "./core/Attractor.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");



var SimplexNoise = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");

function getRandomAttractors(numAttractors, ctx, bounds = undefined, obstacles = undefined) {
  let attractors = [];
  let x, y;
  let isInsideAnyBounds, isInsideAnyObstacle, isOnScreen;

  for(let i=0; i<numAttractors; i++) {
    x = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerWidth);
    y = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerHeight);
    isInsideAnyBounds = false;
    isInsideAnyObstacle = false;
    isOnScreen = false;

    // Only allow attractors that are in the viewport
    if(
      x > 0 &&
      x < window.innerWidth &&
      y > 0 &&
      y < window.innerHeight
    ) {
      isOnScreen = true;
    }

    // Only allow root nodes inside of defined bounds
    if(bounds != undefined && bounds.length > 0) {
      for(let bound of bounds) {
        if(bound.contains(x, y)) {
          isInsideAnyBounds = true;
        }
      }
    }

    // Don't allow any root nodes that are inside of an obstacle
    if(obstacles != undefined && obstacles.length > 0) {
      for(let obstacle of obstacles) {
        if(obstacle.contains(x, y)) {
          isInsideAnyObstacle = true;
        }
      }
    }

    if(
      (isInsideAnyBounds || bounds === undefined) &&
      (!isInsideAnyObstacle || obstacles === undefined)
    ) {
      attractors.push(
        new _Attractor__WEBPACK_IMPORTED_MODULE_0__["default"](
          new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
          ctx
        )
      );
    }
  }

  return attractors;
}

function getGridOfAttractors(numRows, numColumns, ctx, jitterRange = 0, bounds = undefined, obstacles = undefined) {
  let attractors = [];
  let x, y;
  let isInsideAnyBounds, isInsideAnyObstacle, isOnScreen;

  for(let i=0; i<=numRows; i++) {
    for(let j=0; j<=numColumns; j++) {
      x = (window.innerWidth / numColumns) * j + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-jitterRange, jitterRange);
      y = (window.innerHeight / numRows) * i + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-jitterRange, jitterRange);
      isInsideAnyBounds = false;
      isInsideAnyObstacle = false;
      isOnScreen = false;

      // Only allow attractors that are in the viewport
      if(
        x > 0 &&
        x < window.innerWidth &&
        y > 0 &&
        y < window.innerHeight
      ) {
        isOnScreen = true;
      }

      // Only allow attractors inside of any of the defined bounds (if used)
      if(bounds != undefined && bounds.length > 0) {
        for(let bound of bounds) {
          if(bound.contains(x, y)) {
            isInsideAnyBounds = true;
          }
        }
      }

      // Don't allow any root nodes that are inside of an obstacle (if used)
      if(obstacles != undefined && obstacles.length > 0) {
        for(let obstacle of obstacles) {
          if(obstacle.contains(x, y)) {
            isInsideAnyObstacle = true;
          }
        }
      }

      if(
        isOnScreen &&
        (isInsideAnyBounds || bounds === undefined) &&
        (!isInsideAnyObstacle || obstacles === undefined)
      ) {
        attractors.push(
          new _Attractor__WEBPACK_IMPORTED_MODULE_0__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
            ctx
          )
        );
      }
    }
  }

  return attractors;
}

function getPhyllotaxisAttractors(ctx) {
  let attractors = [];
  let numCircles = 5000,
  golden_ratio = (Math.sqrt(5)+1)/2 - 1,
  golden_angle = golden_ratio * (2*Math.PI),
  circle_rad = window.innerWidth/2;


  for(let i=0; i<numCircles; i++) {
    let ratio = i / numCircles,
      angle = i * golden_angle,
      spiral_rad = ratio * circle_rad;

    attractors.push(
      new _Attractor__WEBPACK_IMPORTED_MODULE_0__["default"](
        new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(
          window.innerWidth/2 + Math.cos(angle) * spiral_rad,
          window.innerHeight/2 + Math.sin(angle) * spiral_rad
        ),
        ctx
      )
    );
  }

  return attractors;
}

function getWaveOfAttractors(ctx) {
  let attractors = [];
  let numRows = 70;
  let numColumns = 100;
  let rowSpacing = window.innerHeight / numRows;
  let colSpacing = window.innerWidth / numColumns;

  for(let row = 0; row < numRows; row++) {
    for(let col = 0; col < numColumns; col++) {
      attractors.push(
        new _Attractor__WEBPACK_IMPORTED_MODULE_0__["default"](
          new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(
            (col * colSpacing) + (Math.sin(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["map"])(col, 0, numColumns, 0, Math.PI * 2)) * 200),
            (row * rowSpacing) + (Math.sin(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["map"])(row, 0, numRows, 0, Math.PI * 2)) * 50)
          ),
          ctx
        )
      )
    }
  }

  return attractors;
}

function applyNoise(attractors) {
  let noise = new SimplexNoise();

  for(let attractor of attractors) {
    attractor.position.x += noise.noise2D(attractor.position.x, attractor.position.y) * 10;
    attractor.position.y += noise.noise2D(souattractorrce.position.x, attractor.position.y) * 10;
  }

  return attractors;
}

/***/ }),

/***/ "./core/ColorPresets.js":
/*!******************************!*\
  !*** ./core/ColorPresets.js ***!
  \******************************/
/*! exports provided: Light, Dark, Realistic, Custom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Light", function() { return Light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dark", function() { return Dark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Realistic", function() { return Realistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Custom", function() { return Custom; });
const Light = {
  BackgroundColor: 'rgba(255,255,255,1)',
  AttractorColor: 'rgba(0,0,0,.5)',
  BranchColor: 'rgba(0,0,0,1)',
  TipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(0,0,0,.1)',
  BoundsBorderColor: 'rgba(0,0,0,.1)',
  ObstacleFillColor: 'rgba(0,0,0,.7)'
}

const Dark = {
  BackgroundColor: 'rgba(0,0,0,.9)',
  AttractorColor: 'rgba(255,255,255,.5)',
  BranchColor: 'rgba(255,255,255,1)',
  TipColor: 'rgba(0,255,255,1)',
  AttractionZoneColor: 'rgba(255,255,255,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(255,255,255,.2)',
  BoundsFillColor: 'rgba(255,255,255,0)',
  BoundsBorderColor: 'rgba(255,255,255,.05)',
  ObstacleFillColor: 'rgba(255,255,255,.2)'
}

const Realistic = {
  BackgroundColor: 'rgba(255,255,255,1)',
  AttractorColor: 'rgba(255,255,255,1)',
  BranchColor: 'rgba(255,255,255,.6)',
  // BranchColor: 'rgba(0,0,0,.2)',
  TipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(61,166,12,1)',
  BoundsBorderColor: 'rgba(255,255,255,1)',
  ObstacleFillColor: 'rgba(255,255,255,1)'
}

const Custom = {
  BackgroundColor: 'rgb(242,242,242)',
  AttractorColor: 'rgba(255,255,255,.6)',
  BranchColor: 'rgba(255,255,255,1)',
  InfluenceLinesColor: 'rgba(255,255,255,.3)',
  // BoundsFillColor: 'rgb(61,85,136)',
  // BoundsBorderColor: 'rgb(61,85,136)'
  BoundsFillColor: 'rgb(210, 81, 94)',
  BoundsBorderColor: 'rgb(210, 81, 94)'
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

  VenationType: 'Open',         // venation can be "Open" or "Closed"
  SegmentLength: 5,             // length of each branch segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 30,       // radius of influence (d_i) around each attractor that attracts nodes
  KillDistance: 5,              // distance (d_k) between attractors and nodes when branches are ended
  IsPaused: false,              // initial pause/unpause state
  EnableCanalization: true,     // turns on/off auxin flux canalization (line segment thickening)
  EnableOpacityBlending: true,  // turns on/off opacity


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowAttractors: false,       // toggled with 'a'
  ShowNodes: true,             // toggled with 'n'
  ShowTips: false,             // toggled with 't'
  ShowAttractionZones: false,  // toggled with 'z'
  ShowKillZones: false,        // toggled with 'k'
  ShowInfluenceLines: false,   // toggled with 'i'
  ShowBounds: false,           // toggled with 'b'
  ShowObstacles: false,        // toggled with 'o'

  // Modes
  RenderMode: 'Lines',  // draw branch segments as "Lines" or "Dots"

  // Colors
  Colors: _ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Dark"],

  // Line thicknesses
  BranchThickness: 1.5,
  TipThickness: 2,
  BoundsBorderThickness: 1
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
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");


function setupKeyListeners(network) {
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
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["exportSVG"])(network);
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

    this.attractors = [];  // attractors influence node growth
    this.nodes = [];       // nodes are connected to form branches

    this.nodesIndex;       // kd-bush spatial index for all nodes

    this.bounds = [];      // array of Path objects that branches cannot grow outside of
    this.obstacles = [];   // array of Path objects that branches must avoid

    this.buildSpatialIndices();
  }

  update() {
    // Skip iteration if paused
    if(this.settings.IsPaused) {
      return;
    }

    // Associate attractors with nearby nodes to figure out where growth should occur
    for(let [attractorID, attractor] of this.attractors.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, only associate this attractor with its closest node
        case 'Open':
          let closestNode = this.getClosestNode(attractor, this.getNodesInAttractionZone(attractor));

          if(closestNode != null) {
            closestNode.influencedBy.push(attractorID);
            attractor.influencingNodes = [closestNode];
          }

          break;

        // For closed venation, associate this attractor with all nodes in its relative neighborhood
        case 'Closed':
          let neighborhoodNodes = this.getRelativeNeighborNodes(attractor);
          let nodesInKillZone = this.getNodesInKillZone(attractor);

          // Exclude nodes that are in the attractor's kill zone (these should stop growing)
          let nodesToGrow = neighborhoodNodes.filter((neighborNode) => {
            return !nodesInKillZone.includes(neighborNode);
          });

          attractor.influencingNodes = neighborhoodNodes;

          if(nodesToGrow.length > 0) {
            attractor.fresh = false;

            for(let node of nodesToGrow) {
              node.influencedBy.push(attractorID);
            }
          }


          break;
      }
    }

    // Grow the network by adding new nodes onto any nodes being influenced by attractors
    for(let node of this.nodes) {
      if(node.influencedBy.length > 0) {
        let averageDirection = this.getAverageDirection(node, node.influencedBy.map(id => this.attractors[id]));
        let nextNode = node.getNextNode(averageDirection);
        let isInsideAnyBounds = false;
        let isInsideAnyObstacle = false;

        // Only allow root nodes inside of defined bounds
        if(this.bounds != undefined && this.bounds.length > 0) {
          for(let bound of this.bounds) {
            if(bound.contains(nextNode.position.x, nextNode.position.y)) {
              isInsideAnyBounds = true;
            }
          }
        }

        // Don't allow any root nodes that are inside of an obstacle
        if(this.obstacles != undefined && this.obstacles.length > 0) {
          for(let obstacle of this.obstacles) {
            if(obstacle.contains(nextNode.position.x, nextNode.position.y)) {
              isInsideAnyObstacle = true;
            }
          }
        }

        // NOTE: disabling this check lets nodes grow across gaps in bounds - cool effect!
        if(
          (isInsideAnyBounds || this.bounds.length === 0) &&
          (!isInsideAnyObstacle || this.obstacles.length === 0)
        ) {
          this.nodes.push(nextNode);
        }
      }

      node.influencedBy = [];

      // Perform auxin flux canalization (line segment thickening)
      if(node.isTip && this.settings.EnableCanalization) {
        let currentNode = node;

        while(currentNode.parent != null) {
          // When there are multiple child nodes, use the thickest of them all
          if(currentNode.parent.thickness < currentNode.thickness + .07) {
            currentNode.parent.thickness = currentNode.thickness + .03;
          }

          currentNode = currentNode.parent;
        }
      }
    }

    // Remove any attractors that have been reached by their associated nodes
    for(let [attractorID, attractor] of this.attractors.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the attractor as soon as any node reaches it
        case 'Open':
          if(attractor.reached) {
            this.attractors.splice(attractorID, 1);
          }

          break;

        // For closed venation, remove the attractor only when all associated nodes have reached it
        case 'Closed':
          if(attractor.influencingNodes.length > 0 && !attractor.fresh) {
            let allNodesReached = true;

            for(let node of attractor.influencingNodes) {
              if(node.position.distance(attractor.position) > this.settings.KillDistance) {
                allNodesReached = false;
              }
            }

            if(allNodesReached) {
              this.attractors.splice(attractorID, 1);
            }
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
    this.drawattractors();
    this.drawNodes();
  }

  drawBackground() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.ctx.beginPath();
    this.ctx.fillStyle = this.settings.Colors.BackgroundColor;
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
  }

  drawBounds() {
    if(this.settings.ShowBounds && this.bounds != undefined) {
      for(let bound of this.bounds) {
        bound.draw();
      }
    }
  }

  drawObstacles() {
    if(this.settings.ShowObstacles && this.obstacles != undefined) {
      for(let obstacle of this.obstacles) {
        obstacle.draw();
      }
    }
  }

  drawNodes() {
    if(this.settings.ShowNodes) {
      for(let node of this.nodes) {
        node.draw();
      }
    }
  }

  drawattractors() {
    for(let attractor of this.attractors) {
      attractor.draw();

      // Draw lines between each attractor and the nodes they are influencing
      if(this.settings.ShowInfluenceLines && attractor.influencingNodes.length > 0) {
        for(let node of attractor.influencingNodes) {
          this.ctx.beginPath();
          this.ctx.moveTo(attractor.position.x, attractor.position.y);
          this.ctx.lineTo(node.position.x, node.position.y);
          this.ctx.strokeStyle = this.settings.Colors.InfluenceLinesColor;
          this.ctx.stroke();
        }
      }
    }
  }

  getRelativeNeighborNodes(attractor) {
    let fail;

    let nearbyNodes = this.getNodesInAttractionZone(attractor);
    let relativeNeighbors = [];
    let attractorToP0, attractorToP1, p0ToP1;

    // p0 is a relative neighbor of auxinPos iff
    // for any point p1 that is closer to auxinPos than is p0,
    // p0 is closer to auxinPos than to p1
    for(let p0 of nearbyNodes) {
      fail = false;
      attractorToP0 = p0.position.subtract(attractor.position, true);

      for(let p1 of nearbyNodes) {
        if(p0 === p1) {
          continue;
        }

        attractorToP1 = p1.position.subtract(attractor.position, true);

        if(attractorToP1.length() > attractorToP0.length()) {
          continue;
        }

        p0ToP1 = p1.position.subtract(p0.position, true);

        if(attractorToP0.length() > p0ToP1.length()) {
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

  getNodesInAttractionZone(attractor) {
    return this.nodesIndex.within(
      attractor.position.x,
      attractor.position.y,
      this.settings.AttractionDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getNodesInKillZone(attractor) {
    return this.nodesIndex.within(
      attractor.position.x,
      attractor.position.y,
      this.settings.KillDistance
    ).map(
      id => this.nodes[id]
    );
  }

  getClosestNode(attractor, nearbyNodes) {
    let closestNode = null,
      record = this.settings.AttractionDistance;

    for(let node of nearbyNodes) {
      let distance = node.position.distance(attractor.position);

      if(distance < this.settings.KillDistance) {
        attractor.reached = true;
        closestNode = null;
      } else if(distance < record) {
        closestNode = node;
        record = distance;
      }
    }

    return closestNode;
  }

  getAverageDirection(node, nearbyattractors) {
    // Add up normalized vectors pointing to each attractor
    let averageDirection = new vec2__WEBPACK_IMPORTED_MODULE_2__(0,0);

    for(let attractor of nearbyattractors) {
      averageDirection.add(
        attractor.position.subtract(node.position, true).normalize()
      );
    }

    // Add small amount of random "jitter" to avoid getting stuck between two attractors and endlessly generating nodes in the same place
    // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
    averageDirection.add(new vec2__WEBPACK_IMPORTED_MODULE_2__(Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1), Object(_Utilities__WEBPACK_IMPORTED_MODULE_3__["random"])(-.1, .1))).normalize();

    averageDirection.divide(node.influencedBy.length).normalize();

    return averageDirection;
  }

  addNode(node) {
    let isInsideAnyBounds = false;
    let isInsideAnyObstacle = false;

    // Only allow root nodes inside of defined bounds
    if(this.bounds != undefined && this.bounds.length > 0) {
      for(let bound of this.bounds) {
        if(bound.contains(node.position.x, node.position.y)) {
          isInsideAnyBounds = true;
        }
      }
    }

    // Don't allow any root nodes that are inside of an obstacle
    if(this.obstacles != undefined && this.obstacles.length > 0) {
      for(let obstacle of this.obstacles) {
        if(obstacle.contains(node.position.x, node.position.y)) {
          isInsideAnyObstacle = true;
        }
      }
    }

    if(
      (isInsideAnyBounds || this.bounds.length === 0) &&
      (!isInsideAnyObstacle || this.obstacles.length === 0)
    ) {
      this.nodes.push(node);
      this.buildSpatialIndices();
    }
  }

  reset() {
    this.nodes = [];
    this.attractors = [];

    this.buildSpatialIndices();
  }

  buildSpatialIndices() {
    this.nodesIndex = new kdbush__WEBPACK_IMPORTED_MODULE_1__["default"](this.nodes, p => p.position.x, p => p.position.y);
  }

  toggleNodes() {
    this.settings.ShowNodes = !this.settings.ShowNodes;
  }

  toggleTips() {
    this.settings.ShowTips = !this.settings.ShowTips;

    for(let node of this.nodes) {
      node.settings.ShowTips = !node.settings.ShowTips;
    }
  }

  toggleAttractors() {
    this.settings.ShowAttractors = !this.settings.ShowAttractors;

    for(let attractor of this.attractors) {
      attractor.settings.ShowAttractors = !attractor.settings.ShowAttractors;
    }
  }

  toggleAttractionZones() {
    this.settings.ShowAttractionZones = !this.settings.ShowAttractionZones;

    for(let attractor of this.attractors) {
      attractor.settings.ShowAttractionZones = !attractor.settings.ShowAttractionZones;
    }
  }

  toggleKillZones() {
    this.settings.ShowKillZones = !this.settings.ShowKillZones;

    for(let attractor of this.attractors) {
      attractor.settings.ShowKillZones = !attractor.settings.ShowKillZones;
    }
  }

  toggleInfluenceLines() {
    this.settings.ShowInfluenceLines = !this.settings.ShowInfluenceLines;
  }

  toggleBounds() {
    this.settings.ShowBounds = !this.settings.ShowBounds;
  }

  toggleObstacles() {
    this.settings.ShowObstacles = !this.settings.ShowObstacles;
  }

  toggleCanalization() {
    this.settings.EnableCanalization = !this.settings.EnableCanalization;

    if(!this.settings.EnableCanalization) {
      for(let node of this.nodes) {
        node.thickness = 0;
      }
    }
  }

  toggleOpacityBlending() {
    this.settings.EnableOpacityBlending = !this.settings.EnableOpacityBlending;

    for(let node of this.nodes) {
      node.settings.EnableOpacityBlending = this.settings.EnableOpacityBlending;
    }
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}

/***/ }),

/***/ "./core/Node.js":
/*!**********************!*\
  !*** ./core/Node.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Node; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class Node {
  constructor(parent, position, isTip, ctx, settings, color = undefined) {
    this.parent = parent;       // reference to parent node, necessary for vein thickening later
    this.position = position;   // {vec2} of this node's position
    this.isTip = isTip;         // {boolean}
    this.ctx = ctx;             // global canvas context for drawing
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
    this.color = color;         // color, usually passed down from parent

    this.influencedBy = [];     // references to all Attractors influencing this node each frame
    this.thickness = 0;         // thickness - this is increased during vein thickening process
  }

  draw() {
    if(this.parent != null) {
      // Smoothly ramp up opacity based on vein thickness
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = this.thickness / 3 + .2;
      }

      // "Lines" render mode
      if(this.settings.RenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        if(this.isTip && this.settings.ShowTips) {
          this.ctx.strokeStyle = this.settings.Colors.TipColor;
          this.ctx.lineWidth = this.settings.TipThickness;
        } else {
          if(this.color != undefined) {
            this.ctx.strokeStyle = this.color;
          } else {
            this.ctx.strokeStyle = this.settings.Colors.BranchColor;
          }

          this.ctx.lineWidth = this.settings.BranchThickness + this.thickness;
        }

        this.ctx.stroke();
        this.ctx.lineWidth = 1;

      // "Dots" render mode
      } else if(this.settings.RenderMode == 'Dots') {
        this.ctx.beginPath();
        this.ctx.ellipse(
          this.position.x,
          this.position.y,
          1 + this.thickness / 2,
          1 + this.thickness / 2,
          0,
          0,
          Math.PI * 2
        );

        // Change color or "tip" nodes
        if(this.isTip && this.settings.ShowTips) {
          this.ctx.fillStyle = this.settings.Colors.TipColor;
        } else {
          this.ctx.fillStyle = this.settings.Colors.BranchColor;
        }

        this.ctx.fill();
      }

      // Reset global opacity if it was changed due to opacity gradient flag
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = 1;
      }
    }
  }

  // Create a new node in the provided direction and a pre-defined distance (SegmentLength)
  getNextNode(averageAttractorDirection) {
    this.isTip = false;
    this.nextPosition = this.position.add(averageAttractorDirection.multiply(this.settings.SegmentLength), true);

    return new Node(
      this,
      this.nextPosition,
      true,
      this.ctx,
      this.settings,
      this.color
    );
  }
}

/***/ }),

/***/ "./core/Path.js":
/*!**********************!*\
  !*** ./core/Path.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);



let inside = __webpack_require__(/*! point-in-polygon */ "./node_modules/point-in-polygon/index.js");

class Path {
  constructor(polygon, type, ctx, settings) {
    this.polygon = polygon;     // array of arrays containing coordinates defining a polygon ([[x0,y0],[x1,y1],...])
    this.ctx = ctx;             // global canvas context
    this.type = type;           // string either 'Bounds' or 'Obstacle'

    this.transformedPolygon = polygon;  // Paths are initialized without any transformations by default
    this.origin = {x:0, y:0};           // origin point used for translation
    this.scale = 1;                     // multiplication factor for polygon coordinates
    this.width = -1;                    // width of transformed polygon - will be calculated using this.calculateDimensions()
    this.height = -1;                   // height of transformed polygon - will be calculated using this.calculateDimensions()
    this.isCentered = false;            // whether or not to automatically translate to screen center

    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.calculateDimensions();
  }

  // Check if provided coordinates are inside polygon defined by this Path
  contains(x, y) {
    return inside([x, y], this.polygon);
  }

  // Relative translation
  moveBy(x, y) {
    this.origin.x += x;
    this.origin.y += y;

    this.createTransformedPolygon();
  }

  // Absolute translation
  moveTo(x, y) {
    if(this.isCentered) {
      this.origin.x = x - this.width/2;
      this.origin.y = y - this.height/2;
    } else {
      this.origin.x = x;
      this.origin.y = y;
    }

    this.createTransformedPolygon();
  }

  setScale(factor) {
    this.scale *= factor;
    this.createTransformedPolygon();
    this.calculateDimensions();

    if(this.isCentered) {
      this.moveTo(window.innerWidth/2, window.innerHeight/2);
    }
  }

  // Calculate total path length by adding up all line segment lengths (distances between polygon points)
  getTotalLength() {
    let totalLength = 0;

    for(let i=1; i<this.polygon.length; i++) {
      totalLength += vec2__WEBPACK_IMPORTED_MODULE_1__(
        this.polygon[i][0] * this.scale,
        this.polygon[i][1] * this.scale
      ).distance(
        vec2__WEBPACK_IMPORTED_MODULE_1__(
          this.polygon[i-1][0] * this.scale,
          this.polygon[i-1][1] * this.scale
        )
      );
    }

    return totalLength;
  }

  // Calculates the real width and height of the transformed polygon
  calculateDimensions() {
    let leftMostCoordinate = this.transformedPolygon[0][0],
      rightMostCoordinate = this.transformedPolygon[0][0],
      topMostCoordinate = this.transformedPolygon[0][1],
      bottomMostCoordinate = this.transformedPolygon[0][1];

    for(let i=0; i<this.transformedPolygon.length; i++) {
      if(this.transformedPolygon[i][0] < leftMostCoordinate) {
        leftMostCoordinate = this.transformedPolygon[i][0];
      } else if(this.transformedPolygon[i][0] > rightMostCoordinate) {
        rightMostCoordinate = this.transformedPolygon[i][0];
      }

      if(this.transformedPolygon[i][1] < topMostCoordinate) {
        topMostCoordinate = this.transformedPolygon[i][1];
      } else if(this.transformedPolygon[i][1] > bottomMostCoordinate) {
        bottomMostCoordinate = this.transformedPolygon[i][1];
      }
    }

    this.width = Math.abs(rightMostCoordinate - leftMostCoordinate);
    this.height = Math.abs(bottomMostCoordinate - topMostCoordinate);
  }

  // Create coordinates for the "transformed" version of this path, taking into consideration translation and scaling
  createTransformedPolygon() {
    this.transformedPolygon = [];

    for(let i=0; i<this.polygon.length; i++) {
      this.transformedPolygon.push(
        [
          this.polygon[i][0] * this.scale + this.origin.x,
          this.polygon[i][1] * this.scale + this.origin.y
        ]
      );
    }
  }

  draw() {
    if(
      this.settings.ShowBounds && this.type == 'Bounds' ||
      this.settings.ShowObstacles && this.type == 'Obstacles'
    ) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.transformedPolygon[0][0], this.transformedPolygon[0][1]);

      // Draw sequential lines to all points of the polygon
      for(let i = 0; i < this.transformedPolygon.length; i++) {
        this.ctx.lineTo(this.transformedPolygon[i][0], this.transformedPolygon[i][1]);
      }

      // Draw line back to first point to close the polygon
      // this.ctx.lineTo(this.transformedPolygon[0][0], this.transformedPolygon[0][1]);

      switch(this.type) {
        case 'Bounds':
          this.ctx.strokeStyle = this.settings.Colors.BoundsBorderColor;
          this.ctx.lineWidth = this.settings.BoundsBorderThickness;
          this.ctx.fillStyle = this.settings.Colors.BoundsFillColor;

          this.ctx.stroke();
          this.ctx.lineWidth = 1;

          break;

        case 'Obstacle':
          this.ctx.fillStyle = this.settings.Colors.ObstacleFillColor;
          break;
      }

      this.ctx.fill();

      // Draw bounding box
      // this.ctx.beginPath();
      // this.ctx.moveTo(this.origin.x, this.origin.y);
      // this.ctx.lineTo(this.origin.x + this.width, this.origin.y);
      // this.ctx.lineTo(this.origin.x + this.width, this.origin.y + this.height);
      // this.ctx.lineTo(this.origin.x, this.origin.y + this.height);
      // this.ctx.lineTo(this.origin.x, this.origin.y);
      // this.ctx.strokeStyle = 'rgba(255,255,255,1)';
      // this.ctx.stroke();
    }
  }
}

/***/ }),

/***/ "./core/SVGLoader.js":
/*!***************************!*\
  !*** ./core/SVGLoader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SVGLoader; });
/* harmony import */ var _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/svg-pathdata */ "./node_modules/svg-pathdata/lib/SVGPathData.module.js");


class SVGLoader {
  constructor() {}

  static load(svgString) {
    let parser = new DOMParser();
    let svgNode = parser.parseFromString(svgString, 'image/svg+xml');

    let inputPaths = svgNode.querySelectorAll('path'),
      paths = [];

    // Scrape all points from all paths, and record breakpoints
    for(let inputPath of inputPaths) {
      let pathData = new _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"](inputPath.getAttribute('d')),
        points = [];

      let previousCoords = {
        x: 0,
        y: 0
      };

      for(let [index, command] of pathData.commands.entries()) {
        switch(command.type) {
          // Move ('M') and line ('L') commands have both X and Y
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].MOVE_TO:
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].LINE_TO:
            points.push([command.x, command.y]);
            break;

          // Horizontal line ('H') commands only have X, using previous command's Y
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].HORIZ_LINE_TO:
            points.push([command.x, previousCoords.y]);
            break;

          // Vertical line ('V') commands only have Y, using previous command's X
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].VERT_LINE_TO:
            points.push([previousCoords.x, command.y]);
            break;

          // ClosePath ('Z') commands are a naive indication that the current path can be processed and added to the world
          case _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].CLOSE_PATH:
            // Capture path in return object
            paths.push(points);
            points = [];
            break;
        }

        // Unclosed paths never have CLOSE_PATH commands, so wrap up the current path when we're at the end of the path and have not found the command
        if(index == pathData.commands.length - 1 && command.type != _node_modules_svg_pathdata__WEBPACK_IMPORTED_MODULE_0__["SVGPathData"].CLOSE_PATH) {
          paths.push(points);
          points = [];
        }

        // Capture X coordinate, if there was one
        if(command.hasOwnProperty('x')) {
          previousCoords.x = command.x;
        }

        // Capture Y coordinate, if there was one
        if(command.hasOwnProperty('y')) {
          previousCoords.y = command.y;
        }
      }
    }

    return paths;
  }
}


/***/ }),

/***/ "./core/Utilities.js":
/*!***************************!*\
  !*** ./core/Utilities.js ***!
  \***************************/
/*! exports provided: random, map, getCircleOfPoints, exportSVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCircleOfPoints", function() { return getCircleOfPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportSVG", function() { return exportSVG; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-points */ "./node_modules/svg-points/modules/index.js");



// random(), similar to Processing's
// If two parameters are passed, they are interpreted as the minimum and maximum of the desired range
// If only one parameter is passed, it is interpreted as the maximum, while zero is used as the minimum
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

// Converts a number from one range to another
function map(value, originalLower, originalUpper, newLower, newUpper) {
  return newLower + (newUpper - newLower) * ((value - originalLower) / (originalUpper - originalLower));
}

// Returns an array of point coordinates (also arrays, with two entries) for points arranged in a circle
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

// Creates an SVG document containing all of the visible geometry, then pushes it to the client
// - Triggered by pressing `e` in any sketch. See KeyboardInteractions.js for definition
function exportSVG(network) {
  // Set up <svg> element
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
  svg.setAttribute('width', window.innerWidth);
  svg.setAttribute('height', window.innerHeight);
  svg.setAttribute('viewBox', '0 0 ' + window.innerWidth + ' ' + window.innerHeight);

  // Create <line>s for each branch segment
  if(network.settings.ShowBranches) {
    let nodeLinesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    for(let node of network.nodes) {
      if(node.parent != null) {
        let lineNode = `
          <line
            x1="${node.parent.position.x}"
            y1="${node.parent.position.y}"
            x2="${node.position.x}"
            y2="${node.position.y}"
            stroke="black"
          />
        `;

        nodeLinesGroup.innerHTML += lineNode;
      }
    }

    svg.appendChild(nodeLinesGroup);
  }

  // Create <path>s for bounds
  if(network.settings.ShowBounds) {
    if(network.bounds.length > 0) {
      let boundsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      for(let bound of network.bounds) {
        boundsGroup.appendChild(
          getPathElFromPoints(bound.polygon)
        );
      }

      svg.appendChild(boundsGroup);
    }
  }

  // Create <path>s for obstacles
  if(network.settings.ShowObstacles) {
    if(network.obstacles.length > 0) {
      let obstaclesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      for(let obstacle of network.obstacles) {
        obstaclesGroup.appendChild(
          getPathElFromPoints(obstacle.polygon)
        );
      }

      svg.appendChild(obstaclesGroup);
    }
  }

  // Generate the document as a Blob and force a download as a timestamped .svg file
  const svgDoctype = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>';
  const serializedSvg = (new XMLSerializer()).serializeToString(svg);
  const blob = new Blob([svgDoctype, serializedSvg], { type: 'image/svg+xml;' })
  Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(blob, 'venation-' + Date.now() + '.svg');
}

  // Create a <path> element with a properly-formatted `d` attribute containing all the coordinates of the passed points
  function getPathElFromPoints(points) {
    let pointsString = '';

    for(let [index, point] of points.entries()) {
      pointsString += point[0] + ',' + point[1];

      if(index < points.length - 1) {
        pointsString += ' ';
      }
    }

    // Add closepath command to automatically draw line back to initial point
    pointsString += ' ' + points[0][0] + ',' + points[0][1];

    let d = Object(svg_points__WEBPACK_IMPORTED_MODULE_1__["toPath"])({
      type: 'polyline',
      points: pointsString
    });

    let pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', d);
    pathEl.setAttribute('style', 'fill: none; stroke: black; stroke-width: 1');

    return pathEl;
  }

/***/ }),

/***/ "./experiments/obstacles/js/entry.js":
/*!*******************************************!*\
  !*** ./experiments/obstacles/js/entry.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_AttractorPatterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/AttractorPatterns */ "./core/AttractorPatterns.js");
/* harmony import */ var _core_Node__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Node */ "./core/Node.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_SVGLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/SVGLoader */ "./core/SVGLoader.js");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");









const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./experiments/obstacles/svg/leaf.svg");

let canvas, ctx;
let network;

const TRIANGLE = 0;
const SQUARE = 1;
const CIRCLE = 2;
const LEAF = 3;
let currentBoundsShape = LEAF;

let showHelp = true;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Add the bounds, attractors, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_7__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addBounds();
  addObstacles();
  addAttractors();
  addRootNodes();
}

  let addBounds = () => {
    switch(currentBoundsShape) {
      case TRIANGLE:
        network.bounds = getTriangleBounds();
        break;

      case SQUARE:
        network.bounds = getSquareBounds();
        break;

      case CIRCLE:
        network.bounds = getCircleBounds();
        break;

      case LEAF:
        network.bounds = getLeafBounds();
        break;
    }
  }

    let getTriangleBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      return [new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
        [
          [cx - 400, cy + 300],
          [cx, cy - 350],
          [cx + 400, cy + 300]
        ],
        'Bounds',
        ctx
      )];
    }

    let getSquareBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const sideLength = 800;

      return [new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
        [
          [cx - sideLength/2, cy - sideLength/2],  // top left corner
          [cx + sideLength/2, cy - sideLength/2],  // top right corner
          [cx + sideLength/2, cy + sideLength/2],  // bottom right corner
          [cx - sideLength/2, cy + sideLength/2]   // bottom left corner
        ],
        'Bounds',
        ctx
      )];
    }

    let getCircleBounds = () => {
      return [new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
        Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["getCircleOfPoints"])(
          window.innerWidth / 2,    // cx
          window.innerHeight / 2,   // cy
          350,                      // radius
          100                       // resolution
        ),
        'Bounds',
        ctx
      )];
    }

    let getLeafBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const shapeWidth = 900;
      const shapeHeight = 900;

      let polygon = _core_SVGLoader__WEBPACK_IMPORTED_MODULE_5__["default"].load(leaf)[0];

      // Translate the design to the screen center
      for(let point of polygon) {
        point[0] = cx - shapeWidth/2 + point[0];
        point[1] = cy - shapeHeight/2 + point[1];
      }

      return [new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](polygon, 'Bounds', ctx)];
    }

  let addObstacles = () => {
    network.obstacles = [];

    switch(currentBoundsShape) {
      case LEAF:
        // Ten random circles
        for(let i=0; i<25; i++) {
          network.obstacles.push(
            new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
              Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["getCircleOfPoints"])(
                window.innerWidth / 2 + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(-300,300),
                window.innerHeight / 2 + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(-300,300),
                Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(20,60),
                100
              ),
              'Obstacle',
              ctx
            )
          );
        }

        break;

      default:
        // Single circle in center
        network.obstacles.push(
          new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
            Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["getCircleOfPoints"])(
              window.innerWidth / 2,
              window.innerHeight / 2 + 90,
              200,
              100
            ),
            'Obstacle',
            ctx
          )
        );

        break;
    }
  }

  let addAttractors = () => {
    // Set up the attractors using pre-made patterns
    let randomAttractors = Object(_core_AttractorPatterns__WEBPACK_IMPORTED_MODULE_2__["getRandomAttractors"])(500, ctx, 10, network.bounds, network.obstacles);
    let gridAttractors = Object(_core_AttractorPatterns__WEBPACK_IMPORTED_MODULE_2__["getGridOfAttractors"])(200, 200, ctx, 10, network.bounds, network.obstacles);

    network.attractors = gridAttractors;
  
    for(let attractor of network.attractors) {
      attractor.settings = network.settings;
    }
  }

  // Create the network with initial conditions
  let addRootNodes = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;

    switch(currentBoundsShape) {
      case TRIANGLE:
        network.addNode(
          new _core_Node__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(cx - 340, cy + 290),
            true,
            ctx
          )
        );

        // network.addNode(
        //   new Node(
        //     null,
        //     new Vec2(cx, cy - 300),
        //     true,
        //     ctx
        //   )
        // );

        // network.addNode(
        //   new Node(
        //     null,
        //     new Vec2(cx + 340, cy + 290),
        //     true,
        //     ctx
        //   )
        // );

        break;

      case CIRCLE:
        network.addNode(
          new _core_Node__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(cx, cy + 300),
            true,
            ctx
          )
        );

        break;

      case SQUARE:
        // Add a set of random root nodes throughout scene
        for(let i=0; i<10; i++) {
          network.addNode(
            new _core_Node__WEBPACK_IMPORTED_MODULE_3__["default"](
              null,
              new vec2__WEBPACK_IMPORTED_MODULE_0__(
                Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(window.innerWidth),
                Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(window.innerHeight)
              ),
              true,
              ctx
            )
          );
        }

        break;

      case LEAF:
        // Put a single root note at the base of the leaf
        network.addNode(
          new _core_Node__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              window.innerWidth / 2 - 5,
              window.innerHeight / 2 + 220
            ),
            true,
            ctx
          )
        );

        break;
    }
  }

let drawText = () => {
  let text = [
    'Veins can be made to avoid obstacles.',
    '',
    '1 = triangle with hole',
    '2 = square with hole',
    '3 = circle with hole',
    '4 = leaf with holes',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'n = toggle node visibility',
    'a = toggle attractor visibility',
    'z = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(255,255,2555,1)';
  ctx.fillText('Obstacles', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  for(let i=0; i<text.length; i++) {
    ctx.fillText(text[i], 20, 22*i + 80);
  }
}

// Main program loop
let update = (timestamp) => {
  network.update();
  network.draw();

  if(showHelp) {
    drawText();
  }

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      resetNetwork();
      break;

    // h = toggle help text
    case 'h':
      showHelp = !showHelp;
      break;

    case '1':
      currentBoundsShape = TRIANGLE;
      resetNetwork();
      break;

    case '2':
      currentBoundsShape = SQUARE;
      resetNetwork();
      break;

    case '3':
      currentBoundsShape = CIRCLE;
      resetNetwork();
      break;

    case '4':
      currentBoundsShape = LEAF;
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();

/***/ }),

/***/ "./experiments/obstacles/svg/leaf.svg":
/*!********************************************!*\
  !*** ./experiments/obstacles/svg/leaf.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" id=\"svg2\" sodipodi:docname=\"leaf-2.svg\" viewBox=\"0 0 900.00002 899.99999\" version=\"1.1\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g id=\"layer1\" inkscape:label=\"Calque 1\" inkscape:groupmode=\"layer\"><path id=\"path3183\" d=\"M 450.21891,829.07436 450.45107,828.2146 451.08318,826.45268 452.01869,824.04535 453.16105,821.24933 454.58598,816.55769 454.94938,810.28998 454.19894,800.24067 452.28238,784.20422 450.62632,769.80478 448.94165,752.77806 447.4255,735.252 446.27499,719.35455 445.3172,705.64829 444.32572,694.08884 443.41751,685.89319 442.70957,682.27835 440.86599,681.38101 436.71054,680.92581 430.23217,680.91228 421.41982,681.33993 373.56476,684.65278 343.85947,687.66778 322.82381,691.70197 300.97762,698.07241 291.07099,700.83975 281.19342,702.73412 269.73448,703.99355 255.08372,704.85607 243.81519,705.231 234.0347,705.326 226.79067,705.14628 223.13148,704.69709 221.38605,703.73684 221.1582,702.3985 222.62257,700.17983 225.95381,696.57855 231.19536,690.09197 234.577,683.59589 235.88687,677.65205 234.91308,672.82217 228.82264,667.09404 216.86155,660.89729 199.86848,654.59381 178.68212,648.54552 166.86084,645.45427 156.89205,642.63894 149.82455,640.41012 146.70709,639.07841 146.74605,637.42634 148.50718,634.35023 151.82972,630.08232 156.55289,624.85485 163.29377,617.40023 167.04858,611.84631 168.50855,606.78605 168.36496,600.81242 165.85132,594.25087 159.17953,586.54175 147.73087,577.09949 130.88664,565.3385 120.47053,558.29877 111.94064,552.30182 106.17719,547.98291 104.06044,545.97729 105.12647,544.92448 108.02903,543.19975 112.32482,541.04215 117.57054,538.69077 132.46189,531.37219 139.91964,523.95905 141.16234,514.0214 137.4085,499.12927 132.59721,483.22865 127.6632,465.41277 123.404,448.67904 120.61715,436.0249 116.40875,417.45661 110.19469,394.18517 103.69582,372.32076 98.633016,357.97356 96.050187,352.97606 92.500473,347.2684 88.451811,341.55409 84.372136,336.53665 80.726756,332.17248 77.860562,328.23817 76.060862,325.16522 75.614966,323.38514 94.467188,320.40204 134.89222,323.96985 179.65288,331.78526 211.51198,341.54495 216.84722,344.10829 223.64803,347.17255 231.0402,350.35319 238.14955,353.26561 245.40835,356.42409 253.20602,360.27465 260.60641,364.33039 266.67337,368.10438 284.77547,379.23659 296.47145,382.95383 303.12508,379.25763 306.10013,368.14957 307.90483,356.21672 310.71843,343.8241 314.32131,331.80723 318.49383,321.00163 320.65917,315.11523 323.16382,306.76169 325.69751,297.05347 327.94995,287.10303 330.38786,274.58277 331.51659,266.14043 331.46689,260.01047 330.36953,254.42739 328.03697,244.00636 329.10196,239.70026 334.70552,240.99357 345.98871,247.37075 355.68932,252.59575 364.41363,256.15901 371.17511,257.73331 374.9872,256.99145 375.27946,255.82477 375.13501,253.58837 374.59593,250.60377 373.70428,247.19249 372.51524,241.84909 372.85642,236.04084 375.2092,227.13944 380.05493,212.51659 384.04158,201.60877 388.2989,191.28296 392.32292,182.69046 395.60965,176.98255 402.15222,167.27407 410.05213,154.637 419.72417,138.38949 431.58312,117.84967 445.34739,94.888179 457.07757,77.603895 466.24471,66.710188 472.31989,62.920426 473.52927,63.607271 474.32889,65.767704 474.74953,69.551567 474.82197,75.108706 475.03267,80.795118 475.73314,87.267787 476.81373,93.730079 478.16477,99.385356 484.74774,116.91069 495.04251,138.58652 507.41166,161.21256 520.21777,181.58853 528.72267,193.72108 534.1699,200.41951 538.12363,203.27311 542.14801,203.87114 545.1129,203.59972 548.27868,202.86069 551.26639,201.76694 553.69704,200.43133 556.46707,198.62586 558.2679,198.04271 559.66924,198.69403 561.24079,200.59197 562.41079,203.88143 563.55019,210.15528 564.56351,218.75407 565.3553,229.01837 566.28158,241.7583 567.40826,250.34172 568.99134,256.12611 571.28683,260.46899 578.36697,271.64063 583.82518,281.77671 587.95354,291.48147 591.04415,301.35914 592.71249,307.21906 594.44033,312.45358 596.02376,316.49164 597.25883,318.76217 598.59166,321.1701 600.44115,325.58214 602.56272,331.37013 604.71179,337.90594 607.19733,346.93887 608.78829,355.69177 609.67148,365.57168 610.03371,377.98563 610.89123,401.46656 613.89457,412.78564 620.74334,414.1269 633.13715,407.67437 638.79351,404.31397 644.61602,401.02215 649.91944,398.17686 654.01856,396.15602 658.024,394.20354 663.07183,391.54439 668.51593,388.52807 673.71017,385.5041 684.79474,379.766 698.62076,374.19166 715.11102,368.80911 734.1883,363.64641 780.91891,351.85498 811.17134,343.55218 830.52643,337.07576 844.56499,330.76348 845.1686,331.05593 845.66291,332.4412 845.99692,334.69518 846.11959,337.59378 845.44803,342.24018 843.47694,348.69013 840.27173,356.76017 835.89779,366.26684 831.41957,375.99279 826.78282,386.91578 822.53467,397.69901 819.22229,407.00568 813.69888,423.23928 807.51056,440.14719 800.22955,458.86076 791.42809,480.51137 786.91488,490.73644 782.60723,498.8696 778.11638,505.56607 773.05354,511.48109 769.23059,515.59527 766.09993,519.16813 763.98463,521.81655 763.20773,523.15739 763.50683,523.95466 764.32121,525.1229 765.52648,526.50507 766.99826,527.94412 769.44885,529.49766 772.91614,530.56383 777.57008,531.17777 783.58067,531.37461 788.54751,531.46451 792.61493,531.70929 795.36319,532.07156 796.37255,532.51394 795.10515,536.26841 791.80301,542.04124 787.21623,548.65476 782.09489,554.93129 770.58999,568.5797 758.75813,583.89931 749.14526,597.46192 744.29735,605.8393 743.47391,608.82362 743.22119,611.47592 743.54034,613.88407 744.4325,616.13594 748.51041,620.83348 755.46778,626.26064 763.78559,631.36973 771.94479,635.11306 775.01558,636.39349 777.68376,637.84198 779.6631,639.28068 780.66735,640.53178 780.07446,643.01537 777.5305,645.98721 774.09429,648.4798 770.82465,649.52566 768.21134,650.34687 762.44449,652.58284 754.37622,655.8921 744.85867,659.9332 716.46009,672.68119 699.29565,681.97457 690.84513,689.46449 688.58833,696.80212 690.40139,703.19636 695.1695,711.29144 701.88602,719.64539 709.54435,726.81628 712.01341,729.01364 713.78628,731.12999 714.7154,732.95035 714.65318,734.25971 702.00423,736.21531 674.59347,735.95173 642.3006,733.85891 615.00532,730.32678 590.602,725.49305 573.38269,721.64372 561.13694,718.23418 551.65429,714.71983 544.56506,711.99097 535.12624,708.74405 524.56943,705.38581 514.12622,702.32302 503.80271,699.27972 493.57297,695.97455 484.61819,692.80618 478.11959,690.1733 473.14087,688.07208 468.32285,686.35134 464.21522,685.18866 461.36762,684.76163 458.64141,685.05558 457.16346,686.56359 456.55469,690.22489 456.43601,696.97872 457.08449,713.12718 458.88616,733.17673 461.62542,755.13291 465.08664,777.0013 468.87459,799.59065 470.48307,813.52535 470.05254,821.40682 467.72345,825.8365 463.69742,828.16448 457.82313,829.77871 452.52248,830.23126 450.2174,829.07421 450.21778,829.07425 450.21816,829.07428 450.21853,829.07432 Z\" style=\"fill:none;stroke:#000000;stroke-width:2.07280159;stroke-opacity:1\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ }),

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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

/***/ "./node_modules/point-in-polygon/index.js":
/*!************************************************!*\
  !*** ./node_modules/point-in-polygon/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


/***/ }),

/***/ "./node_modules/simplex-noise/simplex-noise.js":
/*!*****************************************************!*\
  !*** ./node_modules/simplex-noise/simplex-noise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * A fast javascript implementation of simplex noise by Jonas Wagner

Based on a speed-improved simplex noise algorithm for 2D, 3D and 4D in Java.
Which is based on example code by Stefan Gustavson (stegu@itn.liu.se).
With Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
Better rank ordering method by Stefan Gustavson in 2012.


 Copyright (c) 2018 Jonas Wagner

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */
(function() {
  'use strict';

  var F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
  var G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
  var F3 = 1.0 / 3.0;
  var G3 = 1.0 / 6.0;
  var F4 = (Math.sqrt(5.0) - 1.0) / 4.0;
  var G4 = (5.0 - Math.sqrt(5.0)) / 20.0;

  function SimplexNoise(randomOrSeed) {
    var random;
    if (typeof randomOrSeed == 'function') {
      random = randomOrSeed;
    }
    else if (randomOrSeed) {
      random = alea(randomOrSeed);
    } else {
      random = Math.random;
    }
    this.p = buildPermutationTable(random);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
      this.permMod12[i] = this.perm[i] % 12;
    }

  }
  SimplexNoise.prototype = {
    grad3: new Float32Array([1, 1, 0,
      -1, 1, 0,
      1, -1, 0,

      -1, -1, 0,
      1, 0, 1,
      -1, 0, 1,

      1, 0, -1,
      -1, 0, -1,
      0, 1, 1,

      0, -1, 1,
      0, 1, -1,
      0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1,
      0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1,
      1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1,
      -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
      1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1,
      -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1,
      1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0,
      -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function(xin, yin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0 = 0; // Noise contributions from the three corners
      var n1 = 0;
      var n2 = 0;
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin) * F2; // Hairy factor for 2D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var t = (i + j) * G2;
      var X0 = i - t; // Unskew the cell origin back to (x,y) space
      var Y0 = j - t;
      var x0 = xin - X0; // The x,y distances from the cell origin
      var y0 = yin - Y0;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } // lower triangle, XY order: (0,0)->(1,0)->(1,1)
      else {
        i1 = 0;
        j1 = 1;
      } // upper triangle, YX order: (0,0)->(0,1)->(1,1)
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1.0 + 2.0 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1.0 + 2.0 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      var ii = i & 255;
      var jj = j & 255;
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 >= 0) {
        var gi0 = permMod12[ii + perm[jj]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0); // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 >= 0) {
        var gi1 = permMod12[ii + i1 + perm[jj + j1]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1);
      }
      var t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 >= 0) {
        var gi2 = permMod12[ii + 1 + perm[jj + 1]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70.0 * (n0 + n1 + n2);
    },
    // 3D simplex noise
    noise3D: function(xin, yin, zin) {
      var permMod12 = this.permMod12;
      var perm = this.perm;
      var grad3 = this.grad3;
      var n0, n1, n2, n3; // Noise contributions from the four corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin + yin + zin) * F3; // Very nice and simple skew factor for 3D
      var i = Math.floor(xin + s);
      var j = Math.floor(yin + s);
      var k = Math.floor(zin + s);
      var t = (i + j + k) * G3;
      var X0 = i - t; // Unskew the cell origin back to (x,y,z) space
      var Y0 = j - t;
      var Z0 = k - t;
      var x0 = xin - X0; // The x,y,z distances from the cell origin
      var y0 = yin - Y0;
      var z0 = zin - Z0;
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // X Y Z order
        else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // X Z Y order
        else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } // Z X Y order
      }
      else { // x0<y0
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Z Y X order
        else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } // Y Z X order
        else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } // Y X Z order
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner in (x,y,z) coords
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
      var x2 = x0 - i2 + 2.0 * G3; // Offsets for third corner in (x,y,z) coords
      var y2 = y0 - j2 + 2.0 * G3;
      var z2 = z0 - k2 + 2.0 * G3;
      var x3 = x0 - 1.0 + 3.0 * G3; // Offsets for last corner in (x,y,z) coords
      var y3 = y0 - 1.0 + 3.0 * G3;
      var z3 = z0 - 1.0 + 3.0 * G3;
      // Work out the hashed gradient indices of the four simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = permMod12[ii + perm[jj + perm[kk]]] * 3;
        t0 *= t0;
        n0 = t0 * t0 * (grad3[gi0] * x0 + grad3[gi0 + 1] * y0 + grad3[gi0 + 2] * z0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = permMod12[ii + i1 + perm[jj + j1 + perm[kk + k1]]] * 3;
        t1 *= t1;
        n1 = t1 * t1 * (grad3[gi1] * x1 + grad3[gi1 + 1] * y1 + grad3[gi1 + 2] * z1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = permMod12[ii + i2 + perm[jj + j2 + perm[kk + k2]]] * 3;
        t2 *= t2;
        n2 = t2 * t2 * (grad3[gi2] * x2 + grad3[gi2 + 1] * y2 + grad3[gi2 + 2] * z2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = permMod12[ii + 1 + perm[jj + 1 + perm[kk + 1]]] * 3;
        t3 *= t3;
        n3 = t3 * t3 * (grad3[gi3] * x3 + grad3[gi3 + 1] * y3 + grad3[gi3 + 2] * z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to stay just inside [-1,1]
      return 32.0 * (n0 + n1 + n2 + n3);
    },
    // 4D simplex noise, better simplex rank ordering method 2012-03-09
    noise4D: function(x, y, z, w) {
      var perm = this.perm;
      var grad4 = this.grad4;

      var n0, n1, n2, n3, n4; // Noise contributions from the five corners
      // Skew the (x,y,z,w) space to determine which cell of 24 simplices we're in
      var s = (x + y + z + w) * F4; // Factor for 4D skewing
      var i = Math.floor(x + s);
      var j = Math.floor(y + s);
      var k = Math.floor(z + s);
      var l = Math.floor(w + s);
      var t = (i + j + k + l) * G4; // Factor for 4D unskewing
      var X0 = i - t; // Unskew the cell origin back to (x,y,z,w) space
      var Y0 = j - t;
      var Z0 = k - t;
      var W0 = l - t;
      var x0 = x - X0; // The x,y,z,w distances from the cell origin
      var y0 = y - Y0;
      var z0 = z - Z0;
      var w0 = w - W0;
      // For the 4D case, the simplex is a 4D shape I won't even try to describe.
      // To find out which of the 24 possible simplices we're in, we need to
      // determine the magnitude ordering of x0, y0, z0 and w0.
      // Six pair-wise comparisons are performed between each possible pair
      // of the four coordinates, and the results are used to rank the numbers.
      var rankx = 0;
      var ranky = 0;
      var rankz = 0;
      var rankw = 0;
      if (x0 > y0) rankx++;
      else ranky++;
      if (x0 > z0) rankx++;
      else rankz++;
      if (x0 > w0) rankx++;
      else rankw++;
      if (y0 > z0) ranky++;
      else rankz++;
      if (y0 > w0) ranky++;
      else rankw++;
      if (z0 > w0) rankz++;
      else rankw++;
      var i1, j1, k1, l1; // The integer offsets for the second simplex corner
      var i2, j2, k2, l2; // The integer offsets for the third simplex corner
      var i3, j3, k3, l3; // The integer offsets for the fourth simplex corner
      // simplex[c] is a 4-vector with the numbers 0, 1, 2 and 3 in some order.
      // Many values of c will never occur, since e.g. x>y>z>w makes x<z, y<w and x<w
      // impossible. Only the 24 indices which have non-zero entries make any sense.
      // We use a thresholding to set the coordinates in turn from the largest magnitude.
      // Rank 3 denotes the largest coordinate.
      i1 = rankx >= 3 ? 1 : 0;
      j1 = ranky >= 3 ? 1 : 0;
      k1 = rankz >= 3 ? 1 : 0;
      l1 = rankw >= 3 ? 1 : 0;
      // Rank 2 denotes the second largest coordinate.
      i2 = rankx >= 2 ? 1 : 0;
      j2 = ranky >= 2 ? 1 : 0;
      k2 = rankz >= 2 ? 1 : 0;
      l2 = rankw >= 2 ? 1 : 0;
      // Rank 1 denotes the second smallest coordinate.
      i3 = rankx >= 1 ? 1 : 0;
      j3 = ranky >= 1 ? 1 : 0;
      k3 = rankz >= 1 ? 1 : 0;
      l3 = rankw >= 1 ? 1 : 0;
      // The fifth corner has all coordinate offsets = 1, so no need to compute that.
      var x1 = x0 - i1 + G4; // Offsets for second corner in (x,y,z,w) coords
      var y1 = y0 - j1 + G4;
      var z1 = z0 - k1 + G4;
      var w1 = w0 - l1 + G4;
      var x2 = x0 - i2 + 2.0 * G4; // Offsets for third corner in (x,y,z,w) coords
      var y2 = y0 - j2 + 2.0 * G4;
      var z2 = z0 - k2 + 2.0 * G4;
      var w2 = w0 - l2 + 2.0 * G4;
      var x3 = x0 - i3 + 3.0 * G4; // Offsets for fourth corner in (x,y,z,w) coords
      var y3 = y0 - j3 + 3.0 * G4;
      var z3 = z0 - k3 + 3.0 * G4;
      var w3 = w0 - l3 + 3.0 * G4;
      var x4 = x0 - 1.0 + 4.0 * G4; // Offsets for last corner in (x,y,z,w) coords
      var y4 = y0 - 1.0 + 4.0 * G4;
      var z4 = z0 - 1.0 + 4.0 * G4;
      var w4 = w0 - 1.0 + 4.0 * G4;
      // Work out the hashed gradient indices of the five simplex corners
      var ii = i & 255;
      var jj = j & 255;
      var kk = k & 255;
      var ll = l & 255;
      // Calculate the contribution from the five corners
      var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) n0 = 0.0;
      else {
        var gi0 = (perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32) * 4;
        t0 *= t0;
        n0 = t0 * t0 * (grad4[gi0] * x0 + grad4[gi0 + 1] * y0 + grad4[gi0 + 2] * z0 + grad4[gi0 + 3] * w0);
      }
      var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) n1 = 0.0;
      else {
        var gi1 = (perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32) * 4;
        t1 *= t1;
        n1 = t1 * t1 * (grad4[gi1] * x1 + grad4[gi1 + 1] * y1 + grad4[gi1 + 2] * z1 + grad4[gi1 + 3] * w1);
      }
      var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) n2 = 0.0;
      else {
        var gi2 = (perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32) * 4;
        t2 *= t2;
        n2 = t2 * t2 * (grad4[gi2] * x2 + grad4[gi2 + 1] * y2 + grad4[gi2 + 2] * z2 + grad4[gi2 + 3] * w2);
      }
      var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) n3 = 0.0;
      else {
        var gi3 = (perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32) * 4;
        t3 *= t3;
        n3 = t3 * t3 * (grad4[gi3] * x3 + grad4[gi3 + 1] * y3 + grad4[gi3 + 2] * z3 + grad4[gi3 + 3] * w3);
      }
      var t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) n4 = 0.0;
      else {
        var gi4 = (perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32) * 4;
        t4 *= t4;
        n4 = t4 * t4 * (grad4[gi4] * x4 + grad4[gi4 + 1] * y4 + grad4[gi4 + 2] * z4 + grad4[gi4 + 3] * w4);
      }
      // Sum up and scale the result to cover the range [-1,1]
      return 27.0 * (n0 + n1 + n2 + n3 + n4);
    }
  };

  function buildPermutationTable(random) {
    var i;
    var p = new Uint8Array(256);
    for (i = 0; i < 256; i++) {
      p[i] = i;
    }
    for (i = 0; i < 255; i++) {
      var r = i + ~~(random() * (256 - i));
      var aux = p[i];
      p[i] = p[r];
      p[r] = aux;
    }
    return p;
  }
  SimplexNoise._buildPermutationTable = buildPermutationTable;

  function alea() {
    // Johannes Baagøe <baagoe@baagoe.com>, 2010
    var s0 = 0;
    var s1 = 0;
    var s2 = 0;
    var c = 1;

    var mash = masher();
    s0 = mash(' ');
    s1 = mash(' ');
    s2 = mash(' ');

    for (var i = 0; i < arguments.length; i++) {
      s0 -= mash(arguments[i]);
      if (s0 < 0) {
        s0 += 1;
      }
      s1 -= mash(arguments[i]);
      if (s1 < 0) {
        s1 += 1;
      }
      s2 -= mash(arguments[i]);
      if (s2 < 0) {
        s2 += 1;
      }
    }
    mash = null;
    return function() {
      var t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
      s0 = s1;
      s1 = s2;
      return s2 = t - (c = t | 0);
    };
  }
  function masher() {
    var n = 0xefc8249d;
    return function(data) {
      data = data.toString();
      for (var i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        var h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  // amd
  if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {return SimplexNoise;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  // common js
  if (true) exports.SimplexNoise = SimplexNoise;
  // browser
  else {}
  // nodejs
  if (true) {
    module.exports = SimplexNoise;
  }

})();


/***/ }),

/***/ "./node_modules/svg-pathdata/lib/SVGPathData.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/svg-pathdata/lib/SVGPathData.module.js ***!
  \*************************************************************/
/*! exports provided: COMMAND_ARG_COUNTS, SVGPathData, SVGPathDataParser, SVGPathDataTransformer, encodeSVGPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_ARG_COUNTS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathData", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataParser", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataTransformer", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSVGPath", function() { return e; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var t=function(r,e){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])})(r,e)};function r(r,e){function i(){this.constructor=r}t(r,e),r.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}function e(t){var r="";Array.isArray(t)||(t=[t]);for(var e=0;e<t.length;e++){var i=t[e];if(i.type===f.CLOSE_PATH)r+="z";else if(i.type===f.HORIZ_LINE_TO)r+=(i.relative?"h":"H")+i.x;else if(i.type===f.VERT_LINE_TO)r+=(i.relative?"v":"V")+i.y;else if(i.type===f.MOVE_TO)r+=(i.relative?"m":"M")+i.x+" "+i.y;else if(i.type===f.LINE_TO)r+=(i.relative?"l":"L")+i.x+" "+i.y;else if(i.type===f.CURVE_TO)r+=(i.relative?"c":"C")+i.x1+" "+i.y1+" "+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===f.SMOOTH_CURVE_TO)r+=(i.relative?"s":"S")+i.x2+" "+i.y2+" "+i.x+" "+i.y;else if(i.type===f.QUAD_TO)r+=(i.relative?"q":"Q")+i.x1+" "+i.y1+" "+i.x+" "+i.y;else if(i.type===f.SMOOTH_QUAD_TO)r+=(i.relative?"t":"T")+i.x+" "+i.y;else{if(i.type!==f.ARC)throw new Error('Unexpected command type "'+i.type+'" at index '+e+".");r+=(i.relative?"a":"A")+i.rX+" "+i.rY+" "+i.xRot+" "+ +i.lArcFlag+" "+ +i.sweepFlag+" "+i.x+" "+i.y}}return r}function i(t,r){var e=t[0],i=t[1];return[e*Math.cos(r)-i*Math.sin(r),e*Math.sin(r)+i*Math.cos(r)]}function a(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];for(var e=0;e<t.length;e++)if("number"!=typeof t[e])throw new Error("assertNumbers arguments["+e+"] is not a number. "+typeof t[e]+" == typeof "+t[e]);return!0}var n=Math.PI;function o(t,r,e){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var a=t.rX,o=t.rY,s=t.x,u=t.y;a=Math.abs(t.rX),o=Math.abs(t.rY);var h=i([(r-s)/2,(e-u)/2],-t.xRot/180*n),c=h[0],y=h[1],p=Math.pow(c,2)/Math.pow(a,2)+Math.pow(y,2)/Math.pow(o,2);1<p&&(a*=Math.sqrt(p),o*=Math.sqrt(p)),t.rX=a,t.rY=o;var m=Math.pow(a,2)*Math.pow(y,2)+Math.pow(o,2)*Math.pow(c,2),O=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(a,2)*Math.pow(o,2)-m)/m)),T=a*y/o*O,v=-o*c/a*O,l=i([T,v],t.xRot/180*n);t.cX=l[0]+(r+s)/2,t.cY=l[1]+(e+u)/2,t.phi1=Math.atan2((y-v)/o,(c-T)/a),t.phi2=Math.atan2((-y-v)/o,(-c-T)/a),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*n),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*n),t.phi1*=180/n,t.phi2*=180/n}function s(t,r,e){a(t,r,e);var i=t*t+r*r-e*e;if(0>i)return[];if(0===i)return[[t*e/(t*t+r*r),r*e/(t*t+r*r)]];var n=Math.sqrt(i);return[[(t*e+r*n)/(t*t+r*r),(r*e-t*n)/(t*t+r*r)],[(t*e-r*n)/(t*t+r*r),(r*e+t*n)/(t*t+r*r)]]}var u,h=Math.PI/180;function c(t,r,e){return(1-e)*t+e*r}function y(t,r,e,i){return t+Math.cos(i/180*n)*r+Math.sin(i/180*n)*e}function p(t,r,e,i){var a=r-t,n=e-r,o=3*a+3*(i-e)-6*n,s=6*(n-a),u=3*a;return Math.abs(o)<1e-6?[-u/s]:function(t,r,e){void 0===e&&(e=1e-6);var i=t*t/4-r;if(i<-e)return[];if(i<=e)return[-t/2];var a=Math.sqrt(i);return[-t/2-a,-t/2+a]}(s/o,u/o,1e-6)}function m(t,r,e,i,a){var n=1-a;return t*(n*n*n)+r*(3*n*n*a)+e*(3*n*a*a)+i*(a*a*a)}!function(t){function r(){return u((function(t,r,e){return t.relative&&(void 0!==t.x1&&(t.x1+=r),void 0!==t.y1&&(t.y1+=e),void 0!==t.x2&&(t.x2+=r),void 0!==t.y2&&(t.y2+=e),void 0!==t.x&&(t.x+=r),void 0!==t.y&&(t.y+=e),t.relative=!1),t}))}function e(){var t=NaN,r=NaN,e=NaN,i=NaN;return u((function(a,n,o){return a.type&f.SMOOTH_CURVE_TO&&(a.type=f.CURVE_TO,t=isNaN(t)?n:t,r=isNaN(r)?o:r,a.x1=a.relative?n-t:2*n-t,a.y1=a.relative?o-r:2*o-r),a.type&f.CURVE_TO?(t=a.relative?n+a.x2:a.x2,r=a.relative?o+a.y2:a.y2):(t=NaN,r=NaN),a.type&f.SMOOTH_QUAD_TO&&(a.type=f.QUAD_TO,e=isNaN(e)?n:e,i=isNaN(i)?o:i,a.x1=a.relative?n-e:2*n-e,a.y1=a.relative?o-i:2*o-i),a.type&f.QUAD_TO?(e=a.relative?n+a.x1:a.x1,i=a.relative?o+a.y1:a.y1):(e=NaN,i=NaN),a}))}function n(){var t=NaN,r=NaN;return u((function(e,i,a){if(e.type&f.SMOOTH_QUAD_TO&&(e.type=f.QUAD_TO,t=isNaN(t)?i:t,r=isNaN(r)?a:r,e.x1=e.relative?i-t:2*i-t,e.y1=e.relative?a-r:2*a-r),e.type&f.QUAD_TO){t=e.relative?i+e.x1:e.x1,r=e.relative?a+e.y1:e.y1;var n=e.x1,o=e.y1;e.type=f.CURVE_TO,e.x1=((e.relative?0:i)+2*n)/3,e.y1=((e.relative?0:a)+2*o)/3,e.x2=(e.x+2*n)/3,e.y2=(e.y+2*o)/3}else t=NaN,r=NaN;return e}))}function u(t){var r=0,e=0,i=NaN,a=NaN;return function(n){if(isNaN(i)&&!(n.type&f.MOVE_TO))throw new Error("path must start with moveto");var o=t(n,r,e,i,a);return n.type&f.CLOSE_PATH&&(r=i,e=a),void 0!==n.x&&(r=n.relative?r+n.x:n.x),void 0!==n.y&&(e=n.relative?e+n.y:n.y),n.type&f.MOVE_TO&&(i=r,a=e),o}}function O(t,r,e,i,n,o){return a(t,r,e,i,n,o),u((function(a,s,u,h){var c=a.x1,y=a.x2,p=a.relative&&!isNaN(h),m=void 0!==a.x?a.x:p?0:s,O=void 0!==a.y?a.y:p?0:u;function T(t){return t*t}a.type&f.HORIZ_LINE_TO&&0!==r&&(a.type=f.LINE_TO,a.y=a.relative?0:u),a.type&f.VERT_LINE_TO&&0!==e&&(a.type=f.LINE_TO,a.x=a.relative?0:s),void 0!==a.x&&(a.x=a.x*t+O*e+(p?0:n)),void 0!==a.y&&(a.y=m*r+a.y*i+(p?0:o)),void 0!==a.x1&&(a.x1=a.x1*t+a.y1*e+(p?0:n)),void 0!==a.y1&&(a.y1=c*r+a.y1*i+(p?0:o)),void 0!==a.x2&&(a.x2=a.x2*t+a.y2*e+(p?0:n)),void 0!==a.y2&&(a.y2=y*r+a.y2*i+(p?0:o));var v=t*i-r*e;if(void 0!==a.xRot&&(1!==t||0!==r||0!==e||1!==i))if(0===v)delete a.rX,delete a.rY,delete a.xRot,delete a.lArcFlag,delete a.sweepFlag,a.type=f.LINE_TO;else{var l=a.xRot*Math.PI/180,_=Math.sin(l),N=Math.cos(l),x=1/T(a.rX),d=1/T(a.rY),A=T(N)*x+T(_)*d,E=2*_*N*(x-d),C=T(_)*x+T(N)*d,M=A*i*i-E*r*i+C*r*r,R=E*(t*i+r*e)-2*(A*e*i+C*t*r),g=A*e*e-E*t*e+C*t*t,I=(Math.atan2(R,M-g)+Math.PI)%Math.PI/2,S=Math.sin(I),L=Math.cos(I);a.rX=Math.abs(v)/Math.sqrt(M*T(L)+R*S*L+g*T(S)),a.rY=Math.abs(v)/Math.sqrt(M*T(S)-R*S*L+g*T(L)),a.xRot=180*I/Math.PI}return void 0!==a.sweepFlag&&0>v&&(a.sweepFlag=+!a.sweepFlag),a}))}function T(){return function(t){var r={};for(var e in t)r[e]=t[e];return r}}t.ROUND=function(t){function r(r){return Math.round(r*t)/t}return void 0===t&&(t=1e13),a(t),function(t){return void 0!==t.x1&&(t.x1=r(t.x1)),void 0!==t.y1&&(t.y1=r(t.y1)),void 0!==t.x2&&(t.x2=r(t.x2)),void 0!==t.y2&&(t.y2=r(t.y2)),void 0!==t.x&&(t.x=r(t.x)),void 0!==t.y&&(t.y=r(t.y)),void 0!==t.rX&&(t.rX=r(t.rX)),void 0!==t.rY&&(t.rY=r(t.rY)),t}},t.TO_ABS=r,t.TO_REL=function(){return u((function(t,r,e){return t.relative||(void 0!==t.x1&&(t.x1-=r),void 0!==t.y1&&(t.y1-=e),void 0!==t.x2&&(t.x2-=r),void 0!==t.y2&&(t.y2-=e),void 0!==t.x&&(t.x-=r),void 0!==t.y&&(t.y-=e),t.relative=!0),t}))},t.NORMALIZE_HVZ=function(t,r,e){return void 0===t&&(t=!0),void 0===r&&(r=!0),void 0===e&&(e=!0),u((function(i,a,n,o,s){if(isNaN(o)&&!(i.type&f.MOVE_TO))throw new Error("path must start with moveto");return r&&i.type&f.HORIZ_LINE_TO&&(i.type=f.LINE_TO,i.y=i.relative?0:n),e&&i.type&f.VERT_LINE_TO&&(i.type=f.LINE_TO,i.x=i.relative?0:a),t&&i.type&f.CLOSE_PATH&&(i.type=f.LINE_TO,i.x=i.relative?o-a:o,i.y=i.relative?s-n:s),i.type&f.ARC&&(0===i.rX||0===i.rY)&&(i.type=f.LINE_TO,delete i.rX,delete i.rY,delete i.xRot,delete i.lArcFlag,delete i.sweepFlag),i}))},t.NORMALIZE_ST=e,t.QT_TO_C=n,t.INFO=u,t.SANITIZE=function(t){void 0===t&&(t=0),a(t);var r=NaN,e=NaN,i=NaN,n=NaN;return u((function(a,o,s,u,h){var c=Math.abs,y=!1,p=0,m=0;if(a.type&f.SMOOTH_CURVE_TO&&(p=isNaN(r)?0:o-r,m=isNaN(e)?0:s-e),a.type&(f.CURVE_TO|f.SMOOTH_CURVE_TO)?(r=a.relative?o+a.x2:a.x2,e=a.relative?s+a.y2:a.y2):(r=NaN,e=NaN),a.type&f.SMOOTH_QUAD_TO?(i=isNaN(i)?o:2*o-i,n=isNaN(n)?s:2*s-n):a.type&f.QUAD_TO?(i=a.relative?o+a.x1:a.x1,n=a.relative?s+a.y1:a.y2):(i=NaN,n=NaN),a.type&f.LINE_COMMANDS||a.type&f.ARC&&(0===a.rX||0===a.rY||!a.lArcFlag)||a.type&f.CURVE_TO||a.type&f.SMOOTH_CURVE_TO||a.type&f.QUAD_TO||a.type&f.SMOOTH_QUAD_TO){var O=void 0===a.x?0:a.relative?a.x:a.x-o,T=void 0===a.y?0:a.relative?a.y:a.y-s;p=isNaN(i)?void 0===a.x1?p:a.relative?a.x:a.x1-o:i-o,m=isNaN(n)?void 0===a.y1?m:a.relative?a.y:a.y1-s:n-s;var v=void 0===a.x2?0:a.relative?a.x:a.x2-o,l=void 0===a.y2?0:a.relative?a.y:a.y2-s;c(O)<=t&&c(T)<=t&&c(p)<=t&&c(m)<=t&&c(v)<=t&&c(l)<=t&&(y=!0)}return a.type&f.CLOSE_PATH&&c(o-u)<=t&&c(s-h)<=t&&(y=!0),y?[]:a}))},t.MATRIX=O,t.ROTATE=function(t,r,e){void 0===r&&(r=0),void 0===e&&(e=0),a(t,r,e);var i=Math.sin(t),n=Math.cos(t);return O(n,i,-i,n,r-r*n+e*i,e-r*i-e*n)},t.TRANSLATE=function(t,r){return void 0===r&&(r=0),a(t,r),O(1,0,0,1,t,r)},t.SCALE=function(t,r){return void 0===r&&(r=t),a(t,r),O(t,0,0,r,0,0)},t.SKEW_X=function(t){return a(t),O(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return a(t),O(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),a(t),O(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),a(t),O(1,0,0,-1,0,t)},t.A_TO_C=function(){return u((function(t,r,e){return f.ARC===t.type?function(t,r,e){var a,n,s,u;t.cX||o(t,r,e);for(var y=Math.min(t.phi1,t.phi2),p=Math.max(t.phi1,t.phi2)-y,m=Math.ceil(p/90),O=new Array(m),T=r,v=e,l=0;l<m;l++){var _=c(t.phi1,t.phi2,l/m),N=c(t.phi1,t.phi2,(l+1)/m),x=N-_,d=4/3*Math.tan(x*h/4),A=[Math.cos(_*h)-d*Math.sin(_*h),Math.sin(_*h)+d*Math.cos(_*h)],E=A[0],C=A[1],M=[Math.cos(N*h),Math.sin(N*h)],R=M[0],g=M[1],I=[R+d*Math.sin(N*h),g-d*Math.cos(N*h)],S=I[0],L=I[1];O[l]={relative:t.relative,type:f.CURVE_TO};var H=function(r,e){var a=i([r*t.rX,e*t.rY],t.xRot),n=a[0],o=a[1];return[t.cX+n,t.cY+o]};a=H(E,C),O[l].x1=a[0],O[l].y1=a[1],n=H(S,L),O[l].x2=n[0],O[l].y2=n[1],s=H(R,g),O[l].x=s[0],O[l].y=s[1],t.relative&&(O[l].x1-=T,O[l].y1-=v,O[l].x2-=T,O[l].y2-=v,O[l].x-=T,O[l].y-=v),T=(u=[O[l].x,O[l].y])[0],v=u[1]}return O}(t,t.relative?0:r,t.relative?0:e):t}))},t.ANNOTATE_ARCS=function(){return u((function(t,r,e){return t.relative&&(r=0,e=0),f.ARC===t.type&&o(t,r,e),t}))},t.CLONE=T,t.CALCULATE_BOUNDS=function(){var t=function(t){var r={};for(var e in t)r[e]=t[e];return r},i=r(),a=n(),h=e(),c=u((function(r,e,n){var u=h(a(i(t(r))));function O(t){t>c.maxX&&(c.maxX=t),t<c.minX&&(c.minX=t)}function T(t){t>c.maxY&&(c.maxY=t),t<c.minY&&(c.minY=t)}if(u.type&f.DRAWING_COMMANDS&&(O(e),T(n)),u.type&f.HORIZ_LINE_TO&&O(u.x),u.type&f.VERT_LINE_TO&&T(u.y),u.type&f.LINE_TO&&(O(u.x),T(u.y)),u.type&f.CURVE_TO){O(u.x),T(u.y);for(var v=0,l=p(e,u.x1,u.x2,u.x);v<l.length;v++){0<(w=l[v])&&1>w&&O(m(e,u.x1,u.x2,u.x,w))}for(var _=0,N=p(n,u.y1,u.y2,u.y);_<N.length;_++){0<(w=N[_])&&1>w&&T(m(n,u.y1,u.y2,u.y,w))}}if(u.type&f.ARC){O(u.x),T(u.y),o(u,e,n);for(var x=u.xRot/180*Math.PI,d=Math.cos(x)*u.rX,A=Math.sin(x)*u.rX,E=-Math.sin(x)*u.rY,C=Math.cos(x)*u.rY,M=u.phi1<u.phi2?[u.phi1,u.phi2]:-180>u.phi2?[u.phi2+360,u.phi1+360]:[u.phi2,u.phi1],R=M[0],g=M[1],I=function(t){var r=t[0],e=t[1],i=180*Math.atan2(e,r)/Math.PI;return i<R?i+360:i},S=0,L=s(E,-d,0).map(I);S<L.length;S++){(w=L[S])>R&&w<g&&O(y(u.cX,d,E,w))}for(var H=0,U=s(C,-A,0).map(I);H<U.length;H++){var w;(w=U[H])>R&&w<g&&T(y(u.cY,A,C,w))}}return r}));return c.minX=1/0,c.maxX=-1/0,c.minY=1/0,c.maxY=-1/0,c}}(u||(u={}));var O,T=function(){function t(){}return t.prototype.round=function(t){return this.transform(u.ROUND(t))},t.prototype.toAbs=function(){return this.transform(u.TO_ABS())},t.prototype.toRel=function(){return this.transform(u.TO_REL())},t.prototype.normalizeHVZ=function(t,r,e){return this.transform(u.NORMALIZE_HVZ(t,r,e))},t.prototype.normalizeST=function(){return this.transform(u.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(u.QT_TO_C())},t.prototype.aToC=function(){return this.transform(u.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(u.SANITIZE(t))},t.prototype.translate=function(t,r){return this.transform(u.TRANSLATE(t,r))},t.prototype.scale=function(t,r){return this.transform(u.SCALE(t,r))},t.prototype.rotate=function(t,r,e){return this.transform(u.ROTATE(t,r,e))},t.prototype.matrix=function(t,r,e,i,a,n){return this.transform(u.MATRIX(t,r,e,i,a,n))},t.prototype.skewX=function(t){return this.transform(u.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(u.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(u.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(u.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(u.ANNOTATE_ARCS())},t}(),v=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},l=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},_=function(t){function e(){var r=t.call(this)||this;return r.curNumber="",r.curCommandType=-1,r.curCommandRelative=!1,r.canParseCommandOrComma=!0,r.curNumberHasExp=!1,r.curNumberHasExpDigits=!1,r.curNumberHasDecimal=!1,r.curArgs=[],r}return r(e,t),e.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},e.prototype.parse=function(t,r){var e=this;void 0===r&&(r=[]);for(var i=function(t){r.push(t),e.curArgs.length=0,e.canParseCommandOrComma=!0},a=0;a<t.length;a++){var n=t[a],o=!(this.curCommandType!==f.ARC||3!==this.curArgs.length&&4!==this.curArgs.length||1!==this.curNumber.length||"0"!==this.curNumber&&"1"!==this.curNumber),s=l(n)&&("0"===this.curNumber&&"0"===n||o);if(!l(n)||s)if("e"!==n&&"E"!==n)if("-"!==n&&"+"!==n||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==n||this.curNumberHasExp||this.curNumberHasDecimal||o){if(this.curNumber&&-1!==this.curCommandType){var u=Number(this.curNumber);if(isNaN(u))throw new SyntaxError("Invalid number ending at "+a);if(this.curCommandType===f.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>u)throw new SyntaxError('Expected positive number, got "'+u+'" at index "'+a+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+a+'"');this.curArgs.push(u),this.curArgs.length===N[this.curCommandType]&&(f.HORIZ_LINE_TO===this.curCommandType?i({type:f.HORIZ_LINE_TO,relative:this.curCommandRelative,x:u}):f.VERT_LINE_TO===this.curCommandType?i({type:f.VERT_LINE_TO,relative:this.curCommandRelative,y:u}):this.curCommandType===f.MOVE_TO||this.curCommandType===f.LINE_TO||this.curCommandType===f.SMOOTH_QUAD_TO?(i({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),f.MOVE_TO===this.curCommandType&&(this.curCommandType=f.LINE_TO)):this.curCommandType===f.CURVE_TO?i({type:f.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===f.SMOOTH_CURVE_TO?i({type:f.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===f.QUAD_TO?i({type:f.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===f.ARC&&i({type:f.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!v(n))if(","===n&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==n&&"-"!==n&&"."!==n)if(s)this.curNumber=n,this.curNumberHasDecimal=!1;else{if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+a+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==n&&"Z"!==n)if("h"===n||"H"===n)this.curCommandType=f.HORIZ_LINE_TO,this.curCommandRelative="h"===n;else if("v"===n||"V"===n)this.curCommandType=f.VERT_LINE_TO,this.curCommandRelative="v"===n;else if("m"===n||"M"===n)this.curCommandType=f.MOVE_TO,this.curCommandRelative="m"===n;else if("l"===n||"L"===n)this.curCommandType=f.LINE_TO,this.curCommandRelative="l"===n;else if("c"===n||"C"===n)this.curCommandType=f.CURVE_TO,this.curCommandRelative="c"===n;else if("s"===n||"S"===n)this.curCommandType=f.SMOOTH_CURVE_TO,this.curCommandRelative="s"===n;else if("q"===n||"Q"===n)this.curCommandType=f.QUAD_TO,this.curCommandRelative="q"===n;else if("t"===n||"T"===n)this.curCommandType=f.SMOOTH_QUAD_TO,this.curCommandRelative="t"===n;else{if("a"!==n&&"A"!==n)throw new SyntaxError('Unexpected character "'+n+'" at index '+a+".");this.curCommandType=f.ARC,this.curCommandRelative="a"===n}else r.push({type:f.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=n,this.curNumberHasDecimal="."===n}else this.curNumber+=n,this.curNumberHasDecimal=!0;else this.curNumber+=n;else this.curNumber+=n,this.curNumberHasExp=!0;else this.curNumber+=n,this.curNumberHasExpDigits=this.curNumberHasExp}return r},e.prototype.transform=function(t){return Object.create(this,{parse:{value:function(r,e){void 0===e&&(e=[]);for(var i=0,a=Object.getPrototypeOf(this).parse.call(this,r);i<a.length;i++){var n=a[i],o=t(n);Array.isArray(o)?e.push.apply(e,o):e.push(o)}return e}}})},e}(T),f=function(t){function i(r){var e=t.call(this)||this;return e.commands="string"==typeof r?i.parse(r):r,e}return r(i,t),i.prototype.encode=function(){return i.encode(this.commands)},i.prototype.getBounds=function(){var t=u.CALCULATE_BOUNDS();return this.transform(t),t},i.prototype.transform=function(t){for(var r=[],e=0,i=this.commands;e<i.length;e++){var a=t(i[e]);Array.isArray(a)?r.push.apply(r,a):r.push(a)}return this.commands=r,this},i.encode=function(t){return e(t)},i.parse=function(t){var r=new _,e=[];return r.parse(t,e),r.finish(e),e},i.CLOSE_PATH=1,i.MOVE_TO=2,i.HORIZ_LINE_TO=4,i.VERT_LINE_TO=8,i.LINE_TO=16,i.CURVE_TO=32,i.SMOOTH_CURVE_TO=64,i.QUAD_TO=128,i.SMOOTH_QUAD_TO=256,i.ARC=512,i.LINE_COMMANDS=i.LINE_TO|i.HORIZ_LINE_TO|i.VERT_LINE_TO,i.DRAWING_COMMANDS=i.HORIZ_LINE_TO|i.VERT_LINE_TO|i.LINE_TO|i.CURVE_TO|i.SMOOTH_CURVE_TO|i.QUAD_TO|i.SMOOTH_QUAD_TO|i.ARC,i}(T),N=((O={})[f.MOVE_TO]=2,O[f.LINE_TO]=2,O[f.HORIZ_LINE_TO]=1,O[f.VERT_LINE_TO]=1,O[f.CLOSE_PATH]=0,O[f.QUAD_TO]=4,O[f.SMOOTH_QUAD_TO]=2,O[f.CURVE_TO]=6,O[f.SMOOTH_CURVE_TO]=4,O[f.ARC]=7,O);
//# sourceMappingURL=SVGPathData.module.js.map


/***/ }),

/***/ "./node_modules/svg-points/modules/index.js":
/*!**************************************************!*\
  !*** ./node_modules/svg-points/modules/index.js ***!
  \**************************************************/
/*! exports provided: toPath, toPoints, valid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPath */ "./node_modules/svg-points/modules/toPath.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _toPath__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _toPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPoints */ "./node_modules/svg-points/modules/toPoints.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPoints", function() { return _toPoints__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid */ "./node_modules/svg-points/modules/valid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valid", function() { return _valid__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./node_modules/svg-points/modules/toPath.js":
/*!***************************************************!*\
  !*** ./node_modules/svg-points/modules/toPath.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toPoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPoints */ "./node_modules/svg-points/modules/toPoints.js");


var pointsToD = function pointsToD(p) {
  var d = '';
  var i = 0;
  var firstPoint = void 0;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var point = _step.value;
      var _point$curve = point.curve,
          curve = _point$curve === undefined ? false : _point$curve,
          moveTo = point.moveTo,
          x = point.x,
          y = point.y;

      var isFirstPoint = i === 0 || moveTo;
      var isLastPoint = i === p.length - 1 || p[i + 1].moveTo;
      var prevPoint = i === 0 ? null : p[i - 1];

      if (isFirstPoint) {
        firstPoint = point;

        if (!isLastPoint) {
          d += 'M' + x + ',' + y;
        }
      } else if (curve) {
        switch (curve.type) {
          case 'arc':
            var _point$curve2 = point.curve,
                _point$curve2$largeAr = _point$curve2.largeArcFlag,
                largeArcFlag = _point$curve2$largeAr === undefined ? 0 : _point$curve2$largeAr,
                rx = _point$curve2.rx,
                ry = _point$curve2.ry,
                _point$curve2$sweepFl = _point$curve2.sweepFlag,
                sweepFlag = _point$curve2$sweepFl === undefined ? 0 : _point$curve2$sweepFl,
                _point$curve2$xAxisRo = _point$curve2.xAxisRotation,
                xAxisRotation = _point$curve2$xAxisRo === undefined ? 0 : _point$curve2$xAxisRo;

            d += 'A' + rx + ',' + ry + ',' + xAxisRotation + ',' + largeArcFlag + ',' + sweepFlag + ',' + x + ',' + y;
            break;
          case 'cubic':
            var _point$curve3 = point.curve,
                cx1 = _point$curve3.x1,
                cy1 = _point$curve3.y1,
                cx2 = _point$curve3.x2,
                cy2 = _point$curve3.y2;

            d += 'C' + cx1 + ',' + cy1 + ',' + cx2 + ',' + cy2 + ',' + x + ',' + y;
            break;
          case 'quadratic':
            var _point$curve4 = point.curve,
                qx1 = _point$curve4.x1,
                qy1 = _point$curve4.y1;

            d += 'Q' + qx1 + ',' + qy1 + ',' + x + ',' + y;
            break;
        }

        if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
          d += 'Z';
        }
      } else if (isLastPoint && x === firstPoint.x && y === firstPoint.y) {
        d += 'Z';
      } else if (x !== prevPoint.x && y !== prevPoint.y) {
        d += 'L' + x + ',' + y;
      } else if (x !== prevPoint.x) {
        d += 'H' + x;
      } else if (y !== prevPoint.y) {
        d += 'V' + y;
      }

      i++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return d;
};

var toPath = function toPath(s) {
  var isPoints = Array.isArray(s);
  var isGroup = isPoints ? Array.isArray(s[0]) : s.type === 'g';
  var points = isPoints ? s : isGroup ? s.shapes.map(function (shp) {
    return Object(_toPoints__WEBPACK_IMPORTED_MODULE_0__["default"])(shp);
  }) : Object(_toPoints__WEBPACK_IMPORTED_MODULE_0__["default"])(s);

  if (isGroup) {
    return points.map(function (p) {
      return pointsToD(p);
    });
  }

  return pointsToD(points);
};

/* harmony default export */ __webpack_exports__["default"] = (toPath);

/***/ }),

/***/ "./node_modules/svg-points/modules/toPoints.js":
/*!*****************************************************!*\
  !*** ./node_modules/svg-points/modules/toPoints.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var toPoints = function toPoints(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ['type']);

  switch (type) {
    case 'circle':
      return getPointsFromCircle(props);
    case 'ellipse':
      return getPointsFromEllipse(props);
    case 'line':
      return getPointsFromLine(props);
    case 'path':
      return getPointsFromPath(props);
    case 'polygon':
      return getPointsFromPolygon(props);
    case 'polyline':
      return getPointsFromPolyline(props);
    case 'rect':
      return getPointsFromRect(props);
    case 'g':
      return getPointsFromG(props);
    default:
      throw new Error('Not a valid shape type');
  }
};

var getPointsFromCircle = function getPointsFromCircle(_ref2) {
  var cx = _ref2.cx,
      cy = _ref2.cy,
      r = _ref2.r;

  return [{ x: cx, y: cy - r, moveTo: true }, { x: cx, y: cy + r, curve: { type: 'arc', rx: r, ry: r, sweepFlag: 1 } }, { x: cx, y: cy - r, curve: { type: 'arc', rx: r, ry: r, sweepFlag: 1 } }];
};

var getPointsFromEllipse = function getPointsFromEllipse(_ref3) {
  var cx = _ref3.cx,
      cy = _ref3.cy,
      rx = _ref3.rx,
      ry = _ref3.ry;

  return [{ x: cx, y: cy - ry, moveTo: true }, { x: cx, y: cy + ry, curve: { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 } }, { x: cx, y: cy - ry, curve: { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 } }];
};

var getPointsFromLine = function getPointsFromLine(_ref4) {
  var x1 = _ref4.x1,
      x2 = _ref4.x2,
      y1 = _ref4.y1,
      y2 = _ref4.y2;

  return [{ x: x1, y: y1, moveTo: true }, { x: x2, y: y2 }];
};

var validCommands = /[MmLlHhVvCcSsQqTtAaZz]/g;

var commandLengths = {
  A: 7,
  C: 6,
  H: 1,
  L: 2,
  M: 2,
  Q: 4,
  S: 4,
  T: 2,
  V: 1,
  Z: 0
};

var relativeCommands = ['a', 'c', 'h', 'l', 'm', 'q', 's', 't', 'v'];

var isRelative = function isRelative(command) {
  return relativeCommands.indexOf(command) !== -1;
};

var optionalArcKeys = ['xAxisRotation', 'largeArcFlag', 'sweepFlag'];

var getCommands = function getCommands(d) {
  return d.match(validCommands);
};

var getParams = function getParams(d) {
  return d.split(validCommands).map(function (v) {
    return v.replace(/[0-9]+-/g, function (m) {
      return m.slice(0, -1) + ' -';
    });
  }).map(function (v) {
    return v.replace(/\.[0-9]+/g, function (m) {
      return m + ' ';
    });
  }).map(function (v) {
    return v.trim();
  }).filter(function (v) {
    return v.length > 0;
  }).map(function (v) {
    return v.split(/[ ,]+/).map(parseFloat).filter(function (n) {
      return !isNaN(n);
    });
  });
};

var getPointsFromPath = function getPointsFromPath(_ref5) {
  var d = _ref5.d;

  var commands = getCommands(d);
  var params = getParams(d);

  var points = [];

  var moveTo = void 0;

  for (var i = 0, l = commands.length; i < l; i++) {
    var command = commands[i];
    var upperCaseCommand = command.toUpperCase();
    var commandLength = commandLengths[upperCaseCommand];
    var relative = isRelative(command);

    if (commandLength > 0) {
      var commandParams = params.shift();
      var iterations = commandParams.length / commandLength;

      for (var j = 0; j < iterations; j++) {
        var prevPoint = points[points.length - 1] || { x: 0, y: 0 };

        switch (upperCaseCommand) {
          case 'M':
            var x = (relative ? prevPoint.x : 0) + commandParams.shift();
            var y = (relative ? prevPoint.y : 0) + commandParams.shift();

            if (j === 0) {
              moveTo = { x: x, y: y };
              points.push({ x: x, y: y, moveTo: true });
            } else {
              points.push({ x: x, y: y });
            }

            break;

          case 'L':
            points.push({
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'H':
            points.push({
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: prevPoint.y
            });

            break;

          case 'V':
            points.push({
              x: prevPoint.x,
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'A':
            points.push({
              curve: {
                type: 'arc',
                rx: commandParams.shift(),
                ry: commandParams.shift(),
                xAxisRotation: commandParams.shift(),
                largeArcFlag: commandParams.shift(),
                sweepFlag: commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = optionalArcKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var k = _step.value;

                if (points[points.length - 1]['curve'][k] === 0) {
                  delete points[points.length - 1]['curve'][k];
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            break;

          case 'C':
            points.push({
              curve: {
                type: 'cubic',
                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y1: (relative ? prevPoint.y : 0) + commandParams.shift(),
                x2: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y2: (relative ? prevPoint.y : 0) + commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'S':
            var sx2 = (relative ? prevPoint.x : 0) + commandParams.shift();
            var sy2 = (relative ? prevPoint.y : 0) + commandParams.shift();
            var sx = (relative ? prevPoint.x : 0) + commandParams.shift();
            var sy = (relative ? prevPoint.y : 0) + commandParams.shift();

            var diff = {};

            var sx1 = void 0;
            var sy1 = void 0;

            if (prevPoint.curve && prevPoint.curve.type === 'cubic') {
              diff.x = Math.abs(prevPoint.x - prevPoint.curve.x2);
              diff.y = Math.abs(prevPoint.y - prevPoint.curve.y2);
              sx1 = prevPoint.x < prevPoint.curve.x2 ? prevPoint.x - diff.x : prevPoint.x + diff.x;
              sy1 = prevPoint.y < prevPoint.curve.y2 ? prevPoint.y - diff.y : prevPoint.y + diff.y;
            } else {
              diff.x = Math.abs(sx - sx2);
              diff.y = Math.abs(sy - sy2);
              sx1 = prevPoint.x;
              sy1 = prevPoint.y;
            }

            points.push({ curve: { type: 'cubic', x1: sx1, y1: sy1, x2: sx2, y2: sy2 }, x: sx, y: sy });

            break;

          case 'Q':
            points.push({
              curve: {
                type: 'quadratic',
                x1: (relative ? prevPoint.x : 0) + commandParams.shift(),
                y1: (relative ? prevPoint.y : 0) + commandParams.shift()
              },
              x: (relative ? prevPoint.x : 0) + commandParams.shift(),
              y: (relative ? prevPoint.y : 0) + commandParams.shift()
            });

            break;

          case 'T':
            var tx = (relative ? prevPoint.x : 0) + commandParams.shift();
            var ty = (relative ? prevPoint.y : 0) + commandParams.shift();

            var tx1 = void 0;
            var ty1 = void 0;

            if (prevPoint.curve && prevPoint.curve.type === 'quadratic') {
              var _diff = {
                x: Math.abs(prevPoint.x - prevPoint.curve.x1),
                y: Math.abs(prevPoint.y - prevPoint.curve.y1)
              };

              tx1 = prevPoint.x < prevPoint.curve.x1 ? prevPoint.x - _diff.x : prevPoint.x + _diff.x;
              ty1 = prevPoint.y < prevPoint.curve.y1 ? prevPoint.y - _diff.y : prevPoint.y + _diff.y;
            } else {
              tx1 = prevPoint.x;
              ty1 = prevPoint.y;
            }

            points.push({ curve: { type: 'quadratic', x1: tx1, y1: ty1 }, x: tx, y: ty });

            break;
        }
      }
    } else {
      var _prevPoint = points[points.length - 1] || { x: 0, y: 0 };

      if (_prevPoint.x !== moveTo.x || _prevPoint.y !== moveTo.y) {
        points.push({ x: moveTo.x, y: moveTo.y });
      }
    }
  }

  return points;
};

var getPointsFromPolygon = function getPointsFromPolygon(_ref6) {
  var points = _ref6.points;

  return getPointsFromPoints({ closed: true, points: points });
};

var getPointsFromPolyline = function getPointsFromPolyline(_ref7) {
  var points = _ref7.points;

  return getPointsFromPoints({ closed: false, points: points });
};

var getPointsFromPoints = function getPointsFromPoints(_ref8) {
  var closed = _ref8.closed,
      points = _ref8.points;

  var numbers = points.split(/[\s,]+/).map(function (n) {
    return parseFloat(n);
  });

  var p = numbers.reduce(function (arr, point, i) {
    if (i % 2 === 0) {
      arr.push({ x: point });
    } else {
      arr[(i - 1) / 2].y = point;
    }

    return arr;
  }, []);

  if (closed) {
    p.push(_extends({}, p[0]));
  }

  p[0].moveTo = true;

  return p;
};

var getPointsFromRect = function getPointsFromRect(_ref9) {
  var height = _ref9.height,
      rx = _ref9.rx,
      ry = _ref9.ry,
      width = _ref9.width,
      x = _ref9.x,
      y = _ref9.y;

  if (rx || ry) {
    return getPointsFromRectWithCornerRadius({
      height: height,
      rx: rx || ry,
      ry: ry || rx,
      width: width,
      x: x,
      y: y
    });
  }

  return getPointsFromBasicRect({ height: height, width: width, x: x, y: y });
};

var getPointsFromBasicRect = function getPointsFromBasicRect(_ref10) {
  var height = _ref10.height,
      width = _ref10.width,
      x = _ref10.x,
      y = _ref10.y;

  return [{ x: x, y: y, moveTo: true }, { x: x + width, y: y }, { x: x + width, y: y + height }, { x: x, y: y + height }, { x: x, y: y }];
};

var getPointsFromRectWithCornerRadius = function getPointsFromRectWithCornerRadius(_ref11) {
  var height = _ref11.height,
      rx = _ref11.rx,
      ry = _ref11.ry,
      width = _ref11.width,
      x = _ref11.x,
      y = _ref11.y;

  var curve = { type: 'arc', rx: rx, ry: ry, sweepFlag: 1 };

  return [{ x: x + rx, y: y, moveTo: true }, { x: x + width - rx, y: y }, { x: x + width, y: y + ry, curve: curve }, { x: x + width, y: y + height - ry }, { x: x + width - rx, y: y + height, curve: curve }, { x: x + rx, y: y + height }, { x: x, y: y + height - ry, curve: curve }, { x: x, y: y + ry }, { x: x + rx, y: y, curve: curve }];
};

var getPointsFromG = function getPointsFromG(_ref12) {
  var shapes = _ref12.shapes;
  return shapes.map(function (s) {
    return toPoints(s);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toPoints);

/***/ }),

/***/ "./node_modules/svg-points/modules/valid.js":
/*!**************************************************!*\
  !*** ./node_modules/svg-points/modules/valid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getErrors = function getErrors(shape) {
  var rules = getRules(shape);
  var errors = [];

  rules.map(function (_ref) {
    var match = _ref.match,
        prop = _ref.prop,
        required = _ref.required,
        type = _ref.type;

    if (typeof shape[prop] === 'undefined') {
      if (required) {
        errors.push(prop + ' prop is required' + (prop === 'type' ? '' : ' on a ' + shape.type));
      }
    } else {
      if (typeof type !== 'undefined') {
        if (type === 'array') {
          if (!Array.isArray(shape[prop])) {
            errors.push(prop + ' prop must be of type array');
          }
        } else if (_typeof(shape[prop]) !== type) {
          // eslint-disable-line valid-typeof
          errors.push(prop + ' prop must be of type ' + type);
        }
      }

      if (Array.isArray(match)) {
        if (match.indexOf(shape[prop]) === -1) {
          errors.push(prop + ' prop must be one of ' + match.join(', '));
        }
      }
    }
  });

  if (shape.type === 'g' && Array.isArray(shape.shapes)) {
    var childErrors = shape.shapes.map(function (s) {
      return getErrors(s);
    });
    return [].concat.apply(errors, childErrors);
  }

  return errors;
};

var getRules = function getRules(shape) {
  var rules = [{
    match: ['circle', 'ellipse', 'line', 'path', 'polygon', 'polyline', 'rect', 'g'],
    prop: 'type',
    required: true,
    type: 'string'
  }];

  switch (shape.type) {
    case 'circle':
      rules.push({ prop: 'cx', required: true, type: 'number' });
      rules.push({ prop: 'cy', required: true, type: 'number' });
      rules.push({ prop: 'r', required: true, type: 'number' });
      break;

    case 'ellipse':
      rules.push({ prop: 'cx', required: true, type: 'number' });
      rules.push({ prop: 'cy', required: true, type: 'number' });
      rules.push({ prop: 'rx', required: true, type: 'number' });
      rules.push({ prop: 'ry', required: true, type: 'number' });
      break;

    case 'line':
      rules.push({ prop: 'x1', required: true, type: 'number' });
      rules.push({ prop: 'x2', required: true, type: 'number' });
      rules.push({ prop: 'y1', required: true, type: 'number' });
      rules.push({ prop: 'y2', required: true, type: 'number' });
      break;

    case 'path':
      rules.push({ prop: 'd', required: true, type: 'string' });
      break;

    case 'polygon':
    case 'polyline':
      rules.push({ prop: 'points', required: true, type: 'string' });
      break;

    case 'rect':
      rules.push({ prop: 'height', required: true, type: 'number' });
      rules.push({ prop: 'rx', type: 'number' });
      rules.push({ prop: 'ry', type: 'number' });
      rules.push({ prop: 'width', required: true, type: 'number' });
      rules.push({ prop: 'x', required: true, type: 'number' });
      rules.push({ prop: 'y', required: true, type: 'number' });
      break;

    case 'g':
      rules.push({ prop: 'shapes', required: true, type: 'array' });
      break;
  }

  return rules;
};

var valid = function valid(shape) {
  var errors = getErrors(shape);

  return {
    errors: errors,
    valid: errors.length === 0
  };
};

/* harmony default export */ __webpack_exports__["default"] = (valid);

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


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdHRyYWN0b3JQYXR0ZXJucy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9TVkdMb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZXhwZXJpbWVudHMvb2JzdGFjbGVzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL29ic3RhY2xlcy9zdmcvbGVhZi5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wb2ludC1pbi1wb2x5Z29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGV4LW5vaXNlL3NpbXBsZXgtbm9pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YS9saWIvU1ZHUGF0aERhdGEubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy90b1BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3ZhbGlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbkI7QUFDZiwwQ0FBMEM7QUFDMUMsNkJB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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixpQ0FBSTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFJLENB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUCwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUNBQXFDLFVBQVUsRUFBRTs7QUFFakQ7QUFDQSxRQUFRLEtBQTZCO0FBQ3JDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeGREOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJvYnN0YWNsZXMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leHBlcmltZW50cy9vYnN0YWNsZXMvanMvZW50cnkuanNcIik7XG4iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjdHgsIHNldHRpbmdzID0ge30pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAgIC8vIHZlYzIgb2YgdGhpcyBhdHRyYWN0b3IncyBwb3NpdGlvblxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jaW5nTm9kZXMgPSBbXTsgICAvLyByZWZlcmVuY2VzIHRvIG5vZGVzIHRoaXMgYXR0cmFjdG9yIGlzIGluZmx1ZW5jaW5nIGVhY2ggZnJhbWVcclxuICAgIHRoaXMuZnJlc2ggPSB0cnVlOyAgICAgICAgICAgIC8vIGZsYWcgdXNlZCB0byBwcmV2ZW50IGF0dHJhY3RvcnMgZnJvbSBiZWluZyByZW1vdmVkIGR1cmluZyBmaXJzdCBmcmFtZSBvZiBDbG9zZWQgdmVuYXRpb24gbW9kZVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdGlvblpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGtpbGwgem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuS2lsbFpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3RvclxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdG9ycykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMSwgMSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5BdHRyYWN0b3JDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCBBdHRyYWN0b3IgZnJvbSAnLi9BdHRyYWN0b3InO1xuaW1wb3J0IFZlYzIgZnJvbSAndmVjMic7XG5pbXBvcnQgeyByYW5kb20sIG1hcCB9IGZyb20gJy4vVXRpbGl0aWVzJztcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKCdzaW1wbGV4LW5vaXNlJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BdHRyYWN0b3JzKG51bUF0dHJhY3RvcnMsIGN0eCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcbiAgbGV0IGF0dHJhY3RvcnMgPSBbXTtcbiAgbGV0IHgsIHk7XG4gIGxldCBpc0luc2lkZUFueUJvdW5kcywgaXNJbnNpZGVBbnlPYnN0YWNsZSwgaXNPblNjcmVlbjtcblxuICBmb3IobGV0IGk9MDsgaTxudW1BdHRyYWN0b3JzOyBpKyspIHtcbiAgICB4ID0gcmFuZG9tKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB5ID0gcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcbiAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XG4gICAgaXNPblNjcmVlbiA9IGZhbHNlO1xuXG4gICAgLy8gT25seSBhbGxvdyBhdHRyYWN0b3JzIHRoYXQgYXJlIGluIHRoZSB2aWV3cG9ydFxuICAgIGlmKFxuICAgICAgeCA+IDAgJiZcbiAgICAgIHggPCB3aW5kb3cuaW5uZXJXaWR0aCAmJlxuICAgICAgeSA+IDAgJiZcbiAgICAgIHkgPCB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICApIHtcbiAgICAgIGlzT25TY3JlZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCBub2RlcyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcbiAgICBpZihib3VuZHMgIT0gdW5kZWZpbmVkICYmIGJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGJvdW5kIG9mIGJvdW5kcykge1xuICAgICAgICBpZihib3VuZC5jb250YWlucyh4LCB5KSkge1xuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERvbid0IGFsbG93IGFueSByb290IG5vZGVzIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxuICAgIGlmKG9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgb2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2Ygb2JzdGFjbGVzKSB7XG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKHgsIHkpKSB7XG4gICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihcbiAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCBib3VuZHMgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCBvYnN0YWNsZXMgPT09IHVuZGVmaW5lZClcbiAgICApIHtcbiAgICAgIGF0dHJhY3RvcnMucHVzaChcbiAgICAgICAgbmV3IEF0dHJhY3RvcihcbiAgICAgICAgICBuZXcgVmVjMih4LHkpLFxuICAgICAgICAgIGN0eFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhdHRyYWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0R3JpZE9mQXR0cmFjdG9ycyhudW1Sb3dzLCBudW1Db2x1bW5zLCBjdHgsIGppdHRlclJhbmdlID0gMCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcbiAgbGV0IGF0dHJhY3RvcnMgPSBbXTtcbiAgbGV0IHgsIHk7XG4gIGxldCBpc0luc2lkZUFueUJvdW5kcywgaXNJbnNpZGVBbnlPYnN0YWNsZSwgaXNPblNjcmVlbjtcblxuICBmb3IobGV0IGk9MDsgaTw9bnVtUm93czsgaSsrKSB7XG4gICAgZm9yKGxldCBqPTA7IGo8PW51bUNvbHVtbnM7IGorKykge1xuICAgICAgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnMpICogaiArIHJhbmRvbSgtaml0dGVyUmFuZ2UsIGppdHRlclJhbmdlKTtcbiAgICAgIHkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cykgKiBpICsgcmFuZG9tKC1qaXR0ZXJSYW5nZSwgaml0dGVyUmFuZ2UpO1xuICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcbiAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcbiAgICAgIGlzT25TY3JlZW4gPSBmYWxzZTtcblxuICAgICAgLy8gT25seSBhbGxvdyBhdHRyYWN0b3JzIHRoYXQgYXJlIGluIHRoZSB2aWV3cG9ydFxuICAgICAgaWYoXG4gICAgICAgIHggPiAwICYmXG4gICAgICAgIHggPCB3aW5kb3cuaW5uZXJXaWR0aCAmJlxuICAgICAgICB5ID4gMCAmJlxuICAgICAgICB5IDwgd2luZG93LmlubmVySGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgaXNPblNjcmVlbiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIE9ubHkgYWxsb3cgYXR0cmFjdG9ycyBpbnNpZGUgb2YgYW55IG9mIHRoZSBkZWZpbmVkIGJvdW5kcyAoaWYgdXNlZClcbiAgICAgIGlmKGJvdW5kcyAhPSB1bmRlZmluZWQgJiYgYm91bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yKGxldCBib3VuZCBvZiBib3VuZHMpIHtcbiAgICAgICAgICBpZihib3VuZC5jb250YWlucyh4LCB5KSkge1xuICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCBub2RlcyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGUgKGlmIHVzZWQpXG4gICAgICBpZihvYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIG9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2Ygb2JzdGFjbGVzKSB7XG4gICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMoeCwgeSkpIHtcbiAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihcbiAgICAgICAgaXNPblNjcmVlbiAmJlxuICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgYm91bmRzID09PSB1bmRlZmluZWQpICYmXG4gICAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCBvYnN0YWNsZXMgPT09IHVuZGVmaW5lZClcbiAgICAgICkge1xuICAgICAgICBhdHRyYWN0b3JzLnB1c2goXG4gICAgICAgICAgbmV3IEF0dHJhY3RvcihcbiAgICAgICAgICAgIG5ldyBWZWMyKHgseSksXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJhY3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQaHlsbG90YXhpc0F0dHJhY3RvcnMoY3R4KSB7XG4gIGxldCBhdHRyYWN0b3JzID0gW107XG4gIGxldCBudW1DaXJjbGVzID0gNTAwMCxcbiAgZ29sZGVuX3JhdGlvID0gKE1hdGguc3FydCg1KSsxKS8yIC0gMSxcbiAgZ29sZGVuX2FuZ2xlID0gZ29sZGVuX3JhdGlvICogKDIqTWF0aC5QSSksXG4gIGNpcmNsZV9yYWQgPSB3aW5kb3cuaW5uZXJXaWR0aC8yO1xuXG5cbiAgZm9yKGxldCBpPTA7IGk8bnVtQ2lyY2xlczsgaSsrKSB7XG4gICAgbGV0IHJhdGlvID0gaSAvIG51bUNpcmNsZXMsXG4gICAgICBhbmdsZSA9IGkgKiBnb2xkZW5fYW5nbGUsXG4gICAgICBzcGlyYWxfcmFkID0gcmF0aW8gKiBjaXJjbGVfcmFkO1xuXG4gICAgYXR0cmFjdG9ycy5wdXNoKFxuICAgICAgbmV3IEF0dHJhY3RvcihcbiAgICAgICAgbmV3IFZlYzIoXG4gICAgICAgICAgd2luZG93LmlubmVyV2lkdGgvMiArIE1hdGguY29zKGFuZ2xlKSAqIHNwaXJhbF9yYWQsXG4gICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0LzIgKyBNYXRoLnNpbihhbmdsZSkgKiBzcGlyYWxfcmFkXG4gICAgICAgICksXG4gICAgICAgIGN0eFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gYXR0cmFjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdhdmVPZkF0dHJhY3RvcnMoY3R4KSB7XG4gIGxldCBhdHRyYWN0b3JzID0gW107XG4gIGxldCBudW1Sb3dzID0gNzA7XG4gIGxldCBudW1Db2x1bW5zID0gMTAwO1xuICBsZXQgcm93U3BhY2luZyA9IHdpbmRvdy5pbm5lckhlaWdodCAvIG51bVJvd3M7XG4gIGxldCBjb2xTcGFjaW5nID0gd2luZG93LmlubmVyV2lkdGggLyBudW1Db2x1bW5zO1xuXG4gIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcbiAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8IG51bUNvbHVtbnM7IGNvbCsrKSB7XG4gICAgICBhdHRyYWN0b3JzLnB1c2goXG4gICAgICAgIG5ldyBBdHRyYWN0b3IoXG4gICAgICAgICAgbmV3IFZlYzIoXG4gICAgICAgICAgICAoY29sICogY29sU3BhY2luZykgKyAoTWF0aC5zaW4obWFwKGNvbCwgMCwgbnVtQ29sdW1ucywgMCwgTWF0aC5QSSAqIDIpKSAqIDIwMCksXG4gICAgICAgICAgICAocm93ICogcm93U3BhY2luZykgKyAoTWF0aC5zaW4obWFwKHJvdywgMCwgbnVtUm93cywgMCwgTWF0aC5QSSAqIDIpKSAqIDUwKVxuICAgICAgICAgICksXG4gICAgICAgICAgY3R4XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cmFjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Tm9pc2UoYXR0cmFjdG9ycykge1xuICBsZXQgbm9pc2UgPSBuZXcgU2ltcGxleE5vaXNlKCk7XG5cbiAgZm9yKGxldCBhdHRyYWN0b3Igb2YgYXR0cmFjdG9ycykge1xuICAgIGF0dHJhY3Rvci5wb3NpdGlvbi54ICs9IG5vaXNlLm5vaXNlMkQoYXR0cmFjdG9yLnBvc2l0aW9uLngsIGF0dHJhY3Rvci5wb3NpdGlvbi55KSAqIDEwO1xuICAgIGF0dHJhY3Rvci5wb3NpdGlvbi55ICs9IG5vaXNlLm5vaXNlMkQoc291YXR0cmFjdG9ycmNlLnBvc2l0aW9uLngsIGF0dHJhY3Rvci5wb3NpdGlvbi55KSAqIDEwO1xuICB9XG5cbiAgcmV0dXJuIGF0dHJhY3RvcnM7XG59IiwiZXhwb3J0IGNvbnN0IExpZ2h0ID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgwLDAsMCwuNSknLFxyXG4gIEJyYW5jaENvbG9yOiAncmdiYSgwLDAsMCwxKScsXHJcbiAgVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC43KSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhcmsgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxyXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxyXG4gIEJyYW5jaENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVhbGlzdGljID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgLy8gQnJhbmNoQ29sb3I6ICdyZ2JhKDAsMCwwLC4yKScsXHJcbiAgVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDYxLDE2NiwxMiwxKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b20gPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwyNDIsMjQyKScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxyXG4gIC8vIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYig2MSw4NSwxMzYpJyxcclxuICAvLyBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYig2MSw4NSwxMzYpJ1xyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDIxMCwgODEsIDk0KSdcclxufSIsImltcG9ydCB7IExpZ2h0LCBEYXJrLCBSZWFsaXN0aWMsIEN1c3RvbSB9IGZyb20gJy4vQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIGJyYW5jaCBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogMzAsICAgICAgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXR0cmFjdG9yIHRoYXQgYXR0cmFjdHMgbm9kZXNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF0dHJhY3RvcnMgYW5kIG5vZGVzIHdoZW4gYnJhbmNoZXMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiB0cnVlLCAgICAgLy8gdHVybnMgb24vb2ZmIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICBFbmFibGVPcGFjaXR5QmxlbmRpbmc6IHRydWUsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93QXR0cmFjdG9yczogZmFsc2UsICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93Tm9kZXM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbidcclxuICBTaG93VGlwczogZmFsc2UsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAneidcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBSZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyBicmFuY2ggc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogRGFyayxcclxuXHJcbiAgLy8gTGluZSB0aGlja25lc3Nlc1xyXG4gIEJyYW5jaFRoaWNrbmVzczogMS41LFxyXG4gIFRpcFRoaWNrbmVzczogMixcclxuICBCb3VuZHNCb3JkZXJUaGlja25lc3M6IDFcclxufSIsImltcG9ydCB7IGV4cG9ydFNWRyB9IGZyb20gXCIuL1V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGIgPSB0b2dnbGUgYnJhbmNoIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVCcmFuY2hlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0b3IgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3RvcnMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHogPSB0b2dnbGUgYXR0cmFjdGlvbiB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVBdHRyYWN0aW9uWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHQgPSB0b2dnbGUgdGlwIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVUaXBzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBrID0gdG9nZ2xlIGtpbGwgem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlS2lsbFpvbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2knOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlSW5mbHVlbmNlTGluZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGIgPSB0b2dnbGUgYm91bmRzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIG8gPSB0b2dnbGUgb2JzdGFjbGVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVPYnN0YWNsZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGUgPSBleHBvcnQgYW4gU1ZHIGZpbGUgb2YgYWxsIHZpc2libGUgZ2VvbWV0cnlcclxuICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgZXhwb3J0U1ZHKG5ldHdvcmspO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYyA9IHRvZ2dsZSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvblxyXG4gICAgICBjYXNlICdjJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUNhbmFsaXphdGlvbigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gcCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nXHJcbiAgICAgIGNhc2UgJ3AnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlT3BhY2l0eUJsZW5kaW5nKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmF0dHJhY3RvcnMgPSBbXTsgIC8vIGF0dHJhY3RvcnMgaW5mbHVlbmNlIG5vZGUgZ3Jvd3RoXHJcbiAgICB0aGlzLm5vZGVzID0gW107ICAgICAgIC8vIG5vZGVzIGFyZSBjb25uZWN0ZWQgdG8gZm9ybSBicmFuY2hlc1xyXG5cclxuICAgIHRoaXMubm9kZXNJbmRleDsgICAgICAgLy8ga2QtYnVzaCBzcGF0aWFsIGluZGV4IGZvciBhbGwgbm9kZXNcclxuXHJcbiAgICB0aGlzLmJvdW5kcyA9IFtdOyAgICAgIC8vIGFycmF5IG9mIFBhdGggb2JqZWN0cyB0aGF0IGJyYW5jaGVzIGNhbm5vdCBncm93IG91dHNpZGUgb2ZcclxuICAgIHRoaXMub2JzdGFjbGVzID0gW107ICAgLy8gYXJyYXkgb2YgUGF0aCBvYmplY3RzIHRoYXQgYnJhbmNoZXMgbXVzdCBhdm9pZFxyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gU2tpcCBpdGVyYXRpb24gaWYgcGF1c2VkXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3NvY2lhdGUgYXR0cmFjdG9ycyB3aXRoIG5lYXJieSBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW2F0dHJhY3RvcklELCBhdHRyYWN0b3JdIG9mIHRoaXMuYXR0cmFjdG9ycy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgYXR0cmFjdG9yIHdpdGggaXRzIGNsb3Nlc3Qgbm9kZVxyXG4gICAgICAgIGNhc2UgJ09wZW4nOlxyXG4gICAgICAgICAgbGV0IGNsb3Nlc3ROb2RlID0gdGhpcy5nZXRDbG9zZXN0Tm9kZShhdHRyYWN0b3IsIHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKGF0dHJhY3RvcikpO1xyXG5cclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goYXR0cmFjdG9ySUQpO1xyXG4gICAgICAgICAgICBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2RlcyA9IFtjbG9zZXN0Tm9kZV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIGFzc29jaWF0ZSB0aGlzIGF0dHJhY3RvciB3aXRoIGFsbCBub2RlcyBpbiBpdHMgcmVsYXRpdmUgbmVpZ2hib3Job29kXHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGxldCBuZWlnaGJvcmhvb2ROb2RlcyA9IHRoaXMuZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKGF0dHJhY3Rvcik7XHJcbiAgICAgICAgICBsZXQgbm9kZXNJbktpbGxab25lID0gdGhpcy5nZXROb2Rlc0luS2lsbFpvbmUoYXR0cmFjdG9yKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGNsdWRlIG5vZGVzIHRoYXQgYXJlIGluIHRoZSBhdHRyYWN0b3IncyBraWxsIHpvbmUgKHRoZXNlIHNob3VsZCBzdG9wIGdyb3dpbmcpXHJcbiAgICAgICAgICBsZXQgbm9kZXNUb0dyb3cgPSBuZWlnaGJvcmhvb2ROb2Rlcy5maWx0ZXIoKG5laWdoYm9yTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIW5vZGVzSW5LaWxsWm9uZS5pbmNsdWRlcyhuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMgPSBuZWlnaGJvcmhvb2ROb2RlcztcclxuXHJcbiAgICAgICAgICBpZihub2Rlc1RvR3Jvdy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGF0dHJhY3Rvci5mcmVzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzVG9Hcm93KSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5pbmZsdWVuY2VkQnkucHVzaChhdHRyYWN0b3JJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm93IHRoZSBuZXR3b3JrIGJ5IGFkZGluZyBuZXcgbm9kZXMgb250byBhbnkgbm9kZXMgYmVpbmcgaW5mbHVlbmNlZCBieSBhdHRyYWN0b3JzXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSB0aGlzLmdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbm9kZS5pbmZsdWVuY2VkQnkubWFwKGlkID0+IHRoaXMuYXR0cmFjdG9yc1tpZF0pKTtcclxuICAgICAgICBsZXQgbmV4dE5vZGUgPSBub2RlLmdldE5leHROb2RlKGF2ZXJhZ2VEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIE9ubHkgYWxsb3cgcm9vdCBub2RlcyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgICAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgICAgICBpZihib3VuZC5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3Qgbm9kZXMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICAgICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobmV4dE5vZGUucG9zaXRpb24ueCwgbmV4dE5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTk9URTogZGlzYWJsaW5nIHRoaXMgY2hlY2sgbGV0cyBub2RlcyBncm93IGFjcm9zcyBnYXBzIGluIGJvdW5kcyAtIGNvb2wgZWZmZWN0IVxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbm9kZS5pbmZsdWVuY2VkQnkgPSBbXTtcclxuXHJcbiAgICAgIC8vIFBlcmZvcm0gYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gICAgICBpZihub2RlLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGUucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGNoaWxkIG5vZGVzLCB1c2UgdGhlIHRoaWNrZXN0IG9mIHRoZW0gYWxsXHJcbiAgICAgICAgICBpZihjdXJyZW50Tm9kZS5wYXJlbnQudGhpY2tuZXNzIDwgY3VycmVudE5vZGUudGhpY2tuZXNzICsgLjA3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPSBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGFueSBhdHRyYWN0b3JzIHRoYXQgaGF2ZSBiZWVuIHJlYWNoZWQgYnkgdGhlaXIgYXNzb2NpYXRlZCBub2Rlc1xyXG4gICAgZm9yKGxldCBbYXR0cmFjdG9ySUQsIGF0dHJhY3Rvcl0gb2YgdGhpcy5hdHRyYWN0b3JzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBhdHRyYWN0b3IgYXMgc29vbiBhcyBhbnkgbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihhdHRyYWN0b3IucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJhY3RvcnMuc3BsaWNlKGF0dHJhY3RvcklELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBhdHRyYWN0b3Igb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIG5vZGVzIGhhdmUgcmVhY2hlZCBpdFxyXG4gICAgICAgIGNhc2UgJ0Nsb3NlZCc6XHJcbiAgICAgICAgICBpZihhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwICYmICFhdHRyYWN0b3IuZnJlc2gpIHtcclxuICAgICAgICAgICAgbGV0IGFsbE5vZGVzUmVhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2YgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgICAgICBpZihub2RlLnBvc2l0aW9uLmRpc3RhbmNlKGF0dHJhY3Rvci5wb3NpdGlvbikgPiB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYWxsTm9kZXNSZWFjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihhbGxOb2Rlc1JlYWNoZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmF0dHJhY3RvcnMuc3BsaWNlKGF0dHJhY3RvcklELCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVidWlsZCBzcGF0aWFsIGluZGljZXNcclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuICAgIHRoaXMuZHJhd0JvdW5kcygpO1xyXG4gICAgdGhpcy5kcmF3T2JzdGFjbGVzKCk7XHJcbiAgICB0aGlzLmRyYXdhdHRyYWN0b3JzKCk7XHJcbiAgICB0aGlzLmRyYXdOb2RlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXdCb3VuZHMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBib3VuZC5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdPYnN0YWNsZXMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdOb2RlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd05vZGVzKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdhdHRyYWN0b3JzKCkge1xyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgdGhpcy5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5kcmF3KCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGxpbmVzIGJldHdlZW4gZWFjaCBhdHRyYWN0b3IgYW5kIHRoZSBub2RlcyB0aGV5IGFyZSBpbmZsdWVuY2luZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyAmJiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBub2RlIG9mIGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhhdHRyYWN0b3IucG9zaXRpb24ueCwgYXR0cmFjdG9yLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuSW5mbHVlbmNlTGluZXNDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKGF0dHJhY3Rvcikge1xyXG4gICAgbGV0IGZhaWw7XHJcblxyXG4gICAgbGV0IG5lYXJieU5vZGVzID0gdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKTtcclxuICAgIGxldCByZWxhdGl2ZU5laWdoYm9ycyA9IFtdO1xyXG4gICAgbGV0IGF0dHJhY3RvclRvUDAsIGF0dHJhY3RvclRvUDEsIHAwVG9QMTtcclxuXHJcbiAgICAvLyBwMCBpcyBhIHJlbGF0aXZlIG5laWdoYm9yIG9mIGF1eGluUG9zIGlmZlxyXG4gICAgLy8gZm9yIGFueSBwb2ludCBwMSB0aGF0IGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIGlzIHAwLFxyXG4gICAgLy8gcDAgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gdG8gcDFcclxuICAgIGZvcihsZXQgcDAgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgZmFpbCA9IGZhbHNlO1xyXG4gICAgICBhdHRyYWN0b3JUb1AwID0gcDAucG9zaXRpb24uc3VidHJhY3QoYXR0cmFjdG9yLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgIGZvcihsZXQgcDEgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgICBpZihwMCA9PT0gcDEpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0cmFjdG9yVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KGF0dHJhY3Rvci5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKGF0dHJhY3RvclRvUDEubGVuZ3RoKCkgPiBhdHRyYWN0b3JUb1AwLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAwVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHAwLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoYXR0cmFjdG9yVG9QMC5sZW5ndGgoKSA+IHAwVG9QMS5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgZmFpbCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFmYWlsKSB7XHJcbiAgICAgICAgcmVsYXRpdmVOZWlnaGJvcnMucHVzaChwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVsYXRpdmVOZWlnaGJvcnM7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLngsXHJcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbktpbGxab25lKGF0dHJhY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi54LFxyXG4gICAgICBhdHRyYWN0b3IucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3ROb2RlKGF0dHJhY3RvciwgbmVhcmJ5Tm9kZXMpIHtcclxuICAgIGxldCBjbG9zZXN0Tm9kZSA9IG51bGwsXHJcbiAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKGF0dHJhY3Rvci5wb3NpdGlvbik7XHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgYXR0cmFjdG9yLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb3Nlc3ROb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBuZWFyYnlhdHRyYWN0b3JzKSB7XHJcbiAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXR0cmFjdG9yXHJcbiAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IG5ldyBWZWMyKDAsMCk7XHJcblxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgbmVhcmJ5YXR0cmFjdG9ycykge1xyXG4gICAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChcclxuICAgICAgICBhdHRyYWN0b3IucG9zaXRpb24uc3VidHJhY3Qobm9kZS5wb3NpdGlvbiwgdHJ1ZSkubm9ybWFsaXplKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc21hbGwgYW1vdW50IG9mIHJhbmRvbSBcImppdHRlclwiIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2sgYmV0d2VlbiB0d28gYXR0cmFjdG9ycyBhbmQgZW5kbGVzc2x5IGdlbmVyYXRpbmcgbm9kZXMgaW4gdGhlIHNhbWUgcGxhY2VcclxuICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChuZXcgVmVjMihyYW5kb20oLS4xLCAuMSksIHJhbmRvbSgtLjEsIC4xKSkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uZGl2aWRlKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIGF2ZXJhZ2VEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBhZGROb2RlKG5vZGUpIHtcclxuICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHJvb3Qgbm9kZXMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgaWYoYm91bmQuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3Qgbm9kZXMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLmF0dHJhY3RvcnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVOb2RlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd05vZGVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd05vZGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVGlwcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1RpcHMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dUaXBzID0gIW5vZGUuc2V0dGluZ3MuU2hvd1RpcHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0b3JzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdG9ycyA9ICF0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0b3JzO1xyXG5cclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnMgPSAhYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0b3JzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQXR0cmFjdGlvblpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuXHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiB0aGlzLmF0dHJhY3RvcnMpIHtcclxuICAgICAgYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVLaWxsWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICFhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUluZmx1ZW5jZUxpbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCb3VuZHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgPSAhdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT2JzdGFjbGVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNhbmFsaXphdGlvbigpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uID0gIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uO1xyXG5cclxuICAgIGlmKCF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbikge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUudGhpY2tuZXNzID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BhY2l0eUJsZW5kaW5nKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcgPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmc7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgbm9kZS5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcgPSB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzLCBjb2xvciA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7ICAgICAgIC8vIHJlZmVyZW5jZSB0byBwYXJlbnQgbm9kZSwgbmVjZXNzYXJ5IGZvciB2ZWluIHRoaWNrZW5pbmcgbGF0ZXJcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAvLyB7dmVjMn0gb2YgdGhpcyBub2RlJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDsgICAgICAgICAvLyB7Ym9vbGVhbn1cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmdcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yOyAgICAgICAgIC8vIGNvbG9yLCB1c3VhbGx5IHBhc3NlZCBkb3duIGZyb20gcGFyZW50XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTsgICAgIC8vIHJlZmVyZW5jZXMgdG8gYWxsIEF0dHJhY3RvcnMgaW5mbHVlbmNpbmcgdGhpcyBub2RlIGVhY2ggZnJhbWVcclxuICAgIHRoaXMudGhpY2tuZXNzID0gMDsgICAgICAgICAvLyB0aGlja25lc3MgLSB0aGlzIGlzIGluY3JlYXNlZCBkdXJpbmcgdmVpbiB0aGlja2VuaW5nIHByb2Nlc3NcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIC8vIFNtb290aGx5IHJhbXAgdXAgb3BhY2l0eSBiYXNlZCBvbiB2ZWluIHRoaWNrbmVzc1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy50aGlja25lc3MgLyAzICsgLjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFwiTGluZXNcIiByZW5kZXIgbW9kZVxyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1RpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVGlwQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlRpcFRoaWNrbmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYodGhpcy5jb2xvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CcmFuY2hDb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLkJyYW5jaFRoaWNrbmVzcyArIHRoaXMudGhpY2tuZXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuXHJcbiAgICAgIC8vIFwiRG90c1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnNldHRpbmdzLlJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAxICsgdGhpcy50aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBjb2xvciBvciBcInRpcFwiIG5vZGVzXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dUaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5UaXBDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQnJhbmNoQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlc2V0IGdsb2JhbCBvcGFjaXR5IGlmIGl0IHdhcyBjaGFuZ2VkIGR1ZSB0byBvcGFjaXR5IGdyYWRpZW50IGZsYWdcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBub2RlIGluIHRoZSBwcm92aWRlZCBkaXJlY3Rpb24gYW5kIGEgcHJlLWRlZmluZWQgZGlzdGFuY2UgKFNlZ21lbnRMZW5ndGgpXHJcbiAgZ2V0TmV4dE5vZGUoYXZlcmFnZUF0dHJhY3RvckRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5pc1RpcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXh0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChhdmVyYWdlQXR0cmFjdG9yRGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc2V0dGluZ3MuU2VnbWVudExlbmd0aCksIHRydWUpO1xyXG5cclxuICAgIHJldHVybiBuZXcgTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLFxyXG4gICAgICB0aGlzLmNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuXHJcbmxldCBpbnNpZGUgPSByZXF1aXJlKCdwb2ludC1pbi1wb2x5Z29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uLCB0eXBlLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBvbHlnb24gPSBwb2x5Z29uOyAgICAgLy8gYXJyYXkgb2YgYXJyYXlzIGNvbnRhaW5pbmcgY29vcmRpbmF0ZXMgZGVmaW5pbmcgYSBwb2x5Z29uIChbW3gwLHkwXSxbeDEseTFdLC4uLl0pXHJcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAgICAgICAgICAgLy8gc3RyaW5nIGVpdGhlciAnQm91bmRzJyBvciAnT2JzdGFjbGUnXHJcblxyXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBwb2x5Z29uOyAgLy8gUGF0aHMgYXJlIGluaXRpYWxpemVkIHdpdGhvdXQgYW55IHRyYW5zZm9ybWF0aW9ucyBieSBkZWZhdWx0XHJcbiAgICB0aGlzLm9yaWdpbiA9IHt4OjAsIHk6MH07ICAgICAgICAgICAvLyBvcmlnaW4gcG9pbnQgdXNlZCBmb3IgdHJhbnNsYXRpb25cclxuICAgIHRoaXMuc2NhbGUgPSAxOyAgICAgICAgICAgICAgICAgICAgIC8vIG11bHRpcGxpY2F0aW9uIGZhY3RvciBmb3IgcG9seWdvbiBjb29yZGluYXRlc1xyXG4gICAgdGhpcy53aWR0aCA9IC0xOyAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGggb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxyXG4gICAgdGhpcy5oZWlnaHQgPSAtMTsgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0IG9mIHRyYW5zZm9ybWVkIHBvbHlnb24gLSB3aWxsIGJlIGNhbGN1bGF0ZWQgdXNpbmcgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKClcclxuICAgIHRoaXMuaXNDZW50ZXJlZCA9IGZhbHNlOyAgICAgICAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlIHRvIHNjcmVlbiBjZW50ZXJcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHByb3ZpZGVkIGNvb3JkaW5hdGVzIGFyZSBpbnNpZGUgcG9seWdvbiBkZWZpbmVkIGJ5IHRoaXMgUGF0aFxyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHJldHVybiBpbnNpZGUoW3gsIHldLCB0aGlzLnBvbHlnb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVsYXRpdmUgdHJhbnNsYXRpb25cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy5vcmlnaW4ueCArPSB4O1xyXG4gICAgdGhpcy5vcmlnaW4ueSArPSB5O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICAvLyBBYnNvbHV0ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHggLSB0aGlzLndpZHRoLzI7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5IC0gdGhpcy5oZWlnaHQvMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnggPSB4O1xyXG4gICAgICB0aGlzLm9yaWdpbi55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2NhbGUoZmFjdG9yKSB7XHJcbiAgICB0aGlzLnNjYWxlICo9IGZhY3RvcjtcclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG8od2luZG93LmlubmVyV2lkdGgvMiwgd2luZG93LmlubmVySGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIHBhdGggbGVuZ3RoIGJ5IGFkZGluZyB1cCBhbGwgbGluZSBzZWdtZW50IGxlbmd0aHMgKGRpc3RhbmNlcyBiZXR3ZWVuIHBvbHlnb24gcG9pbnRzKVxyXG4gIGdldFRvdGFsTGVuZ3RoKCkge1xyXG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGk9MTsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxMZW5ndGggKz0gVmVjMihcclxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgKS5kaXN0YW5jZShcclxuICAgICAgICBWZWMyKFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMV0gKiB0aGlzLnNjYWxlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxuICB9XHJcblxyXG4gIC8vIENhbGN1bGF0ZXMgdGhlIHJlYWwgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdHJhbnNmb3JtZWQgcG9seWdvblxyXG4gIGNhbGN1bGF0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICBsZXQgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXHJcbiAgICAgIHJpZ2h0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSxcclxuICAgICAgYm90dG9tTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA8IGxlZnRNb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGxlZnRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0gPiByaWdodE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSA8IHRvcE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXTtcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdID4gYm90dG9tTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE1hdGguYWJzKHJpZ2h0TW9zdENvb3JkaW5hdGUgLSBsZWZ0TW9zdENvb3JkaW5hdGUpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBNYXRoLmFicyhib3R0b21Nb3N0Q29vcmRpbmF0ZSAtIHRvcE1vc3RDb29yZGluYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb29yZGluYXRlcyBmb3IgdGhlIFwidHJhbnNmb3JtZWRcIiB2ZXJzaW9uIG9mIHRoaXMgcGF0aCwgdGFraW5nIGludG8gY29uc2lkZXJhdGlvbiB0cmFuc2xhdGlvbiBhbmQgc2NhbGluZ1xyXG4gIGNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLnB1c2goXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzBdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLngsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMV0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueVxyXG4gICAgICAgIF1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZihcclxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMudHlwZSA9PSAnQm91bmRzJyB8fFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy50eXBlID09ICdPYnN0YWNsZXMnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgLy8gRHJhdyBzZXF1ZW50aWFsIGxpbmVzIHRvIGFsbCBwb2ludHMgb2YgdGhlIHBvbHlnb25cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERyYXcgbGluZSBiYWNrIHRvIGZpcnN0IHBvaW50IHRvIGNsb3NlIHRoZSBwb2x5Z29uXHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JvdW5kcyc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0JvcmRlckNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5Cb3VuZHNCb3JkZXJUaGlja25lc3M7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNGaWxsQ29sb3I7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPYnN0YWNsZSc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5PYnN0YWNsZUZpbGxDb2xvcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGJvdW5kaW5nIGJveFxyXG4gICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgLy8gdGhpcy5jdHgubW92ZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xyXG4gICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge1NWR1BhdGhEYXRhfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGhkYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0xvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzdGF0aWMgbG9hZChzdmdTdHJpbmcpIHtcclxuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICBsZXQgc3ZnTm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnU3RyaW5nLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG5cclxuICAgIGxldCBpbnB1dFBhdGhzID0gc3ZnTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdwYXRoJyksXHJcbiAgICAgIHBhdGhzID0gW107XHJcblxyXG4gICAgLy8gU2NyYXBlIGFsbCBwb2ludHMgZnJvbSBhbGwgcGF0aHMsIGFuZCByZWNvcmQgYnJlYWtwb2ludHNcclxuICAgIGZvcihsZXQgaW5wdXRQYXRoIG9mIGlucHV0UGF0aHMpIHtcclxuICAgICAgbGV0IHBhdGhEYXRhID0gbmV3IFNWR1BhdGhEYXRhKGlucHV0UGF0aC5nZXRBdHRyaWJ1dGUoJ2QnKSksXHJcbiAgICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICBsZXQgcHJldmlvdXNDb29yZHMgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IobGV0IFtpbmRleCwgY29tbWFuZF0gb2YgcGF0aERhdGEuY29tbWFuZHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgc3dpdGNoKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgLy8gTW92ZSAoJ00nKSBhbmQgbGluZSAoJ0wnKSBjb21tYW5kcyBoYXZlIGJvdGggWCBhbmQgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5NT1ZFX1RPOlxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBjb21tYW5kLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICgnSCcpIGNvbW1hbmRzIG9ubHkgaGF2ZSBYLCB1c2luZyBwcmV2aW91cyBjb21tYW5kJ3MgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBwcmV2aW91c0Nvb3Jkcy55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIFZlcnRpY2FsIGxpbmUgKCdWJykgY29tbWFuZHMgb25seSBoYXZlIFksIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBYXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLlZFUlRfTElORV9UTzpcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzQ29vcmRzLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBDbG9zZVBhdGggKCdaJykgY29tbWFuZHMgYXJlIGEgbmFpdmUgaW5kaWNhdGlvbiB0aGF0IHRoZSBjdXJyZW50IHBhdGggY2FuIGJlIHByb2Nlc3NlZCBhbmQgYWRkZWQgdG8gdGhlIHdvcmxkXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkNMT1NFX1BBVEg6XHJcbiAgICAgICAgICAgIC8vIENhcHR1cmUgcGF0aCBpbiByZXR1cm4gb2JqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW5jbG9zZWQgcGF0aHMgbmV2ZXIgaGF2ZSBDTE9TRV9QQVRIIGNvbW1hbmRzLCBzbyB3cmFwIHVwIHRoZSBjdXJyZW50IHBhdGggd2hlbiB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBwYXRoIGFuZCBoYXZlIG5vdCBmb3VuZCB0aGUgY29tbWFuZFxyXG4gICAgICAgIGlmKGluZGV4ID09IHBhdGhEYXRhLmNvbW1hbmRzLmxlbmd0aCAtIDEgJiYgY29tbWFuZC50eXBlICE9IFNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpIHtcclxuICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgIHBvaW50cyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBYIGNvb3JkaW5hdGUsIGlmIHRoZXJlIHdhcyBvbmVcclxuICAgICAgICBpZihjb21tYW5kLmhhc093blByb3BlcnR5KCd4JykpIHtcclxuICAgICAgICAgIHByZXZpb3VzQ29vcmRzLnggPSBjb21tYW5kLng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFkgY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3knKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueSA9IGNvbW1hbmQueTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyB0b1BhdGggfSBmcm9tICdzdmctcG9pbnRzJztcclxuXHJcbi8vIHJhbmRvbSgpLCBzaW1pbGFyIHRvIFByb2Nlc3Npbmcnc1xyXG4vLyBJZiB0d28gcGFyYW1ldGVycyBhcmUgcGFzc2VkLCB0aGV5IGFyZSBpbnRlcnByZXRlZCBhcyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBvZiB0aGUgZGVzaXJlZCByYW5nZVxyXG4vLyBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgcGFzc2VkLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0aGUgbWF4aW11bSwgd2hpbGUgemVybyBpcyB1c2VkIGFzIHRoZSBtaW5pbXVtXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heCA9IG1pbjtcclxuICAgIG1pbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG1pbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBhcmd1bWVudHMgdG8gYmUgbnVtYmVycycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufVxyXG5cclxuLy8gQ29udmVydHMgYSBudW1iZXIgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlclxyXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBvcmlnaW5hbExvd2VyLCBvcmlnaW5hbFVwcGVyLCBuZXdMb3dlciwgbmV3VXBwZXIpIHtcclxuICByZXR1cm4gbmV3TG93ZXIgKyAobmV3VXBwZXIgLSBuZXdMb3dlcikgKiAoKHZhbHVlIC0gb3JpZ2luYWxMb3dlcikgLyAob3JpZ2luYWxVcHBlciAtIG9yaWdpbmFsTG93ZXIpKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhbiBhcnJheSBvZiBwb2ludCBjb29yZGluYXRlcyAoYWxzbyBhcnJheXMsIHdpdGggdHdvIGVudHJpZXMpIGZvciBwb2ludHMgYXJyYW5nZWQgaW4gYSBjaXJjbGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmNsZU9mUG9pbnRzKGN4LCBjeSwgcmFkaXVzLCByZXNvbHV0aW9uKSB7XHJcbiAgbGV0IGFuZ2xlLCB4LCB5O1xyXG4gIGxldCBwb2ludHMgPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc29sdXRpb247IGkrKykge1xyXG4gICAgYW5nbGUgPSAyICogTWF0aC5QSSAqIGkgLyByZXNvbHV0aW9uO1xyXG4gICAgeCA9IGN4ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSkpO1xyXG4gICAgeSA9IGN5ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xyXG5cclxuICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcG9pbnRzO1xyXG59XHJcblxyXG4vLyBDcmVhdGVzIGFuIFNWRyBkb2N1bWVudCBjb250YWluaW5nIGFsbCBvZiB0aGUgdmlzaWJsZSBnZW9tZXRyeSwgdGhlbiBwdXNoZXMgaXQgdG8gdGhlIGNsaWVudFxyXG4vLyAtIFRyaWdnZXJlZCBieSBwcmVzc2luZyBgZWAgaW4gYW55IHNrZXRjaC4gU2VlIEtleWJvYXJkSW50ZXJhY3Rpb25zLmpzIGZvciBkZWZpbml0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTVkcobmV0d29yaykge1xyXG4gIC8vIFNldCB1cCA8c3ZnPiBlbGVtZW50XHJcbiAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIDxsaW5lPnMgZm9yIGVhY2ggYnJhbmNoIHNlZ21lbnRcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCcmFuY2hlcykge1xyXG4gICAgbGV0IG5vZGVMaW5lc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IGBcclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHgyPVwiJHtub2RlLnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTI9XCIke25vZGUucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIG5vZGVMaW5lc0dyb3VwLmlubmVySFRNTCArPSBsaW5lTm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlTGluZXNHcm91cCk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3IgYm91bmRzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93Qm91bmRzKSB7XHJcbiAgICBpZihuZXR3b3JrLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBib3VuZHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhib3VuZC5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChib3VuZHNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3Igb2JzdGFjbGVzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93T2JzdGFjbGVzKSB7XHJcbiAgICBpZihuZXR3b3JrLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBvYnN0YWNsZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhvYnN0YWNsZS5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChvYnN0YWNsZXNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSB0aGUgZG9jdW1lbnQgYXMgYSBCbG9iIGFuZCBmb3JjZSBhIGRvd25sb2FkIGFzIGEgdGltZXN0YW1wZWQgLnN2ZyBmaWxlXHJcbiAgY29uc3Qgc3ZnRG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJub1wiPz4nO1xyXG4gIGNvbnN0IHNlcmlhbGl6ZWRTdmcgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcclxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z0RvY3R5cGUsIHNlcmlhbGl6ZWRTdmddLCB7IHR5cGU6ICdpbWFnZS9zdmcreG1sOycgfSlcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuICAvLyBDcmVhdGUgYSA8cGF0aD4gZWxlbWVudCB3aXRoIGEgcHJvcGVybHktZm9ybWF0dGVkIGBkYCBhdHRyaWJ1dGUgY29udGFpbmluZyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXNzZWQgcG9pbnRzXHJcbiAgZnVuY3Rpb24gZ2V0UGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICAgIGxldCBwb2ludHNTdHJpbmcgPSAnJztcclxuXHJcbiAgICBmb3IobGV0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcclxuICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjbG9zZXBhdGggY29tbWFuZCB0byBhdXRvbWF0aWNhbGx5IGRyYXcgbGluZSBiYWNrIHRvIGluaXRpYWwgcG9pbnRcclxuICAgIHBvaW50c1N0cmluZyArPSAnICcgKyBwb2ludHNbMF1bMF0gKyAnLCcgKyBwb2ludHNbMF1bMV07XHJcblxyXG4gICAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgICBwb2ludHM6IHBvaW50c1N0cmluZ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhdGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhFbDtcclxuICB9IiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi4vLi4vLi4vY29yZS9OZXR3b3JrJztcclxuaW1wb3J0IHsgZ2V0UmFuZG9tQXR0cmFjdG9ycywgZ2V0R3JpZE9mQXR0cmFjdG9ycyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvQXR0cmFjdG9yUGF0dGVybnMnO1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9jb3JlL05vZGUnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi8uLi9jb3JlL1BhdGgnO1xyXG5pbXBvcnQgU1ZHTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvcmUvU1ZHTG9hZGVyJztcclxuaW1wb3J0IHsgcmFuZG9tLCBnZXRDaXJjbGVPZlBvaW50cyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvVXRpbGl0aWVzJztcclxuaW1wb3J0IHsgc2V0dXBLZXlMaXN0ZW5lcnMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zJztcclxuXHJcbmNvbnN0IGxlYWYgPSByZXF1aXJlKCcuLi9zdmcvbGVhZi5zdmcnKTtcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG5jb25zdCBUUklBTkdMRSA9IDA7XHJcbmNvbnN0IFNRVUFSRSA9IDE7XHJcbmNvbnN0IENJUkNMRSA9IDI7XHJcbmNvbnN0IExFQUYgPSAzO1xyXG5sZXQgY3VycmVudEJvdW5kc1NoYXBlID0gTEVBRjtcclxuXHJcbmxldCBzaG93SGVscCA9IHRydWU7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBBZGQgdGhlIGJvdW5kcywgYXR0cmFjdG9ycywgYW5kIHJvb3Qgbm9kZXNcclxuICByZXNldE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcclxuICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgYWRkQm91bmRzKCk7XHJcbiAgYWRkT2JzdGFjbGVzKCk7XHJcbiAgYWRkQXR0cmFjdG9ycygpO1xyXG4gIGFkZFJvb3ROb2RlcygpO1xyXG59XHJcblxyXG4gIGxldCBhZGRCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2goY3VycmVudEJvdW5kc1NoYXBlKSB7XHJcbiAgICAgIGNhc2UgVFJJQU5HTEU6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRUcmlhbmdsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTUVVBUkU6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRTcXVhcmVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0lSQ0xFOlxyXG4gICAgICAgIG5ldHdvcmsuYm91bmRzID0gZ2V0Q2lyY2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExFQUY6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRMZWFmQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGxldCBnZXRUcmlhbmdsZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIHJldHVybiBbbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgW2N4IC0gNDAwLCBjeSArIDMwMF0sXHJcbiAgICAgICAgICBbY3gsIGN5IC0gMzUwXSxcclxuICAgICAgICAgIFtjeCArIDQwMCwgY3kgKyAzMDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldFNxdWFyZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDgwMDtcclxuXHJcbiAgICAgIHJldHVybiBbbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgW2N4IC0gc2lkZUxlbmd0aC8yLCBjeSAtIHNpZGVMZW5ndGgvMl0sICAvLyB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICAgIFtjeCArIHNpZGVMZW5ndGgvMiwgY3kgLSBzaWRlTGVuZ3RoLzJdLCAgLy8gdG9wIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgICAgW2N4ICsgc2lkZUxlbmd0aC8yLCBjeSArIHNpZGVMZW5ndGgvMl0sICAvLyBib3R0b20gcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICBbY3ggLSBzaWRlTGVuZ3RoLzIsIGN5ICsgc2lkZUxlbmd0aC8yXSAgIC8vIGJvdHRvbSBsZWZ0IGNvcm5lclxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ0JvdW5kcycsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgICldO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRDaXJjbGVCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBbbmV3IFBhdGgoXHJcbiAgICAgICAgZ2V0Q2lyY2xlT2ZQb2ludHMoXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsICAgIC8vIGN4XHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLCAgIC8vIGN5XHJcbiAgICAgICAgICAzNTAsICAgICAgICAgICAgICAgICAgICAgIC8vIHJhZGl1c1xyXG4gICAgICAgICAgMTAwICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHV0aW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldExlYWZCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICAgIGNvbnN0IHNoYXBlV2lkdGggPSA5MDA7XHJcbiAgICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gOTAwO1xyXG5cclxuICAgICAgbGV0IHBvbHlnb24gPSBTVkdMb2FkZXIubG9hZChsZWFmKVswXTtcclxuXHJcbiAgICAgIC8vIFRyYW5zbGF0ZSB0aGUgZGVzaWduIHRvIHRoZSBzY3JlZW4gY2VudGVyXHJcbiAgICAgIGZvcihsZXQgcG9pbnQgb2YgcG9seWdvbikge1xyXG4gICAgICAgIHBvaW50WzBdID0gY3ggLSBzaGFwZVdpZHRoLzIgKyBwb2ludFswXTtcclxuICAgICAgICBwb2ludFsxXSA9IGN5IC0gc2hhcGVIZWlnaHQvMiArIHBvaW50WzFdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gW25ldyBQYXRoKHBvbHlnb24sICdCb3VuZHMnLCBjdHgpXTtcclxuICAgIH1cclxuXHJcbiAgbGV0IGFkZE9ic3RhY2xlcyA9ICgpID0+IHtcclxuICAgIG5ldHdvcmsub2JzdGFjbGVzID0gW107XHJcblxyXG4gICAgc3dpdGNoKGN1cnJlbnRCb3VuZHNTaGFwZSkge1xyXG4gICAgICBjYXNlIExFQUY6XHJcbiAgICAgICAgLy8gVGVuIHJhbmRvbSBjaXJjbGVzXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MjU7IGkrKykge1xyXG4gICAgICAgICAgbmV0d29yay5vYnN0YWNsZXMucHVzaChcclxuICAgICAgICAgICAgbmV3IFBhdGgoXHJcbiAgICAgICAgICAgICAgZ2V0Q2lyY2xlT2ZQb2ludHMoXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgKyByYW5kb20oLTMwMCwzMDApLFxyXG4gICAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIHJhbmRvbSgtMzAwLDMwMCksXHJcbiAgICAgICAgICAgICAgICByYW5kb20oMjAsNjApLFxyXG4gICAgICAgICAgICAgICAgMTAwXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAnT2JzdGFjbGUnLFxyXG4gICAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vIFNpbmdsZSBjaXJjbGUgaW4gY2VudGVyXHJcbiAgICAgICAgbmV0d29yay5vYnN0YWNsZXMucHVzaChcclxuICAgICAgICAgIG5ldyBQYXRoKFxyXG4gICAgICAgICAgICBnZXRDaXJjbGVPZlBvaW50cyhcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIDkwLFxyXG4gICAgICAgICAgICAgIDIwMCxcclxuICAgICAgICAgICAgICAxMDBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgJ09ic3RhY2xlJyxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgYWRkQXR0cmFjdG9ycyA9ICgpID0+IHtcclxuICAgIC8vIFNldCB1cCB0aGUgYXR0cmFjdG9ycyB1c2luZyBwcmUtbWFkZSBwYXR0ZXJuc1xyXG4gICAgbGV0IHJhbmRvbUF0dHJhY3RvcnMgPSBnZXRSYW5kb21BdHRyYWN0b3JzKDUwMCwgY3R4LCAxMCwgbmV0d29yay5ib3VuZHMsIG5ldHdvcmsub2JzdGFjbGVzKTtcclxuICAgIGxldCBncmlkQXR0cmFjdG9ycyA9IGdldEdyaWRPZkF0dHJhY3RvcnMoMjAwLCAyMDAsIGN0eCwgMTAsIG5ldHdvcmsuYm91bmRzLCBuZXR3b3JrLm9ic3RhY2xlcyk7XHJcblxyXG4gICAgbmV0d29yay5hdHRyYWN0b3JzID0gZ3JpZEF0dHJhY3RvcnM7XHJcbiAgXHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiBuZXR3b3JrLmF0dHJhY3RvcnMpIHtcclxuICAgICAgYXR0cmFjdG9yLnNldHRpbmdzID0gbmV0d29yay5zZXR0aW5ncztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gIGxldCBhZGRSb290Tm9kZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodC8yO1xyXG5cclxuICAgIHN3aXRjaChjdXJyZW50Qm91bmRzU2hhcGUpIHtcclxuICAgICAgY2FzZSBUUklBTkdMRTpcclxuICAgICAgICBuZXR3b3JrLmFkZE5vZGUoXHJcbiAgICAgICAgICBuZXcgTm9kZShcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgbmV3IFZlYzIoY3ggLSAzNDAsIGN5ICsgMjkwKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gbmV0d29yay5hZGROb2RlKFxyXG4gICAgICAgIC8vICAgbmV3IE5vZGUoXHJcbiAgICAgICAgLy8gICAgIG51bGwsXHJcbiAgICAgICAgLy8gICAgIG5ldyBWZWMyKGN4LCBjeSAtIDMwMCksXHJcbiAgICAgICAgLy8gICAgIHRydWUsXHJcbiAgICAgICAgLy8gICAgIGN0eFxyXG4gICAgICAgIC8vICAgKVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIC8vIG5ldHdvcmsuYWRkTm9kZShcclxuICAgICAgICAvLyAgIG5ldyBOb2RlKFxyXG4gICAgICAgIC8vICAgICBudWxsLFxyXG4gICAgICAgIC8vICAgICBuZXcgVmVjMihjeCArIDM0MCwgY3kgKyAyOTApLFxyXG4gICAgICAgIC8vICAgICB0cnVlLFxyXG4gICAgICAgIC8vICAgICBjdHhcclxuICAgICAgICAvLyAgIClcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0lSQ0xFOlxyXG4gICAgICAgIG5ldHdvcmsuYWRkTm9kZShcclxuICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihjeCwgY3kgKyAzMDApLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBjdHhcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgU1FVQVJFOlxyXG4gICAgICAgIC8vIEFkZCBhIHNldCBvZiByYW5kb20gcm9vdCBub2RlcyB0aHJvdWdob3V0IHNjZW5lXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8MTA7IGkrKykge1xyXG4gICAgICAgICAgbmV0d29yay5hZGROb2RlKFxyXG4gICAgICAgICAgICBuZXcgTm9kZShcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tKHdpbmRvdy5pbm5lcldpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExFQUY6XHJcbiAgICAgICAgLy8gUHV0IGEgc2luZ2xlIHJvb3Qgbm90ZSBhdCB0aGUgYmFzZSBvZiB0aGUgbGVhZlxyXG4gICAgICAgIG5ldHdvcmsuYWRkTm9kZShcclxuICAgICAgICAgIG5ldyBOb2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSA1LFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDIgKyAyMjBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxubGV0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIGxldCB0ZXh0ID0gW1xyXG4gICAgJ1ZlaW5zIGNhbiBiZSBtYWRlIHRvIGF2b2lkIG9ic3RhY2xlcy4nLFxyXG4gICAgJycsXHJcbiAgICAnMSA9IHRyaWFuZ2xlIHdpdGggaG9sZScsXHJcbiAgICAnMiA9IHNxdWFyZSB3aXRoIGhvbGUnLFxyXG4gICAgJzMgPSBjaXJjbGUgd2l0aCBob2xlJyxcclxuICAgICc0ID0gbGVhZiB3aXRoIGhvbGVzJyxcclxuICAgICcnLFxyXG4gICAgJ1NwYWNlID0gdG9nZ2xlIHBhdXNlJyxcclxuICAgICdyID0gcmVzZXQnLFxyXG4gICAgJ2MgPSB0b2dnbGUgY2FuYWxpemF0aW9uJyxcclxuICAgICdwID0gdG9nZ2xlIG9wYWNpdHkgYmxlbmRpbmcnLFxyXG4gICAgJ24gPSB0b2dnbGUgbm9kZSB2aXNpYmlsaXR5JyxcclxuICAgICdhID0gdG9nZ2xlIGF0dHJhY3RvciB2aXNpYmlsaXR5JyxcclxuICAgICd6ID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZXMnLFxyXG4gICAgJ2sgPSB0b2dnbGUga2lsbCB6b25lcycsXHJcbiAgICAndCA9IHRvZ2dsZSB0aXBzJyxcclxuICAgICdpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcycsXHJcbiAgICAnaCA9IHRvZ2dsZSB0aGlzIGhlbHAgdGV4dCdcclxuICBdO1xyXG5cclxuICBjdHguZm9udCA9ICdib2xkIDI0cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1NSwxKSc7XHJcbiAgY3R4LmZpbGxUZXh0KCdPYnN0YWNsZXMnLCAyMCwgNDApO1xyXG5cclxuICBjdHguZm9udCA9ICcxNnB4IHNhbnMtc2VyaWYnO1xyXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwuNSknO1xyXG4gIGZvcihsZXQgaT0wOyBpPHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgIGN0eC5maWxsVGV4dCh0ZXh0W2ldLCAyMCwgMjIqaSArIDgwKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1haW4gcHJvZ3JhbSBsb29wXHJcbmxldCB1cGRhdGUgPSAodGltZXN0YW1wKSA9PiB7XHJcbiAgbmV0d29yay51cGRhdGUoKTtcclxuICBuZXR3b3JrLmRyYXcoKTtcclxuXHJcbiAgaWYoc2hvd0hlbHApIHtcclxuICAgIGRyYXdUZXh0KCk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxuLy8gS2V5IGNvbW1hbmRzIHNwZWNpZmljIHRvIHRoaXMgc2tldGNoXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBzd2l0Y2goZS5rZXkpIHtcclxuICAgIC8vIHIgPSByZXNldCBzaW11bGF0aW9uIGJ5IHJlaW5pdGlhbGl6aW5nIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgICBjYXNlICdyJzpcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIC8vIGggPSB0b2dnbGUgaGVscCB0ZXh0XHJcbiAgICBjYXNlICdoJzpcclxuICAgICAgc2hvd0hlbHAgPSAhc2hvd0hlbHA7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzEnOlxyXG4gICAgICBjdXJyZW50Qm91bmRzU2hhcGUgPSBUUklBTkdMRTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzInOlxyXG4gICAgICBjdXJyZW50Qm91bmRzU2hhcGUgPSBTUVVBUkU7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICczJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gQ0lSQ0xFO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICAgIGN1cnJlbnRCb3VuZHNTaGFwZSA9IExFQUY7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uXHJcbnNldHVwKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIiB4bWxuczpjYz1cXFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjXFxcIiB4bWxuczpyZGY9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyNcXFwiIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6c29kaXBvZGk9XFxcImh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkXFxcIiB4bWxuczppbmtzY2FwZT1cXFwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVxcXCIgaWQ9XFxcInN2ZzJcXFwiIHNvZGlwb2RpOmRvY25hbWU9XFxcImxlYWYtMi5zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA5MDAuMDAwMDIgODk5Ljk5OTk5XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSlcXFwiPjxnIGlkPVxcXCJsYXllcjFcXFwiIGlua3NjYXBlOmxhYmVsPVxcXCJDYWxxdWUgMVxcXCIgaW5rc2NhcGU6Z3JvdXBtb2RlPVxcXCJsYXllclxcXCI+PHBhdGggaWQ9XFxcInBhdGgzMTgzXFxcIiBkPVxcXCJNIDQ1MC4yMTg5MSw4MjkuMDc0MzYgNDUwLjQ1MTA3LDgyOC4yMTQ2IDQ1MS4wODMxOCw4MjYuNDUyNjggNDUyLjAxODY5LDgyNC4wNDUzNSA0NTMuMTYxMDUsODIxLjI0OTMzIDQ1NC41ODU5OCw4MTYuNTU3NjkgNDU0Ljk0OTM4LDgxMC4yODk5OCA0NTQuMTk4OTQsODAwLjI0MDY3IDQ1Mi4yODIzOCw3ODQuMjA0MjIgNDUwLjYyNjMyLDc2OS44MDQ3OCA0NDguOTQxNjUsNzUyLjc3ODA2IDQ0Ny40MjU1LDczNS4yNTIgNDQ2LjI3NDk5LDcxOS4zNTQ1NSA0NDUuMzE3Miw3MDUuNjQ4MjkgNDQ0LjMyNTcyLDY5NC4wODg4NCA0NDMuNDE3NTEsNjg1Ljg5MzE5IDQ0Mi43MDk1Nyw2ODIuMjc4MzUgNDQwLjg2NTk5LDY4MS4zODEwMSA0MzYuNzEwNTQsNjgwLjkyNTgxIDQzMC4yMzIxNyw2ODAuOTEyMjggNDIxLjQxOTgyLDY4MS4zMzk5MyAzNzMuNTY0NzYsNjg0LjY1Mjc4IDM0My44NTk0Nyw2ODcuNjY3NzggMzIyLjgyMzgxLDY5MS43MDE5NyAzMDAuOTc3NjIsNjk4LjA3MjQxIDI5MS4wNzA5OSw3MDAuODM5NzUgMjgxLjE5MzQyLDcwMi43MzQxMiAyNjkuNzM0NDgsNzAzLjk5MzU1IDI1NS4wODM3Miw3MDQuODU2MDcgMjQzLjgxNTE5LDcwNS4yMzEgMjM0LjAzNDcsNzA1LjMyNiAyMjYuNzkwNjcsNzA1LjE0NjI4IDIyMy4xMzE0OCw3MDQuNjk3MDkgMjIxLjM4NjA1LDcwMy43MzY4NCAyMjEuMTU4Miw3MDIuMzk4NSAyMjIuNjIyNTcsNzAwLjE3OTgzIDIyNS45NTM4MSw2OTYuNTc4NTUgMjMxLjE5NTM2LDY5MC4wOTE5NyAyMzQuNTc3LDY4My41OTU4OSAyMzUuODg2ODcsNjc3LjY1MjA1IDIzNC45MTMwOCw2NzIuODIyMTcgMjI4LjgyMjY0LDY2Ny4wOTQwNCAyMTYuODYxNTUsNjYwLjg5NzI5IDE5OS44Njg0OCw2NTQuNTkzODEgMTc4LjY4MjEyLDY0OC41NDU1MiAxNjYuODYwODQsNjQ1LjQ1NDI3IDE1Ni44OTIwNSw2NDIuNjM4OTQgMTQ5LjgyNDU1LDY0MC40MTAxMiAxNDYuNzA3MDksNjM5LjA3ODQxIDE0Ni43NDYwNSw2MzcuNDI2MzQgMTQ4LjUwNzE4LDYzNC4zNTAyMyAxNTEuODI5NzIsNjMwLjA4MjMyIDE1Ni41NTI4OSw2MjQuODU0ODUgMTYzLjI5Mzc3LDYxNy40MDAyMyAxNjcuMDQ4NTgsNjExLjg0NjMxIDE2OC41MDg1NSw2MDYuNzg2MDUgMTY4LjM2NDk2LDYwMC44MTI0MiAxNjUuODUxMzIsNTk0LjI1MDg3IDE1OS4xNzk1Myw1ODYuNTQxNzUgMTQ3LjczMDg3LDU3Ny4wOTk0OSAxMzAuODg2NjQsNTY1LjMzODUgMTIwLjQ3MDUzLDU1OC4yOTg3NyAxMTEuOTQwNjQsNTUyLjMwMTgyIDEwNi4xNzcxOSw1NDcuOTgyOTEgMTA0LjA2MDQ0LDU0NS45NzcyOSAxMDUuMTI2NDcsNTQ0LjkyNDQ4IDEwOC4wMjkwMyw1NDMuMTk5NzUgMTEyLjMyNDgyLDU0MS4wNDIxNSAxMTcuNTcwNTQsNTM4LjY5MDc3IDEzMi40NjE4OSw1MzEuMzcyMTkgMTM5LjkxOTY0LDUyMy45NTkwNSAxNDEuMTYyMzQsNTE0LjAyMTQgMTM3LjQwODUsNDk5LjEyOTI3IDEzMi41OTcyMSw0ODMuMjI4NjUgMTI3LjY2MzIsNDY1LjQxMjc3IDEyMy40MDQsNDQ4LjY3OTA0IDEyMC42MTcxNSw0MzYuMDI0OSAxMTYuNDA4NzUsNDE3LjQ1NjYxIDExMC4xOTQ2OSwzOTQuMTg1MTcgMTAzLjY5NTgyLDM3Mi4zMjA3NiA5OC42MzMwMTYsMzU3Ljk3MzU2IDk2LjA1MDE4NywzNTIuOTc2MDYgOTIuNTAwNDczLDM0Ny4yNjg0IDg4LjQ1MTgxMSwzNDEuNTU0MDkgODQuMzcyMTM2LDMzNi41MzY2NSA4MC43MjY3NTYsMzMyLjE3MjQ4IDc3Ljg2MDU2MiwzMjguMjM4MTcgNzYuMDYwODYyLDMyNS4xNjUyMiA3NS42MTQ5NjYsMzIzLjM4NTE0IDk0LjQ2NzE4OCwzMjAuNDAyMDQgMTM0Ljg5MjIyLDMyMy45Njk4NSAxNzkuNjUyODgsMzMxLjc4NTI2IDIxMS41MTE5OCwzNDEuNTQ0OTUgMjE2Ljg0NzIyLDM0NC4xMDgyOSAyMjMuNjQ4MDMsMzQ3LjE3MjU1IDIzMS4wNDAyLDM1MC4zNTMxOSAyMzguMTQ5NTUsMzUzLjI2NTYxIDI0NS40MDgzNSwzNTYuNDI0MDkgMjUzLjIwNjAyLDM2MC4yNzQ2NSAyNjAuNjA2NDEsMzY0LjMzMDM5IDI2Ni42NzMzNywzNjguMTA0MzggMjg0Ljc3NTQ3LDM3OS4yMzY1OSAyOTYuNDcxNDUsMzgyLjk1MzgzIDMwMy4xMjUwOCwzNzkuMjU3NjMgMzA2LjEwMDEzLDM2OC4xNDk1NyAzMDcuOTA0ODMsMzU2LjIxNjcyIDMxMC43MTg0MywzNDMuODI0MSAzMTQuMzIxMzEsMzMxLjgwNzIzIDMxOC40OTM4MywzMjEuMDAxNjMgMzIwLjY1OTE3LDMxNS4xMTUyMyAzMjMuMTYzODIsMzA2Ljc2MTY5IDMyNS42OTc1MSwyOTcuMDUzNDcgMzI3Ljk0OTk1LDI4Ny4xMDMwMyAzMzAuMzg3ODYsMjc0LjU4Mjc3IDMzMS41MTY1OSwyNjYuMTQwNDMgMzMxLjQ2Njg5LDI2MC4wMTA0NyAzMzAuMzY5NTMsMjU0LjQyNzM5IDMyOC4wMzY5NywyNDQuMDA2MzYgMzI5LjEwMTk2LDIzOS43MDAyNiAzMzQuNzA1NTIsMjQwLjk5MzU3IDM0NS45ODg3MSwyNDcuMzcwNzUgMzU1LjY4OTMyLDI1Mi41OTU3NSAzNjQuNDEzNjMsMjU2LjE1OTAxIDM3MS4xNzUxMSwyNTcuNzMzMzEgMzc0Ljk4NzIsMjU2Ljk5MTQ1IDM3NS4yNzk0NiwyNTUuODI0NzcgMzc1LjEzNTAxLDI1My41ODgzNyAzNzQuNTk1OTMsMjUwLjYwMzc3IDM3My43MDQyOCwyNDcuMTkyNDkgMzcyLjUxNTI0LDI0MS44NDkwOSAzNzIuODU2NDIsMjM2LjA0MDg0IDM3NS4yMDkyLDIyNy4xMzk0NCAzODAuMDU0OTMsMjEyLjUxNjU5IDM4NC4wNDE1OCwyMDEuNjA4NzcgMzg4LjI5ODksMTkxLjI4Mjk2IDM5Mi4zMjI5MiwxODIuNjkwNDYgMzk1LjYwOTY1LDE3Ni45ODI1NSA0MDIuMTUyMjIsMTY3LjI3NDA3IDQxMC4wNTIxMywxNTQuNjM3IDQxOS43MjQxNywxMzguMzg5NDkgNDMxLjU4MzEyLDExNy44NDk2NyA0NDUuMzQ3MzksOTQuODg4MTc5IDQ1Ny4wNzc1Nyw3Ny42MDM4OTUgNDY2LjI0NDcxLDY2LjcxMDE4OCA0NzIuMzE5ODksNjIuOTIwNDI2IDQ3My41MjkyNyw2My42MDcyNzEgNDc0LjMyODg5LDY1Ljc2NzcwNCA0NzQuNzQ5NTMsNjkuNTUxNTY3IDQ3NC44MjE5Nyw3NS4xMDg3MDYgNDc1LjAzMjY3LDgwLjc5NTExOCA0NzUuNzMzMTQsODcuMjY3Nzg3IDQ3Ni44MTM3Myw5My43MzAwNzkgNDc4LjE2NDc3LDk5LjM4NTM1NiA0ODQuNzQ3NzQsMTE2LjkxMDY5IDQ5NS4wNDI1MSwxMzguNTg2NTIgNTA3LjQxMTY2LDE2MS4yMTI1NiA1MjAuMjE3NzcsMTgxLjU4ODUzIDUyOC43MjI2NywxOTMuNzIxMDggNTM0LjE2OTksMjAwLjQxOTUxIDUzOC4xMjM2MywyMDMuMjczMTEgNTQyLjE0ODAxLDIwMy44NzExNCA1NDUuMTEyOSwyMDMuNTk5NzIgNTQ4LjI3ODY4LDIwMi44NjA2OSA1NTEuMjY2MzksMjAxLjc2Njk0IDU1My42OTcwNCwyMDAuNDMxMzMgNTU2LjQ2NzA3LDE5OC42MjU4NiA1NTguMjY3OSwxOTguMDQyNzEgNTU5LjY2OTI0LDE5OC42OTQwMyA1NjEuMjQwNzksMjAwLjU5MTk3IDU2Mi40MTA3OSwyMDMuODgxNDMgNTYzLjU1MDE5LDIxMC4xNTUyOCA1NjQuNTYzNTEsMjE4Ljc1NDA3IDU2NS4zNTUzLDIyOS4wMTgzNyA1NjYuMjgxNTgsMjQxLjc1ODMgNTY3LjQwODI2LDI1MC4zNDE3MiA1NjguOTkxMzQsMjU2LjEyNjExIDU3MS4yODY4MywyNjAuNDY4OTkgNTc4LjM2Njk3LDI3MS42NDA2MyA1ODMuODI1MTgsMjgxLjc3NjcxIDU4Ny45NTM1NCwyOTEuNDgxNDcgNTkxLjA0NDE1LDMwMS4zNTkxNCA1OTIuNzEyNDksMzA3LjIxOTA2IDU5NC40NDAzMywzMTIuNDUzNTggNTk2LjAyMzc2LDMxNi40OTE2NCA1OTcuMjU4ODMsMzE4Ljc2MjE3IDU5OC41OTE2NiwzMjEuMTcwMSA2MDAuNDQxMTUsMzI1LjU4MjE0IDYwMi41NjI3MiwzMzEuMzcwMTMgNjA0LjcxMTc5LDMzNy45MDU5NCA2MDcuMTk3MzMsMzQ2LjkzODg3IDYwOC43ODgyOSwzNTUuNjkxNzcgNjA5LjY3MTQ4LDM2NS41NzE2OCA2MTAuMDMzNzEsMzc3Ljk4NTYzIDYxMC44OTEyMyw0MDEuNDY2NTYgNjEzLjg5NDU3LDQxMi43ODU2NCA2MjAuNzQzMzQsNDE0LjEyNjkgNjMzLjEzNzE1LDQwNy42NzQzNyA2MzguNzkzNTEsNDA0LjMxMzk3IDY0NC42MTYwMiw0MDEuMDIyMTUgNjQ5LjkxOTQ0LDM5OC4xNzY4NiA2NTQuMDE4NTYsMzk2LjE1NjAyIDY1OC4wMjQsMzk0LjIwMzU0IDY2My4wNzE4MywzOTEuNTQ0MzkgNjY4LjUxNTkzLDM4OC41MjgwNyA2NzMuNzEwMTcsMzg1LjUwNDEgNjg0Ljc5NDc0LDM3OS43NjYgNjk4LjYyMDc2LDM3NC4xOTE2NiA3MTUuMTExMDIsMzY4LjgwOTExIDczNC4xODgzLDM2My42NDY0MSA3ODAuOTE4OTEsMzUxLjg1NDk4IDgxMS4xNzEzNCwzNDMuNTUyMTggODMwLjUyNjQzLDMzNy4wNzU3NiA4NDQuNTY0OTksMzMwLjc2MzQ4IDg0NS4xNjg2LDMzMS4wNTU5MyA4NDUuNjYyOTEsMzMyLjQ0MTIgODQ1Ljk5NjkyLDMzNC42OTUxOCA4NDYuMTE5NTksMzM3LjU5Mzc4IDg0NS40NDgwMywzNDIuMjQwMTggODQzLjQ3Njk0LDM0OC42OTAxMyA4NDAuMjcxNzMsMzU2Ljc2MDE3IDgzNS44OTc3OSwzNjYuMjY2ODQgODMxLjQxOTU3LDM3NS45OTI3OSA4MjYuNzgyODIsMzg2LjkxNTc4IDgyMi41MzQ2NywzOTcuNjk5MDEgODE5LjIyMjI5LDQwNy4wMDU2OCA4MTMuNjk4ODgsNDIzLjIzOTI4IDgwNy41MTA1Niw0NDAuMTQ3MTkgODAwLjIyOTU1LDQ1OC44NjA3NiA3OTEuNDI4MDksNDgwLjUxMTM3IDc4Ni45MTQ4OCw0OTAuNzM2NDQgNzgyLjYwNzIzLDQ5OC44Njk2IDc3OC4xMTYzOCw1MDUuNTY2MDcgNzczLjA1MzU0LDUxMS40ODEwOSA3NjkuMjMwNTksNTE1LjU5NTI3IDc2Ni4wOTk5Myw1MTkuMTY4MTMgNzYzLjk4NDYzLDUyMS44MTY1NSA3NjMuMjA3NzMsNTIzLjE1NzM5IDc2My41MDY4Myw1MjMuOTU0NjYgNzY0LjMyMTIxLDUyNS4xMjI5IDc2NS41MjY0OCw1MjYuNTA1MDcgNzY2Ljk5ODI2LDUyNy45NDQxMiA3NjkuNDQ4ODUsNTI5LjQ5NzY2IDc3Mi45MTYxNCw1MzAuNTYzODMgNzc3LjU3MDA4LDUzMS4xNzc3NyA3ODMuNTgwNjcsNTMxLjM3NDYxIDc4OC41NDc1MSw1MzEuNDY0NTEgNzkyLjYxNDkzLDUzMS43MDkyOSA3OTUuMzYzMTksNTMyLjA3MTU2IDc5Ni4zNzI1NSw1MzIuNTEzOTQgNzk1LjEwNTE1LDUzNi4yNjg0MSA3OTEuODAzMDEsNTQyLjA0MTI0IDc4Ny4yMTYyMyw1NDguNjU0NzYgNzgyLjA5NDg5LDU1NC45MzEyOSA3NzAuNTg5OTksNTY4LjU3OTcgNzU4Ljc1ODEzLDU4My44OTkzMSA3NDkuMTQ1MjYsNTk3LjQ2MTkyIDc0NC4yOTczNSw2MDUuODM5MyA3NDMuNDczOTEsNjA4LjgyMzYyIDc0My4yMjExOSw2MTEuNDc1OTIgNzQzLjU0MDM0LDYxMy44ODQwNyA3NDQuNDMyNSw2MTYuMTM1OTQgNzQ4LjUxMDQxLDYyMC44MzM0OCA3NTUuNDY3NzgsNjI2LjI2MDY0IDc2My43ODU1OSw2MzEuMzY5NzMgNzcxLjk0NDc5LDYzNS4xMTMwNiA3NzUuMDE1NTgsNjM2LjM5MzQ5IDc3Ny42ODM3Niw2MzcuODQxOTggNzc5LjY2MzEsNjM5LjI4MDY4IDc4MC42NjczNSw2NDAuNTMxNzggNzgwLjA3NDQ2LDY0My4wMTUzNyA3NzcuNTMwNSw2NDUuOTg3MjEgNzc0LjA5NDI5LDY0OC40Nzk4IDc3MC44MjQ2NSw2NDkuNTI1NjYgNzY4LjIxMTM0LDY1MC4zNDY4NyA3NjIuNDQ0NDksNjUyLjU4Mjg0IDc1NC4zNzYyMiw2NTUuODkyMSA3NDQuODU4NjcsNjU5LjkzMzIgNzE2LjQ2MDA5LDY3Mi42ODExOSA2OTkuMjk1NjUsNjgxLjk3NDU3IDY5MC44NDUxMyw2ODkuNDY0NDkgNjg4LjU4ODMzLDY5Ni44MDIxMiA2OTAuNDAxMzksNzAzLjE5NjM2IDY5NS4xNjk1LDcxMS4yOTE0NCA3MDEuODg2MDIsNzE5LjY0NTM5IDcwOS41NDQzNSw3MjYuODE2MjggNzEyLjAxMzQxLDcyOS4wMTM2NCA3MTMuNzg2MjgsNzMxLjEyOTk5IDcxNC43MTU0LDczMi45NTAzNSA3MTQuNjUzMTgsNzM0LjI1OTcxIDcwMi4wMDQyMyw3MzYuMjE1MzEgNjc0LjU5MzQ3LDczNS45NTE3MyA2NDIuMzAwNiw3MzMuODU4OTEgNjE1LjAwNTMyLDczMC4zMjY3OCA1OTAuNjAyLDcyNS40OTMwNSA1NzMuMzgyNjksNzIxLjY0MzcyIDU2MS4xMzY5NCw3MTguMjM0MTggNTUxLjY1NDI5LDcxNC43MTk4MyA1NDQuNTY1MDYsNzExLjk5MDk3IDUzNS4xMjYyNCw3MDguNzQ0MDUgNTI0LjU2OTQzLDcwNS4zODU4MSA1MTQuMTI2MjIsNzAyLjMyMzAyIDUwMy44MDI3MSw2OTkuMjc5NzIgNDkzLjU3Mjk3LDY5NS45NzQ1NSA0ODQuNjE4MTksNjkyLjgwNjE4IDQ3OC4xMTk1OSw2OTAuMTczMyA0NzMuMTQwODcsNjg4LjA3MjA4IDQ2OC4zMjI4NSw2ODYuMzUxMzQgNDY0LjIxNTIyLDY4NS4xODg2NiA0NjEuMzY3NjIsNjg0Ljc2MTYzIDQ1OC42NDE0MSw2ODUuMDU1NTggNDU3LjE2MzQ2LDY4Ni41NjM1OSA0NTYuNTU0NjksNjkwLjIyNDg5IDQ1Ni40MzYwMSw2OTYuOTc4NzIgNDU3LjA4NDQ5LDcxMy4xMjcxOCA0NTguODg2MTYsNzMzLjE3NjczIDQ2MS42MjU0Miw3NTUuMTMyOTEgNDY1LjA4NjY0LDc3Ny4wMDEzIDQ2OC44NzQ1OSw3OTkuNTkwNjUgNDcwLjQ4MzA3LDgxMy41MjUzNSA0NzAuMDUyNTQsODIxLjQwNjgyIDQ2Ny43MjM0NSw4MjUuODM2NSA0NjMuNjk3NDIsODI4LjE2NDQ4IDQ1Ny44MjMxMyw4MjkuNzc4NzEgNDUyLjUyMjQ4LDgzMC4yMzEyNiA0NTAuMjE3NCw4MjkuMDc0MjEgNDUwLjIxNzc4LDgyOS4wNzQyNSA0NTAuMjE4MTYsODI5LjA3NDI4IDQ1MC4yMTg1Myw4MjkuMDc0MzIgWlxcXCIgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4wNzI4MDE1OTtzdHJva2Utb3BhY2l0eToxXFxcIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsIi8qXG4gKiBBIGZhc3QgamF2YXNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiBzaW1wbGV4IG5vaXNlIGJ5IEpvbmFzIFdhZ25lclxuXG5CYXNlZCBvbiBhIHNwZWVkLWltcHJvdmVkIHNpbXBsZXggbm9pc2UgYWxnb3JpdGhtIGZvciAyRCwgM0QgYW5kIDREIGluIEphdmEuXG5XaGljaCBpcyBiYXNlZCBvbiBleGFtcGxlIGNvZGUgYnkgU3RlZmFuIEd1c3RhdnNvbiAoc3RlZ3VAaXRuLmxpdS5zZSkuXG5XaXRoIE9wdGltaXNhdGlvbnMgYnkgUGV0ZXIgRWFzdG1hbiAocGVhc3RtYW5AZHJpenpsZS5zdGFuZm9yZC5lZHUpLlxuQmV0dGVyIHJhbmsgb3JkZXJpbmcgbWV0aG9kIGJ5IFN0ZWZhbiBHdXN0YXZzb24gaW4gMjAxMi5cblxuXG4gQ29weXJpZ2h0IChjKSAyMDE4IEpvbmFzIFdhZ25lclxuXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gU09GVFdBUkUuXG4gKi9cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBGMiA9IDAuNSAqIChNYXRoLnNxcnQoMy4wKSAtIDEuMCk7XG4gIHZhciBHMiA9ICgzLjAgLSBNYXRoLnNxcnQoMy4wKSkgLyA2LjA7XG4gIHZhciBGMyA9IDEuMCAvIDMuMDtcbiAgdmFyIEczID0gMS4wIC8gNi4wO1xuICB2YXIgRjQgPSAoTWF0aC5zcXJ0KDUuMCkgLSAxLjApIC8gNC4wO1xuICB2YXIgRzQgPSAoNS4wIC0gTWF0aC5zcXJ0KDUuMCkpIC8gMjAuMDtcblxuICBmdW5jdGlvbiBTaW1wbGV4Tm9pc2UocmFuZG9tT3JTZWVkKSB7XG4gICAgdmFyIHJhbmRvbTtcbiAgICBpZiAodHlwZW9mIHJhbmRvbU9yU2VlZCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByYW5kb20gPSByYW5kb21PclNlZWQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKHJhbmRvbU9yU2VlZCkge1xuICAgICAgcmFuZG9tID0gYWxlYShyYW5kb21PclNlZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5kb20gPSBNYXRoLnJhbmRvbTtcbiAgICB9XG4gICAgdGhpcy5wID0gYnVpbGRQZXJtdXRhdGlvblRhYmxlKHJhbmRvbSk7XG4gICAgdGhpcy5wZXJtID0gbmV3IFVpbnQ4QXJyYXkoNTEyKTtcbiAgICB0aGlzLnBlcm1Nb2QxMiA9IG5ldyBVaW50OEFycmF5KDUxMik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1MTI7IGkrKykge1xuICAgICAgdGhpcy5wZXJtW2ldID0gdGhpcy5wW2kgJiAyNTVdO1xuICAgICAgdGhpcy5wZXJtTW9kMTJbaV0gPSB0aGlzLnBlcm1baV0gJSAxMjtcbiAgICB9XG5cbiAgfVxuICBTaW1wbGV4Tm9pc2UucHJvdG90eXBlID0ge1xuICAgIGdyYWQzOiBuZXcgRmxvYXQzMkFycmF5KFsxLCAxLCAwLFxuICAgICAgLTEsIDEsIDAsXG4gICAgICAxLCAtMSwgMCxcblxuICAgICAgLTEsIC0xLCAwLFxuICAgICAgMSwgMCwgMSxcbiAgICAgIC0xLCAwLCAxLFxuXG4gICAgICAxLCAwLCAtMSxcbiAgICAgIC0xLCAwLCAtMSxcbiAgICAgIDAsIDEsIDEsXG5cbiAgICAgIDAsIC0xLCAxLFxuICAgICAgMCwgMSwgLTEsXG4gICAgICAwLCAtMSwgLTFdKSxcbiAgICBncmFkNDogbmV3IEZsb2F0MzJBcnJheShbMCwgMSwgMSwgMSwgMCwgMSwgMSwgLTEsIDAsIDEsIC0xLCAxLCAwLCAxLCAtMSwgLTEsXG4gICAgICAwLCAtMSwgMSwgMSwgMCwgLTEsIDEsIC0xLCAwLCAtMSwgLTEsIDEsIDAsIC0xLCAtMSwgLTEsXG4gICAgICAxLCAwLCAxLCAxLCAxLCAwLCAxLCAtMSwgMSwgMCwgLTEsIDEsIDEsIDAsIC0xLCAtMSxcbiAgICAgIC0xLCAwLCAxLCAxLCAtMSwgMCwgMSwgLTEsIC0xLCAwLCAtMSwgMSwgLTEsIDAsIC0xLCAtMSxcbiAgICAgIDEsIDEsIDAsIDEsIDEsIDEsIDAsIC0xLCAxLCAtMSwgMCwgMSwgMSwgLTEsIDAsIC0xLFxuICAgICAgLTEsIDEsIDAsIDEsIC0xLCAxLCAwLCAtMSwgLTEsIC0xLCAwLCAxLCAtMSwgLTEsIDAsIC0xLFxuICAgICAgMSwgMSwgMSwgMCwgMSwgMSwgLTEsIDAsIDEsIC0xLCAxLCAwLCAxLCAtMSwgLTEsIDAsXG4gICAgICAtMSwgMSwgMSwgMCwgLTEsIDEsIC0xLCAwLCAtMSwgLTEsIDEsIDAsIC0xLCAtMSwgLTEsIDBdKSxcbiAgICBub2lzZTJEOiBmdW5jdGlvbih4aW4sIHlpbikge1xuICAgICAgdmFyIHBlcm1Nb2QxMiA9IHRoaXMucGVybU1vZDEyO1xuICAgICAgdmFyIHBlcm0gPSB0aGlzLnBlcm07XG4gICAgICB2YXIgZ3JhZDMgPSB0aGlzLmdyYWQzO1xuICAgICAgdmFyIG4wID0gMDsgLy8gTm9pc2UgY29udHJpYnV0aW9ucyBmcm9tIHRoZSB0aHJlZSBjb3JuZXJzXG4gICAgICB2YXIgbjEgPSAwO1xuICAgICAgdmFyIG4yID0gMDtcbiAgICAgIC8vIFNrZXcgdGhlIGlucHV0IHNwYWNlIHRvIGRldGVybWluZSB3aGljaCBzaW1wbGV4IGNlbGwgd2UncmUgaW5cbiAgICAgIHZhciBzID0gKHhpbiArIHlpbikgKiBGMjsgLy8gSGFpcnkgZmFjdG9yIGZvciAyRFxuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKHhpbiArIHMpO1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKHlpbiArIHMpO1xuICAgICAgdmFyIHQgPSAoaSArIGopICogRzI7XG4gICAgICB2YXIgWDAgPSBpIC0gdDsgLy8gVW5za2V3IHRoZSBjZWxsIG9yaWdpbiBiYWNrIHRvICh4LHkpIHNwYWNlXG4gICAgICB2YXIgWTAgPSBqIC0gdDtcbiAgICAgIHZhciB4MCA9IHhpbiAtIFgwOyAvLyBUaGUgeCx5IGRpc3RhbmNlcyBmcm9tIHRoZSBjZWxsIG9yaWdpblxuICAgICAgdmFyIHkwID0geWluIC0gWTA7XG4gICAgICAvLyBGb3IgdGhlIDJEIGNhc2UsIHRoZSBzaW1wbGV4IHNoYXBlIGlzIGFuIGVxdWlsYXRlcmFsIHRyaWFuZ2xlLlxuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggd2UgYXJlIGluLlxuICAgICAgdmFyIGkxLCBqMTsgLy8gT2Zmc2V0cyBmb3Igc2Vjb25kIChtaWRkbGUpIGNvcm5lciBvZiBzaW1wbGV4IGluIChpLGopIGNvb3Jkc1xuICAgICAgaWYgKHgwID4geTApIHtcbiAgICAgICAgaTEgPSAxO1xuICAgICAgICBqMSA9IDA7XG4gICAgICB9IC8vIGxvd2VyIHRyaWFuZ2xlLCBYWSBvcmRlcjogKDAsMCktPigxLDApLT4oMSwxKVxuICAgICAgZWxzZSB7XG4gICAgICAgIGkxID0gMDtcbiAgICAgICAgajEgPSAxO1xuICAgICAgfSAvLyB1cHBlciB0cmlhbmdsZSwgWVggb3JkZXI6ICgwLDApLT4oMCwxKS0+KDEsMSlcbiAgICAgIC8vIEEgc3RlcCBvZiAoMSwwKSBpbiAoaSxqKSBtZWFucyBhIHN0ZXAgb2YgKDEtYywtYykgaW4gKHgseSksIGFuZFxuICAgICAgLy8gYSBzdGVwIG9mICgwLDEpIGluIChpLGopIG1lYW5zIGEgc3RlcCBvZiAoLWMsMS1jKSBpbiAoeCx5KSwgd2hlcmVcbiAgICAgIC8vIGMgPSAoMy1zcXJ0KDMpKS82XG4gICAgICB2YXIgeDEgPSB4MCAtIGkxICsgRzI7IC8vIE9mZnNldHMgZm9yIG1pZGRsZSBjb3JuZXIgaW4gKHgseSkgdW5za2V3ZWQgY29vcmRzXG4gICAgICB2YXIgeTEgPSB5MCAtIGoxICsgRzI7XG4gICAgICB2YXIgeDIgPSB4MCAtIDEuMCArIDIuMCAqIEcyOyAvLyBPZmZzZXRzIGZvciBsYXN0IGNvcm5lciBpbiAoeCx5KSB1bnNrZXdlZCBjb29yZHNcbiAgICAgIHZhciB5MiA9IHkwIC0gMS4wICsgMi4wICogRzI7XG4gICAgICAvLyBXb3JrIG91dCB0aGUgaGFzaGVkIGdyYWRpZW50IGluZGljZXMgb2YgdGhlIHRocmVlIHNpbXBsZXggY29ybmVyc1xuICAgICAgdmFyIGlpID0gaSAmIDI1NTtcbiAgICAgIHZhciBqaiA9IGogJiAyNTU7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRyaWJ1dGlvbiBmcm9tIHRoZSB0aHJlZSBjb3JuZXJzXG4gICAgICB2YXIgdDAgPSAwLjUgLSB4MCAqIHgwIC0geTAgKiB5MDtcbiAgICAgIGlmICh0MCA+PSAwKSB7XG4gICAgICAgIHZhciBnaTAgPSBwZXJtTW9kMTJbaWkgKyBwZXJtW2pqXV0gKiAzO1xuICAgICAgICB0MCAqPSB0MDtcbiAgICAgICAgbjAgPSB0MCAqIHQwICogKGdyYWQzW2dpMF0gKiB4MCArIGdyYWQzW2dpMCArIDFdICogeTApOyAvLyAoeCx5KSBvZiBncmFkMyB1c2VkIGZvciAyRCBncmFkaWVudFxuICAgICAgfVxuICAgICAgdmFyIHQxID0gMC41IC0geDEgKiB4MSAtIHkxICogeTE7XG4gICAgICBpZiAodDEgPj0gMCkge1xuICAgICAgICB2YXIgZ2kxID0gcGVybU1vZDEyW2lpICsgaTEgKyBwZXJtW2pqICsgajFdXSAqIDM7XG4gICAgICAgIHQxICo9IHQxO1xuICAgICAgICBuMSA9IHQxICogdDEgKiAoZ3JhZDNbZ2kxXSAqIHgxICsgZ3JhZDNbZ2kxICsgMV0gKiB5MSk7XG4gICAgICB9XG4gICAgICB2YXIgdDIgPSAwLjUgLSB4MiAqIHgyIC0geTIgKiB5MjtcbiAgICAgIGlmICh0MiA+PSAwKSB7XG4gICAgICAgIHZhciBnaTIgPSBwZXJtTW9kMTJbaWkgKyAxICsgcGVybVtqaiArIDFdXSAqIDM7XG4gICAgICAgIHQyICo9IHQyO1xuICAgICAgICBuMiA9IHQyICogdDIgKiAoZ3JhZDNbZ2kyXSAqIHgyICsgZ3JhZDNbZ2kyICsgMV0gKiB5Mik7XG4gICAgICB9XG4gICAgICAvLyBBZGQgY29udHJpYnV0aW9ucyBmcm9tIGVhY2ggY29ybmVyIHRvIGdldCB0aGUgZmluYWwgbm9pc2UgdmFsdWUuXG4gICAgICAvLyBUaGUgcmVzdWx0IGlzIHNjYWxlZCB0byByZXR1cm4gdmFsdWVzIGluIHRoZSBpbnRlcnZhbCBbLTEsMV0uXG4gICAgICByZXR1cm4gNzAuMCAqIChuMCArIG4xICsgbjIpO1xuICAgIH0sXG4gICAgLy8gM0Qgc2ltcGxleCBub2lzZVxuICAgIG5vaXNlM0Q6IGZ1bmN0aW9uKHhpbiwgeWluLCB6aW4pIHtcbiAgICAgIHZhciBwZXJtTW9kMTIgPSB0aGlzLnBlcm1Nb2QxMjtcbiAgICAgIHZhciBwZXJtID0gdGhpcy5wZXJtO1xuICAgICAgdmFyIGdyYWQzID0gdGhpcy5ncmFkMztcbiAgICAgIHZhciBuMCwgbjEsIG4yLCBuMzsgLy8gTm9pc2UgY29udHJpYnV0aW9ucyBmcm9tIHRoZSBmb3VyIGNvcm5lcnNcbiAgICAgIC8vIFNrZXcgdGhlIGlucHV0IHNwYWNlIHRvIGRldGVybWluZSB3aGljaCBzaW1wbGV4IGNlbGwgd2UncmUgaW5cbiAgICAgIHZhciBzID0gKHhpbiArIHlpbiArIHppbikgKiBGMzsgLy8gVmVyeSBuaWNlIGFuZCBzaW1wbGUgc2tldyBmYWN0b3IgZm9yIDNEXG4gICAgICB2YXIgaSA9IE1hdGguZmxvb3IoeGluICsgcyk7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoeWluICsgcyk7XG4gICAgICB2YXIgayA9IE1hdGguZmxvb3IoemluICsgcyk7XG4gICAgICB2YXIgdCA9IChpICsgaiArIGspICogRzM7XG4gICAgICB2YXIgWDAgPSBpIC0gdDsgLy8gVW5za2V3IHRoZSBjZWxsIG9yaWdpbiBiYWNrIHRvICh4LHkseikgc3BhY2VcbiAgICAgIHZhciBZMCA9IGogLSB0O1xuICAgICAgdmFyIFowID0gayAtIHQ7XG4gICAgICB2YXIgeDAgPSB4aW4gLSBYMDsgLy8gVGhlIHgseSx6IGRpc3RhbmNlcyBmcm9tIHRoZSBjZWxsIG9yaWdpblxuICAgICAgdmFyIHkwID0geWluIC0gWTA7XG4gICAgICB2YXIgejAgPSB6aW4gLSBaMDtcbiAgICAgIC8vIEZvciB0aGUgM0QgY2FzZSwgdGhlIHNpbXBsZXggc2hhcGUgaXMgYSBzbGlnaHRseSBpcnJlZ3VsYXIgdGV0cmFoZWRyb24uXG4gICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggc2ltcGxleCB3ZSBhcmUgaW4uXG4gICAgICB2YXIgaTEsIGoxLCBrMTsgLy8gT2Zmc2V0cyBmb3Igc2Vjb25kIGNvcm5lciBvZiBzaW1wbGV4IGluIChpLGosaykgY29vcmRzXG4gICAgICB2YXIgaTIsIGoyLCBrMjsgLy8gT2Zmc2V0cyBmb3IgdGhpcmQgY29ybmVyIG9mIHNpbXBsZXggaW4gKGksaixrKSBjb29yZHNcbiAgICAgIGlmICh4MCA+PSB5MCkge1xuICAgICAgICBpZiAoeTAgPj0gejApIHtcbiAgICAgICAgICBpMSA9IDE7XG4gICAgICAgICAgajEgPSAwO1xuICAgICAgICAgIGsxID0gMDtcbiAgICAgICAgICBpMiA9IDE7XG4gICAgICAgICAgajIgPSAxO1xuICAgICAgICAgIGsyID0gMDtcbiAgICAgICAgfSAvLyBYIFkgWiBvcmRlclxuICAgICAgICBlbHNlIGlmICh4MCA+PSB6MCkge1xuICAgICAgICAgIGkxID0gMTtcbiAgICAgICAgICBqMSA9IDA7XG4gICAgICAgICAgazEgPSAwO1xuICAgICAgICAgIGkyID0gMTtcbiAgICAgICAgICBqMiA9IDA7XG4gICAgICAgICAgazIgPSAxO1xuICAgICAgICB9IC8vIFggWiBZIG9yZGVyXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGkxID0gMDtcbiAgICAgICAgICBqMSA9IDA7XG4gICAgICAgICAgazEgPSAxO1xuICAgICAgICAgIGkyID0gMTtcbiAgICAgICAgICBqMiA9IDA7XG4gICAgICAgICAgazIgPSAxO1xuICAgICAgICB9IC8vIFogWCBZIG9yZGVyXG4gICAgICB9XG4gICAgICBlbHNlIHsgLy8geDA8eTBcbiAgICAgICAgaWYgKHkwIDwgejApIHtcbiAgICAgICAgICBpMSA9IDA7XG4gICAgICAgICAgajEgPSAwO1xuICAgICAgICAgIGsxID0gMTtcbiAgICAgICAgICBpMiA9IDA7XG4gICAgICAgICAgajIgPSAxO1xuICAgICAgICAgIGsyID0gMTtcbiAgICAgICAgfSAvLyBaIFkgWCBvcmRlclxuICAgICAgICBlbHNlIGlmICh4MCA8IHowKSB7XG4gICAgICAgICAgaTEgPSAwO1xuICAgICAgICAgIGoxID0gMTtcbiAgICAgICAgICBrMSA9IDA7XG4gICAgICAgICAgaTIgPSAwO1xuICAgICAgICAgIGoyID0gMTtcbiAgICAgICAgICBrMiA9IDE7XG4gICAgICAgIH0gLy8gWSBaIFggb3JkZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaTEgPSAwO1xuICAgICAgICAgIGoxID0gMTtcbiAgICAgICAgICBrMSA9IDA7XG4gICAgICAgICAgaTIgPSAxO1xuICAgICAgICAgIGoyID0gMTtcbiAgICAgICAgICBrMiA9IDA7XG4gICAgICAgIH0gLy8gWSBYIFogb3JkZXJcbiAgICAgIH1cbiAgICAgIC8vIEEgc3RlcCBvZiAoMSwwLDApIGluIChpLGosaykgbWVhbnMgYSBzdGVwIG9mICgxLWMsLWMsLWMpIGluICh4LHkseiksXG4gICAgICAvLyBhIHN0ZXAgb2YgKDAsMSwwKSBpbiAoaSxqLGspIG1lYW5zIGEgc3RlcCBvZiAoLWMsMS1jLC1jKSBpbiAoeCx5LHopLCBhbmRcbiAgICAgIC8vIGEgc3RlcCBvZiAoMCwwLDEpIGluIChpLGosaykgbWVhbnMgYSBzdGVwIG9mICgtYywtYywxLWMpIGluICh4LHkseiksIHdoZXJlXG4gICAgICAvLyBjID0gMS82LlxuICAgICAgdmFyIHgxID0geDAgLSBpMSArIEczOyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgY29ybmVyIGluICh4LHkseikgY29vcmRzXG4gICAgICB2YXIgeTEgPSB5MCAtIGoxICsgRzM7XG4gICAgICB2YXIgejEgPSB6MCAtIGsxICsgRzM7XG4gICAgICB2YXIgeDIgPSB4MCAtIGkyICsgMi4wICogRzM7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBpbiAoeCx5LHopIGNvb3Jkc1xuICAgICAgdmFyIHkyID0geTAgLSBqMiArIDIuMCAqIEczO1xuICAgICAgdmFyIHoyID0gejAgLSBrMiArIDIuMCAqIEczO1xuICAgICAgdmFyIHgzID0geDAgLSAxLjAgKyAzLjAgKiBHMzsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSx6KSBjb29yZHNcbiAgICAgIHZhciB5MyA9IHkwIC0gMS4wICsgMy4wICogRzM7XG4gICAgICB2YXIgejMgPSB6MCAtIDEuMCArIDMuMCAqIEczO1xuICAgICAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSBmb3VyIHNpbXBsZXggY29ybmVyc1xuICAgICAgdmFyIGlpID0gaSAmIDI1NTtcbiAgICAgIHZhciBqaiA9IGogJiAyNTU7XG4gICAgICB2YXIga2sgPSBrICYgMjU1O1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjb250cmlidXRpb24gZnJvbSB0aGUgZm91ciBjb3JuZXJzXG4gICAgICB2YXIgdDAgPSAwLjYgLSB4MCAqIHgwIC0geTAgKiB5MCAtIHowICogejA7XG4gICAgICBpZiAodDAgPCAwKSBuMCA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kwID0gcGVybU1vZDEyW2lpICsgcGVybVtqaiArIHBlcm1ba2tdXV0gKiAzO1xuICAgICAgICB0MCAqPSB0MDtcbiAgICAgICAgbjAgPSB0MCAqIHQwICogKGdyYWQzW2dpMF0gKiB4MCArIGdyYWQzW2dpMCArIDFdICogeTAgKyBncmFkM1tnaTAgKyAyXSAqIHowKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MSA9IDAuNiAtIHgxICogeDEgLSB5MSAqIHkxIC0gejEgKiB6MTtcbiAgICAgIGlmICh0MSA8IDApIG4xID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTEgPSBwZXJtTW9kMTJbaWkgKyBpMSArIHBlcm1bamogKyBqMSArIHBlcm1ba2sgKyBrMV1dXSAqIDM7XG4gICAgICAgIHQxICo9IHQxO1xuICAgICAgICBuMSA9IHQxICogdDEgKiAoZ3JhZDNbZ2kxXSAqIHgxICsgZ3JhZDNbZ2kxICsgMV0gKiB5MSArIGdyYWQzW2dpMSArIDJdICogejEpO1xuICAgICAgfVxuICAgICAgdmFyIHQyID0gMC42IC0geDIgKiB4MiAtIHkyICogeTIgLSB6MiAqIHoyO1xuICAgICAgaWYgKHQyIDwgMCkgbjIgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMiA9IHBlcm1Nb2QxMltpaSArIGkyICsgcGVybVtqaiArIGoyICsgcGVybVtrayArIGsyXV1dICogMztcbiAgICAgICAgdDIgKj0gdDI7XG4gICAgICAgIG4yID0gdDIgKiB0MiAqIChncmFkM1tnaTJdICogeDIgKyBncmFkM1tnaTIgKyAxXSAqIHkyICsgZ3JhZDNbZ2kyICsgMl0gKiB6Mik7XG4gICAgICB9XG4gICAgICB2YXIgdDMgPSAwLjYgLSB4MyAqIHgzIC0geTMgKiB5MyAtIHozICogejM7XG4gICAgICBpZiAodDMgPCAwKSBuMyA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kzID0gcGVybU1vZDEyW2lpICsgMSArIHBlcm1bamogKyAxICsgcGVybVtrayArIDFdXV0gKiAzO1xuICAgICAgICB0MyAqPSB0MztcbiAgICAgICAgbjMgPSB0MyAqIHQzICogKGdyYWQzW2dpM10gKiB4MyArIGdyYWQzW2dpMyArIDFdICogeTMgKyBncmFkM1tnaTMgKyAyXSAqIHozKTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCBjb250cmlidXRpb25zIGZyb20gZWFjaCBjb3JuZXIgdG8gZ2V0IHRoZSBmaW5hbCBub2lzZSB2YWx1ZS5cbiAgICAgIC8vIFRoZSByZXN1bHQgaXMgc2NhbGVkIHRvIHN0YXkganVzdCBpbnNpZGUgWy0xLDFdXG4gICAgICByZXR1cm4gMzIuMCAqIChuMCArIG4xICsgbjIgKyBuMyk7XG4gICAgfSxcbiAgICAvLyA0RCBzaW1wbGV4IG5vaXNlLCBiZXR0ZXIgc2ltcGxleCByYW5rIG9yZGVyaW5nIG1ldGhvZCAyMDEyLTAzLTA5XG4gICAgbm9pc2U0RDogZnVuY3Rpb24oeCwgeSwgeiwgdykge1xuICAgICAgdmFyIHBlcm0gPSB0aGlzLnBlcm07XG4gICAgICB2YXIgZ3JhZDQgPSB0aGlzLmdyYWQ0O1xuXG4gICAgICB2YXIgbjAsIG4xLCBuMiwgbjMsIG40OyAvLyBOb2lzZSBjb250cmlidXRpb25zIGZyb20gdGhlIGZpdmUgY29ybmVyc1xuICAgICAgLy8gU2tldyB0aGUgKHgseSx6LHcpIHNwYWNlIHRvIGRldGVybWluZSB3aGljaCBjZWxsIG9mIDI0IHNpbXBsaWNlcyB3ZSdyZSBpblxuICAgICAgdmFyIHMgPSAoeCArIHkgKyB6ICsgdykgKiBGNDsgLy8gRmFjdG9yIGZvciA0RCBza2V3aW5nXG4gICAgICB2YXIgaSA9IE1hdGguZmxvb3IoeCArIHMpO1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKHkgKyBzKTtcbiAgICAgIHZhciBrID0gTWF0aC5mbG9vcih6ICsgcyk7XG4gICAgICB2YXIgbCA9IE1hdGguZmxvb3IodyArIHMpO1xuICAgICAgdmFyIHQgPSAoaSArIGogKyBrICsgbCkgKiBHNDsgLy8gRmFjdG9yIGZvciA0RCB1bnNrZXdpbmdcbiAgICAgIHZhciBYMCA9IGkgLSB0OyAvLyBVbnNrZXcgdGhlIGNlbGwgb3JpZ2luIGJhY2sgdG8gKHgseSx6LHcpIHNwYWNlXG4gICAgICB2YXIgWTAgPSBqIC0gdDtcbiAgICAgIHZhciBaMCA9IGsgLSB0O1xuICAgICAgdmFyIFcwID0gbCAtIHQ7XG4gICAgICB2YXIgeDAgPSB4IC0gWDA7IC8vIFRoZSB4LHkseix3IGRpc3RhbmNlcyBmcm9tIHRoZSBjZWxsIG9yaWdpblxuICAgICAgdmFyIHkwID0geSAtIFkwO1xuICAgICAgdmFyIHowID0geiAtIFowO1xuICAgICAgdmFyIHcwID0gdyAtIFcwO1xuICAgICAgLy8gRm9yIHRoZSA0RCBjYXNlLCB0aGUgc2ltcGxleCBpcyBhIDREIHNoYXBlIEkgd29uJ3QgZXZlbiB0cnkgdG8gZGVzY3JpYmUuXG4gICAgICAvLyBUbyBmaW5kIG91dCB3aGljaCBvZiB0aGUgMjQgcG9zc2libGUgc2ltcGxpY2VzIHdlJ3JlIGluLCB3ZSBuZWVkIHRvXG4gICAgICAvLyBkZXRlcm1pbmUgdGhlIG1hZ25pdHVkZSBvcmRlcmluZyBvZiB4MCwgeTAsIHowIGFuZCB3MC5cbiAgICAgIC8vIFNpeCBwYWlyLXdpc2UgY29tcGFyaXNvbnMgYXJlIHBlcmZvcm1lZCBiZXR3ZWVuIGVhY2ggcG9zc2libGUgcGFpclxuICAgICAgLy8gb2YgdGhlIGZvdXIgY29vcmRpbmF0ZXMsIGFuZCB0aGUgcmVzdWx0cyBhcmUgdXNlZCB0byByYW5rIHRoZSBudW1iZXJzLlxuICAgICAgdmFyIHJhbmt4ID0gMDtcbiAgICAgIHZhciByYW5reSA9IDA7XG4gICAgICB2YXIgcmFua3ogPSAwO1xuICAgICAgdmFyIHJhbmt3ID0gMDtcbiAgICAgIGlmICh4MCA+IHkwKSByYW5reCsrO1xuICAgICAgZWxzZSByYW5reSsrO1xuICAgICAgaWYgKHgwID4gejApIHJhbmt4Kys7XG4gICAgICBlbHNlIHJhbmt6Kys7XG4gICAgICBpZiAoeDAgPiB3MCkgcmFua3grKztcbiAgICAgIGVsc2UgcmFua3crKztcbiAgICAgIGlmICh5MCA+IHowKSByYW5reSsrO1xuICAgICAgZWxzZSByYW5reisrO1xuICAgICAgaWYgKHkwID4gdzApIHJhbmt5Kys7XG4gICAgICBlbHNlIHJhbmt3Kys7XG4gICAgICBpZiAoejAgPiB3MCkgcmFua3orKztcbiAgICAgIGVsc2UgcmFua3crKztcbiAgICAgIHZhciBpMSwgajEsIGsxLCBsMTsgLy8gVGhlIGludGVnZXIgb2Zmc2V0cyBmb3IgdGhlIHNlY29uZCBzaW1wbGV4IGNvcm5lclxuICAgICAgdmFyIGkyLCBqMiwgazIsIGwyOyAvLyBUaGUgaW50ZWdlciBvZmZzZXRzIGZvciB0aGUgdGhpcmQgc2ltcGxleCBjb3JuZXJcbiAgICAgIHZhciBpMywgajMsIGszLCBsMzsgLy8gVGhlIGludGVnZXIgb2Zmc2V0cyBmb3IgdGhlIGZvdXJ0aCBzaW1wbGV4IGNvcm5lclxuICAgICAgLy8gc2ltcGxleFtjXSBpcyBhIDQtdmVjdG9yIHdpdGggdGhlIG51bWJlcnMgMCwgMSwgMiBhbmQgMyBpbiBzb21lIG9yZGVyLlxuICAgICAgLy8gTWFueSB2YWx1ZXMgb2YgYyB3aWxsIG5ldmVyIG9jY3VyLCBzaW5jZSBlLmcuIHg+eT56PncgbWFrZXMgeDx6LCB5PHcgYW5kIHg8d1xuICAgICAgLy8gaW1wb3NzaWJsZS4gT25seSB0aGUgMjQgaW5kaWNlcyB3aGljaCBoYXZlIG5vbi16ZXJvIGVudHJpZXMgbWFrZSBhbnkgc2Vuc2UuXG4gICAgICAvLyBXZSB1c2UgYSB0aHJlc2hvbGRpbmcgdG8gc2V0IHRoZSBjb29yZGluYXRlcyBpbiB0dXJuIGZyb20gdGhlIGxhcmdlc3QgbWFnbml0dWRlLlxuICAgICAgLy8gUmFuayAzIGRlbm90ZXMgdGhlIGxhcmdlc3QgY29vcmRpbmF0ZS5cbiAgICAgIGkxID0gcmFua3ggPj0gMyA/IDEgOiAwO1xuICAgICAgajEgPSByYW5reSA+PSAzID8gMSA6IDA7XG4gICAgICBrMSA9IHJhbmt6ID49IDMgPyAxIDogMDtcbiAgICAgIGwxID0gcmFua3cgPj0gMyA/IDEgOiAwO1xuICAgICAgLy8gUmFuayAyIGRlbm90ZXMgdGhlIHNlY29uZCBsYXJnZXN0IGNvb3JkaW5hdGUuXG4gICAgICBpMiA9IHJhbmt4ID49IDIgPyAxIDogMDtcbiAgICAgIGoyID0gcmFua3kgPj0gMiA/IDEgOiAwO1xuICAgICAgazIgPSByYW5reiA+PSAyID8gMSA6IDA7XG4gICAgICBsMiA9IHJhbmt3ID49IDIgPyAxIDogMDtcbiAgICAgIC8vIFJhbmsgMSBkZW5vdGVzIHRoZSBzZWNvbmQgc21hbGxlc3QgY29vcmRpbmF0ZS5cbiAgICAgIGkzID0gcmFua3ggPj0gMSA/IDEgOiAwO1xuICAgICAgajMgPSByYW5reSA+PSAxID8gMSA6IDA7XG4gICAgICBrMyA9IHJhbmt6ID49IDEgPyAxIDogMDtcbiAgICAgIGwzID0gcmFua3cgPj0gMSA/IDEgOiAwO1xuICAgICAgLy8gVGhlIGZpZnRoIGNvcm5lciBoYXMgYWxsIGNvb3JkaW5hdGUgb2Zmc2V0cyA9IDEsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSB0aGF0LlxuICAgICAgdmFyIHgxID0geDAgLSBpMSArIEc0OyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgY29ybmVyIGluICh4LHkseix3KSBjb29yZHNcbiAgICAgIHZhciB5MSA9IHkwIC0gajEgKyBHNDtcbiAgICAgIHZhciB6MSA9IHowIC0gazEgKyBHNDtcbiAgICAgIHZhciB3MSA9IHcwIC0gbDEgKyBHNDtcbiAgICAgIHZhciB4MiA9IHgwIC0gaTIgKyAyLjAgKiBHNDsgLy8gT2Zmc2V0cyBmb3IgdGhpcmQgY29ybmVyIGluICh4LHkseix3KSBjb29yZHNcbiAgICAgIHZhciB5MiA9IHkwIC0gajIgKyAyLjAgKiBHNDtcbiAgICAgIHZhciB6MiA9IHowIC0gazIgKyAyLjAgKiBHNDtcbiAgICAgIHZhciB3MiA9IHcwIC0gbDIgKyAyLjAgKiBHNDtcbiAgICAgIHZhciB4MyA9IHgwIC0gaTMgKyAzLjAgKiBHNDsgLy8gT2Zmc2V0cyBmb3IgZm91cnRoIGNvcm5lciBpbiAoeCx5LHosdykgY29vcmRzXG4gICAgICB2YXIgeTMgPSB5MCAtIGozICsgMy4wICogRzQ7XG4gICAgICB2YXIgejMgPSB6MCAtIGszICsgMy4wICogRzQ7XG4gICAgICB2YXIgdzMgPSB3MCAtIGwzICsgMy4wICogRzQ7XG4gICAgICB2YXIgeDQgPSB4MCAtIDEuMCArIDQuMCAqIEc0OyAvLyBPZmZzZXRzIGZvciBsYXN0IGNvcm5lciBpbiAoeCx5LHosdykgY29vcmRzXG4gICAgICB2YXIgeTQgPSB5MCAtIDEuMCArIDQuMCAqIEc0O1xuICAgICAgdmFyIHo0ID0gejAgLSAxLjAgKyA0LjAgKiBHNDtcbiAgICAgIHZhciB3NCA9IHcwIC0gMS4wICsgNC4wICogRzQ7XG4gICAgICAvLyBXb3JrIG91dCB0aGUgaGFzaGVkIGdyYWRpZW50IGluZGljZXMgb2YgdGhlIGZpdmUgc2ltcGxleCBjb3JuZXJzXG4gICAgICB2YXIgaWkgPSBpICYgMjU1O1xuICAgICAgdmFyIGpqID0gaiAmIDI1NTtcbiAgICAgIHZhciBrayA9IGsgJiAyNTU7XG4gICAgICB2YXIgbGwgPSBsICYgMjU1O1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjb250cmlidXRpb24gZnJvbSB0aGUgZml2ZSBjb3JuZXJzXG4gICAgICB2YXIgdDAgPSAwLjYgLSB4MCAqIHgwIC0geTAgKiB5MCAtIHowICogejAgLSB3MCAqIHcwO1xuICAgICAgaWYgKHQwIDwgMCkgbjAgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMCA9IChwZXJtW2lpICsgcGVybVtqaiArIHBlcm1ba2sgKyBwZXJtW2xsXV1dXSAlIDMyKSAqIDQ7XG4gICAgICAgIHQwICo9IHQwO1xuICAgICAgICBuMCA9IHQwICogdDAgKiAoZ3JhZDRbZ2kwXSAqIHgwICsgZ3JhZDRbZ2kwICsgMV0gKiB5MCArIGdyYWQ0W2dpMCArIDJdICogejAgKyBncmFkNFtnaTAgKyAzXSAqIHcwKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MSA9IDAuNiAtIHgxICogeDEgLSB5MSAqIHkxIC0gejEgKiB6MSAtIHcxICogdzE7XG4gICAgICBpZiAodDEgPCAwKSBuMSA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kxID0gKHBlcm1baWkgKyBpMSArIHBlcm1bamogKyBqMSArIHBlcm1ba2sgKyBrMSArIHBlcm1bbGwgKyBsMV1dXV0gJSAzMikgKiA0O1xuICAgICAgICB0MSAqPSB0MTtcbiAgICAgICAgbjEgPSB0MSAqIHQxICogKGdyYWQ0W2dpMV0gKiB4MSArIGdyYWQ0W2dpMSArIDFdICogeTEgKyBncmFkNFtnaTEgKyAyXSAqIHoxICsgZ3JhZDRbZ2kxICsgM10gKiB3MSk7XG4gICAgICB9XG4gICAgICB2YXIgdDIgPSAwLjYgLSB4MiAqIHgyIC0geTIgKiB5MiAtIHoyICogejIgLSB3MiAqIHcyO1xuICAgICAgaWYgKHQyIDwgMCkgbjIgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMiA9IChwZXJtW2lpICsgaTIgKyBwZXJtW2pqICsgajIgKyBwZXJtW2trICsgazIgKyBwZXJtW2xsICsgbDJdXV1dICUgMzIpICogNDtcbiAgICAgICAgdDIgKj0gdDI7XG4gICAgICAgIG4yID0gdDIgKiB0MiAqIChncmFkNFtnaTJdICogeDIgKyBncmFkNFtnaTIgKyAxXSAqIHkyICsgZ3JhZDRbZ2kyICsgMl0gKiB6MiArIGdyYWQ0W2dpMiArIDNdICogdzIpO1xuICAgICAgfVxuICAgICAgdmFyIHQzID0gMC42IC0geDMgKiB4MyAtIHkzICogeTMgLSB6MyAqIHozIC0gdzMgKiB3MztcbiAgICAgIGlmICh0MyA8IDApIG4zID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTMgPSAocGVybVtpaSArIGkzICsgcGVybVtqaiArIGozICsgcGVybVtrayArIGszICsgcGVybVtsbCArIGwzXV1dXSAlIDMyKSAqIDQ7XG4gICAgICAgIHQzICo9IHQzO1xuICAgICAgICBuMyA9IHQzICogdDMgKiAoZ3JhZDRbZ2kzXSAqIHgzICsgZ3JhZDRbZ2kzICsgMV0gKiB5MyArIGdyYWQ0W2dpMyArIDJdICogejMgKyBncmFkNFtnaTMgKyAzXSAqIHczKTtcbiAgICAgIH1cbiAgICAgIHZhciB0NCA9IDAuNiAtIHg0ICogeDQgLSB5NCAqIHk0IC0gejQgKiB6NCAtIHc0ICogdzQ7XG4gICAgICBpZiAodDQgPCAwKSBuNCA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2k0ID0gKHBlcm1baWkgKyAxICsgcGVybVtqaiArIDEgKyBwZXJtW2trICsgMSArIHBlcm1bbGwgKyAxXV1dXSAlIDMyKSAqIDQ7XG4gICAgICAgIHQ0ICo9IHQ0O1xuICAgICAgICBuNCA9IHQ0ICogdDQgKiAoZ3JhZDRbZ2k0XSAqIHg0ICsgZ3JhZDRbZ2k0ICsgMV0gKiB5NCArIGdyYWQ0W2dpNCArIDJdICogejQgKyBncmFkNFtnaTQgKyAzXSAqIHc0KTtcbiAgICAgIH1cbiAgICAgIC8vIFN1bSB1cCBhbmQgc2NhbGUgdGhlIHJlc3VsdCB0byBjb3ZlciB0aGUgcmFuZ2UgWy0xLDFdXG4gICAgICByZXR1cm4gMjcuMCAqIChuMCArIG4xICsgbjIgKyBuMyArIG40KTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRQZXJtdXRhdGlvblRhYmxlKHJhbmRvbSkge1xuICAgIHZhciBpO1xuICAgIHZhciBwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICAgIHBbaV0gPSBpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwOyBpIDwgMjU1OyBpKyspIHtcbiAgICAgIHZhciByID0gaSArIH5+KHJhbmRvbSgpICogKDI1NiAtIGkpKTtcbiAgICAgIHZhciBhdXggPSBwW2ldO1xuICAgICAgcFtpXSA9IHBbcl07XG4gICAgICBwW3JdID0gYXV4O1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfVxuICBTaW1wbGV4Tm9pc2UuX2J1aWxkUGVybXV0YXRpb25UYWJsZSA9IGJ1aWxkUGVybXV0YXRpb25UYWJsZTtcblxuICBmdW5jdGlvbiBhbGVhKCkge1xuICAgIC8vIEpvaGFubmVzIEJhYWfDuGUgPGJhYWdvZUBiYWFnb2UuY29tPiwgMjAxMFxuICAgIHZhciBzMCA9IDA7XG4gICAgdmFyIHMxID0gMDtcbiAgICB2YXIgczIgPSAwO1xuICAgIHZhciBjID0gMTtcblxuICAgIHZhciBtYXNoID0gbWFzaGVyKCk7XG4gICAgczAgPSBtYXNoKCcgJyk7XG4gICAgczEgPSBtYXNoKCcgJyk7XG4gICAgczIgPSBtYXNoKCcgJyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgczAgLT0gbWFzaChhcmd1bWVudHNbaV0pO1xuICAgICAgaWYgKHMwIDwgMCkge1xuICAgICAgICBzMCArPSAxO1xuICAgICAgfVxuICAgICAgczEgLT0gbWFzaChhcmd1bWVudHNbaV0pO1xuICAgICAgaWYgKHMxIDwgMCkge1xuICAgICAgICBzMSArPSAxO1xuICAgICAgfVxuICAgICAgczIgLT0gbWFzaChhcmd1bWVudHNbaV0pO1xuICAgICAgaWYgKHMyIDwgMCkge1xuICAgICAgICBzMiArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBtYXNoID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdCA9IDIwOTE2MzkgKiBzMCArIGMgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgICAgczAgPSBzMTtcbiAgICAgIHMxID0gczI7XG4gICAgICByZXR1cm4gczIgPSB0IC0gKGMgPSB0IHwgMCk7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXNoZXIoKSB7XG4gICAgdmFyIG4gPSAweGVmYzgyNDlkO1xuICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBkYXRhID0gZGF0YS50b1N0cmluZygpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG4gKz0gZGF0YS5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB2YXIgaCA9IDAuMDI1MTk2MDMyODI0MTY5MzggKiBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBoICo9IG47XG4gICAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgICBoIC09IG47XG4gICAgICAgIG4gKz0gaCAqIDB4MTAwMDAwMDAwOyAvLyAyXjMyXG4gICAgICB9XG4gICAgICByZXR1cm4gKG4gPj4+IDApICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICB9O1xuICB9XG5cbiAgLy8gYW1kXG4gIGlmICh0eXBlb2YgZGVmaW5lICE9PSAndW5kZWZpbmVkJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZnVuY3Rpb24oKSB7cmV0dXJuIFNpbXBsZXhOb2lzZTt9KTtcbiAgLy8gY29tbW9uIGpzXG4gIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIGV4cG9ydHMuU2ltcGxleE5vaXNlID0gU2ltcGxleE5vaXNlO1xuICAvLyBicm93c2VyXG4gIGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB3aW5kb3cuU2ltcGxleE5vaXNlID0gU2ltcGxleE5vaXNlO1xuICAvLyBub2RlanNcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBTaW1wbGV4Tm9pc2U7XG4gIH1cblxufSkoKTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cblxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIHQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxyKXt0Ll9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24odCxyKXtmb3IodmFyIGUgaW4gcilyLmhhc093blByb3BlcnR5KGUpJiYodFtlXT1yW2VdKX0pKHIsZSl9O2Z1bmN0aW9uIHIocixlKXtmdW5jdGlvbiBpKCl7dGhpcy5jb25zdHJ1Y3Rvcj1yfXQocixlKSxyLnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihpLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgaSl9ZnVuY3Rpb24gZSh0KXt2YXIgcj1cIlwiO0FycmF5LmlzQXJyYXkodCl8fCh0PVt0XSk7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspe3ZhciBpPXRbZV07aWYoaS50eXBlPT09Zi5DTE9TRV9QQVRIKXIrPVwielwiO2Vsc2UgaWYoaS50eXBlPT09Zi5IT1JJWl9MSU5FX1RPKXIrPShpLnJlbGF0aXZlP1wiaFwiOlwiSFwiKStpLng7ZWxzZSBpZihpLnR5cGU9PT1mLlZFUlRfTElORV9UTylyKz0oaS5yZWxhdGl2ZT9cInZcIjpcIlZcIikraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5NT1ZFX1RPKXIrPShpLnJlbGF0aXZlP1wibVwiOlwiTVwiKStpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5MSU5FX1RPKXIrPShpLnJlbGF0aXZlP1wibFwiOlwiTFwiKStpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5DVVJWRV9UTylyKz0oaS5yZWxhdGl2ZT9cImNcIjpcIkNcIikraS54MStcIiBcIitpLnkxK1wiIFwiK2kueDIrXCIgXCIraS55MitcIiBcIitpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5TTU9PVEhfQ1VSVkVfVE8pcis9KGkucmVsYXRpdmU/XCJzXCI6XCJTXCIpK2kueDIrXCIgXCIraS55MitcIiBcIitpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5RVUFEX1RPKXIrPShpLnJlbGF0aXZlP1wicVwiOlwiUVwiKStpLngxK1wiIFwiK2kueTErXCIgXCIraS54K1wiIFwiK2kueTtlbHNlIGlmKGkudHlwZT09PWYuU01PT1RIX1FVQURfVE8pcis9KGkucmVsYXRpdmU/XCJ0XCI6XCJUXCIpK2kueCtcIiBcIitpLnk7ZWxzZXtpZihpLnR5cGUhPT1mLkFSQyl0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29tbWFuZCB0eXBlIFwiJytpLnR5cGUrJ1wiIGF0IGluZGV4ICcrZStcIi5cIik7cis9KGkucmVsYXRpdmU/XCJhXCI6XCJBXCIpK2kuclgrXCIgXCIraS5yWStcIiBcIitpLnhSb3QrXCIgXCIrICtpLmxBcmNGbGFnK1wiIFwiKyAraS5zd2VlcEZsYWcrXCIgXCIraS54K1wiIFwiK2kueX19cmV0dXJuIHJ9ZnVuY3Rpb24gaSh0LHIpe3ZhciBlPXRbMF0saT10WzFdO3JldHVybltlKk1hdGguY29zKHIpLWkqTWF0aC5zaW4ociksZSpNYXRoLnNpbihyKStpKk1hdGguY29zKHIpXX1mdW5jdGlvbiBhKCl7Zm9yKHZhciB0PVtdLHI9MDtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXRbcl09YXJndW1lbnRzW3JdO2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKFwibnVtYmVyXCIhPXR5cGVvZiB0W2VdKXRocm93IG5ldyBFcnJvcihcImFzc2VydE51bWJlcnMgYXJndW1lbnRzW1wiK2UrXCJdIGlzIG5vdCBhIG51bWJlci4gXCIrdHlwZW9mIHRbZV0rXCIgPT0gdHlwZW9mIFwiK3RbZV0pO3JldHVybiEwfXZhciBuPU1hdGguUEk7ZnVuY3Rpb24gbyh0LHIsZSl7dC5sQXJjRmxhZz0wPT09dC5sQXJjRmxhZz8wOjEsdC5zd2VlcEZsYWc9MD09PXQuc3dlZXBGbGFnPzA6MTt2YXIgYT10LnJYLG89dC5yWSxzPXQueCx1PXQueTthPU1hdGguYWJzKHQuclgpLG89TWF0aC5hYnModC5yWSk7dmFyIGg9aShbKHItcykvMiwoZS11KS8yXSwtdC54Um90LzE4MCpuKSxjPWhbMF0seT1oWzFdLHA9TWF0aC5wb3coYywyKS9NYXRoLnBvdyhhLDIpK01hdGgucG93KHksMikvTWF0aC5wb3cobywyKTsxPHAmJihhKj1NYXRoLnNxcnQocCksbyo9TWF0aC5zcXJ0KHApKSx0LnJYPWEsdC5yWT1vO3ZhciBtPU1hdGgucG93KGEsMikqTWF0aC5wb3coeSwyKStNYXRoLnBvdyhvLDIpKk1hdGgucG93KGMsMiksTz0odC5sQXJjRmxhZyE9PXQuc3dlZXBGbGFnPzE6LTEpKk1hdGguc3FydChNYXRoLm1heCgwLChNYXRoLnBvdyhhLDIpKk1hdGgucG93KG8sMiktbSkvbSkpLFQ9YSp5L28qTyx2PS1vKmMvYSpPLGw9aShbVCx2XSx0LnhSb3QvMTgwKm4pO3QuY1g9bFswXSsocitzKS8yLHQuY1k9bFsxXSsoZSt1KS8yLHQucGhpMT1NYXRoLmF0YW4yKCh5LXYpL28sKGMtVCkvYSksdC5waGkyPU1hdGguYXRhbjIoKC15LXYpL28sKC1jLVQpL2EpLDA9PT10LnN3ZWVwRmxhZyYmdC5waGkyPnQucGhpMSYmKHQucGhpMi09MipuKSwxPT09dC5zd2VlcEZsYWcmJnQucGhpMjx0LnBoaTEmJih0LnBoaTIrPTIqbiksdC5waGkxKj0xODAvbix0LnBoaTIqPTE4MC9ufWZ1bmN0aW9uIHModCxyLGUpe2EodCxyLGUpO3ZhciBpPXQqdCtyKnItZSplO2lmKDA+aSlyZXR1cm5bXTtpZigwPT09aSlyZXR1cm5bW3QqZS8odCp0K3IqciksciplLyh0KnQrcipyKV1dO3ZhciBuPU1hdGguc3FydChpKTtyZXR1cm5bWyh0KmUrcipuKS8odCp0K3IqciksKHIqZS10Km4pLyh0KnQrcipyKV0sWyh0KmUtcipuKS8odCp0K3IqciksKHIqZSt0Km4pLyh0KnQrcipyKV1dfXZhciB1LGg9TWF0aC5QSS8xODA7ZnVuY3Rpb24gYyh0LHIsZSl7cmV0dXJuKDEtZSkqdCtlKnJ9ZnVuY3Rpb24geSh0LHIsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhpLzE4MCpuKSpyK01hdGguc2luKGkvMTgwKm4pKmV9ZnVuY3Rpb24gcCh0LHIsZSxpKXt2YXIgYT1yLXQsbj1lLXIsbz0zKmErMyooaS1lKS02Km4scz02KihuLWEpLHU9MyphO3JldHVybiBNYXRoLmFicyhvKTwxZS02P1stdS9zXTpmdW5jdGlvbih0LHIsZSl7dm9pZCAwPT09ZSYmKGU9MWUtNik7dmFyIGk9dCp0LzQtcjtpZihpPC1lKXJldHVybltdO2lmKGk8PWUpcmV0dXJuWy10LzJdO3ZhciBhPU1hdGguc3FydChpKTtyZXR1cm5bLXQvMi1hLC10LzIrYV19KHMvbyx1L28sMWUtNil9ZnVuY3Rpb24gbSh0LHIsZSxpLGEpe3ZhciBuPTEtYTtyZXR1cm4gdCoobipuKm4pK3IqKDMqbipuKmEpK2UqKDMqbiphKmEpK2kqKGEqYSphKX0hZnVuY3Rpb24odCl7ZnVuY3Rpb24gcigpe3JldHVybiB1KChmdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQucmVsYXRpdmUmJih2b2lkIDAhPT10LngxJiYodC54MSs9ciksdm9pZCAwIT09dC55MSYmKHQueTErPWUpLHZvaWQgMCE9PXQueDImJih0LngyKz1yKSx2b2lkIDAhPT10LnkyJiYodC55Mis9ZSksdm9pZCAwIT09dC54JiYodC54Kz1yKSx2b2lkIDAhPT10LnkmJih0LnkrPWUpLHQucmVsYXRpdmU9ITEpLHR9KSl9ZnVuY3Rpb24gZSgpe3ZhciB0PU5hTixyPU5hTixlPU5hTixpPU5hTjtyZXR1cm4gdSgoZnVuY3Rpb24oYSxuLG8pe3JldHVybiBhLnR5cGUmZi5TTU9PVEhfQ1VSVkVfVE8mJihhLnR5cGU9Zi5DVVJWRV9UTyx0PWlzTmFOKHQpP246dCxyPWlzTmFOKHIpP286cixhLngxPWEucmVsYXRpdmU/bi10OjIqbi10LGEueTE9YS5yZWxhdGl2ZT9vLXI6MipvLXIpLGEudHlwZSZmLkNVUlZFX1RPPyh0PWEucmVsYXRpdmU/bithLngyOmEueDIscj1hLnJlbGF0aXZlP28rYS55MjphLnkyKToodD1OYU4scj1OYU4pLGEudHlwZSZmLlNNT09USF9RVUFEX1RPJiYoYS50eXBlPWYuUVVBRF9UTyxlPWlzTmFOKGUpP246ZSxpPWlzTmFOKGkpP286aSxhLngxPWEucmVsYXRpdmU/bi1lOjIqbi1lLGEueTE9YS5yZWxhdGl2ZT9vLWk6MipvLWkpLGEudHlwZSZmLlFVQURfVE8/KGU9YS5yZWxhdGl2ZT9uK2EueDE6YS54MSxpPWEucmVsYXRpdmU/bythLnkxOmEueTEpOihlPU5hTixpPU5hTiksYX0pKX1mdW5jdGlvbiBuKCl7dmFyIHQ9TmFOLHI9TmFOO3JldHVybiB1KChmdW5jdGlvbihlLGksYSl7aWYoZS50eXBlJmYuU01PT1RIX1FVQURfVE8mJihlLnR5cGU9Zi5RVUFEX1RPLHQ9aXNOYU4odCk/aTp0LHI9aXNOYU4ocik/YTpyLGUueDE9ZS5yZWxhdGl2ZT9pLXQ6MippLXQsZS55MT1lLnJlbGF0aXZlP2EtcjoyKmEtciksZS50eXBlJmYuUVVBRF9UTyl7dD1lLnJlbGF0aXZlP2krZS54MTplLngxLHI9ZS5yZWxhdGl2ZT9hK2UueTE6ZS55MTt2YXIgbj1lLngxLG89ZS55MTtlLnR5cGU9Zi5DVVJWRV9UTyxlLngxPSgoZS5yZWxhdGl2ZT8wOmkpKzIqbikvMyxlLnkxPSgoZS5yZWxhdGl2ZT8wOmEpKzIqbykvMyxlLngyPShlLngrMipuKS8zLGUueTI9KGUueSsyKm8pLzN9ZWxzZSB0PU5hTixyPU5hTjtyZXR1cm4gZX0pKX1mdW5jdGlvbiB1KHQpe3ZhciByPTAsZT0wLGk9TmFOLGE9TmFOO3JldHVybiBmdW5jdGlvbihuKXtpZihpc05hTihpKSYmIShuLnR5cGUmZi5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7dmFyIG89dChuLHIsZSxpLGEpO3JldHVybiBuLnR5cGUmZi5DTE9TRV9QQVRIJiYocj1pLGU9YSksdm9pZCAwIT09bi54JiYocj1uLnJlbGF0aXZlP3Irbi54Om4ueCksdm9pZCAwIT09bi55JiYoZT1uLnJlbGF0aXZlP2Urbi55Om4ueSksbi50eXBlJmYuTU9WRV9UTyYmKGk9cixhPWUpLG99fWZ1bmN0aW9uIE8odCxyLGUsaSxuLG8pe3JldHVybiBhKHQscixlLGksbixvKSx1KChmdW5jdGlvbihhLHMsdSxoKXt2YXIgYz1hLngxLHk9YS54MixwPWEucmVsYXRpdmUmJiFpc05hTihoKSxtPXZvaWQgMCE9PWEueD9hLng6cD8wOnMsTz12b2lkIDAhPT1hLnk/YS55OnA/MDp1O2Z1bmN0aW9uIFQodCl7cmV0dXJuIHQqdH1hLnR5cGUmZi5IT1JJWl9MSU5FX1RPJiYwIT09ciYmKGEudHlwZT1mLkxJTkVfVE8sYS55PWEucmVsYXRpdmU/MDp1KSxhLnR5cGUmZi5WRVJUX0xJTkVfVE8mJjAhPT1lJiYoYS50eXBlPWYuTElORV9UTyxhLng9YS5yZWxhdGl2ZT8wOnMpLHZvaWQgMCE9PWEueCYmKGEueD1hLngqdCtPKmUrKHA/MDpuKSksdm9pZCAwIT09YS55JiYoYS55PW0qcithLnkqaSsocD8wOm8pKSx2b2lkIDAhPT1hLngxJiYoYS54MT1hLngxKnQrYS55MSplKyhwPzA6bikpLHZvaWQgMCE9PWEueTEmJihhLnkxPWMqcithLnkxKmkrKHA/MDpvKSksdm9pZCAwIT09YS54MiYmKGEueDI9YS54Mip0K2EueTIqZSsocD8wOm4pKSx2b2lkIDAhPT1hLnkyJiYoYS55Mj15KnIrYS55MippKyhwPzA6bykpO3ZhciB2PXQqaS1yKmU7aWYodm9pZCAwIT09YS54Um90JiYoMSE9PXR8fDAhPT1yfHwwIT09ZXx8MSE9PWkpKWlmKDA9PT12KWRlbGV0ZSBhLnJYLGRlbGV0ZSBhLnJZLGRlbGV0ZSBhLnhSb3QsZGVsZXRlIGEubEFyY0ZsYWcsZGVsZXRlIGEuc3dlZXBGbGFnLGEudHlwZT1mLkxJTkVfVE87ZWxzZXt2YXIgbD1hLnhSb3QqTWF0aC5QSS8xODAsXz1NYXRoLnNpbihsKSxOPU1hdGguY29zKGwpLHg9MS9UKGEuclgpLGQ9MS9UKGEuclkpLEE9VChOKSp4K1QoXykqZCxFPTIqXypOKih4LWQpLEM9VChfKSp4K1QoTikqZCxNPUEqaSppLUUqcippK0MqcipyLFI9RSoodCppK3IqZSktMiooQSplKmkrQyp0KnIpLGc9QSplKmUtRSp0KmUrQyp0KnQsST0oTWF0aC5hdGFuMihSLE0tZykrTWF0aC5QSSklTWF0aC5QSS8yLFM9TWF0aC5zaW4oSSksTD1NYXRoLmNvcyhJKTthLnJYPU1hdGguYWJzKHYpL01hdGguc3FydChNKlQoTCkrUipTKkwrZypUKFMpKSxhLnJZPU1hdGguYWJzKHYpL01hdGguc3FydChNKlQoUyktUipTKkwrZypUKEwpKSxhLnhSb3Q9MTgwKkkvTWF0aC5QSX1yZXR1cm4gdm9pZCAwIT09YS5zd2VlcEZsYWcmJjA+diYmKGEuc3dlZXBGbGFnPSshYS5zd2VlcEZsYWcpLGF9KSl9ZnVuY3Rpb24gVCgpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgcj17fTtmb3IodmFyIGUgaW4gdClyW2VdPXRbZV07cmV0dXJuIHJ9fXQuUk9VTkQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihyKXtyZXR1cm4gTWF0aC5yb3VuZChyKnQpL3R9cmV0dXJuIHZvaWQgMD09PXQmJih0PTFlMTMpLGEodCksZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQueDEmJih0LngxPXIodC54MSkpLHZvaWQgMCE9PXQueTEmJih0LnkxPXIodC55MSkpLHZvaWQgMCE9PXQueDImJih0LngyPXIodC54MikpLHZvaWQgMCE9PXQueTImJih0LnkyPXIodC55MikpLHZvaWQgMCE9PXQueCYmKHQueD1yKHQueCkpLHZvaWQgMCE9PXQueSYmKHQueT1yKHQueSkpLHZvaWQgMCE9PXQuclgmJih0LnJYPXIodC5yWCkpLHZvaWQgMCE9PXQuclkmJih0LnJZPXIodC5yWSkpLHR9fSx0LlRPX0FCUz1yLHQuVE9fUkVMPWZ1bmN0aW9uKCl7cmV0dXJuIHUoKGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdC5yZWxhdGl2ZXx8KHZvaWQgMCE9PXQueDEmJih0LngxLT1yKSx2b2lkIDAhPT10LnkxJiYodC55MS09ZSksdm9pZCAwIT09dC54MiYmKHQueDItPXIpLHZvaWQgMCE9PXQueTImJih0LnkyLT1lKSx2b2lkIDAhPT10LngmJih0LngtPXIpLHZvaWQgMCE9PXQueSYmKHQueS09ZSksdC5yZWxhdGl2ZT0hMCksdH0pKX0sdC5OT1JNQUxJWkVfSFZaPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PXImJihyPSEwKSx2b2lkIDA9PT1lJiYoZT0hMCksdSgoZnVuY3Rpb24oaSxhLG4sbyxzKXtpZihpc05hTihvKSYmIShpLnR5cGUmZi5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7cmV0dXJuIHImJmkudHlwZSZmLkhPUklaX0xJTkVfVE8mJihpLnR5cGU9Zi5MSU5FX1RPLGkueT1pLnJlbGF0aXZlPzA6biksZSYmaS50eXBlJmYuVkVSVF9MSU5FX1RPJiYoaS50eXBlPWYuTElORV9UTyxpLng9aS5yZWxhdGl2ZT8wOmEpLHQmJmkudHlwZSZmLkNMT1NFX1BBVEgmJihpLnR5cGU9Zi5MSU5FX1RPLGkueD1pLnJlbGF0aXZlP28tYTpvLGkueT1pLnJlbGF0aXZlP3MtbjpzKSxpLnR5cGUmZi5BUkMmJigwPT09aS5yWHx8MD09PWkuclkpJiYoaS50eXBlPWYuTElORV9UTyxkZWxldGUgaS5yWCxkZWxldGUgaS5yWSxkZWxldGUgaS54Um90LGRlbGV0ZSBpLmxBcmNGbGFnLGRlbGV0ZSBpLnN3ZWVwRmxhZyksaX0pKX0sdC5OT1JNQUxJWkVfU1Q9ZSx0LlFUX1RPX0M9bix0LklORk89dSx0LlNBTklUSVpFPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTApLGEodCk7dmFyIHI9TmFOLGU9TmFOLGk9TmFOLG49TmFOO3JldHVybiB1KChmdW5jdGlvbihhLG8scyx1LGgpe3ZhciBjPU1hdGguYWJzLHk9ITEscD0wLG09MDtpZihhLnR5cGUmZi5TTU9PVEhfQ1VSVkVfVE8mJihwPWlzTmFOKHIpPzA6by1yLG09aXNOYU4oZSk/MDpzLWUpLGEudHlwZSYoZi5DVVJWRV9UT3xmLlNNT09USF9DVVJWRV9UTyk/KHI9YS5yZWxhdGl2ZT9vK2EueDI6YS54MixlPWEucmVsYXRpdmU/cythLnkyOmEueTIpOihyPU5hTixlPU5hTiksYS50eXBlJmYuU01PT1RIX1FVQURfVE8/KGk9aXNOYU4oaSk/bzoyKm8taSxuPWlzTmFOKG4pP3M6MipzLW4pOmEudHlwZSZmLlFVQURfVE8/KGk9YS5yZWxhdGl2ZT9vK2EueDE6YS54MSxuPWEucmVsYXRpdmU/cythLnkxOmEueTIpOihpPU5hTixuPU5hTiksYS50eXBlJmYuTElORV9DT01NQU5EU3x8YS50eXBlJmYuQVJDJiYoMD09PWEuclh8fDA9PT1hLnJZfHwhYS5sQXJjRmxhZyl8fGEudHlwZSZmLkNVUlZFX1RPfHxhLnR5cGUmZi5TTU9PVEhfQ1VSVkVfVE98fGEudHlwZSZmLlFVQURfVE98fGEudHlwZSZmLlNNT09USF9RVUFEX1RPKXt2YXIgTz12b2lkIDA9PT1hLng/MDphLnJlbGF0aXZlP2EueDphLngtbyxUPXZvaWQgMD09PWEueT8wOmEucmVsYXRpdmU/YS55OmEueS1zO3A9aXNOYU4oaSk/dm9pZCAwPT09YS54MT9wOmEucmVsYXRpdmU/YS54OmEueDEtbzppLW8sbT1pc05hTihuKT92b2lkIDA9PT1hLnkxP206YS5yZWxhdGl2ZT9hLnk6YS55MS1zOm4tczt2YXIgdj12b2lkIDA9PT1hLngyPzA6YS5yZWxhdGl2ZT9hLng6YS54Mi1vLGw9dm9pZCAwPT09YS55Mj8wOmEucmVsYXRpdmU/YS55OmEueTItcztjKE8pPD10JiZjKFQpPD10JiZjKHApPD10JiZjKG0pPD10JiZjKHYpPD10JiZjKGwpPD10JiYoeT0hMCl9cmV0dXJuIGEudHlwZSZmLkNMT1NFX1BBVEgmJmMoby11KTw9dCYmYyhzLWgpPD10JiYoeT0hMCkseT9bXTphfSkpfSx0Lk1BVFJJWD1PLHQuUk9UQVRFPWZ1bmN0aW9uKHQscixlKXt2b2lkIDA9PT1yJiYocj0wKSx2b2lkIDA9PT1lJiYoZT0wKSxhKHQscixlKTt2YXIgaT1NYXRoLnNpbih0KSxuPU1hdGguY29zKHQpO3JldHVybiBPKG4saSwtaSxuLHItcipuK2UqaSxlLXIqaS1lKm4pfSx0LlRSQU5TTEFURT1mdW5jdGlvbih0LHIpe3JldHVybiB2b2lkIDA9PT1yJiYocj0wKSxhKHQsciksTygxLDAsMCwxLHQscil9LHQuU0NBTEU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9dCksYSh0LHIpLE8odCwwLDAsciwwLDApfSx0LlNLRVdfWD1mdW5jdGlvbih0KXtyZXR1cm4gYSh0KSxPKDEsMCxNYXRoLmF0YW4odCksMSwwLDApfSx0LlNLRVdfWT1mdW5jdGlvbih0KXtyZXR1cm4gYSh0KSxPKDEsTWF0aC5hdGFuKHQpLDAsMSwwLDApfSx0LlhfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYSh0KSxPKC0xLDAsMCwxLHQsMCl9LHQuWV9BWElTX1NZTU1FVFJZPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxhKHQpLE8oMSwwLDAsLTEsMCx0KX0sdC5BX1RPX0M9ZnVuY3Rpb24oKXtyZXR1cm4gdSgoZnVuY3Rpb24odCxyLGUpe3JldHVybiBmLkFSQz09PXQudHlwZT9mdW5jdGlvbih0LHIsZSl7dmFyIGEsbixzLHU7dC5jWHx8byh0LHIsZSk7Zm9yKHZhciB5PU1hdGgubWluKHQucGhpMSx0LnBoaTIpLHA9TWF0aC5tYXgodC5waGkxLHQucGhpMikteSxtPU1hdGguY2VpbChwLzkwKSxPPW5ldyBBcnJheShtKSxUPXIsdj1lLGw9MDtsPG07bCsrKXt2YXIgXz1jKHQucGhpMSx0LnBoaTIsbC9tKSxOPWModC5waGkxLHQucGhpMiwobCsxKS9tKSx4PU4tXyxkPTQvMypNYXRoLnRhbih4KmgvNCksQT1bTWF0aC5jb3MoXypoKS1kKk1hdGguc2luKF8qaCksTWF0aC5zaW4oXypoKStkKk1hdGguY29zKF8qaCldLEU9QVswXSxDPUFbMV0sTT1bTWF0aC5jb3MoTipoKSxNYXRoLnNpbihOKmgpXSxSPU1bMF0sZz1NWzFdLEk9W1IrZCpNYXRoLnNpbihOKmgpLGctZCpNYXRoLmNvcyhOKmgpXSxTPUlbMF0sTD1JWzFdO09bbF09e3JlbGF0aXZlOnQucmVsYXRpdmUsdHlwZTpmLkNVUlZFX1RPfTt2YXIgSD1mdW5jdGlvbihyLGUpe3ZhciBhPWkoW3IqdC5yWCxlKnQuclldLHQueFJvdCksbj1hWzBdLG89YVsxXTtyZXR1cm5bdC5jWCtuLHQuY1krb119O2E9SChFLEMpLE9bbF0ueDE9YVswXSxPW2xdLnkxPWFbMV0sbj1IKFMsTCksT1tsXS54Mj1uWzBdLE9bbF0ueTI9blsxXSxzPUgoUixnKSxPW2xdLng9c1swXSxPW2xdLnk9c1sxXSx0LnJlbGF0aXZlJiYoT1tsXS54MS09VCxPW2xdLnkxLT12LE9bbF0ueDItPVQsT1tsXS55Mi09dixPW2xdLngtPVQsT1tsXS55LT12KSxUPSh1PVtPW2xdLngsT1tsXS55XSlbMF0sdj11WzFdfXJldHVybiBPfSh0LHQucmVsYXRpdmU/MDpyLHQucmVsYXRpdmU/MDplKTp0fSkpfSx0LkFOTk9UQVRFX0FSQ1M9ZnVuY3Rpb24oKXtyZXR1cm4gdSgoZnVuY3Rpb24odCxyLGUpe3JldHVybiB0LnJlbGF0aXZlJiYocj0wLGU9MCksZi5BUkM9PT10LnR5cGUmJm8odCxyLGUpLHR9KSl9LHQuQ0xPTkU9VCx0LkNBTENVTEFURV9CT1VORFM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbih0KXt2YXIgcj17fTtmb3IodmFyIGUgaW4gdClyW2VdPXRbZV07cmV0dXJuIHJ9LGk9cigpLGE9bigpLGg9ZSgpLGM9dSgoZnVuY3Rpb24ocixlLG4pe3ZhciB1PWgoYShpKHQocikpKSk7ZnVuY3Rpb24gTyh0KXt0PmMubWF4WCYmKGMubWF4WD10KSx0PGMubWluWCYmKGMubWluWD10KX1mdW5jdGlvbiBUKHQpe3Q+Yy5tYXhZJiYoYy5tYXhZPXQpLHQ8Yy5taW5ZJiYoYy5taW5ZPXQpfWlmKHUudHlwZSZmLkRSQVdJTkdfQ09NTUFORFMmJihPKGUpLFQobikpLHUudHlwZSZmLkhPUklaX0xJTkVfVE8mJk8odS54KSx1LnR5cGUmZi5WRVJUX0xJTkVfVE8mJlQodS55KSx1LnR5cGUmZi5MSU5FX1RPJiYoTyh1LngpLFQodS55KSksdS50eXBlJmYuQ1VSVkVfVE8pe08odS54KSxUKHUueSk7Zm9yKHZhciB2PTAsbD1wKGUsdS54MSx1LngyLHUueCk7djxsLmxlbmd0aDt2KyspezA8KHc9bFt2XSkmJjE+dyYmTyhtKGUsdS54MSx1LngyLHUueCx3KSl9Zm9yKHZhciBfPTAsTj1wKG4sdS55MSx1LnkyLHUueSk7XzxOLmxlbmd0aDtfKyspezA8KHc9TltfXSkmJjE+dyYmVChtKG4sdS55MSx1LnkyLHUueSx3KSl9fWlmKHUudHlwZSZmLkFSQyl7Tyh1LngpLFQodS55KSxvKHUsZSxuKTtmb3IodmFyIHg9dS54Um90LzE4MCpNYXRoLlBJLGQ9TWF0aC5jb3MoeCkqdS5yWCxBPU1hdGguc2luKHgpKnUuclgsRT0tTWF0aC5zaW4oeCkqdS5yWSxDPU1hdGguY29zKHgpKnUuclksTT11LnBoaTE8dS5waGkyP1t1LnBoaTEsdS5waGkyXTotMTgwPnUucGhpMj9bdS5waGkyKzM2MCx1LnBoaTErMzYwXTpbdS5waGkyLHUucGhpMV0sUj1NWzBdLGc9TVsxXSxJPWZ1bmN0aW9uKHQpe3ZhciByPXRbMF0sZT10WzFdLGk9MTgwKk1hdGguYXRhbjIoZSxyKS9NYXRoLlBJO3JldHVybiBpPFI/aSszNjA6aX0sUz0wLEw9cyhFLC1kLDApLm1hcChJKTtTPEwubGVuZ3RoO1MrKyl7KHc9TFtTXSk+UiYmdzxnJiZPKHkodS5jWCxkLEUsdykpfWZvcih2YXIgSD0wLFU9cyhDLC1BLDApLm1hcChJKTtIPFUubGVuZ3RoO0grKyl7dmFyIHc7KHc9VVtIXSk+UiYmdzxnJiZUKHkodS5jWSxBLEMsdykpfX1yZXR1cm4gcn0pKTtyZXR1cm4gYy5taW5YPTEvMCxjLm1heFg9LTEvMCxjLm1pblk9MS8wLGMubWF4WT0tMS8wLGN9fSh1fHwodT17fSkpO3ZhciBPLFQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnByb3RvdHlwZS5yb3VuZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5ST1VORCh0KSl9LHQucHJvdG90eXBlLnRvQWJzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuVE9fQUJTKCkpfSx0LnByb3RvdHlwZS50b1JlbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlRPX1JFTCgpKX0sdC5wcm90b3R5cGUubm9ybWFsaXplSFZaPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5OT1JNQUxJWkVfSFZaKHQscixlKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZVNUPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuTk9STUFMSVpFX1NUKCkpfSx0LnByb3RvdHlwZS5xdFRvQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlFUX1RPX0MoKSl9LHQucHJvdG90eXBlLmFUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5BX1RPX0MoKSl9LHQucHJvdG90eXBlLnNhbml0aXplPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlNBTklUSVpFKHQpKX0sdC5wcm90b3R5cGUudHJhbnNsYXRlPWZ1bmN0aW9uKHQscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuVFJBTlNMQVRFKHQscikpfSx0LnByb3RvdHlwZS5zY2FsZT1mdW5jdGlvbih0LHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlNDQUxFKHQscikpfSx0LnByb3RvdHlwZS5yb3RhdGU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlJPVEFURSh0LHIsZSkpfSx0LnByb3RvdHlwZS5tYXRyaXg9ZnVuY3Rpb24odCxyLGUsaSxhLG4pe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1Lk1BVFJJWCh0LHIsZSxpLGEsbikpfSx0LnByb3RvdHlwZS5za2V3WD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5TS0VXX1godCkpfSx0LnByb3RvdHlwZS5za2V3WT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5TS0VXX1kodCkpfSx0LnByb3RvdHlwZS54U3ltbWV0cnk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuWF9BWElTX1NZTU1FVFJZKHQpKX0sdC5wcm90b3R5cGUueVN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LllfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLmFubm90YXRlQXJjcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LkFOTk9UQVRFX0FSQ1MoKSl9LHR9KCksdj1mdW5jdGlvbih0KXtyZXR1cm5cIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcclwiPT09dHx8XCJcXG5cIj09PXR9LGw9ZnVuY3Rpb24odCl7cmV0dXJuXCIwXCIuY2hhckNvZGVBdCgwKTw9dC5jaGFyQ29kZUF0KDApJiZ0LmNoYXJDb2RlQXQoMCk8PVwiOVwiLmNoYXJDb2RlQXQoMCl9LF89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3ZhciByPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gci5jdXJOdW1iZXI9XCJcIixyLmN1ckNvbW1hbmRUeXBlPS0xLHIuY3VyQ29tbWFuZFJlbGF0aXZlPSExLHIuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCxyLmN1ck51bWJlckhhc0V4cD0hMSxyLmN1ck51bWJlckhhc0V4cERpZ2l0cz0hMSxyLmN1ck51bWJlckhhc0RlY2ltYWw9ITEsci5jdXJBcmdzPVtdLHJ9cmV0dXJuIHIoZSx0KSxlLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCYmKHQ9W10pLHRoaXMucGFyc2UoXCIgXCIsdCksMCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgdGhlIHBhdGggZW5kLlwiKTtyZXR1cm4gdH0sZS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24odCxyKXt2YXIgZT10aGlzO3ZvaWQgMD09PXImJihyPVtdKTtmb3IodmFyIGk9ZnVuY3Rpb24odCl7ci5wdXNoKHQpLGUuY3VyQXJncy5sZW5ndGg9MCxlLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9LGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIG49dFthXSxvPSEodGhpcy5jdXJDb21tYW5kVHlwZSE9PWYuQVJDfHwzIT09dGhpcy5jdXJBcmdzLmxlbmd0aCYmNCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fDEhPT10aGlzLmN1ck51bWJlci5sZW5ndGh8fFwiMFwiIT09dGhpcy5jdXJOdW1iZXImJlwiMVwiIT09dGhpcy5jdXJOdW1iZXIpLHM9bChuKSYmKFwiMFwiPT09dGhpcy5jdXJOdW1iZXImJlwiMFwiPT09bnx8byk7aWYoIWwobil8fHMpaWYoXCJlXCIhPT1uJiZcIkVcIiE9PW4paWYoXCItXCIhPT1uJiZcIitcIiE9PW58fCF0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHMpaWYoXCIuXCIhPT1ufHx0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsfHxvKXtpZih0aGlzLmN1ck51bWJlciYmLTEhPT10aGlzLmN1ckNvbW1hbmRUeXBlKXt2YXIgdT1OdW1iZXIodGhpcy5jdXJOdW1iZXIpO2lmKGlzTmFOKHUpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkludmFsaWQgbnVtYmVyIGVuZGluZyBhdCBcIithKTtpZih0aGlzLmN1ckNvbW1hbmRUeXBlPT09Zi5BUkMpaWYoMD09PXRoaXMuY3VyQXJncy5sZW5ndGh8fDE9PT10aGlzLmN1ckFyZ3MubGVuZ3RoKXtpZigwPnUpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBudW1iZXIsIGdvdCBcIicrdSsnXCIgYXQgaW5kZXggXCInK2ErJ1wiJyl9ZWxzZSBpZigoMz09PXRoaXMuY3VyQXJncy5sZW5ndGh8fDQ9PT10aGlzLmN1ckFyZ3MubGVuZ3RoKSYmXCIwXCIhPT10aGlzLmN1ck51bWJlciYmXCIxXCIhPT10aGlzLmN1ck51bWJlcil0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0V4cGVjdGVkIGEgZmxhZywgZ290IFwiJyt0aGlzLmN1ck51bWJlcisnXCIgYXQgaW5kZXggXCInK2ErJ1wiJyk7dGhpcy5jdXJBcmdzLnB1c2godSksdGhpcy5jdXJBcmdzLmxlbmd0aD09PU5bdGhpcy5jdXJDb21tYW5kVHlwZV0mJihmLkhPUklaX0xJTkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlP2koe3R5cGU6Zi5IT1JJWl9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6dX0pOmYuVkVSVF9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9pKHt0eXBlOmYuVkVSVF9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHk6dX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLk1PVkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLkxJTkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLlNNT09USF9RVUFEX1RPPyhpKHt0eXBlOnRoaXMuY3VyQ29tbWFuZFR5cGUscmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDp0aGlzLmN1ckFyZ3NbMF0seTp0aGlzLmN1ckFyZ3NbMV19KSxmLk1PVkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlJiYodGhpcy5jdXJDb21tYW5kVHlwZT1mLkxJTkVfVE8pKTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09Zi5DVVJWRV9UTz9pKHt0eXBlOmYuQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4Mjp0aGlzLmN1ckFyZ3NbMl0seTI6dGhpcy5jdXJBcmdzWzNdLHg6dGhpcy5jdXJBcmdzWzRdLHk6dGhpcy5jdXJBcmdzWzVdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PWYuU01PT1RIX0NVUlZFX1RPP2koe3R5cGU6Zi5TTU9PVEhfQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDI6dGhpcy5jdXJBcmdzWzBdLHkyOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLlFVQURfVE8/aSh7dHlwZTpmLlFVQURfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLkFSQyYmaSh7dHlwZTpmLkFSQyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSxyWDp0aGlzLmN1ckFyZ3NbMF0sclk6dGhpcy5jdXJBcmdzWzFdLHhSb3Q6dGhpcy5jdXJBcmdzWzJdLGxBcmNGbGFnOnRoaXMuY3VyQXJnc1szXSxzd2VlcEZsYWc6dGhpcy5jdXJBcmdzWzRdLHg6dGhpcy5jdXJBcmdzWzVdLHk6dGhpcy5jdXJBcmdzWzZdfSkpLHRoaXMuY3VyTnVtYmVyPVwiXCIsdGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITEsdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMH1pZighdihuKSlpZihcIixcIj09PW4mJnRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITE7ZWxzZSBpZihcIitcIiE9PW4mJlwiLVwiIT09biYmXCIuXCIhPT1uKWlmKHMpdGhpcy5jdXJOdW1iZXI9bix0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITE7ZWxzZXtpZigwIT09dGhpcy5jdXJBcmdzLmxlbmd0aCl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbnRlcm1pbmF0ZWQgY29tbWFuZCBhdCBpbmRleCBcIithK1wiLlwiKTtpZighdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXIgXCInK24rJ1wiIGF0IGluZGV4ICcrYStcIi4gQ29tbWFuZCBjYW5ub3QgZm9sbG93IGNvbW1hXCIpO2lmKHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMSxcInpcIiE9PW4mJlwiWlwiIT09bilpZihcImhcIj09PW58fFwiSFwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPWYuSE9SSVpfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImhcIj09PW47ZWxzZSBpZihcInZcIj09PW58fFwiVlwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPWYuVkVSVF9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwidlwiPT09bjtlbHNlIGlmKFwibVwiPT09bnx8XCJNXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5NT1ZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibVwiPT09bjtlbHNlIGlmKFwibFwiPT09bnx8XCJMXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibFwiPT09bjtlbHNlIGlmKFwiY1wiPT09bnx8XCJDXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImNcIj09PW47ZWxzZSBpZihcInNcIj09PW58fFwiU1wiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPWYuU01PT1RIX0NVUlZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwic1wiPT09bjtlbHNlIGlmKFwicVwiPT09bnx8XCJRXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5RVUFEX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwicVwiPT09bjtlbHNlIGlmKFwidFwiPT09bnx8XCJUXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5TTU9PVEhfUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInRcIj09PW47ZWxzZXtpZihcImFcIiE9PW4mJlwiQVwiIT09bil0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytuKydcIiBhdCBpbmRleCAnK2ErXCIuXCIpO3RoaXMuY3VyQ29tbWFuZFR5cGU9Zi5BUkMsdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJhXCI9PT1ufWVsc2Ugci5wdXNoKHt0eXBlOmYuQ0xPU0VfUEFUSH0pLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCx0aGlzLmN1ckNvbW1hbmRUeXBlPS0xfWVsc2UgdGhpcy5jdXJOdW1iZXI9bix0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9XCIuXCI9PT1ufWVsc2UgdGhpcy5jdXJOdW1iZXIrPW4sdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSEwO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPW47ZWxzZSB0aGlzLmN1ck51bWJlcis9bix0aGlzLmN1ck51bWJlckhhc0V4cD0hMDtlbHNlIHRoaXMuY3VyTnVtYmVyKz1uLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPXRoaXMuY3VyTnVtYmVySGFzRXhwfXJldHVybiByfSxlLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyx7cGFyc2U6e3ZhbHVlOmZ1bmN0aW9uKHIsZSl7dm9pZCAwPT09ZSYmKGU9W10pO2Zvcih2YXIgaT0wLGE9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlLmNhbGwodGhpcyxyKTtpPGEubGVuZ3RoO2krKyl7dmFyIG49YVtpXSxvPXQobik7QXJyYXkuaXNBcnJheShvKT9lLnB1c2guYXBwbHkoZSxvKTplLnB1c2gobyl9cmV0dXJuIGV9fX0pfSxlfShUKSxmPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGkocil7dmFyIGU9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBlLmNvbW1hbmRzPVwic3RyaW5nXCI9PXR5cGVvZiByP2kucGFyc2Uocik6cixlfXJldHVybiByKGksdCksaS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGkuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxpLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD11LkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0saS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgcj1bXSxlPTAsaT10aGlzLmNvbW1hbmRzO2U8aS5sZW5ndGg7ZSsrKXt2YXIgYT10KGlbZV0pO0FycmF5LmlzQXJyYXkoYSk/ci5wdXNoLmFwcGx5KHIsYSk6ci5wdXNoKGEpfXJldHVybiB0aGlzLmNvbW1hbmRzPXIsdGhpc30saS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGUodCl9LGkucGFyc2U9ZnVuY3Rpb24odCl7dmFyIHI9bmV3IF8sZT1bXTtyZXR1cm4gci5wYXJzZSh0LGUpLHIuZmluaXNoKGUpLGV9LGkuQ0xPU0VfUEFUSD0xLGkuTU9WRV9UTz0yLGkuSE9SSVpfTElORV9UTz00LGkuVkVSVF9MSU5FX1RPPTgsaS5MSU5FX1RPPTE2LGkuQ1VSVkVfVE89MzIsaS5TTU9PVEhfQ1VSVkVfVE89NjQsaS5RVUFEX1RPPTEyOCxpLlNNT09USF9RVUFEX1RPPTI1NixpLkFSQz01MTIsaS5MSU5FX0NPTU1BTkRTPWkuTElORV9UT3xpLkhPUklaX0xJTkVfVE98aS5WRVJUX0xJTkVfVE8saS5EUkFXSU5HX0NPTU1BTkRTPWkuSE9SSVpfTElORV9UT3xpLlZFUlRfTElORV9UT3xpLkxJTkVfVE98aS5DVVJWRV9UT3xpLlNNT09USF9DVVJWRV9UT3xpLlFVQURfVE98aS5TTU9PVEhfUVVBRF9UT3xpLkFSQyxpfShUKSxOPSgoTz17fSlbZi5NT1ZFX1RPXT0yLE9bZi5MSU5FX1RPXT0yLE9bZi5IT1JJWl9MSU5FX1RPXT0xLE9bZi5WRVJUX0xJTkVfVE9dPTEsT1tmLkNMT1NFX1BBVEhdPTAsT1tmLlFVQURfVE9dPTQsT1tmLlNNT09USF9RVUFEX1RPXT0yLE9bZi5DVVJWRV9UT109NixPW2YuU01PT1RIX0NVUlZFX1RPXT00LE9bZi5BUkNdPTcsTyk7ZXhwb3J0e04gYXMgQ09NTUFORF9BUkdfQ09VTlRTLGYgYXMgU1ZHUGF0aERhdGEsXyBhcyBTVkdQYXRoRGF0YVBhcnNlcix1IGFzIFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIsZSBhcyBlbmNvZGVTVkdQYXRofTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNWR1BhdGhEYXRhLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB0b1BhdGggZnJvbSAnLi90b1BhdGgnO1xuaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuaW1wb3J0IHZhbGlkIGZyb20gJy4vdmFsaWQnO1xuXG5leHBvcnQgeyB0b1BhdGgsIHRvUG9pbnRzLCB2YWxpZCB9OyIsImltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcblxudmFyIHBvaW50c1RvRCA9IGZ1bmN0aW9uIHBvaW50c1RvRChwKSB7XG4gIHZhciBkID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGZpcnN0UG9pbnQgPSB2b2lkIDA7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwb2ludCA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIF9wb2ludCRjdXJ2ZSA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgIGN1cnZlID0gX3BvaW50JGN1cnZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wb2ludCRjdXJ2ZSxcbiAgICAgICAgICBtb3ZlVG8gPSBwb2ludC5tb3ZlVG8sXG4gICAgICAgICAgeCA9IHBvaW50LngsXG4gICAgICAgICAgeSA9IHBvaW50Lnk7XG5cbiAgICAgIHZhciBpc0ZpcnN0UG9pbnQgPSBpID09PSAwIHx8IG1vdmVUbztcbiAgICAgIHZhciBpc0xhc3RQb2ludCA9IGkgPT09IHAubGVuZ3RoIC0gMSB8fCBwW2kgKyAxXS5tb3ZlVG87XG4gICAgICB2YXIgcHJldlBvaW50ID0gaSA9PT0gMCA/IG51bGwgOiBwW2kgLSAxXTtcblxuICAgICAgaWYgKGlzRmlyc3RQb2ludCkge1xuICAgICAgICBmaXJzdFBvaW50ID0gcG9pbnQ7XG5cbiAgICAgICAgaWYgKCFpc0xhc3RQb2ludCkge1xuICAgICAgICAgIGQgKz0gJ00nICsgeCArICcsJyArIHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VydmUpIHtcbiAgICAgICAgc3dpdGNoIChjdXJ2ZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYXJjJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUyID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRsYXJnZUFyID0gX3BvaW50JGN1cnZlMi5sYXJnZUFyY0ZsYWcsXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnID0gX3BvaW50JGN1cnZlMiRsYXJnZUFyID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRsYXJnZUFyLFxuICAgICAgICAgICAgICAgIHJ4ID0gX3BvaW50JGN1cnZlMi5yeCxcbiAgICAgICAgICAgICAgICByeSA9IF9wb2ludCRjdXJ2ZTIucnksXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRzd2VlcEZsID0gX3BvaW50JGN1cnZlMi5zd2VlcEZsYWcsXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnID0gX3BvaW50JGN1cnZlMiRzd2VlcEZsID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRzd2VlcEZsLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9IF9wb2ludCRjdXJ2ZTIueEF4aXNSb3RhdGlvbixcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uID0gX3BvaW50JGN1cnZlMiR4QXhpc1JvID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiR4QXhpc1JvO1xuXG4gICAgICAgICAgICBkICs9ICdBJyArIHJ4ICsgJywnICsgcnkgKyAnLCcgKyB4QXhpc1JvdGF0aW9uICsgJywnICsgbGFyZ2VBcmNGbGFnICsgJywnICsgc3dlZXBGbGFnICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjdWJpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMyA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIGN4MSA9IF9wb2ludCRjdXJ2ZTMueDEsXG4gICAgICAgICAgICAgICAgY3kxID0gX3BvaW50JGN1cnZlMy55MSxcbiAgICAgICAgICAgICAgICBjeDIgPSBfcG9pbnQkY3VydmUzLngyLFxuICAgICAgICAgICAgICAgIGN5MiA9IF9wb2ludCRjdXJ2ZTMueTI7XG5cbiAgICAgICAgICAgIGQgKz0gJ0MnICsgY3gxICsgJywnICsgY3kxICsgJywnICsgY3gyICsgJywnICsgY3kyICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdxdWFkcmF0aWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTQgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBxeDEgPSBfcG9pbnQkY3VydmU0LngxLFxuICAgICAgICAgICAgICAgIHF5MSA9IF9wb2ludCRjdXJ2ZTQueTE7XG5cbiAgICAgICAgICAgIGQgKz0gJ1EnICsgcXgxICsgJywnICsgcXkxICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgICAgZCArPSAnWic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICBkICs9ICdaJztcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LnggJiYgeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnTCcgKyB4ICsgJywnICsgeTtcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LngpIHtcbiAgICAgICAgZCArPSAnSCcgKyB4O1xuICAgICAgfSBlbHNlIGlmICh5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdWJyArIHk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGQ7XG59O1xuXG52YXIgdG9QYXRoID0gZnVuY3Rpb24gdG9QYXRoKHMpIHtcbiAgdmFyIGlzUG9pbnRzID0gQXJyYXkuaXNBcnJheShzKTtcbiAgdmFyIGlzR3JvdXAgPSBpc1BvaW50cyA/IEFycmF5LmlzQXJyYXkoc1swXSkgOiBzLnR5cGUgPT09ICdnJztcbiAgdmFyIHBvaW50cyA9IGlzUG9pbnRzID8gcyA6IGlzR3JvdXAgPyBzLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHNocCkge1xuICAgIHJldHVybiB0b1BvaW50cyhzaHApO1xuICB9KSA6IHRvUG9pbnRzKHMpO1xuXG4gIGlmIChpc0dyb3VwKSB7XG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwb2ludHNUb0QocCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzVG9EKHBvaW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdG9Qb2ludHMgPSBmdW5jdGlvbiB0b1BvaW50cyhfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyd0eXBlJ10pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUNpcmNsZShwcm9wcyk7XG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUVsbGlwc2UocHJvcHMpO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21MaW5lKHByb3BzKTtcbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUGF0aChwcm9wcyk7XG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlnb24ocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0KHByb3BzKTtcbiAgICBjYXNlICdnJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRyhwcm9wcyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgc2hhcGUgdHlwZScpO1xuICB9XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUNpcmNsZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21DaXJjbGUoX3JlZjIpIHtcbiAgdmFyIGN4ID0gX3JlZjIuY3gsXG4gICAgICBjeSA9IF9yZWYyLmN5LFxuICAgICAgciA9IF9yZWYyLnI7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHIsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUVsbGlwc2UgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRWxsaXBzZShfcmVmMykge1xuICB2YXIgY3ggPSBfcmVmMy5jeCxcbiAgICAgIGN5ID0gX3JlZjMuY3ksXG4gICAgICByeCA9IF9yZWYzLnJ4LFxuICAgICAgcnkgPSBfcmVmMy5yeTtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gcnksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tTGluZShfcmVmNCkge1xuICB2YXIgeDEgPSBfcmVmNC54MSxcbiAgICAgIHgyID0gX3JlZjQueDIsXG4gICAgICB5MSA9IF9yZWY0LnkxLFxuICAgICAgeTIgPSBfcmVmNC55MjtcblxuICByZXR1cm4gW3sgeDogeDEsIHk6IHkxLCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4MiwgeTogeTIgfV07XG59O1xuXG52YXIgdmFsaWRDb21tYW5kcyA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdL2c7XG5cbnZhciBjb21tYW5kTGVuZ3RocyA9IHtcbiAgQTogNyxcbiAgQzogNixcbiAgSDogMSxcbiAgTDogMixcbiAgTTogMixcbiAgUTogNCxcbiAgUzogNCxcbiAgVDogMixcbiAgVjogMSxcbiAgWjogMFxufTtcblxudmFyIHJlbGF0aXZlQ29tbWFuZHMgPSBbJ2EnLCAnYycsICdoJywgJ2wnLCAnbScsICdxJywgJ3MnLCAndCcsICd2J107XG5cbnZhciBpc1JlbGF0aXZlID0gZnVuY3Rpb24gaXNSZWxhdGl2ZShjb21tYW5kKSB7XG4gIHJldHVybiByZWxhdGl2ZUNvbW1hbmRzLmluZGV4T2YoY29tbWFuZCkgIT09IC0xO1xufTtcblxudmFyIG9wdGlvbmFsQXJjS2V5cyA9IFsneEF4aXNSb3RhdGlvbicsICdsYXJnZUFyY0ZsYWcnLCAnc3dlZXBGbGFnJ107XG5cbnZhciBnZXRDb21tYW5kcyA9IGZ1bmN0aW9uIGdldENvbW1hbmRzKGQpIHtcbiAgcmV0dXJuIGQubWF0Y2godmFsaWRDb21tYW5kcyk7XG59O1xuXG52YXIgZ2V0UGFyYW1zID0gZnVuY3Rpb24gZ2V0UGFyYW1zKGQpIHtcbiAgcmV0dXJuIGQuc3BsaXQodmFsaWRDb21tYW5kcykubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvWzAtOV0rLS9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0uc2xpY2UoMCwgLTEpICsgJyAtJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvXFwuWzAtOV0rL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbSArICcgJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5sZW5ndGggPiAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5zcGxpdCgvWyAsXSsvKS5tYXAocGFyc2VGbG9hdCkuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKG4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUGF0aCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21QYXRoKF9yZWY1KSB7XG4gIHZhciBkID0gX3JlZjUuZDtcblxuICB2YXIgY29tbWFuZHMgPSBnZXRDb21tYW5kcyhkKTtcbiAgdmFyIHBhcmFtcyA9IGdldFBhcmFtcyhkKTtcblxuICB2YXIgcG9pbnRzID0gW107XG5cbiAgdmFyIG1vdmVUbyA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbaV07XG4gICAgdmFyIHVwcGVyQ2FzZUNvbW1hbmQgPSBjb21tYW5kLnRvVXBwZXJDYXNlKCk7XG4gICAgdmFyIGNvbW1hbmRMZW5ndGggPSBjb21tYW5kTGVuZ3Roc1t1cHBlckNhc2VDb21tYW5kXTtcbiAgICB2YXIgcmVsYXRpdmUgPSBpc1JlbGF0aXZlKGNvbW1hbmQpO1xuXG4gICAgaWYgKGNvbW1hbmRMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY29tbWFuZFBhcmFtcyA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb21tYW5kUGFyYW1zLmxlbmd0aCAvIGNvbW1hbmRMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlcmF0aW9uczsgaisrKSB7XG4gICAgICAgIHZhciBwcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHN3aXRjaCAodXBwZXJDYXNlQ29tbWFuZCkge1xuICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgdmFyIHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICBtb3ZlVG8gPSB7IHg6IHgsIHk6IHkgfTtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiBwcmV2UG9pbnQueVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHByZXZQb2ludC54LFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJjJyxcbiAgICAgICAgICAgICAgICByeDogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHJ5OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbjogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gb3B0aW9uYWxBcmNLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3ViaWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHgyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgdmFyIHN4MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgZGlmZiA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgc3gxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHN5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ2N1YmljJykge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDIgPyBwcmV2UG9pbnQueCAtIGRpZmYueCA6IHByZXZQb2ludC54ICsgZGlmZi54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MiA/IHByZXZQb2ludC55IC0gZGlmZi55IDogcHJldlBvaW50LnkgKyBkaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhzeCAtIHN4Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHN5IC0gc3kyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdjdWJpYycsIHgxOiBzeDEsIHkxOiBzeTEsIHgyOiBzeDIsIHkyOiBzeTIgfSwgeDogc3gsIHk6IHN5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdxdWFkcmF0aWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgdmFyIHR4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB0eSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciB0eDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdHkxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAncXVhZHJhdGljJykge1xuICAgICAgICAgICAgICB2YXIgX2RpZmYgPSB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDEpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkxKVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngxID8gcHJldlBvaW50LnggLSBfZGlmZi54IDogcHJldlBvaW50LnggKyBfZGlmZi54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MSA/IHByZXZQb2ludC55IC0gX2RpZmYueSA6IHByZXZQb2ludC55ICsgX2RpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAncXVhZHJhdGljJywgeDE6IHR4MSwgeTE6IHR5MSB9LCB4OiB0eCwgeTogdHkgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKF9wcmV2UG9pbnQueCAhPT0gbW92ZVRvLnggfHwgX3ByZXZQb2ludC55ICE9PSBtb3ZlVG8ueSkge1xuICAgICAgICBwb2ludHMucHVzaCh7IHg6IG1vdmVUby54LCB5OiBtb3ZlVG8ueSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5Z29uID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlnb24oX3JlZjYpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY2LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogdHJ1ZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlsaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKF9yZWY3KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNy5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IGZhbHNlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9pbnRzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvaW50cyhfcmVmOCkge1xuICB2YXIgY2xvc2VkID0gX3JlZjguY2xvc2VkLFxuICAgICAgcG9pbnRzID0gX3JlZjgucG9pbnRzO1xuXG4gIHZhciBudW1iZXJzID0gcG9pbnRzLnNwbGl0KC9bXFxzLF0rLykubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobik7XG4gIH0pO1xuXG4gIHZhciBwID0gbnVtYmVycy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcG9pbnQsIGkpIHtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIGFyci5wdXNoKHsgeDogcG9pbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyclsoaSAtIDEpIC8gMl0ueSA9IHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH0sIFtdKTtcblxuICBpZiAoY2xvc2VkKSB7XG4gICAgcC5wdXNoKF9leHRlbmRzKHt9LCBwWzBdKSk7XG4gIH1cblxuICBwWzBdLm1vdmVUbyA9IHRydWU7XG5cbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdChfcmVmOSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjkuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmOS5yeCxcbiAgICAgIHJ5ID0gX3JlZjkucnksXG4gICAgICB3aWR0aCA9IF9yZWY5LndpZHRoLFxuICAgICAgeCA9IF9yZWY5LngsXG4gICAgICB5ID0gX3JlZjkueTtcblxuICBpZiAocnggfHwgcnkpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcng6IHJ4IHx8IHJ5LFxuICAgICAgcnk6IHJ5IHx8IHJ4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQmFzaWNSZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdChfcmVmMTApIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMC5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aCxcbiAgICAgIHggPSBfcmVmMTAueCxcbiAgICAgIHkgPSBfcmVmMTAueTtcblxuICByZXR1cm4gW3sgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKF9yZWYxMSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjExLmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjExLnJ4LFxuICAgICAgcnkgPSBfcmVmMTEucnksXG4gICAgICB3aWR0aCA9IF9yZWYxMS53aWR0aCxcbiAgICAgIHggPSBfcmVmMTEueCxcbiAgICAgIHkgPSBfcmVmMTEueTtcblxuICB2YXIgY3VydmUgPSB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH07XG5cbiAgcmV0dXJuIFt7IHg6IHggKyByeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IC0gcnkgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSArIGhlaWdodCwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHJ4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCAtIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4LCB5OiB5ICsgcnkgfSwgeyB4OiB4ICsgcngsIHk6IHksIGN1cnZlOiBjdXJ2ZSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21HKF9yZWYxMikge1xuICB2YXIgc2hhcGVzID0gX3JlZjEyLnNoYXBlcztcbiAgcmV0dXJuIHNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdG9Qb2ludHMocyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Qb2ludHM7IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZ2V0RXJyb3JzID0gZnVuY3Rpb24gZ2V0RXJyb3JzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHNoYXBlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHJ1bGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBtYXRjaCA9IF9yZWYubWF0Y2gsXG4gICAgICAgIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICAgIHJlcXVpcmVkID0gX3JlZi5yZXF1aXJlZCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuICAgIGlmICh0eXBlb2Ygc2hhcGVbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBpcyByZXF1aXJlZCcgKyAocHJvcCA9PT0gJ3R5cGUnID8gJycgOiAnIG9uIGEgJyArIHNoYXBlLnR5cGUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZVtwcm9wXSkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlIGFycmF5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2Yoc2hhcGVbcHJvcF0pICE9PSB0eXBlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSB2YWxpZC10eXBlb2ZcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSB7XG4gICAgICAgIGlmIChtYXRjaC5pbmRleE9mKHNoYXBlW3Byb3BdKSA9PT0gLTEpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb25lIG9mICcgKyBtYXRjaC5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHNoYXBlLnR5cGUgPT09ICdnJyAmJiBBcnJheS5pc0FycmF5KHNoYXBlLnNoYXBlcykpIHtcbiAgICB2YXIgY2hpbGRFcnJvcnMgPSBzaGFwZS5zaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZ2V0RXJyb3JzKHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoZXJyb3JzLCBjaGlsZEVycm9ycyk7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gW3tcbiAgICBtYXRjaDogWydjaXJjbGUnLCAnZWxsaXBzZScsICdsaW5lJywgJ3BhdGgnLCAncG9seWdvbicsICdwb2x5bGluZScsICdyZWN0JywgJ2cnXSxcbiAgICBwcm9wOiAndHlwZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfV07XG5cbiAgc3dpdGNoIChzaGFwZS50eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2QnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncG9pbnRzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnaGVpZ2h0JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd3aWR0aCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZyc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3NoYXBlcycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnYXJyYXknIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG52YXIgdmFsaWQgPSBmdW5jdGlvbiB2YWxpZChzaGFwZSkge1xuICB2YXIgZXJyb3JzID0gZ2V0RXJyb3JzKHNoYXBlKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yczogZXJyb3JzLFxuICAgIHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZDsiLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=