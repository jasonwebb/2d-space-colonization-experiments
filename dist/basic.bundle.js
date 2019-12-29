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

/***/ "./basic/js/Settings.js":
/*!******************************!*\
  !*** ./basic/js/Settings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ColorPresets */ "./core/ColorPresets.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
    Simulation configurations
  */

  VenationType: 'Open',         // venation can be "Open" or "Closed"
  SegmentLength: 5,             // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 30,       // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,              // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,              // initial pause/unpause state
  EnableCanalization: false,     // turns on/off auxin flux canalization (line segment thickening)
  EnableOpacityBlending: false,  // turns on/off opacity


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowSources: false,          // toggled with 's'
  ShowVeins: true,             // toggled with 'v'
  ShowVeinTips: false,         // toggled with 't'
  ShowAttractionZones: false,  // toggled with 'a'
  ShowKillZones: false,        // toggled with 'k'
  ShowInfluenceLines: false,   // toggled with 'i'
  ShowBounds: true,            // toggled with 'b'
  ShowObstacles: false,        // toggled with 'o'

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  UseVeinColors: false,
  Colors: _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Light"],

  // Line thicknesses
  VeinThickness: 1,
  VeinTipThickness: 2,
  BoundsBorderThickness: 1
});

/***/ }),

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
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings */ "./basic/js/Settings.js");








let canvas, ctx;
let network;

let showHelp = true;

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
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _Settings__WEBPACK_IMPORTED_MODULE_6__["default"]);

  // Set up the auxin sources using pre-made patterns
  let randomSources = Object(_core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["getRandomSources"])(500, ctx, 10);
  let gridSources = Object(_core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["getGridOfSources"])(150, 100, ctx, 10);
  let phyllotaxisSources = Object(_core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["getPhyllotaxisSources"])(ctx);
  let waveSources = Object(_core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["getWaveOfSources"])(ctx);

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
        ctx,
        _Settings__WEBPACK_IMPORTED_MODULE_6__["default"]
      )
    )
  }

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__["setupKeyListeners"])(network);
}

let drawText = () => {
  let text = [
    'No colors, no fancy vein thickness, just',
    'randomly placed sources and randomly',
    'placed vein roots.',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'v = toggle vein visibility',
    's = toggle source visibility',
    'a = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle vein tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.fillText('Basic', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(0,0,0,.5)';
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
    case "r":
      setupNetwork();
      break;

    // h = toggle help text
    case 'h':
      showHelp = !showHelp;
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
    this.position = position;     // vec2 of this source's position
    this.ctx = ctx;               // global canvas context
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.influencingNodes = [];   // references to nodes this source is influencing each frame
    this.fresh = true;            // flag used to prevent sources from being removed during first frame of Closed venation mode
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
  InfluenceLinesColor: 'rgba(255,255,255,.2)',
  BoundsFillColor: 'rgba(255,255,255,0)',
  BoundsBorderColor: 'rgba(255,255,255,.05)',
  ObstacleFillColor: 'rgba(255,255,255,.2)'
}

const Realistic = {
  BackgroundColor: 'rgba(255,255,255,1)',
  SourceColor: 'rgba(255,255,255,1)',
  VeinColor: 'rgba(255,255,255,.6)',
  // VeinColor: 'rgba(0,0,0,.2)',
  VeinTipColor: 'rgba(255,0,0,1)',
  AttractionZoneColor: 'rgba(0,255,0,.002)',
  KillZoneColor: 'rgba(255,0,0,.4)',
  InfluenceLinesColor: 'rgba(0,0,255,1)',
  BoundsFillColor: 'rgba(61,166,12,1)',
  BoundsBorderColor: 'rgba(255,255,255,1)',
  ObstacleFillColor: 'rgba(255,255,255,1)'
}

const Custom = {
  BackgroundColor: 'rgb(242,242,242)',
  SourceColor: 'rgba(255,255,255,.6)',
  VeinColor: 'rgba(255,255,255,1)',
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
  SegmentLength: 5,             // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 30,       // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,              // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,              // initial pause/unpause state
  EnableCanalization: true,     // turns on/off auxin flux canalization (line segment thickening)
  EnableOpacityBlending: true,  // turns on/off opacity


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowSources: false,          // toggled with 's'
  ShowVeins: true,             // toggled with 'v'
  ShowVeinTips: false,         // toggled with 't'
  ShowAttractionZones: false,  // toggled with 'a'
  ShowKillZones: false,        // toggled with 'k'
  ShowInfluenceLines: false,   // toggled with 'i'
  ShowBounds: false,           // toggled with 'b'
  ShowObstacles: false,        // toggled with 'o'

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  Colors: _ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Dark"],

  // Line thicknesses
  VeinThickness: 1.5,
  VeinTipThickness: 2,
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

      // v = toggle vein visibility
      case 'v':
        network.toggleVeins();
        break;

      // s = toggle auxin source visibility
      case 's':
        network.toggleSources();
        break;

      // a = toggle attraction zone visibility
      case 'a':
        network.toggleAttractionZones();
        break;

      // t = toggle vein tip visibility
      case 't':
        network.toggleVeinTips();
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
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./core/Path.js");






class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.sources = [];  // sources (AuxinSources) attract vein nodes
    this.nodes = [];    // nodes (VeinNodes) are connected to form veins

    this.nodesIndex;    // kd-bush spatial index for all nodes

    this.bounds = [];     // array of Path objects that veins cannot grow outside of
    this.obstacles = [];  // array of Path objects that veins must avoid

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

          source.influencingNodes = neighborhoodNodes;

          if(nodesToGrow.length > 0) {
            source.fresh = false;

            for(let node of nodesToGrow) {
              node.influencedBy.push(sourceID);
            }
          }


          break;
      }
    }

    // Grow the network by adding new vein nodes onto any nodes being influenced by sources
    for(let node of this.nodes) {
      if(node.influencedBy.length > 0) {
        let averageDirection = this.getAverageDirection(node, node.influencedBy.map(id => this.sources[id]));
        let nextNode = node.getNextNode(averageDirection);
        let isInsideAnyBounds = false;
        let isInsideAnyObstacle = false;

        // Only allow root veins inside of defined bounds
        if(this.bounds != undefined && this.bounds.length > 0) {
          for(let bound of this.bounds) {
            if(bound.contains(nextNode.position.x, nextNode.position.y)) {
              isInsideAnyBounds = true;
            }
          }
        }

        // Don't allow any root veins that are inside of an obstacle
        if(this.obstacles != undefined && this.obstacles.length > 0) {
          for(let obstacle of this.obstacles) {
            if(obstacle.contains(nextNode.position.x, nextNode.position.y)) {
              isInsideAnyObstacle = true;
            }
          }
        }

        // NOTE: disabling this check lets veins grow across gaps in bounds - cool effect!
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
          // When there are multiple child veins, use the thickest of them all
          if(currentNode.parent.thickness < currentNode.thickness + .07) {
            currentNode.parent.thickness = currentNode.thickness + .03;
          }

          currentNode = currentNode.parent;
        }
      }
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
          if(source.influencingNodes.length > 0 && !source.fresh) {
            let allNodesReached = true;

            for(let node of source.influencingNodes) {
              if(node.position.distance(source.position) > this.settings.KillDistance) {
                allNodesReached = false;
              }
            }

            if(allNodesReached) {
              this.sources.splice(sourceID, 1);
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
    this.drawSources();
    this.drawVeins();
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
    let isInsideAnyBounds = false;
    let isInsideAnyObstacle = false;

    // Only allow root veins inside of defined bounds
    if(this.bounds != undefined && this.bounds.length > 0) {
      for(let bound of this.bounds) {
        if(bound.contains(node.position.x, node.position.y)) {
          isInsideAnyBounds = true;
        }
      }
    }

    // Don't allow any root veins that are inside of an obstacle
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

    for(let source of this.sources) {
      source.settings.ShowSources = !source.settings.ShowSources;
    }
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

/***/ "./core/SourcePatterns.js":
/*!********************************!*\
  !*** ./core/SourcePatterns.js ***!
  \********************************/
/*! exports provided: getRandomSources, getGridOfSources, getPhyllotaxisSources, getWaveOfSources, applyNoise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomSources", function() { return getRandomSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridOfSources", function() { return getGridOfSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPhyllotaxisSources", function() { return getPhyllotaxisSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWaveOfSources", function() { return getWaveOfSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNoise", function() { return applyNoise; });
/* harmony import */ var _AuxinSource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuxinSource */ "./core/AuxinSource.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");



var SimplexNoise = __webpack_require__(/*! simplex-noise */ "./node_modules/simplex-noise/simplex-noise.js");

function getRandomSources(numSources, ctx, bounds = undefined, obstacles = undefined) {
  let sources = [];
  let x, y;
  let isInsideAnyBounds, isInsideAnyObstacle, isOnScreen;

  for(let i=0; i<numSources; i++) {
    x = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerWidth);
    y = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerHeight);
    isInsideAnyBounds = false;
    isInsideAnyObstacle = false;
    isOnScreen = false;

    // Only allow sources that are in the viewport
    if(
      x > 0 &&
      x < window.innerWidth &&
      y > 0 &&
      y < window.innerHeight
    ) {
      isOnScreen = true;
    }

    // Only allow root veins inside of defined bounds
    if(bounds != undefined && bounds.length > 0) {
      for(let bound of bounds) {
        if(bound.contains(x, y)) {
          isInsideAnyBounds = true;
        }
      }
    }

    // Don't allow any root veins that are inside of an obstacle
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
      sources.push(
        new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
          new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
          ctx
        )
      );
    }
  }

  return sources;
}

function getGridOfSources(numRows, numColumns, ctx, jitterRange = 0, bounds = undefined, obstacles = undefined) {
  let sources = [];
  let x, y;
  let isInsideAnyBounds, isInsideAnyObstacle, isOnScreen;

  for(let i=0; i<=numRows; i++) {
    for(let j=0; j<=numColumns; j++) {
      x = (window.innerWidth / numColumns) * j + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-jitterRange, jitterRange);
      y = (window.innerHeight / numRows) * i + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-jitterRange, jitterRange);
      isInsideAnyBounds = false;
      isInsideAnyObstacle = false;
      isOnScreen = false;

      // Only allow sources that are in the viewport
      if(
        x > 0 &&
        x < window.innerWidth &&
        y > 0 &&
        y < window.innerHeight
      ) {
        isOnScreen = true;
      }

      // Only allow sources inside of any of the defined bounds (if used)
      if(bounds != undefined && bounds.length > 0) {
        for(let bound of bounds) {
          if(bound.contains(x, y)) {
            isInsideAnyBounds = true;
          }
        }
      }

      // Don't allow any root veins that are inside of an obstacle (if used)
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
        sources.push(
          new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(x,y),
            ctx
          )
        );
      }
    }
  }

  return sources;
}

function getPhyllotaxisSources(ctx) {
  let sources = [];
  let numCircles = 5000,
  golden_ratio = (Math.sqrt(5)+1)/2 - 1,
  golden_angle = golden_ratio * (2*Math.PI),
  circle_rad = window.innerWidth/2;


  for(let i=0; i<numCircles; i++) {
    let ratio = i / numCircles,
      angle = i * golden_angle,
      spiral_rad = ratio * circle_rad;

    sources.push(
      new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
        new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(
          window.innerWidth/2 + Math.cos(angle) * spiral_rad,
          window.innerHeight/2 + Math.sin(angle) * spiral_rad
        ),
        ctx
      )
    );
  }

  return sources;
}

function getWaveOfSources(ctx) {
  let sources = [];
  let numRows = 70;
  let numColumns = 100;
  let rowSpacing = window.innerHeight / numRows;
  let colSpacing = window.innerWidth / numColumns;

  for(let row = 0; row < numRows; row++) {
    for(let col = 0; col < numColumns; col++) {
      sources.push(
        new _AuxinSource__WEBPACK_IMPORTED_MODULE_0__["default"](
          new vec2__WEBPACK_IMPORTED_MODULE_1___default.a(
            (col * colSpacing) + (Math.sin(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["map"])(col, 0, numColumns, 0, Math.PI * 2)) * 200),
            (row * rowSpacing) + (Math.sin(Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["map"])(row, 0, numRows, 0, Math.PI * 2)) * 50)
          ),
          ctx
        )
      )
    }
  }

  return sources;
}

function applyNoise(sources) {
  let noise = new SimplexNoise();

  for(let source of sources) {
    source.position.x += noise.noise2D(source.position.x, source.position.y) * 10;
    source.position.y += noise.noise2D(source.position.x, source.position.y) * 10;
  }

  return sources;
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

  // Create <line>s for each vein segment
  if(network.settings.ShowVeins) {
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
  constructor(parent, position, isTip, ctx, settings, color = undefined) {
    this.parent = parent;       // reference to parent node, necessary for vein thickening later
    this.position = position;   // {vec2} of this node's position
    this.isTip = isTip;         // {boolean}
    this.ctx = ctx;             // global canvas context for drawing
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
    this.color = color;         // color, usually passed down from parent

    this.influencedBy = [];     // references to all AuxinSources influencing this node each frame
    this.thickness = 0;         // thickness - this is increased during vein thickening process
  }

  draw() {
    if(this.parent != null) {
      // Smoothly ramp up opacity based on vein thickness
      if(this.settings.EnableOpacityBlending) {
        this.ctx.globalAlpha = this.thickness / 3 + .2;
      }

      // "Lines" render mode
      if(this.settings.VeinRenderMode == 'Lines') {
        this.ctx.beginPath();
        this.ctx.moveTo(this.position.x, this.position.y);
        this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.strokeStyle = this.settings.Colors.VeinTipColor;
          this.ctx.lineWidth = this.settings.VeinTipThickness;
        } else {
          if(this.color != undefined) {
            this.ctx.strokeStyle = this.color;
          } else {
            this.ctx.strokeStyle = this.settings.Colors.VeinColor;
          }

          this.ctx.lineWidth = this.settings.VeinThickness + this.thickness;
        }

        this.ctx.stroke();
        this.ctx.lineWidth = 1;

      // "Dots" render mode
      } else if(this.settings.VeinRenderMode == 'Dots') {
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
        if(this.isTip && this.settings.ShowVeinTips) {
          this.ctx.fillStyle = this.settings.Colors.VeinTipColor;
        } else {
          this.ctx.fillStyle = this.settings.Colors.VeinColor;
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
  getNextNode(averageSourceDirection) {
    this.isTip = false;
    this.nextPosition = this.position.add(averageSourceDirection.multiply(this.settings.SegmentLength), true);

    return new VeinNode(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NvdXJjZVBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wb2ludC1pbi1wb2x5Z29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGV4LW5vaXNlL3NpbXBsZXgtbm9pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUG9pbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZlYzIvdmVjMi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUE4RDs7QUFFL0M7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSx3REFBSzs7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixpQ0FBSTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFJLENBQUMseURBQU0sV0FBVyx5REFBTTs7QUFFekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsOENBQU07QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2U7QUFDZjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdEZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQ0FBc0MsZUFBZTtBQUNyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLFFBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUNBQXFDLFVBQVUsRUFBRTs7QUFFakQ7QUFDQSxRQUFRLEtBQTZCO0FBQ3JDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDeGREOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJiYXNpYy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jhc2ljL2pzL2VudHJ5LmpzXCIpO1xuIiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4uLy4uL2NvcmUvQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDMwLCAgICAgICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiBmYWxzZSwgICAgIC8vIHR1cm5zIG9uL29mZiBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgRW5hYmxlT3BhY2l0eUJsZW5kaW5nOiBmYWxzZSwgIC8vIHR1cm5zIG9uL29mZiBvcGFjaXR5XHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dTb3VyY2VzOiBmYWxzZSwgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdzJ1xyXG4gIFNob3dWZWluczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd2J1xyXG4gIFNob3dWZWluVGlwczogZmFsc2UsICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdrJ1xyXG4gIFNob3dJbmZsdWVuY2VMaW5lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IHRydWUsICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdvJ1xyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFZlaW5SZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyB2ZWluIHNlZ21lbnRzIGFzIFwiTGluZXNcIiBvciBcIkRvdHNcIlxyXG5cclxuICAvLyBDb2xvcnNcclxuICBVc2VWZWluQ29sb3JzOiBmYWxzZSxcclxuICBDb2xvcnM6IExpZ2h0LFxyXG5cclxuICAvLyBMaW5lIHRoaWNrbmVzc2VzXHJcbiAgVmVpblRoaWNrbmVzczogMSxcclxuICBWZWluVGlwVGhpY2tuZXNzOiAyLFxyXG4gIEJvdW5kc0JvcmRlclRoaWNrbmVzczogMVxyXG59IiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi4vLi4vY29yZS9OZXR3b3JrJztcclxuaW1wb3J0IHsgZ2V0UmFuZG9tU291cmNlcywgZ2V0R3JpZE9mU291cmNlcywgYXBwbHlOb2lzZSwgZ2V0UGh5bGxvdGF4aXNTb3VyY2VzLCBnZXRXYXZlT2ZTb3VyY2VzIH0gZnJvbSAnLi4vLi4vY29yZS9Tb3VyY2VQYXR0ZXJucyc7XHJcbmltcG9ydCBWZWluTm9kZSBmcm9tICcuLi8uLi9jb3JlL1ZlaW5Ob2RlJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxubGV0IHNob3dIZWxwID0gdHJ1ZTtcclxuXHJcbi8vIENyZWF0ZSBpbml0aWFsIGNvbmRpdGlvbnMgZm9yIHNpbXVsYXRpb25cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBTZXR1cCBOZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgc2V0dXBOZXR3b3JrKCk7XHJcblxyXG4gIC8vIEJlZ2luIGFuaW1hdGlvbiBsb29wXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG5sZXQgc2V0dXBOZXR3b3JrID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgc2ltdWxhdGlvbiBvYmplY3RcclxuICBuZXR3b3JrID0gbmV3IE5ldHdvcmsoY3R4LCBTZXR0aW5ncyk7XHJcblxyXG4gIC8vIFNldCB1cCB0aGUgYXV4aW4gc291cmNlcyB1c2luZyBwcmUtbWFkZSBwYXR0ZXJuc1xyXG4gIGxldCByYW5kb21Tb3VyY2VzID0gZ2V0UmFuZG9tU291cmNlcyg1MDAsIGN0eCwgMTApO1xyXG4gIGxldCBncmlkU291cmNlcyA9IGdldEdyaWRPZlNvdXJjZXMoMTUwLCAxMDAsIGN0eCwgMTApO1xyXG4gIGxldCBwaHlsbG90YXhpc1NvdXJjZXMgPSBnZXRQaHlsbG90YXhpc1NvdXJjZXMoY3R4KTtcclxuICBsZXQgd2F2ZVNvdXJjZXMgPSBnZXRXYXZlT2ZTb3VyY2VzKGN0eCk7XHJcblxyXG4gIG5ldHdvcmsuc291cmNlcyA9IGdyaWRTb3VyY2VzO1xyXG5cclxuICAvLyBBZGQgYSBzZXQgb2YgcmFuZG9tIHJvb3QgdmVpbnMgdGhyb3VnaG91dCBzY2VuZVxyXG4gIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgIG5ldyBWZWluTm9kZShcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgcmFuZG9tKHdpbmRvdy5pbm5lcldpZHRoKSxcclxuICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgKSxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIGN0eCxcclxuICAgICAgICBTZXR0aW5nc1xyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICAvLyBTZXQgdXAgY29tbW9uIGtleWJvYXJkIGludGVyYWN0aW9uIGxpc3RlbmVyc1xyXG4gIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspO1xyXG59XHJcblxyXG5sZXQgZHJhd1RleHQgPSAoKSA9PiB7XHJcbiAgbGV0IHRleHQgPSBbXHJcbiAgICAnTm8gY29sb3JzLCBubyBmYW5jeSB2ZWluIHRoaWNrbmVzcywganVzdCcsXHJcbiAgICAncmFuZG9tbHkgcGxhY2VkIHNvdXJjZXMgYW5kIHJhbmRvbWx5JyxcclxuICAgICdwbGFjZWQgdmVpbiByb290cy4nLFxyXG4gICAgJycsXHJcbiAgICAnU3BhY2UgPSB0b2dnbGUgcGF1c2UnLFxyXG4gICAgJ3IgPSByZXNldCcsXHJcbiAgICAnYyA9IHRvZ2dsZSBjYW5hbGl6YXRpb24nLFxyXG4gICAgJ3AgPSB0b2dnbGUgb3BhY2l0eSBibGVuZGluZycsXHJcbiAgICAndiA9IHRvZ2dsZSB2ZWluIHZpc2liaWxpdHknLFxyXG4gICAgJ3MgPSB0b2dnbGUgc291cmNlIHZpc2liaWxpdHknLFxyXG4gICAgJ2EgPSB0b2dnbGUgYXR0cmFjdGlvbiB6b25lcycsXHJcbiAgICAnayA9IHRvZ2dsZSBraWxsIHpvbmVzJyxcclxuICAgICd0ID0gdG9nZ2xlIHZlaW4gdGlwcycsXHJcbiAgICAnaSA9IHRvZ2dsZSBpbmZsdWVuY2UgbGluZXMnLFxyXG4gICAgJ2ggPSB0b2dnbGUgdGhpcyBoZWxwIHRleHQnXHJcbiAgXTtcclxuXHJcbiAgY3R4LmZvbnQgPSAnYm9sZCAyNHB4IHNhbnMtc2VyaWYnO1xyXG4gIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLDAsMCwxKSc7XHJcbiAgY3R4LmZpbGxUZXh0KCdCYXNpYycsIDIwLCA0MCk7XHJcblxyXG4gIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLC41KSc7XHJcbiAgZm9yKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KHRleHRbaV0sIDIwLCAyMippICsgODApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICBpZihzaG93SGVscCkge1xyXG4gICAgZHJhd1RleHQoKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgXCJyXCI6XHJcbiAgICAgIHNldHVwTmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyBoID0gdG9nZ2xlIGhlbHAgdGV4dFxyXG4gICAgY2FzZSAnaCc6XHJcbiAgICAgIHNob3dIZWxwID0gIXNob3dIZWxwO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbi8vIEtpY2sgb2ZmIHRoZSBhcHBsaWNhdGlvblxyXG5zZXR1cCgpOyIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1eGluU291cmNlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAgICAvLyB2ZWMyIG9mIHRoaXMgc291cmNlJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2luZ05vZGVzID0gW107ICAgLy8gcmVmZXJlbmNlcyB0byBub2RlcyB0aGlzIHNvdXJjZSBpcyBpbmZsdWVuY2luZyBlYWNoIGZyYW1lXHJcbiAgICB0aGlzLmZyZXNoID0gdHJ1ZTsgICAgICAgICAgICAvLyBmbGFnIHVzZWQgdG8gcHJldmVudCBzb3VyY2VzIGZyb20gYmVpbmcgcmVtb3ZlZCBkdXJpbmcgZmlyc3QgZnJhbWUgb2YgQ2xvc2VkIHZlbmF0aW9uIG1vZGVcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3Rpb25ab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBraWxsIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBhdXhpbiBzb3VyY2VcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuU291cmNlQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTGlnaHQgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgwLDAsMCwxKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgwLDI1NSwwLC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMCwwLDI1NSwxKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuNyknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjkpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVhbGlzdGljID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNiknLFxyXG4gIC8vIFZlaW5Db2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDYxLDE2NiwxMiwxKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b20gPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwyNDIsMjQyKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjMpJyxcclxuICAvLyBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoNjEsODUsMTM2KScsXHJcbiAgLy8gQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoNjEsODUsMTM2KSdcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoMjEwLCA4MSwgOTQpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknXHJcbn0iLCJpbXBvcnQgeyBMaWdodCwgRGFyaywgUmVhbGlzdGljLCBDdXN0b20gfSBmcm9tICcuL0NvbG9yUHJlc2V0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICBTaW11bGF0aW9uIGNvbmZpZ3VyYXRpb25zXHJcbiAgKi9cclxuXHJcbiAgVmVuYXRpb25UeXBlOiAnT3BlbicsICAgICAgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgICAgICAvLyBsZW5ndGggb2YgZWFjaCB2ZWluIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiAzMCwgICAgICAgLy8gcmFkaXVzIG9mIGluZmx1ZW5jZSAoZF9pKSBhcm91bmQgZWFjaCBhdXhpbiBzb3VyY2UgdGhhdCBhdHRyYWN0cyB2ZWluIHNlZ21lbnRzXHJcbiAgS2lsbERpc3RhbmNlOiA1LCAgICAgICAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdXhpbiBzb3VyY2VzIGFuZCBzZWdtZW50cyB3aGVuIHNlZ21lbnRzIGFyZSBlbmRlZFxyXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAgICAgIC8vIGluaXRpYWwgcGF1c2UvdW5wYXVzZSBzdGF0ZVxyXG4gIEVuYWJsZUNhbmFsaXphdGlvbjogdHJ1ZSwgICAgIC8vIHR1cm5zIG9uL29mZiBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgRW5hYmxlT3BhY2l0eUJsZW5kaW5nOiB0cnVlLCAgLy8gdHVybnMgb24vb2ZmIG9wYWNpdHlcclxuXHJcblxyXG4gIC8qKlxyXG4gICAgUmVuZGVyaW5nIGNvbmZpZ3VyYXRpb25zXHJcbiAgKi9cclxuXHJcbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXHJcbiAgU2hvd1NvdXJjZXM6IGZhbHNlLCAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3MnXHJcbiAgU2hvd1ZlaW5zOiB0cnVlLCAgICAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3YnXHJcbiAgU2hvd1ZlaW5UaXBzOiBmYWxzZSwgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3QnXHJcbiAgU2hvd0F0dHJhY3Rpb25ab25lczogZmFsc2UsICAvLyB0b2dnbGVkIHdpdGggJ2EnXHJcbiAgU2hvd0tpbGxab25lczogZmFsc2UsICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ2snXHJcbiAgU2hvd0luZmx1ZW5jZUxpbmVzOiBmYWxzZSwgICAvLyB0b2dnbGVkIHdpdGggJ2knXHJcbiAgU2hvd0JvdW5kczogZmFsc2UsICAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ2InXHJcbiAgU2hvd09ic3RhY2xlczogZmFsc2UsICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ28nXHJcblxyXG4gIC8vIE1vZGVzXHJcbiAgVmVpblJlbmRlck1vZGU6ICdMaW5lcycsICAvLyBkcmF3IHZlaW4gc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogRGFyayxcclxuXHJcbiAgLy8gTGluZSB0aGlja25lc3Nlc1xyXG4gIFZlaW5UaGlja25lc3M6IDEuNSxcclxuICBWZWluVGlwVGhpY2tuZXNzOiAyLFxyXG4gIEJvdW5kc0JvcmRlclRoaWNrbmVzczogMVxyXG59IiwiaW1wb3J0IHsgZXhwb3J0U1ZHIH0gZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yaykge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICAvLyBTcGFjZSA9IHBhdXNlL3VucGF1c2VcclxuICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdiA9IHRvZ2dsZSB2ZWluIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVWZWlucygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gcyA9IHRvZ2dsZSBhdXhpbiBzb3VyY2UgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdzJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVNvdXJjZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGEgPSB0b2dnbGUgYXR0cmFjdGlvbiB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVBdHRyYWN0aW9uWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHQgPSB0b2dnbGUgdmVpbiB0aXAgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd0JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5UaXBzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBrID0gdG9nZ2xlIGtpbGwgem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlS2lsbFpvbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2knOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlSW5mbHVlbmNlTGluZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGIgPSB0b2dnbGUgYm91bmRzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIG8gPSB0b2dnbGUgb2JzdGFjbGVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVPYnN0YWNsZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGUgPSBleHBvcnQgYW4gU1ZHIGZpbGUgb2YgYWxsIHZpc2libGUgZ2VvbWV0cnlcclxuICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgZXhwb3J0U1ZHKG5ldHdvcmspO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYyA9IHRvZ2dsZSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvblxyXG4gICAgICBjYXNlICdjJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUNhbmFsaXphdGlvbigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gcCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nXHJcbiAgICAgIGNhc2UgJ3AnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlT3BhY2l0eUJsZW5kaW5nKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTsgIC8vIHNvdXJjZXMgKEF1eGluU291cmNlcykgYXR0cmFjdCB2ZWluIG5vZGVzXHJcbiAgICB0aGlzLm5vZGVzID0gW107ICAgIC8vIG5vZGVzIChWZWluTm9kZXMpIGFyZSBjb25uZWN0ZWQgdG8gZm9ybSB2ZWluc1xyXG5cclxuICAgIHRoaXMubm9kZXNJbmRleDsgICAgLy8ga2QtYnVzaCBzcGF0aWFsIGluZGV4IGZvciBhbGwgbm9kZXNcclxuXHJcbiAgICB0aGlzLmJvdW5kcyA9IFtdOyAgICAgLy8gYXJyYXkgb2YgUGF0aCBvYmplY3RzIHRoYXQgdmVpbnMgY2Fubm90IGdyb3cgb3V0c2lkZSBvZlxyXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTsgIC8vIGFycmF5IG9mIFBhdGggb2JqZWN0cyB0aGF0IHZlaW5zIG11c3QgYXZvaWRcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggaXRzIGNsb3Nlc3QgdmVpbiBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKHNvdXJjZSwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIHNvdXJjZSdzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IG5laWdoYm9yaG9vZE5vZGVzO1xyXG5cclxuICAgICAgICAgIGlmKG5vZGVzVG9Hcm93Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc291cmNlLmZyZXNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXNUb0dyb3cpIHtcclxuICAgICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyB2ZWluIG5vZGVzIG9udG8gYW55IG5vZGVzIGJlaW5nIGluZmx1ZW5jZWQgYnkgc291cmNlc1xyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gdGhpcy5nZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5vZGUuaW5mbHVlbmNlZEJ5Lm1hcChpZCA9PiB0aGlzLnNvdXJjZXNbaWRdKSk7XHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICAgICAgaWYodGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkICYmIHRoaXMuYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICAgICAgaWYoYm91bmQuY29udGFpbnMobmV4dE5vZGUucG9zaXRpb24ueCwgbmV4dE5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxyXG4gICAgICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5PVEU6IGRpc2FibGluZyB0aGlzIGNoZWNrIGxldHMgdmVpbnMgZ3JvdyBhY3Jvc3MgZ2FwcyBpbiBib3VuZHMgLSBjb29sIGVmZmVjdCFcclxuICAgICAgICBpZihcclxuICAgICAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCB0aGlzLmJvdW5kcy5sZW5ndGggPT09IDApICYmXHJcbiAgICAgICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5leHROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vZGUuaW5mbHVlbmNlZEJ5ID0gW107XHJcblxyXG4gICAgICAvLyBQZXJmb3JtIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICAgICAgaWYobm9kZS5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbikge1xyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gICAgICAgIHdoaWxlKGN1cnJlbnROb2RlLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBjaGlsZCB2ZWlucywgdXNlIHRoZSB0aGlja2VzdCBvZiB0aGVtIGFsbFxyXG4gICAgICAgICAgaWYoY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA8IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wNykge1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5wYXJlbnQudGhpY2tuZXNzID0gY3VycmVudE5vZGUudGhpY2tuZXNzICsgLjAzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBhbnkgYXV4aW4gc291cmNlcyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgdmVpbiBub2Rlc1xyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2UgYXMgc29vbiBhcyBhbnkgdmVpbiBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5yZWFjaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCByZW1vdmUgdGhlIHNvdXJjZSBvbmx5IHdoZW4gYWxsIGFzc29jaWF0ZWQgdmVpbiBub2RlcyBoYXZlIHJlYWNoZWQgaXRcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgaWYoc291cmNlLmluZmx1ZW5jaW5nTm9kZXMubGVuZ3RoID4gMCAmJiAhc291cmNlLmZyZXNoKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxOb2Rlc1JlYWNoZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICAgICAgaWYobm9kZS5wb3NpdGlvbi5kaXN0YW5jZShzb3VyY2UucG9zaXRpb24pID4gdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGFsbE5vZGVzUmVhY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWxsTm9kZXNSZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYnVpbGQgc3BhdGlhbCBpbmRpY2VzXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICB0aGlzLmRyYXdCb3VuZHMoKTtcclxuICAgIHRoaXMuZHJhd09ic3RhY2xlcygpO1xyXG4gICAgdGhpcy5kcmF3U291cmNlcygpO1xyXG4gICAgdGhpcy5kcmF3VmVpbnMoKTtcclxuICB9XHJcblxyXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3Qm91bmRzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgYm91bmQuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3T2JzdGFjbGVzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgb2JzdGFjbGUuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3VmVpbnMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3U291cmNlcygpIHtcclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2UuZHJhdygpO1xyXG5cclxuICAgICAgLy8gRHJhdyBsaW5lcyBiZXR3ZWVuIGVhY2ggc291cmNlIGFuZCB0aGUgbm9kZXMgdGhleSBhcmUgaW5mbHVlbmNpbmdcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXMgJiYgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgbm9kZSBvZiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oc291cmNlLnBvc2l0aW9uLngsIHNvdXJjZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkluZmx1ZW5jZUxpbmVzQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJlbGF0aXZlTmVpZ2hib3JOb2Rlcyhzb3VyY2UpIHtcclxuICAgIGxldCBmYWlsO1xyXG5cclxuICAgIGxldCBuZWFyYnlOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSk7XHJcbiAgICBsZXQgcmVsYXRpdmVOZWlnaGJvcnMgPSBbXTtcclxuICAgIGxldCBzb3VyY2VUb1AwLCBzb3VyY2VUb1AxLCBwMFRvUDE7XHJcblxyXG4gICAgLy8gcDAgaXMgYSByZWxhdGl2ZSBuZWlnaGJvciBvZiBhdXhpblBvcyBpZmZcclxuICAgIC8vIGZvciBhbnkgcG9pbnQgcDEgdGhhdCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiBpcyBwMCxcclxuICAgIC8vIHAwIGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIHRvIHAxXHJcbiAgICBmb3IobGV0IHAwIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGZhaWwgPSBmYWxzZTtcclxuICAgICAgc291cmNlVG9QMCA9IHAwLnBvc2l0aW9uLnN1YnRyYWN0KHNvdXJjZS5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICBmb3IobGV0IHAxIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgICAgaWYocDAgPT09IHAxKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNvdXJjZVRvUDEgPSBwMS5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AxLmxlbmd0aCgpID4gc291cmNlVG9QMC5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwMFRvUDEgPSBwMS5wb3NpdGlvbi5zdWJ0cmFjdChwMC5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKHNvdXJjZVRvUDAubGVuZ3RoKCkgPiBwMFRvUDEubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGZhaWwgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighZmFpbCkge1xyXG4gICAgICAgIHJlbGF0aXZlTmVpZ2hib3JzLnB1c2gocDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlbGF0aXZlTmVpZ2hib3JzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi54LFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDbG9zZXN0Tm9kZShzb3VyY2UsIG5lYXJieU5vZGVzKSB7XHJcbiAgICBsZXQgY2xvc2VzdE5vZGUgPSBudWxsLFxyXG4gICAgICByZWNvcmQgPSB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZTtcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gbm9kZS5wb3NpdGlvbi5kaXN0YW5jZShzb3VyY2UucG9zaXRpb24pO1xyXG5cclxuICAgICAgaWYoZGlzdGFuY2UgPCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xyXG4gICAgICAgIHNvdXJjZS5yZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZihkaXN0YW5jZSA8IHJlY29yZCkge1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbm9kZTtcclxuICAgICAgICByZWNvcmQgPSBkaXN0YW5jZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9zZXN0Tm9kZTtcclxuICB9XHJcblxyXG4gIGdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbmVhcmJ5U291cmNlcykge1xyXG4gICAgLy8gQWRkIHVwIG5vcm1hbGl6ZWQgdmVjdG9ycyBwb2ludGluZyB0byBlYWNoIGF1eGluIHNvdXJjZVxyXG4gICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSBuZXcgVmVjMigwLDApO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIG5lYXJieVNvdXJjZXMpIHtcclxuICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQoXHJcbiAgICAgICAgc291cmNlLnBvc2l0aW9uLnN1YnRyYWN0KG5vZGUucG9zaXRpb24sIHRydWUpLm5vcm1hbGl6ZSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHNtYWxsIGFtb3VudCBvZiByYW5kb20gXCJqaXR0ZXJcIiB0byBhdm9pZCBnZXR0aW5nIHN0dWNrIGJldHdlZW4gdHdvIGF1eGluIHNvdXJjZXMgYW5kIGVuZGxlc3NseSBnZW5lcmF0aW5nIG5vZGVzIGluIHRoZSBzYW1lIHBsYWNlXHJcbiAgICAvLyAoQ3JlZGl0IHRvIERhdmlkZSBQcmF0aSAoZWRhcCkgZm9yIHRoZSBpZGVhLCBzZWVuIGluIG9meFNwYWNlQ29sb25pemF0aW9uKVxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5hZGQobmV3IFZlYzIocmFuZG9tKC0uMSwgLjEpLCByYW5kb20oLS4xLCAuMSkpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmRpdmlkZShub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGgpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIHJldHVybiBhdmVyYWdlRGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgYWRkVmVpbk5vZGUobm9kZSkge1xyXG4gICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCB2ZWlucyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBpZihib3VuZC5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKFxyXG4gICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcclxuICAgIHRoaXMubm9kZXNJbmRleCA9IG5ldyBLREJ1c2godGhpcy5ub2RlcywgcCA9PiBwLnBvc2l0aW9uLngsIHAgPT4gcC5wb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZlaW5zKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VmVpbnMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VmVpbnM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWluVGlwcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIW5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU291cmNlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93U291cmNlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3Rpb25ab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlS2lsbFpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJbmZsdWVuY2VMaW5lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm91bmRzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZU9ic3RhY2xlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyA9ICF0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDYW5hbGl6YXRpb24oKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbiA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbjtcclxuXHJcbiAgICBpZighdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLnRoaWNrbmVzcyA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZU9wYWNpdHlCbGVuZGluZygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nID0gIXRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nID0gdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVQYXVzZSgpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQgPSAhdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZDtcclxuICB9XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcblxyXG5sZXQgaW5zaWRlID0gcmVxdWlyZSgncG9pbnQtaW4tcG9seWdvbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGF0aCB7XHJcbiAgY29uc3RydWN0b3IocG9seWdvbiwgdHlwZSwgY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5wb2x5Z29uID0gcG9seWdvbjsgICAgIC8vIGFycmF5IG9mIGFycmF5cyBjb250YWluaW5nIGNvb3JkaW5hdGVzIGRlZmluaW5nIGEgcG9seWdvbiAoW1t4MCx5MF0sW3gxLHkxXSwuLi5dKVxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dFxyXG4gICAgdGhpcy50eXBlID0gdHlwZTsgICAgICAgICAgIC8vIHN0cmluZyBlaXRoZXIgJ0JvdW5kcycgb3IgJ09ic3RhY2xlJ1xyXG5cclxuICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uID0gcG9seWdvbjsgIC8vIFBhdGhzIGFyZSBpbml0aWFsaXplZCB3aXRob3V0IGFueSB0cmFuc2Zvcm1hdGlvbnMgYnkgZGVmYXVsdFxyXG4gICAgdGhpcy5vcmlnaW4gPSB7eDowLCB5OjB9OyAgICAgICAgICAgLy8gb3JpZ2luIHBvaW50IHVzZWQgZm9yIHRyYW5zbGF0aW9uXHJcbiAgICB0aGlzLnNjYWxlID0gMTsgICAgICAgICAgICAgICAgICAgICAvLyBtdWx0aXBsaWNhdGlvbiBmYWN0b3IgZm9yIHBvbHlnb24gY29vcmRpbmF0ZXNcclxuICAgIHRoaXMud2lkdGggPSAtMTsgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoIG9mIHRyYW5zZm9ybWVkIHBvbHlnb24gLSB3aWxsIGJlIGNhbGN1bGF0ZWQgdXNpbmcgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKClcclxuICAgIHRoaXMuaGVpZ2h0ID0gLTE7ICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodCBvZiB0cmFuc2Zvcm1lZCBwb2x5Z29uIC0gd2lsbCBiZSBjYWxjdWxhdGVkIHVzaW5nIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpXHJcbiAgICB0aGlzLmlzQ2VudGVyZWQgPSBmYWxzZTsgICAgICAgICAgICAvLyB3aGV0aGVyIG9yIG5vdCB0byBhdXRvbWF0aWNhbGx5IHRyYW5zbGF0ZSB0byBzY3JlZW4gY2VudGVyXHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBwcm92aWRlZCBjb29yZGluYXRlcyBhcmUgaW5zaWRlIHBvbHlnb24gZGVmaW5lZCBieSB0aGlzIFBhdGhcclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4gaW5zaWRlKFt4LCB5XSwgdGhpcy5wb2x5Z29uKTtcclxuICB9XHJcblxyXG4gIC8vIFJlbGF0aXZlIHRyYW5zbGF0aW9uXHJcbiAgbW92ZUJ5KHgsIHkpIHtcclxuICAgIHRoaXMub3JpZ2luLnggKz0geDtcclxuICAgIHRoaXMub3JpZ2luLnkgKz0geTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xyXG4gIH1cclxuXHJcbiAgLy8gQWJzb2x1dGUgdHJhbnNsYXRpb25cclxuICBtb3ZlVG8oeCwgeSkge1xyXG4gICAgaWYodGhpcy5pc0NlbnRlcmVkKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnggPSB4IC0gdGhpcy53aWR0aC8yO1xyXG4gICAgICB0aGlzLm9yaWdpbi55ID0geSAtIHRoaXMuaGVpZ2h0LzI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm9yaWdpbi54ID0geDtcclxuICAgICAgdGhpcy5vcmlnaW4ueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICB9XHJcblxyXG4gIHNldFNjYWxlKGZhY3Rvcikge1xyXG4gICAgdGhpcy5zY2FsZSAqPSBmYWN0b3I7XHJcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKCk7XHJcblxyXG4gICAgaWYodGhpcy5pc0NlbnRlcmVkKSB7XHJcbiAgICAgIHRoaXMubW92ZVRvKHdpbmRvdy5pbm5lcldpZHRoLzIsIHdpbmRvdy5pbm5lckhlaWdodC8yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0b3RhbCBwYXRoIGxlbmd0aCBieSBhZGRpbmcgdXAgYWxsIGxpbmUgc2VnbWVudCBsZW5ndGhzIChkaXN0YW5jZXMgYmV0d2VlbiBwb2x5Z29uIHBvaW50cylcclxuICBnZXRUb3RhbExlbmd0aCgpIHtcclxuICAgIGxldCB0b3RhbExlbmd0aCA9IDA7XHJcblxyXG4gICAgZm9yKGxldCBpPTE7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRvdGFsTGVuZ3RoICs9IFZlYzIoXHJcbiAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzBdICogdGhpcy5zY2FsZSxcclxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMV0gKiB0aGlzLnNjYWxlXHJcbiAgICAgICkuZGlzdGFuY2UoXHJcbiAgICAgICAgVmVjMihcclxuICAgICAgICAgIHRoaXMucG9seWdvbltpLTFdWzBdICogdGhpcy5zY2FsZSxcclxuICAgICAgICAgIHRoaXMucG9seWdvbltpLTFdWzFdICogdGhpcy5zY2FsZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxMZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvLyBDYWxjdWxhdGVzIHRoZSByZWFsIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIHRyYW5zZm9ybWVkIHBvbHlnb25cclxuICBjYWxjdWxhdGVEaW1lbnNpb25zKCkge1xyXG4gICAgbGV0IGxlZnRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLFxyXG4gICAgICByaWdodE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXHJcbiAgICAgIHRvcE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0sXHJcbiAgICAgIGJvdHRvbU1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV07XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0gPCBsZWZ0TW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBsZWZ0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXTtcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdID4gcmlnaHRNb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIHJpZ2h0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0gPCB0b3BNb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIHRvcE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV07XHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSA+IGJvdHRvbU1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgYm90dG9tTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2lkdGggPSBNYXRoLmFicyhyaWdodE1vc3RDb29yZGluYXRlIC0gbGVmdE1vc3RDb29yZGluYXRlKTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5hYnMoYm90dG9tTW9zdENvb3JkaW5hdGUgLSB0b3BNb3N0Q29vcmRpbmF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgY29vcmRpbmF0ZXMgZm9yIHRoZSBcInRyYW5zZm9ybWVkXCIgdmVyc2lvbiBvZiB0aGlzIHBhdGgsIHRha2luZyBpbnRvIGNvbnNpZGVyYXRpb24gdHJhbnNsYXRpb24gYW5kIHNjYWxpbmdcclxuICBjcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKSB7XHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbiA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMucG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5wdXNoKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIHRoaXMucG9seWdvbltpXVswXSAqIHRoaXMuc2NhbGUgKyB0aGlzLm9yaWdpbi54LFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzFdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLnlcclxuICAgICAgICBdXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgaWYoXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLnR5cGUgPT0gJ0JvdW5kcycgfHxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMudHlwZSA9PSAnT2JzdGFjbGVzJ1xyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdKTtcclxuXHJcbiAgICAgIC8vIERyYXcgc2VxdWVudGlhbCBsaW5lcyB0byBhbGwgcG9pbnRzIG9mIHRoZSBwb2x5Z29uXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEcmF3IGxpbmUgYmFjayB0byBmaXJzdCBwb2ludCB0byBjbG9zZSB0aGUgcG9seWdvblxyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdKTtcclxuXHJcbiAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdCb3VuZHMnOlxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNCb3JkZXJDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuQm91bmRzQm9yZGVyVGhpY2tuZXNzO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzRmlsbENvbG9yO1xyXG5cclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnT2JzdGFjbGUnOlxyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuT2JzdGFjbGVGaWxsQ29sb3I7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG5cclxuICAgICAgLy8gRHJhdyBib3VuZGluZyBib3hcclxuICAgICAgLy8gdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55KTtcclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMub3JpZ2luLnggKyB0aGlzLndpZHRoLCB0aGlzLm9yaWdpbi55KTtcclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMub3JpZ2luLnggKyB0aGlzLndpZHRoLCB0aGlzLm9yaWdpbi55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcclxuICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4vQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tLCBtYXAgfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKCdzaW1wbGV4LW5vaXNlJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tU291cmNlcyhudW1Tb3VyY2VzLCBjdHgsIGJvdW5kcyA9IHVuZGVmaW5lZCwgb2JzdGFjbGVzID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICBsZXQgeCwgeTtcclxuICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMsIGlzSW5zaWRlQW55T2JzdGFjbGUsIGlzT25TY3JlZW47XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPG51bVNvdXJjZXM7IGkrKykge1xyXG4gICAgeCA9IHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB5ID0gcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG4gICAgaXNPblNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgc291cmNlcyB0aGF0IGFyZSBpbiB0aGUgdmlld3BvcnRcclxuICAgIGlmKFxyXG4gICAgICB4ID4gMCAmJlxyXG4gICAgICB4IDwgd2luZG93LmlubmVyV2lkdGggJiZcclxuICAgICAgeSA+IDAgJiZcclxuICAgICAgeSA8IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIGlzT25TY3JlZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCB2ZWlucyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgIGlmKGJvdW5kcyAhPSB1bmRlZmluZWQgJiYgYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBib3VuZHMpIHtcclxuICAgICAgICBpZihib3VuZC5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxyXG4gICAgaWYob2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiBvYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKHgsIHkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IGJvdW5kcyA9PT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgb2JzdGFjbGVzID09PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgc291cmNlcy5wdXNoKFxyXG4gICAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgIG5ldyBWZWMyKHgseSksXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyaWRPZlNvdXJjZXMobnVtUm93cywgbnVtQ29sdW1ucywgY3R4LCBqaXR0ZXJSYW5nZSA9IDAsIGJvdW5kcyA9IHVuZGVmaW5lZCwgb2JzdGFjbGVzID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICBsZXQgeCwgeTtcclxuICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMsIGlzSW5zaWRlQW55T2JzdGFjbGUsIGlzT25TY3JlZW47XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPD1udW1Sb3dzOyBpKyspIHtcclxuICAgIGZvcihsZXQgaj0wOyBqPD1udW1Db2x1bW5zOyBqKyspIHtcclxuICAgICAgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnMpICogaiArIHJhbmRvbSgtaml0dGVyUmFuZ2UsIGppdHRlclJhbmdlKTtcclxuICAgICAgeSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyBudW1Sb3dzKSAqIGkgKyByYW5kb20oLWppdHRlclJhbmdlLCBqaXR0ZXJSYW5nZSk7XHJcbiAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuICAgICAgaXNPblNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gT25seSBhbGxvdyBzb3VyY2VzIHRoYXQgYXJlIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICBpZihcclxuICAgICAgICB4ID4gMCAmJlxyXG4gICAgICAgIHggPCB3aW5kb3cuaW5uZXJXaWR0aCAmJlxyXG4gICAgICAgIHkgPiAwICYmXHJcbiAgICAgICAgeSA8IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICBpc09uU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25seSBhbGxvdyBzb3VyY2VzIGluc2lkZSBvZiBhbnkgb2YgdGhlIGRlZmluZWQgYm91bmRzIChpZiB1c2VkKVxyXG4gICAgICBpZihib3VuZHMgIT0gdW5kZWZpbmVkICYmIGJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBib3VuZCBvZiBib3VuZHMpIHtcclxuICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKHgsIHkpKSB7XHJcbiAgICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZSAoaWYgdXNlZClcclxuICAgICAgaWYob2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiBvYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2Ygb2JzdGFjbGVzKSB7XHJcbiAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKFxyXG4gICAgICAgIGlzT25TY3JlZW4gJiZcclxuICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgYm91bmRzID09PSB1bmRlZmluZWQpICYmXHJcbiAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IG9ic3RhY2xlcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICApIHtcclxuICAgICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKHgseSksXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzb3VyY2VzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGh5bGxvdGF4aXNTb3VyY2VzKGN0eCkge1xyXG4gIGxldCBzb3VyY2VzID0gW107XHJcbiAgbGV0IG51bUNpcmNsZXMgPSA1MDAwLFxyXG4gIGdvbGRlbl9yYXRpbyA9IChNYXRoLnNxcnQoNSkrMSkvMiAtIDEsXHJcbiAgZ29sZGVuX2FuZ2xlID0gZ29sZGVuX3JhdGlvICogKDIqTWF0aC5QSSksXHJcbiAgY2lyY2xlX3JhZCA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcblxyXG5cclxuICBmb3IobGV0IGk9MDsgaTxudW1DaXJjbGVzOyBpKyspIHtcclxuICAgIGxldCByYXRpbyA9IGkgLyBudW1DaXJjbGVzLFxyXG4gICAgICBhbmdsZSA9IGkgKiBnb2xkZW5fYW5nbGUsXHJcbiAgICAgIHNwaXJhbF9yYWQgPSByYXRpbyAqIGNpcmNsZV9yYWQ7XHJcblxyXG4gICAgc291cmNlcy5wdXNoKFxyXG4gICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aC8yICsgTWF0aC5jb3MoYW5nbGUpICogc3BpcmFsX3JhZCxcclxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodC8yICsgTWF0aC5zaW4oYW5nbGUpICogc3BpcmFsX3JhZFxyXG4gICAgICAgICksXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdhdmVPZlNvdXJjZXMoY3R4KSB7XHJcbiAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICBsZXQgbnVtUm93cyA9IDcwO1xyXG4gIGxldCBudW1Db2x1bW5zID0gMTAwO1xyXG4gIGxldCByb3dTcGFjaW5nID0gd2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cztcclxuICBsZXQgY29sU3BhY2luZyA9IHdpbmRvdy5pbm5lcldpZHRoIC8gbnVtQ29sdW1ucztcclxuXHJcbiAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBudW1Sb3dzOyByb3crKykge1xyXG4gICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCBudW1Db2x1bW5zOyBjb2wrKykge1xyXG4gICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICAgIChjb2wgKiBjb2xTcGFjaW5nKSArIChNYXRoLnNpbihtYXAoY29sLCAwLCBudW1Db2x1bW5zLCAwLCBNYXRoLlBJICogMikpICogMjAwKSxcclxuICAgICAgICAgICAgKHJvdyAqIHJvd1NwYWNpbmcpICsgKE1hdGguc2luKG1hcChyb3csIDAsIG51bVJvd3MsIDAsIE1hdGguUEkgKiAyKSkgKiA1MClcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzb3VyY2VzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlOb2lzZShzb3VyY2VzKSB7XHJcbiAgbGV0IG5vaXNlID0gbmV3IFNpbXBsZXhOb2lzZSgpO1xyXG5cclxuICBmb3IobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XHJcbiAgICBzb3VyY2UucG9zaXRpb24ueCArPSBub2lzZS5ub2lzZTJEKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSkgKiAxMDtcclxuICAgIHNvdXJjZS5wb3NpdGlvbi55ICs9IG5vaXNlLm5vaXNlMkQoc291cmNlLnBvc2l0aW9uLngsIHNvdXJjZS5wb3NpdGlvbi55KSAqIDEwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNvdXJjZXM7XHJcbn0iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgdG9QYXRoIH0gZnJvbSAnc3ZnLXBvaW50cyc7XHJcblxyXG4vLyByYW5kb20oKSwgc2ltaWxhciB0byBQcm9jZXNzaW5nJ3NcclxuLy8gSWYgdHdvIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCwgdGhleSBhcmUgaW50ZXJwcmV0ZWQgYXMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gb2YgdGhlIGRlc2lyZWQgcmFuZ2VcclxuLy8gSWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHBhc3NlZCwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIG1heGltdW0sIHdoaWxlIHplcm8gaXMgdXNlZCBhcyB0aGUgbWluaW11bVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXggPSBtaW47XHJcbiAgICBtaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBtaW4gIT09ICdudW1iZXInIHx8IHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgYXJndW1lbnRzIHRvIGJlIG51bWJlcnMnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgbnVtYmVyIGZyb20gb25lIHJhbmdlIHRvIGFub3RoZXJcclxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgb3JpZ2luYWxMb3dlciwgb3JpZ2luYWxVcHBlciwgbmV3TG93ZXIsIG5ld1VwcGVyKSB7XHJcbiAgcmV0dXJuIG5ld0xvd2VyICsgKG5ld1VwcGVyIC0gbmV3TG93ZXIpICogKCh2YWx1ZSAtIG9yaWdpbmFsTG93ZXIpIC8gKG9yaWdpbmFsVXBwZXIgLSBvcmlnaW5hbExvd2VyKSk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgcG9pbnQgY29vcmRpbmF0ZXMgKGFsc28gYXJyYXlzLCB3aXRoIHR3byBlbnRyaWVzKSBmb3IgcG9pbnRzIGFycmFuZ2VkIGluIGEgY2lyY2xlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjbGVPZlBvaW50cyhjeCwgY3ksIHJhZGl1cywgcmVzb2x1dGlvbikge1xyXG4gIGxldCBhbmdsZSwgeCwgeTtcclxuICBsZXQgcG9pbnRzID0gW107XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcclxuICAgIGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpIC8gcmVzb2x1dGlvbjtcclxuICAgIHggPSBjeCArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgIHkgPSBjeSArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICBwb2ludHMucHVzaChbeCwgeV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBvaW50cztcclxufVxyXG5cclxuLy8gQ3JlYXRlcyBhbiBTVkcgZG9jdW1lbnQgY29udGFpbmluZyBhbGwgb2YgdGhlIHZpc2libGUgZ2VvbWV0cnksIHRoZW4gcHVzaGVzIGl0IHRvIHRoZSBjbGllbnRcclxuLy8gLSBUcmlnZ2VyZWQgYnkgcHJlc3NpbmcgYGVgIGluIGFueSBza2V0Y2guIFNlZSBLZXlib2FyZEludGVyYWN0aW9ucy5qcyBmb3IgZGVmaW5pdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0U1ZHKG5ldHdvcmspIHtcclxuICAvLyBTZXQgdXAgPHN2Zz4gZWxlbWVudFxyXG4gIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zOnhsaW5rJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyB3aW5kb3cuaW5uZXJXaWR0aCArICcgJyArIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSA8bGluZT5zIGZvciBlYWNoIHZlaW4gc2VnbWVudFxyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd1ZlaW5zKSB7XHJcbiAgICBsZXQgbm9kZUxpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgbmV0d29yay5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGxpbmVOb2RlID0gYFxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnl9XCJcclxuICAgICAgICAgICAgeDI9XCIke25vZGUucG9zaXRpb24ueH1cIlxyXG4gICAgICAgICAgICB5Mj1cIiR7bm9kZS5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgbm9kZUxpbmVzR3JvdXAuaW5uZXJIVE1MICs9IGxpbmVOb2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmFwcGVuZENoaWxkKG5vZGVMaW5lc0dyb3VwKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSA8cGF0aD5zIGZvciBib3VuZHNcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCb3VuZHMpIHtcclxuICAgIGlmKG5ldHdvcmsuYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGJvdW5kc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIG5ldHdvcmsuYm91bmRzKSB7XHJcbiAgICAgICAgYm91bmRzR3JvdXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKGJvdW5kLnBvbHlnb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGJvdW5kc0dyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSA8cGF0aD5zIGZvciBvYnN0YWNsZXNcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dPYnN0YWNsZXMpIHtcclxuICAgIGlmKG5ldHdvcmsub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG9ic3RhY2xlc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG5ldHdvcmsub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgb2JzdGFjbGVzR3JvdXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKG9ic3RhY2xlLnBvbHlnb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3ZnLmFwcGVuZENoaWxkKG9ic3RhY2xlc0dyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXRlIHRoZSBkb2N1bWVudCBhcyBhIEJsb2IgYW5kIGZvcmNlIGEgZG93bmxvYWQgYXMgYSB0aW1lc3RhbXBlZCAuc3ZnIGZpbGVcclxuICBjb25zdCBzdmdEb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cIm5vXCI/Pic7XHJcbiAgY29uc3Qgc2VyaWFsaXplZFN2ZyA9IChuZXcgWE1MU2VyaWFsaXplcigpKS5zZXJpYWxpemVUb1N0cmluZyhzdmcpO1xyXG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc3ZnRG9jdHlwZSwgc2VyaWFsaXplZFN2Z10sIHsgdHlwZTogJ2ltYWdlL3N2Zyt4bWw7JyB9KVxyXG4gIHNhdmVBcyhibG9iLCAndmVuYXRpb24tJyArIERhdGUubm93KCkgKyAnLnN2ZycpO1xyXG59XHJcblxyXG4gIC8vIENyZWF0ZSBhIDxwYXRoPiBlbGVtZW50IHdpdGggYSBwcm9wZXJseS1mb3JtYXR0ZWQgYGRgIGF0dHJpYnV0ZSBjb250YWluaW5nIGFsbCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBhc3NlZCBwb2ludHNcclxuICBmdW5jdGlvbiBnZXRQYXRoRWxGcm9tUG9pbnRzKHBvaW50cykge1xyXG4gICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xyXG5cclxuICAgIGZvcihsZXQgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xyXG4gICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRbMF0gKyAnLCcgKyBwb2ludFsxXTtcclxuXHJcbiAgICAgIGlmKGluZGV4IDwgcG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBwb2ludHNTdHJpbmcgKz0gJyAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGNsb3NlcGF0aCBjb21tYW5kIHRvIGF1dG9tYXRpY2FsbHkgZHJhdyBsaW5lIGJhY2sgdG8gaW5pdGlhbCBwb2ludFxyXG4gICAgcG9pbnRzU3RyaW5nICs9ICcgJyArIHBvaW50c1swXVswXSArICcsJyArIHBvaW50c1swXVsxXTtcclxuXHJcbiAgICBsZXQgZCA9IHRvUGF0aCh7XHJcbiAgICAgIHR5cGU6ICdwb2x5bGluZScsXHJcbiAgICAgIHBvaW50czogcG9pbnRzU3RyaW5nXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGF0aEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdkJywgZCk7XHJcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWxsOiBub25lOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDEnKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aEVsO1xyXG4gIH0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWluTm9kZSB7XHJcbiAgY29uc3RydWN0b3IocGFyZW50LCBwb3NpdGlvbiwgaXNUaXAsIGN0eCwgc2V0dGluZ3MsIGNvbG9yID0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDsgICAgICAgLy8gcmVmZXJlbmNlIHRvIHBhcmVudCBub2RlLCBuZWNlc3NhcnkgZm9yIHZlaW4gdGhpY2tlbmluZyBsYXRlclxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAgIC8vIHt2ZWMyfSBvZiB0aGlzIG5vZGUncyBwb3NpdGlvblxyXG4gICAgdGhpcy5pc1RpcCA9IGlzVGlwOyAgICAgICAgIC8vIHtib29sZWFufVxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dCBmb3IgZHJhd2luZ1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7ICAgICAgICAgLy8gY29sb3IsIHVzdWFsbHkgcGFzc2VkIGRvd24gZnJvbSBwYXJlbnRcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdOyAgICAgLy8gcmVmZXJlbmNlcyB0byBhbGwgQXV4aW5Tb3VyY2VzIGluZmx1ZW5jaW5nIHRoaXMgbm9kZSBlYWNoIGZyYW1lXHJcbiAgICB0aGlzLnRoaWNrbmVzcyA9IDA7ICAgICAgICAgLy8gdGhpY2tuZXNzIC0gdGhpcyBpcyBpbmNyZWFzZWQgZHVyaW5nIHZlaW4gdGhpY2tlbmluZyBwcm9jZXNzXHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgaWYodGhpcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAvLyBTbW9vdGhseSByYW1wIHVwIG9wYWNpdHkgYmFzZWQgb24gdmVpbiB0aGlja25lc3NcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMudGhpY2tuZXNzIC8gMyArIC4yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBcIkxpbmVzXCIgcmVuZGVyIG1vZGVcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5WZWluVGlwVGhpY2tuZXNzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZih0aGlzLmNvbG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5Db2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlZlaW5UaGlja25lc3MgKyB0aGlzLnRoaWNrbmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICAvLyBcIkRvdHNcIiByZW5kZXIgbW9kZVxyXG4gICAgICB9IGVsc2UgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgMSArIHRoaXMudGhpY2tuZXNzIC8gMixcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIE1hdGguUEkgKiAyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIGNvbG9yIG9yIFwidGlwXCIgbm9kZXNcclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluVGlwQ29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5Db2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVzZXQgZ2xvYmFsIG9wYWNpdHkgaWYgaXQgd2FzIGNoYW5nZWQgZHVlIHRvIG9wYWNpdHkgZ3JhZGllbnQgZmxhZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHByb3ZpZGVkIGRpcmVjdGlvbiBhbmQgYSBwcmUtZGVmaW5lZCBkaXN0YW5jZSAoU2VnbWVudExlbmd0aClcclxuICBnZXROZXh0Tm9kZShhdmVyYWdlU291cmNlRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWluTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLFxyXG4gICAgICB0aGlzLmNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxufSIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhiLGMsZCl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGIpLGUucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGUub25sb2FkPWZ1bmN0aW9uKCl7YShlLnJlc3BvbnNlLGMsZCl9LGUub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZS5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYSxiLGQsZSl7aWYoZT1lfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZSYmKGUuZG9jdW1lbnQudGl0bGU9ZS5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiBjKGEsYixkKTt2YXIgZz1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09YS50eXBlLGg9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaT0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGl8fGcmJmgpJiZcIm9iamVjdFwiPT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGo9bmV3IEZpbGVSZWFkZXI7ai5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1qLnJlc3VsdDthPWk/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZT9lLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGU9bnVsbH0sai5yZWFkQXNEYXRhVVJMKGEpfWVsc2V7dmFyIGs9Zi5VUkx8fGYud2Via2l0VVJMLGw9ay5jcmVhdGVPYmplY3RVUkwoYSk7ZT9lLmxvY2F0aW9uPWw6bG9jYXRpb24uaHJlZj1sLGU9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5yZXZva2VPYmplY3RVUkwobCl9LDRFNCl9fSk7Zi5zYXZlQXM9YS5zYXZlQXM9YSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9YSl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJcbmltcG9ydCBzb3J0IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgd2l0aGluIGZyb20gJy4vd2l0aGluJztcblxuY29uc3QgZGVmYXVsdEdldFggPSBwID0+IHBbMF07XG5jb25zdCBkZWZhdWx0R2V0WSA9IHAgPT4gcFsxXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS0RCdXNoIHtcbiAgICBjb25zdHJ1Y3Rvcihwb2ludHMsIGdldFggPSBkZWZhdWx0R2V0WCwgZ2V0WSA9IGRlZmF1bHRHZXRZLCBub2RlU2l6ZSA9IDY0LCBBcnJheVR5cGUgPSBGbG9hdDY0QXJyYXkpIHtcbiAgICAgICAgdGhpcy5ub2RlU2l6ZSA9IG5vZGVTaXplO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgICAgICBjb25zdCBJbmRleEFycmF5VHlwZSA9IHBvaW50cy5sZW5ndGggPCA2NTUzNiA/IFVpbnQxNkFycmF5IDogVWludDMyQXJyYXk7XG5cbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5pZHMgPSBuZXcgSW5kZXhBcnJheVR5cGUocG9pbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuY29vcmRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoICogMik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkc1tpXSA9IGk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGldID0gZ2V0WChwb2ludHNbaV0pO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0KGlkcywgY29vcmRzLCBub2RlU2l6ZSwgMCwgaWRzLmxlbmd0aCAtIDEsIDApO1xuICAgIH1cblxuICAgIHJhbmdlKG1pblgsIG1pblksIG1heFgsIG1heFkpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxuXG4gICAgd2l0aGluKHgsIHksIHIpIHtcbiAgICAgICAgcmV0dXJuIHdpdGhpbih0aGlzLmlkcywgdGhpcy5jb29yZHMsIHgsIHksIHIsIHRoaXMubm9kZVNpemUpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2UoaWRzLCBjb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCB4LCB5O1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1syICogaV07XG4gICAgICAgICAgICAgICAgeSA9IGNvb3Jkc1syICogaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCByaWdodCwgZGVwdGgpIHtcbiAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSByZXR1cm47XG5cbiAgICBjb25zdCBtID0gKGxlZnQgKyByaWdodCkgPj4gMTtcblxuICAgIHNlbGVjdChpZHMsIGNvb3JkcywgbSwgbGVmdCwgcmlnaHQsIGRlcHRoICUgMik7XG5cbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCBtIC0gMSwgZGVwdGggKyAxKTtcbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBtICsgMSwgcmlnaHQsIGRlcHRoICsgMSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbGVmdCwgcmlnaHQsIGluYykge1xuXG4gICAgd2hpbGUgKHJpZ2h0ID4gbGVmdCkge1xuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0ID4gNjAwKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCB6ID0gTWF0aC5sb2cobik7XG4gICAgICAgICAgICBjb25zdCBzID0gMC41ICogTWF0aC5leHAoMiAqIHogLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgY29uc3QgbmV3TGVmdCA9IE1hdGgubWF4KGxlZnQsIE1hdGguZmxvb3IoayAtIG0gKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdSaWdodCA9IE1hdGgubWluKHJpZ2h0LCBNYXRoLmZsb29yKGsgKyAobiAtIG0pICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgc2VsZWN0KGlkcywgY29vcmRzLCBrLCBuZXdMZWZ0LCBuZXdSaWdodCwgaW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICBsZXQgaSA9IGxlZnQ7XG4gICAgICAgIGxldCBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgY29uc3QgdG1wID0gYXJyW2ldO1xuICAgIGFycltpXSA9IGFycltqXTtcbiAgICBhcnJbal0gPSB0bXA7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihpZHMsIGNvb3JkcywgcXgsIHF5LCByLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCByMiA9IHIgKiByO1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNxRGlzdChjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICBjb25zdCB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmIChzcURpc3QoeCwgeSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCBkeCA9IGF4IC0gYng7XG4gICAgY29uc3QgZHkgPSBheSAtIGJ5O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBvaW50LCB2cykge1xuICAgIC8vIHJheS1jYXN0aW5nIGFsZ29yaXRobSBiYXNlZCBvblxuICAgIC8vIGh0dHA6Ly93d3cuZWNzZS5ycGkuZWR1L0hvbWVwYWdlcy93cmYvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcbiAgICBcbiAgICB2YXIgeCA9IHBvaW50WzBdLCB5ID0gcG9pbnRbMV07XG4gICAgXG4gICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdnMubGVuZ3RoIC0gMTsgaSA8IHZzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgICB2YXIgeGkgPSB2c1tpXVswXSwgeWkgPSB2c1tpXVsxXTtcbiAgICAgICAgdmFyIHhqID0gdnNbal1bMF0sIHlqID0gdnNbal1bMV07XG4gICAgICAgIFxuICAgICAgICB2YXIgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9ICh5aiA+IHkpKVxuICAgICAgICAgICAgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcbiAgICAgICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGluc2lkZTtcbn07XG4iLCIvKlxuICogQSBmYXN0IGphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2Ygc2ltcGxleCBub2lzZSBieSBKb25hcyBXYWduZXJcblxuQmFzZWQgb24gYSBzcGVlZC1pbXByb3ZlZCBzaW1wbGV4IG5vaXNlIGFsZ29yaXRobSBmb3IgMkQsIDNEIGFuZCA0RCBpbiBKYXZhLlxuV2hpY2ggaXMgYmFzZWQgb24gZXhhbXBsZSBjb2RlIGJ5IFN0ZWZhbiBHdXN0YXZzb24gKHN0ZWd1QGl0bi5saXUuc2UpLlxuV2l0aCBPcHRpbWlzYXRpb25zIGJ5IFBldGVyIEVhc3RtYW4gKHBlYXN0bWFuQGRyaXp6bGUuc3RhbmZvcmQuZWR1KS5cbkJldHRlciByYW5rIG9yZGVyaW5nIG1ldGhvZCBieSBTdGVmYW4gR3VzdGF2c29uIGluIDIwMTIuXG5cblxuIENvcHlyaWdodCAoYykgMjAxOCBKb25hcyBXYWduZXJcblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuIFNPRlRXQVJFLlxuICovXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgRjIgPSAwLjUgKiAoTWF0aC5zcXJ0KDMuMCkgLSAxLjApO1xuICB2YXIgRzIgPSAoMy4wIC0gTWF0aC5zcXJ0KDMuMCkpIC8gNi4wO1xuICB2YXIgRjMgPSAxLjAgLyAzLjA7XG4gIHZhciBHMyA9IDEuMCAvIDYuMDtcbiAgdmFyIEY0ID0gKE1hdGguc3FydCg1LjApIC0gMS4wKSAvIDQuMDtcbiAgdmFyIEc0ID0gKDUuMCAtIE1hdGguc3FydCg1LjApKSAvIDIwLjA7XG5cbiAgZnVuY3Rpb24gU2ltcGxleE5vaXNlKHJhbmRvbU9yU2VlZCkge1xuICAgIHZhciByYW5kb207XG4gICAgaWYgKHR5cGVvZiByYW5kb21PclNlZWQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmFuZG9tID0gcmFuZG9tT3JTZWVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChyYW5kb21PclNlZWQpIHtcbiAgICAgIHJhbmRvbSA9IGFsZWEocmFuZG9tT3JTZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZG9tID0gTWF0aC5yYW5kb207XG4gICAgfVxuICAgIHRoaXMucCA9IGJ1aWxkUGVybXV0YXRpb25UYWJsZShyYW5kb20pO1xuICAgIHRoaXMucGVybSA9IG5ldyBVaW50OEFycmF5KDUxMik7XG4gICAgdGhpcy5wZXJtTW9kMTIgPSBuZXcgVWludDhBcnJheSg1MTIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTEyOyBpKyspIHtcbiAgICAgIHRoaXMucGVybVtpXSA9IHRoaXMucFtpICYgMjU1XTtcbiAgICAgIHRoaXMucGVybU1vZDEyW2ldID0gdGhpcy5wZXJtW2ldICUgMTI7XG4gICAgfVxuXG4gIH1cbiAgU2ltcGxleE5vaXNlLnByb3RvdHlwZSA9IHtcbiAgICBncmFkMzogbmV3IEZsb2F0MzJBcnJheShbMSwgMSwgMCxcbiAgICAgIC0xLCAxLCAwLFxuICAgICAgMSwgLTEsIDAsXG5cbiAgICAgIC0xLCAtMSwgMCxcbiAgICAgIDEsIDAsIDEsXG4gICAgICAtMSwgMCwgMSxcblxuICAgICAgMSwgMCwgLTEsXG4gICAgICAtMSwgMCwgLTEsXG4gICAgICAwLCAxLCAxLFxuXG4gICAgICAwLCAtMSwgMSxcbiAgICAgIDAsIDEsIC0xLFxuICAgICAgMCwgLTEsIC0xXSksXG4gICAgZ3JhZDQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDEsIDEsIDEsIDAsIDEsIDEsIC0xLCAwLCAxLCAtMSwgMSwgMCwgMSwgLTEsIC0xLFxuICAgICAgMCwgLTEsIDEsIDEsIDAsIC0xLCAxLCAtMSwgMCwgLTEsIC0xLCAxLCAwLCAtMSwgLTEsIC0xLFxuICAgICAgMSwgMCwgMSwgMSwgMSwgMCwgMSwgLTEsIDEsIDAsIC0xLCAxLCAxLCAwLCAtMSwgLTEsXG4gICAgICAtMSwgMCwgMSwgMSwgLTEsIDAsIDEsIC0xLCAtMSwgMCwgLTEsIDEsIC0xLCAwLCAtMSwgLTEsXG4gICAgICAxLCAxLCAwLCAxLCAxLCAxLCAwLCAtMSwgMSwgLTEsIDAsIDEsIDEsIC0xLCAwLCAtMSxcbiAgICAgIC0xLCAxLCAwLCAxLCAtMSwgMSwgMCwgLTEsIC0xLCAtMSwgMCwgMSwgLTEsIC0xLCAwLCAtMSxcbiAgICAgIDEsIDEsIDEsIDAsIDEsIDEsIC0xLCAwLCAxLCAtMSwgMSwgMCwgMSwgLTEsIC0xLCAwLFxuICAgICAgLTEsIDEsIDEsIDAsIC0xLCAxLCAtMSwgMCwgLTEsIC0xLCAxLCAwLCAtMSwgLTEsIC0xLCAwXSksXG4gICAgbm9pc2UyRDogZnVuY3Rpb24oeGluLCB5aW4pIHtcbiAgICAgIHZhciBwZXJtTW9kMTIgPSB0aGlzLnBlcm1Nb2QxMjtcbiAgICAgIHZhciBwZXJtID0gdGhpcy5wZXJtO1xuICAgICAgdmFyIGdyYWQzID0gdGhpcy5ncmFkMztcbiAgICAgIHZhciBuMCA9IDA7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgdGhyZWUgY29ybmVyc1xuICAgICAgdmFyIG4xID0gMDtcbiAgICAgIHZhciBuMiA9IDA7XG4gICAgICAvLyBTa2V3IHRoZSBpbnB1dCBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggc2ltcGxleCBjZWxsIHdlJ3JlIGluXG4gICAgICB2YXIgcyA9ICh4aW4gKyB5aW4pICogRjI7IC8vIEhhaXJ5IGZhY3RvciBmb3IgMkRcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcih4aW4gKyBzKTtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcih5aW4gKyBzKTtcbiAgICAgIHZhciB0ID0gKGkgKyBqKSAqIEcyO1xuICAgICAgdmFyIFgwID0gaSAtIHQ7IC8vIFVuc2tldyB0aGUgY2VsbCBvcmlnaW4gYmFjayB0byAoeCx5KSBzcGFjZVxuICAgICAgdmFyIFkwID0gaiAtIHQ7XG4gICAgICB2YXIgeDAgPSB4aW4gLSBYMDsgLy8gVGhlIHgseSBkaXN0YW5jZXMgZnJvbSB0aGUgY2VsbCBvcmlnaW5cbiAgICAgIHZhciB5MCA9IHlpbiAtIFkwO1xuICAgICAgLy8gRm9yIHRoZSAyRCBjYXNlLCB0aGUgc2ltcGxleCBzaGFwZSBpcyBhbiBlcXVpbGF0ZXJhbCB0cmlhbmdsZS5cbiAgICAgIC8vIERldGVybWluZSB3aGljaCBzaW1wbGV4IHdlIGFyZSBpbi5cbiAgICAgIHZhciBpMSwgajE7IC8vIE9mZnNldHMgZm9yIHNlY29uZCAobWlkZGxlKSBjb3JuZXIgb2Ygc2ltcGxleCBpbiAoaSxqKSBjb29yZHNcbiAgICAgIGlmICh4MCA+IHkwKSB7XG4gICAgICAgIGkxID0gMTtcbiAgICAgICAgajEgPSAwO1xuICAgICAgfSAvLyBsb3dlciB0cmlhbmdsZSwgWFkgb3JkZXI6ICgwLDApLT4oMSwwKS0+KDEsMSlcbiAgICAgIGVsc2Uge1xuICAgICAgICBpMSA9IDA7XG4gICAgICAgIGoxID0gMTtcbiAgICAgIH0gLy8gdXBwZXIgdHJpYW5nbGUsIFlYIG9yZGVyOiAoMCwwKS0+KDAsMSktPigxLDEpXG4gICAgICAvLyBBIHN0ZXAgb2YgKDEsMCkgaW4gKGksaikgbWVhbnMgYSBzdGVwIG9mICgxLWMsLWMpIGluICh4LHkpLCBhbmRcbiAgICAgIC8vIGEgc3RlcCBvZiAoMCwxKSBpbiAoaSxqKSBtZWFucyBhIHN0ZXAgb2YgKC1jLDEtYykgaW4gKHgseSksIHdoZXJlXG4gICAgICAvLyBjID0gKDMtc3FydCgzKSkvNlxuICAgICAgdmFyIHgxID0geDAgLSBpMSArIEcyOyAvLyBPZmZzZXRzIGZvciBtaWRkbGUgY29ybmVyIGluICh4LHkpIHVuc2tld2VkIGNvb3Jkc1xuICAgICAgdmFyIHkxID0geTAgLSBqMSArIEcyO1xuICAgICAgdmFyIHgyID0geDAgLSAxLjAgKyAyLjAgKiBHMjsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSkgdW5za2V3ZWQgY29vcmRzXG4gICAgICB2YXIgeTIgPSB5MCAtIDEuMCArIDIuMCAqIEcyO1xuICAgICAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSB0aHJlZSBzaW1wbGV4IGNvcm5lcnNcbiAgICAgIHZhciBpaSA9IGkgJiAyNTU7XG4gICAgICB2YXIgamogPSBqICYgMjU1O1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjb250cmlidXRpb24gZnJvbSB0aGUgdGhyZWUgY29ybmVyc1xuICAgICAgdmFyIHQwID0gMC41IC0geDAgKiB4MCAtIHkwICogeTA7XG4gICAgICBpZiAodDAgPj0gMCkge1xuICAgICAgICB2YXIgZ2kwID0gcGVybU1vZDEyW2lpICsgcGVybVtqal1dICogMztcbiAgICAgICAgdDAgKj0gdDA7XG4gICAgICAgIG4wID0gdDAgKiB0MCAqIChncmFkM1tnaTBdICogeDAgKyBncmFkM1tnaTAgKyAxXSAqIHkwKTsgLy8gKHgseSkgb2YgZ3JhZDMgdXNlZCBmb3IgMkQgZ3JhZGllbnRcbiAgICAgIH1cbiAgICAgIHZhciB0MSA9IDAuNSAtIHgxICogeDEgLSB5MSAqIHkxO1xuICAgICAgaWYgKHQxID49IDApIHtcbiAgICAgICAgdmFyIGdpMSA9IHBlcm1Nb2QxMltpaSArIGkxICsgcGVybVtqaiArIGoxXV0gKiAzO1xuICAgICAgICB0MSAqPSB0MTtcbiAgICAgICAgbjEgPSB0MSAqIHQxICogKGdyYWQzW2dpMV0gKiB4MSArIGdyYWQzW2dpMSArIDFdICogeTEpO1xuICAgICAgfVxuICAgICAgdmFyIHQyID0gMC41IC0geDIgKiB4MiAtIHkyICogeTI7XG4gICAgICBpZiAodDIgPj0gMCkge1xuICAgICAgICB2YXIgZ2kyID0gcGVybU1vZDEyW2lpICsgMSArIHBlcm1bamogKyAxXV0gKiAzO1xuICAgICAgICB0MiAqPSB0MjtcbiAgICAgICAgbjIgPSB0MiAqIHQyICogKGdyYWQzW2dpMl0gKiB4MiArIGdyYWQzW2dpMiArIDFdICogeTIpO1xuICAgICAgfVxuICAgICAgLy8gQWRkIGNvbnRyaWJ1dGlvbnMgZnJvbSBlYWNoIGNvcm5lciB0byBnZXQgdGhlIGZpbmFsIG5vaXNlIHZhbHVlLlxuICAgICAgLy8gVGhlIHJlc3VsdCBpcyBzY2FsZWQgdG8gcmV0dXJuIHZhbHVlcyBpbiB0aGUgaW50ZXJ2YWwgWy0xLDFdLlxuICAgICAgcmV0dXJuIDcwLjAgKiAobjAgKyBuMSArIG4yKTtcbiAgICB9LFxuICAgIC8vIDNEIHNpbXBsZXggbm9pc2VcbiAgICBub2lzZTNEOiBmdW5jdGlvbih4aW4sIHlpbiwgemluKSB7XG4gICAgICB2YXIgcGVybU1vZDEyID0gdGhpcy5wZXJtTW9kMTI7XG4gICAgICB2YXIgcGVybSA9IHRoaXMucGVybTtcbiAgICAgIHZhciBncmFkMyA9IHRoaXMuZ3JhZDM7XG4gICAgICB2YXIgbjAsIG4xLCBuMiwgbjM7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgZm91ciBjb3JuZXJzXG4gICAgICAvLyBTa2V3IHRoZSBpbnB1dCBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggc2ltcGxleCBjZWxsIHdlJ3JlIGluXG4gICAgICB2YXIgcyA9ICh4aW4gKyB5aW4gKyB6aW4pICogRjM7IC8vIFZlcnkgbmljZSBhbmQgc2ltcGxlIHNrZXcgZmFjdG9yIGZvciAzRFxuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKHhpbiArIHMpO1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKHlpbiArIHMpO1xuICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKHppbiArIHMpO1xuICAgICAgdmFyIHQgPSAoaSArIGogKyBrKSAqIEczO1xuICAgICAgdmFyIFgwID0gaSAtIHQ7IC8vIFVuc2tldyB0aGUgY2VsbCBvcmlnaW4gYmFjayB0byAoeCx5LHopIHNwYWNlXG4gICAgICB2YXIgWTAgPSBqIC0gdDtcbiAgICAgIHZhciBaMCA9IGsgLSB0O1xuICAgICAgdmFyIHgwID0geGluIC0gWDA7IC8vIFRoZSB4LHkseiBkaXN0YW5jZXMgZnJvbSB0aGUgY2VsbCBvcmlnaW5cbiAgICAgIHZhciB5MCA9IHlpbiAtIFkwO1xuICAgICAgdmFyIHowID0gemluIC0gWjA7XG4gICAgICAvLyBGb3IgdGhlIDNEIGNhc2UsIHRoZSBzaW1wbGV4IHNoYXBlIGlzIGEgc2xpZ2h0bHkgaXJyZWd1bGFyIHRldHJhaGVkcm9uLlxuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggd2UgYXJlIGluLlxuICAgICAgdmFyIGkxLCBqMSwgazE7IC8vIE9mZnNldHMgZm9yIHNlY29uZCBjb3JuZXIgb2Ygc2ltcGxleCBpbiAoaSxqLGspIGNvb3Jkc1xuICAgICAgdmFyIGkyLCBqMiwgazI7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBvZiBzaW1wbGV4IGluIChpLGosaykgY29vcmRzXG4gICAgICBpZiAoeDAgPj0geTApIHtcbiAgICAgICAgaWYgKHkwID49IHowKSB7XG4gICAgICAgICAgaTEgPSAxO1xuICAgICAgICAgIGoxID0gMDtcbiAgICAgICAgICBrMSA9IDA7XG4gICAgICAgICAgaTIgPSAxO1xuICAgICAgICAgIGoyID0gMTtcbiAgICAgICAgICBrMiA9IDA7XG4gICAgICAgIH0gLy8gWCBZIFogb3JkZXJcbiAgICAgICAgZWxzZSBpZiAoeDAgPj0gejApIHtcbiAgICAgICAgICBpMSA9IDE7XG4gICAgICAgICAgajEgPSAwO1xuICAgICAgICAgIGsxID0gMDtcbiAgICAgICAgICBpMiA9IDE7XG4gICAgICAgICAgajIgPSAwO1xuICAgICAgICAgIGsyID0gMTtcbiAgICAgICAgfSAvLyBYIFogWSBvcmRlclxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpMSA9IDA7XG4gICAgICAgICAgajEgPSAwO1xuICAgICAgICAgIGsxID0gMTtcbiAgICAgICAgICBpMiA9IDE7XG4gICAgICAgICAgajIgPSAwO1xuICAgICAgICAgIGsyID0gMTtcbiAgICAgICAgfSAvLyBaIFggWSBvcmRlclxuICAgICAgfVxuICAgICAgZWxzZSB7IC8vIHgwPHkwXG4gICAgICAgIGlmICh5MCA8IHowKSB7XG4gICAgICAgICAgaTEgPSAwO1xuICAgICAgICAgIGoxID0gMDtcbiAgICAgICAgICBrMSA9IDE7XG4gICAgICAgICAgaTIgPSAwO1xuICAgICAgICAgIGoyID0gMTtcbiAgICAgICAgICBrMiA9IDE7XG4gICAgICAgIH0gLy8gWiBZIFggb3JkZXJcbiAgICAgICAgZWxzZSBpZiAoeDAgPCB6MCkge1xuICAgICAgICAgIGkxID0gMDtcbiAgICAgICAgICBqMSA9IDE7XG4gICAgICAgICAgazEgPSAwO1xuICAgICAgICAgIGkyID0gMDtcbiAgICAgICAgICBqMiA9IDE7XG4gICAgICAgICAgazIgPSAxO1xuICAgICAgICB9IC8vIFkgWiBYIG9yZGVyXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGkxID0gMDtcbiAgICAgICAgICBqMSA9IDE7XG4gICAgICAgICAgazEgPSAwO1xuICAgICAgICAgIGkyID0gMTtcbiAgICAgICAgICBqMiA9IDE7XG4gICAgICAgICAgazIgPSAwO1xuICAgICAgICB9IC8vIFkgWCBaIG9yZGVyXG4gICAgICB9XG4gICAgICAvLyBBIHN0ZXAgb2YgKDEsMCwwKSBpbiAoaSxqLGspIG1lYW5zIGEgc3RlcCBvZiAoMS1jLC1jLC1jKSBpbiAoeCx5LHopLFxuICAgICAgLy8gYSBzdGVwIG9mICgwLDEsMCkgaW4gKGksaixrKSBtZWFucyBhIHN0ZXAgb2YgKC1jLDEtYywtYykgaW4gKHgseSx6KSwgYW5kXG4gICAgICAvLyBhIHN0ZXAgb2YgKDAsMCwxKSBpbiAoaSxqLGspIG1lYW5zIGEgc3RlcCBvZiAoLWMsLWMsMS1jKSBpbiAoeCx5LHopLCB3aGVyZVxuICAgICAgLy8gYyA9IDEvNi5cbiAgICAgIHZhciB4MSA9IHgwIC0gaTEgKyBHMzsgLy8gT2Zmc2V0cyBmb3Igc2Vjb25kIGNvcm5lciBpbiAoeCx5LHopIGNvb3Jkc1xuICAgICAgdmFyIHkxID0geTAgLSBqMSArIEczO1xuICAgICAgdmFyIHoxID0gejAgLSBrMSArIEczO1xuICAgICAgdmFyIHgyID0geDAgLSBpMiArIDIuMCAqIEczOyAvLyBPZmZzZXRzIGZvciB0aGlyZCBjb3JuZXIgaW4gKHgseSx6KSBjb29yZHNcbiAgICAgIHZhciB5MiA9IHkwIC0gajIgKyAyLjAgKiBHMztcbiAgICAgIHZhciB6MiA9IHowIC0gazIgKyAyLjAgKiBHMztcbiAgICAgIHZhciB4MyA9IHgwIC0gMS4wICsgMy4wICogRzM7IC8vIE9mZnNldHMgZm9yIGxhc3QgY29ybmVyIGluICh4LHkseikgY29vcmRzXG4gICAgICB2YXIgeTMgPSB5MCAtIDEuMCArIDMuMCAqIEczO1xuICAgICAgdmFyIHozID0gejAgLSAxLjAgKyAzLjAgKiBHMztcbiAgICAgIC8vIFdvcmsgb3V0IHRoZSBoYXNoZWQgZ3JhZGllbnQgaW5kaWNlcyBvZiB0aGUgZm91ciBzaW1wbGV4IGNvcm5lcnNcbiAgICAgIHZhciBpaSA9IGkgJiAyNTU7XG4gICAgICB2YXIgamogPSBqICYgMjU1O1xuICAgICAgdmFyIGtrID0gayAmIDI1NTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udHJpYnV0aW9uIGZyb20gdGhlIGZvdXIgY29ybmVyc1xuICAgICAgdmFyIHQwID0gMC42IC0geDAgKiB4MCAtIHkwICogeTAgLSB6MCAqIHowO1xuICAgICAgaWYgKHQwIDwgMCkgbjAgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMCA9IHBlcm1Nb2QxMltpaSArIHBlcm1bamogKyBwZXJtW2trXV1dICogMztcbiAgICAgICAgdDAgKj0gdDA7XG4gICAgICAgIG4wID0gdDAgKiB0MCAqIChncmFkM1tnaTBdICogeDAgKyBncmFkM1tnaTAgKyAxXSAqIHkwICsgZ3JhZDNbZ2kwICsgMl0gKiB6MCk7XG4gICAgICB9XG4gICAgICB2YXIgdDEgPSAwLjYgLSB4MSAqIHgxIC0geTEgKiB5MSAtIHoxICogejE7XG4gICAgICBpZiAodDEgPCAwKSBuMSA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kxID0gcGVybU1vZDEyW2lpICsgaTEgKyBwZXJtW2pqICsgajEgKyBwZXJtW2trICsgazFdXV0gKiAzO1xuICAgICAgICB0MSAqPSB0MTtcbiAgICAgICAgbjEgPSB0MSAqIHQxICogKGdyYWQzW2dpMV0gKiB4MSArIGdyYWQzW2dpMSArIDFdICogeTEgKyBncmFkM1tnaTEgKyAyXSAqIHoxKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MiA9IDAuNiAtIHgyICogeDIgLSB5MiAqIHkyIC0gejIgKiB6MjtcbiAgICAgIGlmICh0MiA8IDApIG4yID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTIgPSBwZXJtTW9kMTJbaWkgKyBpMiArIHBlcm1bamogKyBqMiArIHBlcm1ba2sgKyBrMl1dXSAqIDM7XG4gICAgICAgIHQyICo9IHQyO1xuICAgICAgICBuMiA9IHQyICogdDIgKiAoZ3JhZDNbZ2kyXSAqIHgyICsgZ3JhZDNbZ2kyICsgMV0gKiB5MiArIGdyYWQzW2dpMiArIDJdICogejIpO1xuICAgICAgfVxuICAgICAgdmFyIHQzID0gMC42IC0geDMgKiB4MyAtIHkzICogeTMgLSB6MyAqIHozO1xuICAgICAgaWYgKHQzIDwgMCkgbjMgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMyA9IHBlcm1Nb2QxMltpaSArIDEgKyBwZXJtW2pqICsgMSArIHBlcm1ba2sgKyAxXV1dICogMztcbiAgICAgICAgdDMgKj0gdDM7XG4gICAgICAgIG4zID0gdDMgKiB0MyAqIChncmFkM1tnaTNdICogeDMgKyBncmFkM1tnaTMgKyAxXSAqIHkzICsgZ3JhZDNbZ2kzICsgMl0gKiB6Myk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgY29udHJpYnV0aW9ucyBmcm9tIGVhY2ggY29ybmVyIHRvIGdldCB0aGUgZmluYWwgbm9pc2UgdmFsdWUuXG4gICAgICAvLyBUaGUgcmVzdWx0IGlzIHNjYWxlZCB0byBzdGF5IGp1c3QgaW5zaWRlIFstMSwxXVxuICAgICAgcmV0dXJuIDMyLjAgKiAobjAgKyBuMSArIG4yICsgbjMpO1xuICAgIH0sXG4gICAgLy8gNEQgc2ltcGxleCBub2lzZSwgYmV0dGVyIHNpbXBsZXggcmFuayBvcmRlcmluZyBtZXRob2QgMjAxMi0wMy0wOVxuICAgIG5vaXNlNEQ6IGZ1bmN0aW9uKHgsIHksIHosIHcpIHtcbiAgICAgIHZhciBwZXJtID0gdGhpcy5wZXJtO1xuICAgICAgdmFyIGdyYWQ0ID0gdGhpcy5ncmFkNDtcblxuICAgICAgdmFyIG4wLCBuMSwgbjIsIG4zLCBuNDsgLy8gTm9pc2UgY29udHJpYnV0aW9ucyBmcm9tIHRoZSBmaXZlIGNvcm5lcnNcbiAgICAgIC8vIFNrZXcgdGhlICh4LHkseix3KSBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggY2VsbCBvZiAyNCBzaW1wbGljZXMgd2UncmUgaW5cbiAgICAgIHZhciBzID0gKHggKyB5ICsgeiArIHcpICogRjQ7IC8vIEZhY3RvciBmb3IgNEQgc2tld2luZ1xuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKHggKyBzKTtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcih5ICsgcyk7XG4gICAgICB2YXIgayA9IE1hdGguZmxvb3IoeiArIHMpO1xuICAgICAgdmFyIGwgPSBNYXRoLmZsb29yKHcgKyBzKTtcbiAgICAgIHZhciB0ID0gKGkgKyBqICsgayArIGwpICogRzQ7IC8vIEZhY3RvciBmb3IgNEQgdW5za2V3aW5nXG4gICAgICB2YXIgWDAgPSBpIC0gdDsgLy8gVW5za2V3IHRoZSBjZWxsIG9yaWdpbiBiYWNrIHRvICh4LHkseix3KSBzcGFjZVxuICAgICAgdmFyIFkwID0gaiAtIHQ7XG4gICAgICB2YXIgWjAgPSBrIC0gdDtcbiAgICAgIHZhciBXMCA9IGwgLSB0O1xuICAgICAgdmFyIHgwID0geCAtIFgwOyAvLyBUaGUgeCx5LHosdyBkaXN0YW5jZXMgZnJvbSB0aGUgY2VsbCBvcmlnaW5cbiAgICAgIHZhciB5MCA9IHkgLSBZMDtcbiAgICAgIHZhciB6MCA9IHogLSBaMDtcbiAgICAgIHZhciB3MCA9IHcgLSBXMDtcbiAgICAgIC8vIEZvciB0aGUgNEQgY2FzZSwgdGhlIHNpbXBsZXggaXMgYSA0RCBzaGFwZSBJIHdvbid0IGV2ZW4gdHJ5IHRvIGRlc2NyaWJlLlxuICAgICAgLy8gVG8gZmluZCBvdXQgd2hpY2ggb2YgdGhlIDI0IHBvc3NpYmxlIHNpbXBsaWNlcyB3ZSdyZSBpbiwgd2UgbmVlZCB0b1xuICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBtYWduaXR1ZGUgb3JkZXJpbmcgb2YgeDAsIHkwLCB6MCBhbmQgdzAuXG4gICAgICAvLyBTaXggcGFpci13aXNlIGNvbXBhcmlzb25zIGFyZSBwZXJmb3JtZWQgYmV0d2VlbiBlYWNoIHBvc3NpYmxlIHBhaXJcbiAgICAgIC8vIG9mIHRoZSBmb3VyIGNvb3JkaW5hdGVzLCBhbmQgdGhlIHJlc3VsdHMgYXJlIHVzZWQgdG8gcmFuayB0aGUgbnVtYmVycy5cbiAgICAgIHZhciByYW5reCA9IDA7XG4gICAgICB2YXIgcmFua3kgPSAwO1xuICAgICAgdmFyIHJhbmt6ID0gMDtcbiAgICAgIHZhciByYW5rdyA9IDA7XG4gICAgICBpZiAoeDAgPiB5MCkgcmFua3grKztcbiAgICAgIGVsc2UgcmFua3krKztcbiAgICAgIGlmICh4MCA+IHowKSByYW5reCsrO1xuICAgICAgZWxzZSByYW5reisrO1xuICAgICAgaWYgKHgwID4gdzApIHJhbmt4Kys7XG4gICAgICBlbHNlIHJhbmt3Kys7XG4gICAgICBpZiAoeTAgPiB6MCkgcmFua3krKztcbiAgICAgIGVsc2UgcmFua3orKztcbiAgICAgIGlmICh5MCA+IHcwKSByYW5reSsrO1xuICAgICAgZWxzZSByYW5rdysrO1xuICAgICAgaWYgKHowID4gdzApIHJhbmt6Kys7XG4gICAgICBlbHNlIHJhbmt3Kys7XG4gICAgICB2YXIgaTEsIGoxLCBrMSwgbDE7IC8vIFRoZSBpbnRlZ2VyIG9mZnNldHMgZm9yIHRoZSBzZWNvbmQgc2ltcGxleCBjb3JuZXJcbiAgICAgIHZhciBpMiwgajIsIGsyLCBsMjsgLy8gVGhlIGludGVnZXIgb2Zmc2V0cyBmb3IgdGhlIHRoaXJkIHNpbXBsZXggY29ybmVyXG4gICAgICB2YXIgaTMsIGozLCBrMywgbDM7IC8vIFRoZSBpbnRlZ2VyIG9mZnNldHMgZm9yIHRoZSBmb3VydGggc2ltcGxleCBjb3JuZXJcbiAgICAgIC8vIHNpbXBsZXhbY10gaXMgYSA0LXZlY3RvciB3aXRoIHRoZSBudW1iZXJzIDAsIDEsIDIgYW5kIDMgaW4gc29tZSBvcmRlci5cbiAgICAgIC8vIE1hbnkgdmFsdWVzIG9mIGMgd2lsbCBuZXZlciBvY2N1ciwgc2luY2UgZS5nLiB4Pnk+ej53IG1ha2VzIHg8eiwgeTx3IGFuZCB4PHdcbiAgICAgIC8vIGltcG9zc2libGUuIE9ubHkgdGhlIDI0IGluZGljZXMgd2hpY2ggaGF2ZSBub24temVybyBlbnRyaWVzIG1ha2UgYW55IHNlbnNlLlxuICAgICAgLy8gV2UgdXNlIGEgdGhyZXNob2xkaW5nIHRvIHNldCB0aGUgY29vcmRpbmF0ZXMgaW4gdHVybiBmcm9tIHRoZSBsYXJnZXN0IG1hZ25pdHVkZS5cbiAgICAgIC8vIFJhbmsgMyBkZW5vdGVzIHRoZSBsYXJnZXN0IGNvb3JkaW5hdGUuXG4gICAgICBpMSA9IHJhbmt4ID49IDMgPyAxIDogMDtcbiAgICAgIGoxID0gcmFua3kgPj0gMyA/IDEgOiAwO1xuICAgICAgazEgPSByYW5reiA+PSAzID8gMSA6IDA7XG4gICAgICBsMSA9IHJhbmt3ID49IDMgPyAxIDogMDtcbiAgICAgIC8vIFJhbmsgMiBkZW5vdGVzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb29yZGluYXRlLlxuICAgICAgaTIgPSByYW5reCA+PSAyID8gMSA6IDA7XG4gICAgICBqMiA9IHJhbmt5ID49IDIgPyAxIDogMDtcbiAgICAgIGsyID0gcmFua3ogPj0gMiA/IDEgOiAwO1xuICAgICAgbDIgPSByYW5rdyA+PSAyID8gMSA6IDA7XG4gICAgICAvLyBSYW5rIDEgZGVub3RlcyB0aGUgc2Vjb25kIHNtYWxsZXN0IGNvb3JkaW5hdGUuXG4gICAgICBpMyA9IHJhbmt4ID49IDEgPyAxIDogMDtcbiAgICAgIGozID0gcmFua3kgPj0gMSA/IDEgOiAwO1xuICAgICAgazMgPSByYW5reiA+PSAxID8gMSA6IDA7XG4gICAgICBsMyA9IHJhbmt3ID49IDEgPyAxIDogMDtcbiAgICAgIC8vIFRoZSBmaWZ0aCBjb3JuZXIgaGFzIGFsbCBjb29yZGluYXRlIG9mZnNldHMgPSAxLCBzbyBubyBuZWVkIHRvIGNvbXB1dGUgdGhhdC5cbiAgICAgIHZhciB4MSA9IHgwIC0gaTEgKyBHNDsgLy8gT2Zmc2V0cyBmb3Igc2Vjb25kIGNvcm5lciBpbiAoeCx5LHosdykgY29vcmRzXG4gICAgICB2YXIgeTEgPSB5MCAtIGoxICsgRzQ7XG4gICAgICB2YXIgejEgPSB6MCAtIGsxICsgRzQ7XG4gICAgICB2YXIgdzEgPSB3MCAtIGwxICsgRzQ7XG4gICAgICB2YXIgeDIgPSB4MCAtIGkyICsgMi4wICogRzQ7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBpbiAoeCx5LHosdykgY29vcmRzXG4gICAgICB2YXIgeTIgPSB5MCAtIGoyICsgMi4wICogRzQ7XG4gICAgICB2YXIgejIgPSB6MCAtIGsyICsgMi4wICogRzQ7XG4gICAgICB2YXIgdzIgPSB3MCAtIGwyICsgMi4wICogRzQ7XG4gICAgICB2YXIgeDMgPSB4MCAtIGkzICsgMy4wICogRzQ7IC8vIE9mZnNldHMgZm9yIGZvdXJ0aCBjb3JuZXIgaW4gKHgseSx6LHcpIGNvb3Jkc1xuICAgICAgdmFyIHkzID0geTAgLSBqMyArIDMuMCAqIEc0O1xuICAgICAgdmFyIHozID0gejAgLSBrMyArIDMuMCAqIEc0O1xuICAgICAgdmFyIHczID0gdzAgLSBsMyArIDMuMCAqIEc0O1xuICAgICAgdmFyIHg0ID0geDAgLSAxLjAgKyA0LjAgKiBHNDsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSx6LHcpIGNvb3Jkc1xuICAgICAgdmFyIHk0ID0geTAgLSAxLjAgKyA0LjAgKiBHNDtcbiAgICAgIHZhciB6NCA9IHowIC0gMS4wICsgNC4wICogRzQ7XG4gICAgICB2YXIgdzQgPSB3MCAtIDEuMCArIDQuMCAqIEc0O1xuICAgICAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSBmaXZlIHNpbXBsZXggY29ybmVyc1xuICAgICAgdmFyIGlpID0gaSAmIDI1NTtcbiAgICAgIHZhciBqaiA9IGogJiAyNTU7XG4gICAgICB2YXIga2sgPSBrICYgMjU1O1xuICAgICAgdmFyIGxsID0gbCAmIDI1NTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udHJpYnV0aW9uIGZyb20gdGhlIGZpdmUgY29ybmVyc1xuICAgICAgdmFyIHQwID0gMC42IC0geDAgKiB4MCAtIHkwICogeTAgLSB6MCAqIHowIC0gdzAgKiB3MDtcbiAgICAgIGlmICh0MCA8IDApIG4wID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTAgPSAocGVybVtpaSArIHBlcm1bamogKyBwZXJtW2trICsgcGVybVtsbF1dXV0gJSAzMikgKiA0O1xuICAgICAgICB0MCAqPSB0MDtcbiAgICAgICAgbjAgPSB0MCAqIHQwICogKGdyYWQ0W2dpMF0gKiB4MCArIGdyYWQ0W2dpMCArIDFdICogeTAgKyBncmFkNFtnaTAgKyAyXSAqIHowICsgZ3JhZDRbZ2kwICsgM10gKiB3MCk7XG4gICAgICB9XG4gICAgICB2YXIgdDEgPSAwLjYgLSB4MSAqIHgxIC0geTEgKiB5MSAtIHoxICogejEgLSB3MSAqIHcxO1xuICAgICAgaWYgKHQxIDwgMCkgbjEgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMSA9IChwZXJtW2lpICsgaTEgKyBwZXJtW2pqICsgajEgKyBwZXJtW2trICsgazEgKyBwZXJtW2xsICsgbDFdXV1dICUgMzIpICogNDtcbiAgICAgICAgdDEgKj0gdDE7XG4gICAgICAgIG4xID0gdDEgKiB0MSAqIChncmFkNFtnaTFdICogeDEgKyBncmFkNFtnaTEgKyAxXSAqIHkxICsgZ3JhZDRbZ2kxICsgMl0gKiB6MSArIGdyYWQ0W2dpMSArIDNdICogdzEpO1xuICAgICAgfVxuICAgICAgdmFyIHQyID0gMC42IC0geDIgKiB4MiAtIHkyICogeTIgLSB6MiAqIHoyIC0gdzIgKiB3MjtcbiAgICAgIGlmICh0MiA8IDApIG4yID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTIgPSAocGVybVtpaSArIGkyICsgcGVybVtqaiArIGoyICsgcGVybVtrayArIGsyICsgcGVybVtsbCArIGwyXV1dXSAlIDMyKSAqIDQ7XG4gICAgICAgIHQyICo9IHQyO1xuICAgICAgICBuMiA9IHQyICogdDIgKiAoZ3JhZDRbZ2kyXSAqIHgyICsgZ3JhZDRbZ2kyICsgMV0gKiB5MiArIGdyYWQ0W2dpMiArIDJdICogejIgKyBncmFkNFtnaTIgKyAzXSAqIHcyKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MyA9IDAuNiAtIHgzICogeDMgLSB5MyAqIHkzIC0gejMgKiB6MyAtIHczICogdzM7XG4gICAgICBpZiAodDMgPCAwKSBuMyA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kzID0gKHBlcm1baWkgKyBpMyArIHBlcm1bamogKyBqMyArIHBlcm1ba2sgKyBrMyArIHBlcm1bbGwgKyBsM11dXV0gJSAzMikgKiA0O1xuICAgICAgICB0MyAqPSB0MztcbiAgICAgICAgbjMgPSB0MyAqIHQzICogKGdyYWQ0W2dpM10gKiB4MyArIGdyYWQ0W2dpMyArIDFdICogeTMgKyBncmFkNFtnaTMgKyAyXSAqIHozICsgZ3JhZDRbZ2kzICsgM10gKiB3Myk7XG4gICAgICB9XG4gICAgICB2YXIgdDQgPSAwLjYgLSB4NCAqIHg0IC0geTQgKiB5NCAtIHo0ICogejQgLSB3NCAqIHc0O1xuICAgICAgaWYgKHQ0IDwgMCkgbjQgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpNCA9IChwZXJtW2lpICsgMSArIHBlcm1bamogKyAxICsgcGVybVtrayArIDEgKyBwZXJtW2xsICsgMV1dXV0gJSAzMikgKiA0O1xuICAgICAgICB0NCAqPSB0NDtcbiAgICAgICAgbjQgPSB0NCAqIHQ0ICogKGdyYWQ0W2dpNF0gKiB4NCArIGdyYWQ0W2dpNCArIDFdICogeTQgKyBncmFkNFtnaTQgKyAyXSAqIHo0ICsgZ3JhZDRbZ2k0ICsgM10gKiB3NCk7XG4gICAgICB9XG4gICAgICAvLyBTdW0gdXAgYW5kIHNjYWxlIHRoZSByZXN1bHQgdG8gY292ZXIgdGhlIHJhbmdlIFstMSwxXVxuICAgICAgcmV0dXJuIDI3LjAgKiAobjAgKyBuMSArIG4yICsgbjMgKyBuNCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkUGVybXV0YXRpb25UYWJsZShyYW5kb20pIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgcCA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG4gICAgZm9yIChpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgICBwW2ldID0gaTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG4gICAgICB2YXIgciA9IGkgKyB+fihyYW5kb20oKSAqICgyNTYgLSBpKSk7XG4gICAgICB2YXIgYXV4ID0gcFtpXTtcbiAgICAgIHBbaV0gPSBwW3JdO1xuICAgICAgcFtyXSA9IGF1eDtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgU2ltcGxleE5vaXNlLl9idWlsZFBlcm11dGF0aW9uVGFibGUgPSBidWlsZFBlcm11dGF0aW9uVGFibGU7XG5cbiAgZnVuY3Rpb24gYWxlYSgpIHtcbiAgICAvLyBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbiAgICB2YXIgczAgPSAwO1xuICAgIHZhciBzMSA9IDA7XG4gICAgdmFyIHMyID0gMDtcbiAgICB2YXIgYyA9IDE7XG5cbiAgICB2YXIgbWFzaCA9IG1hc2hlcigpO1xuICAgIHMwID0gbWFzaCgnICcpO1xuICAgIHMxID0gbWFzaCgnICcpO1xuICAgIHMyID0gbWFzaCgnICcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHMwIC09IG1hc2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChzMCA8IDApIHtcbiAgICAgICAgczAgKz0gMTtcbiAgICAgIH1cbiAgICAgIHMxIC09IG1hc2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChzMSA8IDApIHtcbiAgICAgICAgczEgKz0gMTtcbiAgICAgIH1cbiAgICAgIHMyIC09IG1hc2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChzMiA8IDApIHtcbiAgICAgICAgczIgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFzaCA9IG51bGw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHQgPSAyMDkxNjM5ICogczAgKyBjICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICAgIHMwID0gczE7XG4gICAgICBzMSA9IHMyO1xuICAgICAgcmV0dXJuIHMyID0gdCAtIChjID0gdCB8IDApO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWFzaGVyKCkge1xuICAgIHZhciBuID0gMHhlZmM4MjQ5ZDtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgaCAqPSBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgICAgfVxuICAgICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gICAgfTtcbiAgfVxuXG4gIC8vIGFtZFxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGZ1bmN0aW9uKCkge3JldHVybiBTaW1wbGV4Tm9pc2U7fSk7XG4gIC8vIGNvbW1vbiBqc1xuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSBleHBvcnRzLlNpbXBsZXhOb2lzZSA9IFNpbXBsZXhOb2lzZTtcbiAgLy8gYnJvd3NlclxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgd2luZG93LlNpbXBsZXhOb2lzZSA9IFNpbXBsZXhOb2lzZTtcbiAgLy8gbm9kZWpzXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gU2ltcGxleE5vaXNlO1xuICB9XG5cbn0pKCk7XG4iLCJpbXBvcnQgdG9QYXRoIGZyb20gJy4vdG9QYXRoJztcbmltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcbmltcG9ydCB2YWxpZCBmcm9tICcuL3ZhbGlkJztcblxuZXhwb3J0IHsgdG9QYXRoLCB0b1BvaW50cywgdmFsaWQgfTsiLCJpbXBvcnQgdG9Qb2ludHMgZnJvbSAnLi90b1BvaW50cyc7XG5cbnZhciBwb2ludHNUb0QgPSBmdW5jdGlvbiBwb2ludHNUb0QocCkge1xuICB2YXIgZCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmaXJzdFBvaW50ID0gdm9pZCAwO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgcG9pbnQgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBfcG9pbnQkY3VydmUgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICBjdXJ2ZSA9IF9wb2ludCRjdXJ2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcG9pbnQkY3VydmUsXG4gICAgICAgICAgbW92ZVRvID0gcG9pbnQubW92ZVRvLFxuICAgICAgICAgIHggPSBwb2ludC54LFxuICAgICAgICAgIHkgPSBwb2ludC55O1xuXG4gICAgICB2YXIgaXNGaXJzdFBvaW50ID0gaSA9PT0gMCB8fCBtb3ZlVG87XG4gICAgICB2YXIgaXNMYXN0UG9pbnQgPSBpID09PSBwLmxlbmd0aCAtIDEgfHwgcFtpICsgMV0ubW92ZVRvO1xuICAgICAgdmFyIHByZXZQb2ludCA9IGkgPT09IDAgPyBudWxsIDogcFtpIC0gMV07XG5cbiAgICAgIGlmIChpc0ZpcnN0UG9pbnQpIHtcbiAgICAgICAgZmlyc3RQb2ludCA9IHBvaW50O1xuXG4gICAgICAgIGlmICghaXNMYXN0UG9pbnQpIHtcbiAgICAgICAgICBkICs9ICdNJyArIHggKyAnLCcgKyB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnZlKSB7XG4gICAgICAgIHN3aXRjaCAoY3VydmUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2FyYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMiA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9IF9wb2ludCRjdXJ2ZTIubGFyZ2VBcmNGbGFnLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZyA9IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBcixcbiAgICAgICAgICAgICAgICByeCA9IF9wb2ludCRjdXJ2ZTIucngsXG4gICAgICAgICAgICAgICAgcnkgPSBfcG9pbnQkY3VydmUyLnJ5LFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9IF9wb2ludCRjdXJ2ZTIuc3dlZXBGbGFnLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZyA9IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJHhBeGlzUm8gPSBfcG9pbnQkY3VydmUyLnhBeGlzUm90YXRpb24sXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbiA9IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbztcblxuICAgICAgICAgICAgZCArPSAnQScgKyByeCArICcsJyArIHJ5ICsgJywnICsgeEF4aXNSb3RhdGlvbiArICcsJyArIGxhcmdlQXJjRmxhZyArICcsJyArIHN3ZWVwRmxhZyArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3ViaWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTMgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBjeDEgPSBfcG9pbnQkY3VydmUzLngxLFxuICAgICAgICAgICAgICAgIGN5MSA9IF9wb2ludCRjdXJ2ZTMueTEsXG4gICAgICAgICAgICAgICAgY3gyID0gX3BvaW50JGN1cnZlMy54MixcbiAgICAgICAgICAgICAgICBjeTIgPSBfcG9pbnQkY3VydmUzLnkyO1xuXG4gICAgICAgICAgICBkICs9ICdDJyArIGN4MSArICcsJyArIGN5MSArICcsJyArIGN4MiArICcsJyArIGN5MiArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncXVhZHJhdGljJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmU0ID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgcXgxID0gX3BvaW50JGN1cnZlNC54MSxcbiAgICAgICAgICAgICAgICBxeTEgPSBfcG9pbnQkY3VydmU0LnkxO1xuXG4gICAgICAgICAgICBkICs9ICdRJyArIHF4MSArICcsJyArIHF5MSArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICAgIGQgKz0gJ1onO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTGFzdFBvaW50ICYmIHggPT09IGZpcnN0UG9pbnQueCAmJiB5ID09PSBmaXJzdFBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnWic7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54ICYmIHkgIT09IHByZXZQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ0wnICsgeCArICcsJyArIHk7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54KSB7XG4gICAgICAgIGQgKz0gJ0gnICsgeDtcbiAgICAgIH0gZWxzZSBpZiAoeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnVicgKyB5O1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkO1xufTtcblxudmFyIHRvUGF0aCA9IGZ1bmN0aW9uIHRvUGF0aChzKSB7XG4gIHZhciBpc1BvaW50cyA9IEFycmF5LmlzQXJyYXkocyk7XG4gIHZhciBpc0dyb3VwID0gaXNQb2ludHMgPyBBcnJheS5pc0FycmF5KHNbMF0pIDogcy50eXBlID09PSAnZyc7XG4gIHZhciBwb2ludHMgPSBpc1BvaW50cyA/IHMgOiBpc0dyb3VwID8gcy5zaGFwZXMubWFwKGZ1bmN0aW9uIChzaHApIHtcbiAgICByZXR1cm4gdG9Qb2ludHMoc2hwKTtcbiAgfSkgOiB0b1BvaW50cyhzKTtcblxuICBpZiAoaXNHcm91cCkge1xuICAgIHJldHVybiBwb2ludHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcG9pbnRzVG9EKHApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50c1RvRChwb2ludHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9QYXRoOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHRvUG9pbnRzID0gZnVuY3Rpb24gdG9Qb2ludHMoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsndHlwZSddKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21DaXJjbGUocHJvcHMpO1xuICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21FbGxpcHNlKHByb3BzKTtcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tTGluZShwcm9wcyk7XG4gICAgY2FzZSAncGF0aCc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBhdGgocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2x5Z29uKHByb3BzKTtcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKHByb3BzKTtcbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUmVjdChwcm9wcyk7XG4gICAgY2FzZSAnZyc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUcocHJvcHMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIHNoYXBlIHR5cGUnKTtcbiAgfVxufTtcblxudmFyIGdldFBvaW50c0Zyb21DaXJjbGUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tQ2lyY2xlKF9yZWYyKSB7XG4gIHZhciBjeCA9IF9yZWYyLmN4LFxuICAgICAgY3kgPSBfcmVmMi5jeSxcbiAgICAgIHIgPSBfcmVmMi5yO1xuXG4gIHJldHVybiBbeyB4OiBjeCwgeTogY3kgLSByLCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByLCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHIsIHJ5OiByLCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21FbGxpcHNlID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUVsbGlwc2UoX3JlZjMpIHtcbiAgdmFyIGN4ID0gX3JlZjMuY3gsXG4gICAgICBjeSA9IF9yZWYzLmN5LFxuICAgICAgcnggPSBfcmVmMy5yeCxcbiAgICAgIHJ5ID0gX3JlZjMucnk7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHJ5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByeSwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21MaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUxpbmUoX3JlZjQpIHtcbiAgdmFyIHgxID0gX3JlZjQueDEsXG4gICAgICB4MiA9IF9yZWY0LngyLFxuICAgICAgeTEgPSBfcmVmNC55MSxcbiAgICAgIHkyID0gX3JlZjQueTI7XG5cbiAgcmV0dXJuIFt7IHg6IHgxLCB5OiB5MSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeDIsIHk6IHkyIH1dO1xufTtcblxudmFyIHZhbGlkQ29tbWFuZHMgPSAvW01tTGxIaFZ2Q2NTc1FxVHRBYVp6XS9nO1xuXG52YXIgY29tbWFuZExlbmd0aHMgPSB7XG4gIEE6IDcsXG4gIEM6IDYsXG4gIEg6IDEsXG4gIEw6IDIsXG4gIE06IDIsXG4gIFE6IDQsXG4gIFM6IDQsXG4gIFQ6IDIsXG4gIFY6IDEsXG4gIFo6IDBcbn07XG5cbnZhciByZWxhdGl2ZUNvbW1hbmRzID0gWydhJywgJ2MnLCAnaCcsICdsJywgJ20nLCAncScsICdzJywgJ3QnLCAndiddO1xuXG52YXIgaXNSZWxhdGl2ZSA9IGZ1bmN0aW9uIGlzUmVsYXRpdmUoY29tbWFuZCkge1xuICByZXR1cm4gcmVsYXRpdmVDb21tYW5kcy5pbmRleE9mKGNvbW1hbmQpICE9PSAtMTtcbn07XG5cbnZhciBvcHRpb25hbEFyY0tleXMgPSBbJ3hBeGlzUm90YXRpb24nLCAnbGFyZ2VBcmNGbGFnJywgJ3N3ZWVwRmxhZyddO1xuXG52YXIgZ2V0Q29tbWFuZHMgPSBmdW5jdGlvbiBnZXRDb21tYW5kcyhkKSB7XG4gIHJldHVybiBkLm1hdGNoKHZhbGlkQ29tbWFuZHMpO1xufTtcblxudmFyIGdldFBhcmFtcyA9IGZ1bmN0aW9uIGdldFBhcmFtcyhkKSB7XG4gIHJldHVybiBkLnNwbGl0KHZhbGlkQ29tbWFuZHMpLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1swLTldKy0vZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLnNsaWNlKDAsIC0xKSArICcgLSc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1xcLlswLTldKy9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0gKyAnICc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnRyaW0oKTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYubGVuZ3RoID4gMDtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYuc3BsaXQoL1sgLF0rLykubWFwKHBhcnNlRmxvYXQpLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuICFpc05hTihuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBhdGggPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUGF0aChfcmVmNSkge1xuICB2YXIgZCA9IF9yZWY1LmQ7XG5cbiAgdmFyIGNvbW1hbmRzID0gZ2V0Q29tbWFuZHMoZCk7XG4gIHZhciBwYXJhbXMgPSBnZXRQYXJhbXMoZCk7XG5cbiAgdmFyIHBvaW50cyA9IFtdO1xuXG4gIHZhciBtb3ZlVG8gPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb21tYW5kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2ldO1xuICAgIHZhciB1cHBlckNhc2VDb21tYW5kID0gY29tbWFuZC50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBjb21tYW5kTGVuZ3RoID0gY29tbWFuZExlbmd0aHNbdXBwZXJDYXNlQ29tbWFuZF07XG4gICAgdmFyIHJlbGF0aXZlID0gaXNSZWxhdGl2ZShjb21tYW5kKTtcblxuICAgIGlmIChjb21tYW5kTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNvbW1hbmRQYXJhbXMgPSBwYXJhbXMuc2hpZnQoKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gY29tbWFuZFBhcmFtcy5sZW5ndGggLyBjb21tYW5kTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICB2YXIgcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBzd2l0Y2ggKHVwcGVyQ2FzZUNvbW1hbmQpIHtcbiAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIHZhciB4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICAgICAgbW92ZVRvID0geyB4OiB4LCB5OiB5IH07XG4gICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogcHJldlBvaW50LnlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiBwcmV2UG9pbnQueCxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyYycsXG4gICAgICAgICAgICAgICAgcng6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICByeTogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHhBeGlzUm90YXRpb246IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBsYXJnZUFyY0ZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBzd2VlcEZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG9wdGlvbmFsQXJjS2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdWydjdXJ2ZSddW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1YmljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB4MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHZhciBzeDIgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3ggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgdmFyIGRpZmYgPSB7fTtcblxuICAgICAgICAgICAgdmFyIHN4MSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBzeTEgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmIChwcmV2UG9pbnQuY3VydmUgJiYgcHJldlBvaW50LmN1cnZlLnR5cGUgPT09ICdjdWJpYycpIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngyID8gcHJldlBvaW50LnggLSBkaWZmLnggOiBwcmV2UG9pbnQueCArIGRpZmYueDtcbiAgICAgICAgICAgICAgc3kxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTIgPyBwcmV2UG9pbnQueSAtIGRpZmYueSA6IHByZXZQb2ludC55ICsgZGlmZi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMoc3ggLSBzeDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhzeSAtIHN5Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAnY3ViaWMnLCB4MTogc3gxLCB5MTogc3kxLCB4Mjogc3gyLCB5Mjogc3kyIH0sIHg6IHN4LCB5OiBzeSB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncXVhZHJhdGljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIHZhciB0eCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgdHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgdHgxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHR5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ3F1YWRyYXRpYycpIHtcbiAgICAgICAgICAgICAgdmFyIF9kaWZmID0ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGguYWJzKHByZXZQb2ludC54IC0gcHJldlBvaW50LmN1cnZlLngxKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55MSlcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueCA8IHByZXZQb2ludC5jdXJ2ZS54MSA/IHByZXZQb2ludC54IC0gX2RpZmYueCA6IHByZXZQb2ludC54ICsgX2RpZmYueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTEgPyBwcmV2UG9pbnQueSAtIF9kaWZmLnkgOiBwcmV2UG9pbnQueSArIF9kaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgY3VydmU6IHsgdHlwZTogJ3F1YWRyYXRpYycsIHgxOiB0eDEsIHkxOiB0eTEgfSwgeDogdHgsIHk6IHR5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3ByZXZQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gfHwgeyB4OiAwLCB5OiAwIH07XG5cbiAgICAgIGlmIChfcHJldlBvaW50LnggIT09IG1vdmVUby54IHx8IF9wcmV2UG9pbnQueSAhPT0gbW92ZVRvLnkpIHtcbiAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBtb3ZlVG8ueCwgeTogbW92ZVRvLnkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9seWdvbiA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5Z29uKF9yZWY2KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNi5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IHRydWUsIHBvaW50czogcG9pbnRzIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5bGluZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5bGluZShfcmVmNykge1xuICB2YXIgcG9pbnRzID0gX3JlZjcucG9pbnRzO1xuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tUG9pbnRzKHsgY2xvc2VkOiBmYWxzZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvaW50cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2ludHMoX3JlZjgpIHtcbiAgdmFyIGNsb3NlZCA9IF9yZWY4LmNsb3NlZCxcbiAgICAgIHBvaW50cyA9IF9yZWY4LnBvaW50cztcblxuICB2YXIgbnVtYmVycyA9IHBvaW50cy5zcGxpdCgvW1xccyxdKy8pLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG4pO1xuICB9KTtcblxuICB2YXIgcCA9IG51bWJlcnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHBvaW50LCBpKSB7XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBhcnIucHVzaCh7IHg6IHBvaW50IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJbKGkgLSAxKSAvIDJdLnkgPSBwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9LCBbXSk7XG5cbiAgaWYgKGNsb3NlZCkge1xuICAgIHAucHVzaChfZXh0ZW5kcyh7fSwgcFswXSkpO1xuICB9XG5cbiAgcFswXS5tb3ZlVG8gPSB0cnVlO1xuXG4gIHJldHVybiBwO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3QoX3JlZjkpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWY5LmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjkucngsXG4gICAgICByeSA9IF9yZWY5LnJ5LFxuICAgICAgd2lkdGggPSBfcmVmOS53aWR0aCxcbiAgICAgIHggPSBfcmVmOS54LFxuICAgICAgeSA9IF9yZWY5Lnk7XG5cbiAgaWYgKHJ4IHx8IHJ5KSB7XG4gICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyh7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHJ4OiByeCB8fCByeSxcbiAgICAgIHJ5OiByeSB8fCByeCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCh7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIHg6IHgsIHk6IHkgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21CYXNpY1JlY3QoX3JlZjEwKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMTAuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmMTAud2lkdGgsXG4gICAgICB4ID0gX3JlZjEwLngsXG4gICAgICB5ID0gX3JlZjEwLnk7XG5cbiAgcmV0dXJuIFt7IHg6IHgsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyhfcmVmMTEpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMS5oZWlnaHQsXG4gICAgICByeCA9IF9yZWYxMS5yeCxcbiAgICAgIHJ5ID0gX3JlZjExLnJ5LFxuICAgICAgd2lkdGggPSBfcmVmMTEud2lkdGgsXG4gICAgICB4ID0gX3JlZjExLngsXG4gICAgICB5ID0gX3JlZjExLnk7XG5cbiAgdmFyIGN1cnZlID0geyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9O1xuXG4gIHJldHVybiBbeyB4OiB4ICsgcngsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCAtIHJ4LCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgcnksIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCAtIHJ5IH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgKyBoZWlnaHQsIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyByeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgLSByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCwgeTogeSArIHJ5IH0sIHsgeDogeCArIHJ4LCB5OiB5LCBjdXJ2ZTogY3VydmUgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUcgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRyhfcmVmMTIpIHtcbiAgdmFyIHNoYXBlcyA9IF9yZWYxMi5zaGFwZXM7XG4gIHJldHVybiBzaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHRvUG9pbnRzKHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUG9pbnRzOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGdldEVycm9ycyA9IGZ1bmN0aW9uIGdldEVycm9ycyhzaGFwZSkge1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyhzaGFwZSk7XG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBydWxlcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbWF0Y2ggPSBfcmVmLm1hdGNoLFxuICAgICAgICBwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgICByZXF1aXJlZCA9IF9yZWYucmVxdWlyZWQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGU7XG5cbiAgICBpZiAodHlwZW9mIHNoYXBlW3Byb3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgaXMgcmVxdWlyZWQnICsgKHByb3AgPT09ICd0eXBlJyA/ICcnIDogJyBvbiBhICcgKyBzaGFwZS50eXBlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGVbcHJvcF0pKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSBhcnJheScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHNoYXBlW3Byb3BdKSAhPT0gdHlwZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9mIHR5cGUgJyArIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoKSkge1xuICAgICAgICBpZiAobWF0Y2guaW5kZXhPZihzaGFwZVtwcm9wXSkgPT09IC0xKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9uZSBvZiAnICsgbWF0Y2guam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzaGFwZS50eXBlID09PSAnZycgJiYgQXJyYXkuaXNBcnJheShzaGFwZS5zaGFwZXMpKSB7XG4gICAgdmFyIGNoaWxkRXJyb3JzID0gc2hhcGUuc2hhcGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGdldEVycm9ycyhzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KGVycm9ycywgY2hpbGRFcnJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IFt7XG4gICAgbWF0Y2g6IFsnY2lyY2xlJywgJ2VsbGlwc2UnLCAnbGluZScsICdwYXRoJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmVjdCcsICdnJ10sXG4gICAgcHJvcDogJ3R5cGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH1dO1xuXG4gIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDEnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneTInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdkJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3BvaW50cycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVjdCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2hlaWdodCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnd2lkdGgnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2cnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdzaGFwZXMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxudmFyIHZhbGlkID0gZnVuY3Rpb24gdmFsaWQoc2hhcGUpIHtcbiAgdmFyIGVycm9ycyA9IGdldEVycm9ycyhzaGFwZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IGVycm9ycyxcbiAgICB2YWxpZDogZXJyb3JzLmxlbmd0aCA9PT0gMFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWQ7IiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9