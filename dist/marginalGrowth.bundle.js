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
/******/ 	return __webpack_require__(__webpack_require__.s = "./experiments/marginal-growth/js/entry.js");
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

/***/ "./experiments/marginal-growth/js/entry.js":
/*!*************************************************!*\
  !*** ./experiments/marginal-growth/js/entry.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Node */ "./core/Node.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");
/* harmony import */ var _core_Attractor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Attractor */ "./core/Attractor.js");
/* harmony import */ var _core_SVGLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/SVGLoader */ "./core/SVGLoader.js");








let canvas, ctx;
let network;

const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./experiments/marginal-growth/svg/leaf.svg");
const grassBlade = __webpack_require__(/*! ../svg/grass-blade.svg */ "./experiments/marginal-growth/svg/grass-blade.svg");

let currentPath;

const LINE = 0;
const TRIANGLE = 1;
const SQUARE = 2;
const DIAMOND = 3;
const CIRCLE = 4;
const LEAF = 5;
let currentPathShape = SQUARE;

let yPosition = 0;

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

  // Load the defined path
  setupPath();

  // Add the bounds, attractors, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_4__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addRootNodes();
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
  let addRootNodes = () => {
    const cx = window.innerWidth/2;
    let cy = window.innerHeight/2;

    if(currentPathShape == LINE) {
      cy = window.innerHeight - 100;
    }

    network.addNode(
      new _core_Node__WEBPACK_IMPORTED_MODULE_2__["default"](
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

  let generateAttractorsOnPath = () => {
    // network.attractors = createEvenlySpacedAttractors();
    network.attractors = createSubdividedAttractors();
  
    for(let attractor of network.attractors) {
      attractor.settings = network.settings;
    }
  }

    let createEvenlySpacedAttractors = () => {
      let attractors = [];
      const attractorSpacing = 10;
      let previousSegmentRemainder = 0;

      // For each path segment ...
      for(let i=1; i<currentPath.transformedPolygon.length; i++) {
        const point0 = vec2__WEBPACK_IMPORTED_MODULE_0__(currentPath.transformedPolygon[i-1][0], currentPath.transformedPolygon[i-1][1]);
        const point1 = vec2__WEBPACK_IMPORTED_MODULE_0__(currentPath.transformedPolygon[i][0], currentPath.transformedPolygon[i][1]);
        const currentSegmentLength = point1.distance(point0);
        const startingOffset = attractorSpacing - previousSegmentRemainder;
        const availableLength = currentSegmentLength - startingOffset;

        // We can fit at least one attractor onto this segment
        if(availableLength >= attractorSpacing) {
          let segmentDirection = point1.subtract(point0, true).normalize();

          // How many attractors can we fit onto this segment?
          const numAttractors = Math.floor(availableLength / attractorSpacing);

          // Create as many attractors as we can
          for(let attractorIndex=0; attractorIndex<=numAttractors; attractorIndex++) {
            attractors.push(
              new _core_Attractor__WEBPACK_IMPORTED_MODULE_5__["default"](
                point0.add(segmentDirection.multiply(attractorSpacing * attractorIndex + startingOffset, true), true),
                ctx
              )
            );
          }

          // Store remainder of segment length to offset next segment's attractor placement
          previousSegmentRemainder = availableLength - (numAttractors * attractorSpacing);

        // Can't fit any attractors onto this segment, so accumulate the length (previous segments might've also been too short)
        } else {
          previousSegmentRemainder += currentSegmentLength;
        }
      }

      return attractors;
    }

    let createSubdividedAttractors = () => {
      let attractors = [];

      // Create attractors at each vertex
      for(let i=0; i<currentPath.transformedPolygon.length; i++) {
        attractors.push(
          new _core_Attractor__WEBPACK_IMPORTED_MODULE_5__["default"](
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              currentPath.transformedPolygon[i][0],
              currentPath.transformedPolygon[i][1]
            ),
            ctx
          )
        );
      }

      let newAttractors = [];

      // Recursively subdivide segments
      for(let i=1; i<attractors.length; i++) {
        const point0 = attractors[i-1].position;
        const point1 = attractors[i].position;
        subdivideSegment(point0, point1, i, newAttractors);
      }

      // Reverse the new attractors list so that indices don't shift as they are inserted
      newAttractors.sort((a,b) => {
        return b.index - a.index;
      });

      // Inject all the new attractors
      for(let newAttractor of newAttractors) {
        attractors.splice(newAttractor.index, 0, newAttractor.attractor);
      }

      return attractors;
    }

      // Split a segment (defined by two input points) by placing a attractor at it's midpoint
      let subdivideSegment = (point0, point1, originalIndex, newAttractors) => {
        const segmentLength = point1.distance(point0);

        // Only subdivide the segment if its long enough (terminates recursion in short segments)
        if(segmentLength > 20) {
          let midpointAttractor = getMidpointAttractor(point0, point1, segmentLength);
          newAttractors.push({
            index: originalIndex,
            attractor: midpointAttractor
          });

          // Recursively subdivide the new segments
          subdivideSegment(point0, midpointAttractor.position, originalIndex, newAttractors); // subdivide the left segment
          subdivideSegment(midpointAttractor.position, point1, originalIndex, newAttractors); // subdivide the right segment
        }
      }

      // Generate a new attractor exactly halfway between two others
      let getMidpointAttractor = (point0, point1, segmentLength) => {
        const segmentDirection = point1.subtract(point0, true).normalize();

        return new _core_Attractor__WEBPACK_IMPORTED_MODULE_5__["default"](
          point0.add(segmentDirection.multiply(segmentLength/2, true), true),
          ctx
        );
      }

let drawText = () => {
  let text = [
    'Attractors can be placed on the edges of paths,',
    'creating growth as they are scaled.',
    '',
    '1 = horizontal line moving upwards',
    '2 = triangle',
    '3 = square',
    '4 = diamond',
    '5 = circle',
    '6 = a leaf',
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
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Marginal Growth', 20, 40);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  for(let i=0; i<text.length; i++) {
    ctx.fillText(text[i], 20, 22*i + 80);
  }
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

    generateAttractorsOnPath();

    network.update();
  }

  network.draw();
  currentPath.draw();

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

/***/ "./experiments/marginal-growth/svg/grass-blade.svg":
/*!*********************************************************!*\
  !*** ./experiments/marginal-growth/svg/grass-blade.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" version=\"1.1\" id=\"svg36\" sodipodi:docname=\"grass-blade.svg\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g inkscape:groupmode=\"layer\" inkscape:label=\"0\" id=\"g34\"><path id=\"path32\" style=\"fill:none;stroke:#000000;stroke-width:0.96219009;stroke-miterlimit:4;stroke-dasharray:none\" d=\"M 441.95752,61.457361 441.71727,61.112414 441.39983,60.866028 441.03092,60.718195 440.63628,60.668914 440.24165,60.718195 439.87274,60.866028 439.5553,61.112414 439.31505,61.457361 M 467.8534,172.38615 467.4407,158.06364 466.2072,143.81219 464.15984,129.66146 461.30555,115.64115 457.65124,101.7809 453.20385,88.11042 447.9703,74.659344 441.95752,61.457361 M 439.31505,61.457361 433.30227,74.659344 428.06872,88.11042 423.62133,101.7809 419.96702,115.64115 417.11273,129.66146 415.06537,143.81219 413.83187,158.06364 413.41917,172.38615 M 467.8534,854.6005 H 461.04912 454.24484 447.44056 440.63629 433.83201 427.02773 420.22345 413.41917 M 467.8534,172.38615 V 257.66294 342.93974 428.21653 513.49333 598.77012 684.04691 769.3237 854.6005 M 413.41917,854.6005 V 769.3237 684.04691 598.77012 513.49333 428.21653 342.93974 257.66294 172.38615\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"cccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ }),

/***/ "./experiments/marginal-growth/svg/leaf.svg":
/*!**************************************************!*\
  !*** ./experiments/marginal-growth/svg/leaf.svg ***!
  \**************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9Db2xvclByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9EZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvcmUvTmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9QYXRoLmpzIiwid2VicGFjazovLy8uL2NvcmUvU1ZHTG9hZGVyLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL21hcmdpbmFsLWdyb3d0aC9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9leHBlcmltZW50cy9tYXJnaW5hbC1ncm93dGgvc3ZnL2dyYXNzLWJsYWRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9leHBlcmltZW50cy9tYXJnaW5hbC1ncm93dGgvc3ZnL2xlYWYuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtaW4tcG9seWdvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGhkYXRhL2xpYi9TVkdQYXRoRGF0YS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3RvUG9pbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdmFsaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZlYzIvdmVjMi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQWtDOztBQUVuQjtBQUNmLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLG9D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Q0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEU7Ozs7Ozs7Ozs7O0FDOUdwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVSxFQUFFOztBQUVqRDtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN4ZEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6Im1hcmdpbmFsR3Jvd3RoLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhwZXJpbWVudHMvbWFyZ2luYWwtZ3Jvd3RoL2pzL2VudHJ5LmpzXCIpO1xuIiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmFjdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAgICAvLyB2ZWMyIG9mIHRoaXMgYXR0cmFjdG9yJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2luZ05vZGVzID0gW107ICAgLy8gcmVmZXJlbmNlcyB0byBub2RlcyB0aGlzIGF0dHJhY3RvciBpcyBpbmZsdWVuY2luZyBlYWNoIGZyYW1lXHJcbiAgICB0aGlzLmZyZXNoID0gdHJ1ZTsgICAgICAgICAgICAvLyBmbGFnIHVzZWQgdG8gcHJldmVudCBhdHRyYWN0b3JzIGZyb20gYmVpbmcgcmVtb3ZlZCBkdXJpbmcgZmlyc3QgZnJhbWUgb2YgQ2xvc2VkIHZlbmF0aW9uIG1vZGVcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3Rpb25ab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBraWxsIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0b3JcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdG9yQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTGlnaHQgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDAsMCwwLDEpJyxcclxuICBUaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGFyayA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC45KScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBUaXBDb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4yKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZWFsaXN0aWMgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBCcmFuY2hDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICAvLyBCcmFuY2hDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcclxuICBUaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoNjEsMTY2LDEyLDEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbSA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDI0MiwyNDIpJyxcclxuICBBdHRyYWN0b3JDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICBCcmFuY2hDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4zKScsXHJcbiAgLy8gQm91bmRzRmlsbENvbG9yOiAncmdiKDYxLDg1LDEzNiknLFxyXG4gIC8vIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDYxLDg1LDEzNiknXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiKDIxMCwgODEsIDk0KScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoMjEwLCA4MSwgOTQpJ1xyXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIFJlYWxpc3RpYywgQ3VzdG9tIH0gZnJvbSAnLi9Db2xvclByZXNldHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKlxyXG4gICAgU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIFZlbmF0aW9uVHlwZTogJ09wZW4nLCAgICAgICAgIC8vIHZlbmF0aW9uIGNhbiBiZSBcIk9wZW5cIiBvciBcIkNsb3NlZFwiXHJcbiAgU2VnbWVudExlbmd0aDogNSwgICAgICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggYnJhbmNoIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiAzMCwgICAgICAgLy8gcmFkaXVzIG9mIGluZmx1ZW5jZSAoZF9pKSBhcm91bmQgZWFjaCBhdHRyYWN0b3IgdGhhdCBhdHRyYWN0cyBub2Rlc1xyXG4gIEtpbGxEaXN0YW5jZTogNSwgICAgICAgICAgICAgIC8vIGRpc3RhbmNlIChkX2spIGJldHdlZW4gYXR0cmFjdG9ycyBhbmQgbm9kZXMgd2hlbiBicmFuY2hlcyBhcmUgZW5kZWRcclxuICBJc1BhdXNlZDogZmFsc2UsICAgICAgICAgICAgICAvLyBpbml0aWFsIHBhdXNlL3VucGF1c2Ugc3RhdGVcclxuICBFbmFibGVDYW5hbGl6YXRpb246IHRydWUsICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gIEVuYWJsZU9wYWNpdHlCbGVuZGluZzogdHJ1ZSwgIC8vIHR1cm5zIG9uL29mZiBvcGFjaXR5XHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dBdHRyYWN0b3JzOiBmYWxzZSwgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dOb2RlczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICduJ1xyXG4gIFNob3dUaXBzOiBmYWxzZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICd6J1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdrJ1xyXG4gIFNob3dJbmZsdWVuY2VMaW5lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IGZhbHNlLCAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdvJ1xyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFJlbmRlck1vZGU6ICdMaW5lcycsICAvLyBkcmF3IGJyYW5jaCBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gQ29sb3JzXHJcbiAgQ29sb3JzOiBEYXJrLFxyXG5cclxuICAvLyBMaW5lIHRoaWNrbmVzc2VzXHJcbiAgQnJhbmNoVGhpY2tuZXNzOiAxLjUsXHJcbiAgVGlwVGhpY2tuZXNzOiAyLFxyXG4gIEJvdW5kc0JvcmRlclRoaWNrbmVzczogMVxyXG59IiwiaW1wb3J0IHsgZXhwb3J0U1ZHIH0gZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yaykge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICAvLyBTcGFjZSA9IHBhdXNlL3VucGF1c2VcclxuICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYiA9IHRvZ2dsZSBicmFuY2ggdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUJyYW5jaGVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3RvciB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdG9ycygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8geiA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd6JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3Rpb25ab25lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdCA9IHRvZ2dsZSB0aXAgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd0JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVRpcHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGsgPSB0b2dnbGUga2lsbCB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVJbmZsdWVuY2VMaW5lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYiA9IHRvZ2dsZSBib3VuZHMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gbyA9IHRvZ2dsZSBvYnN0YWNsZXMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdvJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9ic3RhY2xlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gZSA9IGV4cG9ydCBhbiBTVkcgZmlsZSBvZiBhbGwgdmlzaWJsZSBnZW9tZXRyeVxyXG4gICAgICBjYXNlICdlJzpcclxuICAgICAgICBleHBvcnRTVkcobmV0d29yayk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBjID0gdG9nZ2xlIGF1eGluIGZsdXggY2FuYWxpemF0aW9uXHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQ2FuYWxpemF0aW9uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBwID0gdG9nZ2xlIG9wYWNpdHkgYmxlbmRpbmdcclxuICAgICAgY2FzZSAncCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVPcGFjaXR5QmxlbmRpbmcoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0IEtEQnVzaCBmcm9tICdrZGJ1c2gnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuYXR0cmFjdG9ycyA9IFtdOyAgLy8gYXR0cmFjdG9ycyBpbmZsdWVuY2Ugbm9kZSBncm93dGhcclxuICAgIHRoaXMubm9kZXMgPSBbXTsgICAgICAgLy8gbm9kZXMgYXJlIGNvbm5lY3RlZCB0byBmb3JtIGJyYW5jaGVzXHJcblxyXG4gICAgdGhpcy5ub2Rlc0luZGV4OyAgICAgICAvLyBrZC1idXNoIHNwYXRpYWwgaW5kZXggZm9yIGFsbCBub2Rlc1xyXG5cclxuICAgIHRoaXMuYm91bmRzID0gW107ICAgICAgLy8gYXJyYXkgb2YgUGF0aCBvYmplY3RzIHRoYXQgYnJhbmNoZXMgY2Fubm90IGdyb3cgb3V0c2lkZSBvZlxyXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTsgICAvLyBhcnJheSBvZiBQYXRoIG9iamVjdHMgdGhhdCBicmFuY2hlcyBtdXN0IGF2b2lkXHJcblxyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBTa2lwIGl0ZXJhdGlvbiBpZiBwYXVzZWRcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFzc29jaWF0ZSBhdHRyYWN0b3JzIHdpdGggbmVhcmJ5IG5vZGVzIHRvIGZpZ3VyZSBvdXQgd2hlcmUgZ3Jvd3RoIHNob3VsZCBvY2N1clxyXG4gICAgZm9yKGxldCBbYXR0cmFjdG9ySUQsIGF0dHJhY3Rvcl0gb2YgdGhpcy5hdHRyYWN0b3JzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgb25seSBhc3NvY2lhdGUgdGhpcyBhdHRyYWN0b3Igd2l0aCBpdHMgY2xvc2VzdCBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKGF0dHJhY3RvciwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChhdHRyYWN0b3JJRCk7XHJcbiAgICAgICAgICAgIGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgYXR0cmFjdG9yIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoYXR0cmFjdG9yKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShhdHRyYWN0b3IpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIGF0dHJhY3RvcidzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2RlcyA9IG5laWdoYm9yaG9vZE5vZGVzO1xyXG5cclxuICAgICAgICAgIGlmKG5vZGVzVG9Hcm93Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLmZyZXNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXNUb0dyb3cpIHtcclxuICAgICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKGF0dHJhY3RvcklEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyBub2RlcyBvbnRvIGFueSBub2RlcyBiZWluZyBpbmZsdWVuY2VkIGJ5IGF0dHJhY3RvcnNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IHRoaXMuZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5hdHRyYWN0b3JzW2lkXSkpO1xyXG4gICAgICAgIGxldCBuZXh0Tm9kZSA9IG5vZGUuZ2V0TmV4dE5vZGUoYXZlcmFnZURpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IG5vZGVzIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCBub2RlcyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOT1RFOiBkaXNhYmxpbmcgdGhpcyBjaGVjayBsZXRzIG5vZGVzIGdyb3cgYWNyb3NzIGdhcHMgaW4gYm91bmRzIC0gY29vbCBlZmZlY3QhXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG5cclxuICAgICAgLy8gUGVyZm9ybSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgICAgIGlmKG5vZGUuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgY2hpbGQgbm9kZXMsIHVzZSB0aGUgdGhpY2tlc3Qgb2YgdGhlbSBhbGxcclxuICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPCBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDcpIHtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA9IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF0dHJhY3RvcnMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIG5vZGVzXHJcbiAgICBmb3IobGV0IFthdHRyYWN0b3JJRCwgYXR0cmFjdG9yXSBvZiB0aGlzLmF0dHJhY3RvcnMuZW50cmllcygpKSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnNldHRpbmdzLlZlbmF0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEZvciBvcGVuIHZlbmF0aW9uLCByZW1vdmUgdGhlIGF0dHJhY3RvciBhcyBzb29uIGFzIGFueSBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGlmKGF0dHJhY3Rvci5yZWFjaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmFjdG9ycy5zcGxpY2UoYXR0cmFjdG9ySUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCByZW1vdmUgdGhlIGF0dHJhY3RvciBvbmx5IHdoZW4gYWxsIGFzc29jaWF0ZWQgbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDAgJiYgIWF0dHJhY3Rvci5mcmVzaCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsTm9kZXNSZWFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgICAgIGlmKG5vZGUucG9zaXRpb24uZGlzdGFuY2UoYXR0cmFjdG9yLnBvc2l0aW9uKSA+IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxOb2Rlc1JlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFsbE5vZGVzUmVhY2hlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYXR0cmFjdG9ycy5zcGxpY2UoYXR0cmFjdG9ySUQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgdGhpcy5kcmF3Qm91bmRzKCk7XHJcbiAgICB0aGlzLmRyYXdPYnN0YWNsZXMoKTtcclxuICAgIHRoaXMuZHJhd2F0dHJhY3RvcnMoKTtcclxuICAgIHRoaXMuZHJhd05vZGVzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JvdW5kcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd09ic3RhY2xlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd05vZGVzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93Tm9kZXMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd2F0dHJhY3RvcnMoKSB7XHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiB0aGlzLmF0dHJhY3RvcnMpIHtcclxuICAgICAgYXR0cmFjdG9yLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIGF0dHJhY3RvciBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2YgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKGF0dHJhY3Rvci5wb3NpdGlvbi54LCBhdHRyYWN0b3IucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoYXR0cmFjdG9yKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShhdHRyYWN0b3IpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgYXR0cmFjdG9yVG9QMCwgYXR0cmFjdG9yVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIGF0dHJhY3RvclRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChhdHRyYWN0b3IucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdHRyYWN0b3JUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QoYXR0cmFjdG9yLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoYXR0cmFjdG9yVG9QMS5sZW5ndGgoKSA+IGF0dHJhY3RvclRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihhdHRyYWN0b3JUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShhdHRyYWN0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBhdHRyYWN0b3IucG9zaXRpb24ueCxcclxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoYXR0cmFjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLngsXHJcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoYXR0cmFjdG9yLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2UoYXR0cmFjdG9yLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBhdHRyYWN0b3IucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieWF0dHJhY3RvcnMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdHRyYWN0b3JcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiBuZWFyYnlhdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdHRyYWN0b3JzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZE5vZGUobm9kZSkge1xyXG4gICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCBub2RlcyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBpZihib3VuZC5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCBub2RlcyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKFxyXG4gICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgIHRoaXMuYXR0cmFjdG9ycyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcclxuICAgIHRoaXMubm9kZXNJbmRleCA9IG5ldyBLREJ1c2godGhpcy5ub2RlcywgcCA9PiBwLnBvc2l0aW9uLngsIHAgPT4gcC5wb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU5vZGVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93Tm9kZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93Tm9kZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaXBzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dUaXBzO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1RpcHMgPSAhbm9kZS5zZXR0aW5ncy5TaG93VGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3RvcnMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0b3JzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnM7XHJcblxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgdGhpcy5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5zZXR0aW5ncy5TaG93QXR0cmFjdG9ycyA9ICFhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgdGhpcy5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIWF0dHJhY3Rvci5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvdW5kcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICF0aGlzLnNldHRpbmdzLlNob3dCb3VuZHM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPYnN0YWNsZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2FuYWxpemF0aW9uKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24gPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb247XHJcblxyXG4gICAgaWYoIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS50aGlja25lc3MgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGFjaXR5QmxlbmRpbmcoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9IHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IocGFyZW50LCBwb3NpdGlvbiwgaXNUaXAsIGN0eCwgc2V0dGluZ3MsIGNvbG9yID0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDsgICAgICAgLy8gcmVmZXJlbmNlIHRvIHBhcmVudCBub2RlLCBuZWNlc3NhcnkgZm9yIHZlaW4gdGhpY2tlbmluZyBsYXRlclxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAgIC8vIHt2ZWMyfSBvZiB0aGlzIG5vZGUncyBwb3NpdGlvblxyXG4gICAgdGhpcy5pc1RpcCA9IGlzVGlwOyAgICAgICAgIC8vIHtib29sZWFufVxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dCBmb3IgZHJhd2luZ1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7ICAgICAgICAgLy8gY29sb3IsIHVzdWFsbHkgcGFzc2VkIGRvd24gZnJvbSBwYXJlbnRcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdOyAgICAgLy8gcmVmZXJlbmNlcyB0byBhbGwgQXR0cmFjdG9ycyBpbmZsdWVuY2luZyB0aGlzIG5vZGUgZWFjaCBmcmFtZVxyXG4gICAgdGhpcy50aGlja25lc3MgPSAwOyAgICAgICAgIC8vIHRoaWNrbmVzcyAtIHRoaXMgaXMgaW5jcmVhc2VkIGR1cmluZyB2ZWluIHRoaWNrZW5pbmcgcHJvY2Vzc1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgLy8gU21vb3RobHkgcmFtcCB1cCBvcGFjaXR5IGJhc2VkIG9uIHZlaW4gdGhpY2tuZXNzXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLnRoaWNrbmVzcyAvIDMgKyAuMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gXCJMaW5lc1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVGlwVGhpY2tuZXNzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZih0aGlzLmNvbG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJyYW5jaENvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuQnJhbmNoVGhpY2tuZXNzICsgdGhpcy50aGlja25lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgLy8gXCJEb3RzXCIgcmVuZGVyIG1vZGVcclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgMSArIHRoaXMudGhpY2tuZXNzIC8gMixcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIE1hdGguUEkgKiAyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIGNvbG9yIG9yIFwidGlwXCIgbm9kZXNcclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1RpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlRpcENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CcmFuY2hDb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVzZXQgZ2xvYmFsIG9wYWNpdHkgaWYgaXQgd2FzIGNoYW5nZWQgZHVlIHRvIG9wYWNpdHkgZ3JhZGllbnQgZmxhZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHByb3ZpZGVkIGRpcmVjdGlvbiBhbmQgYSBwcmUtZGVmaW5lZCBkaXN0YW5jZSAoU2VnbWVudExlbmd0aClcclxuICBnZXROZXh0Tm9kZShhdmVyYWdlQXR0cmFjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VBdHRyYWN0b3JEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBOb2RlKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLm5leHRQb3NpdGlvbixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdGhpcy5jdHgsXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MsXHJcbiAgICAgIHRoaXMuY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5cclxubGV0IGluc2lkZSA9IHJlcXVpcmUoJ3BvaW50LWluLXBvbHlnb24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBvbHlnb24sIHR5cGUsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247ICAgICAvLyBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyBjb29yZGluYXRlcyBkZWZpbmluZyBhIHBvbHlnb24gKFtbeDAseTBdLFt4MSx5MV0sLi4uXSlcclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHRcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7ICAgICAgICAgICAvLyBzdHJpbmcgZWl0aGVyICdCb3VuZHMnIG9yICdPYnN0YWNsZSdcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbiA9IHBvbHlnb247ICAvLyBQYXRocyBhcmUgaW5pdGlhbGl6ZWQgd2l0aG91dCBhbnkgdHJhbnNmb3JtYXRpb25zIGJ5IGRlZmF1bHRcclxuICAgIHRoaXMub3JpZ2luID0ge3g6MCwgeTowfTsgICAgICAgICAgIC8vIG9yaWdpbiBwb2ludCB1c2VkIGZvciB0cmFuc2xhdGlvblxyXG4gICAgdGhpcy5zY2FsZSA9IDE7ICAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwbGljYXRpb24gZmFjdG9yIGZvciBwb2x5Z29uIGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLndpZHRoID0gLTE7ICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aCBvZiB0cmFuc2Zvcm1lZCBwb2x5Z29uIC0gd2lsbCBiZSBjYWxjdWxhdGVkIHVzaW5nIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpXHJcbiAgICB0aGlzLmhlaWdodCA9IC0xOyAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQgb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxyXG4gICAgdGhpcy5pc0NlbnRlcmVkID0gZmFsc2U7ICAgICAgICAgICAgLy8gd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSB0cmFuc2xhdGUgdG8gc2NyZWVuIGNlbnRlclxyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgY29vcmRpbmF0ZXMgYXJlIGluc2lkZSBwb2x5Z29uIGRlZmluZWQgYnkgdGhpcyBQYXRoXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIGluc2lkZShbeCwgeV0sIHRoaXMucG9seWdvbik7XHJcbiAgfVxyXG5cclxuICAvLyBSZWxhdGl2ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLm9yaWdpbi54ICs9IHg7XHJcbiAgICB0aGlzLm9yaWdpbi55ICs9IHk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICB9XHJcblxyXG4gIC8vIEFic29sdXRlIHRyYW5zbGF0aW9uXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIGlmKHRoaXMuaXNDZW50ZXJlZCkge1xyXG4gICAgICB0aGlzLm9yaWdpbi54ID0geCAtIHRoaXMud2lkdGgvMjtcclxuICAgICAgdGhpcy5vcmlnaW4ueSA9IHkgLSB0aGlzLmhlaWdodC8yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHg7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY2FsZShmYWN0b3IpIHtcclxuICAgIHRoaXMuc2NhbGUgKj0gZmFjdG9yO1xyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGlmKHRoaXMuaXNDZW50ZXJlZCkge1xyXG4gICAgICB0aGlzLm1vdmVUbyh3aW5kb3cuaW5uZXJXaWR0aC8yLCB3aW5kb3cuaW5uZXJIZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYWxjdWxhdGUgdG90YWwgcGF0aCBsZW5ndGggYnkgYWRkaW5nIHVwIGFsbCBsaW5lIHNlZ21lbnQgbGVuZ3RocyAoZGlzdGFuY2VzIGJldHdlZW4gcG9seWdvbiBwb2ludHMpXHJcbiAgZ2V0VG90YWxMZW5ndGgoKSB7XHJcbiAgICBsZXQgdG90YWxMZW5ndGggPSAwO1xyXG5cclxuICAgIGZvcihsZXQgaT0xOyBpPHRoaXMucG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0b3RhbExlbmd0aCArPSBWZWMyKFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVswXSAqIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzFdICogdGhpcy5zY2FsZVxyXG4gICAgICApLmRpc3RhbmNlKFxyXG4gICAgICAgIFZlYzIoXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVswXSAqIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlcyB0aGUgcmVhbCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSB0cmFuc2Zvcm1lZCBwb2x5Z29uXHJcbiAgY2FsY3VsYXRlRGltZW5zaW9ucygpIHtcclxuICAgIGxldCBsZWZ0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLFxyXG4gICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdLFxyXG4gICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdIDwgbGVmdE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF07XHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA+IHJpZ2h0TW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICByaWdodE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdIDwgdG9wTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0gPiBib3R0b21Nb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGJvdHRvbU1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5hYnMocmlnaHRNb3N0Q29vcmRpbmF0ZSAtIGxlZnRNb3N0Q29vcmRpbmF0ZSk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGguYWJzKGJvdHRvbU1vc3RDb29yZGluYXRlIC0gdG9wTW9zdENvb3JkaW5hdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvb3JkaW5hdGVzIGZvciB0aGUgXCJ0cmFuc2Zvcm1lZFwiIHZlcnNpb24gb2YgdGhpcyBwYXRoLCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIHRyYW5zbGF0aW9uIGFuZCBzY2FsaW5nXHJcbiAgY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCkge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ucHVzaChcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueCxcclxuICAgICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGUgKyB0aGlzLm9yaWdpbi55XHJcbiAgICAgICAgXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy50eXBlID09ICdCb3VuZHMnIHx8XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLnR5cGUgPT0gJ09ic3RhY2xlcydcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICAvLyBEcmF3IHNlcXVlbnRpYWwgbGluZXMgdG8gYWxsIHBvaW50cyBvZiB0aGUgcG9seWdvblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRHJhdyBsaW5lIGJhY2sgdG8gZmlyc3QgcG9pbnQgdG8gY2xvc2UgdGhlIHBvbHlnb25cclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICBzd2l0Y2godGhpcy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQm91bmRzJzpcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLkJvdW5kc0JvcmRlclRoaWNrbmVzcztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0ZpbGxDb2xvcjtcclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ09ic3RhY2xlJzpcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLk9ic3RhY2xlRmlsbENvbG9yO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgYm91bmRpbmcgYm94XHJcbiAgICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5tb3ZlVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55KTtcclxuICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwxKSc7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7U1ZHUGF0aERhdGF9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9zdmctcGF0aGRhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBsb2FkKHN2Z1N0cmluZykge1xyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIGxldCBzdmdOb2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJyk7XHJcblxyXG4gICAgbGV0IGlucHV0UGF0aHMgPSBzdmdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhdGgnKSxcclxuICAgICAgcGF0aHMgPSBbXTtcclxuXHJcbiAgICAvLyBTY3JhcGUgYWxsIHBvaW50cyBmcm9tIGFsbCBwYXRocywgYW5kIHJlY29yZCBicmVha3BvaW50c1xyXG4gICAgZm9yKGxldCBpbnB1dFBhdGggb2YgaW5wdXRQYXRocykge1xyXG4gICAgICBsZXQgcGF0aERhdGEgPSBuZXcgU1ZHUGF0aERhdGEoaW5wdXRQYXRoLmdldEF0dHJpYnV0ZSgnZCcpKSxcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBwcmV2aW91c0Nvb3JkcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZvcihsZXQgW2luZGV4LCBjb21tYW5kXSBvZiBwYXRoRGF0YS5jb21tYW5kcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2goY29tbWFuZC50eXBlKSB7XHJcbiAgICAgICAgICAvLyBNb3ZlICgnTScpIGFuZCBsaW5lICgnTCcpIGNvbW1hbmRzIGhhdmUgYm90aCBYIGFuZCBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLk1PVkVfVE86XHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkxJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBIb3Jpem9udGFsIGxpbmUgKCdIJykgY29tbWFuZHMgb25seSBoYXZlIFgsIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBZXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE86XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFtjb21tYW5kLngsIHByZXZpb3VzQ29vcmRzLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gVmVydGljYWwgbGluZSAoJ1YnKSBjb21tYW5kcyBvbmx5IGhhdmUgWSwgdXNpbmcgcHJldmlvdXMgY29tbWFuZCdzIFhcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbcHJldmlvdXNDb29yZHMueCwgY29tbWFuZC55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIENsb3NlUGF0aCAoJ1onKSBjb21tYW5kcyBhcmUgYSBuYWl2ZSBpbmRpY2F0aW9uIHRoYXQgdGhlIGN1cnJlbnQgcGF0aCBjYW4gYmUgcHJvY2Vzc2VkIGFuZCBhZGRlZCB0byB0aGUgd29ybGRcclxuICAgICAgICAgIGNhc2UgU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSDpcclxuICAgICAgICAgICAgLy8gQ2FwdHVyZSBwYXRoIGluIHJldHVybiBvYmplY3RcclxuICAgICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgICBwb2ludHMgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVbmNsb3NlZCBwYXRocyBuZXZlciBoYXZlIENMT1NFX1BBVEggY29tbWFuZHMsIHNvIHdyYXAgdXAgdGhlIGN1cnJlbnQgcGF0aCB3aGVuIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGggYW5kIGhhdmUgbm90IGZvdW5kIHRoZSBjb21tYW5kXHJcbiAgICAgICAgaWYoaW5kZXggPT0gcGF0aERhdGEuY29tbWFuZHMubGVuZ3RoIC0gMSAmJiBjb21tYW5kLnR5cGUgIT0gU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCkge1xyXG4gICAgICAgICAgcGF0aHMucHVzaChwb2ludHMpO1xyXG4gICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFggY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3gnKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueCA9IGNvbW1hbmQueDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENhcHR1cmUgWSBjb29yZGluYXRlLCBpZiB0aGVyZSB3YXMgb25lXHJcbiAgICAgICAgaWYoY29tbWFuZC5oYXNPd25Qcm9wZXJ0eSgneScpKSB7XHJcbiAgICAgICAgICBwcmV2aW91c0Nvb3Jkcy55ID0gY29tbWFuZC55O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwYXRocztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IHRvUGF0aCB9IGZyb20gJ3N2Zy1wb2ludHMnO1xyXG5cclxuLy8gcmFuZG9tKCksIHNpbWlsYXIgdG8gUHJvY2Vzc2luZydzXHJcbi8vIElmIHR3byBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQsIHRoZXkgYXJlIGludGVycHJldGVkIGFzIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIHRoZSBkZXNpcmVkIHJhbmdlXHJcbi8vIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBwYXNzZWQsIGl0IGlzIGludGVycHJldGVkIGFzIHRoZSBtYXhpbXVtLCB3aGlsZSB6ZXJvIGlzIHVzZWQgYXMgdGhlIG1pbmltdW1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIG51bWJlciBmcm9tIG9uZSByYW5nZSB0byBhbm90aGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG9yaWdpbmFsTG93ZXIsIG9yaWdpbmFsVXBwZXIsIG5ld0xvd2VyLCBuZXdVcHBlcikge1xyXG4gIHJldHVybiBuZXdMb3dlciArIChuZXdVcHBlciAtIG5ld0xvd2VyKSAqICgodmFsdWUgLSBvcmlnaW5hbExvd2VyKSAvIChvcmlnaW5hbFVwcGVyIC0gb3JpZ2luYWxMb3dlcikpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIHBvaW50IGNvb3JkaW5hdGVzIChhbHNvIGFycmF5cywgd2l0aCB0d28gZW50cmllcykgZm9yIHBvaW50cyBhcnJhbmdlZCBpbiBhIGNpcmNsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY2xlT2ZQb2ludHMoY3gsIGN5LCByYWRpdXMsIHJlc29sdXRpb24pIHtcclxuICBsZXQgYW5nbGUsIHgsIHk7XHJcbiAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICB4ID0gY3ggKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICB5ID0gY3kgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb2ludHM7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgYW4gU1ZHIGRvY3VtZW50IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2aXNpYmxlIGdlb21ldHJ5LCB0aGVuIHB1c2hlcyBpdCB0byB0aGUgY2xpZW50XHJcbi8vIC0gVHJpZ2dlcmVkIGJ5IHByZXNzaW5nIGBlYCBpbiBhbnkgc2tldGNoLiBTZWUgS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMgZm9yIGRlZmluaXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNWRyhuZXR3b3JrKSB7XHJcbiAgLy8gU2V0IHVwIDxzdmc+IGVsZW1lbnRcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxuczp4bGluaycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgd2luZG93LmlubmVyV2lkdGggKyAnICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAvLyBDcmVhdGUgPGxpbmU+cyBmb3IgZWFjaCBicmFuY2ggc2VnbWVudFxyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd0JyYW5jaGVzKSB7XHJcbiAgICBsZXQgbm9kZUxpbmVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgbmV0d29yay5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGxpbmVOb2RlID0gYFxyXG4gICAgICAgICAgPGxpbmVcclxuICAgICAgICAgICAgeDE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnl9XCJcclxuICAgICAgICAgICAgeDI9XCIke25vZGUucG9zaXRpb24ueH1cIlxyXG4gICAgICAgICAgICB5Mj1cIiR7bm9kZS5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgbm9kZUxpbmVzR3JvdXAuaW5uZXJIVE1MICs9IGxpbmVOb2RlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmFwcGVuZENoaWxkKG5vZGVMaW5lc0dyb3VwKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSA8cGF0aD5zIGZvciBib3VuZHNcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCb3VuZHMpIHtcclxuICAgIGlmKG5ldHdvcmsuYm91bmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGJvdW5kc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIG5ldHdvcmsuYm91bmRzKSB7XHJcbiAgICAgICAgYm91bmRzR3JvdXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKGJvdW5kLnBvbHlnb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3ZnLmFwcGVuZENoaWxkKGJvdW5kc0dyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSA8cGF0aD5zIGZvciBvYnN0YWNsZXNcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dPYnN0YWNsZXMpIHtcclxuICAgIGlmKG5ldHdvcmsub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IG9ic3RhY2xlc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG5ldHdvcmsub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgb2JzdGFjbGVzR3JvdXAuYXBwZW5kQ2hpbGQoXHJcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKG9ic3RhY2xlLnBvbHlnb24pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3ZnLmFwcGVuZENoaWxkKG9ic3RhY2xlc0dyb3VwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEdlbmVyYXRlIHRoZSBkb2N1bWVudCBhcyBhIEJsb2IgYW5kIGZvcmNlIGEgZG93bmxvYWQgYXMgYSB0aW1lc3RhbXBlZCAuc3ZnIGZpbGVcclxuICBjb25zdCBzdmdEb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cIm5vXCI/Pic7XHJcbiAgY29uc3Qgc2VyaWFsaXplZFN2ZyA9IChuZXcgWE1MU2VyaWFsaXplcigpKS5zZXJpYWxpemVUb1N0cmluZyhzdmcpO1xyXG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbc3ZnRG9jdHlwZSwgc2VyaWFsaXplZFN2Z10sIHsgdHlwZTogJ2ltYWdlL3N2Zyt4bWw7JyB9KVxyXG4gIHNhdmVBcyhibG9iLCAndmVuYXRpb24tJyArIERhdGUubm93KCkgKyAnLnN2ZycpO1xyXG59XHJcblxyXG4gIC8vIENyZWF0ZSBhIDxwYXRoPiBlbGVtZW50IHdpdGggYSBwcm9wZXJseS1mb3JtYXR0ZWQgYGRgIGF0dHJpYnV0ZSBjb250YWluaW5nIGFsbCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBhc3NlZCBwb2ludHNcclxuICBmdW5jdGlvbiBnZXRQYXRoRWxGcm9tUG9pbnRzKHBvaW50cykge1xyXG4gICAgbGV0IHBvaW50c1N0cmluZyA9ICcnO1xyXG5cclxuICAgIGZvcihsZXQgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xyXG4gICAgICBwb2ludHNTdHJpbmcgKz0gcG9pbnRbMF0gKyAnLCcgKyBwb2ludFsxXTtcclxuXHJcbiAgICAgIGlmKGluZGV4IDwgcG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBwb2ludHNTdHJpbmcgKz0gJyAnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIGNsb3NlcGF0aCBjb21tYW5kIHRvIGF1dG9tYXRpY2FsbHkgZHJhdyBsaW5lIGJhY2sgdG8gaW5pdGlhbCBwb2ludFxyXG4gICAgcG9pbnRzU3RyaW5nICs9ICcgJyArIHBvaW50c1swXVswXSArICcsJyArIHBvaW50c1swXVsxXTtcclxuXHJcbiAgICBsZXQgZCA9IHRvUGF0aCh7XHJcbiAgICAgIHR5cGU6ICdwb2x5bGluZScsXHJcbiAgICAgIHBvaW50czogcG9pbnRzU3RyaW5nXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcGF0aEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJyk7XHJcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdkJywgZCk7XHJcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWxsOiBub25lOyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDEnKTtcclxuXHJcbiAgICByZXR1cm4gcGF0aEVsO1xyXG4gIH0iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9jb3JlL05vZGUnO1xyXG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi8uLi9jb3JlL1BhdGgnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5pbXBvcnQgQXR0cmFjdG9yIGZyb20gJy4uLy4uLy4uL2NvcmUvQXR0cmFjdG9yJztcclxuaW1wb3J0IFNWR0xvYWRlciBmcm9tICcuLi8uLi8uLi9jb3JlL1NWR0xvYWRlcic7XHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxuY29uc3QgbGVhZiA9IHJlcXVpcmUoJy4uL3N2Zy9sZWFmLnN2ZycpO1xyXG5jb25zdCBncmFzc0JsYWRlID0gcmVxdWlyZSgnLi4vc3ZnL2dyYXNzLWJsYWRlLnN2ZycpO1xyXG5cclxubGV0IGN1cnJlbnRQYXRoO1xyXG5cclxuY29uc3QgTElORSA9IDA7XHJcbmNvbnN0IFRSSUFOR0xFID0gMTtcclxuY29uc3QgU1FVQVJFID0gMjtcclxuY29uc3QgRElBTU9ORCA9IDM7XHJcbmNvbnN0IENJUkNMRSA9IDQ7XHJcbmNvbnN0IExFQUYgPSA1O1xyXG5sZXQgY3VycmVudFBhdGhTaGFwZSA9IFNRVUFSRTtcclxuXHJcbmxldCB5UG9zaXRpb24gPSAwO1xyXG5cclxubGV0IHNob3dIZWxwID0gdHJ1ZTtcclxuXHJcbi8vIENyZWF0ZSBpbml0aWFsIGNvbmRpdGlvbnMgZm9yIHNpbXVsYXRpb25cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBJbml0aWFsaXplIHNpbXVsYXRpb24gb2JqZWN0XHJcbiAgbmV0d29yayA9IG5ldyBOZXR3b3JrKGN0eCk7XHJcblxyXG4gIC8vIExvYWQgdGhlIGRlZmluZWQgcGF0aFxyXG4gIHNldHVwUGF0aCgpO1xyXG5cclxuICAvLyBBZGQgdGhlIGJvdW5kcywgYXR0cmFjdG9ycywgYW5kIHJvb3Qgbm9kZXNcclxuICByZXNldE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcclxuICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgYWRkUm9vdE5vZGVzKCk7XHJcbn1cclxuXHJcbiAgbGV0IHNldHVwUGF0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGgvMjtcclxuICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0LzI7XHJcbiAgICB5UG9zaXRpb24gPSBjeTtcclxuXHJcbiAgICBzd2l0Y2goY3VycmVudFBhdGhTaGFwZSkge1xyXG4gICAgICBjYXNlIExJTkU6XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBnZXRIb3Jpem9udGFsTGluZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBUUklBTkdMRTpcclxuICAgICAgICBjdXJyZW50UGF0aCA9IGdldFRyaWFuZ2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFNRVUFSRTpcclxuICAgICAgICBjdXJyZW50UGF0aCA9IGdldFNxdWFyZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBESUFNT05EOlxyXG4gICAgICAgIGN1cnJlbnRQYXRoID0gZ2V0RGlhbW9uZEJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBDSVJDTEU6XHJcbiAgICAgICAgY3VycmVudFBhdGggPSBnZXRDaXJjbGVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgTEVBRjpcclxuICAgICAgICBjdXJyZW50UGF0aCA9IGdldExlYWZCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZihjdXJyZW50UGF0aFNoYXBlICE9IExJTkUpIHtcclxuICAgICAgY3VycmVudFBhdGguaXNDZW50ZXJlZCA9IHRydWU7XHJcbiAgICAgIGN1cnJlbnRQYXRoLnNldFNjYWxlKC4wMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGxldCBnZXRIb3Jpem9udGFsTGluZSA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChcclxuICAgICAgICBbXHJcbiAgICAgICAgICBbY3ggLSA0MDAsIGN5ICsgNDAwXSxcclxuICAgICAgICAgIFtjeCArIDQwMCwgY3kgKyA0MDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0VHJpYW5nbGVCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSAyMDA7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgW3NpZGVMZW5ndGgvMiwgMF0sXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aCwgMypzaWRlTGVuZ3RoLzRdLFxyXG4gICAgICAgICAgWzAsIDMqc2lkZUxlbmd0aC80XSxcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLzIsIDBdXHJcbiAgICAgICAgXSxcclxuICAgICAgICAnQm91bmRzJyxcclxuICAgICAgICBjdHhcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRTcXVhcmVCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSAyMDA7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgWzAsIDBdLCAgLy8gdG9wIGxlZnQgY29ybmVyXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aCwgMF0sICAvLyB0b3AgcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aCwgc2lkZUxlbmd0aF0sICAvLyBib3R0b20gcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICBbMCwgc2lkZUxlbmd0aF0sICAvLyBib3R0b20gbGVmdCBjb3JuZXJcclxuICAgICAgICAgIFswLCAwXSwgIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ0JvdW5kcycsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldERpYW1vbmRCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNpZGVMZW5ndGggPSAyMDA7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgW3NpZGVMZW5ndGgvMiwgMF0sXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aCwgc2lkZUxlbmd0aC8yXSxcclxuICAgICAgICAgIFtzaWRlTGVuZ3RoLzIsIHNpZGVMZW5ndGhdLFxyXG4gICAgICAgICAgWzAsIHNpZGVMZW5ndGgvMl0sXHJcbiAgICAgICAgICBbc2lkZUxlbmd0aC8yLCAwXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ0JvdW5kcycsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGdldENpcmNsZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcmFkaXVzID0gMTAwO1xyXG4gICAgICBjb25zdCByZXNvbHV0aW9uID0gNTA7XHJcbiAgICAgIGxldCBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSAyICogTWF0aC5QSSAqIGkgLyByZXNvbHV0aW9uO1xyXG4gICAgICAgIGxldCB4ID0gcmFkaXVzICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSkpO1xyXG4gICAgICAgIGxldCB5ID0gcmFkaXVzICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xyXG5cclxuICAgICAgICBwb2ludHMucHVzaChbeCwgeV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwb2ludHMucHVzaChbcG9pbnRzWzBdWzBdLCBwb2ludHNbMF1bMV1dKTtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUGF0aChwb2ludHMsICdCb3VuZHMnLCBjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRMZWFmQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoU1ZHTG9hZGVyLmxvYWQobGVhZilbMF0sICdCb3VuZHMnLCBjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRHcmFzc0JsYWRlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFBhdGgoU1ZHTG9hZGVyLmxvYWQoZ3Jhc3NCbGFkZSlbMF0sICdCb3VuZHMnLCBjdHgpO1xyXG4gICAgfVxyXG5cclxuICAvLyBDcmVhdGUgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICBsZXQgYWRkUm9vdE5vZGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aC8yO1xyXG4gICAgbGV0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0LzI7XHJcblxyXG4gICAgaWYoY3VycmVudFBhdGhTaGFwZSA9PSBMSU5FKSB7XHJcbiAgICAgIGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC0gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldHdvcmsuYWRkTm9kZShcclxuICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIGN4LFxyXG4gICAgICAgICAgY3lcclxuICAgICAgICApLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgY3R4XHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGxldCBtb3ZlUGF0aCA9ICgpID0+IHtcclxuICAgIGlmKCFuZXR3b3JrLnNldHRpbmdzLklzUGF1c2VkICYmIHlQb3NpdGlvbiA+IC04MDApIHtcclxuICAgICAgY3VycmVudFBhdGgubW92ZUJ5KDAsLTIpO1xyXG4gICAgICB5UG9zaXRpb24gPSBjdXJyZW50UGF0aC5vcmlnaW4ueTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBzY2FsZVBhdGggPSAoKSA9PiB7XHJcbiAgICBpZighbmV0d29yay5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICBjdXJyZW50UGF0aC5zZXRTY2FsZSgxLjAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCByb3RhdGVQYXRoID0gKCkgPT4ge1xyXG4gICAgaWYoIW5ldHdvcmsuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgLy8gVE9ETzogcm90YXRlIHBhdGhcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxldCBnZW5lcmF0ZUF0dHJhY3RvcnNPblBhdGggPSAoKSA9PiB7XHJcbiAgICAvLyBuZXR3b3JrLmF0dHJhY3RvcnMgPSBjcmVhdGVFdmVubHlTcGFjZWRBdHRyYWN0b3JzKCk7XHJcbiAgICBuZXR3b3JrLmF0dHJhY3RvcnMgPSBjcmVhdGVTdWJkaXZpZGVkQXR0cmFjdG9ycygpO1xyXG4gIFxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgbmV0d29yay5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5zZXR0aW5ncyA9IG5ldHdvcmsuc2V0dGluZ3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIGxldCBjcmVhdGVFdmVubHlTcGFjZWRBdHRyYWN0b3JzID0gKCkgPT4ge1xyXG4gICAgICBsZXQgYXR0cmFjdG9ycyA9IFtdO1xyXG4gICAgICBjb25zdCBhdHRyYWN0b3JTcGFjaW5nID0gMTA7XHJcbiAgICAgIGxldCBwcmV2aW91c1NlZ21lbnRSZW1haW5kZXIgPSAwO1xyXG5cclxuICAgICAgLy8gRm9yIGVhY2ggcGF0aCBzZWdtZW50IC4uLlxyXG4gICAgICBmb3IobGV0IGk9MTsgaTxjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwb2ludDAgPSBWZWMyKGN1cnJlbnRQYXRoLnRyYW5zZm9ybWVkUG9seWdvbltpLTFdWzBdLCBjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baS0xXVsxXSk7XHJcbiAgICAgICAgY29uc3QgcG9pbnQxID0gVmVjMihjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sIGN1cnJlbnRQYXRoLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlZ21lbnRMZW5ndGggPSBwb2ludDEuZGlzdGFuY2UocG9pbnQwKTtcclxuICAgICAgICBjb25zdCBzdGFydGluZ09mZnNldCA9IGF0dHJhY3RvclNwYWNpbmcgLSBwcmV2aW91c1NlZ21lbnRSZW1haW5kZXI7XHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlTGVuZ3RoID0gY3VycmVudFNlZ21lbnRMZW5ndGggLSBzdGFydGluZ09mZnNldDtcclxuXHJcbiAgICAgICAgLy8gV2UgY2FuIGZpdCBhdCBsZWFzdCBvbmUgYXR0cmFjdG9yIG9udG8gdGhpcyBzZWdtZW50XHJcbiAgICAgICAgaWYoYXZhaWxhYmxlTGVuZ3RoID49IGF0dHJhY3RvclNwYWNpbmcpIHtcclxuICAgICAgICAgIGxldCBzZWdtZW50RGlyZWN0aW9uID0gcG9pbnQxLnN1YnRyYWN0KHBvaW50MCwgdHJ1ZSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgICAgLy8gSG93IG1hbnkgYXR0cmFjdG9ycyBjYW4gd2UgZml0IG9udG8gdGhpcyBzZWdtZW50P1xyXG4gICAgICAgICAgY29uc3QgbnVtQXR0cmFjdG9ycyA9IE1hdGguZmxvb3IoYXZhaWxhYmxlTGVuZ3RoIC8gYXR0cmFjdG9yU3BhY2luZyk7XHJcblxyXG4gICAgICAgICAgLy8gQ3JlYXRlIGFzIG1hbnkgYXR0cmFjdG9ycyBhcyB3ZSBjYW5cclxuICAgICAgICAgIGZvcihsZXQgYXR0cmFjdG9ySW5kZXg9MDsgYXR0cmFjdG9ySW5kZXg8PW51bUF0dHJhY3RvcnM7IGF0dHJhY3RvckluZGV4KyspIHtcclxuICAgICAgICAgICAgYXR0cmFjdG9ycy5wdXNoKFxyXG4gICAgICAgICAgICAgIG5ldyBBdHRyYWN0b3IoXHJcbiAgICAgICAgICAgICAgICBwb2ludDAuYWRkKHNlZ21lbnREaXJlY3Rpb24ubXVsdGlwbHkoYXR0cmFjdG9yU3BhY2luZyAqIGF0dHJhY3RvckluZGV4ICsgc3RhcnRpbmdPZmZzZXQsIHRydWUpLCB0cnVlKSxcclxuICAgICAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBTdG9yZSByZW1haW5kZXIgb2Ygc2VnbWVudCBsZW5ndGggdG8gb2Zmc2V0IG5leHQgc2VnbWVudCdzIGF0dHJhY3RvciBwbGFjZW1lbnRcclxuICAgICAgICAgIHByZXZpb3VzU2VnbWVudFJlbWFpbmRlciA9IGF2YWlsYWJsZUxlbmd0aCAtIChudW1BdHRyYWN0b3JzICogYXR0cmFjdG9yU3BhY2luZyk7XHJcblxyXG4gICAgICAgIC8vIENhbid0IGZpdCBhbnkgYXR0cmFjdG9ycyBvbnRvIHRoaXMgc2VnbWVudCwgc28gYWNjdW11bGF0ZSB0aGUgbGVuZ3RoIChwcmV2aW91cyBzZWdtZW50cyBtaWdodCd2ZSBhbHNvIGJlZW4gdG9vIHNob3J0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcmV2aW91c1NlZ21lbnRSZW1haW5kZXIgKz0gY3VycmVudFNlZ21lbnRMZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYXR0cmFjdG9ycztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3JlYXRlU3ViZGl2aWRlZEF0dHJhY3RvcnMgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBhdHRyYWN0b3JzID0gW107XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYXR0cmFjdG9ycyBhdCBlYWNoIHZlcnRleFxyXG4gICAgICBmb3IobGV0IGk9MDsgaTxjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBhdHRyYWN0b3JzLnB1c2goXHJcbiAgICAgICAgICBuZXcgQXR0cmFjdG9yKFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICBjdXJyZW50UGF0aC50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sXHJcbiAgICAgICAgICAgICAgY3VycmVudFBhdGgudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBuZXdBdHRyYWN0b3JzID0gW107XHJcblxyXG4gICAgICAvLyBSZWN1cnNpdmVseSBzdWJkaXZpZGUgc2VnbWVudHNcclxuICAgICAgZm9yKGxldCBpPTE7IGk8YXR0cmFjdG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHBvaW50MCA9IGF0dHJhY3RvcnNbaS0xXS5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBwb2ludDEgPSBhdHRyYWN0b3JzW2ldLnBvc2l0aW9uO1xyXG4gICAgICAgIHN1YmRpdmlkZVNlZ21lbnQocG9pbnQwLCBwb2ludDEsIGksIG5ld0F0dHJhY3RvcnMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBSZXZlcnNlIHRoZSBuZXcgYXR0cmFjdG9ycyBsaXN0IHNvIHRoYXQgaW5kaWNlcyBkb24ndCBzaGlmdCBhcyB0aGV5IGFyZSBpbnNlcnRlZFxyXG4gICAgICBuZXdBdHRyYWN0b3JzLnNvcnQoKGEsYikgPT4ge1xyXG4gICAgICAgIHJldHVybiBiLmluZGV4IC0gYS5pbmRleDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBJbmplY3QgYWxsIHRoZSBuZXcgYXR0cmFjdG9yc1xyXG4gICAgICBmb3IobGV0IG5ld0F0dHJhY3RvciBvZiBuZXdBdHRyYWN0b3JzKSB7XHJcbiAgICAgICAgYXR0cmFjdG9ycy5zcGxpY2UobmV3QXR0cmFjdG9yLmluZGV4LCAwLCBuZXdBdHRyYWN0b3IuYXR0cmFjdG9yKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGF0dHJhY3RvcnM7XHJcbiAgICB9XHJcblxyXG4gICAgICAvLyBTcGxpdCBhIHNlZ21lbnQgKGRlZmluZWQgYnkgdHdvIGlucHV0IHBvaW50cykgYnkgcGxhY2luZyBhIGF0dHJhY3RvciBhdCBpdCdzIG1pZHBvaW50XHJcbiAgICAgIGxldCBzdWJkaXZpZGVTZWdtZW50ID0gKHBvaW50MCwgcG9pbnQxLCBvcmlnaW5hbEluZGV4LCBuZXdBdHRyYWN0b3JzKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudExlbmd0aCA9IHBvaW50MS5kaXN0YW5jZShwb2ludDApO1xyXG5cclxuICAgICAgICAvLyBPbmx5IHN1YmRpdmlkZSB0aGUgc2VnbWVudCBpZiBpdHMgbG9uZyBlbm91Z2ggKHRlcm1pbmF0ZXMgcmVjdXJzaW9uIGluIHNob3J0IHNlZ21lbnRzKVxyXG4gICAgICAgIGlmKHNlZ21lbnRMZW5ndGggPiAyMCkge1xyXG4gICAgICAgICAgbGV0IG1pZHBvaW50QXR0cmFjdG9yID0gZ2V0TWlkcG9pbnRBdHRyYWN0b3IocG9pbnQwLCBwb2ludDEsIHNlZ21lbnRMZW5ndGgpO1xyXG4gICAgICAgICAgbmV3QXR0cmFjdG9ycy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IG9yaWdpbmFsSW5kZXgsXHJcbiAgICAgICAgICAgIGF0dHJhY3RvcjogbWlkcG9pbnRBdHRyYWN0b3JcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHN1YmRpdmlkZSB0aGUgbmV3IHNlZ21lbnRzXHJcbiAgICAgICAgICBzdWJkaXZpZGVTZWdtZW50KHBvaW50MCwgbWlkcG9pbnRBdHRyYWN0b3IucG9zaXRpb24sIG9yaWdpbmFsSW5kZXgsIG5ld0F0dHJhY3RvcnMpOyAvLyBzdWJkaXZpZGUgdGhlIGxlZnQgc2VnbWVudFxyXG4gICAgICAgICAgc3ViZGl2aWRlU2VnbWVudChtaWRwb2ludEF0dHJhY3Rvci5wb3NpdGlvbiwgcG9pbnQxLCBvcmlnaW5hbEluZGV4LCBuZXdBdHRyYWN0b3JzKTsgLy8gc3ViZGl2aWRlIHRoZSByaWdodCBzZWdtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBhdHRyYWN0b3IgZXhhY3RseSBoYWxmd2F5IGJldHdlZW4gdHdvIG90aGVyc1xyXG4gICAgICBsZXQgZ2V0TWlkcG9pbnRBdHRyYWN0b3IgPSAocG9pbnQwLCBwb2ludDEsIHNlZ21lbnRMZW5ndGgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWdtZW50RGlyZWN0aW9uID0gcG9pbnQxLnN1YnRyYWN0KHBvaW50MCwgdHJ1ZSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQXR0cmFjdG9yKFxyXG4gICAgICAgICAgcG9pbnQwLmFkZChzZWdtZW50RGlyZWN0aW9uLm11bHRpcGx5KHNlZ21lbnRMZW5ndGgvMiwgdHJ1ZSksIHRydWUpLFxyXG4gICAgICAgICAgY3R4XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxubGV0IGRyYXdUZXh0ID0gKCkgPT4ge1xyXG4gIGxldCB0ZXh0ID0gW1xyXG4gICAgJ0F0dHJhY3RvcnMgY2FuIGJlIHBsYWNlZCBvbiB0aGUgZWRnZXMgb2YgcGF0aHMsJyxcclxuICAgICdjcmVhdGluZyBncm93dGggYXMgdGhleSBhcmUgc2NhbGVkLicsXHJcbiAgICAnJyxcclxuICAgICcxID0gaG9yaXpvbnRhbCBsaW5lIG1vdmluZyB1cHdhcmRzJyxcclxuICAgICcyID0gdHJpYW5nbGUnLFxyXG4gICAgJzMgPSBzcXVhcmUnLFxyXG4gICAgJzQgPSBkaWFtb25kJyxcclxuICAgICc1ID0gY2lyY2xlJyxcclxuICAgICc2ID0gYSBsZWFmJyxcclxuICAgICcnLFxyXG4gICAgJ1NwYWNlID0gdG9nZ2xlIHBhdXNlJyxcclxuICAgICdyID0gcmVzZXQnLFxyXG4gICAgJ2MgPSB0b2dnbGUgY2FuYWxpemF0aW9uJyxcclxuICAgICdwID0gdG9nZ2xlIG9wYWNpdHkgYmxlbmRpbmcnLFxyXG4gICAgJ24gPSB0b2dnbGUgbm9kZSB2aXNpYmlsaXR5JyxcclxuICAgICdhID0gdG9nZ2xlIGF0dHJhY3RvciB2aXNpYmlsaXR5JyxcclxuICAgICd6ID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZXMnLFxyXG4gICAgJ2sgPSB0b2dnbGUga2lsbCB6b25lcycsXHJcbiAgICAndCA9IHRvZ2dsZSB0aXBzJyxcclxuICAgICdpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcycsXHJcbiAgICAnaCA9IHRvZ2dsZSB0aGlzIGhlbHAgdGV4dCdcclxuICBdO1xyXG5cclxuICBjdHguZm9udCA9ICdib2xkIDI0cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcclxuICBjdHguZmlsbFRleHQoJ01hcmdpbmFsIEdyb3d0aCcsIDIwLCA0MCk7XHJcblxyXG4gIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSc7XHJcbiAgZm9yKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KHRleHRbaV0sIDIwLCAyMippICsgODApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBpZighbmV0d29yay5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgaWYoY3VycmVudFBhdGhTaGFwZSA9PSBMSU5FKSB7XHJcbiAgICAgIG1vdmVQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYoY3VycmVudFBhdGhTaGFwZSAhPSBMSU5FKSB7XHJcbiAgICAgIHNjYWxlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQXR0cmFjdG9yc09uUGF0aCgpO1xyXG5cclxuICAgIG5ldHdvcmsudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZXR3b3JrLmRyYXcoKTtcclxuICBjdXJyZW50UGF0aC5kcmF3KCk7XHJcblxyXG4gIGlmKHNob3dIZWxwKSB7XHJcbiAgICBkcmF3VGV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vIEtleSBjb21tYW5kcyBzcGVjaWZpYyB0byB0aGlzIHNrZXRjaFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAvLyByID0gcmVzZXQgc2ltdWxhdGlvbiBieSByZWluaXRpYWxpemluZyB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gICAgY2FzZSAncic6XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICAvLyBoID0gdG9nZ2xlIGhlbHAgdGV4dFxyXG4gICAgY2FzZSAnaCc6XHJcbiAgICAgIHNob3dIZWxwID0gIXNob3dIZWxwO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcxJzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IExJTkU7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnMic6XHJcbiAgICAgIGN1cnJlbnRQYXRoU2hhcGUgPSBUUklBTkdMRTtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICczJzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IFNRVUFSRTtcclxuICAgICAgc2V0dXBQYXRoKCk7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICc0JzpcclxuICAgICAgY3VycmVudFBhdGhTaGFwZSA9IERJQU1PTkQ7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnNSc6XHJcbiAgICAgIGN1cnJlbnRQYXRoU2hhcGUgPSBDSVJDTEU7XHJcbiAgICAgIHNldHVwUGF0aCgpO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnNic6XHJcbiAgICAgIGN1cnJlbnRQYXRoU2hhcGUgPSBMRUFGO1xyXG4gICAgICBzZXR1cFBhdGgoKTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBLaWNrIG9mZiB0aGUgYXBwbGljYXRpb25cclxuc2V0dXAoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJzdmczNlxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwiZ3Jhc3MtYmxhZGUuc3ZnXFxcIiBpbmtzY2FwZTp2ZXJzaW9uPVxcXCIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpXFxcIj48ZyBpbmtzY2FwZTpncm91cG1vZGU9XFxcImxheWVyXFxcIiBpbmtzY2FwZTpsYWJlbD1cXFwiMFxcXCIgaWQ9XFxcImczNFxcXCI+PHBhdGggaWQ9XFxcInBhdGgzMlxcXCIgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MC45NjIxOTAwOTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZVxcXCIgZD1cXFwiTSA0NDEuOTU3NTIsNjEuNDU3MzYxIDQ0MS43MTcyNyw2MS4xMTI0MTQgNDQxLjM5OTgzLDYwLjg2NjAyOCA0NDEuMDMwOTIsNjAuNzE4MTk1IDQ0MC42MzYyOCw2MC42Njg5MTQgNDQwLjI0MTY1LDYwLjcxODE5NSA0MzkuODcyNzQsNjAuODY2MDI4IDQzOS41NTUzLDYxLjExMjQxNCA0MzkuMzE1MDUsNjEuNDU3MzYxIE0gNDY3Ljg1MzQsMTcyLjM4NjE1IDQ2Ny40NDA3LDE1OC4wNjM2NCA0NjYuMjA3MiwxNDMuODEyMTkgNDY0LjE1OTg0LDEyOS42NjE0NiA0NjEuMzA1NTUsMTE1LjY0MTE1IDQ1Ny42NTEyNCwxMDEuNzgwOSA0NTMuMjAzODUsODguMTEwNDIgNDQ3Ljk3MDMsNzQuNjU5MzQ0IDQ0MS45NTc1Miw2MS40NTczNjEgTSA0MzkuMzE1MDUsNjEuNDU3MzYxIDQzMy4zMDIyNyw3NC42NTkzNDQgNDI4LjA2ODcyLDg4LjExMDQyIDQyMy42MjEzMywxMDEuNzgwOSA0MTkuOTY3MDIsMTE1LjY0MTE1IDQxNy4xMTI3MywxMjkuNjYxNDYgNDE1LjA2NTM3LDE0My44MTIxOSA0MTMuODMxODcsMTU4LjA2MzY0IDQxMy40MTkxNywxNzIuMzg2MTUgTSA0NjcuODUzNCw4NTQuNjAwNSBIIDQ2MS4wNDkxMiA0NTQuMjQ0ODQgNDQ3LjQ0MDU2IDQ0MC42MzYyOSA0MzMuODMyMDEgNDI3LjAyNzczIDQyMC4yMjM0NSA0MTMuNDE5MTcgTSA0NjcuODUzNCwxNzIuMzg2MTUgViAyNTcuNjYyOTQgMzQyLjkzOTc0IDQyOC4yMTY1MyA1MTMuNDkzMzMgNTk4Ljc3MDEyIDY4NC4wNDY5MSA3NjkuMzIzNyA4NTQuNjAwNSBNIDQxMy40MTkxNyw4NTQuNjAwNSBWIDc2OS4zMjM3IDY4NC4wNDY5MSA1OTguNzcwMTIgNTEzLjQ5MzMzIDQyOC4yMTY1MyAzNDIuOTM5NzQgMjU3LjY2Mjk0IDE3Mi4zODYxNVxcXCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgc29kaXBvZGk6bm9kZXR5cGVzPVxcXCJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHZpZXdCb3g9XFxcIjAgMCA3NzIuODI0NzIgNzY5LjU3NDM5XFxcIiBpZD1cXFwic3ZnMlxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwibGVhZi5zdmdcXFwiIGlua3NjYXBlOnZlcnNpb249XFxcIjAuOTIuMyAoMjQwNTU0NiwgMjAxOC0wMy0xMSlcXFwiPjxnIGlkPVxcXCJsYXllcjFcXFwiPjxwYXRoIGlkPVxcXCJwYXRoMzE4M1xcXCIgZD1cXFwiTSAzNzYuNDE0ODUsNzY2LjkyMTkyIDM3Ni42NDcwMSw3NjYuMDYyMTYgMzc3LjI3OTEyLDc2NC4zMDAyNCAzNzguMjE0NjMsNzYxLjg5MjkxIDM3OS4zNTY5OSw3NTkuMDk2ODkgMzgwLjc4MTkyLDc1NC40MDUyNSAzODEuMTQ1MzIsNzQ4LjEzNzU0IDM4MC4zOTQ4OCw3MzguMDg4MjMgMzc4LjQ3ODMyLDcyMi4wNTE3OCAzNzYuODIyMjYsNzA3LjY1MjM0IDM3NS4xMzc1OSw2OTAuNjI1NjIgMzczLjYyMTQ0LDY3My4wOTk1NiAzNzIuNDcwOTMsNjU3LjIwMjExIDM3MS41MTMxNCw2NDMuNDk1ODUgMzcwLjUyMTY2LDYzMS45MzY0IDM2OS42MTM0NSw2MjMuNzQwNzUgMzY4LjkwNTUxLDYyMC4xMjU5MSAzNjcuMDYxOTMsNjE5LjIyODU3IDM2Mi45MDY0OCw2MTguNzczMzcgMzU2LjQyODExLDYxOC43NTk4NCAzNDcuNjE1NzYsNjE5LjE4NzQ5IDI5OS43NjA3LDYyMi41MDAzNCAyNzAuMDU1NDEsNjI1LjUxNTM0IDI0OS4wMTk3NSw2MjkuNTQ5NTMgMjI3LjE3MzU2LDYzNS45MTk5NyAyMTcuMjY2OTMsNjM4LjY4NzMxIDIwNy4zODkzNiw2NDAuNTgxNjggMTk1LjkzMDQyLDY0MS44NDExMSAxODEuMjc5NjYsNjQyLjcwMzYzIDE3MC4wMTExMyw2NDMuMDc4NTYgMTYwLjIzMDY0LDY0My4xNzM1NiAxNTIuOTg2NjEsNjQyLjk5Mzg0IDE0OS4zMjc0Miw2NDIuNTQ0NjUgMTQ3LjU4MTk5LDY0MS41ODQ0IDE0Ny4zNTQxNCw2NDAuMjQ2MDYgMTQ4LjgxODUxLDYzOC4wMjczOSAxNTIuMTQ5NzUsNjM0LjQyNjExIDE1Ny4zOTEzLDYyNy45Mzk1MyAxNjAuNzcyOTQsNjIxLjQ0MzQ1IDE2Mi4wODI4MSw2MTUuNDk5NjEgMTYxLjEwOTAyLDYxMC42Njk3MyAxNTUuMDE4NTgsNjA0Ljk0MTYgMTQzLjA1NzQ5LDU5OC43NDQ4NSAxMjYuMDY0NDIsNTkyLjQ0MTM3IDEwNC44NzgwNiw1ODYuMzkzMDggOTMuMDU2NzgzLDU4My4zMDE4MyA4My4wODc5OTMsNTgwLjQ4NjUgNzYuMDIwNDkzLDU3OC4yNTc2OCA3Mi45MDMwMzMsNTc2LjkyNTk3IDcyLjk0MTk5Myw1NzUuMjczOSA3NC43MDMxMjMsNTcyLjE5Nzc5IDc4LjAyNTY2Myw1NjcuOTI5ODggODIuNzQ4ODMzLDU2Mi43MDI0MSA4OS40ODk3MTMsNTU1LjI0Nzc5IDkzLjI0NDUyMyw1NDkuNjkzODcgOTQuNzA0NDkzLDU0NC42MzM2MSA5NC41NjA5MDMsNTM4LjY1OTk4IDkyLjA0NzI2Myw1MzIuMDk4NDMgODUuMzc1NDczLDUyNC4zODkzMSA3My45MjY4MTMsNTE0Ljk0NzA1IDU3LjA4MjU4Myw1MDMuMTg2MDYgNDYuNjY2NDczLDQ5Ni4xNDYzMyAzOC4xMzY1ODMsNDkwLjE0OTM4IDMyLjM3MzEzMyw0ODUuODMwNDcgMzAuMjU2MzgzLDQ4My44MjQ4NSAzMS4zMjI0MTMsNDgyLjc3MjA0IDM0LjIyNDk3Myw0ODEuMDQ3MzEgMzguNTIwNzYzLDQ3OC44ODk3MSA0My43NjY0ODMsNDc2LjUzODMzIDU4LjY1NzgzMyw0NjkuMjE5NzUgNjYuMTE1NTgzLDQ2MS44MDY2MSA2Ny4zNTgyODMsNDUxLjg2ODk2IDYzLjYwNDQ0Myw0MzYuOTc2ODMgNTguNzkzMTUzLDQyMS4wNzYyMSA1My44NTkxNDMsNDAzLjI2MDMzIDQ5LjU5OTk0MywzODYuNTI2NiA0Ni44MTMwOTMsMzczLjg3MjQ2IDQyLjYwNDY5MywzNTUuMzA0MTcgMzYuMzkwNjMzLDMzMi4wMzI3MyAyOS44OTE3NjMsMzEwLjE2ODMyIDI0LjgyODk1OSwyOTUuODIxMTIgMjIuMjQ2MTMsMjkwLjgyMzYyIDE4LjY5NjQxNiwyODUuMTE1OTYgMTQuNjQ3NzU0LDI3OS40MDE2NSAxMC41NjgwNzksMjc0LjM4NDIxIDYuOTIyNjk5NCwyNzAuMDIwMDQgNC4wNTY1MDU0LDI2Ni4wODU3MyAyLjI1NjgwNTQsMjYzLjAxMjc4IDEuODEwOTA5NCwyNjEuMjMyNyAyMC42NjMxMzEsMjU4LjI0OTYgNjEuMDg4MTYzLDI2MS44MTc0MSAxMDUuODQ4ODIsMjY5LjYzMjgyIDEzNy43MDc5MiwyNzkuMzkyNTEgMTQzLjA0MzE2LDI4MS45NTU4NSAxNDkuODQzOTcsMjg1LjAyMDExIDE1Ny4yMzYxNCwyODguMjAwNzUgMTY0LjM0NTQ5LDI5MS4xMTMxNyAxNzEuNjA0MjksMjk0LjI3MTY1IDE3OS40MDE5NiwyOTguMTIyMjEgMTg2LjgwMjM1LDMwMi4xNzc5NSAxOTIuODY5MzEsMzA1Ljk1MTk0IDIxMC45NzE0MSwzMTcuMDg0MTUgMjIyLjY2NzM5LDMyMC44MDEzOSAyMjkuMzIxMDIsMzE3LjEwNTE5IDIzMi4yOTYwNywzMDUuOTk3MTMgMjM0LjEwMDc3LDI5NC4wNjQyOCAyMzYuOTE0MzcsMjgxLjY3MTY2IDI0MC41MTcyNSwyNjkuNjU0NzkgMjQ0LjY4OTc3LDI1OC44NDkxOSAyNDYuODU1MTEsMjUyLjk2Mjc5IDI0OS4zNTk3NiwyNDQuNjA5MjUgMjUxLjg5MzQ1LDIzNC45MDEwMyAyNTQuMTQ1ODksMjI0Ljk1MDU5IDI1Ni41ODM4LDIxMi40MzAzMyAyNTcuNzEyNTMsMjAzLjk4Nzk5IDI1Ny42NjI4MywxOTcuODU4MDMgMjU2LjU2NTQ3LDE5Mi4yNzQ5NSAyNTQuMjMyOTEsMTgxLjg1MzkyIDI1NS4yOTc5LDE3Ny41NDc4MiAyNjAuOTAxNDYsMTc4Ljg0MTEzIDI3Mi4xODQ2NSwxODUuMjE4MzEgMjgxLjg4NTI2LDE5MC40NDMzMSAyOTAuNjA5NTcsMTk0LjAwNjU3IDI5Ny4zNzEwNSwxOTUuNTgwODcgMzAxLjE4MzE0LDE5NC44MzkwMSAzMDEuNDc1NCwxOTMuNjcyMzMgMzAxLjMzMDk1LDE5MS40MzU5MyAzMDAuNzkxODcsMTg4LjQ1MTMzIDI5OS45MDAyMiwxODUuMDQwMDUgMjk4LjcxMTE4LDE3OS42OTY2NSAyOTkuMDUyMzYsMTczLjg4ODQgMzAxLjQwNTE0LDE2NC45ODcgMzA2LjI1MDg3LDE1MC4zNjQxNSAzMTAuMjM3NTIsMTM5LjQ1NjMzIDMxNC40OTQ4NCwxMjkuMTMwNTIgMzE4LjUxODg2LDEyMC41MzgwMiAzMjEuODA1NTksMTE0LjgzMDExIDMyOC4zNDgxNiwxMDUuMTIxNjMgMzM2LjI0ODA3LDkyLjQ4NDU1OCAzNDUuOTIwMTEsNzYuMjM3MDQ4IDM1Ny43NzkwNiw1NS42OTcyMjggMzcxLjU0MzMzLDMyLjczNTczNyAzODMuMjczNTEsMTUuNDUxNDUzIDM5Mi40NDA2NSw0LjU1Nzc0NjEgMzk4LjUxNTgzLDAuNzY3OTg0MTEgMzk5LjcyNTIxLDEuNDU0ODI5MSA0MDAuNTI0ODMsMy42MTUyNjIxIDQwMC45NDU0Nyw3LjM5OTEyNTEgNDAxLjAxNzkxLDEyLjk1NjI2NCA0MDEuMjI4NjEsMTguNjQyNjc2IDQwMS45MjkwOCwyNS4xMTUzNDUgNDAzLjAwOTY3LDMxLjU3NzYzNyA0MDQuMzYwNzEsMzcuMjMyOTE0IDQxMC45NDM2OCw1NC43NTgyNDggNDIxLjIzODQ1LDc2LjQzNDA3OCA0MzMuNjA3Niw5OS4wNjAxMTggNDQ2LjQxMzcxLDExOS40MzYwOSA0NTQuOTE4NjEsMTMxLjU2ODY0IDQ2MC4zNjU4NCwxMzguMjY3MDcgNDY0LjMxOTU3LDE0MS4xMjA2NyA0NjguMzQzOTUsMTQxLjcxODcgNDcxLjMwODg0LDE0MS40NDcyOCA0NzQuNDc0NjIsMTQwLjcwODI1IDQ3Ny40NjIzMywxMzkuNjE0NSA0NzkuODkyOTgsMTM4LjI3ODg5IDQ4Mi42NjMwMSwxMzYuNDczNDIgNDg0LjQ2Mzg0LDEzNS44OTAyNyA0ODUuODY1MTgsMTM2LjU0MTU5IDQ4Ny40MzY3MywxMzguNDM5NTMgNDg4LjYwNjczLDE0MS43Mjg5OSA0ODkuNzQ2MTMsMTQ4LjAwMjg0IDQ5MC43NTk0NSwxNTYuNjAxNjMgNDkxLjU1MTI0LDE2Ni44NjU5MyA0OTIuNDc3NTIsMTc5LjYwNTg2IDQ5My42MDQyLDE4OC4xODkyOCA0OTUuMTg3MjgsMTkzLjk3MzY3IDQ5Ny40ODI3NywxOTguMzE2NTUgNTA0LjU2MjkxLDIwOS40ODgxOSA1MTAuMDIxMTIsMjE5LjYyNDI3IDUxNC4xNDk0OCwyMjkuMzI5MDMgNTE3LjI0MDA5LDIzOS4yMDY3IDUxOC45MDg0MywyNDUuMDY2NjIgNTIwLjYzNjI3LDI1MC4zMDExNCA1MjIuMjE5NywyNTQuMzM5MiA1MjMuNDU0NzcsMjU2LjYwOTczIDUyNC43ODc2LDI1OS4wMTc2NiA1MjYuNjM3MDksMjYzLjQyOTcgNTI4Ljc1ODY2LDI2OS4yMTc2OSA1MzAuOTA3NzMsMjc1Ljc1MzUgNTMzLjM5MzI3LDI4NC43ODY0MyA1MzQuOTg0MjMsMjkzLjUzOTMzIDUzNS44Njc0MiwzMDMuNDE5MjQgNTM2LjIyOTY1LDMxNS44MzMxOSA1MzcuMDg3MTcsMzM5LjMxNDEyIDU0MC4wOTA1MSwzNTAuNjMzMiA1NDYuOTM5MjgsMzUxLjk3NDQ2IDU1OS4zMzMwOSwzNDUuNTIxOTMgNTY0Ljk4OTQ1LDM0Mi4xNjE1MyA1NzAuODExOTYsMzM4Ljg2OTcxIDU3Ni4xMTUzOCwzMzYuMDI0NDIgNTgwLjIxNDUsMzM0LjAwMzU4IDU4NC4yMTk5NCwzMzIuMDUxMSA1ODkuMjY3NzcsMzI5LjM5MTk1IDU5NC43MTE4NywzMjYuMzc1NjMgNTk5LjkwNjExLDMyMy4zNTE2NiA2MTAuOTkwNjgsMzE3LjYxMzU2IDYyNC44MTY3LDMxMi4wMzkyMiA2NDEuMzA2OTYsMzA2LjY1NjY3IDY2MC4zODQyNCwzMDEuNDkzOTcgNzA3LjExNDg1LDI4OS43MDI1NCA3MzcuMzY3MjgsMjgxLjM5OTc0IDc1Ni43MjIzNywyNzQuOTIzMzIgNzcwLjc2MDkzLDI2OC42MTEwNCA3NzEuMzY0NTQsMjY4LjkwMzQ5IDc3MS44NTg4NSwyNzAuMjg4NzYgNzcyLjE5Mjg2LDI3Mi41NDI3NCA3NzIuMzE1NTMsMjc1LjQ0MTM0IDc3MS42NDM5NywyODAuMDg3NzQgNzY5LjY3Mjg4LDI4Ni41Mzc2OSA3NjYuNDY3NjcsMjk0LjYwNzczIDc2Mi4wOTM3MywzMDQuMTE0NCA3NTcuNjE1NTEsMzEzLjg0MDM1IDc1Mi45Nzg3NiwzMjQuNzYzMzQgNzQ4LjczMDYxLDMzNS41NDY1NyA3NDUuNDE4MjMsMzQ0Ljg1MzI0IDczOS44OTQ4MiwzNjEuMDg2ODQgNzMzLjcwNjUsMzc3Ljk5NDc1IDcyNi40MjU0OSwzOTYuNzA4MzIgNzE3LjYyNDAzLDQxOC4zNTg5MyA3MTMuMTEwODIsNDI4LjU4NCA3MDguODAzMTcsNDM2LjcxNzE2IDcwNC4zMTIzMiw0NDMuNDEzNjMgNjk5LjI0OTQ4LDQ0OS4zMjg2NSA2OTUuNDI2NTMsNDUzLjQ0MjgzIDY5Mi4yOTU4Nyw0NTcuMDE1NjkgNjkwLjE4MDU3LDQ1OS42NjQxMSA2ODkuNDAzNjcsNDYxLjAwNDk1IDY4OS43MDI3Nyw0NjEuODAyMjIgNjkwLjUxNzE1LDQ2Mi45NzA0NiA2OTEuNzIyNDIsNDY0LjM1MjYzIDY5My4xOTQyLDQ2NS43OTE2OCA2OTUuNjQ0NzksNDY3LjM0NTIyIDY5OS4xMTIwOCw0NjguNDExMzkgNzAzLjc2NjAyLDQ2OS4wMjUzMyA3MDkuNzc2NjEsNDY5LjIyMjE3IDcxNC43NDM0NSw0NjkuMzEyMDcgNzE4LjgxMDg3LDQ2OS41NTY4NSA3MjEuNTU5MTMsNDY5LjkxOTEyIDcyMi41Njg0OSw0NzAuMzYxNSA3MjEuMzAxMDksNDc0LjExNTk3IDcxNy45OTg5NSw0NzkuODg4OCA3MTMuNDEyMTcsNDg2LjUwMjMyIDcwOC4yOTA4Myw0OTIuNzc4ODUgNjk2Ljc4NTkzLDUwNi40MjcyNiA2ODQuOTU0MDcsNTIxLjc0Njg3IDY3NS4zNDEyLDUzNS4zMDk0OCA2NzAuNDkzMjksNTQzLjY4Njg2IDY2OS42Njk4NSw1NDYuNjcxMTggNjY5LjQxNzEzLDU0OS4zMjM0OCA2NjkuNzM2MjgsNTUxLjczMTYzIDY3MC42Mjg0NCw1NTMuOTgzNSA2NzQuNzA2MzUsNTU4LjY4MTA0IDY4MS42NjM3Miw1NjQuMTA4MiA2ODkuOTgxNTMsNTY5LjIxNzI5IDY5OC4xNDA3Myw1NzIuOTYwNjIgNzAxLjIxMTUyLDU3NC4yNDEwNSA3MDMuODc5Nyw1NzUuNjg5NTQgNzA1Ljg1OTA0LDU3Ny4xMjgyNCA3MDYuODYzMjksNTc4LjM3OTM0IDcwNi4yNzA0LDU4MC44NjI5MyA3MDMuNzI2NDQsNTgzLjgzNDc3IDcwMC4yOTAyMyw1ODYuMzI3MzYgNjk3LjAyMDU5LDU4Ny4zNzMyMiA2OTQuNDA3MjgsNTg4LjE5NDQzIDY4OC42NDA0Myw1OTAuNDMwNCA2ODAuNTcyMTYsNTkzLjczOTY2IDY3MS4wNTQ2MSw1OTcuNzgwNzYgNjQyLjY1NjAzLDYxMC41Mjg3NSA2MjUuNDkxNTksNjE5LjgyMjEzIDYxNy4wNDEwNyw2MjcuMzEyMDUgNjE0Ljc4NDI3LDYzNC42NDk2OCA2MTYuNTk3MzMsNjQxLjA0MzkyIDYyMS4zNjU0NCw2NDkuMTM5IDYyOC4wODE5Niw2NTcuNDkyOTUgNjM1Ljc0MDI5LDY2NC42NjM4NCA2MzguMjA5MzUsNjY2Ljg2MTIgNjM5Ljk4MjIyLDY2OC45Nzc1NSA2NDAuOTExMzQsNjcwLjc5NzkxIDY0MC44NDkxMiw2NzIuMTA3MjcgNjI4LjIwMDE3LDY3NC4wNjI4NyA2MDAuNzg5NDEsNjczLjc5OTI5IDU2OC40OTY1NCw2NzEuNzA2NDcgNTQxLjIwMTI2LDY2OC4xNzQzNCA1MTYuNzk3OTQsNjYzLjM0MDYxIDQ5OS41Nzg2Myw2NTkuNDkxMjggNDg3LjMzMjg4LDY1Ni4wODE3NCA0NzcuODUwMjMsNjUyLjU2NzM5IDQ3MC43NjEsNjQ5LjgzODUzIDQ2MS4zMjIxOCw2NDYuNTkxNjEgNDUwLjc2NTM3LDY0My4yMzMzNyA0NDAuMzIyMTYsNjQwLjE3MDU4IDQyOS45OTg2NSw2MzcuMTI3MjggNDE5Ljc2ODkxLDYzMy44MjIxMSA0MTAuODE0MTMsNjMwLjY1Mzc0IDQwNC4zMTU1Myw2MjguMDIwODYgMzk5LjMzNjgxLDYyNS45MTk2NCAzOTQuNTE4NzksNjI0LjE5ODkgMzkwLjQxMTE2LDYyMy4wMzYyMiAzODcuNTYzNTYsNjIyLjYwOTE5IDM4NC44MzczNSw2MjIuOTAzMTQgMzgzLjM1OTQsNjI0LjQxMTE1IDM4Mi43NTA2Myw2MjguMDcyNDUgMzgyLjYzMTk1LDYzNC44MjYyOCAzODMuMjgwNDMsNjUwLjk3NDc0IDM4NS4wODIxLDY3MS4wMjQyOSAzODcuODIxMzYsNjkyLjk4MDQ3IDM5MS4yODI1OCw3MTQuODQ4ODYgMzk1LjA3MDUzLDczNy40MzgyMSAzOTYuNjc5MDEsNzUxLjM3MjkxIDM5Ni4yNDg0OCw3NTkuMjU0MzggMzkzLjkxOTM5LDc2My42ODQwNiAzODkuODkzMzYsNzY2LjAxMjA0IDM4NC4wMTkwNyw3NjcuNjI2MjcgMzc4LjcxODQyLDc2OC4wNzg4MiAzNzYuNDEzMzQsNzY2LjkyMTc3IDM3Ni40MTM3Miw3NjYuOTIxODEgMzc2LjQxNDEsNzY2LjkyMTg0IDM3Ni40MTQ0Nyw3NjYuOTIxODggMzc2LjQxNDg1LDc2Ni45MjE5MlxcXCIgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6Mi45MzEzODQwOTtzdHJva2Utb3BhY2l0eToxXFxcIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cblxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xudmFyIHQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4odD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxyKXt0Ll9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24odCxyKXtmb3IodmFyIGUgaW4gcilyLmhhc093blByb3BlcnR5KGUpJiYodFtlXT1yW2VdKX0pKHIsZSl9O2Z1bmN0aW9uIHIocixlKXtmdW5jdGlvbiBpKCl7dGhpcy5jb25zdHJ1Y3Rvcj1yfXQocixlKSxyLnByb3RvdHlwZT1udWxsPT09ZT9PYmplY3QuY3JlYXRlKGUpOihpLnByb3RvdHlwZT1lLnByb3RvdHlwZSxuZXcgaSl9ZnVuY3Rpb24gZSh0KXt2YXIgcj1cIlwiO0FycmF5LmlzQXJyYXkodCl8fCh0PVt0XSk7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspe3ZhciBpPXRbZV07aWYoaS50eXBlPT09Zi5DTE9TRV9QQVRIKXIrPVwielwiO2Vsc2UgaWYoaS50eXBlPT09Zi5IT1JJWl9MSU5FX1RPKXIrPShpLnJlbGF0aXZlP1wiaFwiOlwiSFwiKStpLng7ZWxzZSBpZihpLnR5cGU9PT1mLlZFUlRfTElORV9UTylyKz0oaS5yZWxhdGl2ZT9cInZcIjpcIlZcIikraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5NT1ZFX1RPKXIrPShpLnJlbGF0aXZlP1wibVwiOlwiTVwiKStpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5MSU5FX1RPKXIrPShpLnJlbGF0aXZlP1wibFwiOlwiTFwiKStpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5DVVJWRV9UTylyKz0oaS5yZWxhdGl2ZT9cImNcIjpcIkNcIikraS54MStcIiBcIitpLnkxK1wiIFwiK2kueDIrXCIgXCIraS55MitcIiBcIitpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5TTU9PVEhfQ1VSVkVfVE8pcis9KGkucmVsYXRpdmU/XCJzXCI6XCJTXCIpK2kueDIrXCIgXCIraS55MitcIiBcIitpLngrXCIgXCIraS55O2Vsc2UgaWYoaS50eXBlPT09Zi5RVUFEX1RPKXIrPShpLnJlbGF0aXZlP1wicVwiOlwiUVwiKStpLngxK1wiIFwiK2kueTErXCIgXCIraS54K1wiIFwiK2kueTtlbHNlIGlmKGkudHlwZT09PWYuU01PT1RIX1FVQURfVE8pcis9KGkucmVsYXRpdmU/XCJ0XCI6XCJUXCIpK2kueCtcIiBcIitpLnk7ZWxzZXtpZihpLnR5cGUhPT1mLkFSQyl0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29tbWFuZCB0eXBlIFwiJytpLnR5cGUrJ1wiIGF0IGluZGV4ICcrZStcIi5cIik7cis9KGkucmVsYXRpdmU/XCJhXCI6XCJBXCIpK2kuclgrXCIgXCIraS5yWStcIiBcIitpLnhSb3QrXCIgXCIrICtpLmxBcmNGbGFnK1wiIFwiKyAraS5zd2VlcEZsYWcrXCIgXCIraS54K1wiIFwiK2kueX19cmV0dXJuIHJ9ZnVuY3Rpb24gaSh0LHIpe3ZhciBlPXRbMF0saT10WzFdO3JldHVybltlKk1hdGguY29zKHIpLWkqTWF0aC5zaW4ociksZSpNYXRoLnNpbihyKStpKk1hdGguY29zKHIpXX1mdW5jdGlvbiBhKCl7Zm9yKHZhciB0PVtdLHI9MDtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXRbcl09YXJndW1lbnRzW3JdO2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKFwibnVtYmVyXCIhPXR5cGVvZiB0W2VdKXRocm93IG5ldyBFcnJvcihcImFzc2VydE51bWJlcnMgYXJndW1lbnRzW1wiK2UrXCJdIGlzIG5vdCBhIG51bWJlci4gXCIrdHlwZW9mIHRbZV0rXCIgPT0gdHlwZW9mIFwiK3RbZV0pO3JldHVybiEwfXZhciBuPU1hdGguUEk7ZnVuY3Rpb24gbyh0LHIsZSl7dC5sQXJjRmxhZz0wPT09dC5sQXJjRmxhZz8wOjEsdC5zd2VlcEZsYWc9MD09PXQuc3dlZXBGbGFnPzA6MTt2YXIgYT10LnJYLG89dC5yWSxzPXQueCx1PXQueTthPU1hdGguYWJzKHQuclgpLG89TWF0aC5hYnModC5yWSk7dmFyIGg9aShbKHItcykvMiwoZS11KS8yXSwtdC54Um90LzE4MCpuKSxjPWhbMF0seT1oWzFdLHA9TWF0aC5wb3coYywyKS9NYXRoLnBvdyhhLDIpK01hdGgucG93KHksMikvTWF0aC5wb3cobywyKTsxPHAmJihhKj1NYXRoLnNxcnQocCksbyo9TWF0aC5zcXJ0KHApKSx0LnJYPWEsdC5yWT1vO3ZhciBtPU1hdGgucG93KGEsMikqTWF0aC5wb3coeSwyKStNYXRoLnBvdyhvLDIpKk1hdGgucG93KGMsMiksTz0odC5sQXJjRmxhZyE9PXQuc3dlZXBGbGFnPzE6LTEpKk1hdGguc3FydChNYXRoLm1heCgwLChNYXRoLnBvdyhhLDIpKk1hdGgucG93KG8sMiktbSkvbSkpLFQ9YSp5L28qTyx2PS1vKmMvYSpPLGw9aShbVCx2XSx0LnhSb3QvMTgwKm4pO3QuY1g9bFswXSsocitzKS8yLHQuY1k9bFsxXSsoZSt1KS8yLHQucGhpMT1NYXRoLmF0YW4yKCh5LXYpL28sKGMtVCkvYSksdC5waGkyPU1hdGguYXRhbjIoKC15LXYpL28sKC1jLVQpL2EpLDA9PT10LnN3ZWVwRmxhZyYmdC5waGkyPnQucGhpMSYmKHQucGhpMi09MipuKSwxPT09dC5zd2VlcEZsYWcmJnQucGhpMjx0LnBoaTEmJih0LnBoaTIrPTIqbiksdC5waGkxKj0xODAvbix0LnBoaTIqPTE4MC9ufWZ1bmN0aW9uIHModCxyLGUpe2EodCxyLGUpO3ZhciBpPXQqdCtyKnItZSplO2lmKDA+aSlyZXR1cm5bXTtpZigwPT09aSlyZXR1cm5bW3QqZS8odCp0K3IqciksciplLyh0KnQrcipyKV1dO3ZhciBuPU1hdGguc3FydChpKTtyZXR1cm5bWyh0KmUrcipuKS8odCp0K3IqciksKHIqZS10Km4pLyh0KnQrcipyKV0sWyh0KmUtcipuKS8odCp0K3IqciksKHIqZSt0Km4pLyh0KnQrcipyKV1dfXZhciB1LGg9TWF0aC5QSS8xODA7ZnVuY3Rpb24gYyh0LHIsZSl7cmV0dXJuKDEtZSkqdCtlKnJ9ZnVuY3Rpb24geSh0LHIsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhpLzE4MCpuKSpyK01hdGguc2luKGkvMTgwKm4pKmV9ZnVuY3Rpb24gcCh0LHIsZSxpKXt2YXIgYT1yLXQsbj1lLXIsbz0zKmErMyooaS1lKS02Km4scz02KihuLWEpLHU9MyphO3JldHVybiBNYXRoLmFicyhvKTwxZS02P1stdS9zXTpmdW5jdGlvbih0LHIsZSl7dm9pZCAwPT09ZSYmKGU9MWUtNik7dmFyIGk9dCp0LzQtcjtpZihpPC1lKXJldHVybltdO2lmKGk8PWUpcmV0dXJuWy10LzJdO3ZhciBhPU1hdGguc3FydChpKTtyZXR1cm5bLXQvMi1hLC10LzIrYV19KHMvbyx1L28sMWUtNil9ZnVuY3Rpb24gbSh0LHIsZSxpLGEpe3ZhciBuPTEtYTtyZXR1cm4gdCoobipuKm4pK3IqKDMqbipuKmEpK2UqKDMqbiphKmEpK2kqKGEqYSphKX0hZnVuY3Rpb24odCl7ZnVuY3Rpb24gcigpe3JldHVybiB1KChmdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQucmVsYXRpdmUmJih2b2lkIDAhPT10LngxJiYodC54MSs9ciksdm9pZCAwIT09dC55MSYmKHQueTErPWUpLHZvaWQgMCE9PXQueDImJih0LngyKz1yKSx2b2lkIDAhPT10LnkyJiYodC55Mis9ZSksdm9pZCAwIT09dC54JiYodC54Kz1yKSx2b2lkIDAhPT10LnkmJih0LnkrPWUpLHQucmVsYXRpdmU9ITEpLHR9KSl9ZnVuY3Rpb24gZSgpe3ZhciB0PU5hTixyPU5hTixlPU5hTixpPU5hTjtyZXR1cm4gdSgoZnVuY3Rpb24oYSxuLG8pe3JldHVybiBhLnR5cGUmZi5TTU9PVEhfQ1VSVkVfVE8mJihhLnR5cGU9Zi5DVVJWRV9UTyx0PWlzTmFOKHQpP246dCxyPWlzTmFOKHIpP286cixhLngxPWEucmVsYXRpdmU/bi10OjIqbi10LGEueTE9YS5yZWxhdGl2ZT9vLXI6MipvLXIpLGEudHlwZSZmLkNVUlZFX1RPPyh0PWEucmVsYXRpdmU/bithLngyOmEueDIscj1hLnJlbGF0aXZlP28rYS55MjphLnkyKToodD1OYU4scj1OYU4pLGEudHlwZSZmLlNNT09USF9RVUFEX1RPJiYoYS50eXBlPWYuUVVBRF9UTyxlPWlzTmFOKGUpP246ZSxpPWlzTmFOKGkpP286aSxhLngxPWEucmVsYXRpdmU/bi1lOjIqbi1lLGEueTE9YS5yZWxhdGl2ZT9vLWk6MipvLWkpLGEudHlwZSZmLlFVQURfVE8/KGU9YS5yZWxhdGl2ZT9uK2EueDE6YS54MSxpPWEucmVsYXRpdmU/bythLnkxOmEueTEpOihlPU5hTixpPU5hTiksYX0pKX1mdW5jdGlvbiBuKCl7dmFyIHQ9TmFOLHI9TmFOO3JldHVybiB1KChmdW5jdGlvbihlLGksYSl7aWYoZS50eXBlJmYuU01PT1RIX1FVQURfVE8mJihlLnR5cGU9Zi5RVUFEX1RPLHQ9aXNOYU4odCk/aTp0LHI9aXNOYU4ocik/YTpyLGUueDE9ZS5yZWxhdGl2ZT9pLXQ6MippLXQsZS55MT1lLnJlbGF0aXZlP2EtcjoyKmEtciksZS50eXBlJmYuUVVBRF9UTyl7dD1lLnJlbGF0aXZlP2krZS54MTplLngxLHI9ZS5yZWxhdGl2ZT9hK2UueTE6ZS55MTt2YXIgbj1lLngxLG89ZS55MTtlLnR5cGU9Zi5DVVJWRV9UTyxlLngxPSgoZS5yZWxhdGl2ZT8wOmkpKzIqbikvMyxlLnkxPSgoZS5yZWxhdGl2ZT8wOmEpKzIqbykvMyxlLngyPShlLngrMipuKS8zLGUueTI9KGUueSsyKm8pLzN9ZWxzZSB0PU5hTixyPU5hTjtyZXR1cm4gZX0pKX1mdW5jdGlvbiB1KHQpe3ZhciByPTAsZT0wLGk9TmFOLGE9TmFOO3JldHVybiBmdW5jdGlvbihuKXtpZihpc05hTihpKSYmIShuLnR5cGUmZi5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7dmFyIG89dChuLHIsZSxpLGEpO3JldHVybiBuLnR5cGUmZi5DTE9TRV9QQVRIJiYocj1pLGU9YSksdm9pZCAwIT09bi54JiYocj1uLnJlbGF0aXZlP3Irbi54Om4ueCksdm9pZCAwIT09bi55JiYoZT1uLnJlbGF0aXZlP2Urbi55Om4ueSksbi50eXBlJmYuTU9WRV9UTyYmKGk9cixhPWUpLG99fWZ1bmN0aW9uIE8odCxyLGUsaSxuLG8pe3JldHVybiBhKHQscixlLGksbixvKSx1KChmdW5jdGlvbihhLHMsdSxoKXt2YXIgYz1hLngxLHk9YS54MixwPWEucmVsYXRpdmUmJiFpc05hTihoKSxtPXZvaWQgMCE9PWEueD9hLng6cD8wOnMsTz12b2lkIDAhPT1hLnk/YS55OnA/MDp1O2Z1bmN0aW9uIFQodCl7cmV0dXJuIHQqdH1hLnR5cGUmZi5IT1JJWl9MSU5FX1RPJiYwIT09ciYmKGEudHlwZT1mLkxJTkVfVE8sYS55PWEucmVsYXRpdmU/MDp1KSxhLnR5cGUmZi5WRVJUX0xJTkVfVE8mJjAhPT1lJiYoYS50eXBlPWYuTElORV9UTyxhLng9YS5yZWxhdGl2ZT8wOnMpLHZvaWQgMCE9PWEueCYmKGEueD1hLngqdCtPKmUrKHA/MDpuKSksdm9pZCAwIT09YS55JiYoYS55PW0qcithLnkqaSsocD8wOm8pKSx2b2lkIDAhPT1hLngxJiYoYS54MT1hLngxKnQrYS55MSplKyhwPzA6bikpLHZvaWQgMCE9PWEueTEmJihhLnkxPWMqcithLnkxKmkrKHA/MDpvKSksdm9pZCAwIT09YS54MiYmKGEueDI9YS54Mip0K2EueTIqZSsocD8wOm4pKSx2b2lkIDAhPT1hLnkyJiYoYS55Mj15KnIrYS55MippKyhwPzA6bykpO3ZhciB2PXQqaS1yKmU7aWYodm9pZCAwIT09YS54Um90JiYoMSE9PXR8fDAhPT1yfHwwIT09ZXx8MSE9PWkpKWlmKDA9PT12KWRlbGV0ZSBhLnJYLGRlbGV0ZSBhLnJZLGRlbGV0ZSBhLnhSb3QsZGVsZXRlIGEubEFyY0ZsYWcsZGVsZXRlIGEuc3dlZXBGbGFnLGEudHlwZT1mLkxJTkVfVE87ZWxzZXt2YXIgbD1hLnhSb3QqTWF0aC5QSS8xODAsXz1NYXRoLnNpbihsKSxOPU1hdGguY29zKGwpLHg9MS9UKGEuclgpLGQ9MS9UKGEuclkpLEE9VChOKSp4K1QoXykqZCxFPTIqXypOKih4LWQpLEM9VChfKSp4K1QoTikqZCxNPUEqaSppLUUqcippK0MqcipyLFI9RSoodCppK3IqZSktMiooQSplKmkrQyp0KnIpLGc9QSplKmUtRSp0KmUrQyp0KnQsST0oTWF0aC5hdGFuMihSLE0tZykrTWF0aC5QSSklTWF0aC5QSS8yLFM9TWF0aC5zaW4oSSksTD1NYXRoLmNvcyhJKTthLnJYPU1hdGguYWJzKHYpL01hdGguc3FydChNKlQoTCkrUipTKkwrZypUKFMpKSxhLnJZPU1hdGguYWJzKHYpL01hdGguc3FydChNKlQoUyktUipTKkwrZypUKEwpKSxhLnhSb3Q9MTgwKkkvTWF0aC5QSX1yZXR1cm4gdm9pZCAwIT09YS5zd2VlcEZsYWcmJjA+diYmKGEuc3dlZXBGbGFnPSshYS5zd2VlcEZsYWcpLGF9KSl9ZnVuY3Rpb24gVCgpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgcj17fTtmb3IodmFyIGUgaW4gdClyW2VdPXRbZV07cmV0dXJuIHJ9fXQuUk9VTkQ9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihyKXtyZXR1cm4gTWF0aC5yb3VuZChyKnQpL3R9cmV0dXJuIHZvaWQgMD09PXQmJih0PTFlMTMpLGEodCksZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMCE9PXQueDEmJih0LngxPXIodC54MSkpLHZvaWQgMCE9PXQueTEmJih0LnkxPXIodC55MSkpLHZvaWQgMCE9PXQueDImJih0LngyPXIodC54MikpLHZvaWQgMCE9PXQueTImJih0LnkyPXIodC55MikpLHZvaWQgMCE9PXQueCYmKHQueD1yKHQueCkpLHZvaWQgMCE9PXQueSYmKHQueT1yKHQueSkpLHZvaWQgMCE9PXQuclgmJih0LnJYPXIodC5yWCkpLHZvaWQgMCE9PXQuclkmJih0LnJZPXIodC5yWSkpLHR9fSx0LlRPX0FCUz1yLHQuVE9fUkVMPWZ1bmN0aW9uKCl7cmV0dXJuIHUoKGZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdC5yZWxhdGl2ZXx8KHZvaWQgMCE9PXQueDEmJih0LngxLT1yKSx2b2lkIDAhPT10LnkxJiYodC55MS09ZSksdm9pZCAwIT09dC54MiYmKHQueDItPXIpLHZvaWQgMCE9PXQueTImJih0LnkyLT1lKSx2b2lkIDAhPT10LngmJih0LngtPXIpLHZvaWQgMCE9PXQueSYmKHQueS09ZSksdC5yZWxhdGl2ZT0hMCksdH0pKX0sdC5OT1JNQUxJWkVfSFZaPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PXImJihyPSEwKSx2b2lkIDA9PT1lJiYoZT0hMCksdSgoZnVuY3Rpb24oaSxhLG4sbyxzKXtpZihpc05hTihvKSYmIShpLnR5cGUmZi5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7cmV0dXJuIHImJmkudHlwZSZmLkhPUklaX0xJTkVfVE8mJihpLnR5cGU9Zi5MSU5FX1RPLGkueT1pLnJlbGF0aXZlPzA6biksZSYmaS50eXBlJmYuVkVSVF9MSU5FX1RPJiYoaS50eXBlPWYuTElORV9UTyxpLng9aS5yZWxhdGl2ZT8wOmEpLHQmJmkudHlwZSZmLkNMT1NFX1BBVEgmJihpLnR5cGU9Zi5MSU5FX1RPLGkueD1pLnJlbGF0aXZlP28tYTpvLGkueT1pLnJlbGF0aXZlP3MtbjpzKSxpLnR5cGUmZi5BUkMmJigwPT09aS5yWHx8MD09PWkuclkpJiYoaS50eXBlPWYuTElORV9UTyxkZWxldGUgaS5yWCxkZWxldGUgaS5yWSxkZWxldGUgaS54Um90LGRlbGV0ZSBpLmxBcmNGbGFnLGRlbGV0ZSBpLnN3ZWVwRmxhZyksaX0pKX0sdC5OT1JNQUxJWkVfU1Q9ZSx0LlFUX1RPX0M9bix0LklORk89dSx0LlNBTklUSVpFPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTApLGEodCk7dmFyIHI9TmFOLGU9TmFOLGk9TmFOLG49TmFOO3JldHVybiB1KChmdW5jdGlvbihhLG8scyx1LGgpe3ZhciBjPU1hdGguYWJzLHk9ITEscD0wLG09MDtpZihhLnR5cGUmZi5TTU9PVEhfQ1VSVkVfVE8mJihwPWlzTmFOKHIpPzA6by1yLG09aXNOYU4oZSk/MDpzLWUpLGEudHlwZSYoZi5DVVJWRV9UT3xmLlNNT09USF9DVVJWRV9UTyk/KHI9YS5yZWxhdGl2ZT9vK2EueDI6YS54MixlPWEucmVsYXRpdmU/cythLnkyOmEueTIpOihyPU5hTixlPU5hTiksYS50eXBlJmYuU01PT1RIX1FVQURfVE8/KGk9aXNOYU4oaSk/bzoyKm8taSxuPWlzTmFOKG4pP3M6MipzLW4pOmEudHlwZSZmLlFVQURfVE8/KGk9YS5yZWxhdGl2ZT9vK2EueDE6YS54MSxuPWEucmVsYXRpdmU/cythLnkxOmEueTIpOihpPU5hTixuPU5hTiksYS50eXBlJmYuTElORV9DT01NQU5EU3x8YS50eXBlJmYuQVJDJiYoMD09PWEuclh8fDA9PT1hLnJZfHwhYS5sQXJjRmxhZyl8fGEudHlwZSZmLkNVUlZFX1RPfHxhLnR5cGUmZi5TTU9PVEhfQ1VSVkVfVE98fGEudHlwZSZmLlFVQURfVE98fGEudHlwZSZmLlNNT09USF9RVUFEX1RPKXt2YXIgTz12b2lkIDA9PT1hLng/MDphLnJlbGF0aXZlP2EueDphLngtbyxUPXZvaWQgMD09PWEueT8wOmEucmVsYXRpdmU/YS55OmEueS1zO3A9aXNOYU4oaSk/dm9pZCAwPT09YS54MT9wOmEucmVsYXRpdmU/YS54OmEueDEtbzppLW8sbT1pc05hTihuKT92b2lkIDA9PT1hLnkxP206YS5yZWxhdGl2ZT9hLnk6YS55MS1zOm4tczt2YXIgdj12b2lkIDA9PT1hLngyPzA6YS5yZWxhdGl2ZT9hLng6YS54Mi1vLGw9dm9pZCAwPT09YS55Mj8wOmEucmVsYXRpdmU/YS55OmEueTItcztjKE8pPD10JiZjKFQpPD10JiZjKHApPD10JiZjKG0pPD10JiZjKHYpPD10JiZjKGwpPD10JiYoeT0hMCl9cmV0dXJuIGEudHlwZSZmLkNMT1NFX1BBVEgmJmMoby11KTw9dCYmYyhzLWgpPD10JiYoeT0hMCkseT9bXTphfSkpfSx0Lk1BVFJJWD1PLHQuUk9UQVRFPWZ1bmN0aW9uKHQscixlKXt2b2lkIDA9PT1yJiYocj0wKSx2b2lkIDA9PT1lJiYoZT0wKSxhKHQscixlKTt2YXIgaT1NYXRoLnNpbih0KSxuPU1hdGguY29zKHQpO3JldHVybiBPKG4saSwtaSxuLHItcipuK2UqaSxlLXIqaS1lKm4pfSx0LlRSQU5TTEFURT1mdW5jdGlvbih0LHIpe3JldHVybiB2b2lkIDA9PT1yJiYocj0wKSxhKHQsciksTygxLDAsMCwxLHQscil9LHQuU0NBTEU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gdm9pZCAwPT09ciYmKHI9dCksYSh0LHIpLE8odCwwLDAsciwwLDApfSx0LlNLRVdfWD1mdW5jdGlvbih0KXtyZXR1cm4gYSh0KSxPKDEsMCxNYXRoLmF0YW4odCksMSwwLDApfSx0LlNLRVdfWT1mdW5jdGlvbih0KXtyZXR1cm4gYSh0KSxPKDEsTWF0aC5hdGFuKHQpLDAsMSwwLDApfSx0LlhfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYSh0KSxPKC0xLDAsMCwxLHQsMCl9LHQuWV9BWElTX1NZTU1FVFJZPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxhKHQpLE8oMSwwLDAsLTEsMCx0KX0sdC5BX1RPX0M9ZnVuY3Rpb24oKXtyZXR1cm4gdSgoZnVuY3Rpb24odCxyLGUpe3JldHVybiBmLkFSQz09PXQudHlwZT9mdW5jdGlvbih0LHIsZSl7dmFyIGEsbixzLHU7dC5jWHx8byh0LHIsZSk7Zm9yKHZhciB5PU1hdGgubWluKHQucGhpMSx0LnBoaTIpLHA9TWF0aC5tYXgodC5waGkxLHQucGhpMikteSxtPU1hdGguY2VpbChwLzkwKSxPPW5ldyBBcnJheShtKSxUPXIsdj1lLGw9MDtsPG07bCsrKXt2YXIgXz1jKHQucGhpMSx0LnBoaTIsbC9tKSxOPWModC5waGkxLHQucGhpMiwobCsxKS9tKSx4PU4tXyxkPTQvMypNYXRoLnRhbih4KmgvNCksQT1bTWF0aC5jb3MoXypoKS1kKk1hdGguc2luKF8qaCksTWF0aC5zaW4oXypoKStkKk1hdGguY29zKF8qaCldLEU9QVswXSxDPUFbMV0sTT1bTWF0aC5jb3MoTipoKSxNYXRoLnNpbihOKmgpXSxSPU1bMF0sZz1NWzFdLEk9W1IrZCpNYXRoLnNpbihOKmgpLGctZCpNYXRoLmNvcyhOKmgpXSxTPUlbMF0sTD1JWzFdO09bbF09e3JlbGF0aXZlOnQucmVsYXRpdmUsdHlwZTpmLkNVUlZFX1RPfTt2YXIgSD1mdW5jdGlvbihyLGUpe3ZhciBhPWkoW3IqdC5yWCxlKnQuclldLHQueFJvdCksbj1hWzBdLG89YVsxXTtyZXR1cm5bdC5jWCtuLHQuY1krb119O2E9SChFLEMpLE9bbF0ueDE9YVswXSxPW2xdLnkxPWFbMV0sbj1IKFMsTCksT1tsXS54Mj1uWzBdLE9bbF0ueTI9blsxXSxzPUgoUixnKSxPW2xdLng9c1swXSxPW2xdLnk9c1sxXSx0LnJlbGF0aXZlJiYoT1tsXS54MS09VCxPW2xdLnkxLT12LE9bbF0ueDItPVQsT1tsXS55Mi09dixPW2xdLngtPVQsT1tsXS55LT12KSxUPSh1PVtPW2xdLngsT1tsXS55XSlbMF0sdj11WzFdfXJldHVybiBPfSh0LHQucmVsYXRpdmU/MDpyLHQucmVsYXRpdmU/MDplKTp0fSkpfSx0LkFOTk9UQVRFX0FSQ1M9ZnVuY3Rpb24oKXtyZXR1cm4gdSgoZnVuY3Rpb24odCxyLGUpe3JldHVybiB0LnJlbGF0aXZlJiYocj0wLGU9MCksZi5BUkM9PT10LnR5cGUmJm8odCxyLGUpLHR9KSl9LHQuQ0xPTkU9VCx0LkNBTENVTEFURV9CT1VORFM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbih0KXt2YXIgcj17fTtmb3IodmFyIGUgaW4gdClyW2VdPXRbZV07cmV0dXJuIHJ9LGk9cigpLGE9bigpLGg9ZSgpLGM9dSgoZnVuY3Rpb24ocixlLG4pe3ZhciB1PWgoYShpKHQocikpKSk7ZnVuY3Rpb24gTyh0KXt0PmMubWF4WCYmKGMubWF4WD10KSx0PGMubWluWCYmKGMubWluWD10KX1mdW5jdGlvbiBUKHQpe3Q+Yy5tYXhZJiYoYy5tYXhZPXQpLHQ8Yy5taW5ZJiYoYy5taW5ZPXQpfWlmKHUudHlwZSZmLkRSQVdJTkdfQ09NTUFORFMmJihPKGUpLFQobikpLHUudHlwZSZmLkhPUklaX0xJTkVfVE8mJk8odS54KSx1LnR5cGUmZi5WRVJUX0xJTkVfVE8mJlQodS55KSx1LnR5cGUmZi5MSU5FX1RPJiYoTyh1LngpLFQodS55KSksdS50eXBlJmYuQ1VSVkVfVE8pe08odS54KSxUKHUueSk7Zm9yKHZhciB2PTAsbD1wKGUsdS54MSx1LngyLHUueCk7djxsLmxlbmd0aDt2KyspezA8KHc9bFt2XSkmJjE+dyYmTyhtKGUsdS54MSx1LngyLHUueCx3KSl9Zm9yKHZhciBfPTAsTj1wKG4sdS55MSx1LnkyLHUueSk7XzxOLmxlbmd0aDtfKyspezA8KHc9TltfXSkmJjE+dyYmVChtKG4sdS55MSx1LnkyLHUueSx3KSl9fWlmKHUudHlwZSZmLkFSQyl7Tyh1LngpLFQodS55KSxvKHUsZSxuKTtmb3IodmFyIHg9dS54Um90LzE4MCpNYXRoLlBJLGQ9TWF0aC5jb3MoeCkqdS5yWCxBPU1hdGguc2luKHgpKnUuclgsRT0tTWF0aC5zaW4oeCkqdS5yWSxDPU1hdGguY29zKHgpKnUuclksTT11LnBoaTE8dS5waGkyP1t1LnBoaTEsdS5waGkyXTotMTgwPnUucGhpMj9bdS5waGkyKzM2MCx1LnBoaTErMzYwXTpbdS5waGkyLHUucGhpMV0sUj1NWzBdLGc9TVsxXSxJPWZ1bmN0aW9uKHQpe3ZhciByPXRbMF0sZT10WzFdLGk9MTgwKk1hdGguYXRhbjIoZSxyKS9NYXRoLlBJO3JldHVybiBpPFI/aSszNjA6aX0sUz0wLEw9cyhFLC1kLDApLm1hcChJKTtTPEwubGVuZ3RoO1MrKyl7KHc9TFtTXSk+UiYmdzxnJiZPKHkodS5jWCxkLEUsdykpfWZvcih2YXIgSD0wLFU9cyhDLC1BLDApLm1hcChJKTtIPFUubGVuZ3RoO0grKyl7dmFyIHc7KHc9VVtIXSk+UiYmdzxnJiZUKHkodS5jWSxBLEMsdykpfX1yZXR1cm4gcn0pKTtyZXR1cm4gYy5taW5YPTEvMCxjLm1heFg9LTEvMCxjLm1pblk9MS8wLGMubWF4WT0tMS8wLGN9fSh1fHwodT17fSkpO3ZhciBPLFQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7fXJldHVybiB0LnByb3RvdHlwZS5yb3VuZD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5ST1VORCh0KSl9LHQucHJvdG90eXBlLnRvQWJzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuVE9fQUJTKCkpfSx0LnByb3RvdHlwZS50b1JlbD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlRPX1JFTCgpKX0sdC5wcm90b3R5cGUubm9ybWFsaXplSFZaPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5OT1JNQUxJWkVfSFZaKHQscixlKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZVNUPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuTk9STUFMSVpFX1NUKCkpfSx0LnByb3RvdHlwZS5xdFRvQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlFUX1RPX0MoKSl9LHQucHJvdG90eXBlLmFUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5BX1RPX0MoKSl9LHQucHJvdG90eXBlLnNhbml0aXplPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlNBTklUSVpFKHQpKX0sdC5wcm90b3R5cGUudHJhbnNsYXRlPWZ1bmN0aW9uKHQscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuVFJBTlNMQVRFKHQscikpfSx0LnByb3RvdHlwZS5zY2FsZT1mdW5jdGlvbih0LHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlNDQUxFKHQscikpfSx0LnByb3RvdHlwZS5yb3RhdGU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LlJPVEFURSh0LHIsZSkpfSx0LnByb3RvdHlwZS5tYXRyaXg9ZnVuY3Rpb24odCxyLGUsaSxhLG4pe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1Lk1BVFJJWCh0LHIsZSxpLGEsbikpfSx0LnByb3RvdHlwZS5za2V3WD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5TS0VXX1godCkpfSx0LnByb3RvdHlwZS5za2V3WT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odS5TS0VXX1kodCkpfSx0LnByb3RvdHlwZS54U3ltbWV0cnk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHUuWF9BWElTX1NZTU1FVFJZKHQpKX0sdC5wcm90b3R5cGUueVN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LllfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLmFubm90YXRlQXJjcz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybSh1LkFOTk9UQVRFX0FSQ1MoKSl9LHR9KCksdj1mdW5jdGlvbih0KXtyZXR1cm5cIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcclwiPT09dHx8XCJcXG5cIj09PXR9LGw9ZnVuY3Rpb24odCl7cmV0dXJuXCIwXCIuY2hhckNvZGVBdCgwKTw9dC5jaGFyQ29kZUF0KDApJiZ0LmNoYXJDb2RlQXQoMCk8PVwiOVwiLmNoYXJDb2RlQXQoMCl9LF89ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSgpe3ZhciByPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gci5jdXJOdW1iZXI9XCJcIixyLmN1ckNvbW1hbmRUeXBlPS0xLHIuY3VyQ29tbWFuZFJlbGF0aXZlPSExLHIuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCxyLmN1ck51bWJlckhhc0V4cD0hMSxyLmN1ck51bWJlckhhc0V4cERpZ2l0cz0hMSxyLmN1ck51bWJlckhhc0RlY2ltYWw9ITEsci5jdXJBcmdzPVtdLHJ9cmV0dXJuIHIoZSx0KSxlLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCYmKHQ9W10pLHRoaXMucGFyc2UoXCIgXCIsdCksMCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgdGhlIHBhdGggZW5kLlwiKTtyZXR1cm4gdH0sZS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24odCxyKXt2YXIgZT10aGlzO3ZvaWQgMD09PXImJihyPVtdKTtmb3IodmFyIGk9ZnVuY3Rpb24odCl7ci5wdXNoKHQpLGUuY3VyQXJncy5sZW5ndGg9MCxlLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9LGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIG49dFthXSxvPSEodGhpcy5jdXJDb21tYW5kVHlwZSE9PWYuQVJDfHwzIT09dGhpcy5jdXJBcmdzLmxlbmd0aCYmNCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fDEhPT10aGlzLmN1ck51bWJlci5sZW5ndGh8fFwiMFwiIT09dGhpcy5jdXJOdW1iZXImJlwiMVwiIT09dGhpcy5jdXJOdW1iZXIpLHM9bChuKSYmKFwiMFwiPT09dGhpcy5jdXJOdW1iZXImJlwiMFwiPT09bnx8byk7aWYoIWwobil8fHMpaWYoXCJlXCIhPT1uJiZcIkVcIiE9PW4paWYoXCItXCIhPT1uJiZcIitcIiE9PW58fCF0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHMpaWYoXCIuXCIhPT1ufHx0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsfHxvKXtpZih0aGlzLmN1ck51bWJlciYmLTEhPT10aGlzLmN1ckNvbW1hbmRUeXBlKXt2YXIgdT1OdW1iZXIodGhpcy5jdXJOdW1iZXIpO2lmKGlzTmFOKHUpKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkludmFsaWQgbnVtYmVyIGVuZGluZyBhdCBcIithKTtpZih0aGlzLmN1ckNvbW1hbmRUeXBlPT09Zi5BUkMpaWYoMD09PXRoaXMuY3VyQXJncy5sZW5ndGh8fDE9PT10aGlzLmN1ckFyZ3MubGVuZ3RoKXtpZigwPnUpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBwb3NpdGl2ZSBudW1iZXIsIGdvdCBcIicrdSsnXCIgYXQgaW5kZXggXCInK2ErJ1wiJyl9ZWxzZSBpZigoMz09PXRoaXMuY3VyQXJncy5sZW5ndGh8fDQ9PT10aGlzLmN1ckFyZ3MubGVuZ3RoKSYmXCIwXCIhPT10aGlzLmN1ck51bWJlciYmXCIxXCIhPT10aGlzLmN1ck51bWJlcil0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0V4cGVjdGVkIGEgZmxhZywgZ290IFwiJyt0aGlzLmN1ck51bWJlcisnXCIgYXQgaW5kZXggXCInK2ErJ1wiJyk7dGhpcy5jdXJBcmdzLnB1c2godSksdGhpcy5jdXJBcmdzLmxlbmd0aD09PU5bdGhpcy5jdXJDb21tYW5kVHlwZV0mJihmLkhPUklaX0xJTkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlP2koe3R5cGU6Zi5IT1JJWl9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6dX0pOmYuVkVSVF9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9pKHt0eXBlOmYuVkVSVF9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHk6dX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLk1PVkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLkxJTkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLlNNT09USF9RVUFEX1RPPyhpKHt0eXBlOnRoaXMuY3VyQ29tbWFuZFR5cGUscmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDp0aGlzLmN1ckFyZ3NbMF0seTp0aGlzLmN1ckFyZ3NbMV19KSxmLk1PVkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlJiYodGhpcy5jdXJDb21tYW5kVHlwZT1mLkxJTkVfVE8pKTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09Zi5DVVJWRV9UTz9pKHt0eXBlOmYuQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4Mjp0aGlzLmN1ckFyZ3NbMl0seTI6dGhpcy5jdXJBcmdzWzNdLHg6dGhpcy5jdXJBcmdzWzRdLHk6dGhpcy5jdXJBcmdzWzVdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PWYuU01PT1RIX0NVUlZFX1RPP2koe3R5cGU6Zi5TTU9PVEhfQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDI6dGhpcy5jdXJBcmdzWzBdLHkyOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLlFVQURfVE8/aSh7dHlwZTpmLlFVQURfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1mLkFSQyYmaSh7dHlwZTpmLkFSQyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSxyWDp0aGlzLmN1ckFyZ3NbMF0sclk6dGhpcy5jdXJBcmdzWzFdLHhSb3Q6dGhpcy5jdXJBcmdzWzJdLGxBcmNGbGFnOnRoaXMuY3VyQXJnc1szXSxzd2VlcEZsYWc6dGhpcy5jdXJBcmdzWzRdLHg6dGhpcy5jdXJBcmdzWzVdLHk6dGhpcy5jdXJBcmdzWzZdfSkpLHRoaXMuY3VyTnVtYmVyPVwiXCIsdGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITEsdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMH1pZighdihuKSlpZihcIixcIj09PW4mJnRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITE7ZWxzZSBpZihcIitcIiE9PW4mJlwiLVwiIT09biYmXCIuXCIhPT1uKWlmKHMpdGhpcy5jdXJOdW1iZXI9bix0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITE7ZWxzZXtpZigwIT09dGhpcy5jdXJBcmdzLmxlbmd0aCl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJVbnRlcm1pbmF0ZWQgY29tbWFuZCBhdCBpbmRleCBcIithK1wiLlwiKTtpZighdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCBjaGFyYWN0ZXIgXCInK24rJ1wiIGF0IGluZGV4ICcrYStcIi4gQ29tbWFuZCBjYW5ub3QgZm9sbG93IGNvbW1hXCIpO2lmKHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMSxcInpcIiE9PW4mJlwiWlwiIT09bilpZihcImhcIj09PW58fFwiSFwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPWYuSE9SSVpfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImhcIj09PW47ZWxzZSBpZihcInZcIj09PW58fFwiVlwiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPWYuVkVSVF9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwidlwiPT09bjtlbHNlIGlmKFwibVwiPT09bnx8XCJNXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5NT1ZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibVwiPT09bjtlbHNlIGlmKFwibFwiPT09bnx8XCJMXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibFwiPT09bjtlbHNlIGlmKFwiY1wiPT09bnx8XCJDXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImNcIj09PW47ZWxzZSBpZihcInNcIj09PW58fFwiU1wiPT09bil0aGlzLmN1ckNvbW1hbmRUeXBlPWYuU01PT1RIX0NVUlZFX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwic1wiPT09bjtlbHNlIGlmKFwicVwiPT09bnx8XCJRXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5RVUFEX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwicVwiPT09bjtlbHNlIGlmKFwidFwiPT09bnx8XCJUXCI9PT1uKXRoaXMuY3VyQ29tbWFuZFR5cGU9Zi5TTU9PVEhfUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInRcIj09PW47ZWxzZXtpZihcImFcIiE9PW4mJlwiQVwiIT09bil0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytuKydcIiBhdCBpbmRleCAnK2ErXCIuXCIpO3RoaXMuY3VyQ29tbWFuZFR5cGU9Zi5BUkMsdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJhXCI9PT1ufWVsc2Ugci5wdXNoKHt0eXBlOmYuQ0xPU0VfUEFUSH0pLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCx0aGlzLmN1ckNvbW1hbmRUeXBlPS0xfWVsc2UgdGhpcy5jdXJOdW1iZXI9bix0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9XCIuXCI9PT1ufWVsc2UgdGhpcy5jdXJOdW1iZXIrPW4sdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSEwO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPW47ZWxzZSB0aGlzLmN1ck51bWJlcis9bix0aGlzLmN1ck51bWJlckhhc0V4cD0hMDtlbHNlIHRoaXMuY3VyTnVtYmVyKz1uLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPXRoaXMuY3VyTnVtYmVySGFzRXhwfXJldHVybiByfSxlLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyx7cGFyc2U6e3ZhbHVlOmZ1bmN0aW9uKHIsZSl7dm9pZCAwPT09ZSYmKGU9W10pO2Zvcih2YXIgaT0wLGE9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlLmNhbGwodGhpcyxyKTtpPGEubGVuZ3RoO2krKyl7dmFyIG49YVtpXSxvPXQobik7QXJyYXkuaXNBcnJheShvKT9lLnB1c2guYXBwbHkoZSxvKTplLnB1c2gobyl9cmV0dXJuIGV9fX0pfSxlfShUKSxmPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGkocil7dmFyIGU9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBlLmNvbW1hbmRzPVwic3RyaW5nXCI9PXR5cGVvZiByP2kucGFyc2Uocik6cixlfXJldHVybiByKGksdCksaS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGkuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxpLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD11LkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0saS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgcj1bXSxlPTAsaT10aGlzLmNvbW1hbmRzO2U8aS5sZW5ndGg7ZSsrKXt2YXIgYT10KGlbZV0pO0FycmF5LmlzQXJyYXkoYSk/ci5wdXNoLmFwcGx5KHIsYSk6ci5wdXNoKGEpfXJldHVybiB0aGlzLmNvbW1hbmRzPXIsdGhpc30saS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGUodCl9LGkucGFyc2U9ZnVuY3Rpb24odCl7dmFyIHI9bmV3IF8sZT1bXTtyZXR1cm4gci5wYXJzZSh0LGUpLHIuZmluaXNoKGUpLGV9LGkuQ0xPU0VfUEFUSD0xLGkuTU9WRV9UTz0yLGkuSE9SSVpfTElORV9UTz00LGkuVkVSVF9MSU5FX1RPPTgsaS5MSU5FX1RPPTE2LGkuQ1VSVkVfVE89MzIsaS5TTU9PVEhfQ1VSVkVfVE89NjQsaS5RVUFEX1RPPTEyOCxpLlNNT09USF9RVUFEX1RPPTI1NixpLkFSQz01MTIsaS5MSU5FX0NPTU1BTkRTPWkuTElORV9UT3xpLkhPUklaX0xJTkVfVE98aS5WRVJUX0xJTkVfVE8saS5EUkFXSU5HX0NPTU1BTkRTPWkuSE9SSVpfTElORV9UT3xpLlZFUlRfTElORV9UT3xpLkxJTkVfVE98aS5DVVJWRV9UT3xpLlNNT09USF9DVVJWRV9UT3xpLlFVQURfVE98aS5TTU9PVEhfUVVBRF9UT3xpLkFSQyxpfShUKSxOPSgoTz17fSlbZi5NT1ZFX1RPXT0yLE9bZi5MSU5FX1RPXT0yLE9bZi5IT1JJWl9MSU5FX1RPXT0xLE9bZi5WRVJUX0xJTkVfVE9dPTEsT1tmLkNMT1NFX1BBVEhdPTAsT1tmLlFVQURfVE9dPTQsT1tmLlNNT09USF9RVUFEX1RPXT0yLE9bZi5DVVJWRV9UT109NixPW2YuU01PT1RIX0NVUlZFX1RPXT00LE9bZi5BUkNdPTcsTyk7ZXhwb3J0e04gYXMgQ09NTUFORF9BUkdfQ09VTlRTLGYgYXMgU1ZHUGF0aERhdGEsXyBhcyBTVkdQYXRoRGF0YVBhcnNlcix1IGFzIFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIsZSBhcyBlbmNvZGVTVkdQYXRofTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNWR1BhdGhEYXRhLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCB0b1BhdGggZnJvbSAnLi90b1BhdGgnO1xuaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuaW1wb3J0IHZhbGlkIGZyb20gJy4vdmFsaWQnO1xuXG5leHBvcnQgeyB0b1BhdGgsIHRvUG9pbnRzLCB2YWxpZCB9OyIsImltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcblxudmFyIHBvaW50c1RvRCA9IGZ1bmN0aW9uIHBvaW50c1RvRChwKSB7XG4gIHZhciBkID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGZpcnN0UG9pbnQgPSB2b2lkIDA7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwb2ludCA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIF9wb2ludCRjdXJ2ZSA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgIGN1cnZlID0gX3BvaW50JGN1cnZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wb2ludCRjdXJ2ZSxcbiAgICAgICAgICBtb3ZlVG8gPSBwb2ludC5tb3ZlVG8sXG4gICAgICAgICAgeCA9IHBvaW50LngsXG4gICAgICAgICAgeSA9IHBvaW50Lnk7XG5cbiAgICAgIHZhciBpc0ZpcnN0UG9pbnQgPSBpID09PSAwIHx8IG1vdmVUbztcbiAgICAgIHZhciBpc0xhc3RQb2ludCA9IGkgPT09IHAubGVuZ3RoIC0gMSB8fCBwW2kgKyAxXS5tb3ZlVG87XG4gICAgICB2YXIgcHJldlBvaW50ID0gaSA9PT0gMCA/IG51bGwgOiBwW2kgLSAxXTtcblxuICAgICAgaWYgKGlzRmlyc3RQb2ludCkge1xuICAgICAgICBmaXJzdFBvaW50ID0gcG9pbnQ7XG5cbiAgICAgICAgaWYgKCFpc0xhc3RQb2ludCkge1xuICAgICAgICAgIGQgKz0gJ00nICsgeCArICcsJyArIHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VydmUpIHtcbiAgICAgICAgc3dpdGNoIChjdXJ2ZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYXJjJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUyID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRsYXJnZUFyID0gX3BvaW50JGN1cnZlMi5sYXJnZUFyY0ZsYWcsXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnID0gX3BvaW50JGN1cnZlMiRsYXJnZUFyID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRsYXJnZUFyLFxuICAgICAgICAgICAgICAgIHJ4ID0gX3BvaW50JGN1cnZlMi5yeCxcbiAgICAgICAgICAgICAgICByeSA9IF9wb2ludCRjdXJ2ZTIucnksXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRzd2VlcEZsID0gX3BvaW50JGN1cnZlMi5zd2VlcEZsYWcsXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnID0gX3BvaW50JGN1cnZlMiRzd2VlcEZsID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRzd2VlcEZsLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9IF9wb2ludCRjdXJ2ZTIueEF4aXNSb3RhdGlvbixcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uID0gX3BvaW50JGN1cnZlMiR4QXhpc1JvID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiR4QXhpc1JvO1xuXG4gICAgICAgICAgICBkICs9ICdBJyArIHJ4ICsgJywnICsgcnkgKyAnLCcgKyB4QXhpc1JvdGF0aW9uICsgJywnICsgbGFyZ2VBcmNGbGFnICsgJywnICsgc3dlZXBGbGFnICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjdWJpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMyA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIGN4MSA9IF9wb2ludCRjdXJ2ZTMueDEsXG4gICAgICAgICAgICAgICAgY3kxID0gX3BvaW50JGN1cnZlMy55MSxcbiAgICAgICAgICAgICAgICBjeDIgPSBfcG9pbnQkY3VydmUzLngyLFxuICAgICAgICAgICAgICAgIGN5MiA9IF9wb2ludCRjdXJ2ZTMueTI7XG5cbiAgICAgICAgICAgIGQgKz0gJ0MnICsgY3gxICsgJywnICsgY3kxICsgJywnICsgY3gyICsgJywnICsgY3kyICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdxdWFkcmF0aWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTQgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBxeDEgPSBfcG9pbnQkY3VydmU0LngxLFxuICAgICAgICAgICAgICAgIHF5MSA9IF9wb2ludCRjdXJ2ZTQueTE7XG5cbiAgICAgICAgICAgIGQgKz0gJ1EnICsgcXgxICsgJywnICsgcXkxICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgICAgZCArPSAnWic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICBkICs9ICdaJztcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LnggJiYgeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnTCcgKyB4ICsgJywnICsgeTtcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LngpIHtcbiAgICAgICAgZCArPSAnSCcgKyB4O1xuICAgICAgfSBlbHNlIGlmICh5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdWJyArIHk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGQ7XG59O1xuXG52YXIgdG9QYXRoID0gZnVuY3Rpb24gdG9QYXRoKHMpIHtcbiAgdmFyIGlzUG9pbnRzID0gQXJyYXkuaXNBcnJheShzKTtcbiAgdmFyIGlzR3JvdXAgPSBpc1BvaW50cyA/IEFycmF5LmlzQXJyYXkoc1swXSkgOiBzLnR5cGUgPT09ICdnJztcbiAgdmFyIHBvaW50cyA9IGlzUG9pbnRzID8gcyA6IGlzR3JvdXAgPyBzLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHNocCkge1xuICAgIHJldHVybiB0b1BvaW50cyhzaHApO1xuICB9KSA6IHRvUG9pbnRzKHMpO1xuXG4gIGlmIChpc0dyb3VwKSB7XG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwb2ludHNUb0QocCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzVG9EKHBvaW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdG9Qb2ludHMgPSBmdW5jdGlvbiB0b1BvaW50cyhfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyd0eXBlJ10pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUNpcmNsZShwcm9wcyk7XG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUVsbGlwc2UocHJvcHMpO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21MaW5lKHByb3BzKTtcbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUGF0aChwcm9wcyk7XG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlnb24ocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0KHByb3BzKTtcbiAgICBjYXNlICdnJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRyhwcm9wcyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgc2hhcGUgdHlwZScpO1xuICB9XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUNpcmNsZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21DaXJjbGUoX3JlZjIpIHtcbiAgdmFyIGN4ID0gX3JlZjIuY3gsXG4gICAgICBjeSA9IF9yZWYyLmN5LFxuICAgICAgciA9IF9yZWYyLnI7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHIsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUVsbGlwc2UgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRWxsaXBzZShfcmVmMykge1xuICB2YXIgY3ggPSBfcmVmMy5jeCxcbiAgICAgIGN5ID0gX3JlZjMuY3ksXG4gICAgICByeCA9IF9yZWYzLnJ4LFxuICAgICAgcnkgPSBfcmVmMy5yeTtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gcnksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tTGluZShfcmVmNCkge1xuICB2YXIgeDEgPSBfcmVmNC54MSxcbiAgICAgIHgyID0gX3JlZjQueDIsXG4gICAgICB5MSA9IF9yZWY0LnkxLFxuICAgICAgeTIgPSBfcmVmNC55MjtcblxuICByZXR1cm4gW3sgeDogeDEsIHk6IHkxLCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4MiwgeTogeTIgfV07XG59O1xuXG52YXIgdmFsaWRDb21tYW5kcyA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdL2c7XG5cbnZhciBjb21tYW5kTGVuZ3RocyA9IHtcbiAgQTogNyxcbiAgQzogNixcbiAgSDogMSxcbiAgTDogMixcbiAgTTogMixcbiAgUTogNCxcbiAgUzogNCxcbiAgVDogMixcbiAgVjogMSxcbiAgWjogMFxufTtcblxudmFyIHJlbGF0aXZlQ29tbWFuZHMgPSBbJ2EnLCAnYycsICdoJywgJ2wnLCAnbScsICdxJywgJ3MnLCAndCcsICd2J107XG5cbnZhciBpc1JlbGF0aXZlID0gZnVuY3Rpb24gaXNSZWxhdGl2ZShjb21tYW5kKSB7XG4gIHJldHVybiByZWxhdGl2ZUNvbW1hbmRzLmluZGV4T2YoY29tbWFuZCkgIT09IC0xO1xufTtcblxudmFyIG9wdGlvbmFsQXJjS2V5cyA9IFsneEF4aXNSb3RhdGlvbicsICdsYXJnZUFyY0ZsYWcnLCAnc3dlZXBGbGFnJ107XG5cbnZhciBnZXRDb21tYW5kcyA9IGZ1bmN0aW9uIGdldENvbW1hbmRzKGQpIHtcbiAgcmV0dXJuIGQubWF0Y2godmFsaWRDb21tYW5kcyk7XG59O1xuXG52YXIgZ2V0UGFyYW1zID0gZnVuY3Rpb24gZ2V0UGFyYW1zKGQpIHtcbiAgcmV0dXJuIGQuc3BsaXQodmFsaWRDb21tYW5kcykubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvWzAtOV0rLS9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0uc2xpY2UoMCwgLTEpICsgJyAtJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvXFwuWzAtOV0rL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbSArICcgJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5sZW5ndGggPiAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5zcGxpdCgvWyAsXSsvKS5tYXAocGFyc2VGbG9hdCkuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKG4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUGF0aCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21QYXRoKF9yZWY1KSB7XG4gIHZhciBkID0gX3JlZjUuZDtcblxuICB2YXIgY29tbWFuZHMgPSBnZXRDb21tYW5kcyhkKTtcbiAgdmFyIHBhcmFtcyA9IGdldFBhcmFtcyhkKTtcblxuICB2YXIgcG9pbnRzID0gW107XG5cbiAgdmFyIG1vdmVUbyA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbaV07XG4gICAgdmFyIHVwcGVyQ2FzZUNvbW1hbmQgPSBjb21tYW5kLnRvVXBwZXJDYXNlKCk7XG4gICAgdmFyIGNvbW1hbmRMZW5ndGggPSBjb21tYW5kTGVuZ3Roc1t1cHBlckNhc2VDb21tYW5kXTtcbiAgICB2YXIgcmVsYXRpdmUgPSBpc1JlbGF0aXZlKGNvbW1hbmQpO1xuXG4gICAgaWYgKGNvbW1hbmRMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY29tbWFuZFBhcmFtcyA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb21tYW5kUGFyYW1zLmxlbmd0aCAvIGNvbW1hbmRMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlcmF0aW9uczsgaisrKSB7XG4gICAgICAgIHZhciBwcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHN3aXRjaCAodXBwZXJDYXNlQ29tbWFuZCkge1xuICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgdmFyIHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICBtb3ZlVG8gPSB7IHg6IHgsIHk6IHkgfTtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiBwcmV2UG9pbnQueVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHByZXZQb2ludC54LFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJjJyxcbiAgICAgICAgICAgICAgICByeDogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHJ5OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbjogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gb3B0aW9uYWxBcmNLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3ViaWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHgyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgdmFyIHN4MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgZGlmZiA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgc3gxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHN5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ2N1YmljJykge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDIgPyBwcmV2UG9pbnQueCAtIGRpZmYueCA6IHByZXZQb2ludC54ICsgZGlmZi54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MiA/IHByZXZQb2ludC55IC0gZGlmZi55IDogcHJldlBvaW50LnkgKyBkaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhzeCAtIHN4Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHN5IC0gc3kyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdjdWJpYycsIHgxOiBzeDEsIHkxOiBzeTEsIHgyOiBzeDIsIHkyOiBzeTIgfSwgeDogc3gsIHk6IHN5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdxdWFkcmF0aWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgdmFyIHR4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB0eSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciB0eDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdHkxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAncXVhZHJhdGljJykge1xuICAgICAgICAgICAgICB2YXIgX2RpZmYgPSB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDEpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkxKVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngxID8gcHJldlBvaW50LnggLSBfZGlmZi54IDogcHJldlBvaW50LnggKyBfZGlmZi54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MSA/IHByZXZQb2ludC55IC0gX2RpZmYueSA6IHByZXZQb2ludC55ICsgX2RpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAncXVhZHJhdGljJywgeDE6IHR4MSwgeTE6IHR5MSB9LCB4OiB0eCwgeTogdHkgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKF9wcmV2UG9pbnQueCAhPT0gbW92ZVRvLnggfHwgX3ByZXZQb2ludC55ICE9PSBtb3ZlVG8ueSkge1xuICAgICAgICBwb2ludHMucHVzaCh7IHg6IG1vdmVUby54LCB5OiBtb3ZlVG8ueSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5Z29uID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlnb24oX3JlZjYpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY2LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogdHJ1ZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlsaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKF9yZWY3KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNy5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IGZhbHNlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9pbnRzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvaW50cyhfcmVmOCkge1xuICB2YXIgY2xvc2VkID0gX3JlZjguY2xvc2VkLFxuICAgICAgcG9pbnRzID0gX3JlZjgucG9pbnRzO1xuXG4gIHZhciBudW1iZXJzID0gcG9pbnRzLnNwbGl0KC9bXFxzLF0rLykubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobik7XG4gIH0pO1xuXG4gIHZhciBwID0gbnVtYmVycy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcG9pbnQsIGkpIHtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIGFyci5wdXNoKHsgeDogcG9pbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyclsoaSAtIDEpIC8gMl0ueSA9IHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH0sIFtdKTtcblxuICBpZiAoY2xvc2VkKSB7XG4gICAgcC5wdXNoKF9leHRlbmRzKHt9LCBwWzBdKSk7XG4gIH1cblxuICBwWzBdLm1vdmVUbyA9IHRydWU7XG5cbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdChfcmVmOSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjkuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmOS5yeCxcbiAgICAgIHJ5ID0gX3JlZjkucnksXG4gICAgICB3aWR0aCA9IF9yZWY5LndpZHRoLFxuICAgICAgeCA9IF9yZWY5LngsXG4gICAgICB5ID0gX3JlZjkueTtcblxuICBpZiAocnggfHwgcnkpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcng6IHJ4IHx8IHJ5LFxuICAgICAgcnk6IHJ5IHx8IHJ4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQmFzaWNSZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdChfcmVmMTApIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMC5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aCxcbiAgICAgIHggPSBfcmVmMTAueCxcbiAgICAgIHkgPSBfcmVmMTAueTtcblxuICByZXR1cm4gW3sgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKF9yZWYxMSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjExLmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjExLnJ4LFxuICAgICAgcnkgPSBfcmVmMTEucnksXG4gICAgICB3aWR0aCA9IF9yZWYxMS53aWR0aCxcbiAgICAgIHggPSBfcmVmMTEueCxcbiAgICAgIHkgPSBfcmVmMTEueTtcblxuICB2YXIgY3VydmUgPSB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH07XG5cbiAgcmV0dXJuIFt7IHg6IHggKyByeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IC0gcnkgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSArIGhlaWdodCwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHJ4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCAtIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4LCB5OiB5ICsgcnkgfSwgeyB4OiB4ICsgcngsIHk6IHksIGN1cnZlOiBjdXJ2ZSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21HKF9yZWYxMikge1xuICB2YXIgc2hhcGVzID0gX3JlZjEyLnNoYXBlcztcbiAgcmV0dXJuIHNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdG9Qb2ludHMocyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Qb2ludHM7IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZ2V0RXJyb3JzID0gZnVuY3Rpb24gZ2V0RXJyb3JzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHNoYXBlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHJ1bGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBtYXRjaCA9IF9yZWYubWF0Y2gsXG4gICAgICAgIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICAgIHJlcXVpcmVkID0gX3JlZi5yZXF1aXJlZCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuICAgIGlmICh0eXBlb2Ygc2hhcGVbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBpcyByZXF1aXJlZCcgKyAocHJvcCA9PT0gJ3R5cGUnID8gJycgOiAnIG9uIGEgJyArIHNoYXBlLnR5cGUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZVtwcm9wXSkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlIGFycmF5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2Yoc2hhcGVbcHJvcF0pICE9PSB0eXBlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSB2YWxpZC10eXBlb2ZcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSB7XG4gICAgICAgIGlmIChtYXRjaC5pbmRleE9mKHNoYXBlW3Byb3BdKSA9PT0gLTEpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb25lIG9mICcgKyBtYXRjaC5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHNoYXBlLnR5cGUgPT09ICdnJyAmJiBBcnJheS5pc0FycmF5KHNoYXBlLnNoYXBlcykpIHtcbiAgICB2YXIgY2hpbGRFcnJvcnMgPSBzaGFwZS5zaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZ2V0RXJyb3JzKHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoZXJyb3JzLCBjaGlsZEVycm9ycyk7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gW3tcbiAgICBtYXRjaDogWydjaXJjbGUnLCAnZWxsaXBzZScsICdsaW5lJywgJ3BhdGgnLCAncG9seWdvbicsICdwb2x5bGluZScsICdyZWN0JywgJ2cnXSxcbiAgICBwcm9wOiAndHlwZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfV07XG5cbiAgc3dpdGNoIChzaGFwZS50eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2QnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncG9pbnRzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnaGVpZ2h0JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd3aWR0aCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZyc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3NoYXBlcycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnYXJyYXknIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG52YXIgdmFsaWQgPSBmdW5jdGlvbiB2YWxpZChzaGFwZSkge1xuICB2YXIgZXJyb3JzID0gZ2V0RXJyb3JzKHNoYXBlKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yczogZXJyb3JzLFxuICAgIHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZDsiLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=