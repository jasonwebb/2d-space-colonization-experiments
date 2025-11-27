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
/******/ 	return __webpack_require__(__webpack_require__.s = "./experiments/from-images/js/entry.js");
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

/***/ "./experiments/from-images/js/AttractorPatterns.js":
/*!*********************************************************!*\
  !*** ./experiments/from-images/js/AttractorPatterns.js ***!
  \*********************************************************/
/*! exports provided: GreekStatue, calculateExtents, GreekStatueExtents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreekStatue", function() { return GreekStatue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateExtents", function() { return calculateExtents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreekStatueExtents", function() { return GreekStatueExtents; });
let GreekStatue = [
  [1711.2101, 282.9964],
  [1710.8201, 278.34827],
  [1710.6338, 287.27792],
  [1704.0591, 285.25446],
  [1701.9685, 291.11353],
  [1698.2053, 286.58398],
  [1693.3516, 288.515],
  [1691.0735, 281.97473],
  [1689.0995, 286.3222],
  [1688.0668, 291.02066],
  [1687.3195, 295.1405],
  [1684.2487, 297.34326],
  [1692.6685, 295.73315],
  [1690.0295, 299.27576],
  [1687.6543, 302.14526],
  [1683.9088, 301.9613],
  [1686.6855, 306.92706],
  [1683.3627, 309.56482],
  [1679.8063, 309.97958],
  [1685.6492, 313.02634],
  [1691.575, 311.9053],
  [1696.0077, 309.57828],
  [1691.5415, 304.96252],
  [1694.4442, 301.1292],
  [1698.0282, 299.0625],
  [1703.0172, 300.4621],
  [1699.8446, 295.05206],
  [1696.2711, 293.3952],
  [1703.3447, 296.63123],
  [1706.0098, 294.04358],
  [1707.9266, 298.51184],
  [1710.4573, 294.29175],
  [1707.3599, 290.30878],
  [1713.3606, 290.63803],
  [1715.3201, 294.3888],
  [1713.1378, 298.10782],
  [1719.6877, 295.42838],
  [1718.7996, 299.94962],
  [1715.6512, 303.5962],
  [1719.4648, 309.4145],
  [1719.9368, 304.41507],
  [1724.7107, 304.3493],
  [1725.0135, 308.76926],
  [1724.0668, 299.41934],
  [1730.5042, 307.72086],
  [1742.3148, 308.17572],
  [1750.4362, 305.1741],
  [1751.684, 298.3783],
  [1759.2174, 302.07718],
  [1763.7966, 323.58914],
  [1755.8616, 325.1965],
  [1759.6647, 330.89154],
  [1751.6521, 330.5569],
  [1741.7144, 338.13507],
  [1740.7837, 353.28305],
  [1735.5951, 350.97778],
  [1745.0741, 332.3863],
  [1719.626, 325.11072],
  [1714.2761, 321.25247],
  [1713.3699, 316.0583],
  [1707.8616, 314.79205],
  [1707.569, 319.51385],
  [1701.4896, 319.58533],
  [1697.053, 316.65466],
  [1695.8458, 321.89395],
  [1697.1989, 326.89746],
  [1694.3403, 330.30573],
  [1690.3416, 329.40073],
  [1690.0903, 324.4547],
  [1693.4443, 326.33026],
  [1700.0685, 324.1235],
  [1704.6575, 324.1169],
  [1701.4281, 328.766],
  [1705.7545, 328.73157],
  [1709.609, 332.64612],
  [1704.8928, 333.0523],
  [1700.7388, 333.50616],
  [1697.9817, 330.94296],
  [1696.0874, 334.52185],
  [1696.0642, 338.25293],
  [1692.1487, 333.45398],
  [1688.7788, 335.1844],
  [1687.0171, 332.14972],
  [1686.4435, 328.58032],
  [1685.0159, 325.26645],
  [1678.6918, 313.92813],
  [1672.823, 316.80475],
  [1669.0303, 314.98865],
  [1673.8257, 313.20178],
  [1676.7051, 318.01917],
  [1680.4172, 324.07437],
  [1681.9381, 329.44745],
  [1677.4216, 328.2577],
  [1671.7281, 329.18903],
  [1670.7579, 333.72504],
  [1675.5914, 332.56757],
  [1679.7599, 333.83154],
  [1683.783, 334.1017],
  [1682.0989, 338.4875],
  [1686.5144, 338.54596],
  [1689.6309, 342.44516],
  [1691.5305, 337.83548],
  [1693.5392, 341.2277],
  [1696.9022, 343.32513],
  [1697.5883, 348.20874],
  [1703.4446, 347.61377],
  [1702.4734, 342.19623],
  [1699.7089, 337.81946],
  [1703.6902, 337.2624],
  [1707.9371, 337.90802],
  [1713.352, 337.5188],
  [1726.9623, 339.42365],
  [1732.4592, 344.27124],
  [1718.6187, 358.17184],
  [1716.5731, 365.48438],
  [1712.073, 364.56808],
  [1716.021, 370.27673],
  [1720.8756, 367.38425],
  [1721.0892, 362.3713],
  [1721.804, 356.00095],
  [1724.751, 352.75656],
  [1728.9258, 349.81625],
  [1724.1775, 346.0114],
  [1718.4673, 346.06198],
  [1719.5151, 351.26245],
  [1714.0348, 350.36105],
  [1709.2627, 349.18286],
  [1715.2197, 355.31927],
  [1715.2256, 360.518],
  [1711.1248, 359.57355],
  [1709.7388, 354.50116],
  [1705.2034, 352.3423],
  [1703.5392, 356.338],
  [1706.8197, 359.107],
  [1706.4053, 363.2469],
  [1701.4241, 360.82275],
  [1700.0382, 353.52646],
  [1693.7695, 352.55634],
  [1680.937, 347.67355],
  [1684.79, 343.31284],
  [1672.2737, 348.32175],
  [1671.1161, 343.32907],
  [1667.6304, 345.91498],
  [1676.4413, 346.48047],
  [1679.8909, 342.51788],
  [1675.0963, 341.46942],
  [1677.574, 337.6092],
  [1673.652, 336.68896],
  [1670.19, 338.81378],
  [1666.3506, 340.75888],
  [1665.9215, 336.18185],
  [1666.9308, 332.18518],
  [1667.09, 328.34027],
  [1669.6263, 324.72958],
  [1674.0319, 324.95032],
  [1673.0498, 321.02527],
  [1669.3109, 319.62952],
  [1666.4441, 321.99896],
  [1664.5902, 325.09244],
  [1662.4663, 328.33212],
  [1662.3909, 331.92844],
  [1661.0995, 335.40726],
  [1657.3083, 337.7843],
  [1661.8381, 339.3334],
  [1663.4467, 343.82666],
  [1659.075, 342.85446],
  [1660.5564, 347.614],
  [1664.6819, 348.88412],
  [1676.1824, 352.2442],
  [1689.6218, 356.76022],
  [1697.117, 357.6335],
  [1695.9487, 362.41302],
  [1699.8854, 365.78586],
  [1696.6008, 370.29132],
  [1700.7291, 371.44162],
  [1703.7598, 374.43515],
  [1707.2148, 372.01758],
  [1703.974, 367.90332],
  [1708.4084, 367.71948],
  [1712.0461, 369.22998],
  [1712.1792, 373.53918],
  [1710.7607, 385.5008],
  [1715.7904, 382.39975],
  [1734.1299, 381.32745],
  [1726.0516, 364.90866],
  [1726.8545, 359.88535],
  [1730.6718, 356.2614],
  [1748.565, 368.8098],
  [1744.2981, 373.26514],
  [1737.2853, 375.31943],
  [1723.8739, 376.91354],
  [1738.574, 384.9194],
  [1750.0574, 392.95215],
  [1745.3638, 394.8767],
  [1745.8127, 399.55402],
  [1741.5753, 396.63046],
  [1742.5215, 401.91418],
  [1741.1115, 406.0692],
  [1738.0764, 402.5246],
  [1736.7935, 407.61728],
  [1733.6908, 411.2988],
  [1734.7494, 416.02353],
  [1738.7059, 413.93262],
  [1740.0315, 410.44385],
  [1744.0525, 409.84735],
  [1745.5518, 406.2718],
  [1747.3989, 403.0699],
  [1751.1091, 401.21002],
  [1755.4674, 399.60553],
  [1748.9208, 397.44684],
  [1752.5695, 396.78662],
  [1755.6584, 394.76587],
  [1754.1726, 390.9276],
  [1758.7368, 391.1821],
  [1762.4498, 392.89508],
  [1766.8127, 390.34906],
  [1770.8943, 387.1189],
  [1770.5162, 383.12286],
  [1775.8612, 383.3869],
  [1775.3258, 387.66846],
  [1778.9783, 390.5078],
  [1782.8792, 389.27448],
  [1786.9512, 388.53302],
  [1791.9348, 388.30817],
  [1793.6262, 383.74573],
  [1793.6919, 394.3637],
  [1790.0181, 392.70135],
  [1785.3792, 393.7647],
  [1780.7534, 394.8408],
  [1776.341, 395.02936],
  [1774.9309, 391.7817],
  [1771.1433, 391.5608],
  [1769.2312, 395.33917],
  [1765.6274, 394.9748],
  [1772.6241, 396.97205],
  [1771.3077, 400.97638],
  [1771.8367, 405.362],
  [1775.4818, 402.85324],
  [1776.5936, 398.9516],
  [1780.4604, 399.86484],
  [1784.4343, 398.44855],
  [1788.6299, 397.88666],
  [1792.6665, 398.5733],
  [1796.8037, 401.04047],
  [1797.2532, 397.18634],
  [1800.6187, 395.3318],
  [1802.0577, 391.50055],
  [1805.7937, 396.2126],
  [1802.1691, 400.0383],
  [1803.1887, 405.00897],
  [1807.1532, 406.89203],
  [1810.9343, 408.56628],
  [1814.2051, 411.6078],
  [1818.7483, 411.04797],
  [1824.5128, 408.5526],
  [1829.9777, 407.83163],
  [1834.7787, 405.365],
  [1840.2466, 411.85144],
  [1835.7029, 410.167],
  [1835.2166, 415.95163],
  [1839.9637, 417.49936],
  [1844.2494, 415.51],
  [1847.5947, 419.11057],
  [1849.6294, 424.3292],
  [1844.793, 423.18115],
  [1840.817, 422.5609],
  [1841.123, 427.55295],
  [1845.7742, 429.41284],
  [1851.5831, 428.62848],
  [1854.5692, 432.84796],
  [1848.765, 434.00262],
  [1843.9747, 435.89008],
  [1847.2935, 440.414],
  [1852.3778, 438.04892],
  [1853.6904, 443.23242],
  [1848.5757, 446.44003],
  [1842.7151, 449.6378],
  [1838.7659, 454.53488],
  [1834.2373, 470.69922],
  [1828.7588, 475.3575],
  [1829.4061, 465.73102],
  [1841.5076, 466.84357],
  [1836.2542, 462.52182],
  [1831.5156, 457.54883],
  [1824.5935, 460.9239],
  [1819.3301, 456.97705],
  [1813.9501, 453.09033],
  [1814.677, 445.90204],
  [1820.5815, 448.16452],
  [1825.7302, 452.67383],
  [1828.5281, 446.00473],
  [1832.7239, 450.65964],
  [1836.9131, 446.3597],
  [1834.8162, 441.20123],
  [1829.8503, 440.37082],
  [1824.2074, 441.61542],
  [1819.1805, 440.84042],
  [1814.11, 439.2636],
  [1809.5344, 442.66882],
  [1808.4926, 448.5466],
  [1813.177, 461.37122],
  [1823.9056, 470.5287],
  [1818.6111, 466.7704],
  [1812.5208, 470.05542],
  [1806.0718, 466.55957],
  [1805.725, 460.37463],
  [1807.4792, 454.91296],
  [1801.9089, 451.4067],
  [1799.4753, 457.30917],
  [1799.4104, 464.2719],
  [1793.4249, 466.9083],
  [1787.8542, 464.61874],
  [1793.2595, 459.6323],
  [1794.2802, 452.59796],
  [1788.8892, 454.40277],
  [1786.4174, 459.34106],
  [1788.4102, 449.0377],
  [1792.2393, 444.37726],
  [1800.0999, 438.05133],
  [1804.0323, 434.59692],
  [1808.163, 431.36237],
  [1807.6829, 423.4819],
  [1805.4729, 426.9493],
  [1802.6366, 429.66672],
  [1799.3005, 432.47504],
  [1795.4484, 433.12485],
  [1790.7892, 434.0417],
  [1787.5375, 430.8484],
  [1782.9305, 428.57944],
  [1785.7482, 422.7899],
  [1789.2001, 425.9405],
  [1793.8158, 428.57797],
  [1793.989, 423.615],
  [1790.4053, 420.34113],
  [1794.9047, 418.30197],
  [1795.1134, 414.15643],
  [1790.7584, 408.77515],
  [1786.3342, 406.93317],
  [1782.3162, 408.25916],
  [1779.1074, 410.9997],
  [1783.6001, 413.33234],
  [1787.1196, 411.37152],
  [1790.5261, 414.6535],
  [1786.6035, 417.27417],
  [1782.3446, 419.10748],
  [1779.9023, 415.61215],
  [1776.0635, 413.97827],
  [1773.0248, 416.8711],
  [1772.1562, 421.00766],
  [1777.094, 419.98907],
  [1780.8708, 423.72498],
  [1776.7588, 425.9455],
  [1783.8816, 434.84235],
  [1778.572, 437.01193],
  [1778.2859, 431.13815],
  [1772.1578, 430.2328],
  [1772.1871, 425.764],
  [1768.2421, 423.9311],
  [1766.7153, 419.62982],
  [1768.6675, 415.8131],
  [1765.9883, 412.6197],
  [1761.472, 411.769],
  [1757.2316, 410.90417],
  [1756.7777, 407.03317],
  [1754.3337, 403.88275],
  [1750.2974, 405.97812],
  [1752.8479, 408.92444],
  [1753.1802, 412.89838],
  [1750.571, 420.19125],
  [1752.3301, 424.27304],
  [1746.938, 423.88403],
  [1746.1132, 418.91013],
  [1748.9327, 414.99066],
  [1748.4315, 410.3587],
  [1744.4858, 413.84454],
  [1741.9994, 417.08887],
  [1738.2546, 419.29538],
  [1742.0631, 421.8613],
  [1741.4424, 426.00717],
  [1745.1434, 428.22507],
  [1749.1549, 429.42603],
  [1753.3113, 429.30942],
  [1756.6077, 426.95032],
  [1758.1732, 423.38086],
  [1756.3054, 419.7872],
  [1753.1945, 416.9239],
  [1758.0352, 415.45395],
  [1762.8682, 416.30792],
  [1761.6147, 420.46088],
  [1763.7727, 424.51938],
  [1761.1661, 428.119],
  [1766.7273, 428.9128],
  [1767.9894, 434.00204],
  [1774.2701, 434.61633],
  [1770.8115, 437.82785],
  [1773.1279, 441.54865],
  [1771.896, 446.27243],
  [1771.835, 451.37537],
  [1766.3042, 452.50775],
  [1771.4012, 456.19333],
  [1770.0791, 460.785],
  [1768.3398, 464.99435],
  [1768.0518, 470.05652],
  [1770.9393, 473.86957],
  [1777.0017, 476.51498],
  [1778.27, 471.0638],
  [1773.9514, 466.7553],
  [1775.7474, 460.63324],
  [1780.7719, 458.65427],
  [1783.1339, 453.2431],
  [1781.9651, 447.56604],
  [1776.7712, 448.52124],
  [1777.0935, 454.13336],
  [1777.845, 442.8432],
  [1782.9457, 440.64783],
  [1786.5459, 444.04245],
  [1788.8262, 438.95358],
  [1794.5181, 438.34653],
  [1797.8213, 442.67575],
  [1797.0348, 447.96606],
  [1803.1002, 445.21228],
  [1804.8508, 440.09564],
  [1808.8333, 436.85156],
  [1812.7253, 433.97974],
  [1814.4941, 429.6827],
  [1810.9166, 427.11932],
  [1812.0078, 422.20856],
  [1815.8368, 424.06906],
  [1819.3053, 421.9826],
  [1820.4973, 417.22028],
  [1816.0677, 416.60434],
  [1812.0549, 417.86267],
  [1809.4751, 413.6485],
  [1804.8247, 410.92072],
  [1804.5752, 415.75067],
  [1807.2731, 419.035],
  [1802.9633, 422.29633],
  [1798.9495, 426.51416],
  [1798.2084, 421.7292],
  [1800.2136, 417.64865],
  [1800.0779, 413.15045],
  [1800.3589, 408.581],
  [1798.8114, 404.37408],
  [1795.9521, 409.942],
  [1794.4683, 406.19504],
  [1792.4395, 402.89886],
  [1788.5425, 403.08813],
  [1784.0521, 403.06125],
  [1779.9094, 404.1147],
  [1777.2756, 406.95285],
  [1774.2188, 409.17963],
  [1771.7136, 412.46698],
  [1769.2037, 409.04755],
  [1764.9442, 408.16513],
  [1761.1493, 407.0855],
  [1763.3617, 402.82956],
  [1767.446, 404.41565],
  [1767.1313, 399.7285],
  [1762.9885, 398.11652],
  [1758.8412, 403.48596],
  [1759.4303, 399.86493],
  [1759.21, 395.87854],
  [1757.1813, 386.71454],
  [1762.4705, 388.2585],
  [1766.1803, 385.2397],
  [1760.8142, 383.6128],
  [1764.3591, 375.00034],
  [1763.3379, 380.2314],
  [1768.4374, 375.0035],
  [1772.2349, 376.71112],
  [1767.5862, 369.18784],
  [1771.5475, 371.7682],
  [1773.3098, 367.0255],
  [1775.5049, 372.8996],
  [1783.731, 370.09723],
  [1784.0818, 375.24792],
  [1780.6853, 380.16806],
  [1784.0859, 383.21002],
  [1788.5255, 383.55328],
  [1779.8561, 385.42865],
  [1767.8469, 379.82224],
  [1773.5498, 380.29816],
  [1777.1869, 377.7583],
  [1779.9038, 373.86777],
  [1778.6735, 368.58954],
  [1789.0769, 370.08746],
  [1793.4722, 373.35727],
  [1787.0398, 377.78735],
  [1791.2908, 378.73752],
  [1796.2197, 379.1975],
  [1799.7512, 382.94537],
  [1797.4889, 387.2536],
  [1796.7532, 391.4449],
  [1803.2091, 386.947],
  [1804.6648, 381.50336],
  [1809.0347, 386.56946],
  [1815.2297, 389.36084],
  [1819.7572, 394.35828],
  [1821.6787, 399.92535],
  [1825.9663, 397.01068],
  [1830.5547, 401.5418],
  [1825.9368, 403.51633],
  [1816.8403, 401.08838],
  [1814.8646, 396.70142],
  [1811.4463, 393.02536],
  [1806.9962, 391.2223],
  [1810.2102, 398.38422],
  [1806.8907, 401.91534],
  [1811.9487, 403.3471],
  [1816.0692, 406.33502],
  [1820.801, 405.653],
  [1822.5151, 413.0559],
  [1823.8511, 421.6892],
  [1825.4392, 417.04758],
  [1827.1763, 412.487],
  [1831.4568, 413.2475],
  [1830.0154, 417.62927],
  [1828.4502, 421.64166],
  [1833.0559, 421.2452],
  [1836.9569, 420.74878],
  [1836.5354, 425.5017],
  [1830.7308, 425.4354],
  [1826.5286, 425.9712],
  [1822.3263, 427.16086],
  [1818.8624, 429.00726],
  [1817.7407, 434.62643],
  [1822.5078, 434.69064],
  [1827.4109, 435.91632],
  [1825.8889, 430.73438],
  [1830.5043, 431.33032],
  [1833.1301, 435.41306],
  [1833.1519, 428.1108],
  [1836.3845, 430.99274],
  [1840.8743, 432.33453],
  [1838.0463, 436.29688],
  [1840.6215, 440.45953],
  [1843.0967, 444.4278],
  [1847.0789, 453.71933],
  [1852.9429, 456.4908],
  [1853.721, 449.88913],
  [1859.281, 445.2817],
  [1860.166, 451.71155],
  [1860.8887, 458.0969],
  [1844.1609, 460.0255],
  [1848.2534, 466.44028],
  [1869.6958, 502.02023],
  [1828.476, 526.61426],
  [1813.1633, 513.62787],
  [1809.8391, 508.41528],
  [1814.4988, 492.71164],
  [1820.7579, 492.31808],
  [1825.2073, 481.16766],
  [1819.2646, 476.65656],
  [1814.765, 484.64304],
  [1820.7775, 485.61163],
  [1809.25, 489.85434],
  [1807.884, 483.28418],
  [1802.8032, 479.1656],
  [1805.4242, 473.14355],
  [1798.5963, 471.9265],
  [1795.7339, 478.3244],
  [1791.1692, 473.5553],
  [1785.0657, 470.2159],
  [1780.9214, 464.84747],
  [1784.3707, 477.11627],
  [1778.8453, 482.0999],
  [1784.0203, 484.91107],
  [1789.8838, 481.7713],
  [1793.1885, 487.68283],
  [1797.8331, 484.11078],
  [1802.795, 487.6148],
  [1797.8523, 491.916],
  [1800.0829, 497.50522],
  [1795.4905, 498.6461],
  [1792.0161, 494.68637],
  [1789.0491, 500.70642],
  [1793.3407, 503.63086],
  [1788.6152, 507.68958],
  [1798.778, 504.03033],
  [1808.5868, 503.34628],
  [1804.8331, 494.0752],
  [1803.922, 500.53915],
  [1815.4485, 506.11536],
  [1820.8723, 513.579],
  [1817.0809, 519.4033],
  [1822.0038, 524.76044],
  [1805.8826, 530.3884],
  [1806.8828, 518.41595],
  [1805.6531, 512.61926],
  [1801.5234, 524.60596],
  [1794.9285, 529.07874],
  [1788.5967, 524.32733],
  [1794.8396, 521.45215],
  [1784.5621, 512.26953],
  [1788.2704, 517.6198],
  [1793.287, 514.22375],
  [1794.812, 508.8955],
  [1799.8938, 510.93112],
  [1803.5798, 506.54657],
  [1800.0652, 517.1808],
  [1809.3452, 523.6112],
  [1812.7172, 533.4686],
  [1827.6572, 533.466],
  [1835.4081, 531.5513],
  [1866.4648, 561.99493],
  [1873.8958, 574.3154],
  [1876.7755, 565.23425],
  [1881.5923, 563.72815],
  [1883.8911, 558.12506],
  [1886.4934, 564.7753],
  [1891.8369, 563.4583],
  [1897.288, 555.29834],
  [1889.8765, 541.58057],
  [1883.6965, 536.9375],
  [1880.9628, 543.2547],
  [1874.0199, 541.9281],
  [1873.1842, 554.91406],
  [1877.6782, 552.97424],
  [1882.3829, 552.4268],
  [1886.2122, 548.81995],
  [1891.5477, 550.21625],
  [1889.8842, 557.111],
  [1877.884, 559.2121],
  [1867.4124, 556.4487],
  [1871.9734, 564.60675],
  [1873.3269, 569.7383],
  [1872.1823, 559.87506],
  [1867.4878, 567.5786],
  [1867.6111, 572.949],
  [1862.6615, 570.5676],
  [1861.114, 565.02203],
  [1851.7859, 569.74646],
  [1857.1353, 570.9777],
  [1859.8093, 575.61334],
  [1854.5123, 577.4653],
  [1849.4509, 575.16516],
  [1844.8055, 578.3444],
  [1850.0089, 581.40643],
  [1852.76, 586.1908],
  [1855.7612, 583.43396],
  [1860.6118, 585.04584],
  [1859.9513, 580.572],
  [1864.5496, 577.6095],
  [1870.202, 576.9442],
  [1868.8103, 581.06116],
  [1865.4219, 583.8126],
  [1869.6307, 587.1483],
  [1872.9958, 584.0078],
  [1876.1556, 588.74414],
  [1880.5266, 586.4327],
  [1882.4679, 591.4387],
  [1875.8185, 594.6389],
  [1871.721, 591.7342],
  [1868.7338, 597.41626],
  [1862.7104, 594.5693],
  [1866.9639, 591.9794],
  [1863.89, 588.69714],
  [1859.237, 589.6787],
  [1855.6301, 590.2083],
  [1852.16, 591.11896],
  [1849.2527, 587.54034],
  [1846.3247, 585.66077],
  [1843.4221, 583.4446],
  [1839.3506, 581.2999],
  [1837.2053, 585.7191],
  [1841.4392, 588.38306],
  [1837.6614, 590.8755],
  [1832.6672, 588.6987],
  [1829.9089, 593.4398],
  [1825.4924, 595.8527],
  [1830.0442, 598.98926],
  [1826.2805, 601.3577],
  [1821.5023, 600.1927],
  [1816.1707, 600.7979],
  [1811.5176, 601.4984],
  [1810.2849, 604.83276],
  [1807.6909, 606.33154],
  [1807.1235, 610.1315],
  [1804.0396, 607.85236],
  [1802.6821, 611.1555],
  [1798.5763, 611.6444],
  [1799.748, 607.52325],
  [1794.6804, 609.4779],
  [1794.4926, 613.7949],
  [1790.3411, 613.8307],
  [1790.0217, 619.2216],
  [1786.157, 617.35657],
  [1783.2651, 621.65735],
  [1778.4736, 623.8976],
  [1781.0684, 627.70746],
  [1779.7333, 632.7956],
  [1784.7461, 631.5907],
  [1785.3022, 626.6753],
  [1788.134, 623.5349],
  [1792.3778, 624.599],
  [1794.9163, 628.84375],
  [1789.5637, 629.91815],
  [1793.3112, 633.3733],
  [1790.196, 636.4901],
  [1785.8141, 636.10034],
  [1781.4171, 636.99524],
  [1777.8716, 639.489],
  [1775.838, 636.1161],
  [1773.7014, 632.3362],
  [1776.7449, 629.2373],
  [1773.3884, 626.44507],
  [1768.4587, 627.55896],
  [1769.3684, 631.8558],
  [1770.8372, 636.58997],
  [1763.2202, 638.76807],
  [1758.7983, 638.60815],
  [1759.6449, 643.5656],
  [1765.9812, 635.5161],
  [1764.0594, 630.68945],
  [1759.9844, 633.7794],
  [1754.133, 636.7821],
  [1754.7239, 641.70184],
  [1749.116, 642.4491],
  [1752.4207, 646.0271],
  [1756.1614, 647.50116],
  [1759.9736, 652.34753],
  [1768.8479, 650.4351],
  [1768.4962, 646.2489],
  [1774.2305, 649.86456],
  [1777.1064, 654.1618],
  [1780.4579, 657.7018],
  [1784.6421, 659.41534],
  [1788.7936, 655.8039],
  [1783.97, 653.62354],
  [1780.738, 650.2993],
  [1781.6641, 646.096],
  [1786.6559, 646.9273],
  [1789.4579, 650.8704],
  [1794.3602, 658.49274],
  [1799.9615, 659.6917],
  [1794.8389, 653.28766],
  [1794.6324, 663.9777],
  [1795.5989, 669.65375],
  [1801.4779, 667.52],
  [1803.9581, 673.13306],
  [1808.94, 668.67816],
  [1815.1906, 671.8208],
  [1856.7795, 703.0736],
  [1863.4436, 702.21967],
  [1861.7804, 694.99896],
  [1855.7559, 690.166],
  [1860.3611, 686.6843],
  [1870.3284, 684.2043],
  [1873.565, 680.0621],
  [1876.5889, 691.4206],
  [1872.0798, 688.645],
  [1865.7231, 688.8506],
  [1868.964, 693.239],
  [1868.5244, 699.0568],
  [1874.3899, 697.87964],
  [1876.5692, 685.17236],
  [1879.3108, 680.4949],
  [1881.6572, 686.84595],
  [1883.2239, 691.875],
  [1886.7089, 697.88513],
  [1879.9379, 695.6753],
  [1881.0222, 701.0917],
  [1876.2228, 704.72815],
  [1870.1478, 705.81445],
  [1867.854, 711.3041],
  [1868.3467, 716.8961],
  [1869.3328, 723.1875],
  [1867.155, 729.4684],
  [1871.2817, 734.4923],
  [1869.7632, 742.2152],
  [1876.191, 711.6176],
  [1874.4009, 718.07983],
  [1901.2314, 705.27704],
  [1909.4159, 708.23804],
  [1917.0686, 711.49677],
  [1907.218, 730.96094],
  [1952.5636, 737.89453],
  [1955.5139, 728.6083],
  [1963.6501, 726.875],
  [1960.0178, 721.1481],
  [1967.0481, 719.6223],
  [1967.6873, 713.69745],
  [1975.1091, 716.0294],
  [1979.7601, 706.0786],
  [1973.7306, 709.26294],
  [1991.7634, 698.9372],
  [1985.7429, 702.1426],
  [1963.9971, 661.50586],
  [1956.3843, 661.98505],
  [1952.3989, 656.74115],
  [1949.445, 663.26794],
  [1942.7273, 663.2687],
  [1953.9857, 651.348],
  [1948.3796, 650.25696],
  [1942.5442, 651.50745],
  [1945.886, 656.8146],
  [1939.861, 657.4558],
  [1934.9226, 658.6883],
  [1936.2072, 664.9988],
  [1930.3945, 667.46765],
  [1930.0564, 660.8663],
  [1924.5345, 660.8811],
  [1925.3325, 655.6175],
  [1927.0067, 650.6439],
  [1923.676, 647.13525],
  [1926.9504, 641.5993],
  [1926.1558, 635.2101],
  [1932.0823, 629.1832],
  [1934.4486, 623.5924],
  [1932.7782, 611.2181],
  [1931.5322, 617.09534],
  [1924.4617, 612.5884],
  [1921.9062, 602.6161],
  [1922.7783, 594.2555],
  [1929.5192, 598.94434],
  [1928.3418, 605.8721],
  [1936.8989, 604.7226],
  [1941.3762, 610.7402],
  [1949.4607, 610.0476],
  [1947.4281, 616.1734],
  [1944.8162, 621.6665],
  [1938.8947, 617.9259],
  [1940.5146, 625.6028],
  [1937.9053, 630.80237],
  [1942.9392, 633.729],
  [1947.7407, 636.1881],
  [1952.3214, 639.81],
  [1954.6318, 635.0697],
  [1951.6213, 630.4391],
  [1946.073, 628.5346],
  [1950.9641, 623.4968],
  [1955.2651, 618.5131],
  [1959.0054, 613.79535],
  [1966.2737, 619.01843],
  [1962.2705, 623.8324],
  [1956.8672, 626.0012],
  [1959.4482, 631.997],
  [1969.9512, 626.922],
  [1965.4662, 631.0908],
  [1967.7347, 642.463],
  [1963.6387, 637.4514],
  [1958.2092, 640.0569],
  [1952.3505, 645.28955],
  [1957.3555, 646.16943],
  [1962.4775, 644.9297],
  [1965.8456, 650.0716],
  [1969.3193, 654.8673],
  [1969.2871, 663.5576],
  [1961.369, 656.24475],
  [1959.5242, 651.49255],
  [1947.6405, 642.47296],
  [1943.7151, 645.69073],
  [1941.6736, 640.1428],
  [1937.3961, 636.7319],
  [1931.7915, 635.26935],
  [1933.4868, 641.1455],
  [1937.7147, 645.52966],
  [1931.4734, 653.9391],
  [1936.689, 651.5956],
  [1931.2802, 646.9259],
  [1920.4675, 642.3419],
  [1917.2148, 647.65076],
  [1912.345, 648.2678],
  [1919.9058, 652.3406],
  [1919.2107, 657.5933],
  [1913.4983, 654.621],
  [1907.0785, 656.4595],
  [1910.6018, 660.5204],
  [1915.0259, 661.4787],
  [1919.3141, 663.93506],
  [1924.3661, 666.363],
  [1917.4689, 669.80005],
  [1912.0056, 667.2146],
  [1906.5564, 668.7932],
  [1897.7101, 683.1657],
  [1899.2065, 690.08984],
  [1903.321, 686.0895],
  [1888.08, 691.14984],
  [1892.793, 691.0526],
  [1893.2856, 686.38],
  [1891.7897, 681.39703],
  [1887.3684, 685.6879],
  [1884.0422, 681.56866],
  [1887.8408, 678.3384],
  [1896.0348, 667.83765],
  [1890.6179, 666.8037],
  [1888.81, 672.62006],
  [1882.9269, 675.47107],
  [1878.3269, 669.1096],
  [1883.3726, 664.2194],
  [1888.8284, 661.71655],
  [1900.9342, 665.79407],
  [1906.0527, 662.87415],
  [1900.6726, 660.3011],
  [1901.2701, 655.8409],
  [1894.8789, 661.40497],
  [1880.1685, 616.57544],
  [1873.5509, 615.64],
  [1863.9298, 624.8446],
  [1869.5034, 620.59045],
  [1864.2495, 619.7571],
  [1861.112, 615.7866],
  [1868.1262, 615.39795],
  [1864.6167, 611.6013],
  [1869.8993, 609.16534],
  [1876.4895, 610.7844],
  [1883.1365, 610.58905],
  [1889.1658, 601.603],
  [1884.2192, 604.28467],
  [1888.8649, 588.30963],
  [1884.9907, 585.5671],
  [1888.0282, 581.3988],
  [1882.9388, 581.10986],
  [1877.8135, 583.008],
  [1874.405, 579.41907],
  [1878.8627, 578.08405],
  [1878.7076, 573.2582],
  [1880.2953, 569.05334],
  [1885.1407, 570.92334],
  [1888.3899, 575.65967],
  [1883.4578, 576.1278],
  [1892.6573, 579.2003],
  [1894.4048, 574.47],
  [1890.8137, 569.85736],
  [1896.9613, 569.2601],
  [1897.9698, 563.1469],
  [1902.5542, 571.125],
  [1899.5189, 576.48926],
  [1898.3601, 581.97314],
  [1893.1621, 584.8717],
  [1900.7175, 597.39],
  [1916.0859, 596.8882],
  [1895.946, 603.7927],
  [1889.1956, 607.87317],
  [1878.7728, 605.415],
  [1875.5199, 599.8434],
  [1872.4381, 604.084],
  [1866.9415, 602.38086],
  [1863.3234, 605.83984],
  [1859.2266, 609.9911],
  [1857.4232, 605.182],
  [1855.1426, 601.08484],
  [1861.1941, 600.17883],
  [1858.0425, 595.53735],
  [1854.1719, 595.6384],
  [1850.989, 598.5099],
  [1849.3784, 601.739],
  [1845.4875, 603.55164],
  [1842.0115, 598.4618],
  [1846.0481, 598.8823],
  [1846.479, 595.1376],
  [1850.2368, 594.6467],
  [1848.1938, 591.32666],
  [1844.8274, 590.3805],
  [1842.4849, 593.73444],
  [1838.7692, 595.4569],
  [1834.4949, 594.2479],
  [1834.3362, 598.4582],
  [1837.7716, 600.50684],
  [1841.29, 602.8756],
  [1842.9033, 607.547],
  [1847.6918, 609.25073],
  [1850.8173, 605.36725],
  [1853.2574, 609.2123],
  [1855.6736, 613.6486],
  [1850.3947, 614.66034],
  [1845.5645, 617.7239],
  [1845.3418, 613.2954],
  [1841.1865, 612.4286],
  [1836.4448, 614.4479],
  [1837.1947, 609.95685],
  [1833.234, 607.80176],
  [1837.856, 605.54395],
  [1833.2977, 603.056],
  [1824.3556, 605.9647],
  [1820.3511, 605.2991],
  [1817.137, 604.54346],
  [1813.7622, 605.0598],
  [1811.6162, 608.3667],
  [1810.8337, 611.44006],
  [1811.3959, 614.935],
  [1814.4818, 612.0137],
  [1816.2766, 608.6742],
  [1820.5541, 610.0662],
  [1829.0925, 605.87366],
  [1826.1814, 610.7517],
  [1831.1809, 612.26184],
  [1827.7775, 616.5403],
  [1835.7942, 623.927],
  [1830.9226, 627.336],
  [1829.814, 621.95483],
  [1833.3912, 618.1285],
  [1839.935, 618.7458],
  [1845.5573, 622.2556],
  [1850.3247, 620.74774],
  [1854.5457, 618.3694],
  [1858.7842, 619.8907],
  [1859.527, 623.6321],
  [1854.7188, 623.7787],
  [1850.6873, 626.1172],
  [1845.9661, 627.23584],
  [1841.2148, 624.433],
  [1839.3293, 629.141],
  [1834.5261, 631.12964],
  [1836.8531, 637.3654],
  [1831.9426, 641.0912],
  [1836.7698, 642.973],
  [1840.7731, 634.85126],
  [1844.705, 632.10657],
  [1849.6918, 631.89215],
  [1853.9287, 630.05273],
  [1858.3157, 627.93567],
  [1858.3877, 633.1784],
  [1854.0958, 636.19476],
  [1849.0703, 637.1682],
  [1845.143, 638.5542],
  [1841.8677, 641.5327],
  [1840.8201, 647.0194],
  [1835.8208, 648.41986],
  [1830.9863, 647.5477],
  [1826.4047, 643.5874],
  [1825.3142, 637.7395],
  [1830.8779, 635.4674],
  [1827.2205, 631.9561],
  [1825.3043, 627.0951],
  [1824.7292, 622.30853],
  [1822.9846, 618.30634],
  [1822.5862, 614.04004],
  [1817.6077, 613.84814],
  [1818.4689, 617.6642],
  [1819.6353, 622.0752],
  [1820.2202, 626.954],
  [1821.4708, 632.05615],
  [1818.5583, 636.76483],
  [1820.8572, 641.1525],
  [1821.9097, 646.4043],
  [1817.8971, 650.4648],
  [1815.8218, 644.46466],
  [1809.9031, 642.6449],
  [1804.1255, 644.3185],
  [1805.2908, 649.8428],
  [1797.8203, 643.4462],
  [1799.0686, 648.656],
  [1801.0663, 654.3574],
  [1806.4072, 655.9025],
  [1811.1306, 652.0794],
  [1810.6317, 647.2453],
  [1813.74, 639.21686],
  [1811.5286, 634.8225],
  [1801.3357, 638.9171],
  [1802.4333, 633.8779],
  [1806.9662, 638.7977],
  [1806.7212, 634.01953],
  [1809.4312, 630.4256],
  [1815.994, 633.2866],
  [1815.4078, 629.4696],
  [1815.7383, 625.0211],
  [1815.0612, 620.90247],
  [1814.075, 617.0249],
  [1811.1592, 623.5325],
  [1811.5789, 627.23926],
  [1810.886, 619.6793],
  [1807.7662, 617.3318],
  [1807.7983, 613.6542],
  [1804.4305, 614.5138],
  [1800.7113, 615.40027],
  [1797.1066, 616.6178],
  [1794.167, 619.5425],
  [1797.0258, 624.1056],
  [1799.5178, 620.33716],
  [1803.7178, 618.53656],
  [1807.2117, 621.45715],
  [1806.9647, 625.81854],
  [1804.4886, 629.38666],
  [1803.4819, 622.658],
  [1801.3794, 625.71326],
  [1799.4626, 629.58734],
  [1797.9282, 634.258],
  [1795.4761, 638.6172],
  [1791.8538, 642.30475],
  [1793.2094, 647.10016],
  [1787.406, 641.3626],
  [1783.0614, 641.57855],
  [1778.4932, 642.94],
  [1776.2842, 646.0719],
  [1772.0016, 644.9175],
  [1773.5303, 640.7219],
  [1768.5552, 640.69055],
  [1764.7874, 642.91284],
  [1764.2076, 647.0862],
  [1760.365, 648.33813],
  [1764.3499, 651.63416],
  [1766.2468, 655.6041],
  [1768.4358, 659.4785],
  [1768.7015, 664.02716],
  [1767.2305, 667.64496],
  [1764.4697, 664.7298],
  [1761.1704, 662.85114],
  [1757.0781, 662.5686],
  [1755.3158, 666.04065],
  [1751.1328, 666.6083],
  [1749.7216, 670.787],
  [1736.4221, 669.23584],
  [1742.2236, 665.1088],
  [1746.4563, 663.3827],
  [1742.7173, 658.5324],
  [1738.0026, 658.1113],
  [1740.145, 652.1331],
  [1745.753, 653.24963],
  [1751.1084, 655.99835],
  [1751.5742, 661.5403],
  [1747.4976, 658.5209],
  [1738.0123, 663.8133],
  [1733.1019, 662.7414],
  [1731.1719, 668.07385],
  [1726.9381, 670.8324],
  [1731.5862, 674.047],
  [1729.3906, 679.55334],
  [1724.6194, 676.1427],
  [1718.9258, 678.8096],
  [1723.4402, 682.9678],
  [1714.1885, 692.7502],
  [1710.2856, 706.32416],
  [1709.3424, 714.4428],
  [1746.2091, 704.7899],
  [1745.4507, 696.3857],
  [1746.6373, 689.9287],
  [1747.7781, 684.50183],
  [1748.6459, 675.4061],
  [1751.2488, 679.939],
  [1760.5254, 679.1129],
  [1756.6611, 679.96246],
  [1754.5908, 684.2506],
  [1751.8129, 694.5067],
  [1753.5767, 689.12683],
  [1760.6505, 685.3214],
  [1765.0054, 680.62354],
  [1769.4684, 685.8131],
  [1770.7908, 680.35223],
  [1767.8469, 675.22107],
  [1763.4332, 675.3314],
  [1759.0349, 674.3091],
  [1754.3687, 675.4024],
  [1755.4346, 670.5996],
  [1759.5422, 666.70087],
  [1761.5437, 670.0857],
  [1765.3572, 671.2529],
  [1770.0427, 670.9286],
  [1772.7999, 667.80286],
  [1777.5638, 667.2777],
  [1783.1145, 669.71893],
  [1785.5146, 674.4673],
  [1780.3076, 677.51086],
  [1776.1147, 680.76196],
  [1775.9502, 686.41547],
  [1778.4755, 692.3872],
  [1782.0964, 688.57855],
  [1781.5645, 683.86694],
  [1784.7556, 680.3792],
  [1789.697, 678.9719],
  [1791.519, 673.92755],
  [1789.4238, 668.8031],
  [1789.6384, 661.2656],
  [1785.7727, 664.8717],
  [1780.5873, 663.1551],
  [1775.6755, 663.5609],
  [1772.0306, 662.55634],
  [1776.5641, 659.48846],
  [1772.7147, 657.9603],
  [1771.2683, 654.11395],
  [1764.1013, 659.8594],
  [1759.2556, 659.0493],
  [1761.3533, 655.8959],
  [1754.8088, 659.01355],
  [1756.2821, 655.49194],
  [1755.651, 651.76697],
  [1751.2344, 651.49915],
  [1747.9928, 648.1726],
  [1743.5349, 646.8375],
  [1718.2505, 623.97253],
  [1712.9456, 614.03107],
  [1718.3704, 616.90845],
  [1724.16, 620.3009],
  [1724.281, 613.391],
  [1727.6456, 606.85583],
  [1731.3113, 610.59796],
  [1736.2812, 613.9662],
  [1739.7412, 608.02826],
  [1750.1753, 603.3074],
  [1756.2302, 603.40076],
  [1746.2217, 608.38477],
  [1743.687, 602.7776],
  [1735.2401, 605.0803],
  [1729.4501, 593.0339],
  [1726.3804, 587.99255],
  [1722.87, 592.22],
  [1725.127, 596.6857],
  [1719.7263, 600.86206],
  [1718.5917, 595.3323],
  [1717.2948, 589.0765],
  [1722.096, 587.52277],
  [1720.7941, 583.75507],
  [1719.2736, 579.5296],
  [1727.7501, 582.5321],
  [1724.7256, 578.66614],
  [1730.654, 576.6161],
  [1734.801, 571.94885],
  [1739.1377, 567.50574],
  [1734.1486, 564.18646],
  [1728.4857, 561.0522],
  [1730.6028, 553.73914],
  [1735.1823, 556.63855],
  [1739.1611, 560.02856],
  [1743.0814, 562.4632],
  [1746.298, 566.7057],
  [1748.9706, 561.73584],
  [1746.0127, 557.4733],
  [1742.6201, 554.24963],
  [1746.5955, 548.5444],
  [1749.6111, 552.7765],
  [1756.5457, 553.5226],
  [1752.536, 557.0918],
  [1765.0813, 561.65857],
  [1759.7263, 564.931],
  [1767.5916, 567.22205],
  [1767.8257, 576.1867],
  [1761.6716, 583.5095],
  [1763.2993, 589.1158],
  [1756.6595, 588.13586],
  [1758.8363, 594.6631],
  [1753.7628, 597.00275],
  [1748.2891, 585.2997],
  [1750.5596, 580.3254],
  [1743.5402, 571.6975],
  [1740.558, 575.631],
  [1736.6296, 578.7339],
  [1733.8765, 582.89075],
  [1731.1138, 587.29816],
  [1735.6371, 589.2667],
  [1740.5245, 588.7761],
  [1740.3639, 583.8543],
  [1744.137, 580.0287],
  [1748.201, 575.8135],
  [1755.9282, 581.4397],
  [1761.3954, 577.437],
  [1763.523, 571.3347],
  [1758.0764, 570.11847],
  [1754.9954, 574.80206],
  [1749.9062, 571.1665],
  [1752.9897, 567.1458],
  [1754.4445, 561.9818],
  [1759.5645, 558.5631],
  [1764.1162, 553.7693],
  [1769.9714, 555.9933],
  [1770.2849, 548.47284],
  [1763.9861, 545.7506],
  [1767.8665, 540.66125],
  [1765.0482, 533.35376],
  [1759.0381, 532.12317],
  [1753.0605, 531.0558],
  [1760.5485, 538.9618],
  [1759.4884, 548.9164],
  [1753.0619, 548.0409],
  [1756.5361, 543.1421],
  [1747.3529, 529.69946],
  [1741.4362, 529.4856],
  [1742.831, 523.4646],
  [1736.8413, 523.1339],
  [1730.4563, 524.2283],
  [1723.9149, 525.38477],
  [1723.9955, 531.77563],
  [1727.2952, 536.9802],
  [1730.66, 531.3346],
  [1735.6609, 528.6497],
  [1737.6556, 534.6109],
  [1733.4177, 538.4958],
  [1738.1536, 541.6463],
  [1729.1277, 542.59686],
  [1732.3965, 546.43085],
  [1735.9916, 549.17316],
  [1726.2959, 548.86487],
  [1723.088, 542.4859],
  [1719.3845, 536.9264],
  [1712.3105, 537.15027],
  [1715.855, 543.5141],
  [1720.0768, 548.766],
  [1717.9703, 554.73914],
  [1724.4158, 555.2956],
  [1721.4523, 560.9682],
  [1722.8307, 567.0239],
  [1729.0974, 568.0802],
  [1725.3672, 572.81915],
  [1719.9443, 574.9646],
  [1718.1787, 570.03656],
  [1714.3386, 575.6629],
  [1715.313, 582.4739],
  [1712.6343, 588.0297],
  [1713.408, 595.04913],
  [1707.2866, 598.1778],
  [1698.4175, 602.2844],
  [1700.6322, 596.3581],
  [1703.7345, 592.3311],
  [1709.0339, 592.0985],
  [1701.2101, 587.7352],
  [1697.188, 590.4569],
  [1695.3015, 595.2668],
  [1691.1417, 591.74744],
  [1686.866, 588.42267],
  [1688.3694, 583.8137],
  [1697.5266, 583.9072],
  [1692.9585, 586.9706],
  [1692.3896, 581.2934],
  [1690.5583, 575.2571],
  [1699.978, 570.95935],
  [1704.7257, 569.3489],
  [1696.3617, 573.4824],
  [1695.4238, 578.03467],
  [1700.0972, 578.9531],
  [1703.4532, 582.8423],
  [1706.41, 587.30066],
  [1709.6184, 583.73285],
  [1710.9434, 579.1074],
  [1706.1958, 578.7644],
  [1702.9486, 575.0425],
  [1708.4808, 573.4946],
  [1712.9111, 570.19507],
  [1709.2649, 565.9459],
  [1715.4453, 563.7466],
  [1712.7102, 557.0706],
  [1708.0725, 559.813],
  [1703.825, 563.1895],
  [1699.8127, 565.4189],
  [1695.8231, 561.2586],
  [1701.3533, 558.1087],
  [1699.8796, 552.56665],
  [1706.3718, 552.8706],
  [1712.3169, 549.76337],
  [1708.1523, 543.843],
  [1700.5105, 541.20856],
  [1702.3893, 547.1631],
  [1695.2637, 548.54944],
  [1685.6456, 549.2079],
  [1689.9043, 553.2275],
  [1695.0416, 555.7673],
  [1695.4685, 567.1763],
  [1691.635, 570.1678],
  [1686.3708, 578.72644],
  [1684.9924, 573.4256],
  [1686.3904, 568.54553],
  [1684.9382, 563.26],
  [1690.6919, 564.39166],
  [1689.2842, 559.0756],
  [1683.2478, 556.49615],
  [1685.0173, 541.23755],
  [1680.1307, 549.8426],
  [1676.28, 553.1158],
  [1670.1261, 551.46545],
  [1664.7427, 547.4534],
  [1666.4136, 541.2715],
  [1673.3398, 539.701],
  [1668.7079, 535.89294],
  [1663.2993, 534.3198],
  [1657.1564, 536.2864],
  [1652.669, 529.85425],
  [1658.2302, 529.87],
  [1663.4473, 527.64404],
  [1668.4736, 528.7861],
  [1672.9536, 525.20844],
  [1670.9454, 519.55444],
  [1666.0677, 522.04803],
  [1665.21, 515.25977],
  [1670.085, 514.036],
  [1676.6781, 519.7994],
  [1682.3118, 519.4232],
  [1679.3574, 524.44977],
  [1675.4419, 515.2655],
  [1678.5922, 511.55908],
  [1681.4956, 515.06665],
  [1687.0079, 515.20166],
  [1692.4042, 515.79974],
  [1701.575, 520.42615],
  [1708.7142, 520.8905],
  [1705.6385, 514.2183],
  [1712.8265, 514.15765],
  [1709.8672, 507.8303],
  [1703.7222, 508.05127],
  [1696.8301, 506.34518],
  [1696.8125, 510.73517],
  [1691.0874, 510.92688],
  [1691.9324, 506.1421],
  [1689.8114, 502.02936],
  [1688.1713, 497.28864],
  [1692.4807, 498.18002],
  [1691.7334, 493.81818],
  [1695.6051, 492.5383],
  [1699.8872, 491.57028],
  [1704.5403, 489.7706],
  [1706.0557, 485.229],
  [1708.7435, 482.18124],
  [1708.6028, 478.50348],
  [1704.6243, 479.7235],
  [1701.9395, 482.75385],
  [1700.9155, 486.74078],
  [1696.8026, 487.40088],
  [1692.97, 488.50433],
  [1689.5543, 489.65277],
  [1687.5022, 492.74472],
  [1684.355, 495.03473],
  [1681.787, 497.44666],
  [1684.9303, 500.08972],
  [1686.0409, 504.26474],
  [1687.2593, 508.37653],
  [1683.5323, 510.88507],
  [1682.0797, 507.0202],
  [1681.4966, 503.24896],
  [1679.0219, 500.98004],
  [1678.2468, 497.41815],
  [1676.2695, 494.57397],
  [1676.0552, 490.57074],
  [1672.486, 494.73907],
  [1668.1768, 496.3028],
  [1669.86, 491.88852],
  [1673.3411, 487.92978],
  [1669.3447, 487.6446],
  [1666.0334, 489.79025],
  [1666.69, 484.40253],
  [1671.0303, 483.6701],
  [1675.1177, 482.96005],
  [1677.7616, 485.96387],
  [1680.6057, 488.3814],
  [1683.2163, 484.51498],
  [1679.6277, 481.85458],
  [1684.2139, 480.29782],
  [1688.8375, 478.36154],
  [1691.7583, 475.5721],
  [1694.9617, 473.82727],
  [1696.2463, 470.6915],
  [1695.9934, 466.9193],
  [1690.5159, 471.61505],
  [1692.0104, 468.00555],
  [1687.2917, 468.48505],
  [1682.9626, 467.51132],
  [1684.8989, 471.6266],
  [1681.1216, 473.3329],
  [1687.5896, 474.80652],
  [1684.1604, 476.22278],
  [1680.3401, 477.61804],
  [1676.1768, 478.4632],
  [1672.2781, 479.2124],
  [1668.354, 479.64655],
  [1664.6198, 480.5067],
  [1662.4958, 483.42258],
  [1663.2169, 487.34247],
  [1661.8114, 491.4034],
  [1654.8782, 495.0449],
  [1656.648, 497.92767],
  [1655.605, 501.63416],
  [1652.2435, 502.2717],
  [1652.744, 498.7058],
  [1649.101, 500.52704],
  [1648.1873, 497.42047],
  [1650.8828, 495.74023],
  [1651.8784, 492.7219],
  [1648.9193, 490.54877],
  [1647.4651, 493.44232],
  [1644.6216, 495.581],
  [1645.0813, 499.3176],
  [1637.4243, 499.73444],
  [1638.9292, 503.51547],
  [1641.8375, 501.58002],
  [1641.3813, 497.99896],
  [1638.3423, 495.97906],
  [1635.2675, 495.76483],
  [1632.8795, 490.35458],
  [1632.051, 493.5937],
  [1632.0421, 496.9997],
  [1633.1377, 500.0183],
  [1634.8557, 503.00098],
  [1632.0894, 505.79156],
  [1629.8711, 502.42267],
  [1628.3488, 498.63898],
  [1628.1075, 494.78198],
  [1628.7655, 490.85162],
  [1631.1711, 487.30078],
  [1632.8894, 480.81223],
  [1634.1082, 484.42743],
  [1637.0688, 480.6665],
  [1635.9875, 476.89243],
  [1638.9341, 474.04306],
  [1635.6439, 472.31345],
  [1626.1421, 468.99512],
  [1628.1329, 472.2679],
  [1631.279, 470.2013],
  [1632.2881, 466.26352],
  [1632.8835, 462.27148],
  [1636.1627, 461.1949],
  [1641.3704, 457.07434],
  [1643.5745, 459.97433],
  [1646.8792, 458.8546],
  [1650.0189, 457.6406],
  [1653.7837, 457.74072],
  [1648.5901, 452.98895],
  [1645.3262, 455.27094],
  [1642.5879, 452.24603],
  [1645.9528, 449.86285],
  [1647.2991, 446.32956],
  [1641.7849, 447.59482],
  [1643.3717, 443.82855],
  [1638.524, 443.4878],
  [1640.9786, 439.61298],
  [1635.9387, 439.42853],
  [1632.7258, 435.63873],
  [1630.8969, 439.89606],
  [1633.7441, 444.04913],
  [1637.0537, 447.10944],
  [1633.9205, 449.43622],
  [1638.4868, 450.64264],
  [1638.8058, 454.21295],
  [1637.2976, 457.6229],
  [1633.2769, 457.91537],
  [1634.4536, 453.5924],
  [1630.0887, 455.5456],
  [1628.9546, 459.48236],
  [1626.0725, 462.8419],
  [1620.6982, 457.51587],
  [1621.7523, 453.6208],
  [1617.3496, 455.7376],
  [1617.472, 451.98676],
  [1616.4807, 448.08136],
  [1620.3984, 449.15375],
  [1617.8324, 444.1383],
  [1622.343, 445.46436],
  [1625.8552, 442.09436],
  [1622.1941, 440.60748],
  [1618.1906, 439.31586],
  [1613.931, 440.3073],
  [1611.2981, 443.43872],
  [1609.2998, 439.43015],
  [1609.4321, 435.71225],
  [1605.0676, 433.78967],
  [1603.712, 436.92218],
  [1600.385, 432.70944],
  [1596.3788, 433.16724],
  [1600.4629, 427.22083],
  [1608.1505, 431.3198],
  [1610.2384, 427.9852],
  [1609.2539, 423.78964],
  [1603.6128, 430.06268],
  [1605.4131, 426.4189],
  [1614.744, 426.18723],
  [1617.1982, 420.44183],
  [1617.9873, 430.41977],
  [1613.0465, 431.76654],
  [1614.9807, 435.66943],
  [1621.0516, 435.6981],
  [1626.9104, 437.28156],
  [1629.3422, 443.75568],
  [1630.5348, 447.51877],
  [1626.5035, 447.1422],
  [1624.4153, 450.22473],
  [1629.8984, 451.42578],
  [1626.453, 453.4106],
  [1625.3835, 456.89038],
  [1623.6721, 459.97662],
  [1621.8652, 463.22336],
  [1619.0547, 461.29355],
  [1616.0981, 459.61017],
  [1612.6865, 461.15524],
  [1608.8464, 461.49017],
  [1605.7472, 463.41284],
  [1602.3154, 465.54218],
  [1605.4899, 467.96692],
  [1609.5027, 466.0753],
  [1609.3921, 457.6119],
  [1609.0717, 453.84845],
  [1608.402, 450.13705],
  [1607.8018, 446.29535],
  [1604.3748, 448.9217],
  [1604.5868, 453.2911],
  [1600.7319, 455.35092],
  [1605.3992, 457.525],
  [1613.1174, 456.9272],
  [1613.6204, 453.49664],
  [1612.6123, 450.29868],
  [1612.8066, 446.55817],
  [1606.5597, 442.58774],
  [1602.1277, 445.2159],
  [1599.2029, 441.65814],
  [1595.5792, 443.4217],
  [1603.3623, 440.46393],
  [1598.9437, 437.09076],
  [1594.9364, 439.35596],
  [1597.6128, 447.02768],
  [1600.6938, 450.44003],
  [1597.0381, 451.91656],
  [1595.4761, 455.41376],
  [1598.1011, 458.7014],
  [1602.6895, 460.1712],
  [1599.5327, 462.48944],
  [1595.3057, 462.32562],
  [1593.0321, 458.77783],
  [1589.321, 460.9017],
  [1591.2725, 463.9892],
  [1594.3707, 466.50055],
  [1589.3015, 467.6904],
  [1585.6378, 460.82263],
  [1586.363, 464.7839],
  [1582.3535, 465.73163],
  [1578.7004, 466.35898],
  [1576.3071, 469.77325],
  [1572.4197, 469.93784],
  [1570.319, 466.48224],
  [1567.948, 470.541],
  [1570.4042, 474.27377],
  [1563.7854, 472.7208],
  [1564.4491, 468.30463],
  [1566.7754, 465.16223],
  [1563.1768, 464.08957],
  [1565.0931, 460.59332],
  [1568.7258, 461.8025],
  [1572.1902, 462.45435],
  [1574.8403, 465.273],
  [1578.3054, 461.99042],
  [1581.9299, 460.96103],
  [1584.8281, 457.08765],
  [1581.5928, 455.4203],
  [1578.1525, 457.4216],
  [1575.0142, 459.78314],
  [1571.7126, 457.84494],
  [1568.3164, 457.9718],
  [1565.8501, 455.81613],
  [1562.3872, 455.0598],
  [1560.8987, 452.00848],
  [1557.4014, 451.2097],
  [1556.6483, 453.96454],
  [1558.852, 456.66257],
  [1562.4249, 458.70703],
  [1559.7786, 460.29648],
  [1556.5183, 460.80795],
  [1556.266, 465.28723],
  [1559.6334, 463.40442],
  [1559.9778, 466.86542],
  [1560.9698, 470.26843],
  [1557.168, 470.07224],
  [1554.0138, 468.7113],
  [1552.1309, 466.10333],
  [1553.2352, 462.9984],
  [1553.3086, 459.6142],
  [1555.0598, 456.7765],
  [1552.7346, 453.15076],
  [1551.4429, 456.69836],
  [1548.7375, 454.1585],
  [1550.0908, 450.0782],
  [1551.81, 446.48447],
  [1553.5334, 449.72046],
  [1556.2246, 448.3366],
  [1556.3016, 445.1959],
  [1553.2988, 443.1881],
  [1552.7599, 439.61523],
  [1552.8004, 435.7085],
  [1556.6697, 441.10788],
  [1556.4836, 437.80518],
  [1557.1205, 434.59595],
  [1560.5167, 437.7918],
  [1559.5869, 442.63037],
  [1563.2664, 441.66208],
  [1564.3193, 438.19406],
  [1567.196, 436.54047],
  [1570.5498, 435.54294],
  [1574.2246, 437.47592],
  [1577.1141, 439.5034],
  [1580.6042, 441.5077],
  [1577.4357, 449.69202],
  [1577.7043, 453.24924],
  [1573.9841, 454.64755],
  [1569.6277, 453.44727],
  [1572.8262, 450.3656],
  [1574.6787, 446.68735],
  [1570.609, 445.1164],
  [1568.666, 448.9322],
  [1565.5435, 451.86005],
  [1563.6013, 448.8026],
  [1559.6456, 447.717],
  [1562.2407, 445.21417],
  [1566.1884, 445.4566],
  [1567.4585, 441.57782],
  [1570.6356, 439.76825],
  [1573.7747, 442.27502],
  [1577.5466, 443.69165],
  [1579.9468, 446.7987],
  [1581.8931, 451.04657],
  [1586.3191, 453.03915],
  [1589.0469, 456.726],
  [1591.4543, 453.47693],
  [1593.7085, 449.8291],
  [1592.4932, 446.1766],
  [1591.6305, 442.3243],
  [1590.2585, 438.70016],
  [1587.755, 442.23425],
  [1588.0409, 445.72543],
  [1589.4308, 449.61243],
  [1585.2544, 448.85205],
  [1583.3489, 445.41278],
  [1584.1472, 441.924],
  [1586.1433, 438.9145],
  [1586.5181, 435.73572],
  [1587.3843, 432.38568],
  [1582.7625, 434.08368],
  [1582.6772, 437.94247],
  [1579.532, 436.69003],
  [1574.2949, 433.62814],
  [1574.5361, 429.88275],
  [1570.8708, 431.71112],
  [1566.9861, 432.15756],
  [1563.5902, 433.7138],
  [1560.2759, 433.0726],
  [1557.209, 430.68063],
  [1561.436, 429.1534],
  [1565.3678, 428.46872],
  [1563.5363, 425.09528],
  [1568.2894, 424.34213],
  [1569.242, 428.343],
  [1572.3738, 426.86975],
  [1575.8275, 421.49048],
  [1576.6953, 426.38702],
  [1578.5773, 430.5356],
  [1577.9299, 434.01538],
  [1583.1346, 430.86227],
  [1581.1666, 427.42917],
  [1579.8066, 424.00555],
  [1579.5497, 420.54602],
  [1583.3871, 420.4243],
  [1585.7148, 416.71545],
  [1583.9802, 413.02405],
  [1586.6968, 409.72992],
  [1589.533, 413.24387],
  [1590.1106, 417.31393],
  [1587.5897, 421.2591],
  [1584.9022, 424.58688],
  [1587.2256, 428.7358],
  [1590.4294, 434.94067],
  [1594.0281, 435.76447],
  [1591.993, 431.04953],
  [1590.603, 425.07495],
  [1591.9132, 421.08838],
  [1595.1825, 418.79834],
  [1595.446, 423.8479],
  [1599.2843, 421.38837],
  [1599.1182, 416.52716],
  [1603.2859, 415.3847],
  [1605.3308, 410.74933],
  [1608.6616, 414.78693],
  [1599.4252, 411.34323],
  [1594.4734, 414.69452],
  [1594.8639, 410.84045],
  [1591.5968, 409.049],
  [1589.821, 405.97156],
  [1586.4192, 404.79767],
  [1583.3506, 406.5235],
  [1581.2295, 409.4735],
  [1579.6023, 404.8457],
  [1573.4583, 409.23724],
  [1576.9489, 408.09637],
  [1578.9532, 401.1047],
  [1583.7229, 401.85312],
  [1589.3572, 401.84848],
  [1589.1008, 398.54016],
  [1593.984, 399.36774],
  [1593.6621, 404.04132],
  [1597.0513, 406.89316],
  [1601.6067, 405.35876],
  [1605.4451, 402.3553],
  [1602.136, 399.23752],
  [1599.0864, 396.2343],
  [1597.3047, 391.52588],
  [1598.0085, 401.7353],
  [1595.0181, 395.09424],
  [1591.2031, 395.58942],
  [1587.578, 394.6438],
  [1588.2909, 391.04297],
  [1588.8767, 387.64447],
  [1584.8914, 388.49557],
  [1581.3027, 387.16718],
  [1580.1946, 383.80966],
  [1583.291, 383.36118],
  [1586.2279, 385.1733],
  [1593.1598, 377.57236],
  [1597.563, 378.79358],
  [1608.0402, 379.10278],
  [1605.804, 375.10434],
  [1602.4377, 378.64633],
  [1599.8911, 374.9023],
  [1599.7601, 366.87183],
  [1597.2583, 370.23486],
  [1595.3826, 374.15344],
  [1589.0466, 375.04327],
  [1589.6006, 379.383],
  [1586.6245, 381.5999],
  [1584.9475, 378.26865],
  [1583.9514, 374.5715],
  [1580.6599, 371.1388],
  [1586.427, 371.1489],
  [1584.2715, 367.23486],
  [1576.3633, 368.5274],
  [1575.9814, 373.4282],
  [1572.1063, 370.93335],
  [1571.8765, 375.3796],
  [1568.1699, 372.78525],
  [1565.566, 369.76535],
  [1568.6783, 367.32],
  [1572.4915, 366.20447],
  [1574.8501, 362.75937],
  [1578.2239, 361.05682],
  [1580.4222, 357.62988],
  [1576.9901, 354.83704],
  [1572.6581, 357.40747],
  [1565.8562, 357.72272],
  [1560.7324, 361.17282],
  [1565.7112, 363.49802],
  [1570.0653, 361.48947],
  [1579.8987, 365.96997],
  [1583.1704, 362.0844],
  [1587.7615, 363.57837],
  [1589.2596, 367.38135],
  [1591.8411, 371.32648],
  [1593.6309, 366.80255],
  [1597.4565, 363.83716],
  [1599.9333, 360.6688],
  [1594.177, 362.41415],
  [1591.2747, 360.8651],
  [1587.5537, 359.02313],
  [1584.3054, 356.8723],
  [1582.687, 352.5019],
  [1587.9375, 353.6278],
  [1591.794, 356.44226],
  [1596.1477, 357.80457],
  [1593.0571, 352.3093],
  [1597.7826, 353.261],
  [1601.9498, 352.25903],
  [1609.2765, 353.90863],
  [1605.5188, 355.75424],
  [1601.4, 356.9868],
  [1605.231, 360.73288],
  [1603.0625, 363.86066],
  [1603.8909, 368.00372],
  [1602.3003, 371.69012],
  [1607.6758, 370.97705],
  [1611.8508, 369.37836],
  [1611.2982, 375.1966],
  [1615.2434, 373.04657],
  [1617.5745, 369.95038],
  [1618.071, 366.13593],
  [1621.0944, 363.71594],
  [1624.8057, 364.78305],
  [1622.3584, 368.88855],
  [1626.1503, 371.71356],
  [1628.031, 367.2696],
  [1628.3425, 361.89026],
  [1636.1659, 353.22153],
  [1631.8384, 353.56564],
  [1628.015, 352.78772],
  [1624.2352, 352.5348],
  [1628.9097, 348.45386],
  [1633.5149, 348.3618],
  [1632.2303, 343.68665],
  [1636.6582, 341.83957],
  [1637.7151, 335.42685],
  [1640.4664, 328.8628],
  [1643.731, 321.2959],
  [1647.7764, 316.0122],
  [1651.8582, 316.0072],
  [1653.6637, 312.1412],
  [1650.0452, 310.48535],
  [1650.6339, 306.0006],
  [1655.3325, 308.07428],
  [1660.6852, 304.73227],
  [1657.3298, 303.32178],
  [1653.9309, 303.6888],
  [1654.904, 298.57486],
  [1654.8082, 293.57028],
  [1658.6333, 294.42792],
  [1662.4819, 290.73743],
  [1660.9824, 286.7541],
  [1664.4722, 284.0871],
  [1666.8232, 287.62512],
  [1670.5823, 290.46414],
  [1673.8833, 293.09402],
  [1677.173, 289.34143],
  [1672.7551, 286.51224],
  [1669.0713, 283.3142],
  [1665.4316, 279.47806],
  [1667.847, 275.2304],
  [1670.8231, 271.06137],
  [1673.4961, 276.10498],
  [1670.4357, 279.0696],
  [1674.4198, 281.7623],
  [1678.8164, 284.66904],
  [1679.2609, 279.6865],
  [1678.0378, 275.5563],
  [1682.0205, 274.2515],
  [1683.6003, 269.97565],
  [1687.2802, 272.5795],
  [1691.1687, 270.7865],
  [1687.5984, 268.41846],
  [1685.1628, 265.5172],
  [1681.5319, 263.82306],
  [1680.4167, 267.1903],
  [1679.172, 270.63373],
  [1675.3684, 272.0035],
  [1674.6812, 267.84802],
  [1670.1184, 265.8874],
  [1666.1443, 270.54105],
  [1660.9685, 277.74057],
  [1655.6223, 287.70416],
  [1658.2632, 290.48642],
  [1656.9723, 283.7687],
  [1660.8027, 281.88666],
  [1662.9417, 273.80963],
  [1655.9062, 272.19095],
  [1653.4664, 266.926],
  [1649.0774, 261.99643],
  [1640.0022, 250.5552],
  [1644.4012, 246.98291],
  [1649.8103, 243.13416],
  [1644.9825, 239.62012],
  [1639.982, 243.08963],
  [1639.7747, 235.96774],
  [1645.3579, 233.87474],
  [1642.5271, 229.01416],
  [1647.1656, 226.87088],
  [1651.6432, 228.94101],
  [1649.9441, 221.71928],
  [1656.1277, 220.03928],
  [1660.9276, 216.37834],
  [1662.8718, 220.88194],
  [1664.8141, 228.69016],
  [1662.8435, 232.67706],
  [1665.8928, 238.64792],
  [1670.241, 241.42924],
  [1668.7478, 233.2185],
  [1674.218, 234.72543],
  [1676.0767, 239.33902],
  [1677.2123, 243.70508],
  [1671.1724, 247.37415],
  [1672.9324, 252.1344],
  [1670.0397, 256.091],
  [1666.9095, 252.89189],
  [1665.7405, 246.52524],
  [1660.2299, 245.8689],
  [1662.5134, 241.30597],
  [1659.5122, 236.25908],
  [1660.3577, 225.37785],
  [1655.3894, 225.3734],
  [1650.1006, 235.91925],
  [1653.9302, 238.3175],
  [1657.5848, 240.76212],
  [1654.7881, 244.78043],
  [1655.0698, 250.18823],
  [1649.9983, 250.8397],
  [1653.4891, 256.10794],
  [1655.8195, 261.73013],
  [1660.2601, 268.56497],
  [1661.3286, 263.58014],
  [1665.6436, 266.0459],
  [1666.3608, 260.2108],
  [1670.5669, 261.03714],
  [1674.105, 258.79065],
  [1676.5271, 255.48619],
  [1674.0511, 263.4267],
  [1677.6892, 264.51733],
  [1677.542, 260.24402],
  [1681.031, 260.29926],
  [1680.3586, 256.68777],
  [1679.8387, 252.74078],
  [1681.7776, 249.16263],
  [1682.9829, 245.4044],
  [1686.7979, 243.26585],
  [1682.3009, 240.03947],
  [1680.5242, 235.72198],
  [1678.0919, 225.82327],
  [1682.807, 225.1862],
  [1683.668, 220.24918],
  [1679.2928, 220.70488],
  [1676.5964, 216.69556],
  [1671.5214, 215.92642],
  [1666.6641, 216.20276],
  [1668.6498, 220.47089],
  [1673.4287, 221.88617],
  [1672.4219, 228.3725],
  [1678.2156, 230.75458],
  [1690.0011, 229.32675],
  [1692.9465, 222.84935],
  [1688.2789, 224.36217],
  [1684.7761, 230.63449],
  [1686.235, 235.31937],
  [1688.4944, 239.06346],
  [1691.6721, 235.06747],
  [1695.3301, 231.9251],
  [1697.0697, 236.95757],
  [1699.2783, 233.80902],
  [1699.8297, 230.04382],
  [1699.7043, 226.09909],
  [1695.1273, 226.42302],
  [1696.3967, 218.82788],
  [1692.3717, 217.8017],
  [1688.8585, 219.47983],
  [1685.9805, 216.37363],
  [1689.4355, 213.43991],
  [1694.5315, 214.22832],
  [1697.4829, 211.08098],
  [1698.3069, 206.5897],
  [1695.3525, 202.57724],
  [1690.5906, 203.66205],
  [1691.7924, 208.1934],
  [1685.5829, 209.96811],
  [1686.0452, 204.9495],
  [1681.7151, 214.70169],
  [1679.2605, 210.47673],
  [1680.8463, 206.0111],
  [1682.9347, 200.57959],
  [1687.4835, 199.04337],
  [1691.936, 198.79045],
  [1694.8684, 195.77599],
  [1698.6749, 197.21805],
  [1703.0635, 195.18549],
  [1708.6946, 195.35736],
  [1708.7338, 188.22302],
  [1705.6255, 191.55524],
  [1711.0764, 192.20145],
  [1714.813, 191.94116],
  [1715.8047, 195.78812],
  [1712.2583, 197.71983],
  [1720.5582, 206.96106],
  [1720.818, 201.47],
  [1719.2415, 193.59746],
  [1718.6962, 189.6977],
  [1717.0233, 177.28],
  [1721.2979, 180.21446],
  [1722.4126, 175.16716],
  [1726.8247, 176.84851],
  [1731.4015, 175.5795],
  [1736.3956, 176.01164],
  [1745.4807, 176.72093],
  [1740.7937, 176.85692],
  [1732.6472, 179.62238],
  [1737.4082, 182.35178],
  [1732.6115, 188.41808],
  [1737.735, 188.10352],
  [1742.9194, 188.93973],
  [1742.1091, 183.49052],
  [1746.7449, 184.63611],
  [1748.9556, 188.62297],
  [1753.165, 191.03601],
  [1757.2181, 187.36984],
  [1756.2722, 183.29875],
  [1752.6559, 182.147],
  [1749.6288, 178.73645],
  [1751.5538, 174.64401],
  [1756.0801, 176.82343],
  [1760.1975, 179.53333],
  [1761.0997, 183.71213],
  [1763.2709, 187.06699],
  [1766.4294, 183.95624],
  [1763.3049, 175.63422],
  [1766.1879, 179.0028],
  [1771.331, 181.61761],
  [1775.6302, 178.36856],
  [1781.1083, 179.645],
  [1775.9097, 184.93797],
  [1771.1517, 187.42857],
  [1767.113, 189.35777],
  [1770.711, 211.93706],
  [1765.1587, 214.43231],
  [1784.9498, 206.66019],
  [1771.4414, 227.4702],
  [1776.0286, 215.97253],
  [1794.7566, 248.35217],
  [1802.6327, 260.23663],
  [1760.4094, 249.14615],
  [1763.7444, 256.83563],
  [1754.5844, 248.39252],
  [1749.3806, 248.40915],
  [1754.9475, 242.73198],
  [1765.3779, 245.6652],
  [1760.9685, 242.40112],
  [1756.8971, 238.28247],
  [1750.6522, 237.93973],
  [1754.8804, 233.13358],
  [1748.4407, 233.228],
  [1743.5098, 235.83105],
  [1744.5448, 240.50658],
  [1749.4243, 243.00208],
  [1737.9464, 237.29233],
  [1739.6918, 231.75633],
  [1734.5399, 230.59715],
  [1732.8156, 236.46843],
  [1730.1818, 232.57158],
  [1725.7032, 233.88742],
  [1721.896, 236.27856],
  [1728.2821, 228.72112],
  [1723.6427, 229.6124],
  [1711.4307, 227.42746],
  [1711.8872, 233.05411],
  [1707.9192, 230.6862],
  [1703.9136, 227.9725],
  [1707.423, 225.96281],
  [1703.5114, 222.60004],
  [1699.115, 222.03722],
  [1699.9976, 215.1513],
  [1702.7974, 210.13298],
  [1704.5453, 205.82272],
  [1701.1162, 201.97464],
  [1699.4568, 192.31255],
  [1694.4056, 191.0667],
  [1689.8643, 193.37921],
  [1691.0421, 186.788],
  [1697.7599, 184.03223],
  [1697.978, 187.8775],
  [1703.1094, 187.46231],
  [1703.1614, 182.16812],
  [1708.0052, 183.37517],
  [1713.4518, 186.84204],
  [1718.175, 184.3631],
  [1722.7202, 185.26663],
  [1726.7856, 182.84442],
  [1732.634, 184.0629],
  [1727.8088, 188.1635],
  [1723.3181, 190.97662],
  [1722.9524, 196.29163],
  [1726.7402, 193.26634],
  [1731.7665, 194.7288],
  [1727.4839, 198.17163],
  [1734.4489, 198.87393],
  [1743.0864, 199.00652],
  [1738.9839, 204.92172],
  [1732.6017, 203.90524],
  [1738.4475, 196.91449],
  [1725.5931, 203.02731],
  [1727.9642, 206.92392],
  [1724.1895, 210.22263],
  [1719.2361, 220.43982],
  [1722.3076, 215.52142],
  [1718.7058, 212.02686],
  [1714.2186, 209.00778],
  [1710.0309, 214.26477],
  [1708.7986, 208.71591],
  [1705.2533, 213.59233],
  [1705.0337, 218.25462],
  [1710.0939, 222.74785],
  [1713.6523, 220.68396],
  [1715.435, 225.05069],
  [1715.2009, 229.56934],
  [1720.145, 226.21489],
  [1719.6631, 230.78445],
  [1717.062, 234.19147],
  [1714.6079, 237.71292],
  [1710.5864, 237.59882],
  [1709.535, 241.29582],
  [1705.5857, 239.91675],
  [1706.8787, 235.72295],
  [1703.7697, 232.661],
  [1702.2361, 236.78586],
  [1701.2034, 240.61113],
  [1697.2649, 241.44998],
  [1693.6925, 239.32774],
  [1691.6616, 242.58139],
  [1689.806, 246.01904],
  [1686.6968, 248.38928],
  [1684.4349, 251.51166],
  [1684.1522, 254.87994],
  [1684.4729, 258.28903],
  [1684.5693, 261.75586],
  [1688.1119, 261.36545],
  [1692.6084, 256.2954],
  [1688.3848, 257.30212],
  [1688.2576, 252.91547],
  [1691.7158, 250.16837],
  [1694.7655, 245.52562],
  [1699.5168, 246.58934],
  [1703.9338, 245.00267],
  [1708.6586, 246.25333],
  [1714.2866, 242.37695],
  [1718.6167, 239.73743],
  [1720.4087, 244.02576],
  [1724.2397, 241.28171],
  [1728.1041, 238.73271],
  [1732.898, 242.1328],
  [1738.5508, 243.81726],
  [1727.9235, 245.53497],
  [1733.3595, 251.6284],
  [1745.9749, 252.86308],
  [1743.6986, 246.35193],
  [1739.7269, 251.09967],
  [1737.6603, 256.79425],
  [1737.3889, 263.53668],
  [1732.5922, 258.911],
  [1730.1115, 264.5028],
  [1727.9019, 271.10577],
  [1726.7345, 277.72083],
  [1722.2529, 279.37177],
  [1725.5876, 283.4955],
  [1731.1815, 275.6018],
  [1735.8937, 274.33337],
  [1733.364, 268.86172],
  [1739.6882, 268.93573],
  [1735.0305, 280.86542],
  [1730.2214, 281.92792],
  [1735.0017, 288.33026],
  [1728.96, 287.94196],
  [1723.6948, 293.2545],
  [1720.253, 283.612],
  [1722.6238, 287.15524],
  [1716.1909, 285.82263],
  [1716.3043, 280.28897],
  [1713.0692, 274.88208],
  [1723.3369, 273.85553],
  [1717.7777, 275.45053],
  [1709.3776, 267.2151],
  [1713.7927, 270.1946],
  [1719.4257, 270.0799],
  [1724.3818, 266.6859],
  [1708.8329, 254.37912],
  [1708.2253, 260.5822],
  [1704.3177, 265.4894],
  [1701.3391, 261.6897],
  [1703.2433, 256.97662],
  [1697.2963, 258.31375],
  [1692.2728, 260.8905],
  [1696.3318, 262.84094],
  [1693.9009, 266.55664],
  [1689.8401, 265.07565],
  [1695.1215, 271.71948],
  [1698.9945, 266.76544],
  [1699.2479, 271.3187],
  [1708.2878, 273.63776],
  [1704.9258, 276.92072],
  [1706.4401, 280.711],
  [1704.0238, 270.78564],
  [1701.3606, 275.3475],
  [1697.8053, 277.13367],
  [1701.0448, 281.19537],
  [1695.9114, 282.27026],
  [1693.834, 276.8432],
  [1689.8674, 276.59274],
  [1685.3253, 276.1762],
  [1685.2084, 280.07535],
  [1684.6194, 284.29907],
  [1682.9543, 288.6408],
  [1681.6481, 292.88208],
  [1677.8162, 295.3026],
  [1680.7382, 298.74048],
  [1678.3215, 301.13205],
  [1673.4792, 306.21112],
  [1675.7645, 309.8187],
  [1678.069, 305.9704],
  [1681.9211, 305.1778],
  [1675.2039, 302.58038],
  [1673.7451, 298.023],
  [1669.1556, 299.10858],
  [1671.3901, 302.07996],
  [1668.5879, 305.4025],
  [1666.5066, 302.21338],
  [1669.2168, 295.2517],
  [1666.621, 291.8498],
  [1663.9164, 294.61145],
  [1665.021, 298.18304],
  [1660.7494, 297.0629],
  [1659.1932, 300.00955],
  [1662.8187, 301.66354],
  [1664.0603, 306.38373],
  [1665.9503, 309.57202],
  [1662.2115, 311.84106],
  [1659.7134, 308.4949],
  [1658.342, 313.36978],
  [1656.8815, 317.89862],
  [1662.2659, 321.50754],
  [1660.1068, 325.12796],
  [1657.7185, 328.784],
  [1657.1182, 332.95227],
  [1655.5105, 323.44623],
  [1652.8931, 327.27335],
  [1652.3457, 331.58124],
  [1648.2538, 334.32468],
  [1645.426, 338.0932],
  [1642.5708, 341.5632],
  [1640.1998, 345.22678],
  [1643.6887, 347.5739],
  [1647.236, 344.1432],
  [1650.0396, 339.96246],
  [1652.9265, 336.27432],
  [1654.9271, 341.33636],
  [1651.9702, 344.6897],
  [1656.2563, 346.64288],
  [1652.6334, 349.4337],
  [1648.3699, 349.09872],
  [1644.9465, 352.10815],
  [1640.497, 351.95514],
  [1637.8577, 348.41504],
  [1624.0493, 347.906],
  [1620.6359, 350.8131],
  [1617.0618, 352.86633],
  [1613.8994, 354.96762],
  [1611.4482, 357.22736],
  [1608.5957, 359.07074],
  [1616.8862, 357.57687],
  [1616.88, 362.17627],
  [1613.6426, 365.55157],
  [1609.9473, 363.03427],
  [1607.6957, 366.00644],
  [1613.3467, 360.57434],
  [1621.1296, 355.53992],
  [1620.2856, 359.57086],
  [1624.1155, 360.11804],
  [1626.3452, 356.80844],
  [1630.9719, 358.45724],
  [1639.3346, 357.14447],
  [1643.3492, 356.31598],
  [1647.412, 358.42798],
  [1652.8091, 358.84686],
  [1645.5747, 368.01352],
  [1639.6888, 368.03662],
  [1638.8469, 362.55515],
  [1635.0708, 358.0191],
  [1643.5757, 361.78003],
  [1649.5837, 363.55685],
  [1649.2185, 354.25766],
  [1653.7573, 353.97787],
  [1657.6708, 351.5066],
  [1662.147, 353.12253],
  [1658.1544, 356.90683],
  [1672.2634, 357.9757],
  [1670.8206, 364.7275],
  [1685.0764, 373.56842],
  [1681.1011, 376.6975],
  [1676.3206, 375.50974],
  [1670.3909, 388.48322],
  [1666.6815, 393.66797],
  [1664.6738, 398.89648],
  [1658.8783, 399.50253],
  [1655.0897, 404.95734],
  [1647.816, 395.79047],
  [1640.7457, 396.2738],
  [1633.8181, 399.7063],
  [1644.2798, 389.62036],
  [1640.2908, 373.69092],
  [1634.5955, 377.09088],
  [1627.3545, 376.29364],
  [1630.1655, 382.24695],
  [1626.7554, 387.38303],
  [1620.71, 388.71844],
  [1618.5449, 382.7072],
  [1622.662, 379.58798],
  [1621.4062, 374.12097],
  [1617.3591, 377.25946],
  [1613.3203, 380.3592],
  [1609.056, 383.81134],
  [1608.8276, 388.7777],
  [1604.9148, 387.32162],
  [1609.6614, 392.58905],
  [1613.4624, 386.2746],
  [1604.5791, 382.56992],
  [1600.5908, 383.27475],
  [1596.8815, 383.06015],
  [1593.4109, 382.37473],
  [1590.1951, 384.00226],
  [1592.384, 391.66904],
  [1592.8065, 387.67145],
  [1596.4851, 387.2169],
  [1600.5503, 387.5802],
  [1601.9672, 391.4371],
  [1604.5596, 393.98166],
  [1607.0953, 397.4116],
  [1610.2666, 401.30884],
  [1613.6934, 398.02963],
  [1617.9397, 400.4566],
  [1615.0813, 403.59995],
  [1618.7009, 395.19055],
  [1624.3047, 394.4443],
  [1627.4868, 398.98785],
  [1622.3593, 400.56662],
  [1625.6381, 423.74994],
  [1620.8865, 425.98285],
  [1629.8268, 419.95383],
  [1631.614, 424.3604],
  [1638.9825, 434.9159],
  [1644.3076, 435.76755],
  [1646.0413, 440.45578],
  [1649.2896, 437.06772],
  [1655.7051, 431.59958],
  [1659.5681, 435.9603],
  [1656.9908, 440.56882],
  [1654.3569, 436.53082],
  [1652.2957, 440.59863],
  [1649.4779, 443.34482],
  [1651.2919, 448.97006],
  [1653.7759, 445.24518],
  [1658.2861, 444.72473],
  [1661.5762, 451.05768],
  [1664.9647, 453.551],
  [1666.0283, 457.49786],
  [1666.1912, 462.15277],
  [1667.4529, 466.15698],
  [1666.4215, 470.8388],
  [1670.3547, 469.58105],
  [1676.65, 474.48895],
  [1674.3218, 471.25055],
  [1671.5475, 474.76752],
  [1667.287, 475.21954],
  [1663.449, 477.04672],
  [1662.7549, 473.289],
  [1662.2373, 469.13544],
  [1662.9962, 465.31476],
  [1659.1174, 464.49744],
  [1657.617, 468.50598],
  [1658.573, 472.1629],
  [1659.2585, 476.07846],
  [1660.2435, 479.73413],
  [1659.5498, 485.61813],
  [1658.9929, 488.99042],
  [1655.8049, 486.78882],
  [1658.1708, 482.5813],
  [1654.8936, 482.92236],
  [1652.2832, 484.93915],
  [1648.3806, 483.2854],
  [1645.2532, 480.29816],
  [1644.4308, 484.40512],
  [1649.577, 486.86557],
  [1652.4879, 488.9535],
  [1655.2223, 490.8281],
  [1657.8788, 492.5807],
  [1659.9856, 495.15012],
  [1660.6384, 498.63287],
  [1663.7712, 497.35095],
  [1664.8801, 493.6761],
  [1666.2183, 500.61487],
  [1662.5186, 502.54767],
  [1658.812, 501.0385],
  [1658.8811, 504.38513],
  [1657.016, 507.30573],
  [1654.4323, 505.0356],
  [1653.4285, 509.10126],
  [1653.9238, 513.055],
  [1650.5155, 513.1624],
  [1648.9978, 516.7406],
  [1653.3971, 518.30524],
  [1645.3586, 518.2528],
  [1643.7949, 522.61017],
  [1640.3899, 518.4506],
  [1643.2755, 514.62415],
  [1646.5312, 512.5632],
  [1643.6494, 509.79346],
  [1646.792, 507.01035],
  [1649.3185, 509.63275],
  [1651.007, 506.37122],
  [1649.1128, 503.89374],
  [1645.8638, 502.7451],
  [1643.5085, 505.18747],
  [1640.7682, 506.9626],
  [1636.4845, 506.42828],
  [1638.7094, 509.62842],
  [1640.1218, 513.04767],
  [1635.8247, 512.485],
  [1634.0582, 509.34494],
  [1631.3579, 513.395],
  [1631.8822, 517.03613],
  [1636.5876, 516.06494],
  [1635.1101, 520.0847],
  [1638.321, 523.5831],
  [1641.7092, 527.7223],
  [1634.9697, 534.0635],
  [1635.3713, 528.59467],
  [1632.702, 524.18414],
  [1625.429, 522.578],
  [1629.4423, 520.6465],
  [1628.7358, 526.9618],
  [1624.4249, 529.5874],
  [1629.9341, 532.2957],
  [1621.2289, 533.95654],
  [1623.6193, 543.00867],
  [1632.6926, 544.5313],
  [1637.3428, 544.79034],
  [1639.2391, 538.5623],
  [1632.6824, 539.4478],
  [1632.5024, 548.8279],
  [1637.2664, 550.32104],
  [1628.2839, 555.02075],
  [1624.4443, 556.99585],
  [1620.987, 559.84674],
  [1616.7578, 562.3742],
  [1619.3784, 564.7297],
  [1622.7734, 564.10345],
  [1625.114, 566.76636],
  [1628.6317, 567.5104],
  [1631.1404, 570.0279],
  [1634.8352, 569.1087],
  [1635.8319, 573.307],
  [1633.6301, 576.8921],
  [1632.9492, 580.97864],
  [1633.5184, 585.48083],
  [1638.0498, 586.3601],
  [1637.7761, 581.6859],
  [1638.8918, 577.7251],
  [1640.7408, 574.29974],
  [1644.9246, 574.5669],
  [1649.0691, 573.8937],
  [1647.3242, 569.1144],
  [1642.6344, 566.7642],
  [1642.8828, 570.6645],
  [1638.7756, 569.61646],
  [1637.7748, 565.20197],
  [1633.4839, 565.31726],
  [1629.77, 563.6219],
  [1625.7078, 561.5513],
  [1629.2461, 559.5702],
  [1632.3337, 557.09546],
  [1632.6875, 552.9208],
  [1636.4854, 555.66003],
  [1634.1488, 560.9453],
  [1638.0818, 560.40125],
  [1640.3163, 557.04504],
  [1644.0492, 557.9719],
  [1641.2089, 562.54553],
  [1644.8707, 563.045],
  [1648.3927, 564.4154],
  [1651.8171, 566.5984],
  [1655.7861, 564.51135],
  [1660.3215, 563.7401],
  [1664.458, 566.515],
  [1660.5171, 569.4623],
  [1656.0474, 569.4176],
  [1652.5385, 571.8987],
  [1652.864, 578.025],
  [1647.7407, 578.64136],
  [1654.2749, 584.69995],
  [1648.5873, 583.69336],
  [1650.7125, 588.8003],
  [1649.0112, 593.22876],
  [1655.6246, 591.29065],
  [1660.7615, 592.3353],
  [1659.8392, 586.09186],
  [1665.0894, 587.5316],
  [1664.3649, 580.3958],
  [1658.1962, 580.26434],
  [1658.0077, 574.9959],
  [1663.5461, 573.7705],
  [1668.8147, 575.6564],
  [1668.3875, 569.6805],
  [1673.7205, 570.9391],
  [1674.0522, 565.07697],
  [1669.2585, 563.6946],
  [1670.7881, 557.9203],
  [1676.2578, 559.0134],
  [1679.8657, 562.24854],
  [1679.8469, 567.74365],
  [1679.3062, 572.9372],
  [1674.9996, 576.7747],
  [1680.2528, 578.9309],
  [1682.8335, 584.03705],
  [1681.2124, 589.3821],
  [1675.4905, 590.5608],
  [1676.7151, 584.4176],
  [1671.3988, 581.03986],
  [1670.4785, 586.3379],
  [1669.8516, 592.15283],
  [1665.7319, 594.0321],
  [1663.1672, 597.89795],
  [1672.51, 596.1824],
  [1677.1904, 596.573],
  [1674.4896, 601.13477],
  [1679.8776, 601.4104],
  [1684.2838, 604.06573],
  [1688.7665, 602.6365],
  [1693.6252, 600.60675],
  [1685.9783, 593.3657],
  [1681.1515, 594.66003],
  [1684.6792, 598.8485],
  [1689.8759, 597.0587],
  [1692.2682, 606.8255],
  [1696.7529, 608.85913],
  [1686.8733, 608.74146],
  [1689.8313, 613.4138],
  [1682.1517, 613.3547],
  [1680.9763, 607.75195],
  [1676.0605, 606.37476],
  [1675.3247, 612.0923],
  [1665.237, 620.67883],
  [1668.0, 637.36926],
  [1679.2053, 635.2526],
  [1673.7238, 641.54395],
  [1670.2263, 646.57825],
  [1679.8834, 642.70306],
  [1685.3359, 638.3636],
  [1687.2457, 631.9458],
  [1692.0974, 637.4607],
  [1696.6454, 644.54504],
  [1698.5808, 638.2498],
  [1695.1047, 631.5171],
  [1705.7239, 624.8917],
  [1711.3132, 620.0601],
  [1711.8286, 625.91943],
  [1715.207, 630.9381],
  [1708.924, 631.82526],
  [1701.9746, 630.8405],
  [1689.5142, 643.97217],
  [1690.2964, 651.91296],
  [1676.5786, 649.34375],
  [1683.8441, 647.19806],
  [1683.8755, 653.4765],
  [1679.8689, 657.25946],
  [1673.9675, 656.2479],
  [1668.9203, 652.9811],
  [1668.0446, 659.7232],
  [1662.801, 656.4793],
  [1658.8997, 652.19006],
  [1664.898, 642.43427],
  [1664.1936, 649.2195],
  [1658.9425, 645.76624],
  [1659.0358, 639.754],
  [1654.3103, 636.2108],
  [1647.9902, 638.1004],
  [1641.6979, 623.2845],
  [1649.3555, 624.9127],
  [1654.0912, 619.9491],
  [1659.6294, 618.3484],
  [1664.91, 614.1348],
  [1669.7589, 612.5349],
  [1660.6691, 612.5343],
  [1656.3745, 612.5128],
  [1655.0526, 607.4607],
  [1649.603, 607.5377],
  [1647.7937, 603.05676],
  [1652.7039, 601.67993],
  [1656.9807, 603.0631],
  [1661.4921, 607.5363],
  [1667.4198, 608.05255],
  [1670.9314, 604.5872],
  [1668.688, 599.12225],
  [1665.5018, 603.166],
  [1660.9067, 601.98773],
  [1657.7849, 597.4065],
  [1653.1561, 596.2184],
  [1648.6118, 598.1681],
  [1644.1138, 599.7929],
  [1640.2162, 601.1249],
  [1635.55, 599.7343],
  [1634.571, 595.2866],
  [1639.4946, 595.9995],
  [1644.0847, 594.58044],
  [1645.1217, 589.34485],
  [1643.2344, 580.29236],
  [1642.7852, 585.1851],
  [1639.7213, 590.942],
  [1634.6104, 590.4224],
  [1630.3864, 593.18286],
  [1626.2666, 594.59406],
  [1622.1572, 593.9449],
  [1620.2693, 590.3424],
  [1622.2922, 587.09283],
  [1619.3928, 584.6414],
  [1615.2966, 583.4867],
  [1610.8944, 583.14844],
  [1607.0566, 582.08093],
  [1603.663, 579.39874],
  [1598.9153, 583.11255],
  [1599.6462, 578.411],
  [1599.3822, 574.2387],
  [1606.7958, 568.88055],
  [1611.4518, 565.6759],
  [1612.3583, 570.2097],
  [1621.3109, 574.8895],
  [1623.6108, 579.5905],
  [1619.1849, 580.22064],
  [1616.9744, 576.755],
  [1613.1372, 579.236],
  [1612.8782, 574.71124],
  [1608.4978, 577.548],
  [1608.5942, 572.8809],
  [1604.1796, 574.13684],
  [1601.1313, 569.69946],
  [1596.1213, 567.2525],
  [1599.2283, 564.35614],
  [1603.5198, 565.76465],
  [1607.1077, 563.41675],
  [1610.0879, 560.8332],
  [1613.8005, 560.94196],
  [1615.9369, 567.29034],
  [1617.2096, 572.1166],
  [1620.7021, 569.186],
  [1625.009, 571.281],
  [1625.9583, 575.5055],
  [1630.0007, 573.75824],
  [1628.5828, 579.1426],
  [1624.864, 583.93933],
  [1629.0337, 583.9641],
  [1629.8213, 588.57117],
  [1625.6246, 589.56854],
  [1617.7357, 594.1859],
  [1615.9753, 598.25244],
  [1622.6323, 598.5233],
  [1619.6735, 602.39844],
  [1618.1993, 607.3064],
  [1619.6588, 612.1838],
  [1624.8855, 611.2395],
  [1630.6093, 614.61926],
  [1623.5654, 606.2363],
  [1626.512, 602.2066],
  [1629.6692, 598.2253],
  [1632.2808, 603.42163],
  [1629.1979, 607.782],
  [1634.4924, 609.584],
  [1637.824, 605.40967],
  [1643.4724, 606.10046],
  [1640.3906, 610.8164],
  [1646.0786, 611.8246],
  [1651.605, 613.1441],
  [1648.0931, 618.5265],
  [1642.54, 617.07385],
  [1636.7755, 615.98987],
  [1633.886, 621.33374],
  [1625.1263, 616.55206],
  [1627.3099, 622.6138],
  [1624.6383, 629.31824],
  [1618.1786, 631.11176],
  [1619.2595, 625.8347],
  [1613.1086, 626.4746],
  [1612.1357, 631.4056],
  [1608.0024, 634.90125],
  [1604.0176, 630.85596],
  [1607.9845, 628.5669],
  [1608.5208, 623.1736],
  [1612.3405, 621.09875],
  [1616.7167, 621.01483],
  [1621.8694, 620.5246],
  [1617.6208, 616.1996],
  [1612.4333, 616.2772],
  [1613.6517, 611.50494],
  [1604.4578, 610.31384],
  [1608.1387, 613.18884],
  [1607.8206, 617.75586],
  [1604.1425, 620.4271],
  [1604.4926, 624.9486],
  [1600.8822, 626.94507],
  [1596.7284, 624.77844],
  [1593.1326, 627.36584],
  [1594.2755, 632.3335],
  [1587.918, 628.406],
  [1591.5079, 621.6017],
  [1586.5103, 617.18286],
  [1591.3376, 614.8589],
  [1586.072, 609.7609],
  [1580.3165, 612.64606],
  [1580.3821, 605.9578],
  [1585.0249, 603.41614],
  [1581.3269, 599.5521],
  [1583.6802, 595.02136],
  [1589.188, 594.0344],
  [1588.3042, 598.8648],
  [1590.4042, 603.782],
  [1591.5962, 609.01276],
  [1596.1013, 611.18964],
  [1600.2141, 612.43713],
  [1602.6467, 616.01526],
  [1599.5887, 621.1669],
  [1596.3672, 617.3835],
  [1600.3291, 606.8746],
  [1595.8813, 605.1815],
  [1595.6545, 600.2044],
  [1594.1613, 596.18884],
  [1593.6025, 591.2474],
  [1598.6073, 593.2592],
  [1602.6696, 596.86053],
  [1601.1868, 601.3042],
  [1604.9524, 604.9594],
  [1609.0012, 607.95215],
  [1613.1877, 606.3235],
  [1613.5891, 601.78894],
  [1608.0685, 601.4991],
  [1608.9792, 596.92664],
  [1604.5525, 592.25854],
  [1609.1233, 591.7688],
  [1613.1409, 593.75],
  [1616.2169, 588.9508],
  [1612.1741, 587.8674],
  [1607.3337, 587.2931],
  [1603.3445, 584.94385],
  [1600.9937, 588.78296],
  [1596.4946, 587.207],
  [1593.5458, 582.26337],
  [1592.2068, 586.14825],
  [1589.2803, 588.8215],
  [1585.5485, 590.6373],
  [1582.2872, 588.05695],
  [1578.161, 588.42505],
  [1578.7505, 584.3383],
  [1574.9194, 582.443],
  [1571.286, 582.4412],
  [1568.2205, 580.1895],
  [1570.7108, 577.7556],
  [1572.3346, 574.4127],
  [1574.9886, 578.12067],
  [1579.6787, 576.25903],
  [1580.1115, 572.572],
  [1581.4197, 568.9176],
  [1586.0237, 567.2258],
  [1583.7672, 562.9046],
  [1583.2678, 555.00854],
  [1583.1213, 559.1283],
  [1578.7305, 561.349],
  [1578.9794, 557.31323],
  [1575.9269, 555.0203],
  [1575.8666, 550.6044],
  [1571.9012, 549.83295],
  [1568.3013, 548.1334],
  [1568.3069, 544.16876],
  [1571.6274, 541.8152],
  [1576.1914, 541.30164],
  [1578.5789, 544.4966],
  [1579.6235, 548.2379],
  [1580.2981, 552.2899],
  [1573.8931, 545.8041],
  [1564.0552, 546.27704],
  [1563.6968, 541.9863],
  [1562.6409, 537.7969],
  [1567.2269, 539.9763],
  [1570.4185, 537.5027],
  [1571.3525, 533.9652],
  [1573.9479, 537.9487],
  [1566.7753, 536.1908],
  [1565.216, 533.1023],
  [1568.6646, 532.2054],
  [1569.3254, 525.88715],
  [1564.428, 520.01447],
  [1564.8848, 524.7471],
  [1567.2996, 528.90533],
  [1563.5344, 529.5021],
  [1560.7003, 526.6572],
  [1560.1663, 522.6441],
  [1559.2883, 518.24445],
  [1557.1462, 514.29706],
  [1554.5045, 509.0204],
  [1557.8225, 505.81757],
  [1561.4786, 503.1881],
  [1565.7301, 502.2872],
  [1568.5945, 499.29987],
  [1572.5573, 497.57895],
  [1576.1221, 494.6587],
  [1583.4579, 489.10553],
  [1588.7831, 491.0699],
  [1592.749, 488.67615],
  [1594.3108, 492.76758],
  [1595.6154, 497.60352],
  [1590.2139, 495.67444],
  [1585.0371, 494.19165],
  [1580.5095, 497.1197],
  [1576.2838, 500.5086],
  [1580.9424, 502.1368],
  [1577.977, 506.36987],
  [1573.5137, 507.17523],
  [1571.831, 502.29492],
  [1568.6097, 505.97858],
  [1563.6885, 507.22116],
  [1560.4507, 510.60626],
  [1563.5518, 515.0353],
  [1567.9352, 511.0964],
  [1573.7064, 513.0031],
  [1579.224, 513.0198],
  [1581.8633, 509.21188],
  [1585.9685, 511.05746],
  [1590.5323, 511.06177],
  [1594.704, 514.07556],
  [1595.017, 519.7429],
  [1589.2898, 516.4819],
  [1581.5806, 520.2384],
  [1583.8535, 515.76086],
  [1577.777, 517.3386],
  [1573.5382, 519.15985],
  [1569.0356, 516.70044],
  [1569.0964, 521.6066],
  [1573.2911, 524.28864],
  [1577.596, 522.7507],
  [1579.993, 526.76917],
  [1583.7697, 524.73425],
  [1586.3594, 520.73],
  [1590.9087, 521.4988],
  [1589.1392, 525.53357],
  [1586.6819, 528.8097],
  [1582.55, 530.19196],
  [1585.4626, 533.27954],
  [1588.1543, 537.0149],
  [1583.8137, 537.1455],
  [1581.0127, 534.41284],
  [1578.3083, 531.4873],
  [1575.9548, 527.90173],
  [1572.075, 529.34424],
  [1574.6534, 532.931],
  [1577.1392, 536.07294],
  [1579.8823, 538.88403],
  [1582.1166, 542.2676],
  [1583.9834, 546.5405],
  [1585.815, 540.7161],
  [1588.1309, 544.14886],
  [1590.7708, 541.06537],
  [1594.1492, 544.71796],
  [1598.8643, 542.08856],
  [1602.3168, 538.7074],
  [1602.2098, 533.9647],
  [1607.1287, 539.3967],
  [1606.8323, 535.26654],
  [1605.8844, 530.7579],
  [1614.5066, 525.77014],
  [1609.8655, 527.68933],
  [1609.7708, 521.6059],
  [1604.9954, 516.5331],
  [1599.4705, 518.3551],
  [1599.1108, 524.2721],
  [1596.9431, 528.59265],
  [1594.2227, 525.0072],
  [1592.3027, 529.2427],
  [1589.4562, 532.5639],
  [1593.885, 533.3538],
  [1592.2407, 536.79456],
  [1595.0055, 540.0304],
  [1597.8372, 536.9391],
  [1597.9182, 532.62],
  [1601.3789, 529.0883],
  [1604.9331, 525.9464],
  [1603.653, 521.4161],
  [1600.3748, 513.7607],
  [1603.9104, 510.37607],
  [1608.2441, 511.2823],
  [1609.5674, 516.06604],
  [1613.792, 517.156],
  [1618.1133, 515.5704],
  [1618.0448, 510.92612],
  [1614.5364, 507.7634],
  [1613.1943, 512.08545],
  [1609.8131, 506.89874],
  [1605.3484, 504.95526],
  [1601.0685, 506.32117],
  [1597.9733, 509.6223],
  [1593.9924, 507.464],
  [1589.2996, 505.5554],
  [1584.8638, 504.80356],
  [1585.4618, 499.25684],
  [1589.8575, 500.23364],
  [1593.4984, 502.1981],
  [1597.3885, 503.2893],
  [1601.0669, 501.25134],
  [1604.499, 498.96228],
  [1607.7778, 496.4167],
  [1610.43, 492.86755],
  [1611.8215, 498.30066],
  [1608.4734, 501.67517],
  [1612.8861, 503.0028],
  [1615.2301, 496.0915],
  [1615.477, 492.11578],
  [1611.9978, 488.29514],
  [1609.217, 484.7309],
  [1605.0609, 483.86072],
  [1600.6387, 484.03757],
  [1601.529, 479.77686],
  [1605.3079, 479.58237],
  [1607.7126, 476.65744],
  [1610.0032, 480.25323],
  [1613.7195, 483.17075],
  [1620.1887, 491.92896],
  [1624.446, 492.45248],
  [1624.138, 497.4165],
  [1619.9644, 496.4552],
  [1621.4065, 501.68225],
  [1616.9084, 500.15698],
  [1617.0411, 504.28406],
  [1620.0485, 506.47095],
  [1622.4451, 509.95093],
  [1625.6887, 502.10834],
  [1624.3463, 506.27295],
  [1628.094, 506.50546],
  [1630.2115, 509.7888],
  [1626.6078, 511.49167],
  [1626.7676, 516.4896],
  [1622.6062, 514.1236],
  [1621.7991, 519.0078],
  [1616.4512, 520.97595],
  [1620.8805, 524.48834],
  [1618.8906, 529.17236],
  [1616.8943, 536.4465],
  [1614.9467, 531.97375],
  [1610.5286, 532.452],
  [1611.8616, 536.971],
  [1613.7767, 540.9023],
  [1618.7147, 540.6726],
  [1620.411, 545.6372],
  [1622.3888, 538.60016],
  [1626.655, 536.0391],
  [1627.6853, 540.80707],
  [1628.2322, 545.407],
  [1628.208, 550.3329],
  [1624.1105, 547.84674],
  [1624.1418, 552.37006],
  [1619.6748, 550.7794],
  [1620.1835, 554.9563],
  [1616.9873, 557.6488],
  [1615.1802, 553.7252],
  [1612.4221, 556.6119],
  [1608.743, 556.2027],
  [1605.2723, 553.302],
  [1609.8569, 551.4409],
  [1614.2732, 550.293],
  [1616.9734, 547.7233],
  [1616.2827, 544.00446],
  [1612.2522, 546.443],
  [1607.5969, 547.0356],
  [1609.6343, 542.6605],
  [1603.9373, 543.4411],
  [1603.5835, 548.8523],
  [1599.5264, 546.42865],
  [1597.2102, 550.18396],
  [1589.2585, 548.06946],
  [1585.5446, 551.1918],
  [1590.5612, 553.25085],
  [1593.4109, 549.2487],
  [1595.3387, 554.9264],
  [1600.5564, 552.6052],
  [1600.5997, 556.84686],
  [1605.3584, 558.3042],
  [1602.445, 561.17163],
  [1597.0474, 559.8126],
  [1594.0432, 563.27155],
  [1591.8068, 558.8871],
  [1587.4376, 556.70105],
  [1587.598, 561.5117],
  [1590.1289, 565.0041],
  [1591.8325, 569.42053],
  [1596.075, 571.3646],
  [1593.7766, 574.97754],
  [1595.2559, 578.8258],
  [1588.1426, 571.0349],
  [1589.2372, 574.8707],
  [1589.294, 578.9524],
  [1588.7214, 582.76196],
  [1585.8135, 585.429],
  [1583.2625, 582.09814],
  [1579.3176, 580.08777],
  [1584.4159, 577.38416],
  [1584.3054, 572.5221],
  [1576.0935, 573.58014],
  [1576.8525, 569.3009],
  [1581.6448, 565.3502],
  [1577.844, 565.536],
  [1574.81, 563.13617],
  [1570.9572, 562.5537],
  [1573.7908, 559.06287],
  [1571.8494, 554.60004],
  [1567.8119, 552.8765],
  [1563.9336, 555.34924],
  [1564.0068, 550.30347],
  [1554.3539, 547.43634],
  [1551.8921, 550.93286],
  [1553.3442, 554.53357],
  [1550.3599, 557.28577],
  [1552.3301, 561.093],
  [1555.146, 566.0742],
  [1558.2782, 569.83655],
  [1561.7322, 571.1023],
  [1565.1635, 571.97217],
  [1565.7747, 568.3256],
  [1569.1846, 566.6661],
  [1573.2385, 566.7463],
  [1572.971, 570.5433],
  [1569.282, 570.7511],
  [1568.2649, 574.1233],
  [1566.0957, 576.71606],
  [1562.8064, 574.94006],
  [1559.2938, 573.79346],
  [1555.8843, 573.5095],
  [1551.2976, 579.7686],
  [1553.6704, 577.21545],
  [1557.0117, 576.7794],
  [1559.9182, 577.7895],
  [1562.49, 578.991],
  [1564.6451, 580.51245],
  [1565.7509, 583.39575],
  [1568.5349, 585.2779],
  [1570.063, 588.4343],
  [1569.1598, 592.53815],
  [1564.788, 591.046],
  [1564.9344, 587.2698],
  [1561.8951, 584.44214],
  [1559.6995, 582.10596],
  [1556.8595, 580.3862],
  [1554.0698, 582.0397],
  [1556.631, 585.2609],
  [1556.5935, 589.4411],
  [1560.6036, 588.4551],
  [1559.9475, 593.23706],
  [1565.1665, 595.52167],
  [1560.6257, 598.4853],
  [1559.841, 604.63367],
  [1559.6094, 610.95844],
  [1552.2792, 618.13416],
  [1557.6511, 616.31714],
  [1558.8927, 627.876],
  [1565.626, 630.6129],
  [1562.1082, 634.52344],
  [1562.4738, 640.7376],
  [1569.5381, 638.0252],
  [1582.7905, 632.74506],
  [1578.8953, 626.9609],
  [1584.855, 624.01],
  [1581.1815, 618.8455],
  [1576.0416, 620.6472],
  [1573.209, 615.15137],
  [1574.2439, 609.81714],
  [1575.4014, 604.92957],
  [1575.4491, 600.44073],
  [1577.3123, 596.17523],
  [1579.5461, 592.4614],
  [1574.0588, 586.92126],
  [1574.3026, 591.58777],
  [1572.5605, 595.6825],
  [1569.6812, 598.703],
  [1565.1111, 600.8424],
  [1570.0442, 604.0886],
  [1564.5963, 606.4857],
  [1568.0114, 610.57544],
  [1564.7095, 615.08594],
  [1562.2723, 620.24805],
  [1564.9861, 625.06085],
  [1568.8628, 620.0607],
  [1572.0085, 625.5505],
  [1571.0842, 631.13696],
  [1576.2512, 633.3217],
  [1577.1096, 639.21375],
  [1574.6758, 645.07654],
  [1581.2817, 646.58563],
  [1583.0758, 639.99097],
  [1589.0093, 633.98737],
  [1588.6361, 639.3888],
  [1587.5239, 645.94653],
  [1592.5778, 643.5992],
  [1597.1409, 642.6469],
  [1594.631, 637.42676],
  [1598.6669, 631.4779],
  [1602.0759, 635.1739],
  [1600.318, 639.4514],
  [1600.5791, 646.7805],
  [1606.1016, 650.3544],
  [1607.1954, 645.0386],
  [1605.2332, 639.98425],
  [1611.03, 640.4178],
  [1614.7075, 635.8815],
  [1634.2369, 633.90857],
  [1631.4746, 628.01],
  [1641.1577, 637.02686],
  [1634.7255, 640.47504],
  [1628.8998, 643.75757],
  [1631.2144, 650.1741],
  [1623.544, 650.6249],
  [1612.7307, 659.4612],
  [1616.3608, 665.2705],
  [1610.3221, 670.34686],
  [1607.4333, 664.26355],
  [1600.6973, 665.3398],
  [1601.8258, 659.12067],
  [1595.2578, 661.96826],
  [1598.7275, 653.65967],
  [1593.6909, 649.5608],
  [1586.6965, 652.5653],
  [1576.1609, 659.0526],
  [1582.6946, 659.46655],
  [1587.8684, 661.37195],
  [1590.2809, 666.02637],
  [1594.1277, 669.2023],
  [1598.5741, 671.13257],
  [1604.1074, 671.823],
  [1608.1534, 676.99176],
  [1614.6528, 678.4694],
  [1616.0953, 672.68646],
  [1622.4197, 671.80225],
  [1626.8058, 667.2987],
  [1623.4558, 662.3562],
  [1628.3513, 657.11707],
  [1637.6207, 645.9094],
  [1644.3184, 643.80884],
  [1652.095, 643.15857],
  [1651.8073, 653.7612],
  [1656.4558, 657.55664],
  [1654.1908, 648.876],
  [1648.1724, 648.78],
  [1642.3469, 650.5981],
  [1636.773, 653.0952],
  [1639.5588, 665.70874],
  [1637.5898, 672.3683],
  [1630.1023, 673.03296],
  [1632.5513, 665.19885],
  [1634.7703, 659.1782],
  [1641.0359, 658.65173],
  [1646.0127, 655.48114],
  [1645.8331, 663.3946],
  [1650.3448, 659.6449],
  [1654.8357, 663.43317],
  [1651.0508, 667.96783],
  [1645.0321, 670.3838],
  [1636.9518, 685.6605],
  [1635.1498, 692.7204],
  [1627.53, 692.07007],
  [1621.1669, 697.0222],
  [1615.0208, 698.2177],
  [1605.5254, 695.17114],
  [1610.7021, 693.1266],
  [1615.2837, 690.07446],
  [1621.1642, 690.43646],
  [1624.8748, 685.35834],
  [1631.1041, 686.2637],
  [1633.698, 679.3412],
  [1627.3375, 679.31323],
  [1621.1746, 678.62964],
  [1618.1753, 684.2531],
  [1611.5552, 683.5094],
  [1607.917, 687.46875],
  [1604.0621, 682.0764],
  [1599.7173, 677.19855],
  [1598.6989, 686.1181],
  [1602.6826, 690.1056],
  [1599.7434, 696.13086],
  [1595.55, 692.1067],
  [1591.2773, 687.4226],
  [1588.6682, 680.541],
  [1594.9602, 681.80786],
  [1593.0814, 675.83484],
  [1588.1569, 672.2932],
  [1583.607, 675.4022],
  [1579.5476, 671.2055],
  [1584.1753, 667.09607],
  [1578.3969, 664.90247],
  [1571.8219, 664.33716],
  [1573.5977, 669.70874],
  [1574.8376, 675.1626],
  [1578.1262, 679.36786],
  [1582.8442, 681.24976],
  [1584.2113, 686.7881],
  [1586.9796, 692.30096],
  [1580.4906, 693.4643],
  [1574.1593, 695.23425],
  [1585.5591, 698.65204],
  [1591.3967, 696.7795],
  [1595.7296, 700.8754],
  [1601.3773, 702.28467],
  [1597.2947, 708.36414],
  [1585.0171, 705.16595],
  [1591.146, 704.28503],
  [1579.3301, 700.3937],
  [1567.0928, 698.4945],
  [1560.8726, 699.0554],
  [1554.9493, 698.33215],
  [1559.8759, 693.3301],
  [1565.7229, 692.0001],
  [1571.606, 689.83386],
  [1577.5653, 687.15106],
  [1573.0079, 682.2388],
  [1567.7882, 684.8259],
  [1563.9637, 680.76874],
  [1569.3396, 676.7579],
  [1567.8181, 669.7678],
  [1563.905, 674.2644],
  [1559.416, 678.1245],
  [1561.6409, 686.2961],
  [1550.7217, 682.0453],
  [1549.5457, 685.46704],
  [1545.2446, 682.9429],
  [1546.2712, 687.89276],
  [1548.2449, 691.707],
  [1548.6958, 695.7021],
  [1546.7083, 705.83154],
  [1544.2676, 698.91614],
  [1549.2051, 700.33167],
  [1553.767, 693.40936],
  [1552.2029, 688.52844],
  [1556.973, 689.2062],
  [1556.26, 684.26825],
  [1554.9985, 679.9503],
  [1554.0267, 674.9679],
  [1558.2793, 671.9923],
  [1562.0237, 667.8053],
  [1565.4797, 663.21106],
  [1560.0712, 660.63837],
  [1553.3824, 661.76056],
  [1556.9094, 665.7269],
  [1552.9243, 668.92944],
  [1548.9254, 672.95105],
  [1549.6487, 677.9201],
  [1544.9114, 678.26154],
  [1543.7898, 673.81226],
  [1547.9338, 667.6193],
  [1542.6467, 669.4977],
  [1546.9183, 663.15686],
  [1548.0176, 658.3404],
  [1544.301, 655.4269],
  [1548.5875, 651.6764],
  [1545.0103, 648.1161],
  [1542.008, 643.28296],
  [1537.9302, 639.6817],
  [1542.8511, 630.65375],
  [1543.3058, 637.52576],
  [1549.1658, 635.29865],
  [1556.0186, 634.8694],
  [1552.7292, 630.0674],
  [1547.6228, 627.5313],
  [1542.7701, 624.51105],
  [1547.953, 621.09955],
  [1552.6924, 624.2865],
  [1557.3456, 621.9922],
  [1544.041, 618.45996],
  [1539.5841, 620.18695],
  [1535.6455, 614.719],
  [1527.9902, 615.76447],
  [1531.1669, 613.2051],
  [1529.2075, 608.52686],
  [1539.5973, 614.7539],
  [1537.0474, 608.5253],
  [1539.7788, 604.5118],
  [1544.8123, 604.0287],
  [1544.6959, 599.28217],
  [1544.8188, 594.6697],
  [1543.0543, 590.3971],
  [1547.273, 584.10486],
  [1541.0427, 581.49005],
  [1544.4648, 580.4397],
  [1548.1576, 580.4773],
  [1543.5037, 585.13495],
  [1540.138, 587.2847],
  [1547.2577, 588.13226],
  [1548.7727, 592.13495],
  [1550.2352, 596.8939],
  [1552.1433, 588.2551],
  [1551.3147, 584.428],
  [1553.7523, 592.5686],
  [1555.7483, 596.28467],
  [1550.1865, 602.32007],
  [1555.6245, 601.0471],
  [1553.165, 612.533],
  [1554.5956, 606.88257],
  [1549.5034, 608.158],
  [1545.0546, 608.7106],
  [1548.2256, 614.1506],
  [1543.7863, 613.60583],
  [1540.8647, 609.68604],
  [1533.7214, 610.3949],
  [1532.9434, 605.7273],
  [1535.4006, 602.01514],
  [1534.7277, 596.93823],
  [1539.4783, 599.6211],
  [1539.9185, 594.80566],
  [1537.2251, 591.61255],
  [1532.6255, 591.82837],
  [1528.2617, 592.327],
  [1529.8644, 596.86536],
  [1530.7559, 601.2982],
  [1527.294, 604.90814],
  [1525.9093, 600.491],
  [1524.8711, 596.22156],
  [1522.218, 592.33496],
  [1519.6237, 595.688],
  [1522.6399, 604.52515],
  [1520.8811, 600.2373],
  [1518.1519, 605.79663],
  [1507.5168, 606.9264],
  [1508.9932, 611.28394],
  [1504.7722, 610.90845],
  [1501.3557, 609.44617],
  [1505.692, 615.2412],
  [1504.8135, 619.13007],
  [1510.2736, 615.4003],
  [1512.229, 618.58014],
  [1508.573, 619.78815],
  [1507.141, 627.4442],
  [1509.0774, 624.3546],
  [1512.2426, 623.0227],
  [1512.2905, 628.0661],
  [1508.5837, 630.78046],
  [1512.1163, 633.04944],
  [1515.9504, 632.1626],
  [1516.6592, 628.6118],
  [1519.2539, 625.9355],
  [1521.2896, 623.01],
  [1515.729, 624.2885],
  [1515.522, 619.73],
  [1518.7739, 620.1576],
  [1522.6473, 619.10596],
  [1519.5983, 615.3638],
  [1515.623, 615.4072],
  [1513.3087, 612.07715],
  [1512.8291, 607.7401],
  [1512.0516, 602.5227],
  [1507.563, 601.27185],
  [1503.3348, 604.61633],
  [1499.2208, 601.07886],
  [1496.3373, 596.92444],
  [1493.1987, 600.4275],
  [1490.1202, 603.7791],
  [1487.8807, 599.5864],
  [1483.2197, 601.3642],
  [1480.5068, 598.91815],
  [1476.9884, 599.50806],
  [1475.2455, 602.3838],
  [1475.6099, 606.2501],
  [1478.3025, 608.7944],
  [1476.0913, 612.0344],
  [1473.2292, 609.5001],
  [1469.9116, 607.98145],
  [1471.9312, 604.80566],
  [1470.9093, 601.0281],
  [1467.748, 603.6655],
  [1465.8901, 607.0385],
  [1461.9672, 606.2243],
  [1459.257, 609.63525],
  [1456.3491, 612.1946],
  [1452.7432, 610.599],
  [1453.9655, 606.89233],
  [1457.6677, 605.7097],
  [1458.9072, 601.47437],
  [1463.1611, 602.24927],
  [1466.5094, 599.8581],
  [1473.2306, 598.1655],
  [1470.188, 590.47797],
  [1470.1631, 593.7736],
  [1463.1238, 588.7438],
  [1469.388, 587.6345],
  [1469.4954, 583.93066],
  [1473.3967, 586.62634],
  [1477.2673, 587.3303],
  [1473.0059, 582.34045],
  [1476.9062, 582.34143],
  [1480.5453, 585.40356],
  [1484.047, 582.7616],
  [1486.3176, 578.64343],
  [1480.8467, 580.08276],
  [1460.4215, 585.65894],
  [1464.6729, 583.5955],
  [1466.1404, 586.5648],
  [1466.4666, 591.11096],
  [1466.3579, 595.1969],
  [1469.358, 597.31055],
  [1473.706, 594.56287],
  [1477.1011, 595.6824],
  [1473.7991, 590.692],
  [1477.6976, 591.3549],
  [1480.9165, 594.6752],
  [1482.0332, 590.78796],
  [1484.3596, 587.6604],
  [1488.5748, 588.8137],
  [1486.8809, 592.90515],
  [1484.6509, 596.635],
  [1491.1038, 595.80646],
  [1492.2733, 591.2338],
  [1497.7413, 586.3583],
  [1501.541, 589.0175],
  [1496.6462, 591.8137],
  [1500.9008, 594.5104],
  [1501.1997, 581.70667],
  [1492.9269, 586.3026],
  [1487.9043, 584.4735],
  [1490.6257, 581.25476],
  [1492.0504, 576.6431],
  [1495.8342, 580.9558],
  [1497.9053, 575.99115],
  [1501.3118, 567.82544],
  [1506.2266, 568.4374],
  [1507.3617, 572.9581],
  [1509.9434, 576.6974],
  [1513.9688, 573.9713],
  [1519.5693, 572.2901],
  [1522.8047, 575.1689],
  [1519.8881, 568.0304],
  [1522.2546, 564.7482],
  [1521.2545, 560.4834],
  [1526.0602, 557.9675],
  [1525.0592, 561.65],
  [1529.2277, 561.2813],
  [1532.94, 562.78503],
  [1537.0745, 564.04456],
  [1540.5283, 562.76294],
  [1544.3228, 564.0349],
  [1540.317, 567.38684],
  [1534.7307, 567.225],
  [1537.1273, 570.5698],
  [1534.6602, 574.6483],
  [1531.9534, 570.921],
  [1530.1785, 566.7356],
  [1526.5525, 565.543],
  [1523.8802, 569.2646],
  [1526.9883, 571.3644],
  [1529.2004, 574.85657],
  [1531.1177, 578.32697],
  [1534.8672, 579.1674],
  [1538.3564, 578.24927],
  [1542.1218, 576.54614],
  [1539.1094, 574.0048],
  [1542.24, 571.3428],
  [1545.6359, 572.95276],
  [1545.9036, 576.7279],
  [1549.5704, 576.1809],
  [1552.575, 573.2643],
  [1554.7865, 569.9399],
  [1558.7501, 565.8951],
  [1561.954, 567.5176],
  [1564.3091, 564.58875],
  [1567.307, 562.5877],
  [1568.7399, 557.98645],
  [1564.4454, 559.62476],
  [1560.1478, 558.5137],
  [1560.5201, 552.15234],
  [1558.9939, 548.0608],
  [1556.1493, 551.3493],
  [1558.1218, 555.20374],
  [1555.2991, 558.2333],
  [1560.9731, 562.5427],
  [1556.7153, 562.13184],
  [1551.9365, 564.6499],
  [1551.4226, 568.6208],
  [1549.4324, 572.3296],
  [1547.794, 569.1609],
  [1544.6421, 567.8536],
  [1548.2678, 564.79816],
  [1548.0172, 560.653],
  [1543.8633, 560.05835],
  [1545.5767, 556.58203],
  [1548.4805, 553.3994],
  [1549.3054, 548.4425],
  [1546.8904, 544.96936],
  [1551.1354, 544.37994],
  [1560.015, 544.4259],
  [1555.5513, 543.3895],
  [1551.418, 539.81683],
  [1555.4818, 538.7873],
  [1559.2316, 540.338],
  [1558.1101, 535.3633],
  [1561.8018, 533.77905],
  [1555.1036, 531.0567],
  [1552.9657, 535.27954],
  [1547.6714, 535.46387],
  [1559.1504, 530.55286],
  [1556.1455, 526.25366],
  [1555.5786, 521.65405],
  [1551.4795, 523.07983],
  [1548.6182, 520.3038],
  [1545.029, 518.79504],
  [1549.1472, 515.88184],
  [1545.2212, 514.4696],
  [1542.7515, 511.7279],
  [1539.8677, 508.79034],
  [1535.9573, 507.5709],
  [1533.8013, 504.07013],
  [1537.898, 500.89624],
  [1539.6038, 514.1969],
  [1541.3715, 516.85034],
  [1540.5693, 520.1312],
  [1538.0366, 522.68585],
  [1537.9963, 526.7261],
  [1536.6025, 530.66583],
  [1531.2961, 533.21515],
  [1531.1322, 528.3801],
  [1528.7786, 523.7017],
  [1520.1539, 528.36334],
  [1525.4897, 532.0168],
  [1525.1827, 527.0923],
  [1523.4779, 522.10095],
  [1526.3281, 517.4303],
  [1529.0305, 513.43396],
  [1532.8643, 515.7888],
  [1536.3507, 518.4471],
  [1531.3591, 519.8247],
  [1533.8713, 524.07043],
  [1536.4321, 512.9231],
  [1532.8569, 510.7708],
  [1530.31, 507.54623],
  [1507.7776, 511.7341],
  [1509.0391, 504.5063],
  [1514.6215, 501.83582],
  [1518.0564, 497.77136],
  [1511.3115, 497.1783],
  [1500.0195, 497.3368],
  [1495.4761, 493.47763],
  [1497.8225, 487.46127],
  [1500.7651, 482.72974],
  [1491.985, 487.89142],
  [1486.8273, 489.72153],
  [1482.2278, 486.81915],
  [1481.8733, 491.92926],
  [1477.472, 489.93677],
  [1473.6299, 488.187],
  [1472.3173, 492.7835],
  [1468.2849, 496.00757],
  [1472.4387, 499.44492],
  [1477.3264, 496.06],
  [1483.789, 508.38385],
  [1488.0996, 512.62225],
  [1485.9792, 525.96075],
  [1483.2305, 532.67194],
  [1475.3501, 533.8373],
  [1467.5295, 536.05066],
  [1459.1587, 531.8727],
  [1464.3933, 527.7143],
  [1471.1211, 526.55585],
  [1477.9541, 524.51855],
  [1486.1461, 519.5145],
  [1493.3702, 523.8409],
  [1502.3176, 513.28815],
  [1496.4409, 509.89307],
  [1490.8972, 506.44843],
  [1502.1775, 505.8648],
  [1505.2534, 499.3713],
  [1515.8959, 492.04306],
  [1521.0094, 493.4077],
  [1524.1576, 496.8369],
  [1523.9521, 501.16205],
  [1527.4921, 504.61325],
  [1530.0045, 501.29684],
  [1528.6316, 497.37482],
  [1534.0498, 499.64],
  [1533.3031, 495.63428],
  [1530.1875, 492.95746],
  [1525.9482, 492.69043],
  [1527.5182, 488.72055],
  [1522.1412, 489.2943],
  [1523.6685, 485.60947],
  [1527.2689, 483.70142],
  [1528.8262, 480.0245],
  [1532.654, 478.73212],
  [1532.6564, 474.60205],
  [1535.7478, 471.95493],
  [1533.1583, 468.48846],
  [1530.3405, 471.15234],
  [1528.3201, 475.30365],
  [1525.0352, 478.35272],
  [1522.261, 481.68918],
  [1509.4219, 479.41418],
  [1504.9192, 478.34564],
  [1510.1165, 473.57187],
  [1511.6548, 468.1189],
  [1506.842, 468.3382],
  [1506.5002, 463.78305],
  [1510.35, 462.22858],
  [1514.4259, 463.4531],
  [1511.6345, 454.72836],
  [1513.9597, 458.70734],
  [1517.3353, 456.5453],
  [1518.8615, 462.1722],
  [1516.5713, 467.49036],
  [1516.3823, 472.75946],
  [1523.2214, 474.23068],
  [1525.8757, 471.13794],
  [1527.5625, 467.5949],
  [1530.9409, 465.3364],
  [1527.634, 463.39856],
  [1523.6095, 465.2026],
  [1523.5541, 460.64313],
  [1521.3677, 456.94687],
  [1519.2963, 452.5374],
  [1514.892, 452.9842],
  [1519.3262, 448.14014],
  [1519.2462, 444.49078],
  [1517.8088, 440.81842],
  [1515.5012, 437.73972],
  [1519.2606, 436.3862],
  [1522.5756, 438.66925],
  [1522.1555, 442.21454],
  [1526.3457, 443.09714],
  [1526.5043, 437.53583],
  [1530.9513, 436.74338],
  [1535.1663, 435.3282],
  [1538.2177, 431.81223],
  [1534.023, 429.79175],
  [1530.9294, 432.48273],
  [1522.8083, 433.9937],
  [1526.6013, 432.88202],
  [1527.8866, 428.93994],
  [1530.52, 426.01825],
  [1534.2977, 425.0949],
  [1537.7092, 422.6645],
  [1538.8877, 418.65503],
  [1534.8574, 416.5959],
  [1537.1776, 413.60703],
  [1532.919, 412.34802],
  [1528.8812, 412.71368],
  [1525.1482, 412.8237],
  [1523.758, 416.38666],
  [1520.1904, 417.7302],
  [1517.3738, 420.56836],
  [1519.3655, 424.98322],
  [1522.06, 422.33078],
  [1525.418, 420.35703],
  [1527.7959, 417.33185],
  [1531.0552, 416.39203],
  [1533.6467, 420.41855],
  [1529.674, 421.73456],
  [1525.6858, 424.99716],
  [1522.715, 428.76532],
  [1519.1301, 431.97998],
  [1517.5829, 428.6628],
  [1514.6614, 426.0584],
  [1513.5803, 422.4635],
  [1509.381, 420.6914],
  [1509.8567, 426.79602],
  [1508.9446, 431.8486],
  [1513.3888, 430.5964],
  [1515.2642, 434.0462],
  [1511.0132, 435.95844],
  [1512.8677, 439.8822],
  [1512.8379, 443.1761],
  [1515.7512, 445.06848],
  [1515.7744, 449.3381],
  [1523.2878, 446.1389],
  [1522.7225, 449.962],
  [1524.5237, 452.8872],
  [1528.7853, 452.78473],
  [1526.1038, 456.20636],
  [1529.8938, 457.27863],
  [1527.0092, 448.21057],
  [1530.6765, 449.27704],
  [1536.1073, 443.8128],
  [1540.8271, 444.3017],
  [1544.9445, 443.78537],
  [1545.3684, 440.15503],
  [1544.6201, 436.4015],
  [1545.9543, 431.32053],
  [1553.026, 428.25427],
  [1553.977, 432.23044],
  [1550.5273, 431.518],
  [1548.3396, 434.291],
  [1549.1849, 437.3119],
  [1548.8971, 440.31528],
  [1549.3066, 443.3546],
  [1547.8698, 446.75262],
  [1544.3733, 447.54187],
  [1541.0747, 448.58325],
  [1538.022, 447.0577],
  [1536.8801, 450.5404],
  [1537.626, 454.11926],
  [1534.8793, 455.43784],
  [1540.3279, 452.17426],
  [1541.2058, 455.8476],
  [1543.5659, 451.4017],
  [1544.7932, 454.5232],
  [1546.872, 450.81525],
  [1546.001, 457.5597],
  [1543.3945, 459.0832],
  [1548.6556, 458.45993],
  [1550.095, 461.3374],
  [1546.3401, 462.05078],
  [1543.0978, 463.32935],
  [1537.6141, 457.83606],
  [1540.3723, 460.10052],
  [1537.2126, 461.62805],
  [1539.6075, 464.52185],
  [1542.3892, 467.6389],
  [1545.9783, 466.90997],
  [1548.9456, 464.9609],
  [1550.0671, 469.36862],
  [1546.8336, 470.9853],
  [1543.5615, 472.16583],
  [1539.9575, 470.8104],
  [1537.7126, 468.0774],
  [1535.5374, 465.35925],
  [1530.8357, 461.0191],
  [1527.5322, 459.6543],
  [1533.7919, 462.56592],
  [1533.9341, 458.90228],
  [1531.8428, 455.20233],
  [1533.3975, 451.92523],
  [1534.1326, 447.54],
  [1530.8813, 444.91003],
  [1529.4313, 440.78525],
  [1533.464, 440.60275],
  [1537.4116, 439.83197],
  [1541.5139, 440.39532],
  [1539.8523, 436.40045],
  [1542.2996, 432.97412],
  [1542.624, 428.4499],
  [1538.4781, 427.24677],
  [1542.1191, 423.18845],
  [1547.3134, 421.63306],
  [1545.7747, 425.46582],
  [1548.5214, 428.21457],
  [1550.4473, 424.7552],
  [1551.761, 421.0415],
  [1552.6515, 417.68622],
  [1547.8452, 417.50583],
  [1548.5546, 414.09467],
  [1543.7563, 418.66992],
  [1541.4982, 414.9444],
  [1544.8136, 412.30807],
  [1547.1177, 407.59018],
  [1539.8087, 410.58185],
  [1535.4287, 408.92365],
  [1530.785, 408.59567],
  [1526.8983, 408.98956],
  [1525.4648, 405.26038],
  [1524.2302, 401.34457],
  [1525.6548, 397.80356],
  [1522.2877, 395.67926],
  [1522.927, 391.2572],
  [1524.1693, 386.38544],
  [1526.8193, 382.47165],
  [1530.4475, 378.74915],
  [1535.4261, 381.29395],
  [1531.3457, 385.3326],
  [1527.9562, 389.1307],
  [1531.9277, 391.20306],
  [1536.2023, 386.671],
  [1535.0642, 375.25034],
  [1540.283, 378.0301],
  [1545.5017, 375.4304],
  [1541.023, 372.66522],
  [1545.0326, 368.92026],
  [1548.873, 365.6258],
  [1553.7334, 364.74182],
  [1557.9703, 366.01886],
  [1562.2839, 367.14377],
  [1562.8306, 373.0095],
  [1558.4067, 371.53098],
  [1553.5159, 370.31015],
  [1549.8687, 373.10104],
  [1554.4304, 376.36118],
  [1549.648, 378.9701],
  [1545.187, 381.35626],
  [1540.5579, 383.50348],
  [1541.2006, 388.49597],
  [1545.8499, 386.8911],
  [1550.4683, 384.36517],
  [1554.3627, 381.56146],
  [1557.9937, 384.35474],
  [1559.815, 380.54498],
  [1558.8951, 376.4123],
  [1563.023, 377.6302],
  [1566.7288, 376.19968],
  [1569.6123, 378.69748],
  [1569.6471, 382.32422],
  [1573.1094, 379.40448],
  [1576.4402, 377.95813],
  [1579.8185, 375.7563],
  [1581.1135, 379.7049],
  [1577.6964, 381.66797],
  [1577.8394, 385.92102],
  [1576.7302, 388.8947],
  [1579.0261, 390.82886],
  [1582.0765, 390.52783],
  [1584.6151, 392.90686],
  [1585.3789, 397.88336],
  [1581.8824, 398.0639],
  [1581.4519, 394.36035],
  [1577.8762, 393.93073],
  [1578.1257, 397.3825],
  [1574.5059, 399.5029],
  [1574.9424, 403.68146],
  [1574.5992, 395.19507],
  [1574.9231, 391.67523],
  [1571.0082, 392.547],
  [1567.2784, 394.0632],
  [1571.4752, 396.6026],
  [1568.4607, 398.1269],
  [1565.0135, 398.54733],
  [1563.51, 392.82062],
  [1565.9926, 389.67548],
  [1569.3804, 388.79346],
  [1572.7532, 388.95715],
  [1574.6171, 386.1965],
  [1574.4158, 382.73203],
  [1571.3016, 385.18344],
  [1566.9526, 385.405],
  [1566.0017, 380.54077],
  [1563.2278, 383.30402],
  [1562.6233, 387.3375],
  [1559.135, 388.92245],
  [1555.0325, 388.29865],
  [1550.8601, 388.9254],
  [1547.8175, 391.97583],
  [1543.8441, 392.9491],
  [1542.9995, 398.4758],
  [1546.4829, 396.87424],
  [1550.1487, 396.71692],
  [1551.4272, 400.46906],
  [1554.6628, 397.79987],
  [1557.975, 400.2428],
  [1562.5044, 401.8441],
  [1560.8594, 397.25983],
  [1560.0691, 393.0501],
  [1556.5708, 393.9403],
  [1552.4685, 393.2464],
  [1554.6613, 403.22437],
  [1558.7736, 404.3283],
  [1557.9967, 411.11487],
  [1561.588, 410.84604],
  [1560.0288, 407.9139],
  [1563.0112, 405.86533],
  [1566.8079, 403.90308],
  [1570.4163, 401.52695],
  [1571.0164, 405.85748],
  [1565.748, 408.56396],
  [1569.2233, 409.91196],
  [1564.8191, 417.17123],
  [1564.8785, 421.5374],
  [1568.1978, 419.4016],
  [1571.3464, 421.06177],
  [1573.2991, 423.90607],
  [1572.6387, 417.29016],
  [1576.6547, 417.36923],
  [1580.9055, 416.64148],
  [1579.2727, 412.8156],
  [1575.6594, 413.21393],
  [1571.8813, 413.07642],
  [1569.0405, 415.525],
  [1566.676, 413.291],
  [1563.8984, 412.57684],
  [1560.8982, 415.00946],
  [1561.2839, 418.64218],
  [1560.3756, 421.79077],
  [1559.342, 425.08078],
  [1557.083, 427.47202],
  [1554.6064, 424.52954],
  [1556.1984, 421.34933],
  [1557.1235, 417.95004],
  [1556.8594, 414.4519],
  [1552.7499, 414.28882],
  [1549.8121, 410.66895],
  [1554.0947, 410.97736],
  [1555.8445, 407.41687],
  [1551.9188, 407.3364],
  [1550.1919, 404.22083],
  [1547.1876, 401.3509],
  [1544.5198, 403.99023],
  [1541.0345, 402.41528],
  [1542.8826, 407.91107],
  [1538.999, 406.2076],
  [1536.0166, 403.88937],
  [1532.8397, 405.16187],
  [1533.2751, 400.31454],
  [1537.5363, 400.37915],
  [1539.1208, 397.0025],
  [1539.7284, 393.15283],
  [1536.2118, 391.22153],
  [1534.7651, 395.78052],
  [1530.4513, 396.41913],
  [1527.2957, 393.6346],
  [1529.0591, 400.59665],
  [1529.2495, 404.4483],
  [1522.7046, 408.60858],
  [1518.4154, 409.13336],
  [1520.9586, 412.9061],
  [1516.408, 414.15375],
  [1513.2561, 417.55322],
  [1513.5797, 409.61926],
  [1516.2693, 404.45993],
  [1520.926, 404.28845],
  [1519.0032, 399.63678],
  [1517.6206, 394.1961],
  [1511.5752, 403.4176],
  [1509.9889, 413.99512],
  [1505.3729, 423.44086],
  [1504.3123, 428.36972],
  [1504.257, 432.99933],
  [1506.3385, 436.81308],
  [1508.8223, 440.45422],
  [1504.1425, 440.77466],
  [1506.4058, 444.145],
  [1502.8057, 445.74164],
  [1502.7046, 450.62045],
  [1506.8845, 448.53085],
  [1509.7169, 445.16745],
  [1512.4407, 447.5206],
  [1510.8146, 450.65778],
  [1507.2917, 452.97485],
  [1504.0515, 455.21506],
  [1505.662, 459.34192],
  [1509.1453, 457.58932],
  [1502.2473, 462.46408],
  [1502.1257, 466.73325],
  [1501.0442, 458.7345],
  [1499.4856, 454.75354],
  [1497.9331, 451.02875],
  [1498.8033, 446.64252],
  [1494.1329, 448.81577],
  [1494.3274, 454.31723],
  [1490.0752, 451.7961],
  [1482.9448, 458.0278],
  [1479.4102, 460.916],
  [1480.6458, 447.65002],
  [1485.2549, 443.17075],
  [1490.6101, 440.5079],
  [1495.1761, 436.88232],
  [1500.8768, 436.62476],
  [1500.1316, 441.0399],
  [1496.7246, 442.07623],
  [1493.7114, 444.15125],
  [1489.7646, 446.2522],
  [1485.7573, 448.45178],
  [1484.3108, 452.81653],
  [1479.3407, 453.53992],
  [1475.2229, 456.44064],
  [1472.7598, 460.42853],
  [1468.1714, 461.59326],
  [1465.4922, 465.04498],
  [1461.6022, 467.3066],
  [1464.0046, 471.18616],
  [1459.8579, 473.19434],
  [1463.5465, 476.01062],
  [1467.9484, 476.1533],
  [1468.2952, 472.90732],
  [1468.0947, 468.88434],
  [1471.5741, 466.09668],
  [1472.4003, 471.66843],
  [1472.016, 476.82288],
  [1467.2529, 479.56152],
  [1463.2108, 480.5034],
  [1458.3491, 477.73743],
  [1459.2417, 481.95892],
  [1463.3235, 485.76086],
  [1466.8269, 484.01913],
  [1470.4905, 481.26935],
  [1474.6702, 481.21698],
  [1476.0514, 477.47632],
  [1476.4769, 473.5412],
  [1476.3079, 469.01767],
  [1476.1002, 464.23328],
  [1480.7646, 466.73776],
  [1484.636, 464.47394],
  [1487.6649, 461.29797],
  [1487.9882, 456.19366],
  [1492.0221, 458.46954],
  [1496.6538, 458.9282],
  [1497.9011, 463.66586],
  [1499.6299, 470.13947],
  [1504.2355, 472.56006],
  [1499.7017, 476.5162],
  [1495.8375, 472.37582],
  [1495.0469, 467.6629],
  [1492.8412, 463.08868],
  [1489.7426, 466.85516],
  [1485.8608, 470.134],
  [1490.772, 472.18158],
  [1489.5273, 477.52234],
  [1484.6775, 479.67157],
  [1487.807, 483.41418],
  [1494.0566, 481.95355],
  [1494.5256, 476.81952],
  [1485.2515, 474.92294],
  [1481.0796, 471.59738],
  [1480.5736, 476.16193],
  [1479.3418, 480.11377],
  [1481.7449, 483.04987],
  [1477.1067, 484.84082],
  [1471.7936, 484.74387],
  [1468.9451, 488.09686],
  [1466.4863, 491.0731],
  [1462.3971, 489.92914],
  [1459.1295, 492.1157],
  [1455.8633, 494.4074],
  [1452.1058, 492.51917],
  [1447.6807, 491.84882],
  [1449.4218, 482.50824],
  [1454.6631, 474.45435],
  [1452.8625, 478.81152],
  [1454.7092, 483.43506],
  [1458.8896, 486.47314],
  [1455.2297, 488.7256],
  [1450.9966, 487.47482],
  [1446.3953, 487.2365],
  [1436.5955, 490.20673],
  [1442.0396, 490.2258],
  [1440.0802, 494.6871],
  [1444.3538, 495.2419],
  [1450.1097, 496.8658],
  [1445.8037, 499.52],
  [1441.48, 502.31345],
  [1438.3623, 498.9293],
  [1435.4639, 494.84653],
  [1431.6494, 492.33636],
  [1428.927, 496.3559],
  [1433.288, 498.58673],
  [1431.0303, 502.364],
  [1435.9153, 503.27966],
  [1438.9812, 507.40192],
  [1444.5203, 508.42197],
  [1446.7576, 504.30157],
  [1451.5106, 502.1278],
  [1455.0411, 499.1639],
  [1459.6904, 498.27704],
  [1463.3564, 495.1368],
  [1464.8243, 501.05807],
  [1464.8911, 507.42035],
  [1458.4412, 504.80124],
  [1452.2001, 507.378],
  [1449.223, 512.454],
  [1440.4254, 512.7428],
  [1437.172, 516.77734],
  [1434.3701, 512.4421],
  [1433.7437, 507.85483],
  [1429.3132, 506.59503],
  [1424.8572, 506.7933],
  [1428.5098, 511.4846],
  [1431.5135, 516.6123],
  [1431.769, 524.5111],
  [1434.3379, 521.11615],
  [1438.7307, 522.02783],
  [1442.3812, 519.0971],
  [1445.9344, 516.22974],
  [1448.6486, 522.2707],
  [1443.9565, 524.72064],
  [1455.0353, 526.73926],
  [1449.0825, 528.78516],
  [1443.7913, 530.979],
  [1435.492, 527.9586],
  [1439.6979, 527.0869],
  [1438.8136, 533.50024],
  [1433.9454, 532.8357],
  [1430.5618, 536.0523],
  [1430.633, 528.9504],
  [1427.4636, 531.83057],
  [1422.9387, 533.2287],
  [1418.3339, 537.2751],
  [1392.5308, 533.9542],
  [1399.5554, 531.1277],
  [1395.0933, 527.8944],
  [1394.5063, 523.20825],
  [1396.533, 519.0765],
  [1400.2683, 523.64746],
  [1401.3672, 518.0913],
  [1398.9302, 515.078],
  [1395.2034, 514.4282],
  [1392.3657, 516.329],
  [1392.6676, 507.20642],
  [1392.106, 511.38055],
  [1396.7249, 510.93698],
  [1399.733, 508.53564],
  [1401.616, 512.09485],
  [1409.205, 512.63684],
  [1408.9224, 507.85007],
  [1410.9836, 504.45648],
  [1412.8878, 510.8923],
  [1413.5496, 515.658],
  [1415.8477, 520.171],
  [1417.9971, 524.6306],
  [1422.7678, 522.30426],
  [1422.3463, 517.9092],
  [1418.5221, 516.4581],
  [1417.7769, 511.91473],
  [1422.5935, 511.79602],
  [1426.3104, 515.7632],
  [1428.3123, 520.5249],
  [1427.0342, 525.59326],
  [1422.8188, 527.9155],
  [1417.8887, 530.7566],
  [1413.1841, 529.2145],
  [1412.4175, 524.18115],
  [1410.3505, 520.3919],
  [1409.0208, 516.5961],
  [1405.8679, 523.7245],
  [1408.5664, 528.48364],
  [1403.9487, 529.0757],
  [1405.2094, 519.4115],
  [1404.9432, 514.8033],
  [1405.575, 510.57098],
  [1403.7183, 506.96033],
  [1405.7312, 503.5715],
  [1407.5312, 500.04904],
  [1405.6047, 496.11053],
  [1401.6677, 494.09958],
  [1401.4646, 497.84384],
  [1401.7655, 501.15515],
  [1399.8374, 504.32867],
  [1396.109, 506.19443],
  [1392.9807, 502.451],
  [1396.5742, 500.62497],
  [1397.338, 496.4039],
  [1400.496, 490.28827],
  [1405.0336, 490.7754],
  [1409.1545, 492.00702],
  [1411.9263, 500.11935],
  [1415.4806, 507.68576],
  [1420.0669, 506.2474],
  [1415.9291, 502.97473],
  [1415.2786, 497.5886],
  [1418.958, 498.62122],
  [1422.4792, 501.339],
  [1426.714, 500.5678],
  [1419.6456, 491.67136],
  [1422.7968, 495.72336],
  [1425.997, 491.94745],
  [1424.1918, 487.26953],
  [1419.0552, 486.35474],
  [1414.1837, 484.42563],
  [1414.0762, 489.42563],
  [1414.8181, 493.62982],
  [1410.3472, 495.87802],
  [1409.3689, 487.603],
  [1405.0376, 485.424],
  [1401.8494, 486.7882],
  [1398.022, 485.87677],
  [1394.797, 488.46045],
  [1397.3206, 492.1629],
  [1393.1694, 492.65927],
  [1392.6566, 496.48907],
  [1390.0002, 499.05426],
  [1386.1812, 497.25415],
  [1388.1008, 493.07153],
  [1390.1978, 489.09473],
  [1393.1716, 484.32318],
  [1384.6052, 487.3905],
  [1383.6699, 491.32684],
  [1382.761, 495.4355],
  [1379.4921, 491.8562],
  [1380.037, 487.08026],
  [1376.0563, 489.82797],
  [1377.6224, 495.36142],
  [1379.9078, 498.55756],
  [1382.2329, 501.56677],
  [1386.1268, 501.53186],
  [1389.0688, 503.94855],
  [1388.9369, 507.8252],
  [1387.3124, 510.62646],
  [1388.6604, 514.91095],
  [1385.5719, 518.4082],
  [1390.5449, 519.7749],
  [1383.1699, 522.18506],
  [1383.8154, 527.50085],
  [1379.1702, 527.89514],
  [1378.1079, 522.91907],
  [1378.9954, 518.2577],
  [1381.9543, 515.6238],
  [1384.7224, 513.30505],
  [1382.3995, 509.6311],
  [1384.7522, 505.95908],
  [1380.1455, 505.57782],
  [1377.3032, 502.18823],
  [1375.3514, 498.90622],
  [1372.0181, 497.10718],
  [1374.0283, 493.53854],
  [1371.0435, 490.977],
  [1367.5205, 490.38705],
  [1364.084, 492.311],
  [1363.6542, 496.16943],
  [1360.3502, 490.37875],
  [1365.2255, 486.80225],
  [1369.6115, 485.2328],
  [1372.628, 487.77136],
  [1361.3811, 485.1838],
  [1356.9021, 485.04712],
  [1352.1003, 487.13336],
  [1348.308, 489.51184],
  [1347.6128, 484.99802],
  [1344.4933, 487.77094],
  [1347.1394, 493.15],
  [1343.5992, 491.3083],
  [1342.5131, 498.23236],
  [1343.8196, 501.90402],
  [1343.6414, 494.84836],
  [1346.8972, 497.42172],
  [1348.4026, 501.07227],
  [1350.915, 505.56506],
  [1346.9619, 505.03174],
  [1353.888, 501.87488],
  [1351.9143, 498.56244],
  [1350.4894, 495.05023],
  [1352.084, 491.5728],
  [1355.2202, 494.525],
  [1356.1838, 489.69772],
  [1359.5609, 495.11057],
  [1357.1311, 498.63898],
  [1358.5903, 502.72873],
  [1362.4056, 504.5006],
  [1362.4238, 499.97092],
  [1355.2815, 506.00958],
  [1358.7457, 508.37402],
  [1363.5663, 508.7851],
  [1366.5763, 505.46127],
  [1367.2911, 501.8142],
  [1367.4927, 498.12592],
  [1368.743, 494.635],
  [1371.8915, 501.35138],
  [1370.9032, 505.51376],
  [1375.1365, 505.4675],
  [1377.4462, 509.17316],
  [1379.131, 512.81323],
  [1375.1917, 514.11176],
  [1374.1285, 518.41986],
  [1372.8766, 522.8135],
  [1364.563, 525.25635],
  [1369.2766, 526.6336],
  [1374.4684, 528.06946],
  [1371.0577, 531.77844],
  [1378.4283, 533.4761],
  [1385.3325, 533.41925],
  [1388.6316, 523.7827],
  [1389.1844, 528.75745],
  [1386.736, 560.5067],
  [1380.9998, 558.3639],
  [1375.2148, 561.6781],
  [1373.7618, 566.16016],
  [1369.6526, 567.2146],
  [1372.8997, 571.121],
  [1372.8328, 575.5233],
  [1371.5225, 579.51495],
  [1372.5344, 583.6969],
  [1376.4801, 583.6058],
  [1379.6914, 586.193],
  [1379.7728, 590.55444],
  [1375.8228, 592.5847],
  [1371.2308, 591.946],
  [1369.5939, 587.1057],
  [1374.6443, 588.0336],
  [1366.6553, 590.5282],
  [1362.398, 589.4551],
  [1354.8986, 591.37616],
  [1358.2468, 588.66833],
  [1362.6263, 594.265],
  [1367.3105, 595.3694],
  [1357.9131, 594.1481],
  [1359.6927, 598.46643],
  [1360.9578, 603.15576],
  [1364.3489, 599.289],
  [1361.665, 607.4071],
  [1361.4116, 611.6308],
  [1356.7222, 610.3094],
  [1352.6072, 613.27344],
  [1349.6047, 617.1568],
  [1351.1139, 621.7118],
  [1354.1357, 617.79266],
  [1357.856, 614.9042],
  [1358.0879, 620.02386],
  [1361.4094, 618.2433],
  [1363.4177, 622.05615],
  [1355.332, 623.00903],
  [1352.9064, 626.1814],
  [1348.6261, 626.22626],
  [1343.9376, 624.76526],
  [1346.5134, 621.5536],
  [1345.0795, 617.64386],
  [1346.2451, 613.85065],
  [1348.7778, 610.7595],
  [1352.1356, 607.80096],
  [1347.4575, 606.021],
  [1345.592, 601.93695],
  [1351.1831, 602.46594],
  [1356.3264, 606.02356],
  [1356.3484, 602.0856],
  [1354.3998, 598.3995],
  [1348.5294, 597.9769],
  [1352.0845, 594.9562],
  [1350.4314, 590.89197],
  [1347.1348, 588.40076],
  [1345.0894, 584.67487],
  [1342.4236, 588.9896],
  [1346.617, 593.36395],
  [1353.053, 587.3751],
  [1355.4241, 584.0654],
  [1360.2806, 584.3583],
  [1364.8582, 585.3207],
  [1368.352, 582.4257],
  [1364.6528, 580.3073],
  [1360.9922, 579.8125],
  [1359.284, 575.67487],
  [1363.876, 574.9724],
  [1367.6808, 577.4149],
  [1368.8531, 573.40625],
  [1366.403, 570.47363],
  [1364.8235, 566.4796],
  [1364.099, 562.33044],
  [1366.4292, 557.5542],
  [1369.5479, 562.08997],
  [1371.9231, 556.9588],
  [1377.714, 553.1485],
  [1376.393, 557.5422],
  [1373.5408, 550.1749],
  [1366.066, 542.61224],
  [1366.2449, 534.72064],
  [1364.5486, 530.01587],
  [1359.9868, 533.58673],
  [1356.4902, 530.3019],
  [1359.7279, 526.6854],
  [1357.683, 521.9462],
  [1362.3977, 521.20593],
  [1364.707, 516.89136],
  [1367.7634, 521.2942],
  [1369.5586, 517.3124],
  [1370.6971, 513.35223],
  [1373.126, 509.72028],
  [1368.522, 509.24988],
  [1366.1036, 512.8053],
  [1361.3544, 512.6957],
  [1359.9242, 517.1149],
  [1355.2214, 517.4288],
  [1351.3947, 514.6157],
  [1356.6589, 513.0944],
  [1353.2317, 510.16925],
  [1348.4321, 510.45917],
  [1344.2437, 507.89462],
  [1340.6934, 504.58868],
  [1339.5367, 509.0398],
  [1334.9666, 509.3658],
  [1336.0703, 504.49756],
  [1338.6237, 500.0493],
  [1336.2427, 496.3202],
  [1339.802, 494.5395],
  [1337.0212, 490.74493],
  [1340.498, 489.44995],
  [1338.2341, 486.04938],
  [1334.5653, 486.3624],
  [1331.4872, 488.14413],
  [1327.3936, 488.05002],
  [1322.9395, 488.23138],
  [1325.1259, 483.02167],
  [1320.7814, 484.04144],
  [1317.2065, 487.3305],
  [1319.7036, 492.42926],
  [1316.1489, 496.46118],
  [1311.7104, 498.71075],
  [1306.9529, 499.74557],
  [1301.6454, 502.13116],
  [1302.6124, 507.19748],
  [1301.669, 512.2013],
  [1301.1116, 516.9169],
  [1305.7296, 515.6261],
  [1306.3347, 510.5788],
  [1308.0958, 505.92218],
  [1310.7301, 512.44696],
  [1310.709, 517.07324],
  [1307.8478, 519.8477],
  [1304.1885, 521.5447],
  [1297.8384, 518.96704],
  [1296.0159, 521.9596],
  [1300.6074, 523.04126],
  [1300.5303, 527.9507],
  [1296.71, 525.7219],
  [1291.9154, 527.3353],
  [1287.9913, 528.76056],
  [1284.8297, 525.46265],
  [1287.46, 520.26746],
  [1288.6252, 524.1024],
  [1292.4541, 523.47766],
  [1292.3546, 519.43005],
  [1290.651, 515.88934],
  [1295.4365, 515.5894],
  [1297.3313, 511.6303],
  [1297.9266, 506.9875],
  [1295.8331, 502.67688],
  [1293.0834, 506.73993],
  [1288.6406, 507.98093],
  [1292.6998, 511.3691],
  [1288.45, 512.37366],
  [1284.8331, 510.63824],
  [1286.0358, 515.7551],
  [1283.4435, 518.6807],
  [1281.9496, 522.31757],
  [1280.2483, 526.14343],
  [1276.4364, 527.38965],
  [1276.7516, 522.48755],
  [1276.6257, 514.08185],
  [1271.106, 514.7756],
  [1266.8629, 517.64343],
  [1264.639, 521.5465],
  [1260.305, 522.41736],
  [1256.6187, 519.98364],
  [1256.3944, 515.3168],
  [1255.9882, 510.74228],
  [1258.905, 507.44794],
  [1260.6251, 503.54077],
  [1258.8196, 499.30066],
  [1254.1611, 500.93298],
  [1254.3137, 505.60187],
  [1250.0009, 507.598],
  [1248.6256, 503.04745],
  [1248.9313, 498.8097],
  [1252.739, 495.95325],
  [1252.787, 491.23767],
  [1255.0842, 487.1535],
  [1248.5693, 481.63794],
  [1250.376, 486.16602],
  [1253.7184, 482.49963],
  [1258.6399, 490.9301],
  [1257.3752, 495.23874],
  [1263.1292, 494.47174],
  [1263.611, 488.94995],
  [1259.2977, 485.80722],
  [1256.0568, 476.95618],
  [1251.3251, 475.015],
  [1246.6019, 473.96075],
  [1244.6366, 478.86407],
  [1239.5459, 484.83954],
  [1235.7224, 486.35718],
  [1238.0918, 480.80865],
  [1227.775, 481.95822],
  [1221.9166, 481.5179],
  [1220.0686, 485.90085],
  [1222.1404, 490.1683],
  [1217.4741, 490.00116],
  [1212.0717, 494.47162],
  [1208.9539, 495.81464],
  [1207.4716, 499.1418],
  [1207.1229, 502.80487],
  [1207.4128, 506.73895],
  [1204.0957, 509.42188],
  [1202.4812, 498.3678],
  [1202.5061, 502.88574],
  [1200.2408, 506.76093],
  [1195.3169, 507.3093],
  [1198.302, 511.52875],
  [1193.9044, 512.45026],
  [1188.6343, 512.8216],
  [1190.8497, 508.669],
  [1188.2738, 505.34393],
  [1187.3743, 501.57565],
  [1186.4004, 497.47107],
  [1189.6652, 495.1251],
  [1191.6538, 499.2104],
  [1192.7938, 503.2326],
  [1197.5157, 502.64258],
  [1197.4464, 498.30237],
  [1194.3516, 495.56467],
  [1197.2108, 492.0783],
  [1200.4, 494.4093],
  [1205.0847, 494.37463],
  [1208.1113, 490.5672],
  [1213.2926, 490.7143],
  [1211.6193, 487.03058],
  [1215.9186, 484.5206],
  [1213.9695, 475.82416],
  [1225.1493, 485.94272],
  [1231.0913, 485.74457],
  [1227.8423, 490.0885],
  [1232.5923, 490.66452],
  [1237.339, 492.60986],
  [1240.6675, 489.04245],
  [1242.8138, 493.34442],
  [1243.4253, 498.89514],
  [1238.0088, 497.76608],
  [1239.1533, 502.77414],
  [1235.7561, 506.39865],
  [1231.2006, 507.3753],
  [1226.8538, 505.56967],
  [1222.082, 507.56976],
  [1217.8579, 504.62793],
  [1218.53, 499.79004],
  [1223.5188, 500.97626],
  [1227.8197, 495.9356],
  [1228.946, 500.54205],
  [1233.6095, 501.54663],
  [1232.7662, 495.80344],
  [1224.602, 493.79758],
  [1221.0372, 495.6803],
  [1216.562, 494.82886],
  [1213.6476, 499.03146],
  [1212.0283, 502.93146],
  [1213.2197, 507.45612],
  [1216.59, 511.39972],
  [1218.8561, 516.2767],
  [1212.4849, 515.44617],
  [1209.0651, 519.3283],
  [1204.3921, 518.7826],
  [1206.9286, 514.60223],
  [1209.8501, 511.00214],
  [1202.6001, 513.199],
  [1200.4027, 516.43463],
  [1196.2134, 517.4896],
  [1191.9163, 516.646],
  [1191.7272, 521.93665],
  [1193.9333, 527.6317],
  [1196.3298, 523.51556],
  [1200.1936, 521.1532],
  [1205.2935, 523.44324],
  [1210.5457, 529.37354],
  [1214.4779, 532.3834],
  [1219.116, 535.0398],
  [1227.472, 536.71326],
  [1223.904, 532.92145],
  [1227.3994, 523.64514],
  [1222.7084, 526.05725],
  [1227.0574, 529.03687],
  [1230.7891, 532.5148],
  [1233.3656, 537.92786],
  [1241.8604, 544.74066],
  [1247.1979, 546.4227],
  [1243.3667, 551.368],
  [1238.7114, 540.50977],
  [1239.2516, 535.9469],
  [1235.9836, 533.217],
  [1235.1865, 528.8942],
  [1231.6694, 526.6988],
  [1233.6537, 522.30865],
  [1239.2246, 527.6062],
  [1238.988, 523.18134],
  [1237.7078, 517.8312],
  [1235.4076, 511.71655],
  [1240.9696, 513.47406],
  [1233.0378, 516.11487],
  [1228.5321, 512.1907],
  [1223.3099, 513.039],
  [1228.8175, 518.61456],
  [1223.8683, 519.14],
  [1219.7477, 522.14453],
  [1215.9072, 526.2373],
  [1219.4921, 529.85065],
  [1215.5098, 519.58014],
  [1212.5935, 522.292],
  [1209.6831, 525.2916],
  [1208.6987, 533.8702],
  [1204.2596, 533.1178],
  [1205.0504, 528.5433],
  [1200.633, 526.19275],
  [1205.4392, 539.57837],
  [1197.8496, 539.3444],
  [1198.7666, 530.74603],
  [1200.8386, 535.88104],
  [1211.2449, 537.5965],
  [1216.2582, 539.15643],
  [1211.8053, 543.4048],
  [1217.6929, 545.48315],
  [1222.3015, 539.6808],
  [1224.1461, 545.3999],
  [1229.1283, 542.166],
  [1229.4863, 549.2765],
  [1234.773, 544.63275],
  [1237.3928, 550.0527],
  [1239.0012, 557.3135],
  [1232.9823, 554.7179],
  [1242.2444, 561.5254],
  [1237.6885, 564.8864],
  [1232.803, 561.2997],
  [1231.8291, 567.5681],
  [1241.088, 569.01215],
  [1240.6989, 577.0715],
  [1236.0765, 576.72815],
  [1236.4705, 571.54285],
  [1229.6519, 573.47296],
  [1232.848, 580.3988],
  [1232.0725, 586.3833],
  [1226.6799, 590.0748],
  [1229.1118, 605.446],
  [1233.2133, 607.4485],
  [1237.4934, 604.3227],
  [1242.1882, 605.2734],
  [1246.427, 603.85046],
  [1244.1869, 609.15137],
  [1247.2856, 607.7114],
  [1250.7703, 608.47424],
  [1252.3223, 612.4922],
  [1248.2797, 612.1264],
  [1241.1309, 610.8224],
  [1238.4225, 608.3314],
  [1235.494, 611.0068],
  [1235.2733, 615.94946],
  [1229.4907, 617.3772],
  [1229.5273, 611.6371],
  [1232.4847, 613.6299],
  [1225.3777, 614.6328],
  [1224.3668, 618.67944],
  [1229.116, 622.03815],
  [1232.4983, 624.1439],
  [1237.3389, 626.8701],
  [1239.5275, 623.4966],
  [1242.6038, 626.78796],
  [1244.9302, 630.21564],
  [1241.6003, 636.9061],
  [1244.4966, 640.6286],
  [1246.2644, 635.58905],
  [1250.4569, 634.4409],
  [1248.8987, 631.1737],
  [1247.8821, 627.43286],
  [1246.8156, 623.87537],
  [1243.2, 623.3867],
  [1244.9053, 620.5193],
  [1250.8146, 624.5137],
  [1253.7958, 621.2187],
  [1250.2928, 620.67236],
  [1247.6427, 619.27234],
  [1242.8606, 617.7219],
  [1241.2885, 615.13464],
  [1241.0114, 620.3177],
  [1237.983, 618.59216],
  [1236.0583, 622.79614],
  [1233.4147, 619.53955],
  [1238.3583, 613.58496],
  [1244.5215, 612.9085],
  [1245.9202, 616.06165],
  [1249.5825, 615.9447],
  [1256.0038, 613.4533],
  [1259.4464, 615.3835],
  [1252.9233, 616.8298],
  [1256.2893, 618.2057],
  [1263.029, 614.01685],
  [1259.0813, 610.3495],
  [1260.8254, 605.9879],
  [1260.1951, 601.37885],
  [1259.3489, 596.4739],
  [1256.2095, 591.99365],
  [1250.0461, 589.84863],
  [1251.9899, 594.2232],
  [1255.2104, 596.6184],
  [1255.8064, 600.8144],
  [1256.4021, 604.9402],
  [1254.809, 608.62024],
  [1251.3207, 599.4259],
  [1251.4132, 603.9926],
  [1241.5117, 600.52905],
  [1246.712, 599.9001],
  [1247.701, 595.14343],
  [1238.0769, 582.76733],
  [1243.6254, 581.50476],
  [1245.3492, 588.02734],
  [1245.5574, 576.7148],
  [1243.093, 572.76013],
  [1244.3368, 565.75024],
  [1247.7424, 568.74963],
  [1247.8408, 572.44055],
  [1253.5339, 578.04395],
  [1256.1187, 581.42163],
  [1258.1743, 577.25256],
  [1260.3906, 572.4187],
  [1256.0658, 567.8512],
  [1260.0361, 568.2422],
  [1264.2642, 568.98755],
  [1269.01, 567.9988],
  [1269.942, 563.70264],
  [1268.9135, 559.3799],
  [1269.4336, 554.6474],
  [1273.9828, 554.49194],
  [1274.8837, 560.22534],
  [1280.3018, 560.54614],
  [1285.5823, 560.5435],
  [1289.951, 563.2934],
  [1291.3726, 567.746],
  [1284.929, 565.90674],
  [1281.9241, 570.3817],
  [1279.1832, 565.63574],
  [1274.0328, 566.5201],
  [1277.0454, 570.8522],
  [1272.6826, 571.7481],
  [1274.3397, 576.3883],
  [1271.9707, 580.2258],
  [1270.2162, 583.78613],
  [1265.9442, 582.52716],
  [1266.6663, 578.3363],
  [1269.8024, 575.7577],
  [1268.1444, 571.9109],
  [1264.7626, 573.4541],
  [1262.4303, 576.40515],
  [1261.7596, 580.29517],
  [1260.0084, 583.6115],
  [1263.4678, 586.51746],
  [1267.3218, 588.03265],
  [1268.4702, 593.52057],
  [1268.7744, 597.23956],
  [1272.7539, 600.09015],
  [1279.5798, 593.8708],
  [1276.936, 589.6399],
  [1281.2086, 587.9049],
  [1284.3268, 584.4165],
  [1289.3755, 584.69635],
  [1286.7126, 579.6443],
  [1291.2739, 580.0363],
  [1294.8113, 582.9618],
  [1293.8082, 588.1194],
  [1288.6744, 589.66394],
  [1284.3435, 590.9672],
  [1281.0469, 599.2582],
  [1276.9592, 598.7519],
  [1273.907, 595.5189],
  [1272.823, 591.7809],
  [1271.869, 588.0352],
  [1274.6825, 584.8801],
  [1278.9474, 584.16785],
  [1277.2751, 580.224],
  [1282.0549, 579.49304],
  [1284.2734, 574.7816],
  [1278.9283, 575.34406],
  [1287.5542, 570.7126],
  [1289.6843, 575.1919],
  [1293.6669, 571.994],
  [1295.4226, 564.5803],
  [1297.6953, 569.0287],
  [1300.71, 565.30835],
  [1299.3208, 560.77454],
  [1297.9414, 556.52106],
  [1294.406, 559.7932],
  [1290.1508, 558.27936],
  [1287.5216, 554.63654],
  [1282.9342, 555.9463],
  [1278.6837, 554.07404],
  [1283.8008, 550.71436],
  [1280.4177, 547.5879],
  [1275.7856, 549.1724],
  [1270.9749, 549.4539],
  [1267.1531, 545.3003],
  [1265.4072, 540.58105],
  [1260.374, 539.641],
  [1263.0995, 535.64606],
  [1262.0673, 530.9027],
  [1258.4011, 534.2543],
  [1255.6996, 538.11035],
  [1252.3645, 541.3329],
  [1252.4764, 546.3363],
  [1257.302, 544.12695],
  [1262.2208, 544.53314],
  [1261.362, 549.2928],
  [1266.2286, 550.29395],
  [1264.3691, 555.15784],
  [1263.1654, 559.9502],
  [1264.4591, 564.5086],
  [1258.8529, 563.9181],
  [1257.8282, 559.49225],
  [1258.9545, 554.5741],
  [1256.0979, 550.0943],
  [1250.2817, 551.61084],
  [1253.1191, 556.4171],
  [1246.1063, 556.33386],
  [1253.485, 562.1127],
  [1247.9362, 560.7031],
  [1249.2057, 564.58984],
  [1252.3479, 567.20593],
  [1252.6553, 571.6251],
  [1256.1969, 573.3506],
  [1250.5054, 575.40735],
  [1248.7163, 579.5084],
  [1250.5674, 583.14685],
  [1254.0735, 586.8175],
  [1258.6315, 588.1592],
  [1261.7021, 591.33856],
  [1263.5403, 595.074],
  [1264.0809, 598.7658],
  [1264.4612, 602.811],
  [1268.4415, 601.0442],
  [1269.5299, 604.54443],
  [1270.4016, 608.73474],
  [1273.5127, 604.63196],
  [1277.4764, 603.39954],
  [1281.3451, 604.7465],
  [1290.8442, 605.0207],
  [1286.6244, 606.22034],
  [1292.26, 609.53723],
  [1295.3037, 612.9911],
  [1298.9141, 620.84875],
  [1298.4023, 624.68097],
  [1295.3306, 627.09564],
  [1302.1064, 627.167],
  [1302.6597, 623.3798],
  [1306.1461, 626.1854],
  [1304.4722, 630.1258],
  [1307.9746, 631.1905],
  [1304.5314, 634.4625],
  [1305.4202, 638.5387],
  [1308.7291, 635.4532],
  [1310.0756, 639.56177],
  [1306.8547, 642.48987],
  [1303.0354, 644.0989],
  [1306.6998, 647.05225],
  [1310.8169, 644.20154],
  [1308.7344, 650.78595],
  [1312.123, 648.41486],
  [1315.5631, 645.8845],
  [1319.5994, 647.07855],
  [1323.5933, 645.9148],
  [1329.6672, 649.57684],
  [1333.4973, 648.94464],
  [1336.4604, 655.41095],
  [1337.1279, 651.34143],
  [1341.1458, 649.05237],
  [1345.5627, 650.786],
  [1341.6523, 654.1948],
  [1346.587, 655.58325],
  [1350.337, 652.516],
  [1352.2659, 656.6046],
  [1356.1897, 653.3155],
  [1361.3059, 652.8335],
  [1364.3171, 656.8944],
  [1358.23, 658.17194],
  [1362.027, 661.8668],
  [1356.5474, 664.897],
  [1361.0518, 667.0574],
  [1363.6467, 671.3858],
  [1357.9778, 671.57965],
  [1353.2893, 670.1279],
  [1348.3285, 669.18036],
  [1350.6838, 664.95624],
  [1353.7273, 660.88934],
  [1348.3309, 660.3788],
  [1343.6202, 659.691],
  [1339.1735, 658.7017],
  [1334.1272, 659.5631],
  [1334.7169, 664.43225],
  [1329.3662, 662.71094],
  [1327.1772, 667.549],
  [1332.0095, 668.3143],
  [1324.7834, 672.66394],
  [1329.6152, 673.5137],
  [1334.2881, 672.52856],
  [1334.3728, 678.13824],
  [1337.2778, 683.3192],
  [1343.3025, 684.07556],
  [1347.86, 679.8765],
  [1341.5525, 677.579],
  [1338.7319, 673.09247],
  [1338.7524, 667.9081],
  [1339.8008, 663.19525],
  [1344.6681, 665.23773],
  [1343.4204, 671.0077],
  [1347.6863, 674.4717],
  [1353.0225, 676.526],
  [1358.2971, 677.1462],
  [1361.5088, 682.1634],
  [1359.8518, 686.9621],
  [1354.7413, 683.1581],
  [1349.5428, 685.86566],
  [1341.0049, 689.832],
  [1348.7719, 691.5617],
  [1341.5907, 702.46234],
  [1335.9546, 695.45087],
  [1334.5996, 701.69824],
  [1328.5306, 701.3883],
  [1322.7859, 702.1957],
  [1329.303, 695.1615],
  [1323.0066, 694.61646],
  [1316.7512, 692.5476],
  [1318.0682, 698.3864],
  [1312.4452, 697.6867],
  [1307.0074, 695.0941],
  [1311.0367, 690.6986],
  [1305.5027, 690.2416],
  [1301.3118, 682.9595],
  [1298.3296, 679.03046],
  [1295.0627, 674.54065],
  [1300.5786, 674.4913],
  [1305.0859, 679.3142],
  [1309.3801, 676.40344],
  [1313.8535, 678.885],
  [1321.7445, 669.257],
  [1317.9115, 667.3002],
  [1314.2229, 669.7956],
  [1313.9435, 674.01807],
  [1318.5657, 674.3516],
  [1322.1985, 677.51514],
  [1327.845, 678.3809],
  [1330.5566, 683.5576],
  [1334.0212, 689.2058],
  [1320.8862, 687.8639],
  [1327.2292, 689.00195],
  [1324.1162, 683.10596],
  [1318.0676, 681.7512],
  [1314.7368, 686.5004],
  [1310.4548, 682.82],
  [1306.343, 685.30725],
  [1300.6277, 688.0173],
  [1295.5947, 690.34784],
  [1300.6692, 693.3777],
  [1301.9218, 698.5886],
  [1306.7676, 700.82776],
  [1296.4094, 697.5365],
  [1291.2657, 698.3654],
  [1283.9384, 695.1997],
  [1277.8429, 693.4524],
  [1275.166, 688.13184],
  [1279.5841, 684.2485],
  [1274.4658, 680.8729],
  [1268.7043, 680.629],
  [1269.0758, 686.9575],
  [1262.3766, 683.7358],
  [1257.6355, 678.68933],
  [1252.3242, 673.4491],
  [1243.5724, 674.4574],
  [1247.7325, 669.6884],
  [1242.9382, 666.27814],
  [1246.0768, 660.6273],
  [1249.7428, 664.17773],
  [1240.1731, 661.23804],
  [1238.1028, 669.81726],
  [1235.2153, 664.3688],
  [1232.8933, 659.0253],
  [1234.9219, 653.1279],
  [1238.0144, 656.70984],
  [1243.3556, 655.6333],
  [1245.8617, 650.79834],
  [1250.6637, 649.0023],
  [1252.8108, 652.3805],
  [1248.9487, 655.5957],
  [1252.5438, 659.7395],
  [1255.4376, 655.93427],
  [1252.5305, 645.33234],
  [1253.917, 641.42664],
  [1257.6067, 639.3772],
  [1261.6967, 640.64185],
  [1262.8535, 644.7275],
  [1257.7875, 644.8474],
  [1256.8473, 649.4037],
  [1262.4263, 649.0486],
  [1267.4197, 650.0541],
  [1267.6178, 645.1282],
  [1266.8022, 640.81323],
  [1271.8369, 646.46313],
  [1276.1733, 648.9844],
  [1280.7727, 648.7915],
  [1284.8207, 648.74884],
  [1288.5247, 646.57947],
  [1292.2219, 648.81287],
  [1296.3344, 649.47],
  [1299.2427, 652.5471],
  [1293.7838, 654.1523],
  [1294.3074, 659.2559],
  [1299.1564, 661.05524],
  [1299.7744, 665.26776],
  [1304.0817, 664.42303],
  [1303.682, 660.15356],
  [1298.9729, 656.66736],
  [1294.9502, 664.4576],
  [1290.2408, 662.89075],
  [1289.0975, 657.3417],
  [1285.2423, 660.8157],
  [1285.9226, 665.7921],
  [1280.4036, 665.2665],
  [1281.9403, 669.7455],
  [1277.3871, 670.77966],
  [1275.0653, 667.83185],
  [1270.874, 667.17896],
  [1270.2825, 661.09845],
  [1265.3745, 659.29987],
  [1259.8254, 658.3927],
  [1259.5563, 653.3085],
  [1264.0159, 654.16644],
  [1268.3767, 655.3069],
  [1272.2935, 656.6074],
  [1272.263, 651.63666],
  [1275.793, 659.2498],
  [1276.4668, 655.04504],
  [1279.46, 652.6877],
  [1288.96, 651.9774],
  [1284.7731, 653.7344],
  [1281.8337, 656.9092],
  [1280.0916, 660.9691],
  [1274.9901, 663.3512],
  [1267.1, 670.8369],
  [1261.6365, 668.06836],
  [1266.4767, 664.92395],
  [1261.8721, 662.97656],
  [1256.8597, 663.1062],
  [1254.0215, 667.3943],
  [1257.3577, 671.4043],
  [1261.5784, 674.1329],
  [1265.6593, 676.6737],
  [1272.0349, 674.1406],
  [1277.6486, 675.458],
  [1281.356, 679.52747],
  [1285.8386, 683.7937],
  [1282.5966, 688.85535],
  [1287.8589, 690.1777],
  [1291.6615, 693.2604],
  [1290.9596, 685.6454],
  [1296.0626, 684.6282],
  [1292.757, 679.96045],
  [1289.8903, 674.48126],
  [1287.3094, 678.88873],
  [1283.4102, 674.82635],
  [1286.4674, 670.9699],
  [1290.5352, 668.5204],
  [1294.6433, 669.5045],
  [1298.8145, 669.66345],
  [1303.4012, 669.476],
  [1305.345, 673.6512],
  [1309.5396, 670.9075],
  [1307.689, 667.2251],
  [1308.8977, 663.0372],
  [1307.9467, 659.1835],
  [1313.9475, 661.4459],
  [1313.0099, 665.55444],
  [1319.0217, 662.0014],
  [1323.5974, 664.0791],
  [1316.4529, 657.14886],
  [1320.6511, 656.04443],
  [1324.3171, 659.272],
  [1329.274, 657.6778],
  [1331.9641, 653.79236],
  [1326.075, 654.11176],
  [1325.8251, 649.43774],
  [1321.7601, 651.3302],
  [1317.0074, 651.19275],
  [1313.1558, 653.1234],
  [1311.9485, 657.604],
  [1308.4161, 654.8471],
  [1303.7588, 655.8807],
  [1304.3488, 651.8402],
  [1302.0, 648.6475],
  [1299.019, 646.06836],
  [1298.4342, 642.041],
  [1301.6884, 640.16705],
  [1300.5787, 636.66595],
  [1297.1067, 635.1835],
  [1300.8883, 632.25964],
  [1299.0073, 628.71924],
  [1296.3956, 631.45374],
  [1291.8381, 624.884],
  [1286.8928, 622.7489],
  [1288.4048, 626.7407],
  [1285.4551, 629.1705],
  [1288.9991, 631.7362],
  [1292.4578, 629.8177],
  [1292.8314, 634.56555],
  [1291.5438, 638.67505],
  [1295.6877, 639.20404],
  [1294.8513, 644.56647],
  [1291.2178, 643.0615],
  [1287.561, 640.63007],
  [1288.0691, 636.1504],
  [1284.6489, 634.0188],
  [1281.4269, 630.9862],
  [1277.3573, 631.73663],
  [1273.6853, 629.97095],
  [1272.669, 624.514],
  [1269.7438, 620.75586],
  [1267.795, 625.3916],
  [1265.5491, 622.16016],
  [1261.714, 623.2284],
  [1263.6361, 627.1824],
  [1259.249, 626.8633],
  [1257.1322, 629.9249],
  [1253.6296, 632.0169],
  [1252.5521, 628.30554],
  [1254.9792, 625.3638],
  [1257.6099, 622.67957],
  [1259.814, 619.51],
  [1263.4622, 618.4874],
  [1267.4607, 617.21155],
  [1267.3904, 613.0542],
  [1265.8762, 606.4606],
  [1263.8949, 609.59503],
  [1271.7764, 614.6105],
  [1276.7576, 614.9237],
  [1276.3597, 608.218],
  [1273.7114, 618.91327],
  [1276.85, 622.4436],
  [1279.2336, 618.76807],
  [1284.0332, 619.0565],
  [1281.8665, 623.00684],
  [1282.1152, 626.8042],
  [1277.3464, 626.8801],
  [1269.8699, 628.56604],
  [1265.9421, 631.0984],
  [1270.0356, 633.1607],
  [1274.6002, 635.6918],
  [1277.9618, 639.54395],
  [1280.0388, 635.4637],
  [1283.2384, 639.0017],
  [1284.7975, 643.85205],
  [1280.5732, 643.91565],
  [1276.1722, 644.1763],
  [1272.5975, 641.1279],
  [1270.01, 637.51495],
  [1265.4418, 636.0338],
  [1261.2245, 636.2059],
  [1261.5756, 631.56775],
  [1257.6436, 634.2423],
  [1254.2017, 636.5418],
  [1250.2784, 638.2208],
  [1248.8477, 641.5747],
  [1247.1426, 645.59845],
  [1242.6317, 645.89545],
  [1239.6287, 640.8052],
  [1234.7656, 641.39294],
  [1229.956, 642.61176],
  [1232.7844, 633.8238],
  [1236.9357, 636.0522],
  [1242.201, 633.2091],
  [1240.0432, 630.2786],
  [1236.1276, 631.1605],
  [1232.5061, 628.331],
  [1227.7764, 626.8439],
  [1225.2212, 622.6063],
  [1220.0186, 621.3538],
  [1222.6477, 625.1022],
  [1222.2664, 628.3742],
  [1218.9114, 629.59326],
  [1217.8754, 633.0605],
  [1213.5802, 633.4341],
  [1214.6372, 629.01263],
  [1211.7405, 624.8787],
  [1209.9009, 629.49304],
  [1210.238, 635.625],
  [1206.0488, 636.85046],
  [1206.128, 631.6787],
  [1202.0681, 628.9963],
  [1205.7719, 625.2023],
  [1209.0032, 620.3842],
  [1201.0701, 621.5138],
  [1198.3564, 625.9618],
  [1197.4218, 631.4487],
  [1192.7122, 631.97656],
  [1189.88, 635.82715],
  [1186.8188, 632.40106],
  [1183.5856, 629.1273],
  [1189.2721, 628.47736],
  [1193.4779, 626.33167],
  [1190.1785, 621.948],
  [1185.2188, 620.9371],
  [1191.0859, 616.78143],
  [1195.3972, 621.0721],
  [1196.9988, 616.4431],
  [1199.9092, 612.63135],
  [1204.3347, 618.23987],
  [1205.1296, 613.951],
  [1209.4058, 613.02625],
  [1212.8907, 616.4442],
  [1214.938, 620.7346],
  [1217.4077, 625.2389],
  [1219.2935, 616.80066],
  [1221.7126, 611.7108],
  [1226.0776, 609.4293],
  [1223.1886, 605.6143],
  [1218.7324, 607.37036],
  [1214.3008, 605.5974],
  [1213.2513, 610.156],
  [1216.944, 612.8203],
  [1208.6011, 606.5351],
  [1204.5212, 609.2407],
  [1201.2223, 605.9949],
  [1196.1333, 607.2534],
  [1193.3065, 611.8419],
  [1187.7208, 611.76697],
  [1190.2936, 607.0143],
  [1184.246, 608.3792],
  [1186.1279, 616.4833],
  [1182.3716, 613.274],
  [1178.9851, 609.87396],
  [1174.1499, 610.51404],
  [1172.5872, 615.41614],
  [1177.5106, 614.86383],
  [1181.3364, 618.39954],
  [1176.8936, 619.63257],
  [1171.818, 620.11835],
  [1168.7863, 629.0578],
  [1174.3248, 629.39545],
  [1178.8345, 628.7576],
  [1186.0919, 625.3074],
  [1181.0201, 624.03516],
  [1176.1146, 624.19226],
  [1171.8206, 625.2129],
  [1167.436, 623.87286],
  [1166.6704, 619.46094],
  [1167.029, 614.81226],
  [1169.472, 611.3395],
  [1162.2687, 616.40295],
  [1158.7593, 611.483],
  [1163.9062, 610.3367],
  [1159.2972, 595.66156],
  [1160.3724, 590.30145],
  [1167.1093, 590.5939],
  [1168.2323, 581.9778],
  [1170.0062, 576.3147],
  [1174.6058, 574.205],
  [1175.5773, 568.88965],
  [1180.0007, 564.6574],
  [1185.7433, 562.2999],
  [1189.1694, 558.0529],
  [1186.1711, 553.28235],
  [1188.5789, 548.0425],
  [1190.034, 537.326],
  [1194.84, 534.6139],
  [1190.7684, 531.27313],
  [1186.2003, 532.1821],
  [1184.3079, 536.55774],
  [1187.6775, 526.38324],
  [1186.1978, 521.77765],
  [1187.5502, 517.5121],
  [1182.506, 518.59753],
  [1177.5867, 519.1211],
  [1181.6514, 524.0592],
  [1176.5977, 527.6733],
  [1172.0468, 529.4552],
  [1176.473, 522.7548],
  [1174.7577, 516.1651],
  [1171.8275, 523.1367],
  [1170.895, 518.4776],
  [1175.793, 511.42426],
  [1173.1188, 507.35263],
  [1173.8289, 503.3498],
  [1178.4501, 502.39856],
  [1177.8987, 506.87057],
  [1180.7037, 510.29367],
  [1179.3912, 514.8644],
  [1184.0161, 513.8209],
  [1185.3953, 509.10388],
  [1182.8805, 505.30038],
  [1182.8492, 500.64624],
  [1178.9806, 497.69382],
  [1182.722, 495.7124],
  [1179.9594, 492.35718],
  [1175.6125, 493.94028],
  [1173.2391, 489.94763],
  [1168.4948, 490.24106],
  [1164.8698, 493.28833],
  [1160.0933, 493.37228],
  [1156.059, 491.95703],
  [1162.0863, 497.21054],
  [1164.3494, 505.00668],
  [1163.1411, 501.37878],
  [1158.352, 500.66513],
  [1158.7158, 504.6633],
  [1161.007, 507.4924],
  [1159.3082, 510.96494],
  [1158.0002, 514.77313],
  [1154.4491, 511.93185],
  [1155.0374, 507.66016],
  [1154.0054, 503.32822],
  [1152.6245, 499.3811],
  [1156.9738, 496.81882],
  [1152.512, 495.1086],
  [1147.4177, 499.39832],
  [1149.4856, 504.386],
  [1149.8627, 509.42416],
  [1144.9963, 506.55844],
  [1144.8624, 511.87158],
  [1140.8925, 514.4382],
  [1140.8418, 524.89954],
  [1146.2512, 527.67676],
  [1149.8696, 530.8352],
  [1154.4834, 532.583],
  [1156.8882, 528.29895],
  [1161.5232, 524.60034],
  [1166.774, 521.4442],
  [1167.2057, 526.4453],
  [1172.7937, 534.73785],
  [1177.9784, 533.6324],
  [1180.6128, 538.40424],
  [1182.7769, 547.5711],
  [1185.1809, 542.76733],
  [1179.6393, 543.26044],
  [1177.1532, 547.8983],
  [1173.9678, 544.1013],
  [1168.9583, 546.82635],
  [1172.2158, 549.6924],
  [1175.7146, 553.68066],
  [1180.6483, 552.3612],
  [1180.9005, 557.95966],
  [1175.9205, 560.24786],
  [1172.0149, 557.5907],
  [1169.3229, 553.7644],
  [1165.5015, 551.08765],
  [1164.0178, 547.0915],
  [1159.7793, 546.70807],
  [1155.0098, 547.54926],
  [1146.5176, 547.63275],
  [1142.3685, 548.8442],
  [1137.9713, 546.9948],
  [1139.7996, 543.0327],
  [1144.8665, 543.16327],
  [1150.1538, 544.98267],
  [1153.0312, 542.12885],
  [1156.5895, 542.4789],
  [1160.4392, 541.7604],
  [1164.8008, 542.20856],
  [1169.0732, 542.2682],
  [1172.0693, 539.29535],
  [1176.3936, 539.11414],
  [1168.0012, 532.1886],
  [1167.7356, 537.36896],
  [1162.4979, 537.81964],
  [1164.1572, 534.0552],
  [1162.742, 529.43396],
  [1159.4713, 532.95514],
  [1157.8295, 537.20825],
  [1153.6946, 537.64844],
  [1149.9946, 535.28687],
  [1149.346, 540.3453],
  [1146.165, 538.20276],
  [1145.1252, 533.79236],
  [1142.2521, 530.2958],
  [1138.9019, 534.3455],
  [1141.981, 538.43195],
  [1137.0472, 538.91284],
  [1132.9956, 541.171],
  [1133.6294, 545.5128],
  [1134.0771, 550.4604],
  [1138.1584, 552.4575],
  [1147.1674, 558.3216],
  [1145.4114, 564.0089],
  [1151.0355, 562.61316],
  [1157.3909, 565.3074],
  [1155.9979, 561.1346],
  [1158.837, 557.61145],
  [1162.5321, 561.8594],
  [1169.2528, 568.89636],
  [1173.0137, 564.39966],
  [1168.2456, 562.5206],
  [1166.1067, 557.7331],
  [1162.4253, 554.6157],
  [1158.6166, 551.5258],
  [1153.6174, 553.1217],
  [1152.5707, 557.3996],
  [1150.7396, 549.57983],
  [1147.2631, 552.91925],
  [1142.4192, 554.504],
  [1133.5043, 556.1259],
  [1137.3069, 557.93024],
  [1141.9839, 559.7909],
  [1138.0303, 563.0003],
  [1132.5205, 562.2425],
  [1128.9385, 566.9287],
  [1126.5931, 562.1456],
  [1128.6888, 557.9864],
  [1122.7645, 556.881],
  [1121.9839, 561.7173],
  [1122.2482, 566.2186],
  [1116.1658, 564.27484],
  [1118.1243, 560.0644],
  [1113.1101, 560.2895],
  [1110.1809, 562.69434],
  [1107.633, 565.82697],
  [1105.3679, 562.14465],
  [1100.8174, 562.07776],
  [1102.8761, 566.12805],
  [1098.2618, 566.7804],
  [1092.066, 567.9215],
  [1095.4305, 570.66174],
  [1097.5844, 574.67285],
  [1100.4886, 570.89746],
  [1105.0496, 569.7644],
  [1103.9408, 574.0783],
  [1100.8594, 577.3009],
  [1102.4188, 583.57404],
  [1104.4437, 579.5728],
  [1112.9343, 576.81305],
  [1113.0807, 582.1159],
  [1108.6687, 581.1947],
  [1108.0334, 576.83044],
  [1109.1132, 573.1244],
  [1109.5491, 569.41736],
  [1112.8308, 567.0757],
  [1114.2206, 572.1308],
  [1118.0217, 568.65283],
  [1119.4814, 573.17175],
  [1117.4292, 578.1051],
  [1118.0225, 583.577],
  [1122.7098, 584.02734],
  [1122.1333, 578.7904],
  [1124.4553, 574.8209],
  [1124.768, 570.0665],
  [1128.9811, 573.7588],
  [1133.1062, 571.68744],
  [1135.0621, 567.2975],
  [1139.1865, 572.2423],
  [1140.9639, 567.17786],
  [1150.289, 567.5314],
  [1145.1652, 570.7051],
  [1149.6968, 574.25696],
  [1155.1359, 570.5382],
  [1162.787, 567.8102],
  [1165.5527, 572.58844],
  [1164.5684, 577.5115],
  [1159.519, 573.4071],
  [1159.2261, 578.9314],
  [1162.4678, 582.42786],
  [1164.3209, 586.5121],
  [1157.8097, 584.92334],
  [1154.7676, 590.6378],
  [1149.4766, 588.5467],
  [1152.7428, 584.00354],
  [1154.1692, 577.91675],
  [1147.7754, 581.0315],
  [1142.975, 577.3555],
  [1136.7959, 577.0576],
  [1131.9756, 578.3236],
  [1127.1825, 580.1659],
  [1126.9092, 586.13354],
  [1125.9558, 591.35156],
  [1129.3131, 596.2299],
  [1132.1936, 600.54236],
  [1137.9539, 599.17395],
  [1143.3407, 599.9043],
  [1135.8075, 592.1085],
  [1131.372, 590.0839],
  [1131.9274, 584.33765],
  [1136.6375, 583.3092],
  [1141.0626, 584.3503],
  [1144.7623, 587.3364],
  [1140.8013, 592.4902],
  [1146.0773, 594.1947],
  [1151.6628, 595.08997],
  [1155.774, 599.7232],
  [1149.2552, 600.71814],
  [1152.3494, 605.56067],
  [1157.6387, 617.73816],
  [1153.0524, 615.60846],
  [1151.542, 620.2819],
  [1146.3013, 620.62646],
  [1154.1361, 625.85443],
  [1156.9991, 622.5141],
  [1161.9667, 622.35126],
  [1163.5449, 626.98035],
  [1158.7167, 628.96204],
  [1160.9838, 635.57227],
  [1167.1248, 636.7662],
  [1164.548, 631.93677],
  [1171.2106, 633.518],
  [1176.1888, 634.18286],
  [1180.9819, 633.3091],
  [1184.4718, 636.52655],
  [1188.1887, 640.5729],
  [1192.4457, 644.37604],
  [1197.2554, 643.026],
  [1193.0806, 639.37964],
  [1196.2943, 636.46326],
  [1201.6561, 634.6028],
  [1200.5804, 639.17487],
  [1202.3661, 643.38403],
  [1200.8875, 647.7362],
  [1196.4198, 649.117],
  [1195.904, 654.8795],
  [1201.5355, 654.2096],
  [1204.5549, 650.98285],
  [1208.9752, 650.97943],
  [1213.743, 651.4694],
  [1216.7277, 647.8009],
  [1219.9656, 644.5587],
  [1219.2087, 640.6542],
  [1214.9692, 643.2575],
  [1211.5304, 646.4703],
  [1206.7306, 645.93524],
  [1205.9954, 640.9968],
  [1210.4677, 641.0975],
  [1214.2621, 638.6019],
  [1217.8054, 636.73694],
  [1222.0808, 636.81146],
  [1222.4729, 633.0864],
  [1225.5278, 630.8663],
  [1229.2019, 631.95215],
  [1231.3677, 638.0217],
  [1227.0365, 636.515],
  [1224.3237, 640.2938],
  [1225.181, 644.11145],
  [1228.8107, 647.4419],
  [1233.9712, 647.69727],
  [1237.9679, 645.4812],
  [1239.919, 650.7898],
  [1230.3928, 652.3631],
  [1228.0779, 656.8397],
  [1228.5969, 663.65027],
  [1231.3433, 670.13416],
  [1222.1564, 664.56555],
  [1216.273, 663.8889],
  [1211.6456, 661.5007],
  [1224.1587, 659.70325],
  [1218.9489, 651.99634],
  [1222.5585, 648.0786],
  [1225.574, 651.4026],
  [1222.6699, 654.77966],
  [1219.0184, 658.4054],
  [1215.035, 656.26434],
  [1209.9365, 655.87634],
  [1205.7156, 659.79816],
  [1199.807, 659.51215],
  [1194.4817, 662.0775],
  [1190.489, 656.7475],
  [1187.4365, 661.0325],
  [1176.7529, 663.3694],
  [1177.0709, 656.0492],
  [1171.667, 660.16394],
  [1155.442, 639.6955],
  [1155.9672, 634.23755],
  [1152.2463, 630.4943],
  [1148.4547, 625.73206],
  [1145.7144, 630.7215],
  [1141.5037, 626.2606],
  [1139.4135, 632.1627],
  [1143.7196, 636.98865],
  [1149.7164, 635.7094],
  [1148.5209, 642.62366],
  [1141.6735, 644.2582],
  [1138.0297, 639.79156],
  [1135.0498, 645.9658],
  [1131.686, 641.57654],
  [1128.6348, 637.1553],
  [1122.5703, 637.8854],
  [1119.1575, 647.76355],
  [1119.3179, 642.61096],
  [1123.1168, 663.6895],
  [1117.4264, 664.5862],
  [1110.856, 664.63873],
  [1108.6611, 659.0483],
  [1114.5327, 659.2488],
  [1105.0089, 664.49316],
  [1100.8038, 668.59155],
  [1094.233, 666.8994],
  [1103.1782, 675.79126],
  [1098.5376, 673.25757],
  [1093.8292, 674.02057],
  [1088.5432, 675.3982],
  [1084.4896, 680.1472],
  [1091.1433, 680.5132],
  [1097.8871, 680.35144],
  [1107.1362, 670.7177],
  [1108.4417, 677.4409],
  [1112.9508, 673.60614],
  [1113.4999, 669.041],
  [1119.3164, 670.0016],
  [1125.2291, 669.5278],
  [1128.4125, 664.2192],
  [1136.3763, 651.90845],
  [1128.9652, 648.38184],
  [1125.6976, 643.41125],
  [1134.6862, 635.5956],
  [1131.7069, 631.4917],
  [1134.523, 627.4022],
  [1116.8495, 614.1362],
  [1128.2983, 607.1095],
  [1124.1161, 601.36115],
  [1122.2465, 595.1749],
  [1120.1902, 589.28723],
  [1117.2021, 598.72437],
  [1110.3765, 598.03357],
  [1115.27, 592.7427],
  [1114.0029, 587.28064],
  [1109.4364, 591.166],
  [1107.9246, 585.8768],
  [1103.2213, 588.94653],
  [1098.2885, 586.6031],
  [1093.8085, 582.0457],
  [1097.8643, 580.5724],
  [1093.9242, 588.1992],
  [1093.1293, 593.3707],
  [1098.9878, 593.47314],
  [1104.7819, 594.6552],
  [1103.3243, 600.0957],
  [1107.7515, 604.903],
  [1102.786, 608.823],
  [1097.7207, 611.85785],
  [1090.4703, 612.6175],
  [1089.3594, 619.9586],
  [1084.8483, 632.2097],
  [1088.3298, 637.91736],
  [1080.456, 642.93555],
  [1076.2717, 639.9186],
  [1082.0444, 637.297],
  [1076.9938, 626.50903],
  [1076.9172, 620.5475],
  [1082.829, 620.10187],
  [1084.7048, 614.9621],
  [1077.6805, 614.5605],
  [1076.6682, 603.2447],
  [1075.9847, 593.6858],
  [1079.5739, 591.261],
  [1084.1278, 589.5801],
  [1088.8046, 588.5952],
  [1088.3529, 594.2456],
  [1082.55, 595.053],
  [1085.7736, 599.00903],
  [1091.0012, 600.70306],
  [1095.888, 598.34766],
  [1098.4935, 603.5061],
  [1093.804, 606.91437],
  [1087.9647, 606.13525],
  [1083.0745, 609.4058],
  [1076.9956, 608.74927],
  [1082.3345, 602.9333],
  [1077.6808, 598.2405],
  [1076.1089, 587.96985],
  [1080.3685, 585.7938],
  [1084.793, 584.18604],
  [1089.7109, 583.5347],
  [1085.7786, 579.4094],
  [1089.5178, 577.73975],
  [1093.7246, 576.28534],
  [1090.0817, 572.4742],
  [1085.5762, 569.62933],
  [1083.7404, 574.18604],
  [1081.0312, 579.2477],
  [1076.5549, 582.5929],
  [1076.4053, 577.4091],
  [1077.2468, 573.01965],
  [1079.3381, 569.0199],
  [1082.7437, 565.4055],
  [1088.0999, 565.5255],
  [1086.1854, 561.6443],
  [1090.2695, 560.8308],
  [1092.9164, 563.86475],
  [1096.7122, 562.83997],
  [1094.6747, 559.087],
  [1098.8263, 558.1011],
  [1101.8154, 554.1607],
  [1103.3894, 557.9105],
  [1107.7909, 558.35504],
  [1110.7211, 555.5053],
  [1114.7229, 556.4154],
  [1118.0315, 554.4745],
  [1119.8334, 550.5763],
  [1124.1787, 547.6486],
  [1125.232, 553.04926],
  [1130.028, 553.3193],
  [1129.0823, 548.66614],
  [1128.5192, 543.5471],
  [1123.7413, 541.7302],
  [1119.5519, 544.44434],
  [1115.279, 547.2388],
  [1112.1765, 550.98737],
  [1106.6561, 553.13086],
  [1105.6809, 548.33514],
  [1110.0045, 545.3754],
  [1114.5457, 541.5698],
  [1119.3088, 538.0842],
  [1123.5161, 534.8926],
  [1127.3784, 538.0176],
  [1132.2888, 536.49457],
  [1133.7458, 532.14636],
  [1137.3257, 528.98755],
  [1127.8525, 532.0019],
  [1130.8693, 527.73083],
  [1134.873, 524.2001],
  [1137.43, 519.6064],
  [1142.3759, 519.6657],
  [1146.6212, 517.3486],
  [1150.1384, 514.3796],
  [1154.0488, 517.11633],
  [1151.1345, 520.70593],
  [1146.4678, 522.87964],
  [1151.6365, 526.18915],
  [1156.0726, 523.1953],
  [1158.2906, 519.2219],
  [1162.6262, 519.888],
  [1162.377, 515.2029],
  [1163.7809, 510.52338],
  [1167.1396, 512.1244],
  [1166.6523, 516.31635],
  [1171.3151, 513.944],
  [1170.7944, 510.17255],
  [1167.6895, 507.4344],
  [1168.835, 503.2962],
  [1170.7626, 499.3861],
  [1174.7372, 498.6296],
  [1170.4866, 494.64935],
  [1166.6676, 498.19666],
  [1164.2162, 488.0443],
  [1160.0879, 488.42184],
  [1164.2362, 483.31235],
  [1168.5332, 485.30295],
  [1173.3715, 484.6902],
  [1169.8615, 480.02136],
  [1174.3726, 476.9555],
  [1179.031, 474.00775],
  [1183.2305, 476.61768],
  [1182.1246, 483.28293],
  [1177.667, 481.415],
  [1177.8397, 487.71033],
  [1182.6929, 488.4134],
  [1185.7244, 492.2208],
  [1187.4768, 485.59286],
  [1186.4382, 480.56525],
  [1190.7473, 481.57516],
  [1193.1759, 485.06696],
  [1197.9979, 484.13123],
  [1200.0659, 479.98438],
  [1194.8378, 478.85712],
  [1188.7885, 475.3305],
  [1190.4158, 469.81555],
  [1194.4227, 473.80902],
  [1196.8835, 469.582],
  [1203.2806, 469.44598],
  [1200.3743, 474.34753],
  [1204.3259, 477.6999],
  [1209.1246, 479.2091],
  [1207.7239, 473.60535],
  [1209.5945, 466.8216],
  [1215.2668, 464.64194],
  [1221.4504, 467.305],
  [1225.5565, 464.31207],
  [1231.0554, 462.802],
  [1241.3274, 464.8791],
  [1236.3003, 464.20984],
  [1246.126, 468.63068],
  [1250.6742, 468.3498],
  [1254.9844, 469.67615],
  [1264.4288, 470.2641],
  [1269.8983, 469.50766],
  [1268.7388, 474.53827],
  [1259.3158, 472.68906],
  [1259.4099, 466.9481],
  [1246.8684, 463.794],
  [1241.8627, 470.3971],
  [1236.0764, 470.00107],
  [1230.2231, 469.0588],
  [1232.95, 480.72617],
  [1243.1461, 482.8729],
  [1245.2277, 486.57928],
  [1247.6184, 490.16754],
  [1247.6145, 494.61215],
  [1243.8923, 504.41998],
  [1240.2856, 508.53696],
  [1245.4956, 509.25507],
  [1246.3866, 513.7964],
  [1251.2963, 512.4199],
  [1252.1687, 517.66156],
  [1247.9213, 518.541],
  [1242.8224, 518.31085],
  [1244.2928, 522.8021],
  [1248.4735, 524.3897],
  [1252.2651, 522.4241],
  [1255.8677, 524.88245],
  [1252.077, 527.8194],
  [1248.664, 530.3611],
  [1244.4215, 527.6598],
  [1241.4963, 531.76764],
  [1245.8999, 533.6296],
  [1243.7002, 537.8888],
  [1247.1168, 541.04565],
  [1249.9242, 536.64954],
  [1253.0796, 533.31635],
  [1256.3176, 529.9872],
  [1259.4666, 527.0536],
  [1263.5338, 526.0499],
  [1266.7781, 528.2508],
  [1267.1641, 532.522],
  [1270.9128, 529.63043],
  [1272.6841, 525.3041],
  [1268.4567, 523.93005],
  [1271.4126, 520.3682],
  [1274.8961, 518.1167],
  [1279.2738, 518.3611],
  [1281.4818, 514.1615],
  [1281.1597, 509.43927],
  [1277.4045, 509.42938],
  [1273.3142, 510.3808],
  [1269.1658, 508.61243],
  [1266.3158, 512.7542],
  [1261.4828, 517.417],
  [1261.2655, 512.5285],
  [1263.9971, 507.72397],
  [1267.663, 503.46454],
  [1263.7097, 499.87033],
  [1267.9419, 497.5943],
  [1272.8207, 499.9668],
  [1273.3666, 505.00018],
  [1278.5155, 504.58246],
  [1283.0668, 505.5505],
  [1286.8639, 504.20322],
  [1290.3561, 502.25848],
  [1292.7191, 497.83038],
  [1288.0752, 495.3651],
  [1284.2997, 500.59348],
  [1281.834, 496.58026],
  [1278.397, 500.06125],
  [1276.5798, 495.0747],
  [1271.9414, 494.18042],
  [1268.2137, 491.1524],
  [1273.1187, 477.7418],
  [1278.0879, 477.8415],
  [1275.0507, 472.97974],
  [1279.6692, 470.46124],
  [1284.5364, 471.3521],
  [1289.8845, 472.4411],
  [1297.8715, 480.0311],
  [1300.7429, 485.4088],
  [1305.1101, 489.22028],
  [1303.9203, 495.61444],
  [1298.3748, 497.1285],
  [1299.7736, 491.61142],
  [1293.9883, 492.86115],
  [1295.5012, 486.83063],
  [1291.4648, 483.3349],
  [1288.4753, 479.21786],
  [1285.7198, 475.9325],
  [1281.134, 475.27094],
  [1293.1295, 477.0438],
  [1305.3665, 482.4553],
  [1312.9913, 483.46832],
  [1309.6101, 486.74814],
  [1309.3381, 493.53912],
  [1313.8711, 491.00458],
  [1325.0598, 492.81128],
  [1327.2902, 496.65707],
  [1327.0002, 500.71698],
  [1331.7427, 496.69232],
  [1329.7183, 492.5577],
  [1333.847, 492.4665],
  [1333.3488, 500.4443],
  [1330.7457, 504.388],
  [1330.3115, 508.91257],
  [1328.6466, 512.8701],
  [1333.3384, 513.8919],
  [1335.9154, 517.82965],
  [1338.7305, 521.58496],
  [1341.1296, 525.17737],
  [1344.7693, 526.4194],
  [1348.3682, 528.5517],
  [1348.7402, 523.65137],
  [1349.1, 518.79706],
  [1346.3455, 515.3251],
  [1343.197, 512.2974],
  [1338.342, 513.5552],
  [1341.3937, 517.1752],
  [1344.4275, 520.6804],
  [1352.9006, 521.1183],
  [1353.9021, 525.70593],
  [1352.1426, 530.237],
  [1349.8584, 533.35767],
  [1354.3517, 534.7751],
  [1357.6733, 538.21075],
  [1362.5638, 538.6531],
  [1360.3933, 542.79803],
  [1362.5261, 547.33887],
  [1367.8473, 547.9169],
  [1371.4319, 544.91925],
  [1369.3429, 553.10724],
  [1364.8563, 551.8484],
  [1357.5123, 546.59686],
  [1355.599, 542.53467],
  [1352.9216, 539.0167],
  [1348.8291, 540.5703],
  [1349.165, 536.84625],
  [1344.7776, 535.6907],
  [1345.2686, 539.33734],
  [1344.0923, 542.7431],
  [1340.9747, 541.85],
  [1337.6692, 540.3207],
  [1341.1433, 538.01636],
  [1340.7662, 534.1148],
  [1345.9507, 532.221],
  [1342.6565, 530.119],
  [1338.6157, 529.7064],
  [1336.9958, 526.112],
  [1333.3191, 526.9103],
  [1334.1724, 522.63513],
  [1331.4431, 519.7401],
  [1328.9084, 516.9316],
  [1323.7336, 513.4398],
  [1325.1711, 509.27673],
  [1324.4813, 504.7026],
  [1322.0969, 497.1341],
  [1319.9816, 501.44287],
  [1314.9437, 503.27142],
  [1313.1597, 508.43506],
  [1319.7834, 508.40393],
  [1324.6451, 518.11804],
  [1326.7596, 521.9321],
  [1329.8428, 524.501],
  [1330.3966, 529.53876],
  [1327.7135, 532.46045],
  [1327.073, 527.6259],
  [1323.8015, 525.8685],
  [1321.7754, 522.8776],
  [1320.1777, 518.9963],
  [1319.8325, 514.8727],
  [1316.3999, 512.0026],
  [1315.1473, 516.7631],
  [1312.9978, 521.8884],
  [1317.2693, 522.38354],
  [1315.0555, 527.13635],
  [1310.5536, 527.80865],
  [1308.894, 523.9903],
  [1305.0413, 527.04266],
  [1302.5587, 532.26965],
  [1307.6151, 531.44025],
  [1312.5764, 532.20953],
  [1319.5029, 527.72034],
  [1321.8813, 533.4387],
  [1323.7118, 530.1542],
  [1317.6271, 532.4612],
  [1319.3724, 538.0283],
  [1324.2938, 536.6411],
  [1327.3573, 544.5084],
  [1331.0076, 545.96326],
  [1334.5945, 542.97314],
  [1335.2622, 547.1356],
  [1336.1326, 537.3285],
  [1336.8027, 533.5282],
  [1333.875, 531.09204],
  [1332.3794, 535.3067],
  [1331.9331, 540.3324],
  [1328.6394, 536.213],
  [1327.7208, 540.095],
  [1323.1975, 541.233],
  [1319.2461, 543.8059],
  [1315.6074, 541.2902],
  [1311.8308, 542.13464],
  [1310.9808, 546.2075],
  [1311.7263, 550.16547],
  [1311.9852, 553.69037],
  [1312.4062, 557.377],
  [1313.8379, 560.99805],
  [1315.0343, 565.2687],
  [1317.7576, 568.9598],
  [1317.6163, 572.99084],
  [1322.6733, 571.9654],
  [1320.9891, 575.756],
  [1321.287, 579.9813],
  [1317.6366, 581.6095],
  [1321.2247, 584.4675],
  [1324.3257, 587.304],
  [1328.2341, 587.4855],
  [1331.3173, 585.81067],
  [1334.6403, 584.3322],
  [1336.9581, 581.0463],
  [1332.4479, 581.2346],
  [1333.446, 577.75574],
  [1337.0958, 576.2079],
  [1328.99, 578.39233],
  [1328.998, 582.78516],
  [1325.4126, 584.0753],
  [1325.3878, 580.66077],
  [1324.8022, 576.98926],
  [1326.7302, 573.58716],
  [1330.4791, 574.7068],
  [1334.1868, 573.6165],
  [1340.7943, 574.51355],
  [1344.0239, 572.12177],
  [1340.2107, 578.8131],
  [1337.9415, 585.9918],
  [1340.7975, 583.948],
  [1343.3623, 580.77844],
  [1349.878, 584.2517],
  [1352.0444, 580.1712],
  [1347.4645, 580.21216],
  [1344.7778, 576.48096],
  [1349.6323, 576.0949],
  [1356.7754, 580.0497],
  [1354.6179, 576.067],
  [1356.9379, 571.5119],
  [1361.6444, 570.91614],
  [1359.6731, 567.0058],
  [1358.9636, 562.93085],
  [1356.5754, 559.5093],
  [1357.3219, 555.5554],
  [1361.5049, 558.45496],
  [1361.5709, 554.01294],
  [1358.5391, 550.83716],
  [1353.9022, 553.47437],
  [1352.6198, 557.7749],
  [1349.6675, 555.1249],
  [1346.2034, 554.2933],
  [1346.5135, 550.20386],
  [1354.1267, 549.7363],
  [1352.8999, 546.40924],
  [1351.2904, 543.1858],
  [1350.1765, 550.9121],
  [1349.0565, 547.0569],
  [1347.2449, 543.87854],
  [1345.0094, 546.8207],
  [1341.6538, 545.8181],
  [1338.2539, 544.578],
  [1329.5907, 550.44214],
  [1333.308, 550.68274],
  [1337.4856, 551.60034],
  [1335.1704, 554.6385],
  [1333.7709, 558.48785],
  [1340.981, 564.793],
  [1342.2001, 560.5564],
  [1345.2312, 557.89575],
  [1349.2039, 560.2157],
  [1353.7122, 562.6826],
  [1354.7126, 567.1422],
  [1349.9949, 568.6156],
  [1349.8171, 564.71185],
  [1345.5696, 563.1522],
  [1345.5085, 567.574],
  [1352.5042, 572.0593],
  [1347.8325, 572.17664],
  [1341.4236, 569.02545],
  [1338.1875, 571.4051],
  [1334.395, 569.83716],
  [1337.1029, 566.7933],
  [1334.7646, 563.2741],
  [1337.8938, 561.2269],
  [1339.1049, 557.4121],
  [1340.8777, 554.427],
  [1343.4991, 552.55756],
  [1342.2877, 549.67834],
  [1339.0839, 548.67474],
  [1328.7643, 559.5443],
  [1329.8389, 554.9536],
  [1325.3813, 556.47534],
  [1323.3779, 561.2461],
  [1326.3789, 564.3442],
  [1330.7643, 562.8421],
  [1331.5464, 566.71387],
  [1330.2668, 570.64233],
  [1326.6685, 568.7412],
  [1322.4666, 567.77997],
  [1319.9042, 564.9181],
  [1318.5397, 561.11804],
  [1316.6549, 557.18945],
  [1320.7848, 556.6937],
  [1322.2266, 552.3833],
  [1325.9833, 550.4316],
  [1323.4143, 546.4325],
  [1319.403, 548.7972],
  [1315.2742, 546.89185],
  [1316.7059, 552.5327],
  [1308.1232, 556.40454],
  [1306.9135, 552.5721],
  [1298.4353, 552.2433],
  [1293.0034, 554.2267],
  [1288.7349, 549.97815],
  [1292.2498, 547.6769],
  [1295.1685, 550.0911],
  [1299.4441, 547.51294],
  [1295.6895, 544.7118],
  [1296.5706, 540.24445],
  [1300.4678, 542.34656],
  [1292.0326, 540.54016],
  [1289.7985, 544.19684],
  [1285.1116, 545.20123],
  [1281.11, 541.3163],
  [1286.1759, 539.88086],
  [1282.5978, 535.94885],
  [1277.8765, 536.33826],
  [1275.2251, 539.7624],
  [1276.9937, 544.0656],
  [1272.1348, 544.5569],
  [1270.4888, 540.195],
  [1267.815, 536.6254],
  [1272.3907, 535.10986],
  [1274.8577, 531.52295],
  [1279.0679, 531.871],
  [1282.2925, 529.60175],
  [1284.9805, 531.5438],
  [1287.2401, 534.2915],
  [1289.8616, 536.8821],
  [1293.9707, 535.5925],
  [1291.459, 531.9019],
  [1295.3561, 529.4378],
  [1297.7913, 532.18964],
  [1298.0598, 536.23364],
  [1301.7681, 537.4421],
  [1305.2534, 539.9672],
  [1306.3711, 535.4605],
  [1314.7699, 536.46277],
  [1310.3062, 537.60876],
  [1307.793, 543.1112],
  [1303.7616, 545.00885],
  [1307.2595, 548.1234],
  [1303.1752, 549.6602],
  [1302.2985, 553.86566],
  [1303.5802, 557.62494],
  [1303.994, 561.9552],
  [1308.1451, 560.46185],
  [1310.3569, 563.4877],
  [1310.643, 567.30273],
  [1313.2511, 570.6687],
  [1312.3628, 575.01587],
  [1316.8154, 577.21783],
  [1313.5688, 580.1427],
  [1312.1464, 584.2771],
  [1307.438, 583.42645],
  [1309.3094, 579.10004],
  [1307.266, 574.81415],
  [1307.9812, 570.70526],
  [1305.8729, 566.09094],
  [1302.8446, 570.16223],
  [1302.6398, 575.005],
  [1298.5203, 573.98334],
  [1294.8153, 576.95734],
  [1298.9664, 579.68066],
  [1304.2915, 579.17456],
  [1302.412, 583.4048],
  [1298.7341, 585.9541],
  [1298.9712, 590.63196],
  [1297.1105, 595.0712],
  [1293.2708, 593.12256],
  [1289.3862, 595.3147],
  [1284.8247, 596.06744],
  [1284.7655, 601.8099],
  [1288.9528, 600.5762],
  [1293.4651, 599.6927],
  [1298.0703, 599.3194],
  [1302.678, 601.1193],
  [1301.898, 606.1668],
  [1306.2327, 604.30786],
  [1306.031, 608.4148],
  [1298.375, 603.64514],
  [1294.8549, 605.2567],
  [1297.8024, 609.0646],
  [1302.2611, 610.8619],
  [1299.2035, 613.69116],
  [1306.4575, 612.8085],
  [1310.3563, 620.0326],
  [1310.518, 628.00916],
  [1320.0186, 623.3351],
  [1316.7238, 621.1025],
  [1313.4307, 619.59564],
  [1313.9482, 624.79675],
  [1318.3154, 627.9206],
  [1316.8927, 633.68933],
  [1320.7115, 636.9508],
  [1321.0469, 632.108],
  [1325.4912, 632.8115],
  [1324.617, 637.12036],
  [1317.0701, 638.4376],
  [1313.2347, 636.63086],
  [1314.4047, 641.54114],
  [1319.4309, 642.2906],
  [1323.7833, 641.5449],
  [1328.0848, 644.86597],
  [1332.4463, 644.43317],
  [1336.5667, 641.9105],
  [1337.0056, 646.4777],
  [1340.8943, 644.1624],
  [1345.133, 645.87683],
  [1349.462, 647.6439],
  [1349.5876, 643.05005],
  [1349.3033, 638.4994],
  [1344.7715, 636.336],
  [1345.004, 641.1503],
  [1340.6724, 639.75885],
  [1341.3389, 632.0239],
  [1340.4708, 635.5803],
  [1336.659, 637.2529],
  [1333.1849, 635.03174],
  [1329.0281, 636.242],
  [1328.1106, 640.42737],
  [1332.547, 639.72534],
  [1336.4636, 632.2682],
  [1330.2156, 632.0442],
  [1327.4377, 628.62604],
  [1323.0461, 627.8745],
  [1314.7864, 629.73944],
  [1312.0287, 632.5302],
  [1309.4835, 623.8743],
  [1307.7075, 617.0069],
  [1306.4542, 621.0306],
  [1303.2179, 619.3706],
  [1294.9681, 622.08923],
  [1291.0259, 620.2333],
  [1287.6487, 617.1937],
  [1282.3229, 614.93896],
  [1286.999, 612.33386],
  [1291.29, 614.787],
  [1295.1843, 617.50867],
  [1299.6775, 617.35596],
  [1303.488, 615.4209],
  [1310.7131, 614.45605],
  [1313.7554, 611.2827],
  [1318.9504, 616.5731],
  [1314.6506, 615.79346],
  [1309.7595, 610.0611],
  [1311.2052, 606.3479],
  [1318.0602, 603.9759],
  [1315.6174, 607.4602],
  [1318.036, 612.0991],
  [1319.9376, 608.0359],
  [1323.6589, 606.6132],
  [1322.5691, 611.91956],
  [1325.5596, 615.2417],
  [1327.4136, 610.86346],
  [1331.4473, 607.8915],
  [1327.5918, 606.04175],
  [1326.351, 602.07104],
  [1331.5615, 603.8548],
  [1331.0889, 600.1322],
  [1334.365, 593.2124],
  [1332.6957, 596.6968],
  [1329.0695, 594.7197],
  [1324.5293, 594.946],
  [1326.7352, 598.2736],
  [1321.9077, 602.1658],
  [1321.2201, 597.8806],
  [1320.7222, 593.5812],
  [1317.2152, 592.2198],
  [1316.0676, 596.05664],
  [1316.8573, 599.777],
  [1313.6243, 602.5405],
  [1309.3651, 601.8892],
  [1311.4108, 597.5144],
  [1306.4453, 597.9723],
  [1301.9241, 596.06525],
  [1303.7488, 592.12585],
  [1304.4574, 587.7484],
  [1309.5223, 588.30426],
  [1308.0994, 593.12445],
  [1312.5469, 592.6532],
  [1314.5332, 588.70087],
  [1316.7292, 585.3278],
  [1319.6426, 588.6207],
  [1323.249, 590.55994],
  [1326.8632, 591.29016],
  [1330.8674, 590.9308],
  [1334.0759, 588.6376],
  [1337.8116, 589.60535],
  [1338.6494, 592.9301],
  [1342.4011, 593.772],
  [1343.1597, 597.93256],
  [1340.3899, 601.78564],
  [1338.0876, 596.928],
  [1335.8103, 600.3803],
  [1336.3341, 604.66907],
  [1336.118, 608.4047],
  [1339.7091, 609.9843],
  [1344.1671, 610.0023],
  [1341.8633, 605.98755],
  [1332.9993, 611.3714],
  [1331.0295, 614.36646],
  [1329.9122, 617.7752],
  [1336.1016, 617.4261],
  [1336.6107, 613.48627],
  [1341.2039, 614.37805],
  [1341.1733, 618.72546],
  [1340.3606, 622.08374],
  [1345.227, 630.1428],
  [1348.2812, 633.69336],
  [1352.0704, 630.5335],
  [1356.6593, 628.79083],
  [1359.2013, 624.4757],
  [1362.081, 626.9496],
  [1366.1257, 625.8489],
  [1368.6282, 622.3406],
  [1366.962, 618.16614],
  [1363.926, 615.1957],
  [1366.1554, 611.60504],
  [1366.9082, 607.63196],
  [1365.866, 603.7329],
  [1369.4434, 600.49243],
  [1371.913, 596.9488],
  [1375.9197, 597.33093],
  [1379.5905, 599.7864],
  [1380.6576, 595.3072],
  [1384.5806, 592.3234],
  [1383.7832, 588.0651],
  [1387.9639, 588.1358],
  [1384.4122, 583.6959],
  [1387.8326, 580.83765],
  [1391.125, 575.8291],
  [1387.8705, 570.8832],
  [1382.0393, 568.6693],
  [1382.4757, 573.0891],
  [1386.473, 575.7871],
  [1382.6632, 578.21313],
  [1379.9985, 581.24133],
  [1375.8826, 579.1108],
  [1377.9661, 575.2215],
  [1377.4144, 570.53577],
  [1378.1852, 565.62683],
  [1381.663, 562.8523],
  [1385.7242, 565.9713],
  [1390.549, 565.6618],
  [1393.228, 570.37494],
  [1396.9816, 573.2227],
  [1400.6926, 576.7488],
  [1402.3625, 580.88477],
  [1406.2913, 579.9474],
  [1405.9127, 584.47534],
  [1409.9926, 583.88275],
  [1401.3245, 585.3282],
  [1400.418, 589.73126],
  [1404.862, 588.911],
  [1408.9436, 588.3956],
  [1412.8416, 587.59045],
  [1411.6194, 591.8858],
  [1407.6438, 592.7322],
  [1403.6417, 593.5514],
  [1399.5691, 594.8905],
  [1396.4995, 591.88135],
  [1396.253, 586.41174],
  [1397.8088, 581.7793],
  [1395.4446, 577.6847],
  [1392.7328, 581.4763],
  [1391.0066, 585.381],
  [1392.6553, 589.98395],
  [1389.285, 593.291],
  [1385.9668, 596.5166],
  [1384.3572, 600.1344],
  [1381.7869, 603.96686],
  [1378.8636, 607.40515],
  [1375.5767, 602.7966],
  [1371.3164, 604.88837],
  [1374.9207, 608.84033],
  [1374.5549, 614.37317],
  [1370.9581, 609.9496],
  [1369.7454, 614.28107],
  [1371.6952, 618.39307],
  [1376.0403, 619.6671],
  [1379.1812, 617.09656],
  [1383.2014, 619.3075],
  [1381.1357, 627.57025],
  [1377.9106, 630.746],
  [1376.2041, 635.3596],
  [1371.2081, 634.99176],
  [1367.2607, 633.93823],
  [1367.8658, 639.05963],
  [1363.532, 641.08887],
  [1362.8745, 635.7686],
  [1358.596, 638.5083],
  [1359.2686, 643.38873],
  [1367.1025, 645.19904],
  [1363.0298, 647.32513],
  [1358.4106, 648.4012],
  [1353.7072, 649.27185],
  [1354.3896, 644.8694],
  [1354.1454, 640.3744],
  [1353.106, 635.6792],
  [1357.3134, 633.7632],
  [1360.5334, 631.16943],
  [1364.5529, 630.6207],
  [1368.5729, 629.6687],
  [1373.15, 630.58636],
  [1371.2373, 626.3801],
  [1373.429, 622.8269],
  [1379.6787, 622.72235],
  [1376.2667, 626.3668],
  [1384.6079, 624.32874],
  [1388.2605, 627.1242],
  [1390.7012, 623.4104],
  [1391.7623, 618.6587],
  [1395.6625, 616.3935],
  [1387.3732, 620.48816],
  [1387.4387, 615.7574],
  [1383.195, 613.9606],
  [1378.8003, 612.28925],
  [1383.5488, 608.65106],
  [1387.5657, 610.41144],
  [1391.6973, 613.2097],
  [1395.2007, 610.25275],
  [1391.4021, 607.1595],
  [1393.5996, 602.9126],
  [1387.5095, 604.04407],
  [1390.1786, 599.35785],
  [1393.258, 595.4636],
  [1396.4022, 598.3678],
  [1398.8544, 601.826],
  [1397.9326, 606.05054],
  [1403.2563, 603.0873],
  [1402.393, 598.53125],
  [1406.4694, 597.2113],
  [1410.3798, 596.2957],
  [1414.8969, 593.20917],
  [1416.2509, 590.5859],
  [1414.3469, 596.38165],
  [1407.8679, 601.0366],
  [1412.6979, 599.9943],
  [1411.6259, 603.8382],
  [1407.2617, 605.6908],
  [1410.4055, 608.76135],
  [1406.8634, 611.91125],
  [1403.0289, 612.8473],
  [1403.3236, 607.85156],
  [1399.4551, 610.5396],
  [1399.5988, 615.8556],
  [1400.1472, 621.4431],
  [1395.6053, 622.40234],
  [1398.9019, 627.6315],
  [1393.7014, 627.4539],
  [1395.0171, 632.42084],
  [1399.7625, 634.1187],
  [1403.6171, 630.8054],
  [1404.2137, 626.0228],
  [1405.5043, 621.8188],
  [1404.4441, 617.1946],
  [1409.4089, 618.30725],
  [1410.9783, 613.8921],
  [1414.9543, 611.1067],
  [1419.4199, 612.0669],
  [1414.6941, 606.844],
  [1416.6682, 603.1614],
  [1417.4891, 599.1367],
  [1418.3464, 595.09106],
  [1422.2838, 598.33813],
  [1420.8892, 602.37805],
  [1425.2649, 602.3998],
  [1427.5465, 599.30035],
  [1426.4915, 595.96924],
  [1431.9474, 598.1179],
  [1437.4266, 599.1472],
  [1442.5264, 601.3706],
  [1442.7423, 597.4267],
  [1445.0327, 594.022],
  [1447.5387, 590.2611],
  [1451.91, 588.97076],
  [1455.5912, 585.661],
  [1456.6805, 589.33215],
  [1459.7633, 591.5377],
  [1462.8552, 593.3672],
  [1463.1051, 597.7014],
  [1459.1489, 596.93896],
  [1454.489, 602.26605],
  [1454.153, 598.1416],
  [1455.4401, 593.6122],
  [1450.6373, 594.42664],
  [1448.1892, 598.6926],
  [1450.5435, 602.85254],
  [1446.198, 603.5286],
  [1441.8247, 605.7429],
  [1441.7417, 609.9168],
  [1445.4829, 608.20386],
  [1449.5775, 607.2287],
  [1448.5681, 611.4174],
  [1447.9463, 615.6098],
  [1444.1604, 616.89105],
  [1443.313, 620.65283],
  [1439.63, 621.6167],
  [1440.3397, 618.0188],
  [1441.0266, 614.34076],
  [1444.7275, 612.7753],
  [1451.937, 614.5562],
  [1447.4369, 619.506],
  [1445.7234, 623.3502],
  [1447.9908, 626.24084],
  [1450.267, 622.3762],
  [1451.827, 618.6581],
  [1456.1057, 616.70856],
  [1460.5271, 614.4437],
  [1460.3076, 619.047],
  [1464.8657, 619.51465],
  [1463.5167, 623.1369],
  [1462.1511, 627.08777],
  [1464.4136, 630.9189],
  [1468.6058, 630.777],
  [1467.7079, 635.3775],
  [1468.974, 640.3214],
  [1472.1411, 637.1842],
  [1476.142, 639.0093],
  [1474.383, 642.8304],
  [1478.4066, 645.39703],
  [1478.7476, 650.8364],
  [1482.7816, 652.4784],
  [1481.5339, 657.43835],
  [1475.5243, 654.06665],
  [1473.8442, 648.47925],
  [1470.346, 645.2211],
  [1467.4773, 649.4924],
  [1470.8235, 653.254],
  [1458.7517, 655.2987],
  [1461.2723, 650.1905],
  [1462.625, 646.69257],
  [1465.8522, 643.9852],
  [1460.5176, 642.8313],
  [1463.6609, 639.24414],
  [1462.8201, 634.8577],
  [1458.4385, 635.20557],
  [1459.5457, 630.6031],
  [1459.1198, 623.7345],
  [1456.2736, 627.2299],
  [1452.5736, 625.3962],
  [1455.469, 621.4585],
  [1451.4174, 629.55676],
  [1455.0186, 632.08765],
  [1450.3623, 633.89966],
  [1447.3618, 637.7545],
  [1443.0339, 640.6906],
  [1442.6008, 636.48737],
  [1438.8267, 635.2687],
  [1436.1825, 632.67535],
  [1442.4155, 632.0204],
  [1446.2151, 633.6183],
  [1446.9353, 629.8952],
  [1443.421, 627.7661],
  [1441.7047, 624.74347],
  [1437.7335, 624.98737],
  [1439.3391, 629.43536],
  [1435.655, 627.95197],
  [1432.0723, 627.57855],
  [1432.87, 631.5609],
  [1429.0577, 632.0167],
  [1424.5723, 629.9592],
  [1428.3287, 628.3211],
  [1429.6694, 624.45776],
  [1427.9835, 621.36],
  [1427.8016, 617.446],
  [1424.5332, 614.2928],
  [1423.9409, 610.12726],
  [1432.075, 619.0897],
  [1429.8247, 614.2921],
  [1433.4337, 615.245],
  [1433.3992, 623.4453],
  [1436.0446, 620.9015],
  [1436.6998, 617.5128],
  [1437.0103, 614.1118],
  [1433.7515, 610.9881],
  [1432.628, 606.81555],
  [1437.1829, 607.3785],
  [1438.3661, 611.10803],
  [1438.2689, 603.29553],
  [1434.1848, 602.4138],
  [1430.0269, 602.74854],
  [1427.8267, 606.68317],
  [1428.7932, 610.65045],
  [1423.4628, 606.0592],
  [1419.3132, 607.353],
  [1420.0424, 616.4102],
  [1415.1594, 616.1271],
  [1414.1061, 620.58105],
  [1410.6184, 623.7855],
  [1409.2911, 628.01196],
  [1414.8572, 629.94464],
  [1420.2385, 627.6786],
  [1416.143, 625.14215],
  [1418.8623, 620.77655],
  [1423.8787, 619.3712],
  [1422.2485, 623.49915],
  [1425.44, 625.46075],
  [1420.9138, 632.0216],
  [1417.7107, 634.625],
  [1416.1711, 639.1406],
  [1420.2283, 641.4321],
  [1422.2646, 636.8981],
  [1425.8938, 634.4685],
  [1427.9783, 638.66516],
  [1431.3218, 635.8131],
  [1434.9851, 637.7622],
  [1432.4814, 641.5511],
  [1431.7837, 646.5531],
  [1433.3379, 650.9115],
  [1428.6007, 651.0343],
  [1424.0511, 652.28394],
  [1419.271, 653.44714],
  [1416.6426, 649.23987],
  [1421.2003, 646.8299],
  [1425.756, 647.2095],
  [1428.0947, 643.5022],
  [1424.2468, 641.51447],
  [1416.3467, 643.9754],
  [1412.3567, 645.6378],
  [1410.4402, 639.97614],
  [1412.6372, 635.3219],
  [1409.1681, 632.45825],
  [1405.5786, 635.8227],
  [1404.9458, 640.3656],
  [1400.3668, 639.63477],
  [1395.6671, 638.0935],
  [1390.9402, 636.7955],
  [1386.171, 635.3701],
  [1389.8772, 631.51575],
  [1384.6707, 630.4447],
  [1381.0669, 634.154],
  [1382.3997, 638.9321],
  [1377.6445, 640.8402],
  [1373.075, 639.3279],
  [1371.4977, 643.58765],
  [1371.4749, 649.2542],
  [1366.5347, 651.41675],
  [1370.4347, 655.117],
  [1374.7101, 658.4315],
  [1372.7747, 664.11035],
  [1378.3505, 663.76996],
  [1379.8899, 670.0096],
  [1374.9791, 669.8729],
  [1369.8579, 669.5802],
  [1366.4243, 665.6341],
  [1368.4688, 660.47363],
  [1376.1804, 652.58716],
  [1376.1343, 646.18726],
  [1381.877, 644.5343],
  [1380.7006, 649.51953],
  [1382.1293, 653.91187],
  [1380.0323, 658.25336],
  [1384.4508, 660.911],
  [1383.4749, 665.848],
  [1388.3984, 666.45715],
  [1389.5898, 661.681],
  [1391.7247, 657.7914],
  [1386.6893, 655.84906],
  [1392.1547, 652.23425],
  [1395.3588, 661.1949],
  [1393.3486, 665.9519],
  [1397.4987, 667.05524],
  [1399.5717, 663.9496],
  [1401.6869, 669.099],
  [1405.4448, 665.41626],
  [1403.1218, 662.7193],
  [1400.2607, 659.46204],
  [1396.8245, 655.9446],
  [1403.678, 656.12714],
  [1406.4781, 660.28064],
  [1409.6134, 664.02655],
  [1411.8649, 660.1881],
  [1409.3024, 656.31775],
  [1406.6458, 652.80237],
  [1400.8812, 652.4442],
  [1396.9689, 649.78656],
  [1392.2041, 647.35297],
  [1386.6492, 648.46606],
  [1387.1567, 641.5029],
  [1391.9138, 642.2736],
  [1396.627, 644.0132],
  [1401.0581, 645.65106],
  [1404.2085, 648.9404],
  [1406.7794, 644.1811],
  [1408.745, 648.6668],
  [1411.6477, 651.6007],
  [1414.1455, 655.49005],
  [1417.2362, 659.90436],
  [1422.1648, 663.0407],
  [1423.1926, 657.46716],
  [1429.7118, 655.96204],
  [1432.6565, 661.3217],
  [1427.4202, 660.48694],
  [1427.9685, 665.5427],
  [1426.8396, 669.92896],
  [1422.7292, 667.76056],
  [1418.2637, 665.9967],
  [1414.4999, 664.0927],
  [1412.1165, 667.6591],
  [1415.1902, 670.1271],
  [1418.934, 671.1435],
  [1422.5189, 672.6463],
  [1425.7297, 674.403],
  [1428.77, 676.0628],
  [1432.6763, 675.8037],
  [1430.8651, 671.6903],
  [1433.3875, 667.28723],
  [1437.7539, 664.0708],
  [1437.6416, 659.3301],
  [1435.3162, 655.0962],
  [1440.7875, 655.3157],
  [1442.8931, 650.7634],
  [1438.1235, 649.8788],
  [1436.5913, 644.9573],
  [1438.5244, 640.52515],
  [1441.9392, 645.45325],
  [1447.0605, 642.36475],
  [1451.4221, 640.354],
  [1453.503, 636.709],
  [1457.6937, 639.20386],
  [1455.4312, 642.87036],
  [1456.8623, 646.90375],
  [1457.0834, 651.05566],
  [1452.1602, 649.74066],
  [1451.428, 645.19104],
  [1446.8264, 646.8728],
  [1447.4928, 651.3019],
  [1449.9949, 654.9435],
  [1454.2502, 654.4607],
  [1452.2065, 658.84827],
  [1456.9761, 659.90015],
  [1457.9272, 664.8764],
  [1461.6133, 662.34485],
  [1462.3545, 657.80884],
  [1463.9907, 653.1805],
  [1467.2704, 656.45654],
  [1471.6555, 659.19727],
  [1476.6028, 659.12244],
  [1480.3728, 663.06323],
  [1485.6167, 663.82336],
  [1487.1838, 659.1597],
  [1486.6638, 654.71826],
  [1490.0322, 651.85144],
  [1494.2145, 650.5509],
  [1497.751, 652.7814],
  [1502.0497, 651.6292],
  [1505.1414, 655.48914],
  [1508.7031, 659.4392],
  [1512.1808, 663.68445],
  [1510.8884, 668.9947],
  [1511.6005, 674.14954],
  [1516.1914, 671.6301],
  [1516.6907, 666.6721],
  [1517.7114, 661.39746],
  [1519.4377, 655.44135],
  [1516.9498, 650.9956],
  [1517.9729, 645.22217],
  [1521.5632, 648.96497],
  [1522.7784, 643.7345],
  [1531.3423, 639.3503],
  [1534.2672, 635.97675],
  [1528.72, 636.4685],
  [1525.8943, 633.5146],
  [1520.9012, 630.3402],
  [1520.98, 634.2118],
  [1517.4341, 635.9394],
  [1514.1613, 637.55096],
  [1510.5812, 637.09564],
  [1507.0352, 638.7523],
  [1505.2365, 642.053],
  [1502.6263, 645.2988],
  [1499.0562, 647.4586],
  [1495.0553, 646.0366],
  [1490.6084, 646.83563],
  [1486.6934, 648.87115],
  [1482.7925, 647.4554],
  [1482.9186, 643.22235],
  [1480.3877, 639.9518],
  [1479.646, 635.88885],
  [1475.8213, 633.9285],
  [1472.3213, 632.1114],
  [1467.0187, 626.85944],
  [1467.9993, 622.9779],
  [1468.8265, 619.0255],
  [1464.9144, 615.487],
  [1463.56, 611.04083],
  [1467.8281, 611.1773],
  [1468.9347, 614.7499],
  [1472.3374, 613.2131],
  [1472.2499, 617.193],
  [1472.7367, 620.9228],
  [1471.5076, 624.28296],
  [1472.0564, 627.7488],
  [1475.7117, 624.3562],
  [1476.3782, 629.06775],
  [1480.1328, 631.6787],
  [1483.8994, 634.2671],
  [1485.1104, 639.0785],
  [1487.5361, 643.46356],
  [1492.6522, 642.5242],
  [1490.1608, 639.2593],
  [1488.3525, 636.02045],
  [1488.3741, 632.2773],
  [1485.7354, 629.32544],
  [1482.1494, 628.44275],
  [1479.4133, 626.0192],
  [1479.53, 622.08813],
  [1476.3569, 619.7517],
  [1475.9869, 615.8956],
  [1479.8848, 617.44495],
  [1479.8923, 613.2064],
  [1484.3104, 613.03314],
  [1482.3799, 607.9509],
  [1479.617, 603.95087],
  [1485.5847, 604.1522],
  [1487.6948, 607.92224],
  [1492.1927, 608.0026],
  [1495.1133, 604.68616],
  [1499.044, 606.1046],
  [1496.8479, 610.1637],
  [1493.4653, 612.3015],
  [1489.1482, 612.26575],
  [1496.3342, 616.1051],
  [1500.6204, 613.76764],
  [1501.1237, 617.7169],
  [1505.3735, 623.1551],
  [1501.4633, 622.0106],
  [1498.7367, 625.0005],
  [1495.1597, 623.6727],
  [1491.2676, 624.25275],
  [1487.8391, 620.72314],
  [1492.7373, 620.2531],
  [1497.5193, 620.2151],
  [1491.4202, 616.6702],
  [1487.5942, 616.21765],
  [1484.1504, 617.3294],
  [1483.0667, 620.6473],
  [1483.8218, 624.34265],
  [1487.6119, 625.31744],
  [1492.7065, 633.63074],
  [1490.7267, 628.8922],
  [1494.7579, 627.9367],
  [1496.5372, 631.7931],
  [1499.5726, 629.0532],
  [1502.9619, 626.48615],
  [1503.9023, 630.94275],
  [1500.7715, 633.6935],
  [1497.7118, 636.20715],
  [1494.3036, 638.1153],
  [1497.7104, 642.0121],
  [1501.2391, 639.4579],
  [1503.913, 636.16327],
  [1507.4899, 634.3186],
  [1510.3364, 641.55646],
  [1507.9807, 645.88745],
  [1506.6719, 650.0304],
  [1511.0607, 653.3115],
  [1512.7145, 648.9166],
  [1512.8407, 644.95953],
  [1515.5256, 641.29407],
  [1519.8545, 639.7564],
  [1523.6713, 637.3331],
  [1525.9915, 640.55054],
  [1528.794, 643.66223],
  [1526.3116, 647.67163],
  [1524.2137, 653.29333],
  [1523.4166, 659.2156],
  [1522.6619, 664.2783],
  [1521.4993, 669.15283],
  [1521.2076, 673.8396],
  [1523.2999, 677.90173],
  [1524.5918, 682.3834],
  [1528.0403, 685.32227],
  [1532.6965, 685.77014],
  [1533.1349, 691.0441],
  [1528.6163, 690.8496],
  [1537.9429, 691.1899],
  [1524.1882, 694.8812],
  [1523.7573, 690.0399],
  [1521.6796, 686.5874],
  [1516.6394, 688.1533],
  [1506.5756, 690.59595],
  [1501.4801, 687.5924],
  [1493.0991, 683.30774],
  [1498.5421, 682.74524],
  [1503.7446, 680.1059],
  [1506.3594, 684.16113],
  [1511.2651, 685.8068],
  [1515.43, 682.71436],
  [1519.6914, 682.0691],
  [1517.2603, 676.9307],
  [1512.8004, 679.27075],
  [1508.5764, 678.93494],
  [1505.923, 674.1782],
  [1500.8612, 676.7853],
  [1496.1108, 677.341],
  [1493.793, 672.4829],
  [1499.8405, 671.8673],
  [1500.956, 666.3407],
  [1505.4087, 669.3288],
  [1506.4546, 664.3788],
  [1502.5012, 660.5008],
  [1495.2644, 667.84064],
  [1497.0916, 662.76984],
  [1498.0078, 657.4678],
  [1492.5486, 655.6996],
  [1492.4696, 660.16876],
  [1491.313, 664.58386],
  [1488.2101, 668.7516],
  [1481.1855, 668.56104],
  [1484.2285, 672.2837],
  [1488.7798, 674.39905],
  [1491.2087, 678.39526],
  [1487.0118, 681.3319],
  [1481.8983, 680.9662],
  [1483.1599, 676.67786],
  [1478.0872, 674.9903],
  [1473.9631, 679.8936],
  [1471.9233, 676.75085],
  [1467.7405, 681.0238],
  [1467.4467, 675.31964],
  [1465.8949, 666.62494],
  [1466.1807, 661.3789],
  [1470.3546, 664.23804],
  [1475.2173, 664.91504],
  [1475.935, 669.8676],
  [1472.2947, 672.8148],
  [1469.5165, 669.56757],
  [1464.124, 672.20386],
  [1459.2922, 672.1665],
  [1462.8239, 677.585],
  [1458.0999, 676.55786],
  [1453.906, 673.55884],
  [1461.6758, 667.693],
  [1455.717, 668.9242],
  [1450.8723, 668.275],
  [1453.1152, 663.98584],
  [1448.2487, 662.14874],
  [1445.834, 656.4525],
  [1443.1322, 660.59186],
  [1442.8533, 665.29486],
  [1446.2754, 667.8839],
  [1448.4614, 672.906],
  [1443.0933, 672.441],
  [1439.4197, 668.9406],
  [1436.2327, 672.558],
  [1436.3455, 677.2682],
  [1440.1099, 677.0538],
  [1444.9089, 677.6843],
  [1451.0271, 677.37134],
  [1447.3317, 680.9031],
  [1447.5294, 684.3645],
  [1447.611, 687.3082],
  [1444.7625, 689.09467],
  [1441.7823, 690.0303],
  [1438.014, 690.0085],
  [1435.6707, 686.55444],
  [1432.7123, 684.3248],
  [1428.617, 684.4469],
  [1425.0381, 683.6999],
  [1421.0011, 682.4338],
  [1417.1973, 680.75616],
  [1413.0962, 680.87476],
  [1409.0599, 680.26154],
  [1408.254, 686.0669],
  [1413.562, 685.8484],
  [1417.9066, 686.7248],
  [1422.4922, 687.3396],
  [1425.8555, 690.0337],
  [1430.2202, 688.2435],
  [1429.7778, 693.88074],
  [1424.64, 695.1511],
  [1419.2667, 692.13666],
  [1415.3477, 696.8114],
  [1421.6163, 699.3181],
  [1427.6003, 701.84955],
  [1431.28, 706.20166],
  [1436.8193, 704.6699],
  [1444.7649, 706.9441],
  [1440.3353, 709.9167],
  [1440.9702, 715.4481],
  [1433.8755, 716.46375],
  [1434.9814, 710.79144],
  [1429.4644, 711.7321],
  [1427.634, 716.52576],
  [1427.2314, 721.4697],
  [1421.1311, 720.33636],
  [1418.4628, 716.0172],
  [1413.4738, 719.9756],
  [1404.5803, 715.54736],
  [1398.4108, 715.52136],
  [1392.3563, 714.2363],
  [1387.094, 716.45667],
  [1384.8005, 709.65765],
  [1378.0984, 708.14026],
  [1370.6165, 707.97186],
  [1367.3009, 702.1293],
  [1367.6008, 695.83344],
  [1362.9476, 692.4298],
  [1355.9473, 691.1843],
  [1367.4274, 686.8137],
  [1367.9897, 680.70355],
  [1363.526, 677.0778],
  [1367.7988, 674.5182],
  [1372.333, 675.81335],
  [1373.7026, 682.01685],
  [1379.6627, 683.00867],
  [1373.6346, 688.7004],
  [1375.5911, 694.841],
  [1374.5833, 701.44836],
  [1381.3168, 702.2775],
  [1387.5684, 701.693],
  [1390.2329, 707.2903],
  [1395.7894, 708.0102],
  [1400.8462, 709.22217],
  [1405.5366, 707.5272],
  [1410.1647, 708.55145],
  [1414.9052, 707.8463],
  [1409.5303, 714.9645],
  [1414.5596, 713.2507],
  [1419.7739, 709.6942],
  [1423.3748, 713.6084],
  [1425.7332, 708.23315],
  [1422.3376, 704.7482],
  [1416.6462, 703.2582],
  [1409.6792, 701.6113],
  [1406.501, 695.11566],
  [1412.3557, 691.34076],
  [1401.9335, 701.59344],
  [1394.7742, 701.0985],
  [1398.5873, 694.57605],
  [1393.0527, 690.3515],
  [1389.9006, 695.18494],
  [1383.0918, 695.62134],
  [1380.9923, 689.37915],
  [1387.0912, 687.6203],
  [1385.7238, 681.3744],
  [1382.1873, 676.4487],
  [1377.2957, 676.0742],
  [1384.9839, 671.1631],
  [1390.9583, 670.9187],
  [1387.8755, 675.5531],
  [1391.199, 679.26624],
  [1392.4324, 684.1537],
  [1397.8958, 687.03394],
  [1403.5776, 689.1024],
  [1404.8452, 680.7319],
  [1401.3411, 682.90576],
  [1396.9745, 680.0304],
  [1394.3262, 675.20105],
  [1396.8291, 671.282],
  [1400.6438, 675.7011],
  [1406.2378, 675.8739],
  [1404.7902, 671.97107],
  [1407.6514, 668.58795],
  [1410.6113, 672.01184],
  [1411.3999, 676.0956],
  [1415.3055, 675.2306],
  [1419.0669, 676.1294],
  [1422.222, 677.84436],
  [1425.3953, 679.45044],
  [1428.946, 680.1991],
  [1432.3096, 680.0958],
  [1435.5858, 681.0567],
  [1438.2397, 682.5524],
  [1441.8364, 681.1841],
  [1443.9553, 684.4794],
  [1440.2078, 686.0055],
  [1433.4805, 690.71875],
  [1436.0562, 694.182],
  [1437.4165, 698.83057],
  [1440.9849, 694.6245],
  [1445.1659, 694.82025],
  [1449.4924, 693.8388],
  [1451.0007, 687.5032],
  [1454.7383, 687.19336],
  [1452.7747, 691.0492],
  [1448.2295, 690.7466],
  [1454.0466, 695.2407],
  [1457.192, 691.77856],
  [1461.8262, 694.70154],
  [1458.0426, 697.1684],
  [1449.6794, 697.3901],
  [1447.2566, 701.22894],
  [1452.7688, 700.7811],
  [1457.1547, 702.30725],
  [1462.5381, 700.71436],
  [1467.0796, 698.8021],
  [1467.666, 704.37524],
  [1485.431, 711.02313],
  [1489.0198, 714.54407],
  [1498.6157, 719.72797],
  [1495.056, 713.46533],
  [1508.2134, 696.48193],
  [1512.7344, 692.4026],
  [1514.853, 698.9546],
  [1518.7725, 693.9374],
  [1522.4012, 700.1135],
  [1528.3025, 697.3671],
  [1531.2146, 701.23474],
  [1533.6985, 695.9428],
  [1538.7678, 696.702],
  [1536.6362, 700.76074],
  [1541.3984, 703.1013],
  [1542.5942, 694.7759],
  [1543.2104, 691.16565],
  [1541.787, 686.8695],
  [1537.3416, 685.86346],
  [1540.3691, 681.8773],
  [1539.3864, 677.435],
  [1538.0962, 672.9906],
  [1536.8567, 668.37476],
  [1531.9834, 669.6847],
  [1533.7926, 675.6529],
  [1534.6364, 680.90173],
  [1529.1997, 679.93274],
  [1529.0308, 675.1834],
  [1525.9847, 672.3388],
  [1527.0115, 667.69116],
  [1529.1013, 663.0516],
  [1527.958, 657.3415],
  [1529.374, 651.82367],
  [1531.9319, 647.18207],
  [1534.773, 651.4206],
  [1532.7407, 657.3554],
  [1534.9905, 663.0114],
  [1541.0225, 665.04236],
  [1540.9789, 660.03284],
  [1537.3999, 656.3811],
  [1540.915, 652.53345],
  [1539.4336, 648.4978],
  [1536.7859, 645.2262],
  [1533.8374, 642.3112],
  [1538.7306, 634.5212],
  [1537.1296, 625.3975],
  [1535.3231, 620.25165],
  [1531.788, 617.94836],
  [1527.1621, 619.84314],
  [1531.0659, 623.0775],
  [1527.779, 625.76733],
  [1532.2909, 627.54285],
  [1536.042, 630.4724],
  [1531.3782, 632.6121],
  [1528.7006, 629.71576],
  [1524.9381, 629.8762],
  [1523.3882, 626.53625],
  [1525.2866, 622.8312],
  [1523.5806, 614.901],
  [1522.9568, 609.1401],
  [1526.6309, 611.5346],
  [1517.9071, 610.72766],
  [1516.3533, 601.9522],
  [1515.5557, 597.8889],
  [1510.1448, 597.02466],
  [1504.1884, 598.06274],
  [1506.0808, 593.0514],
  [1513.9414, 593.9049],
  [1517.1307, 590.7943],
  [1510.6621, 590.73303],
  [1505.8716, 587.3452],
  [1513.3068, 580.2873],
  [1521.5239, 586.8466],
  [1525.2253, 589.49084],
  [1528.0132, 586.7177],
  [1531.8678, 587.12274],
  [1535.9438, 587.40063],
  [1533.5924, 583.0415],
  [1537.7699, 583.2513],
  [1529.3755, 582.35205],
  [1525.6119, 578.5114],
  [1524.48, 583.03345],
  [1519.6506, 581.0602],
  [1517.6312, 576.8776],
  [1516.5769, 585.4246],
  [1511.4036, 585.5509],
  [1507.2131, 581.4974],
  [1504.1497, 577.2226],
  [1501.8416, 572.68774],
  [1495.8745, 570.5569],
  [1496.7399, 565.27563],
  [1500.2363, 562.39355],
  [1504.9014, 563.4377],
  [1508.5208, 560.21484],
  [1509.6018, 564.6394],
  [1511.073, 569.8086],
  [1515.933, 569.5967],
  [1513.7981, 565.98865],
  [1517.786, 564.2051],
  [1517.2522, 559.751],
  [1513.405, 561.7462],
  [1513.354, 557.5839],
  [1509.6565, 555.86926],
  [1507.7751, 552.04333],
  [1505.301, 557.1813],
  [1501.2607, 558.2938],
  [1503.6592, 552.615],
  [1506.594, 547.4275],
  [1511.0693, 548.7179],
  [1512.7465, 552.4431],
  [1516.3826, 554.20447],
  [1519.3082, 556.17755],
  [1522.9524, 556.0023],
  [1526.048, 552.6876],
  [1529.0115, 549.03455],
  [1532.7793, 547.45886],
  [1540.2953, 550.1809],
  [1536.1448, 550.66437],
  [1536.7435, 554.88513],
  [1532.2443, 552.68463],
  [1529.1814, 555.6768],
  [1532.6411, 557.6763],
  [1536.292, 559.58514],
  [1540.1621, 558.46326],
  [1541.0829, 554.79156],
  [1543.9282, 552.6309],
  [1545.8888, 549.85266],
  [1543.4263, 547.13635],
  [1540.4238, 544.9037],
  [1537.0708, 546.3335],
  [1534.6897, 542.70685],
  [1530.4609, 543.05066],
  [1526.6515, 544.19666],
  [1522.7529, 541.83057],
  [1520.5596, 546.4166],
  [1524.6173, 548.19055],
  [1521.2665, 551.6726],
  [1517.1044, 549.9992],
  [1515.437, 546.34296],
  [1511.825, 544.49634],
  [1512.764, 540.0592],
  [1515.6135, 536.9546],
  [1517.3549, 532.2794],
  [1517.658, 542.0182],
  [1520.0486, 536.8184],
  [1523.8373, 536.3384],
  [1527.3778, 538.42],
  [1531.2767, 538.0582],
  [1535.1002, 537.8619],
  [1538.0455, 534.99915],
  [1538.8898, 540.49646],
  [1543.3588, 541.9486],
  [1547.32, 540.53156],
  [1542.8059, 537.449],
  [1542.73, 532.58484],
  [1542.3301, 527.88104],
  [1543.1996, 523.1675],
  [1547.0122, 525.07587],
  [1546.8027, 529.8357],
  [1550.612, 531.69727],
  [1551.566, 527.3898],
  [1553.4016, 517.8494],
  [1552.5925, 513.12524],
  [1548.7751, 510.87054],
  [1544.9563, 508.7159],
  [1548.2006, 506.01874],
  [1551.8943, 505.12997],
  [1554.0343, 501.8454],
  [1558.0759, 500.82526],
  [1555.6774, 497.46356],
  [1551.323, 497.77502],
  [1548.8179, 500.61008],
  [1544.9163, 501.63293],
  [1543.3606, 505.13086],
  [1539.5405, 504.16272],
  [1541.564, 498.67255],
  [1545.6265, 496.909],
  [1548.88, 493.9812],
  [1544.8228, 492.5857],
  [1541.0426, 493.74017],
  [1537.6411, 496.36194],
  [1536.4397, 492.0246],
  [1539.4651, 489.24765],
  [1532.9138, 489.99765],
  [1531.0662, 486.50244],
  [1532.4218, 483.0847],
  [1536.3318, 481.6186],
  [1539.8932, 479.50217],
  [1544.0393, 480.75702],
  [1536.4504, 476.74045],
  [1539.7954, 474.66534],
  [1543.1832, 476.73788],
  [1546.664, 475.62082],
  [1549.9587, 473.8442],
  [1553.3909, 472.37292],
  [1555.8972, 475.0161],
  [1559.3298, 474.04022],
  [1562.2905, 476.78806],
  [1559.209, 479.19196],
  [1555.5764, 479.0847],
  [1552.051, 477.22864],
  [1548.4697, 479.13257],
  [1552.505, 481.9702],
  [1557.474, 483.3254],
  [1562.4374, 481.60956],
  [1565.4539, 479.79807],
  [1566.5446, 475.34265],
  [1569.0543, 478.69443],
  [1572.6359, 479.3169],
  [1575.1653, 482.65967],
  [1573.4624, 485.85785],
  [1569.3774, 486.9336],
  [1567.9016, 490.82358],
  [1564.3169, 493.6537],
  [1560.6965, 491.89417],
  [1563.8438, 489.60007],
  [1565.6641, 486.0537],
  [1568.9738, 482.93845],
  [1562.2858, 484.8335],
  [1559.932, 487.29245],
  [1557.1185, 489.20065],
  [1554.1458, 486.12195],
  [1549.7922, 485.92487],
  [1547.957, 482.81955],
  [1544.6311, 485.01288],
  [1540.1946, 484.20093],
  [1536.072, 486.50043],
  [1542.8948, 488.51184],
  [1546.8599, 489.0567],
  [1550.5007, 489.8581],
  [1553.7622, 490.53125],
  [1552.9467, 494.16455],
  [1556.8945, 493.27893],
  [1559.8301, 495.8502],
  [1562.0422, 498.8143],
  [1565.1293, 497.26068],
  [1568.3945, 494.95416],
  [1571.9331, 493.33167],
  [1572.2869, 489.77594],
  [1576.4637, 489.75574],
  [1580.218, 492.24963],
  [1579.0112, 486.27817],
  [1587.5474, 486.59702],
  [1591.1997, 484.53525],
  [1592.9309, 480.9187],
  [1591.0969, 477.7634],
  [1587.3563, 476.92096],
  [1584.3696, 474.00348],
  [1583.7622, 479.31824],
  [1587.8568, 481.62106],
  [1583.4204, 484.0671],
  [1579.6179, 481.44586],
  [1576.8446, 478.1131],
  [1580.8872, 476.2496],
  [1574.0289, 474.5908],
  [1577.8116, 473.6361],
  [1580.8839, 470.76596],
  [1584.8301, 469.27832],
  [1587.9678, 471.71347],
  [1590.8564, 473.91553],
  [1592.5935, 469.99496],
  [1594.9738, 473.1939],
  [1594.8885, 476.9095],
  [1597.5198, 479.61102],
  [1596.8945, 482.56787],
  [1595.2743, 485.3253],
  [1597.7568, 488.23444],
  [1599.1436, 492.34296],
  [1600.3894, 496.4616],
  [1604.449, 493.10373],
  [1602.3568, 488.34143],
  [1606.8794, 488.90234],
  [1602.951, 475.3296],
  [1599.0095, 476.45358],
  [1599.1948, 473.0682],
  [1597.2869, 469.78964],
  [1598.5033, 466.29688],
  [1601.9645, 470.24338],
  [1605.8772, 472.8043],
  [1608.8281, 470.275],
  [1612.7877, 470.33154],
  [1613.088, 465.3625],
  [1616.5597, 464.36694],
  [1619.7179, 466.3906],
  [1623.7931, 466.4057],
  [1628.3899, 466.88672],
  [1629.5693, 463.40228],
  [1639.9524, 461.47748],
  [1644.525, 463.69067],
  [1647.2275, 466.95984],
  [1646.7058, 471.1955],
  [1642.7532, 471.82834],
  [1643.4045, 468.13657],
  [1640.7898, 465.39343],
  [1639.0883, 469.43356],
  [1636.6565, 465.22125],
  [1635.0558, 468.68793],
  [1632.281, 474.05292],
  [1631.7375, 477.61206],
  [1628.2308, 476.25696],
  [1624.6033, 475.06244],
  [1620.471, 477.39636],
  [1620.7644, 473.58203],
  [1623.8727, 471.21423],
  [1620.236, 469.9353],
  [1616.2719, 469.07455],
  [1616.5076, 473.84448],
  [1610.9844, 474.24652],
  [1613.7439, 477.4403],
  [1617.3254, 479.7231],
  [1618.1814, 484.1684],
  [1616.7512, 487.95496],
  [1621.9557, 487.6291],
  [1626.502, 487.8973],
  [1625.5724, 484.02875],
  [1621.7582, 482.45505],
  [1624.3223, 479.19025],
  [1628.168, 480.3835],
  [1629.8597, 483.945],
  [1635.9838, 488.04828],
  [1636.396, 492.18842],
  [1639.6702, 490.4692],
  [1641.0056, 493.94748],
  [1643.9934, 491.52902],
  [1646.4355, 487.98633],
  [1643.0581, 488.04926],
  [1640.167, 486.6018],
  [1637.863, 484.31586],
  [1641.282, 482.1646],
  [1640.7216, 478.33603],
  [1642.5258, 475.28503],
  [1645.858, 476.07086],
  [1648.9363, 478.4068],
  [1651.7926, 480.74475],
  [1655.725, 479.18954],
  [1655.5963, 475.3785],
  [1652.1788, 476.19635],
  [1649.5381, 473.56488],
  [1654.104, 471.63306],
  [1651.0723, 469.29648],
  [1654.7544, 465.91565],
  [1650.9749, 465.40326],
  [1648.3635, 462.44586],
  [1652.2373, 461.60913],
  [1655.9036, 461.5693],
  [1659.0919, 459.98926],
  [1662.574, 460.5476],
  [1661.5404, 456.1886],
  [1658.44, 453.20367],
  [1652.2207, 453.9854],
  [1656.9668, 456.52246],
  [1654.8564, 451.60373],
  [1657.4851, 448.64316],
  [1662.4838, 446.56982],
  [1661.7483, 441.46274],
  [1664.1748, 437.28012],
  [1661.1772, 430.16962],
  [1660.8755, 425.06955],
  [1656.6536, 421.6311],
  [1651.727, 417.6776],
  [1645.5493, 417.44797],
  [1640.938, 413.9958],
  [1641.172, 420.80316],
  [1635.9016, 419.7511],
  [1637.259, 425.11078],
  [1641.1936, 429.16635],
  [1645.9163, 430.10242],
  [1649.8817, 432.09174],
  [1652.8243, 426.7639],
  [1647.5155, 423.56662],
  [1656.9592, 413.54147],
  [1662.6649, 417.51913],
  [1663.0344, 409.63184],
  [1667.669, 405.13715],
  [1673.4019, 400.43494],
  [1670.2653, 397.63605],
  [1672.1367, 393.19354],
  [1675.6833, 390.22336],
  [1679.6006, 389.04465],
  [1676.3628, 395.83664],
  [1678.0343, 400.81308],
  [1681.2875, 397.94788],
  [1680.5442, 393.6064],
  [1684.7018, 393.70923],
  [1686.0149, 397.7074],
  [1688.1062, 401.71716],
  [1692.6493, 400.2573],
  [1690.7333, 396.79498],
  [1689.4907, 393.36703],
  [1687.1846, 390.5968],
  [1683.4335, 388.96066],
  [1687.0507, 386.72754],
  [1691.136, 388.44955],
  [1695.3312, 387.43048],
  [1694.257, 392.3711],
  [1695.9158, 396.71164],
  [1688.2374, 383.05014],
  [1686.5564, 378.09528],
  [1691.2078, 376.71606],
  [1691.2012, 371.99506],
  [1696.0388, 375.07172],
  [1699.7849, 377.82867],
  [1699.9307, 384.00098],
  [1699.8223, 389.14258],
  [1699.29, 393.7652],
  [1705.3915, 387.03644],
  [1704.5264, 391.8393],
  [1704.576, 397.11765],
  [1700.4949, 399.6438],
  [1696.9514, 402.33917],
  [1691.8965, 405.04904],
  [1690.485, 412.5415],
  [1684.1946, 411.99713],
  [1680.4785, 406.32953],
  [1683.4514, 402.06256],
  [1678.1544, 411.57672],
  [1675.9686, 416.75513],
  [1674.3209, 406.3902],
  [1670.8635, 411.27588],
  [1668.9482, 417.10718],
  [1666.5664, 425.0415],
  [1666.3362, 432.36652],
  [1670.5592, 428.83966],
  [1675.3975, 430.41956],
  [1680.4458, 429.76367],
  [1684.0275, 433.91132],
  [1682.4866, 438.00754],
  [1678.392, 439.4249],
  [1677.5574, 435.10107],
  [1671.9001, 434.4917],
  [1668.8011, 438.79657],
  [1673.6956, 439.96307],
  [1671.1582, 444.03015],
  [1666.365, 443.40964],
  [1665.912, 449.36438],
  [1669.7903, 448.40622],
  [1669.3037, 453.85364],
  [1673.1729, 453.21555],
  [1674.5817, 449.42157],
  [1675.5266, 445.75385],
  [1677.7913, 443.16205],
  [1681.9077, 443.1959],
  [1685.2157, 440.99448],
  [1687.8185, 443.2861],
  [1689.1981, 447.45392],
  [1688.2429, 437.26294],
  [1693.166, 433.51788],
  [1692.6376, 438.3393],
  [1691.24, 442.52536],
  [1695.2693, 442.05646],
  [1699.3467, 441.6045],
  [1703.2911, 441.79333],
  [1701.8596, 436.4885],
  [1697.2942, 437.1093],
  [1698.7783, 431.716],
  [1703.927, 429.70374],
  [1705.7332, 433.68347],
  [1714.6019, 429.83444],
  [1710.246, 434.41833],
  [1711.1935, 438.30988],
  [1712.3062, 441.89636],
  [1713.9454, 445.03244],
  [1715.2334, 448.565],
  [1719.0261, 447.16577],
  [1722.6442, 444.84998],
  [1722.5743, 440.31787],
  [1720.0645, 436.3593],
  [1718.1333, 442.44968],
  [1716.1313, 438.74866],
  [1714.979, 434.55222],
  [1719.2812, 431.34558],
  [1722.3445, 428.04803],
  [1724.2002, 433.9242],
  [1726.3765, 438.53223],
  [1730.6814, 439.0095],
  [1732.1029, 442.35693],
  [1734.2549, 436.3908],
  [1729.3848, 434.65137],
  [1727.6073, 430.18805],
  [1732.667, 430.94122],
  [1736.9268, 429.04608],
  [1737.1031, 424.5949],
  [1733.8607, 421.10873],
  [1731.5947, 425.56433],
  [1726.5447, 425.4994],
  [1726.52, 420.6396],
  [1720.8418, 422.43842],
  [1716.2429, 425.23068],
  [1709.6497, 429.95612],
  [1706.4213, 438.06622],
  [1707.558, 442.1147],
  [1708.8369, 445.78754],
  [1710.8906, 449.00903],
  [1709.9613, 453.12277],
  [1712.5444, 456.2881],
  [1714.3698, 452.4455],
  [1718.6284, 451.94403],
  [1722.6227, 450.4477],
  [1725.9329, 447.8617],
  [1727.5542, 443.4455],
  [1733.218, 445.9143],
  [1730.0596, 448.41855],
  [1731.2703, 452.54965],
  [1735.0336, 451.75134],
  [1736.9763, 447.52707],
  [1740.5647, 443.3958],
  [1736.2993, 441.31006],
  [1742.1902, 448.43433],
  [1739.1118, 452.6743],
  [1743.4918, 453.6269],
  [1747.1321, 456.92697],
  [1750.8436, 456.86276],
  [1748.361, 451.38306],
  [1746.109, 445.09174],
  [1753.2351, 439.17502],
  [1748.7859, 440.71494],
  [1744.1494, 438.96945],
  [1739.8066, 437.36923],
  [1737.6615, 433.5003],
  [1741.352, 430.9908],
  [1744.7596, 433.59033],
  [1749.0208, 435.15887],
  [1753.4069, 433.95892],
  [1758.1022, 436.69858],
  [1757.8263, 431.81335],
  [1762.7142, 432.93805],
  [1763.7576, 438.03064],
  [1767.552, 442.05127],
  [1766.5092, 447.73926],
  [1760.7015, 452.95978],
  [1760.0957, 447.8187],
  [1762.8019, 443.66174],
  [1758.5508, 441.46762],
  [1754.7908, 444.48102],
  [1750.9238, 446.87146],
  [1754.9062, 450.42108],
  [1764.9866, 456.96823],
  [1764.2825, 461.4563],
  [1759.446, 458.367],
  [1755.2238, 455.06482],
  [1753.9874, 459.93207],
  [1756.8071, 462.8742],
  [1760.2603, 463.7843],
  [1763.4307, 466.66318],
  [1762.6836, 471.07446],
  [1762.5374, 475.31808],
  [1766.4253, 478.08014],
  [1771.6995, 479.80487],
  [1772.9463, 485.21786],
  [1765.2463, 484.47397],
  [1759.2112, 480.5346],
  [1756.9222, 474.03717],
  [1758.1112, 468.62192],
  [1753.783, 465.43365],
  [1750.2262, 462.86386],
  [1746.2325, 462.967],
  [1743.602, 459.18402],
  [1739.536, 457.76355],
  [1735.1322, 456.64154],
  [1729.9458, 456.66684],
  [1725.4944, 458.11554],
  [1726.6155, 452.9836],
  [1722.0044, 455.2141],
  [1720.8242, 459.41235],
  [1715.9246, 459.95203],
  [1717.281, 456.16916],
  [1719.0745, 463.0639],
  [1723.8336, 462.92352],
  [1727.9309, 466.3678],
  [1731.5614, 468.5731],
  [1728.2871, 461.81628],
  [1732.4777, 460.20923],
  [1732.7621, 464.4797],
  [1736.8896, 462.02094],
  [1741.0055, 463.77142],
  [1736.5497, 467.6013],
  [1740.7517, 469.77658],
  [1744.3049, 467.7317],
  [1748.5276, 468.4509],
  [1753.2161, 469.50665],
  [1750.7963, 473.57465],
  [1745.4445, 473.80258],
  [1741.436, 477.13074],
  [1737.9146, 473.50644],
  [1733.4083, 472.13],
  [1728.9136, 472.58752],
  [1725.3594, 470.5232],
  [1724.9296, 475.23816],
  [1729.4485, 477.65802],
  [1733.4463, 476.28674],
  [1736.156, 479.502],
  [1740.9219, 482.72324],
  [1740.1477, 488.97815],
  [1736.4763, 495.1516],
  [1741.8619, 496.4179],
  [1745.7744, 491.96848],
  [1746.136, 485.91003],
  [1746.9537, 480.03632],
  [1752.5719, 478.287],
  [1753.3779, 484.04633],
  [1759.1221, 488.20166],
  [1763.9187, 493.01624],
  [1769.2279, 489.90063],
  [1782.3242, 491.49164],
  [1785.4296, 496.4365],
  [1779.4778, 507.3545],
  [1783.3169, 502.95587],
  [1778.6908, 497.99774],
  [1757.5095, 525.7684],
  [1752.4141, 524.03406],
  [1747.9384, 522.1052],
  [1749.4792, 497.28427],
  [1757.738, 519.1371],
  [1744.9922, 516.6843],
  [1738.3763, 517.78033],
  [1731.7296, 517.5122],
  [1723.2004, 504.76865],
  [1717.1637, 506.71387],
  [1713.2126, 502.0761],
  [1706.9658, 500.36456],
  [1701.255, 499.66928],
  [1700.509, 503.7784],
  [1695.2808, 501.754],
  [1697.293, 496.8991],
  [1702.8525, 495.18835],
  [1707.7944, 494.15167],
  [1712.9907, 495.4721],
  [1719.5911, 498.55038],
  [1726.7634, 498.62473],
  [1730.5312, 494.4243],
  [1724.2236, 492.234],
  [1718.2976, 492.7019],
  [1714.6501, 489.11594],
  [1709.6438, 489.4225],
  [1711.8253, 485.08813],
  [1713.0168, 480.48093],
  [1717.5895, 479.5759],
  [1716.5942, 483.99298],
  [1720.1716, 487.6709],
  [1721.4305, 483.00363],
  [1725.2776, 486.0079],
  [1729.4287, 488.42438],
  [1734.4603, 489.76157],
  [1735.3976, 484.7003],
  [1730.606, 482.71503],
  [1725.949, 480.66858],
  [1721.8545, 478.703],
  [1719.7739, 475.11874],
  [1720.7565, 471.29514],
  [1723.4514, 467.0844],
  [1719.5558, 467.10483],
  [1715.7437, 465.31152],
  [1716.139, 469.27692],
  [1715.5946, 472.86414],
  [1715.2222, 476.483],
  [1711.4636, 475.78073],
  [1708.9379, 472.28366],
  [1712.0033, 470.6535],
  [1711.9583, 466.85532],
  [1713.1843, 462.73618],
  [1711.0054, 459.75836],
  [1707.4211, 458.14413],
  [1706.133, 454.58746],
  [1702.1921, 455.9685],
  [1697.4197, 454.8375],
  [1699.0073, 459.17294],
  [1694.4641, 459.05658],
  [1692.3337, 455.64365],
  [1687.2764, 455.6528],
  [1689.45, 459.87048],
  [1684.6605, 459.88507],
  [1682.5271, 456.61603],
  [1682.7063, 452.7682],
  [1685.9141, 450.79135],
  [1690.0885, 451.86166],
  [1694.2314, 451.21298],
  [1698.1973, 450.18158],
  [1702.034, 451.43848],
  [1706.3567, 450.36005],
  [1704.5596, 446.5968],
  [1700.8151, 446.33002],
  [1696.8575, 446.0968],
  [1693.0449, 446.89133],
  [1684.8525, 446.6125],
  [1680.6099, 447.49915],
  [1678.9135, 450.8792],
  [1677.5737, 454.75647],
  [1678.87, 459.0196],
  [1675.9707, 462.53168],
  [1673.8866, 458.0809],
  [1669.8264, 459.21832],
  [1671.3582, 463.5774],
  [1674.3223, 467.02307],
  [1678.9304, 470.2368],
  [1678.6592, 466.35382],
  [1681.0676, 462.90503],
  [1685.519, 463.77573],
  [1689.0215, 464.83887],
  [1692.4695, 463.2606],
  [1696.4087, 462.9568],
  [1703.1631, 460.36032],
  [1706.3895, 462.46747],
  [1709.4261, 463.96497],
  [1707.6223, 467.98764],
  [1703.8411, 465.95917],
  [1700.1719, 464.03076],
  [1700.3185, 468.87415],
  [1704.2853, 470.97455],
  [1706.747, 475.14145],
  [1703.1327, 475.31952],
  [1699.5553, 473.69196],
  [1700.1284, 478.44638],
  [1696.0265, 477.7802],
  [1697.4314, 482.45135],
  [1693.0808, 484.1351],
  [1692.6272, 480.2002],
  [1688.0647, 482.00653],
  [1688.6096, 485.5149],
  [1685.4529, 488.04794],
  [1683.4873, 491.18503],
  [1679.9585, 492.9417],
  [1674.5457, 498.99005],
  [1670.7955, 499.9942],
  [1665.1691, 505.78598],
  [1668.9938, 504.05588],
  [1675.4935, 503.2237],
  [1677.5447, 507.14874],
  [1673.6376, 510.4554],
  [1672.4885, 506.0191],
  [1668.7764, 509.26727],
  [1664.5808, 510.34674],
  [1661.0686, 507.78732],
  [1657.3518, 510.85034],
  [1660.8525, 512.928],
  [1657.0422, 515.6978],
  [1660.6284, 518.25165],
  [1659.7328, 523.46716],
  [1654.5527, 523.5433],
  [1649.3264, 521.98425],
  [1647.633, 527.1772],
  [1646.3838, 533.0873],
  [1640.6499, 532.9271],
  [1646.1736, 539.67096],
  [1651.4454, 536.41907],
  [1652.7942, 542.82825],
  [1660.1863, 541.4269],
  [1657.8169, 547.01624],
  [1660.3446, 552.124],
  [1665.384, 554.6791],
  [1665.1913, 560.5808],
  [1660.7305, 558.08276],
  [1655.7024, 554.73047],
  [1652.6454, 550.108],
  [1647.8693, 546.865],
  [1641.4576, 553.06647],
  [1642.473, 548.5067],
  [1642.3677, 543.5481],
  [1646.5825, 552.8358],
  [1656.2446, 559.68744],
  [1651.9592, 560.744],
  [1650.6536, 555.5017],
  [1647.8226, 559.41113]
];

function calculateExtents(coordArray) {
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;
  
  for(let coords of coordArray) {
    minX = Math.min(minX, coords[0]);
    maxX = Math.max(maxX, coords[0]);
    minY = Math.min(minY, coords[1]);
    maxY = Math.max(maxY, coords[1]);
  }
  
  return {
    minX,
    maxX,
    minY,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}

let GreekStatueExtents = calculateExtents(GreekStatue);

/***/ }),

/***/ "./experiments/from-images/js/Settings.js":
/*!************************************************!*\
  !*** ./experiments/from-images/js/Settings.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/ColorPresets */ "./core/ColorPresets.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
    Sketch variables
  */
  UsePerBranchColors: false,


  /**
    Simulation configurations
  */

  VenationType: 'Closed',        // venation can be "Open" or "Closed"
  SegmentLength: 5,              // length of each branch segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 50,        // radius of influence (d_i) around each attractor that attracts nodes
  KillDistance: 5,               // distance (d_k) between attractor and nodes when branches are ended
  IsPaused: false,               // initial pause/unpause state
  EnableCanalization: true,      // turns on/off auxin flux canalization (line segment thickening)
  EnableOpacityBlending: false,  // turns on/off opacity


  /**
    Rendering configurations
  */

  // Visibility toggles
  ShowAttractors: true,        // toggled with 'a'
  ShowNodes: true,             // toggled with 'n'
  ShowTips: false,             // toggled with 't'
  ShowAttractionZones: false,  // toggled with 'z'
  ShowKillZones: false,        // toggled with 'k'
  ShowInfluenceLines: true,    // toggled with 'i'
  ShowBounds: false,           // toggled with 'b'
  ShowObstacles: false,        // toggled with 'o'

  // Modes
  RenderMode: 'Lines',  // draw branch segments as "Lines" or "Dots"

  // Colors
  Colors: _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Dark"],

  // Line thicknesses
  BranchThickness: 1,
  TipThickness: 2,
  BoundsBorderThickness: 1
});

/***/ }),

/***/ "./experiments/from-images/js/entry.js":
/*!*********************************************!*\
  !*** ./experiments/from-images/js/entry.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Node */ "./core/Node.js");
/* harmony import */ var _core_Attractor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Attractor */ "./core/Attractor.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Settings */ "./experiments/from-images/js/Settings.js");
/* harmony import */ var _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttractorPatterns */ "./experiments/from-images/js/AttractorPatterns.js");










let canvas, ctx;
let network;

let showHelp = false;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _Settings__WEBPACK_IMPORTED_MODULE_7__["default"]);

  // Add the bounds, attractors, and root nodes
  resetNetwork();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_6__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
}

let resetNetwork = () => {
  network.reset();
  addAttractors();
  addRootNodes();
}

  let addAttractors = () => {
    let attractors = [];

    // Scale the coordinates to fit within the window
    const scale = Math.min(
      window.innerWidth / _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatueExtents"].width,
      window.innerHeight / _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatueExtents"].height
    ) * 0.8; // 0.8 to leave some margin

    // Center the pattern in the middle of the window
    const offsetX = (window.innerWidth - (_AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatueExtents"].width * scale)) / 2;
    const offsetY = (window.innerHeight - (_AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatueExtents"].height * scale)) / 2;

    for(let coords of _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatue"]) {
      const x = (coords[0] - _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatueExtents"].minX) * scale + offsetX;
      const y = (coords[1] - _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatueExtents"].minY) * scale + offsetY;
      
      attractors.push(
        new _core_Attractor__WEBPACK_IMPORTED_MODULE_3__["default"](
          new vec2__WEBPACK_IMPORTED_MODULE_0__(x, y),
          ctx,
          _Settings__WEBPACK_IMPORTED_MODULE_7__["default"]
        )
      );
    }

    network.attractors = attractors;
  
    for(let attractor of network.attractors) {
      attractor.settings = network.settings;
    }
  }

  // Create the network with initial conditions
  let addRootNodes = () => {
    network.addNode(
      new _core_Node__WEBPACK_IMPORTED_MODULE_2__["default"](
        null,
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          window.innerWidth/2 - 190,
          window.innerHeight/2 + 100
        ),
        false,
        ctx,
        _Settings__WEBPACK_IMPORTED_MODULE_7__["default"]
      )
    );

    // network.addNode(
    //   new Node(
    //     null,
    //     new Vec2(
    //       window.innerWidth/2 + 200,
    //       window.innerHeight/2
    //     ),
    //     false,
    //     ctx,
    //     Settings
    //   )
    // );
  }

let drawText = () => {
  let text = [
    'Attractors placed based on image data.',
    '',
    '1 = square',
    '',
    'Space = toggle pause',
    'r = reset',
    'c = toggle canalization',
    'p = toggle opacity blending',
    'v = toggle branch visibility',
    's = toggle attractor visibility',
    'a = toggle attraction zones',
    'k = toggle kill zones',
    't = toggle tips',
    'i = toggle influence lines',
    'h = toggle this help text'
  ];

  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,1)';
  ctx.fillText('Images', 20, 40);

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
      currentImage = SQUARE;
      resetNetwork();
      break;
  }
});


// Kick off the application
setup();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9Db2xvclByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9EZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvcmUvTmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9QYXRoLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL0F0dHJhY3RvclBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtaW4tcG9seWdvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9Qb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy92YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVjMi92ZWMyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBa0M7O0FBRW5CO0FBQ2YsMENBQTBDO0FBQzFDLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsb0NBQW9DLEVBQUUsaURBQVE7O0FBRTlDLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQWdFOztBQUVqRDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxrREFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBd0M7O0FBRWpDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ047QUFDQztBQUNROztBQUV0QjtBQUNmO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUMseUJBQXlCO0FBQ3pCLG9CQUFvQjs7QUFFcEIsb0JBQW9COztBQUVwQixxQkFBcUI7QUFDckIsd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsaUNBQUk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpQ0FBSSxDQUFDLHlEQUFNLFdBQVcseURBQU07O0FBRXpEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDhDQUFNO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcGFBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbkI7QUFDZjtBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkIsT0FBTyxLQUFLO0FBQ3pDLHVCQUF1QixhQUFhO0FBQ3BDLG1CQUFtQjtBQUNuQixvQ0FBb0MsRUFBRSxpREFBUTtBQUM5Qyx1QkFBdUI7O0FBRXZCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDTDs7QUFFN0IsYUFBYSxtQkFBTyxDQUFDLGtFQUFrQjs7QUFFeEI7QUFDZjtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIscUJBQXFCOztBQUVyQixzQ0FBc0M7QUFDdEMsbUJBQW1CLFVBQVU7QUFDN0IsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsNEJBQTRCOztBQUU1QixvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1QkFBdUI7QUFDdkMscUJBQXFCLGlDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUNBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrQ0FBa0M7QUFDbEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNBOztBQUVwQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLGtCQUFrQix1QkFBdUI7QUFDekMsa0JBQWtCLGdCQUFnQjtBQUNsQyxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEdBQUc7QUFDL0UsRUFBRSx5REFBTTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSx5REFBTTtBQUNsQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7O0FBRTVEO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyx1RDs7Ozs7Ozs7Ozs7O0FDMXJQUDtBQUFBO0FBQWlFOztBQUVsRDtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFVBQVUsdURBQUk7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2QjtBQUNlO0FBQ047QUFDVTtBQUNWO0FBQ1c7QUFDc0I7QUFDckM7QUFDb0M7O0FBRXRFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHFEQUFPLE1BQU0saURBQVE7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9GQUFpQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLHFFQUFrQjtBQUM1QywyQkFBMkIscUVBQWtCO0FBQzdDLFlBQVk7O0FBRVo7QUFDQSwwQ0FBMEMscUVBQWtCO0FBQzVELDJDQUEyQyxxRUFBa0I7O0FBRTdELHNCQUFzQiw4REFBVztBQUNqQyw2QkFBNkIscUVBQWtCO0FBQy9DLDZCQUE2QixxRUFBa0I7O0FBRS9DO0FBQ0EsWUFBWSx1REFBUztBQUNyQixjQUFjLGlDQUFJO0FBQ2xCO0FBQ0EsVUFBVSxpREFBUTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBSTtBQUNkO0FBQ0EsWUFBWSxpQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsZUFBZTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsUTs7Ozs7Ozs7Ozs7QUN6S0EsNkpBQWUsR0FBRyxJQUFxQyxDQUFDLGlDQUFPLEVBQUUsb0NBQUMsQ0FBQztBQUFBO0FBQUE7QUFBQSxvR0FBQyxDQUFDLEtBQUssRUFBNkUsQ0FBQyxrQkFBa0IsYUFBYSxnQkFBZ0IsK0JBQStCLFdBQVcsNEZBQTRGLFdBQVcsa0VBQWtFLDREQUE0RCxZQUFZLElBQUksa0JBQWtCLHlCQUF5QiwwREFBMEQsa0JBQWtCLHNCQUFzQix5Q0FBeUMsVUFBVSxjQUFjLHlCQUF5QixvQkFBb0IsSUFBSSxTQUFTLFVBQVUsb0NBQW9DLGNBQWMsSUFBSSx5Q0FBeUMsU0FBUywwQ0FBMEMsMEZBQTBGLHFPQUFxTywwREFBMEQsdURBQXVELGlOQUFpTiwwQkFBMEIsNEJBQTRCLEtBQUssS0FBSyxnREFBZ0QsbUZBQW1GLHNCQUFzQixLQUFLLGtDQUFrQyxpREFBaUQsS0FBSyxHQUFHLG1CQUFtQiw4SEFBOEgsb0lBQW9JLDJDQUEyQyxxQkFBcUIsdUJBQXVCLGVBQWUsMEJBQTBCLEdBQUcsd0JBQXdCLHlDQUF5QyxvQkFBb0IsS0FBSyxnREFBZ0QsNERBQTRELHFCQUFxQixPQUFPLEVBQUUsb0JBQW9CLEtBQTBCLHFCQUFxQjs7QUFFbmdGLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRDBCO0FBQ0U7QUFDRTs7QUFFOUI7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxxREFBSTtBQUNaOztBQUVBO0FBQ0EsZUFBZSxzREFBSztBQUNwQjs7QUFFQTtBQUNBLGVBQWUsdURBQU07QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDZTtBQUNmOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0RlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNDQUFzQyxlQUFlO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QjtBQUNJO0FBQ047Ozs7Ozs7Ozs7Ozs7O0FDRjVCO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxnRUFBZ0U7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx5REFBUTtBQUNuQixHQUFHLElBQUkseURBQVE7O0FBRWY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRWUscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDaEhyQjtBQUFBLG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLGlDQUFpQyxHQUFHLDJCQUEyQiwwQ0FBMEMsRUFBRSxHQUFHLDJCQUEyQiwwQ0FBMEMsRUFBRTtBQUNoTTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsa0NBQWtDLEdBQUcsNEJBQTRCLDRDQUE0QyxFQUFFLEdBQUcsNEJBQTRCLDRDQUE0QyxFQUFFO0FBQ3ZNOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyw2QkFBNkIsR0FBRyxlQUFlO0FBQzFEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLE9BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixnQkFBZ0I7QUFDckMsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QiwyQkFBMkIsMkJBQTJCO0FBQ3RELGFBQWE7QUFDYiwyQkFBMkIsYUFBYTtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFLGdFQUFnRTtBQUM3STs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixTQUFTLG9EQUFvRCxnQkFBZ0I7O0FBRXRHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixTQUFTLHNDQUFzQyxnQkFBZ0I7O0FBRXhGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxREFBcUQ7O0FBRXJEO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QiwrQkFBK0I7QUFDN0Q7O0FBRUE7QUFDQTs7QUFFQSw4QkFBOEIsZ0NBQWdDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0IsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxpQ0FBaUMsMkNBQTJDO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVywyQkFBMkIsR0FBRyxxQkFBcUIsR0FBRyw4QkFBOEIsR0FBRyxzQkFBc0IsR0FBRyxhQUFhO0FBQ3hJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7O0FBRWYsV0FBVyxnQ0FBZ0MsR0FBRywwQkFBMEIsR0FBRyx3Q0FBd0MsR0FBRyxtQ0FBbUMsR0FBRyxpREFBaUQsR0FBRywyQkFBMkIsR0FBRyx5Q0FBeUMsR0FBRyxrQkFBa0IsR0FBRyxnQ0FBZ0M7QUFDL1U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDcll2QjtBQUFBLG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDRDQUE0QztBQUM5RDs7QUFFQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Q7O0FBRUE7QUFDQSxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNkNBQTZDO0FBQy9EOztBQUVBO0FBQ0Esa0JBQWtCLDRDQUE0QztBQUM5RDs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFpRDtBQUNuRTs7QUFFQTtBQUNBLGtCQUFrQixpREFBaUQ7QUFDbkUsa0JBQWtCLDZCQUE2QjtBQUMvQyxrQkFBa0IsNkJBQTZCO0FBQy9DLGtCQUFrQixnREFBZ0Q7QUFDbEUsa0JBQWtCLDRDQUE0QztBQUM5RCxrQkFBa0IsNENBQTRDO0FBQzlEOztBQUVBO0FBQ0Esa0JBQWtCLGdEQUFnRDtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLG9FQUFLLEU7Ozs7Ozs7Ozs7O0FDOUdwQixDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVSxFQUFFOztBQUVqRDtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUN4ZEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDIiwiZmlsZSI6ImltYWdlcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL2VudHJ5LmpzXCIpO1xuIiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmFjdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbiwgY3R4LCBzZXR0aW5ncyA9IHt9KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAgICAvLyB2ZWMyIG9mIHRoaXMgYXR0cmFjdG9yJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dFxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2luZ05vZGVzID0gW107ICAgLy8gcmVmZXJlbmNlcyB0byBub2RlcyB0aGlzIGF0dHJhY3RvciBpcyBpbmZsdWVuY2luZyBlYWNoIGZyYW1lXHJcbiAgICB0aGlzLmZyZXNoID0gdHJ1ZTsgICAgICAgICAgICAvLyBmbGFnIHVzZWQgdG8gcHJldmVudCBhdHRyYWN0b3JzIGZyb20gYmVpbmcgcmVtb3ZlZCBkdXJpbmcgZmlyc3QgZnJhbWUgb2YgQ2xvc2VkIHZlbmF0aW9uIG1vZGVcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3Rpb25ab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBraWxsIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0b3JcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdG9yQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTGlnaHQgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDAsMCwwLDEpJyxcclxuICBUaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMCwwLDAsLjEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRGFyayA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC45KScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC41KScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBUaXBDb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4yKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZWFsaXN0aWMgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBCcmFuY2hDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICAvLyBCcmFuY2hDb2xvcjogJ3JnYmEoMCwwLDAsLjIpJyxcclxuICBUaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoNjEsMTY2LDEyLDEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbSA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDI0MiwyNDIpJyxcclxuICBBdHRyYWN0b3JDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICBCcmFuY2hDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4zKScsXHJcbiAgLy8gQm91bmRzRmlsbENvbG9yOiAncmdiKDYxLDg1LDEzNiknLFxyXG4gIC8vIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDYxLDg1LDEzNiknXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiKDIxMCwgODEsIDk0KScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoMjEwLCA4MSwgOTQpJ1xyXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIFJlYWxpc3RpYywgQ3VzdG9tIH0gZnJvbSAnLi9Db2xvclByZXNldHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKlxyXG4gICAgU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIFZlbmF0aW9uVHlwZTogJ09wZW4nLCAgICAgICAgIC8vIHZlbmF0aW9uIGNhbiBiZSBcIk9wZW5cIiBvciBcIkNsb3NlZFwiXHJcbiAgU2VnbWVudExlbmd0aDogNSwgICAgICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggYnJhbmNoIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiAzMCwgICAgICAgLy8gcmFkaXVzIG9mIGluZmx1ZW5jZSAoZF9pKSBhcm91bmQgZWFjaCBhdHRyYWN0b3IgdGhhdCBhdHRyYWN0cyBub2Rlc1xyXG4gIEtpbGxEaXN0YW5jZTogNSwgICAgICAgICAgICAgIC8vIGRpc3RhbmNlIChkX2spIGJldHdlZW4gYXR0cmFjdG9ycyBhbmQgbm9kZXMgd2hlbiBicmFuY2hlcyBhcmUgZW5kZWRcclxuICBJc1BhdXNlZDogZmFsc2UsICAgICAgICAgICAgICAvLyBpbml0aWFsIHBhdXNlL3VucGF1c2Ugc3RhdGVcclxuICBFbmFibGVDYW5hbGl6YXRpb246IHRydWUsICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gIEVuYWJsZU9wYWNpdHlCbGVuZGluZzogdHJ1ZSwgIC8vIHR1cm5zIG9uL29mZiBvcGFjaXR5XHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dBdHRyYWN0b3JzOiBmYWxzZSwgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dOb2RlczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICduJ1xyXG4gIFNob3dUaXBzOiBmYWxzZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICd6J1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdrJ1xyXG4gIFNob3dJbmZsdWVuY2VMaW5lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IGZhbHNlLCAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdvJ1xyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFJlbmRlck1vZGU6ICdMaW5lcycsICAvLyBkcmF3IGJyYW5jaCBzZWdtZW50cyBhcyBcIkxpbmVzXCIgb3IgXCJEb3RzXCJcclxuXHJcbiAgLy8gQ29sb3JzXHJcbiAgQ29sb3JzOiBEYXJrLFxyXG5cclxuICAvLyBMaW5lIHRoaWNrbmVzc2VzXHJcbiAgQnJhbmNoVGhpY2tuZXNzOiAxLjUsXHJcbiAgVGlwVGhpY2tuZXNzOiAyLFxyXG4gIEJvdW5kc0JvcmRlclRoaWNrbmVzczogMVxyXG59IiwiaW1wb3J0IHsgZXhwb3J0U1ZHIH0gZnJvbSBcIi4vVXRpbGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yaykge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICAvLyBTcGFjZSA9IHBhdXNlL3VucGF1c2VcclxuICAgICAgY2FzZSAnICc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYiA9IHRvZ2dsZSBicmFuY2ggdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUJyYW5jaGVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3RvciB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdG9ycygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8geiA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd6JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3Rpb25ab25lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdCA9IHRvZ2dsZSB0aXAgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd0JzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVRpcHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGsgPSB0b2dnbGUga2lsbCB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVJbmZsdWVuY2VMaW5lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYiA9IHRvZ2dsZSBib3VuZHMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdiJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gbyA9IHRvZ2dsZSBvYnN0YWNsZXMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdvJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9ic3RhY2xlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gZSA9IGV4cG9ydCBhbiBTVkcgZmlsZSBvZiBhbGwgdmlzaWJsZSBnZW9tZXRyeVxyXG4gICAgICBjYXNlICdlJzpcclxuICAgICAgICBleHBvcnRTVkcobmV0d29yayk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBjID0gdG9nZ2xlIGF1eGluIGZsdXggY2FuYWxpemF0aW9uXHJcbiAgICAgIGNhc2UgJ2MnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQ2FuYWxpemF0aW9uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBwID0gdG9nZ2xlIG9wYWNpdHkgYmxlbmRpbmdcclxuICAgICAgY2FzZSAncCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVPcGFjaXR5QmxlbmRpbmcoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0IEtEQnVzaCBmcm9tICdrZGJ1c2gnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuYXR0cmFjdG9ycyA9IFtdOyAgLy8gYXR0cmFjdG9ycyBpbmZsdWVuY2Ugbm9kZSBncm93dGhcclxuICAgIHRoaXMubm9kZXMgPSBbXTsgICAgICAgLy8gbm9kZXMgYXJlIGNvbm5lY3RlZCB0byBmb3JtIGJyYW5jaGVzXHJcblxyXG4gICAgdGhpcy5ub2Rlc0luZGV4OyAgICAgICAvLyBrZC1idXNoIHNwYXRpYWwgaW5kZXggZm9yIGFsbCBub2Rlc1xyXG5cclxuICAgIHRoaXMuYm91bmRzID0gW107ICAgICAgLy8gYXJyYXkgb2YgUGF0aCBvYmplY3RzIHRoYXQgYnJhbmNoZXMgY2Fubm90IGdyb3cgb3V0c2lkZSBvZlxyXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTsgICAvLyBhcnJheSBvZiBQYXRoIG9iamVjdHMgdGhhdCBicmFuY2hlcyBtdXN0IGF2b2lkXHJcblxyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBTa2lwIGl0ZXJhdGlvbiBpZiBwYXVzZWRcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFzc29jaWF0ZSBhdHRyYWN0b3JzIHdpdGggbmVhcmJ5IG5vZGVzIHRvIGZpZ3VyZSBvdXQgd2hlcmUgZ3Jvd3RoIHNob3VsZCBvY2N1clxyXG4gICAgZm9yKGxldCBbYXR0cmFjdG9ySUQsIGF0dHJhY3Rvcl0gb2YgdGhpcy5hdHRyYWN0b3JzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgb25seSBhc3NvY2lhdGUgdGhpcyBhdHRyYWN0b3Igd2l0aCBpdHMgY2xvc2VzdCBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKGF0dHJhY3RvciwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChhdHRyYWN0b3JJRCk7XHJcbiAgICAgICAgICAgIGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgYXR0cmFjdG9yIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoYXR0cmFjdG9yKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShhdHRyYWN0b3IpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIGF0dHJhY3RvcidzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2RlcyA9IG5laWdoYm9yaG9vZE5vZGVzO1xyXG5cclxuICAgICAgICAgIGlmKG5vZGVzVG9Hcm93Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXR0cmFjdG9yLmZyZXNoID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXNUb0dyb3cpIHtcclxuICAgICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKGF0dHJhY3RvcklEKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyBub2RlcyBvbnRvIGFueSBub2RlcyBiZWluZyBpbmZsdWVuY2VkIGJ5IGF0dHJhY3RvcnNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IHRoaXMuZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5hdHRyYWN0b3JzW2lkXSkpO1xyXG4gICAgICAgIGxldCBuZXh0Tm9kZSA9IG5vZGUuZ2V0TmV4dE5vZGUoYXZlcmFnZURpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IG5vZGVzIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCBub2RlcyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOT1RFOiBkaXNhYmxpbmcgdGhpcyBjaGVjayBsZXRzIG5vZGVzIGdyb3cgYWNyb3NzIGdhcHMgaW4gYm91bmRzIC0gY29vbCBlZmZlY3QhXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG5cclxuICAgICAgLy8gUGVyZm9ybSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgICAgIGlmKG5vZGUuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgY2hpbGQgbm9kZXMsIHVzZSB0aGUgdGhpY2tlc3Qgb2YgdGhlbSBhbGxcclxuICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPCBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDcpIHtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA9IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF0dHJhY3RvcnMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIG5vZGVzXHJcbiAgICBmb3IobGV0IFthdHRyYWN0b3JJRCwgYXR0cmFjdG9yXSBvZiB0aGlzLmF0dHJhY3RvcnMuZW50cmllcygpKSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnNldHRpbmdzLlZlbmF0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEZvciBvcGVuIHZlbmF0aW9uLCByZW1vdmUgdGhlIGF0dHJhY3RvciBhcyBzb29uIGFzIGFueSBub2RlIHJlYWNoZXMgaXRcclxuICAgICAgICBjYXNlICdPcGVuJzpcclxuICAgICAgICAgIGlmKGF0dHJhY3Rvci5yZWFjaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0cmFjdG9ycy5zcGxpY2UoYXR0cmFjdG9ySUQsIDEpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAvLyBGb3IgY2xvc2VkIHZlbmF0aW9uLCByZW1vdmUgdGhlIGF0dHJhY3RvciBvbmx5IHdoZW4gYWxsIGFzc29jaWF0ZWQgbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDAgJiYgIWF0dHJhY3Rvci5mcmVzaCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsTm9kZXNSZWFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgICAgIGlmKG5vZGUucG9zaXRpb24uZGlzdGFuY2UoYXR0cmFjdG9yLnBvc2l0aW9uKSA+IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxOb2Rlc1JlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFsbE5vZGVzUmVhY2hlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuYXR0cmFjdG9ycy5zcGxpY2UoYXR0cmFjdG9ySUQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgdGhpcy5kcmF3Qm91bmRzKCk7XHJcbiAgICB0aGlzLmRyYXdPYnN0YWNsZXMoKTtcclxuICAgIHRoaXMuZHJhd2F0dHJhY3RvcnMoKTtcclxuICAgIHRoaXMuZHJhd05vZGVzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JvdW5kcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd09ic3RhY2xlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd05vZGVzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93Tm9kZXMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd2F0dHJhY3RvcnMoKSB7XHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiB0aGlzLmF0dHJhY3RvcnMpIHtcclxuICAgICAgYXR0cmFjdG9yLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIGF0dHJhY3RvciBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2YgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKGF0dHJhY3Rvci5wb3NpdGlvbi54LCBhdHRyYWN0b3IucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoYXR0cmFjdG9yKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShhdHRyYWN0b3IpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgYXR0cmFjdG9yVG9QMCwgYXR0cmFjdG9yVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIGF0dHJhY3RvclRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChhdHRyYWN0b3IucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdHRyYWN0b3JUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QoYXR0cmFjdG9yLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoYXR0cmFjdG9yVG9QMS5sZW5ndGgoKSA+IGF0dHJhY3RvclRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihhdHRyYWN0b3JUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShhdHRyYWN0b3IpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBhdHRyYWN0b3IucG9zaXRpb24ueCxcclxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoYXR0cmFjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLngsXHJcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoYXR0cmFjdG9yLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2UoYXR0cmFjdG9yLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBhdHRyYWN0b3IucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieWF0dHJhY3RvcnMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdHRyYWN0b3JcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiBuZWFyYnlhdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdHRyYWN0b3JzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZE5vZGUobm9kZSkge1xyXG4gICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE9ubHkgYWxsb3cgcm9vdCBub2RlcyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBpZihib3VuZC5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCBub2RlcyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKFxyXG4gICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAoIWlzSW5zaWRlQW55T2JzdGFjbGUgfHwgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcclxuICAgICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgIHRoaXMuYXR0cmFjdG9ycyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcclxuICAgIHRoaXMubm9kZXNJbmRleCA9IG5ldyBLREJ1c2godGhpcy5ub2RlcywgcCA9PiBwLnBvc2l0aW9uLngsIHAgPT4gcC5wb3NpdGlvbi55KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU5vZGVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93Tm9kZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93Tm9kZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUaXBzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dUaXBzO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1RpcHMgPSAhbm9kZS5zZXR0aW5ncy5TaG93VGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUF0dHJhY3RvcnMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0b3JzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnM7XHJcblxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgdGhpcy5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5zZXR0aW5ncy5TaG93QXR0cmFjdG9ycyA9ICFhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3RvcnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgdGhpcy5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIWF0dHJhY3Rvci5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvdW5kcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICF0aGlzLnNldHRpbmdzLlNob3dCb3VuZHM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPYnN0YWNsZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2FuYWxpemF0aW9uKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24gPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb247XHJcblxyXG4gICAgaWYoIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS50aGlja25lc3MgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGFjaXR5QmxlbmRpbmcoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9IHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XHJcbiAgY29uc3RydWN0b3IocGFyZW50LCBwb3NpdGlvbiwgaXNUaXAsIGN0eCwgc2V0dGluZ3MsIGNvbG9yID0gdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDsgICAgICAgLy8gcmVmZXJlbmNlIHRvIHBhcmVudCBub2RlLCBuZWNlc3NhcnkgZm9yIHZlaW4gdGhpY2tlbmluZyBsYXRlclxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAgIC8vIHt2ZWMyfSBvZiB0aGlzIG5vZGUncyBwb3NpdGlvblxyXG4gICAgdGhpcy5pc1RpcCA9IGlzVGlwOyAgICAgICAgIC8vIHtib29sZWFufVxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgIC8vIGdsb2JhbCBjYW52YXMgY29udGV4dCBmb3IgZHJhd2luZ1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7ICAgICAgICAgLy8gY29sb3IsIHVzdWFsbHkgcGFzc2VkIGRvd24gZnJvbSBwYXJlbnRcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdOyAgICAgLy8gcmVmZXJlbmNlcyB0byBhbGwgQXR0cmFjdG9ycyBpbmZsdWVuY2luZyB0aGlzIG5vZGUgZWFjaCBmcmFtZVxyXG4gICAgdGhpcy50aGlja25lc3MgPSAwOyAgICAgICAgIC8vIHRoaWNrbmVzcyAtIHRoaXMgaXMgaW5jcmVhc2VkIGR1cmluZyB2ZWluIHRoaWNrZW5pbmcgcHJvY2Vzc1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgLy8gU21vb3RobHkgcmFtcCB1cCBvcGFjaXR5IGJhc2VkIG9uIHZlaW4gdGhpY2tuZXNzXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLnRoaWNrbmVzcyAvIDMgKyAuMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gXCJMaW5lc1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVGlwVGhpY2tuZXNzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZih0aGlzLmNvbG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJyYW5jaENvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuQnJhbmNoVGhpY2tuZXNzICsgdGhpcy50aGlja25lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgLy8gXCJEb3RzXCIgcmVuZGVyIG1vZGVcclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuUmVuZGVyTW9kZSA9PSAnRG90cycpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi54LFxyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbi55LFxyXG4gICAgICAgICAgMSArIHRoaXMudGhpY2tuZXNzIC8gMixcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAwLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIE1hdGguUEkgKiAyXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIGNvbG9yIG9yIFwidGlwXCIgbm9kZXNcclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1RpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlRpcENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CcmFuY2hDb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUmVzZXQgZ2xvYmFsIG9wYWNpdHkgaWYgaXQgd2FzIGNoYW5nZWQgZHVlIHRvIG9wYWNpdHkgZ3JhZGllbnQgZmxhZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHByb3ZpZGVkIGRpcmVjdGlvbiBhbmQgYSBwcmUtZGVmaW5lZCBkaXN0YW5jZSAoU2VnbWVudExlbmd0aClcclxuICBnZXROZXh0Tm9kZShhdmVyYWdlQXR0cmFjdG9yRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VBdHRyYWN0b3JEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBOb2RlKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICB0aGlzLm5leHRQb3NpdGlvbixcclxuICAgICAgdHJ1ZSxcclxuICAgICAgdGhpcy5jdHgsXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MsXHJcbiAgICAgIHRoaXMuY29sb3JcclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5cclxubGV0IGluc2lkZSA9IHJlcXVpcmUoJ3BvaW50LWluLXBvbHlnb24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBvbHlnb24sIHR5cGUsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247ICAgICAvLyBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyBjb29yZGluYXRlcyBkZWZpbmluZyBhIHBvbHlnb24gKFtbeDAseTBdLFt4MSx5MV0sLi4uXSlcclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHRcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7ICAgICAgICAgICAvLyBzdHJpbmcgZWl0aGVyICdCb3VuZHMnIG9yICdPYnN0YWNsZSdcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbiA9IHBvbHlnb247ICAvLyBQYXRocyBhcmUgaW5pdGlhbGl6ZWQgd2l0aG91dCBhbnkgdHJhbnNmb3JtYXRpb25zIGJ5IGRlZmF1bHRcclxuICAgIHRoaXMub3JpZ2luID0ge3g6MCwgeTowfTsgICAgICAgICAgIC8vIG9yaWdpbiBwb2ludCB1c2VkIGZvciB0cmFuc2xhdGlvblxyXG4gICAgdGhpcy5zY2FsZSA9IDE7ICAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwbGljYXRpb24gZmFjdG9yIGZvciBwb2x5Z29uIGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLndpZHRoID0gLTE7ICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aCBvZiB0cmFuc2Zvcm1lZCBwb2x5Z29uIC0gd2lsbCBiZSBjYWxjdWxhdGVkIHVzaW5nIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpXHJcbiAgICB0aGlzLmhlaWdodCA9IC0xOyAgICAgICAgICAgICAgICAgICAvLyBoZWlnaHQgb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxyXG4gICAgdGhpcy5pc0NlbnRlcmVkID0gZmFsc2U7ICAgICAgICAgICAgLy8gd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSB0cmFuc2xhdGUgdG8gc2NyZWVuIGNlbnRlclxyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgcHJvdmlkZWQgY29vcmRpbmF0ZXMgYXJlIGluc2lkZSBwb2x5Z29uIGRlZmluZWQgYnkgdGhpcyBQYXRoXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIGluc2lkZShbeCwgeV0sIHRoaXMucG9seWdvbik7XHJcbiAgfVxyXG5cclxuICAvLyBSZWxhdGl2ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVCeSh4LCB5KSB7XHJcbiAgICB0aGlzLm9yaWdpbi54ICs9IHg7XHJcbiAgICB0aGlzLm9yaWdpbi55ICs9IHk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICB9XHJcblxyXG4gIC8vIEFic29sdXRlIHRyYW5zbGF0aW9uXHJcbiAgbW92ZVRvKHgsIHkpIHtcclxuICAgIGlmKHRoaXMuaXNDZW50ZXJlZCkge1xyXG4gICAgICB0aGlzLm9yaWdpbi54ID0geCAtIHRoaXMud2lkdGgvMjtcclxuICAgICAgdGhpcy5vcmlnaW4ueSA9IHkgLSB0aGlzLmhlaWdodC8yO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHg7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTY2FsZShmYWN0b3IpIHtcclxuICAgIHRoaXMuc2NhbGUgKj0gZmFjdG9yO1xyXG4gICAgdGhpcy5jcmVhdGVUcmFuc2Zvcm1lZFBvbHlnb24oKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xyXG5cclxuICAgIGlmKHRoaXMuaXNDZW50ZXJlZCkge1xyXG4gICAgICB0aGlzLm1vdmVUbyh3aW5kb3cuaW5uZXJXaWR0aC8yLCB3aW5kb3cuaW5uZXJIZWlnaHQvMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYWxjdWxhdGUgdG90YWwgcGF0aCBsZW5ndGggYnkgYWRkaW5nIHVwIGFsbCBsaW5lIHNlZ21lbnQgbGVuZ3RocyAoZGlzdGFuY2VzIGJldHdlZW4gcG9seWdvbiBwb2ludHMpXHJcbiAgZ2V0VG90YWxMZW5ndGgoKSB7XHJcbiAgICBsZXQgdG90YWxMZW5ndGggPSAwO1xyXG5cclxuICAgIGZvcihsZXQgaT0xOyBpPHRoaXMucG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0b3RhbExlbmd0aCArPSBWZWMyKFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVswXSAqIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzFdICogdGhpcy5zY2FsZVxyXG4gICAgICApLmRpc3RhbmNlKFxyXG4gICAgICAgIFZlYzIoXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVswXSAqIHRoaXMuc2NhbGUsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlcyB0aGUgcmVhbCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHRoZSB0cmFuc2Zvcm1lZCBwb2x5Z29uXHJcbiAgY2FsY3VsYXRlRGltZW5zaW9ucygpIHtcclxuICAgIGxldCBsZWZ0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLFxyXG4gICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdLFxyXG4gICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdIDwgbGVmdE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF07XHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA+IHJpZ2h0TW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICByaWdodE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdIDwgdG9wTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0gPiBib3R0b21Nb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGJvdHRvbU1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5hYnMocmlnaHRNb3N0Q29vcmRpbmF0ZSAtIGxlZnRNb3N0Q29vcmRpbmF0ZSk7XHJcbiAgICB0aGlzLmhlaWdodCA9IE1hdGguYWJzKGJvdHRvbU1vc3RDb29yZGluYXRlIC0gdG9wTW9zdENvb3JkaW5hdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIGNvb3JkaW5hdGVzIGZvciB0aGUgXCJ0cmFuc2Zvcm1lZFwiIHZlcnNpb24gb2YgdGhpcyBwYXRoLCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIHRyYW5zbGF0aW9uIGFuZCBzY2FsaW5nXHJcbiAgY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCkge1xyXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBbXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ucHVzaChcclxuICAgICAgICBbXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueCxcclxuICAgICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGUgKyB0aGlzLm9yaWdpbi55XHJcbiAgICAgICAgXVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy50eXBlID09ICdCb3VuZHMnIHx8XHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLnR5cGUgPT0gJ09ic3RhY2xlcydcclxuICAgICkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICAvLyBEcmF3IHNlcXVlbnRpYWwgbGluZXMgdG8gYWxsIHBvaW50cyBvZiB0aGUgcG9seWdvblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRHJhdyBsaW5lIGJhY2sgdG8gZmlyc3QgcG9pbnQgdG8gY2xvc2UgdGhlIHBvbHlnb25cclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICBzd2l0Y2godGhpcy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnQm91bmRzJzpcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLkJvdW5kc0JvcmRlclRoaWNrbmVzcztcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0ZpbGxDb2xvcjtcclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ09ic3RhY2xlJzpcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLk9ic3RhY2xlRmlsbENvbG9yO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgYm91bmRpbmcgYm94XHJcbiAgICAgIC8vIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5tb3ZlVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgLy8gdGhpcy5jdHgubGluZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55KTtcclxuICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwxKSc7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgeyB0b1BhdGggfSBmcm9tICdzdmctcG9pbnRzJztcclxuXHJcbi8vIHJhbmRvbSgpLCBzaW1pbGFyIHRvIFByb2Nlc3Npbmcnc1xyXG4vLyBJZiB0d28gcGFyYW1ldGVycyBhcmUgcGFzc2VkLCB0aGV5IGFyZSBpbnRlcnByZXRlZCBhcyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBvZiB0aGUgZGVzaXJlZCByYW5nZVxyXG4vLyBJZiBvbmx5IG9uZSBwYXJhbWV0ZXIgaXMgcGFzc2VkLCBpdCBpcyBpbnRlcnByZXRlZCBhcyB0aGUgbWF4aW11bSwgd2hpbGUgemVybyBpcyB1c2VkIGFzIHRoZSBtaW5pbXVtXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heCA9IG1pbjtcclxuICAgIG1pbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG1pbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBhcmd1bWVudHMgdG8gYmUgbnVtYmVycycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufVxyXG5cclxuLy8gQ29udmVydHMgYSBudW1iZXIgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlclxyXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBvcmlnaW5hbExvd2VyLCBvcmlnaW5hbFVwcGVyLCBuZXdMb3dlciwgbmV3VXBwZXIpIHtcclxuICByZXR1cm4gbmV3TG93ZXIgKyAobmV3VXBwZXIgLSBuZXdMb3dlcikgKiAoKHZhbHVlIC0gb3JpZ2luYWxMb3dlcikgLyAob3JpZ2luYWxVcHBlciAtIG9yaWdpbmFsTG93ZXIpKTtcclxufVxyXG5cclxuLy8gUmV0dXJucyBhbiBhcnJheSBvZiBwb2ludCBjb29yZGluYXRlcyAoYWxzbyBhcnJheXMsIHdpdGggdHdvIGVudHJpZXMpIGZvciBwb2ludHMgYXJyYW5nZWQgaW4gYSBjaXJjbGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmNsZU9mUG9pbnRzKGN4LCBjeSwgcmFkaXVzLCByZXNvbHV0aW9uKSB7XHJcbiAgbGV0IGFuZ2xlLCB4LCB5O1xyXG4gIGxldCBwb2ludHMgPSBbXTtcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IHJlc29sdXRpb247IGkrKykge1xyXG4gICAgYW5nbGUgPSAyICogTWF0aC5QSSAqIGkgLyByZXNvbHV0aW9uO1xyXG4gICAgeCA9IGN4ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSkpO1xyXG4gICAgeSA9IGN5ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xyXG5cclxuICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcG9pbnRzO1xyXG59XHJcblxyXG4vLyBDcmVhdGVzIGFuIFNWRyBkb2N1bWVudCBjb250YWluaW5nIGFsbCBvZiB0aGUgdmlzaWJsZSBnZW9tZXRyeSwgdGhlbiBwdXNoZXMgaXQgdG8gdGhlIGNsaWVudFxyXG4vLyAtIFRyaWdnZXJlZCBieSBwcmVzc2luZyBgZWAgaW4gYW55IHNrZXRjaC4gU2VlIEtleWJvYXJkSW50ZXJhY3Rpb25zLmpzIGZvciBkZWZpbml0aW9uXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTVkcobmV0d29yaykge1xyXG4gIC8vIFNldCB1cCA8c3ZnPiBlbGVtZW50XHJcbiAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIDxsaW5lPnMgZm9yIGVhY2ggYnJhbmNoIHNlZ21lbnRcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCcmFuY2hlcykge1xyXG4gICAgbGV0IG5vZGVMaW5lc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IGBcclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHgyPVwiJHtub2RlLnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTI9XCIke25vZGUucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIG5vZGVMaW5lc0dyb3VwLmlubmVySFRNTCArPSBsaW5lTm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlTGluZXNHcm91cCk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3IgYm91bmRzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93Qm91bmRzKSB7XHJcbiAgICBpZihuZXR3b3JrLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBib3VuZHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhib3VuZC5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChib3VuZHNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3Igb2JzdGFjbGVzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93T2JzdGFjbGVzKSB7XHJcbiAgICBpZihuZXR3b3JrLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBvYnN0YWNsZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhvYnN0YWNsZS5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChvYnN0YWNsZXNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSB0aGUgZG9jdW1lbnQgYXMgYSBCbG9iIGFuZCBmb3JjZSBhIGRvd25sb2FkIGFzIGEgdGltZXN0YW1wZWQgLnN2ZyBmaWxlXHJcbiAgY29uc3Qgc3ZnRG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJub1wiPz4nO1xyXG4gIGNvbnN0IHNlcmlhbGl6ZWRTdmcgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcclxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z0RvY3R5cGUsIHNlcmlhbGl6ZWRTdmddLCB7IHR5cGU6ICdpbWFnZS9zdmcreG1sOycgfSlcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuICAvLyBDcmVhdGUgYSA8cGF0aD4gZWxlbWVudCB3aXRoIGEgcHJvcGVybHktZm9ybWF0dGVkIGBkYCBhdHRyaWJ1dGUgY29udGFpbmluZyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXNzZWQgcG9pbnRzXHJcbiAgZnVuY3Rpb24gZ2V0UGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICAgIGxldCBwb2ludHNTdHJpbmcgPSAnJztcclxuXHJcbiAgICBmb3IobGV0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcclxuICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjbG9zZXBhdGggY29tbWFuZCB0byBhdXRvbWF0aWNhbGx5IGRyYXcgbGluZSBiYWNrIHRvIGluaXRpYWwgcG9pbnRcclxuICAgIHBvaW50c1N0cmluZyArPSAnICcgKyBwb2ludHNbMF1bMF0gKyAnLCcgKyBwb2ludHNbMF1bMV07XHJcblxyXG4gICAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgICBwb2ludHM6IHBvaW50c1N0cmluZ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhdGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhFbDtcclxuICB9IiwiZXhwb3J0IGxldCBHcmVla1N0YXR1ZSA9IFtcclxuICBbMTcxMS4yMTAxLCAyODIuOTk2NF0sXHJcbiAgWzE3MTAuODIwMSwgMjc4LjM0ODI3XSxcclxuICBbMTcxMC42MzM4LCAyODcuMjc3OTJdLFxyXG4gIFsxNzA0LjA1OTEsIDI4NS4yNTQ0Nl0sXHJcbiAgWzE3MDEuOTY4NSwgMjkxLjExMzUzXSxcclxuICBbMTY5OC4yMDUzLCAyODYuNTgzOThdLFxyXG4gIFsxNjkzLjM1MTYsIDI4OC41MTVdLFxyXG4gIFsxNjkxLjA3MzUsIDI4MS45NzQ3M10sXHJcbiAgWzE2ODkuMDk5NSwgMjg2LjMyMjJdLFxyXG4gIFsxNjg4LjA2NjgsIDI5MS4wMjA2Nl0sXHJcbiAgWzE2ODcuMzE5NSwgMjk1LjE0MDVdLFxyXG4gIFsxNjg0LjI0ODcsIDI5Ny4zNDMyNl0sXHJcbiAgWzE2OTIuNjY4NSwgMjk1LjczMzE1XSxcclxuICBbMTY5MC4wMjk1LCAyOTkuMjc1NzZdLFxyXG4gIFsxNjg3LjY1NDMsIDMwMi4xNDUyNl0sXHJcbiAgWzE2ODMuOTA4OCwgMzAxLjk2MTNdLFxyXG4gIFsxNjg2LjY4NTUsIDMwNi45MjcwNl0sXHJcbiAgWzE2ODMuMzYyNywgMzA5LjU2NDgyXSxcclxuICBbMTY3OS44MDYzLCAzMDkuOTc5NThdLFxyXG4gIFsxNjg1LjY0OTIsIDMxMy4wMjYzNF0sXHJcbiAgWzE2OTEuNTc1LCAzMTEuOTA1M10sXHJcbiAgWzE2OTYuMDA3NywgMzA5LjU3ODI4XSxcclxuICBbMTY5MS41NDE1LCAzMDQuOTYyNTJdLFxyXG4gIFsxNjk0LjQ0NDIsIDMwMS4xMjkyXSxcclxuICBbMTY5OC4wMjgyLCAyOTkuMDYyNV0sXHJcbiAgWzE3MDMuMDE3MiwgMzAwLjQ2MjFdLFxyXG4gIFsxNjk5Ljg0NDYsIDI5NS4wNTIwNl0sXHJcbiAgWzE2OTYuMjcxMSwgMjkzLjM5NTJdLFxyXG4gIFsxNzAzLjM0NDcsIDI5Ni42MzEyM10sXHJcbiAgWzE3MDYuMDA5OCwgMjk0LjA0MzU4XSxcclxuICBbMTcwNy45MjY2LCAyOTguNTExODRdLFxyXG4gIFsxNzEwLjQ1NzMsIDI5NC4yOTE3NV0sXHJcbiAgWzE3MDcuMzU5OSwgMjkwLjMwODc4XSxcclxuICBbMTcxMy4zNjA2LCAyOTAuNjM4MDNdLFxyXG4gIFsxNzE1LjMyMDEsIDI5NC4zODg4XSxcclxuICBbMTcxMy4xMzc4LCAyOTguMTA3ODJdLFxyXG4gIFsxNzE5LjY4NzcsIDI5NS40MjgzOF0sXHJcbiAgWzE3MTguNzk5NiwgMjk5Ljk0OTYyXSxcclxuICBbMTcxNS42NTEyLCAzMDMuNTk2Ml0sXHJcbiAgWzE3MTkuNDY0OCwgMzA5LjQxNDVdLFxyXG4gIFsxNzE5LjkzNjgsIDMwNC40MTUwN10sXHJcbiAgWzE3MjQuNzEwNywgMzA0LjM0OTNdLFxyXG4gIFsxNzI1LjAxMzUsIDMwOC43NjkyNl0sXHJcbiAgWzE3MjQuMDY2OCwgMjk5LjQxOTM0XSxcclxuICBbMTczMC41MDQyLCAzMDcuNzIwODZdLFxyXG4gIFsxNzQyLjMxNDgsIDMwOC4xNzU3Ml0sXHJcbiAgWzE3NTAuNDM2MiwgMzA1LjE3NDFdLFxyXG4gIFsxNzUxLjY4NCwgMjk4LjM3ODNdLFxyXG4gIFsxNzU5LjIxNzQsIDMwMi4wNzcxOF0sXHJcbiAgWzE3NjMuNzk2NiwgMzIzLjU4OTE0XSxcclxuICBbMTc1NS44NjE2LCAzMjUuMTk2NV0sXHJcbiAgWzE3NTkuNjY0NywgMzMwLjg5MTU0XSxcclxuICBbMTc1MS42NTIxLCAzMzAuNTU2OV0sXHJcbiAgWzE3NDEuNzE0NCwgMzM4LjEzNTA3XSxcclxuICBbMTc0MC43ODM3LCAzNTMuMjgzMDVdLFxyXG4gIFsxNzM1LjU5NTEsIDM1MC45Nzc3OF0sXHJcbiAgWzE3NDUuMDc0MSwgMzMyLjM4NjNdLFxyXG4gIFsxNzE5LjYyNiwgMzI1LjExMDcyXSxcclxuICBbMTcxNC4yNzYxLCAzMjEuMjUyNDddLFxyXG4gIFsxNzEzLjM2OTksIDMxNi4wNTgzXSxcclxuICBbMTcwNy44NjE2LCAzMTQuNzkyMDVdLFxyXG4gIFsxNzA3LjU2OSwgMzE5LjUxMzg1XSxcclxuICBbMTcwMS40ODk2LCAzMTkuNTg1MzNdLFxyXG4gIFsxNjk3LjA1MywgMzE2LjY1NDY2XSxcclxuICBbMTY5NS44NDU4LCAzMjEuODkzOTVdLFxyXG4gIFsxNjk3LjE5ODksIDMyNi44OTc0Nl0sXHJcbiAgWzE2OTQuMzQwMywgMzMwLjMwNTczXSxcclxuICBbMTY5MC4zNDE2LCAzMjkuNDAwNzNdLFxyXG4gIFsxNjkwLjA5MDMsIDMyNC40NTQ3XSxcclxuICBbMTY5My40NDQzLCAzMjYuMzMwMjZdLFxyXG4gIFsxNzAwLjA2ODUsIDMyNC4xMjM1XSxcclxuICBbMTcwNC42NTc1LCAzMjQuMTE2OV0sXHJcbiAgWzE3MDEuNDI4MSwgMzI4Ljc2Nl0sXHJcbiAgWzE3MDUuNzU0NSwgMzI4LjczMTU3XSxcclxuICBbMTcwOS42MDksIDMzMi42NDYxMl0sXHJcbiAgWzE3MDQuODkyOCwgMzMzLjA1MjNdLFxyXG4gIFsxNzAwLjczODgsIDMzMy41MDYxNl0sXHJcbiAgWzE2OTcuOTgxNywgMzMwLjk0Mjk2XSxcclxuICBbMTY5Ni4wODc0LCAzMzQuNTIxODVdLFxyXG4gIFsxNjk2LjA2NDIsIDMzOC4yNTI5M10sXHJcbiAgWzE2OTIuMTQ4NywgMzMzLjQ1Mzk4XSxcclxuICBbMTY4OC43Nzg4LCAzMzUuMTg0NF0sXHJcbiAgWzE2ODcuMDE3MSwgMzMyLjE0OTcyXSxcclxuICBbMTY4Ni40NDM1LCAzMjguNTgwMzJdLFxyXG4gIFsxNjg1LjAxNTksIDMyNS4yNjY0NV0sXHJcbiAgWzE2NzguNjkxOCwgMzEzLjkyODEzXSxcclxuICBbMTY3Mi44MjMsIDMxNi44MDQ3NV0sXHJcbiAgWzE2NjkuMDMwMywgMzE0Ljk4ODY1XSxcclxuICBbMTY3My44MjU3LCAzMTMuMjAxNzhdLFxyXG4gIFsxNjc2LjcwNTEsIDMxOC4wMTkxN10sXHJcbiAgWzE2ODAuNDE3MiwgMzI0LjA3NDM3XSxcclxuICBbMTY4MS45MzgxLCAzMjkuNDQ3NDVdLFxyXG4gIFsxNjc3LjQyMTYsIDMyOC4yNTc3XSxcclxuICBbMTY3MS43MjgxLCAzMjkuMTg5MDNdLFxyXG4gIFsxNjcwLjc1NzksIDMzMy43MjUwNF0sXHJcbiAgWzE2NzUuNTkxNCwgMzMyLjU2NzU3XSxcclxuICBbMTY3OS43NTk5LCAzMzMuODMxNTRdLFxyXG4gIFsxNjgzLjc4MywgMzM0LjEwMTddLFxyXG4gIFsxNjgyLjA5ODksIDMzOC40ODc1XSxcclxuICBbMTY4Ni41MTQ0LCAzMzguNTQ1OTZdLFxyXG4gIFsxNjg5LjYzMDksIDM0Mi40NDUxNl0sXHJcbiAgWzE2OTEuNTMwNSwgMzM3LjgzNTQ4XSxcclxuICBbMTY5My41MzkyLCAzNDEuMjI3N10sXHJcbiAgWzE2OTYuOTAyMiwgMzQzLjMyNTEzXSxcclxuICBbMTY5Ny41ODgzLCAzNDguMjA4NzRdLFxyXG4gIFsxNzAzLjQ0NDYsIDM0Ny42MTM3N10sXHJcbiAgWzE3MDIuNDczNCwgMzQyLjE5NjIzXSxcclxuICBbMTY5OS43MDg5LCAzMzcuODE5NDZdLFxyXG4gIFsxNzAzLjY5MDIsIDMzNy4yNjI0XSxcclxuICBbMTcwNy45MzcxLCAzMzcuOTA4MDJdLFxyXG4gIFsxNzEzLjM1MiwgMzM3LjUxODhdLFxyXG4gIFsxNzI2Ljk2MjMsIDMzOS40MjM2NV0sXHJcbiAgWzE3MzIuNDU5MiwgMzQ0LjI3MTI0XSxcclxuICBbMTcxOC42MTg3LCAzNTguMTcxODRdLFxyXG4gIFsxNzE2LjU3MzEsIDM2NS40ODQzOF0sXHJcbiAgWzE3MTIuMDczLCAzNjQuNTY4MDhdLFxyXG4gIFsxNzE2LjAyMSwgMzcwLjI3NjczXSxcclxuICBbMTcyMC44NzU2LCAzNjcuMzg0MjVdLFxyXG4gIFsxNzIxLjA4OTIsIDM2Mi4zNzEzXSxcclxuICBbMTcyMS44MDQsIDM1Ni4wMDA5NV0sXHJcbiAgWzE3MjQuNzUxLCAzNTIuNzU2NTZdLFxyXG4gIFsxNzI4LjkyNTgsIDM0OS44MTYyNV0sXHJcbiAgWzE3MjQuMTc3NSwgMzQ2LjAxMTRdLFxyXG4gIFsxNzE4LjQ2NzMsIDM0Ni4wNjE5OF0sXHJcbiAgWzE3MTkuNTE1MSwgMzUxLjI2MjQ1XSxcclxuICBbMTcxNC4wMzQ4LCAzNTAuMzYxMDVdLFxyXG4gIFsxNzA5LjI2MjcsIDM0OS4xODI4Nl0sXHJcbiAgWzE3MTUuMjE5NywgMzU1LjMxOTI3XSxcclxuICBbMTcxNS4yMjU2LCAzNjAuNTE4XSxcclxuICBbMTcxMS4xMjQ4LCAzNTkuNTczNTVdLFxyXG4gIFsxNzA5LjczODgsIDM1NC41MDExNl0sXHJcbiAgWzE3MDUuMjAzNCwgMzUyLjM0MjNdLFxyXG4gIFsxNzAzLjUzOTIsIDM1Ni4zMzhdLFxyXG4gIFsxNzA2LjgxOTcsIDM1OS4xMDddLFxyXG4gIFsxNzA2LjQwNTMsIDM2My4yNDY5XSxcclxuICBbMTcwMS40MjQxLCAzNjAuODIyNzVdLFxyXG4gIFsxNzAwLjAzODIsIDM1My41MjY0Nl0sXHJcbiAgWzE2OTMuNzY5NSwgMzUyLjU1NjM0XSxcclxuICBbMTY4MC45MzcsIDM0Ny42NzM1NV0sXHJcbiAgWzE2ODQuNzksIDM0My4zMTI4NF0sXHJcbiAgWzE2NzIuMjczNywgMzQ4LjMyMTc1XSxcclxuICBbMTY3MS4xMTYxLCAzNDMuMzI5MDddLFxyXG4gIFsxNjY3LjYzMDQsIDM0NS45MTQ5OF0sXHJcbiAgWzE2NzYuNDQxMywgMzQ2LjQ4MDQ3XSxcclxuICBbMTY3OS44OTA5LCAzNDIuNTE3ODhdLFxyXG4gIFsxNjc1LjA5NjMsIDM0MS40Njk0Ml0sXHJcbiAgWzE2NzcuNTc0LCAzMzcuNjA5Ml0sXHJcbiAgWzE2NzMuNjUyLCAzMzYuNjg4OTZdLFxyXG4gIFsxNjcwLjE5LCAzMzguODEzNzhdLFxyXG4gIFsxNjY2LjM1MDYsIDM0MC43NTg4OF0sXHJcbiAgWzE2NjUuOTIxNSwgMzM2LjE4MTg1XSxcclxuICBbMTY2Ni45MzA4LCAzMzIuMTg1MThdLFxyXG4gIFsxNjY3LjA5LCAzMjguMzQwMjddLFxyXG4gIFsxNjY5LjYyNjMsIDMyNC43Mjk1OF0sXHJcbiAgWzE2NzQuMDMxOSwgMzI0Ljk1MDMyXSxcclxuICBbMTY3My4wNDk4LCAzMjEuMDI1MjddLFxyXG4gIFsxNjY5LjMxMDksIDMxOS42Mjk1Ml0sXHJcbiAgWzE2NjYuNDQ0MSwgMzIxLjk5ODk2XSxcclxuICBbMTY2NC41OTAyLCAzMjUuMDkyNDRdLFxyXG4gIFsxNjYyLjQ2NjMsIDMyOC4zMzIxMl0sXHJcbiAgWzE2NjIuMzkwOSwgMzMxLjkyODQ0XSxcclxuICBbMTY2MS4wOTk1LCAzMzUuNDA3MjZdLFxyXG4gIFsxNjU3LjMwODMsIDMzNy43ODQzXSxcclxuICBbMTY2MS44MzgxLCAzMzkuMzMzNF0sXHJcbiAgWzE2NjMuNDQ2NywgMzQzLjgyNjY2XSxcclxuICBbMTY1OS4wNzUsIDM0Mi44NTQ0Nl0sXHJcbiAgWzE2NjAuNTU2NCwgMzQ3LjYxNF0sXHJcbiAgWzE2NjQuNjgxOSwgMzQ4Ljg4NDEyXSxcclxuICBbMTY3Ni4xODI0LCAzNTIuMjQ0Ml0sXHJcbiAgWzE2ODkuNjIxOCwgMzU2Ljc2MDIyXSxcclxuICBbMTY5Ny4xMTcsIDM1Ny42MzM1XSxcclxuICBbMTY5NS45NDg3LCAzNjIuNDEzMDJdLFxyXG4gIFsxNjk5Ljg4NTQsIDM2NS43ODU4Nl0sXHJcbiAgWzE2OTYuNjAwOCwgMzcwLjI5MTMyXSxcclxuICBbMTcwMC43MjkxLCAzNzEuNDQxNjJdLFxyXG4gIFsxNzAzLjc1OTgsIDM3NC40MzUxNV0sXHJcbiAgWzE3MDcuMjE0OCwgMzcyLjAxNzU4XSxcclxuICBbMTcwMy45NzQsIDM2Ny45MDMzMl0sXHJcbiAgWzE3MDguNDA4NCwgMzY3LjcxOTQ4XSxcclxuICBbMTcxMi4wNDYxLCAzNjkuMjI5OThdLFxyXG4gIFsxNzEyLjE3OTIsIDM3My41MzkxOF0sXHJcbiAgWzE3MTAuNzYwNywgMzg1LjUwMDhdLFxyXG4gIFsxNzE1Ljc5MDQsIDM4Mi4zOTk3NV0sXHJcbiAgWzE3MzQuMTI5OSwgMzgxLjMyNzQ1XSxcclxuICBbMTcyNi4wNTE2LCAzNjQuOTA4NjZdLFxyXG4gIFsxNzI2Ljg1NDUsIDM1OS44ODUzNV0sXHJcbiAgWzE3MzAuNjcxOCwgMzU2LjI2MTRdLFxyXG4gIFsxNzQ4LjU2NSwgMzY4LjgwOThdLFxyXG4gIFsxNzQ0LjI5ODEsIDM3My4yNjUxNF0sXHJcbiAgWzE3MzcuMjg1MywgMzc1LjMxOTQzXSxcclxuICBbMTcyMy44NzM5LCAzNzYuOTEzNTRdLFxyXG4gIFsxNzM4LjU3NCwgMzg0LjkxOTRdLFxyXG4gIFsxNzUwLjA1NzQsIDM5Mi45NTIxNV0sXHJcbiAgWzE3NDUuMzYzOCwgMzk0Ljg3NjddLFxyXG4gIFsxNzQ1LjgxMjcsIDM5OS41NTQwMl0sXHJcbiAgWzE3NDEuNTc1MywgMzk2LjYzMDQ2XSxcclxuICBbMTc0Mi41MjE1LCA0MDEuOTE0MThdLFxyXG4gIFsxNzQxLjExMTUsIDQwNi4wNjkyXSxcclxuICBbMTczOC4wNzY0LCA0MDIuNTI0Nl0sXHJcbiAgWzE3MzYuNzkzNSwgNDA3LjYxNzI4XSxcclxuICBbMTczMy42OTA4LCA0MTEuMjk4OF0sXHJcbiAgWzE3MzQuNzQ5NCwgNDE2LjAyMzUzXSxcclxuICBbMTczOC43MDU5LCA0MTMuOTMyNjJdLFxyXG4gIFsxNzQwLjAzMTUsIDQxMC40NDM4NV0sXHJcbiAgWzE3NDQuMDUyNSwgNDA5Ljg0NzM1XSxcclxuICBbMTc0NS41NTE4LCA0MDYuMjcxOF0sXHJcbiAgWzE3NDcuMzk4OSwgNDAzLjA2OTldLFxyXG4gIFsxNzUxLjEwOTEsIDQwMS4yMTAwMl0sXHJcbiAgWzE3NTUuNDY3NCwgMzk5LjYwNTUzXSxcclxuICBbMTc0OC45MjA4LCAzOTcuNDQ2ODRdLFxyXG4gIFsxNzUyLjU2OTUsIDM5Ni43ODY2Ml0sXHJcbiAgWzE3NTUuNjU4NCwgMzk0Ljc2NTg3XSxcclxuICBbMTc1NC4xNzI2LCAzOTAuOTI3Nl0sXHJcbiAgWzE3NTguNzM2OCwgMzkxLjE4MjFdLFxyXG4gIFsxNzYyLjQ0OTgsIDM5Mi44OTUwOF0sXHJcbiAgWzE3NjYuODEyNywgMzkwLjM0OTA2XSxcclxuICBbMTc3MC44OTQzLCAzODcuMTE4OV0sXHJcbiAgWzE3NzAuNTE2MiwgMzgzLjEyMjg2XSxcclxuICBbMTc3NS44NjEyLCAzODMuMzg2OV0sXHJcbiAgWzE3NzUuMzI1OCwgMzg3LjY2ODQ2XSxcclxuICBbMTc3OC45NzgzLCAzOTAuNTA3OF0sXHJcbiAgWzE3ODIuODc5MiwgMzg5LjI3NDQ4XSxcclxuICBbMTc4Ni45NTEyLCAzODguNTMzMDJdLFxyXG4gIFsxNzkxLjkzNDgsIDM4OC4zMDgxN10sXHJcbiAgWzE3OTMuNjI2MiwgMzgzLjc0NTczXSxcclxuICBbMTc5My42OTE5LCAzOTQuMzYzN10sXHJcbiAgWzE3OTAuMDE4MSwgMzkyLjcwMTM1XSxcclxuICBbMTc4NS4zNzkyLCAzOTMuNzY0N10sXHJcbiAgWzE3ODAuNzUzNCwgMzk0Ljg0MDhdLFxyXG4gIFsxNzc2LjM0MSwgMzk1LjAyOTM2XSxcclxuICBbMTc3NC45MzA5LCAzOTEuNzgxN10sXHJcbiAgWzE3NzEuMTQzMywgMzkxLjU2MDhdLFxyXG4gIFsxNzY5LjIzMTIsIDM5NS4zMzkxN10sXHJcbiAgWzE3NjUuNjI3NCwgMzk0Ljk3NDhdLFxyXG4gIFsxNzcyLjYyNDEsIDM5Ni45NzIwNV0sXHJcbiAgWzE3NzEuMzA3NywgNDAwLjk3NjM4XSxcclxuICBbMTc3MS44MzY3LCA0MDUuMzYyXSxcclxuICBbMTc3NS40ODE4LCA0MDIuODUzMjRdLFxyXG4gIFsxNzc2LjU5MzYsIDM5OC45NTE2XSxcclxuICBbMTc4MC40NjA0LCAzOTkuODY0ODRdLFxyXG4gIFsxNzg0LjQzNDMsIDM5OC40NDg1NV0sXHJcbiAgWzE3ODguNjI5OSwgMzk3Ljg4NjY2XSxcclxuICBbMTc5Mi42NjY1LCAzOTguNTczM10sXHJcbiAgWzE3OTYuODAzNywgNDAxLjA0MDQ3XSxcclxuICBbMTc5Ny4yNTMyLCAzOTcuMTg2MzRdLFxyXG4gIFsxODAwLjYxODcsIDM5NS4zMzE4XSxcclxuICBbMTgwMi4wNTc3LCAzOTEuNTAwNTVdLFxyXG4gIFsxODA1Ljc5MzcsIDM5Ni4yMTI2XSxcclxuICBbMTgwMi4xNjkxLCA0MDAuMDM4M10sXHJcbiAgWzE4MDMuMTg4NywgNDA1LjAwODk3XSxcclxuICBbMTgwNy4xNTMyLCA0MDYuODkyMDNdLFxyXG4gIFsxODEwLjkzNDMsIDQwOC41NjYyOF0sXHJcbiAgWzE4MTQuMjA1MSwgNDExLjYwNzhdLFxyXG4gIFsxODE4Ljc0ODMsIDQxMS4wNDc5N10sXHJcbiAgWzE4MjQuNTEyOCwgNDA4LjU1MjZdLFxyXG4gIFsxODI5Ljk3NzcsIDQwNy44MzE2M10sXHJcbiAgWzE4MzQuNzc4NywgNDA1LjM2NV0sXHJcbiAgWzE4NDAuMjQ2NiwgNDExLjg1MTQ0XSxcclxuICBbMTgzNS43MDI5LCA0MTAuMTY3XSxcclxuICBbMTgzNS4yMTY2LCA0MTUuOTUxNjNdLFxyXG4gIFsxODM5Ljk2MzcsIDQxNy40OTkzNl0sXHJcbiAgWzE4NDQuMjQ5NCwgNDE1LjUxXSxcclxuICBbMTg0Ny41OTQ3LCA0MTkuMTEwNTddLFxyXG4gIFsxODQ5LjYyOTQsIDQyNC4zMjkyXSxcclxuICBbMTg0NC43OTMsIDQyMy4xODExNV0sXHJcbiAgWzE4NDAuODE3LCA0MjIuNTYwOV0sXHJcbiAgWzE4NDEuMTIzLCA0MjcuNTUyOTVdLFxyXG4gIFsxODQ1Ljc3NDIsIDQyOS40MTI4NF0sXHJcbiAgWzE4NTEuNTgzMSwgNDI4LjYyODQ4XSxcclxuICBbMTg1NC41NjkyLCA0MzIuODQ3OTZdLFxyXG4gIFsxODQ4Ljc2NSwgNDM0LjAwMjYyXSxcclxuICBbMTg0My45NzQ3LCA0MzUuODkwMDhdLFxyXG4gIFsxODQ3LjI5MzUsIDQ0MC40MTRdLFxyXG4gIFsxODUyLjM3NzgsIDQzOC4wNDg5Ml0sXHJcbiAgWzE4NTMuNjkwNCwgNDQzLjIzMjQyXSxcclxuICBbMTg0OC41NzU3LCA0NDYuNDQwMDNdLFxyXG4gIFsxODQyLjcxNTEsIDQ0OS42Mzc4XSxcclxuICBbMTgzOC43NjU5LCA0NTQuNTM0ODhdLFxyXG4gIFsxODM0LjIzNzMsIDQ3MC42OTkyMl0sXHJcbiAgWzE4MjguNzU4OCwgNDc1LjM1NzVdLFxyXG4gIFsxODI5LjQwNjEsIDQ2NS43MzEwMl0sXHJcbiAgWzE4NDEuNTA3NiwgNDY2Ljg0MzU3XSxcclxuICBbMTgzNi4yNTQyLCA0NjIuNTIxODJdLFxyXG4gIFsxODMxLjUxNTYsIDQ1Ny41NDg4M10sXHJcbiAgWzE4MjQuNTkzNSwgNDYwLjkyMzldLFxyXG4gIFsxODE5LjMzMDEsIDQ1Ni45NzcwNV0sXHJcbiAgWzE4MTMuOTUwMSwgNDUzLjA5MDMzXSxcclxuICBbMTgxNC42NzcsIDQ0NS45MDIwNF0sXHJcbiAgWzE4MjAuNTgxNSwgNDQ4LjE2NDUyXSxcclxuICBbMTgyNS43MzAyLCA0NTIuNjczODNdLFxyXG4gIFsxODI4LjUyODEsIDQ0Ni4wMDQ3M10sXHJcbiAgWzE4MzIuNzIzOSwgNDUwLjY1OTY0XSxcclxuICBbMTgzNi45MTMxLCA0NDYuMzU5N10sXHJcbiAgWzE4MzQuODE2MiwgNDQxLjIwMTIzXSxcclxuICBbMTgyOS44NTAzLCA0NDAuMzcwODJdLFxyXG4gIFsxODI0LjIwNzQsIDQ0MS42MTU0Ml0sXHJcbiAgWzE4MTkuMTgwNSwgNDQwLjg0MDQyXSxcclxuICBbMTgxNC4xMSwgNDM5LjI2MzZdLFxyXG4gIFsxODA5LjUzNDQsIDQ0Mi42Njg4Ml0sXHJcbiAgWzE4MDguNDkyNiwgNDQ4LjU0NjZdLFxyXG4gIFsxODEzLjE3NywgNDYxLjM3MTIyXSxcclxuICBbMTgyMy45MDU2LCA0NzAuNTI4N10sXHJcbiAgWzE4MTguNjExMSwgNDY2Ljc3MDRdLFxyXG4gIFsxODEyLjUyMDgsIDQ3MC4wNTU0Ml0sXHJcbiAgWzE4MDYuMDcxOCwgNDY2LjU1OTU3XSxcclxuICBbMTgwNS43MjUsIDQ2MC4zNzQ2M10sXHJcbiAgWzE4MDcuNDc5MiwgNDU0LjkxMjk2XSxcclxuICBbMTgwMS45MDg5LCA0NTEuNDA2N10sXHJcbiAgWzE3OTkuNDc1MywgNDU3LjMwOTE3XSxcclxuICBbMTc5OS40MTA0LCA0NjQuMjcxOV0sXHJcbiAgWzE3OTMuNDI0OSwgNDY2LjkwODNdLFxyXG4gIFsxNzg3Ljg1NDIsIDQ2NC42MTg3NF0sXHJcbiAgWzE3OTMuMjU5NSwgNDU5LjYzMjNdLFxyXG4gIFsxNzk0LjI4MDIsIDQ1Mi41OTc5Nl0sXHJcbiAgWzE3ODguODg5MiwgNDU0LjQwMjc3XSxcclxuICBbMTc4Ni40MTc0LCA0NTkuMzQxMDZdLFxyXG4gIFsxNzg4LjQxMDIsIDQ0OS4wMzc3XSxcclxuICBbMTc5Mi4yMzkzLCA0NDQuMzc3MjZdLFxyXG4gIFsxODAwLjA5OTksIDQzOC4wNTEzM10sXHJcbiAgWzE4MDQuMDMyMywgNDM0LjU5NjkyXSxcclxuICBbMTgwOC4xNjMsIDQzMS4zNjIzN10sXHJcbiAgWzE4MDcuNjgyOSwgNDIzLjQ4MTldLFxyXG4gIFsxODA1LjQ3MjksIDQyNi45NDkzXSxcclxuICBbMTgwMi42MzY2LCA0MjkuNjY2NzJdLFxyXG4gIFsxNzk5LjMwMDUsIDQzMi40NzUwNF0sXHJcbiAgWzE3OTUuNDQ4NCwgNDMzLjEyNDg1XSxcclxuICBbMTc5MC43ODkyLCA0MzQuMDQxN10sXHJcbiAgWzE3ODcuNTM3NSwgNDMwLjg0ODRdLFxyXG4gIFsxNzgyLjkzMDUsIDQyOC41Nzk0NF0sXHJcbiAgWzE3ODUuNzQ4MiwgNDIyLjc4OTldLFxyXG4gIFsxNzg5LjIwMDEsIDQyNS45NDA1XSxcclxuICBbMTc5My44MTU4LCA0MjguNTc3OTddLFxyXG4gIFsxNzkzLjk4OSwgNDIzLjYxNV0sXHJcbiAgWzE3OTAuNDA1MywgNDIwLjM0MTEzXSxcclxuICBbMTc5NC45MDQ3LCA0MTguMzAxOTddLFxyXG4gIFsxNzk1LjExMzQsIDQxNC4xNTY0M10sXHJcbiAgWzE3OTAuNzU4NCwgNDA4Ljc3NTE1XSxcclxuICBbMTc4Ni4zMzQyLCA0MDYuOTMzMTddLFxyXG4gIFsxNzgyLjMxNjIsIDQwOC4yNTkxNl0sXHJcbiAgWzE3NzkuMTA3NCwgNDEwLjk5OTddLFxyXG4gIFsxNzgzLjYwMDEsIDQxMy4zMzIzNF0sXHJcbiAgWzE3ODcuMTE5NiwgNDExLjM3MTUyXSxcclxuICBbMTc5MC41MjYxLCA0MTQuNjUzNV0sXHJcbiAgWzE3ODYuNjAzNSwgNDE3LjI3NDE3XSxcclxuICBbMTc4Mi4zNDQ2LCA0MTkuMTA3NDhdLFxyXG4gIFsxNzc5LjkwMjMsIDQxNS42MTIxNV0sXHJcbiAgWzE3NzYuMDYzNSwgNDEzLjk3ODI3XSxcclxuICBbMTc3My4wMjQ4LCA0MTYuODcxMV0sXHJcbiAgWzE3NzIuMTU2MiwgNDIxLjAwNzY2XSxcclxuICBbMTc3Ny4wOTQsIDQxOS45ODkwN10sXHJcbiAgWzE3ODAuODcwOCwgNDIzLjcyNDk4XSxcclxuICBbMTc3Ni43NTg4LCA0MjUuOTQ1NV0sXHJcbiAgWzE3ODMuODgxNiwgNDM0Ljg0MjM1XSxcclxuICBbMTc3OC41NzIsIDQzNy4wMTE5M10sXHJcbiAgWzE3NzguMjg1OSwgNDMxLjEzODE1XSxcclxuICBbMTc3Mi4xNTc4LCA0MzAuMjMyOF0sXHJcbiAgWzE3NzIuMTg3MSwgNDI1Ljc2NF0sXHJcbiAgWzE3NjguMjQyMSwgNDIzLjkzMTFdLFxyXG4gIFsxNzY2LjcxNTMsIDQxOS42Mjk4Ml0sXHJcbiAgWzE3NjguNjY3NSwgNDE1LjgxMzFdLFxyXG4gIFsxNzY1Ljk4ODMsIDQxMi42MTk3XSxcclxuICBbMTc2MS40NzIsIDQxMS43NjldLFxyXG4gIFsxNzU3LjIzMTYsIDQxMC45MDQxN10sXHJcbiAgWzE3NTYuNzc3NywgNDA3LjAzMzE3XSxcclxuICBbMTc1NC4zMzM3LCA0MDMuODgyNzVdLFxyXG4gIFsxNzUwLjI5NzQsIDQwNS45NzgxMl0sXHJcbiAgWzE3NTIuODQ3OSwgNDA4LjkyNDQ0XSxcclxuICBbMTc1My4xODAyLCA0MTIuODk4MzhdLFxyXG4gIFsxNzUwLjU3MSwgNDIwLjE5MTI1XSxcclxuICBbMTc1Mi4zMzAxLCA0MjQuMjczMDRdLFxyXG4gIFsxNzQ2LjkzOCwgNDIzLjg4NDAzXSxcclxuICBbMTc0Ni4xMTMyLCA0MTguOTEwMTNdLFxyXG4gIFsxNzQ4LjkzMjcsIDQxNC45OTA2Nl0sXHJcbiAgWzE3NDguNDMxNSwgNDEwLjM1ODddLFxyXG4gIFsxNzQ0LjQ4NTgsIDQxMy44NDQ1NF0sXHJcbiAgWzE3NDEuOTk5NCwgNDE3LjA4ODg3XSxcclxuICBbMTczOC4yNTQ2LCA0MTkuMjk1MzhdLFxyXG4gIFsxNzQyLjA2MzEsIDQyMS44NjEzXSxcclxuICBbMTc0MS40NDI0LCA0MjYuMDA3MTddLFxyXG4gIFsxNzQ1LjE0MzQsIDQyOC4yMjUwN10sXHJcbiAgWzE3NDkuMTU0OSwgNDI5LjQyNjAzXSxcclxuICBbMTc1My4zMTEzLCA0MjkuMzA5NDJdLFxyXG4gIFsxNzU2LjYwNzcsIDQyNi45NTAzMl0sXHJcbiAgWzE3NTguMTczMiwgNDIzLjM4MDg2XSxcclxuICBbMTc1Ni4zMDU0LCA0MTkuNzg3Ml0sXHJcbiAgWzE3NTMuMTk0NSwgNDE2LjkyMzldLFxyXG4gIFsxNzU4LjAzNTIsIDQxNS40NTM5NV0sXHJcbiAgWzE3NjIuODY4MiwgNDE2LjMwNzkyXSxcclxuICBbMTc2MS42MTQ3LCA0MjAuNDYwODhdLFxyXG4gIFsxNzYzLjc3MjcsIDQyNC41MTkzOF0sXHJcbiAgWzE3NjEuMTY2MSwgNDI4LjExOV0sXHJcbiAgWzE3NjYuNzI3MywgNDI4LjkxMjhdLFxyXG4gIFsxNzY3Ljk4OTQsIDQzNC4wMDIwNF0sXHJcbiAgWzE3NzQuMjcwMSwgNDM0LjYxNjMzXSxcclxuICBbMTc3MC44MTE1LCA0MzcuODI3ODVdLFxyXG4gIFsxNzczLjEyNzksIDQ0MS41NDg2NV0sXHJcbiAgWzE3NzEuODk2LCA0NDYuMjcyNDNdLFxyXG4gIFsxNzcxLjgzNSwgNDUxLjM3NTM3XSxcclxuICBbMTc2Ni4zMDQyLCA0NTIuNTA3NzVdLFxyXG4gIFsxNzcxLjQwMTIsIDQ1Ni4xOTMzM10sXHJcbiAgWzE3NzAuMDc5MSwgNDYwLjc4NV0sXHJcbiAgWzE3NjguMzM5OCwgNDY0Ljk5NDM1XSxcclxuICBbMTc2OC4wNTE4LCA0NzAuMDU2NTJdLFxyXG4gIFsxNzcwLjkzOTMsIDQ3My44Njk1N10sXHJcbiAgWzE3NzcuMDAxNywgNDc2LjUxNDk4XSxcclxuICBbMTc3OC4yNywgNDcxLjA2MzhdLFxyXG4gIFsxNzczLjk1MTQsIDQ2Ni43NTUzXSxcclxuICBbMTc3NS43NDc0LCA0NjAuNjMzMjRdLFxyXG4gIFsxNzgwLjc3MTksIDQ1OC42NTQyN10sXHJcbiAgWzE3ODMuMTMzOSwgNDUzLjI0MzFdLFxyXG4gIFsxNzgxLjk2NTEsIDQ0Ny41NjYwNF0sXHJcbiAgWzE3NzYuNzcxMiwgNDQ4LjUyMTI0XSxcclxuICBbMTc3Ny4wOTM1LCA0NTQuMTMzMzZdLFxyXG4gIFsxNzc3Ljg0NSwgNDQyLjg0MzJdLFxyXG4gIFsxNzgyLjk0NTcsIDQ0MC42NDc4M10sXHJcbiAgWzE3ODYuNTQ1OSwgNDQ0LjA0MjQ1XSxcclxuICBbMTc4OC44MjYyLCA0MzguOTUzNThdLFxyXG4gIFsxNzk0LjUxODEsIDQzOC4zNDY1M10sXHJcbiAgWzE3OTcuODIxMywgNDQyLjY3NTc1XSxcclxuICBbMTc5Ny4wMzQ4LCA0NDcuOTY2MDZdLFxyXG4gIFsxODAzLjEwMDIsIDQ0NS4yMTIyOF0sXHJcbiAgWzE4MDQuODUwOCwgNDQwLjA5NTY0XSxcclxuICBbMTgwOC44MzMzLCA0MzYuODUxNTZdLFxyXG4gIFsxODEyLjcyNTMsIDQzMy45Nzk3NF0sXHJcbiAgWzE4MTQuNDk0MSwgNDI5LjY4MjddLFxyXG4gIFsxODEwLjkxNjYsIDQyNy4xMTkzMl0sXHJcbiAgWzE4MTIuMDA3OCwgNDIyLjIwODU2XSxcclxuICBbMTgxNS44MzY4LCA0MjQuMDY5MDZdLFxyXG4gIFsxODE5LjMwNTMsIDQyMS45ODI2XSxcclxuICBbMTgyMC40OTczLCA0MTcuMjIwMjhdLFxyXG4gIFsxODE2LjA2NzcsIDQxNi42MDQzNF0sXHJcbiAgWzE4MTIuMDU0OSwgNDE3Ljg2MjY3XSxcclxuICBbMTgwOS40NzUxLCA0MTMuNjQ4NV0sXHJcbiAgWzE4MDQuODI0NywgNDEwLjkyMDcyXSxcclxuICBbMTgwNC41NzUyLCA0MTUuNzUwNjddLFxyXG4gIFsxODA3LjI3MzEsIDQxOS4wMzVdLFxyXG4gIFsxODAyLjk2MzMsIDQyMi4yOTYzM10sXHJcbiAgWzE3OTguOTQ5NSwgNDI2LjUxNDE2XSxcclxuICBbMTc5OC4yMDg0LCA0MjEuNzI5Ml0sXHJcbiAgWzE4MDAuMjEzNiwgNDE3LjY0ODY1XSxcclxuICBbMTgwMC4wNzc5LCA0MTMuMTUwNDVdLFxyXG4gIFsxODAwLjM1ODksIDQwOC41ODFdLFxyXG4gIFsxNzk4LjgxMTQsIDQwNC4zNzQwOF0sXHJcbiAgWzE3OTUuOTUyMSwgNDA5Ljk0Ml0sXHJcbiAgWzE3OTQuNDY4MywgNDA2LjE5NTA0XSxcclxuICBbMTc5Mi40Mzk1LCA0MDIuODk4ODZdLFxyXG4gIFsxNzg4LjU0MjUsIDQwMy4wODgxM10sXHJcbiAgWzE3ODQuMDUyMSwgNDAzLjA2MTI1XSxcclxuICBbMTc3OS45MDk0LCA0MDQuMTE0N10sXHJcbiAgWzE3NzcuMjc1NiwgNDA2Ljk1Mjg1XSxcclxuICBbMTc3NC4yMTg4LCA0MDkuMTc5NjNdLFxyXG4gIFsxNzcxLjcxMzYsIDQxMi40NjY5OF0sXHJcbiAgWzE3NjkuMjAzNywgNDA5LjA0NzU1XSxcclxuICBbMTc2NC45NDQyLCA0MDguMTY1MTNdLFxyXG4gIFsxNzYxLjE0OTMsIDQwNy4wODU1XSxcclxuICBbMTc2My4zNjE3LCA0MDIuODI5NTZdLFxyXG4gIFsxNzY3LjQ0NiwgNDA0LjQxNTY1XSxcclxuICBbMTc2Ny4xMzEzLCAzOTkuNzI4NV0sXHJcbiAgWzE3NjIuOTg4NSwgMzk4LjExNjUyXSxcclxuICBbMTc1OC44NDEyLCA0MDMuNDg1OTZdLFxyXG4gIFsxNzU5LjQzMDMsIDM5OS44NjQ5M10sXHJcbiAgWzE3NTkuMjEsIDM5NS44Nzg1NF0sXHJcbiAgWzE3NTcuMTgxMywgMzg2LjcxNDU0XSxcclxuICBbMTc2Mi40NzA1LCAzODguMjU4NV0sXHJcbiAgWzE3NjYuMTgwMywgMzg1LjIzOTddLFxyXG4gIFsxNzYwLjgxNDIsIDM4My42MTI4XSxcclxuICBbMTc2NC4zNTkxLCAzNzUuMDAwMzRdLFxyXG4gIFsxNzYzLjMzNzksIDM4MC4yMzE0XSxcclxuICBbMTc2OC40Mzc0LCAzNzUuMDAzNV0sXHJcbiAgWzE3NzIuMjM0OSwgMzc2LjcxMTEyXSxcclxuICBbMTc2Ny41ODYyLCAzNjkuMTg3ODRdLFxyXG4gIFsxNzcxLjU0NzUsIDM3MS43NjgyXSxcclxuICBbMTc3My4zMDk4LCAzNjcuMDI1NV0sXHJcbiAgWzE3NzUuNTA0OSwgMzcyLjg5OTZdLFxyXG4gIFsxNzgzLjczMSwgMzcwLjA5NzIzXSxcclxuICBbMTc4NC4wODE4LCAzNzUuMjQ3OTJdLFxyXG4gIFsxNzgwLjY4NTMsIDM4MC4xNjgwNl0sXHJcbiAgWzE3ODQuMDg1OSwgMzgzLjIxMDAyXSxcclxuICBbMTc4OC41MjU1LCAzODMuNTUzMjhdLFxyXG4gIFsxNzc5Ljg1NjEsIDM4NS40Mjg2NV0sXHJcbiAgWzE3NjcuODQ2OSwgMzc5LjgyMjI0XSxcclxuICBbMTc3My41NDk4LCAzODAuMjk4MTZdLFxyXG4gIFsxNzc3LjE4NjksIDM3Ny43NTgzXSxcclxuICBbMTc3OS45MDM4LCAzNzMuODY3NzddLFxyXG4gIFsxNzc4LjY3MzUsIDM2OC41ODk1NF0sXHJcbiAgWzE3ODkuMDc2OSwgMzcwLjA4NzQ2XSxcclxuICBbMTc5My40NzIyLCAzNzMuMzU3MjddLFxyXG4gIFsxNzg3LjAzOTgsIDM3Ny43ODczNV0sXHJcbiAgWzE3OTEuMjkwOCwgMzc4LjczNzUyXSxcclxuICBbMTc5Ni4yMTk3LCAzNzkuMTk3NV0sXHJcbiAgWzE3OTkuNzUxMiwgMzgyLjk0NTM3XSxcclxuICBbMTc5Ny40ODg5LCAzODcuMjUzNl0sXHJcbiAgWzE3OTYuNzUzMiwgMzkxLjQ0NDldLFxyXG4gIFsxODAzLjIwOTEsIDM4Ni45NDddLFxyXG4gIFsxODA0LjY2NDgsIDM4MS41MDMzNl0sXHJcbiAgWzE4MDkuMDM0NywgMzg2LjU2OTQ2XSxcclxuICBbMTgxNS4yMjk3LCAzODkuMzYwODRdLFxyXG4gIFsxODE5Ljc1NzIsIDM5NC4zNTgyOF0sXHJcbiAgWzE4MjEuNjc4NywgMzk5LjkyNTM1XSxcclxuICBbMTgyNS45NjYzLCAzOTcuMDEwNjhdLFxyXG4gIFsxODMwLjU1NDcsIDQwMS41NDE4XSxcclxuICBbMTgyNS45MzY4LCA0MDMuNTE2MzNdLFxyXG4gIFsxODE2Ljg0MDMsIDQwMS4wODgzOF0sXHJcbiAgWzE4MTQuODY0NiwgMzk2LjcwMTQyXSxcclxuICBbMTgxMS40NDYzLCAzOTMuMDI1MzZdLFxyXG4gIFsxODA2Ljk5NjIsIDM5MS4yMjIzXSxcclxuICBbMTgxMC4yMTAyLCAzOTguMzg0MjJdLFxyXG4gIFsxODA2Ljg5MDcsIDQwMS45MTUzNF0sXHJcbiAgWzE4MTEuOTQ4NywgNDAzLjM0NzFdLFxyXG4gIFsxODE2LjA2OTIsIDQwNi4zMzUwMl0sXHJcbiAgWzE4MjAuODAxLCA0MDUuNjUzXSxcclxuICBbMTgyMi41MTUxLCA0MTMuMDU1OV0sXHJcbiAgWzE4MjMuODUxMSwgNDIxLjY4OTJdLFxyXG4gIFsxODI1LjQzOTIsIDQxNy4wNDc1OF0sXHJcbiAgWzE4MjcuMTc2MywgNDEyLjQ4N10sXHJcbiAgWzE4MzEuNDU2OCwgNDEzLjI0NzVdLFxyXG4gIFsxODMwLjAxNTQsIDQxNy42MjkyN10sXHJcbiAgWzE4MjguNDUwMiwgNDIxLjY0MTY2XSxcclxuICBbMTgzMy4wNTU5LCA0MjEuMjQ1Ml0sXHJcbiAgWzE4MzYuOTU2OSwgNDIwLjc0ODc4XSxcclxuICBbMTgzNi41MzU0LCA0MjUuNTAxN10sXHJcbiAgWzE4MzAuNzMwOCwgNDI1LjQzNTRdLFxyXG4gIFsxODI2LjUyODYsIDQyNS45NzEyXSxcclxuICBbMTgyMi4zMjYzLCA0MjcuMTYwODZdLFxyXG4gIFsxODE4Ljg2MjQsIDQyOS4wMDcyNl0sXHJcbiAgWzE4MTcuNzQwNywgNDM0LjYyNjQzXSxcclxuICBbMTgyMi41MDc4LCA0MzQuNjkwNjRdLFxyXG4gIFsxODI3LjQxMDksIDQzNS45MTYzMl0sXHJcbiAgWzE4MjUuODg4OSwgNDMwLjczNDM4XSxcclxuICBbMTgzMC41MDQzLCA0MzEuMzMwMzJdLFxyXG4gIFsxODMzLjEzMDEsIDQzNS40MTMwNl0sXHJcbiAgWzE4MzMuMTUxOSwgNDI4LjExMDhdLFxyXG4gIFsxODM2LjM4NDUsIDQzMC45OTI3NF0sXHJcbiAgWzE4NDAuODc0MywgNDMyLjMzNDUzXSxcclxuICBbMTgzOC4wNDYzLCA0MzYuMjk2ODhdLFxyXG4gIFsxODQwLjYyMTUsIDQ0MC40NTk1M10sXHJcbiAgWzE4NDMuMDk2NywgNDQ0LjQyNzhdLFxyXG4gIFsxODQ3LjA3ODksIDQ1My43MTkzM10sXHJcbiAgWzE4NTIuOTQyOSwgNDU2LjQ5MDhdLFxyXG4gIFsxODUzLjcyMSwgNDQ5Ljg4OTEzXSxcclxuICBbMTg1OS4yODEsIDQ0NS4yODE3XSxcclxuICBbMTg2MC4xNjYsIDQ1MS43MTE1NV0sXHJcbiAgWzE4NjAuODg4NywgNDU4LjA5NjldLFxyXG4gIFsxODQ0LjE2MDksIDQ2MC4wMjU1XSxcclxuICBbMTg0OC4yNTM0LCA0NjYuNDQwMjhdLFxyXG4gIFsxODY5LjY5NTgsIDUwMi4wMjAyM10sXHJcbiAgWzE4MjguNDc2LCA1MjYuNjE0MjZdLFxyXG4gIFsxODEzLjE2MzMsIDUxMy42Mjc4N10sXHJcbiAgWzE4MDkuODM5MSwgNTA4LjQxNTI4XSxcclxuICBbMTgxNC40OTg4LCA0OTIuNzExNjRdLFxyXG4gIFsxODIwLjc1NzksIDQ5Mi4zMTgwOF0sXHJcbiAgWzE4MjUuMjA3MywgNDgxLjE2NzY2XSxcclxuICBbMTgxOS4yNjQ2LCA0NzYuNjU2NTZdLFxyXG4gIFsxODE0Ljc2NSwgNDg0LjY0MzA0XSxcclxuICBbMTgyMC43Nzc1LCA0ODUuNjExNjNdLFxyXG4gIFsxODA5LjI1LCA0ODkuODU0MzRdLFxyXG4gIFsxODA3Ljg4NCwgNDgzLjI4NDE4XSxcclxuICBbMTgwMi44MDMyLCA0NzkuMTY1Nl0sXHJcbiAgWzE4MDUuNDI0MiwgNDczLjE0MzU1XSxcclxuICBbMTc5OC41OTYzLCA0NzEuOTI2NV0sXHJcbiAgWzE3OTUuNzMzOSwgNDc4LjMyNDRdLFxyXG4gIFsxNzkxLjE2OTIsIDQ3My41NTUzXSxcclxuICBbMTc4NS4wNjU3LCA0NzAuMjE1OV0sXHJcbiAgWzE3ODAuOTIxNCwgNDY0Ljg0NzQ3XSxcclxuICBbMTc4NC4zNzA3LCA0NzcuMTE2MjddLFxyXG4gIFsxNzc4Ljg0NTMsIDQ4Mi4wOTk5XSxcclxuICBbMTc4NC4wMjAzLCA0ODQuOTExMDddLFxyXG4gIFsxNzg5Ljg4MzgsIDQ4MS43NzEzXSxcclxuICBbMTc5My4xODg1LCA0ODcuNjgyODNdLFxyXG4gIFsxNzk3LjgzMzEsIDQ4NC4xMTA3OF0sXHJcbiAgWzE4MDIuNzk1LCA0ODcuNjE0OF0sXHJcbiAgWzE3OTcuODUyMywgNDkxLjkxNl0sXHJcbiAgWzE4MDAuMDgyOSwgNDk3LjUwNTIyXSxcclxuICBbMTc5NS40OTA1LCA0OTguNjQ2MV0sXHJcbiAgWzE3OTIuMDE2MSwgNDk0LjY4NjM3XSxcclxuICBbMTc4OS4wNDkxLCA1MDAuNzA2NDJdLFxyXG4gIFsxNzkzLjM0MDcsIDUwMy42MzA4Nl0sXHJcbiAgWzE3ODguNjE1MiwgNTA3LjY4OTU4XSxcclxuICBbMTc5OC43NzgsIDUwNC4wMzAzM10sXHJcbiAgWzE4MDguNTg2OCwgNTAzLjM0NjI4XSxcclxuICBbMTgwNC44MzMxLCA0OTQuMDc1Ml0sXHJcbiAgWzE4MDMuOTIyLCA1MDAuNTM5MTVdLFxyXG4gIFsxODE1LjQ0ODUsIDUwNi4xMTUzNl0sXHJcbiAgWzE4MjAuODcyMywgNTEzLjU3OV0sXHJcbiAgWzE4MTcuMDgwOSwgNTE5LjQwMzNdLFxyXG4gIFsxODIyLjAwMzgsIDUyNC43NjA0NF0sXHJcbiAgWzE4MDUuODgyNiwgNTMwLjM4ODRdLFxyXG4gIFsxODA2Ljg4MjgsIDUxOC40MTU5NV0sXHJcbiAgWzE4MDUuNjUzMSwgNTEyLjYxOTI2XSxcclxuICBbMTgwMS41MjM0LCA1MjQuNjA1OTZdLFxyXG4gIFsxNzk0LjkyODUsIDUyOS4wNzg3NF0sXHJcbiAgWzE3ODguNTk2NywgNTI0LjMyNzMzXSxcclxuICBbMTc5NC44Mzk2LCA1MjEuNDUyMTVdLFxyXG4gIFsxNzg0LjU2MjEsIDUxMi4yNjk1M10sXHJcbiAgWzE3ODguMjcwNCwgNTE3LjYxOThdLFxyXG4gIFsxNzkzLjI4NywgNTE0LjIyMzc1XSxcclxuICBbMTc5NC44MTIsIDUwOC44OTU1XSxcclxuICBbMTc5OS44OTM4LCA1MTAuOTMxMTJdLFxyXG4gIFsxODAzLjU3OTgsIDUwNi41NDY1N10sXHJcbiAgWzE4MDAuMDY1MiwgNTE3LjE4MDhdLFxyXG4gIFsxODA5LjM0NTIsIDUyMy42MTEyXSxcclxuICBbMTgxMi43MTcyLCA1MzMuNDY4Nl0sXHJcbiAgWzE4MjcuNjU3MiwgNTMzLjQ2Nl0sXHJcbiAgWzE4MzUuNDA4MSwgNTMxLjU1MTNdLFxyXG4gIFsxODY2LjQ2NDgsIDU2MS45OTQ5M10sXHJcbiAgWzE4NzMuODk1OCwgNTc0LjMxNTRdLFxyXG4gIFsxODc2Ljc3NTUsIDU2NS4yMzQyNV0sXHJcbiAgWzE4ODEuNTkyMywgNTYzLjcyODE1XSxcclxuICBbMTg4My44OTExLCA1NTguMTI1MDZdLFxyXG4gIFsxODg2LjQ5MzQsIDU2NC43NzUzXSxcclxuICBbMTg5MS44MzY5LCA1NjMuNDU4M10sXHJcbiAgWzE4OTcuMjg4LCA1NTUuMjk4MzRdLFxyXG4gIFsxODg5Ljg3NjUsIDU0MS41ODA1N10sXHJcbiAgWzE4ODMuNjk2NSwgNTM2LjkzNzVdLFxyXG4gIFsxODgwLjk2MjgsIDU0My4yNTQ3XSxcclxuICBbMTg3NC4wMTk5LCA1NDEuOTI4MV0sXHJcbiAgWzE4NzMuMTg0MiwgNTU0LjkxNDA2XSxcclxuICBbMTg3Ny42NzgyLCA1NTIuOTc0MjRdLFxyXG4gIFsxODgyLjM4MjksIDU1Mi40MjY4XSxcclxuICBbMTg4Ni4yMTIyLCA1NDguODE5OTVdLFxyXG4gIFsxODkxLjU0NzcsIDU1MC4yMTYyNV0sXHJcbiAgWzE4ODkuODg0MiwgNTU3LjExMV0sXHJcbiAgWzE4NzcuODg0LCA1NTkuMjEyMV0sXHJcbiAgWzE4NjcuNDEyNCwgNTU2LjQ0ODddLFxyXG4gIFsxODcxLjk3MzQsIDU2NC42MDY3NV0sXHJcbiAgWzE4NzMuMzI2OSwgNTY5LjczODNdLFxyXG4gIFsxODcyLjE4MjMsIDU1OS44NzUwNl0sXHJcbiAgWzE4NjcuNDg3OCwgNTY3LjU3ODZdLFxyXG4gIFsxODY3LjYxMTEsIDU3Mi45NDldLFxyXG4gIFsxODYyLjY2MTUsIDU3MC41Njc2XSxcclxuICBbMTg2MS4xMTQsIDU2NS4wMjIwM10sXHJcbiAgWzE4NTEuNzg1OSwgNTY5Ljc0NjQ2XSxcclxuICBbMTg1Ny4xMzUzLCA1NzAuOTc3N10sXHJcbiAgWzE4NTkuODA5MywgNTc1LjYxMzM0XSxcclxuICBbMTg1NC41MTIzLCA1NzcuNDY1M10sXHJcbiAgWzE4NDkuNDUwOSwgNTc1LjE2NTE2XSxcclxuICBbMTg0NC44MDU1LCA1NzguMzQ0NF0sXHJcbiAgWzE4NTAuMDA4OSwgNTgxLjQwNjQzXSxcclxuICBbMTg1Mi43NiwgNTg2LjE5MDhdLFxyXG4gIFsxODU1Ljc2MTIsIDU4My40MzM5Nl0sXHJcbiAgWzE4NjAuNjExOCwgNTg1LjA0NTg0XSxcclxuICBbMTg1OS45NTEzLCA1ODAuNTcyXSxcclxuICBbMTg2NC41NDk2LCA1NzcuNjA5NV0sXHJcbiAgWzE4NzAuMjAyLCA1NzYuOTQ0Ml0sXHJcbiAgWzE4NjguODEwMywgNTgxLjA2MTE2XSxcclxuICBbMTg2NS40MjE5LCA1ODMuODEyNl0sXHJcbiAgWzE4NjkuNjMwNywgNTg3LjE0ODNdLFxyXG4gIFsxODcyLjk5NTgsIDU4NC4wMDc4XSxcclxuICBbMTg3Ni4xNTU2LCA1ODguNzQ0MTRdLFxyXG4gIFsxODgwLjUyNjYsIDU4Ni40MzI3XSxcclxuICBbMTg4Mi40Njc5LCA1OTEuNDM4N10sXHJcbiAgWzE4NzUuODE4NSwgNTk0LjYzODldLFxyXG4gIFsxODcxLjcyMSwgNTkxLjczNDJdLFxyXG4gIFsxODY4LjczMzgsIDU5Ny40MTYyNl0sXHJcbiAgWzE4NjIuNzEwNCwgNTk0LjU2OTNdLFxyXG4gIFsxODY2Ljk2MzksIDU5MS45Nzk0XSxcclxuICBbMTg2My44OSwgNTg4LjY5NzE0XSxcclxuICBbMTg1OS4yMzcsIDU4OS42Nzg3XSxcclxuICBbMTg1NS42MzAxLCA1OTAuMjA4M10sXHJcbiAgWzE4NTIuMTYsIDU5MS4xMTg5Nl0sXHJcbiAgWzE4NDkuMjUyNywgNTg3LjU0MDM0XSxcclxuICBbMTg0Ni4zMjQ3LCA1ODUuNjYwNzddLFxyXG4gIFsxODQzLjQyMjEsIDU4My40NDQ2XSxcclxuICBbMTgzOS4zNTA2LCA1ODEuMjk5OV0sXHJcbiAgWzE4MzcuMjA1MywgNTg1LjcxOTFdLFxyXG4gIFsxODQxLjQzOTIsIDU4OC4zODMwNl0sXHJcbiAgWzE4MzcuNjYxNCwgNTkwLjg3NTVdLFxyXG4gIFsxODMyLjY2NzIsIDU4OC42OTg3XSxcclxuICBbMTgyOS45MDg5LCA1OTMuNDM5OF0sXHJcbiAgWzE4MjUuNDkyNCwgNTk1Ljg1MjddLFxyXG4gIFsxODMwLjA0NDIsIDU5OC45ODkyNl0sXHJcbiAgWzE4MjYuMjgwNSwgNjAxLjM1NzddLFxyXG4gIFsxODIxLjUwMjMsIDYwMC4xOTI3XSxcclxuICBbMTgxNi4xNzA3LCA2MDAuNzk3OV0sXHJcbiAgWzE4MTEuNTE3NiwgNjAxLjQ5ODRdLFxyXG4gIFsxODEwLjI4NDksIDYwNC44MzI3Nl0sXHJcbiAgWzE4MDcuNjkwOSwgNjA2LjMzMTU0XSxcclxuICBbMTgwNy4xMjM1LCA2MTAuMTMxNV0sXHJcbiAgWzE4MDQuMDM5NiwgNjA3Ljg1MjM2XSxcclxuICBbMTgwMi42ODIxLCA2MTEuMTU1NV0sXHJcbiAgWzE3OTguNTc2MywgNjExLjY0NDRdLFxyXG4gIFsxNzk5Ljc0OCwgNjA3LjUyMzI1XSxcclxuICBbMTc5NC42ODA0LCA2MDkuNDc3OV0sXHJcbiAgWzE3OTQuNDkyNiwgNjEzLjc5NDldLFxyXG4gIFsxNzkwLjM0MTEsIDYxMy44MzA3XSxcclxuICBbMTc5MC4wMjE3LCA2MTkuMjIxNl0sXHJcbiAgWzE3ODYuMTU3LCA2MTcuMzU2NTddLFxyXG4gIFsxNzgzLjI2NTEsIDYyMS42NTczNV0sXHJcbiAgWzE3NzguNDczNiwgNjIzLjg5NzZdLFxyXG4gIFsxNzgxLjA2ODQsIDYyNy43MDc0Nl0sXHJcbiAgWzE3NzkuNzMzMywgNjMyLjc5NTZdLFxyXG4gIFsxNzg0Ljc0NjEsIDYzMS41OTA3XSxcclxuICBbMTc4NS4zMDIyLCA2MjYuNjc1M10sXHJcbiAgWzE3ODguMTM0LCA2MjMuNTM0OV0sXHJcbiAgWzE3OTIuMzc3OCwgNjI0LjU5OV0sXHJcbiAgWzE3OTQuOTE2MywgNjI4Ljg0Mzc1XSxcclxuICBbMTc4OS41NjM3LCA2MjkuOTE4MTVdLFxyXG4gIFsxNzkzLjMxMTIsIDYzMy4zNzMzXSxcclxuICBbMTc5MC4xOTYsIDYzNi40OTAxXSxcclxuICBbMTc4NS44MTQxLCA2MzYuMTAwMzRdLFxyXG4gIFsxNzgxLjQxNzEsIDYzNi45OTUyNF0sXHJcbiAgWzE3NzcuODcxNiwgNjM5LjQ4OV0sXHJcbiAgWzE3NzUuODM4LCA2MzYuMTE2MV0sXHJcbiAgWzE3NzMuNzAxNCwgNjMyLjMzNjJdLFxyXG4gIFsxNzc2Ljc0NDksIDYyOS4yMzczXSxcclxuICBbMTc3My4zODg0LCA2MjYuNDQ1MDddLFxyXG4gIFsxNzY4LjQ1ODcsIDYyNy41NTg5Nl0sXHJcbiAgWzE3NjkuMzY4NCwgNjMxLjg1NThdLFxyXG4gIFsxNzcwLjgzNzIsIDYzNi41ODk5N10sXHJcbiAgWzE3NjMuMjIwMiwgNjM4Ljc2ODA3XSxcclxuICBbMTc1OC43OTgzLCA2MzguNjA4MTVdLFxyXG4gIFsxNzU5LjY0NDksIDY0My41NjU2XSxcclxuICBbMTc2NS45ODEyLCA2MzUuNTE2MV0sXHJcbiAgWzE3NjQuMDU5NCwgNjMwLjY4OTQ1XSxcclxuICBbMTc1OS45ODQ0LCA2MzMuNzc5NF0sXHJcbiAgWzE3NTQuMTMzLCA2MzYuNzgyMV0sXHJcbiAgWzE3NTQuNzIzOSwgNjQxLjcwMTg0XSxcclxuICBbMTc0OS4xMTYsIDY0Mi40NDkxXSxcclxuICBbMTc1Mi40MjA3LCA2NDYuMDI3MV0sXHJcbiAgWzE3NTYuMTYxNCwgNjQ3LjUwMTE2XSxcclxuICBbMTc1OS45NzM2LCA2NTIuMzQ3NTNdLFxyXG4gIFsxNzY4Ljg0NzksIDY1MC40MzUxXSxcclxuICBbMTc2OC40OTYyLCA2NDYuMjQ4OV0sXHJcbiAgWzE3NzQuMjMwNSwgNjQ5Ljg2NDU2XSxcclxuICBbMTc3Ny4xMDY0LCA2NTQuMTYxOF0sXHJcbiAgWzE3ODAuNDU3OSwgNjU3LjcwMThdLFxyXG4gIFsxNzg0LjY0MjEsIDY1OS40MTUzNF0sXHJcbiAgWzE3ODguNzkzNiwgNjU1LjgwMzldLFxyXG4gIFsxNzgzLjk3LCA2NTMuNjIzNTRdLFxyXG4gIFsxNzgwLjczOCwgNjUwLjI5OTNdLFxyXG4gIFsxNzgxLjY2NDEsIDY0Ni4wOTZdLFxyXG4gIFsxNzg2LjY1NTksIDY0Ni45MjczXSxcclxuICBbMTc4OS40NTc5LCA2NTAuODcwNF0sXHJcbiAgWzE3OTQuMzYwMiwgNjU4LjQ5Mjc0XSxcclxuICBbMTc5OS45NjE1LCA2NTkuNjkxN10sXHJcbiAgWzE3OTQuODM4OSwgNjUzLjI4NzY2XSxcclxuICBbMTc5NC42MzI0LCA2NjMuOTc3N10sXHJcbiAgWzE3OTUuNTk4OSwgNjY5LjY1Mzc1XSxcclxuICBbMTgwMS40Nzc5LCA2NjcuNTJdLFxyXG4gIFsxODAzLjk1ODEsIDY3My4xMzMwNl0sXHJcbiAgWzE4MDguOTQsIDY2OC42NzgxNl0sXHJcbiAgWzE4MTUuMTkwNiwgNjcxLjgyMDhdLFxyXG4gIFsxODU2Ljc3OTUsIDcwMy4wNzM2XSxcclxuICBbMTg2My40NDM2LCA3MDIuMjE5NjddLFxyXG4gIFsxODYxLjc4MDQsIDY5NC45OTg5Nl0sXHJcbiAgWzE4NTUuNzU1OSwgNjkwLjE2Nl0sXHJcbiAgWzE4NjAuMzYxMSwgNjg2LjY4NDNdLFxyXG4gIFsxODcwLjMyODQsIDY4NC4yMDQzXSxcclxuICBbMTg3My41NjUsIDY4MC4wNjIxXSxcclxuICBbMTg3Ni41ODg5LCA2OTEuNDIwNl0sXHJcbiAgWzE4NzIuMDc5OCwgNjg4LjY0NV0sXHJcbiAgWzE4NjUuNzIzMSwgNjg4Ljg1MDZdLFxyXG4gIFsxODY4Ljk2NCwgNjkzLjIzOV0sXHJcbiAgWzE4NjguNTI0NCwgNjk5LjA1NjhdLFxyXG4gIFsxODc0LjM4OTksIDY5Ny44Nzk2NF0sXHJcbiAgWzE4NzYuNTY5MiwgNjg1LjE3MjM2XSxcclxuICBbMTg3OS4zMTA4LCA2ODAuNDk0OV0sXHJcbiAgWzE4ODEuNjU3MiwgNjg2Ljg0NTk1XSxcclxuICBbMTg4My4yMjM5LCA2OTEuODc1XSxcclxuICBbMTg4Ni43MDg5LCA2OTcuODg1MTNdLFxyXG4gIFsxODc5LjkzNzksIDY5NS42NzUzXSxcclxuICBbMTg4MS4wMjIyLCA3MDEuMDkxN10sXHJcbiAgWzE4NzYuMjIyOCwgNzA0LjcyODE1XSxcclxuICBbMTg3MC4xNDc4LCA3MDUuODE0NDVdLFxyXG4gIFsxODY3Ljg1NCwgNzExLjMwNDFdLFxyXG4gIFsxODY4LjM0NjcsIDcxNi44OTYxXSxcclxuICBbMTg2OS4zMzI4LCA3MjMuMTg3NV0sXHJcbiAgWzE4NjcuMTU1LCA3MjkuNDY4NF0sXHJcbiAgWzE4NzEuMjgxNywgNzM0LjQ5MjNdLFxyXG4gIFsxODY5Ljc2MzIsIDc0Mi4yMTUyXSxcclxuICBbMTg3Ni4xOTEsIDcxMS42MTc2XSxcclxuICBbMTg3NC40MDA5LCA3MTguMDc5ODNdLFxyXG4gIFsxOTAxLjIzMTQsIDcwNS4yNzcwNF0sXHJcbiAgWzE5MDkuNDE1OSwgNzA4LjIzODA0XSxcclxuICBbMTkxNy4wNjg2LCA3MTEuNDk2NzddLFxyXG4gIFsxOTA3LjIxOCwgNzMwLjk2MDk0XSxcclxuICBbMTk1Mi41NjM2LCA3MzcuODk0NTNdLFxyXG4gIFsxOTU1LjUxMzksIDcyOC42MDgzXSxcclxuICBbMTk2My42NTAxLCA3MjYuODc1XSxcclxuICBbMTk2MC4wMTc4LCA3MjEuMTQ4MV0sXHJcbiAgWzE5NjcuMDQ4MSwgNzE5LjYyMjNdLFxyXG4gIFsxOTY3LjY4NzMsIDcxMy42OTc0NV0sXHJcbiAgWzE5NzUuMTA5MSwgNzE2LjAyOTRdLFxyXG4gIFsxOTc5Ljc2MDEsIDcwNi4wNzg2XSxcclxuICBbMTk3My43MzA2LCA3MDkuMjYyOTRdLFxyXG4gIFsxOTkxLjc2MzQsIDY5OC45MzcyXSxcclxuICBbMTk4NS43NDI5LCA3MDIuMTQyNl0sXHJcbiAgWzE5NjMuOTk3MSwgNjYxLjUwNTg2XSxcclxuICBbMTk1Ni4zODQzLCA2NjEuOTg1MDVdLFxyXG4gIFsxOTUyLjM5ODksIDY1Ni43NDExNV0sXHJcbiAgWzE5NDkuNDQ1LCA2NjMuMjY3OTRdLFxyXG4gIFsxOTQyLjcyNzMsIDY2My4yNjg3XSxcclxuICBbMTk1My45ODU3LCA2NTEuMzQ4XSxcclxuICBbMTk0OC4zNzk2LCA2NTAuMjU2OTZdLFxyXG4gIFsxOTQyLjU0NDIsIDY1MS41MDc0NV0sXHJcbiAgWzE5NDUuODg2LCA2NTYuODE0Nl0sXHJcbiAgWzE5MzkuODYxLCA2NTcuNDU1OF0sXHJcbiAgWzE5MzQuOTIyNiwgNjU4LjY4ODNdLFxyXG4gIFsxOTM2LjIwNzIsIDY2NC45OTg4XSxcclxuICBbMTkzMC4zOTQ1LCA2NjcuNDY3NjVdLFxyXG4gIFsxOTMwLjA1NjQsIDY2MC44NjYzXSxcclxuICBbMTkyNC41MzQ1LCA2NjAuODgxMV0sXHJcbiAgWzE5MjUuMzMyNSwgNjU1LjYxNzVdLFxyXG4gIFsxOTI3LjAwNjcsIDY1MC42NDM5XSxcclxuICBbMTkyMy42NzYsIDY0Ny4xMzUyNV0sXHJcbiAgWzE5MjYuOTUwNCwgNjQxLjU5OTNdLFxyXG4gIFsxOTI2LjE1NTgsIDYzNS4yMTAxXSxcclxuICBbMTkzMi4wODIzLCA2MjkuMTgzMl0sXHJcbiAgWzE5MzQuNDQ4NiwgNjIzLjU5MjRdLFxyXG4gIFsxOTMyLjc3ODIsIDYxMS4yMTgxXSxcclxuICBbMTkzMS41MzIyLCA2MTcuMDk1MzRdLFxyXG4gIFsxOTI0LjQ2MTcsIDYxMi41ODg0XSxcclxuICBbMTkyMS45MDYyLCA2MDIuNjE2MV0sXHJcbiAgWzE5MjIuNzc4MywgNTk0LjI1NTVdLFxyXG4gIFsxOTI5LjUxOTIsIDU5OC45NDQzNF0sXHJcbiAgWzE5MjguMzQxOCwgNjA1Ljg3MjFdLFxyXG4gIFsxOTM2Ljg5ODksIDYwNC43MjI2XSxcclxuICBbMTk0MS4zNzYyLCA2MTAuNzQwMl0sXHJcbiAgWzE5NDkuNDYwNywgNjEwLjA0NzZdLFxyXG4gIFsxOTQ3LjQyODEsIDYxNi4xNzM0XSxcclxuICBbMTk0NC44MTYyLCA2MjEuNjY2NV0sXHJcbiAgWzE5MzguODk0NywgNjE3LjkyNTldLFxyXG4gIFsxOTQwLjUxNDYsIDYyNS42MDI4XSxcclxuICBbMTkzNy45MDUzLCA2MzAuODAyMzddLFxyXG4gIFsxOTQyLjkzOTIsIDYzMy43MjldLFxyXG4gIFsxOTQ3Ljc0MDcsIDYzNi4xODgxXSxcclxuICBbMTk1Mi4zMjE0LCA2MzkuODFdLFxyXG4gIFsxOTU0LjYzMTgsIDYzNS4wNjk3XSxcclxuICBbMTk1MS42MjEzLCA2MzAuNDM5MV0sXHJcbiAgWzE5NDYuMDczLCA2MjguNTM0Nl0sXHJcbiAgWzE5NTAuOTY0MSwgNjIzLjQ5NjhdLFxyXG4gIFsxOTU1LjI2NTEsIDYxOC41MTMxXSxcclxuICBbMTk1OS4wMDU0LCA2MTMuNzk1MzVdLFxyXG4gIFsxOTY2LjI3MzcsIDYxOS4wMTg0M10sXHJcbiAgWzE5NjIuMjcwNSwgNjIzLjgzMjRdLFxyXG4gIFsxOTU2Ljg2NzIsIDYyNi4wMDEyXSxcclxuICBbMTk1OS40NDgyLCA2MzEuOTk3XSxcclxuICBbMTk2OS45NTEyLCA2MjYuOTIyXSxcclxuICBbMTk2NS40NjYyLCA2MzEuMDkwOF0sXHJcbiAgWzE5NjcuNzM0NywgNjQyLjQ2M10sXHJcbiAgWzE5NjMuNjM4NywgNjM3LjQ1MTRdLFxyXG4gIFsxOTU4LjIwOTIsIDY0MC4wNTY5XSxcclxuICBbMTk1Mi4zNTA1LCA2NDUuMjg5NTVdLFxyXG4gIFsxOTU3LjM1NTUsIDY0Ni4xNjk0M10sXHJcbiAgWzE5NjIuNDc3NSwgNjQ0LjkyOTddLFxyXG4gIFsxOTY1Ljg0NTYsIDY1MC4wNzE2XSxcclxuICBbMTk2OS4zMTkzLCA2NTQuODY3M10sXHJcbiAgWzE5NjkuMjg3MSwgNjYzLjU1NzZdLFxyXG4gIFsxOTYxLjM2OSwgNjU2LjI0NDc1XSxcclxuICBbMTk1OS41MjQyLCA2NTEuNDkyNTVdLFxyXG4gIFsxOTQ3LjY0MDUsIDY0Mi40NzI5Nl0sXHJcbiAgWzE5NDMuNzE1MSwgNjQ1LjY5MDczXSxcclxuICBbMTk0MS42NzM2LCA2NDAuMTQyOF0sXHJcbiAgWzE5MzcuMzk2MSwgNjM2LjczMTldLFxyXG4gIFsxOTMxLjc5MTUsIDYzNS4yNjkzNV0sXHJcbiAgWzE5MzMuNDg2OCwgNjQxLjE0NTVdLFxyXG4gIFsxOTM3LjcxNDcsIDY0NS41Mjk2Nl0sXHJcbiAgWzE5MzEuNDczNCwgNjUzLjkzOTFdLFxyXG4gIFsxOTM2LjY4OSwgNjUxLjU5NTZdLFxyXG4gIFsxOTMxLjI4MDIsIDY0Ni45MjU5XSxcclxuICBbMTkyMC40Njc1LCA2NDIuMzQxOV0sXHJcbiAgWzE5MTcuMjE0OCwgNjQ3LjY1MDc2XSxcclxuICBbMTkxMi4zNDUsIDY0OC4yNjc4XSxcclxuICBbMTkxOS45MDU4LCA2NTIuMzQwNl0sXHJcbiAgWzE5MTkuMjEwNywgNjU3LjU5MzNdLFxyXG4gIFsxOTEzLjQ5ODMsIDY1NC42MjFdLFxyXG4gIFsxOTA3LjA3ODUsIDY1Ni40NTk1XSxcclxuICBbMTkxMC42MDE4LCA2NjAuNTIwNF0sXHJcbiAgWzE5MTUuMDI1OSwgNjYxLjQ3ODddLFxyXG4gIFsxOTE5LjMxNDEsIDY2My45MzUwNl0sXHJcbiAgWzE5MjQuMzY2MSwgNjY2LjM2M10sXHJcbiAgWzE5MTcuNDY4OSwgNjY5LjgwMDA1XSxcclxuICBbMTkxMi4wMDU2LCA2NjcuMjE0Nl0sXHJcbiAgWzE5MDYuNTU2NCwgNjY4Ljc5MzJdLFxyXG4gIFsxODk3LjcxMDEsIDY4My4xNjU3XSxcclxuICBbMTg5OS4yMDY1LCA2OTAuMDg5ODRdLFxyXG4gIFsxOTAzLjMyMSwgNjg2LjA4OTVdLFxyXG4gIFsxODg4LjA4LCA2OTEuMTQ5ODRdLFxyXG4gIFsxODkyLjc5MywgNjkxLjA1MjZdLFxyXG4gIFsxODkzLjI4NTYsIDY4Ni4zOF0sXHJcbiAgWzE4OTEuNzg5NywgNjgxLjM5NzAzXSxcclxuICBbMTg4Ny4zNjg0LCA2ODUuNjg3OV0sXHJcbiAgWzE4ODQuMDQyMiwgNjgxLjU2ODY2XSxcclxuICBbMTg4Ny44NDA4LCA2NzguMzM4NF0sXHJcbiAgWzE4OTYuMDM0OCwgNjY3LjgzNzY1XSxcclxuICBbMTg5MC42MTc5LCA2NjYuODAzN10sXHJcbiAgWzE4ODguODEsIDY3Mi42MjAwNl0sXHJcbiAgWzE4ODIuOTI2OSwgNjc1LjQ3MTA3XSxcclxuICBbMTg3OC4zMjY5LCA2NjkuMTA5Nl0sXHJcbiAgWzE4ODMuMzcyNiwgNjY0LjIxOTRdLFxyXG4gIFsxODg4LjgyODQsIDY2MS43MTY1NV0sXHJcbiAgWzE5MDAuOTM0MiwgNjY1Ljc5NDA3XSxcclxuICBbMTkwNi4wNTI3LCA2NjIuODc0MTVdLFxyXG4gIFsxOTAwLjY3MjYsIDY2MC4zMDExXSxcclxuICBbMTkwMS4yNzAxLCA2NTUuODQwOV0sXHJcbiAgWzE4OTQuODc4OSwgNjYxLjQwNDk3XSxcclxuICBbMTg4MC4xNjg1LCA2MTYuNTc1NDRdLFxyXG4gIFsxODczLjU1MDksIDYxNS42NF0sXHJcbiAgWzE4NjMuOTI5OCwgNjI0Ljg0NDZdLFxyXG4gIFsxODY5LjUwMzQsIDYyMC41OTA0NV0sXHJcbiAgWzE4NjQuMjQ5NSwgNjE5Ljc1NzFdLFxyXG4gIFsxODYxLjExMiwgNjE1Ljc4NjZdLFxyXG4gIFsxODY4LjEyNjIsIDYxNS4zOTc5NV0sXHJcbiAgWzE4NjQuNjE2NywgNjExLjYwMTNdLFxyXG4gIFsxODY5Ljg5OTMsIDYwOS4xNjUzNF0sXHJcbiAgWzE4NzYuNDg5NSwgNjEwLjc4NDRdLFxyXG4gIFsxODgzLjEzNjUsIDYxMC41ODkwNV0sXHJcbiAgWzE4ODkuMTY1OCwgNjAxLjYwM10sXHJcbiAgWzE4ODQuMjE5MiwgNjA0LjI4NDY3XSxcclxuICBbMTg4OC44NjQ5LCA1ODguMzA5NjNdLFxyXG4gIFsxODg0Ljk5MDcsIDU4NS41NjcxXSxcclxuICBbMTg4OC4wMjgyLCA1ODEuMzk4OF0sXHJcbiAgWzE4ODIuOTM4OCwgNTgxLjEwOTg2XSxcclxuICBbMTg3Ny44MTM1LCA1ODMuMDA4XSxcclxuICBbMTg3NC40MDUsIDU3OS40MTkwN10sXHJcbiAgWzE4NzguODYyNywgNTc4LjA4NDA1XSxcclxuICBbMTg3OC43MDc2LCA1NzMuMjU4Ml0sXHJcbiAgWzE4ODAuMjk1MywgNTY5LjA1MzM0XSxcclxuICBbMTg4NS4xNDA3LCA1NzAuOTIzMzRdLFxyXG4gIFsxODg4LjM4OTksIDU3NS42NTk2N10sXHJcbiAgWzE4ODMuNDU3OCwgNTc2LjEyNzhdLFxyXG4gIFsxODkyLjY1NzMsIDU3OS4yMDAzXSxcclxuICBbMTg5NC40MDQ4LCA1NzQuNDddLFxyXG4gIFsxODkwLjgxMzcsIDU2OS44NTczNl0sXHJcbiAgWzE4OTYuOTYxMywgNTY5LjI2MDFdLFxyXG4gIFsxODk3Ljk2OTgsIDU2My4xNDY5XSxcclxuICBbMTkwMi41NTQyLCA1NzEuMTI1XSxcclxuICBbMTg5OS41MTg5LCA1NzYuNDg5MjZdLFxyXG4gIFsxODk4LjM2MDEsIDU4MS45NzMxNF0sXHJcbiAgWzE4OTMuMTYyMSwgNTg0Ljg3MTddLFxyXG4gIFsxOTAwLjcxNzUsIDU5Ny4zOV0sXHJcbiAgWzE5MTYuMDg1OSwgNTk2Ljg4ODJdLFxyXG4gIFsxODk1Ljk0NiwgNjAzLjc5MjddLFxyXG4gIFsxODg5LjE5NTYsIDYwNy44NzMxN10sXHJcbiAgWzE4NzguNzcyOCwgNjA1LjQxNV0sXHJcbiAgWzE4NzUuNTE5OSwgNTk5Ljg0MzRdLFxyXG4gIFsxODcyLjQzODEsIDYwNC4wODRdLFxyXG4gIFsxODY2Ljk0MTUsIDYwMi4zODA4Nl0sXHJcbiAgWzE4NjMuMzIzNCwgNjA1LjgzOTg0XSxcclxuICBbMTg1OS4yMjY2LCA2MDkuOTkxMV0sXHJcbiAgWzE4NTcuNDIzMiwgNjA1LjE4Ml0sXHJcbiAgWzE4NTUuMTQyNiwgNjAxLjA4NDg0XSxcclxuICBbMTg2MS4xOTQxLCA2MDAuMTc4ODNdLFxyXG4gIFsxODU4LjA0MjUsIDU5NS41MzczNV0sXHJcbiAgWzE4NTQuMTcxOSwgNTk1LjYzODRdLFxyXG4gIFsxODUwLjk4OSwgNTk4LjUwOTldLFxyXG4gIFsxODQ5LjM3ODQsIDYwMS43MzldLFxyXG4gIFsxODQ1LjQ4NzUsIDYwMy41NTE2NF0sXHJcbiAgWzE4NDIuMDExNSwgNTk4LjQ2MThdLFxyXG4gIFsxODQ2LjA0ODEsIDU5OC44ODIzXSxcclxuICBbMTg0Ni40NzksIDU5NS4xMzc2XSxcclxuICBbMTg1MC4yMzY4LCA1OTQuNjQ2N10sXHJcbiAgWzE4NDguMTkzOCwgNTkxLjMyNjY2XSxcclxuICBbMTg0NC44Mjc0LCA1OTAuMzgwNV0sXHJcbiAgWzE4NDIuNDg0OSwgNTkzLjczNDQ0XSxcclxuICBbMTgzOC43NjkyLCA1OTUuNDU2OV0sXHJcbiAgWzE4MzQuNDk0OSwgNTk0LjI0NzldLFxyXG4gIFsxODM0LjMzNjIsIDU5OC40NTgyXSxcclxuICBbMTgzNy43NzE2LCA2MDAuNTA2ODRdLFxyXG4gIFsxODQxLjI5LCA2MDIuODc1Nl0sXHJcbiAgWzE4NDIuOTAzMywgNjA3LjU0N10sXHJcbiAgWzE4NDcuNjkxOCwgNjA5LjI1MDczXSxcclxuICBbMTg1MC44MTczLCA2MDUuMzY3MjVdLFxyXG4gIFsxODUzLjI1NzQsIDYwOS4yMTIzXSxcclxuICBbMTg1NS42NzM2LCA2MTMuNjQ4Nl0sXHJcbiAgWzE4NTAuMzk0NywgNjE0LjY2MDM0XSxcclxuICBbMTg0NS41NjQ1LCA2MTcuNzIzOV0sXHJcbiAgWzE4NDUuMzQxOCwgNjEzLjI5NTRdLFxyXG4gIFsxODQxLjE4NjUsIDYxMi40Mjg2XSxcclxuICBbMTgzNi40NDQ4LCA2MTQuNDQ3OV0sXHJcbiAgWzE4MzcuMTk0NywgNjA5Ljk1Njg1XSxcclxuICBbMTgzMy4yMzQsIDYwNy44MDE3Nl0sXHJcbiAgWzE4MzcuODU2LCA2MDUuNTQzOTVdLFxyXG4gIFsxODMzLjI5NzcsIDYwMy4wNTZdLFxyXG4gIFsxODI0LjM1NTYsIDYwNS45NjQ3XSxcclxuICBbMTgyMC4zNTExLCA2MDUuMjk5MV0sXHJcbiAgWzE4MTcuMTM3LCA2MDQuNTQzNDZdLFxyXG4gIFsxODEzLjc2MjIsIDYwNS4wNTk4XSxcclxuICBbMTgxMS42MTYyLCA2MDguMzY2N10sXHJcbiAgWzE4MTAuODMzNywgNjExLjQ0MDA2XSxcclxuICBbMTgxMS4zOTU5LCA2MTQuOTM1XSxcclxuICBbMTgxNC40ODE4LCA2MTIuMDEzN10sXHJcbiAgWzE4MTYuMjc2NiwgNjA4LjY3NDJdLFxyXG4gIFsxODIwLjU1NDEsIDYxMC4wNjYyXSxcclxuICBbMTgyOS4wOTI1LCA2MDUuODczNjZdLFxyXG4gIFsxODI2LjE4MTQsIDYxMC43NTE3XSxcclxuICBbMTgzMS4xODA5LCA2MTIuMjYxODRdLFxyXG4gIFsxODI3Ljc3NzUsIDYxNi41NDAzXSxcclxuICBbMTgzNS43OTQyLCA2MjMuOTI3XSxcclxuICBbMTgzMC45MjI2LCA2MjcuMzM2XSxcclxuICBbMTgyOS44MTQsIDYyMS45NTQ4M10sXHJcbiAgWzE4MzMuMzkxMiwgNjE4LjEyODVdLFxyXG4gIFsxODM5LjkzNSwgNjE4Ljc0NThdLFxyXG4gIFsxODQ1LjU1NzMsIDYyMi4yNTU2XSxcclxuICBbMTg1MC4zMjQ3LCA2MjAuNzQ3NzRdLFxyXG4gIFsxODU0LjU0NTcsIDYxOC4zNjk0XSxcclxuICBbMTg1OC43ODQyLCA2MTkuODkwN10sXHJcbiAgWzE4NTkuNTI3LCA2MjMuNjMyMV0sXHJcbiAgWzE4NTQuNzE4OCwgNjIzLjc3ODddLFxyXG4gIFsxODUwLjY4NzMsIDYyNi4xMTcyXSxcclxuICBbMTg0NS45NjYxLCA2MjcuMjM1ODRdLFxyXG4gIFsxODQxLjIxNDgsIDYyNC40MzNdLFxyXG4gIFsxODM5LjMyOTMsIDYyOS4xNDFdLFxyXG4gIFsxODM0LjUyNjEsIDYzMS4xMjk2NF0sXHJcbiAgWzE4MzYuODUzMSwgNjM3LjM2NTRdLFxyXG4gIFsxODMxLjk0MjYsIDY0MS4wOTEyXSxcclxuICBbMTgzNi43Njk4LCA2NDIuOTczXSxcclxuICBbMTg0MC43NzMxLCA2MzQuODUxMjZdLFxyXG4gIFsxODQ0LjcwNSwgNjMyLjEwNjU3XSxcclxuICBbMTg0OS42OTE4LCA2MzEuODkyMTVdLFxyXG4gIFsxODUzLjkyODcsIDYzMC4wNTI3M10sXHJcbiAgWzE4NTguMzE1NywgNjI3LjkzNTY3XSxcclxuICBbMTg1OC4zODc3LCA2MzMuMTc4NF0sXHJcbiAgWzE4NTQuMDk1OCwgNjM2LjE5NDc2XSxcclxuICBbMTg0OS4wNzAzLCA2MzcuMTY4Ml0sXHJcbiAgWzE4NDUuMTQzLCA2MzguNTU0Ml0sXHJcbiAgWzE4NDEuODY3NywgNjQxLjUzMjddLFxyXG4gIFsxODQwLjgyMDEsIDY0Ny4wMTk0XSxcclxuICBbMTgzNS44MjA4LCA2NDguNDE5ODZdLFxyXG4gIFsxODMwLjk4NjMsIDY0Ny41NDc3XSxcclxuICBbMTgyNi40MDQ3LCA2NDMuNTg3NF0sXHJcbiAgWzE4MjUuMzE0MiwgNjM3LjczOTVdLFxyXG4gIFsxODMwLjg3NzksIDYzNS40Njc0XSxcclxuICBbMTgyNy4yMjA1LCA2MzEuOTU2MV0sXHJcbiAgWzE4MjUuMzA0MywgNjI3LjA5NTFdLFxyXG4gIFsxODI0LjcyOTIsIDYyMi4zMDg1M10sXHJcbiAgWzE4MjIuOTg0NiwgNjE4LjMwNjM0XSxcclxuICBbMTgyMi41ODYyLCA2MTQuMDQwMDRdLFxyXG4gIFsxODE3LjYwNzcsIDYxMy44NDgxNF0sXHJcbiAgWzE4MTguNDY4OSwgNjE3LjY2NDJdLFxyXG4gIFsxODE5LjYzNTMsIDYyMi4wNzUyXSxcclxuICBbMTgyMC4yMjAyLCA2MjYuOTU0XSxcclxuICBbMTgyMS40NzA4LCA2MzIuMDU2MTVdLFxyXG4gIFsxODE4LjU1ODMsIDYzNi43NjQ4M10sXHJcbiAgWzE4MjAuODU3MiwgNjQxLjE1MjVdLFxyXG4gIFsxODIxLjkwOTcsIDY0Ni40MDQzXSxcclxuICBbMTgxNy44OTcxLCA2NTAuNDY0OF0sXHJcbiAgWzE4MTUuODIxOCwgNjQ0LjQ2NDY2XSxcclxuICBbMTgwOS45MDMxLCA2NDIuNjQ0OV0sXHJcbiAgWzE4MDQuMTI1NSwgNjQ0LjMxODVdLFxyXG4gIFsxODA1LjI5MDgsIDY0OS44NDI4XSxcclxuICBbMTc5Ny44MjAzLCA2NDMuNDQ2Ml0sXHJcbiAgWzE3OTkuMDY4NiwgNjQ4LjY1Nl0sXHJcbiAgWzE4MDEuMDY2MywgNjU0LjM1NzRdLFxyXG4gIFsxODA2LjQwNzIsIDY1NS45MDI1XSxcclxuICBbMTgxMS4xMzA2LCA2NTIuMDc5NF0sXHJcbiAgWzE4MTAuNjMxNywgNjQ3LjI0NTNdLFxyXG4gIFsxODEzLjc0LCA2MzkuMjE2ODZdLFxyXG4gIFsxODExLjUyODYsIDYzNC44MjI1XSxcclxuICBbMTgwMS4zMzU3LCA2MzguOTE3MV0sXHJcbiAgWzE4MDIuNDMzMywgNjMzLjg3NzldLFxyXG4gIFsxODA2Ljk2NjIsIDYzOC43OTc3XSxcclxuICBbMTgwNi43MjEyLCA2MzQuMDE5NTNdLFxyXG4gIFsxODA5LjQzMTIsIDYzMC40MjU2XSxcclxuICBbMTgxNS45OTQsIDYzMy4yODY2XSxcclxuICBbMTgxNS40MDc4LCA2MjkuNDY5Nl0sXHJcbiAgWzE4MTUuNzM4MywgNjI1LjAyMTFdLFxyXG4gIFsxODE1LjA2MTIsIDYyMC45MDI0N10sXHJcbiAgWzE4MTQuMDc1LCA2MTcuMDI0OV0sXHJcbiAgWzE4MTEuMTU5MiwgNjIzLjUzMjVdLFxyXG4gIFsxODExLjU3ODksIDYyNy4yMzkyNl0sXHJcbiAgWzE4MTAuODg2LCA2MTkuNjc5M10sXHJcbiAgWzE4MDcuNzY2MiwgNjE3LjMzMThdLFxyXG4gIFsxODA3Ljc5ODMsIDYxMy42NTQyXSxcclxuICBbMTgwNC40MzA1LCA2MTQuNTEzOF0sXHJcbiAgWzE4MDAuNzExMywgNjE1LjQwMDI3XSxcclxuICBbMTc5Ny4xMDY2LCA2MTYuNjE3OF0sXHJcbiAgWzE3OTQuMTY3LCA2MTkuNTQyNV0sXHJcbiAgWzE3OTcuMDI1OCwgNjI0LjEwNTZdLFxyXG4gIFsxNzk5LjUxNzgsIDYyMC4zMzcxNl0sXHJcbiAgWzE4MDMuNzE3OCwgNjE4LjUzNjU2XSxcclxuICBbMTgwNy4yMTE3LCA2MjEuNDU3MTVdLFxyXG4gIFsxODA2Ljk2NDcsIDYyNS44MTg1NF0sXHJcbiAgWzE4MDQuNDg4NiwgNjI5LjM4NjY2XSxcclxuICBbMTgwMy40ODE5LCA2MjIuNjU4XSxcclxuICBbMTgwMS4zNzk0LCA2MjUuNzEzMjZdLFxyXG4gIFsxNzk5LjQ2MjYsIDYyOS41ODczNF0sXHJcbiAgWzE3OTcuOTI4MiwgNjM0LjI1OF0sXHJcbiAgWzE3OTUuNDc2MSwgNjM4LjYxNzJdLFxyXG4gIFsxNzkxLjg1MzgsIDY0Mi4zMDQ3NV0sXHJcbiAgWzE3OTMuMjA5NCwgNjQ3LjEwMDE2XSxcclxuICBbMTc4Ny40MDYsIDY0MS4zNjI2XSxcclxuICBbMTc4My4wNjE0LCA2NDEuNTc4NTVdLFxyXG4gIFsxNzc4LjQ5MzIsIDY0Mi45NF0sXHJcbiAgWzE3NzYuMjg0MiwgNjQ2LjA3MTldLFxyXG4gIFsxNzcyLjAwMTYsIDY0NC45MTc1XSxcclxuICBbMTc3My41MzAzLCA2NDAuNzIxOV0sXHJcbiAgWzE3NjguNTU1MiwgNjQwLjY5MDU1XSxcclxuICBbMTc2NC43ODc0LCA2NDIuOTEyODRdLFxyXG4gIFsxNzY0LjIwNzYsIDY0Ny4wODYyXSxcclxuICBbMTc2MC4zNjUsIDY0OC4zMzgxM10sXHJcbiAgWzE3NjQuMzQ5OSwgNjUxLjYzNDE2XSxcclxuICBbMTc2Ni4yNDY4LCA2NTUuNjA0MV0sXHJcbiAgWzE3NjguNDM1OCwgNjU5LjQ3ODVdLFxyXG4gIFsxNzY4LjcwMTUsIDY2NC4wMjcxNl0sXHJcbiAgWzE3NjcuMjMwNSwgNjY3LjY0NDk2XSxcclxuICBbMTc2NC40Njk3LCA2NjQuNzI5OF0sXHJcbiAgWzE3NjEuMTcwNCwgNjYyLjg1MTE0XSxcclxuICBbMTc1Ny4wNzgxLCA2NjIuNTY4Nl0sXHJcbiAgWzE3NTUuMzE1OCwgNjY2LjA0MDY1XSxcclxuICBbMTc1MS4xMzI4LCA2NjYuNjA4M10sXHJcbiAgWzE3NDkuNzIxNiwgNjcwLjc4N10sXHJcbiAgWzE3MzYuNDIyMSwgNjY5LjIzNTg0XSxcclxuICBbMTc0Mi4yMjM2LCA2NjUuMTA4OF0sXHJcbiAgWzE3NDYuNDU2MywgNjYzLjM4MjddLFxyXG4gIFsxNzQyLjcxNzMsIDY1OC41MzI0XSxcclxuICBbMTczOC4wMDI2LCA2NTguMTExM10sXHJcbiAgWzE3NDAuMTQ1LCA2NTIuMTMzMV0sXHJcbiAgWzE3NDUuNzUzLCA2NTMuMjQ5NjNdLFxyXG4gIFsxNzUxLjEwODQsIDY1NS45OTgzNV0sXHJcbiAgWzE3NTEuNTc0MiwgNjYxLjU0MDNdLFxyXG4gIFsxNzQ3LjQ5NzYsIDY1OC41MjA5XSxcclxuICBbMTczOC4wMTIzLCA2NjMuODEzM10sXHJcbiAgWzE3MzMuMTAxOSwgNjYyLjc0MTRdLFxyXG4gIFsxNzMxLjE3MTksIDY2OC4wNzM4NV0sXHJcbiAgWzE3MjYuOTM4MSwgNjcwLjgzMjRdLFxyXG4gIFsxNzMxLjU4NjIsIDY3NC4wNDddLFxyXG4gIFsxNzI5LjM5MDYsIDY3OS41NTMzNF0sXHJcbiAgWzE3MjQuNjE5NCwgNjc2LjE0MjddLFxyXG4gIFsxNzE4LjkyNTgsIDY3OC44MDk2XSxcclxuICBbMTcyMy40NDAyLCA2ODIuOTY3OF0sXHJcbiAgWzE3MTQuMTg4NSwgNjkyLjc1MDJdLFxyXG4gIFsxNzEwLjI4NTYsIDcwNi4zMjQxNl0sXHJcbiAgWzE3MDkuMzQyNCwgNzE0LjQ0MjhdLFxyXG4gIFsxNzQ2LjIwOTEsIDcwNC43ODk5XSxcclxuICBbMTc0NS40NTA3LCA2OTYuMzg1N10sXHJcbiAgWzE3NDYuNjM3MywgNjg5LjkyODddLFxyXG4gIFsxNzQ3Ljc3ODEsIDY4NC41MDE4M10sXHJcbiAgWzE3NDguNjQ1OSwgNjc1LjQwNjFdLFxyXG4gIFsxNzUxLjI0ODgsIDY3OS45MzldLFxyXG4gIFsxNzYwLjUyNTQsIDY3OS4xMTI5XSxcclxuICBbMTc1Ni42NjExLCA2NzkuOTYyNDZdLFxyXG4gIFsxNzU0LjU5MDgsIDY4NC4yNTA2XSxcclxuICBbMTc1MS44MTI5LCA2OTQuNTA2N10sXHJcbiAgWzE3NTMuNTc2NywgNjg5LjEyNjgzXSxcclxuICBbMTc2MC42NTA1LCA2ODUuMzIxNF0sXHJcbiAgWzE3NjUuMDA1NCwgNjgwLjYyMzU0XSxcclxuICBbMTc2OS40Njg0LCA2ODUuODEzMV0sXHJcbiAgWzE3NzAuNzkwOCwgNjgwLjM1MjIzXSxcclxuICBbMTc2Ny44NDY5LCA2NzUuMjIxMDddLFxyXG4gIFsxNzYzLjQzMzIsIDY3NS4zMzE0XSxcclxuICBbMTc1OS4wMzQ5LCA2NzQuMzA5MV0sXHJcbiAgWzE3NTQuMzY4NywgNjc1LjQwMjRdLFxyXG4gIFsxNzU1LjQzNDYsIDY3MC41OTk2XSxcclxuICBbMTc1OS41NDIyLCA2NjYuNzAwODddLFxyXG4gIFsxNzYxLjU0MzcsIDY3MC4wODU3XSxcclxuICBbMTc2NS4zNTcyLCA2NzEuMjUyOV0sXHJcbiAgWzE3NzAuMDQyNywgNjcwLjkyODZdLFxyXG4gIFsxNzcyLjc5OTksIDY2Ny44MDI4Nl0sXHJcbiAgWzE3NzcuNTYzOCwgNjY3LjI3NzddLFxyXG4gIFsxNzgzLjExNDUsIDY2OS43MTg5M10sXHJcbiAgWzE3ODUuNTE0NiwgNjc0LjQ2NzNdLFxyXG4gIFsxNzgwLjMwNzYsIDY3Ny41MTA4Nl0sXHJcbiAgWzE3NzYuMTE0NywgNjgwLjc2MTk2XSxcclxuICBbMTc3NS45NTAyLCA2ODYuNDE1NDddLFxyXG4gIFsxNzc4LjQ3NTUsIDY5Mi4zODcyXSxcclxuICBbMTc4Mi4wOTY0LCA2ODguNTc4NTVdLFxyXG4gIFsxNzgxLjU2NDUsIDY4My44NjY5NF0sXHJcbiAgWzE3ODQuNzU1NiwgNjgwLjM3OTJdLFxyXG4gIFsxNzg5LjY5NywgNjc4Ljk3MTldLFxyXG4gIFsxNzkxLjUxOSwgNjczLjkyNzU1XSxcclxuICBbMTc4OS40MjM4LCA2NjguODAzMV0sXHJcbiAgWzE3ODkuNjM4NCwgNjYxLjI2NTZdLFxyXG4gIFsxNzg1Ljc3MjcsIDY2NC44NzE3XSxcclxuICBbMTc4MC41ODczLCA2NjMuMTU1MV0sXHJcbiAgWzE3NzUuNjc1NSwgNjYzLjU2MDldLFxyXG4gIFsxNzcyLjAzMDYsIDY2Mi41NTYzNF0sXHJcbiAgWzE3NzYuNTY0MSwgNjU5LjQ4ODQ2XSxcclxuICBbMTc3Mi43MTQ3LCA2NTcuOTYwM10sXHJcbiAgWzE3NzEuMjY4MywgNjU0LjExMzk1XSxcclxuICBbMTc2NC4xMDEzLCA2NTkuODU5NF0sXHJcbiAgWzE3NTkuMjU1NiwgNjU5LjA0OTNdLFxyXG4gIFsxNzYxLjM1MzMsIDY1NS44OTU5XSxcclxuICBbMTc1NC44MDg4LCA2NTkuMDEzNTVdLFxyXG4gIFsxNzU2LjI4MjEsIDY1NS40OTE5NF0sXHJcbiAgWzE3NTUuNjUxLCA2NTEuNzY2OTddLFxyXG4gIFsxNzUxLjIzNDQsIDY1MS40OTkxNV0sXHJcbiAgWzE3NDcuOTkyOCwgNjQ4LjE3MjZdLFxyXG4gIFsxNzQzLjUzNDksIDY0Ni44Mzc1XSxcclxuICBbMTcxOC4yNTA1LCA2MjMuOTcyNTNdLFxyXG4gIFsxNzEyLjk0NTYsIDYxNC4wMzEwN10sXHJcbiAgWzE3MTguMzcwNCwgNjE2LjkwODQ1XSxcclxuICBbMTcyNC4xNiwgNjIwLjMwMDldLFxyXG4gIFsxNzI0LjI4MSwgNjEzLjM5MV0sXHJcbiAgWzE3MjcuNjQ1NiwgNjA2Ljg1NTgzXSxcclxuICBbMTczMS4zMTEzLCA2MTAuNTk3OTZdLFxyXG4gIFsxNzM2LjI4MTIsIDYxMy45NjYyXSxcclxuICBbMTczOS43NDEyLCA2MDguMDI4MjZdLFxyXG4gIFsxNzUwLjE3NTMsIDYwMy4zMDc0XSxcclxuICBbMTc1Ni4yMzAyLCA2MDMuNDAwNzZdLFxyXG4gIFsxNzQ2LjIyMTcsIDYwOC4zODQ3N10sXHJcbiAgWzE3NDMuNjg3LCA2MDIuNzc3Nl0sXHJcbiAgWzE3MzUuMjQwMSwgNjA1LjA4MDNdLFxyXG4gIFsxNzI5LjQ1MDEsIDU5My4wMzM5XSxcclxuICBbMTcyNi4zODA0LCA1ODcuOTkyNTVdLFxyXG4gIFsxNzIyLjg3LCA1OTIuMjJdLFxyXG4gIFsxNzI1LjEyNywgNTk2LjY4NTddLFxyXG4gIFsxNzE5LjcyNjMsIDYwMC44NjIwNl0sXHJcbiAgWzE3MTguNTkxNywgNTk1LjMzMjNdLFxyXG4gIFsxNzE3LjI5NDgsIDU4OS4wNzY1XSxcclxuICBbMTcyMi4wOTYsIDU4Ny41MjI3N10sXHJcbiAgWzE3MjAuNzk0MSwgNTgzLjc1NTA3XSxcclxuICBbMTcxOS4yNzM2LCA1NzkuNTI5Nl0sXHJcbiAgWzE3MjcuNzUwMSwgNTgyLjUzMjFdLFxyXG4gIFsxNzI0LjcyNTYsIDU3OC42NjYxNF0sXHJcbiAgWzE3MzAuNjU0LCA1NzYuNjE2MV0sXHJcbiAgWzE3MzQuODAxLCA1NzEuOTQ4ODVdLFxyXG4gIFsxNzM5LjEzNzcsIDU2Ny41MDU3NF0sXHJcbiAgWzE3MzQuMTQ4NiwgNTY0LjE4NjQ2XSxcclxuICBbMTcyOC40ODU3LCA1NjEuMDUyMl0sXHJcbiAgWzE3MzAuNjAyOCwgNTUzLjczOTE0XSxcclxuICBbMTczNS4xODIzLCA1NTYuNjM4NTVdLFxyXG4gIFsxNzM5LjE2MTEsIDU2MC4wMjg1Nl0sXHJcbiAgWzE3NDMuMDgxNCwgNTYyLjQ2MzJdLFxyXG4gIFsxNzQ2LjI5OCwgNTY2LjcwNTddLFxyXG4gIFsxNzQ4Ljk3MDYsIDU2MS43MzU4NF0sXHJcbiAgWzE3NDYuMDEyNywgNTU3LjQ3MzNdLFxyXG4gIFsxNzQyLjYyMDEsIDU1NC4yNDk2M10sXHJcbiAgWzE3NDYuNTk1NSwgNTQ4LjU0NDRdLFxyXG4gIFsxNzQ5LjYxMTEsIDU1Mi43NzY1XSxcclxuICBbMTc1Ni41NDU3LCA1NTMuNTIyNl0sXHJcbiAgWzE3NTIuNTM2LCA1NTcuMDkxOF0sXHJcbiAgWzE3NjUuMDgxMywgNTYxLjY1ODU3XSxcclxuICBbMTc1OS43MjYzLCA1NjQuOTMxXSxcclxuICBbMTc2Ny41OTE2LCA1NjcuMjIyMDVdLFxyXG4gIFsxNzY3LjgyNTcsIDU3Ni4xODY3XSxcclxuICBbMTc2MS42NzE2LCA1ODMuNTA5NV0sXHJcbiAgWzE3NjMuMjk5MywgNTg5LjExNThdLFxyXG4gIFsxNzU2LjY1OTUsIDU4OC4xMzU4Nl0sXHJcbiAgWzE3NTguODM2MywgNTk0LjY2MzFdLFxyXG4gIFsxNzUzLjc2MjgsIDU5Ny4wMDI3NV0sXHJcbiAgWzE3NDguMjg5MSwgNTg1LjI5OTddLFxyXG4gIFsxNzUwLjU1OTYsIDU4MC4zMjU0XSxcclxuICBbMTc0My41NDAyLCA1NzEuNjk3NV0sXHJcbiAgWzE3NDAuNTU4LCA1NzUuNjMxXSxcclxuICBbMTczNi42Mjk2LCA1NzguNzMzOV0sXHJcbiAgWzE3MzMuODc2NSwgNTgyLjg5MDc1XSxcclxuICBbMTczMS4xMTM4LCA1ODcuMjk4MTZdLFxyXG4gIFsxNzM1LjYzNzEsIDU4OS4yNjY3XSxcclxuICBbMTc0MC41MjQ1LCA1ODguNzc2MV0sXHJcbiAgWzE3NDAuMzYzOSwgNTgzLjg1NDNdLFxyXG4gIFsxNzQ0LjEzNywgNTgwLjAyODddLFxyXG4gIFsxNzQ4LjIwMSwgNTc1LjgxMzVdLFxyXG4gIFsxNzU1LjkyODIsIDU4MS40Mzk3XSxcclxuICBbMTc2MS4zOTU0LCA1NzcuNDM3XSxcclxuICBbMTc2My41MjMsIDU3MS4zMzQ3XSxcclxuICBbMTc1OC4wNzY0LCA1NzAuMTE4NDddLFxyXG4gIFsxNzU0Ljk5NTQsIDU3NC44MDIwNl0sXHJcbiAgWzE3NDkuOTA2MiwgNTcxLjE2NjVdLFxyXG4gIFsxNzUyLjk4OTcsIDU2Ny4xNDU4XSxcclxuICBbMTc1NC40NDQ1LCA1NjEuOTgxOF0sXHJcbiAgWzE3NTkuNTY0NSwgNTU4LjU2MzFdLFxyXG4gIFsxNzY0LjExNjIsIDU1My43NjkzXSxcclxuICBbMTc2OS45NzE0LCA1NTUuOTkzM10sXHJcbiAgWzE3NzAuMjg0OSwgNTQ4LjQ3Mjg0XSxcclxuICBbMTc2My45ODYxLCA1NDUuNzUwNl0sXHJcbiAgWzE3NjcuODY2NSwgNTQwLjY2MTI1XSxcclxuICBbMTc2NS4wNDgyLCA1MzMuMzUzNzZdLFxyXG4gIFsxNzU5LjAzODEsIDUzMi4xMjMxN10sXHJcbiAgWzE3NTMuMDYwNSwgNTMxLjA1NThdLFxyXG4gIFsxNzYwLjU0ODUsIDUzOC45NjE4XSxcclxuICBbMTc1OS40ODg0LCA1NDguOTE2NF0sXHJcbiAgWzE3NTMuMDYxOSwgNTQ4LjA0MDldLFxyXG4gIFsxNzU2LjUzNjEsIDU0My4xNDIxXSxcclxuICBbMTc0Ny4zNTI5LCA1MjkuNjk5NDZdLFxyXG4gIFsxNzQxLjQzNjIsIDUyOS40ODU2XSxcclxuICBbMTc0Mi44MzEsIDUyMy40NjQ2XSxcclxuICBbMTczNi44NDEzLCA1MjMuMTMzOV0sXHJcbiAgWzE3MzAuNDU2MywgNTI0LjIyODNdLFxyXG4gIFsxNzIzLjkxNDksIDUyNS4zODQ3N10sXHJcbiAgWzE3MjMuOTk1NSwgNTMxLjc3NTYzXSxcclxuICBbMTcyNy4yOTUyLCA1MzYuOTgwMl0sXHJcbiAgWzE3MzAuNjYsIDUzMS4zMzQ2XSxcclxuICBbMTczNS42NjA5LCA1MjguNjQ5N10sXHJcbiAgWzE3MzcuNjU1NiwgNTM0LjYxMDldLFxyXG4gIFsxNzMzLjQxNzcsIDUzOC40OTU4XSxcclxuICBbMTczOC4xNTM2LCA1NDEuNjQ2M10sXHJcbiAgWzE3MjkuMTI3NywgNTQyLjU5Njg2XSxcclxuICBbMTczMi4zOTY1LCA1NDYuNDMwODVdLFxyXG4gIFsxNzM1Ljk5MTYsIDU0OS4xNzMxNl0sXHJcbiAgWzE3MjYuMjk1OSwgNTQ4Ljg2NDg3XSxcclxuICBbMTcyMy4wODgsIDU0Mi40ODU5XSxcclxuICBbMTcxOS4zODQ1LCA1MzYuOTI2NF0sXHJcbiAgWzE3MTIuMzEwNSwgNTM3LjE1MDI3XSxcclxuICBbMTcxNS44NTUsIDU0My41MTQxXSxcclxuICBbMTcyMC4wNzY4LCA1NDguNzY2XSxcclxuICBbMTcxNy45NzAzLCA1NTQuNzM5MTRdLFxyXG4gIFsxNzI0LjQxNTgsIDU1NS4yOTU2XSxcclxuICBbMTcyMS40NTIzLCA1NjAuOTY4Ml0sXHJcbiAgWzE3MjIuODMwNywgNTY3LjAyMzldLFxyXG4gIFsxNzI5LjA5NzQsIDU2OC4wODAyXSxcclxuICBbMTcyNS4zNjcyLCA1NzIuODE5MTVdLFxyXG4gIFsxNzE5Ljk0NDMsIDU3NC45NjQ2XSxcclxuICBbMTcxOC4xNzg3LCA1NzAuMDM2NTZdLFxyXG4gIFsxNzE0LjMzODYsIDU3NS42NjI5XSxcclxuICBbMTcxNS4zMTMsIDU4Mi40NzM5XSxcclxuICBbMTcxMi42MzQzLCA1ODguMDI5N10sXHJcbiAgWzE3MTMuNDA4LCA1OTUuMDQ5MTNdLFxyXG4gIFsxNzA3LjI4NjYsIDU5OC4xNzc4XSxcclxuICBbMTY5OC40MTc1LCA2MDIuMjg0NF0sXHJcbiAgWzE3MDAuNjMyMiwgNTk2LjM1ODFdLFxyXG4gIFsxNzAzLjczNDUsIDU5Mi4zMzExXSxcclxuICBbMTcwOS4wMzM5LCA1OTIuMDk4NV0sXHJcbiAgWzE3MDEuMjEwMSwgNTg3LjczNTJdLFxyXG4gIFsxNjk3LjE4OCwgNTkwLjQ1NjldLFxyXG4gIFsxNjk1LjMwMTUsIDU5NS4yNjY4XSxcclxuICBbMTY5MS4xNDE3LCA1OTEuNzQ3NDRdLFxyXG4gIFsxNjg2Ljg2NiwgNTg4LjQyMjY3XSxcclxuICBbMTY4OC4zNjk0LCA1ODMuODEzN10sXHJcbiAgWzE2OTcuNTI2NiwgNTgzLjkwNzJdLFxyXG4gIFsxNjkyLjk1ODUsIDU4Ni45NzA2XSxcclxuICBbMTY5Mi4zODk2LCA1ODEuMjkzNF0sXHJcbiAgWzE2OTAuNTU4MywgNTc1LjI1NzFdLFxyXG4gIFsxNjk5Ljk3OCwgNTcwLjk1OTM1XSxcclxuICBbMTcwNC43MjU3LCA1NjkuMzQ4OV0sXHJcbiAgWzE2OTYuMzYxNywgNTczLjQ4MjRdLFxyXG4gIFsxNjk1LjQyMzgsIDU3OC4wMzQ2N10sXHJcbiAgWzE3MDAuMDk3MiwgNTc4Ljk1MzFdLFxyXG4gIFsxNzAzLjQ1MzIsIDU4Mi44NDIzXSxcclxuICBbMTcwNi40MSwgNTg3LjMwMDY2XSxcclxuICBbMTcwOS42MTg0LCA1ODMuNzMyODVdLFxyXG4gIFsxNzEwLjk0MzQsIDU3OS4xMDc0XSxcclxuICBbMTcwNi4xOTU4LCA1NzguNzY0NF0sXHJcbiAgWzE3MDIuOTQ4NiwgNTc1LjA0MjVdLFxyXG4gIFsxNzA4LjQ4MDgsIDU3My40OTQ2XSxcclxuICBbMTcxMi45MTExLCA1NzAuMTk1MDddLFxyXG4gIFsxNzA5LjI2NDksIDU2NS45NDU5XSxcclxuICBbMTcxNS40NDUzLCA1NjMuNzQ2Nl0sXHJcbiAgWzE3MTIuNzEwMiwgNTU3LjA3MDZdLFxyXG4gIFsxNzA4LjA3MjUsIDU1OS44MTNdLFxyXG4gIFsxNzAzLjgyNSwgNTYzLjE4OTVdLFxyXG4gIFsxNjk5LjgxMjcsIDU2NS40MTg5XSxcclxuICBbMTY5NS44MjMxLCA1NjEuMjU4Nl0sXHJcbiAgWzE3MDEuMzUzMywgNTU4LjEwODddLFxyXG4gIFsxNjk5Ljg3OTYsIDU1Mi41NjY2NV0sXHJcbiAgWzE3MDYuMzcxOCwgNTUyLjg3MDZdLFxyXG4gIFsxNzEyLjMxNjksIDU0OS43NjMzN10sXHJcbiAgWzE3MDguMTUyMywgNTQzLjg0M10sXHJcbiAgWzE3MDAuNTEwNSwgNTQxLjIwODU2XSxcclxuICBbMTcwMi4zODkzLCA1NDcuMTYzMV0sXHJcbiAgWzE2OTUuMjYzNywgNTQ4LjU0OTQ0XSxcclxuICBbMTY4NS42NDU2LCA1NDkuMjA3OV0sXHJcbiAgWzE2ODkuOTA0MywgNTUzLjIyNzVdLFxyXG4gIFsxNjk1LjA0MTYsIDU1NS43NjczXSxcclxuICBbMTY5NS40Njg1LCA1NjcuMTc2M10sXHJcbiAgWzE2OTEuNjM1LCA1NzAuMTY3OF0sXHJcbiAgWzE2ODYuMzcwOCwgNTc4LjcyNjQ0XSxcclxuICBbMTY4NC45OTI0LCA1NzMuNDI1Nl0sXHJcbiAgWzE2ODYuMzkwNCwgNTY4LjU0NTUzXSxcclxuICBbMTY4NC45MzgyLCA1NjMuMjZdLFxyXG4gIFsxNjkwLjY5MTksIDU2NC4zOTE2Nl0sXHJcbiAgWzE2ODkuMjg0MiwgNTU5LjA3NTZdLFxyXG4gIFsxNjgzLjI0NzgsIDU1Ni40OTYxNV0sXHJcbiAgWzE2ODUuMDE3MywgNTQxLjIzNzU1XSxcclxuICBbMTY4MC4xMzA3LCA1NDkuODQyNl0sXHJcbiAgWzE2NzYuMjgsIDU1My4xMTU4XSxcclxuICBbMTY3MC4xMjYxLCA1NTEuNDY1NDVdLFxyXG4gIFsxNjY0Ljc0MjcsIDU0Ny40NTM0XSxcclxuICBbMTY2Ni40MTM2LCA1NDEuMjcxNV0sXHJcbiAgWzE2NzMuMzM5OCwgNTM5LjcwMV0sXHJcbiAgWzE2NjguNzA3OSwgNTM1Ljg5Mjk0XSxcclxuICBbMTY2My4yOTkzLCA1MzQuMzE5OF0sXHJcbiAgWzE2NTcuMTU2NCwgNTM2LjI4NjRdLFxyXG4gIFsxNjUyLjY2OSwgNTI5Ljg1NDI1XSxcclxuICBbMTY1OC4yMzAyLCA1MjkuODddLFxyXG4gIFsxNjYzLjQ0NzMsIDUyNy42NDQwNF0sXHJcbiAgWzE2NjguNDczNiwgNTI4Ljc4NjFdLFxyXG4gIFsxNjcyLjk1MzYsIDUyNS4yMDg0NF0sXHJcbiAgWzE2NzAuOTQ1NCwgNTE5LjU1NDQ0XSxcclxuICBbMTY2Ni4wNjc3LCA1MjIuMDQ4MDNdLFxyXG4gIFsxNjY1LjIxLCA1MTUuMjU5NzddLFxyXG4gIFsxNjcwLjA4NSwgNTE0LjAzNl0sXHJcbiAgWzE2NzYuNjc4MSwgNTE5Ljc5OTRdLFxyXG4gIFsxNjgyLjMxMTgsIDUxOS40MjMyXSxcclxuICBbMTY3OS4zNTc0LCA1MjQuNDQ5NzddLFxyXG4gIFsxNjc1LjQ0MTksIDUxNS4yNjU1XSxcclxuICBbMTY3OC41OTIyLCA1MTEuNTU5MDhdLFxyXG4gIFsxNjgxLjQ5NTYsIDUxNS4wNjY2NV0sXHJcbiAgWzE2ODcuMDA3OSwgNTE1LjIwMTY2XSxcclxuICBbMTY5Mi40MDQyLCA1MTUuNzk5NzRdLFxyXG4gIFsxNzAxLjU3NSwgNTIwLjQyNjE1XSxcclxuICBbMTcwOC43MTQyLCA1MjAuODkwNV0sXHJcbiAgWzE3MDUuNjM4NSwgNTE0LjIxODNdLFxyXG4gIFsxNzEyLjgyNjUsIDUxNC4xNTc2NV0sXHJcbiAgWzE3MDkuODY3MiwgNTA3LjgzMDNdLFxyXG4gIFsxNzAzLjcyMjIsIDUwOC4wNTEyN10sXHJcbiAgWzE2OTYuODMwMSwgNTA2LjM0NTE4XSxcclxuICBbMTY5Ni44MTI1LCA1MTAuNzM1MTddLFxyXG4gIFsxNjkxLjA4NzQsIDUxMC45MjY4OF0sXHJcbiAgWzE2OTEuOTMyNCwgNTA2LjE0MjFdLFxyXG4gIFsxNjg5LjgxMTQsIDUwMi4wMjkzNl0sXHJcbiAgWzE2ODguMTcxMywgNDk3LjI4ODY0XSxcclxuICBbMTY5Mi40ODA3LCA0OTguMTgwMDJdLFxyXG4gIFsxNjkxLjczMzQsIDQ5My44MTgxOF0sXHJcbiAgWzE2OTUuNjA1MSwgNDkyLjUzODNdLFxyXG4gIFsxNjk5Ljg4NzIsIDQ5MS41NzAyOF0sXHJcbiAgWzE3MDQuNTQwMywgNDg5Ljc3MDZdLFxyXG4gIFsxNzA2LjA1NTcsIDQ4NS4yMjldLFxyXG4gIFsxNzA4Ljc0MzUsIDQ4Mi4xODEyNF0sXHJcbiAgWzE3MDguNjAyOCwgNDc4LjUwMzQ4XSxcclxuICBbMTcwNC42MjQzLCA0NzkuNzIzNV0sXHJcbiAgWzE3MDEuOTM5NSwgNDgyLjc1Mzg1XSxcclxuICBbMTcwMC45MTU1LCA0ODYuNzQwNzhdLFxyXG4gIFsxNjk2LjgwMjYsIDQ4Ny40MDA4OF0sXHJcbiAgWzE2OTIuOTcsIDQ4OC41MDQzM10sXHJcbiAgWzE2ODkuNTU0MywgNDg5LjY1Mjc3XSxcclxuICBbMTY4Ny41MDIyLCA0OTIuNzQ0NzJdLFxyXG4gIFsxNjg0LjM1NSwgNDk1LjAzNDczXSxcclxuICBbMTY4MS43ODcsIDQ5Ny40NDY2Nl0sXHJcbiAgWzE2ODQuOTMwMywgNTAwLjA4OTcyXSxcclxuICBbMTY4Ni4wNDA5LCA1MDQuMjY0NzRdLFxyXG4gIFsxNjg3LjI1OTMsIDUwOC4zNzY1M10sXHJcbiAgWzE2ODMuNTMyMywgNTEwLjg4NTA3XSxcclxuICBbMTY4Mi4wNzk3LCA1MDcuMDIwMl0sXHJcbiAgWzE2ODEuNDk2NiwgNTAzLjI0ODk2XSxcclxuICBbMTY3OS4wMjE5LCA1MDAuOTgwMDRdLFxyXG4gIFsxNjc4LjI0NjgsIDQ5Ny40MTgxNV0sXHJcbiAgWzE2NzYuMjY5NSwgNDk0LjU3Mzk3XSxcclxuICBbMTY3Ni4wNTUyLCA0OTAuNTcwNzRdLFxyXG4gIFsxNjcyLjQ4NiwgNDk0LjczOTA3XSxcclxuICBbMTY2OC4xNzY4LCA0OTYuMzAyOF0sXHJcbiAgWzE2NjkuODYsIDQ5MS44ODg1Ml0sXHJcbiAgWzE2NzMuMzQxMSwgNDg3LjkyOTc4XSxcclxuICBbMTY2OS4zNDQ3LCA0ODcuNjQ0Nl0sXHJcbiAgWzE2NjYuMDMzNCwgNDg5Ljc5MDI1XSxcclxuICBbMTY2Ni42OSwgNDg0LjQwMjUzXSxcclxuICBbMTY3MS4wMzAzLCA0ODMuNjcwMV0sXHJcbiAgWzE2NzUuMTE3NywgNDgyLjk2MDA1XSxcclxuICBbMTY3Ny43NjE2LCA0ODUuOTYzODddLFxyXG4gIFsxNjgwLjYwNTcsIDQ4OC4zODE0XSxcclxuICBbMTY4My4yMTYzLCA0ODQuNTE0OThdLFxyXG4gIFsxNjc5LjYyNzcsIDQ4MS44NTQ1OF0sXHJcbiAgWzE2ODQuMjEzOSwgNDgwLjI5NzgyXSxcclxuICBbMTY4OC44Mzc1LCA0NzguMzYxNTRdLFxyXG4gIFsxNjkxLjc1ODMsIDQ3NS41NzIxXSxcclxuICBbMTY5NC45NjE3LCA0NzMuODI3MjddLFxyXG4gIFsxNjk2LjI0NjMsIDQ3MC42OTE1XSxcclxuICBbMTY5NS45OTM0LCA0NjYuOTE5M10sXHJcbiAgWzE2OTAuNTE1OSwgNDcxLjYxNTA1XSxcclxuICBbMTY5Mi4wMTA0LCA0NjguMDA1NTVdLFxyXG4gIFsxNjg3LjI5MTcsIDQ2OC40ODUwNV0sXHJcbiAgWzE2ODIuOTYyNiwgNDY3LjUxMTMyXSxcclxuICBbMTY4NC44OTg5LCA0NzEuNjI2Nl0sXHJcbiAgWzE2ODEuMTIxNiwgNDczLjMzMjldLFxyXG4gIFsxNjg3LjU4OTYsIDQ3NC44MDY1Ml0sXHJcbiAgWzE2ODQuMTYwNCwgNDc2LjIyMjc4XSxcclxuICBbMTY4MC4zNDAxLCA0NzcuNjE4MDRdLFxyXG4gIFsxNjc2LjE3NjgsIDQ3OC40NjMyXSxcclxuICBbMTY3Mi4yNzgxLCA0NzkuMjEyNF0sXHJcbiAgWzE2NjguMzU0LCA0NzkuNjQ2NTVdLFxyXG4gIFsxNjY0LjYxOTgsIDQ4MC41MDY3XSxcclxuICBbMTY2Mi40OTU4LCA0ODMuNDIyNThdLFxyXG4gIFsxNjYzLjIxNjksIDQ4Ny4zNDI0N10sXHJcbiAgWzE2NjEuODExNCwgNDkxLjQwMzRdLFxyXG4gIFsxNjU0Ljg3ODIsIDQ5NS4wNDQ5XSxcclxuICBbMTY1Ni42NDgsIDQ5Ny45Mjc2N10sXHJcbiAgWzE2NTUuNjA1LCA1MDEuNjM0MTZdLFxyXG4gIFsxNjUyLjI0MzUsIDUwMi4yNzE3XSxcclxuICBbMTY1Mi43NDQsIDQ5OC43MDU4XSxcclxuICBbMTY0OS4xMDEsIDUwMC41MjcwNF0sXHJcbiAgWzE2NDguMTg3MywgNDk3LjQyMDQ3XSxcclxuICBbMTY1MC44ODI4LCA0OTUuNzQwMjNdLFxyXG4gIFsxNjUxLjg3ODQsIDQ5Mi43MjE5XSxcclxuICBbMTY0OC45MTkzLCA0OTAuNTQ4NzddLFxyXG4gIFsxNjQ3LjQ2NTEsIDQ5My40NDIzMl0sXHJcbiAgWzE2NDQuNjIxNiwgNDk1LjU4MV0sXHJcbiAgWzE2NDUuMDgxMywgNDk5LjMxNzZdLFxyXG4gIFsxNjM3LjQyNDMsIDQ5OS43MzQ0NF0sXHJcbiAgWzE2MzguOTI5MiwgNTAzLjUxNTQ3XSxcclxuICBbMTY0MS44Mzc1LCA1MDEuNTgwMDJdLFxyXG4gIFsxNjQxLjM4MTMsIDQ5Ny45OTg5Nl0sXHJcbiAgWzE2MzguMzQyMywgNDk1Ljk3OTA2XSxcclxuICBbMTYzNS4yNjc1LCA0OTUuNzY0ODNdLFxyXG4gIFsxNjMyLjg3OTUsIDQ5MC4zNTQ1OF0sXHJcbiAgWzE2MzIuMDUxLCA0OTMuNTkzN10sXHJcbiAgWzE2MzIuMDQyMSwgNDk2Ljk5OTddLFxyXG4gIFsxNjMzLjEzNzcsIDUwMC4wMTgzXSxcclxuICBbMTYzNC44NTU3LCA1MDMuMDAwOThdLFxyXG4gIFsxNjMyLjA4OTQsIDUwNS43OTE1Nl0sXHJcbiAgWzE2MjkuODcxMSwgNTAyLjQyMjY3XSxcclxuICBbMTYyOC4zNDg4LCA0OTguNjM4OThdLFxyXG4gIFsxNjI4LjEwNzUsIDQ5NC43ODE5OF0sXHJcbiAgWzE2MjguNzY1NSwgNDkwLjg1MTYyXSxcclxuICBbMTYzMS4xNzExLCA0ODcuMzAwNzhdLFxyXG4gIFsxNjMyLjg4OTQsIDQ4MC44MTIyM10sXHJcbiAgWzE2MzQuMTA4MiwgNDg0LjQyNzQzXSxcclxuICBbMTYzNy4wNjg4LCA0ODAuNjY2NV0sXHJcbiAgWzE2MzUuOTg3NSwgNDc2Ljg5MjQzXSxcclxuICBbMTYzOC45MzQxLCA0NzQuMDQzMDZdLFxyXG4gIFsxNjM1LjY0MzksIDQ3Mi4zMTM0NV0sXHJcbiAgWzE2MjYuMTQyMSwgNDY4Ljk5NTEyXSxcclxuICBbMTYyOC4xMzI5LCA0NzIuMjY3OV0sXHJcbiAgWzE2MzEuMjc5LCA0NzAuMjAxM10sXHJcbiAgWzE2MzIuMjg4MSwgNDY2LjI2MzUyXSxcclxuICBbMTYzMi44ODM1LCA0NjIuMjcxNDhdLFxyXG4gIFsxNjM2LjE2MjcsIDQ2MS4xOTQ5XSxcclxuICBbMTY0MS4zNzA0LCA0NTcuMDc0MzRdLFxyXG4gIFsxNjQzLjU3NDUsIDQ1OS45NzQzM10sXHJcbiAgWzE2NDYuODc5MiwgNDU4Ljg1NDZdLFxyXG4gIFsxNjUwLjAxODksIDQ1Ny42NDA2XSxcclxuICBbMTY1My43ODM3LCA0NTcuNzQwNzJdLFxyXG4gIFsxNjQ4LjU5MDEsIDQ1Mi45ODg5NV0sXHJcbiAgWzE2NDUuMzI2MiwgNDU1LjI3MDk0XSxcclxuICBbMTY0Mi41ODc5LCA0NTIuMjQ2MDNdLFxyXG4gIFsxNjQ1Ljk1MjgsIDQ0OS44NjI4NV0sXHJcbiAgWzE2NDcuMjk5MSwgNDQ2LjMyOTU2XSxcclxuICBbMTY0MS43ODQ5LCA0NDcuNTk0ODJdLFxyXG4gIFsxNjQzLjM3MTcsIDQ0My44Mjg1NV0sXHJcbiAgWzE2MzguNTI0LCA0NDMuNDg3OF0sXHJcbiAgWzE2NDAuOTc4NiwgNDM5LjYxMjk4XSxcclxuICBbMTYzNS45Mzg3LCA0MzkuNDI4NTNdLFxyXG4gIFsxNjMyLjcyNTgsIDQzNS42Mzg3M10sXHJcbiAgWzE2MzAuODk2OSwgNDM5Ljg5NjA2XSxcclxuICBbMTYzMy43NDQxLCA0NDQuMDQ5MTNdLFxyXG4gIFsxNjM3LjA1MzcsIDQ0Ny4xMDk0NF0sXHJcbiAgWzE2MzMuOTIwNSwgNDQ5LjQzNjIyXSxcclxuICBbMTYzOC40ODY4LCA0NTAuNjQyNjRdLFxyXG4gIFsxNjM4LjgwNTgsIDQ1NC4yMTI5NV0sXHJcbiAgWzE2MzcuMjk3NiwgNDU3LjYyMjldLFxyXG4gIFsxNjMzLjI3NjksIDQ1Ny45MTUzN10sXHJcbiAgWzE2MzQuNDUzNiwgNDUzLjU5MjRdLFxyXG4gIFsxNjMwLjA4ODcsIDQ1NS41NDU2XSxcclxuICBbMTYyOC45NTQ2LCA0NTkuNDgyMzZdLFxyXG4gIFsxNjI2LjA3MjUsIDQ2Mi44NDE5XSxcclxuICBbMTYyMC42OTgyLCA0NTcuNTE1ODddLFxyXG4gIFsxNjIxLjc1MjMsIDQ1My42MjA4XSxcclxuICBbMTYxNy4zNDk2LCA0NTUuNzM3Nl0sXHJcbiAgWzE2MTcuNDcyLCA0NTEuOTg2NzZdLFxyXG4gIFsxNjE2LjQ4MDcsIDQ0OC4wODEzNl0sXHJcbiAgWzE2MjAuMzk4NCwgNDQ5LjE1Mzc1XSxcclxuICBbMTYxNy44MzI0LCA0NDQuMTM4M10sXHJcbiAgWzE2MjIuMzQzLCA0NDUuNDY0MzZdLFxyXG4gIFsxNjI1Ljg1NTIsIDQ0Mi4wOTQzNl0sXHJcbiAgWzE2MjIuMTk0MSwgNDQwLjYwNzQ4XSxcclxuICBbMTYxOC4xOTA2LCA0MzkuMzE1ODZdLFxyXG4gIFsxNjEzLjkzMSwgNDQwLjMwNzNdLFxyXG4gIFsxNjExLjI5ODEsIDQ0My40Mzg3Ml0sXHJcbiAgWzE2MDkuMjk5OCwgNDM5LjQzMDE1XSxcclxuICBbMTYwOS40MzIxLCA0MzUuNzEyMjVdLFxyXG4gIFsxNjA1LjA2NzYsIDQzMy43ODk2N10sXHJcbiAgWzE2MDMuNzEyLCA0MzYuOTIyMThdLFxyXG4gIFsxNjAwLjM4NSwgNDMyLjcwOTQ0XSxcclxuICBbMTU5Ni4zNzg4LCA0MzMuMTY3MjRdLFxyXG4gIFsxNjAwLjQ2MjksIDQyNy4yMjA4M10sXHJcbiAgWzE2MDguMTUwNSwgNDMxLjMxOThdLFxyXG4gIFsxNjEwLjIzODQsIDQyNy45ODUyXSxcclxuICBbMTYwOS4yNTM5LCA0MjMuNzg5NjRdLFxyXG4gIFsxNjAzLjYxMjgsIDQzMC4wNjI2OF0sXHJcbiAgWzE2MDUuNDEzMSwgNDI2LjQxODldLFxyXG4gIFsxNjE0Ljc0NCwgNDI2LjE4NzIzXSxcclxuICBbMTYxNy4xOTgyLCA0MjAuNDQxODNdLFxyXG4gIFsxNjE3Ljk4NzMsIDQzMC40MTk3N10sXHJcbiAgWzE2MTMuMDQ2NSwgNDMxLjc2NjU0XSxcclxuICBbMTYxNC45ODA3LCA0MzUuNjY5NDNdLFxyXG4gIFsxNjIxLjA1MTYsIDQzNS42OTgxXSxcclxuICBbMTYyNi45MTA0LCA0MzcuMjgxNTZdLFxyXG4gIFsxNjI5LjM0MjIsIDQ0My43NTU2OF0sXHJcbiAgWzE2MzAuNTM0OCwgNDQ3LjUxODc3XSxcclxuICBbMTYyNi41MDM1LCA0NDcuMTQyMl0sXHJcbiAgWzE2MjQuNDE1MywgNDUwLjIyNDczXSxcclxuICBbMTYyOS44OTg0LCA0NTEuNDI1NzhdLFxyXG4gIFsxNjI2LjQ1MywgNDUzLjQxMDZdLFxyXG4gIFsxNjI1LjM4MzUsIDQ1Ni44OTAzOF0sXHJcbiAgWzE2MjMuNjcyMSwgNDU5Ljk3NjYyXSxcclxuICBbMTYyMS44NjUyLCA0NjMuMjIzMzZdLFxyXG4gIFsxNjE5LjA1NDcsIDQ2MS4yOTM1NV0sXHJcbiAgWzE2MTYuMDk4MSwgNDU5LjYxMDE3XSxcclxuICBbMTYxMi42ODY1LCA0NjEuMTU1MjRdLFxyXG4gIFsxNjA4Ljg0NjQsIDQ2MS40OTAxN10sXHJcbiAgWzE2MDUuNzQ3MiwgNDYzLjQxMjg0XSxcclxuICBbMTYwMi4zMTU0LCA0NjUuNTQyMThdLFxyXG4gIFsxNjA1LjQ4OTksIDQ2Ny45NjY5Ml0sXHJcbiAgWzE2MDkuNTAyNywgNDY2LjA3NTNdLFxyXG4gIFsxNjA5LjM5MjEsIDQ1Ny42MTE5XSxcclxuICBbMTYwOS4wNzE3LCA0NTMuODQ4NDVdLFxyXG4gIFsxNjA4LjQwMiwgNDUwLjEzNzA1XSxcclxuICBbMTYwNy44MDE4LCA0NDYuMjk1MzVdLFxyXG4gIFsxNjA0LjM3NDgsIDQ0OC45MjE3XSxcclxuICBbMTYwNC41ODY4LCA0NTMuMjkxMV0sXHJcbiAgWzE2MDAuNzMxOSwgNDU1LjM1MDkyXSxcclxuICBbMTYwNS4zOTkyLCA0NTcuNTI1XSxcclxuICBbMTYxMy4xMTc0LCA0NTYuOTI3Ml0sXHJcbiAgWzE2MTMuNjIwNCwgNDUzLjQ5NjY0XSxcclxuICBbMTYxMi42MTIzLCA0NTAuMjk4NjhdLFxyXG4gIFsxNjEyLjgwNjYsIDQ0Ni41NTgxN10sXHJcbiAgWzE2MDYuNTU5NywgNDQyLjU4Nzc0XSxcclxuICBbMTYwMi4xMjc3LCA0NDUuMjE1OV0sXHJcbiAgWzE1OTkuMjAyOSwgNDQxLjY1ODE0XSxcclxuICBbMTU5NS41NzkyLCA0NDMuNDIxN10sXHJcbiAgWzE2MDMuMzYyMywgNDQwLjQ2MzkzXSxcclxuICBbMTU5OC45NDM3LCA0MzcuMDkwNzZdLFxyXG4gIFsxNTk0LjkzNjQsIDQzOS4zNTU5Nl0sXHJcbiAgWzE1OTcuNjEyOCwgNDQ3LjAyNzY4XSxcclxuICBbMTYwMC42OTM4LCA0NTAuNDQwMDNdLFxyXG4gIFsxNTk3LjAzODEsIDQ1MS45MTY1Nl0sXHJcbiAgWzE1OTUuNDc2MSwgNDU1LjQxMzc2XSxcclxuICBbMTU5OC4xMDExLCA0NTguNzAxNF0sXHJcbiAgWzE2MDIuNjg5NSwgNDYwLjE3MTJdLFxyXG4gIFsxNTk5LjUzMjcsIDQ2Mi40ODk0NF0sXHJcbiAgWzE1OTUuMzA1NywgNDYyLjMyNTYyXSxcclxuICBbMTU5My4wMzIxLCA0NTguNzc3ODNdLFxyXG4gIFsxNTg5LjMyMSwgNDYwLjkwMTddLFxyXG4gIFsxNTkxLjI3MjUsIDQ2My45ODkyXSxcclxuICBbMTU5NC4zNzA3LCA0NjYuNTAwNTVdLFxyXG4gIFsxNTg5LjMwMTUsIDQ2Ny42OTA0XSxcclxuICBbMTU4NS42Mzc4LCA0NjAuODIyNjNdLFxyXG4gIFsxNTg2LjM2MywgNDY0Ljc4MzldLFxyXG4gIFsxNTgyLjM1MzUsIDQ2NS43MzE2M10sXHJcbiAgWzE1NzguNzAwNCwgNDY2LjM1ODk4XSxcclxuICBbMTU3Ni4zMDcxLCA0NjkuNzczMjVdLFxyXG4gIFsxNTcyLjQxOTcsIDQ2OS45Mzc4NF0sXHJcbiAgWzE1NzAuMzE5LCA0NjYuNDgyMjRdLFxyXG4gIFsxNTY3Ljk0OCwgNDcwLjU0MV0sXHJcbiAgWzE1NzAuNDA0MiwgNDc0LjI3Mzc3XSxcclxuICBbMTU2My43ODU0LCA0NzIuNzIwOF0sXHJcbiAgWzE1NjQuNDQ5MSwgNDY4LjMwNDYzXSxcclxuICBbMTU2Ni43NzU0LCA0NjUuMTYyMjNdLFxyXG4gIFsxNTYzLjE3NjgsIDQ2NC4wODk1N10sXHJcbiAgWzE1NjUuMDkzMSwgNDYwLjU5MzMyXSxcclxuICBbMTU2OC43MjU4LCA0NjEuODAyNV0sXHJcbiAgWzE1NzIuMTkwMiwgNDYyLjQ1NDM1XSxcclxuICBbMTU3NC44NDAzLCA0NjUuMjczXSxcclxuICBbMTU3OC4zMDU0LCA0NjEuOTkwNDJdLFxyXG4gIFsxNTgxLjkyOTksIDQ2MC45NjEwM10sXHJcbiAgWzE1ODQuODI4MSwgNDU3LjA4NzY1XSxcclxuICBbMTU4MS41OTI4LCA0NTUuNDIwM10sXHJcbiAgWzE1NzguMTUyNSwgNDU3LjQyMTZdLFxyXG4gIFsxNTc1LjAxNDIsIDQ1OS43ODMxNF0sXHJcbiAgWzE1NzEuNzEyNiwgNDU3Ljg0NDk0XSxcclxuICBbMTU2OC4zMTY0LCA0NTcuOTcxOF0sXHJcbiAgWzE1NjUuODUwMSwgNDU1LjgxNjEzXSxcclxuICBbMTU2Mi4zODcyLCA0NTUuMDU5OF0sXHJcbiAgWzE1NjAuODk4NywgNDUyLjAwODQ4XSxcclxuICBbMTU1Ny40MDE0LCA0NTEuMjA5N10sXHJcbiAgWzE1NTYuNjQ4MywgNDUzLjk2NDU0XSxcclxuICBbMTU1OC44NTIsIDQ1Ni42NjI1N10sXHJcbiAgWzE1NjIuNDI0OSwgNDU4LjcwNzAzXSxcclxuICBbMTU1OS43Nzg2LCA0NjAuMjk2NDhdLFxyXG4gIFsxNTU2LjUxODMsIDQ2MC44MDc5NV0sXHJcbiAgWzE1NTYuMjY2LCA0NjUuMjg3MjNdLFxyXG4gIFsxNTU5LjYzMzQsIDQ2My40MDQ0Ml0sXHJcbiAgWzE1NTkuOTc3OCwgNDY2Ljg2NTQyXSxcclxuICBbMTU2MC45Njk4LCA0NzAuMjY4NDNdLFxyXG4gIFsxNTU3LjE2OCwgNDcwLjA3MjI0XSxcclxuICBbMTU1NC4wMTM4LCA0NjguNzExM10sXHJcbiAgWzE1NTIuMTMwOSwgNDY2LjEwMzMzXSxcclxuICBbMTU1My4yMzUyLCA0NjIuOTk4NF0sXHJcbiAgWzE1NTMuMzA4NiwgNDU5LjYxNDJdLFxyXG4gIFsxNTU1LjA1OTgsIDQ1Ni43NzY1XSxcclxuICBbMTU1Mi43MzQ2LCA0NTMuMTUwNzZdLFxyXG4gIFsxNTUxLjQ0MjksIDQ1Ni42OTgzNl0sXHJcbiAgWzE1NDguNzM3NSwgNDU0LjE1ODVdLFxyXG4gIFsxNTUwLjA5MDgsIDQ1MC4wNzgyXSxcclxuICBbMTU1MS44MSwgNDQ2LjQ4NDQ3XSxcclxuICBbMTU1My41MzM0LCA0NDkuNzIwNDZdLFxyXG4gIFsxNTU2LjIyNDYsIDQ0OC4zMzY2XSxcclxuICBbMTU1Ni4zMDE2LCA0NDUuMTk1OV0sXHJcbiAgWzE1NTMuMjk4OCwgNDQzLjE4ODFdLFxyXG4gIFsxNTUyLjc1OTksIDQzOS42MTUyM10sXHJcbiAgWzE1NTIuODAwNCwgNDM1LjcwODVdLFxyXG4gIFsxNTU2LjY2OTcsIDQ0MS4xMDc4OF0sXHJcbiAgWzE1NTYuNDgzNiwgNDM3LjgwNTE4XSxcclxuICBbMTU1Ny4xMjA1LCA0MzQuNTk1OTVdLFxyXG4gIFsxNTYwLjUxNjcsIDQzNy43OTE4XSxcclxuICBbMTU1OS41ODY5LCA0NDIuNjMwMzddLFxyXG4gIFsxNTYzLjI2NjQsIDQ0MS42NjIwOF0sXHJcbiAgWzE1NjQuMzE5MywgNDM4LjE5NDA2XSxcclxuICBbMTU2Ny4xOTYsIDQzNi41NDA0N10sXHJcbiAgWzE1NzAuNTQ5OCwgNDM1LjU0Mjk0XSxcclxuICBbMTU3NC4yMjQ2LCA0MzcuNDc1OTJdLFxyXG4gIFsxNTc3LjExNDEsIDQzOS41MDM0XSxcclxuICBbMTU4MC42MDQyLCA0NDEuNTA3N10sXHJcbiAgWzE1NzcuNDM1NywgNDQ5LjY5MjAyXSxcclxuICBbMTU3Ny43MDQzLCA0NTMuMjQ5MjRdLFxyXG4gIFsxNTczLjk4NDEsIDQ1NC42NDc1NV0sXHJcbiAgWzE1NjkuNjI3NywgNDUzLjQ0NzI3XSxcclxuICBbMTU3Mi44MjYyLCA0NTAuMzY1Nl0sXHJcbiAgWzE1NzQuNjc4NywgNDQ2LjY4NzM1XSxcclxuICBbMTU3MC42MDksIDQ0NS4xMTY0XSxcclxuICBbMTU2OC42NjYsIDQ0OC45MzIyXSxcclxuICBbMTU2NS41NDM1LCA0NTEuODYwMDVdLFxyXG4gIFsxNTYzLjYwMTMsIDQ0OC44MDI2XSxcclxuICBbMTU1OS42NDU2LCA0NDcuNzE3XSxcclxuICBbMTU2Mi4yNDA3LCA0NDUuMjE0MTddLFxyXG4gIFsxNTY2LjE4ODQsIDQ0NS40NTY2XSxcclxuICBbMTU2Ny40NTg1LCA0NDEuNTc3ODJdLFxyXG4gIFsxNTcwLjYzNTYsIDQzOS43NjgyNV0sXHJcbiAgWzE1NzMuNzc0NywgNDQyLjI3NTAyXSxcclxuICBbMTU3Ny41NDY2LCA0NDMuNjkxNjVdLFxyXG4gIFsxNTc5Ljk0NjgsIDQ0Ni43OTg3XSxcclxuICBbMTU4MS44OTMxLCA0NTEuMDQ2NTddLFxyXG4gIFsxNTg2LjMxOTEsIDQ1My4wMzkxNV0sXHJcbiAgWzE1ODkuMDQ2OSwgNDU2LjcyNl0sXHJcbiAgWzE1OTEuNDU0MywgNDUzLjQ3NjkzXSxcclxuICBbMTU5My43MDg1LCA0NDkuODI5MV0sXHJcbiAgWzE1OTIuNDkzMiwgNDQ2LjE3NjZdLFxyXG4gIFsxNTkxLjYzMDUsIDQ0Mi4zMjQzXSxcclxuICBbMTU5MC4yNTg1LCA0MzguNzAwMTZdLFxyXG4gIFsxNTg3Ljc1NSwgNDQyLjIzNDI1XSxcclxuICBbMTU4OC4wNDA5LCA0NDUuNzI1NDNdLFxyXG4gIFsxNTg5LjQzMDgsIDQ0OS42MTI0M10sXHJcbiAgWzE1ODUuMjU0NCwgNDQ4Ljg1MjA1XSxcclxuICBbMTU4My4zNDg5LCA0NDUuNDEyNzhdLFxyXG4gIFsxNTg0LjE0NzIsIDQ0MS45MjRdLFxyXG4gIFsxNTg2LjE0MzMsIDQzOC45MTQ1XSxcclxuICBbMTU4Ni41MTgxLCA0MzUuNzM1NzJdLFxyXG4gIFsxNTg3LjM4NDMsIDQzMi4zODU2OF0sXHJcbiAgWzE1ODIuNzYyNSwgNDM0LjA4MzY4XSxcclxuICBbMTU4Mi42NzcyLCA0MzcuOTQyNDddLFxyXG4gIFsxNTc5LjUzMiwgNDM2LjY5MDAzXSxcclxuICBbMTU3NC4yOTQ5LCA0MzMuNjI4MTRdLFxyXG4gIFsxNTc0LjUzNjEsIDQyOS44ODI3NV0sXHJcbiAgWzE1NzAuODcwOCwgNDMxLjcxMTEyXSxcclxuICBbMTU2Ni45ODYxLCA0MzIuMTU3NTZdLFxyXG4gIFsxNTYzLjU5MDIsIDQzMy43MTM4XSxcclxuICBbMTU2MC4yNzU5LCA0MzMuMDcyNl0sXHJcbiAgWzE1NTcuMjA5LCA0MzAuNjgwNjNdLFxyXG4gIFsxNTYxLjQzNiwgNDI5LjE1MzRdLFxyXG4gIFsxNTY1LjM2NzgsIDQyOC40Njg3Ml0sXHJcbiAgWzE1NjMuNTM2MywgNDI1LjA5NTI4XSxcclxuICBbMTU2OC4yODk0LCA0MjQuMzQyMTNdLFxyXG4gIFsxNTY5LjI0MiwgNDI4LjM0M10sXHJcbiAgWzE1NzIuMzczOCwgNDI2Ljg2OTc1XSxcclxuICBbMTU3NS44Mjc1LCA0MjEuNDkwNDhdLFxyXG4gIFsxNTc2LjY5NTMsIDQyNi4zODcwMl0sXHJcbiAgWzE1NzguNTc3MywgNDMwLjUzNTZdLFxyXG4gIFsxNTc3LjkyOTksIDQzNC4wMTUzOF0sXHJcbiAgWzE1ODMuMTM0NiwgNDMwLjg2MjI3XSxcclxuICBbMTU4MS4xNjY2LCA0MjcuNDI5MTddLFxyXG4gIFsxNTc5LjgwNjYsIDQyNC4wMDU1NV0sXHJcbiAgWzE1NzkuNTQ5NywgNDIwLjU0NjAyXSxcclxuICBbMTU4My4zODcxLCA0MjAuNDI0M10sXHJcbiAgWzE1ODUuNzE0OCwgNDE2LjcxNTQ1XSxcclxuICBbMTU4My45ODAyLCA0MTMuMDI0MDVdLFxyXG4gIFsxNTg2LjY5NjgsIDQwOS43Mjk5Ml0sXHJcbiAgWzE1ODkuNTMzLCA0MTMuMjQzODddLFxyXG4gIFsxNTkwLjExMDYsIDQxNy4zMTM5M10sXHJcbiAgWzE1ODcuNTg5NywgNDIxLjI1OTFdLFxyXG4gIFsxNTg0LjkwMjIsIDQyNC41ODY4OF0sXHJcbiAgWzE1ODcuMjI1NiwgNDI4LjczNThdLFxyXG4gIFsxNTkwLjQyOTQsIDQzNC45NDA2N10sXHJcbiAgWzE1OTQuMDI4MSwgNDM1Ljc2NDQ3XSxcclxuICBbMTU5MS45OTMsIDQzMS4wNDk1M10sXHJcbiAgWzE1OTAuNjAzLCA0MjUuMDc0OTVdLFxyXG4gIFsxNTkxLjkxMzIsIDQyMS4wODgzOF0sXHJcbiAgWzE1OTUuMTgyNSwgNDE4Ljc5ODM0XSxcclxuICBbMTU5NS40NDYsIDQyMy44NDc5XSxcclxuICBbMTU5OS4yODQzLCA0MjEuMzg4MzddLFxyXG4gIFsxNTk5LjExODIsIDQxNi41MjcxNl0sXHJcbiAgWzE2MDMuMjg1OSwgNDE1LjM4NDddLFxyXG4gIFsxNjA1LjMzMDgsIDQxMC43NDkzM10sXHJcbiAgWzE2MDguNjYxNiwgNDE0Ljc4NjkzXSxcclxuICBbMTU5OS40MjUyLCA0MTEuMzQzMjNdLFxyXG4gIFsxNTk0LjQ3MzQsIDQxNC42OTQ1Ml0sXHJcbiAgWzE1OTQuODYzOSwgNDEwLjg0MDQ1XSxcclxuICBbMTU5MS41OTY4LCA0MDkuMDQ5XSxcclxuICBbMTU4OS44MjEsIDQwNS45NzE1Nl0sXHJcbiAgWzE1ODYuNDE5MiwgNDA0Ljc5NzY3XSxcclxuICBbMTU4My4zNTA2LCA0MDYuNTIzNV0sXHJcbiAgWzE1ODEuMjI5NSwgNDA5LjQ3MzVdLFxyXG4gIFsxNTc5LjYwMjMsIDQwNC44NDU3XSxcclxuICBbMTU3My40NTgzLCA0MDkuMjM3MjRdLFxyXG4gIFsxNTc2Ljk0ODksIDQwOC4wOTYzN10sXHJcbiAgWzE1NzguOTUzMiwgNDAxLjEwNDddLFxyXG4gIFsxNTgzLjcyMjksIDQwMS44NTMxMl0sXHJcbiAgWzE1ODkuMzU3MiwgNDAxLjg0ODQ4XSxcclxuICBbMTU4OS4xMDA4LCAzOTguNTQwMTZdLFxyXG4gIFsxNTkzLjk4NCwgMzk5LjM2Nzc0XSxcclxuICBbMTU5My42NjIxLCA0MDQuMDQxMzJdLFxyXG4gIFsxNTk3LjA1MTMsIDQwNi44OTMxNl0sXHJcbiAgWzE2MDEuNjA2NywgNDA1LjM1ODc2XSxcclxuICBbMTYwNS40NDUxLCA0MDIuMzU1M10sXHJcbiAgWzE2MDIuMTM2LCAzOTkuMjM3NTJdLFxyXG4gIFsxNTk5LjA4NjQsIDM5Ni4yMzQzXSxcclxuICBbMTU5Ny4zMDQ3LCAzOTEuNTI1ODhdLFxyXG4gIFsxNTk4LjAwODUsIDQwMS43MzUzXSxcclxuICBbMTU5NS4wMTgxLCAzOTUuMDk0MjRdLFxyXG4gIFsxNTkxLjIwMzEsIDM5NS41ODk0Ml0sXHJcbiAgWzE1ODcuNTc4LCAzOTQuNjQzOF0sXHJcbiAgWzE1ODguMjkwOSwgMzkxLjA0Mjk3XSxcclxuICBbMTU4OC44NzY3LCAzODcuNjQ0NDddLFxyXG4gIFsxNTg0Ljg5MTQsIDM4OC40OTU1N10sXHJcbiAgWzE1ODEuMzAyNywgMzg3LjE2NzE4XSxcclxuICBbMTU4MC4xOTQ2LCAzODMuODA5NjZdLFxyXG4gIFsxNTgzLjI5MSwgMzgzLjM2MTE4XSxcclxuICBbMTU4Ni4yMjc5LCAzODUuMTczM10sXHJcbiAgWzE1OTMuMTU5OCwgMzc3LjU3MjM2XSxcclxuICBbMTU5Ny41NjMsIDM3OC43OTM1OF0sXHJcbiAgWzE2MDguMDQwMiwgMzc5LjEwMjc4XSxcclxuICBbMTYwNS44MDQsIDM3NS4xMDQzNF0sXHJcbiAgWzE2MDIuNDM3NywgMzc4LjY0NjMzXSxcclxuICBbMTU5OS44OTExLCAzNzQuOTAyM10sXHJcbiAgWzE1OTkuNzYwMSwgMzY2Ljg3MTgzXSxcclxuICBbMTU5Ny4yNTgzLCAzNzAuMjM0ODZdLFxyXG4gIFsxNTk1LjM4MjYsIDM3NC4xNTM0NF0sXHJcbiAgWzE1ODkuMDQ2NiwgMzc1LjA0MzI3XSxcclxuICBbMTU4OS42MDA2LCAzNzkuMzgzXSxcclxuICBbMTU4Ni42MjQ1LCAzODEuNTk5OV0sXHJcbiAgWzE1ODQuOTQ3NSwgMzc4LjI2ODY1XSxcclxuICBbMTU4My45NTE0LCAzNzQuNTcxNV0sXHJcbiAgWzE1ODAuNjU5OSwgMzcxLjEzODhdLFxyXG4gIFsxNTg2LjQyNywgMzcxLjE0ODldLFxyXG4gIFsxNTg0LjI3MTUsIDM2Ny4yMzQ4Nl0sXHJcbiAgWzE1NzYuMzYzMywgMzY4LjUyNzRdLFxyXG4gIFsxNTc1Ljk4MTQsIDM3My40MjgyXSxcclxuICBbMTU3Mi4xMDYzLCAzNzAuOTMzMzVdLFxyXG4gIFsxNTcxLjg3NjUsIDM3NS4zNzk2XSxcclxuICBbMTU2OC4xNjk5LCAzNzIuNzg1MjVdLFxyXG4gIFsxNTY1LjU2NiwgMzY5Ljc2NTM1XSxcclxuICBbMTU2OC42NzgzLCAzNjcuMzJdLFxyXG4gIFsxNTcyLjQ5MTUsIDM2Ni4yMDQ0N10sXHJcbiAgWzE1NzQuODUwMSwgMzYyLjc1OTM3XSxcclxuICBbMTU3OC4yMjM5LCAzNjEuMDU2ODJdLFxyXG4gIFsxNTgwLjQyMjIsIDM1Ny42Mjk4OF0sXHJcbiAgWzE1NzYuOTkwMSwgMzU0LjgzNzA0XSxcclxuICBbMTU3Mi42NTgxLCAzNTcuNDA3NDddLFxyXG4gIFsxNTY1Ljg1NjIsIDM1Ny43MjI3Ml0sXHJcbiAgWzE1NjAuNzMyNCwgMzYxLjE3MjgyXSxcclxuICBbMTU2NS43MTEyLCAzNjMuNDk4MDJdLFxyXG4gIFsxNTcwLjA2NTMsIDM2MS40ODk0N10sXHJcbiAgWzE1NzkuODk4NywgMzY1Ljk2OTk3XSxcclxuICBbMTU4My4xNzA0LCAzNjIuMDg0NF0sXHJcbiAgWzE1ODcuNzYxNSwgMzYzLjU3ODM3XSxcclxuICBbMTU4OS4yNTk2LCAzNjcuMzgxMzVdLFxyXG4gIFsxNTkxLjg0MTEsIDM3MS4zMjY0OF0sXHJcbiAgWzE1OTMuNjMwOSwgMzY2LjgwMjU1XSxcclxuICBbMTU5Ny40NTY1LCAzNjMuODM3MTZdLFxyXG4gIFsxNTk5LjkzMzMsIDM2MC42Njg4XSxcclxuICBbMTU5NC4xNzcsIDM2Mi40MTQxNV0sXHJcbiAgWzE1OTEuMjc0NywgMzYwLjg2NTFdLFxyXG4gIFsxNTg3LjU1MzcsIDM1OS4wMjMxM10sXHJcbiAgWzE1ODQuMzA1NCwgMzU2Ljg3MjNdLFxyXG4gIFsxNTgyLjY4NywgMzUyLjUwMTldLFxyXG4gIFsxNTg3LjkzNzUsIDM1My42Mjc4XSxcclxuICBbMTU5MS43OTQsIDM1Ni40NDIyNl0sXHJcbiAgWzE1OTYuMTQ3NywgMzU3LjgwNDU3XSxcclxuICBbMTU5My4wNTcxLCAzNTIuMzA5M10sXHJcbiAgWzE1OTcuNzgyNiwgMzUzLjI2MV0sXHJcbiAgWzE2MDEuOTQ5OCwgMzUyLjI1OTAzXSxcclxuICBbMTYwOS4yNzY1LCAzNTMuOTA4NjNdLFxyXG4gIFsxNjA1LjUxODgsIDM1NS43NTQyNF0sXHJcbiAgWzE2MDEuNCwgMzU2Ljk4NjhdLFxyXG4gIFsxNjA1LjIzMSwgMzYwLjczMjg4XSxcclxuICBbMTYwMy4wNjI1LCAzNjMuODYwNjZdLFxyXG4gIFsxNjAzLjg5MDksIDM2OC4wMDM3Ml0sXHJcbiAgWzE2MDIuMzAwMywgMzcxLjY5MDEyXSxcclxuICBbMTYwNy42NzU4LCAzNzAuOTc3MDVdLFxyXG4gIFsxNjExLjg1MDgsIDM2OS4zNzgzNl0sXHJcbiAgWzE2MTEuMjk4MiwgMzc1LjE5NjZdLFxyXG4gIFsxNjE1LjI0MzQsIDM3My4wNDY1N10sXHJcbiAgWzE2MTcuNTc0NSwgMzY5Ljk1MDM4XSxcclxuICBbMTYxOC4wNzEsIDM2Ni4xMzU5M10sXHJcbiAgWzE2MjEuMDk0NCwgMzYzLjcxNTk0XSxcclxuICBbMTYyNC44MDU3LCAzNjQuNzgzMDVdLFxyXG4gIFsxNjIyLjM1ODQsIDM2OC44ODg1NV0sXHJcbiAgWzE2MjYuMTUwMywgMzcxLjcxMzU2XSxcclxuICBbMTYyOC4wMzEsIDM2Ny4yNjk2XSxcclxuICBbMTYyOC4zNDI1LCAzNjEuODkwMjZdLFxyXG4gIFsxNjM2LjE2NTksIDM1My4yMjE1M10sXHJcbiAgWzE2MzEuODM4NCwgMzUzLjU2NTY0XSxcclxuICBbMTYyOC4wMTUsIDM1Mi43ODc3Ml0sXHJcbiAgWzE2MjQuMjM1MiwgMzUyLjUzNDhdLFxyXG4gIFsxNjI4LjkwOTcsIDM0OC40NTM4Nl0sXHJcbiAgWzE2MzMuNTE0OSwgMzQ4LjM2MThdLFxyXG4gIFsxNjMyLjIzMDMsIDM0My42ODY2NV0sXHJcbiAgWzE2MzYuNjU4MiwgMzQxLjgzOTU3XSxcclxuICBbMTYzNy43MTUxLCAzMzUuNDI2ODVdLFxyXG4gIFsxNjQwLjQ2NjQsIDMyOC44NjI4XSxcclxuICBbMTY0My43MzEsIDMyMS4yOTU5XSxcclxuICBbMTY0Ny43NzY0LCAzMTYuMDEyMl0sXHJcbiAgWzE2NTEuODU4MiwgMzE2LjAwNzJdLFxyXG4gIFsxNjUzLjY2MzcsIDMxMi4xNDEyXSxcclxuICBbMTY1MC4wNDUyLCAzMTAuNDg1MzVdLFxyXG4gIFsxNjUwLjYzMzksIDMwNi4wMDA2XSxcclxuICBbMTY1NS4zMzI1LCAzMDguMDc0MjhdLFxyXG4gIFsxNjYwLjY4NTIsIDMwNC43MzIyN10sXHJcbiAgWzE2NTcuMzI5OCwgMzAzLjMyMTc4XSxcclxuICBbMTY1My45MzA5LCAzMDMuNjg4OF0sXHJcbiAgWzE2NTQuOTA0LCAyOTguNTc0ODZdLFxyXG4gIFsxNjU0LjgwODIsIDI5My41NzAyOF0sXHJcbiAgWzE2NTguNjMzMywgMjk0LjQyNzkyXSxcclxuICBbMTY2Mi40ODE5LCAyOTAuNzM3NDNdLFxyXG4gIFsxNjYwLjk4MjQsIDI4Ni43NTQxXSxcclxuICBbMTY2NC40NzIyLCAyODQuMDg3MV0sXHJcbiAgWzE2NjYuODIzMiwgMjg3LjYyNTEyXSxcclxuICBbMTY3MC41ODIzLCAyOTAuNDY0MTRdLFxyXG4gIFsxNjczLjg4MzMsIDI5My4wOTQwMl0sXHJcbiAgWzE2NzcuMTczLCAyODkuMzQxNDNdLFxyXG4gIFsxNjcyLjc1NTEsIDI4Ni41MTIyNF0sXHJcbiAgWzE2NjkuMDcxMywgMjgzLjMxNDJdLFxyXG4gIFsxNjY1LjQzMTYsIDI3OS40NzgwNl0sXHJcbiAgWzE2NjcuODQ3LCAyNzUuMjMwNF0sXHJcbiAgWzE2NzAuODIzMSwgMjcxLjA2MTM3XSxcclxuICBbMTY3My40OTYxLCAyNzYuMTA0OThdLFxyXG4gIFsxNjcwLjQzNTcsIDI3OS4wNjk2XSxcclxuICBbMTY3NC40MTk4LCAyODEuNzYyM10sXHJcbiAgWzE2NzguODE2NCwgMjg0LjY2OTA0XSxcclxuICBbMTY3OS4yNjA5LCAyNzkuNjg2NV0sXHJcbiAgWzE2NzguMDM3OCwgMjc1LjU1NjNdLFxyXG4gIFsxNjgyLjAyMDUsIDI3NC4yNTE1XSxcclxuICBbMTY4My42MDAzLCAyNjkuOTc1NjVdLFxyXG4gIFsxNjg3LjI4MDIsIDI3Mi41Nzk1XSxcclxuICBbMTY5MS4xNjg3LCAyNzAuNzg2NV0sXHJcbiAgWzE2ODcuNTk4NCwgMjY4LjQxODQ2XSxcclxuICBbMTY4NS4xNjI4LCAyNjUuNTE3Ml0sXHJcbiAgWzE2ODEuNTMxOSwgMjYzLjgyMzA2XSxcclxuICBbMTY4MC40MTY3LCAyNjcuMTkwM10sXHJcbiAgWzE2NzkuMTcyLCAyNzAuNjMzNzNdLFxyXG4gIFsxNjc1LjM2ODQsIDI3Mi4wMDM1XSxcclxuICBbMTY3NC42ODEyLCAyNjcuODQ4MDJdLFxyXG4gIFsxNjcwLjExODQsIDI2NS44ODc0XSxcclxuICBbMTY2Ni4xNDQzLCAyNzAuNTQxMDVdLFxyXG4gIFsxNjYwLjk2ODUsIDI3Ny43NDA1N10sXHJcbiAgWzE2NTUuNjIyMywgMjg3LjcwNDE2XSxcclxuICBbMTY1OC4yNjMyLCAyOTAuNDg2NDJdLFxyXG4gIFsxNjU2Ljk3MjMsIDI4My43Njg3XSxcclxuICBbMTY2MC44MDI3LCAyODEuODg2NjZdLFxyXG4gIFsxNjYyLjk0MTcsIDI3My44MDk2M10sXHJcbiAgWzE2NTUuOTA2MiwgMjcyLjE5MDk1XSxcclxuICBbMTY1My40NjY0LCAyNjYuOTI2XSxcclxuICBbMTY0OS4wNzc0LCAyNjEuOTk2NDNdLFxyXG4gIFsxNjQwLjAwMjIsIDI1MC41NTUyXSxcclxuICBbMTY0NC40MDEyLCAyNDYuOTgyOTFdLFxyXG4gIFsxNjQ5LjgxMDMsIDI0My4xMzQxNl0sXHJcbiAgWzE2NDQuOTgyNSwgMjM5LjYyMDEyXSxcclxuICBbMTYzOS45ODIsIDI0My4wODk2M10sXHJcbiAgWzE2MzkuNzc0NywgMjM1Ljk2Nzc0XSxcclxuICBbMTY0NS4zNTc5LCAyMzMuODc0NzRdLFxyXG4gIFsxNjQyLjUyNzEsIDIyOS4wMTQxNl0sXHJcbiAgWzE2NDcuMTY1NiwgMjI2Ljg3MDg4XSxcclxuICBbMTY1MS42NDMyLCAyMjguOTQxMDFdLFxyXG4gIFsxNjQ5Ljk0NDEsIDIyMS43MTkyOF0sXHJcbiAgWzE2NTYuMTI3NywgMjIwLjAzOTI4XSxcclxuICBbMTY2MC45Mjc2LCAyMTYuMzc4MzRdLFxyXG4gIFsxNjYyLjg3MTgsIDIyMC44ODE5NF0sXHJcbiAgWzE2NjQuODE0MSwgMjI4LjY5MDE2XSxcclxuICBbMTY2Mi44NDM1LCAyMzIuNjc3MDZdLFxyXG4gIFsxNjY1Ljg5MjgsIDIzOC42NDc5Ml0sXHJcbiAgWzE2NzAuMjQxLCAyNDEuNDI5MjRdLFxyXG4gIFsxNjY4Ljc0NzgsIDIzMy4yMTg1XSxcclxuICBbMTY3NC4yMTgsIDIzNC43MjU0M10sXHJcbiAgWzE2NzYuMDc2NywgMjM5LjMzOTAyXSxcclxuICBbMTY3Ny4yMTIzLCAyNDMuNzA1MDhdLFxyXG4gIFsxNjcxLjE3MjQsIDI0Ny4zNzQxNV0sXHJcbiAgWzE2NzIuOTMyNCwgMjUyLjEzNDRdLFxyXG4gIFsxNjcwLjAzOTcsIDI1Ni4wOTFdLFxyXG4gIFsxNjY2LjkwOTUsIDI1Mi44OTE4OV0sXHJcbiAgWzE2NjUuNzQwNSwgMjQ2LjUyNTI0XSxcclxuICBbMTY2MC4yMjk5LCAyNDUuODY4OV0sXHJcbiAgWzE2NjIuNTEzNCwgMjQxLjMwNTk3XSxcclxuICBbMTY1OS41MTIyLCAyMzYuMjU5MDhdLFxyXG4gIFsxNjYwLjM1NzcsIDIyNS4zNzc4NV0sXHJcbiAgWzE2NTUuMzg5NCwgMjI1LjM3MzRdLFxyXG4gIFsxNjUwLjEwMDYsIDIzNS45MTkyNV0sXHJcbiAgWzE2NTMuOTMwMiwgMjM4LjMxNzVdLFxyXG4gIFsxNjU3LjU4NDgsIDI0MC43NjIxMl0sXHJcbiAgWzE2NTQuNzg4MSwgMjQ0Ljc4MDQzXSxcclxuICBbMTY1NS4wNjk4LCAyNTAuMTg4MjNdLFxyXG4gIFsxNjQ5Ljk5ODMsIDI1MC44Mzk3XSxcclxuICBbMTY1My40ODkxLCAyNTYuMTA3OTRdLFxyXG4gIFsxNjU1LjgxOTUsIDI2MS43MzAxM10sXHJcbiAgWzE2NjAuMjYwMSwgMjY4LjU2NDk3XSxcclxuICBbMTY2MS4zMjg2LCAyNjMuNTgwMTRdLFxyXG4gIFsxNjY1LjY0MzYsIDI2Ni4wNDU5XSxcclxuICBbMTY2Ni4zNjA4LCAyNjAuMjEwOF0sXHJcbiAgWzE2NzAuNTY2OSwgMjYxLjAzNzE0XSxcclxuICBbMTY3NC4xMDUsIDI1OC43OTA2NV0sXHJcbiAgWzE2NzYuNTI3MSwgMjU1LjQ4NjE5XSxcclxuICBbMTY3NC4wNTExLCAyNjMuNDI2N10sXHJcbiAgWzE2NzcuNjg5MiwgMjY0LjUxNzMzXSxcclxuICBbMTY3Ny41NDIsIDI2MC4yNDQwMl0sXHJcbiAgWzE2ODEuMDMxLCAyNjAuMjk5MjZdLFxyXG4gIFsxNjgwLjM1ODYsIDI1Ni42ODc3N10sXHJcbiAgWzE2NzkuODM4NywgMjUyLjc0MDc4XSxcclxuICBbMTY4MS43Nzc2LCAyNDkuMTYyNjNdLFxyXG4gIFsxNjgyLjk4MjksIDI0NS40MDQ0XSxcclxuICBbMTY4Ni43OTc5LCAyNDMuMjY1ODVdLFxyXG4gIFsxNjgyLjMwMDksIDI0MC4wMzk0N10sXHJcbiAgWzE2ODAuNTI0MiwgMjM1LjcyMTk4XSxcclxuICBbMTY3OC4wOTE5LCAyMjUuODIzMjddLFxyXG4gIFsxNjgyLjgwNywgMjI1LjE4NjJdLFxyXG4gIFsxNjgzLjY2OCwgMjIwLjI0OTE4XSxcclxuICBbMTY3OS4yOTI4LCAyMjAuNzA0ODhdLFxyXG4gIFsxNjc2LjU5NjQsIDIxNi42OTU1Nl0sXHJcbiAgWzE2NzEuNTIxNCwgMjE1LjkyNjQyXSxcclxuICBbMTY2Ni42NjQxLCAyMTYuMjAyNzZdLFxyXG4gIFsxNjY4LjY0OTgsIDIyMC40NzA4OV0sXHJcbiAgWzE2NzMuNDI4NywgMjIxLjg4NjE3XSxcclxuICBbMTY3Mi40MjE5LCAyMjguMzcyNV0sXHJcbiAgWzE2NzguMjE1NiwgMjMwLjc1NDU4XSxcclxuICBbMTY5MC4wMDExLCAyMjkuMzI2NzVdLFxyXG4gIFsxNjkyLjk0NjUsIDIyMi44NDkzNV0sXHJcbiAgWzE2ODguMjc4OSwgMjI0LjM2MjE3XSxcclxuICBbMTY4NC43NzYxLCAyMzAuNjM0NDldLFxyXG4gIFsxNjg2LjIzNSwgMjM1LjMxOTM3XSxcclxuICBbMTY4OC40OTQ0LCAyMzkuMDYzNDZdLFxyXG4gIFsxNjkxLjY3MjEsIDIzNS4wNjc0N10sXHJcbiAgWzE2OTUuMzMwMSwgMjMxLjkyNTFdLFxyXG4gIFsxNjk3LjA2OTcsIDIzNi45NTc1N10sXHJcbiAgWzE2OTkuMjc4MywgMjMzLjgwOTAyXSxcclxuICBbMTY5OS44Mjk3LCAyMzAuMDQzODJdLFxyXG4gIFsxNjk5LjcwNDMsIDIyNi4wOTkwOV0sXHJcbiAgWzE2OTUuMTI3MywgMjI2LjQyMzAyXSxcclxuICBbMTY5Ni4zOTY3LCAyMTguODI3ODhdLFxyXG4gIFsxNjkyLjM3MTcsIDIxNy44MDE3XSxcclxuICBbMTY4OC44NTg1LCAyMTkuNDc5ODNdLFxyXG4gIFsxNjg1Ljk4MDUsIDIxNi4zNzM2M10sXHJcbiAgWzE2ODkuNDM1NSwgMjEzLjQzOTkxXSxcclxuICBbMTY5NC41MzE1LCAyMTQuMjI4MzJdLFxyXG4gIFsxNjk3LjQ4MjksIDIxMS4wODA5OF0sXHJcbiAgWzE2OTguMzA2OSwgMjA2LjU4OTddLFxyXG4gIFsxNjk1LjM1MjUsIDIwMi41NzcyNF0sXHJcbiAgWzE2OTAuNTkwNiwgMjAzLjY2MjA1XSxcclxuICBbMTY5MS43OTI0LCAyMDguMTkzNF0sXHJcbiAgWzE2ODUuNTgyOSwgMjA5Ljk2ODExXSxcclxuICBbMTY4Ni4wNDUyLCAyMDQuOTQ5NV0sXHJcbiAgWzE2ODEuNzE1MSwgMjE0LjcwMTY5XSxcclxuICBbMTY3OS4yNjA1LCAyMTAuNDc2NzNdLFxyXG4gIFsxNjgwLjg0NjMsIDIwNi4wMTExXSxcclxuICBbMTY4Mi45MzQ3LCAyMDAuNTc5NTldLFxyXG4gIFsxNjg3LjQ4MzUsIDE5OS4wNDMzN10sXHJcbiAgWzE2OTEuOTM2LCAxOTguNzkwNDVdLFxyXG4gIFsxNjk0Ljg2ODQsIDE5NS43NzU5OV0sXHJcbiAgWzE2OTguNjc0OSwgMTk3LjIxODA1XSxcclxuICBbMTcwMy4wNjM1LCAxOTUuMTg1NDldLFxyXG4gIFsxNzA4LjY5NDYsIDE5NS4zNTczNl0sXHJcbiAgWzE3MDguNzMzOCwgMTg4LjIyMzAyXSxcclxuICBbMTcwNS42MjU1LCAxOTEuNTU1MjRdLFxyXG4gIFsxNzExLjA3NjQsIDE5Mi4yMDE0NV0sXHJcbiAgWzE3MTQuODEzLCAxOTEuOTQxMTZdLFxyXG4gIFsxNzE1LjgwNDcsIDE5NS43ODgxMl0sXHJcbiAgWzE3MTIuMjU4MywgMTk3LjcxOTgzXSxcclxuICBbMTcyMC41NTgyLCAyMDYuOTYxMDZdLFxyXG4gIFsxNzIwLjgxOCwgMjAxLjQ3XSxcclxuICBbMTcxOS4yNDE1LCAxOTMuNTk3NDZdLFxyXG4gIFsxNzE4LjY5NjIsIDE4OS42OTc3XSxcclxuICBbMTcxNy4wMjMzLCAxNzcuMjhdLFxyXG4gIFsxNzIxLjI5NzksIDE4MC4yMTQ0Nl0sXHJcbiAgWzE3MjIuNDEyNiwgMTc1LjE2NzE2XSxcclxuICBbMTcyNi44MjQ3LCAxNzYuODQ4NTFdLFxyXG4gIFsxNzMxLjQwMTUsIDE3NS41Nzk1XSxcclxuICBbMTczNi4zOTU2LCAxNzYuMDExNjRdLFxyXG4gIFsxNzQ1LjQ4MDcsIDE3Ni43MjA5M10sXHJcbiAgWzE3NDAuNzkzNywgMTc2Ljg1NjkyXSxcclxuICBbMTczMi42NDcyLCAxNzkuNjIyMzhdLFxyXG4gIFsxNzM3LjQwODIsIDE4Mi4zNTE3OF0sXHJcbiAgWzE3MzIuNjExNSwgMTg4LjQxODA4XSxcclxuICBbMTczNy43MzUsIDE4OC4xMDM1Ml0sXHJcbiAgWzE3NDIuOTE5NCwgMTg4LjkzOTczXSxcclxuICBbMTc0Mi4xMDkxLCAxODMuNDkwNTJdLFxyXG4gIFsxNzQ2Ljc0NDksIDE4NC42MzYxMV0sXHJcbiAgWzE3NDguOTU1NiwgMTg4LjYyMjk3XSxcclxuICBbMTc1My4xNjUsIDE5MS4wMzYwMV0sXHJcbiAgWzE3NTcuMjE4MSwgMTg3LjM2OTg0XSxcclxuICBbMTc1Ni4yNzIyLCAxODMuMjk4NzVdLFxyXG4gIFsxNzUyLjY1NTksIDE4Mi4xNDddLFxyXG4gIFsxNzQ5LjYyODgsIDE3OC43MzY0NV0sXHJcbiAgWzE3NTEuNTUzOCwgMTc0LjY0NDAxXSxcclxuICBbMTc1Ni4wODAxLCAxNzYuODIzNDNdLFxyXG4gIFsxNzYwLjE5NzUsIDE3OS41MzMzM10sXHJcbiAgWzE3NjEuMDk5NywgMTgzLjcxMjEzXSxcclxuICBbMTc2My4yNzA5LCAxODcuMDY2OTldLFxyXG4gIFsxNzY2LjQyOTQsIDE4My45NTYyNF0sXHJcbiAgWzE3NjMuMzA0OSwgMTc1LjYzNDIyXSxcclxuICBbMTc2Ni4xODc5LCAxNzkuMDAyOF0sXHJcbiAgWzE3NzEuMzMxLCAxODEuNjE3NjFdLFxyXG4gIFsxNzc1LjYzMDIsIDE3OC4zNjg1Nl0sXHJcbiAgWzE3ODEuMTA4MywgMTc5LjY0NV0sXHJcbiAgWzE3NzUuOTA5NywgMTg0LjkzNzk3XSxcclxuICBbMTc3MS4xNTE3LCAxODcuNDI4NTddLFxyXG4gIFsxNzY3LjExMywgMTg5LjM1Nzc3XSxcclxuICBbMTc3MC43MTEsIDIxMS45MzcwNl0sXHJcbiAgWzE3NjUuMTU4NywgMjE0LjQzMjMxXSxcclxuICBbMTc4NC45NDk4LCAyMDYuNjYwMTldLFxyXG4gIFsxNzcxLjQ0MTQsIDIyNy40NzAyXSxcclxuICBbMTc3Ni4wMjg2LCAyMTUuOTcyNTNdLFxyXG4gIFsxNzk0Ljc1NjYsIDI0OC4zNTIxN10sXHJcbiAgWzE4MDIuNjMyNywgMjYwLjIzNjYzXSxcclxuICBbMTc2MC40MDk0LCAyNDkuMTQ2MTVdLFxyXG4gIFsxNzYzLjc0NDQsIDI1Ni44MzU2M10sXHJcbiAgWzE3NTQuNTg0NCwgMjQ4LjM5MjUyXSxcclxuICBbMTc0OS4zODA2LCAyNDguNDA5MTVdLFxyXG4gIFsxNzU0Ljk0NzUsIDI0Mi43MzE5OF0sXHJcbiAgWzE3NjUuMzc3OSwgMjQ1LjY2NTJdLFxyXG4gIFsxNzYwLjk2ODUsIDI0Mi40MDExMl0sXHJcbiAgWzE3NTYuODk3MSwgMjM4LjI4MjQ3XSxcclxuICBbMTc1MC42NTIyLCAyMzcuOTM5NzNdLFxyXG4gIFsxNzU0Ljg4MDQsIDIzMy4xMzM1OF0sXHJcbiAgWzE3NDguNDQwNywgMjMzLjIyOF0sXHJcbiAgWzE3NDMuNTA5OCwgMjM1LjgzMTA1XSxcclxuICBbMTc0NC41NDQ4LCAyNDAuNTA2NThdLFxyXG4gIFsxNzQ5LjQyNDMsIDI0My4wMDIwOF0sXHJcbiAgWzE3MzcuOTQ2NCwgMjM3LjI5MjMzXSxcclxuICBbMTczOS42OTE4LCAyMzEuNzU2MzNdLFxyXG4gIFsxNzM0LjUzOTksIDIzMC41OTcxNV0sXHJcbiAgWzE3MzIuODE1NiwgMjM2LjQ2ODQzXSxcclxuICBbMTczMC4xODE4LCAyMzIuNTcxNThdLFxyXG4gIFsxNzI1LjcwMzIsIDIzMy44ODc0Ml0sXHJcbiAgWzE3MjEuODk2LCAyMzYuMjc4NTZdLFxyXG4gIFsxNzI4LjI4MjEsIDIyOC43MjExMl0sXHJcbiAgWzE3MjMuNjQyNywgMjI5LjYxMjRdLFxyXG4gIFsxNzExLjQzMDcsIDIyNy40Mjc0Nl0sXHJcbiAgWzE3MTEuODg3MiwgMjMzLjA1NDExXSxcclxuICBbMTcwNy45MTkyLCAyMzAuNjg2Ml0sXHJcbiAgWzE3MDMuOTEzNiwgMjI3Ljk3MjVdLFxyXG4gIFsxNzA3LjQyMywgMjI1Ljk2MjgxXSxcclxuICBbMTcwMy41MTE0LCAyMjIuNjAwMDRdLFxyXG4gIFsxNjk5LjExNSwgMjIyLjAzNzIyXSxcclxuICBbMTY5OS45OTc2LCAyMTUuMTUxM10sXHJcbiAgWzE3MDIuNzk3NCwgMjEwLjEzMjk4XSxcclxuICBbMTcwNC41NDUzLCAyMDUuODIyNzJdLFxyXG4gIFsxNzAxLjExNjIsIDIwMS45NzQ2NF0sXHJcbiAgWzE2OTkuNDU2OCwgMTkyLjMxMjU1XSxcclxuICBbMTY5NC40MDU2LCAxOTEuMDY2N10sXHJcbiAgWzE2ODkuODY0MywgMTkzLjM3OTIxXSxcclxuICBbMTY5MS4wNDIxLCAxODYuNzg4XSxcclxuICBbMTY5Ny43NTk5LCAxODQuMDMyMjNdLFxyXG4gIFsxNjk3Ljk3OCwgMTg3Ljg3NzVdLFxyXG4gIFsxNzAzLjEwOTQsIDE4Ny40NjIzMV0sXHJcbiAgWzE3MDMuMTYxNCwgMTgyLjE2ODEyXSxcclxuICBbMTcwOC4wMDUyLCAxODMuMzc1MTddLFxyXG4gIFsxNzEzLjQ1MTgsIDE4Ni44NDIwNF0sXHJcbiAgWzE3MTguMTc1LCAxODQuMzYzMV0sXHJcbiAgWzE3MjIuNzIwMiwgMTg1LjI2NjYzXSxcclxuICBbMTcyNi43ODU2LCAxODIuODQ0NDJdLFxyXG4gIFsxNzMyLjYzNCwgMTg0LjA2MjldLFxyXG4gIFsxNzI3LjgwODgsIDE4OC4xNjM1XSxcclxuICBbMTcyMy4zMTgxLCAxOTAuOTc2NjJdLFxyXG4gIFsxNzIyLjk1MjQsIDE5Ni4yOTE2M10sXHJcbiAgWzE3MjYuNzQwMiwgMTkzLjI2NjM0XSxcclxuICBbMTczMS43NjY1LCAxOTQuNzI4OF0sXHJcbiAgWzE3MjcuNDgzOSwgMTk4LjE3MTYzXSxcclxuICBbMTczNC40NDg5LCAxOTguODczOTNdLFxyXG4gIFsxNzQzLjA4NjQsIDE5OS4wMDY1Ml0sXHJcbiAgWzE3MzguOTgzOSwgMjA0LjkyMTcyXSxcclxuICBbMTczMi42MDE3LCAyMDMuOTA1MjRdLFxyXG4gIFsxNzM4LjQ0NzUsIDE5Ni45MTQ0OV0sXHJcbiAgWzE3MjUuNTkzMSwgMjAzLjAyNzMxXSxcclxuICBbMTcyNy45NjQyLCAyMDYuOTIzOTJdLFxyXG4gIFsxNzI0LjE4OTUsIDIxMC4yMjI2M10sXHJcbiAgWzE3MTkuMjM2MSwgMjIwLjQzOTgyXSxcclxuICBbMTcyMi4zMDc2LCAyMTUuNTIxNDJdLFxyXG4gIFsxNzE4LjcwNTgsIDIxMi4wMjY4Nl0sXHJcbiAgWzE3MTQuMjE4NiwgMjA5LjAwNzc4XSxcclxuICBbMTcxMC4wMzA5LCAyMTQuMjY0NzddLFxyXG4gIFsxNzA4Ljc5ODYsIDIwOC43MTU5MV0sXHJcbiAgWzE3MDUuMjUzMywgMjEzLjU5MjMzXSxcclxuICBbMTcwNS4wMzM3LCAyMTguMjU0NjJdLFxyXG4gIFsxNzEwLjA5MzksIDIyMi43NDc4NV0sXHJcbiAgWzE3MTMuNjUyMywgMjIwLjY4Mzk2XSxcclxuICBbMTcxNS40MzUsIDIyNS4wNTA2OV0sXHJcbiAgWzE3MTUuMjAwOSwgMjI5LjU2OTM0XSxcclxuICBbMTcyMC4xNDUsIDIyNi4yMTQ4OV0sXHJcbiAgWzE3MTkuNjYzMSwgMjMwLjc4NDQ1XSxcclxuICBbMTcxNy4wNjIsIDIzNC4xOTE0N10sXHJcbiAgWzE3MTQuNjA3OSwgMjM3LjcxMjkyXSxcclxuICBbMTcxMC41ODY0LCAyMzcuNTk4ODJdLFxyXG4gIFsxNzA5LjUzNSwgMjQxLjI5NTgyXSxcclxuICBbMTcwNS41ODU3LCAyMzkuOTE2NzVdLFxyXG4gIFsxNzA2Ljg3ODcsIDIzNS43MjI5NV0sXHJcbiAgWzE3MDMuNzY5NywgMjMyLjY2MV0sXHJcbiAgWzE3MDIuMjM2MSwgMjM2Ljc4NTg2XSxcclxuICBbMTcwMS4yMDM0LCAyNDAuNjExMTNdLFxyXG4gIFsxNjk3LjI2NDksIDI0MS40NDk5OF0sXHJcbiAgWzE2OTMuNjkyNSwgMjM5LjMyNzc0XSxcclxuICBbMTY5MS42NjE2LCAyNDIuNTgxMzldLFxyXG4gIFsxNjg5LjgwNiwgMjQ2LjAxOTA0XSxcclxuICBbMTY4Ni42OTY4LCAyNDguMzg5MjhdLFxyXG4gIFsxNjg0LjQzNDksIDI1MS41MTE2Nl0sXHJcbiAgWzE2ODQuMTUyMiwgMjU0Ljg3OTk0XSxcclxuICBbMTY4NC40NzI5LCAyNTguMjg5MDNdLFxyXG4gIFsxNjg0LjU2OTMsIDI2MS43NTU4Nl0sXHJcbiAgWzE2ODguMTExOSwgMjYxLjM2NTQ1XSxcclxuICBbMTY5Mi42MDg0LCAyNTYuMjk1NF0sXHJcbiAgWzE2ODguMzg0OCwgMjU3LjMwMjEyXSxcclxuICBbMTY4OC4yNTc2LCAyNTIuOTE1NDddLFxyXG4gIFsxNjkxLjcxNTgsIDI1MC4xNjgzN10sXHJcbiAgWzE2OTQuNzY1NSwgMjQ1LjUyNTYyXSxcclxuICBbMTY5OS41MTY4LCAyNDYuNTg5MzRdLFxyXG4gIFsxNzAzLjkzMzgsIDI0NS4wMDI2N10sXHJcbiAgWzE3MDguNjU4NiwgMjQ2LjI1MzMzXSxcclxuICBbMTcxNC4yODY2LCAyNDIuMzc2OTVdLFxyXG4gIFsxNzE4LjYxNjcsIDIzOS43Mzc0M10sXHJcbiAgWzE3MjAuNDA4NywgMjQ0LjAyNTc2XSxcclxuICBbMTcyNC4yMzk3LCAyNDEuMjgxNzFdLFxyXG4gIFsxNzI4LjEwNDEsIDIzOC43MzI3MV0sXHJcbiAgWzE3MzIuODk4LCAyNDIuMTMyOF0sXHJcbiAgWzE3MzguNTUwOCwgMjQzLjgxNzI2XSxcclxuICBbMTcyNy45MjM1LCAyNDUuNTM0OTddLFxyXG4gIFsxNzMzLjM1OTUsIDI1MS42Mjg0XSxcclxuICBbMTc0NS45NzQ5LCAyNTIuODYzMDhdLFxyXG4gIFsxNzQzLjY5ODYsIDI0Ni4zNTE5M10sXHJcbiAgWzE3MzkuNzI2OSwgMjUxLjA5OTY3XSxcclxuICBbMTczNy42NjAzLCAyNTYuNzk0MjVdLFxyXG4gIFsxNzM3LjM4ODksIDI2My41MzY2OF0sXHJcbiAgWzE3MzIuNTkyMiwgMjU4LjkxMV0sXHJcbiAgWzE3MzAuMTExNSwgMjY0LjUwMjhdLFxyXG4gIFsxNzI3LjkwMTksIDI3MS4xMDU3N10sXHJcbiAgWzE3MjYuNzM0NSwgMjc3LjcyMDgzXSxcclxuICBbMTcyMi4yNTI5LCAyNzkuMzcxNzddLFxyXG4gIFsxNzI1LjU4NzYsIDI4My40OTU1XSxcclxuICBbMTczMS4xODE1LCAyNzUuNjAxOF0sXHJcbiAgWzE3MzUuODkzNywgMjc0LjMzMzM3XSxcclxuICBbMTczMy4zNjQsIDI2OC44NjE3Ml0sXHJcbiAgWzE3MzkuNjg4MiwgMjY4LjkzNTczXSxcclxuICBbMTczNS4wMzA1LCAyODAuODY1NDJdLFxyXG4gIFsxNzMwLjIyMTQsIDI4MS45Mjc5Ml0sXHJcbiAgWzE3MzUuMDAxNywgMjg4LjMzMDI2XSxcclxuICBbMTcyOC45NiwgMjg3Ljk0MTk2XSxcclxuICBbMTcyMy42OTQ4LCAyOTMuMjU0NV0sXHJcbiAgWzE3MjAuMjUzLCAyODMuNjEyXSxcclxuICBbMTcyMi42MjM4LCAyODcuMTU1MjRdLFxyXG4gIFsxNzE2LjE5MDksIDI4NS44MjI2M10sXHJcbiAgWzE3MTYuMzA0MywgMjgwLjI4ODk3XSxcclxuICBbMTcxMy4wNjkyLCAyNzQuODgyMDhdLFxyXG4gIFsxNzIzLjMzNjksIDI3My44NTU1M10sXHJcbiAgWzE3MTcuNzc3NywgMjc1LjQ1MDUzXSxcclxuICBbMTcwOS4zNzc2LCAyNjcuMjE1MV0sXHJcbiAgWzE3MTMuNzkyNywgMjcwLjE5NDZdLFxyXG4gIFsxNzE5LjQyNTcsIDI3MC4wNzk5XSxcclxuICBbMTcyNC4zODE4LCAyNjYuNjg1OV0sXHJcbiAgWzE3MDguODMyOSwgMjU0LjM3OTEyXSxcclxuICBbMTcwOC4yMjUzLCAyNjAuNTgyMl0sXHJcbiAgWzE3MDQuMzE3NywgMjY1LjQ4OTRdLFxyXG4gIFsxNzAxLjMzOTEsIDI2MS42ODk3XSxcclxuICBbMTcwMy4yNDMzLCAyNTYuOTc2NjJdLFxyXG4gIFsxNjk3LjI5NjMsIDI1OC4zMTM3NV0sXHJcbiAgWzE2OTIuMjcyOCwgMjYwLjg5MDVdLFxyXG4gIFsxNjk2LjMzMTgsIDI2Mi44NDA5NF0sXHJcbiAgWzE2OTMuOTAwOSwgMjY2LjU1NjY0XSxcclxuICBbMTY4OS44NDAxLCAyNjUuMDc1NjVdLFxyXG4gIFsxNjk1LjEyMTUsIDI3MS43MTk0OF0sXHJcbiAgWzE2OTguOTk0NSwgMjY2Ljc2NTQ0XSxcclxuICBbMTY5OS4yNDc5LCAyNzEuMzE4N10sXHJcbiAgWzE3MDguMjg3OCwgMjczLjYzNzc2XSxcclxuICBbMTcwNC45MjU4LCAyNzYuOTIwNzJdLFxyXG4gIFsxNzA2LjQ0MDEsIDI4MC43MTFdLFxyXG4gIFsxNzA0LjAyMzgsIDI3MC43ODU2NF0sXHJcbiAgWzE3MDEuMzYwNiwgMjc1LjM0NzVdLFxyXG4gIFsxNjk3LjgwNTMsIDI3Ny4xMzM2N10sXHJcbiAgWzE3MDEuMDQ0OCwgMjgxLjE5NTM3XSxcclxuICBbMTY5NS45MTE0LCAyODIuMjcwMjZdLFxyXG4gIFsxNjkzLjgzNCwgMjc2Ljg0MzJdLFxyXG4gIFsxNjg5Ljg2NzQsIDI3Ni41OTI3NF0sXHJcbiAgWzE2ODUuMzI1MywgMjc2LjE3NjJdLFxyXG4gIFsxNjg1LjIwODQsIDI4MC4wNzUzNV0sXHJcbiAgWzE2ODQuNjE5NCwgMjg0LjI5OTA3XSxcclxuICBbMTY4Mi45NTQzLCAyODguNjQwOF0sXHJcbiAgWzE2ODEuNjQ4MSwgMjkyLjg4MjA4XSxcclxuICBbMTY3Ny44MTYyLCAyOTUuMzAyNl0sXHJcbiAgWzE2ODAuNzM4MiwgMjk4Ljc0MDQ4XSxcclxuICBbMTY3OC4zMjE1LCAzMDEuMTMyMDVdLFxyXG4gIFsxNjczLjQ3OTIsIDMwNi4yMTExMl0sXHJcbiAgWzE2NzUuNzY0NSwgMzA5LjgxODddLFxyXG4gIFsxNjc4LjA2OSwgMzA1Ljk3MDRdLFxyXG4gIFsxNjgxLjkyMTEsIDMwNS4xNzc4XSxcclxuICBbMTY3NS4yMDM5LCAzMDIuNTgwMzhdLFxyXG4gIFsxNjczLjc0NTEsIDI5OC4wMjNdLFxyXG4gIFsxNjY5LjE1NTYsIDI5OS4xMDg1OF0sXHJcbiAgWzE2NzEuMzkwMSwgMzAyLjA3OTk2XSxcclxuICBbMTY2OC41ODc5LCAzMDUuNDAyNV0sXHJcbiAgWzE2NjYuNTA2NiwgMzAyLjIxMzM4XSxcclxuICBbMTY2OS4yMTY4LCAyOTUuMjUxN10sXHJcbiAgWzE2NjYuNjIxLCAyOTEuODQ5OF0sXHJcbiAgWzE2NjMuOTE2NCwgMjk0LjYxMTQ1XSxcclxuICBbMTY2NS4wMjEsIDI5OC4xODMwNF0sXHJcbiAgWzE2NjAuNzQ5NCwgMjk3LjA2MjldLFxyXG4gIFsxNjU5LjE5MzIsIDMwMC4wMDk1NV0sXHJcbiAgWzE2NjIuODE4NywgMzAxLjY2MzU0XSxcclxuICBbMTY2NC4wNjAzLCAzMDYuMzgzNzNdLFxyXG4gIFsxNjY1Ljk1MDMsIDMwOS41NzIwMl0sXHJcbiAgWzE2NjIuMjExNSwgMzExLjg0MTA2XSxcclxuICBbMTY1OS43MTM0LCAzMDguNDk0OV0sXHJcbiAgWzE2NTguMzQyLCAzMTMuMzY5NzhdLFxyXG4gIFsxNjU2Ljg4MTUsIDMxNy44OTg2Ml0sXHJcbiAgWzE2NjIuMjY1OSwgMzIxLjUwNzU0XSxcclxuICBbMTY2MC4xMDY4LCAzMjUuMTI3OTZdLFxyXG4gIFsxNjU3LjcxODUsIDMyOC43ODRdLFxyXG4gIFsxNjU3LjExODIsIDMzMi45NTIyN10sXHJcbiAgWzE2NTUuNTEwNSwgMzIzLjQ0NjIzXSxcclxuICBbMTY1Mi44OTMxLCAzMjcuMjczMzVdLFxyXG4gIFsxNjUyLjM0NTcsIDMzMS41ODEyNF0sXHJcbiAgWzE2NDguMjUzOCwgMzM0LjMyNDY4XSxcclxuICBbMTY0NS40MjYsIDMzOC4wOTMyXSxcclxuICBbMTY0Mi41NzA4LCAzNDEuNTYzMl0sXHJcbiAgWzE2NDAuMTk5OCwgMzQ1LjIyNjc4XSxcclxuICBbMTY0My42ODg3LCAzNDcuNTczOV0sXHJcbiAgWzE2NDcuMjM2LCAzNDQuMTQzMl0sXHJcbiAgWzE2NTAuMDM5NiwgMzM5Ljk2MjQ2XSxcclxuICBbMTY1Mi45MjY1LCAzMzYuMjc0MzJdLFxyXG4gIFsxNjU0LjkyNzEsIDM0MS4zMzYzNl0sXHJcbiAgWzE2NTEuOTcwMiwgMzQ0LjY4OTddLFxyXG4gIFsxNjU2LjI1NjMsIDM0Ni42NDI4OF0sXHJcbiAgWzE2NTIuNjMzNCwgMzQ5LjQzMzddLFxyXG4gIFsxNjQ4LjM2OTksIDM0OS4wOTg3Ml0sXHJcbiAgWzE2NDQuOTQ2NSwgMzUyLjEwODE1XSxcclxuICBbMTY0MC40OTcsIDM1MS45NTUxNF0sXHJcbiAgWzE2MzcuODU3NywgMzQ4LjQxNTA0XSxcclxuICBbMTYyNC4wNDkzLCAzNDcuOTA2XSxcclxuICBbMTYyMC42MzU5LCAzNTAuODEzMV0sXHJcbiAgWzE2MTcuMDYxOCwgMzUyLjg2NjMzXSxcclxuICBbMTYxMy44OTk0LCAzNTQuOTY3NjJdLFxyXG4gIFsxNjExLjQ0ODIsIDM1Ny4yMjczNl0sXHJcbiAgWzE2MDguNTk1NywgMzU5LjA3MDc0XSxcclxuICBbMTYxNi44ODYyLCAzNTcuNTc2ODddLFxyXG4gIFsxNjE2Ljg4LCAzNjIuMTc2MjddLFxyXG4gIFsxNjEzLjY0MjYsIDM2NS41NTE1N10sXHJcbiAgWzE2MDkuOTQ3MywgMzYzLjAzNDI3XSxcclxuICBbMTYwNy42OTU3LCAzNjYuMDA2NDRdLFxyXG4gIFsxNjEzLjM0NjcsIDM2MC41NzQzNF0sXHJcbiAgWzE2MjEuMTI5NiwgMzU1LjUzOTkyXSxcclxuICBbMTYyMC4yODU2LCAzNTkuNTcwODZdLFxyXG4gIFsxNjI0LjExNTUsIDM2MC4xMTgwNF0sXHJcbiAgWzE2MjYuMzQ1MiwgMzU2LjgwODQ0XSxcclxuICBbMTYzMC45NzE5LCAzNTguNDU3MjRdLFxyXG4gIFsxNjM5LjMzNDYsIDM1Ny4xNDQ0N10sXHJcbiAgWzE2NDMuMzQ5MiwgMzU2LjMxNTk4XSxcclxuICBbMTY0Ny40MTIsIDM1OC40Mjc5OF0sXHJcbiAgWzE2NTIuODA5MSwgMzU4Ljg0Njg2XSxcclxuICBbMTY0NS41NzQ3LCAzNjguMDEzNTJdLFxyXG4gIFsxNjM5LjY4ODgsIDM2OC4wMzY2Ml0sXHJcbiAgWzE2MzguODQ2OSwgMzYyLjU1NTE1XSxcclxuICBbMTYzNS4wNzA4LCAzNTguMDE5MV0sXHJcbiAgWzE2NDMuNTc1NywgMzYxLjc4MDAzXSxcclxuICBbMTY0OS41ODM3LCAzNjMuNTU2ODVdLFxyXG4gIFsxNjQ5LjIxODUsIDM1NC4yNTc2Nl0sXHJcbiAgWzE2NTMuNzU3MywgMzUzLjk3Nzg3XSxcclxuICBbMTY1Ny42NzA4LCAzNTEuNTA2Nl0sXHJcbiAgWzE2NjIuMTQ3LCAzNTMuMTIyNTNdLFxyXG4gIFsxNjU4LjE1NDQsIDM1Ni45MDY4M10sXHJcbiAgWzE2NzIuMjYzNCwgMzU3Ljk3NTddLFxyXG4gIFsxNjcwLjgyMDYsIDM2NC43Mjc1XSxcclxuICBbMTY4NS4wNzY0LCAzNzMuNTY4NDJdLFxyXG4gIFsxNjgxLjEwMTEsIDM3Ni42OTc1XSxcclxuICBbMTY3Ni4zMjA2LCAzNzUuNTA5NzRdLFxyXG4gIFsxNjcwLjM5MDksIDM4OC40ODMyMl0sXHJcbiAgWzE2NjYuNjgxNSwgMzkzLjY2Nzk3XSxcclxuICBbMTY2NC42NzM4LCAzOTguODk2NDhdLFxyXG4gIFsxNjU4Ljg3ODMsIDM5OS41MDI1M10sXHJcbiAgWzE2NTUuMDg5NywgNDA0Ljk1NzM0XSxcclxuICBbMTY0Ny44MTYsIDM5NS43OTA0N10sXHJcbiAgWzE2NDAuNzQ1NywgMzk2LjI3MzhdLFxyXG4gIFsxNjMzLjgxODEsIDM5OS43MDYzXSxcclxuICBbMTY0NC4yNzk4LCAzODkuNjIwMzZdLFxyXG4gIFsxNjQwLjI5MDgsIDM3My42OTA5Ml0sXHJcbiAgWzE2MzQuNTk1NSwgMzc3LjA5MDg4XSxcclxuICBbMTYyNy4zNTQ1LCAzNzYuMjkzNjRdLFxyXG4gIFsxNjMwLjE2NTUsIDM4Mi4yNDY5NV0sXHJcbiAgWzE2MjYuNzU1NCwgMzg3LjM4MzAzXSxcclxuICBbMTYyMC43MSwgMzg4LjcxODQ0XSxcclxuICBbMTYxOC41NDQ5LCAzODIuNzA3Ml0sXHJcbiAgWzE2MjIuNjYyLCAzNzkuNTg3OThdLFxyXG4gIFsxNjIxLjQwNjIsIDM3NC4xMjA5N10sXHJcbiAgWzE2MTcuMzU5MSwgMzc3LjI1OTQ2XSxcclxuICBbMTYxMy4zMjAzLCAzODAuMzU5Ml0sXHJcbiAgWzE2MDkuMDU2LCAzODMuODExMzRdLFxyXG4gIFsxNjA4LjgyNzYsIDM4OC43Nzc3XSxcclxuICBbMTYwNC45MTQ4LCAzODcuMzIxNjJdLFxyXG4gIFsxNjA5LjY2MTQsIDM5Mi41ODkwNV0sXHJcbiAgWzE2MTMuNDYyNCwgMzg2LjI3NDZdLFxyXG4gIFsxNjA0LjU3OTEsIDM4Mi41Njk5Ml0sXHJcbiAgWzE2MDAuNTkwOCwgMzgzLjI3NDc1XSxcclxuICBbMTU5Ni44ODE1LCAzODMuMDYwMTVdLFxyXG4gIFsxNTkzLjQxMDksIDM4Mi4zNzQ3M10sXHJcbiAgWzE1OTAuMTk1MSwgMzg0LjAwMjI2XSxcclxuICBbMTU5Mi4zODQsIDM5MS42NjkwNF0sXHJcbiAgWzE1OTIuODA2NSwgMzg3LjY3MTQ1XSxcclxuICBbMTU5Ni40ODUxLCAzODcuMjE2OV0sXHJcbiAgWzE2MDAuNTUwMywgMzg3LjU4MDJdLFxyXG4gIFsxNjAxLjk2NzIsIDM5MS40MzcxXSxcclxuICBbMTYwNC41NTk2LCAzOTMuOTgxNjZdLFxyXG4gIFsxNjA3LjA5NTMsIDM5Ny40MTE2XSxcclxuICBbMTYxMC4yNjY2LCA0MDEuMzA4ODRdLFxyXG4gIFsxNjEzLjY5MzQsIDM5OC4wMjk2M10sXHJcbiAgWzE2MTcuOTM5NywgNDAwLjQ1NjZdLFxyXG4gIFsxNjE1LjA4MTMsIDQwMy41OTk5NV0sXHJcbiAgWzE2MTguNzAwOSwgMzk1LjE5MDU1XSxcclxuICBbMTYyNC4zMDQ3LCAzOTQuNDQ0M10sXHJcbiAgWzE2MjcuNDg2OCwgMzk4Ljk4Nzg1XSxcclxuICBbMTYyMi4zNTkzLCA0MDAuNTY2NjJdLFxyXG4gIFsxNjI1LjYzODEsIDQyMy43NDk5NF0sXHJcbiAgWzE2MjAuODg2NSwgNDI1Ljk4Mjg1XSxcclxuICBbMTYyOS44MjY4LCA0MTkuOTUzODNdLFxyXG4gIFsxNjMxLjYxNCwgNDI0LjM2MDRdLFxyXG4gIFsxNjM4Ljk4MjUsIDQzNC45MTU5XSxcclxuICBbMTY0NC4zMDc2LCA0MzUuNzY3NTVdLFxyXG4gIFsxNjQ2LjA0MTMsIDQ0MC40NTU3OF0sXHJcbiAgWzE2NDkuMjg5NiwgNDM3LjA2NzcyXSxcclxuICBbMTY1NS43MDUxLCA0MzEuNTk5NThdLFxyXG4gIFsxNjU5LjU2ODEsIDQzNS45NjAzXSxcclxuICBbMTY1Ni45OTA4LCA0NDAuNTY4ODJdLFxyXG4gIFsxNjU0LjM1NjksIDQzNi41MzA4Ml0sXHJcbiAgWzE2NTIuMjk1NywgNDQwLjU5ODYzXSxcclxuICBbMTY0OS40Nzc5LCA0NDMuMzQ0ODJdLFxyXG4gIFsxNjUxLjI5MTksIDQ0OC45NzAwNl0sXHJcbiAgWzE2NTMuNzc1OSwgNDQ1LjI0NTE4XSxcclxuICBbMTY1OC4yODYxLCA0NDQuNzI0NzNdLFxyXG4gIFsxNjYxLjU3NjIsIDQ1MS4wNTc2OF0sXHJcbiAgWzE2NjQuOTY0NywgNDUzLjU1MV0sXHJcbiAgWzE2NjYuMDI4MywgNDU3LjQ5Nzg2XSxcclxuICBbMTY2Ni4xOTEyLCA0NjIuMTUyNzddLFxyXG4gIFsxNjY3LjQ1MjksIDQ2Ni4xNTY5OF0sXHJcbiAgWzE2NjYuNDIxNSwgNDcwLjgzODhdLFxyXG4gIFsxNjcwLjM1NDcsIDQ2OS41ODEwNV0sXHJcbiAgWzE2NzYuNjUsIDQ3NC40ODg5NV0sXHJcbiAgWzE2NzQuMzIxOCwgNDcxLjI1MDU1XSxcclxuICBbMTY3MS41NDc1LCA0NzQuNzY3NTJdLFxyXG4gIFsxNjY3LjI4NywgNDc1LjIxOTU0XSxcclxuICBbMTY2My40NDksIDQ3Ny4wNDY3Ml0sXHJcbiAgWzE2NjIuNzU0OSwgNDczLjI4OV0sXHJcbiAgWzE2NjIuMjM3MywgNDY5LjEzNTQ0XSxcclxuICBbMTY2Mi45OTYyLCA0NjUuMzE0NzZdLFxyXG4gIFsxNjU5LjExNzQsIDQ2NC40OTc0NF0sXHJcbiAgWzE2NTcuNjE3LCA0NjguNTA1OThdLFxyXG4gIFsxNjU4LjU3MywgNDcyLjE2MjldLFxyXG4gIFsxNjU5LjI1ODUsIDQ3Ni4wNzg0Nl0sXHJcbiAgWzE2NjAuMjQzNSwgNDc5LjczNDEzXSxcclxuICBbMTY1OS41NDk4LCA0ODUuNjE4MTNdLFxyXG4gIFsxNjU4Ljk5MjksIDQ4OC45OTA0Ml0sXHJcbiAgWzE2NTUuODA0OSwgNDg2Ljc4ODgyXSxcclxuICBbMTY1OC4xNzA4LCA0ODIuNTgxM10sXHJcbiAgWzE2NTQuODkzNiwgNDgyLjkyMjM2XSxcclxuICBbMTY1Mi4yODMyLCA0ODQuOTM5MTVdLFxyXG4gIFsxNjQ4LjM4MDYsIDQ4My4yODU0XSxcclxuICBbMTY0NS4yNTMyLCA0ODAuMjk4MTZdLFxyXG4gIFsxNjQ0LjQzMDgsIDQ4NC40MDUxMl0sXHJcbiAgWzE2NDkuNTc3LCA0ODYuODY1NTddLFxyXG4gIFsxNjUyLjQ4NzksIDQ4OC45NTM1XSxcclxuICBbMTY1NS4yMjIzLCA0OTAuODI4MV0sXHJcbiAgWzE2NTcuODc4OCwgNDkyLjU4MDddLFxyXG4gIFsxNjU5Ljk4NTYsIDQ5NS4xNTAxMl0sXHJcbiAgWzE2NjAuNjM4NCwgNDk4LjYzMjg3XSxcclxuICBbMTY2My43NzEyLCA0OTcuMzUwOTVdLFxyXG4gIFsxNjY0Ljg4MDEsIDQ5My42NzYxXSxcclxuICBbMTY2Ni4yMTgzLCA1MDAuNjE0ODddLFxyXG4gIFsxNjYyLjUxODYsIDUwMi41NDc2N10sXHJcbiAgWzE2NTguODEyLCA1MDEuMDM4NV0sXHJcbiAgWzE2NTguODgxMSwgNTA0LjM4NTEzXSxcclxuICBbMTY1Ny4wMTYsIDUwNy4zMDU3M10sXHJcbiAgWzE2NTQuNDMyMywgNTA1LjAzNTZdLFxyXG4gIFsxNjUzLjQyODUsIDUwOS4xMDEyNl0sXHJcbiAgWzE2NTMuOTIzOCwgNTEzLjA1NV0sXHJcbiAgWzE2NTAuNTE1NSwgNTEzLjE2MjRdLFxyXG4gIFsxNjQ4Ljk5NzgsIDUxNi43NDA2XSxcclxuICBbMTY1My4zOTcxLCA1MTguMzA1MjRdLFxyXG4gIFsxNjQ1LjM1ODYsIDUxOC4yNTI4XSxcclxuICBbMTY0My43OTQ5LCA1MjIuNjEwMTddLFxyXG4gIFsxNjQwLjM4OTksIDUxOC40NTA2XSxcclxuICBbMTY0My4yNzU1LCA1MTQuNjI0MTVdLFxyXG4gIFsxNjQ2LjUzMTIsIDUxMi41NjMyXSxcclxuICBbMTY0My42NDk0LCA1MDkuNzkzNDZdLFxyXG4gIFsxNjQ2Ljc5MiwgNTA3LjAxMDM1XSxcclxuICBbMTY0OS4zMTg1LCA1MDkuNjMyNzVdLFxyXG4gIFsxNjUxLjAwNywgNTA2LjM3MTIyXSxcclxuICBbMTY0OS4xMTI4LCA1MDMuODkzNzRdLFxyXG4gIFsxNjQ1Ljg2MzgsIDUwMi43NDUxXSxcclxuICBbMTY0My41MDg1LCA1MDUuMTg3NDddLFxyXG4gIFsxNjQwLjc2ODIsIDUwNi45NjI2XSxcclxuICBbMTYzNi40ODQ1LCA1MDYuNDI4MjhdLFxyXG4gIFsxNjM4LjcwOTQsIDUwOS42Mjg0Ml0sXHJcbiAgWzE2NDAuMTIxOCwgNTEzLjA0NzY3XSxcclxuICBbMTYzNS44MjQ3LCA1MTIuNDg1XSxcclxuICBbMTYzNC4wNTgyLCA1MDkuMzQ0OTRdLFxyXG4gIFsxNjMxLjM1NzksIDUxMy4zOTVdLFxyXG4gIFsxNjMxLjg4MjIsIDUxNy4wMzYxM10sXHJcbiAgWzE2MzYuNTg3NiwgNTE2LjA2NDk0XSxcclxuICBbMTYzNS4xMTAxLCA1MjAuMDg0N10sXHJcbiAgWzE2MzguMzIxLCA1MjMuNTgzMV0sXHJcbiAgWzE2NDEuNzA5MiwgNTI3LjcyMjNdLFxyXG4gIFsxNjM0Ljk2OTcsIDUzNC4wNjM1XSxcclxuICBbMTYzNS4zNzEzLCA1MjguNTk0NjddLFxyXG4gIFsxNjMyLjcwMiwgNTI0LjE4NDE0XSxcclxuICBbMTYyNS40MjksIDUyMi41NzhdLFxyXG4gIFsxNjI5LjQ0MjMsIDUyMC42NDY1XSxcclxuICBbMTYyOC43MzU4LCA1MjYuOTYxOF0sXHJcbiAgWzE2MjQuNDI0OSwgNTI5LjU4NzRdLFxyXG4gIFsxNjI5LjkzNDEsIDUzMi4yOTU3XSxcclxuICBbMTYyMS4yMjg5LCA1MzMuOTU2NTRdLFxyXG4gIFsxNjIzLjYxOTMsIDU0My4wMDg2N10sXHJcbiAgWzE2MzIuNjkyNiwgNTQ0LjUzMTNdLFxyXG4gIFsxNjM3LjM0MjgsIDU0NC43OTAzNF0sXHJcbiAgWzE2MzkuMjM5MSwgNTM4LjU2MjNdLFxyXG4gIFsxNjMyLjY4MjQsIDUzOS40NDc4XSxcclxuICBbMTYzMi41MDI0LCA1NDguODI3OV0sXHJcbiAgWzE2MzcuMjY2NCwgNTUwLjMyMTA0XSxcclxuICBbMTYyOC4yODM5LCA1NTUuMDIwNzVdLFxyXG4gIFsxNjI0LjQ0NDMsIDU1Ni45OTU4NV0sXHJcbiAgWzE2MjAuOTg3LCA1NTkuODQ2NzRdLFxyXG4gIFsxNjE2Ljc1NzgsIDU2Mi4zNzQyXSxcclxuICBbMTYxOS4zNzg0LCA1NjQuNzI5N10sXHJcbiAgWzE2MjIuNzczNCwgNTY0LjEwMzQ1XSxcclxuICBbMTYyNS4xMTQsIDU2Ni43NjYzNl0sXHJcbiAgWzE2MjguNjMxNywgNTY3LjUxMDRdLFxyXG4gIFsxNjMxLjE0MDQsIDU3MC4wMjc5XSxcclxuICBbMTYzNC44MzUyLCA1NjkuMTA4N10sXHJcbiAgWzE2MzUuODMxOSwgNTczLjMwN10sXHJcbiAgWzE2MzMuNjMwMSwgNTc2Ljg5MjFdLFxyXG4gIFsxNjMyLjk0OTIsIDU4MC45Nzg2NF0sXHJcbiAgWzE2MzMuNTE4NCwgNTg1LjQ4MDgzXSxcclxuICBbMTYzOC4wNDk4LCA1ODYuMzYwMV0sXHJcbiAgWzE2MzcuNzc2MSwgNTgxLjY4NTldLFxyXG4gIFsxNjM4Ljg5MTgsIDU3Ny43MjUxXSxcclxuICBbMTY0MC43NDA4LCA1NzQuMjk5NzRdLFxyXG4gIFsxNjQ0LjkyNDYsIDU3NC41NjY5XSxcclxuICBbMTY0OS4wNjkxLCA1NzMuODkzN10sXHJcbiAgWzE2NDcuMzI0MiwgNTY5LjExNDRdLFxyXG4gIFsxNjQyLjYzNDQsIDU2Ni43NjQyXSxcclxuICBbMTY0Mi44ODI4LCA1NzAuNjY0NV0sXHJcbiAgWzE2MzguNzc1NiwgNTY5LjYxNjQ2XSxcclxuICBbMTYzNy43NzQ4LCA1NjUuMjAxOTddLFxyXG4gIFsxNjMzLjQ4MzksIDU2NS4zMTcyNl0sXHJcbiAgWzE2MjkuNzcsIDU2My42MjE5XSxcclxuICBbMTYyNS43MDc4LCA1NjEuNTUxM10sXHJcbiAgWzE2MjkuMjQ2MSwgNTU5LjU3MDJdLFxyXG4gIFsxNjMyLjMzMzcsIDU1Ny4wOTU0Nl0sXHJcbiAgWzE2MzIuNjg3NSwgNTUyLjkyMDhdLFxyXG4gIFsxNjM2LjQ4NTQsIDU1NS42NjAwM10sXHJcbiAgWzE2MzQuMTQ4OCwgNTYwLjk0NTNdLFxyXG4gIFsxNjM4LjA4MTgsIDU2MC40MDEyNV0sXHJcbiAgWzE2NDAuMzE2MywgNTU3LjA0NTA0XSxcclxuICBbMTY0NC4wNDkyLCA1NTcuOTcxOV0sXHJcbiAgWzE2NDEuMjA4OSwgNTYyLjU0NTUzXSxcclxuICBbMTY0NC44NzA3LCA1NjMuMDQ1XSxcclxuICBbMTY0OC4zOTI3LCA1NjQuNDE1NF0sXHJcbiAgWzE2NTEuODE3MSwgNTY2LjU5ODRdLFxyXG4gIFsxNjU1Ljc4NjEsIDU2NC41MTEzNV0sXHJcbiAgWzE2NjAuMzIxNSwgNTYzLjc0MDFdLFxyXG4gIFsxNjY0LjQ1OCwgNTY2LjUxNV0sXHJcbiAgWzE2NjAuNTE3MSwgNTY5LjQ2MjNdLFxyXG4gIFsxNjU2LjA0NzQsIDU2OS40MTc2XSxcclxuICBbMTY1Mi41Mzg1LCA1NzEuODk4N10sXHJcbiAgWzE2NTIuODY0LCA1NzguMDI1XSxcclxuICBbMTY0Ny43NDA3LCA1NzguNjQxMzZdLFxyXG4gIFsxNjU0LjI3NDksIDU4NC42OTk5NV0sXHJcbiAgWzE2NDguNTg3MywgNTgzLjY5MzM2XSxcclxuICBbMTY1MC43MTI1LCA1ODguODAwM10sXHJcbiAgWzE2NDkuMDExMiwgNTkzLjIyODc2XSxcclxuICBbMTY1NS42MjQ2LCA1OTEuMjkwNjVdLFxyXG4gIFsxNjYwLjc2MTUsIDU5Mi4zMzUzXSxcclxuICBbMTY1OS44MzkyLCA1ODYuMDkxODZdLFxyXG4gIFsxNjY1LjA4OTQsIDU4Ny41MzE2XSxcclxuICBbMTY2NC4zNjQ5LCA1ODAuMzk1OF0sXHJcbiAgWzE2NTguMTk2MiwgNTgwLjI2NDM0XSxcclxuICBbMTY1OC4wMDc3LCA1NzQuOTk1OV0sXHJcbiAgWzE2NjMuNTQ2MSwgNTczLjc3MDVdLFxyXG4gIFsxNjY4LjgxNDcsIDU3NS42NTY0XSxcclxuICBbMTY2OC4zODc1LCA1NjkuNjgwNV0sXHJcbiAgWzE2NzMuNzIwNSwgNTcwLjkzOTFdLFxyXG4gIFsxNjc0LjA1MjIsIDU2NS4wNzY5N10sXHJcbiAgWzE2NjkuMjU4NSwgNTYzLjY5NDZdLFxyXG4gIFsxNjcwLjc4ODEsIDU1Ny45MjAzXSxcclxuICBbMTY3Ni4yNTc4LCA1NTkuMDEzNF0sXHJcbiAgWzE2NzkuODY1NywgNTYyLjI0ODU0XSxcclxuICBbMTY3OS44NDY5LCA1NjcuNzQzNjVdLFxyXG4gIFsxNjc5LjMwNjIsIDU3Mi45MzcyXSxcclxuICBbMTY3NC45OTk2LCA1NzYuNzc0N10sXHJcbiAgWzE2ODAuMjUyOCwgNTc4LjkzMDldLFxyXG4gIFsxNjgyLjgzMzUsIDU4NC4wMzcwNV0sXHJcbiAgWzE2ODEuMjEyNCwgNTg5LjM4MjFdLFxyXG4gIFsxNjc1LjQ5MDUsIDU5MC41NjA4XSxcclxuICBbMTY3Ni43MTUxLCA1ODQuNDE3Nl0sXHJcbiAgWzE2NzEuMzk4OCwgNTgxLjAzOTg2XSxcclxuICBbMTY3MC40Nzg1LCA1ODYuMzM3OV0sXHJcbiAgWzE2NjkuODUxNiwgNTkyLjE1MjgzXSxcclxuICBbMTY2NS43MzE5LCA1OTQuMDMyMV0sXHJcbiAgWzE2NjMuMTY3MiwgNTk3Ljg5Nzk1XSxcclxuICBbMTY3Mi41MSwgNTk2LjE4MjRdLFxyXG4gIFsxNjc3LjE5MDQsIDU5Ni41NzNdLFxyXG4gIFsxNjc0LjQ4OTYsIDYwMS4xMzQ3N10sXHJcbiAgWzE2NzkuODc3NiwgNjAxLjQxMDRdLFxyXG4gIFsxNjg0LjI4MzgsIDYwNC4wNjU3M10sXHJcbiAgWzE2ODguNzY2NSwgNjAyLjYzNjVdLFxyXG4gIFsxNjkzLjYyNTIsIDYwMC42MDY3NV0sXHJcbiAgWzE2ODUuOTc4MywgNTkzLjM2NTddLFxyXG4gIFsxNjgxLjE1MTUsIDU5NC42NjAwM10sXHJcbiAgWzE2ODQuNjc5MiwgNTk4Ljg0ODVdLFxyXG4gIFsxNjg5Ljg3NTksIDU5Ny4wNTg3XSxcclxuICBbMTY5Mi4yNjgyLCA2MDYuODI1NV0sXHJcbiAgWzE2OTYuNzUyOSwgNjA4Ljg1OTEzXSxcclxuICBbMTY4Ni44NzMzLCA2MDguNzQxNDZdLFxyXG4gIFsxNjg5LjgzMTMsIDYxMy40MTM4XSxcclxuICBbMTY4Mi4xNTE3LCA2MTMuMzU0N10sXHJcbiAgWzE2ODAuOTc2MywgNjA3Ljc1MTk1XSxcclxuICBbMTY3Ni4wNjA1LCA2MDYuMzc0NzZdLFxyXG4gIFsxNjc1LjMyNDcsIDYxMi4wOTIzXSxcclxuICBbMTY2NS4yMzcsIDYyMC42Nzg4M10sXHJcbiAgWzE2NjguMCwgNjM3LjM2OTI2XSxcclxuICBbMTY3OS4yMDUzLCA2MzUuMjUyNl0sXHJcbiAgWzE2NzMuNzIzOCwgNjQxLjU0Mzk1XSxcclxuICBbMTY3MC4yMjYzLCA2NDYuNTc4MjVdLFxyXG4gIFsxNjc5Ljg4MzQsIDY0Mi43MDMwNl0sXHJcbiAgWzE2ODUuMzM1OSwgNjM4LjM2MzZdLFxyXG4gIFsxNjg3LjI0NTcsIDYzMS45NDU4XSxcclxuICBbMTY5Mi4wOTc0LCA2MzcuNDYwN10sXHJcbiAgWzE2OTYuNjQ1NCwgNjQ0LjU0NTA0XSxcclxuICBbMTY5OC41ODA4LCA2MzguMjQ5OF0sXHJcbiAgWzE2OTUuMTA0NywgNjMxLjUxNzFdLFxyXG4gIFsxNzA1LjcyMzksIDYyNC44OTE3XSxcclxuICBbMTcxMS4zMTMyLCA2MjAuMDYwMV0sXHJcbiAgWzE3MTEuODI4NiwgNjI1LjkxOTQzXSxcclxuICBbMTcxNS4yMDcsIDYzMC45MzgxXSxcclxuICBbMTcwOC45MjQsIDYzMS44MjUyNl0sXHJcbiAgWzE3MDEuOTc0NiwgNjMwLjg0MDVdLFxyXG4gIFsxNjg5LjUxNDIsIDY0My45NzIxN10sXHJcbiAgWzE2OTAuMjk2NCwgNjUxLjkxMjk2XSxcclxuICBbMTY3Ni41Nzg2LCA2NDkuMzQzNzVdLFxyXG4gIFsxNjgzLjg0NDEsIDY0Ny4xOTgwNl0sXHJcbiAgWzE2ODMuODc1NSwgNjUzLjQ3NjVdLFxyXG4gIFsxNjc5Ljg2ODksIDY1Ny4yNTk0Nl0sXHJcbiAgWzE2NzMuOTY3NSwgNjU2LjI0NzldLFxyXG4gIFsxNjY4LjkyMDMsIDY1Mi45ODExXSxcclxuICBbMTY2OC4wNDQ2LCA2NTkuNzIzMl0sXHJcbiAgWzE2NjIuODAxLCA2NTYuNDc5M10sXHJcbiAgWzE2NTguODk5NywgNjUyLjE5MDA2XSxcclxuICBbMTY2NC44OTgsIDY0Mi40MzQyN10sXHJcbiAgWzE2NjQuMTkzNiwgNjQ5LjIxOTVdLFxyXG4gIFsxNjU4Ljk0MjUsIDY0NS43NjYyNF0sXHJcbiAgWzE2NTkuMDM1OCwgNjM5Ljc1NF0sXHJcbiAgWzE2NTQuMzEwMywgNjM2LjIxMDhdLFxyXG4gIFsxNjQ3Ljk5MDIsIDYzOC4xMDA0XSxcclxuICBbMTY0MS42OTc5LCA2MjMuMjg0NV0sXHJcbiAgWzE2NDkuMzU1NSwgNjI0LjkxMjddLFxyXG4gIFsxNjU0LjA5MTIsIDYxOS45NDkxXSxcclxuICBbMTY1OS42Mjk0LCA2MTguMzQ4NF0sXHJcbiAgWzE2NjQuOTEsIDYxNC4xMzQ4XSxcclxuICBbMTY2OS43NTg5LCA2MTIuNTM0OV0sXHJcbiAgWzE2NjAuNjY5MSwgNjEyLjUzNDNdLFxyXG4gIFsxNjU2LjM3NDUsIDYxMi41MTI4XSxcclxuICBbMTY1NS4wNTI2LCA2MDcuNDYwN10sXHJcbiAgWzE2NDkuNjAzLCA2MDcuNTM3N10sXHJcbiAgWzE2NDcuNzkzNywgNjAzLjA1Njc2XSxcclxuICBbMTY1Mi43MDM5LCA2MDEuNjc5OTNdLFxyXG4gIFsxNjU2Ljk4MDcsIDYwMy4wNjMxXSxcclxuICBbMTY2MS40OTIxLCA2MDcuNTM2M10sXHJcbiAgWzE2NjcuNDE5OCwgNjA4LjA1MjU1XSxcclxuICBbMTY3MC45MzE0LCA2MDQuNTg3Ml0sXHJcbiAgWzE2NjguNjg4LCA1OTkuMTIyMjVdLFxyXG4gIFsxNjY1LjUwMTgsIDYwMy4xNjZdLFxyXG4gIFsxNjYwLjkwNjcsIDYwMS45ODc3M10sXHJcbiAgWzE2NTcuNzg0OSwgNTk3LjQwNjVdLFxyXG4gIFsxNjUzLjE1NjEsIDU5Ni4yMTg0XSxcclxuICBbMTY0OC42MTE4LCA1OTguMTY4MV0sXHJcbiAgWzE2NDQuMTEzOCwgNTk5Ljc5MjldLFxyXG4gIFsxNjQwLjIxNjIsIDYwMS4xMjQ5XSxcclxuICBbMTYzNS41NSwgNTk5LjczNDNdLFxyXG4gIFsxNjM0LjU3MSwgNTk1LjI4NjZdLFxyXG4gIFsxNjM5LjQ5NDYsIDU5NS45OTk1XSxcclxuICBbMTY0NC4wODQ3LCA1OTQuNTgwNDRdLFxyXG4gIFsxNjQ1LjEyMTcsIDU4OS4zNDQ4NV0sXHJcbiAgWzE2NDMuMjM0NCwgNTgwLjI5MjM2XSxcclxuICBbMTY0Mi43ODUyLCA1ODUuMTg1MV0sXHJcbiAgWzE2MzkuNzIxMywgNTkwLjk0Ml0sXHJcbiAgWzE2MzQuNjEwNCwgNTkwLjQyMjRdLFxyXG4gIFsxNjMwLjM4NjQsIDU5My4xODI4Nl0sXHJcbiAgWzE2MjYuMjY2NiwgNTk0LjU5NDA2XSxcclxuICBbMTYyMi4xNTcyLCA1OTMuOTQ0OV0sXHJcbiAgWzE2MjAuMjY5MywgNTkwLjM0MjRdLFxyXG4gIFsxNjIyLjI5MjIsIDU4Ny4wOTI4M10sXHJcbiAgWzE2MTkuMzkyOCwgNTg0LjY0MTRdLFxyXG4gIFsxNjE1LjI5NjYsIDU4My40ODY3XSxcclxuICBbMTYxMC44OTQ0LCA1ODMuMTQ4NDRdLFxyXG4gIFsxNjA3LjA1NjYsIDU4Mi4wODA5M10sXHJcbiAgWzE2MDMuNjYzLCA1NzkuMzk4NzRdLFxyXG4gIFsxNTk4LjkxNTMsIDU4My4xMTI1NV0sXHJcbiAgWzE1OTkuNjQ2MiwgNTc4LjQxMV0sXHJcbiAgWzE1OTkuMzgyMiwgNTc0LjIzODddLFxyXG4gIFsxNjA2Ljc5NTgsIDU2OC44ODA1NV0sXHJcbiAgWzE2MTEuNDUxOCwgNTY1LjY3NTldLFxyXG4gIFsxNjEyLjM1ODMsIDU3MC4yMDk3XSxcclxuICBbMTYyMS4zMTA5LCA1NzQuODg5NV0sXHJcbiAgWzE2MjMuNjEwOCwgNTc5LjU5MDVdLFxyXG4gIFsxNjE5LjE4NDksIDU4MC4yMjA2NF0sXHJcbiAgWzE2MTYuOTc0NCwgNTc2Ljc1NV0sXHJcbiAgWzE2MTMuMTM3MiwgNTc5LjIzNl0sXHJcbiAgWzE2MTIuODc4MiwgNTc0LjcxMTI0XSxcclxuICBbMTYwOC40OTc4LCA1NzcuNTQ4XSxcclxuICBbMTYwOC41OTQyLCA1NzIuODgwOV0sXHJcbiAgWzE2MDQuMTc5NiwgNTc0LjEzNjg0XSxcclxuICBbMTYwMS4xMzEzLCA1NjkuNjk5NDZdLFxyXG4gIFsxNTk2LjEyMTMsIDU2Ny4yNTI1XSxcclxuICBbMTU5OS4yMjgzLCA1NjQuMzU2MTRdLFxyXG4gIFsxNjAzLjUxOTgsIDU2NS43NjQ2NV0sXHJcbiAgWzE2MDcuMTA3NywgNTYzLjQxNjc1XSxcclxuICBbMTYxMC4wODc5LCA1NjAuODMzMl0sXHJcbiAgWzE2MTMuODAwNSwgNTYwLjk0MTk2XSxcclxuICBbMTYxNS45MzY5LCA1NjcuMjkwMzRdLFxyXG4gIFsxNjE3LjIwOTYsIDU3Mi4xMTY2XSxcclxuICBbMTYyMC43MDIxLCA1NjkuMTg2XSxcclxuICBbMTYyNS4wMDksIDU3MS4yODFdLFxyXG4gIFsxNjI1Ljk1ODMsIDU3NS41MDU1XSxcclxuICBbMTYzMC4wMDA3LCA1NzMuNzU4MjRdLFxyXG4gIFsxNjI4LjU4MjgsIDU3OS4xNDI2XSxcclxuICBbMTYyNC44NjQsIDU4My45MzkzM10sXHJcbiAgWzE2MjkuMDMzNywgNTgzLjk2NDFdLFxyXG4gIFsxNjI5LjgyMTMsIDU4OC41NzExN10sXHJcbiAgWzE2MjUuNjI0NiwgNTg5LjU2ODU0XSxcclxuICBbMTYxNy43MzU3LCA1OTQuMTg1OV0sXHJcbiAgWzE2MTUuOTc1MywgNTk4LjI1MjQ0XSxcclxuICBbMTYyMi42MzIzLCA1OTguNTIzM10sXHJcbiAgWzE2MTkuNjczNSwgNjAyLjM5ODQ0XSxcclxuICBbMTYxOC4xOTkzLCA2MDcuMzA2NF0sXHJcbiAgWzE2MTkuNjU4OCwgNjEyLjE4MzhdLFxyXG4gIFsxNjI0Ljg4NTUsIDYxMS4yMzk1XSxcclxuICBbMTYzMC42MDkzLCA2MTQuNjE5MjZdLFxyXG4gIFsxNjIzLjU2NTQsIDYwNi4yMzYzXSxcclxuICBbMTYyNi41MTIsIDYwMi4yMDY2XSxcclxuICBbMTYyOS42NjkyLCA1OTguMjI1M10sXHJcbiAgWzE2MzIuMjgwOCwgNjAzLjQyMTYzXSxcclxuICBbMTYyOS4xOTc5LCA2MDcuNzgyXSxcclxuICBbMTYzNC40OTI0LCA2MDkuNTg0XSxcclxuICBbMTYzNy44MjQsIDYwNS40MDk2N10sXHJcbiAgWzE2NDMuNDcyNCwgNjA2LjEwMDQ2XSxcclxuICBbMTY0MC4zOTA2LCA2MTAuODE2NF0sXHJcbiAgWzE2NDYuMDc4NiwgNjExLjgyNDZdLFxyXG4gIFsxNjUxLjYwNSwgNjEzLjE0NDFdLFxyXG4gIFsxNjQ4LjA5MzEsIDYxOC41MjY1XSxcclxuICBbMTY0Mi41NCwgNjE3LjA3Mzg1XSxcclxuICBbMTYzNi43NzU1LCA2MTUuOTg5ODddLFxyXG4gIFsxNjMzLjg4NiwgNjIxLjMzMzc0XSxcclxuICBbMTYyNS4xMjYzLCA2MTYuNTUyMDZdLFxyXG4gIFsxNjI3LjMwOTksIDYyMi42MTM4XSxcclxuICBbMTYyNC42MzgzLCA2MjkuMzE4MjRdLFxyXG4gIFsxNjE4LjE3ODYsIDYzMS4xMTE3Nl0sXHJcbiAgWzE2MTkuMjU5NSwgNjI1LjgzNDddLFxyXG4gIFsxNjEzLjEwODYsIDYyNi40NzQ2XSxcclxuICBbMTYxMi4xMzU3LCA2MzEuNDA1Nl0sXHJcbiAgWzE2MDguMDAyNCwgNjM0LjkwMTI1XSxcclxuICBbMTYwNC4wMTc2LCA2MzAuODU1OTZdLFxyXG4gIFsxNjA3Ljk4NDUsIDYyOC41NjY5XSxcclxuICBbMTYwOC41MjA4LCA2MjMuMTczNl0sXHJcbiAgWzE2MTIuMzQwNSwgNjIxLjA5ODc1XSxcclxuICBbMTYxNi43MTY3LCA2MjEuMDE0ODNdLFxyXG4gIFsxNjIxLjg2OTQsIDYyMC41MjQ2XSxcclxuICBbMTYxNy42MjA4LCA2MTYuMTk5Nl0sXHJcbiAgWzE2MTIuNDMzMywgNjE2LjI3NzJdLFxyXG4gIFsxNjEzLjY1MTcsIDYxMS41MDQ5NF0sXHJcbiAgWzE2MDQuNDU3OCwgNjEwLjMxMzg0XSxcclxuICBbMTYwOC4xMzg3LCA2MTMuMTg4ODRdLFxyXG4gIFsxNjA3LjgyMDYsIDYxNy43NTU4Nl0sXHJcbiAgWzE2MDQuMTQyNSwgNjIwLjQyNzFdLFxyXG4gIFsxNjA0LjQ5MjYsIDYyNC45NDg2XSxcclxuICBbMTYwMC44ODIyLCA2MjYuOTQ1MDddLFxyXG4gIFsxNTk2LjcyODQsIDYyNC43Nzg0NF0sXHJcbiAgWzE1OTMuMTMyNiwgNjI3LjM2NTg0XSxcclxuICBbMTU5NC4yNzU1LCA2MzIuMzMzNV0sXHJcbiAgWzE1ODcuOTE4LCA2MjguNDA2XSxcclxuICBbMTU5MS41MDc5LCA2MjEuNjAxN10sXHJcbiAgWzE1ODYuNTEwMywgNjE3LjE4Mjg2XSxcclxuICBbMTU5MS4zMzc2LCA2MTQuODU4OV0sXHJcbiAgWzE1ODYuMDcyLCA2MDkuNzYwOV0sXHJcbiAgWzE1ODAuMzE2NSwgNjEyLjY0NjA2XSxcclxuICBbMTU4MC4zODIxLCA2MDUuOTU3OF0sXHJcbiAgWzE1ODUuMDI0OSwgNjAzLjQxNjE0XSxcclxuICBbMTU4MS4zMjY5LCA1OTkuNTUyMV0sXHJcbiAgWzE1ODMuNjgwMiwgNTk1LjAyMTM2XSxcclxuICBbMTU4OS4xODgsIDU5NC4wMzQ0XSxcclxuICBbMTU4OC4zMDQyLCA1OTguODY0OF0sXHJcbiAgWzE1OTAuNDA0MiwgNjAzLjc4Ml0sXHJcbiAgWzE1OTEuNTk2MiwgNjA5LjAxMjc2XSxcclxuICBbMTU5Ni4xMDEzLCA2MTEuMTg5NjRdLFxyXG4gIFsxNjAwLjIxNDEsIDYxMi40MzcxM10sXHJcbiAgWzE2MDIuNjQ2NywgNjE2LjAxNTI2XSxcclxuICBbMTU5OS41ODg3LCA2MjEuMTY2OV0sXHJcbiAgWzE1OTYuMzY3MiwgNjE3LjM4MzVdLFxyXG4gIFsxNjAwLjMyOTEsIDYwNi44NzQ2XSxcclxuICBbMTU5NS44ODEzLCA2MDUuMTgxNV0sXHJcbiAgWzE1OTUuNjU0NSwgNjAwLjIwNDRdLFxyXG4gIFsxNTk0LjE2MTMsIDU5Ni4xODg4NF0sXHJcbiAgWzE1OTMuNjAyNSwgNTkxLjI0NzRdLFxyXG4gIFsxNTk4LjYwNzMsIDU5My4yNTkyXSxcclxuICBbMTYwMi42Njk2LCA1OTYuODYwNTNdLFxyXG4gIFsxNjAxLjE4NjgsIDYwMS4zMDQyXSxcclxuICBbMTYwNC45NTI0LCA2MDQuOTU5NF0sXHJcbiAgWzE2MDkuMDAxMiwgNjA3Ljk1MjE1XSxcclxuICBbMTYxMy4xODc3LCA2MDYuMzIzNV0sXHJcbiAgWzE2MTMuNTg5MSwgNjAxLjc4ODk0XSxcclxuICBbMTYwOC4wNjg1LCA2MDEuNDk5MV0sXHJcbiAgWzE2MDguOTc5MiwgNTk2LjkyNjY0XSxcclxuICBbMTYwNC41NTI1LCA1OTIuMjU4NTRdLFxyXG4gIFsxNjA5LjEyMzMsIDU5MS43Njg4XSxcclxuICBbMTYxMy4xNDA5LCA1OTMuNzVdLFxyXG4gIFsxNjE2LjIxNjksIDU4OC45NTA4XSxcclxuICBbMTYxMi4xNzQxLCA1ODcuODY3NF0sXHJcbiAgWzE2MDcuMzMzNywgNTg3LjI5MzFdLFxyXG4gIFsxNjAzLjM0NDUsIDU4NC45NDM4NV0sXHJcbiAgWzE2MDAuOTkzNywgNTg4Ljc4Mjk2XSxcclxuICBbMTU5Ni40OTQ2LCA1ODcuMjA3XSxcclxuICBbMTU5My41NDU4LCA1ODIuMjYzMzddLFxyXG4gIFsxNTkyLjIwNjgsIDU4Ni4xNDgyNV0sXHJcbiAgWzE1ODkuMjgwMywgNTg4LjgyMTVdLFxyXG4gIFsxNTg1LjU0ODUsIDU5MC42MzczXSxcclxuICBbMTU4Mi4yODcyLCA1ODguMDU2OTVdLFxyXG4gIFsxNTc4LjE2MSwgNTg4LjQyNTA1XSxcclxuICBbMTU3OC43NTA1LCA1ODQuMzM4M10sXHJcbiAgWzE1NzQuOTE5NCwgNTgyLjQ0M10sXHJcbiAgWzE1NzEuMjg2LCA1ODIuNDQxMl0sXHJcbiAgWzE1NjguMjIwNSwgNTgwLjE4OTVdLFxyXG4gIFsxNTcwLjcxMDgsIDU3Ny43NTU2XSxcclxuICBbMTU3Mi4zMzQ2LCA1NzQuNDEyN10sXHJcbiAgWzE1NzQuOTg4NiwgNTc4LjEyMDY3XSxcclxuICBbMTU3OS42Nzg3LCA1NzYuMjU5MDNdLFxyXG4gIFsxNTgwLjExMTUsIDU3Mi41NzJdLFxyXG4gIFsxNTgxLjQxOTcsIDU2OC45MTc2XSxcclxuICBbMTU4Ni4wMjM3LCA1NjcuMjI1OF0sXHJcbiAgWzE1ODMuNzY3MiwgNTYyLjkwNDZdLFxyXG4gIFsxNTgzLjI2NzgsIDU1NS4wMDg1NF0sXHJcbiAgWzE1ODMuMTIxMywgNTU5LjEyODNdLFxyXG4gIFsxNTc4LjczMDUsIDU2MS4zNDldLFxyXG4gIFsxNTc4Ljk3OTQsIDU1Ny4zMTMyM10sXHJcbiAgWzE1NzUuOTI2OSwgNTU1LjAyMDNdLFxyXG4gIFsxNTc1Ljg2NjYsIDU1MC42MDQ0XSxcclxuICBbMTU3MS45MDEyLCA1NDkuODMyOTVdLFxyXG4gIFsxNTY4LjMwMTMsIDU0OC4xMzM0XSxcclxuICBbMTU2OC4zMDY5LCA1NDQuMTY4NzZdLFxyXG4gIFsxNTcxLjYyNzQsIDU0MS44MTUyXSxcclxuICBbMTU3Ni4xOTE0LCA1NDEuMzAxNjRdLFxyXG4gIFsxNTc4LjU3ODksIDU0NC40OTY2XSxcclxuICBbMTU3OS42MjM1LCA1NDguMjM3OV0sXHJcbiAgWzE1ODAuMjk4MSwgNTUyLjI4OTldLFxyXG4gIFsxNTczLjg5MzEsIDU0NS44MDQxXSxcclxuICBbMTU2NC4wNTUyLCA1NDYuMjc3MDRdLFxyXG4gIFsxNTYzLjY5NjgsIDU0MS45ODYzXSxcclxuICBbMTU2Mi42NDA5LCA1MzcuNzk2OV0sXHJcbiAgWzE1NjcuMjI2OSwgNTM5Ljk3NjNdLFxyXG4gIFsxNTcwLjQxODUsIDUzNy41MDI3XSxcclxuICBbMTU3MS4zNTI1LCA1MzMuOTY1Ml0sXHJcbiAgWzE1NzMuOTQ3OSwgNTM3Ljk0ODddLFxyXG4gIFsxNTY2Ljc3NTMsIDUzNi4xOTA4XSxcclxuICBbMTU2NS4yMTYsIDUzMy4xMDIzXSxcclxuICBbMTU2OC42NjQ2LCA1MzIuMjA1NF0sXHJcbiAgWzE1NjkuMzI1NCwgNTI1Ljg4NzE1XSxcclxuICBbMTU2NC40MjgsIDUyMC4wMTQ0N10sXHJcbiAgWzE1NjQuODg0OCwgNTI0Ljc0NzFdLFxyXG4gIFsxNTY3LjI5OTYsIDUyOC45MDUzM10sXHJcbiAgWzE1NjMuNTM0NCwgNTI5LjUwMjFdLFxyXG4gIFsxNTYwLjcwMDMsIDUyNi42NTcyXSxcclxuICBbMTU2MC4xNjYzLCA1MjIuNjQ0MV0sXHJcbiAgWzE1NTkuMjg4MywgNTE4LjI0NDQ1XSxcclxuICBbMTU1Ny4xNDYyLCA1MTQuMjk3MDZdLFxyXG4gIFsxNTU0LjUwNDUsIDUwOS4wMjA0XSxcclxuICBbMTU1Ny44MjI1LCA1MDUuODE3NTddLFxyXG4gIFsxNTYxLjQ3ODYsIDUwMy4xODgxXSxcclxuICBbMTU2NS43MzAxLCA1MDIuMjg3Ml0sXHJcbiAgWzE1NjguNTk0NSwgNDk5LjI5OTg3XSxcclxuICBbMTU3Mi41NTczLCA0OTcuNTc4OTVdLFxyXG4gIFsxNTc2LjEyMjEsIDQ5NC42NTg3XSxcclxuICBbMTU4My40NTc5LCA0ODkuMTA1NTNdLFxyXG4gIFsxNTg4Ljc4MzEsIDQ5MS4wNjk5XSxcclxuICBbMTU5Mi43NDksIDQ4OC42NzYxNV0sXHJcbiAgWzE1OTQuMzEwOCwgNDkyLjc2NzU4XSxcclxuICBbMTU5NS42MTU0LCA0OTcuNjAzNTJdLFxyXG4gIFsxNTkwLjIxMzksIDQ5NS42NzQ0NF0sXHJcbiAgWzE1ODUuMDM3MSwgNDk0LjE5MTY1XSxcclxuICBbMTU4MC41MDk1LCA0OTcuMTE5N10sXHJcbiAgWzE1NzYuMjgzOCwgNTAwLjUwODZdLFxyXG4gIFsxNTgwLjk0MjQsIDUwMi4xMzY4XSxcclxuICBbMTU3Ny45NzcsIDUwNi4zNjk4N10sXHJcbiAgWzE1NzMuNTEzNywgNTA3LjE3NTIzXSxcclxuICBbMTU3MS44MzEsIDUwMi4yOTQ5Ml0sXHJcbiAgWzE1NjguNjA5NywgNTA1Ljk3ODU4XSxcclxuICBbMTU2My42ODg1LCA1MDcuMjIxMTZdLFxyXG4gIFsxNTYwLjQ1MDcsIDUxMC42MDYyNl0sXHJcbiAgWzE1NjMuNTUxOCwgNTE1LjAzNTNdLFxyXG4gIFsxNTY3LjkzNTIsIDUxMS4wOTY0XSxcclxuICBbMTU3My43MDY0LCA1MTMuMDAzMV0sXHJcbiAgWzE1NzkuMjI0LCA1MTMuMDE5OF0sXHJcbiAgWzE1ODEuODYzMywgNTA5LjIxMTg4XSxcclxuICBbMTU4NS45Njg1LCA1MTEuMDU3NDZdLFxyXG4gIFsxNTkwLjUzMjMsIDUxMS4wNjE3N10sXHJcbiAgWzE1OTQuNzA0LCA1MTQuMDc1NTZdLFxyXG4gIFsxNTk1LjAxNywgNTE5Ljc0MjldLFxyXG4gIFsxNTg5LjI4OTgsIDUxNi40ODE5XSxcclxuICBbMTU4MS41ODA2LCA1MjAuMjM4NF0sXHJcbiAgWzE1ODMuODUzNSwgNTE1Ljc2MDg2XSxcclxuICBbMTU3Ny43NzcsIDUxNy4zMzg2XSxcclxuICBbMTU3My41MzgyLCA1MTkuMTU5ODVdLFxyXG4gIFsxNTY5LjAzNTYsIDUxNi43MDA0NF0sXHJcbiAgWzE1NjkuMDk2NCwgNTIxLjYwNjZdLFxyXG4gIFsxNTczLjI5MTEsIDUyNC4yODg2NF0sXHJcbiAgWzE1NzcuNTk2LCA1MjIuNzUwN10sXHJcbiAgWzE1NzkuOTkzLCA1MjYuNzY5MTddLFxyXG4gIFsxNTgzLjc2OTcsIDUyNC43MzQyNV0sXHJcbiAgWzE1ODYuMzU5NCwgNTIwLjczXSxcclxuICBbMTU5MC45MDg3LCA1MjEuNDk4OF0sXHJcbiAgWzE1ODkuMTM5MiwgNTI1LjUzMzU3XSxcclxuICBbMTU4Ni42ODE5LCA1MjguODA5N10sXHJcbiAgWzE1ODIuNTUsIDUzMC4xOTE5Nl0sXHJcbiAgWzE1ODUuNDYyNiwgNTMzLjI3OTU0XSxcclxuICBbMTU4OC4xNTQzLCA1MzcuMDE0OV0sXHJcbiAgWzE1ODMuODEzNywgNTM3LjE0NTVdLFxyXG4gIFsxNTgxLjAxMjcsIDUzNC40MTI4NF0sXHJcbiAgWzE1NzguMzA4MywgNTMxLjQ4NzNdLFxyXG4gIFsxNTc1Ljk1NDgsIDUyNy45MDE3M10sXHJcbiAgWzE1NzIuMDc1LCA1MjkuMzQ0MjRdLFxyXG4gIFsxNTc0LjY1MzQsIDUzMi45MzFdLFxyXG4gIFsxNTc3LjEzOTIsIDUzNi4wNzI5NF0sXHJcbiAgWzE1NzkuODgyMywgNTM4Ljg4NDAzXSxcclxuICBbMTU4Mi4xMTY2LCA1NDIuMjY3Nl0sXHJcbiAgWzE1ODMuOTgzNCwgNTQ2LjU0MDVdLFxyXG4gIFsxNTg1LjgxNSwgNTQwLjcxNjFdLFxyXG4gIFsxNTg4LjEzMDksIDU0NC4xNDg4Nl0sXHJcbiAgWzE1OTAuNzcwOCwgNTQxLjA2NTM3XSxcclxuICBbMTU5NC4xNDkyLCA1NDQuNzE3OTZdLFxyXG4gIFsxNTk4Ljg2NDMsIDU0Mi4wODg1Nl0sXHJcbiAgWzE2MDIuMzE2OCwgNTM4LjcwNzRdLFxyXG4gIFsxNjAyLjIwOTgsIDUzMy45NjQ3XSxcclxuICBbMTYwNy4xMjg3LCA1MzkuMzk2N10sXHJcbiAgWzE2MDYuODMyMywgNTM1LjI2NjU0XSxcclxuICBbMTYwNS44ODQ0LCA1MzAuNzU3OV0sXHJcbiAgWzE2MTQuNTA2NiwgNTI1Ljc3MDE0XSxcclxuICBbMTYwOS44NjU1LCA1MjcuNjg5MzNdLFxyXG4gIFsxNjA5Ljc3MDgsIDUyMS42MDU5XSxcclxuICBbMTYwNC45OTU0LCA1MTYuNTMzMV0sXHJcbiAgWzE1OTkuNDcwNSwgNTE4LjM1NTFdLFxyXG4gIFsxNTk5LjExMDgsIDUyNC4yNzIxXSxcclxuICBbMTU5Ni45NDMxLCA1MjguNTkyNjVdLFxyXG4gIFsxNTk0LjIyMjcsIDUyNS4wMDcyXSxcclxuICBbMTU5Mi4zMDI3LCA1MjkuMjQyN10sXHJcbiAgWzE1ODkuNDU2MiwgNTMyLjU2MzldLFxyXG4gIFsxNTkzLjg4NSwgNTMzLjM1MzhdLFxyXG4gIFsxNTkyLjI0MDcsIDUzNi43OTQ1Nl0sXHJcbiAgWzE1OTUuMDA1NSwgNTQwLjAzMDRdLFxyXG4gIFsxNTk3LjgzNzIsIDUzNi45MzkxXSxcclxuICBbMTU5Ny45MTgyLCA1MzIuNjJdLFxyXG4gIFsxNjAxLjM3ODksIDUyOS4wODgzXSxcclxuICBbMTYwNC45MzMxLCA1MjUuOTQ2NF0sXHJcbiAgWzE2MDMuNjUzLCA1MjEuNDE2MV0sXHJcbiAgWzE2MDAuMzc0OCwgNTEzLjc2MDddLFxyXG4gIFsxNjAzLjkxMDQsIDUxMC4zNzYwN10sXHJcbiAgWzE2MDguMjQ0MSwgNTExLjI4MjNdLFxyXG4gIFsxNjA5LjU2NzQsIDUxNi4wNjYwNF0sXHJcbiAgWzE2MTMuNzkyLCA1MTcuMTU2XSxcclxuICBbMTYxOC4xMTMzLCA1MTUuNTcwNF0sXHJcbiAgWzE2MTguMDQ0OCwgNTEwLjkyNjEyXSxcclxuICBbMTYxNC41MzY0LCA1MDcuNzYzNF0sXHJcbiAgWzE2MTMuMTk0MywgNTEyLjA4NTQ1XSxcclxuICBbMTYwOS44MTMxLCA1MDYuODk4NzRdLFxyXG4gIFsxNjA1LjM0ODQsIDUwNC45NTUyNl0sXHJcbiAgWzE2MDEuMDY4NSwgNTA2LjMyMTE3XSxcclxuICBbMTU5Ny45NzMzLCA1MDkuNjIyM10sXHJcbiAgWzE1OTMuOTkyNCwgNTA3LjQ2NF0sXHJcbiAgWzE1ODkuMjk5NiwgNTA1LjU1NTRdLFxyXG4gIFsxNTg0Ljg2MzgsIDUwNC44MDM1Nl0sXHJcbiAgWzE1ODUuNDYxOCwgNDk5LjI1Njg0XSxcclxuICBbMTU4OS44NTc1LCA1MDAuMjMzNjRdLFxyXG4gIFsxNTkzLjQ5ODQsIDUwMi4xOTgxXSxcclxuICBbMTU5Ny4zODg1LCA1MDMuMjg5M10sXHJcbiAgWzE2MDEuMDY2OSwgNTAxLjI1MTM0XSxcclxuICBbMTYwNC40OTksIDQ5OC45NjIyOF0sXHJcbiAgWzE2MDcuNzc3OCwgNDk2LjQxNjddLFxyXG4gIFsxNjEwLjQzLCA0OTIuODY3NTVdLFxyXG4gIFsxNjExLjgyMTUsIDQ5OC4zMDA2Nl0sXHJcbiAgWzE2MDguNDczNCwgNTAxLjY3NTE3XSxcclxuICBbMTYxMi44ODYxLCA1MDMuMDAyOF0sXHJcbiAgWzE2MTUuMjMwMSwgNDk2LjA5MTVdLFxyXG4gIFsxNjE1LjQ3NywgNDkyLjExNTc4XSxcclxuICBbMTYxMS45OTc4LCA0ODguMjk1MTRdLFxyXG4gIFsxNjA5LjIxNywgNDg0LjczMDldLFxyXG4gIFsxNjA1LjA2MDksIDQ4My44NjA3Ml0sXHJcbiAgWzE2MDAuNjM4NywgNDg0LjAzNzU3XSxcclxuICBbMTYwMS41MjksIDQ3OS43NzY4Nl0sXHJcbiAgWzE2MDUuMzA3OSwgNDc5LjU4MjM3XSxcclxuICBbMTYwNy43MTI2LCA0NzYuNjU3NDRdLFxyXG4gIFsxNjEwLjAwMzIsIDQ4MC4yNTMyM10sXHJcbiAgWzE2MTMuNzE5NSwgNDgzLjE3MDc1XSxcclxuICBbMTYyMC4xODg3LCA0OTEuOTI4OTZdLFxyXG4gIFsxNjI0LjQ0NiwgNDkyLjQ1MjQ4XSxcclxuICBbMTYyNC4xMzgsIDQ5Ny40MTY1XSxcclxuICBbMTYxOS45NjQ0LCA0OTYuNDU1Ml0sXHJcbiAgWzE2MjEuNDA2NSwgNTAxLjY4MjI1XSxcclxuICBbMTYxNi45MDg0LCA1MDAuMTU2OThdLFxyXG4gIFsxNjE3LjA0MTEsIDUwNC4yODQwNl0sXHJcbiAgWzE2MjAuMDQ4NSwgNTA2LjQ3MDk1XSxcclxuICBbMTYyMi40NDUxLCA1MDkuOTUwOTNdLFxyXG4gIFsxNjI1LjY4ODcsIDUwMi4xMDgzNF0sXHJcbiAgWzE2MjQuMzQ2MywgNTA2LjI3Mjk1XSxcclxuICBbMTYyOC4wOTQsIDUwNi41MDU0Nl0sXHJcbiAgWzE2MzAuMjExNSwgNTA5Ljc4ODhdLFxyXG4gIFsxNjI2LjYwNzgsIDUxMS40OTE2N10sXHJcbiAgWzE2MjYuNzY3NiwgNTE2LjQ4OTZdLFxyXG4gIFsxNjIyLjYwNjIsIDUxNC4xMjM2XSxcclxuICBbMTYyMS43OTkxLCA1MTkuMDA3OF0sXHJcbiAgWzE2MTYuNDUxMiwgNTIwLjk3NTk1XSxcclxuICBbMTYyMC44ODA1LCA1MjQuNDg4MzRdLFxyXG4gIFsxNjE4Ljg5MDYsIDUyOS4xNzIzNl0sXHJcbiAgWzE2MTYuODk0MywgNTM2LjQ0NjVdLFxyXG4gIFsxNjE0Ljk0NjcsIDUzMS45NzM3NV0sXHJcbiAgWzE2MTAuNTI4NiwgNTMyLjQ1Ml0sXHJcbiAgWzE2MTEuODYxNiwgNTM2Ljk3MV0sXHJcbiAgWzE2MTMuNzc2NywgNTQwLjkwMjNdLFxyXG4gIFsxNjE4LjcxNDcsIDU0MC42NzI2XSxcclxuICBbMTYyMC40MTEsIDU0NS42MzcyXSxcclxuICBbMTYyMi4zODg4LCA1MzguNjAwMTZdLFxyXG4gIFsxNjI2LjY1NSwgNTM2LjAzOTFdLFxyXG4gIFsxNjI3LjY4NTMsIDU0MC44MDcwN10sXHJcbiAgWzE2MjguMjMyMiwgNTQ1LjQwN10sXHJcbiAgWzE2MjguMjA4LCA1NTAuMzMyOV0sXHJcbiAgWzE2MjQuMTEwNSwgNTQ3Ljg0Njc0XSxcclxuICBbMTYyNC4xNDE4LCA1NTIuMzcwMDZdLFxyXG4gIFsxNjE5LjY3NDgsIDU1MC43Nzk0XSxcclxuICBbMTYyMC4xODM1LCA1NTQuOTU2M10sXHJcbiAgWzE2MTYuOTg3MywgNTU3LjY0ODhdLFxyXG4gIFsxNjE1LjE4MDIsIDU1My43MjUyXSxcclxuICBbMTYxMi40MjIxLCA1NTYuNjExOV0sXHJcbiAgWzE2MDguNzQzLCA1NTYuMjAyN10sXHJcbiAgWzE2MDUuMjcyMywgNTUzLjMwMl0sXHJcbiAgWzE2MDkuODU2OSwgNTUxLjQ0MDldLFxyXG4gIFsxNjE0LjI3MzIsIDU1MC4yOTNdLFxyXG4gIFsxNjE2Ljk3MzQsIDU0Ny43MjMzXSxcclxuICBbMTYxNi4yODI3LCA1NDQuMDA0NDZdLFxyXG4gIFsxNjEyLjI1MjIsIDU0Ni40NDNdLFxyXG4gIFsxNjA3LjU5NjksIDU0Ny4wMzU2XSxcclxuICBbMTYwOS42MzQzLCA1NDIuNjYwNV0sXHJcbiAgWzE2MDMuOTM3MywgNTQzLjQ0MTFdLFxyXG4gIFsxNjAzLjU4MzUsIDU0OC44NTIzXSxcclxuICBbMTU5OS41MjY0LCA1NDYuNDI4NjVdLFxyXG4gIFsxNTk3LjIxMDIsIDU1MC4xODM5Nl0sXHJcbiAgWzE1ODkuMjU4NSwgNTQ4LjA2OTQ2XSxcclxuICBbMTU4NS41NDQ2LCA1NTEuMTkxOF0sXHJcbiAgWzE1OTAuNTYxMiwgNTUzLjI1MDg1XSxcclxuICBbMTU5My40MTA5LCA1NDkuMjQ4N10sXHJcbiAgWzE1OTUuMzM4NywgNTU0LjkyNjRdLFxyXG4gIFsxNjAwLjU1NjQsIDU1Mi42MDUyXSxcclxuICBbMTYwMC41OTk3LCA1NTYuODQ2ODZdLFxyXG4gIFsxNjA1LjM1ODQsIDU1OC4zMDQyXSxcclxuICBbMTYwMi40NDUsIDU2MS4xNzE2M10sXHJcbiAgWzE1OTcuMDQ3NCwgNTU5LjgxMjZdLFxyXG4gIFsxNTk0LjA0MzIsIDU2My4yNzE1NV0sXHJcbiAgWzE1OTEuODA2OCwgNTU4Ljg4NzFdLFxyXG4gIFsxNTg3LjQzNzYsIDU1Ni43MDEwNV0sXHJcbiAgWzE1ODcuNTk4LCA1NjEuNTExN10sXHJcbiAgWzE1OTAuMTI4OSwgNTY1LjAwNDFdLFxyXG4gIFsxNTkxLjgzMjUsIDU2OS40MjA1M10sXHJcbiAgWzE1OTYuMDc1LCA1NzEuMzY0Nl0sXHJcbiAgWzE1OTMuNzc2NiwgNTc0Ljk3NzU0XSxcclxuICBbMTU5NS4yNTU5LCA1NzguODI1OF0sXHJcbiAgWzE1ODguMTQyNiwgNTcxLjAzNDldLFxyXG4gIFsxNTg5LjIzNzIsIDU3NC44NzA3XSxcclxuICBbMTU4OS4yOTQsIDU3OC45NTI0XSxcclxuICBbMTU4OC43MjE0LCA1ODIuNzYxOTZdLFxyXG4gIFsxNTg1LjgxMzUsIDU4NS40MjldLFxyXG4gIFsxNTgzLjI2MjUsIDU4Mi4wOTgxNF0sXHJcbiAgWzE1NzkuMzE3NiwgNTgwLjA4Nzc3XSxcclxuICBbMTU4NC40MTU5LCA1NzcuMzg0MTZdLFxyXG4gIFsxNTg0LjMwNTQsIDU3Mi41MjIxXSxcclxuICBbMTU3Ni4wOTM1LCA1NzMuNTgwMTRdLFxyXG4gIFsxNTc2Ljg1MjUsIDU2OS4zMDA5XSxcclxuICBbMTU4MS42NDQ4LCA1NjUuMzUwMl0sXHJcbiAgWzE1NzcuODQ0LCA1NjUuNTM2XSxcclxuICBbMTU3NC44MSwgNTYzLjEzNjE3XSxcclxuICBbMTU3MC45NTcyLCA1NjIuNTUzN10sXHJcbiAgWzE1NzMuNzkwOCwgNTU5LjA2Mjg3XSxcclxuICBbMTU3MS44NDk0LCA1NTQuNjAwMDRdLFxyXG4gIFsxNTY3LjgxMTksIDU1Mi44NzY1XSxcclxuICBbMTU2My45MzM2LCA1NTUuMzQ5MjRdLFxyXG4gIFsxNTY0LjAwNjgsIDU1MC4zMDM0N10sXHJcbiAgWzE1NTQuMzUzOSwgNTQ3LjQzNjM0XSxcclxuICBbMTU1MS44OTIxLCA1NTAuOTMyODZdLFxyXG4gIFsxNTUzLjM0NDIsIDU1NC41MzM1N10sXHJcbiAgWzE1NTAuMzU5OSwgNTU3LjI4NTc3XSxcclxuICBbMTU1Mi4zMzAxLCA1NjEuMDkzXSxcclxuICBbMTU1NS4xNDYsIDU2Ni4wNzQyXSxcclxuICBbMTU1OC4yNzgyLCA1NjkuODM2NTVdLFxyXG4gIFsxNTYxLjczMjIsIDU3MS4xMDIzXSxcclxuICBbMTU2NS4xNjM1LCA1NzEuOTcyMTddLFxyXG4gIFsxNTY1Ljc3NDcsIDU2OC4zMjU2XSxcclxuICBbMTU2OS4xODQ2LCA1NjYuNjY2MV0sXHJcbiAgWzE1NzMuMjM4NSwgNTY2Ljc0NjNdLFxyXG4gIFsxNTcyLjk3MSwgNTcwLjU0MzNdLFxyXG4gIFsxNTY5LjI4MiwgNTcwLjc1MTFdLFxyXG4gIFsxNTY4LjI2NDksIDU3NC4xMjMzXSxcclxuICBbMTU2Ni4wOTU3LCA1NzYuNzE2MDZdLFxyXG4gIFsxNTYyLjgwNjQsIDU3NC45NDAwNl0sXHJcbiAgWzE1NTkuMjkzOCwgNTczLjc5MzQ2XSxcclxuICBbMTU1NS44ODQzLCA1NzMuNTA5NV0sXHJcbiAgWzE1NTEuMjk3NiwgNTc5Ljc2ODZdLFxyXG4gIFsxNTUzLjY3MDQsIDU3Ny4yMTU0NV0sXHJcbiAgWzE1NTcuMDExNywgNTc2Ljc3OTRdLFxyXG4gIFsxNTU5LjkxODIsIDU3Ny43ODk1XSxcclxuICBbMTU2Mi40OSwgNTc4Ljk5MV0sXHJcbiAgWzE1NjQuNjQ1MSwgNTgwLjUxMjQ1XSxcclxuICBbMTU2NS43NTA5LCA1ODMuMzk1NzVdLFxyXG4gIFsxNTY4LjUzNDksIDU4NS4yNzc5XSxcclxuICBbMTU3MC4wNjMsIDU4OC40MzQzXSxcclxuICBbMTU2OS4xNTk4LCA1OTIuNTM4MTVdLFxyXG4gIFsxNTY0Ljc4OCwgNTkxLjA0Nl0sXHJcbiAgWzE1NjQuOTM0NCwgNTg3LjI2OThdLFxyXG4gIFsxNTYxLjg5NTEsIDU4NC40NDIxNF0sXHJcbiAgWzE1NTkuNjk5NSwgNTgyLjEwNTk2XSxcclxuICBbMTU1Ni44NTk1LCA1ODAuMzg2Ml0sXHJcbiAgWzE1NTQuMDY5OCwgNTgyLjAzOTddLFxyXG4gIFsxNTU2LjYzMSwgNTg1LjI2MDldLFxyXG4gIFsxNTU2LjU5MzUsIDU4OS40NDExXSxcclxuICBbMTU2MC42MDM2LCA1ODguNDU1MV0sXHJcbiAgWzE1NTkuOTQ3NSwgNTkzLjIzNzA2XSxcclxuICBbMTU2NS4xNjY1LCA1OTUuNTIxNjddLFxyXG4gIFsxNTYwLjYyNTcsIDU5OC40ODUzXSxcclxuICBbMTU1OS44NDEsIDYwNC42MzM2N10sXHJcbiAgWzE1NTkuNjA5NCwgNjEwLjk1ODQ0XSxcclxuICBbMTU1Mi4yNzkyLCA2MTguMTM0MTZdLFxyXG4gIFsxNTU3LjY1MTEsIDYxNi4zMTcxNF0sXHJcbiAgWzE1NTguODkyNywgNjI3Ljg3Nl0sXHJcbiAgWzE1NjUuNjI2LCA2MzAuNjEyOV0sXHJcbiAgWzE1NjIuMTA4MiwgNjM0LjUyMzQ0XSxcclxuICBbMTU2Mi40NzM4LCA2NDAuNzM3Nl0sXHJcbiAgWzE1NjkuNTM4MSwgNjM4LjAyNTJdLFxyXG4gIFsxNTgyLjc5MDUsIDYzMi43NDUwNl0sXHJcbiAgWzE1NzguODk1MywgNjI2Ljk2MDldLFxyXG4gIFsxNTg0Ljg1NSwgNjI0LjAxXSxcclxuICBbMTU4MS4xODE1LCA2MTguODQ1NV0sXHJcbiAgWzE1NzYuMDQxNiwgNjIwLjY0NzJdLFxyXG4gIFsxNTczLjIwOSwgNjE1LjE1MTM3XSxcclxuICBbMTU3NC4yNDM5LCA2MDkuODE3MTRdLFxyXG4gIFsxNTc1LjQwMTQsIDYwNC45Mjk1N10sXHJcbiAgWzE1NzUuNDQ5MSwgNjAwLjQ0MDczXSxcclxuICBbMTU3Ny4zMTIzLCA1OTYuMTc1MjNdLFxyXG4gIFsxNTc5LjU0NjEsIDU5Mi40NjE0XSxcclxuICBbMTU3NC4wNTg4LCA1ODYuOTIxMjZdLFxyXG4gIFsxNTc0LjMwMjYsIDU5MS41ODc3N10sXHJcbiAgWzE1NzIuNTYwNSwgNTk1LjY4MjVdLFxyXG4gIFsxNTY5LjY4MTIsIDU5OC43MDNdLFxyXG4gIFsxNTY1LjExMTEsIDYwMC44NDI0XSxcclxuICBbMTU3MC4wNDQyLCA2MDQuMDg4Nl0sXHJcbiAgWzE1NjQuNTk2MywgNjA2LjQ4NTddLFxyXG4gIFsxNTY4LjAxMTQsIDYxMC41NzU0NF0sXHJcbiAgWzE1NjQuNzA5NSwgNjE1LjA4NTk0XSxcclxuICBbMTU2Mi4yNzIzLCA2MjAuMjQ4MDVdLFxyXG4gIFsxNTY0Ljk4NjEsIDYyNS4wNjA4NV0sXHJcbiAgWzE1NjguODYyOCwgNjIwLjA2MDddLFxyXG4gIFsxNTcyLjAwODUsIDYyNS41NTA1XSxcclxuICBbMTU3MS4wODQyLCA2MzEuMTM2OTZdLFxyXG4gIFsxNTc2LjI1MTIsIDYzMy4zMjE3XSxcclxuICBbMTU3Ny4xMDk2LCA2MzkuMjEzNzVdLFxyXG4gIFsxNTc0LjY3NTgsIDY0NS4wNzY1NF0sXHJcbiAgWzE1ODEuMjgxNywgNjQ2LjU4NTYzXSxcclxuICBbMTU4My4wNzU4LCA2MzkuOTkwOTddLFxyXG4gIFsxNTg5LjAwOTMsIDYzMy45ODczN10sXHJcbiAgWzE1ODguNjM2MSwgNjM5LjM4ODhdLFxyXG4gIFsxNTg3LjUyMzksIDY0NS45NDY1M10sXHJcbiAgWzE1OTIuNTc3OCwgNjQzLjU5OTJdLFxyXG4gIFsxNTk3LjE0MDksIDY0Mi42NDY5XSxcclxuICBbMTU5NC42MzEsIDYzNy40MjY3Nl0sXHJcbiAgWzE1OTguNjY2OSwgNjMxLjQ3NzldLFxyXG4gIFsxNjAyLjA3NTksIDYzNS4xNzM5XSxcclxuICBbMTYwMC4zMTgsIDYzOS40NTE0XSxcclxuICBbMTYwMC41NzkxLCA2NDYuNzgwNV0sXHJcbiAgWzE2MDYuMTAxNiwgNjUwLjM1NDRdLFxyXG4gIFsxNjA3LjE5NTQsIDY0NS4wMzg2XSxcclxuICBbMTYwNS4yMzMyLCA2MzkuOTg0MjVdLFxyXG4gIFsxNjExLjAzLCA2NDAuNDE3OF0sXHJcbiAgWzE2MTQuNzA3NSwgNjM1Ljg4MTVdLFxyXG4gIFsxNjM0LjIzNjksIDYzMy45MDg1N10sXHJcbiAgWzE2MzEuNDc0NiwgNjI4LjAxXSxcclxuICBbMTY0MS4xNTc3LCA2MzcuMDI2ODZdLFxyXG4gIFsxNjM0LjcyNTUsIDY0MC40NzUwNF0sXHJcbiAgWzE2MjguODk5OCwgNjQzLjc1NzU3XSxcclxuICBbMTYzMS4yMTQ0LCA2NTAuMTc0MV0sXHJcbiAgWzE2MjMuNTQ0LCA2NTAuNjI0OV0sXHJcbiAgWzE2MTIuNzMwNywgNjU5LjQ2MTJdLFxyXG4gIFsxNjE2LjM2MDgsIDY2NS4yNzA1XSxcclxuICBbMTYxMC4zMjIxLCA2NzAuMzQ2ODZdLFxyXG4gIFsxNjA3LjQzMzMsIDY2NC4yNjM1NV0sXHJcbiAgWzE2MDAuNjk3MywgNjY1LjMzOThdLFxyXG4gIFsxNjAxLjgyNTgsIDY1OS4xMjA2N10sXHJcbiAgWzE1OTUuMjU3OCwgNjYxLjk2ODI2XSxcclxuICBbMTU5OC43Mjc1LCA2NTMuNjU5NjddLFxyXG4gIFsxNTkzLjY5MDksIDY0OS41NjA4XSxcclxuICBbMTU4Ni42OTY1LCA2NTIuNTY1M10sXHJcbiAgWzE1NzYuMTYwOSwgNjU5LjA1MjZdLFxyXG4gIFsxNTgyLjY5NDYsIDY1OS40NjY1NV0sXHJcbiAgWzE1ODcuODY4NCwgNjYxLjM3MTk1XSxcclxuICBbMTU5MC4yODA5LCA2NjYuMDI2MzddLFxyXG4gIFsxNTk0LjEyNzcsIDY2OS4yMDIzXSxcclxuICBbMTU5OC41NzQxLCA2NzEuMTMyNTddLFxyXG4gIFsxNjA0LjEwNzQsIDY3MS44MjNdLFxyXG4gIFsxNjA4LjE1MzQsIDY3Ni45OTE3Nl0sXHJcbiAgWzE2MTQuNjUyOCwgNjc4LjQ2OTRdLFxyXG4gIFsxNjE2LjA5NTMsIDY3Mi42ODY0Nl0sXHJcbiAgWzE2MjIuNDE5NywgNjcxLjgwMjI1XSxcclxuICBbMTYyNi44MDU4LCA2NjcuMjk4N10sXHJcbiAgWzE2MjMuNDU1OCwgNjYyLjM1NjJdLFxyXG4gIFsxNjI4LjM1MTMsIDY1Ny4xMTcwN10sXHJcbiAgWzE2MzcuNjIwNywgNjQ1LjkwOTRdLFxyXG4gIFsxNjQ0LjMxODQsIDY0My44MDg4NF0sXHJcbiAgWzE2NTIuMDk1LCA2NDMuMTU4NTddLFxyXG4gIFsxNjUxLjgwNzMsIDY1My43NjEyXSxcclxuICBbMTY1Ni40NTU4LCA2NTcuNTU2NjRdLFxyXG4gIFsxNjU0LjE5MDgsIDY0OC44NzZdLFxyXG4gIFsxNjQ4LjE3MjQsIDY0OC43OF0sXHJcbiAgWzE2NDIuMzQ2OSwgNjUwLjU5ODFdLFxyXG4gIFsxNjM2Ljc3MywgNjUzLjA5NTJdLFxyXG4gIFsxNjM5LjU1ODgsIDY2NS43MDg3NF0sXHJcbiAgWzE2MzcuNTg5OCwgNjcyLjM2ODNdLFxyXG4gIFsxNjMwLjEwMjMsIDY3My4wMzI5Nl0sXHJcbiAgWzE2MzIuNTUxMywgNjY1LjE5ODg1XSxcclxuICBbMTYzNC43NzAzLCA2NTkuMTc4Ml0sXHJcbiAgWzE2NDEuMDM1OSwgNjU4LjY1MTczXSxcclxuICBbMTY0Ni4wMTI3LCA2NTUuNDgxMTRdLFxyXG4gIFsxNjQ1LjgzMzEsIDY2My4zOTQ2XSxcclxuICBbMTY1MC4zNDQ4LCA2NTkuNjQ0OV0sXHJcbiAgWzE2NTQuODM1NywgNjYzLjQzMzE3XSxcclxuICBbMTY1MS4wNTA4LCA2NjcuOTY3ODNdLFxyXG4gIFsxNjQ1LjAzMjEsIDY3MC4zODM4XSxcclxuICBbMTYzNi45NTE4LCA2ODUuNjYwNV0sXHJcbiAgWzE2MzUuMTQ5OCwgNjkyLjcyMDRdLFxyXG4gIFsxNjI3LjUzLCA2OTIuMDcwMDddLFxyXG4gIFsxNjIxLjE2NjksIDY5Ny4wMjIyXSxcclxuICBbMTYxNS4wMjA4LCA2OTguMjE3N10sXHJcbiAgWzE2MDUuNTI1NCwgNjk1LjE3MTE0XSxcclxuICBbMTYxMC43MDIxLCA2OTMuMTI2Nl0sXHJcbiAgWzE2MTUuMjgzNywgNjkwLjA3NDQ2XSxcclxuICBbMTYyMS4xNjQyLCA2OTAuNDM2NDZdLFxyXG4gIFsxNjI0Ljg3NDgsIDY4NS4zNTgzNF0sXHJcbiAgWzE2MzEuMTA0MSwgNjg2LjI2MzddLFxyXG4gIFsxNjMzLjY5OCwgNjc5LjM0MTJdLFxyXG4gIFsxNjI3LjMzNzUsIDY3OS4zMTMyM10sXHJcbiAgWzE2MjEuMTc0NiwgNjc4LjYyOTY0XSxcclxuICBbMTYxOC4xNzUzLCA2ODQuMjUzMV0sXHJcbiAgWzE2MTEuNTU1MiwgNjgzLjUwOTRdLFxyXG4gIFsxNjA3LjkxNywgNjg3LjQ2ODc1XSxcclxuICBbMTYwNC4wNjIxLCA2ODIuMDc2NF0sXHJcbiAgWzE1OTkuNzE3MywgNjc3LjE5ODU1XSxcclxuICBbMTU5OC42OTg5LCA2ODYuMTE4MV0sXHJcbiAgWzE2MDIuNjgyNiwgNjkwLjEwNTZdLFxyXG4gIFsxNTk5Ljc0MzQsIDY5Ni4xMzA4Nl0sXHJcbiAgWzE1OTUuNTUsIDY5Mi4xMDY3XSxcclxuICBbMTU5MS4yNzczLCA2ODcuNDIyNl0sXHJcbiAgWzE1ODguNjY4MiwgNjgwLjU0MV0sXHJcbiAgWzE1OTQuOTYwMiwgNjgxLjgwNzg2XSxcclxuICBbMTU5My4wODE0LCA2NzUuODM0ODRdLFxyXG4gIFsxNTg4LjE1NjksIDY3Mi4yOTMyXSxcclxuICBbMTU4My42MDcsIDY3NS40MDIyXSxcclxuICBbMTU3OS41NDc2LCA2NzEuMjA1NV0sXHJcbiAgWzE1ODQuMTc1MywgNjY3LjA5NjA3XSxcclxuICBbMTU3OC4zOTY5LCA2NjQuOTAyNDddLFxyXG4gIFsxNTcxLjgyMTksIDY2NC4zMzcxNl0sXHJcbiAgWzE1NzMuNTk3NywgNjY5LjcwODc0XSxcclxuICBbMTU3NC44Mzc2LCA2NzUuMTYyNl0sXHJcbiAgWzE1NzguMTI2MiwgNjc5LjM2Nzg2XSxcclxuICBbMTU4Mi44NDQyLCA2ODEuMjQ5NzZdLFxyXG4gIFsxNTg0LjIxMTMsIDY4Ni43ODgxXSxcclxuICBbMTU4Ni45Nzk2LCA2OTIuMzAwOTZdLFxyXG4gIFsxNTgwLjQ5MDYsIDY5My40NjQzXSxcclxuICBbMTU3NC4xNTkzLCA2OTUuMjM0MjVdLFxyXG4gIFsxNTg1LjU1OTEsIDY5OC42NTIwNF0sXHJcbiAgWzE1OTEuMzk2NywgNjk2Ljc3OTVdLFxyXG4gIFsxNTk1LjcyOTYsIDcwMC44NzU0XSxcclxuICBbMTYwMS4zNzczLCA3MDIuMjg0NjddLFxyXG4gIFsxNTk3LjI5NDcsIDcwOC4zNjQxNF0sXHJcbiAgWzE1ODUuMDE3MSwgNzA1LjE2NTk1XSxcclxuICBbMTU5MS4xNDYsIDcwNC4yODUwM10sXHJcbiAgWzE1NzkuMzMwMSwgNzAwLjM5MzddLFxyXG4gIFsxNTY3LjA5MjgsIDY5OC40OTQ1XSxcclxuICBbMTU2MC44NzI2LCA2OTkuMDU1NF0sXHJcbiAgWzE1NTQuOTQ5MywgNjk4LjMzMjE1XSxcclxuICBbMTU1OS44NzU5LCA2OTMuMzMwMV0sXHJcbiAgWzE1NjUuNzIyOSwgNjkyLjAwMDFdLFxyXG4gIFsxNTcxLjYwNiwgNjg5LjgzMzg2XSxcclxuICBbMTU3Ny41NjUzLCA2ODcuMTUxMDZdLFxyXG4gIFsxNTczLjAwNzksIDY4Mi4yMzg4XSxcclxuICBbMTU2Ny43ODgyLCA2ODQuODI1OV0sXHJcbiAgWzE1NjMuOTYzNywgNjgwLjc2ODc0XSxcclxuICBbMTU2OS4zMzk2LCA2NzYuNzU3OV0sXHJcbiAgWzE1NjcuODE4MSwgNjY5Ljc2NzhdLFxyXG4gIFsxNTYzLjkwNSwgNjc0LjI2NDRdLFxyXG4gIFsxNTU5LjQxNiwgNjc4LjEyNDVdLFxyXG4gIFsxNTYxLjY0MDksIDY4Ni4yOTYxXSxcclxuICBbMTU1MC43MjE3LCA2ODIuMDQ1M10sXHJcbiAgWzE1NDkuNTQ1NywgNjg1LjQ2NzA0XSxcclxuICBbMTU0NS4yNDQ2LCA2ODIuOTQyOV0sXHJcbiAgWzE1NDYuMjcxMiwgNjg3Ljg5Mjc2XSxcclxuICBbMTU0OC4yNDQ5LCA2OTEuNzA3XSxcclxuICBbMTU0OC42OTU4LCA2OTUuNzAyMV0sXHJcbiAgWzE1NDYuNzA4MywgNzA1LjgzMTU0XSxcclxuICBbMTU0NC4yNjc2LCA2OTguOTE2MTRdLFxyXG4gIFsxNTQ5LjIwNTEsIDcwMC4zMzE2N10sXHJcbiAgWzE1NTMuNzY3LCA2OTMuNDA5MzZdLFxyXG4gIFsxNTUyLjIwMjksIDY4OC41Mjg0NF0sXHJcbiAgWzE1NTYuOTczLCA2ODkuMjA2Ml0sXHJcbiAgWzE1NTYuMjYsIDY4NC4yNjgyNV0sXHJcbiAgWzE1NTQuOTk4NSwgNjc5Ljk1MDNdLFxyXG4gIFsxNTU0LjAyNjcsIDY3NC45Njc5XSxcclxuICBbMTU1OC4yNzkzLCA2NzEuOTkyM10sXHJcbiAgWzE1NjIuMDIzNywgNjY3LjgwNTNdLFxyXG4gIFsxNTY1LjQ3OTcsIDY2My4yMTEwNl0sXHJcbiAgWzE1NjAuMDcxMiwgNjYwLjYzODM3XSxcclxuICBbMTU1My4zODI0LCA2NjEuNzYwNTZdLFxyXG4gIFsxNTU2LjkwOTQsIDY2NS43MjY5XSxcclxuICBbMTU1Mi45MjQzLCA2NjguOTI5NDRdLFxyXG4gIFsxNTQ4LjkyNTQsIDY3Mi45NTEwNV0sXHJcbiAgWzE1NDkuNjQ4NywgNjc3LjkyMDFdLFxyXG4gIFsxNTQ0LjkxMTQsIDY3OC4yNjE1NF0sXHJcbiAgWzE1NDMuNzg5OCwgNjczLjgxMjI2XSxcclxuICBbMTU0Ny45MzM4LCA2NjcuNjE5M10sXHJcbiAgWzE1NDIuNjQ2NywgNjY5LjQ5NzddLFxyXG4gIFsxNTQ2LjkxODMsIDY2My4xNTY4Nl0sXHJcbiAgWzE1NDguMDE3NiwgNjU4LjM0MDRdLFxyXG4gIFsxNTQ0LjMwMSwgNjU1LjQyNjldLFxyXG4gIFsxNTQ4LjU4NzUsIDY1MS42NzY0XSxcclxuICBbMTU0NS4wMTAzLCA2NDguMTE2MV0sXHJcbiAgWzE1NDIuMDA4LCA2NDMuMjgyOTZdLFxyXG4gIFsxNTM3LjkzMDIsIDYzOS42ODE3XSxcclxuICBbMTU0Mi44NTExLCA2MzAuNjUzNzVdLFxyXG4gIFsxNTQzLjMwNTgsIDYzNy41MjU3Nl0sXHJcbiAgWzE1NDkuMTY1OCwgNjM1LjI5ODY1XSxcclxuICBbMTU1Ni4wMTg2LCA2MzQuODY5NF0sXHJcbiAgWzE1NTIuNzI5MiwgNjMwLjA2NzRdLFxyXG4gIFsxNTQ3LjYyMjgsIDYyNy41MzEzXSxcclxuICBbMTU0Mi43NzAxLCA2MjQuNTExMDVdLFxyXG4gIFsxNTQ3Ljk1MywgNjIxLjA5OTU1XSxcclxuICBbMTU1Mi42OTI0LCA2MjQuMjg2NV0sXHJcbiAgWzE1NTcuMzQ1NiwgNjIxLjk5MjJdLFxyXG4gIFsxNTQ0LjA0MSwgNjE4LjQ1OTk2XSxcclxuICBbMTUzOS41ODQxLCA2MjAuMTg2OTVdLFxyXG4gIFsxNTM1LjY0NTUsIDYxNC43MTldLFxyXG4gIFsxNTI3Ljk5MDIsIDYxNS43NjQ0N10sXHJcbiAgWzE1MzEuMTY2OSwgNjEzLjIwNTFdLFxyXG4gIFsxNTI5LjIwNzUsIDYwOC41MjY4Nl0sXHJcbiAgWzE1MzkuNTk3MywgNjE0Ljc1MzldLFxyXG4gIFsxNTM3LjA0NzQsIDYwOC41MjUzXSxcclxuICBbMTUzOS43Nzg4LCA2MDQuNTExOF0sXHJcbiAgWzE1NDQuODEyMywgNjA0LjAyODddLFxyXG4gIFsxNTQ0LjY5NTksIDU5OS4yODIxN10sXHJcbiAgWzE1NDQuODE4OCwgNTk0LjY2OTddLFxyXG4gIFsxNTQzLjA1NDMsIDU5MC4zOTcxXSxcclxuICBbMTU0Ny4yNzMsIDU4NC4xMDQ4Nl0sXHJcbiAgWzE1NDEuMDQyNywgNTgxLjQ5MDA1XSxcclxuICBbMTU0NC40NjQ4LCA1ODAuNDM5N10sXHJcbiAgWzE1NDguMTU3NiwgNTgwLjQ3NzNdLFxyXG4gIFsxNTQzLjUwMzcsIDU4NS4xMzQ5NV0sXHJcbiAgWzE1NDAuMTM4LCA1ODcuMjg0N10sXHJcbiAgWzE1NDcuMjU3NywgNTg4LjEzMjI2XSxcclxuICBbMTU0OC43NzI3LCA1OTIuMTM0OTVdLFxyXG4gIFsxNTUwLjIzNTIsIDU5Ni44OTM5XSxcclxuICBbMTU1Mi4xNDMzLCA1ODguMjU1MV0sXHJcbiAgWzE1NTEuMzE0NywgNTg0LjQyOF0sXHJcbiAgWzE1NTMuNzUyMywgNTkyLjU2ODZdLFxyXG4gIFsxNTU1Ljc0ODMsIDU5Ni4yODQ2N10sXHJcbiAgWzE1NTAuMTg2NSwgNjAyLjMyMDA3XSxcclxuICBbMTU1NS42MjQ1LCA2MDEuMDQ3MV0sXHJcbiAgWzE1NTMuMTY1LCA2MTIuNTMzXSxcclxuICBbMTU1NC41OTU2LCA2MDYuODgyNTddLFxyXG4gIFsxNTQ5LjUwMzQsIDYwOC4xNThdLFxyXG4gIFsxNTQ1LjA1NDYsIDYwOC43MTA2XSxcclxuICBbMTU0OC4yMjU2LCA2MTQuMTUwNl0sXHJcbiAgWzE1NDMuNzg2MywgNjEzLjYwNTgzXSxcclxuICBbMTU0MC44NjQ3LCA2MDkuNjg2MDRdLFxyXG4gIFsxNTMzLjcyMTQsIDYxMC4zOTQ5XSxcclxuICBbMTUzMi45NDM0LCA2MDUuNzI3M10sXHJcbiAgWzE1MzUuNDAwNiwgNjAyLjAxNTE0XSxcclxuICBbMTUzNC43Mjc3LCA1OTYuOTM4MjNdLFxyXG4gIFsxNTM5LjQ3ODMsIDU5OS42MjExXSxcclxuICBbMTUzOS45MTg1LCA1OTQuODA1NjZdLFxyXG4gIFsxNTM3LjIyNTEsIDU5MS42MTI1NV0sXHJcbiAgWzE1MzIuNjI1NSwgNTkxLjgyODM3XSxcclxuICBbMTUyOC4yNjE3LCA1OTIuMzI3XSxcclxuICBbMTUyOS44NjQ0LCA1OTYuODY1MzZdLFxyXG4gIFsxNTMwLjc1NTksIDYwMS4yOTgyXSxcclxuICBbMTUyNy4yOTQsIDYwNC45MDgxNF0sXHJcbiAgWzE1MjUuOTA5MywgNjAwLjQ5MV0sXHJcbiAgWzE1MjQuODcxMSwgNTk2LjIyMTU2XSxcclxuICBbMTUyMi4yMTgsIDU5Mi4zMzQ5Nl0sXHJcbiAgWzE1MTkuNjIzNywgNTk1LjY4OF0sXHJcbiAgWzE1MjIuNjM5OSwgNjA0LjUyNTE1XSxcclxuICBbMTUyMC44ODExLCA2MDAuMjM3M10sXHJcbiAgWzE1MTguMTUxOSwgNjA1Ljc5NjYzXSxcclxuICBbMTUwNy41MTY4LCA2MDYuOTI2NF0sXHJcbiAgWzE1MDguOTkzMiwgNjExLjI4Mzk0XSxcclxuICBbMTUwNC43NzIyLCA2MTAuOTA4NDVdLFxyXG4gIFsxNTAxLjM1NTcsIDYwOS40NDYxN10sXHJcbiAgWzE1MDUuNjkyLCA2MTUuMjQxMl0sXHJcbiAgWzE1MDQuODEzNSwgNjE5LjEzMDA3XSxcclxuICBbMTUxMC4yNzM2LCA2MTUuNDAwM10sXHJcbiAgWzE1MTIuMjI5LCA2MTguNTgwMTRdLFxyXG4gIFsxNTA4LjU3MywgNjE5Ljc4ODE1XSxcclxuICBbMTUwNy4xNDEsIDYyNy40NDQyXSxcclxuICBbMTUwOS4wNzc0LCA2MjQuMzU0Nl0sXHJcbiAgWzE1MTIuMjQyNiwgNjIzLjAyMjddLFxyXG4gIFsxNTEyLjI5MDUsIDYyOC4wNjYxXSxcclxuICBbMTUwOC41ODM3LCA2MzAuNzgwNDZdLFxyXG4gIFsxNTEyLjExNjMsIDYzMy4wNDk0NF0sXHJcbiAgWzE1MTUuOTUwNCwgNjMyLjE2MjZdLFxyXG4gIFsxNTE2LjY1OTIsIDYyOC42MTE4XSxcclxuICBbMTUxOS4yNTM5LCA2MjUuOTM1NV0sXHJcbiAgWzE1MjEuMjg5NiwgNjIzLjAxXSxcclxuICBbMTUxNS43MjksIDYyNC4yODg1XSxcclxuICBbMTUxNS41MjIsIDYxOS43M10sXHJcbiAgWzE1MTguNzczOSwgNjIwLjE1NzZdLFxyXG4gIFsxNTIyLjY0NzMsIDYxOS4xMDU5Nl0sXHJcbiAgWzE1MTkuNTk4MywgNjE1LjM2MzhdLFxyXG4gIFsxNTE1LjYyMywgNjE1LjQwNzJdLFxyXG4gIFsxNTEzLjMwODcsIDYxMi4wNzcxNV0sXHJcbiAgWzE1MTIuODI5MSwgNjA3Ljc0MDFdLFxyXG4gIFsxNTEyLjA1MTYsIDYwMi41MjI3XSxcclxuICBbMTUwNy41NjMsIDYwMS4yNzE4NV0sXHJcbiAgWzE1MDMuMzM0OCwgNjA0LjYxNjMzXSxcclxuICBbMTQ5OS4yMjA4LCA2MDEuMDc4ODZdLFxyXG4gIFsxNDk2LjMzNzMsIDU5Ni45MjQ0NF0sXHJcbiAgWzE0OTMuMTk4NywgNjAwLjQyNzVdLFxyXG4gIFsxNDkwLjEyMDIsIDYwMy43NzkxXSxcclxuICBbMTQ4Ny44ODA3LCA1OTkuNTg2NF0sXHJcbiAgWzE0ODMuMjE5NywgNjAxLjM2NDJdLFxyXG4gIFsxNDgwLjUwNjgsIDU5OC45MTgxNV0sXHJcbiAgWzE0NzYuOTg4NCwgNTk5LjUwODA2XSxcclxuICBbMTQ3NS4yNDU1LCA2MDIuMzgzOF0sXHJcbiAgWzE0NzUuNjA5OSwgNjA2LjI1MDFdLFxyXG4gIFsxNDc4LjMwMjUsIDYwOC43OTQ0XSxcclxuICBbMTQ3Ni4wOTEzLCA2MTIuMDM0NF0sXHJcbiAgWzE0NzMuMjI5MiwgNjA5LjUwMDFdLFxyXG4gIFsxNDY5LjkxMTYsIDYwNy45ODE0NV0sXHJcbiAgWzE0NzEuOTMxMiwgNjA0LjgwNTY2XSxcclxuICBbMTQ3MC45MDkzLCA2MDEuMDI4MV0sXHJcbiAgWzE0NjcuNzQ4LCA2MDMuNjY1NV0sXHJcbiAgWzE0NjUuODkwMSwgNjA3LjAzODVdLFxyXG4gIFsxNDYxLjk2NzIsIDYwNi4yMjQzXSxcclxuICBbMTQ1OS4yNTcsIDYwOS42MzUyNV0sXHJcbiAgWzE0NTYuMzQ5MSwgNjEyLjE5NDZdLFxyXG4gIFsxNDUyLjc0MzIsIDYxMC41OTldLFxyXG4gIFsxNDUzLjk2NTUsIDYwNi44OTIzM10sXHJcbiAgWzE0NTcuNjY3NywgNjA1LjcwOTddLFxyXG4gIFsxNDU4LjkwNzIsIDYwMS40NzQzN10sXHJcbiAgWzE0NjMuMTYxMSwgNjAyLjI0OTI3XSxcclxuICBbMTQ2Ni41MDk0LCA1OTkuODU4MV0sXHJcbiAgWzE0NzMuMjMwNiwgNTk4LjE2NTVdLFxyXG4gIFsxNDcwLjE4OCwgNTkwLjQ3Nzk3XSxcclxuICBbMTQ3MC4xNjMxLCA1OTMuNzczNl0sXHJcbiAgWzE0NjMuMTIzOCwgNTg4Ljc0MzhdLFxyXG4gIFsxNDY5LjM4OCwgNTg3LjYzNDVdLFxyXG4gIFsxNDY5LjQ5NTQsIDU4My45MzA2Nl0sXHJcbiAgWzE0NzMuMzk2NywgNTg2LjYyNjM0XSxcclxuICBbMTQ3Ny4yNjczLCA1ODcuMzMwM10sXHJcbiAgWzE0NzMuMDA1OSwgNTgyLjM0MDQ1XSxcclxuICBbMTQ3Ni45MDYyLCA1ODIuMzQxNDNdLFxyXG4gIFsxNDgwLjU0NTMsIDU4NS40MDM1Nl0sXHJcbiAgWzE0ODQuMDQ3LCA1ODIuNzYxNl0sXHJcbiAgWzE0ODYuMzE3NiwgNTc4LjY0MzQzXSxcclxuICBbMTQ4MC44NDY3LCA1ODAuMDgyNzZdLFxyXG4gIFsxNDYwLjQyMTUsIDU4NS42NTg5NF0sXHJcbiAgWzE0NjQuNjcyOSwgNTgzLjU5NTVdLFxyXG4gIFsxNDY2LjE0MDQsIDU4Ni41NjQ4XSxcclxuICBbMTQ2Ni40NjY2LCA1OTEuMTEwOTZdLFxyXG4gIFsxNDY2LjM1NzksIDU5NS4xOTY5XSxcclxuICBbMTQ2OS4zNTgsIDU5Ny4zMTA1NV0sXHJcbiAgWzE0NzMuNzA2LCA1OTQuNTYyODddLFxyXG4gIFsxNDc3LjEwMTEsIDU5NS42ODI0XSxcclxuICBbMTQ3My43OTkxLCA1OTAuNjkyXSxcclxuICBbMTQ3Ny42OTc2LCA1OTEuMzU0OV0sXHJcbiAgWzE0ODAuOTE2NSwgNTk0LjY3NTJdLFxyXG4gIFsxNDgyLjAzMzIsIDU5MC43ODc5Nl0sXHJcbiAgWzE0ODQuMzU5NiwgNTg3LjY2MDRdLFxyXG4gIFsxNDg4LjU3NDgsIDU4OC44MTM3XSxcclxuICBbMTQ4Ni44ODA5LCA1OTIuOTA1MTVdLFxyXG4gIFsxNDg0LjY1MDksIDU5Ni42MzVdLFxyXG4gIFsxNDkxLjEwMzgsIDU5NS44MDY0Nl0sXHJcbiAgWzE0OTIuMjczMywgNTkxLjIzMzhdLFxyXG4gIFsxNDk3Ljc0MTMsIDU4Ni4zNTgzXSxcclxuICBbMTUwMS41NDEsIDU4OS4wMTc1XSxcclxuICBbMTQ5Ni42NDYyLCA1OTEuODEzN10sXHJcbiAgWzE1MDAuOTAwOCwgNTk0LjUxMDRdLFxyXG4gIFsxNTAxLjE5OTcsIDU4MS43MDY2N10sXHJcbiAgWzE0OTIuOTI2OSwgNTg2LjMwMjZdLFxyXG4gIFsxNDg3LjkwNDMsIDU4NC40NzM1XSxcclxuICBbMTQ5MC42MjU3LCA1ODEuMjU0NzZdLFxyXG4gIFsxNDkyLjA1MDQsIDU3Ni42NDMxXSxcclxuICBbMTQ5NS44MzQyLCA1ODAuOTU1OF0sXHJcbiAgWzE0OTcuOTA1MywgNTc1Ljk5MTE1XSxcclxuICBbMTUwMS4zMTE4LCA1NjcuODI1NDRdLFxyXG4gIFsxNTA2LjIyNjYsIDU2OC40Mzc0XSxcclxuICBbMTUwNy4zNjE3LCA1NzIuOTU4MV0sXHJcbiAgWzE1MDkuOTQzNCwgNTc2LjY5NzRdLFxyXG4gIFsxNTEzLjk2ODgsIDU3My45NzEzXSxcclxuICBbMTUxOS41NjkzLCA1NzIuMjkwMV0sXHJcbiAgWzE1MjIuODA0NywgNTc1LjE2ODldLFxyXG4gIFsxNTE5Ljg4ODEsIDU2OC4wMzA0XSxcclxuICBbMTUyMi4yNTQ2LCA1NjQuNzQ4Ml0sXHJcbiAgWzE1MjEuMjU0NSwgNTYwLjQ4MzRdLFxyXG4gIFsxNTI2LjA2MDIsIDU1Ny45Njc1XSxcclxuICBbMTUyNS4wNTkyLCA1NjEuNjVdLFxyXG4gIFsxNTI5LjIyNzcsIDU2MS4yODEzXSxcclxuICBbMTUzMi45NCwgNTYyLjc4NTAzXSxcclxuICBbMTUzNy4wNzQ1LCA1NjQuMDQ0NTZdLFxyXG4gIFsxNTQwLjUyODMsIDU2Mi43NjI5NF0sXHJcbiAgWzE1NDQuMzIyOCwgNTY0LjAzNDldLFxyXG4gIFsxNTQwLjMxNywgNTY3LjM4Njg0XSxcclxuICBbMTUzNC43MzA3LCA1NjcuMjI1XSxcclxuICBbMTUzNy4xMjczLCA1NzAuNTY5OF0sXHJcbiAgWzE1MzQuNjYwMiwgNTc0LjY0ODNdLFxyXG4gIFsxNTMxLjk1MzQsIDU3MC45MjFdLFxyXG4gIFsxNTMwLjE3ODUsIDU2Ni43MzU2XSxcclxuICBbMTUyNi41NTI1LCA1NjUuNTQzXSxcclxuICBbMTUyMy44ODAyLCA1NjkuMjY0Nl0sXHJcbiAgWzE1MjYuOTg4MywgNTcxLjM2NDRdLFxyXG4gIFsxNTI5LjIwMDQsIDU3NC44NTY1N10sXHJcbiAgWzE1MzEuMTE3NywgNTc4LjMyNjk3XSxcclxuICBbMTUzNC44NjcyLCA1NzkuMTY3NF0sXHJcbiAgWzE1MzguMzU2NCwgNTc4LjI0OTI3XSxcclxuICBbMTU0Mi4xMjE4LCA1NzYuNTQ2MTRdLFxyXG4gIFsxNTM5LjEwOTQsIDU3NC4wMDQ4XSxcclxuICBbMTU0Mi4yNCwgNTcxLjM0MjhdLFxyXG4gIFsxNTQ1LjYzNTksIDU3Mi45NTI3Nl0sXHJcbiAgWzE1NDUuOTAzNiwgNTc2LjcyNzldLFxyXG4gIFsxNTQ5LjU3MDQsIDU3Ni4xODA5XSxcclxuICBbMTU1Mi41NzUsIDU3My4yNjQzXSxcclxuICBbMTU1NC43ODY1LCA1NjkuOTM5OV0sXHJcbiAgWzE1NTguNzUwMSwgNTY1Ljg5NTFdLFxyXG4gIFsxNTYxLjk1NCwgNTY3LjUxNzZdLFxyXG4gIFsxNTY0LjMwOTEsIDU2NC41ODg3NV0sXHJcbiAgWzE1NjcuMzA3LCA1NjIuNTg3N10sXHJcbiAgWzE1NjguNzM5OSwgNTU3Ljk4NjQ1XSxcclxuICBbMTU2NC40NDU0LCA1NTkuNjI0NzZdLFxyXG4gIFsxNTYwLjE0NzgsIDU1OC41MTM3XSxcclxuICBbMTU2MC41MjAxLCA1NTIuMTUyMzRdLFxyXG4gIFsxNTU4Ljk5MzksIDU0OC4wNjA4XSxcclxuICBbMTU1Ni4xNDkzLCA1NTEuMzQ5M10sXHJcbiAgWzE1NTguMTIxOCwgNTU1LjIwMzc0XSxcclxuICBbMTU1NS4yOTkxLCA1NTguMjMzM10sXHJcbiAgWzE1NjAuOTczMSwgNTYyLjU0MjddLFxyXG4gIFsxNTU2LjcxNTMsIDU2Mi4xMzE4NF0sXHJcbiAgWzE1NTEuOTM2NSwgNTY0LjY0OTldLFxyXG4gIFsxNTUxLjQyMjYsIDU2OC42MjA4XSxcclxuICBbMTU0OS40MzI0LCA1NzIuMzI5Nl0sXHJcbiAgWzE1NDcuNzk0LCA1NjkuMTYwOV0sXHJcbiAgWzE1NDQuNjQyMSwgNTY3Ljg1MzZdLFxyXG4gIFsxNTQ4LjI2NzgsIDU2NC43OTgxNl0sXHJcbiAgWzE1NDguMDE3MiwgNTYwLjY1M10sXHJcbiAgWzE1NDMuODYzMywgNTYwLjA1ODM1XSxcclxuICBbMTU0NS41NzY3LCA1NTYuNTgyMDNdLFxyXG4gIFsxNTQ4LjQ4MDUsIDU1My4zOTk0XSxcclxuICBbMTU0OS4zMDU0LCA1NDguNDQyNV0sXHJcbiAgWzE1NDYuODkwNCwgNTQ0Ljk2OTM2XSxcclxuICBbMTU1MS4xMzU0LCA1NDQuMzc5OTRdLFxyXG4gIFsxNTYwLjAxNSwgNTQ0LjQyNTldLFxyXG4gIFsxNTU1LjU1MTMsIDU0My4zODk1XSxcclxuICBbMTU1MS40MTgsIDUzOS44MTY4M10sXHJcbiAgWzE1NTUuNDgxOCwgNTM4Ljc4NzNdLFxyXG4gIFsxNTU5LjIzMTYsIDU0MC4zMzhdLFxyXG4gIFsxNTU4LjExMDEsIDUzNS4zNjMzXSxcclxuICBbMTU2MS44MDE4LCA1MzMuNzc5MDVdLFxyXG4gIFsxNTU1LjEwMzYsIDUzMS4wNTY3XSxcclxuICBbMTU1Mi45NjU3LCA1MzUuMjc5NTRdLFxyXG4gIFsxNTQ3LjY3MTQsIDUzNS40NjM4N10sXHJcbiAgWzE1NTkuMTUwNCwgNTMwLjU1Mjg2XSxcclxuICBbMTU1Ni4xNDU1LCA1MjYuMjUzNjZdLFxyXG4gIFsxNTU1LjU3ODYsIDUyMS42NTQwNV0sXHJcbiAgWzE1NTEuNDc5NSwgNTIzLjA3OTgzXSxcclxuICBbMTU0OC42MTgyLCA1MjAuMzAzOF0sXHJcbiAgWzE1NDUuMDI5LCA1MTguNzk1MDRdLFxyXG4gIFsxNTQ5LjE0NzIsIDUxNS44ODE4NF0sXHJcbiAgWzE1NDUuMjIxMiwgNTE0LjQ2OTZdLFxyXG4gIFsxNTQyLjc1MTUsIDUxMS43Mjc5XSxcclxuICBbMTUzOS44Njc3LCA1MDguNzkwMzRdLFxyXG4gIFsxNTM1Ljk1NzMsIDUwNy41NzA5XSxcclxuICBbMTUzMy44MDEzLCA1MDQuMDcwMTNdLFxyXG4gIFsxNTM3Ljg5OCwgNTAwLjg5NjI0XSxcclxuICBbMTUzOS42MDM4LCA1MTQuMTk2OV0sXHJcbiAgWzE1NDEuMzcxNSwgNTE2Ljg1MDM0XSxcclxuICBbMTU0MC41NjkzLCA1MjAuMTMxMl0sXHJcbiAgWzE1MzguMDM2NiwgNTIyLjY4NTg1XSxcclxuICBbMTUzNy45OTYzLCA1MjYuNzI2MV0sXHJcbiAgWzE1MzYuNjAyNSwgNTMwLjY2NTgzXSxcclxuICBbMTUzMS4yOTYxLCA1MzMuMjE1MTVdLFxyXG4gIFsxNTMxLjEzMjIsIDUyOC4zODAxXSxcclxuICBbMTUyOC43Nzg2LCA1MjMuNzAxN10sXHJcbiAgWzE1MjAuMTUzOSwgNTI4LjM2MzM0XSxcclxuICBbMTUyNS40ODk3LCA1MzIuMDE2OF0sXHJcbiAgWzE1MjUuMTgyNywgNTI3LjA5MjNdLFxyXG4gIFsxNTIzLjQ3NzksIDUyMi4xMDA5NV0sXHJcbiAgWzE1MjYuMzI4MSwgNTE3LjQzMDNdLFxyXG4gIFsxNTI5LjAzMDUsIDUxMy40MzM5Nl0sXHJcbiAgWzE1MzIuODY0MywgNTE1Ljc4ODhdLFxyXG4gIFsxNTM2LjM1MDcsIDUxOC40NDcxXSxcclxuICBbMTUzMS4zNTkxLCA1MTkuODI0N10sXHJcbiAgWzE1MzMuODcxMywgNTI0LjA3MDQzXSxcclxuICBbMTUzNi40MzIxLCA1MTIuOTIzMV0sXHJcbiAgWzE1MzIuODU2OSwgNTEwLjc3MDhdLFxyXG4gIFsxNTMwLjMxLCA1MDcuNTQ2MjNdLFxyXG4gIFsxNTA3Ljc3NzYsIDUxMS43MzQxXSxcclxuICBbMTUwOS4wMzkxLCA1MDQuNTA2M10sXHJcbiAgWzE1MTQuNjIxNSwgNTAxLjgzNTgyXSxcclxuICBbMTUxOC4wNTY0LCA0OTcuNzcxMzZdLFxyXG4gIFsxNTExLjMxMTUsIDQ5Ny4xNzgzXSxcclxuICBbMTUwMC4wMTk1LCA0OTcuMzM2OF0sXHJcbiAgWzE0OTUuNDc2MSwgNDkzLjQ3NzYzXSxcclxuICBbMTQ5Ny44MjI1LCA0ODcuNDYxMjddLFxyXG4gIFsxNTAwLjc2NTEsIDQ4Mi43Mjk3NF0sXHJcbiAgWzE0OTEuOTg1LCA0ODcuODkxNDJdLFxyXG4gIFsxNDg2LjgyNzMsIDQ4OS43MjE1M10sXHJcbiAgWzE0ODIuMjI3OCwgNDg2LjgxOTE1XSxcclxuICBbMTQ4MS44NzMzLCA0OTEuOTI5MjZdLFxyXG4gIFsxNDc3LjQ3MiwgNDg5LjkzNjc3XSxcclxuICBbMTQ3My42Mjk5LCA0ODguMTg3XSxcclxuICBbMTQ3Mi4zMTczLCA0OTIuNzgzNV0sXHJcbiAgWzE0NjguMjg0OSwgNDk2LjAwNzU3XSxcclxuICBbMTQ3Mi40Mzg3LCA0OTkuNDQ0OTJdLFxyXG4gIFsxNDc3LjMyNjQsIDQ5Ni4wNl0sXHJcbiAgWzE0ODMuNzg5LCA1MDguMzgzODVdLFxyXG4gIFsxNDg4LjA5OTYsIDUxMi42MjIyNV0sXHJcbiAgWzE0ODUuOTc5MiwgNTI1Ljk2MDc1XSxcclxuICBbMTQ4My4yMzA1LCA1MzIuNjcxOTRdLFxyXG4gIFsxNDc1LjM1MDEsIDUzMy44MzczXSxcclxuICBbMTQ2Ny41Mjk1LCA1MzYuMDUwNjZdLFxyXG4gIFsxNDU5LjE1ODcsIDUzMS44NzI3XSxcclxuICBbMTQ2NC4zOTMzLCA1MjcuNzE0M10sXHJcbiAgWzE0NzEuMTIxMSwgNTI2LjU1NTg1XSxcclxuICBbMTQ3Ny45NTQxLCA1MjQuNTE4NTVdLFxyXG4gIFsxNDg2LjE0NjEsIDUxOS41MTQ1XSxcclxuICBbMTQ5My4zNzAyLCA1MjMuODQwOV0sXHJcbiAgWzE1MDIuMzE3NiwgNTEzLjI4ODE1XSxcclxuICBbMTQ5Ni40NDA5LCA1MDkuODkzMDddLFxyXG4gIFsxNDkwLjg5NzIsIDUwNi40NDg0M10sXHJcbiAgWzE1MDIuMTc3NSwgNTA1Ljg2NDhdLFxyXG4gIFsxNTA1LjI1MzQsIDQ5OS4zNzEzXSxcclxuICBbMTUxNS44OTU5LCA0OTIuMDQzMDZdLFxyXG4gIFsxNTIxLjAwOTQsIDQ5My40MDc3XSxcclxuICBbMTUyNC4xNTc2LCA0OTYuODM2OV0sXHJcbiAgWzE1MjMuOTUyMSwgNTAxLjE2MjA1XSxcclxuICBbMTUyNy40OTIxLCA1MDQuNjEzMjVdLFxyXG4gIFsxNTMwLjAwNDUsIDUwMS4yOTY4NF0sXHJcbiAgWzE1MjguNjMxNiwgNDk3LjM3NDgyXSxcclxuICBbMTUzNC4wNDk4LCA0OTkuNjRdLFxyXG4gIFsxNTMzLjMwMzEsIDQ5NS42MzQyOF0sXHJcbiAgWzE1MzAuMTg3NSwgNDkyLjk1NzQ2XSxcclxuICBbMTUyNS45NDgyLCA0OTIuNjkwNDNdLFxyXG4gIFsxNTI3LjUxODIsIDQ4OC43MjA1NV0sXHJcbiAgWzE1MjIuMTQxMiwgNDg5LjI5NDNdLFxyXG4gIFsxNTIzLjY2ODUsIDQ4NS42MDk0N10sXHJcbiAgWzE1MjcuMjY4OSwgNDgzLjcwMTQyXSxcclxuICBbMTUyOC44MjYyLCA0ODAuMDI0NV0sXHJcbiAgWzE1MzIuNjU0LCA0NzguNzMyMTJdLFxyXG4gIFsxNTMyLjY1NjQsIDQ3NC42MDIwNV0sXHJcbiAgWzE1MzUuNzQ3OCwgNDcxLjk1NDkzXSxcclxuICBbMTUzMy4xNTgzLCA0NjguNDg4NDZdLFxyXG4gIFsxNTMwLjM0MDUsIDQ3MS4xNTIzNF0sXHJcbiAgWzE1MjguMzIwMSwgNDc1LjMwMzY1XSxcclxuICBbMTUyNS4wMzUyLCA0NzguMzUyNzJdLFxyXG4gIFsxNTIyLjI2MSwgNDgxLjY4OTE4XSxcclxuICBbMTUwOS40MjE5LCA0NzkuNDE0MThdLFxyXG4gIFsxNTA0LjkxOTIsIDQ3OC4zNDU2NF0sXHJcbiAgWzE1MTAuMTE2NSwgNDczLjU3MTg3XSxcclxuICBbMTUxMS42NTQ4LCA0NjguMTE4OV0sXHJcbiAgWzE1MDYuODQyLCA0NjguMzM4Ml0sXHJcbiAgWzE1MDYuNTAwMiwgNDYzLjc4MzA1XSxcclxuICBbMTUxMC4zNSwgNDYyLjIyODU4XSxcclxuICBbMTUxNC40MjU5LCA0NjMuNDUzMV0sXHJcbiAgWzE1MTEuNjM0NSwgNDU0LjcyODM2XSxcclxuICBbMTUxMy45NTk3LCA0NTguNzA3MzRdLFxyXG4gIFsxNTE3LjMzNTMsIDQ1Ni41NDUzXSxcclxuICBbMTUxOC44NjE1LCA0NjIuMTcyMl0sXHJcbiAgWzE1MTYuNTcxMywgNDY3LjQ5MDM2XSxcclxuICBbMTUxNi4zODIzLCA0NzIuNzU5NDZdLFxyXG4gIFsxNTIzLjIyMTQsIDQ3NC4yMzA2OF0sXHJcbiAgWzE1MjUuODc1NywgNDcxLjEzNzk0XSxcclxuICBbMTUyNy41NjI1LCA0NjcuNTk0OV0sXHJcbiAgWzE1MzAuOTQwOSwgNDY1LjMzNjRdLFxyXG4gIFsxNTI3LjYzNCwgNDYzLjM5ODU2XSxcclxuICBbMTUyMy42MDk1LCA0NjUuMjAyNl0sXHJcbiAgWzE1MjMuNTU0MSwgNDYwLjY0MzEzXSxcclxuICBbMTUyMS4zNjc3LCA0NTYuOTQ2ODddLFxyXG4gIFsxNTE5LjI5NjMsIDQ1Mi41Mzc0XSxcclxuICBbMTUxNC44OTIsIDQ1Mi45ODQyXSxcclxuICBbMTUxOS4zMjYyLCA0NDguMTQwMTRdLFxyXG4gIFsxNTE5LjI0NjIsIDQ0NC40OTA3OF0sXHJcbiAgWzE1MTcuODA4OCwgNDQwLjgxODQyXSxcclxuICBbMTUxNS41MDEyLCA0MzcuNzM5NzJdLFxyXG4gIFsxNTE5LjI2MDYsIDQzNi4zODYyXSxcclxuICBbMTUyMi41NzU2LCA0MzguNjY5MjVdLFxyXG4gIFsxNTIyLjE1NTUsIDQ0Mi4yMTQ1NF0sXHJcbiAgWzE1MjYuMzQ1NywgNDQzLjA5NzE0XSxcclxuICBbMTUyNi41MDQzLCA0MzcuNTM1ODNdLFxyXG4gIFsxNTMwLjk1MTMsIDQzNi43NDMzOF0sXHJcbiAgWzE1MzUuMTY2MywgNDM1LjMyODJdLFxyXG4gIFsxNTM4LjIxNzcsIDQzMS44MTIyM10sXHJcbiAgWzE1MzQuMDIzLCA0MjkuNzkxNzVdLFxyXG4gIFsxNTMwLjkyOTQsIDQzMi40ODI3M10sXHJcbiAgWzE1MjIuODA4MywgNDMzLjk5MzddLFxyXG4gIFsxNTI2LjYwMTMsIDQzMi44ODIwMl0sXHJcbiAgWzE1MjcuODg2NiwgNDI4LjkzOTk0XSxcclxuICBbMTUzMC41MiwgNDI2LjAxODI1XSxcclxuICBbMTUzNC4yOTc3LCA0MjUuMDk0OV0sXHJcbiAgWzE1MzcuNzA5MiwgNDIyLjY2NDVdLFxyXG4gIFsxNTM4Ljg4NzcsIDQxOC42NTUwM10sXHJcbiAgWzE1MzQuODU3NCwgNDE2LjU5NTldLFxyXG4gIFsxNTM3LjE3NzYsIDQxMy42MDcwM10sXHJcbiAgWzE1MzIuOTE5LCA0MTIuMzQ4MDJdLFxyXG4gIFsxNTI4Ljg4MTIsIDQxMi43MTM2OF0sXHJcbiAgWzE1MjUuMTQ4MiwgNDEyLjgyMzddLFxyXG4gIFsxNTIzLjc1OCwgNDE2LjM4NjY2XSxcclxuICBbMTUyMC4xOTA0LCA0MTcuNzMwMl0sXHJcbiAgWzE1MTcuMzczOCwgNDIwLjU2ODM2XSxcclxuICBbMTUxOS4zNjU1LCA0MjQuOTgzMjJdLFxyXG4gIFsxNTIyLjA2LCA0MjIuMzMwNzhdLFxyXG4gIFsxNTI1LjQxOCwgNDIwLjM1NzAzXSxcclxuICBbMTUyNy43OTU5LCA0MTcuMzMxODVdLFxyXG4gIFsxNTMxLjA1NTIsIDQxNi4zOTIwM10sXHJcbiAgWzE1MzMuNjQ2NywgNDIwLjQxODU1XSxcclxuICBbMTUyOS42NzQsIDQyMS43MzQ1Nl0sXHJcbiAgWzE1MjUuNjg1OCwgNDI0Ljk5NzE2XSxcclxuICBbMTUyMi43MTUsIDQyOC43NjUzMl0sXHJcbiAgWzE1MTkuMTMwMSwgNDMxLjk3OTk4XSxcclxuICBbMTUxNy41ODI5LCA0MjguNjYyOF0sXHJcbiAgWzE1MTQuNjYxNCwgNDI2LjA1ODRdLFxyXG4gIFsxNTEzLjU4MDMsIDQyMi40NjM1XSxcclxuICBbMTUwOS4zODEsIDQyMC42OTE0XSxcclxuICBbMTUwOS44NTY3LCA0MjYuNzk2MDJdLFxyXG4gIFsxNTA4Ljk0NDYsIDQzMS44NDg2XSxcclxuICBbMTUxMy4zODg4LCA0MzAuNTk2NF0sXHJcbiAgWzE1MTUuMjY0MiwgNDM0LjA0NjJdLFxyXG4gIFsxNTExLjAxMzIsIDQzNS45NTg0NF0sXHJcbiAgWzE1MTIuODY3NywgNDM5Ljg4MjJdLFxyXG4gIFsxNTEyLjgzNzksIDQ0My4xNzYxXSxcclxuICBbMTUxNS43NTEyLCA0NDUuMDY4NDhdLFxyXG4gIFsxNTE1Ljc3NDQsIDQ0OS4zMzgxXSxcclxuICBbMTUyMy4yODc4LCA0NDYuMTM4OV0sXHJcbiAgWzE1MjIuNzIyNSwgNDQ5Ljk2Ml0sXHJcbiAgWzE1MjQuNTIzNywgNDUyLjg4NzJdLFxyXG4gIFsxNTI4Ljc4NTMsIDQ1Mi43ODQ3M10sXHJcbiAgWzE1MjYuMTAzOCwgNDU2LjIwNjM2XSxcclxuICBbMTUyOS44OTM4LCA0NTcuMjc4NjNdLFxyXG4gIFsxNTI3LjAwOTIsIDQ0OC4yMTA1N10sXHJcbiAgWzE1MzAuNjc2NSwgNDQ5LjI3NzA0XSxcclxuICBbMTUzNi4xMDczLCA0NDMuODEyOF0sXHJcbiAgWzE1NDAuODI3MSwgNDQ0LjMwMTddLFxyXG4gIFsxNTQ0Ljk0NDUsIDQ0My43ODUzN10sXHJcbiAgWzE1NDUuMzY4NCwgNDQwLjE1NTAzXSxcclxuICBbMTU0NC42MjAxLCA0MzYuNDAxNV0sXHJcbiAgWzE1NDUuOTU0MywgNDMxLjMyMDUzXSxcclxuICBbMTU1My4wMjYsIDQyOC4yNTQyN10sXHJcbiAgWzE1NTMuOTc3LCA0MzIuMjMwNDRdLFxyXG4gIFsxNTUwLjUyNzMsIDQzMS41MThdLFxyXG4gIFsxNTQ4LjMzOTYsIDQzNC4yOTFdLFxyXG4gIFsxNTQ5LjE4NDksIDQzNy4zMTE5XSxcclxuICBbMTU0OC44OTcxLCA0NDAuMzE1MjhdLFxyXG4gIFsxNTQ5LjMwNjYsIDQ0My4zNTQ2XSxcclxuICBbMTU0Ny44Njk4LCA0NDYuNzUyNjJdLFxyXG4gIFsxNTQ0LjM3MzMsIDQ0Ny41NDE4N10sXHJcbiAgWzE1NDEuMDc0NywgNDQ4LjU4MzI1XSxcclxuICBbMTUzOC4wMjIsIDQ0Ny4wNTc3XSxcclxuICBbMTUzNi44ODAxLCA0NTAuNTQwNF0sXHJcbiAgWzE1MzcuNjI2LCA0NTQuMTE5MjZdLFxyXG4gIFsxNTM0Ljg3OTMsIDQ1NS40Mzc4NF0sXHJcbiAgWzE1NDAuMzI3OSwgNDUyLjE3NDI2XSxcclxuICBbMTU0MS4yMDU4LCA0NTUuODQ3Nl0sXHJcbiAgWzE1NDMuNTY1OSwgNDUxLjQwMTddLFxyXG4gIFsxNTQ0Ljc5MzIsIDQ1NC41MjMyXSxcclxuICBbMTU0Ni44NzIsIDQ1MC44MTUyNV0sXHJcbiAgWzE1NDYuMDAxLCA0NTcuNTU5N10sXHJcbiAgWzE1NDMuMzk0NSwgNDU5LjA4MzJdLFxyXG4gIFsxNTQ4LjY1NTYsIDQ1OC40NTk5M10sXHJcbiAgWzE1NTAuMDk1LCA0NjEuMzM3NF0sXHJcbiAgWzE1NDYuMzQwMSwgNDYyLjA1MDc4XSxcclxuICBbMTU0My4wOTc4LCA0NjMuMzI5MzVdLFxyXG4gIFsxNTM3LjYxNDEsIDQ1Ny44MzYwNl0sXHJcbiAgWzE1NDAuMzcyMywgNDYwLjEwMDUyXSxcclxuICBbMTUzNy4yMTI2LCA0NjEuNjI4MDVdLFxyXG4gIFsxNTM5LjYwNzUsIDQ2NC41MjE4NV0sXHJcbiAgWzE1NDIuMzg5MiwgNDY3LjYzODldLFxyXG4gIFsxNTQ1Ljk3ODMsIDQ2Ni45MDk5N10sXHJcbiAgWzE1NDguOTQ1NiwgNDY0Ljk2MDldLFxyXG4gIFsxNTUwLjA2NzEsIDQ2OS4zNjg2Ml0sXHJcbiAgWzE1NDYuODMzNiwgNDcwLjk4NTNdLFxyXG4gIFsxNTQzLjU2MTUsIDQ3Mi4xNjU4M10sXHJcbiAgWzE1MzkuOTU3NSwgNDcwLjgxMDRdLFxyXG4gIFsxNTM3LjcxMjYsIDQ2OC4wNzc0XSxcclxuICBbMTUzNS41Mzc0LCA0NjUuMzU5MjVdLFxyXG4gIFsxNTMwLjgzNTcsIDQ2MS4wMTkxXSxcclxuICBbMTUyNy41MzIyLCA0NTkuNjU0M10sXHJcbiAgWzE1MzMuNzkxOSwgNDYyLjU2NTkyXSxcclxuICBbMTUzMy45MzQxLCA0NTguOTAyMjhdLFxyXG4gIFsxNTMxLjg0MjgsIDQ1NS4yMDIzM10sXHJcbiAgWzE1MzMuMzk3NSwgNDUxLjkyNTIzXSxcclxuICBbMTUzNC4xMzI2LCA0NDcuNTRdLFxyXG4gIFsxNTMwLjg4MTMsIDQ0NC45MTAwM10sXHJcbiAgWzE1MjkuNDMxMywgNDQwLjc4NTI1XSxcclxuICBbMTUzMy40NjQsIDQ0MC42MDI3NV0sXHJcbiAgWzE1MzcuNDExNiwgNDM5LjgzMTk3XSxcclxuICBbMTU0MS41MTM5LCA0NDAuMzk1MzJdLFxyXG4gIFsxNTM5Ljg1MjMsIDQzNi40MDA0NV0sXHJcbiAgWzE1NDIuMjk5NiwgNDMyLjk3NDEyXSxcclxuICBbMTU0Mi42MjQsIDQyOC40NDk5XSxcclxuICBbMTUzOC40NzgxLCA0MjcuMjQ2NzddLFxyXG4gIFsxNTQyLjExOTEsIDQyMy4xODg0NV0sXHJcbiAgWzE1NDcuMzEzNCwgNDIxLjYzMzA2XSxcclxuICBbMTU0NS43NzQ3LCA0MjUuNDY1ODJdLFxyXG4gIFsxNTQ4LjUyMTQsIDQyOC4yMTQ1N10sXHJcbiAgWzE1NTAuNDQ3MywgNDI0Ljc1NTJdLFxyXG4gIFsxNTUxLjc2MSwgNDIxLjA0MTVdLFxyXG4gIFsxNTUyLjY1MTUsIDQxNy42ODYyMl0sXHJcbiAgWzE1NDcuODQ1MiwgNDE3LjUwNTgzXSxcclxuICBbMTU0OC41NTQ2LCA0MTQuMDk0NjddLFxyXG4gIFsxNTQzLjc1NjMsIDQxOC42Njk5Ml0sXHJcbiAgWzE1NDEuNDk4MiwgNDE0Ljk0NDRdLFxyXG4gIFsxNTQ0LjgxMzYsIDQxMi4zMDgwN10sXHJcbiAgWzE1NDcuMTE3NywgNDA3LjU5MDE4XSxcclxuICBbMTUzOS44MDg3LCA0MTAuNTgxODVdLFxyXG4gIFsxNTM1LjQyODcsIDQwOC45MjM2NV0sXHJcbiAgWzE1MzAuNzg1LCA0MDguNTk1NjddLFxyXG4gIFsxNTI2Ljg5ODMsIDQwOC45ODk1Nl0sXHJcbiAgWzE1MjUuNDY0OCwgNDA1LjI2MDM4XSxcclxuICBbMTUyNC4yMzAyLCA0MDEuMzQ0NTddLFxyXG4gIFsxNTI1LjY1NDgsIDM5Ny44MDM1Nl0sXHJcbiAgWzE1MjIuMjg3NywgMzk1LjY3OTI2XSxcclxuICBbMTUyMi45MjcsIDM5MS4yNTcyXSxcclxuICBbMTUyNC4xNjkzLCAzODYuMzg1NDRdLFxyXG4gIFsxNTI2LjgxOTMsIDM4Mi40NzE2NV0sXHJcbiAgWzE1MzAuNDQ3NSwgMzc4Ljc0OTE1XSxcclxuICBbMTUzNS40MjYxLCAzODEuMjkzOTVdLFxyXG4gIFsxNTMxLjM0NTcsIDM4NS4zMzI2XSxcclxuICBbMTUyNy45NTYyLCAzODkuMTMwN10sXHJcbiAgWzE1MzEuOTI3NywgMzkxLjIwMzA2XSxcclxuICBbMTUzNi4yMDIzLCAzODYuNjcxXSxcclxuICBbMTUzNS4wNjQyLCAzNzUuMjUwMzRdLFxyXG4gIFsxNTQwLjI4MywgMzc4LjAzMDFdLFxyXG4gIFsxNTQ1LjUwMTcsIDM3NS40MzA0XSxcclxuICBbMTU0MS4wMjMsIDM3Mi42NjUyMl0sXHJcbiAgWzE1NDUuMDMyNiwgMzY4LjkyMDI2XSxcclxuICBbMTU0OC44NzMsIDM2NS42MjU4XSxcclxuICBbMTU1My43MzM0LCAzNjQuNzQxODJdLFxyXG4gIFsxNTU3Ljk3MDMsIDM2Ni4wMTg4Nl0sXHJcbiAgWzE1NjIuMjgzOSwgMzY3LjE0Mzc3XSxcclxuICBbMTU2Mi44MzA2LCAzNzMuMDA5NV0sXHJcbiAgWzE1NTguNDA2NywgMzcxLjUzMDk4XSxcclxuICBbMTU1My41MTU5LCAzNzAuMzEwMTVdLFxyXG4gIFsxNTQ5Ljg2ODcsIDM3My4xMDEwNF0sXHJcbiAgWzE1NTQuNDMwNCwgMzc2LjM2MTE4XSxcclxuICBbMTU0OS42NDgsIDM3OC45NzAxXSxcclxuICBbMTU0NS4xODcsIDM4MS4zNTYyNl0sXHJcbiAgWzE1NDAuNTU3OSwgMzgzLjUwMzQ4XSxcclxuICBbMTU0MS4yMDA2LCAzODguNDk1OTddLFxyXG4gIFsxNTQ1Ljg0OTksIDM4Ni44OTExXSxcclxuICBbMTU1MC40NjgzLCAzODQuMzY1MTddLFxyXG4gIFsxNTU0LjM2MjcsIDM4MS41NjE0Nl0sXHJcbiAgWzE1NTcuOTkzNywgMzg0LjM1NDc0XSxcclxuICBbMTU1OS44MTUsIDM4MC41NDQ5OF0sXHJcbiAgWzE1NTguODk1MSwgMzc2LjQxMjNdLFxyXG4gIFsxNTYzLjAyMywgMzc3LjYzMDJdLFxyXG4gIFsxNTY2LjcyODgsIDM3Ni4xOTk2OF0sXHJcbiAgWzE1NjkuNjEyMywgMzc4LjY5NzQ4XSxcclxuICBbMTU2OS42NDcxLCAzODIuMzI0MjJdLFxyXG4gIFsxNTczLjEwOTQsIDM3OS40MDQ0OF0sXHJcbiAgWzE1NzYuNDQwMiwgMzc3Ljk1ODEzXSxcclxuICBbMTU3OS44MTg1LCAzNzUuNzU2M10sXHJcbiAgWzE1ODEuMTEzNSwgMzc5LjcwNDldLFxyXG4gIFsxNTc3LjY5NjQsIDM4MS42Njc5N10sXHJcbiAgWzE1NzcuODM5NCwgMzg1LjkyMTAyXSxcclxuICBbMTU3Ni43MzAyLCAzODguODk0N10sXHJcbiAgWzE1NzkuMDI2MSwgMzkwLjgyODg2XSxcclxuICBbMTU4Mi4wNzY1LCAzOTAuNTI3ODNdLFxyXG4gIFsxNTg0LjYxNTEsIDM5Mi45MDY4Nl0sXHJcbiAgWzE1ODUuMzc4OSwgMzk3Ljg4MzM2XSxcclxuICBbMTU4MS44ODI0LCAzOTguMDYzOV0sXHJcbiAgWzE1ODEuNDUxOSwgMzk0LjM2MDM1XSxcclxuICBbMTU3Ny44NzYyLCAzOTMuOTMwNzNdLFxyXG4gIFsxNTc4LjEyNTcsIDM5Ny4zODI1XSxcclxuICBbMTU3NC41MDU5LCAzOTkuNTAyOV0sXHJcbiAgWzE1NzQuOTQyNCwgNDAzLjY4MTQ2XSxcclxuICBbMTU3NC41OTkyLCAzOTUuMTk1MDddLFxyXG4gIFsxNTc0LjkyMzEsIDM5MS42NzUyM10sXHJcbiAgWzE1NzEuMDA4MiwgMzkyLjU0N10sXHJcbiAgWzE1NjcuMjc4NCwgMzk0LjA2MzJdLFxyXG4gIFsxNTcxLjQ3NTIsIDM5Ni42MDI2XSxcclxuICBbMTU2OC40NjA3LCAzOTguMTI2OV0sXHJcbiAgWzE1NjUuMDEzNSwgMzk4LjU0NzMzXSxcclxuICBbMTU2My41MSwgMzkyLjgyMDYyXSxcclxuICBbMTU2NS45OTI2LCAzODkuNjc1NDhdLFxyXG4gIFsxNTY5LjM4MDQsIDM4OC43OTM0Nl0sXHJcbiAgWzE1NzIuNzUzMiwgMzg4Ljk1NzE1XSxcclxuICBbMTU3NC42MTcxLCAzODYuMTk2NV0sXHJcbiAgWzE1NzQuNDE1OCwgMzgyLjczMjAzXSxcclxuICBbMTU3MS4zMDE2LCAzODUuMTgzNDRdLFxyXG4gIFsxNTY2Ljk1MjYsIDM4NS40MDVdLFxyXG4gIFsxNTY2LjAwMTcsIDM4MC41NDA3N10sXHJcbiAgWzE1NjMuMjI3OCwgMzgzLjMwNDAyXSxcclxuICBbMTU2Mi42MjMzLCAzODcuMzM3NV0sXHJcbiAgWzE1NTkuMTM1LCAzODguOTIyNDVdLFxyXG4gIFsxNTU1LjAzMjUsIDM4OC4yOTg2NV0sXHJcbiAgWzE1NTAuODYwMSwgMzg4LjkyNTRdLFxyXG4gIFsxNTQ3LjgxNzUsIDM5MS45NzU4M10sXHJcbiAgWzE1NDMuODQ0MSwgMzkyLjk0OTFdLFxyXG4gIFsxNTQyLjk5OTUsIDM5OC40NzU4XSxcclxuICBbMTU0Ni40ODI5LCAzOTYuODc0MjRdLFxyXG4gIFsxNTUwLjE0ODcsIDM5Ni43MTY5Ml0sXHJcbiAgWzE1NTEuNDI3MiwgNDAwLjQ2OTA2XSxcclxuICBbMTU1NC42NjI4LCAzOTcuNzk5ODddLFxyXG4gIFsxNTU3Ljk3NSwgNDAwLjI0MjhdLFxyXG4gIFsxNTYyLjUwNDQsIDQwMS44NDQxXSxcclxuICBbMTU2MC44NTk0LCAzOTcuMjU5ODNdLFxyXG4gIFsxNTYwLjA2OTEsIDM5My4wNTAxXSxcclxuICBbMTU1Ni41NzA4LCAzOTMuOTQwM10sXHJcbiAgWzE1NTIuNDY4NSwgMzkzLjI0NjRdLFxyXG4gIFsxNTU0LjY2MTMsIDQwMy4yMjQzN10sXHJcbiAgWzE1NTguNzczNiwgNDA0LjMyODNdLFxyXG4gIFsxNTU3Ljk5NjcsIDQxMS4xMTQ4N10sXHJcbiAgWzE1NjEuNTg4LCA0MTAuODQ2MDRdLFxyXG4gIFsxNTYwLjAyODgsIDQwNy45MTM5XSxcclxuICBbMTU2My4wMTEyLCA0MDUuODY1MzNdLFxyXG4gIFsxNTY2LjgwNzksIDQwMy45MDMwOF0sXHJcbiAgWzE1NzAuNDE2MywgNDAxLjUyNjk1XSxcclxuICBbMTU3MS4wMTY0LCA0MDUuODU3NDhdLFxyXG4gIFsxNTY1Ljc0OCwgNDA4LjU2Mzk2XSxcclxuICBbMTU2OS4yMjMzLCA0MDkuOTExOTZdLFxyXG4gIFsxNTY0LjgxOTEsIDQxNy4xNzEyM10sXHJcbiAgWzE1NjQuODc4NSwgNDIxLjUzNzRdLFxyXG4gIFsxNTY4LjE5NzgsIDQxOS40MDE2XSxcclxuICBbMTU3MS4zNDY0LCA0MjEuMDYxNzddLFxyXG4gIFsxNTczLjI5OTEsIDQyMy45MDYwN10sXHJcbiAgWzE1NzIuNjM4NywgNDE3LjI5MDE2XSxcclxuICBbMTU3Ni42NTQ3LCA0MTcuMzY5MjNdLFxyXG4gIFsxNTgwLjkwNTUsIDQxNi42NDE0OF0sXHJcbiAgWzE1NzkuMjcyNywgNDEyLjgxNTZdLFxyXG4gIFsxNTc1LjY1OTQsIDQxMy4yMTM5M10sXHJcbiAgWzE1NzEuODgxMywgNDEzLjA3NjQyXSxcclxuICBbMTU2OS4wNDA1LCA0MTUuNTI1XSxcclxuICBbMTU2Ni42NzYsIDQxMy4yOTFdLFxyXG4gIFsxNTYzLjg5ODQsIDQxMi41NzY4NF0sXHJcbiAgWzE1NjAuODk4MiwgNDE1LjAwOTQ2XSxcclxuICBbMTU2MS4yODM5LCA0MTguNjQyMThdLFxyXG4gIFsxNTYwLjM3NTYsIDQyMS43OTA3N10sXHJcbiAgWzE1NTkuMzQyLCA0MjUuMDgwNzhdLFxyXG4gIFsxNTU3LjA4MywgNDI3LjQ3MjAyXSxcclxuICBbMTU1NC42MDY0LCA0MjQuNTI5NTRdLFxyXG4gIFsxNTU2LjE5ODQsIDQyMS4zNDkzM10sXHJcbiAgWzE1NTcuMTIzNSwgNDE3Ljk1MDA0XSxcclxuICBbMTU1Ni44NTk0LCA0MTQuNDUxOV0sXHJcbiAgWzE1NTIuNzQ5OSwgNDE0LjI4ODgyXSxcclxuICBbMTU0OS44MTIxLCA0MTAuNjY4OTVdLFxyXG4gIFsxNTU0LjA5NDcsIDQxMC45NzczNl0sXHJcbiAgWzE1NTUuODQ0NSwgNDA3LjQxNjg3XSxcclxuICBbMTU1MS45MTg4LCA0MDcuMzM2NF0sXHJcbiAgWzE1NTAuMTkxOSwgNDA0LjIyMDgzXSxcclxuICBbMTU0Ny4xODc2LCA0MDEuMzUwOV0sXHJcbiAgWzE1NDQuNTE5OCwgNDAzLjk5MDIzXSxcclxuICBbMTU0MS4wMzQ1LCA0MDIuNDE1MjhdLFxyXG4gIFsxNTQyLjg4MjYsIDQwNy45MTEwN10sXHJcbiAgWzE1MzguOTk5LCA0MDYuMjA3Nl0sXHJcbiAgWzE1MzYuMDE2NiwgNDAzLjg4OTM3XSxcclxuICBbMTUzMi44Mzk3LCA0MDUuMTYxODddLFxyXG4gIFsxNTMzLjI3NTEsIDQwMC4zMTQ1NF0sXHJcbiAgWzE1MzcuNTM2MywgNDAwLjM3OTE1XSxcclxuICBbMTUzOS4xMjA4LCAzOTcuMDAyNV0sXHJcbiAgWzE1MzkuNzI4NCwgMzkzLjE1MjgzXSxcclxuICBbMTUzNi4yMTE4LCAzOTEuMjIxNTNdLFxyXG4gIFsxNTM0Ljc2NTEsIDM5NS43ODA1Ml0sXHJcbiAgWzE1MzAuNDUxMywgMzk2LjQxOTEzXSxcclxuICBbMTUyNy4yOTU3LCAzOTMuNjM0Nl0sXHJcbiAgWzE1MjkuMDU5MSwgNDAwLjU5NjY1XSxcclxuICBbMTUyOS4yNDk1LCA0MDQuNDQ4M10sXHJcbiAgWzE1MjIuNzA0NiwgNDA4LjYwODU4XSxcclxuICBbMTUxOC40MTU0LCA0MDkuMTMzMzZdLFxyXG4gIFsxNTIwLjk1ODYsIDQxMi45MDYxXSxcclxuICBbMTUxNi40MDgsIDQxNC4xNTM3NV0sXHJcbiAgWzE1MTMuMjU2MSwgNDE3LjU1MzIyXSxcclxuICBbMTUxMy41Nzk3LCA0MDkuNjE5MjZdLFxyXG4gIFsxNTE2LjI2OTMsIDQwNC40NTk5M10sXHJcbiAgWzE1MjAuOTI2LCA0MDQuMjg4NDVdLFxyXG4gIFsxNTE5LjAwMzIsIDM5OS42MzY3OF0sXHJcbiAgWzE1MTcuNjIwNiwgMzk0LjE5NjFdLFxyXG4gIFsxNTExLjU3NTIsIDQwMy40MTc2XSxcclxuICBbMTUwOS45ODg5LCA0MTMuOTk1MTJdLFxyXG4gIFsxNTA1LjM3MjksIDQyMy40NDA4Nl0sXHJcbiAgWzE1MDQuMzEyMywgNDI4LjM2OTcyXSxcclxuICBbMTUwNC4yNTcsIDQzMi45OTkzM10sXHJcbiAgWzE1MDYuMzM4NSwgNDM2LjgxMzA4XSxcclxuICBbMTUwOC44MjIzLCA0NDAuNDU0MjJdLFxyXG4gIFsxNTA0LjE0MjUsIDQ0MC43NzQ2Nl0sXHJcbiAgWzE1MDYuNDA1OCwgNDQ0LjE0NV0sXHJcbiAgWzE1MDIuODA1NywgNDQ1Ljc0MTY0XSxcclxuICBbMTUwMi43MDQ2LCA0NTAuNjIwNDVdLFxyXG4gIFsxNTA2Ljg4NDUsIDQ0OC41MzA4NV0sXHJcbiAgWzE1MDkuNzE2OSwgNDQ1LjE2NzQ1XSxcclxuICBbMTUxMi40NDA3LCA0NDcuNTIwNl0sXHJcbiAgWzE1MTAuODE0NiwgNDUwLjY1Nzc4XSxcclxuICBbMTUwNy4yOTE3LCA0NTIuOTc0ODVdLFxyXG4gIFsxNTA0LjA1MTUsIDQ1NS4yMTUwNl0sXHJcbiAgWzE1MDUuNjYyLCA0NTkuMzQxOTJdLFxyXG4gIFsxNTA5LjE0NTMsIDQ1Ny41ODkzMl0sXHJcbiAgWzE1MDIuMjQ3MywgNDYyLjQ2NDA4XSxcclxuICBbMTUwMi4xMjU3LCA0NjYuNzMzMjVdLFxyXG4gIFsxNTAxLjA0NDIsIDQ1OC43MzQ1XSxcclxuICBbMTQ5OS40ODU2LCA0NTQuNzUzNTRdLFxyXG4gIFsxNDk3LjkzMzEsIDQ1MS4wMjg3NV0sXHJcbiAgWzE0OTguODAzMywgNDQ2LjY0MjUyXSxcclxuICBbMTQ5NC4xMzI5LCA0NDguODE1NzddLFxyXG4gIFsxNDk0LjMyNzQsIDQ1NC4zMTcyM10sXHJcbiAgWzE0OTAuMDc1MiwgNDUxLjc5NjFdLFxyXG4gIFsxNDgyLjk0NDgsIDQ1OC4wMjc4XSxcclxuICBbMTQ3OS40MTAyLCA0NjAuOTE2XSxcclxuICBbMTQ4MC42NDU4LCA0NDcuNjUwMDJdLFxyXG4gIFsxNDg1LjI1NDksIDQ0My4xNzA3NV0sXHJcbiAgWzE0OTAuNjEwMSwgNDQwLjUwNzldLFxyXG4gIFsxNDk1LjE3NjEsIDQzNi44ODIzMl0sXHJcbiAgWzE1MDAuODc2OCwgNDM2LjYyNDc2XSxcclxuICBbMTUwMC4xMzE2LCA0NDEuMDM5OV0sXHJcbiAgWzE0OTYuNzI0NiwgNDQyLjA3NjIzXSxcclxuICBbMTQ5My43MTE0LCA0NDQuMTUxMjVdLFxyXG4gIFsxNDg5Ljc2NDYsIDQ0Ni4yNTIyXSxcclxuICBbMTQ4NS43NTczLCA0NDguNDUxNzhdLFxyXG4gIFsxNDg0LjMxMDgsIDQ1Mi44MTY1M10sXHJcbiAgWzE0NzkuMzQwNywgNDUzLjUzOTkyXSxcclxuICBbMTQ3NS4yMjI5LCA0NTYuNDQwNjRdLFxyXG4gIFsxNDcyLjc1OTgsIDQ2MC40Mjg1M10sXHJcbiAgWzE0NjguMTcxNCwgNDYxLjU5MzI2XSxcclxuICBbMTQ2NS40OTIyLCA0NjUuMDQ0OThdLFxyXG4gIFsxNDYxLjYwMjIsIDQ2Ny4zMDY2XSxcclxuICBbMTQ2NC4wMDQ2LCA0NzEuMTg2MTZdLFxyXG4gIFsxNDU5Ljg1NzksIDQ3My4xOTQzNF0sXHJcbiAgWzE0NjMuNTQ2NSwgNDc2LjAxMDYyXSxcclxuICBbMTQ2Ny45NDg0LCA0NzYuMTUzM10sXHJcbiAgWzE0NjguMjk1MiwgNDcyLjkwNzMyXSxcclxuICBbMTQ2OC4wOTQ3LCA0NjguODg0MzRdLFxyXG4gIFsxNDcxLjU3NDEsIDQ2Ni4wOTY2OF0sXHJcbiAgWzE0NzIuNDAwMywgNDcxLjY2ODQzXSxcclxuICBbMTQ3Mi4wMTYsIDQ3Ni44MjI4OF0sXHJcbiAgWzE0NjcuMjUyOSwgNDc5LjU2MTUyXSxcclxuICBbMTQ2My4yMTA4LCA0ODAuNTAzNF0sXHJcbiAgWzE0NTguMzQ5MSwgNDc3LjczNzQzXSxcclxuICBbMTQ1OS4yNDE3LCA0ODEuOTU4OTJdLFxyXG4gIFsxNDYzLjMyMzUsIDQ4NS43NjA4Nl0sXHJcbiAgWzE0NjYuODI2OSwgNDg0LjAxOTEzXSxcclxuICBbMTQ3MC40OTA1LCA0ODEuMjY5MzVdLFxyXG4gIFsxNDc0LjY3MDIsIDQ4MS4yMTY5OF0sXHJcbiAgWzE0NzYuMDUxNCwgNDc3LjQ3NjMyXSxcclxuICBbMTQ3Ni40NzY5LCA0NzMuNTQxMl0sXHJcbiAgWzE0NzYuMzA3OSwgNDY5LjAxNzY3XSxcclxuICBbMTQ3Ni4xMDAyLCA0NjQuMjMzMjhdLFxyXG4gIFsxNDgwLjc2NDYsIDQ2Ni43Mzc3Nl0sXHJcbiAgWzE0ODQuNjM2LCA0NjQuNDczOTRdLFxyXG4gIFsxNDg3LjY2NDksIDQ2MS4yOTc5N10sXHJcbiAgWzE0ODcuOTg4MiwgNDU2LjE5MzY2XSxcclxuICBbMTQ5Mi4wMjIxLCA0NTguNDY5NTRdLFxyXG4gIFsxNDk2LjY1MzgsIDQ1OC45MjgyXSxcclxuICBbMTQ5Ny45MDExLCA0NjMuNjY1ODZdLFxyXG4gIFsxNDk5LjYyOTksIDQ3MC4xMzk0N10sXHJcbiAgWzE1MDQuMjM1NSwgNDcyLjU2MDA2XSxcclxuICBbMTQ5OS43MDE3LCA0NzYuNTE2Ml0sXHJcbiAgWzE0OTUuODM3NSwgNDcyLjM3NTgyXSxcclxuICBbMTQ5NS4wNDY5LCA0NjcuNjYyOV0sXHJcbiAgWzE0OTIuODQxMiwgNDYzLjA4ODY4XSxcclxuICBbMTQ4OS43NDI2LCA0NjYuODU1MTZdLFxyXG4gIFsxNDg1Ljg2MDgsIDQ3MC4xMzRdLFxyXG4gIFsxNDkwLjc3MiwgNDcyLjE4MTU4XSxcclxuICBbMTQ4OS41MjczLCA0NzcuNTIyMzRdLFxyXG4gIFsxNDg0LjY3NzUsIDQ3OS42NzE1N10sXHJcbiAgWzE0ODcuODA3LCA0ODMuNDE0MThdLFxyXG4gIFsxNDk0LjA1NjYsIDQ4MS45NTM1NV0sXHJcbiAgWzE0OTQuNTI1NiwgNDc2LjgxOTUyXSxcclxuICBbMTQ4NS4yNTE1LCA0NzQuOTIyOTRdLFxyXG4gIFsxNDgxLjA3OTYsIDQ3MS41OTczOF0sXHJcbiAgWzE0ODAuNTczNiwgNDc2LjE2MTkzXSxcclxuICBbMTQ3OS4zNDE4LCA0ODAuMTEzNzddLFxyXG4gIFsxNDgxLjc0NDksIDQ4My4wNDk4N10sXHJcbiAgWzE0NzcuMTA2NywgNDg0Ljg0MDgyXSxcclxuICBbMTQ3MS43OTM2LCA0ODQuNzQzODddLFxyXG4gIFsxNDY4Ljk0NTEsIDQ4OC4wOTY4Nl0sXHJcbiAgWzE0NjYuNDg2MywgNDkxLjA3MzFdLFxyXG4gIFsxNDYyLjM5NzEsIDQ4OS45MjkxNF0sXHJcbiAgWzE0NTkuMTI5NSwgNDkyLjExNTddLFxyXG4gIFsxNDU1Ljg2MzMsIDQ5NC40MDc0XSxcclxuICBbMTQ1Mi4xMDU4LCA0OTIuNTE5MTddLFxyXG4gIFsxNDQ3LjY4MDcsIDQ5MS44NDg4Ml0sXHJcbiAgWzE0NDkuNDIxOCwgNDgyLjUwODI0XSxcclxuICBbMTQ1NC42NjMxLCA0NzQuNDU0MzVdLFxyXG4gIFsxNDUyLjg2MjUsIDQ3OC44MTE1Ml0sXHJcbiAgWzE0NTQuNzA5MiwgNDgzLjQzNTA2XSxcclxuICBbMTQ1OC44ODk2LCA0ODYuNDczMTRdLFxyXG4gIFsxNDU1LjIyOTcsIDQ4OC43MjU2XSxcclxuICBbMTQ1MC45OTY2LCA0ODcuNDc0ODJdLFxyXG4gIFsxNDQ2LjM5NTMsIDQ4Ny4yMzY1XSxcclxuICBbMTQzNi41OTU1LCA0OTAuMjA2NzNdLFxyXG4gIFsxNDQyLjAzOTYsIDQ5MC4yMjU4XSxcclxuICBbMTQ0MC4wODAyLCA0OTQuNjg3MV0sXHJcbiAgWzE0NDQuMzUzOCwgNDk1LjI0MTldLFxyXG4gIFsxNDUwLjEwOTcsIDQ5Ni44NjU4XSxcclxuICBbMTQ0NS44MDM3LCA0OTkuNTJdLFxyXG4gIFsxNDQxLjQ4LCA1MDIuMzEzNDVdLFxyXG4gIFsxNDM4LjM2MjMsIDQ5OC45MjkzXSxcclxuICBbMTQzNS40NjM5LCA0OTQuODQ2NTNdLFxyXG4gIFsxNDMxLjY0OTQsIDQ5Mi4zMzYzNl0sXHJcbiAgWzE0MjguOTI3LCA0OTYuMzU1OV0sXHJcbiAgWzE0MzMuMjg4LCA0OTguNTg2NzNdLFxyXG4gIFsxNDMxLjAzMDMsIDUwMi4zNjRdLFxyXG4gIFsxNDM1LjkxNTMsIDUwMy4yNzk2Nl0sXHJcbiAgWzE0MzguOTgxMiwgNTA3LjQwMTkyXSxcclxuICBbMTQ0NC41MjAzLCA1MDguNDIxOTddLFxyXG4gIFsxNDQ2Ljc1NzYsIDUwNC4zMDE1N10sXHJcbiAgWzE0NTEuNTEwNiwgNTAyLjEyNzhdLFxyXG4gIFsxNDU1LjA0MTEsIDQ5OS4xNjM5XSxcclxuICBbMTQ1OS42OTA0LCA0OTguMjc3MDRdLFxyXG4gIFsxNDYzLjM1NjQsIDQ5NS4xMzY4XSxcclxuICBbMTQ2NC44MjQzLCA1MDEuMDU4MDddLFxyXG4gIFsxNDY0Ljg5MTEsIDUwNy40MjAzNV0sXHJcbiAgWzE0NTguNDQxMiwgNTA0LjgwMTI0XSxcclxuICBbMTQ1Mi4yMDAxLCA1MDcuMzc4XSxcclxuICBbMTQ0OS4yMjMsIDUxMi40NTRdLFxyXG4gIFsxNDQwLjQyNTQsIDUxMi43NDI4XSxcclxuICBbMTQzNy4xNzIsIDUxNi43NzczNF0sXHJcbiAgWzE0MzQuMzcwMSwgNTEyLjQ0MjFdLFxyXG4gIFsxNDMzLjc0MzcsIDUwNy44NTQ4M10sXHJcbiAgWzE0MjkuMzEzMiwgNTA2LjU5NTAzXSxcclxuICBbMTQyNC44NTcyLCA1MDYuNzkzM10sXHJcbiAgWzE0MjguNTA5OCwgNTExLjQ4NDZdLFxyXG4gIFsxNDMxLjUxMzUsIDUxNi42MTIzXSxcclxuICBbMTQzMS43NjksIDUyNC41MTExXSxcclxuICBbMTQzNC4zMzc5LCA1MjEuMTE2MTVdLFxyXG4gIFsxNDM4LjczMDcsIDUyMi4wMjc4M10sXHJcbiAgWzE0NDIuMzgxMiwgNTE5LjA5NzFdLFxyXG4gIFsxNDQ1LjkzNDQsIDUxNi4yMjk3NF0sXHJcbiAgWzE0NDguNjQ4NiwgNTIyLjI3MDddLFxyXG4gIFsxNDQzLjk1NjUsIDUyNC43MjA2NF0sXHJcbiAgWzE0NTUuMDM1MywgNTI2LjczOTI2XSxcclxuICBbMTQ0OS4wODI1LCA1MjguNzg1MTZdLFxyXG4gIFsxNDQzLjc5MTMsIDUzMC45NzldLFxyXG4gIFsxNDM1LjQ5MiwgNTI3Ljk1ODZdLFxyXG4gIFsxNDM5LjY5NzksIDUyNy4wODY5XSxcclxuICBbMTQzOC44MTM2LCA1MzMuNTAwMjRdLFxyXG4gIFsxNDMzLjk0NTQsIDUzMi44MzU3XSxcclxuICBbMTQzMC41NjE4LCA1MzYuMDUyM10sXHJcbiAgWzE0MzAuNjMzLCA1MjguOTUwNF0sXHJcbiAgWzE0MjcuNDYzNiwgNTMxLjgzMDU3XSxcclxuICBbMTQyMi45Mzg3LCA1MzMuMjI4N10sXHJcbiAgWzE0MTguMzMzOSwgNTM3LjI3NTFdLFxyXG4gIFsxMzkyLjUzMDgsIDUzMy45NTQyXSxcclxuICBbMTM5OS41NTU0LCA1MzEuMTI3N10sXHJcbiAgWzEzOTUuMDkzMywgNTI3Ljg5NDRdLFxyXG4gIFsxMzk0LjUwNjMsIDUyMy4yMDgyNV0sXHJcbiAgWzEzOTYuNTMzLCA1MTkuMDc2NV0sXHJcbiAgWzE0MDAuMjY4MywgNTIzLjY0NzQ2XSxcclxuICBbMTQwMS4zNjcyLCA1MTguMDkxM10sXHJcbiAgWzEzOTguOTMwMiwgNTE1LjA3OF0sXHJcbiAgWzEzOTUuMjAzNCwgNTE0LjQyODJdLFxyXG4gIFsxMzkyLjM2NTcsIDUxNi4zMjldLFxyXG4gIFsxMzkyLjY2NzYsIDUwNy4yMDY0Ml0sXHJcbiAgWzEzOTIuMTA2LCA1MTEuMzgwNTVdLFxyXG4gIFsxMzk2LjcyNDksIDUxMC45MzY5OF0sXHJcbiAgWzEzOTkuNzMzLCA1MDguNTM1NjRdLFxyXG4gIFsxNDAxLjYxNiwgNTEyLjA5NDg1XSxcclxuICBbMTQwOS4yMDUsIDUxMi42MzY4NF0sXHJcbiAgWzE0MDguOTIyNCwgNTA3Ljg1MDA3XSxcclxuICBbMTQxMC45ODM2LCA1MDQuNDU2NDhdLFxyXG4gIFsxNDEyLjg4NzgsIDUxMC44OTIzXSxcclxuICBbMTQxMy41NDk2LCA1MTUuNjU4XSxcclxuICBbMTQxNS44NDc3LCA1MjAuMTcxXSxcclxuICBbMTQxNy45OTcxLCA1MjQuNjMwNl0sXHJcbiAgWzE0MjIuNzY3OCwgNTIyLjMwNDI2XSxcclxuICBbMTQyMi4zNDYzLCA1MTcuOTA5Ml0sXHJcbiAgWzE0MTguNTIyMSwgNTE2LjQ1ODFdLFxyXG4gIFsxNDE3Ljc3NjksIDUxMS45MTQ3M10sXHJcbiAgWzE0MjIuNTkzNSwgNTExLjc5NjAyXSxcclxuICBbMTQyNi4zMTA0LCA1MTUuNzYzMl0sXHJcbiAgWzE0MjguMzEyMywgNTIwLjUyNDldLFxyXG4gIFsxNDI3LjAzNDIsIDUyNS41OTMyNl0sXHJcbiAgWzE0MjIuODE4OCwgNTI3LjkxNTVdLFxyXG4gIFsxNDE3Ljg4ODcsIDUzMC43NTY2XSxcclxuICBbMTQxMy4xODQxLCA1MjkuMjE0NV0sXHJcbiAgWzE0MTIuNDE3NSwgNTI0LjE4MTE1XSxcclxuICBbMTQxMC4zNTA1LCA1MjAuMzkxOV0sXHJcbiAgWzE0MDkuMDIwOCwgNTE2LjU5NjFdLFxyXG4gIFsxNDA1Ljg2NzksIDUyMy43MjQ1XSxcclxuICBbMTQwOC41NjY0LCA1MjguNDgzNjRdLFxyXG4gIFsxNDAzLjk0ODcsIDUyOS4wNzU3XSxcclxuICBbMTQwNS4yMDk0LCA1MTkuNDExNV0sXHJcbiAgWzE0MDQuOTQzMiwgNTE0LjgwMzNdLFxyXG4gIFsxNDA1LjU3NSwgNTEwLjU3MDk4XSxcclxuICBbMTQwMy43MTgzLCA1MDYuOTYwMzNdLFxyXG4gIFsxNDA1LjczMTIsIDUwMy41NzE1XSxcclxuICBbMTQwNy41MzEyLCA1MDAuMDQ5MDRdLFxyXG4gIFsxNDA1LjYwNDcsIDQ5Ni4xMTA1M10sXHJcbiAgWzE0MDEuNjY3NywgNDk0LjA5OTU4XSxcclxuICBbMTQwMS40NjQ2LCA0OTcuODQzODRdLFxyXG4gIFsxNDAxLjc2NTUsIDUwMS4xNTUxNV0sXHJcbiAgWzEzOTkuODM3NCwgNTA0LjMyODY3XSxcclxuICBbMTM5Ni4xMDksIDUwNi4xOTQ0M10sXHJcbiAgWzEzOTIuOTgwNywgNTAyLjQ1MV0sXHJcbiAgWzEzOTYuNTc0MiwgNTAwLjYyNDk3XSxcclxuICBbMTM5Ny4zMzgsIDQ5Ni40MDM5XSxcclxuICBbMTQwMC40OTYsIDQ5MC4yODgyN10sXHJcbiAgWzE0MDUuMDMzNiwgNDkwLjc3NTRdLFxyXG4gIFsxNDA5LjE1NDUsIDQ5Mi4wMDcwMl0sXHJcbiAgWzE0MTEuOTI2MywgNTAwLjExOTM1XSxcclxuICBbMTQxNS40ODA2LCA1MDcuNjg1NzZdLFxyXG4gIFsxNDIwLjA2NjksIDUwNi4yNDc0XSxcclxuICBbMTQxNS45MjkxLCA1MDIuOTc0NzNdLFxyXG4gIFsxNDE1LjI3ODYsIDQ5Ny41ODg2XSxcclxuICBbMTQxOC45NTgsIDQ5OC42MjEyMl0sXHJcbiAgWzE0MjIuNDc5MiwgNTAxLjMzOV0sXHJcbiAgWzE0MjYuNzE0LCA1MDAuNTY3OF0sXHJcbiAgWzE0MTkuNjQ1NiwgNDkxLjY3MTM2XSxcclxuICBbMTQyMi43OTY4LCA0OTUuNzIzMzZdLFxyXG4gIFsxNDI1Ljk5NywgNDkxLjk0NzQ1XSxcclxuICBbMTQyNC4xOTE4LCA0ODcuMjY5NTNdLFxyXG4gIFsxNDE5LjA1NTIsIDQ4Ni4zNTQ3NF0sXHJcbiAgWzE0MTQuMTgzNywgNDg0LjQyNTYzXSxcclxuICBbMTQxNC4wNzYyLCA0ODkuNDI1NjNdLFxyXG4gIFsxNDE0LjgxODEsIDQ5My42Mjk4Ml0sXHJcbiAgWzE0MTAuMzQ3MiwgNDk1Ljg3ODAyXSxcclxuICBbMTQwOS4zNjg5LCA0ODcuNjAzXSxcclxuICBbMTQwNS4wMzc2LCA0ODUuNDI0XSxcclxuICBbMTQwMS44NDk0LCA0ODYuNzg4Ml0sXHJcbiAgWzEzOTguMDIyLCA0ODUuODc2NzddLFxyXG4gIFsxMzk0Ljc5NywgNDg4LjQ2MDQ1XSxcclxuICBbMTM5Ny4zMjA2LCA0OTIuMTYyOV0sXHJcbiAgWzEzOTMuMTY5NCwgNDkyLjY1OTI3XSxcclxuICBbMTM5Mi42NTY2LCA0OTYuNDg5MDddLFxyXG4gIFsxMzkwLjAwMDIsIDQ5OS4wNTQyNl0sXHJcbiAgWzEzODYuMTgxMiwgNDk3LjI1NDE1XSxcclxuICBbMTM4OC4xMDA4LCA0OTMuMDcxNTNdLFxyXG4gIFsxMzkwLjE5NzgsIDQ4OS4wOTQ3M10sXHJcbiAgWzEzOTMuMTcxNiwgNDg0LjMyMzE4XSxcclxuICBbMTM4NC42MDUyLCA0ODcuMzkwNV0sXHJcbiAgWzEzODMuNjY5OSwgNDkxLjMyNjg0XSxcclxuICBbMTM4Mi43NjEsIDQ5NS40MzU1XSxcclxuICBbMTM3OS40OTIxLCA0OTEuODU2Ml0sXHJcbiAgWzEzODAuMDM3LCA0ODcuMDgwMjZdLFxyXG4gIFsxMzc2LjA1NjMsIDQ4OS44Mjc5N10sXHJcbiAgWzEzNzcuNjIyNCwgNDk1LjM2MTQyXSxcclxuICBbMTM3OS45MDc4LCA0OTguNTU3NTZdLFxyXG4gIFsxMzgyLjIzMjksIDUwMS41NjY3N10sXHJcbiAgWzEzODYuMTI2OCwgNTAxLjUzMTg2XSxcclxuICBbMTM4OS4wNjg4LCA1MDMuOTQ4NTVdLFxyXG4gIFsxMzg4LjkzNjksIDUwNy44MjUyXSxcclxuICBbMTM4Ny4zMTI0LCA1MTAuNjI2NDZdLFxyXG4gIFsxMzg4LjY2MDQsIDUxNC45MTA5NV0sXHJcbiAgWzEzODUuNTcxOSwgNTE4LjQwODJdLFxyXG4gIFsxMzkwLjU0NDksIDUxOS43NzQ5XSxcclxuICBbMTM4My4xNjk5LCA1MjIuMTg1MDZdLFxyXG4gIFsxMzgzLjgxNTQsIDUyNy41MDA4NV0sXHJcbiAgWzEzNzkuMTcwMiwgNTI3Ljg5NTE0XSxcclxuICBbMTM3OC4xMDc5LCA1MjIuOTE5MDddLFxyXG4gIFsxMzc4Ljk5NTQsIDUxOC4yNTc3XSxcclxuICBbMTM4MS45NTQzLCA1MTUuNjIzOF0sXHJcbiAgWzEzODQuNzIyNCwgNTEzLjMwNTA1XSxcclxuICBbMTM4Mi4zOTk1LCA1MDkuNjMxMV0sXHJcbiAgWzEzODQuNzUyMiwgNTA1Ljk1OTA4XSxcclxuICBbMTM4MC4xNDU1LCA1MDUuNTc3ODJdLFxyXG4gIFsxMzc3LjMwMzIsIDUwMi4xODgyM10sXHJcbiAgWzEzNzUuMzUxNCwgNDk4LjkwNjIyXSxcclxuICBbMTM3Mi4wMTgxLCA0OTcuMTA3MThdLFxyXG4gIFsxMzc0LjAyODMsIDQ5My41Mzg1NF0sXHJcbiAgWzEzNzEuMDQzNSwgNDkwLjk3N10sXHJcbiAgWzEzNjcuNTIwNSwgNDkwLjM4NzA1XSxcclxuICBbMTM2NC4wODQsIDQ5Mi4zMTFdLFxyXG4gIFsxMzYzLjY1NDIsIDQ5Ni4xNjk0M10sXHJcbiAgWzEzNjAuMzUwMiwgNDkwLjM3ODc1XSxcclxuICBbMTM2NS4yMjU1LCA0ODYuODAyMjVdLFxyXG4gIFsxMzY5LjYxMTUsIDQ4NS4yMzI4XSxcclxuICBbMTM3Mi42MjgsIDQ4Ny43NzEzNl0sXHJcbiAgWzEzNjEuMzgxMSwgNDg1LjE4MzhdLFxyXG4gIFsxMzU2LjkwMjEsIDQ4NS4wNDcxMl0sXHJcbiAgWzEzNTIuMTAwMywgNDg3LjEzMzM2XSxcclxuICBbMTM0OC4zMDgsIDQ4OS41MTE4NF0sXHJcbiAgWzEzNDcuNjEyOCwgNDg0Ljk5ODAyXSxcclxuICBbMTM0NC40OTMzLCA0ODcuNzcwOTRdLFxyXG4gIFsxMzQ3LjEzOTQsIDQ5My4xNV0sXHJcbiAgWzEzNDMuNTk5MiwgNDkxLjMwODNdLFxyXG4gIFsxMzQyLjUxMzEsIDQ5OC4yMzIzNl0sXHJcbiAgWzEzNDMuODE5NiwgNTAxLjkwNDAyXSxcclxuICBbMTM0My42NDE0LCA0OTQuODQ4MzZdLFxyXG4gIFsxMzQ2Ljg5NzIsIDQ5Ny40MjE3Ml0sXHJcbiAgWzEzNDguNDAyNiwgNTAxLjA3MjI3XSxcclxuICBbMTM1MC45MTUsIDUwNS41NjUwNl0sXHJcbiAgWzEzNDYuOTYxOSwgNTA1LjAzMTc0XSxcclxuICBbMTM1My44ODgsIDUwMS44NzQ4OF0sXHJcbiAgWzEzNTEuOTE0MywgNDk4LjU2MjQ0XSxcclxuICBbMTM1MC40ODk0LCA0OTUuMDUwMjNdLFxyXG4gIFsxMzUyLjA4NCwgNDkxLjU3MjhdLFxyXG4gIFsxMzU1LjIyMDIsIDQ5NC41MjVdLFxyXG4gIFsxMzU2LjE4MzgsIDQ4OS42OTc3Ml0sXHJcbiAgWzEzNTkuNTYwOSwgNDk1LjExMDU3XSxcclxuICBbMTM1Ny4xMzExLCA0OTguNjM4OThdLFxyXG4gIFsxMzU4LjU5MDMsIDUwMi43Mjg3M10sXHJcbiAgWzEzNjIuNDA1NiwgNTA0LjUwMDZdLFxyXG4gIFsxMzYyLjQyMzgsIDQ5OS45NzA5Ml0sXHJcbiAgWzEzNTUuMjgxNSwgNTA2LjAwOTU4XSxcclxuICBbMTM1OC43NDU3LCA1MDguMzc0MDJdLFxyXG4gIFsxMzYzLjU2NjMsIDUwOC43ODUxXSxcclxuICBbMTM2Ni41NzYzLCA1MDUuNDYxMjddLFxyXG4gIFsxMzY3LjI5MTEsIDUwMS44MTQyXSxcclxuICBbMTM2Ny40OTI3LCA0OTguMTI1OTJdLFxyXG4gIFsxMzY4Ljc0MywgNDk0LjYzNV0sXHJcbiAgWzEzNzEuODkxNSwgNTAxLjM1MTM4XSxcclxuICBbMTM3MC45MDMyLCA1MDUuNTEzNzZdLFxyXG4gIFsxMzc1LjEzNjUsIDUwNS40Njc1XSxcclxuICBbMTM3Ny40NDYyLCA1MDkuMTczMTZdLFxyXG4gIFsxMzc5LjEzMSwgNTEyLjgxMzIzXSxcclxuICBbMTM3NS4xOTE3LCA1MTQuMTExNzZdLFxyXG4gIFsxMzc0LjEyODUsIDUxOC40MTk4Nl0sXHJcbiAgWzEzNzIuODc2NiwgNTIyLjgxMzVdLFxyXG4gIFsxMzY0LjU2MywgNTI1LjI1NjM1XSxcclxuICBbMTM2OS4yNzY2LCA1MjYuNjMzNl0sXHJcbiAgWzEzNzQuNDY4NCwgNTI4LjA2OTQ2XSxcclxuICBbMTM3MS4wNTc3LCA1MzEuNzc4NDRdLFxyXG4gIFsxMzc4LjQyODMsIDUzMy40NzYxXSxcclxuICBbMTM4NS4zMzI1LCA1MzMuNDE5MjVdLFxyXG4gIFsxMzg4LjYzMTYsIDUyMy43ODI3XSxcclxuICBbMTM4OS4xODQ0LCA1MjguNzU3NDVdLFxyXG4gIFsxMzg2LjczNiwgNTYwLjUwNjddLFxyXG4gIFsxMzgwLjk5OTgsIDU1OC4zNjM5XSxcclxuICBbMTM3NS4yMTQ4LCA1NjEuNjc4MV0sXHJcbiAgWzEzNzMuNzYxOCwgNTY2LjE2MDE2XSxcclxuICBbMTM2OS42NTI2LCA1NjcuMjE0Nl0sXHJcbiAgWzEzNzIuODk5NywgNTcxLjEyMV0sXHJcbiAgWzEzNzIuODMyOCwgNTc1LjUyMzNdLFxyXG4gIFsxMzcxLjUyMjUsIDU3OS41MTQ5NV0sXHJcbiAgWzEzNzIuNTM0NCwgNTgzLjY5NjldLFxyXG4gIFsxMzc2LjQ4MDEsIDU4My42MDU4XSxcclxuICBbMTM3OS42OTE0LCA1ODYuMTkzXSxcclxuICBbMTM3OS43NzI4LCA1OTAuNTU0NDRdLFxyXG4gIFsxMzc1LjgyMjgsIDU5Mi41ODQ3XSxcclxuICBbMTM3MS4yMzA4LCA1OTEuOTQ2XSxcclxuICBbMTM2OS41OTM5LCA1ODcuMTA1N10sXHJcbiAgWzEzNzQuNjQ0MywgNTg4LjAzMzZdLFxyXG4gIFsxMzY2LjY1NTMsIDU5MC41MjgyXSxcclxuICBbMTM2Mi4zOTgsIDU4OS40NTUxXSxcclxuICBbMTM1NC44OTg2LCA1OTEuMzc2MTZdLFxyXG4gIFsxMzU4LjI0NjgsIDU4OC42NjgzM10sXHJcbiAgWzEzNjIuNjI2MywgNTk0LjI2NV0sXHJcbiAgWzEzNjcuMzEwNSwgNTk1LjM2OTRdLFxyXG4gIFsxMzU3LjkxMzEsIDU5NC4xNDgxXSxcclxuICBbMTM1OS42OTI3LCA1OTguNDY2NDNdLFxyXG4gIFsxMzYwLjk1NzgsIDYwMy4xNTU3Nl0sXHJcbiAgWzEzNjQuMzQ4OSwgNTk5LjI4OV0sXHJcbiAgWzEzNjEuNjY1LCA2MDcuNDA3MV0sXHJcbiAgWzEzNjEuNDExNiwgNjExLjYzMDhdLFxyXG4gIFsxMzU2LjcyMjIsIDYxMC4zMDk0XSxcclxuICBbMTM1Mi42MDcyLCA2MTMuMjczNDRdLFxyXG4gIFsxMzQ5LjYwNDcsIDYxNy4xNTY4XSxcclxuICBbMTM1MS4xMTM5LCA2MjEuNzExOF0sXHJcbiAgWzEzNTQuMTM1NywgNjE3Ljc5MjY2XSxcclxuICBbMTM1Ny44NTYsIDYxNC45MDQyXSxcclxuICBbMTM1OC4wODc5LCA2MjAuMDIzODZdLFxyXG4gIFsxMzYxLjQwOTQsIDYxOC4yNDMzXSxcclxuICBbMTM2My40MTc3LCA2MjIuMDU2MTVdLFxyXG4gIFsxMzU1LjMzMiwgNjIzLjAwOTAzXSxcclxuICBbMTM1Mi45MDY0LCA2MjYuMTgxNF0sXHJcbiAgWzEzNDguNjI2MSwgNjI2LjIyNjI2XSxcclxuICBbMTM0My45Mzc2LCA2MjQuNzY1MjZdLFxyXG4gIFsxMzQ2LjUxMzQsIDYyMS41NTM2XSxcclxuICBbMTM0NS4wNzk1LCA2MTcuNjQzODZdLFxyXG4gIFsxMzQ2LjI0NTEsIDYxMy44NTA2NV0sXHJcbiAgWzEzNDguNzc3OCwgNjEwLjc1OTVdLFxyXG4gIFsxMzUyLjEzNTYsIDYwNy44MDA5Nl0sXHJcbiAgWzEzNDcuNDU3NSwgNjA2LjAyMV0sXHJcbiAgWzEzNDUuNTkyLCA2MDEuOTM2OTVdLFxyXG4gIFsxMzUxLjE4MzEsIDYwMi40NjU5NF0sXHJcbiAgWzEzNTYuMzI2NCwgNjA2LjAyMzU2XSxcclxuICBbMTM1Ni4zNDg0LCA2MDIuMDg1Nl0sXHJcbiAgWzEzNTQuMzk5OCwgNTk4LjM5OTVdLFxyXG4gIFsxMzQ4LjUyOTQsIDU5Ny45NzY5XSxcclxuICBbMTM1Mi4wODQ1LCA1OTQuOTU2Ml0sXHJcbiAgWzEzNTAuNDMxNCwgNTkwLjg5MTk3XSxcclxuICBbMTM0Ny4xMzQ4LCA1ODguNDAwNzZdLFxyXG4gIFsxMzQ1LjA4OTQsIDU4NC42NzQ4N10sXHJcbiAgWzEzNDIuNDIzNiwgNTg4Ljk4OTZdLFxyXG4gIFsxMzQ2LjYxNywgNTkzLjM2Mzk1XSxcclxuICBbMTM1My4wNTMsIDU4Ny4zNzUxXSxcclxuICBbMTM1NS40MjQxLCA1ODQuMDY1NF0sXHJcbiAgWzEzNjAuMjgwNiwgNTg0LjM1ODNdLFxyXG4gIFsxMzY0Ljg1ODIsIDU4NS4zMjA3XSxcclxuICBbMTM2OC4zNTIsIDU4Mi40MjU3XSxcclxuICBbMTM2NC42NTI4LCA1ODAuMzA3M10sXHJcbiAgWzEzNjAuOTkyMiwgNTc5LjgxMjVdLFxyXG4gIFsxMzU5LjI4NCwgNTc1LjY3NDg3XSxcclxuICBbMTM2My44NzYsIDU3NC45NzI0XSxcclxuICBbMTM2Ny42ODA4LCA1NzcuNDE0OV0sXHJcbiAgWzEzNjguODUzMSwgNTczLjQwNjI1XSxcclxuICBbMTM2Ni40MDMsIDU3MC40NzM2M10sXHJcbiAgWzEzNjQuODIzNSwgNTY2LjQ3OTZdLFxyXG4gIFsxMzY0LjA5OSwgNTYyLjMzMDQ0XSxcclxuICBbMTM2Ni40MjkyLCA1NTcuNTU0Ml0sXHJcbiAgWzEzNjkuNTQ3OSwgNTYyLjA4OTk3XSxcclxuICBbMTM3MS45MjMxLCA1NTYuOTU4OF0sXHJcbiAgWzEzNzcuNzE0LCA1NTMuMTQ4NV0sXHJcbiAgWzEzNzYuMzkzLCA1NTcuNTQyMl0sXHJcbiAgWzEzNzMuNTQwOCwgNTUwLjE3NDldLFxyXG4gIFsxMzY2LjA2NiwgNTQyLjYxMjI0XSxcclxuICBbMTM2Ni4yNDQ5LCA1MzQuNzIwNjRdLFxyXG4gIFsxMzY0LjU0ODYsIDUzMC4wMTU4N10sXHJcbiAgWzEzNTkuOTg2OCwgNTMzLjU4NjczXSxcclxuICBbMTM1Ni40OTAyLCA1MzAuMzAxOV0sXHJcbiAgWzEzNTkuNzI3OSwgNTI2LjY4NTRdLFxyXG4gIFsxMzU3LjY4MywgNTIxLjk0NjJdLFxyXG4gIFsxMzYyLjM5NzcsIDUyMS4yMDU5M10sXHJcbiAgWzEzNjQuNzA3LCA1MTYuODkxMzZdLFxyXG4gIFsxMzY3Ljc2MzQsIDUyMS4yOTQyXSxcclxuICBbMTM2OS41NTg2LCA1MTcuMzEyNF0sXHJcbiAgWzEzNzAuNjk3MSwgNTEzLjM1MjIzXSxcclxuICBbMTM3My4xMjYsIDUwOS43MjAyOF0sXHJcbiAgWzEzNjguNTIyLCA1MDkuMjQ5ODhdLFxyXG4gIFsxMzY2LjEwMzYsIDUxMi44MDUzXSxcclxuICBbMTM2MS4zNTQ0LCA1MTIuNjk1N10sXHJcbiAgWzEzNTkuOTI0MiwgNTE3LjExNDldLFxyXG4gIFsxMzU1LjIyMTQsIDUxNy40Mjg4XSxcclxuICBbMTM1MS4zOTQ3LCA1MTQuNjE1N10sXHJcbiAgWzEzNTYuNjU4OSwgNTEzLjA5NDRdLFxyXG4gIFsxMzUzLjIzMTcsIDUxMC4xNjkyNV0sXHJcbiAgWzEzNDguNDMyMSwgNTEwLjQ1OTE3XSxcclxuICBbMTM0NC4yNDM3LCA1MDcuODk0NjJdLFxyXG4gIFsxMzQwLjY5MzQsIDUwNC41ODg2OF0sXHJcbiAgWzEzMzkuNTM2NywgNTA5LjAzOThdLFxyXG4gIFsxMzM0Ljk2NjYsIDUwOS4zNjU4XSxcclxuICBbMTMzNi4wNzAzLCA1MDQuNDk3NTZdLFxyXG4gIFsxMzM4LjYyMzcsIDUwMC4wNDkzXSxcclxuICBbMTMzNi4yNDI3LCA0OTYuMzIwMl0sXHJcbiAgWzEzMzkuODAyLCA0OTQuNTM5NV0sXHJcbiAgWzEzMzcuMDIxMiwgNDkwLjc0NDkzXSxcclxuICBbMTM0MC40OTgsIDQ4OS40NDk5NV0sXHJcbiAgWzEzMzguMjM0MSwgNDg2LjA0OTM4XSxcclxuICBbMTMzNC41NjUzLCA0ODYuMzYyNF0sXHJcbiAgWzEzMzEuNDg3MiwgNDg4LjE0NDEzXSxcclxuICBbMTMyNy4zOTM2LCA0ODguMDUwMDJdLFxyXG4gIFsxMzIyLjkzOTUsIDQ4OC4yMzEzOF0sXHJcbiAgWzEzMjUuMTI1OSwgNDgzLjAyMTY3XSxcclxuICBbMTMyMC43ODE0LCA0ODQuMDQxNDRdLFxyXG4gIFsxMzE3LjIwNjUsIDQ4Ny4zMzA1XSxcclxuICBbMTMxOS43MDM2LCA0OTIuNDI5MjZdLFxyXG4gIFsxMzE2LjE0ODksIDQ5Ni40NjExOF0sXHJcbiAgWzEzMTEuNzEwNCwgNDk4LjcxMDc1XSxcclxuICBbMTMwNi45NTI5LCA0OTkuNzQ1NTddLFxyXG4gIFsxMzAxLjY0NTQsIDUwMi4xMzExNl0sXHJcbiAgWzEzMDIuNjEyNCwgNTA3LjE5NzQ4XSxcclxuICBbMTMwMS42NjksIDUxMi4yMDEzXSxcclxuICBbMTMwMS4xMTE2LCA1MTYuOTE2OV0sXHJcbiAgWzEzMDUuNzI5NiwgNTE1LjYyNjFdLFxyXG4gIFsxMzA2LjMzNDcsIDUxMC41Nzg4XSxcclxuICBbMTMwOC4wOTU4LCA1MDUuOTIyMThdLFxyXG4gIFsxMzEwLjczMDEsIDUxMi40NDY5Nl0sXHJcbiAgWzEzMTAuNzA5LCA1MTcuMDczMjRdLFxyXG4gIFsxMzA3Ljg0NzgsIDUxOS44NDc3XSxcclxuICBbMTMwNC4xODg1LCA1MjEuNTQ0N10sXHJcbiAgWzEyOTcuODM4NCwgNTE4Ljk2NzA0XSxcclxuICBbMTI5Ni4wMTU5LCA1MjEuOTU5Nl0sXHJcbiAgWzEzMDAuNjA3NCwgNTIzLjA0MTI2XSxcclxuICBbMTMwMC41MzAzLCA1MjcuOTUwN10sXHJcbiAgWzEyOTYuNzEsIDUyNS43MjE5XSxcclxuICBbMTI5MS45MTU0LCA1MjcuMzM1M10sXHJcbiAgWzEyODcuOTkxMywgNTI4Ljc2MDU2XSxcclxuICBbMTI4NC44Mjk3LCA1MjUuNDYyNjVdLFxyXG4gIFsxMjg3LjQ2LCA1MjAuMjY3NDZdLFxyXG4gIFsxMjg4LjYyNTIsIDUyNC4xMDI0XSxcclxuICBbMTI5Mi40NTQxLCA1MjMuNDc3NjZdLFxyXG4gIFsxMjkyLjM1NDYsIDUxOS40MzAwNV0sXHJcbiAgWzEyOTAuNjUxLCA1MTUuODg5MzRdLFxyXG4gIFsxMjk1LjQzNjUsIDUxNS41ODk0XSxcclxuICBbMTI5Ny4zMzEzLCA1MTEuNjMwM10sXHJcbiAgWzEyOTcuOTI2NiwgNTA2Ljk4NzVdLFxyXG4gIFsxMjk1LjgzMzEsIDUwMi42NzY4OF0sXHJcbiAgWzEyOTMuMDgzNCwgNTA2LjczOTkzXSxcclxuICBbMTI4OC42NDA2LCA1MDcuOTgwOTNdLFxyXG4gIFsxMjkyLjY5OTgsIDUxMS4zNjkxXSxcclxuICBbMTI4OC40NSwgNTEyLjM3MzY2XSxcclxuICBbMTI4NC44MzMxLCA1MTAuNjM4MjRdLFxyXG4gIFsxMjg2LjAzNTgsIDUxNS43NTUxXSxcclxuICBbMTI4My40NDM1LCA1MTguNjgwN10sXHJcbiAgWzEyODEuOTQ5NiwgNTIyLjMxNzU3XSxcclxuICBbMTI4MC4yNDgzLCA1MjYuMTQzNDNdLFxyXG4gIFsxMjc2LjQzNjQsIDUyNy4zODk2NV0sXHJcbiAgWzEyNzYuNzUxNiwgNTIyLjQ4NzU1XSxcclxuICBbMTI3Ni42MjU3LCA1MTQuMDgxODVdLFxyXG4gIFsxMjcxLjEwNiwgNTE0Ljc3NTZdLFxyXG4gIFsxMjY2Ljg2MjksIDUxNy42NDM0M10sXHJcbiAgWzEyNjQuNjM5LCA1MjEuNTQ2NV0sXHJcbiAgWzEyNjAuMzA1LCA1MjIuNDE3MzZdLFxyXG4gIFsxMjU2LjYxODcsIDUxOS45ODM2NF0sXHJcbiAgWzEyNTYuMzk0NCwgNTE1LjMxNjhdLFxyXG4gIFsxMjU1Ljk4ODIsIDUxMC43NDIyOF0sXHJcbiAgWzEyNTguOTA1LCA1MDcuNDQ3OTRdLFxyXG4gIFsxMjYwLjYyNTEsIDUwMy41NDA3N10sXHJcbiAgWzEyNTguODE5NiwgNDk5LjMwMDY2XSxcclxuICBbMTI1NC4xNjExLCA1MDAuOTMyOThdLFxyXG4gIFsxMjU0LjMxMzcsIDUwNS42MDE4N10sXHJcbiAgWzEyNTAuMDAwOSwgNTA3LjU5OF0sXHJcbiAgWzEyNDguNjI1NiwgNTAzLjA0NzQ1XSxcclxuICBbMTI0OC45MzEzLCA0OTguODA5N10sXHJcbiAgWzEyNTIuNzM5LCA0OTUuOTUzMjVdLFxyXG4gIFsxMjUyLjc4NywgNDkxLjIzNzY3XSxcclxuICBbMTI1NS4wODQyLCA0ODcuMTUzNV0sXHJcbiAgWzEyNDguNTY5MywgNDgxLjYzNzk0XSxcclxuICBbMTI1MC4zNzYsIDQ4Ni4xNjYwMl0sXHJcbiAgWzEyNTMuNzE4NCwgNDgyLjQ5OTYzXSxcclxuICBbMTI1OC42Mzk5LCA0OTAuOTMwMV0sXHJcbiAgWzEyNTcuMzc1MiwgNDk1LjIzODc0XSxcclxuICBbMTI2My4xMjkyLCA0OTQuNDcxNzRdLFxyXG4gIFsxMjYzLjYxMSwgNDg4Ljk0OTk1XSxcclxuICBbMTI1OS4yOTc3LCA0ODUuODA3MjJdLFxyXG4gIFsxMjU2LjA1NjgsIDQ3Ni45NTYxOF0sXHJcbiAgWzEyNTEuMzI1MSwgNDc1LjAxNV0sXHJcbiAgWzEyNDYuNjAxOSwgNDczLjk2MDc1XSxcclxuICBbMTI0NC42MzY2LCA0NzguODY0MDddLFxyXG4gIFsxMjM5LjU0NTksIDQ4NC44Mzk1NF0sXHJcbiAgWzEyMzUuNzIyNCwgNDg2LjM1NzE4XSxcclxuICBbMTIzOC4wOTE4LCA0ODAuODA4NjVdLFxyXG4gIFsxMjI3Ljc3NSwgNDgxLjk1ODIyXSxcclxuICBbMTIyMS45MTY2LCA0ODEuNTE3OV0sXHJcbiAgWzEyMjAuMDY4NiwgNDg1LjkwMDg1XSxcclxuICBbMTIyMi4xNDA0LCA0OTAuMTY4M10sXHJcbiAgWzEyMTcuNDc0MSwgNDkwLjAwMTE2XSxcclxuICBbMTIxMi4wNzE3LCA0OTQuNDcxNjJdLFxyXG4gIFsxMjA4Ljk1MzksIDQ5NS44MTQ2NF0sXHJcbiAgWzEyMDcuNDcxNiwgNDk5LjE0MThdLFxyXG4gIFsxMjA3LjEyMjksIDUwMi44MDQ4N10sXHJcbiAgWzEyMDcuNDEyOCwgNTA2LjczODk1XSxcclxuICBbMTIwNC4wOTU3LCA1MDkuNDIxODhdLFxyXG4gIFsxMjAyLjQ4MTIsIDQ5OC4zNjc4XSxcclxuICBbMTIwMi41MDYxLCA1MDIuODg1NzRdLFxyXG4gIFsxMjAwLjI0MDgsIDUwNi43NjA5M10sXHJcbiAgWzExOTUuMzE2OSwgNTA3LjMwOTNdLFxyXG4gIFsxMTk4LjMwMiwgNTExLjUyODc1XSxcclxuICBbMTE5My45MDQ0LCA1MTIuNDUwMjZdLFxyXG4gIFsxMTg4LjYzNDMsIDUxMi44MjE2XSxcclxuICBbMTE5MC44NDk3LCA1MDguNjY5XSxcclxuICBbMTE4OC4yNzM4LCA1MDUuMzQzOTNdLFxyXG4gIFsxMTg3LjM3NDMsIDUwMS41NzU2NV0sXHJcbiAgWzExODYuNDAwNCwgNDk3LjQ3MTA3XSxcclxuICBbMTE4OS42NjUyLCA0OTUuMTI1MV0sXHJcbiAgWzExOTEuNjUzOCwgNDk5LjIxMDRdLFxyXG4gIFsxMTkyLjc5MzgsIDUwMy4yMzI2XSxcclxuICBbMTE5Ny41MTU3LCA1MDIuNjQyNThdLFxyXG4gIFsxMTk3LjQ0NjQsIDQ5OC4zMDIzN10sXHJcbiAgWzExOTQuMzUxNiwgNDk1LjU2NDY3XSxcclxuICBbMTE5Ny4yMTA4LCA0OTIuMDc4M10sXHJcbiAgWzEyMDAuNCwgNDk0LjQwOTNdLFxyXG4gIFsxMjA1LjA4NDcsIDQ5NC4zNzQ2M10sXHJcbiAgWzEyMDguMTExMywgNDkwLjU2NzJdLFxyXG4gIFsxMjEzLjI5MjYsIDQ5MC43MTQzXSxcclxuICBbMTIxMS42MTkzLCA0ODcuMDMwNThdLFxyXG4gIFsxMjE1LjkxODYsIDQ4NC41MjA2XSxcclxuICBbMTIxMy45Njk1LCA0NzUuODI0MTZdLFxyXG4gIFsxMjI1LjE0OTMsIDQ4NS45NDI3Ml0sXHJcbiAgWzEyMzEuMDkxMywgNDg1Ljc0NDU3XSxcclxuICBbMTIyNy44NDIzLCA0OTAuMDg4NV0sXHJcbiAgWzEyMzIuNTkyMywgNDkwLjY2NDUyXSxcclxuICBbMTIzNy4zMzksIDQ5Mi42MDk4Nl0sXHJcbiAgWzEyNDAuNjY3NSwgNDg5LjA0MjQ1XSxcclxuICBbMTI0Mi44MTM4LCA0OTMuMzQ0NDJdLFxyXG4gIFsxMjQzLjQyNTMsIDQ5OC44OTUxNF0sXHJcbiAgWzEyMzguMDA4OCwgNDk3Ljc2NjA4XSxcclxuICBbMTIzOS4xNTMzLCA1MDIuNzc0MTRdLFxyXG4gIFsxMjM1Ljc1NjEsIDUwNi4zOTg2NV0sXHJcbiAgWzEyMzEuMjAwNiwgNTA3LjM3NTNdLFxyXG4gIFsxMjI2Ljg1MzgsIDUwNS41Njk2N10sXHJcbiAgWzEyMjIuMDgyLCA1MDcuNTY5NzZdLFxyXG4gIFsxMjE3Ljg1NzksIDUwNC42Mjc5M10sXHJcbiAgWzEyMTguNTMsIDQ5OS43OTAwNF0sXHJcbiAgWzEyMjMuNTE4OCwgNTAwLjk3NjI2XSxcclxuICBbMTIyNy44MTk3LCA0OTUuOTM1Nl0sXHJcbiAgWzEyMjguOTQ2LCA1MDAuNTQyMDVdLFxyXG4gIFsxMjMzLjYwOTUsIDUwMS41NDY2M10sXHJcbiAgWzEyMzIuNzY2MiwgNDk1LjgwMzQ0XSxcclxuICBbMTIyNC42MDIsIDQ5My43OTc1OF0sXHJcbiAgWzEyMjEuMDM3MiwgNDk1LjY4MDNdLFxyXG4gIFsxMjE2LjU2MiwgNDk0LjgyODg2XSxcclxuICBbMTIxMy42NDc2LCA0OTkuMDMxNDZdLFxyXG4gIFsxMjEyLjAyODMsIDUwMi45MzE0Nl0sXHJcbiAgWzEyMTMuMjE5NywgNTA3LjQ1NjEyXSxcclxuICBbMTIxNi41OSwgNTExLjM5OTcyXSxcclxuICBbMTIxOC44NTYxLCA1MTYuMjc2N10sXHJcbiAgWzEyMTIuNDg0OSwgNTE1LjQ0NjE3XSxcclxuICBbMTIwOS4wNjUxLCA1MTkuMzI4M10sXHJcbiAgWzEyMDQuMzkyMSwgNTE4Ljc4MjZdLFxyXG4gIFsxMjA2LjkyODYsIDUxNC42MDIyM10sXHJcbiAgWzEyMDkuODUwMSwgNTExLjAwMjE0XSxcclxuICBbMTIwMi42MDAxLCA1MTMuMTk5XSxcclxuICBbMTIwMC40MDI3LCA1MTYuNDM0NjNdLFxyXG4gIFsxMTk2LjIxMzQsIDUxNy40ODk2XSxcclxuICBbMTE5MS45MTYzLCA1MTYuNjQ2XSxcclxuICBbMTE5MS43MjcyLCA1MjEuOTM2NjVdLFxyXG4gIFsxMTkzLjkzMzMsIDUyNy42MzE3XSxcclxuICBbMTE5Ni4zMjk4LCA1MjMuNTE1NTZdLFxyXG4gIFsxMjAwLjE5MzYsIDUyMS4xNTMyXSxcclxuICBbMTIwNS4yOTM1LCA1MjMuNDQzMjRdLFxyXG4gIFsxMjEwLjU0NTcsIDUyOS4zNzM1NF0sXHJcbiAgWzEyMTQuNDc3OSwgNTMyLjM4MzRdLFxyXG4gIFsxMjE5LjExNiwgNTM1LjAzOThdLFxyXG4gIFsxMjI3LjQ3MiwgNTM2LjcxMzI2XSxcclxuICBbMTIyMy45MDQsIDUzMi45MjE0NV0sXHJcbiAgWzEyMjcuMzk5NCwgNTIzLjY0NTE0XSxcclxuICBbMTIyMi43MDg0LCA1MjYuMDU3MjVdLFxyXG4gIFsxMjI3LjA1NzQsIDUyOS4wMzY4N10sXHJcbiAgWzEyMzAuNzg5MSwgNTMyLjUxNDhdLFxyXG4gIFsxMjMzLjM2NTYsIDUzNy45Mjc4Nl0sXHJcbiAgWzEyNDEuODYwNCwgNTQ0Ljc0MDY2XSxcclxuICBbMTI0Ny4xOTc5LCA1NDYuNDIyN10sXHJcbiAgWzEyNDMuMzY2NywgNTUxLjM2OF0sXHJcbiAgWzEyMzguNzExNCwgNTQwLjUwOTc3XSxcclxuICBbMTIzOS4yNTE2LCA1MzUuOTQ2OV0sXHJcbiAgWzEyMzUuOTgzNiwgNTMzLjIxN10sXHJcbiAgWzEyMzUuMTg2NSwgNTI4Ljg5NDJdLFxyXG4gIFsxMjMxLjY2OTQsIDUyNi42OTg4XSxcclxuICBbMTIzMy42NTM3LCA1MjIuMzA4NjVdLFxyXG4gIFsxMjM5LjIyNDYsIDUyNy42MDYyXSxcclxuICBbMTIzOC45ODgsIDUyMy4xODEzNF0sXHJcbiAgWzEyMzcuNzA3OCwgNTE3LjgzMTJdLFxyXG4gIFsxMjM1LjQwNzYsIDUxMS43MTY1NV0sXHJcbiAgWzEyNDAuOTY5NiwgNTEzLjQ3NDA2XSxcclxuICBbMTIzMy4wMzc4LCA1MTYuMTE0ODddLFxyXG4gIFsxMjI4LjUzMjEsIDUxMi4xOTA3XSxcclxuICBbMTIyMy4zMDk5LCA1MTMuMDM5XSxcclxuICBbMTIyOC44MTc1LCA1MTguNjE0NTZdLFxyXG4gIFsxMjIzLjg2ODMsIDUxOS4xNF0sXHJcbiAgWzEyMTkuNzQ3NywgNTIyLjE0NDUzXSxcclxuICBbMTIxNS45MDcyLCA1MjYuMjM3M10sXHJcbiAgWzEyMTkuNDkyMSwgNTI5Ljg1MDY1XSxcclxuICBbMTIxNS41MDk4LCA1MTkuNTgwMTRdLFxyXG4gIFsxMjEyLjU5MzUsIDUyMi4yOTJdLFxyXG4gIFsxMjA5LjY4MzEsIDUyNS4yOTE2XSxcclxuICBbMTIwOC42OTg3LCA1MzMuODcwMl0sXHJcbiAgWzEyMDQuMjU5NiwgNTMzLjExNzhdLFxyXG4gIFsxMjA1LjA1MDQsIDUyOC41NDMzXSxcclxuICBbMTIwMC42MzMsIDUyNi4xOTI3NV0sXHJcbiAgWzEyMDUuNDM5MiwgNTM5LjU3ODM3XSxcclxuICBbMTE5Ny44NDk2LCA1MzkuMzQ0NF0sXHJcbiAgWzExOTguNzY2NiwgNTMwLjc0NjAzXSxcclxuICBbMTIwMC44Mzg2LCA1MzUuODgxMDRdLFxyXG4gIFsxMjExLjI0NDksIDUzNy41OTY1XSxcclxuICBbMTIxNi4yNTgyLCA1MzkuMTU2NDNdLFxyXG4gIFsxMjExLjgwNTMsIDU0My40MDQ4XSxcclxuICBbMTIxNy42OTI5LCA1NDUuNDgzMTVdLFxyXG4gIFsxMjIyLjMwMTUsIDUzOS42ODA4XSxcclxuICBbMTIyNC4xNDYxLCA1NDUuMzk5OV0sXHJcbiAgWzEyMjkuMTI4MywgNTQyLjE2Nl0sXHJcbiAgWzEyMjkuNDg2MywgNTQ5LjI3NjVdLFxyXG4gIFsxMjM0Ljc3MywgNTQ0LjYzMjc1XSxcclxuICBbMTIzNy4zOTI4LCA1NTAuMDUyN10sXHJcbiAgWzEyMzkuMDAxMiwgNTU3LjMxMzVdLFxyXG4gIFsxMjMyLjk4MjMsIDU1NC43MTc5XSxcclxuICBbMTI0Mi4yNDQ0LCA1NjEuNTI1NF0sXHJcbiAgWzEyMzcuNjg4NSwgNTY0Ljg4NjRdLFxyXG4gIFsxMjMyLjgwMywgNTYxLjI5OTddLFxyXG4gIFsxMjMxLjgyOTEsIDU2Ny41NjgxXSxcclxuICBbMTI0MS4wODgsIDU2OS4wMTIxNV0sXHJcbiAgWzEyNDAuNjk4OSwgNTc3LjA3MTVdLFxyXG4gIFsxMjM2LjA3NjUsIDU3Ni43MjgxNV0sXHJcbiAgWzEyMzYuNDcwNSwgNTcxLjU0Mjg1XSxcclxuICBbMTIyOS42NTE5LCA1NzMuNDcyOTZdLFxyXG4gIFsxMjMyLjg0OCwgNTgwLjM5ODhdLFxyXG4gIFsxMjMyLjA3MjUsIDU4Ni4zODMzXSxcclxuICBbMTIyNi42Nzk5LCA1OTAuMDc0OF0sXHJcbiAgWzEyMjkuMTExOCwgNjA1LjQ0Nl0sXHJcbiAgWzEyMzMuMjEzMywgNjA3LjQ0ODVdLFxyXG4gIFsxMjM3LjQ5MzQsIDYwNC4zMjI3XSxcclxuICBbMTI0Mi4xODgyLCA2MDUuMjczNF0sXHJcbiAgWzEyNDYuNDI3LCA2MDMuODUwNDZdLFxyXG4gIFsxMjQ0LjE4NjksIDYwOS4xNTEzN10sXHJcbiAgWzEyNDcuMjg1NiwgNjA3LjcxMTRdLFxyXG4gIFsxMjUwLjc3MDMsIDYwOC40NzQyNF0sXHJcbiAgWzEyNTIuMzIyMywgNjEyLjQ5MjJdLFxyXG4gIFsxMjQ4LjI3OTcsIDYxMi4xMjY0XSxcclxuICBbMTI0MS4xMzA5LCA2MTAuODIyNF0sXHJcbiAgWzEyMzguNDIyNSwgNjA4LjMzMTRdLFxyXG4gIFsxMjM1LjQ5NCwgNjExLjAwNjhdLFxyXG4gIFsxMjM1LjI3MzMsIDYxNS45NDk0Nl0sXHJcbiAgWzEyMjkuNDkwNywgNjE3LjM3NzJdLFxyXG4gIFsxMjI5LjUyNzMsIDYxMS42MzcxXSxcclxuICBbMTIzMi40ODQ3LCA2MTMuNjI5OV0sXHJcbiAgWzEyMjUuMzc3NywgNjE0LjYzMjhdLFxyXG4gIFsxMjI0LjM2NjgsIDYxOC42Nzk0NF0sXHJcbiAgWzEyMjkuMTE2LCA2MjIuMDM4MTVdLFxyXG4gIFsxMjMyLjQ5ODMsIDYyNC4xNDM5XSxcclxuICBbMTIzNy4zMzg5LCA2MjYuODcwMV0sXHJcbiAgWzEyMzkuNTI3NSwgNjIzLjQ5NjZdLFxyXG4gIFsxMjQyLjYwMzgsIDYyNi43ODc5Nl0sXHJcbiAgWzEyNDQuOTMwMiwgNjMwLjIxNTY0XSxcclxuICBbMTI0MS42MDAzLCA2MzYuOTA2MV0sXHJcbiAgWzEyNDQuNDk2NiwgNjQwLjYyODZdLFxyXG4gIFsxMjQ2LjI2NDQsIDYzNS41ODkwNV0sXHJcbiAgWzEyNTAuNDU2OSwgNjM0LjQ0MDldLFxyXG4gIFsxMjQ4Ljg5ODcsIDYzMS4xNzM3XSxcclxuICBbMTI0Ny44ODIxLCA2MjcuNDMyODZdLFxyXG4gIFsxMjQ2LjgxNTYsIDYyMy44NzUzN10sXHJcbiAgWzEyNDMuMiwgNjIzLjM4NjddLFxyXG4gIFsxMjQ0LjkwNTMsIDYyMC41MTkzXSxcclxuICBbMTI1MC44MTQ2LCA2MjQuNTEzN10sXHJcbiAgWzEyNTMuNzk1OCwgNjIxLjIxODddLFxyXG4gIFsxMjUwLjI5MjgsIDYyMC42NzIzNl0sXHJcbiAgWzEyNDcuNjQyNywgNjE5LjI3MjM0XSxcclxuICBbMTI0Mi44NjA2LCA2MTcuNzIxOV0sXHJcbiAgWzEyNDEuMjg4NSwgNjE1LjEzNDY0XSxcclxuICBbMTI0MS4wMTE0LCA2MjAuMzE3N10sXHJcbiAgWzEyMzcuOTgzLCA2MTguNTkyMTZdLFxyXG4gIFsxMjM2LjA1ODMsIDYyMi43OTYxNF0sXHJcbiAgWzEyMzMuNDE0NywgNjE5LjUzOTU1XSxcclxuICBbMTIzOC4zNTgzLCA2MTMuNTg0OTZdLFxyXG4gIFsxMjQ0LjUyMTUsIDYxMi45MDg1XSxcclxuICBbMTI0NS45MjAyLCA2MTYuMDYxNjVdLFxyXG4gIFsxMjQ5LjU4MjUsIDYxNS45NDQ3XSxcclxuICBbMTI1Ni4wMDM4LCA2MTMuNDUzM10sXHJcbiAgWzEyNTkuNDQ2NCwgNjE1LjM4MzVdLFxyXG4gIFsxMjUyLjkyMzMsIDYxNi44Mjk4XSxcclxuICBbMTI1Ni4yODkzLCA2MTguMjA1N10sXHJcbiAgWzEyNjMuMDI5LCA2MTQuMDE2ODVdLFxyXG4gIFsxMjU5LjA4MTMsIDYxMC4zNDk1XSxcclxuICBbMTI2MC44MjU0LCA2MDUuOTg3OV0sXHJcbiAgWzEyNjAuMTk1MSwgNjAxLjM3ODg1XSxcclxuICBbMTI1OS4zNDg5LCA1OTYuNDczOV0sXHJcbiAgWzEyNTYuMjA5NSwgNTkxLjk5MzY1XSxcclxuICBbMTI1MC4wNDYxLCA1ODkuODQ4NjNdLFxyXG4gIFsxMjUxLjk4OTksIDU5NC4yMjMyXSxcclxuICBbMTI1NS4yMTA0LCA1OTYuNjE4NF0sXHJcbiAgWzEyNTUuODA2NCwgNjAwLjgxNDRdLFxyXG4gIFsxMjU2LjQwMjEsIDYwNC45NDAyXSxcclxuICBbMTI1NC44MDksIDYwOC42MjAyNF0sXHJcbiAgWzEyNTEuMzIwNywgNTk5LjQyNTldLFxyXG4gIFsxMjUxLjQxMzIsIDYwMy45OTI2XSxcclxuICBbMTI0MS41MTE3LCA2MDAuNTI5MDVdLFxyXG4gIFsxMjQ2LjcxMiwgNTk5LjkwMDFdLFxyXG4gIFsxMjQ3LjcwMSwgNTk1LjE0MzQzXSxcclxuICBbMTIzOC4wNzY5LCA1ODIuNzY3MzNdLFxyXG4gIFsxMjQzLjYyNTQsIDU4MS41MDQ3Nl0sXHJcbiAgWzEyNDUuMzQ5MiwgNTg4LjAyNzM0XSxcclxuICBbMTI0NS41NTc0LCA1NzYuNzE0OF0sXHJcbiAgWzEyNDMuMDkzLCA1NzIuNzYwMTNdLFxyXG4gIFsxMjQ0LjMzNjgsIDU2NS43NTAyNF0sXHJcbiAgWzEyNDcuNzQyNCwgNTY4Ljc0OTYzXSxcclxuICBbMTI0Ny44NDA4LCA1NzIuNDQwNTVdLFxyXG4gIFsxMjUzLjUzMzksIDU3OC4wNDM5NV0sXHJcbiAgWzEyNTYuMTE4NywgNTgxLjQyMTYzXSxcclxuICBbMTI1OC4xNzQzLCA1NzcuMjUyNTZdLFxyXG4gIFsxMjYwLjM5MDYsIDU3Mi40MTg3XSxcclxuICBbMTI1Ni4wNjU4LCA1NjcuODUxMl0sXHJcbiAgWzEyNjAuMDM2MSwgNTY4LjI0MjJdLFxyXG4gIFsxMjY0LjI2NDIsIDU2OC45ODc1NV0sXHJcbiAgWzEyNjkuMDEsIDU2Ny45OTg4XSxcclxuICBbMTI2OS45NDIsIDU2My43MDI2NF0sXHJcbiAgWzEyNjguOTEzNSwgNTU5LjM3OTldLFxyXG4gIFsxMjY5LjQzMzYsIDU1NC42NDc0XSxcclxuICBbMTI3My45ODI4LCA1NTQuNDkxOTRdLFxyXG4gIFsxMjc0Ljg4MzcsIDU2MC4yMjUzNF0sXHJcbiAgWzEyODAuMzAxOCwgNTYwLjU0NjE0XSxcclxuICBbMTI4NS41ODIzLCA1NjAuNTQzNV0sXHJcbiAgWzEyODkuOTUxLCA1NjMuMjkzNF0sXHJcbiAgWzEyOTEuMzcyNiwgNTY3Ljc0Nl0sXHJcbiAgWzEyODQuOTI5LCA1NjUuOTA2NzRdLFxyXG4gIFsxMjgxLjkyNDEsIDU3MC4zODE3XSxcclxuICBbMTI3OS4xODMyLCA1NjUuNjM1NzRdLFxyXG4gIFsxMjc0LjAzMjgsIDU2Ni41MjAxXSxcclxuICBbMTI3Ny4wNDU0LCA1NzAuODUyMl0sXHJcbiAgWzEyNzIuNjgyNiwgNTcxLjc0ODFdLFxyXG4gIFsxMjc0LjMzOTcsIDU3Ni4zODgzXSxcclxuICBbMTI3MS45NzA3LCA1ODAuMjI1OF0sXHJcbiAgWzEyNzAuMjE2MiwgNTgzLjc4NjEzXSxcclxuICBbMTI2NS45NDQyLCA1ODIuNTI3MTZdLFxyXG4gIFsxMjY2LjY2NjMsIDU3OC4zMzYzXSxcclxuICBbMTI2OS44MDI0LCA1NzUuNzU3N10sXHJcbiAgWzEyNjguMTQ0NCwgNTcxLjkxMDldLFxyXG4gIFsxMjY0Ljc2MjYsIDU3My40NTQxXSxcclxuICBbMTI2Mi40MzAzLCA1NzYuNDA1MTVdLFxyXG4gIFsxMjYxLjc1OTYsIDU4MC4yOTUxN10sXHJcbiAgWzEyNjAuMDA4NCwgNTgzLjYxMTVdLFxyXG4gIFsxMjYzLjQ2NzgsIDU4Ni41MTc0Nl0sXHJcbiAgWzEyNjcuMzIxOCwgNTg4LjAzMjY1XSxcclxuICBbMTI2OC40NzAyLCA1OTMuNTIwNTddLFxyXG4gIFsxMjY4Ljc3NDQsIDU5Ny4yMzk1Nl0sXHJcbiAgWzEyNzIuNzUzOSwgNjAwLjA5MDE1XSxcclxuICBbMTI3OS41Nzk4LCA1OTMuODcwOF0sXHJcbiAgWzEyNzYuOTM2LCA1ODkuNjM5OV0sXHJcbiAgWzEyODEuMjA4NiwgNTg3LjkwNDldLFxyXG4gIFsxMjg0LjMyNjgsIDU4NC40MTY1XSxcclxuICBbMTI4OS4zNzU1LCA1ODQuNjk2MzVdLFxyXG4gIFsxMjg2LjcxMjYsIDU3OS42NDQzXSxcclxuICBbMTI5MS4yNzM5LCA1ODAuMDM2M10sXHJcbiAgWzEyOTQuODExMywgNTgyLjk2MThdLFxyXG4gIFsxMjkzLjgwODIsIDU4OC4xMTk0XSxcclxuICBbMTI4OC42NzQ0LCA1ODkuNjYzOTRdLFxyXG4gIFsxMjg0LjM0MzUsIDU5MC45NjcyXSxcclxuICBbMTI4MS4wNDY5LCA1OTkuMjU4Ml0sXHJcbiAgWzEyNzYuOTU5MiwgNTk4Ljc1MTldLFxyXG4gIFsxMjczLjkwNywgNTk1LjUxODldLFxyXG4gIFsxMjcyLjgyMywgNTkxLjc4MDldLFxyXG4gIFsxMjcxLjg2OSwgNTg4LjAzNTJdLFxyXG4gIFsxMjc0LjY4MjUsIDU4NC44ODAxXSxcclxuICBbMTI3OC45NDc0LCA1ODQuMTY3ODVdLFxyXG4gIFsxMjc3LjI3NTEsIDU4MC4yMjRdLFxyXG4gIFsxMjgyLjA1NDksIDU3OS40OTMwNF0sXHJcbiAgWzEyODQuMjczNCwgNTc0Ljc4MTZdLFxyXG4gIFsxMjc4LjkyODMsIDU3NS4zNDQwNl0sXHJcbiAgWzEyODcuNTU0MiwgNTcwLjcxMjZdLFxyXG4gIFsxMjg5LjY4NDMsIDU3NS4xOTE5XSxcclxuICBbMTI5My42NjY5LCA1NzEuOTk0XSxcclxuICBbMTI5NS40MjI2LCA1NjQuNTgwM10sXHJcbiAgWzEyOTcuNjk1MywgNTY5LjAyODddLFxyXG4gIFsxMzAwLjcxLCA1NjUuMzA4MzVdLFxyXG4gIFsxMjk5LjMyMDgsIDU2MC43NzQ1NF0sXHJcbiAgWzEyOTcuOTQxNCwgNTU2LjUyMTA2XSxcclxuICBbMTI5NC40MDYsIDU1OS43OTMyXSxcclxuICBbMTI5MC4xNTA4LCA1NTguMjc5MzZdLFxyXG4gIFsxMjg3LjUyMTYsIDU1NC42MzY1NF0sXHJcbiAgWzEyODIuOTM0MiwgNTU1Ljk0NjNdLFxyXG4gIFsxMjc4LjY4MzcsIDU1NC4wNzQwNF0sXHJcbiAgWzEyODMuODAwOCwgNTUwLjcxNDM2XSxcclxuICBbMTI4MC40MTc3LCA1NDcuNTg3OV0sXHJcbiAgWzEyNzUuNzg1NiwgNTQ5LjE3MjRdLFxyXG4gIFsxMjcwLjk3NDksIDU0OS40NTM5XSxcclxuICBbMTI2Ny4xNTMxLCA1NDUuMzAwM10sXHJcbiAgWzEyNjUuNDA3MiwgNTQwLjU4MTA1XSxcclxuICBbMTI2MC4zNzQsIDUzOS42NDFdLFxyXG4gIFsxMjYzLjA5OTUsIDUzNS42NDYwNl0sXHJcbiAgWzEyNjIuMDY3MywgNTMwLjkwMjddLFxyXG4gIFsxMjU4LjQwMTEsIDUzNC4yNTQzXSxcclxuICBbMTI1NS42OTk2LCA1MzguMTEwMzVdLFxyXG4gIFsxMjUyLjM2NDUsIDU0MS4zMzI5XSxcclxuICBbMTI1Mi40NzY0LCA1NDYuMzM2M10sXHJcbiAgWzEyNTcuMzAyLCA1NDQuMTI2OTVdLFxyXG4gIFsxMjYyLjIyMDgsIDU0NC41MzMxNF0sXHJcbiAgWzEyNjEuMzYyLCA1NDkuMjkyOF0sXHJcbiAgWzEyNjYuMjI4NiwgNTUwLjI5Mzk1XSxcclxuICBbMTI2NC4zNjkxLCA1NTUuMTU3ODRdLFxyXG4gIFsxMjYzLjE2NTQsIDU1OS45NTAyXSxcclxuICBbMTI2NC40NTkxLCA1NjQuNTA4Nl0sXHJcbiAgWzEyNTguODUyOSwgNTYzLjkxODFdLFxyXG4gIFsxMjU3LjgyODIsIDU1OS40OTIyNV0sXHJcbiAgWzEyNTguOTU0NSwgNTU0LjU3NDFdLFxyXG4gIFsxMjU2LjA5NzksIDU1MC4wOTQzXSxcclxuICBbMTI1MC4yODE3LCA1NTEuNjEwODRdLFxyXG4gIFsxMjUzLjExOTEsIDU1Ni40MTcxXSxcclxuICBbMTI0Ni4xMDYzLCA1NTYuMzMzODZdLFxyXG4gIFsxMjUzLjQ4NSwgNTYyLjExMjddLFxyXG4gIFsxMjQ3LjkzNjIsIDU2MC43MDMxXSxcclxuICBbMTI0OS4yMDU3LCA1NjQuNTg5ODRdLFxyXG4gIFsxMjUyLjM0NzksIDU2Ny4yMDU5M10sXHJcbiAgWzEyNTIuNjU1MywgNTcxLjYyNTFdLFxyXG4gIFsxMjU2LjE5NjksIDU3My4zNTA2XSxcclxuICBbMTI1MC41MDU0LCA1NzUuNDA3MzVdLFxyXG4gIFsxMjQ4LjcxNjMsIDU3OS41MDg0XSxcclxuICBbMTI1MC41Njc0LCA1ODMuMTQ2ODVdLFxyXG4gIFsxMjU0LjA3MzUsIDU4Ni44MTc1XSxcclxuICBbMTI1OC42MzE1LCA1ODguMTU5Ml0sXHJcbiAgWzEyNjEuNzAyMSwgNTkxLjMzODU2XSxcclxuICBbMTI2My41NDAzLCA1OTUuMDc0XSxcclxuICBbMTI2NC4wODA5LCA1OTguNzY1OF0sXHJcbiAgWzEyNjQuNDYxMiwgNjAyLjgxMV0sXHJcbiAgWzEyNjguNDQxNSwgNjAxLjA0NDJdLFxyXG4gIFsxMjY5LjUyOTksIDYwNC41NDQ0M10sXHJcbiAgWzEyNzAuNDAxNiwgNjA4LjczNDc0XSxcclxuICBbMTI3My41MTI3LCA2MDQuNjMxOTZdLFxyXG4gIFsxMjc3LjQ3NjQsIDYwMy4zOTk1NF0sXHJcbiAgWzEyODEuMzQ1MSwgNjA0Ljc0NjVdLFxyXG4gIFsxMjkwLjg0NDIsIDYwNS4wMjA3XSxcclxuICBbMTI4Ni42MjQ0LCA2MDYuMjIwMzRdLFxyXG4gIFsxMjkyLjI2LCA2MDkuNTM3MjNdLFxyXG4gIFsxMjk1LjMwMzcsIDYxMi45OTExXSxcclxuICBbMTI5OC45MTQxLCA2MjAuODQ4NzVdLFxyXG4gIFsxMjk4LjQwMjMsIDYyNC42ODA5N10sXHJcbiAgWzEyOTUuMzMwNiwgNjI3LjA5NTY0XSxcclxuICBbMTMwMi4xMDY0LCA2MjcuMTY3XSxcclxuICBbMTMwMi42NTk3LCA2MjMuMzc5OF0sXHJcbiAgWzEzMDYuMTQ2MSwgNjI2LjE4NTRdLFxyXG4gIFsxMzA0LjQ3MjIsIDYzMC4xMjU4XSxcclxuICBbMTMwNy45NzQ2LCA2MzEuMTkwNV0sXHJcbiAgWzEzMDQuNTMxNCwgNjM0LjQ2MjVdLFxyXG4gIFsxMzA1LjQyMDIsIDYzOC41Mzg3XSxcclxuICBbMTMwOC43MjkxLCA2MzUuNDUzMl0sXHJcbiAgWzEzMTAuMDc1NiwgNjM5LjU2MTc3XSxcclxuICBbMTMwNi44NTQ3LCA2NDIuNDg5ODddLFxyXG4gIFsxMzAzLjAzNTQsIDY0NC4wOTg5XSxcclxuICBbMTMwNi42OTk4LCA2NDcuMDUyMjVdLFxyXG4gIFsxMzEwLjgxNjksIDY0NC4yMDE1NF0sXHJcbiAgWzEzMDguNzM0NCwgNjUwLjc4NTk1XSxcclxuICBbMTMxMi4xMjMsIDY0OC40MTQ4Nl0sXHJcbiAgWzEzMTUuNTYzMSwgNjQ1Ljg4NDVdLFxyXG4gIFsxMzE5LjU5OTQsIDY0Ny4wNzg1NV0sXHJcbiAgWzEzMjMuNTkzMywgNjQ1LjkxNDhdLFxyXG4gIFsxMzI5LjY2NzIsIDY0OS41NzY4NF0sXHJcbiAgWzEzMzMuNDk3MywgNjQ4Ljk0NDY0XSxcclxuICBbMTMzNi40NjA0LCA2NTUuNDEwOTVdLFxyXG4gIFsxMzM3LjEyNzksIDY1MS4zNDE0M10sXHJcbiAgWzEzNDEuMTQ1OCwgNjQ5LjA1MjM3XSxcclxuICBbMTM0NS41NjI3LCA2NTAuNzg2XSxcclxuICBbMTM0MS42NTIzLCA2NTQuMTk0OF0sXHJcbiAgWzEzNDYuNTg3LCA2NTUuNTgzMjVdLFxyXG4gIFsxMzUwLjMzNywgNjUyLjUxNl0sXHJcbiAgWzEzNTIuMjY1OSwgNjU2LjYwNDZdLFxyXG4gIFsxMzU2LjE4OTcsIDY1My4zMTU1XSxcclxuICBbMTM2MS4zMDU5LCA2NTIuODMzNV0sXHJcbiAgWzEzNjQuMzE3MSwgNjU2Ljg5NDRdLFxyXG4gIFsxMzU4LjIzLCA2NTguMTcxOTRdLFxyXG4gIFsxMzYyLjAyNywgNjYxLjg2NjhdLFxyXG4gIFsxMzU2LjU0NzQsIDY2NC44OTddLFxyXG4gIFsxMzYxLjA1MTgsIDY2Ny4wNTc0XSxcclxuICBbMTM2My42NDY3LCA2NzEuMzg1OF0sXHJcbiAgWzEzNTcuOTc3OCwgNjcxLjU3OTY1XSxcclxuICBbMTM1My4yODkzLCA2NzAuMTI3OV0sXHJcbiAgWzEzNDguMzI4NSwgNjY5LjE4MDM2XSxcclxuICBbMTM1MC42ODM4LCA2NjQuOTU2MjRdLFxyXG4gIFsxMzUzLjcyNzMsIDY2MC44ODkzNF0sXHJcbiAgWzEzNDguMzMwOSwgNjYwLjM3ODhdLFxyXG4gIFsxMzQzLjYyMDIsIDY1OS42OTFdLFxyXG4gIFsxMzM5LjE3MzUsIDY1OC43MDE3XSxcclxuICBbMTMzNC4xMjcyLCA2NTkuNTYzMV0sXHJcbiAgWzEzMzQuNzE2OSwgNjY0LjQzMjI1XSxcclxuICBbMTMyOS4zNjYyLCA2NjIuNzEwOTRdLFxyXG4gIFsxMzI3LjE3NzIsIDY2Ny41NDldLFxyXG4gIFsxMzMyLjAwOTUsIDY2OC4zMTQzXSxcclxuICBbMTMyNC43ODM0LCA2NzIuNjYzOTRdLFxyXG4gIFsxMzI5LjYxNTIsIDY3My41MTM3XSxcclxuICBbMTMzNC4yODgxLCA2NzIuNTI4NTZdLFxyXG4gIFsxMzM0LjM3MjgsIDY3OC4xMzgyNF0sXHJcbiAgWzEzMzcuMjc3OCwgNjgzLjMxOTJdLFxyXG4gIFsxMzQzLjMwMjUsIDY4NC4wNzU1Nl0sXHJcbiAgWzEzNDcuODYsIDY3OS44NzY1XSxcclxuICBbMTM0MS41NTI1LCA2NzcuNTc5XSxcclxuICBbMTMzOC43MzE5LCA2NzMuMDkyNDddLFxyXG4gIFsxMzM4Ljc1MjQsIDY2Ny45MDgxXSxcclxuICBbMTMzOS44MDA4LCA2NjMuMTk1MjVdLFxyXG4gIFsxMzQ0LjY2ODEsIDY2NS4yMzc3M10sXHJcbiAgWzEzNDMuNDIwNCwgNjcxLjAwNzddLFxyXG4gIFsxMzQ3LjY4NjMsIDY3NC40NzE3XSxcclxuICBbMTM1My4wMjI1LCA2NzYuNTI2XSxcclxuICBbMTM1OC4yOTcxLCA2NzcuMTQ2Ml0sXHJcbiAgWzEzNjEuNTA4OCwgNjgyLjE2MzRdLFxyXG4gIFsxMzU5Ljg1MTgsIDY4Ni45NjIxXSxcclxuICBbMTM1NC43NDEzLCA2ODMuMTU4MV0sXHJcbiAgWzEzNDkuNTQyOCwgNjg1Ljg2NTY2XSxcclxuICBbMTM0MS4wMDQ5LCA2ODkuODMyXSxcclxuICBbMTM0OC43NzE5LCA2OTEuNTYxN10sXHJcbiAgWzEzNDEuNTkwNywgNzAyLjQ2MjM0XSxcclxuICBbMTMzNS45NTQ2LCA2OTUuNDUwODddLFxyXG4gIFsxMzM0LjU5OTYsIDcwMS42OTgyNF0sXHJcbiAgWzEzMjguNTMwNiwgNzAxLjM4ODNdLFxyXG4gIFsxMzIyLjc4NTksIDcwMi4xOTU3XSxcclxuICBbMTMyOS4zMDMsIDY5NS4xNjE1XSxcclxuICBbMTMyMy4wMDY2LCA2OTQuNjE2NDZdLFxyXG4gIFsxMzE2Ljc1MTIsIDY5Mi41NDc2XSxcclxuICBbMTMxOC4wNjgyLCA2OTguMzg2NF0sXHJcbiAgWzEzMTIuNDQ1MiwgNjk3LjY4NjddLFxyXG4gIFsxMzA3LjAwNzQsIDY5NS4wOTQxXSxcclxuICBbMTMxMS4wMzY3LCA2OTAuNjk4Nl0sXHJcbiAgWzEzMDUuNTAyNywgNjkwLjI0MTZdLFxyXG4gIFsxMzAxLjMxMTgsIDY4Mi45NTk1XSxcclxuICBbMTI5OC4zMjk2LCA2NzkuMDMwNDZdLFxyXG4gIFsxMjk1LjA2MjcsIDY3NC41NDA2NV0sXHJcbiAgWzEzMDAuNTc4NiwgNjc0LjQ5MTNdLFxyXG4gIFsxMzA1LjA4NTksIDY3OS4zMTQyXSxcclxuICBbMTMwOS4zODAxLCA2NzYuNDAzNDRdLFxyXG4gIFsxMzEzLjg1MzUsIDY3OC44ODVdLFxyXG4gIFsxMzIxLjc0NDUsIDY2OS4yNTddLFxyXG4gIFsxMzE3LjkxMTUsIDY2Ny4zMDAyXSxcclxuICBbMTMxNC4yMjI5LCA2NjkuNzk1Nl0sXHJcbiAgWzEzMTMuOTQzNSwgNjc0LjAxODA3XSxcclxuICBbMTMxOC41NjU3LCA2NzQuMzUxNl0sXHJcbiAgWzEzMjIuMTk4NSwgNjc3LjUxNTE0XSxcclxuICBbMTMyNy44NDUsIDY3OC4zODA5XSxcclxuICBbMTMzMC41NTY2LCA2ODMuNTU3Nl0sXHJcbiAgWzEzMzQuMDIxMiwgNjg5LjIwNThdLFxyXG4gIFsxMzIwLjg4NjIsIDY4Ny44NjM5XSxcclxuICBbMTMyNy4yMjkyLCA2ODkuMDAxOTVdLFxyXG4gIFsxMzI0LjExNjIsIDY4My4xMDU5Nl0sXHJcbiAgWzEzMTguMDY3NiwgNjgxLjc1MTJdLFxyXG4gIFsxMzE0LjczNjgsIDY4Ni41MDA0XSxcclxuICBbMTMxMC40NTQ4LCA2ODIuODJdLFxyXG4gIFsxMzA2LjM0MywgNjg1LjMwNzI1XSxcclxuICBbMTMwMC42Mjc3LCA2ODguMDE3M10sXHJcbiAgWzEyOTUuNTk0NywgNjkwLjM0Nzg0XSxcclxuICBbMTMwMC42NjkyLCA2OTMuMzc3N10sXHJcbiAgWzEzMDEuOTIxOCwgNjk4LjU4ODZdLFxyXG4gIFsxMzA2Ljc2NzYsIDcwMC44Mjc3Nl0sXHJcbiAgWzEyOTYuNDA5NCwgNjk3LjUzNjVdLFxyXG4gIFsxMjkxLjI2NTcsIDY5OC4zNjU0XSxcclxuICBbMTI4My45Mzg0LCA2OTUuMTk5N10sXHJcbiAgWzEyNzcuODQyOSwgNjkzLjQ1MjRdLFxyXG4gIFsxMjc1LjE2NiwgNjg4LjEzMTg0XSxcclxuICBbMTI3OS41ODQxLCA2ODQuMjQ4NV0sXHJcbiAgWzEyNzQuNDY1OCwgNjgwLjg3MjldLFxyXG4gIFsxMjY4LjcwNDMsIDY4MC42MjldLFxyXG4gIFsxMjY5LjA3NTgsIDY4Ni45NTc1XSxcclxuICBbMTI2Mi4zNzY2LCA2ODMuNzM1OF0sXHJcbiAgWzEyNTcuNjM1NSwgNjc4LjY4OTMzXSxcclxuICBbMTI1Mi4zMjQyLCA2NzMuNDQ5MV0sXHJcbiAgWzEyNDMuNTcyNCwgNjc0LjQ1NzRdLFxyXG4gIFsxMjQ3LjczMjUsIDY2OS42ODg0XSxcclxuICBbMTI0Mi45MzgyLCA2NjYuMjc4MTRdLFxyXG4gIFsxMjQ2LjA3NjgsIDY2MC42MjczXSxcclxuICBbMTI0OS43NDI4LCA2NjQuMTc3NzNdLFxyXG4gIFsxMjQwLjE3MzEsIDY2MS4yMzgwNF0sXHJcbiAgWzEyMzguMTAyOCwgNjY5LjgxNzI2XSxcclxuICBbMTIzNS4yMTUzLCA2NjQuMzY4OF0sXHJcbiAgWzEyMzIuODkzMywgNjU5LjAyNTNdLFxyXG4gIFsxMjM0LjkyMTksIDY1My4xMjc5XSxcclxuICBbMTIzOC4wMTQ0LCA2NTYuNzA5ODRdLFxyXG4gIFsxMjQzLjM1NTYsIDY1NS42MzMzXSxcclxuICBbMTI0NS44NjE3LCA2NTAuNzk4MzRdLFxyXG4gIFsxMjUwLjY2MzcsIDY0OS4wMDIzXSxcclxuICBbMTI1Mi44MTA4LCA2NTIuMzgwNV0sXHJcbiAgWzEyNDguOTQ4NywgNjU1LjU5NTddLFxyXG4gIFsxMjUyLjU0MzgsIDY1OS43Mzk1XSxcclxuICBbMTI1NS40Mzc2LCA2NTUuOTM0MjddLFxyXG4gIFsxMjUyLjUzMDUsIDY0NS4zMzIzNF0sXHJcbiAgWzEyNTMuOTE3LCA2NDEuNDI2NjRdLFxyXG4gIFsxMjU3LjYwNjcsIDYzOS4zNzcyXSxcclxuICBbMTI2MS42OTY3LCA2NDAuNjQxODVdLFxyXG4gIFsxMjYyLjg1MzUsIDY0NC43Mjc1XSxcclxuICBbMTI1Ny43ODc1LCA2NDQuODQ3NF0sXHJcbiAgWzEyNTYuODQ3MywgNjQ5LjQwMzddLFxyXG4gIFsxMjYyLjQyNjMsIDY0OS4wNDg2XSxcclxuICBbMTI2Ny40MTk3LCA2NTAuMDU0MV0sXHJcbiAgWzEyNjcuNjE3OCwgNjQ1LjEyODJdLFxyXG4gIFsxMjY2LjgwMjIsIDY0MC44MTMyM10sXHJcbiAgWzEyNzEuODM2OSwgNjQ2LjQ2MzEzXSxcclxuICBbMTI3Ni4xNzMzLCA2NDguOTg0NF0sXHJcbiAgWzEyODAuNzcyNywgNjQ4Ljc5MTVdLFxyXG4gIFsxMjg0LjgyMDcsIDY0OC43NDg4NF0sXHJcbiAgWzEyODguNTI0NywgNjQ2LjU3OTQ3XSxcclxuICBbMTI5Mi4yMjE5LCA2NDguODEyODddLFxyXG4gIFsxMjk2LjMzNDQsIDY0OS40N10sXHJcbiAgWzEyOTkuMjQyNywgNjUyLjU0NzFdLFxyXG4gIFsxMjkzLjc4MzgsIDY1NC4xNTIzXSxcclxuICBbMTI5NC4zMDc0LCA2NTkuMjU1OV0sXHJcbiAgWzEyOTkuMTU2NCwgNjYxLjA1NTI0XSxcclxuICBbMTI5OS43NzQ0LCA2NjUuMjY3NzZdLFxyXG4gIFsxMzA0LjA4MTcsIDY2NC40MjMwM10sXHJcbiAgWzEzMDMuNjgyLCA2NjAuMTUzNTZdLFxyXG4gIFsxMjk4Ljk3MjksIDY1Ni42NjczNl0sXHJcbiAgWzEyOTQuOTUwMiwgNjY0LjQ1NzZdLFxyXG4gIFsxMjkwLjI0MDgsIDY2Mi44OTA3NV0sXHJcbiAgWzEyODkuMDk3NSwgNjU3LjM0MTddLFxyXG4gIFsxMjg1LjI0MjMsIDY2MC44MTU3XSxcclxuICBbMTI4NS45MjI2LCA2NjUuNzkyMV0sXHJcbiAgWzEyODAuNDAzNiwgNjY1LjI2NjVdLFxyXG4gIFsxMjgxLjk0MDMsIDY2OS43NDU1XSxcclxuICBbMTI3Ny4zODcxLCA2NzAuNzc5NjZdLFxyXG4gIFsxMjc1LjA2NTMsIDY2Ny44MzE4NV0sXHJcbiAgWzEyNzAuODc0LCA2NjcuMTc4OTZdLFxyXG4gIFsxMjcwLjI4MjUsIDY2MS4wOTg0NV0sXHJcbiAgWzEyNjUuMzc0NSwgNjU5LjI5OTg3XSxcclxuICBbMTI1OS44MjU0LCA2NTguMzkyN10sXHJcbiAgWzEyNTkuNTU2MywgNjUzLjMwODVdLFxyXG4gIFsxMjY0LjAxNTksIDY1NC4xNjY0NF0sXHJcbiAgWzEyNjguMzc2NywgNjU1LjMwNjldLFxyXG4gIFsxMjcyLjI5MzUsIDY1Ni42MDc0XSxcclxuICBbMTI3Mi4yNjMsIDY1MS42MzY2Nl0sXHJcbiAgWzEyNzUuNzkzLCA2NTkuMjQ5OF0sXHJcbiAgWzEyNzYuNDY2OCwgNjU1LjA0NTA0XSxcclxuICBbMTI3OS40NiwgNjUyLjY4NzddLFxyXG4gIFsxMjg4Ljk2LCA2NTEuOTc3NF0sXHJcbiAgWzEyODQuNzczMSwgNjUzLjczNDRdLFxyXG4gIFsxMjgxLjgzMzcsIDY1Ni45MDkyXSxcclxuICBbMTI4MC4wOTE2LCA2NjAuOTY5MV0sXHJcbiAgWzEyNzQuOTkwMSwgNjYzLjM1MTJdLFxyXG4gIFsxMjY3LjEsIDY3MC44MzY5XSxcclxuICBbMTI2MS42MzY1LCA2NjguMDY4MzZdLFxyXG4gIFsxMjY2LjQ3NjcsIDY2NC45MjM5NV0sXHJcbiAgWzEyNjEuODcyMSwgNjYyLjk3NjU2XSxcclxuICBbMTI1Ni44NTk3LCA2NjMuMTA2Ml0sXHJcbiAgWzEyNTQuMDIxNSwgNjY3LjM5NDNdLFxyXG4gIFsxMjU3LjM1NzcsIDY3MS40MDQzXSxcclxuICBbMTI2MS41Nzg0LCA2NzQuMTMyOV0sXHJcbiAgWzEyNjUuNjU5MywgNjc2LjY3MzddLFxyXG4gIFsxMjcyLjAzNDksIDY3NC4xNDA2XSxcclxuICBbMTI3Ny42NDg2LCA2NzUuNDU4XSxcclxuICBbMTI4MS4zNTYsIDY3OS41Mjc0N10sXHJcbiAgWzEyODUuODM4NiwgNjgzLjc5MzddLFxyXG4gIFsxMjgyLjU5NjYsIDY4OC44NTUzNV0sXHJcbiAgWzEyODcuODU4OSwgNjkwLjE3NzddLFxyXG4gIFsxMjkxLjY2MTUsIDY5My4yNjA0XSxcclxuICBbMTI5MC45NTk2LCA2ODUuNjQ1NF0sXHJcbiAgWzEyOTYuMDYyNiwgNjg0LjYyODJdLFxyXG4gIFsxMjkyLjc1NywgNjc5Ljk2MDQ1XSxcclxuICBbMTI4OS44OTAzLCA2NzQuNDgxMjZdLFxyXG4gIFsxMjg3LjMwOTQsIDY3OC44ODg3M10sXHJcbiAgWzEyODMuNDEwMiwgNjc0LjgyNjM1XSxcclxuICBbMTI4Ni40Njc0LCA2NzAuOTY5OV0sXHJcbiAgWzEyOTAuNTM1MiwgNjY4LjUyMDRdLFxyXG4gIFsxMjk0LjY0MzMsIDY2OS41MDQ1XSxcclxuICBbMTI5OC44MTQ1LCA2NjkuNjYzNDVdLFxyXG4gIFsxMzAzLjQwMTIsIDY2OS40NzZdLFxyXG4gIFsxMzA1LjM0NSwgNjczLjY1MTJdLFxyXG4gIFsxMzA5LjUzOTYsIDY3MC45MDc1XSxcclxuICBbMTMwNy42ODksIDY2Ny4yMjUxXSxcclxuICBbMTMwOC44OTc3LCA2NjMuMDM3Ml0sXHJcbiAgWzEzMDcuOTQ2NywgNjU5LjE4MzVdLFxyXG4gIFsxMzEzLjk0NzUsIDY2MS40NDU5XSxcclxuICBbMTMxMy4wMDk5LCA2NjUuNTU0NDRdLFxyXG4gIFsxMzE5LjAyMTcsIDY2Mi4wMDE0XSxcclxuICBbMTMyMy41OTc0LCA2NjQuMDc5MV0sXHJcbiAgWzEzMTYuNDUyOSwgNjU3LjE0ODg2XSxcclxuICBbMTMyMC42NTExLCA2NTYuMDQ0NDNdLFxyXG4gIFsxMzI0LjMxNzEsIDY1OS4yNzJdLFxyXG4gIFsxMzI5LjI3NCwgNjU3LjY3NzhdLFxyXG4gIFsxMzMxLjk2NDEsIDY1My43OTIzNl0sXHJcbiAgWzEzMjYuMDc1LCA2NTQuMTExNzZdLFxyXG4gIFsxMzI1LjgyNTEsIDY0OS40Mzc3NF0sXHJcbiAgWzEzMjEuNzYwMSwgNjUxLjMzMDJdLFxyXG4gIFsxMzE3LjAwNzQsIDY1MS4xOTI3NV0sXHJcbiAgWzEzMTMuMTU1OCwgNjUzLjEyMzRdLFxyXG4gIFsxMzExLjk0ODUsIDY1Ny42MDRdLFxyXG4gIFsxMzA4LjQxNjEsIDY1NC44NDcxXSxcclxuICBbMTMwMy43NTg4LCA2NTUuODgwN10sXHJcbiAgWzEzMDQuMzQ4OCwgNjUxLjg0MDJdLFxyXG4gIFsxMzAyLjAsIDY0OC42NDc1XSxcclxuICBbMTI5OS4wMTksIDY0Ni4wNjgzNl0sXHJcbiAgWzEyOTguNDM0MiwgNjQyLjA0MV0sXHJcbiAgWzEzMDEuNjg4NCwgNjQwLjE2NzA1XSxcclxuICBbMTMwMC41Nzg3LCA2MzYuNjY1OTVdLFxyXG4gIFsxMjk3LjEwNjcsIDYzNS4xODM1XSxcclxuICBbMTMwMC44ODgzLCA2MzIuMjU5NjRdLFxyXG4gIFsxMjk5LjAwNzMsIDYyOC43MTkyNF0sXHJcbiAgWzEyOTYuMzk1NiwgNjMxLjQ1Mzc0XSxcclxuICBbMTI5MS44MzgxLCA2MjQuODg0XSxcclxuICBbMTI4Ni44OTI4LCA2MjIuNzQ4OV0sXHJcbiAgWzEyODguNDA0OCwgNjI2Ljc0MDddLFxyXG4gIFsxMjg1LjQ1NTEsIDYyOS4xNzA1XSxcclxuICBbMTI4OC45OTkxLCA2MzEuNzM2Ml0sXHJcbiAgWzEyOTIuNDU3OCwgNjI5LjgxNzddLFxyXG4gIFsxMjkyLjgzMTQsIDYzNC41NjU1NV0sXHJcbiAgWzEyOTEuNTQzOCwgNjM4LjY3NTA1XSxcclxuICBbMTI5NS42ODc3LCA2MzkuMjA0MDRdLFxyXG4gIFsxMjk0Ljg1MTMsIDY0NC41NjY0N10sXHJcbiAgWzEyOTEuMjE3OCwgNjQzLjA2MTVdLFxyXG4gIFsxMjg3LjU2MSwgNjQwLjYzMDA3XSxcclxuICBbMTI4OC4wNjkxLCA2MzYuMTUwNF0sXHJcbiAgWzEyODQuNjQ4OSwgNjM0LjAxODhdLFxyXG4gIFsxMjgxLjQyNjksIDYzMC45ODYyXSxcclxuICBbMTI3Ny4zNTczLCA2MzEuNzM2NjNdLFxyXG4gIFsxMjczLjY4NTMsIDYyOS45NzA5NV0sXHJcbiAgWzEyNzIuNjY5LCA2MjQuNTE0XSxcclxuICBbMTI2OS43NDM4LCA2MjAuNzU1ODZdLFxyXG4gIFsxMjY3Ljc5NSwgNjI1LjM5MTZdLFxyXG4gIFsxMjY1LjU0OTEsIDYyMi4xNjAxNl0sXHJcbiAgWzEyNjEuNzE0LCA2MjMuMjI4NF0sXHJcbiAgWzEyNjMuNjM2MSwgNjI3LjE4MjRdLFxyXG4gIFsxMjU5LjI0OSwgNjI2Ljg2MzNdLFxyXG4gIFsxMjU3LjEzMjIsIDYyOS45MjQ5XSxcclxuICBbMTI1My42Mjk2LCA2MzIuMDE2OV0sXHJcbiAgWzEyNTIuNTUyMSwgNjI4LjMwNTU0XSxcclxuICBbMTI1NC45NzkyLCA2MjUuMzYzOF0sXHJcbiAgWzEyNTcuNjA5OSwgNjIyLjY3OTU3XSxcclxuICBbMTI1OS44MTQsIDYxOS41MV0sXHJcbiAgWzEyNjMuNDYyMiwgNjE4LjQ4NzRdLFxyXG4gIFsxMjY3LjQ2MDcsIDYxNy4yMTE1NV0sXHJcbiAgWzEyNjcuMzkwNCwgNjEzLjA1NDJdLFxyXG4gIFsxMjY1Ljg3NjIsIDYwNi40NjA2XSxcclxuICBbMTI2My44OTQ5LCA2MDkuNTk1MDNdLFxyXG4gIFsxMjcxLjc3NjQsIDYxNC42MTA1XSxcclxuICBbMTI3Ni43NTc2LCA2MTQuOTIzN10sXHJcbiAgWzEyNzYuMzU5NywgNjA4LjIxOF0sXHJcbiAgWzEyNzMuNzExNCwgNjE4LjkxMzI3XSxcclxuICBbMTI3Ni44NSwgNjIyLjQ0MzZdLFxyXG4gIFsxMjc5LjIzMzYsIDYxOC43NjgwN10sXHJcbiAgWzEyODQuMDMzMiwgNjE5LjA1NjVdLFxyXG4gIFsxMjgxLjg2NjUsIDYyMy4wMDY4NF0sXHJcbiAgWzEyODIuMTE1MiwgNjI2LjgwNDJdLFxyXG4gIFsxMjc3LjM0NjQsIDYyNi44ODAxXSxcclxuICBbMTI2OS44Njk5LCA2MjguNTY2MDRdLFxyXG4gIFsxMjY1Ljk0MjEsIDYzMS4wOTg0XSxcclxuICBbMTI3MC4wMzU2LCA2MzMuMTYwN10sXHJcbiAgWzEyNzQuNjAwMiwgNjM1LjY5MThdLFxyXG4gIFsxMjc3Ljk2MTgsIDYzOS41NDM5NV0sXHJcbiAgWzEyODAuMDM4OCwgNjM1LjQ2MzddLFxyXG4gIFsxMjgzLjIzODQsIDYzOS4wMDE3XSxcclxuICBbMTI4NC43OTc1LCA2NDMuODUyMDVdLFxyXG4gIFsxMjgwLjU3MzIsIDY0My45MTU2NV0sXHJcbiAgWzEyNzYuMTcyMiwgNjQ0LjE3NjNdLFxyXG4gIFsxMjcyLjU5NzUsIDY0MS4xMjc5XSxcclxuICBbMTI3MC4wMSwgNjM3LjUxNDk1XSxcclxuICBbMTI2NS40NDE4LCA2MzYuMDMzOF0sXHJcbiAgWzEyNjEuMjI0NSwgNjM2LjIwNTldLFxyXG4gIFsxMjYxLjU3NTYsIDYzMS41Njc3NV0sXHJcbiAgWzEyNTcuNjQzNiwgNjM0LjI0MjNdLFxyXG4gIFsxMjU0LjIwMTcsIDYzNi41NDE4XSxcclxuICBbMTI1MC4yNzg0LCA2MzguMjIwOF0sXHJcbiAgWzEyNDguODQ3NywgNjQxLjU3NDddLFxyXG4gIFsxMjQ3LjE0MjYsIDY0NS41OTg0NV0sXHJcbiAgWzEyNDIuNjMxNywgNjQ1Ljg5NTQ1XSxcclxuICBbMTIzOS42Mjg3LCA2NDAuODA1Ml0sXHJcbiAgWzEyMzQuNzY1NiwgNjQxLjM5Mjk0XSxcclxuICBbMTIyOS45NTYsIDY0Mi42MTE3Nl0sXHJcbiAgWzEyMzIuNzg0NCwgNjMzLjgyMzhdLFxyXG4gIFsxMjM2LjkzNTcsIDYzNi4wNTIyXSxcclxuICBbMTI0Mi4yMDEsIDYzMy4yMDkxXSxcclxuICBbMTI0MC4wNDMyLCA2MzAuMjc4Nl0sXHJcbiAgWzEyMzYuMTI3NiwgNjMxLjE2MDVdLFxyXG4gIFsxMjMyLjUwNjEsIDYyOC4zMzFdLFxyXG4gIFsxMjI3Ljc3NjQsIDYyNi44NDM5XSxcclxuICBbMTIyNS4yMjEyLCA2MjIuNjA2M10sXHJcbiAgWzEyMjAuMDE4NiwgNjIxLjM1MzhdLFxyXG4gIFsxMjIyLjY0NzcsIDYyNS4xMDIyXSxcclxuICBbMTIyMi4yNjY0LCA2MjguMzc0Ml0sXHJcbiAgWzEyMTguOTExNCwgNjI5LjU5MzI2XSxcclxuICBbMTIxNy44NzU0LCA2MzMuMDYwNV0sXHJcbiAgWzEyMTMuNTgwMiwgNjMzLjQzNDFdLFxyXG4gIFsxMjE0LjYzNzIsIDYyOS4wMTI2M10sXHJcbiAgWzEyMTEuNzQwNSwgNjI0Ljg3ODddLFxyXG4gIFsxMjA5LjkwMDksIDYyOS40OTMwNF0sXHJcbiAgWzEyMTAuMjM4LCA2MzUuNjI1XSxcclxuICBbMTIwNi4wNDg4LCA2MzYuODUwNDZdLFxyXG4gIFsxMjA2LjEyOCwgNjMxLjY3ODddLFxyXG4gIFsxMjAyLjA2ODEsIDYyOC45OTYzXSxcclxuICBbMTIwNS43NzE5LCA2MjUuMjAyM10sXHJcbiAgWzEyMDkuMDAzMiwgNjIwLjM4NDJdLFxyXG4gIFsxMjAxLjA3MDEsIDYyMS41MTM4XSxcclxuICBbMTE5OC4zNTY0LCA2MjUuOTYxOF0sXHJcbiAgWzExOTcuNDIxOCwgNjMxLjQ0ODddLFxyXG4gIFsxMTkyLjcxMjIsIDYzMS45NzY1Nl0sXHJcbiAgWzExODkuODgsIDYzNS44MjcxNV0sXHJcbiAgWzExODYuODE4OCwgNjMyLjQwMTA2XSxcclxuICBbMTE4My41ODU2LCA2MjkuMTI3M10sXHJcbiAgWzExODkuMjcyMSwgNjI4LjQ3NzM2XSxcclxuICBbMTE5My40Nzc5LCA2MjYuMzMxNjddLFxyXG4gIFsxMTkwLjE3ODUsIDYyMS45NDhdLFxyXG4gIFsxMTg1LjIxODgsIDYyMC45MzcxXSxcclxuICBbMTE5MS4wODU5LCA2MTYuNzgxNDNdLFxyXG4gIFsxMTk1LjM5NzIsIDYyMS4wNzIxXSxcclxuICBbMTE5Ni45OTg4LCA2MTYuNDQzMV0sXHJcbiAgWzExOTkuOTA5MiwgNjEyLjYzMTM1XSxcclxuICBbMTIwNC4zMzQ3LCA2MTguMjM5ODddLFxyXG4gIFsxMjA1LjEyOTYsIDYxMy45NTFdLFxyXG4gIFsxMjA5LjQwNTgsIDYxMy4wMjYyNV0sXHJcbiAgWzEyMTIuODkwNywgNjE2LjQ0NDJdLFxyXG4gIFsxMjE0LjkzOCwgNjIwLjczNDZdLFxyXG4gIFsxMjE3LjQwNzcsIDYyNS4yMzg5XSxcclxuICBbMTIxOS4yOTM1LCA2MTYuODAwNjZdLFxyXG4gIFsxMjIxLjcxMjYsIDYxMS43MTA4XSxcclxuICBbMTIyNi4wNzc2LCA2MDkuNDI5M10sXHJcbiAgWzEyMjMuMTg4NiwgNjA1LjYxNDNdLFxyXG4gIFsxMjE4LjczMjQsIDYwNy4zNzAzNl0sXHJcbiAgWzEyMTQuMzAwOCwgNjA1LjU5NzRdLFxyXG4gIFsxMjEzLjI1MTMsIDYxMC4xNTZdLFxyXG4gIFsxMjE2Ljk0NCwgNjEyLjgyMDNdLFxyXG4gIFsxMjA4LjYwMTEsIDYwNi41MzUxXSxcclxuICBbMTIwNC41MjEyLCA2MDkuMjQwN10sXHJcbiAgWzEyMDEuMjIyMywgNjA1Ljk5NDldLFxyXG4gIFsxMTk2LjEzMzMsIDYwNy4yNTM0XSxcclxuICBbMTE5My4zMDY1LCA2MTEuODQxOV0sXHJcbiAgWzExODcuNzIwOCwgNjExLjc2Njk3XSxcclxuICBbMTE5MC4yOTM2LCA2MDcuMDE0M10sXHJcbiAgWzExODQuMjQ2LCA2MDguMzc5Ml0sXHJcbiAgWzExODYuMTI3OSwgNjE2LjQ4MzNdLFxyXG4gIFsxMTgyLjM3MTYsIDYxMy4yNzRdLFxyXG4gIFsxMTc4Ljk4NTEsIDYwOS44NzM5Nl0sXHJcbiAgWzExNzQuMTQ5OSwgNjEwLjUxNDA0XSxcclxuICBbMTE3Mi41ODcyLCA2MTUuNDE2MTRdLFxyXG4gIFsxMTc3LjUxMDYsIDYxNC44NjM4M10sXHJcbiAgWzExODEuMzM2NCwgNjE4LjM5OTU0XSxcclxuICBbMTE3Ni44OTM2LCA2MTkuNjMyNTddLFxyXG4gIFsxMTcxLjgxOCwgNjIwLjExODM1XSxcclxuICBbMTE2OC43ODYzLCA2MjkuMDU3OF0sXHJcbiAgWzExNzQuMzI0OCwgNjI5LjM5NTQ1XSxcclxuICBbMTE3OC44MzQ1LCA2MjguNzU3Nl0sXHJcbiAgWzExODYuMDkxOSwgNjI1LjMwNzRdLFxyXG4gIFsxMTgxLjAyMDEsIDYyNC4wMzUxNl0sXHJcbiAgWzExNzYuMTE0NiwgNjI0LjE5MjI2XSxcclxuICBbMTE3MS44MjA2LCA2MjUuMjEyOV0sXHJcbiAgWzExNjcuNDM2LCA2MjMuODcyODZdLFxyXG4gIFsxMTY2LjY3MDQsIDYxOS40NjA5NF0sXHJcbiAgWzExNjcuMDI5LCA2MTQuODEyMjZdLFxyXG4gIFsxMTY5LjQ3MiwgNjExLjMzOTVdLFxyXG4gIFsxMTYyLjI2ODcsIDYxNi40MDI5NV0sXHJcbiAgWzExNTguNzU5MywgNjExLjQ4M10sXHJcbiAgWzExNjMuOTA2MiwgNjEwLjMzNjddLFxyXG4gIFsxMTU5LjI5NzIsIDU5NS42NjE1Nl0sXHJcbiAgWzExNjAuMzcyNCwgNTkwLjMwMTQ1XSxcclxuICBbMTE2Ny4xMDkzLCA1OTAuNTkzOV0sXHJcbiAgWzExNjguMjMyMywgNTgxLjk3NzhdLFxyXG4gIFsxMTcwLjAwNjIsIDU3Ni4zMTQ3XSxcclxuICBbMTE3NC42MDU4LCA1NzQuMjA1XSxcclxuICBbMTE3NS41NzczLCA1NjguODg5NjVdLFxyXG4gIFsxMTgwLjAwMDcsIDU2NC42NTc0XSxcclxuICBbMTE4NS43NDMzLCA1NjIuMjk5OV0sXHJcbiAgWzExODkuMTY5NCwgNTU4LjA1MjldLFxyXG4gIFsxMTg2LjE3MTEsIDU1My4yODIzNV0sXHJcbiAgWzExODguNTc4OSwgNTQ4LjA0MjVdLFxyXG4gIFsxMTkwLjAzNCwgNTM3LjMyNl0sXHJcbiAgWzExOTQuODQsIDUzNC42MTM5XSxcclxuICBbMTE5MC43Njg0LCA1MzEuMjczMTNdLFxyXG4gIFsxMTg2LjIwMDMsIDUzMi4xODIxXSxcclxuICBbMTE4NC4zMDc5LCA1MzYuNTU3NzRdLFxyXG4gIFsxMTg3LjY3NzUsIDUyNi4zODMyNF0sXHJcbiAgWzExODYuMTk3OCwgNTIxLjc3NzY1XSxcclxuICBbMTE4Ny41NTAyLCA1MTcuNTEyMV0sXHJcbiAgWzExODIuNTA2LCA1MTguNTk3NTNdLFxyXG4gIFsxMTc3LjU4NjcsIDUxOS4xMjExXSxcclxuICBbMTE4MS42NTE0LCA1MjQuMDU5Ml0sXHJcbiAgWzExNzYuNTk3NywgNTI3LjY3MzNdLFxyXG4gIFsxMTcyLjA0NjgsIDUyOS40NTUyXSxcclxuICBbMTE3Ni40NzMsIDUyMi43NTQ4XSxcclxuICBbMTE3NC43NTc3LCA1MTYuMTY1MV0sXHJcbiAgWzExNzEuODI3NSwgNTIzLjEzNjddLFxyXG4gIFsxMTcwLjg5NSwgNTE4LjQ3NzZdLFxyXG4gIFsxMTc1Ljc5MywgNTExLjQyNDI2XSxcclxuICBbMTE3My4xMTg4LCA1MDcuMzUyNjNdLFxyXG4gIFsxMTczLjgyODksIDUwMy4zNDk4XSxcclxuICBbMTE3OC40NTAxLCA1MDIuMzk4NTZdLFxyXG4gIFsxMTc3Ljg5ODcsIDUwNi44NzA1N10sXHJcbiAgWzExODAuNzAzNywgNTEwLjI5MzY3XSxcclxuICBbMTE3OS4zOTEyLCA1MTQuODY0NF0sXHJcbiAgWzExODQuMDE2MSwgNTEzLjgyMDldLFxyXG4gIFsxMTg1LjM5NTMsIDUwOS4xMDM4OF0sXHJcbiAgWzExODIuODgwNSwgNTA1LjMwMDM4XSxcclxuICBbMTE4Mi44NDkyLCA1MDAuNjQ2MjRdLFxyXG4gIFsxMTc4Ljk4MDYsIDQ5Ny42OTM4Ml0sXHJcbiAgWzExODIuNzIyLCA0OTUuNzEyNF0sXHJcbiAgWzExNzkuOTU5NCwgNDkyLjM1NzE4XSxcclxuICBbMTE3NS42MTI1LCA0OTMuOTQwMjhdLFxyXG4gIFsxMTczLjIzOTEsIDQ4OS45NDc2M10sXHJcbiAgWzExNjguNDk0OCwgNDkwLjI0MTA2XSxcclxuICBbMTE2NC44Njk4LCA0OTMuMjg4MzNdLFxyXG4gIFsxMTYwLjA5MzMsIDQ5My4zNzIyOF0sXHJcbiAgWzExNTYuMDU5LCA0OTEuOTU3MDNdLFxyXG4gIFsxMTYyLjA4NjMsIDQ5Ny4yMTA1NF0sXHJcbiAgWzExNjQuMzQ5NCwgNTA1LjAwNjY4XSxcclxuICBbMTE2My4xNDExLCA1MDEuMzc4NzhdLFxyXG4gIFsxMTU4LjM1MiwgNTAwLjY2NTEzXSxcclxuICBbMTE1OC43MTU4LCA1MDQuNjYzM10sXHJcbiAgWzExNjEuMDA3LCA1MDcuNDkyNF0sXHJcbiAgWzExNTkuMzA4MiwgNTEwLjk2NDk0XSxcclxuICBbMTE1OC4wMDAyLCA1MTQuNzczMTNdLFxyXG4gIFsxMTU0LjQ0OTEsIDUxMS45MzE4NV0sXHJcbiAgWzExNTUuMDM3NCwgNTA3LjY2MDE2XSxcclxuICBbMTE1NC4wMDU0LCA1MDMuMzI4MjJdLFxyXG4gIFsxMTUyLjYyNDUsIDQ5OS4zODExXSxcclxuICBbMTE1Ni45NzM4LCA0OTYuODE4ODJdLFxyXG4gIFsxMTUyLjUxMiwgNDk1LjEwODZdLFxyXG4gIFsxMTQ3LjQxNzcsIDQ5OS4zOTgzMl0sXHJcbiAgWzExNDkuNDg1NiwgNTA0LjM4Nl0sXHJcbiAgWzExNDkuODYyNywgNTA5LjQyNDE2XSxcclxuICBbMTE0NC45OTYzLCA1MDYuNTU4NDRdLFxyXG4gIFsxMTQ0Ljg2MjQsIDUxMS44NzE1OF0sXHJcbiAgWzExNDAuODkyNSwgNTE0LjQzODJdLFxyXG4gIFsxMTQwLjg0MTgsIDUyNC44OTk1NF0sXHJcbiAgWzExNDYuMjUxMiwgNTI3LjY3Njc2XSxcclxuICBbMTE0OS44Njk2LCA1MzAuODM1Ml0sXHJcbiAgWzExNTQuNDgzNCwgNTMyLjU4M10sXHJcbiAgWzExNTYuODg4MiwgNTI4LjI5ODk1XSxcclxuICBbMTE2MS41MjMyLCA1MjQuNjAwMzRdLFxyXG4gIFsxMTY2Ljc3NCwgNTIxLjQ0NDJdLFxyXG4gIFsxMTY3LjIwNTcsIDUyNi40NDUzXSxcclxuICBbMTE3Mi43OTM3LCA1MzQuNzM3ODVdLFxyXG4gIFsxMTc3Ljk3ODQsIDUzMy42MzI0XSxcclxuICBbMTE4MC42MTI4LCA1MzguNDA0MjRdLFxyXG4gIFsxMTgyLjc3NjksIDU0Ny41NzExXSxcclxuICBbMTE4NS4xODA5LCA1NDIuNzY3MzNdLFxyXG4gIFsxMTc5LjYzOTMsIDU0My4yNjA0NF0sXHJcbiAgWzExNzcuMTUzMiwgNTQ3Ljg5ODNdLFxyXG4gIFsxMTczLjk2NzgsIDU0NC4xMDEzXSxcclxuICBbMTE2OC45NTgzLCA1NDYuODI2MzVdLFxyXG4gIFsxMTcyLjIxNTgsIDU0OS42OTI0XSxcclxuICBbMTE3NS43MTQ2LCA1NTMuNjgwNjZdLFxyXG4gIFsxMTgwLjY0ODMsIDU1Mi4zNjEyXSxcclxuICBbMTE4MC45MDA1LCA1NTcuOTU5NjZdLFxyXG4gIFsxMTc1LjkyMDUsIDU2MC4yNDc4Nl0sXHJcbiAgWzExNzIuMDE0OSwgNTU3LjU5MDddLFxyXG4gIFsxMTY5LjMyMjksIDU1My43NjQ0XSxcclxuICBbMTE2NS41MDE1LCA1NTEuMDg3NjVdLFxyXG4gIFsxMTY0LjAxNzgsIDU0Ny4wOTE1XSxcclxuICBbMTE1OS43NzkzLCA1NDYuNzA4MDddLFxyXG4gIFsxMTU1LjAwOTgsIDU0Ny41NDkyNl0sXHJcbiAgWzExNDYuNTE3NiwgNTQ3LjYzMjc1XSxcclxuICBbMTE0Mi4zNjg1LCA1NDguODQ0Ml0sXHJcbiAgWzExMzcuOTcxMywgNTQ2Ljk5NDhdLFxyXG4gIFsxMTM5Ljc5OTYsIDU0My4wMzI3XSxcclxuICBbMTE0NC44NjY1LCA1NDMuMTYzMjddLFxyXG4gIFsxMTUwLjE1MzgsIDU0NC45ODI2N10sXHJcbiAgWzExNTMuMDMxMiwgNTQyLjEyODg1XSxcclxuICBbMTE1Ni41ODk1LCA1NDIuNDc4OV0sXHJcbiAgWzExNjAuNDM5MiwgNTQxLjc2MDRdLFxyXG4gIFsxMTY0LjgwMDgsIDU0Mi4yMDg1Nl0sXHJcbiAgWzExNjkuMDczMiwgNTQyLjI2ODJdLFxyXG4gIFsxMTcyLjA2OTMsIDUzOS4yOTUzNV0sXHJcbiAgWzExNzYuMzkzNiwgNTM5LjExNDE0XSxcclxuICBbMTE2OC4wMDEyLCA1MzIuMTg4Nl0sXHJcbiAgWzExNjcuNzM1NiwgNTM3LjM2ODk2XSxcclxuICBbMTE2Mi40OTc5LCA1MzcuODE5NjRdLFxyXG4gIFsxMTY0LjE1NzIsIDUzNC4wNTUyXSxcclxuICBbMTE2Mi43NDIsIDUyOS40MzM5Nl0sXHJcbiAgWzExNTkuNDcxMywgNTMyLjk1NTE0XSxcclxuICBbMTE1Ny44Mjk1LCA1MzcuMjA4MjVdLFxyXG4gIFsxMTUzLjY5NDYsIDUzNy42NDg0NF0sXHJcbiAgWzExNDkuOTk0NiwgNTM1LjI4Njg3XSxcclxuICBbMTE0OS4zNDYsIDU0MC4zNDUzXSxcclxuICBbMTE0Ni4xNjUsIDUzOC4yMDI3Nl0sXHJcbiAgWzExNDUuMTI1MiwgNTMzLjc5MjM2XSxcclxuICBbMTE0Mi4yNTIxLCA1MzAuMjk1OF0sXHJcbiAgWzExMzguOTAxOSwgNTM0LjM0NTVdLFxyXG4gIFsxMTQxLjk4MSwgNTM4LjQzMTk1XSxcclxuICBbMTEzNy4wNDcyLCA1MzguOTEyODRdLFxyXG4gIFsxMTMyLjk5NTYsIDU0MS4xNzFdLFxyXG4gIFsxMTMzLjYyOTQsIDU0NS41MTI4XSxcclxuICBbMTEzNC4wNzcxLCA1NTAuNDYwNF0sXHJcbiAgWzExMzguMTU4NCwgNTUyLjQ1NzVdLFxyXG4gIFsxMTQ3LjE2NzQsIDU1OC4zMjE2XSxcclxuICBbMTE0NS40MTE0LCA1NjQuMDA4OV0sXHJcbiAgWzExNTEuMDM1NSwgNTYyLjYxMzE2XSxcclxuICBbMTE1Ny4zOTA5LCA1NjUuMzA3NF0sXHJcbiAgWzExNTUuOTk3OSwgNTYxLjEzNDZdLFxyXG4gIFsxMTU4LjgzNywgNTU3LjYxMTQ1XSxcclxuICBbMTE2Mi41MzIxLCA1NjEuODU5NF0sXHJcbiAgWzExNjkuMjUyOCwgNTY4Ljg5NjM2XSxcclxuICBbMTE3My4wMTM3LCA1NjQuMzk5NjZdLFxyXG4gIFsxMTY4LjI0NTYsIDU2Mi41MjA2XSxcclxuICBbMTE2Ni4xMDY3LCA1NTcuNzMzMV0sXHJcbiAgWzExNjIuNDI1MywgNTU0LjYxNTddLFxyXG4gIFsxMTU4LjYxNjYsIDU1MS41MjU4XSxcclxuICBbMTE1My42MTc0LCA1NTMuMTIxN10sXHJcbiAgWzExNTIuNTcwNywgNTU3LjM5OTZdLFxyXG4gIFsxMTUwLjczOTYsIDU0OS41Nzk4M10sXHJcbiAgWzExNDcuMjYzMSwgNTUyLjkxOTI1XSxcclxuICBbMTE0Mi40MTkyLCA1NTQuNTA0XSxcclxuICBbMTEzMy41MDQzLCA1NTYuMTI1OV0sXHJcbiAgWzExMzcuMzA2OSwgNTU3LjkzMDI0XSxcclxuICBbMTE0MS45ODM5LCA1NTkuNzkwOV0sXHJcbiAgWzExMzguMDMwMywgNTYzLjAwMDNdLFxyXG4gIFsxMTMyLjUyMDUsIDU2Mi4yNDI1XSxcclxuICBbMTEyOC45Mzg1LCA1NjYuOTI4N10sXHJcbiAgWzExMjYuNTkzMSwgNTYyLjE0NTZdLFxyXG4gIFsxMTI4LjY4ODgsIDU1Ny45ODY0XSxcclxuICBbMTEyMi43NjQ1LCA1NTYuODgxXSxcclxuICBbMTEyMS45ODM5LCA1NjEuNzE3M10sXHJcbiAgWzExMjIuMjQ4MiwgNTY2LjIxODZdLFxyXG4gIFsxMTE2LjE2NTgsIDU2NC4yNzQ4NF0sXHJcbiAgWzExMTguMTI0MywgNTYwLjA2NDRdLFxyXG4gIFsxMTEzLjExMDEsIDU2MC4yODk1XSxcclxuICBbMTExMC4xODA5LCA1NjIuNjk0MzRdLFxyXG4gIFsxMTA3LjYzMywgNTY1LjgyNjk3XSxcclxuICBbMTEwNS4zNjc5LCA1NjIuMTQ0NjVdLFxyXG4gIFsxMTAwLjgxNzQsIDU2Mi4wNzc3Nl0sXHJcbiAgWzExMDIuODc2MSwgNTY2LjEyODA1XSxcclxuICBbMTA5OC4yNjE4LCA1NjYuNzgwNF0sXHJcbiAgWzEwOTIuMDY2LCA1NjcuOTIxNV0sXHJcbiAgWzEwOTUuNDMwNSwgNTcwLjY2MTc0XSxcclxuICBbMTA5Ny41ODQ0LCA1NzQuNjcyODVdLFxyXG4gIFsxMTAwLjQ4ODYsIDU3MC44OTc0Nl0sXHJcbiAgWzExMDUuMDQ5NiwgNTY5Ljc2NDRdLFxyXG4gIFsxMTAzLjk0MDgsIDU3NC4wNzgzXSxcclxuICBbMTEwMC44NTk0LCA1NzcuMzAwOV0sXHJcbiAgWzExMDIuNDE4OCwgNTgzLjU3NDA0XSxcclxuICBbMTEwNC40NDM3LCA1NzkuNTcyOF0sXHJcbiAgWzExMTIuOTM0MywgNTc2LjgxMzA1XSxcclxuICBbMTExMy4wODA3LCA1ODIuMTE1OV0sXHJcbiAgWzExMDguNjY4NywgNTgxLjE5NDddLFxyXG4gIFsxMTA4LjAzMzQsIDU3Ni44MzA0NF0sXHJcbiAgWzExMDkuMTEzMiwgNTczLjEyNDRdLFxyXG4gIFsxMTA5LjU0OTEsIDU2OS40MTczNl0sXHJcbiAgWzExMTIuODMwOCwgNTY3LjA3NTddLFxyXG4gIFsxMTE0LjIyMDYsIDU3Mi4xMzA4XSxcclxuICBbMTExOC4wMjE3LCA1NjguNjUyODNdLFxyXG4gIFsxMTE5LjQ4MTQsIDU3My4xNzE3NV0sXHJcbiAgWzExMTcuNDI5MiwgNTc4LjEwNTFdLFxyXG4gIFsxMTE4LjAyMjUsIDU4My41NzddLFxyXG4gIFsxMTIyLjcwOTgsIDU4NC4wMjczNF0sXHJcbiAgWzExMjIuMTMzMywgNTc4Ljc5MDRdLFxyXG4gIFsxMTI0LjQ1NTMsIDU3NC44MjA5XSxcclxuICBbMTEyNC43NjgsIDU3MC4wNjY1XSxcclxuICBbMTEyOC45ODExLCA1NzMuNzU4OF0sXHJcbiAgWzExMzMuMTA2MiwgNTcxLjY4NzQ0XSxcclxuICBbMTEzNS4wNjIxLCA1NjcuMjk3NV0sXHJcbiAgWzExMzkuMTg2NSwgNTcyLjI0MjNdLFxyXG4gIFsxMTQwLjk2MzksIDU2Ny4xNzc4Nl0sXHJcbiAgWzExNTAuMjg5LCA1NjcuNTMxNF0sXHJcbiAgWzExNDUuMTY1MiwgNTcwLjcwNTFdLFxyXG4gIFsxMTQ5LjY5NjgsIDU3NC4yNTY5Nl0sXHJcbiAgWzExNTUuMTM1OSwgNTcwLjUzODJdLFxyXG4gIFsxMTYyLjc4NywgNTY3LjgxMDJdLFxyXG4gIFsxMTY1LjU1MjcsIDU3Mi41ODg0NF0sXHJcbiAgWzExNjQuNTY4NCwgNTc3LjUxMTVdLFxyXG4gIFsxMTU5LjUxOSwgNTczLjQwNzFdLFxyXG4gIFsxMTU5LjIyNjEsIDU3OC45MzE0XSxcclxuICBbMTE2Mi40Njc4LCA1ODIuNDI3ODZdLFxyXG4gIFsxMTY0LjMyMDksIDU4Ni41MTIxXSxcclxuICBbMTE1Ny44MDk3LCA1ODQuOTIzMzRdLFxyXG4gIFsxMTU0Ljc2NzYsIDU5MC42Mzc4XSxcclxuICBbMTE0OS40NzY2LCA1ODguNTQ2N10sXHJcbiAgWzExNTIuNzQyOCwgNTg0LjAwMzU0XSxcclxuICBbMTE1NC4xNjkyLCA1NzcuOTE2NzVdLFxyXG4gIFsxMTQ3Ljc3NTQsIDU4MS4wMzE1XSxcclxuICBbMTE0Mi45NzUsIDU3Ny4zNTU1XSxcclxuICBbMTEzNi43OTU5LCA1NzcuMDU3Nl0sXHJcbiAgWzExMzEuOTc1NiwgNTc4LjMyMzZdLFxyXG4gIFsxMTI3LjE4MjUsIDU4MC4xNjU5XSxcclxuICBbMTEyNi45MDkyLCA1ODYuMTMzNTRdLFxyXG4gIFsxMTI1Ljk1NTgsIDU5MS4zNTE1Nl0sXHJcbiAgWzExMjkuMzEzMSwgNTk2LjIyOTldLFxyXG4gIFsxMTMyLjE5MzYsIDYwMC41NDIzNl0sXHJcbiAgWzExMzcuOTUzOSwgNTk5LjE3Mzk1XSxcclxuICBbMTE0My4zNDA3LCA1OTkuOTA0M10sXHJcbiAgWzExMzUuODA3NSwgNTkyLjEwODVdLFxyXG4gIFsxMTMxLjM3MiwgNTkwLjA4MzldLFxyXG4gIFsxMTMxLjkyNzQsIDU4NC4zMzc2NV0sXHJcbiAgWzExMzYuNjM3NSwgNTgzLjMwOTJdLFxyXG4gIFsxMTQxLjA2MjYsIDU4NC4zNTAzXSxcclxuICBbMTE0NC43NjIzLCA1ODcuMzM2NF0sXHJcbiAgWzExNDAuODAxMywgNTkyLjQ5MDJdLFxyXG4gIFsxMTQ2LjA3NzMsIDU5NC4xOTQ3XSxcclxuICBbMTE1MS42NjI4LCA1OTUuMDg5OTddLFxyXG4gIFsxMTU1Ljc3NCwgNTk5LjcyMzJdLFxyXG4gIFsxMTQ5LjI1NTIsIDYwMC43MTgxNF0sXHJcbiAgWzExNTIuMzQ5NCwgNjA1LjU2MDY3XSxcclxuICBbMTE1Ny42Mzg3LCA2MTcuNzM4MTZdLFxyXG4gIFsxMTUzLjA1MjQsIDYxNS42MDg0Nl0sXHJcbiAgWzExNTEuNTQyLCA2MjAuMjgxOV0sXHJcbiAgWzExNDYuMzAxMywgNjIwLjYyNjQ2XSxcclxuICBbMTE1NC4xMzYxLCA2MjUuODU0NDNdLFxyXG4gIFsxMTU2Ljk5OTEsIDYyMi41MTQxXSxcclxuICBbMTE2MS45NjY3LCA2MjIuMzUxMjZdLFxyXG4gIFsxMTYzLjU0NDksIDYyNi45ODAzNV0sXHJcbiAgWzExNTguNzE2NywgNjI4Ljk2MjA0XSxcclxuICBbMTE2MC45ODM4LCA2MzUuNTcyMjddLFxyXG4gIFsxMTY3LjEyNDgsIDYzNi43NjYyXSxcclxuICBbMTE2NC41NDgsIDYzMS45MzY3N10sXHJcbiAgWzExNzEuMjEwNiwgNjMzLjUxOF0sXHJcbiAgWzExNzYuMTg4OCwgNjM0LjE4Mjg2XSxcclxuICBbMTE4MC45ODE5LCA2MzMuMzA5MV0sXHJcbiAgWzExODQuNDcxOCwgNjM2LjUyNjU1XSxcclxuICBbMTE4OC4xODg3LCA2NDAuNTcyOV0sXHJcbiAgWzExOTIuNDQ1NywgNjQ0LjM3NjA0XSxcclxuICBbMTE5Ny4yNTU0LCA2NDMuMDI2XSxcclxuICBbMTE5My4wODA2LCA2MzkuMzc5NjRdLFxyXG4gIFsxMTk2LjI5NDMsIDYzNi40NjMyNl0sXHJcbiAgWzEyMDEuNjU2MSwgNjM0LjYwMjhdLFxyXG4gIFsxMjAwLjU4MDQsIDYzOS4xNzQ4N10sXHJcbiAgWzEyMDIuMzY2MSwgNjQzLjM4NDAzXSxcclxuICBbMTIwMC44ODc1LCA2NDcuNzM2Ml0sXHJcbiAgWzExOTYuNDE5OCwgNjQ5LjExN10sXHJcbiAgWzExOTUuOTA0LCA2NTQuODc5NV0sXHJcbiAgWzEyMDEuNTM1NSwgNjU0LjIwOTZdLFxyXG4gIFsxMjA0LjU1NDksIDY1MC45ODI4NV0sXHJcbiAgWzEyMDguOTc1MiwgNjUwLjk3OTQzXSxcclxuICBbMTIxMy43NDMsIDY1MS40Njk0XSxcclxuICBbMTIxNi43Mjc3LCA2NDcuODAwOV0sXHJcbiAgWzEyMTkuOTY1NiwgNjQ0LjU1ODddLFxyXG4gIFsxMjE5LjIwODcsIDY0MC42NTQyXSxcclxuICBbMTIxNC45NjkyLCA2NDMuMjU3NV0sXHJcbiAgWzEyMTEuNTMwNCwgNjQ2LjQ3MDNdLFxyXG4gIFsxMjA2LjczMDYsIDY0NS45MzUyNF0sXHJcbiAgWzEyMDUuOTk1NCwgNjQwLjk5NjhdLFxyXG4gIFsxMjEwLjQ2NzcsIDY0MS4wOTc1XSxcclxuICBbMTIxNC4yNjIxLCA2MzguNjAxOV0sXHJcbiAgWzEyMTcuODA1NCwgNjM2LjczNjk0XSxcclxuICBbMTIyMi4wODA4LCA2MzYuODExNDZdLFxyXG4gIFsxMjIyLjQ3MjksIDYzMy4wODY0XSxcclxuICBbMTIyNS41Mjc4LCA2MzAuODY2M10sXHJcbiAgWzEyMjkuMjAxOSwgNjMxLjk1MjE1XSxcclxuICBbMTIzMS4zNjc3LCA2MzguMDIxN10sXHJcbiAgWzEyMjcuMDM2NSwgNjM2LjUxNV0sXHJcbiAgWzEyMjQuMzIzNywgNjQwLjI5MzhdLFxyXG4gIFsxMjI1LjE4MSwgNjQ0LjExMTQ1XSxcclxuICBbMTIyOC44MTA3LCA2NDcuNDQxOV0sXHJcbiAgWzEyMzMuOTcxMiwgNjQ3LjY5NzI3XSxcclxuICBbMTIzNy45Njc5LCA2NDUuNDgxMl0sXHJcbiAgWzEyMzkuOTE5LCA2NTAuNzg5OF0sXHJcbiAgWzEyMzAuMzkyOCwgNjUyLjM2MzFdLFxyXG4gIFsxMjI4LjA3NzksIDY1Ni44Mzk3XSxcclxuICBbMTIyOC41OTY5LCA2NjMuNjUwMjddLFxyXG4gIFsxMjMxLjM0MzMsIDY3MC4xMzQxNl0sXHJcbiAgWzEyMjIuMTU2NCwgNjY0LjU2NTU1XSxcclxuICBbMTIxNi4yNzMsIDY2My44ODg5XSxcclxuICBbMTIxMS42NDU2LCA2NjEuNTAwN10sXHJcbiAgWzEyMjQuMTU4NywgNjU5LjcwMzI1XSxcclxuICBbMTIxOC45NDg5LCA2NTEuOTk2MzRdLFxyXG4gIFsxMjIyLjU1ODUsIDY0OC4wNzg2XSxcclxuICBbMTIyNS41NzQsIDY1MS40MDI2XSxcclxuICBbMTIyMi42Njk5LCA2NTQuNzc5NjZdLFxyXG4gIFsxMjE5LjAxODQsIDY1OC40MDU0XSxcclxuICBbMTIxNS4wMzUsIDY1Ni4yNjQzNF0sXHJcbiAgWzEyMDkuOTM2NSwgNjU1Ljg3NjM0XSxcclxuICBbMTIwNS43MTU2LCA2NTkuNzk4MTZdLFxyXG4gIFsxMTk5LjgwNywgNjU5LjUxMjE1XSxcclxuICBbMTE5NC40ODE3LCA2NjIuMDc3NV0sXHJcbiAgWzExOTAuNDg5LCA2NTYuNzQ3NV0sXHJcbiAgWzExODcuNDM2NSwgNjYxLjAzMjVdLFxyXG4gIFsxMTc2Ljc1MjksIDY2My4zNjk0XSxcclxuICBbMTE3Ny4wNzA5LCA2NTYuMDQ5Ml0sXHJcbiAgWzExNzEuNjY3LCA2NjAuMTYzOTRdLFxyXG4gIFsxMTU1LjQ0MiwgNjM5LjY5NTVdLFxyXG4gIFsxMTU1Ljk2NzIsIDYzNC4yMzc1NV0sXHJcbiAgWzExNTIuMjQ2MywgNjMwLjQ5NDNdLFxyXG4gIFsxMTQ4LjQ1NDcsIDYyNS43MzIwNl0sXHJcbiAgWzExNDUuNzE0NCwgNjMwLjcyMTVdLFxyXG4gIFsxMTQxLjUwMzcsIDYyNi4yNjA2XSxcclxuICBbMTEzOS40MTM1LCA2MzIuMTYyN10sXHJcbiAgWzExNDMuNzE5NiwgNjM2Ljk4ODY1XSxcclxuICBbMTE0OS43MTY0LCA2MzUuNzA5NF0sXHJcbiAgWzExNDguNTIwOSwgNjQyLjYyMzY2XSxcclxuICBbMTE0MS42NzM1LCA2NDQuMjU4Ml0sXHJcbiAgWzExMzguMDI5NywgNjM5Ljc5MTU2XSxcclxuICBbMTEzNS4wNDk4LCA2NDUuOTY1OF0sXHJcbiAgWzExMzEuNjg2LCA2NDEuNTc2NTRdLFxyXG4gIFsxMTI4LjYzNDgsIDYzNy4xNTUzXSxcclxuICBbMTEyMi41NzAzLCA2MzcuODg1NF0sXHJcbiAgWzExMTkuMTU3NSwgNjQ3Ljc2MzU1XSxcclxuICBbMTExOS4zMTc5LCA2NDIuNjEwOTZdLFxyXG4gIFsxMTIzLjExNjgsIDY2My42ODk1XSxcclxuICBbMTExNy40MjY0LCA2NjQuNTg2Ml0sXHJcbiAgWzExMTAuODU2LCA2NjQuNjM4NzNdLFxyXG4gIFsxMTA4LjY2MTEsIDY1OS4wNDgzXSxcclxuICBbMTExNC41MzI3LCA2NTkuMjQ4OF0sXHJcbiAgWzExMDUuMDA4OSwgNjY0LjQ5MzE2XSxcclxuICBbMTEwMC44MDM4LCA2NjguNTkxNTVdLFxyXG4gIFsxMDk0LjIzMywgNjY2Ljg5OTRdLFxyXG4gIFsxMTAzLjE3ODIsIDY3NS43OTEyNl0sXHJcbiAgWzEwOTguNTM3NiwgNjczLjI1NzU3XSxcclxuICBbMTA5My44MjkyLCA2NzQuMDIwNTddLFxyXG4gIFsxMDg4LjU0MzIsIDY3NS4zOTgyXSxcclxuICBbMTA4NC40ODk2LCA2ODAuMTQ3Ml0sXHJcbiAgWzEwOTEuMTQzMywgNjgwLjUxMzJdLFxyXG4gIFsxMDk3Ljg4NzEsIDY4MC4zNTE0NF0sXHJcbiAgWzExMDcuMTM2MiwgNjcwLjcxNzddLFxyXG4gIFsxMTA4LjQ0MTcsIDY3Ny40NDA5XSxcclxuICBbMTExMi45NTA4LCA2NzMuNjA2MTRdLFxyXG4gIFsxMTEzLjQ5OTksIDY2OS4wNDFdLFxyXG4gIFsxMTE5LjMxNjQsIDY3MC4wMDE2XSxcclxuICBbMTEyNS4yMjkxLCA2NjkuNTI3OF0sXHJcbiAgWzExMjguNDEyNSwgNjY0LjIxOTJdLFxyXG4gIFsxMTM2LjM3NjMsIDY1MS45MDg0NV0sXHJcbiAgWzExMjguOTY1MiwgNjQ4LjM4MTg0XSxcclxuICBbMTEyNS42OTc2LCA2NDMuNDExMjVdLFxyXG4gIFsxMTM0LjY4NjIsIDYzNS41OTU2XSxcclxuICBbMTEzMS43MDY5LCA2MzEuNDkxN10sXHJcbiAgWzExMzQuNTIzLCA2MjcuNDAyMl0sXHJcbiAgWzExMTYuODQ5NSwgNjE0LjEzNjJdLFxyXG4gIFsxMTI4LjI5ODMsIDYwNy4xMDk1XSxcclxuICBbMTEyNC4xMTYxLCA2MDEuMzYxMTVdLFxyXG4gIFsxMTIyLjI0NjUsIDU5NS4xNzQ5XSxcclxuICBbMTEyMC4xOTAyLCA1ODkuMjg3MjNdLFxyXG4gIFsxMTE3LjIwMjEsIDU5OC43MjQzN10sXHJcbiAgWzExMTAuMzc2NSwgNTk4LjAzMzU3XSxcclxuICBbMTExNS4yNywgNTkyLjc0MjddLFxyXG4gIFsxMTE0LjAwMjksIDU4Ny4yODA2NF0sXHJcbiAgWzExMDkuNDM2NCwgNTkxLjE2Nl0sXHJcbiAgWzExMDcuOTI0NiwgNTg1Ljg3NjhdLFxyXG4gIFsxMTAzLjIyMTMsIDU4OC45NDY1M10sXHJcbiAgWzEwOTguMjg4NSwgNTg2LjYwMzFdLFxyXG4gIFsxMDkzLjgwODUsIDU4Mi4wNDU3XSxcclxuICBbMTA5Ny44NjQzLCA1ODAuNTcyNF0sXHJcbiAgWzEwOTMuOTI0MiwgNTg4LjE5OTJdLFxyXG4gIFsxMDkzLjEyOTMsIDU5My4zNzA3XSxcclxuICBbMTA5OC45ODc4LCA1OTMuNDczMTRdLFxyXG4gIFsxMTA0Ljc4MTksIDU5NC42NTUyXSxcclxuICBbMTEwMy4zMjQzLCA2MDAuMDk1N10sXHJcbiAgWzExMDcuNzUxNSwgNjA0LjkwM10sXHJcbiAgWzExMDIuNzg2LCA2MDguODIzXSxcclxuICBbMTA5Ny43MjA3LCA2MTEuODU3ODVdLFxyXG4gIFsxMDkwLjQ3MDMsIDYxMi42MTc1XSxcclxuICBbMTA4OS4zNTk0LCA2MTkuOTU4Nl0sXHJcbiAgWzEwODQuODQ4MywgNjMyLjIwOTddLFxyXG4gIFsxMDg4LjMyOTgsIDYzNy45MTczNl0sXHJcbiAgWzEwODAuNDU2LCA2NDIuOTM1NTVdLFxyXG4gIFsxMDc2LjI3MTcsIDYzOS45MTg2XSxcclxuICBbMTA4Mi4wNDQ0LCA2MzcuMjk3XSxcclxuICBbMTA3Ni45OTM4LCA2MjYuNTA5MDNdLFxyXG4gIFsxMDc2LjkxNzIsIDYyMC41NDc1XSxcclxuICBbMTA4Mi44MjksIDYyMC4xMDE4N10sXHJcbiAgWzEwODQuNzA0OCwgNjE0Ljk2MjFdLFxyXG4gIFsxMDc3LjY4MDUsIDYxNC41NjA1XSxcclxuICBbMTA3Ni42NjgyLCA2MDMuMjQ0N10sXHJcbiAgWzEwNzUuOTg0NywgNTkzLjY4NThdLFxyXG4gIFsxMDc5LjU3MzksIDU5MS4yNjFdLFxyXG4gIFsxMDg0LjEyNzgsIDU4OS41ODAxXSxcclxuICBbMTA4OC44MDQ2LCA1ODguNTk1Ml0sXHJcbiAgWzEwODguMzUyOSwgNTk0LjI0NTZdLFxyXG4gIFsxMDgyLjU1LCA1OTUuMDUzXSxcclxuICBbMTA4NS43NzM2LCA1OTkuMDA5MDNdLFxyXG4gIFsxMDkxLjAwMTIsIDYwMC43MDMwNl0sXHJcbiAgWzEwOTUuODg4LCA1OTguMzQ3NjZdLFxyXG4gIFsxMDk4LjQ5MzUsIDYwMy41MDYxXSxcclxuICBbMTA5My44MDQsIDYwNi45MTQzN10sXHJcbiAgWzEwODcuOTY0NywgNjA2LjEzNTI1XSxcclxuICBbMTA4My4wNzQ1LCA2MDkuNDA1OF0sXHJcbiAgWzEwNzYuOTk1NiwgNjA4Ljc0OTI3XSxcclxuICBbMTA4Mi4zMzQ1LCA2MDIuOTMzM10sXHJcbiAgWzEwNzcuNjgwOCwgNTk4LjI0MDVdLFxyXG4gIFsxMDc2LjEwODksIDU4Ny45Njk4NV0sXHJcbiAgWzEwODAuMzY4NSwgNTg1Ljc5MzhdLFxyXG4gIFsxMDg0Ljc5MywgNTg0LjE4NjA0XSxcclxuICBbMTA4OS43MTA5LCA1ODMuNTM0N10sXHJcbiAgWzEwODUuNzc4NiwgNTc5LjQwOTRdLFxyXG4gIFsxMDg5LjUxNzgsIDU3Ny43Mzk3NV0sXHJcbiAgWzEwOTMuNzI0NiwgNTc2LjI4NTM0XSxcclxuICBbMTA5MC4wODE3LCA1NzIuNDc0Ml0sXHJcbiAgWzEwODUuNTc2MiwgNTY5LjYyOTMzXSxcclxuICBbMTA4My43NDA0LCA1NzQuMTg2MDRdLFxyXG4gIFsxMDgxLjAzMTIsIDU3OS4yNDc3XSxcclxuICBbMTA3Ni41NTQ5LCA1ODIuNTkyOV0sXHJcbiAgWzEwNzYuNDA1MywgNTc3LjQwOTFdLFxyXG4gIFsxMDc3LjI0NjgsIDU3My4wMTk2NV0sXHJcbiAgWzEwNzkuMzM4MSwgNTY5LjAxOTldLFxyXG4gIFsxMDgyLjc0MzcsIDU2NS40MDU1XSxcclxuICBbMTA4OC4wOTk5LCA1NjUuNTI1NV0sXHJcbiAgWzEwODYuMTg1NCwgNTYxLjY0NDNdLFxyXG4gIFsxMDkwLjI2OTUsIDU2MC44MzA4XSxcclxuICBbMTA5Mi45MTY0LCA1NjMuODY0NzVdLFxyXG4gIFsxMDk2LjcxMjIsIDU2Mi44Mzk5N10sXHJcbiAgWzEwOTQuNjc0NywgNTU5LjA4N10sXHJcbiAgWzEwOTguODI2MywgNTU4LjEwMTFdLFxyXG4gIFsxMTAxLjgxNTQsIDU1NC4xNjA3XSxcclxuICBbMTEwMy4zODk0LCA1NTcuOTEwNV0sXHJcbiAgWzExMDcuNzkwOSwgNTU4LjM1NTA0XSxcclxuICBbMTExMC43MjExLCA1NTUuNTA1M10sXHJcbiAgWzExMTQuNzIyOSwgNTU2LjQxNTRdLFxyXG4gIFsxMTE4LjAzMTUsIDU1NC40NzQ1XSxcclxuICBbMTExOS44MzM0LCA1NTAuNTc2M10sXHJcbiAgWzExMjQuMTc4NywgNTQ3LjY0ODZdLFxyXG4gIFsxMTI1LjIzMiwgNTUzLjA0OTI2XSxcclxuICBbMTEzMC4wMjgsIDU1My4zMTkzXSxcclxuICBbMTEyOS4wODIzLCA1NDguNjY2MTRdLFxyXG4gIFsxMTI4LjUxOTIsIDU0My41NDcxXSxcclxuICBbMTEyMy43NDEzLCA1NDEuNzMwMl0sXHJcbiAgWzExMTkuNTUxOSwgNTQ0LjQ0NDM0XSxcclxuICBbMTExNS4yNzksIDU0Ny4yMzg4XSxcclxuICBbMTExMi4xNzY1LCA1NTAuOTg3MzddLFxyXG4gIFsxMTA2LjY1NjEsIDU1My4xMzA4Nl0sXHJcbiAgWzExMDUuNjgwOSwgNTQ4LjMzNTE0XSxcclxuICBbMTExMC4wMDQ1LCA1NDUuMzc1NF0sXHJcbiAgWzExMTQuNTQ1NywgNTQxLjU2OThdLFxyXG4gIFsxMTE5LjMwODgsIDUzOC4wODQyXSxcclxuICBbMTEyMy41MTYxLCA1MzQuODkyNl0sXHJcbiAgWzExMjcuMzc4NCwgNTM4LjAxNzZdLFxyXG4gIFsxMTMyLjI4ODgsIDUzNi40OTQ1N10sXHJcbiAgWzExMzMuNzQ1OCwgNTMyLjE0NjM2XSxcclxuICBbMTEzNy4zMjU3LCA1MjguOTg3NTVdLFxyXG4gIFsxMTI3Ljg1MjUsIDUzMi4wMDE5XSxcclxuICBbMTEzMC44NjkzLCA1MjcuNzMwODNdLFxyXG4gIFsxMTM0Ljg3MywgNTI0LjIwMDFdLFxyXG4gIFsxMTM3LjQzLCA1MTkuNjA2NF0sXHJcbiAgWzExNDIuMzc1OSwgNTE5LjY2NTddLFxyXG4gIFsxMTQ2LjYyMTIsIDUxNy4zNDg2XSxcclxuICBbMTE1MC4xMzg0LCA1MTQuMzc5Nl0sXHJcbiAgWzExNTQuMDQ4OCwgNTE3LjExNjMzXSxcclxuICBbMTE1MS4xMzQ1LCA1MjAuNzA1OTNdLFxyXG4gIFsxMTQ2LjQ2NzgsIDUyMi44Nzk2NF0sXHJcbiAgWzExNTEuNjM2NSwgNTI2LjE4OTE1XSxcclxuICBbMTE1Ni4wNzI2LCA1MjMuMTk1M10sXHJcbiAgWzExNTguMjkwNiwgNTE5LjIyMTldLFxyXG4gIFsxMTYyLjYyNjIsIDUxOS44ODhdLFxyXG4gIFsxMTYyLjM3NywgNTE1LjIwMjldLFxyXG4gIFsxMTYzLjc4MDksIDUxMC41MjMzOF0sXHJcbiAgWzExNjcuMTM5NiwgNTEyLjEyNDRdLFxyXG4gIFsxMTY2LjY1MjMsIDUxNi4zMTYzNV0sXHJcbiAgWzExNzEuMzE1MSwgNTEzLjk0NF0sXHJcbiAgWzExNzAuNzk0NCwgNTEwLjE3MjU1XSxcclxuICBbMTE2Ny42ODk1LCA1MDcuNDM0NF0sXHJcbiAgWzExNjguODM1LCA1MDMuMjk2Ml0sXHJcbiAgWzExNzAuNzYyNiwgNDk5LjM4NjFdLFxyXG4gIFsxMTc0LjczNzIsIDQ5OC42Mjk2XSxcclxuICBbMTE3MC40ODY2LCA0OTQuNjQ5MzVdLFxyXG4gIFsxMTY2LjY2NzYsIDQ5OC4xOTY2Nl0sXHJcbiAgWzExNjQuMjE2MiwgNDg4LjA0NDNdLFxyXG4gIFsxMTYwLjA4NzksIDQ4OC40MjE4NF0sXHJcbiAgWzExNjQuMjM2MiwgNDgzLjMxMjM1XSxcclxuICBbMTE2OC41MzMyLCA0ODUuMzAyOTVdLFxyXG4gIFsxMTczLjM3MTUsIDQ4NC42OTAyXSxcclxuICBbMTE2OS44NjE1LCA0ODAuMDIxMzZdLFxyXG4gIFsxMTc0LjM3MjYsIDQ3Ni45NTU1XSxcclxuICBbMTE3OS4wMzEsIDQ3NC4wMDc3NV0sXHJcbiAgWzExODMuMjMwNSwgNDc2LjYxNzY4XSxcclxuICBbMTE4Mi4xMjQ2LCA0ODMuMjgyOTNdLFxyXG4gIFsxMTc3LjY2NywgNDgxLjQxNV0sXHJcbiAgWzExNzcuODM5NywgNDg3LjcxMDMzXSxcclxuICBbMTE4Mi42OTI5LCA0ODguNDEzNF0sXHJcbiAgWzExODUuNzI0NCwgNDkyLjIyMDhdLFxyXG4gIFsxMTg3LjQ3NjgsIDQ4NS41OTI4Nl0sXHJcbiAgWzExODYuNDM4MiwgNDgwLjU2NTI1XSxcclxuICBbMTE5MC43NDczLCA0ODEuNTc1MTZdLFxyXG4gIFsxMTkzLjE3NTksIDQ4NS4wNjY5Nl0sXHJcbiAgWzExOTcuOTk3OSwgNDg0LjEzMTIzXSxcclxuICBbMTIwMC4wNjU5LCA0NzkuOTg0MzhdLFxyXG4gIFsxMTk0LjgzNzgsIDQ3OC44NTcxMl0sXHJcbiAgWzExODguNzg4NSwgNDc1LjMzMDVdLFxyXG4gIFsxMTkwLjQxNTgsIDQ2OS44MTU1NV0sXHJcbiAgWzExOTQuNDIyNywgNDczLjgwOTAyXSxcclxuICBbMTE5Ni44ODM1LCA0NjkuNTgyXSxcclxuICBbMTIwMy4yODA2LCA0NjkuNDQ1OThdLFxyXG4gIFsxMjAwLjM3NDMsIDQ3NC4zNDc1M10sXHJcbiAgWzEyMDQuMzI1OSwgNDc3LjY5OTldLFxyXG4gIFsxMjA5LjEyNDYsIDQ3OS4yMDkxXSxcclxuICBbMTIwNy43MjM5LCA0NzMuNjA1MzVdLFxyXG4gIFsxMjA5LjU5NDUsIDQ2Ni44MjE2XSxcclxuICBbMTIxNS4yNjY4LCA0NjQuNjQxOTRdLFxyXG4gIFsxMjIxLjQ1MDQsIDQ2Ny4zMDVdLFxyXG4gIFsxMjI1LjU1NjUsIDQ2NC4zMTIwN10sXHJcbiAgWzEyMzEuMDU1NCwgNDYyLjgwMl0sXHJcbiAgWzEyNDEuMzI3NCwgNDY0Ljg3OTFdLFxyXG4gIFsxMjM2LjMwMDMsIDQ2NC4yMDk4NF0sXHJcbiAgWzEyNDYuMTI2LCA0NjguNjMwNjhdLFxyXG4gIFsxMjUwLjY3NDIsIDQ2OC4zNDk4XSxcclxuICBbMTI1NC45ODQ0LCA0NjkuNjc2MTVdLFxyXG4gIFsxMjY0LjQyODgsIDQ3MC4yNjQxXSxcclxuICBbMTI2OS44OTgzLCA0NjkuNTA3NjZdLFxyXG4gIFsxMjY4LjczODgsIDQ3NC41MzgyN10sXHJcbiAgWzEyNTkuMzE1OCwgNDcyLjY4OTA2XSxcclxuICBbMTI1OS40MDk5LCA0NjYuOTQ4MV0sXHJcbiAgWzEyNDYuODY4NCwgNDYzLjc5NF0sXHJcbiAgWzEyNDEuODYyNywgNDcwLjM5NzFdLFxyXG4gIFsxMjM2LjA3NjQsIDQ3MC4wMDEwN10sXHJcbiAgWzEyMzAuMjIzMSwgNDY5LjA1ODhdLFxyXG4gIFsxMjMyLjk1LCA0ODAuNzI2MTddLFxyXG4gIFsxMjQzLjE0NjEsIDQ4Mi44NzI5XSxcclxuICBbMTI0NS4yMjc3LCA0ODYuNTc5MjhdLFxyXG4gIFsxMjQ3LjYxODQsIDQ5MC4xNjc1NF0sXHJcbiAgWzEyNDcuNjE0NSwgNDk0LjYxMjE1XSxcclxuICBbMTI0My44OTIzLCA1MDQuNDE5OThdLFxyXG4gIFsxMjQwLjI4NTYsIDUwOC41MzY5Nl0sXHJcbiAgWzEyNDUuNDk1NiwgNTA5LjI1NTA3XSxcclxuICBbMTI0Ni4zODY2LCA1MTMuNzk2NF0sXHJcbiAgWzEyNTEuMjk2MywgNTEyLjQxOTldLFxyXG4gIFsxMjUyLjE2ODcsIDUxNy42NjE1Nl0sXHJcbiAgWzEyNDcuOTIxMywgNTE4LjU0MV0sXHJcbiAgWzEyNDIuODIyNCwgNTE4LjMxMDg1XSxcclxuICBbMTI0NC4yOTI4LCA1MjIuODAyMV0sXHJcbiAgWzEyNDguNDczNSwgNTI0LjM4OTddLFxyXG4gIFsxMjUyLjI2NTEsIDUyMi40MjQxXSxcclxuICBbMTI1NS44Njc3LCA1MjQuODgyNDVdLFxyXG4gIFsxMjUyLjA3NywgNTI3LjgxOTRdLFxyXG4gIFsxMjQ4LjY2NCwgNTMwLjM2MTFdLFxyXG4gIFsxMjQ0LjQyMTUsIDUyNy42NTk4XSxcclxuICBbMTI0MS40OTYzLCA1MzEuNzY3NjRdLFxyXG4gIFsxMjQ1Ljg5OTksIDUzMy42Mjk2XSxcclxuICBbMTI0My43MDAyLCA1MzcuODg4OF0sXHJcbiAgWzEyNDcuMTE2OCwgNTQxLjA0NTY1XSxcclxuICBbMTI0OS45MjQyLCA1MzYuNjQ5NTRdLFxyXG4gIFsxMjUzLjA3OTYsIDUzMy4zMTYzNV0sXHJcbiAgWzEyNTYuMzE3NiwgNTI5Ljk4NzJdLFxyXG4gIFsxMjU5LjQ2NjYsIDUyNy4wNTM2XSxcclxuICBbMTI2My41MzM4LCA1MjYuMDQ5OV0sXHJcbiAgWzEyNjYuNzc4MSwgNTI4LjI1MDhdLFxyXG4gIFsxMjY3LjE2NDEsIDUzMi41MjJdLFxyXG4gIFsxMjcwLjkxMjgsIDUyOS42MzA0M10sXHJcbiAgWzEyNzIuNjg0MSwgNTI1LjMwNDFdLFxyXG4gIFsxMjY4LjQ1NjcsIDUyMy45MzAwNV0sXHJcbiAgWzEyNzEuNDEyNiwgNTIwLjM2ODJdLFxyXG4gIFsxMjc0Ljg5NjEsIDUxOC4xMTY3XSxcclxuICBbMTI3OS4yNzM4LCA1MTguMzYxMV0sXHJcbiAgWzEyODEuNDgxOCwgNTE0LjE2MTVdLFxyXG4gIFsxMjgxLjE1OTcsIDUwOS40MzkyN10sXHJcbiAgWzEyNzcuNDA0NSwgNTA5LjQyOTM4XSxcclxuICBbMTI3My4zMTQyLCA1MTAuMzgwOF0sXHJcbiAgWzEyNjkuMTY1OCwgNTA4LjYxMjQzXSxcclxuICBbMTI2Ni4zMTU4LCA1MTIuNzU0Ml0sXHJcbiAgWzEyNjEuNDgyOCwgNTE3LjQxN10sXHJcbiAgWzEyNjEuMjY1NSwgNTEyLjUyODVdLFxyXG4gIFsxMjYzLjk5NzEsIDUwNy43MjM5N10sXHJcbiAgWzEyNjcuNjYzLCA1MDMuNDY0NTRdLFxyXG4gIFsxMjYzLjcwOTcsIDQ5OS44NzAzM10sXHJcbiAgWzEyNjcuOTQxOSwgNDk3LjU5NDNdLFxyXG4gIFsxMjcyLjgyMDcsIDQ5OS45NjY4XSxcclxuICBbMTI3My4zNjY2LCA1MDUuMDAwMThdLFxyXG4gIFsxMjc4LjUxNTUsIDUwNC41ODI0Nl0sXHJcbiAgWzEyODMuMDY2OCwgNTA1LjU1MDVdLFxyXG4gIFsxMjg2Ljg2MzksIDUwNC4yMDMyMl0sXHJcbiAgWzEyOTAuMzU2MSwgNTAyLjI1ODQ4XSxcclxuICBbMTI5Mi43MTkxLCA0OTcuODMwMzhdLFxyXG4gIFsxMjg4LjA3NTIsIDQ5NS4zNjUxXSxcclxuICBbMTI4NC4yOTk3LCA1MDAuNTkzNDhdLFxyXG4gIFsxMjgxLjgzNCwgNDk2LjU4MDI2XSxcclxuICBbMTI3OC4zOTcsIDUwMC4wNjEyNV0sXHJcbiAgWzEyNzYuNTc5OCwgNDk1LjA3NDddLFxyXG4gIFsxMjcxLjk0MTQsIDQ5NC4xODA0Ml0sXHJcbiAgWzEyNjguMjEzNywgNDkxLjE1MjRdLFxyXG4gIFsxMjczLjExODcsIDQ3Ny43NDE4XSxcclxuICBbMTI3OC4wODc5LCA0NzcuODQxNV0sXHJcbiAgWzEyNzUuMDUwNywgNDcyLjk3OTc0XSxcclxuICBbMTI3OS42NjkyLCA0NzAuNDYxMjRdLFxyXG4gIFsxMjg0LjUzNjQsIDQ3MS4zNTIxXSxcclxuICBbMTI4OS44ODQ1LCA0NzIuNDQxMV0sXHJcbiAgWzEyOTcuODcxNSwgNDgwLjAzMTFdLFxyXG4gIFsxMzAwLjc0MjksIDQ4NS40MDg4XSxcclxuICBbMTMwNS4xMTAxLCA0ODkuMjIwMjhdLFxyXG4gIFsxMzAzLjkyMDMsIDQ5NS42MTQ0NF0sXHJcbiAgWzEyOTguMzc0OCwgNDk3LjEyODVdLFxyXG4gIFsxMjk5Ljc3MzYsIDQ5MS42MTE0Ml0sXHJcbiAgWzEyOTMuOTg4MywgNDkyLjg2MTE1XSxcclxuICBbMTI5NS41MDEyLCA0ODYuODMwNjNdLFxyXG4gIFsxMjkxLjQ2NDgsIDQ4My4zMzQ5XSxcclxuICBbMTI4OC40NzUzLCA0NzkuMjE3ODZdLFxyXG4gIFsxMjg1LjcxOTgsIDQ3NS45MzI1XSxcclxuICBbMTI4MS4xMzQsIDQ3NS4yNzA5NF0sXHJcbiAgWzEyOTMuMTI5NSwgNDc3LjA0MzhdLFxyXG4gIFsxMzA1LjM2NjUsIDQ4Mi40NTUzXSxcclxuICBbMTMxMi45OTEzLCA0ODMuNDY4MzJdLFxyXG4gIFsxMzA5LjYxMDEsIDQ4Ni43NDgxNF0sXHJcbiAgWzEzMDkuMzM4MSwgNDkzLjUzOTEyXSxcclxuICBbMTMxMy44NzExLCA0OTEuMDA0NThdLFxyXG4gIFsxMzI1LjA1OTgsIDQ5Mi44MTEyOF0sXHJcbiAgWzEzMjcuMjkwMiwgNDk2LjY1NzA3XSxcclxuICBbMTMyNy4wMDAyLCA1MDAuNzE2OThdLFxyXG4gIFsxMzMxLjc0MjcsIDQ5Ni42OTIzMl0sXHJcbiAgWzEzMjkuNzE4MywgNDkyLjU1NzddLFxyXG4gIFsxMzMzLjg0NywgNDkyLjQ2NjVdLFxyXG4gIFsxMzMzLjM0ODgsIDUwMC40NDQzXSxcclxuICBbMTMzMC43NDU3LCA1MDQuMzg4XSxcclxuICBbMTMzMC4zMTE1LCA1MDguOTEyNTddLFxyXG4gIFsxMzI4LjY0NjYsIDUxMi44NzAxXSxcclxuICBbMTMzMy4zMzg0LCA1MTMuODkxOV0sXHJcbiAgWzEzMzUuOTE1NCwgNTE3LjgyOTY1XSxcclxuICBbMTMzOC43MzA1LCA1MjEuNTg0OTZdLFxyXG4gIFsxMzQxLjEyOTYsIDUyNS4xNzczN10sXHJcbiAgWzEzNDQuNzY5MywgNTI2LjQxOTRdLFxyXG4gIFsxMzQ4LjM2ODIsIDUyOC41NTE3XSxcclxuICBbMTM0OC43NDAyLCA1MjMuNjUxMzddLFxyXG4gIFsxMzQ5LjEsIDUxOC43OTcwNl0sXHJcbiAgWzEzNDYuMzQ1NSwgNTE1LjMyNTFdLFxyXG4gIFsxMzQzLjE5NywgNTEyLjI5NzRdLFxyXG4gIFsxMzM4LjM0MiwgNTEzLjU1NTJdLFxyXG4gIFsxMzQxLjM5MzcsIDUxNy4xNzUyXSxcclxuICBbMTM0NC40Mjc1LCA1MjAuNjgwNF0sXHJcbiAgWzEzNTIuOTAwNiwgNTIxLjExODNdLFxyXG4gIFsxMzUzLjkwMjEsIDUyNS43MDU5M10sXHJcbiAgWzEzNTIuMTQyNiwgNTMwLjIzN10sXHJcbiAgWzEzNDkuODU4NCwgNTMzLjM1NzY3XSxcclxuICBbMTM1NC4zNTE3LCA1MzQuNzc1MV0sXHJcbiAgWzEzNTcuNjczMywgNTM4LjIxMDc1XSxcclxuICBbMTM2Mi41NjM4LCA1MzguNjUzMV0sXHJcbiAgWzEzNjAuMzkzMywgNTQyLjc5ODAzXSxcclxuICBbMTM2Mi41MjYxLCA1NDcuMzM4ODddLFxyXG4gIFsxMzY3Ljg0NzMsIDU0Ny45MTY5XSxcclxuICBbMTM3MS40MzE5LCA1NDQuOTE5MjVdLFxyXG4gIFsxMzY5LjM0MjksIDU1My4xMDcyNF0sXHJcbiAgWzEzNjQuODU2MywgNTUxLjg0ODRdLFxyXG4gIFsxMzU3LjUxMjMsIDU0Ni41OTY4Nl0sXHJcbiAgWzEzNTUuNTk5LCA1NDIuNTM0NjddLFxyXG4gIFsxMzUyLjkyMTYsIDUzOS4wMTY3XSxcclxuICBbMTM0OC44MjkxLCA1NDAuNTcwM10sXHJcbiAgWzEzNDkuMTY1LCA1MzYuODQ2MjVdLFxyXG4gIFsxMzQ0Ljc3NzYsIDUzNS42OTA3XSxcclxuICBbMTM0NS4yNjg2LCA1MzkuMzM3MzRdLFxyXG4gIFsxMzQ0LjA5MjMsIDU0Mi43NDMxXSxcclxuICBbMTM0MC45NzQ3LCA1NDEuODVdLFxyXG4gIFsxMzM3LjY2OTIsIDU0MC4zMjA3XSxcclxuICBbMTM0MS4xNDMzLCA1MzguMDE2MzZdLFxyXG4gIFsxMzQwLjc2NjIsIDUzNC4xMTQ4XSxcclxuICBbMTM0NS45NTA3LCA1MzIuMjIxXSxcclxuICBbMTM0Mi42NTY1LCA1MzAuMTE5XSxcclxuICBbMTMzOC42MTU3LCA1MjkuNzA2NF0sXHJcbiAgWzEzMzYuOTk1OCwgNTI2LjExMl0sXHJcbiAgWzEzMzMuMzE5MSwgNTI2LjkxMDNdLFxyXG4gIFsxMzM0LjE3MjQsIDUyMi42MzUxM10sXHJcbiAgWzEzMzEuNDQzMSwgNTE5Ljc0MDFdLFxyXG4gIFsxMzI4LjkwODQsIDUxNi45MzE2XSxcclxuICBbMTMyMy43MzM2LCA1MTMuNDM5OF0sXHJcbiAgWzEzMjUuMTcxMSwgNTA5LjI3NjczXSxcclxuICBbMTMyNC40ODEzLCA1MDQuNzAyNl0sXHJcbiAgWzEzMjIuMDk2OSwgNDk3LjEzNDFdLFxyXG4gIFsxMzE5Ljk4MTYsIDUwMS40NDI4N10sXHJcbiAgWzEzMTQuOTQzNywgNTAzLjI3MTQyXSxcclxuICBbMTMxMy4xNTk3LCA1MDguNDM1MDZdLFxyXG4gIFsxMzE5Ljc4MzQsIDUwOC40MDM5M10sXHJcbiAgWzEzMjQuNjQ1MSwgNTE4LjExODA0XSxcclxuICBbMTMyNi43NTk2LCA1MjEuOTMyMV0sXHJcbiAgWzEzMjkuODQyOCwgNTI0LjUwMV0sXHJcbiAgWzEzMzAuMzk2NiwgNTI5LjUzODc2XSxcclxuICBbMTMyNy43MTM1LCA1MzIuNDYwNDVdLFxyXG4gIFsxMzI3LjA3MywgNTI3LjYyNTldLFxyXG4gIFsxMzIzLjgwMTUsIDUyNS44Njg1XSxcclxuICBbMTMyMS43NzU0LCA1MjIuODc3Nl0sXHJcbiAgWzEzMjAuMTc3NywgNTE4Ljk5NjNdLFxyXG4gIFsxMzE5LjgzMjUsIDUxNC44NzI3XSxcclxuICBbMTMxNi4zOTk5LCA1MTIuMDAyNl0sXHJcbiAgWzEzMTUuMTQ3MywgNTE2Ljc2MzFdLFxyXG4gIFsxMzEyLjk5NzgsIDUyMS44ODg0XSxcclxuICBbMTMxNy4yNjkzLCA1MjIuMzgzNTRdLFxyXG4gIFsxMzE1LjA1NTUsIDUyNy4xMzYzNV0sXHJcbiAgWzEzMTAuNTUzNiwgNTI3LjgwODY1XSxcclxuICBbMTMwOC44OTQsIDUyMy45OTAzXSxcclxuICBbMTMwNS4wNDEzLCA1MjcuMDQyNjZdLFxyXG4gIFsxMzAyLjU1ODcsIDUzMi4yNjk2NV0sXHJcbiAgWzEzMDcuNjE1MSwgNTMxLjQ0MDI1XSxcclxuICBbMTMxMi41NzY0LCA1MzIuMjA5NTNdLFxyXG4gIFsxMzE5LjUwMjksIDUyNy43MjAzNF0sXHJcbiAgWzEzMjEuODgxMywgNTMzLjQzODddLFxyXG4gIFsxMzIzLjcxMTgsIDUzMC4xNTQyXSxcclxuICBbMTMxNy42MjcxLCA1MzIuNDYxMl0sXHJcbiAgWzEzMTkuMzcyNCwgNTM4LjAyODNdLFxyXG4gIFsxMzI0LjI5MzgsIDUzNi42NDExXSxcclxuICBbMTMyNy4zNTczLCA1NDQuNTA4NF0sXHJcbiAgWzEzMzEuMDA3NiwgNTQ1Ljk2MzI2XSxcclxuICBbMTMzNC41OTQ1LCA1NDIuOTczMTRdLFxyXG4gIFsxMzM1LjI2MjIsIDU0Ny4xMzU2XSxcclxuICBbMTMzNi4xMzI2LCA1MzcuMzI4NV0sXHJcbiAgWzEzMzYuODAyNywgNTMzLjUyODJdLFxyXG4gIFsxMzMzLjg3NSwgNTMxLjA5MjA0XSxcclxuICBbMTMzMi4zNzk0LCA1MzUuMzA2N10sXHJcbiAgWzEzMzEuOTMzMSwgNTQwLjMzMjRdLFxyXG4gIFsxMzI4LjYzOTQsIDUzNi4yMTNdLFxyXG4gIFsxMzI3LjcyMDgsIDU0MC4wOTVdLFxyXG4gIFsxMzIzLjE5NzUsIDU0MS4yMzNdLFxyXG4gIFsxMzE5LjI0NjEsIDU0My44MDU5XSxcclxuICBbMTMxNS42MDc0LCA1NDEuMjkwMl0sXHJcbiAgWzEzMTEuODMwOCwgNTQyLjEzNDY0XSxcclxuICBbMTMxMC45ODA4LCA1NDYuMjA3NV0sXHJcbiAgWzEzMTEuNzI2MywgNTUwLjE2NTQ3XSxcclxuICBbMTMxMS45ODUyLCA1NTMuNjkwMzddLFxyXG4gIFsxMzEyLjQwNjIsIDU1Ny4zNzddLFxyXG4gIFsxMzEzLjgzNzksIDU2MC45OTgwNV0sXHJcbiAgWzEzMTUuMDM0MywgNTY1LjI2ODddLFxyXG4gIFsxMzE3Ljc1NzYsIDU2OC45NTk4XSxcclxuICBbMTMxNy42MTYzLCA1NzIuOTkwODRdLFxyXG4gIFsxMzIyLjY3MzMsIDU3MS45NjU0XSxcclxuICBbMTMyMC45ODkxLCA1NzUuNzU2XSxcclxuICBbMTMyMS4yODcsIDU3OS45ODEzXSxcclxuICBbMTMxNy42MzY2LCA1ODEuNjA5NV0sXHJcbiAgWzEzMjEuMjI0NywgNTg0LjQ2NzVdLFxyXG4gIFsxMzI0LjMyNTcsIDU4Ny4zMDRdLFxyXG4gIFsxMzI4LjIzNDEsIDU4Ny40ODU1XSxcclxuICBbMTMzMS4zMTczLCA1ODUuODEwNjddLFxyXG4gIFsxMzM0LjY0MDMsIDU4NC4zMzIyXSxcclxuICBbMTMzNi45NTgxLCA1ODEuMDQ2M10sXHJcbiAgWzEzMzIuNDQ3OSwgNTgxLjIzNDZdLFxyXG4gIFsxMzMzLjQ0NiwgNTc3Ljc1NTc0XSxcclxuICBbMTMzNy4wOTU4LCA1NzYuMjA3OV0sXHJcbiAgWzEzMjguOTksIDU3OC4zOTIzM10sXHJcbiAgWzEzMjguOTk4LCA1ODIuNzg1MTZdLFxyXG4gIFsxMzI1LjQxMjYsIDU4NC4wNzUzXSxcclxuICBbMTMyNS4zODc4LCA1ODAuNjYwNzddLFxyXG4gIFsxMzI0LjgwMjIsIDU3Ni45ODkyNl0sXHJcbiAgWzEzMjYuNzMwMiwgNTczLjU4NzE2XSxcclxuICBbMTMzMC40NzkxLCA1NzQuNzA2OF0sXHJcbiAgWzEzMzQuMTg2OCwgNTczLjYxNjVdLFxyXG4gIFsxMzQwLjc5NDMsIDU3NC41MTM1NV0sXHJcbiAgWzEzNDQuMDIzOSwgNTcyLjEyMTc3XSxcclxuICBbMTM0MC4yMTA3LCA1NzguODEzMV0sXHJcbiAgWzEzMzcuOTQxNSwgNTg1Ljk5MThdLFxyXG4gIFsxMzQwLjc5NzUsIDU4My45NDhdLFxyXG4gIFsxMzQzLjM2MjMsIDU4MC43Nzg0NF0sXHJcbiAgWzEzNDkuODc4LCA1ODQuMjUxN10sXHJcbiAgWzEzNTIuMDQ0NCwgNTgwLjE3MTJdLFxyXG4gIFsxMzQ3LjQ2NDUsIDU4MC4yMTIxNl0sXHJcbiAgWzEzNDQuNzc3OCwgNTc2LjQ4MDk2XSxcclxuICBbMTM0OS42MzIzLCA1NzYuMDk0OV0sXHJcbiAgWzEzNTYuNzc1NCwgNTgwLjA0OTddLFxyXG4gIFsxMzU0LjYxNzksIDU3Ni4wNjddLFxyXG4gIFsxMzU2LjkzNzksIDU3MS41MTE5XSxcclxuICBbMTM2MS42NDQ0LCA1NzAuOTE2MTRdLFxyXG4gIFsxMzU5LjY3MzEsIDU2Ny4wMDU4XSxcclxuICBbMTM1OC45NjM2LCA1NjIuOTMwODVdLFxyXG4gIFsxMzU2LjU3NTQsIDU1OS41MDkzXSxcclxuICBbMTM1Ny4zMjE5LCA1NTUuNTU1NF0sXHJcbiAgWzEzNjEuNTA0OSwgNTU4LjQ1NDk2XSxcclxuICBbMTM2MS41NzA5LCA1NTQuMDEyOTRdLFxyXG4gIFsxMzU4LjUzOTEsIDU1MC44MzcxNl0sXHJcbiAgWzEzNTMuOTAyMiwgNTUzLjQ3NDM3XSxcclxuICBbMTM1Mi42MTk4LCA1NTcuNzc0OV0sXHJcbiAgWzEzNDkuNjY3NSwgNTU1LjEyNDldLFxyXG4gIFsxMzQ2LjIwMzQsIDU1NC4yOTMzXSxcclxuICBbMTM0Ni41MTM1LCA1NTAuMjAzODZdLFxyXG4gIFsxMzU0LjEyNjcsIDU0OS43MzYzXSxcclxuICBbMTM1Mi44OTk5LCA1NDYuNDA5MjRdLFxyXG4gIFsxMzUxLjI5MDQsIDU0My4xODU4XSxcclxuICBbMTM1MC4xNzY1LCA1NTAuOTEyMV0sXHJcbiAgWzEzNDkuMDU2NSwgNTQ3LjA1NjldLFxyXG4gIFsxMzQ3LjI0NDksIDU0My44Nzg1NF0sXHJcbiAgWzEzNDUuMDA5NCwgNTQ2LjgyMDddLFxyXG4gIFsxMzQxLjY1MzgsIDU0NS44MTgxXSxcclxuICBbMTMzOC4yNTM5LCA1NDQuNTc4XSxcclxuICBbMTMyOS41OTA3LCA1NTAuNDQyMTRdLFxyXG4gIFsxMzMzLjMwOCwgNTUwLjY4Mjc0XSxcclxuICBbMTMzNy40ODU2LCA1NTEuNjAwMzRdLFxyXG4gIFsxMzM1LjE3MDQsIDU1NC42Mzg1XSxcclxuICBbMTMzMy43NzA5LCA1NTguNDg3ODVdLFxyXG4gIFsxMzQwLjk4MSwgNTY0Ljc5M10sXHJcbiAgWzEzNDIuMjAwMSwgNTYwLjU1NjRdLFxyXG4gIFsxMzQ1LjIzMTIsIDU1Ny44OTU3NV0sXHJcbiAgWzEzNDkuMjAzOSwgNTYwLjIxNTddLFxyXG4gIFsxMzUzLjcxMjIsIDU2Mi42ODI2XSxcclxuICBbMTM1NC43MTI2LCA1NjcuMTQyMl0sXHJcbiAgWzEzNDkuOTk0OSwgNTY4LjYxNTZdLFxyXG4gIFsxMzQ5LjgxNzEsIDU2NC43MTE4NV0sXHJcbiAgWzEzNDUuNTY5NiwgNTYzLjE1MjJdLFxyXG4gIFsxMzQ1LjUwODUsIDU2Ny41NzRdLFxyXG4gIFsxMzUyLjUwNDIsIDU3Mi4wNTkzXSxcclxuICBbMTM0Ny44MzI1LCA1NzIuMTc2NjRdLFxyXG4gIFsxMzQxLjQyMzYsIDU2OS4wMjU0NV0sXHJcbiAgWzEzMzguMTg3NSwgNTcxLjQwNTFdLFxyXG4gIFsxMzM0LjM5NSwgNTY5LjgzNzE2XSxcclxuICBbMTMzNy4xMDI5LCA1NjYuNzkzM10sXHJcbiAgWzEzMzQuNzY0NiwgNTYzLjI3NDFdLFxyXG4gIFsxMzM3Ljg5MzgsIDU2MS4yMjY5XSxcclxuICBbMTMzOS4xMDQ5LCA1NTcuNDEyMV0sXHJcbiAgWzEzNDAuODc3NywgNTU0LjQyN10sXHJcbiAgWzEzNDMuNDk5MSwgNTUyLjU1NzU2XSxcclxuICBbMTM0Mi4yODc3LCA1NDkuNjc4MzRdLFxyXG4gIFsxMzM5LjA4MzksIDU0OC42NzQ3NF0sXHJcbiAgWzEzMjguNzY0MywgNTU5LjU0NDNdLFxyXG4gIFsxMzI5LjgzODksIDU1NC45NTM2XSxcclxuICBbMTMyNS4zODEzLCA1NTYuNDc1MzRdLFxyXG4gIFsxMzIzLjM3NzksIDU2MS4yNDYxXSxcclxuICBbMTMyNi4zNzg5LCA1NjQuMzQ0Ml0sXHJcbiAgWzEzMzAuNzY0MywgNTYyLjg0MjFdLFxyXG4gIFsxMzMxLjU0NjQsIDU2Ni43MTM4N10sXHJcbiAgWzEzMzAuMjY2OCwgNTcwLjY0MjMzXSxcclxuICBbMTMyNi42Njg1LCA1NjguNzQxMl0sXHJcbiAgWzEzMjIuNDY2NiwgNTY3Ljc3OTk3XSxcclxuICBbMTMxOS45MDQyLCA1NjQuOTE4MV0sXHJcbiAgWzEzMTguNTM5NywgNTYxLjExODA0XSxcclxuICBbMTMxNi42NTQ5LCA1NTcuMTg5NDVdLFxyXG4gIFsxMzIwLjc4NDgsIDU1Ni42OTM3XSxcclxuICBbMTMyMi4yMjY2LCA1NTIuMzgzM10sXHJcbiAgWzEzMjUuOTgzMywgNTUwLjQzMTZdLFxyXG4gIFsxMzIzLjQxNDMsIDU0Ni40MzI1XSxcclxuICBbMTMxOS40MDMsIDU0OC43OTcyXSxcclxuICBbMTMxNS4yNzQyLCA1NDYuODkxODVdLFxyXG4gIFsxMzE2LjcwNTksIDU1Mi41MzI3XSxcclxuICBbMTMwOC4xMjMyLCA1NTYuNDA0NTRdLFxyXG4gIFsxMzA2LjkxMzUsIDU1Mi41NzIxXSxcclxuICBbMTI5OC40MzUzLCA1NTIuMjQzM10sXHJcbiAgWzEyOTMuMDAzNCwgNTU0LjIyNjddLFxyXG4gIFsxMjg4LjczNDksIDU0OS45NzgxNV0sXHJcbiAgWzEyOTIuMjQ5OCwgNTQ3LjY3NjldLFxyXG4gIFsxMjk1LjE2ODUsIDU1MC4wOTExXSxcclxuICBbMTI5OS40NDQxLCA1NDcuNTEyOTRdLFxyXG4gIFsxMjk1LjY4OTUsIDU0NC43MTE4XSxcclxuICBbMTI5Ni41NzA2LCA1NDAuMjQ0NDVdLFxyXG4gIFsxMzAwLjQ2NzgsIDU0Mi4zNDY1Nl0sXHJcbiAgWzEyOTIuMDMyNiwgNTQwLjU0MDE2XSxcclxuICBbMTI4OS43OTg1LCA1NDQuMTk2ODRdLFxyXG4gIFsxMjg1LjExMTYsIDU0NS4yMDEyM10sXHJcbiAgWzEyODEuMTEsIDU0MS4zMTYzXSxcclxuICBbMTI4Ni4xNzU5LCA1MzkuODgwODZdLFxyXG4gIFsxMjgyLjU5NzgsIDUzNS45NDg4NV0sXHJcbiAgWzEyNzcuODc2NSwgNTM2LjMzODI2XSxcclxuICBbMTI3NS4yMjUxLCA1MzkuNzYyNF0sXHJcbiAgWzEyNzYuOTkzNywgNTQ0LjA2NTZdLFxyXG4gIFsxMjcyLjEzNDgsIDU0NC41NTY5XSxcclxuICBbMTI3MC40ODg4LCA1NDAuMTk1XSxcclxuICBbMTI2Ny44MTUsIDUzNi42MjU0XSxcclxuICBbMTI3Mi4zOTA3LCA1MzUuMTA5ODZdLFxyXG4gIFsxMjc0Ljg1NzcsIDUzMS41MjI5NV0sXHJcbiAgWzEyNzkuMDY3OSwgNTMxLjg3MV0sXHJcbiAgWzEyODIuMjkyNSwgNTI5LjYwMTc1XSxcclxuICBbMTI4NC45ODA1LCA1MzEuNTQzOF0sXHJcbiAgWzEyODcuMjQwMSwgNTM0LjI5MTVdLFxyXG4gIFsxMjg5Ljg2MTYsIDUzNi44ODIxXSxcclxuICBbMTI5My45NzA3LCA1MzUuNTkyNV0sXHJcbiAgWzEyOTEuNDU5LCA1MzEuOTAxOV0sXHJcbiAgWzEyOTUuMzU2MSwgNTI5LjQzNzhdLFxyXG4gIFsxMjk3Ljc5MTMsIDUzMi4xODk2NF0sXHJcbiAgWzEyOTguMDU5OCwgNTM2LjIzMzY0XSxcclxuICBbMTMwMS43NjgxLCA1MzcuNDQyMV0sXHJcbiAgWzEzMDUuMjUzNCwgNTM5Ljk2NzJdLFxyXG4gIFsxMzA2LjM3MTEsIDUzNS40NjA1XSxcclxuICBbMTMxNC43Njk5LCA1MzYuNDYyNzddLFxyXG4gIFsxMzEwLjMwNjIsIDUzNy42MDg3Nl0sXHJcbiAgWzEzMDcuNzkzLCA1NDMuMTExMl0sXHJcbiAgWzEzMDMuNzYxNiwgNTQ1LjAwODg1XSxcclxuICBbMTMwNy4yNTk1LCA1NDguMTIzNF0sXHJcbiAgWzEzMDMuMTc1MiwgNTQ5LjY2MDJdLFxyXG4gIFsxMzAyLjI5ODUsIDU1My44NjU2Nl0sXHJcbiAgWzEzMDMuNTgwMiwgNTU3LjYyNDk0XSxcclxuICBbMTMwMy45OTQsIDU2MS45NTUyXSxcclxuICBbMTMwOC4xNDUxLCA1NjAuNDYxODVdLFxyXG4gIFsxMzEwLjM1NjksIDU2My40ODc3XSxcclxuICBbMTMxMC42NDMsIDU2Ny4zMDI3M10sXHJcbiAgWzEzMTMuMjUxMSwgNTcwLjY2ODddLFxyXG4gIFsxMzEyLjM2MjgsIDU3NS4wMTU4N10sXHJcbiAgWzEzMTYuODE1NCwgNTc3LjIxNzgzXSxcclxuICBbMTMxMy41Njg4LCA1ODAuMTQyN10sXHJcbiAgWzEzMTIuMTQ2NCwgNTg0LjI3NzFdLFxyXG4gIFsxMzA3LjQzOCwgNTgzLjQyNjQ1XSxcclxuICBbMTMwOS4zMDk0LCA1NzkuMTAwMDRdLFxyXG4gIFsxMzA3LjI2NiwgNTc0LjgxNDE1XSxcclxuICBbMTMwNy45ODEyLCA1NzAuNzA1MjZdLFxyXG4gIFsxMzA1Ljg3MjksIDU2Ni4wOTA5NF0sXHJcbiAgWzEzMDIuODQ0NiwgNTcwLjE2MjIzXSxcclxuICBbMTMwMi42Mzk4LCA1NzUuMDA1XSxcclxuICBbMTI5OC41MjAzLCA1NzMuOTgzMzRdLFxyXG4gIFsxMjk0LjgxNTMsIDU3Ni45NTczNF0sXHJcbiAgWzEyOTguOTY2NCwgNTc5LjY4MDY2XSxcclxuICBbMTMwNC4yOTE1LCA1NzkuMTc0NTZdLFxyXG4gIFsxMzAyLjQxMiwgNTgzLjQwNDhdLFxyXG4gIFsxMjk4LjczNDEsIDU4NS45NTQxXSxcclxuICBbMTI5OC45NzEyLCA1OTAuNjMxOTZdLFxyXG4gIFsxMjk3LjExMDUsIDU5NS4wNzEyXSxcclxuICBbMTI5My4yNzA4LCA1OTMuMTIyNTZdLFxyXG4gIFsxMjg5LjM4NjIsIDU5NS4zMTQ3XSxcclxuICBbMTI4NC44MjQ3LCA1OTYuMDY3NDRdLFxyXG4gIFsxMjg0Ljc2NTUsIDYwMS44MDk5XSxcclxuICBbMTI4OC45NTI4LCA2MDAuNTc2Ml0sXHJcbiAgWzEyOTMuNDY1MSwgNTk5LjY5MjddLFxyXG4gIFsxMjk4LjA3MDMsIDU5OS4zMTk0XSxcclxuICBbMTMwMi42NzgsIDYwMS4xMTkzXSxcclxuICBbMTMwMS44OTgsIDYwNi4xNjY4XSxcclxuICBbMTMwNi4yMzI3LCA2MDQuMzA3ODZdLFxyXG4gIFsxMzA2LjAzMSwgNjA4LjQxNDhdLFxyXG4gIFsxMjk4LjM3NSwgNjAzLjY0NTE0XSxcclxuICBbMTI5NC44NTQ5LCA2MDUuMjU2N10sXHJcbiAgWzEyOTcuODAyNCwgNjA5LjA2NDZdLFxyXG4gIFsxMzAyLjI2MTEsIDYxMC44NjE5XSxcclxuICBbMTI5OS4yMDM1LCA2MTMuNjkxMTZdLFxyXG4gIFsxMzA2LjQ1NzUsIDYxMi44MDg1XSxcclxuICBbMTMxMC4zNTYzLCA2MjAuMDMyNl0sXHJcbiAgWzEzMTAuNTE4LCA2MjguMDA5MTZdLFxyXG4gIFsxMzIwLjAxODYsIDYyMy4zMzUxXSxcclxuICBbMTMxNi43MjM4LCA2MjEuMTAyNV0sXHJcbiAgWzEzMTMuNDMwNywgNjE5LjU5NTY0XSxcclxuICBbMTMxMy45NDgyLCA2MjQuNzk2NzVdLFxyXG4gIFsxMzE4LjMxNTQsIDYyNy45MjA2XSxcclxuICBbMTMxNi44OTI3LCA2MzMuNjg5MzNdLFxyXG4gIFsxMzIwLjcxMTUsIDYzNi45NTA4XSxcclxuICBbMTMyMS4wNDY5LCA2MzIuMTA4XSxcclxuICBbMTMyNS40OTEyLCA2MzIuODExNV0sXHJcbiAgWzEzMjQuNjE3LCA2MzcuMTIwMzZdLFxyXG4gIFsxMzE3LjA3MDEsIDYzOC40Mzc2XSxcclxuICBbMTMxMy4yMzQ3LCA2MzYuNjMwODZdLFxyXG4gIFsxMzE0LjQwNDcsIDY0MS41NDExNF0sXHJcbiAgWzEzMTkuNDMwOSwgNjQyLjI5MDZdLFxyXG4gIFsxMzIzLjc4MzMsIDY0MS41NDQ5XSxcclxuICBbMTMyOC4wODQ4LCA2NDQuODY1OTddLFxyXG4gIFsxMzMyLjQ0NjMsIDY0NC40MzMxN10sXHJcbiAgWzEzMzYuNTY2NywgNjQxLjkxMDVdLFxyXG4gIFsxMzM3LjAwNTYsIDY0Ni40Nzc3XSxcclxuICBbMTM0MC44OTQzLCA2NDQuMTYyNF0sXHJcbiAgWzEzNDUuMTMzLCA2NDUuODc2ODNdLFxyXG4gIFsxMzQ5LjQ2MiwgNjQ3LjY0MzldLFxyXG4gIFsxMzQ5LjU4NzYsIDY0My4wNTAwNV0sXHJcbiAgWzEzNDkuMzAzMywgNjM4LjQ5OTRdLFxyXG4gIFsxMzQ0Ljc3MTUsIDYzNi4zMzZdLFxyXG4gIFsxMzQ1LjAwNCwgNjQxLjE1MDNdLFxyXG4gIFsxMzQwLjY3MjQsIDYzOS43NTg4NV0sXHJcbiAgWzEzNDEuMzM4OSwgNjMyLjAyMzldLFxyXG4gIFsxMzQwLjQ3MDgsIDYzNS41ODAzXSxcclxuICBbMTMzNi42NTksIDYzNy4yNTI5XSxcclxuICBbMTMzMy4xODQ5LCA2MzUuMDMxNzRdLFxyXG4gIFsxMzI5LjAyODEsIDYzNi4yNDJdLFxyXG4gIFsxMzI4LjExMDYsIDY0MC40MjczN10sXHJcbiAgWzEzMzIuNTQ3LCA2MzkuNzI1MzRdLFxyXG4gIFsxMzM2LjQ2MzYsIDYzMi4yNjgyXSxcclxuICBbMTMzMC4yMTU2LCA2MzIuMDQ0Ml0sXHJcbiAgWzEzMjcuNDM3NywgNjI4LjYyNjA0XSxcclxuICBbMTMyMy4wNDYxLCA2MjcuODc0NV0sXHJcbiAgWzEzMTQuNzg2NCwgNjI5LjczOTQ0XSxcclxuICBbMTMxMi4wMjg3LCA2MzIuNTMwMl0sXHJcbiAgWzEzMDkuNDgzNSwgNjIzLjg3NDNdLFxyXG4gIFsxMzA3LjcwNzUsIDYxNy4wMDY5XSxcclxuICBbMTMwNi40NTQyLCA2MjEuMDMwNl0sXHJcbiAgWzEzMDMuMjE3OSwgNjE5LjM3MDZdLFxyXG4gIFsxMjk0Ljk2ODEsIDYyMi4wODkyM10sXHJcbiAgWzEyOTEuMDI1OSwgNjIwLjIzMzNdLFxyXG4gIFsxMjg3LjY0ODcsIDYxNy4xOTM3XSxcclxuICBbMTI4Mi4zMjI5LCA2MTQuOTM4OTZdLFxyXG4gIFsxMjg2Ljk5OSwgNjEyLjMzMzg2XSxcclxuICBbMTI5MS4yOSwgNjE0Ljc4N10sXHJcbiAgWzEyOTUuMTg0MywgNjE3LjUwODY3XSxcclxuICBbMTI5OS42Nzc1LCA2MTcuMzU1OTZdLFxyXG4gIFsxMzAzLjQ4OCwgNjE1LjQyMDldLFxyXG4gIFsxMzEwLjcxMzEsIDYxNC40NTYwNV0sXHJcbiAgWzEzMTMuNzU1NCwgNjExLjI4MjddLFxyXG4gIFsxMzE4Ljk1MDQsIDYxNi41NzMxXSxcclxuICBbMTMxNC42NTA2LCA2MTUuNzkzNDZdLFxyXG4gIFsxMzA5Ljc1OTUsIDYxMC4wNjExXSxcclxuICBbMTMxMS4yMDUyLCA2MDYuMzQ3OV0sXHJcbiAgWzEzMTguMDYwMiwgNjAzLjk3NTldLFxyXG4gIFsxMzE1LjYxNzQsIDYwNy40NjAyXSxcclxuICBbMTMxOC4wMzYsIDYxMi4wOTkxXSxcclxuICBbMTMxOS45Mzc2LCA2MDguMDM1OV0sXHJcbiAgWzEzMjMuNjU4OSwgNjA2LjYxMzJdLFxyXG4gIFsxMzIyLjU2OTEsIDYxMS45MTk1Nl0sXHJcbiAgWzEzMjUuNTU5NiwgNjE1LjI0MTddLFxyXG4gIFsxMzI3LjQxMzYsIDYxMC44NjM0Nl0sXHJcbiAgWzEzMzEuNDQ3MywgNjA3Ljg5MTVdLFxyXG4gIFsxMzI3LjU5MTgsIDYwNi4wNDE3NV0sXHJcbiAgWzEzMjYuMzUxLCA2MDIuMDcxMDRdLFxyXG4gIFsxMzMxLjU2MTUsIDYwMy44NTQ4XSxcclxuICBbMTMzMS4wODg5LCA2MDAuMTMyMl0sXHJcbiAgWzEzMzQuMzY1LCA1OTMuMjEyNF0sXHJcbiAgWzEzMzIuNjk1NywgNTk2LjY5NjhdLFxyXG4gIFsxMzI5LjA2OTUsIDU5NC43MTk3XSxcclxuICBbMTMyNC41MjkzLCA1OTQuOTQ2XSxcclxuICBbMTMyNi43MzUyLCA1OTguMjczNl0sXHJcbiAgWzEzMjEuOTA3NywgNjAyLjE2NThdLFxyXG4gIFsxMzIxLjIyMDEsIDU5Ny44ODA2XSxcclxuICBbMTMyMC43MjIyLCA1OTMuNTgxMl0sXHJcbiAgWzEzMTcuMjE1MiwgNTkyLjIxOThdLFxyXG4gIFsxMzE2LjA2NzYsIDU5Ni4wNTY2NF0sXHJcbiAgWzEzMTYuODU3MywgNTk5Ljc3N10sXHJcbiAgWzEzMTMuNjI0MywgNjAyLjU0MDVdLFxyXG4gIFsxMzA5LjM2NTEsIDYwMS44ODkyXSxcclxuICBbMTMxMS40MTA4LCA1OTcuNTE0NF0sXHJcbiAgWzEzMDYuNDQ1MywgNTk3Ljk3MjNdLFxyXG4gIFsxMzAxLjkyNDEsIDU5Ni4wNjUyNV0sXHJcbiAgWzEzMDMuNzQ4OCwgNTkyLjEyNTg1XSxcclxuICBbMTMwNC40NTc0LCA1ODcuNzQ4NF0sXHJcbiAgWzEzMDkuNTIyMywgNTg4LjMwNDI2XSxcclxuICBbMTMwOC4wOTk0LCA1OTMuMTI0NDVdLFxyXG4gIFsxMzEyLjU0NjksIDU5Mi42NTMyXSxcclxuICBbMTMxNC41MzMyLCA1ODguNzAwODddLFxyXG4gIFsxMzE2LjcyOTIsIDU4NS4zMjc4XSxcclxuICBbMTMxOS42NDI2LCA1ODguNjIwN10sXHJcbiAgWzEzMjMuMjQ5LCA1OTAuNTU5OTRdLFxyXG4gIFsxMzI2Ljg2MzIsIDU5MS4yOTAxNl0sXHJcbiAgWzEzMzAuODY3NCwgNTkwLjkzMDhdLFxyXG4gIFsxMzM0LjA3NTksIDU4OC42Mzc2XSxcclxuICBbMTMzNy44MTE2LCA1ODkuNjA1MzVdLFxyXG4gIFsxMzM4LjY0OTQsIDU5Mi45MzAxXSxcclxuICBbMTM0Mi40MDExLCA1OTMuNzcyXSxcclxuICBbMTM0My4xNTk3LCA1OTcuOTMyNTZdLFxyXG4gIFsxMzQwLjM4OTksIDYwMS43ODU2NF0sXHJcbiAgWzEzMzguMDg3NiwgNTk2LjkyOF0sXHJcbiAgWzEzMzUuODEwMywgNjAwLjM4MDNdLFxyXG4gIFsxMzM2LjMzNDEsIDYwNC42NjkwN10sXHJcbiAgWzEzMzYuMTE4LCA2MDguNDA0N10sXHJcbiAgWzEzMzkuNzA5MSwgNjA5Ljk4NDNdLFxyXG4gIFsxMzQ0LjE2NzEsIDYxMC4wMDIzXSxcclxuICBbMTM0MS44NjMzLCA2MDUuOTg3NTVdLFxyXG4gIFsxMzMyLjk5OTMsIDYxMS4zNzE0XSxcclxuICBbMTMzMS4wMjk1LCA2MTQuMzY2NDZdLFxyXG4gIFsxMzI5LjkxMjIsIDYxNy43NzUyXSxcclxuICBbMTMzNi4xMDE2LCA2MTcuNDI2MV0sXHJcbiAgWzEzMzYuNjEwNywgNjEzLjQ4NjI3XSxcclxuICBbMTM0MS4yMDM5LCA2MTQuMzc4MDVdLFxyXG4gIFsxMzQxLjE3MzMsIDYxOC43MjU0Nl0sXHJcbiAgWzEzNDAuMzYwNiwgNjIyLjA4Mzc0XSxcclxuICBbMTM0NS4yMjcsIDYzMC4xNDI4XSxcclxuICBbMTM0OC4yODEyLCA2MzMuNjkzMzZdLFxyXG4gIFsxMzUyLjA3MDQsIDYzMC41MzM1XSxcclxuICBbMTM1Ni42NTkzLCA2MjguNzkwODNdLFxyXG4gIFsxMzU5LjIwMTMsIDYyNC40NzU3XSxcclxuICBbMTM2Mi4wODEsIDYyNi45NDk2XSxcclxuICBbMTM2Ni4xMjU3LCA2MjUuODQ4OV0sXHJcbiAgWzEzNjguNjI4MiwgNjIyLjM0MDZdLFxyXG4gIFsxMzY2Ljk2MiwgNjE4LjE2NjE0XSxcclxuICBbMTM2My45MjYsIDYxNS4xOTU3XSxcclxuICBbMTM2Ni4xNTU0LCA2MTEuNjA1MDRdLFxyXG4gIFsxMzY2LjkwODIsIDYwNy42MzE5Nl0sXHJcbiAgWzEzNjUuODY2LCA2MDMuNzMyOV0sXHJcbiAgWzEzNjkuNDQzNCwgNjAwLjQ5MjQzXSxcclxuICBbMTM3MS45MTMsIDU5Ni45NDg4XSxcclxuICBbMTM3NS45MTk3LCA1OTcuMzMwOTNdLFxyXG4gIFsxMzc5LjU5MDUsIDU5OS43ODY0XSxcclxuICBbMTM4MC42NTc2LCA1OTUuMzA3Ml0sXHJcbiAgWzEzODQuNTgwNiwgNTkyLjMyMzRdLFxyXG4gIFsxMzgzLjc4MzIsIDU4OC4wNjUxXSxcclxuICBbMTM4Ny45NjM5LCA1ODguMTM1OF0sXHJcbiAgWzEzODQuNDEyMiwgNTgzLjY5NTldLFxyXG4gIFsxMzg3LjgzMjYsIDU4MC44Mzc2NV0sXHJcbiAgWzEzOTEuMTI1LCA1NzUuODI5MV0sXHJcbiAgWzEzODcuODcwNSwgNTcwLjg4MzJdLFxyXG4gIFsxMzgyLjAzOTMsIDU2OC42NjkzXSxcclxuICBbMTM4Mi40NzU3LCA1NzMuMDg5MV0sXHJcbiAgWzEzODYuNDczLCA1NzUuNzg3MV0sXHJcbiAgWzEzODIuNjYzMiwgNTc4LjIxMzEzXSxcclxuICBbMTM3OS45OTg1LCA1ODEuMjQxMzNdLFxyXG4gIFsxMzc1Ljg4MjYsIDU3OS4xMTA4XSxcclxuICBbMTM3Ny45NjYxLCA1NzUuMjIxNV0sXHJcbiAgWzEzNzcuNDE0NCwgNTcwLjUzNTc3XSxcclxuICBbMTM3OC4xODUyLCA1NjUuNjI2ODNdLFxyXG4gIFsxMzgxLjY2MywgNTYyLjg1MjNdLFxyXG4gIFsxMzg1LjcyNDIsIDU2NS45NzEzXSxcclxuICBbMTM5MC41NDksIDU2NS42NjE4XSxcclxuICBbMTM5My4yMjgsIDU3MC4zNzQ5NF0sXHJcbiAgWzEzOTYuOTgxNiwgNTczLjIyMjddLFxyXG4gIFsxNDAwLjY5MjYsIDU3Ni43NDg4XSxcclxuICBbMTQwMi4zNjI1LCA1ODAuODg0NzddLFxyXG4gIFsxNDA2LjI5MTMsIDU3OS45NDc0XSxcclxuICBbMTQwNS45MTI3LCA1ODQuNDc1MzRdLFxyXG4gIFsxNDA5Ljk5MjYsIDU4My44ODI3NV0sXHJcbiAgWzE0MDEuMzI0NSwgNTg1LjMyODJdLFxyXG4gIFsxNDAwLjQxOCwgNTg5LjczMTI2XSxcclxuICBbMTQwNC44NjIsIDU4OC45MTFdLFxyXG4gIFsxNDA4Ljk0MzYsIDU4OC4zOTU2XSxcclxuICBbMTQxMi44NDE2LCA1ODcuNTkwNDVdLFxyXG4gIFsxNDExLjYxOTQsIDU5MS44ODU4XSxcclxuICBbMTQwNy42NDM4LCA1OTIuNzMyMl0sXHJcbiAgWzE0MDMuNjQxNywgNTkzLjU1MTRdLFxyXG4gIFsxMzk5LjU2OTEsIDU5NC44OTA1XSxcclxuICBbMTM5Ni40OTk1LCA1OTEuODgxMzVdLFxyXG4gIFsxMzk2LjI1MywgNTg2LjQxMTc0XSxcclxuICBbMTM5Ny44MDg4LCA1ODEuNzc5M10sXHJcbiAgWzEzOTUuNDQ0NiwgNTc3LjY4NDddLFxyXG4gIFsxMzkyLjczMjgsIDU4MS40NzYzXSxcclxuICBbMTM5MS4wMDY2LCA1ODUuMzgxXSxcclxuICBbMTM5Mi42NTUzLCA1ODkuOTgzOTVdLFxyXG4gIFsxMzg5LjI4NSwgNTkzLjI5MV0sXHJcbiAgWzEzODUuOTY2OCwgNTk2LjUxNjZdLFxyXG4gIFsxMzg0LjM1NzIsIDYwMC4xMzQ0XSxcclxuICBbMTM4MS43ODY5LCA2MDMuOTY2ODZdLFxyXG4gIFsxMzc4Ljg2MzYsIDYwNy40MDUxNV0sXHJcbiAgWzEzNzUuNTc2NywgNjAyLjc5NjZdLFxyXG4gIFsxMzcxLjMxNjQsIDYwNC44ODgzN10sXHJcbiAgWzEzNzQuOTIwNywgNjA4Ljg0MDMzXSxcclxuICBbMTM3NC41NTQ5LCA2MTQuMzczMTddLFxyXG4gIFsxMzcwLjk1ODEsIDYwOS45NDk2XSxcclxuICBbMTM2OS43NDU0LCA2MTQuMjgxMDddLFxyXG4gIFsxMzcxLjY5NTIsIDYxOC4zOTMwN10sXHJcbiAgWzEzNzYuMDQwMywgNjE5LjY2NzFdLFxyXG4gIFsxMzc5LjE4MTIsIDYxNy4wOTY1Nl0sXHJcbiAgWzEzODMuMjAxNCwgNjE5LjMwNzVdLFxyXG4gIFsxMzgxLjEzNTcsIDYyNy41NzAyNV0sXHJcbiAgWzEzNzcuOTEwNiwgNjMwLjc0Nl0sXHJcbiAgWzEzNzYuMjA0MSwgNjM1LjM1OTZdLFxyXG4gIFsxMzcxLjIwODEsIDYzNC45OTE3Nl0sXHJcbiAgWzEzNjcuMjYwNywgNjMzLjkzODIzXSxcclxuICBbMTM2Ny44NjU4LCA2MzkuMDU5NjNdLFxyXG4gIFsxMzYzLjUzMiwgNjQxLjA4ODg3XSxcclxuICBbMTM2Mi44NzQ1LCA2MzUuNzY4Nl0sXHJcbiAgWzEzNTguNTk2LCA2MzguNTA4M10sXHJcbiAgWzEzNTkuMjY4NiwgNjQzLjM4ODczXSxcclxuICBbMTM2Ny4xMDI1LCA2NDUuMTk5MDRdLFxyXG4gIFsxMzYzLjAyOTgsIDY0Ny4zMjUxM10sXHJcbiAgWzEzNTguNDEwNiwgNjQ4LjQwMTJdLFxyXG4gIFsxMzUzLjcwNzIsIDY0OS4yNzE4NV0sXHJcbiAgWzEzNTQuMzg5NiwgNjQ0Ljg2OTRdLFxyXG4gIFsxMzU0LjE0NTQsIDY0MC4zNzQ0XSxcclxuICBbMTM1My4xMDYsIDYzNS42NzkyXSxcclxuICBbMTM1Ny4zMTM0LCA2MzMuNzYzMl0sXHJcbiAgWzEzNjAuNTMzNCwgNjMxLjE2OTQzXSxcclxuICBbMTM2NC41NTI5LCA2MzAuNjIwN10sXHJcbiAgWzEzNjguNTcyOSwgNjI5LjY2ODddLFxyXG4gIFsxMzczLjE1LCA2MzAuNTg2MzZdLFxyXG4gIFsxMzcxLjIzNzMsIDYyNi4zODAxXSxcclxuICBbMTM3My40MjksIDYyMi44MjY5XSxcclxuICBbMTM3OS42Nzg3LCA2MjIuNzIyMzVdLFxyXG4gIFsxMzc2LjI2NjcsIDYyNi4zNjY4XSxcclxuICBbMTM4NC42MDc5LCA2MjQuMzI4NzRdLFxyXG4gIFsxMzg4LjI2MDUsIDYyNy4xMjQyXSxcclxuICBbMTM5MC43MDEyLCA2MjMuNDEwNF0sXHJcbiAgWzEzOTEuNzYyMywgNjE4LjY1ODddLFxyXG4gIFsxMzk1LjY2MjUsIDYxNi4zOTM1XSxcclxuICBbMTM4Ny4zNzMyLCA2MjAuNDg4MTZdLFxyXG4gIFsxMzg3LjQzODcsIDYxNS43NTc0XSxcclxuICBbMTM4My4xOTUsIDYxMy45NjA2XSxcclxuICBbMTM3OC44MDAzLCA2MTIuMjg5MjVdLFxyXG4gIFsxMzgzLjU0ODgsIDYwOC42NTEwNl0sXHJcbiAgWzEzODcuNTY1NywgNjEwLjQxMTQ0XSxcclxuICBbMTM5MS42OTczLCA2MTMuMjA5N10sXHJcbiAgWzEzOTUuMjAwNywgNjEwLjI1Mjc1XSxcclxuICBbMTM5MS40MDIxLCA2MDcuMTU5NV0sXHJcbiAgWzEzOTMuNTk5NiwgNjAyLjkxMjZdLFxyXG4gIFsxMzg3LjUwOTUsIDYwNC4wNDQwN10sXHJcbiAgWzEzOTAuMTc4NiwgNTk5LjM1Nzg1XSxcclxuICBbMTM5My4yNTgsIDU5NS40NjM2XSxcclxuICBbMTM5Ni40MDIyLCA1OTguMzY3OF0sXHJcbiAgWzEzOTguODU0NCwgNjAxLjgyNl0sXHJcbiAgWzEzOTcuOTMyNiwgNjA2LjA1MDU0XSxcclxuICBbMTQwMy4yNTYzLCA2MDMuMDg3M10sXHJcbiAgWzE0MDIuMzkzLCA1OTguNTMxMjVdLFxyXG4gIFsxNDA2LjQ2OTQsIDU5Ny4yMTEzXSxcclxuICBbMTQxMC4zNzk4LCA1OTYuMjk1N10sXHJcbiAgWzE0MTQuODk2OSwgNTkzLjIwOTE3XSxcclxuICBbMTQxNi4yNTA5LCA1OTAuNTg1OV0sXHJcbiAgWzE0MTQuMzQ2OSwgNTk2LjM4MTY1XSxcclxuICBbMTQwNy44Njc5LCA2MDEuMDM2Nl0sXHJcbiAgWzE0MTIuNjk3OSwgNTk5Ljk5NDNdLFxyXG4gIFsxNDExLjYyNTksIDYwMy44MzgyXSxcclxuICBbMTQwNy4yNjE3LCA2MDUuNjkwOF0sXHJcbiAgWzE0MTAuNDA1NSwgNjA4Ljc2MTM1XSxcclxuICBbMTQwNi44NjM0LCA2MTEuOTExMjVdLFxyXG4gIFsxNDAzLjAyODksIDYxMi44NDczXSxcclxuICBbMTQwMy4zMjM2LCA2MDcuODUxNTZdLFxyXG4gIFsxMzk5LjQ1NTEsIDYxMC41Mzk2XSxcclxuICBbMTM5OS41OTg4LCA2MTUuODU1Nl0sXHJcbiAgWzE0MDAuMTQ3MiwgNjIxLjQ0MzFdLFxyXG4gIFsxMzk1LjYwNTMsIDYyMi40MDIzNF0sXHJcbiAgWzEzOTguOTAxOSwgNjI3LjYzMTVdLFxyXG4gIFsxMzkzLjcwMTQsIDYyNy40NTM5XSxcclxuICBbMTM5NS4wMTcxLCA2MzIuNDIwODRdLFxyXG4gIFsxMzk5Ljc2MjUsIDYzNC4xMTg3XSxcclxuICBbMTQwMy42MTcxLCA2MzAuODA1NF0sXHJcbiAgWzE0MDQuMjEzNywgNjI2LjAyMjhdLFxyXG4gIFsxNDA1LjUwNDMsIDYyMS44MTg4XSxcclxuICBbMTQwNC40NDQxLCA2MTcuMTk0Nl0sXHJcbiAgWzE0MDkuNDA4OSwgNjE4LjMwNzI1XSxcclxuICBbMTQxMC45NzgzLCA2MTMuODkyMV0sXHJcbiAgWzE0MTQuOTU0MywgNjExLjEwNjddLFxyXG4gIFsxNDE5LjQxOTksIDYxMi4wNjY5XSxcclxuICBbMTQxNC42OTQxLCA2MDYuODQ0XSxcclxuICBbMTQxNi42NjgyLCA2MDMuMTYxNF0sXHJcbiAgWzE0MTcuNDg5MSwgNTk5LjEzNjddLFxyXG4gIFsxNDE4LjM0NjQsIDU5NS4wOTEwNl0sXHJcbiAgWzE0MjIuMjgzOCwgNTk4LjMzODEzXSxcclxuICBbMTQyMC44ODkyLCA2MDIuMzc4MDVdLFxyXG4gIFsxNDI1LjI2NDksIDYwMi4zOTk4XSxcclxuICBbMTQyNy41NDY1LCA1OTkuMzAwMzVdLFxyXG4gIFsxNDI2LjQ5MTUsIDU5NS45NjkyNF0sXHJcbiAgWzE0MzEuOTQ3NCwgNTk4LjExNzldLFxyXG4gIFsxNDM3LjQyNjYsIDU5OS4xNDcyXSxcclxuICBbMTQ0Mi41MjY0LCA2MDEuMzcwNl0sXHJcbiAgWzE0NDIuNzQyMywgNTk3LjQyNjddLFxyXG4gIFsxNDQ1LjAzMjcsIDU5NC4wMjJdLFxyXG4gIFsxNDQ3LjUzODcsIDU5MC4yNjExXSxcclxuICBbMTQ1MS45MSwgNTg4Ljk3MDc2XSxcclxuICBbMTQ1NS41OTEyLCA1ODUuNjYxXSxcclxuICBbMTQ1Ni42ODA1LCA1ODkuMzMyMTVdLFxyXG4gIFsxNDU5Ljc2MzMsIDU5MS41Mzc3XSxcclxuICBbMTQ2Mi44NTUyLCA1OTMuMzY3Ml0sXHJcbiAgWzE0NjMuMTA1MSwgNTk3LjcwMTRdLFxyXG4gIFsxNDU5LjE0ODksIDU5Ni45Mzg5Nl0sXHJcbiAgWzE0NTQuNDg5LCA2MDIuMjY2MDVdLFxyXG4gIFsxNDU0LjE1MywgNTk4LjE0MTZdLFxyXG4gIFsxNDU1LjQ0MDEsIDU5My42MTIyXSxcclxuICBbMTQ1MC42MzczLCA1OTQuNDI2NjRdLFxyXG4gIFsxNDQ4LjE4OTIsIDU5OC42OTI2XSxcclxuICBbMTQ1MC41NDM1LCA2MDIuODUyNTRdLFxyXG4gIFsxNDQ2LjE5OCwgNjAzLjUyODZdLFxyXG4gIFsxNDQxLjgyNDcsIDYwNS43NDI5XSxcclxuICBbMTQ0MS43NDE3LCA2MDkuOTE2OF0sXHJcbiAgWzE0NDUuNDgyOSwgNjA4LjIwMzg2XSxcclxuICBbMTQ0OS41Nzc1LCA2MDcuMjI4N10sXHJcbiAgWzE0NDguNTY4MSwgNjExLjQxNzRdLFxyXG4gIFsxNDQ3Ljk0NjMsIDYxNS42MDk4XSxcclxuICBbMTQ0NC4xNjA0LCA2MTYuODkxMDVdLFxyXG4gIFsxNDQzLjMxMywgNjIwLjY1MjgzXSxcclxuICBbMTQzOS42MywgNjIxLjYxNjddLFxyXG4gIFsxNDQwLjMzOTcsIDYxOC4wMTg4XSxcclxuICBbMTQ0MS4wMjY2LCA2MTQuMzQwNzZdLFxyXG4gIFsxNDQ0LjcyNzUsIDYxMi43NzUzXSxcclxuICBbMTQ1MS45MzcsIDYxNC41NTYyXSxcclxuICBbMTQ0Ny40MzY5LCA2MTkuNTA2XSxcclxuICBbMTQ0NS43MjM0LCA2MjMuMzUwMl0sXHJcbiAgWzE0NDcuOTkwOCwgNjI2LjI0MDg0XSxcclxuICBbMTQ1MC4yNjcsIDYyMi4zNzYyXSxcclxuICBbMTQ1MS44MjcsIDYxOC42NTgxXSxcclxuICBbMTQ1Ni4xMDU3LCA2MTYuNzA4NTZdLFxyXG4gIFsxNDYwLjUyNzEsIDYxNC40NDM3XSxcclxuICBbMTQ2MC4zMDc2LCA2MTkuMDQ3XSxcclxuICBbMTQ2NC44NjU3LCA2MTkuNTE0NjVdLFxyXG4gIFsxNDYzLjUxNjcsIDYyMy4xMzY5XSxcclxuICBbMTQ2Mi4xNTExLCA2MjcuMDg3NzddLFxyXG4gIFsxNDY0LjQxMzYsIDYzMC45MTg5XSxcclxuICBbMTQ2OC42MDU4LCA2MzAuNzc3XSxcclxuICBbMTQ2Ny43MDc5LCA2MzUuMzc3NV0sXHJcbiAgWzE0NjguOTc0LCA2NDAuMzIxNF0sXHJcbiAgWzE0NzIuMTQxMSwgNjM3LjE4NDJdLFxyXG4gIFsxNDc2LjE0MiwgNjM5LjAwOTNdLFxyXG4gIFsxNDc0LjM4MywgNjQyLjgzMDRdLFxyXG4gIFsxNDc4LjQwNjYsIDY0NS4zOTcwM10sXHJcbiAgWzE0NzguNzQ3NiwgNjUwLjgzNjRdLFxyXG4gIFsxNDgyLjc4MTYsIDY1Mi40Nzg0XSxcclxuICBbMTQ4MS41MzM5LCA2NTcuNDM4MzVdLFxyXG4gIFsxNDc1LjUyNDMsIDY1NC4wNjY2NV0sXHJcbiAgWzE0NzMuODQ0MiwgNjQ4LjQ3OTI1XSxcclxuICBbMTQ3MC4zNDYsIDY0NS4yMjExXSxcclxuICBbMTQ2Ny40NzczLCA2NDkuNDkyNF0sXHJcbiAgWzE0NzAuODIzNSwgNjUzLjI1NF0sXHJcbiAgWzE0NTguNzUxNywgNjU1LjI5ODddLFxyXG4gIFsxNDYxLjI3MjMsIDY1MC4xOTA1XSxcclxuICBbMTQ2Mi42MjUsIDY0Ni42OTI1N10sXHJcbiAgWzE0NjUuODUyMiwgNjQzLjk4NTJdLFxyXG4gIFsxNDYwLjUxNzYsIDY0Mi44MzEzXSxcclxuICBbMTQ2My42NjA5LCA2MzkuMjQ0MTRdLFxyXG4gIFsxNDYyLjgyMDEsIDYzNC44NTc3XSxcclxuICBbMTQ1OC40Mzg1LCA2MzUuMjA1NTddLFxyXG4gIFsxNDU5LjU0NTcsIDYzMC42MDMxXSxcclxuICBbMTQ1OS4xMTk4LCA2MjMuNzM0NV0sXHJcbiAgWzE0NTYuMjczNiwgNjI3LjIyOTldLFxyXG4gIFsxNDUyLjU3MzYsIDYyNS4zOTYyXSxcclxuICBbMTQ1NS40NjksIDYyMS40NTg1XSxcclxuICBbMTQ1MS40MTc0LCA2MjkuNTU2NzZdLFxyXG4gIFsxNDU1LjAxODYsIDYzMi4wODc2NV0sXHJcbiAgWzE0NTAuMzYyMywgNjMzLjg5OTY2XSxcclxuICBbMTQ0Ny4zNjE4LCA2MzcuNzU0NV0sXHJcbiAgWzE0NDMuMDMzOSwgNjQwLjY5MDZdLFxyXG4gIFsxNDQyLjYwMDgsIDYzNi40ODczN10sXHJcbiAgWzE0MzguODI2NywgNjM1LjI2ODddLFxyXG4gIFsxNDM2LjE4MjUsIDYzMi42NzUzNV0sXHJcbiAgWzE0NDIuNDE1NSwgNjMyLjAyMDRdLFxyXG4gIFsxNDQ2LjIxNTEsIDYzMy42MTgzXSxcclxuICBbMTQ0Ni45MzUzLCA2MjkuODk1Ml0sXHJcbiAgWzE0NDMuNDIxLCA2MjcuNzY2MV0sXHJcbiAgWzE0NDEuNzA0NywgNjI0Ljc0MzQ3XSxcclxuICBbMTQzNy43MzM1LCA2MjQuOTg3MzddLFxyXG4gIFsxNDM5LjMzOTEsIDYyOS40MzUzNl0sXHJcbiAgWzE0MzUuNjU1LCA2MjcuOTUxOTddLFxyXG4gIFsxNDMyLjA3MjMsIDYyNy41Nzg1NV0sXHJcbiAgWzE0MzIuODcsIDYzMS41NjA5XSxcclxuICBbMTQyOS4wNTc3LCA2MzIuMDE2N10sXHJcbiAgWzE0MjQuNTcyMywgNjI5Ljk1OTJdLFxyXG4gIFsxNDI4LjMyODcsIDYyOC4zMjExXSxcclxuICBbMTQyOS42Njk0LCA2MjQuNDU3NzZdLFxyXG4gIFsxNDI3Ljk4MzUsIDYyMS4zNl0sXHJcbiAgWzE0MjcuODAxNiwgNjE3LjQ0Nl0sXHJcbiAgWzE0MjQuNTMzMiwgNjE0LjI5MjhdLFxyXG4gIFsxNDIzLjk0MDksIDYxMC4xMjcyNl0sXHJcbiAgWzE0MzIuMDc1LCA2MTkuMDg5N10sXHJcbiAgWzE0MjkuODI0NywgNjE0LjI5MjFdLFxyXG4gIFsxNDMzLjQzMzcsIDYxNS4yNDVdLFxyXG4gIFsxNDMzLjM5OTIsIDYyMy40NDUzXSxcclxuICBbMTQzNi4wNDQ2LCA2MjAuOTAxNV0sXHJcbiAgWzE0MzYuNjk5OCwgNjE3LjUxMjhdLFxyXG4gIFsxNDM3LjAxMDMsIDYxNC4xMTE4XSxcclxuICBbMTQzMy43NTE1LCA2MTAuOTg4MV0sXHJcbiAgWzE0MzIuNjI4LCA2MDYuODE1NTVdLFxyXG4gIFsxNDM3LjE4MjksIDYwNy4zNzg1XSxcclxuICBbMTQzOC4zNjYxLCA2MTEuMTA4MDNdLFxyXG4gIFsxNDM4LjI2ODksIDYwMy4yOTU1M10sXHJcbiAgWzE0MzQuMTg0OCwgNjAyLjQxMzhdLFxyXG4gIFsxNDMwLjAyNjksIDYwMi43NDg1NF0sXHJcbiAgWzE0MjcuODI2NywgNjA2LjY4MzE3XSxcclxuICBbMTQyOC43OTMyLCA2MTAuNjUwNDVdLFxyXG4gIFsxNDIzLjQ2MjgsIDYwNi4wNTkyXSxcclxuICBbMTQxOS4zMTMyLCA2MDcuMzUzXSxcclxuICBbMTQyMC4wNDI0LCA2MTYuNDEwMl0sXHJcbiAgWzE0MTUuMTU5NCwgNjE2LjEyNzFdLFxyXG4gIFsxNDE0LjEwNjEsIDYyMC41ODEwNV0sXHJcbiAgWzE0MTAuNjE4NCwgNjIzLjc4NTVdLFxyXG4gIFsxNDA5LjI5MTEsIDYyOC4wMTE5Nl0sXHJcbiAgWzE0MTQuODU3MiwgNjI5Ljk0NDY0XSxcclxuICBbMTQyMC4yMzg1LCA2MjcuNjc4Nl0sXHJcbiAgWzE0MTYuMTQzLCA2MjUuMTQyMTVdLFxyXG4gIFsxNDE4Ljg2MjMsIDYyMC43NzY1NV0sXHJcbiAgWzE0MjMuODc4NywgNjE5LjM3MTJdLFxyXG4gIFsxNDIyLjI0ODUsIDYyMy40OTkxNV0sXHJcbiAgWzE0MjUuNDQsIDYyNS40NjA3NV0sXHJcbiAgWzE0MjAuOTEzOCwgNjMyLjAyMTZdLFxyXG4gIFsxNDE3LjcxMDcsIDYzNC42MjVdLFxyXG4gIFsxNDE2LjE3MTEsIDYzOS4xNDA2XSxcclxuICBbMTQyMC4yMjgzLCA2NDEuNDMyMV0sXHJcbiAgWzE0MjIuMjY0NiwgNjM2Ljg5ODFdLFxyXG4gIFsxNDI1Ljg5MzgsIDYzNC40Njg1XSxcclxuICBbMTQyNy45NzgzLCA2MzguNjY1MTZdLFxyXG4gIFsxNDMxLjMyMTgsIDYzNS44MTMxXSxcclxuICBbMTQzNC45ODUxLCA2MzcuNzYyMl0sXHJcbiAgWzE0MzIuNDgxNCwgNjQxLjU1MTFdLFxyXG4gIFsxNDMxLjc4MzcsIDY0Ni41NTMxXSxcclxuICBbMTQzMy4zMzc5LCA2NTAuOTExNV0sXHJcbiAgWzE0MjguNjAwNywgNjUxLjAzNDNdLFxyXG4gIFsxNDI0LjA1MTEsIDY1Mi4yODM5NF0sXHJcbiAgWzE0MTkuMjcxLCA2NTMuNDQ3MTRdLFxyXG4gIFsxNDE2LjY0MjYsIDY0OS4yMzk4N10sXHJcbiAgWzE0MjEuMjAwMywgNjQ2LjgyOTldLFxyXG4gIFsxNDI1Ljc1NiwgNjQ3LjIwOTVdLFxyXG4gIFsxNDI4LjA5NDcsIDY0My41MDIyXSxcclxuICBbMTQyNC4yNDY4LCA2NDEuNTE0NDddLFxyXG4gIFsxNDE2LjM0NjcsIDY0My45NzU0XSxcclxuICBbMTQxMi4zNTY3LCA2NDUuNjM3OF0sXHJcbiAgWzE0MTAuNDQwMiwgNjM5Ljk3NjE0XSxcclxuICBbMTQxMi42MzcyLCA2MzUuMzIxOV0sXHJcbiAgWzE0MDkuMTY4MSwgNjMyLjQ1ODI1XSxcclxuICBbMTQwNS41Nzg2LCA2MzUuODIyN10sXHJcbiAgWzE0MDQuOTQ1OCwgNjQwLjM2NTZdLFxyXG4gIFsxNDAwLjM2NjgsIDYzOS42MzQ3N10sXHJcbiAgWzEzOTUuNjY3MSwgNjM4LjA5MzVdLFxyXG4gIFsxMzkwLjk0MDIsIDYzNi43OTU1XSxcclxuICBbMTM4Ni4xNzEsIDYzNS4zNzAxXSxcclxuICBbMTM4OS44NzcyLCA2MzEuNTE1NzVdLFxyXG4gIFsxMzg0LjY3MDcsIDYzMC40NDQ3XSxcclxuICBbMTM4MS4wNjY5LCA2MzQuMTU0XSxcclxuICBbMTM4Mi4zOTk3LCA2MzguOTMyMV0sXHJcbiAgWzEzNzcuNjQ0NSwgNjQwLjg0MDJdLFxyXG4gIFsxMzczLjA3NSwgNjM5LjMyNzldLFxyXG4gIFsxMzcxLjQ5NzcsIDY0My41ODc2NV0sXHJcbiAgWzEzNzEuNDc0OSwgNjQ5LjI1NDJdLFxyXG4gIFsxMzY2LjUzNDcsIDY1MS40MTY3NV0sXHJcbiAgWzEzNzAuNDM0NywgNjU1LjExN10sXHJcbiAgWzEzNzQuNzEwMSwgNjU4LjQzMTVdLFxyXG4gIFsxMzcyLjc3NDcsIDY2NC4xMTAzNV0sXHJcbiAgWzEzNzguMzUwNSwgNjYzLjc2OTk2XSxcclxuICBbMTM3OS44ODk5LCA2NzAuMDA5Nl0sXHJcbiAgWzEzNzQuOTc5MSwgNjY5Ljg3MjldLFxyXG4gIFsxMzY5Ljg1NzksIDY2OS41ODAyXSxcclxuICBbMTM2Ni40MjQzLCA2NjUuNjM0MV0sXHJcbiAgWzEzNjguNDY4OCwgNjYwLjQ3MzYzXSxcclxuICBbMTM3Ni4xODA0LCA2NTIuNTg3MTZdLFxyXG4gIFsxMzc2LjEzNDMsIDY0Ni4xODcyNl0sXHJcbiAgWzEzODEuODc3LCA2NDQuNTM0M10sXHJcbiAgWzEzODAuNzAwNiwgNjQ5LjUxOTUzXSxcclxuICBbMTM4Mi4xMjkzLCA2NTMuOTExODddLFxyXG4gIFsxMzgwLjAzMjMsIDY1OC4yNTMzNl0sXHJcbiAgWzEzODQuNDUwOCwgNjYwLjkxMV0sXHJcbiAgWzEzODMuNDc0OSwgNjY1Ljg0OF0sXHJcbiAgWzEzODguMzk4NCwgNjY2LjQ1NzE1XSxcclxuICBbMTM4OS41ODk4LCA2NjEuNjgxXSxcclxuICBbMTM5MS43MjQ3LCA2NTcuNzkxNF0sXHJcbiAgWzEzODYuNjg5MywgNjU1Ljg0OTA2XSxcclxuICBbMTM5Mi4xNTQ3LCA2NTIuMjM0MjVdLFxyXG4gIFsxMzk1LjM1ODgsIDY2MS4xOTQ5XSxcclxuICBbMTM5My4zNDg2LCA2NjUuOTUxOV0sXHJcbiAgWzEzOTcuNDk4NywgNjY3LjA1NTI0XSxcclxuICBbMTM5OS41NzE3LCA2NjMuOTQ5Nl0sXHJcbiAgWzE0MDEuNjg2OSwgNjY5LjA5OV0sXHJcbiAgWzE0MDUuNDQ0OCwgNjY1LjQxNjI2XSxcclxuICBbMTQwMy4xMjE4LCA2NjIuNzE5M10sXHJcbiAgWzE0MDAuMjYwNywgNjU5LjQ2MjA0XSxcclxuICBbMTM5Ni44MjQ1LCA2NTUuOTQ0Nl0sXHJcbiAgWzE0MDMuNjc4LCA2NTYuMTI3MTRdLFxyXG4gIFsxNDA2LjQ3ODEsIDY2MC4yODA2NF0sXHJcbiAgWzE0MDkuNjEzNCwgNjY0LjAyNjU1XSxcclxuICBbMTQxMS44NjQ5LCA2NjAuMTg4MV0sXHJcbiAgWzE0MDkuMzAyNCwgNjU2LjMxNzc1XSxcclxuICBbMTQwNi42NDU4LCA2NTIuODAyMzddLFxyXG4gIFsxNDAwLjg4MTIsIDY1Mi40NDQyXSxcclxuICBbMTM5Ni45Njg5LCA2NDkuNzg2NTZdLFxyXG4gIFsxMzkyLjIwNDEsIDY0Ny4zNTI5N10sXHJcbiAgWzEzODYuNjQ5MiwgNjQ4LjQ2NjA2XSxcclxuICBbMTM4Ny4xNTY3LCA2NDEuNTAyOV0sXHJcbiAgWzEzOTEuOTEzOCwgNjQyLjI3MzZdLFxyXG4gIFsxMzk2LjYyNywgNjQ0LjAxMzJdLFxyXG4gIFsxNDAxLjA1ODEsIDY0NS42NTEwNl0sXHJcbiAgWzE0MDQuMjA4NSwgNjQ4Ljk0MDRdLFxyXG4gIFsxNDA2Ljc3OTQsIDY0NC4xODExXSxcclxuICBbMTQwOC43NDUsIDY0OC42NjY4XSxcclxuICBbMTQxMS42NDc3LCA2NTEuNjAwN10sXHJcbiAgWzE0MTQuMTQ1NSwgNjU1LjQ5MDA1XSxcclxuICBbMTQxNy4yMzYyLCA2NTkuOTA0MzZdLFxyXG4gIFsxNDIyLjE2NDgsIDY2My4wNDA3XSxcclxuICBbMTQyMy4xOTI2LCA2NTcuNDY3MTZdLFxyXG4gIFsxNDI5LjcxMTgsIDY1NS45NjIwNF0sXHJcbiAgWzE0MzIuNjU2NSwgNjYxLjMyMTddLFxyXG4gIFsxNDI3LjQyMDIsIDY2MC40ODY5NF0sXHJcbiAgWzE0MjcuOTY4NSwgNjY1LjU0MjddLFxyXG4gIFsxNDI2LjgzOTYsIDY2OS45Mjg5Nl0sXHJcbiAgWzE0MjIuNzI5MiwgNjY3Ljc2MDU2XSxcclxuICBbMTQxOC4yNjM3LCA2NjUuOTk2N10sXHJcbiAgWzE0MTQuNDk5OSwgNjY0LjA5MjddLFxyXG4gIFsxNDEyLjExNjUsIDY2Ny42NTkxXSxcclxuICBbMTQxNS4xOTAyLCA2NzAuMTI3MV0sXHJcbiAgWzE0MTguOTM0LCA2NzEuMTQzNV0sXHJcbiAgWzE0MjIuNTE4OSwgNjcyLjY0NjNdLFxyXG4gIFsxNDI1LjcyOTcsIDY3NC40MDNdLFxyXG4gIFsxNDI4Ljc3LCA2NzYuMDYyOF0sXHJcbiAgWzE0MzIuNjc2MywgNjc1LjgwMzddLFxyXG4gIFsxNDMwLjg2NTEsIDY3MS42OTAzXSxcclxuICBbMTQzMy4zODc1LCA2NjcuMjg3MjNdLFxyXG4gIFsxNDM3Ljc1MzksIDY2NC4wNzA4XSxcclxuICBbMTQzNy42NDE2LCA2NTkuMzMwMV0sXHJcbiAgWzE0MzUuMzE2MiwgNjU1LjA5NjJdLFxyXG4gIFsxNDQwLjc4NzUsIDY1NS4zMTU3XSxcclxuICBbMTQ0Mi44OTMxLCA2NTAuNzYzNF0sXHJcbiAgWzE0MzguMTIzNSwgNjQ5Ljg3ODhdLFxyXG4gIFsxNDM2LjU5MTMsIDY0NC45NTczXSxcclxuICBbMTQzOC41MjQ0LCA2NDAuNTI1MTVdLFxyXG4gIFsxNDQxLjkzOTIsIDY0NS40NTMyNV0sXHJcbiAgWzE0NDcuMDYwNSwgNjQyLjM2NDc1XSxcclxuICBbMTQ1MS40MjIxLCA2NDAuMzU0XSxcclxuICBbMTQ1My41MDMsIDYzNi43MDldLFxyXG4gIFsxNDU3LjY5MzcsIDYzOS4yMDM4Nl0sXHJcbiAgWzE0NTUuNDMxMiwgNjQyLjg3MDM2XSxcclxuICBbMTQ1Ni44NjIzLCA2NDYuOTAzNzVdLFxyXG4gIFsxNDU3LjA4MzQsIDY1MS4wNTU2Nl0sXHJcbiAgWzE0NTIuMTYwMiwgNjQ5Ljc0MDY2XSxcclxuICBbMTQ1MS40MjgsIDY0NS4xOTEwNF0sXHJcbiAgWzE0NDYuODI2NCwgNjQ2Ljg3MjhdLFxyXG4gIFsxNDQ3LjQ5MjgsIDY1MS4zMDE5XSxcclxuICBbMTQ0OS45OTQ5LCA2NTQuOTQzNV0sXHJcbiAgWzE0NTQuMjUwMiwgNjU0LjQ2MDddLFxyXG4gIFsxNDUyLjIwNjUsIDY1OC44NDgyN10sXHJcbiAgWzE0NTYuOTc2MSwgNjU5LjkwMDE1XSxcclxuICBbMTQ1Ny45MjcyLCA2NjQuODc2NF0sXHJcbiAgWzE0NjEuNjEzMywgNjYyLjM0NDg1XSxcclxuICBbMTQ2Mi4zNTQ1LCA2NTcuODA4ODRdLFxyXG4gIFsxNDYzLjk5MDcsIDY1My4xODA1XSxcclxuICBbMTQ2Ny4yNzA0LCA2NTYuNDU2NTRdLFxyXG4gIFsxNDcxLjY1NTUsIDY1OS4xOTcyN10sXHJcbiAgWzE0NzYuNjAyOCwgNjU5LjEyMjQ0XSxcclxuICBbMTQ4MC4zNzI4LCA2NjMuMDYzMjNdLFxyXG4gIFsxNDg1LjYxNjcsIDY2My44MjMzNl0sXHJcbiAgWzE0ODcuMTgzOCwgNjU5LjE1OTddLFxyXG4gIFsxNDg2LjY2MzgsIDY1NC43MTgyNl0sXHJcbiAgWzE0OTAuMDMyMiwgNjUxLjg1MTQ0XSxcclxuICBbMTQ5NC4yMTQ1LCA2NTAuNTUwOV0sXHJcbiAgWzE0OTcuNzUxLCA2NTIuNzgxNF0sXHJcbiAgWzE1MDIuMDQ5NywgNjUxLjYyOTJdLFxyXG4gIFsxNTA1LjE0MTQsIDY1NS40ODkxNF0sXHJcbiAgWzE1MDguNzAzMSwgNjU5LjQzOTJdLFxyXG4gIFsxNTEyLjE4MDgsIDY2My42ODQ0NV0sXHJcbiAgWzE1MTAuODg4NCwgNjY4Ljk5NDddLFxyXG4gIFsxNTExLjYwMDUsIDY3NC4xNDk1NF0sXHJcbiAgWzE1MTYuMTkxNCwgNjcxLjYzMDFdLFxyXG4gIFsxNTE2LjY5MDcsIDY2Ni42NzIxXSxcclxuICBbMTUxNy43MTE0LCA2NjEuMzk3NDZdLFxyXG4gIFsxNTE5LjQzNzcsIDY1NS40NDEzNV0sXHJcbiAgWzE1MTYuOTQ5OCwgNjUwLjk5NTZdLFxyXG4gIFsxNTE3Ljk3MjksIDY0NS4yMjIxN10sXHJcbiAgWzE1MjEuNTYzMiwgNjQ4Ljk2NDk3XSxcclxuICBbMTUyMi43Nzg0LCA2NDMuNzM0NV0sXHJcbiAgWzE1MzEuMzQyMywgNjM5LjM1MDNdLFxyXG4gIFsxNTM0LjI2NzIsIDYzNS45NzY3NV0sXHJcbiAgWzE1MjguNzIsIDYzNi40Njg1XSxcclxuICBbMTUyNS44OTQzLCA2MzMuNTE0Nl0sXHJcbiAgWzE1MjAuOTAxMiwgNjMwLjM0MDJdLFxyXG4gIFsxNTIwLjk4LCA2MzQuMjExOF0sXHJcbiAgWzE1MTcuNDM0MSwgNjM1LjkzOTRdLFxyXG4gIFsxNTE0LjE2MTMsIDYzNy41NTA5Nl0sXHJcbiAgWzE1MTAuNTgxMiwgNjM3LjA5NTY0XSxcclxuICBbMTUwNy4wMzUyLCA2MzguNzUyM10sXHJcbiAgWzE1MDUuMjM2NSwgNjQyLjA1M10sXHJcbiAgWzE1MDIuNjI2MywgNjQ1LjI5ODhdLFxyXG4gIFsxNDk5LjA1NjIsIDY0Ny40NTg2XSxcclxuICBbMTQ5NS4wNTUzLCA2NDYuMDM2Nl0sXHJcbiAgWzE0OTAuNjA4NCwgNjQ2LjgzNTYzXSxcclxuICBbMTQ4Ni42OTM0LCA2NDguODcxMTVdLFxyXG4gIFsxNDgyLjc5MjUsIDY0Ny40NTU0XSxcclxuICBbMTQ4Mi45MTg2LCA2NDMuMjIyMzVdLFxyXG4gIFsxNDgwLjM4NzcsIDYzOS45NTE4XSxcclxuICBbMTQ3OS42NDYsIDYzNS44ODg4NV0sXHJcbiAgWzE0NzUuODIxMywgNjMzLjkyODVdLFxyXG4gIFsxNDcyLjMyMTMsIDYzMi4xMTE0XSxcclxuICBbMTQ2Ny4wMTg3LCA2MjYuODU5NDRdLFxyXG4gIFsxNDY3Ljk5OTMsIDYyMi45Nzc5XSxcclxuICBbMTQ2OC44MjY1LCA2MTkuMDI1NV0sXHJcbiAgWzE0NjQuOTE0NCwgNjE1LjQ4N10sXHJcbiAgWzE0NjMuNTYsIDYxMS4wNDA4M10sXHJcbiAgWzE0NjcuODI4MSwgNjExLjE3NzNdLFxyXG4gIFsxNDY4LjkzNDcsIDYxNC43NDk5XSxcclxuICBbMTQ3Mi4zMzc0LCA2MTMuMjEzMV0sXHJcbiAgWzE0NzIuMjQ5OSwgNjE3LjE5M10sXHJcbiAgWzE0NzIuNzM2NywgNjIwLjkyMjhdLFxyXG4gIFsxNDcxLjUwNzYsIDYyNC4yODI5Nl0sXHJcbiAgWzE0NzIuMDU2NCwgNjI3Ljc0ODhdLFxyXG4gIFsxNDc1LjcxMTcsIDYyNC4zNTYyXSxcclxuICBbMTQ3Ni4zNzgyLCA2MjkuMDY3NzVdLFxyXG4gIFsxNDgwLjEzMjgsIDYzMS42Nzg3XSxcclxuICBbMTQ4My44OTk0LCA2MzQuMjY3MV0sXHJcbiAgWzE0ODUuMTEwNCwgNjM5LjA3ODVdLFxyXG4gIFsxNDg3LjUzNjEsIDY0My40NjM1Nl0sXHJcbiAgWzE0OTIuNjUyMiwgNjQyLjUyNDJdLFxyXG4gIFsxNDkwLjE2MDgsIDYzOS4yNTkzXSxcclxuICBbMTQ4OC4zNTI1LCA2MzYuMDIwNDVdLFxyXG4gIFsxNDg4LjM3NDEsIDYzMi4yNzczXSxcclxuICBbMTQ4NS43MzU0LCA2MjkuMzI1NDRdLFxyXG4gIFsxNDgyLjE0OTQsIDYyOC40NDI3NV0sXHJcbiAgWzE0NzkuNDEzMywgNjI2LjAxOTJdLFxyXG4gIFsxNDc5LjUzLCA2MjIuMDg4MTNdLFxyXG4gIFsxNDc2LjM1NjksIDYxOS43NTE3XSxcclxuICBbMTQ3NS45ODY5LCA2MTUuODk1Nl0sXHJcbiAgWzE0NzkuODg0OCwgNjE3LjQ0NDk1XSxcclxuICBbMTQ3OS44OTIzLCA2MTMuMjA2NF0sXHJcbiAgWzE0ODQuMzEwNCwgNjEzLjAzMzE0XSxcclxuICBbMTQ4Mi4zNzk5LCA2MDcuOTUwOV0sXHJcbiAgWzE0NzkuNjE3LCA2MDMuOTUwODddLFxyXG4gIFsxNDg1LjU4NDcsIDYwNC4xNTIyXSxcclxuICBbMTQ4Ny42OTQ4LCA2MDcuOTIyMjRdLFxyXG4gIFsxNDkyLjE5MjcsIDYwOC4wMDI2XSxcclxuICBbMTQ5NS4xMTMzLCA2MDQuNjg2MTZdLFxyXG4gIFsxNDk5LjA0NCwgNjA2LjEwNDZdLFxyXG4gIFsxNDk2Ljg0NzksIDYxMC4xNjM3XSxcclxuICBbMTQ5My40NjUzLCA2MTIuMzAxNV0sXHJcbiAgWzE0ODkuMTQ4MiwgNjEyLjI2NTc1XSxcclxuICBbMTQ5Ni4zMzQyLCA2MTYuMTA1MV0sXHJcbiAgWzE1MDAuNjIwNCwgNjEzLjc2NzY0XSxcclxuICBbMTUwMS4xMjM3LCA2MTcuNzE2OV0sXHJcbiAgWzE1MDUuMzczNSwgNjIzLjE1NTFdLFxyXG4gIFsxNTAxLjQ2MzMsIDYyMi4wMTA2XSxcclxuICBbMTQ5OC43MzY3LCA2MjUuMDAwNV0sXHJcbiAgWzE0OTUuMTU5NywgNjIzLjY3MjddLFxyXG4gIFsxNDkxLjI2NzYsIDYyNC4yNTI3NV0sXHJcbiAgWzE0ODcuODM5MSwgNjIwLjcyMzE0XSxcclxuICBbMTQ5Mi43MzczLCA2MjAuMjUzMV0sXHJcbiAgWzE0OTcuNTE5MywgNjIwLjIxNTFdLFxyXG4gIFsxNDkxLjQyMDIsIDYxNi42NzAyXSxcclxuICBbMTQ4Ny41OTQyLCA2MTYuMjE3NjVdLFxyXG4gIFsxNDg0LjE1MDQsIDYxNy4zMjk0XSxcclxuICBbMTQ4My4wNjY3LCA2MjAuNjQ3M10sXHJcbiAgWzE0ODMuODIxOCwgNjI0LjM0MjY1XSxcclxuICBbMTQ4Ny42MTE5LCA2MjUuMzE3NDRdLFxyXG4gIFsxNDkyLjcwNjUsIDYzMy42MzA3NF0sXHJcbiAgWzE0OTAuNzI2NywgNjI4Ljg5MjJdLFxyXG4gIFsxNDk0Ljc1NzksIDYyNy45MzY3XSxcclxuICBbMTQ5Ni41MzcyLCA2MzEuNzkzMV0sXHJcbiAgWzE0OTkuNTcyNiwgNjI5LjA1MzJdLFxyXG4gIFsxNTAyLjk2MTksIDYyNi40ODYxNV0sXHJcbiAgWzE1MDMuOTAyMywgNjMwLjk0Mjc1XSxcclxuICBbMTUwMC43NzE1LCA2MzMuNjkzNV0sXHJcbiAgWzE0OTcuNzExOCwgNjM2LjIwNzE1XSxcclxuICBbMTQ5NC4zMDM2LCA2MzguMTE1M10sXHJcbiAgWzE0OTcuNzEwNCwgNjQyLjAxMjFdLFxyXG4gIFsxNTAxLjIzOTEsIDYzOS40NTc5XSxcclxuICBbMTUwMy45MTMsIDYzNi4xNjMyN10sXHJcbiAgWzE1MDcuNDg5OSwgNjM0LjMxODZdLFxyXG4gIFsxNTEwLjMzNjQsIDY0MS41NTY0Nl0sXHJcbiAgWzE1MDcuOTgwNywgNjQ1Ljg4NzQ1XSxcclxuICBbMTUwNi42NzE5LCA2NTAuMDMwNF0sXHJcbiAgWzE1MTEuMDYwNywgNjUzLjMxMTVdLFxyXG4gIFsxNTEyLjcxNDUsIDY0OC45MTY2XSxcclxuICBbMTUxMi44NDA3LCA2NDQuOTU5NTNdLFxyXG4gIFsxNTE1LjUyNTYsIDY0MS4yOTQwN10sXHJcbiAgWzE1MTkuODU0NSwgNjM5Ljc1NjRdLFxyXG4gIFsxNTIzLjY3MTMsIDYzNy4zMzMxXSxcclxuICBbMTUyNS45OTE1LCA2NDAuNTUwNTRdLFxyXG4gIFsxNTI4Ljc5NCwgNjQzLjY2MjIzXSxcclxuICBbMTUyNi4zMTE2LCA2NDcuNjcxNjNdLFxyXG4gIFsxNTI0LjIxMzcsIDY1My4yOTMzM10sXHJcbiAgWzE1MjMuNDE2NiwgNjU5LjIxNTZdLFxyXG4gIFsxNTIyLjY2MTksIDY2NC4yNzgzXSxcclxuICBbMTUyMS40OTkzLCA2NjkuMTUyODNdLFxyXG4gIFsxNTIxLjIwNzYsIDY3My44Mzk2XSxcclxuICBbMTUyMy4yOTk5LCA2NzcuOTAxNzNdLFxyXG4gIFsxNTI0LjU5MTgsIDY4Mi4zODM0XSxcclxuICBbMTUyOC4wNDAzLCA2ODUuMzIyMjddLFxyXG4gIFsxNTMyLjY5NjUsIDY4NS43NzAxNF0sXHJcbiAgWzE1MzMuMTM0OSwgNjkxLjA0NDFdLFxyXG4gIFsxNTI4LjYxNjMsIDY5MC44NDk2XSxcclxuICBbMTUzNy45NDI5LCA2OTEuMTg5OV0sXHJcbiAgWzE1MjQuMTg4MiwgNjk0Ljg4MTJdLFxyXG4gIFsxNTIzLjc1NzMsIDY5MC4wMzk5XSxcclxuICBbMTUyMS42Nzk2LCA2ODYuNTg3NF0sXHJcbiAgWzE1MTYuNjM5NCwgNjg4LjE1MzNdLFxyXG4gIFsxNTA2LjU3NTYsIDY5MC41OTU5NV0sXHJcbiAgWzE1MDEuNDgwMSwgNjg3LjU5MjRdLFxyXG4gIFsxNDkzLjA5OTEsIDY4My4zMDc3NF0sXHJcbiAgWzE0OTguNTQyMSwgNjgyLjc0NTI0XSxcclxuICBbMTUwMy43NDQ2LCA2ODAuMTA1OV0sXHJcbiAgWzE1MDYuMzU5NCwgNjg0LjE2MTEzXSxcclxuICBbMTUxMS4yNjUxLCA2ODUuODA2OF0sXHJcbiAgWzE1MTUuNDMsIDY4Mi43MTQzNl0sXHJcbiAgWzE1MTkuNjkxNCwgNjgyLjA2OTFdLFxyXG4gIFsxNTE3LjI2MDMsIDY3Ni45MzA3XSxcclxuICBbMTUxMi44MDA0LCA2NzkuMjcwNzVdLFxyXG4gIFsxNTA4LjU3NjQsIDY3OC45MzQ5NF0sXHJcbiAgWzE1MDUuOTIzLCA2NzQuMTc4Ml0sXHJcbiAgWzE1MDAuODYxMiwgNjc2Ljc4NTNdLFxyXG4gIFsxNDk2LjExMDgsIDY3Ny4zNDFdLFxyXG4gIFsxNDkzLjc5MywgNjcyLjQ4MjldLFxyXG4gIFsxNDk5Ljg0MDUsIDY3MS44NjczXSxcclxuICBbMTUwMC45NTYsIDY2Ni4zNDA3XSxcclxuICBbMTUwNS40MDg3LCA2NjkuMzI4OF0sXHJcbiAgWzE1MDYuNDU0NiwgNjY0LjM3ODhdLFxyXG4gIFsxNTAyLjUwMTIsIDY2MC41MDA4XSxcclxuICBbMTQ5NS4yNjQ0LCA2NjcuODQwNjRdLFxyXG4gIFsxNDk3LjA5MTYsIDY2Mi43Njk4NF0sXHJcbiAgWzE0OTguMDA3OCwgNjU3LjQ2NzhdLFxyXG4gIFsxNDkyLjU0ODYsIDY1NS42OTk2XSxcclxuICBbMTQ5Mi40Njk2LCA2NjAuMTY4NzZdLFxyXG4gIFsxNDkxLjMxMywgNjY0LjU4Mzg2XSxcclxuICBbMTQ4OC4yMTAxLCA2NjguNzUxNl0sXHJcbiAgWzE0ODEuMTg1NSwgNjY4LjU2MTA0XSxcclxuICBbMTQ4NC4yMjg1LCA2NzIuMjgzN10sXHJcbiAgWzE0ODguNzc5OCwgNjc0LjM5OTA1XSxcclxuICBbMTQ5MS4yMDg3LCA2NzguMzk1MjZdLFxyXG4gIFsxNDg3LjAxMTgsIDY4MS4zMzE5XSxcclxuICBbMTQ4MS44OTgzLCA2ODAuOTY2Ml0sXHJcbiAgWzE0ODMuMTU5OSwgNjc2LjY3Nzg2XSxcclxuICBbMTQ3OC4wODcyLCA2NzQuOTkwM10sXHJcbiAgWzE0NzMuOTYzMSwgNjc5Ljg5MzZdLFxyXG4gIFsxNDcxLjkyMzMsIDY3Ni43NTA4NV0sXHJcbiAgWzE0NjcuNzQwNSwgNjgxLjAyMzhdLFxyXG4gIFsxNDY3LjQ0NjcsIDY3NS4zMTk2NF0sXHJcbiAgWzE0NjUuODk0OSwgNjY2LjYyNDk0XSxcclxuICBbMTQ2Ni4xODA3LCA2NjEuMzc4OV0sXHJcbiAgWzE0NzAuMzU0NiwgNjY0LjIzODA0XSxcclxuICBbMTQ3NS4yMTczLCA2NjQuOTE1MDRdLFxyXG4gIFsxNDc1LjkzNSwgNjY5Ljg2NzZdLFxyXG4gIFsxNDcyLjI5NDcsIDY3Mi44MTQ4XSxcclxuICBbMTQ2OS41MTY1LCA2NjkuNTY3NTddLFxyXG4gIFsxNDY0LjEyNCwgNjcyLjIwMzg2XSxcclxuICBbMTQ1OS4yOTIyLCA2NzIuMTY2NV0sXHJcbiAgWzE0NjIuODIzOSwgNjc3LjU4NV0sXHJcbiAgWzE0NTguMDk5OSwgNjc2LjU1Nzg2XSxcclxuICBbMTQ1My45MDYsIDY3My41NTg4NF0sXHJcbiAgWzE0NjEuNjc1OCwgNjY3LjY5M10sXHJcbiAgWzE0NTUuNzE3LCA2NjguOTI0Ml0sXHJcbiAgWzE0NTAuODcyMywgNjY4LjI3NV0sXHJcbiAgWzE0NTMuMTE1MiwgNjYzLjk4NTg0XSxcclxuICBbMTQ0OC4yNDg3LCA2NjIuMTQ4NzRdLFxyXG4gIFsxNDQ1LjgzNCwgNjU2LjQ1MjVdLFxyXG4gIFsxNDQzLjEzMjIsIDY2MC41OTE4Nl0sXHJcbiAgWzE0NDIuODUzMywgNjY1LjI5NDg2XSxcclxuICBbMTQ0Ni4yNzU0LCA2NjcuODgzOV0sXHJcbiAgWzE0NDguNDYxNCwgNjcyLjkwNl0sXHJcbiAgWzE0NDMuMDkzMywgNjcyLjQ0MV0sXHJcbiAgWzE0MzkuNDE5NywgNjY4Ljk0MDZdLFxyXG4gIFsxNDM2LjIzMjcsIDY3Mi41NThdLFxyXG4gIFsxNDM2LjM0NTUsIDY3Ny4yNjgyXSxcclxuICBbMTQ0MC4xMDk5LCA2NzcuMDUzOF0sXHJcbiAgWzE0NDQuOTA4OSwgNjc3LjY4NDNdLFxyXG4gIFsxNDUxLjAyNzEsIDY3Ny4zNzEzNF0sXHJcbiAgWzE0NDcuMzMxNywgNjgwLjkwMzFdLFxyXG4gIFsxNDQ3LjUyOTQsIDY4NC4zNjQ1XSxcclxuICBbMTQ0Ny42MTEsIDY4Ny4zMDgyXSxcclxuICBbMTQ0NC43NjI1LCA2ODkuMDk0NjddLFxyXG4gIFsxNDQxLjc4MjMsIDY5MC4wMzAzXSxcclxuICBbMTQzOC4wMTQsIDY5MC4wMDg1XSxcclxuICBbMTQzNS42NzA3LCA2ODYuNTU0NDRdLFxyXG4gIFsxNDMyLjcxMjMsIDY4NC4zMjQ4XSxcclxuICBbMTQyOC42MTcsIDY4NC40NDY5XSxcclxuICBbMTQyNS4wMzgxLCA2ODMuNjk5OV0sXHJcbiAgWzE0MjEuMDAxMSwgNjgyLjQzMzhdLFxyXG4gIFsxNDE3LjE5NzMsIDY4MC43NTYxNl0sXHJcbiAgWzE0MTMuMDk2MiwgNjgwLjg3NDc2XSxcclxuICBbMTQwOS4wNTk5LCA2ODAuMjYxNTRdLFxyXG4gIFsxNDA4LjI1NCwgNjg2LjA2NjldLFxyXG4gIFsxNDEzLjU2MiwgNjg1Ljg0ODRdLFxyXG4gIFsxNDE3LjkwNjYsIDY4Ni43MjQ4XSxcclxuICBbMTQyMi40OTIyLCA2ODcuMzM5Nl0sXHJcbiAgWzE0MjUuODU1NSwgNjkwLjAzMzddLFxyXG4gIFsxNDMwLjIyMDIsIDY4OC4yNDM1XSxcclxuICBbMTQyOS43Nzc4LCA2OTMuODgwNzRdLFxyXG4gIFsxNDI0LjY0LCA2OTUuMTUxMV0sXHJcbiAgWzE0MTkuMjY2NywgNjkyLjEzNjY2XSxcclxuICBbMTQxNS4zNDc3LCA2OTYuODExNF0sXHJcbiAgWzE0MjEuNjE2MywgNjk5LjMxODFdLFxyXG4gIFsxNDI3LjYwMDMsIDcwMS44NDk1NV0sXHJcbiAgWzE0MzEuMjgsIDcwNi4yMDE2Nl0sXHJcbiAgWzE0MzYuODE5MywgNzA0LjY2OTldLFxyXG4gIFsxNDQ0Ljc2NDksIDcwNi45NDQxXSxcclxuICBbMTQ0MC4zMzUzLCA3MDkuOTE2N10sXHJcbiAgWzE0NDAuOTcwMiwgNzE1LjQ0ODFdLFxyXG4gIFsxNDMzLjg3NTUsIDcxNi40NjM3NV0sXHJcbiAgWzE0MzQuOTgxNCwgNzEwLjc5MTQ0XSxcclxuICBbMTQyOS40NjQ0LCA3MTEuNzMyMV0sXHJcbiAgWzE0MjcuNjM0LCA3MTYuNTI1NzZdLFxyXG4gIFsxNDI3LjIzMTQsIDcyMS40Njk3XSxcclxuICBbMTQyMS4xMzExLCA3MjAuMzM2MzZdLFxyXG4gIFsxNDE4LjQ2MjgsIDcxNi4wMTcyXSxcclxuICBbMTQxMy40NzM4LCA3MTkuOTc1Nl0sXHJcbiAgWzE0MDQuNTgwMywgNzE1LjU0NzM2XSxcclxuICBbMTM5OC40MTA4LCA3MTUuNTIxMzZdLFxyXG4gIFsxMzkyLjM1NjMsIDcxNC4yMzYzXSxcclxuICBbMTM4Ny4wOTQsIDcxNi40NTY2N10sXHJcbiAgWzEzODQuODAwNSwgNzA5LjY1NzY1XSxcclxuICBbMTM3OC4wOTg0LCA3MDguMTQwMjZdLFxyXG4gIFsxMzcwLjYxNjUsIDcwNy45NzE4Nl0sXHJcbiAgWzEzNjcuMzAwOSwgNzAyLjEyOTNdLFxyXG4gIFsxMzY3LjYwMDgsIDY5NS44MzM0NF0sXHJcbiAgWzEzNjIuOTQ3NiwgNjkyLjQyOThdLFxyXG4gIFsxMzU1Ljk0NzMsIDY5MS4xODQzXSxcclxuICBbMTM2Ny40Mjc0LCA2ODYuODEzN10sXHJcbiAgWzEzNjcuOTg5NywgNjgwLjcwMzU1XSxcclxuICBbMTM2My41MjYsIDY3Ny4wNzc4XSxcclxuICBbMTM2Ny43OTg4LCA2NzQuNTE4Ml0sXHJcbiAgWzEzNzIuMzMzLCA2NzUuODEzMzVdLFxyXG4gIFsxMzczLjcwMjYsIDY4Mi4wMTY4NV0sXHJcbiAgWzEzNzkuNjYyNywgNjgzLjAwODY3XSxcclxuICBbMTM3My42MzQ2LCA2ODguNzAwNF0sXHJcbiAgWzEzNzUuNTkxMSwgNjk0Ljg0MV0sXHJcbiAgWzEzNzQuNTgzMywgNzAxLjQ0ODM2XSxcclxuICBbMTM4MS4zMTY4LCA3MDIuMjc3NV0sXHJcbiAgWzEzODcuNTY4NCwgNzAxLjY5M10sXHJcbiAgWzEzOTAuMjMyOSwgNzA3LjI5MDNdLFxyXG4gIFsxMzk1Ljc4OTQsIDcwOC4wMTAyXSxcclxuICBbMTQwMC44NDYyLCA3MDkuMjIyMTddLFxyXG4gIFsxNDA1LjUzNjYsIDcwNy41MjcyXSxcclxuICBbMTQxMC4xNjQ3LCA3MDguNTUxNDVdLFxyXG4gIFsxNDE0LjkwNTIsIDcwNy44NDYzXSxcclxuICBbMTQwOS41MzAzLCA3MTQuOTY0NV0sXHJcbiAgWzE0MTQuNTU5NiwgNzEzLjI1MDddLFxyXG4gIFsxNDE5Ljc3MzksIDcwOS42OTQyXSxcclxuICBbMTQyMy4zNzQ4LCA3MTMuNjA4NF0sXHJcbiAgWzE0MjUuNzMzMiwgNzA4LjIzMzE1XSxcclxuICBbMTQyMi4zMzc2LCA3MDQuNzQ4Ml0sXHJcbiAgWzE0MTYuNjQ2MiwgNzAzLjI1ODJdLFxyXG4gIFsxNDA5LjY3OTIsIDcwMS42MTEzXSxcclxuICBbMTQwNi41MDEsIDY5NS4xMTU2Nl0sXHJcbiAgWzE0MTIuMzU1NywgNjkxLjM0MDc2XSxcclxuICBbMTQwMS45MzM1LCA3MDEuNTkzNDRdLFxyXG4gIFsxMzk0Ljc3NDIsIDcwMS4wOTg1XSxcclxuICBbMTM5OC41ODczLCA2OTQuNTc2MDVdLFxyXG4gIFsxMzkzLjA1MjcsIDY5MC4zNTE1XSxcclxuICBbMTM4OS45MDA2LCA2OTUuMTg0OTRdLFxyXG4gIFsxMzgzLjA5MTgsIDY5NS42MjEzNF0sXHJcbiAgWzEzODAuOTkyMywgNjg5LjM3OTE1XSxcclxuICBbMTM4Ny4wOTEyLCA2ODcuNjIwM10sXHJcbiAgWzEzODUuNzIzOCwgNjgxLjM3NDRdLFxyXG4gIFsxMzgyLjE4NzMsIDY3Ni40NDg3XSxcclxuICBbMTM3Ny4yOTU3LCA2NzYuMDc0Ml0sXHJcbiAgWzEzODQuOTgzOSwgNjcxLjE2MzFdLFxyXG4gIFsxMzkwLjk1ODMsIDY3MC45MTg3XSxcclxuICBbMTM4Ny44NzU1LCA2NzUuNTUzMV0sXHJcbiAgWzEzOTEuMTk5LCA2NzkuMjY2MjRdLFxyXG4gIFsxMzkyLjQzMjQsIDY4NC4xNTM3XSxcclxuICBbMTM5Ny44OTU4LCA2ODcuMDMzOTRdLFxyXG4gIFsxNDAzLjU3NzYsIDY4OS4xMDI0XSxcclxuICBbMTQwNC44NDUyLCA2ODAuNzMxOV0sXHJcbiAgWzE0MDEuMzQxMSwgNjgyLjkwNTc2XSxcclxuICBbMTM5Ni45NzQ1LCA2ODAuMDMwNF0sXHJcbiAgWzEzOTQuMzI2MiwgNjc1LjIwMTA1XSxcclxuICBbMTM5Ni44MjkxLCA2NzEuMjgyXSxcclxuICBbMTQwMC42NDM4LCA2NzUuNzAxMV0sXHJcbiAgWzE0MDYuMjM3OCwgNjc1Ljg3MzldLFxyXG4gIFsxNDA0Ljc5MDIsIDY3MS45NzEwN10sXHJcbiAgWzE0MDcuNjUxNCwgNjY4LjU4Nzk1XSxcclxuICBbMTQxMC42MTEzLCA2NzIuMDExODRdLFxyXG4gIFsxNDExLjM5OTksIDY3Ni4wOTU2XSxcclxuICBbMTQxNS4zMDU1LCA2NzUuMjMwNl0sXHJcbiAgWzE0MTkuMDY2OSwgNjc2LjEyOTRdLFxyXG4gIFsxNDIyLjIyMiwgNjc3Ljg0NDM2XSxcclxuICBbMTQyNS4zOTUzLCA2NzkuNDUwNDRdLFxyXG4gIFsxNDI4Ljk0NiwgNjgwLjE5OTFdLFxyXG4gIFsxNDMyLjMwOTYsIDY4MC4wOTU4XSxcclxuICBbMTQzNS41ODU4LCA2ODEuMDU2N10sXHJcbiAgWzE0MzguMjM5NywgNjgyLjU1MjRdLFxyXG4gIFsxNDQxLjgzNjQsIDY4MS4xODQxXSxcclxuICBbMTQ0My45NTUzLCA2ODQuNDc5NF0sXHJcbiAgWzE0NDAuMjA3OCwgNjg2LjAwNTVdLFxyXG4gIFsxNDMzLjQ4MDUsIDY5MC43MTg3NV0sXHJcbiAgWzE0MzYuMDU2MiwgNjk0LjE4Ml0sXHJcbiAgWzE0MzcuNDE2NSwgNjk4LjgzMDU3XSxcclxuICBbMTQ0MC45ODQ5LCA2OTQuNjI0NV0sXHJcbiAgWzE0NDUuMTY1OSwgNjk0LjgyMDI1XSxcclxuICBbMTQ0OS40OTI0LCA2OTMuODM4OF0sXHJcbiAgWzE0NTEuMDAwNywgNjg3LjUwMzJdLFxyXG4gIFsxNDU0LjczODMsIDY4Ny4xOTMzNl0sXHJcbiAgWzE0NTIuNzc0NywgNjkxLjA0OTJdLFxyXG4gIFsxNDQ4LjIyOTUsIDY5MC43NDY2XSxcclxuICBbMTQ1NC4wNDY2LCA2OTUuMjQwN10sXHJcbiAgWzE0NTcuMTkyLCA2OTEuNzc4NTZdLFxyXG4gIFsxNDYxLjgyNjIsIDY5NC43MDE1NF0sXHJcbiAgWzE0NTguMDQyNiwgNjk3LjE2ODRdLFxyXG4gIFsxNDQ5LjY3OTQsIDY5Ny4zOTAxXSxcclxuICBbMTQ0Ny4yNTY2LCA3MDEuMjI4OTRdLFxyXG4gIFsxNDUyLjc2ODgsIDcwMC43ODExXSxcclxuICBbMTQ1Ny4xNTQ3LCA3MDIuMzA3MjVdLFxyXG4gIFsxNDYyLjUzODEsIDcwMC43MTQzNl0sXHJcbiAgWzE0NjcuMDc5NiwgNjk4LjgwMjFdLFxyXG4gIFsxNDY3LjY2NiwgNzA0LjM3NTI0XSxcclxuICBbMTQ4NS40MzEsIDcxMS4wMjMxM10sXHJcbiAgWzE0ODkuMDE5OCwgNzE0LjU0NDA3XSxcclxuICBbMTQ5OC42MTU3LCA3MTkuNzI3OTddLFxyXG4gIFsxNDk1LjA1NiwgNzEzLjQ2NTMzXSxcclxuICBbMTUwOC4yMTM0LCA2OTYuNDgxOTNdLFxyXG4gIFsxNTEyLjczNDQsIDY5Mi40MDI2XSxcclxuICBbMTUxNC44NTMsIDY5OC45NTQ2XSxcclxuICBbMTUxOC43NzI1LCA2OTMuOTM3NF0sXHJcbiAgWzE1MjIuNDAxMiwgNzAwLjExMzVdLFxyXG4gIFsxNTI4LjMwMjUsIDY5Ny4zNjcxXSxcclxuICBbMTUzMS4yMTQ2LCA3MDEuMjM0NzRdLFxyXG4gIFsxNTMzLjY5ODUsIDY5NS45NDI4XSxcclxuICBbMTUzOC43Njc4LCA2OTYuNzAyXSxcclxuICBbMTUzNi42MzYyLCA3MDAuNzYwNzRdLFxyXG4gIFsxNTQxLjM5ODQsIDcwMy4xMDEzXSxcclxuICBbMTU0Mi41OTQyLCA2OTQuNzc1OV0sXHJcbiAgWzE1NDMuMjEwNCwgNjkxLjE2NTY1XSxcclxuICBbMTU0MS43ODcsIDY4Ni44Njk1XSxcclxuICBbMTUzNy4zNDE2LCA2ODUuODYzNDZdLFxyXG4gIFsxNTQwLjM2OTEsIDY4MS44NzczXSxcclxuICBbMTUzOS4zODY0LCA2NzcuNDM1XSxcclxuICBbMTUzOC4wOTYyLCA2NzIuOTkwNl0sXHJcbiAgWzE1MzYuODU2NywgNjY4LjM3NDc2XSxcclxuICBbMTUzMS45ODM0LCA2NjkuNjg0N10sXHJcbiAgWzE1MzMuNzkyNiwgNjc1LjY1MjldLFxyXG4gIFsxNTM0LjYzNjQsIDY4MC45MDE3M10sXHJcbiAgWzE1MjkuMTk5NywgNjc5LjkzMjc0XSxcclxuICBbMTUyOS4wMzA4LCA2NzUuMTgzNF0sXHJcbiAgWzE1MjUuOTg0NywgNjcyLjMzODhdLFxyXG4gIFsxNTI3LjAxMTUsIDY2Ny42OTExNl0sXHJcbiAgWzE1MjkuMTAxMywgNjYzLjA1MTZdLFxyXG4gIFsxNTI3Ljk1OCwgNjU3LjM0MTVdLFxyXG4gIFsxNTI5LjM3NCwgNjUxLjgyMzY3XSxcclxuICBbMTUzMS45MzE5LCA2NDcuMTgyMDddLFxyXG4gIFsxNTM0Ljc3MywgNjUxLjQyMDZdLFxyXG4gIFsxNTMyLjc0MDcsIDY1Ny4zNTU0XSxcclxuICBbMTUzNC45OTA1LCA2NjMuMDExNF0sXHJcbiAgWzE1NDEuMDIyNSwgNjY1LjA0MjM2XSxcclxuICBbMTU0MC45Nzg5LCA2NjAuMDMyODRdLFxyXG4gIFsxNTM3LjM5OTksIDY1Ni4zODExXSxcclxuICBbMTU0MC45MTUsIDY1Mi41MzM0NV0sXHJcbiAgWzE1MzkuNDMzNiwgNjQ4LjQ5NzhdLFxyXG4gIFsxNTM2Ljc4NTksIDY0NS4yMjYyXSxcclxuICBbMTUzMy44Mzc0LCA2NDIuMzExMl0sXHJcbiAgWzE1MzguNzMwNiwgNjM0LjUyMTJdLFxyXG4gIFsxNTM3LjEyOTYsIDYyNS4zOTc1XSxcclxuICBbMTUzNS4zMjMxLCA2MjAuMjUxNjVdLFxyXG4gIFsxNTMxLjc4OCwgNjE3Ljk0ODM2XSxcclxuICBbMTUyNy4xNjIxLCA2MTkuODQzMTRdLFxyXG4gIFsxNTMxLjA2NTksIDYyMy4wNzc1XSxcclxuICBbMTUyNy43NzksIDYyNS43NjczM10sXHJcbiAgWzE1MzIuMjkwOSwgNjI3LjU0Mjg1XSxcclxuICBbMTUzNi4wNDIsIDYzMC40NzI0XSxcclxuICBbMTUzMS4zNzgyLCA2MzIuNjEyMV0sXHJcbiAgWzE1MjguNzAwNiwgNjI5LjcxNTc2XSxcclxuICBbMTUyNC45MzgxLCA2MjkuODc2Ml0sXHJcbiAgWzE1MjMuMzg4MiwgNjI2LjUzNjI1XSxcclxuICBbMTUyNS4yODY2LCA2MjIuODMxMl0sXHJcbiAgWzE1MjMuNTgwNiwgNjE0LjkwMV0sXHJcbiAgWzE1MjIuOTU2OCwgNjA5LjE0MDFdLFxyXG4gIFsxNTI2LjYzMDksIDYxMS41MzQ2XSxcclxuICBbMTUxNy45MDcxLCA2MTAuNzI3NjZdLFxyXG4gIFsxNTE2LjM1MzMsIDYwMS45NTIyXSxcclxuICBbMTUxNS41NTU3LCA1OTcuODg4OV0sXHJcbiAgWzE1MTAuMTQ0OCwgNTk3LjAyNDY2XSxcclxuICBbMTUwNC4xODg0LCA1OTguMDYyNzRdLFxyXG4gIFsxNTA2LjA4MDgsIDU5My4wNTE0XSxcclxuICBbMTUxMy45NDE0LCA1OTMuOTA0OV0sXHJcbiAgWzE1MTcuMTMwNywgNTkwLjc5NDNdLFxyXG4gIFsxNTEwLjY2MjEsIDU5MC43MzMwM10sXHJcbiAgWzE1MDUuODcxNiwgNTg3LjM0NTJdLFxyXG4gIFsxNTEzLjMwNjgsIDU4MC4yODczXSxcclxuICBbMTUyMS41MjM5LCA1ODYuODQ2Nl0sXHJcbiAgWzE1MjUuMjI1MywgNTg5LjQ5MDg0XSxcclxuICBbMTUyOC4wMTMyLCA1ODYuNzE3N10sXHJcbiAgWzE1MzEuODY3OCwgNTg3LjEyMjc0XSxcclxuICBbMTUzNS45NDM4LCA1ODcuNDAwNjNdLFxyXG4gIFsxNTMzLjU5MjQsIDU4My4wNDE1XSxcclxuICBbMTUzNy43Njk5LCA1ODMuMjUxM10sXHJcbiAgWzE1MjkuMzc1NSwgNTgyLjM1MjA1XSxcclxuICBbMTUyNS42MTE5LCA1NzguNTExNF0sXHJcbiAgWzE1MjQuNDgsIDU4My4wMzM0NV0sXHJcbiAgWzE1MTkuNjUwNiwgNTgxLjA2MDJdLFxyXG4gIFsxNTE3LjYzMTIsIDU3Ni44Nzc2XSxcclxuICBbMTUxNi41NzY5LCA1ODUuNDI0Nl0sXHJcbiAgWzE1MTEuNDAzNiwgNTg1LjU1MDldLFxyXG4gIFsxNTA3LjIxMzEsIDU4MS40OTc0XSxcclxuICBbMTUwNC4xNDk3LCA1NzcuMjIyNl0sXHJcbiAgWzE1MDEuODQxNiwgNTcyLjY4Nzc0XSxcclxuICBbMTQ5NS44NzQ1LCA1NzAuNTU2OV0sXHJcbiAgWzE0OTYuNzM5OSwgNTY1LjI3NTYzXSxcclxuICBbMTUwMC4yMzYzLCA1NjIuMzkzNTVdLFxyXG4gIFsxNTA0LjkwMTQsIDU2My40Mzc3XSxcclxuICBbMTUwOC41MjA4LCA1NjAuMjE0ODRdLFxyXG4gIFsxNTA5LjYwMTgsIDU2NC42Mzk0XSxcclxuICBbMTUxMS4wNzMsIDU2OS44MDg2XSxcclxuICBbMTUxNS45MzMsIDU2OS41OTY3XSxcclxuICBbMTUxMy43OTgxLCA1NjUuOTg4NjVdLFxyXG4gIFsxNTE3Ljc4NiwgNTY0LjIwNTFdLFxyXG4gIFsxNTE3LjI1MjIsIDU1OS43NTFdLFxyXG4gIFsxNTEzLjQwNSwgNTYxLjc0NjJdLFxyXG4gIFsxNTEzLjM1NCwgNTU3LjU4MzldLFxyXG4gIFsxNTA5LjY1NjUsIDU1NS44NjkyNl0sXHJcbiAgWzE1MDcuNzc1MSwgNTUyLjA0MzMzXSxcclxuICBbMTUwNS4zMDEsIDU1Ny4xODEzXSxcclxuICBbMTUwMS4yNjA3LCA1NTguMjkzOF0sXHJcbiAgWzE1MDMuNjU5MiwgNTUyLjYxNV0sXHJcbiAgWzE1MDYuNTk0LCA1NDcuNDI3NV0sXHJcbiAgWzE1MTEuMDY5MywgNTQ4LjcxNzldLFxyXG4gIFsxNTEyLjc0NjUsIDU1Mi40NDMxXSxcclxuICBbMTUxNi4zODI2LCA1NTQuMjA0NDddLFxyXG4gIFsxNTE5LjMwODIsIDU1Ni4xNzc1NV0sXHJcbiAgWzE1MjIuOTUyNCwgNTU2LjAwMjNdLFxyXG4gIFsxNTI2LjA0OCwgNTUyLjY4NzZdLFxyXG4gIFsxNTI5LjAxMTUsIDU0OS4wMzQ1NV0sXHJcbiAgWzE1MzIuNzc5MywgNTQ3LjQ1ODg2XSxcclxuICBbMTU0MC4yOTUzLCA1NTAuMTgwOV0sXHJcbiAgWzE1MzYuMTQ0OCwgNTUwLjY2NDM3XSxcclxuICBbMTUzNi43NDM1LCA1NTQuODg1MTNdLFxyXG4gIFsxNTMyLjI0NDMsIDU1Mi42ODQ2M10sXHJcbiAgWzE1MjkuMTgxNCwgNTU1LjY3NjhdLFxyXG4gIFsxNTMyLjY0MTEsIDU1Ny42NzYzXSxcclxuICBbMTUzNi4yOTIsIDU1OS41ODUxNF0sXHJcbiAgWzE1NDAuMTYyMSwgNTU4LjQ2MzI2XSxcclxuICBbMTU0MS4wODI5LCA1NTQuNzkxNTZdLFxyXG4gIFsxNTQzLjkyODIsIDU1Mi42MzA5XSxcclxuICBbMTU0NS44ODg4LCA1NDkuODUyNjZdLFxyXG4gIFsxNTQzLjQyNjMsIDU0Ny4xMzYzNV0sXHJcbiAgWzE1NDAuNDIzOCwgNTQ0LjkwMzddLFxyXG4gIFsxNTM3LjA3MDgsIDU0Ni4zMzM1XSxcclxuICBbMTUzNC42ODk3LCA1NDIuNzA2ODVdLFxyXG4gIFsxNTMwLjQ2MDksIDU0My4wNTA2Nl0sXHJcbiAgWzE1MjYuNjUxNSwgNTQ0LjE5NjY2XSxcclxuICBbMTUyMi43NTI5LCA1NDEuODMwNTddLFxyXG4gIFsxNTIwLjU1OTYsIDU0Ni40MTY2XSxcclxuICBbMTUyNC42MTczLCA1NDguMTkwNTVdLFxyXG4gIFsxNTIxLjI2NjUsIDU1MS42NzI2XSxcclxuICBbMTUxNy4xMDQ0LCA1NDkuOTk5Ml0sXHJcbiAgWzE1MTUuNDM3LCA1NDYuMzQyOTZdLFxyXG4gIFsxNTExLjgyNSwgNTQ0LjQ5NjM0XSxcclxuICBbMTUxMi43NjQsIDU0MC4wNTkyXSxcclxuICBbMTUxNS42MTM1LCA1MzYuOTU0Nl0sXHJcbiAgWzE1MTcuMzU0OSwgNTMyLjI3OTRdLFxyXG4gIFsxNTE3LjY1OCwgNTQyLjAxODJdLFxyXG4gIFsxNTIwLjA0ODYsIDUzNi44MTg0XSxcclxuICBbMTUyMy44MzczLCA1MzYuMzM4NF0sXHJcbiAgWzE1MjcuMzc3OCwgNTM4LjQyXSxcclxuICBbMTUzMS4yNzY3LCA1MzguMDU4Ml0sXHJcbiAgWzE1MzUuMTAwMiwgNTM3Ljg2MTldLFxyXG4gIFsxNTM4LjA0NTUsIDUzNC45OTkxNV0sXHJcbiAgWzE1MzguODg5OCwgNTQwLjQ5NjQ2XSxcclxuICBbMTU0My4zNTg4LCA1NDEuOTQ4Nl0sXHJcbiAgWzE1NDcuMzIsIDU0MC41MzE1Nl0sXHJcbiAgWzE1NDIuODA1OSwgNTM3LjQ0OV0sXHJcbiAgWzE1NDIuNzMsIDUzMi41ODQ4NF0sXHJcbiAgWzE1NDIuMzMwMSwgNTI3Ljg4MTA0XSxcclxuICBbMTU0My4xOTk2LCA1MjMuMTY3NV0sXHJcbiAgWzE1NDcuMDEyMiwgNTI1LjA3NTg3XSxcclxuICBbMTU0Ni44MDI3LCA1MjkuODM1N10sXHJcbiAgWzE1NTAuNjEyLCA1MzEuNjk3MjddLFxyXG4gIFsxNTUxLjU2NiwgNTI3LjM4OThdLFxyXG4gIFsxNTUzLjQwMTYsIDUxNy44NDk0XSxcclxuICBbMTU1Mi41OTI1LCA1MTMuMTI1MjRdLFxyXG4gIFsxNTQ4Ljc3NTEsIDUxMC44NzA1NF0sXHJcbiAgWzE1NDQuOTU2MywgNTA4LjcxNTldLFxyXG4gIFsxNTQ4LjIwMDYsIDUwNi4wMTg3NF0sXHJcbiAgWzE1NTEuODk0MywgNTA1LjEyOTk3XSxcclxuICBbMTU1NC4wMzQzLCA1MDEuODQ1NF0sXHJcbiAgWzE1NTguMDc1OSwgNTAwLjgyNTI2XSxcclxuICBbMTU1NS42Nzc0LCA0OTcuNDYzNTZdLFxyXG4gIFsxNTUxLjMyMywgNDk3Ljc3NTAyXSxcclxuICBbMTU0OC44MTc5LCA1MDAuNjEwMDhdLFxyXG4gIFsxNTQ0LjkxNjMsIDUwMS42MzI5M10sXHJcbiAgWzE1NDMuMzYwNiwgNTA1LjEzMDg2XSxcclxuICBbMTUzOS41NDA1LCA1MDQuMTYyNzJdLFxyXG4gIFsxNTQxLjU2NCwgNDk4LjY3MjU1XSxcclxuICBbMTU0NS42MjY1LCA0OTYuOTA5XSxcclxuICBbMTU0OC44OCwgNDkzLjk4MTJdLFxyXG4gIFsxNTQ0LjgyMjgsIDQ5Mi41ODU3XSxcclxuICBbMTU0MS4wNDI2LCA0OTMuNzQwMTddLFxyXG4gIFsxNTM3LjY0MTEsIDQ5Ni4zNjE5NF0sXHJcbiAgWzE1MzYuNDM5NywgNDkyLjAyNDZdLFxyXG4gIFsxNTM5LjQ2NTEsIDQ4OS4yNDc2NV0sXHJcbiAgWzE1MzIuOTEzOCwgNDg5Ljk5NzY1XSxcclxuICBbMTUzMS4wNjYyLCA0ODYuNTAyNDRdLFxyXG4gIFsxNTMyLjQyMTgsIDQ4My4wODQ3XSxcclxuICBbMTUzNi4zMzE4LCA0ODEuNjE4Nl0sXHJcbiAgWzE1MzkuODkzMiwgNDc5LjUwMjE3XSxcclxuICBbMTU0NC4wMzkzLCA0ODAuNzU3MDJdLFxyXG4gIFsxNTM2LjQ1MDQsIDQ3Ni43NDA0NV0sXHJcbiAgWzE1MzkuNzk1NCwgNDc0LjY2NTM0XSxcclxuICBbMTU0My4xODMyLCA0NzYuNzM3ODhdLFxyXG4gIFsxNTQ2LjY2NCwgNDc1LjYyMDgyXSxcclxuICBbMTU0OS45NTg3LCA0NzMuODQ0Ml0sXHJcbiAgWzE1NTMuMzkwOSwgNDcyLjM3MjkyXSxcclxuICBbMTU1NS44OTcyLCA0NzUuMDE2MV0sXHJcbiAgWzE1NTkuMzI5OCwgNDc0LjA0MDIyXSxcclxuICBbMTU2Mi4yOTA1LCA0NzYuNzg4MDZdLFxyXG4gIFsxNTU5LjIwOSwgNDc5LjE5MTk2XSxcclxuICBbMTU1NS41NzY0LCA0NzkuMDg0N10sXHJcbiAgWzE1NTIuMDUxLCA0NzcuMjI4NjRdLFxyXG4gIFsxNTQ4LjQ2OTcsIDQ3OS4xMzI1N10sXHJcbiAgWzE1NTIuNTA1LCA0ODEuOTcwMl0sXHJcbiAgWzE1NTcuNDc0LCA0ODMuMzI1NF0sXHJcbiAgWzE1NjIuNDM3NCwgNDgxLjYwOTU2XSxcclxuICBbMTU2NS40NTM5LCA0NzkuNzk4MDddLFxyXG4gIFsxNTY2LjU0NDYsIDQ3NS4zNDI2NV0sXHJcbiAgWzE1NjkuMDU0MywgNDc4LjY5NDQzXSxcclxuICBbMTU3Mi42MzU5LCA0NzkuMzE2OV0sXHJcbiAgWzE1NzUuMTY1MywgNDgyLjY1OTY3XSxcclxuICBbMTU3My40NjI0LCA0ODUuODU3ODVdLFxyXG4gIFsxNTY5LjM3NzQsIDQ4Ni45MzM2XSxcclxuICBbMTU2Ny45MDE2LCA0OTAuODIzNThdLFxyXG4gIFsxNTY0LjMxNjksIDQ5My42NTM3XSxcclxuICBbMTU2MC42OTY1LCA0OTEuODk0MTddLFxyXG4gIFsxNTYzLjg0MzgsIDQ4OS42MDAwN10sXHJcbiAgWzE1NjUuNjY0MSwgNDg2LjA1MzddLFxyXG4gIFsxNTY4Ljk3MzgsIDQ4Mi45Mzg0NV0sXHJcbiAgWzE1NjIuMjg1OCwgNDg0LjgzMzVdLFxyXG4gIFsxNTU5LjkzMiwgNDg3LjI5MjQ1XSxcclxuICBbMTU1Ny4xMTg1LCA0ODkuMjAwNjVdLFxyXG4gIFsxNTU0LjE0NTgsIDQ4Ni4xMjE5NV0sXHJcbiAgWzE1NDkuNzkyMiwgNDg1LjkyNDg3XSxcclxuICBbMTU0Ny45NTcsIDQ4Mi44MTk1NV0sXHJcbiAgWzE1NDQuNjMxMSwgNDg1LjAxMjg4XSxcclxuICBbMTU0MC4xOTQ2LCA0ODQuMjAwOTNdLFxyXG4gIFsxNTM2LjA3MiwgNDg2LjUwMDQzXSxcclxuICBbMTU0Mi44OTQ4LCA0ODguNTExODRdLFxyXG4gIFsxNTQ2Ljg1OTksIDQ4OS4wNTY3XSxcclxuICBbMTU1MC41MDA3LCA0ODkuODU4MV0sXHJcbiAgWzE1NTMuNzYyMiwgNDkwLjUzMTI1XSxcclxuICBbMTU1Mi45NDY3LCA0OTQuMTY0NTVdLFxyXG4gIFsxNTU2Ljg5NDUsIDQ5My4yNzg5M10sXHJcbiAgWzE1NTkuODMwMSwgNDk1Ljg1MDJdLFxyXG4gIFsxNTYyLjA0MjIsIDQ5OC44MTQzXSxcclxuICBbMTU2NS4xMjkzLCA0OTcuMjYwNjhdLFxyXG4gIFsxNTY4LjM5NDUsIDQ5NC45NTQxNl0sXHJcbiAgWzE1NzEuOTMzMSwgNDkzLjMzMTY3XSxcclxuICBbMTU3Mi4yODY5LCA0ODkuNzc1OTRdLFxyXG4gIFsxNTc2LjQ2MzcsIDQ4OS43NTU3NF0sXHJcbiAgWzE1ODAuMjE4LCA0OTIuMjQ5NjNdLFxyXG4gIFsxNTc5LjAxMTIsIDQ4Ni4yNzgxN10sXHJcbiAgWzE1ODcuNTQ3NCwgNDg2LjU5NzAyXSxcclxuICBbMTU5MS4xOTk3LCA0ODQuNTM1MjVdLFxyXG4gIFsxNTkyLjkzMDksIDQ4MC45MTg3XSxcclxuICBbMTU5MS4wOTY5LCA0NzcuNzYzNF0sXHJcbiAgWzE1ODcuMzU2MywgNDc2LjkyMDk2XSxcclxuICBbMTU4NC4zNjk2LCA0NzQuMDAzNDhdLFxyXG4gIFsxNTgzLjc2MjIsIDQ3OS4zMTgyNF0sXHJcbiAgWzE1ODcuODU2OCwgNDgxLjYyMTA2XSxcclxuICBbMTU4My40MjA0LCA0ODQuMDY3MV0sXHJcbiAgWzE1NzkuNjE3OSwgNDgxLjQ0NTg2XSxcclxuICBbMTU3Ni44NDQ2LCA0NzguMTEzMV0sXHJcbiAgWzE1ODAuODg3MiwgNDc2LjI0OTZdLFxyXG4gIFsxNTc0LjAyODksIDQ3NC41OTA4XSxcclxuICBbMTU3Ny44MTE2LCA0NzMuNjM2MV0sXHJcbiAgWzE1ODAuODgzOSwgNDcwLjc2NTk2XSxcclxuICBbMTU4NC44MzAxLCA0NjkuMjc4MzJdLFxyXG4gIFsxNTg3Ljk2NzgsIDQ3MS43MTM0N10sXHJcbiAgWzE1OTAuODU2NCwgNDczLjkxNTUzXSxcclxuICBbMTU5Mi41OTM1LCA0NjkuOTk0OTZdLFxyXG4gIFsxNTk0Ljk3MzgsIDQ3My4xOTM5XSxcclxuICBbMTU5NC44ODg1LCA0NzYuOTA5NV0sXHJcbiAgWzE1OTcuNTE5OCwgNDc5LjYxMTAyXSxcclxuICBbMTU5Ni44OTQ1LCA0ODIuNTY3ODddLFxyXG4gIFsxNTk1LjI3NDMsIDQ4NS4zMjUzXSxcclxuICBbMTU5Ny43NTY4LCA0ODguMjM0NDRdLFxyXG4gIFsxNTk5LjE0MzYsIDQ5Mi4zNDI5Nl0sXHJcbiAgWzE2MDAuMzg5NCwgNDk2LjQ2MTZdLFxyXG4gIFsxNjA0LjQ0OSwgNDkzLjEwMzczXSxcclxuICBbMTYwMi4zNTY4LCA0ODguMzQxNDNdLFxyXG4gIFsxNjA2Ljg3OTQsIDQ4OC45MDIzNF0sXHJcbiAgWzE2MDIuOTUxLCA0NzUuMzI5Nl0sXHJcbiAgWzE1OTkuMDA5NSwgNDc2LjQ1MzU4XSxcclxuICBbMTU5OS4xOTQ4LCA0NzMuMDY4Ml0sXHJcbiAgWzE1OTcuMjg2OSwgNDY5Ljc4OTY0XSxcclxuICBbMTU5OC41MDMzLCA0NjYuMjk2ODhdLFxyXG4gIFsxNjAxLjk2NDUsIDQ3MC4yNDMzOF0sXHJcbiAgWzE2MDUuODc3MiwgNDcyLjgwNDNdLFxyXG4gIFsxNjA4LjgyODEsIDQ3MC4yNzVdLFxyXG4gIFsxNjEyLjc4NzcsIDQ3MC4zMzE1NF0sXHJcbiAgWzE2MTMuMDg4LCA0NjUuMzYyNV0sXHJcbiAgWzE2MTYuNTU5NywgNDY0LjM2Njk0XSxcclxuICBbMTYxOS43MTc5LCA0NjYuMzkwNl0sXHJcbiAgWzE2MjMuNzkzMSwgNDY2LjQwNTddLFxyXG4gIFsxNjI4LjM4OTksIDQ2Ni44ODY3Ml0sXHJcbiAgWzE2MjkuNTY5MywgNDYzLjQwMjI4XSxcclxuICBbMTYzOS45NTI0LCA0NjEuNDc3NDhdLFxyXG4gIFsxNjQ0LjUyNSwgNDYzLjY5MDY3XSxcclxuICBbMTY0Ny4yMjc1LCA0NjYuOTU5ODRdLFxyXG4gIFsxNjQ2LjcwNTgsIDQ3MS4xOTU1XSxcclxuICBbMTY0Mi43NTMyLCA0NzEuODI4MzRdLFxyXG4gIFsxNjQzLjQwNDUsIDQ2OC4xMzY1N10sXHJcbiAgWzE2NDAuNzg5OCwgNDY1LjM5MzQzXSxcclxuICBbMTYzOS4wODgzLCA0NjkuNDMzNTZdLFxyXG4gIFsxNjM2LjY1NjUsIDQ2NS4yMjEyNV0sXHJcbiAgWzE2MzUuMDU1OCwgNDY4LjY4NzkzXSxcclxuICBbMTYzMi4yODEsIDQ3NC4wNTI5Ml0sXHJcbiAgWzE2MzEuNzM3NSwgNDc3LjYxMjA2XSxcclxuICBbMTYyOC4yMzA4LCA0NzYuMjU2OTZdLFxyXG4gIFsxNjI0LjYwMzMsIDQ3NS4wNjI0NF0sXHJcbiAgWzE2MjAuNDcxLCA0NzcuMzk2MzZdLFxyXG4gIFsxNjIwLjc2NDQsIDQ3My41ODIwM10sXHJcbiAgWzE2MjMuODcyNywgNDcxLjIxNDIzXSxcclxuICBbMTYyMC4yMzYsIDQ2OS45MzUzXSxcclxuICBbMTYxNi4yNzE5LCA0NjkuMDc0NTVdLFxyXG4gIFsxNjE2LjUwNzYsIDQ3My44NDQ0OF0sXHJcbiAgWzE2MTAuOTg0NCwgNDc0LjI0NjUyXSxcclxuICBbMTYxMy43NDM5LCA0NzcuNDQwM10sXHJcbiAgWzE2MTcuMzI1NCwgNDc5LjcyMzFdLFxyXG4gIFsxNjE4LjE4MTQsIDQ4NC4xNjg0XSxcclxuICBbMTYxNi43NTEyLCA0ODcuOTU0OTZdLFxyXG4gIFsxNjIxLjk1NTcsIDQ4Ny42MjkxXSxcclxuICBbMTYyNi41MDIsIDQ4Ny44OTczXSxcclxuICBbMTYyNS41NzI0LCA0ODQuMDI4NzVdLFxyXG4gIFsxNjIxLjc1ODIsIDQ4Mi40NTUwNV0sXHJcbiAgWzE2MjQuMzIyMywgNDc5LjE5MDI1XSxcclxuICBbMTYyOC4xNjgsIDQ4MC4zODM1XSxcclxuICBbMTYyOS44NTk3LCA0ODMuOTQ1XSxcclxuICBbMTYzNS45ODM4LCA0ODguMDQ4MjhdLFxyXG4gIFsxNjM2LjM5NiwgNDkyLjE4ODQyXSxcclxuICBbMTYzOS42NzAyLCA0OTAuNDY5Ml0sXHJcbiAgWzE2NDEuMDA1NiwgNDkzLjk0NzQ4XSxcclxuICBbMTY0My45OTM0LCA0OTEuNTI5MDJdLFxyXG4gIFsxNjQ2LjQzNTUsIDQ4Ny45ODYzM10sXHJcbiAgWzE2NDMuMDU4MSwgNDg4LjA0OTI2XSxcclxuICBbMTY0MC4xNjcsIDQ4Ni42MDE4XSxcclxuICBbMTYzNy44NjMsIDQ4NC4zMTU4Nl0sXHJcbiAgWzE2NDEuMjgyLCA0ODIuMTY0Nl0sXHJcbiAgWzE2NDAuNzIxNiwgNDc4LjMzNjAzXSxcclxuICBbMTY0Mi41MjU4LCA0NzUuMjg1MDNdLFxyXG4gIFsxNjQ1Ljg1OCwgNDc2LjA3MDg2XSxcclxuICBbMTY0OC45MzYzLCA0NzguNDA2OF0sXHJcbiAgWzE2NTEuNzkyNiwgNDgwLjc0NDc1XSxcclxuICBbMTY1NS43MjUsIDQ3OS4xODk1NF0sXHJcbiAgWzE2NTUuNTk2MywgNDc1LjM3ODVdLFxyXG4gIFsxNjUyLjE3ODgsIDQ3Ni4xOTYzNV0sXHJcbiAgWzE2NDkuNTM4MSwgNDczLjU2NDg4XSxcclxuICBbMTY1NC4xMDQsIDQ3MS42MzMwNl0sXHJcbiAgWzE2NTEuMDcyMywgNDY5LjI5NjQ4XSxcclxuICBbMTY1NC43NTQ0LCA0NjUuOTE1NjVdLFxyXG4gIFsxNjUwLjk3NDksIDQ2NS40MDMyNl0sXHJcbiAgWzE2NDguMzYzNSwgNDYyLjQ0NTg2XSxcclxuICBbMTY1Mi4yMzczLCA0NjEuNjA5MTNdLFxyXG4gIFsxNjU1LjkwMzYsIDQ2MS41NjkzXSxcclxuICBbMTY1OS4wOTE5LCA0NTkuOTg5MjZdLFxyXG4gIFsxNjYyLjU3NCwgNDYwLjU0NzZdLFxyXG4gIFsxNjYxLjU0MDQsIDQ1Ni4xODg2XSxcclxuICBbMTY1OC40NCwgNDUzLjIwMzY3XSxcclxuICBbMTY1Mi4yMjA3LCA0NTMuOTg1NF0sXHJcbiAgWzE2NTYuOTY2OCwgNDU2LjUyMjQ2XSxcclxuICBbMTY1NC44NTY0LCA0NTEuNjAzNzNdLFxyXG4gIFsxNjU3LjQ4NTEsIDQ0OC42NDMxNl0sXHJcbiAgWzE2NjIuNDgzOCwgNDQ2LjU2OTgyXSxcclxuICBbMTY2MS43NDgzLCA0NDEuNDYyNzRdLFxyXG4gIFsxNjY0LjE3NDgsIDQzNy4yODAxMl0sXHJcbiAgWzE2NjEuMTc3MiwgNDMwLjE2OTYyXSxcclxuICBbMTY2MC44NzU1LCA0MjUuMDY5NTVdLFxyXG4gIFsxNjU2LjY1MzYsIDQyMS42MzExXSxcclxuICBbMTY1MS43MjcsIDQxNy42Nzc2XSxcclxuICBbMTY0NS41NDkzLCA0MTcuNDQ3OTddLFxyXG4gIFsxNjQwLjkzOCwgNDEzLjk5NThdLFxyXG4gIFsxNjQxLjE3MiwgNDIwLjgwMzE2XSxcclxuICBbMTYzNS45MDE2LCA0MTkuNzUxMV0sXHJcbiAgWzE2MzcuMjU5LCA0MjUuMTEwNzhdLFxyXG4gIFsxNjQxLjE5MzYsIDQyOS4xNjYzNV0sXHJcbiAgWzE2NDUuOTE2MywgNDMwLjEwMjQyXSxcclxuICBbMTY0OS44ODE3LCA0MzIuMDkxNzRdLFxyXG4gIFsxNjUyLjgyNDMsIDQyNi43NjM5XSxcclxuICBbMTY0Ny41MTU1LCA0MjMuNTY2NjJdLFxyXG4gIFsxNjU2Ljk1OTIsIDQxMy41NDE0N10sXHJcbiAgWzE2NjIuNjY0OSwgNDE3LjUxOTEzXSxcclxuICBbMTY2My4wMzQ0LCA0MDkuNjMxODRdLFxyXG4gIFsxNjY3LjY2OSwgNDA1LjEzNzE1XSxcclxuICBbMTY3My40MDE5LCA0MDAuNDM0OTRdLFxyXG4gIFsxNjcwLjI2NTMsIDM5Ny42MzYwNV0sXHJcbiAgWzE2NzIuMTM2NywgMzkzLjE5MzU0XSxcclxuICBbMTY3NS42ODMzLCAzOTAuMjIzMzZdLFxyXG4gIFsxNjc5LjYwMDYsIDM4OS4wNDQ2NV0sXHJcbiAgWzE2NzYuMzYyOCwgMzk1LjgzNjY0XSxcclxuICBbMTY3OC4wMzQzLCA0MDAuODEzMDhdLFxyXG4gIFsxNjgxLjI4NzUsIDM5Ny45NDc4OF0sXHJcbiAgWzE2ODAuNTQ0MiwgMzkzLjYwNjRdLFxyXG4gIFsxNjg0LjcwMTgsIDM5My43MDkyM10sXHJcbiAgWzE2ODYuMDE0OSwgMzk3LjcwNzRdLFxyXG4gIFsxNjg4LjEwNjIsIDQwMS43MTcxNl0sXHJcbiAgWzE2OTIuNjQ5MywgNDAwLjI1NzNdLFxyXG4gIFsxNjkwLjczMzMsIDM5Ni43OTQ5OF0sXHJcbiAgWzE2ODkuNDkwNywgMzkzLjM2NzAzXSxcclxuICBbMTY4Ny4xODQ2LCAzOTAuNTk2OF0sXHJcbiAgWzE2ODMuNDMzNSwgMzg4Ljk2MDY2XSxcclxuICBbMTY4Ny4wNTA3LCAzODYuNzI3NTRdLFxyXG4gIFsxNjkxLjEzNiwgMzg4LjQ0OTU1XSxcclxuICBbMTY5NS4zMzEyLCAzODcuNDMwNDhdLFxyXG4gIFsxNjk0LjI1NywgMzkyLjM3MTFdLFxyXG4gIFsxNjk1LjkxNTgsIDM5Ni43MTE2NF0sXHJcbiAgWzE2ODguMjM3NCwgMzgzLjA1MDE0XSxcclxuICBbMTY4Ni41NTY0LCAzNzguMDk1MjhdLFxyXG4gIFsxNjkxLjIwNzgsIDM3Ni43MTYwNl0sXHJcbiAgWzE2OTEuMjAxMiwgMzcxLjk5NTA2XSxcclxuICBbMTY5Ni4wMzg4LCAzNzUuMDcxNzJdLFxyXG4gIFsxNjk5Ljc4NDksIDM3Ny44Mjg2N10sXHJcbiAgWzE2OTkuOTMwNywgMzg0LjAwMDk4XSxcclxuICBbMTY5OS44MjIzLCAzODkuMTQyNThdLFxyXG4gIFsxNjk5LjI5LCAzOTMuNzY1Ml0sXHJcbiAgWzE3MDUuMzkxNSwgMzg3LjAzNjQ0XSxcclxuICBbMTcwNC41MjY0LCAzOTEuODM5M10sXHJcbiAgWzE3MDQuNTc2LCAzOTcuMTE3NjVdLFxyXG4gIFsxNzAwLjQ5NDksIDM5OS42NDM4XSxcclxuICBbMTY5Ni45NTE0LCA0MDIuMzM5MTddLFxyXG4gIFsxNjkxLjg5NjUsIDQwNS4wNDkwNF0sXHJcbiAgWzE2OTAuNDg1LCA0MTIuNTQxNV0sXHJcbiAgWzE2ODQuMTk0NiwgNDExLjk5NzEzXSxcclxuICBbMTY4MC40Nzg1LCA0MDYuMzI5NTNdLFxyXG4gIFsxNjgzLjQ1MTQsIDQwMi4wNjI1Nl0sXHJcbiAgWzE2NzguMTU0NCwgNDExLjU3NjcyXSxcclxuICBbMTY3NS45Njg2LCA0MTYuNzU1MTNdLFxyXG4gIFsxNjc0LjMyMDksIDQwNi4zOTAyXSxcclxuICBbMTY3MC44NjM1LCA0MTEuMjc1ODhdLFxyXG4gIFsxNjY4Ljk0ODIsIDQxNy4xMDcxOF0sXHJcbiAgWzE2NjYuNTY2NCwgNDI1LjA0MTVdLFxyXG4gIFsxNjY2LjMzNjIsIDQzMi4zNjY1Ml0sXHJcbiAgWzE2NzAuNTU5MiwgNDI4LjgzOTY2XSxcclxuICBbMTY3NS4zOTc1LCA0MzAuNDE5NTZdLFxyXG4gIFsxNjgwLjQ0NTgsIDQyOS43NjM2N10sXHJcbiAgWzE2ODQuMDI3NSwgNDMzLjkxMTMyXSxcclxuICBbMTY4Mi40ODY2LCA0MzguMDA3NTRdLFxyXG4gIFsxNjc4LjM5MiwgNDM5LjQyNDldLFxyXG4gIFsxNjc3LjU1NzQsIDQzNS4xMDEwN10sXHJcbiAgWzE2NzEuOTAwMSwgNDM0LjQ5MTddLFxyXG4gIFsxNjY4LjgwMTEsIDQzOC43OTY1N10sXHJcbiAgWzE2NzMuNjk1NiwgNDM5Ljk2MzA3XSxcclxuICBbMTY3MS4xNTgyLCA0NDQuMDMwMTVdLFxyXG4gIFsxNjY2LjM2NSwgNDQzLjQwOTY0XSxcclxuICBbMTY2NS45MTIsIDQ0OS4zNjQzOF0sXHJcbiAgWzE2NjkuNzkwMywgNDQ4LjQwNjIyXSxcclxuICBbMTY2OS4zMDM3LCA0NTMuODUzNjRdLFxyXG4gIFsxNjczLjE3MjksIDQ1My4yMTU1NV0sXHJcbiAgWzE2NzQuNTgxNywgNDQ5LjQyMTU3XSxcclxuICBbMTY3NS41MjY2LCA0NDUuNzUzODVdLFxyXG4gIFsxNjc3Ljc5MTMsIDQ0My4xNjIwNV0sXHJcbiAgWzE2ODEuOTA3NywgNDQzLjE5NTldLFxyXG4gIFsxNjg1LjIxNTcsIDQ0MC45OTQ0OF0sXHJcbiAgWzE2ODcuODE4NSwgNDQzLjI4NjFdLFxyXG4gIFsxNjg5LjE5ODEsIDQ0Ny40NTM5Ml0sXHJcbiAgWzE2ODguMjQyOSwgNDM3LjI2Mjk0XSxcclxuICBbMTY5My4xNjYsIDQzMy41MTc4OF0sXHJcbiAgWzE2OTIuNjM3NiwgNDM4LjMzOTNdLFxyXG4gIFsxNjkxLjI0LCA0NDIuNTI1MzZdLFxyXG4gIFsxNjk1LjI2OTMsIDQ0Mi4wNTY0Nl0sXHJcbiAgWzE2OTkuMzQ2NywgNDQxLjYwNDVdLFxyXG4gIFsxNzAzLjI5MTEsIDQ0MS43OTMzM10sXHJcbiAgWzE3MDEuODU5NiwgNDM2LjQ4ODVdLFxyXG4gIFsxNjk3LjI5NDIsIDQzNy4xMDkzXSxcclxuICBbMTY5OC43NzgzLCA0MzEuNzE2XSxcclxuICBbMTcwMy45MjcsIDQyOS43MDM3NF0sXHJcbiAgWzE3MDUuNzMzMiwgNDMzLjY4MzQ3XSxcclxuICBbMTcxNC42MDE5LCA0MjkuODM0NDRdLFxyXG4gIFsxNzEwLjI0NiwgNDM0LjQxODMzXSxcclxuICBbMTcxMS4xOTM1LCA0MzguMzA5ODhdLFxyXG4gIFsxNzEyLjMwNjIsIDQ0MS44OTYzNl0sXHJcbiAgWzE3MTMuOTQ1NCwgNDQ1LjAzMjQ0XSxcclxuICBbMTcxNS4yMzM0LCA0NDguNTY1XSxcclxuICBbMTcxOS4wMjYxLCA0NDcuMTY1NzddLFxyXG4gIFsxNzIyLjY0NDIsIDQ0NC44NDk5OF0sXHJcbiAgWzE3MjIuNTc0MywgNDQwLjMxNzg3XSxcclxuICBbMTcyMC4wNjQ1LCA0MzYuMzU5M10sXHJcbiAgWzE3MTguMTMzMywgNDQyLjQ0OTY4XSxcclxuICBbMTcxNi4xMzEzLCA0MzguNzQ4NjZdLFxyXG4gIFsxNzE0Ljk3OSwgNDM0LjU1MjIyXSxcclxuICBbMTcxOS4yODEyLCA0MzEuMzQ1NThdLFxyXG4gIFsxNzIyLjM0NDUsIDQyOC4wNDgwM10sXHJcbiAgWzE3MjQuMjAwMiwgNDMzLjkyNDJdLFxyXG4gIFsxNzI2LjM3NjUsIDQzOC41MzIyM10sXHJcbiAgWzE3MzAuNjgxNCwgNDM5LjAwOTVdLFxyXG4gIFsxNzMyLjEwMjksIDQ0Mi4zNTY5M10sXHJcbiAgWzE3MzQuMjU0OSwgNDM2LjM5MDhdLFxyXG4gIFsxNzI5LjM4NDgsIDQzNC42NTEzN10sXHJcbiAgWzE3MjcuNjA3MywgNDMwLjE4ODA1XSxcclxuICBbMTczMi42NjcsIDQzMC45NDEyMl0sXHJcbiAgWzE3MzYuOTI2OCwgNDI5LjA0NjA4XSxcclxuICBbMTczNy4xMDMxLCA0MjQuNTk0OV0sXHJcbiAgWzE3MzMuODYwNywgNDIxLjEwODczXSxcclxuICBbMTczMS41OTQ3LCA0MjUuNTY0MzNdLFxyXG4gIFsxNzI2LjU0NDcsIDQyNS40OTk0XSxcclxuICBbMTcyNi41MiwgNDIwLjYzOTZdLFxyXG4gIFsxNzIwLjg0MTgsIDQyMi40Mzg0Ml0sXHJcbiAgWzE3MTYuMjQyOSwgNDI1LjIzMDY4XSxcclxuICBbMTcwOS42NDk3LCA0MjkuOTU2MTJdLFxyXG4gIFsxNzA2LjQyMTMsIDQzOC4wNjYyMl0sXHJcbiAgWzE3MDcuNTU4LCA0NDIuMTE0N10sXHJcbiAgWzE3MDguODM2OSwgNDQ1Ljc4NzU0XSxcclxuICBbMTcxMC44OTA2LCA0NDkuMDA5MDNdLFxyXG4gIFsxNzA5Ljk2MTMsIDQ1My4xMjI3N10sXHJcbiAgWzE3MTIuNTQ0NCwgNDU2LjI4ODFdLFxyXG4gIFsxNzE0LjM2OTgsIDQ1Mi40NDU1XSxcclxuICBbMTcxOC42Mjg0LCA0NTEuOTQ0MDNdLFxyXG4gIFsxNzIyLjYyMjcsIDQ1MC40NDc3XSxcclxuICBbMTcyNS45MzI5LCA0NDcuODYxN10sXHJcbiAgWzE3MjcuNTU0MiwgNDQzLjQ0NTVdLFxyXG4gIFsxNzMzLjIxOCwgNDQ1LjkxNDNdLFxyXG4gIFsxNzMwLjA1OTYsIDQ0OC40MTg1NV0sXHJcbiAgWzE3MzEuMjcwMywgNDUyLjU0OTY1XSxcclxuICBbMTczNS4wMzM2LCA0NTEuNzUxMzRdLFxyXG4gIFsxNzM2Ljk3NjMsIDQ0Ny41MjcwN10sXHJcbiAgWzE3NDAuNTY0NywgNDQzLjM5NThdLFxyXG4gIFsxNzM2LjI5OTMsIDQ0MS4zMTAwNl0sXHJcbiAgWzE3NDIuMTkwMiwgNDQ4LjQzNDMzXSxcclxuICBbMTczOS4xMTE4LCA0NTIuNjc0M10sXHJcbiAgWzE3NDMuNDkxOCwgNDUzLjYyNjldLFxyXG4gIFsxNzQ3LjEzMjEsIDQ1Ni45MjY5N10sXHJcbiAgWzE3NTAuODQzNiwgNDU2Ljg2Mjc2XSxcclxuICBbMTc0OC4zNjEsIDQ1MS4zODMwNl0sXHJcbiAgWzE3NDYuMTA5LCA0NDUuMDkxNzRdLFxyXG4gIFsxNzUzLjIzNTEsIDQzOS4xNzUwMl0sXHJcbiAgWzE3NDguNzg1OSwgNDQwLjcxNDk0XSxcclxuICBbMTc0NC4xNDk0LCA0MzguOTY5NDVdLFxyXG4gIFsxNzM5LjgwNjYsIDQzNy4zNjkyM10sXHJcbiAgWzE3MzcuNjYxNSwgNDMzLjUwMDNdLFxyXG4gIFsxNzQxLjM1MiwgNDMwLjk5MDhdLFxyXG4gIFsxNzQ0Ljc1OTYsIDQzMy41OTAzM10sXHJcbiAgWzE3NDkuMDIwOCwgNDM1LjE1ODg3XSxcclxuICBbMTc1My40MDY5LCA0MzMuOTU4OTJdLFxyXG4gIFsxNzU4LjEwMjIsIDQzNi42OTg1OF0sXHJcbiAgWzE3NTcuODI2MywgNDMxLjgxMzM1XSxcclxuICBbMTc2Mi43MTQyLCA0MzIuOTM4MDVdLFxyXG4gIFsxNzYzLjc1NzYsIDQzOC4wMzA2NF0sXHJcbiAgWzE3NjcuNTUyLCA0NDIuMDUxMjddLFxyXG4gIFsxNzY2LjUwOTIsIDQ0Ny43MzkyNl0sXHJcbiAgWzE3NjAuNzAxNSwgNDUyLjk1OTc4XSxcclxuICBbMTc2MC4wOTU3LCA0NDcuODE4N10sXHJcbiAgWzE3NjIuODAxOSwgNDQzLjY2MTc0XSxcclxuICBbMTc1OC41NTA4LCA0NDEuNDY3NjJdLFxyXG4gIFsxNzU0Ljc5MDgsIDQ0NC40ODEwMl0sXHJcbiAgWzE3NTAuOTIzOCwgNDQ2Ljg3MTQ2XSxcclxuICBbMTc1NC45MDYyLCA0NTAuNDIxMDhdLFxyXG4gIFsxNzY0Ljk4NjYsIDQ1Ni45NjgyM10sXHJcbiAgWzE3NjQuMjgyNSwgNDYxLjQ1NjNdLFxyXG4gIFsxNzU5LjQ0NiwgNDU4LjM2N10sXHJcbiAgWzE3NTUuMjIzOCwgNDU1LjA2NDgyXSxcclxuICBbMTc1My45ODc0LCA0NTkuOTMyMDddLFxyXG4gIFsxNzU2LjgwNzEsIDQ2Mi44NzQyXSxcclxuICBbMTc2MC4yNjAzLCA0NjMuNzg0M10sXHJcbiAgWzE3NjMuNDMwNywgNDY2LjY2MzE4XSxcclxuICBbMTc2Mi42ODM2LCA0NzEuMDc0NDZdLFxyXG4gIFsxNzYyLjUzNzQsIDQ3NS4zMTgwOF0sXHJcbiAgWzE3NjYuNDI1MywgNDc4LjA4MDE0XSxcclxuICBbMTc3MS42OTk1LCA0NzkuODA0ODddLFxyXG4gIFsxNzcyLjk0NjMsIDQ4NS4yMTc4Nl0sXHJcbiAgWzE3NjUuMjQ2MywgNDg0LjQ3Mzk3XSxcclxuICBbMTc1OS4yMTEyLCA0ODAuNTM0Nl0sXHJcbiAgWzE3NTYuOTIyMiwgNDc0LjAzNzE3XSxcclxuICBbMTc1OC4xMTEyLCA0NjguNjIxOTJdLFxyXG4gIFsxNzUzLjc4MywgNDY1LjQzMzY1XSxcclxuICBbMTc1MC4yMjYyLCA0NjIuODYzODZdLFxyXG4gIFsxNzQ2LjIzMjUsIDQ2Mi45NjddLFxyXG4gIFsxNzQzLjYwMiwgNDU5LjE4NDAyXSxcclxuICBbMTczOS41MzYsIDQ1Ny43NjM1NV0sXHJcbiAgWzE3MzUuMTMyMiwgNDU2LjY0MTU0XSxcclxuICBbMTcyOS45NDU4LCA0NTYuNjY2ODRdLFxyXG4gIFsxNzI1LjQ5NDQsIDQ1OC4xMTU1NF0sXHJcbiAgWzE3MjYuNjE1NSwgNDUyLjk4MzZdLFxyXG4gIFsxNzIyLjAwNDQsIDQ1NS4yMTQxXSxcclxuICBbMTcyMC44MjQyLCA0NTkuNDEyMzVdLFxyXG4gIFsxNzE1LjkyNDYsIDQ1OS45NTIwM10sXHJcbiAgWzE3MTcuMjgxLCA0NTYuMTY5MTZdLFxyXG4gIFsxNzE5LjA3NDUsIDQ2My4wNjM5XSxcclxuICBbMTcyMy44MzM2LCA0NjIuOTIzNTJdLFxyXG4gIFsxNzI3LjkzMDksIDQ2Ni4zNjc4XSxcclxuICBbMTczMS41NjE0LCA0NjguNTczMV0sXHJcbiAgWzE3MjguMjg3MSwgNDYxLjgxNjI4XSxcclxuICBbMTczMi40Nzc3LCA0NjAuMjA5MjNdLFxyXG4gIFsxNzMyLjc2MjEsIDQ2NC40Nzk3XSxcclxuICBbMTczNi44ODk2LCA0NjIuMDIwOTRdLFxyXG4gIFsxNzQxLjAwNTUsIDQ2My43NzE0Ml0sXHJcbiAgWzE3MzYuNTQ5NywgNDY3LjYwMTNdLFxyXG4gIFsxNzQwLjc1MTcsIDQ2OS43NzY1OF0sXHJcbiAgWzE3NDQuMzA0OSwgNDY3LjczMTddLFxyXG4gIFsxNzQ4LjUyNzYsIDQ2OC40NTA5XSxcclxuICBbMTc1My4yMTYxLCA0NjkuNTA2NjVdLFxyXG4gIFsxNzUwLjc5NjMsIDQ3My41NzQ2NV0sXHJcbiAgWzE3NDUuNDQ0NSwgNDczLjgwMjU4XSxcclxuICBbMTc0MS40MzYsIDQ3Ny4xMzA3NF0sXHJcbiAgWzE3MzcuOTE0NiwgNDczLjUwNjQ0XSxcclxuICBbMTczMy40MDgzLCA0NzIuMTNdLFxyXG4gIFsxNzI4LjkxMzYsIDQ3Mi41ODc1Ml0sXHJcbiAgWzE3MjUuMzU5NCwgNDcwLjUyMzJdLFxyXG4gIFsxNzI0LjkyOTYsIDQ3NS4yMzgxNl0sXHJcbiAgWzE3MjkuNDQ4NSwgNDc3LjY1ODAyXSxcclxuICBbMTczMy40NDYzLCA0NzYuMjg2NzRdLFxyXG4gIFsxNzM2LjE1NiwgNDc5LjUwMl0sXHJcbiAgWzE3NDAuOTIxOSwgNDgyLjcyMzI0XSxcclxuICBbMTc0MC4xNDc3LCA0ODguOTc4MTVdLFxyXG4gIFsxNzM2LjQ3NjMsIDQ5NS4xNTE2XSxcclxuICBbMTc0MS44NjE5LCA0OTYuNDE3OV0sXHJcbiAgWzE3NDUuNzc0NCwgNDkxLjk2ODQ4XSxcclxuICBbMTc0Ni4xMzYsIDQ4NS45MTAwM10sXHJcbiAgWzE3NDYuOTUzNywgNDgwLjAzNjMyXSxcclxuICBbMTc1Mi41NzE5LCA0NzguMjg3XSxcclxuICBbMTc1My4zNzc5LCA0ODQuMDQ2MzNdLFxyXG4gIFsxNzU5LjEyMjEsIDQ4OC4yMDE2Nl0sXHJcbiAgWzE3NjMuOTE4NywgNDkzLjAxNjI0XSxcclxuICBbMTc2OS4yMjc5LCA0ODkuOTAwNjNdLFxyXG4gIFsxNzgyLjMyNDIsIDQ5MS40OTE2NF0sXHJcbiAgWzE3ODUuNDI5NiwgNDk2LjQzNjVdLFxyXG4gIFsxNzc5LjQ3NzgsIDUwNy4zNTQ1XSxcclxuICBbMTc4My4zMTY5LCA1MDIuOTU1ODddLFxyXG4gIFsxNzc4LjY5MDgsIDQ5Ny45OTc3NF0sXHJcbiAgWzE3NTcuNTA5NSwgNTI1Ljc2ODRdLFxyXG4gIFsxNzUyLjQxNDEsIDUyNC4wMzQwNl0sXHJcbiAgWzE3NDcuOTM4NCwgNTIyLjEwNTJdLFxyXG4gIFsxNzQ5LjQ3OTIsIDQ5Ny4yODQyN10sXHJcbiAgWzE3NTcuNzM4LCA1MTkuMTM3MV0sXHJcbiAgWzE3NDQuOTkyMiwgNTE2LjY4NDNdLFxyXG4gIFsxNzM4LjM3NjMsIDUxNy43ODAzM10sXHJcbiAgWzE3MzEuNzI5NiwgNTE3LjUxMjJdLFxyXG4gIFsxNzIzLjIwMDQsIDUwNC43Njg2NV0sXHJcbiAgWzE3MTcuMTYzNywgNTA2LjcxMzg3XSxcclxuICBbMTcxMy4yMTI2LCA1MDIuMDc2MV0sXHJcbiAgWzE3MDYuOTY1OCwgNTAwLjM2NDU2XSxcclxuICBbMTcwMS4yNTUsIDQ5OS42NjkyOF0sXHJcbiAgWzE3MDAuNTA5LCA1MDMuNzc4NF0sXHJcbiAgWzE2OTUuMjgwOCwgNTAxLjc1NF0sXHJcbiAgWzE2OTcuMjkzLCA0OTYuODk5MV0sXHJcbiAgWzE3MDIuODUyNSwgNDk1LjE4ODM1XSxcclxuICBbMTcwNy43OTQ0LCA0OTQuMTUxNjddLFxyXG4gIFsxNzEyLjk5MDcsIDQ5NS40NzIxXSxcclxuICBbMTcxOS41OTExLCA0OTguNTUwMzhdLFxyXG4gIFsxNzI2Ljc2MzQsIDQ5OC42MjQ3M10sXHJcbiAgWzE3MzAuNTMxMiwgNDk0LjQyNDNdLFxyXG4gIFsxNzI0LjIyMzYsIDQ5Mi4yMzRdLFxyXG4gIFsxNzE4LjI5NzYsIDQ5Mi43MDE5XSxcclxuICBbMTcxNC42NTAxLCA0ODkuMTE1OTRdLFxyXG4gIFsxNzA5LjY0MzgsIDQ4OS40MjI1XSxcclxuICBbMTcxMS44MjUzLCA0ODUuMDg4MTNdLFxyXG4gIFsxNzEzLjAxNjgsIDQ4MC40ODA5M10sXHJcbiAgWzE3MTcuNTg5NSwgNDc5LjU3NTldLFxyXG4gIFsxNzE2LjU5NDIsIDQ4My45OTI5OF0sXHJcbiAgWzE3MjAuMTcxNiwgNDg3LjY3MDldLFxyXG4gIFsxNzIxLjQzMDUsIDQ4My4wMDM2M10sXHJcbiAgWzE3MjUuMjc3NiwgNDg2LjAwNzldLFxyXG4gIFsxNzI5LjQyODcsIDQ4OC40MjQzOF0sXHJcbiAgWzE3MzQuNDYwMywgNDg5Ljc2MTU3XSxcclxuICBbMTczNS4zOTc2LCA0ODQuNzAwM10sXHJcbiAgWzE3MzAuNjA2LCA0ODIuNzE1MDNdLFxyXG4gIFsxNzI1Ljk0OSwgNDgwLjY2ODU4XSxcclxuICBbMTcyMS44NTQ1LCA0NzguNzAzXSxcclxuICBbMTcxOS43NzM5LCA0NzUuMTE4NzRdLFxyXG4gIFsxNzIwLjc1NjUsIDQ3MS4yOTUxNF0sXHJcbiAgWzE3MjMuNDUxNCwgNDY3LjA4NDRdLFxyXG4gIFsxNzE5LjU1NTgsIDQ2Ny4xMDQ4M10sXHJcbiAgWzE3MTUuNzQzNywgNDY1LjMxMTUyXSxcclxuICBbMTcxNi4xMzksIDQ2OS4yNzY5Ml0sXHJcbiAgWzE3MTUuNTk0NiwgNDcyLjg2NDE0XSxcclxuICBbMTcxNS4yMjIyLCA0NzYuNDgzXSxcclxuICBbMTcxMS40NjM2LCA0NzUuNzgwNzNdLFxyXG4gIFsxNzA4LjkzNzksIDQ3Mi4yODM2Nl0sXHJcbiAgWzE3MTIuMDAzMywgNDcwLjY1MzVdLFxyXG4gIFsxNzExLjk1ODMsIDQ2Ni44NTUzMl0sXHJcbiAgWzE3MTMuMTg0MywgNDYyLjczNjE4XSxcclxuICBbMTcxMS4wMDU0LCA0NTkuNzU4MzZdLFxyXG4gIFsxNzA3LjQyMTEsIDQ1OC4xNDQxM10sXHJcbiAgWzE3MDYuMTMzLCA0NTQuNTg3NDZdLFxyXG4gIFsxNzAyLjE5MjEsIDQ1NS45Njg1XSxcclxuICBbMTY5Ny40MTk3LCA0NTQuODM3NV0sXHJcbiAgWzE2OTkuMDA3MywgNDU5LjE3Mjk0XSxcclxuICBbMTY5NC40NjQxLCA0NTkuMDU2NThdLFxyXG4gIFsxNjkyLjMzMzcsIDQ1NS42NDM2NV0sXHJcbiAgWzE2ODcuMjc2NCwgNDU1LjY1MjhdLFxyXG4gIFsxNjg5LjQ1LCA0NTkuODcwNDhdLFxyXG4gIFsxNjg0LjY2MDUsIDQ1OS44ODUwN10sXHJcbiAgWzE2ODIuNTI3MSwgNDU2LjYxNjAzXSxcclxuICBbMTY4Mi43MDYzLCA0NTIuNzY4Ml0sXHJcbiAgWzE2ODUuOTE0MSwgNDUwLjc5MTM1XSxcclxuICBbMTY5MC4wODg1LCA0NTEuODYxNjZdLFxyXG4gIFsxNjk0LjIzMTQsIDQ1MS4yMTI5OF0sXHJcbiAgWzE2OTguMTk3MywgNDUwLjE4MTU4XSxcclxuICBbMTcwMi4wMzQsIDQ1MS40Mzg0OF0sXHJcbiAgWzE3MDYuMzU2NywgNDUwLjM2MDA1XSxcclxuICBbMTcwNC41NTk2LCA0NDYuNTk2OF0sXHJcbiAgWzE3MDAuODE1MSwgNDQ2LjMzMDAyXSxcclxuICBbMTY5Ni44NTc1LCA0NDYuMDk2OF0sXHJcbiAgWzE2OTMuMDQ0OSwgNDQ2Ljg5MTMzXSxcclxuICBbMTY4NC44NTI1LCA0NDYuNjEyNV0sXHJcbiAgWzE2ODAuNjA5OSwgNDQ3LjQ5OTE1XSxcclxuICBbMTY3OC45MTM1LCA0NTAuODc5Ml0sXHJcbiAgWzE2NzcuNTczNywgNDU0Ljc1NjQ3XSxcclxuICBbMTY3OC44NywgNDU5LjAxOTZdLFxyXG4gIFsxNjc1Ljk3MDcsIDQ2Mi41MzE2OF0sXHJcbiAgWzE2NzMuODg2NiwgNDU4LjA4MDldLFxyXG4gIFsxNjY5LjgyNjQsIDQ1OS4yMTgzMl0sXHJcbiAgWzE2NzEuMzU4MiwgNDYzLjU3NzRdLFxyXG4gIFsxNjc0LjMyMjMsIDQ2Ny4wMjMwN10sXHJcbiAgWzE2NzguOTMwNCwgNDcwLjIzNjhdLFxyXG4gIFsxNjc4LjY1OTIsIDQ2Ni4zNTM4Ml0sXHJcbiAgWzE2ODEuMDY3NiwgNDYyLjkwNTAzXSxcclxuICBbMTY4NS41MTksIDQ2My43NzU3M10sXHJcbiAgWzE2ODkuMDIxNSwgNDY0LjgzODg3XSxcclxuICBbMTY5Mi40Njk1LCA0NjMuMjYwNl0sXHJcbiAgWzE2OTYuNDA4NywgNDYyLjk1NjhdLFxyXG4gIFsxNzAzLjE2MzEsIDQ2MC4zNjAzMl0sXHJcbiAgWzE3MDYuMzg5NSwgNDYyLjQ2NzQ3XSxcclxuICBbMTcwOS40MjYxLCA0NjMuOTY0OTddLFxyXG4gIFsxNzA3LjYyMjMsIDQ2Ny45ODc2NF0sXHJcbiAgWzE3MDMuODQxMSwgNDY1Ljk1OTE3XSxcclxuICBbMTcwMC4xNzE5LCA0NjQuMDMwNzZdLFxyXG4gIFsxNzAwLjMxODUsIDQ2OC44NzQxNV0sXHJcbiAgWzE3MDQuMjg1MywgNDcwLjk3NDU1XSxcclxuICBbMTcwNi43NDcsIDQ3NS4xNDE0NV0sXHJcbiAgWzE3MDMuMTMyNywgNDc1LjMxOTUyXSxcclxuICBbMTY5OS41NTUzLCA0NzMuNjkxOTZdLFxyXG4gIFsxNzAwLjEyODQsIDQ3OC40NDYzOF0sXHJcbiAgWzE2OTYuMDI2NSwgNDc3Ljc4MDJdLFxyXG4gIFsxNjk3LjQzMTQsIDQ4Mi40NTEzNV0sXHJcbiAgWzE2OTMuMDgwOCwgNDg0LjEzNTFdLFxyXG4gIFsxNjkyLjYyNzIsIDQ4MC4yMDAyXSxcclxuICBbMTY4OC4wNjQ3LCA0ODIuMDA2NTNdLFxyXG4gIFsxNjg4LjYwOTYsIDQ4NS41MTQ5XSxcclxuICBbMTY4NS40NTI5LCA0ODguMDQ3OTRdLFxyXG4gIFsxNjgzLjQ4NzMsIDQ5MS4xODUwM10sXHJcbiAgWzE2NzkuOTU4NSwgNDkyLjk0MTddLFxyXG4gIFsxNjc0LjU0NTcsIDQ5OC45OTAwNV0sXHJcbiAgWzE2NzAuNzk1NSwgNDk5Ljk5NDJdLFxyXG4gIFsxNjY1LjE2OTEsIDUwNS43ODU5OF0sXHJcbiAgWzE2NjguOTkzOCwgNTA0LjA1NTg4XSxcclxuICBbMTY3NS40OTM1LCA1MDMuMjIzN10sXHJcbiAgWzE2NzcuNTQ0NywgNTA3LjE0ODc0XSxcclxuICBbMTY3My42Mzc2LCA1MTAuNDU1NF0sXHJcbiAgWzE2NzIuNDg4NSwgNTA2LjAxOTFdLFxyXG4gIFsxNjY4Ljc3NjQsIDUwOS4yNjcyN10sXHJcbiAgWzE2NjQuNTgwOCwgNTEwLjM0Njc0XSxcclxuICBbMTY2MS4wNjg2LCA1MDcuNzg3MzJdLFxyXG4gIFsxNjU3LjM1MTgsIDUxMC44NTAzNF0sXHJcbiAgWzE2NjAuODUyNSwgNTEyLjkyOF0sXHJcbiAgWzE2NTcuMDQyMiwgNTE1LjY5NzhdLFxyXG4gIFsxNjYwLjYyODQsIDUxOC4yNTE2NV0sXHJcbiAgWzE2NTkuNzMyOCwgNTIzLjQ2NzE2XSxcclxuICBbMTY1NC41NTI3LCA1MjMuNTQzM10sXHJcbiAgWzE2NDkuMzI2NCwgNTIxLjk4NDI1XSxcclxuICBbMTY0Ny42MzMsIDUyNy4xNzcyXSxcclxuICBbMTY0Ni4zODM4LCA1MzMuMDg3M10sXHJcbiAgWzE2NDAuNjQ5OSwgNTMyLjkyNzFdLFxyXG4gIFsxNjQ2LjE3MzYsIDUzOS42NzA5Nl0sXHJcbiAgWzE2NTEuNDQ1NCwgNTM2LjQxOTA3XSxcclxuICBbMTY1Mi43OTQyLCA1NDIuODI4MjVdLFxyXG4gIFsxNjYwLjE4NjMsIDU0MS40MjY5XSxcclxuICBbMTY1Ny44MTY5LCA1NDcuMDE2MjRdLFxyXG4gIFsxNjYwLjM0NDYsIDU1Mi4xMjRdLFxyXG4gIFsxNjY1LjM4NCwgNTU0LjY3OTFdLFxyXG4gIFsxNjY1LjE5MTMsIDU2MC41ODA4XSxcclxuICBbMTY2MC43MzA1LCA1NTguMDgyNzZdLFxyXG4gIFsxNjU1LjcwMjQsIDU1NC43MzA0N10sXHJcbiAgWzE2NTIuNjQ1NCwgNTUwLjEwOF0sXHJcbiAgWzE2NDcuODY5MywgNTQ2Ljg2NV0sXHJcbiAgWzE2NDEuNDU3NiwgNTUzLjA2NjQ3XSxcclxuICBbMTY0Mi40NzMsIDU0OC41MDY3XSxcclxuICBbMTY0Mi4zNjc3LCA1NDMuNTQ4MV0sXHJcbiAgWzE2NDYuNTgyNSwgNTUyLjgzNThdLFxyXG4gIFsxNjU2LjI0NDYsIDU1OS42ODc0NF0sXHJcbiAgWzE2NTEuOTU5MiwgNTYwLjc0NF0sXHJcbiAgWzE2NTAuNjUzNiwgNTU1LjUwMTddLFxyXG4gIFsxNjQ3LjgyMjYsIDU1OS40MTExM11cclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVFeHRlbnRzKGNvb3JkQXJyYXkpIHtcclxuICBsZXQgbWluWCA9IEluZmluaXR5LCBtYXhYID0gLUluZmluaXR5O1xyXG4gIGxldCBtaW5ZID0gSW5maW5pdHksIG1heFkgPSAtSW5maW5pdHk7XHJcbiAgXHJcbiAgZm9yKGxldCBjb29yZHMgb2YgY29vcmRBcnJheSkge1xyXG4gICAgbWluWCA9IE1hdGgubWluKG1pblgsIGNvb3Jkc1swXSk7XHJcbiAgICBtYXhYID0gTWF0aC5tYXgobWF4WCwgY29vcmRzWzBdKTtcclxuICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCBjb29yZHNbMV0pO1xyXG4gICAgbWF4WSA9IE1hdGgubWF4KG1heFksIGNvb3Jkc1sxXSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBtaW5YLFxyXG4gICAgbWF4WCxcclxuICAgIG1pblksXHJcbiAgICBtYXhZLFxyXG4gICAgd2lkdGg6IG1heFggLSBtaW5YLFxyXG4gICAgaGVpZ2h0OiBtYXhZIC0gbWluWVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgR3JlZWtTdGF0dWVFeHRlbnRzID0gY2FsY3VsYXRlRXh0ZW50cyhHcmVla1N0YXR1ZSk7IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNrZXRjaCB2YXJpYWJsZXNcclxuICAqL1xyXG4gIFVzZVBlckJyYW5jaENvbG9yczogZmFsc2UsXHJcblxyXG5cclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdDbG9zZWQnLCAgICAgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggYnJhbmNoIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiA1MCwgICAgICAgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXR0cmFjdG9yIHRoYXQgYXR0cmFjdHMgbm9kZXNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdHRyYWN0b3IgYW5kIG5vZGVzIHdoZW4gYnJhbmNoZXMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgIC8vIGluaXRpYWwgcGF1c2UvdW5wYXVzZSBzdGF0ZVxyXG4gIEVuYWJsZUNhbmFsaXphdGlvbjogdHJ1ZSwgICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gIEVuYWJsZU9wYWNpdHlCbGVuZGluZzogZmFsc2UsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93QXR0cmFjdG9yczogdHJ1ZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93Tm9kZXM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbidcclxuICBTaG93VGlwczogZmFsc2UsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAneidcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IHRydWUsICAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBSZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyBicmFuY2ggc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogRGFyayxcclxuXHJcbiAgLy8gTGluZSB0aGlja25lc3Nlc1xyXG4gIEJyYW5jaFRoaWNrbmVzczogMSxcclxuICBUaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAxXHJcbn0iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9jb3JlL05vZGUnO1xyXG5pbXBvcnQgQXR0cmFjdG9yIGZyb20gJy4uLy4uLy4uL2NvcmUvQXR0cmFjdG9yJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi4vLi4vLi4vY29yZS9QYXRoJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XHJcbmltcG9ydCB7IEdyZWVrU3RhdHVlLCBHcmVla1N0YXR1ZUV4dGVudHMgfSBmcm9tICcuL0F0dHJhY3RvclBhdHRlcm5zJztcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG5sZXQgc2hvd0hlbHAgPSBmYWxzZTtcclxuXHJcbi8vIENyZWF0ZSBpbml0aWFsIGNvbmRpdGlvbnMgZm9yIHNpbXVsYXRpb25cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBJbml0aWFsaXplIHNpbXVsYXRpb24gb2JqZWN0XHJcbiAgbmV0d29yayA9IG5ldyBOZXR3b3JrKGN0eCwgU2V0dGluZ3MpO1xyXG5cclxuICAvLyBBZGQgdGhlIGJvdW5kcywgYXR0cmFjdG9ycywgYW5kIHJvb3Qgbm9kZXNcclxuICByZXNldE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcclxuICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgYWRkQXR0cmFjdG9ycygpO1xyXG4gIGFkZFJvb3ROb2RlcygpO1xyXG59XHJcblxyXG4gIGxldCBhZGRBdHRyYWN0b3JzID0gKCkgPT4ge1xyXG4gICAgbGV0IGF0dHJhY3RvcnMgPSBbXTtcclxuXHJcbiAgICAvLyBTY2FsZSB0aGUgY29vcmRpbmF0ZXMgdG8gZml0IHdpdGhpbiB0aGUgd2luZG93XHJcbiAgICBjb25zdCBzY2FsZSA9IE1hdGgubWluKFxyXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIEdyZWVrU3RhdHVlRXh0ZW50cy53aWR0aCxcclxuICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gR3JlZWtTdGF0dWVFeHRlbnRzLmhlaWdodFxyXG4gICAgKSAqIDAuODsgLy8gMC44IHRvIGxlYXZlIHNvbWUgbWFyZ2luXHJcblxyXG4gICAgLy8gQ2VudGVyIHRoZSBwYXR0ZXJuIGluIHRoZSBtaWRkbGUgb2YgdGhlIHdpbmRvd1xyXG4gICAgY29uc3Qgb2Zmc2V0WCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAtIChHcmVla1N0YXR1ZUV4dGVudHMud2lkdGggKiBzY2FsZSkpIC8gMjtcclxuICAgIGNvbnN0IG9mZnNldFkgPSAod2luZG93LmlubmVySGVpZ2h0IC0gKEdyZWVrU3RhdHVlRXh0ZW50cy5oZWlnaHQgKiBzY2FsZSkpIC8gMjtcclxuXHJcbiAgICBmb3IobGV0IGNvb3JkcyBvZiBHcmVla1N0YXR1ZSkge1xyXG4gICAgICBjb25zdCB4ID0gKGNvb3Jkc1swXSAtIEdyZWVrU3RhdHVlRXh0ZW50cy5taW5YKSAqIHNjYWxlICsgb2Zmc2V0WDtcclxuICAgICAgY29uc3QgeSA9IChjb29yZHNbMV0gLSBHcmVla1N0YXR1ZUV4dGVudHMubWluWSkgKiBzY2FsZSArIG9mZnNldFk7XHJcbiAgICAgIFxyXG4gICAgICBhdHRyYWN0b3JzLnB1c2goXHJcbiAgICAgICAgbmV3IEF0dHJhY3RvcihcclxuICAgICAgICAgIG5ldyBWZWMyKHgsIHkpLFxyXG4gICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV0d29yay5hdHRyYWN0b3JzID0gYXR0cmFjdG9ycztcclxuICBcclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIG5ldHdvcmsuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MgPSBuZXR3b3JrLnNldHRpbmdzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgbGV0IGFkZFJvb3ROb2RlcyA9ICgpID0+IHtcclxuICAgIG5ldHdvcmsuYWRkTm9kZShcclxuICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoLzIgLSAxOTAsXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIDEwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIFNldHRpbmdzXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgLy8gbmV0d29yay5hZGROb2RlKFxyXG4gICAgLy8gICBuZXcgTm9kZShcclxuICAgIC8vICAgICBudWxsLFxyXG4gICAgLy8gICAgIG5ldyBWZWMyKFxyXG4gICAgLy8gICAgICAgd2luZG93LmlubmVyV2lkdGgvMiArIDIwMCxcclxuICAgIC8vICAgICAgIHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbiAgICAvLyAgICAgKSxcclxuICAgIC8vICAgICBmYWxzZSxcclxuICAgIC8vICAgICBjdHgsXHJcbiAgICAvLyAgICAgU2V0dGluZ3NcclxuICAgIC8vICAgKVxyXG4gICAgLy8gKTtcclxuICB9XHJcblxyXG5sZXQgZHJhd1RleHQgPSAoKSA9PiB7XHJcbiAgbGV0IHRleHQgPSBbXHJcbiAgICAnQXR0cmFjdG9ycyBwbGFjZWQgYmFzZWQgb24gaW1hZ2UgZGF0YS4nLFxyXG4gICAgJycsXHJcbiAgICAnMSA9IHNxdWFyZScsXHJcbiAgICAnJyxcclxuICAgICdTcGFjZSA9IHRvZ2dsZSBwYXVzZScsXHJcbiAgICAnciA9IHJlc2V0JyxcclxuICAgICdjID0gdG9nZ2xlIGNhbmFsaXphdGlvbicsXHJcbiAgICAncCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nJyxcclxuICAgICd2ID0gdG9nZ2xlIGJyYW5jaCB2aXNpYmlsaXR5JyxcclxuICAgICdzID0gdG9nZ2xlIGF0dHJhY3RvciB2aXNpYmlsaXR5JyxcclxuICAgICdhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZXMnLFxyXG4gICAgJ2sgPSB0b2dnbGUga2lsbCB6b25lcycsXHJcbiAgICAndCA9IHRvZ2dsZSB0aXBzJyxcclxuICAgICdpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcycsXHJcbiAgICAnaCA9IHRvZ2dsZSB0aGlzIGhlbHAgdGV4dCdcclxuICBdO1xyXG5cclxuICBjdHguZm9udCA9ICdib2xkIDI0cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcclxuICBjdHguZmlsbFRleHQoJ0ltYWdlcycsIDIwLCA0MCk7XHJcblxyXG4gIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSc7XHJcbiAgZm9yKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KHRleHRbaV0sIDIwLCAyMippICsgODApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICBpZihzaG93SGVscCkge1xyXG4gICAgZHJhd1RleHQoKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgJ3InOlxyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gaCA9IHRvZ2dsZSBoZWxwIHRleHRcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICBzaG93SGVscCA9ICFzaG93SGVscDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICAgIGN1cnJlbnRJbWFnZSA9IFNRVUFSRTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uXHJcbnNldHVwKCk7IiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsImltcG9ydCB0b1BhdGggZnJvbSAnLi90b1BhdGgnO1xuaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuaW1wb3J0IHZhbGlkIGZyb20gJy4vdmFsaWQnO1xuXG5leHBvcnQgeyB0b1BhdGgsIHRvUG9pbnRzLCB2YWxpZCB9OyIsImltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcblxudmFyIHBvaW50c1RvRCA9IGZ1bmN0aW9uIHBvaW50c1RvRChwKSB7XG4gIHZhciBkID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGZpcnN0UG9pbnQgPSB2b2lkIDA7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwb2ludCA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIF9wb2ludCRjdXJ2ZSA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgIGN1cnZlID0gX3BvaW50JGN1cnZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wb2ludCRjdXJ2ZSxcbiAgICAgICAgICBtb3ZlVG8gPSBwb2ludC5tb3ZlVG8sXG4gICAgICAgICAgeCA9IHBvaW50LngsXG4gICAgICAgICAgeSA9IHBvaW50Lnk7XG5cbiAgICAgIHZhciBpc0ZpcnN0UG9pbnQgPSBpID09PSAwIHx8IG1vdmVUbztcbiAgICAgIHZhciBpc0xhc3RQb2ludCA9IGkgPT09IHAubGVuZ3RoIC0gMSB8fCBwW2kgKyAxXS5tb3ZlVG87XG4gICAgICB2YXIgcHJldlBvaW50ID0gaSA9PT0gMCA/IG51bGwgOiBwW2kgLSAxXTtcblxuICAgICAgaWYgKGlzRmlyc3RQb2ludCkge1xuICAgICAgICBmaXJzdFBvaW50ID0gcG9pbnQ7XG5cbiAgICAgICAgaWYgKCFpc0xhc3RQb2ludCkge1xuICAgICAgICAgIGQgKz0gJ00nICsgeCArICcsJyArIHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VydmUpIHtcbiAgICAgICAgc3dpdGNoIChjdXJ2ZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYXJjJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUyID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRsYXJnZUFyID0gX3BvaW50JGN1cnZlMi5sYXJnZUFyY0ZsYWcsXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnID0gX3BvaW50JGN1cnZlMiRsYXJnZUFyID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRsYXJnZUFyLFxuICAgICAgICAgICAgICAgIHJ4ID0gX3BvaW50JGN1cnZlMi5yeCxcbiAgICAgICAgICAgICAgICByeSA9IF9wb2ludCRjdXJ2ZTIucnksXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRzd2VlcEZsID0gX3BvaW50JGN1cnZlMi5zd2VlcEZsYWcsXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnID0gX3BvaW50JGN1cnZlMiRzd2VlcEZsID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRzd2VlcEZsLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9IF9wb2ludCRjdXJ2ZTIueEF4aXNSb3RhdGlvbixcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uID0gX3BvaW50JGN1cnZlMiR4QXhpc1JvID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiR4QXhpc1JvO1xuXG4gICAgICAgICAgICBkICs9ICdBJyArIHJ4ICsgJywnICsgcnkgKyAnLCcgKyB4QXhpc1JvdGF0aW9uICsgJywnICsgbGFyZ2VBcmNGbGFnICsgJywnICsgc3dlZXBGbGFnICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjdWJpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMyA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIGN4MSA9IF9wb2ludCRjdXJ2ZTMueDEsXG4gICAgICAgICAgICAgICAgY3kxID0gX3BvaW50JGN1cnZlMy55MSxcbiAgICAgICAgICAgICAgICBjeDIgPSBfcG9pbnQkY3VydmUzLngyLFxuICAgICAgICAgICAgICAgIGN5MiA9IF9wb2ludCRjdXJ2ZTMueTI7XG5cbiAgICAgICAgICAgIGQgKz0gJ0MnICsgY3gxICsgJywnICsgY3kxICsgJywnICsgY3gyICsgJywnICsgY3kyICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdxdWFkcmF0aWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTQgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBxeDEgPSBfcG9pbnQkY3VydmU0LngxLFxuICAgICAgICAgICAgICAgIHF5MSA9IF9wb2ludCRjdXJ2ZTQueTE7XG5cbiAgICAgICAgICAgIGQgKz0gJ1EnICsgcXgxICsgJywnICsgcXkxICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgICAgZCArPSAnWic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICBkICs9ICdaJztcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LnggJiYgeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnTCcgKyB4ICsgJywnICsgeTtcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LngpIHtcbiAgICAgICAgZCArPSAnSCcgKyB4O1xuICAgICAgfSBlbHNlIGlmICh5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdWJyArIHk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGQ7XG59O1xuXG52YXIgdG9QYXRoID0gZnVuY3Rpb24gdG9QYXRoKHMpIHtcbiAgdmFyIGlzUG9pbnRzID0gQXJyYXkuaXNBcnJheShzKTtcbiAgdmFyIGlzR3JvdXAgPSBpc1BvaW50cyA/IEFycmF5LmlzQXJyYXkoc1swXSkgOiBzLnR5cGUgPT09ICdnJztcbiAgdmFyIHBvaW50cyA9IGlzUG9pbnRzID8gcyA6IGlzR3JvdXAgPyBzLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHNocCkge1xuICAgIHJldHVybiB0b1BvaW50cyhzaHApO1xuICB9KSA6IHRvUG9pbnRzKHMpO1xuXG4gIGlmIChpc0dyb3VwKSB7XG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwb2ludHNUb0QocCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzVG9EKHBvaW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdG9Qb2ludHMgPSBmdW5jdGlvbiB0b1BvaW50cyhfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyd0eXBlJ10pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUNpcmNsZShwcm9wcyk7XG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUVsbGlwc2UocHJvcHMpO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21MaW5lKHByb3BzKTtcbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUGF0aChwcm9wcyk7XG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlnb24ocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0KHByb3BzKTtcbiAgICBjYXNlICdnJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRyhwcm9wcyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgc2hhcGUgdHlwZScpO1xuICB9XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUNpcmNsZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21DaXJjbGUoX3JlZjIpIHtcbiAgdmFyIGN4ID0gX3JlZjIuY3gsXG4gICAgICBjeSA9IF9yZWYyLmN5LFxuICAgICAgciA9IF9yZWYyLnI7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHIsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUVsbGlwc2UgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRWxsaXBzZShfcmVmMykge1xuICB2YXIgY3ggPSBfcmVmMy5jeCxcbiAgICAgIGN5ID0gX3JlZjMuY3ksXG4gICAgICByeCA9IF9yZWYzLnJ4LFxuICAgICAgcnkgPSBfcmVmMy5yeTtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gcnksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tTGluZShfcmVmNCkge1xuICB2YXIgeDEgPSBfcmVmNC54MSxcbiAgICAgIHgyID0gX3JlZjQueDIsXG4gICAgICB5MSA9IF9yZWY0LnkxLFxuICAgICAgeTIgPSBfcmVmNC55MjtcblxuICByZXR1cm4gW3sgeDogeDEsIHk6IHkxLCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4MiwgeTogeTIgfV07XG59O1xuXG52YXIgdmFsaWRDb21tYW5kcyA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdL2c7XG5cbnZhciBjb21tYW5kTGVuZ3RocyA9IHtcbiAgQTogNyxcbiAgQzogNixcbiAgSDogMSxcbiAgTDogMixcbiAgTTogMixcbiAgUTogNCxcbiAgUzogNCxcbiAgVDogMixcbiAgVjogMSxcbiAgWjogMFxufTtcblxudmFyIHJlbGF0aXZlQ29tbWFuZHMgPSBbJ2EnLCAnYycsICdoJywgJ2wnLCAnbScsICdxJywgJ3MnLCAndCcsICd2J107XG5cbnZhciBpc1JlbGF0aXZlID0gZnVuY3Rpb24gaXNSZWxhdGl2ZShjb21tYW5kKSB7XG4gIHJldHVybiByZWxhdGl2ZUNvbW1hbmRzLmluZGV4T2YoY29tbWFuZCkgIT09IC0xO1xufTtcblxudmFyIG9wdGlvbmFsQXJjS2V5cyA9IFsneEF4aXNSb3RhdGlvbicsICdsYXJnZUFyY0ZsYWcnLCAnc3dlZXBGbGFnJ107XG5cbnZhciBnZXRDb21tYW5kcyA9IGZ1bmN0aW9uIGdldENvbW1hbmRzKGQpIHtcbiAgcmV0dXJuIGQubWF0Y2godmFsaWRDb21tYW5kcyk7XG59O1xuXG52YXIgZ2V0UGFyYW1zID0gZnVuY3Rpb24gZ2V0UGFyYW1zKGQpIHtcbiAgcmV0dXJuIGQuc3BsaXQodmFsaWRDb21tYW5kcykubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvWzAtOV0rLS9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0uc2xpY2UoMCwgLTEpICsgJyAtJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvXFwuWzAtOV0rL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbSArICcgJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5sZW5ndGggPiAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5zcGxpdCgvWyAsXSsvKS5tYXAocGFyc2VGbG9hdCkuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKG4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUGF0aCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21QYXRoKF9yZWY1KSB7XG4gIHZhciBkID0gX3JlZjUuZDtcblxuICB2YXIgY29tbWFuZHMgPSBnZXRDb21tYW5kcyhkKTtcbiAgdmFyIHBhcmFtcyA9IGdldFBhcmFtcyhkKTtcblxuICB2YXIgcG9pbnRzID0gW107XG5cbiAgdmFyIG1vdmVUbyA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbaV07XG4gICAgdmFyIHVwcGVyQ2FzZUNvbW1hbmQgPSBjb21tYW5kLnRvVXBwZXJDYXNlKCk7XG4gICAgdmFyIGNvbW1hbmRMZW5ndGggPSBjb21tYW5kTGVuZ3Roc1t1cHBlckNhc2VDb21tYW5kXTtcbiAgICB2YXIgcmVsYXRpdmUgPSBpc1JlbGF0aXZlKGNvbW1hbmQpO1xuXG4gICAgaWYgKGNvbW1hbmRMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY29tbWFuZFBhcmFtcyA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb21tYW5kUGFyYW1zLmxlbmd0aCAvIGNvbW1hbmRMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlcmF0aW9uczsgaisrKSB7XG4gICAgICAgIHZhciBwcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHN3aXRjaCAodXBwZXJDYXNlQ29tbWFuZCkge1xuICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgdmFyIHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICBtb3ZlVG8gPSB7IHg6IHgsIHk6IHkgfTtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiBwcmV2UG9pbnQueVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHByZXZQb2ludC54LFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJjJyxcbiAgICAgICAgICAgICAgICByeDogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHJ5OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbjogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gb3B0aW9uYWxBcmNLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3ViaWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHgyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgdmFyIHN4MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgZGlmZiA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgc3gxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHN5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ2N1YmljJykge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDIgPyBwcmV2UG9pbnQueCAtIGRpZmYueCA6IHByZXZQb2ludC54ICsgZGlmZi54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MiA/IHByZXZQb2ludC55IC0gZGlmZi55IDogcHJldlBvaW50LnkgKyBkaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhzeCAtIHN4Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHN5IC0gc3kyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdjdWJpYycsIHgxOiBzeDEsIHkxOiBzeTEsIHgyOiBzeDIsIHkyOiBzeTIgfSwgeDogc3gsIHk6IHN5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdxdWFkcmF0aWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgdmFyIHR4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB0eSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciB0eDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdHkxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAncXVhZHJhdGljJykge1xuICAgICAgICAgICAgICB2YXIgX2RpZmYgPSB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDEpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkxKVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngxID8gcHJldlBvaW50LnggLSBfZGlmZi54IDogcHJldlBvaW50LnggKyBfZGlmZi54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MSA/IHByZXZQb2ludC55IC0gX2RpZmYueSA6IHByZXZQb2ludC55ICsgX2RpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAncXVhZHJhdGljJywgeDE6IHR4MSwgeTE6IHR5MSB9LCB4OiB0eCwgeTogdHkgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKF9wcmV2UG9pbnQueCAhPT0gbW92ZVRvLnggfHwgX3ByZXZQb2ludC55ICE9PSBtb3ZlVG8ueSkge1xuICAgICAgICBwb2ludHMucHVzaCh7IHg6IG1vdmVUby54LCB5OiBtb3ZlVG8ueSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5Z29uID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlnb24oX3JlZjYpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY2LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogdHJ1ZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlsaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKF9yZWY3KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNy5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IGZhbHNlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9pbnRzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvaW50cyhfcmVmOCkge1xuICB2YXIgY2xvc2VkID0gX3JlZjguY2xvc2VkLFxuICAgICAgcG9pbnRzID0gX3JlZjgucG9pbnRzO1xuXG4gIHZhciBudW1iZXJzID0gcG9pbnRzLnNwbGl0KC9bXFxzLF0rLykubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobik7XG4gIH0pO1xuXG4gIHZhciBwID0gbnVtYmVycy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcG9pbnQsIGkpIHtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIGFyci5wdXNoKHsgeDogcG9pbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyclsoaSAtIDEpIC8gMl0ueSA9IHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH0sIFtdKTtcblxuICBpZiAoY2xvc2VkKSB7XG4gICAgcC5wdXNoKF9leHRlbmRzKHt9LCBwWzBdKSk7XG4gIH1cblxuICBwWzBdLm1vdmVUbyA9IHRydWU7XG5cbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdChfcmVmOSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjkuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmOS5yeCxcbiAgICAgIHJ5ID0gX3JlZjkucnksXG4gICAgICB3aWR0aCA9IF9yZWY5LndpZHRoLFxuICAgICAgeCA9IF9yZWY5LngsXG4gICAgICB5ID0gX3JlZjkueTtcblxuICBpZiAocnggfHwgcnkpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcng6IHJ4IHx8IHJ5LFxuICAgICAgcnk6IHJ5IHx8IHJ4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQmFzaWNSZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdChfcmVmMTApIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMC5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aCxcbiAgICAgIHggPSBfcmVmMTAueCxcbiAgICAgIHkgPSBfcmVmMTAueTtcblxuICByZXR1cm4gW3sgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKF9yZWYxMSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjExLmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjExLnJ4LFxuICAgICAgcnkgPSBfcmVmMTEucnksXG4gICAgICB3aWR0aCA9IF9yZWYxMS53aWR0aCxcbiAgICAgIHggPSBfcmVmMTEueCxcbiAgICAgIHkgPSBfcmVmMTEueTtcblxuICB2YXIgY3VydmUgPSB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH07XG5cbiAgcmV0dXJuIFt7IHg6IHggKyByeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IC0gcnkgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSArIGhlaWdodCwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHJ4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCAtIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4LCB5OiB5ICsgcnkgfSwgeyB4OiB4ICsgcngsIHk6IHksIGN1cnZlOiBjdXJ2ZSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21HKF9yZWYxMikge1xuICB2YXIgc2hhcGVzID0gX3JlZjEyLnNoYXBlcztcbiAgcmV0dXJuIHNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdG9Qb2ludHMocyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Qb2ludHM7IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZ2V0RXJyb3JzID0gZnVuY3Rpb24gZ2V0RXJyb3JzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHNoYXBlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHJ1bGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBtYXRjaCA9IF9yZWYubWF0Y2gsXG4gICAgICAgIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICAgIHJlcXVpcmVkID0gX3JlZi5yZXF1aXJlZCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuICAgIGlmICh0eXBlb2Ygc2hhcGVbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBpcyByZXF1aXJlZCcgKyAocHJvcCA9PT0gJ3R5cGUnID8gJycgOiAnIG9uIGEgJyArIHNoYXBlLnR5cGUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZVtwcm9wXSkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlIGFycmF5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2Yoc2hhcGVbcHJvcF0pICE9PSB0eXBlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSB2YWxpZC10eXBlb2ZcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSB7XG4gICAgICAgIGlmIChtYXRjaC5pbmRleE9mKHNoYXBlW3Byb3BdKSA9PT0gLTEpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb25lIG9mICcgKyBtYXRjaC5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHNoYXBlLnR5cGUgPT09ICdnJyAmJiBBcnJheS5pc0FycmF5KHNoYXBlLnNoYXBlcykpIHtcbiAgICB2YXIgY2hpbGRFcnJvcnMgPSBzaGFwZS5zaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZ2V0RXJyb3JzKHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoZXJyb3JzLCBjaGlsZEVycm9ycyk7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gW3tcbiAgICBtYXRjaDogWydjaXJjbGUnLCAnZWxsaXBzZScsICdsaW5lJywgJ3BhdGgnLCAncG9seWdvbicsICdwb2x5bGluZScsICdyZWN0JywgJ2cnXSxcbiAgICBwcm9wOiAndHlwZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfV07XG5cbiAgc3dpdGNoIChzaGFwZS50eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2QnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncG9pbnRzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnaGVpZ2h0JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd3aWR0aCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZyc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3NoYXBlcycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnYXJyYXknIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG52YXIgdmFsaWQgPSBmdW5jdGlvbiB2YWxpZChzaGFwZSkge1xuICB2YXIgZXJyb3JzID0gZ2V0RXJyb3JzKHNoYXBlKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yczogZXJyb3JzLFxuICAgIHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZDsiLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=