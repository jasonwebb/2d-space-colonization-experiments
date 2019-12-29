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
/******/ 	return __webpack_require__(__webpack_require__.s = "./marginal-growth/js/entry.js");
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

/***/ "./marginal-growth/js/entry.js":
/*!*************************************!*\
  !*** ./marginal-growth/js/entry.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_VeinNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/VeinNode */ "./core/VeinNode.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");
/* harmony import */ var _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/AuxinSource */ "./core/AuxinSource.js");
/* harmony import */ var _core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/SVGLoader */ "./core/SVGLoader.js");








let canvas, ctx;
let network;

const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./marginal-growth/svg/leaf.svg");
const grassBlade = __webpack_require__(/*! ../svg/grass-blade.svg */ "./marginal-growth/svg/grass-blade.svg");

let currentPath;

const LINE = 0;
const TRIANGLE = 1;
const SQUARE = 2;
const DIAMOND = 3;
const CIRCLE = 4;
const LEAF = 5;
let currentPathShape = SQUARE;

let yPosition = 0;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Load the defined path
  setupPath();

  // Add the bounds, sources, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_4__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addRootVeins();
}

  let setupPath = () => {
    const cx = window.innerWidth/2;
    const cy = window.innerHeight/2;
    yPosition = cy;

    switch(currentPathShape) {
      case LINE:
        currentPath = getHorizontalLine();
        break;

      case TRIANGLE:
        currentPath = getTriangleBounds();
        break;

      case SQUARE:
        currentPath = getSquareBounds();
        break;

      case DIAMOND:
        currentPath = getDiamondBounds();
        break;

      case CIRCLE:
        currentPath = getCircleBounds();
        break;

      case LEAF:
        currentPath = getLeafBounds();
        break;
    }

    if(currentPathShape != LINE) {
      currentPath.isCentered = true;
      currentPath.setScale(.01);
    }
  }

    let getHorizontalLine = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
        [
          [cx - 400, cy + 400],
          [cx + 400, cy + 400]
        ],
        'Bounds',
        ctx
      );
    }

    let getTriangleBounds = () => {
      const sideLength = 200;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
        [
          [sideLength/2, 0],
          [sideLength, 3*sideLength/4],
          [0, 3*sideLength/4],
          [sideLength/2, 0]
        ],
        'Bounds',
        ctx
      )
    }

    let getSquareBounds = () => {
      const sideLength = 200;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
        [
          [0, 0],  // top left corner
          [sideLength, 0],  // top right corner
          [sideLength, sideLength],  // bottom right corner
          [0, sideLength],  // bottom left corner
          [0, 0],  // top left corner
        ],
        'Bounds',
        ctx
      );
    }

    let getDiamondBounds = () => {
      const sideLength = 200;

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](
        [
          [sideLength/2, 0],
          [sideLength, sideLength/2],
          [sideLength/2, sideLength],
          [0, sideLength/2],
          [sideLength/2, 0]
        ],
        'Bounds',
        ctx
      );
    }

    let getCircleBounds = () => {
      const radius = 100;
      const resolution = 50;
      let points = [];

      for(let i = 0; i < resolution; i++) {
        let angle = 2 * Math.PI * i / resolution;
        let x = radius + Math.floor(radius * Math.cos(angle));
        let y = radius + Math.floor(radius * Math.sin(angle));

        points.push([x, y]);
      }

      points.push([points[0][0], points[0][1]]);

      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](points, 'Bounds', ctx);
    }

    let getLeafBounds = () => {
      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](_core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__["default"].load(leaf)[0], 'Bounds', ctx);
    }

    let getGrassBladeBounds = () => {
      return new _core_Path__WEBPACK_IMPORTED_MODULE_3__["default"](_core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__["default"].load(grassBlade)[0], 'Bounds', ctx);
    }

  // Create the network with initial conditions
  let addRootVeins = () => {
    const cx = window.innerWidth/2;
    let cy = window.innerHeight/2;

    if(currentPathShape == LINE) {
      cy = window.innerHeight - 100;
    }

    network.addVeinNode(
      new _core_VeinNode__WEBPACK_IMPORTED_MODULE_2__["default"](
        null,
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          cx,
          cy
        ),
        true,
        ctx
      )
    )
  }

  let movePath = () => {
    if(!network.settings.IsPaused && yPosition > -800) {
      currentPath.moveBy(0,-2);
      yPosition = currentPath.origin.y;
    }
  }

  let scalePath = () => {
    if(!network.settings.IsPaused) {
      currentPath.setScale(1.01);
    }
  }

  let rotatePath = () => {
    if(!network.settings.IsPaused) {
      // TODO: rotate path
    }
  }

  let generateSourcesOnPath = () => {
    // network.sources = createEvenlySpacedSources();
    network.sources = createSubdividedSources();
  }

    let createEvenlySpacedSources = () => {
      let sources = [];
      const sourceSpacing = 10;
      let previousSegmentRemainder = 0;

      // For each path segment ...
      for(let i=1; i<currentPath.transformedPolygon.length; i++) {
        const point0 = vec2__WEBPACK_IMPORTED_MODULE_0__(currentPath.transformedPolygon[i-1][0], currentPath.transformedPolygon[i-1][1]);
        const point1 = vec2__WEBPACK_IMPORTED_MODULE_0__(currentPath.transformedPolygon[i][0], currentPath.transformedPolygon[i][1]);
        const currentSegmentLength = point1.distance(point0);
        const startingOffset = sourceSpacing - previousSegmentRemainder;
        const availableLength = currentSegmentLength - startingOffset;

        // We can fit at least one source onto this segment
        if(availableLength >= sourceSpacing) {
          let segmentDirection = point1.subtract(point0, true).normalize();

          // How many sources can we fit onto this segment?
          const numSources = Math.floor(availableLength / sourceSpacing);

          // Create as many auxin sources as we can
          for(let sourceIndex=0; sourceIndex<=numSources; sourceIndex++) {
            sources.push(
              new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__["default"](
                point0.add(segmentDirection.multiply(sourceSpacing * sourceIndex + startingOffset, true), true),
                ctx
              )
            );
          }

          // Store remainder of segment length to offset next segment's source placement
          previousSegmentRemainder = availableLength - (numSources * sourceSpacing);

        // Can't fit any sources onto this segment, so accumulate the length (previous segments might've also been too short)
        } else {
          previousSegmentRemainder += currentSegmentLength;
        }
      }

      return sources;
    }

    let createSubdividedSources = () => {
      let sources = [];

      // Create sources at each vertex
      for(let i=0; i<currentPath.transformedPolygon.length; i++) {
        sources.push(
          new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              currentPath.transformedPolygon[i][0],
              currentPath.transformedPolygon[i][1]
            ),
            ctx
          )
        );
      }

      let newSources = [];

      // Recursively subdivide segments
      for(let i=1; i<sources.length; i++) {
        const point0 = sources[i-1].position;
        const point1 = sources[i].position;
        subdivideSegment(point0, point1, i, newSources);
      }

      // Reverse the new sources list so that indices don't shift as they are inserted
      newSources.sort((a,b) => {
        return b.index - a.index;
      });

      // Inject all the new sources
      for(let newSource of newSources) {
        sources.splice(newSource.index, 0, newSource.source);
      }

      return sources;
    }

      // Split a segment (defined by two input points) by placing a source at it's midpoint
      let subdivideSegment = (point0, point1, originalIndex, newSources) => {
        const segmentLength = point1.distance(point0);

        // Only subdivide the segment if its long enough (terminates recursion in short segments)
        if(segmentLength > 20) {
          let midpointSource = getMidpointSource(point0, point1, segmentLength);
          newSources.push({
            index: originalIndex,
            source: midpointSource
          });

          // Recursively subdivide the new segments
          subdivideSegment(point0, midpointSource.position, originalIndex, newSources); // subdivide the left segment
          subdivideSegment(midpointSource.position, point1, originalIndex, newSources); // subdivide the right segment
        }
      }

      // Generate a new source exactly halfway between two others
      let getMidpointSource = (point0, point1, segmentLength) => {
        const segmentDirection = point1.subtract(point0, true).normalize();

        return new _core_AuxinSource__WEBPACK_IMPORTED_MODULE_5__["default"](
          point0.add(segmentDirection.multiply(segmentLength/2, true), true),
          ctx
        );
      }

// Main program loop
let update = (timestamp) => {
  if(!network.settings.IsPaused) {
    if(currentPathShape == LINE) {
      movePath();
    }

    if(currentPathShape != LINE) {
      scalePath();
    }

    generateSourcesOnPath();

    network.update();
  }

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

    case '1':
      currentPathShape = LINE;
      setupPath();
      resetNetwork();
      break;

    case '2':
      currentPathShape = TRIANGLE;
      setupPath();
      resetNetwork();
      break;

    case '3':
      currentPathShape = SQUARE;
      setupPath();
      resetNetwork();
      break;

    case '4':
      currentPathShape = DIAMOND;
      setupPath();
      resetNetwork();
      break;

    case '5':
      currentPathShape = CIRCLE;
      setupPath();
      resetNetwork();
      break;

    case '6':
      currentPathShape = LEAF;
      setupPath();
      resetNetwork();
      break;
  }
});

// Kick off the application
setup();

/***/ }),

/***/ "./marginal-growth/svg/grass-blade.svg":
/*!*********************************************!*\
  !*** ./marginal-growth/svg/grass-blade.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" id=\"svg36\" sodipodi:docname=\"grass-blade.svg\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g inkscape:groupmode=\"layer\" inkscape:label=\"0\" id=\"g34\"><path id=\"path32\" style=\"fill:none;stroke:#000000;stroke-width:0.96219009;stroke-miterlimit:4;stroke-dasharray:none\" d=\"M 441.95752,61.457361 441.71727,61.112414 441.39983,60.866028 441.03092,60.718195 440.63628,60.668914 440.24165,60.718195 439.87274,60.866028 439.5553,61.112414 439.31505,61.457361 M 467.8534,172.38615 467.4407,158.06364 466.2072,143.81219 464.15984,129.66146 461.30555,115.64115 457.65124,101.7809 453.20385,88.11042 447.9703,74.659344 441.95752,61.457361 M 439.31505,61.457361 433.30227,74.659344 428.06872,88.11042 423.62133,101.7809 419.96702,115.64115 417.11273,129.66146 415.06537,143.81219 413.83187,158.06364 413.41917,172.38615 M 467.8534,854.6005 H 461.04912 454.24484 447.44056 440.63629 433.83201 427.02773 420.22345 413.41917 M 467.8534,172.38615 V 257.66294 342.93974 428.21653 513.49333 598.77012 684.04691 769.3237 854.6005 M 413.41917,854.6005 V 769.3237 684.04691 598.77012 513.49333 428.21653 342.93974 257.66294 172.38615\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ }),

/***/ "./marginal-growth/svg/leaf.svg":
/*!**************************************!*\
  !*** ./marginal-growth/svg/leaf.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" viewBox=\"0 0 772.82472 769.57439\" id=\"svg2\" sodipodi:docname=\"leaf.svg\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g id=\"layer1\"><path id=\"path3183\" d=\"M 376.41485,766.92192 376.64701,766.06216 377.27912,764.30024 378.21463,761.89291 379.35699,759.09689 380.78192,754.40525 381.14532,748.13754 380.39488,738.08823 378.47832,722.05178 376.82226,707.65234 375.13759,690.62562 373.62144,673.09956 372.47093,657.20211 371.51314,643.49585 370.52166,631.9364 369.61345,623.74075 368.90551,620.12591 367.06193,619.22857 362.90648,618.77337 356.42811,618.75984 347.61576,619.18749 299.7607,622.50034 270.05541,625.51534 249.01975,629.54953 227.17356,635.91997 217.26693,638.68731 207.38936,640.58168 195.93042,641.84111 181.27966,642.70363 170.01113,643.07856 160.23064,643.17356 152.98661,642.99384 149.32742,642.54465 147.58199,641.5844 147.35414,640.24606 148.81851,638.02739 152.14975,634.42611 157.3913,627.93953 160.77294,621.44345 162.08281,615.49961 161.10902,610.66973 155.01858,604.9416 143.05749,598.74485 126.06442,592.44137 104.87806,586.39308 93.056783,583.30183 83.087993,580.4865 76.020493,578.25768 72.903033,576.92597 72.941993,575.2739 74.703123,572.19779 78.025663,567.92988 82.748833,562.70241 89.489713,555.24779 93.244523,549.69387 94.704493,544.63361 94.560903,538.65998 92.047263,532.09843 85.375473,524.38931 73.926813,514.94705 57.082583,503.18606 46.666473,496.14633 38.136583,490.14938 32.373133,485.83047 30.256383,483.82485 31.322413,482.77204 34.224973,481.04731 38.520763,478.88971 43.766483,476.53833 58.657833,469.21975 66.115583,461.80661 67.358283,451.86896 63.604443,436.97683 58.793153,421.07621 53.859143,403.26033 49.599943,386.5266 46.813093,373.87246 42.604693,355.30417 36.390633,332.03273 29.891763,310.16832 24.828959,295.82112 22.24613,290.82362 18.696416,285.11596 14.647754,279.40165 10.568079,274.38421 6.9226994,270.02004 4.0565054,266.08573 2.2568054,263.01278 1.8109094,261.2327 20.663131,258.2496 61.088163,261.81741 105.84882,269.63282 137.70792,279.39251 143.04316,281.95585 149.84397,285.02011 157.23614,288.20075 164.34549,291.11317 171.60429,294.27165 179.40196,298.12221 186.80235,302.17795 192.86931,305.95194 210.97141,317.08415 222.66739,320.80139 229.32102,317.10519 232.29607,305.99713 234.10077,294.06428 236.91437,281.67166 240.51725,269.65479 244.68977,258.84919 246.85511,252.96279 249.35976,244.60925 251.89345,234.90103 254.14589,224.95059 256.5838,212.43033 257.71253,203.98799 257.66283,197.85803 256.56547,192.27495 254.23291,181.85392 255.2979,177.54782 260.90146,178.84113 272.18465,185.21831 281.88526,190.44331 290.60957,194.00657 297.37105,195.58087 301.18314,194.83901 301.4754,193.67233 301.33095,191.43593 300.79187,188.45133 299.90022,185.04005 298.71118,179.69665 299.05236,173.8884 301.40514,164.987 306.25087,150.36415 310.23752,139.45633 314.49484,129.13052 318.51886,120.53802 321.80559,114.83011 328.34816,105.12163 336.24807,92.484558 345.92011,76.237048 357.77906,55.697228 371.54333,32.735737 383.27351,15.451453 392.44065,4.5577461 398.51583,0.76798411 399.72521,1.4548291 400.52483,3.6152621 400.94547,7.3991251 401.01791,12.956264 401.22861,18.642676 401.92908,25.115345 403.00967,31.577637 404.36071,37.232914 410.94368,54.758248 421.23845,76.434078 433.6076,99.060118 446.41371,119.43609 454.91861,131.56864 460.36584,138.26707 464.31957,141.12067 468.34395,141.7187 471.30884,141.44728 474.47462,140.70825 477.46233,139.6145 479.89298,138.27889 482.66301,136.47342 484.46384,135.89027 485.86518,136.54159 487.43673,138.43953 488.60673,141.72899 489.74613,148.00284 490.75945,156.60163 491.55124,166.86593 492.47752,179.60586 493.6042,188.18928 495.18728,193.97367 497.48277,198.31655 504.56291,209.48819 510.02112,219.62427 514.14948,229.32903 517.24009,239.2067 518.90843,245.06662 520.63627,250.30114 522.2197,254.3392 523.45477,256.60973 524.7876,259.01766 526.63709,263.4297 528.75866,269.21769 530.90773,275.7535 533.39327,284.78643 534.98423,293.53933 535.86742,303.41924 536.22965,315.83319 537.08717,339.31412 540.09051,350.6332 546.93928,351.97446 559.33309,345.52193 564.98945,342.16153 570.81196,338.86971 576.11538,336.02442 580.2145,334.00358 584.21994,332.0511 589.26777,329.39195 594.71187,326.37563 599.90611,323.35166 610.99068,317.61356 624.8167,312.03922 641.30696,306.65667 660.38424,301.49397 707.11485,289.70254 737.36728,281.39974 756.72237,274.92332 770.76093,268.61104 771.36454,268.90349 771.85885,270.28876 772.19286,272.54274 772.31553,275.44134 771.64397,280.08774 769.67288,286.53769 766.46767,294.60773 762.09373,304.1144 757.61551,313.84035 752.97876,324.76334 748.73061,335.54657 745.41823,344.85324 739.89482,361.08684 733.7065,377.99475 726.42549,396.70832 717.62403,418.35893 713.11082,428.584 708.80317,436.71716 704.31232,443.41363 699.24948,449.32865 695.42653,453.44283 692.29587,457.01569 690.18057,459.66411 689.40367,461.00495 689.70277,461.80222 690.51715,462.97046 691.72242,464.35263 693.1942,465.79168 695.64479,467.34522 699.11208,468.41139 703.76602,469.02533 709.77661,469.22217 714.74345,469.31207 718.81087,469.55685 721.55913,469.91912 722.56849,470.3615 721.30109,474.11597 717.99895,479.8888 713.41217,486.50232 708.29083,492.77885 696.78593,506.42726 684.95407,521.74687 675.3412,535.30948 670.49329,543.68686 669.66985,546.67118 669.41713,549.32348 669.73628,551.73163 670.62844,553.9835 674.70635,558.68104 681.66372,564.1082 689.98153,569.21729 698.14073,572.96062 701.21152,574.24105 703.8797,575.68954 705.85904,577.12824 706.86329,578.37934 706.2704,580.86293 703.72644,583.83477 700.29023,586.32736 697.02059,587.37322 694.40728,588.19443 688.64043,590.4304 680.57216,593.73966 671.05461,597.78076 642.65603,610.52875 625.49159,619.82213 617.04107,627.31205 614.78427,634.64968 616.59733,641.04392 621.36544,649.139 628.08196,657.49295 635.74029,664.66384 638.20935,666.8612 639.98222,668.97755 640.91134,670.79791 640.84912,672.10727 628.20017,674.06287 600.78941,673.79929 568.49654,671.70647 541.20126,668.17434 516.79794,663.34061 499.57863,659.49128 487.33288,656.08174 477.85023,652.56739 470.761,649.83853 461.32218,646.59161 450.76537,643.23337 440.32216,640.17058 429.99865,637.12728 419.76891,633.82211 410.81413,630.65374 404.31553,628.02086 399.33681,625.91964 394.51879,624.1989 390.41116,623.03622 387.56356,622.60919 384.83735,622.90314 383.3594,624.41115 382.75063,628.07245 382.63195,634.82628 383.28043,650.97474 385.0821,671.02429 387.82136,692.98047 391.28258,714.84886 395.07053,737.43821 396.67901,751.37291 396.24848,759.25438 393.91939,763.68406 389.89336,766.01204 384.01907,767.62627 378.71842,768.07882 376.41334,766.92177 376.41372,766.92181 376.4141,766.92184 376.41447,766.92188 376.41485,766.92192\" style=\"fill:none;stroke:#000000;stroke-width:2.93138409;stroke-opacity:1\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1ZlaW5Ob2RlLmpzIiwid2VicGFjazovLy8uL21hcmdpbmFsLWdyb3d0aC9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9tYXJnaW5hbC1ncm93dGgvc3ZnL2dyYXNzLWJsYWRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9tYXJnaW5hbC1ncm93dGgvc3ZnL2xlYWYuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtaW4tcG9seWdvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGhkYXRhL2xpYi9TVkdQYXRoRGF0YS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUG9pbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZlYzIvdmVjMi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWtDOztBQUVuQjtBQUNmLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLG9DQUFvQyxFQUFFLGlEQUFROztBQUU5QywrQkFBK0I7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3hkRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoibWFyZ2luYWxHcm93dGguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYXJnaW5hbC1ncm93dGgvanMvZW50cnkuanNcIik7XG4iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXhpblNvdXJjZSB7XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGN0eCwgc2V0dGluZ3MgPSB7fSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAgICAgLy8gdmVjMiBvZiB0aGlzIHNvdXJjZSdzIHBvc2l0aW9uXHJcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHRcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuaW5mbHVlbmNpbmdOb2RlcyA9IFtdOyAgIC8vIHJlZmVyZW5jZXMgdG8gbm9kZXMgdGhpcyBzb3VyY2UgaXMgaW5mbHVlbmNpbmcgZWFjaCBmcmFtZVxyXG4gICAgdGhpcy5mcmVzaCA9IHRydWU7ICAgICAgICAgICAgLy8gZmxhZyB1c2VkIHRvIHByZXZlbnQgc291cmNlcyBmcm9tIGJlaW5nIHJlbW92ZWQgZHVyaW5nIGZpcnN0IGZyYW1lIG9mIENsb3NlZCB2ZW5hdGlvbiBtb2RlXHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgLy8gRHJhdyB0aGUgYXR0cmFjdGlvbiB6b25lXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5BdHRyYWN0aW9uWm9uZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUga2lsbCB6b25lXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5LaWxsWm9uZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgYXV4aW4gc291cmNlXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxLCAxLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlNvdXJjZUNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IExpZ2h0ID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgwLDAsMCwuNSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMCwwLDAsMSknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGFyayA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC45KScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgwLDI1NSwyNTUsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjA1KScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4yKSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFJlYWxpc3RpYyA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICAvLyBWZWluQ29sb3I6ICdyZ2JhKDAsMCwwLC4yKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgwLDI1NSwwLC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMCwwLDI1NSwxKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSg2MSwxNjYsMTIsMSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYigyNDIsMjQyLDI0MiknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNiknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4zKScsXHJcbiAgLy8gQm91bmRzRmlsbENvbG9yOiAncmdiKDYxLDg1LDEzNiknLFxyXG4gIC8vIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDYxLDg1LDEzNiknXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiKDIxMCwgODEsIDk0KScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoMjEwLCA4MSwgOTQpJ1xyXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIFJlYWxpc3RpYywgQ3VzdG9tIH0gZnJvbSAnLi9Db2xvclByZXNldHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKlxyXG4gICAgU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIFZlbmF0aW9uVHlwZTogJ09wZW4nLCAgICAgICAgIC8vIHZlbmF0aW9uIGNhbiBiZSBcIk9wZW5cIiBvciBcIkNsb3NlZFwiXHJcbiAgU2VnbWVudExlbmd0aDogNSwgICAgICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggdmVpbiBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogMzAsICAgICAgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXV4aW4gc291cmNlIHRoYXQgYXR0cmFjdHMgdmVpbiBzZWdtZW50c1xyXG4gIEtpbGxEaXN0YW5jZTogNSwgICAgICAgICAgICAgIC8vIGRpc3RhbmNlIChkX2spIGJldHdlZW4gYXV4aW4gc291cmNlcyBhbmQgc2VnbWVudHMgd2hlbiBzZWdtZW50cyBhcmUgZW5kZWRcclxuICBJc1BhdXNlZDogZmFsc2UsICAgICAgICAgICAgICAvLyBpbml0aWFsIHBhdXNlL3VucGF1c2Ugc3RhdGVcclxuICBFbmFibGVDYW5hbGl6YXRpb246IHRydWUsICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gIEVuYWJsZU9wYWNpdHlCbGVuZGluZzogdHJ1ZSwgIC8vIHR1cm5zIG9uL29mZiBvcGFjaXR5XHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dTb3VyY2VzOiBmYWxzZSwgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdzJ1xyXG4gIFNob3dWZWluczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd2J1xyXG4gIFNob3dWZWluVGlwczogZmFsc2UsICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdrJ1xyXG4gIFNob3dJbmZsdWVuY2VMaW5lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IGZhbHNlLCAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdvJ1xyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFZlaW5SZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyB2ZWluIHNlZ21lbnRzIGFzIFwiTGluZXNcIiBvciBcIkRvdHNcIlxyXG5cclxuICAvLyBDb2xvcnNcclxuICBDb2xvcnM6IERhcmssXHJcblxyXG4gIC8vIExpbmUgdGhpY2tuZXNzZXNcclxuICBWZWluVGhpY2tuZXNzOiAxLjUsXHJcbiAgVmVpblRpcFRoaWNrbmVzczogMixcclxuICBCb3VuZHNCb3JkZXJUaGlja25lc3M6IDFcclxufSIsImltcG9ydCB7IGV4cG9ydFNWRyB9IGZyb20gXCIuL1V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHYgPSB0b2dnbGUgdmVpbiB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3YnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpbnMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHMgPSB0b2dnbGUgYXV4aW4gc291cmNlIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVTb3VyY2VzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdGlvblpvbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB0ID0gdG9nZ2xlIHZlaW4gdGlwIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVWZWluVGlwcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gayA9IHRvZ2dsZSBraWxsIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdrJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUtpbGxab25lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gaSA9IHRvZ2dsZSBpbmZsdWVuY2UgbGluZXMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdpJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUluZmx1ZW5jZUxpbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBiID0gdG9nZ2xlIGJvdW5kcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2InOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBvID0gdG9nZ2xlIG9ic3RhY2xlcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlT2JzdGFjbGVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBlID0gZXhwb3J0IGFuIFNWRyBmaWxlIG9mIGFsbCB2aXNpYmxlIGdlb21ldHJ5XHJcbiAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgIGV4cG9ydFNWRyhuZXR3b3JrKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGMgPSB0b2dnbGUgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb25cclxuICAgICAgY2FzZSAnYyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVDYW5hbGl6YXRpb24oKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHAgPSB0b2dnbGUgb3BhY2l0eSBibGVuZGluZ1xyXG4gICAgICBjYXNlICdwJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9wYWNpdHlCbGVuZGluZygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgS0RCdXNoIGZyb20gJ2tkYnVzaCc7XHJcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VzID0gW107ICAvLyBzb3VyY2VzIChBdXhpblNvdXJjZXMpIGF0dHJhY3QgdmVpbiBub2Rlc1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdOyAgICAvLyBub2RlcyAoVmVpbk5vZGVzKSBhcmUgY29ubmVjdGVkIHRvIGZvcm0gdmVpbnNcclxuXHJcbiAgICB0aGlzLm5vZGVzSW5kZXg7ICAgIC8vIGtkLWJ1c2ggc3BhdGlhbCBpbmRleCBmb3IgYWxsIG5vZGVzXHJcblxyXG4gICAgdGhpcy5ib3VuZHMgPSBbXTsgICAgIC8vIGFycmF5IG9mIFBhdGggb2JqZWN0cyB0aGF0IHZlaW5zIGNhbm5vdCBncm93IG91dHNpZGUgb2ZcclxuICAgIHRoaXMub2JzdGFjbGVzID0gW107ICAvLyBhcnJheSBvZiBQYXRoIG9iamVjdHMgdGhhdCB2ZWlucyBtdXN0IGF2b2lkXHJcblxyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBTa2lwIGl0ZXJhdGlvbiBpZiBwYXVzZWRcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFzc29jaWF0ZSBhdXhpbiBzb3VyY2VzIHdpdGggbmVhcmJ5IHZlaW4gbm9kZXMgdG8gZmlndXJlIG91dCB3aGVyZSBncm93dGggc2hvdWxkIG9jY3VyXHJcbiAgICBmb3IobGV0IFtzb3VyY2VJRCwgc291cmNlXSBvZiB0aGlzLnNvdXJjZXMuZW50cmllcygpKSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnNldHRpbmdzLlZlbmF0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEZvciBvcGVuIHZlbmF0aW9uLCBvbmx5IGFzc29jaWF0ZSB0aGlzIHNvdXJjZSB3aXRoIGl0cyBjbG9zZXN0IHZlaW4gbm9kZVxyXG4gICAgICAgIGNhc2UgJ09wZW4nOlxyXG4gICAgICAgICAgbGV0IGNsb3Nlc3ROb2RlID0gdGhpcy5nZXRDbG9zZXN0Tm9kZShzb3VyY2UsIHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSkpO1xyXG5cclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IFtjbG9zZXN0Tm9kZV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIGFzc29jaWF0ZSB0aGlzIHNvdXJjZSB3aXRoIGFsbCBub2RlcyBpbiBpdHMgcmVsYXRpdmUgbmVpZ2hib3Job29kXHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGxldCBuZWlnaGJvcmhvb2ROb2RlcyA9IHRoaXMuZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKHNvdXJjZSk7XHJcbiAgICAgICAgICBsZXQgbm9kZXNJbktpbGxab25lID0gdGhpcy5nZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGNsdWRlIG5vZGVzIHRoYXQgYXJlIGluIHRoZSBzb3VyY2UncyBraWxsIHpvbmUgKHRoZXNlIHNob3VsZCBzdG9wIGdyb3dpbmcpXHJcbiAgICAgICAgICBsZXQgbm9kZXNUb0dyb3cgPSBuZWlnaGJvcmhvb2ROb2Rlcy5maWx0ZXIoKG5laWdoYm9yTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIW5vZGVzSW5LaWxsWm9uZS5pbmNsdWRlcyhuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMgPSBuZWlnaGJvcmhvb2ROb2RlcztcclxuXHJcbiAgICAgICAgICBpZihub2Rlc1RvR3Jvdy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mcmVzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzVG9Hcm93KSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm93IHRoZSBuZXR3b3JrIGJ5IGFkZGluZyBuZXcgdmVpbiBub2RlcyBvbnRvIGFueSBub2RlcyBiZWluZyBpbmZsdWVuY2VkIGJ5IHNvdXJjZXNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IHRoaXMuZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5zb3VyY2VzW2lkXSkpO1xyXG4gICAgICAgIGxldCBuZXh0Tm9kZSA9IG5vZGUuZ2V0TmV4dE5vZGUoYXZlcmFnZURpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IHZlaW5zIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOT1RFOiBkaXNhYmxpbmcgdGhpcyBjaGVjayBsZXRzIHZlaW5zIGdyb3cgYWNyb3NzIGdhcHMgaW4gYm91bmRzIC0gY29vbCBlZmZlY3QhXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG5cclxuICAgICAgLy8gUGVyZm9ybSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgICAgIGlmKG5vZGUuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgY2hpbGQgdmVpbnMsIHVzZSB0aGUgdGhpY2tlc3Qgb2YgdGhlbSBhbGxcclxuICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPCBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDcpIHtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA9IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF1eGluIHNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIHZlaW4gbm9kZXNcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIGFzIHNvb24gYXMgYW55IHZlaW4gbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihzb3VyY2UucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2Ugb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIHZlaW4gbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDAgJiYgIXNvdXJjZS5mcmVzaCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsTm9kZXNSZWFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgICAgIGlmKG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKSA+IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxOb2Rlc1JlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFsbE5vZGVzUmVhY2hlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgdGhpcy5kcmF3Qm91bmRzKCk7XHJcbiAgICB0aGlzLmRyYXdPYnN0YWNsZXMoKTtcclxuICAgIHRoaXMuZHJhd1NvdXJjZXMoKTtcclxuICAgIHRoaXMuZHJhd1ZlaW5zKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JvdW5kcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd09ic3RhY2xlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1ZlaW5zKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1NvdXJjZXMoKSB7XHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIHNvdXJjZSBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgc291cmNlVG9QMCwgc291cmNlVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIHNvdXJjZVRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3VyY2VUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMS5sZW5ndGgoKSA+IHNvdXJjZVRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBzb3VyY2UucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieVNvdXJjZXMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdXhpbiBzb3VyY2VcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIHNvdXJjZS5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZFZlaW5Ob2RlKG5vZGUpIHtcclxuICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgaWYoYm91bmQuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3QgdmVpbnMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmVpblRpcHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICFub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVNvdXJjZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93U291cmNlcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvdW5kcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICF0aGlzLnNldHRpbmdzLlNob3dCb3VuZHM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPYnN0YWNsZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2FuYWxpemF0aW9uKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24gPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb247XHJcblxyXG4gICAgaWYoIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS50aGlja25lc3MgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGFjaXR5QmxlbmRpbmcoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9IHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5cclxubGV0IGluc2lkZSA9IHJlcXVpcmUoJ3BvaW50LWluLXBvbHlnb24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBvbHlnb24sIHR5cGUsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247ICAgICAvLyBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyBjb29yZGluYXRlcyBkZWZpbmluZyBhIHBvbHlnb24gKFtbeDAseTBdLFt4MSx5MV0sLi4uXSlcclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHRcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7ICAgICAgICAgICAvLyBzdHJpbmcgZWl0aGVyICdCb3VuZHMnIG9yICdPYnN0YWNsZSdcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbiA9IHBvbHlnb247ICAvLyBQYXRocyBhcmUgaW5pdGlhbGl6ZWQgd2l0aG91dCBhbnkgdHJhbnNmb3JtYXRpb25zIGJ5IGRlZmF1bHRcclxuICAgIHRoaXMub3JpZ2luID0ge3g6MCwgeTowfTsgICAgICAgICAgIC8vIG9yaWdpbiBwb2ludCB1c2VkIGZvciB0cmFuc2xhdGlvblxyXG4gICAgdGhpcy5zY2FsZSA9IDE7ICAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwbGljYXRpb24gZmFjdG9yIGZvciBwb2x5Z29uIGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLndpZHRoID0gLTE7ICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aCBvZiB0cmFuc2Zvcm1lZCBwb2x5Z29uIC0gd2lsbCBiZSBjYWxjdWxhdGVkIHVzaW5nIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpXHJcbiAgICB0aGlzLmhlaWdodCA9IC0xOyAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQgb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxyXG4gICAgdGhpcy5pc0NlbnRlcmVkID0gZmFsc2U7ICAgICAgICAgICAgLy8gd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSB0cmFuc2xhdGUgdG8gc2NyZWVuIGNlbnRlclxyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgY29vcmRpbmF0ZXMgYXJlIGluc2lkZSBwb2x5Z29uIGRlZmluZWQgYnkgdGhpcyBQYXRoXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIGluc2lkZShbeCwgeV0sIHRoaXMucG9seWdvbik7XHJcbiAgfVxyXG5cclxuICAvLyBSZWxhdGl2ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLm9yaWdpbi54ICs9IHg7XHJcbiAgICB0aGlzLm9yaWdpbi55ICs9IHk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICB9XHJcblxyXG4gIC8vIEFic29sdXRlIHRyYW5zbGF0aW9uXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIGlmKHRoaXMuaXNDZW50ZXJlZCkge1xyXG4gICAgICB0aGlzLm9yaWdpbi54ID0geCAtIHRoaXMud2lkdGgvMjtcclxuICAgICAgdGhpcy5vcmlnaW4ueSA9IHkgLSB0aGlzLmhlaWdodC8yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHg7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY2FsZShmYWN0b3IpIHtcclxuICAgIHRoaXMuc2NhbGUgKj0gZmFjdG9yO1xyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGlmKHRoaXMuaXNDZW50ZXJlZCkge1xyXG4gICAgICB0aGlzLm1vdmVUbyh3aW5kb3cuaW5uZXJXaWR0aC8yLCB3aW5kb3cuaW5uZXJIZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYWxjdWxhdGUgdG90YWwgcGF0aCBsZW5ndGggYnkgYWRkaW5nIHVwIGFsbCBsaW5lIHNlZ21lbnQgbGVuZ3RocyAoZGlzdGFuY2VzIGJldHdlZW4gcG9seWdvbiBwb2ludHMpXHJcbiAgZ2V0VG90YWxMZW5ndGgoKSB7XHJcbiAgICBsZXQgdG90YWxMZW5ndGggPSAwO1xyXG5cclxuICAgIGZvcihsZXQgaT0xOyBpPHRoaXMucG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0b3RhbExlbmd0aCArPSBWZWMyKFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVswXSAqIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzFdICogdGhpcy5zY2FsZVxyXG4gICAgICApLmRpc3RhbmNlKFxyXG4gICAgICAgIFZlYzIoXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVswXSAqIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlcyB0aGUgcmVhbCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSB0cmFuc2Zvcm1lZCBwb2x5Z29uXHJcbiAgY2FsY3VsYXRlRGltZW5zaW9ucygpIHtcclxuICAgIGxldCBsZWZ0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLFxyXG4gICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdLFxyXG4gICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdIDwgbGVmdE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF07XHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA+IHJpZ2h0TW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICByaWdodE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdIDwgdG9wTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0gPiBib3R0b21Nb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGJvdHRvbU1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5hYnMocmlnaHRNb3N0Q29vcmRpbmF0ZSAtIGxlZnRNb3N0Q29vcmRpbmF0ZSk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGguYWJzKGJvdHRvbU1vc3RDb29yZGluYXRlIC0gdG9wTW9zdENvb3JkaW5hdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvb3JkaW5hdGVzIGZvciB0aGUgXCJ0cmFuc2Zvcm1lZFwiIHZlcnNpb24gb2YgdGhpcyBwYXRoLCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIHRyYW5zbGF0aW9uIGFuZCBzY2FsaW5nXHJcbiAgY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCkge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ucHVzaChcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueCxcclxuICAgICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGUgKyB0aGlzLm9yaWdpbi55XHJcbiAgICAgICAgXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy50eXBlID09ICdCb3VuZHMnIHx8XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLnR5cGUgPT0gJ09ic3RhY2xlcydcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICAvLyBEcmF3IHNlcXVlbnRpYWwgbGluZXMgdG8gYWxsIHBvaW50cyBvZiB0aGUgcG9seWdvblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRHJhdyBsaW5lIGJhY2sgdG8gZmlyc3QgcG9pbnQgdG8gY2xvc2UgdGhlIHBvbHlnb25cclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICBzd2l0Y2godGhpcy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQm91bmRzJzpcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLkJvdW5kc0JvcmRlclRoaWNrbmVzcztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0ZpbGxDb2xvcjtcclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ09ic3RhY2xlJzpcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLk9ic3RhY2xlRmlsbENvbG9yO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgYm91bmRpbmcgYm94XHJcbiAgICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5tb3ZlVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55KTtcclxuICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwxKSc7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7U1ZHUGF0aERhdGF9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9zdmctcGF0aGRhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBsb2FkKHN2Z1N0cmluZykge1xyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIGxldCBzdmdOb2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJyk7XHJcblxyXG4gICAgbGV0IGlucHV0UGF0aHMgPSBzdmdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhdGgnKSxcclxuICAgICAgcGF0aHMgPSBbXTtcclxuXHJcbiAgICAvLyBTY3JhcGUgYWxsIHBvaW50cyBmcm9tIGFsbCBwYXRocywgYW5kIHJlY29yZCBicmVha3BvaW50c1xyXG4gICAgZm9yKGxldCBpbnB1dFBhdGggb2YgaW5wdXRQYXRocykge1xyXG4gICAgICBsZXQgcGF0aERhdGEgPSBuZXcgU1ZHUGF0aERhdGEoaW5wdXRQYXRoLmdldEF0dHJpYnV0ZSgnZCcpKSxcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c0Nvb3JkcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvcihsZXQgW2luZGV4LCBjb21tYW5kXSBvZiBwYXRoRGF0YS5jb21tYW5kcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2goY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAvLyBNb3ZlICgnTScpIGFuZCBsaW5lICgnTCcpIGNvbW1hbmRzIGhhdmUgYm90aCBYIGFuZCBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLk1PVkVfVE86XHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkxJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBIb3Jpem9udGFsIGxpbmUgKCdIJykgY29tbWFuZHMgb25seSBoYXZlIFgsIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIHByZXZpb3VzQ29vcmRzLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gVmVydGljYWwgbGluZSAoJ1YnKSBjb21tYW5kcyBvbmx5IGhhdmUgWSwgdXNpbmcgcHJldmlvdXMgY29tbWFuZCdzIFhcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbcHJldmlvdXNDb29yZHMueCwgY29tbWFuZC55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENsb3NlUGF0aCAoJ1onKSBjb21tYW5kcyBhcmUgYSBuYWl2ZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGN1cnJlbnQgcGF0aCBjYW4gYmUgcHJvY2Vzc2VkIGFuZCBhZGRlZCB0byB0aGUgd29ybGRcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSDpcclxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBwYXRoIGluIHJldHVybiBvYmplY3RcclxuICAgICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbmNsb3NlZCBwYXRocyBuZXZlciBoYXZlIENMT1NFX1BBVEggY29tbWFuZHMsIHNvIHdyYXAgdXAgdGhlIGN1cnJlbnQgcGF0aCB3aGVuIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGggYW5kIGhhdmUgbm90IGZvdW5kIHRoZSBjb21tYW5kXHJcbiAgICAgICAgaWYoaW5kZXggPT0gcGF0aERhdGEuY29tbWFuZHMubGVuZ3RoIC0gMSAmJiBjb21tYW5kLnR5cGUgIT0gU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCkge1xyXG4gICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFggY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3gnKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueCA9IGNvbW1hbmQueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhcHR1cmUgWSBjb29yZGluYXRlLCBpZiB0aGVyZSB3YXMgb25lXHJcbiAgICAgICAgaWYoY29tbWFuZC5oYXNPd25Qcm9wZXJ0eSgneScpKSB7XHJcbiAgICAgICAgICBwcmV2aW91c0Nvb3Jkcy55ID0gY29tbWFuZC55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IHRvUGF0aCB9IGZyb20gJ3N2Zy1wb2ludHMnO1xyXG5cclxuLy8gcmFuZG9tKCksIHNpbWlsYXIgdG8gUHJvY2Vzc2luZydzXHJcbi8vIElmIHR3byBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQsIHRoZXkgYXJlIGludGVycHJldGVkIGFzIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIHRoZSBkZXNpcmVkIHJhbmdlXHJcbi8vIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBwYXNzZWQsIGl0IGlzIGludGVycHJldGVkIGFzIHRoZSBtYXhpbXVtLCB3aGlsZSB6ZXJvIGlzIHVzZWQgYXMgdGhlIG1pbmltdW1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIG51bWJlciBmcm9tIG9uZSByYW5nZSB0byBhbm90aGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG9yaWdpbmFsTG93ZXIsIG9yaWdpbmFsVXBwZXIsIG5ld0xvd2VyLCBuZXdVcHBlcikge1xyXG4gIHJldHVybiBuZXdMb3dlciArIChuZXdVcHBlciAtIG5ld0xvd2VyKSAqICgodmFsdWUgLSBvcmlnaW5hbExvd2VyKSAvIChvcmlnaW5hbFVwcGVyIC0gb3JpZ2luYWxMb3dlcikpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIHBvaW50IGNvb3JkaW5hdGVzIChhbHNvIGFycmF5cywgd2l0aCB0d28gZW50cmllcykgZm9yIHBvaW50cyBhcnJhbmdlZCBpbiBhIGNpcmNsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY2xlT2ZQb2ludHMoY3gsIGN5LCByYWRpdXMsIHJlc29sdXRpb24pIHtcclxuICBsZXQgYW5nbGUsIHgsIHk7XHJcbiAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICB4ID0gY3ggKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICB5ID0gY3kgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb2ludHM7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgYW4gU1ZHIGRvY3VtZW50IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2aXNpYmxlIGdlb21ldHJ5LCB0aGVuIHB1c2hlcyBpdCB0byB0aGUgY2xpZW50XHJcbi8vIC0gVHJpZ2dlcmVkIGJ5IHByZXNzaW5nIGBlYCBpbiBhbnkgc2tldGNoLiBTZWUgS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMgZm9yIGRlZmluaXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNWRyhuZXR3b3JrKSB7XHJcbiAgLy8gU2V0IHVwIDxzdmc+IGVsZW1lbnRcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxuczp4bGluaycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgd2luZG93LmlubmVyV2lkdGggKyAnICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAvLyBDcmVhdGUgPGxpbmU+cyBmb3IgZWFjaCB2ZWluIHNlZ21lbnRcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgbGV0IG5vZGVMaW5lc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IGBcclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHgyPVwiJHtub2RlLnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTI9XCIke25vZGUucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIG5vZGVMaW5lc0dyb3VwLmlubmVySFRNTCArPSBsaW5lTm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlTGluZXNHcm91cCk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3IgYm91bmRzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93Qm91bmRzKSB7XHJcbiAgICBpZihuZXR3b3JrLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBib3VuZHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhib3VuZC5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChib3VuZHNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3Igb2JzdGFjbGVzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93T2JzdGFjbGVzKSB7XHJcbiAgICBpZihuZXR3b3JrLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBvYnN0YWNsZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhvYnN0YWNsZS5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChvYnN0YWNsZXNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSB0aGUgZG9jdW1lbnQgYXMgYSBCbG9iIGFuZCBmb3JjZSBhIGRvd25sb2FkIGFzIGEgdGltZXN0YW1wZWQgLnN2ZyBmaWxlXHJcbiAgY29uc3Qgc3ZnRG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJub1wiPz4nO1xyXG4gIGNvbnN0IHNlcmlhbGl6ZWRTdmcgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcclxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z0RvY3R5cGUsIHNlcmlhbGl6ZWRTdmddLCB7IHR5cGU6ICdpbWFnZS9zdmcreG1sOycgfSlcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuICAvLyBDcmVhdGUgYSA8cGF0aD4gZWxlbWVudCB3aXRoIGEgcHJvcGVybHktZm9ybWF0dGVkIGBkYCBhdHRyaWJ1dGUgY29udGFpbmluZyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXNzZWQgcG9pbnRzXHJcbiAgZnVuY3Rpb24gZ2V0UGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICAgIGxldCBwb2ludHNTdHJpbmcgPSAnJztcclxuXHJcbiAgICBmb3IobGV0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcclxuICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjbG9zZXBhdGggY29tbWFuZCB0byBhdXRvbWF0aWNhbGx5IGRyYXcgbGluZSBiYWNrIHRvIGluaXRpYWwgcG9pbnRcclxuICAgIHBvaW50c1N0cmluZyArPSAnICcgKyBwb2ludHNbMF1bMF0gKyAnLCcgKyBwb2ludHNbMF1bMV07XHJcblxyXG4gICAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgICBwb2ludHM6IHBvaW50c1N0cmluZ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhdGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhFbDtcclxuICB9IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzLCBjb2xvciA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7ICAgICAgIC8vIHJlZmVyZW5jZSB0byBwYXJlbnQgbm9kZSwgbmVjZXNzYXJ5IGZvciB2ZWluIHRoaWNrZW5pbmcgbGF0ZXJcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAvLyB7dmVjMn0gb2YgdGhpcyBub2RlJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDsgICAgICAgICAvLyB7Ym9vbGVhbn1cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmdcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yOyAgICAgICAgIC8vIGNvbG9yLCB1c3VhbGx5IHBhc3NlZCBkb3duIGZyb20gcGFyZW50XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTsgICAgIC8vIHJlZmVyZW5jZXMgdG8gYWxsIEF1eGluU291cmNlcyBpbmZsdWVuY2luZyB0aGlzIG5vZGUgZWFjaCBmcmFtZVxyXG4gICAgdGhpcy50aGlja25lc3MgPSAwOyAgICAgICAgIC8vIHRoaWNrbmVzcyAtIHRoaXMgaXMgaW5jcmVhc2VkIGR1cmluZyB2ZWluIHRoaWNrZW5pbmcgcHJvY2Vzc1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgLy8gU21vb3RobHkgcmFtcCB1cCBvcGFjaXR5IGJhc2VkIG9uIHZlaW4gdGhpY2tuZXNzXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLnRoaWNrbmVzcyAvIDMgKyAuMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gXCJMaW5lc1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRpcFRoaWNrbmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYodGhpcy5jb2xvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5WZWluVGhpY2tuZXNzICsgdGhpcy50aGlja25lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgLy8gXCJEb3RzXCIgcmVuZGVyIG1vZGVcclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAxICsgdGhpcy50aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBjb2xvciBvciBcInRpcFwiIG5vZGVzXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlc2V0IGdsb2JhbCBvcGFjaXR5IGlmIGl0IHdhcyBjaGFuZ2VkIGR1ZSB0byBvcGFjaXR5IGdyYWRpZW50IGZsYWdcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBub2RlIGluIHRoZSBwcm92aWRlZCBkaXJlY3Rpb24gYW5kIGEgcHJlLWRlZmluZWQgZGlzdGFuY2UgKFNlZ21lbnRMZW5ndGgpXHJcbiAgZ2V0TmV4dE5vZGUoYXZlcmFnZVNvdXJjZURpcmVjdGlvbikge1xyXG4gICAgdGhpcy5pc1RpcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXh0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChhdmVyYWdlU291cmNlRGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc2V0dGluZ3MuU2VnbWVudExlbmd0aCksIHRydWUpO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVpbk5vZGUoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHRoaXMubmV4dFBvc2l0aW9uLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICB0aGlzLmN0eCxcclxuICAgICAgdGhpcy5zZXR0aW5ncyxcclxuICAgICAgdGhpcy5jb2xvclxyXG4gICAgKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgVmVpbk5vZGUgZnJvbSAnLi4vLi4vY29yZS9WZWluTm9kZSc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4uLy4uL2NvcmUvUGF0aCc7XHJcbmltcG9ydCB7IHNldHVwS2V5TGlzdGVuZXJzIH0gZnJvbSAnLi4vLi4vY29yZS9LZXlib2FyZEludGVyYWN0aW9ucyc7XHJcbmltcG9ydCBBdXhpblNvdXJjZSBmcm9tICcuLi8uLi9jb3JlL0F1eGluU291cmNlJztcclxuaW1wb3J0IFNWR0xvYWRlciBmcm9tICcuLi8uLi9jb3JlL1NWR0xvYWRlcic7XHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxuY29uc3QgbGVhZiA9IHJlcXVpcmUoJy4uL3N2Zy9sZWFmLnN2ZycpO1xyXG5jb25zdCBncmFzc0JsYWRlID0gcmVxdWlyZSgnLi4vc3ZnL2dyYXNzLWJsYWRlLnN2ZycpO1xyXG5cclxubGV0IGN1cnJlbnRQYXRoO1xyXG5cclxuY29uc3QgTElORSA9IDA7XHJcbmNvbnN0IFRSSUFOR0xFID0gMTtcclxuY29uc3QgU1FVQVJFID0gMjtcclxuY29uc3QgRElBTU9ORCA9IDM7XHJcbmNvbnN0IENJUkNMRSA9IDQ7XHJcbmNvbnN0IExFQUYgPSA1O1xyXG5sZXQgY3VycmVudFBhdGhTaGFwZSA9IFNRVUFSRTtcclxuXHJcbmxldCB5UG9zaXRpb24gPSAwO1xyXG5cclxuLy8gQ3JlYXRlIGluaXRpYWwgY29uZGl0aW9ucyBmb3Igc2ltdWxhdGlvblxyXG5sZXQgc2V0dXAgPSAoKSA9PiB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBjYW52YXMgYW5kIGNvbnRleHRcclxuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tldGNoJyk7XHJcbiAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgc2ltdWxhdGlvbiBvYmplY3RcclxuICBuZXR3b3JrID0gbmV3IE5ldHdvcmsoY3R4KTtcclxuXHJcbiAgLy8gTG9hZCB0aGUgZGVmaW5lZCBwYXRoXHJcbiAgc2V0dXBQYXRoKCk7XHJcblxyXG4gIC8vIEFkZCB0aGUgYm91bmRzLCBzb3VyY2VzLCBhbmQgcm9vdCBub2Rlc1xyXG4gIHJlc2V0TmV0d29yaygpO1xyXG5cclxuICAvLyBTZXQgdXAgY29tbW9uIGtleWJvYXJkIGludGVyYWN0aW9uIGxpc3RlbmVyc1xyXG4gIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspO1xyXG5cclxuICAvLyBCZWdpbiBhbmltYXRpb24gbG9vcFxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG5sZXQgcmVzZXROZXR3b3JrID0gKCkgPT4ge1xyXG4gIG5ldHdvcmsucmVzZXQoKTtcclxuICBhZGRSb290VmVpbnMoKTtcclxufVxyXG5cclxuICBsZXQgc2V0dXBQYXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aC8yO1xyXG4gICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMjtcclxuICAgIHlQb3NpdGlvbiA9IGN5O1xyXG5cclxuICAgIHN3aXRjaChjdXJyZW50UGF0aFNoYXBlKSB7XHJcbiAgICAgIGNhc2UgTElORTpcclxuICAgICAgICBjdXJyZW50UGF0aCA9IGdldEhvcml6b250YWxMaW5lKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFRSSUFOR0xFOlxyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gZ2V0VHJpYW5nbGVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgU1FVQVJFOlxyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gZ2V0U3F1YXJlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIERJQU1PTkQ6XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBnZXREaWFtb25kQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIENJUkNMRTpcclxuICAgICAgICBjdXJyZW50UGF0aCA9IGdldENpcmNsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMRUFGOlxyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gZ2V0TGVhZkJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGN1cnJlbnRQYXRoU2hhcGUgIT0gTElORSkge1xyXG4gICAgICBjdXJyZW50UGF0aC5pc0NlbnRlcmVkID0gdHJ1ZTtcclxuICAgICAgY3VycmVudFBhdGguc2V0U2NhbGUoLjAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgbGV0IGdldEhvcml6b250YWxMaW5lID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKFxyXG4gICAgICAgIFtcclxuICAgICAgICAgIFtjeCAtIDQwMCwgY3kgKyA0MDBdLFxyXG4gICAgICAgICAgW2N4ICsgNDAwLCBjeSArIDQwMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRUcmlhbmdsZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDIwMDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aC8yLCAwXSxcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLCAzKnNpZGVMZW5ndGgvNF0sXHJcbiAgICAgICAgICBbMCwgMypzaWRlTGVuZ3RoLzRdLFxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgvMiwgMF1cclxuICAgICAgICBdLFxyXG4gICAgICAgICdCb3VuZHMnLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldFNxdWFyZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDIwMDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbMCwgMF0sICAvLyB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLCAwXSwgIC8vIHRvcCByaWdodCBjb3JuZXJcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLCBzaWRlTGVuZ3RoXSwgIC8vIGJvdHRvbSByaWdodCBjb3JuZXJcclxuICAgICAgICAgIFswLCBzaWRlTGVuZ3RoXSwgIC8vIGJvdHRvbSBsZWZ0IGNvcm5lclxyXG4gICAgICAgICAgWzAsIDBdLCAgLy8gdG9wIGxlZnQgY29ybmVyXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0RGlhbW9uZEJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDIwMDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aC8yLCAwXSxcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLCBzaWRlTGVuZ3RoLzJdLFxyXG4gICAgICAgICAgW3NpZGVMZW5ndGgvMiwgc2lkZUxlbmd0aF0sXHJcbiAgICAgICAgICBbMCwgc2lkZUxlbmd0aC8yXSxcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLzIsIDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0Q2lyY2xlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByYWRpdXMgPSAxMDA7XHJcbiAgICAgIGNvbnN0IHJlc29sdXRpb24gPSA1MDtcclxuICAgICAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlc29sdXRpb247IGkrKykge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICAgICAgbGV0IHggPSByYWRpdXMgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICAgICAgbGV0IHkgPSByYWRpdXMgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHBvaW50cy5wdXNoKFtwb2ludHNbMF1bMF0sIHBvaW50c1swXVsxXV0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBQYXRoKHBvaW50cywgJ0JvdW5kcycsIGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldExlYWZCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChTVkdMb2FkZXIubG9hZChsZWFmKVswXSwgJ0JvdW5kcycsIGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldEdyYXNzQmxhZGVCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChTVkdMb2FkZXIubG9hZChncmFzc0JsYWRlKVswXSwgJ0JvdW5kcycsIGN0eCk7XHJcbiAgICB9XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gIGxldCBhZGRSb290VmVpbnMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoLzI7XHJcbiAgICBsZXQgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMjtcclxuXHJcbiAgICBpZihjdXJyZW50UGF0aFNoYXBlID09IExJTkUpIHtcclxuICAgICAgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgbmV0d29yay5hZGRWZWluTm9kZShcclxuICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICBjeCxcclxuICAgICAgICAgIGN5XHJcbiAgICAgICAgKSxcclxuICAgICAgICB0cnVlLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBsZXQgbW92ZVBhdGggPSAoKSA9PiB7XHJcbiAgICBpZighbmV0d29yay5zZXR0aW5ncy5Jc1BhdXNlZCAmJiB5UG9zaXRpb24gPiAtODAwKSB7XHJcbiAgICAgIGN1cnJlbnRQYXRoLm1vdmVCeSgwLC0yKTtcclxuICAgICAgeVBvc2l0aW9uID0gY3VycmVudFBhdGgub3JpZ2luLnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgc2NhbGVQYXRoID0gKCkgPT4ge1xyXG4gICAgaWYoIW5ldHdvcmsuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgY3VycmVudFBhdGguc2V0U2NhbGUoMS4wMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgcm90YXRlUGF0aCA9ICgpID0+IHtcclxuICAgIGlmKCFuZXR3b3JrLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIC8vIFRPRE86IHJvdGF0ZSBwYXRoXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsZXQgZ2VuZXJhdGVTb3VyY2VzT25QYXRoID0gKCkgPT4ge1xyXG4gICAgLy8gbmV0d29yay5zb3VyY2VzID0gY3JlYXRlRXZlbmx5U3BhY2VkU291cmNlcygpO1xyXG4gICAgbmV0d29yay5zb3VyY2VzID0gY3JlYXRlU3ViZGl2aWRlZFNvdXJjZXMoKTtcclxuICB9XHJcblxyXG4gICAgbGV0IGNyZWF0ZUV2ZW5seVNwYWNlZFNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzb3VyY2VzID0gW107XHJcbiAgICAgIGNvbnN0IHNvdXJjZVNwYWNpbmcgPSAxMDtcclxuICAgICAgbGV0IHByZXZpb3VzU2VnbWVudFJlbWFpbmRlciA9IDA7XHJcblxyXG4gICAgICAvLyBGb3IgZWFjaCBwYXRoIHNlZ21lbnQgLi4uXHJcbiAgICAgIGZvcihsZXQgaT0xOyBpPGN1cnJlbnRQYXRoLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHBvaW50MCA9IFZlYzIoY3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uW2ktMV1bMF0sIGN1cnJlbnRQYXRoLnRyYW5zZm9ybWVkUG9seWdvbltpLTFdWzFdKTtcclxuICAgICAgICBjb25zdCBwb2ludDEgPSBWZWMyKGN1cnJlbnRQYXRoLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSwgY3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2VnbWVudExlbmd0aCA9IHBvaW50MS5kaXN0YW5jZShwb2ludDApO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nT2Zmc2V0ID0gc291cmNlU3BhY2luZyAtIHByZXZpb3VzU2VnbWVudFJlbWFpbmRlcjtcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVMZW5ndGggPSBjdXJyZW50U2VnbWVudExlbmd0aCAtIHN0YXJ0aW5nT2Zmc2V0O1xyXG5cclxuICAgICAgICAvLyBXZSBjYW4gZml0IGF0IGxlYXN0IG9uZSBzb3VyY2Ugb250byB0aGlzIHNlZ21lbnRcclxuICAgICAgICBpZihhdmFpbGFibGVMZW5ndGggPj0gc291cmNlU3BhY2luZykge1xyXG4gICAgICAgICAgbGV0IHNlZ21lbnREaXJlY3Rpb24gPSBwb2ludDEuc3VidHJhY3QocG9pbnQwLCB0cnVlKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICAgICAgICAvLyBIb3cgbWFueSBzb3VyY2VzIGNhbiB3ZSBmaXQgb250byB0aGlzIHNlZ21lbnQ/XHJcbiAgICAgICAgICBjb25zdCBudW1Tb3VyY2VzID0gTWF0aC5mbG9vcihhdmFpbGFibGVMZW5ndGggLyBzb3VyY2VTcGFjaW5nKTtcclxuXHJcbiAgICAgICAgICAvLyBDcmVhdGUgYXMgbWFueSBhdXhpbiBzb3VyY2VzIGFzIHdlIGNhblxyXG4gICAgICAgICAgZm9yKGxldCBzb3VyY2VJbmRleD0wOyBzb3VyY2VJbmRleDw9bnVtU291cmNlczsgc291cmNlSW5kZXgrKykge1xyXG4gICAgICAgICAgICBzb3VyY2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgICAgICAgcG9pbnQwLmFkZChzZWdtZW50RGlyZWN0aW9uLm11bHRpcGx5KHNvdXJjZVNwYWNpbmcgKiBzb3VyY2VJbmRleCArIHN0YXJ0aW5nT2Zmc2V0LCB0cnVlKSwgdHJ1ZSksXHJcbiAgICAgICAgICAgICAgICBjdHhcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gU3RvcmUgcmVtYWluZGVyIG9mIHNlZ21lbnQgbGVuZ3RoIHRvIG9mZnNldCBuZXh0IHNlZ21lbnQncyBzb3VyY2UgcGxhY2VtZW50XHJcbiAgICAgICAgICBwcmV2aW91c1NlZ21lbnRSZW1haW5kZXIgPSBhdmFpbGFibGVMZW5ndGggLSAobnVtU291cmNlcyAqIHNvdXJjZVNwYWNpbmcpO1xyXG5cclxuICAgICAgICAvLyBDYW4ndCBmaXQgYW55IHNvdXJjZXMgb250byB0aGlzIHNlZ21lbnQsIHNvIGFjY3VtdWxhdGUgdGhlIGxlbmd0aCAocHJldmlvdXMgc2VnbWVudHMgbWlnaHQndmUgYWxzbyBiZWVuIHRvbyBzaG9ydClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJldmlvdXNTZWdtZW50UmVtYWluZGVyICs9IGN1cnJlbnRTZWdtZW50TGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNyZWF0ZVN1YmRpdmlkZWRTb3VyY2VzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgc291cmNlcyA9IFtdO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIHNvdXJjZXMgYXQgZWFjaCB2ZXJ0ZXhcclxuICAgICAgZm9yKGxldCBpPTA7IGk8Y3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc291cmNlcy5wdXNoKFxyXG4gICAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICBjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBuZXdTb3VyY2VzID0gW107XHJcblxyXG4gICAgICAvLyBSZWN1cnNpdmVseSBzdWJkaXZpZGUgc2VnbWVudHNcclxuICAgICAgZm9yKGxldCBpPTE7IGk8c291cmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHBvaW50MCA9IHNvdXJjZXNbaS0xXS5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBwb2ludDEgPSBzb3VyY2VzW2ldLnBvc2l0aW9uO1xyXG4gICAgICAgIHN1YmRpdmlkZVNlZ21lbnQocG9pbnQwLCBwb2ludDEsIGksIG5ld1NvdXJjZXMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZXZlcnNlIHRoZSBuZXcgc291cmNlcyBsaXN0IHNvIHRoYXQgaW5kaWNlcyBkb24ndCBzaGlmdCBhcyB0aGV5IGFyZSBpbnNlcnRlZFxyXG4gICAgICBuZXdTb3VyY2VzLnNvcnQoKGEsYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmluZGV4IC0gYS5pbmRleDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBJbmplY3QgYWxsIHRoZSBuZXcgc291cmNlc1xyXG4gICAgICBmb3IobGV0IG5ld1NvdXJjZSBvZiBuZXdTb3VyY2VzKSB7XHJcbiAgICAgICAgc291cmNlcy5zcGxpY2UobmV3U291cmNlLmluZGV4LCAwLCBuZXdTb3VyY2Uuc291cmNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHNvdXJjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgICAvLyBTcGxpdCBhIHNlZ21lbnQgKGRlZmluZWQgYnkgdHdvIGlucHV0IHBvaW50cykgYnkgcGxhY2luZyBhIHNvdXJjZSBhdCBpdCdzIG1pZHBvaW50XHJcbiAgICAgIGxldCBzdWJkaXZpZGVTZWdtZW50ID0gKHBvaW50MCwgcG9pbnQxLCBvcmlnaW5hbEluZGV4LCBuZXdTb3VyY2VzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IHBvaW50MS5kaXN0YW5jZShwb2ludDApO1xyXG5cclxuICAgICAgICAvLyBPbmx5IHN1YmRpdmlkZSB0aGUgc2VnbWVudCBpZiBpdHMgbG9uZyBlbm91Z2ggKHRlcm1pbmF0ZXMgcmVjdXJzaW9uIGluIHNob3J0IHNlZ21lbnRzKVxyXG4gICAgICAgIGlmKHNlZ21lbnRMZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgbGV0IG1pZHBvaW50U291cmNlID0gZ2V0TWlkcG9pbnRTb3VyY2UocG9pbnQwLCBwb2ludDEsIHNlZ21lbnRMZW5ndGgpO1xyXG4gICAgICAgICAgbmV3U291cmNlcy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IG9yaWdpbmFsSW5kZXgsXHJcbiAgICAgICAgICAgIHNvdXJjZTogbWlkcG9pbnRTb3VyY2VcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHN1YmRpdmlkZSB0aGUgbmV3IHNlZ21lbnRzXHJcbiAgICAgICAgICBzdWJkaXZpZGVTZWdtZW50KHBvaW50MCwgbWlkcG9pbnRTb3VyY2UucG9zaXRpb24sIG9yaWdpbmFsSW5kZXgsIG5ld1NvdXJjZXMpOyAvLyBzdWJkaXZpZGUgdGhlIGxlZnQgc2VnbWVudFxyXG4gICAgICAgICAgc3ViZGl2aWRlU2VnbWVudChtaWRwb2ludFNvdXJjZS5wb3NpdGlvbiwgcG9pbnQxLCBvcmlnaW5hbEluZGV4LCBuZXdTb3VyY2VzKTsgLy8gc3ViZGl2aWRlIHRoZSByaWdodCBzZWdtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBzb3VyY2UgZXhhY3RseSBoYWxmd2F5IGJldHdlZW4gdHdvIG90aGVyc1xyXG4gICAgICBsZXQgZ2V0TWlkcG9pbnRTb3VyY2UgPSAocG9pbnQwLCBwb2ludDEsIHNlZ21lbnRMZW5ndGgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWdtZW50RGlyZWN0aW9uID0gcG9pbnQxLnN1YnRyYWN0KHBvaW50MCwgdHJ1ZSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICBwb2ludDAuYWRkKHNlZ21lbnREaXJlY3Rpb24ubXVsdGlwbHkoc2VnbWVudExlbmd0aC8yLCB0cnVlKSwgdHJ1ZSksXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4vLyBNYWluIHByb2dyYW0gbG9vcFxyXG5sZXQgdXBkYXRlID0gKHRpbWVzdGFtcCkgPT4ge1xyXG4gIGlmKCFuZXR3b3JrLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICBpZihjdXJyZW50UGF0aFNoYXBlID09IExJTkUpIHtcclxuICAgICAgbW92ZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihjdXJyZW50UGF0aFNoYXBlICE9IExJTkUpIHtcclxuICAgICAgc2NhbGVQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVTb3VyY2VzT25QYXRoKCk7XHJcblxyXG4gICAgbmV0d29yay51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG4gIGN1cnJlbnRQYXRoLmRyYXcoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxuLy8gS2V5IGNvbW1hbmRzIHNwZWNpZmljIHRvIHRoaXMgc2tldGNoXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBzd2l0Y2goZS5rZXkpIHtcclxuICAgIC8vIHIgPSByZXNldCBzaW11bGF0aW9uIGJ5IHJlaW5pdGlhbGl6aW5nIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgICBjYXNlICdyJzpcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzEnOlxyXG4gICAgICBjdXJyZW50UGF0aFNoYXBlID0gTElORTtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcyJzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IFRSSUFOR0xFO1xyXG4gICAgICBzZXR1cFBhdGgoKTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzMnOlxyXG4gICAgICBjdXJyZW50UGF0aFNoYXBlID0gU1FVQVJFO1xyXG4gICAgICBzZXR1cFBhdGgoKTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzQnOlxyXG4gICAgICBjdXJyZW50UGF0aFNoYXBlID0gRElBTU9ORDtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICc1JzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IENJUkNMRTtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICc2JzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IExFQUY7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEtpY2sgb2ZmIHRoZSBhcHBsaWNhdGlvblxyXG5zZXR1cCgpOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zOmRjPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xL1xcXCIgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCIgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIiB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCIgeG1sbnM6aW5rc2NhcGU9XFxcImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcInN2ZzM2XFxcIiBzb2RpcG9kaTpkb2NuYW1lPVxcXCJncmFzcy1ibGFkZS5zdmdcXFwiIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSlcXFwiPjxnIGlua3NjYXBlOmdyb3VwbW9kZT1cXFwibGF5ZXJcXFwiIGlua3NjYXBlOmxhYmVsPVxcXCIwXFxcIiBpZD1cXFwiZzM0XFxcIj48cGF0aCBpZD1cXFwicGF0aDMyXFxcIiBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDowLjk2MjE5MDA5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lXFxcIiBkPVxcXCJNIDQ0MS45NTc1Miw2MS40NTczNjEgNDQxLjcxNzI3LDYxLjExMjQxNCA0NDEuMzk5ODMsNjAuODY2MDI4IDQ0MS4wMzA5Miw2MC43MTgxOTUgNDQwLjYzNjI4LDYwLjY2ODkxNCA0NDAuMjQxNjUsNjAuNzE4MTk1IDQzOS44NzI3NCw2MC44NjYwMjggNDM5LjU1NTMsNjEuMTEyNDE0IDQzOS4zMTUwNSw2MS40NTczNjEgTSA0NjcuODUzNCwxNzIuMzg2MTUgNDY3LjQ0MDcsMTU4LjA2MzY0IDQ2Ni4yMDcyLDE0My44MTIxOSA0NjQuMTU5ODQsMTI5LjY2MTQ2IDQ2MS4zMDU1NSwxMTUuNjQxMTUgNDU3LjY1MTI0LDEwMS43ODA5IDQ1My4yMDM4NSw4OC4xMTA0MiA0NDcuOTcwMyw3NC42NTkzNDQgNDQxLjk1NzUyLDYxLjQ1NzM2MSBNIDQzOS4zMTUwNSw2MS40NTczNjEgNDMzLjMwMjI3LDc0LjY1OTM0NCA0MjguMDY4NzIsODguMTEwNDIgNDIzLjYyMTMzLDEwMS43ODA5IDQxOS45NjcwMiwxMTUuNjQxMTUgNDE3LjExMjczLDEyOS42NjE0NiA0MTUuMDY1MzcsMTQzLjgxMjE5IDQxMy44MzE4NywxNTguMDYzNjQgNDEzLjQxOTE3LDE3Mi4zODYxNSBNIDQ2Ny44NTM0LDg1NC42MDA1IEggNDYxLjA0OTEyIDQ1NC4yNDQ4NCA0NDcuNDQwNTYgNDQwLjYzNjI5IDQzMy44MzIwMSA0MjcuMDI3NzMgNDIwLjIyMzQ1IDQxMy40MTkxNyBNIDQ2Ny44NTM0LDE3Mi4zODYxNSBWIDI1Ny42NjI5NCAzNDIuOTM5NzQgNDI4LjIxNjUzIDUxMy40OTMzMyA1OTguNzcwMTIgNjg0LjA0NjkxIDc2OS4zMjM3IDg1NC42MDA1IE0gNDEzLjQxOTE3LDg1NC42MDA1IFYgNzY5LjMyMzcgNjg0LjA0NjkxIDU5OC43NzAxMiA1MTMuNDkzMzMgNDI4LjIxNjUzIDM0Mi45Mzk3NCAyNTcuNjYyOTQgMTcyLjM4NjE1XFxcIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY1xcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zOmRjPVxcXCJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xL1xcXCIgeG1sbnM6Y2M9XFxcImh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1xcXCIgeG1sbnM6cmRmPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjXFxcIiB4bWxuczpzdmc9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnNvZGlwb2RpPVxcXCJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZFxcXCIgeG1sbnM6aW5rc2NhcGU9XFxcImh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGVcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgdmlld0JveD1cXFwiMCAwIDc3Mi44MjQ3MiA3NjkuNTc0MzlcXFwiIGlkPVxcXCJzdmcyXFxcIiBzb2RpcG9kaTpkb2NuYW1lPVxcXCJsZWFmLnN2Z1xcXCIgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKVxcXCI+PGcgaWQ9XFxcImxheWVyMVxcXCI+PHBhdGggaWQ9XFxcInBhdGgzMTgzXFxcIiBkPVxcXCJNIDM3Ni40MTQ4NSw3NjYuOTIxOTIgMzc2LjY0NzAxLDc2Ni4wNjIxNiAzNzcuMjc5MTIsNzY0LjMwMDI0IDM3OC4yMTQ2Myw3NjEuODkyOTEgMzc5LjM1Njk5LDc1OS4wOTY4OSAzODAuNzgxOTIsNzU0LjQwNTI1IDM4MS4xNDUzMiw3NDguMTM3NTQgMzgwLjM5NDg4LDczOC4wODgyMyAzNzguNDc4MzIsNzIyLjA1MTc4IDM3Ni44MjIyNiw3MDcuNjUyMzQgMzc1LjEzNzU5LDY5MC42MjU2MiAzNzMuNjIxNDQsNjczLjA5OTU2IDM3Mi40NzA5Myw2NTcuMjAyMTEgMzcxLjUxMzE0LDY0My40OTU4NSAzNzAuNTIxNjYsNjMxLjkzNjQgMzY5LjYxMzQ1LDYyMy43NDA3NSAzNjguOTA1NTEsNjIwLjEyNTkxIDM2Ny4wNjE5Myw2MTkuMjI4NTcgMzYyLjkwNjQ4LDYxOC43NzMzNyAzNTYuNDI4MTEsNjE4Ljc1OTg0IDM0Ny42MTU3Niw2MTkuMTg3NDkgMjk5Ljc2MDcsNjIyLjUwMDM0IDI3MC4wNTU0MSw2MjUuNTE1MzQgMjQ5LjAxOTc1LDYyOS41NDk1MyAyMjcuMTczNTYsNjM1LjkxOTk3IDIxNy4yNjY5Myw2MzguNjg3MzEgMjA3LjM4OTM2LDY0MC41ODE2OCAxOTUuOTMwNDIsNjQxLjg0MTExIDE4MS4yNzk2Niw2NDIuNzAzNjMgMTcwLjAxMTEzLDY0My4wNzg1NiAxNjAuMjMwNjQsNjQzLjE3MzU2IDE1Mi45ODY2MSw2NDIuOTkzODQgMTQ5LjMyNzQyLDY0Mi41NDQ2NSAxNDcuNTgxOTksNjQxLjU4NDQgMTQ3LjM1NDE0LDY0MC4yNDYwNiAxNDguODE4NTEsNjM4LjAyNzM5IDE1Mi4xNDk3NSw2MzQuNDI2MTEgMTU3LjM5MTMsNjI3LjkzOTUzIDE2MC43NzI5NCw2MjEuNDQzNDUgMTYyLjA4MjgxLDYxNS40OTk2MSAxNjEuMTA5MDIsNjEwLjY2OTczIDE1NS4wMTg1OCw2MDQuOTQxNiAxNDMuMDU3NDksNTk4Ljc0NDg1IDEyNi4wNjQ0Miw1OTIuNDQxMzcgMTA0Ljg3ODA2LDU4Ni4zOTMwOCA5My4wNTY3ODMsNTgzLjMwMTgzIDgzLjA4Nzk5Myw1ODAuNDg2NSA3Ni4wMjA0OTMsNTc4LjI1NzY4IDcyLjkwMzAzMyw1NzYuOTI1OTcgNzIuOTQxOTkzLDU3NS4yNzM5IDc0LjcwMzEyMyw1NzIuMTk3NzkgNzguMDI1NjYzLDU2Ny45Mjk4OCA4Mi43NDg4MzMsNTYyLjcwMjQxIDg5LjQ4OTcxMyw1NTUuMjQ3NzkgOTMuMjQ0NTIzLDU0OS42OTM4NyA5NC43MDQ0OTMsNTQ0LjYzMzYxIDk0LjU2MDkwMyw1MzguNjU5OTggOTIuMDQ3MjYzLDUzMi4wOTg0MyA4NS4zNzU0NzMsNTI0LjM4OTMxIDczLjkyNjgxMyw1MTQuOTQ3MDUgNTcuMDgyNTgzLDUwMy4xODYwNiA0Ni42NjY0NzMsNDk2LjE0NjMzIDM4LjEzNjU4Myw0OTAuMTQ5MzggMzIuMzczMTMzLDQ4NS44MzA0NyAzMC4yNTYzODMsNDgzLjgyNDg1IDMxLjMyMjQxMyw0ODIuNzcyMDQgMzQuMjI0OTczLDQ4MS4wNDczMSAzOC41MjA3NjMsNDc4Ljg4OTcxIDQzLjc2NjQ4Myw0NzYuNTM4MzMgNTguNjU3ODMzLDQ2OS4yMTk3NSA2Ni4xMTU1ODMsNDYxLjgwNjYxIDY3LjM1ODI4Myw0NTEuODY4OTYgNjMuNjA0NDQzLDQzNi45NzY4MyA1OC43OTMxNTMsNDIxLjA3NjIxIDUzLjg1OTE0Myw0MDMuMjYwMzMgNDkuNTk5OTQzLDM4Ni41MjY2IDQ2LjgxMzA5MywzNzMuODcyNDYgNDIuNjA0NjkzLDM1NS4zMDQxNyAzNi4zOTA2MzMsMzMyLjAzMjczIDI5Ljg5MTc2MywzMTAuMTY4MzIgMjQuODI4OTU5LDI5NS44MjExMiAyMi4yNDYxMywyOTAuODIzNjIgMTguNjk2NDE2LDI4NS4xMTU5NiAxNC42NDc3NTQsMjc5LjQwMTY1IDEwLjU2ODA3OSwyNzQuMzg0MjEgNi45MjI2OTk0LDI3MC4wMjAwNCA0LjA1NjUwNTQsMjY2LjA4NTczIDIuMjU2ODA1NCwyNjMuMDEyNzggMS44MTA5MDk0LDI2MS4yMzI3IDIwLjY2MzEzMSwyNTguMjQ5NiA2MS4wODgxNjMsMjYxLjgxNzQxIDEwNS44NDg4MiwyNjkuNjMyODIgMTM3LjcwNzkyLDI3OS4zOTI1MSAxNDMuMDQzMTYsMjgxLjk1NTg1IDE0OS44NDM5NywyODUuMDIwMTEgMTU3LjIzNjE0LDI4OC4yMDA3NSAxNjQuMzQ1NDksMjkxLjExMzE3IDE3MS42MDQyOSwyOTQuMjcxNjUgMTc5LjQwMTk2LDI5OC4xMjIyMSAxODYuODAyMzUsMzAyLjE3Nzk1IDE5Mi44NjkzMSwzMDUuOTUxOTQgMjEwLjk3MTQxLDMxNy4wODQxNSAyMjIuNjY3MzksMzIwLjgwMTM5IDIyOS4zMjEwMiwzMTcuMTA1MTkgMjMyLjI5NjA3LDMwNS45OTcxMyAyMzQuMTAwNzcsMjk0LjA2NDI4IDIzNi45MTQzNywyODEuNjcxNjYgMjQwLjUxNzI1LDI2OS42NTQ3OSAyNDQuNjg5NzcsMjU4Ljg0OTE5IDI0Ni44NTUxMSwyNTIuOTYyNzkgMjQ5LjM1OTc2LDI0NC42MDkyNSAyNTEuODkzNDUsMjM0LjkwMTAzIDI1NC4xNDU4OSwyMjQuOTUwNTkgMjU2LjU4MzgsMjEyLjQzMDMzIDI1Ny43MTI1MywyMDMuOTg3OTkgMjU3LjY2MjgzLDE5Ny44NTgwMyAyNTYuNTY1NDcsMTkyLjI3NDk1IDI1NC4yMzI5MSwxODEuODUzOTIgMjU1LjI5NzksMTc3LjU0NzgyIDI2MC45MDE0NiwxNzguODQxMTMgMjcyLjE4NDY1LDE4NS4yMTgzMSAyODEuODg1MjYsMTkwLjQ0MzMxIDI5MC42MDk1NywxOTQuMDA2NTcgMjk3LjM3MTA1LDE5NS41ODA4NyAzMDEuMTgzMTQsMTk0LjgzOTAxIDMwMS40NzU0LDE5My42NzIzMyAzMDEuMzMwOTUsMTkxLjQzNTkzIDMwMC43OTE4NywxODguNDUxMzMgMjk5LjkwMDIyLDE4NS4wNDAwNSAyOTguNzExMTgsMTc5LjY5NjY1IDI5OS4wNTIzNiwxNzMuODg4NCAzMDEuNDA1MTQsMTY0Ljk4NyAzMDYuMjUwODcsMTUwLjM2NDE1IDMxMC4yMzc1MiwxMzkuNDU2MzMgMzE0LjQ5NDg0LDEyOS4xMzA1MiAzMTguNTE4ODYsMTIwLjUzODAyIDMyMS44MDU1OSwxMTQuODMwMTEgMzI4LjM0ODE2LDEwNS4xMjE2MyAzMzYuMjQ4MDcsOTIuNDg0NTU4IDM0NS45MjAxMSw3Ni4yMzcwNDggMzU3Ljc3OTA2LDU1LjY5NzIyOCAzNzEuNTQzMzMsMzIuNzM1NzM3IDM4My4yNzM1MSwxNS40NTE0NTMgMzkyLjQ0MDY1LDQuNTU3NzQ2MSAzOTguNTE1ODMsMC43Njc5ODQxMSAzOTkuNzI1MjEsMS40NTQ4MjkxIDQwMC41MjQ4MywzLjYxNTI2MjEgNDAwLjk0NTQ3LDcuMzk5MTI1MSA0MDEuMDE3OTEsMTIuOTU2MjY0IDQwMS4yMjg2MSwxOC42NDI2NzYgNDAxLjkyOTA4LDI1LjExNTM0NSA0MDMuMDA5NjcsMzEuNTc3NjM3IDQwNC4zNjA3MSwzNy4yMzI5MTQgNDEwLjk0MzY4LDU0Ljc1ODI0OCA0MjEuMjM4NDUsNzYuNDM0MDc4IDQzMy42MDc2LDk5LjA2MDExOCA0NDYuNDEzNzEsMTE5LjQzNjA5IDQ1NC45MTg2MSwxMzEuNTY4NjQgNDYwLjM2NTg0LDEzOC4yNjcwNyA0NjQuMzE5NTcsMTQxLjEyMDY3IDQ2OC4zNDM5NSwxNDEuNzE4NyA0NzEuMzA4ODQsMTQxLjQ0NzI4IDQ3NC40NzQ2MiwxNDAuNzA4MjUgNDc3LjQ2MjMzLDEzOS42MTQ1IDQ3OS44OTI5OCwxMzguMjc4ODkgNDgyLjY2MzAxLDEzNi40NzM0MiA0ODQuNDYzODQsMTM1Ljg5MDI3IDQ4NS44NjUxOCwxMzYuNTQxNTkgNDg3LjQzNjczLDEzOC40Mzk1MyA0ODguNjA2NzMsMTQxLjcyODk5IDQ4OS43NDYxMywxNDguMDAyODQgNDkwLjc1OTQ1LDE1Ni42MDE2MyA0OTEuNTUxMjQsMTY2Ljg2NTkzIDQ5Mi40Nzc1MiwxNzkuNjA1ODYgNDkzLjYwNDIsMTg4LjE4OTI4IDQ5NS4xODcyOCwxOTMuOTczNjcgNDk3LjQ4Mjc3LDE5OC4zMTY1NSA1MDQuNTYyOTEsMjA5LjQ4ODE5IDUxMC4wMjExMiwyMTkuNjI0MjcgNTE0LjE0OTQ4LDIyOS4zMjkwMyA1MTcuMjQwMDksMjM5LjIwNjcgNTE4LjkwODQzLDI0NS4wNjY2MiA1MjAuNjM2MjcsMjUwLjMwMTE0IDUyMi4yMTk3LDI1NC4zMzkyIDUyMy40NTQ3NywyNTYuNjA5NzMgNTI0Ljc4NzYsMjU5LjAxNzY2IDUyNi42MzcwOSwyNjMuNDI5NyA1MjguNzU4NjYsMjY5LjIxNzY5IDUzMC45MDc3MywyNzUuNzUzNSA1MzMuMzkzMjcsMjg0Ljc4NjQzIDUzNC45ODQyMywyOTMuNTM5MzMgNTM1Ljg2NzQyLDMwMy40MTkyNCA1MzYuMjI5NjUsMzE1LjgzMzE5IDUzNy4wODcxNywzMzkuMzE0MTIgNTQwLjA5MDUxLDM1MC42MzMyIDU0Ni45MzkyOCwzNTEuOTc0NDYgNTU5LjMzMzA5LDM0NS41MjE5MyA1NjQuOTg5NDUsMzQyLjE2MTUzIDU3MC44MTE5NiwzMzguODY5NzEgNTc2LjExNTM4LDMzNi4wMjQ0MiA1ODAuMjE0NSwzMzQuMDAzNTggNTg0LjIxOTk0LDMzMi4wNTExIDU4OS4yNjc3NywzMjkuMzkxOTUgNTk0LjcxMTg3LDMyNi4zNzU2MyA1OTkuOTA2MTEsMzIzLjM1MTY2IDYxMC45OTA2OCwzMTcuNjEzNTYgNjI0LjgxNjcsMzEyLjAzOTIyIDY0MS4zMDY5NiwzMDYuNjU2NjcgNjYwLjM4NDI0LDMwMS40OTM5NyA3MDcuMTE0ODUsMjg5LjcwMjU0IDczNy4zNjcyOCwyODEuMzk5NzQgNzU2LjcyMjM3LDI3NC45MjMzMiA3NzAuNzYwOTMsMjY4LjYxMTA0IDc3MS4zNjQ1NCwyNjguOTAzNDkgNzcxLjg1ODg1LDI3MC4yODg3NiA3NzIuMTkyODYsMjcyLjU0Mjc0IDc3Mi4zMTU1MywyNzUuNDQxMzQgNzcxLjY0Mzk3LDI4MC4wODc3NCA3NjkuNjcyODgsMjg2LjUzNzY5IDc2Ni40Njc2NywyOTQuNjA3NzMgNzYyLjA5MzczLDMwNC4xMTQ0IDc1Ny42MTU1MSwzMTMuODQwMzUgNzUyLjk3ODc2LDMyNC43NjMzNCA3NDguNzMwNjEsMzM1LjU0NjU3IDc0NS40MTgyMywzNDQuODUzMjQgNzM5Ljg5NDgyLDM2MS4wODY4NCA3MzMuNzA2NSwzNzcuOTk0NzUgNzI2LjQyNTQ5LDM5Ni43MDgzMiA3MTcuNjI0MDMsNDE4LjM1ODkzIDcxMy4xMTA4Miw0MjguNTg0IDcwOC44MDMxNyw0MzYuNzE3MTYgNzA0LjMxMjMyLDQ0My40MTM2MyA2OTkuMjQ5NDgsNDQ5LjMyODY1IDY5NS40MjY1Myw0NTMuNDQyODMgNjkyLjI5NTg3LDQ1Ny4wMTU2OSA2OTAuMTgwNTcsNDU5LjY2NDExIDY4OS40MDM2Nyw0NjEuMDA0OTUgNjg5LjcwMjc3LDQ2MS44MDIyMiA2OTAuNTE3MTUsNDYyLjk3MDQ2IDY5MS43MjI0Miw0NjQuMzUyNjMgNjkzLjE5NDIsNDY1Ljc5MTY4IDY5NS42NDQ3OSw0NjcuMzQ1MjIgNjk5LjExMjA4LDQ2OC40MTEzOSA3MDMuNzY2MDIsNDY5LjAyNTMzIDcwOS43NzY2MSw0NjkuMjIyMTcgNzE0Ljc0MzQ1LDQ2OS4zMTIwNyA3MTguODEwODcsNDY5LjU1Njg1IDcyMS41NTkxMyw0NjkuOTE5MTIgNzIyLjU2ODQ5LDQ3MC4zNjE1IDcyMS4zMDEwOSw0NzQuMTE1OTcgNzE3Ljk5ODk1LDQ3OS44ODg4IDcxMy40MTIxNyw0ODYuNTAyMzIgNzA4LjI5MDgzLDQ5Mi43Nzg4NSA2OTYuNzg1OTMsNTA2LjQyNzI2IDY4NC45NTQwNyw1MjEuNzQ2ODcgNjc1LjM0MTIsNTM1LjMwOTQ4IDY3MC40OTMyOSw1NDMuNjg2ODYgNjY5LjY2OTg1LDU0Ni42NzExOCA2NjkuNDE3MTMsNTQ5LjMyMzQ4IDY2OS43MzYyOCw1NTEuNzMxNjMgNjcwLjYyODQ0LDU1My45ODM1IDY3NC43MDYzNSw1NTguNjgxMDQgNjgxLjY2MzcyLDU2NC4xMDgyIDY4OS45ODE1Myw1NjkuMjE3MjkgNjk4LjE0MDczLDU3Mi45NjA2MiA3MDEuMjExNTIsNTc0LjI0MTA1IDcwMy44Nzk3LDU3NS42ODk1NCA3MDUuODU5MDQsNTc3LjEyODI0IDcwNi44NjMyOSw1NzguMzc5MzQgNzA2LjI3MDQsNTgwLjg2MjkzIDcwMy43MjY0NCw1ODMuODM0NzcgNzAwLjI5MDIzLDU4Ni4zMjczNiA2OTcuMDIwNTksNTg3LjM3MzIyIDY5NC40MDcyOCw1ODguMTk0NDMgNjg4LjY0MDQzLDU5MC40MzA0IDY4MC41NzIxNiw1OTMuNzM5NjYgNjcxLjA1NDYxLDU5Ny43ODA3NiA2NDIuNjU2MDMsNjEwLjUyODc1IDYyNS40OTE1OSw2MTkuODIyMTMgNjE3LjA0MTA3LDYyNy4zMTIwNSA2MTQuNzg0MjcsNjM0LjY0OTY4IDYxNi41OTczMyw2NDEuMDQzOTIgNjIxLjM2NTQ0LDY0OS4xMzkgNjI4LjA4MTk2LDY1Ny40OTI5NSA2MzUuNzQwMjksNjY0LjY2Mzg0IDYzOC4yMDkzNSw2NjYuODYxMiA2MzkuOTgyMjIsNjY4Ljk3NzU1IDY0MC45MTEzNCw2NzAuNzk3OTEgNjQwLjg0OTEyLDY3Mi4xMDcyNyA2MjguMjAwMTcsNjc0LjA2Mjg3IDYwMC43ODk0MSw2NzMuNzk5MjkgNTY4LjQ5NjU0LDY3MS43MDY0NyA1NDEuMjAxMjYsNjY4LjE3NDM0IDUxNi43OTc5NCw2NjMuMzQwNjEgNDk5LjU3ODYzLDY1OS40OTEyOCA0ODcuMzMyODgsNjU2LjA4MTc0IDQ3Ny44NTAyMyw2NTIuNTY3MzkgNDcwLjc2MSw2NDkuODM4NTMgNDYxLjMyMjE4LDY0Ni41OTE2MSA0NTAuNzY1MzcsNjQzLjIzMzM3IDQ0MC4zMjIxNiw2NDAuMTcwNTggNDI5Ljk5ODY1LDYzNy4xMjcyOCA0MTkuNzY4OTEsNjMzLjgyMjExIDQxMC44MTQxMyw2MzAuNjUzNzQgNDA0LjMxNTUzLDYyOC4wMjA4NiAzOTkuMzM2ODEsNjI1LjkxOTY0IDM5NC41MTg3OSw2MjQuMTk4OSAzOTAuNDExMTYsNjIzLjAzNjIyIDM4Ny41NjM1Niw2MjIuNjA5MTkgMzg0LjgzNzM1LDYyMi45MDMxNCAzODMuMzU5NCw2MjQuNDExMTUgMzgyLjc1MDYzLDYyOC4wNzI0NSAzODIuNjMxOTUsNjM0LjgyNjI4IDM4My4yODA0Myw2NTAuOTc0NzQgMzg1LjA4MjEsNjcxLjAyNDI5IDM4Ny44MjEzNiw2OTIuOTgwNDcgMzkxLjI4MjU4LDcxNC44NDg4NiAzOTUuMDcwNTMsNzM3LjQzODIxIDM5Ni42NzkwMSw3NTEuMzcyOTEgMzk2LjI0ODQ4LDc1OS4yNTQzOCAzOTMuOTE5MzksNzYzLjY4NDA2IDM4OS44OTMzNiw3NjYuMDEyMDQgMzg0LjAxOTA3LDc2Ny42MjYyNyAzNzguNzE4NDIsNzY4LjA3ODgyIDM3Ni40MTMzNCw3NjYuOTIxNzcgMzc2LjQxMzcyLDc2Ni45MjE4MSAzNzYuNDE0MSw3NjYuOTIxODQgMzc2LjQxNDQ3LDc2Ni45MjE4OCAzNzYuNDE0ODUsNzY2LjkyMTkyXFxcIiBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjkzMTM4NDA5O3N0cm9rZS1vcGFjaXR5OjFcXFwiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiIHNvZGlwb2RpOm5vZGV0eXBlcz1cXFwiY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYixjLGQpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixiKSxlLnJlc3BvbnNlVHlwZT1cImJsb2JcIixlLm9ubG9hZD1mdW5jdGlvbigpe2EoZS5yZXNwb25zZSxjLGQpfSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGUuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGEsYixkLGUpe2lmKGU9ZXx8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGUmJihlLmRvY3VtZW50LnRpdGxlPWUuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYSlyZXR1cm4gYyhhLGIsZCk7dmFyIGc9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWEudHlwZSxoPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGk9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChpfHxnJiZoKSYmXCJvYmplY3RcIj09dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBqPW5ldyBGaWxlUmVhZGVyO2oub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ai5yZXN1bHQ7YT1pP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGU/ZS5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxlPW51bGx9LGoucmVhZEFzRGF0YVVSTChhKX1lbHNle3ZhciBrPWYuVVJMfHxmLndlYmtpdFVSTCxsPWsuY3JlYXRlT2JqZWN0VVJMKGEpO2U/ZS5sb2NhdGlvbj1sOmxvY2F0aW9uLmhyZWY9bCxlPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2sucmV2b2tlT2JqZWN0VVJMKGwpfSw0RTQpfX0pO2Yuc2F2ZUFzPWEuc2F2ZUFzPWEsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWEpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXG5pbXBvcnQgc29ydCBmcm9tICcuL3NvcnQnO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHdpdGhpbiBmcm9tICcuL3dpdGhpbic7XG5cbmNvbnN0IGRlZmF1bHRHZXRYID0gcCA9PiBwWzBdO1xuY29uc3QgZGVmYXVsdEdldFkgPSBwID0+IHBbMV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtEQnVzaCB7XG4gICAgY29uc3RydWN0b3IocG9pbnRzLCBnZXRYID0gZGVmYXVsdEdldFgsIGdldFkgPSBkZWZhdWx0R2V0WSwgbm9kZVNpemUgPSA2NCwgQXJyYXlUeXBlID0gRmxvYXQ2NEFycmF5KSB7XG4gICAgICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG5cbiAgICAgICAgY29uc3QgSW5kZXhBcnJheVR5cGUgPSBwb2ludHMubGVuZ3RoIDwgNjU1MzYgPyBVaW50MTZBcnJheSA6IFVpbnQzMkFycmF5O1xuXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuaWRzID0gbmV3IEluZGV4QXJyYXlUeXBlKHBvaW50cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZHNbaV0gPSBpO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpXSA9IGdldFgocG9pbnRzW2ldKTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaSArIDFdID0gZ2V0WShwb2ludHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIDAsIGlkcy5sZW5ndGggLSAxLCAwKTtcbiAgICB9XG5cbiAgICByYW5nZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiByYW5nZSh0aGlzLmlkcywgdGhpcy5jb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIHRoaXMubm9kZVNpemUpO1xuICAgIH1cblxuICAgIHdpdGhpbih4LCB5LCByKSB7XG4gICAgICAgIHJldHVybiB3aXRoaW4odGhpcy5pZHMsIHRoaXMuY29vcmRzLCB4LCB5LCByLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKGlkcywgY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWluWCA8PSB4IDogbWluWSA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1heFggPj0geCA6IG1heFkgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbSA9IChsZWZ0ICsgcmlnaHQpID4+IDE7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICAgICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbmV3TGVmdCwgbmV3UmlnaHQsIGluYyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ID0gY29vcmRzWzIgKiBrICsgaW5jXTtcbiAgICAgICAgbGV0IGkgPSBsZWZ0O1xuICAgICAgICBsZXQgaiA9IHJpZ2h0O1xuXG4gICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBrKTtcbiAgICAgICAgaWYgKGNvb3Jkc1syICogcmlnaHQgKyBpbmNdID4gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIHJpZ2h0KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGkgKyBpbmNdIDwgdCkgaSsrO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaiArIGluY10gPiB0KSBqLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRzWzIgKiBsZWZ0ICsgaW5jXSA9PT0gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGopO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBqLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA8PSBrKSBsZWZ0ID0gaiArIDE7XG4gICAgICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaikge1xuICAgIHN3YXAoaWRzLCBpLCBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGksIDIgKiBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGkgKyAxLCAyICogaiArIDEpO1xufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xuICAgIGNvbnN0IHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4oaWRzLCBjb29yZHMsIHF4LCBxeSwgciwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgcjIgPSByICogcjtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzcURpc3QoY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0sIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgY29uc3QgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIGNvbnN0IHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoc3FEaXN0KHgsIHksIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4IC0gciA8PSB4IDogcXkgLSByIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggKyByID49IHggOiBxeSArIHIgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3FEaXN0KGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgZHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IGR5ID0gYXkgLSBieTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwb2ludCwgdnMpIHtcbiAgICAvLyByYXktY2FzdGluZyBhbGdvcml0aG0gYmFzZWQgb25cbiAgICAvLyBodHRwOi8vd3d3LmVjc2UucnBpLmVkdS9Ib21lcGFnZXMvd3JmL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG4gICAgXG4gICAgdmFyIHggPSBwb2ludFswXSwgeSA9IHBvaW50WzFdO1xuICAgIFxuICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHZzLmxlbmd0aCAtIDE7IGkgPCB2cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICAgICAgdmFyIHhpID0gdnNbaV1bMF0sIHlpID0gdnNbaV1bMV07XG4gICAgICAgIHZhciB4aiA9IHZzW2pdWzBdLCB5aiA9IHZzW2pdWzFdO1xuICAgICAgICBcbiAgICAgICAgdmFyIGludGVyc2VjdCA9ICgoeWkgPiB5KSAhPSAoeWogPiB5KSlcbiAgICAgICAgICAgICYmICh4IDwgKHhqIC0geGkpICogKHkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XG4gICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnNpZGU7XG59O1xuIiwidmFyIGV4dGVuZFN0YXRpY3M9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsYSl7dC5fX3Byb3RvX189YX18fGZ1bmN0aW9uKHQsYSl7Zm9yKHZhciByIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShyKSYmKHRbcl09YVtyXSl9O2Z1bmN0aW9uIF9fZXh0ZW5kcyh0LGEpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9ZXh0ZW5kU3RhdGljcyh0LGEpLHQucHJvdG90eXBlPW51bGw9PT1hP09iamVjdC5jcmVhdGUoYSk6KHIucHJvdG90eXBlPWEucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiByb3RhdGUodCxhKXt2YXIgcj10WzBdLGU9dFsxXTtyZXR1cm5bcipNYXRoLmNvcyhhKS1lKk1hdGguc2luKGEpLHIqTWF0aC5zaW4oYSkrZSpNYXRoLmNvcyhhKV19ZnVuY3Rpb24gYXNzZXJ0TnVtYmVycygpe2Zvcih2YXIgdD1bXSxhPTA7YTxhcmd1bWVudHMubGVuZ3RoO2ErKyl0W2FdPWFyZ3VtZW50c1thXTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZihcIm51bWJlclwiIT10eXBlb2YgdFtyXSl0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnROdW1iZXJzIGFyZ3VtZW50c1tcIityK1wiXSBpcyBub3QgYSBudW1iZXIuIFwiK3R5cGVvZiB0W3JdK1wiID09IHR5cGVvZiBcIit0W3JdKTtyZXR1cm4hMH12YXIgUEk9TWF0aC5QSTtmdW5jdGlvbiBhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpe3QubEFyY0ZsYWc9MD09PXQubEFyY0ZsYWc/MDoxLHQuc3dlZXBGbGFnPTA9PT10LnN3ZWVwRmxhZz8wOjE7dmFyIGU9dC5yWCxuPXQuclksaT10Lngsbz10Lnk7ZT1NYXRoLmFicyh0LnJYKSxuPU1hdGguYWJzKHQuclkpO3ZhciBzPXJvdGF0ZShbKGEtaSkvMiwoci1vKS8yXSwtdC54Um90LzE4MCpQSSksaD1zWzBdLHU9c1sxXSxjPU1hdGgucG93KGgsMikvTWF0aC5wb3coZSwyKStNYXRoLnBvdyh1LDIpL01hdGgucG93KG4sMik7MTxjJiYoZSo9TWF0aC5zcXJ0KGMpLG4qPU1hdGguc3FydChjKSksdC5yWD1lLHQuclk9bjt2YXIgbT1NYXRoLnBvdyhlLDIpKk1hdGgucG93KHUsMikrTWF0aC5wb3cobiwyKSpNYXRoLnBvdyhoLDIpLF89KHQubEFyY0ZsYWchPT10LnN3ZWVwRmxhZz8xOi0xKSpNYXRoLnNxcnQoTWF0aC5tYXgoMCwoTWF0aC5wb3coZSwyKSpNYXRoLnBvdyhuLDIpLW0pL20pKSxUPWUqdS9uKl8sTz0tbipoL2UqXyxwPXJvdGF0ZShbVCxPXSx0LnhSb3QvMTgwKlBJKTt0LmNYPXBbMF0rKGEraSkvMix0LmNZPXBbMV0rKHIrbykvMix0LnBoaTE9TWF0aC5hdGFuMigodS1PKS9uLChoLVQpL2UpLHQucGhpMj1NYXRoLmF0YW4yKCgtdS1PKS9uLCgtaC1UKS9lKSwwPT09dC5zd2VlcEZsYWcmJnQucGhpMj50LnBoaTEmJih0LnBoaTItPTIqUEkpLDE9PT10LnN3ZWVwRmxhZyYmdC5waGkyPHQucGhpMSYmKHQucGhpMis9MipQSSksdC5waGkxKj0xODAvUEksdC5waGkyKj0xODAvUEl9ZnVuY3Rpb24gaW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUodCxhLHIpe2Fzc2VydE51bWJlcnModCxhLHIpO3ZhciBlPXQqdCthKmEtcipyO2lmKDA+ZSlyZXR1cm5bXTtpZigwPT09ZSlyZXR1cm5bW3Qqci8odCp0K2EqYSksYSpyLyh0KnQrYSphKV1dO3ZhciBuPU1hdGguc3FydChlKTtyZXR1cm5bWyh0KnIrYSpuKS8odCp0K2EqYSksKGEqci10Km4pLyh0KnQrYSphKV0sWyh0KnItYSpuKS8odCp0K2EqYSksKGEqcit0Km4pLyh0KnQrYSphKV1dfXZhciBTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLERFRz1NYXRoLlBJLzE4MDtmdW5jdGlvbiBsZXJwKHQsYSxyKXtyZXR1cm4oMS1yKSp0K3IqYX1mdW5jdGlvbiBhcmNBdCh0LGEscixlKXtyZXR1cm4gdCtNYXRoLmNvcyhlLzE4MCpQSSkqYStNYXRoLnNpbihlLzE4MCpQSSkqcn1mdW5jdGlvbiBiZXppZXJSb290KHQsYSxyLGUpe3ZhciBuPWEtdCxpPXItYSxvPTMqbiszKihlLXIpLTYqaSxzPTYqKGktbiksaD0zKm47cmV0dXJuIE1hdGguYWJzKG8pPDFlLTY/Wy1oL3NdOnBxRm9ybXVsYShzL28saC9vLDFlLTYpfWZ1bmN0aW9uIGJlemllckF0KHQsYSxyLGUsbil7dmFyIGk9MS1uO3JldHVybiB0KihpKmkqaSkrYSooMyppKmkqbikrciooMyppKm4qbikrZSoobipuKm4pfWZ1bmN0aW9uIHBxRm9ybXVsYSh0LGEscil7dm9pZCAwPT09ciYmKHI9MWUtNik7dmFyIGU9dCp0LzQtYTtpZihlPC1yKXJldHVybltdO2lmKGU8PXIpcmV0dXJuWy10LzJdO3ZhciBuPU1hdGguc3FydChlKTtyZXR1cm5bLXQvMi1uLC10LzIrbl19ZnVuY3Rpb24gYTJjKHQsYSxyKXt2YXIgZSxuLGksbzt0LmNYfHxhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpO2Zvcih2YXIgcz1NYXRoLm1pbih0LnBoaTEsdC5waGkyKSxoPU1hdGgubWF4KHQucGhpMSx0LnBoaTIpLXMsdT1NYXRoLmNlaWwoaC85MCksYz1uZXcgQXJyYXkodSksbT1hLF89cixUPTA7VDx1O1QrKyl7dmFyIE89bGVycCh0LnBoaTEsdC5waGkyLFQvdSkscD1sZXJwKHQucGhpMSx0LnBoaTIsKFQrMSkvdSkseT1wLU8sUz00LzMqTWF0aC50YW4oeSpERUcvNCksZj1bTWF0aC5jb3MoTypERUcpLVMqTWF0aC5zaW4oTypERUcpLE1hdGguc2luKE8qREVHKStTKk1hdGguY29zKE8qREVHKV0sVj1mWzBdLE49ZlsxXSxEPVtNYXRoLmNvcyhwKkRFRyksTWF0aC5zaW4ocCpERUcpXSxQPURbMF0sbD1EWzFdLHY9W1ArUypNYXRoLnNpbihwKkRFRyksbC1TKk1hdGguY29zKHAqREVHKV0sRT12WzBdLEE9dlsxXTtjW1RdPXtyZWxhdGl2ZTp0LnJlbGF0aXZlLHR5cGU6U1ZHUGF0aERhdGEuQ1VSVkVfVE99O3ZhciBkPWZ1bmN0aW9uKGEscil7dmFyIGU9cm90YXRlKFthKnQuclgscip0LnJZXSx0LnhSb3QpLG49ZVswXSxpPWVbMV07cmV0dXJuW3QuY1grbix0LmNZK2ldfTtlPWQoVixOKSxjW1RdLngxPWVbMF0sY1tUXS55MT1lWzFdLG49ZChFLEEpLGNbVF0ueDI9blswXSxjW1RdLnkyPW5bMV0saT1kKFAsbCksY1tUXS54PWlbMF0sY1tUXS55PWlbMV0sdC5yZWxhdGl2ZSYmKGNbVF0ueDEtPW0sY1tUXS55MS09XyxjW1RdLngyLT1tLGNbVF0ueTItPV8sY1tUXS54LT1tLGNbVF0ueS09XyksbT0obz1bY1tUXS54LGNbVF0ueV0pWzBdLF89b1sxXX1yZXR1cm4gY30hZnVuY3Rpb24odCl7ZnVuY3Rpb24gYSgpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKHZvaWQgMCE9PXQueDEmJih0LngxKz1hKSx2b2lkIDAhPT10LnkxJiYodC55MSs9ciksdm9pZCAwIT09dC54MiYmKHQueDIrPWEpLHZvaWQgMCE9PXQueTImJih0LnkyKz1yKSx2b2lkIDAhPT10LngmJih0LngrPWEpLHZvaWQgMCE9PXQueSYmKHQueSs9ciksdC5yZWxhdGl2ZT0hMSksdH0pfWZ1bmN0aW9uIHIoKXt2YXIgdD1OYU4sYT1OYU4scj1OYU4sZT1OYU47cmV0dXJuIG4oZnVuY3Rpb24obixpLG8pe3JldHVybiBuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPJiYobi50eXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHQ9aXNOYU4odCk/aTp0LGE9aXNOYU4oYSk/bzphLG4ueDE9bi5yZWxhdGl2ZT9pLXQ6MippLXQsbi55MT1uLnJlbGF0aXZlP28tYToyKm8tYSksbi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPPyh0PW4ucmVsYXRpdmU/aStuLngyOm4ueDIsYT1uLnJlbGF0aXZlP28rbi55MjpuLnkyKToodD1OYU4sYT1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyYmKG4udHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHI9aXNOYU4ocik/aTpyLGU9aXNOYU4oZSk/bzplLG4ueDE9bi5yZWxhdGl2ZT9pLXI6MippLXIsbi55MT1uLnJlbGF0aXZlP28tZToyKm8tZSksbi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8/KHI9bi5yZWxhdGl2ZT9pK24ueDE6bi54MSxlPW4ucmVsYXRpdmU/bytuLnkxOm4ueTEpOihyPU5hTixlPU5hTiksbn0pfWZ1bmN0aW9uIGUoKXt2YXIgdD1OYU4sYT1OYU47cmV0dXJuIG4oZnVuY3Rpb24ocixlLG4pe2lmKHIudHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyYmKHIudHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHQ9aXNOYU4odCk/ZTp0LGE9aXNOYU4oYSk/bjphLHIueDE9ci5yZWxhdGl2ZT9lLXQ6MiplLXQsci55MT1yLnJlbGF0aXZlP24tYToyKm4tYSksci50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8pe3Q9ci5yZWxhdGl2ZT9lK3IueDE6ci54MSxhPXIucmVsYXRpdmU/bityLnkxOnIueTE7dmFyIGk9ci54MSxvPXIueTE7ci50eXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHIueDE9KChyLnJlbGF0aXZlPzA6ZSkrMippKS8zLHIueTE9KChyLnJlbGF0aXZlPzA6bikrMipvKS8zLHIueDI9KHIueCsyKmkpLzMsci55Mj0oci55KzIqbykvM31lbHNlIHQ9TmFOLGE9TmFOO3JldHVybiByfSl9ZnVuY3Rpb24gbih0KXt2YXIgYT0wLHI9MCxlPU5hTixuPU5hTjtyZXR1cm4gZnVuY3Rpb24oaSl7aWYoaXNOYU4oZSkmJiEoaS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8pKXRocm93IG5ldyBFcnJvcihcInBhdGggbXVzdCBzdGFydCB3aXRoIG1vdmV0b1wiKTt2YXIgbz10KGksYSxyLGUsbik7cmV0dXJuIGkudHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiYoYT1lLHI9biksdm9pZCAwIT09aS54JiYoYT1pLnJlbGF0aXZlP2EraS54OmkueCksdm9pZCAwIT09aS55JiYocj1pLnJlbGF0aXZlP3IraS55OmkueSksaS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8mJihlPWEsbj1yKSxvfX1mdW5jdGlvbiBpKHQsYSxyLGUsaSxvKXtyZXR1cm4gYXNzZXJ0TnVtYmVycyh0LGEscixlLGksbyksbihmdW5jdGlvbihuLHMsaCx1KXt2YXIgYz1uLngxLG09bi54MixfPW4ucmVsYXRpdmUmJiFpc05hTih1KSxUPXZvaWQgMCE9PW4ueD9uLng6Xz8wOnMsTz12b2lkIDAhPT1uLnk/bi55Ol8/MDpoO2Z1bmN0aW9uIHAodCl7cmV0dXJuIHQqdH1uLnR5cGUmU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyYmMCE9PWEmJihuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxuLnk9bi5yZWxhdGl2ZT8wOmgpLG4udHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJjAhPT1yJiYobi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sbi54PW4ucmVsYXRpdmU/MDpzKSx2b2lkIDAhPT1uLngmJihuLng9bi54KnQrTypyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueSYmKG4ueT1UKmErbi55KmUrKF8/MDpvKSksdm9pZCAwIT09bi54MSYmKG4ueDE9bi54MSp0K24ueTEqcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkxJiYobi55MT1jKmErbi55MSplKyhfPzA6bykpLHZvaWQgMCE9PW4ueDImJihuLngyPW4ueDIqdCtuLnkyKnIrKF8/MDppKSksdm9pZCAwIT09bi55MiYmKG4ueTI9bSphK24ueTIqZSsoXz8wOm8pKTt2YXIgeT10KmUtYSpyO2lmKHZvaWQgMCE9PW4ueFJvdCYmKDEhPT10fHwwIT09YXx8MCE9PXJ8fDEhPT1lKSlpZigwPT09eSlkZWxldGUgbi5yWCxkZWxldGUgbi5yWSxkZWxldGUgbi54Um90LGRlbGV0ZSBuLmxBcmNGbGFnLGRlbGV0ZSBuLnN3ZWVwRmxhZyxuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTztlbHNle3ZhciBTPW4ueFJvdCpNYXRoLlBJLzE4MCxmPU1hdGguc2luKFMpLFY9TWF0aC5jb3MoUyksTj0xL3Aobi5yWCksRD0xL3Aobi5yWSksUD1wKFYpKk4rcChmKSpELGw9MipmKlYqKE4tRCksdj1wKGYpKk4rcChWKSpELEU9UCplKmUtbCphKmUrdiphKmEsQT1sKih0KmUrYSpyKS0yKihQKnIqZSt2KnQqYSksZD1QKnIqci1sKnQqcit2KnQqdCxHPShNYXRoLmF0YW4yKEEsRS1kKStNYXRoLlBJKSVNYXRoLlBJLzIsQz1NYXRoLnNpbihHKSx4PU1hdGguY29zKEcpO24uclg9TWF0aC5hYnMoeSkvTWF0aC5zcXJ0KEUqcCh4KStBKkMqeCtkKnAoQykpLG4uclk9TWF0aC5hYnMoeSkvTWF0aC5zcXJ0KEUqcChDKS1BKkMqeCtkKnAoeCkpLG4ueFJvdD0xODAqRy9NYXRoLlBJfXJldHVybiB2b2lkIDAhPT1uLnN3ZWVwRmxhZyYmMD55JiYobi5zd2VlcEZsYWc9KyFuLnN3ZWVwRmxhZyksbn0pfWZ1bmN0aW9uIG8oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGE9e307Zm9yKHZhciByIGluIHQpYVtyXT10W3JdO3JldHVybiBhfX10LlJPVU5EPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIE1hdGgucm91bmQoYSp0KS90fXJldHVybiB2b2lkIDA9PT10JiYodD0xZTEzKSxhc3NlcnROdW1iZXJzKHQpLGZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10LngxJiYodC54MT1hKHQueDEpKSx2b2lkIDAhPT10LnkxJiYodC55MT1hKHQueTEpKSx2b2lkIDAhPT10LngyJiYodC54Mj1hKHQueDIpKSx2b2lkIDAhPT10LnkyJiYodC55Mj1hKHQueTIpKSx2b2lkIDAhPT10LngmJih0Lng9YSh0LngpKSx2b2lkIDAhPT10LnkmJih0Lnk9YSh0LnkpKSx0fX0sdC5UT19BQlM9YSx0LlRPX1JFTD1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZXx8KHZvaWQgMCE9PXQueDEmJih0LngxLT1hKSx2b2lkIDAhPT10LnkxJiYodC55MS09ciksdm9pZCAwIT09dC54MiYmKHQueDItPWEpLHZvaWQgMCE9PXQueTImJih0LnkyLT1yKSx2b2lkIDAhPT10LngmJih0LngtPWEpLHZvaWQgMCE9PXQueSYmKHQueS09ciksdC5yZWxhdGl2ZT0hMCksdH0pfSx0Lk5PUk1BTElaRV9IVlo9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMCksdm9pZCAwPT09YSYmKGE9ITApLHZvaWQgMD09PXImJihyPSEwKSxuKGZ1bmN0aW9uKGUsbixpLG8scyl7aWYoaXNOYU4obykmJiEoZS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8pKXRocm93IG5ldyBFcnJvcihcInBhdGggbXVzdCBzdGFydCB3aXRoIG1vdmV0b1wiKTtyZXR1cm4gYSYmZS50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLnk9ZS5yZWxhdGl2ZT8wOmkpLHImJmUudHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLng9ZS5yZWxhdGl2ZT8wOm4pLHQmJmUudHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS54PWUucmVsYXRpdmU/by1uOm8sZS55PWUucmVsYXRpdmU/cy1pOnMpLGUudHlwZSZTVkdQYXRoRGF0YS5BUkMmJigwPT09ZS5yWHx8MD09PWUuclkpJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZGVsZXRlIGUuclgsZGVsZXRlIGUuclksZGVsZXRlIGUueFJvdCxkZWxldGUgZS5sQXJjRmxhZyxkZWxldGUgZS5zd2VlcEZsYWcpLGV9KX0sdC5OT1JNQUxJWkVfU1Q9cix0LlFUX1RPX0M9ZSx0LklORk89bix0LlNBTklUSVpFPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCk7dmFyIGE9TmFOLHI9TmFOLGU9TmFOLGk9TmFOO3JldHVybiBuKGZ1bmN0aW9uKG4sbyxzLGgsdSl7dmFyIGM9TWF0aC5hYnMsbT0hMSxfPTAsVD0wO2lmKG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8mJihfPWlzTmFOKGEpPzA6by1hLFQ9aXNOYU4ocik/MDpzLXIpLG4udHlwZSYoU1ZHUGF0aERhdGEuQ1VSVkVfVE98U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPKT8oYT1uLnJlbGF0aXZlP28rbi54MjpuLngyLHI9bi5yZWxhdGl2ZT9zK24ueTI6bi55Mik6KGE9TmFOLHI9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8/KGU9aXNOYU4oZSk/bzoyKm8tZSxpPWlzTmFOKGkpP3M6MipzLWkpOm4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPPyhlPW4ucmVsYXRpdmU/bytuLngxOm4ueDEsaT1uLnJlbGF0aXZlP3Mrbi55MTpuLnkyKTooZT1OYU4saT1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5MSU5FX0NPTU1BTkRTfHxuLnR5cGUmU1ZHUGF0aERhdGEuQVJDJiYoMD09PW4uclh8fDA9PT1uLnJZfHwhbi5sQXJjRmxhZyl8fG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyl7dmFyIE89dm9pZCAwPT09bi54PzA6bi5yZWxhdGl2ZT9uLng6bi54LW8scD12b2lkIDA9PT1uLnk/MDpuLnJlbGF0aXZlP24ueTpuLnktcztfPWlzTmFOKGUpP3ZvaWQgMD09PW4ueDE/XzpuLnJlbGF0aXZlP24ueDpuLngxLW86ZS1vLFQ9aXNOYU4oaSk/dm9pZCAwPT09bi55MT9UOm4ucmVsYXRpdmU/bi55Om4ueTEtczppLXM7dmFyIHk9dm9pZCAwPT09bi54Mj8wOm4ucmVsYXRpdmU/bi54Om4ueDItbyxTPXZvaWQgMD09PW4ueTI/MDpuLnJlbGF0aXZlP24ueTpuLnkyLXM7YyhPKTw9dCYmYyhwKTw9dCYmYyhfKTw9dCYmYyhUKTw9dCYmYyh5KTw9dCYmYyhTKTw9dCYmKG09ITApfXJldHVybiBuLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmYyhvLWgpPD10JiZjKHMtdSk8PXQmJihtPSEwKSxtP1tdOm59KX0sdC5NQVRSSVg9aSx0LlJPVEFURT1mdW5jdGlvbih0LGEscil7dm9pZCAwPT09YSYmKGE9MCksdm9pZCAwPT09ciYmKHI9MCksYXNzZXJ0TnVtYmVycyh0LGEscik7dmFyIGU9TWF0aC5zaW4odCksbj1NYXRoLmNvcyh0KTtyZXR1cm4gaShuLGUsLWUsbixhLWEqbityKmUsci1hKmUtcipuKX0sdC5UUkFOU0xBVEU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MCksYXNzZXJ0TnVtYmVycyh0LGEpLGkoMSwwLDAsMSx0LGEpfSx0LlNDQUxFPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHZvaWQgMD09PWEmJihhPXQpLGFzc2VydE51bWJlcnModCxhKSxpKHQsMCwwLGEsMCwwKX0sdC5TS0VXX1g9ZnVuY3Rpb24odCl7cmV0dXJuIGFzc2VydE51bWJlcnModCksaSgxLDAsTWF0aC5hdGFuKHQpLDEsMCwwKX0sdC5TS0VXX1k9ZnVuY3Rpb24odCl7cmV0dXJuIGFzc2VydE51bWJlcnModCksaSgxLE1hdGguYXRhbih0KSwwLDEsMCwwKX0sdC5YX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCksaSgtMSwwLDAsMSx0LDApfSx0LllfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYXNzZXJ0TnVtYmVycyh0KSxpKDEsMCwwLC0xLDAsdCl9LHQuQV9UT19DPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiBTVkdQYXRoRGF0YS5BUkM9PT10LnR5cGU/YTJjKHQsdC5yZWxhdGl2ZT8wOmEsdC5yZWxhdGl2ZT8wOnIpOnR9KX0sdC5BTk5PVEFURV9BUkNTPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiB0LnJlbGF0aXZlJiYoYT0wLHI9MCksU1ZHUGF0aERhdGEuQVJDPT09dC50eXBlJiZhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpLHR9KX0sdC5DTE9ORT1vLHQuQ0FMQ1VMQVRFX0JPVU5EUz1mdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKHQpe3ZhciBhPXt9O2Zvcih2YXIgciBpbiB0KWFbcl09dFtyXTtyZXR1cm4gYX0saT1hKCksbz1lKCkscz1yKCksaD1uKGZ1bmN0aW9uKGEscixlKXt2YXIgbj1zKG8oaSh0KGEpKSkpO2Z1bmN0aW9uIHUodCl7dD5oLm1heFgmJihoLm1heFg9dCksdDxoLm1pblgmJihoLm1pblg9dCl9ZnVuY3Rpb24gYyh0KXt0PmgubWF4WSYmKGgubWF4WT10KSx0PGgubWluWSYmKGgubWluWT10KX1pZihuLnR5cGUmU1ZHUGF0aERhdGEuRFJBV0lOR19DT01NQU5EUyYmKHUociksYyhlKSksbi50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJnUobi54KSxuLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiZjKG4ueSksbi50eXBlJlNWR1BhdGhEYXRhLkxJTkVfVE8mJih1KG4ueCksYyhuLnkpKSxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE8pe3Uobi54KSxjKG4ueSk7Zm9yKHZhciBtPTAsXz1iZXppZXJSb290KHIsbi54MSxuLngyLG4ueCk7bTxfLmxlbmd0aDttKyspMDwoRz1fW21dKSYmMT5HJiZ1KGJlemllckF0KHIsbi54MSxuLngyLG4ueCxHKSk7Zm9yKHZhciBUPTAsTz1iZXppZXJSb290KGUsbi55MSxuLnkyLG4ueSk7VDxPLmxlbmd0aDtUKyspMDwoRz1PW1RdKSYmMT5HJiZjKGJlemllckF0KGUsbi55MSxuLnkyLG4ueSxHKSl9aWYobi50eXBlJlNWR1BhdGhEYXRhLkFSQyl7dShuLngpLGMobi55KSxhbm5vdGF0ZUFyY0NvbW1hbmQobixyLGUpO2Zvcih2YXIgcD1uLnhSb3QvMTgwKk1hdGguUEkseT1NYXRoLmNvcyhwKSpuLnJYLFM9TWF0aC5zaW4ocCkqbi5yWCxmPS1NYXRoLnNpbihwKSpuLnJZLFY9TWF0aC5jb3MocCkqbi5yWSxOPW4ucGhpMTxuLnBoaTI/W24ucGhpMSxuLnBoaTJdOi0xODA+bi5waGkyP1tuLnBoaTIrMzYwLG4ucGhpMSszNjBdOltuLnBoaTIsbi5waGkxXSxEPU5bMF0sUD1OWzFdLGw9ZnVuY3Rpb24odCl7dmFyIGE9dFswXSxyPXRbMV0sZT0xODAqTWF0aC5hdGFuMihyLGEpL01hdGguUEk7cmV0dXJuIGU8RD9lKzM2MDplfSx2PTAsRT1pbnRlcnNlY3Rpb25Vbml0Q2lyY2xlTGluZShmLC15LDApLm1hcChsKTt2PEUubGVuZ3RoO3YrKykoRz1FW3ZdKT5EJiZHPFAmJnUoYXJjQXQobi5jWCx5LGYsRykpO2Zvcih2YXIgQT0wLGQ9aW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUoViwtUywwKS5tYXAobCk7QTxkLmxlbmd0aDtBKyspe3ZhciBHOyhHPWRbQV0pPkQmJkc8UCYmYyhhcmNBdChuLmNZLFMsVixHKSl9fXJldHVybiBhfSk7cmV0dXJuIGgubWluWD0xLzAsaC5tYXhYPS0xLzAsaC5taW5ZPTEvMCxoLm1heFk9LTEvMCxofX0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcnx8KFNWR1BhdGhEYXRhVHJhbnNmb3JtZXI9e30pKTt2YXIgX2EsX2EkMSxUcmFuc2Zvcm1hYmxlU1ZHPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC5wcm90b3R5cGUucm91bmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUk9VTkQodCkpfSx0LnByb3RvdHlwZS50b0Ficz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRPX0FCUygpKX0sdC5wcm90b3R5cGUudG9SZWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UT19SRUwoKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZUhWWj1mdW5jdGlvbih0LGEscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTk9STUFMSVpFX0hWWih0LGEscikpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVTVD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk5PUk1BTElaRV9TVCgpKX0sdC5wcm90b3R5cGUucXRUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5RVF9UT19DKCkpfSx0LnByb3RvdHlwZS5hVG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQV9UT19DKCkpfSx0LnByb3RvdHlwZS5zYW5pdGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TQU5JVElaRSh0KSl9LHQucHJvdG90eXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0LGEpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRSQU5TTEFURSh0LGEpKX0sdC5wcm90b3R5cGUuc2NhbGU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TQ0FMRSh0LGEpKX0sdC5wcm90b3R5cGUucm90YXRlPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ST1RBVEUodCxhLHIpKX0sdC5wcm90b3R5cGUubWF0cml4PWZ1bmN0aW9uKHQsYSxyLGUsbixpKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5NQVRSSVgodCxhLHIsZSxuLGkpKX0sdC5wcm90b3R5cGUuc2tld1g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0tFV19YKHQpKX0sdC5wcm90b3R5cGUuc2tld1k9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0tFV19ZKHQpKX0sdC5wcm90b3R5cGUueFN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlhfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLnlTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ZX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS5hbm5vdGF0ZUFyY3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5BTk5PVEFURV9BUkNTKCkpfSx0fSgpLGlzV2hpdGVTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm5cIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcclwiPT09dHx8XCJcXG5cIj09PXR9LGlzRGlnaXQ9ZnVuY3Rpb24odCl7cmV0dXJuXCIwXCIuY2hhckNvZGVBdCgwKTw9dC5jaGFyQ29kZUF0KDApJiZ0LmNoYXJDb2RlQXQoMCk8PVwiOVwiLmNoYXJDb2RlQXQoMCl9LFNWR1BhdGhEYXRhUGFyc2VyJCQxPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoKXt2YXIgYT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGEuY3VyTnVtYmVyPVwiXCIsYS5jdXJDb21tYW5kVHlwZT0tMSxhLmN1ckNvbW1hbmRSZWxhdGl2ZT0hMSxhLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITAsYS5jdXJOdW1iZXJIYXNFeHA9ITEsYS5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsYS5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLGEuY3VyQXJncz1bXSxhfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCYmKHQ9W10pLHRoaXMucGFyc2UoXCIgXCIsdCksMCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgdGhlIHBhdGggZW5kLlwiKTtyZXR1cm4gdH0sYS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24odCxhKXt2YXIgcj10aGlzO3ZvaWQgMD09PWEmJihhPVtdKTtmb3IodmFyIGU9ZnVuY3Rpb24odCl7YS5wdXNoKHQpLHIuY3VyQXJncy5sZW5ndGg9MCxyLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9LG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpZihpc0RpZ2l0KGkpKXRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPXRoaXMuY3VyTnVtYmVySGFzRXhwO2Vsc2UgaWYoXCJlXCIhPT1pJiZcIkVcIiE9PWkpaWYoXCItXCIhPT1pJiZcIitcIiE9PWl8fCF0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHMpaWYoXCIuXCIhPT1pfHx0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsKXtpZih0aGlzLmN1ck51bWJlciYmLTEhPT10aGlzLmN1ckNvbW1hbmRUeXBlKXt2YXIgbz1OdW1iZXIodGhpcy5jdXJOdW1iZXIpO2lmKGlzTmFOKG8pKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkludmFsaWQgbnVtYmVyIGVuZGluZyBhdCBcIituKTtpZih0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQVJDKWlmKDA9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHwxPT09dGhpcy5jdXJBcmdzLmxlbmd0aCl7aWYoMD5vKXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgbnVtYmVyLCBnb3QgXCInK28rJ1wiIGF0IGluZGV4IFwiJytuKydcIicpfWVsc2UgaWYoKDM9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHw0PT09dGhpcy5jdXJBcmdzLmxlbmd0aCkmJlwiMFwiIT09dGhpcy5jdXJOdW1iZXImJlwiMVwiIT09dGhpcy5jdXJOdW1iZXIpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBhIGZsYWcsIGdvdCBcIicrdGhpcy5jdXJOdW1iZXIrJ1wiIGF0IGluZGV4IFwiJytuKydcIicpO3RoaXMuY3VyQXJncy5wdXNoKG8pLHRoaXMuY3VyQXJncy5sZW5ndGg9PT1DT01NQU5EX0FSR19DT1VOVFNbdGhpcy5jdXJDb21tYW5kVHlwZV0mJihTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9lKHt0eXBlOlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDpvfSk6U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9lKHt0eXBlOlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx5Om99KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuTU9WRV9UT3x8dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkxJTkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTz8oZSh7dHlwZTp0aGlzLmN1ckNvbW1hbmRUeXBlLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6dGhpcy5jdXJBcmdzWzBdLHk6dGhpcy5jdXJBcmdzWzFdfSksU1ZHUGF0aERhdGEuTU9WRV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGUmJih0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8pKTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQ1VSVkVfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5DVVJWRV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4MTp0aGlzLmN1ckFyZ3NbMF0seTE6dGhpcy5jdXJBcmdzWzFdLHgyOnRoaXMuY3VyQXJnc1syXSx5Mjp0aGlzLmN1ckFyZ3NbM10seDp0aGlzLmN1ckFyZ3NbNF0seTp0aGlzLmN1ckFyZ3NbNV19KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgyOnRoaXMuY3VyQXJnc1swXSx5Mjp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuUVVBRF9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLlFVQURfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5BUkMmJmUoe3R5cGU6U1ZHUGF0aERhdGEuQVJDLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHJYOnRoaXMuY3VyQXJnc1swXSxyWTp0aGlzLmN1ckFyZ3NbMV0seFJvdDp0aGlzLmN1ckFyZ3NbMl0sbEFyY0ZsYWc6dGhpcy5jdXJBcmdzWzNdLHN3ZWVwRmxhZzp0aGlzLmN1ckFyZ3NbNF0seDp0aGlzLmN1ckFyZ3NbNV0seTp0aGlzLmN1ckFyZ3NbNl19KSksdGhpcy5jdXJOdW1iZXI9XCJcIix0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz0hMSx0aGlzLmN1ck51bWJlckhhc0V4cD0hMSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITEsdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfWlmKCFpc1doaXRlU3BhY2UoaSkpaWYoXCIsXCI9PT1pJiZ0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExO2Vsc2UgaWYoXCIrXCIhPT1pJiZcIi1cIiE9PWkmJlwiLlwiIT09aSl7aWYoMCE9PXRoaXMuY3VyQXJncy5sZW5ndGgpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgaW5kZXggXCIrbitcIi5cIik7aWYoIXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytpKydcIiBhdCBpbmRleCAnK24rXCIuIENvbW1hbmQgY2Fubm90IGZvbGxvdyBjb21tYVwiKTtpZih0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITEsXCJ6XCIhPT1pJiZcIlpcIiE9PWkpaWYoXCJoXCI9PT1pfHxcIkhcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiaFwiPT09aTtlbHNlIGlmKFwidlwiPT09aXx8XCJWXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwidlwiPT09aTtlbHNlIGlmKFwibVwiPT09aXx8XCJNXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuTU9WRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cIm1cIj09PWk7ZWxzZSBpZihcImxcIj09PWl8fFwiTFwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJsXCI9PT1pO2Vsc2UgaWYoXCJjXCI9PT1pfHxcIkNcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImNcIj09PWk7ZWxzZSBpZihcInNcIj09PWl8fFwiU1wiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInNcIj09PWk7ZWxzZSBpZihcInFcIj09PWl8fFwiUVwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlFVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJxXCI9PT1pO2Vsc2UgaWYoXCJ0XCI9PT1pfHxcIlRcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInRcIj09PWk7ZWxzZXtpZihcImFcIiE9PWkmJlwiQVwiIT09aSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytpKydcIiBhdCBpbmRleCAnK24rXCIuXCIpO3RoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuQVJDLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiYVwiPT09aX1lbHNlIGEucHVzaCh7dHlwZTpTVkdQYXRoRGF0YS5DTE9TRV9QQVRIfSksdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwLHRoaXMuY3VyQ29tbWFuZFR5cGU9LTF9ZWxzZSB0aGlzLmN1ck51bWJlcj1pLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD1cIi5cIj09PWl9ZWxzZSB0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITA7ZWxzZSB0aGlzLmN1ck51bWJlcis9aTtlbHNlIHRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRXhwPSEwfXJldHVybiBhfSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyx7cGFyc2U6e3ZhbHVlOmZ1bmN0aW9uKGEscil7dm9pZCAwPT09ciYmKHI9W10pO2Zvcih2YXIgZT0wLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlLmNhbGwodGhpcyxhKTtlPG4ubGVuZ3RoO2UrKyl7dmFyIGk9bltlXSxvPXQoaSk7QXJyYXkuaXNBcnJheShvKT9yLnB1c2guYXBwbHkocixvKTpyLnB1c2gobyl9cmV0dXJuIHJ9fX0pfSxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxTVkdQYXRoRGF0YT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9hLnBhcnNlKHIpOnIsZX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxhLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD1TVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxyPTAsZT10aGlzLmNvbW1hbmRzO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj10KGVbcl0pO0FycmF5LmlzQXJyYXkobik/YS5wdXNoLmFwcGx5KGEsbik6YS5wdXNoKG4pfXJldHVybiB0aGlzLmNvbW1hbmRzPWEsdGhpc30sYS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVNWR1BhdGgkJDEodCl9LGEucGFyc2U9ZnVuY3Rpb24odCl7dmFyIGE9bmV3IFNWR1BhdGhEYXRhUGFyc2VyJCQxLHI9W107cmV0dXJuIGEucGFyc2UodCxyKSxhLmZpbmlzaChyKSxyfSxhLkNMT1NFX1BBVEg9MSxhLk1PVkVfVE89MixhLkhPUklaX0xJTkVfVE89NCxhLlZFUlRfTElORV9UTz04LGEuTElORV9UTz0xNixhLkNVUlZFX1RPPTMyLGEuU01PT1RIX0NVUlZFX1RPPTY0LGEuUVVBRF9UTz0xMjgsYS5TTU9PVEhfUVVBRF9UTz0yNTYsYS5BUkM9NTEyLGEuTElORV9DT01NQU5EUz1hLkxJTkVfVE98YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPLGEuRFJBV0lOR19DT01NQU5EUz1hLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE98YS5MSU5FX1RPfGEuQ1VSVkVfVE98YS5TTU9PVEhfQ1VSVkVfVE98YS5RVUFEX1RPfGEuU01PT1RIX1FVQURfVE98YS5BUkMsYX0oVHJhbnNmb3JtYWJsZVNWRyksQ09NTUFORF9BUkdfQ09VTlRTPSgoX2E9e30pW1NWR1BhdGhEYXRhLk1PVkVfVE9dPTIsX2FbU1ZHUGF0aERhdGEuTElORV9UT109MixfYVtTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPXT0xLF9hW1NWR1BhdGhEYXRhLlZFUlRfTElORV9UT109MSxfYVtTVkdQYXRoRGF0YS5DTE9TRV9QQVRIXT0wLF9hW1NWR1BhdGhEYXRhLlFVQURfVE9dPTQsX2FbU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE9dPTIsX2FbU1ZHUGF0aERhdGEuQ1VSVkVfVE9dPTYsX2FbU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPXT00LF9hW1NWR1BhdGhEYXRhLkFSQ109NyxfYSksV1NQPVwiIFwiO2Z1bmN0aW9uIGVuY29kZVNWR1BhdGgkJDEodCl7dmFyIGE9XCJcIjtBcnJheS5pc0FycmF5KHQpfHwodD1bdF0pO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgZT10W3JdO2lmKGUudHlwZT09PVNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpYSs9XCJ6XCI7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPKWErPShlLnJlbGF0aXZlP1wiaFwiOlwiSFwiKStlLng7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJ2XCI6XCJWXCIpK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLk1PVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJtXCI6XCJNXCIpK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cImxcIjpcIkxcIikrZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5DVVJWRV9UTylhKz0oZS5yZWxhdGl2ZT9cImNcIjpcIkNcIikrZS54MStXU1ArZS55MStXU1ArZS54MitXU1ArZS55MitXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJzXCI6XCJTXCIpK2UueDIrV1NQK2UueTIrV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuUVVBRF9UTylhKz0oZS5yZWxhdGl2ZT9cInFcIjpcIlFcIikrZS54MStXU1ArZS55MStXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTylhKz0oZS5yZWxhdGl2ZT9cInRcIjpcIlRcIikrZS54K1dTUCtlLnk7ZWxzZXtpZihlLnR5cGUhPT1TVkdQYXRoRGF0YS5BUkMpdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNvbW1hbmQgdHlwZSBcIicrZS50eXBlKydcIiBhdCBpbmRleCAnK3IrXCIuXCIpO2ErPShlLnJlbGF0aXZlP1wiYVwiOlwiQVwiKStlLnJYK1dTUCtlLnJZK1dTUCtlLnhSb3QrV1NQKyArZS5sQXJjRmxhZytXU1ArICtlLnN3ZWVwRmxhZytXU1ArZS54K1dTUCtlLnl9fXJldHVybiBhfXZhciBTVkdQYXRoRGF0YSQxPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEocil7dmFyIGU9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBlLmNvbW1hbmRzPVwic3RyaW5nXCI9PXR5cGVvZiByP2EucGFyc2Uocik6cixlfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5lbmNvZGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5lbmNvZGUodGhpcy5jb21tYW5kcyl9LGEucHJvdG90eXBlLmdldEJvdW5kcz1mdW5jdGlvbigpe3ZhciB0PVNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQ0FMQ1VMQVRFX0JPVU5EUygpO3JldHVybiB0aGlzLnRyYW5zZm9ybSh0KSx0fSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7Zm9yKHZhciBhPVtdLHI9MCxlPXRoaXMuY29tbWFuZHM7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXQoZVtyXSk7QXJyYXkuaXNBcnJheShuKT9hLnB1c2guYXBwbHkoYSxuKTphLnB1c2gobil9cmV0dXJuIHRoaXMuY29tbWFuZHM9YSx0aGlzfSxhLmVuY29kZT1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlU1ZHUGF0aCQkMSh0KX0sYS5wYXJzZT1mdW5jdGlvbih0KXt2YXIgYT1uZXcgU1ZHUGF0aERhdGFQYXJzZXIkJDEscj1bXTtyZXR1cm4gYS5wYXJzZSh0LHIpLGEuZmluaXNoKHIpLHJ9LGEuQ0xPU0VfUEFUSD0xLGEuTU9WRV9UTz0yLGEuSE9SSVpfTElORV9UTz00LGEuVkVSVF9MSU5FX1RPPTgsYS5MSU5FX1RPPTE2LGEuQ1VSVkVfVE89MzIsYS5TTU9PVEhfQ1VSVkVfVE89NjQsYS5RVUFEX1RPPTEyOCxhLlNNT09USF9RVUFEX1RPPTI1NixhLkFSQz01MTIsYS5MSU5FX0NPTU1BTkRTPWEuTElORV9UT3xhLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE8sYS5EUkFXSU5HX0NPTU1BTkRTPWEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UT3xhLkxJTkVfVE98YS5DVVJWRV9UT3xhLlNNT09USF9DVVJWRV9UT3xhLlFVQURfVE98YS5TTU9PVEhfUVVBRF9UT3xhLkFSQyxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxDT01NQU5EX0FSR19DT1VOVFMkMT0oKF9hJDE9e30pW1NWR1BhdGhEYXRhJDEuTU9WRV9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuTElORV9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuSE9SSVpfTElORV9UT109MSxfYSQxW1NWR1BhdGhEYXRhJDEuVkVSVF9MSU5FX1RPXT0xLF9hJDFbU1ZHUGF0aERhdGEkMS5DTE9TRV9QQVRIXT0wLF9hJDFbU1ZHUGF0aERhdGEkMS5RVUFEX1RPXT00LF9hJDFbU1ZHUGF0aERhdGEkMS5TTU9PVEhfUVVBRF9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuQ1VSVkVfVE9dPTYsX2EkMVtTVkdQYXRoRGF0YSQxLlNNT09USF9DVVJWRV9UT109NCxfYSQxW1NWR1BhdGhEYXRhJDEuQVJDXT03LF9hJDEpO2V4cG9ydHtTVkdQYXRoRGF0YSQxIGFzIFNWR1BhdGhEYXRhLENPTU1BTkRfQVJHX0NPVU5UUyQxIGFzIENPTU1BTkRfQVJHX0NPVU5UUyxlbmNvZGVTVkdQYXRoJCQxIGFzIGVuY29kZVNWR1BhdGgsU1ZHUGF0aERhdGFQYXJzZXIkJDEgYXMgU1ZHUGF0aERhdGFQYXJzZXIsU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TVkdQYXRoRGF0YS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgdG9QYXRoIGZyb20gJy4vdG9QYXRoJztcbmltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcbmltcG9ydCB2YWxpZCBmcm9tICcuL3ZhbGlkJztcblxuZXhwb3J0IHsgdG9QYXRoLCB0b1BvaW50cywgdmFsaWQgfTsiLCJpbXBvcnQgdG9Qb2ludHMgZnJvbSAnLi90b1BvaW50cyc7XG5cbnZhciBwb2ludHNUb0QgPSBmdW5jdGlvbiBwb2ludHNUb0QocCkge1xuICB2YXIgZCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmaXJzdFBvaW50ID0gdm9pZCAwO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgcG9pbnQgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBfcG9pbnQkY3VydmUgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICBjdXJ2ZSA9IF9wb2ludCRjdXJ2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcG9pbnQkY3VydmUsXG4gICAgICAgICAgbW92ZVRvID0gcG9pbnQubW92ZVRvLFxuICAgICAgICAgIHggPSBwb2ludC54LFxuICAgICAgICAgIHkgPSBwb2ludC55O1xuXG4gICAgICB2YXIgaXNGaXJzdFBvaW50ID0gaSA9PT0gMCB8fCBtb3ZlVG87XG4gICAgICB2YXIgaXNMYXN0UG9pbnQgPSBpID09PSBwLmxlbmd0aCAtIDEgfHwgcFtpICsgMV0ubW92ZVRvO1xuICAgICAgdmFyIHByZXZQb2ludCA9IGkgPT09IDAgPyBudWxsIDogcFtpIC0gMV07XG5cbiAgICAgIGlmIChpc0ZpcnN0UG9pbnQpIHtcbiAgICAgICAgZmlyc3RQb2ludCA9IHBvaW50O1xuXG4gICAgICAgIGlmICghaXNMYXN0UG9pbnQpIHtcbiAgICAgICAgICBkICs9ICdNJyArIHggKyAnLCcgKyB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnZlKSB7XG4gICAgICAgIHN3aXRjaCAoY3VydmUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2FyYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMiA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9IF9wb2ludCRjdXJ2ZTIubGFyZ2VBcmNGbGFnLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZyA9IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBcixcbiAgICAgICAgICAgICAgICByeCA9IF9wb2ludCRjdXJ2ZTIucngsXG4gICAgICAgICAgICAgICAgcnkgPSBfcG9pbnQkY3VydmUyLnJ5LFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9IF9wb2ludCRjdXJ2ZTIuc3dlZXBGbGFnLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZyA9IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJHhBeGlzUm8gPSBfcG9pbnQkY3VydmUyLnhBeGlzUm90YXRpb24sXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbiA9IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbztcblxuICAgICAgICAgICAgZCArPSAnQScgKyByeCArICcsJyArIHJ5ICsgJywnICsgeEF4aXNSb3RhdGlvbiArICcsJyArIGxhcmdlQXJjRmxhZyArICcsJyArIHN3ZWVwRmxhZyArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3ViaWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTMgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBjeDEgPSBfcG9pbnQkY3VydmUzLngxLFxuICAgICAgICAgICAgICAgIGN5MSA9IF9wb2ludCRjdXJ2ZTMueTEsXG4gICAgICAgICAgICAgICAgY3gyID0gX3BvaW50JGN1cnZlMy54MixcbiAgICAgICAgICAgICAgICBjeTIgPSBfcG9pbnQkY3VydmUzLnkyO1xuXG4gICAgICAgICAgICBkICs9ICdDJyArIGN4MSArICcsJyArIGN5MSArICcsJyArIGN4MiArICcsJyArIGN5MiArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncXVhZHJhdGljJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmU0ID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgcXgxID0gX3BvaW50JGN1cnZlNC54MSxcbiAgICAgICAgICAgICAgICBxeTEgPSBfcG9pbnQkY3VydmU0LnkxO1xuXG4gICAgICAgICAgICBkICs9ICdRJyArIHF4MSArICcsJyArIHF5MSArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICAgIGQgKz0gJ1onO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTGFzdFBvaW50ICYmIHggPT09IGZpcnN0UG9pbnQueCAmJiB5ID09PSBmaXJzdFBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnWic7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54ICYmIHkgIT09IHByZXZQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ0wnICsgeCArICcsJyArIHk7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54KSB7XG4gICAgICAgIGQgKz0gJ0gnICsgeDtcbiAgICAgIH0gZWxzZSBpZiAoeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnVicgKyB5O1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkO1xufTtcblxudmFyIHRvUGF0aCA9IGZ1bmN0aW9uIHRvUGF0aChzKSB7XG4gIHZhciBpc1BvaW50cyA9IEFycmF5LmlzQXJyYXkocyk7XG4gIHZhciBpc0dyb3VwID0gaXNQb2ludHMgPyBBcnJheS5pc0FycmF5KHNbMF0pIDogcy50eXBlID09PSAnZyc7XG4gIHZhciBwb2ludHMgPSBpc1BvaW50cyA/IHMgOiBpc0dyb3VwID8gcy5zaGFwZXMubWFwKGZ1bmN0aW9uIChzaHApIHtcbiAgICByZXR1cm4gdG9Qb2ludHMoc2hwKTtcbiAgfSkgOiB0b1BvaW50cyhzKTtcblxuICBpZiAoaXNHcm91cCkge1xuICAgIHJldHVybiBwb2ludHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcG9pbnRzVG9EKHApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50c1RvRChwb2ludHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9QYXRoOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHRvUG9pbnRzID0gZnVuY3Rpb24gdG9Qb2ludHMoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsndHlwZSddKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21DaXJjbGUocHJvcHMpO1xuICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21FbGxpcHNlKHByb3BzKTtcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tTGluZShwcm9wcyk7XG4gICAgY2FzZSAncGF0aCc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBhdGgocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2x5Z29uKHByb3BzKTtcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKHByb3BzKTtcbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUmVjdChwcm9wcyk7XG4gICAgY2FzZSAnZyc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUcocHJvcHMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIHNoYXBlIHR5cGUnKTtcbiAgfVxufTtcblxudmFyIGdldFBvaW50c0Zyb21DaXJjbGUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tQ2lyY2xlKF9yZWYyKSB7XG4gIHZhciBjeCA9IF9yZWYyLmN4LFxuICAgICAgY3kgPSBfcmVmMi5jeSxcbiAgICAgIHIgPSBfcmVmMi5yO1xuXG4gIHJldHVybiBbeyB4OiBjeCwgeTogY3kgLSByLCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByLCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHIsIHJ5OiByLCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21FbGxpcHNlID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUVsbGlwc2UoX3JlZjMpIHtcbiAgdmFyIGN4ID0gX3JlZjMuY3gsXG4gICAgICBjeSA9IF9yZWYzLmN5LFxuICAgICAgcnggPSBfcmVmMy5yeCxcbiAgICAgIHJ5ID0gX3JlZjMucnk7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHJ5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByeSwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21MaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUxpbmUoX3JlZjQpIHtcbiAgdmFyIHgxID0gX3JlZjQueDEsXG4gICAgICB4MiA9IF9yZWY0LngyLFxuICAgICAgeTEgPSBfcmVmNC55MSxcbiAgICAgIHkyID0gX3JlZjQueTI7XG5cbiAgcmV0dXJuIFt7IHg6IHgxLCB5OiB5MSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeDIsIHk6IHkyIH1dO1xufTtcblxudmFyIHZhbGlkQ29tbWFuZHMgPSAvW01tTGxIaFZ2Q2NTc1FxVHRBYVp6XS9nO1xuXG52YXIgY29tbWFuZExlbmd0aHMgPSB7XG4gIEE6IDcsXG4gIEM6IDYsXG4gIEg6IDEsXG4gIEw6IDIsXG4gIE06IDIsXG4gIFE6IDQsXG4gIFM6IDQsXG4gIFQ6IDIsXG4gIFY6IDEsXG4gIFo6IDBcbn07XG5cbnZhciByZWxhdGl2ZUNvbW1hbmRzID0gWydhJywgJ2MnLCAnaCcsICdsJywgJ20nLCAncScsICdzJywgJ3QnLCAndiddO1xuXG52YXIgaXNSZWxhdGl2ZSA9IGZ1bmN0aW9uIGlzUmVsYXRpdmUoY29tbWFuZCkge1xuICByZXR1cm4gcmVsYXRpdmVDb21tYW5kcy5pbmRleE9mKGNvbW1hbmQpICE9PSAtMTtcbn07XG5cbnZhciBvcHRpb25hbEFyY0tleXMgPSBbJ3hBeGlzUm90YXRpb24nLCAnbGFyZ2VBcmNGbGFnJywgJ3N3ZWVwRmxhZyddO1xuXG52YXIgZ2V0Q29tbWFuZHMgPSBmdW5jdGlvbiBnZXRDb21tYW5kcyhkKSB7XG4gIHJldHVybiBkLm1hdGNoKHZhbGlkQ29tbWFuZHMpO1xufTtcblxudmFyIGdldFBhcmFtcyA9IGZ1bmN0aW9uIGdldFBhcmFtcyhkKSB7XG4gIHJldHVybiBkLnNwbGl0KHZhbGlkQ29tbWFuZHMpLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1swLTldKy0vZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLnNsaWNlKDAsIC0xKSArICcgLSc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1xcLlswLTldKy9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0gKyAnICc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnRyaW0oKTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYubGVuZ3RoID4gMDtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYuc3BsaXQoL1sgLF0rLykubWFwKHBhcnNlRmxvYXQpLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuICFpc05hTihuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBhdGggPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUGF0aChfcmVmNSkge1xuICB2YXIgZCA9IF9yZWY1LmQ7XG5cbiAgdmFyIGNvbW1hbmRzID0gZ2V0Q29tbWFuZHMoZCk7XG4gIHZhciBwYXJhbXMgPSBnZXRQYXJhbXMoZCk7XG5cbiAgdmFyIHBvaW50cyA9IFtdO1xuXG4gIHZhciBtb3ZlVG8gPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb21tYW5kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2ldO1xuICAgIHZhciB1cHBlckNhc2VDb21tYW5kID0gY29tbWFuZC50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBjb21tYW5kTGVuZ3RoID0gY29tbWFuZExlbmd0aHNbdXBwZXJDYXNlQ29tbWFuZF07XG4gICAgdmFyIHJlbGF0aXZlID0gaXNSZWxhdGl2ZShjb21tYW5kKTtcblxuICAgIGlmIChjb21tYW5kTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNvbW1hbmRQYXJhbXMgPSBwYXJhbXMuc2hpZnQoKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gY29tbWFuZFBhcmFtcy5sZW5ndGggLyBjb21tYW5kTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICB2YXIgcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBzd2l0Y2ggKHVwcGVyQ2FzZUNvbW1hbmQpIHtcbiAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIHZhciB4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICAgICAgbW92ZVRvID0geyB4OiB4LCB5OiB5IH07XG4gICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogcHJldlBvaW50LnlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiBwcmV2UG9pbnQueCxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyYycsXG4gICAgICAgICAgICAgICAgcng6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICByeTogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHhBeGlzUm90YXRpb246IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBsYXJnZUFyY0ZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBzd2VlcEZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG9wdGlvbmFsQXJjS2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdWydjdXJ2ZSddW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1YmljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB4MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHZhciBzeDIgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3ggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgdmFyIGRpZmYgPSB7fTtcblxuICAgICAgICAgICAgdmFyIHN4MSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBzeTEgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmIChwcmV2UG9pbnQuY3VydmUgJiYgcHJldlBvaW50LmN1cnZlLnR5cGUgPT09ICdjdWJpYycpIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngyID8gcHJldlBvaW50LnggLSBkaWZmLnggOiBwcmV2UG9pbnQueCArIGRpZmYueDtcbiAgICAgICAgICAgICAgc3kxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTIgPyBwcmV2UG9pbnQueSAtIGRpZmYueSA6IHByZXZQb2ludC55ICsgZGlmZi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMoc3ggLSBzeDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhzeSAtIHN5Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAnY3ViaWMnLCB4MTogc3gxLCB5MTogc3kxLCB4Mjogc3gyLCB5Mjogc3kyIH0sIHg6IHN4LCB5OiBzeSB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncXVhZHJhdGljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIHZhciB0eCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgdHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgdHgxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHR5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ3F1YWRyYXRpYycpIHtcbiAgICAgICAgICAgICAgdmFyIF9kaWZmID0ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGguYWJzKHByZXZQb2ludC54IC0gcHJldlBvaW50LmN1cnZlLngxKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55MSlcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueCA8IHByZXZQb2ludC5jdXJ2ZS54MSA/IHByZXZQb2ludC54IC0gX2RpZmYueCA6IHByZXZQb2ludC54ICsgX2RpZmYueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTEgPyBwcmV2UG9pbnQueSAtIF9kaWZmLnkgOiBwcmV2UG9pbnQueSArIF9kaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgY3VydmU6IHsgdHlwZTogJ3F1YWRyYXRpYycsIHgxOiB0eDEsIHkxOiB0eTEgfSwgeDogdHgsIHk6IHR5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3ByZXZQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gfHwgeyB4OiAwLCB5OiAwIH07XG5cbiAgICAgIGlmIChfcHJldlBvaW50LnggIT09IG1vdmVUby54IHx8IF9wcmV2UG9pbnQueSAhPT0gbW92ZVRvLnkpIHtcbiAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBtb3ZlVG8ueCwgeTogbW92ZVRvLnkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9seWdvbiA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5Z29uKF9yZWY2KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNi5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IHRydWUsIHBvaW50czogcG9pbnRzIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5bGluZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5bGluZShfcmVmNykge1xuICB2YXIgcG9pbnRzID0gX3JlZjcucG9pbnRzO1xuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tUG9pbnRzKHsgY2xvc2VkOiBmYWxzZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvaW50cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2ludHMoX3JlZjgpIHtcbiAgdmFyIGNsb3NlZCA9IF9yZWY4LmNsb3NlZCxcbiAgICAgIHBvaW50cyA9IF9yZWY4LnBvaW50cztcblxuICB2YXIgbnVtYmVycyA9IHBvaW50cy5zcGxpdCgvW1xccyxdKy8pLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG4pO1xuICB9KTtcblxuICB2YXIgcCA9IG51bWJlcnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHBvaW50LCBpKSB7XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBhcnIucHVzaCh7IHg6IHBvaW50IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJbKGkgLSAxKSAvIDJdLnkgPSBwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9LCBbXSk7XG5cbiAgaWYgKGNsb3NlZCkge1xuICAgIHAucHVzaChfZXh0ZW5kcyh7fSwgcFswXSkpO1xuICB9XG5cbiAgcFswXS5tb3ZlVG8gPSB0cnVlO1xuXG4gIHJldHVybiBwO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3QoX3JlZjkpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWY5LmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjkucngsXG4gICAgICByeSA9IF9yZWY5LnJ5LFxuICAgICAgd2lkdGggPSBfcmVmOS53aWR0aCxcbiAgICAgIHggPSBfcmVmOS54LFxuICAgICAgeSA9IF9yZWY5Lnk7XG5cbiAgaWYgKHJ4IHx8IHJ5KSB7XG4gICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyh7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHJ4OiByeCB8fCByeSxcbiAgICAgIHJ5OiByeSB8fCByeCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCh7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIHg6IHgsIHk6IHkgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21CYXNpY1JlY3QoX3JlZjEwKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMTAuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmMTAud2lkdGgsXG4gICAgICB4ID0gX3JlZjEwLngsXG4gICAgICB5ID0gX3JlZjEwLnk7XG5cbiAgcmV0dXJuIFt7IHg6IHgsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyhfcmVmMTEpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMS5oZWlnaHQsXG4gICAgICByeCA9IF9yZWYxMS5yeCxcbiAgICAgIHJ5ID0gX3JlZjExLnJ5LFxuICAgICAgd2lkdGggPSBfcmVmMTEud2lkdGgsXG4gICAgICB4ID0gX3JlZjExLngsXG4gICAgICB5ID0gX3JlZjExLnk7XG5cbiAgdmFyIGN1cnZlID0geyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9O1xuXG4gIHJldHVybiBbeyB4OiB4ICsgcngsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCAtIHJ4LCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgcnksIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCAtIHJ5IH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgKyBoZWlnaHQsIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyByeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgLSByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCwgeTogeSArIHJ5IH0sIHsgeDogeCArIHJ4LCB5OiB5LCBjdXJ2ZTogY3VydmUgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUcgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRyhfcmVmMTIpIHtcbiAgdmFyIHNoYXBlcyA9IF9yZWYxMi5zaGFwZXM7XG4gIHJldHVybiBzaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHRvUG9pbnRzKHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUG9pbnRzOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGdldEVycm9ycyA9IGZ1bmN0aW9uIGdldEVycm9ycyhzaGFwZSkge1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyhzaGFwZSk7XG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBydWxlcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbWF0Y2ggPSBfcmVmLm1hdGNoLFxuICAgICAgICBwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgICByZXF1aXJlZCA9IF9yZWYucmVxdWlyZWQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGU7XG5cbiAgICBpZiAodHlwZW9mIHNoYXBlW3Byb3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgaXMgcmVxdWlyZWQnICsgKHByb3AgPT09ICd0eXBlJyA/ICcnIDogJyBvbiBhICcgKyBzaGFwZS50eXBlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGVbcHJvcF0pKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSBhcnJheScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHNoYXBlW3Byb3BdKSAhPT0gdHlwZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9mIHR5cGUgJyArIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoKSkge1xuICAgICAgICBpZiAobWF0Y2guaW5kZXhPZihzaGFwZVtwcm9wXSkgPT09IC0xKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9uZSBvZiAnICsgbWF0Y2guam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzaGFwZS50eXBlID09PSAnZycgJiYgQXJyYXkuaXNBcnJheShzaGFwZS5zaGFwZXMpKSB7XG4gICAgdmFyIGNoaWxkRXJyb3JzID0gc2hhcGUuc2hhcGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGdldEVycm9ycyhzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KGVycm9ycywgY2hpbGRFcnJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IFt7XG4gICAgbWF0Y2g6IFsnY2lyY2xlJywgJ2VsbGlwc2UnLCAnbGluZScsICdwYXRoJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmVjdCcsICdnJ10sXG4gICAgcHJvcDogJ3R5cGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH1dO1xuXG4gIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDEnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneTInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdkJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3BvaW50cycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVjdCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2hlaWdodCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnd2lkdGgnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2cnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdzaGFwZXMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxudmFyIHZhbGlkID0gZnVuY3Rpb24gdmFsaWQoc2hhcGUpIHtcbiAgdmFyIGVycm9ycyA9IGdldEVycm9ycyhzaGFwZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IGVycm9ycyxcbiAgICB2YWxpZDogZXJyb3JzLmxlbmd0aCA9PT0gMFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWQ7IiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9