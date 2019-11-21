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
    this.fresh = true;
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

  VenationType: 'Open',     // venation can be "Open" or "Closed"
  SegmentLength: 5,         // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 50,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 5,          // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,          // initial pause/unpause state


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
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utilities */ "./core/Utilities.js");


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

      // i = toggle influence lines visibility
      case 'i':
        for(let network of networks) {
          network.toggleInfluenceLines();
        }

        break;

      // b = toggle bounds visibility
      case 'b':
        for(let network of networks) {
          network.toggleBounds();
        }

        break;

      // o = toggle obstacles visibility
      case 'o':
        for(let network of networks) {
          network.toggleObstacles();
        }

        break;

      // e = export an SVG file of all visible geometry
      case 'e':
        Object(_Utilities__WEBPACK_IMPORTED_MODULE_0__["exportSVG"])(networks[0]);
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

    let latestNodes = [];

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
          // this.
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
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./core/Path.js");





class SourcePatterns {
  constructor() {}

  static getRandomSources(numSources, ctx, bounds = undefined, obstacles = undefined) {
    let sources = [];
    let x, y;
    let isInsideAnyBounds, isInsideAnyObstacle;

    for(let i=0; i<numSources; i++) {
      x = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerWidth);
      y = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(window.innerHeight);
      isInsideAnyBounds = false;
      isInsideAnyObstacle = false;

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

  // TODO: add "jitter" parameter for randomness
  static getGridOfSources(numRows, numColumns, ctx, bounds = undefined, obstacles = undefined) {
    let sources = [];
    let x, y;
    let isInsideAnyBounds, isInsideAnyObstacle;

    for(let i=0; i<=numRows; i++) {
      for(let j=0; j<=numColumns; j++) {
        x = (window.innerWidth / numColumns) * j + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-10,10);
        y = (window.innerHeight / numRows) * i + Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["random"])(-10,10);
        isInsideAnyBounds = false;
        isInsideAnyObstacle = false;

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
    }

    return sources;
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
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-points */ "./node_modules/svg-points/modules/index.js");



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
    this.parent = parent;
    this.position = position;
    this.isTip = isTip;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
    this.color = color;

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
          if(this.color != undefined) {
            this.ctx.strokeStyle = this.color;
          } else {
            this.ctx.strokeStyle = this.settings.Colors.VeinColor;
          }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NvdXJjZVBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wb2ludC1pbi1wb2x5Z29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcGF0aGRhdGEvbGliL1NWR1BhdGhEYXRhLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9Qb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy92YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVjMi92ZWMyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vb2JzdGFjbGVzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL29ic3RhY2xlcy9zdmcvbGVhZi5zdmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBa0M7O0FBRW5CO0FBQ2YsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBcUQ7O0FBRXRDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVUsa0RBQUk7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQXdDOztBQUVqQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVEsNERBQVM7QUFDakI7QUFDQTtBQUNBLEdBQUc7QUFDSCxD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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxzREFBUTtBQUN0QjtBQUNBLGdCQUFnQixpQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQSxnQkFBZ0Isc0RBQVE7QUFDeEI7QUFDQSxrQkFBa0IsaUNBQUk7QUFDdEIsZ0JBQWdCLDhEQUFNO0FBQ3RCLGdCQUFnQiw4REFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzREFBUTtBQUN0QjtBQUNBLGdCQUFnQixpQ0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLFE7Ozs7Ozs7Ozs7O0FDelNBLDYrTkFBNitOLGVBQWUsd0JBQXdCLHlhIiwiZmlsZSI6Im9ic3RhY2xlcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL29ic3RhY2xlcy9qcy9lbnRyeS5qc1wiKTtcbiIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1eGluU291cmNlIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuaW5mbHVlbmNpbmdOb2RlcyA9IFtdO1xyXG4gICAgdGhpcy5mcmVzaCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgLy8gRHJhdyB0aGUgYXR0cmFjdGlvbiB6b25lXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5BdHRyYWN0aW9uWm9uZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUga2lsbCB6b25lXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5LaWxsWm9uZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgYXV4aW4gc291cmNlXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxLCAxLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlNvdXJjZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IExpZ2h0ID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgwLDAsMCwuNSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMCwwLDAsMSknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGFyayA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC45KScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgwLDI1NSwyNTUsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMCwwLDI1NSwxKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjA1KScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYigyNDIsMjQyLDI0MiknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNiknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4zKScsXHJcbiAgLy8gQm91bmRzRmlsbENvbG9yOiAncmdiKDYxLDg1LDEzNiknLFxyXG4gIC8vIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDYxLDg1LDEzNiknXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiKDIxMCwgODEsIDk0KScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoMjEwLCA4MSwgOTQpJ1xyXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4vQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgIC8vIHZlbmF0aW9uIGNhbiBiZSBcIk9wZW5cIiBvciBcIkNsb3NlZFwiXHJcbiAgU2VnbWVudExlbmd0aDogNSwgICAgICAgICAvLyBsZW5ndGggb2YgZWFjaCB2ZWluIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiA1MCwgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXV4aW4gc291cmNlIHRoYXQgYXR0cmFjdHMgdmVpbiBzZWdtZW50c1xyXG4gIEtpbGxEaXN0YW5jZTogNSwgICAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdXhpbiBzb3VyY2VzIGFuZCBzZWdtZW50cyB3aGVuIHNlZ21lbnRzIGFyZSBlbmRlZFxyXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dTb3VyY2VzOiBmYWxzZSwgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdzJ1xyXG4gIFNob3dWZWluczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd2J1xyXG4gIFNob3dWZWluVGlwczogZmFsc2UsICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdrJ1xyXG4gIFNob3dJbmZsdWVuY2VMaW5lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IHRydWUsICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IHRydWUsICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdvJ1xyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFZlaW5SZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyB2ZWluIHNlZ21lbnRzIGFzIFwiTGluZXNcIiBvciBcIkRvdHNcIlxyXG5cclxuICAvLyBDb2xvcnNcclxuICBDb2xvcnM6IERhcmssXHJcblxyXG4gIC8vIExpbmUgdGhpY2tuZXNzZXNcclxuICBWZWluVGhpY2tuZXNzOiAxLjUsXHJcbiAgVmVpblRpcFRoaWNrbmVzczogMixcclxuICBCb3VuZHNCb3JkZXJUaGlja25lc3M6IDBcclxufSIsImltcG9ydCB7IGV4cG9ydFNWRyB9IGZyb20gXCIuL1V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmtzKSB7XHJcbiAgaWYoIShuZXR3b3JrcyBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgbmV0d29ya3MgPSBbbmV0d29ya3NdO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAgIC8vIFNwYWNlID0gcGF1c2UvdW5wYXVzZVxyXG4gICAgICBjYXNlICcgJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdiA9IHRvZ2dsZSB2ZWluIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndic6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHMgPSB0b2dnbGUgYXV4aW4gc291cmNlIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVNvdXJjZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdGlvblpvbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHQgPSB0b2dnbGUgdmVpbiB0aXAgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd0JzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpblRpcHMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gayA9IHRvZ2dsZSBraWxsIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdrJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlS2lsbFpvbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUluZmx1ZW5jZUxpbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGIgPSB0b2dnbGUgYm91bmRzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUJvdW5kcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBvID0gdG9nZ2xlIG9ic3RhY2xlcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVPYnN0YWNsZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gZSA9IGV4cG9ydCBhbiBTVkcgZmlsZSBvZiBhbGwgdmlzaWJsZSBnZW9tZXRyeVxyXG4gICAgICBjYXNlICdlJzpcclxuICAgICAgICBleHBvcnRTVkcobmV0d29ya3NbMF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgS0RCdXNoIGZyb20gJ2tkYnVzaCc7XHJcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VzID0gW107ICAvLyBzb3VyY2VzIChBdXhpblNvdXJjZXMpIGF0dHJhY3QgdmVpbiBub2Rlc1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdOyAgICAvLyBub2RlcyAoVmVpbk5vZGVzKSBhcmUgY29ubmVjdGVkIHRvIGZvcm0gdmVpbnNcclxuXHJcbiAgICB0aGlzLm5vZGVzSW5kZXg7ICAgIC8vIGtkLWJ1c2ggc3BhdGlhbCBpbmRleCBmb3IgYWxsIG5vZGVzXHJcblxyXG4gICAgdGhpcy5ib3VuZHMgPSBbXTtcclxuICAgIHRoaXMub2JzdGFjbGVzID0gW107XHJcblxyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBTa2lwIGl0ZXJhdGlvbiBpZiBwYXVzZWRcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBsYXRlc3ROb2RlcyA9IFtdO1xyXG5cclxuICAgIC8vIEFzc29jaWF0ZSBhdXhpbiBzb3VyY2VzIHdpdGggbmVhcmJ5IHZlaW4gbm9kZXMgdG8gZmlndXJlIG91dCB3aGVyZSBncm93dGggc2hvdWxkIG9jY3VyXHJcbiAgICBmb3IobGV0IFtzb3VyY2VJRCwgc291cmNlXSBvZiB0aGlzLnNvdXJjZXMuZW50cmllcygpKSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnNldHRpbmdzLlZlbmF0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEZvciBvcGVuIHZlbmF0aW9uLCBvbmx5IGFzc29jaWF0ZSB0aGlzIHNvdXJjZSB3aXRoIGl0cyBjbG9zZXN0IHZlaW4gbm9kZVxyXG4gICAgICAgIGNhc2UgJ09wZW4nOlxyXG4gICAgICAgICAgbGV0IGNsb3Nlc3ROb2RlID0gdGhpcy5nZXRDbG9zZXN0Tm9kZShzb3VyY2UsIHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSkpO1xyXG5cclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IFtjbG9zZXN0Tm9kZV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIGFzc29jaWF0ZSB0aGlzIHNvdXJjZSB3aXRoIGFsbCBub2RlcyBpbiBpdHMgcmVsYXRpdmUgbmVpZ2hib3Job29kXHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGxldCBuZWlnaGJvcmhvb2ROb2RlcyA9IHRoaXMuZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKHNvdXJjZSk7XHJcbiAgICAgICAgICBsZXQgbm9kZXNJbktpbGxab25lID0gdGhpcy5nZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGNsdWRlIG5vZGVzIHRoYXQgYXJlIGluIHRoZSBzb3VyY2UncyBraWxsIHpvbmUgKHRoZXNlIHNob3VsZCBzdG9wIGdyb3dpbmcpXHJcbiAgICAgICAgICBsZXQgbm9kZXNUb0dyb3cgPSBuZWlnaGJvcmhvb2ROb2Rlcy5maWx0ZXIoKG5laWdoYm9yTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIW5vZGVzSW5LaWxsWm9uZS5pbmNsdWRlcyhuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMgPSBuZWlnaGJvcmhvb2ROb2RlcztcclxuXHJcbiAgICAgICAgICBpZihub2Rlc1RvR3Jvdy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mcmVzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzVG9Hcm93KSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm93IHRoZSBuZXR3b3JrIGJ5IGFkZGluZyBuZXcgdmVpbiBub2RlcyBvbnRvIGFueSBub2RlcyBiZWluZyBpbmZsdWVuY2VkIGJ5IHNvdXJjZXNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IHRoaXMuZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5zb3VyY2VzW2lkXSkpO1xyXG4gICAgICAgIGxldCBuZXh0Tm9kZSA9IG5vZGUuZ2V0TmV4dE5vZGUoYXZlcmFnZURpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IHZlaW5zIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOT1RFOiBkaXNhYmxpbmcgdGhpcyBjaGVjayBsZXRzIHZlaW5zIGdyb3cgYWNyb3NzIGdhcHMgaW4gYm91bmRzIC0gY29vbCBlZmZlY3QhXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIC8vIHRoaXMuXHJcbiAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbm9kZS5pbmZsdWVuY2VkQnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF1eGluIHNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIHZlaW4gbm9kZXNcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIGFzIHNvb24gYXMgYW55IHZlaW4gbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihzb3VyY2UucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2Ugb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIHZlaW4gbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDAgJiYgIXNvdXJjZS5mcmVzaCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsTm9kZXNSZWFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgICAgIGlmKG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKSA+IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxOb2Rlc1JlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFsbE5vZGVzUmVhY2hlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgdGhpcy5kcmF3Qm91bmRzKCk7XHJcbiAgICB0aGlzLmRyYXdPYnN0YWNsZXMoKTtcclxuICAgIHRoaXMuZHJhd1NvdXJjZXMoKTtcclxuICAgIHRoaXMuZHJhd1ZlaW5zKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIC8vIEVyYXNlIHRoZSBjYW52YXNcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JvdW5kcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd09ic3RhY2xlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1ZlaW5zKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1NvdXJjZXMoKSB7XHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIHNvdXJjZSBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgc291cmNlVG9QMCwgc291cmNlVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIHNvdXJjZVRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3VyY2VUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMS5sZW5ndGgoKSA+IHNvdXJjZVRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBzb3VyY2UucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieVNvdXJjZXMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdXhpbiBzb3VyY2VcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIHNvdXJjZS5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZFZlaW5Ob2RlKG5vZGUpIHtcclxuICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgaWYoYm91bmQuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3QgdmVpbnMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmVpblRpcHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICFub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVNvdXJjZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93U291cmNlcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvdW5kcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICF0aGlzLnNldHRpbmdzLlNob3dCb3VuZHM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPYnN0YWNsZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxubGV0IGluc2lkZSA9IHJlcXVpcmUoJ3BvaW50LWluLXBvbHlnb24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBvbHlnb24sIHR5cGUsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBjb250YWlucyh4LCB5KSB7XHJcbiAgICByZXR1cm4gaW5zaWRlKFt4LCB5XSwgdGhpcy5wb2x5Z29uKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvbHlnb25bMF1bMF0sIHRoaXMucG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wb2x5Z29uW2ldWzBdLCB0aGlzLnBvbHlnb25baV1bMV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnBvbHlnb25bMF1bMF0sIHRoaXMucG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgc3dpdGNoKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlICdCb3VuZHMnOlxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5Cb3VuZHNCb3JkZXJUaGlja25lc3M7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzRmlsbENvbG9yO1xyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ09ic3RhY2xlJzpcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5PYnN0YWNsZUZpbGxDb2xvcjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTVkdQYXRoRGF0YX0gZnJvbSAnLi4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTVkdMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc3RhdGljIGxvYWQoc3ZnU3RyaW5nKSB7XHJcbiAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xyXG4gICAgbGV0IHN2Z05vZGUgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN2Z1N0cmluZywgJ2ltYWdlL3N2Zyt4bWwnKTtcclxuXHJcbiAgICBsZXQgaW5wdXRQYXRocyA9IHN2Z05vZGUucXVlcnlTZWxlY3RvckFsbCgncGF0aCcpLFxyXG4gICAgICBwYXRocyA9IFtdO1xyXG5cclxuICAgIC8vIFNjcmFwZSBhbGwgcG9pbnRzIGZyb20gYWxsIHBvaW50cywgYW5kIHJlY29yZCBicmVha3BvaW50c1xyXG4gICAgZm9yKGxldCBpbnB1dFBhdGggb2YgaW5wdXRQYXRocykge1xyXG4gICAgICBsZXQgcGF0aERhdGEgPSBuZXcgU1ZHUGF0aERhdGEoaW5wdXRQYXRoLmdldEF0dHJpYnV0ZSgnZCcpKSxcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c0Nvb3JkcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvcihsZXQgW2luZGV4LCBjb21tYW5kXSBvZiBwYXRoRGF0YS5jb21tYW5kcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2goY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAvLyBNb3ZlICgnTScpIGFuZCBsaW5lICgnTCcpIGNvbW1hbmRzIGhhdmUgYm90aCBYIGFuZCBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLk1PVkVfVE86XHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkxJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBIb3Jpem9udGFsIGxpbmUgKCdIJykgY29tbWFuZHMgb25seSBoYXZlIFgsIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIHByZXZpb3VzQ29vcmRzLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gVmVydGljYWwgbGluZSAoJ1YnKSBjb21tYW5kcyBvbmx5IGhhdmUgWSwgdXNpbmcgcHJldmlvdXMgY29tbWFuZCdzIFhcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbcHJldmlvdXNDb29yZHMueCwgY29tbWFuZC55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENsb3NlUGF0aCAoJ1onKSBjb21tYW5kcyBhcmUgYSBuYWl2ZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGN1cnJlbnQgcGF0aCBjYW4gYmUgcHJvY2Vzc2VkIGFuZCBhZGRlZCB0byB0aGUgd29ybGRcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSDpcclxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBwYXRoIGluIHJldHVybiBvYmplY3RcclxuICAgICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbmNsb3NlZCBwYXRocyBuZXZlciBoYXZlIENMT1NFX1BBVEggY29tbWFuZHMsIHNvIHdyYXAgdXAgdGhlIGN1cnJlbnQgcGF0aCB3aGVuIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGggYW5kIGhhdmUgbm90IGZvdW5kIHRoZSBjb21tYW5kXHJcbiAgICAgICAgaWYoaW5kZXggPT0gcGF0aERhdGEuY29tbWFuZHMubGVuZ3RoIC0gMSAmJiBjb21tYW5kLnR5cGUgIT0gU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCkge1xyXG4gICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFggY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3gnKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueCA9IGNvbW1hbmQueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhcHR1cmUgWSBjb29yZGluYXRlLCBpZiB0aGVyZSB3YXMgb25lXHJcbiAgICAgICAgaWYoY29tbWFuZC5oYXNPd25Qcm9wZXJ0eSgneScpKSB7XHJcbiAgICAgICAgICBwcmV2aW91c0Nvb3Jkcy55ID0gY29tbWFuZC55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEF1eGluU291cmNlIGZyb20gJy4vQXV4aW5Tb3VyY2UnO1xyXG5pbXBvcnQgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuL1BhdGgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlUGF0dGVybnMge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgc3RhdGljIGdldFJhbmRvbVNvdXJjZXMobnVtU291cmNlcywgY3R4LCBib3VuZHMgPSB1bmRlZmluZWQsIG9ic3RhY2xlcyA9IHVuZGVmaW5lZCkge1xyXG4gICAgbGV0IHNvdXJjZXMgPSBbXTtcclxuICAgIGxldCB4LCB5O1xyXG4gICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzLCBpc0luc2lkZUFueU9ic3RhY2xlO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPG51bVNvdXJjZXM7IGkrKykge1xyXG4gICAgICB4ID0gcmFuZG9tKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgeSA9IHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgICBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XHJcblxyXG4gICAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICAgIGlmKGJvdW5kcyAhPSB1bmRlZmluZWQgJiYgYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IGJvdW5kIG9mIGJvdW5kcykge1xyXG4gICAgICAgICAgaWYoYm91bmQuY29udGFpbnMoeCwgeSkpIHtcclxuICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3QgdmVpbnMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICAgIGlmKG9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgb2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMoeCwgeSkpIHtcclxuICAgICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihcclxuICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgYm91bmRzID09PSB1bmRlZmluZWQpICYmXHJcbiAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IG9ic3RhY2xlcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICApIHtcclxuICAgICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKHgseSksXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc291cmNlcztcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IGFkZCBcImppdHRlclwiIHBhcmFtZXRlciBmb3IgcmFuZG9tbmVzc1xyXG4gIHN0YXRpYyBnZXRHcmlkT2ZTb3VyY2VzKG51bVJvd3MsIG51bUNvbHVtbnMsIGN0eCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBzb3VyY2VzID0gW107XHJcbiAgICBsZXQgeCwgeTtcclxuICAgIGxldCBpc0luc2lkZUFueUJvdW5kcywgaXNJbnNpZGVBbnlPYnN0YWNsZTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTw9bnVtUm93czsgaSsrKSB7XHJcbiAgICAgIGZvcihsZXQgaj0wOyBqPD1udW1Db2x1bW5zOyBqKyspIHtcclxuICAgICAgICB4ID0gKHdpbmRvdy5pbm5lcldpZHRoIC8gbnVtQ29sdW1ucykgKiBqICsgcmFuZG9tKC0xMCwxMCk7XHJcbiAgICAgICAgeSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQgLyBudW1Sb3dzKSAqIGkgKyByYW5kb20oLTEwLDEwKTtcclxuICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IHZlaW5zIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgICAgIGlmKGJvdW5kcyAhPSB1bmRlZmluZWQgJiYgYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvcihsZXQgYm91bmQgb2YgYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgICAgICBpZihvYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIG9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihcclxuICAgICAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCBib3VuZHMgPT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCBvYnN0YWNsZXMgPT09IHVuZGVmaW5lZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHNvdXJjZXMucHVzaChcclxuICAgICAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgICAgIG5ldyBWZWMyKHgseSksXHJcbiAgICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNvdXJjZXM7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IHRvUGF0aCB9IGZyb20gJ3N2Zy1wb2ludHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY2xlT2ZQb2ludHMoY3gsIGN5LCByYWRpdXMsIHJlc29sdXRpb24pIHtcclxuICBsZXQgYW5nbGUsIHgsIHk7XHJcbiAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICB4ID0gY3ggKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICB5ID0gY3kgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb2ludHM7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgYW4gU1ZHIGRvY3VtZW50IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2aXNpYmxlIGdlb21ldHJ5LCB0aGVuIHB1c2hlcyBpdCB0byB0aGUgY2xpZW50XHJcbi8vIC0gVHJpZ2dlcmVkIGJ5IHByZXNzaW5nIGBlYCBpbiBhbnkgc2tldGNoLiBTZWUgS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMgZm9yIGRlZmluaXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNWRyhuZXR3b3JrKSB7XHJcbiAgLy8gU2V0IHVwIDxzdmc+IGVsZW1lbnRcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxuczp4bGluaycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgd2luZG93LmlubmVyV2lkdGggKyAnICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAvLyBDcmVhdGUgPGxpbmU+cyBmb3IgZWFjaCB2ZWluIHNlZ21lbnRcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgbGV0IG5vZGVMaW5lc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IGBcclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHgyPVwiJHtub2RlLnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTI9XCIke25vZGUucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIG5vZGVMaW5lc0dyb3VwLmlubmVySFRNTCArPSBsaW5lTm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlTGluZXNHcm91cCk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3IgYm91bmRzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93Qm91bmRzKSB7XHJcbiAgICBpZihuZXR3b3JrLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBib3VuZHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhib3VuZC5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChib3VuZHNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3Igb2JzdGFjbGVzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93T2JzdGFjbGVzKSB7XHJcbiAgICBpZihuZXR3b3JrLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBvYnN0YWNsZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhvYnN0YWNsZS5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChvYnN0YWNsZXNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSB0aGUgZG9jdW1lbnQgYXMgYSBCbG9iIGFuZCBmb3JjZSBhIGRvd25sb2FkIGFzIGEgdGltZXN0YW1wZWQgLnN2ZyBmaWxlXHJcbiAgY29uc3Qgc3ZnRG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJub1wiPz4nO1xyXG4gIGNvbnN0IHNlcmlhbGl6ZWRTdmcgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcclxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z0RvY3R5cGUsIHNlcmlhbGl6ZWRTdmddLCB7IHR5cGU6ICdpbWFnZS9zdmcreG1sOycgfSlcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuICAvLyBDcmVhdGUgYSA8cGF0aD4gZWxlbWVudCB3aXRoIGEgcHJvcGVybHktZm9ybWF0dGVkIGBkYCBhdHRyaWJ1dGUgY29udGFpbmluZyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXNzZWQgcG9pbnRzXHJcbiAgZnVuY3Rpb24gZ2V0UGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICAgIGxldCBwb2ludHNTdHJpbmcgPSAnJztcclxuXHJcbiAgICBmb3IobGV0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcclxuICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjbG9zZXBhdGggY29tbWFuZCB0byBhdXRvbWF0aWNhbGx5IGRyYXcgbGluZSBiYWNrIHRvIGluaXRpYWwgcG9pbnRcclxuICAgIHBvaW50c1N0cmluZyArPSAnICcgKyBwb2ludHNbMF1bMF0gKyAnLCcgKyBwb2ludHNbMF1bMV07XHJcblxyXG4gICAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgICBwb2ludHM6IHBvaW50c1N0cmluZ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhdGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhFbDtcclxuICB9IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzLCBjb2xvciA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICB0aGlzLmlzVGlwID0gaXNUaXA7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG5cclxuICAgIHRoaXMuaW5mbHVlbmNlZEJ5ID0gW107XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgaWYodGhpcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlZlaW5SZW5kZXJNb2RlID09ICdMaW5lcycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnBhcmVudC5wb3NpdGlvbi54LCB0aGlzLnBhcmVudC5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluVGlwQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlZlaW5UaXBUaGlja25lc3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmKHRoaXMuY29sb3IgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRoaWNrbmVzcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICB9IGVsc2UgaWYodGhpcy5zZXR0aW5ncy5WZWluUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgMSxcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIE1hdGguUEkgKiAyXHJcbiAgICAgICAgKTsgIC8vIFRPRE86IHZhcnkgZG90IHJhZGl1cyBiYXNlZCBvbiBhbGdvcml0aG1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE5leHROb2RlKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24pIHtcclxuICAgIHRoaXMuaXNUaXAgPSBmYWxzZTtcclxuICAgIHRoaXMubmV4dFBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoYXZlcmFnZVNvdXJjZURpcmVjdGlvbi5tdWx0aXBseSh0aGlzLnNldHRpbmdzLlNlZ21lbnRMZW5ndGgpLCB0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFZlaW5Ob2RlKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLm5leHRQb3NpdGlvbixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdGhpcy5jdHgsXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MsXHJcbiAgICAgIHRoaXMuY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG59IiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsInZhciBleHRlbmRTdGF0aWNzPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGEpe3QuX19wcm90b19fPWF9fHxmdW5jdGlvbih0LGEpe2Zvcih2YXIgciBpbiBhKWEuaGFzT3duUHJvcGVydHkocikmJih0W3JdPWFbcl0pfTtmdW5jdGlvbiBfX2V4dGVuZHModCxhKXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fWV4dGVuZFN0YXRpY3ModCxhKSx0LnByb3RvdHlwZT1udWxsPT09YT9PYmplY3QuY3JlYXRlKGEpOihyLnByb3RvdHlwZT1hLnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gcm90YXRlKHQsYSl7dmFyIHI9dFswXSxlPXRbMV07cmV0dXJuW3IqTWF0aC5jb3MoYSktZSpNYXRoLnNpbihhKSxyKk1hdGguc2luKGEpK2UqTWF0aC5jb3MoYSldfWZ1bmN0aW9uIGFzc2VydE51bWJlcnMoKXtmb3IodmFyIHQ9W10sYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspdFthXT1hcmd1bWVudHNbYV07Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoXCJudW1iZXJcIiE9dHlwZW9mIHRbcl0pdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0TnVtYmVycyBhcmd1bWVudHNbXCIrcitcIl0gaXMgbm90IGEgbnVtYmVyLiBcIit0eXBlb2YgdFtyXStcIiA9PSB0eXBlb2YgXCIrdFtyXSk7cmV0dXJuITB9dmFyIFBJPU1hdGguUEk7ZnVuY3Rpb24gYW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKXt0LmxBcmNGbGFnPTA9PT10LmxBcmNGbGFnPzA6MSx0LnN3ZWVwRmxhZz0wPT09dC5zd2VlcEZsYWc/MDoxO3ZhciBlPXQuclgsbj10LnJZLGk9dC54LG89dC55O2U9TWF0aC5hYnModC5yWCksbj1NYXRoLmFicyh0LnJZKTt2YXIgcz1yb3RhdGUoWyhhLWkpLzIsKHItbykvMl0sLXQueFJvdC8xODAqUEkpLGg9c1swXSx1PXNbMV0sYz1NYXRoLnBvdyhoLDIpL01hdGgucG93KGUsMikrTWF0aC5wb3codSwyKS9NYXRoLnBvdyhuLDIpOzE8YyYmKGUqPU1hdGguc3FydChjKSxuKj1NYXRoLnNxcnQoYykpLHQuclg9ZSx0LnJZPW47dmFyIG09TWF0aC5wb3coZSwyKSpNYXRoLnBvdyh1LDIpK01hdGgucG93KG4sMikqTWF0aC5wb3coaCwyKSxfPSh0LmxBcmNGbGFnIT09dC5zd2VlcEZsYWc/MTotMSkqTWF0aC5zcXJ0KE1hdGgubWF4KDAsKE1hdGgucG93KGUsMikqTWF0aC5wb3cobiwyKS1tKS9tKSksVD1lKnUvbipfLE89LW4qaC9lKl8scD1yb3RhdGUoW1QsT10sdC54Um90LzE4MCpQSSk7dC5jWD1wWzBdKyhhK2kpLzIsdC5jWT1wWzFdKyhyK28pLzIsdC5waGkxPU1hdGguYXRhbjIoKHUtTykvbiwoaC1UKS9lKSx0LnBoaTI9TWF0aC5hdGFuMigoLXUtTykvbiwoLWgtVCkvZSksMD09PXQuc3dlZXBGbGFnJiZ0LnBoaTI+dC5waGkxJiYodC5waGkyLT0yKlBJKSwxPT09dC5zd2VlcEZsYWcmJnQucGhpMjx0LnBoaTEmJih0LnBoaTIrPTIqUEkpLHQucGhpMSo9MTgwL1BJLHQucGhpMio9MTgwL1BJfWZ1bmN0aW9uIGludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKHQsYSxyKXthc3NlcnROdW1iZXJzKHQsYSxyKTt2YXIgZT10KnQrYSphLXIqcjtpZigwPmUpcmV0dXJuW107aWYoMD09PWUpcmV0dXJuW1t0KnIvKHQqdCthKmEpLGEqci8odCp0K2EqYSldXTt2YXIgbj1NYXRoLnNxcnQoZSk7cmV0dXJuW1sodCpyK2EqbikvKHQqdCthKmEpLChhKnItdCpuKS8odCp0K2EqYSldLFsodCpyLWEqbikvKHQqdCthKmEpLChhKnIrdCpuKS8odCp0K2EqYSldXX12YXIgU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcixERUc9TWF0aC5QSS8xODA7ZnVuY3Rpb24gbGVycCh0LGEscil7cmV0dXJuKDEtcikqdCtyKmF9ZnVuY3Rpb24gYXJjQXQodCxhLHIsZSl7cmV0dXJuIHQrTWF0aC5jb3MoZS8xODAqUEkpKmErTWF0aC5zaW4oZS8xODAqUEkpKnJ9ZnVuY3Rpb24gYmV6aWVyUm9vdCh0LGEscixlKXt2YXIgbj1hLXQsaT1yLWEsbz0zKm4rMyooZS1yKS02Kmkscz02KihpLW4pLGg9MypuO3JldHVybiBNYXRoLmFicyhvKTwxZS02P1staC9zXTpwcUZvcm11bGEocy9vLGgvbywxZS02KX1mdW5jdGlvbiBiZXppZXJBdCh0LGEscixlLG4pe3ZhciBpPTEtbjtyZXR1cm4gdCooaSppKmkpK2EqKDMqaSppKm4pK3IqKDMqaSpuKm4pK2UqKG4qbipuKX1mdW5jdGlvbiBwcUZvcm11bGEodCxhLHIpe3ZvaWQgMD09PXImJihyPTFlLTYpO3ZhciBlPXQqdC80LWE7aWYoZTwtcilyZXR1cm5bXTtpZihlPD1yKXJldHVyblstdC8yXTt2YXIgbj1NYXRoLnNxcnQoZSk7cmV0dXJuWy10LzItbiwtdC8yK25dfWZ1bmN0aW9uIGEyYyh0LGEscil7dmFyIGUsbixpLG87dC5jWHx8YW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKTtmb3IodmFyIHM9TWF0aC5taW4odC5waGkxLHQucGhpMiksaD1NYXRoLm1heCh0LnBoaTEsdC5waGkyKS1zLHU9TWF0aC5jZWlsKGgvOTApLGM9bmV3IEFycmF5KHUpLG09YSxfPXIsVD0wO1Q8dTtUKyspe3ZhciBPPWxlcnAodC5waGkxLHQucGhpMixUL3UpLHA9bGVycCh0LnBoaTEsdC5waGkyLChUKzEpL3UpLHk9cC1PLFM9NC8zKk1hdGgudGFuKHkqREVHLzQpLGY9W01hdGguY29zKE8qREVHKS1TKk1hdGguc2luKE8qREVHKSxNYXRoLnNpbihPKkRFRykrUypNYXRoLmNvcyhPKkRFRyldLFY9ZlswXSxOPWZbMV0sRD1bTWF0aC5jb3MocCpERUcpLE1hdGguc2luKHAqREVHKV0sUD1EWzBdLGw9RFsxXSx2PVtQK1MqTWF0aC5zaW4ocCpERUcpLGwtUypNYXRoLmNvcyhwKkRFRyldLEU9dlswXSxBPXZbMV07Y1tUXT17cmVsYXRpdmU6dC5yZWxhdGl2ZSx0eXBlOlNWR1BhdGhEYXRhLkNVUlZFX1RPfTt2YXIgZD1mdW5jdGlvbihhLHIpe3ZhciBlPXJvdGF0ZShbYSp0LnJYLHIqdC5yWV0sdC54Um90KSxuPWVbMF0saT1lWzFdO3JldHVyblt0LmNYK24sdC5jWStpXX07ZT1kKFYsTiksY1tUXS54MT1lWzBdLGNbVF0ueTE9ZVsxXSxuPWQoRSxBKSxjW1RdLngyPW5bMF0sY1tUXS55Mj1uWzFdLGk9ZChQLGwpLGNbVF0ueD1pWzBdLGNbVF0ueT1pWzFdLHQucmVsYXRpdmUmJihjW1RdLngxLT1tLGNbVF0ueTEtPV8sY1tUXS54Mi09bSxjW1RdLnkyLT1fLGNbVF0ueC09bSxjW1RdLnktPV8pLG09KG89W2NbVF0ueCxjW1RdLnldKVswXSxfPW9bMV19cmV0dXJuIGN9IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmUmJih2b2lkIDAhPT10LngxJiYodC54MSs9YSksdm9pZCAwIT09dC55MSYmKHQueTErPXIpLHZvaWQgMCE9PXQueDImJih0LngyKz1hKSx2b2lkIDAhPT10LnkyJiYodC55Mis9ciksdm9pZCAwIT09dC54JiYodC54Kz1hKSx2b2lkIDAhPT10LnkmJih0LnkrPXIpLHQucmVsYXRpdmU9ITEpLHR9KX1mdW5jdGlvbiByKCl7dmFyIHQ9TmFOLGE9TmFOLHI9TmFOLGU9TmFOO3JldHVybiBuKGZ1bmN0aW9uKG4saSxvKXtyZXR1cm4gbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyYmKG4udHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyx0PWlzTmFOKHQpP2k6dCxhPWlzTmFOKGEpP286YSxuLngxPW4ucmVsYXRpdmU/aS10OjIqaS10LG4ueTE9bi5yZWxhdGl2ZT9vLWE6MipvLWEpLG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UTz8odD1uLnJlbGF0aXZlP2krbi54MjpuLngyLGE9bi5yZWxhdGl2ZT9vK24ueTI6bi55Mik6KHQ9TmFOLGE9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8mJihuLnR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyxyPWlzTmFOKHIpP2k6cixlPWlzTmFOKGUpP286ZSxuLngxPW4ucmVsYXRpdmU/aS1yOjIqaS1yLG4ueTE9bi5yZWxhdGl2ZT9vLWU6MipvLWUpLG4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPPyhyPW4ucmVsYXRpdmU/aStuLngxOm4ueDEsZT1uLnJlbGF0aXZlP28rbi55MTpuLnkxKToocj1OYU4sZT1OYU4pLG59KX1mdW5jdGlvbiBlKCl7dmFyIHQ9TmFOLGE9TmFOO3JldHVybiBuKGZ1bmN0aW9uKHIsZSxuKXtpZihyLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8mJihyLnR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyx0PWlzTmFOKHQpP2U6dCxhPWlzTmFOKGEpP246YSxyLngxPXIucmVsYXRpdmU/ZS10OjIqZS10LHIueTE9ci5yZWxhdGl2ZT9uLWE6MipuLWEpLHIudHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPKXt0PXIucmVsYXRpdmU/ZStyLngxOnIueDEsYT1yLnJlbGF0aXZlP24rci55MTpyLnkxO3ZhciBpPXIueDEsbz1yLnkxO3IudHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyxyLngxPSgoci5yZWxhdGl2ZT8wOmUpKzIqaSkvMyxyLnkxPSgoci5yZWxhdGl2ZT8wOm4pKzIqbykvMyxyLngyPShyLngrMippKS8zLHIueTI9KHIueSsyKm8pLzN9ZWxzZSB0PU5hTixhPU5hTjtyZXR1cm4gcn0pfWZ1bmN0aW9uIG4odCl7dmFyIGE9MCxyPTAsZT1OYU4sbj1OYU47cmV0dXJuIGZ1bmN0aW9uKGkpe2lmKGlzTmFOKGUpJiYhKGkudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7dmFyIG89dChpLGEscixlLG4pO3JldHVybiBpLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmKGE9ZSxyPW4pLHZvaWQgMCE9PWkueCYmKGE9aS5yZWxhdGl2ZT9hK2kueDppLngpLHZvaWQgMCE9PWkueSYmKHI9aS5yZWxhdGl2ZT9yK2kueTppLnkpLGkudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPJiYoZT1hLG49ciksb319ZnVuY3Rpb24gaSh0LGEscixlLGksbyl7cmV0dXJuIGFzc2VydE51bWJlcnModCxhLHIsZSxpLG8pLG4oZnVuY3Rpb24obixzLGgsdSl7dmFyIGM9bi54MSxtPW4ueDIsXz1uLnJlbGF0aXZlJiYhaXNOYU4odSksVD12b2lkIDAhPT1uLng/bi54Ol8/MDpzLE89dm9pZCAwIT09bi55P24ueTpfPzA6aDtmdW5jdGlvbiBwKHQpe3JldHVybiB0KnR9bi50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJjAhPT1hJiYobi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sbi55PW4ucmVsYXRpdmU/MDpoKSxuLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiYwIT09ciYmKG4udHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLG4ueD1uLnJlbGF0aXZlPzA6cyksdm9pZCAwIT09bi54JiYobi54PW4ueCp0K08qcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkmJihuLnk9VCphK24ueSplKyhfPzA6bykpLHZvaWQgMCE9PW4ueDEmJihuLngxPW4ueDEqdCtuLnkxKnIrKF8/MDppKSksdm9pZCAwIT09bi55MSYmKG4ueTE9YyphK24ueTEqZSsoXz8wOm8pKSx2b2lkIDAhPT1uLngyJiYobi54Mj1uLngyKnQrbi55MipyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueTImJihuLnkyPW0qYStuLnkyKmUrKF8/MDpvKSk7dmFyIHk9dCplLWEqcjtpZih2b2lkIDAhPT1uLnhSb3QmJigxIT09dHx8MCE9PWF8fDAhPT1yfHwxIT09ZSkpaWYoMD09PXkpZGVsZXRlIG4uclgsZGVsZXRlIG4uclksZGVsZXRlIG4ueFJvdCxkZWxldGUgbi5sQXJjRmxhZyxkZWxldGUgbi5zd2VlcEZsYWcsbi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE87ZWxzZXt2YXIgUz1uLnhSb3QqTWF0aC5QSS8xODAsZj1NYXRoLnNpbihTKSxWPU1hdGguY29zKFMpLE49MS9wKG4uclgpLEQ9MS9wKG4uclkpLFA9cChWKSpOK3AoZikqRCxsPTIqZipWKihOLUQpLHY9cChmKSpOK3AoVikqRCxFPVAqZSplLWwqYSplK3YqYSphLEE9bCoodCplK2EqciktMiooUCpyKmUrdip0KmEpLGQ9UCpyKnItbCp0KnIrdip0KnQsRz0oTWF0aC5hdGFuMihBLEUtZCkrTWF0aC5QSSklTWF0aC5QSS8yLEM9TWF0aC5zaW4oRykseD1NYXRoLmNvcyhHKTtuLnJYPU1hdGguYWJzKHkpL01hdGguc3FydChFKnAoeCkrQSpDKngrZCpwKEMpKSxuLnJZPU1hdGguYWJzKHkpL01hdGguc3FydChFKnAoQyktQSpDKngrZCpwKHgpKSxuLnhSb3Q9MTgwKkcvTWF0aC5QSX1yZXR1cm4gdm9pZCAwIT09bi5zd2VlcEZsYWcmJjA+eSYmKG4uc3dlZXBGbGFnPSshbi5zd2VlcEZsYWcpLG59KX1mdW5jdGlvbiBvKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBhPXt9O2Zvcih2YXIgciBpbiB0KWFbcl09dFtyXTtyZXR1cm4gYX19dC5ST1VORD1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqdCkvdH1yZXR1cm4gdm9pZCAwPT09dCYmKHQ9MWUxMyksYXNzZXJ0TnVtYmVycyh0KSxmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC54MSYmKHQueDE9YSh0LngxKSksdm9pZCAwIT09dC55MSYmKHQueTE9YSh0LnkxKSksdm9pZCAwIT09dC54MiYmKHQueDI9YSh0LngyKSksdm9pZCAwIT09dC55MiYmKHQueTI9YSh0LnkyKSksdm9pZCAwIT09dC54JiYodC54PWEodC54KSksdm9pZCAwIT09dC55JiYodC55PWEodC55KSksdH19LHQuVE9fQUJTPWEsdC5UT19SRUw9ZnVuY3Rpb24oKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmV8fCh2b2lkIDAhPT10LngxJiYodC54MS09YSksdm9pZCAwIT09dC55MSYmKHQueTEtPXIpLHZvaWQgMCE9PXQueDImJih0LngyLT1hKSx2b2lkIDAhPT10LnkyJiYodC55Mi09ciksdm9pZCAwIT09dC54JiYodC54LT1hKSx2b2lkIDAhPT10LnkmJih0LnktPXIpLHQucmVsYXRpdmU9ITApLHR9KX0sdC5OT1JNQUxJWkVfSFZaPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PWEmJihhPSEwKSx2b2lkIDA9PT1yJiYocj0hMCksbihmdW5jdGlvbihlLG4saSxvLHMpe2lmKGlzTmFOKG8pJiYhKGUudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7cmV0dXJuIGEmJmUudHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS55PWUucmVsYXRpdmU/MDppKSxyJiZlLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS54PWUucmVsYXRpdmU/MDpuKSx0JiZlLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGUueD1lLnJlbGF0aXZlP28tbjpvLGUueT1lLnJlbGF0aXZlP3MtaTpzKSxlLnR5cGUmU1ZHUGF0aERhdGEuQVJDJiYoMD09PWUuclh8fDA9PT1lLnJZKSYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGRlbGV0ZSBlLnJYLGRlbGV0ZSBlLnJZLGRlbGV0ZSBlLnhSb3QsZGVsZXRlIGUubEFyY0ZsYWcsZGVsZXRlIGUuc3dlZXBGbGFnKSxlfSl9LHQuTk9STUFMSVpFX1NUPXIsdC5RVF9UT19DPWUsdC5JTkZPPW4sdC5TQU5JVElaRT1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpO3ZhciBhPU5hTixyPU5hTixlPU5hTixpPU5hTjtyZXR1cm4gbihmdW5jdGlvbihuLG8scyxoLHUpe3ZhciBjPU1hdGguYWJzLG09ITEsXz0wLFQ9MDtpZihuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPJiYoXz1pc05hTihhKT8wOm8tYSxUPWlzTmFOKHIpPzA6cy1yKSxuLnR5cGUmKFNWR1BhdGhEYXRhLkNVUlZFX1RPfFNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyk/KGE9bi5yZWxhdGl2ZT9vK24ueDI6bi54MixyPW4ucmVsYXRpdmU/cytuLnkyOm4ueTIpOihhPU5hTixyPU5hTiksbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPPyhlPWlzTmFOKGUpP286MipvLWUsaT1pc05hTihpKT9zOjIqcy1pKTpuLnR5cGUmU1ZHUGF0aERhdGEuUVVBRF9UTz8oZT1uLnJlbGF0aXZlP28rbi54MTpuLngxLGk9bi5yZWxhdGl2ZT9zK24ueTE6bi55Mik6KGU9TmFOLGk9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuTElORV9DT01NQU5EU3x8bi50eXBlJlNWR1BhdGhEYXRhLkFSQyYmKDA9PT1uLnJYfHwwPT09bi5yWXx8IW4ubEFyY0ZsYWcpfHxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPfHxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8pe3ZhciBPPXZvaWQgMD09PW4ueD8wOm4ucmVsYXRpdmU/bi54Om4ueC1vLHA9dm9pZCAwPT09bi55PzA6bi5yZWxhdGl2ZT9uLnk6bi55LXM7Xz1pc05hTihlKT92b2lkIDA9PT1uLngxP186bi5yZWxhdGl2ZT9uLng6bi54MS1vOmUtbyxUPWlzTmFOKGkpP3ZvaWQgMD09PW4ueTE/VDpuLnJlbGF0aXZlP24ueTpuLnkxLXM6aS1zO3ZhciB5PXZvaWQgMD09PW4ueDI/MDpuLnJlbGF0aXZlP24ueDpuLngyLW8sUz12b2lkIDA9PT1uLnkyPzA6bi5yZWxhdGl2ZT9uLnk6bi55Mi1zO2MoTyk8PXQmJmMocCk8PXQmJmMoXyk8PXQmJmMoVCk8PXQmJmMoeSk8PXQmJmMoUyk8PXQmJihtPSEwKX1yZXR1cm4gbi50eXBlJlNWR1BhdGhEYXRhLkNMT1NFX1BBVEgmJmMoby1oKTw9dCYmYyhzLXUpPD10JiYobT0hMCksbT9bXTpufSl9LHQuTUFUUklYPWksdC5ST1RBVEU9ZnVuY3Rpb24odCxhLHIpe3ZvaWQgMD09PWEmJihhPTApLHZvaWQgMD09PXImJihyPTApLGFzc2VydE51bWJlcnModCxhLHIpO3ZhciBlPU1hdGguc2luKHQpLG49TWF0aC5jb3ModCk7cmV0dXJuIGkobixlLC1lLG4sYS1hKm4rciplLHItYSplLXIqbil9LHQuVFJBTlNMQVRFPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHZvaWQgMD09PWEmJihhPTApLGFzc2VydE51bWJlcnModCxhKSxpKDEsMCwwLDEsdCxhKX0sdC5TQ0FMRT1mdW5jdGlvbih0LGEpe3JldHVybiB2b2lkIDA9PT1hJiYoYT10KSxhc3NlcnROdW1iZXJzKHQsYSksaSh0LDAsMCxhLDAsMCl9LHQuU0tFV19YPWZ1bmN0aW9uKHQpe3JldHVybiBhc3NlcnROdW1iZXJzKHQpLGkoMSwwLE1hdGguYXRhbih0KSwxLDAsMCl9LHQuU0tFV19ZPWZ1bmN0aW9uKHQpe3JldHVybiBhc3NlcnROdW1iZXJzKHQpLGkoMSxNYXRoLmF0YW4odCksMCwxLDAsMCl9LHQuWF9BWElTX1NZTU1FVFJZPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpLGkoLTEsMCwwLDEsdCwwKX0sdC5ZX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCksaSgxLDAsMCwtMSwwLHQpfSx0LkFfVE9fQz1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gU1ZHUGF0aERhdGEuQVJDPT09dC50eXBlP2EyYyh0LHQucmVsYXRpdmU/MDphLHQucmVsYXRpdmU/MDpyKTp0fSl9LHQuQU5OT1RBVEVfQVJDUz1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKGE9MCxyPTApLFNWR1BhdGhEYXRhLkFSQz09PXQudHlwZSYmYW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKSx0fSl9LHQuQ0xPTkU9byx0LkNBTENVTEFURV9CT1VORFM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbih0KXt2YXIgYT17fTtmb3IodmFyIHIgaW4gdClhW3JdPXRbcl07cmV0dXJuIGF9LGk9YSgpLG89ZSgpLHM9cigpLGg9bihmdW5jdGlvbihhLHIsZSl7dmFyIG49cyhvKGkodChhKSkpKTtmdW5jdGlvbiB1KHQpe3Q+aC5tYXhYJiYoaC5tYXhYPXQpLHQ8aC5taW5YJiYoaC5taW5YPXQpfWZ1bmN0aW9uIGModCl7dD5oLm1heFkmJihoLm1heFk9dCksdDxoLm1pblkmJihoLm1pblk9dCl9aWYobi50eXBlJlNWR1BhdGhEYXRhLkRSQVdJTkdfQ09NTUFORFMmJih1KHIpLGMoZSkpLG4udHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiZ1KG4ueCksbi50eXBlJlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyYmYyhuLnkpLG4udHlwZSZTVkdQYXRoRGF0YS5MSU5FX1RPJiYodShuLngpLGMobi55KSksbi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPKXt1KG4ueCksYyhuLnkpO2Zvcih2YXIgbT0wLF89YmV6aWVyUm9vdChyLG4ueDEsbi54MixuLngpO208Xy5sZW5ndGg7bSsrKTA8KEc9X1ttXSkmJjE+RyYmdShiZXppZXJBdChyLG4ueDEsbi54MixuLngsRykpO2Zvcih2YXIgVD0wLE89YmV6aWVyUm9vdChlLG4ueTEsbi55MixuLnkpO1Q8Ty5sZW5ndGg7VCsrKTA8KEc9T1tUXSkmJjE+RyYmYyhiZXppZXJBdChlLG4ueTEsbi55MixuLnksRykpfWlmKG4udHlwZSZTVkdQYXRoRGF0YS5BUkMpe3Uobi54KSxjKG4ueSksYW5ub3RhdGVBcmNDb21tYW5kKG4scixlKTtmb3IodmFyIHA9bi54Um90LzE4MCpNYXRoLlBJLHk9TWF0aC5jb3MocCkqbi5yWCxTPU1hdGguc2luKHApKm4uclgsZj0tTWF0aC5zaW4ocCkqbi5yWSxWPU1hdGguY29zKHApKm4uclksTj1uLnBoaTE8bi5waGkyP1tuLnBoaTEsbi5waGkyXTotMTgwPm4ucGhpMj9bbi5waGkyKzM2MCxuLnBoaTErMzYwXTpbbi5waGkyLG4ucGhpMV0sRD1OWzBdLFA9TlsxXSxsPWZ1bmN0aW9uKHQpe3ZhciBhPXRbMF0scj10WzFdLGU9MTgwKk1hdGguYXRhbjIocixhKS9NYXRoLlBJO3JldHVybiBlPEQ/ZSszNjA6ZX0sdj0wLEU9aW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUoZiwteSwwKS5tYXAobCk7djxFLmxlbmd0aDt2KyspKEc9RVt2XSk+RCYmRzxQJiZ1KGFyY0F0KG4uY1gseSxmLEcpKTtmb3IodmFyIEE9MCxkPWludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKFYsLVMsMCkubWFwKGwpO0E8ZC5sZW5ndGg7QSsrKXt2YXIgRzsoRz1kW0FdKT5EJiZHPFAmJmMoYXJjQXQobi5jWSxTLFYsRykpfX1yZXR1cm4gYX0pO3JldHVybiBoLm1pblg9MS8wLGgubWF4WD0tMS8wLGgubWluWT0xLzAsaC5tYXhZPS0xLzAsaH19KFNWR1BhdGhEYXRhVHJhbnNmb3JtZXJ8fChTVkdQYXRoRGF0YVRyYW5zZm9ybWVyPXt9KSk7dmFyIF9hLF9hJDEsVHJhbnNmb3JtYWJsZVNWRz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQucHJvdG90eXBlLnJvdW5kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlJPVU5EKHQpKX0sdC5wcm90b3R5cGUudG9BYnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UT19BQlMoKSl9LHQucHJvdG90eXBlLnRvUmVsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuVE9fUkVMKCkpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVIVlo9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk5PUk1BTElaRV9IVloodCxhLHIpKX0sdC5wcm90b3R5cGUubm9ybWFsaXplU1Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5OT1JNQUxJWkVfU1QoKSl9LHQucHJvdG90eXBlLnF0VG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUVRfVE9fQygpKX0sdC5wcm90b3R5cGUuYVRvQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkFfVE9fQygpKX0sdC5wcm90b3R5cGUuc2FuaXRpemU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0FOSVRJWkUodCkpfSx0LnByb3RvdHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UUkFOU0xBVEUodCxhKSl9LHQucHJvdG90eXBlLnNjYWxlPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0NBTEUodCxhKSl9LHQucHJvdG90eXBlLnJvdGF0ZT1mdW5jdGlvbih0LGEscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUk9UQVRFKHQsYSxyKSl9LHQucHJvdG90eXBlLm1hdHJpeD1mdW5jdGlvbih0LGEscixlLG4saSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTUFUUklYKHQsYSxyLGUsbixpKSl9LHQucHJvdG90eXBlLnNrZXdYPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNLRVdfWCh0KSl9LHQucHJvdG90eXBlLnNrZXdZPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNLRVdfWSh0KSl9LHQucHJvdG90eXBlLnhTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5YX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS55U3ltbWV0cnk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuWV9BWElTX1NZTU1FVFJZKHQpKX0sdC5wcm90b3R5cGUuYW5ub3RhdGVBcmNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQU5OT1RBVEVfQVJDUygpKX0sdH0oKSxpc1doaXRlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuXCIgXCI9PT10fHxcIlxcdFwiPT09dHx8XCJcXHJcIj09PXR8fFwiXFxuXCI9PT10fSxpc0RpZ2l0PWZ1bmN0aW9uKHQpe3JldHVyblwiMFwiLmNoYXJDb2RlQXQoMCk8PXQuY2hhckNvZGVBdCgwKSYmdC5jaGFyQ29kZUF0KDApPD1cIjlcIi5jaGFyQ29kZUF0KDApfSxTVkdQYXRoRGF0YVBhcnNlciQkMT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKCl7dmFyIGE9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBhLmN1ck51bWJlcj1cIlwiLGEuY3VyQ29tbWFuZFR5cGU9LTEsYS5jdXJDb21tYW5kUmVsYXRpdmU9ITEsYS5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwLGEuY3VyTnVtYmVySGFzRXhwPSExLGEuY3VyTnVtYmVySGFzRXhwRGlnaXRzPSExLGEuY3VyTnVtYmVySGFzRGVjaW1hbD0hMSxhLmN1ckFyZ3M9W10sYX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQmJih0PVtdKSx0aGlzLnBhcnNlKFwiIFwiLHQpLDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RofHwhdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IHRoZSBwYXRoIGVuZC5cIik7cmV0dXJuIHR9LGEucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKHQsYSl7dmFyIHI9dGhpczt2b2lkIDA9PT1hJiYoYT1bXSk7Zm9yKHZhciBlPWZ1bmN0aW9uKHQpe2EucHVzaCh0KSxyLmN1ckFyZ3MubGVuZ3RoPTAsci5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aWYoaXNEaWdpdChpKSl0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz10aGlzLmN1ck51bWJlckhhc0V4cDtlbHNlIGlmKFwiZVwiIT09aSYmXCJFXCIhPT1pKWlmKFwiLVwiIT09aSYmXCIrXCIhPT1pfHwhdGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzKWlmKFwiLlwiIT09aXx8dGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbCl7aWYodGhpcy5jdXJOdW1iZXImJi0xIT09dGhpcy5jdXJDb21tYW5kVHlwZSl7dmFyIG89TnVtYmVyKHRoaXMuY3VyTnVtYmVyKTtpZihpc05hTihvKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJJbnZhbGlkIG51bWJlciBlbmRpbmcgYXQgXCIrbik7aWYodGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkFSQylpZigwPT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8MT09PXRoaXMuY3VyQXJncy5sZW5ndGgpe2lmKDA+byl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIG51bWJlciwgZ290IFwiJytvKydcIiBhdCBpbmRleCBcIicrbisnXCInKX1lbHNlIGlmKCgzPT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8ND09PXRoaXMuY3VyQXJncy5sZW5ndGgpJiZcIjBcIiE9PXRoaXMuY3VyTnVtYmVyJiZcIjFcIiE9PXRoaXMuY3VyTnVtYmVyKXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgYSBmbGFnLCBnb3QgXCInK3RoaXMuY3VyTnVtYmVyKydcIiBhdCBpbmRleCBcIicrbisnXCInKTt0aGlzLmN1ckFyZ3MucHVzaChvKSx0aGlzLmN1ckFyZ3MubGVuZ3RoPT09Q09NTUFORF9BUkdfQ09VTlRTW3RoaXMuY3VyQ29tbWFuZFR5cGVdJiYoU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/ZSh7dHlwZTpTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6b30pOlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/ZSh7dHlwZTpTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseTpvfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLk1PVkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5MSU5FX1RPfHx0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8/KGUoe3R5cGU6dGhpcy5jdXJDb21tYW5kVHlwZSxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4OnRoaXMuY3VyQXJnc1swXSx5OnRoaXMuY3VyQXJnc1sxXX0pLFNWR1BhdGhEYXRhLk1PVkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlJiYodGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPKSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkNVUlZFX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4Mjp0aGlzLmN1ckFyZ3NbMl0seTI6dGhpcy5jdXJBcmdzWzNdLHg6dGhpcy5jdXJBcmdzWzRdLHk6dGhpcy5jdXJBcmdzWzVdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4Mjp0aGlzLmN1ckFyZ3NbMF0seTI6dGhpcy5jdXJBcmdzWzFdLHg6dGhpcy5jdXJBcmdzWzJdLHk6dGhpcy5jdXJBcmdzWzNdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlFVQURfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5RVUFEX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgxOnRoaXMuY3VyQXJnc1swXSx5MTp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQVJDJiZlKHt0eXBlOlNWR1BhdGhEYXRhLkFSQyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSxyWDp0aGlzLmN1ckFyZ3NbMF0sclk6dGhpcy5jdXJBcmdzWzFdLHhSb3Q6dGhpcy5jdXJBcmdzWzJdLGxBcmNGbGFnOnRoaXMuY3VyQXJnc1szXSxzd2VlcEZsYWc6dGhpcy5jdXJBcmdzWzRdLHg6dGhpcy5jdXJBcmdzWzVdLHk6dGhpcy5jdXJBcmdzWzZdfSkpLHRoaXMuY3VyTnVtYmVyPVwiXCIsdGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITEsdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMH1pZighaXNXaGl0ZVNwYWNlKGkpKWlmKFwiLFwiPT09aSYmdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMTtlbHNlIGlmKFwiK1wiIT09aSYmXCItXCIhPT1pJiZcIi5cIiE9PWkpe2lmKDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RoKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IGluZGV4IFwiK24rXCIuXCIpO2lmKCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicraSsnXCIgYXQgaW5kZXggJytuK1wiLiBDb21tYW5kIGNhbm5vdCBmb2xsb3cgY29tbWFcIik7aWYodGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExLFwielwiIT09aSYmXCJaXCIhPT1pKWlmKFwiaFwiPT09aXx8XCJIXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImhcIj09PWk7ZWxzZSBpZihcInZcIj09PWl8fFwiVlwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInZcIj09PWk7ZWxzZSBpZihcIm1cIj09PWl8fFwiTVwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLk1PVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJtXCI9PT1pO2Vsc2UgaWYoXCJsXCI9PT1pfHxcIkxcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibFwiPT09aTtlbHNlIGlmKFwiY1wiPT09aXx8XCJDXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJjXCI9PT1pO2Vsc2UgaWYoXCJzXCI9PT1pfHxcIlNcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJzXCI9PT1pO2Vsc2UgaWYoXCJxXCI9PT1pfHxcIlFcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwicVwiPT09aTtlbHNlIGlmKFwidFwiPT09aXx8XCJUXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJ0XCI9PT1pO2Vsc2V7aWYoXCJhXCIhPT1pJiZcIkFcIiE9PWkpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicraSsnXCIgYXQgaW5kZXggJytuK1wiLlwiKTt0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkFSQyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImFcIj09PWl9ZWxzZSBhLnB1c2goe3R5cGU6U1ZHUGF0aERhdGEuQ0xPU0VfUEFUSH0pLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCx0aGlzLmN1ckNvbW1hbmRUeXBlPS0xfWVsc2UgdGhpcy5jdXJOdW1iZXI9aSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9XCIuXCI9PT1pfWVsc2UgdGhpcy5jdXJOdW1iZXIrPWksdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSEwO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPWk7ZWxzZSB0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0V4cD0hMH1yZXR1cm4gYX0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuY3JlYXRlKHRoaXMse3BhcnNlOnt2YWx1ZTpmdW5jdGlvbihhLHIpe3ZvaWQgMD09PXImJihyPVtdKTtmb3IodmFyIGU9MCxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZS5jYWxsKHRoaXMsYSk7ZTxuLmxlbmd0aDtlKyspe3ZhciBpPW5bZV0sbz10KGkpO0FycmF5LmlzQXJyYXkobyk/ci5wdXNoLmFwcGx5KHIsbyk6ci5wdXNoKG8pfXJldHVybiByfX19KX0sYX0oVHJhbnNmb3JtYWJsZVNWRyksU1ZHUGF0aERhdGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gYShyKXt2YXIgZT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGUuY29tbWFuZHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/YS5wYXJzZShyKTpyLGV9cmV0dXJuIF9fZXh0ZW5kcyhhLHQpLGEucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbigpe3JldHVybiBhLmVuY29kZSh0aGlzLmNvbW1hbmRzKX0sYS5wcm90b3R5cGUuZ2V0Qm91bmRzPWZ1bmN0aW9uKCl7dmFyIHQ9U1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5DQUxDVUxBVEVfQk9VTkRTKCk7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHQpLHR9LGEucHJvdG90eXBlLnRyYW5zZm9ybT1mdW5jdGlvbih0KXtmb3IodmFyIGE9W10scj0wLGU9dGhpcy5jb21tYW5kcztyPGUubGVuZ3RoO3IrKyl7dmFyIG49dChlW3JdKTtBcnJheS5pc0FycmF5KG4pP2EucHVzaC5hcHBseShhLG4pOmEucHVzaChuKX1yZXR1cm4gdGhpcy5jb21tYW5kcz1hLHRoaXN9LGEuZW5jb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBlbmNvZGVTVkdQYXRoJCQxKHQpfSxhLnBhcnNlPWZ1bmN0aW9uKHQpe3ZhciBhPW5ldyBTVkdQYXRoRGF0YVBhcnNlciQkMSxyPVtdO3JldHVybiBhLnBhcnNlKHQsciksYS5maW5pc2gocikscn0sYS5DTE9TRV9QQVRIPTEsYS5NT1ZFX1RPPTIsYS5IT1JJWl9MSU5FX1RPPTQsYS5WRVJUX0xJTkVfVE89OCxhLkxJTkVfVE89MTYsYS5DVVJWRV9UTz0zMixhLlNNT09USF9DVVJWRV9UTz02NCxhLlFVQURfVE89MTI4LGEuU01PT1RIX1FVQURfVE89MjU2LGEuQVJDPTUxMixhLkxJTkVfQ09NTUFORFM9YS5MSU5FX1RPfGEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UTyxhLkRSQVdJTkdfQ09NTUFORFM9YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPfGEuTElORV9UT3xhLkNVUlZFX1RPfGEuU01PT1RIX0NVUlZFX1RPfGEuUVVBRF9UT3xhLlNNT09USF9RVUFEX1RPfGEuQVJDLGF9KFRyYW5zZm9ybWFibGVTVkcpLENPTU1BTkRfQVJHX0NPVU5UUz0oKF9hPXt9KVtTVkdQYXRoRGF0YS5NT1ZFX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkxJTkVfVE9dPTIsX2FbU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UT109MSxfYVtTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE9dPTEsX2FbU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSF09MCxfYVtTVkdQYXRoRGF0YS5RVUFEX1RPXT00LF9hW1NWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkNVUlZFX1RPXT02LF9hW1NWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UT109NCxfYVtTVkdQYXRoRGF0YS5BUkNdPTcsX2EpLFdTUD1cIiBcIjtmdW5jdGlvbiBlbmNvZGVTVkdQYXRoJCQxKHQpe3ZhciBhPVwiXCI7QXJyYXkuaXNBcnJheSh0KXx8KHQ9W3RdKTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGU9dFtyXTtpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5DTE9TRV9QQVRIKWErPVwielwiO2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cImhcIjpcIkhcIikrZS54O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPKWErPShlLnJlbGF0aXZlP1widlwiOlwiVlwiKStlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5NT1ZFX1RPKWErPShlLnJlbGF0aXZlP1wibVwiOlwiTVwiKStlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLkxJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJsXCI6XCJMXCIpK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuQ1VSVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJjXCI6XCJDXCIpK2UueDErV1NQK2UueTErV1NQK2UueDIrV1NQK2UueTIrV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPKWErPShlLnJlbGF0aXZlP1wic1wiOlwiU1wiKStlLngyK1dTUCtlLnkyK1dTUCtlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLlFVQURfVE8pYSs9KGUucmVsYXRpdmU/XCJxXCI6XCJRXCIpK2UueDErV1NQK2UueTErV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8pYSs9KGUucmVsYXRpdmU/XCJ0XCI6XCJUXCIpK2UueCtXU1ArZS55O2Vsc2V7aWYoZS50eXBlIT09U1ZHUGF0aERhdGEuQVJDKXRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBjb21tYW5kIHR5cGUgXCInK2UudHlwZSsnXCIgYXQgaW5kZXggJytyK1wiLlwiKTthKz0oZS5yZWxhdGl2ZT9cImFcIjpcIkFcIikrZS5yWCtXU1ArZS5yWStXU1ArZS54Um90K1dTUCsgK2UubEFyY0ZsYWcrV1NQKyArZS5zd2VlcEZsYWcrV1NQK2UueCtXU1ArZS55fX1yZXR1cm4gYX12YXIgU1ZHUGF0aERhdGEkMT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9hLnBhcnNlKHIpOnIsZX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxhLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD1TVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxyPTAsZT10aGlzLmNvbW1hbmRzO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj10KGVbcl0pO0FycmF5LmlzQXJyYXkobik/YS5wdXNoLmFwcGx5KGEsbik6YS5wdXNoKG4pfXJldHVybiB0aGlzLmNvbW1hbmRzPWEsdGhpc30sYS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVNWR1BhdGgkJDEodCl9LGEucGFyc2U9ZnVuY3Rpb24odCl7dmFyIGE9bmV3IFNWR1BhdGhEYXRhUGFyc2VyJCQxLHI9W107cmV0dXJuIGEucGFyc2UodCxyKSxhLmZpbmlzaChyKSxyfSxhLkNMT1NFX1BBVEg9MSxhLk1PVkVfVE89MixhLkhPUklaX0xJTkVfVE89NCxhLlZFUlRfTElORV9UTz04LGEuTElORV9UTz0xNixhLkNVUlZFX1RPPTMyLGEuU01PT1RIX0NVUlZFX1RPPTY0LGEuUVVBRF9UTz0xMjgsYS5TTU9PVEhfUVVBRF9UTz0yNTYsYS5BUkM9NTEyLGEuTElORV9DT01NQU5EUz1hLkxJTkVfVE98YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPLGEuRFJBV0lOR19DT01NQU5EUz1hLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE98YS5MSU5FX1RPfGEuQ1VSVkVfVE98YS5TTU9PVEhfQ1VSVkVfVE98YS5RVUFEX1RPfGEuU01PT1RIX1FVQURfVE98YS5BUkMsYX0oVHJhbnNmb3JtYWJsZVNWRyksQ09NTUFORF9BUkdfQ09VTlRTJDE9KChfYSQxPXt9KVtTVkdQYXRoRGF0YSQxLk1PVkVfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkxJTkVfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkhPUklaX0xJTkVfVE9dPTEsX2EkMVtTVkdQYXRoRGF0YSQxLlZFUlRfTElORV9UT109MSxfYSQxW1NWR1BhdGhEYXRhJDEuQ0xPU0VfUEFUSF09MCxfYSQxW1NWR1BhdGhEYXRhJDEuUVVBRF9UT109NCxfYSQxW1NWR1BhdGhEYXRhJDEuU01PT1RIX1FVQURfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkNVUlZFX1RPXT02LF9hJDFbU1ZHUGF0aERhdGEkMS5TTU9PVEhfQ1VSVkVfVE9dPTQsX2EkMVtTVkdQYXRoRGF0YSQxLkFSQ109NyxfYSQxKTtleHBvcnR7U1ZHUGF0aERhdGEkMSBhcyBTVkdQYXRoRGF0YSxDT01NQU5EX0FSR19DT1VOVFMkMSBhcyBDT01NQU5EX0FSR19DT1VOVFMsZW5jb2RlU1ZHUGF0aCQkMSBhcyBlbmNvZGVTVkdQYXRoLFNWR1BhdGhEYXRhUGFyc2VyJCQxIGFzIFNWR1BhdGhEYXRhUGFyc2VyLFNWR1BhdGhEYXRhVHJhbnNmb3JtZXJ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U1ZHUGF0aERhdGEubW9kdWxlLmpzLm1hcFxuIiwiaW1wb3J0IHRvUGF0aCBmcm9tICcuL3RvUGF0aCc7XG5pbXBvcnQgdG9Qb2ludHMgZnJvbSAnLi90b1BvaW50cyc7XG5pbXBvcnQgdmFsaWQgZnJvbSAnLi92YWxpZCc7XG5cbmV4cG9ydCB7IHRvUGF0aCwgdG9Qb2ludHMsIHZhbGlkIH07IiwiaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuXG52YXIgcG9pbnRzVG9EID0gZnVuY3Rpb24gcG9pbnRzVG9EKHApIHtcbiAgdmFyIGQgPSAnJztcbiAgdmFyIGkgPSAwO1xuICB2YXIgZmlyc3RQb2ludCA9IHZvaWQgMDtcblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgdmFyIHBvaW50ID0gX3N0ZXAudmFsdWU7XG4gICAgICB2YXIgX3BvaW50JGN1cnZlID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgY3VydmUgPSBfcG9pbnQkY3VydmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3BvaW50JGN1cnZlLFxuICAgICAgICAgIG1vdmVUbyA9IHBvaW50Lm1vdmVUbyxcbiAgICAgICAgICB4ID0gcG9pbnQueCxcbiAgICAgICAgICB5ID0gcG9pbnQueTtcblxuICAgICAgdmFyIGlzRmlyc3RQb2ludCA9IGkgPT09IDAgfHwgbW92ZVRvO1xuICAgICAgdmFyIGlzTGFzdFBvaW50ID0gaSA9PT0gcC5sZW5ndGggLSAxIHx8IHBbaSArIDFdLm1vdmVUbztcbiAgICAgIHZhciBwcmV2UG9pbnQgPSBpID09PSAwID8gbnVsbCA6IHBbaSAtIDFdO1xuXG4gICAgICBpZiAoaXNGaXJzdFBvaW50KSB7XG4gICAgICAgIGZpcnN0UG9pbnQgPSBwb2ludDtcblxuICAgICAgICBpZiAoIWlzTGFzdFBvaW50KSB7XG4gICAgICAgICAgZCArPSAnTScgKyB4ICsgJywnICsgeTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjdXJ2ZSkge1xuICAgICAgICBzd2l0Y2ggKGN1cnZlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdhcmMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTIgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJGxhcmdlQXIgPSBfcG9pbnQkY3VydmUyLmxhcmdlQXJjRmxhZyxcbiAgICAgICAgICAgICAgICBsYXJnZUFyY0ZsYWcgPSBfcG9pbnQkY3VydmUyJGxhcmdlQXIgPT09IHVuZGVmaW5lZCA/IDAgOiBfcG9pbnQkY3VydmUyJGxhcmdlQXIsXG4gICAgICAgICAgICAgICAgcnggPSBfcG9pbnQkY3VydmUyLnJ4LFxuICAgICAgICAgICAgICAgIHJ5ID0gX3BvaW50JGN1cnZlMi5yeSxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJHN3ZWVwRmwgPSBfcG9pbnQkY3VydmUyLnN3ZWVwRmxhZyxcbiAgICAgICAgICAgICAgICBzd2VlcEZsYWcgPSBfcG9pbnQkY3VydmUyJHN3ZWVwRmwgPT09IHVuZGVmaW5lZCA/IDAgOiBfcG9pbnQkY3VydmUyJHN3ZWVwRmwsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiR4QXhpc1JvID0gX3BvaW50JGN1cnZlMi54QXhpc1JvdGF0aW9uLFxuICAgICAgICAgICAgICAgIHhBeGlzUm90YXRpb24gPSBfcG9pbnQkY3VydmUyJHhBeGlzUm8gPT09IHVuZGVmaW5lZCA/IDAgOiBfcG9pbnQkY3VydmUyJHhBeGlzUm87XG5cbiAgICAgICAgICAgIGQgKz0gJ0EnICsgcnggKyAnLCcgKyByeSArICcsJyArIHhBeGlzUm90YXRpb24gKyAnLCcgKyBsYXJnZUFyY0ZsYWcgKyAnLCcgKyBzd2VlcEZsYWcgKyAnLCcgKyB4ICsgJywnICsgeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2N1YmljJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUzID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgY3gxID0gX3BvaW50JGN1cnZlMy54MSxcbiAgICAgICAgICAgICAgICBjeTEgPSBfcG9pbnQkY3VydmUzLnkxLFxuICAgICAgICAgICAgICAgIGN4MiA9IF9wb2ludCRjdXJ2ZTMueDIsXG4gICAgICAgICAgICAgICAgY3kyID0gX3BvaW50JGN1cnZlMy55MjtcblxuICAgICAgICAgICAgZCArPSAnQycgKyBjeDEgKyAnLCcgKyBjeTEgKyAnLCcgKyBjeDIgKyAnLCcgKyBjeTIgKyAnLCcgKyB4ICsgJywnICsgeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3F1YWRyYXRpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlNCA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIHF4MSA9IF9wb2ludCRjdXJ2ZTQueDEsXG4gICAgICAgICAgICAgICAgcXkxID0gX3BvaW50JGN1cnZlNC55MTtcblxuICAgICAgICAgICAgZCArPSAnUScgKyBxeDEgKyAnLCcgKyBxeTEgKyAnLCcgKyB4ICsgJywnICsgeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTGFzdFBvaW50ICYmIHggPT09IGZpcnN0UG9pbnQueCAmJiB5ID09PSBmaXJzdFBvaW50LnkpIHtcbiAgICAgICAgICBkICs9ICdaJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ1onO1xuICAgICAgfSBlbHNlIGlmICh4ICE9PSBwcmV2UG9pbnQueCAmJiB5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdMJyArIHggKyAnLCcgKyB5O1xuICAgICAgfSBlbHNlIGlmICh4ICE9PSBwcmV2UG9pbnQueCkge1xuICAgICAgICBkICs9ICdIJyArIHg7XG4gICAgICB9IGVsc2UgaWYgKHkgIT09IHByZXZQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ1YnICsgeTtcbiAgICAgIH1cblxuICAgICAgaSsrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZDtcbn07XG5cbnZhciB0b1BhdGggPSBmdW5jdGlvbiB0b1BhdGgocykge1xuICB2YXIgaXNQb2ludHMgPSBBcnJheS5pc0FycmF5KHMpO1xuICB2YXIgaXNHcm91cCA9IGlzUG9pbnRzID8gQXJyYXkuaXNBcnJheShzWzBdKSA6IHMudHlwZSA9PT0gJ2cnO1xuICB2YXIgcG9pbnRzID0gaXNQb2ludHMgPyBzIDogaXNHcm91cCA/IHMuc2hhcGVzLm1hcChmdW5jdGlvbiAoc2hwKSB7XG4gICAgcmV0dXJuIHRvUG9pbnRzKHNocCk7XG4gIH0pIDogdG9Qb2ludHMocyk7XG5cbiAgaWYgKGlzR3JvdXApIHtcbiAgICByZXR1cm4gcG9pbnRzLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHBvaW50c1RvRChwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwb2ludHNUb0QocG9pbnRzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUGF0aDsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciB0b1BvaW50cyA9IGZ1bmN0aW9uIHRvUG9pbnRzKF9yZWYpIHtcbiAgdmFyIHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3R5cGUnXSk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tQ2lyY2xlKHByb3BzKTtcbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRWxsaXBzZShwcm9wcyk7XG4gICAgY2FzZSAnbGluZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21QYXRoKHByb3BzKTtcbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWdvbihwcm9wcyk7XG4gICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2x5bGluZShwcm9wcyk7XG4gICAgY2FzZSAncmVjdCc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3QocHJvcHMpO1xuICAgIGNhc2UgJ2cnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21HKHByb3BzKTtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOb3QgYSB2YWxpZCBzaGFwZSB0eXBlJyk7XG4gIH1cbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQ2lyY2xlID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUNpcmNsZShfcmVmMikge1xuICB2YXIgY3ggPSBfcmVmMi5jeCxcbiAgICAgIGN5ID0gX3JlZjIuY3ksXG4gICAgICByID0gX3JlZjIucjtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gciwgbW92ZVRvOiB0cnVlIH0sIHsgeDogY3gsIHk6IGN5ICsgciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfSwgeyB4OiBjeCwgeTogY3kgLSByLCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHIsIHJ5OiByLCBzd2VlcEZsYWc6IDEgfSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRWxsaXBzZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21FbGxpcHNlKF9yZWYzKSB7XG4gIHZhciBjeCA9IF9yZWYzLmN4LFxuICAgICAgY3kgPSBfcmVmMy5jeSxcbiAgICAgIHJ4ID0gX3JlZjMucngsXG4gICAgICByeSA9IF9yZWYzLnJ5O1xuXG4gIHJldHVybiBbeyB4OiBjeCwgeTogY3kgLSByeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogY3gsIHk6IGN5ICsgcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfSwgeyB4OiBjeCwgeTogY3kgLSByeSwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tTGluZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21MaW5lKF9yZWY0KSB7XG4gIHZhciB4MSA9IF9yZWY0LngxLFxuICAgICAgeDIgPSBfcmVmNC54MixcbiAgICAgIHkxID0gX3JlZjQueTEsXG4gICAgICB5MiA9IF9yZWY0LnkyO1xuXG4gIHJldHVybiBbeyB4OiB4MSwgeTogeTEsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHgyLCB5OiB5MiB9XTtcbn07XG5cbnZhciB2YWxpZENvbW1hbmRzID0gL1tNbUxsSGhWdkNjU3NRcVR0QWFael0vZztcblxudmFyIGNvbW1hbmRMZW5ndGhzID0ge1xuICBBOiA3LFxuICBDOiA2LFxuICBIOiAxLFxuICBMOiAyLFxuICBNOiAyLFxuICBROiA0LFxuICBTOiA0LFxuICBUOiAyLFxuICBWOiAxLFxuICBaOiAwXG59O1xuXG52YXIgcmVsYXRpdmVDb21tYW5kcyA9IFsnYScsICdjJywgJ2gnLCAnbCcsICdtJywgJ3EnLCAncycsICd0JywgJ3YnXTtcblxudmFyIGlzUmVsYXRpdmUgPSBmdW5jdGlvbiBpc1JlbGF0aXZlKGNvbW1hbmQpIHtcbiAgcmV0dXJuIHJlbGF0aXZlQ29tbWFuZHMuaW5kZXhPZihjb21tYW5kKSAhPT0gLTE7XG59O1xuXG52YXIgb3B0aW9uYWxBcmNLZXlzID0gWyd4QXhpc1JvdGF0aW9uJywgJ2xhcmdlQXJjRmxhZycsICdzd2VlcEZsYWcnXTtcblxudmFyIGdldENvbW1hbmRzID0gZnVuY3Rpb24gZ2V0Q29tbWFuZHMoZCkge1xuICByZXR1cm4gZC5tYXRjaCh2YWxpZENvbW1hbmRzKTtcbn07XG5cbnZhciBnZXRQYXJhbXMgPSBmdW5jdGlvbiBnZXRQYXJhbXMoZCkge1xuICByZXR1cm4gZC5zcGxpdCh2YWxpZENvbW1hbmRzKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5yZXBsYWNlKC9bMC05XSstL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS5zbGljZSgwLCAtMSkgKyAnIC0nO1xuICAgIH0pO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5yZXBsYWNlKC9cXC5bMC05XSsvZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtICsgJyAnO1xuICAgIH0pO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi50cmltKCk7XG4gIH0pLmZpbHRlcihmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2Lmxlbmd0aCA+IDA7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnNwbGl0KC9bICxdKy8pLm1hcChwYXJzZUZsb2F0KS5maWx0ZXIoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiAhaXNOYU4obik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21QYXRoID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBhdGgoX3JlZjUpIHtcbiAgdmFyIGQgPSBfcmVmNS5kO1xuXG4gIHZhciBjb21tYW5kcyA9IGdldENvbW1hbmRzKGQpO1xuICB2YXIgcGFyYW1zID0gZ2V0UGFyYW1zKGQpO1xuXG4gIHZhciBwb2ludHMgPSBbXTtcblxuICB2YXIgbW92ZVRvID0gdm9pZCAwO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gY29tbWFuZHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGNvbW1hbmQgPSBjb21tYW5kc1tpXTtcbiAgICB2YXIgdXBwZXJDYXNlQ29tbWFuZCA9IGNvbW1hbmQudG9VcHBlckNhc2UoKTtcbiAgICB2YXIgY29tbWFuZExlbmd0aCA9IGNvbW1hbmRMZW5ndGhzW3VwcGVyQ2FzZUNvbW1hbmRdO1xuICAgIHZhciByZWxhdGl2ZSA9IGlzUmVsYXRpdmUoY29tbWFuZCk7XG5cbiAgICBpZiAoY29tbWFuZExlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjb21tYW5kUGFyYW1zID0gcGFyYW1zLnNoaWZ0KCk7XG4gICAgICB2YXIgaXRlcmF0aW9ucyA9IGNvbW1hbmRQYXJhbXMubGVuZ3RoIC8gY29tbWFuZExlbmd0aDtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVyYXRpb25zOyBqKyspIHtcbiAgICAgICAgdmFyIHByZXZQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gfHwgeyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgc3dpdGNoICh1cHBlckNhc2VDb21tYW5kKSB7XG4gICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICB2YXIgeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgeSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgICAgICAgIG1vdmVUbyA9IHsgeDogeCwgeTogeSB9O1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHksIG1vdmVUbzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdMJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IHByZXZQb2ludC55XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogcHJldlBvaW50LngsXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhcmMnLFxuICAgICAgICAgICAgICAgIHJ4OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgcnk6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uOiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnOiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnOiBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBvcHRpb25hbEFyY0tleXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdWydjdXJ2ZSddW2tdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgIF9pdGVyYXRvckVycm9yID0gZXJyO1xuICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0MnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjdWJpYycsXG4gICAgICAgICAgICAgICAgeDE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeTE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeDI6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeTI6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnUyc6XG4gICAgICAgICAgICB2YXIgc3gyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeTIgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciBkaWZmID0ge307XG5cbiAgICAgICAgICAgIHZhciBzeDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgc3kxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAnY3ViaWMnKSB7XG4gICAgICAgICAgICAgIGRpZmYueCA9IE1hdGguYWJzKHByZXZQb2ludC54IC0gcHJldlBvaW50LmN1cnZlLngyKTtcbiAgICAgICAgICAgICAgZGlmZi55ID0gTWF0aC5hYnMocHJldlBvaW50LnkgLSBwcmV2UG9pbnQuY3VydmUueTIpO1xuICAgICAgICAgICAgICBzeDEgPSBwcmV2UG9pbnQueCA8IHByZXZQb2ludC5jdXJ2ZS54MiA/IHByZXZQb2ludC54IC0gZGlmZi54IDogcHJldlBvaW50LnggKyBkaWZmLng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55IDwgcHJldlBvaW50LmN1cnZlLnkyID8gcHJldlBvaW50LnkgLSBkaWZmLnkgOiBwcmV2UG9pbnQueSArIGRpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRpZmYueCA9IE1hdGguYWJzKHN4IC0gc3gyKTtcbiAgICAgICAgICAgICAgZGlmZi55ID0gTWF0aC5hYnMoc3kgLSBzeTIpO1xuICAgICAgICAgICAgICBzeDEgPSBwcmV2UG9pbnQueDtcbiAgICAgICAgICAgICAgc3kxID0gcHJldlBvaW50Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgY3VydmU6IHsgdHlwZTogJ2N1YmljJywgeDE6IHN4MSwgeTE6IHN5MSwgeDI6IHN4MiwgeTI6IHN5MiB9LCB4OiBzeCwgeTogc3kgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3F1YWRyYXRpYycsXG4gICAgICAgICAgICAgICAgeDE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeTE6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICB2YXIgdHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHR5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgdmFyIHR4MSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciB0eTEgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmIChwcmV2UG9pbnQuY3VydmUgJiYgcHJldlBvaW50LmN1cnZlLnR5cGUgPT09ICdxdWFkcmF0aWMnKSB7XG4gICAgICAgICAgICAgIHZhciBfZGlmZiA9IHtcbiAgICAgICAgICAgICAgICB4OiBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54MSksXG4gICAgICAgICAgICAgICAgeTogTWF0aC5hYnMocHJldlBvaW50LnkgLSBwcmV2UG9pbnQuY3VydmUueTEpXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgdHgxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDEgPyBwcmV2UG9pbnQueCAtIF9kaWZmLnggOiBwcmV2UG9pbnQueCArIF9kaWZmLng7XG4gICAgICAgICAgICAgIHR5MSA9IHByZXZQb2ludC55IDwgcHJldlBvaW50LmN1cnZlLnkxID8gcHJldlBvaW50LnkgLSBfZGlmZi55IDogcHJldlBvaW50LnkgKyBfZGlmZi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdHgxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHR5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdxdWFkcmF0aWMnLCB4MTogdHgxLCB5MTogdHkxIH0sIHg6IHR4LCB5OiB0eSB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9wcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICBpZiAoX3ByZXZQb2ludC54ICE9PSBtb3ZlVG8ueCB8fCBfcHJldlBvaW50LnkgIT09IG1vdmVUby55KSB7XG4gICAgICAgIHBvaW50cy5wdXNoKHsgeDogbW92ZVRvLngsIHk6IG1vdmVUby55IH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwb2ludHM7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlnb24gPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUG9seWdvbihfcmVmNikge1xuICB2YXIgcG9pbnRzID0gX3JlZjYucG9pbnRzO1xuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tUG9pbnRzKHsgY2xvc2VkOiB0cnVlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9seWxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUG9seWxpbmUoX3JlZjcpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY3LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogZmFsc2UsIHBvaW50czogcG9pbnRzIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2ludHMgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUG9pbnRzKF9yZWY4KSB7XG4gIHZhciBjbG9zZWQgPSBfcmVmOC5jbG9zZWQsXG4gICAgICBwb2ludHMgPSBfcmVmOC5wb2ludHM7XG5cbiAgdmFyIG51bWJlcnMgPSBwb2ludHMuc3BsaXQoL1tcXHMsXSsvKS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChuKTtcbiAgfSk7XG5cbiAgdmFyIHAgPSBudW1iZXJzLnJlZHVjZShmdW5jdGlvbiAoYXJyLCBwb2ludCwgaSkge1xuICAgIGlmIChpICUgMiA9PT0gMCkge1xuICAgICAgYXJyLnB1c2goeyB4OiBwb2ludCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyWyhpIC0gMSkgLyAyXS55ID0gcG9pbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfSwgW10pO1xuXG4gIGlmIChjbG9zZWQpIHtcbiAgICBwLnB1c2goX2V4dGVuZHMoe30sIHBbMF0pKTtcbiAgfVxuXG4gIHBbMF0ubW92ZVRvID0gdHJ1ZTtcblxuICByZXR1cm4gcDtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUmVjdCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21SZWN0KF9yZWY5KSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmOS5oZWlnaHQsXG4gICAgICByeCA9IF9yZWY5LnJ4LFxuICAgICAgcnkgPSBfcmVmOS5yeSxcbiAgICAgIHdpZHRoID0gX3JlZjkud2lkdGgsXG4gICAgICB4ID0gX3JlZjkueCxcbiAgICAgIHkgPSBfcmVmOS55O1xuXG4gIGlmIChyeCB8fCByeSkge1xuICAgIHJldHVybiBnZXRQb2ludHNGcm9tUmVjdFdpdGhDb3JuZXJSYWRpdXMoe1xuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICByeDogcnggfHwgcnksXG4gICAgICByeTogcnkgfHwgcngsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21CYXNpY1JlY3QoeyBoZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRoLCB4OiB4LCB5OiB5IH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21CYXNpY1JlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KF9yZWYxMCkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjEwLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZjEwLndpZHRoLFxuICAgICAgeCA9IF9yZWYxMC54LFxuICAgICAgeSA9IF9yZWYxMC55O1xuXG4gIHJldHVybiBbeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUmVjdFdpdGhDb3JuZXJSYWRpdXMgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdFdpdGhDb3JuZXJSYWRpdXMoX3JlZjExKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMTEuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmMTEucngsXG4gICAgICByeSA9IF9yZWYxMS5yeSxcbiAgICAgIHdpZHRoID0gX3JlZjExLndpZHRoLFxuICAgICAgeCA9IF9yZWYxMS54LFxuICAgICAgeSA9IF9yZWYxMS55O1xuXG4gIHZhciBjdXJ2ZSA9IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfTtcblxuICByZXR1cm4gW3sgeDogeCArIHJ4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyBoZWlnaHQgLSByeSB9LCB7IHg6IHggKyB3aWR0aCAtIHJ4LCB5OiB5ICsgaGVpZ2h0LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4ICsgcngsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5ICsgaGVpZ2h0IC0gcnksIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHgsIHk6IHkgKyByeSB9LCB7IHg6IHggKyByeCwgeTogeSwgY3VydmU6IGN1cnZlIH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21HID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUcoX3JlZjEyKSB7XG4gIHZhciBzaGFwZXMgPSBfcmVmMTIuc2hhcGVzO1xuICByZXR1cm4gc2hhcGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgIHJldHVybiB0b1BvaW50cyhzKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BvaW50czsiLCJ2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBnZXRFcnJvcnMgPSBmdW5jdGlvbiBnZXRFcnJvcnMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gZ2V0UnVsZXMoc2hhcGUpO1xuICB2YXIgZXJyb3JzID0gW107XG5cbiAgcnVsZXMubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIG1hdGNoID0gX3JlZi5tYXRjaCxcbiAgICAgICAgcHJvcCA9IF9yZWYucHJvcCxcbiAgICAgICAgcmVxdWlyZWQgPSBfcmVmLnJlcXVpcmVkLFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlO1xuXG4gICAgaWYgKHR5cGVvZiBzaGFwZVtwcm9wXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIGlzIHJlcXVpcmVkJyArIChwcm9wID09PSAndHlwZScgPyAnJyA6ICcgb24gYSAnICsgc2hhcGUudHlwZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXBlW3Byb3BdKSkge1xuICAgICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9mIHR5cGUgYXJyYXknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihzaGFwZVtwcm9wXSkgIT09IHR5cGUpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHZhbGlkLXR5cGVvZlxuICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlICcgKyB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShtYXRjaCkpIHtcbiAgICAgICAgaWYgKG1hdGNoLmluZGV4T2Yoc2hhcGVbcHJvcF0pID09PSAtMSkge1xuICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvbmUgb2YgJyArIG1hdGNoLmpvaW4oJywgJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoc2hhcGUudHlwZSA9PT0gJ2cnICYmIEFycmF5LmlzQXJyYXkoc2hhcGUuc2hhcGVzKSkge1xuICAgIHZhciBjaGlsZEVycm9ycyA9IHNoYXBlLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBnZXRFcnJvcnMocyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtdLmNvbmNhdC5hcHBseShlcnJvcnMsIGNoaWxkRXJyb3JzKTtcbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59O1xuXG52YXIgZ2V0UnVsZXMgPSBmdW5jdGlvbiBnZXRSdWxlcyhzaGFwZSkge1xuICB2YXIgcnVsZXMgPSBbe1xuICAgIG1hdGNoOiBbJ2NpcmNsZScsICdlbGxpcHNlJywgJ2xpbmUnLCAncGF0aCcsICdwb2x5Z29uJywgJ3BvbHlsaW5lJywgJ3JlY3QnLCAnZyddLFxuICAgIHByb3A6ICd0eXBlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB0eXBlOiAnc3RyaW5nJ1xuICB9XTtcblxuICBzd2l0Y2ggKHNoYXBlLnR5cGUpIHtcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3InLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbGluZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneTEnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnZCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgY2FzZSAncG9seWxpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdwb2ludHMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdoZWlnaHQnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J4JywgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J5JywgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3dpZHRoJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdnJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnc2hhcGVzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdhcnJheScgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn07XG5cbnZhciB2YWxpZCA9IGZ1bmN0aW9uIHZhbGlkKHNoYXBlKSB7XG4gIHZhciBlcnJvcnMgPSBnZXRFcnJvcnMoc2hhcGUpO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBlcnJvcnMsXG4gICAgdmFsaWQ6IGVycm9ycy5sZW5ndGggPT09IDBcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkOyIsIjsoZnVuY3Rpb24gaW5qZWN0KGNsZWFuLCBwcmVjaXNpb24sIHVuZGVmKSB7XG5cbiAgdmFyIGlzQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcblxuICB2YXIgZGVmaW5lZCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSAhPT0gdW5kZWY7XG4gIH07XG5cbiAgZnVuY3Rpb24gVmVjMih4LCB5KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlYzIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZlYzIoeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgIHkgPSB4WzFdO1xuICAgICAgeCA9IHhbMF07XG4gICAgfSBlbHNlIGlmKCdvYmplY3QnID09PSB0eXBlb2YgeCAmJiB4KSB7XG4gICAgICB5ID0geC55O1xuICAgICAgeCA9IHgueDtcbiAgICB9XG5cbiAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHggfHwgMCk7XG4gICAgdGhpcy55ID0gVmVjMi5jbGVhbih5IHx8IDApO1xuICB9XG5cbiAgVmVjMi5wcm90b3R5cGUgPSB7XG4gICAgY2hhbmdlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChmbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbZm5dO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpPXRoaXMub2JzZXJ2ZXJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1tpXSh0aGlzLCBmbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGlnbm9yZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLm9ic2VydmVycywgbCA9IG8ubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlKGwtLSkge1xuICAgICAgICAgICAgb1tsXSA9PT0gZm4gJiYgby5zcGxpY2UobCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gc2V0IHggYW5kIHlcbiAgICBzZXQ6IGZ1bmN0aW9uKHgsIHksIG5vdGlmeSkge1xuICAgICAgaWYoJ251bWJlcicgIT0gdHlwZW9mIHgpIHtcbiAgICAgICAgbm90aWZ5ID0geTtcbiAgICAgICAgeSA9IHgueTtcbiAgICAgICAgeCA9IHgueDtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy54ID09PSB4ICYmIHRoaXMueSA9PT0geSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWcgPSBudWxsO1xuICAgICAgaWYgKG5vdGlmeSAhPT0gZmFsc2UgJiYgdGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIG9yaWcgPSB0aGlzLmNsb25lKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCk7XG4gICAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkpO1xuXG4gICAgICBpZihub3RpZnkgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShvcmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gcmVzZXQgeCBhbmQgeSB0byB6ZXJvXG4gICAgemVybyA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KDAsIDApO1xuICAgIH0sXG5cbiAgICAvLyByZXR1cm4gYSBuZXcgdmVjdG9yIHdpdGggdGhlIHNhbWUgY29tcG9uZW50IHZhbHVlc1xuICAgIC8vIGFzIHRoaXMgb25lXG4gICAgY2xvbmUgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCwgdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gbmVnYXRlIHRoZSB2YWx1ZXMgb2YgdGhpcyB2ZWN0b3JcbiAgICBuZWdhdGUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFkZCB0aGUgaW5jb21pbmcgYHZlYzJgIHZlY3RvciB0byB0aGlzIHZlY3RvclxuICAgIGFkZCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuXG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCArPSB0aGlzLng7XG4gICAgICB5ICs9IHRoaXMueTtcblxuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU3VidHJhY3QgdGhlIGluY29taW5nIGB2ZWMyYCBmcm9tIHRoaXMgdmVjdG9yXG4gICAgc3VidHJhY3QgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ID0gdGhpcy54IC0geDtcbiAgICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIGluY29taW5nIGB2ZWMyYFxuICAgIG11bHRpcGx5IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIHggKj0gdGhpcy54O1xuICAgICAgeSAqPSB0aGlzLnk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSb3RhdGUgdGhpcyB2ZWN0b3IuIEFjY2VwdHMgYSBgUm90YXRpb25gIG9yIGFuZ2xlIGluIHJhZGlhbnMuXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIGEgdHJ1dGh5IGBpbnZlcnNlYCB3aWxsIGNhdXNlIHRoZSByb3RhdGlvbiB0b1xuICAgIC8vIGJlIHJldmVyc2VkLlxuICAgIC8vXG4gICAgLy8gSWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5LCBhIG5ld1xuICAgIC8vIGBWZWMyYCB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgdmFsdWVzIHJlc3VsdGluZyBmcm9tXG4gICAgLy8gdGhlIHJvdGF0aW9uLiBPdGhlcndpc2UgdGhlIHJvdGF0aW9uIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIHRvIHRoaXMgdmVjdG9yIGRpcmVjdGx5LCBhbmQgdGhpcyB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZC5cbiAgICByb3RhdGUgOiBmdW5jdGlvbihyLCBpbnZlcnNlLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgeCA9IHRoaXMueCxcbiAgICAgIHkgPSB0aGlzLnksXG4gICAgICBjb3MgPSBNYXRoLmNvcyhyKSxcbiAgICAgIHNpbiA9IE1hdGguc2luKHIpLFxuICAgICAgcngsIHJ5O1xuXG4gICAgICBpbnZlcnNlID0gKGludmVyc2UpID8gLTEgOiAxO1xuXG4gICAgICByeCA9IGNvcyAqIHggLSAoaW52ZXJzZSAqIHNpbikgKiB5O1xuICAgICAgcnkgPSAoaW52ZXJzZSAqIHNpbikgKiB4ICsgY29zICogeTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShyeCwgcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJ4LCByeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgbGVuZ3RoIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIHNxdWFyZWQuIEZvciBwZXJmb3JtYW5jZSwgdXNlIHRoaXMgaW5zdGVhZCBvZiBgVmVjMiNsZW5ndGhgIChpZiBwb3NzaWJsZSkuXG4gICAgbGVuZ3RoU3F1YXJlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4geCp4K3kqeTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZW4gdGhpcyBgVmVjMmAgYW5kIHRoZSBpbmNvbWluZyB2ZWMyIHZlY3RvclxuICAgIC8vIGFuZCByZXR1cm4gYSBzY2FsYXJcbiAgICBkaXN0YW5jZSA6IGZ1bmN0aW9uKHZlYzIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54IC0gdmVjMi54O1xuICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2ZWMyLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIEFycmF5IG9mIFZlYzIsIGZpbmQgY2xvc2VzdCB0byB0aGlzIFZlYzIuXG4gICAgbmVhcmVzdCA6IGZ1bmN0aW9uKG90aGVycykge1xuICAgICAgdmFyXG4gICAgICBzaG9ydGVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgIG5lYXJlc3QgPSBudWxsLFxuICAgICAgY3VycmVudERpc3RhbmNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gb3RoZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGN1cnJlbnREaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2Uob3RoZXJzW2ldKTtcbiAgICAgICAgaWYgKGN1cnJlbnREaXN0YW5jZSA8PSBzaG9ydGVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IGN1cnJlbnREaXN0YW5jZTtcbiAgICAgICAgICBuZWFyZXN0ID0gb3RoZXJzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZWFyZXN0O1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IHRoaXMgdmVjdG9yIGludG8gYSB1bml0IHZlY3Rvci5cbiAgICAvLyBSZXR1cm5zIHRoZSBsZW5ndGguXG4gICAgbm9ybWFsaXplIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgLy8gQ29sbGVjdCBhIHJhdGlvIHRvIHNocmluayB0aGUgeCBhbmQgeSBjb29yZHNcbiAgICAgIHZhciBpbnZlcnRlZExlbmd0aCA9IChsZW5ndGggPCBOdW1iZXIuTUlOX1ZBTFVFKSA/IDAgOiAxL2xlbmd0aDtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgY29vcmRzIHRvIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgICAgIC8vIGJ1dCBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG8gMS4wXG4gICAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGFub3RoZXIgYFZlYzJgJ3MgY29tcG9uZW50cyBtYXRjaCB0aGlzIG9uZSdzXG4gICAgLy8gYWxzbyBhY2NlcHRzIDIgc2NhbGFyc1xuICAgIGVxdWFsIDogZnVuY3Rpb24odiwgdykge1xuICAgICAgaWYgKHR5cGVvZiB2ICE9ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHYpKSB7XG4gICAgICAgICAgdyA9IHZbMV07XG4gICAgICAgICAgdiA9IHZbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdyA9IHYueTtcbiAgICAgICAgICB2ID0gdi54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoVmVjMi5jbGVhbih2KSA9PT0gdGhpcy54ICYmIFZlYzIuY2xlYW4odykgPT09IHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgdGhhdCBjb250YWlucyB0aGUgYWJzb2x1dGUgdmFsdWUgb2ZcbiAgICAvLyBlYWNoIG9mIHRoaXMgdmVjdG9yJ3MgcGFydHNcbiAgICBhYnMgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciB4ID0gTWF0aC5hYnModGhpcy54KSwgeSA9IE1hdGguYWJzKHRoaXMueSk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgc21hbGxlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWluIDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4IDwgdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5IDwgdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIGxhcmdlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWF4IDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4ID4gdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5ID4gdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDbGFtcCB2YWx1ZXMgaW50byBhIHJhbmdlLlxuICAgIC8vIElmIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIGFyZSBsb3dlciB0aGFuIHRoZSBgbG93YCdzXG4gICAgLy8gdmFsdWVzLCB0aGVuIHJhaXNlIHRoZW0uICBJZiB0aGV5IGFyZSBoaWdoZXIgdGhhblxuICAgIC8vIGBoaWdoYCdzIHRoZW4gbG93ZXIgdGhlbS5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgcmV0dXJuTmV3IGFzIHRydWUgd2lsbCBjYXVzZSBhIG5ldyBWZWMyIHRvIGJlXG4gICAgLy8gcmV0dXJuZWQuICBPdGhlcndpc2UsIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIHdpbGwgYmUgY2xhbXBlZFxuICAgIGNsYW1wIDogZnVuY3Rpb24obG93LCBoaWdoLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhciByZXQgPSB0aGlzLm1pbihoaWdoLCB0cnVlKS5tYXgobG93KTtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyZXQueCwgcmV0LnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBQZXJmb3JtIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlY3RvcnNcbiAgICAvLyBhbW91bnQgaXMgYSBkZWNpbWFsIGJldHdlZW4gMCBhbmQgMVxuICAgIGxlcnAgOiBmdW5jdGlvbih2ZWMsIGFtb3VudCwgcmV0dXJuTmV3KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQodmVjLnN1YnRyYWN0KHRoaXMsIHRydWUpLm11bHRpcGx5KGFtb3VudCksIHJldHVybk5ldyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgc2tldyB2ZWN0b3Igc3VjaCB0aGF0IGRvdChza2V3X3ZlYywgb3RoZXIpID09IGNyb3NzKHZlYywgb3RoZXIpXG4gICAgc2tldyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLnksIHRoaXMueClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLnksIHRoaXMueCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBkb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnggKyBiLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIHBlcnBlbmRpY3VsYXIgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBwZXJwRG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi55IC0gdGhpcy55ICogYi54KTtcbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhbmdsZSBiZXR3ZWVuIHR3byB2ZWMyc1xuICAgIGFuZ2xlVG8gOiBmdW5jdGlvbih2ZWMpIHtcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMucGVycERvdCh2ZWMpLCB0aGlzLmRvdCh2ZWMpKTtcbiAgICB9LFxuXG4gICAgLy8gRGl2aWRlIHRoaXMgdmVjdG9yJ3MgY29tcG9uZW50cyBieSBhIHNjYWxhclxuICAgIGRpdmlkZSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGl2aXNpb24gYnkgemVybycpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgfSxcblxuICAgIGlzUG9pbnRPbkxpbmUgOiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gKHN0YXJ0LnkgLSB0aGlzLnkpICogKHN0YXJ0LnggLSBlbmQueCkgPT09XG4gICAgICAgICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueCAtIHRoaXMueCk7XG4gICAgfSxcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfSxcblxuICAgIGZyb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChhcnJheVswXSwgYXJyYXlbMV0pO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55fTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnKCcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJyknO1xuICAgIH0sXG4gICAgY29uc3RydWN0b3IgOiBWZWMyXG4gIH07XG5cbiAgVmVjMi5mcm9tQXJyYXkgPSBmdW5jdGlvbihhcnJheSwgY3Rvcikge1xuICAgIHJldHVybiBuZXcgKGN0b3IgfHwgVmVjMikoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgfTtcblxuICAvLyBGbG9hdGluZyBwb2ludCBzdGFiaWxpdHlcbiAgVmVjMi5wcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgODtcbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgVmVjMi5wcmVjaXNpb24pO1xuXG4gIFZlYzIuY2xlYW4gPSBjbGVhbiB8fCBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdHkgZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZihNYXRoLnJvdW5kKHZhbCkgPT09IHZhbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiBwKS9wO1xuICB9O1xuXG4gIFZlYzIuaW5qZWN0ID0gaW5qZWN0O1xuXG4gIGlmKCFjbGVhbikge1xuICAgIFZlYzIuZmFzdCA9IGluamVjdChmdW5jdGlvbiAoaykgeyByZXR1cm4gazsgfSk7XG5cbiAgICAvLyBFeHBvc2UsIGJ1dCBhbHNvIGFsbG93IGNyZWF0aW5nIGEgZnJlc2ggVmVjMiBzdWJjbGFzcy5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFZlYzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5WZWMyID0gd2luZG93LlZlYzIgfHwgVmVjMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFZlYzI7XG59KSgpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi4vLi4vY29yZS9OZXR3b3JrJztcclxuaW1wb3J0IFNvdXJjZVBhdHRlcm5zIGZyb20gJy4uLy4uL2NvcmUvU291cmNlUGF0dGVybnMnO1xyXG5pbXBvcnQgVmVpbk5vZGUgZnJvbSAnLi4vLi4vY29yZS9WZWluTm9kZSc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4uLy4uL2NvcmUvUGF0aCc7XHJcbmltcG9ydCBTVkdMb2FkZXIgZnJvbSAnLi4vLi4vY29yZS9TVkdMb2FkZXInO1xyXG5pbXBvcnQgeyByYW5kb20sIGdldENpcmNsZU9mUG9pbnRzIH0gZnJvbSAnLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5cclxuY29uc3QgbGVhZiA9IHJlcXVpcmUoJy4uL3N2Zy9sZWFmLnN2ZycpO1xyXG5cclxubGV0IGNhbnZhcywgY3R4O1xyXG5sZXQgbmV0d29yaztcclxuXHJcbmNvbnN0IFRSSUFOR0xFID0gMDtcclxuY29uc3QgU1FVQVJFID0gMTtcclxuY29uc3QgQ0lSQ0xFID0gMjtcclxuY29uc3QgTEVBRiA9IDM7XHJcbmxldCBjdXJyZW50Qm91bmRzU2hhcGUgPSBUUklBTkdMRTtcclxuXHJcbi8vIENyZWF0ZSBpbml0aWFsIGNvbmRpdGlvbnMgZm9yIHNpbXVsYXRpb25cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBJbml0aWFsaXplIHNpbXVsYXRpb24gb2JqZWN0XHJcbiAgbmV0d29yayA9IG5ldyBOZXR3b3JrKGN0eCk7XHJcblxyXG4gIC8vIEFkZCB0aGUgYm91bmRzLCBzb3VyY2VzLCBhbmQgcm9vdCBub2Rlc1xyXG4gIHJlc2V0TmV0d29yaygpO1xyXG5cclxuICAvLyBTZXQgdXAgY29tbW9uIGtleWJvYXJkIGludGVyYWN0aW9uIGxpc3RlbmVyc1xyXG4gIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspO1xyXG5cclxuICAvLyBCZWdpbiBhbmltYXRpb24gbG9vcFxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG5sZXQgcmVzZXROZXR3b3JrID0gKCkgPT4ge1xyXG4gIG5ldHdvcmsucmVzZXQoKTtcclxuICBhZGRCb3VuZHMoKTtcclxuICBhZGRPYnN0YWNsZXMoKTtcclxuICBhZGRTb3VyY2VzKCk7XHJcbiAgYWRkUm9vdFZlaW5zKCk7XHJcbn1cclxuXHJcbiAgbGV0IGFkZEJvdW5kcyA9ICgpID0+IHtcclxuICAgIHN3aXRjaChjdXJyZW50Qm91bmRzU2hhcGUpIHtcclxuICAgICAgY2FzZSBUUklBTkdMRTpcclxuICAgICAgICBuZXR3b3JrLmJvdW5kcyA9IGdldFRyaWFuZ2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFNRVUFSRTpcclxuICAgICAgICBuZXR3b3JrLmJvdW5kcyA9IGdldFNxdWFyZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBDSVJDTEU6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRDaXJjbGVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTEVBRjpcclxuICAgICAgICBuZXR3b3JrLmJvdW5kcyA9IGdldExlYWZCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgbGV0IGdldFRyaWFuZ2xlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgcmV0dXJuIFtuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbY3ggLSA0MDAsIGN5ICsgMzAwXSxcclxuICAgICAgICAgIFtjeCwgY3kgLSAzNTBdLFxyXG4gICAgICAgICAgW2N4ICsgNDAwLCBjeSArIDMwMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0U3F1YXJlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gICAgICBjb25zdCBzaWRlTGVuZ3RoID0gODAwO1xyXG5cclxuICAgICAgcmV0dXJuIFtuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbY3ggLSBzaWRlTGVuZ3RoLzIsIGN5IC0gc2lkZUxlbmd0aC8yXSwgIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgW2N4ICsgc2lkZUxlbmd0aC8yLCBjeSAtIHNpZGVMZW5ndGgvMl0sICAvLyB0b3AgcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICBbY3ggKyBzaWRlTGVuZ3RoLzIsIGN5ICsgc2lkZUxlbmd0aC8yXSwgIC8vIGJvdHRvbSByaWdodCBjb3JuZXJcclxuICAgICAgICAgIFtjeCAtIHNpZGVMZW5ndGgvMiwgY3kgKyBzaWRlTGVuZ3RoLzJdICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldENpcmNsZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIFtuZXcgUGF0aChcclxuICAgICAgICBnZXRDaXJjbGVPZlBvaW50cyhcclxuICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMiwgICAgLy8gY3hcclxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDIsICAgLy8gY3lcclxuICAgICAgICAgIDM1MCwgICAgICAgICAgICAgICAgICAgICAgLy8gcmFkaXVzXHJcbiAgICAgICAgICAxMDAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc29sdXRpb25cclxuICAgICAgICApLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0TGVhZkJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IDkwMDtcclxuICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSA5MDA7XHJcblxyXG4gICAgICBsZXQgcG9seWdvbiA9IFNWR0xvYWRlci5sb2FkKGxlYWYpWzBdO1xyXG5cclxuICAgICAgLy8gVHJhbnNsYXRlIHRoZSBkZXNpZ24gdG8gdGhlIHNjcmVlbiBjZW50ZXJcclxuICAgICAgZm9yKGxldCBwb2ludCBvZiBwb2x5Z29uKSB7XHJcbiAgICAgICAgcG9pbnRbMF0gPSBjeCAtIHNoYXBlV2lkdGgvMiArIHBvaW50WzBdO1xyXG4gICAgICAgIHBvaW50WzFdID0gY3kgLSBzaGFwZUhlaWdodC8yICsgcG9pbnRbMV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbbmV3IFBhdGgocG9seWdvbiwgJ0JvdW5kcycsIGN0eCldO1xyXG4gICAgfVxyXG5cclxuICBsZXQgYWRkT2JzdGFjbGVzID0gKCkgPT4ge1xyXG4gICAgbmV0d29yay5vYnN0YWNsZXMgPSBbXTtcclxuXHJcbiAgICAvLyBUZW4gcmFuZG9tIGNpcmNsZXNcclxuICAgIC8vIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgIC8vICAgb2JzdGFjbGVzLnB1c2goXHJcbiAgICAvLyAgICAgbmV3IFBhdGgoXHJcbiAgICAvLyAgICAgICBnZXRDaXJjbGVPZlBvaW50cyhcclxuICAgIC8vICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAyICsgcmFuZG9tKC0zMDAsMzAwKSxcclxuICAgIC8vICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIHJhbmRvbSgtMzAwLDMwMCksXHJcbiAgICAvLyAgICAgICAgIHJhbmRvbSgyMCw3MCksXHJcbiAgICAvLyAgICAgICAgIDEwMFxyXG4gICAgLy8gICAgICAgKSxcclxuICAgIC8vICAgICAgICdPYnN0YWNsZScsXHJcbiAgICAvLyAgICAgICBjdHhcclxuICAgIC8vICAgICApXHJcbiAgICAvLyAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gU2luZ2xlIGNpcmNsZSBpbiBjZW50ZXJcclxuICAgIG5ldHdvcmsub2JzdGFjbGVzLnB1c2goXHJcbiAgICAgIG5ldyBQYXRoKFxyXG4gICAgICAgIGdldENpcmNsZU9mUG9pbnRzKFxyXG4gICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAyLFxyXG4gICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIDkwLFxyXG4gICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgMTAwXHJcbiAgICAgICAgKSxcclxuICAgICAgICAnT2JzdGFjbGUnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFkZFNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAvLyBTZXQgdXAgdGhlIGF1eGluIHNvdXJjZXMgdXNpbmcgcHJlLW1hZGUgcGF0dGVybnNcclxuICAgIGxldCByYW5kb21Tb3VyY2VzID0gU291cmNlUGF0dGVybnMuZ2V0UmFuZG9tU291cmNlcyg1MDAsIGN0eCwgbmV0d29yay5ib3VuZHMsIG5ldHdvcmsub2JzdGFjbGVzKTtcclxuICAgIGxldCBncmlkU291cmNlcyA9IFNvdXJjZVBhdHRlcm5zLmdldEdyaWRPZlNvdXJjZXMoMjAwLCAyMDAsIGN0eCwgbmV0d29yay5ib3VuZHMsIG5ldHdvcmsub2JzdGFjbGVzKTtcclxuXHJcbiAgICBuZXR3b3JrLnNvdXJjZXMgPSBncmlkU291cmNlcztcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gIGxldCBhZGRSb290VmVpbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodC8yO1xyXG5cclxuICAgIHN3aXRjaChjdXJyZW50Qm91bmRzU2hhcGUpIHtcclxuICAgICAgY2FzZSBUUklBTkdMRTpcclxuICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihjeCAtIDM0MCwgY3kgKyAyOTApLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBjdHhcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgIC8vICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgIC8vICAgICBudWxsLFxyXG4gICAgICAgIC8vICAgICBuZXcgVmVjMihjeCwgY3kgLSAzMDApLFxyXG4gICAgICAgIC8vICAgICB0cnVlLFxyXG4gICAgICAgIC8vICAgICBjdHhcclxuICAgICAgICAvLyAgIClcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICAvLyBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgIC8vICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgIC8vICAgICBudWxsLFxyXG4gICAgICAgIC8vICAgICBuZXcgVmVjMihjeCArIDM0MCwgY3kgKyAyOTApLFxyXG4gICAgICAgIC8vICAgICB0cnVlLFxyXG4gICAgICAgIC8vICAgICBjdHhcclxuICAgICAgICAvLyAgIClcclxuICAgICAgICAvLyApO1xyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgQ0lSQ0xFOlxyXG4gICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKGN4LCBjeSArIDMwMCksXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBTUVVBUkU6XHJcbiAgICAgICAgLy8gQWRkIGEgc2V0IG9mIHJhbmRvbSByb290IHZlaW5zIHRocm91Z2hvdXQgc2NlbmVcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTwxMDsgaSsrKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCksXHJcbiAgICAgICAgICAgICAgICByYW5kb20od2luZG93LmlubmVySGVpZ2h0KVxyXG4gICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICBjdHhcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMRUFGOlxyXG4gICAgICAgIC8vIFB1dCBhIHNpbmdsZSByb290IG5vdGUgYXQgdGhlIGJhc2Ugb2YgdGhlIGxlYWZcclxuICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSA1LFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDIgKyAyMjBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxuLy8gS2V5IGNvbW1hbmRzIHNwZWNpZmljIHRvIHRoaXMgc2tldGNoXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBzd2l0Y2goZS5rZXkpIHtcclxuICAgIC8vIHIgPSByZXNldCBzaW11bGF0aW9uIGJ5IHJlaW5pdGlhbGl6aW5nIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgICBjYXNlICdyJzpcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzEnOlxyXG4gICAgICBjdXJyZW50Qm91bmRzU2hhcGUgPSBUUklBTkdMRTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzInOlxyXG4gICAgICBjdXJyZW50Qm91bmRzU2hhcGUgPSBTUVVBUkU7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICczJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gQ0lSQ0xFO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnNCc6XHJcbiAgICAgIGN1cnJlbnRCb3VuZHNTaGFwZSA9IExFQUY7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uXHJcbnNldHVwKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM6ZGM9XFxcImh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvXFxcIiB4bWxuczpjYz1cXFwiaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjXFxcIiB4bWxuczpyZGY9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyNcXFwiIHhtbG5zOnN2Zz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6c29kaXBvZGk9XFxcImh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkXFxcIiB4bWxuczppbmtzY2FwZT1cXFwiaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZVxcXCIgaWQ9XFxcInN2ZzJcXFwiIHNvZGlwb2RpOmRvY25hbWU9XFxcImxlYWYtMi5zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCA5MDAuMDAwMDIgODk5Ljk5OTk5XFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSlcXFwiPjxnIGlkPVxcXCJsYXllcjFcXFwiIGlua3NjYXBlOmxhYmVsPVxcXCJDYWxxdWUgMVxcXCIgaW5rc2NhcGU6Z3JvdXBtb2RlPVxcXCJsYXllclxcXCI+PHBhdGggaWQ9XFxcInBhdGgzMTgzXFxcIiBkPVxcXCJNIDQ1MC4yMTg5MSw4MjkuMDc0MzYgNDUwLjQ1MTA3LDgyOC4yMTQ2IDQ1MS4wODMxOCw4MjYuNDUyNjggNDUyLjAxODY5LDgyNC4wNDUzNSA0NTMuMTYxMDUsODIxLjI0OTMzIDQ1NC41ODU5OCw4MTYuNTU3NjkgNDU0Ljk0OTM4LDgxMC4yODk5OCA0NTQuMTk4OTQsODAwLjI0MDY3IDQ1Mi4yODIzOCw3ODQuMjA0MjIgNDUwLjYyNjMyLDc2OS44MDQ3OCA0NDguOTQxNjUsNzUyLjc3ODA2IDQ0Ny40MjU1LDczNS4yNTIgNDQ2LjI3NDk5LDcxOS4zNTQ1NSA0NDUuMzE3Miw3MDUuNjQ4MjkgNDQ0LjMyNTcyLDY5NC4wODg4NCA0NDMuNDE3NTEsNjg1Ljg5MzE5IDQ0Mi43MDk1Nyw2ODIuMjc4MzUgNDQwLjg2NTk5LDY4MS4zODEwMSA0MzYuNzEwNTQsNjgwLjkyNTgxIDQzMC4yMzIxNyw2ODAuOTEyMjggNDIxLjQxOTgyLDY4MS4zMzk5MyAzNzMuNTY0NzYsNjg0LjY1Mjc4IDM0My44NTk0Nyw2ODcuNjY3NzggMzIyLjgyMzgxLDY5MS43MDE5NyAzMDAuOTc3NjIsNjk4LjA3MjQxIDI5MS4wNzA5OSw3MDAuODM5NzUgMjgxLjE5MzQyLDcwMi43MzQxMiAyNjkuNzM0NDgsNzAzLjk5MzU1IDI1NS4wODM3Miw3MDQuODU2MDcgMjQzLjgxNTE5LDcwNS4yMzEgMjM0LjAzNDcsNzA1LjMyNiAyMjYuNzkwNjcsNzA1LjE0NjI4IDIyMy4xMzE0OCw3MDQuNjk3MDkgMjIxLjM4NjA1LDcwMy43MzY4NCAyMjEuMTU4Miw3MDIuMzk4NSAyMjIuNjIyNTcsNzAwLjE3OTgzIDIyNS45NTM4MSw2OTYuNTc4NTUgMjMxLjE5NTM2LDY5MC4wOTE5NyAyMzQuNTc3LDY4My41OTU4OSAyMzUuODg2ODcsNjc3LjY1MjA1IDIzNC45MTMwOCw2NzIuODIyMTcgMjI4LjgyMjY0LDY2Ny4wOTQwNCAyMTYuODYxNTUsNjYwLjg5NzI5IDE5OS44Njg0OCw2NTQuNTkzODEgMTc4LjY4MjEyLDY0OC41NDU1MiAxNjYuODYwODQsNjQ1LjQ1NDI3IDE1Ni44OTIwNSw2NDIuNjM4OTQgMTQ5LjgyNDU1LDY0MC40MTAxMiAxNDYuNzA3MDksNjM5LjA3ODQxIDE0Ni43NDYwNSw2MzcuNDI2MzQgMTQ4LjUwNzE4LDYzNC4zNTAyMyAxNTEuODI5NzIsNjMwLjA4MjMyIDE1Ni41NTI4OSw2MjQuODU0ODUgMTYzLjI5Mzc3LDYxNy40MDAyMyAxNjcuMDQ4NTgsNjExLjg0NjMxIDE2OC41MDg1NSw2MDYuNzg2MDUgMTY4LjM2NDk2LDYwMC44MTI0MiAxNjUuODUxMzIsNTk0LjI1MDg3IDE1OS4xNzk1Myw1ODYuNTQxNzUgMTQ3LjczMDg3LDU3Ny4wOTk0OSAxMzAuODg2NjQsNTY1LjMzODUgMTIwLjQ3MDUzLDU1OC4yOTg3NyAxMTEuOTQwNjQsNTUyLjMwMTgyIDEwNi4xNzcxOSw1NDcuOTgyOTEgMTA0LjA2MDQ0LDU0NS45NzcyOSAxMDUuMTI2NDcsNTQ0LjkyNDQ4IDEwOC4wMjkwMyw1NDMuMTk5NzUgMTEyLjMyNDgyLDU0MS4wNDIxNSAxMTcuNTcwNTQsNTM4LjY5MDc3IDEzMi40NjE4OSw1MzEuMzcyMTkgMTM5LjkxOTY0LDUyMy45NTkwNSAxNDEuMTYyMzQsNTE0LjAyMTQgMTM3LjQwODUsNDk5LjEyOTI3IDEzMi41OTcyMSw0ODMuMjI4NjUgMTI3LjY2MzIsNDY1LjQxMjc3IDEyMy40MDQsNDQ4LjY3OTA0IDEyMC42MTcxNSw0MzYuMDI0OSAxMTYuNDA4NzUsNDE3LjQ1NjYxIDExMC4xOTQ2OSwzOTQuMTg1MTcgMTAzLjY5NTgyLDM3Mi4zMjA3NiA5OC42MzMwMTYsMzU3Ljk3MzU2IDk2LjA1MDE4NywzNTIuOTc2MDYgOTIuNTAwNDczLDM0Ny4yNjg0IDg4LjQ1MTgxMSwzNDEuNTU0MDkgODQuMzcyMTM2LDMzNi41MzY2NSA4MC43MjY3NTYsMzMyLjE3MjQ4IDc3Ljg2MDU2MiwzMjguMjM4MTcgNzYuMDYwODYyLDMyNS4xNjUyMiA3NS42MTQ5NjYsMzIzLjM4NTE0IDk0LjQ2NzE4OCwzMjAuNDAyMDQgMTM0Ljg5MjIyLDMyMy45Njk4NSAxNzkuNjUyODgsMzMxLjc4NTI2IDIxMS41MTE5OCwzNDEuNTQ0OTUgMjE2Ljg0NzIyLDM0NC4xMDgyOSAyMjMuNjQ4MDMsMzQ3LjE3MjU1IDIzMS4wNDAyLDM1MC4zNTMxOSAyMzguMTQ5NTUsMzUzLjI2NTYxIDI0NS40MDgzNSwzNTYuNDI0MDkgMjUzLjIwNjAyLDM2MC4yNzQ2NSAyNjAuNjA2NDEsMzY0LjMzMDM5IDI2Ni42NzMzNywzNjguMTA0MzggMjg0Ljc3NTQ3LDM3OS4yMzY1OSAyOTYuNDcxNDUsMzgyLjk1MzgzIDMwMy4xMjUwOCwzNzkuMjU3NjMgMzA2LjEwMDEzLDM2OC4xNDk1NyAzMDcuOTA0ODMsMzU2LjIxNjcyIDMxMC43MTg0MywzNDMuODI0MSAzMTQuMzIxMzEsMzMxLjgwNzIzIDMxOC40OTM4MywzMjEuMDAxNjMgMzIwLjY1OTE3LDMxNS4xMTUyMyAzMjMuMTYzODIsMzA2Ljc2MTY5IDMyNS42OTc1MSwyOTcuMDUzNDcgMzI3Ljk0OTk1LDI4Ny4xMDMwMyAzMzAuMzg3ODYsMjc0LjU4Mjc3IDMzMS41MTY1OSwyNjYuMTQwNDMgMzMxLjQ2Njg5LDI2MC4wMTA0NyAzMzAuMzY5NTMsMjU0LjQyNzM5IDMyOC4wMzY5NywyNDQuMDA2MzYgMzI5LjEwMTk2LDIzOS43MDAyNiAzMzQuNzA1NTIsMjQwLjk5MzU3IDM0NS45ODg3MSwyNDcuMzcwNzUgMzU1LjY4OTMyLDI1Mi41OTU3NSAzNjQuNDEzNjMsMjU2LjE1OTAxIDM3MS4xNzUxMSwyNTcuNzMzMzEgMzc0Ljk4NzIsMjU2Ljk5MTQ1IDM3NS4yNzk0NiwyNTUuODI0NzcgMzc1LjEzNTAxLDI1My41ODgzNyAzNzQuNTk1OTMsMjUwLjYwMzc3IDM3My43MDQyOCwyNDcuMTkyNDkgMzcyLjUxNTI0LDI0MS44NDkwOSAzNzIuODU2NDIsMjM2LjA0MDg0IDM3NS4yMDkyLDIyNy4xMzk0NCAzODAuMDU0OTMsMjEyLjUxNjU5IDM4NC4wNDE1OCwyMDEuNjA4NzcgMzg4LjI5ODksMTkxLjI4Mjk2IDM5Mi4zMjI5MiwxODIuNjkwNDYgMzk1LjYwOTY1LDE3Ni45ODI1NSA0MDIuMTUyMjIsMTY3LjI3NDA3IDQxMC4wNTIxMywxNTQuNjM3IDQxOS43MjQxNywxMzguMzg5NDkgNDMxLjU4MzEyLDExNy44NDk2NyA0NDUuMzQ3MzksOTQuODg4MTc5IDQ1Ny4wNzc1Nyw3Ny42MDM4OTUgNDY2LjI0NDcxLDY2LjcxMDE4OCA0NzIuMzE5ODksNjIuOTIwNDI2IDQ3My41MjkyNyw2My42MDcyNzEgNDc0LjMyODg5LDY1Ljc2NzcwNCA0NzQuNzQ5NTMsNjkuNTUxNTY3IDQ3NC44MjE5Nyw3NS4xMDg3MDYgNDc1LjAzMjY3LDgwLjc5NTExOCA0NzUuNzMzMTQsODcuMjY3Nzg3IDQ3Ni44MTM3Myw5My43MzAwNzkgNDc4LjE2NDc3LDk5LjM4NTM1NiA0ODQuNzQ3NzQsMTE2LjkxMDY5IDQ5NS4wNDI1MSwxMzguNTg2NTIgNTA3LjQxMTY2LDE2MS4yMTI1NiA1MjAuMjE3NzcsMTgxLjU4ODUzIDUyOC43MjI2NywxOTMuNzIxMDggNTM0LjE2OTksMjAwLjQxOTUxIDUzOC4xMjM2MywyMDMuMjczMTEgNTQyLjE0ODAxLDIwMy44NzExNCA1NDUuMTEyOSwyMDMuNTk5NzIgNTQ4LjI3ODY4LDIwMi44NjA2OSA1NTEuMjY2MzksMjAxLjc2Njk0IDU1My42OTcwNCwyMDAuNDMxMzMgNTU2LjQ2NzA3LDE5OC42MjU4NiA1NTguMjY3OSwxOTguMDQyNzEgNTU5LjY2OTI0LDE5OC42OTQwMyA1NjEuMjQwNzksMjAwLjU5MTk3IDU2Mi40MTA3OSwyMDMuODgxNDMgNTYzLjU1MDE5LDIxMC4xNTUyOCA1NjQuNTYzNTEsMjE4Ljc1NDA3IDU2NS4zNTUzLDIyOS4wMTgzNyA1NjYuMjgxNTgsMjQxLjc1ODMgNTY3LjQwODI2LDI1MC4zNDE3MiA1NjguOTkxMzQsMjU2LjEyNjExIDU3MS4yODY4MywyNjAuNDY4OTkgNTc4LjM2Njk3LDI3MS42NDA2MyA1ODMuODI1MTgsMjgxLjc3NjcxIDU4Ny45NTM1NCwyOTEuNDgxNDcgNTkxLjA0NDE1LDMwMS4zNTkxNCA1OTIuNzEyNDksMzA3LjIxOTA2IDU5NC40NDAzMywzMTIuNDUzNTggNTk2LjAyMzc2LDMxNi40OTE2NCA1OTcuMjU4ODMsMzE4Ljc2MjE3IDU5OC41OTE2NiwzMjEuMTcwMSA2MDAuNDQxMTUsMzI1LjU4MjE0IDYwMi41NjI3MiwzMzEuMzcwMTMgNjA0LjcxMTc5LDMzNy45MDU5NCA2MDcuMTk3MzMsMzQ2LjkzODg3IDYwOC43ODgyOSwzNTUuNjkxNzcgNjA5LjY3MTQ4LDM2NS41NzE2OCA2MTAuMDMzNzEsMzc3Ljk4NTYzIDYxMC44OTEyMyw0MDEuNDY2NTYgNjEzLjg5NDU3LDQxMi43ODU2NCA2MjAuNzQzMzQsNDE0LjEyNjkgNjMzLjEzNzE1LDQwNy42NzQzNyA2MzguNzkzNTEsNDA0LjMxMzk3IDY0NC42MTYwMiw0MDEuMDIyMTUgNjQ5LjkxOTQ0LDM5OC4xNzY4NiA2NTQuMDE4NTYsMzk2LjE1NjAyIDY1OC4wMjQsMzk0LjIwMzU0IDY2My4wNzE4MywzOTEuNTQ0MzkgNjY4LjUxNTkzLDM4OC41MjgwNyA2NzMuNzEwMTcsMzg1LjUwNDEgNjg0Ljc5NDc0LDM3OS43NjYgNjk4LjYyMDc2LDM3NC4xOTE2NiA3MTUuMTExMDIsMzY4LjgwOTExIDczNC4xODgzLDM2My42NDY0MSA3ODAuOTE4OTEsMzUxLjg1NDk4IDgxMS4xNzEzNCwzNDMuNTUyMTggODMwLjUyNjQzLDMzNy4wNzU3NiA4NDQuNTY0OTksMzMwLjc2MzQ4IDg0NS4xNjg2LDMzMS4wNTU5MyA4NDUuNjYyOTEsMzMyLjQ0MTIgODQ1Ljk5NjkyLDMzNC42OTUxOCA4NDYuMTE5NTksMzM3LjU5Mzc4IDg0NS40NDgwMywzNDIuMjQwMTggODQzLjQ3Njk0LDM0OC42OTAxMyA4NDAuMjcxNzMsMzU2Ljc2MDE3IDgzNS44OTc3OSwzNjYuMjY2ODQgODMxLjQxOTU3LDM3NS45OTI3OSA4MjYuNzgyODIsMzg2LjkxNTc4IDgyMi41MzQ2NywzOTcuNjk5MDEgODE5LjIyMjI5LDQwNy4wMDU2OCA4MTMuNjk4ODgsNDIzLjIzOTI4IDgwNy41MTA1Niw0NDAuMTQ3MTkgODAwLjIyOTU1LDQ1OC44NjA3NiA3OTEuNDI4MDksNDgwLjUxMTM3IDc4Ni45MTQ4OCw0OTAuNzM2NDQgNzgyLjYwNzIzLDQ5OC44Njk2IDc3OC4xMTYzOCw1MDUuNTY2MDcgNzczLjA1MzU0LDUxMS40ODEwOSA3NjkuMjMwNTksNTE1LjU5NTI3IDc2Ni4wOTk5Myw1MTkuMTY4MTMgNzYzLjk4NDYzLDUyMS44MTY1NSA3NjMuMjA3NzMsNTIzLjE1NzM5IDc2My41MDY4Myw1MjMuOTU0NjYgNzY0LjMyMTIxLDUyNS4xMjI5IDc2NS41MjY0OCw1MjYuNTA1MDcgNzY2Ljk5ODI2LDUyNy45NDQxMiA3NjkuNDQ4ODUsNTI5LjQ5NzY2IDc3Mi45MTYxNCw1MzAuNTYzODMgNzc3LjU3MDA4LDUzMS4xNzc3NyA3ODMuNTgwNjcsNTMxLjM3NDYxIDc4OC41NDc1MSw1MzEuNDY0NTEgNzkyLjYxNDkzLDUzMS43MDkyOSA3OTUuMzYzMTksNTMyLjA3MTU2IDc5Ni4zNzI1NSw1MzIuNTEzOTQgNzk1LjEwNTE1LDUzNi4yNjg0MSA3OTEuODAzMDEsNTQyLjA0MTI0IDc4Ny4yMTYyMyw1NDguNjU0NzYgNzgyLjA5NDg5LDU1NC45MzEyOSA3NzAuNTg5OTksNTY4LjU3OTcgNzU4Ljc1ODEzLDU4My44OTkzMSA3NDkuMTQ1MjYsNTk3LjQ2MTkyIDc0NC4yOTczNSw2MDUuODM5MyA3NDMuNDczOTEsNjA4LjgyMzYyIDc0My4yMjExOSw2MTEuNDc1OTIgNzQzLjU0MDM0LDYxMy44ODQwNyA3NDQuNDMyNSw2MTYuMTM1OTQgNzQ4LjUxMDQxLDYyMC44MzM0OCA3NTUuNDY3NzgsNjI2LjI2MDY0IDc2My43ODU1OSw2MzEuMzY5NzMgNzcxLjk0NDc5LDYzNS4xMTMwNiA3NzUuMDE1NTgsNjM2LjM5MzQ5IDc3Ny42ODM3Niw2MzcuODQxOTggNzc5LjY2MzEsNjM5LjI4MDY4IDc4MC42NjczNSw2NDAuNTMxNzggNzgwLjA3NDQ2LDY0My4wMTUzNyA3NzcuNTMwNSw2NDUuOTg3MjEgNzc0LjA5NDI5LDY0OC40Nzk4IDc3MC44MjQ2NSw2NDkuNTI1NjYgNzY4LjIxMTM0LDY1MC4zNDY4NyA3NjIuNDQ0NDksNjUyLjU4Mjg0IDc1NC4zNzYyMiw2NTUuODkyMSA3NDQuODU4NjcsNjU5LjkzMzIgNzE2LjQ2MDA5LDY3Mi42ODExOSA2OTkuMjk1NjUsNjgxLjk3NDU3IDY5MC44NDUxMyw2ODkuNDY0NDkgNjg4LjU4ODMzLDY5Ni44MDIxMiA2OTAuNDAxMzksNzAzLjE5NjM2IDY5NS4xNjk1LDcxMS4yOTE0NCA3MDEuODg2MDIsNzE5LjY0NTM5IDcwOS41NDQzNSw3MjYuODE2MjggNzEyLjAxMzQxLDcyOS4wMTM2NCA3MTMuNzg2MjgsNzMxLjEyOTk5IDcxNC43MTU0LDczMi45NTAzNSA3MTQuNjUzMTgsNzM0LjI1OTcxIDcwMi4wMDQyMyw3MzYuMjE1MzEgNjc0LjU5MzQ3LDczNS45NTE3MyA2NDIuMzAwNiw3MzMuODU4OTEgNjE1LjAwNTMyLDczMC4zMjY3OCA1OTAuNjAyLDcyNS40OTMwNSA1NzMuMzgyNjksNzIxLjY0MzcyIDU2MS4xMzY5NCw3MTguMjM0MTggNTUxLjY1NDI5LDcxNC43MTk4MyA1NDQuNTY1MDYsNzExLjk5MDk3IDUzNS4xMjYyNCw3MDguNzQ0MDUgNTI0LjU2OTQzLDcwNS4zODU4MSA1MTQuMTI2MjIsNzAyLjMyMzAyIDUwMy44MDI3MSw2OTkuMjc5NzIgNDkzLjU3Mjk3LDY5NS45NzQ1NSA0ODQuNjE4MTksNjkyLjgwNjE4IDQ3OC4xMTk1OSw2OTAuMTczMyA0NzMuMTQwODcsNjg4LjA3MjA4IDQ2OC4zMjI4NSw2ODYuMzUxMzQgNDY0LjIxNTIyLDY4NS4xODg2NiA0NjEuMzY3NjIsNjg0Ljc2MTYzIDQ1OC42NDE0MSw2ODUuMDU1NTggNDU3LjE2MzQ2LDY4Ni41NjM1OSA0NTYuNTU0NjksNjkwLjIyNDg5IDQ1Ni40MzYwMSw2OTYuOTc4NzIgNDU3LjA4NDQ5LDcxMy4xMjcxOCA0NTguODg2MTYsNzMzLjE3NjczIDQ2MS42MjU0Miw3NTUuMTMyOTEgNDY1LjA4NjY0LDc3Ny4wMDEzIDQ2OC44NzQ1OSw3OTkuNTkwNjUgNDcwLjQ4MzA3LDgxMy41MjUzNSA0NzAuMDUyNTQsODIxLjQwNjgyIDQ2Ny43MjM0NSw4MjUuODM2NSA0NjMuNjk3NDIsODI4LjE2NDQ4IDQ1Ny44MjMxMyw4MjkuNzc4NzEgNDUyLjUyMjQ4LDgzMC4yMzEyNiA0NTAuMjE3NCw4MjkuMDc0MjEgNDUwLjIxNzc4LDgyOS4wNzQyNSA0NTAuMjE4MTYsODI5LjA3NDI4IDQ1MC4yMTg1Myw4MjkuMDc0MzIgWlxcXCIgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi4wNzI4MDE1OTtzdHJva2Utb3BhY2l0eToxXFxcIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIl0sInNvdXJjZVJvb3QiOiIifQ==