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
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources-on-paths/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

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
  InfluenceLinesColor: 'rgba(255,255,255,.2)',
  BoundsFillColor: 'rgba(255,255,255,0)',
  BoundsBorderColor: 'rgba(255,255,255,.05)',
  ObstacleFillColor: 'rgba(255,255,255,.2)'
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
  EnableOpacityGradient: true,  // turns on/off opacity


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
  ShowObstacles: true,         // toggled with 'o'

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

    this.bounds = [];
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
            currentNode.parent.thickness = currentNode.thickness + .07;
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
    // Erase the canvas
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


let inside = __webpack_require__(/*! point-in-polygon */ "./node_modules/point-in-polygon/index.js");

class Path {
  constructor(polygon, type, ctx, settings) {
    this.polygon = polygon;     // array of arrays containing coordinates defining a polygon ([[x0,y0],[x1,y1],...])
    this.ctx = ctx;             // global canvas context
    this.type = type;           // string either 'Bounds' or 'Obstacle'

    this.origin = {x:0, y:0};   // origin point used for translatiion
    this.scale = 1;

    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
  }

  // Check if provided coordinates are inside polygon defined by this Path
  contains(x, y) {
    return inside([x, y], this.polygon);
  }

  // Relative translation
  moveBy(x, y) {
    this.origin.x += x;
    this.origin.y += y;
  }

  // Absolute translation
  moveTo(x, y) {
    this.origin.x = x;
    this.origin.y = y;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.polygon[0][0] + this.origin.x, this.polygon[0][1] + this.origin.y);

    // Draw sequential lines to all points of the polygon
    for(let i = 0; i < this.polygon.length; i++) {
      this.ctx.lineTo(this.polygon[i][0] + this.origin.x, this.polygon[i][1] + this.origin.y);
    }

    // Draw line back to first point to close the polygon
    this.ctx.lineTo(this.polygon[0][0] + this.origin.x, this.polygon[0][1] + this.origin.y);

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
      if(this.settings.EnableOpacityGradient) {
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
      if(this.settings.EnableOpacityGradient) {
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

/***/ "./node_modules/svg-pathdata/lib/SVGPathData.module.js":
/*!*************************************************************!*\
  !*** ./node_modules/svg-pathdata/lib/SVGPathData.module.js ***!
  \*************************************************************/
/*! exports provided: SVGPathData, COMMAND_ARG_COUNTS, encodeSVGPath, SVGPathDataParser, SVGPathDataTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathData", function() { return SVGPathData$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_ARG_COUNTS", function() { return COMMAND_ARG_COUNTS$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSVGPath", function() { return encodeSVGPath$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataParser", function() { return SVGPathDataParser$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPathDataTransformer", function() { return SVGPathDataTransformer; });
var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,a){t.__proto__=a}||function(t,a){for(var r in a)a.hasOwnProperty(r)&&(t[r]=a[r])};function __extends(t,a){function r(){this.constructor=t}extendStatics(t,a),t.prototype=null===a?Object.create(a):(r.prototype=a.prototype,new r)}function rotate(t,a){var r=t[0],e=t[1];return[r*Math.cos(a)-e*Math.sin(a),r*Math.sin(a)+e*Math.cos(a)]}function assertNumbers(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];for(var r=0;r<t.length;r++)if("number"!=typeof t[r])throw new Error("assertNumbers arguments["+r+"] is not a number. "+typeof t[r]+" == typeof "+t[r]);return!0}var PI=Math.PI;function annotateArcCommand(t,a,r){t.lArcFlag=0===t.lArcFlag?0:1,t.sweepFlag=0===t.sweepFlag?0:1;var e=t.rX,n=t.rY,i=t.x,o=t.y;e=Math.abs(t.rX),n=Math.abs(t.rY);var s=rotate([(a-i)/2,(r-o)/2],-t.xRot/180*PI),h=s[0],u=s[1],c=Math.pow(h,2)/Math.pow(e,2)+Math.pow(u,2)/Math.pow(n,2);1<c&&(e*=Math.sqrt(c),n*=Math.sqrt(c)),t.rX=e,t.rY=n;var m=Math.pow(e,2)*Math.pow(u,2)+Math.pow(n,2)*Math.pow(h,2),_=(t.lArcFlag!==t.sweepFlag?1:-1)*Math.sqrt(Math.max(0,(Math.pow(e,2)*Math.pow(n,2)-m)/m)),T=e*u/n*_,O=-n*h/e*_,p=rotate([T,O],t.xRot/180*PI);t.cX=p[0]+(a+i)/2,t.cY=p[1]+(r+o)/2,t.phi1=Math.atan2((u-O)/n,(h-T)/e),t.phi2=Math.atan2((-u-O)/n,(-h-T)/e),0===t.sweepFlag&&t.phi2>t.phi1&&(t.phi2-=2*PI),1===t.sweepFlag&&t.phi2<t.phi1&&(t.phi2+=2*PI),t.phi1*=180/PI,t.phi2*=180/PI}function intersectionUnitCircleLine(t,a,r){assertNumbers(t,a,r);var e=t*t+a*a-r*r;if(0>e)return[];if(0===e)return[[t*r/(t*t+a*a),a*r/(t*t+a*a)]];var n=Math.sqrt(e);return[[(t*r+a*n)/(t*t+a*a),(a*r-t*n)/(t*t+a*a)],[(t*r-a*n)/(t*t+a*a),(a*r+t*n)/(t*t+a*a)]]}var SVGPathDataTransformer,DEG=Math.PI/180;function lerp(t,a,r){return(1-r)*t+r*a}function arcAt(t,a,r,e){return t+Math.cos(e/180*PI)*a+Math.sin(e/180*PI)*r}function bezierRoot(t,a,r,e){var n=a-t,i=r-a,o=3*n+3*(e-r)-6*i,s=6*(i-n),h=3*n;return Math.abs(o)<1e-6?[-h/s]:pqFormula(s/o,h/o,1e-6)}function bezierAt(t,a,r,e,n){var i=1-n;return t*(i*i*i)+a*(3*i*i*n)+r*(3*i*n*n)+e*(n*n*n)}function pqFormula(t,a,r){void 0===r&&(r=1e-6);var e=t*t/4-a;if(e<-r)return[];if(e<=r)return[-t/2];var n=Math.sqrt(e);return[-t/2-n,-t/2+n]}function a2c(t,a,r){var e,n,i,o;t.cX||annotateArcCommand(t,a,r);for(var s=Math.min(t.phi1,t.phi2),h=Math.max(t.phi1,t.phi2)-s,u=Math.ceil(h/90),c=new Array(u),m=a,_=r,T=0;T<u;T++){var O=lerp(t.phi1,t.phi2,T/u),p=lerp(t.phi1,t.phi2,(T+1)/u),y=p-O,S=4/3*Math.tan(y*DEG/4),f=[Math.cos(O*DEG)-S*Math.sin(O*DEG),Math.sin(O*DEG)+S*Math.cos(O*DEG)],V=f[0],N=f[1],D=[Math.cos(p*DEG),Math.sin(p*DEG)],P=D[0],l=D[1],v=[P+S*Math.sin(p*DEG),l-S*Math.cos(p*DEG)],E=v[0],A=v[1];c[T]={relative:t.relative,type:SVGPathData.CURVE_TO};var d=function(a,r){var e=rotate([a*t.rX,r*t.rY],t.xRot),n=e[0],i=e[1];return[t.cX+n,t.cY+i]};e=d(V,N),c[T].x1=e[0],c[T].y1=e[1],n=d(E,A),c[T].x2=n[0],c[T].y2=n[1],i=d(P,l),c[T].x=i[0],c[T].y=i[1],t.relative&&(c[T].x1-=m,c[T].y1-=_,c[T].x2-=m,c[T].y2-=_,c[T].x-=m,c[T].y-=_),m=(o=[c[T].x,c[T].y])[0],_=o[1]}return c}!function(t){function a(){return n(function(t,a,r){return t.relative&&(void 0!==t.x1&&(t.x1+=a),void 0!==t.y1&&(t.y1+=r),void 0!==t.x2&&(t.x2+=a),void 0!==t.y2&&(t.y2+=r),void 0!==t.x&&(t.x+=a),void 0!==t.y&&(t.y+=r),t.relative=!1),t})}function r(){var t=NaN,a=NaN,r=NaN,e=NaN;return n(function(n,i,o){return n.type&SVGPathData.SMOOTH_CURVE_TO&&(n.type=SVGPathData.CURVE_TO,t=isNaN(t)?i:t,a=isNaN(a)?o:a,n.x1=n.relative?i-t:2*i-t,n.y1=n.relative?o-a:2*o-a),n.type&SVGPathData.CURVE_TO?(t=n.relative?i+n.x2:n.x2,a=n.relative?o+n.y2:n.y2):(t=NaN,a=NaN),n.type&SVGPathData.SMOOTH_QUAD_TO&&(n.type=SVGPathData.QUAD_TO,r=isNaN(r)?i:r,e=isNaN(e)?o:e,n.x1=n.relative?i-r:2*i-r,n.y1=n.relative?o-e:2*o-e),n.type&SVGPathData.QUAD_TO?(r=n.relative?i+n.x1:n.x1,e=n.relative?o+n.y1:n.y1):(r=NaN,e=NaN),n})}function e(){var t=NaN,a=NaN;return n(function(r,e,n){if(r.type&SVGPathData.SMOOTH_QUAD_TO&&(r.type=SVGPathData.QUAD_TO,t=isNaN(t)?e:t,a=isNaN(a)?n:a,r.x1=r.relative?e-t:2*e-t,r.y1=r.relative?n-a:2*n-a),r.type&SVGPathData.QUAD_TO){t=r.relative?e+r.x1:r.x1,a=r.relative?n+r.y1:r.y1;var i=r.x1,o=r.y1;r.type=SVGPathData.CURVE_TO,r.x1=((r.relative?0:e)+2*i)/3,r.y1=((r.relative?0:n)+2*o)/3,r.x2=(r.x+2*i)/3,r.y2=(r.y+2*o)/3}else t=NaN,a=NaN;return r})}function n(t){var a=0,r=0,e=NaN,n=NaN;return function(i){if(isNaN(e)&&!(i.type&SVGPathData.MOVE_TO))throw new Error("path must start with moveto");var o=t(i,a,r,e,n);return i.type&SVGPathData.CLOSE_PATH&&(a=e,r=n),void 0!==i.x&&(a=i.relative?a+i.x:i.x),void 0!==i.y&&(r=i.relative?r+i.y:i.y),i.type&SVGPathData.MOVE_TO&&(e=a,n=r),o}}function i(t,a,r,e,i,o){return assertNumbers(t,a,r,e,i,o),n(function(n,s,h,u){var c=n.x1,m=n.x2,_=n.relative&&!isNaN(u),T=void 0!==n.x?n.x:_?0:s,O=void 0!==n.y?n.y:_?0:h;function p(t){return t*t}n.type&SVGPathData.HORIZ_LINE_TO&&0!==a&&(n.type=SVGPathData.LINE_TO,n.y=n.relative?0:h),n.type&SVGPathData.VERT_LINE_TO&&0!==r&&(n.type=SVGPathData.LINE_TO,n.x=n.relative?0:s),void 0!==n.x&&(n.x=n.x*t+O*r+(_?0:i)),void 0!==n.y&&(n.y=T*a+n.y*e+(_?0:o)),void 0!==n.x1&&(n.x1=n.x1*t+n.y1*r+(_?0:i)),void 0!==n.y1&&(n.y1=c*a+n.y1*e+(_?0:o)),void 0!==n.x2&&(n.x2=n.x2*t+n.y2*r+(_?0:i)),void 0!==n.y2&&(n.y2=m*a+n.y2*e+(_?0:o));var y=t*e-a*r;if(void 0!==n.xRot&&(1!==t||0!==a||0!==r||1!==e))if(0===y)delete n.rX,delete n.rY,delete n.xRot,delete n.lArcFlag,delete n.sweepFlag,n.type=SVGPathData.LINE_TO;else{var S=n.xRot*Math.PI/180,f=Math.sin(S),V=Math.cos(S),N=1/p(n.rX),D=1/p(n.rY),P=p(V)*N+p(f)*D,l=2*f*V*(N-D),v=p(f)*N+p(V)*D,E=P*e*e-l*a*e+v*a*a,A=l*(t*e+a*r)-2*(P*r*e+v*t*a),d=P*r*r-l*t*r+v*t*t,G=(Math.atan2(A,E-d)+Math.PI)%Math.PI/2,C=Math.sin(G),x=Math.cos(G);n.rX=Math.abs(y)/Math.sqrt(E*p(x)+A*C*x+d*p(C)),n.rY=Math.abs(y)/Math.sqrt(E*p(C)-A*C*x+d*p(x)),n.xRot=180*G/Math.PI}return void 0!==n.sweepFlag&&0>y&&(n.sweepFlag=+!n.sweepFlag),n})}function o(){return function(t){var a={};for(var r in t)a[r]=t[r];return a}}t.ROUND=function(t){function a(a){return Math.round(a*t)/t}return void 0===t&&(t=1e13),assertNumbers(t),function(t){return void 0!==t.x1&&(t.x1=a(t.x1)),void 0!==t.y1&&(t.y1=a(t.y1)),void 0!==t.x2&&(t.x2=a(t.x2)),void 0!==t.y2&&(t.y2=a(t.y2)),void 0!==t.x&&(t.x=a(t.x)),void 0!==t.y&&(t.y=a(t.y)),t}},t.TO_ABS=a,t.TO_REL=function(){return n(function(t,a,r){return t.relative||(void 0!==t.x1&&(t.x1-=a),void 0!==t.y1&&(t.y1-=r),void 0!==t.x2&&(t.x2-=a),void 0!==t.y2&&(t.y2-=r),void 0!==t.x&&(t.x-=a),void 0!==t.y&&(t.y-=r),t.relative=!0),t})},t.NORMALIZE_HVZ=function(t,a,r){return void 0===t&&(t=!0),void 0===a&&(a=!0),void 0===r&&(r=!0),n(function(e,n,i,o,s){if(isNaN(o)&&!(e.type&SVGPathData.MOVE_TO))throw new Error("path must start with moveto");return a&&e.type&SVGPathData.HORIZ_LINE_TO&&(e.type=SVGPathData.LINE_TO,e.y=e.relative?0:i),r&&e.type&SVGPathData.VERT_LINE_TO&&(e.type=SVGPathData.LINE_TO,e.x=e.relative?0:n),t&&e.type&SVGPathData.CLOSE_PATH&&(e.type=SVGPathData.LINE_TO,e.x=e.relative?o-n:o,e.y=e.relative?s-i:s),e.type&SVGPathData.ARC&&(0===e.rX||0===e.rY)&&(e.type=SVGPathData.LINE_TO,delete e.rX,delete e.rY,delete e.xRot,delete e.lArcFlag,delete e.sweepFlag),e})},t.NORMALIZE_ST=r,t.QT_TO_C=e,t.INFO=n,t.SANITIZE=function(t){void 0===t&&(t=0),assertNumbers(t);var a=NaN,r=NaN,e=NaN,i=NaN;return n(function(n,o,s,h,u){var c=Math.abs,m=!1,_=0,T=0;if(n.type&SVGPathData.SMOOTH_CURVE_TO&&(_=isNaN(a)?0:o-a,T=isNaN(r)?0:s-r),n.type&(SVGPathData.CURVE_TO|SVGPathData.SMOOTH_CURVE_TO)?(a=n.relative?o+n.x2:n.x2,r=n.relative?s+n.y2:n.y2):(a=NaN,r=NaN),n.type&SVGPathData.SMOOTH_QUAD_TO?(e=isNaN(e)?o:2*o-e,i=isNaN(i)?s:2*s-i):n.type&SVGPathData.QUAD_TO?(e=n.relative?o+n.x1:n.x1,i=n.relative?s+n.y1:n.y2):(e=NaN,i=NaN),n.type&SVGPathData.LINE_COMMANDS||n.type&SVGPathData.ARC&&(0===n.rX||0===n.rY||!n.lArcFlag)||n.type&SVGPathData.CURVE_TO||n.type&SVGPathData.SMOOTH_CURVE_TO||n.type&SVGPathData.QUAD_TO||n.type&SVGPathData.SMOOTH_QUAD_TO){var O=void 0===n.x?0:n.relative?n.x:n.x-o,p=void 0===n.y?0:n.relative?n.y:n.y-s;_=isNaN(e)?void 0===n.x1?_:n.relative?n.x:n.x1-o:e-o,T=isNaN(i)?void 0===n.y1?T:n.relative?n.y:n.y1-s:i-s;var y=void 0===n.x2?0:n.relative?n.x:n.x2-o,S=void 0===n.y2?0:n.relative?n.y:n.y2-s;c(O)<=t&&c(p)<=t&&c(_)<=t&&c(T)<=t&&c(y)<=t&&c(S)<=t&&(m=!0)}return n.type&SVGPathData.CLOSE_PATH&&c(o-h)<=t&&c(s-u)<=t&&(m=!0),m?[]:n})},t.MATRIX=i,t.ROTATE=function(t,a,r){void 0===a&&(a=0),void 0===r&&(r=0),assertNumbers(t,a,r);var e=Math.sin(t),n=Math.cos(t);return i(n,e,-e,n,a-a*n+r*e,r-a*e-r*n)},t.TRANSLATE=function(t,a){return void 0===a&&(a=0),assertNumbers(t,a),i(1,0,0,1,t,a)},t.SCALE=function(t,a){return void 0===a&&(a=t),assertNumbers(t,a),i(t,0,0,a,0,0)},t.SKEW_X=function(t){return assertNumbers(t),i(1,0,Math.atan(t),1,0,0)},t.SKEW_Y=function(t){return assertNumbers(t),i(1,Math.atan(t),0,1,0,0)},t.X_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),assertNumbers(t),i(-1,0,0,1,t,0)},t.Y_AXIS_SYMMETRY=function(t){return void 0===t&&(t=0),assertNumbers(t),i(1,0,0,-1,0,t)},t.A_TO_C=function(){return n(function(t,a,r){return SVGPathData.ARC===t.type?a2c(t,t.relative?0:a,t.relative?0:r):t})},t.ANNOTATE_ARCS=function(){return n(function(t,a,r){return t.relative&&(a=0,r=0),SVGPathData.ARC===t.type&&annotateArcCommand(t,a,r),t})},t.CLONE=o,t.CALCULATE_BOUNDS=function(){var t=function(t){var a={};for(var r in t)a[r]=t[r];return a},i=a(),o=e(),s=r(),h=n(function(a,r,e){var n=s(o(i(t(a))));function u(t){t>h.maxX&&(h.maxX=t),t<h.minX&&(h.minX=t)}function c(t){t>h.maxY&&(h.maxY=t),t<h.minY&&(h.minY=t)}if(n.type&SVGPathData.DRAWING_COMMANDS&&(u(r),c(e)),n.type&SVGPathData.HORIZ_LINE_TO&&u(n.x),n.type&SVGPathData.VERT_LINE_TO&&c(n.y),n.type&SVGPathData.LINE_TO&&(u(n.x),c(n.y)),n.type&SVGPathData.CURVE_TO){u(n.x),c(n.y);for(var m=0,_=bezierRoot(r,n.x1,n.x2,n.x);m<_.length;m++)0<(G=_[m])&&1>G&&u(bezierAt(r,n.x1,n.x2,n.x,G));for(var T=0,O=bezierRoot(e,n.y1,n.y2,n.y);T<O.length;T++)0<(G=O[T])&&1>G&&c(bezierAt(e,n.y1,n.y2,n.y,G))}if(n.type&SVGPathData.ARC){u(n.x),c(n.y),annotateArcCommand(n,r,e);for(var p=n.xRot/180*Math.PI,y=Math.cos(p)*n.rX,S=Math.sin(p)*n.rX,f=-Math.sin(p)*n.rY,V=Math.cos(p)*n.rY,N=n.phi1<n.phi2?[n.phi1,n.phi2]:-180>n.phi2?[n.phi2+360,n.phi1+360]:[n.phi2,n.phi1],D=N[0],P=N[1],l=function(t){var a=t[0],r=t[1],e=180*Math.atan2(r,a)/Math.PI;return e<D?e+360:e},v=0,E=intersectionUnitCircleLine(f,-y,0).map(l);v<E.length;v++)(G=E[v])>D&&G<P&&u(arcAt(n.cX,y,f,G));for(var A=0,d=intersectionUnitCircleLine(V,-S,0).map(l);A<d.length;A++){var G;(G=d[A])>D&&G<P&&c(arcAt(n.cY,S,V,G))}}return a});return h.minX=1/0,h.maxX=-1/0,h.minY=1/0,h.maxY=-1/0,h}}(SVGPathDataTransformer||(SVGPathDataTransformer={}));var _a,_a$1,TransformableSVG=function(){function t(){}return t.prototype.round=function(t){return this.transform(SVGPathDataTransformer.ROUND(t))},t.prototype.toAbs=function(){return this.transform(SVGPathDataTransformer.TO_ABS())},t.prototype.toRel=function(){return this.transform(SVGPathDataTransformer.TO_REL())},t.prototype.normalizeHVZ=function(t,a,r){return this.transform(SVGPathDataTransformer.NORMALIZE_HVZ(t,a,r))},t.prototype.normalizeST=function(){return this.transform(SVGPathDataTransformer.NORMALIZE_ST())},t.prototype.qtToC=function(){return this.transform(SVGPathDataTransformer.QT_TO_C())},t.prototype.aToC=function(){return this.transform(SVGPathDataTransformer.A_TO_C())},t.prototype.sanitize=function(t){return this.transform(SVGPathDataTransformer.SANITIZE(t))},t.prototype.translate=function(t,a){return this.transform(SVGPathDataTransformer.TRANSLATE(t,a))},t.prototype.scale=function(t,a){return this.transform(SVGPathDataTransformer.SCALE(t,a))},t.prototype.rotate=function(t,a,r){return this.transform(SVGPathDataTransformer.ROTATE(t,a,r))},t.prototype.matrix=function(t,a,r,e,n,i){return this.transform(SVGPathDataTransformer.MATRIX(t,a,r,e,n,i))},t.prototype.skewX=function(t){return this.transform(SVGPathDataTransformer.SKEW_X(t))},t.prototype.skewY=function(t){return this.transform(SVGPathDataTransformer.SKEW_Y(t))},t.prototype.xSymmetry=function(t){return this.transform(SVGPathDataTransformer.X_AXIS_SYMMETRY(t))},t.prototype.ySymmetry=function(t){return this.transform(SVGPathDataTransformer.Y_AXIS_SYMMETRY(t))},t.prototype.annotateArcs=function(){return this.transform(SVGPathDataTransformer.ANNOTATE_ARCS())},t}(),isWhiteSpace=function(t){return" "===t||"\t"===t||"\r"===t||"\n"===t},isDigit=function(t){return"0".charCodeAt(0)<=t.charCodeAt(0)&&t.charCodeAt(0)<="9".charCodeAt(0)},SVGPathDataParser$$1=function(t){function a(){var a=t.call(this)||this;return a.curNumber="",a.curCommandType=-1,a.curCommandRelative=!1,a.canParseCommandOrComma=!0,a.curNumberHasExp=!1,a.curNumberHasExpDigits=!1,a.curNumberHasDecimal=!1,a.curArgs=[],a}return __extends(a,t),a.prototype.finish=function(t){if(void 0===t&&(t=[]),this.parse(" ",t),0!==this.curArgs.length||!this.canParseCommandOrComma)throw new SyntaxError("Unterminated command at the path end.");return t},a.prototype.parse=function(t,a){var r=this;void 0===a&&(a=[]);for(var e=function(t){a.push(t),r.curArgs.length=0,r.canParseCommandOrComma=!0},n=0;n<t.length;n++){var i=t[n];if(isDigit(i))this.curNumber+=i,this.curNumberHasExpDigits=this.curNumberHasExp;else if("e"!==i&&"E"!==i)if("-"!==i&&"+"!==i||!this.curNumberHasExp||this.curNumberHasExpDigits)if("."!==i||this.curNumberHasExp||this.curNumberHasDecimal){if(this.curNumber&&-1!==this.curCommandType){var o=Number(this.curNumber);if(isNaN(o))throw new SyntaxError("Invalid number ending at "+n);if(this.curCommandType===SVGPathData.ARC)if(0===this.curArgs.length||1===this.curArgs.length){if(0>o)throw new SyntaxError('Expected positive number, got "'+o+'" at index "'+n+'"')}else if((3===this.curArgs.length||4===this.curArgs.length)&&"0"!==this.curNumber&&"1"!==this.curNumber)throw new SyntaxError('Expected a flag, got "'+this.curNumber+'" at index "'+n+'"');this.curArgs.push(o),this.curArgs.length===COMMAND_ARG_COUNTS[this.curCommandType]&&(SVGPathData.HORIZ_LINE_TO===this.curCommandType?e({type:SVGPathData.HORIZ_LINE_TO,relative:this.curCommandRelative,x:o}):SVGPathData.VERT_LINE_TO===this.curCommandType?e({type:SVGPathData.VERT_LINE_TO,relative:this.curCommandRelative,y:o}):this.curCommandType===SVGPathData.MOVE_TO||this.curCommandType===SVGPathData.LINE_TO||this.curCommandType===SVGPathData.SMOOTH_QUAD_TO?(e({type:this.curCommandType,relative:this.curCommandRelative,x:this.curArgs[0],y:this.curArgs[1]}),SVGPathData.MOVE_TO===this.curCommandType&&(this.curCommandType=SVGPathData.LINE_TO)):this.curCommandType===SVGPathData.CURVE_TO?e({type:SVGPathData.CURVE_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x2:this.curArgs[2],y2:this.curArgs[3],x:this.curArgs[4],y:this.curArgs[5]}):this.curCommandType===SVGPathData.SMOOTH_CURVE_TO?e({type:SVGPathData.SMOOTH_CURVE_TO,relative:this.curCommandRelative,x2:this.curArgs[0],y2:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===SVGPathData.QUAD_TO?e({type:SVGPathData.QUAD_TO,relative:this.curCommandRelative,x1:this.curArgs[0],y1:this.curArgs[1],x:this.curArgs[2],y:this.curArgs[3]}):this.curCommandType===SVGPathData.ARC&&e({type:SVGPathData.ARC,relative:this.curCommandRelative,rX:this.curArgs[0],rY:this.curArgs[1],xRot:this.curArgs[2],lArcFlag:this.curArgs[3],sweepFlag:this.curArgs[4],x:this.curArgs[5],y:this.curArgs[6]})),this.curNumber="",this.curNumberHasExpDigits=!1,this.curNumberHasExp=!1,this.curNumberHasDecimal=!1,this.canParseCommandOrComma=!0}if(!isWhiteSpace(i))if(","===i&&this.canParseCommandOrComma)this.canParseCommandOrComma=!1;else if("+"!==i&&"-"!==i&&"."!==i){if(0!==this.curArgs.length)throw new SyntaxError("Unterminated command at index "+n+".");if(!this.canParseCommandOrComma)throw new SyntaxError('Unexpected character "'+i+'" at index '+n+". Command cannot follow comma");if(this.canParseCommandOrComma=!1,"z"!==i&&"Z"!==i)if("h"===i||"H"===i)this.curCommandType=SVGPathData.HORIZ_LINE_TO,this.curCommandRelative="h"===i;else if("v"===i||"V"===i)this.curCommandType=SVGPathData.VERT_LINE_TO,this.curCommandRelative="v"===i;else if("m"===i||"M"===i)this.curCommandType=SVGPathData.MOVE_TO,this.curCommandRelative="m"===i;else if("l"===i||"L"===i)this.curCommandType=SVGPathData.LINE_TO,this.curCommandRelative="l"===i;else if("c"===i||"C"===i)this.curCommandType=SVGPathData.CURVE_TO,this.curCommandRelative="c"===i;else if("s"===i||"S"===i)this.curCommandType=SVGPathData.SMOOTH_CURVE_TO,this.curCommandRelative="s"===i;else if("q"===i||"Q"===i)this.curCommandType=SVGPathData.QUAD_TO,this.curCommandRelative="q"===i;else if("t"===i||"T"===i)this.curCommandType=SVGPathData.SMOOTH_QUAD_TO,this.curCommandRelative="t"===i;else{if("a"!==i&&"A"!==i)throw new SyntaxError('Unexpected character "'+i+'" at index '+n+".");this.curCommandType=SVGPathData.ARC,this.curCommandRelative="a"===i}else a.push({type:SVGPathData.CLOSE_PATH}),this.canParseCommandOrComma=!0,this.curCommandType=-1}else this.curNumber=i,this.curNumberHasDecimal="."===i}else this.curNumber+=i,this.curNumberHasDecimal=!0;else this.curNumber+=i;else this.curNumber+=i,this.curNumberHasExp=!0}return a},a.prototype.transform=function(t){return Object.create(this,{parse:{value:function(a,r){void 0===r&&(r=[]);for(var e=0,n=Object.getPrototypeOf(this).parse.call(this,a);e<n.length;e++){var i=n[e],o=t(i);Array.isArray(o)?r.push.apply(r,o):r.push(o)}return r}}})},a}(TransformableSVG),SVGPathData=function(t){function a(r){var e=t.call(this)||this;return e.commands="string"==typeof r?a.parse(r):r,e}return __extends(a,t),a.prototype.encode=function(){return a.encode(this.commands)},a.prototype.getBounds=function(){var t=SVGPathDataTransformer.CALCULATE_BOUNDS();return this.transform(t),t},a.prototype.transform=function(t){for(var a=[],r=0,e=this.commands;r<e.length;r++){var n=t(e[r]);Array.isArray(n)?a.push.apply(a,n):a.push(n)}return this.commands=a,this},a.encode=function(t){return encodeSVGPath$$1(t)},a.parse=function(t){var a=new SVGPathDataParser$$1,r=[];return a.parse(t,r),a.finish(r),r},a.CLOSE_PATH=1,a.MOVE_TO=2,a.HORIZ_LINE_TO=4,a.VERT_LINE_TO=8,a.LINE_TO=16,a.CURVE_TO=32,a.SMOOTH_CURVE_TO=64,a.QUAD_TO=128,a.SMOOTH_QUAD_TO=256,a.ARC=512,a.LINE_COMMANDS=a.LINE_TO|a.HORIZ_LINE_TO|a.VERT_LINE_TO,a.DRAWING_COMMANDS=a.HORIZ_LINE_TO|a.VERT_LINE_TO|a.LINE_TO|a.CURVE_TO|a.SMOOTH_CURVE_TO|a.QUAD_TO|a.SMOOTH_QUAD_TO|a.ARC,a}(TransformableSVG),COMMAND_ARG_COUNTS=((_a={})[SVGPathData.MOVE_TO]=2,_a[SVGPathData.LINE_TO]=2,_a[SVGPathData.HORIZ_LINE_TO]=1,_a[SVGPathData.VERT_LINE_TO]=1,_a[SVGPathData.CLOSE_PATH]=0,_a[SVGPathData.QUAD_TO]=4,_a[SVGPathData.SMOOTH_QUAD_TO]=2,_a[SVGPathData.CURVE_TO]=6,_a[SVGPathData.SMOOTH_CURVE_TO]=4,_a[SVGPathData.ARC]=7,_a),WSP=" ";function encodeSVGPath$$1(t){var a="";Array.isArray(t)||(t=[t]);for(var r=0;r<t.length;r++){var e=t[r];if(e.type===SVGPathData.CLOSE_PATH)a+="z";else if(e.type===SVGPathData.HORIZ_LINE_TO)a+=(e.relative?"h":"H")+e.x;else if(e.type===SVGPathData.VERT_LINE_TO)a+=(e.relative?"v":"V")+e.y;else if(e.type===SVGPathData.MOVE_TO)a+=(e.relative?"m":"M")+e.x+WSP+e.y;else if(e.type===SVGPathData.LINE_TO)a+=(e.relative?"l":"L")+e.x+WSP+e.y;else if(e.type===SVGPathData.CURVE_TO)a+=(e.relative?"c":"C")+e.x1+WSP+e.y1+WSP+e.x2+WSP+e.y2+WSP+e.x+WSP+e.y;else if(e.type===SVGPathData.SMOOTH_CURVE_TO)a+=(e.relative?"s":"S")+e.x2+WSP+e.y2+WSP+e.x+WSP+e.y;else if(e.type===SVGPathData.QUAD_TO)a+=(e.relative?"q":"Q")+e.x1+WSP+e.y1+WSP+e.x+WSP+e.y;else if(e.type===SVGPathData.SMOOTH_QUAD_TO)a+=(e.relative?"t":"T")+e.x+WSP+e.y;else{if(e.type!==SVGPathData.ARC)throw new Error('Unexpected command type "'+e.type+'" at index '+r+".");a+=(e.relative?"a":"A")+e.rX+WSP+e.rY+WSP+e.xRot+WSP+ +e.lArcFlag+WSP+ +e.sweepFlag+WSP+e.x+WSP+e.y}}return a}var SVGPathData$1=function(t){function a(r){var e=t.call(this)||this;return e.commands="string"==typeof r?a.parse(r):r,e}return __extends(a,t),a.prototype.encode=function(){return a.encode(this.commands)},a.prototype.getBounds=function(){var t=SVGPathDataTransformer.CALCULATE_BOUNDS();return this.transform(t),t},a.prototype.transform=function(t){for(var a=[],r=0,e=this.commands;r<e.length;r++){var n=t(e[r]);Array.isArray(n)?a.push.apply(a,n):a.push(n)}return this.commands=a,this},a.encode=function(t){return encodeSVGPath$$1(t)},a.parse=function(t){var a=new SVGPathDataParser$$1,r=[];return a.parse(t,r),a.finish(r),r},a.CLOSE_PATH=1,a.MOVE_TO=2,a.HORIZ_LINE_TO=4,a.VERT_LINE_TO=8,a.LINE_TO=16,a.CURVE_TO=32,a.SMOOTH_CURVE_TO=64,a.QUAD_TO=128,a.SMOOTH_QUAD_TO=256,a.ARC=512,a.LINE_COMMANDS=a.LINE_TO|a.HORIZ_LINE_TO|a.VERT_LINE_TO,a.DRAWING_COMMANDS=a.HORIZ_LINE_TO|a.VERT_LINE_TO|a.LINE_TO|a.CURVE_TO|a.SMOOTH_CURVE_TO|a.QUAD_TO|a.SMOOTH_QUAD_TO|a.ARC,a}(TransformableSVG),COMMAND_ARG_COUNTS$1=((_a$1={})[SVGPathData$1.MOVE_TO]=2,_a$1[SVGPathData$1.LINE_TO]=2,_a$1[SVGPathData$1.HORIZ_LINE_TO]=1,_a$1[SVGPathData$1.VERT_LINE_TO]=1,_a$1[SVGPathData$1.CLOSE_PATH]=0,_a$1[SVGPathData$1.QUAD_TO]=4,_a$1[SVGPathData$1.SMOOTH_QUAD_TO]=2,_a$1[SVGPathData$1.CURVE_TO]=6,_a$1[SVGPathData$1.SMOOTH_CURVE_TO]=4,_a$1[SVGPathData$1.ARC]=7,_a$1);
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


/***/ }),

/***/ "./sources-on-paths/js/entry.js":
/*!**************************************!*\
  !*** ./sources-on-paths/js/entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/SourcePatterns */ "./core/SourcePatterns.js");
/* harmony import */ var _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/VeinNode */ "./core/VeinNode.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_SVGLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/SVGLoader */ "./core/SVGLoader.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");








let canvas, ctx;
let network;

let currentPath;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Add the bounds, sources, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_6__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  setupPath();
  addRootVeins();
}

  let setupPath = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;

    currentPath = new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
      [
        [cx - 400, cy + 200],
        [cx + 400, cy + 200]
      ],
      'Bounds',
      ctx
    );
  }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
  }

  let movePath = () => {
    if(!network.settings.IsPaused) {
      currentPath.moveBy(0,-.5);
    }
  }

  let generateSourcesOnPath = () => {
    let sources = [];

    network.sources = sources;
  }

// Main program loop
let update = (timestamp) => {
  movePath();
  generateSourcesOnPath();

  network.update();
  network.draw();
  currentPath.draw();

  requestAnimationFrame(update);
}

// Key commands specific to this sketch
document.addEventListener('keypress', (e) => {
  switch(e.key) {
    // r = reset simulation by reinitializing the network with initial conditions
    case 'r':
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NvdXJjZVBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wb2ludC1pbi1wb2x5Z29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGV4LW5vaXNlL3NpbXBsZXgtbm9pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YS9saWIvU1ZHUGF0aERhdGEubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy90b1BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3ZhbGlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zb3VyY2VzLW9uLXBhdGhzL2pzL2VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWtDOztBQUVuQjtBQUNmLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLG9DQUFvQyxFQUFFLGlEQUFROztBQUU5QywrQkFB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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVSxFQUFFOztBQUVqRDtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN4ZEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNZO0FBQ3NDO0FBQ3BDO0FBQ1I7QUFDVTtBQUN1Qjs7QUFFcEU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IscURBQU87O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9GQUFpQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixrREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxRIiwiZmlsZSI6InNvdXJjZXNPblBhdGhzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlcy1vbi1wYXRocy9qcy9lbnRyeS5qc1wiKTtcbiIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1eGluU291cmNlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAgICAvLyB2ZWMyIG9mIHRoaXMgc291cmNlJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2luZ05vZGVzID0gW107ICAgLy8gcmVmZXJlbmNlcyB0byBub2RlcyB0aGlzIHNvdXJjZSBpcyBpbmZsdWVuY2luZyBlYWNoIGZyYW1lXHJcbiAgICB0aGlzLmZyZXNoID0gdHJ1ZTsgICAgICAgICAgICAvLyBmbGFnIHVzZWQgdG8gcHJldmVudCBzb3VyY2VzIGZyb20gYmVpbmcgcmVtb3ZlZCBkdXJpbmcgZmlyc3QgZnJhbWUgb2YgQ2xvc2VkIHZlbmF0aW9uIG1vZGVcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3Rpb25ab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBraWxsIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBhdXhpbiBzb3VyY2VcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuU291cmNlQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTGlnaHQgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgwLDAsMCwxKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgwLDI1NSwwLC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMCwwLDI1NSwxKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuNyknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjkpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYigyNDIsMjQyLDI0MiknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNiknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4zKScsXHJcbiAgLy8gQm91bmRzRmlsbENvbG9yOiAncmdiKDYxLDg1LDEzNiknLFxyXG4gIC8vIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDYxLDg1LDEzNiknXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiKDIxMCwgODEsIDk0KScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoMjEwLCA4MSwgOTQpJ1xyXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4vQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDMwLCAgICAgICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiB0cnVlLCAgICAgLy8gdHVybnMgb24vb2ZmIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICBFbmFibGVPcGFjaXR5R3JhZGllbnQ6IHRydWUsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93U291cmNlczogZmFsc2UsICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAncydcclxuICBTaG93VmVpbnM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndidcclxuICBTaG93VmVpblRpcHM6IGZhbHNlLCAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiB0cnVlLCAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiB0cnVlLCAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBWZWluUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgdmVpbiBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gQ29sb3JzXHJcbiAgQ29sb3JzOiBEYXJrLFxyXG5cclxuICAvLyBMaW5lIHRoaWNrbmVzc2VzXHJcbiAgVmVpblRoaWNrbmVzczogMS41LFxyXG4gIFZlaW5UaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAxXHJcbn0iLCJpbXBvcnQgeyBleHBvcnRTVkcgfSBmcm9tIFwiLi9VdGlsaXRpZXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAgIC8vIFNwYWNlID0gcGF1c2UvdW5wYXVzZVxyXG4gICAgICBjYXNlICcgJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB2ID0gdG9nZ2xlIHZlaW4gdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd2JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBzID0gdG9nZ2xlIGF1eGluIHNvdXJjZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlU291cmNlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3Rpb25ab25lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdCA9IHRvZ2dsZSB2ZWluIHRpcCB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3QnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpblRpcHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGsgPSB0b2dnbGUga2lsbCB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVJbmZsdWVuY2VMaW5lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYiA9IHRvZ2dsZSBib3VuZHMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gbyA9IHRvZ2dsZSBvYnN0YWNsZXMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdvJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9ic3RhY2xlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gZSA9IGV4cG9ydCBhbiBTVkcgZmlsZSBvZiBhbGwgdmlzaWJsZSBnZW9tZXRyeVxyXG4gICAgICBjYXNlICdlJzpcclxuICAgICAgICBleHBvcnRTVkcobmV0d29yayk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBjID0gdG9nZ2xlIGF1eGluIGZsdXggY2FuYWxpemF0aW9uXHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQ2FuYWxpemF0aW9uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTsgIC8vIHNvdXJjZXMgKEF1eGluU291cmNlcykgYXR0cmFjdCB2ZWluIG5vZGVzXHJcbiAgICB0aGlzLm5vZGVzID0gW107ICAgIC8vIG5vZGVzIChWZWluTm9kZXMpIGFyZSBjb25uZWN0ZWQgdG8gZm9ybSB2ZWluc1xyXG5cclxuICAgIHRoaXMubm9kZXNJbmRleDsgICAgLy8ga2QtYnVzaCBzcGF0aWFsIGluZGV4IGZvciBhbGwgbm9kZXNcclxuXHJcbiAgICB0aGlzLmJvdW5kcyA9IFtdO1xyXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggaXRzIGNsb3Nlc3QgdmVpbiBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKHNvdXJjZSwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIHNvdXJjZSdzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IG5laWdoYm9yaG9vZE5vZGVzO1xyXG5cclxuICAgICAgICAgIGlmKG5vZGVzVG9Hcm93Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgc291cmNlLmZyZXNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXNUb0dyb3cpIHtcclxuICAgICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyB2ZWluIG5vZGVzIG9udG8gYW55IG5vZGVzIGJlaW5nIGluZmx1ZW5jZWQgYnkgc291cmNlc1xyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gdGhpcy5nZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5vZGUuaW5mbHVlbmNlZEJ5Lm1hcChpZCA9PiB0aGlzLnNvdXJjZXNbaWRdKSk7XHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICAgICAgaWYodGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkICYmIHRoaXMuYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICAgICAgaWYoYm91bmQuY29udGFpbnMobmV4dE5vZGUucG9zaXRpb24ueCwgbmV4dE5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxyXG4gICAgICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE5PVEU6IGRpc2FibGluZyB0aGlzIGNoZWNrIGxldHMgdmVpbnMgZ3JvdyBhY3Jvc3MgZ2FwcyBpbiBib3VuZHMgLSBjb29sIGVmZmVjdCFcclxuICAgICAgICBpZihcclxuICAgICAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCB0aGlzLmJvdW5kcy5sZW5ndGggPT09IDApICYmXHJcbiAgICAgICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5leHROb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG5vZGUuaW5mbHVlbmNlZEJ5ID0gW107XHJcblxyXG4gICAgICAvLyBQZXJmb3JtIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICAgICAgaWYobm9kZS5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbikge1xyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gICAgICAgIHdoaWxlKGN1cnJlbnROb2RlLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBjaGlsZCB2ZWlucywgdXNlIHRoZSB0aGlja2VzdCBvZiB0aGVtIGFsbFxyXG4gICAgICAgICAgaWYoY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA8IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wNykge1xyXG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5wYXJlbnQudGhpY2tuZXNzID0gY3VycmVudE5vZGUudGhpY2tuZXNzICsgLjA3O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBhbnkgYXV4aW4gc291cmNlcyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgdmVpbiBub2Rlc1xyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2UgYXMgc29vbiBhcyBhbnkgdmVpbiBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5yZWFjaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCByZW1vdmUgdGhlIHNvdXJjZSBvbmx5IHdoZW4gYWxsIGFzc29jaWF0ZWQgdmVpbiBub2RlcyBoYXZlIHJlYWNoZWQgaXRcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgaWYoc291cmNlLmluZmx1ZW5jaW5nTm9kZXMubGVuZ3RoID4gMCAmJiAhc291cmNlLmZyZXNoKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxOb2Rlc1JlYWNoZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICAgICAgaWYobm9kZS5wb3NpdGlvbi5kaXN0YW5jZShzb3VyY2UucG9zaXRpb24pID4gdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGFsbE5vZGVzUmVhY2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoYWxsTm9kZXNSZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zb3VyY2VzLnNwbGljZShzb3VyY2VJRCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYnVpbGQgc3BhdGlhbCBpbmRpY2VzXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICB0aGlzLmRyYXdCb3VuZHMoKTtcclxuICAgIHRoaXMuZHJhd09ic3RhY2xlcygpO1xyXG4gICAgdGhpcy5kcmF3U291cmNlcygpO1xyXG4gICAgdGhpcy5kcmF3VmVpbnMoKTtcclxuICB9XHJcblxyXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xyXG4gICAgLy8gRXJhc2UgdGhlIGNhbnZhc1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3Qm91bmRzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgYm91bmQuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3T2JzdGFjbGVzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgb2JzdGFjbGUuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3VmVpbnMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3U291cmNlcygpIHtcclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2UuZHJhdygpO1xyXG5cclxuICAgICAgLy8gRHJhdyBsaW5lcyBiZXR3ZWVuIGVhY2ggc291cmNlIGFuZCB0aGUgbm9kZXMgdGhleSBhcmUgaW5mbHVlbmNpbmdcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXMgJiYgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgbm9kZSBvZiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oc291cmNlLnBvc2l0aW9uLngsIHNvdXJjZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkluZmx1ZW5jZUxpbmVzQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJlbGF0aXZlTmVpZ2hib3JOb2Rlcyhzb3VyY2UpIHtcclxuICAgIGxldCBmYWlsO1xyXG5cclxuICAgIGxldCBuZWFyYnlOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSk7XHJcbiAgICBsZXQgcmVsYXRpdmVOZWlnaGJvcnMgPSBbXTtcclxuICAgIGxldCBzb3VyY2VUb1AwLCBzb3VyY2VUb1AxLCBwMFRvUDE7XHJcblxyXG4gICAgLy8gcDAgaXMgYSByZWxhdGl2ZSBuZWlnaGJvciBvZiBhdXhpblBvcyBpZmZcclxuICAgIC8vIGZvciBhbnkgcG9pbnQgcDEgdGhhdCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiBpcyBwMCxcclxuICAgIC8vIHAwIGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIHRvIHAxXHJcbiAgICBmb3IobGV0IHAwIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGZhaWwgPSBmYWxzZTtcclxuICAgICAgc291cmNlVG9QMCA9IHAwLnBvc2l0aW9uLnN1YnRyYWN0KHNvdXJjZS5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICBmb3IobGV0IHAxIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgICAgaWYocDAgPT09IHAxKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNvdXJjZVRvUDEgPSBwMS5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AxLmxlbmd0aCgpID4gc291cmNlVG9QMC5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwMFRvUDEgPSBwMS5wb3NpdGlvbi5zdWJ0cmFjdChwMC5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKHNvdXJjZVRvUDAubGVuZ3RoKCkgPiBwMFRvUDEubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGZhaWwgPSB0cnVlO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighZmFpbCkge1xyXG4gICAgICAgIHJlbGF0aXZlTmVpZ2hib3JzLnB1c2gocDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlbGF0aXZlTmVpZ2hib3JzO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi54LFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRDbG9zZXN0Tm9kZShzb3VyY2UsIG5lYXJieU5vZGVzKSB7XHJcbiAgICBsZXQgY2xvc2VzdE5vZGUgPSBudWxsLFxyXG4gICAgICByZWNvcmQgPSB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZTtcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgbGV0IGRpc3RhbmNlID0gbm9kZS5wb3NpdGlvbi5kaXN0YW5jZShzb3VyY2UucG9zaXRpb24pO1xyXG5cclxuICAgICAgaWYoZGlzdGFuY2UgPCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xyXG4gICAgICAgIHNvdXJjZS5yZWFjaGVkID0gdHJ1ZTtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZihkaXN0YW5jZSA8IHJlY29yZCkge1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbm9kZTtcclxuICAgICAgICByZWNvcmQgPSBkaXN0YW5jZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG9zZXN0Tm9kZTtcclxuICB9XHJcblxyXG4gIGdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbmVhcmJ5U291cmNlcykge1xyXG4gICAgLy8gQWRkIHVwIG5vcm1hbGl6ZWQgdmVjdG9ycyBwb2ludGluZyB0byBlYWNoIGF1eGluIHNvdXJjZVxyXG4gICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSBuZXcgVmVjMigwLDApO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIG5lYXJieVNvdXJjZXMpIHtcclxuICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQoXHJcbiAgICAgICAgc291cmNlLnBvc2l0aW9uLnN1YnRyYWN0KG5vZGUucG9zaXRpb24sIHRydWUpLm5vcm1hbGl6ZSgpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHNtYWxsIGFtb3VudCBvZiByYW5kb20gXCJqaXR0ZXJcIiB0byBhdm9pZCBnZXR0aW5nIHN0dWNrIGJldHdlZW4gdHdvIGF1eGluIHNvdXJjZXMgYW5kIGVuZGxlc3NseSBnZW5lcmF0aW5nIG5vZGVzIGluIHRoZSBzYW1lIHBsYWNlXHJcbiAgICAvLyAoQ3JlZGl0IHRvIERhdmlkZSBQcmF0aSAoZWRhcCkgZm9yIHRoZSBpZGVhLCBzZWVuIGluIG9meFNwYWNlQ29sb25pemF0aW9uKVxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5hZGQobmV3IFZlYzIocmFuZG9tKC0uMSwgLjEpLCByYW5kb20oLS4xLCAuMSkpKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmRpdmlkZShub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGgpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIHJldHVybiBhdmVyYWdlRGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgYWRkVmVpbk5vZGUobm9kZSkge1xyXG4gICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCB2ZWlucyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBpZihib3VuZC5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKFxyXG4gICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcclxuICAgIHRoaXMubm9kZXNJbmRleCA9IG5ldyBLREJ1c2godGhpcy5ub2RlcywgcCA9PiBwLnBvc2l0aW9uLngsIHAgPT4gcC5wb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZlaW5zKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VmVpbnMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VmVpbnM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWluVGlwcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIW5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU291cmNlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93U291cmNlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3Rpb25ab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlS2lsbFpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJbmZsdWVuY2VMaW5lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm91bmRzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZU9ic3RhY2xlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyA9ICF0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVDYW5hbGl6YXRpb24oKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbiA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbjtcclxuXHJcbiAgICBpZighdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLnRoaWNrbmVzcyA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmxldCBpbnNpZGUgPSByZXF1aXJlKCdwb2ludC1pbi1wb2x5Z29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uLCB0eXBlLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBvbHlnb24gPSBwb2x5Z29uOyAgICAgLy8gYXJyYXkgb2YgYXJyYXlzIGNvbnRhaW5pbmcgY29vcmRpbmF0ZXMgZGVmaW5pbmcgYSBwb2x5Z29uIChbW3gwLHkwXSxbeDEseTFdLC4uLl0pXHJcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAgICAgICAgICAgLy8gc3RyaW5nIGVpdGhlciAnQm91bmRzJyBvciAnT2JzdGFjbGUnXHJcblxyXG4gICAgdGhpcy5vcmlnaW4gPSB7eDowLCB5OjB9OyAgIC8vIG9yaWdpbiBwb2ludCB1c2VkIGZvciB0cmFuc2xhdGlpb25cclxuICAgIHRoaXMuc2NhbGUgPSAxO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgY29vcmRpbmF0ZXMgYXJlIGluc2lkZSBwb2x5Z29uIGRlZmluZWQgYnkgdGhpcyBQYXRoXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIGluc2lkZShbeCwgeV0sIHRoaXMucG9seWdvbik7XHJcbiAgfVxyXG5cclxuICAvLyBSZWxhdGl2ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLm9yaWdpbi54ICs9IHg7XHJcbiAgICB0aGlzLm9yaWdpbi55ICs9IHk7XHJcbiAgfVxyXG5cclxuICAvLyBBYnNvbHV0ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICB0aGlzLm9yaWdpbi54ID0geDtcclxuICAgIHRoaXMub3JpZ2luLnkgPSB5O1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9seWdvblswXVswXSArIHRoaXMub3JpZ2luLngsIHRoaXMucG9seWdvblswXVsxXSArIHRoaXMub3JpZ2luLnkpO1xyXG5cclxuICAgIC8vIERyYXcgc2VxdWVudGlhbCBsaW5lcyB0byBhbGwgcG9pbnRzIG9mIHRoZSBwb2x5Z29uXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnBvbHlnb25baV1bMF0gKyB0aGlzLm9yaWdpbi54LCB0aGlzLnBvbHlnb25baV1bMV0gKyB0aGlzLm9yaWdpbi55KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IGxpbmUgYmFjayB0byBmaXJzdCBwb2ludCB0byBjbG9zZSB0aGUgcG9seWdvblxyXG4gICAgdGhpcy5jdHgubGluZVRvKHRoaXMucG9seWdvblswXVswXSArIHRoaXMub3JpZ2luLngsIHRoaXMucG9seWdvblswXVsxXSArIHRoaXMub3JpZ2luLnkpO1xyXG5cclxuICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcclxuICAgICAgY2FzZSAnQm91bmRzJzpcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0JvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuQm91bmRzQm9yZGVyVGhpY2tuZXNzO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0ZpbGxDb2xvcjtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdPYnN0YWNsZSc6XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuT2JzdGFjbGVGaWxsQ29sb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gIH1cclxufSIsImltcG9ydCB7U1ZHUGF0aERhdGF9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9zdmctcGF0aGRhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBsb2FkKHN2Z1N0cmluZykge1xyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIGxldCBzdmdOb2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJyk7XHJcblxyXG4gICAgbGV0IGlucHV0UGF0aHMgPSBzdmdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhdGgnKSxcclxuICAgICAgcGF0aHMgPSBbXTtcclxuXHJcbiAgICAvLyBTY3JhcGUgYWxsIHBvaW50cyBmcm9tIGFsbCBwYXRocywgYW5kIHJlY29yZCBicmVha3BvaW50c1xyXG4gICAgZm9yKGxldCBpbnB1dFBhdGggb2YgaW5wdXRQYXRocykge1xyXG4gICAgICBsZXQgcGF0aERhdGEgPSBuZXcgU1ZHUGF0aERhdGEoaW5wdXRQYXRoLmdldEF0dHJpYnV0ZSgnZCcpKSxcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c0Nvb3JkcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvcihsZXQgW2luZGV4LCBjb21tYW5kXSBvZiBwYXRoRGF0YS5jb21tYW5kcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2goY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAvLyBNb3ZlICgnTScpIGFuZCBsaW5lICgnTCcpIGNvbW1hbmRzIGhhdmUgYm90aCBYIGFuZCBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLk1PVkVfVE86XHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkxJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBIb3Jpem9udGFsIGxpbmUgKCdIJykgY29tbWFuZHMgb25seSBoYXZlIFgsIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIHByZXZpb3VzQ29vcmRzLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gVmVydGljYWwgbGluZSAoJ1YnKSBjb21tYW5kcyBvbmx5IGhhdmUgWSwgdXNpbmcgcHJldmlvdXMgY29tbWFuZCdzIFhcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbcHJldmlvdXNDb29yZHMueCwgY29tbWFuZC55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENsb3NlUGF0aCAoJ1onKSBjb21tYW5kcyBhcmUgYSBuYWl2ZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGN1cnJlbnQgcGF0aCBjYW4gYmUgcHJvY2Vzc2VkIGFuZCBhZGRlZCB0byB0aGUgd29ybGRcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSDpcclxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBwYXRoIGluIHJldHVybiBvYmplY3RcclxuICAgICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbmNsb3NlZCBwYXRocyBuZXZlciBoYXZlIENMT1NFX1BBVEggY29tbWFuZHMsIHNvIHdyYXAgdXAgdGhlIGN1cnJlbnQgcGF0aCB3aGVuIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGggYW5kIGhhdmUgbm90IGZvdW5kIHRoZSBjb21tYW5kXHJcbiAgICAgICAgaWYoaW5kZXggPT0gcGF0aERhdGEuY29tbWFuZHMubGVuZ3RoIC0gMSAmJiBjb21tYW5kLnR5cGUgIT0gU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCkge1xyXG4gICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFggY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3gnKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueCA9IGNvbW1hbmQueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhcHR1cmUgWSBjb29yZGluYXRlLCBpZiB0aGVyZSB3YXMgb25lXHJcbiAgICAgICAgaWYoY29tbWFuZC5oYXNPd25Qcm9wZXJ0eSgneScpKSB7XHJcbiAgICAgICAgICBwcmV2aW91c0Nvb3Jkcy55ID0gY29tbWFuZC55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4vQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tLCBtYXAgfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcbnZhciBTaW1wbGV4Tm9pc2UgPSByZXF1aXJlKCdzaW1wbGV4LW5vaXNlJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tU291cmNlcyhudW1Tb3VyY2VzLCBjdHgsIGJvdW5kcyA9IHVuZGVmaW5lZCwgb2JzdGFjbGVzID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICBsZXQgeCwgeTtcclxuICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMsIGlzSW5zaWRlQW55T2JzdGFjbGUsIGlzT25TY3JlZW47XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPG51bVNvdXJjZXM7IGkrKykge1xyXG4gICAgeCA9IHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICB5ID0gcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG4gICAgaXNPblNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgc291cmNlcyB0aGF0IGFyZSBpbiB0aGUgdmlld3BvcnRcclxuICAgIGlmKFxyXG4gICAgICB4ID4gMCAmJlxyXG4gICAgICB4IDwgd2luZG93LmlubmVyV2lkdGggJiZcclxuICAgICAgeSA+IDAgJiZcclxuICAgICAgeSA8IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIGlzT25TY3JlZW4gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCB2ZWlucyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgIGlmKGJvdW5kcyAhPSB1bmRlZmluZWQgJiYgYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBib3VuZHMpIHtcclxuICAgICAgICBpZihib3VuZC5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxyXG4gICAgaWYob2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiBvYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKHgsIHkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IGJvdW5kcyA9PT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgb2JzdGFjbGVzID09PSB1bmRlZmluZWQpXHJcbiAgICApIHtcclxuICAgICAgc291cmNlcy5wdXNoKFxyXG4gICAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgIG5ldyBWZWMyKHgseSksXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyaWRPZlNvdXJjZXMobnVtUm93cywgbnVtQ29sdW1ucywgY3R4LCBqaXR0ZXJSYW5nZSA9IDAsIGJvdW5kcyA9IHVuZGVmaW5lZCwgb2JzdGFjbGVzID0gdW5kZWZpbmVkKSB7XHJcbiAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICBsZXQgeCwgeTtcclxuICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMsIGlzSW5zaWRlQW55T2JzdGFjbGUsIGlzT25TY3JlZW47XHJcblxyXG4gIGZvcihsZXQgaT0wOyBpPD1udW1Sb3dzOyBpKyspIHtcclxuICAgIGZvcihsZXQgaj0wOyBqPD1udW1Db2x1bW5zOyBqKyspIHtcclxuICAgICAgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnMpICogaiArIHJhbmRvbSgtaml0dGVyUmFuZ2UsIGppdHRlclJhbmdlKTtcclxuICAgICAgeSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyBudW1Sb3dzKSAqIGkgKyByYW5kb20oLWppdHRlclJhbmdlLCBqaXR0ZXJSYW5nZSk7XHJcbiAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuICAgICAgaXNPblNjcmVlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgLy8gT25seSBhbGxvdyBzb3VyY2VzIHRoYXQgYXJlIGluIHRoZSB2aWV3cG9ydFxyXG4gICAgICBpZihcclxuICAgICAgICB4ID4gMCAmJlxyXG4gICAgICAgIHggPCB3aW5kb3cuaW5uZXJXaWR0aCAmJlxyXG4gICAgICAgIHkgPiAwICYmXHJcbiAgICAgICAgeSA8IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgICApIHtcclxuICAgICAgICBpc09uU2NyZWVuID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gT25seSBhbGxvdyBzb3VyY2VzIGluc2lkZSBvZiBhbnkgb2YgdGhlIGRlZmluZWQgYm91bmRzIChpZiB1c2VkKVxyXG4gICAgICBpZihib3VuZHMgIT0gdW5kZWZpbmVkICYmIGJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBib3VuZCBvZiBib3VuZHMpIHtcclxuICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKHgsIHkpKSB7XHJcbiAgICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERvbid0IGFsbG93IGFueSByb290IHZlaW5zIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZSAoaWYgdXNlZClcclxuICAgICAgaWYob2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiBvYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2Ygb2JzdGFjbGVzKSB7XHJcbiAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKFxyXG4gICAgICAgIGlzT25TY3JlZW4gJiZcclxuICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgYm91bmRzID09PSB1bmRlZmluZWQpICYmXHJcbiAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IG9ic3RhY2xlcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICApIHtcclxuICAgICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKHgseSksXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzb3VyY2VzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGh5bGxvdGF4aXNTb3VyY2VzKGN0eCkge1xyXG4gIGxldCBzb3VyY2VzID0gW107XHJcbiAgbGV0IG51bUNpcmNsZXMgPSA1MDAwLFxyXG4gIGdvbGRlbl9yYXRpbyA9IChNYXRoLnNxcnQoNSkrMSkvMiAtIDEsXHJcbiAgZ29sZGVuX2FuZ2xlID0gZ29sZGVuX3JhdGlvICogKDIqTWF0aC5QSSksXHJcbiAgY2lyY2xlX3JhZCA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcblxyXG5cclxuICBmb3IobGV0IGk9MDsgaTxudW1DaXJjbGVzOyBpKyspIHtcclxuICAgIGxldCByYXRpbyA9IGkgLyBudW1DaXJjbGVzLFxyXG4gICAgICBhbmdsZSA9IGkgKiBnb2xkZW5fYW5nbGUsXHJcbiAgICAgIHNwaXJhbF9yYWQgPSByYXRpbyAqIGNpcmNsZV9yYWQ7XHJcblxyXG4gICAgc291cmNlcy5wdXNoKFxyXG4gICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aC8yICsgTWF0aC5jb3MoYW5nbGUpICogc3BpcmFsX3JhZCxcclxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodC8yICsgTWF0aC5zaW4oYW5nbGUpICogc3BpcmFsX3JhZFxyXG4gICAgICAgICksXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdhdmVPZlNvdXJjZXMoY3R4KSB7XHJcbiAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICBsZXQgbnVtUm93cyA9IDcwO1xyXG4gIGxldCBudW1Db2x1bW5zID0gMTAwO1xyXG4gIGxldCByb3dTcGFjaW5nID0gd2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cztcclxuICBsZXQgY29sU3BhY2luZyA9IHdpbmRvdy5pbm5lcldpZHRoIC8gbnVtQ29sdW1ucztcclxuXHJcbiAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBudW1Sb3dzOyByb3crKykge1xyXG4gICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCBudW1Db2x1bW5zOyBjb2wrKykge1xyXG4gICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICAgIChjb2wgKiBjb2xTcGFjaW5nKSArIChNYXRoLnNpbihtYXAoY29sLCAwLCBudW1Db2x1bW5zLCAwLCBNYXRoLlBJICogMikpICogMjAwKSxcclxuICAgICAgICAgICAgKHJvdyAqIHJvd1NwYWNpbmcpICsgKE1hdGguc2luKG1hcChyb3csIDAsIG51bVJvd3MsIDAsIE1hdGguUEkgKiAyKSkgKiA1MClcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBzb3VyY2VzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlOb2lzZShzb3VyY2VzKSB7XHJcbiAgbGV0IG5vaXNlID0gbmV3IFNpbXBsZXhOb2lzZSgpO1xyXG5cclxuICBmb3IobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XHJcbiAgICBzb3VyY2UucG9zaXRpb24ueCArPSBub2lzZS5ub2lzZTJEKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSkgKiAxMDtcclxuICAgIHNvdXJjZS5wb3NpdGlvbi55ICs9IG5vaXNlLm5vaXNlMkQoc291cmNlLnBvc2l0aW9uLngsIHNvdXJjZS5wb3NpdGlvbi55KSAqIDEwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNvdXJjZXM7XHJcbn0iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgdG9QYXRoIH0gZnJvbSAnc3ZnLXBvaW50cyc7XHJcblxyXG4vLyByYW5kb20oKSwgc2ltaWxhciB0byBQcm9jZXNzaW5nJ3NcclxuLy8gSWYgdHdvIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCwgdGhleSBhcmUgaW50ZXJwcmV0ZWQgYXMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gb2YgdGhlIGRlc2lyZWQgcmFuZ2VcclxuLy8gSWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHBhc3NlZCwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIG1heGltdW0sIHdoaWxlIHplcm8gaXMgdXNlZCBhcyB0aGUgbWluaW11bVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXggPSBtaW47XHJcbiAgICBtaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBtaW4gIT09ICdudW1iZXInIHx8IHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgYXJndW1lbnRzIHRvIGJlIG51bWJlcnMnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgbnVtYmVyIGZyb20gb25lIHJhbmdlIHRvIGFub3RoZXJcclxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgb3JpZ2luYWxMb3dlciwgb3JpZ2luYWxVcHBlciwgbmV3TG93ZXIsIG5ld1VwcGVyKSB7XHJcbiAgcmV0dXJuIG5ld0xvd2VyICsgKG5ld1VwcGVyIC0gbmV3TG93ZXIpICogKCh2YWx1ZSAtIG9yaWdpbmFsTG93ZXIpIC8gKG9yaWdpbmFsVXBwZXIgLSBvcmlnaW5hbExvd2VyKSk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgcG9pbnQgY29vcmRpbmF0ZXMgKGFsc28gYXJyYXlzLCB3aXRoIHR3byBlbnRyaWVzKSBmb3IgcG9pbnRzIGFycmFuZ2VkIGluIGEgY2lyY2xlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjbGVPZlBvaW50cyhjeCwgY3ksIHJhZGl1cywgcmVzb2x1dGlvbikge1xyXG4gIGxldCBhbmdsZSwgeCwgeTtcclxuICBsZXQgcG9pbnRzID0gW107XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcclxuICAgIGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpIC8gcmVzb2x1dGlvbjtcclxuICAgIHggPSBjeCArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgIHkgPSBjeSArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICBwb2ludHMucHVzaChbeCwgeV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBvaW50cztcclxufVxyXG5cclxuLy8gQ3JlYXRlcyBhbiBTVkcgZG9jdW1lbnQgY29udGFpbmluZyBhbGwgb2YgdGhlIHZpc2libGUgZ2VvbWV0cnksIHRoZW4gcHVzaGVzIGl0IHRvIHRoZSBjbGllbnRcclxuLy8gLSBUcmlnZ2VyZWQgYnkgcHJlc3NpbmcgYGVgIGluIGFueSBza2V0Y2guIFNlZSBLZXlib2FyZEludGVyYWN0aW9ucy5qcyBmb3IgZGVmaW5pdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0U1ZHKG5ldHdvcmspIHtcclxuICAvLyBTZXQgdXAgPHN2Zz4gZWxlbWVudFxyXG4gIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zOnhsaW5rJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyB3aW5kb3cuaW5uZXJXaWR0aCArICcgJyArIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSA8bGluZT5zIGZvciBlYWNoIHZlaW4gc2VnbWVudFxyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd1ZlaW5zKSB7XHJcbiAgICBsZXQgbm9kZUxpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgbmV0d29yay5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGxpbmVOb2RlID0gYFxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnl9XCJcclxuICAgICAgICAgICAgeDI9XCIke25vZGUucG9zaXRpb24ueH1cIlxyXG4gICAgICAgICAgICB5Mj1cIiR7bm9kZS5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgbm9kZUxpbmVzR3JvdXAuaW5uZXJIVE1MICs9IGxpbmVOb2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmFwcGVuZENoaWxkKG5vZGVMaW5lc0dyb3VwKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSA8cGF0aD5zIGZvciBib3VuZHNcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCb3VuZHMpIHtcclxuICAgIGlmKG5ldHdvcmsuYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGJvdW5kc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIG5ldHdvcmsuYm91bmRzKSB7XHJcbiAgICAgICAgYm91bmRzR3JvdXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKGJvdW5kLnBvbHlnb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGJvdW5kc0dyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSA8cGF0aD5zIGZvciBvYnN0YWNsZXNcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dPYnN0YWNsZXMpIHtcclxuICAgIGlmKG5ldHdvcmsub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG9ic3RhY2xlc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG5ldHdvcmsub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgb2JzdGFjbGVzR3JvdXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKG9ic3RhY2xlLnBvbHlnb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3ZnLmFwcGVuZENoaWxkKG9ic3RhY2xlc0dyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXRlIHRoZSBkb2N1bWVudCBhcyBhIEJsb2IgYW5kIGZvcmNlIGEgZG93bmxvYWQgYXMgYSB0aW1lc3RhbXBlZCAuc3ZnIGZpbGVcclxuICBjb25zdCBzdmdEb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cIm5vXCI/Pic7XHJcbiAgY29uc3Qgc2VyaWFsaXplZFN2ZyA9IChuZXcgWE1MU2VyaWFsaXplcigpKS5zZXJpYWxpemVUb1N0cmluZyhzdmcpO1xyXG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc3ZnRG9jdHlwZSwgc2VyaWFsaXplZFN2Z10sIHsgdHlwZTogJ2ltYWdlL3N2Zyt4bWw7JyB9KVxyXG4gIHNhdmVBcyhibG9iLCAndmVuYXRpb24tJyArIERhdGUubm93KCkgKyAnLnN2ZycpO1xyXG59XHJcblxyXG4gIC8vIENyZWF0ZSBhIDxwYXRoPiBlbGVtZW50IHdpdGggYSBwcm9wZXJseS1mb3JtYXR0ZWQgYGRgIGF0dHJpYnV0ZSBjb250YWluaW5nIGFsbCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBhc3NlZCBwb2ludHNcclxuICBmdW5jdGlvbiBnZXRQYXRoRWxGcm9tUG9pbnRzKHBvaW50cykge1xyXG4gICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xyXG5cclxuICAgIGZvcihsZXQgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xyXG4gICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRbMF0gKyAnLCcgKyBwb2ludFsxXTtcclxuXHJcbiAgICAgIGlmKGluZGV4IDwgcG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBwb2ludHNTdHJpbmcgKz0gJyAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGNsb3NlcGF0aCBjb21tYW5kIHRvIGF1dG9tYXRpY2FsbHkgZHJhdyBsaW5lIGJhY2sgdG8gaW5pdGlhbCBwb2ludFxyXG4gICAgcG9pbnRzU3RyaW5nICs9ICcgJyArIHBvaW50c1swXVswXSArICcsJyArIHBvaW50c1swXVsxXTtcclxuXHJcbiAgICBsZXQgZCA9IHRvUGF0aCh7XHJcbiAgICAgIHR5cGU6ICdwb2x5bGluZScsXHJcbiAgICAgIHBvaW50czogcG9pbnRzU3RyaW5nXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGF0aEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdkJywgZCk7XHJcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWxsOiBub25lOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDEnKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aEVsO1xyXG4gIH0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWluTm9kZSB7XHJcbiAgY29uc3RydWN0b3IocGFyZW50LCBwb3NpdGlvbiwgaXNUaXAsIGN0eCwgc2V0dGluZ3MsIGNvbG9yID0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDsgICAgICAgLy8gcmVmZXJlbmNlIHRvIHBhcmVudCBub2RlLCBuZWNlc3NhcnkgZm9yIHZlaW4gdGhpY2tlbmluZyBsYXRlclxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAgIC8vIHt2ZWMyfSBvZiB0aGlzIG5vZGUncyBwb3NpdGlvblxyXG4gICAgdGhpcy5pc1RpcCA9IGlzVGlwOyAgICAgICAgIC8vIHtib29sZWFufVxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dCBmb3IgZHJhd2luZ1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7ICAgICAgICAgLy8gY29sb3IsIHVzdWFsbHkgcGFzc2VkIGRvd24gZnJvbSBwYXJlbnRcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdOyAgICAgLy8gcmVmZXJlbmNlcyB0byBhbGwgQXV4aW5Tb3VyY2VzIGluZmx1ZW5jaW5nIHRoaXMgbm9kZSBlYWNoIGZyYW1lXHJcbiAgICB0aGlzLnRoaWNrbmVzcyA9IDA7ICAgICAgICAgLy8gdGhpY2tuZXNzIC0gdGhpcyBpcyBpbmNyZWFzZWQgZHVyaW5nIHZlaW4gdGhpY2tlbmluZyBwcm9jZXNzXHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgaWYodGhpcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAvLyBTbW9vdGhseSByYW1wIHVwIG9wYWNpdHkgYmFzZWQgb24gdmVpbiB0aGlja25lc3NcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5R3JhZGllbnQpIHtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMudGhpY2tuZXNzIC8gMyArIC4yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBcIkxpbmVzXCIgcmVuZGVyIG1vZGVcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5WZWluVGlwVGhpY2tuZXNzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZih0aGlzLmNvbG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5Db2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlZlaW5UaGlja25lc3MgKyB0aGlzLnRoaWNrbmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICAvLyBcIkRvdHNcIiByZW5kZXIgbW9kZVxyXG4gICAgICB9IGVsc2UgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgMSArIHRoaXMudGhpY2tuZXNzIC8gMixcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIE1hdGguUEkgKiAyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIGNvbG9yIG9yIFwidGlwXCIgbm9kZXNcclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluVGlwQ29sb3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5Db2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVzZXQgZ2xvYmFsIG9wYWNpdHkgaWYgaXQgd2FzIGNoYW5nZWQgZHVlIHRvIG9wYWNpdHkgZ3JhZGllbnQgZmxhZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlHcmFkaWVudCkge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHByb3ZpZGVkIGRpcmVjdGlvbiBhbmQgYSBwcmUtZGVmaW5lZCBkaXN0YW5jZSAoU2VnbWVudExlbmd0aClcclxuICBnZXROZXh0Tm9kZShhdmVyYWdlU291cmNlRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWluTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLFxyXG4gICAgICB0aGlzLmNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxufSIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhiLGMsZCl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGIpLGUucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGUub25sb2FkPWZ1bmN0aW9uKCl7YShlLnJlc3BvbnNlLGMsZCl9LGUub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZS5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYSxiLGQsZSl7aWYoZT1lfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZSYmKGUuZG9jdW1lbnQudGl0bGU9ZS5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiBjKGEsYixkKTt2YXIgZz1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09YS50eXBlLGg9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaT0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGl8fGcmJmgpJiZcIm9iamVjdFwiPT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGo9bmV3IEZpbGVSZWFkZXI7ai5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1qLnJlc3VsdDthPWk/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZT9lLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGU9bnVsbH0sai5yZWFkQXNEYXRhVVJMKGEpfWVsc2V7dmFyIGs9Zi5VUkx8fGYud2Via2l0VVJMLGw9ay5jcmVhdGVPYmplY3RVUkwoYSk7ZT9lLmxvY2F0aW9uPWw6bG9jYXRpb24uaHJlZj1sLGU9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5yZXZva2VPYmplY3RVUkwobCl9LDRFNCl9fSk7Zi5zYXZlQXM9YS5zYXZlQXM9YSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9YSl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJcbmltcG9ydCBzb3J0IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgd2l0aGluIGZyb20gJy4vd2l0aGluJztcblxuY29uc3QgZGVmYXVsdEdldFggPSBwID0+IHBbMF07XG5jb25zdCBkZWZhdWx0R2V0WSA9IHAgPT4gcFsxXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS0RCdXNoIHtcbiAgICBjb25zdHJ1Y3Rvcihwb2ludHMsIGdldFggPSBkZWZhdWx0R2V0WCwgZ2V0WSA9IGRlZmF1bHRHZXRZLCBub2RlU2l6ZSA9IDY0LCBBcnJheVR5cGUgPSBGbG9hdDY0QXJyYXkpIHtcbiAgICAgICAgdGhpcy5ub2RlU2l6ZSA9IG5vZGVTaXplO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgICAgICBjb25zdCBJbmRleEFycmF5VHlwZSA9IHBvaW50cy5sZW5ndGggPCA2NTUzNiA/IFVpbnQxNkFycmF5IDogVWludDMyQXJyYXk7XG5cbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5pZHMgPSBuZXcgSW5kZXhBcnJheVR5cGUocG9pbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuY29vcmRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoICogMik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkc1tpXSA9IGk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGldID0gZ2V0WChwb2ludHNbaV0pO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0KGlkcywgY29vcmRzLCBub2RlU2l6ZSwgMCwgaWRzLmxlbmd0aCAtIDEsIDApO1xuICAgIH1cblxuICAgIHJhbmdlKG1pblgsIG1pblksIG1heFgsIG1heFkpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxuXG4gICAgd2l0aGluKHgsIHksIHIpIHtcbiAgICAgICAgcmV0dXJuIHdpdGhpbih0aGlzLmlkcywgdGhpcy5jb29yZHMsIHgsIHksIHIsIHRoaXMubm9kZVNpemUpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2UoaWRzLCBjb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCB4LCB5O1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1syICogaV07XG4gICAgICAgICAgICAgICAgeSA9IGNvb3Jkc1syICogaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCByaWdodCwgZGVwdGgpIHtcbiAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSByZXR1cm47XG5cbiAgICBjb25zdCBtID0gKGxlZnQgKyByaWdodCkgPj4gMTtcblxuICAgIHNlbGVjdChpZHMsIGNvb3JkcywgbSwgbGVmdCwgcmlnaHQsIGRlcHRoICUgMik7XG5cbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCBtIC0gMSwgZGVwdGggKyAxKTtcbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBtICsgMSwgcmlnaHQsIGRlcHRoICsgMSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbGVmdCwgcmlnaHQsIGluYykge1xuXG4gICAgd2hpbGUgKHJpZ2h0ID4gbGVmdCkge1xuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0ID4gNjAwKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCB6ID0gTWF0aC5sb2cobik7XG4gICAgICAgICAgICBjb25zdCBzID0gMC41ICogTWF0aC5leHAoMiAqIHogLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgY29uc3QgbmV3TGVmdCA9IE1hdGgubWF4KGxlZnQsIE1hdGguZmxvb3IoayAtIG0gKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdSaWdodCA9IE1hdGgubWluKHJpZ2h0LCBNYXRoLmZsb29yKGsgKyAobiAtIG0pICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgc2VsZWN0KGlkcywgY29vcmRzLCBrLCBuZXdMZWZ0LCBuZXdSaWdodCwgaW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICBsZXQgaSA9IGxlZnQ7XG4gICAgICAgIGxldCBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgY29uc3QgdG1wID0gYXJyW2ldO1xuICAgIGFycltpXSA9IGFycltqXTtcbiAgICBhcnJbal0gPSB0bXA7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihpZHMsIGNvb3JkcywgcXgsIHF5LCByLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCByMiA9IHIgKiByO1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNxRGlzdChjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICBjb25zdCB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmIChzcURpc3QoeCwgeSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCBkeCA9IGF4IC0gYng7XG4gICAgY29uc3QgZHkgPSBheSAtIGJ5O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBvaW50LCB2cykge1xuICAgIC8vIHJheS1jYXN0aW5nIGFsZ29yaXRobSBiYXNlZCBvblxuICAgIC8vIGh0dHA6Ly93d3cuZWNzZS5ycGkuZWR1L0hvbWVwYWdlcy93cmYvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcbiAgICBcbiAgICB2YXIgeCA9IHBvaW50WzBdLCB5ID0gcG9pbnRbMV07XG4gICAgXG4gICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdnMubGVuZ3RoIC0gMTsgaSA8IHZzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgICB2YXIgeGkgPSB2c1tpXVswXSwgeWkgPSB2c1tpXVsxXTtcbiAgICAgICAgdmFyIHhqID0gdnNbal1bMF0sIHlqID0gdnNbal1bMV07XG4gICAgICAgIFxuICAgICAgICB2YXIgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9ICh5aiA+IHkpKVxuICAgICAgICAgICAgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcbiAgICAgICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGluc2lkZTtcbn07XG4iLCIvKlxuICogQSBmYXN0IGphdmFzY3JpcHQgaW1wbGVtZW50YXRpb24gb2Ygc2ltcGxleCBub2lzZSBieSBKb25hcyBXYWduZXJcblxuQmFzZWQgb24gYSBzcGVlZC1pbXByb3ZlZCBzaW1wbGV4IG5vaXNlIGFsZ29yaXRobSBmb3IgMkQsIDNEIGFuZCA0RCBpbiBKYXZhLlxuV2hpY2ggaXMgYmFzZWQgb24gZXhhbXBsZSBjb2RlIGJ5IFN0ZWZhbiBHdXN0YXZzb24gKHN0ZWd1QGl0bi5saXUuc2UpLlxuV2l0aCBPcHRpbWlzYXRpb25zIGJ5IFBldGVyIEVhc3RtYW4gKHBlYXN0bWFuQGRyaXp6bGUuc3RhbmZvcmQuZWR1KS5cbkJldHRlciByYW5rIG9yZGVyaW5nIG1ldGhvZCBieSBTdGVmYW4gR3VzdGF2c29uIGluIDIwMTIuXG5cblxuIENvcHlyaWdodCAoYykgMjAxOCBKb25hcyBXYWduZXJcblxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuIFNPRlRXQVJFLlxuICovXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgRjIgPSAwLjUgKiAoTWF0aC5zcXJ0KDMuMCkgLSAxLjApO1xuICB2YXIgRzIgPSAoMy4wIC0gTWF0aC5zcXJ0KDMuMCkpIC8gNi4wO1xuICB2YXIgRjMgPSAxLjAgLyAzLjA7XG4gIHZhciBHMyA9IDEuMCAvIDYuMDtcbiAgdmFyIEY0ID0gKE1hdGguc3FydCg1LjApIC0gMS4wKSAvIDQuMDtcbiAgdmFyIEc0ID0gKDUuMCAtIE1hdGguc3FydCg1LjApKSAvIDIwLjA7XG5cbiAgZnVuY3Rpb24gU2ltcGxleE5vaXNlKHJhbmRvbU9yU2VlZCkge1xuICAgIHZhciByYW5kb207XG4gICAgaWYgKHR5cGVvZiByYW5kb21PclNlZWQgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmFuZG9tID0gcmFuZG9tT3JTZWVkO1xuICAgIH1cbiAgICBlbHNlIGlmIChyYW5kb21PclNlZWQpIHtcbiAgICAgIHJhbmRvbSA9IGFsZWEocmFuZG9tT3JTZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZG9tID0gTWF0aC5yYW5kb207XG4gICAgfVxuICAgIHRoaXMucCA9IGJ1aWxkUGVybXV0YXRpb25UYWJsZShyYW5kb20pO1xuICAgIHRoaXMucGVybSA9IG5ldyBVaW50OEFycmF5KDUxMik7XG4gICAgdGhpcy5wZXJtTW9kMTIgPSBuZXcgVWludDhBcnJheSg1MTIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTEyOyBpKyspIHtcbiAgICAgIHRoaXMucGVybVtpXSA9IHRoaXMucFtpICYgMjU1XTtcbiAgICAgIHRoaXMucGVybU1vZDEyW2ldID0gdGhpcy5wZXJtW2ldICUgMTI7XG4gICAgfVxuXG4gIH1cbiAgU2ltcGxleE5vaXNlLnByb3RvdHlwZSA9IHtcbiAgICBncmFkMzogbmV3IEZsb2F0MzJBcnJheShbMSwgMSwgMCxcbiAgICAgIC0xLCAxLCAwLFxuICAgICAgMSwgLTEsIDAsXG5cbiAgICAgIC0xLCAtMSwgMCxcbiAgICAgIDEsIDAsIDEsXG4gICAgICAtMSwgMCwgMSxcblxuICAgICAgMSwgMCwgLTEsXG4gICAgICAtMSwgMCwgLTEsXG4gICAgICAwLCAxLCAxLFxuXG4gICAgICAwLCAtMSwgMSxcbiAgICAgIDAsIDEsIC0xLFxuICAgICAgMCwgLTEsIC0xXSksXG4gICAgZ3JhZDQ6IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDEsIDEsIDEsIDAsIDEsIDEsIC0xLCAwLCAxLCAtMSwgMSwgMCwgMSwgLTEsIC0xLFxuICAgICAgMCwgLTEsIDEsIDEsIDAsIC0xLCAxLCAtMSwgMCwgLTEsIC0xLCAxLCAwLCAtMSwgLTEsIC0xLFxuICAgICAgMSwgMCwgMSwgMSwgMSwgMCwgMSwgLTEsIDEsIDAsIC0xLCAxLCAxLCAwLCAtMSwgLTEsXG4gICAgICAtMSwgMCwgMSwgMSwgLTEsIDAsIDEsIC0xLCAtMSwgMCwgLTEsIDEsIC0xLCAwLCAtMSwgLTEsXG4gICAgICAxLCAxLCAwLCAxLCAxLCAxLCAwLCAtMSwgMSwgLTEsIDAsIDEsIDEsIC0xLCAwLCAtMSxcbiAgICAgIC0xLCAxLCAwLCAxLCAtMSwgMSwgMCwgLTEsIC0xLCAtMSwgMCwgMSwgLTEsIC0xLCAwLCAtMSxcbiAgICAgIDEsIDEsIDEsIDAsIDEsIDEsIC0xLCAwLCAxLCAtMSwgMSwgMCwgMSwgLTEsIC0xLCAwLFxuICAgICAgLTEsIDEsIDEsIDAsIC0xLCAxLCAtMSwgMCwgLTEsIC0xLCAxLCAwLCAtMSwgLTEsIC0xLCAwXSksXG4gICAgbm9pc2UyRDogZnVuY3Rpb24oeGluLCB5aW4pIHtcbiAgICAgIHZhciBwZXJtTW9kMTIgPSB0aGlzLnBlcm1Nb2QxMjtcbiAgICAgIHZhciBwZXJtID0gdGhpcy5wZXJtO1xuICAgICAgdmFyIGdyYWQzID0gdGhpcy5ncmFkMztcbiAgICAgIHZhciBuMCA9IDA7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgdGhyZWUgY29ybmVyc1xuICAgICAgdmFyIG4xID0gMDtcbiAgICAgIHZhciBuMiA9IDA7XG4gICAgICAvLyBTa2V3IHRoZSBpbnB1dCBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggc2ltcGxleCBjZWxsIHdlJ3JlIGluXG4gICAgICB2YXIgcyA9ICh4aW4gKyB5aW4pICogRjI7IC8vIEhhaXJ5IGZhY3RvciBmb3IgMkRcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcih4aW4gKyBzKTtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcih5aW4gKyBzKTtcbiAgICAgIHZhciB0ID0gKGkgKyBqKSAqIEcyO1xuICAgICAgdmFyIFgwID0gaSAtIHQ7IC8vIFVuc2tldyB0aGUgY2VsbCBvcmlnaW4gYmFjayB0byAoeCx5KSBzcGFjZVxuICAgICAgdmFyIFkwID0gaiAtIHQ7XG4gICAgICB2YXIgeDAgPSB4aW4gLSBYMDsgLy8gVGhlIHgseSBkaXN0YW5jZXMgZnJvbSB0aGUgY2VsbCBvcmlnaW5cbiAgICAgIHZhciB5MCA9IHlpbiAtIFkwO1xuICAgICAgLy8gRm9yIHRoZSAyRCBjYXNlLCB0aGUgc2ltcGxleCBzaGFwZSBpcyBhbiBlcXVpbGF0ZXJhbCB0cmlhbmdsZS5cbiAgICAgIC8vIERldGVybWluZSB3aGljaCBzaW1wbGV4IHdlIGFyZSBpbi5cbiAgICAgIHZhciBpMSwgajE7IC8vIE9mZnNldHMgZm9yIHNlY29uZCAobWlkZGxlKSBjb3JuZXIgb2Ygc2ltcGxleCBpbiAoaSxqKSBjb29yZHNcbiAgICAgIGlmICh4MCA+IHkwKSB7XG4gICAgICAgIGkxID0gMTtcbiAgICAgICAgajEgPSAwO1xuICAgICAgfSAvLyBsb3dlciB0cmlhbmdsZSwgWFkgb3JkZXI6ICgwLDApLT4oMSwwKS0+KDEsMSlcbiAgICAgIGVsc2Uge1xuICAgICAgICBpMSA9IDA7XG4gICAgICAgIGoxID0gMTtcbiAgICAgIH0gLy8gdXBwZXIgdHJpYW5nbGUsIFlYIG9yZGVyOiAoMCwwKS0+KDAsMSktPigxLDEpXG4gICAgICAvLyBBIHN0ZXAgb2YgKDEsMCkgaW4gKGksaikgbWVhbnMgYSBzdGVwIG9mICgxLWMsLWMpIGluICh4LHkpLCBhbmRcbiAgICAgIC8vIGEgc3RlcCBvZiAoMCwxKSBpbiAoaSxqKSBtZWFucyBhIHN0ZXAgb2YgKC1jLDEtYykgaW4gKHgseSksIHdoZXJlXG4gICAgICAvLyBjID0gKDMtc3FydCgzKSkvNlxuICAgICAgdmFyIHgxID0geDAgLSBpMSArIEcyOyAvLyBPZmZzZXRzIGZvciBtaWRkbGUgY29ybmVyIGluICh4LHkpIHVuc2tld2VkIGNvb3Jkc1xuICAgICAgdmFyIHkxID0geTAgLSBqMSArIEcyO1xuICAgICAgdmFyIHgyID0geDAgLSAxLjAgKyAyLjAgKiBHMjsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSkgdW5za2V3ZWQgY29vcmRzXG4gICAgICB2YXIgeTIgPSB5MCAtIDEuMCArIDIuMCAqIEcyO1xuICAgICAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSB0aHJlZSBzaW1wbGV4IGNvcm5lcnNcbiAgICAgIHZhciBpaSA9IGkgJiAyNTU7XG4gICAgICB2YXIgamogPSBqICYgMjU1O1xuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBjb250cmlidXRpb24gZnJvbSB0aGUgdGhyZWUgY29ybmVyc1xuICAgICAgdmFyIHQwID0gMC41IC0geDAgKiB4MCAtIHkwICogeTA7XG4gICAgICBpZiAodDAgPj0gMCkge1xuICAgICAgICB2YXIgZ2kwID0gcGVybU1vZDEyW2lpICsgcGVybVtqal1dICogMztcbiAgICAgICAgdDAgKj0gdDA7XG4gICAgICAgIG4wID0gdDAgKiB0MCAqIChncmFkM1tnaTBdICogeDAgKyBncmFkM1tnaTAgKyAxXSAqIHkwKTsgLy8gKHgseSkgb2YgZ3JhZDMgdXNlZCBmb3IgMkQgZ3JhZGllbnRcbiAgICAgIH1cbiAgICAgIHZhciB0MSA9IDAuNSAtIHgxICogeDEgLSB5MSAqIHkxO1xuICAgICAgaWYgKHQxID49IDApIHtcbiAgICAgICAgdmFyIGdpMSA9IHBlcm1Nb2QxMltpaSArIGkxICsgcGVybVtqaiArIGoxXV0gKiAzO1xuICAgICAgICB0MSAqPSB0MTtcbiAgICAgICAgbjEgPSB0MSAqIHQxICogKGdyYWQzW2dpMV0gKiB4MSArIGdyYWQzW2dpMSArIDFdICogeTEpO1xuICAgICAgfVxuICAgICAgdmFyIHQyID0gMC41IC0geDIgKiB4MiAtIHkyICogeTI7XG4gICAgICBpZiAodDIgPj0gMCkge1xuICAgICAgICB2YXIgZ2kyID0gcGVybU1vZDEyW2lpICsgMSArIHBlcm1bamogKyAxXV0gKiAzO1xuICAgICAgICB0MiAqPSB0MjtcbiAgICAgICAgbjIgPSB0MiAqIHQyICogKGdyYWQzW2dpMl0gKiB4MiArIGdyYWQzW2dpMiArIDFdICogeTIpO1xuICAgICAgfVxuICAgICAgLy8gQWRkIGNvbnRyaWJ1dGlvbnMgZnJvbSBlYWNoIGNvcm5lciB0byBnZXQgdGhlIGZpbmFsIG5vaXNlIHZhbHVlLlxuICAgICAgLy8gVGhlIHJlc3VsdCBpcyBzY2FsZWQgdG8gcmV0dXJuIHZhbHVlcyBpbiB0aGUgaW50ZXJ2YWwgWy0xLDFdLlxuICAgICAgcmV0dXJuIDcwLjAgKiAobjAgKyBuMSArIG4yKTtcbiAgICB9LFxuICAgIC8vIDNEIHNpbXBsZXggbm9pc2VcbiAgICBub2lzZTNEOiBmdW5jdGlvbih4aW4sIHlpbiwgemluKSB7XG4gICAgICB2YXIgcGVybU1vZDEyID0gdGhpcy5wZXJtTW9kMTI7XG4gICAgICB2YXIgcGVybSA9IHRoaXMucGVybTtcbiAgICAgIHZhciBncmFkMyA9IHRoaXMuZ3JhZDM7XG4gICAgICB2YXIgbjAsIG4xLCBuMiwgbjM7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgZm91ciBjb3JuZXJzXG4gICAgICAvLyBTa2V3IHRoZSBpbnB1dCBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggc2ltcGxleCBjZWxsIHdlJ3JlIGluXG4gICAgICB2YXIgcyA9ICh4aW4gKyB5aW4gKyB6aW4pICogRjM7IC8vIFZlcnkgbmljZSBhbmQgc2ltcGxlIHNrZXcgZmFjdG9yIGZvciAzRFxuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKHhpbiArIHMpO1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKHlpbiArIHMpO1xuICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKHppbiArIHMpO1xuICAgICAgdmFyIHQgPSAoaSArIGogKyBrKSAqIEczO1xuICAgICAgdmFyIFgwID0gaSAtIHQ7IC8vIFVuc2tldyB0aGUgY2VsbCBvcmlnaW4gYmFjayB0byAoeCx5LHopIHNwYWNlXG4gICAgICB2YXIgWTAgPSBqIC0gdDtcbiAgICAgIHZhciBaMCA9IGsgLSB0O1xuICAgICAgdmFyIHgwID0geGluIC0gWDA7IC8vIFRoZSB4LHkseiBkaXN0YW5jZXMgZnJvbSB0aGUgY2VsbCBvcmlnaW5cbiAgICAgIHZhciB5MCA9IHlpbiAtIFkwO1xuICAgICAgdmFyIHowID0gemluIC0gWjA7XG4gICAgICAvLyBGb3IgdGhlIDNEIGNhc2UsIHRoZSBzaW1wbGV4IHNoYXBlIGlzIGEgc2xpZ2h0bHkgaXJyZWd1bGFyIHRldHJhaGVkcm9uLlxuICAgICAgLy8gRGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggd2UgYXJlIGluLlxuICAgICAgdmFyIGkxLCBqMSwgazE7IC8vIE9mZnNldHMgZm9yIHNlY29uZCBjb3JuZXIgb2Ygc2ltcGxleCBpbiAoaSxqLGspIGNvb3Jkc1xuICAgICAgdmFyIGkyLCBqMiwgazI7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBvZiBzaW1wbGV4IGluIChpLGosaykgY29vcmRzXG4gICAgICBpZiAoeDAgPj0geTApIHtcbiAgICAgICAgaWYgKHkwID49IHowKSB7XG4gICAgICAgICAgaTEgPSAxO1xuICAgICAgICAgIGoxID0gMDtcbiAgICAgICAgICBrMSA9IDA7XG4gICAgICAgICAgaTIgPSAxO1xuICAgICAgICAgIGoyID0gMTtcbiAgICAgICAgICBrMiA9IDA7XG4gICAgICAgIH0gLy8gWCBZIFogb3JkZXJcbiAgICAgICAgZWxzZSBpZiAoeDAgPj0gejApIHtcbiAgICAgICAgICBpMSA9IDE7XG4gICAgICAgICAgajEgPSAwO1xuICAgICAgICAgIGsxID0gMDtcbiAgICAgICAgICBpMiA9IDE7XG4gICAgICAgICAgajIgPSAwO1xuICAgICAgICAgIGsyID0gMTtcbiAgICAgICAgfSAvLyBYIFogWSBvcmRlclxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpMSA9IDA7XG4gICAgICAgICAgajEgPSAwO1xuICAgICAgICAgIGsxID0gMTtcbiAgICAgICAgICBpMiA9IDE7XG4gICAgICAgICAgajIgPSAwO1xuICAgICAgICAgIGsyID0gMTtcbiAgICAgICAgfSAvLyBaIFggWSBvcmRlclxuICAgICAgfVxuICAgICAgZWxzZSB7IC8vIHgwPHkwXG4gICAgICAgIGlmICh5MCA8IHowKSB7XG4gICAgICAgICAgaTEgPSAwO1xuICAgICAgICAgIGoxID0gMDtcbiAgICAgICAgICBrMSA9IDE7XG4gICAgICAgICAgaTIgPSAwO1xuICAgICAgICAgIGoyID0gMTtcbiAgICAgICAgICBrMiA9IDE7XG4gICAgICAgIH0gLy8gWiBZIFggb3JkZXJcbiAgICAgICAgZWxzZSBpZiAoeDAgPCB6MCkge1xuICAgICAgICAgIGkxID0gMDtcbiAgICAgICAgICBqMSA9IDE7XG4gICAgICAgICAgazEgPSAwO1xuICAgICAgICAgIGkyID0gMDtcbiAgICAgICAgICBqMiA9IDE7XG4gICAgICAgICAgazIgPSAxO1xuICAgICAgICB9IC8vIFkgWiBYIG9yZGVyXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGkxID0gMDtcbiAgICAgICAgICBqMSA9IDE7XG4gICAgICAgICAgazEgPSAwO1xuICAgICAgICAgIGkyID0gMTtcbiAgICAgICAgICBqMiA9IDE7XG4gICAgICAgICAgazIgPSAwO1xuICAgICAgICB9IC8vIFkgWCBaIG9yZGVyXG4gICAgICB9XG4gICAgICAvLyBBIHN0ZXAgb2YgKDEsMCwwKSBpbiAoaSxqLGspIG1lYW5zIGEgc3RlcCBvZiAoMS1jLC1jLC1jKSBpbiAoeCx5LHopLFxuICAgICAgLy8gYSBzdGVwIG9mICgwLDEsMCkgaW4gKGksaixrKSBtZWFucyBhIHN0ZXAgb2YgKC1jLDEtYywtYykgaW4gKHgseSx6KSwgYW5kXG4gICAgICAvLyBhIHN0ZXAgb2YgKDAsMCwxKSBpbiAoaSxqLGspIG1lYW5zIGEgc3RlcCBvZiAoLWMsLWMsMS1jKSBpbiAoeCx5LHopLCB3aGVyZVxuICAgICAgLy8gYyA9IDEvNi5cbiAgICAgIHZhciB4MSA9IHgwIC0gaTEgKyBHMzsgLy8gT2Zmc2V0cyBmb3Igc2Vjb25kIGNvcm5lciBpbiAoeCx5LHopIGNvb3Jkc1xuICAgICAgdmFyIHkxID0geTAgLSBqMSArIEczO1xuICAgICAgdmFyIHoxID0gejAgLSBrMSArIEczO1xuICAgICAgdmFyIHgyID0geDAgLSBpMiArIDIuMCAqIEczOyAvLyBPZmZzZXRzIGZvciB0aGlyZCBjb3JuZXIgaW4gKHgseSx6KSBjb29yZHNcbiAgICAgIHZhciB5MiA9IHkwIC0gajIgKyAyLjAgKiBHMztcbiAgICAgIHZhciB6MiA9IHowIC0gazIgKyAyLjAgKiBHMztcbiAgICAgIHZhciB4MyA9IHgwIC0gMS4wICsgMy4wICogRzM7IC8vIE9mZnNldHMgZm9yIGxhc3QgY29ybmVyIGluICh4LHkseikgY29vcmRzXG4gICAgICB2YXIgeTMgPSB5MCAtIDEuMCArIDMuMCAqIEczO1xuICAgICAgdmFyIHozID0gejAgLSAxLjAgKyAzLjAgKiBHMztcbiAgICAgIC8vIFdvcmsgb3V0IHRoZSBoYXNoZWQgZ3JhZGllbnQgaW5kaWNlcyBvZiB0aGUgZm91ciBzaW1wbGV4IGNvcm5lcnNcbiAgICAgIHZhciBpaSA9IGkgJiAyNTU7XG4gICAgICB2YXIgamogPSBqICYgMjU1O1xuICAgICAgdmFyIGtrID0gayAmIDI1NTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udHJpYnV0aW9uIGZyb20gdGhlIGZvdXIgY29ybmVyc1xuICAgICAgdmFyIHQwID0gMC42IC0geDAgKiB4MCAtIHkwICogeTAgLSB6MCAqIHowO1xuICAgICAgaWYgKHQwIDwgMCkgbjAgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMCA9IHBlcm1Nb2QxMltpaSArIHBlcm1bamogKyBwZXJtW2trXV1dICogMztcbiAgICAgICAgdDAgKj0gdDA7XG4gICAgICAgIG4wID0gdDAgKiB0MCAqIChncmFkM1tnaTBdICogeDAgKyBncmFkM1tnaTAgKyAxXSAqIHkwICsgZ3JhZDNbZ2kwICsgMl0gKiB6MCk7XG4gICAgICB9XG4gICAgICB2YXIgdDEgPSAwLjYgLSB4MSAqIHgxIC0geTEgKiB5MSAtIHoxICogejE7XG4gICAgICBpZiAodDEgPCAwKSBuMSA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kxID0gcGVybU1vZDEyW2lpICsgaTEgKyBwZXJtW2pqICsgajEgKyBwZXJtW2trICsgazFdXV0gKiAzO1xuICAgICAgICB0MSAqPSB0MTtcbiAgICAgICAgbjEgPSB0MSAqIHQxICogKGdyYWQzW2dpMV0gKiB4MSArIGdyYWQzW2dpMSArIDFdICogeTEgKyBncmFkM1tnaTEgKyAyXSAqIHoxKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MiA9IDAuNiAtIHgyICogeDIgLSB5MiAqIHkyIC0gejIgKiB6MjtcbiAgICAgIGlmICh0MiA8IDApIG4yID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTIgPSBwZXJtTW9kMTJbaWkgKyBpMiArIHBlcm1bamogKyBqMiArIHBlcm1ba2sgKyBrMl1dXSAqIDM7XG4gICAgICAgIHQyICo9IHQyO1xuICAgICAgICBuMiA9IHQyICogdDIgKiAoZ3JhZDNbZ2kyXSAqIHgyICsgZ3JhZDNbZ2kyICsgMV0gKiB5MiArIGdyYWQzW2dpMiArIDJdICogejIpO1xuICAgICAgfVxuICAgICAgdmFyIHQzID0gMC42IC0geDMgKiB4MyAtIHkzICogeTMgLSB6MyAqIHozO1xuICAgICAgaWYgKHQzIDwgMCkgbjMgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMyA9IHBlcm1Nb2QxMltpaSArIDEgKyBwZXJtW2pqICsgMSArIHBlcm1ba2sgKyAxXV1dICogMztcbiAgICAgICAgdDMgKj0gdDM7XG4gICAgICAgIG4zID0gdDMgKiB0MyAqIChncmFkM1tnaTNdICogeDMgKyBncmFkM1tnaTMgKyAxXSAqIHkzICsgZ3JhZDNbZ2kzICsgMl0gKiB6Myk7XG4gICAgICB9XG4gICAgICAvLyBBZGQgY29udHJpYnV0aW9ucyBmcm9tIGVhY2ggY29ybmVyIHRvIGdldCB0aGUgZmluYWwgbm9pc2UgdmFsdWUuXG4gICAgICAvLyBUaGUgcmVzdWx0IGlzIHNjYWxlZCB0byBzdGF5IGp1c3QgaW5zaWRlIFstMSwxXVxuICAgICAgcmV0dXJuIDMyLjAgKiAobjAgKyBuMSArIG4yICsgbjMpO1xuICAgIH0sXG4gICAgLy8gNEQgc2ltcGxleCBub2lzZSwgYmV0dGVyIHNpbXBsZXggcmFuayBvcmRlcmluZyBtZXRob2QgMjAxMi0wMy0wOVxuICAgIG5vaXNlNEQ6IGZ1bmN0aW9uKHgsIHksIHosIHcpIHtcbiAgICAgIHZhciBwZXJtID0gdGhpcy5wZXJtO1xuICAgICAgdmFyIGdyYWQ0ID0gdGhpcy5ncmFkNDtcblxuICAgICAgdmFyIG4wLCBuMSwgbjIsIG4zLCBuNDsgLy8gTm9pc2UgY29udHJpYnV0aW9ucyBmcm9tIHRoZSBmaXZlIGNvcm5lcnNcbiAgICAgIC8vIFNrZXcgdGhlICh4LHkseix3KSBzcGFjZSB0byBkZXRlcm1pbmUgd2hpY2ggY2VsbCBvZiAyNCBzaW1wbGljZXMgd2UncmUgaW5cbiAgICAgIHZhciBzID0gKHggKyB5ICsgeiArIHcpICogRjQ7IC8vIEZhY3RvciBmb3IgNEQgc2tld2luZ1xuICAgICAgdmFyIGkgPSBNYXRoLmZsb29yKHggKyBzKTtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcih5ICsgcyk7XG4gICAgICB2YXIgayA9IE1hdGguZmxvb3IoeiArIHMpO1xuICAgICAgdmFyIGwgPSBNYXRoLmZsb29yKHcgKyBzKTtcbiAgICAgIHZhciB0ID0gKGkgKyBqICsgayArIGwpICogRzQ7IC8vIEZhY3RvciBmb3IgNEQgdW5za2V3aW5nXG4gICAgICB2YXIgWDAgPSBpIC0gdDsgLy8gVW5za2V3IHRoZSBjZWxsIG9yaWdpbiBiYWNrIHRvICh4LHkseix3KSBzcGFjZVxuICAgICAgdmFyIFkwID0gaiAtIHQ7XG4gICAgICB2YXIgWjAgPSBrIC0gdDtcbiAgICAgIHZhciBXMCA9IGwgLSB0O1xuICAgICAgdmFyIHgwID0geCAtIFgwOyAvLyBUaGUgeCx5LHosdyBkaXN0YW5jZXMgZnJvbSB0aGUgY2VsbCBvcmlnaW5cbiAgICAgIHZhciB5MCA9IHkgLSBZMDtcbiAgICAgIHZhciB6MCA9IHogLSBaMDtcbiAgICAgIHZhciB3MCA9IHcgLSBXMDtcbiAgICAgIC8vIEZvciB0aGUgNEQgY2FzZSwgdGhlIHNpbXBsZXggaXMgYSA0RCBzaGFwZSBJIHdvbid0IGV2ZW4gdHJ5IHRvIGRlc2NyaWJlLlxuICAgICAgLy8gVG8gZmluZCBvdXQgd2hpY2ggb2YgdGhlIDI0IHBvc3NpYmxlIHNpbXBsaWNlcyB3ZSdyZSBpbiwgd2UgbmVlZCB0b1xuICAgICAgLy8gZGV0ZXJtaW5lIHRoZSBtYWduaXR1ZGUgb3JkZXJpbmcgb2YgeDAsIHkwLCB6MCBhbmQgdzAuXG4gICAgICAvLyBTaXggcGFpci13aXNlIGNvbXBhcmlzb25zIGFyZSBwZXJmb3JtZWQgYmV0d2VlbiBlYWNoIHBvc3NpYmxlIHBhaXJcbiAgICAgIC8vIG9mIHRoZSBmb3VyIGNvb3JkaW5hdGVzLCBhbmQgdGhlIHJlc3VsdHMgYXJlIHVzZWQgdG8gcmFuayB0aGUgbnVtYmVycy5cbiAgICAgIHZhciByYW5reCA9IDA7XG4gICAgICB2YXIgcmFua3kgPSAwO1xuICAgICAgdmFyIHJhbmt6ID0gMDtcbiAgICAgIHZhciByYW5rdyA9IDA7XG4gICAgICBpZiAoeDAgPiB5MCkgcmFua3grKztcbiAgICAgIGVsc2UgcmFua3krKztcbiAgICAgIGlmICh4MCA+IHowKSByYW5reCsrO1xuICAgICAgZWxzZSByYW5reisrO1xuICAgICAgaWYgKHgwID4gdzApIHJhbmt4Kys7XG4gICAgICBlbHNlIHJhbmt3Kys7XG4gICAgICBpZiAoeTAgPiB6MCkgcmFua3krKztcbiAgICAgIGVsc2UgcmFua3orKztcbiAgICAgIGlmICh5MCA+IHcwKSByYW5reSsrO1xuICAgICAgZWxzZSByYW5rdysrO1xuICAgICAgaWYgKHowID4gdzApIHJhbmt6Kys7XG4gICAgICBlbHNlIHJhbmt3Kys7XG4gICAgICB2YXIgaTEsIGoxLCBrMSwgbDE7IC8vIFRoZSBpbnRlZ2VyIG9mZnNldHMgZm9yIHRoZSBzZWNvbmQgc2ltcGxleCBjb3JuZXJcbiAgICAgIHZhciBpMiwgajIsIGsyLCBsMjsgLy8gVGhlIGludGVnZXIgb2Zmc2V0cyBmb3IgdGhlIHRoaXJkIHNpbXBsZXggY29ybmVyXG4gICAgICB2YXIgaTMsIGozLCBrMywgbDM7IC8vIFRoZSBpbnRlZ2VyIG9mZnNldHMgZm9yIHRoZSBmb3VydGggc2ltcGxleCBjb3JuZXJcbiAgICAgIC8vIHNpbXBsZXhbY10gaXMgYSA0LXZlY3RvciB3aXRoIHRoZSBudW1iZXJzIDAsIDEsIDIgYW5kIDMgaW4gc29tZSBvcmRlci5cbiAgICAgIC8vIE1hbnkgdmFsdWVzIG9mIGMgd2lsbCBuZXZlciBvY2N1ciwgc2luY2UgZS5nLiB4Pnk+ej53IG1ha2VzIHg8eiwgeTx3IGFuZCB4PHdcbiAgICAgIC8vIGltcG9zc2libGUuIE9ubHkgdGhlIDI0IGluZGljZXMgd2hpY2ggaGF2ZSBub24temVybyBlbnRyaWVzIG1ha2UgYW55IHNlbnNlLlxuICAgICAgLy8gV2UgdXNlIGEgdGhyZXNob2xkaW5nIHRvIHNldCB0aGUgY29vcmRpbmF0ZXMgaW4gdHVybiBmcm9tIHRoZSBsYXJnZXN0IG1hZ25pdHVkZS5cbiAgICAgIC8vIFJhbmsgMyBkZW5vdGVzIHRoZSBsYXJnZXN0IGNvb3JkaW5hdGUuXG4gICAgICBpMSA9IHJhbmt4ID49IDMgPyAxIDogMDtcbiAgICAgIGoxID0gcmFua3kgPj0gMyA/IDEgOiAwO1xuICAgICAgazEgPSByYW5reiA+PSAzID8gMSA6IDA7XG4gICAgICBsMSA9IHJhbmt3ID49IDMgPyAxIDogMDtcbiAgICAgIC8vIFJhbmsgMiBkZW5vdGVzIHRoZSBzZWNvbmQgbGFyZ2VzdCBjb29yZGluYXRlLlxuICAgICAgaTIgPSByYW5reCA+PSAyID8gMSA6IDA7XG4gICAgICBqMiA9IHJhbmt5ID49IDIgPyAxIDogMDtcbiAgICAgIGsyID0gcmFua3ogPj0gMiA/IDEgOiAwO1xuICAgICAgbDIgPSByYW5rdyA+PSAyID8gMSA6IDA7XG4gICAgICAvLyBSYW5rIDEgZGVub3RlcyB0aGUgc2Vjb25kIHNtYWxsZXN0IGNvb3JkaW5hdGUuXG4gICAgICBpMyA9IHJhbmt4ID49IDEgPyAxIDogMDtcbiAgICAgIGozID0gcmFua3kgPj0gMSA/IDEgOiAwO1xuICAgICAgazMgPSByYW5reiA+PSAxID8gMSA6IDA7XG4gICAgICBsMyA9IHJhbmt3ID49IDEgPyAxIDogMDtcbiAgICAgIC8vIFRoZSBmaWZ0aCBjb3JuZXIgaGFzIGFsbCBjb29yZGluYXRlIG9mZnNldHMgPSAxLCBzbyBubyBuZWVkIHRvIGNvbXB1dGUgdGhhdC5cbiAgICAgIHZhciB4MSA9IHgwIC0gaTEgKyBHNDsgLy8gT2Zmc2V0cyBmb3Igc2Vjb25kIGNvcm5lciBpbiAoeCx5LHosdykgY29vcmRzXG4gICAgICB2YXIgeTEgPSB5MCAtIGoxICsgRzQ7XG4gICAgICB2YXIgejEgPSB6MCAtIGsxICsgRzQ7XG4gICAgICB2YXIgdzEgPSB3MCAtIGwxICsgRzQ7XG4gICAgICB2YXIgeDIgPSB4MCAtIGkyICsgMi4wICogRzQ7IC8vIE9mZnNldHMgZm9yIHRoaXJkIGNvcm5lciBpbiAoeCx5LHosdykgY29vcmRzXG4gICAgICB2YXIgeTIgPSB5MCAtIGoyICsgMi4wICogRzQ7XG4gICAgICB2YXIgejIgPSB6MCAtIGsyICsgMi4wICogRzQ7XG4gICAgICB2YXIgdzIgPSB3MCAtIGwyICsgMi4wICogRzQ7XG4gICAgICB2YXIgeDMgPSB4MCAtIGkzICsgMy4wICogRzQ7IC8vIE9mZnNldHMgZm9yIGZvdXJ0aCBjb3JuZXIgaW4gKHgseSx6LHcpIGNvb3Jkc1xuICAgICAgdmFyIHkzID0geTAgLSBqMyArIDMuMCAqIEc0O1xuICAgICAgdmFyIHozID0gejAgLSBrMyArIDMuMCAqIEc0O1xuICAgICAgdmFyIHczID0gdzAgLSBsMyArIDMuMCAqIEc0O1xuICAgICAgdmFyIHg0ID0geDAgLSAxLjAgKyA0LjAgKiBHNDsgLy8gT2Zmc2V0cyBmb3IgbGFzdCBjb3JuZXIgaW4gKHgseSx6LHcpIGNvb3Jkc1xuICAgICAgdmFyIHk0ID0geTAgLSAxLjAgKyA0LjAgKiBHNDtcbiAgICAgIHZhciB6NCA9IHowIC0gMS4wICsgNC4wICogRzQ7XG4gICAgICB2YXIgdzQgPSB3MCAtIDEuMCArIDQuMCAqIEc0O1xuICAgICAgLy8gV29yayBvdXQgdGhlIGhhc2hlZCBncmFkaWVudCBpbmRpY2VzIG9mIHRoZSBmaXZlIHNpbXBsZXggY29ybmVyc1xuICAgICAgdmFyIGlpID0gaSAmIDI1NTtcbiAgICAgIHZhciBqaiA9IGogJiAyNTU7XG4gICAgICB2YXIga2sgPSBrICYgMjU1O1xuICAgICAgdmFyIGxsID0gbCAmIDI1NTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udHJpYnV0aW9uIGZyb20gdGhlIGZpdmUgY29ybmVyc1xuICAgICAgdmFyIHQwID0gMC42IC0geDAgKiB4MCAtIHkwICogeTAgLSB6MCAqIHowIC0gdzAgKiB3MDtcbiAgICAgIGlmICh0MCA8IDApIG4wID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTAgPSAocGVybVtpaSArIHBlcm1bamogKyBwZXJtW2trICsgcGVybVtsbF1dXV0gJSAzMikgKiA0O1xuICAgICAgICB0MCAqPSB0MDtcbiAgICAgICAgbjAgPSB0MCAqIHQwICogKGdyYWQ0W2dpMF0gKiB4MCArIGdyYWQ0W2dpMCArIDFdICogeTAgKyBncmFkNFtnaTAgKyAyXSAqIHowICsgZ3JhZDRbZ2kwICsgM10gKiB3MCk7XG4gICAgICB9XG4gICAgICB2YXIgdDEgPSAwLjYgLSB4MSAqIHgxIC0geTEgKiB5MSAtIHoxICogejEgLSB3MSAqIHcxO1xuICAgICAgaWYgKHQxIDwgMCkgbjEgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMSA9IChwZXJtW2lpICsgaTEgKyBwZXJtW2pqICsgajEgKyBwZXJtW2trICsgazEgKyBwZXJtW2xsICsgbDFdXV1dICUgMzIpICogNDtcbiAgICAgICAgdDEgKj0gdDE7XG4gICAgICAgIG4xID0gdDEgKiB0MSAqIChncmFkNFtnaTFdICogeDEgKyBncmFkNFtnaTEgKyAxXSAqIHkxICsgZ3JhZDRbZ2kxICsgMl0gKiB6MSArIGdyYWQ0W2dpMSArIDNdICogdzEpO1xuICAgICAgfVxuICAgICAgdmFyIHQyID0gMC42IC0geDIgKiB4MiAtIHkyICogeTIgLSB6MiAqIHoyIC0gdzIgKiB3MjtcbiAgICAgIGlmICh0MiA8IDApIG4yID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTIgPSAocGVybVtpaSArIGkyICsgcGVybVtqaiArIGoyICsgcGVybVtrayArIGsyICsgcGVybVtsbCArIGwyXV1dXSAlIDMyKSAqIDQ7XG4gICAgICAgIHQyICo9IHQyO1xuICAgICAgICBuMiA9IHQyICogdDIgKiAoZ3JhZDRbZ2kyXSAqIHgyICsgZ3JhZDRbZ2kyICsgMV0gKiB5MiArIGdyYWQ0W2dpMiArIDJdICogejIgKyBncmFkNFtnaTIgKyAzXSAqIHcyKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MyA9IDAuNiAtIHgzICogeDMgLSB5MyAqIHkzIC0gejMgKiB6MyAtIHczICogdzM7XG4gICAgICBpZiAodDMgPCAwKSBuMyA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kzID0gKHBlcm1baWkgKyBpMyArIHBlcm1bamogKyBqMyArIHBlcm1ba2sgKyBrMyArIHBlcm1bbGwgKyBsM11dXV0gJSAzMikgKiA0O1xuICAgICAgICB0MyAqPSB0MztcbiAgICAgICAgbjMgPSB0MyAqIHQzICogKGdyYWQ0W2dpM10gKiB4MyArIGdyYWQ0W2dpMyArIDFdICogeTMgKyBncmFkNFtnaTMgKyAyXSAqIHozICsgZ3JhZDRbZ2kzICsgM10gKiB3Myk7XG4gICAgICB9XG4gICAgICB2YXIgdDQgPSAwLjYgLSB4NCAqIHg0IC0geTQgKiB5NCAtIHo0ICogejQgLSB3NCAqIHc0O1xuICAgICAgaWYgKHQ0IDwgMCkgbjQgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpNCA9IChwZXJtW2lpICsgMSArIHBlcm1bamogKyAxICsgcGVybVtrayArIDEgKyBwZXJtW2xsICsgMV1dXV0gJSAzMikgKiA0O1xuICAgICAgICB0NCAqPSB0NDtcbiAgICAgICAgbjQgPSB0NCAqIHQ0ICogKGdyYWQ0W2dpNF0gKiB4NCArIGdyYWQ0W2dpNCArIDFdICogeTQgKyBncmFkNFtnaTQgKyAyXSAqIHo0ICsgZ3JhZDRbZ2k0ICsgM10gKiB3NCk7XG4gICAgICB9XG4gICAgICAvLyBTdW0gdXAgYW5kIHNjYWxlIHRoZSByZXN1bHQgdG8gY292ZXIgdGhlIHJhbmdlIFstMSwxXVxuICAgICAgcmV0dXJuIDI3LjAgKiAobjAgKyBuMSArIG4yICsgbjMgKyBuNCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkUGVybXV0YXRpb25UYWJsZShyYW5kb20pIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgcCA9IG5ldyBVaW50OEFycmF5KDI1Nik7XG4gICAgZm9yIChpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgICBwW2ldID0gaTtcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IDI1NTsgaSsrKSB7XG4gICAgICB2YXIgciA9IGkgKyB+fihyYW5kb20oKSAqICgyNTYgLSBpKSk7XG4gICAgICB2YXIgYXV4ID0gcFtpXTtcbiAgICAgIHBbaV0gPSBwW3JdO1xuICAgICAgcFtyXSA9IGF1eDtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH1cbiAgU2ltcGxleE5vaXNlLl9idWlsZFBlcm11dGF0aW9uVGFibGUgPSBidWlsZFBlcm11dGF0aW9uVGFibGU7XG5cbiAgZnVuY3Rpb24gYWxlYSgpIHtcbiAgICAvLyBKb2hhbm5lcyBCYWFnw7hlIDxiYWFnb2VAYmFhZ29lLmNvbT4sIDIwMTBcbiAgICB2YXIgczAgPSAwO1xuICAgIHZhciBzMSA9IDA7XG4gICAgdmFyIHMyID0gMDtcbiAgICB2YXIgYyA9IDE7XG5cbiAgICB2YXIgbWFzaCA9IG1hc2hlcigpO1xuICAgIHMwID0gbWFzaCgnICcpO1xuICAgIHMxID0gbWFzaCgnICcpO1xuICAgIHMyID0gbWFzaCgnICcpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHMwIC09IG1hc2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChzMCA8IDApIHtcbiAgICAgICAgczAgKz0gMTtcbiAgICAgIH1cbiAgICAgIHMxIC09IG1hc2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChzMSA8IDApIHtcbiAgICAgICAgczEgKz0gMTtcbiAgICAgIH1cbiAgICAgIHMyIC09IG1hc2goYXJndW1lbnRzW2ldKTtcbiAgICAgIGlmIChzMiA8IDApIHtcbiAgICAgICAgczIgKz0gMTtcbiAgICAgIH1cbiAgICB9XG4gICAgbWFzaCA9IG51bGw7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHQgPSAyMDkxNjM5ICogczAgKyBjICogMi4zMjgzMDY0MzY1Mzg2OTYzZS0xMDsgLy8gMl4tMzJcbiAgICAgIHMwID0gczE7XG4gICAgICBzMSA9IHMyO1xuICAgICAgcmV0dXJuIHMyID0gdCAtIChjID0gdCB8IDApO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWFzaGVyKCkge1xuICAgIHZhciBuID0gMHhlZmM4MjQ5ZDtcbiAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBuICs9IGRhdGEuY2hhckNvZGVBdChpKTtcbiAgICAgICAgdmFyIGggPSAwLjAyNTE5NjAzMjgyNDE2OTM4ICogbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgaCAqPSBuO1xuICAgICAgICBuID0gaCA+Pj4gMDtcbiAgICAgICAgaCAtPSBuO1xuICAgICAgICBuICs9IGggKiAweDEwMDAwMDAwMDsgLy8gMl4zMlxuICAgICAgfVxuICAgICAgcmV0dXJuIChuID4+PiAwKSAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gICAgfTtcbiAgfVxuXG4gIC8vIGFtZFxuICBpZiAodHlwZW9mIGRlZmluZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGZ1bmN0aW9uKCkge3JldHVybiBTaW1wbGV4Tm9pc2U7fSk7XG4gIC8vIGNvbW1vbiBqc1xuICBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSBleHBvcnRzLlNpbXBsZXhOb2lzZSA9IFNpbXBsZXhOb2lzZTtcbiAgLy8gYnJvd3NlclxuICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgd2luZG93LlNpbXBsZXhOb2lzZSA9IFNpbXBsZXhOb2lzZTtcbiAgLy8gbm9kZWpzXG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gU2ltcGxleE5vaXNlO1xuICB9XG5cbn0pKCk7XG4iLCJ2YXIgZXh0ZW5kU3RhdGljcz1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxhKXt0Ll9fcHJvdG9fXz1hfXx8ZnVuY3Rpb24odCxhKXtmb3IodmFyIHIgaW4gYSlhLmhhc093blByb3BlcnR5KHIpJiYodFtyXT1hW3JdKX07ZnVuY3Rpb24gX19leHRlbmRzKHQsYSl7ZnVuY3Rpb24gcigpe3RoaXMuY29uc3RydWN0b3I9dH1leHRlbmRTdGF0aWNzKHQsYSksdC5wcm90b3R5cGU9bnVsbD09PWE/T2JqZWN0LmNyZWF0ZShhKTooci5wcm90b3R5cGU9YS5wcm90b3R5cGUsbmV3IHIpfWZ1bmN0aW9uIHJvdGF0ZSh0LGEpe3ZhciByPXRbMF0sZT10WzFdO3JldHVybltyKk1hdGguY29zKGEpLWUqTWF0aC5zaW4oYSkscipNYXRoLnNpbihhKStlKk1hdGguY29zKGEpXX1mdW5jdGlvbiBhc3NlcnROdW1iZXJzKCl7Zm9yKHZhciB0PVtdLGE9MDthPGFyZ3VtZW50cy5sZW5ndGg7YSsrKXRbYV09YXJndW1lbnRzW2FdO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKWlmKFwibnVtYmVyXCIhPXR5cGVvZiB0W3JdKXRocm93IG5ldyBFcnJvcihcImFzc2VydE51bWJlcnMgYXJndW1lbnRzW1wiK3IrXCJdIGlzIG5vdCBhIG51bWJlci4gXCIrdHlwZW9mIHRbcl0rXCIgPT0gdHlwZW9mIFwiK3Rbcl0pO3JldHVybiEwfXZhciBQST1NYXRoLlBJO2Z1bmN0aW9uIGFubm90YXRlQXJjQ29tbWFuZCh0LGEscil7dC5sQXJjRmxhZz0wPT09dC5sQXJjRmxhZz8wOjEsdC5zd2VlcEZsYWc9MD09PXQuc3dlZXBGbGFnPzA6MTt2YXIgZT10LnJYLG49dC5yWSxpPXQueCxvPXQueTtlPU1hdGguYWJzKHQuclgpLG49TWF0aC5hYnModC5yWSk7dmFyIHM9cm90YXRlKFsoYS1pKS8yLChyLW8pLzJdLC10LnhSb3QvMTgwKlBJKSxoPXNbMF0sdT1zWzFdLGM9TWF0aC5wb3coaCwyKS9NYXRoLnBvdyhlLDIpK01hdGgucG93KHUsMikvTWF0aC5wb3cobiwyKTsxPGMmJihlKj1NYXRoLnNxcnQoYyksbio9TWF0aC5zcXJ0KGMpKSx0LnJYPWUsdC5yWT1uO3ZhciBtPU1hdGgucG93KGUsMikqTWF0aC5wb3codSwyKStNYXRoLnBvdyhuLDIpKk1hdGgucG93KGgsMiksXz0odC5sQXJjRmxhZyE9PXQuc3dlZXBGbGFnPzE6LTEpKk1hdGguc3FydChNYXRoLm1heCgwLChNYXRoLnBvdyhlLDIpKk1hdGgucG93KG4sMiktbSkvbSkpLFQ9ZSp1L24qXyxPPS1uKmgvZSpfLHA9cm90YXRlKFtULE9dLHQueFJvdC8xODAqUEkpO3QuY1g9cFswXSsoYStpKS8yLHQuY1k9cFsxXSsocitvKS8yLHQucGhpMT1NYXRoLmF0YW4yKCh1LU8pL24sKGgtVCkvZSksdC5waGkyPU1hdGguYXRhbjIoKC11LU8pL24sKC1oLVQpL2UpLDA9PT10LnN3ZWVwRmxhZyYmdC5waGkyPnQucGhpMSYmKHQucGhpMi09MipQSSksMT09PXQuc3dlZXBGbGFnJiZ0LnBoaTI8dC5waGkxJiYodC5waGkyKz0yKlBJKSx0LnBoaTEqPTE4MC9QSSx0LnBoaTIqPTE4MC9QSX1mdW5jdGlvbiBpbnRlcnNlY3Rpb25Vbml0Q2lyY2xlTGluZSh0LGEscil7YXNzZXJ0TnVtYmVycyh0LGEscik7dmFyIGU9dCp0K2EqYS1yKnI7aWYoMD5lKXJldHVybltdO2lmKDA9PT1lKXJldHVybltbdCpyLyh0KnQrYSphKSxhKnIvKHQqdCthKmEpXV07dmFyIG49TWF0aC5zcXJ0KGUpO3JldHVybltbKHQqcithKm4pLyh0KnQrYSphKSwoYSpyLXQqbikvKHQqdCthKmEpXSxbKHQqci1hKm4pLyh0KnQrYSphKSwoYSpyK3QqbikvKHQqdCthKmEpXV19dmFyIFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIsREVHPU1hdGguUEkvMTgwO2Z1bmN0aW9uIGxlcnAodCxhLHIpe3JldHVybigxLXIpKnQrciphfWZ1bmN0aW9uIGFyY0F0KHQsYSxyLGUpe3JldHVybiB0K01hdGguY29zKGUvMTgwKlBJKSphK01hdGguc2luKGUvMTgwKlBJKSpyfWZ1bmN0aW9uIGJlemllclJvb3QodCxhLHIsZSl7dmFyIG49YS10LGk9ci1hLG89MypuKzMqKGUtciktNippLHM9NiooaS1uKSxoPTMqbjtyZXR1cm4gTWF0aC5hYnMobyk8MWUtNj9bLWgvc106cHFGb3JtdWxhKHMvbyxoL28sMWUtNil9ZnVuY3Rpb24gYmV6aWVyQXQodCxhLHIsZSxuKXt2YXIgaT0xLW47cmV0dXJuIHQqKGkqaSppKSthKigzKmkqaSpuKStyKigzKmkqbipuKStlKihuKm4qbil9ZnVuY3Rpb24gcHFGb3JtdWxhKHQsYSxyKXt2b2lkIDA9PT1yJiYocj0xZS02KTt2YXIgZT10KnQvNC1hO2lmKGU8LXIpcmV0dXJuW107aWYoZTw9cilyZXR1cm5bLXQvMl07dmFyIG49TWF0aC5zcXJ0KGUpO3JldHVyblstdC8yLW4sLXQvMituXX1mdW5jdGlvbiBhMmModCxhLHIpe3ZhciBlLG4saSxvO3QuY1h8fGFubm90YXRlQXJjQ29tbWFuZCh0LGEscik7Zm9yKHZhciBzPU1hdGgubWluKHQucGhpMSx0LnBoaTIpLGg9TWF0aC5tYXgodC5waGkxLHQucGhpMiktcyx1PU1hdGguY2VpbChoLzkwKSxjPW5ldyBBcnJheSh1KSxtPWEsXz1yLFQ9MDtUPHU7VCsrKXt2YXIgTz1sZXJwKHQucGhpMSx0LnBoaTIsVC91KSxwPWxlcnAodC5waGkxLHQucGhpMiwoVCsxKS91KSx5PXAtTyxTPTQvMypNYXRoLnRhbih5KkRFRy80KSxmPVtNYXRoLmNvcyhPKkRFRyktUypNYXRoLnNpbihPKkRFRyksTWF0aC5zaW4oTypERUcpK1MqTWF0aC5jb3MoTypERUcpXSxWPWZbMF0sTj1mWzFdLEQ9W01hdGguY29zKHAqREVHKSxNYXRoLnNpbihwKkRFRyldLFA9RFswXSxsPURbMV0sdj1bUCtTKk1hdGguc2luKHAqREVHKSxsLVMqTWF0aC5jb3MocCpERUcpXSxFPXZbMF0sQT12WzFdO2NbVF09e3JlbGF0aXZlOnQucmVsYXRpdmUsdHlwZTpTVkdQYXRoRGF0YS5DVVJWRV9UT307dmFyIGQ9ZnVuY3Rpb24oYSxyKXt2YXIgZT1yb3RhdGUoW2EqdC5yWCxyKnQuclldLHQueFJvdCksbj1lWzBdLGk9ZVsxXTtyZXR1cm5bdC5jWCtuLHQuY1kraV19O2U9ZChWLE4pLGNbVF0ueDE9ZVswXSxjW1RdLnkxPWVbMV0sbj1kKEUsQSksY1tUXS54Mj1uWzBdLGNbVF0ueTI9blsxXSxpPWQoUCxsKSxjW1RdLng9aVswXSxjW1RdLnk9aVsxXSx0LnJlbGF0aXZlJiYoY1tUXS54MS09bSxjW1RdLnkxLT1fLGNbVF0ueDItPW0sY1tUXS55Mi09XyxjW1RdLngtPW0sY1tUXS55LT1fKSxtPShvPVtjW1RdLngsY1tUXS55XSlbMF0sXz1vWzFdfXJldHVybiBjfSFmdW5jdGlvbih0KXtmdW5jdGlvbiBhKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiB0LnJlbGF0aXZlJiYodm9pZCAwIT09dC54MSYmKHQueDErPWEpLHZvaWQgMCE9PXQueTEmJih0LnkxKz1yKSx2b2lkIDAhPT10LngyJiYodC54Mis9YSksdm9pZCAwIT09dC55MiYmKHQueTIrPXIpLHZvaWQgMCE9PXQueCYmKHQueCs9YSksdm9pZCAwIT09dC55JiYodC55Kz1yKSx0LnJlbGF0aXZlPSExKSx0fSl9ZnVuY3Rpb24gcigpe3ZhciB0PU5hTixhPU5hTixyPU5hTixlPU5hTjtyZXR1cm4gbihmdW5jdGlvbihuLGksbyl7cmV0dXJuIG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8mJihuLnR5cGU9U1ZHUGF0aERhdGEuQ1VSVkVfVE8sdD1pc05hTih0KT9pOnQsYT1pc05hTihhKT9vOmEsbi54MT1uLnJlbGF0aXZlP2ktdDoyKmktdCxuLnkxPW4ucmVsYXRpdmU/by1hOjIqby1hKSxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE8/KHQ9bi5yZWxhdGl2ZT9pK24ueDI6bi54MixhPW4ucmVsYXRpdmU/bytuLnkyOm4ueTIpOih0PU5hTixhPU5hTiksbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPJiYobi50eXBlPVNWR1BhdGhEYXRhLlFVQURfVE8scj1pc05hTihyKT9pOnIsZT1pc05hTihlKT9vOmUsbi54MT1uLnJlbGF0aXZlP2ktcjoyKmktcixuLnkxPW4ucmVsYXRpdmU/by1lOjIqby1lKSxuLnR5cGUmU1ZHUGF0aERhdGEuUVVBRF9UTz8ocj1uLnJlbGF0aXZlP2krbi54MTpuLngxLGU9bi5yZWxhdGl2ZT9vK24ueTE6bi55MSk6KHI9TmFOLGU9TmFOKSxufSl9ZnVuY3Rpb24gZSgpe3ZhciB0PU5hTixhPU5hTjtyZXR1cm4gbihmdW5jdGlvbihyLGUsbil7aWYoci50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPJiYoci50eXBlPVNWR1BhdGhEYXRhLlFVQURfVE8sdD1pc05hTih0KT9lOnQsYT1pc05hTihhKT9uOmEsci54MT1yLnJlbGF0aXZlP2UtdDoyKmUtdCxyLnkxPXIucmVsYXRpdmU/bi1hOjIqbi1hKSxyLnR5cGUmU1ZHUGF0aERhdGEuUVVBRF9UTyl7dD1yLnJlbGF0aXZlP2Urci54MTpyLngxLGE9ci5yZWxhdGl2ZT9uK3IueTE6ci55MTt2YXIgaT1yLngxLG89ci55MTtyLnR5cGU9U1ZHUGF0aERhdGEuQ1VSVkVfVE8sci54MT0oKHIucmVsYXRpdmU/MDplKSsyKmkpLzMsci55MT0oKHIucmVsYXRpdmU/MDpuKSsyKm8pLzMsci54Mj0oci54KzIqaSkvMyxyLnkyPShyLnkrMipvKS8zfWVsc2UgdD1OYU4sYT1OYU47cmV0dXJuIHJ9KX1mdW5jdGlvbiBuKHQpe3ZhciBhPTAscj0wLGU9TmFOLG49TmFOO3JldHVybiBmdW5jdGlvbihpKXtpZihpc05hTihlKSYmIShpLnR5cGUmU1ZHUGF0aERhdGEuTU9WRV9UTykpdGhyb3cgbmV3IEVycm9yKFwicGF0aCBtdXN0IHN0YXJ0IHdpdGggbW92ZXRvXCIpO3ZhciBvPXQoaSxhLHIsZSxuKTtyZXR1cm4gaS50eXBlJlNWR1BhdGhEYXRhLkNMT1NFX1BBVEgmJihhPWUscj1uKSx2b2lkIDAhPT1pLngmJihhPWkucmVsYXRpdmU/YStpLng6aS54KSx2b2lkIDAhPT1pLnkmJihyPWkucmVsYXRpdmU/citpLnk6aS55KSxpLnR5cGUmU1ZHUGF0aERhdGEuTU9WRV9UTyYmKGU9YSxuPXIpLG99fWZ1bmN0aW9uIGkodCxhLHIsZSxpLG8pe3JldHVybiBhc3NlcnROdW1iZXJzKHQsYSxyLGUsaSxvKSxuKGZ1bmN0aW9uKG4scyxoLHUpe3ZhciBjPW4ueDEsbT1uLngyLF89bi5yZWxhdGl2ZSYmIWlzTmFOKHUpLFQ9dm9pZCAwIT09bi54P24ueDpfPzA6cyxPPXZvaWQgMCE9PW4ueT9uLnk6Xz8wOmg7ZnVuY3Rpb24gcCh0KXtyZXR1cm4gdCp0fW4udHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiYwIT09YSYmKG4udHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLG4ueT1uLnJlbGF0aXZlPzA6aCksbi50eXBlJlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyYmMCE9PXImJihuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxuLng9bi5yZWxhdGl2ZT8wOnMpLHZvaWQgMCE9PW4ueCYmKG4ueD1uLngqdCtPKnIrKF8/MDppKSksdm9pZCAwIT09bi55JiYobi55PVQqYStuLnkqZSsoXz8wOm8pKSx2b2lkIDAhPT1uLngxJiYobi54MT1uLngxKnQrbi55MSpyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueTEmJihuLnkxPWMqYStuLnkxKmUrKF8/MDpvKSksdm9pZCAwIT09bi54MiYmKG4ueDI9bi54Mip0K24ueTIqcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkyJiYobi55Mj1tKmErbi55MiplKyhfPzA6bykpO3ZhciB5PXQqZS1hKnI7aWYodm9pZCAwIT09bi54Um90JiYoMSE9PXR8fDAhPT1hfHwwIT09cnx8MSE9PWUpKWlmKDA9PT15KWRlbGV0ZSBuLnJYLGRlbGV0ZSBuLnJZLGRlbGV0ZSBuLnhSb3QsZGVsZXRlIG4ubEFyY0ZsYWcsZGVsZXRlIG4uc3dlZXBGbGFnLG4udHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPO2Vsc2V7dmFyIFM9bi54Um90Kk1hdGguUEkvMTgwLGY9TWF0aC5zaW4oUyksVj1NYXRoLmNvcyhTKSxOPTEvcChuLnJYKSxEPTEvcChuLnJZKSxQPXAoVikqTitwKGYpKkQsbD0yKmYqViooTi1EKSx2PXAoZikqTitwKFYpKkQsRT1QKmUqZS1sKmEqZSt2KmEqYSxBPWwqKHQqZSthKnIpLTIqKFAqciplK3YqdCphKSxkPVAqcipyLWwqdCpyK3YqdCp0LEc9KE1hdGguYXRhbjIoQSxFLWQpK01hdGguUEkpJU1hdGguUEkvMixDPU1hdGguc2luKEcpLHg9TWF0aC5jb3MoRyk7bi5yWD1NYXRoLmFicyh5KS9NYXRoLnNxcnQoRSpwKHgpK0EqQyp4K2QqcChDKSksbi5yWT1NYXRoLmFicyh5KS9NYXRoLnNxcnQoRSpwKEMpLUEqQyp4K2QqcCh4KSksbi54Um90PTE4MCpHL01hdGguUEl9cmV0dXJuIHZvaWQgMCE9PW4uc3dlZXBGbGFnJiYwPnkmJihuLnN3ZWVwRmxhZz0rIW4uc3dlZXBGbGFnKSxufSl9ZnVuY3Rpb24gbygpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgYT17fTtmb3IodmFyIHIgaW4gdClhW3JdPXRbcl07cmV0dXJuIGF9fXQuUk9VTkQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gYShhKXtyZXR1cm4gTWF0aC5yb3VuZChhKnQpL3R9cmV0dXJuIHZvaWQgMD09PXQmJih0PTFlMTMpLGFzc2VydE51bWJlcnModCksZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQueDEmJih0LngxPWEodC54MSkpLHZvaWQgMCE9PXQueTEmJih0LnkxPWEodC55MSkpLHZvaWQgMCE9PXQueDImJih0LngyPWEodC54MikpLHZvaWQgMCE9PXQueTImJih0LnkyPWEodC55MikpLHZvaWQgMCE9PXQueCYmKHQueD1hKHQueCkpLHZvaWQgMCE9PXQueSYmKHQueT1hKHQueSkpLHR9fSx0LlRPX0FCUz1hLHQuVE9fUkVMPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiB0LnJlbGF0aXZlfHwodm9pZCAwIT09dC54MSYmKHQueDEtPWEpLHZvaWQgMCE9PXQueTEmJih0LnkxLT1yKSx2b2lkIDAhPT10LngyJiYodC54Mi09YSksdm9pZCAwIT09dC55MiYmKHQueTItPXIpLHZvaWQgMCE9PXQueCYmKHQueC09YSksdm9pZCAwIT09dC55JiYodC55LT1yKSx0LnJlbGF0aXZlPSEwKSx0fSl9LHQuTk9STUFMSVpFX0hWWj1mdW5jdGlvbih0LGEscil7cmV0dXJuIHZvaWQgMD09PXQmJih0PSEwKSx2b2lkIDA9PT1hJiYoYT0hMCksdm9pZCAwPT09ciYmKHI9ITApLG4oZnVuY3Rpb24oZSxuLGksbyxzKXtpZihpc05hTihvKSYmIShlLnR5cGUmU1ZHUGF0aERhdGEuTU9WRV9UTykpdGhyb3cgbmV3IEVycm9yKFwicGF0aCBtdXN0IHN0YXJ0IHdpdGggbW92ZXRvXCIpO3JldHVybiBhJiZlLnR5cGUmU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGUueT1lLnJlbGF0aXZlPzA6aSksciYmZS50eXBlJlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGUueD1lLnJlbGF0aXZlPzA6biksdCYmZS50eXBlJlNWR1BhdGhEYXRhLkNMT1NFX1BBVEgmJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLng9ZS5yZWxhdGl2ZT9vLW46byxlLnk9ZS5yZWxhdGl2ZT9zLWk6cyksZS50eXBlJlNWR1BhdGhEYXRhLkFSQyYmKDA9PT1lLnJYfHwwPT09ZS5yWSkmJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxkZWxldGUgZS5yWCxkZWxldGUgZS5yWSxkZWxldGUgZS54Um90LGRlbGV0ZSBlLmxBcmNGbGFnLGRlbGV0ZSBlLnN3ZWVwRmxhZyksZX0pfSx0Lk5PUk1BTElaRV9TVD1yLHQuUVRfVE9fQz1lLHQuSU5GTz1uLHQuU0FOSVRJWkU9ZnVuY3Rpb24odCl7dm9pZCAwPT09dCYmKHQ9MCksYXNzZXJ0TnVtYmVycyh0KTt2YXIgYT1OYU4scj1OYU4sZT1OYU4saT1OYU47cmV0dXJuIG4oZnVuY3Rpb24obixvLHMsaCx1KXt2YXIgYz1NYXRoLmFicyxtPSExLF89MCxUPTA7aWYobi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyYmKF89aXNOYU4oYSk/MDpvLWEsVD1pc05hTihyKT8wOnMtciksbi50eXBlJihTVkdQYXRoRGF0YS5DVVJWRV9UT3xTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8pPyhhPW4ucmVsYXRpdmU/bytuLngyOm4ueDIscj1uLnJlbGF0aXZlP3Mrbi55MjpuLnkyKTooYT1OYU4scj1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTz8oZT1pc05hTihlKT9vOjIqby1lLGk9aXNOYU4oaSk/czoyKnMtaSk6bi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8/KGU9bi5yZWxhdGl2ZT9vK24ueDE6bi54MSxpPW4ucmVsYXRpdmU/cytuLnkxOm4ueTIpOihlPU5hTixpPU5hTiksbi50eXBlJlNWR1BhdGhEYXRhLkxJTkVfQ09NTUFORFN8fG4udHlwZSZTVkdQYXRoRGF0YS5BUkMmJigwPT09bi5yWHx8MD09PW4ucll8fCFuLmxBcmNGbGFnKXx8bi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPfHxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPfHxuLnR5cGUmU1ZHUGF0aERhdGEuUVVBRF9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPKXt2YXIgTz12b2lkIDA9PT1uLng/MDpuLnJlbGF0aXZlP24ueDpuLngtbyxwPXZvaWQgMD09PW4ueT8wOm4ucmVsYXRpdmU/bi55Om4ueS1zO189aXNOYU4oZSk/dm9pZCAwPT09bi54MT9fOm4ucmVsYXRpdmU/bi54Om4ueDEtbzplLW8sVD1pc05hTihpKT92b2lkIDA9PT1uLnkxP1Q6bi5yZWxhdGl2ZT9uLnk6bi55MS1zOmktczt2YXIgeT12b2lkIDA9PT1uLngyPzA6bi5yZWxhdGl2ZT9uLng6bi54Mi1vLFM9dm9pZCAwPT09bi55Mj8wOm4ucmVsYXRpdmU/bi55Om4ueTItcztjKE8pPD10JiZjKHApPD10JiZjKF8pPD10JiZjKFQpPD10JiZjKHkpPD10JiZjKFMpPD10JiYobT0hMCl9cmV0dXJuIG4udHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiZjKG8taCk8PXQmJmMocy11KTw9dCYmKG09ITApLG0/W106bn0pfSx0Lk1BVFJJWD1pLHQuUk9UQVRFPWZ1bmN0aW9uKHQsYSxyKXt2b2lkIDA9PT1hJiYoYT0wKSx2b2lkIDA9PT1yJiYocj0wKSxhc3NlcnROdW1iZXJzKHQsYSxyKTt2YXIgZT1NYXRoLnNpbih0KSxuPU1hdGguY29zKHQpO3JldHVybiBpKG4sZSwtZSxuLGEtYSpuK3IqZSxyLWEqZS1yKm4pfSx0LlRSQU5TTEFURT1mdW5jdGlvbih0LGEpe3JldHVybiB2b2lkIDA9PT1hJiYoYT0wKSxhc3NlcnROdW1iZXJzKHQsYSksaSgxLDAsMCwxLHQsYSl9LHQuU0NBTEU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdm9pZCAwPT09YSYmKGE9dCksYXNzZXJ0TnVtYmVycyh0LGEpLGkodCwwLDAsYSwwLDApfSx0LlNLRVdfWD1mdW5jdGlvbih0KXtyZXR1cm4gYXNzZXJ0TnVtYmVycyh0KSxpKDEsMCxNYXRoLmF0YW4odCksMSwwLDApfSx0LlNLRVdfWT1mdW5jdGlvbih0KXtyZXR1cm4gYXNzZXJ0TnVtYmVycyh0KSxpKDEsTWF0aC5hdGFuKHQpLDAsMSwwLDApfSx0LlhfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYXNzZXJ0TnVtYmVycyh0KSxpKC0xLDAsMCwxLHQsMCl9LHQuWV9BWElTX1NZTU1FVFJZPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpLGkoMSwwLDAsLTEsMCx0KX0sdC5BX1RPX0M9ZnVuY3Rpb24oKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIFNWR1BhdGhEYXRhLkFSQz09PXQudHlwZT9hMmModCx0LnJlbGF0aXZlPzA6YSx0LnJlbGF0aXZlPzA6cik6dH0pfSx0LkFOTk9UQVRFX0FSQ1M9ZnVuY3Rpb24oKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmUmJihhPTAscj0wKSxTVkdQYXRoRGF0YS5BUkM9PT10LnR5cGUmJmFubm90YXRlQXJjQ29tbWFuZCh0LGEsciksdH0pfSx0LkNMT05FPW8sdC5DQUxDVUxBVEVfQk9VTkRTPWZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24odCl7dmFyIGE9e307Zm9yKHZhciByIGluIHQpYVtyXT10W3JdO3JldHVybiBhfSxpPWEoKSxvPWUoKSxzPXIoKSxoPW4oZnVuY3Rpb24oYSxyLGUpe3ZhciBuPXMobyhpKHQoYSkpKSk7ZnVuY3Rpb24gdSh0KXt0PmgubWF4WCYmKGgubWF4WD10KSx0PGgubWluWCYmKGgubWluWD10KX1mdW5jdGlvbiBjKHQpe3Q+aC5tYXhZJiYoaC5tYXhZPXQpLHQ8aC5taW5ZJiYoaC5taW5ZPXQpfWlmKG4udHlwZSZTVkdQYXRoRGF0YS5EUkFXSU5HX0NPTU1BTkRTJiYodShyKSxjKGUpKSxuLnR5cGUmU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyYmdShuLngpLG4udHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJmMobi55KSxuLnR5cGUmU1ZHUGF0aERhdGEuTElORV9UTyYmKHUobi54KSxjKG4ueSkpLG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UTyl7dShuLngpLGMobi55KTtmb3IodmFyIG09MCxfPWJlemllclJvb3QocixuLngxLG4ueDIsbi54KTttPF8ubGVuZ3RoO20rKykwPChHPV9bbV0pJiYxPkcmJnUoYmV6aWVyQXQocixuLngxLG4ueDIsbi54LEcpKTtmb3IodmFyIFQ9MCxPPWJlemllclJvb3QoZSxuLnkxLG4ueTIsbi55KTtUPE8ubGVuZ3RoO1QrKykwPChHPU9bVF0pJiYxPkcmJmMoYmV6aWVyQXQoZSxuLnkxLG4ueTIsbi55LEcpKX1pZihuLnR5cGUmU1ZHUGF0aERhdGEuQVJDKXt1KG4ueCksYyhuLnkpLGFubm90YXRlQXJjQ29tbWFuZChuLHIsZSk7Zm9yKHZhciBwPW4ueFJvdC8xODAqTWF0aC5QSSx5PU1hdGguY29zKHApKm4uclgsUz1NYXRoLnNpbihwKSpuLnJYLGY9LU1hdGguc2luKHApKm4uclksVj1NYXRoLmNvcyhwKSpuLnJZLE49bi5waGkxPG4ucGhpMj9bbi5waGkxLG4ucGhpMl06LTE4MD5uLnBoaTI/W24ucGhpMiszNjAsbi5waGkxKzM2MF06W24ucGhpMixuLnBoaTFdLEQ9TlswXSxQPU5bMV0sbD1mdW5jdGlvbih0KXt2YXIgYT10WzBdLHI9dFsxXSxlPTE4MCpNYXRoLmF0YW4yKHIsYSkvTWF0aC5QSTtyZXR1cm4gZTxEP2UrMzYwOmV9LHY9MCxFPWludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKGYsLXksMCkubWFwKGwpO3Y8RS5sZW5ndGg7disrKShHPUVbdl0pPkQmJkc8UCYmdShhcmNBdChuLmNYLHksZixHKSk7Zm9yKHZhciBBPTAsZD1pbnRlcnNlY3Rpb25Vbml0Q2lyY2xlTGluZShWLC1TLDApLm1hcChsKTtBPGQubGVuZ3RoO0ErKyl7dmFyIEc7KEc9ZFtBXSk+RCYmRzxQJiZjKGFyY0F0KG4uY1ksUyxWLEcpKX19cmV0dXJuIGF9KTtyZXR1cm4gaC5taW5YPTEvMCxoLm1heFg9LTEvMCxoLm1pblk9MS8wLGgubWF4WT0tMS8wLGh9fShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyfHwoU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcj17fSkpO3ZhciBfYSxfYSQxLFRyYW5zZm9ybWFibGVTVkc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnByb3RvdHlwZS5yb3VuZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ST1VORCh0KSl9LHQucHJvdG90eXBlLnRvQWJzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuVE9fQUJTKCkpfSx0LnByb3RvdHlwZS50b1JlbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRPX1JFTCgpKX0sdC5wcm90b3R5cGUubm9ybWFsaXplSFZaPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5OT1JNQUxJWkVfSFZaKHQsYSxyKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZVNUPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTk9STUFMSVpFX1NUKCkpfSx0LnByb3RvdHlwZS5xdFRvQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlFUX1RPX0MoKSl9LHQucHJvdG90eXBlLmFUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5BX1RPX0MoKSl9LHQucHJvdG90eXBlLnNhbml0aXplPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNBTklUSVpFKHQpKX0sdC5wcm90b3R5cGUudHJhbnNsYXRlPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuVFJBTlNMQVRFKHQsYSkpfSx0LnByb3RvdHlwZS5zY2FsZT1mdW5jdGlvbih0LGEpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNDQUxFKHQsYSkpfSx0LnByb3RvdHlwZS5yb3RhdGU9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlJPVEFURSh0LGEscikpfSx0LnByb3RvdHlwZS5tYXRyaXg9ZnVuY3Rpb24odCxhLHIsZSxuLGkpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk1BVFJJWCh0LGEscixlLG4saSkpfSx0LnByb3RvdHlwZS5za2V3WD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TS0VXX1godCkpfSx0LnByb3RvdHlwZS5za2V3WT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TS0VXX1kodCkpfSx0LnByb3RvdHlwZS54U3ltbWV0cnk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuWF9BWElTX1NZTU1FVFJZKHQpKX0sdC5wcm90b3R5cGUueVN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLllfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLmFubm90YXRlQXJjcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkFOTk9UQVRFX0FSQ1MoKSl9LHR9KCksaXNXaGl0ZVNwYWNlPWZ1bmN0aW9uKHQpe3JldHVyblwiIFwiPT09dHx8XCJcXHRcIj09PXR8fFwiXFxyXCI9PT10fHxcIlxcblwiPT09dH0saXNEaWdpdD1mdW5jdGlvbih0KXtyZXR1cm5cIjBcIi5jaGFyQ29kZUF0KDApPD10LmNoYXJDb2RlQXQoMCkmJnQuY2hhckNvZGVBdCgwKTw9XCI5XCIuY2hhckNvZGVBdCgwKX0sU1ZHUGF0aERhdGFQYXJzZXIkJDE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gYSgpe3ZhciBhPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gYS5jdXJOdW1iZXI9XCJcIixhLmN1ckNvbW1hbmRUeXBlPS0xLGEuY3VyQ29tbWFuZFJlbGF0aXZlPSExLGEuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCxhLmN1ck51bWJlckhhc0V4cD0hMSxhLmN1ck51bWJlckhhc0V4cERpZ2l0cz0hMSxhLmN1ck51bWJlckhhc0RlY2ltYWw9ITEsYS5jdXJBcmdzPVtdLGF9cmV0dXJuIF9fZXh0ZW5kcyhhLHQpLGEucHJvdG90eXBlLmZpbmlzaD1mdW5jdGlvbih0KXtpZih2b2lkIDA9PT10JiYodD1bXSksdGhpcy5wYXJzZShcIiBcIix0KSwwIT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8IXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbnRlcm1pbmF0ZWQgY29tbWFuZCBhdCB0aGUgcGF0aCBlbmQuXCIpO3JldHVybiB0fSxhLnByb3RvdHlwZS5wYXJzZT1mdW5jdGlvbih0LGEpe3ZhciByPXRoaXM7dm9pZCAwPT09YSYmKGE9W10pO2Zvcih2YXIgZT1mdW5jdGlvbih0KXthLnB1c2godCksci5jdXJBcmdzLmxlbmd0aD0wLHIuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMH0sbj0wO248dC5sZW5ndGg7bisrKXt2YXIgaT10W25dO2lmKGlzRGlnaXQoaSkpdGhpcy5jdXJOdW1iZXIrPWksdGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9dGhpcy5jdXJOdW1iZXJIYXNFeHA7ZWxzZSBpZihcImVcIiE9PWkmJlwiRVwiIT09aSlpZihcIi1cIiE9PWkmJlwiK1wiIT09aXx8IXRoaXMuY3VyTnVtYmVySGFzRXhwfHx0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cylpZihcIi5cIiE9PWl8fHRoaXMuY3VyTnVtYmVySGFzRXhwfHx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWwpe2lmKHRoaXMuY3VyTnVtYmVyJiYtMSE9PXRoaXMuY3VyQ29tbWFuZFR5cGUpe3ZhciBvPU51bWJlcih0aGlzLmN1ck51bWJlcik7aWYoaXNOYU4obykpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiSW52YWxpZCBudW1iZXIgZW5kaW5nIGF0IFwiK24pO2lmKHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5BUkMpaWYoMD09PXRoaXMuY3VyQXJncy5sZW5ndGh8fDE9PT10aGlzLmN1ckFyZ3MubGVuZ3RoKXtpZigwPm8pdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBudW1iZXIsIGdvdCBcIicrbysnXCIgYXQgaW5kZXggXCInK24rJ1wiJyl9ZWxzZSBpZigoMz09PXRoaXMuY3VyQXJncy5sZW5ndGh8fDQ9PT10aGlzLmN1ckFyZ3MubGVuZ3RoKSYmXCIwXCIhPT10aGlzLmN1ck51bWJlciYmXCIxXCIhPT10aGlzLmN1ck51bWJlcil0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0V4cGVjdGVkIGEgZmxhZywgZ290IFwiJyt0aGlzLmN1ck51bWJlcisnXCIgYXQgaW5kZXggXCInK24rJ1wiJyk7dGhpcy5jdXJBcmdzLnB1c2gobyksdGhpcy5jdXJBcmdzLmxlbmd0aD09PUNPTU1BTkRfQVJHX0NPVU5UU1t0aGlzLmN1ckNvbW1hbmRUeXBlXSYmKFNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlP2Uoe3R5cGU6U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4Om99KTpTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlP2Uoe3R5cGU6U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHk6b30pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5NT1ZFX1RPfHx0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuTElORV9UT3x8dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPPyhlKHt0eXBlOnRoaXMuY3VyQ29tbWFuZFR5cGUscmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDp0aGlzLmN1ckFyZ3NbMF0seTp0aGlzLmN1ckFyZ3NbMV19KSxTVkdQYXRoRGF0YS5NT1ZFX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZSYmKHRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuTElORV9UTykpOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5DVVJWRV9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLkNVUlZFX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgxOnRoaXMuY3VyQXJnc1swXSx5MTp0aGlzLmN1ckFyZ3NbMV0seDI6dGhpcy5jdXJBcmdzWzJdLHkyOnRoaXMuY3VyQXJnc1szXSx4OnRoaXMuY3VyQXJnc1s0XSx5OnRoaXMuY3VyQXJnc1s1XX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDI6dGhpcy5jdXJBcmdzWzBdLHkyOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5RVUFEX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuUVVBRF9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4MTp0aGlzLmN1ckFyZ3NbMF0seTE6dGhpcy5jdXJBcmdzWzFdLHg6dGhpcy5jdXJBcmdzWzJdLHk6dGhpcy5jdXJBcmdzWzNdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkFSQyYmZSh7dHlwZTpTVkdQYXRoRGF0YS5BUkMscmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUsclg6dGhpcy5jdXJBcmdzWzBdLHJZOnRoaXMuY3VyQXJnc1sxXSx4Um90OnRoaXMuY3VyQXJnc1syXSxsQXJjRmxhZzp0aGlzLmN1ckFyZ3NbM10sc3dlZXBGbGFnOnRoaXMuY3VyQXJnc1s0XSx4OnRoaXMuY3VyQXJnc1s1XSx5OnRoaXMuY3VyQXJnc1s2XX0pKSx0aGlzLmN1ck51bWJlcj1cIlwiLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPSExLHRoaXMuY3VyTnVtYmVySGFzRXhwPSExLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD0hMSx0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9aWYoIWlzV2hpdGVTcGFjZShpKSlpZihcIixcIj09PWkmJnRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITE7ZWxzZSBpZihcIitcIiE9PWkmJlwiLVwiIT09aSYmXCIuXCIhPT1pKXtpZigwIT09dGhpcy5jdXJBcmdzLmxlbmd0aCl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbnRlcm1pbmF0ZWQgY29tbWFuZCBhdCBpbmRleCBcIituK1wiLlwiKTtpZighdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXIgXCInK2krJ1wiIGF0IGluZGV4ICcrbitcIi4gQ29tbWFuZCBjYW5ub3QgZm9sbG93IGNvbW1hXCIpO2lmKHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMSxcInpcIiE9PWkmJlwiWlwiIT09aSlpZihcImhcIj09PWl8fFwiSFwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJoXCI9PT1pO2Vsc2UgaWYoXCJ2XCI9PT1pfHxcIlZcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJ2XCI9PT1pO2Vsc2UgaWYoXCJtXCI9PT1pfHxcIk1cIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5NT1ZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibVwiPT09aTtlbHNlIGlmKFwibFwiPT09aXx8XCJMXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImxcIj09PWk7ZWxzZSBpZihcImNcIj09PWl8fFwiQ1wiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiY1wiPT09aTtlbHNlIGlmKFwic1wiPT09aXx8XCJTXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwic1wiPT09aTtlbHNlIGlmKFwicVwiPT09aXx8XCJRXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInFcIj09PWk7ZWxzZSBpZihcInRcIj09PWl8fFwiVFwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwidFwiPT09aTtlbHNle2lmKFwiYVwiIT09aSYmXCJBXCIhPT1pKXRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXIgXCInK2krJ1wiIGF0IGluZGV4ICcrbitcIi5cIik7dGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5BUkMsdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJhXCI9PT1pfWVsc2UgYS5wdXNoKHt0eXBlOlNWR1BhdGhEYXRhLkNMT1NFX1BBVEh9KSx0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITAsdGhpcy5jdXJDb21tYW5kVHlwZT0tMX1lbHNlIHRoaXMuY3VyTnVtYmVyPWksdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPVwiLlwiPT09aX1lbHNlIHRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD0hMDtlbHNlIHRoaXMuY3VyTnVtYmVyKz1pO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPWksdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITB9cmV0dXJuIGF9LGEucHJvdG90eXBlLnRyYW5zZm9ybT1mdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmNyZWF0ZSh0aGlzLHtwYXJzZTp7dmFsdWU6ZnVuY3Rpb24oYSxyKXt2b2lkIDA9PT1yJiYocj1bXSk7Zm9yKHZhciBlPTAsbj1PYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykucGFyc2UuY2FsbCh0aGlzLGEpO2U8bi5sZW5ndGg7ZSsrKXt2YXIgaT1uW2VdLG89dChpKTtBcnJheS5pc0FycmF5KG8pP3IucHVzaC5hcHBseShyLG8pOnIucHVzaChvKX1yZXR1cm4gcn19fSl9LGF9KFRyYW5zZm9ybWFibGVTVkcpLFNWR1BhdGhEYXRhPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEocil7dmFyIGU9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBlLmNvbW1hbmRzPVwic3RyaW5nXCI9PXR5cGVvZiByP2EucGFyc2Uocik6cixlfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5lbmNvZGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5lbmNvZGUodGhpcy5jb21tYW5kcyl9LGEucHJvdG90eXBlLmdldEJvdW5kcz1mdW5jdGlvbigpe3ZhciB0PVNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQ0FMQ1VMQVRFX0JPVU5EUygpO3JldHVybiB0aGlzLnRyYW5zZm9ybSh0KSx0fSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7Zm9yKHZhciBhPVtdLHI9MCxlPXRoaXMuY29tbWFuZHM7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXQoZVtyXSk7QXJyYXkuaXNBcnJheShuKT9hLnB1c2guYXBwbHkoYSxuKTphLnB1c2gobil9cmV0dXJuIHRoaXMuY29tbWFuZHM9YSx0aGlzfSxhLmVuY29kZT1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlU1ZHUGF0aCQkMSh0KX0sYS5wYXJzZT1mdW5jdGlvbih0KXt2YXIgYT1uZXcgU1ZHUGF0aERhdGFQYXJzZXIkJDEscj1bXTtyZXR1cm4gYS5wYXJzZSh0LHIpLGEuZmluaXNoKHIpLHJ9LGEuQ0xPU0VfUEFUSD0xLGEuTU9WRV9UTz0yLGEuSE9SSVpfTElORV9UTz00LGEuVkVSVF9MSU5FX1RPPTgsYS5MSU5FX1RPPTE2LGEuQ1VSVkVfVE89MzIsYS5TTU9PVEhfQ1VSVkVfVE89NjQsYS5RVUFEX1RPPTEyOCxhLlNNT09USF9RVUFEX1RPPTI1NixhLkFSQz01MTIsYS5MSU5FX0NPTU1BTkRTPWEuTElORV9UT3xhLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE8sYS5EUkFXSU5HX0NPTU1BTkRTPWEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UT3xhLkxJTkVfVE98YS5DVVJWRV9UT3xhLlNNT09USF9DVVJWRV9UT3xhLlFVQURfVE98YS5TTU9PVEhfUVVBRF9UT3xhLkFSQyxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxDT01NQU5EX0FSR19DT1VOVFM9KChfYT17fSlbU1ZHUGF0aERhdGEuTU9WRV9UT109MixfYVtTVkdQYXRoRGF0YS5MSU5FX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE9dPTEsX2FbU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPXT0xLF9hW1NWR1BhdGhEYXRhLkNMT1NFX1BBVEhdPTAsX2FbU1ZHUGF0aERhdGEuUVVBRF9UT109NCxfYVtTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UT109MixfYVtTVkdQYXRoRGF0YS5DVVJWRV9UT109NixfYVtTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE9dPTQsX2FbU1ZHUGF0aERhdGEuQVJDXT03LF9hKSxXU1A9XCIgXCI7ZnVuY3Rpb24gZW5jb2RlU1ZHUGF0aCQkMSh0KXt2YXIgYT1cIlwiO0FycmF5LmlzQXJyYXkodCl8fCh0PVt0XSk7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBlPXRbcl07aWYoZS50eXBlPT09U1ZHUGF0aERhdGEuQ0xPU0VfUEFUSClhKz1cInpcIjtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJoXCI6XCJIXCIpK2UueDtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLlZFUlRfTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cInZcIjpcIlZcIikrZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuTU9WRV9UTylhKz0oZS5yZWxhdGl2ZT9cIm1cIjpcIk1cIikrZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5MSU5FX1RPKWErPShlLnJlbGF0aXZlP1wibFwiOlwiTFwiKStlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLkNVUlZFX1RPKWErPShlLnJlbGF0aXZlP1wiY1wiOlwiQ1wiKStlLngxK1dTUCtlLnkxK1dTUCtlLngyK1dTUCtlLnkyK1dTUCtlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTylhKz0oZS5yZWxhdGl2ZT9cInNcIjpcIlNcIikrZS54MitXU1ArZS55MitXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5RVUFEX1RPKWErPShlLnJlbGF0aXZlP1wicVwiOlwiUVwiKStlLngxK1dTUCtlLnkxK1dTUCtlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPKWErPShlLnJlbGF0aXZlP1widFwiOlwiVFwiKStlLngrV1NQK2UueTtlbHNle2lmKGUudHlwZSE9PVNWR1BhdGhEYXRhLkFSQyl0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29tbWFuZCB0eXBlIFwiJytlLnR5cGUrJ1wiIGF0IGluZGV4ICcrcitcIi5cIik7YSs9KGUucmVsYXRpdmU/XCJhXCI6XCJBXCIpK2UuclgrV1NQK2UuclkrV1NQK2UueFJvdCtXU1ArICtlLmxBcmNGbGFnK1dTUCsgK2Uuc3dlZXBGbGFnK1dTUCtlLngrV1NQK2UueX19cmV0dXJuIGF9dmFyIFNWR1BhdGhEYXRhJDE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gYShyKXt2YXIgZT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGUuY29tbWFuZHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/YS5wYXJzZShyKTpyLGV9cmV0dXJuIF9fZXh0ZW5kcyhhLHQpLGEucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbigpe3JldHVybiBhLmVuY29kZSh0aGlzLmNvbW1hbmRzKX0sYS5wcm90b3R5cGUuZ2V0Qm91bmRzPWZ1bmN0aW9uKCl7dmFyIHQ9U1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5DQUxDVUxBVEVfQk9VTkRTKCk7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHQpLHR9LGEucHJvdG90eXBlLnRyYW5zZm9ybT1mdW5jdGlvbih0KXtmb3IodmFyIGE9W10scj0wLGU9dGhpcy5jb21tYW5kcztyPGUubGVuZ3RoO3IrKyl7dmFyIG49dChlW3JdKTtBcnJheS5pc0FycmF5KG4pP2EucHVzaC5hcHBseShhLG4pOmEucHVzaChuKX1yZXR1cm4gdGhpcy5jb21tYW5kcz1hLHRoaXN9LGEuZW5jb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBlbmNvZGVTVkdQYXRoJCQxKHQpfSxhLnBhcnNlPWZ1bmN0aW9uKHQpe3ZhciBhPW5ldyBTVkdQYXRoRGF0YVBhcnNlciQkMSxyPVtdO3JldHVybiBhLnBhcnNlKHQsciksYS5maW5pc2gocikscn0sYS5DTE9TRV9QQVRIPTEsYS5NT1ZFX1RPPTIsYS5IT1JJWl9MSU5FX1RPPTQsYS5WRVJUX0xJTkVfVE89OCxhLkxJTkVfVE89MTYsYS5DVVJWRV9UTz0zMixhLlNNT09USF9DVVJWRV9UTz02NCxhLlFVQURfVE89MTI4LGEuU01PT1RIX1FVQURfVE89MjU2LGEuQVJDPTUxMixhLkxJTkVfQ09NTUFORFM9YS5MSU5FX1RPfGEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UTyxhLkRSQVdJTkdfQ09NTUFORFM9YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPfGEuTElORV9UT3xhLkNVUlZFX1RPfGEuU01PT1RIX0NVUlZFX1RPfGEuUVVBRF9UT3xhLlNNT09USF9RVUFEX1RPfGEuQVJDLGF9KFRyYW5zZm9ybWFibGVTVkcpLENPTU1BTkRfQVJHX0NPVU5UUyQxPSgoX2EkMT17fSlbU1ZHUGF0aERhdGEkMS5NT1ZFX1RPXT0yLF9hJDFbU1ZHUGF0aERhdGEkMS5MSU5FX1RPXT0yLF9hJDFbU1ZHUGF0aERhdGEkMS5IT1JJWl9MSU5FX1RPXT0xLF9hJDFbU1ZHUGF0aERhdGEkMS5WRVJUX0xJTkVfVE9dPTEsX2EkMVtTVkdQYXRoRGF0YSQxLkNMT1NFX1BBVEhdPTAsX2EkMVtTVkdQYXRoRGF0YSQxLlFVQURfVE9dPTQsX2EkMVtTVkdQYXRoRGF0YSQxLlNNT09USF9RVUFEX1RPXT0yLF9hJDFbU1ZHUGF0aERhdGEkMS5DVVJWRV9UT109NixfYSQxW1NWR1BhdGhEYXRhJDEuU01PT1RIX0NVUlZFX1RPXT00LF9hJDFbU1ZHUGF0aERhdGEkMS5BUkNdPTcsX2EkMSk7ZXhwb3J0e1NWR1BhdGhEYXRhJDEgYXMgU1ZHUGF0aERhdGEsQ09NTUFORF9BUkdfQ09VTlRTJDEgYXMgQ09NTUFORF9BUkdfQ09VTlRTLGVuY29kZVNWR1BhdGgkJDEgYXMgZW5jb2RlU1ZHUGF0aCxTVkdQYXRoRGF0YVBhcnNlciQkMSBhcyBTVkdQYXRoRGF0YVBhcnNlcixTVkdQYXRoRGF0YVRyYW5zZm9ybWVyfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNWR1BhdGhEYXRhLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB0b1BhdGggZnJvbSAnLi90b1BhdGgnO1xuaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuaW1wb3J0IHZhbGlkIGZyb20gJy4vdmFsaWQnO1xuXG5leHBvcnQgeyB0b1BhdGgsIHRvUG9pbnRzLCB2YWxpZCB9OyIsImltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcblxudmFyIHBvaW50c1RvRCA9IGZ1bmN0aW9uIHBvaW50c1RvRChwKSB7XG4gIHZhciBkID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGZpcnN0UG9pbnQgPSB2b2lkIDA7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwb2ludCA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIF9wb2ludCRjdXJ2ZSA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgIGN1cnZlID0gX3BvaW50JGN1cnZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wb2ludCRjdXJ2ZSxcbiAgICAgICAgICBtb3ZlVG8gPSBwb2ludC5tb3ZlVG8sXG4gICAgICAgICAgeCA9IHBvaW50LngsXG4gICAgICAgICAgeSA9IHBvaW50Lnk7XG5cbiAgICAgIHZhciBpc0ZpcnN0UG9pbnQgPSBpID09PSAwIHx8IG1vdmVUbztcbiAgICAgIHZhciBpc0xhc3RQb2ludCA9IGkgPT09IHAubGVuZ3RoIC0gMSB8fCBwW2kgKyAxXS5tb3ZlVG87XG4gICAgICB2YXIgcHJldlBvaW50ID0gaSA9PT0gMCA/IG51bGwgOiBwW2kgLSAxXTtcblxuICAgICAgaWYgKGlzRmlyc3RQb2ludCkge1xuICAgICAgICBmaXJzdFBvaW50ID0gcG9pbnQ7XG5cbiAgICAgICAgaWYgKCFpc0xhc3RQb2ludCkge1xuICAgICAgICAgIGQgKz0gJ00nICsgeCArICcsJyArIHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VydmUpIHtcbiAgICAgICAgc3dpdGNoIChjdXJ2ZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYXJjJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUyID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRsYXJnZUFyID0gX3BvaW50JGN1cnZlMi5sYXJnZUFyY0ZsYWcsXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnID0gX3BvaW50JGN1cnZlMiRsYXJnZUFyID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRsYXJnZUFyLFxuICAgICAgICAgICAgICAgIHJ4ID0gX3BvaW50JGN1cnZlMi5yeCxcbiAgICAgICAgICAgICAgICByeSA9IF9wb2ludCRjdXJ2ZTIucnksXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRzd2VlcEZsID0gX3BvaW50JGN1cnZlMi5zd2VlcEZsYWcsXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnID0gX3BvaW50JGN1cnZlMiRzd2VlcEZsID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRzd2VlcEZsLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9IF9wb2ludCRjdXJ2ZTIueEF4aXNSb3RhdGlvbixcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uID0gX3BvaW50JGN1cnZlMiR4QXhpc1JvID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiR4QXhpc1JvO1xuXG4gICAgICAgICAgICBkICs9ICdBJyArIHJ4ICsgJywnICsgcnkgKyAnLCcgKyB4QXhpc1JvdGF0aW9uICsgJywnICsgbGFyZ2VBcmNGbGFnICsgJywnICsgc3dlZXBGbGFnICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjdWJpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMyA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIGN4MSA9IF9wb2ludCRjdXJ2ZTMueDEsXG4gICAgICAgICAgICAgICAgY3kxID0gX3BvaW50JGN1cnZlMy55MSxcbiAgICAgICAgICAgICAgICBjeDIgPSBfcG9pbnQkY3VydmUzLngyLFxuICAgICAgICAgICAgICAgIGN5MiA9IF9wb2ludCRjdXJ2ZTMueTI7XG5cbiAgICAgICAgICAgIGQgKz0gJ0MnICsgY3gxICsgJywnICsgY3kxICsgJywnICsgY3gyICsgJywnICsgY3kyICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdxdWFkcmF0aWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTQgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBxeDEgPSBfcG9pbnQkY3VydmU0LngxLFxuICAgICAgICAgICAgICAgIHF5MSA9IF9wb2ludCRjdXJ2ZTQueTE7XG5cbiAgICAgICAgICAgIGQgKz0gJ1EnICsgcXgxICsgJywnICsgcXkxICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgICAgZCArPSAnWic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICBkICs9ICdaJztcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LnggJiYgeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnTCcgKyB4ICsgJywnICsgeTtcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LngpIHtcbiAgICAgICAgZCArPSAnSCcgKyB4O1xuICAgICAgfSBlbHNlIGlmICh5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdWJyArIHk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGQ7XG59O1xuXG52YXIgdG9QYXRoID0gZnVuY3Rpb24gdG9QYXRoKHMpIHtcbiAgdmFyIGlzUG9pbnRzID0gQXJyYXkuaXNBcnJheShzKTtcbiAgdmFyIGlzR3JvdXAgPSBpc1BvaW50cyA/IEFycmF5LmlzQXJyYXkoc1swXSkgOiBzLnR5cGUgPT09ICdnJztcbiAgdmFyIHBvaW50cyA9IGlzUG9pbnRzID8gcyA6IGlzR3JvdXAgPyBzLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHNocCkge1xuICAgIHJldHVybiB0b1BvaW50cyhzaHApO1xuICB9KSA6IHRvUG9pbnRzKHMpO1xuXG4gIGlmIChpc0dyb3VwKSB7XG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwb2ludHNUb0QocCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzVG9EKHBvaW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdG9Qb2ludHMgPSBmdW5jdGlvbiB0b1BvaW50cyhfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyd0eXBlJ10pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUNpcmNsZShwcm9wcyk7XG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUVsbGlwc2UocHJvcHMpO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21MaW5lKHByb3BzKTtcbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUGF0aChwcm9wcyk7XG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlnb24ocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0KHByb3BzKTtcbiAgICBjYXNlICdnJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRyhwcm9wcyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgc2hhcGUgdHlwZScpO1xuICB9XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUNpcmNsZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21DaXJjbGUoX3JlZjIpIHtcbiAgdmFyIGN4ID0gX3JlZjIuY3gsXG4gICAgICBjeSA9IF9yZWYyLmN5LFxuICAgICAgciA9IF9yZWYyLnI7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHIsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUVsbGlwc2UgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRWxsaXBzZShfcmVmMykge1xuICB2YXIgY3ggPSBfcmVmMy5jeCxcbiAgICAgIGN5ID0gX3JlZjMuY3ksXG4gICAgICByeCA9IF9yZWYzLnJ4LFxuICAgICAgcnkgPSBfcmVmMy5yeTtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gcnksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tTGluZShfcmVmNCkge1xuICB2YXIgeDEgPSBfcmVmNC54MSxcbiAgICAgIHgyID0gX3JlZjQueDIsXG4gICAgICB5MSA9IF9yZWY0LnkxLFxuICAgICAgeTIgPSBfcmVmNC55MjtcblxuICByZXR1cm4gW3sgeDogeDEsIHk6IHkxLCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4MiwgeTogeTIgfV07XG59O1xuXG52YXIgdmFsaWRDb21tYW5kcyA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdL2c7XG5cbnZhciBjb21tYW5kTGVuZ3RocyA9IHtcbiAgQTogNyxcbiAgQzogNixcbiAgSDogMSxcbiAgTDogMixcbiAgTTogMixcbiAgUTogNCxcbiAgUzogNCxcbiAgVDogMixcbiAgVjogMSxcbiAgWjogMFxufTtcblxudmFyIHJlbGF0aXZlQ29tbWFuZHMgPSBbJ2EnLCAnYycsICdoJywgJ2wnLCAnbScsICdxJywgJ3MnLCAndCcsICd2J107XG5cbnZhciBpc1JlbGF0aXZlID0gZnVuY3Rpb24gaXNSZWxhdGl2ZShjb21tYW5kKSB7XG4gIHJldHVybiByZWxhdGl2ZUNvbW1hbmRzLmluZGV4T2YoY29tbWFuZCkgIT09IC0xO1xufTtcblxudmFyIG9wdGlvbmFsQXJjS2V5cyA9IFsneEF4aXNSb3RhdGlvbicsICdsYXJnZUFyY0ZsYWcnLCAnc3dlZXBGbGFnJ107XG5cbnZhciBnZXRDb21tYW5kcyA9IGZ1bmN0aW9uIGdldENvbW1hbmRzKGQpIHtcbiAgcmV0dXJuIGQubWF0Y2godmFsaWRDb21tYW5kcyk7XG59O1xuXG52YXIgZ2V0UGFyYW1zID0gZnVuY3Rpb24gZ2V0UGFyYW1zKGQpIHtcbiAgcmV0dXJuIGQuc3BsaXQodmFsaWRDb21tYW5kcykubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvWzAtOV0rLS9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0uc2xpY2UoMCwgLTEpICsgJyAtJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvXFwuWzAtOV0rL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbSArICcgJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5sZW5ndGggPiAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5zcGxpdCgvWyAsXSsvKS5tYXAocGFyc2VGbG9hdCkuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKG4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUGF0aCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21QYXRoKF9yZWY1KSB7XG4gIHZhciBkID0gX3JlZjUuZDtcblxuICB2YXIgY29tbWFuZHMgPSBnZXRDb21tYW5kcyhkKTtcbiAgdmFyIHBhcmFtcyA9IGdldFBhcmFtcyhkKTtcblxuICB2YXIgcG9pbnRzID0gW107XG5cbiAgdmFyIG1vdmVUbyA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbaV07XG4gICAgdmFyIHVwcGVyQ2FzZUNvbW1hbmQgPSBjb21tYW5kLnRvVXBwZXJDYXNlKCk7XG4gICAgdmFyIGNvbW1hbmRMZW5ndGggPSBjb21tYW5kTGVuZ3Roc1t1cHBlckNhc2VDb21tYW5kXTtcbiAgICB2YXIgcmVsYXRpdmUgPSBpc1JlbGF0aXZlKGNvbW1hbmQpO1xuXG4gICAgaWYgKGNvbW1hbmRMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY29tbWFuZFBhcmFtcyA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb21tYW5kUGFyYW1zLmxlbmd0aCAvIGNvbW1hbmRMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlcmF0aW9uczsgaisrKSB7XG4gICAgICAgIHZhciBwcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHN3aXRjaCAodXBwZXJDYXNlQ29tbWFuZCkge1xuICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgdmFyIHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICBtb3ZlVG8gPSB7IHg6IHgsIHk6IHkgfTtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiBwcmV2UG9pbnQueVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHByZXZQb2ludC54LFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJjJyxcbiAgICAgICAgICAgICAgICByeDogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHJ5OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbjogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gb3B0aW9uYWxBcmNLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3ViaWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHgyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgdmFyIHN4MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgZGlmZiA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgc3gxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHN5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ2N1YmljJykge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDIgPyBwcmV2UG9pbnQueCAtIGRpZmYueCA6IHByZXZQb2ludC54ICsgZGlmZi54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MiA/IHByZXZQb2ludC55IC0gZGlmZi55IDogcHJldlBvaW50LnkgKyBkaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhzeCAtIHN4Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHN5IC0gc3kyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdjdWJpYycsIHgxOiBzeDEsIHkxOiBzeTEsIHgyOiBzeDIsIHkyOiBzeTIgfSwgeDogc3gsIHk6IHN5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdxdWFkcmF0aWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgdmFyIHR4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB0eSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciB0eDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdHkxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAncXVhZHJhdGljJykge1xuICAgICAgICAgICAgICB2YXIgX2RpZmYgPSB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDEpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkxKVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngxID8gcHJldlBvaW50LnggLSBfZGlmZi54IDogcHJldlBvaW50LnggKyBfZGlmZi54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MSA/IHByZXZQb2ludC55IC0gX2RpZmYueSA6IHByZXZQb2ludC55ICsgX2RpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAncXVhZHJhdGljJywgeDE6IHR4MSwgeTE6IHR5MSB9LCB4OiB0eCwgeTogdHkgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKF9wcmV2UG9pbnQueCAhPT0gbW92ZVRvLnggfHwgX3ByZXZQb2ludC55ICE9PSBtb3ZlVG8ueSkge1xuICAgICAgICBwb2ludHMucHVzaCh7IHg6IG1vdmVUby54LCB5OiBtb3ZlVG8ueSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5Z29uID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlnb24oX3JlZjYpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY2LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogdHJ1ZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlsaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKF9yZWY3KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNy5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IGZhbHNlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9pbnRzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvaW50cyhfcmVmOCkge1xuICB2YXIgY2xvc2VkID0gX3JlZjguY2xvc2VkLFxuICAgICAgcG9pbnRzID0gX3JlZjgucG9pbnRzO1xuXG4gIHZhciBudW1iZXJzID0gcG9pbnRzLnNwbGl0KC9bXFxzLF0rLykubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobik7XG4gIH0pO1xuXG4gIHZhciBwID0gbnVtYmVycy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcG9pbnQsIGkpIHtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIGFyci5wdXNoKHsgeDogcG9pbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyclsoaSAtIDEpIC8gMl0ueSA9IHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH0sIFtdKTtcblxuICBpZiAoY2xvc2VkKSB7XG4gICAgcC5wdXNoKF9leHRlbmRzKHt9LCBwWzBdKSk7XG4gIH1cblxuICBwWzBdLm1vdmVUbyA9IHRydWU7XG5cbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdChfcmVmOSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjkuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmOS5yeCxcbiAgICAgIHJ5ID0gX3JlZjkucnksXG4gICAgICB3aWR0aCA9IF9yZWY5LndpZHRoLFxuICAgICAgeCA9IF9yZWY5LngsXG4gICAgICB5ID0gX3JlZjkueTtcblxuICBpZiAocnggfHwgcnkpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcng6IHJ4IHx8IHJ5LFxuICAgICAgcnk6IHJ5IHx8IHJ4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQmFzaWNSZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdChfcmVmMTApIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMC5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aCxcbiAgICAgIHggPSBfcmVmMTAueCxcbiAgICAgIHkgPSBfcmVmMTAueTtcblxuICByZXR1cm4gW3sgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKF9yZWYxMSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjExLmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjExLnJ4LFxuICAgICAgcnkgPSBfcmVmMTEucnksXG4gICAgICB3aWR0aCA9IF9yZWYxMS53aWR0aCxcbiAgICAgIHggPSBfcmVmMTEueCxcbiAgICAgIHkgPSBfcmVmMTEueTtcblxuICB2YXIgY3VydmUgPSB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH07XG5cbiAgcmV0dXJuIFt7IHg6IHggKyByeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IC0gcnkgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSArIGhlaWdodCwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHJ4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCAtIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4LCB5OiB5ICsgcnkgfSwgeyB4OiB4ICsgcngsIHk6IHksIGN1cnZlOiBjdXJ2ZSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21HKF9yZWYxMikge1xuICB2YXIgc2hhcGVzID0gX3JlZjEyLnNoYXBlcztcbiAgcmV0dXJuIHNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdG9Qb2ludHMocyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Qb2ludHM7IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZ2V0RXJyb3JzID0gZnVuY3Rpb24gZ2V0RXJyb3JzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHNoYXBlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHJ1bGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBtYXRjaCA9IF9yZWYubWF0Y2gsXG4gICAgICAgIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICAgIHJlcXVpcmVkID0gX3JlZi5yZXF1aXJlZCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuICAgIGlmICh0eXBlb2Ygc2hhcGVbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBpcyByZXF1aXJlZCcgKyAocHJvcCA9PT0gJ3R5cGUnID8gJycgOiAnIG9uIGEgJyArIHNoYXBlLnR5cGUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZVtwcm9wXSkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlIGFycmF5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2Yoc2hhcGVbcHJvcF0pICE9PSB0eXBlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSB2YWxpZC10eXBlb2ZcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSB7XG4gICAgICAgIGlmIChtYXRjaC5pbmRleE9mKHNoYXBlW3Byb3BdKSA9PT0gLTEpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb25lIG9mICcgKyBtYXRjaC5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHNoYXBlLnR5cGUgPT09ICdnJyAmJiBBcnJheS5pc0FycmF5KHNoYXBlLnNoYXBlcykpIHtcbiAgICB2YXIgY2hpbGRFcnJvcnMgPSBzaGFwZS5zaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZ2V0RXJyb3JzKHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoZXJyb3JzLCBjaGlsZEVycm9ycyk7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gW3tcbiAgICBtYXRjaDogWydjaXJjbGUnLCAnZWxsaXBzZScsICdsaW5lJywgJ3BhdGgnLCAncG9seWdvbicsICdwb2x5bGluZScsICdyZWN0JywgJ2cnXSxcbiAgICBwcm9wOiAndHlwZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfV07XG5cbiAgc3dpdGNoIChzaGFwZS50eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2QnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncG9pbnRzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnaGVpZ2h0JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd3aWR0aCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZyc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3NoYXBlcycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnYXJyYXknIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG52YXIgdmFsaWQgPSBmdW5jdGlvbiB2YWxpZChzaGFwZSkge1xuICB2YXIgZXJyb3JzID0gZ2V0RXJyb3JzKHNoYXBlKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yczogZXJyb3JzLFxuICAgIHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZDsiLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uLy4uL2NvcmUvTmV0d29yayc7XHJcbmltcG9ydCB7IGdldFJhbmRvbVNvdXJjZXMsIGdldEdyaWRPZlNvdXJjZXMgfSBmcm9tICcuLi8uLi9jb3JlL1NvdXJjZVBhdHRlcm5zJztcclxuaW1wb3J0IFZlaW5Ob2RlIGZyb20gJy4uLy4uL2NvcmUvVmVpbk5vZGUnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi9jb3JlL1BhdGgnO1xyXG5pbXBvcnQgU1ZHTG9hZGVyIGZyb20gJy4uLy4uL2NvcmUvU1ZHTG9hZGVyJztcclxuaW1wb3J0IHsgc2V0dXBLZXlMaXN0ZW5lcnMgfSBmcm9tICcuLi8uLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zJztcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG5sZXQgY3VycmVudFBhdGg7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBBZGQgdGhlIGJvdW5kcywgc291cmNlcywgYW5kIHJvb3Qgbm9kZXNcclxuICByZXNldE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcclxuICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgc2V0dXBQYXRoKCk7XHJcbiAgYWRkUm9vdFZlaW5zKCk7XHJcbn1cclxuXHJcbiAgbGV0IHNldHVwUGF0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGgvMjtcclxuICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0LzI7XHJcblxyXG4gICAgY3VycmVudFBhdGggPSBuZXcgUGF0aChcclxuICAgICAgW1xyXG4gICAgICAgIFtjeCAtIDQwMCwgY3kgKyAyMDBdLFxyXG4gICAgICAgIFtjeCArIDQwMCwgY3kgKyAyMDBdXHJcbiAgICAgIF0sXHJcbiAgICAgICdCb3VuZHMnLFxyXG4gICAgICBjdHhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICBsZXQgYWRkUm9vdFZlaW5zID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aC8yO1xyXG4gICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMjtcclxuICB9XHJcblxyXG4gIGxldCBtb3ZlUGF0aCA9ICgpID0+IHtcclxuICAgIGlmKCFuZXR3b3JrLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIGN1cnJlbnRQYXRoLm1vdmVCeSgwLC0uNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgZ2VuZXJhdGVTb3VyY2VzT25QYXRoID0gKCkgPT4ge1xyXG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICBuZXR3b3JrLnNvdXJjZXMgPSBzb3VyY2VzO1xyXG4gIH1cclxuXHJcbi8vIE1haW4gcHJvZ3JhbSBsb29wXHJcbmxldCB1cGRhdGUgPSAodGltZXN0YW1wKSA9PiB7XHJcbiAgbW92ZVBhdGgoKTtcclxuICBnZW5lcmF0ZVNvdXJjZXNPblBhdGgoKTtcclxuXHJcbiAgbmV0d29yay51cGRhdGUoKTtcclxuICBuZXR3b3JrLmRyYXcoKTtcclxuICBjdXJyZW50UGF0aC5kcmF3KCk7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgJ3InOlxyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEtpY2sgb2ZmIHRoZSBhcHBsaWNhdGlvblxyXG5zZXR1cCgpOyJdLCJzb3VyY2VSb290IjoiIn0=