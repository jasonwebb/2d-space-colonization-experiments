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
/******/ 	return __webpack_require__(__webpack_require__.s = "./obstacles/js/entry.js");
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
    this.polygon = polygon;
    this.ctx = ctx;
    this.type = type;

    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
  }

  contains(x, y) {
    return inside([x, y], this.polygon);
  }

  draw() {
    if(
      (this.type === 'Bounds' && this.settings.ShowBounds) ||
      (this.type === 'Obstacle' && this.settings.ShowObstacles)
    ) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.polygon[0][0], this.polygon[0][1]);

      for(let i = 0; i < this.polygon.length; i++) {
        this.ctx.lineTo(this.polygon[i][0], this.polygon[i][1]);
      }

      this.ctx.lineTo(this.polygon[0][0], this.polygon[0][1]);

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

    // Scrape all points from all points, and record breakpoints
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

/***/ "./obstacles/js/entry.js":
/*!*******************************!*\
  !*** ./obstacles/js/entry.js ***!
  \*******************************/
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
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");









const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./obstacles/svg/leaf.svg");

let canvas, ctx;
let network;

const TRIANGLE = 0;
const SQUARE = 1;
const CIRCLE = 2;
const LEAF = 3;
let currentBoundsShape = TRIANGLE;

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
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_7__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addBounds();
  addObstacles();
  addSources();
  addRootVeins();
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

      return new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
        [
          [cx - 400, cy + 300],
          [cx, cy - 350],
          [cx + 400, cy + 300]
        ],
        'Bounds',
        ctx
      )
    }

    let getSquareBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const sideLength = 800;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
        [
          [cx - sideLength/2, cy - sideLength/2],  // top left corner
          [cx + sideLength/2, cy - sideLength/2],  // top right corner
          [cx + sideLength/2, cy + sideLength/2],  // bottom right corner
          [cx - sideLength/2, cy + sideLength/2]   // bottom left corner
        ],
        'Bounds',
        ctx
      );
    }

    let getCircleBounds = () => {
      return new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](
        Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["getCircleOfPoints"])(
          window.innerWidth / 2,    // cx
          window.innerHeight / 2,   // cy
          350,                      // radius
          100                       // resolution
        ),
        'Bounds',
        ctx
      );
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

      return new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](polygon, 'Bounds', ctx);
    }

  let addObstacles = () => {
    // Ten random circles
    // for(let i=0; i<10; i++) {
    //   obstacles.push(
    //     new Path(
    //       getCircleOfPoints(
    //         window.innerWidth / 2 + random(-300,300),
    //         window.innerHeight / 2 + random(-300,300),
    //         random(20,70),
    //         100
    //       ),
    //       'Obstacle',
    //       ctx
    //     )
    //   );
    // }

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
  }

  let addSources = () => {
    // Set up the auxin sources using pre-made patterns
    let randomSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomSources(500, ctx, network.bounds, network.obstacles);
    let gridSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getGridOfSources(200, 200, ctx, network.bounds, network.obstacles);

    network.sources = gridSources;
  }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;

    switch(currentBoundsShape) {
      case TRIANGLE:
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(cx - 340, cy + 290),
            true,
            ctx
          )
        );

        // network.addVeinNode(
        //   new VeinNode(
        //     null,
        //     new Vec2(cx, cy - 300),
        //     true,
        //     ctx
        //   )
        // );

        // network.addVeinNode(
        //   new VeinNode(
        //     null,
        //     new Vec2(cx + 340, cy + 290),
        //     true,
        //     ctx
        //   )
        // );

        break;

      case CIRCLE:
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(cx, cy + 300),
            true,
            ctx
          )
        );

        break;

      case SQUARE:
        // Add a set of random root veins throughout scene
        for(let i=0; i<10; i++) {
          network.addVeinNode(
            new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
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
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
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
    case 'r':
      resetNetwork();
      break;

    // b = toggle visibility of bounds
    case 'b':
      network.settings.ShowBounds = !network.settings.ShowBounds;
      break;

    // o = toggle visibility of obstacles
    case 'o':
      network.settings.ShowObstacles = !network.settings.ShowObstacles;
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

/***/ "./obstacles/svg/leaf.svg":
/*!********************************!*\
  !*** ./obstacles/svg/leaf.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" id=\"svg2\" sodipodi:docname=\"leaf-2.svg\" viewBox=\"0 0 900.00002 899.99999\" version=\"1.1\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g id=\"layer1\" inkscape:label=\"Calque 1\" inkscape:groupmode=\"layer\"><path id=\"path3183\" d=\"M 450.21891,829.07436 450.45107,828.2146 451.08318,826.45268 452.01869,824.04535 453.16105,821.24933 454.58598,816.55769 454.94938,810.28998 454.19894,800.24067 452.28238,784.20422 450.62632,769.80478 448.94165,752.77806 447.4255,735.252 446.27499,719.35455 445.3172,705.64829 444.32572,694.08884 443.41751,685.89319 442.70957,682.27835 440.86599,681.38101 436.71054,680.92581 430.23217,680.91228 421.41982,681.33993 373.56476,684.65278 343.85947,687.66778 322.82381,691.70197 300.97762,698.07241 291.07099,700.83975 281.19342,702.73412 269.73448,703.99355 255.08372,704.85607 243.81519,705.231 234.0347,705.326 226.79067,705.14628 223.13148,704.69709 221.38605,703.73684 221.1582,702.3985 222.62257,700.17983 225.95381,696.57855 231.19536,690.09197 234.577,683.59589 235.88687,677.65205 234.91308,672.82217 228.82264,667.09404 216.86155,660.89729 199.86848,654.59381 178.68212,648.54552 166.86084,645.45427 156.89205,642.63894 149.82455,640.41012 146.70709,639.07841 146.74605,637.42634 148.50718,634.35023 151.82972,630.08232 156.55289,624.85485 163.29377,617.40023 167.04858,611.84631 168.50855,606.78605 168.36496,600.81242 165.85132,594.25087 159.17953,586.54175 147.73087,577.09949 130.88664,565.3385 120.47053,558.29877 111.94064,552.30182 106.17719,547.98291 104.06044,545.97729 105.12647,544.92448 108.02903,543.19975 112.32482,541.04215 117.57054,538.69077 132.46189,531.37219 139.91964,523.95905 141.16234,514.0214 137.4085,499.12927 132.59721,483.22865 127.6632,465.41277 123.404,448.67904 120.61715,436.0249 116.40875,417.45661 110.19469,394.18517 103.69582,372.32076 98.633016,357.97356 96.050187,352.97606 92.500473,347.2684 88.451811,341.55409 84.372136,336.53665 80.726756,332.17248 77.860562,328.23817 76.060862,325.16522 75.614966,323.38514 94.467188,320.40204 134.89222,323.96985 179.65288,331.78526 211.51198,341.54495 216.84722,344.10829 223.64803,347.17255 231.0402,350.35319 238.14955,353.26561 245.40835,356.42409 253.20602,360.27465 260.60641,364.33039 266.67337,368.10438 284.77547,379.23659 296.47145,382.95383 303.12508,379.25763 306.10013,368.14957 307.90483,356.21672 310.71843,343.8241 314.32131,331.80723 318.49383,321.00163 320.65917,315.11523 323.16382,306.76169 325.69751,297.05347 327.94995,287.10303 330.38786,274.58277 331.51659,266.14043 331.46689,260.01047 330.36953,254.42739 328.03697,244.00636 329.10196,239.70026 334.70552,240.99357 345.98871,247.37075 355.68932,252.59575 364.41363,256.15901 371.17511,257.73331 374.9872,256.99145 375.27946,255.82477 375.13501,253.58837 374.59593,250.60377 373.70428,247.19249 372.51524,241.84909 372.85642,236.04084 375.2092,227.13944 380.05493,212.51659 384.04158,201.60877 388.2989,191.28296 392.32292,182.69046 395.60965,176.98255 402.15222,167.27407 410.05213,154.637 419.72417,138.38949 431.58312,117.84967 445.34739,94.888179 457.07757,77.603895 466.24471,66.710188 472.31989,62.920426 473.52927,63.607271 474.32889,65.767704 474.74953,69.551567 474.82197,75.108706 475.03267,80.795118 475.73314,87.267787 476.81373,93.730079 478.16477,99.385356 484.74774,116.91069 495.04251,138.58652 507.41166,161.21256 520.21777,181.58853 528.72267,193.72108 534.1699,200.41951 538.12363,203.27311 542.14801,203.87114 545.1129,203.59972 548.27868,202.86069 551.26639,201.76694 553.69704,200.43133 556.46707,198.62586 558.2679,198.04271 559.66924,198.69403 561.24079,200.59197 562.41079,203.88143 563.55019,210.15528 564.56351,218.75407 565.3553,229.01837 566.28158,241.7583 567.40826,250.34172 568.99134,256.12611 571.28683,260.46899 578.36697,271.64063 583.82518,281.77671 587.95354,291.48147 591.04415,301.35914 592.71249,307.21906 594.44033,312.45358 596.02376,316.49164 597.25883,318.76217 598.59166,321.1701 600.44115,325.58214 602.56272,331.37013 604.71179,337.90594 607.19733,346.93887 608.78829,355.69177 609.67148,365.57168 610.03371,377.98563 610.89123,401.46656 613.89457,412.78564 620.74334,414.1269 633.13715,407.67437 638.79351,404.31397 644.61602,401.02215 649.91944,398.17686 654.01856,396.15602 658.024,394.20354 663.07183,391.54439 668.51593,388.52807 673.71017,385.5041 684.79474,379.766 698.62076,374.19166 715.11102,368.80911 734.1883,363.64641 780.91891,351.85498 811.17134,343.55218 830.52643,337.07576 844.56499,330.76348 845.1686,331.05593 845.66291,332.4412 845.99692,334.69518 846.11959,337.59378 845.44803,342.24018 843.47694,348.69013 840.27173,356.76017 835.89779,366.26684 831.41957,375.99279 826.78282,386.91578 822.53467,397.69901 819.22229,407.00568 813.69888,423.23928 807.51056,440.14719 800.22955,458.86076 791.42809,480.51137 786.91488,490.73644 782.60723,498.8696 778.11638,505.56607 773.05354,511.48109 769.23059,515.59527 766.09993,519.16813 763.98463,521.81655 763.20773,523.15739 763.50683,523.95466 764.32121,525.1229 765.52648,526.50507 766.99826,527.94412 769.44885,529.49766 772.91614,530.56383 777.57008,531.17777 783.58067,531.37461 788.54751,531.46451 792.61493,531.70929 795.36319,532.07156 796.37255,532.51394 795.10515,536.26841 791.80301,542.04124 787.21623,548.65476 782.09489,554.93129 770.58999,568.5797 758.75813,583.89931 749.14526,597.46192 744.29735,605.8393 743.47391,608.82362 743.22119,611.47592 743.54034,613.88407 744.4325,616.13594 748.51041,620.83348 755.46778,626.26064 763.78559,631.36973 771.94479,635.11306 775.01558,636.39349 777.68376,637.84198 779.6631,639.28068 780.66735,640.53178 780.07446,643.01537 777.5305,645.98721 774.09429,648.4798 770.82465,649.52566 768.21134,650.34687 762.44449,652.58284 754.37622,655.8921 744.85867,659.9332 716.46009,672.68119 699.29565,681.97457 690.84513,689.46449 688.58833,696.80212 690.40139,703.19636 695.1695,711.29144 701.88602,719.64539 709.54435,726.81628 712.01341,729.01364 713.78628,731.12999 714.7154,732.95035 714.65318,734.25971 702.00423,736.21531 674.59347,735.95173 642.3006,733.85891 615.00532,730.32678 590.602,725.49305 573.38269,721.64372 561.13694,718.23418 551.65429,714.71983 544.56506,711.99097 535.12624,708.74405 524.56943,705.38581 514.12622,702.32302 503.80271,699.27972 493.57297,695.97455 484.61819,692.80618 478.11959,690.1733 473.14087,688.07208 468.32285,686.35134 464.21522,685.18866 461.36762,684.76163 458.64141,685.05558 457.16346,686.56359 456.55469,690.22489 456.43601,696.97872 457.08449,713.12718 458.88616,733.17673 461.62542,755.13291 465.08664,777.0013 468.87459,799.59065 470.48307,813.52535 470.05254,821.40682 467.72345,825.8365 463.69742,828.16448 457.82313,829.77871 452.52248,830.23126 450.2174,829.07421 450.21778,829.07425 450.21816,829.07428 450.21853,829.07432 Z\" style=\"fill:none;stroke:#000000;stroke-width:2.07280159;stroke-opacity:1\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NvdXJjZVBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvaW50LWluLXBvbHlnb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YS9saWIvU1ZHUGF0aERhdGEubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiLCJ3ZWJwYWNrOi8vLy4vb2JzdGFjbGVzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL29ic3RhY2xlcy9zdmcvbGVhZi5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNM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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLFE7Ozs7Ozs7Ozs7O0FDalRBLDYrTkFBNitOLGVBQWUsd0JBQXdCLHlhIiwiZmlsZSI6Im9ic3RhY2xlcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL29ic3RhY2xlcy9qcy9lbnRyeS5qc1wiKTtcbiIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1eGluU291cmNlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuaW5mbHVlbmNpbmdOb2RlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdGlvblpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGtpbGwgem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuS2lsbFpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF1eGluIHNvdXJjZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93U291cmNlcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMSwgMSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Tb3VyY2VDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBMaWdodCA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMCwwLDAsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDAsMCwwLDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC43KSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhcmsgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjA1KScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbSA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDI0MiwyNDIpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxyXG4gIC8vIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYig2MSw4NSwxMzYpJyxcclxuICAvLyBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYig2MSw4NSwxMzYpJ1xyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYig1NywgMTI2LCA4OCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDIxMCwgODEsIDk0KScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKSdcclxufSIsImltcG9ydCB7IExpZ2h0LCBEYXJrLCBDdXN0b20gfSBmcm9tICcuL0NvbG9yUHJlc2V0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICBTaW11bGF0aW9uIGNvbmZpZ3VyYXRpb25zXHJcbiAgKi9cclxuXHJcbiAgVmVuYXRpb25UeXBlOiAnT3BlbicsICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggdmVpbiBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogMjAwLCAgLy8gcmFkaXVzIG9mIGluZmx1ZW5jZSAoZF9pKSBhcm91bmQgZWFjaCBhdXhpbiBzb3VyY2UgdGhhdCBhdHRyYWN0cyB2ZWluIHNlZ21lbnRzXHJcbiAgS2lsbERpc3RhbmNlOiA1LCAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAvLyBpbml0aWFsIHBhdXNlL3VucGF1c2Ugc3RhdGVcclxuXHJcblxyXG4gIC8qKlxyXG4gICAgUmVuZGVyaW5nIGNvbmZpZ3VyYXRpb25zXHJcbiAgKi9cclxuXHJcbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXHJcbiAgU2hvd1NvdXJjZXM6IGZhbHNlLCAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdzJ1xyXG4gIFNob3dWZWluczogdHJ1ZSwgICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndidcclxuICBTaG93VmVpblRpcHM6IGZhbHNlLCAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3QnXHJcbiAgU2hvd0F0dHJhY3Rpb25ab25lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgICAvLyB0b2dnbGVkIHdpdGggJ2knXHJcbiAgU2hvd0JvdW5kczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IHRydWUsICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBWZWluUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgdmVpbiBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gQ29sb3JzXHJcbiAgQ29sb3JzOiBMaWdodCxcclxuXHJcbiAgLy8gTGluZSB0aGlja25lc3Nlc1xyXG4gIFZlaW5UaGlja25lc3M6IDEsXHJcbiAgVmVpblRpcFRoaWNrbmVzczogMixcclxuICBCb3VuZHNCb3JkZXJUaGlja25lc3M6IDBcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3Jrcykge1xyXG4gIGlmKCEobmV0d29ya3MgaW5zdGFuY2VvZiBBcnJheSkpIHtcclxuICAgIG5ldHdvcmtzID0gW25ldHdvcmtzXTtcclxuICB9XHJcblxyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICAvLyBTcGFjZSA9IHBhdXNlL3VucGF1c2VcclxuICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHYgPSB0b2dnbGUgdmVpbiB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3YnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVWZWlucygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBzID0gdG9nZ2xlIGF1eGluIHNvdXJjZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3MnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVTb3VyY2VzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGEgPSB0b2dnbGUgYXR0cmFjdGlvbiB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYSc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3Rpb25ab25lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB0ID0gdG9nZ2xlIHZlaW4gdGlwIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5UaXBzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGsgPSB0b2dnbGUga2lsbCB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUtpbGxab25lcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lc1xyXG4gICAgICBjYXNlICdpJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlSW5mbHVlbmNlTGluZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgS0RCdXNoIGZyb20gJ2tkYnVzaCc7XHJcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VzID0gW107ICAvLyBzb3VyY2VzIChBdXhpblNvdXJjZXMpIGF0dHJhY3QgdmVpbiBub2Rlc1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdOyAgICAvLyBub2RlcyAoVmVpbk5vZGVzKSBhcmUgY29ubmVjdGVkIHRvIGZvcm0gdmVpbnNcclxuXHJcbiAgICB0aGlzLm5vZGVzSW5kZXg7ICAgIC8vIGtkLWJ1c2ggc3BhdGlhbCBpbmRleCBmb3IgYWxsIG5vZGVzXHJcblxyXG4gICAgdGhpcy5ib3VuZHM7XHJcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gU2tpcCBpdGVyYXRpb24gaWYgcGF1c2VkXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3NvY2lhdGUgYXV4aW4gc291cmNlcyB3aXRoIG5lYXJieSB2ZWluIG5vZGVzIHRvIGZpZ3VyZSBvdXQgd2hlcmUgZ3Jvd3RoIHNob3VsZCBvY2N1clxyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgb25seSBhc3NvY2lhdGUgdGhpcyBzb3VyY2Ugd2l0aCBpdHMgY2xvc2VzdCB2ZWluIG5vZGVcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGxldCBjbG9zZXN0Tm9kZSA9IHRoaXMuZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpKTtcclxuXHJcbiAgICAgICAgICBpZihjbG9zZXN0Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsb3Nlc3ROb2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgICAgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMgPSBbY2xvc2VzdE5vZGVdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCBhc3NvY2lhdGUgdGhpcyBzb3VyY2Ugd2l0aCBhbGwgbm9kZXMgaW4gaXRzIHJlbGF0aXZlIG5laWdoYm9yaG9vZFxyXG4gICAgICAgIGNhc2UgJ0Nsb3NlZCc6XHJcbiAgICAgICAgICBsZXQgbmVpZ2hib3Job29kTm9kZXMgPSB0aGlzLmdldFJlbGF0aXZlTmVpZ2hib3JOb2Rlcyhzb3VyY2UpO1xyXG4gICAgICAgICAgbGV0IG5vZGVzSW5LaWxsWm9uZSA9IHRoaXMuZ2V0Tm9kZXNJbktpbGxab25lKHNvdXJjZSk7XHJcblxyXG4gICAgICAgICAgLy8gRXhjbHVkZSBub2RlcyB0aGF0IGFyZSBpbiB0aGUgc291cmNlJ3Mga2lsbCB6b25lICh0aGVzZSBzaG91bGQgc3RvcCBncm93aW5nKVxyXG4gICAgICAgICAgbGV0IG5vZGVzVG9Hcm93ID0gbmVpZ2hib3Job29kTm9kZXMuZmlsdGVyKChuZWlnaGJvck5vZGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICFub2Rlc0luS2lsbFpvbmUuaW5jbHVkZXMobmVpZ2hib3JOb2RlKTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gbm9kZXNUb0dyb3c7XHJcblxyXG4gICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzVG9Hcm93KSB7XHJcbiAgICAgICAgICAgIG5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3JvdyB0aGUgbmV0d29yayBieSBhZGRpbmcgbmV3IHZlaW4gbm9kZXMgb250byBhbnkgbm9kZXMgYmVpbmcgaW5mbHVlbmNlZCBieSBzb3VyY2VzXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSB0aGlzLmdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbm9kZS5pbmZsdWVuY2VkQnkubWFwKGlkID0+IHRoaXMuc291cmNlc1tpZF0pKTtcclxuICAgICAgICBsZXQgbmV4dE5vZGUgPSBub2RlLmdldE5leHROb2RlKGF2ZXJhZ2VEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBvayA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIERvbid0IGdyb3cgaWYgdGhlIG5leHQgbm9kZSBnb2VzIG91dCBvZiB0aGUgcGFzc2VkIGJvdW5kc1xyXG4gICAgICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiAhdGhpcy5ib3VuZHMuY29udGFpbnMobmV4dE5vZGUucG9zaXRpb24ueCwgbmV4dE5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBncm93IGlmIHRoZSBuZXh0IG5vZGUgZ29lcyBpbnNpZGUgYW55IHBhc3NlZCBvYnN0YWNsZVxyXG4gICAgICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob2spIHtcclxuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBhbnkgYXV4aW4gc291cmNlcyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgdmVpbiBub2Rlc1xyXG4gICAgZm9yKGxldCBbc291cmNlSUQsIHNvdXJjZV0gb2YgdGhpcy5zb3VyY2VzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2UgYXMgc29vbiBhcyBhbnkgdmVpbiBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5yZWFjaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCByZW1vdmUgdGhlIHNvdXJjZSBvbmx5IHdoZW4gYWxsIGFzc29jaWF0ZWQgdmVpbiBub2RlcyBoYXZlIHJlYWNoZWQgaXRcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgaWYoc291cmNlLmluZmx1ZW5jaW5nTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVidWlsZCBzcGF0aWFsIGluZGljZXNcclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuICAgIHRoaXMuZHJhd0JvdW5kcygpO1xyXG4gICAgdGhpcy5kcmF3T2JzdGFjbGVzKCk7XHJcbiAgICB0aGlzLmRyYXdTb3VyY2VzKCk7XHJcbiAgICB0aGlzLmRyYXdWZWlucygpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICAvLyBFcmFzZSB0aGUgY2FudmFzXHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXdCb3VuZHMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYm91bmRzLmRyYXcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdPYnN0YWNsZXMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1ZlaW5zKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1NvdXJjZXMoKSB7XHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIHNvdXJjZSBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgc291cmNlVG9QMCwgc291cmNlVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIHNvdXJjZVRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3VyY2VUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMS5sZW5ndGgoKSA+IHNvdXJjZVRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBzb3VyY2UucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieVNvdXJjZXMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdXhpbiBzb3VyY2VcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIHNvdXJjZS5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZFZlaW5Ob2RlKG5vZGUpIHtcclxuICAgIGxldCBvayA9IHRydWU7XHJcblxyXG4gICAgLy8gT25seSBwdXQgcm9vdCB2ZWlucyBpbnNpZGUgdGhlIGJvdW5kc1xyXG4gICAgaWYodGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkICYmICF0aGlzLmJvdW5kcy5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgb2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBwdXQgcm9vdCB2ZWlucyBpbnNpZGUgb2Ygb2JzdGFjbGVzXHJcbiAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKG9rKSB7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgIHRoaXMuc291cmNlcyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcclxuICAgIHRoaXMubm9kZXNJbmRleCA9IG5ldyBLREJ1c2godGhpcy5ub2RlcywgcCA9PiBwLnBvc2l0aW9uLngsIHAgPT4gcC5wb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZlaW5zKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VmVpbnMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VmVpbnM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWluVGlwcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzID0gIW5vZGUuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU291cmNlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3Rpb25ab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlS2lsbFpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhc291cmNlLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVJbmZsdWVuY2VMaW5lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxubGV0IGluc2lkZSA9IHJlcXVpcmUoJ3BvaW50LWluLXBvbHlnb24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBvbHlnb24sIHR5cGUsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4gaW5zaWRlKFt4LCB5XSwgdGhpcy5wb2x5Z29uKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZihcclxuICAgICAgKHRoaXMudHlwZSA9PT0gJ0JvdW5kcycgJiYgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzKSB8fFxyXG4gICAgICAodGhpcy50eXBlID09PSAnT2JzdGFjbGUnICYmIHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcylcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9seWdvblswXVswXSwgdGhpcy5wb2x5Z29uWzBdWzFdKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wb2x5Z29uW2ldWzBdLCB0aGlzLnBvbHlnb25baV1bMV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wb2x5Z29uWzBdWzBdLCB0aGlzLnBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JvdW5kcyc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0JvcmRlckNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5Cb3VuZHNCb3JkZXJUaGlja25lc3M7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNGaWxsQ29sb3I7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPYnN0YWNsZSc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5PYnN0YWNsZUZpbGxDb2xvcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTVkdQYXRoRGF0YX0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc3RhdGljIGxvYWQoc3ZnU3RyaW5nKSB7XHJcbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgbGV0IHN2Z05vZGUgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuXHJcbiAgICBsZXQgaW5wdXRQYXRocyA9IHN2Z05vZGUucXVlcnlTZWxlY3RvckFsbCgncGF0aCcpLFxyXG4gICAgICBwYXRocyA9IFtdO1xyXG5cclxuICAgIC8vIFNjcmFwZSBhbGwgcG9pbnRzIGZyb20gYWxsIHBvaW50cywgYW5kIHJlY29yZCBicmVha3BvaW50c1xyXG4gICAgZm9yKGxldCBpbnB1dFBhdGggb2YgaW5wdXRQYXRocykge1xyXG4gICAgICBsZXQgcGF0aERhdGEgPSBuZXcgU1ZHUGF0aERhdGEoaW5wdXRQYXRoLmdldEF0dHJpYnV0ZSgnZCcpKSxcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c0Nvb3JkcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvcihsZXQgW2luZGV4LCBjb21tYW5kXSBvZiBwYXRoRGF0YS5jb21tYW5kcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2goY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAvLyBNb3ZlICgnTScpIGFuZCBsaW5lICgnTCcpIGNvbW1hbmRzIGhhdmUgYm90aCBYIGFuZCBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLk1PVkVfVE86XHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkxJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBIb3Jpem9udGFsIGxpbmUgKCdIJykgY29tbWFuZHMgb25seSBoYXZlIFgsIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIHByZXZpb3VzQ29vcmRzLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gVmVydGljYWwgbGluZSAoJ1YnKSBjb21tYW5kcyBvbmx5IGhhdmUgWSwgdXNpbmcgcHJldmlvdXMgY29tbWFuZCdzIFhcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbcHJldmlvdXNDb29yZHMueCwgY29tbWFuZC55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENsb3NlUGF0aCAoJ1onKSBjb21tYW5kcyBhcmUgYSBuYWl2ZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGN1cnJlbnQgcGF0aCBjYW4gYmUgcHJvY2Vzc2VkIGFuZCBhZGRlZCB0byB0aGUgd29ybGRcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSDpcclxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBwYXRoIGluIHJldHVybiBvYmplY3RcclxuICAgICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbmNsb3NlZCBwYXRocyBuZXZlciBoYXZlIENMT1NFX1BBVEggY29tbWFuZHMsIHNvIHdyYXAgdXAgdGhlIGN1cnJlbnQgcGF0aCB3aGVuIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGggYW5kIGhhdmUgbm90IGZvdW5kIHRoZSBjb21tYW5kXHJcbiAgICAgICAgaWYoaW5kZXggPT0gcGF0aERhdGEuY29tbWFuZHMubGVuZ3RoIC0gMSAmJiBjb21tYW5kLnR5cGUgIT0gU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCkge1xyXG4gICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFggY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3gnKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueCA9IGNvbW1hbmQueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhcHR1cmUgWSBjb29yZGluYXRlLCBpZiB0aGVyZSB3YXMgb25lXHJcbiAgICAgICAgaWYoY29tbWFuZC5oYXNPd25Qcm9wZXJ0eSgneScpKSB7XHJcbiAgICAgICAgICBwcmV2aW91c0Nvb3Jkcy55ID0gY29tbWFuZC55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4vQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlUGF0dGVybnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc3RhdGljIGdldFJhbmRvbVNvdXJjZXMobnVtU291cmNlcywgY3R4LCBib3VuZHMgPSB1bmRlZmluZWQsIG9ic3RhY2xlcyA9IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IG5vZGVzID0gW107XHJcbiAgICBsZXQgeCwgeTtcclxuICAgIGxldCBvaztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxudW1Tb3VyY2VzOyBpKyspIHtcclxuICAgICAgeCA9IHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIHkgPSByYW5kb20od2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgICAgb2sgPSB0cnVlO1xyXG5cclxuICAgICAgaWYoKGJvdW5kcyAhPSB1bmRlZmluZWQgJiYgIWJvdW5kcy5jb250YWlucyh4LHkpKSkge1xyXG4gICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgb2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMoeCx5KSkge1xyXG4gICAgICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYob2spIHtcclxuICAgICAgICBub2Rlcy5wdXNoKFxyXG4gICAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgICBuZXcgVmVjMih4LHkpLFxyXG4gICAgICAgICAgICBjdHhcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5vZGVzO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldEdyaWRPZlNvdXJjZXMobnVtUm93cywgbnVtQ29sdW1ucywgY3R4LCBib3VuZHMgPSB1bmRlZmluZWQsIG9ic3RhY2xlcyA9IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IG5vZGVzID0gW107XHJcbiAgICBsZXQgeCwgeTtcclxuICAgIGxldCBvaztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTw9bnVtUm93czsgaSsrKSB7XHJcbiAgICAgIGZvcihsZXQgaj0wOyBqPD1udW1Db2x1bW5zOyBqKyspIHtcclxuICAgICAgICB4ID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gbnVtQ29sdW1ucykgKiBqICsgcmFuZG9tKC0xMCwxMCk7XHJcbiAgICAgICAgeSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyBudW1Sb3dzKSAqIGkgKyByYW5kb20oLTEwLDEwKTtcclxuICAgICAgICBvayA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKChib3VuZHMgIT0gdW5kZWZpbmVkICYmICFib3VuZHMuY29udGFpbnMoeCx5KSkpIHtcclxuICAgICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIG9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyh4LHkpKSB7XHJcbiAgICAgICAgICAgICAgb2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob2spIHtcclxuICAgICAgICAgIG5vZGVzLnB1c2goXHJcbiAgICAgICAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgICAgICBuZXcgVmVjMih4LHkpLFxyXG4gICAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXggPSBtaW47XHJcbiAgICBtaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBtaW4gIT09ICdudW1iZXInIHx8IHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgYXJndW1lbnRzIHRvIGJlIG51bWJlcnMnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjbGVPZlBvaW50cyhjeCwgY3ksIHJhZGl1cywgcmVzb2x1dGlvbikge1xyXG4gIGxldCBhbmdsZSwgeCwgeTtcclxuICBsZXQgcG9pbnRzID0gW107XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcclxuICAgIGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpIC8gcmVzb2x1dGlvbjtcclxuICAgIHggPSBjeCArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgIHkgPSBjeSArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICBwb2ludHMucHVzaChbeCwgeV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBvaW50cztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNWRyhuZXR3b3JrKSB7XHJcbiAgLy8gU2V0IHVwIDxzdmc+IGVsZW1lbnRcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd4bWxuczp4bGluaycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgd2luZG93LmlubmVyV2lkdGggKyAnICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAvLyBDcmVhdGUgcGF0aHMgZm9yIHZlaW4gc2VnbWVudHNcclxuICBmb3IobGV0IG5vZGUgb2YgbmV0d29yay5ub2Rlcykge1xyXG5cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBwYXRocyBmb3IgYm91bmRzXHJcbiAgLy8gZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xyXG5cclxuICAvLyB9XHJcblxyXG4gIC8vIENyZWF0ZSBwYXRocyBmb3Igb2JzdGFjbGVzXHJcbiAgLy8gZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xyXG5cclxuICAvLyB9XHJcblxyXG4gIC8vIEZvcmNlIGRvd25sb2FkIG9mIC5zdmcgZmlsZSBiYXNlZCBvbiBodHRwczovL2pzZmlkZGxlLm5ldC9jaDc3ZTd5aC8xXHJcbiAgbGV0IHN2Z0RvY1R5cGUgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudFR5cGUoJ3N2ZycsIFwiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU5cIiwgXCJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGRcIik7XHJcbiAgbGV0IHN2Z0RvYyA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50KCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnLCBzdmdEb2NUeXBlKTtcclxuICBzdmdEb2MucmVwbGFjZUNoaWxkKHN2Zywgc3ZnRG9jLmRvY3VtZW50RWxlbWVudCk7XHJcbiAgbGV0IHN2Z0RhdGEgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnRG9jKTtcclxuXHJcbiAgbGV0IGJsb2IgPSBuZXcgQmxvYihbc3ZnRGF0YS5yZXBsYWNlKC8+PC9nLCAnPlxcblxccjwnKV0pO1xyXG4gIHNhdmVBcyhibG9iLCAndmVuYXRpb24tJyArIERhdGUubm93KCkgKyAnLnN2ZycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYXRoRWxGcm9tUG9pbnRzKHBvaW50cykge1xyXG4gIGxldCBwb2ludHNTdHJpbmcgPSAnJztcclxuXHJcbiAgZm9yKGxldCBbaW5kZXgsIHBvaW50XSBvZiBwb2ludHMuZW50cmllcygpKSB7XHJcbiAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRbMF0gKyAnLCcgKyBwb2ludFsxXTtcclxuXHJcbiAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgZCA9IHRvUGF0aCh7XHJcbiAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgcG9pbnRzOiBwb2ludHNTdHJpbmdcclxuICB9KTtcclxuXHJcbiAgbGV0IHBhdGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnKTtcclxuICBwYXRoRWwuc2V0QXR0cmlidXRlKCdkJywgZCk7XHJcbiAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XHJcblxyXG4gIHJldHVybiBwYXRoRWw7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWluTm9kZSB7XHJcbiAgY29uc3RydWN0b3IocGFyZW50LCBwb3NpdGlvbiwgaXNUaXAsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5pc1RpcCA9IGlzVGlwO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5WZWluVGlwVGhpY2tuZXNzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5Db2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRoaWNrbmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICB9IGVsc2UgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgMSxcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIE1hdGguUEkgKiAyXHJcbiAgICAgICAgKTsgIC8vIFRPRE86IHZhcnkgZG90IHJhZGl1cyBiYXNlZCBvbiBhbGdvcml0aG1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE5leHROb2RlKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24pIHtcclxuICAgIHRoaXMuaXNUaXAgPSBmYWxzZTtcclxuICAgIHRoaXMubmV4dFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoYXZlcmFnZVNvdXJjZURpcmVjdGlvbi5tdWx0aXBseSh0aGlzLnNldHRpbmdzLlNlZ21lbnRMZW5ndGgpLCB0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlaW5Ob2RlKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLm5leHRQb3NpdGlvbixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdGhpcy5jdHgsXHJcbiAgICAgIHRoaXMuc2V0dGluZ3NcclxuICAgICk7XHJcbiAgfVxyXG59IiwiXG5pbXBvcnQgc29ydCBmcm9tICcuL3NvcnQnO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHdpdGhpbiBmcm9tICcuL3dpdGhpbic7XG5cbmNvbnN0IGRlZmF1bHRHZXRYID0gcCA9PiBwWzBdO1xuY29uc3QgZGVmYXVsdEdldFkgPSBwID0+IHBbMV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtEQnVzaCB7XG4gICAgY29uc3RydWN0b3IocG9pbnRzLCBnZXRYID0gZGVmYXVsdEdldFgsIGdldFkgPSBkZWZhdWx0R2V0WSwgbm9kZVNpemUgPSA2NCwgQXJyYXlUeXBlID0gRmxvYXQ2NEFycmF5KSB7XG4gICAgICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG5cbiAgICAgICAgY29uc3QgSW5kZXhBcnJheVR5cGUgPSBwb2ludHMubGVuZ3RoIDwgNjU1MzYgPyBVaW50MTZBcnJheSA6IFVpbnQzMkFycmF5O1xuXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuaWRzID0gbmV3IEluZGV4QXJyYXlUeXBlKHBvaW50cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZHNbaV0gPSBpO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpXSA9IGdldFgocG9pbnRzW2ldKTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaSArIDFdID0gZ2V0WShwb2ludHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIDAsIGlkcy5sZW5ndGggLSAxLCAwKTtcbiAgICB9XG5cbiAgICByYW5nZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiByYW5nZSh0aGlzLmlkcywgdGhpcy5jb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIHRoaXMubm9kZVNpemUpO1xuICAgIH1cblxuICAgIHdpdGhpbih4LCB5LCByKSB7XG4gICAgICAgIHJldHVybiB3aXRoaW4odGhpcy5pZHMsIHRoaXMuY29vcmRzLCB4LCB5LCByLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKGlkcywgY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWluWCA8PSB4IDogbWluWSA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1heFggPj0geCA6IG1heFkgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbSA9IChsZWZ0ICsgcmlnaHQpID4+IDE7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICAgICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbmV3TGVmdCwgbmV3UmlnaHQsIGluYyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ID0gY29vcmRzWzIgKiBrICsgaW5jXTtcbiAgICAgICAgbGV0IGkgPSBsZWZ0O1xuICAgICAgICBsZXQgaiA9IHJpZ2h0O1xuXG4gICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBrKTtcbiAgICAgICAgaWYgKGNvb3Jkc1syICogcmlnaHQgKyBpbmNdID4gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIHJpZ2h0KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGkgKyBpbmNdIDwgdCkgaSsrO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaiArIGluY10gPiB0KSBqLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRzWzIgKiBsZWZ0ICsgaW5jXSA9PT0gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGopO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBqLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA8PSBrKSBsZWZ0ID0gaiArIDE7XG4gICAgICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaikge1xuICAgIHN3YXAoaWRzLCBpLCBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGksIDIgKiBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGkgKyAxLCAyICogaiArIDEpO1xufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xuICAgIGNvbnN0IHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4oaWRzLCBjb29yZHMsIHF4LCBxeSwgciwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgcjIgPSByICogcjtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzcURpc3QoY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0sIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgY29uc3QgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIGNvbnN0IHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoc3FEaXN0KHgsIHksIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4IC0gciA8PSB4IDogcXkgLSByIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggKyByID49IHggOiBxeSArIHIgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3FEaXN0KGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgZHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IGR5ID0gYXkgLSBieTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwb2ludCwgdnMpIHtcbiAgICAvLyByYXktY2FzdGluZyBhbGdvcml0aG0gYmFzZWQgb25cbiAgICAvLyBodHRwOi8vd3d3LmVjc2UucnBpLmVkdS9Ib21lcGFnZXMvd3JmL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG4gICAgXG4gICAgdmFyIHggPSBwb2ludFswXSwgeSA9IHBvaW50WzFdO1xuICAgIFxuICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHZzLmxlbmd0aCAtIDE7IGkgPCB2cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICAgICAgdmFyIHhpID0gdnNbaV1bMF0sIHlpID0gdnNbaV1bMV07XG4gICAgICAgIHZhciB4aiA9IHZzW2pdWzBdLCB5aiA9IHZzW2pdWzFdO1xuICAgICAgICBcbiAgICAgICAgdmFyIGludGVyc2VjdCA9ICgoeWkgPiB5KSAhPSAoeWogPiB5KSlcbiAgICAgICAgICAgICYmICh4IDwgKHhqIC0geGkpICogKHkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XG4gICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnNpZGU7XG59O1xuIiwidmFyIGV4dGVuZFN0YXRpY3M9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsYSl7dC5fX3Byb3RvX189YX18fGZ1bmN0aW9uKHQsYSl7Zm9yKHZhciByIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShyKSYmKHRbcl09YVtyXSl9O2Z1bmN0aW9uIF9fZXh0ZW5kcyh0LGEpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9ZXh0ZW5kU3RhdGljcyh0LGEpLHQucHJvdG90eXBlPW51bGw9PT1hP09iamVjdC5jcmVhdGUoYSk6KHIucHJvdG90eXBlPWEucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiByb3RhdGUodCxhKXt2YXIgcj10WzBdLGU9dFsxXTtyZXR1cm5bcipNYXRoLmNvcyhhKS1lKk1hdGguc2luKGEpLHIqTWF0aC5zaW4oYSkrZSpNYXRoLmNvcyhhKV19ZnVuY3Rpb24gYXNzZXJ0TnVtYmVycygpe2Zvcih2YXIgdD1bXSxhPTA7YTxhcmd1bWVudHMubGVuZ3RoO2ErKyl0W2FdPWFyZ3VtZW50c1thXTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZihcIm51bWJlclwiIT10eXBlb2YgdFtyXSl0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnROdW1iZXJzIGFyZ3VtZW50c1tcIityK1wiXSBpcyBub3QgYSBudW1iZXIuIFwiK3R5cGVvZiB0W3JdK1wiID09IHR5cGVvZiBcIit0W3JdKTtyZXR1cm4hMH12YXIgUEk9TWF0aC5QSTtmdW5jdGlvbiBhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpe3QubEFyY0ZsYWc9MD09PXQubEFyY0ZsYWc/MDoxLHQuc3dlZXBGbGFnPTA9PT10LnN3ZWVwRmxhZz8wOjE7dmFyIGU9dC5yWCxuPXQuclksaT10Lngsbz10Lnk7ZT1NYXRoLmFicyh0LnJYKSxuPU1hdGguYWJzKHQuclkpO3ZhciBzPXJvdGF0ZShbKGEtaSkvMiwoci1vKS8yXSwtdC54Um90LzE4MCpQSSksaD1zWzBdLHU9c1sxXSxjPU1hdGgucG93KGgsMikvTWF0aC5wb3coZSwyKStNYXRoLnBvdyh1LDIpL01hdGgucG93KG4sMik7MTxjJiYoZSo9TWF0aC5zcXJ0KGMpLG4qPU1hdGguc3FydChjKSksdC5yWD1lLHQuclk9bjt2YXIgbT1NYXRoLnBvdyhlLDIpKk1hdGgucG93KHUsMikrTWF0aC5wb3cobiwyKSpNYXRoLnBvdyhoLDIpLF89KHQubEFyY0ZsYWchPT10LnN3ZWVwRmxhZz8xOi0xKSpNYXRoLnNxcnQoTWF0aC5tYXgoMCwoTWF0aC5wb3coZSwyKSpNYXRoLnBvdyhuLDIpLW0pL20pKSxUPWUqdS9uKl8sTz0tbipoL2UqXyxwPXJvdGF0ZShbVCxPXSx0LnhSb3QvMTgwKlBJKTt0LmNYPXBbMF0rKGEraSkvMix0LmNZPXBbMV0rKHIrbykvMix0LnBoaTE9TWF0aC5hdGFuMigodS1PKS9uLChoLVQpL2UpLHQucGhpMj1NYXRoLmF0YW4yKCgtdS1PKS9uLCgtaC1UKS9lKSwwPT09dC5zd2VlcEZsYWcmJnQucGhpMj50LnBoaTEmJih0LnBoaTItPTIqUEkpLDE9PT10LnN3ZWVwRmxhZyYmdC5waGkyPHQucGhpMSYmKHQucGhpMis9MipQSSksdC5waGkxKj0xODAvUEksdC5waGkyKj0xODAvUEl9ZnVuY3Rpb24gaW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUodCxhLHIpe2Fzc2VydE51bWJlcnModCxhLHIpO3ZhciBlPXQqdCthKmEtcipyO2lmKDA+ZSlyZXR1cm5bXTtpZigwPT09ZSlyZXR1cm5bW3Qqci8odCp0K2EqYSksYSpyLyh0KnQrYSphKV1dO3ZhciBuPU1hdGguc3FydChlKTtyZXR1cm5bWyh0KnIrYSpuKS8odCp0K2EqYSksKGEqci10Km4pLyh0KnQrYSphKV0sWyh0KnItYSpuKS8odCp0K2EqYSksKGEqcit0Km4pLyh0KnQrYSphKV1dfXZhciBTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLERFRz1NYXRoLlBJLzE4MDtmdW5jdGlvbiBsZXJwKHQsYSxyKXtyZXR1cm4oMS1yKSp0K3IqYX1mdW5jdGlvbiBhcmNBdCh0LGEscixlKXtyZXR1cm4gdCtNYXRoLmNvcyhlLzE4MCpQSSkqYStNYXRoLnNpbihlLzE4MCpQSSkqcn1mdW5jdGlvbiBiZXppZXJSb290KHQsYSxyLGUpe3ZhciBuPWEtdCxpPXItYSxvPTMqbiszKihlLXIpLTYqaSxzPTYqKGktbiksaD0zKm47cmV0dXJuIE1hdGguYWJzKG8pPDFlLTY/Wy1oL3NdOnBxRm9ybXVsYShzL28saC9vLDFlLTYpfWZ1bmN0aW9uIGJlemllckF0KHQsYSxyLGUsbil7dmFyIGk9MS1uO3JldHVybiB0KihpKmkqaSkrYSooMyppKmkqbikrciooMyppKm4qbikrZSoobipuKm4pfWZ1bmN0aW9uIHBxRm9ybXVsYSh0LGEscil7dm9pZCAwPT09ciYmKHI9MWUtNik7dmFyIGU9dCp0LzQtYTtpZihlPC1yKXJldHVybltdO2lmKGU8PXIpcmV0dXJuWy10LzJdO3ZhciBuPU1hdGguc3FydChlKTtyZXR1cm5bLXQvMi1uLC10LzIrbl19ZnVuY3Rpb24gYTJjKHQsYSxyKXt2YXIgZSxuLGksbzt0LmNYfHxhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpO2Zvcih2YXIgcz1NYXRoLm1pbih0LnBoaTEsdC5waGkyKSxoPU1hdGgubWF4KHQucGhpMSx0LnBoaTIpLXMsdT1NYXRoLmNlaWwoaC85MCksYz1uZXcgQXJyYXkodSksbT1hLF89cixUPTA7VDx1O1QrKyl7dmFyIE89bGVycCh0LnBoaTEsdC5waGkyLFQvdSkscD1sZXJwKHQucGhpMSx0LnBoaTIsKFQrMSkvdSkseT1wLU8sUz00LzMqTWF0aC50YW4oeSpERUcvNCksZj1bTWF0aC5jb3MoTypERUcpLVMqTWF0aC5zaW4oTypERUcpLE1hdGguc2luKE8qREVHKStTKk1hdGguY29zKE8qREVHKV0sVj1mWzBdLE49ZlsxXSxEPVtNYXRoLmNvcyhwKkRFRyksTWF0aC5zaW4ocCpERUcpXSxQPURbMF0sbD1EWzFdLHY9W1ArUypNYXRoLnNpbihwKkRFRyksbC1TKk1hdGguY29zKHAqREVHKV0sRT12WzBdLEE9dlsxXTtjW1RdPXtyZWxhdGl2ZTp0LnJlbGF0aXZlLHR5cGU6U1ZHUGF0aERhdGEuQ1VSVkVfVE99O3ZhciBkPWZ1bmN0aW9uKGEscil7dmFyIGU9cm90YXRlKFthKnQuclgscip0LnJZXSx0LnhSb3QpLG49ZVswXSxpPWVbMV07cmV0dXJuW3QuY1grbix0LmNZK2ldfTtlPWQoVixOKSxjW1RdLngxPWVbMF0sY1tUXS55MT1lWzFdLG49ZChFLEEpLGNbVF0ueDI9blswXSxjW1RdLnkyPW5bMV0saT1kKFAsbCksY1tUXS54PWlbMF0sY1tUXS55PWlbMV0sdC5yZWxhdGl2ZSYmKGNbVF0ueDEtPW0sY1tUXS55MS09XyxjW1RdLngyLT1tLGNbVF0ueTItPV8sY1tUXS54LT1tLGNbVF0ueS09XyksbT0obz1bY1tUXS54LGNbVF0ueV0pWzBdLF89b1sxXX1yZXR1cm4gY30hZnVuY3Rpb24odCl7ZnVuY3Rpb24gYSgpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKHZvaWQgMCE9PXQueDEmJih0LngxKz1hKSx2b2lkIDAhPT10LnkxJiYodC55MSs9ciksdm9pZCAwIT09dC54MiYmKHQueDIrPWEpLHZvaWQgMCE9PXQueTImJih0LnkyKz1yKSx2b2lkIDAhPT10LngmJih0LngrPWEpLHZvaWQgMCE9PXQueSYmKHQueSs9ciksdC5yZWxhdGl2ZT0hMSksdH0pfWZ1bmN0aW9uIHIoKXt2YXIgdD1OYU4sYT1OYU4scj1OYU4sZT1OYU47cmV0dXJuIG4oZnVuY3Rpb24obixpLG8pe3JldHVybiBuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPJiYobi50eXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHQ9aXNOYU4odCk/aTp0LGE9aXNOYU4oYSk/bzphLG4ueDE9bi5yZWxhdGl2ZT9pLXQ6MippLXQsbi55MT1uLnJlbGF0aXZlP28tYToyKm8tYSksbi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPPyh0PW4ucmVsYXRpdmU/aStuLngyOm4ueDIsYT1uLnJlbGF0aXZlP28rbi55MjpuLnkyKToodD1OYU4sYT1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyYmKG4udHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHI9aXNOYU4ocik/aTpyLGU9aXNOYU4oZSk/bzplLG4ueDE9bi5yZWxhdGl2ZT9pLXI6MippLXIsbi55MT1uLnJlbGF0aXZlP28tZToyKm8tZSksbi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8/KHI9bi5yZWxhdGl2ZT9pK24ueDE6bi54MSxlPW4ucmVsYXRpdmU/bytuLnkxOm4ueTEpOihyPU5hTixlPU5hTiksbn0pfWZ1bmN0aW9uIGUoKXt2YXIgdD1OYU4sYT1OYU47cmV0dXJuIG4oZnVuY3Rpb24ocixlLG4pe2lmKHIudHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyYmKHIudHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHQ9aXNOYU4odCk/ZTp0LGE9aXNOYU4oYSk/bjphLHIueDE9ci5yZWxhdGl2ZT9lLXQ6MiplLXQsci55MT1yLnJlbGF0aXZlP24tYToyKm4tYSksci50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8pe3Q9ci5yZWxhdGl2ZT9lK3IueDE6ci54MSxhPXIucmVsYXRpdmU/bityLnkxOnIueTE7dmFyIGk9ci54MSxvPXIueTE7ci50eXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHIueDE9KChyLnJlbGF0aXZlPzA6ZSkrMippKS8zLHIueTE9KChyLnJlbGF0aXZlPzA6bikrMipvKS8zLHIueDI9KHIueCsyKmkpLzMsci55Mj0oci55KzIqbykvM31lbHNlIHQ9TmFOLGE9TmFOO3JldHVybiByfSl9ZnVuY3Rpb24gbih0KXt2YXIgYT0wLHI9MCxlPU5hTixuPU5hTjtyZXR1cm4gZnVuY3Rpb24oaSl7aWYoaXNOYU4oZSkmJiEoaS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8pKXRocm93IG5ldyBFcnJvcihcInBhdGggbXVzdCBzdGFydCB3aXRoIG1vdmV0b1wiKTt2YXIgbz10KGksYSxyLGUsbik7cmV0dXJuIGkudHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiYoYT1lLHI9biksdm9pZCAwIT09aS54JiYoYT1pLnJlbGF0aXZlP2EraS54OmkueCksdm9pZCAwIT09aS55JiYocj1pLnJlbGF0aXZlP3IraS55OmkueSksaS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8mJihlPWEsbj1yKSxvfX1mdW5jdGlvbiBpKHQsYSxyLGUsaSxvKXtyZXR1cm4gYXNzZXJ0TnVtYmVycyh0LGEscixlLGksbyksbihmdW5jdGlvbihuLHMsaCx1KXt2YXIgYz1uLngxLG09bi54MixfPW4ucmVsYXRpdmUmJiFpc05hTih1KSxUPXZvaWQgMCE9PW4ueD9uLng6Xz8wOnMsTz12b2lkIDAhPT1uLnk/bi55Ol8/MDpoO2Z1bmN0aW9uIHAodCl7cmV0dXJuIHQqdH1uLnR5cGUmU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyYmMCE9PWEmJihuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxuLnk9bi5yZWxhdGl2ZT8wOmgpLG4udHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJjAhPT1yJiYobi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sbi54PW4ucmVsYXRpdmU/MDpzKSx2b2lkIDAhPT1uLngmJihuLng9bi54KnQrTypyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueSYmKG4ueT1UKmErbi55KmUrKF8/MDpvKSksdm9pZCAwIT09bi54MSYmKG4ueDE9bi54MSp0K24ueTEqcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkxJiYobi55MT1jKmErbi55MSplKyhfPzA6bykpLHZvaWQgMCE9PW4ueDImJihuLngyPW4ueDIqdCtuLnkyKnIrKF8/MDppKSksdm9pZCAwIT09bi55MiYmKG4ueTI9bSphK24ueTIqZSsoXz8wOm8pKTt2YXIgeT10KmUtYSpyO2lmKHZvaWQgMCE9PW4ueFJvdCYmKDEhPT10fHwwIT09YXx8MCE9PXJ8fDEhPT1lKSlpZigwPT09eSlkZWxldGUgbi5yWCxkZWxldGUgbi5yWSxkZWxldGUgbi54Um90LGRlbGV0ZSBuLmxBcmNGbGFnLGRlbGV0ZSBuLnN3ZWVwRmxhZyxuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTztlbHNle3ZhciBTPW4ueFJvdCpNYXRoLlBJLzE4MCxmPU1hdGguc2luKFMpLFY9TWF0aC5jb3MoUyksTj0xL3Aobi5yWCksRD0xL3Aobi5yWSksUD1wKFYpKk4rcChmKSpELGw9MipmKlYqKE4tRCksdj1wKGYpKk4rcChWKSpELEU9UCplKmUtbCphKmUrdiphKmEsQT1sKih0KmUrYSpyKS0yKihQKnIqZSt2KnQqYSksZD1QKnIqci1sKnQqcit2KnQqdCxHPShNYXRoLmF0YW4yKEEsRS1kKStNYXRoLlBJKSVNYXRoLlBJLzIsQz1NYXRoLnNpbihHKSx4PU1hdGguY29zKEcpO24uclg9TWF0aC5hYnMoeSkvTWF0aC5zcXJ0KEUqcCh4KStBKkMqeCtkKnAoQykpLG4uclk9TWF0aC5hYnMoeSkvTWF0aC5zcXJ0KEUqcChDKS1BKkMqeCtkKnAoeCkpLG4ueFJvdD0xODAqRy9NYXRoLlBJfXJldHVybiB2b2lkIDAhPT1uLnN3ZWVwRmxhZyYmMD55JiYobi5zd2VlcEZsYWc9KyFuLnN3ZWVwRmxhZyksbn0pfWZ1bmN0aW9uIG8oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGE9e307Zm9yKHZhciByIGluIHQpYVtyXT10W3JdO3JldHVybiBhfX10LlJPVU5EPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIE1hdGgucm91bmQoYSp0KS90fXJldHVybiB2b2lkIDA9PT10JiYodD0xZTEzKSxhc3NlcnROdW1iZXJzKHQpLGZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10LngxJiYodC54MT1hKHQueDEpKSx2b2lkIDAhPT10LnkxJiYodC55MT1hKHQueTEpKSx2b2lkIDAhPT10LngyJiYodC54Mj1hKHQueDIpKSx2b2lkIDAhPT10LnkyJiYodC55Mj1hKHQueTIpKSx2b2lkIDAhPT10LngmJih0Lng9YSh0LngpKSx2b2lkIDAhPT10LnkmJih0Lnk9YSh0LnkpKSx0fX0sdC5UT19BQlM9YSx0LlRPX1JFTD1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZXx8KHZvaWQgMCE9PXQueDEmJih0LngxLT1hKSx2b2lkIDAhPT10LnkxJiYodC55MS09ciksdm9pZCAwIT09dC54MiYmKHQueDItPWEpLHZvaWQgMCE9PXQueTImJih0LnkyLT1yKSx2b2lkIDAhPT10LngmJih0LngtPWEpLHZvaWQgMCE9PXQueSYmKHQueS09ciksdC5yZWxhdGl2ZT0hMCksdH0pfSx0Lk5PUk1BTElaRV9IVlo9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMCksdm9pZCAwPT09YSYmKGE9ITApLHZvaWQgMD09PXImJihyPSEwKSxuKGZ1bmN0aW9uKGUsbixpLG8scyl7aWYoaXNOYU4obykmJiEoZS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8pKXRocm93IG5ldyBFcnJvcihcInBhdGggbXVzdCBzdGFydCB3aXRoIG1vdmV0b1wiKTtyZXR1cm4gYSYmZS50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLnk9ZS5yZWxhdGl2ZT8wOmkpLHImJmUudHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLng9ZS5yZWxhdGl2ZT8wOm4pLHQmJmUudHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS54PWUucmVsYXRpdmU/by1uOm8sZS55PWUucmVsYXRpdmU/cy1pOnMpLGUudHlwZSZTVkdQYXRoRGF0YS5BUkMmJigwPT09ZS5yWHx8MD09PWUuclkpJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZGVsZXRlIGUuclgsZGVsZXRlIGUuclksZGVsZXRlIGUueFJvdCxkZWxldGUgZS5sQXJjRmxhZyxkZWxldGUgZS5zd2VlcEZsYWcpLGV9KX0sdC5OT1JNQUxJWkVfU1Q9cix0LlFUX1RPX0M9ZSx0LklORk89bix0LlNBTklUSVpFPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCk7dmFyIGE9TmFOLHI9TmFOLGU9TmFOLGk9TmFOO3JldHVybiBuKGZ1bmN0aW9uKG4sbyxzLGgsdSl7dmFyIGM9TWF0aC5hYnMsbT0hMSxfPTAsVD0wO2lmKG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8mJihfPWlzTmFOKGEpPzA6by1hLFQ9aXNOYU4ocik/MDpzLXIpLG4udHlwZSYoU1ZHUGF0aERhdGEuQ1VSVkVfVE98U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPKT8oYT1uLnJlbGF0aXZlP28rbi54MjpuLngyLHI9bi5yZWxhdGl2ZT9zK24ueTI6bi55Mik6KGE9TmFOLHI9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8/KGU9aXNOYU4oZSk/bzoyKm8tZSxpPWlzTmFOKGkpP3M6MipzLWkpOm4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPPyhlPW4ucmVsYXRpdmU/bytuLngxOm4ueDEsaT1uLnJlbGF0aXZlP3Mrbi55MTpuLnkyKTooZT1OYU4saT1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5MSU5FX0NPTU1BTkRTfHxuLnR5cGUmU1ZHUGF0aERhdGEuQVJDJiYoMD09PW4uclh8fDA9PT1uLnJZfHwhbi5sQXJjRmxhZyl8fG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyl7dmFyIE89dm9pZCAwPT09bi54PzA6bi5yZWxhdGl2ZT9uLng6bi54LW8scD12b2lkIDA9PT1uLnk/MDpuLnJlbGF0aXZlP24ueTpuLnktcztfPWlzTmFOKGUpP3ZvaWQgMD09PW4ueDE/XzpuLnJlbGF0aXZlP24ueDpuLngxLW86ZS1vLFQ9aXNOYU4oaSk/dm9pZCAwPT09bi55MT9UOm4ucmVsYXRpdmU/bi55Om4ueTEtczppLXM7dmFyIHk9dm9pZCAwPT09bi54Mj8wOm4ucmVsYXRpdmU/bi54Om4ueDItbyxTPXZvaWQgMD09PW4ueTI/MDpuLnJlbGF0aXZlP24ueTpuLnkyLXM7YyhPKTw9dCYmYyhwKTw9dCYmYyhfKTw9dCYmYyhUKTw9dCYmYyh5KTw9dCYmYyhTKTw9dCYmKG09ITApfXJldHVybiBuLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmYyhvLWgpPD10JiZjKHMtdSk8PXQmJihtPSEwKSxtP1tdOm59KX0sdC5NQVRSSVg9aSx0LlJPVEFURT1mdW5jdGlvbih0LGEscil7dm9pZCAwPT09YSYmKGE9MCksdm9pZCAwPT09ciYmKHI9MCksYXNzZXJ0TnVtYmVycyh0LGEscik7dmFyIGU9TWF0aC5zaW4odCksbj1NYXRoLmNvcyh0KTtyZXR1cm4gaShuLGUsLWUsbixhLWEqbityKmUsci1hKmUtcipuKX0sdC5UUkFOU0xBVEU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MCksYXNzZXJ0TnVtYmVycyh0LGEpLGkoMSwwLDAsMSx0LGEpfSx0LlNDQUxFPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHZvaWQgMD09PWEmJihhPXQpLGFzc2VydE51bWJlcnModCxhKSxpKHQsMCwwLGEsMCwwKX0sdC5TS0VXX1g9ZnVuY3Rpb24odCl7cmV0dXJuIGFzc2VydE51bWJlcnModCksaSgxLDAsTWF0aC5hdGFuKHQpLDEsMCwwKX0sdC5TS0VXX1k9ZnVuY3Rpb24odCl7cmV0dXJuIGFzc2VydE51bWJlcnModCksaSgxLE1hdGguYXRhbih0KSwwLDEsMCwwKX0sdC5YX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCksaSgtMSwwLDAsMSx0LDApfSx0LllfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYXNzZXJ0TnVtYmVycyh0KSxpKDEsMCwwLC0xLDAsdCl9LHQuQV9UT19DPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiBTVkdQYXRoRGF0YS5BUkM9PT10LnR5cGU/YTJjKHQsdC5yZWxhdGl2ZT8wOmEsdC5yZWxhdGl2ZT8wOnIpOnR9KX0sdC5BTk5PVEFURV9BUkNTPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiB0LnJlbGF0aXZlJiYoYT0wLHI9MCksU1ZHUGF0aERhdGEuQVJDPT09dC50eXBlJiZhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpLHR9KX0sdC5DTE9ORT1vLHQuQ0FMQ1VMQVRFX0JPVU5EUz1mdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKHQpe3ZhciBhPXt9O2Zvcih2YXIgciBpbiB0KWFbcl09dFtyXTtyZXR1cm4gYX0saT1hKCksbz1lKCkscz1yKCksaD1uKGZ1bmN0aW9uKGEscixlKXt2YXIgbj1zKG8oaSh0KGEpKSkpO2Z1bmN0aW9uIHUodCl7dD5oLm1heFgmJihoLm1heFg9dCksdDxoLm1pblgmJihoLm1pblg9dCl9ZnVuY3Rpb24gYyh0KXt0PmgubWF4WSYmKGgubWF4WT10KSx0PGgubWluWSYmKGgubWluWT10KX1pZihuLnR5cGUmU1ZHUGF0aERhdGEuRFJBV0lOR19DT01NQU5EUyYmKHUociksYyhlKSksbi50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJnUobi54KSxuLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiZjKG4ueSksbi50eXBlJlNWR1BhdGhEYXRhLkxJTkVfVE8mJih1KG4ueCksYyhuLnkpKSxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE8pe3Uobi54KSxjKG4ueSk7Zm9yKHZhciBtPTAsXz1iZXppZXJSb290KHIsbi54MSxuLngyLG4ueCk7bTxfLmxlbmd0aDttKyspMDwoRz1fW21dKSYmMT5HJiZ1KGJlemllckF0KHIsbi54MSxuLngyLG4ueCxHKSk7Zm9yKHZhciBUPTAsTz1iZXppZXJSb290KGUsbi55MSxuLnkyLG4ueSk7VDxPLmxlbmd0aDtUKyspMDwoRz1PW1RdKSYmMT5HJiZjKGJlemllckF0KGUsbi55MSxuLnkyLG4ueSxHKSl9aWYobi50eXBlJlNWR1BhdGhEYXRhLkFSQyl7dShuLngpLGMobi55KSxhbm5vdGF0ZUFyY0NvbW1hbmQobixyLGUpO2Zvcih2YXIgcD1uLnhSb3QvMTgwKk1hdGguUEkseT1NYXRoLmNvcyhwKSpuLnJYLFM9TWF0aC5zaW4ocCkqbi5yWCxmPS1NYXRoLnNpbihwKSpuLnJZLFY9TWF0aC5jb3MocCkqbi5yWSxOPW4ucGhpMTxuLnBoaTI/W24ucGhpMSxuLnBoaTJdOi0xODA+bi5waGkyP1tuLnBoaTIrMzYwLG4ucGhpMSszNjBdOltuLnBoaTIsbi5waGkxXSxEPU5bMF0sUD1OWzFdLGw9ZnVuY3Rpb24odCl7dmFyIGE9dFswXSxyPXRbMV0sZT0xODAqTWF0aC5hdGFuMihyLGEpL01hdGguUEk7cmV0dXJuIGU8RD9lKzM2MDplfSx2PTAsRT1pbnRlcnNlY3Rpb25Vbml0Q2lyY2xlTGluZShmLC15LDApLm1hcChsKTt2PEUubGVuZ3RoO3YrKykoRz1FW3ZdKT5EJiZHPFAmJnUoYXJjQXQobi5jWCx5LGYsRykpO2Zvcih2YXIgQT0wLGQ9aW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUoViwtUywwKS5tYXAobCk7QTxkLmxlbmd0aDtBKyspe3ZhciBHOyhHPWRbQV0pPkQmJkc8UCYmYyhhcmNBdChuLmNZLFMsVixHKSl9fXJldHVybiBhfSk7cmV0dXJuIGgubWluWD0xLzAsaC5tYXhYPS0xLzAsaC5taW5ZPTEvMCxoLm1heFk9LTEvMCxofX0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcnx8KFNWR1BhdGhEYXRhVHJhbnNmb3JtZXI9e30pKTt2YXIgX2EsX2EkMSxUcmFuc2Zvcm1hYmxlU1ZHPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC5wcm90b3R5cGUucm91bmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUk9VTkQodCkpfSx0LnByb3RvdHlwZS50b0Ficz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRPX0FCUygpKX0sdC5wcm90b3R5cGUudG9SZWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UT19SRUwoKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZUhWWj1mdW5jdGlvbih0LGEscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTk9STUFMSVpFX0hWWih0LGEscikpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVTVD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk5PUk1BTElaRV9TVCgpKX0sdC5wcm90b3R5cGUucXRUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5RVF9UT19DKCkpfSx0LnByb3RvdHlwZS5hVG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQV9UT19DKCkpfSx0LnByb3RvdHlwZS5zYW5pdGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TQU5JVElaRSh0KSl9LHQucHJvdG90eXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0LGEpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRSQU5TTEFURSh0LGEpKX0sdC5wcm90b3R5cGUuc2NhbGU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TQ0FMRSh0LGEpKX0sdC5wcm90b3R5cGUucm90YXRlPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ST1RBVEUodCxhLHIpKX0sdC5wcm90b3R5cGUubWF0cml4PWZ1bmN0aW9uKHQsYSxyLGUsbixpKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5NQVRSSVgodCxhLHIsZSxuLGkpKX0sdC5wcm90b3R5cGUuc2tld1g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0tFV19YKHQpKX0sdC5wcm90b3R5cGUuc2tld1k9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0tFV19ZKHQpKX0sdC5wcm90b3R5cGUueFN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlhfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLnlTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ZX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS5hbm5vdGF0ZUFyY3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5BTk5PVEFURV9BUkNTKCkpfSx0fSgpLGlzV2hpdGVTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm5cIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcclwiPT09dHx8XCJcXG5cIj09PXR9LGlzRGlnaXQ9ZnVuY3Rpb24odCl7cmV0dXJuXCIwXCIuY2hhckNvZGVBdCgwKTw9dC5jaGFyQ29kZUF0KDApJiZ0LmNoYXJDb2RlQXQoMCk8PVwiOVwiLmNoYXJDb2RlQXQoMCl9LFNWR1BhdGhEYXRhUGFyc2VyJCQxPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoKXt2YXIgYT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGEuY3VyTnVtYmVyPVwiXCIsYS5jdXJDb21tYW5kVHlwZT0tMSxhLmN1ckNvbW1hbmRSZWxhdGl2ZT0hMSxhLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITAsYS5jdXJOdW1iZXJIYXNFeHA9ITEsYS5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsYS5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLGEuY3VyQXJncz1bXSxhfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCYmKHQ9W10pLHRoaXMucGFyc2UoXCIgXCIsdCksMCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgdGhlIHBhdGggZW5kLlwiKTtyZXR1cm4gdH0sYS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24odCxhKXt2YXIgcj10aGlzO3ZvaWQgMD09PWEmJihhPVtdKTtmb3IodmFyIGU9ZnVuY3Rpb24odCl7YS5wdXNoKHQpLHIuY3VyQXJncy5sZW5ndGg9MCxyLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9LG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpZihpc0RpZ2l0KGkpKXRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPXRoaXMuY3VyTnVtYmVySGFzRXhwO2Vsc2UgaWYoXCJlXCIhPT1pJiZcIkVcIiE9PWkpaWYoXCItXCIhPT1pJiZcIitcIiE9PWl8fCF0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHMpaWYoXCIuXCIhPT1pfHx0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsKXtpZih0aGlzLmN1ck51bWJlciYmLTEhPT10aGlzLmN1ckNvbW1hbmRUeXBlKXt2YXIgbz1OdW1iZXIodGhpcy5jdXJOdW1iZXIpO2lmKGlzTmFOKG8pKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkludmFsaWQgbnVtYmVyIGVuZGluZyBhdCBcIituKTtpZih0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQVJDKWlmKDA9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHwxPT09dGhpcy5jdXJBcmdzLmxlbmd0aCl7aWYoMD5vKXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgbnVtYmVyLCBnb3QgXCInK28rJ1wiIGF0IGluZGV4IFwiJytuKydcIicpfWVsc2UgaWYoKDM9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHw0PT09dGhpcy5jdXJBcmdzLmxlbmd0aCkmJlwiMFwiIT09dGhpcy5jdXJOdW1iZXImJlwiMVwiIT09dGhpcy5jdXJOdW1iZXIpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBhIGZsYWcsIGdvdCBcIicrdGhpcy5jdXJOdW1iZXIrJ1wiIGF0IGluZGV4IFwiJytuKydcIicpO3RoaXMuY3VyQXJncy5wdXNoKG8pLHRoaXMuY3VyQXJncy5sZW5ndGg9PT1DT01NQU5EX0FSR19DT1VOVFNbdGhpcy5jdXJDb21tYW5kVHlwZV0mJihTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9lKHt0eXBlOlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDpvfSk6U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9lKHt0eXBlOlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx5Om99KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuTU9WRV9UT3x8dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkxJTkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTz8oZSh7dHlwZTp0aGlzLmN1ckNvbW1hbmRUeXBlLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6dGhpcy5jdXJBcmdzWzBdLHk6dGhpcy5jdXJBcmdzWzFdfSksU1ZHUGF0aERhdGEuTU9WRV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGUmJih0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8pKTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQ1VSVkVfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5DVVJWRV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4MTp0aGlzLmN1ckFyZ3NbMF0seTE6dGhpcy5jdXJBcmdzWzFdLHgyOnRoaXMuY3VyQXJnc1syXSx5Mjp0aGlzLmN1ckFyZ3NbM10seDp0aGlzLmN1ckFyZ3NbNF0seTp0aGlzLmN1ckFyZ3NbNV19KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgyOnRoaXMuY3VyQXJnc1swXSx5Mjp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuUVVBRF9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLlFVQURfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5BUkMmJmUoe3R5cGU6U1ZHUGF0aERhdGEuQVJDLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHJYOnRoaXMuY3VyQXJnc1swXSxyWTp0aGlzLmN1ckFyZ3NbMV0seFJvdDp0aGlzLmN1ckFyZ3NbMl0sbEFyY0ZsYWc6dGhpcy5jdXJBcmdzWzNdLHN3ZWVwRmxhZzp0aGlzLmN1ckFyZ3NbNF0seDp0aGlzLmN1ckFyZ3NbNV0seTp0aGlzLmN1ckFyZ3NbNl19KSksdGhpcy5jdXJOdW1iZXI9XCJcIix0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz0hMSx0aGlzLmN1ck51bWJlckhhc0V4cD0hMSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITEsdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfWlmKCFpc1doaXRlU3BhY2UoaSkpaWYoXCIsXCI9PT1pJiZ0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExO2Vsc2UgaWYoXCIrXCIhPT1pJiZcIi1cIiE9PWkmJlwiLlwiIT09aSl7aWYoMCE9PXRoaXMuY3VyQXJncy5sZW5ndGgpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgaW5kZXggXCIrbitcIi5cIik7aWYoIXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytpKydcIiBhdCBpbmRleCAnK24rXCIuIENvbW1hbmQgY2Fubm90IGZvbGxvdyBjb21tYVwiKTtpZih0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITEsXCJ6XCIhPT1pJiZcIlpcIiE9PWkpaWYoXCJoXCI9PT1pfHxcIkhcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiaFwiPT09aTtlbHNlIGlmKFwidlwiPT09aXx8XCJWXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwidlwiPT09aTtlbHNlIGlmKFwibVwiPT09aXx8XCJNXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuTU9WRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cIm1cIj09PWk7ZWxzZSBpZihcImxcIj09PWl8fFwiTFwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJsXCI9PT1pO2Vsc2UgaWYoXCJjXCI9PT1pfHxcIkNcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImNcIj09PWk7ZWxzZSBpZihcInNcIj09PWl8fFwiU1wiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInNcIj09PWk7ZWxzZSBpZihcInFcIj09PWl8fFwiUVwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlFVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJxXCI9PT1pO2Vsc2UgaWYoXCJ0XCI9PT1pfHxcIlRcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInRcIj09PWk7ZWxzZXtpZihcImFcIiE9PWkmJlwiQVwiIT09aSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytpKydcIiBhdCBpbmRleCAnK24rXCIuXCIpO3RoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuQVJDLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiYVwiPT09aX1lbHNlIGEucHVzaCh7dHlwZTpTVkdQYXRoRGF0YS5DTE9TRV9QQVRIfSksdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwLHRoaXMuY3VyQ29tbWFuZFR5cGU9LTF9ZWxzZSB0aGlzLmN1ck51bWJlcj1pLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD1cIi5cIj09PWl9ZWxzZSB0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITA7ZWxzZSB0aGlzLmN1ck51bWJlcis9aTtlbHNlIHRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRXhwPSEwfXJldHVybiBhfSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyx7cGFyc2U6e3ZhbHVlOmZ1bmN0aW9uKGEscil7dm9pZCAwPT09ciYmKHI9W10pO2Zvcih2YXIgZT0wLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlLmNhbGwodGhpcyxhKTtlPG4ubGVuZ3RoO2UrKyl7dmFyIGk9bltlXSxvPXQoaSk7QXJyYXkuaXNBcnJheShvKT9yLnB1c2guYXBwbHkocixvKTpyLnB1c2gobyl9cmV0dXJuIHJ9fX0pfSxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxTVkdQYXRoRGF0YT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9hLnBhcnNlKHIpOnIsZX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxhLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD1TVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxyPTAsZT10aGlzLmNvbW1hbmRzO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj10KGVbcl0pO0FycmF5LmlzQXJyYXkobik/YS5wdXNoLmFwcGx5KGEsbik6YS5wdXNoKG4pfXJldHVybiB0aGlzLmNvbW1hbmRzPWEsdGhpc30sYS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVNWR1BhdGgkJDEodCl9LGEucGFyc2U9ZnVuY3Rpb24odCl7dmFyIGE9bmV3IFNWR1BhdGhEYXRhUGFyc2VyJCQxLHI9W107cmV0dXJuIGEucGFyc2UodCxyKSxhLmZpbmlzaChyKSxyfSxhLkNMT1NFX1BBVEg9MSxhLk1PVkVfVE89MixhLkhPUklaX0xJTkVfVE89NCxhLlZFUlRfTElORV9UTz04LGEuTElORV9UTz0xNixhLkNVUlZFX1RPPTMyLGEuU01PT1RIX0NVUlZFX1RPPTY0LGEuUVVBRF9UTz0xMjgsYS5TTU9PVEhfUVVBRF9UTz0yNTYsYS5BUkM9NTEyLGEuTElORV9DT01NQU5EUz1hLkxJTkVfVE98YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPLGEuRFJBV0lOR19DT01NQU5EUz1hLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE98YS5MSU5FX1RPfGEuQ1VSVkVfVE98YS5TTU9PVEhfQ1VSVkVfVE98YS5RVUFEX1RPfGEuU01PT1RIX1FVQURfVE98YS5BUkMsYX0oVHJhbnNmb3JtYWJsZVNWRyksQ09NTUFORF9BUkdfQ09VTlRTPSgoX2E9e30pW1NWR1BhdGhEYXRhLk1PVkVfVE9dPTIsX2FbU1ZHUGF0aERhdGEuTElORV9UT109MixfYVtTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPXT0xLF9hW1NWR1BhdGhEYXRhLlZFUlRfTElORV9UT109MSxfYVtTVkdQYXRoRGF0YS5DTE9TRV9QQVRIXT0wLF9hW1NWR1BhdGhEYXRhLlFVQURfVE9dPTQsX2FbU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE9dPTIsX2FbU1ZHUGF0aERhdGEuQ1VSVkVfVE9dPTYsX2FbU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPXT00LF9hW1NWR1BhdGhEYXRhLkFSQ109NyxfYSksV1NQPVwiIFwiO2Z1bmN0aW9uIGVuY29kZVNWR1BhdGgkJDEodCl7dmFyIGE9XCJcIjtBcnJheS5pc0FycmF5KHQpfHwodD1bdF0pO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgZT10W3JdO2lmKGUudHlwZT09PVNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpYSs9XCJ6XCI7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPKWErPShlLnJlbGF0aXZlP1wiaFwiOlwiSFwiKStlLng7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJ2XCI6XCJWXCIpK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLk1PVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJtXCI6XCJNXCIpK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cImxcIjpcIkxcIikrZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5DVVJWRV9UTylhKz0oZS5yZWxhdGl2ZT9cImNcIjpcIkNcIikrZS54MStXU1ArZS55MStXU1ArZS54MitXU1ArZS55MitXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJzXCI6XCJTXCIpK2UueDIrV1NQK2UueTIrV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuUVVBRF9UTylhKz0oZS5yZWxhdGl2ZT9cInFcIjpcIlFcIikrZS54MStXU1ArZS55MStXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTylhKz0oZS5yZWxhdGl2ZT9cInRcIjpcIlRcIikrZS54K1dTUCtlLnk7ZWxzZXtpZihlLnR5cGUhPT1TVkdQYXRoRGF0YS5BUkMpdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNvbW1hbmQgdHlwZSBcIicrZS50eXBlKydcIiBhdCBpbmRleCAnK3IrXCIuXCIpO2ErPShlLnJlbGF0aXZlP1wiYVwiOlwiQVwiKStlLnJYK1dTUCtlLnJZK1dTUCtlLnhSb3QrV1NQKyArZS5sQXJjRmxhZytXU1ArICtlLnN3ZWVwRmxhZytXU1ArZS54K1dTUCtlLnl9fXJldHVybiBhfXZhciBTVkdQYXRoRGF0YSQxPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEocil7dmFyIGU9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBlLmNvbW1hbmRzPVwic3RyaW5nXCI9PXR5cGVvZiByP2EucGFyc2Uocik6cixlfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5lbmNvZGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5lbmNvZGUodGhpcy5jb21tYW5kcyl9LGEucHJvdG90eXBlLmdldEJvdW5kcz1mdW5jdGlvbigpe3ZhciB0PVNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQ0FMQ1VMQVRFX0JPVU5EUygpO3JldHVybiB0aGlzLnRyYW5zZm9ybSh0KSx0fSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7Zm9yKHZhciBhPVtdLHI9MCxlPXRoaXMuY29tbWFuZHM7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXQoZVtyXSk7QXJyYXkuaXNBcnJheShuKT9hLnB1c2guYXBwbHkoYSxuKTphLnB1c2gobil9cmV0dXJuIHRoaXMuY29tbWFuZHM9YSx0aGlzfSxhLmVuY29kZT1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlU1ZHUGF0aCQkMSh0KX0sYS5wYXJzZT1mdW5jdGlvbih0KXt2YXIgYT1uZXcgU1ZHUGF0aERhdGFQYXJzZXIkJDEscj1bXTtyZXR1cm4gYS5wYXJzZSh0LHIpLGEuZmluaXNoKHIpLHJ9LGEuQ0xPU0VfUEFUSD0xLGEuTU9WRV9UTz0yLGEuSE9SSVpfTElORV9UTz00LGEuVkVSVF9MSU5FX1RPPTgsYS5MSU5FX1RPPTE2LGEuQ1VSVkVfVE89MzIsYS5TTU9PVEhfQ1VSVkVfVE89NjQsYS5RVUFEX1RPPTEyOCxhLlNNT09USF9RVUFEX1RPPTI1NixhLkFSQz01MTIsYS5MSU5FX0NPTU1BTkRTPWEuTElORV9UT3xhLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE8sYS5EUkFXSU5HX0NPTU1BTkRTPWEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UT3xhLkxJTkVfVE98YS5DVVJWRV9UT3xhLlNNT09USF9DVVJWRV9UT3xhLlFVQURfVE98YS5TTU9PVEhfUVVBRF9UT3xhLkFSQyxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxDT01NQU5EX0FSR19DT1VOVFMkMT0oKF9hJDE9e30pW1NWR1BhdGhEYXRhJDEuTU9WRV9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuTElORV9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuSE9SSVpfTElORV9UT109MSxfYSQxW1NWR1BhdGhEYXRhJDEuVkVSVF9MSU5FX1RPXT0xLF9hJDFbU1ZHUGF0aERhdGEkMS5DTE9TRV9QQVRIXT0wLF9hJDFbU1ZHUGF0aERhdGEkMS5RVUFEX1RPXT00LF9hJDFbU1ZHUGF0aERhdGEkMS5TTU9PVEhfUVVBRF9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuQ1VSVkVfVE9dPTYsX2EkMVtTVkdQYXRoRGF0YSQxLlNNT09USF9DVVJWRV9UT109NCxfYSQxW1NWR1BhdGhEYXRhJDEuQVJDXT03LF9hJDEpO2V4cG9ydHtTVkdQYXRoRGF0YSQxIGFzIFNWR1BhdGhEYXRhLENPTU1BTkRfQVJHX0NPVU5UUyQxIGFzIENPTU1BTkRfQVJHX0NPVU5UUyxlbmNvZGVTVkdQYXRoJCQxIGFzIGVuY29kZVNWR1BhdGgsU1ZHUGF0aERhdGFQYXJzZXIkJDEgYXMgU1ZHUGF0aERhdGFQYXJzZXIsU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TVkdQYXRoRGF0YS5tb2R1bGUuanMubWFwXG4iLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiIsImltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uLy4uL2NvcmUvTmV0d29yayc7XHJcbmltcG9ydCBTb3VyY2VQYXR0ZXJucyBmcm9tICcuLi8uLi9jb3JlL1NvdXJjZVBhdHRlcm5zJztcclxuaW1wb3J0IFZlaW5Ob2RlIGZyb20gJy4uLy4uL2NvcmUvVmVpbk5vZGUnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi9jb3JlL1BhdGgnO1xyXG5pbXBvcnQgU1ZHTG9hZGVyIGZyb20gJy4uLy4uL2NvcmUvU1ZHTG9hZGVyJztcclxuaW1wb3J0IHsgcmFuZG9tLCBnZXRDaXJjbGVPZlBvaW50cyB9IGZyb20gJy4uLy4uL2NvcmUvVXRpbGl0aWVzJztcclxuaW1wb3J0IHsgc2V0dXBLZXlMaXN0ZW5lcnMgfSBmcm9tICcuLi8uLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zJztcclxuXHJcbmNvbnN0IGxlYWYgPSByZXF1aXJlKCcuLi9zdmcvbGVhZi5zdmcnKTtcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG5jb25zdCBUUklBTkdMRSA9IDA7XHJcbmNvbnN0IFNRVUFSRSA9IDE7XHJcbmNvbnN0IENJUkNMRSA9IDI7XHJcbmNvbnN0IExFQUYgPSAzO1xyXG5sZXQgY3VycmVudEJvdW5kc1NoYXBlID0gVFJJQU5HTEU7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgpO1xyXG5cclxuICAvLyBBZGQgdGhlIGJvdW5kcywgc291cmNlcywgYW5kIHJvb3Qgbm9kZXNcclxuICByZXNldE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcclxuICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgYWRkQm91bmRzKCk7XHJcbiAgYWRkT2JzdGFjbGVzKCk7XHJcbiAgYWRkU291cmNlcygpO1xyXG4gIGFkZFJvb3RWZWlucygpO1xyXG59XHJcblxyXG4gIGxldCBhZGRCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2goY3VycmVudEJvdW5kc1NoYXBlKSB7XHJcbiAgICAgIGNhc2UgVFJJQU5HTEU6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRUcmlhbmdsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTUVVBUkU6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRTcXVhcmVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0lSQ0xFOlxyXG4gICAgICAgIG5ldHdvcmsuYm91bmRzID0gZ2V0Q2lyY2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExFQUY6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRMZWFmQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGxldCBnZXRUcmlhbmdsZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbY3ggLSA0MDAsIGN5ICsgMzAwXSxcclxuICAgICAgICAgIFtjeCwgY3kgLSAzNTBdLFxyXG4gICAgICAgICAgW2N4ICsgNDAwLCBjeSArIDMwMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldFNxdWFyZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDgwMDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbY3ggLSBzaWRlTGVuZ3RoLzIsIGN5IC0gc2lkZUxlbmd0aC8yXSwgIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgW2N4ICsgc2lkZUxlbmd0aC8yLCBjeSAtIHNpZGVMZW5ndGgvMl0sICAvLyB0b3AgcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICBbY3ggKyBzaWRlTGVuZ3RoLzIsIGN5ICsgc2lkZUxlbmd0aC8yXSwgIC8vIGJvdHRvbSByaWdodCBjb3JuZXJcclxuICAgICAgICAgIFtjeCAtIHNpZGVMZW5ndGgvMiwgY3kgKyBzaWRlTGVuZ3RoLzJdICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0Q2lyY2xlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoXHJcbiAgICAgICAgZ2V0Q2lyY2xlT2ZQb2ludHMoXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsICAgIC8vIGN4XHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLCAgIC8vIGN5XHJcbiAgICAgICAgICAzNTAsICAgICAgICAgICAgICAgICAgICAgIC8vIHJhZGl1c1xyXG4gICAgICAgICAgMTAwICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNvbHV0aW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0TGVhZkJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IDkwMDtcclxuICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSA5MDA7XHJcblxyXG4gICAgICBsZXQgcG9seWdvbiA9IFNWR0xvYWRlci5sb2FkKGxlYWYpWzBdO1xyXG5cclxuICAgICAgLy8gVHJhbnNsYXRlIHRoZSBkZXNpZ24gdG8gdGhlIHNjcmVlbiBjZW50ZXJcclxuICAgICAgZm9yKGxldCBwb2ludCBvZiBwb2x5Z29uKSB7XHJcbiAgICAgICAgcG9pbnRbMF0gPSBjeCAtIHNoYXBlV2lkdGgvMiArIHBvaW50WzBdO1xyXG4gICAgICAgIHBvaW50WzFdID0gY3kgLSBzaGFwZUhlaWdodC8yICsgcG9pbnRbMV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChwb2x5Z29uLCAnQm91bmRzJywgY3R4KTtcclxuICAgIH1cclxuXHJcbiAgbGV0IGFkZE9ic3RhY2xlcyA9ICgpID0+IHtcclxuICAgIC8vIFRlbiByYW5kb20gY2lyY2xlc1xyXG4gICAgLy8gZm9yKGxldCBpPTA7IGk8MTA7IGkrKykge1xyXG4gICAgLy8gICBvYnN0YWNsZXMucHVzaChcclxuICAgIC8vICAgICBuZXcgUGF0aChcclxuICAgIC8vICAgICAgIGdldENpcmNsZU9mUG9pbnRzKFxyXG4gICAgLy8gICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgKyByYW5kb20oLTMwMCwzMDApLFxyXG4gICAgLy8gICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgcmFuZG9tKC0zMDAsMzAwKSxcclxuICAgIC8vICAgICAgICAgcmFuZG9tKDIwLDcwKSxcclxuICAgIC8vICAgICAgICAgMTAwXHJcbiAgICAvLyAgICAgICApLFxyXG4gICAgLy8gICAgICAgJ09ic3RhY2xlJyxcclxuICAgIC8vICAgICAgIGN0eFxyXG4gICAgLy8gICAgIClcclxuICAgIC8vICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBTaW5nbGUgY2lyY2xlIGluIGNlbnRlclxyXG4gICAgbmV0d29yay5vYnN0YWNsZXMucHVzaChcclxuICAgICAgbmV3IFBhdGgoXHJcbiAgICAgICAgZ2V0Q2lyY2xlT2ZQb2ludHMoXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIsXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgOTAsXHJcbiAgICAgICAgICAyMDAsXHJcbiAgICAgICAgICAxMDBcclxuICAgICAgICApLFxyXG4gICAgICAgICdPYnN0YWNsZScsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgYWRkU291cmNlcyA9ICgpID0+IHtcclxuICAgIC8vIFNldCB1cCB0aGUgYXV4aW4gc291cmNlcyB1c2luZyBwcmUtbWFkZSBwYXR0ZXJuc1xyXG4gICAgbGV0IHJhbmRvbVNvdXJjZXMgPSBTb3VyY2VQYXR0ZXJucy5nZXRSYW5kb21Tb3VyY2VzKDUwMCwgY3R4LCBuZXR3b3JrLmJvdW5kcywgbmV0d29yay5vYnN0YWNsZXMpO1xyXG4gICAgbGV0IGdyaWRTb3VyY2VzID0gU291cmNlUGF0dGVybnMuZ2V0R3JpZE9mU291cmNlcygyMDAsIDIwMCwgY3R4LCBuZXR3b3JrLmJvdW5kcywgbmV0d29yay5vYnN0YWNsZXMpO1xyXG5cclxuICAgIG5ldHdvcmsuc291cmNlcyA9IGdyaWRTb3VyY2VzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgbGV0IGFkZFJvb3RWZWlucyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGgvMjtcclxuICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0LzI7XHJcblxyXG4gICAgc3dpdGNoKGN1cnJlbnRCb3VuZHNTaGFwZSkge1xyXG4gICAgICBjYXNlIFRSSUFOR0xFOlxyXG4gICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKGN4IC0gMzQwLCBjeSArIDI5MCksXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgLy8gICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgLy8gICAgIG51bGwsXHJcbiAgICAgICAgLy8gICAgIG5ldyBWZWMyKGN4LCBjeSAtIDMwMCksXHJcbiAgICAgICAgLy8gICAgIHRydWUsXHJcbiAgICAgICAgLy8gICAgIGN0eFxyXG4gICAgICAgIC8vICAgKVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIC8vIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgLy8gICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgLy8gICAgIG51bGwsXHJcbiAgICAgICAgLy8gICAgIG5ldyBWZWMyKGN4ICsgMzQwLCBjeSArIDI5MCksXHJcbiAgICAgICAgLy8gICAgIHRydWUsXHJcbiAgICAgICAgLy8gICAgIGN0eFxyXG4gICAgICAgIC8vICAgKVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBDSVJDTEU6XHJcbiAgICAgICAgbmV0d29yay5hZGRWZWluTm9kZShcclxuICAgICAgICAgIG5ldyBWZWluTm9kZShcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgbmV3IFZlYzIoY3gsIGN5ICsgMzAwKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFNRVUFSRTpcclxuICAgICAgICAvLyBBZGQgYSBzZXQgb2YgcmFuZG9tIHJvb3QgdmVpbnMgdGhyb3VnaG91dCBzY2VuZVxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG5ldyBWZWluTm9kZShcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tKHdpbmRvdy5pbm5lcldpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIExFQUY6XHJcbiAgICAgICAgLy8gUHV0IGEgc2luZ2xlIHJvb3Qgbm90ZSBhdCB0aGUgYmFzZSBvZiB0aGUgbGVhZlxyXG4gICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDUsXHJcbiAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIDIyMFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBjdHhcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4vLyBNYWluIHByb2dyYW0gbG9vcFxyXG5sZXQgdXBkYXRlID0gKHRpbWVzdGFtcCkgPT4ge1xyXG4gIG5ldHdvcmsudXBkYXRlKCk7XHJcbiAgbmV0d29yay5kcmF3KCk7XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgJ3InOlxyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gYiA9IHRvZ2dsZSB2aXNpYmlsaXR5IG9mIGJvdW5kc1xyXG4gICAgY2FzZSAnYic6XHJcbiAgICAgIG5ldHdvcmsuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICFuZXR3b3JrLnNldHRpbmdzLlNob3dCb3VuZHM7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIC8vIG8gPSB0b2dnbGUgdmlzaWJpbGl0eSBvZiBvYnN0YWNsZXNcclxuICAgIGNhc2UgJ28nOlxyXG4gICAgICBuZXR3b3JrLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgPSAhbmV0d29yay5zZXR0aW5ncy5TaG93T2JzdGFjbGVzO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcxJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gVFJJQU5HTEU7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcyJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gU1FVQVJFO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICAgIGN1cnJlbnRCb3VuZHNTaGFwZSA9IENJUkNMRTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzQnOlxyXG4gICAgICBjdXJyZW50Qm91bmRzU2hhcGUgPSBMRUFGO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEtpY2sgb2ZmIHRoZSBhcHBsaWNhdGlvblxyXG5zZXR1cCgpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zOmRjPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xL1xcXCIgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCIgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIiB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCIgeG1sbnM6aW5rc2NhcGU9XFxcImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcXFwiIGlkPVxcXCJzdmcyXFxcIiBzb2RpcG9kaTpkb2NuYW1lPVxcXCJsZWFmLTIuc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgOTAwLjAwMDAyIDg5OS45OTk5OVxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpbmtzY2FwZTp2ZXJzaW9uPVxcXCIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpXFxcIj48ZyBpZD1cXFwibGF5ZXIxXFxcIiBpbmtzY2FwZTpsYWJlbD1cXFwiQ2FscXVlIDFcXFwiIGlua3NjYXBlOmdyb3VwbW9kZT1cXFwibGF5ZXJcXFwiPjxwYXRoIGlkPVxcXCJwYXRoMzE4M1xcXCIgZD1cXFwiTSA0NTAuMjE4OTEsODI5LjA3NDM2IDQ1MC40NTEwNyw4MjguMjE0NiA0NTEuMDgzMTgsODI2LjQ1MjY4IDQ1Mi4wMTg2OSw4MjQuMDQ1MzUgNDUzLjE2MTA1LDgyMS4yNDkzMyA0NTQuNTg1OTgsODE2LjU1NzY5IDQ1NC45NDkzOCw4MTAuMjg5OTggNDU0LjE5ODk0LDgwMC4yNDA2NyA0NTIuMjgyMzgsNzg0LjIwNDIyIDQ1MC42MjYzMiw3NjkuODA0NzggNDQ4Ljk0MTY1LDc1Mi43NzgwNiA0NDcuNDI1NSw3MzUuMjUyIDQ0Ni4yNzQ5OSw3MTkuMzU0NTUgNDQ1LjMxNzIsNzA1LjY0ODI5IDQ0NC4zMjU3Miw2OTQuMDg4ODQgNDQzLjQxNzUxLDY4NS44OTMxOSA0NDIuNzA5NTcsNjgyLjI3ODM1IDQ0MC44NjU5OSw2ODEuMzgxMDEgNDM2LjcxMDU0LDY4MC45MjU4MSA0MzAuMjMyMTcsNjgwLjkxMjI4IDQyMS40MTk4Miw2ODEuMzM5OTMgMzczLjU2NDc2LDY4NC42NTI3OCAzNDMuODU5NDcsNjg3LjY2Nzc4IDMyMi44MjM4MSw2OTEuNzAxOTcgMzAwLjk3NzYyLDY5OC4wNzI0MSAyOTEuMDcwOTksNzAwLjgzOTc1IDI4MS4xOTM0Miw3MDIuNzM0MTIgMjY5LjczNDQ4LDcwMy45OTM1NSAyNTUuMDgzNzIsNzA0Ljg1NjA3IDI0My44MTUxOSw3MDUuMjMxIDIzNC4wMzQ3LDcwNS4zMjYgMjI2Ljc5MDY3LDcwNS4xNDYyOCAyMjMuMTMxNDgsNzA0LjY5NzA5IDIyMS4zODYwNSw3MDMuNzM2ODQgMjIxLjE1ODIsNzAyLjM5ODUgMjIyLjYyMjU3LDcwMC4xNzk4MyAyMjUuOTUzODEsNjk2LjU3ODU1IDIzMS4xOTUzNiw2OTAuMDkxOTcgMjM0LjU3Nyw2ODMuNTk1ODkgMjM1Ljg4Njg3LDY3Ny42NTIwNSAyMzQuOTEzMDgsNjcyLjgyMjE3IDIyOC44MjI2NCw2NjcuMDk0MDQgMjE2Ljg2MTU1LDY2MC44OTcyOSAxOTkuODY4NDgsNjU0LjU5MzgxIDE3OC42ODIxMiw2NDguNTQ1NTIgMTY2Ljg2MDg0LDY0NS40NTQyNyAxNTYuODkyMDUsNjQyLjYzODk0IDE0OS44MjQ1NSw2NDAuNDEwMTIgMTQ2LjcwNzA5LDYzOS4wNzg0MSAxNDYuNzQ2MDUsNjM3LjQyNjM0IDE0OC41MDcxOCw2MzQuMzUwMjMgMTUxLjgyOTcyLDYzMC4wODIzMiAxNTYuNTUyODksNjI0Ljg1NDg1IDE2My4yOTM3Nyw2MTcuNDAwMjMgMTY3LjA0ODU4LDYxMS44NDYzMSAxNjguNTA4NTUsNjA2Ljc4NjA1IDE2OC4zNjQ5Niw2MDAuODEyNDIgMTY1Ljg1MTMyLDU5NC4yNTA4NyAxNTkuMTc5NTMsNTg2LjU0MTc1IDE0Ny43MzA4Nyw1NzcuMDk5NDkgMTMwLjg4NjY0LDU2NS4zMzg1IDEyMC40NzA1Myw1NTguMjk4NzcgMTExLjk0MDY0LDU1Mi4zMDE4MiAxMDYuMTc3MTksNTQ3Ljk4MjkxIDEwNC4wNjA0NCw1NDUuOTc3MjkgMTA1LjEyNjQ3LDU0NC45MjQ0OCAxMDguMDI5MDMsNTQzLjE5OTc1IDExMi4zMjQ4Miw1NDEuMDQyMTUgMTE3LjU3MDU0LDUzOC42OTA3NyAxMzIuNDYxODksNTMxLjM3MjE5IDEzOS45MTk2NCw1MjMuOTU5MDUgMTQxLjE2MjM0LDUxNC4wMjE0IDEzNy40MDg1LDQ5OS4xMjkyNyAxMzIuNTk3MjEsNDgzLjIyODY1IDEyNy42NjMyLDQ2NS40MTI3NyAxMjMuNDA0LDQ0OC42NzkwNCAxMjAuNjE3MTUsNDM2LjAyNDkgMTE2LjQwODc1LDQxNy40NTY2MSAxMTAuMTk0NjksMzk0LjE4NTE3IDEwMy42OTU4MiwzNzIuMzIwNzYgOTguNjMzMDE2LDM1Ny45NzM1NiA5Ni4wNTAxODcsMzUyLjk3NjA2IDkyLjUwMDQ3MywzNDcuMjY4NCA4OC40NTE4MTEsMzQxLjU1NDA5IDg0LjM3MjEzNiwzMzYuNTM2NjUgODAuNzI2NzU2LDMzMi4xNzI0OCA3Ny44NjA1NjIsMzI4LjIzODE3IDc2LjA2MDg2MiwzMjUuMTY1MjIgNzUuNjE0OTY2LDMyMy4zODUxNCA5NC40NjcxODgsMzIwLjQwMjA0IDEzNC44OTIyMiwzMjMuOTY5ODUgMTc5LjY1Mjg4LDMzMS43ODUyNiAyMTEuNTExOTgsMzQxLjU0NDk1IDIxNi44NDcyMiwzNDQuMTA4MjkgMjIzLjY0ODAzLDM0Ny4xNzI1NSAyMzEuMDQwMiwzNTAuMzUzMTkgMjM4LjE0OTU1LDM1My4yNjU2MSAyNDUuNDA4MzUsMzU2LjQyNDA5IDI1My4yMDYwMiwzNjAuMjc0NjUgMjYwLjYwNjQxLDM2NC4zMzAzOSAyNjYuNjczMzcsMzY4LjEwNDM4IDI4NC43NzU0NywzNzkuMjM2NTkgMjk2LjQ3MTQ1LDM4Mi45NTM4MyAzMDMuMTI1MDgsMzc5LjI1NzYzIDMwNi4xMDAxMywzNjguMTQ5NTcgMzA3LjkwNDgzLDM1Ni4yMTY3MiAzMTAuNzE4NDMsMzQzLjgyNDEgMzE0LjMyMTMxLDMzMS44MDcyMyAzMTguNDkzODMsMzIxLjAwMTYzIDMyMC42NTkxNywzMTUuMTE1MjMgMzIzLjE2MzgyLDMwNi43NjE2OSAzMjUuNjk3NTEsMjk3LjA1MzQ3IDMyNy45NDk5NSwyODcuMTAzMDMgMzMwLjM4Nzg2LDI3NC41ODI3NyAzMzEuNTE2NTksMjY2LjE0MDQzIDMzMS40NjY4OSwyNjAuMDEwNDcgMzMwLjM2OTUzLDI1NC40MjczOSAzMjguMDM2OTcsMjQ0LjAwNjM2IDMyOS4xMDE5NiwyMzkuNzAwMjYgMzM0LjcwNTUyLDI0MC45OTM1NyAzNDUuOTg4NzEsMjQ3LjM3MDc1IDM1NS42ODkzMiwyNTIuNTk1NzUgMzY0LjQxMzYzLDI1Ni4xNTkwMSAzNzEuMTc1MTEsMjU3LjczMzMxIDM3NC45ODcyLDI1Ni45OTE0NSAzNzUuMjc5NDYsMjU1LjgyNDc3IDM3NS4xMzUwMSwyNTMuNTg4MzcgMzc0LjU5NTkzLDI1MC42MDM3NyAzNzMuNzA0MjgsMjQ3LjE5MjQ5IDM3Mi41MTUyNCwyNDEuODQ5MDkgMzcyLjg1NjQyLDIzNi4wNDA4NCAzNzUuMjA5MiwyMjcuMTM5NDQgMzgwLjA1NDkzLDIxMi41MTY1OSAzODQuMDQxNTgsMjAxLjYwODc3IDM4OC4yOTg5LDE5MS4yODI5NiAzOTIuMzIyOTIsMTgyLjY5MDQ2IDM5NS42MDk2NSwxNzYuOTgyNTUgNDAyLjE1MjIyLDE2Ny4yNzQwNyA0MTAuMDUyMTMsMTU0LjYzNyA0MTkuNzI0MTcsMTM4LjM4OTQ5IDQzMS41ODMxMiwxMTcuODQ5NjcgNDQ1LjM0NzM5LDk0Ljg4ODE3OSA0NTcuMDc3NTcsNzcuNjAzODk1IDQ2Ni4yNDQ3MSw2Ni43MTAxODggNDcyLjMxOTg5LDYyLjkyMDQyNiA0NzMuNTI5MjcsNjMuNjA3MjcxIDQ3NC4zMjg4OSw2NS43Njc3MDQgNDc0Ljc0OTUzLDY5LjU1MTU2NyA0NzQuODIxOTcsNzUuMTA4NzA2IDQ3NS4wMzI2Nyw4MC43OTUxMTggNDc1LjczMzE0LDg3LjI2Nzc4NyA0NzYuODEzNzMsOTMuNzMwMDc5IDQ3OC4xNjQ3Nyw5OS4zODUzNTYgNDg0Ljc0Nzc0LDExNi45MTA2OSA0OTUuMDQyNTEsMTM4LjU4NjUyIDUwNy40MTE2NiwxNjEuMjEyNTYgNTIwLjIxNzc3LDE4MS41ODg1MyA1MjguNzIyNjcsMTkzLjcyMTA4IDUzNC4xNjk5LDIwMC40MTk1MSA1MzguMTIzNjMsMjAzLjI3MzExIDU0Mi4xNDgwMSwyMDMuODcxMTQgNTQ1LjExMjksMjAzLjU5OTcyIDU0OC4yNzg2OCwyMDIuODYwNjkgNTUxLjI2NjM5LDIwMS43NjY5NCA1NTMuNjk3MDQsMjAwLjQzMTMzIDU1Ni40NjcwNywxOTguNjI1ODYgNTU4LjI2NzksMTk4LjA0MjcxIDU1OS42NjkyNCwxOTguNjk0MDMgNTYxLjI0MDc5LDIwMC41OTE5NyA1NjIuNDEwNzksMjAzLjg4MTQzIDU2My41NTAxOSwyMTAuMTU1MjggNTY0LjU2MzUxLDIxOC43NTQwNyA1NjUuMzU1MywyMjkuMDE4MzcgNTY2LjI4MTU4LDI0MS43NTgzIDU2Ny40MDgyNiwyNTAuMzQxNzIgNTY4Ljk5MTM0LDI1Ni4xMjYxMSA1NzEuMjg2ODMsMjYwLjQ2ODk5IDU3OC4zNjY5NywyNzEuNjQwNjMgNTgzLjgyNTE4LDI4MS43NzY3MSA1ODcuOTUzNTQsMjkxLjQ4MTQ3IDU5MS4wNDQxNSwzMDEuMzU5MTQgNTkyLjcxMjQ5LDMwNy4yMTkwNiA1OTQuNDQwMzMsMzEyLjQ1MzU4IDU5Ni4wMjM3NiwzMTYuNDkxNjQgNTk3LjI1ODgzLDMxOC43NjIxNyA1OTguNTkxNjYsMzIxLjE3MDEgNjAwLjQ0MTE1LDMyNS41ODIxNCA2MDIuNTYyNzIsMzMxLjM3MDEzIDYwNC43MTE3OSwzMzcuOTA1OTQgNjA3LjE5NzMzLDM0Ni45Mzg4NyA2MDguNzg4MjksMzU1LjY5MTc3IDYwOS42NzE0OCwzNjUuNTcxNjggNjEwLjAzMzcxLDM3Ny45ODU2MyA2MTAuODkxMjMsNDAxLjQ2NjU2IDYxMy44OTQ1Nyw0MTIuNzg1NjQgNjIwLjc0MzM0LDQxNC4xMjY5IDYzMy4xMzcxNSw0MDcuNjc0MzcgNjM4Ljc5MzUxLDQwNC4zMTM5NyA2NDQuNjE2MDIsNDAxLjAyMjE1IDY0OS45MTk0NCwzOTguMTc2ODYgNjU0LjAxODU2LDM5Ni4xNTYwMiA2NTguMDI0LDM5NC4yMDM1NCA2NjMuMDcxODMsMzkxLjU0NDM5IDY2OC41MTU5MywzODguNTI4MDcgNjczLjcxMDE3LDM4NS41MDQxIDY4NC43OTQ3NCwzNzkuNzY2IDY5OC42MjA3NiwzNzQuMTkxNjYgNzE1LjExMTAyLDM2OC44MDkxMSA3MzQuMTg4MywzNjMuNjQ2NDEgNzgwLjkxODkxLDM1MS44NTQ5OCA4MTEuMTcxMzQsMzQzLjU1MjE4IDgzMC41MjY0MywzMzcuMDc1NzYgODQ0LjU2NDk5LDMzMC43NjM0OCA4NDUuMTY4NiwzMzEuMDU1OTMgODQ1LjY2MjkxLDMzMi40NDEyIDg0NS45OTY5MiwzMzQuNjk1MTggODQ2LjExOTU5LDMzNy41OTM3OCA4NDUuNDQ4MDMsMzQyLjI0MDE4IDg0My40NzY5NCwzNDguNjkwMTMgODQwLjI3MTczLDM1Ni43NjAxNyA4MzUuODk3NzksMzY2LjI2Njg0IDgzMS40MTk1NywzNzUuOTkyNzkgODI2Ljc4MjgyLDM4Ni45MTU3OCA4MjIuNTM0NjcsMzk3LjY5OTAxIDgxOS4yMjIyOSw0MDcuMDA1NjggODEzLjY5ODg4LDQyMy4yMzkyOCA4MDcuNTEwNTYsNDQwLjE0NzE5IDgwMC4yMjk1NSw0NTguODYwNzYgNzkxLjQyODA5LDQ4MC41MTEzNyA3ODYuOTE0ODgsNDkwLjczNjQ0IDc4Mi42MDcyMyw0OTguODY5NiA3NzguMTE2MzgsNTA1LjU2NjA3IDc3My4wNTM1NCw1MTEuNDgxMDkgNzY5LjIzMDU5LDUxNS41OTUyNyA3NjYuMDk5OTMsNTE5LjE2ODEzIDc2My45ODQ2Myw1MjEuODE2NTUgNzYzLjIwNzczLDUyMy4xNTczOSA3NjMuNTA2ODMsNTIzLjk1NDY2IDc2NC4zMjEyMSw1MjUuMTIyOSA3NjUuNTI2NDgsNTI2LjUwNTA3IDc2Ni45OTgyNiw1MjcuOTQ0MTIgNzY5LjQ0ODg1LDUyOS40OTc2NiA3NzIuOTE2MTQsNTMwLjU2MzgzIDc3Ny41NzAwOCw1MzEuMTc3NzcgNzgzLjU4MDY3LDUzMS4zNzQ2MSA3ODguNTQ3NTEsNTMxLjQ2NDUxIDc5Mi42MTQ5Myw1MzEuNzA5MjkgNzk1LjM2MzE5LDUzMi4wNzE1NiA3OTYuMzcyNTUsNTMyLjUxMzk0IDc5NS4xMDUxNSw1MzYuMjY4NDEgNzkxLjgwMzAxLDU0Mi4wNDEyNCA3ODcuMjE2MjMsNTQ4LjY1NDc2IDc4Mi4wOTQ4OSw1NTQuOTMxMjkgNzcwLjU4OTk5LDU2OC41Nzk3IDc1OC43NTgxMyw1ODMuODk5MzEgNzQ5LjE0NTI2LDU5Ny40NjE5MiA3NDQuMjk3MzUsNjA1LjgzOTMgNzQzLjQ3MzkxLDYwOC44MjM2MiA3NDMuMjIxMTksNjExLjQ3NTkyIDc0My41NDAzNCw2MTMuODg0MDcgNzQ0LjQzMjUsNjE2LjEzNTk0IDc0OC41MTA0MSw2MjAuODMzNDggNzU1LjQ2Nzc4LDYyNi4yNjA2NCA3NjMuNzg1NTksNjMxLjM2OTczIDc3MS45NDQ3OSw2MzUuMTEzMDYgNzc1LjAxNTU4LDYzNi4zOTM0OSA3NzcuNjgzNzYsNjM3Ljg0MTk4IDc3OS42NjMxLDYzOS4yODA2OCA3ODAuNjY3MzUsNjQwLjUzMTc4IDc4MC4wNzQ0Niw2NDMuMDE1MzcgNzc3LjUzMDUsNjQ1Ljk4NzIxIDc3NC4wOTQyOSw2NDguNDc5OCA3NzAuODI0NjUsNjQ5LjUyNTY2IDc2OC4yMTEzNCw2NTAuMzQ2ODcgNzYyLjQ0NDQ5LDY1Mi41ODI4NCA3NTQuMzc2MjIsNjU1Ljg5MjEgNzQ0Ljg1ODY3LDY1OS45MzMyIDcxNi40NjAwOSw2NzIuNjgxMTkgNjk5LjI5NTY1LDY4MS45NzQ1NyA2OTAuODQ1MTMsNjg5LjQ2NDQ5IDY4OC41ODgzMyw2OTYuODAyMTIgNjkwLjQwMTM5LDcwMy4xOTYzNiA2OTUuMTY5NSw3MTEuMjkxNDQgNzAxLjg4NjAyLDcxOS42NDUzOSA3MDkuNTQ0MzUsNzI2LjgxNjI4IDcxMi4wMTM0MSw3MjkuMDEzNjQgNzEzLjc4NjI4LDczMS4xMjk5OSA3MTQuNzE1NCw3MzIuOTUwMzUgNzE0LjY1MzE4LDczNC4yNTk3MSA3MDIuMDA0MjMsNzM2LjIxNTMxIDY3NC41OTM0Nyw3MzUuOTUxNzMgNjQyLjMwMDYsNzMzLjg1ODkxIDYxNS4wMDUzMiw3MzAuMzI2NzggNTkwLjYwMiw3MjUuNDkzMDUgNTczLjM4MjY5LDcyMS42NDM3MiA1NjEuMTM2OTQsNzE4LjIzNDE4IDU1MS42NTQyOSw3MTQuNzE5ODMgNTQ0LjU2NTA2LDcxMS45OTA5NyA1MzUuMTI2MjQsNzA4Ljc0NDA1IDUyNC41Njk0Myw3MDUuMzg1ODEgNTE0LjEyNjIyLDcwMi4zMjMwMiA1MDMuODAyNzEsNjk5LjI3OTcyIDQ5My41NzI5Nyw2OTUuOTc0NTUgNDg0LjYxODE5LDY5Mi44MDYxOCA0NzguMTE5NTksNjkwLjE3MzMgNDczLjE0MDg3LDY4OC4wNzIwOCA0NjguMzIyODUsNjg2LjM1MTM0IDQ2NC4yMTUyMiw2ODUuMTg4NjYgNDYxLjM2NzYyLDY4NC43NjE2MyA0NTguNjQxNDEsNjg1LjA1NTU4IDQ1Ny4xNjM0Niw2ODYuNTYzNTkgNDU2LjU1NDY5LDY5MC4yMjQ4OSA0NTYuNDM2MDEsNjk2Ljk3ODcyIDQ1Ny4wODQ0OSw3MTMuMTI3MTggNDU4Ljg4NjE2LDczMy4xNzY3MyA0NjEuNjI1NDIsNzU1LjEzMjkxIDQ2NS4wODY2NCw3NzcuMDAxMyA0NjguODc0NTksNzk5LjU5MDY1IDQ3MC40ODMwNyw4MTMuNTI1MzUgNDcwLjA1MjU0LDgyMS40MDY4MiA0NjcuNzIzNDUsODI1LjgzNjUgNDYzLjY5NzQyLDgyOC4xNjQ0OCA0NTcuODIzMTMsODI5Ljc3ODcxIDQ1Mi41MjI0OCw4MzAuMjMxMjYgNDUwLjIxNzQsODI5LjA3NDIxIDQ1MC4yMTc3OCw4MjkuMDc0MjUgNDUwLjIxODE2LDgyOS4wNzQyOCA0NTAuMjE4NTMsODI5LjA3NDMyIFpcXFwiIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjIuMDcyODAxNTk7c3Ryb2tlLW9wYWNpdHk6MVxcXCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgc29kaXBvZGk6bm9kZXR5cGVzPVxcXCJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY1xcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiJdLCJzb3VyY2VSb290IjoiIn0=