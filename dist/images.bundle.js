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
    if(this.settings.ShoAttractors) {
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

  toggleattractors() {
    this.settings.Showattractors = !this.settings.Showattractors;

    for(let attractor of this.attractors) {
      attractor.settings.Showattractors = !attractor.settings.Showattractors;
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
/*! exports provided: GreekStatue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreekStatue", function() { return GreekStatue; });
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

    for(let coords of _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__["GreekStatue"]) {
      attractors.push(
        new _core_Attractor__WEBPACK_IMPORTED_MODULE_3__["default"](
          new vec2__WEBPACK_IMPORTED_MODULE_0__(
            coords[0]*1.1 - 750,
            coords[1]*1.1 - 90
          ),
          ctx,
          _Settings__WEBPACK_IMPORTED_MODULE_7__["default"]
        )
      );
    }

    network.attractors = attractors;
  }

  // Create the network with initial conditions
  let addRootNodes = () => {
    network.addNode(
      new _core_Node__WEBPACK_IMPORTED_MODULE_2__["default"](
        null,
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          window.innerWidth/2 - 440,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9Db2xvclByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9EZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvcmUvTmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9QYXRoLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL0F0dHJhY3RvclBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2V4cGVyaW1lbnRzL2Zyb20taW1hZ2VzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtaW4tcG9seWdvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9Qb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy92YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVjMi92ZWMyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBa0M7O0FBRW5CO0FBQ2YsMENBQTBDO0FBQzFDLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsb0NBQW9DLEVBQUUsaURBQVE7O0FBRTlDLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQWdFOztBQUVqRDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxrREFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBd0M7O0FBRWpDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ047QUFDQztBQUNROztBQUV0QjtBQUNmO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUMseUJBQXlCO0FBQ3pCLG9CQUFvQjs7QUFFcEIsb0JBQW9COztBQUVwQixxQkFBcUI7QUFDckIsd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsaUNBQUk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpQ0FBSSxDQUFDLHlEQUFNLFdBQVcseURBQU07O0FBRXpEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDhDQUFNO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcGFBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbkI7QUFDZjtBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkIsT0FBTyxLQUFLO0FBQ3pDLHVCQUF1QixhQUFhO0FBQ3BDLG1CQUFtQjtBQUNuQixvQ0FBb0MsRUFBRSxpREFBUTtBQUM5Qyx1QkFBdUI7O0FBRXZCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDTDs7QUFFN0IsYUFBYSxtQkFBTyxDQUFDLGtFQUFrQjs7QUFFeEI7QUFDZjtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIscUJBQXFCOztBQUVyQixzQ0FBc0M7QUFDdEMsbUJBQW1CLFVBQVU7QUFDN0IsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsNEJBQTRCOztBQUU1QixvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1QkFBdUI7QUFDdkMscUJBQXFCLGlDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUNBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrQ0FBa0M7QUFDbEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNBOztBQUVwQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLGtCQUFrQix1QkFBdUI7QUFDekMsa0JBQWtCLGdCQUFnQjtBQUNsQyxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEdBQUc7QUFDL0UsRUFBRSx5REFBTTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSx5REFBTTtBQUNsQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7O0FBRTVEO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ25xUEE7QUFBQTtBQUFpRTs7QUFFbEQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHVEQUFJOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDZTtBQUNOO0FBQ1U7QUFDVjtBQUNXO0FBQ3NCO0FBQ3JDO0FBQ2dCOztBQUVsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBTyxNQUFNLGlEQUFROztBQUVyQztBQUNBOztBQUVBO0FBQ0EsRUFBRSxvRkFBaUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLDhEQUFXO0FBQ2pDO0FBQ0EsWUFBWSx1REFBUztBQUNyQixjQUFjLGlDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpREFBUTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtEQUFJO0FBQ2Q7QUFDQSxZQUFZLGlDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxROzs7Ozs7Ozs7OztBQzNKQSw2SkFBZSxHQUFHLElBQXFDLENBQUMsaUNBQU8sRUFBRSxvQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUFBLG9HQUFDLENBQUMsS0FBSyxFQUE2RSxDQUFDLGtCQUFrQixhQUFhLGdCQUFnQiwrQkFBK0IsV0FBVyw0RkFBNEYsV0FBVyxrRUFBa0UsNERBQTRELFlBQVksSUFBSSxrQkFBa0IseUJBQXlCLDBEQUEwRCxrQkFBa0Isc0JBQXNCLHlDQUF5QyxVQUFVLGNBQWMseUJBQXlCLG9CQUFvQixJQUFJLFNBQVMsVUFBVSxvQ0FBb0MsY0FBYyxJQUFJLHlDQUF5QyxTQUFTLDBDQUEwQywwRkFBMEYscU9BQXFPLDBEQUEwRCx1REFBdUQsaU5BQWlOLDBCQUEwQiw0QkFBNEIsS0FBSyxLQUFLLGdEQUFnRCxtRkFBbUYsc0JBQXNCLEtBQUssa0NBQWtDLGlEQUFpRCxLQUFLLEdBQUcsbUJBQW1CLDhIQUE4SCxvSUFBb0ksMkNBQTJDLHFCQUFxQix1QkFBdUIsZUFBZSwwQkFBMEIsR0FBRyx3QkFBd0IseUNBQXlDLG9CQUFvQixLQUFLLGdEQUFnRCw0REFBNEQscUJBQXFCLE9BQU8sRUFBRSxvQkFBb0IsS0FBMEIscUJBQXFCOztBQUVuZ0YseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEMEI7QUFDRTtBQUNFOztBQUU5QjtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHFEQUFJO0FBQ1o7O0FBRUE7QUFDQSxlQUFlLHNEQUFLO0FBQ3BCOztBQUVBO0FBQ0EsZUFBZSx1REFBTTtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0k7QUFDTjs7Ozs7Ozs7Ozs7Ozs7QUNGNUI7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGdFQUFnRTtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlEQUFRO0FBQ25CLEdBQUcsSUFBSSx5REFBUTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFZSxxRUFBTSxFOzs7Ozs7Ozs7Ozs7QUNoSHJCO0FBQUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsaUNBQWlDLEdBQUcsMkJBQTJCLDBDQUEwQyxFQUFFLEdBQUcsMkJBQTJCLDBDQUEwQyxFQUFFO0FBQ2hNOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrQ0FBa0MsR0FBRyw0QkFBNEIsNENBQTRDLEVBQUUsR0FBRyw0QkFBNEIsNENBQTRDLEVBQUU7QUFDdk07O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDZCQUE2QixHQUFHLGVBQWU7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQyxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLDJCQUEyQiwyQkFBMkI7QUFDdEQsYUFBYTtBQUNiLDJCQUEyQixhQUFhO0FBQ3hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkUsZ0VBQWdFO0FBQzdJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVMsb0RBQW9ELGdCQUFnQjs7QUFFdEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVMsc0NBQXNDLGdCQUFnQjs7QUFFeEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFEQUFxRDs7QUFFckQ7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLCtCQUErQjtBQUM3RDs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QixnQ0FBZ0M7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlDQUFpQywyQ0FBMkM7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDJCQUEyQixHQUFHLHFCQUFxQixHQUFHLDhCQUE4QixHQUFHLHNCQUFzQixHQUFHLGFBQWE7QUFDeEk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTs7QUFFZixXQUFXLGdDQUFnQyxHQUFHLDBCQUEwQixHQUFHLHdDQUF3QyxHQUFHLG1DQUFtQyxHQUFHLGlEQUFpRCxHQUFHLDJCQUEyQixHQUFHLHlDQUF5QyxHQUFHLGtCQUFrQixHQUFHLGdDQUFnQztBQUMvVTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNyWXZCO0FBQUEsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNENBQTRDO0FBQzlEOztBQUVBO0FBQ0Esa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRDs7QUFFQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Q7O0FBRUE7QUFDQSxrQkFBa0IsNENBQTRDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQWlEO0FBQ25FOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFpRDtBQUNuRSxrQkFBa0IsNkJBQTZCO0FBQy9DLGtCQUFrQiw2QkFBNkI7QUFDL0Msa0JBQWtCLGdEQUFnRDtBQUNsRSxrQkFBa0IsNENBQTRDO0FBQzlELGtCQUFrQiw0Q0FBNEM7QUFDOUQ7O0FBRUE7QUFDQSxrQkFBa0IsZ0RBQWdEO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRTs7Ozs7Ozs7Ozs7QUM5R3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3hkRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiaW1hZ2VzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhwZXJpbWVudHMvZnJvbS1pbWFnZXMvanMvZW50cnkuanNcIik7XG4iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJhY3RvciB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjdHgsIHNldHRpbmdzID0ge30pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247ICAgICAvLyB2ZWMyIG9mIHRoaXMgYXR0cmFjdG9yJ3MgcG9zaXRpb25cbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHRcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcblxuICAgIHRoaXMuaW5mbHVlbmNpbmdOb2RlcyA9IFtdOyAgIC8vIHJlZmVyZW5jZXMgdG8gbm9kZXMgdGhpcyBhdHRyYWN0b3IgaXMgaW5mbHVlbmNpbmcgZWFjaCBmcmFtZVxuICAgIHRoaXMuZnJlc2ggPSB0cnVlOyAgICAgICAgICAgIC8vIGZsYWcgdXNlZCB0byBwcmV2ZW50IGF0dHJhY3RvcnMgZnJvbSBiZWluZyByZW1vdmVkIGR1cmluZyBmaXJzdCBmcmFtZSBvZiBDbG9zZWQgdmVuYXRpb24gbW9kZVxuICB9XG5cbiAgZHJhdygpIHtcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMpIHtcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5BdHRyYWN0aW9uWm9uZUNvbG9yO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cblxuICAgIC8vIERyYXcgdGhlIGtpbGwgem9uZVxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgLy8gRHJhdyB0aGUgYXR0cmFjdG9yXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG9BdHRyYWN0b3JzKSB7XG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3RvckNvbG9yO1xuICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBjb25zdCBMaWdodCA9IHtcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgwLDAsMCwuNSknLFxuICBCcmFuY2hDb2xvcjogJ3JnYmEoMCwwLDAsMSknLFxuICBUaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJ1xufVxuXG5leHBvcnQgY29uc3QgRGFyayA9IHtcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxuICBBdHRyYWN0b3JDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wMDIpJyxcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknLFxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJyxcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJ1xufVxuXG5leHBvcnQgY29uc3QgUmVhbGlzdGljID0ge1xuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXG4gIC8vIEJyYW5jaENvbG9yOiAncmdiYSgwLDAsMCwuMiknLFxuICBUaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDYxLDE2NiwxMiwxKScsXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSdcbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbSA9IHtcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwyNDIsMjQyKScsXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNiknLFxuICBCcmFuY2hDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxuICAvLyBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoNjEsODUsMTM2KScsXG4gIC8vIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDYxLDg1LDEzNiknXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknXG59IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIFJlYWxpc3RpYywgQ3VzdG9tIH0gZnJvbSAnLi9Db2xvclByZXNldHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcbiAgKi9cblxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgICAgICAvLyBsZW5ndGggb2YgZWFjaCBicmFuY2ggc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiAzMCwgICAgICAgLy8gcmFkaXVzIG9mIGluZmx1ZW5jZSAoZF9pKSBhcm91bmQgZWFjaCBhdHRyYWN0b3IgdGhhdCBhdHRyYWN0cyBub2Rlc1xuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF0dHJhY3RvcnMgYW5kIG5vZGVzIHdoZW4gYnJhbmNoZXMgYXJlIGVuZGVkXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAgICAgIC8vIGluaXRpYWwgcGF1c2UvdW5wYXVzZSBzdGF0ZVxuICBFbmFibGVDYW5hbGl6YXRpb246IHRydWUsICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxuICBFbmFibGVPcGFjaXR5QmxlbmRpbmc6IHRydWUsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxuXG5cbiAgLyoqXG4gICAgUmVuZGVyaW5nIGNvbmZpZ3VyYXRpb25zXG4gICovXG5cbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXG4gIFNob3dBdHRyYWN0b3JzOiBmYWxzZSwgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xuICBTaG93Tm9kZXM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbidcbiAgU2hvd1RpcHM6IGZhbHNlLCAgICAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3QnXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICd6J1xuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcbiAgU2hvd0luZmx1ZW5jZUxpbmVzOiBmYWxzZSwgICAvLyB0b2dnbGVkIHdpdGggJ2knXG4gIFNob3dCb3VuZHM6IGZhbHNlLCAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcblxuICAvLyBNb2Rlc1xuICBSZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyBicmFuY2ggc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXG5cbiAgLy8gQ29sb3JzXG4gIENvbG9yczogRGFyayxcblxuICAvLyBMaW5lIHRoaWNrbmVzc2VzXG4gIEJyYW5jaFRoaWNrbmVzczogMS41LFxuICBUaXBUaGlja25lc3M6IDIsXG4gIEJvdW5kc0JvcmRlclRoaWNrbmVzczogMVxufSIsImltcG9ydCB7IGV4cG9ydFNWRyB9IGZyb20gXCIuL1V0aWxpdGllc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yaykge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgc3dpdGNoKGUua2V5KSB7XG4gICAgICAvLyBTcGFjZSA9IHBhdXNlL3VucGF1c2VcbiAgICAgIGNhc2UgJyAnOlxuICAgICAgICBuZXR3b3JrLnRvZ2dsZVBhdXNlKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBiID0gdG9nZ2xlIGJyYW5jaCB2aXNpYmlsaXR5XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgbmV0d29yay50b2dnbGVCcmFuY2hlcygpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0b3IgdmlzaWJpbGl0eVxuICAgICAgY2FzZSAnYSc6XG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdG9ycygpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8geiA9IHRvZ2dsZSBhdHRyYWN0aW9uIHpvbmUgdmlzaWJpbGl0eVxuICAgICAgY2FzZSAneic6XG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdGlvblpvbmVzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyB0ID0gdG9nZ2xlIHRpcCB2aXNpYmlsaXR5XG4gICAgICBjYXNlICd0JzpcbiAgICAgICAgbmV0d29yay50b2dnbGVUaXBzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBrID0gdG9nZ2xlIGtpbGwgem9uZSB2aXNpYmlsaXR5XG4gICAgICBjYXNlICdrJzpcbiAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGkgPSB0b2dnbGUgaW5mbHVlbmNlIGxpbmVzIHZpc2liaWxpdHlcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUluZmx1ZW5jZUxpbmVzKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBiID0gdG9nZ2xlIGJvdW5kcyB2aXNpYmlsaXR5XG4gICAgICBjYXNlICdiJzpcbiAgICAgICAgbmV0d29yay50b2dnbGVCb3VuZHMoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIG8gPSB0b2dnbGUgb2JzdGFjbGVzIHZpc2liaWxpdHlcbiAgICAgIGNhc2UgJ28nOlxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9ic3RhY2xlcygpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gZSA9IGV4cG9ydCBhbiBTVkcgZmlsZSBvZiBhbGwgdmlzaWJsZSBnZW9tZXRyeVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIGV4cG9ydFNWRyhuZXR3b3JrKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIGMgPSB0b2dnbGUgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb25cbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUNhbmFsaXphdGlvbigpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gcCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nXG4gICAgICBjYXNlICdwJzpcbiAgICAgICAgbmV0d29yay50b2dnbGVPcGFjaXR5QmxlbmRpbmcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XG5pbXBvcnQgS0RCdXNoIGZyb20gJ2tkYnVzaCc7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xuXG4gICAgdGhpcy5hdHRyYWN0b3JzID0gW107ICAvLyBhdHRyYWN0b3JzIGluZmx1ZW5jZSBub2RlIGdyb3d0aFxuICAgIHRoaXMubm9kZXMgPSBbXTsgICAgICAgLy8gbm9kZXMgYXJlIGNvbm5lY3RlZCB0byBmb3JtIGJyYW5jaGVzXG5cbiAgICB0aGlzLm5vZGVzSW5kZXg7ICAgICAgIC8vIGtkLWJ1c2ggc3BhdGlhbCBpbmRleCBmb3IgYWxsIG5vZGVzXG5cbiAgICB0aGlzLmJvdW5kcyA9IFtdOyAgICAgIC8vIGFycmF5IG9mIFBhdGggb2JqZWN0cyB0aGF0IGJyYW5jaGVzIGNhbm5vdCBncm93IG91dHNpZGUgb2ZcbiAgICB0aGlzLm9ic3RhY2xlcyA9IFtdOyAgIC8vIGFycmF5IG9mIFBhdGggb2JqZWN0cyB0aGF0IGJyYW5jaGVzIG11c3QgYXZvaWRcblxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxuICAgIGlmKHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBc3NvY2lhdGUgYXR0cmFjdG9ycyB3aXRoIG5lYXJieSBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcbiAgICBmb3IobGV0IFthdHRyYWN0b3JJRCwgYXR0cmFjdG9yXSBvZiB0aGlzLmF0dHJhY3RvcnMuZW50cmllcygpKSB7XG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgYXR0cmFjdG9yIHdpdGggaXRzIGNsb3Nlc3Qgbm9kZVxuICAgICAgICBjYXNlICdPcGVuJzpcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKGF0dHJhY3RvciwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKSk7XG5cbiAgICAgICAgICBpZihjbG9zZXN0Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChhdHRyYWN0b3JJRCk7XG4gICAgICAgICAgICBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2RlcyA9IFtjbG9zZXN0Tm9kZV07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgYXR0cmFjdG9yIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcbiAgICAgICAgICBsZXQgbmVpZ2hib3Job29kTm9kZXMgPSB0aGlzLmdldFJlbGF0aXZlTmVpZ2hib3JOb2RlcyhhdHRyYWN0b3IpO1xuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShhdHRyYWN0b3IpO1xuXG4gICAgICAgICAgLy8gRXhjbHVkZSBub2RlcyB0aGF0IGFyZSBpbiB0aGUgYXR0cmFjdG9yJ3Mga2lsbCB6b25lICh0aGVzZSBzaG91bGQgc3RvcCBncm93aW5nKVxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIW5vZGVzSW5LaWxsWm9uZS5pbmNsdWRlcyhuZWlnaGJvck5vZGUpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMgPSBuZWlnaGJvcmhvb2ROb2RlcztcblxuICAgICAgICAgIGlmKG5vZGVzVG9Hcm93Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJhY3Rvci5mcmVzaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2Ygbm9kZXNUb0dyb3cpIHtcbiAgICAgICAgICAgICAgbm9kZS5pbmZsdWVuY2VkQnkucHVzaChhdHRyYWN0b3JJRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHcm93IHRoZSBuZXR3b3JrIGJ5IGFkZGluZyBuZXcgbm9kZXMgb250byBhbnkgbm9kZXMgYmVpbmcgaW5mbHVlbmNlZCBieSBhdHRyYWN0b3JzXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSB0aGlzLmdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbm9kZS5pbmZsdWVuY2VkQnkubWFwKGlkID0+IHRoaXMuYXR0cmFjdG9yc1tpZF0pKTtcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IG5vZGVzIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xuICAgICAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCBub2RlcyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcbiAgICAgICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xuICAgICAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOT1RFOiBkaXNhYmxpbmcgdGhpcyBjaGVjayBsZXRzIG5vZGVzIGdyb3cgYWNyb3NzIGdhcHMgaW4gYm91bmRzIC0gY29vbCBlZmZlY3QhXG4gICAgICAgIGlmKFxuICAgICAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCB0aGlzLmJvdW5kcy5sZW5ndGggPT09IDApICYmXG4gICAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKG5leHROb2RlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xuXG4gICAgICAvLyBQZXJmb3JtIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcbiAgICAgIGlmKG5vZGUuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcblxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZS5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGNoaWxkIG5vZGVzLCB1c2UgdGhlIHRoaWNrZXN0IG9mIHRoZW0gYWxsXG4gICAgICAgICAgaWYoY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA8IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wNykge1xuICAgICAgICAgICAgY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA9IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBhbnkgYXR0cmFjdG9ycyB0aGF0IGhhdmUgYmVlbiByZWFjaGVkIGJ5IHRoZWlyIGFzc29jaWF0ZWQgbm9kZXNcbiAgICBmb3IobGV0IFthdHRyYWN0b3JJRCwgYXR0cmFjdG9yXSBvZiB0aGlzLmF0dHJhY3RvcnMuZW50cmllcygpKSB7XG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIHJlbW92ZSB0aGUgYXR0cmFjdG9yIGFzIHNvb24gYXMgYW55IG5vZGUgcmVhY2hlcyBpdFxuICAgICAgICBjYXNlICdPcGVuJzpcbiAgICAgICAgICBpZihhdHRyYWN0b3IucmVhY2hlZCkge1xuICAgICAgICAgICAgdGhpcy5hdHRyYWN0b3JzLnNwbGljZShhdHRyYWN0b3JJRCwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBhdHRyYWN0b3Igb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIG5vZGVzIGhhdmUgcmVhY2hlZCBpdFxuICAgICAgICBjYXNlICdDbG9zZWQnOlxuICAgICAgICAgIGlmKGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDAgJiYgIWF0dHJhY3Rvci5mcmVzaCkge1xuICAgICAgICAgICAgbGV0IGFsbE5vZGVzUmVhY2hlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcykge1xuICAgICAgICAgICAgICBpZihub2RlLnBvc2l0aW9uLmRpc3RhbmNlKGF0dHJhY3Rvci5wb3NpdGlvbikgPiB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGFsbE5vZGVzUmVhY2hlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGFsbE5vZGVzUmVhY2hlZCkge1xuICAgICAgICAgICAgICB0aGlzLmF0dHJhY3RvcnMuc3BsaWNlKGF0dHJhY3RvcklELCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgdGhpcy5kcmF3Qm91bmRzKCk7XG4gICAgdGhpcy5kcmF3T2JzdGFjbGVzKCk7XG4gICAgdGhpcy5kcmF3YXR0cmFjdG9ycygpO1xuICAgIHRoaXMuZHJhd05vZGVzKCk7XG4gIH1cblxuICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBkcmF3Qm91bmRzKCkge1xuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcbiAgICAgICAgYm91bmQuZHJhdygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRyYXdPYnN0YWNsZXMoKSB7XG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xuICAgICAgICBvYnN0YWNsZS5kcmF3KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZHJhd05vZGVzKCkge1xuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd05vZGVzKSB7XG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xuICAgICAgICBub2RlLmRyYXcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkcmF3YXR0cmFjdG9ycygpIHtcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiB0aGlzLmF0dHJhY3RvcnMpIHtcbiAgICAgIGF0dHJhY3Rvci5kcmF3KCk7XG5cbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIGF0dHJhY3RvciBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyAmJiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvcihsZXQgbm9kZSBvZiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcykge1xuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhhdHRyYWN0b3IucG9zaXRpb24ueCwgYXR0cmFjdG9yLnBvc2l0aW9uLnkpO1xuICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyhub2RlLnBvc2l0aW9uLngsIG5vZGUucG9zaXRpb24ueSk7XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKGF0dHJhY3Rvcikge1xuICAgIGxldCBmYWlsO1xuXG4gICAgbGV0IG5lYXJieU5vZGVzID0gdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKTtcbiAgICBsZXQgcmVsYXRpdmVOZWlnaGJvcnMgPSBbXTtcbiAgICBsZXQgYXR0cmFjdG9yVG9QMCwgYXR0cmFjdG9yVG9QMSwgcDBUb1AxO1xuXG4gICAgLy8gcDAgaXMgYSByZWxhdGl2ZSBuZWlnaGJvciBvZiBhdXhpblBvcyBpZmZcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXG4gICAgLy8gcDAgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gdG8gcDFcbiAgICBmb3IobGV0IHAwIG9mIG5lYXJieU5vZGVzKSB7XG4gICAgICBmYWlsID0gZmFsc2U7XG4gICAgICBhdHRyYWN0b3JUb1AwID0gcDAucG9zaXRpb24uc3VidHJhY3QoYXR0cmFjdG9yLnBvc2l0aW9uLCB0cnVlKTtcblxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xuICAgICAgICBpZihwMCA9PT0gcDEpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHJhY3RvclRvUDEgPSBwMS5wb3NpdGlvbi5zdWJ0cmFjdChhdHRyYWN0b3IucG9zaXRpb24sIHRydWUpO1xuXG4gICAgICAgIGlmKGF0dHJhY3RvclRvUDEubGVuZ3RoKCkgPiBhdHRyYWN0b3JUb1AwLmxlbmd0aCgpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBwMFRvUDEgPSBwMS5wb3NpdGlvbi5zdWJ0cmFjdChwMC5wb3NpdGlvbiwgdHJ1ZSk7XG5cbiAgICAgICAgaWYoYXR0cmFjdG9yVG9QMC5sZW5ndGgoKSA+IHAwVG9QMS5sZW5ndGgoKSkge1xuICAgICAgICAgIGZhaWwgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFmYWlsKSB7XG4gICAgICAgIHJlbGF0aXZlTmVpZ2hib3JzLnB1c2gocDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcbiAgfVxuXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShhdHRyYWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi54LFxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLnksXG4gICAgICB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZVxuICAgICkubWFwKFxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cbiAgICApO1xuICB9XG5cbiAgZ2V0Tm9kZXNJbktpbGxab25lKGF0dHJhY3Rvcikge1xuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLngsXG4gICAgICBhdHRyYWN0b3IucG9zaXRpb24ueSxcbiAgICAgIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlXG4gICAgKS5tYXAoXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxuICAgICk7XG4gIH1cblxuICBnZXRDbG9zZXN0Tm9kZShhdHRyYWN0b3IsIG5lYXJieU5vZGVzKSB7XG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcbiAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xuXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XG4gICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKGF0dHJhY3Rvci5wb3NpdGlvbik7XG5cbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcbiAgICAgICAgYXR0cmFjdG9yLnJlYWNoZWQgPSB0cnVlO1xuICAgICAgICBjbG9zZXN0Tm9kZSA9IG51bGw7XG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xuICAgICAgICByZWNvcmQgPSBkaXN0YW5jZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XG4gIH1cblxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieWF0dHJhY3RvcnMpIHtcbiAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXR0cmFjdG9yXG4gICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSBuZXcgVmVjMigwLDApO1xuXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgbmVhcmJ5YXR0cmFjdG9ycykge1xuICAgICAgYXZlcmFnZURpcmVjdGlvbi5hZGQoXG4gICAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgc21hbGwgYW1vdW50IG9mIHJhbmRvbSBcImppdHRlclwiIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2sgYmV0d2VlbiB0d28gYXR0cmFjdG9ycyBhbmQgZW5kbGVzc2x5IGdlbmVyYXRpbmcgbm9kZXMgaW4gdGhlIHNhbWUgcGxhY2VcbiAgICAvLyAoQ3JlZGl0IHRvIERhdmlkZSBQcmF0aSAoZWRhcCkgZm9yIHRoZSBpZGVhLCBzZWVuIGluIG9meFNwYWNlQ29sb25pemF0aW9uKVxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XG5cbiAgICBhdmVyYWdlRGlyZWN0aW9uLmRpdmlkZShub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGgpLm5vcm1hbGl6ZSgpO1xuXG4gICAgcmV0dXJuIGF2ZXJhZ2VEaXJlY3Rpb247XG4gIH1cblxuICBhZGROb2RlKG5vZGUpIHtcbiAgICBsZXQgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcbiAgICBsZXQgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IGZhbHNlO1xuXG4gICAgLy8gT25seSBhbGxvdyByb290IG5vZGVzIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XG4gICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KSkge1xuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERvbid0IGFsbG93IGFueSByb290IG5vZGVzIHRoYXQgYXJlIGluc2lkZSBvZiBhbiBvYnN0YWNsZVxuICAgIGlmKHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KSkge1xuICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoXG4gICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKTtcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubm9kZXMgPSBbXTtcbiAgICB0aGlzLmF0dHJhY3RvcnMgPSBbXTtcblxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xuICB9XG5cbiAgYnVpbGRTcGF0aWFsSW5kaWNlcygpIHtcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XG4gIH1cblxuICB0b2dnbGVOb2RlcygpIHtcbiAgICB0aGlzLnNldHRpbmdzLlNob3dOb2RlcyA9ICF0aGlzLnNldHRpbmdzLlNob3dOb2RlcztcbiAgfVxuXG4gIHRvZ2dsZVRpcHMoKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dUaXBzO1xuXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgIG5vZGUuc2V0dGluZ3MuU2hvd1RpcHMgPSAhbm9kZS5zZXR0aW5ncy5TaG93VGlwcztcbiAgICB9XG4gIH1cblxuICB0b2dnbGVhdHRyYWN0b3JzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MuU2hvd2F0dHJhY3RvcnMgPSAhdGhpcy5zZXR0aW5ncy5TaG93YXR0cmFjdG9ycztcblxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xuICAgICAgYXR0cmFjdG9yLnNldHRpbmdzLlNob3dhdHRyYWN0b3JzID0gIWF0dHJhY3Rvci5zZXR0aW5ncy5TaG93YXR0cmFjdG9ycztcbiAgICB9XG4gIH1cblxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcblxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xuICAgICAgYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlS2lsbFpvbmVzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XG5cbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiB0aGlzLmF0dHJhY3RvcnMpIHtcbiAgICAgIGF0dHJhY3Rvci5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIWF0dHJhY3Rvci5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUluZmx1ZW5jZUxpbmVzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzO1xuICB9XG5cbiAgdG9nZ2xlQm91bmRzKCkge1xuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICF0aGlzLnNldHRpbmdzLlNob3dCb3VuZHM7XG4gIH1cblxuICB0b2dnbGVPYnN0YWNsZXMoKSB7XG4gICAgdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcztcbiAgfVxuXG4gIHRvZ2dsZUNhbmFsaXphdGlvbigpIHtcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbiA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbjtcblxuICAgIGlmKCF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbikge1xuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcbiAgICAgICAgbm9kZS50aGlja25lc3MgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZU9wYWNpdHlCbGVuZGluZygpIHtcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcblxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XG4gICAgICBub2RlLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9IHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQgPSAhdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZDtcbiAgfVxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzLCBjb2xvciA9IHVuZGVmaW5lZCkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50OyAgICAgICAvLyByZWZlcmVuY2UgdG8gcGFyZW50IG5vZGUsIG5lY2Vzc2FyeSBmb3IgdmVpbiB0aGlja2VuaW5nIGxhdGVyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uOyAgIC8vIHt2ZWMyfSBvZiB0aGlzIG5vZGUncyBwb3NpdGlvblxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDsgICAgICAgICAvLyB7Ym9vbGVhbn1cbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0IGZvciBkcmF3aW5nXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yOyAgICAgICAgIC8vIGNvbG9yLCB1c3VhbGx5IHBhc3NlZCBkb3duIGZyb20gcGFyZW50XG5cbiAgICB0aGlzLmluZmx1ZW5jZWRCeSA9IFtdOyAgICAgLy8gcmVmZXJlbmNlcyB0byBhbGwgQXR0cmFjdG9ycyBpbmZsdWVuY2luZyB0aGlzIG5vZGUgZWFjaCBmcmFtZVxuICAgIHRoaXMudGhpY2tuZXNzID0gMDsgICAgICAgICAvLyB0aGlja25lc3MgLSB0aGlzIGlzIGluY3JlYXNlZCBkdXJpbmcgdmVpbiB0aGlja2VuaW5nIHByb2Nlc3NcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYodGhpcy5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgLy8gU21vb3RobHkgcmFtcCB1cCBvcGFjaXR5IGJhc2VkIG9uIHZlaW4gdGhpY2tuZXNzXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IHRoaXMudGhpY2tuZXNzIC8gMyArIC4yO1xuICAgICAgfVxuXG4gICAgICAvLyBcIkxpbmVzXCIgcmVuZGVyIG1vZGVcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuUmVuZGVyTW9kZSA9PSAnTGluZXMnKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wYXJlbnQucG9zaXRpb24ueCwgdGhpcy5wYXJlbnQucG9zaXRpb24ueSk7XG5cbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dUaXBzKSB7XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5UaXBDb2xvcjtcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlRpcFRoaWNrbmVzcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZih0aGlzLmNvbG9yICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJyYW5jaENvbG9yO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuQnJhbmNoVGhpY2tuZXNzICsgdGhpcy50aGlja25lc3M7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcblxuICAgICAgLy8gXCJEb3RzXCIgcmVuZGVyIG1vZGVcbiAgICAgIH0gZWxzZSBpZih0aGlzLnNldHRpbmdzLlJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKFxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgMSArIHRoaXMudGhpY2tuZXNzIC8gMixcbiAgICAgICAgICAxICsgdGhpcy50aGlja25lc3MgLyAyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBNYXRoLlBJICogMlxuICAgICAgICApO1xuXG4gICAgICAgIC8vIENoYW5nZSBjb2xvciBvciBcInRpcFwiIG5vZGVzXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VGlwcykge1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlRpcENvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJyYW5jaENvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZXNldCBnbG9iYWwgb3BhY2l0eSBpZiBpdCB3YXMgY2hhbmdlZCBkdWUgdG8gb3BhY2l0eSBncmFkaWVudCBmbGFnXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIGEgbmV3IG5vZGUgaW4gdGhlIHByb3ZpZGVkIGRpcmVjdGlvbiBhbmQgYSBwcmUtZGVmaW5lZCBkaXN0YW5jZSAoU2VnbWVudExlbmd0aClcbiAgZ2V0TmV4dE5vZGUoYXZlcmFnZUF0dHJhY3RvckRpcmVjdGlvbikge1xuICAgIHRoaXMuaXNUaXAgPSBmYWxzZTtcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VBdHRyYWN0b3JEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gbmV3IE5vZGUoXG4gICAgICB0aGlzLFxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXG4gICAgICB0cnVlLFxuICAgICAgdGhpcy5jdHgsXG4gICAgICB0aGlzLnNldHRpbmdzLFxuICAgICAgdGhpcy5jb2xvclxuICAgICk7XG4gIH1cbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xuXG5sZXQgaW5zaWRlID0gcmVxdWlyZSgncG9pbnQtaW4tcG9seWdvbicpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcbiAgY29uc3RydWN0b3IocG9seWdvbiwgdHlwZSwgY3R4LCBzZXR0aW5ncykge1xuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247ICAgICAvLyBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyBjb29yZGluYXRlcyBkZWZpbmluZyBhIHBvbHlnb24gKFtbeDAseTBdLFt4MSx5MV0sLi4uXSlcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XG4gICAgdGhpcy50eXBlID0gdHlwZTsgICAgICAgICAgIC8vIHN0cmluZyBlaXRoZXIgJ0JvdW5kcycgb3IgJ09ic3RhY2xlJ1xuXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBwb2x5Z29uOyAgLy8gUGF0aHMgYXJlIGluaXRpYWxpemVkIHdpdGhvdXQgYW55IHRyYW5zZm9ybWF0aW9ucyBieSBkZWZhdWx0XG4gICAgdGhpcy5vcmlnaW4gPSB7eDowLCB5OjB9OyAgICAgICAgICAgLy8gb3JpZ2luIHBvaW50IHVzZWQgZm9yIHRyYW5zbGF0aW9uXG4gICAgdGhpcy5zY2FsZSA9IDE7ICAgICAgICAgICAgICAgICAgICAgLy8gbXVsdGlwbGljYXRpb24gZmFjdG9yIGZvciBwb2x5Z29uIGNvb3JkaW5hdGVzXG4gICAgdGhpcy53aWR0aCA9IC0xOyAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGggb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxuICAgIHRoaXMuaGVpZ2h0ID0gLTE7ICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodCBvZiB0cmFuc2Zvcm1lZCBwb2x5Z29uIC0gd2lsbCBiZSBjYWxjdWxhdGVkIHVzaW5nIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpXG4gICAgdGhpcy5pc0NlbnRlcmVkID0gZmFsc2U7ICAgICAgICAgICAgLy8gd2hldGhlciBvciBub3QgdG8gYXV0b21hdGljYWxseSB0cmFuc2xhdGUgdG8gc2NyZWVuIGNlbnRlclxuXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XG5cbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHByb3ZpZGVkIGNvb3JkaW5hdGVzIGFyZSBpbnNpZGUgcG9seWdvbiBkZWZpbmVkIGJ5IHRoaXMgUGF0aFxuICBjb250YWlucyh4LCB5KSB7XG4gICAgcmV0dXJuIGluc2lkZShbeCwgeV0sIHRoaXMucG9seWdvbik7XG4gIH1cblxuICAvLyBSZWxhdGl2ZSB0cmFuc2xhdGlvblxuICBtb3ZlQnkoeCwgeSkge1xuICAgIHRoaXMub3JpZ2luLnggKz0geDtcbiAgICB0aGlzLm9yaWdpbi55ICs9IHk7XG5cbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xuICB9XG5cbiAgLy8gQWJzb2x1dGUgdHJhbnNsYXRpb25cbiAgbW92ZVRvKHgsIHkpIHtcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcbiAgICAgIHRoaXMub3JpZ2luLnggPSB4IC0gdGhpcy53aWR0aC8yO1xuICAgICAgdGhpcy5vcmlnaW4ueSA9IHkgLSB0aGlzLmhlaWdodC8yO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9yaWdpbi54ID0geDtcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5O1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XG4gIH1cblxuICBzZXRTY2FsZShmYWN0b3IpIHtcbiAgICB0aGlzLnNjYWxlICo9IGZhY3RvcjtcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xuICAgIHRoaXMuY2FsY3VsYXRlRGltZW5zaW9ucygpO1xuXG4gICAgaWYodGhpcy5pc0NlbnRlcmVkKSB7XG4gICAgICB0aGlzLm1vdmVUbyh3aW5kb3cuaW5uZXJXaWR0aC8yLCB3aW5kb3cuaW5uZXJIZWlnaHQvMik7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIHBhdGggbGVuZ3RoIGJ5IGFkZGluZyB1cCBhbGwgbGluZSBzZWdtZW50IGxlbmd0aHMgKGRpc3RhbmNlcyBiZXR3ZWVuIHBvbHlnb24gcG9pbnRzKVxuICBnZXRUb3RhbExlbmd0aCgpIHtcbiAgICBsZXQgdG90YWxMZW5ndGggPSAwO1xuXG4gICAgZm9yKGxldCBpPTE7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBWZWMyKFxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlLFxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMV0gKiB0aGlzLnNjYWxlXG4gICAgICApLmRpc3RhbmNlKFxuICAgICAgICBWZWMyKFxuICAgICAgICAgIHRoaXMucG9seWdvbltpLTFdWzBdICogdGhpcy5zY2FsZSxcbiAgICAgICAgICB0aGlzLnBvbHlnb25baS0xXVsxXSAqIHRoaXMuc2NhbGVcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG90YWxMZW5ndGg7XG4gIH1cblxuICAvLyBDYWxjdWxhdGVzIHRoZSByZWFsIHdpZHRoIGFuZCBoZWlnaHQgb2YgdGhlIHRyYW5zZm9ybWVkIHBvbHlnb25cbiAgY2FsY3VsYXRlRGltZW5zaW9ucygpIHtcbiAgICBsZXQgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXG4gICAgICByaWdodE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXG4gICAgICB0b3BNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdLFxuICAgICAgYm90dG9tTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXTtcblxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA8IGxlZnRNb3N0Q29vcmRpbmF0ZSkge1xuICAgICAgICBsZWZ0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXTtcbiAgICAgIH0gZWxzZSBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA+IHJpZ2h0TW9zdENvb3JkaW5hdGUpIHtcbiAgICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSA8IHRvcE1vc3RDb29yZGluYXRlKSB7XG4gICAgICAgIHRvcE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV07XG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMV0gPiBib3R0b21Nb3N0Q29vcmRpbmF0ZSkge1xuICAgICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMud2lkdGggPSBNYXRoLmFicyhyaWdodE1vc3RDb29yZGluYXRlIC0gbGVmdE1vc3RDb29yZGluYXRlKTtcbiAgICB0aGlzLmhlaWdodCA9IE1hdGguYWJzKGJvdHRvbU1vc3RDb29yZGluYXRlIC0gdG9wTW9zdENvb3JkaW5hdGUpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGNvb3JkaW5hdGVzIGZvciB0aGUgXCJ0cmFuc2Zvcm1lZFwiIHZlcnNpb24gb2YgdGhpcyBwYXRoLCB0YWtpbmcgaW50byBjb25zaWRlcmF0aW9uIHRyYW5zbGF0aW9uIGFuZCBzY2FsaW5nXG4gIGNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpIHtcbiAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbiA9IFtdO1xuXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5wdXNoKFxuICAgICAgICBbXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzBdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLngsXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzFdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLnlcbiAgICAgICAgXVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmKFxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMudHlwZSA9PSAnQm91bmRzJyB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMudHlwZSA9PSAnT2JzdGFjbGVzJ1xuICAgICkge1xuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uWzBdWzFdKTtcblxuICAgICAgLy8gRHJhdyBzZXF1ZW50aWFsIGxpbmVzIHRvIGFsbCBwb2ludHMgb2YgdGhlIHBvbHlnb25cbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0sIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdKTtcbiAgICAgIH1cblxuICAgICAgLy8gRHJhdyBsaW5lIGJhY2sgdG8gZmlyc3QgcG9pbnQgdG8gY2xvc2UgdGhlIHBvbHlnb25cbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xuXG4gICAgICBzd2l0Y2godGhpcy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0JvdW5kcyc6XG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNCb3JkZXJDb2xvcjtcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLkJvdW5kc0JvcmRlclRoaWNrbmVzcztcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNGaWxsQ29sb3I7XG5cbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnT2JzdGFjbGUnOlxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLk9ic3RhY2xlRmlsbENvbG9yO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG5cbiAgICAgIC8vIERyYXcgYm91bmRpbmcgYm94XG4gICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgIC8vIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55KTtcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54ICsgdGhpcy53aWR0aCwgdGhpcy5vcmlnaW4ueSk7XG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55KTtcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xuICAgICAgLy8gdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyB0b1BhdGggfSBmcm9tICdzdmctcG9pbnRzJztcblxuLy8gcmFuZG9tKCksIHNpbWlsYXIgdG8gUHJvY2Vzc2luZydzXG4vLyBJZiB0d28gcGFyYW1ldGVycyBhcmUgcGFzc2VkLCB0aGV5IGFyZSBpbnRlcnByZXRlZCBhcyB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBvZiB0aGUgZGVzaXJlZCByYW5nZVxuLy8gSWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHBhc3NlZCwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIG1heGltdW0sIHdoaWxlIHplcm8gaXMgdXNlZCBhcyB0aGUgbWluaW11bVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcbiAgICBtYXggPSBtaW47XG4gICAgbWluID0gMDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBhcmd1bWVudHMgdG8gYmUgbnVtYmVycycpO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gQ29udmVydHMgYSBudW1iZXIgZnJvbSBvbmUgcmFuZ2UgdG8gYW5vdGhlclxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgb3JpZ2luYWxMb3dlciwgb3JpZ2luYWxVcHBlciwgbmV3TG93ZXIsIG5ld1VwcGVyKSB7XG4gIHJldHVybiBuZXdMb3dlciArIChuZXdVcHBlciAtIG5ld0xvd2VyKSAqICgodmFsdWUgLSBvcmlnaW5hbExvd2VyKSAvIChvcmlnaW5hbFVwcGVyIC0gb3JpZ2luYWxMb3dlcikpO1xufVxuXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIHBvaW50IGNvb3JkaW5hdGVzIChhbHNvIGFycmF5cywgd2l0aCB0d28gZW50cmllcykgZm9yIHBvaW50cyBhcnJhbmdlZCBpbiBhIGNpcmNsZVxuZXhwb3J0IGZ1bmN0aW9uIGdldENpcmNsZU9mUG9pbnRzKGN4LCBjeSwgcmFkaXVzLCByZXNvbHV0aW9uKSB7XG4gIGxldCBhbmdsZSwgeCwgeTtcbiAgbGV0IHBvaW50cyA9IFtdO1xuXG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XG4gICAgeCA9IGN4ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZSkpO1xuICAgIHkgPSBjeSArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcblxuICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufVxuXG4vLyBDcmVhdGVzIGFuIFNWRyBkb2N1bWVudCBjb250YWluaW5nIGFsbCBvZiB0aGUgdmlzaWJsZSBnZW9tZXRyeSwgdGhlbiBwdXNoZXMgaXQgdG8gdGhlIGNsaWVudFxuLy8gLSBUcmlnZ2VyZWQgYnkgcHJlc3NpbmcgYGVgIGluIGFueSBza2V0Y2guIFNlZSBLZXlib2FyZEludGVyYWN0aW9ucy5qcyBmb3IgZGVmaW5pdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNWRyhuZXR3b3JrKSB7XG4gIC8vIFNldCB1cCA8c3ZnPiBlbGVtZW50XG4gIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAvLyBDcmVhdGUgPGxpbmU+cyBmb3IgZWFjaCBicmFuY2ggc2VnbWVudFxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCcmFuY2hlcykge1xuICAgIGxldCBub2RlTGluZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xuXG4gICAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcbiAgICAgIGlmKG5vZGUucGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgbGV0IGxpbmVOb2RlID0gYFxuICAgICAgICAgIDxsaW5lXG4gICAgICAgICAgICB4MT1cIiR7bm9kZS5wYXJlbnQucG9zaXRpb24ueH1cIlxuICAgICAgICAgICAgeTE9XCIke25vZGUucGFyZW50LnBvc2l0aW9uLnl9XCJcbiAgICAgICAgICAgIHgyPVwiJHtub2RlLnBvc2l0aW9uLnh9XCJcbiAgICAgICAgICAgIHkyPVwiJHtub2RlLnBvc2l0aW9uLnl9XCJcbiAgICAgICAgICAgIHN0cm9rZT1cImJsYWNrXCJcbiAgICAgICAgICAvPlxuICAgICAgICBgO1xuXG4gICAgICAgIG5vZGVMaW5lc0dyb3VwLmlubmVySFRNTCArPSBsaW5lTm9kZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZUxpbmVzR3JvdXApO1xuICB9XG5cbiAgLy8gQ3JlYXRlIDxwYXRoPnMgZm9yIGJvdW5kc1xuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dCb3VuZHMpIHtcbiAgICBpZihuZXR3b3JrLmJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgYm91bmRzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcblxuICAgICAgZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xuICAgICAgICBib3VuZHNHcm91cC5hcHBlbmRDaGlsZChcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKGJvdW5kLnBvbHlnb24pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChib3VuZHNHcm91cCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3JlYXRlIDxwYXRoPnMgZm9yIG9ic3RhY2xlc1xuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dPYnN0YWNsZXMpIHtcbiAgICBpZihuZXR3b3JrLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgb2JzdGFjbGVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcblxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xuICAgICAgICBvYnN0YWNsZXNHcm91cC5hcHBlbmRDaGlsZChcbiAgICAgICAgICBnZXRQYXRoRWxGcm9tUG9pbnRzKG9ic3RhY2xlLnBvbHlnb24pXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChvYnN0YWNsZXNHcm91cCk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGRvY3VtZW50IGFzIGEgQmxvYiBhbmQgZm9yY2UgYSBkb3dubG9hZCBhcyBhIHRpbWVzdGFtcGVkIC5zdmcgZmlsZVxuICBjb25zdCBzdmdEb2N0eXBlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCIgc3RhbmRhbG9uZT1cIm5vXCI/Pic7XG4gIGNvbnN0IHNlcmlhbGl6ZWRTdmcgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtzdmdEb2N0eXBlLCBzZXJpYWxpemVkU3ZnXSwgeyB0eXBlOiAnaW1hZ2Uvc3ZnK3htbDsnIH0pXG4gIHNhdmVBcyhibG9iLCAndmVuYXRpb24tJyArIERhdGUubm93KCkgKyAnLnN2ZycpO1xufVxuXG4gIC8vIENyZWF0ZSBhIDxwYXRoPiBlbGVtZW50IHdpdGggYSBwcm9wZXJseS1mb3JtYXR0ZWQgYGRgIGF0dHJpYnV0ZSBjb250YWluaW5nIGFsbCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHBhc3NlZCBwb2ludHNcbiAgZnVuY3Rpb24gZ2V0UGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcbiAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XG5cbiAgICBmb3IobGV0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcbiAgICAgIHBvaW50c1N0cmluZyArPSBwb2ludFswXSArICcsJyArIHBvaW50WzFdO1xuXG4gICAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGNsb3NlcGF0aCBjb21tYW5kIHRvIGF1dG9tYXRpY2FsbHkgZHJhdyBsaW5lIGJhY2sgdG8gaW5pdGlhbCBwb2ludFxuICAgIHBvaW50c1N0cmluZyArPSAnICcgKyBwb2ludHNbMF1bMF0gKyAnLCcgKyBwb2ludHNbMF1bMV07XG5cbiAgICBsZXQgZCA9IHRvUGF0aCh7XG4gICAgICB0eXBlOiAncG9seWxpbmUnLFxuICAgICAgcG9pbnRzOiBwb2ludHNTdHJpbmdcbiAgICB9KTtcblxuICAgIGxldCBwYXRoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcbiAgICBwYXRoRWwuc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XG5cbiAgICByZXR1cm4gcGF0aEVsO1xuICB9IiwiZXhwb3J0IGxldCBHcmVla1N0YXR1ZSA9IFtcbiAgWzE3MTEuMjEwMSwgMjgyLjk5NjRdLFxuICBbMTcxMC44MjAxLCAyNzguMzQ4MjddLFxuICBbMTcxMC42MzM4LCAyODcuMjc3OTJdLFxuICBbMTcwNC4wNTkxLCAyODUuMjU0NDZdLFxuICBbMTcwMS45Njg1LCAyOTEuMTEzNTNdLFxuICBbMTY5OC4yMDUzLCAyODYuNTgzOThdLFxuICBbMTY5My4zNTE2LCAyODguNTE1XSxcbiAgWzE2OTEuMDczNSwgMjgxLjk3NDczXSxcbiAgWzE2ODkuMDk5NSwgMjg2LjMyMjJdLFxuICBbMTY4OC4wNjY4LCAyOTEuMDIwNjZdLFxuICBbMTY4Ny4zMTk1LCAyOTUuMTQwNV0sXG4gIFsxNjg0LjI0ODcsIDI5Ny4zNDMyNl0sXG4gIFsxNjkyLjY2ODUsIDI5NS43MzMxNV0sXG4gIFsxNjkwLjAyOTUsIDI5OS4yNzU3Nl0sXG4gIFsxNjg3LjY1NDMsIDMwMi4xNDUyNl0sXG4gIFsxNjgzLjkwODgsIDMwMS45NjEzXSxcbiAgWzE2ODYuNjg1NSwgMzA2LjkyNzA2XSxcbiAgWzE2ODMuMzYyNywgMzA5LjU2NDgyXSxcbiAgWzE2NzkuODA2MywgMzA5Ljk3OTU4XSxcbiAgWzE2ODUuNjQ5MiwgMzEzLjAyNjM0XSxcbiAgWzE2OTEuNTc1LCAzMTEuOTA1M10sXG4gIFsxNjk2LjAwNzcsIDMwOS41NzgyOF0sXG4gIFsxNjkxLjU0MTUsIDMwNC45NjI1Ml0sXG4gIFsxNjk0LjQ0NDIsIDMwMS4xMjkyXSxcbiAgWzE2OTguMDI4MiwgMjk5LjA2MjVdLFxuICBbMTcwMy4wMTcyLCAzMDAuNDYyMV0sXG4gIFsxNjk5Ljg0NDYsIDI5NS4wNTIwNl0sXG4gIFsxNjk2LjI3MTEsIDI5My4zOTUyXSxcbiAgWzE3MDMuMzQ0NywgMjk2LjYzMTIzXSxcbiAgWzE3MDYuMDA5OCwgMjk0LjA0MzU4XSxcbiAgWzE3MDcuOTI2NiwgMjk4LjUxMTg0XSxcbiAgWzE3MTAuNDU3MywgMjk0LjI5MTc1XSxcbiAgWzE3MDcuMzU5OSwgMjkwLjMwODc4XSxcbiAgWzE3MTMuMzYwNiwgMjkwLjYzODAzXSxcbiAgWzE3MTUuMzIwMSwgMjk0LjM4ODhdLFxuICBbMTcxMy4xMzc4LCAyOTguMTA3ODJdLFxuICBbMTcxOS42ODc3LCAyOTUuNDI4MzhdLFxuICBbMTcxOC43OTk2LCAyOTkuOTQ5NjJdLFxuICBbMTcxNS42NTEyLCAzMDMuNTk2Ml0sXG4gIFsxNzE5LjQ2NDgsIDMwOS40MTQ1XSxcbiAgWzE3MTkuOTM2OCwgMzA0LjQxNTA3XSxcbiAgWzE3MjQuNzEwNywgMzA0LjM0OTNdLFxuICBbMTcyNS4wMTM1LCAzMDguNzY5MjZdLFxuICBbMTcyNC4wNjY4LCAyOTkuNDE5MzRdLFxuICBbMTczMC41MDQyLCAzMDcuNzIwODZdLFxuICBbMTc0Mi4zMTQ4LCAzMDguMTc1NzJdLFxuICBbMTc1MC40MzYyLCAzMDUuMTc0MV0sXG4gIFsxNzUxLjY4NCwgMjk4LjM3ODNdLFxuICBbMTc1OS4yMTc0LCAzMDIuMDc3MThdLFxuICBbMTc2My43OTY2LCAzMjMuNTg5MTRdLFxuICBbMTc1NS44NjE2LCAzMjUuMTk2NV0sXG4gIFsxNzU5LjY2NDcsIDMzMC44OTE1NF0sXG4gIFsxNzUxLjY1MjEsIDMzMC41NTY5XSxcbiAgWzE3NDEuNzE0NCwgMzM4LjEzNTA3XSxcbiAgWzE3NDAuNzgzNywgMzUzLjI4MzA1XSxcbiAgWzE3MzUuNTk1MSwgMzUwLjk3Nzc4XSxcbiAgWzE3NDUuMDc0MSwgMzMyLjM4NjNdLFxuICBbMTcxOS42MjYsIDMyNS4xMTA3Ml0sXG4gIFsxNzE0LjI3NjEsIDMyMS4yNTI0N10sXG4gIFsxNzEzLjM2OTksIDMxNi4wNTgzXSxcbiAgWzE3MDcuODYxNiwgMzE0Ljc5MjA1XSxcbiAgWzE3MDcuNTY5LCAzMTkuNTEzODVdLFxuICBbMTcwMS40ODk2LCAzMTkuNTg1MzNdLFxuICBbMTY5Ny4wNTMsIDMxNi42NTQ2Nl0sXG4gIFsxNjk1Ljg0NTgsIDMyMS44OTM5NV0sXG4gIFsxNjk3LjE5ODksIDMyNi44OTc0Nl0sXG4gIFsxNjk0LjM0MDMsIDMzMC4zMDU3M10sXG4gIFsxNjkwLjM0MTYsIDMyOS40MDA3M10sXG4gIFsxNjkwLjA5MDMsIDMyNC40NTQ3XSxcbiAgWzE2OTMuNDQ0MywgMzI2LjMzMDI2XSxcbiAgWzE3MDAuMDY4NSwgMzI0LjEyMzVdLFxuICBbMTcwNC42NTc1LCAzMjQuMTE2OV0sXG4gIFsxNzAxLjQyODEsIDMyOC43NjZdLFxuICBbMTcwNS43NTQ1LCAzMjguNzMxNTddLFxuICBbMTcwOS42MDksIDMzMi42NDYxMl0sXG4gIFsxNzA0Ljg5MjgsIDMzMy4wNTIzXSxcbiAgWzE3MDAuNzM4OCwgMzMzLjUwNjE2XSxcbiAgWzE2OTcuOTgxNywgMzMwLjk0Mjk2XSxcbiAgWzE2OTYuMDg3NCwgMzM0LjUyMTg1XSxcbiAgWzE2OTYuMDY0MiwgMzM4LjI1MjkzXSxcbiAgWzE2OTIuMTQ4NywgMzMzLjQ1Mzk4XSxcbiAgWzE2ODguNzc4OCwgMzM1LjE4NDRdLFxuICBbMTY4Ny4wMTcxLCAzMzIuMTQ5NzJdLFxuICBbMTY4Ni40NDM1LCAzMjguNTgwMzJdLFxuICBbMTY4NS4wMTU5LCAzMjUuMjY2NDVdLFxuICBbMTY3OC42OTE4LCAzMTMuOTI4MTNdLFxuICBbMTY3Mi44MjMsIDMxNi44MDQ3NV0sXG4gIFsxNjY5LjAzMDMsIDMxNC45ODg2NV0sXG4gIFsxNjczLjgyNTcsIDMxMy4yMDE3OF0sXG4gIFsxNjc2LjcwNTEsIDMxOC4wMTkxN10sXG4gIFsxNjgwLjQxNzIsIDMyNC4wNzQzN10sXG4gIFsxNjgxLjkzODEsIDMyOS40NDc0NV0sXG4gIFsxNjc3LjQyMTYsIDMyOC4yNTc3XSxcbiAgWzE2NzEuNzI4MSwgMzI5LjE4OTAzXSxcbiAgWzE2NzAuNzU3OSwgMzMzLjcyNTA0XSxcbiAgWzE2NzUuNTkxNCwgMzMyLjU2NzU3XSxcbiAgWzE2NzkuNzU5OSwgMzMzLjgzMTU0XSxcbiAgWzE2ODMuNzgzLCAzMzQuMTAxN10sXG4gIFsxNjgyLjA5ODksIDMzOC40ODc1XSxcbiAgWzE2ODYuNTE0NCwgMzM4LjU0NTk2XSxcbiAgWzE2ODkuNjMwOSwgMzQyLjQ0NTE2XSxcbiAgWzE2OTEuNTMwNSwgMzM3LjgzNTQ4XSxcbiAgWzE2OTMuNTM5MiwgMzQxLjIyNzddLFxuICBbMTY5Ni45MDIyLCAzNDMuMzI1MTNdLFxuICBbMTY5Ny41ODgzLCAzNDguMjA4NzRdLFxuICBbMTcwMy40NDQ2LCAzNDcuNjEzNzddLFxuICBbMTcwMi40NzM0LCAzNDIuMTk2MjNdLFxuICBbMTY5OS43MDg5LCAzMzcuODE5NDZdLFxuICBbMTcwMy42OTAyLCAzMzcuMjYyNF0sXG4gIFsxNzA3LjkzNzEsIDMzNy45MDgwMl0sXG4gIFsxNzEzLjM1MiwgMzM3LjUxODhdLFxuICBbMTcyNi45NjIzLCAzMzkuNDIzNjVdLFxuICBbMTczMi40NTkyLCAzNDQuMjcxMjRdLFxuICBbMTcxOC42MTg3LCAzNTguMTcxODRdLFxuICBbMTcxNi41NzMxLCAzNjUuNDg0MzhdLFxuICBbMTcxMi4wNzMsIDM2NC41NjgwOF0sXG4gIFsxNzE2LjAyMSwgMzcwLjI3NjczXSxcbiAgWzE3MjAuODc1NiwgMzY3LjM4NDI1XSxcbiAgWzE3MjEuMDg5MiwgMzYyLjM3MTNdLFxuICBbMTcyMS44MDQsIDM1Ni4wMDA5NV0sXG4gIFsxNzI0Ljc1MSwgMzUyLjc1NjU2XSxcbiAgWzE3MjguOTI1OCwgMzQ5LjgxNjI1XSxcbiAgWzE3MjQuMTc3NSwgMzQ2LjAxMTRdLFxuICBbMTcxOC40NjczLCAzNDYuMDYxOThdLFxuICBbMTcxOS41MTUxLCAzNTEuMjYyNDVdLFxuICBbMTcxNC4wMzQ4LCAzNTAuMzYxMDVdLFxuICBbMTcwOS4yNjI3LCAzNDkuMTgyODZdLFxuICBbMTcxNS4yMTk3LCAzNTUuMzE5MjddLFxuICBbMTcxNS4yMjU2LCAzNjAuNTE4XSxcbiAgWzE3MTEuMTI0OCwgMzU5LjU3MzU1XSxcbiAgWzE3MDkuNzM4OCwgMzU0LjUwMTE2XSxcbiAgWzE3MDUuMjAzNCwgMzUyLjM0MjNdLFxuICBbMTcwMy41MzkyLCAzNTYuMzM4XSxcbiAgWzE3MDYuODE5NywgMzU5LjEwN10sXG4gIFsxNzA2LjQwNTMsIDM2My4yNDY5XSxcbiAgWzE3MDEuNDI0MSwgMzYwLjgyMjc1XSxcbiAgWzE3MDAuMDM4MiwgMzUzLjUyNjQ2XSxcbiAgWzE2OTMuNzY5NSwgMzUyLjU1NjM0XSxcbiAgWzE2ODAuOTM3LCAzNDcuNjczNTVdLFxuICBbMTY4NC43OSwgMzQzLjMxMjg0XSxcbiAgWzE2NzIuMjczNywgMzQ4LjMyMTc1XSxcbiAgWzE2NzEuMTE2MSwgMzQzLjMyOTA3XSxcbiAgWzE2NjcuNjMwNCwgMzQ1LjkxNDk4XSxcbiAgWzE2NzYuNDQxMywgMzQ2LjQ4MDQ3XSxcbiAgWzE2NzkuODkwOSwgMzQyLjUxNzg4XSxcbiAgWzE2NzUuMDk2MywgMzQxLjQ2OTQyXSxcbiAgWzE2NzcuNTc0LCAzMzcuNjA5Ml0sXG4gIFsxNjczLjY1MiwgMzM2LjY4ODk2XSxcbiAgWzE2NzAuMTksIDMzOC44MTM3OF0sXG4gIFsxNjY2LjM1MDYsIDM0MC43NTg4OF0sXG4gIFsxNjY1LjkyMTUsIDMzNi4xODE4NV0sXG4gIFsxNjY2LjkzMDgsIDMzMi4xODUxOF0sXG4gIFsxNjY3LjA5LCAzMjguMzQwMjddLFxuICBbMTY2OS42MjYzLCAzMjQuNzI5NThdLFxuICBbMTY3NC4wMzE5LCAzMjQuOTUwMzJdLFxuICBbMTY3My4wNDk4LCAzMjEuMDI1MjddLFxuICBbMTY2OS4zMTA5LCAzMTkuNjI5NTJdLFxuICBbMTY2Ni40NDQxLCAzMjEuOTk4OTZdLFxuICBbMTY2NC41OTAyLCAzMjUuMDkyNDRdLFxuICBbMTY2Mi40NjYzLCAzMjguMzMyMTJdLFxuICBbMTY2Mi4zOTA5LCAzMzEuOTI4NDRdLFxuICBbMTY2MS4wOTk1LCAzMzUuNDA3MjZdLFxuICBbMTY1Ny4zMDgzLCAzMzcuNzg0M10sXG4gIFsxNjYxLjgzODEsIDMzOS4zMzM0XSxcbiAgWzE2NjMuNDQ2NywgMzQzLjgyNjY2XSxcbiAgWzE2NTkuMDc1LCAzNDIuODU0NDZdLFxuICBbMTY2MC41NTY0LCAzNDcuNjE0XSxcbiAgWzE2NjQuNjgxOSwgMzQ4Ljg4NDEyXSxcbiAgWzE2NzYuMTgyNCwgMzUyLjI0NDJdLFxuICBbMTY4OS42MjE4LCAzNTYuNzYwMjJdLFxuICBbMTY5Ny4xMTcsIDM1Ny42MzM1XSxcbiAgWzE2OTUuOTQ4NywgMzYyLjQxMzAyXSxcbiAgWzE2OTkuODg1NCwgMzY1Ljc4NTg2XSxcbiAgWzE2OTYuNjAwOCwgMzcwLjI5MTMyXSxcbiAgWzE3MDAuNzI5MSwgMzcxLjQ0MTYyXSxcbiAgWzE3MDMuNzU5OCwgMzc0LjQzNTE1XSxcbiAgWzE3MDcuMjE0OCwgMzcyLjAxNzU4XSxcbiAgWzE3MDMuOTc0LCAzNjcuOTAzMzJdLFxuICBbMTcwOC40MDg0LCAzNjcuNzE5NDhdLFxuICBbMTcxMi4wNDYxLCAzNjkuMjI5OThdLFxuICBbMTcxMi4xNzkyLCAzNzMuNTM5MThdLFxuICBbMTcxMC43NjA3LCAzODUuNTAwOF0sXG4gIFsxNzE1Ljc5MDQsIDM4Mi4zOTk3NV0sXG4gIFsxNzM0LjEyOTksIDM4MS4zMjc0NV0sXG4gIFsxNzI2LjA1MTYsIDM2NC45MDg2Nl0sXG4gIFsxNzI2Ljg1NDUsIDM1OS44ODUzNV0sXG4gIFsxNzMwLjY3MTgsIDM1Ni4yNjE0XSxcbiAgWzE3NDguNTY1LCAzNjguODA5OF0sXG4gIFsxNzQ0LjI5ODEsIDM3My4yNjUxNF0sXG4gIFsxNzM3LjI4NTMsIDM3NS4zMTk0M10sXG4gIFsxNzIzLjg3MzksIDM3Ni45MTM1NF0sXG4gIFsxNzM4LjU3NCwgMzg0LjkxOTRdLFxuICBbMTc1MC4wNTc0LCAzOTIuOTUyMTVdLFxuICBbMTc0NS4zNjM4LCAzOTQuODc2N10sXG4gIFsxNzQ1LjgxMjcsIDM5OS41NTQwMl0sXG4gIFsxNzQxLjU3NTMsIDM5Ni42MzA0Nl0sXG4gIFsxNzQyLjUyMTUsIDQwMS45MTQxOF0sXG4gIFsxNzQxLjExMTUsIDQwNi4wNjkyXSxcbiAgWzE3MzguMDc2NCwgNDAyLjUyNDZdLFxuICBbMTczNi43OTM1LCA0MDcuNjE3MjhdLFxuICBbMTczMy42OTA4LCA0MTEuMjk4OF0sXG4gIFsxNzM0Ljc0OTQsIDQxNi4wMjM1M10sXG4gIFsxNzM4LjcwNTksIDQxMy45MzI2Ml0sXG4gIFsxNzQwLjAzMTUsIDQxMC40NDM4NV0sXG4gIFsxNzQ0LjA1MjUsIDQwOS44NDczNV0sXG4gIFsxNzQ1LjU1MTgsIDQwNi4yNzE4XSxcbiAgWzE3NDcuMzk4OSwgNDAzLjA2OTldLFxuICBbMTc1MS4xMDkxLCA0MDEuMjEwMDJdLFxuICBbMTc1NS40Njc0LCAzOTkuNjA1NTNdLFxuICBbMTc0OC45MjA4LCAzOTcuNDQ2ODRdLFxuICBbMTc1Mi41Njk1LCAzOTYuNzg2NjJdLFxuICBbMTc1NS42NTg0LCAzOTQuNzY1ODddLFxuICBbMTc1NC4xNzI2LCAzOTAuOTI3Nl0sXG4gIFsxNzU4LjczNjgsIDM5MS4xODIxXSxcbiAgWzE3NjIuNDQ5OCwgMzkyLjg5NTA4XSxcbiAgWzE3NjYuODEyNywgMzkwLjM0OTA2XSxcbiAgWzE3NzAuODk0MywgMzg3LjExODldLFxuICBbMTc3MC41MTYyLCAzODMuMTIyODZdLFxuICBbMTc3NS44NjEyLCAzODMuMzg2OV0sXG4gIFsxNzc1LjMyNTgsIDM4Ny42Njg0Nl0sXG4gIFsxNzc4Ljk3ODMsIDM5MC41MDc4XSxcbiAgWzE3ODIuODc5MiwgMzg5LjI3NDQ4XSxcbiAgWzE3ODYuOTUxMiwgMzg4LjUzMzAyXSxcbiAgWzE3OTEuOTM0OCwgMzg4LjMwODE3XSxcbiAgWzE3OTMuNjI2MiwgMzgzLjc0NTczXSxcbiAgWzE3OTMuNjkxOSwgMzk0LjM2MzddLFxuICBbMTc5MC4wMTgxLCAzOTIuNzAxMzVdLFxuICBbMTc4NS4zNzkyLCAzOTMuNzY0N10sXG4gIFsxNzgwLjc1MzQsIDM5NC44NDA4XSxcbiAgWzE3NzYuMzQxLCAzOTUuMDI5MzZdLFxuICBbMTc3NC45MzA5LCAzOTEuNzgxN10sXG4gIFsxNzcxLjE0MzMsIDM5MS41NjA4XSxcbiAgWzE3NjkuMjMxMiwgMzk1LjMzOTE3XSxcbiAgWzE3NjUuNjI3NCwgMzk0Ljk3NDhdLFxuICBbMTc3Mi42MjQxLCAzOTYuOTcyMDVdLFxuICBbMTc3MS4zMDc3LCA0MDAuOTc2MzhdLFxuICBbMTc3MS44MzY3LCA0MDUuMzYyXSxcbiAgWzE3NzUuNDgxOCwgNDAyLjg1MzI0XSxcbiAgWzE3NzYuNTkzNiwgMzk4Ljk1MTZdLFxuICBbMTc4MC40NjA0LCAzOTkuODY0ODRdLFxuICBbMTc4NC40MzQzLCAzOTguNDQ4NTVdLFxuICBbMTc4OC42Mjk5LCAzOTcuODg2NjZdLFxuICBbMTc5Mi42NjY1LCAzOTguNTczM10sXG4gIFsxNzk2LjgwMzcsIDQwMS4wNDA0N10sXG4gIFsxNzk3LjI1MzIsIDM5Ny4xODYzNF0sXG4gIFsxODAwLjYxODcsIDM5NS4zMzE4XSxcbiAgWzE4MDIuMDU3NywgMzkxLjUwMDU1XSxcbiAgWzE4MDUuNzkzNywgMzk2LjIxMjZdLFxuICBbMTgwMi4xNjkxLCA0MDAuMDM4M10sXG4gIFsxODAzLjE4ODcsIDQwNS4wMDg5N10sXG4gIFsxODA3LjE1MzIsIDQwNi44OTIwM10sXG4gIFsxODEwLjkzNDMsIDQwOC41NjYyOF0sXG4gIFsxODE0LjIwNTEsIDQxMS42MDc4XSxcbiAgWzE4MTguNzQ4MywgNDExLjA0Nzk3XSxcbiAgWzE4MjQuNTEyOCwgNDA4LjU1MjZdLFxuICBbMTgyOS45Nzc3LCA0MDcuODMxNjNdLFxuICBbMTgzNC43Nzg3LCA0MDUuMzY1XSxcbiAgWzE4NDAuMjQ2NiwgNDExLjg1MTQ0XSxcbiAgWzE4MzUuNzAyOSwgNDEwLjE2N10sXG4gIFsxODM1LjIxNjYsIDQxNS45NTE2M10sXG4gIFsxODM5Ljk2MzcsIDQxNy40OTkzNl0sXG4gIFsxODQ0LjI0OTQsIDQxNS41MV0sXG4gIFsxODQ3LjU5NDcsIDQxOS4xMTA1N10sXG4gIFsxODQ5LjYyOTQsIDQyNC4zMjkyXSxcbiAgWzE4NDQuNzkzLCA0MjMuMTgxMTVdLFxuICBbMTg0MC44MTcsIDQyMi41NjA5XSxcbiAgWzE4NDEuMTIzLCA0MjcuNTUyOTVdLFxuICBbMTg0NS43NzQyLCA0MjkuNDEyODRdLFxuICBbMTg1MS41ODMxLCA0MjguNjI4NDhdLFxuICBbMTg1NC41NjkyLCA0MzIuODQ3OTZdLFxuICBbMTg0OC43NjUsIDQzNC4wMDI2Ml0sXG4gIFsxODQzLjk3NDcsIDQzNS44OTAwOF0sXG4gIFsxODQ3LjI5MzUsIDQ0MC40MTRdLFxuICBbMTg1Mi4zNzc4LCA0MzguMDQ4OTJdLFxuICBbMTg1My42OTA0LCA0NDMuMjMyNDJdLFxuICBbMTg0OC41NzU3LCA0NDYuNDQwMDNdLFxuICBbMTg0Mi43MTUxLCA0NDkuNjM3OF0sXG4gIFsxODM4Ljc2NTksIDQ1NC41MzQ4OF0sXG4gIFsxODM0LjIzNzMsIDQ3MC42OTkyMl0sXG4gIFsxODI4Ljc1ODgsIDQ3NS4zNTc1XSxcbiAgWzE4MjkuNDA2MSwgNDY1LjczMTAyXSxcbiAgWzE4NDEuNTA3NiwgNDY2Ljg0MzU3XSxcbiAgWzE4MzYuMjU0MiwgNDYyLjUyMTgyXSxcbiAgWzE4MzEuNTE1NiwgNDU3LjU0ODgzXSxcbiAgWzE4MjQuNTkzNSwgNDYwLjkyMzldLFxuICBbMTgxOS4zMzAxLCA0NTYuOTc3MDVdLFxuICBbMTgxMy45NTAxLCA0NTMuMDkwMzNdLFxuICBbMTgxNC42NzcsIDQ0NS45MDIwNF0sXG4gIFsxODIwLjU4MTUsIDQ0OC4xNjQ1Ml0sXG4gIFsxODI1LjczMDIsIDQ1Mi42NzM4M10sXG4gIFsxODI4LjUyODEsIDQ0Ni4wMDQ3M10sXG4gIFsxODMyLjcyMzksIDQ1MC42NTk2NF0sXG4gIFsxODM2LjkxMzEsIDQ0Ni4zNTk3XSxcbiAgWzE4MzQuODE2MiwgNDQxLjIwMTIzXSxcbiAgWzE4MjkuODUwMywgNDQwLjM3MDgyXSxcbiAgWzE4MjQuMjA3NCwgNDQxLjYxNTQyXSxcbiAgWzE4MTkuMTgwNSwgNDQwLjg0MDQyXSxcbiAgWzE4MTQuMTEsIDQzOS4yNjM2XSxcbiAgWzE4MDkuNTM0NCwgNDQyLjY2ODgyXSxcbiAgWzE4MDguNDkyNiwgNDQ4LjU0NjZdLFxuICBbMTgxMy4xNzcsIDQ2MS4zNzEyMl0sXG4gIFsxODIzLjkwNTYsIDQ3MC41Mjg3XSxcbiAgWzE4MTguNjExMSwgNDY2Ljc3MDRdLFxuICBbMTgxMi41MjA4LCA0NzAuMDU1NDJdLFxuICBbMTgwNi4wNzE4LCA0NjYuNTU5NTddLFxuICBbMTgwNS43MjUsIDQ2MC4zNzQ2M10sXG4gIFsxODA3LjQ3OTIsIDQ1NC45MTI5Nl0sXG4gIFsxODAxLjkwODksIDQ1MS40MDY3XSxcbiAgWzE3OTkuNDc1MywgNDU3LjMwOTE3XSxcbiAgWzE3OTkuNDEwNCwgNDY0LjI3MTldLFxuICBbMTc5My40MjQ5LCA0NjYuOTA4M10sXG4gIFsxNzg3Ljg1NDIsIDQ2NC42MTg3NF0sXG4gIFsxNzkzLjI1OTUsIDQ1OS42MzIzXSxcbiAgWzE3OTQuMjgwMiwgNDUyLjU5Nzk2XSxcbiAgWzE3ODguODg5MiwgNDU0LjQwMjc3XSxcbiAgWzE3ODYuNDE3NCwgNDU5LjM0MTA2XSxcbiAgWzE3ODguNDEwMiwgNDQ5LjAzNzddLFxuICBbMTc5Mi4yMzkzLCA0NDQuMzc3MjZdLFxuICBbMTgwMC4wOTk5LCA0MzguMDUxMzNdLFxuICBbMTgwNC4wMzIzLCA0MzQuNTk2OTJdLFxuICBbMTgwOC4xNjMsIDQzMS4zNjIzN10sXG4gIFsxODA3LjY4MjksIDQyMy40ODE5XSxcbiAgWzE4MDUuNDcyOSwgNDI2Ljk0OTNdLFxuICBbMTgwMi42MzY2LCA0MjkuNjY2NzJdLFxuICBbMTc5OS4zMDA1LCA0MzIuNDc1MDRdLFxuICBbMTc5NS40NDg0LCA0MzMuMTI0ODVdLFxuICBbMTc5MC43ODkyLCA0MzQuMDQxN10sXG4gIFsxNzg3LjUzNzUsIDQzMC44NDg0XSxcbiAgWzE3ODIuOTMwNSwgNDI4LjU3OTQ0XSxcbiAgWzE3ODUuNzQ4MiwgNDIyLjc4OTldLFxuICBbMTc4OS4yMDAxLCA0MjUuOTQwNV0sXG4gIFsxNzkzLjgxNTgsIDQyOC41Nzc5N10sXG4gIFsxNzkzLjk4OSwgNDIzLjYxNV0sXG4gIFsxNzkwLjQwNTMsIDQyMC4zNDExM10sXG4gIFsxNzk0LjkwNDcsIDQxOC4zMDE5N10sXG4gIFsxNzk1LjExMzQsIDQxNC4xNTY0M10sXG4gIFsxNzkwLjc1ODQsIDQwOC43NzUxNV0sXG4gIFsxNzg2LjMzNDIsIDQwNi45MzMxN10sXG4gIFsxNzgyLjMxNjIsIDQwOC4yNTkxNl0sXG4gIFsxNzc5LjEwNzQsIDQxMC45OTk3XSxcbiAgWzE3ODMuNjAwMSwgNDEzLjMzMjM0XSxcbiAgWzE3ODcuMTE5NiwgNDExLjM3MTUyXSxcbiAgWzE3OTAuNTI2MSwgNDE0LjY1MzVdLFxuICBbMTc4Ni42MDM1LCA0MTcuMjc0MTddLFxuICBbMTc4Mi4zNDQ2LCA0MTkuMTA3NDhdLFxuICBbMTc3OS45MDIzLCA0MTUuNjEyMTVdLFxuICBbMTc3Ni4wNjM1LCA0MTMuOTc4MjddLFxuICBbMTc3My4wMjQ4LCA0MTYuODcxMV0sXG4gIFsxNzcyLjE1NjIsIDQyMS4wMDc2Nl0sXG4gIFsxNzc3LjA5NCwgNDE5Ljk4OTA3XSxcbiAgWzE3ODAuODcwOCwgNDIzLjcyNDk4XSxcbiAgWzE3NzYuNzU4OCwgNDI1Ljk0NTVdLFxuICBbMTc4My44ODE2LCA0MzQuODQyMzVdLFxuICBbMTc3OC41NzIsIDQzNy4wMTE5M10sXG4gIFsxNzc4LjI4NTksIDQzMS4xMzgxNV0sXG4gIFsxNzcyLjE1NzgsIDQzMC4yMzI4XSxcbiAgWzE3NzIuMTg3MSwgNDI1Ljc2NF0sXG4gIFsxNzY4LjI0MjEsIDQyMy45MzExXSxcbiAgWzE3NjYuNzE1MywgNDE5LjYyOTgyXSxcbiAgWzE3NjguNjY3NSwgNDE1LjgxMzFdLFxuICBbMTc2NS45ODgzLCA0MTIuNjE5N10sXG4gIFsxNzYxLjQ3MiwgNDExLjc2OV0sXG4gIFsxNzU3LjIzMTYsIDQxMC45MDQxN10sXG4gIFsxNzU2Ljc3NzcsIDQwNy4wMzMxN10sXG4gIFsxNzU0LjMzMzcsIDQwMy44ODI3NV0sXG4gIFsxNzUwLjI5NzQsIDQwNS45NzgxMl0sXG4gIFsxNzUyLjg0NzksIDQwOC45MjQ0NF0sXG4gIFsxNzUzLjE4MDIsIDQxMi44OTgzOF0sXG4gIFsxNzUwLjU3MSwgNDIwLjE5MTI1XSxcbiAgWzE3NTIuMzMwMSwgNDI0LjI3MzA0XSxcbiAgWzE3NDYuOTM4LCA0MjMuODg0MDNdLFxuICBbMTc0Ni4xMTMyLCA0MTguOTEwMTNdLFxuICBbMTc0OC45MzI3LCA0MTQuOTkwNjZdLFxuICBbMTc0OC40MzE1LCA0MTAuMzU4N10sXG4gIFsxNzQ0LjQ4NTgsIDQxMy44NDQ1NF0sXG4gIFsxNzQxLjk5OTQsIDQxNy4wODg4N10sXG4gIFsxNzM4LjI1NDYsIDQxOS4yOTUzOF0sXG4gIFsxNzQyLjA2MzEsIDQyMS44NjEzXSxcbiAgWzE3NDEuNDQyNCwgNDI2LjAwNzE3XSxcbiAgWzE3NDUuMTQzNCwgNDI4LjIyNTA3XSxcbiAgWzE3NDkuMTU0OSwgNDI5LjQyNjAzXSxcbiAgWzE3NTMuMzExMywgNDI5LjMwOTQyXSxcbiAgWzE3NTYuNjA3NywgNDI2Ljk1MDMyXSxcbiAgWzE3NTguMTczMiwgNDIzLjM4MDg2XSxcbiAgWzE3NTYuMzA1NCwgNDE5Ljc4NzJdLFxuICBbMTc1My4xOTQ1LCA0MTYuOTIzOV0sXG4gIFsxNzU4LjAzNTIsIDQxNS40NTM5NV0sXG4gIFsxNzYyLjg2ODIsIDQxNi4zMDc5Ml0sXG4gIFsxNzYxLjYxNDcsIDQyMC40NjA4OF0sXG4gIFsxNzYzLjc3MjcsIDQyNC41MTkzOF0sXG4gIFsxNzYxLjE2NjEsIDQyOC4xMTldLFxuICBbMTc2Ni43MjczLCA0MjguOTEyOF0sXG4gIFsxNzY3Ljk4OTQsIDQzNC4wMDIwNF0sXG4gIFsxNzc0LjI3MDEsIDQzNC42MTYzM10sXG4gIFsxNzcwLjgxMTUsIDQzNy44Mjc4NV0sXG4gIFsxNzczLjEyNzksIDQ0MS41NDg2NV0sXG4gIFsxNzcxLjg5NiwgNDQ2LjI3MjQzXSxcbiAgWzE3NzEuODM1LCA0NTEuMzc1MzddLFxuICBbMTc2Ni4zMDQyLCA0NTIuNTA3NzVdLFxuICBbMTc3MS40MDEyLCA0NTYuMTkzMzNdLFxuICBbMTc3MC4wNzkxLCA0NjAuNzg1XSxcbiAgWzE3NjguMzM5OCwgNDY0Ljk5NDM1XSxcbiAgWzE3NjguMDUxOCwgNDcwLjA1NjUyXSxcbiAgWzE3NzAuOTM5MywgNDczLjg2OTU3XSxcbiAgWzE3NzcuMDAxNywgNDc2LjUxNDk4XSxcbiAgWzE3NzguMjcsIDQ3MS4wNjM4XSxcbiAgWzE3NzMuOTUxNCwgNDY2Ljc1NTNdLFxuICBbMTc3NS43NDc0LCA0NjAuNjMzMjRdLFxuICBbMTc4MC43NzE5LCA0NTguNjU0MjddLFxuICBbMTc4My4xMzM5LCA0NTMuMjQzMV0sXG4gIFsxNzgxLjk2NTEsIDQ0Ny41NjYwNF0sXG4gIFsxNzc2Ljc3MTIsIDQ0OC41MjEyNF0sXG4gIFsxNzc3LjA5MzUsIDQ1NC4xMzMzNl0sXG4gIFsxNzc3Ljg0NSwgNDQyLjg0MzJdLFxuICBbMTc4Mi45NDU3LCA0NDAuNjQ3ODNdLFxuICBbMTc4Ni41NDU5LCA0NDQuMDQyNDVdLFxuICBbMTc4OC44MjYyLCA0MzguOTUzNThdLFxuICBbMTc5NC41MTgxLCA0MzguMzQ2NTNdLFxuICBbMTc5Ny44MjEzLCA0NDIuNjc1NzVdLFxuICBbMTc5Ny4wMzQ4LCA0NDcuOTY2MDZdLFxuICBbMTgwMy4xMDAyLCA0NDUuMjEyMjhdLFxuICBbMTgwNC44NTA4LCA0NDAuMDk1NjRdLFxuICBbMTgwOC44MzMzLCA0MzYuODUxNTZdLFxuICBbMTgxMi43MjUzLCA0MzMuOTc5NzRdLFxuICBbMTgxNC40OTQxLCA0MjkuNjgyN10sXG4gIFsxODEwLjkxNjYsIDQyNy4xMTkzMl0sXG4gIFsxODEyLjAwNzgsIDQyMi4yMDg1Nl0sXG4gIFsxODE1LjgzNjgsIDQyNC4wNjkwNl0sXG4gIFsxODE5LjMwNTMsIDQyMS45ODI2XSxcbiAgWzE4MjAuNDk3MywgNDE3LjIyMDI4XSxcbiAgWzE4MTYuMDY3NywgNDE2LjYwNDM0XSxcbiAgWzE4MTIuMDU0OSwgNDE3Ljg2MjY3XSxcbiAgWzE4MDkuNDc1MSwgNDEzLjY0ODVdLFxuICBbMTgwNC44MjQ3LCA0MTAuOTIwNzJdLFxuICBbMTgwNC41NzUyLCA0MTUuNzUwNjddLFxuICBbMTgwNy4yNzMxLCA0MTkuMDM1XSxcbiAgWzE4MDIuOTYzMywgNDIyLjI5NjMzXSxcbiAgWzE3OTguOTQ5NSwgNDI2LjUxNDE2XSxcbiAgWzE3OTguMjA4NCwgNDIxLjcyOTJdLFxuICBbMTgwMC4yMTM2LCA0MTcuNjQ4NjVdLFxuICBbMTgwMC4wNzc5LCA0MTMuMTUwNDVdLFxuICBbMTgwMC4zNTg5LCA0MDguNTgxXSxcbiAgWzE3OTguODExNCwgNDA0LjM3NDA4XSxcbiAgWzE3OTUuOTUyMSwgNDA5Ljk0Ml0sXG4gIFsxNzk0LjQ2ODMsIDQwNi4xOTUwNF0sXG4gIFsxNzkyLjQzOTUsIDQwMi44OTg4Nl0sXG4gIFsxNzg4LjU0MjUsIDQwMy4wODgxM10sXG4gIFsxNzg0LjA1MjEsIDQwMy4wNjEyNV0sXG4gIFsxNzc5LjkwOTQsIDQwNC4xMTQ3XSxcbiAgWzE3NzcuMjc1NiwgNDA2Ljk1Mjg1XSxcbiAgWzE3NzQuMjE4OCwgNDA5LjE3OTYzXSxcbiAgWzE3NzEuNzEzNiwgNDEyLjQ2Njk4XSxcbiAgWzE3NjkuMjAzNywgNDA5LjA0NzU1XSxcbiAgWzE3NjQuOTQ0MiwgNDA4LjE2NTEzXSxcbiAgWzE3NjEuMTQ5MywgNDA3LjA4NTVdLFxuICBbMTc2My4zNjE3LCA0MDIuODI5NTZdLFxuICBbMTc2Ny40NDYsIDQwNC40MTU2NV0sXG4gIFsxNzY3LjEzMTMsIDM5OS43Mjg1XSxcbiAgWzE3NjIuOTg4NSwgMzk4LjExNjUyXSxcbiAgWzE3NTguODQxMiwgNDAzLjQ4NTk2XSxcbiAgWzE3NTkuNDMwMywgMzk5Ljg2NDkzXSxcbiAgWzE3NTkuMjEsIDM5NS44Nzg1NF0sXG4gIFsxNzU3LjE4MTMsIDM4Ni43MTQ1NF0sXG4gIFsxNzYyLjQ3MDUsIDM4OC4yNTg1XSxcbiAgWzE3NjYuMTgwMywgMzg1LjIzOTddLFxuICBbMTc2MC44MTQyLCAzODMuNjEyOF0sXG4gIFsxNzY0LjM1OTEsIDM3NS4wMDAzNF0sXG4gIFsxNzYzLjMzNzksIDM4MC4yMzE0XSxcbiAgWzE3NjguNDM3NCwgMzc1LjAwMzVdLFxuICBbMTc3Mi4yMzQ5LCAzNzYuNzExMTJdLFxuICBbMTc2Ny41ODYyLCAzNjkuMTg3ODRdLFxuICBbMTc3MS41NDc1LCAzNzEuNzY4Ml0sXG4gIFsxNzczLjMwOTgsIDM2Ny4wMjU1XSxcbiAgWzE3NzUuNTA0OSwgMzcyLjg5OTZdLFxuICBbMTc4My43MzEsIDM3MC4wOTcyM10sXG4gIFsxNzg0LjA4MTgsIDM3NS4yNDc5Ml0sXG4gIFsxNzgwLjY4NTMsIDM4MC4xNjgwNl0sXG4gIFsxNzg0LjA4NTksIDM4My4yMTAwMl0sXG4gIFsxNzg4LjUyNTUsIDM4My41NTMyOF0sXG4gIFsxNzc5Ljg1NjEsIDM4NS40Mjg2NV0sXG4gIFsxNzY3Ljg0NjksIDM3OS44MjIyNF0sXG4gIFsxNzczLjU0OTgsIDM4MC4yOTgxNl0sXG4gIFsxNzc3LjE4NjksIDM3Ny43NTgzXSxcbiAgWzE3NzkuOTAzOCwgMzczLjg2Nzc3XSxcbiAgWzE3NzguNjczNSwgMzY4LjU4OTU0XSxcbiAgWzE3ODkuMDc2OSwgMzcwLjA4NzQ2XSxcbiAgWzE3OTMuNDcyMiwgMzczLjM1NzI3XSxcbiAgWzE3ODcuMDM5OCwgMzc3Ljc4NzM1XSxcbiAgWzE3OTEuMjkwOCwgMzc4LjczNzUyXSxcbiAgWzE3OTYuMjE5NywgMzc5LjE5NzVdLFxuICBbMTc5OS43NTEyLCAzODIuOTQ1MzddLFxuICBbMTc5Ny40ODg5LCAzODcuMjUzNl0sXG4gIFsxNzk2Ljc1MzIsIDM5MS40NDQ5XSxcbiAgWzE4MDMuMjA5MSwgMzg2Ljk0N10sXG4gIFsxODA0LjY2NDgsIDM4MS41MDMzNl0sXG4gIFsxODA5LjAzNDcsIDM4Ni41Njk0Nl0sXG4gIFsxODE1LjIyOTcsIDM4OS4zNjA4NF0sXG4gIFsxODE5Ljc1NzIsIDM5NC4zNTgyOF0sXG4gIFsxODIxLjY3ODcsIDM5OS45MjUzNV0sXG4gIFsxODI1Ljk2NjMsIDM5Ny4wMTA2OF0sXG4gIFsxODMwLjU1NDcsIDQwMS41NDE4XSxcbiAgWzE4MjUuOTM2OCwgNDAzLjUxNjMzXSxcbiAgWzE4MTYuODQwMywgNDAxLjA4ODM4XSxcbiAgWzE4MTQuODY0NiwgMzk2LjcwMTQyXSxcbiAgWzE4MTEuNDQ2MywgMzkzLjAyNTM2XSxcbiAgWzE4MDYuOTk2MiwgMzkxLjIyMjNdLFxuICBbMTgxMC4yMTAyLCAzOTguMzg0MjJdLFxuICBbMTgwNi44OTA3LCA0MDEuOTE1MzRdLFxuICBbMTgxMS45NDg3LCA0MDMuMzQ3MV0sXG4gIFsxODE2LjA2OTIsIDQwNi4zMzUwMl0sXG4gIFsxODIwLjgwMSwgNDA1LjY1M10sXG4gIFsxODIyLjUxNTEsIDQxMy4wNTU5XSxcbiAgWzE4MjMuODUxMSwgNDIxLjY4OTJdLFxuICBbMTgyNS40MzkyLCA0MTcuMDQ3NThdLFxuICBbMTgyNy4xNzYzLCA0MTIuNDg3XSxcbiAgWzE4MzEuNDU2OCwgNDEzLjI0NzVdLFxuICBbMTgzMC4wMTU0LCA0MTcuNjI5MjddLFxuICBbMTgyOC40NTAyLCA0MjEuNjQxNjZdLFxuICBbMTgzMy4wNTU5LCA0MjEuMjQ1Ml0sXG4gIFsxODM2Ljk1NjksIDQyMC43NDg3OF0sXG4gIFsxODM2LjUzNTQsIDQyNS41MDE3XSxcbiAgWzE4MzAuNzMwOCwgNDI1LjQzNTRdLFxuICBbMTgyNi41Mjg2LCA0MjUuOTcxMl0sXG4gIFsxODIyLjMyNjMsIDQyNy4xNjA4Nl0sXG4gIFsxODE4Ljg2MjQsIDQyOS4wMDcyNl0sXG4gIFsxODE3Ljc0MDcsIDQzNC42MjY0M10sXG4gIFsxODIyLjUwNzgsIDQzNC42OTA2NF0sXG4gIFsxODI3LjQxMDksIDQzNS45MTYzMl0sXG4gIFsxODI1Ljg4ODksIDQzMC43MzQzOF0sXG4gIFsxODMwLjUwNDMsIDQzMS4zMzAzMl0sXG4gIFsxODMzLjEzMDEsIDQzNS40MTMwNl0sXG4gIFsxODMzLjE1MTksIDQyOC4xMTA4XSxcbiAgWzE4MzYuMzg0NSwgNDMwLjk5Mjc0XSxcbiAgWzE4NDAuODc0MywgNDMyLjMzNDUzXSxcbiAgWzE4MzguMDQ2MywgNDM2LjI5Njg4XSxcbiAgWzE4NDAuNjIxNSwgNDQwLjQ1OTUzXSxcbiAgWzE4NDMuMDk2NywgNDQ0LjQyNzhdLFxuICBbMTg0Ny4wNzg5LCA0NTMuNzE5MzNdLFxuICBbMTg1Mi45NDI5LCA0NTYuNDkwOF0sXG4gIFsxODUzLjcyMSwgNDQ5Ljg4OTEzXSxcbiAgWzE4NTkuMjgxLCA0NDUuMjgxN10sXG4gIFsxODYwLjE2NiwgNDUxLjcxMTU1XSxcbiAgWzE4NjAuODg4NywgNDU4LjA5NjldLFxuICBbMTg0NC4xNjA5LCA0NjAuMDI1NV0sXG4gIFsxODQ4LjI1MzQsIDQ2Ni40NDAyOF0sXG4gIFsxODY5LjY5NTgsIDUwMi4wMjAyM10sXG4gIFsxODI4LjQ3NiwgNTI2LjYxNDI2XSxcbiAgWzE4MTMuMTYzMywgNTEzLjYyNzg3XSxcbiAgWzE4MDkuODM5MSwgNTA4LjQxNTI4XSxcbiAgWzE4MTQuNDk4OCwgNDkyLjcxMTY0XSxcbiAgWzE4MjAuNzU3OSwgNDkyLjMxODA4XSxcbiAgWzE4MjUuMjA3MywgNDgxLjE2NzY2XSxcbiAgWzE4MTkuMjY0NiwgNDc2LjY1NjU2XSxcbiAgWzE4MTQuNzY1LCA0ODQuNjQzMDRdLFxuICBbMTgyMC43Nzc1LCA0ODUuNjExNjNdLFxuICBbMTgwOS4yNSwgNDg5Ljg1NDM0XSxcbiAgWzE4MDcuODg0LCA0ODMuMjg0MThdLFxuICBbMTgwMi44MDMyLCA0NzkuMTY1Nl0sXG4gIFsxODA1LjQyNDIsIDQ3My4xNDM1NV0sXG4gIFsxNzk4LjU5NjMsIDQ3MS45MjY1XSxcbiAgWzE3OTUuNzMzOSwgNDc4LjMyNDRdLFxuICBbMTc5MS4xNjkyLCA0NzMuNTU1M10sXG4gIFsxNzg1LjA2NTcsIDQ3MC4yMTU5XSxcbiAgWzE3ODAuOTIxNCwgNDY0Ljg0NzQ3XSxcbiAgWzE3ODQuMzcwNywgNDc3LjExNjI3XSxcbiAgWzE3NzguODQ1MywgNDgyLjA5OTldLFxuICBbMTc4NC4wMjAzLCA0ODQuOTExMDddLFxuICBbMTc4OS44ODM4LCA0ODEuNzcxM10sXG4gIFsxNzkzLjE4ODUsIDQ4Ny42ODI4M10sXG4gIFsxNzk3LjgzMzEsIDQ4NC4xMTA3OF0sXG4gIFsxODAyLjc5NSwgNDg3LjYxNDhdLFxuICBbMTc5Ny44NTIzLCA0OTEuOTE2XSxcbiAgWzE4MDAuMDgyOSwgNDk3LjUwNTIyXSxcbiAgWzE3OTUuNDkwNSwgNDk4LjY0NjFdLFxuICBbMTc5Mi4wMTYxLCA0OTQuNjg2MzddLFxuICBbMTc4OS4wNDkxLCA1MDAuNzA2NDJdLFxuICBbMTc5My4zNDA3LCA1MDMuNjMwODZdLFxuICBbMTc4OC42MTUyLCA1MDcuNjg5NThdLFxuICBbMTc5OC43NzgsIDUwNC4wMzAzM10sXG4gIFsxODA4LjU4NjgsIDUwMy4zNDYyOF0sXG4gIFsxODA0LjgzMzEsIDQ5NC4wNzUyXSxcbiAgWzE4MDMuOTIyLCA1MDAuNTM5MTVdLFxuICBbMTgxNS40NDg1LCA1MDYuMTE1MzZdLFxuICBbMTgyMC44NzIzLCA1MTMuNTc5XSxcbiAgWzE4MTcuMDgwOSwgNTE5LjQwMzNdLFxuICBbMTgyMi4wMDM4LCA1MjQuNzYwNDRdLFxuICBbMTgwNS44ODI2LCA1MzAuMzg4NF0sXG4gIFsxODA2Ljg4MjgsIDUxOC40MTU5NV0sXG4gIFsxODA1LjY1MzEsIDUxMi42MTkyNl0sXG4gIFsxODAxLjUyMzQsIDUyNC42MDU5Nl0sXG4gIFsxNzk0LjkyODUsIDUyOS4wNzg3NF0sXG4gIFsxNzg4LjU5NjcsIDUyNC4zMjczM10sXG4gIFsxNzk0LjgzOTYsIDUyMS40NTIxNV0sXG4gIFsxNzg0LjU2MjEsIDUxMi4yNjk1M10sXG4gIFsxNzg4LjI3MDQsIDUxNy42MTk4XSxcbiAgWzE3OTMuMjg3LCA1MTQuMjIzNzVdLFxuICBbMTc5NC44MTIsIDUwOC44OTU1XSxcbiAgWzE3OTkuODkzOCwgNTEwLjkzMTEyXSxcbiAgWzE4MDMuNTc5OCwgNTA2LjU0NjU3XSxcbiAgWzE4MDAuMDY1MiwgNTE3LjE4MDhdLFxuICBbMTgwOS4zNDUyLCA1MjMuNjExMl0sXG4gIFsxODEyLjcxNzIsIDUzMy40Njg2XSxcbiAgWzE4MjcuNjU3MiwgNTMzLjQ2Nl0sXG4gIFsxODM1LjQwODEsIDUzMS41NTEzXSxcbiAgWzE4NjYuNDY0OCwgNTYxLjk5NDkzXSxcbiAgWzE4NzMuODk1OCwgNTc0LjMxNTRdLFxuICBbMTg3Ni43NzU1LCA1NjUuMjM0MjVdLFxuICBbMTg4MS41OTIzLCA1NjMuNzI4MTVdLFxuICBbMTg4My44OTExLCA1NTguMTI1MDZdLFxuICBbMTg4Ni40OTM0LCA1NjQuNzc1M10sXG4gIFsxODkxLjgzNjksIDU2My40NTgzXSxcbiAgWzE4OTcuMjg4LCA1NTUuMjk4MzRdLFxuICBbMTg4OS44NzY1LCA1NDEuNTgwNTddLFxuICBbMTg4My42OTY1LCA1MzYuOTM3NV0sXG4gIFsxODgwLjk2MjgsIDU0My4yNTQ3XSxcbiAgWzE4NzQuMDE5OSwgNTQxLjkyODFdLFxuICBbMTg3My4xODQyLCA1NTQuOTE0MDZdLFxuICBbMTg3Ny42NzgyLCA1NTIuOTc0MjRdLFxuICBbMTg4Mi4zODI5LCA1NTIuNDI2OF0sXG4gIFsxODg2LjIxMjIsIDU0OC44MTk5NV0sXG4gIFsxODkxLjU0NzcsIDU1MC4yMTYyNV0sXG4gIFsxODg5Ljg4NDIsIDU1Ny4xMTFdLFxuICBbMTg3Ny44ODQsIDU1OS4yMTIxXSxcbiAgWzE4NjcuNDEyNCwgNTU2LjQ0ODddLFxuICBbMTg3MS45NzM0LCA1NjQuNjA2NzVdLFxuICBbMTg3My4zMjY5LCA1NjkuNzM4M10sXG4gIFsxODcyLjE4MjMsIDU1OS44NzUwNl0sXG4gIFsxODY3LjQ4NzgsIDU2Ny41Nzg2XSxcbiAgWzE4NjcuNjExMSwgNTcyLjk0OV0sXG4gIFsxODYyLjY2MTUsIDU3MC41Njc2XSxcbiAgWzE4NjEuMTE0LCA1NjUuMDIyMDNdLFxuICBbMTg1MS43ODU5LCA1NjkuNzQ2NDZdLFxuICBbMTg1Ny4xMzUzLCA1NzAuOTc3N10sXG4gIFsxODU5LjgwOTMsIDU3NS42MTMzNF0sXG4gIFsxODU0LjUxMjMsIDU3Ny40NjUzXSxcbiAgWzE4NDkuNDUwOSwgNTc1LjE2NTE2XSxcbiAgWzE4NDQuODA1NSwgNTc4LjM0NDRdLFxuICBbMTg1MC4wMDg5LCA1ODEuNDA2NDNdLFxuICBbMTg1Mi43NiwgNTg2LjE5MDhdLFxuICBbMTg1NS43NjEyLCA1ODMuNDMzOTZdLFxuICBbMTg2MC42MTE4LCA1ODUuMDQ1ODRdLFxuICBbMTg1OS45NTEzLCA1ODAuNTcyXSxcbiAgWzE4NjQuNTQ5NiwgNTc3LjYwOTVdLFxuICBbMTg3MC4yMDIsIDU3Ni45NDQyXSxcbiAgWzE4NjguODEwMywgNTgxLjA2MTE2XSxcbiAgWzE4NjUuNDIxOSwgNTgzLjgxMjZdLFxuICBbMTg2OS42MzA3LCA1ODcuMTQ4M10sXG4gIFsxODcyLjk5NTgsIDU4NC4wMDc4XSxcbiAgWzE4NzYuMTU1NiwgNTg4Ljc0NDE0XSxcbiAgWzE4ODAuNTI2NiwgNTg2LjQzMjddLFxuICBbMTg4Mi40Njc5LCA1OTEuNDM4N10sXG4gIFsxODc1LjgxODUsIDU5NC42Mzg5XSxcbiAgWzE4NzEuNzIxLCA1OTEuNzM0Ml0sXG4gIFsxODY4LjczMzgsIDU5Ny40MTYyNl0sXG4gIFsxODYyLjcxMDQsIDU5NC41NjkzXSxcbiAgWzE4NjYuOTYzOSwgNTkxLjk3OTRdLFxuICBbMTg2My44OSwgNTg4LjY5NzE0XSxcbiAgWzE4NTkuMjM3LCA1ODkuNjc4N10sXG4gIFsxODU1LjYzMDEsIDU5MC4yMDgzXSxcbiAgWzE4NTIuMTYsIDU5MS4xMTg5Nl0sXG4gIFsxODQ5LjI1MjcsIDU4Ny41NDAzNF0sXG4gIFsxODQ2LjMyNDcsIDU4NS42NjA3N10sXG4gIFsxODQzLjQyMjEsIDU4My40NDQ2XSxcbiAgWzE4MzkuMzUwNiwgNTgxLjI5OTldLFxuICBbMTgzNy4yMDUzLCA1ODUuNzE5MV0sXG4gIFsxODQxLjQzOTIsIDU4OC4zODMwNl0sXG4gIFsxODM3LjY2MTQsIDU5MC44NzU1XSxcbiAgWzE4MzIuNjY3MiwgNTg4LjY5ODddLFxuICBbMTgyOS45MDg5LCA1OTMuNDM5OF0sXG4gIFsxODI1LjQ5MjQsIDU5NS44NTI3XSxcbiAgWzE4MzAuMDQ0MiwgNTk4Ljk4OTI2XSxcbiAgWzE4MjYuMjgwNSwgNjAxLjM1NzddLFxuICBbMTgyMS41MDIzLCA2MDAuMTkyN10sXG4gIFsxODE2LjE3MDcsIDYwMC43OTc5XSxcbiAgWzE4MTEuNTE3NiwgNjAxLjQ5ODRdLFxuICBbMTgxMC4yODQ5LCA2MDQuODMyNzZdLFxuICBbMTgwNy42OTA5LCA2MDYuMzMxNTRdLFxuICBbMTgwNy4xMjM1LCA2MTAuMTMxNV0sXG4gIFsxODA0LjAzOTYsIDYwNy44NTIzNl0sXG4gIFsxODAyLjY4MjEsIDYxMS4xNTU1XSxcbiAgWzE3OTguNTc2MywgNjExLjY0NDRdLFxuICBbMTc5OS43NDgsIDYwNy41MjMyNV0sXG4gIFsxNzk0LjY4MDQsIDYwOS40Nzc5XSxcbiAgWzE3OTQuNDkyNiwgNjEzLjc5NDldLFxuICBbMTc5MC4zNDExLCA2MTMuODMwN10sXG4gIFsxNzkwLjAyMTcsIDYxOS4yMjE2XSxcbiAgWzE3ODYuMTU3LCA2MTcuMzU2NTddLFxuICBbMTc4My4yNjUxLCA2MjEuNjU3MzVdLFxuICBbMTc3OC40NzM2LCA2MjMuODk3Nl0sXG4gIFsxNzgxLjA2ODQsIDYyNy43MDc0Nl0sXG4gIFsxNzc5LjczMzMsIDYzMi43OTU2XSxcbiAgWzE3ODQuNzQ2MSwgNjMxLjU5MDddLFxuICBbMTc4NS4zMDIyLCA2MjYuNjc1M10sXG4gIFsxNzg4LjEzNCwgNjIzLjUzNDldLFxuICBbMTc5Mi4zNzc4LCA2MjQuNTk5XSxcbiAgWzE3OTQuOTE2MywgNjI4Ljg0Mzc1XSxcbiAgWzE3ODkuNTYzNywgNjI5LjkxODE1XSxcbiAgWzE3OTMuMzExMiwgNjMzLjM3MzNdLFxuICBbMTc5MC4xOTYsIDYzNi40OTAxXSxcbiAgWzE3ODUuODE0MSwgNjM2LjEwMDM0XSxcbiAgWzE3ODEuNDE3MSwgNjM2Ljk5NTI0XSxcbiAgWzE3NzcuODcxNiwgNjM5LjQ4OV0sXG4gIFsxNzc1LjgzOCwgNjM2LjExNjFdLFxuICBbMTc3My43MDE0LCA2MzIuMzM2Ml0sXG4gIFsxNzc2Ljc0NDksIDYyOS4yMzczXSxcbiAgWzE3NzMuMzg4NCwgNjI2LjQ0NTA3XSxcbiAgWzE3NjguNDU4NywgNjI3LjU1ODk2XSxcbiAgWzE3NjkuMzY4NCwgNjMxLjg1NThdLFxuICBbMTc3MC44MzcyLCA2MzYuNTg5OTddLFxuICBbMTc2My4yMjAyLCA2MzguNzY4MDddLFxuICBbMTc1OC43OTgzLCA2MzguNjA4MTVdLFxuICBbMTc1OS42NDQ5LCA2NDMuNTY1Nl0sXG4gIFsxNzY1Ljk4MTIsIDYzNS41MTYxXSxcbiAgWzE3NjQuMDU5NCwgNjMwLjY4OTQ1XSxcbiAgWzE3NTkuOTg0NCwgNjMzLjc3OTRdLFxuICBbMTc1NC4xMzMsIDYzNi43ODIxXSxcbiAgWzE3NTQuNzIzOSwgNjQxLjcwMTg0XSxcbiAgWzE3NDkuMTE2LCA2NDIuNDQ5MV0sXG4gIFsxNzUyLjQyMDcsIDY0Ni4wMjcxXSxcbiAgWzE3NTYuMTYxNCwgNjQ3LjUwMTE2XSxcbiAgWzE3NTkuOTczNiwgNjUyLjM0NzUzXSxcbiAgWzE3NjguODQ3OSwgNjUwLjQzNTFdLFxuICBbMTc2OC40OTYyLCA2NDYuMjQ4OV0sXG4gIFsxNzc0LjIzMDUsIDY0OS44NjQ1Nl0sXG4gIFsxNzc3LjEwNjQsIDY1NC4xNjE4XSxcbiAgWzE3ODAuNDU3OSwgNjU3LjcwMThdLFxuICBbMTc4NC42NDIxLCA2NTkuNDE1MzRdLFxuICBbMTc4OC43OTM2LCA2NTUuODAzOV0sXG4gIFsxNzgzLjk3LCA2NTMuNjIzNTRdLFxuICBbMTc4MC43MzgsIDY1MC4yOTkzXSxcbiAgWzE3ODEuNjY0MSwgNjQ2LjA5Nl0sXG4gIFsxNzg2LjY1NTksIDY0Ni45MjczXSxcbiAgWzE3ODkuNDU3OSwgNjUwLjg3MDRdLFxuICBbMTc5NC4zNjAyLCA2NTguNDkyNzRdLFxuICBbMTc5OS45NjE1LCA2NTkuNjkxN10sXG4gIFsxNzk0LjgzODksIDY1My4yODc2Nl0sXG4gIFsxNzk0LjYzMjQsIDY2My45Nzc3XSxcbiAgWzE3OTUuNTk4OSwgNjY5LjY1Mzc1XSxcbiAgWzE4MDEuNDc3OSwgNjY3LjUyXSxcbiAgWzE4MDMuOTU4MSwgNjczLjEzMzA2XSxcbiAgWzE4MDguOTQsIDY2OC42NzgxNl0sXG4gIFsxODE1LjE5MDYsIDY3MS44MjA4XSxcbiAgWzE4NTYuNzc5NSwgNzAzLjA3MzZdLFxuICBbMTg2My40NDM2LCA3MDIuMjE5NjddLFxuICBbMTg2MS43ODA0LCA2OTQuOTk4OTZdLFxuICBbMTg1NS43NTU5LCA2OTAuMTY2XSxcbiAgWzE4NjAuMzYxMSwgNjg2LjY4NDNdLFxuICBbMTg3MC4zMjg0LCA2ODQuMjA0M10sXG4gIFsxODczLjU2NSwgNjgwLjA2MjFdLFxuICBbMTg3Ni41ODg5LCA2OTEuNDIwNl0sXG4gIFsxODcyLjA3OTgsIDY4OC42NDVdLFxuICBbMTg2NS43MjMxLCA2ODguODUwNl0sXG4gIFsxODY4Ljk2NCwgNjkzLjIzOV0sXG4gIFsxODY4LjUyNDQsIDY5OS4wNTY4XSxcbiAgWzE4NzQuMzg5OSwgNjk3Ljg3OTY0XSxcbiAgWzE4NzYuNTY5MiwgNjg1LjE3MjM2XSxcbiAgWzE4NzkuMzEwOCwgNjgwLjQ5NDldLFxuICBbMTg4MS42NTcyLCA2ODYuODQ1OTVdLFxuICBbMTg4My4yMjM5LCA2OTEuODc1XSxcbiAgWzE4ODYuNzA4OSwgNjk3Ljg4NTEzXSxcbiAgWzE4NzkuOTM3OSwgNjk1LjY3NTNdLFxuICBbMTg4MS4wMjIyLCA3MDEuMDkxN10sXG4gIFsxODc2LjIyMjgsIDcwNC43MjgxNV0sXG4gIFsxODcwLjE0NzgsIDcwNS44MTQ0NV0sXG4gIFsxODY3Ljg1NCwgNzExLjMwNDFdLFxuICBbMTg2OC4zNDY3LCA3MTYuODk2MV0sXG4gIFsxODY5LjMzMjgsIDcyMy4xODc1XSxcbiAgWzE4NjcuMTU1LCA3MjkuNDY4NF0sXG4gIFsxODcxLjI4MTcsIDczNC40OTIzXSxcbiAgWzE4NjkuNzYzMiwgNzQyLjIxNTJdLFxuICBbMTg3Ni4xOTEsIDcxMS42MTc2XSxcbiAgWzE4NzQuNDAwOSwgNzE4LjA3OTgzXSxcbiAgWzE5MDEuMjMxNCwgNzA1LjI3NzA0XSxcbiAgWzE5MDkuNDE1OSwgNzA4LjIzODA0XSxcbiAgWzE5MTcuMDY4NiwgNzExLjQ5Njc3XSxcbiAgWzE5MDcuMjE4LCA3MzAuOTYwOTRdLFxuICBbMTk1Mi41NjM2LCA3MzcuODk0NTNdLFxuICBbMTk1NS41MTM5LCA3MjguNjA4M10sXG4gIFsxOTYzLjY1MDEsIDcyNi44NzVdLFxuICBbMTk2MC4wMTc4LCA3MjEuMTQ4MV0sXG4gIFsxOTY3LjA0ODEsIDcxOS42MjIzXSxcbiAgWzE5NjcuNjg3MywgNzEzLjY5NzQ1XSxcbiAgWzE5NzUuMTA5MSwgNzE2LjAyOTRdLFxuICBbMTk3OS43NjAxLCA3MDYuMDc4Nl0sXG4gIFsxOTczLjczMDYsIDcwOS4yNjI5NF0sXG4gIFsxOTkxLjc2MzQsIDY5OC45MzcyXSxcbiAgWzE5ODUuNzQyOSwgNzAyLjE0MjZdLFxuICBbMTk2My45OTcxLCA2NjEuNTA1ODZdLFxuICBbMTk1Ni4zODQzLCA2NjEuOTg1MDVdLFxuICBbMTk1Mi4zOTg5LCA2NTYuNzQxMTVdLFxuICBbMTk0OS40NDUsIDY2My4yNjc5NF0sXG4gIFsxOTQyLjcyNzMsIDY2My4yNjg3XSxcbiAgWzE5NTMuOTg1NywgNjUxLjM0OF0sXG4gIFsxOTQ4LjM3OTYsIDY1MC4yNTY5Nl0sXG4gIFsxOTQyLjU0NDIsIDY1MS41MDc0NV0sXG4gIFsxOTQ1Ljg4NiwgNjU2LjgxNDZdLFxuICBbMTkzOS44NjEsIDY1Ny40NTU4XSxcbiAgWzE5MzQuOTIyNiwgNjU4LjY4ODNdLFxuICBbMTkzNi4yMDcyLCA2NjQuOTk4OF0sXG4gIFsxOTMwLjM5NDUsIDY2Ny40Njc2NV0sXG4gIFsxOTMwLjA1NjQsIDY2MC44NjYzXSxcbiAgWzE5MjQuNTM0NSwgNjYwLjg4MTFdLFxuICBbMTkyNS4zMzI1LCA2NTUuNjE3NV0sXG4gIFsxOTI3LjAwNjcsIDY1MC42NDM5XSxcbiAgWzE5MjMuNjc2LCA2NDcuMTM1MjVdLFxuICBbMTkyNi45NTA0LCA2NDEuNTk5M10sXG4gIFsxOTI2LjE1NTgsIDYzNS4yMTAxXSxcbiAgWzE5MzIuMDgyMywgNjI5LjE4MzJdLFxuICBbMTkzNC40NDg2LCA2MjMuNTkyNF0sXG4gIFsxOTMyLjc3ODIsIDYxMS4yMTgxXSxcbiAgWzE5MzEuNTMyMiwgNjE3LjA5NTM0XSxcbiAgWzE5MjQuNDYxNywgNjEyLjU4ODRdLFxuICBbMTkyMS45MDYyLCA2MDIuNjE2MV0sXG4gIFsxOTIyLjc3ODMsIDU5NC4yNTU1XSxcbiAgWzE5MjkuNTE5MiwgNTk4Ljk0NDM0XSxcbiAgWzE5MjguMzQxOCwgNjA1Ljg3MjFdLFxuICBbMTkzNi44OTg5LCA2MDQuNzIyNl0sXG4gIFsxOTQxLjM3NjIsIDYxMC43NDAyXSxcbiAgWzE5NDkuNDYwNywgNjEwLjA0NzZdLFxuICBbMTk0Ny40MjgxLCA2MTYuMTczNF0sXG4gIFsxOTQ0LjgxNjIsIDYyMS42NjY1XSxcbiAgWzE5MzguODk0NywgNjE3LjkyNTldLFxuICBbMTk0MC41MTQ2LCA2MjUuNjAyOF0sXG4gIFsxOTM3LjkwNTMsIDYzMC44MDIzN10sXG4gIFsxOTQyLjkzOTIsIDYzMy43MjldLFxuICBbMTk0Ny43NDA3LCA2MzYuMTg4MV0sXG4gIFsxOTUyLjMyMTQsIDYzOS44MV0sXG4gIFsxOTU0LjYzMTgsIDYzNS4wNjk3XSxcbiAgWzE5NTEuNjIxMywgNjMwLjQzOTFdLFxuICBbMTk0Ni4wNzMsIDYyOC41MzQ2XSxcbiAgWzE5NTAuOTY0MSwgNjIzLjQ5NjhdLFxuICBbMTk1NS4yNjUxLCA2MTguNTEzMV0sXG4gIFsxOTU5LjAwNTQsIDYxMy43OTUzNV0sXG4gIFsxOTY2LjI3MzcsIDYxOS4wMTg0M10sXG4gIFsxOTYyLjI3MDUsIDYyMy44MzI0XSxcbiAgWzE5NTYuODY3MiwgNjI2LjAwMTJdLFxuICBbMTk1OS40NDgyLCA2MzEuOTk3XSxcbiAgWzE5NjkuOTUxMiwgNjI2LjkyMl0sXG4gIFsxOTY1LjQ2NjIsIDYzMS4wOTA4XSxcbiAgWzE5NjcuNzM0NywgNjQyLjQ2M10sXG4gIFsxOTYzLjYzODcsIDYzNy40NTE0XSxcbiAgWzE5NTguMjA5MiwgNjQwLjA1NjldLFxuICBbMTk1Mi4zNTA1LCA2NDUuMjg5NTVdLFxuICBbMTk1Ny4zNTU1LCA2NDYuMTY5NDNdLFxuICBbMTk2Mi40Nzc1LCA2NDQuOTI5N10sXG4gIFsxOTY1Ljg0NTYsIDY1MC4wNzE2XSxcbiAgWzE5NjkuMzE5MywgNjU0Ljg2NzNdLFxuICBbMTk2OS4yODcxLCA2NjMuNTU3Nl0sXG4gIFsxOTYxLjM2OSwgNjU2LjI0NDc1XSxcbiAgWzE5NTkuNTI0MiwgNjUxLjQ5MjU1XSxcbiAgWzE5NDcuNjQwNSwgNjQyLjQ3Mjk2XSxcbiAgWzE5NDMuNzE1MSwgNjQ1LjY5MDczXSxcbiAgWzE5NDEuNjczNiwgNjQwLjE0MjhdLFxuICBbMTkzNy4zOTYxLCA2MzYuNzMxOV0sXG4gIFsxOTMxLjc5MTUsIDYzNS4yNjkzNV0sXG4gIFsxOTMzLjQ4NjgsIDY0MS4xNDU1XSxcbiAgWzE5MzcuNzE0NywgNjQ1LjUyOTY2XSxcbiAgWzE5MzEuNDczNCwgNjUzLjkzOTFdLFxuICBbMTkzNi42ODksIDY1MS41OTU2XSxcbiAgWzE5MzEuMjgwMiwgNjQ2LjkyNTldLFxuICBbMTkyMC40Njc1LCA2NDIuMzQxOV0sXG4gIFsxOTE3LjIxNDgsIDY0Ny42NTA3Nl0sXG4gIFsxOTEyLjM0NSwgNjQ4LjI2NzhdLFxuICBbMTkxOS45MDU4LCA2NTIuMzQwNl0sXG4gIFsxOTE5LjIxMDcsIDY1Ny41OTMzXSxcbiAgWzE5MTMuNDk4MywgNjU0LjYyMV0sXG4gIFsxOTA3LjA3ODUsIDY1Ni40NTk1XSxcbiAgWzE5MTAuNjAxOCwgNjYwLjUyMDRdLFxuICBbMTkxNS4wMjU5LCA2NjEuNDc4N10sXG4gIFsxOTE5LjMxNDEsIDY2My45MzUwNl0sXG4gIFsxOTI0LjM2NjEsIDY2Ni4zNjNdLFxuICBbMTkxNy40Njg5LCA2NjkuODAwMDVdLFxuICBbMTkxMi4wMDU2LCA2NjcuMjE0Nl0sXG4gIFsxOTA2LjU1NjQsIDY2OC43OTMyXSxcbiAgWzE4OTcuNzEwMSwgNjgzLjE2NTddLFxuICBbMTg5OS4yMDY1LCA2OTAuMDg5ODRdLFxuICBbMTkwMy4zMjEsIDY4Ni4wODk1XSxcbiAgWzE4ODguMDgsIDY5MS4xNDk4NF0sXG4gIFsxODkyLjc5MywgNjkxLjA1MjZdLFxuICBbMTg5My4yODU2LCA2ODYuMzhdLFxuICBbMTg5MS43ODk3LCA2ODEuMzk3MDNdLFxuICBbMTg4Ny4zNjg0LCA2ODUuNjg3OV0sXG4gIFsxODg0LjA0MjIsIDY4MS41Njg2Nl0sXG4gIFsxODg3Ljg0MDgsIDY3OC4zMzg0XSxcbiAgWzE4OTYuMDM0OCwgNjY3LjgzNzY1XSxcbiAgWzE4OTAuNjE3OSwgNjY2LjgwMzddLFxuICBbMTg4OC44MSwgNjcyLjYyMDA2XSxcbiAgWzE4ODIuOTI2OSwgNjc1LjQ3MTA3XSxcbiAgWzE4NzguMzI2OSwgNjY5LjEwOTZdLFxuICBbMTg4My4zNzI2LCA2NjQuMjE5NF0sXG4gIFsxODg4LjgyODQsIDY2MS43MTY1NV0sXG4gIFsxOTAwLjkzNDIsIDY2NS43OTQwN10sXG4gIFsxOTA2LjA1MjcsIDY2Mi44NzQxNV0sXG4gIFsxOTAwLjY3MjYsIDY2MC4zMDExXSxcbiAgWzE5MDEuMjcwMSwgNjU1Ljg0MDldLFxuICBbMTg5NC44Nzg5LCA2NjEuNDA0OTddLFxuICBbMTg4MC4xNjg1LCA2MTYuNTc1NDRdLFxuICBbMTg3My41NTA5LCA2MTUuNjRdLFxuICBbMTg2My45Mjk4LCA2MjQuODQ0Nl0sXG4gIFsxODY5LjUwMzQsIDYyMC41OTA0NV0sXG4gIFsxODY0LjI0OTUsIDYxOS43NTcxXSxcbiAgWzE4NjEuMTEyLCA2MTUuNzg2Nl0sXG4gIFsxODY4LjEyNjIsIDYxNS4zOTc5NV0sXG4gIFsxODY0LjYxNjcsIDYxMS42MDEzXSxcbiAgWzE4NjkuODk5MywgNjA5LjE2NTM0XSxcbiAgWzE4NzYuNDg5NSwgNjEwLjc4NDRdLFxuICBbMTg4My4xMzY1LCA2MTAuNTg5MDVdLFxuICBbMTg4OS4xNjU4LCA2MDEuNjAzXSxcbiAgWzE4ODQuMjE5MiwgNjA0LjI4NDY3XSxcbiAgWzE4ODguODY0OSwgNTg4LjMwOTYzXSxcbiAgWzE4ODQuOTkwNywgNTg1LjU2NzFdLFxuICBbMTg4OC4wMjgyLCA1ODEuMzk4OF0sXG4gIFsxODgyLjkzODgsIDU4MS4xMDk4Nl0sXG4gIFsxODc3LjgxMzUsIDU4My4wMDhdLFxuICBbMTg3NC40MDUsIDU3OS40MTkwN10sXG4gIFsxODc4Ljg2MjcsIDU3OC4wODQwNV0sXG4gIFsxODc4LjcwNzYsIDU3My4yNTgyXSxcbiAgWzE4ODAuMjk1MywgNTY5LjA1MzM0XSxcbiAgWzE4ODUuMTQwNywgNTcwLjkyMzM0XSxcbiAgWzE4ODguMzg5OSwgNTc1LjY1OTY3XSxcbiAgWzE4ODMuNDU3OCwgNTc2LjEyNzhdLFxuICBbMTg5Mi42NTczLCA1NzkuMjAwM10sXG4gIFsxODk0LjQwNDgsIDU3NC40N10sXG4gIFsxODkwLjgxMzcsIDU2OS44NTczNl0sXG4gIFsxODk2Ljk2MTMsIDU2OS4yNjAxXSxcbiAgWzE4OTcuOTY5OCwgNTYzLjE0NjldLFxuICBbMTkwMi41NTQyLCA1NzEuMTI1XSxcbiAgWzE4OTkuNTE4OSwgNTc2LjQ4OTI2XSxcbiAgWzE4OTguMzYwMSwgNTgxLjk3MzE0XSxcbiAgWzE4OTMuMTYyMSwgNTg0Ljg3MTddLFxuICBbMTkwMC43MTc1LCA1OTcuMzldLFxuICBbMTkxNi4wODU5LCA1OTYuODg4Ml0sXG4gIFsxODk1Ljk0NiwgNjAzLjc5MjddLFxuICBbMTg4OS4xOTU2LCA2MDcuODczMTddLFxuICBbMTg3OC43NzI4LCA2MDUuNDE1XSxcbiAgWzE4NzUuNTE5OSwgNTk5Ljg0MzRdLFxuICBbMTg3Mi40MzgxLCA2MDQuMDg0XSxcbiAgWzE4NjYuOTQxNSwgNjAyLjM4MDg2XSxcbiAgWzE4NjMuMzIzNCwgNjA1LjgzOTg0XSxcbiAgWzE4NTkuMjI2NiwgNjA5Ljk5MTFdLFxuICBbMTg1Ny40MjMyLCA2MDUuMTgyXSxcbiAgWzE4NTUuMTQyNiwgNjAxLjA4NDg0XSxcbiAgWzE4NjEuMTk0MSwgNjAwLjE3ODgzXSxcbiAgWzE4NTguMDQyNSwgNTk1LjUzNzM1XSxcbiAgWzE4NTQuMTcxOSwgNTk1LjYzODRdLFxuICBbMTg1MC45ODksIDU5OC41MDk5XSxcbiAgWzE4NDkuMzc4NCwgNjAxLjczOV0sXG4gIFsxODQ1LjQ4NzUsIDYwMy41NTE2NF0sXG4gIFsxODQyLjAxMTUsIDU5OC40NjE4XSxcbiAgWzE4NDYuMDQ4MSwgNTk4Ljg4MjNdLFxuICBbMTg0Ni40NzksIDU5NS4xMzc2XSxcbiAgWzE4NTAuMjM2OCwgNTk0LjY0NjddLFxuICBbMTg0OC4xOTM4LCA1OTEuMzI2NjZdLFxuICBbMTg0NC44Mjc0LCA1OTAuMzgwNV0sXG4gIFsxODQyLjQ4NDksIDU5My43MzQ0NF0sXG4gIFsxODM4Ljc2OTIsIDU5NS40NTY5XSxcbiAgWzE4MzQuNDk0OSwgNTk0LjI0NzldLFxuICBbMTgzNC4zMzYyLCA1OTguNDU4Ml0sXG4gIFsxODM3Ljc3MTYsIDYwMC41MDY4NF0sXG4gIFsxODQxLjI5LCA2MDIuODc1Nl0sXG4gIFsxODQyLjkwMzMsIDYwNy41NDddLFxuICBbMTg0Ny42OTE4LCA2MDkuMjUwNzNdLFxuICBbMTg1MC44MTczLCA2MDUuMzY3MjVdLFxuICBbMTg1My4yNTc0LCA2MDkuMjEyM10sXG4gIFsxODU1LjY3MzYsIDYxMy42NDg2XSxcbiAgWzE4NTAuMzk0NywgNjE0LjY2MDM0XSxcbiAgWzE4NDUuNTY0NSwgNjE3LjcyMzldLFxuICBbMTg0NS4zNDE4LCA2MTMuMjk1NF0sXG4gIFsxODQxLjE4NjUsIDYxMi40Mjg2XSxcbiAgWzE4MzYuNDQ0OCwgNjE0LjQ0NzldLFxuICBbMTgzNy4xOTQ3LCA2MDkuOTU2ODVdLFxuICBbMTgzMy4yMzQsIDYwNy44MDE3Nl0sXG4gIFsxODM3Ljg1NiwgNjA1LjU0Mzk1XSxcbiAgWzE4MzMuMjk3NywgNjAzLjA1Nl0sXG4gIFsxODI0LjM1NTYsIDYwNS45NjQ3XSxcbiAgWzE4MjAuMzUxMSwgNjA1LjI5OTFdLFxuICBbMTgxNy4xMzcsIDYwNC41NDM0Nl0sXG4gIFsxODEzLjc2MjIsIDYwNS4wNTk4XSxcbiAgWzE4MTEuNjE2MiwgNjA4LjM2NjddLFxuICBbMTgxMC44MzM3LCA2MTEuNDQwMDZdLFxuICBbMTgxMS4zOTU5LCA2MTQuOTM1XSxcbiAgWzE4MTQuNDgxOCwgNjEyLjAxMzddLFxuICBbMTgxNi4yNzY2LCA2MDguNjc0Ml0sXG4gIFsxODIwLjU1NDEsIDYxMC4wNjYyXSxcbiAgWzE4MjkuMDkyNSwgNjA1Ljg3MzY2XSxcbiAgWzE4MjYuMTgxNCwgNjEwLjc1MTddLFxuICBbMTgzMS4xODA5LCA2MTIuMjYxODRdLFxuICBbMTgyNy43Nzc1LCA2MTYuNTQwM10sXG4gIFsxODM1Ljc5NDIsIDYyMy45MjddLFxuICBbMTgzMC45MjI2LCA2MjcuMzM2XSxcbiAgWzE4MjkuODE0LCA2MjEuOTU0ODNdLFxuICBbMTgzMy4zOTEyLCA2MTguMTI4NV0sXG4gIFsxODM5LjkzNSwgNjE4Ljc0NThdLFxuICBbMTg0NS41NTczLCA2MjIuMjU1Nl0sXG4gIFsxODUwLjMyNDcsIDYyMC43NDc3NF0sXG4gIFsxODU0LjU0NTcsIDYxOC4zNjk0XSxcbiAgWzE4NTguNzg0MiwgNjE5Ljg5MDddLFxuICBbMTg1OS41MjcsIDYyMy42MzIxXSxcbiAgWzE4NTQuNzE4OCwgNjIzLjc3ODddLFxuICBbMTg1MC42ODczLCA2MjYuMTE3Ml0sXG4gIFsxODQ1Ljk2NjEsIDYyNy4yMzU4NF0sXG4gIFsxODQxLjIxNDgsIDYyNC40MzNdLFxuICBbMTgzOS4zMjkzLCA2MjkuMTQxXSxcbiAgWzE4MzQuNTI2MSwgNjMxLjEyOTY0XSxcbiAgWzE4MzYuODUzMSwgNjM3LjM2NTRdLFxuICBbMTgzMS45NDI2LCA2NDEuMDkxMl0sXG4gIFsxODM2Ljc2OTgsIDY0Mi45NzNdLFxuICBbMTg0MC43NzMxLCA2MzQuODUxMjZdLFxuICBbMTg0NC43MDUsIDYzMi4xMDY1N10sXG4gIFsxODQ5LjY5MTgsIDYzMS44OTIxNV0sXG4gIFsxODUzLjkyODcsIDYzMC4wNTI3M10sXG4gIFsxODU4LjMxNTcsIDYyNy45MzU2N10sXG4gIFsxODU4LjM4NzcsIDYzMy4xNzg0XSxcbiAgWzE4NTQuMDk1OCwgNjM2LjE5NDc2XSxcbiAgWzE4NDkuMDcwMywgNjM3LjE2ODJdLFxuICBbMTg0NS4xNDMsIDYzOC41NTQyXSxcbiAgWzE4NDEuODY3NywgNjQxLjUzMjddLFxuICBbMTg0MC44MjAxLCA2NDcuMDE5NF0sXG4gIFsxODM1LjgyMDgsIDY0OC40MTk4Nl0sXG4gIFsxODMwLjk4NjMsIDY0Ny41NDc3XSxcbiAgWzE4MjYuNDA0NywgNjQzLjU4NzRdLFxuICBbMTgyNS4zMTQyLCA2MzcuNzM5NV0sXG4gIFsxODMwLjg3NzksIDYzNS40Njc0XSxcbiAgWzE4MjcuMjIwNSwgNjMxLjk1NjFdLFxuICBbMTgyNS4zMDQzLCA2MjcuMDk1MV0sXG4gIFsxODI0LjcyOTIsIDYyMi4zMDg1M10sXG4gIFsxODIyLjk4NDYsIDYxOC4zMDYzNF0sXG4gIFsxODIyLjU4NjIsIDYxNC4wNDAwNF0sXG4gIFsxODE3LjYwNzcsIDYxMy44NDgxNF0sXG4gIFsxODE4LjQ2ODksIDYxNy42NjQyXSxcbiAgWzE4MTkuNjM1MywgNjIyLjA3NTJdLFxuICBbMTgyMC4yMjAyLCA2MjYuOTU0XSxcbiAgWzE4MjEuNDcwOCwgNjMyLjA1NjE1XSxcbiAgWzE4MTguNTU4MywgNjM2Ljc2NDgzXSxcbiAgWzE4MjAuODU3MiwgNjQxLjE1MjVdLFxuICBbMTgyMS45MDk3LCA2NDYuNDA0M10sXG4gIFsxODE3Ljg5NzEsIDY1MC40NjQ4XSxcbiAgWzE4MTUuODIxOCwgNjQ0LjQ2NDY2XSxcbiAgWzE4MDkuOTAzMSwgNjQyLjY0NDldLFxuICBbMTgwNC4xMjU1LCA2NDQuMzE4NV0sXG4gIFsxODA1LjI5MDgsIDY0OS44NDI4XSxcbiAgWzE3OTcuODIwMywgNjQzLjQ0NjJdLFxuICBbMTc5OS4wNjg2LCA2NDguNjU2XSxcbiAgWzE4MDEuMDY2MywgNjU0LjM1NzRdLFxuICBbMTgwNi40MDcyLCA2NTUuOTAyNV0sXG4gIFsxODExLjEzMDYsIDY1Mi4wNzk0XSxcbiAgWzE4MTAuNjMxNywgNjQ3LjI0NTNdLFxuICBbMTgxMy43NCwgNjM5LjIxNjg2XSxcbiAgWzE4MTEuNTI4NiwgNjM0LjgyMjVdLFxuICBbMTgwMS4zMzU3LCA2MzguOTE3MV0sXG4gIFsxODAyLjQzMzMsIDYzMy44Nzc5XSxcbiAgWzE4MDYuOTY2MiwgNjM4Ljc5NzddLFxuICBbMTgwNi43MjEyLCA2MzQuMDE5NTNdLFxuICBbMTgwOS40MzEyLCA2MzAuNDI1Nl0sXG4gIFsxODE1Ljk5NCwgNjMzLjI4NjZdLFxuICBbMTgxNS40MDc4LCA2MjkuNDY5Nl0sXG4gIFsxODE1LjczODMsIDYyNS4wMjExXSxcbiAgWzE4MTUuMDYxMiwgNjIwLjkwMjQ3XSxcbiAgWzE4MTQuMDc1LCA2MTcuMDI0OV0sXG4gIFsxODExLjE1OTIsIDYyMy41MzI1XSxcbiAgWzE4MTEuNTc4OSwgNjI3LjIzOTI2XSxcbiAgWzE4MTAuODg2LCA2MTkuNjc5M10sXG4gIFsxODA3Ljc2NjIsIDYxNy4zMzE4XSxcbiAgWzE4MDcuNzk4MywgNjEzLjY1NDJdLFxuICBbMTgwNC40MzA1LCA2MTQuNTEzOF0sXG4gIFsxODAwLjcxMTMsIDYxNS40MDAyN10sXG4gIFsxNzk3LjEwNjYsIDYxNi42MTc4XSxcbiAgWzE3OTQuMTY3LCA2MTkuNTQyNV0sXG4gIFsxNzk3LjAyNTgsIDYyNC4xMDU2XSxcbiAgWzE3OTkuNTE3OCwgNjIwLjMzNzE2XSxcbiAgWzE4MDMuNzE3OCwgNjE4LjUzNjU2XSxcbiAgWzE4MDcuMjExNywgNjIxLjQ1NzE1XSxcbiAgWzE4MDYuOTY0NywgNjI1LjgxODU0XSxcbiAgWzE4MDQuNDg4NiwgNjI5LjM4NjY2XSxcbiAgWzE4MDMuNDgxOSwgNjIyLjY1OF0sXG4gIFsxODAxLjM3OTQsIDYyNS43MTMyNl0sXG4gIFsxNzk5LjQ2MjYsIDYyOS41ODczNF0sXG4gIFsxNzk3LjkyODIsIDYzNC4yNThdLFxuICBbMTc5NS40NzYxLCA2MzguNjE3Ml0sXG4gIFsxNzkxLjg1MzgsIDY0Mi4zMDQ3NV0sXG4gIFsxNzkzLjIwOTQsIDY0Ny4xMDAxNl0sXG4gIFsxNzg3LjQwNiwgNjQxLjM2MjZdLFxuICBbMTc4My4wNjE0LCA2NDEuNTc4NTVdLFxuICBbMTc3OC40OTMyLCA2NDIuOTRdLFxuICBbMTc3Ni4yODQyLCA2NDYuMDcxOV0sXG4gIFsxNzcyLjAwMTYsIDY0NC45MTc1XSxcbiAgWzE3NzMuNTMwMywgNjQwLjcyMTldLFxuICBbMTc2OC41NTUyLCA2NDAuNjkwNTVdLFxuICBbMTc2NC43ODc0LCA2NDIuOTEyODRdLFxuICBbMTc2NC4yMDc2LCA2NDcuMDg2Ml0sXG4gIFsxNzYwLjM2NSwgNjQ4LjMzODEzXSxcbiAgWzE3NjQuMzQ5OSwgNjUxLjYzNDE2XSxcbiAgWzE3NjYuMjQ2OCwgNjU1LjYwNDFdLFxuICBbMTc2OC40MzU4LCA2NTkuNDc4NV0sXG4gIFsxNzY4LjcwMTUsIDY2NC4wMjcxNl0sXG4gIFsxNzY3LjIzMDUsIDY2Ny42NDQ5Nl0sXG4gIFsxNzY0LjQ2OTcsIDY2NC43Mjk4XSxcbiAgWzE3NjEuMTcwNCwgNjYyLjg1MTE0XSxcbiAgWzE3NTcuMDc4MSwgNjYyLjU2ODZdLFxuICBbMTc1NS4zMTU4LCA2NjYuMDQwNjVdLFxuICBbMTc1MS4xMzI4LCA2NjYuNjA4M10sXG4gIFsxNzQ5LjcyMTYsIDY3MC43ODddLFxuICBbMTczNi40MjIxLCA2NjkuMjM1ODRdLFxuICBbMTc0Mi4yMjM2LCA2NjUuMTA4OF0sXG4gIFsxNzQ2LjQ1NjMsIDY2My4zODI3XSxcbiAgWzE3NDIuNzE3MywgNjU4LjUzMjRdLFxuICBbMTczOC4wMDI2LCA2NTguMTExM10sXG4gIFsxNzQwLjE0NSwgNjUyLjEzMzFdLFxuICBbMTc0NS43NTMsIDY1My4yNDk2M10sXG4gIFsxNzUxLjEwODQsIDY1NS45OTgzNV0sXG4gIFsxNzUxLjU3NDIsIDY2MS41NDAzXSxcbiAgWzE3NDcuNDk3NiwgNjU4LjUyMDldLFxuICBbMTczOC4wMTIzLCA2NjMuODEzM10sXG4gIFsxNzMzLjEwMTksIDY2Mi43NDE0XSxcbiAgWzE3MzEuMTcxOSwgNjY4LjA3Mzg1XSxcbiAgWzE3MjYuOTM4MSwgNjcwLjgzMjRdLFxuICBbMTczMS41ODYyLCA2NzQuMDQ3XSxcbiAgWzE3MjkuMzkwNiwgNjc5LjU1MzM0XSxcbiAgWzE3MjQuNjE5NCwgNjc2LjE0MjddLFxuICBbMTcxOC45MjU4LCA2NzguODA5Nl0sXG4gIFsxNzIzLjQ0MDIsIDY4Mi45Njc4XSxcbiAgWzE3MTQuMTg4NSwgNjkyLjc1MDJdLFxuICBbMTcxMC4yODU2LCA3MDYuMzI0MTZdLFxuICBbMTcwOS4zNDI0LCA3MTQuNDQyOF0sXG4gIFsxNzQ2LjIwOTEsIDcwNC43ODk5XSxcbiAgWzE3NDUuNDUwNywgNjk2LjM4NTddLFxuICBbMTc0Ni42MzczLCA2ODkuOTI4N10sXG4gIFsxNzQ3Ljc3ODEsIDY4NC41MDE4M10sXG4gIFsxNzQ4LjY0NTksIDY3NS40MDYxXSxcbiAgWzE3NTEuMjQ4OCwgNjc5LjkzOV0sXG4gIFsxNzYwLjUyNTQsIDY3OS4xMTI5XSxcbiAgWzE3NTYuNjYxMSwgNjc5Ljk2MjQ2XSxcbiAgWzE3NTQuNTkwOCwgNjg0LjI1MDZdLFxuICBbMTc1MS44MTI5LCA2OTQuNTA2N10sXG4gIFsxNzUzLjU3NjcsIDY4OS4xMjY4M10sXG4gIFsxNzYwLjY1MDUsIDY4NS4zMjE0XSxcbiAgWzE3NjUuMDA1NCwgNjgwLjYyMzU0XSxcbiAgWzE3NjkuNDY4NCwgNjg1LjgxMzFdLFxuICBbMTc3MC43OTA4LCA2ODAuMzUyMjNdLFxuICBbMTc2Ny44NDY5LCA2NzUuMjIxMDddLFxuICBbMTc2My40MzMyLCA2NzUuMzMxNF0sXG4gIFsxNzU5LjAzNDksIDY3NC4zMDkxXSxcbiAgWzE3NTQuMzY4NywgNjc1LjQwMjRdLFxuICBbMTc1NS40MzQ2LCA2NzAuNTk5Nl0sXG4gIFsxNzU5LjU0MjIsIDY2Ni43MDA4N10sXG4gIFsxNzYxLjU0MzcsIDY3MC4wODU3XSxcbiAgWzE3NjUuMzU3MiwgNjcxLjI1MjldLFxuICBbMTc3MC4wNDI3LCA2NzAuOTI4Nl0sXG4gIFsxNzcyLjc5OTksIDY2Ny44MDI4Nl0sXG4gIFsxNzc3LjU2MzgsIDY2Ny4yNzc3XSxcbiAgWzE3ODMuMTE0NSwgNjY5LjcxODkzXSxcbiAgWzE3ODUuNTE0NiwgNjc0LjQ2NzNdLFxuICBbMTc4MC4zMDc2LCA2NzcuNTEwODZdLFxuICBbMTc3Ni4xMTQ3LCA2ODAuNzYxOTZdLFxuICBbMTc3NS45NTAyLCA2ODYuNDE1NDddLFxuICBbMTc3OC40NzU1LCA2OTIuMzg3Ml0sXG4gIFsxNzgyLjA5NjQsIDY4OC41Nzg1NV0sXG4gIFsxNzgxLjU2NDUsIDY4My44NjY5NF0sXG4gIFsxNzg0Ljc1NTYsIDY4MC4zNzkyXSxcbiAgWzE3ODkuNjk3LCA2NzguOTcxOV0sXG4gIFsxNzkxLjUxOSwgNjczLjkyNzU1XSxcbiAgWzE3ODkuNDIzOCwgNjY4LjgwMzFdLFxuICBbMTc4OS42Mzg0LCA2NjEuMjY1Nl0sXG4gIFsxNzg1Ljc3MjcsIDY2NC44NzE3XSxcbiAgWzE3ODAuNTg3MywgNjYzLjE1NTFdLFxuICBbMTc3NS42NzU1LCA2NjMuNTYwOV0sXG4gIFsxNzcyLjAzMDYsIDY2Mi41NTYzNF0sXG4gIFsxNzc2LjU2NDEsIDY1OS40ODg0Nl0sXG4gIFsxNzcyLjcxNDcsIDY1Ny45NjAzXSxcbiAgWzE3NzEuMjY4MywgNjU0LjExMzk1XSxcbiAgWzE3NjQuMTAxMywgNjU5Ljg1OTRdLFxuICBbMTc1OS4yNTU2LCA2NTkuMDQ5M10sXG4gIFsxNzYxLjM1MzMsIDY1NS44OTU5XSxcbiAgWzE3NTQuODA4OCwgNjU5LjAxMzU1XSxcbiAgWzE3NTYuMjgyMSwgNjU1LjQ5MTk0XSxcbiAgWzE3NTUuNjUxLCA2NTEuNzY2OTddLFxuICBbMTc1MS4yMzQ0LCA2NTEuNDk5MTVdLFxuICBbMTc0Ny45OTI4LCA2NDguMTcyNl0sXG4gIFsxNzQzLjUzNDksIDY0Ni44Mzc1XSxcbiAgWzE3MTguMjUwNSwgNjIzLjk3MjUzXSxcbiAgWzE3MTIuOTQ1NiwgNjE0LjAzMTA3XSxcbiAgWzE3MTguMzcwNCwgNjE2LjkwODQ1XSxcbiAgWzE3MjQuMTYsIDYyMC4zMDA5XSxcbiAgWzE3MjQuMjgxLCA2MTMuMzkxXSxcbiAgWzE3MjcuNjQ1NiwgNjA2Ljg1NTgzXSxcbiAgWzE3MzEuMzExMywgNjEwLjU5Nzk2XSxcbiAgWzE3MzYuMjgxMiwgNjEzLjk2NjJdLFxuICBbMTczOS43NDEyLCA2MDguMDI4MjZdLFxuICBbMTc1MC4xNzUzLCA2MDMuMzA3NF0sXG4gIFsxNzU2LjIzMDIsIDYwMy40MDA3Nl0sXG4gIFsxNzQ2LjIyMTcsIDYwOC4zODQ3N10sXG4gIFsxNzQzLjY4NywgNjAyLjc3NzZdLFxuICBbMTczNS4yNDAxLCA2MDUuMDgwM10sXG4gIFsxNzI5LjQ1MDEsIDU5My4wMzM5XSxcbiAgWzE3MjYuMzgwNCwgNTg3Ljk5MjU1XSxcbiAgWzE3MjIuODcsIDU5Mi4yMl0sXG4gIFsxNzI1LjEyNywgNTk2LjY4NTddLFxuICBbMTcxOS43MjYzLCA2MDAuODYyMDZdLFxuICBbMTcxOC41OTE3LCA1OTUuMzMyM10sXG4gIFsxNzE3LjI5NDgsIDU4OS4wNzY1XSxcbiAgWzE3MjIuMDk2LCA1ODcuNTIyNzddLFxuICBbMTcyMC43OTQxLCA1ODMuNzU1MDddLFxuICBbMTcxOS4yNzM2LCA1NzkuNTI5Nl0sXG4gIFsxNzI3Ljc1MDEsIDU4Mi41MzIxXSxcbiAgWzE3MjQuNzI1NiwgNTc4LjY2NjE0XSxcbiAgWzE3MzAuNjU0LCA1NzYuNjE2MV0sXG4gIFsxNzM0LjgwMSwgNTcxLjk0ODg1XSxcbiAgWzE3MzkuMTM3NywgNTY3LjUwNTc0XSxcbiAgWzE3MzQuMTQ4NiwgNTY0LjE4NjQ2XSxcbiAgWzE3MjguNDg1NywgNTYxLjA1MjJdLFxuICBbMTczMC42MDI4LCA1NTMuNzM5MTRdLFxuICBbMTczNS4xODIzLCA1NTYuNjM4NTVdLFxuICBbMTczOS4xNjExLCA1NjAuMDI4NTZdLFxuICBbMTc0My4wODE0LCA1NjIuNDYzMl0sXG4gIFsxNzQ2LjI5OCwgNTY2LjcwNTddLFxuICBbMTc0OC45NzA2LCA1NjEuNzM1ODRdLFxuICBbMTc0Ni4wMTI3LCA1NTcuNDczM10sXG4gIFsxNzQyLjYyMDEsIDU1NC4yNDk2M10sXG4gIFsxNzQ2LjU5NTUsIDU0OC41NDQ0XSxcbiAgWzE3NDkuNjExMSwgNTUyLjc3NjVdLFxuICBbMTc1Ni41NDU3LCA1NTMuNTIyNl0sXG4gIFsxNzUyLjUzNiwgNTU3LjA5MThdLFxuICBbMTc2NS4wODEzLCA1NjEuNjU4NTddLFxuICBbMTc1OS43MjYzLCA1NjQuOTMxXSxcbiAgWzE3NjcuNTkxNiwgNTY3LjIyMjA1XSxcbiAgWzE3NjcuODI1NywgNTc2LjE4NjddLFxuICBbMTc2MS42NzE2LCA1ODMuNTA5NV0sXG4gIFsxNzYzLjI5OTMsIDU4OS4xMTU4XSxcbiAgWzE3NTYuNjU5NSwgNTg4LjEzNTg2XSxcbiAgWzE3NTguODM2MywgNTk0LjY2MzFdLFxuICBbMTc1My43NjI4LCA1OTcuMDAyNzVdLFxuICBbMTc0OC4yODkxLCA1ODUuMjk5N10sXG4gIFsxNzUwLjU1OTYsIDU4MC4zMjU0XSxcbiAgWzE3NDMuNTQwMiwgNTcxLjY5NzVdLFxuICBbMTc0MC41NTgsIDU3NS42MzFdLFxuICBbMTczNi42Mjk2LCA1NzguNzMzOV0sXG4gIFsxNzMzLjg3NjUsIDU4Mi44OTA3NV0sXG4gIFsxNzMxLjExMzgsIDU4Ny4yOTgxNl0sXG4gIFsxNzM1LjYzNzEsIDU4OS4yNjY3XSxcbiAgWzE3NDAuNTI0NSwgNTg4Ljc3NjFdLFxuICBbMTc0MC4zNjM5LCA1ODMuODU0M10sXG4gIFsxNzQ0LjEzNywgNTgwLjAyODddLFxuICBbMTc0OC4yMDEsIDU3NS44MTM1XSxcbiAgWzE3NTUuOTI4MiwgNTgxLjQzOTddLFxuICBbMTc2MS4zOTU0LCA1NzcuNDM3XSxcbiAgWzE3NjMuNTIzLCA1NzEuMzM0N10sXG4gIFsxNzU4LjA3NjQsIDU3MC4xMTg0N10sXG4gIFsxNzU0Ljk5NTQsIDU3NC44MDIwNl0sXG4gIFsxNzQ5LjkwNjIsIDU3MS4xNjY1XSxcbiAgWzE3NTIuOTg5NywgNTY3LjE0NThdLFxuICBbMTc1NC40NDQ1LCA1NjEuOTgxOF0sXG4gIFsxNzU5LjU2NDUsIDU1OC41NjMxXSxcbiAgWzE3NjQuMTE2MiwgNTUzLjc2OTNdLFxuICBbMTc2OS45NzE0LCA1NTUuOTkzM10sXG4gIFsxNzcwLjI4NDksIDU0OC40NzI4NF0sXG4gIFsxNzYzLjk4NjEsIDU0NS43NTA2XSxcbiAgWzE3NjcuODY2NSwgNTQwLjY2MTI1XSxcbiAgWzE3NjUuMDQ4MiwgNTMzLjM1Mzc2XSxcbiAgWzE3NTkuMDM4MSwgNTMyLjEyMzE3XSxcbiAgWzE3NTMuMDYwNSwgNTMxLjA1NThdLFxuICBbMTc2MC41NDg1LCA1MzguOTYxOF0sXG4gIFsxNzU5LjQ4ODQsIDU0OC45MTY0XSxcbiAgWzE3NTMuMDYxOSwgNTQ4LjA0MDldLFxuICBbMTc1Ni41MzYxLCA1NDMuMTQyMV0sXG4gIFsxNzQ3LjM1MjksIDUyOS42OTk0Nl0sXG4gIFsxNzQxLjQzNjIsIDUyOS40ODU2XSxcbiAgWzE3NDIuODMxLCA1MjMuNDY0Nl0sXG4gIFsxNzM2Ljg0MTMsIDUyMy4xMzM5XSxcbiAgWzE3MzAuNDU2MywgNTI0LjIyODNdLFxuICBbMTcyMy45MTQ5LCA1MjUuMzg0NzddLFxuICBbMTcyMy45OTU1LCA1MzEuNzc1NjNdLFxuICBbMTcyNy4yOTUyLCA1MzYuOTgwMl0sXG4gIFsxNzMwLjY2LCA1MzEuMzM0Nl0sXG4gIFsxNzM1LjY2MDksIDUyOC42NDk3XSxcbiAgWzE3MzcuNjU1NiwgNTM0LjYxMDldLFxuICBbMTczMy40MTc3LCA1MzguNDk1OF0sXG4gIFsxNzM4LjE1MzYsIDU0MS42NDYzXSxcbiAgWzE3MjkuMTI3NywgNTQyLjU5Njg2XSxcbiAgWzE3MzIuMzk2NSwgNTQ2LjQzMDg1XSxcbiAgWzE3MzUuOTkxNiwgNTQ5LjE3MzE2XSxcbiAgWzE3MjYuMjk1OSwgNTQ4Ljg2NDg3XSxcbiAgWzE3MjMuMDg4LCA1NDIuNDg1OV0sXG4gIFsxNzE5LjM4NDUsIDUzNi45MjY0XSxcbiAgWzE3MTIuMzEwNSwgNTM3LjE1MDI3XSxcbiAgWzE3MTUuODU1LCA1NDMuNTE0MV0sXG4gIFsxNzIwLjA3NjgsIDU0OC43NjZdLFxuICBbMTcxNy45NzAzLCA1NTQuNzM5MTRdLFxuICBbMTcyNC40MTU4LCA1NTUuMjk1Nl0sXG4gIFsxNzIxLjQ1MjMsIDU2MC45NjgyXSxcbiAgWzE3MjIuODMwNywgNTY3LjAyMzldLFxuICBbMTcyOS4wOTc0LCA1NjguMDgwMl0sXG4gIFsxNzI1LjM2NzIsIDU3Mi44MTkxNV0sXG4gIFsxNzE5Ljk0NDMsIDU3NC45NjQ2XSxcbiAgWzE3MTguMTc4NywgNTcwLjAzNjU2XSxcbiAgWzE3MTQuMzM4NiwgNTc1LjY2MjldLFxuICBbMTcxNS4zMTMsIDU4Mi40NzM5XSxcbiAgWzE3MTIuNjM0MywgNTg4LjAyOTddLFxuICBbMTcxMy40MDgsIDU5NS4wNDkxM10sXG4gIFsxNzA3LjI4NjYsIDU5OC4xNzc4XSxcbiAgWzE2OTguNDE3NSwgNjAyLjI4NDRdLFxuICBbMTcwMC42MzIyLCA1OTYuMzU4MV0sXG4gIFsxNzAzLjczNDUsIDU5Mi4zMzExXSxcbiAgWzE3MDkuMDMzOSwgNTkyLjA5ODVdLFxuICBbMTcwMS4yMTAxLCA1ODcuNzM1Ml0sXG4gIFsxNjk3LjE4OCwgNTkwLjQ1NjldLFxuICBbMTY5NS4zMDE1LCA1OTUuMjY2OF0sXG4gIFsxNjkxLjE0MTcsIDU5MS43NDc0NF0sXG4gIFsxNjg2Ljg2NiwgNTg4LjQyMjY3XSxcbiAgWzE2ODguMzY5NCwgNTgzLjgxMzddLFxuICBbMTY5Ny41MjY2LCA1ODMuOTA3Ml0sXG4gIFsxNjkyLjk1ODUsIDU4Ni45NzA2XSxcbiAgWzE2OTIuMzg5NiwgNTgxLjI5MzRdLFxuICBbMTY5MC41NTgzLCA1NzUuMjU3MV0sXG4gIFsxNjk5Ljk3OCwgNTcwLjk1OTM1XSxcbiAgWzE3MDQuNzI1NywgNTY5LjM0ODldLFxuICBbMTY5Ni4zNjE3LCA1NzMuNDgyNF0sXG4gIFsxNjk1LjQyMzgsIDU3OC4wMzQ2N10sXG4gIFsxNzAwLjA5NzIsIDU3OC45NTMxXSxcbiAgWzE3MDMuNDUzMiwgNTgyLjg0MjNdLFxuICBbMTcwNi40MSwgNTg3LjMwMDY2XSxcbiAgWzE3MDkuNjE4NCwgNTgzLjczMjg1XSxcbiAgWzE3MTAuOTQzNCwgNTc5LjEwNzRdLFxuICBbMTcwNi4xOTU4LCA1NzguNzY0NF0sXG4gIFsxNzAyLjk0ODYsIDU3NS4wNDI1XSxcbiAgWzE3MDguNDgwOCwgNTczLjQ5NDZdLFxuICBbMTcxMi45MTExLCA1NzAuMTk1MDddLFxuICBbMTcwOS4yNjQ5LCA1NjUuOTQ1OV0sXG4gIFsxNzE1LjQ0NTMsIDU2My43NDY2XSxcbiAgWzE3MTIuNzEwMiwgNTU3LjA3MDZdLFxuICBbMTcwOC4wNzI1LCA1NTkuODEzXSxcbiAgWzE3MDMuODI1LCA1NjMuMTg5NV0sXG4gIFsxNjk5LjgxMjcsIDU2NS40MTg5XSxcbiAgWzE2OTUuODIzMSwgNTYxLjI1ODZdLFxuICBbMTcwMS4zNTMzLCA1NTguMTA4N10sXG4gIFsxNjk5Ljg3OTYsIDU1Mi41NjY2NV0sXG4gIFsxNzA2LjM3MTgsIDU1Mi44NzA2XSxcbiAgWzE3MTIuMzE2OSwgNTQ5Ljc2MzM3XSxcbiAgWzE3MDguMTUyMywgNTQzLjg0M10sXG4gIFsxNzAwLjUxMDUsIDU0MS4yMDg1Nl0sXG4gIFsxNzAyLjM4OTMsIDU0Ny4xNjMxXSxcbiAgWzE2OTUuMjYzNywgNTQ4LjU0OTQ0XSxcbiAgWzE2ODUuNjQ1NiwgNTQ5LjIwNzldLFxuICBbMTY4OS45MDQzLCA1NTMuMjI3NV0sXG4gIFsxNjk1LjA0MTYsIDU1NS43NjczXSxcbiAgWzE2OTUuNDY4NSwgNTY3LjE3NjNdLFxuICBbMTY5MS42MzUsIDU3MC4xNjc4XSxcbiAgWzE2ODYuMzcwOCwgNTc4LjcyNjQ0XSxcbiAgWzE2ODQuOTkyNCwgNTczLjQyNTZdLFxuICBbMTY4Ni4zOTA0LCA1NjguNTQ1NTNdLFxuICBbMTY4NC45MzgyLCA1NjMuMjZdLFxuICBbMTY5MC42OTE5LCA1NjQuMzkxNjZdLFxuICBbMTY4OS4yODQyLCA1NTkuMDc1Nl0sXG4gIFsxNjgzLjI0NzgsIDU1Ni40OTYxNV0sXG4gIFsxNjg1LjAxNzMsIDU0MS4yMzc1NV0sXG4gIFsxNjgwLjEzMDcsIDU0OS44NDI2XSxcbiAgWzE2NzYuMjgsIDU1My4xMTU4XSxcbiAgWzE2NzAuMTI2MSwgNTUxLjQ2NTQ1XSxcbiAgWzE2NjQuNzQyNywgNTQ3LjQ1MzRdLFxuICBbMTY2Ni40MTM2LCA1NDEuMjcxNV0sXG4gIFsxNjczLjMzOTgsIDUzOS43MDFdLFxuICBbMTY2OC43MDc5LCA1MzUuODkyOTRdLFxuICBbMTY2My4yOTkzLCA1MzQuMzE5OF0sXG4gIFsxNjU3LjE1NjQsIDUzNi4yODY0XSxcbiAgWzE2NTIuNjY5LCA1MjkuODU0MjVdLFxuICBbMTY1OC4yMzAyLCA1MjkuODddLFxuICBbMTY2My40NDczLCA1MjcuNjQ0MDRdLFxuICBbMTY2OC40NzM2LCA1MjguNzg2MV0sXG4gIFsxNjcyLjk1MzYsIDUyNS4yMDg0NF0sXG4gIFsxNjcwLjk0NTQsIDUxOS41NTQ0NF0sXG4gIFsxNjY2LjA2NzcsIDUyMi4wNDgwM10sXG4gIFsxNjY1LjIxLCA1MTUuMjU5NzddLFxuICBbMTY3MC4wODUsIDUxNC4wMzZdLFxuICBbMTY3Ni42NzgxLCA1MTkuNzk5NF0sXG4gIFsxNjgyLjMxMTgsIDUxOS40MjMyXSxcbiAgWzE2NzkuMzU3NCwgNTI0LjQ0OTc3XSxcbiAgWzE2NzUuNDQxOSwgNTE1LjI2NTVdLFxuICBbMTY3OC41OTIyLCA1MTEuNTU5MDhdLFxuICBbMTY4MS40OTU2LCA1MTUuMDY2NjVdLFxuICBbMTY4Ny4wMDc5LCA1MTUuMjAxNjZdLFxuICBbMTY5Mi40MDQyLCA1MTUuNzk5NzRdLFxuICBbMTcwMS41NzUsIDUyMC40MjYxNV0sXG4gIFsxNzA4LjcxNDIsIDUyMC44OTA1XSxcbiAgWzE3MDUuNjM4NSwgNTE0LjIxODNdLFxuICBbMTcxMi44MjY1LCA1MTQuMTU3NjVdLFxuICBbMTcwOS44NjcyLCA1MDcuODMwM10sXG4gIFsxNzAzLjcyMjIsIDUwOC4wNTEyN10sXG4gIFsxNjk2LjgzMDEsIDUwNi4zNDUxOF0sXG4gIFsxNjk2LjgxMjUsIDUxMC43MzUxN10sXG4gIFsxNjkxLjA4NzQsIDUxMC45MjY4OF0sXG4gIFsxNjkxLjkzMjQsIDUwNi4xNDIxXSxcbiAgWzE2ODkuODExNCwgNTAyLjAyOTM2XSxcbiAgWzE2ODguMTcxMywgNDk3LjI4ODY0XSxcbiAgWzE2OTIuNDgwNywgNDk4LjE4MDAyXSxcbiAgWzE2OTEuNzMzNCwgNDkzLjgxODE4XSxcbiAgWzE2OTUuNjA1MSwgNDkyLjUzODNdLFxuICBbMTY5OS44ODcyLCA0OTEuNTcwMjhdLFxuICBbMTcwNC41NDAzLCA0ODkuNzcwNl0sXG4gIFsxNzA2LjA1NTcsIDQ4NS4yMjldLFxuICBbMTcwOC43NDM1LCA0ODIuMTgxMjRdLFxuICBbMTcwOC42MDI4LCA0NzguNTAzNDhdLFxuICBbMTcwNC42MjQzLCA0NzkuNzIzNV0sXG4gIFsxNzAxLjkzOTUsIDQ4Mi43NTM4NV0sXG4gIFsxNzAwLjkxNTUsIDQ4Ni43NDA3OF0sXG4gIFsxNjk2LjgwMjYsIDQ4Ny40MDA4OF0sXG4gIFsxNjkyLjk3LCA0ODguNTA0MzNdLFxuICBbMTY4OS41NTQzLCA0ODkuNjUyNzddLFxuICBbMTY4Ny41MDIyLCA0OTIuNzQ0NzJdLFxuICBbMTY4NC4zNTUsIDQ5NS4wMzQ3M10sXG4gIFsxNjgxLjc4NywgNDk3LjQ0NjY2XSxcbiAgWzE2ODQuOTMwMywgNTAwLjA4OTcyXSxcbiAgWzE2ODYuMDQwOSwgNTA0LjI2NDc0XSxcbiAgWzE2ODcuMjU5MywgNTA4LjM3NjUzXSxcbiAgWzE2ODMuNTMyMywgNTEwLjg4NTA3XSxcbiAgWzE2ODIuMDc5NywgNTA3LjAyMDJdLFxuICBbMTY4MS40OTY2LCA1MDMuMjQ4OTZdLFxuICBbMTY3OS4wMjE5LCA1MDAuOTgwMDRdLFxuICBbMTY3OC4yNDY4LCA0OTcuNDE4MTVdLFxuICBbMTY3Ni4yNjk1LCA0OTQuNTczOTddLFxuICBbMTY3Ni4wNTUyLCA0OTAuNTcwNzRdLFxuICBbMTY3Mi40ODYsIDQ5NC43MzkwN10sXG4gIFsxNjY4LjE3NjgsIDQ5Ni4zMDI4XSxcbiAgWzE2NjkuODYsIDQ5MS44ODg1Ml0sXG4gIFsxNjczLjM0MTEsIDQ4Ny45Mjk3OF0sXG4gIFsxNjY5LjM0NDcsIDQ4Ny42NDQ2XSxcbiAgWzE2NjYuMDMzNCwgNDg5Ljc5MDI1XSxcbiAgWzE2NjYuNjksIDQ4NC40MDI1M10sXG4gIFsxNjcxLjAzMDMsIDQ4My42NzAxXSxcbiAgWzE2NzUuMTE3NywgNDgyLjk2MDA1XSxcbiAgWzE2NzcuNzYxNiwgNDg1Ljk2Mzg3XSxcbiAgWzE2ODAuNjA1NywgNDg4LjM4MTRdLFxuICBbMTY4My4yMTYzLCA0ODQuNTE0OThdLFxuICBbMTY3OS42Mjc3LCA0ODEuODU0NThdLFxuICBbMTY4NC4yMTM5LCA0ODAuMjk3ODJdLFxuICBbMTY4OC44Mzc1LCA0NzguMzYxNTRdLFxuICBbMTY5MS43NTgzLCA0NzUuNTcyMV0sXG4gIFsxNjk0Ljk2MTcsIDQ3My44MjcyN10sXG4gIFsxNjk2LjI0NjMsIDQ3MC42OTE1XSxcbiAgWzE2OTUuOTkzNCwgNDY2LjkxOTNdLFxuICBbMTY5MC41MTU5LCA0NzEuNjE1MDVdLFxuICBbMTY5Mi4wMTA0LCA0NjguMDA1NTVdLFxuICBbMTY4Ny4yOTE3LCA0NjguNDg1MDVdLFxuICBbMTY4Mi45NjI2LCA0NjcuNTExMzJdLFxuICBbMTY4NC44OTg5LCA0NzEuNjI2Nl0sXG4gIFsxNjgxLjEyMTYsIDQ3My4zMzI5XSxcbiAgWzE2ODcuNTg5NiwgNDc0LjgwNjUyXSxcbiAgWzE2ODQuMTYwNCwgNDc2LjIyMjc4XSxcbiAgWzE2ODAuMzQwMSwgNDc3LjYxODA0XSxcbiAgWzE2NzYuMTc2OCwgNDc4LjQ2MzJdLFxuICBbMTY3Mi4yNzgxLCA0NzkuMjEyNF0sXG4gIFsxNjY4LjM1NCwgNDc5LjY0NjU1XSxcbiAgWzE2NjQuNjE5OCwgNDgwLjUwNjddLFxuICBbMTY2Mi40OTU4LCA0ODMuNDIyNThdLFxuICBbMTY2My4yMTY5LCA0ODcuMzQyNDddLFxuICBbMTY2MS44MTE0LCA0OTEuNDAzNF0sXG4gIFsxNjU0Ljg3ODIsIDQ5NS4wNDQ5XSxcbiAgWzE2NTYuNjQ4LCA0OTcuOTI3NjddLFxuICBbMTY1NS42MDUsIDUwMS42MzQxNl0sXG4gIFsxNjUyLjI0MzUsIDUwMi4yNzE3XSxcbiAgWzE2NTIuNzQ0LCA0OTguNzA1OF0sXG4gIFsxNjQ5LjEwMSwgNTAwLjUyNzA0XSxcbiAgWzE2NDguMTg3MywgNDk3LjQyMDQ3XSxcbiAgWzE2NTAuODgyOCwgNDk1Ljc0MDIzXSxcbiAgWzE2NTEuODc4NCwgNDkyLjcyMTldLFxuICBbMTY0OC45MTkzLCA0OTAuNTQ4NzddLFxuICBbMTY0Ny40NjUxLCA0OTMuNDQyMzJdLFxuICBbMTY0NC42MjE2LCA0OTUuNTgxXSxcbiAgWzE2NDUuMDgxMywgNDk5LjMxNzZdLFxuICBbMTYzNy40MjQzLCA0OTkuNzM0NDRdLFxuICBbMTYzOC45MjkyLCA1MDMuNTE1NDddLFxuICBbMTY0MS44Mzc1LCA1MDEuNTgwMDJdLFxuICBbMTY0MS4zODEzLCA0OTcuOTk4OTZdLFxuICBbMTYzOC4zNDIzLCA0OTUuOTc5MDZdLFxuICBbMTYzNS4yNjc1LCA0OTUuNzY0ODNdLFxuICBbMTYzMi44Nzk1LCA0OTAuMzU0NThdLFxuICBbMTYzMi4wNTEsIDQ5My41OTM3XSxcbiAgWzE2MzIuMDQyMSwgNDk2Ljk5OTddLFxuICBbMTYzMy4xMzc3LCA1MDAuMDE4M10sXG4gIFsxNjM0Ljg1NTcsIDUwMy4wMDA5OF0sXG4gIFsxNjMyLjA4OTQsIDUwNS43OTE1Nl0sXG4gIFsxNjI5Ljg3MTEsIDUwMi40MjI2N10sXG4gIFsxNjI4LjM0ODgsIDQ5OC42Mzg5OF0sXG4gIFsxNjI4LjEwNzUsIDQ5NC43ODE5OF0sXG4gIFsxNjI4Ljc2NTUsIDQ5MC44NTE2Ml0sXG4gIFsxNjMxLjE3MTEsIDQ4Ny4zMDA3OF0sXG4gIFsxNjMyLjg4OTQsIDQ4MC44MTIyM10sXG4gIFsxNjM0LjEwODIsIDQ4NC40Mjc0M10sXG4gIFsxNjM3LjA2ODgsIDQ4MC42NjY1XSxcbiAgWzE2MzUuOTg3NSwgNDc2Ljg5MjQzXSxcbiAgWzE2MzguOTM0MSwgNDc0LjA0MzA2XSxcbiAgWzE2MzUuNjQzOSwgNDcyLjMxMzQ1XSxcbiAgWzE2MjYuMTQyMSwgNDY4Ljk5NTEyXSxcbiAgWzE2MjguMTMyOSwgNDcyLjI2NzldLFxuICBbMTYzMS4yNzksIDQ3MC4yMDEzXSxcbiAgWzE2MzIuMjg4MSwgNDY2LjI2MzUyXSxcbiAgWzE2MzIuODgzNSwgNDYyLjI3MTQ4XSxcbiAgWzE2MzYuMTYyNywgNDYxLjE5NDldLFxuICBbMTY0MS4zNzA0LCA0NTcuMDc0MzRdLFxuICBbMTY0My41NzQ1LCA0NTkuOTc0MzNdLFxuICBbMTY0Ni44NzkyLCA0NTguODU0Nl0sXG4gIFsxNjUwLjAxODksIDQ1Ny42NDA2XSxcbiAgWzE2NTMuNzgzNywgNDU3Ljc0MDcyXSxcbiAgWzE2NDguNTkwMSwgNDUyLjk4ODk1XSxcbiAgWzE2NDUuMzI2MiwgNDU1LjI3MDk0XSxcbiAgWzE2NDIuNTg3OSwgNDUyLjI0NjAzXSxcbiAgWzE2NDUuOTUyOCwgNDQ5Ljg2Mjg1XSxcbiAgWzE2NDcuMjk5MSwgNDQ2LjMyOTU2XSxcbiAgWzE2NDEuNzg0OSwgNDQ3LjU5NDgyXSxcbiAgWzE2NDMuMzcxNywgNDQzLjgyODU1XSxcbiAgWzE2MzguNTI0LCA0NDMuNDg3OF0sXG4gIFsxNjQwLjk3ODYsIDQzOS42MTI5OF0sXG4gIFsxNjM1LjkzODcsIDQzOS40Mjg1M10sXG4gIFsxNjMyLjcyNTgsIDQzNS42Mzg3M10sXG4gIFsxNjMwLjg5NjksIDQzOS44OTYwNl0sXG4gIFsxNjMzLjc0NDEsIDQ0NC4wNDkxM10sXG4gIFsxNjM3LjA1MzcsIDQ0Ny4xMDk0NF0sXG4gIFsxNjMzLjkyMDUsIDQ0OS40MzYyMl0sXG4gIFsxNjM4LjQ4NjgsIDQ1MC42NDI2NF0sXG4gIFsxNjM4LjgwNTgsIDQ1NC4yMTI5NV0sXG4gIFsxNjM3LjI5NzYsIDQ1Ny42MjI5XSxcbiAgWzE2MzMuMjc2OSwgNDU3LjkxNTM3XSxcbiAgWzE2MzQuNDUzNiwgNDUzLjU5MjRdLFxuICBbMTYzMC4wODg3LCA0NTUuNTQ1Nl0sXG4gIFsxNjI4Ljk1NDYsIDQ1OS40ODIzNl0sXG4gIFsxNjI2LjA3MjUsIDQ2Mi44NDE5XSxcbiAgWzE2MjAuNjk4MiwgNDU3LjUxNTg3XSxcbiAgWzE2MjEuNzUyMywgNDUzLjYyMDhdLFxuICBbMTYxNy4zNDk2LCA0NTUuNzM3Nl0sXG4gIFsxNjE3LjQ3MiwgNDUxLjk4Njc2XSxcbiAgWzE2MTYuNDgwNywgNDQ4LjA4MTM2XSxcbiAgWzE2MjAuMzk4NCwgNDQ5LjE1Mzc1XSxcbiAgWzE2MTcuODMyNCwgNDQ0LjEzODNdLFxuICBbMTYyMi4zNDMsIDQ0NS40NjQzNl0sXG4gIFsxNjI1Ljg1NTIsIDQ0Mi4wOTQzNl0sXG4gIFsxNjIyLjE5NDEsIDQ0MC42MDc0OF0sXG4gIFsxNjE4LjE5MDYsIDQzOS4zMTU4Nl0sXG4gIFsxNjEzLjkzMSwgNDQwLjMwNzNdLFxuICBbMTYxMS4yOTgxLCA0NDMuNDM4NzJdLFxuICBbMTYwOS4yOTk4LCA0MzkuNDMwMTVdLFxuICBbMTYwOS40MzIxLCA0MzUuNzEyMjVdLFxuICBbMTYwNS4wNjc2LCA0MzMuNzg5NjddLFxuICBbMTYwMy43MTIsIDQzNi45MjIxOF0sXG4gIFsxNjAwLjM4NSwgNDMyLjcwOTQ0XSxcbiAgWzE1OTYuMzc4OCwgNDMzLjE2NzI0XSxcbiAgWzE2MDAuNDYyOSwgNDI3LjIyMDgzXSxcbiAgWzE2MDguMTUwNSwgNDMxLjMxOThdLFxuICBbMTYxMC4yMzg0LCA0MjcuOTg1Ml0sXG4gIFsxNjA5LjI1MzksIDQyMy43ODk2NF0sXG4gIFsxNjAzLjYxMjgsIDQzMC4wNjI2OF0sXG4gIFsxNjA1LjQxMzEsIDQyNi40MTg5XSxcbiAgWzE2MTQuNzQ0LCA0MjYuMTg3MjNdLFxuICBbMTYxNy4xOTgyLCA0MjAuNDQxODNdLFxuICBbMTYxNy45ODczLCA0MzAuNDE5NzddLFxuICBbMTYxMy4wNDY1LCA0MzEuNzY2NTRdLFxuICBbMTYxNC45ODA3LCA0MzUuNjY5NDNdLFxuICBbMTYyMS4wNTE2LCA0MzUuNjk4MV0sXG4gIFsxNjI2LjkxMDQsIDQzNy4yODE1Nl0sXG4gIFsxNjI5LjM0MjIsIDQ0My43NTU2OF0sXG4gIFsxNjMwLjUzNDgsIDQ0Ny41MTg3N10sXG4gIFsxNjI2LjUwMzUsIDQ0Ny4xNDIyXSxcbiAgWzE2MjQuNDE1MywgNDUwLjIyNDczXSxcbiAgWzE2MjkuODk4NCwgNDUxLjQyNTc4XSxcbiAgWzE2MjYuNDUzLCA0NTMuNDEwNl0sXG4gIFsxNjI1LjM4MzUsIDQ1Ni44OTAzOF0sXG4gIFsxNjIzLjY3MjEsIDQ1OS45NzY2Ml0sXG4gIFsxNjIxLjg2NTIsIDQ2My4yMjMzNl0sXG4gIFsxNjE5LjA1NDcsIDQ2MS4yOTM1NV0sXG4gIFsxNjE2LjA5ODEsIDQ1OS42MTAxN10sXG4gIFsxNjEyLjY4NjUsIDQ2MS4xNTUyNF0sXG4gIFsxNjA4Ljg0NjQsIDQ2MS40OTAxN10sXG4gIFsxNjA1Ljc0NzIsIDQ2My40MTI4NF0sXG4gIFsxNjAyLjMxNTQsIDQ2NS41NDIxOF0sXG4gIFsxNjA1LjQ4OTksIDQ2Ny45NjY5Ml0sXG4gIFsxNjA5LjUwMjcsIDQ2Ni4wNzUzXSxcbiAgWzE2MDkuMzkyMSwgNDU3LjYxMTldLFxuICBbMTYwOS4wNzE3LCA0NTMuODQ4NDVdLFxuICBbMTYwOC40MDIsIDQ1MC4xMzcwNV0sXG4gIFsxNjA3LjgwMTgsIDQ0Ni4yOTUzNV0sXG4gIFsxNjA0LjM3NDgsIDQ0OC45MjE3XSxcbiAgWzE2MDQuNTg2OCwgNDUzLjI5MTFdLFxuICBbMTYwMC43MzE5LCA0NTUuMzUwOTJdLFxuICBbMTYwNS4zOTkyLCA0NTcuNTI1XSxcbiAgWzE2MTMuMTE3NCwgNDU2LjkyNzJdLFxuICBbMTYxMy42MjA0LCA0NTMuNDk2NjRdLFxuICBbMTYxMi42MTIzLCA0NTAuMjk4NjhdLFxuICBbMTYxMi44MDY2LCA0NDYuNTU4MTddLFxuICBbMTYwNi41NTk3LCA0NDIuNTg3NzRdLFxuICBbMTYwMi4xMjc3LCA0NDUuMjE1OV0sXG4gIFsxNTk5LjIwMjksIDQ0MS42NTgxNF0sXG4gIFsxNTk1LjU3OTIsIDQ0My40MjE3XSxcbiAgWzE2MDMuMzYyMywgNDQwLjQ2MzkzXSxcbiAgWzE1OTguOTQzNywgNDM3LjA5MDc2XSxcbiAgWzE1OTQuOTM2NCwgNDM5LjM1NTk2XSxcbiAgWzE1OTcuNjEyOCwgNDQ3LjAyNzY4XSxcbiAgWzE2MDAuNjkzOCwgNDUwLjQ0MDAzXSxcbiAgWzE1OTcuMDM4MSwgNDUxLjkxNjU2XSxcbiAgWzE1OTUuNDc2MSwgNDU1LjQxMzc2XSxcbiAgWzE1OTguMTAxMSwgNDU4LjcwMTRdLFxuICBbMTYwMi42ODk1LCA0NjAuMTcxMl0sXG4gIFsxNTk5LjUzMjcsIDQ2Mi40ODk0NF0sXG4gIFsxNTk1LjMwNTcsIDQ2Mi4zMjU2Ml0sXG4gIFsxNTkzLjAzMjEsIDQ1OC43Nzc4M10sXG4gIFsxNTg5LjMyMSwgNDYwLjkwMTddLFxuICBbMTU5MS4yNzI1LCA0NjMuOTg5Ml0sXG4gIFsxNTk0LjM3MDcsIDQ2Ni41MDA1NV0sXG4gIFsxNTg5LjMwMTUsIDQ2Ny42OTA0XSxcbiAgWzE1ODUuNjM3OCwgNDYwLjgyMjYzXSxcbiAgWzE1ODYuMzYzLCA0NjQuNzgzOV0sXG4gIFsxNTgyLjM1MzUsIDQ2NS43MzE2M10sXG4gIFsxNTc4LjcwMDQsIDQ2Ni4zNTg5OF0sXG4gIFsxNTc2LjMwNzEsIDQ2OS43NzMyNV0sXG4gIFsxNTcyLjQxOTcsIDQ2OS45Mzc4NF0sXG4gIFsxNTcwLjMxOSwgNDY2LjQ4MjI0XSxcbiAgWzE1NjcuOTQ4LCA0NzAuNTQxXSxcbiAgWzE1NzAuNDA0MiwgNDc0LjI3Mzc3XSxcbiAgWzE1NjMuNzg1NCwgNDcyLjcyMDhdLFxuICBbMTU2NC40NDkxLCA0NjguMzA0NjNdLFxuICBbMTU2Ni43NzU0LCA0NjUuMTYyMjNdLFxuICBbMTU2My4xNzY4LCA0NjQuMDg5NTddLFxuICBbMTU2NS4wOTMxLCA0NjAuNTkzMzJdLFxuICBbMTU2OC43MjU4LCA0NjEuODAyNV0sXG4gIFsxNTcyLjE5MDIsIDQ2Mi40NTQzNV0sXG4gIFsxNTc0Ljg0MDMsIDQ2NS4yNzNdLFxuICBbMTU3OC4zMDU0LCA0NjEuOTkwNDJdLFxuICBbMTU4MS45Mjk5LCA0NjAuOTYxMDNdLFxuICBbMTU4NC44MjgxLCA0NTcuMDg3NjVdLFxuICBbMTU4MS41OTI4LCA0NTUuNDIwM10sXG4gIFsxNTc4LjE1MjUsIDQ1Ny40MjE2XSxcbiAgWzE1NzUuMDE0MiwgNDU5Ljc4MzE0XSxcbiAgWzE1NzEuNzEyNiwgNDU3Ljg0NDk0XSxcbiAgWzE1NjguMzE2NCwgNDU3Ljk3MThdLFxuICBbMTU2NS44NTAxLCA0NTUuODE2MTNdLFxuICBbMTU2Mi4zODcyLCA0NTUuMDU5OF0sXG4gIFsxNTYwLjg5ODcsIDQ1Mi4wMDg0OF0sXG4gIFsxNTU3LjQwMTQsIDQ1MS4yMDk3XSxcbiAgWzE1NTYuNjQ4MywgNDUzLjk2NDU0XSxcbiAgWzE1NTguODUyLCA0NTYuNjYyNTddLFxuICBbMTU2Mi40MjQ5LCA0NTguNzA3MDNdLFxuICBbMTU1OS43Nzg2LCA0NjAuMjk2NDhdLFxuICBbMTU1Ni41MTgzLCA0NjAuODA3OTVdLFxuICBbMTU1Ni4yNjYsIDQ2NS4yODcyM10sXG4gIFsxNTU5LjYzMzQsIDQ2My40MDQ0Ml0sXG4gIFsxNTU5Ljk3NzgsIDQ2Ni44NjU0Ml0sXG4gIFsxNTYwLjk2OTgsIDQ3MC4yNjg0M10sXG4gIFsxNTU3LjE2OCwgNDcwLjA3MjI0XSxcbiAgWzE1NTQuMDEzOCwgNDY4LjcxMTNdLFxuICBbMTU1Mi4xMzA5LCA0NjYuMTAzMzNdLFxuICBbMTU1My4yMzUyLCA0NjIuOTk4NF0sXG4gIFsxNTUzLjMwODYsIDQ1OS42MTQyXSxcbiAgWzE1NTUuMDU5OCwgNDU2Ljc3NjVdLFxuICBbMTU1Mi43MzQ2LCA0NTMuMTUwNzZdLFxuICBbMTU1MS40NDI5LCA0NTYuNjk4MzZdLFxuICBbMTU0OC43Mzc1LCA0NTQuMTU4NV0sXG4gIFsxNTUwLjA5MDgsIDQ1MC4wNzgyXSxcbiAgWzE1NTEuODEsIDQ0Ni40ODQ0N10sXG4gIFsxNTUzLjUzMzQsIDQ0OS43MjA0Nl0sXG4gIFsxNTU2LjIyNDYsIDQ0OC4zMzY2XSxcbiAgWzE1NTYuMzAxNiwgNDQ1LjE5NTldLFxuICBbMTU1My4yOTg4LCA0NDMuMTg4MV0sXG4gIFsxNTUyLjc1OTksIDQzOS42MTUyM10sXG4gIFsxNTUyLjgwMDQsIDQzNS43MDg1XSxcbiAgWzE1NTYuNjY5NywgNDQxLjEwNzg4XSxcbiAgWzE1NTYuNDgzNiwgNDM3LjgwNTE4XSxcbiAgWzE1NTcuMTIwNSwgNDM0LjU5NTk1XSxcbiAgWzE1NjAuNTE2NywgNDM3Ljc5MThdLFxuICBbMTU1OS41ODY5LCA0NDIuNjMwMzddLFxuICBbMTU2My4yNjY0LCA0NDEuNjYyMDhdLFxuICBbMTU2NC4zMTkzLCA0MzguMTk0MDZdLFxuICBbMTU2Ny4xOTYsIDQzNi41NDA0N10sXG4gIFsxNTcwLjU0OTgsIDQzNS41NDI5NF0sXG4gIFsxNTc0LjIyNDYsIDQzNy40NzU5Ml0sXG4gIFsxNTc3LjExNDEsIDQzOS41MDM0XSxcbiAgWzE1ODAuNjA0MiwgNDQxLjUwNzddLFxuICBbMTU3Ny40MzU3LCA0NDkuNjkyMDJdLFxuICBbMTU3Ny43MDQzLCA0NTMuMjQ5MjRdLFxuICBbMTU3My45ODQxLCA0NTQuNjQ3NTVdLFxuICBbMTU2OS42Mjc3LCA0NTMuNDQ3MjddLFxuICBbMTU3Mi44MjYyLCA0NTAuMzY1Nl0sXG4gIFsxNTc0LjY3ODcsIDQ0Ni42ODczNV0sXG4gIFsxNTcwLjYwOSwgNDQ1LjExNjRdLFxuICBbMTU2OC42NjYsIDQ0OC45MzIyXSxcbiAgWzE1NjUuNTQzNSwgNDUxLjg2MDA1XSxcbiAgWzE1NjMuNjAxMywgNDQ4LjgwMjZdLFxuICBbMTU1OS42NDU2LCA0NDcuNzE3XSxcbiAgWzE1NjIuMjQwNywgNDQ1LjIxNDE3XSxcbiAgWzE1NjYuMTg4NCwgNDQ1LjQ1NjZdLFxuICBbMTU2Ny40NTg1LCA0NDEuNTc3ODJdLFxuICBbMTU3MC42MzU2LCA0MzkuNzY4MjVdLFxuICBbMTU3My43NzQ3LCA0NDIuMjc1MDJdLFxuICBbMTU3Ny41NDY2LCA0NDMuNjkxNjVdLFxuICBbMTU3OS45NDY4LCA0NDYuNzk4N10sXG4gIFsxNTgxLjg5MzEsIDQ1MS4wNDY1N10sXG4gIFsxNTg2LjMxOTEsIDQ1My4wMzkxNV0sXG4gIFsxNTg5LjA0NjksIDQ1Ni43MjZdLFxuICBbMTU5MS40NTQzLCA0NTMuNDc2OTNdLFxuICBbMTU5My43MDg1LCA0NDkuODI5MV0sXG4gIFsxNTkyLjQ5MzIsIDQ0Ni4xNzY2XSxcbiAgWzE1OTEuNjMwNSwgNDQyLjMyNDNdLFxuICBbMTU5MC4yNTg1LCA0MzguNzAwMTZdLFxuICBbMTU4Ny43NTUsIDQ0Mi4yMzQyNV0sXG4gIFsxNTg4LjA0MDksIDQ0NS43MjU0M10sXG4gIFsxNTg5LjQzMDgsIDQ0OS42MTI0M10sXG4gIFsxNTg1LjI1NDQsIDQ0OC44NTIwNV0sXG4gIFsxNTgzLjM0ODksIDQ0NS40MTI3OF0sXG4gIFsxNTg0LjE0NzIsIDQ0MS45MjRdLFxuICBbMTU4Ni4xNDMzLCA0MzguOTE0NV0sXG4gIFsxNTg2LjUxODEsIDQzNS43MzU3Ml0sXG4gIFsxNTg3LjM4NDMsIDQzMi4zODU2OF0sXG4gIFsxNTgyLjc2MjUsIDQzNC4wODM2OF0sXG4gIFsxNTgyLjY3NzIsIDQzNy45NDI0N10sXG4gIFsxNTc5LjUzMiwgNDM2LjY5MDAzXSxcbiAgWzE1NzQuMjk0OSwgNDMzLjYyODE0XSxcbiAgWzE1NzQuNTM2MSwgNDI5Ljg4Mjc1XSxcbiAgWzE1NzAuODcwOCwgNDMxLjcxMTEyXSxcbiAgWzE1NjYuOTg2MSwgNDMyLjE1NzU2XSxcbiAgWzE1NjMuNTkwMiwgNDMzLjcxMzhdLFxuICBbMTU2MC4yNzU5LCA0MzMuMDcyNl0sXG4gIFsxNTU3LjIwOSwgNDMwLjY4MDYzXSxcbiAgWzE1NjEuNDM2LCA0MjkuMTUzNF0sXG4gIFsxNTY1LjM2NzgsIDQyOC40Njg3Ml0sXG4gIFsxNTYzLjUzNjMsIDQyNS4wOTUyOF0sXG4gIFsxNTY4LjI4OTQsIDQyNC4zNDIxM10sXG4gIFsxNTY5LjI0MiwgNDI4LjM0M10sXG4gIFsxNTcyLjM3MzgsIDQyNi44Njk3NV0sXG4gIFsxNTc1LjgyNzUsIDQyMS40OTA0OF0sXG4gIFsxNTc2LjY5NTMsIDQyNi4zODcwMl0sXG4gIFsxNTc4LjU3NzMsIDQzMC41MzU2XSxcbiAgWzE1NzcuOTI5OSwgNDM0LjAxNTM4XSxcbiAgWzE1ODMuMTM0NiwgNDMwLjg2MjI3XSxcbiAgWzE1ODEuMTY2NiwgNDI3LjQyOTE3XSxcbiAgWzE1NzkuODA2NiwgNDI0LjAwNTU1XSxcbiAgWzE1NzkuNTQ5NywgNDIwLjU0NjAyXSxcbiAgWzE1ODMuMzg3MSwgNDIwLjQyNDNdLFxuICBbMTU4NS43MTQ4LCA0MTYuNzE1NDVdLFxuICBbMTU4My45ODAyLCA0MTMuMDI0MDVdLFxuICBbMTU4Ni42OTY4LCA0MDkuNzI5OTJdLFxuICBbMTU4OS41MzMsIDQxMy4yNDM4N10sXG4gIFsxNTkwLjExMDYsIDQxNy4zMTM5M10sXG4gIFsxNTg3LjU4OTcsIDQyMS4yNTkxXSxcbiAgWzE1ODQuOTAyMiwgNDI0LjU4Njg4XSxcbiAgWzE1ODcuMjI1NiwgNDI4LjczNThdLFxuICBbMTU5MC40Mjk0LCA0MzQuOTQwNjddLFxuICBbMTU5NC4wMjgxLCA0MzUuNzY0NDddLFxuICBbMTU5MS45OTMsIDQzMS4wNDk1M10sXG4gIFsxNTkwLjYwMywgNDI1LjA3NDk1XSxcbiAgWzE1OTEuOTEzMiwgNDIxLjA4ODM4XSxcbiAgWzE1OTUuMTgyNSwgNDE4Ljc5ODM0XSxcbiAgWzE1OTUuNDQ2LCA0MjMuODQ3OV0sXG4gIFsxNTk5LjI4NDMsIDQyMS4zODgzN10sXG4gIFsxNTk5LjExODIsIDQxNi41MjcxNl0sXG4gIFsxNjAzLjI4NTksIDQxNS4zODQ3XSxcbiAgWzE2MDUuMzMwOCwgNDEwLjc0OTMzXSxcbiAgWzE2MDguNjYxNiwgNDE0Ljc4NjkzXSxcbiAgWzE1OTkuNDI1MiwgNDExLjM0MzIzXSxcbiAgWzE1OTQuNDczNCwgNDE0LjY5NDUyXSxcbiAgWzE1OTQuODYzOSwgNDEwLjg0MDQ1XSxcbiAgWzE1OTEuNTk2OCwgNDA5LjA0OV0sXG4gIFsxNTg5LjgyMSwgNDA1Ljk3MTU2XSxcbiAgWzE1ODYuNDE5MiwgNDA0Ljc5NzY3XSxcbiAgWzE1ODMuMzUwNiwgNDA2LjUyMzVdLFxuICBbMTU4MS4yMjk1LCA0MDkuNDczNV0sXG4gIFsxNTc5LjYwMjMsIDQwNC44NDU3XSxcbiAgWzE1NzMuNDU4MywgNDA5LjIzNzI0XSxcbiAgWzE1NzYuOTQ4OSwgNDA4LjA5NjM3XSxcbiAgWzE1NzguOTUzMiwgNDAxLjEwNDddLFxuICBbMTU4My43MjI5LCA0MDEuODUzMTJdLFxuICBbMTU4OS4zNTcyLCA0MDEuODQ4NDhdLFxuICBbMTU4OS4xMDA4LCAzOTguNTQwMTZdLFxuICBbMTU5My45ODQsIDM5OS4zNjc3NF0sXG4gIFsxNTkzLjY2MjEsIDQwNC4wNDEzMl0sXG4gIFsxNTk3LjA1MTMsIDQwNi44OTMxNl0sXG4gIFsxNjAxLjYwNjcsIDQwNS4zNTg3Nl0sXG4gIFsxNjA1LjQ0NTEsIDQwMi4zNTUzXSxcbiAgWzE2MDIuMTM2LCAzOTkuMjM3NTJdLFxuICBbMTU5OS4wODY0LCAzOTYuMjM0M10sXG4gIFsxNTk3LjMwNDcsIDM5MS41MjU4OF0sXG4gIFsxNTk4LjAwODUsIDQwMS43MzUzXSxcbiAgWzE1OTUuMDE4MSwgMzk1LjA5NDI0XSxcbiAgWzE1OTEuMjAzMSwgMzk1LjU4OTQyXSxcbiAgWzE1ODcuNTc4LCAzOTQuNjQzOF0sXG4gIFsxNTg4LjI5MDksIDM5MS4wNDI5N10sXG4gIFsxNTg4Ljg3NjcsIDM4Ny42NDQ0N10sXG4gIFsxNTg0Ljg5MTQsIDM4OC40OTU1N10sXG4gIFsxNTgxLjMwMjcsIDM4Ny4xNjcxOF0sXG4gIFsxNTgwLjE5NDYsIDM4My44MDk2Nl0sXG4gIFsxNTgzLjI5MSwgMzgzLjM2MTE4XSxcbiAgWzE1ODYuMjI3OSwgMzg1LjE3MzNdLFxuICBbMTU5My4xNTk4LCAzNzcuNTcyMzZdLFxuICBbMTU5Ny41NjMsIDM3OC43OTM1OF0sXG4gIFsxNjA4LjA0MDIsIDM3OS4xMDI3OF0sXG4gIFsxNjA1LjgwNCwgMzc1LjEwNDM0XSxcbiAgWzE2MDIuNDM3NywgMzc4LjY0NjMzXSxcbiAgWzE1OTkuODkxMSwgMzc0LjkwMjNdLFxuICBbMTU5OS43NjAxLCAzNjYuODcxODNdLFxuICBbMTU5Ny4yNTgzLCAzNzAuMjM0ODZdLFxuICBbMTU5NS4zODI2LCAzNzQuMTUzNDRdLFxuICBbMTU4OS4wNDY2LCAzNzUuMDQzMjddLFxuICBbMTU4OS42MDA2LCAzNzkuMzgzXSxcbiAgWzE1ODYuNjI0NSwgMzgxLjU5OTldLFxuICBbMTU4NC45NDc1LCAzNzguMjY4NjVdLFxuICBbMTU4My45NTE0LCAzNzQuNTcxNV0sXG4gIFsxNTgwLjY1OTksIDM3MS4xMzg4XSxcbiAgWzE1ODYuNDI3LCAzNzEuMTQ4OV0sXG4gIFsxNTg0LjI3MTUsIDM2Ny4yMzQ4Nl0sXG4gIFsxNTc2LjM2MzMsIDM2OC41Mjc0XSxcbiAgWzE1NzUuOTgxNCwgMzczLjQyODJdLFxuICBbMTU3Mi4xMDYzLCAzNzAuOTMzMzVdLFxuICBbMTU3MS44NzY1LCAzNzUuMzc5Nl0sXG4gIFsxNTY4LjE2OTksIDM3Mi43ODUyNV0sXG4gIFsxNTY1LjU2NiwgMzY5Ljc2NTM1XSxcbiAgWzE1NjguNjc4MywgMzY3LjMyXSxcbiAgWzE1NzIuNDkxNSwgMzY2LjIwNDQ3XSxcbiAgWzE1NzQuODUwMSwgMzYyLjc1OTM3XSxcbiAgWzE1NzguMjIzOSwgMzYxLjA1NjgyXSxcbiAgWzE1ODAuNDIyMiwgMzU3LjYyOTg4XSxcbiAgWzE1NzYuOTkwMSwgMzU0LjgzNzA0XSxcbiAgWzE1NzIuNjU4MSwgMzU3LjQwNzQ3XSxcbiAgWzE1NjUuODU2MiwgMzU3LjcyMjcyXSxcbiAgWzE1NjAuNzMyNCwgMzYxLjE3MjgyXSxcbiAgWzE1NjUuNzExMiwgMzYzLjQ5ODAyXSxcbiAgWzE1NzAuMDY1MywgMzYxLjQ4OTQ3XSxcbiAgWzE1NzkuODk4NywgMzY1Ljk2OTk3XSxcbiAgWzE1ODMuMTcwNCwgMzYyLjA4NDRdLFxuICBbMTU4Ny43NjE1LCAzNjMuNTc4MzddLFxuICBbMTU4OS4yNTk2LCAzNjcuMzgxMzVdLFxuICBbMTU5MS44NDExLCAzNzEuMzI2NDhdLFxuICBbMTU5My42MzA5LCAzNjYuODAyNTVdLFxuICBbMTU5Ny40NTY1LCAzNjMuODM3MTZdLFxuICBbMTU5OS45MzMzLCAzNjAuNjY4OF0sXG4gIFsxNTk0LjE3NywgMzYyLjQxNDE1XSxcbiAgWzE1OTEuMjc0NywgMzYwLjg2NTFdLFxuICBbMTU4Ny41NTM3LCAzNTkuMDIzMTNdLFxuICBbMTU4NC4zMDU0LCAzNTYuODcyM10sXG4gIFsxNTgyLjY4NywgMzUyLjUwMTldLFxuICBbMTU4Ny45Mzc1LCAzNTMuNjI3OF0sXG4gIFsxNTkxLjc5NCwgMzU2LjQ0MjI2XSxcbiAgWzE1OTYuMTQ3NywgMzU3LjgwNDU3XSxcbiAgWzE1OTMuMDU3MSwgMzUyLjMwOTNdLFxuICBbMTU5Ny43ODI2LCAzNTMuMjYxXSxcbiAgWzE2MDEuOTQ5OCwgMzUyLjI1OTAzXSxcbiAgWzE2MDkuMjc2NSwgMzUzLjkwODYzXSxcbiAgWzE2MDUuNTE4OCwgMzU1Ljc1NDI0XSxcbiAgWzE2MDEuNCwgMzU2Ljk4NjhdLFxuICBbMTYwNS4yMzEsIDM2MC43MzI4OF0sXG4gIFsxNjAzLjA2MjUsIDM2My44NjA2Nl0sXG4gIFsxNjAzLjg5MDksIDM2OC4wMDM3Ml0sXG4gIFsxNjAyLjMwMDMsIDM3MS42OTAxMl0sXG4gIFsxNjA3LjY3NTgsIDM3MC45NzcwNV0sXG4gIFsxNjExLjg1MDgsIDM2OS4zNzgzNl0sXG4gIFsxNjExLjI5ODIsIDM3NS4xOTY2XSxcbiAgWzE2MTUuMjQzNCwgMzczLjA0NjU3XSxcbiAgWzE2MTcuNTc0NSwgMzY5Ljk1MDM4XSxcbiAgWzE2MTguMDcxLCAzNjYuMTM1OTNdLFxuICBbMTYyMS4wOTQ0LCAzNjMuNzE1OTRdLFxuICBbMTYyNC44MDU3LCAzNjQuNzgzMDVdLFxuICBbMTYyMi4zNTg0LCAzNjguODg4NTVdLFxuICBbMTYyNi4xNTAzLCAzNzEuNzEzNTZdLFxuICBbMTYyOC4wMzEsIDM2Ny4yNjk2XSxcbiAgWzE2MjguMzQyNSwgMzYxLjg5MDI2XSxcbiAgWzE2MzYuMTY1OSwgMzUzLjIyMTUzXSxcbiAgWzE2MzEuODM4NCwgMzUzLjU2NTY0XSxcbiAgWzE2MjguMDE1LCAzNTIuNzg3NzJdLFxuICBbMTYyNC4yMzUyLCAzNTIuNTM0OF0sXG4gIFsxNjI4LjkwOTcsIDM0OC40NTM4Nl0sXG4gIFsxNjMzLjUxNDksIDM0OC4zNjE4XSxcbiAgWzE2MzIuMjMwMywgMzQzLjY4NjY1XSxcbiAgWzE2MzYuNjU4MiwgMzQxLjgzOTU3XSxcbiAgWzE2MzcuNzE1MSwgMzM1LjQyNjg1XSxcbiAgWzE2NDAuNDY2NCwgMzI4Ljg2MjhdLFxuICBbMTY0My43MzEsIDMyMS4yOTU5XSxcbiAgWzE2NDcuNzc2NCwgMzE2LjAxMjJdLFxuICBbMTY1MS44NTgyLCAzMTYuMDA3Ml0sXG4gIFsxNjUzLjY2MzcsIDMxMi4xNDEyXSxcbiAgWzE2NTAuMDQ1MiwgMzEwLjQ4NTM1XSxcbiAgWzE2NTAuNjMzOSwgMzA2LjAwMDZdLFxuICBbMTY1NS4zMzI1LCAzMDguMDc0MjhdLFxuICBbMTY2MC42ODUyLCAzMDQuNzMyMjddLFxuICBbMTY1Ny4zMjk4LCAzMDMuMzIxNzhdLFxuICBbMTY1My45MzA5LCAzMDMuNjg4OF0sXG4gIFsxNjU0LjkwNCwgMjk4LjU3NDg2XSxcbiAgWzE2NTQuODA4MiwgMjkzLjU3MDI4XSxcbiAgWzE2NTguNjMzMywgMjk0LjQyNzkyXSxcbiAgWzE2NjIuNDgxOSwgMjkwLjczNzQzXSxcbiAgWzE2NjAuOTgyNCwgMjg2Ljc1NDFdLFxuICBbMTY2NC40NzIyLCAyODQuMDg3MV0sXG4gIFsxNjY2LjgyMzIsIDI4Ny42MjUxMl0sXG4gIFsxNjcwLjU4MjMsIDI5MC40NjQxNF0sXG4gIFsxNjczLjg4MzMsIDI5My4wOTQwMl0sXG4gIFsxNjc3LjE3MywgMjg5LjM0MTQzXSxcbiAgWzE2NzIuNzU1MSwgMjg2LjUxMjI0XSxcbiAgWzE2NjkuMDcxMywgMjgzLjMxNDJdLFxuICBbMTY2NS40MzE2LCAyNzkuNDc4MDZdLFxuICBbMTY2Ny44NDcsIDI3NS4yMzA0XSxcbiAgWzE2NzAuODIzMSwgMjcxLjA2MTM3XSxcbiAgWzE2NzMuNDk2MSwgMjc2LjEwNDk4XSxcbiAgWzE2NzAuNDM1NywgMjc5LjA2OTZdLFxuICBbMTY3NC40MTk4LCAyODEuNzYyM10sXG4gIFsxNjc4LjgxNjQsIDI4NC42NjkwNF0sXG4gIFsxNjc5LjI2MDksIDI3OS42ODY1XSxcbiAgWzE2NzguMDM3OCwgMjc1LjU1NjNdLFxuICBbMTY4Mi4wMjA1LCAyNzQuMjUxNV0sXG4gIFsxNjgzLjYwMDMsIDI2OS45NzU2NV0sXG4gIFsxNjg3LjI4MDIsIDI3Mi41Nzk1XSxcbiAgWzE2OTEuMTY4NywgMjcwLjc4NjVdLFxuICBbMTY4Ny41OTg0LCAyNjguNDE4NDZdLFxuICBbMTY4NS4xNjI4LCAyNjUuNTE3Ml0sXG4gIFsxNjgxLjUzMTksIDI2My44MjMwNl0sXG4gIFsxNjgwLjQxNjcsIDI2Ny4xOTAzXSxcbiAgWzE2NzkuMTcyLCAyNzAuNjMzNzNdLFxuICBbMTY3NS4zNjg0LCAyNzIuMDAzNV0sXG4gIFsxNjc0LjY4MTIsIDI2Ny44NDgwMl0sXG4gIFsxNjcwLjExODQsIDI2NS44ODc0XSxcbiAgWzE2NjYuMTQ0MywgMjcwLjU0MTA1XSxcbiAgWzE2NjAuOTY4NSwgMjc3Ljc0MDU3XSxcbiAgWzE2NTUuNjIyMywgMjg3LjcwNDE2XSxcbiAgWzE2NTguMjYzMiwgMjkwLjQ4NjQyXSxcbiAgWzE2NTYuOTcyMywgMjgzLjc2ODddLFxuICBbMTY2MC44MDI3LCAyODEuODg2NjZdLFxuICBbMTY2Mi45NDE3LCAyNzMuODA5NjNdLFxuICBbMTY1NS45MDYyLCAyNzIuMTkwOTVdLFxuICBbMTY1My40NjY0LCAyNjYuOTI2XSxcbiAgWzE2NDkuMDc3NCwgMjYxLjk5NjQzXSxcbiAgWzE2NDAuMDAyMiwgMjUwLjU1NTJdLFxuICBbMTY0NC40MDEyLCAyNDYuOTgyOTFdLFxuICBbMTY0OS44MTAzLCAyNDMuMTM0MTZdLFxuICBbMTY0NC45ODI1LCAyMzkuNjIwMTJdLFxuICBbMTYzOS45ODIsIDI0My4wODk2M10sXG4gIFsxNjM5Ljc3NDcsIDIzNS45Njc3NF0sXG4gIFsxNjQ1LjM1NzksIDIzMy44NzQ3NF0sXG4gIFsxNjQyLjUyNzEsIDIyOS4wMTQxNl0sXG4gIFsxNjQ3LjE2NTYsIDIyNi44NzA4OF0sXG4gIFsxNjUxLjY0MzIsIDIyOC45NDEwMV0sXG4gIFsxNjQ5Ljk0NDEsIDIyMS43MTkyOF0sXG4gIFsxNjU2LjEyNzcsIDIyMC4wMzkyOF0sXG4gIFsxNjYwLjkyNzYsIDIxNi4zNzgzNF0sXG4gIFsxNjYyLjg3MTgsIDIyMC44ODE5NF0sXG4gIFsxNjY0LjgxNDEsIDIyOC42OTAxNl0sXG4gIFsxNjYyLjg0MzUsIDIzMi42NzcwNl0sXG4gIFsxNjY1Ljg5MjgsIDIzOC42NDc5Ml0sXG4gIFsxNjcwLjI0MSwgMjQxLjQyOTI0XSxcbiAgWzE2NjguNzQ3OCwgMjMzLjIxODVdLFxuICBbMTY3NC4yMTgsIDIzNC43MjU0M10sXG4gIFsxNjc2LjA3NjcsIDIzOS4zMzkwMl0sXG4gIFsxNjc3LjIxMjMsIDI0My43MDUwOF0sXG4gIFsxNjcxLjE3MjQsIDI0Ny4zNzQxNV0sXG4gIFsxNjcyLjkzMjQsIDI1Mi4xMzQ0XSxcbiAgWzE2NzAuMDM5NywgMjU2LjA5MV0sXG4gIFsxNjY2LjkwOTUsIDI1Mi44OTE4OV0sXG4gIFsxNjY1Ljc0MDUsIDI0Ni41MjUyNF0sXG4gIFsxNjYwLjIyOTksIDI0NS44Njg5XSxcbiAgWzE2NjIuNTEzNCwgMjQxLjMwNTk3XSxcbiAgWzE2NTkuNTEyMiwgMjM2LjI1OTA4XSxcbiAgWzE2NjAuMzU3NywgMjI1LjM3Nzg1XSxcbiAgWzE2NTUuMzg5NCwgMjI1LjM3MzRdLFxuICBbMTY1MC4xMDA2LCAyMzUuOTE5MjVdLFxuICBbMTY1My45MzAyLCAyMzguMzE3NV0sXG4gIFsxNjU3LjU4NDgsIDI0MC43NjIxMl0sXG4gIFsxNjU0Ljc4ODEsIDI0NC43ODA0M10sXG4gIFsxNjU1LjA2OTgsIDI1MC4xODgyM10sXG4gIFsxNjQ5Ljk5ODMsIDI1MC44Mzk3XSxcbiAgWzE2NTMuNDg5MSwgMjU2LjEwNzk0XSxcbiAgWzE2NTUuODE5NSwgMjYxLjczMDEzXSxcbiAgWzE2NjAuMjYwMSwgMjY4LjU2NDk3XSxcbiAgWzE2NjEuMzI4NiwgMjYzLjU4MDE0XSxcbiAgWzE2NjUuNjQzNiwgMjY2LjA0NTldLFxuICBbMTY2Ni4zNjA4LCAyNjAuMjEwOF0sXG4gIFsxNjcwLjU2NjksIDI2MS4wMzcxNF0sXG4gIFsxNjc0LjEwNSwgMjU4Ljc5MDY1XSxcbiAgWzE2NzYuNTI3MSwgMjU1LjQ4NjE5XSxcbiAgWzE2NzQuMDUxMSwgMjYzLjQyNjddLFxuICBbMTY3Ny42ODkyLCAyNjQuNTE3MzNdLFxuICBbMTY3Ny41NDIsIDI2MC4yNDQwMl0sXG4gIFsxNjgxLjAzMSwgMjYwLjI5OTI2XSxcbiAgWzE2ODAuMzU4NiwgMjU2LjY4Nzc3XSxcbiAgWzE2NzkuODM4NywgMjUyLjc0MDc4XSxcbiAgWzE2ODEuNzc3NiwgMjQ5LjE2MjYzXSxcbiAgWzE2ODIuOTgyOSwgMjQ1LjQwNDRdLFxuICBbMTY4Ni43OTc5LCAyNDMuMjY1ODVdLFxuICBbMTY4Mi4zMDA5LCAyNDAuMDM5NDddLFxuICBbMTY4MC41MjQyLCAyMzUuNzIxOThdLFxuICBbMTY3OC4wOTE5LCAyMjUuODIzMjddLFxuICBbMTY4Mi44MDcsIDIyNS4xODYyXSxcbiAgWzE2ODMuNjY4LCAyMjAuMjQ5MThdLFxuICBbMTY3OS4yOTI4LCAyMjAuNzA0ODhdLFxuICBbMTY3Ni41OTY0LCAyMTYuNjk1NTZdLFxuICBbMTY3MS41MjE0LCAyMTUuOTI2NDJdLFxuICBbMTY2Ni42NjQxLCAyMTYuMjAyNzZdLFxuICBbMTY2OC42NDk4LCAyMjAuNDcwODldLFxuICBbMTY3My40Mjg3LCAyMjEuODg2MTddLFxuICBbMTY3Mi40MjE5LCAyMjguMzcyNV0sXG4gIFsxNjc4LjIxNTYsIDIzMC43NTQ1OF0sXG4gIFsxNjkwLjAwMTEsIDIyOS4zMjY3NV0sXG4gIFsxNjkyLjk0NjUsIDIyMi44NDkzNV0sXG4gIFsxNjg4LjI3ODksIDIyNC4zNjIxN10sXG4gIFsxNjg0Ljc3NjEsIDIzMC42MzQ0OV0sXG4gIFsxNjg2LjIzNSwgMjM1LjMxOTM3XSxcbiAgWzE2ODguNDk0NCwgMjM5LjA2MzQ2XSxcbiAgWzE2OTEuNjcyMSwgMjM1LjA2NzQ3XSxcbiAgWzE2OTUuMzMwMSwgMjMxLjkyNTFdLFxuICBbMTY5Ny4wNjk3LCAyMzYuOTU3NTddLFxuICBbMTY5OS4yNzgzLCAyMzMuODA5MDJdLFxuICBbMTY5OS44Mjk3LCAyMzAuMDQzODJdLFxuICBbMTY5OS43MDQzLCAyMjYuMDk5MDldLFxuICBbMTY5NS4xMjczLCAyMjYuNDIzMDJdLFxuICBbMTY5Ni4zOTY3LCAyMTguODI3ODhdLFxuICBbMTY5Mi4zNzE3LCAyMTcuODAxN10sXG4gIFsxNjg4Ljg1ODUsIDIxOS40Nzk4M10sXG4gIFsxNjg1Ljk4MDUsIDIxNi4zNzM2M10sXG4gIFsxNjg5LjQzNTUsIDIxMy40Mzk5MV0sXG4gIFsxNjk0LjUzMTUsIDIxNC4yMjgzMl0sXG4gIFsxNjk3LjQ4MjksIDIxMS4wODA5OF0sXG4gIFsxNjk4LjMwNjksIDIwNi41ODk3XSxcbiAgWzE2OTUuMzUyNSwgMjAyLjU3NzI0XSxcbiAgWzE2OTAuNTkwNiwgMjAzLjY2MjA1XSxcbiAgWzE2OTEuNzkyNCwgMjA4LjE5MzRdLFxuICBbMTY4NS41ODI5LCAyMDkuOTY4MTFdLFxuICBbMTY4Ni4wNDUyLCAyMDQuOTQ5NV0sXG4gIFsxNjgxLjcxNTEsIDIxNC43MDE2OV0sXG4gIFsxNjc5LjI2MDUsIDIxMC40NzY3M10sXG4gIFsxNjgwLjg0NjMsIDIwNi4wMTExXSxcbiAgWzE2ODIuOTM0NywgMjAwLjU3OTU5XSxcbiAgWzE2ODcuNDgzNSwgMTk5LjA0MzM3XSxcbiAgWzE2OTEuOTM2LCAxOTguNzkwNDVdLFxuICBbMTY5NC44Njg0LCAxOTUuNzc1OTldLFxuICBbMTY5OC42NzQ5LCAxOTcuMjE4MDVdLFxuICBbMTcwMy4wNjM1LCAxOTUuMTg1NDldLFxuICBbMTcwOC42OTQ2LCAxOTUuMzU3MzZdLFxuICBbMTcwOC43MzM4LCAxODguMjIzMDJdLFxuICBbMTcwNS42MjU1LCAxOTEuNTU1MjRdLFxuICBbMTcxMS4wNzY0LCAxOTIuMjAxNDVdLFxuICBbMTcxNC44MTMsIDE5MS45NDExNl0sXG4gIFsxNzE1LjgwNDcsIDE5NS43ODgxMl0sXG4gIFsxNzEyLjI1ODMsIDE5Ny43MTk4M10sXG4gIFsxNzIwLjU1ODIsIDIwNi45NjEwNl0sXG4gIFsxNzIwLjgxOCwgMjAxLjQ3XSxcbiAgWzE3MTkuMjQxNSwgMTkzLjU5NzQ2XSxcbiAgWzE3MTguNjk2MiwgMTg5LjY5NzddLFxuICBbMTcxNy4wMjMzLCAxNzcuMjhdLFxuICBbMTcyMS4yOTc5LCAxODAuMjE0NDZdLFxuICBbMTcyMi40MTI2LCAxNzUuMTY3MTZdLFxuICBbMTcyNi44MjQ3LCAxNzYuODQ4NTFdLFxuICBbMTczMS40MDE1LCAxNzUuNTc5NV0sXG4gIFsxNzM2LjM5NTYsIDE3Ni4wMTE2NF0sXG4gIFsxNzQ1LjQ4MDcsIDE3Ni43MjA5M10sXG4gIFsxNzQwLjc5MzcsIDE3Ni44NTY5Ml0sXG4gIFsxNzMyLjY0NzIsIDE3OS42MjIzOF0sXG4gIFsxNzM3LjQwODIsIDE4Mi4zNTE3OF0sXG4gIFsxNzMyLjYxMTUsIDE4OC40MTgwOF0sXG4gIFsxNzM3LjczNSwgMTg4LjEwMzUyXSxcbiAgWzE3NDIuOTE5NCwgMTg4LjkzOTczXSxcbiAgWzE3NDIuMTA5MSwgMTgzLjQ5MDUyXSxcbiAgWzE3NDYuNzQ0OSwgMTg0LjYzNjExXSxcbiAgWzE3NDguOTU1NiwgMTg4LjYyMjk3XSxcbiAgWzE3NTMuMTY1LCAxOTEuMDM2MDFdLFxuICBbMTc1Ny4yMTgxLCAxODcuMzY5ODRdLFxuICBbMTc1Ni4yNzIyLCAxODMuMjk4NzVdLFxuICBbMTc1Mi42NTU5LCAxODIuMTQ3XSxcbiAgWzE3NDkuNjI4OCwgMTc4LjczNjQ1XSxcbiAgWzE3NTEuNTUzOCwgMTc0LjY0NDAxXSxcbiAgWzE3NTYuMDgwMSwgMTc2LjgyMzQzXSxcbiAgWzE3NjAuMTk3NSwgMTc5LjUzMzMzXSxcbiAgWzE3NjEuMDk5NywgMTgzLjcxMjEzXSxcbiAgWzE3NjMuMjcwOSwgMTg3LjA2Njk5XSxcbiAgWzE3NjYuNDI5NCwgMTgzLjk1NjI0XSxcbiAgWzE3NjMuMzA0OSwgMTc1LjYzNDIyXSxcbiAgWzE3NjYuMTg3OSwgMTc5LjAwMjhdLFxuICBbMTc3MS4zMzEsIDE4MS42MTc2MV0sXG4gIFsxNzc1LjYzMDIsIDE3OC4zNjg1Nl0sXG4gIFsxNzgxLjEwODMsIDE3OS42NDVdLFxuICBbMTc3NS45MDk3LCAxODQuOTM3OTddLFxuICBbMTc3MS4xNTE3LCAxODcuNDI4NTddLFxuICBbMTc2Ny4xMTMsIDE4OS4zNTc3N10sXG4gIFsxNzcwLjcxMSwgMjExLjkzNzA2XSxcbiAgWzE3NjUuMTU4NywgMjE0LjQzMjMxXSxcbiAgWzE3ODQuOTQ5OCwgMjA2LjY2MDE5XSxcbiAgWzE3NzEuNDQxNCwgMjI3LjQ3MDJdLFxuICBbMTc3Ni4wMjg2LCAyMTUuOTcyNTNdLFxuICBbMTc5NC43NTY2LCAyNDguMzUyMTddLFxuICBbMTgwMi42MzI3LCAyNjAuMjM2NjNdLFxuICBbMTc2MC40MDk0LCAyNDkuMTQ2MTVdLFxuICBbMTc2My43NDQ0LCAyNTYuODM1NjNdLFxuICBbMTc1NC41ODQ0LCAyNDguMzkyNTJdLFxuICBbMTc0OS4zODA2LCAyNDguNDA5MTVdLFxuICBbMTc1NC45NDc1LCAyNDIuNzMxOThdLFxuICBbMTc2NS4zNzc5LCAyNDUuNjY1Ml0sXG4gIFsxNzYwLjk2ODUsIDI0Mi40MDExMl0sXG4gIFsxNzU2Ljg5NzEsIDIzOC4yODI0N10sXG4gIFsxNzUwLjY1MjIsIDIzNy45Mzk3M10sXG4gIFsxNzU0Ljg4MDQsIDIzMy4xMzM1OF0sXG4gIFsxNzQ4LjQ0MDcsIDIzMy4yMjhdLFxuICBbMTc0My41MDk4LCAyMzUuODMxMDVdLFxuICBbMTc0NC41NDQ4LCAyNDAuNTA2NThdLFxuICBbMTc0OS40MjQzLCAyNDMuMDAyMDhdLFxuICBbMTczNy45NDY0LCAyMzcuMjkyMzNdLFxuICBbMTczOS42OTE4LCAyMzEuNzU2MzNdLFxuICBbMTczNC41Mzk5LCAyMzAuNTk3MTVdLFxuICBbMTczMi44MTU2LCAyMzYuNDY4NDNdLFxuICBbMTczMC4xODE4LCAyMzIuNTcxNThdLFxuICBbMTcyNS43MDMyLCAyMzMuODg3NDJdLFxuICBbMTcyMS44OTYsIDIzNi4yNzg1Nl0sXG4gIFsxNzI4LjI4MjEsIDIyOC43MjExMl0sXG4gIFsxNzIzLjY0MjcsIDIyOS42MTI0XSxcbiAgWzE3MTEuNDMwNywgMjI3LjQyNzQ2XSxcbiAgWzE3MTEuODg3MiwgMjMzLjA1NDExXSxcbiAgWzE3MDcuOTE5MiwgMjMwLjY4NjJdLFxuICBbMTcwMy45MTM2LCAyMjcuOTcyNV0sXG4gIFsxNzA3LjQyMywgMjI1Ljk2MjgxXSxcbiAgWzE3MDMuNTExNCwgMjIyLjYwMDA0XSxcbiAgWzE2OTkuMTE1LCAyMjIuMDM3MjJdLFxuICBbMTY5OS45OTc2LCAyMTUuMTUxM10sXG4gIFsxNzAyLjc5NzQsIDIxMC4xMzI5OF0sXG4gIFsxNzA0LjU0NTMsIDIwNS44MjI3Ml0sXG4gIFsxNzAxLjExNjIsIDIwMS45NzQ2NF0sXG4gIFsxNjk5LjQ1NjgsIDE5Mi4zMTI1NV0sXG4gIFsxNjk0LjQwNTYsIDE5MS4wNjY3XSxcbiAgWzE2ODkuODY0MywgMTkzLjM3OTIxXSxcbiAgWzE2OTEuMDQyMSwgMTg2Ljc4OF0sXG4gIFsxNjk3Ljc1OTksIDE4NC4wMzIyM10sXG4gIFsxNjk3Ljk3OCwgMTg3Ljg3NzVdLFxuICBbMTcwMy4xMDk0LCAxODcuNDYyMzFdLFxuICBbMTcwMy4xNjE0LCAxODIuMTY4MTJdLFxuICBbMTcwOC4wMDUyLCAxODMuMzc1MTddLFxuICBbMTcxMy40NTE4LCAxODYuODQyMDRdLFxuICBbMTcxOC4xNzUsIDE4NC4zNjMxXSxcbiAgWzE3MjIuNzIwMiwgMTg1LjI2NjYzXSxcbiAgWzE3MjYuNzg1NiwgMTgyLjg0NDQyXSxcbiAgWzE3MzIuNjM0LCAxODQuMDYyOV0sXG4gIFsxNzI3LjgwODgsIDE4OC4xNjM1XSxcbiAgWzE3MjMuMzE4MSwgMTkwLjk3NjYyXSxcbiAgWzE3MjIuOTUyNCwgMTk2LjI5MTYzXSxcbiAgWzE3MjYuNzQwMiwgMTkzLjI2NjM0XSxcbiAgWzE3MzEuNzY2NSwgMTk0LjcyODhdLFxuICBbMTcyNy40ODM5LCAxOTguMTcxNjNdLFxuICBbMTczNC40NDg5LCAxOTguODczOTNdLFxuICBbMTc0My4wODY0LCAxOTkuMDA2NTJdLFxuICBbMTczOC45ODM5LCAyMDQuOTIxNzJdLFxuICBbMTczMi42MDE3LCAyMDMuOTA1MjRdLFxuICBbMTczOC40NDc1LCAxOTYuOTE0NDldLFxuICBbMTcyNS41OTMxLCAyMDMuMDI3MzFdLFxuICBbMTcyNy45NjQyLCAyMDYuOTIzOTJdLFxuICBbMTcyNC4xODk1LCAyMTAuMjIyNjNdLFxuICBbMTcxOS4yMzYxLCAyMjAuNDM5ODJdLFxuICBbMTcyMi4zMDc2LCAyMTUuNTIxNDJdLFxuICBbMTcxOC43MDU4LCAyMTIuMDI2ODZdLFxuICBbMTcxNC4yMTg2LCAyMDkuMDA3NzhdLFxuICBbMTcxMC4wMzA5LCAyMTQuMjY0NzddLFxuICBbMTcwOC43OTg2LCAyMDguNzE1OTFdLFxuICBbMTcwNS4yNTMzLCAyMTMuNTkyMzNdLFxuICBbMTcwNS4wMzM3LCAyMTguMjU0NjJdLFxuICBbMTcxMC4wOTM5LCAyMjIuNzQ3ODVdLFxuICBbMTcxMy42NTIzLCAyMjAuNjgzOTZdLFxuICBbMTcxNS40MzUsIDIyNS4wNTA2OV0sXG4gIFsxNzE1LjIwMDksIDIyOS41NjkzNF0sXG4gIFsxNzIwLjE0NSwgMjI2LjIxNDg5XSxcbiAgWzE3MTkuNjYzMSwgMjMwLjc4NDQ1XSxcbiAgWzE3MTcuMDYyLCAyMzQuMTkxNDddLFxuICBbMTcxNC42MDc5LCAyMzcuNzEyOTJdLFxuICBbMTcxMC41ODY0LCAyMzcuNTk4ODJdLFxuICBbMTcwOS41MzUsIDI0MS4yOTU4Ml0sXG4gIFsxNzA1LjU4NTcsIDIzOS45MTY3NV0sXG4gIFsxNzA2Ljg3ODcsIDIzNS43MjI5NV0sXG4gIFsxNzAzLjc2OTcsIDIzMi42NjFdLFxuICBbMTcwMi4yMzYxLCAyMzYuNzg1ODZdLFxuICBbMTcwMS4yMDM0LCAyNDAuNjExMTNdLFxuICBbMTY5Ny4yNjQ5LCAyNDEuNDQ5OThdLFxuICBbMTY5My42OTI1LCAyMzkuMzI3NzRdLFxuICBbMTY5MS42NjE2LCAyNDIuNTgxMzldLFxuICBbMTY4OS44MDYsIDI0Ni4wMTkwNF0sXG4gIFsxNjg2LjY5NjgsIDI0OC4zODkyOF0sXG4gIFsxNjg0LjQzNDksIDI1MS41MTE2Nl0sXG4gIFsxNjg0LjE1MjIsIDI1NC44Nzk5NF0sXG4gIFsxNjg0LjQ3MjksIDI1OC4yODkwM10sXG4gIFsxNjg0LjU2OTMsIDI2MS43NTU4Nl0sXG4gIFsxNjg4LjExMTksIDI2MS4zNjU0NV0sXG4gIFsxNjkyLjYwODQsIDI1Ni4yOTU0XSxcbiAgWzE2ODguMzg0OCwgMjU3LjMwMjEyXSxcbiAgWzE2ODguMjU3NiwgMjUyLjkxNTQ3XSxcbiAgWzE2OTEuNzE1OCwgMjUwLjE2ODM3XSxcbiAgWzE2OTQuNzY1NSwgMjQ1LjUyNTYyXSxcbiAgWzE2OTkuNTE2OCwgMjQ2LjU4OTM0XSxcbiAgWzE3MDMuOTMzOCwgMjQ1LjAwMjY3XSxcbiAgWzE3MDguNjU4NiwgMjQ2LjI1MzMzXSxcbiAgWzE3MTQuMjg2NiwgMjQyLjM3Njk1XSxcbiAgWzE3MTguNjE2NywgMjM5LjczNzQzXSxcbiAgWzE3MjAuNDA4NywgMjQ0LjAyNTc2XSxcbiAgWzE3MjQuMjM5NywgMjQxLjI4MTcxXSxcbiAgWzE3MjguMTA0MSwgMjM4LjczMjcxXSxcbiAgWzE3MzIuODk4LCAyNDIuMTMyOF0sXG4gIFsxNzM4LjU1MDgsIDI0My44MTcyNl0sXG4gIFsxNzI3LjkyMzUsIDI0NS41MzQ5N10sXG4gIFsxNzMzLjM1OTUsIDI1MS42Mjg0XSxcbiAgWzE3NDUuOTc0OSwgMjUyLjg2MzA4XSxcbiAgWzE3NDMuNjk4NiwgMjQ2LjM1MTkzXSxcbiAgWzE3MzkuNzI2OSwgMjUxLjA5OTY3XSxcbiAgWzE3MzcuNjYwMywgMjU2Ljc5NDI1XSxcbiAgWzE3MzcuMzg4OSwgMjYzLjUzNjY4XSxcbiAgWzE3MzIuNTkyMiwgMjU4LjkxMV0sXG4gIFsxNzMwLjExMTUsIDI2NC41MDI4XSxcbiAgWzE3MjcuOTAxOSwgMjcxLjEwNTc3XSxcbiAgWzE3MjYuNzM0NSwgMjc3LjcyMDgzXSxcbiAgWzE3MjIuMjUyOSwgMjc5LjM3MTc3XSxcbiAgWzE3MjUuNTg3NiwgMjgzLjQ5NTVdLFxuICBbMTczMS4xODE1LCAyNzUuNjAxOF0sXG4gIFsxNzM1Ljg5MzcsIDI3NC4zMzMzN10sXG4gIFsxNzMzLjM2NCwgMjY4Ljg2MTcyXSxcbiAgWzE3MzkuNjg4MiwgMjY4LjkzNTczXSxcbiAgWzE3MzUuMDMwNSwgMjgwLjg2NTQyXSxcbiAgWzE3MzAuMjIxNCwgMjgxLjkyNzkyXSxcbiAgWzE3MzUuMDAxNywgMjg4LjMzMDI2XSxcbiAgWzE3MjguOTYsIDI4Ny45NDE5Nl0sXG4gIFsxNzIzLjY5NDgsIDI5My4yNTQ1XSxcbiAgWzE3MjAuMjUzLCAyODMuNjEyXSxcbiAgWzE3MjIuNjIzOCwgMjg3LjE1NTI0XSxcbiAgWzE3MTYuMTkwOSwgMjg1LjgyMjYzXSxcbiAgWzE3MTYuMzA0MywgMjgwLjI4ODk3XSxcbiAgWzE3MTMuMDY5MiwgMjc0Ljg4MjA4XSxcbiAgWzE3MjMuMzM2OSwgMjczLjg1NTUzXSxcbiAgWzE3MTcuNzc3NywgMjc1LjQ1MDUzXSxcbiAgWzE3MDkuMzc3NiwgMjY3LjIxNTFdLFxuICBbMTcxMy43OTI3LCAyNzAuMTk0Nl0sXG4gIFsxNzE5LjQyNTcsIDI3MC4wNzk5XSxcbiAgWzE3MjQuMzgxOCwgMjY2LjY4NTldLFxuICBbMTcwOC44MzI5LCAyNTQuMzc5MTJdLFxuICBbMTcwOC4yMjUzLCAyNjAuNTgyMl0sXG4gIFsxNzA0LjMxNzcsIDI2NS40ODk0XSxcbiAgWzE3MDEuMzM5MSwgMjYxLjY4OTddLFxuICBbMTcwMy4yNDMzLCAyNTYuOTc2NjJdLFxuICBbMTY5Ny4yOTYzLCAyNTguMzEzNzVdLFxuICBbMTY5Mi4yNzI4LCAyNjAuODkwNV0sXG4gIFsxNjk2LjMzMTgsIDI2Mi44NDA5NF0sXG4gIFsxNjkzLjkwMDksIDI2Ni41NTY2NF0sXG4gIFsxNjg5Ljg0MDEsIDI2NS4wNzU2NV0sXG4gIFsxNjk1LjEyMTUsIDI3MS43MTk0OF0sXG4gIFsxNjk4Ljk5NDUsIDI2Ni43NjU0NF0sXG4gIFsxNjk5LjI0NzksIDI3MS4zMTg3XSxcbiAgWzE3MDguMjg3OCwgMjczLjYzNzc2XSxcbiAgWzE3MDQuOTI1OCwgMjc2LjkyMDcyXSxcbiAgWzE3MDYuNDQwMSwgMjgwLjcxMV0sXG4gIFsxNzA0LjAyMzgsIDI3MC43ODU2NF0sXG4gIFsxNzAxLjM2MDYsIDI3NS4zNDc1XSxcbiAgWzE2OTcuODA1MywgMjc3LjEzMzY3XSxcbiAgWzE3MDEuMDQ0OCwgMjgxLjE5NTM3XSxcbiAgWzE2OTUuOTExNCwgMjgyLjI3MDI2XSxcbiAgWzE2OTMuODM0LCAyNzYuODQzMl0sXG4gIFsxNjg5Ljg2NzQsIDI3Ni41OTI3NF0sXG4gIFsxNjg1LjMyNTMsIDI3Ni4xNzYyXSxcbiAgWzE2ODUuMjA4NCwgMjgwLjA3NTM1XSxcbiAgWzE2ODQuNjE5NCwgMjg0LjI5OTA3XSxcbiAgWzE2ODIuOTU0MywgMjg4LjY0MDhdLFxuICBbMTY4MS42NDgxLCAyOTIuODgyMDhdLFxuICBbMTY3Ny44MTYyLCAyOTUuMzAyNl0sXG4gIFsxNjgwLjczODIsIDI5OC43NDA0OF0sXG4gIFsxNjc4LjMyMTUsIDMwMS4xMzIwNV0sXG4gIFsxNjczLjQ3OTIsIDMwNi4yMTExMl0sXG4gIFsxNjc1Ljc2NDUsIDMwOS44MTg3XSxcbiAgWzE2NzguMDY5LCAzMDUuOTcwNF0sXG4gIFsxNjgxLjkyMTEsIDMwNS4xNzc4XSxcbiAgWzE2NzUuMjAzOSwgMzAyLjU4MDM4XSxcbiAgWzE2NzMuNzQ1MSwgMjk4LjAyM10sXG4gIFsxNjY5LjE1NTYsIDI5OS4xMDg1OF0sXG4gIFsxNjcxLjM5MDEsIDMwMi4wNzk5Nl0sXG4gIFsxNjY4LjU4NzksIDMwNS40MDI1XSxcbiAgWzE2NjYuNTA2NiwgMzAyLjIxMzM4XSxcbiAgWzE2NjkuMjE2OCwgMjk1LjI1MTddLFxuICBbMTY2Ni42MjEsIDI5MS44NDk4XSxcbiAgWzE2NjMuOTE2NCwgMjk0LjYxMTQ1XSxcbiAgWzE2NjUuMDIxLCAyOTguMTgzMDRdLFxuICBbMTY2MC43NDk0LCAyOTcuMDYyOV0sXG4gIFsxNjU5LjE5MzIsIDMwMC4wMDk1NV0sXG4gIFsxNjYyLjgxODcsIDMwMS42NjM1NF0sXG4gIFsxNjY0LjA2MDMsIDMwNi4zODM3M10sXG4gIFsxNjY1Ljk1MDMsIDMwOS41NzIwMl0sXG4gIFsxNjYyLjIxMTUsIDMxMS44NDEwNl0sXG4gIFsxNjU5LjcxMzQsIDMwOC40OTQ5XSxcbiAgWzE2NTguMzQyLCAzMTMuMzY5NzhdLFxuICBbMTY1Ni44ODE1LCAzMTcuODk4NjJdLFxuICBbMTY2Mi4yNjU5LCAzMjEuNTA3NTRdLFxuICBbMTY2MC4xMDY4LCAzMjUuMTI3OTZdLFxuICBbMTY1Ny43MTg1LCAzMjguNzg0XSxcbiAgWzE2NTcuMTE4MiwgMzMyLjk1MjI3XSxcbiAgWzE2NTUuNTEwNSwgMzIzLjQ0NjIzXSxcbiAgWzE2NTIuODkzMSwgMzI3LjI3MzM1XSxcbiAgWzE2NTIuMzQ1NywgMzMxLjU4MTI0XSxcbiAgWzE2NDguMjUzOCwgMzM0LjMyNDY4XSxcbiAgWzE2NDUuNDI2LCAzMzguMDkzMl0sXG4gIFsxNjQyLjU3MDgsIDM0MS41NjMyXSxcbiAgWzE2NDAuMTk5OCwgMzQ1LjIyNjc4XSxcbiAgWzE2NDMuNjg4NywgMzQ3LjU3MzldLFxuICBbMTY0Ny4yMzYsIDM0NC4xNDMyXSxcbiAgWzE2NTAuMDM5NiwgMzM5Ljk2MjQ2XSxcbiAgWzE2NTIuOTI2NSwgMzM2LjI3NDMyXSxcbiAgWzE2NTQuOTI3MSwgMzQxLjMzNjM2XSxcbiAgWzE2NTEuOTcwMiwgMzQ0LjY4OTddLFxuICBbMTY1Ni4yNTYzLCAzNDYuNjQyODhdLFxuICBbMTY1Mi42MzM0LCAzNDkuNDMzN10sXG4gIFsxNjQ4LjM2OTksIDM0OS4wOTg3Ml0sXG4gIFsxNjQ0Ljk0NjUsIDM1Mi4xMDgxNV0sXG4gIFsxNjQwLjQ5NywgMzUxLjk1NTE0XSxcbiAgWzE2MzcuODU3NywgMzQ4LjQxNTA0XSxcbiAgWzE2MjQuMDQ5MywgMzQ3LjkwNl0sXG4gIFsxNjIwLjYzNTksIDM1MC44MTMxXSxcbiAgWzE2MTcuMDYxOCwgMzUyLjg2NjMzXSxcbiAgWzE2MTMuODk5NCwgMzU0Ljk2NzYyXSxcbiAgWzE2MTEuNDQ4MiwgMzU3LjIyNzM2XSxcbiAgWzE2MDguNTk1NywgMzU5LjA3MDc0XSxcbiAgWzE2MTYuODg2MiwgMzU3LjU3Njg3XSxcbiAgWzE2MTYuODgsIDM2Mi4xNzYyN10sXG4gIFsxNjEzLjY0MjYsIDM2NS41NTE1N10sXG4gIFsxNjA5Ljk0NzMsIDM2My4wMzQyN10sXG4gIFsxNjA3LjY5NTcsIDM2Ni4wMDY0NF0sXG4gIFsxNjEzLjM0NjcsIDM2MC41NzQzNF0sXG4gIFsxNjIxLjEyOTYsIDM1NS41Mzk5Ml0sXG4gIFsxNjIwLjI4NTYsIDM1OS41NzA4Nl0sXG4gIFsxNjI0LjExNTUsIDM2MC4xMTgwNF0sXG4gIFsxNjI2LjM0NTIsIDM1Ni44MDg0NF0sXG4gIFsxNjMwLjk3MTksIDM1OC40NTcyNF0sXG4gIFsxNjM5LjMzNDYsIDM1Ny4xNDQ0N10sXG4gIFsxNjQzLjM0OTIsIDM1Ni4zMTU5OF0sXG4gIFsxNjQ3LjQxMiwgMzU4LjQyNzk4XSxcbiAgWzE2NTIuODA5MSwgMzU4Ljg0Njg2XSxcbiAgWzE2NDUuNTc0NywgMzY4LjAxMzUyXSxcbiAgWzE2MzkuNjg4OCwgMzY4LjAzNjYyXSxcbiAgWzE2MzguODQ2OSwgMzYyLjU1NTE1XSxcbiAgWzE2MzUuMDcwOCwgMzU4LjAxOTFdLFxuICBbMTY0My41NzU3LCAzNjEuNzgwMDNdLFxuICBbMTY0OS41ODM3LCAzNjMuNTU2ODVdLFxuICBbMTY0OS4yMTg1LCAzNTQuMjU3NjZdLFxuICBbMTY1My43NTczLCAzNTMuOTc3ODddLFxuICBbMTY1Ny42NzA4LCAzNTEuNTA2Nl0sXG4gIFsxNjYyLjE0NywgMzUzLjEyMjUzXSxcbiAgWzE2NTguMTU0NCwgMzU2LjkwNjgzXSxcbiAgWzE2NzIuMjYzNCwgMzU3Ljk3NTddLFxuICBbMTY3MC44MjA2LCAzNjQuNzI3NV0sXG4gIFsxNjg1LjA3NjQsIDM3My41Njg0Ml0sXG4gIFsxNjgxLjEwMTEsIDM3Ni42OTc1XSxcbiAgWzE2NzYuMzIwNiwgMzc1LjUwOTc0XSxcbiAgWzE2NzAuMzkwOSwgMzg4LjQ4MzIyXSxcbiAgWzE2NjYuNjgxNSwgMzkzLjY2Nzk3XSxcbiAgWzE2NjQuNjczOCwgMzk4Ljg5NjQ4XSxcbiAgWzE2NTguODc4MywgMzk5LjUwMjUzXSxcbiAgWzE2NTUuMDg5NywgNDA0Ljk1NzM0XSxcbiAgWzE2NDcuODE2LCAzOTUuNzkwNDddLFxuICBbMTY0MC43NDU3LCAzOTYuMjczOF0sXG4gIFsxNjMzLjgxODEsIDM5OS43MDYzXSxcbiAgWzE2NDQuMjc5OCwgMzg5LjYyMDM2XSxcbiAgWzE2NDAuMjkwOCwgMzczLjY5MDkyXSxcbiAgWzE2MzQuNTk1NSwgMzc3LjA5MDg4XSxcbiAgWzE2MjcuMzU0NSwgMzc2LjI5MzY0XSxcbiAgWzE2MzAuMTY1NSwgMzgyLjI0Njk1XSxcbiAgWzE2MjYuNzU1NCwgMzg3LjM4MzAzXSxcbiAgWzE2MjAuNzEsIDM4OC43MTg0NF0sXG4gIFsxNjE4LjU0NDksIDM4Mi43MDcyXSxcbiAgWzE2MjIuNjYyLCAzNzkuNTg3OThdLFxuICBbMTYyMS40MDYyLCAzNzQuMTIwOTddLFxuICBbMTYxNy4zNTkxLCAzNzcuMjU5NDZdLFxuICBbMTYxMy4zMjAzLCAzODAuMzU5Ml0sXG4gIFsxNjA5LjA1NiwgMzgzLjgxMTM0XSxcbiAgWzE2MDguODI3NiwgMzg4Ljc3NzddLFxuICBbMTYwNC45MTQ4LCAzODcuMzIxNjJdLFxuICBbMTYwOS42NjE0LCAzOTIuNTg5MDVdLFxuICBbMTYxMy40NjI0LCAzODYuMjc0Nl0sXG4gIFsxNjA0LjU3OTEsIDM4Mi41Njk5Ml0sXG4gIFsxNjAwLjU5MDgsIDM4My4yNzQ3NV0sXG4gIFsxNTk2Ljg4MTUsIDM4My4wNjAxNV0sXG4gIFsxNTkzLjQxMDksIDM4Mi4zNzQ3M10sXG4gIFsxNTkwLjE5NTEsIDM4NC4wMDIyNl0sXG4gIFsxNTkyLjM4NCwgMzkxLjY2OTA0XSxcbiAgWzE1OTIuODA2NSwgMzg3LjY3MTQ1XSxcbiAgWzE1OTYuNDg1MSwgMzg3LjIxNjldLFxuICBbMTYwMC41NTAzLCAzODcuNTgwMl0sXG4gIFsxNjAxLjk2NzIsIDM5MS40MzcxXSxcbiAgWzE2MDQuNTU5NiwgMzkzLjk4MTY2XSxcbiAgWzE2MDcuMDk1MywgMzk3LjQxMTZdLFxuICBbMTYxMC4yNjY2LCA0MDEuMzA4ODRdLFxuICBbMTYxMy42OTM0LCAzOTguMDI5NjNdLFxuICBbMTYxNy45Mzk3LCA0MDAuNDU2Nl0sXG4gIFsxNjE1LjA4MTMsIDQwMy41OTk5NV0sXG4gIFsxNjE4LjcwMDksIDM5NS4xOTA1NV0sXG4gIFsxNjI0LjMwNDcsIDM5NC40NDQzXSxcbiAgWzE2MjcuNDg2OCwgMzk4Ljk4Nzg1XSxcbiAgWzE2MjIuMzU5MywgNDAwLjU2NjYyXSxcbiAgWzE2MjUuNjM4MSwgNDIzLjc0OTk0XSxcbiAgWzE2MjAuODg2NSwgNDI1Ljk4Mjg1XSxcbiAgWzE2MjkuODI2OCwgNDE5Ljk1MzgzXSxcbiAgWzE2MzEuNjE0LCA0MjQuMzYwNF0sXG4gIFsxNjM4Ljk4MjUsIDQzNC45MTU5XSxcbiAgWzE2NDQuMzA3NiwgNDM1Ljc2NzU1XSxcbiAgWzE2NDYuMDQxMywgNDQwLjQ1NTc4XSxcbiAgWzE2NDkuMjg5NiwgNDM3LjA2NzcyXSxcbiAgWzE2NTUuNzA1MSwgNDMxLjU5OTU4XSxcbiAgWzE2NTkuNTY4MSwgNDM1Ljk2MDNdLFxuICBbMTY1Ni45OTA4LCA0NDAuNTY4ODJdLFxuICBbMTY1NC4zNTY5LCA0MzYuNTMwODJdLFxuICBbMTY1Mi4yOTU3LCA0NDAuNTk4NjNdLFxuICBbMTY0OS40Nzc5LCA0NDMuMzQ0ODJdLFxuICBbMTY1MS4yOTE5LCA0NDguOTcwMDZdLFxuICBbMTY1My43NzU5LCA0NDUuMjQ1MThdLFxuICBbMTY1OC4yODYxLCA0NDQuNzI0NzNdLFxuICBbMTY2MS41NzYyLCA0NTEuMDU3NjhdLFxuICBbMTY2NC45NjQ3LCA0NTMuNTUxXSxcbiAgWzE2NjYuMDI4MywgNDU3LjQ5Nzg2XSxcbiAgWzE2NjYuMTkxMiwgNDYyLjE1Mjc3XSxcbiAgWzE2NjcuNDUyOSwgNDY2LjE1Njk4XSxcbiAgWzE2NjYuNDIxNSwgNDcwLjgzODhdLFxuICBbMTY3MC4zNTQ3LCA0NjkuNTgxMDVdLFxuICBbMTY3Ni42NSwgNDc0LjQ4ODk1XSxcbiAgWzE2NzQuMzIxOCwgNDcxLjI1MDU1XSxcbiAgWzE2NzEuNTQ3NSwgNDc0Ljc2NzUyXSxcbiAgWzE2NjcuMjg3LCA0NzUuMjE5NTRdLFxuICBbMTY2My40NDksIDQ3Ny4wNDY3Ml0sXG4gIFsxNjYyLjc1NDksIDQ3My4yODldLFxuICBbMTY2Mi4yMzczLCA0NjkuMTM1NDRdLFxuICBbMTY2Mi45OTYyLCA0NjUuMzE0NzZdLFxuICBbMTY1OS4xMTc0LCA0NjQuNDk3NDRdLFxuICBbMTY1Ny42MTcsIDQ2OC41MDU5OF0sXG4gIFsxNjU4LjU3MywgNDcyLjE2MjldLFxuICBbMTY1OS4yNTg1LCA0NzYuMDc4NDZdLFxuICBbMTY2MC4yNDM1LCA0NzkuNzM0MTNdLFxuICBbMTY1OS41NDk4LCA0ODUuNjE4MTNdLFxuICBbMTY1OC45OTI5LCA0ODguOTkwNDJdLFxuICBbMTY1NS44MDQ5LCA0ODYuNzg4ODJdLFxuICBbMTY1OC4xNzA4LCA0ODIuNTgxM10sXG4gIFsxNjU0Ljg5MzYsIDQ4Mi45MjIzNl0sXG4gIFsxNjUyLjI4MzIsIDQ4NC45MzkxNV0sXG4gIFsxNjQ4LjM4MDYsIDQ4My4yODU0XSxcbiAgWzE2NDUuMjUzMiwgNDgwLjI5ODE2XSxcbiAgWzE2NDQuNDMwOCwgNDg0LjQwNTEyXSxcbiAgWzE2NDkuNTc3LCA0ODYuODY1NTddLFxuICBbMTY1Mi40ODc5LCA0ODguOTUzNV0sXG4gIFsxNjU1LjIyMjMsIDQ5MC44MjgxXSxcbiAgWzE2NTcuODc4OCwgNDkyLjU4MDddLFxuICBbMTY1OS45ODU2LCA0OTUuMTUwMTJdLFxuICBbMTY2MC42Mzg0LCA0OTguNjMyODddLFxuICBbMTY2My43NzEyLCA0OTcuMzUwOTVdLFxuICBbMTY2NC44ODAxLCA0OTMuNjc2MV0sXG4gIFsxNjY2LjIxODMsIDUwMC42MTQ4N10sXG4gIFsxNjYyLjUxODYsIDUwMi41NDc2N10sXG4gIFsxNjU4LjgxMiwgNTAxLjAzODVdLFxuICBbMTY1OC44ODExLCA1MDQuMzg1MTNdLFxuICBbMTY1Ny4wMTYsIDUwNy4zMDU3M10sXG4gIFsxNjU0LjQzMjMsIDUwNS4wMzU2XSxcbiAgWzE2NTMuNDI4NSwgNTA5LjEwMTI2XSxcbiAgWzE2NTMuOTIzOCwgNTEzLjA1NV0sXG4gIFsxNjUwLjUxNTUsIDUxMy4xNjI0XSxcbiAgWzE2NDguOTk3OCwgNTE2Ljc0MDZdLFxuICBbMTY1My4zOTcxLCA1MTguMzA1MjRdLFxuICBbMTY0NS4zNTg2LCA1MTguMjUyOF0sXG4gIFsxNjQzLjc5NDksIDUyMi42MTAxN10sXG4gIFsxNjQwLjM4OTksIDUxOC40NTA2XSxcbiAgWzE2NDMuMjc1NSwgNTE0LjYyNDE1XSxcbiAgWzE2NDYuNTMxMiwgNTEyLjU2MzJdLFxuICBbMTY0My42NDk0LCA1MDkuNzkzNDZdLFxuICBbMTY0Ni43OTIsIDUwNy4wMTAzNV0sXG4gIFsxNjQ5LjMxODUsIDUwOS42MzI3NV0sXG4gIFsxNjUxLjAwNywgNTA2LjM3MTIyXSxcbiAgWzE2NDkuMTEyOCwgNTAzLjg5Mzc0XSxcbiAgWzE2NDUuODYzOCwgNTAyLjc0NTFdLFxuICBbMTY0My41MDg1LCA1MDUuMTg3NDddLFxuICBbMTY0MC43NjgyLCA1MDYuOTYyNl0sXG4gIFsxNjM2LjQ4NDUsIDUwNi40MjgyOF0sXG4gIFsxNjM4LjcwOTQsIDUwOS42Mjg0Ml0sXG4gIFsxNjQwLjEyMTgsIDUxMy4wNDc2N10sXG4gIFsxNjM1LjgyNDcsIDUxMi40ODVdLFxuICBbMTYzNC4wNTgyLCA1MDkuMzQ0OTRdLFxuICBbMTYzMS4zNTc5LCA1MTMuMzk1XSxcbiAgWzE2MzEuODgyMiwgNTE3LjAzNjEzXSxcbiAgWzE2MzYuNTg3NiwgNTE2LjA2NDk0XSxcbiAgWzE2MzUuMTEwMSwgNTIwLjA4NDddLFxuICBbMTYzOC4zMjEsIDUyMy41ODMxXSxcbiAgWzE2NDEuNzA5MiwgNTI3LjcyMjNdLFxuICBbMTYzNC45Njk3LCA1MzQuMDYzNV0sXG4gIFsxNjM1LjM3MTMsIDUyOC41OTQ2N10sXG4gIFsxNjMyLjcwMiwgNTI0LjE4NDE0XSxcbiAgWzE2MjUuNDI5LCA1MjIuNTc4XSxcbiAgWzE2MjkuNDQyMywgNTIwLjY0NjVdLFxuICBbMTYyOC43MzU4LCA1MjYuOTYxOF0sXG4gIFsxNjI0LjQyNDksIDUyOS41ODc0XSxcbiAgWzE2MjkuOTM0MSwgNTMyLjI5NTddLFxuICBbMTYyMS4yMjg5LCA1MzMuOTU2NTRdLFxuICBbMTYyMy42MTkzLCA1NDMuMDA4NjddLFxuICBbMTYzMi42OTI2LCA1NDQuNTMxM10sXG4gIFsxNjM3LjM0MjgsIDU0NC43OTAzNF0sXG4gIFsxNjM5LjIzOTEsIDUzOC41NjIzXSxcbiAgWzE2MzIuNjgyNCwgNTM5LjQ0NzhdLFxuICBbMTYzMi41MDI0LCA1NDguODI3OV0sXG4gIFsxNjM3LjI2NjQsIDU1MC4zMjEwNF0sXG4gIFsxNjI4LjI4MzksIDU1NS4wMjA3NV0sXG4gIFsxNjI0LjQ0NDMsIDU1Ni45OTU4NV0sXG4gIFsxNjIwLjk4NywgNTU5Ljg0Njc0XSxcbiAgWzE2MTYuNzU3OCwgNTYyLjM3NDJdLFxuICBbMTYxOS4zNzg0LCA1NjQuNzI5N10sXG4gIFsxNjIyLjc3MzQsIDU2NC4xMDM0NV0sXG4gIFsxNjI1LjExNCwgNTY2Ljc2NjM2XSxcbiAgWzE2MjguNjMxNywgNTY3LjUxMDRdLFxuICBbMTYzMS4xNDA0LCA1NzAuMDI3OV0sXG4gIFsxNjM0LjgzNTIsIDU2OS4xMDg3XSxcbiAgWzE2MzUuODMxOSwgNTczLjMwN10sXG4gIFsxNjMzLjYzMDEsIDU3Ni44OTIxXSxcbiAgWzE2MzIuOTQ5MiwgNTgwLjk3ODY0XSxcbiAgWzE2MzMuNTE4NCwgNTg1LjQ4MDgzXSxcbiAgWzE2MzguMDQ5OCwgNTg2LjM2MDFdLFxuICBbMTYzNy43NzYxLCA1ODEuNjg1OV0sXG4gIFsxNjM4Ljg5MTgsIDU3Ny43MjUxXSxcbiAgWzE2NDAuNzQwOCwgNTc0LjI5OTc0XSxcbiAgWzE2NDQuOTI0NiwgNTc0LjU2NjldLFxuICBbMTY0OS4wNjkxLCA1NzMuODkzN10sXG4gIFsxNjQ3LjMyNDIsIDU2OS4xMTQ0XSxcbiAgWzE2NDIuNjM0NCwgNTY2Ljc2NDJdLFxuICBbMTY0Mi44ODI4LCA1NzAuNjY0NV0sXG4gIFsxNjM4Ljc3NTYsIDU2OS42MTY0Nl0sXG4gIFsxNjM3Ljc3NDgsIDU2NS4yMDE5N10sXG4gIFsxNjMzLjQ4MzksIDU2NS4zMTcyNl0sXG4gIFsxNjI5Ljc3LCA1NjMuNjIxOV0sXG4gIFsxNjI1LjcwNzgsIDU2MS41NTEzXSxcbiAgWzE2MjkuMjQ2MSwgNTU5LjU3MDJdLFxuICBbMTYzMi4zMzM3LCA1NTcuMDk1NDZdLFxuICBbMTYzMi42ODc1LCA1NTIuOTIwOF0sXG4gIFsxNjM2LjQ4NTQsIDU1NS42NjAwM10sXG4gIFsxNjM0LjE0ODgsIDU2MC45NDUzXSxcbiAgWzE2MzguMDgxOCwgNTYwLjQwMTI1XSxcbiAgWzE2NDAuMzE2MywgNTU3LjA0NTA0XSxcbiAgWzE2NDQuMDQ5MiwgNTU3Ljk3MTldLFxuICBbMTY0MS4yMDg5LCA1NjIuNTQ1NTNdLFxuICBbMTY0NC44NzA3LCA1NjMuMDQ1XSxcbiAgWzE2NDguMzkyNywgNTY0LjQxNTRdLFxuICBbMTY1MS44MTcxLCA1NjYuNTk4NF0sXG4gIFsxNjU1Ljc4NjEsIDU2NC41MTEzNV0sXG4gIFsxNjYwLjMyMTUsIDU2My43NDAxXSxcbiAgWzE2NjQuNDU4LCA1NjYuNTE1XSxcbiAgWzE2NjAuNTE3MSwgNTY5LjQ2MjNdLFxuICBbMTY1Ni4wNDc0LCA1NjkuNDE3Nl0sXG4gIFsxNjUyLjUzODUsIDU3MS44OTg3XSxcbiAgWzE2NTIuODY0LCA1NzguMDI1XSxcbiAgWzE2NDcuNzQwNywgNTc4LjY0MTM2XSxcbiAgWzE2NTQuMjc0OSwgNTg0LjY5OTk1XSxcbiAgWzE2NDguNTg3MywgNTgzLjY5MzM2XSxcbiAgWzE2NTAuNzEyNSwgNTg4LjgwMDNdLFxuICBbMTY0OS4wMTEyLCA1OTMuMjI4NzZdLFxuICBbMTY1NS42MjQ2LCA1OTEuMjkwNjVdLFxuICBbMTY2MC43NjE1LCA1OTIuMzM1M10sXG4gIFsxNjU5LjgzOTIsIDU4Ni4wOTE4Nl0sXG4gIFsxNjY1LjA4OTQsIDU4Ny41MzE2XSxcbiAgWzE2NjQuMzY0OSwgNTgwLjM5NThdLFxuICBbMTY1OC4xOTYyLCA1ODAuMjY0MzRdLFxuICBbMTY1OC4wMDc3LCA1NzQuOTk1OV0sXG4gIFsxNjYzLjU0NjEsIDU3My43NzA1XSxcbiAgWzE2NjguODE0NywgNTc1LjY1NjRdLFxuICBbMTY2OC4zODc1LCA1NjkuNjgwNV0sXG4gIFsxNjczLjcyMDUsIDU3MC45MzkxXSxcbiAgWzE2NzQuMDUyMiwgNTY1LjA3Njk3XSxcbiAgWzE2NjkuMjU4NSwgNTYzLjY5NDZdLFxuICBbMTY3MC43ODgxLCA1NTcuOTIwM10sXG4gIFsxNjc2LjI1NzgsIDU1OS4wMTM0XSxcbiAgWzE2NzkuODY1NywgNTYyLjI0ODU0XSxcbiAgWzE2NzkuODQ2OSwgNTY3Ljc0MzY1XSxcbiAgWzE2NzkuMzA2MiwgNTcyLjkzNzJdLFxuICBbMTY3NC45OTk2LCA1NzYuNzc0N10sXG4gIFsxNjgwLjI1MjgsIDU3OC45MzA5XSxcbiAgWzE2ODIuODMzNSwgNTg0LjAzNzA1XSxcbiAgWzE2ODEuMjEyNCwgNTg5LjM4MjFdLFxuICBbMTY3NS40OTA1LCA1OTAuNTYwOF0sXG4gIFsxNjc2LjcxNTEsIDU4NC40MTc2XSxcbiAgWzE2NzEuMzk4OCwgNTgxLjAzOTg2XSxcbiAgWzE2NzAuNDc4NSwgNTg2LjMzNzldLFxuICBbMTY2OS44NTE2LCA1OTIuMTUyODNdLFxuICBbMTY2NS43MzE5LCA1OTQuMDMyMV0sXG4gIFsxNjYzLjE2NzIsIDU5Ny44OTc5NV0sXG4gIFsxNjcyLjUxLCA1OTYuMTgyNF0sXG4gIFsxNjc3LjE5MDQsIDU5Ni41NzNdLFxuICBbMTY3NC40ODk2LCA2MDEuMTM0NzddLFxuICBbMTY3OS44Nzc2LCA2MDEuNDEwNF0sXG4gIFsxNjg0LjI4MzgsIDYwNC4wNjU3M10sXG4gIFsxNjg4Ljc2NjUsIDYwMi42MzY1XSxcbiAgWzE2OTMuNjI1MiwgNjAwLjYwNjc1XSxcbiAgWzE2ODUuOTc4MywgNTkzLjM2NTddLFxuICBbMTY4MS4xNTE1LCA1OTQuNjYwMDNdLFxuICBbMTY4NC42NzkyLCA1OTguODQ4NV0sXG4gIFsxNjg5Ljg3NTksIDU5Ny4wNTg3XSxcbiAgWzE2OTIuMjY4MiwgNjA2LjgyNTVdLFxuICBbMTY5Ni43NTI5LCA2MDguODU5MTNdLFxuICBbMTY4Ni44NzMzLCA2MDguNzQxNDZdLFxuICBbMTY4OS44MzEzLCA2MTMuNDEzOF0sXG4gIFsxNjgyLjE1MTcsIDYxMy4zNTQ3XSxcbiAgWzE2ODAuOTc2MywgNjA3Ljc1MTk1XSxcbiAgWzE2NzYuMDYwNSwgNjA2LjM3NDc2XSxcbiAgWzE2NzUuMzI0NywgNjEyLjA5MjNdLFxuICBbMTY2NS4yMzcsIDYyMC42Nzg4M10sXG4gIFsxNjY4LjAsIDYzNy4zNjkyNl0sXG4gIFsxNjc5LjIwNTMsIDYzNS4yNTI2XSxcbiAgWzE2NzMuNzIzOCwgNjQxLjU0Mzk1XSxcbiAgWzE2NzAuMjI2MywgNjQ2LjU3ODI1XSxcbiAgWzE2NzkuODgzNCwgNjQyLjcwMzA2XSxcbiAgWzE2ODUuMzM1OSwgNjM4LjM2MzZdLFxuICBbMTY4Ny4yNDU3LCA2MzEuOTQ1OF0sXG4gIFsxNjkyLjA5NzQsIDYzNy40NjA3XSxcbiAgWzE2OTYuNjQ1NCwgNjQ0LjU0NTA0XSxcbiAgWzE2OTguNTgwOCwgNjM4LjI0OThdLFxuICBbMTY5NS4xMDQ3LCA2MzEuNTE3MV0sXG4gIFsxNzA1LjcyMzksIDYyNC44OTE3XSxcbiAgWzE3MTEuMzEzMiwgNjIwLjA2MDFdLFxuICBbMTcxMS44Mjg2LCA2MjUuOTE5NDNdLFxuICBbMTcxNS4yMDcsIDYzMC45MzgxXSxcbiAgWzE3MDguOTI0LCA2MzEuODI1MjZdLFxuICBbMTcwMS45NzQ2LCA2MzAuODQwNV0sXG4gIFsxNjg5LjUxNDIsIDY0My45NzIxN10sXG4gIFsxNjkwLjI5NjQsIDY1MS45MTI5Nl0sXG4gIFsxNjc2LjU3ODYsIDY0OS4zNDM3NV0sXG4gIFsxNjgzLjg0NDEsIDY0Ny4xOTgwNl0sXG4gIFsxNjgzLjg3NTUsIDY1My40NzY1XSxcbiAgWzE2NzkuODY4OSwgNjU3LjI1OTQ2XSxcbiAgWzE2NzMuOTY3NSwgNjU2LjI0NzldLFxuICBbMTY2OC45MjAzLCA2NTIuOTgxMV0sXG4gIFsxNjY4LjA0NDYsIDY1OS43MjMyXSxcbiAgWzE2NjIuODAxLCA2NTYuNDc5M10sXG4gIFsxNjU4Ljg5OTcsIDY1Mi4xOTAwNl0sXG4gIFsxNjY0Ljg5OCwgNjQyLjQzNDI3XSxcbiAgWzE2NjQuMTkzNiwgNjQ5LjIxOTVdLFxuICBbMTY1OC45NDI1LCA2NDUuNzY2MjRdLFxuICBbMTY1OS4wMzU4LCA2MzkuNzU0XSxcbiAgWzE2NTQuMzEwMywgNjM2LjIxMDhdLFxuICBbMTY0Ny45OTAyLCA2MzguMTAwNF0sXG4gIFsxNjQxLjY5NzksIDYyMy4yODQ1XSxcbiAgWzE2NDkuMzU1NSwgNjI0LjkxMjddLFxuICBbMTY1NC4wOTEyLCA2MTkuOTQ5MV0sXG4gIFsxNjU5LjYyOTQsIDYxOC4zNDg0XSxcbiAgWzE2NjQuOTEsIDYxNC4xMzQ4XSxcbiAgWzE2NjkuNzU4OSwgNjEyLjUzNDldLFxuICBbMTY2MC42NjkxLCA2MTIuNTM0M10sXG4gIFsxNjU2LjM3NDUsIDYxMi41MTI4XSxcbiAgWzE2NTUuMDUyNiwgNjA3LjQ2MDddLFxuICBbMTY0OS42MDMsIDYwNy41Mzc3XSxcbiAgWzE2NDcuNzkzNywgNjAzLjA1Njc2XSxcbiAgWzE2NTIuNzAzOSwgNjAxLjY3OTkzXSxcbiAgWzE2NTYuOTgwNywgNjAzLjA2MzFdLFxuICBbMTY2MS40OTIxLCA2MDcuNTM2M10sXG4gIFsxNjY3LjQxOTgsIDYwOC4wNTI1NV0sXG4gIFsxNjcwLjkzMTQsIDYwNC41ODcyXSxcbiAgWzE2NjguNjg4LCA1OTkuMTIyMjVdLFxuICBbMTY2NS41MDE4LCA2MDMuMTY2XSxcbiAgWzE2NjAuOTA2NywgNjAxLjk4NzczXSxcbiAgWzE2NTcuNzg0OSwgNTk3LjQwNjVdLFxuICBbMTY1My4xNTYxLCA1OTYuMjE4NF0sXG4gIFsxNjQ4LjYxMTgsIDU5OC4xNjgxXSxcbiAgWzE2NDQuMTEzOCwgNTk5Ljc5MjldLFxuICBbMTY0MC4yMTYyLCA2MDEuMTI0OV0sXG4gIFsxNjM1LjU1LCA1OTkuNzM0M10sXG4gIFsxNjM0LjU3MSwgNTk1LjI4NjZdLFxuICBbMTYzOS40OTQ2LCA1OTUuOTk5NV0sXG4gIFsxNjQ0LjA4NDcsIDU5NC41ODA0NF0sXG4gIFsxNjQ1LjEyMTcsIDU4OS4zNDQ4NV0sXG4gIFsxNjQzLjIzNDQsIDU4MC4yOTIzNl0sXG4gIFsxNjQyLjc4NTIsIDU4NS4xODUxXSxcbiAgWzE2MzkuNzIxMywgNTkwLjk0Ml0sXG4gIFsxNjM0LjYxMDQsIDU5MC40MjI0XSxcbiAgWzE2MzAuMzg2NCwgNTkzLjE4Mjg2XSxcbiAgWzE2MjYuMjY2NiwgNTk0LjU5NDA2XSxcbiAgWzE2MjIuMTU3MiwgNTkzLjk0NDldLFxuICBbMTYyMC4yNjkzLCA1OTAuMzQyNF0sXG4gIFsxNjIyLjI5MjIsIDU4Ny4wOTI4M10sXG4gIFsxNjE5LjM5MjgsIDU4NC42NDE0XSxcbiAgWzE2MTUuMjk2NiwgNTgzLjQ4NjddLFxuICBbMTYxMC44OTQ0LCA1ODMuMTQ4NDRdLFxuICBbMTYwNy4wNTY2LCA1ODIuMDgwOTNdLFxuICBbMTYwMy42NjMsIDU3OS4zOTg3NF0sXG4gIFsxNTk4LjkxNTMsIDU4My4xMTI1NV0sXG4gIFsxNTk5LjY0NjIsIDU3OC40MTFdLFxuICBbMTU5OS4zODIyLCA1NzQuMjM4N10sXG4gIFsxNjA2Ljc5NTgsIDU2OC44ODA1NV0sXG4gIFsxNjExLjQ1MTgsIDU2NS42NzU5XSxcbiAgWzE2MTIuMzU4MywgNTcwLjIwOTddLFxuICBbMTYyMS4zMTA5LCA1NzQuODg5NV0sXG4gIFsxNjIzLjYxMDgsIDU3OS41OTA1XSxcbiAgWzE2MTkuMTg0OSwgNTgwLjIyMDY0XSxcbiAgWzE2MTYuOTc0NCwgNTc2Ljc1NV0sXG4gIFsxNjEzLjEzNzIsIDU3OS4yMzZdLFxuICBbMTYxMi44NzgyLCA1NzQuNzExMjRdLFxuICBbMTYwOC40OTc4LCA1NzcuNTQ4XSxcbiAgWzE2MDguNTk0MiwgNTcyLjg4MDldLFxuICBbMTYwNC4xNzk2LCA1NzQuMTM2ODRdLFxuICBbMTYwMS4xMzEzLCA1NjkuNjk5NDZdLFxuICBbMTU5Ni4xMjEzLCA1NjcuMjUyNV0sXG4gIFsxNTk5LjIyODMsIDU2NC4zNTYxNF0sXG4gIFsxNjAzLjUxOTgsIDU2NS43NjQ2NV0sXG4gIFsxNjA3LjEwNzcsIDU2My40MTY3NV0sXG4gIFsxNjEwLjA4NzksIDU2MC44MzMyXSxcbiAgWzE2MTMuODAwNSwgNTYwLjk0MTk2XSxcbiAgWzE2MTUuOTM2OSwgNTY3LjI5MDM0XSxcbiAgWzE2MTcuMjA5NiwgNTcyLjExNjZdLFxuICBbMTYyMC43MDIxLCA1NjkuMTg2XSxcbiAgWzE2MjUuMDA5LCA1NzEuMjgxXSxcbiAgWzE2MjUuOTU4MywgNTc1LjUwNTVdLFxuICBbMTYzMC4wMDA3LCA1NzMuNzU4MjRdLFxuICBbMTYyOC41ODI4LCA1NzkuMTQyNl0sXG4gIFsxNjI0Ljg2NCwgNTgzLjkzOTMzXSxcbiAgWzE2MjkuMDMzNywgNTgzLjk2NDFdLFxuICBbMTYyOS44MjEzLCA1ODguNTcxMTddLFxuICBbMTYyNS42MjQ2LCA1ODkuNTY4NTRdLFxuICBbMTYxNy43MzU3LCA1OTQuMTg1OV0sXG4gIFsxNjE1Ljk3NTMsIDU5OC4yNTI0NF0sXG4gIFsxNjIyLjYzMjMsIDU5OC41MjMzXSxcbiAgWzE2MTkuNjczNSwgNjAyLjM5ODQ0XSxcbiAgWzE2MTguMTk5MywgNjA3LjMwNjRdLFxuICBbMTYxOS42NTg4LCA2MTIuMTgzOF0sXG4gIFsxNjI0Ljg4NTUsIDYxMS4yMzk1XSxcbiAgWzE2MzAuNjA5MywgNjE0LjYxOTI2XSxcbiAgWzE2MjMuNTY1NCwgNjA2LjIzNjNdLFxuICBbMTYyNi41MTIsIDYwMi4yMDY2XSxcbiAgWzE2MjkuNjY5MiwgNTk4LjIyNTNdLFxuICBbMTYzMi4yODA4LCA2MDMuNDIxNjNdLFxuICBbMTYyOS4xOTc5LCA2MDcuNzgyXSxcbiAgWzE2MzQuNDkyNCwgNjA5LjU4NF0sXG4gIFsxNjM3LjgyNCwgNjA1LjQwOTY3XSxcbiAgWzE2NDMuNDcyNCwgNjA2LjEwMDQ2XSxcbiAgWzE2NDAuMzkwNiwgNjEwLjgxNjRdLFxuICBbMTY0Ni4wNzg2LCA2MTEuODI0Nl0sXG4gIFsxNjUxLjYwNSwgNjEzLjE0NDFdLFxuICBbMTY0OC4wOTMxLCA2MTguNTI2NV0sXG4gIFsxNjQyLjU0LCA2MTcuMDczODVdLFxuICBbMTYzNi43NzU1LCA2MTUuOTg5ODddLFxuICBbMTYzMy44ODYsIDYyMS4zMzM3NF0sXG4gIFsxNjI1LjEyNjMsIDYxNi41NTIwNl0sXG4gIFsxNjI3LjMwOTksIDYyMi42MTM4XSxcbiAgWzE2MjQuNjM4MywgNjI5LjMxODI0XSxcbiAgWzE2MTguMTc4NiwgNjMxLjExMTc2XSxcbiAgWzE2MTkuMjU5NSwgNjI1LjgzNDddLFxuICBbMTYxMy4xMDg2LCA2MjYuNDc0Nl0sXG4gIFsxNjEyLjEzNTcsIDYzMS40MDU2XSxcbiAgWzE2MDguMDAyNCwgNjM0LjkwMTI1XSxcbiAgWzE2MDQuMDE3NiwgNjMwLjg1NTk2XSxcbiAgWzE2MDcuOTg0NSwgNjI4LjU2NjldLFxuICBbMTYwOC41MjA4LCA2MjMuMTczNl0sXG4gIFsxNjEyLjM0MDUsIDYyMS4wOTg3NV0sXG4gIFsxNjE2LjcxNjcsIDYyMS4wMTQ4M10sXG4gIFsxNjIxLjg2OTQsIDYyMC41MjQ2XSxcbiAgWzE2MTcuNjIwOCwgNjE2LjE5OTZdLFxuICBbMTYxMi40MzMzLCA2MTYuMjc3Ml0sXG4gIFsxNjEzLjY1MTcsIDYxMS41MDQ5NF0sXG4gIFsxNjA0LjQ1NzgsIDYxMC4zMTM4NF0sXG4gIFsxNjA4LjEzODcsIDYxMy4xODg4NF0sXG4gIFsxNjA3LjgyMDYsIDYxNy43NTU4Nl0sXG4gIFsxNjA0LjE0MjUsIDYyMC40MjcxXSxcbiAgWzE2MDQuNDkyNiwgNjI0Ljk0ODZdLFxuICBbMTYwMC44ODIyLCA2MjYuOTQ1MDddLFxuICBbMTU5Ni43Mjg0LCA2MjQuNzc4NDRdLFxuICBbMTU5My4xMzI2LCA2MjcuMzY1ODRdLFxuICBbMTU5NC4yNzU1LCA2MzIuMzMzNV0sXG4gIFsxNTg3LjkxOCwgNjI4LjQwNl0sXG4gIFsxNTkxLjUwNzksIDYyMS42MDE3XSxcbiAgWzE1ODYuNTEwMywgNjE3LjE4Mjg2XSxcbiAgWzE1OTEuMzM3NiwgNjE0Ljg1ODldLFxuICBbMTU4Ni4wNzIsIDYwOS43NjA5XSxcbiAgWzE1ODAuMzE2NSwgNjEyLjY0NjA2XSxcbiAgWzE1ODAuMzgyMSwgNjA1Ljk1NzhdLFxuICBbMTU4NS4wMjQ5LCA2MDMuNDE2MTRdLFxuICBbMTU4MS4zMjY5LCA1OTkuNTUyMV0sXG4gIFsxNTgzLjY4MDIsIDU5NS4wMjEzNl0sXG4gIFsxNTg5LjE4OCwgNTk0LjAzNDRdLFxuICBbMTU4OC4zMDQyLCA1OTguODY0OF0sXG4gIFsxNTkwLjQwNDIsIDYwMy43ODJdLFxuICBbMTU5MS41OTYyLCA2MDkuMDEyNzZdLFxuICBbMTU5Ni4xMDEzLCA2MTEuMTg5NjRdLFxuICBbMTYwMC4yMTQxLCA2MTIuNDM3MTNdLFxuICBbMTYwMi42NDY3LCA2MTYuMDE1MjZdLFxuICBbMTU5OS41ODg3LCA2MjEuMTY2OV0sXG4gIFsxNTk2LjM2NzIsIDYxNy4zODM1XSxcbiAgWzE2MDAuMzI5MSwgNjA2Ljg3NDZdLFxuICBbMTU5NS44ODEzLCA2MDUuMTgxNV0sXG4gIFsxNTk1LjY1NDUsIDYwMC4yMDQ0XSxcbiAgWzE1OTQuMTYxMywgNTk2LjE4ODg0XSxcbiAgWzE1OTMuNjAyNSwgNTkxLjI0NzRdLFxuICBbMTU5OC42MDczLCA1OTMuMjU5Ml0sXG4gIFsxNjAyLjY2OTYsIDU5Ni44NjA1M10sXG4gIFsxNjAxLjE4NjgsIDYwMS4zMDQyXSxcbiAgWzE2MDQuOTUyNCwgNjA0Ljk1OTRdLFxuICBbMTYwOS4wMDEyLCA2MDcuOTUyMTVdLFxuICBbMTYxMy4xODc3LCA2MDYuMzIzNV0sXG4gIFsxNjEzLjU4OTEsIDYwMS43ODg5NF0sXG4gIFsxNjA4LjA2ODUsIDYwMS40OTkxXSxcbiAgWzE2MDguOTc5MiwgNTk2LjkyNjY0XSxcbiAgWzE2MDQuNTUyNSwgNTkyLjI1ODU0XSxcbiAgWzE2MDkuMTIzMywgNTkxLjc2ODhdLFxuICBbMTYxMy4xNDA5LCA1OTMuNzVdLFxuICBbMTYxNi4yMTY5LCA1ODguOTUwOF0sXG4gIFsxNjEyLjE3NDEsIDU4Ny44Njc0XSxcbiAgWzE2MDcuMzMzNywgNTg3LjI5MzFdLFxuICBbMTYwMy4zNDQ1LCA1ODQuOTQzODVdLFxuICBbMTYwMC45OTM3LCA1ODguNzgyOTZdLFxuICBbMTU5Ni40OTQ2LCA1ODcuMjA3XSxcbiAgWzE1OTMuNTQ1OCwgNTgyLjI2MzM3XSxcbiAgWzE1OTIuMjA2OCwgNTg2LjE0ODI1XSxcbiAgWzE1ODkuMjgwMywgNTg4LjgyMTVdLFxuICBbMTU4NS41NDg1LCA1OTAuNjM3M10sXG4gIFsxNTgyLjI4NzIsIDU4OC4wNTY5NV0sXG4gIFsxNTc4LjE2MSwgNTg4LjQyNTA1XSxcbiAgWzE1NzguNzUwNSwgNTg0LjMzODNdLFxuICBbMTU3NC45MTk0LCA1ODIuNDQzXSxcbiAgWzE1NzEuMjg2LCA1ODIuNDQxMl0sXG4gIFsxNTY4LjIyMDUsIDU4MC4xODk1XSxcbiAgWzE1NzAuNzEwOCwgNTc3Ljc1NTZdLFxuICBbMTU3Mi4zMzQ2LCA1NzQuNDEyN10sXG4gIFsxNTc0Ljk4ODYsIDU3OC4xMjA2N10sXG4gIFsxNTc5LjY3ODcsIDU3Ni4yNTkwM10sXG4gIFsxNTgwLjExMTUsIDU3Mi41NzJdLFxuICBbMTU4MS40MTk3LCA1NjguOTE3Nl0sXG4gIFsxNTg2LjAyMzcsIDU2Ny4yMjU4XSxcbiAgWzE1ODMuNzY3MiwgNTYyLjkwNDZdLFxuICBbMTU4My4yNjc4LCA1NTUuMDA4NTRdLFxuICBbMTU4My4xMjEzLCA1NTkuMTI4M10sXG4gIFsxNTc4LjczMDUsIDU2MS4zNDldLFxuICBbMTU3OC45Nzk0LCA1NTcuMzEzMjNdLFxuICBbMTU3NS45MjY5LCA1NTUuMDIwM10sXG4gIFsxNTc1Ljg2NjYsIDU1MC42MDQ0XSxcbiAgWzE1NzEuOTAxMiwgNTQ5LjgzMjk1XSxcbiAgWzE1NjguMzAxMywgNTQ4LjEzMzRdLFxuICBbMTU2OC4zMDY5LCA1NDQuMTY4NzZdLFxuICBbMTU3MS42Mjc0LCA1NDEuODE1Ml0sXG4gIFsxNTc2LjE5MTQsIDU0MS4zMDE2NF0sXG4gIFsxNTc4LjU3ODksIDU0NC40OTY2XSxcbiAgWzE1NzkuNjIzNSwgNTQ4LjIzNzldLFxuICBbMTU4MC4yOTgxLCA1NTIuMjg5OV0sXG4gIFsxNTczLjg5MzEsIDU0NS44MDQxXSxcbiAgWzE1NjQuMDU1MiwgNTQ2LjI3NzA0XSxcbiAgWzE1NjMuNjk2OCwgNTQxLjk4NjNdLFxuICBbMTU2Mi42NDA5LCA1MzcuNzk2OV0sXG4gIFsxNTY3LjIyNjksIDUzOS45NzYzXSxcbiAgWzE1NzAuNDE4NSwgNTM3LjUwMjddLFxuICBbMTU3MS4zNTI1LCA1MzMuOTY1Ml0sXG4gIFsxNTczLjk0NzksIDUzNy45NDg3XSxcbiAgWzE1NjYuNzc1MywgNTM2LjE5MDhdLFxuICBbMTU2NS4yMTYsIDUzMy4xMDIzXSxcbiAgWzE1NjguNjY0NiwgNTMyLjIwNTRdLFxuICBbMTU2OS4zMjU0LCA1MjUuODg3MTVdLFxuICBbMTU2NC40MjgsIDUyMC4wMTQ0N10sXG4gIFsxNTY0Ljg4NDgsIDUyNC43NDcxXSxcbiAgWzE1NjcuMjk5NiwgNTI4LjkwNTMzXSxcbiAgWzE1NjMuNTM0NCwgNTI5LjUwMjFdLFxuICBbMTU2MC43MDAzLCA1MjYuNjU3Ml0sXG4gIFsxNTYwLjE2NjMsIDUyMi42NDQxXSxcbiAgWzE1NTkuMjg4MywgNTE4LjI0NDQ1XSxcbiAgWzE1NTcuMTQ2MiwgNTE0LjI5NzA2XSxcbiAgWzE1NTQuNTA0NSwgNTA5LjAyMDRdLFxuICBbMTU1Ny44MjI1LCA1MDUuODE3NTddLFxuICBbMTU2MS40Nzg2LCA1MDMuMTg4MV0sXG4gIFsxNTY1LjczMDEsIDUwMi4yODcyXSxcbiAgWzE1NjguNTk0NSwgNDk5LjI5OTg3XSxcbiAgWzE1NzIuNTU3MywgNDk3LjU3ODk1XSxcbiAgWzE1NzYuMTIyMSwgNDk0LjY1ODddLFxuICBbMTU4My40NTc5LCA0ODkuMTA1NTNdLFxuICBbMTU4OC43ODMxLCA0OTEuMDY5OV0sXG4gIFsxNTkyLjc0OSwgNDg4LjY3NjE1XSxcbiAgWzE1OTQuMzEwOCwgNDkyLjc2NzU4XSxcbiAgWzE1OTUuNjE1NCwgNDk3LjYwMzUyXSxcbiAgWzE1OTAuMjEzOSwgNDk1LjY3NDQ0XSxcbiAgWzE1ODUuMDM3MSwgNDk0LjE5MTY1XSxcbiAgWzE1ODAuNTA5NSwgNDk3LjExOTddLFxuICBbMTU3Ni4yODM4LCA1MDAuNTA4Nl0sXG4gIFsxNTgwLjk0MjQsIDUwMi4xMzY4XSxcbiAgWzE1NzcuOTc3LCA1MDYuMzY5ODddLFxuICBbMTU3My41MTM3LCA1MDcuMTc1MjNdLFxuICBbMTU3MS44MzEsIDUwMi4yOTQ5Ml0sXG4gIFsxNTY4LjYwOTcsIDUwNS45Nzg1OF0sXG4gIFsxNTYzLjY4ODUsIDUwNy4yMjExNl0sXG4gIFsxNTYwLjQ1MDcsIDUxMC42MDYyNl0sXG4gIFsxNTYzLjU1MTgsIDUxNS4wMzUzXSxcbiAgWzE1NjcuOTM1MiwgNTExLjA5NjRdLFxuICBbMTU3My43MDY0LCA1MTMuMDAzMV0sXG4gIFsxNTc5LjIyNCwgNTEzLjAxOThdLFxuICBbMTU4MS44NjMzLCA1MDkuMjExODhdLFxuICBbMTU4NS45Njg1LCA1MTEuMDU3NDZdLFxuICBbMTU5MC41MzIzLCA1MTEuMDYxNzddLFxuICBbMTU5NC43MDQsIDUxNC4wNzU1Nl0sXG4gIFsxNTk1LjAxNywgNTE5Ljc0MjldLFxuICBbMTU4OS4yODk4LCA1MTYuNDgxOV0sXG4gIFsxNTgxLjU4MDYsIDUyMC4yMzg0XSxcbiAgWzE1ODMuODUzNSwgNTE1Ljc2MDg2XSxcbiAgWzE1NzcuNzc3LCA1MTcuMzM4Nl0sXG4gIFsxNTczLjUzODIsIDUxOS4xNTk4NV0sXG4gIFsxNTY5LjAzNTYsIDUxNi43MDA0NF0sXG4gIFsxNTY5LjA5NjQsIDUyMS42MDY2XSxcbiAgWzE1NzMuMjkxMSwgNTI0LjI4ODY0XSxcbiAgWzE1NzcuNTk2LCA1MjIuNzUwN10sXG4gIFsxNTc5Ljk5MywgNTI2Ljc2OTE3XSxcbiAgWzE1ODMuNzY5NywgNTI0LjczNDI1XSxcbiAgWzE1ODYuMzU5NCwgNTIwLjczXSxcbiAgWzE1OTAuOTA4NywgNTIxLjQ5ODhdLFxuICBbMTU4OS4xMzkyLCA1MjUuNTMzNTddLFxuICBbMTU4Ni42ODE5LCA1MjguODA5N10sXG4gIFsxNTgyLjU1LCA1MzAuMTkxOTZdLFxuICBbMTU4NS40NjI2LCA1MzMuMjc5NTRdLFxuICBbMTU4OC4xNTQzLCA1MzcuMDE0OV0sXG4gIFsxNTgzLjgxMzcsIDUzNy4xNDU1XSxcbiAgWzE1ODEuMDEyNywgNTM0LjQxMjg0XSxcbiAgWzE1NzguMzA4MywgNTMxLjQ4NzNdLFxuICBbMTU3NS45NTQ4LCA1MjcuOTAxNzNdLFxuICBbMTU3Mi4wNzUsIDUyOS4zNDQyNF0sXG4gIFsxNTc0LjY1MzQsIDUzMi45MzFdLFxuICBbMTU3Ny4xMzkyLCA1MzYuMDcyOTRdLFxuICBbMTU3OS44ODIzLCA1MzguODg0MDNdLFxuICBbMTU4Mi4xMTY2LCA1NDIuMjY3Nl0sXG4gIFsxNTgzLjk4MzQsIDU0Ni41NDA1XSxcbiAgWzE1ODUuODE1LCA1NDAuNzE2MV0sXG4gIFsxNTg4LjEzMDksIDU0NC4xNDg4Nl0sXG4gIFsxNTkwLjc3MDgsIDU0MS4wNjUzN10sXG4gIFsxNTk0LjE0OTIsIDU0NC43MTc5Nl0sXG4gIFsxNTk4Ljg2NDMsIDU0Mi4wODg1Nl0sXG4gIFsxNjAyLjMxNjgsIDUzOC43MDc0XSxcbiAgWzE2MDIuMjA5OCwgNTMzLjk2NDddLFxuICBbMTYwNy4xMjg3LCA1MzkuMzk2N10sXG4gIFsxNjA2LjgzMjMsIDUzNS4yNjY1NF0sXG4gIFsxNjA1Ljg4NDQsIDUzMC43NTc5XSxcbiAgWzE2MTQuNTA2NiwgNTI1Ljc3MDE0XSxcbiAgWzE2MDkuODY1NSwgNTI3LjY4OTMzXSxcbiAgWzE2MDkuNzcwOCwgNTIxLjYwNTldLFxuICBbMTYwNC45OTU0LCA1MTYuNTMzMV0sXG4gIFsxNTk5LjQ3MDUsIDUxOC4zNTUxXSxcbiAgWzE1OTkuMTEwOCwgNTI0LjI3MjFdLFxuICBbMTU5Ni45NDMxLCA1MjguNTkyNjVdLFxuICBbMTU5NC4yMjI3LCA1MjUuMDA3Ml0sXG4gIFsxNTkyLjMwMjcsIDUyOS4yNDI3XSxcbiAgWzE1ODkuNDU2MiwgNTMyLjU2MzldLFxuICBbMTU5My44ODUsIDUzMy4zNTM4XSxcbiAgWzE1OTIuMjQwNywgNTM2Ljc5NDU2XSxcbiAgWzE1OTUuMDA1NSwgNTQwLjAzMDRdLFxuICBbMTU5Ny44MzcyLCA1MzYuOTM5MV0sXG4gIFsxNTk3LjkxODIsIDUzMi42Ml0sXG4gIFsxNjAxLjM3ODksIDUyOS4wODgzXSxcbiAgWzE2MDQuOTMzMSwgNTI1Ljk0NjRdLFxuICBbMTYwMy42NTMsIDUyMS40MTYxXSxcbiAgWzE2MDAuMzc0OCwgNTEzLjc2MDddLFxuICBbMTYwMy45MTA0LCA1MTAuMzc2MDddLFxuICBbMTYwOC4yNDQxLCA1MTEuMjgyM10sXG4gIFsxNjA5LjU2NzQsIDUxNi4wNjYwNF0sXG4gIFsxNjEzLjc5MiwgNTE3LjE1Nl0sXG4gIFsxNjE4LjExMzMsIDUxNS41NzA0XSxcbiAgWzE2MTguMDQ0OCwgNTEwLjkyNjEyXSxcbiAgWzE2MTQuNTM2NCwgNTA3Ljc2MzRdLFxuICBbMTYxMy4xOTQzLCA1MTIuMDg1NDVdLFxuICBbMTYwOS44MTMxLCA1MDYuODk4NzRdLFxuICBbMTYwNS4zNDg0LCA1MDQuOTU1MjZdLFxuICBbMTYwMS4wNjg1LCA1MDYuMzIxMTddLFxuICBbMTU5Ny45NzMzLCA1MDkuNjIyM10sXG4gIFsxNTkzLjk5MjQsIDUwNy40NjRdLFxuICBbMTU4OS4yOTk2LCA1MDUuNTU1NF0sXG4gIFsxNTg0Ljg2MzgsIDUwNC44MDM1Nl0sXG4gIFsxNTg1LjQ2MTgsIDQ5OS4yNTY4NF0sXG4gIFsxNTg5Ljg1NzUsIDUwMC4yMzM2NF0sXG4gIFsxNTkzLjQ5ODQsIDUwMi4xOTgxXSxcbiAgWzE1OTcuMzg4NSwgNTAzLjI4OTNdLFxuICBbMTYwMS4wNjY5LCA1MDEuMjUxMzRdLFxuICBbMTYwNC40OTksIDQ5OC45NjIyOF0sXG4gIFsxNjA3Ljc3NzgsIDQ5Ni40MTY3XSxcbiAgWzE2MTAuNDMsIDQ5Mi44Njc1NV0sXG4gIFsxNjExLjgyMTUsIDQ5OC4zMDA2Nl0sXG4gIFsxNjA4LjQ3MzQsIDUwMS42NzUxN10sXG4gIFsxNjEyLjg4NjEsIDUwMy4wMDI4XSxcbiAgWzE2MTUuMjMwMSwgNDk2LjA5MTVdLFxuICBbMTYxNS40NzcsIDQ5Mi4xMTU3OF0sXG4gIFsxNjExLjk5NzgsIDQ4OC4yOTUxNF0sXG4gIFsxNjA5LjIxNywgNDg0LjczMDldLFxuICBbMTYwNS4wNjA5LCA0ODMuODYwNzJdLFxuICBbMTYwMC42Mzg3LCA0ODQuMDM3NTddLFxuICBbMTYwMS41MjksIDQ3OS43NzY4Nl0sXG4gIFsxNjA1LjMwNzksIDQ3OS41ODIzN10sXG4gIFsxNjA3LjcxMjYsIDQ3Ni42NTc0NF0sXG4gIFsxNjEwLjAwMzIsIDQ4MC4yNTMyM10sXG4gIFsxNjEzLjcxOTUsIDQ4My4xNzA3NV0sXG4gIFsxNjIwLjE4ODcsIDQ5MS45Mjg5Nl0sXG4gIFsxNjI0LjQ0NiwgNDkyLjQ1MjQ4XSxcbiAgWzE2MjQuMTM4LCA0OTcuNDE2NV0sXG4gIFsxNjE5Ljk2NDQsIDQ5Ni40NTUyXSxcbiAgWzE2MjEuNDA2NSwgNTAxLjY4MjI1XSxcbiAgWzE2MTYuOTA4NCwgNTAwLjE1Njk4XSxcbiAgWzE2MTcuMDQxMSwgNTA0LjI4NDA2XSxcbiAgWzE2MjAuMDQ4NSwgNTA2LjQ3MDk1XSxcbiAgWzE2MjIuNDQ1MSwgNTA5Ljk1MDkzXSxcbiAgWzE2MjUuNjg4NywgNTAyLjEwODM0XSxcbiAgWzE2MjQuMzQ2MywgNTA2LjI3Mjk1XSxcbiAgWzE2MjguMDk0LCA1MDYuNTA1NDZdLFxuICBbMTYzMC4yMTE1LCA1MDkuNzg4OF0sXG4gIFsxNjI2LjYwNzgsIDUxMS40OTE2N10sXG4gIFsxNjI2Ljc2NzYsIDUxNi40ODk2XSxcbiAgWzE2MjIuNjA2MiwgNTE0LjEyMzZdLFxuICBbMTYyMS43OTkxLCA1MTkuMDA3OF0sXG4gIFsxNjE2LjQ1MTIsIDUyMC45NzU5NV0sXG4gIFsxNjIwLjg4MDUsIDUyNC40ODgzNF0sXG4gIFsxNjE4Ljg5MDYsIDUyOS4xNzIzNl0sXG4gIFsxNjE2Ljg5NDMsIDUzNi40NDY1XSxcbiAgWzE2MTQuOTQ2NywgNTMxLjk3Mzc1XSxcbiAgWzE2MTAuNTI4NiwgNTMyLjQ1Ml0sXG4gIFsxNjExLjg2MTYsIDUzNi45NzFdLFxuICBbMTYxMy43NzY3LCA1NDAuOTAyM10sXG4gIFsxNjE4LjcxNDcsIDU0MC42NzI2XSxcbiAgWzE2MjAuNDExLCA1NDUuNjM3Ml0sXG4gIFsxNjIyLjM4ODgsIDUzOC42MDAxNl0sXG4gIFsxNjI2LjY1NSwgNTM2LjAzOTFdLFxuICBbMTYyNy42ODUzLCA1NDAuODA3MDddLFxuICBbMTYyOC4yMzIyLCA1NDUuNDA3XSxcbiAgWzE2MjguMjA4LCA1NTAuMzMyOV0sXG4gIFsxNjI0LjExMDUsIDU0Ny44NDY3NF0sXG4gIFsxNjI0LjE0MTgsIDU1Mi4zNzAwNl0sXG4gIFsxNjE5LjY3NDgsIDU1MC43Nzk0XSxcbiAgWzE2MjAuMTgzNSwgNTU0Ljk1NjNdLFxuICBbMTYxNi45ODczLCA1NTcuNjQ4OF0sXG4gIFsxNjE1LjE4MDIsIDU1My43MjUyXSxcbiAgWzE2MTIuNDIyMSwgNTU2LjYxMTldLFxuICBbMTYwOC43NDMsIDU1Ni4yMDI3XSxcbiAgWzE2MDUuMjcyMywgNTUzLjMwMl0sXG4gIFsxNjA5Ljg1NjksIDU1MS40NDA5XSxcbiAgWzE2MTQuMjczMiwgNTUwLjI5M10sXG4gIFsxNjE2Ljk3MzQsIDU0Ny43MjMzXSxcbiAgWzE2MTYuMjgyNywgNTQ0LjAwNDQ2XSxcbiAgWzE2MTIuMjUyMiwgNTQ2LjQ0M10sXG4gIFsxNjA3LjU5NjksIDU0Ny4wMzU2XSxcbiAgWzE2MDkuNjM0MywgNTQyLjY2MDVdLFxuICBbMTYwMy45MzczLCA1NDMuNDQxMV0sXG4gIFsxNjAzLjU4MzUsIDU0OC44NTIzXSxcbiAgWzE1OTkuNTI2NCwgNTQ2LjQyODY1XSxcbiAgWzE1OTcuMjEwMiwgNTUwLjE4Mzk2XSxcbiAgWzE1ODkuMjU4NSwgNTQ4LjA2OTQ2XSxcbiAgWzE1ODUuNTQ0NiwgNTUxLjE5MThdLFxuICBbMTU5MC41NjEyLCA1NTMuMjUwODVdLFxuICBbMTU5My40MTA5LCA1NDkuMjQ4N10sXG4gIFsxNTk1LjMzODcsIDU1NC45MjY0XSxcbiAgWzE2MDAuNTU2NCwgNTUyLjYwNTJdLFxuICBbMTYwMC41OTk3LCA1NTYuODQ2ODZdLFxuICBbMTYwNS4zNTg0LCA1NTguMzA0Ml0sXG4gIFsxNjAyLjQ0NSwgNTYxLjE3MTYzXSxcbiAgWzE1OTcuMDQ3NCwgNTU5LjgxMjZdLFxuICBbMTU5NC4wNDMyLCA1NjMuMjcxNTVdLFxuICBbMTU5MS44MDY4LCA1NTguODg3MV0sXG4gIFsxNTg3LjQzNzYsIDU1Ni43MDEwNV0sXG4gIFsxNTg3LjU5OCwgNTYxLjUxMTddLFxuICBbMTU5MC4xMjg5LCA1NjUuMDA0MV0sXG4gIFsxNTkxLjgzMjUsIDU2OS40MjA1M10sXG4gIFsxNTk2LjA3NSwgNTcxLjM2NDZdLFxuICBbMTU5My43NzY2LCA1NzQuOTc3NTRdLFxuICBbMTU5NS4yNTU5LCA1NzguODI1OF0sXG4gIFsxNTg4LjE0MjYsIDU3MS4wMzQ5XSxcbiAgWzE1ODkuMjM3MiwgNTc0Ljg3MDddLFxuICBbMTU4OS4yOTQsIDU3OC45NTI0XSxcbiAgWzE1ODguNzIxNCwgNTgyLjc2MTk2XSxcbiAgWzE1ODUuODEzNSwgNTg1LjQyOV0sXG4gIFsxNTgzLjI2MjUsIDU4Mi4wOTgxNF0sXG4gIFsxNTc5LjMxNzYsIDU4MC4wODc3N10sXG4gIFsxNTg0LjQxNTksIDU3Ny4zODQxNl0sXG4gIFsxNTg0LjMwNTQsIDU3Mi41MjIxXSxcbiAgWzE1NzYuMDkzNSwgNTczLjU4MDE0XSxcbiAgWzE1NzYuODUyNSwgNTY5LjMwMDldLFxuICBbMTU4MS42NDQ4LCA1NjUuMzUwMl0sXG4gIFsxNTc3Ljg0NCwgNTY1LjUzNl0sXG4gIFsxNTc0LjgxLCA1NjMuMTM2MTddLFxuICBbMTU3MC45NTcyLCA1NjIuNTUzN10sXG4gIFsxNTczLjc5MDgsIDU1OS4wNjI4N10sXG4gIFsxNTcxLjg0OTQsIDU1NC42MDAwNF0sXG4gIFsxNTY3LjgxMTksIDU1Mi44NzY1XSxcbiAgWzE1NjMuOTMzNiwgNTU1LjM0OTI0XSxcbiAgWzE1NjQuMDA2OCwgNTUwLjMwMzQ3XSxcbiAgWzE1NTQuMzUzOSwgNTQ3LjQzNjM0XSxcbiAgWzE1NTEuODkyMSwgNTUwLjkzMjg2XSxcbiAgWzE1NTMuMzQ0MiwgNTU0LjUzMzU3XSxcbiAgWzE1NTAuMzU5OSwgNTU3LjI4NTc3XSxcbiAgWzE1NTIuMzMwMSwgNTYxLjA5M10sXG4gIFsxNTU1LjE0NiwgNTY2LjA3NDJdLFxuICBbMTU1OC4yNzgyLCA1NjkuODM2NTVdLFxuICBbMTU2MS43MzIyLCA1NzEuMTAyM10sXG4gIFsxNTY1LjE2MzUsIDU3MS45NzIxN10sXG4gIFsxNTY1Ljc3NDcsIDU2OC4zMjU2XSxcbiAgWzE1NjkuMTg0NiwgNTY2LjY2NjFdLFxuICBbMTU3My4yMzg1LCA1NjYuNzQ2M10sXG4gIFsxNTcyLjk3MSwgNTcwLjU0MzNdLFxuICBbMTU2OS4yODIsIDU3MC43NTExXSxcbiAgWzE1NjguMjY0OSwgNTc0LjEyMzNdLFxuICBbMTU2Ni4wOTU3LCA1NzYuNzE2MDZdLFxuICBbMTU2Mi44MDY0LCA1NzQuOTQwMDZdLFxuICBbMTU1OS4yOTM4LCA1NzMuNzkzNDZdLFxuICBbMTU1NS44ODQzLCA1NzMuNTA5NV0sXG4gIFsxNTUxLjI5NzYsIDU3OS43Njg2XSxcbiAgWzE1NTMuNjcwNCwgNTc3LjIxNTQ1XSxcbiAgWzE1NTcuMDExNywgNTc2Ljc3OTRdLFxuICBbMTU1OS45MTgyLCA1NzcuNzg5NV0sXG4gIFsxNTYyLjQ5LCA1NzguOTkxXSxcbiAgWzE1NjQuNjQ1MSwgNTgwLjUxMjQ1XSxcbiAgWzE1NjUuNzUwOSwgNTgzLjM5NTc1XSxcbiAgWzE1NjguNTM0OSwgNTg1LjI3NzldLFxuICBbMTU3MC4wNjMsIDU4OC40MzQzXSxcbiAgWzE1NjkuMTU5OCwgNTkyLjUzODE1XSxcbiAgWzE1NjQuNzg4LCA1OTEuMDQ2XSxcbiAgWzE1NjQuOTM0NCwgNTg3LjI2OThdLFxuICBbMTU2MS44OTUxLCA1ODQuNDQyMTRdLFxuICBbMTU1OS42OTk1LCA1ODIuMTA1OTZdLFxuICBbMTU1Ni44NTk1LCA1ODAuMzg2Ml0sXG4gIFsxNTU0LjA2OTgsIDU4Mi4wMzk3XSxcbiAgWzE1NTYuNjMxLCA1ODUuMjYwOV0sXG4gIFsxNTU2LjU5MzUsIDU4OS40NDExXSxcbiAgWzE1NjAuNjAzNiwgNTg4LjQ1NTFdLFxuICBbMTU1OS45NDc1LCA1OTMuMjM3MDZdLFxuICBbMTU2NS4xNjY1LCA1OTUuNTIxNjddLFxuICBbMTU2MC42MjU3LCA1OTguNDg1M10sXG4gIFsxNTU5Ljg0MSwgNjA0LjYzMzY3XSxcbiAgWzE1NTkuNjA5NCwgNjEwLjk1ODQ0XSxcbiAgWzE1NTIuMjc5MiwgNjE4LjEzNDE2XSxcbiAgWzE1NTcuNjUxMSwgNjE2LjMxNzE0XSxcbiAgWzE1NTguODkyNywgNjI3Ljg3Nl0sXG4gIFsxNTY1LjYyNiwgNjMwLjYxMjldLFxuICBbMTU2Mi4xMDgyLCA2MzQuNTIzNDRdLFxuICBbMTU2Mi40NzM4LCA2NDAuNzM3Nl0sXG4gIFsxNTY5LjUzODEsIDYzOC4wMjUyXSxcbiAgWzE1ODIuNzkwNSwgNjMyLjc0NTA2XSxcbiAgWzE1NzguODk1MywgNjI2Ljk2MDldLFxuICBbMTU4NC44NTUsIDYyNC4wMV0sXG4gIFsxNTgxLjE4MTUsIDYxOC44NDU1XSxcbiAgWzE1NzYuMDQxNiwgNjIwLjY0NzJdLFxuICBbMTU3My4yMDksIDYxNS4xNTEzN10sXG4gIFsxNTc0LjI0MzksIDYwOS44MTcxNF0sXG4gIFsxNTc1LjQwMTQsIDYwNC45Mjk1N10sXG4gIFsxNTc1LjQ0OTEsIDYwMC40NDA3M10sXG4gIFsxNTc3LjMxMjMsIDU5Ni4xNzUyM10sXG4gIFsxNTc5LjU0NjEsIDU5Mi40NjE0XSxcbiAgWzE1NzQuMDU4OCwgNTg2LjkyMTI2XSxcbiAgWzE1NzQuMzAyNiwgNTkxLjU4Nzc3XSxcbiAgWzE1NzIuNTYwNSwgNTk1LjY4MjVdLFxuICBbMTU2OS42ODEyLCA1OTguNzAzXSxcbiAgWzE1NjUuMTExMSwgNjAwLjg0MjRdLFxuICBbMTU3MC4wNDQyLCA2MDQuMDg4Nl0sXG4gIFsxNTY0LjU5NjMsIDYwNi40ODU3XSxcbiAgWzE1NjguMDExNCwgNjEwLjU3NTQ0XSxcbiAgWzE1NjQuNzA5NSwgNjE1LjA4NTk0XSxcbiAgWzE1NjIuMjcyMywgNjIwLjI0ODA1XSxcbiAgWzE1NjQuOTg2MSwgNjI1LjA2MDg1XSxcbiAgWzE1NjguODYyOCwgNjIwLjA2MDddLFxuICBbMTU3Mi4wMDg1LCA2MjUuNTUwNV0sXG4gIFsxNTcxLjA4NDIsIDYzMS4xMzY5Nl0sXG4gIFsxNTc2LjI1MTIsIDYzMy4zMjE3XSxcbiAgWzE1NzcuMTA5NiwgNjM5LjIxMzc1XSxcbiAgWzE1NzQuNjc1OCwgNjQ1LjA3NjU0XSxcbiAgWzE1ODEuMjgxNywgNjQ2LjU4NTYzXSxcbiAgWzE1ODMuMDc1OCwgNjM5Ljk5MDk3XSxcbiAgWzE1ODkuMDA5MywgNjMzLjk4NzM3XSxcbiAgWzE1ODguNjM2MSwgNjM5LjM4ODhdLFxuICBbMTU4Ny41MjM5LCA2NDUuOTQ2NTNdLFxuICBbMTU5Mi41Nzc4LCA2NDMuNTk5Ml0sXG4gIFsxNTk3LjE0MDksIDY0Mi42NDY5XSxcbiAgWzE1OTQuNjMxLCA2MzcuNDI2NzZdLFxuICBbMTU5OC42NjY5LCA2MzEuNDc3OV0sXG4gIFsxNjAyLjA3NTksIDYzNS4xNzM5XSxcbiAgWzE2MDAuMzE4LCA2MzkuNDUxNF0sXG4gIFsxNjAwLjU3OTEsIDY0Ni43ODA1XSxcbiAgWzE2MDYuMTAxNiwgNjUwLjM1NDRdLFxuICBbMTYwNy4xOTU0LCA2NDUuMDM4Nl0sXG4gIFsxNjA1LjIzMzIsIDYzOS45ODQyNV0sXG4gIFsxNjExLjAzLCA2NDAuNDE3OF0sXG4gIFsxNjE0LjcwNzUsIDYzNS44ODE1XSxcbiAgWzE2MzQuMjM2OSwgNjMzLjkwODU3XSxcbiAgWzE2MzEuNDc0NiwgNjI4LjAxXSxcbiAgWzE2NDEuMTU3NywgNjM3LjAyNjg2XSxcbiAgWzE2MzQuNzI1NSwgNjQwLjQ3NTA0XSxcbiAgWzE2MjguODk5OCwgNjQzLjc1NzU3XSxcbiAgWzE2MzEuMjE0NCwgNjUwLjE3NDFdLFxuICBbMTYyMy41NDQsIDY1MC42MjQ5XSxcbiAgWzE2MTIuNzMwNywgNjU5LjQ2MTJdLFxuICBbMTYxNi4zNjA4LCA2NjUuMjcwNV0sXG4gIFsxNjEwLjMyMjEsIDY3MC4zNDY4Nl0sXG4gIFsxNjA3LjQzMzMsIDY2NC4yNjM1NV0sXG4gIFsxNjAwLjY5NzMsIDY2NS4zMzk4XSxcbiAgWzE2MDEuODI1OCwgNjU5LjEyMDY3XSxcbiAgWzE1OTUuMjU3OCwgNjYxLjk2ODI2XSxcbiAgWzE1OTguNzI3NSwgNjUzLjY1OTY3XSxcbiAgWzE1OTMuNjkwOSwgNjQ5LjU2MDhdLFxuICBbMTU4Ni42OTY1LCA2NTIuNTY1M10sXG4gIFsxNTc2LjE2MDksIDY1OS4wNTI2XSxcbiAgWzE1ODIuNjk0NiwgNjU5LjQ2NjU1XSxcbiAgWzE1ODcuODY4NCwgNjYxLjM3MTk1XSxcbiAgWzE1OTAuMjgwOSwgNjY2LjAyNjM3XSxcbiAgWzE1OTQuMTI3NywgNjY5LjIwMjNdLFxuICBbMTU5OC41NzQxLCA2NzEuMTMyNTddLFxuICBbMTYwNC4xMDc0LCA2NzEuODIzXSxcbiAgWzE2MDguMTUzNCwgNjc2Ljk5MTc2XSxcbiAgWzE2MTQuNjUyOCwgNjc4LjQ2OTRdLFxuICBbMTYxNi4wOTUzLCA2NzIuNjg2NDZdLFxuICBbMTYyMi40MTk3LCA2NzEuODAyMjVdLFxuICBbMTYyNi44MDU4LCA2NjcuMjk4N10sXG4gIFsxNjIzLjQ1NTgsIDY2Mi4zNTYyXSxcbiAgWzE2MjguMzUxMywgNjU3LjExNzA3XSxcbiAgWzE2MzcuNjIwNywgNjQ1LjkwOTRdLFxuICBbMTY0NC4zMTg0LCA2NDMuODA4ODRdLFxuICBbMTY1Mi4wOTUsIDY0My4xNTg1N10sXG4gIFsxNjUxLjgwNzMsIDY1My43NjEyXSxcbiAgWzE2NTYuNDU1OCwgNjU3LjU1NjY0XSxcbiAgWzE2NTQuMTkwOCwgNjQ4Ljg3Nl0sXG4gIFsxNjQ4LjE3MjQsIDY0OC43OF0sXG4gIFsxNjQyLjM0NjksIDY1MC41OTgxXSxcbiAgWzE2MzYuNzczLCA2NTMuMDk1Ml0sXG4gIFsxNjM5LjU1ODgsIDY2NS43MDg3NF0sXG4gIFsxNjM3LjU4OTgsIDY3Mi4zNjgzXSxcbiAgWzE2MzAuMTAyMywgNjczLjAzMjk2XSxcbiAgWzE2MzIuNTUxMywgNjY1LjE5ODg1XSxcbiAgWzE2MzQuNzcwMywgNjU5LjE3ODJdLFxuICBbMTY0MS4wMzU5LCA2NTguNjUxNzNdLFxuICBbMTY0Ni4wMTI3LCA2NTUuNDgxMTRdLFxuICBbMTY0NS44MzMxLCA2NjMuMzk0Nl0sXG4gIFsxNjUwLjM0NDgsIDY1OS42NDQ5XSxcbiAgWzE2NTQuODM1NywgNjYzLjQzMzE3XSxcbiAgWzE2NTEuMDUwOCwgNjY3Ljk2NzgzXSxcbiAgWzE2NDUuMDMyMSwgNjcwLjM4MzhdLFxuICBbMTYzNi45NTE4LCA2ODUuNjYwNV0sXG4gIFsxNjM1LjE0OTgsIDY5Mi43MjA0XSxcbiAgWzE2MjcuNTMsIDY5Mi4wNzAwN10sXG4gIFsxNjIxLjE2NjksIDY5Ny4wMjIyXSxcbiAgWzE2MTUuMDIwOCwgNjk4LjIxNzddLFxuICBbMTYwNS41MjU0LCA2OTUuMTcxMTRdLFxuICBbMTYxMC43MDIxLCA2OTMuMTI2Nl0sXG4gIFsxNjE1LjI4MzcsIDY5MC4wNzQ0Nl0sXG4gIFsxNjIxLjE2NDIsIDY5MC40MzY0Nl0sXG4gIFsxNjI0Ljg3NDgsIDY4NS4zNTgzNF0sXG4gIFsxNjMxLjEwNDEsIDY4Ni4yNjM3XSxcbiAgWzE2MzMuNjk4LCA2NzkuMzQxMl0sXG4gIFsxNjI3LjMzNzUsIDY3OS4zMTMyM10sXG4gIFsxNjIxLjE3NDYsIDY3OC42Mjk2NF0sXG4gIFsxNjE4LjE3NTMsIDY4NC4yNTMxXSxcbiAgWzE2MTEuNTU1MiwgNjgzLjUwOTRdLFxuICBbMTYwNy45MTcsIDY4Ny40Njg3NV0sXG4gIFsxNjA0LjA2MjEsIDY4Mi4wNzY0XSxcbiAgWzE1OTkuNzE3MywgNjc3LjE5ODU1XSxcbiAgWzE1OTguNjk4OSwgNjg2LjExODFdLFxuICBbMTYwMi42ODI2LCA2OTAuMTA1Nl0sXG4gIFsxNTk5Ljc0MzQsIDY5Ni4xMzA4Nl0sXG4gIFsxNTk1LjU1LCA2OTIuMTA2N10sXG4gIFsxNTkxLjI3NzMsIDY4Ny40MjI2XSxcbiAgWzE1ODguNjY4MiwgNjgwLjU0MV0sXG4gIFsxNTk0Ljk2MDIsIDY4MS44MDc4Nl0sXG4gIFsxNTkzLjA4MTQsIDY3NS44MzQ4NF0sXG4gIFsxNTg4LjE1NjksIDY3Mi4yOTMyXSxcbiAgWzE1ODMuNjA3LCA2NzUuNDAyMl0sXG4gIFsxNTc5LjU0NzYsIDY3MS4yMDU1XSxcbiAgWzE1ODQuMTc1MywgNjY3LjA5NjA3XSxcbiAgWzE1NzguMzk2OSwgNjY0LjkwMjQ3XSxcbiAgWzE1NzEuODIxOSwgNjY0LjMzNzE2XSxcbiAgWzE1NzMuNTk3NywgNjY5LjcwODc0XSxcbiAgWzE1NzQuODM3NiwgNjc1LjE2MjZdLFxuICBbMTU3OC4xMjYyLCA2NzkuMzY3ODZdLFxuICBbMTU4Mi44NDQyLCA2ODEuMjQ5NzZdLFxuICBbMTU4NC4yMTEzLCA2ODYuNzg4MV0sXG4gIFsxNTg2Ljk3OTYsIDY5Mi4zMDA5Nl0sXG4gIFsxNTgwLjQ5MDYsIDY5My40NjQzXSxcbiAgWzE1NzQuMTU5MywgNjk1LjIzNDI1XSxcbiAgWzE1ODUuNTU5MSwgNjk4LjY1MjA0XSxcbiAgWzE1OTEuMzk2NywgNjk2Ljc3OTVdLFxuICBbMTU5NS43Mjk2LCA3MDAuODc1NF0sXG4gIFsxNjAxLjM3NzMsIDcwMi4yODQ2N10sXG4gIFsxNTk3LjI5NDcsIDcwOC4zNjQxNF0sXG4gIFsxNTg1LjAxNzEsIDcwNS4xNjU5NV0sXG4gIFsxNTkxLjE0NiwgNzA0LjI4NTAzXSxcbiAgWzE1NzkuMzMwMSwgNzAwLjM5MzddLFxuICBbMTU2Ny4wOTI4LCA2OTguNDk0NV0sXG4gIFsxNTYwLjg3MjYsIDY5OS4wNTU0XSxcbiAgWzE1NTQuOTQ5MywgNjk4LjMzMjE1XSxcbiAgWzE1NTkuODc1OSwgNjkzLjMzMDFdLFxuICBbMTU2NS43MjI5LCA2OTIuMDAwMV0sXG4gIFsxNTcxLjYwNiwgNjg5LjgzMzg2XSxcbiAgWzE1NzcuNTY1MywgNjg3LjE1MTA2XSxcbiAgWzE1NzMuMDA3OSwgNjgyLjIzODhdLFxuICBbMTU2Ny43ODgyLCA2ODQuODI1OV0sXG4gIFsxNTYzLjk2MzcsIDY4MC43Njg3NF0sXG4gIFsxNTY5LjMzOTYsIDY3Ni43NTc5XSxcbiAgWzE1NjcuODE4MSwgNjY5Ljc2NzhdLFxuICBbMTU2My45MDUsIDY3NC4yNjQ0XSxcbiAgWzE1NTkuNDE2LCA2NzguMTI0NV0sXG4gIFsxNTYxLjY0MDksIDY4Ni4yOTYxXSxcbiAgWzE1NTAuNzIxNywgNjgyLjA0NTNdLFxuICBbMTU0OS41NDU3LCA2ODUuNDY3MDRdLFxuICBbMTU0NS4yNDQ2LCA2ODIuOTQyOV0sXG4gIFsxNTQ2LjI3MTIsIDY4Ny44OTI3Nl0sXG4gIFsxNTQ4LjI0NDksIDY5MS43MDddLFxuICBbMTU0OC42OTU4LCA2OTUuNzAyMV0sXG4gIFsxNTQ2LjcwODMsIDcwNS44MzE1NF0sXG4gIFsxNTQ0LjI2NzYsIDY5OC45MTYxNF0sXG4gIFsxNTQ5LjIwNTEsIDcwMC4zMzE2N10sXG4gIFsxNTUzLjc2NywgNjkzLjQwOTM2XSxcbiAgWzE1NTIuMjAyOSwgNjg4LjUyODQ0XSxcbiAgWzE1NTYuOTczLCA2ODkuMjA2Ml0sXG4gIFsxNTU2LjI2LCA2ODQuMjY4MjVdLFxuICBbMTU1NC45OTg1LCA2NzkuOTUwM10sXG4gIFsxNTU0LjAyNjcsIDY3NC45Njc5XSxcbiAgWzE1NTguMjc5MywgNjcxLjk5MjNdLFxuICBbMTU2Mi4wMjM3LCA2NjcuODA1M10sXG4gIFsxNTY1LjQ3OTcsIDY2My4yMTEwNl0sXG4gIFsxNTYwLjA3MTIsIDY2MC42MzgzN10sXG4gIFsxNTUzLjM4MjQsIDY2MS43NjA1Nl0sXG4gIFsxNTU2LjkwOTQsIDY2NS43MjY5XSxcbiAgWzE1NTIuOTI0MywgNjY4LjkyOTQ0XSxcbiAgWzE1NDguOTI1NCwgNjcyLjk1MTA1XSxcbiAgWzE1NDkuNjQ4NywgNjc3LjkyMDFdLFxuICBbMTU0NC45MTE0LCA2NzguMjYxNTRdLFxuICBbMTU0My43ODk4LCA2NzMuODEyMjZdLFxuICBbMTU0Ny45MzM4LCA2NjcuNjE5M10sXG4gIFsxNTQyLjY0NjcsIDY2OS40OTc3XSxcbiAgWzE1NDYuOTE4MywgNjYzLjE1Njg2XSxcbiAgWzE1NDguMDE3NiwgNjU4LjM0MDRdLFxuICBbMTU0NC4zMDEsIDY1NS40MjY5XSxcbiAgWzE1NDguNTg3NSwgNjUxLjY3NjRdLFxuICBbMTU0NS4wMTAzLCA2NDguMTE2MV0sXG4gIFsxNTQyLjAwOCwgNjQzLjI4Mjk2XSxcbiAgWzE1MzcuOTMwMiwgNjM5LjY4MTddLFxuICBbMTU0Mi44NTExLCA2MzAuNjUzNzVdLFxuICBbMTU0My4zMDU4LCA2MzcuNTI1NzZdLFxuICBbMTU0OS4xNjU4LCA2MzUuMjk4NjVdLFxuICBbMTU1Ni4wMTg2LCA2MzQuODY5NF0sXG4gIFsxNTUyLjcyOTIsIDYzMC4wNjc0XSxcbiAgWzE1NDcuNjIyOCwgNjI3LjUzMTNdLFxuICBbMTU0Mi43NzAxLCA2MjQuNTExMDVdLFxuICBbMTU0Ny45NTMsIDYyMS4wOTk1NV0sXG4gIFsxNTUyLjY5MjQsIDYyNC4yODY1XSxcbiAgWzE1NTcuMzQ1NiwgNjIxLjk5MjJdLFxuICBbMTU0NC4wNDEsIDYxOC40NTk5Nl0sXG4gIFsxNTM5LjU4NDEsIDYyMC4xODY5NV0sXG4gIFsxNTM1LjY0NTUsIDYxNC43MTldLFxuICBbMTUyNy45OTAyLCA2MTUuNzY0NDddLFxuICBbMTUzMS4xNjY5LCA2MTMuMjA1MV0sXG4gIFsxNTI5LjIwNzUsIDYwOC41MjY4Nl0sXG4gIFsxNTM5LjU5NzMsIDYxNC43NTM5XSxcbiAgWzE1MzcuMDQ3NCwgNjA4LjUyNTNdLFxuICBbMTUzOS43Nzg4LCA2MDQuNTExOF0sXG4gIFsxNTQ0LjgxMjMsIDYwNC4wMjg3XSxcbiAgWzE1NDQuNjk1OSwgNTk5LjI4MjE3XSxcbiAgWzE1NDQuODE4OCwgNTk0LjY2OTddLFxuICBbMTU0My4wNTQzLCA1OTAuMzk3MV0sXG4gIFsxNTQ3LjI3MywgNTg0LjEwNDg2XSxcbiAgWzE1NDEuMDQyNywgNTgxLjQ5MDA1XSxcbiAgWzE1NDQuNDY0OCwgNTgwLjQzOTddLFxuICBbMTU0OC4xNTc2LCA1ODAuNDc3M10sXG4gIFsxNTQzLjUwMzcsIDU4NS4xMzQ5NV0sXG4gIFsxNTQwLjEzOCwgNTg3LjI4NDddLFxuICBbMTU0Ny4yNTc3LCA1ODguMTMyMjZdLFxuICBbMTU0OC43NzI3LCA1OTIuMTM0OTVdLFxuICBbMTU1MC4yMzUyLCA1OTYuODkzOV0sXG4gIFsxNTUyLjE0MzMsIDU4OC4yNTUxXSxcbiAgWzE1NTEuMzE0NywgNTg0LjQyOF0sXG4gIFsxNTUzLjc1MjMsIDU5Mi41Njg2XSxcbiAgWzE1NTUuNzQ4MywgNTk2LjI4NDY3XSxcbiAgWzE1NTAuMTg2NSwgNjAyLjMyMDA3XSxcbiAgWzE1NTUuNjI0NSwgNjAxLjA0NzFdLFxuICBbMTU1My4xNjUsIDYxMi41MzNdLFxuICBbMTU1NC41OTU2LCA2MDYuODgyNTddLFxuICBbMTU0OS41MDM0LCA2MDguMTU4XSxcbiAgWzE1NDUuMDU0NiwgNjA4LjcxMDZdLFxuICBbMTU0OC4yMjU2LCA2MTQuMTUwNl0sXG4gIFsxNTQzLjc4NjMsIDYxMy42MDU4M10sXG4gIFsxNTQwLjg2NDcsIDYwOS42ODYwNF0sXG4gIFsxNTMzLjcyMTQsIDYxMC4zOTQ5XSxcbiAgWzE1MzIuOTQzNCwgNjA1LjcyNzNdLFxuICBbMTUzNS40MDA2LCA2MDIuMDE1MTRdLFxuICBbMTUzNC43Mjc3LCA1OTYuOTM4MjNdLFxuICBbMTUzOS40NzgzLCA1OTkuNjIxMV0sXG4gIFsxNTM5LjkxODUsIDU5NC44MDU2Nl0sXG4gIFsxNTM3LjIyNTEsIDU5MS42MTI1NV0sXG4gIFsxNTMyLjYyNTUsIDU5MS44MjgzN10sXG4gIFsxNTI4LjI2MTcsIDU5Mi4zMjddLFxuICBbMTUyOS44NjQ0LCA1OTYuODY1MzZdLFxuICBbMTUzMC43NTU5LCA2MDEuMjk4Ml0sXG4gIFsxNTI3LjI5NCwgNjA0LjkwODE0XSxcbiAgWzE1MjUuOTA5MywgNjAwLjQ5MV0sXG4gIFsxNTI0Ljg3MTEsIDU5Ni4yMjE1Nl0sXG4gIFsxNTIyLjIxOCwgNTkyLjMzNDk2XSxcbiAgWzE1MTkuNjIzNywgNTk1LjY4OF0sXG4gIFsxNTIyLjYzOTksIDYwNC41MjUxNV0sXG4gIFsxNTIwLjg4MTEsIDYwMC4yMzczXSxcbiAgWzE1MTguMTUxOSwgNjA1Ljc5NjYzXSxcbiAgWzE1MDcuNTE2OCwgNjA2LjkyNjRdLFxuICBbMTUwOC45OTMyLCA2MTEuMjgzOTRdLFxuICBbMTUwNC43NzIyLCA2MTAuOTA4NDVdLFxuICBbMTUwMS4zNTU3LCA2MDkuNDQ2MTddLFxuICBbMTUwNS42OTIsIDYxNS4yNDEyXSxcbiAgWzE1MDQuODEzNSwgNjE5LjEzMDA3XSxcbiAgWzE1MTAuMjczNiwgNjE1LjQwMDNdLFxuICBbMTUxMi4yMjksIDYxOC41ODAxNF0sXG4gIFsxNTA4LjU3MywgNjE5Ljc4ODE1XSxcbiAgWzE1MDcuMTQxLCA2MjcuNDQ0Ml0sXG4gIFsxNTA5LjA3NzQsIDYyNC4zNTQ2XSxcbiAgWzE1MTIuMjQyNiwgNjIzLjAyMjddLFxuICBbMTUxMi4yOTA1LCA2MjguMDY2MV0sXG4gIFsxNTA4LjU4MzcsIDYzMC43ODA0Nl0sXG4gIFsxNTEyLjExNjMsIDYzMy4wNDk0NF0sXG4gIFsxNTE1Ljk1MDQsIDYzMi4xNjI2XSxcbiAgWzE1MTYuNjU5MiwgNjI4LjYxMThdLFxuICBbMTUxOS4yNTM5LCA2MjUuOTM1NV0sXG4gIFsxNTIxLjI4OTYsIDYyMy4wMV0sXG4gIFsxNTE1LjcyOSwgNjI0LjI4ODVdLFxuICBbMTUxNS41MjIsIDYxOS43M10sXG4gIFsxNTE4Ljc3MzksIDYyMC4xNTc2XSxcbiAgWzE1MjIuNjQ3MywgNjE5LjEwNTk2XSxcbiAgWzE1MTkuNTk4MywgNjE1LjM2MzhdLFxuICBbMTUxNS42MjMsIDYxNS40MDcyXSxcbiAgWzE1MTMuMzA4NywgNjEyLjA3NzE1XSxcbiAgWzE1MTIuODI5MSwgNjA3Ljc0MDFdLFxuICBbMTUxMi4wNTE2LCA2MDIuNTIyN10sXG4gIFsxNTA3LjU2MywgNjAxLjI3MTg1XSxcbiAgWzE1MDMuMzM0OCwgNjA0LjYxNjMzXSxcbiAgWzE0OTkuMjIwOCwgNjAxLjA3ODg2XSxcbiAgWzE0OTYuMzM3MywgNTk2LjkyNDQ0XSxcbiAgWzE0OTMuMTk4NywgNjAwLjQyNzVdLFxuICBbMTQ5MC4xMjAyLCA2MDMuNzc5MV0sXG4gIFsxNDg3Ljg4MDcsIDU5OS41ODY0XSxcbiAgWzE0ODMuMjE5NywgNjAxLjM2NDJdLFxuICBbMTQ4MC41MDY4LCA1OTguOTE4MTVdLFxuICBbMTQ3Ni45ODg0LCA1OTkuNTA4MDZdLFxuICBbMTQ3NS4yNDU1LCA2MDIuMzgzOF0sXG4gIFsxNDc1LjYwOTksIDYwNi4yNTAxXSxcbiAgWzE0NzguMzAyNSwgNjA4Ljc5NDRdLFxuICBbMTQ3Ni4wOTEzLCA2MTIuMDM0NF0sXG4gIFsxNDczLjIyOTIsIDYwOS41MDAxXSxcbiAgWzE0NjkuOTExNiwgNjA3Ljk4MTQ1XSxcbiAgWzE0NzEuOTMxMiwgNjA0LjgwNTY2XSxcbiAgWzE0NzAuOTA5MywgNjAxLjAyODFdLFxuICBbMTQ2Ny43NDgsIDYwMy42NjU1XSxcbiAgWzE0NjUuODkwMSwgNjA3LjAzODVdLFxuICBbMTQ2MS45NjcyLCA2MDYuMjI0M10sXG4gIFsxNDU5LjI1NywgNjA5LjYzNTI1XSxcbiAgWzE0NTYuMzQ5MSwgNjEyLjE5NDZdLFxuICBbMTQ1Mi43NDMyLCA2MTAuNTk5XSxcbiAgWzE0NTMuOTY1NSwgNjA2Ljg5MjMzXSxcbiAgWzE0NTcuNjY3NywgNjA1LjcwOTddLFxuICBbMTQ1OC45MDcyLCA2MDEuNDc0MzddLFxuICBbMTQ2My4xNjExLCA2MDIuMjQ5MjddLFxuICBbMTQ2Ni41MDk0LCA1OTkuODU4MV0sXG4gIFsxNDczLjIzMDYsIDU5OC4xNjU1XSxcbiAgWzE0NzAuMTg4LCA1OTAuNDc3OTddLFxuICBbMTQ3MC4xNjMxLCA1OTMuNzczNl0sXG4gIFsxNDYzLjEyMzgsIDU4OC43NDM4XSxcbiAgWzE0NjkuMzg4LCA1ODcuNjM0NV0sXG4gIFsxNDY5LjQ5NTQsIDU4My45MzA2Nl0sXG4gIFsxNDczLjM5NjcsIDU4Ni42MjYzNF0sXG4gIFsxNDc3LjI2NzMsIDU4Ny4zMzAzXSxcbiAgWzE0NzMuMDA1OSwgNTgyLjM0MDQ1XSxcbiAgWzE0NzYuOTA2MiwgNTgyLjM0MTQzXSxcbiAgWzE0ODAuNTQ1MywgNTg1LjQwMzU2XSxcbiAgWzE0ODQuMDQ3LCA1ODIuNzYxNl0sXG4gIFsxNDg2LjMxNzYsIDU3OC42NDM0M10sXG4gIFsxNDgwLjg0NjcsIDU4MC4wODI3Nl0sXG4gIFsxNDYwLjQyMTUsIDU4NS42NTg5NF0sXG4gIFsxNDY0LjY3MjksIDU4My41OTU1XSxcbiAgWzE0NjYuMTQwNCwgNTg2LjU2NDhdLFxuICBbMTQ2Ni40NjY2LCA1OTEuMTEwOTZdLFxuICBbMTQ2Ni4zNTc5LCA1OTUuMTk2OV0sXG4gIFsxNDY5LjM1OCwgNTk3LjMxMDU1XSxcbiAgWzE0NzMuNzA2LCA1OTQuNTYyODddLFxuICBbMTQ3Ny4xMDExLCA1OTUuNjgyNF0sXG4gIFsxNDczLjc5OTEsIDU5MC42OTJdLFxuICBbMTQ3Ny42OTc2LCA1OTEuMzU0OV0sXG4gIFsxNDgwLjkxNjUsIDU5NC42NzUyXSxcbiAgWzE0ODIuMDMzMiwgNTkwLjc4Nzk2XSxcbiAgWzE0ODQuMzU5NiwgNTg3LjY2MDRdLFxuICBbMTQ4OC41NzQ4LCA1ODguODEzN10sXG4gIFsxNDg2Ljg4MDksIDU5Mi45MDUxNV0sXG4gIFsxNDg0LjY1MDksIDU5Ni42MzVdLFxuICBbMTQ5MS4xMDM4LCA1OTUuODA2NDZdLFxuICBbMTQ5Mi4yNzMzLCA1OTEuMjMzOF0sXG4gIFsxNDk3Ljc0MTMsIDU4Ni4zNTgzXSxcbiAgWzE1MDEuNTQxLCA1ODkuMDE3NV0sXG4gIFsxNDk2LjY0NjIsIDU5MS44MTM3XSxcbiAgWzE1MDAuOTAwOCwgNTk0LjUxMDRdLFxuICBbMTUwMS4xOTk3LCA1ODEuNzA2NjddLFxuICBbMTQ5Mi45MjY5LCA1ODYuMzAyNl0sXG4gIFsxNDg3LjkwNDMsIDU4NC40NzM1XSxcbiAgWzE0OTAuNjI1NywgNTgxLjI1NDc2XSxcbiAgWzE0OTIuMDUwNCwgNTc2LjY0MzFdLFxuICBbMTQ5NS44MzQyLCA1ODAuOTU1OF0sXG4gIFsxNDk3LjkwNTMsIDU3NS45OTExNV0sXG4gIFsxNTAxLjMxMTgsIDU2Ny44MjU0NF0sXG4gIFsxNTA2LjIyNjYsIDU2OC40Mzc0XSxcbiAgWzE1MDcuMzYxNywgNTcyLjk1ODFdLFxuICBbMTUwOS45NDM0LCA1NzYuNjk3NF0sXG4gIFsxNTEzLjk2ODgsIDU3My45NzEzXSxcbiAgWzE1MTkuNTY5MywgNTcyLjI5MDFdLFxuICBbMTUyMi44MDQ3LCA1NzUuMTY4OV0sXG4gIFsxNTE5Ljg4ODEsIDU2OC4wMzA0XSxcbiAgWzE1MjIuMjU0NiwgNTY0Ljc0ODJdLFxuICBbMTUyMS4yNTQ1LCA1NjAuNDgzNF0sXG4gIFsxNTI2LjA2MDIsIDU1Ny45Njc1XSxcbiAgWzE1MjUuMDU5MiwgNTYxLjY1XSxcbiAgWzE1MjkuMjI3NywgNTYxLjI4MTNdLFxuICBbMTUzMi45NCwgNTYyLjc4NTAzXSxcbiAgWzE1MzcuMDc0NSwgNTY0LjA0NDU2XSxcbiAgWzE1NDAuNTI4MywgNTYyLjc2Mjk0XSxcbiAgWzE1NDQuMzIyOCwgNTY0LjAzNDldLFxuICBbMTU0MC4zMTcsIDU2Ny4zODY4NF0sXG4gIFsxNTM0LjczMDcsIDU2Ny4yMjVdLFxuICBbMTUzNy4xMjczLCA1NzAuNTY5OF0sXG4gIFsxNTM0LjY2MDIsIDU3NC42NDgzXSxcbiAgWzE1MzEuOTUzNCwgNTcwLjkyMV0sXG4gIFsxNTMwLjE3ODUsIDU2Ni43MzU2XSxcbiAgWzE1MjYuNTUyNSwgNTY1LjU0M10sXG4gIFsxNTIzLjg4MDIsIDU2OS4yNjQ2XSxcbiAgWzE1MjYuOTg4MywgNTcxLjM2NDRdLFxuICBbMTUyOS4yMDA0LCA1NzQuODU2NTddLFxuICBbMTUzMS4xMTc3LCA1NzguMzI2OTddLFxuICBbMTUzNC44NjcyLCA1NzkuMTY3NF0sXG4gIFsxNTM4LjM1NjQsIDU3OC4yNDkyN10sXG4gIFsxNTQyLjEyMTgsIDU3Ni41NDYxNF0sXG4gIFsxNTM5LjEwOTQsIDU3NC4wMDQ4XSxcbiAgWzE1NDIuMjQsIDU3MS4zNDI4XSxcbiAgWzE1NDUuNjM1OSwgNTcyLjk1Mjc2XSxcbiAgWzE1NDUuOTAzNiwgNTc2LjcyNzldLFxuICBbMTU0OS41NzA0LCA1NzYuMTgwOV0sXG4gIFsxNTUyLjU3NSwgNTczLjI2NDNdLFxuICBbMTU1NC43ODY1LCA1NjkuOTM5OV0sXG4gIFsxNTU4Ljc1MDEsIDU2NS44OTUxXSxcbiAgWzE1NjEuOTU0LCA1NjcuNTE3Nl0sXG4gIFsxNTY0LjMwOTEsIDU2NC41ODg3NV0sXG4gIFsxNTY3LjMwNywgNTYyLjU4NzddLFxuICBbMTU2OC43Mzk5LCA1NTcuOTg2NDVdLFxuICBbMTU2NC40NDU0LCA1NTkuNjI0NzZdLFxuICBbMTU2MC4xNDc4LCA1NTguNTEzN10sXG4gIFsxNTYwLjUyMDEsIDU1Mi4xNTIzNF0sXG4gIFsxNTU4Ljk5MzksIDU0OC4wNjA4XSxcbiAgWzE1NTYuMTQ5MywgNTUxLjM0OTNdLFxuICBbMTU1OC4xMjE4LCA1NTUuMjAzNzRdLFxuICBbMTU1NS4yOTkxLCA1NTguMjMzM10sXG4gIFsxNTYwLjk3MzEsIDU2Mi41NDI3XSxcbiAgWzE1NTYuNzE1MywgNTYyLjEzMTg0XSxcbiAgWzE1NTEuOTM2NSwgNTY0LjY0OTldLFxuICBbMTU1MS40MjI2LCA1NjguNjIwOF0sXG4gIFsxNTQ5LjQzMjQsIDU3Mi4zMjk2XSxcbiAgWzE1NDcuNzk0LCA1NjkuMTYwOV0sXG4gIFsxNTQ0LjY0MjEsIDU2Ny44NTM2XSxcbiAgWzE1NDguMjY3OCwgNTY0Ljc5ODE2XSxcbiAgWzE1NDguMDE3MiwgNTYwLjY1M10sXG4gIFsxNTQzLjg2MzMsIDU2MC4wNTgzNV0sXG4gIFsxNTQ1LjU3NjcsIDU1Ni41ODIwM10sXG4gIFsxNTQ4LjQ4MDUsIDU1My4zOTk0XSxcbiAgWzE1NDkuMzA1NCwgNTQ4LjQ0MjVdLFxuICBbMTU0Ni44OTA0LCA1NDQuOTY5MzZdLFxuICBbMTU1MS4xMzU0LCA1NDQuMzc5OTRdLFxuICBbMTU2MC4wMTUsIDU0NC40MjU5XSxcbiAgWzE1NTUuNTUxMywgNTQzLjM4OTVdLFxuICBbMTU1MS40MTgsIDUzOS44MTY4M10sXG4gIFsxNTU1LjQ4MTgsIDUzOC43ODczXSxcbiAgWzE1NTkuMjMxNiwgNTQwLjMzOF0sXG4gIFsxNTU4LjExMDEsIDUzNS4zNjMzXSxcbiAgWzE1NjEuODAxOCwgNTMzLjc3OTA1XSxcbiAgWzE1NTUuMTAzNiwgNTMxLjA1NjddLFxuICBbMTU1Mi45NjU3LCA1MzUuMjc5NTRdLFxuICBbMTU0Ny42NzE0LCA1MzUuNDYzODddLFxuICBbMTU1OS4xNTA0LCA1MzAuNTUyODZdLFxuICBbMTU1Ni4xNDU1LCA1MjYuMjUzNjZdLFxuICBbMTU1NS41Nzg2LCA1MjEuNjU0MDVdLFxuICBbMTU1MS40Nzk1LCA1MjMuMDc5ODNdLFxuICBbMTU0OC42MTgyLCA1MjAuMzAzOF0sXG4gIFsxNTQ1LjAyOSwgNTE4Ljc5NTA0XSxcbiAgWzE1NDkuMTQ3MiwgNTE1Ljg4MTg0XSxcbiAgWzE1NDUuMjIxMiwgNTE0LjQ2OTZdLFxuICBbMTU0Mi43NTE1LCA1MTEuNzI3OV0sXG4gIFsxNTM5Ljg2NzcsIDUwOC43OTAzNF0sXG4gIFsxNTM1Ljk1NzMsIDUwNy41NzA5XSxcbiAgWzE1MzMuODAxMywgNTA0LjA3MDEzXSxcbiAgWzE1MzcuODk4LCA1MDAuODk2MjRdLFxuICBbMTUzOS42MDM4LCA1MTQuMTk2OV0sXG4gIFsxNTQxLjM3MTUsIDUxNi44NTAzNF0sXG4gIFsxNTQwLjU2OTMsIDUyMC4xMzEyXSxcbiAgWzE1MzguMDM2NiwgNTIyLjY4NTg1XSxcbiAgWzE1MzcuOTk2MywgNTI2LjcyNjFdLFxuICBbMTUzNi42MDI1LCA1MzAuNjY1ODNdLFxuICBbMTUzMS4yOTYxLCA1MzMuMjE1MTVdLFxuICBbMTUzMS4xMzIyLCA1MjguMzgwMV0sXG4gIFsxNTI4Ljc3ODYsIDUyMy43MDE3XSxcbiAgWzE1MjAuMTUzOSwgNTI4LjM2MzM0XSxcbiAgWzE1MjUuNDg5NywgNTMyLjAxNjhdLFxuICBbMTUyNS4xODI3LCA1MjcuMDkyM10sXG4gIFsxNTIzLjQ3NzksIDUyMi4xMDA5NV0sXG4gIFsxNTI2LjMyODEsIDUxNy40MzAzXSxcbiAgWzE1MjkuMDMwNSwgNTEzLjQzMzk2XSxcbiAgWzE1MzIuODY0MywgNTE1Ljc4ODhdLFxuICBbMTUzNi4zNTA3LCA1MTguNDQ3MV0sXG4gIFsxNTMxLjM1OTEsIDUxOS44MjQ3XSxcbiAgWzE1MzMuODcxMywgNTI0LjA3MDQzXSxcbiAgWzE1MzYuNDMyMSwgNTEyLjkyMzFdLFxuICBbMTUzMi44NTY5LCA1MTAuNzcwOF0sXG4gIFsxNTMwLjMxLCA1MDcuNTQ2MjNdLFxuICBbMTUwNy43Nzc2LCA1MTEuNzM0MV0sXG4gIFsxNTA5LjAzOTEsIDUwNC41MDYzXSxcbiAgWzE1MTQuNjIxNSwgNTAxLjgzNTgyXSxcbiAgWzE1MTguMDU2NCwgNDk3Ljc3MTM2XSxcbiAgWzE1MTEuMzExNSwgNDk3LjE3ODNdLFxuICBbMTUwMC4wMTk1LCA0OTcuMzM2OF0sXG4gIFsxNDk1LjQ3NjEsIDQ5My40Nzc2M10sXG4gIFsxNDk3LjgyMjUsIDQ4Ny40NjEyN10sXG4gIFsxNTAwLjc2NTEsIDQ4Mi43Mjk3NF0sXG4gIFsxNDkxLjk4NSwgNDg3Ljg5MTQyXSxcbiAgWzE0ODYuODI3MywgNDg5LjcyMTUzXSxcbiAgWzE0ODIuMjI3OCwgNDg2LjgxOTE1XSxcbiAgWzE0ODEuODczMywgNDkxLjkyOTI2XSxcbiAgWzE0NzcuNDcyLCA0ODkuOTM2NzddLFxuICBbMTQ3My42Mjk5LCA0ODguMTg3XSxcbiAgWzE0NzIuMzE3MywgNDkyLjc4MzVdLFxuICBbMTQ2OC4yODQ5LCA0OTYuMDA3NTddLFxuICBbMTQ3Mi40Mzg3LCA0OTkuNDQ0OTJdLFxuICBbMTQ3Ny4zMjY0LCA0OTYuMDZdLFxuICBbMTQ4My43ODksIDUwOC4zODM4NV0sXG4gIFsxNDg4LjA5OTYsIDUxMi42MjIyNV0sXG4gIFsxNDg1Ljk3OTIsIDUyNS45NjA3NV0sXG4gIFsxNDgzLjIzMDUsIDUzMi42NzE5NF0sXG4gIFsxNDc1LjM1MDEsIDUzMy44MzczXSxcbiAgWzE0NjcuNTI5NSwgNTM2LjA1MDY2XSxcbiAgWzE0NTkuMTU4NywgNTMxLjg3MjddLFxuICBbMTQ2NC4zOTMzLCA1MjcuNzE0M10sXG4gIFsxNDcxLjEyMTEsIDUyNi41NTU4NV0sXG4gIFsxNDc3Ljk1NDEsIDUyNC41MTg1NV0sXG4gIFsxNDg2LjE0NjEsIDUxOS41MTQ1XSxcbiAgWzE0OTMuMzcwMiwgNTIzLjg0MDldLFxuICBbMTUwMi4zMTc2LCA1MTMuMjg4MTVdLFxuICBbMTQ5Ni40NDA5LCA1MDkuODkzMDddLFxuICBbMTQ5MC44OTcyLCA1MDYuNDQ4NDNdLFxuICBbMTUwMi4xNzc1LCA1MDUuODY0OF0sXG4gIFsxNTA1LjI1MzQsIDQ5OS4zNzEzXSxcbiAgWzE1MTUuODk1OSwgNDkyLjA0MzA2XSxcbiAgWzE1MjEuMDA5NCwgNDkzLjQwNzddLFxuICBbMTUyNC4xNTc2LCA0OTYuODM2OV0sXG4gIFsxNTIzLjk1MjEsIDUwMS4xNjIwNV0sXG4gIFsxNTI3LjQ5MjEsIDUwNC42MTMyNV0sXG4gIFsxNTMwLjAwNDUsIDUwMS4yOTY4NF0sXG4gIFsxNTI4LjYzMTYsIDQ5Ny4zNzQ4Ml0sXG4gIFsxNTM0LjA0OTgsIDQ5OS42NF0sXG4gIFsxNTMzLjMwMzEsIDQ5NS42MzQyOF0sXG4gIFsxNTMwLjE4NzUsIDQ5Mi45NTc0Nl0sXG4gIFsxNTI1Ljk0ODIsIDQ5Mi42OTA0M10sXG4gIFsxNTI3LjUxODIsIDQ4OC43MjA1NV0sXG4gIFsxNTIyLjE0MTIsIDQ4OS4yOTQzXSxcbiAgWzE1MjMuNjY4NSwgNDg1LjYwOTQ3XSxcbiAgWzE1MjcuMjY4OSwgNDgzLjcwMTQyXSxcbiAgWzE1MjguODI2MiwgNDgwLjAyNDVdLFxuICBbMTUzMi42NTQsIDQ3OC43MzIxMl0sXG4gIFsxNTMyLjY1NjQsIDQ3NC42MDIwNV0sXG4gIFsxNTM1Ljc0NzgsIDQ3MS45NTQ5M10sXG4gIFsxNTMzLjE1ODMsIDQ2OC40ODg0Nl0sXG4gIFsxNTMwLjM0MDUsIDQ3MS4xNTIzNF0sXG4gIFsxNTI4LjMyMDEsIDQ3NS4zMDM2NV0sXG4gIFsxNTI1LjAzNTIsIDQ3OC4zNTI3Ml0sXG4gIFsxNTIyLjI2MSwgNDgxLjY4OTE4XSxcbiAgWzE1MDkuNDIxOSwgNDc5LjQxNDE4XSxcbiAgWzE1MDQuOTE5MiwgNDc4LjM0NTY0XSxcbiAgWzE1MTAuMTE2NSwgNDczLjU3MTg3XSxcbiAgWzE1MTEuNjU0OCwgNDY4LjExODldLFxuICBbMTUwNi44NDIsIDQ2OC4zMzgyXSxcbiAgWzE1MDYuNTAwMiwgNDYzLjc4MzA1XSxcbiAgWzE1MTAuMzUsIDQ2Mi4yMjg1OF0sXG4gIFsxNTE0LjQyNTksIDQ2My40NTMxXSxcbiAgWzE1MTEuNjM0NSwgNDU0LjcyODM2XSxcbiAgWzE1MTMuOTU5NywgNDU4LjcwNzM0XSxcbiAgWzE1MTcuMzM1MywgNDU2LjU0NTNdLFxuICBbMTUxOC44NjE1LCA0NjIuMTcyMl0sXG4gIFsxNTE2LjU3MTMsIDQ2Ny40OTAzNl0sXG4gIFsxNTE2LjM4MjMsIDQ3Mi43NTk0Nl0sXG4gIFsxNTIzLjIyMTQsIDQ3NC4yMzA2OF0sXG4gIFsxNTI1Ljg3NTcsIDQ3MS4xMzc5NF0sXG4gIFsxNTI3LjU2MjUsIDQ2Ny41OTQ5XSxcbiAgWzE1MzAuOTQwOSwgNDY1LjMzNjRdLFxuICBbMTUyNy42MzQsIDQ2My4zOTg1Nl0sXG4gIFsxNTIzLjYwOTUsIDQ2NS4yMDI2XSxcbiAgWzE1MjMuNTU0MSwgNDYwLjY0MzEzXSxcbiAgWzE1MjEuMzY3NywgNDU2Ljk0Njg3XSxcbiAgWzE1MTkuMjk2MywgNDUyLjUzNzRdLFxuICBbMTUxNC44OTIsIDQ1Mi45ODQyXSxcbiAgWzE1MTkuMzI2MiwgNDQ4LjE0MDE0XSxcbiAgWzE1MTkuMjQ2MiwgNDQ0LjQ5MDc4XSxcbiAgWzE1MTcuODA4OCwgNDQwLjgxODQyXSxcbiAgWzE1MTUuNTAxMiwgNDM3LjczOTcyXSxcbiAgWzE1MTkuMjYwNiwgNDM2LjM4NjJdLFxuICBbMTUyMi41NzU2LCA0MzguNjY5MjVdLFxuICBbMTUyMi4xNTU1LCA0NDIuMjE0NTRdLFxuICBbMTUyNi4zNDU3LCA0NDMuMDk3MTRdLFxuICBbMTUyNi41MDQzLCA0MzcuNTM1ODNdLFxuICBbMTUzMC45NTEzLCA0MzYuNzQzMzhdLFxuICBbMTUzNS4xNjYzLCA0MzUuMzI4Ml0sXG4gIFsxNTM4LjIxNzcsIDQzMS44MTIyM10sXG4gIFsxNTM0LjAyMywgNDI5Ljc5MTc1XSxcbiAgWzE1MzAuOTI5NCwgNDMyLjQ4MjczXSxcbiAgWzE1MjIuODA4MywgNDMzLjk5MzddLFxuICBbMTUyNi42MDEzLCA0MzIuODgyMDJdLFxuICBbMTUyNy44ODY2LCA0MjguOTM5OTRdLFxuICBbMTUzMC41MiwgNDI2LjAxODI1XSxcbiAgWzE1MzQuMjk3NywgNDI1LjA5NDldLFxuICBbMTUzNy43MDkyLCA0MjIuNjY0NV0sXG4gIFsxNTM4Ljg4NzcsIDQxOC42NTUwM10sXG4gIFsxNTM0Ljg1NzQsIDQxNi41OTU5XSxcbiAgWzE1MzcuMTc3NiwgNDEzLjYwNzAzXSxcbiAgWzE1MzIuOTE5LCA0MTIuMzQ4MDJdLFxuICBbMTUyOC44ODEyLCA0MTIuNzEzNjhdLFxuICBbMTUyNS4xNDgyLCA0MTIuODIzN10sXG4gIFsxNTIzLjc1OCwgNDE2LjM4NjY2XSxcbiAgWzE1MjAuMTkwNCwgNDE3LjczMDJdLFxuICBbMTUxNy4zNzM4LCA0MjAuNTY4MzZdLFxuICBbMTUxOS4zNjU1LCA0MjQuOTgzMjJdLFxuICBbMTUyMi4wNiwgNDIyLjMzMDc4XSxcbiAgWzE1MjUuNDE4LCA0MjAuMzU3MDNdLFxuICBbMTUyNy43OTU5LCA0MTcuMzMxODVdLFxuICBbMTUzMS4wNTUyLCA0MTYuMzkyMDNdLFxuICBbMTUzMy42NDY3LCA0MjAuNDE4NTVdLFxuICBbMTUyOS42NzQsIDQyMS43MzQ1Nl0sXG4gIFsxNTI1LjY4NTgsIDQyNC45OTcxNl0sXG4gIFsxNTIyLjcxNSwgNDI4Ljc2NTMyXSxcbiAgWzE1MTkuMTMwMSwgNDMxLjk3OTk4XSxcbiAgWzE1MTcuNTgyOSwgNDI4LjY2MjhdLFxuICBbMTUxNC42NjE0LCA0MjYuMDU4NF0sXG4gIFsxNTEzLjU4MDMsIDQyMi40NjM1XSxcbiAgWzE1MDkuMzgxLCA0MjAuNjkxNF0sXG4gIFsxNTA5Ljg1NjcsIDQyNi43OTYwMl0sXG4gIFsxNTA4Ljk0NDYsIDQzMS44NDg2XSxcbiAgWzE1MTMuMzg4OCwgNDMwLjU5NjRdLFxuICBbMTUxNS4yNjQyLCA0MzQuMDQ2Ml0sXG4gIFsxNTExLjAxMzIsIDQzNS45NTg0NF0sXG4gIFsxNTEyLjg2NzcsIDQzOS44ODIyXSxcbiAgWzE1MTIuODM3OSwgNDQzLjE3NjFdLFxuICBbMTUxNS43NTEyLCA0NDUuMDY4NDhdLFxuICBbMTUxNS43NzQ0LCA0NDkuMzM4MV0sXG4gIFsxNTIzLjI4NzgsIDQ0Ni4xMzg5XSxcbiAgWzE1MjIuNzIyNSwgNDQ5Ljk2Ml0sXG4gIFsxNTI0LjUyMzcsIDQ1Mi44ODcyXSxcbiAgWzE1MjguNzg1MywgNDUyLjc4NDczXSxcbiAgWzE1MjYuMTAzOCwgNDU2LjIwNjM2XSxcbiAgWzE1MjkuODkzOCwgNDU3LjI3ODYzXSxcbiAgWzE1MjcuMDA5MiwgNDQ4LjIxMDU3XSxcbiAgWzE1MzAuNjc2NSwgNDQ5LjI3NzA0XSxcbiAgWzE1MzYuMTA3MywgNDQzLjgxMjhdLFxuICBbMTU0MC44MjcxLCA0NDQuMzAxN10sXG4gIFsxNTQ0Ljk0NDUsIDQ0My43ODUzN10sXG4gIFsxNTQ1LjM2ODQsIDQ0MC4xNTUwM10sXG4gIFsxNTQ0LjYyMDEsIDQzNi40MDE1XSxcbiAgWzE1NDUuOTU0MywgNDMxLjMyMDUzXSxcbiAgWzE1NTMuMDI2LCA0MjguMjU0MjddLFxuICBbMTU1My45NzcsIDQzMi4yMzA0NF0sXG4gIFsxNTUwLjUyNzMsIDQzMS41MThdLFxuICBbMTU0OC4zMzk2LCA0MzQuMjkxXSxcbiAgWzE1NDkuMTg0OSwgNDM3LjMxMTldLFxuICBbMTU0OC44OTcxLCA0NDAuMzE1MjhdLFxuICBbMTU0OS4zMDY2LCA0NDMuMzU0Nl0sXG4gIFsxNTQ3Ljg2OTgsIDQ0Ni43NTI2Ml0sXG4gIFsxNTQ0LjM3MzMsIDQ0Ny41NDE4N10sXG4gIFsxNTQxLjA3NDcsIDQ0OC41ODMyNV0sXG4gIFsxNTM4LjAyMiwgNDQ3LjA1NzddLFxuICBbMTUzNi44ODAxLCA0NTAuNTQwNF0sXG4gIFsxNTM3LjYyNiwgNDU0LjExOTI2XSxcbiAgWzE1MzQuODc5MywgNDU1LjQzNzg0XSxcbiAgWzE1NDAuMzI3OSwgNDUyLjE3NDI2XSxcbiAgWzE1NDEuMjA1OCwgNDU1Ljg0NzZdLFxuICBbMTU0My41NjU5LCA0NTEuNDAxN10sXG4gIFsxNTQ0Ljc5MzIsIDQ1NC41MjMyXSxcbiAgWzE1NDYuODcyLCA0NTAuODE1MjVdLFxuICBbMTU0Ni4wMDEsIDQ1Ny41NTk3XSxcbiAgWzE1NDMuMzk0NSwgNDU5LjA4MzJdLFxuICBbMTU0OC42NTU2LCA0NTguNDU5OTNdLFxuICBbMTU1MC4wOTUsIDQ2MS4zMzc0XSxcbiAgWzE1NDYuMzQwMSwgNDYyLjA1MDc4XSxcbiAgWzE1NDMuMDk3OCwgNDYzLjMyOTM1XSxcbiAgWzE1MzcuNjE0MSwgNDU3LjgzNjA2XSxcbiAgWzE1NDAuMzcyMywgNDYwLjEwMDUyXSxcbiAgWzE1MzcuMjEyNiwgNDYxLjYyODA1XSxcbiAgWzE1MzkuNjA3NSwgNDY0LjUyMTg1XSxcbiAgWzE1NDIuMzg5MiwgNDY3LjYzODldLFxuICBbMTU0NS45NzgzLCA0NjYuOTA5OTddLFxuICBbMTU0OC45NDU2LCA0NjQuOTYwOV0sXG4gIFsxNTUwLjA2NzEsIDQ2OS4zNjg2Ml0sXG4gIFsxNTQ2LjgzMzYsIDQ3MC45ODUzXSxcbiAgWzE1NDMuNTYxNSwgNDcyLjE2NTgzXSxcbiAgWzE1MzkuOTU3NSwgNDcwLjgxMDRdLFxuICBbMTUzNy43MTI2LCA0NjguMDc3NF0sXG4gIFsxNTM1LjUzNzQsIDQ2NS4zNTkyNV0sXG4gIFsxNTMwLjgzNTcsIDQ2MS4wMTkxXSxcbiAgWzE1MjcuNTMyMiwgNDU5LjY1NDNdLFxuICBbMTUzMy43OTE5LCA0NjIuNTY1OTJdLFxuICBbMTUzMy45MzQxLCA0NTguOTAyMjhdLFxuICBbMTUzMS44NDI4LCA0NTUuMjAyMzNdLFxuICBbMTUzMy4zOTc1LCA0NTEuOTI1MjNdLFxuICBbMTUzNC4xMzI2LCA0NDcuNTRdLFxuICBbMTUzMC44ODEzLCA0NDQuOTEwMDNdLFxuICBbMTUyOS40MzEzLCA0NDAuNzg1MjVdLFxuICBbMTUzMy40NjQsIDQ0MC42MDI3NV0sXG4gIFsxNTM3LjQxMTYsIDQzOS44MzE5N10sXG4gIFsxNTQxLjUxMzksIDQ0MC4zOTUzMl0sXG4gIFsxNTM5Ljg1MjMsIDQzNi40MDA0NV0sXG4gIFsxNTQyLjI5OTYsIDQzMi45NzQxMl0sXG4gIFsxNTQyLjYyNCwgNDI4LjQ0OTldLFxuICBbMTUzOC40NzgxLCA0MjcuMjQ2NzddLFxuICBbMTU0Mi4xMTkxLCA0MjMuMTg4NDVdLFxuICBbMTU0Ny4zMTM0LCA0MjEuNjMzMDZdLFxuICBbMTU0NS43NzQ3LCA0MjUuNDY1ODJdLFxuICBbMTU0OC41MjE0LCA0MjguMjE0NTddLFxuICBbMTU1MC40NDczLCA0MjQuNzU1Ml0sXG4gIFsxNTUxLjc2MSwgNDIxLjA0MTVdLFxuICBbMTU1Mi42NTE1LCA0MTcuNjg2MjJdLFxuICBbMTU0Ny44NDUyLCA0MTcuNTA1ODNdLFxuICBbMTU0OC41NTQ2LCA0MTQuMDk0NjddLFxuICBbMTU0My43NTYzLCA0MTguNjY5OTJdLFxuICBbMTU0MS40OTgyLCA0MTQuOTQ0NF0sXG4gIFsxNTQ0LjgxMzYsIDQxMi4zMDgwN10sXG4gIFsxNTQ3LjExNzcsIDQwNy41OTAxOF0sXG4gIFsxNTM5LjgwODcsIDQxMC41ODE4NV0sXG4gIFsxNTM1LjQyODcsIDQwOC45MjM2NV0sXG4gIFsxNTMwLjc4NSwgNDA4LjU5NTY3XSxcbiAgWzE1MjYuODk4MywgNDA4Ljk4OTU2XSxcbiAgWzE1MjUuNDY0OCwgNDA1LjI2MDM4XSxcbiAgWzE1MjQuMjMwMiwgNDAxLjM0NDU3XSxcbiAgWzE1MjUuNjU0OCwgMzk3LjgwMzU2XSxcbiAgWzE1MjIuMjg3NywgMzk1LjY3OTI2XSxcbiAgWzE1MjIuOTI3LCAzOTEuMjU3Ml0sXG4gIFsxNTI0LjE2OTMsIDM4Ni4zODU0NF0sXG4gIFsxNTI2LjgxOTMsIDM4Mi40NzE2NV0sXG4gIFsxNTMwLjQ0NzUsIDM3OC43NDkxNV0sXG4gIFsxNTM1LjQyNjEsIDM4MS4yOTM5NV0sXG4gIFsxNTMxLjM0NTcsIDM4NS4zMzI2XSxcbiAgWzE1MjcuOTU2MiwgMzg5LjEzMDddLFxuICBbMTUzMS45Mjc3LCAzOTEuMjAzMDZdLFxuICBbMTUzNi4yMDIzLCAzODYuNjcxXSxcbiAgWzE1MzUuMDY0MiwgMzc1LjI1MDM0XSxcbiAgWzE1NDAuMjgzLCAzNzguMDMwMV0sXG4gIFsxNTQ1LjUwMTcsIDM3NS40MzA0XSxcbiAgWzE1NDEuMDIzLCAzNzIuNjY1MjJdLFxuICBbMTU0NS4wMzI2LCAzNjguOTIwMjZdLFxuICBbMTU0OC44NzMsIDM2NS42MjU4XSxcbiAgWzE1NTMuNzMzNCwgMzY0Ljc0MTgyXSxcbiAgWzE1NTcuOTcwMywgMzY2LjAxODg2XSxcbiAgWzE1NjIuMjgzOSwgMzY3LjE0Mzc3XSxcbiAgWzE1NjIuODMwNiwgMzczLjAwOTVdLFxuICBbMTU1OC40MDY3LCAzNzEuNTMwOThdLFxuICBbMTU1My41MTU5LCAzNzAuMzEwMTVdLFxuICBbMTU0OS44Njg3LCAzNzMuMTAxMDRdLFxuICBbMTU1NC40MzA0LCAzNzYuMzYxMThdLFxuICBbMTU0OS42NDgsIDM3OC45NzAxXSxcbiAgWzE1NDUuMTg3LCAzODEuMzU2MjZdLFxuICBbMTU0MC41NTc5LCAzODMuNTAzNDhdLFxuICBbMTU0MS4yMDA2LCAzODguNDk1OTddLFxuICBbMTU0NS44NDk5LCAzODYuODkxMV0sXG4gIFsxNTUwLjQ2ODMsIDM4NC4zNjUxN10sXG4gIFsxNTU0LjM2MjcsIDM4MS41NjE0Nl0sXG4gIFsxNTU3Ljk5MzcsIDM4NC4zNTQ3NF0sXG4gIFsxNTU5LjgxNSwgMzgwLjU0NDk4XSxcbiAgWzE1NTguODk1MSwgMzc2LjQxMjNdLFxuICBbMTU2My4wMjMsIDM3Ny42MzAyXSxcbiAgWzE1NjYuNzI4OCwgMzc2LjE5OTY4XSxcbiAgWzE1NjkuNjEyMywgMzc4LjY5NzQ4XSxcbiAgWzE1NjkuNjQ3MSwgMzgyLjMyNDIyXSxcbiAgWzE1NzMuMTA5NCwgMzc5LjQwNDQ4XSxcbiAgWzE1NzYuNDQwMiwgMzc3Ljk1ODEzXSxcbiAgWzE1NzkuODE4NSwgMzc1Ljc1NjNdLFxuICBbMTU4MS4xMTM1LCAzNzkuNzA0OV0sXG4gIFsxNTc3LjY5NjQsIDM4MS42Njc5N10sXG4gIFsxNTc3LjgzOTQsIDM4NS45MjEwMl0sXG4gIFsxNTc2LjczMDIsIDM4OC44OTQ3XSxcbiAgWzE1NzkuMDI2MSwgMzkwLjgyODg2XSxcbiAgWzE1ODIuMDc2NSwgMzkwLjUyNzgzXSxcbiAgWzE1ODQuNjE1MSwgMzkyLjkwNjg2XSxcbiAgWzE1ODUuMzc4OSwgMzk3Ljg4MzM2XSxcbiAgWzE1ODEuODgyNCwgMzk4LjA2MzldLFxuICBbMTU4MS40NTE5LCAzOTQuMzYwMzVdLFxuICBbMTU3Ny44NzYyLCAzOTMuOTMwNzNdLFxuICBbMTU3OC4xMjU3LCAzOTcuMzgyNV0sXG4gIFsxNTc0LjUwNTksIDM5OS41MDI5XSxcbiAgWzE1NzQuOTQyNCwgNDAzLjY4MTQ2XSxcbiAgWzE1NzQuNTk5MiwgMzk1LjE5NTA3XSxcbiAgWzE1NzQuOTIzMSwgMzkxLjY3NTIzXSxcbiAgWzE1NzEuMDA4MiwgMzkyLjU0N10sXG4gIFsxNTY3LjI3ODQsIDM5NC4wNjMyXSxcbiAgWzE1NzEuNDc1MiwgMzk2LjYwMjZdLFxuICBbMTU2OC40NjA3LCAzOTguMTI2OV0sXG4gIFsxNTY1LjAxMzUsIDM5OC41NDczM10sXG4gIFsxNTYzLjUxLCAzOTIuODIwNjJdLFxuICBbMTU2NS45OTI2LCAzODkuNjc1NDhdLFxuICBbMTU2OS4zODA0LCAzODguNzkzNDZdLFxuICBbMTU3Mi43NTMyLCAzODguOTU3MTVdLFxuICBbMTU3NC42MTcxLCAzODYuMTk2NV0sXG4gIFsxNTc0LjQxNTgsIDM4Mi43MzIwM10sXG4gIFsxNTcxLjMwMTYsIDM4NS4xODM0NF0sXG4gIFsxNTY2Ljk1MjYsIDM4NS40MDVdLFxuICBbMTU2Ni4wMDE3LCAzODAuNTQwNzddLFxuICBbMTU2My4yMjc4LCAzODMuMzA0MDJdLFxuICBbMTU2Mi42MjMzLCAzODcuMzM3NV0sXG4gIFsxNTU5LjEzNSwgMzg4LjkyMjQ1XSxcbiAgWzE1NTUuMDMyNSwgMzg4LjI5ODY1XSxcbiAgWzE1NTAuODYwMSwgMzg4LjkyNTRdLFxuICBbMTU0Ny44MTc1LCAzOTEuOTc1ODNdLFxuICBbMTU0My44NDQxLCAzOTIuOTQ5MV0sXG4gIFsxNTQyLjk5OTUsIDM5OC40NzU4XSxcbiAgWzE1NDYuNDgyOSwgMzk2Ljg3NDI0XSxcbiAgWzE1NTAuMTQ4NywgMzk2LjcxNjkyXSxcbiAgWzE1NTEuNDI3MiwgNDAwLjQ2OTA2XSxcbiAgWzE1NTQuNjYyOCwgMzk3Ljc5OTg3XSxcbiAgWzE1NTcuOTc1LCA0MDAuMjQyOF0sXG4gIFsxNTYyLjUwNDQsIDQwMS44NDQxXSxcbiAgWzE1NjAuODU5NCwgMzk3LjI1OTgzXSxcbiAgWzE1NjAuMDY5MSwgMzkzLjA1MDFdLFxuICBbMTU1Ni41NzA4LCAzOTMuOTQwM10sXG4gIFsxNTUyLjQ2ODUsIDM5My4yNDY0XSxcbiAgWzE1NTQuNjYxMywgNDAzLjIyNDM3XSxcbiAgWzE1NTguNzczNiwgNDA0LjMyODNdLFxuICBbMTU1Ny45OTY3LCA0MTEuMTE0ODddLFxuICBbMTU2MS41ODgsIDQxMC44NDYwNF0sXG4gIFsxNTYwLjAyODgsIDQwNy45MTM5XSxcbiAgWzE1NjMuMDExMiwgNDA1Ljg2NTMzXSxcbiAgWzE1NjYuODA3OSwgNDAzLjkwMzA4XSxcbiAgWzE1NzAuNDE2MywgNDAxLjUyNjk1XSxcbiAgWzE1NzEuMDE2NCwgNDA1Ljg1NzQ4XSxcbiAgWzE1NjUuNzQ4LCA0MDguNTYzOTZdLFxuICBbMTU2OS4yMjMzLCA0MDkuOTExOTZdLFxuICBbMTU2NC44MTkxLCA0MTcuMTcxMjNdLFxuICBbMTU2NC44Nzg1LCA0MjEuNTM3NF0sXG4gIFsxNTY4LjE5NzgsIDQxOS40MDE2XSxcbiAgWzE1NzEuMzQ2NCwgNDIxLjA2MTc3XSxcbiAgWzE1NzMuMjk5MSwgNDIzLjkwNjA3XSxcbiAgWzE1NzIuNjM4NywgNDE3LjI5MDE2XSxcbiAgWzE1NzYuNjU0NywgNDE3LjM2OTIzXSxcbiAgWzE1ODAuOTA1NSwgNDE2LjY0MTQ4XSxcbiAgWzE1NzkuMjcyNywgNDEyLjgxNTZdLFxuICBbMTU3NS42NTk0LCA0MTMuMjEzOTNdLFxuICBbMTU3MS44ODEzLCA0MTMuMDc2NDJdLFxuICBbMTU2OS4wNDA1LCA0MTUuNTI1XSxcbiAgWzE1NjYuNjc2LCA0MTMuMjkxXSxcbiAgWzE1NjMuODk4NCwgNDEyLjU3Njg0XSxcbiAgWzE1NjAuODk4MiwgNDE1LjAwOTQ2XSxcbiAgWzE1NjEuMjgzOSwgNDE4LjY0MjE4XSxcbiAgWzE1NjAuMzc1NiwgNDIxLjc5MDc3XSxcbiAgWzE1NTkuMzQyLCA0MjUuMDgwNzhdLFxuICBbMTU1Ny4wODMsIDQyNy40NzIwMl0sXG4gIFsxNTU0LjYwNjQsIDQyNC41Mjk1NF0sXG4gIFsxNTU2LjE5ODQsIDQyMS4zNDkzM10sXG4gIFsxNTU3LjEyMzUsIDQxNy45NTAwNF0sXG4gIFsxNTU2Ljg1OTQsIDQxNC40NTE5XSxcbiAgWzE1NTIuNzQ5OSwgNDE0LjI4ODgyXSxcbiAgWzE1NDkuODEyMSwgNDEwLjY2ODk1XSxcbiAgWzE1NTQuMDk0NywgNDEwLjk3NzM2XSxcbiAgWzE1NTUuODQ0NSwgNDA3LjQxNjg3XSxcbiAgWzE1NTEuOTE4OCwgNDA3LjMzNjRdLFxuICBbMTU1MC4xOTE5LCA0MDQuMjIwODNdLFxuICBbMTU0Ny4xODc2LCA0MDEuMzUwOV0sXG4gIFsxNTQ0LjUxOTgsIDQwMy45OTAyM10sXG4gIFsxNTQxLjAzNDUsIDQwMi40MTUyOF0sXG4gIFsxNTQyLjg4MjYsIDQwNy45MTEwN10sXG4gIFsxNTM4Ljk5OSwgNDA2LjIwNzZdLFxuICBbMTUzNi4wMTY2LCA0MDMuODg5MzddLFxuICBbMTUzMi44Mzk3LCA0MDUuMTYxODddLFxuICBbMTUzMy4yNzUxLCA0MDAuMzE0NTRdLFxuICBbMTUzNy41MzYzLCA0MDAuMzc5MTVdLFxuICBbMTUzOS4xMjA4LCAzOTcuMDAyNV0sXG4gIFsxNTM5LjcyODQsIDM5My4xNTI4M10sXG4gIFsxNTM2LjIxMTgsIDM5MS4yMjE1M10sXG4gIFsxNTM0Ljc2NTEsIDM5NS43ODA1Ml0sXG4gIFsxNTMwLjQ1MTMsIDM5Ni40MTkxM10sXG4gIFsxNTI3LjI5NTcsIDM5My42MzQ2XSxcbiAgWzE1MjkuMDU5MSwgNDAwLjU5NjY1XSxcbiAgWzE1MjkuMjQ5NSwgNDA0LjQ0ODNdLFxuICBbMTUyMi43MDQ2LCA0MDguNjA4NThdLFxuICBbMTUxOC40MTU0LCA0MDkuMTMzMzZdLFxuICBbMTUyMC45NTg2LCA0MTIuOTA2MV0sXG4gIFsxNTE2LjQwOCwgNDE0LjE1Mzc1XSxcbiAgWzE1MTMuMjU2MSwgNDE3LjU1MzIyXSxcbiAgWzE1MTMuNTc5NywgNDA5LjYxOTI2XSxcbiAgWzE1MTYuMjY5MywgNDA0LjQ1OTkzXSxcbiAgWzE1MjAuOTI2LCA0MDQuMjg4NDVdLFxuICBbMTUxOS4wMDMyLCAzOTkuNjM2NzhdLFxuICBbMTUxNy42MjA2LCAzOTQuMTk2MV0sXG4gIFsxNTExLjU3NTIsIDQwMy40MTc2XSxcbiAgWzE1MDkuOTg4OSwgNDEzLjk5NTEyXSxcbiAgWzE1MDUuMzcyOSwgNDIzLjQ0MDg2XSxcbiAgWzE1MDQuMzEyMywgNDI4LjM2OTcyXSxcbiAgWzE1MDQuMjU3LCA0MzIuOTk5MzNdLFxuICBbMTUwNi4zMzg1LCA0MzYuODEzMDhdLFxuICBbMTUwOC44MjIzLCA0NDAuNDU0MjJdLFxuICBbMTUwNC4xNDI1LCA0NDAuNzc0NjZdLFxuICBbMTUwNi40MDU4LCA0NDQuMTQ1XSxcbiAgWzE1MDIuODA1NywgNDQ1Ljc0MTY0XSxcbiAgWzE1MDIuNzA0NiwgNDUwLjYyMDQ1XSxcbiAgWzE1MDYuODg0NSwgNDQ4LjUzMDg1XSxcbiAgWzE1MDkuNzE2OSwgNDQ1LjE2NzQ1XSxcbiAgWzE1MTIuNDQwNywgNDQ3LjUyMDZdLFxuICBbMTUxMC44MTQ2LCA0NTAuNjU3NzhdLFxuICBbMTUwNy4yOTE3LCA0NTIuOTc0ODVdLFxuICBbMTUwNC4wNTE1LCA0NTUuMjE1MDZdLFxuICBbMTUwNS42NjIsIDQ1OS4zNDE5Ml0sXG4gIFsxNTA5LjE0NTMsIDQ1Ny41ODkzMl0sXG4gIFsxNTAyLjI0NzMsIDQ2Mi40NjQwOF0sXG4gIFsxNTAyLjEyNTcsIDQ2Ni43MzMyNV0sXG4gIFsxNTAxLjA0NDIsIDQ1OC43MzQ1XSxcbiAgWzE0OTkuNDg1NiwgNDU0Ljc1MzU0XSxcbiAgWzE0OTcuOTMzMSwgNDUxLjAyODc1XSxcbiAgWzE0OTguODAzMywgNDQ2LjY0MjUyXSxcbiAgWzE0OTQuMTMyOSwgNDQ4LjgxNTc3XSxcbiAgWzE0OTQuMzI3NCwgNDU0LjMxNzIzXSxcbiAgWzE0OTAuMDc1MiwgNDUxLjc5NjFdLFxuICBbMTQ4Mi45NDQ4LCA0NTguMDI3OF0sXG4gIFsxNDc5LjQxMDIsIDQ2MC45MTZdLFxuICBbMTQ4MC42NDU4LCA0NDcuNjUwMDJdLFxuICBbMTQ4NS4yNTQ5LCA0NDMuMTcwNzVdLFxuICBbMTQ5MC42MTAxLCA0NDAuNTA3OV0sXG4gIFsxNDk1LjE3NjEsIDQzNi44ODIzMl0sXG4gIFsxNTAwLjg3NjgsIDQzNi42MjQ3Nl0sXG4gIFsxNTAwLjEzMTYsIDQ0MS4wMzk5XSxcbiAgWzE0OTYuNzI0NiwgNDQyLjA3NjIzXSxcbiAgWzE0OTMuNzExNCwgNDQ0LjE1MTI1XSxcbiAgWzE0ODkuNzY0NiwgNDQ2LjI1MjJdLFxuICBbMTQ4NS43NTczLCA0NDguNDUxNzhdLFxuICBbMTQ4NC4zMTA4LCA0NTIuODE2NTNdLFxuICBbMTQ3OS4zNDA3LCA0NTMuNTM5OTJdLFxuICBbMTQ3NS4yMjI5LCA0NTYuNDQwNjRdLFxuICBbMTQ3Mi43NTk4LCA0NjAuNDI4NTNdLFxuICBbMTQ2OC4xNzE0LCA0NjEuNTkzMjZdLFxuICBbMTQ2NS40OTIyLCA0NjUuMDQ0OThdLFxuICBbMTQ2MS42MDIyLCA0NjcuMzA2Nl0sXG4gIFsxNDY0LjAwNDYsIDQ3MS4xODYxNl0sXG4gIFsxNDU5Ljg1NzksIDQ3My4xOTQzNF0sXG4gIFsxNDYzLjU0NjUsIDQ3Ni4wMTA2Ml0sXG4gIFsxNDY3Ljk0ODQsIDQ3Ni4xNTMzXSxcbiAgWzE0NjguMjk1MiwgNDcyLjkwNzMyXSxcbiAgWzE0NjguMDk0NywgNDY4Ljg4NDM0XSxcbiAgWzE0NzEuNTc0MSwgNDY2LjA5NjY4XSxcbiAgWzE0NzIuNDAwMywgNDcxLjY2ODQzXSxcbiAgWzE0NzIuMDE2LCA0NzYuODIyODhdLFxuICBbMTQ2Ny4yNTI5LCA0NzkuNTYxNTJdLFxuICBbMTQ2My4yMTA4LCA0ODAuNTAzNF0sXG4gIFsxNDU4LjM0OTEsIDQ3Ny43Mzc0M10sXG4gIFsxNDU5LjI0MTcsIDQ4MS45NTg5Ml0sXG4gIFsxNDYzLjMyMzUsIDQ4NS43NjA4Nl0sXG4gIFsxNDY2LjgyNjksIDQ4NC4wMTkxM10sXG4gIFsxNDcwLjQ5MDUsIDQ4MS4yNjkzNV0sXG4gIFsxNDc0LjY3MDIsIDQ4MS4yMTY5OF0sXG4gIFsxNDc2LjA1MTQsIDQ3Ny40NzYzMl0sXG4gIFsxNDc2LjQ3NjksIDQ3My41NDEyXSxcbiAgWzE0NzYuMzA3OSwgNDY5LjAxNzY3XSxcbiAgWzE0NzYuMTAwMiwgNDY0LjIzMzI4XSxcbiAgWzE0ODAuNzY0NiwgNDY2LjczNzc2XSxcbiAgWzE0ODQuNjM2LCA0NjQuNDczOTRdLFxuICBbMTQ4Ny42NjQ5LCA0NjEuMjk3OTddLFxuICBbMTQ4Ny45ODgyLCA0NTYuMTkzNjZdLFxuICBbMTQ5Mi4wMjIxLCA0NTguNDY5NTRdLFxuICBbMTQ5Ni42NTM4LCA0NTguOTI4Ml0sXG4gIFsxNDk3LjkwMTEsIDQ2My42NjU4Nl0sXG4gIFsxNDk5LjYyOTksIDQ3MC4xMzk0N10sXG4gIFsxNTA0LjIzNTUsIDQ3Mi41NjAwNl0sXG4gIFsxNDk5LjcwMTcsIDQ3Ni41MTYyXSxcbiAgWzE0OTUuODM3NSwgNDcyLjM3NTgyXSxcbiAgWzE0OTUuMDQ2OSwgNDY3LjY2MjldLFxuICBbMTQ5Mi44NDEyLCA0NjMuMDg4NjhdLFxuICBbMTQ4OS43NDI2LCA0NjYuODU1MTZdLFxuICBbMTQ4NS44NjA4LCA0NzAuMTM0XSxcbiAgWzE0OTAuNzcyLCA0NzIuMTgxNThdLFxuICBbMTQ4OS41MjczLCA0NzcuNTIyMzRdLFxuICBbMTQ4NC42Nzc1LCA0NzkuNjcxNTddLFxuICBbMTQ4Ny44MDcsIDQ4My40MTQxOF0sXG4gIFsxNDk0LjA1NjYsIDQ4MS45NTM1NV0sXG4gIFsxNDk0LjUyNTYsIDQ3Ni44MTk1Ml0sXG4gIFsxNDg1LjI1MTUsIDQ3NC45MjI5NF0sXG4gIFsxNDgxLjA3OTYsIDQ3MS41OTczOF0sXG4gIFsxNDgwLjU3MzYsIDQ3Ni4xNjE5M10sXG4gIFsxNDc5LjM0MTgsIDQ4MC4xMTM3N10sXG4gIFsxNDgxLjc0NDksIDQ4My4wNDk4N10sXG4gIFsxNDc3LjEwNjcsIDQ4NC44NDA4Ml0sXG4gIFsxNDcxLjc5MzYsIDQ4NC43NDM4N10sXG4gIFsxNDY4Ljk0NTEsIDQ4OC4wOTY4Nl0sXG4gIFsxNDY2LjQ4NjMsIDQ5MS4wNzMxXSxcbiAgWzE0NjIuMzk3MSwgNDg5LjkyOTE0XSxcbiAgWzE0NTkuMTI5NSwgNDkyLjExNTddLFxuICBbMTQ1NS44NjMzLCA0OTQuNDA3NF0sXG4gIFsxNDUyLjEwNTgsIDQ5Mi41MTkxN10sXG4gIFsxNDQ3LjY4MDcsIDQ5MS44NDg4Ml0sXG4gIFsxNDQ5LjQyMTgsIDQ4Mi41MDgyNF0sXG4gIFsxNDU0LjY2MzEsIDQ3NC40NTQzNV0sXG4gIFsxNDUyLjg2MjUsIDQ3OC44MTE1Ml0sXG4gIFsxNDU0LjcwOTIsIDQ4My40MzUwNl0sXG4gIFsxNDU4Ljg4OTYsIDQ4Ni40NzMxNF0sXG4gIFsxNDU1LjIyOTcsIDQ4OC43MjU2XSxcbiAgWzE0NTAuOTk2NiwgNDg3LjQ3NDgyXSxcbiAgWzE0NDYuMzk1MywgNDg3LjIzNjVdLFxuICBbMTQzNi41OTU1LCA0OTAuMjA2NzNdLFxuICBbMTQ0Mi4wMzk2LCA0OTAuMjI1OF0sXG4gIFsxNDQwLjA4MDIsIDQ5NC42ODcxXSxcbiAgWzE0NDQuMzUzOCwgNDk1LjI0MTldLFxuICBbMTQ1MC4xMDk3LCA0OTYuODY1OF0sXG4gIFsxNDQ1LjgwMzcsIDQ5OS41Ml0sXG4gIFsxNDQxLjQ4LCA1MDIuMzEzNDVdLFxuICBbMTQzOC4zNjIzLCA0OTguOTI5M10sXG4gIFsxNDM1LjQ2MzksIDQ5NC44NDY1M10sXG4gIFsxNDMxLjY0OTQsIDQ5Mi4zMzYzNl0sXG4gIFsxNDI4LjkyNywgNDk2LjM1NTldLFxuICBbMTQzMy4yODgsIDQ5OC41ODY3M10sXG4gIFsxNDMxLjAzMDMsIDUwMi4zNjRdLFxuICBbMTQzNS45MTUzLCA1MDMuMjc5NjZdLFxuICBbMTQzOC45ODEyLCA1MDcuNDAxOTJdLFxuICBbMTQ0NC41MjAzLCA1MDguNDIxOTddLFxuICBbMTQ0Ni43NTc2LCA1MDQuMzAxNTddLFxuICBbMTQ1MS41MTA2LCA1MDIuMTI3OF0sXG4gIFsxNDU1LjA0MTEsIDQ5OS4xNjM5XSxcbiAgWzE0NTkuNjkwNCwgNDk4LjI3NzA0XSxcbiAgWzE0NjMuMzU2NCwgNDk1LjEzNjhdLFxuICBbMTQ2NC44MjQzLCA1MDEuMDU4MDddLFxuICBbMTQ2NC44OTExLCA1MDcuNDIwMzVdLFxuICBbMTQ1OC40NDEyLCA1MDQuODAxMjRdLFxuICBbMTQ1Mi4yMDAxLCA1MDcuMzc4XSxcbiAgWzE0NDkuMjIzLCA1MTIuNDU0XSxcbiAgWzE0NDAuNDI1NCwgNTEyLjc0MjhdLFxuICBbMTQzNy4xNzIsIDUxNi43NzczNF0sXG4gIFsxNDM0LjM3MDEsIDUxMi40NDIxXSxcbiAgWzE0MzMuNzQzNywgNTA3Ljg1NDgzXSxcbiAgWzE0MjkuMzEzMiwgNTA2LjU5NTAzXSxcbiAgWzE0MjQuODU3MiwgNTA2Ljc5MzNdLFxuICBbMTQyOC41MDk4LCA1MTEuNDg0Nl0sXG4gIFsxNDMxLjUxMzUsIDUxNi42MTIzXSxcbiAgWzE0MzEuNzY5LCA1MjQuNTExMV0sXG4gIFsxNDM0LjMzNzksIDUyMS4xMTYxNV0sXG4gIFsxNDM4LjczMDcsIDUyMi4wMjc4M10sXG4gIFsxNDQyLjM4MTIsIDUxOS4wOTcxXSxcbiAgWzE0NDUuOTM0NCwgNTE2LjIyOTc0XSxcbiAgWzE0NDguNjQ4NiwgNTIyLjI3MDddLFxuICBbMTQ0My45NTY1LCA1MjQuNzIwNjRdLFxuICBbMTQ1NS4wMzUzLCA1MjYuNzM5MjZdLFxuICBbMTQ0OS4wODI1LCA1MjguNzg1MTZdLFxuICBbMTQ0My43OTEzLCA1MzAuOTc5XSxcbiAgWzE0MzUuNDkyLCA1MjcuOTU4Nl0sXG4gIFsxNDM5LjY5NzksIDUyNy4wODY5XSxcbiAgWzE0MzguODEzNiwgNTMzLjUwMDI0XSxcbiAgWzE0MzMuOTQ1NCwgNTMyLjgzNTddLFxuICBbMTQzMC41NjE4LCA1MzYuMDUyM10sXG4gIFsxNDMwLjYzMywgNTI4Ljk1MDRdLFxuICBbMTQyNy40NjM2LCA1MzEuODMwNTddLFxuICBbMTQyMi45Mzg3LCA1MzMuMjI4N10sXG4gIFsxNDE4LjMzMzksIDUzNy4yNzUxXSxcbiAgWzEzOTIuNTMwOCwgNTMzLjk1NDJdLFxuICBbMTM5OS41NTU0LCA1MzEuMTI3N10sXG4gIFsxMzk1LjA5MzMsIDUyNy44OTQ0XSxcbiAgWzEzOTQuNTA2MywgNTIzLjIwODI1XSxcbiAgWzEzOTYuNTMzLCA1MTkuMDc2NV0sXG4gIFsxNDAwLjI2ODMsIDUyMy42NDc0Nl0sXG4gIFsxNDAxLjM2NzIsIDUxOC4wOTEzXSxcbiAgWzEzOTguOTMwMiwgNTE1LjA3OF0sXG4gIFsxMzk1LjIwMzQsIDUxNC40MjgyXSxcbiAgWzEzOTIuMzY1NywgNTE2LjMyOV0sXG4gIFsxMzkyLjY2NzYsIDUwNy4yMDY0Ml0sXG4gIFsxMzkyLjEwNiwgNTExLjM4MDU1XSxcbiAgWzEzOTYuNzI0OSwgNTEwLjkzNjk4XSxcbiAgWzEzOTkuNzMzLCA1MDguNTM1NjRdLFxuICBbMTQwMS42MTYsIDUxMi4wOTQ4NV0sXG4gIFsxNDA5LjIwNSwgNTEyLjYzNjg0XSxcbiAgWzE0MDguOTIyNCwgNTA3Ljg1MDA3XSxcbiAgWzE0MTAuOTgzNiwgNTA0LjQ1NjQ4XSxcbiAgWzE0MTIuODg3OCwgNTEwLjg5MjNdLFxuICBbMTQxMy41NDk2LCA1MTUuNjU4XSxcbiAgWzE0MTUuODQ3NywgNTIwLjE3MV0sXG4gIFsxNDE3Ljk5NzEsIDUyNC42MzA2XSxcbiAgWzE0MjIuNzY3OCwgNTIyLjMwNDI2XSxcbiAgWzE0MjIuMzQ2MywgNTE3LjkwOTJdLFxuICBbMTQxOC41MjIxLCA1MTYuNDU4MV0sXG4gIFsxNDE3Ljc3NjksIDUxMS45MTQ3M10sXG4gIFsxNDIyLjU5MzUsIDUxMS43OTYwMl0sXG4gIFsxNDI2LjMxMDQsIDUxNS43NjMyXSxcbiAgWzE0MjguMzEyMywgNTIwLjUyNDldLFxuICBbMTQyNy4wMzQyLCA1MjUuNTkzMjZdLFxuICBbMTQyMi44MTg4LCA1MjcuOTE1NV0sXG4gIFsxNDE3Ljg4ODcsIDUzMC43NTY2XSxcbiAgWzE0MTMuMTg0MSwgNTI5LjIxNDVdLFxuICBbMTQxMi40MTc1LCA1MjQuMTgxMTVdLFxuICBbMTQxMC4zNTA1LCA1MjAuMzkxOV0sXG4gIFsxNDA5LjAyMDgsIDUxNi41OTYxXSxcbiAgWzE0MDUuODY3OSwgNTIzLjcyNDVdLFxuICBbMTQwOC41NjY0LCA1MjguNDgzNjRdLFxuICBbMTQwMy45NDg3LCA1MjkuMDc1N10sXG4gIFsxNDA1LjIwOTQsIDUxOS40MTE1XSxcbiAgWzE0MDQuOTQzMiwgNTE0LjgwMzNdLFxuICBbMTQwNS41NzUsIDUxMC41NzA5OF0sXG4gIFsxNDAzLjcxODMsIDUwNi45NjAzM10sXG4gIFsxNDA1LjczMTIsIDUwMy41NzE1XSxcbiAgWzE0MDcuNTMxMiwgNTAwLjA0OTA0XSxcbiAgWzE0MDUuNjA0NywgNDk2LjExMDUzXSxcbiAgWzE0MDEuNjY3NywgNDk0LjA5OTU4XSxcbiAgWzE0MDEuNDY0NiwgNDk3Ljg0Mzg0XSxcbiAgWzE0MDEuNzY1NSwgNTAxLjE1NTE1XSxcbiAgWzEzOTkuODM3NCwgNTA0LjMyODY3XSxcbiAgWzEzOTYuMTA5LCA1MDYuMTk0NDNdLFxuICBbMTM5Mi45ODA3LCA1MDIuNDUxXSxcbiAgWzEzOTYuNTc0MiwgNTAwLjYyNDk3XSxcbiAgWzEzOTcuMzM4LCA0OTYuNDAzOV0sXG4gIFsxNDAwLjQ5NiwgNDkwLjI4ODI3XSxcbiAgWzE0MDUuMDMzNiwgNDkwLjc3NTRdLFxuICBbMTQwOS4xNTQ1LCA0OTIuMDA3MDJdLFxuICBbMTQxMS45MjYzLCA1MDAuMTE5MzVdLFxuICBbMTQxNS40ODA2LCA1MDcuNjg1NzZdLFxuICBbMTQyMC4wNjY5LCA1MDYuMjQ3NF0sXG4gIFsxNDE1LjkyOTEsIDUwMi45NzQ3M10sXG4gIFsxNDE1LjI3ODYsIDQ5Ny41ODg2XSxcbiAgWzE0MTguOTU4LCA0OTguNjIxMjJdLFxuICBbMTQyMi40NzkyLCA1MDEuMzM5XSxcbiAgWzE0MjYuNzE0LCA1MDAuNTY3OF0sXG4gIFsxNDE5LjY0NTYsIDQ5MS42NzEzNl0sXG4gIFsxNDIyLjc5NjgsIDQ5NS43MjMzNl0sXG4gIFsxNDI1Ljk5NywgNDkxLjk0NzQ1XSxcbiAgWzE0MjQuMTkxOCwgNDg3LjI2OTUzXSxcbiAgWzE0MTkuMDU1MiwgNDg2LjM1NDc0XSxcbiAgWzE0MTQuMTgzNywgNDg0LjQyNTYzXSxcbiAgWzE0MTQuMDc2MiwgNDg5LjQyNTYzXSxcbiAgWzE0MTQuODE4MSwgNDkzLjYyOTgyXSxcbiAgWzE0MTAuMzQ3MiwgNDk1Ljg3ODAyXSxcbiAgWzE0MDkuMzY4OSwgNDg3LjYwM10sXG4gIFsxNDA1LjAzNzYsIDQ4NS40MjRdLFxuICBbMTQwMS44NDk0LCA0ODYuNzg4Ml0sXG4gIFsxMzk4LjAyMiwgNDg1Ljg3Njc3XSxcbiAgWzEzOTQuNzk3LCA0ODguNDYwNDVdLFxuICBbMTM5Ny4zMjA2LCA0OTIuMTYyOV0sXG4gIFsxMzkzLjE2OTQsIDQ5Mi42NTkyN10sXG4gIFsxMzkyLjY1NjYsIDQ5Ni40ODkwN10sXG4gIFsxMzkwLjAwMDIsIDQ5OS4wNTQyNl0sXG4gIFsxMzg2LjE4MTIsIDQ5Ny4yNTQxNV0sXG4gIFsxMzg4LjEwMDgsIDQ5My4wNzE1M10sXG4gIFsxMzkwLjE5NzgsIDQ4OS4wOTQ3M10sXG4gIFsxMzkzLjE3MTYsIDQ4NC4zMjMxOF0sXG4gIFsxMzg0LjYwNTIsIDQ4Ny4zOTA1XSxcbiAgWzEzODMuNjY5OSwgNDkxLjMyNjg0XSxcbiAgWzEzODIuNzYxLCA0OTUuNDM1NV0sXG4gIFsxMzc5LjQ5MjEsIDQ5MS44NTYyXSxcbiAgWzEzODAuMDM3LCA0ODcuMDgwMjZdLFxuICBbMTM3Ni4wNTYzLCA0ODkuODI3OTddLFxuICBbMTM3Ny42MjI0LCA0OTUuMzYxNDJdLFxuICBbMTM3OS45MDc4LCA0OTguNTU3NTZdLFxuICBbMTM4Mi4yMzI5LCA1MDEuNTY2NzddLFxuICBbMTM4Ni4xMjY4LCA1MDEuNTMxODZdLFxuICBbMTM4OS4wNjg4LCA1MDMuOTQ4NTVdLFxuICBbMTM4OC45MzY5LCA1MDcuODI1Ml0sXG4gIFsxMzg3LjMxMjQsIDUxMC42MjY0Nl0sXG4gIFsxMzg4LjY2MDQsIDUxNC45MTA5NV0sXG4gIFsxMzg1LjU3MTksIDUxOC40MDgyXSxcbiAgWzEzOTAuNTQ0OSwgNTE5Ljc3NDldLFxuICBbMTM4My4xNjk5LCA1MjIuMTg1MDZdLFxuICBbMTM4My44MTU0LCA1MjcuNTAwODVdLFxuICBbMTM3OS4xNzAyLCA1MjcuODk1MTRdLFxuICBbMTM3OC4xMDc5LCA1MjIuOTE5MDddLFxuICBbMTM3OC45OTU0LCA1MTguMjU3N10sXG4gIFsxMzgxLjk1NDMsIDUxNS42MjM4XSxcbiAgWzEzODQuNzIyNCwgNTEzLjMwNTA1XSxcbiAgWzEzODIuMzk5NSwgNTA5LjYzMTFdLFxuICBbMTM4NC43NTIyLCA1MDUuOTU5MDhdLFxuICBbMTM4MC4xNDU1LCA1MDUuNTc3ODJdLFxuICBbMTM3Ny4zMDMyLCA1MDIuMTg4MjNdLFxuICBbMTM3NS4zNTE0LCA0OTguOTA2MjJdLFxuICBbMTM3Mi4wMTgxLCA0OTcuMTA3MThdLFxuICBbMTM3NC4wMjgzLCA0OTMuNTM4NTRdLFxuICBbMTM3MS4wNDM1LCA0OTAuOTc3XSxcbiAgWzEzNjcuNTIwNSwgNDkwLjM4NzA1XSxcbiAgWzEzNjQuMDg0LCA0OTIuMzExXSxcbiAgWzEzNjMuNjU0MiwgNDk2LjE2OTQzXSxcbiAgWzEzNjAuMzUwMiwgNDkwLjM3ODc1XSxcbiAgWzEzNjUuMjI1NSwgNDg2LjgwMjI1XSxcbiAgWzEzNjkuNjExNSwgNDg1LjIzMjhdLFxuICBbMTM3Mi42MjgsIDQ4Ny43NzEzNl0sXG4gIFsxMzYxLjM4MTEsIDQ4NS4xODM4XSxcbiAgWzEzNTYuOTAyMSwgNDg1LjA0NzEyXSxcbiAgWzEzNTIuMTAwMywgNDg3LjEzMzM2XSxcbiAgWzEzNDguMzA4LCA0ODkuNTExODRdLFxuICBbMTM0Ny42MTI4LCA0ODQuOTk4MDJdLFxuICBbMTM0NC40OTMzLCA0ODcuNzcwOTRdLFxuICBbMTM0Ny4xMzk0LCA0OTMuMTVdLFxuICBbMTM0My41OTkyLCA0OTEuMzA4M10sXG4gIFsxMzQyLjUxMzEsIDQ5OC4yMzIzNl0sXG4gIFsxMzQzLjgxOTYsIDUwMS45MDQwMl0sXG4gIFsxMzQzLjY0MTQsIDQ5NC44NDgzNl0sXG4gIFsxMzQ2Ljg5NzIsIDQ5Ny40MjE3Ml0sXG4gIFsxMzQ4LjQwMjYsIDUwMS4wNzIyN10sXG4gIFsxMzUwLjkxNSwgNTA1LjU2NTA2XSxcbiAgWzEzNDYuOTYxOSwgNTA1LjAzMTc0XSxcbiAgWzEzNTMuODg4LCA1MDEuODc0ODhdLFxuICBbMTM1MS45MTQzLCA0OTguNTYyNDRdLFxuICBbMTM1MC40ODk0LCA0OTUuMDUwMjNdLFxuICBbMTM1Mi4wODQsIDQ5MS41NzI4XSxcbiAgWzEzNTUuMjIwMiwgNDk0LjUyNV0sXG4gIFsxMzU2LjE4MzgsIDQ4OS42OTc3Ml0sXG4gIFsxMzU5LjU2MDksIDQ5NS4xMTA1N10sXG4gIFsxMzU3LjEzMTEsIDQ5OC42Mzg5OF0sXG4gIFsxMzU4LjU5MDMsIDUwMi43Mjg3M10sXG4gIFsxMzYyLjQwNTYsIDUwNC41MDA2XSxcbiAgWzEzNjIuNDIzOCwgNDk5Ljk3MDkyXSxcbiAgWzEzNTUuMjgxNSwgNTA2LjAwOTU4XSxcbiAgWzEzNTguNzQ1NywgNTA4LjM3NDAyXSxcbiAgWzEzNjMuNTY2MywgNTA4Ljc4NTFdLFxuICBbMTM2Ni41NzYzLCA1MDUuNDYxMjddLFxuICBbMTM2Ny4yOTExLCA1MDEuODE0Ml0sXG4gIFsxMzY3LjQ5MjcsIDQ5OC4xMjU5Ml0sXG4gIFsxMzY4Ljc0MywgNDk0LjYzNV0sXG4gIFsxMzcxLjg5MTUsIDUwMS4zNTEzOF0sXG4gIFsxMzcwLjkwMzIsIDUwNS41MTM3Nl0sXG4gIFsxMzc1LjEzNjUsIDUwNS40Njc1XSxcbiAgWzEzNzcuNDQ2MiwgNTA5LjE3MzE2XSxcbiAgWzEzNzkuMTMxLCA1MTIuODEzMjNdLFxuICBbMTM3NS4xOTE3LCA1MTQuMTExNzZdLFxuICBbMTM3NC4xMjg1LCA1MTguNDE5ODZdLFxuICBbMTM3Mi44NzY2LCA1MjIuODEzNV0sXG4gIFsxMzY0LjU2MywgNTI1LjI1NjM1XSxcbiAgWzEzNjkuMjc2NiwgNTI2LjYzMzZdLFxuICBbMTM3NC40Njg0LCA1MjguMDY5NDZdLFxuICBbMTM3MS4wNTc3LCA1MzEuNzc4NDRdLFxuICBbMTM3OC40MjgzLCA1MzMuNDc2MV0sXG4gIFsxMzg1LjMzMjUsIDUzMy40MTkyNV0sXG4gIFsxMzg4LjYzMTYsIDUyMy43ODI3XSxcbiAgWzEzODkuMTg0NCwgNTI4Ljc1NzQ1XSxcbiAgWzEzODYuNzM2LCA1NjAuNTA2N10sXG4gIFsxMzgwLjk5OTgsIDU1OC4zNjM5XSxcbiAgWzEzNzUuMjE0OCwgNTYxLjY3ODFdLFxuICBbMTM3My43NjE4LCA1NjYuMTYwMTZdLFxuICBbMTM2OS42NTI2LCA1NjcuMjE0Nl0sXG4gIFsxMzcyLjg5OTcsIDU3MS4xMjFdLFxuICBbMTM3Mi44MzI4LCA1NzUuNTIzM10sXG4gIFsxMzcxLjUyMjUsIDU3OS41MTQ5NV0sXG4gIFsxMzcyLjUzNDQsIDU4My42OTY5XSxcbiAgWzEzNzYuNDgwMSwgNTgzLjYwNThdLFxuICBbMTM3OS42OTE0LCA1ODYuMTkzXSxcbiAgWzEzNzkuNzcyOCwgNTkwLjU1NDQ0XSxcbiAgWzEzNzUuODIyOCwgNTkyLjU4NDddLFxuICBbMTM3MS4yMzA4LCA1OTEuOTQ2XSxcbiAgWzEzNjkuNTkzOSwgNTg3LjEwNTddLFxuICBbMTM3NC42NDQzLCA1ODguMDMzNl0sXG4gIFsxMzY2LjY1NTMsIDU5MC41MjgyXSxcbiAgWzEzNjIuMzk4LCA1ODkuNDU1MV0sXG4gIFsxMzU0Ljg5ODYsIDU5MS4zNzYxNl0sXG4gIFsxMzU4LjI0NjgsIDU4OC42NjgzM10sXG4gIFsxMzYyLjYyNjMsIDU5NC4yNjVdLFxuICBbMTM2Ny4zMTA1LCA1OTUuMzY5NF0sXG4gIFsxMzU3LjkxMzEsIDU5NC4xNDgxXSxcbiAgWzEzNTkuNjkyNywgNTk4LjQ2NjQzXSxcbiAgWzEzNjAuOTU3OCwgNjAzLjE1NTc2XSxcbiAgWzEzNjQuMzQ4OSwgNTk5LjI4OV0sXG4gIFsxMzYxLjY2NSwgNjA3LjQwNzFdLFxuICBbMTM2MS40MTE2LCA2MTEuNjMwOF0sXG4gIFsxMzU2LjcyMjIsIDYxMC4zMDk0XSxcbiAgWzEzNTIuNjA3MiwgNjEzLjI3MzQ0XSxcbiAgWzEzNDkuNjA0NywgNjE3LjE1NjhdLFxuICBbMTM1MS4xMTM5LCA2MjEuNzExOF0sXG4gIFsxMzU0LjEzNTcsIDYxNy43OTI2Nl0sXG4gIFsxMzU3Ljg1NiwgNjE0LjkwNDJdLFxuICBbMTM1OC4wODc5LCA2MjAuMDIzODZdLFxuICBbMTM2MS40MDk0LCA2MTguMjQzM10sXG4gIFsxMzYzLjQxNzcsIDYyMi4wNTYxNV0sXG4gIFsxMzU1LjMzMiwgNjIzLjAwOTAzXSxcbiAgWzEzNTIuOTA2NCwgNjI2LjE4MTRdLFxuICBbMTM0OC42MjYxLCA2MjYuMjI2MjZdLFxuICBbMTM0My45Mzc2LCA2MjQuNzY1MjZdLFxuICBbMTM0Ni41MTM0LCA2MjEuNTUzNl0sXG4gIFsxMzQ1LjA3OTUsIDYxNy42NDM4Nl0sXG4gIFsxMzQ2LjI0NTEsIDYxMy44NTA2NV0sXG4gIFsxMzQ4Ljc3NzgsIDYxMC43NTk1XSxcbiAgWzEzNTIuMTM1NiwgNjA3LjgwMDk2XSxcbiAgWzEzNDcuNDU3NSwgNjA2LjAyMV0sXG4gIFsxMzQ1LjU5MiwgNjAxLjkzNjk1XSxcbiAgWzEzNTEuMTgzMSwgNjAyLjQ2NTk0XSxcbiAgWzEzNTYuMzI2NCwgNjA2LjAyMzU2XSxcbiAgWzEzNTYuMzQ4NCwgNjAyLjA4NTZdLFxuICBbMTM1NC4zOTk4LCA1OTguMzk5NV0sXG4gIFsxMzQ4LjUyOTQsIDU5Ny45NzY5XSxcbiAgWzEzNTIuMDg0NSwgNTk0Ljk1NjJdLFxuICBbMTM1MC40MzE0LCA1OTAuODkxOTddLFxuICBbMTM0Ny4xMzQ4LCA1ODguNDAwNzZdLFxuICBbMTM0NS4wODk0LCA1ODQuNjc0ODddLFxuICBbMTM0Mi40MjM2LCA1ODguOTg5Nl0sXG4gIFsxMzQ2LjYxNywgNTkzLjM2Mzk1XSxcbiAgWzEzNTMuMDUzLCA1ODcuMzc1MV0sXG4gIFsxMzU1LjQyNDEsIDU4NC4wNjU0XSxcbiAgWzEzNjAuMjgwNiwgNTg0LjM1ODNdLFxuICBbMTM2NC44NTgyLCA1ODUuMzIwN10sXG4gIFsxMzY4LjM1MiwgNTgyLjQyNTddLFxuICBbMTM2NC42NTI4LCA1ODAuMzA3M10sXG4gIFsxMzYwLjk5MjIsIDU3OS44MTI1XSxcbiAgWzEzNTkuMjg0LCA1NzUuNjc0ODddLFxuICBbMTM2My44NzYsIDU3NC45NzI0XSxcbiAgWzEzNjcuNjgwOCwgNTc3LjQxNDldLFxuICBbMTM2OC44NTMxLCA1NzMuNDA2MjVdLFxuICBbMTM2Ni40MDMsIDU3MC40NzM2M10sXG4gIFsxMzY0LjgyMzUsIDU2Ni40Nzk2XSxcbiAgWzEzNjQuMDk5LCA1NjIuMzMwNDRdLFxuICBbMTM2Ni40MjkyLCA1NTcuNTU0Ml0sXG4gIFsxMzY5LjU0NzksIDU2Mi4wODk5N10sXG4gIFsxMzcxLjkyMzEsIDU1Ni45NTg4XSxcbiAgWzEzNzcuNzE0LCA1NTMuMTQ4NV0sXG4gIFsxMzc2LjM5MywgNTU3LjU0MjJdLFxuICBbMTM3My41NDA4LCA1NTAuMTc0OV0sXG4gIFsxMzY2LjA2NiwgNTQyLjYxMjI0XSxcbiAgWzEzNjYuMjQ0OSwgNTM0LjcyMDY0XSxcbiAgWzEzNjQuNTQ4NiwgNTMwLjAxNTg3XSxcbiAgWzEzNTkuOTg2OCwgNTMzLjU4NjczXSxcbiAgWzEzNTYuNDkwMiwgNTMwLjMwMTldLFxuICBbMTM1OS43Mjc5LCA1MjYuNjg1NF0sXG4gIFsxMzU3LjY4MywgNTIxLjk0NjJdLFxuICBbMTM2Mi4zOTc3LCA1MjEuMjA1OTNdLFxuICBbMTM2NC43MDcsIDUxNi44OTEzNl0sXG4gIFsxMzY3Ljc2MzQsIDUyMS4yOTQyXSxcbiAgWzEzNjkuNTU4NiwgNTE3LjMxMjRdLFxuICBbMTM3MC42OTcxLCA1MTMuMzUyMjNdLFxuICBbMTM3My4xMjYsIDUwOS43MjAyOF0sXG4gIFsxMzY4LjUyMiwgNTA5LjI0OTg4XSxcbiAgWzEzNjYuMTAzNiwgNTEyLjgwNTNdLFxuICBbMTM2MS4zNTQ0LCA1MTIuNjk1N10sXG4gIFsxMzU5LjkyNDIsIDUxNy4xMTQ5XSxcbiAgWzEzNTUuMjIxNCwgNTE3LjQyODhdLFxuICBbMTM1MS4zOTQ3LCA1MTQuNjE1N10sXG4gIFsxMzU2LjY1ODksIDUxMy4wOTQ0XSxcbiAgWzEzNTMuMjMxNywgNTEwLjE2OTI1XSxcbiAgWzEzNDguNDMyMSwgNTEwLjQ1OTE3XSxcbiAgWzEzNDQuMjQzNywgNTA3Ljg5NDYyXSxcbiAgWzEzNDAuNjkzNCwgNTA0LjU4ODY4XSxcbiAgWzEzMzkuNTM2NywgNTA5LjAzOThdLFxuICBbMTMzNC45NjY2LCA1MDkuMzY1OF0sXG4gIFsxMzM2LjA3MDMsIDUwNC40OTc1Nl0sXG4gIFsxMzM4LjYyMzcsIDUwMC4wNDkzXSxcbiAgWzEzMzYuMjQyNywgNDk2LjMyMDJdLFxuICBbMTMzOS44MDIsIDQ5NC41Mzk1XSxcbiAgWzEzMzcuMDIxMiwgNDkwLjc0NDkzXSxcbiAgWzEzNDAuNDk4LCA0ODkuNDQ5OTVdLFxuICBbMTMzOC4yMzQxLCA0ODYuMDQ5MzhdLFxuICBbMTMzNC41NjUzLCA0ODYuMzYyNF0sXG4gIFsxMzMxLjQ4NzIsIDQ4OC4xNDQxM10sXG4gIFsxMzI3LjM5MzYsIDQ4OC4wNTAwMl0sXG4gIFsxMzIyLjkzOTUsIDQ4OC4yMzEzOF0sXG4gIFsxMzI1LjEyNTksIDQ4My4wMjE2N10sXG4gIFsxMzIwLjc4MTQsIDQ4NC4wNDE0NF0sXG4gIFsxMzE3LjIwNjUsIDQ4Ny4zMzA1XSxcbiAgWzEzMTkuNzAzNiwgNDkyLjQyOTI2XSxcbiAgWzEzMTYuMTQ4OSwgNDk2LjQ2MTE4XSxcbiAgWzEzMTEuNzEwNCwgNDk4LjcxMDc1XSxcbiAgWzEzMDYuOTUyOSwgNDk5Ljc0NTU3XSxcbiAgWzEzMDEuNjQ1NCwgNTAyLjEzMTE2XSxcbiAgWzEzMDIuNjEyNCwgNTA3LjE5NzQ4XSxcbiAgWzEzMDEuNjY5LCA1MTIuMjAxM10sXG4gIFsxMzAxLjExMTYsIDUxNi45MTY5XSxcbiAgWzEzMDUuNzI5NiwgNTE1LjYyNjFdLFxuICBbMTMwNi4zMzQ3LCA1MTAuNTc4OF0sXG4gIFsxMzA4LjA5NTgsIDUwNS45MjIxOF0sXG4gIFsxMzEwLjczMDEsIDUxMi40NDY5Nl0sXG4gIFsxMzEwLjcwOSwgNTE3LjA3MzI0XSxcbiAgWzEzMDcuODQ3OCwgNTE5Ljg0NzddLFxuICBbMTMwNC4xODg1LCA1MjEuNTQ0N10sXG4gIFsxMjk3LjgzODQsIDUxOC45NjcwNF0sXG4gIFsxMjk2LjAxNTksIDUyMS45NTk2XSxcbiAgWzEzMDAuNjA3NCwgNTIzLjA0MTI2XSxcbiAgWzEzMDAuNTMwMywgNTI3Ljk1MDddLFxuICBbMTI5Ni43MSwgNTI1LjcyMTldLFxuICBbMTI5MS45MTU0LCA1MjcuMzM1M10sXG4gIFsxMjg3Ljk5MTMsIDUyOC43NjA1Nl0sXG4gIFsxMjg0LjgyOTcsIDUyNS40NjI2NV0sXG4gIFsxMjg3LjQ2LCA1MjAuMjY3NDZdLFxuICBbMTI4OC42MjUyLCA1MjQuMTAyNF0sXG4gIFsxMjkyLjQ1NDEsIDUyMy40Nzc2Nl0sXG4gIFsxMjkyLjM1NDYsIDUxOS40MzAwNV0sXG4gIFsxMjkwLjY1MSwgNTE1Ljg4OTM0XSxcbiAgWzEyOTUuNDM2NSwgNTE1LjU4OTRdLFxuICBbMTI5Ny4zMzEzLCA1MTEuNjMwM10sXG4gIFsxMjk3LjkyNjYsIDUwNi45ODc1XSxcbiAgWzEyOTUuODMzMSwgNTAyLjY3Njg4XSxcbiAgWzEyOTMuMDgzNCwgNTA2LjczOTkzXSxcbiAgWzEyODguNjQwNiwgNTA3Ljk4MDkzXSxcbiAgWzEyOTIuNjk5OCwgNTExLjM2OTFdLFxuICBbMTI4OC40NSwgNTEyLjM3MzY2XSxcbiAgWzEyODQuODMzMSwgNTEwLjYzODI0XSxcbiAgWzEyODYuMDM1OCwgNTE1Ljc1NTFdLFxuICBbMTI4My40NDM1LCA1MTguNjgwN10sXG4gIFsxMjgxLjk0OTYsIDUyMi4zMTc1N10sXG4gIFsxMjgwLjI0ODMsIDUyNi4xNDM0M10sXG4gIFsxMjc2LjQzNjQsIDUyNy4zODk2NV0sXG4gIFsxMjc2Ljc1MTYsIDUyMi40ODc1NV0sXG4gIFsxMjc2LjYyNTcsIDUxNC4wODE4NV0sXG4gIFsxMjcxLjEwNiwgNTE0Ljc3NTZdLFxuICBbMTI2Ni44NjI5LCA1MTcuNjQzNDNdLFxuICBbMTI2NC42MzksIDUyMS41NDY1XSxcbiAgWzEyNjAuMzA1LCA1MjIuNDE3MzZdLFxuICBbMTI1Ni42MTg3LCA1MTkuOTgzNjRdLFxuICBbMTI1Ni4zOTQ0LCA1MTUuMzE2OF0sXG4gIFsxMjU1Ljk4ODIsIDUxMC43NDIyOF0sXG4gIFsxMjU4LjkwNSwgNTA3LjQ0Nzk0XSxcbiAgWzEyNjAuNjI1MSwgNTAzLjU0MDc3XSxcbiAgWzEyNTguODE5NiwgNDk5LjMwMDY2XSxcbiAgWzEyNTQuMTYxMSwgNTAwLjkzMjk4XSxcbiAgWzEyNTQuMzEzNywgNTA1LjYwMTg3XSxcbiAgWzEyNTAuMDAwOSwgNTA3LjU5OF0sXG4gIFsxMjQ4LjYyNTYsIDUwMy4wNDc0NV0sXG4gIFsxMjQ4LjkzMTMsIDQ5OC44MDk3XSxcbiAgWzEyNTIuNzM5LCA0OTUuOTUzMjVdLFxuICBbMTI1Mi43ODcsIDQ5MS4yMzc2N10sXG4gIFsxMjU1LjA4NDIsIDQ4Ny4xNTM1XSxcbiAgWzEyNDguNTY5MywgNDgxLjYzNzk0XSxcbiAgWzEyNTAuMzc2LCA0ODYuMTY2MDJdLFxuICBbMTI1My43MTg0LCA0ODIuNDk5NjNdLFxuICBbMTI1OC42Mzk5LCA0OTAuOTMwMV0sXG4gIFsxMjU3LjM3NTIsIDQ5NS4yMzg3NF0sXG4gIFsxMjYzLjEyOTIsIDQ5NC40NzE3NF0sXG4gIFsxMjYzLjYxMSwgNDg4Ljk0OTk1XSxcbiAgWzEyNTkuMjk3NywgNDg1LjgwNzIyXSxcbiAgWzEyNTYuMDU2OCwgNDc2Ljk1NjE4XSxcbiAgWzEyNTEuMzI1MSwgNDc1LjAxNV0sXG4gIFsxMjQ2LjYwMTksIDQ3My45NjA3NV0sXG4gIFsxMjQ0LjYzNjYsIDQ3OC44NjQwN10sXG4gIFsxMjM5LjU0NTksIDQ4NC44Mzk1NF0sXG4gIFsxMjM1LjcyMjQsIDQ4Ni4zNTcxOF0sXG4gIFsxMjM4LjA5MTgsIDQ4MC44MDg2NV0sXG4gIFsxMjI3Ljc3NSwgNDgxLjk1ODIyXSxcbiAgWzEyMjEuOTE2NiwgNDgxLjUxNzldLFxuICBbMTIyMC4wNjg2LCA0ODUuOTAwODVdLFxuICBbMTIyMi4xNDA0LCA0OTAuMTY4M10sXG4gIFsxMjE3LjQ3NDEsIDQ5MC4wMDExNl0sXG4gIFsxMjEyLjA3MTcsIDQ5NC40NzE2Ml0sXG4gIFsxMjA4Ljk1MzksIDQ5NS44MTQ2NF0sXG4gIFsxMjA3LjQ3MTYsIDQ5OS4xNDE4XSxcbiAgWzEyMDcuMTIyOSwgNTAyLjgwNDg3XSxcbiAgWzEyMDcuNDEyOCwgNTA2LjczODk1XSxcbiAgWzEyMDQuMDk1NywgNTA5LjQyMTg4XSxcbiAgWzEyMDIuNDgxMiwgNDk4LjM2NzhdLFxuICBbMTIwMi41MDYxLCA1MDIuODg1NzRdLFxuICBbMTIwMC4yNDA4LCA1MDYuNzYwOTNdLFxuICBbMTE5NS4zMTY5LCA1MDcuMzA5M10sXG4gIFsxMTk4LjMwMiwgNTExLjUyODc1XSxcbiAgWzExOTMuOTA0NCwgNTEyLjQ1MDI2XSxcbiAgWzExODguNjM0MywgNTEyLjgyMTZdLFxuICBbMTE5MC44NDk3LCA1MDguNjY5XSxcbiAgWzExODguMjczOCwgNTA1LjM0MzkzXSxcbiAgWzExODcuMzc0MywgNTAxLjU3NTY1XSxcbiAgWzExODYuNDAwNCwgNDk3LjQ3MTA3XSxcbiAgWzExODkuNjY1MiwgNDk1LjEyNTFdLFxuICBbMTE5MS42NTM4LCA0OTkuMjEwNF0sXG4gIFsxMTkyLjc5MzgsIDUwMy4yMzI2XSxcbiAgWzExOTcuNTE1NywgNTAyLjY0MjU4XSxcbiAgWzExOTcuNDQ2NCwgNDk4LjMwMjM3XSxcbiAgWzExOTQuMzUxNiwgNDk1LjU2NDY3XSxcbiAgWzExOTcuMjEwOCwgNDkyLjA3ODNdLFxuICBbMTIwMC40LCA0OTQuNDA5M10sXG4gIFsxMjA1LjA4NDcsIDQ5NC4zNzQ2M10sXG4gIFsxMjA4LjExMTMsIDQ5MC41NjcyXSxcbiAgWzEyMTMuMjkyNiwgNDkwLjcxNDNdLFxuICBbMTIxMS42MTkzLCA0ODcuMDMwNThdLFxuICBbMTIxNS45MTg2LCA0ODQuNTIwNl0sXG4gIFsxMjEzLjk2OTUsIDQ3NS44MjQxNl0sXG4gIFsxMjI1LjE0OTMsIDQ4NS45NDI3Ml0sXG4gIFsxMjMxLjA5MTMsIDQ4NS43NDQ1N10sXG4gIFsxMjI3Ljg0MjMsIDQ5MC4wODg1XSxcbiAgWzEyMzIuNTkyMywgNDkwLjY2NDUyXSxcbiAgWzEyMzcuMzM5LCA0OTIuNjA5ODZdLFxuICBbMTI0MC42Njc1LCA0ODkuMDQyNDVdLFxuICBbMTI0Mi44MTM4LCA0OTMuMzQ0NDJdLFxuICBbMTI0My40MjUzLCA0OTguODk1MTRdLFxuICBbMTIzOC4wMDg4LCA0OTcuNzY2MDhdLFxuICBbMTIzOS4xNTMzLCA1MDIuNzc0MTRdLFxuICBbMTIzNS43NTYxLCA1MDYuMzk4NjVdLFxuICBbMTIzMS4yMDA2LCA1MDcuMzc1M10sXG4gIFsxMjI2Ljg1MzgsIDUwNS41Njk2N10sXG4gIFsxMjIyLjA4MiwgNTA3LjU2OTc2XSxcbiAgWzEyMTcuODU3OSwgNTA0LjYyNzkzXSxcbiAgWzEyMTguNTMsIDQ5OS43OTAwNF0sXG4gIFsxMjIzLjUxODgsIDUwMC45NzYyNl0sXG4gIFsxMjI3LjgxOTcsIDQ5NS45MzU2XSxcbiAgWzEyMjguOTQ2LCA1MDAuNTQyMDVdLFxuICBbMTIzMy42MDk1LCA1MDEuNTQ2NjNdLFxuICBbMTIzMi43NjYyLCA0OTUuODAzNDRdLFxuICBbMTIyNC42MDIsIDQ5My43OTc1OF0sXG4gIFsxMjIxLjAzNzIsIDQ5NS42ODAzXSxcbiAgWzEyMTYuNTYyLCA0OTQuODI4ODZdLFxuICBbMTIxMy42NDc2LCA0OTkuMDMxNDZdLFxuICBbMTIxMi4wMjgzLCA1MDIuOTMxNDZdLFxuICBbMTIxMy4yMTk3LCA1MDcuNDU2MTJdLFxuICBbMTIxNi41OSwgNTExLjM5OTcyXSxcbiAgWzEyMTguODU2MSwgNTE2LjI3NjddLFxuICBbMTIxMi40ODQ5LCA1MTUuNDQ2MTddLFxuICBbMTIwOS4wNjUxLCA1MTkuMzI4M10sXG4gIFsxMjA0LjM5MjEsIDUxOC43ODI2XSxcbiAgWzEyMDYuOTI4NiwgNTE0LjYwMjIzXSxcbiAgWzEyMDkuODUwMSwgNTExLjAwMjE0XSxcbiAgWzEyMDIuNjAwMSwgNTEzLjE5OV0sXG4gIFsxMjAwLjQwMjcsIDUxNi40MzQ2M10sXG4gIFsxMTk2LjIxMzQsIDUxNy40ODk2XSxcbiAgWzExOTEuOTE2MywgNTE2LjY0Nl0sXG4gIFsxMTkxLjcyNzIsIDUyMS45MzY2NV0sXG4gIFsxMTkzLjkzMzMsIDUyNy42MzE3XSxcbiAgWzExOTYuMzI5OCwgNTIzLjUxNTU2XSxcbiAgWzEyMDAuMTkzNiwgNTIxLjE1MzJdLFxuICBbMTIwNS4yOTM1LCA1MjMuNDQzMjRdLFxuICBbMTIxMC41NDU3LCA1MjkuMzczNTRdLFxuICBbMTIxNC40Nzc5LCA1MzIuMzgzNF0sXG4gIFsxMjE5LjExNiwgNTM1LjAzOThdLFxuICBbMTIyNy40NzIsIDUzNi43MTMyNl0sXG4gIFsxMjIzLjkwNCwgNTMyLjkyMTQ1XSxcbiAgWzEyMjcuMzk5NCwgNTIzLjY0NTE0XSxcbiAgWzEyMjIuNzA4NCwgNTI2LjA1NzI1XSxcbiAgWzEyMjcuMDU3NCwgNTI5LjAzNjg3XSxcbiAgWzEyMzAuNzg5MSwgNTMyLjUxNDhdLFxuICBbMTIzMy4zNjU2LCA1MzcuOTI3ODZdLFxuICBbMTI0MS44NjA0LCA1NDQuNzQwNjZdLFxuICBbMTI0Ny4xOTc5LCA1NDYuNDIyN10sXG4gIFsxMjQzLjM2NjcsIDU1MS4zNjhdLFxuICBbMTIzOC43MTE0LCA1NDAuNTA5NzddLFxuICBbMTIzOS4yNTE2LCA1MzUuOTQ2OV0sXG4gIFsxMjM1Ljk4MzYsIDUzMy4yMTddLFxuICBbMTIzNS4xODY1LCA1MjguODk0Ml0sXG4gIFsxMjMxLjY2OTQsIDUyNi42OTg4XSxcbiAgWzEyMzMuNjUzNywgNTIyLjMwODY1XSxcbiAgWzEyMzkuMjI0NiwgNTI3LjYwNjJdLFxuICBbMTIzOC45ODgsIDUyMy4xODEzNF0sXG4gIFsxMjM3LjcwNzgsIDUxNy44MzEyXSxcbiAgWzEyMzUuNDA3NiwgNTExLjcxNjU1XSxcbiAgWzEyNDAuOTY5NiwgNTEzLjQ3NDA2XSxcbiAgWzEyMzMuMDM3OCwgNTE2LjExNDg3XSxcbiAgWzEyMjguNTMyMSwgNTEyLjE5MDddLFxuICBbMTIyMy4zMDk5LCA1MTMuMDM5XSxcbiAgWzEyMjguODE3NSwgNTE4LjYxNDU2XSxcbiAgWzEyMjMuODY4MywgNTE5LjE0XSxcbiAgWzEyMTkuNzQ3NywgNTIyLjE0NDUzXSxcbiAgWzEyMTUuOTA3MiwgNTI2LjIzNzNdLFxuICBbMTIxOS40OTIxLCA1MjkuODUwNjVdLFxuICBbMTIxNS41MDk4LCA1MTkuNTgwMTRdLFxuICBbMTIxMi41OTM1LCA1MjIuMjkyXSxcbiAgWzEyMDkuNjgzMSwgNTI1LjI5MTZdLFxuICBbMTIwOC42OTg3LCA1MzMuODcwMl0sXG4gIFsxMjA0LjI1OTYsIDUzMy4xMTc4XSxcbiAgWzEyMDUuMDUwNCwgNTI4LjU0MzNdLFxuICBbMTIwMC42MzMsIDUyNi4xOTI3NV0sXG4gIFsxMjA1LjQzOTIsIDUzOS41NzgzN10sXG4gIFsxMTk3Ljg0OTYsIDUzOS4zNDQ0XSxcbiAgWzExOTguNzY2NiwgNTMwLjc0NjAzXSxcbiAgWzEyMDAuODM4NiwgNTM1Ljg4MTA0XSxcbiAgWzEyMTEuMjQ0OSwgNTM3LjU5NjVdLFxuICBbMTIxNi4yNTgyLCA1MzkuMTU2NDNdLFxuICBbMTIxMS44MDUzLCA1NDMuNDA0OF0sXG4gIFsxMjE3LjY5MjksIDU0NS40ODMxNV0sXG4gIFsxMjIyLjMwMTUsIDUzOS42ODA4XSxcbiAgWzEyMjQuMTQ2MSwgNTQ1LjM5OTldLFxuICBbMTIyOS4xMjgzLCA1NDIuMTY2XSxcbiAgWzEyMjkuNDg2MywgNTQ5LjI3NjVdLFxuICBbMTIzNC43NzMsIDU0NC42MzI3NV0sXG4gIFsxMjM3LjM5MjgsIDU1MC4wNTI3XSxcbiAgWzEyMzkuMDAxMiwgNTU3LjMxMzVdLFxuICBbMTIzMi45ODIzLCA1NTQuNzE3OV0sXG4gIFsxMjQyLjI0NDQsIDU2MS41MjU0XSxcbiAgWzEyMzcuNjg4NSwgNTY0Ljg4NjRdLFxuICBbMTIzMi44MDMsIDU2MS4yOTk3XSxcbiAgWzEyMzEuODI5MSwgNTY3LjU2ODFdLFxuICBbMTI0MS4wODgsIDU2OS4wMTIxNV0sXG4gIFsxMjQwLjY5ODksIDU3Ny4wNzE1XSxcbiAgWzEyMzYuMDc2NSwgNTc2LjcyODE1XSxcbiAgWzEyMzYuNDcwNSwgNTcxLjU0Mjg1XSxcbiAgWzEyMjkuNjUxOSwgNTczLjQ3Mjk2XSxcbiAgWzEyMzIuODQ4LCA1ODAuMzk4OF0sXG4gIFsxMjMyLjA3MjUsIDU4Ni4zODMzXSxcbiAgWzEyMjYuNjc5OSwgNTkwLjA3NDhdLFxuICBbMTIyOS4xMTE4LCA2MDUuNDQ2XSxcbiAgWzEyMzMuMjEzMywgNjA3LjQ0ODVdLFxuICBbMTIzNy40OTM0LCA2MDQuMzIyN10sXG4gIFsxMjQyLjE4ODIsIDYwNS4yNzM0XSxcbiAgWzEyNDYuNDI3LCA2MDMuODUwNDZdLFxuICBbMTI0NC4xODY5LCA2MDkuMTUxMzddLFxuICBbMTI0Ny4yODU2LCA2MDcuNzExNF0sXG4gIFsxMjUwLjc3MDMsIDYwOC40NzQyNF0sXG4gIFsxMjUyLjMyMjMsIDYxMi40OTIyXSxcbiAgWzEyNDguMjc5NywgNjEyLjEyNjRdLFxuICBbMTI0MS4xMzA5LCA2MTAuODIyNF0sXG4gIFsxMjM4LjQyMjUsIDYwOC4zMzE0XSxcbiAgWzEyMzUuNDk0LCA2MTEuMDA2OF0sXG4gIFsxMjM1LjI3MzMsIDYxNS45NDk0Nl0sXG4gIFsxMjI5LjQ5MDcsIDYxNy4zNzcyXSxcbiAgWzEyMjkuNTI3MywgNjExLjYzNzFdLFxuICBbMTIzMi40ODQ3LCA2MTMuNjI5OV0sXG4gIFsxMjI1LjM3NzcsIDYxNC42MzI4XSxcbiAgWzEyMjQuMzY2OCwgNjE4LjY3OTQ0XSxcbiAgWzEyMjkuMTE2LCA2MjIuMDM4MTVdLFxuICBbMTIzMi40OTgzLCA2MjQuMTQzOV0sXG4gIFsxMjM3LjMzODksIDYyNi44NzAxXSxcbiAgWzEyMzkuNTI3NSwgNjIzLjQ5NjZdLFxuICBbMTI0Mi42MDM4LCA2MjYuNzg3OTZdLFxuICBbMTI0NC45MzAyLCA2MzAuMjE1NjRdLFxuICBbMTI0MS42MDAzLCA2MzYuOTA2MV0sXG4gIFsxMjQ0LjQ5NjYsIDY0MC42Mjg2XSxcbiAgWzEyNDYuMjY0NCwgNjM1LjU4OTA1XSxcbiAgWzEyNTAuNDU2OSwgNjM0LjQ0MDldLFxuICBbMTI0OC44OTg3LCA2MzEuMTczN10sXG4gIFsxMjQ3Ljg4MjEsIDYyNy40MzI4Nl0sXG4gIFsxMjQ2LjgxNTYsIDYyMy44NzUzN10sXG4gIFsxMjQzLjIsIDYyMy4zODY3XSxcbiAgWzEyNDQuOTA1MywgNjIwLjUxOTNdLFxuICBbMTI1MC44MTQ2LCA2MjQuNTEzN10sXG4gIFsxMjUzLjc5NTgsIDYyMS4yMTg3XSxcbiAgWzEyNTAuMjkyOCwgNjIwLjY3MjM2XSxcbiAgWzEyNDcuNjQyNywgNjE5LjI3MjM0XSxcbiAgWzEyNDIuODYwNiwgNjE3LjcyMTldLFxuICBbMTI0MS4yODg1LCA2MTUuMTM0NjRdLFxuICBbMTI0MS4wMTE0LCA2MjAuMzE3N10sXG4gIFsxMjM3Ljk4MywgNjE4LjU5MjE2XSxcbiAgWzEyMzYuMDU4MywgNjIyLjc5NjE0XSxcbiAgWzEyMzMuNDE0NywgNjE5LjUzOTU1XSxcbiAgWzEyMzguMzU4MywgNjEzLjU4NDk2XSxcbiAgWzEyNDQuNTIxNSwgNjEyLjkwODVdLFxuICBbMTI0NS45MjAyLCA2MTYuMDYxNjVdLFxuICBbMTI0OS41ODI1LCA2MTUuOTQ0N10sXG4gIFsxMjU2LjAwMzgsIDYxMy40NTMzXSxcbiAgWzEyNTkuNDQ2NCwgNjE1LjM4MzVdLFxuICBbMTI1Mi45MjMzLCA2MTYuODI5OF0sXG4gIFsxMjU2LjI4OTMsIDYxOC4yMDU3XSxcbiAgWzEyNjMuMDI5LCA2MTQuMDE2ODVdLFxuICBbMTI1OS4wODEzLCA2MTAuMzQ5NV0sXG4gIFsxMjYwLjgyNTQsIDYwNS45ODc5XSxcbiAgWzEyNjAuMTk1MSwgNjAxLjM3ODg1XSxcbiAgWzEyNTkuMzQ4OSwgNTk2LjQ3MzldLFxuICBbMTI1Ni4yMDk1LCA1OTEuOTkzNjVdLFxuICBbMTI1MC4wNDYxLCA1ODkuODQ4NjNdLFxuICBbMTI1MS45ODk5LCA1OTQuMjIzMl0sXG4gIFsxMjU1LjIxMDQsIDU5Ni42MTg0XSxcbiAgWzEyNTUuODA2NCwgNjAwLjgxNDRdLFxuICBbMTI1Ni40MDIxLCA2MDQuOTQwMl0sXG4gIFsxMjU0LjgwOSwgNjA4LjYyMDI0XSxcbiAgWzEyNTEuMzIwNywgNTk5LjQyNTldLFxuICBbMTI1MS40MTMyLCA2MDMuOTkyNl0sXG4gIFsxMjQxLjUxMTcsIDYwMC41MjkwNV0sXG4gIFsxMjQ2LjcxMiwgNTk5LjkwMDFdLFxuICBbMTI0Ny43MDEsIDU5NS4xNDM0M10sXG4gIFsxMjM4LjA3NjksIDU4Mi43NjczM10sXG4gIFsxMjQzLjYyNTQsIDU4MS41MDQ3Nl0sXG4gIFsxMjQ1LjM0OTIsIDU4OC4wMjczNF0sXG4gIFsxMjQ1LjU1NzQsIDU3Ni43MTQ4XSxcbiAgWzEyNDMuMDkzLCA1NzIuNzYwMTNdLFxuICBbMTI0NC4zMzY4LCA1NjUuNzUwMjRdLFxuICBbMTI0Ny43NDI0LCA1NjguNzQ5NjNdLFxuICBbMTI0Ny44NDA4LCA1NzIuNDQwNTVdLFxuICBbMTI1My41MzM5LCA1NzguMDQzOTVdLFxuICBbMTI1Ni4xMTg3LCA1ODEuNDIxNjNdLFxuICBbMTI1OC4xNzQzLCA1NzcuMjUyNTZdLFxuICBbMTI2MC4zOTA2LCA1NzIuNDE4N10sXG4gIFsxMjU2LjA2NTgsIDU2Ny44NTEyXSxcbiAgWzEyNjAuMDM2MSwgNTY4LjI0MjJdLFxuICBbMTI2NC4yNjQyLCA1NjguOTg3NTVdLFxuICBbMTI2OS4wMSwgNTY3Ljk5ODhdLFxuICBbMTI2OS45NDIsIDU2My43MDI2NF0sXG4gIFsxMjY4LjkxMzUsIDU1OS4zNzk5XSxcbiAgWzEyNjkuNDMzNiwgNTU0LjY0NzRdLFxuICBbMTI3My45ODI4LCA1NTQuNDkxOTRdLFxuICBbMTI3NC44ODM3LCA1NjAuMjI1MzRdLFxuICBbMTI4MC4zMDE4LCA1NjAuNTQ2MTRdLFxuICBbMTI4NS41ODIzLCA1NjAuNTQzNV0sXG4gIFsxMjg5Ljk1MSwgNTYzLjI5MzRdLFxuICBbMTI5MS4zNzI2LCA1NjcuNzQ2XSxcbiAgWzEyODQuOTI5LCA1NjUuOTA2NzRdLFxuICBbMTI4MS45MjQxLCA1NzAuMzgxN10sXG4gIFsxMjc5LjE4MzIsIDU2NS42MzU3NF0sXG4gIFsxMjc0LjAzMjgsIDU2Ni41MjAxXSxcbiAgWzEyNzcuMDQ1NCwgNTcwLjg1MjJdLFxuICBbMTI3Mi42ODI2LCA1NzEuNzQ4MV0sXG4gIFsxMjc0LjMzOTcsIDU3Ni4zODgzXSxcbiAgWzEyNzEuOTcwNywgNTgwLjIyNThdLFxuICBbMTI3MC4yMTYyLCA1ODMuNzg2MTNdLFxuICBbMTI2NS45NDQyLCA1ODIuNTI3MTZdLFxuICBbMTI2Ni42NjYzLCA1NzguMzM2M10sXG4gIFsxMjY5LjgwMjQsIDU3NS43NTc3XSxcbiAgWzEyNjguMTQ0NCwgNTcxLjkxMDldLFxuICBbMTI2NC43NjI2LCA1NzMuNDU0MV0sXG4gIFsxMjYyLjQzMDMsIDU3Ni40MDUxNV0sXG4gIFsxMjYxLjc1OTYsIDU4MC4yOTUxN10sXG4gIFsxMjYwLjAwODQsIDU4My42MTE1XSxcbiAgWzEyNjMuNDY3OCwgNTg2LjUxNzQ2XSxcbiAgWzEyNjcuMzIxOCwgNTg4LjAzMjY1XSxcbiAgWzEyNjguNDcwMiwgNTkzLjUyMDU3XSxcbiAgWzEyNjguNzc0NCwgNTk3LjIzOTU2XSxcbiAgWzEyNzIuNzUzOSwgNjAwLjA5MDE1XSxcbiAgWzEyNzkuNTc5OCwgNTkzLjg3MDhdLFxuICBbMTI3Ni45MzYsIDU4OS42Mzk5XSxcbiAgWzEyODEuMjA4NiwgNTg3LjkwNDldLFxuICBbMTI4NC4zMjY4LCA1ODQuNDE2NV0sXG4gIFsxMjg5LjM3NTUsIDU4NC42OTYzNV0sXG4gIFsxMjg2LjcxMjYsIDU3OS42NDQzXSxcbiAgWzEyOTEuMjczOSwgNTgwLjAzNjNdLFxuICBbMTI5NC44MTEzLCA1ODIuOTYxOF0sXG4gIFsxMjkzLjgwODIsIDU4OC4xMTk0XSxcbiAgWzEyODguNjc0NCwgNTg5LjY2Mzk0XSxcbiAgWzEyODQuMzQzNSwgNTkwLjk2NzJdLFxuICBbMTI4MS4wNDY5LCA1OTkuMjU4Ml0sXG4gIFsxMjc2Ljk1OTIsIDU5OC43NTE5XSxcbiAgWzEyNzMuOTA3LCA1OTUuNTE4OV0sXG4gIFsxMjcyLjgyMywgNTkxLjc4MDldLFxuICBbMTI3MS44NjksIDU4OC4wMzUyXSxcbiAgWzEyNzQuNjgyNSwgNTg0Ljg4MDFdLFxuICBbMTI3OC45NDc0LCA1ODQuMTY3ODVdLFxuICBbMTI3Ny4yNzUxLCA1ODAuMjI0XSxcbiAgWzEyODIuMDU0OSwgNTc5LjQ5MzA0XSxcbiAgWzEyODQuMjczNCwgNTc0Ljc4MTZdLFxuICBbMTI3OC45MjgzLCA1NzUuMzQ0MDZdLFxuICBbMTI4Ny41NTQyLCA1NzAuNzEyNl0sXG4gIFsxMjg5LjY4NDMsIDU3NS4xOTE5XSxcbiAgWzEyOTMuNjY2OSwgNTcxLjk5NF0sXG4gIFsxMjk1LjQyMjYsIDU2NC41ODAzXSxcbiAgWzEyOTcuNjk1MywgNTY5LjAyODddLFxuICBbMTMwMC43MSwgNTY1LjMwODM1XSxcbiAgWzEyOTkuMzIwOCwgNTYwLjc3NDU0XSxcbiAgWzEyOTcuOTQxNCwgNTU2LjUyMTA2XSxcbiAgWzEyOTQuNDA2LCA1NTkuNzkzMl0sXG4gIFsxMjkwLjE1MDgsIDU1OC4yNzkzNl0sXG4gIFsxMjg3LjUyMTYsIDU1NC42MzY1NF0sXG4gIFsxMjgyLjkzNDIsIDU1NS45NDYzXSxcbiAgWzEyNzguNjgzNywgNTU0LjA3NDA0XSxcbiAgWzEyODMuODAwOCwgNTUwLjcxNDM2XSxcbiAgWzEyODAuNDE3NywgNTQ3LjU4NzldLFxuICBbMTI3NS43ODU2LCA1NDkuMTcyNF0sXG4gIFsxMjcwLjk3NDksIDU0OS40NTM5XSxcbiAgWzEyNjcuMTUzMSwgNTQ1LjMwMDNdLFxuICBbMTI2NS40MDcyLCA1NDAuNTgxMDVdLFxuICBbMTI2MC4zNzQsIDUzOS42NDFdLFxuICBbMTI2My4wOTk1LCA1MzUuNjQ2MDZdLFxuICBbMTI2Mi4wNjczLCA1MzAuOTAyN10sXG4gIFsxMjU4LjQwMTEsIDUzNC4yNTQzXSxcbiAgWzEyNTUuNjk5NiwgNTM4LjExMDM1XSxcbiAgWzEyNTIuMzY0NSwgNTQxLjMzMjldLFxuICBbMTI1Mi40NzY0LCA1NDYuMzM2M10sXG4gIFsxMjU3LjMwMiwgNTQ0LjEyNjk1XSxcbiAgWzEyNjIuMjIwOCwgNTQ0LjUzMzE0XSxcbiAgWzEyNjEuMzYyLCA1NDkuMjkyOF0sXG4gIFsxMjY2LjIyODYsIDU1MC4yOTM5NV0sXG4gIFsxMjY0LjM2OTEsIDU1NS4xNTc4NF0sXG4gIFsxMjYzLjE2NTQsIDU1OS45NTAyXSxcbiAgWzEyNjQuNDU5MSwgNTY0LjUwODZdLFxuICBbMTI1OC44NTI5LCA1NjMuOTE4MV0sXG4gIFsxMjU3LjgyODIsIDU1OS40OTIyNV0sXG4gIFsxMjU4Ljk1NDUsIDU1NC41NzQxXSxcbiAgWzEyNTYuMDk3OSwgNTUwLjA5NDNdLFxuICBbMTI1MC4yODE3LCA1NTEuNjEwODRdLFxuICBbMTI1My4xMTkxLCA1NTYuNDE3MV0sXG4gIFsxMjQ2LjEwNjMsIDU1Ni4zMzM4Nl0sXG4gIFsxMjUzLjQ4NSwgNTYyLjExMjddLFxuICBbMTI0Ny45MzYyLCA1NjAuNzAzMV0sXG4gIFsxMjQ5LjIwNTcsIDU2NC41ODk4NF0sXG4gIFsxMjUyLjM0NzksIDU2Ny4yMDU5M10sXG4gIFsxMjUyLjY1NTMsIDU3MS42MjUxXSxcbiAgWzEyNTYuMTk2OSwgNTczLjM1MDZdLFxuICBbMTI1MC41MDU0LCA1NzUuNDA3MzVdLFxuICBbMTI0OC43MTYzLCA1NzkuNTA4NF0sXG4gIFsxMjUwLjU2NzQsIDU4My4xNDY4NV0sXG4gIFsxMjU0LjA3MzUsIDU4Ni44MTc1XSxcbiAgWzEyNTguNjMxNSwgNTg4LjE1OTJdLFxuICBbMTI2MS43MDIxLCA1OTEuMzM4NTZdLFxuICBbMTI2My41NDAzLCA1OTUuMDc0XSxcbiAgWzEyNjQuMDgwOSwgNTk4Ljc2NThdLFxuICBbMTI2NC40NjEyLCA2MDIuODExXSxcbiAgWzEyNjguNDQxNSwgNjAxLjA0NDJdLFxuICBbMTI2OS41Mjk5LCA2MDQuNTQ0NDNdLFxuICBbMTI3MC40MDE2LCA2MDguNzM0NzRdLFxuICBbMTI3My41MTI3LCA2MDQuNjMxOTZdLFxuICBbMTI3Ny40NzY0LCA2MDMuMzk5NTRdLFxuICBbMTI4MS4zNDUxLCA2MDQuNzQ2NV0sXG4gIFsxMjkwLjg0NDIsIDYwNS4wMjA3XSxcbiAgWzEyODYuNjI0NCwgNjA2LjIyMDM0XSxcbiAgWzEyOTIuMjYsIDYwOS41MzcyM10sXG4gIFsxMjk1LjMwMzcsIDYxMi45OTExXSxcbiAgWzEyOTguOTE0MSwgNjIwLjg0ODc1XSxcbiAgWzEyOTguNDAyMywgNjI0LjY4MDk3XSxcbiAgWzEyOTUuMzMwNiwgNjI3LjA5NTY0XSxcbiAgWzEzMDIuMTA2NCwgNjI3LjE2N10sXG4gIFsxMzAyLjY1OTcsIDYyMy4zNzk4XSxcbiAgWzEzMDYuMTQ2MSwgNjI2LjE4NTRdLFxuICBbMTMwNC40NzIyLCA2MzAuMTI1OF0sXG4gIFsxMzA3Ljk3NDYsIDYzMS4xOTA1XSxcbiAgWzEzMDQuNTMxNCwgNjM0LjQ2MjVdLFxuICBbMTMwNS40MjAyLCA2MzguNTM4N10sXG4gIFsxMzA4LjcyOTEsIDYzNS40NTMyXSxcbiAgWzEzMTAuMDc1NiwgNjM5LjU2MTc3XSxcbiAgWzEzMDYuODU0NywgNjQyLjQ4OTg3XSxcbiAgWzEzMDMuMDM1NCwgNjQ0LjA5ODldLFxuICBbMTMwNi42OTk4LCA2NDcuMDUyMjVdLFxuICBbMTMxMC44MTY5LCA2NDQuMjAxNTRdLFxuICBbMTMwOC43MzQ0LCA2NTAuNzg1OTVdLFxuICBbMTMxMi4xMjMsIDY0OC40MTQ4Nl0sXG4gIFsxMzE1LjU2MzEsIDY0NS44ODQ1XSxcbiAgWzEzMTkuNTk5NCwgNjQ3LjA3ODU1XSxcbiAgWzEzMjMuNTkzMywgNjQ1LjkxNDhdLFxuICBbMTMyOS42NjcyLCA2NDkuNTc2ODRdLFxuICBbMTMzMy40OTczLCA2NDguOTQ0NjRdLFxuICBbMTMzNi40NjA0LCA2NTUuNDEwOTVdLFxuICBbMTMzNy4xMjc5LCA2NTEuMzQxNDNdLFxuICBbMTM0MS4xNDU4LCA2NDkuMDUyMzddLFxuICBbMTM0NS41NjI3LCA2NTAuNzg2XSxcbiAgWzEzNDEuNjUyMywgNjU0LjE5NDhdLFxuICBbMTM0Ni41ODcsIDY1NS41ODMyNV0sXG4gIFsxMzUwLjMzNywgNjUyLjUxNl0sXG4gIFsxMzUyLjI2NTksIDY1Ni42MDQ2XSxcbiAgWzEzNTYuMTg5NywgNjUzLjMxNTVdLFxuICBbMTM2MS4zMDU5LCA2NTIuODMzNV0sXG4gIFsxMzY0LjMxNzEsIDY1Ni44OTQ0XSxcbiAgWzEzNTguMjMsIDY1OC4xNzE5NF0sXG4gIFsxMzYyLjAyNywgNjYxLjg2NjhdLFxuICBbMTM1Ni41NDc0LCA2NjQuODk3XSxcbiAgWzEzNjEuMDUxOCwgNjY3LjA1NzRdLFxuICBbMTM2My42NDY3LCA2NzEuMzg1OF0sXG4gIFsxMzU3Ljk3NzgsIDY3MS41Nzk2NV0sXG4gIFsxMzUzLjI4OTMsIDY3MC4xMjc5XSxcbiAgWzEzNDguMzI4NSwgNjY5LjE4MDM2XSxcbiAgWzEzNTAuNjgzOCwgNjY0Ljk1NjI0XSxcbiAgWzEzNTMuNzI3MywgNjYwLjg4OTM0XSxcbiAgWzEzNDguMzMwOSwgNjYwLjM3ODhdLFxuICBbMTM0My42MjAyLCA2NTkuNjkxXSxcbiAgWzEzMzkuMTczNSwgNjU4LjcwMTddLFxuICBbMTMzNC4xMjcyLCA2NTkuNTYzMV0sXG4gIFsxMzM0LjcxNjksIDY2NC40MzIyNV0sXG4gIFsxMzI5LjM2NjIsIDY2Mi43MTA5NF0sXG4gIFsxMzI3LjE3NzIsIDY2Ny41NDldLFxuICBbMTMzMi4wMDk1LCA2NjguMzE0M10sXG4gIFsxMzI0Ljc4MzQsIDY3Mi42NjM5NF0sXG4gIFsxMzI5LjYxNTIsIDY3My41MTM3XSxcbiAgWzEzMzQuMjg4MSwgNjcyLjUyODU2XSxcbiAgWzEzMzQuMzcyOCwgNjc4LjEzODI0XSxcbiAgWzEzMzcuMjc3OCwgNjgzLjMxOTJdLFxuICBbMTM0My4zMDI1LCA2ODQuMDc1NTZdLFxuICBbMTM0Ny44NiwgNjc5Ljg3NjVdLFxuICBbMTM0MS41NTI1LCA2NzcuNTc5XSxcbiAgWzEzMzguNzMxOSwgNjczLjA5MjQ3XSxcbiAgWzEzMzguNzUyNCwgNjY3LjkwODFdLFxuICBbMTMzOS44MDA4LCA2NjMuMTk1MjVdLFxuICBbMTM0NC42NjgxLCA2NjUuMjM3NzNdLFxuICBbMTM0My40MjA0LCA2NzEuMDA3N10sXG4gIFsxMzQ3LjY4NjMsIDY3NC40NzE3XSxcbiAgWzEzNTMuMDIyNSwgNjc2LjUyNl0sXG4gIFsxMzU4LjI5NzEsIDY3Ny4xNDYyXSxcbiAgWzEzNjEuNTA4OCwgNjgyLjE2MzRdLFxuICBbMTM1OS44NTE4LCA2ODYuOTYyMV0sXG4gIFsxMzU0Ljc0MTMsIDY4My4xNTgxXSxcbiAgWzEzNDkuNTQyOCwgNjg1Ljg2NTY2XSxcbiAgWzEzNDEuMDA0OSwgNjg5LjgzMl0sXG4gIFsxMzQ4Ljc3MTksIDY5MS41NjE3XSxcbiAgWzEzNDEuNTkwNywgNzAyLjQ2MjM0XSxcbiAgWzEzMzUuOTU0NiwgNjk1LjQ1MDg3XSxcbiAgWzEzMzQuNTk5NiwgNzAxLjY5ODI0XSxcbiAgWzEzMjguNTMwNiwgNzAxLjM4ODNdLFxuICBbMTMyMi43ODU5LCA3MDIuMTk1N10sXG4gIFsxMzI5LjMwMywgNjk1LjE2MTVdLFxuICBbMTMyMy4wMDY2LCA2OTQuNjE2NDZdLFxuICBbMTMxNi43NTEyLCA2OTIuNTQ3Nl0sXG4gIFsxMzE4LjA2ODIsIDY5OC4zODY0XSxcbiAgWzEzMTIuNDQ1MiwgNjk3LjY4NjddLFxuICBbMTMwNy4wMDc0LCA2OTUuMDk0MV0sXG4gIFsxMzExLjAzNjcsIDY5MC42OTg2XSxcbiAgWzEzMDUuNTAyNywgNjkwLjI0MTZdLFxuICBbMTMwMS4zMTE4LCA2ODIuOTU5NV0sXG4gIFsxMjk4LjMyOTYsIDY3OS4wMzA0Nl0sXG4gIFsxMjk1LjA2MjcsIDY3NC41NDA2NV0sXG4gIFsxMzAwLjU3ODYsIDY3NC40OTEzXSxcbiAgWzEzMDUuMDg1OSwgNjc5LjMxNDJdLFxuICBbMTMwOS4zODAxLCA2NzYuNDAzNDRdLFxuICBbMTMxMy44NTM1LCA2NzguODg1XSxcbiAgWzEzMjEuNzQ0NSwgNjY5LjI1N10sXG4gIFsxMzE3LjkxMTUsIDY2Ny4zMDAyXSxcbiAgWzEzMTQuMjIyOSwgNjY5Ljc5NTZdLFxuICBbMTMxMy45NDM1LCA2NzQuMDE4MDddLFxuICBbMTMxOC41NjU3LCA2NzQuMzUxNl0sXG4gIFsxMzIyLjE5ODUsIDY3Ny41MTUxNF0sXG4gIFsxMzI3Ljg0NSwgNjc4LjM4MDldLFxuICBbMTMzMC41NTY2LCA2ODMuNTU3Nl0sXG4gIFsxMzM0LjAyMTIsIDY4OS4yMDU4XSxcbiAgWzEzMjAuODg2MiwgNjg3Ljg2MzldLFxuICBbMTMyNy4yMjkyLCA2ODkuMDAxOTVdLFxuICBbMTMyNC4xMTYyLCA2ODMuMTA1OTZdLFxuICBbMTMxOC4wNjc2LCA2ODEuNzUxMl0sXG4gIFsxMzE0LjczNjgsIDY4Ni41MDA0XSxcbiAgWzEzMTAuNDU0OCwgNjgyLjgyXSxcbiAgWzEzMDYuMzQzLCA2ODUuMzA3MjVdLFxuICBbMTMwMC42Mjc3LCA2ODguMDE3M10sXG4gIFsxMjk1LjU5NDcsIDY5MC4zNDc4NF0sXG4gIFsxMzAwLjY2OTIsIDY5My4zNzc3XSxcbiAgWzEzMDEuOTIxOCwgNjk4LjU4ODZdLFxuICBbMTMwNi43Njc2LCA3MDAuODI3NzZdLFxuICBbMTI5Ni40MDk0LCA2OTcuNTM2NV0sXG4gIFsxMjkxLjI2NTcsIDY5OC4zNjU0XSxcbiAgWzEyODMuOTM4NCwgNjk1LjE5OTddLFxuICBbMTI3Ny44NDI5LCA2OTMuNDUyNF0sXG4gIFsxMjc1LjE2NiwgNjg4LjEzMTg0XSxcbiAgWzEyNzkuNTg0MSwgNjg0LjI0ODVdLFxuICBbMTI3NC40NjU4LCA2ODAuODcyOV0sXG4gIFsxMjY4LjcwNDMsIDY4MC42MjldLFxuICBbMTI2OS4wNzU4LCA2ODYuOTU3NV0sXG4gIFsxMjYyLjM3NjYsIDY4My43MzU4XSxcbiAgWzEyNTcuNjM1NSwgNjc4LjY4OTMzXSxcbiAgWzEyNTIuMzI0MiwgNjczLjQ0OTFdLFxuICBbMTI0My41NzI0LCA2NzQuNDU3NF0sXG4gIFsxMjQ3LjczMjUsIDY2OS42ODg0XSxcbiAgWzEyNDIuOTM4MiwgNjY2LjI3ODE0XSxcbiAgWzEyNDYuMDc2OCwgNjYwLjYyNzNdLFxuICBbMTI0OS43NDI4LCA2NjQuMTc3NzNdLFxuICBbMTI0MC4xNzMxLCA2NjEuMjM4MDRdLFxuICBbMTIzOC4xMDI4LCA2NjkuODE3MjZdLFxuICBbMTIzNS4yMTUzLCA2NjQuMzY4OF0sXG4gIFsxMjMyLjg5MzMsIDY1OS4wMjUzXSxcbiAgWzEyMzQuOTIxOSwgNjUzLjEyNzldLFxuICBbMTIzOC4wMTQ0LCA2NTYuNzA5ODRdLFxuICBbMTI0My4zNTU2LCA2NTUuNjMzM10sXG4gIFsxMjQ1Ljg2MTcsIDY1MC43OTgzNF0sXG4gIFsxMjUwLjY2MzcsIDY0OS4wMDIzXSxcbiAgWzEyNTIuODEwOCwgNjUyLjM4MDVdLFxuICBbMTI0OC45NDg3LCA2NTUuNTk1N10sXG4gIFsxMjUyLjU0MzgsIDY1OS43Mzk1XSxcbiAgWzEyNTUuNDM3NiwgNjU1LjkzNDI3XSxcbiAgWzEyNTIuNTMwNSwgNjQ1LjMzMjM0XSxcbiAgWzEyNTMuOTE3LCA2NDEuNDI2NjRdLFxuICBbMTI1Ny42MDY3LCA2MzkuMzc3Ml0sXG4gIFsxMjYxLjY5NjcsIDY0MC42NDE4NV0sXG4gIFsxMjYyLjg1MzUsIDY0NC43Mjc1XSxcbiAgWzEyNTcuNzg3NSwgNjQ0Ljg0NzRdLFxuICBbMTI1Ni44NDczLCA2NDkuNDAzN10sXG4gIFsxMjYyLjQyNjMsIDY0OS4wNDg2XSxcbiAgWzEyNjcuNDE5NywgNjUwLjA1NDFdLFxuICBbMTI2Ny42MTc4LCA2NDUuMTI4Ml0sXG4gIFsxMjY2LjgwMjIsIDY0MC44MTMyM10sXG4gIFsxMjcxLjgzNjksIDY0Ni40NjMxM10sXG4gIFsxMjc2LjE3MzMsIDY0OC45ODQ0XSxcbiAgWzEyODAuNzcyNywgNjQ4Ljc5MTVdLFxuICBbMTI4NC44MjA3LCA2NDguNzQ4ODRdLFxuICBbMTI4OC41MjQ3LCA2NDYuNTc5NDddLFxuICBbMTI5Mi4yMjE5LCA2NDguODEyODddLFxuICBbMTI5Ni4zMzQ0LCA2NDkuNDddLFxuICBbMTI5OS4yNDI3LCA2NTIuNTQ3MV0sXG4gIFsxMjkzLjc4MzgsIDY1NC4xNTIzXSxcbiAgWzEyOTQuMzA3NCwgNjU5LjI1NTldLFxuICBbMTI5OS4xNTY0LCA2NjEuMDU1MjRdLFxuICBbMTI5OS43NzQ0LCA2NjUuMjY3NzZdLFxuICBbMTMwNC4wODE3LCA2NjQuNDIzMDNdLFxuICBbMTMwMy42ODIsIDY2MC4xNTM1Nl0sXG4gIFsxMjk4Ljk3MjksIDY1Ni42NjczNl0sXG4gIFsxMjk0Ljk1MDIsIDY2NC40NTc2XSxcbiAgWzEyOTAuMjQwOCwgNjYyLjg5MDc1XSxcbiAgWzEyODkuMDk3NSwgNjU3LjM0MTddLFxuICBbMTI4NS4yNDIzLCA2NjAuODE1N10sXG4gIFsxMjg1LjkyMjYsIDY2NS43OTIxXSxcbiAgWzEyODAuNDAzNiwgNjY1LjI2NjVdLFxuICBbMTI4MS45NDAzLCA2NjkuNzQ1NV0sXG4gIFsxMjc3LjM4NzEsIDY3MC43Nzk2Nl0sXG4gIFsxMjc1LjA2NTMsIDY2Ny44MzE4NV0sXG4gIFsxMjcwLjg3NCwgNjY3LjE3ODk2XSxcbiAgWzEyNzAuMjgyNSwgNjYxLjA5ODQ1XSxcbiAgWzEyNjUuMzc0NSwgNjU5LjI5OTg3XSxcbiAgWzEyNTkuODI1NCwgNjU4LjM5MjddLFxuICBbMTI1OS41NTYzLCA2NTMuMzA4NV0sXG4gIFsxMjY0LjAxNTksIDY1NC4xNjY0NF0sXG4gIFsxMjY4LjM3NjcsIDY1NS4zMDY5XSxcbiAgWzEyNzIuMjkzNSwgNjU2LjYwNzRdLFxuICBbMTI3Mi4yNjMsIDY1MS42MzY2Nl0sXG4gIFsxMjc1Ljc5MywgNjU5LjI0OThdLFxuICBbMTI3Ni40NjY4LCA2NTUuMDQ1MDRdLFxuICBbMTI3OS40NiwgNjUyLjY4NzddLFxuICBbMTI4OC45NiwgNjUxLjk3NzRdLFxuICBbMTI4NC43NzMxLCA2NTMuNzM0NF0sXG4gIFsxMjgxLjgzMzcsIDY1Ni45MDkyXSxcbiAgWzEyODAuMDkxNiwgNjYwLjk2OTFdLFxuICBbMTI3NC45OTAxLCA2NjMuMzUxMl0sXG4gIFsxMjY3LjEsIDY3MC44MzY5XSxcbiAgWzEyNjEuNjM2NSwgNjY4LjA2ODM2XSxcbiAgWzEyNjYuNDc2NywgNjY0LjkyMzk1XSxcbiAgWzEyNjEuODcyMSwgNjYyLjk3NjU2XSxcbiAgWzEyNTYuODU5NywgNjYzLjEwNjJdLFxuICBbMTI1NC4wMjE1LCA2NjcuMzk0M10sXG4gIFsxMjU3LjM1NzcsIDY3MS40MDQzXSxcbiAgWzEyNjEuNTc4NCwgNjc0LjEzMjldLFxuICBbMTI2NS42NTkzLCA2NzYuNjczN10sXG4gIFsxMjcyLjAzNDksIDY3NC4xNDA2XSxcbiAgWzEyNzcuNjQ4NiwgNjc1LjQ1OF0sXG4gIFsxMjgxLjM1NiwgNjc5LjUyNzQ3XSxcbiAgWzEyODUuODM4NiwgNjgzLjc5MzddLFxuICBbMTI4Mi41OTY2LCA2ODguODU1MzVdLFxuICBbMTI4Ny44NTg5LCA2OTAuMTc3N10sXG4gIFsxMjkxLjY2MTUsIDY5My4yNjA0XSxcbiAgWzEyOTAuOTU5NiwgNjg1LjY0NTRdLFxuICBbMTI5Ni4wNjI2LCA2ODQuNjI4Ml0sXG4gIFsxMjkyLjc1NywgNjc5Ljk2MDQ1XSxcbiAgWzEyODkuODkwMywgNjc0LjQ4MTI2XSxcbiAgWzEyODcuMzA5NCwgNjc4Ljg4ODczXSxcbiAgWzEyODMuNDEwMiwgNjc0LjgyNjM1XSxcbiAgWzEyODYuNDY3NCwgNjcwLjk2OTldLFxuICBbMTI5MC41MzUyLCA2NjguNTIwNF0sXG4gIFsxMjk0LjY0MzMsIDY2OS41MDQ1XSxcbiAgWzEyOTguODE0NSwgNjY5LjY2MzQ1XSxcbiAgWzEzMDMuNDAxMiwgNjY5LjQ3Nl0sXG4gIFsxMzA1LjM0NSwgNjczLjY1MTJdLFxuICBbMTMwOS41Mzk2LCA2NzAuOTA3NV0sXG4gIFsxMzA3LjY4OSwgNjY3LjIyNTFdLFxuICBbMTMwOC44OTc3LCA2NjMuMDM3Ml0sXG4gIFsxMzA3Ljk0NjcsIDY1OS4xODM1XSxcbiAgWzEzMTMuOTQ3NSwgNjYxLjQ0NTldLFxuICBbMTMxMy4wMDk5LCA2NjUuNTU0NDRdLFxuICBbMTMxOS4wMjE3LCA2NjIuMDAxNF0sXG4gIFsxMzIzLjU5NzQsIDY2NC4wNzkxXSxcbiAgWzEzMTYuNDUyOSwgNjU3LjE0ODg2XSxcbiAgWzEzMjAuNjUxMSwgNjU2LjA0NDQzXSxcbiAgWzEzMjQuMzE3MSwgNjU5LjI3Ml0sXG4gIFsxMzI5LjI3NCwgNjU3LjY3NzhdLFxuICBbMTMzMS45NjQxLCA2NTMuNzkyMzZdLFxuICBbMTMyNi4wNzUsIDY1NC4xMTE3Nl0sXG4gIFsxMzI1LjgyNTEsIDY0OS40Mzc3NF0sXG4gIFsxMzIxLjc2MDEsIDY1MS4zMzAyXSxcbiAgWzEzMTcuMDA3NCwgNjUxLjE5Mjc1XSxcbiAgWzEzMTMuMTU1OCwgNjUzLjEyMzRdLFxuICBbMTMxMS45NDg1LCA2NTcuNjA0XSxcbiAgWzEzMDguNDE2MSwgNjU0Ljg0NzFdLFxuICBbMTMwMy43NTg4LCA2NTUuODgwN10sXG4gIFsxMzA0LjM0ODgsIDY1MS44NDAyXSxcbiAgWzEzMDIuMCwgNjQ4LjY0NzVdLFxuICBbMTI5OS4wMTksIDY0Ni4wNjgzNl0sXG4gIFsxMjk4LjQzNDIsIDY0Mi4wNDFdLFxuICBbMTMwMS42ODg0LCA2NDAuMTY3MDVdLFxuICBbMTMwMC41Nzg3LCA2MzYuNjY1OTVdLFxuICBbMTI5Ny4xMDY3LCA2MzUuMTgzNV0sXG4gIFsxMzAwLjg4ODMsIDYzMi4yNTk2NF0sXG4gIFsxMjk5LjAwNzMsIDYyOC43MTkyNF0sXG4gIFsxMjk2LjM5NTYsIDYzMS40NTM3NF0sXG4gIFsxMjkxLjgzODEsIDYyNC44ODRdLFxuICBbMTI4Ni44OTI4LCA2MjIuNzQ4OV0sXG4gIFsxMjg4LjQwNDgsIDYyNi43NDA3XSxcbiAgWzEyODUuNDU1MSwgNjI5LjE3MDVdLFxuICBbMTI4OC45OTkxLCA2MzEuNzM2Ml0sXG4gIFsxMjkyLjQ1NzgsIDYyOS44MTc3XSxcbiAgWzEyOTIuODMxNCwgNjM0LjU2NTU1XSxcbiAgWzEyOTEuNTQzOCwgNjM4LjY3NTA1XSxcbiAgWzEyOTUuNjg3NywgNjM5LjIwNDA0XSxcbiAgWzEyOTQuODUxMywgNjQ0LjU2NjQ3XSxcbiAgWzEyOTEuMjE3OCwgNjQzLjA2MTVdLFxuICBbMTI4Ny41NjEsIDY0MC42MzAwN10sXG4gIFsxMjg4LjA2OTEsIDYzNi4xNTA0XSxcbiAgWzEyODQuNjQ4OSwgNjM0LjAxODhdLFxuICBbMTI4MS40MjY5LCA2MzAuOTg2Ml0sXG4gIFsxMjc3LjM1NzMsIDYzMS43MzY2M10sXG4gIFsxMjczLjY4NTMsIDYyOS45NzA5NV0sXG4gIFsxMjcyLjY2OSwgNjI0LjUxNF0sXG4gIFsxMjY5Ljc0MzgsIDYyMC43NTU4Nl0sXG4gIFsxMjY3Ljc5NSwgNjI1LjM5MTZdLFxuICBbMTI2NS41NDkxLCA2MjIuMTYwMTZdLFxuICBbMTI2MS43MTQsIDYyMy4yMjg0XSxcbiAgWzEyNjMuNjM2MSwgNjI3LjE4MjRdLFxuICBbMTI1OS4yNDksIDYyNi44NjMzXSxcbiAgWzEyNTcuMTMyMiwgNjI5LjkyNDldLFxuICBbMTI1My42Mjk2LCA2MzIuMDE2OV0sXG4gIFsxMjUyLjU1MjEsIDYyOC4zMDU1NF0sXG4gIFsxMjU0Ljk3OTIsIDYyNS4zNjM4XSxcbiAgWzEyNTcuNjA5OSwgNjIyLjY3OTU3XSxcbiAgWzEyNTkuODE0LCA2MTkuNTFdLFxuICBbMTI2My40NjIyLCA2MTguNDg3NF0sXG4gIFsxMjY3LjQ2MDcsIDYxNy4yMTE1NV0sXG4gIFsxMjY3LjM5MDQsIDYxMy4wNTQyXSxcbiAgWzEyNjUuODc2MiwgNjA2LjQ2MDZdLFxuICBbMTI2My44OTQ5LCA2MDkuNTk1MDNdLFxuICBbMTI3MS43NzY0LCA2MTQuNjEwNV0sXG4gIFsxMjc2Ljc1NzYsIDYxNC45MjM3XSxcbiAgWzEyNzYuMzU5NywgNjA4LjIxOF0sXG4gIFsxMjczLjcxMTQsIDYxOC45MTMyN10sXG4gIFsxMjc2Ljg1LCA2MjIuNDQzNl0sXG4gIFsxMjc5LjIzMzYsIDYxOC43NjgwN10sXG4gIFsxMjg0LjAzMzIsIDYxOS4wNTY1XSxcbiAgWzEyODEuODY2NSwgNjIzLjAwNjg0XSxcbiAgWzEyODIuMTE1MiwgNjI2LjgwNDJdLFxuICBbMTI3Ny4zNDY0LCA2MjYuODgwMV0sXG4gIFsxMjY5Ljg2OTksIDYyOC41NjYwNF0sXG4gIFsxMjY1Ljk0MjEsIDYzMS4wOTg0XSxcbiAgWzEyNzAuMDM1NiwgNjMzLjE2MDddLFxuICBbMTI3NC42MDAyLCA2MzUuNjkxOF0sXG4gIFsxMjc3Ljk2MTgsIDYzOS41NDM5NV0sXG4gIFsxMjgwLjAzODgsIDYzNS40NjM3XSxcbiAgWzEyODMuMjM4NCwgNjM5LjAwMTddLFxuICBbMTI4NC43OTc1LCA2NDMuODUyMDVdLFxuICBbMTI4MC41NzMyLCA2NDMuOTE1NjVdLFxuICBbMTI3Ni4xNzIyLCA2NDQuMTc2M10sXG4gIFsxMjcyLjU5NzUsIDY0MS4xMjc5XSxcbiAgWzEyNzAuMDEsIDYzNy41MTQ5NV0sXG4gIFsxMjY1LjQ0MTgsIDYzNi4wMzM4XSxcbiAgWzEyNjEuMjI0NSwgNjM2LjIwNTldLFxuICBbMTI2MS41NzU2LCA2MzEuNTY3NzVdLFxuICBbMTI1Ny42NDM2LCA2MzQuMjQyM10sXG4gIFsxMjU0LjIwMTcsIDYzNi41NDE4XSxcbiAgWzEyNTAuMjc4NCwgNjM4LjIyMDhdLFxuICBbMTI0OC44NDc3LCA2NDEuNTc0N10sXG4gIFsxMjQ3LjE0MjYsIDY0NS41OTg0NV0sXG4gIFsxMjQyLjYzMTcsIDY0NS44OTU0NV0sXG4gIFsxMjM5LjYyODcsIDY0MC44MDUyXSxcbiAgWzEyMzQuNzY1NiwgNjQxLjM5Mjk0XSxcbiAgWzEyMjkuOTU2LCA2NDIuNjExNzZdLFxuICBbMTIzMi43ODQ0LCA2MzMuODIzOF0sXG4gIFsxMjM2LjkzNTcsIDYzNi4wNTIyXSxcbiAgWzEyNDIuMjAxLCA2MzMuMjA5MV0sXG4gIFsxMjQwLjA0MzIsIDYzMC4yNzg2XSxcbiAgWzEyMzYuMTI3NiwgNjMxLjE2MDVdLFxuICBbMTIzMi41MDYxLCA2MjguMzMxXSxcbiAgWzEyMjcuNzc2NCwgNjI2Ljg0MzldLFxuICBbMTIyNS4yMjEyLCA2MjIuNjA2M10sXG4gIFsxMjIwLjAxODYsIDYyMS4zNTM4XSxcbiAgWzEyMjIuNjQ3NywgNjI1LjEwMjJdLFxuICBbMTIyMi4yNjY0LCA2MjguMzc0Ml0sXG4gIFsxMjE4LjkxMTQsIDYyOS41OTMyNl0sXG4gIFsxMjE3Ljg3NTQsIDYzMy4wNjA1XSxcbiAgWzEyMTMuNTgwMiwgNjMzLjQzNDFdLFxuICBbMTIxNC42MzcyLCA2MjkuMDEyNjNdLFxuICBbMTIxMS43NDA1LCA2MjQuODc4N10sXG4gIFsxMjA5LjkwMDksIDYyOS40OTMwNF0sXG4gIFsxMjEwLjIzOCwgNjM1LjYyNV0sXG4gIFsxMjA2LjA0ODgsIDYzNi44NTA0Nl0sXG4gIFsxMjA2LjEyOCwgNjMxLjY3ODddLFxuICBbMTIwMi4wNjgxLCA2MjguOTk2M10sXG4gIFsxMjA1Ljc3MTksIDYyNS4yMDIzXSxcbiAgWzEyMDkuMDAzMiwgNjIwLjM4NDJdLFxuICBbMTIwMS4wNzAxLCA2MjEuNTEzOF0sXG4gIFsxMTk4LjM1NjQsIDYyNS45NjE4XSxcbiAgWzExOTcuNDIxOCwgNjMxLjQ0ODddLFxuICBbMTE5Mi43MTIyLCA2MzEuOTc2NTZdLFxuICBbMTE4OS44OCwgNjM1LjgyNzE1XSxcbiAgWzExODYuODE4OCwgNjMyLjQwMTA2XSxcbiAgWzExODMuNTg1NiwgNjI5LjEyNzNdLFxuICBbMTE4OS4yNzIxLCA2MjguNDc3MzZdLFxuICBbMTE5My40Nzc5LCA2MjYuMzMxNjddLFxuICBbMTE5MC4xNzg1LCA2MjEuOTQ4XSxcbiAgWzExODUuMjE4OCwgNjIwLjkzNzFdLFxuICBbMTE5MS4wODU5LCA2MTYuNzgxNDNdLFxuICBbMTE5NS4zOTcyLCA2MjEuMDcyMV0sXG4gIFsxMTk2Ljk5ODgsIDYxNi40NDMxXSxcbiAgWzExOTkuOTA5MiwgNjEyLjYzMTM1XSxcbiAgWzEyMDQuMzM0NywgNjE4LjIzOTg3XSxcbiAgWzEyMDUuMTI5NiwgNjEzLjk1MV0sXG4gIFsxMjA5LjQwNTgsIDYxMy4wMjYyNV0sXG4gIFsxMjEyLjg5MDcsIDYxNi40NDQyXSxcbiAgWzEyMTQuOTM4LCA2MjAuNzM0Nl0sXG4gIFsxMjE3LjQwNzcsIDYyNS4yMzg5XSxcbiAgWzEyMTkuMjkzNSwgNjE2LjgwMDY2XSxcbiAgWzEyMjEuNzEyNiwgNjExLjcxMDhdLFxuICBbMTIyNi4wNzc2LCA2MDkuNDI5M10sXG4gIFsxMjIzLjE4ODYsIDYwNS42MTQzXSxcbiAgWzEyMTguNzMyNCwgNjA3LjM3MDM2XSxcbiAgWzEyMTQuMzAwOCwgNjA1LjU5NzRdLFxuICBbMTIxMy4yNTEzLCA2MTAuMTU2XSxcbiAgWzEyMTYuOTQ0LCA2MTIuODIwM10sXG4gIFsxMjA4LjYwMTEsIDYwNi41MzUxXSxcbiAgWzEyMDQuNTIxMiwgNjA5LjI0MDddLFxuICBbMTIwMS4yMjIzLCA2MDUuOTk0OV0sXG4gIFsxMTk2LjEzMzMsIDYwNy4yNTM0XSxcbiAgWzExOTMuMzA2NSwgNjExLjg0MTldLFxuICBbMTE4Ny43MjA4LCA2MTEuNzY2OTddLFxuICBbMTE5MC4yOTM2LCA2MDcuMDE0M10sXG4gIFsxMTg0LjI0NiwgNjA4LjM3OTJdLFxuICBbMTE4Ni4xMjc5LCA2MTYuNDgzM10sXG4gIFsxMTgyLjM3MTYsIDYxMy4yNzRdLFxuICBbMTE3OC45ODUxLCA2MDkuODczOTZdLFxuICBbMTE3NC4xNDk5LCA2MTAuNTE0MDRdLFxuICBbMTE3Mi41ODcyLCA2MTUuNDE2MTRdLFxuICBbMTE3Ny41MTA2LCA2MTQuODYzODNdLFxuICBbMTE4MS4zMzY0LCA2MTguMzk5NTRdLFxuICBbMTE3Ni44OTM2LCA2MTkuNjMyNTddLFxuICBbMTE3MS44MTgsIDYyMC4xMTgzNV0sXG4gIFsxMTY4Ljc4NjMsIDYyOS4wNTc4XSxcbiAgWzExNzQuMzI0OCwgNjI5LjM5NTQ1XSxcbiAgWzExNzguODM0NSwgNjI4Ljc1NzZdLFxuICBbMTE4Ni4wOTE5LCA2MjUuMzA3NF0sXG4gIFsxMTgxLjAyMDEsIDYyNC4wMzUxNl0sXG4gIFsxMTc2LjExNDYsIDYyNC4xOTIyNl0sXG4gIFsxMTcxLjgyMDYsIDYyNS4yMTI5XSxcbiAgWzExNjcuNDM2LCA2MjMuODcyODZdLFxuICBbMTE2Ni42NzA0LCA2MTkuNDYwOTRdLFxuICBbMTE2Ny4wMjksIDYxNC44MTIyNl0sXG4gIFsxMTY5LjQ3MiwgNjExLjMzOTVdLFxuICBbMTE2Mi4yNjg3LCA2MTYuNDAyOTVdLFxuICBbMTE1OC43NTkzLCA2MTEuNDgzXSxcbiAgWzExNjMuOTA2MiwgNjEwLjMzNjddLFxuICBbMTE1OS4yOTcyLCA1OTUuNjYxNTZdLFxuICBbMTE2MC4zNzI0LCA1OTAuMzAxNDVdLFxuICBbMTE2Ny4xMDkzLCA1OTAuNTkzOV0sXG4gIFsxMTY4LjIzMjMsIDU4MS45Nzc4XSxcbiAgWzExNzAuMDA2MiwgNTc2LjMxNDddLFxuICBbMTE3NC42MDU4LCA1NzQuMjA1XSxcbiAgWzExNzUuNTc3MywgNTY4Ljg4OTY1XSxcbiAgWzExODAuMDAwNywgNTY0LjY1NzRdLFxuICBbMTE4NS43NDMzLCA1NjIuMjk5OV0sXG4gIFsxMTg5LjE2OTQsIDU1OC4wNTI5XSxcbiAgWzExODYuMTcxMSwgNTUzLjI4MjM1XSxcbiAgWzExODguNTc4OSwgNTQ4LjA0MjVdLFxuICBbMTE5MC4wMzQsIDUzNy4zMjZdLFxuICBbMTE5NC44NCwgNTM0LjYxMzldLFxuICBbMTE5MC43Njg0LCA1MzEuMjczMTNdLFxuICBbMTE4Ni4yMDAzLCA1MzIuMTgyMV0sXG4gIFsxMTg0LjMwNzksIDUzNi41NTc3NF0sXG4gIFsxMTg3LjY3NzUsIDUyNi4zODMyNF0sXG4gIFsxMTg2LjE5NzgsIDUyMS43Nzc2NV0sXG4gIFsxMTg3LjU1MDIsIDUxNy41MTIxXSxcbiAgWzExODIuNTA2LCA1MTguNTk3NTNdLFxuICBbMTE3Ny41ODY3LCA1MTkuMTIxMV0sXG4gIFsxMTgxLjY1MTQsIDUyNC4wNTkyXSxcbiAgWzExNzYuNTk3NywgNTI3LjY3MzNdLFxuICBbMTE3Mi4wNDY4LCA1MjkuNDU1Ml0sXG4gIFsxMTc2LjQ3MywgNTIyLjc1NDhdLFxuICBbMTE3NC43NTc3LCA1MTYuMTY1MV0sXG4gIFsxMTcxLjgyNzUsIDUyMy4xMzY3XSxcbiAgWzExNzAuODk1LCA1MTguNDc3Nl0sXG4gIFsxMTc1Ljc5MywgNTExLjQyNDI2XSxcbiAgWzExNzMuMTE4OCwgNTA3LjM1MjYzXSxcbiAgWzExNzMuODI4OSwgNTAzLjM0OThdLFxuICBbMTE3OC40NTAxLCA1MDIuMzk4NTZdLFxuICBbMTE3Ny44OTg3LCA1MDYuODcwNTddLFxuICBbMTE4MC43MDM3LCA1MTAuMjkzNjddLFxuICBbMTE3OS4zOTEyLCA1MTQuODY0NF0sXG4gIFsxMTg0LjAxNjEsIDUxMy44MjA5XSxcbiAgWzExODUuMzk1MywgNTA5LjEwMzg4XSxcbiAgWzExODIuODgwNSwgNTA1LjMwMDM4XSxcbiAgWzExODIuODQ5MiwgNTAwLjY0NjI0XSxcbiAgWzExNzguOTgwNiwgNDk3LjY5MzgyXSxcbiAgWzExODIuNzIyLCA0OTUuNzEyNF0sXG4gIFsxMTc5Ljk1OTQsIDQ5Mi4zNTcxOF0sXG4gIFsxMTc1LjYxMjUsIDQ5My45NDAyOF0sXG4gIFsxMTczLjIzOTEsIDQ4OS45NDc2M10sXG4gIFsxMTY4LjQ5NDgsIDQ5MC4yNDEwNl0sXG4gIFsxMTY0Ljg2OTgsIDQ5My4yODgzM10sXG4gIFsxMTYwLjA5MzMsIDQ5My4zNzIyOF0sXG4gIFsxMTU2LjA1OSwgNDkxLjk1NzAzXSxcbiAgWzExNjIuMDg2MywgNDk3LjIxMDU0XSxcbiAgWzExNjQuMzQ5NCwgNTA1LjAwNjY4XSxcbiAgWzExNjMuMTQxMSwgNTAxLjM3ODc4XSxcbiAgWzExNTguMzUyLCA1MDAuNjY1MTNdLFxuICBbMTE1OC43MTU4LCA1MDQuNjYzM10sXG4gIFsxMTYxLjAwNywgNTA3LjQ5MjRdLFxuICBbMTE1OS4zMDgyLCA1MTAuOTY0OTRdLFxuICBbMTE1OC4wMDAyLCA1MTQuNzczMTNdLFxuICBbMTE1NC40NDkxLCA1MTEuOTMxODVdLFxuICBbMTE1NS4wMzc0LCA1MDcuNjYwMTZdLFxuICBbMTE1NC4wMDU0LCA1MDMuMzI4MjJdLFxuICBbMTE1Mi42MjQ1LCA0OTkuMzgxMV0sXG4gIFsxMTU2Ljk3MzgsIDQ5Ni44MTg4Ml0sXG4gIFsxMTUyLjUxMiwgNDk1LjEwODZdLFxuICBbMTE0Ny40MTc3LCA0OTkuMzk4MzJdLFxuICBbMTE0OS40ODU2LCA1MDQuMzg2XSxcbiAgWzExNDkuODYyNywgNTA5LjQyNDE2XSxcbiAgWzExNDQuOTk2MywgNTA2LjU1ODQ0XSxcbiAgWzExNDQuODYyNCwgNTExLjg3MTU4XSxcbiAgWzExNDAuODkyNSwgNTE0LjQzODJdLFxuICBbMTE0MC44NDE4LCA1MjQuODk5NTRdLFxuICBbMTE0Ni4yNTEyLCA1MjcuNjc2NzZdLFxuICBbMTE0OS44Njk2LCA1MzAuODM1Ml0sXG4gIFsxMTU0LjQ4MzQsIDUzMi41ODNdLFxuICBbMTE1Ni44ODgyLCA1MjguMjk4OTVdLFxuICBbMTE2MS41MjMyLCA1MjQuNjAwMzRdLFxuICBbMTE2Ni43NzQsIDUyMS40NDQyXSxcbiAgWzExNjcuMjA1NywgNTI2LjQ0NTNdLFxuICBbMTE3Mi43OTM3LCA1MzQuNzM3ODVdLFxuICBbMTE3Ny45Nzg0LCA1MzMuNjMyNF0sXG4gIFsxMTgwLjYxMjgsIDUzOC40MDQyNF0sXG4gIFsxMTgyLjc3NjksIDU0Ny41NzExXSxcbiAgWzExODUuMTgwOSwgNTQyLjc2NzMzXSxcbiAgWzExNzkuNjM5MywgNTQzLjI2MDQ0XSxcbiAgWzExNzcuMTUzMiwgNTQ3Ljg5ODNdLFxuICBbMTE3My45Njc4LCA1NDQuMTAxM10sXG4gIFsxMTY4Ljk1ODMsIDU0Ni44MjYzNV0sXG4gIFsxMTcyLjIxNTgsIDU0OS42OTI0XSxcbiAgWzExNzUuNzE0NiwgNTUzLjY4MDY2XSxcbiAgWzExODAuNjQ4MywgNTUyLjM2MTJdLFxuICBbMTE4MC45MDA1LCA1NTcuOTU5NjZdLFxuICBbMTE3NS45MjA1LCA1NjAuMjQ3ODZdLFxuICBbMTE3Mi4wMTQ5LCA1NTcuNTkwN10sXG4gIFsxMTY5LjMyMjksIDU1My43NjQ0XSxcbiAgWzExNjUuNTAxNSwgNTUxLjA4NzY1XSxcbiAgWzExNjQuMDE3OCwgNTQ3LjA5MTVdLFxuICBbMTE1OS43NzkzLCA1NDYuNzA4MDddLFxuICBbMTE1NS4wMDk4LCA1NDcuNTQ5MjZdLFxuICBbMTE0Ni41MTc2LCA1NDcuNjMyNzVdLFxuICBbMTE0Mi4zNjg1LCA1NDguODQ0Ml0sXG4gIFsxMTM3Ljk3MTMsIDU0Ni45OTQ4XSxcbiAgWzExMzkuNzk5NiwgNTQzLjAzMjddLFxuICBbMTE0NC44NjY1LCA1NDMuMTYzMjddLFxuICBbMTE1MC4xNTM4LCA1NDQuOTgyNjddLFxuICBbMTE1My4wMzEyLCA1NDIuMTI4ODVdLFxuICBbMTE1Ni41ODk1LCA1NDIuNDc4OV0sXG4gIFsxMTYwLjQzOTIsIDU0MS43NjA0XSxcbiAgWzExNjQuODAwOCwgNTQyLjIwODU2XSxcbiAgWzExNjkuMDczMiwgNTQyLjI2ODJdLFxuICBbMTE3Mi4wNjkzLCA1MzkuMjk1MzVdLFxuICBbMTE3Ni4zOTM2LCA1MzkuMTE0MTRdLFxuICBbMTE2OC4wMDEyLCA1MzIuMTg4Nl0sXG4gIFsxMTY3LjczNTYsIDUzNy4zNjg5Nl0sXG4gIFsxMTYyLjQ5NzksIDUzNy44MTk2NF0sXG4gIFsxMTY0LjE1NzIsIDUzNC4wNTUyXSxcbiAgWzExNjIuNzQyLCA1MjkuNDMzOTZdLFxuICBbMTE1OS40NzEzLCA1MzIuOTU1MTRdLFxuICBbMTE1Ny44Mjk1LCA1MzcuMjA4MjVdLFxuICBbMTE1My42OTQ2LCA1MzcuNjQ4NDRdLFxuICBbMTE0OS45OTQ2LCA1MzUuMjg2ODddLFxuICBbMTE0OS4zNDYsIDU0MC4zNDUzXSxcbiAgWzExNDYuMTY1LCA1MzguMjAyNzZdLFxuICBbMTE0NS4xMjUyLCA1MzMuNzkyMzZdLFxuICBbMTE0Mi4yNTIxLCA1MzAuMjk1OF0sXG4gIFsxMTM4LjkwMTksIDUzNC4zNDU1XSxcbiAgWzExNDEuOTgxLCA1MzguNDMxOTVdLFxuICBbMTEzNy4wNDcyLCA1MzguOTEyODRdLFxuICBbMTEzMi45OTU2LCA1NDEuMTcxXSxcbiAgWzExMzMuNjI5NCwgNTQ1LjUxMjhdLFxuICBbMTEzNC4wNzcxLCA1NTAuNDYwNF0sXG4gIFsxMTM4LjE1ODQsIDU1Mi40NTc1XSxcbiAgWzExNDcuMTY3NCwgNTU4LjMyMTZdLFxuICBbMTE0NS40MTE0LCA1NjQuMDA4OV0sXG4gIFsxMTUxLjAzNTUsIDU2Mi42MTMxNl0sXG4gIFsxMTU3LjM5MDksIDU2NS4zMDc0XSxcbiAgWzExNTUuOTk3OSwgNTYxLjEzNDZdLFxuICBbMTE1OC44MzcsIDU1Ny42MTE0NV0sXG4gIFsxMTYyLjUzMjEsIDU2MS44NTk0XSxcbiAgWzExNjkuMjUyOCwgNTY4Ljg5NjM2XSxcbiAgWzExNzMuMDEzNywgNTY0LjM5OTY2XSxcbiAgWzExNjguMjQ1NiwgNTYyLjUyMDZdLFxuICBbMTE2Ni4xMDY3LCA1NTcuNzMzMV0sXG4gIFsxMTYyLjQyNTMsIDU1NC42MTU3XSxcbiAgWzExNTguNjE2NiwgNTUxLjUyNThdLFxuICBbMTE1My42MTc0LCA1NTMuMTIxN10sXG4gIFsxMTUyLjU3MDcsIDU1Ny4zOTk2XSxcbiAgWzExNTAuNzM5NiwgNTQ5LjU3OTgzXSxcbiAgWzExNDcuMjYzMSwgNTUyLjkxOTI1XSxcbiAgWzExNDIuNDE5MiwgNTU0LjUwNF0sXG4gIFsxMTMzLjUwNDMsIDU1Ni4xMjU5XSxcbiAgWzExMzcuMzA2OSwgNTU3LjkzMDI0XSxcbiAgWzExNDEuOTgzOSwgNTU5Ljc5MDldLFxuICBbMTEzOC4wMzAzLCA1NjMuMDAwM10sXG4gIFsxMTMyLjUyMDUsIDU2Mi4yNDI1XSxcbiAgWzExMjguOTM4NSwgNTY2LjkyODddLFxuICBbMTEyNi41OTMxLCA1NjIuMTQ1Nl0sXG4gIFsxMTI4LjY4ODgsIDU1Ny45ODY0XSxcbiAgWzExMjIuNzY0NSwgNTU2Ljg4MV0sXG4gIFsxMTIxLjk4MzksIDU2MS43MTczXSxcbiAgWzExMjIuMjQ4MiwgNTY2LjIxODZdLFxuICBbMTExNi4xNjU4LCA1NjQuMjc0ODRdLFxuICBbMTExOC4xMjQzLCA1NjAuMDY0NF0sXG4gIFsxMTEzLjExMDEsIDU2MC4yODk1XSxcbiAgWzExMTAuMTgwOSwgNTYyLjY5NDM0XSxcbiAgWzExMDcuNjMzLCA1NjUuODI2OTddLFxuICBbMTEwNS4zNjc5LCA1NjIuMTQ0NjVdLFxuICBbMTEwMC44MTc0LCA1NjIuMDc3NzZdLFxuICBbMTEwMi44NzYxLCA1NjYuMTI4MDVdLFxuICBbMTA5OC4yNjE4LCA1NjYuNzgwNF0sXG4gIFsxMDkyLjA2NiwgNTY3LjkyMTVdLFxuICBbMTA5NS40MzA1LCA1NzAuNjYxNzRdLFxuICBbMTA5Ny41ODQ0LCA1NzQuNjcyODVdLFxuICBbMTEwMC40ODg2LCA1NzAuODk3NDZdLFxuICBbMTEwNS4wNDk2LCA1NjkuNzY0NF0sXG4gIFsxMTAzLjk0MDgsIDU3NC4wNzgzXSxcbiAgWzExMDAuODU5NCwgNTc3LjMwMDldLFxuICBbMTEwMi40MTg4LCA1ODMuNTc0MDRdLFxuICBbMTEwNC40NDM3LCA1NzkuNTcyOF0sXG4gIFsxMTEyLjkzNDMsIDU3Ni44MTMwNV0sXG4gIFsxMTEzLjA4MDcsIDU4Mi4xMTU5XSxcbiAgWzExMDguNjY4NywgNTgxLjE5NDddLFxuICBbMTEwOC4wMzM0LCA1NzYuODMwNDRdLFxuICBbMTEwOS4xMTMyLCA1NzMuMTI0NF0sXG4gIFsxMTA5LjU0OTEsIDU2OS40MTczNl0sXG4gIFsxMTEyLjgzMDgsIDU2Ny4wNzU3XSxcbiAgWzExMTQuMjIwNiwgNTcyLjEzMDhdLFxuICBbMTExOC4wMjE3LCA1NjguNjUyODNdLFxuICBbMTExOS40ODE0LCA1NzMuMTcxNzVdLFxuICBbMTExNy40MjkyLCA1NzguMTA1MV0sXG4gIFsxMTE4LjAyMjUsIDU4My41NzddLFxuICBbMTEyMi43MDk4LCA1ODQuMDI3MzRdLFxuICBbMTEyMi4xMzMzLCA1NzguNzkwNF0sXG4gIFsxMTI0LjQ1NTMsIDU3NC44MjA5XSxcbiAgWzExMjQuNzY4LCA1NzAuMDY2NV0sXG4gIFsxMTI4Ljk4MTEsIDU3My43NTg4XSxcbiAgWzExMzMuMTA2MiwgNTcxLjY4NzQ0XSxcbiAgWzExMzUuMDYyMSwgNTY3LjI5NzVdLFxuICBbMTEzOS4xODY1LCA1NzIuMjQyM10sXG4gIFsxMTQwLjk2MzksIDU2Ny4xNzc4Nl0sXG4gIFsxMTUwLjI4OSwgNTY3LjUzMTRdLFxuICBbMTE0NS4xNjUyLCA1NzAuNzA1MV0sXG4gIFsxMTQ5LjY5NjgsIDU3NC4yNTY5Nl0sXG4gIFsxMTU1LjEzNTksIDU3MC41MzgyXSxcbiAgWzExNjIuNzg3LCA1NjcuODEwMl0sXG4gIFsxMTY1LjU1MjcsIDU3Mi41ODg0NF0sXG4gIFsxMTY0LjU2ODQsIDU3Ny41MTE1XSxcbiAgWzExNTkuNTE5LCA1NzMuNDA3MV0sXG4gIFsxMTU5LjIyNjEsIDU3OC45MzE0XSxcbiAgWzExNjIuNDY3OCwgNTgyLjQyNzg2XSxcbiAgWzExNjQuMzIwOSwgNTg2LjUxMjFdLFxuICBbMTE1Ny44MDk3LCA1ODQuOTIzMzRdLFxuICBbMTE1NC43Njc2LCA1OTAuNjM3OF0sXG4gIFsxMTQ5LjQ3NjYsIDU4OC41NDY3XSxcbiAgWzExNTIuNzQyOCwgNTg0LjAwMzU0XSxcbiAgWzExNTQuMTY5MiwgNTc3LjkxNjc1XSxcbiAgWzExNDcuNzc1NCwgNTgxLjAzMTVdLFxuICBbMTE0Mi45NzUsIDU3Ny4zNTU1XSxcbiAgWzExMzYuNzk1OSwgNTc3LjA1NzZdLFxuICBbMTEzMS45NzU2LCA1NzguMzIzNl0sXG4gIFsxMTI3LjE4MjUsIDU4MC4xNjU5XSxcbiAgWzExMjYuOTA5MiwgNTg2LjEzMzU0XSxcbiAgWzExMjUuOTU1OCwgNTkxLjM1MTU2XSxcbiAgWzExMjkuMzEzMSwgNTk2LjIyOTldLFxuICBbMTEzMi4xOTM2LCA2MDAuNTQyMzZdLFxuICBbMTEzNy45NTM5LCA1OTkuMTczOTVdLFxuICBbMTE0My4zNDA3LCA1OTkuOTA0M10sXG4gIFsxMTM1LjgwNzUsIDU5Mi4xMDg1XSxcbiAgWzExMzEuMzcyLCA1OTAuMDgzOV0sXG4gIFsxMTMxLjkyNzQsIDU4NC4zMzc2NV0sXG4gIFsxMTM2LjYzNzUsIDU4My4zMDkyXSxcbiAgWzExNDEuMDYyNiwgNTg0LjM1MDNdLFxuICBbMTE0NC43NjIzLCA1ODcuMzM2NF0sXG4gIFsxMTQwLjgwMTMsIDU5Mi40OTAyXSxcbiAgWzExNDYuMDc3MywgNTk0LjE5NDddLFxuICBbMTE1MS42NjI4LCA1OTUuMDg5OTddLFxuICBbMTE1NS43NzQsIDU5OS43MjMyXSxcbiAgWzExNDkuMjU1MiwgNjAwLjcxODE0XSxcbiAgWzExNTIuMzQ5NCwgNjA1LjU2MDY3XSxcbiAgWzExNTcuNjM4NywgNjE3LjczODE2XSxcbiAgWzExNTMuMDUyNCwgNjE1LjYwODQ2XSxcbiAgWzExNTEuNTQyLCA2MjAuMjgxOV0sXG4gIFsxMTQ2LjMwMTMsIDYyMC42MjY0Nl0sXG4gIFsxMTU0LjEzNjEsIDYyNS44NTQ0M10sXG4gIFsxMTU2Ljk5OTEsIDYyMi41MTQxXSxcbiAgWzExNjEuOTY2NywgNjIyLjM1MTI2XSxcbiAgWzExNjMuNTQ0OSwgNjI2Ljk4MDM1XSxcbiAgWzExNTguNzE2NywgNjI4Ljk2MjA0XSxcbiAgWzExNjAuOTgzOCwgNjM1LjU3MjI3XSxcbiAgWzExNjcuMTI0OCwgNjM2Ljc2NjJdLFxuICBbMTE2NC41NDgsIDYzMS45MzY3N10sXG4gIFsxMTcxLjIxMDYsIDYzMy41MThdLFxuICBbMTE3Ni4xODg4LCA2MzQuMTgyODZdLFxuICBbMTE4MC45ODE5LCA2MzMuMzA5MV0sXG4gIFsxMTg0LjQ3MTgsIDYzNi41MjY1NV0sXG4gIFsxMTg4LjE4ODcsIDY0MC41NzI5XSxcbiAgWzExOTIuNDQ1NywgNjQ0LjM3NjA0XSxcbiAgWzExOTcuMjU1NCwgNjQzLjAyNl0sXG4gIFsxMTkzLjA4MDYsIDYzOS4zNzk2NF0sXG4gIFsxMTk2LjI5NDMsIDYzNi40NjMyNl0sXG4gIFsxMjAxLjY1NjEsIDYzNC42MDI4XSxcbiAgWzEyMDAuNTgwNCwgNjM5LjE3NDg3XSxcbiAgWzEyMDIuMzY2MSwgNjQzLjM4NDAzXSxcbiAgWzEyMDAuODg3NSwgNjQ3LjczNjJdLFxuICBbMTE5Ni40MTk4LCA2NDkuMTE3XSxcbiAgWzExOTUuOTA0LCA2NTQuODc5NV0sXG4gIFsxMjAxLjUzNTUsIDY1NC4yMDk2XSxcbiAgWzEyMDQuNTU0OSwgNjUwLjk4Mjg1XSxcbiAgWzEyMDguOTc1MiwgNjUwLjk3OTQzXSxcbiAgWzEyMTMuNzQzLCA2NTEuNDY5NF0sXG4gIFsxMjE2LjcyNzcsIDY0Ny44MDA5XSxcbiAgWzEyMTkuOTY1NiwgNjQ0LjU1ODddLFxuICBbMTIxOS4yMDg3LCA2NDAuNjU0Ml0sXG4gIFsxMjE0Ljk2OTIsIDY0My4yNTc1XSxcbiAgWzEyMTEuNTMwNCwgNjQ2LjQ3MDNdLFxuICBbMTIwNi43MzA2LCA2NDUuOTM1MjRdLFxuICBbMTIwNS45OTU0LCA2NDAuOTk2OF0sXG4gIFsxMjEwLjQ2NzcsIDY0MS4wOTc1XSxcbiAgWzEyMTQuMjYyMSwgNjM4LjYwMTldLFxuICBbMTIxNy44MDU0LCA2MzYuNzM2OTRdLFxuICBbMTIyMi4wODA4LCA2MzYuODExNDZdLFxuICBbMTIyMi40NzI5LCA2MzMuMDg2NF0sXG4gIFsxMjI1LjUyNzgsIDYzMC44NjYzXSxcbiAgWzEyMjkuMjAxOSwgNjMxLjk1MjE1XSxcbiAgWzEyMzEuMzY3NywgNjM4LjAyMTddLFxuICBbMTIyNy4wMzY1LCA2MzYuNTE1XSxcbiAgWzEyMjQuMzIzNywgNjQwLjI5MzhdLFxuICBbMTIyNS4xODEsIDY0NC4xMTE0NV0sXG4gIFsxMjI4LjgxMDcsIDY0Ny40NDE5XSxcbiAgWzEyMzMuOTcxMiwgNjQ3LjY5NzI3XSxcbiAgWzEyMzcuOTY3OSwgNjQ1LjQ4MTJdLFxuICBbMTIzOS45MTksIDY1MC43ODk4XSxcbiAgWzEyMzAuMzkyOCwgNjUyLjM2MzFdLFxuICBbMTIyOC4wNzc5LCA2NTYuODM5N10sXG4gIFsxMjI4LjU5NjksIDY2My42NTAyN10sXG4gIFsxMjMxLjM0MzMsIDY3MC4xMzQxNl0sXG4gIFsxMjIyLjE1NjQsIDY2NC41NjU1NV0sXG4gIFsxMjE2LjI3MywgNjYzLjg4ODldLFxuICBbMTIxMS42NDU2LCA2NjEuNTAwN10sXG4gIFsxMjI0LjE1ODcsIDY1OS43MDMyNV0sXG4gIFsxMjE4Ljk0ODksIDY1MS45OTYzNF0sXG4gIFsxMjIyLjU1ODUsIDY0OC4wNzg2XSxcbiAgWzEyMjUuNTc0LCA2NTEuNDAyNl0sXG4gIFsxMjIyLjY2OTksIDY1NC43Nzk2Nl0sXG4gIFsxMjE5LjAxODQsIDY1OC40MDU0XSxcbiAgWzEyMTUuMDM1LCA2NTYuMjY0MzRdLFxuICBbMTIwOS45MzY1LCA2NTUuODc2MzRdLFxuICBbMTIwNS43MTU2LCA2NTkuNzk4MTZdLFxuICBbMTE5OS44MDcsIDY1OS41MTIxNV0sXG4gIFsxMTk0LjQ4MTcsIDY2Mi4wNzc1XSxcbiAgWzExOTAuNDg5LCA2NTYuNzQ3NV0sXG4gIFsxMTg3LjQzNjUsIDY2MS4wMzI1XSxcbiAgWzExNzYuNzUyOSwgNjYzLjM2OTRdLFxuICBbMTE3Ny4wNzA5LCA2NTYuMDQ5Ml0sXG4gIFsxMTcxLjY2NywgNjYwLjE2Mzk0XSxcbiAgWzExNTUuNDQyLCA2MzkuNjk1NV0sXG4gIFsxMTU1Ljk2NzIsIDYzNC4yMzc1NV0sXG4gIFsxMTUyLjI0NjMsIDYzMC40OTQzXSxcbiAgWzExNDguNDU0NywgNjI1LjczMjA2XSxcbiAgWzExNDUuNzE0NCwgNjMwLjcyMTVdLFxuICBbMTE0MS41MDM3LCA2MjYuMjYwNl0sXG4gIFsxMTM5LjQxMzUsIDYzMi4xNjI3XSxcbiAgWzExNDMuNzE5NiwgNjM2Ljk4ODY1XSxcbiAgWzExNDkuNzE2NCwgNjM1LjcwOTRdLFxuICBbMTE0OC41MjA5LCA2NDIuNjIzNjZdLFxuICBbMTE0MS42NzM1LCA2NDQuMjU4Ml0sXG4gIFsxMTM4LjAyOTcsIDYzOS43OTE1Nl0sXG4gIFsxMTM1LjA0OTgsIDY0NS45NjU4XSxcbiAgWzExMzEuNjg2LCA2NDEuNTc2NTRdLFxuICBbMTEyOC42MzQ4LCA2MzcuMTU1M10sXG4gIFsxMTIyLjU3MDMsIDYzNy44ODU0XSxcbiAgWzExMTkuMTU3NSwgNjQ3Ljc2MzU1XSxcbiAgWzExMTkuMzE3OSwgNjQyLjYxMDk2XSxcbiAgWzExMjMuMTE2OCwgNjYzLjY4OTVdLFxuICBbMTExNy40MjY0LCA2NjQuNTg2Ml0sXG4gIFsxMTEwLjg1NiwgNjY0LjYzODczXSxcbiAgWzExMDguNjYxMSwgNjU5LjA0ODNdLFxuICBbMTExNC41MzI3LCA2NTkuMjQ4OF0sXG4gIFsxMTA1LjAwODksIDY2NC40OTMxNl0sXG4gIFsxMTAwLjgwMzgsIDY2OC41OTE1NV0sXG4gIFsxMDk0LjIzMywgNjY2Ljg5OTRdLFxuICBbMTEwMy4xNzgyLCA2NzUuNzkxMjZdLFxuICBbMTA5OC41Mzc2LCA2NzMuMjU3NTddLFxuICBbMTA5My44MjkyLCA2NzQuMDIwNTddLFxuICBbMTA4OC41NDMyLCA2NzUuMzk4Ml0sXG4gIFsxMDg0LjQ4OTYsIDY4MC4xNDcyXSxcbiAgWzEwOTEuMTQzMywgNjgwLjUxMzJdLFxuICBbMTA5Ny44ODcxLCA2ODAuMzUxNDRdLFxuICBbMTEwNy4xMzYyLCA2NzAuNzE3N10sXG4gIFsxMTA4LjQ0MTcsIDY3Ny40NDA5XSxcbiAgWzExMTIuOTUwOCwgNjczLjYwNjE0XSxcbiAgWzExMTMuNDk5OSwgNjY5LjA0MV0sXG4gIFsxMTE5LjMxNjQsIDY3MC4wMDE2XSxcbiAgWzExMjUuMjI5MSwgNjY5LjUyNzhdLFxuICBbMTEyOC40MTI1LCA2NjQuMjE5Ml0sXG4gIFsxMTM2LjM3NjMsIDY1MS45MDg0NV0sXG4gIFsxMTI4Ljk2NTIsIDY0OC4zODE4NF0sXG4gIFsxMTI1LjY5NzYsIDY0My40MTEyNV0sXG4gIFsxMTM0LjY4NjIsIDYzNS41OTU2XSxcbiAgWzExMzEuNzA2OSwgNjMxLjQ5MTddLFxuICBbMTEzNC41MjMsIDYyNy40MDIyXSxcbiAgWzExMTYuODQ5NSwgNjE0LjEzNjJdLFxuICBbMTEyOC4yOTgzLCA2MDcuMTA5NV0sXG4gIFsxMTI0LjExNjEsIDYwMS4zNjExNV0sXG4gIFsxMTIyLjI0NjUsIDU5NS4xNzQ5XSxcbiAgWzExMjAuMTkwMiwgNTg5LjI4NzIzXSxcbiAgWzExMTcuMjAyMSwgNTk4LjcyNDM3XSxcbiAgWzExMTAuMzc2NSwgNTk4LjAzMzU3XSxcbiAgWzExMTUuMjcsIDU5Mi43NDI3XSxcbiAgWzExMTQuMDAyOSwgNTg3LjI4MDY0XSxcbiAgWzExMDkuNDM2NCwgNTkxLjE2Nl0sXG4gIFsxMTA3LjkyNDYsIDU4NS44NzY4XSxcbiAgWzExMDMuMjIxMywgNTg4Ljk0NjUzXSxcbiAgWzEwOTguMjg4NSwgNTg2LjYwMzFdLFxuICBbMTA5My44MDg1LCA1ODIuMDQ1N10sXG4gIFsxMDk3Ljg2NDMsIDU4MC41NzI0XSxcbiAgWzEwOTMuOTI0MiwgNTg4LjE5OTJdLFxuICBbMTA5My4xMjkzLCA1OTMuMzcwN10sXG4gIFsxMDk4Ljk4NzgsIDU5My40NzMxNF0sXG4gIFsxMTA0Ljc4MTksIDU5NC42NTUyXSxcbiAgWzExMDMuMzI0MywgNjAwLjA5NTddLFxuICBbMTEwNy43NTE1LCA2MDQuOTAzXSxcbiAgWzExMDIuNzg2LCA2MDguODIzXSxcbiAgWzEwOTcuNzIwNywgNjExLjg1Nzg1XSxcbiAgWzEwOTAuNDcwMywgNjEyLjYxNzVdLFxuICBbMTA4OS4zNTk0LCA2MTkuOTU4Nl0sXG4gIFsxMDg0Ljg0ODMsIDYzMi4yMDk3XSxcbiAgWzEwODguMzI5OCwgNjM3LjkxNzM2XSxcbiAgWzEwODAuNDU2LCA2NDIuOTM1NTVdLFxuICBbMTA3Ni4yNzE3LCA2MzkuOTE4Nl0sXG4gIFsxMDgyLjA0NDQsIDYzNy4yOTddLFxuICBbMTA3Ni45OTM4LCA2MjYuNTA5MDNdLFxuICBbMTA3Ni45MTcyLCA2MjAuNTQ3NV0sXG4gIFsxMDgyLjgyOSwgNjIwLjEwMTg3XSxcbiAgWzEwODQuNzA0OCwgNjE0Ljk2MjFdLFxuICBbMTA3Ny42ODA1LCA2MTQuNTYwNV0sXG4gIFsxMDc2LjY2ODIsIDYwMy4yNDQ3XSxcbiAgWzEwNzUuOTg0NywgNTkzLjY4NThdLFxuICBbMTA3OS41NzM5LCA1OTEuMjYxXSxcbiAgWzEwODQuMTI3OCwgNTg5LjU4MDFdLFxuICBbMTA4OC44MDQ2LCA1ODguNTk1Ml0sXG4gIFsxMDg4LjM1MjksIDU5NC4yNDU2XSxcbiAgWzEwODIuNTUsIDU5NS4wNTNdLFxuICBbMTA4NS43NzM2LCA1OTkuMDA5MDNdLFxuICBbMTA5MS4wMDEyLCA2MDAuNzAzMDZdLFxuICBbMTA5NS44ODgsIDU5OC4zNDc2Nl0sXG4gIFsxMDk4LjQ5MzUsIDYwMy41MDYxXSxcbiAgWzEwOTMuODA0LCA2MDYuOTE0MzddLFxuICBbMTA4Ny45NjQ3LCA2MDYuMTM1MjVdLFxuICBbMTA4My4wNzQ1LCA2MDkuNDA1OF0sXG4gIFsxMDc2Ljk5NTYsIDYwOC43NDkyN10sXG4gIFsxMDgyLjMzNDUsIDYwMi45MzMzXSxcbiAgWzEwNzcuNjgwOCwgNTk4LjI0MDVdLFxuICBbMTA3Ni4xMDg5LCA1ODcuOTY5ODVdLFxuICBbMTA4MC4zNjg1LCA1ODUuNzkzOF0sXG4gIFsxMDg0Ljc5MywgNTg0LjE4NjA0XSxcbiAgWzEwODkuNzEwOSwgNTgzLjUzNDddLFxuICBbMTA4NS43Nzg2LCA1NzkuNDA5NF0sXG4gIFsxMDg5LjUxNzgsIDU3Ny43Mzk3NV0sXG4gIFsxMDkzLjcyNDYsIDU3Ni4yODUzNF0sXG4gIFsxMDkwLjA4MTcsIDU3Mi40NzQyXSxcbiAgWzEwODUuNTc2MiwgNTY5LjYyOTMzXSxcbiAgWzEwODMuNzQwNCwgNTc0LjE4NjA0XSxcbiAgWzEwODEuMDMxMiwgNTc5LjI0NzddLFxuICBbMTA3Ni41NTQ5LCA1ODIuNTkyOV0sXG4gIFsxMDc2LjQwNTMsIDU3Ny40MDkxXSxcbiAgWzEwNzcuMjQ2OCwgNTczLjAxOTY1XSxcbiAgWzEwNzkuMzM4MSwgNTY5LjAxOTldLFxuICBbMTA4Mi43NDM3LCA1NjUuNDA1NV0sXG4gIFsxMDg4LjA5OTksIDU2NS41MjU1XSxcbiAgWzEwODYuMTg1NCwgNTYxLjY0NDNdLFxuICBbMTA5MC4yNjk1LCA1NjAuODMwOF0sXG4gIFsxMDkyLjkxNjQsIDU2My44NjQ3NV0sXG4gIFsxMDk2LjcxMjIsIDU2Mi44Mzk5N10sXG4gIFsxMDk0LjY3NDcsIDU1OS4wODddLFxuICBbMTA5OC44MjYzLCA1NTguMTAxMV0sXG4gIFsxMTAxLjgxNTQsIDU1NC4xNjA3XSxcbiAgWzExMDMuMzg5NCwgNTU3LjkxMDVdLFxuICBbMTEwNy43OTA5LCA1NTguMzU1MDRdLFxuICBbMTExMC43MjExLCA1NTUuNTA1M10sXG4gIFsxMTE0LjcyMjksIDU1Ni40MTU0XSxcbiAgWzExMTguMDMxNSwgNTU0LjQ3NDVdLFxuICBbMTExOS44MzM0LCA1NTAuNTc2M10sXG4gIFsxMTI0LjE3ODcsIDU0Ny42NDg2XSxcbiAgWzExMjUuMjMyLCA1NTMuMDQ5MjZdLFxuICBbMTEzMC4wMjgsIDU1My4zMTkzXSxcbiAgWzExMjkuMDgyMywgNTQ4LjY2NjE0XSxcbiAgWzExMjguNTE5MiwgNTQzLjU0NzFdLFxuICBbMTEyMy43NDEzLCA1NDEuNzMwMl0sXG4gIFsxMTE5LjU1MTksIDU0NC40NDQzNF0sXG4gIFsxMTE1LjI3OSwgNTQ3LjIzODhdLFxuICBbMTExMi4xNzY1LCA1NTAuOTg3MzddLFxuICBbMTEwNi42NTYxLCA1NTMuMTMwODZdLFxuICBbMTEwNS42ODA5LCA1NDguMzM1MTRdLFxuICBbMTExMC4wMDQ1LCA1NDUuMzc1NF0sXG4gIFsxMTE0LjU0NTcsIDU0MS41Njk4XSxcbiAgWzExMTkuMzA4OCwgNTM4LjA4NDJdLFxuICBbMTEyMy41MTYxLCA1MzQuODkyNl0sXG4gIFsxMTI3LjM3ODQsIDUzOC4wMTc2XSxcbiAgWzExMzIuMjg4OCwgNTM2LjQ5NDU3XSxcbiAgWzExMzMuNzQ1OCwgNTMyLjE0NjM2XSxcbiAgWzExMzcuMzI1NywgNTI4Ljk4NzU1XSxcbiAgWzExMjcuODUyNSwgNTMyLjAwMTldLFxuICBbMTEzMC44NjkzLCA1MjcuNzMwODNdLFxuICBbMTEzNC44NzMsIDUyNC4yMDAxXSxcbiAgWzExMzcuNDMsIDUxOS42MDY0XSxcbiAgWzExNDIuMzc1OSwgNTE5LjY2NTddLFxuICBbMTE0Ni42MjEyLCA1MTcuMzQ4Nl0sXG4gIFsxMTUwLjEzODQsIDUxNC4zNzk2XSxcbiAgWzExNTQuMDQ4OCwgNTE3LjExNjMzXSxcbiAgWzExNTEuMTM0NSwgNTIwLjcwNTkzXSxcbiAgWzExNDYuNDY3OCwgNTIyLjg3OTY0XSxcbiAgWzExNTEuNjM2NSwgNTI2LjE4OTE1XSxcbiAgWzExNTYuMDcyNiwgNTIzLjE5NTNdLFxuICBbMTE1OC4yOTA2LCA1MTkuMjIxOV0sXG4gIFsxMTYyLjYyNjIsIDUxOS44ODhdLFxuICBbMTE2Mi4zNzcsIDUxNS4yMDI5XSxcbiAgWzExNjMuNzgwOSwgNTEwLjUyMzM4XSxcbiAgWzExNjcuMTM5NiwgNTEyLjEyNDRdLFxuICBbMTE2Ni42NTIzLCA1MTYuMzE2MzVdLFxuICBbMTE3MS4zMTUxLCA1MTMuOTQ0XSxcbiAgWzExNzAuNzk0NCwgNTEwLjE3MjU1XSxcbiAgWzExNjcuNjg5NSwgNTA3LjQzNDRdLFxuICBbMTE2OC44MzUsIDUwMy4yOTYyXSxcbiAgWzExNzAuNzYyNiwgNDk5LjM4NjFdLFxuICBbMTE3NC43MzcyLCA0OTguNjI5Nl0sXG4gIFsxMTcwLjQ4NjYsIDQ5NC42NDkzNV0sXG4gIFsxMTY2LjY2NzYsIDQ5OC4xOTY2Nl0sXG4gIFsxMTY0LjIxNjIsIDQ4OC4wNDQzXSxcbiAgWzExNjAuMDg3OSwgNDg4LjQyMTg0XSxcbiAgWzExNjQuMjM2MiwgNDgzLjMxMjM1XSxcbiAgWzExNjguNTMzMiwgNDg1LjMwMjk1XSxcbiAgWzExNzMuMzcxNSwgNDg0LjY5MDJdLFxuICBbMTE2OS44NjE1LCA0ODAuMDIxMzZdLFxuICBbMTE3NC4zNzI2LCA0NzYuOTU1NV0sXG4gIFsxMTc5LjAzMSwgNDc0LjAwNzc1XSxcbiAgWzExODMuMjMwNSwgNDc2LjYxNzY4XSxcbiAgWzExODIuMTI0NiwgNDgzLjI4MjkzXSxcbiAgWzExNzcuNjY3LCA0ODEuNDE1XSxcbiAgWzExNzcuODM5NywgNDg3LjcxMDMzXSxcbiAgWzExODIuNjkyOSwgNDg4LjQxMzRdLFxuICBbMTE4NS43MjQ0LCA0OTIuMjIwOF0sXG4gIFsxMTg3LjQ3NjgsIDQ4NS41OTI4Nl0sXG4gIFsxMTg2LjQzODIsIDQ4MC41NjUyNV0sXG4gIFsxMTkwLjc0NzMsIDQ4MS41NzUxNl0sXG4gIFsxMTkzLjE3NTksIDQ4NS4wNjY5Nl0sXG4gIFsxMTk3Ljk5NzksIDQ4NC4xMzEyM10sXG4gIFsxMjAwLjA2NTksIDQ3OS45ODQzOF0sXG4gIFsxMTk0LjgzNzgsIDQ3OC44NTcxMl0sXG4gIFsxMTg4Ljc4ODUsIDQ3NS4zMzA1XSxcbiAgWzExOTAuNDE1OCwgNDY5LjgxNTU1XSxcbiAgWzExOTQuNDIyNywgNDczLjgwOTAyXSxcbiAgWzExOTYuODgzNSwgNDY5LjU4Ml0sXG4gIFsxMjAzLjI4MDYsIDQ2OS40NDU5OF0sXG4gIFsxMjAwLjM3NDMsIDQ3NC4zNDc1M10sXG4gIFsxMjA0LjMyNTksIDQ3Ny42OTk5XSxcbiAgWzEyMDkuMTI0NiwgNDc5LjIwOTFdLFxuICBbMTIwNy43MjM5LCA0NzMuNjA1MzVdLFxuICBbMTIwOS41OTQ1LCA0NjYuODIxNl0sXG4gIFsxMjE1LjI2NjgsIDQ2NC42NDE5NF0sXG4gIFsxMjIxLjQ1MDQsIDQ2Ny4zMDVdLFxuICBbMTIyNS41NTY1LCA0NjQuMzEyMDddLFxuICBbMTIzMS4wNTU0LCA0NjIuODAyXSxcbiAgWzEyNDEuMzI3NCwgNDY0Ljg3OTFdLFxuICBbMTIzNi4zMDAzLCA0NjQuMjA5ODRdLFxuICBbMTI0Ni4xMjYsIDQ2OC42MzA2OF0sXG4gIFsxMjUwLjY3NDIsIDQ2OC4zNDk4XSxcbiAgWzEyNTQuOTg0NCwgNDY5LjY3NjE1XSxcbiAgWzEyNjQuNDI4OCwgNDcwLjI2NDFdLFxuICBbMTI2OS44OTgzLCA0NjkuNTA3NjZdLFxuICBbMTI2OC43Mzg4LCA0NzQuNTM4MjddLFxuICBbMTI1OS4zMTU4LCA0NzIuNjg5MDZdLFxuICBbMTI1OS40MDk5LCA0NjYuOTQ4MV0sXG4gIFsxMjQ2Ljg2ODQsIDQ2My43OTRdLFxuICBbMTI0MS44NjI3LCA0NzAuMzk3MV0sXG4gIFsxMjM2LjA3NjQsIDQ3MC4wMDEwN10sXG4gIFsxMjMwLjIyMzEsIDQ2OS4wNTg4XSxcbiAgWzEyMzIuOTUsIDQ4MC43MjYxN10sXG4gIFsxMjQzLjE0NjEsIDQ4Mi44NzI5XSxcbiAgWzEyNDUuMjI3NywgNDg2LjU3OTI4XSxcbiAgWzEyNDcuNjE4NCwgNDkwLjE2NzU0XSxcbiAgWzEyNDcuNjE0NSwgNDk0LjYxMjE1XSxcbiAgWzEyNDMuODkyMywgNTA0LjQxOTk4XSxcbiAgWzEyNDAuMjg1NiwgNTA4LjUzNjk2XSxcbiAgWzEyNDUuNDk1NiwgNTA5LjI1NTA3XSxcbiAgWzEyNDYuMzg2NiwgNTEzLjc5NjRdLFxuICBbMTI1MS4yOTYzLCA1MTIuNDE5OV0sXG4gIFsxMjUyLjE2ODcsIDUxNy42NjE1Nl0sXG4gIFsxMjQ3LjkyMTMsIDUxOC41NDFdLFxuICBbMTI0Mi44MjI0LCA1MTguMzEwODVdLFxuICBbMTI0NC4yOTI4LCA1MjIuODAyMV0sXG4gIFsxMjQ4LjQ3MzUsIDUyNC4zODk3XSxcbiAgWzEyNTIuMjY1MSwgNTIyLjQyNDFdLFxuICBbMTI1NS44Njc3LCA1MjQuODgyNDVdLFxuICBbMTI1Mi4wNzcsIDUyNy44MTk0XSxcbiAgWzEyNDguNjY0LCA1MzAuMzYxMV0sXG4gIFsxMjQ0LjQyMTUsIDUyNy42NTk4XSxcbiAgWzEyNDEuNDk2MywgNTMxLjc2NzY0XSxcbiAgWzEyNDUuODk5OSwgNTMzLjYyOTZdLFxuICBbMTI0My43MDAyLCA1MzcuODg4OF0sXG4gIFsxMjQ3LjExNjgsIDU0MS4wNDU2NV0sXG4gIFsxMjQ5LjkyNDIsIDUzNi42NDk1NF0sXG4gIFsxMjUzLjA3OTYsIDUzMy4zMTYzNV0sXG4gIFsxMjU2LjMxNzYsIDUyOS45ODcyXSxcbiAgWzEyNTkuNDY2NiwgNTI3LjA1MzZdLFxuICBbMTI2My41MzM4LCA1MjYuMDQ5OV0sXG4gIFsxMjY2Ljc3ODEsIDUyOC4yNTA4XSxcbiAgWzEyNjcuMTY0MSwgNTMyLjUyMl0sXG4gIFsxMjcwLjkxMjgsIDUyOS42MzA0M10sXG4gIFsxMjcyLjY4NDEsIDUyNS4zMDQxXSxcbiAgWzEyNjguNDU2NywgNTIzLjkzMDA1XSxcbiAgWzEyNzEuNDEyNiwgNTIwLjM2ODJdLFxuICBbMTI3NC44OTYxLCA1MTguMTE2N10sXG4gIFsxMjc5LjI3MzgsIDUxOC4zNjExXSxcbiAgWzEyODEuNDgxOCwgNTE0LjE2MTVdLFxuICBbMTI4MS4xNTk3LCA1MDkuNDM5MjddLFxuICBbMTI3Ny40MDQ1LCA1MDkuNDI5MzhdLFxuICBbMTI3My4zMTQyLCA1MTAuMzgwOF0sXG4gIFsxMjY5LjE2NTgsIDUwOC42MTI0M10sXG4gIFsxMjY2LjMxNTgsIDUxMi43NTQyXSxcbiAgWzEyNjEuNDgyOCwgNTE3LjQxN10sXG4gIFsxMjYxLjI2NTUsIDUxMi41Mjg1XSxcbiAgWzEyNjMuOTk3MSwgNTA3LjcyMzk3XSxcbiAgWzEyNjcuNjYzLCA1MDMuNDY0NTRdLFxuICBbMTI2My43MDk3LCA0OTkuODcwMzNdLFxuICBbMTI2Ny45NDE5LCA0OTcuNTk0M10sXG4gIFsxMjcyLjgyMDcsIDQ5OS45NjY4XSxcbiAgWzEyNzMuMzY2NiwgNTA1LjAwMDE4XSxcbiAgWzEyNzguNTE1NSwgNTA0LjU4MjQ2XSxcbiAgWzEyODMuMDY2OCwgNTA1LjU1MDVdLFxuICBbMTI4Ni44NjM5LCA1MDQuMjAzMjJdLFxuICBbMTI5MC4zNTYxLCA1MDIuMjU4NDhdLFxuICBbMTI5Mi43MTkxLCA0OTcuODMwMzhdLFxuICBbMTI4OC4wNzUyLCA0OTUuMzY1MV0sXG4gIFsxMjg0LjI5OTcsIDUwMC41OTM0OF0sXG4gIFsxMjgxLjgzNCwgNDk2LjU4MDI2XSxcbiAgWzEyNzguMzk3LCA1MDAuMDYxMjVdLFxuICBbMTI3Ni41Nzk4LCA0OTUuMDc0N10sXG4gIFsxMjcxLjk0MTQsIDQ5NC4xODA0Ml0sXG4gIFsxMjY4LjIxMzcsIDQ5MS4xNTI0XSxcbiAgWzEyNzMuMTE4NywgNDc3Ljc0MThdLFxuICBbMTI3OC4wODc5LCA0NzcuODQxNV0sXG4gIFsxMjc1LjA1MDcsIDQ3Mi45Nzk3NF0sXG4gIFsxMjc5LjY2OTIsIDQ3MC40NjEyNF0sXG4gIFsxMjg0LjUzNjQsIDQ3MS4zNTIxXSxcbiAgWzEyODkuODg0NSwgNDcyLjQ0MTFdLFxuICBbMTI5Ny44NzE1LCA0ODAuMDMxMV0sXG4gIFsxMzAwLjc0MjksIDQ4NS40MDg4XSxcbiAgWzEzMDUuMTEwMSwgNDg5LjIyMDI4XSxcbiAgWzEzMDMuOTIwMywgNDk1LjYxNDQ0XSxcbiAgWzEyOTguMzc0OCwgNDk3LjEyODVdLFxuICBbMTI5OS43NzM2LCA0OTEuNjExNDJdLFxuICBbMTI5My45ODgzLCA0OTIuODYxMTVdLFxuICBbMTI5NS41MDEyLCA0ODYuODMwNjNdLFxuICBbMTI5MS40NjQ4LCA0ODMuMzM0OV0sXG4gIFsxMjg4LjQ3NTMsIDQ3OS4yMTc4Nl0sXG4gIFsxMjg1LjcxOTgsIDQ3NS45MzI1XSxcbiAgWzEyODEuMTM0LCA0NzUuMjcwOTRdLFxuICBbMTI5My4xMjk1LCA0NzcuMDQzOF0sXG4gIFsxMzA1LjM2NjUsIDQ4Mi40NTUzXSxcbiAgWzEzMTIuOTkxMywgNDgzLjQ2ODMyXSxcbiAgWzEzMDkuNjEwMSwgNDg2Ljc0ODE0XSxcbiAgWzEzMDkuMzM4MSwgNDkzLjUzOTEyXSxcbiAgWzEzMTMuODcxMSwgNDkxLjAwNDU4XSxcbiAgWzEzMjUuMDU5OCwgNDkyLjgxMTI4XSxcbiAgWzEzMjcuMjkwMiwgNDk2LjY1NzA3XSxcbiAgWzEzMjcuMDAwMiwgNTAwLjcxNjk4XSxcbiAgWzEzMzEuNzQyNywgNDk2LjY5MjMyXSxcbiAgWzEzMjkuNzE4MywgNDkyLjU1NzddLFxuICBbMTMzMy44NDcsIDQ5Mi40NjY1XSxcbiAgWzEzMzMuMzQ4OCwgNTAwLjQ0NDNdLFxuICBbMTMzMC43NDU3LCA1MDQuMzg4XSxcbiAgWzEzMzAuMzExNSwgNTA4LjkxMjU3XSxcbiAgWzEzMjguNjQ2NiwgNTEyLjg3MDFdLFxuICBbMTMzMy4zMzg0LCA1MTMuODkxOV0sXG4gIFsxMzM1LjkxNTQsIDUxNy44Mjk2NV0sXG4gIFsxMzM4LjczMDUsIDUyMS41ODQ5Nl0sXG4gIFsxMzQxLjEyOTYsIDUyNS4xNzczN10sXG4gIFsxMzQ0Ljc2OTMsIDUyNi40MTk0XSxcbiAgWzEzNDguMzY4MiwgNTI4LjU1MTddLFxuICBbMTM0OC43NDAyLCA1MjMuNjUxMzddLFxuICBbMTM0OS4xLCA1MTguNzk3MDZdLFxuICBbMTM0Ni4zNDU1LCA1MTUuMzI1MV0sXG4gIFsxMzQzLjE5NywgNTEyLjI5NzRdLFxuICBbMTMzOC4zNDIsIDUxMy41NTUyXSxcbiAgWzEzNDEuMzkzNywgNTE3LjE3NTJdLFxuICBbMTM0NC40Mjc1LCA1MjAuNjgwNF0sXG4gIFsxMzUyLjkwMDYsIDUyMS4xMTgzXSxcbiAgWzEzNTMuOTAyMSwgNTI1LjcwNTkzXSxcbiAgWzEzNTIuMTQyNiwgNTMwLjIzN10sXG4gIFsxMzQ5Ljg1ODQsIDUzMy4zNTc2N10sXG4gIFsxMzU0LjM1MTcsIDUzNC43NzUxXSxcbiAgWzEzNTcuNjczMywgNTM4LjIxMDc1XSxcbiAgWzEzNjIuNTYzOCwgNTM4LjY1MzFdLFxuICBbMTM2MC4zOTMzLCA1NDIuNzk4MDNdLFxuICBbMTM2Mi41MjYxLCA1NDcuMzM4ODddLFxuICBbMTM2Ny44NDczLCA1NDcuOTE2OV0sXG4gIFsxMzcxLjQzMTksIDU0NC45MTkyNV0sXG4gIFsxMzY5LjM0MjksIDU1My4xMDcyNF0sXG4gIFsxMzY0Ljg1NjMsIDU1MS44NDg0XSxcbiAgWzEzNTcuNTEyMywgNTQ2LjU5Njg2XSxcbiAgWzEzNTUuNTk5LCA1NDIuNTM0NjddLFxuICBbMTM1Mi45MjE2LCA1MzkuMDE2N10sXG4gIFsxMzQ4LjgyOTEsIDU0MC41NzAzXSxcbiAgWzEzNDkuMTY1LCA1MzYuODQ2MjVdLFxuICBbMTM0NC43Nzc2LCA1MzUuNjkwN10sXG4gIFsxMzQ1LjI2ODYsIDUzOS4zMzczNF0sXG4gIFsxMzQ0LjA5MjMsIDU0Mi43NDMxXSxcbiAgWzEzNDAuOTc0NywgNTQxLjg1XSxcbiAgWzEzMzcuNjY5MiwgNTQwLjMyMDddLFxuICBbMTM0MS4xNDMzLCA1MzguMDE2MzZdLFxuICBbMTM0MC43NjYyLCA1MzQuMTE0OF0sXG4gIFsxMzQ1Ljk1MDcsIDUzMi4yMjFdLFxuICBbMTM0Mi42NTY1LCA1MzAuMTE5XSxcbiAgWzEzMzguNjE1NywgNTI5LjcwNjRdLFxuICBbMTMzNi45OTU4LCA1MjYuMTEyXSxcbiAgWzEzMzMuMzE5MSwgNTI2LjkxMDNdLFxuICBbMTMzNC4xNzI0LCA1MjIuNjM1MTNdLFxuICBbMTMzMS40NDMxLCA1MTkuNzQwMV0sXG4gIFsxMzI4LjkwODQsIDUxNi45MzE2XSxcbiAgWzEzMjMuNzMzNiwgNTEzLjQzOThdLFxuICBbMTMyNS4xNzExLCA1MDkuMjc2NzNdLFxuICBbMTMyNC40ODEzLCA1MDQuNzAyNl0sXG4gIFsxMzIyLjA5NjksIDQ5Ny4xMzQxXSxcbiAgWzEzMTkuOTgxNiwgNTAxLjQ0Mjg3XSxcbiAgWzEzMTQuOTQzNywgNTAzLjI3MTQyXSxcbiAgWzEzMTMuMTU5NywgNTA4LjQzNTA2XSxcbiAgWzEzMTkuNzgzNCwgNTA4LjQwMzkzXSxcbiAgWzEzMjQuNjQ1MSwgNTE4LjExODA0XSxcbiAgWzEzMjYuNzU5NiwgNTIxLjkzMjFdLFxuICBbMTMyOS44NDI4LCA1MjQuNTAxXSxcbiAgWzEzMzAuMzk2NiwgNTI5LjUzODc2XSxcbiAgWzEzMjcuNzEzNSwgNTMyLjQ2MDQ1XSxcbiAgWzEzMjcuMDczLCA1MjcuNjI1OV0sXG4gIFsxMzIzLjgwMTUsIDUyNS44Njg1XSxcbiAgWzEzMjEuNzc1NCwgNTIyLjg3NzZdLFxuICBbMTMyMC4xNzc3LCA1MTguOTk2M10sXG4gIFsxMzE5LjgzMjUsIDUxNC44NzI3XSxcbiAgWzEzMTYuMzk5OSwgNTEyLjAwMjZdLFxuICBbMTMxNS4xNDczLCA1MTYuNzYzMV0sXG4gIFsxMzEyLjk5NzgsIDUyMS44ODg0XSxcbiAgWzEzMTcuMjY5MywgNTIyLjM4MzU0XSxcbiAgWzEzMTUuMDU1NSwgNTI3LjEzNjM1XSxcbiAgWzEzMTAuNTUzNiwgNTI3LjgwODY1XSxcbiAgWzEzMDguODk0LCA1MjMuOTkwM10sXG4gIFsxMzA1LjA0MTMsIDUyNy4wNDI2Nl0sXG4gIFsxMzAyLjU1ODcsIDUzMi4yNjk2NV0sXG4gIFsxMzA3LjYxNTEsIDUzMS40NDAyNV0sXG4gIFsxMzEyLjU3NjQsIDUzMi4yMDk1M10sXG4gIFsxMzE5LjUwMjksIDUyNy43MjAzNF0sXG4gIFsxMzIxLjg4MTMsIDUzMy40Mzg3XSxcbiAgWzEzMjMuNzExOCwgNTMwLjE1NDJdLFxuICBbMTMxNy42MjcxLCA1MzIuNDYxMl0sXG4gIFsxMzE5LjM3MjQsIDUzOC4wMjgzXSxcbiAgWzEzMjQuMjkzOCwgNTM2LjY0MTFdLFxuICBbMTMyNy4zNTczLCA1NDQuNTA4NF0sXG4gIFsxMzMxLjAwNzYsIDU0NS45NjMyNl0sXG4gIFsxMzM0LjU5NDUsIDU0Mi45NzMxNF0sXG4gIFsxMzM1LjI2MjIsIDU0Ny4xMzU2XSxcbiAgWzEzMzYuMTMyNiwgNTM3LjMyODVdLFxuICBbMTMzNi44MDI3LCA1MzMuNTI4Ml0sXG4gIFsxMzMzLjg3NSwgNTMxLjA5MjA0XSxcbiAgWzEzMzIuMzc5NCwgNTM1LjMwNjddLFxuICBbMTMzMS45MzMxLCA1NDAuMzMyNF0sXG4gIFsxMzI4LjYzOTQsIDUzNi4yMTNdLFxuICBbMTMyNy43MjA4LCA1NDAuMDk1XSxcbiAgWzEzMjMuMTk3NSwgNTQxLjIzM10sXG4gIFsxMzE5LjI0NjEsIDU0My44MDU5XSxcbiAgWzEzMTUuNjA3NCwgNTQxLjI5MDJdLFxuICBbMTMxMS44MzA4LCA1NDIuMTM0NjRdLFxuICBbMTMxMC45ODA4LCA1NDYuMjA3NV0sXG4gIFsxMzExLjcyNjMsIDU1MC4xNjU0N10sXG4gIFsxMzExLjk4NTIsIDU1My42OTAzN10sXG4gIFsxMzEyLjQwNjIsIDU1Ny4zNzddLFxuICBbMTMxMy44Mzc5LCA1NjAuOTk4MDVdLFxuICBbMTMxNS4wMzQzLCA1NjUuMjY4N10sXG4gIFsxMzE3Ljc1NzYsIDU2OC45NTk4XSxcbiAgWzEzMTcuNjE2MywgNTcyLjk5MDg0XSxcbiAgWzEzMjIuNjczMywgNTcxLjk2NTRdLFxuICBbMTMyMC45ODkxLCA1NzUuNzU2XSxcbiAgWzEzMjEuMjg3LCA1NzkuOTgxM10sXG4gIFsxMzE3LjYzNjYsIDU4MS42MDk1XSxcbiAgWzEzMjEuMjI0NywgNTg0LjQ2NzVdLFxuICBbMTMyNC4zMjU3LCA1ODcuMzA0XSxcbiAgWzEzMjguMjM0MSwgNTg3LjQ4NTVdLFxuICBbMTMzMS4zMTczLCA1ODUuODEwNjddLFxuICBbMTMzNC42NDAzLCA1ODQuMzMyMl0sXG4gIFsxMzM2Ljk1ODEsIDU4MS4wNDYzXSxcbiAgWzEzMzIuNDQ3OSwgNTgxLjIzNDZdLFxuICBbMTMzMy40NDYsIDU3Ny43NTU3NF0sXG4gIFsxMzM3LjA5NTgsIDU3Ni4yMDc5XSxcbiAgWzEzMjguOTksIDU3OC4zOTIzM10sXG4gIFsxMzI4Ljk5OCwgNTgyLjc4NTE2XSxcbiAgWzEzMjUuNDEyNiwgNTg0LjA3NTNdLFxuICBbMTMyNS4zODc4LCA1ODAuNjYwNzddLFxuICBbMTMyNC44MDIyLCA1NzYuOTg5MjZdLFxuICBbMTMyNi43MzAyLCA1NzMuNTg3MTZdLFxuICBbMTMzMC40NzkxLCA1NzQuNzA2OF0sXG4gIFsxMzM0LjE4NjgsIDU3My42MTY1XSxcbiAgWzEzNDAuNzk0MywgNTc0LjUxMzU1XSxcbiAgWzEzNDQuMDIzOSwgNTcyLjEyMTc3XSxcbiAgWzEzNDAuMjEwNywgNTc4LjgxMzFdLFxuICBbMTMzNy45NDE1LCA1ODUuOTkxOF0sXG4gIFsxMzQwLjc5NzUsIDU4My45NDhdLFxuICBbMTM0My4zNjIzLCA1ODAuNzc4NDRdLFxuICBbMTM0OS44NzgsIDU4NC4yNTE3XSxcbiAgWzEzNTIuMDQ0NCwgNTgwLjE3MTJdLFxuICBbMTM0Ny40NjQ1LCA1ODAuMjEyMTZdLFxuICBbMTM0NC43Nzc4LCA1NzYuNDgwOTZdLFxuICBbMTM0OS42MzIzLCA1NzYuMDk0OV0sXG4gIFsxMzU2Ljc3NTQsIDU4MC4wNDk3XSxcbiAgWzEzNTQuNjE3OSwgNTc2LjA2N10sXG4gIFsxMzU2LjkzNzksIDU3MS41MTE5XSxcbiAgWzEzNjEuNjQ0NCwgNTcwLjkxNjE0XSxcbiAgWzEzNTkuNjczMSwgNTY3LjAwNThdLFxuICBbMTM1OC45NjM2LCA1NjIuOTMwODVdLFxuICBbMTM1Ni41NzU0LCA1NTkuNTA5M10sXG4gIFsxMzU3LjMyMTksIDU1NS41NTU0XSxcbiAgWzEzNjEuNTA0OSwgNTU4LjQ1NDk2XSxcbiAgWzEzNjEuNTcwOSwgNTU0LjAxMjk0XSxcbiAgWzEzNTguNTM5MSwgNTUwLjgzNzE2XSxcbiAgWzEzNTMuOTAyMiwgNTUzLjQ3NDM3XSxcbiAgWzEzNTIuNjE5OCwgNTU3Ljc3NDldLFxuICBbMTM0OS42Njc1LCA1NTUuMTI0OV0sXG4gIFsxMzQ2LjIwMzQsIDU1NC4yOTMzXSxcbiAgWzEzNDYuNTEzNSwgNTUwLjIwMzg2XSxcbiAgWzEzNTQuMTI2NywgNTQ5LjczNjNdLFxuICBbMTM1Mi44OTk5LCA1NDYuNDA5MjRdLFxuICBbMTM1MS4yOTA0LCA1NDMuMTg1OF0sXG4gIFsxMzUwLjE3NjUsIDU1MC45MTIxXSxcbiAgWzEzNDkuMDU2NSwgNTQ3LjA1NjldLFxuICBbMTM0Ny4yNDQ5LCA1NDMuODc4NTRdLFxuICBbMTM0NS4wMDk0LCA1NDYuODIwN10sXG4gIFsxMzQxLjY1MzgsIDU0NS44MTgxXSxcbiAgWzEzMzguMjUzOSwgNTQ0LjU3OF0sXG4gIFsxMzI5LjU5MDcsIDU1MC40NDIxNF0sXG4gIFsxMzMzLjMwOCwgNTUwLjY4Mjc0XSxcbiAgWzEzMzcuNDg1NiwgNTUxLjYwMDM0XSxcbiAgWzEzMzUuMTcwNCwgNTU0LjYzODVdLFxuICBbMTMzMy43NzA5LCA1NTguNDg3ODVdLFxuICBbMTM0MC45ODEsIDU2NC43OTNdLFxuICBbMTM0Mi4yMDAxLCA1NjAuNTU2NF0sXG4gIFsxMzQ1LjIzMTIsIDU1Ny44OTU3NV0sXG4gIFsxMzQ5LjIwMzksIDU2MC4yMTU3XSxcbiAgWzEzNTMuNzEyMiwgNTYyLjY4MjZdLFxuICBbMTM1NC43MTI2LCA1NjcuMTQyMl0sXG4gIFsxMzQ5Ljk5NDksIDU2OC42MTU2XSxcbiAgWzEzNDkuODE3MSwgNTY0LjcxMTg1XSxcbiAgWzEzNDUuNTY5NiwgNTYzLjE1MjJdLFxuICBbMTM0NS41MDg1LCA1NjcuNTc0XSxcbiAgWzEzNTIuNTA0MiwgNTcyLjA1OTNdLFxuICBbMTM0Ny44MzI1LCA1NzIuMTc2NjRdLFxuICBbMTM0MS40MjM2LCA1NjkuMDI1NDVdLFxuICBbMTMzOC4xODc1LCA1NzEuNDA1MV0sXG4gIFsxMzM0LjM5NSwgNTY5LjgzNzE2XSxcbiAgWzEzMzcuMTAyOSwgNTY2Ljc5MzNdLFxuICBbMTMzNC43NjQ2LCA1NjMuMjc0MV0sXG4gIFsxMzM3Ljg5MzgsIDU2MS4yMjY5XSxcbiAgWzEzMzkuMTA0OSwgNTU3LjQxMjFdLFxuICBbMTM0MC44Nzc3LCA1NTQuNDI3XSxcbiAgWzEzNDMuNDk5MSwgNTUyLjU1NzU2XSxcbiAgWzEzNDIuMjg3NywgNTQ5LjY3ODM0XSxcbiAgWzEzMzkuMDgzOSwgNTQ4LjY3NDc0XSxcbiAgWzEzMjguNzY0MywgNTU5LjU0NDNdLFxuICBbMTMyOS44Mzg5LCA1NTQuOTUzNl0sXG4gIFsxMzI1LjM4MTMsIDU1Ni40NzUzNF0sXG4gIFsxMzIzLjM3NzksIDU2MS4yNDYxXSxcbiAgWzEzMjYuMzc4OSwgNTY0LjM0NDJdLFxuICBbMTMzMC43NjQzLCA1NjIuODQyMV0sXG4gIFsxMzMxLjU0NjQsIDU2Ni43MTM4N10sXG4gIFsxMzMwLjI2NjgsIDU3MC42NDIzM10sXG4gIFsxMzI2LjY2ODUsIDU2OC43NDEyXSxcbiAgWzEzMjIuNDY2NiwgNTY3Ljc3OTk3XSxcbiAgWzEzMTkuOTA0MiwgNTY0LjkxODFdLFxuICBbMTMxOC41Mzk3LCA1NjEuMTE4MDRdLFxuICBbMTMxNi42NTQ5LCA1NTcuMTg5NDVdLFxuICBbMTMyMC43ODQ4LCA1NTYuNjkzN10sXG4gIFsxMzIyLjIyNjYsIDU1Mi4zODMzXSxcbiAgWzEzMjUuOTgzMywgNTUwLjQzMTZdLFxuICBbMTMyMy40MTQzLCA1NDYuNDMyNV0sXG4gIFsxMzE5LjQwMywgNTQ4Ljc5NzJdLFxuICBbMTMxNS4yNzQyLCA1NDYuODkxODVdLFxuICBbMTMxNi43MDU5LCA1NTIuNTMyN10sXG4gIFsxMzA4LjEyMzIsIDU1Ni40MDQ1NF0sXG4gIFsxMzA2LjkxMzUsIDU1Mi41NzIxXSxcbiAgWzEyOTguNDM1MywgNTUyLjI0MzNdLFxuICBbMTI5My4wMDM0LCA1NTQuMjI2N10sXG4gIFsxMjg4LjczNDksIDU0OS45NzgxNV0sXG4gIFsxMjkyLjI0OTgsIDU0Ny42NzY5XSxcbiAgWzEyOTUuMTY4NSwgNTUwLjA5MTFdLFxuICBbMTI5OS40NDQxLCA1NDcuNTEyOTRdLFxuICBbMTI5NS42ODk1LCA1NDQuNzExOF0sXG4gIFsxMjk2LjU3MDYsIDU0MC4yNDQ0NV0sXG4gIFsxMzAwLjQ2NzgsIDU0Mi4zNDY1Nl0sXG4gIFsxMjkyLjAzMjYsIDU0MC41NDAxNl0sXG4gIFsxMjg5Ljc5ODUsIDU0NC4xOTY4NF0sXG4gIFsxMjg1LjExMTYsIDU0NS4yMDEyM10sXG4gIFsxMjgxLjExLCA1NDEuMzE2M10sXG4gIFsxMjg2LjE3NTksIDUzOS44ODA4Nl0sXG4gIFsxMjgyLjU5NzgsIDUzNS45NDg4NV0sXG4gIFsxMjc3Ljg3NjUsIDUzNi4zMzgyNl0sXG4gIFsxMjc1LjIyNTEsIDUzOS43NjI0XSxcbiAgWzEyNzYuOTkzNywgNTQ0LjA2NTZdLFxuICBbMTI3Mi4xMzQ4LCA1NDQuNTU2OV0sXG4gIFsxMjcwLjQ4ODgsIDU0MC4xOTVdLFxuICBbMTI2Ny44MTUsIDUzNi42MjU0XSxcbiAgWzEyNzIuMzkwNywgNTM1LjEwOTg2XSxcbiAgWzEyNzQuODU3NywgNTMxLjUyMjk1XSxcbiAgWzEyNzkuMDY3OSwgNTMxLjg3MV0sXG4gIFsxMjgyLjI5MjUsIDUyOS42MDE3NV0sXG4gIFsxMjg0Ljk4MDUsIDUzMS41NDM4XSxcbiAgWzEyODcuMjQwMSwgNTM0LjI5MTVdLFxuICBbMTI4OS44NjE2LCA1MzYuODgyMV0sXG4gIFsxMjkzLjk3MDcsIDUzNS41OTI1XSxcbiAgWzEyOTEuNDU5LCA1MzEuOTAxOV0sXG4gIFsxMjk1LjM1NjEsIDUyOS40Mzc4XSxcbiAgWzEyOTcuNzkxMywgNTMyLjE4OTY0XSxcbiAgWzEyOTguMDU5OCwgNTM2LjIzMzY0XSxcbiAgWzEzMDEuNzY4MSwgNTM3LjQ0MjFdLFxuICBbMTMwNS4yNTM0LCA1MzkuOTY3Ml0sXG4gIFsxMzA2LjM3MTEsIDUzNS40NjA1XSxcbiAgWzEzMTQuNzY5OSwgNTM2LjQ2Mjc3XSxcbiAgWzEzMTAuMzA2MiwgNTM3LjYwODc2XSxcbiAgWzEzMDcuNzkzLCA1NDMuMTExMl0sXG4gIFsxMzAzLjc2MTYsIDU0NS4wMDg4NV0sXG4gIFsxMzA3LjI1OTUsIDU0OC4xMjM0XSxcbiAgWzEzMDMuMTc1MiwgNTQ5LjY2MDJdLFxuICBbMTMwMi4yOTg1LCA1NTMuODY1NjZdLFxuICBbMTMwMy41ODAyLCA1NTcuNjI0OTRdLFxuICBbMTMwMy45OTQsIDU2MS45NTUyXSxcbiAgWzEzMDguMTQ1MSwgNTYwLjQ2MTg1XSxcbiAgWzEzMTAuMzU2OSwgNTYzLjQ4NzddLFxuICBbMTMxMC42NDMsIDU2Ny4zMDI3M10sXG4gIFsxMzEzLjI1MTEsIDU3MC42Njg3XSxcbiAgWzEzMTIuMzYyOCwgNTc1LjAxNTg3XSxcbiAgWzEzMTYuODE1NCwgNTc3LjIxNzgzXSxcbiAgWzEzMTMuNTY4OCwgNTgwLjE0MjddLFxuICBbMTMxMi4xNDY0LCA1ODQuMjc3MV0sXG4gIFsxMzA3LjQzOCwgNTgzLjQyNjQ1XSxcbiAgWzEzMDkuMzA5NCwgNTc5LjEwMDA0XSxcbiAgWzEzMDcuMjY2LCA1NzQuODE0MTVdLFxuICBbMTMwNy45ODEyLCA1NzAuNzA1MjZdLFxuICBbMTMwNS44NzI5LCA1NjYuMDkwOTRdLFxuICBbMTMwMi44NDQ2LCA1NzAuMTYyMjNdLFxuICBbMTMwMi42Mzk4LCA1NzUuMDA1XSxcbiAgWzEyOTguNTIwMywgNTczLjk4MzM0XSxcbiAgWzEyOTQuODE1MywgNTc2Ljk1NzM0XSxcbiAgWzEyOTguOTY2NCwgNTc5LjY4MDY2XSxcbiAgWzEzMDQuMjkxNSwgNTc5LjE3NDU2XSxcbiAgWzEzMDIuNDEyLCA1ODMuNDA0OF0sXG4gIFsxMjk4LjczNDEsIDU4NS45NTQxXSxcbiAgWzEyOTguOTcxMiwgNTkwLjYzMTk2XSxcbiAgWzEyOTcuMTEwNSwgNTk1LjA3MTJdLFxuICBbMTI5My4yNzA4LCA1OTMuMTIyNTZdLFxuICBbMTI4OS4zODYyLCA1OTUuMzE0N10sXG4gIFsxMjg0LjgyNDcsIDU5Ni4wNjc0NF0sXG4gIFsxMjg0Ljc2NTUsIDYwMS44MDk5XSxcbiAgWzEyODguOTUyOCwgNjAwLjU3NjJdLFxuICBbMTI5My40NjUxLCA1OTkuNjkyN10sXG4gIFsxMjk4LjA3MDMsIDU5OS4zMTk0XSxcbiAgWzEzMDIuNjc4LCA2MDEuMTE5M10sXG4gIFsxMzAxLjg5OCwgNjA2LjE2NjhdLFxuICBbMTMwNi4yMzI3LCA2MDQuMzA3ODZdLFxuICBbMTMwNi4wMzEsIDYwOC40MTQ4XSxcbiAgWzEyOTguMzc1LCA2MDMuNjQ1MTRdLFxuICBbMTI5NC44NTQ5LCA2MDUuMjU2N10sXG4gIFsxMjk3LjgwMjQsIDYwOS4wNjQ2XSxcbiAgWzEzMDIuMjYxMSwgNjEwLjg2MTldLFxuICBbMTI5OS4yMDM1LCA2MTMuNjkxMTZdLFxuICBbMTMwNi40NTc1LCA2MTIuODA4NV0sXG4gIFsxMzEwLjM1NjMsIDYyMC4wMzI2XSxcbiAgWzEzMTAuNTE4LCA2MjguMDA5MTZdLFxuICBbMTMyMC4wMTg2LCA2MjMuMzM1MV0sXG4gIFsxMzE2LjcyMzgsIDYyMS4xMDI1XSxcbiAgWzEzMTMuNDMwNywgNjE5LjU5NTY0XSxcbiAgWzEzMTMuOTQ4MiwgNjI0Ljc5Njc1XSxcbiAgWzEzMTguMzE1NCwgNjI3LjkyMDZdLFxuICBbMTMxNi44OTI3LCA2MzMuNjg5MzNdLFxuICBbMTMyMC43MTE1LCA2MzYuOTUwOF0sXG4gIFsxMzIxLjA0NjksIDYzMi4xMDhdLFxuICBbMTMyNS40OTEyLCA2MzIuODExNV0sXG4gIFsxMzI0LjYxNywgNjM3LjEyMDM2XSxcbiAgWzEzMTcuMDcwMSwgNjM4LjQzNzZdLFxuICBbMTMxMy4yMzQ3LCA2MzYuNjMwODZdLFxuICBbMTMxNC40MDQ3LCA2NDEuNTQxMTRdLFxuICBbMTMxOS40MzA5LCA2NDIuMjkwNl0sXG4gIFsxMzIzLjc4MzMsIDY0MS41NDQ5XSxcbiAgWzEzMjguMDg0OCwgNjQ0Ljg2NTk3XSxcbiAgWzEzMzIuNDQ2MywgNjQ0LjQzMzE3XSxcbiAgWzEzMzYuNTY2NywgNjQxLjkxMDVdLFxuICBbMTMzNy4wMDU2LCA2NDYuNDc3N10sXG4gIFsxMzQwLjg5NDMsIDY0NC4xNjI0XSxcbiAgWzEzNDUuMTMzLCA2NDUuODc2ODNdLFxuICBbMTM0OS40NjIsIDY0Ny42NDM5XSxcbiAgWzEzNDkuNTg3NiwgNjQzLjA1MDA1XSxcbiAgWzEzNDkuMzAzMywgNjM4LjQ5OTRdLFxuICBbMTM0NC43NzE1LCA2MzYuMzM2XSxcbiAgWzEzNDUuMDA0LCA2NDEuMTUwM10sXG4gIFsxMzQwLjY3MjQsIDYzOS43NTg4NV0sXG4gIFsxMzQxLjMzODksIDYzMi4wMjM5XSxcbiAgWzEzNDAuNDcwOCwgNjM1LjU4MDNdLFxuICBbMTMzNi42NTksIDYzNy4yNTI5XSxcbiAgWzEzMzMuMTg0OSwgNjM1LjAzMTc0XSxcbiAgWzEzMjkuMDI4MSwgNjM2LjI0Ml0sXG4gIFsxMzI4LjExMDYsIDY0MC40MjczN10sXG4gIFsxMzMyLjU0NywgNjM5LjcyNTM0XSxcbiAgWzEzMzYuNDYzNiwgNjMyLjI2ODJdLFxuICBbMTMzMC4yMTU2LCA2MzIuMDQ0Ml0sXG4gIFsxMzI3LjQzNzcsIDYyOC42MjYwNF0sXG4gIFsxMzIzLjA0NjEsIDYyNy44NzQ1XSxcbiAgWzEzMTQuNzg2NCwgNjI5LjczOTQ0XSxcbiAgWzEzMTIuMDI4NywgNjMyLjUzMDJdLFxuICBbMTMwOS40ODM1LCA2MjMuODc0M10sXG4gIFsxMzA3LjcwNzUsIDYxNy4wMDY5XSxcbiAgWzEzMDYuNDU0MiwgNjIxLjAzMDZdLFxuICBbMTMwMy4yMTc5LCA2MTkuMzcwNl0sXG4gIFsxMjk0Ljk2ODEsIDYyMi4wODkyM10sXG4gIFsxMjkxLjAyNTksIDYyMC4yMzMzXSxcbiAgWzEyODcuNjQ4NywgNjE3LjE5MzddLFxuICBbMTI4Mi4zMjI5LCA2MTQuOTM4OTZdLFxuICBbMTI4Ni45OTksIDYxMi4zMzM4Nl0sXG4gIFsxMjkxLjI5LCA2MTQuNzg3XSxcbiAgWzEyOTUuMTg0MywgNjE3LjUwODY3XSxcbiAgWzEyOTkuNjc3NSwgNjE3LjM1NTk2XSxcbiAgWzEzMDMuNDg4LCA2MTUuNDIwOV0sXG4gIFsxMzEwLjcxMzEsIDYxNC40NTYwNV0sXG4gIFsxMzEzLjc1NTQsIDYxMS4yODI3XSxcbiAgWzEzMTguOTUwNCwgNjE2LjU3MzFdLFxuICBbMTMxNC42NTA2LCA2MTUuNzkzNDZdLFxuICBbMTMwOS43NTk1LCA2MTAuMDYxMV0sXG4gIFsxMzExLjIwNTIsIDYwNi4zNDc5XSxcbiAgWzEzMTguMDYwMiwgNjAzLjk3NTldLFxuICBbMTMxNS42MTc0LCA2MDcuNDYwMl0sXG4gIFsxMzE4LjAzNiwgNjEyLjA5OTFdLFxuICBbMTMxOS45Mzc2LCA2MDguMDM1OV0sXG4gIFsxMzIzLjY1ODksIDYwNi42MTMyXSxcbiAgWzEzMjIuNTY5MSwgNjExLjkxOTU2XSxcbiAgWzEzMjUuNTU5NiwgNjE1LjI0MTddLFxuICBbMTMyNy40MTM2LCA2MTAuODYzNDZdLFxuICBbMTMzMS40NDczLCA2MDcuODkxNV0sXG4gIFsxMzI3LjU5MTgsIDYwNi4wNDE3NV0sXG4gIFsxMzI2LjM1MSwgNjAyLjA3MTA0XSxcbiAgWzEzMzEuNTYxNSwgNjAzLjg1NDhdLFxuICBbMTMzMS4wODg5LCA2MDAuMTMyMl0sXG4gIFsxMzM0LjM2NSwgNTkzLjIxMjRdLFxuICBbMTMzMi42OTU3LCA1OTYuNjk2OF0sXG4gIFsxMzI5LjA2OTUsIDU5NC43MTk3XSxcbiAgWzEzMjQuNTI5MywgNTk0Ljk0Nl0sXG4gIFsxMzI2LjczNTIsIDU5OC4yNzM2XSxcbiAgWzEzMjEuOTA3NywgNjAyLjE2NThdLFxuICBbMTMyMS4yMjAxLCA1OTcuODgwNl0sXG4gIFsxMzIwLjcyMjIsIDU5My41ODEyXSxcbiAgWzEzMTcuMjE1MiwgNTkyLjIxOThdLFxuICBbMTMxNi4wNjc2LCA1OTYuMDU2NjRdLFxuICBbMTMxNi44NTczLCA1OTkuNzc3XSxcbiAgWzEzMTMuNjI0MywgNjAyLjU0MDVdLFxuICBbMTMwOS4zNjUxLCA2MDEuODg5Ml0sXG4gIFsxMzExLjQxMDgsIDU5Ny41MTQ0XSxcbiAgWzEzMDYuNDQ1MywgNTk3Ljk3MjNdLFxuICBbMTMwMS45MjQxLCA1OTYuMDY1MjVdLFxuICBbMTMwMy43NDg4LCA1OTIuMTI1ODVdLFxuICBbMTMwNC40NTc0LCA1ODcuNzQ4NF0sXG4gIFsxMzA5LjUyMjMsIDU4OC4zMDQyNl0sXG4gIFsxMzA4LjA5OTQsIDU5My4xMjQ0NV0sXG4gIFsxMzEyLjU0NjksIDU5Mi42NTMyXSxcbiAgWzEzMTQuNTMzMiwgNTg4LjcwMDg3XSxcbiAgWzEzMTYuNzI5MiwgNTg1LjMyNzhdLFxuICBbMTMxOS42NDI2LCA1ODguNjIwN10sXG4gIFsxMzIzLjI0OSwgNTkwLjU1OTk0XSxcbiAgWzEzMjYuODYzMiwgNTkxLjI5MDE2XSxcbiAgWzEzMzAuODY3NCwgNTkwLjkzMDhdLFxuICBbMTMzNC4wNzU5LCA1ODguNjM3Nl0sXG4gIFsxMzM3LjgxMTYsIDU4OS42MDUzNV0sXG4gIFsxMzM4LjY0OTQsIDU5Mi45MzAxXSxcbiAgWzEzNDIuNDAxMSwgNTkzLjc3Ml0sXG4gIFsxMzQzLjE1OTcsIDU5Ny45MzI1Nl0sXG4gIFsxMzQwLjM4OTksIDYwMS43ODU2NF0sXG4gIFsxMzM4LjA4NzYsIDU5Ni45MjhdLFxuICBbMTMzNS44MTAzLCA2MDAuMzgwM10sXG4gIFsxMzM2LjMzNDEsIDYwNC42NjkwN10sXG4gIFsxMzM2LjExOCwgNjA4LjQwNDddLFxuICBbMTMzOS43MDkxLCA2MDkuOTg0M10sXG4gIFsxMzQ0LjE2NzEsIDYxMC4wMDIzXSxcbiAgWzEzNDEuODYzMywgNjA1Ljk4NzU1XSxcbiAgWzEzMzIuOTk5MywgNjExLjM3MTRdLFxuICBbMTMzMS4wMjk1LCA2MTQuMzY2NDZdLFxuICBbMTMyOS45MTIyLCA2MTcuNzc1Ml0sXG4gIFsxMzM2LjEwMTYsIDYxNy40MjYxXSxcbiAgWzEzMzYuNjEwNywgNjEzLjQ4NjI3XSxcbiAgWzEzNDEuMjAzOSwgNjE0LjM3ODA1XSxcbiAgWzEzNDEuMTczMywgNjE4LjcyNTQ2XSxcbiAgWzEzNDAuMzYwNiwgNjIyLjA4Mzc0XSxcbiAgWzEzNDUuMjI3LCA2MzAuMTQyOF0sXG4gIFsxMzQ4LjI4MTIsIDYzMy42OTMzNl0sXG4gIFsxMzUyLjA3MDQsIDYzMC41MzM1XSxcbiAgWzEzNTYuNjU5MywgNjI4Ljc5MDgzXSxcbiAgWzEzNTkuMjAxMywgNjI0LjQ3NTddLFxuICBbMTM2Mi4wODEsIDYyNi45NDk2XSxcbiAgWzEzNjYuMTI1NywgNjI1Ljg0ODldLFxuICBbMTM2OC42MjgyLCA2MjIuMzQwNl0sXG4gIFsxMzY2Ljk2MiwgNjE4LjE2NjE0XSxcbiAgWzEzNjMuOTI2LCA2MTUuMTk1N10sXG4gIFsxMzY2LjE1NTQsIDYxMS42MDUwNF0sXG4gIFsxMzY2LjkwODIsIDYwNy42MzE5Nl0sXG4gIFsxMzY1Ljg2NiwgNjAzLjczMjldLFxuICBbMTM2OS40NDM0LCA2MDAuNDkyNDNdLFxuICBbMTM3MS45MTMsIDU5Ni45NDg4XSxcbiAgWzEzNzUuOTE5NywgNTk3LjMzMDkzXSxcbiAgWzEzNzkuNTkwNSwgNTk5Ljc4NjRdLFxuICBbMTM4MC42NTc2LCA1OTUuMzA3Ml0sXG4gIFsxMzg0LjU4MDYsIDU5Mi4zMjM0XSxcbiAgWzEzODMuNzgzMiwgNTg4LjA2NTFdLFxuICBbMTM4Ny45NjM5LCA1ODguMTM1OF0sXG4gIFsxMzg0LjQxMjIsIDU4My42OTU5XSxcbiAgWzEzODcuODMyNiwgNTgwLjgzNzY1XSxcbiAgWzEzOTEuMTI1LCA1NzUuODI5MV0sXG4gIFsxMzg3Ljg3MDUsIDU3MC44ODMyXSxcbiAgWzEzODIuMDM5MywgNTY4LjY2OTNdLFxuICBbMTM4Mi40NzU3LCA1NzMuMDg5MV0sXG4gIFsxMzg2LjQ3MywgNTc1Ljc4NzFdLFxuICBbMTM4Mi42NjMyLCA1NzguMjEzMTNdLFxuICBbMTM3OS45OTg1LCA1ODEuMjQxMzNdLFxuICBbMTM3NS44ODI2LCA1NzkuMTEwOF0sXG4gIFsxMzc3Ljk2NjEsIDU3NS4yMjE1XSxcbiAgWzEzNzcuNDE0NCwgNTcwLjUzNTc3XSxcbiAgWzEzNzguMTg1MiwgNTY1LjYyNjgzXSxcbiAgWzEzODEuNjYzLCA1NjIuODUyM10sXG4gIFsxMzg1LjcyNDIsIDU2NS45NzEzXSxcbiAgWzEzOTAuNTQ5LCA1NjUuNjYxOF0sXG4gIFsxMzkzLjIyOCwgNTcwLjM3NDk0XSxcbiAgWzEzOTYuOTgxNiwgNTczLjIyMjddLFxuICBbMTQwMC42OTI2LCA1NzYuNzQ4OF0sXG4gIFsxNDAyLjM2MjUsIDU4MC44ODQ3N10sXG4gIFsxNDA2LjI5MTMsIDU3OS45NDc0XSxcbiAgWzE0MDUuOTEyNywgNTg0LjQ3NTM0XSxcbiAgWzE0MDkuOTkyNiwgNTgzLjg4Mjc1XSxcbiAgWzE0MDEuMzI0NSwgNTg1LjMyODJdLFxuICBbMTQwMC40MTgsIDU4OS43MzEyNl0sXG4gIFsxNDA0Ljg2MiwgNTg4LjkxMV0sXG4gIFsxNDA4Ljk0MzYsIDU4OC4zOTU2XSxcbiAgWzE0MTIuODQxNiwgNTg3LjU5MDQ1XSxcbiAgWzE0MTEuNjE5NCwgNTkxLjg4NThdLFxuICBbMTQwNy42NDM4LCA1OTIuNzMyMl0sXG4gIFsxNDAzLjY0MTcsIDU5My41NTE0XSxcbiAgWzEzOTkuNTY5MSwgNTk0Ljg5MDVdLFxuICBbMTM5Ni40OTk1LCA1OTEuODgxMzVdLFxuICBbMTM5Ni4yNTMsIDU4Ni40MTE3NF0sXG4gIFsxMzk3LjgwODgsIDU4MS43NzkzXSxcbiAgWzEzOTUuNDQ0NiwgNTc3LjY4NDddLFxuICBbMTM5Mi43MzI4LCA1ODEuNDc2M10sXG4gIFsxMzkxLjAwNjYsIDU4NS4zODFdLFxuICBbMTM5Mi42NTUzLCA1ODkuOTgzOTVdLFxuICBbMTM4OS4yODUsIDU5My4yOTFdLFxuICBbMTM4NS45NjY4LCA1OTYuNTE2Nl0sXG4gIFsxMzg0LjM1NzIsIDYwMC4xMzQ0XSxcbiAgWzEzODEuNzg2OSwgNjAzLjk2Njg2XSxcbiAgWzEzNzguODYzNiwgNjA3LjQwNTE1XSxcbiAgWzEzNzUuNTc2NywgNjAyLjc5NjZdLFxuICBbMTM3MS4zMTY0LCA2MDQuODg4MzddLFxuICBbMTM3NC45MjA3LCA2MDguODQwMzNdLFxuICBbMTM3NC41NTQ5LCA2MTQuMzczMTddLFxuICBbMTM3MC45NTgxLCA2MDkuOTQ5Nl0sXG4gIFsxMzY5Ljc0NTQsIDYxNC4yODEwN10sXG4gIFsxMzcxLjY5NTIsIDYxOC4zOTMwN10sXG4gIFsxMzc2LjA0MDMsIDYxOS42NjcxXSxcbiAgWzEzNzkuMTgxMiwgNjE3LjA5NjU2XSxcbiAgWzEzODMuMjAxNCwgNjE5LjMwNzVdLFxuICBbMTM4MS4xMzU3LCA2MjcuNTcwMjVdLFxuICBbMTM3Ny45MTA2LCA2MzAuNzQ2XSxcbiAgWzEzNzYuMjA0MSwgNjM1LjM1OTZdLFxuICBbMTM3MS4yMDgxLCA2MzQuOTkxNzZdLFxuICBbMTM2Ny4yNjA3LCA2MzMuOTM4MjNdLFxuICBbMTM2Ny44NjU4LCA2MzkuMDU5NjNdLFxuICBbMTM2My41MzIsIDY0MS4wODg4N10sXG4gIFsxMzYyLjg3NDUsIDYzNS43Njg2XSxcbiAgWzEzNTguNTk2LCA2MzguNTA4M10sXG4gIFsxMzU5LjI2ODYsIDY0My4zODg3M10sXG4gIFsxMzY3LjEwMjUsIDY0NS4xOTkwNF0sXG4gIFsxMzYzLjAyOTgsIDY0Ny4zMjUxM10sXG4gIFsxMzU4LjQxMDYsIDY0OC40MDEyXSxcbiAgWzEzNTMuNzA3MiwgNjQ5LjI3MTg1XSxcbiAgWzEzNTQuMzg5NiwgNjQ0Ljg2OTRdLFxuICBbMTM1NC4xNDU0LCA2NDAuMzc0NF0sXG4gIFsxMzUzLjEwNiwgNjM1LjY3OTJdLFxuICBbMTM1Ny4zMTM0LCA2MzMuNzYzMl0sXG4gIFsxMzYwLjUzMzQsIDYzMS4xNjk0M10sXG4gIFsxMzY0LjU1MjksIDYzMC42MjA3XSxcbiAgWzEzNjguNTcyOSwgNjI5LjY2ODddLFxuICBbMTM3My4xNSwgNjMwLjU4NjM2XSxcbiAgWzEzNzEuMjM3MywgNjI2LjM4MDFdLFxuICBbMTM3My40MjksIDYyMi44MjY5XSxcbiAgWzEzNzkuNjc4NywgNjIyLjcyMjM1XSxcbiAgWzEzNzYuMjY2NywgNjI2LjM2NjhdLFxuICBbMTM4NC42MDc5LCA2MjQuMzI4NzRdLFxuICBbMTM4OC4yNjA1LCA2MjcuMTI0Ml0sXG4gIFsxMzkwLjcwMTIsIDYyMy40MTA0XSxcbiAgWzEzOTEuNzYyMywgNjE4LjY1ODddLFxuICBbMTM5NS42NjI1LCA2MTYuMzkzNV0sXG4gIFsxMzg3LjM3MzIsIDYyMC40ODgxNl0sXG4gIFsxMzg3LjQzODcsIDYxNS43NTc0XSxcbiAgWzEzODMuMTk1LCA2MTMuOTYwNl0sXG4gIFsxMzc4LjgwMDMsIDYxMi4yODkyNV0sXG4gIFsxMzgzLjU0ODgsIDYwOC42NTEwNl0sXG4gIFsxMzg3LjU2NTcsIDYxMC40MTE0NF0sXG4gIFsxMzkxLjY5NzMsIDYxMy4yMDk3XSxcbiAgWzEzOTUuMjAwNywgNjEwLjI1Mjc1XSxcbiAgWzEzOTEuNDAyMSwgNjA3LjE1OTVdLFxuICBbMTM5My41OTk2LCA2MDIuOTEyNl0sXG4gIFsxMzg3LjUwOTUsIDYwNC4wNDQwN10sXG4gIFsxMzkwLjE3ODYsIDU5OS4zNTc4NV0sXG4gIFsxMzkzLjI1OCwgNTk1LjQ2MzZdLFxuICBbMTM5Ni40MDIyLCA1OTguMzY3OF0sXG4gIFsxMzk4Ljg1NDQsIDYwMS44MjZdLFxuICBbMTM5Ny45MzI2LCA2MDYuMDUwNTRdLFxuICBbMTQwMy4yNTYzLCA2MDMuMDg3M10sXG4gIFsxNDAyLjM5MywgNTk4LjUzMTI1XSxcbiAgWzE0MDYuNDY5NCwgNTk3LjIxMTNdLFxuICBbMTQxMC4zNzk4LCA1OTYuMjk1N10sXG4gIFsxNDE0Ljg5NjksIDU5My4yMDkxN10sXG4gIFsxNDE2LjI1MDksIDU5MC41ODU5XSxcbiAgWzE0MTQuMzQ2OSwgNTk2LjM4MTY1XSxcbiAgWzE0MDcuODY3OSwgNjAxLjAzNjZdLFxuICBbMTQxMi42OTc5LCA1OTkuOTk0M10sXG4gIFsxNDExLjYyNTksIDYwMy44MzgyXSxcbiAgWzE0MDcuMjYxNywgNjA1LjY5MDhdLFxuICBbMTQxMC40MDU1LCA2MDguNzYxMzVdLFxuICBbMTQwNi44NjM0LCA2MTEuOTExMjVdLFxuICBbMTQwMy4wMjg5LCA2MTIuODQ3M10sXG4gIFsxNDAzLjMyMzYsIDYwNy44NTE1Nl0sXG4gIFsxMzk5LjQ1NTEsIDYxMC41Mzk2XSxcbiAgWzEzOTkuNTk4OCwgNjE1Ljg1NTZdLFxuICBbMTQwMC4xNDcyLCA2MjEuNDQzMV0sXG4gIFsxMzk1LjYwNTMsIDYyMi40MDIzNF0sXG4gIFsxMzk4LjkwMTksIDYyNy42MzE1XSxcbiAgWzEzOTMuNzAxNCwgNjI3LjQ1MzldLFxuICBbMTM5NS4wMTcxLCA2MzIuNDIwODRdLFxuICBbMTM5OS43NjI1LCA2MzQuMTE4N10sXG4gIFsxNDAzLjYxNzEsIDYzMC44MDU0XSxcbiAgWzE0MDQuMjEzNywgNjI2LjAyMjhdLFxuICBbMTQwNS41MDQzLCA2MjEuODE4OF0sXG4gIFsxNDA0LjQ0NDEsIDYxNy4xOTQ2XSxcbiAgWzE0MDkuNDA4OSwgNjE4LjMwNzI1XSxcbiAgWzE0MTAuOTc4MywgNjEzLjg5MjFdLFxuICBbMTQxNC45NTQzLCA2MTEuMTA2N10sXG4gIFsxNDE5LjQxOTksIDYxMi4wNjY5XSxcbiAgWzE0MTQuNjk0MSwgNjA2Ljg0NF0sXG4gIFsxNDE2LjY2ODIsIDYwMy4xNjE0XSxcbiAgWzE0MTcuNDg5MSwgNTk5LjEzNjddLFxuICBbMTQxOC4zNDY0LCA1OTUuMDkxMDZdLFxuICBbMTQyMi4yODM4LCA1OTguMzM4MTNdLFxuICBbMTQyMC44ODkyLCA2MDIuMzc4MDVdLFxuICBbMTQyNS4yNjQ5LCA2MDIuMzk5OF0sXG4gIFsxNDI3LjU0NjUsIDU5OS4zMDAzNV0sXG4gIFsxNDI2LjQ5MTUsIDU5NS45NjkyNF0sXG4gIFsxNDMxLjk0NzQsIDU5OC4xMTc5XSxcbiAgWzE0MzcuNDI2NiwgNTk5LjE0NzJdLFxuICBbMTQ0Mi41MjY0LCA2MDEuMzcwNl0sXG4gIFsxNDQyLjc0MjMsIDU5Ny40MjY3XSxcbiAgWzE0NDUuMDMyNywgNTk0LjAyMl0sXG4gIFsxNDQ3LjUzODcsIDU5MC4yNjExXSxcbiAgWzE0NTEuOTEsIDU4OC45NzA3Nl0sXG4gIFsxNDU1LjU5MTIsIDU4NS42NjFdLFxuICBbMTQ1Ni42ODA1LCA1ODkuMzMyMTVdLFxuICBbMTQ1OS43NjMzLCA1OTEuNTM3N10sXG4gIFsxNDYyLjg1NTIsIDU5My4zNjcyXSxcbiAgWzE0NjMuMTA1MSwgNTk3LjcwMTRdLFxuICBbMTQ1OS4xNDg5LCA1OTYuOTM4OTZdLFxuICBbMTQ1NC40ODksIDYwMi4yNjYwNV0sXG4gIFsxNDU0LjE1MywgNTk4LjE0MTZdLFxuICBbMTQ1NS40NDAxLCA1OTMuNjEyMl0sXG4gIFsxNDUwLjYzNzMsIDU5NC40MjY2NF0sXG4gIFsxNDQ4LjE4OTIsIDU5OC42OTI2XSxcbiAgWzE0NTAuNTQzNSwgNjAyLjg1MjU0XSxcbiAgWzE0NDYuMTk4LCA2MDMuNTI4Nl0sXG4gIFsxNDQxLjgyNDcsIDYwNS43NDI5XSxcbiAgWzE0NDEuNzQxNywgNjA5LjkxNjhdLFxuICBbMTQ0NS40ODI5LCA2MDguMjAzODZdLFxuICBbMTQ0OS41Nzc1LCA2MDcuMjI4N10sXG4gIFsxNDQ4LjU2ODEsIDYxMS40MTc0XSxcbiAgWzE0NDcuOTQ2MywgNjE1LjYwOThdLFxuICBbMTQ0NC4xNjA0LCA2MTYuODkxMDVdLFxuICBbMTQ0My4zMTMsIDYyMC42NTI4M10sXG4gIFsxNDM5LjYzLCA2MjEuNjE2N10sXG4gIFsxNDQwLjMzOTcsIDYxOC4wMTg4XSxcbiAgWzE0NDEuMDI2NiwgNjE0LjM0MDc2XSxcbiAgWzE0NDQuNzI3NSwgNjEyLjc3NTNdLFxuICBbMTQ1MS45MzcsIDYxNC41NTYyXSxcbiAgWzE0NDcuNDM2OSwgNjE5LjUwNl0sXG4gIFsxNDQ1LjcyMzQsIDYyMy4zNTAyXSxcbiAgWzE0NDcuOTkwOCwgNjI2LjI0MDg0XSxcbiAgWzE0NTAuMjY3LCA2MjIuMzc2Ml0sXG4gIFsxNDUxLjgyNywgNjE4LjY1ODFdLFxuICBbMTQ1Ni4xMDU3LCA2MTYuNzA4NTZdLFxuICBbMTQ2MC41MjcxLCA2MTQuNDQzN10sXG4gIFsxNDYwLjMwNzYsIDYxOS4wNDddLFxuICBbMTQ2NC44NjU3LCA2MTkuNTE0NjVdLFxuICBbMTQ2My41MTY3LCA2MjMuMTM2OV0sXG4gIFsxNDYyLjE1MTEsIDYyNy4wODc3N10sXG4gIFsxNDY0LjQxMzYsIDYzMC45MTg5XSxcbiAgWzE0NjguNjA1OCwgNjMwLjc3N10sXG4gIFsxNDY3LjcwNzksIDYzNS4zNzc1XSxcbiAgWzE0NjguOTc0LCA2NDAuMzIxNF0sXG4gIFsxNDcyLjE0MTEsIDYzNy4xODQyXSxcbiAgWzE0NzYuMTQyLCA2MzkuMDA5M10sXG4gIFsxNDc0LjM4MywgNjQyLjgzMDRdLFxuICBbMTQ3OC40MDY2LCA2NDUuMzk3MDNdLFxuICBbMTQ3OC43NDc2LCA2NTAuODM2NF0sXG4gIFsxNDgyLjc4MTYsIDY1Mi40Nzg0XSxcbiAgWzE0ODEuNTMzOSwgNjU3LjQzODM1XSxcbiAgWzE0NzUuNTI0MywgNjU0LjA2NjY1XSxcbiAgWzE0NzMuODQ0MiwgNjQ4LjQ3OTI1XSxcbiAgWzE0NzAuMzQ2LCA2NDUuMjIxMV0sXG4gIFsxNDY3LjQ3NzMsIDY0OS40OTI0XSxcbiAgWzE0NzAuODIzNSwgNjUzLjI1NF0sXG4gIFsxNDU4Ljc1MTcsIDY1NS4yOTg3XSxcbiAgWzE0NjEuMjcyMywgNjUwLjE5MDVdLFxuICBbMTQ2Mi42MjUsIDY0Ni42OTI1N10sXG4gIFsxNDY1Ljg1MjIsIDY0My45ODUyXSxcbiAgWzE0NjAuNTE3NiwgNjQyLjgzMTNdLFxuICBbMTQ2My42NjA5LCA2MzkuMjQ0MTRdLFxuICBbMTQ2Mi44MjAxLCA2MzQuODU3N10sXG4gIFsxNDU4LjQzODUsIDYzNS4yMDU1N10sXG4gIFsxNDU5LjU0NTcsIDYzMC42MDMxXSxcbiAgWzE0NTkuMTE5OCwgNjIzLjczNDVdLFxuICBbMTQ1Ni4yNzM2LCA2MjcuMjI5OV0sXG4gIFsxNDUyLjU3MzYsIDYyNS4zOTYyXSxcbiAgWzE0NTUuNDY5LCA2MjEuNDU4NV0sXG4gIFsxNDUxLjQxNzQsIDYyOS41NTY3Nl0sXG4gIFsxNDU1LjAxODYsIDYzMi4wODc2NV0sXG4gIFsxNDUwLjM2MjMsIDYzMy44OTk2Nl0sXG4gIFsxNDQ3LjM2MTgsIDYzNy43NTQ1XSxcbiAgWzE0NDMuMDMzOSwgNjQwLjY5MDZdLFxuICBbMTQ0Mi42MDA4LCA2MzYuNDg3MzddLFxuICBbMTQzOC44MjY3LCA2MzUuMjY4N10sXG4gIFsxNDM2LjE4MjUsIDYzMi42NzUzNV0sXG4gIFsxNDQyLjQxNTUsIDYzMi4wMjA0XSxcbiAgWzE0NDYuMjE1MSwgNjMzLjYxODNdLFxuICBbMTQ0Ni45MzUzLCA2MjkuODk1Ml0sXG4gIFsxNDQzLjQyMSwgNjI3Ljc2NjFdLFxuICBbMTQ0MS43MDQ3LCA2MjQuNzQzNDddLFxuICBbMTQzNy43MzM1LCA2MjQuOTg3MzddLFxuICBbMTQzOS4zMzkxLCA2MjkuNDM1MzZdLFxuICBbMTQzNS42NTUsIDYyNy45NTE5N10sXG4gIFsxNDMyLjA3MjMsIDYyNy41Nzg1NV0sXG4gIFsxNDMyLjg3LCA2MzEuNTYwOV0sXG4gIFsxNDI5LjA1NzcsIDYzMi4wMTY3XSxcbiAgWzE0MjQuNTcyMywgNjI5Ljk1OTJdLFxuICBbMTQyOC4zMjg3LCA2MjguMzIxMV0sXG4gIFsxNDI5LjY2OTQsIDYyNC40NTc3Nl0sXG4gIFsxNDI3Ljk4MzUsIDYyMS4zNl0sXG4gIFsxNDI3LjgwMTYsIDYxNy40NDZdLFxuICBbMTQyNC41MzMyLCA2MTQuMjkyOF0sXG4gIFsxNDIzLjk0MDksIDYxMC4xMjcyNl0sXG4gIFsxNDMyLjA3NSwgNjE5LjA4OTddLFxuICBbMTQyOS44MjQ3LCA2MTQuMjkyMV0sXG4gIFsxNDMzLjQzMzcsIDYxNS4yNDVdLFxuICBbMTQzMy4zOTkyLCA2MjMuNDQ1M10sXG4gIFsxNDM2LjA0NDYsIDYyMC45MDE1XSxcbiAgWzE0MzYuNjk5OCwgNjE3LjUxMjhdLFxuICBbMTQzNy4wMTAzLCA2MTQuMTExOF0sXG4gIFsxNDMzLjc1MTUsIDYxMC45ODgxXSxcbiAgWzE0MzIuNjI4LCA2MDYuODE1NTVdLFxuICBbMTQzNy4xODI5LCA2MDcuMzc4NV0sXG4gIFsxNDM4LjM2NjEsIDYxMS4xMDgwM10sXG4gIFsxNDM4LjI2ODksIDYwMy4yOTU1M10sXG4gIFsxNDM0LjE4NDgsIDYwMi40MTM4XSxcbiAgWzE0MzAuMDI2OSwgNjAyLjc0ODU0XSxcbiAgWzE0MjcuODI2NywgNjA2LjY4MzE3XSxcbiAgWzE0MjguNzkzMiwgNjEwLjY1MDQ1XSxcbiAgWzE0MjMuNDYyOCwgNjA2LjA1OTJdLFxuICBbMTQxOS4zMTMyLCA2MDcuMzUzXSxcbiAgWzE0MjAuMDQyNCwgNjE2LjQxMDJdLFxuICBbMTQxNS4xNTk0LCA2MTYuMTI3MV0sXG4gIFsxNDE0LjEwNjEsIDYyMC41ODEwNV0sXG4gIFsxNDEwLjYxODQsIDYyMy43ODU1XSxcbiAgWzE0MDkuMjkxMSwgNjI4LjAxMTk2XSxcbiAgWzE0MTQuODU3MiwgNjI5Ljk0NDY0XSxcbiAgWzE0MjAuMjM4NSwgNjI3LjY3ODZdLFxuICBbMTQxNi4xNDMsIDYyNS4xNDIxNV0sXG4gIFsxNDE4Ljg2MjMsIDYyMC43NzY1NV0sXG4gIFsxNDIzLjg3ODcsIDYxOS4zNzEyXSxcbiAgWzE0MjIuMjQ4NSwgNjIzLjQ5OTE1XSxcbiAgWzE0MjUuNDQsIDYyNS40NjA3NV0sXG4gIFsxNDIwLjkxMzgsIDYzMi4wMjE2XSxcbiAgWzE0MTcuNzEwNywgNjM0LjYyNV0sXG4gIFsxNDE2LjE3MTEsIDYzOS4xNDA2XSxcbiAgWzE0MjAuMjI4MywgNjQxLjQzMjFdLFxuICBbMTQyMi4yNjQ2LCA2MzYuODk4MV0sXG4gIFsxNDI1Ljg5MzgsIDYzNC40Njg1XSxcbiAgWzE0MjcuOTc4MywgNjM4LjY2NTE2XSxcbiAgWzE0MzEuMzIxOCwgNjM1LjgxMzFdLFxuICBbMTQzNC45ODUxLCA2MzcuNzYyMl0sXG4gIFsxNDMyLjQ4MTQsIDY0MS41NTExXSxcbiAgWzE0MzEuNzgzNywgNjQ2LjU1MzFdLFxuICBbMTQzMy4zMzc5LCA2NTAuOTExNV0sXG4gIFsxNDI4LjYwMDcsIDY1MS4wMzQzXSxcbiAgWzE0MjQuMDUxMSwgNjUyLjI4Mzk0XSxcbiAgWzE0MTkuMjcxLCA2NTMuNDQ3MTRdLFxuICBbMTQxNi42NDI2LCA2NDkuMjM5ODddLFxuICBbMTQyMS4yMDAzLCA2NDYuODI5OV0sXG4gIFsxNDI1Ljc1NiwgNjQ3LjIwOTVdLFxuICBbMTQyOC4wOTQ3LCA2NDMuNTAyMl0sXG4gIFsxNDI0LjI0NjgsIDY0MS41MTQ0N10sXG4gIFsxNDE2LjM0NjcsIDY0My45NzU0XSxcbiAgWzE0MTIuMzU2NywgNjQ1LjYzNzhdLFxuICBbMTQxMC40NDAyLCA2MzkuOTc2MTRdLFxuICBbMTQxMi42MzcyLCA2MzUuMzIxOV0sXG4gIFsxNDA5LjE2ODEsIDYzMi40NTgyNV0sXG4gIFsxNDA1LjU3ODYsIDYzNS44MjI3XSxcbiAgWzE0MDQuOTQ1OCwgNjQwLjM2NTZdLFxuICBbMTQwMC4zNjY4LCA2MzkuNjM0NzddLFxuICBbMTM5NS42NjcxLCA2MzguMDkzNV0sXG4gIFsxMzkwLjk0MDIsIDYzNi43OTU1XSxcbiAgWzEzODYuMTcxLCA2MzUuMzcwMV0sXG4gIFsxMzg5Ljg3NzIsIDYzMS41MTU3NV0sXG4gIFsxMzg0LjY3MDcsIDYzMC40NDQ3XSxcbiAgWzEzODEuMDY2OSwgNjM0LjE1NF0sXG4gIFsxMzgyLjM5OTcsIDYzOC45MzIxXSxcbiAgWzEzNzcuNjQ0NSwgNjQwLjg0MDJdLFxuICBbMTM3My4wNzUsIDYzOS4zMjc5XSxcbiAgWzEzNzEuNDk3NywgNjQzLjU4NzY1XSxcbiAgWzEzNzEuNDc0OSwgNjQ5LjI1NDJdLFxuICBbMTM2Ni41MzQ3LCA2NTEuNDE2NzVdLFxuICBbMTM3MC40MzQ3LCA2NTUuMTE3XSxcbiAgWzEzNzQuNzEwMSwgNjU4LjQzMTVdLFxuICBbMTM3Mi43NzQ3LCA2NjQuMTEwMzVdLFxuICBbMTM3OC4zNTA1LCA2NjMuNzY5OTZdLFxuICBbMTM3OS44ODk5LCA2NzAuMDA5Nl0sXG4gIFsxMzc0Ljk3OTEsIDY2OS44NzI5XSxcbiAgWzEzNjkuODU3OSwgNjY5LjU4MDJdLFxuICBbMTM2Ni40MjQzLCA2NjUuNjM0MV0sXG4gIFsxMzY4LjQ2ODgsIDY2MC40NzM2M10sXG4gIFsxMzc2LjE4MDQsIDY1Mi41ODcxNl0sXG4gIFsxMzc2LjEzNDMsIDY0Ni4xODcyNl0sXG4gIFsxMzgxLjg3NywgNjQ0LjUzNDNdLFxuICBbMTM4MC43MDA2LCA2NDkuNTE5NTNdLFxuICBbMTM4Mi4xMjkzLCA2NTMuOTExODddLFxuICBbMTM4MC4wMzIzLCA2NTguMjUzMzZdLFxuICBbMTM4NC40NTA4LCA2NjAuOTExXSxcbiAgWzEzODMuNDc0OSwgNjY1Ljg0OF0sXG4gIFsxMzg4LjM5ODQsIDY2Ni40NTcxNV0sXG4gIFsxMzg5LjU4OTgsIDY2MS42ODFdLFxuICBbMTM5MS43MjQ3LCA2NTcuNzkxNF0sXG4gIFsxMzg2LjY4OTMsIDY1NS44NDkwNl0sXG4gIFsxMzkyLjE1NDcsIDY1Mi4yMzQyNV0sXG4gIFsxMzk1LjM1ODgsIDY2MS4xOTQ5XSxcbiAgWzEzOTMuMzQ4NiwgNjY1Ljk1MTldLFxuICBbMTM5Ny40OTg3LCA2NjcuMDU1MjRdLFxuICBbMTM5OS41NzE3LCA2NjMuOTQ5Nl0sXG4gIFsxNDAxLjY4NjksIDY2OS4wOTldLFxuICBbMTQwNS40NDQ4LCA2NjUuNDE2MjZdLFxuICBbMTQwMy4xMjE4LCA2NjIuNzE5M10sXG4gIFsxNDAwLjI2MDcsIDY1OS40NjIwNF0sXG4gIFsxMzk2LjgyNDUsIDY1NS45NDQ2XSxcbiAgWzE0MDMuNjc4LCA2NTYuMTI3MTRdLFxuICBbMTQwNi40NzgxLCA2NjAuMjgwNjRdLFxuICBbMTQwOS42MTM0LCA2NjQuMDI2NTVdLFxuICBbMTQxMS44NjQ5LCA2NjAuMTg4MV0sXG4gIFsxNDA5LjMwMjQsIDY1Ni4zMTc3NV0sXG4gIFsxNDA2LjY0NTgsIDY1Mi44MDIzN10sXG4gIFsxNDAwLjg4MTIsIDY1Mi40NDQyXSxcbiAgWzEzOTYuOTY4OSwgNjQ5Ljc4NjU2XSxcbiAgWzEzOTIuMjA0MSwgNjQ3LjM1Mjk3XSxcbiAgWzEzODYuNjQ5MiwgNjQ4LjQ2NjA2XSxcbiAgWzEzODcuMTU2NywgNjQxLjUwMjldLFxuICBbMTM5MS45MTM4LCA2NDIuMjczNl0sXG4gIFsxMzk2LjYyNywgNjQ0LjAxMzJdLFxuICBbMTQwMS4wNTgxLCA2NDUuNjUxMDZdLFxuICBbMTQwNC4yMDg1LCA2NDguOTQwNF0sXG4gIFsxNDA2Ljc3OTQsIDY0NC4xODExXSxcbiAgWzE0MDguNzQ1LCA2NDguNjY2OF0sXG4gIFsxNDExLjY0NzcsIDY1MS42MDA3XSxcbiAgWzE0MTQuMTQ1NSwgNjU1LjQ5MDA1XSxcbiAgWzE0MTcuMjM2MiwgNjU5LjkwNDM2XSxcbiAgWzE0MjIuMTY0OCwgNjYzLjA0MDddLFxuICBbMTQyMy4xOTI2LCA2NTcuNDY3MTZdLFxuICBbMTQyOS43MTE4LCA2NTUuOTYyMDRdLFxuICBbMTQzMi42NTY1LCA2NjEuMzIxN10sXG4gIFsxNDI3LjQyMDIsIDY2MC40ODY5NF0sXG4gIFsxNDI3Ljk2ODUsIDY2NS41NDI3XSxcbiAgWzE0MjYuODM5NiwgNjY5LjkyODk2XSxcbiAgWzE0MjIuNzI5MiwgNjY3Ljc2MDU2XSxcbiAgWzE0MTguMjYzNywgNjY1Ljk5NjddLFxuICBbMTQxNC40OTk5LCA2NjQuMDkyN10sXG4gIFsxNDEyLjExNjUsIDY2Ny42NTkxXSxcbiAgWzE0MTUuMTkwMiwgNjcwLjEyNzFdLFxuICBbMTQxOC45MzQsIDY3MS4xNDM1XSxcbiAgWzE0MjIuNTE4OSwgNjcyLjY0NjNdLFxuICBbMTQyNS43Mjk3LCA2NzQuNDAzXSxcbiAgWzE0MjguNzcsIDY3Ni4wNjI4XSxcbiAgWzE0MzIuNjc2MywgNjc1LjgwMzddLFxuICBbMTQzMC44NjUxLCA2NzEuNjkwM10sXG4gIFsxNDMzLjM4NzUsIDY2Ny4yODcyM10sXG4gIFsxNDM3Ljc1MzksIDY2NC4wNzA4XSxcbiAgWzE0MzcuNjQxNiwgNjU5LjMzMDFdLFxuICBbMTQzNS4zMTYyLCA2NTUuMDk2Ml0sXG4gIFsxNDQwLjc4NzUsIDY1NS4zMTU3XSxcbiAgWzE0NDIuODkzMSwgNjUwLjc2MzRdLFxuICBbMTQzOC4xMjM1LCA2NDkuODc4OF0sXG4gIFsxNDM2LjU5MTMsIDY0NC45NTczXSxcbiAgWzE0MzguNTI0NCwgNjQwLjUyNTE1XSxcbiAgWzE0NDEuOTM5MiwgNjQ1LjQ1MzI1XSxcbiAgWzE0NDcuMDYwNSwgNjQyLjM2NDc1XSxcbiAgWzE0NTEuNDIyMSwgNjQwLjM1NF0sXG4gIFsxNDUzLjUwMywgNjM2LjcwOV0sXG4gIFsxNDU3LjY5MzcsIDYzOS4yMDM4Nl0sXG4gIFsxNDU1LjQzMTIsIDY0Mi44NzAzNl0sXG4gIFsxNDU2Ljg2MjMsIDY0Ni45MDM3NV0sXG4gIFsxNDU3LjA4MzQsIDY1MS4wNTU2Nl0sXG4gIFsxNDUyLjE2MDIsIDY0OS43NDA2Nl0sXG4gIFsxNDUxLjQyOCwgNjQ1LjE5MTA0XSxcbiAgWzE0NDYuODI2NCwgNjQ2Ljg3MjhdLFxuICBbMTQ0Ny40OTI4LCA2NTEuMzAxOV0sXG4gIFsxNDQ5Ljk5NDksIDY1NC45NDM1XSxcbiAgWzE0NTQuMjUwMiwgNjU0LjQ2MDddLFxuICBbMTQ1Mi4yMDY1LCA2NTguODQ4MjddLFxuICBbMTQ1Ni45NzYxLCA2NTkuOTAwMTVdLFxuICBbMTQ1Ny45MjcyLCA2NjQuODc2NF0sXG4gIFsxNDYxLjYxMzMsIDY2Mi4zNDQ4NV0sXG4gIFsxNDYyLjM1NDUsIDY1Ny44MDg4NF0sXG4gIFsxNDYzLjk5MDcsIDY1My4xODA1XSxcbiAgWzE0NjcuMjcwNCwgNjU2LjQ1NjU0XSxcbiAgWzE0NzEuNjU1NSwgNjU5LjE5NzI3XSxcbiAgWzE0NzYuNjAyOCwgNjU5LjEyMjQ0XSxcbiAgWzE0ODAuMzcyOCwgNjYzLjA2MzIzXSxcbiAgWzE0ODUuNjE2NywgNjYzLjgyMzM2XSxcbiAgWzE0ODcuMTgzOCwgNjU5LjE1OTddLFxuICBbMTQ4Ni42NjM4LCA2NTQuNzE4MjZdLFxuICBbMTQ5MC4wMzIyLCA2NTEuODUxNDRdLFxuICBbMTQ5NC4yMTQ1LCA2NTAuNTUwOV0sXG4gIFsxNDk3Ljc1MSwgNjUyLjc4MTRdLFxuICBbMTUwMi4wNDk3LCA2NTEuNjI5Ml0sXG4gIFsxNTA1LjE0MTQsIDY1NS40ODkxNF0sXG4gIFsxNTA4LjcwMzEsIDY1OS40MzkyXSxcbiAgWzE1MTIuMTgwOCwgNjYzLjY4NDQ1XSxcbiAgWzE1MTAuODg4NCwgNjY4Ljk5NDddLFxuICBbMTUxMS42MDA1LCA2NzQuMTQ5NTRdLFxuICBbMTUxNi4xOTE0LCA2NzEuNjMwMV0sXG4gIFsxNTE2LjY5MDcsIDY2Ni42NzIxXSxcbiAgWzE1MTcuNzExNCwgNjYxLjM5NzQ2XSxcbiAgWzE1MTkuNDM3NywgNjU1LjQ0MTM1XSxcbiAgWzE1MTYuOTQ5OCwgNjUwLjk5NTZdLFxuICBbMTUxNy45NzI5LCA2NDUuMjIyMTddLFxuICBbMTUyMS41NjMyLCA2NDguOTY0OTddLFxuICBbMTUyMi43Nzg0LCA2NDMuNzM0NV0sXG4gIFsxNTMxLjM0MjMsIDYzOS4zNTAzXSxcbiAgWzE1MzQuMjY3MiwgNjM1Ljk3Njc1XSxcbiAgWzE1MjguNzIsIDYzNi40Njg1XSxcbiAgWzE1MjUuODk0MywgNjMzLjUxNDZdLFxuICBbMTUyMC45MDEyLCA2MzAuMzQwMl0sXG4gIFsxNTIwLjk4LCA2MzQuMjExOF0sXG4gIFsxNTE3LjQzNDEsIDYzNS45Mzk0XSxcbiAgWzE1MTQuMTYxMywgNjM3LjU1MDk2XSxcbiAgWzE1MTAuNTgxMiwgNjM3LjA5NTY0XSxcbiAgWzE1MDcuMDM1MiwgNjM4Ljc1MjNdLFxuICBbMTUwNS4yMzY1LCA2NDIuMDUzXSxcbiAgWzE1MDIuNjI2MywgNjQ1LjI5ODhdLFxuICBbMTQ5OS4wNTYyLCA2NDcuNDU4Nl0sXG4gIFsxNDk1LjA1NTMsIDY0Ni4wMzY2XSxcbiAgWzE0OTAuNjA4NCwgNjQ2LjgzNTYzXSxcbiAgWzE0ODYuNjkzNCwgNjQ4Ljg3MTE1XSxcbiAgWzE0ODIuNzkyNSwgNjQ3LjQ1NTRdLFxuICBbMTQ4Mi45MTg2LCA2NDMuMjIyMzVdLFxuICBbMTQ4MC4zODc3LCA2MzkuOTUxOF0sXG4gIFsxNDc5LjY0NiwgNjM1Ljg4ODg1XSxcbiAgWzE0NzUuODIxMywgNjMzLjkyODVdLFxuICBbMTQ3Mi4zMjEzLCA2MzIuMTExNF0sXG4gIFsxNDY3LjAxODcsIDYyNi44NTk0NF0sXG4gIFsxNDY3Ljk5OTMsIDYyMi45Nzc5XSxcbiAgWzE0NjguODI2NSwgNjE5LjAyNTVdLFxuICBbMTQ2NC45MTQ0LCA2MTUuNDg3XSxcbiAgWzE0NjMuNTYsIDYxMS4wNDA4M10sXG4gIFsxNDY3LjgyODEsIDYxMS4xNzczXSxcbiAgWzE0NjguOTM0NywgNjE0Ljc0OTldLFxuICBbMTQ3Mi4zMzc0LCA2MTMuMjEzMV0sXG4gIFsxNDcyLjI0OTksIDYxNy4xOTNdLFxuICBbMTQ3Mi43MzY3LCA2MjAuOTIyOF0sXG4gIFsxNDcxLjUwNzYsIDYyNC4yODI5Nl0sXG4gIFsxNDcyLjA1NjQsIDYyNy43NDg4XSxcbiAgWzE0NzUuNzExNywgNjI0LjM1NjJdLFxuICBbMTQ3Ni4zNzgyLCA2MjkuMDY3NzVdLFxuICBbMTQ4MC4xMzI4LCA2MzEuNjc4N10sXG4gIFsxNDgzLjg5OTQsIDYzNC4yNjcxXSxcbiAgWzE0ODUuMTEwNCwgNjM5LjA3ODVdLFxuICBbMTQ4Ny41MzYxLCA2NDMuNDYzNTZdLFxuICBbMTQ5Mi42NTIyLCA2NDIuNTI0Ml0sXG4gIFsxNDkwLjE2MDgsIDYzOS4yNTkzXSxcbiAgWzE0ODguMzUyNSwgNjM2LjAyMDQ1XSxcbiAgWzE0ODguMzc0MSwgNjMyLjI3NzNdLFxuICBbMTQ4NS43MzU0LCA2MjkuMzI1NDRdLFxuICBbMTQ4Mi4xNDk0LCA2MjguNDQyNzVdLFxuICBbMTQ3OS40MTMzLCA2MjYuMDE5Ml0sXG4gIFsxNDc5LjUzLCA2MjIuMDg4MTNdLFxuICBbMTQ3Ni4zNTY5LCA2MTkuNzUxN10sXG4gIFsxNDc1Ljk4NjksIDYxNS44OTU2XSxcbiAgWzE0NzkuODg0OCwgNjE3LjQ0NDk1XSxcbiAgWzE0NzkuODkyMywgNjEzLjIwNjRdLFxuICBbMTQ4NC4zMTA0LCA2MTMuMDMzMTRdLFxuICBbMTQ4Mi4zNzk5LCA2MDcuOTUwOV0sXG4gIFsxNDc5LjYxNywgNjAzLjk1MDg3XSxcbiAgWzE0ODUuNTg0NywgNjA0LjE1MjJdLFxuICBbMTQ4Ny42OTQ4LCA2MDcuOTIyMjRdLFxuICBbMTQ5Mi4xOTI3LCA2MDguMDAyNl0sXG4gIFsxNDk1LjExMzMsIDYwNC42ODYxNl0sXG4gIFsxNDk5LjA0NCwgNjA2LjEwNDZdLFxuICBbMTQ5Ni44NDc5LCA2MTAuMTYzN10sXG4gIFsxNDkzLjQ2NTMsIDYxMi4zMDE1XSxcbiAgWzE0ODkuMTQ4MiwgNjEyLjI2NTc1XSxcbiAgWzE0OTYuMzM0MiwgNjE2LjEwNTFdLFxuICBbMTUwMC42MjA0LCA2MTMuNzY3NjRdLFxuICBbMTUwMS4xMjM3LCA2MTcuNzE2OV0sXG4gIFsxNTA1LjM3MzUsIDYyMy4xNTUxXSxcbiAgWzE1MDEuNDYzMywgNjIyLjAxMDZdLFxuICBbMTQ5OC43MzY3LCA2MjUuMDAwNV0sXG4gIFsxNDk1LjE1OTcsIDYyMy42NzI3XSxcbiAgWzE0OTEuMjY3NiwgNjI0LjI1Mjc1XSxcbiAgWzE0ODcuODM5MSwgNjIwLjcyMzE0XSxcbiAgWzE0OTIuNzM3MywgNjIwLjI1MzFdLFxuICBbMTQ5Ny41MTkzLCA2MjAuMjE1MV0sXG4gIFsxNDkxLjQyMDIsIDYxNi42NzAyXSxcbiAgWzE0ODcuNTk0MiwgNjE2LjIxNzY1XSxcbiAgWzE0ODQuMTUwNCwgNjE3LjMyOTRdLFxuICBbMTQ4My4wNjY3LCA2MjAuNjQ3M10sXG4gIFsxNDgzLjgyMTgsIDYyNC4zNDI2NV0sXG4gIFsxNDg3LjYxMTksIDYyNS4zMTc0NF0sXG4gIFsxNDkyLjcwNjUsIDYzMy42MzA3NF0sXG4gIFsxNDkwLjcyNjcsIDYyOC44OTIyXSxcbiAgWzE0OTQuNzU3OSwgNjI3LjkzNjddLFxuICBbMTQ5Ni41MzcyLCA2MzEuNzkzMV0sXG4gIFsxNDk5LjU3MjYsIDYyOS4wNTMyXSxcbiAgWzE1MDIuOTYxOSwgNjI2LjQ4NjE1XSxcbiAgWzE1MDMuOTAyMywgNjMwLjk0Mjc1XSxcbiAgWzE1MDAuNzcxNSwgNjMzLjY5MzVdLFxuICBbMTQ5Ny43MTE4LCA2MzYuMjA3MTVdLFxuICBbMTQ5NC4zMDM2LCA2MzguMTE1M10sXG4gIFsxNDk3LjcxMDQsIDY0Mi4wMTIxXSxcbiAgWzE1MDEuMjM5MSwgNjM5LjQ1NzldLFxuICBbMTUwMy45MTMsIDYzNi4xNjMyN10sXG4gIFsxNTA3LjQ4OTksIDYzNC4zMTg2XSxcbiAgWzE1MTAuMzM2NCwgNjQxLjU1NjQ2XSxcbiAgWzE1MDcuOTgwNywgNjQ1Ljg4NzQ1XSxcbiAgWzE1MDYuNjcxOSwgNjUwLjAzMDRdLFxuICBbMTUxMS4wNjA3LCA2NTMuMzExNV0sXG4gIFsxNTEyLjcxNDUsIDY0OC45MTY2XSxcbiAgWzE1MTIuODQwNywgNjQ0Ljk1OTUzXSxcbiAgWzE1MTUuNTI1NiwgNjQxLjI5NDA3XSxcbiAgWzE1MTkuODU0NSwgNjM5Ljc1NjRdLFxuICBbMTUyMy42NzEzLCA2MzcuMzMzMV0sXG4gIFsxNTI1Ljk5MTUsIDY0MC41NTA1NF0sXG4gIFsxNTI4Ljc5NCwgNjQzLjY2MjIzXSxcbiAgWzE1MjYuMzExNiwgNjQ3LjY3MTYzXSxcbiAgWzE1MjQuMjEzNywgNjUzLjI5MzMzXSxcbiAgWzE1MjMuNDE2NiwgNjU5LjIxNTZdLFxuICBbMTUyMi42NjE5LCA2NjQuMjc4M10sXG4gIFsxNTIxLjQ5OTMsIDY2OS4xNTI4M10sXG4gIFsxNTIxLjIwNzYsIDY3My44Mzk2XSxcbiAgWzE1MjMuMjk5OSwgNjc3LjkwMTczXSxcbiAgWzE1MjQuNTkxOCwgNjgyLjM4MzRdLFxuICBbMTUyOC4wNDAzLCA2ODUuMzIyMjddLFxuICBbMTUzMi42OTY1LCA2ODUuNzcwMTRdLFxuICBbMTUzMy4xMzQ5LCA2OTEuMDQ0MV0sXG4gIFsxNTI4LjYxNjMsIDY5MC44NDk2XSxcbiAgWzE1MzcuOTQyOSwgNjkxLjE4OTldLFxuICBbMTUyNC4xODgyLCA2OTQuODgxMl0sXG4gIFsxNTIzLjc1NzMsIDY5MC4wMzk5XSxcbiAgWzE1MjEuNjc5NiwgNjg2LjU4NzRdLFxuICBbMTUxNi42Mzk0LCA2ODguMTUzM10sXG4gIFsxNTA2LjU3NTYsIDY5MC41OTU5NV0sXG4gIFsxNTAxLjQ4MDEsIDY4Ny41OTI0XSxcbiAgWzE0OTMuMDk5MSwgNjgzLjMwNzc0XSxcbiAgWzE0OTguNTQyMSwgNjgyLjc0NTI0XSxcbiAgWzE1MDMuNzQ0NiwgNjgwLjEwNTldLFxuICBbMTUwNi4zNTk0LCA2ODQuMTYxMTNdLFxuICBbMTUxMS4yNjUxLCA2ODUuODA2OF0sXG4gIFsxNTE1LjQzLCA2ODIuNzE0MzZdLFxuICBbMTUxOS42OTE0LCA2ODIuMDY5MV0sXG4gIFsxNTE3LjI2MDMsIDY3Ni45MzA3XSxcbiAgWzE1MTIuODAwNCwgNjc5LjI3MDc1XSxcbiAgWzE1MDguNTc2NCwgNjc4LjkzNDk0XSxcbiAgWzE1MDUuOTIzLCA2NzQuMTc4Ml0sXG4gIFsxNTAwLjg2MTIsIDY3Ni43ODUzXSxcbiAgWzE0OTYuMTEwOCwgNjc3LjM0MV0sXG4gIFsxNDkzLjc5MywgNjcyLjQ4MjldLFxuICBbMTQ5OS44NDA1LCA2NzEuODY3M10sXG4gIFsxNTAwLjk1NiwgNjY2LjM0MDddLFxuICBbMTUwNS40MDg3LCA2NjkuMzI4OF0sXG4gIFsxNTA2LjQ1NDYsIDY2NC4zNzg4XSxcbiAgWzE1MDIuNTAxMiwgNjYwLjUwMDhdLFxuICBbMTQ5NS4yNjQ0LCA2NjcuODQwNjRdLFxuICBbMTQ5Ny4wOTE2LCA2NjIuNzY5ODRdLFxuICBbMTQ5OC4wMDc4LCA2NTcuNDY3OF0sXG4gIFsxNDkyLjU0ODYsIDY1NS42OTk2XSxcbiAgWzE0OTIuNDY5NiwgNjYwLjE2ODc2XSxcbiAgWzE0OTEuMzEzLCA2NjQuNTgzODZdLFxuICBbMTQ4OC4yMTAxLCA2NjguNzUxNl0sXG4gIFsxNDgxLjE4NTUsIDY2OC41NjEwNF0sXG4gIFsxNDg0LjIyODUsIDY3Mi4yODM3XSxcbiAgWzE0ODguNzc5OCwgNjc0LjM5OTA1XSxcbiAgWzE0OTEuMjA4NywgNjc4LjM5NTI2XSxcbiAgWzE0ODcuMDExOCwgNjgxLjMzMTldLFxuICBbMTQ4MS44OTgzLCA2ODAuOTY2Ml0sXG4gIFsxNDgzLjE1OTksIDY3Ni42Nzc4Nl0sXG4gIFsxNDc4LjA4NzIsIDY3NC45OTAzXSxcbiAgWzE0NzMuOTYzMSwgNjc5Ljg5MzZdLFxuICBbMTQ3MS45MjMzLCA2NzYuNzUwODVdLFxuICBbMTQ2Ny43NDA1LCA2ODEuMDIzOF0sXG4gIFsxNDY3LjQ0NjcsIDY3NS4zMTk2NF0sXG4gIFsxNDY1Ljg5NDksIDY2Ni42MjQ5NF0sXG4gIFsxNDY2LjE4MDcsIDY2MS4zNzg5XSxcbiAgWzE0NzAuMzU0NiwgNjY0LjIzODA0XSxcbiAgWzE0NzUuMjE3MywgNjY0LjkxNTA0XSxcbiAgWzE0NzUuOTM1LCA2NjkuODY3Nl0sXG4gIFsxNDcyLjI5NDcsIDY3Mi44MTQ4XSxcbiAgWzE0NjkuNTE2NSwgNjY5LjU2NzU3XSxcbiAgWzE0NjQuMTI0LCA2NzIuMjAzODZdLFxuICBbMTQ1OS4yOTIyLCA2NzIuMTY2NV0sXG4gIFsxNDYyLjgyMzksIDY3Ny41ODVdLFxuICBbMTQ1OC4wOTk5LCA2NzYuNTU3ODZdLFxuICBbMTQ1My45MDYsIDY3My41NTg4NF0sXG4gIFsxNDYxLjY3NTgsIDY2Ny42OTNdLFxuICBbMTQ1NS43MTcsIDY2OC45MjQyXSxcbiAgWzE0NTAuODcyMywgNjY4LjI3NV0sXG4gIFsxNDUzLjExNTIsIDY2My45ODU4NF0sXG4gIFsxNDQ4LjI0ODcsIDY2Mi4xNDg3NF0sXG4gIFsxNDQ1LjgzNCwgNjU2LjQ1MjVdLFxuICBbMTQ0My4xMzIyLCA2NjAuNTkxODZdLFxuICBbMTQ0Mi44NTMzLCA2NjUuMjk0ODZdLFxuICBbMTQ0Ni4yNzU0LCA2NjcuODgzOV0sXG4gIFsxNDQ4LjQ2MTQsIDY3Mi45MDZdLFxuICBbMTQ0My4wOTMzLCA2NzIuNDQxXSxcbiAgWzE0MzkuNDE5NywgNjY4Ljk0MDZdLFxuICBbMTQzNi4yMzI3LCA2NzIuNTU4XSxcbiAgWzE0MzYuMzQ1NSwgNjc3LjI2ODJdLFxuICBbMTQ0MC4xMDk5LCA2NzcuMDUzOF0sXG4gIFsxNDQ0LjkwODksIDY3Ny42ODQzXSxcbiAgWzE0NTEuMDI3MSwgNjc3LjM3MTM0XSxcbiAgWzE0NDcuMzMxNywgNjgwLjkwMzFdLFxuICBbMTQ0Ny41Mjk0LCA2ODQuMzY0NV0sXG4gIFsxNDQ3LjYxMSwgNjg3LjMwODJdLFxuICBbMTQ0NC43NjI1LCA2ODkuMDk0NjddLFxuICBbMTQ0MS43ODIzLCA2OTAuMDMwM10sXG4gIFsxNDM4LjAxNCwgNjkwLjAwODVdLFxuICBbMTQzNS42NzA3LCA2ODYuNTU0NDRdLFxuICBbMTQzMi43MTIzLCA2ODQuMzI0OF0sXG4gIFsxNDI4LjYxNywgNjg0LjQ0NjldLFxuICBbMTQyNS4wMzgxLCA2ODMuNjk5OV0sXG4gIFsxNDIxLjAwMTEsIDY4Mi40MzM4XSxcbiAgWzE0MTcuMTk3MywgNjgwLjc1NjE2XSxcbiAgWzE0MTMuMDk2MiwgNjgwLjg3NDc2XSxcbiAgWzE0MDkuMDU5OSwgNjgwLjI2MTU0XSxcbiAgWzE0MDguMjU0LCA2ODYuMDY2OV0sXG4gIFsxNDEzLjU2MiwgNjg1Ljg0ODRdLFxuICBbMTQxNy45MDY2LCA2ODYuNzI0OF0sXG4gIFsxNDIyLjQ5MjIsIDY4Ny4zMzk2XSxcbiAgWzE0MjUuODU1NSwgNjkwLjAzMzddLFxuICBbMTQzMC4yMjAyLCA2ODguMjQzNV0sXG4gIFsxNDI5Ljc3NzgsIDY5My44ODA3NF0sXG4gIFsxNDI0LjY0LCA2OTUuMTUxMV0sXG4gIFsxNDE5LjI2NjcsIDY5Mi4xMzY2Nl0sXG4gIFsxNDE1LjM0NzcsIDY5Ni44MTE0XSxcbiAgWzE0MjEuNjE2MywgNjk5LjMxODFdLFxuICBbMTQyNy42MDAzLCA3MDEuODQ5NTVdLFxuICBbMTQzMS4yOCwgNzA2LjIwMTY2XSxcbiAgWzE0MzYuODE5MywgNzA0LjY2OTldLFxuICBbMTQ0NC43NjQ5LCA3MDYuOTQ0MV0sXG4gIFsxNDQwLjMzNTMsIDcwOS45MTY3XSxcbiAgWzE0NDAuOTcwMiwgNzE1LjQ0ODFdLFxuICBbMTQzMy44NzU1LCA3MTYuNDYzNzVdLFxuICBbMTQzNC45ODE0LCA3MTAuNzkxNDRdLFxuICBbMTQyOS40NjQ0LCA3MTEuNzMyMV0sXG4gIFsxNDI3LjYzNCwgNzE2LjUyNTc2XSxcbiAgWzE0MjcuMjMxNCwgNzIxLjQ2OTddLFxuICBbMTQyMS4xMzExLCA3MjAuMzM2MzZdLFxuICBbMTQxOC40NjI4LCA3MTYuMDE3Ml0sXG4gIFsxNDEzLjQ3MzgsIDcxOS45NzU2XSxcbiAgWzE0MDQuNTgwMywgNzE1LjU0NzM2XSxcbiAgWzEzOTguNDEwOCwgNzE1LjUyMTM2XSxcbiAgWzEzOTIuMzU2MywgNzE0LjIzNjNdLFxuICBbMTM4Ny4wOTQsIDcxNi40NTY2N10sXG4gIFsxMzg0LjgwMDUsIDcwOS42NTc2NV0sXG4gIFsxMzc4LjA5ODQsIDcwOC4xNDAyNl0sXG4gIFsxMzcwLjYxNjUsIDcwNy45NzE4Nl0sXG4gIFsxMzY3LjMwMDksIDcwMi4xMjkzXSxcbiAgWzEzNjcuNjAwOCwgNjk1LjgzMzQ0XSxcbiAgWzEzNjIuOTQ3NiwgNjkyLjQyOThdLFxuICBbMTM1NS45NDczLCA2OTEuMTg0M10sXG4gIFsxMzY3LjQyNzQsIDY4Ni44MTM3XSxcbiAgWzEzNjcuOTg5NywgNjgwLjcwMzU1XSxcbiAgWzEzNjMuNTI2LCA2NzcuMDc3OF0sXG4gIFsxMzY3Ljc5ODgsIDY3NC41MTgyXSxcbiAgWzEzNzIuMzMzLCA2NzUuODEzMzVdLFxuICBbMTM3My43MDI2LCA2ODIuMDE2ODVdLFxuICBbMTM3OS42NjI3LCA2ODMuMDA4NjddLFxuICBbMTM3My42MzQ2LCA2ODguNzAwNF0sXG4gIFsxMzc1LjU5MTEsIDY5NC44NDFdLFxuICBbMTM3NC41ODMzLCA3MDEuNDQ4MzZdLFxuICBbMTM4MS4zMTY4LCA3MDIuMjc3NV0sXG4gIFsxMzg3LjU2ODQsIDcwMS42OTNdLFxuICBbMTM5MC4yMzI5LCA3MDcuMjkwM10sXG4gIFsxMzk1Ljc4OTQsIDcwOC4wMTAyXSxcbiAgWzE0MDAuODQ2MiwgNzA5LjIyMjE3XSxcbiAgWzE0MDUuNTM2NiwgNzA3LjUyNzJdLFxuICBbMTQxMC4xNjQ3LCA3MDguNTUxNDVdLFxuICBbMTQxNC45MDUyLCA3MDcuODQ2M10sXG4gIFsxNDA5LjUzMDMsIDcxNC45NjQ1XSxcbiAgWzE0MTQuNTU5NiwgNzEzLjI1MDddLFxuICBbMTQxOS43NzM5LCA3MDkuNjk0Ml0sXG4gIFsxNDIzLjM3NDgsIDcxMy42MDg0XSxcbiAgWzE0MjUuNzMzMiwgNzA4LjIzMzE1XSxcbiAgWzE0MjIuMzM3NiwgNzA0Ljc0ODJdLFxuICBbMTQxNi42NDYyLCA3MDMuMjU4Ml0sXG4gIFsxNDA5LjY3OTIsIDcwMS42MTEzXSxcbiAgWzE0MDYuNTAxLCA2OTUuMTE1NjZdLFxuICBbMTQxMi4zNTU3LCA2OTEuMzQwNzZdLFxuICBbMTQwMS45MzM1LCA3MDEuNTkzNDRdLFxuICBbMTM5NC43NzQyLCA3MDEuMDk4NV0sXG4gIFsxMzk4LjU4NzMsIDY5NC41NzYwNV0sXG4gIFsxMzkzLjA1MjcsIDY5MC4zNTE1XSxcbiAgWzEzODkuOTAwNiwgNjk1LjE4NDk0XSxcbiAgWzEzODMuMDkxOCwgNjk1LjYyMTM0XSxcbiAgWzEzODAuOTkyMywgNjg5LjM3OTE1XSxcbiAgWzEzODcuMDkxMiwgNjg3LjYyMDNdLFxuICBbMTM4NS43MjM4LCA2ODEuMzc0NF0sXG4gIFsxMzgyLjE4NzMsIDY3Ni40NDg3XSxcbiAgWzEzNzcuMjk1NywgNjc2LjA3NDJdLFxuICBbMTM4NC45ODM5LCA2NzEuMTYzMV0sXG4gIFsxMzkwLjk1ODMsIDY3MC45MTg3XSxcbiAgWzEzODcuODc1NSwgNjc1LjU1MzFdLFxuICBbMTM5MS4xOTksIDY3OS4yNjYyNF0sXG4gIFsxMzkyLjQzMjQsIDY4NC4xNTM3XSxcbiAgWzEzOTcuODk1OCwgNjg3LjAzMzk0XSxcbiAgWzE0MDMuNTc3NiwgNjg5LjEwMjRdLFxuICBbMTQwNC44NDUyLCA2ODAuNzMxOV0sXG4gIFsxNDAxLjM0MTEsIDY4Mi45MDU3Nl0sXG4gIFsxMzk2Ljk3NDUsIDY4MC4wMzA0XSxcbiAgWzEzOTQuMzI2MiwgNjc1LjIwMTA1XSxcbiAgWzEzOTYuODI5MSwgNjcxLjI4Ml0sXG4gIFsxNDAwLjY0MzgsIDY3NS43MDExXSxcbiAgWzE0MDYuMjM3OCwgNjc1Ljg3MzldLFxuICBbMTQwNC43OTAyLCA2NzEuOTcxMDddLFxuICBbMTQwNy42NTE0LCA2NjguNTg3OTVdLFxuICBbMTQxMC42MTEzLCA2NzIuMDExODRdLFxuICBbMTQxMS4zOTk5LCA2NzYuMDk1Nl0sXG4gIFsxNDE1LjMwNTUsIDY3NS4yMzA2XSxcbiAgWzE0MTkuMDY2OSwgNjc2LjEyOTRdLFxuICBbMTQyMi4yMjIsIDY3Ny44NDQzNl0sXG4gIFsxNDI1LjM5NTMsIDY3OS40NTA0NF0sXG4gIFsxNDI4Ljk0NiwgNjgwLjE5OTFdLFxuICBbMTQzMi4zMDk2LCA2ODAuMDk1OF0sXG4gIFsxNDM1LjU4NTgsIDY4MS4wNTY3XSxcbiAgWzE0MzguMjM5NywgNjgyLjU1MjRdLFxuICBbMTQ0MS44MzY0LCA2ODEuMTg0MV0sXG4gIFsxNDQzLjk1NTMsIDY4NC40Nzk0XSxcbiAgWzE0NDAuMjA3OCwgNjg2LjAwNTVdLFxuICBbMTQzMy40ODA1LCA2OTAuNzE4NzVdLFxuICBbMTQzNi4wNTYyLCA2OTQuMTgyXSxcbiAgWzE0MzcuNDE2NSwgNjk4LjgzMDU3XSxcbiAgWzE0NDAuOTg0OSwgNjk0LjYyNDVdLFxuICBbMTQ0NS4xNjU5LCA2OTQuODIwMjVdLFxuICBbMTQ0OS40OTI0LCA2OTMuODM4OF0sXG4gIFsxNDUxLjAwMDcsIDY4Ny41MDMyXSxcbiAgWzE0NTQuNzM4MywgNjg3LjE5MzM2XSxcbiAgWzE0NTIuNzc0NywgNjkxLjA0OTJdLFxuICBbMTQ0OC4yMjk1LCA2OTAuNzQ2Nl0sXG4gIFsxNDU0LjA0NjYsIDY5NS4yNDA3XSxcbiAgWzE0NTcuMTkyLCA2OTEuNzc4NTZdLFxuICBbMTQ2MS44MjYyLCA2OTQuNzAxNTRdLFxuICBbMTQ1OC4wNDI2LCA2OTcuMTY4NF0sXG4gIFsxNDQ5LjY3OTQsIDY5Ny4zOTAxXSxcbiAgWzE0NDcuMjU2NiwgNzAxLjIyODk0XSxcbiAgWzE0NTIuNzY4OCwgNzAwLjc4MTFdLFxuICBbMTQ1Ny4xNTQ3LCA3MDIuMzA3MjVdLFxuICBbMTQ2Mi41MzgxLCA3MDAuNzE0MzZdLFxuICBbMTQ2Ny4wNzk2LCA2OTguODAyMV0sXG4gIFsxNDY3LjY2NiwgNzA0LjM3NTI0XSxcbiAgWzE0ODUuNDMxLCA3MTEuMDIzMTNdLFxuICBbMTQ4OS4wMTk4LCA3MTQuNTQ0MDddLFxuICBbMTQ5OC42MTU3LCA3MTkuNzI3OTddLFxuICBbMTQ5NS4wNTYsIDcxMy40NjUzM10sXG4gIFsxNTA4LjIxMzQsIDY5Ni40ODE5M10sXG4gIFsxNTEyLjczNDQsIDY5Mi40MDI2XSxcbiAgWzE1MTQuODUzLCA2OTguOTU0Nl0sXG4gIFsxNTE4Ljc3MjUsIDY5My45Mzc0XSxcbiAgWzE1MjIuNDAxMiwgNzAwLjExMzVdLFxuICBbMTUyOC4zMDI1LCA2OTcuMzY3MV0sXG4gIFsxNTMxLjIxNDYsIDcwMS4yMzQ3NF0sXG4gIFsxNTMzLjY5ODUsIDY5NS45NDI4XSxcbiAgWzE1MzguNzY3OCwgNjk2LjcwMl0sXG4gIFsxNTM2LjYzNjIsIDcwMC43NjA3NF0sXG4gIFsxNTQxLjM5ODQsIDcwMy4xMDEzXSxcbiAgWzE1NDIuNTk0MiwgNjk0Ljc3NTldLFxuICBbMTU0My4yMTA0LCA2OTEuMTY1NjVdLFxuICBbMTU0MS43ODcsIDY4Ni44Njk1XSxcbiAgWzE1MzcuMzQxNiwgNjg1Ljg2MzQ2XSxcbiAgWzE1NDAuMzY5MSwgNjgxLjg3NzNdLFxuICBbMTUzOS4zODY0LCA2NzcuNDM1XSxcbiAgWzE1MzguMDk2MiwgNjcyLjk5MDZdLFxuICBbMTUzNi44NTY3LCA2NjguMzc0NzZdLFxuICBbMTUzMS45ODM0LCA2NjkuNjg0N10sXG4gIFsxNTMzLjc5MjYsIDY3NS42NTI5XSxcbiAgWzE1MzQuNjM2NCwgNjgwLjkwMTczXSxcbiAgWzE1MjkuMTk5NywgNjc5LjkzMjc0XSxcbiAgWzE1MjkuMDMwOCwgNjc1LjE4MzRdLFxuICBbMTUyNS45ODQ3LCA2NzIuMzM4OF0sXG4gIFsxNTI3LjAxMTUsIDY2Ny42OTExNl0sXG4gIFsxNTI5LjEwMTMsIDY2My4wNTE2XSxcbiAgWzE1MjcuOTU4LCA2NTcuMzQxNV0sXG4gIFsxNTI5LjM3NCwgNjUxLjgyMzY3XSxcbiAgWzE1MzEuOTMxOSwgNjQ3LjE4MjA3XSxcbiAgWzE1MzQuNzczLCA2NTEuNDIwNl0sXG4gIFsxNTMyLjc0MDcsIDY1Ny4zNTU0XSxcbiAgWzE1MzQuOTkwNSwgNjYzLjAxMTRdLFxuICBbMTU0MS4wMjI1LCA2NjUuMDQyMzZdLFxuICBbMTU0MC45Nzg5LCA2NjAuMDMyODRdLFxuICBbMTUzNy4zOTk5LCA2NTYuMzgxMV0sXG4gIFsxNTQwLjkxNSwgNjUyLjUzMzQ1XSxcbiAgWzE1MzkuNDMzNiwgNjQ4LjQ5NzhdLFxuICBbMTUzNi43ODU5LCA2NDUuMjI2Ml0sXG4gIFsxNTMzLjgzNzQsIDY0Mi4zMTEyXSxcbiAgWzE1MzguNzMwNiwgNjM0LjUyMTJdLFxuICBbMTUzNy4xMjk2LCA2MjUuMzk3NV0sXG4gIFsxNTM1LjMyMzEsIDYyMC4yNTE2NV0sXG4gIFsxNTMxLjc4OCwgNjE3Ljk0ODM2XSxcbiAgWzE1MjcuMTYyMSwgNjE5Ljg0MzE0XSxcbiAgWzE1MzEuMDY1OSwgNjIzLjA3NzVdLFxuICBbMTUyNy43NzksIDYyNS43NjczM10sXG4gIFsxNTMyLjI5MDksIDYyNy41NDI4NV0sXG4gIFsxNTM2LjA0MiwgNjMwLjQ3MjRdLFxuICBbMTUzMS4zNzgyLCA2MzIuNjEyMV0sXG4gIFsxNTI4LjcwMDYsIDYyOS43MTU3Nl0sXG4gIFsxNTI0LjkzODEsIDYyOS44NzYyXSxcbiAgWzE1MjMuMzg4MiwgNjI2LjUzNjI1XSxcbiAgWzE1MjUuMjg2NiwgNjIyLjgzMTJdLFxuICBbMTUyMy41ODA2LCA2MTQuOTAxXSxcbiAgWzE1MjIuOTU2OCwgNjA5LjE0MDFdLFxuICBbMTUyNi42MzA5LCA2MTEuNTM0Nl0sXG4gIFsxNTE3LjkwNzEsIDYxMC43Mjc2Nl0sXG4gIFsxNTE2LjM1MzMsIDYwMS45NTIyXSxcbiAgWzE1MTUuNTU1NywgNTk3Ljg4ODldLFxuICBbMTUxMC4xNDQ4LCA1OTcuMDI0NjZdLFxuICBbMTUwNC4xODg0LCA1OTguMDYyNzRdLFxuICBbMTUwNi4wODA4LCA1OTMuMDUxNF0sXG4gIFsxNTEzLjk0MTQsIDU5My45MDQ5XSxcbiAgWzE1MTcuMTMwNywgNTkwLjc5NDNdLFxuICBbMTUxMC42NjIxLCA1OTAuNzMzMDNdLFxuICBbMTUwNS44NzE2LCA1ODcuMzQ1Ml0sXG4gIFsxNTEzLjMwNjgsIDU4MC4yODczXSxcbiAgWzE1MjEuNTIzOSwgNTg2Ljg0NjZdLFxuICBbMTUyNS4yMjUzLCA1ODkuNDkwODRdLFxuICBbMTUyOC4wMTMyLCA1ODYuNzE3N10sXG4gIFsxNTMxLjg2NzgsIDU4Ny4xMjI3NF0sXG4gIFsxNTM1Ljk0MzgsIDU4Ny40MDA2M10sXG4gIFsxNTMzLjU5MjQsIDU4My4wNDE1XSxcbiAgWzE1MzcuNzY5OSwgNTgzLjI1MTNdLFxuICBbMTUyOS4zNzU1LCA1ODIuMzUyMDVdLFxuICBbMTUyNS42MTE5LCA1NzguNTExNF0sXG4gIFsxNTI0LjQ4LCA1ODMuMDMzNDVdLFxuICBbMTUxOS42NTA2LCA1ODEuMDYwMl0sXG4gIFsxNTE3LjYzMTIsIDU3Ni44Nzc2XSxcbiAgWzE1MTYuNTc2OSwgNTg1LjQyNDZdLFxuICBbMTUxMS40MDM2LCA1ODUuNTUwOV0sXG4gIFsxNTA3LjIxMzEsIDU4MS40OTc0XSxcbiAgWzE1MDQuMTQ5NywgNTc3LjIyMjZdLFxuICBbMTUwMS44NDE2LCA1NzIuNjg3NzRdLFxuICBbMTQ5NS44NzQ1LCA1NzAuNTU2OV0sXG4gIFsxNDk2LjczOTksIDU2NS4yNzU2M10sXG4gIFsxNTAwLjIzNjMsIDU2Mi4zOTM1NV0sXG4gIFsxNTA0LjkwMTQsIDU2My40Mzc3XSxcbiAgWzE1MDguNTIwOCwgNTYwLjIxNDg0XSxcbiAgWzE1MDkuNjAxOCwgNTY0LjYzOTRdLFxuICBbMTUxMS4wNzMsIDU2OS44MDg2XSxcbiAgWzE1MTUuOTMzLCA1NjkuNTk2N10sXG4gIFsxNTEzLjc5ODEsIDU2NS45ODg2NV0sXG4gIFsxNTE3Ljc4NiwgNTY0LjIwNTFdLFxuICBbMTUxNy4yNTIyLCA1NTkuNzUxXSxcbiAgWzE1MTMuNDA1LCA1NjEuNzQ2Ml0sXG4gIFsxNTEzLjM1NCwgNTU3LjU4MzldLFxuICBbMTUwOS42NTY1LCA1NTUuODY5MjZdLFxuICBbMTUwNy43NzUxLCA1NTIuMDQzMzNdLFxuICBbMTUwNS4zMDEsIDU1Ny4xODEzXSxcbiAgWzE1MDEuMjYwNywgNTU4LjI5MzhdLFxuICBbMTUwMy42NTkyLCA1NTIuNjE1XSxcbiAgWzE1MDYuNTk0LCA1NDcuNDI3NV0sXG4gIFsxNTExLjA2OTMsIDU0OC43MTc5XSxcbiAgWzE1MTIuNzQ2NSwgNTUyLjQ0MzFdLFxuICBbMTUxNi4zODI2LCA1NTQuMjA0NDddLFxuICBbMTUxOS4zMDgyLCA1NTYuMTc3NTVdLFxuICBbMTUyMi45NTI0LCA1NTYuMDAyM10sXG4gIFsxNTI2LjA0OCwgNTUyLjY4NzZdLFxuICBbMTUyOS4wMTE1LCA1NDkuMDM0NTVdLFxuICBbMTUzMi43NzkzLCA1NDcuNDU4ODZdLFxuICBbMTU0MC4yOTUzLCA1NTAuMTgwOV0sXG4gIFsxNTM2LjE0NDgsIDU1MC42NjQzN10sXG4gIFsxNTM2Ljc0MzUsIDU1NC44ODUxM10sXG4gIFsxNTMyLjI0NDMsIDU1Mi42ODQ2M10sXG4gIFsxNTI5LjE4MTQsIDU1NS42NzY4XSxcbiAgWzE1MzIuNjQxMSwgNTU3LjY3NjNdLFxuICBbMTUzNi4yOTIsIDU1OS41ODUxNF0sXG4gIFsxNTQwLjE2MjEsIDU1OC40NjMyNl0sXG4gIFsxNTQxLjA4MjksIDU1NC43OTE1Nl0sXG4gIFsxNTQzLjkyODIsIDU1Mi42MzA5XSxcbiAgWzE1NDUuODg4OCwgNTQ5Ljg1MjY2XSxcbiAgWzE1NDMuNDI2MywgNTQ3LjEzNjM1XSxcbiAgWzE1NDAuNDIzOCwgNTQ0LjkwMzddLFxuICBbMTUzNy4wNzA4LCA1NDYuMzMzNV0sXG4gIFsxNTM0LjY4OTcsIDU0Mi43MDY4NV0sXG4gIFsxNTMwLjQ2MDksIDU0My4wNTA2Nl0sXG4gIFsxNTI2LjY1MTUsIDU0NC4xOTY2Nl0sXG4gIFsxNTIyLjc1MjksIDU0MS44MzA1N10sXG4gIFsxNTIwLjU1OTYsIDU0Ni40MTY2XSxcbiAgWzE1MjQuNjE3MywgNTQ4LjE5MDU1XSxcbiAgWzE1MjEuMjY2NSwgNTUxLjY3MjZdLFxuICBbMTUxNy4xMDQ0LCA1NDkuOTk5Ml0sXG4gIFsxNTE1LjQzNywgNTQ2LjM0Mjk2XSxcbiAgWzE1MTEuODI1LCA1NDQuNDk2MzRdLFxuICBbMTUxMi43NjQsIDU0MC4wNTkyXSxcbiAgWzE1MTUuNjEzNSwgNTM2Ljk1NDZdLFxuICBbMTUxNy4zNTQ5LCA1MzIuMjc5NF0sXG4gIFsxNTE3LjY1OCwgNTQyLjAxODJdLFxuICBbMTUyMC4wNDg2LCA1MzYuODE4NF0sXG4gIFsxNTIzLjgzNzMsIDUzNi4zMzg0XSxcbiAgWzE1MjcuMzc3OCwgNTM4LjQyXSxcbiAgWzE1MzEuMjc2NywgNTM4LjA1ODJdLFxuICBbMTUzNS4xMDAyLCA1MzcuODYxOV0sXG4gIFsxNTM4LjA0NTUsIDUzNC45OTkxNV0sXG4gIFsxNTM4Ljg4OTgsIDU0MC40OTY0Nl0sXG4gIFsxNTQzLjM1ODgsIDU0MS45NDg2XSxcbiAgWzE1NDcuMzIsIDU0MC41MzE1Nl0sXG4gIFsxNTQyLjgwNTksIDUzNy40NDldLFxuICBbMTU0Mi43MywgNTMyLjU4NDg0XSxcbiAgWzE1NDIuMzMwMSwgNTI3Ljg4MTA0XSxcbiAgWzE1NDMuMTk5NiwgNTIzLjE2NzVdLFxuICBbMTU0Ny4wMTIyLCA1MjUuMDc1ODddLFxuICBbMTU0Ni44MDI3LCA1MjkuODM1N10sXG4gIFsxNTUwLjYxMiwgNTMxLjY5NzI3XSxcbiAgWzE1NTEuNTY2LCA1MjcuMzg5OF0sXG4gIFsxNTUzLjQwMTYsIDUxNy44NDk0XSxcbiAgWzE1NTIuNTkyNSwgNTEzLjEyNTI0XSxcbiAgWzE1NDguNzc1MSwgNTEwLjg3MDU0XSxcbiAgWzE1NDQuOTU2MywgNTA4LjcxNTldLFxuICBbMTU0OC4yMDA2LCA1MDYuMDE4NzRdLFxuICBbMTU1MS44OTQzLCA1MDUuMTI5OTddLFxuICBbMTU1NC4wMzQzLCA1MDEuODQ1NF0sXG4gIFsxNTU4LjA3NTksIDUwMC44MjUyNl0sXG4gIFsxNTU1LjY3NzQsIDQ5Ny40NjM1Nl0sXG4gIFsxNTUxLjMyMywgNDk3Ljc3NTAyXSxcbiAgWzE1NDguODE3OSwgNTAwLjYxMDA4XSxcbiAgWzE1NDQuOTE2MywgNTAxLjYzMjkzXSxcbiAgWzE1NDMuMzYwNiwgNTA1LjEzMDg2XSxcbiAgWzE1MzkuNTQwNSwgNTA0LjE2MjcyXSxcbiAgWzE1NDEuNTY0LCA0OTguNjcyNTVdLFxuICBbMTU0NS42MjY1LCA0OTYuOTA5XSxcbiAgWzE1NDguODgsIDQ5My45ODEyXSxcbiAgWzE1NDQuODIyOCwgNDkyLjU4NTddLFxuICBbMTU0MS4wNDI2LCA0OTMuNzQwMTddLFxuICBbMTUzNy42NDExLCA0OTYuMzYxOTRdLFxuICBbMTUzNi40Mzk3LCA0OTIuMDI0Nl0sXG4gIFsxNTM5LjQ2NTEsIDQ4OS4yNDc2NV0sXG4gIFsxNTMyLjkxMzgsIDQ4OS45OTc2NV0sXG4gIFsxNTMxLjA2NjIsIDQ4Ni41MDI0NF0sXG4gIFsxNTMyLjQyMTgsIDQ4My4wODQ3XSxcbiAgWzE1MzYuMzMxOCwgNDgxLjYxODZdLFxuICBbMTUzOS44OTMyLCA0NzkuNTAyMTddLFxuICBbMTU0NC4wMzkzLCA0ODAuNzU3MDJdLFxuICBbMTUzNi40NTA0LCA0NzYuNzQwNDVdLFxuICBbMTUzOS43OTU0LCA0NzQuNjY1MzRdLFxuICBbMTU0My4xODMyLCA0NzYuNzM3ODhdLFxuICBbMTU0Ni42NjQsIDQ3NS42MjA4Ml0sXG4gIFsxNTQ5Ljk1ODcsIDQ3My44NDQyXSxcbiAgWzE1NTMuMzkwOSwgNDcyLjM3MjkyXSxcbiAgWzE1NTUuODk3MiwgNDc1LjAxNjFdLFxuICBbMTU1OS4zMjk4LCA0NzQuMDQwMjJdLFxuICBbMTU2Mi4yOTA1LCA0NzYuNzg4MDZdLFxuICBbMTU1OS4yMDksIDQ3OS4xOTE5Nl0sXG4gIFsxNTU1LjU3NjQsIDQ3OS4wODQ3XSxcbiAgWzE1NTIuMDUxLCA0NzcuMjI4NjRdLFxuICBbMTU0OC40Njk3LCA0NzkuMTMyNTddLFxuICBbMTU1Mi41MDUsIDQ4MS45NzAyXSxcbiAgWzE1NTcuNDc0LCA0ODMuMzI1NF0sXG4gIFsxNTYyLjQzNzQsIDQ4MS42MDk1Nl0sXG4gIFsxNTY1LjQ1MzksIDQ3OS43OTgwN10sXG4gIFsxNTY2LjU0NDYsIDQ3NS4zNDI2NV0sXG4gIFsxNTY5LjA1NDMsIDQ3OC42OTQ0M10sXG4gIFsxNTcyLjYzNTksIDQ3OS4zMTY5XSxcbiAgWzE1NzUuMTY1MywgNDgyLjY1OTY3XSxcbiAgWzE1NzMuNDYyNCwgNDg1Ljg1Nzg1XSxcbiAgWzE1NjkuMzc3NCwgNDg2LjkzMzZdLFxuICBbMTU2Ny45MDE2LCA0OTAuODIzNThdLFxuICBbMTU2NC4zMTY5LCA0OTMuNjUzN10sXG4gIFsxNTYwLjY5NjUsIDQ5MS44OTQxN10sXG4gIFsxNTYzLjg0MzgsIDQ4OS42MDAwN10sXG4gIFsxNTY1LjY2NDEsIDQ4Ni4wNTM3XSxcbiAgWzE1NjguOTczOCwgNDgyLjkzODQ1XSxcbiAgWzE1NjIuMjg1OCwgNDg0LjgzMzVdLFxuICBbMTU1OS45MzIsIDQ4Ny4yOTI0NV0sXG4gIFsxNTU3LjExODUsIDQ4OS4yMDA2NV0sXG4gIFsxNTU0LjE0NTgsIDQ4Ni4xMjE5NV0sXG4gIFsxNTQ5Ljc5MjIsIDQ4NS45MjQ4N10sXG4gIFsxNTQ3Ljk1NywgNDgyLjgxOTU1XSxcbiAgWzE1NDQuNjMxMSwgNDg1LjAxMjg4XSxcbiAgWzE1NDAuMTk0NiwgNDg0LjIwMDkzXSxcbiAgWzE1MzYuMDcyLCA0ODYuNTAwNDNdLFxuICBbMTU0Mi44OTQ4LCA0ODguNTExODRdLFxuICBbMTU0Ni44NTk5LCA0ODkuMDU2N10sXG4gIFsxNTUwLjUwMDcsIDQ4OS44NTgxXSxcbiAgWzE1NTMuNzYyMiwgNDkwLjUzMTI1XSxcbiAgWzE1NTIuOTQ2NywgNDk0LjE2NDU1XSxcbiAgWzE1NTYuODk0NSwgNDkzLjI3ODkzXSxcbiAgWzE1NTkuODMwMSwgNDk1Ljg1MDJdLFxuICBbMTU2Mi4wNDIyLCA0OTguODE0M10sXG4gIFsxNTY1LjEyOTMsIDQ5Ny4yNjA2OF0sXG4gIFsxNTY4LjM5NDUsIDQ5NC45NTQxNl0sXG4gIFsxNTcxLjkzMzEsIDQ5My4zMzE2N10sXG4gIFsxNTcyLjI4NjksIDQ4OS43NzU5NF0sXG4gIFsxNTc2LjQ2MzcsIDQ4OS43NTU3NF0sXG4gIFsxNTgwLjIxOCwgNDkyLjI0OTYzXSxcbiAgWzE1NzkuMDExMiwgNDg2LjI3ODE3XSxcbiAgWzE1ODcuNTQ3NCwgNDg2LjU5NzAyXSxcbiAgWzE1OTEuMTk5NywgNDg0LjUzNTI1XSxcbiAgWzE1OTIuOTMwOSwgNDgwLjkxODddLFxuICBbMTU5MS4wOTY5LCA0NzcuNzYzNF0sXG4gIFsxNTg3LjM1NjMsIDQ3Ni45MjA5Nl0sXG4gIFsxNTg0LjM2OTYsIDQ3NC4wMDM0OF0sXG4gIFsxNTgzLjc2MjIsIDQ3OS4zMTgyNF0sXG4gIFsxNTg3Ljg1NjgsIDQ4MS42MjEwNl0sXG4gIFsxNTgzLjQyMDQsIDQ4NC4wNjcxXSxcbiAgWzE1NzkuNjE3OSwgNDgxLjQ0NTg2XSxcbiAgWzE1NzYuODQ0NiwgNDc4LjExMzFdLFxuICBbMTU4MC44ODcyLCA0NzYuMjQ5Nl0sXG4gIFsxNTc0LjAyODksIDQ3NC41OTA4XSxcbiAgWzE1NzcuODExNiwgNDczLjYzNjFdLFxuICBbMTU4MC44ODM5LCA0NzAuNzY1OTZdLFxuICBbMTU4NC44MzAxLCA0NjkuMjc4MzJdLFxuICBbMTU4Ny45Njc4LCA0NzEuNzEzNDddLFxuICBbMTU5MC44NTY0LCA0NzMuOTE1NTNdLFxuICBbMTU5Mi41OTM1LCA0NjkuOTk0OTZdLFxuICBbMTU5NC45NzM4LCA0NzMuMTkzOV0sXG4gIFsxNTk0Ljg4ODUsIDQ3Ni45MDk1XSxcbiAgWzE1OTcuNTE5OCwgNDc5LjYxMTAyXSxcbiAgWzE1OTYuODk0NSwgNDgyLjU2Nzg3XSxcbiAgWzE1OTUuMjc0MywgNDg1LjMyNTNdLFxuICBbMTU5Ny43NTY4LCA0ODguMjM0NDRdLFxuICBbMTU5OS4xNDM2LCA0OTIuMzQyOTZdLFxuICBbMTYwMC4zODk0LCA0OTYuNDYxNl0sXG4gIFsxNjA0LjQ0OSwgNDkzLjEwMzczXSxcbiAgWzE2MDIuMzU2OCwgNDg4LjM0MTQzXSxcbiAgWzE2MDYuODc5NCwgNDg4LjkwMjM0XSxcbiAgWzE2MDIuOTUxLCA0NzUuMzI5Nl0sXG4gIFsxNTk5LjAwOTUsIDQ3Ni40NTM1OF0sXG4gIFsxNTk5LjE5NDgsIDQ3My4wNjgyXSxcbiAgWzE1OTcuMjg2OSwgNDY5Ljc4OTY0XSxcbiAgWzE1OTguNTAzMywgNDY2LjI5Njg4XSxcbiAgWzE2MDEuOTY0NSwgNDcwLjI0MzM4XSxcbiAgWzE2MDUuODc3MiwgNDcyLjgwNDNdLFxuICBbMTYwOC44MjgxLCA0NzAuMjc1XSxcbiAgWzE2MTIuNzg3NywgNDcwLjMzMTU0XSxcbiAgWzE2MTMuMDg4LCA0NjUuMzYyNV0sXG4gIFsxNjE2LjU1OTcsIDQ2NC4zNjY5NF0sXG4gIFsxNjE5LjcxNzksIDQ2Ni4zOTA2XSxcbiAgWzE2MjMuNzkzMSwgNDY2LjQwNTddLFxuICBbMTYyOC4zODk5LCA0NjYuODg2NzJdLFxuICBbMTYyOS41NjkzLCA0NjMuNDAyMjhdLFxuICBbMTYzOS45NTI0LCA0NjEuNDc3NDhdLFxuICBbMTY0NC41MjUsIDQ2My42OTA2N10sXG4gIFsxNjQ3LjIyNzUsIDQ2Ni45NTk4NF0sXG4gIFsxNjQ2LjcwNTgsIDQ3MS4xOTU1XSxcbiAgWzE2NDIuNzUzMiwgNDcxLjgyODM0XSxcbiAgWzE2NDMuNDA0NSwgNDY4LjEzNjU3XSxcbiAgWzE2NDAuNzg5OCwgNDY1LjM5MzQzXSxcbiAgWzE2MzkuMDg4MywgNDY5LjQzMzU2XSxcbiAgWzE2MzYuNjU2NSwgNDY1LjIyMTI1XSxcbiAgWzE2MzUuMDU1OCwgNDY4LjY4NzkzXSxcbiAgWzE2MzIuMjgxLCA0NzQuMDUyOTJdLFxuICBbMTYzMS43Mzc1LCA0NzcuNjEyMDZdLFxuICBbMTYyOC4yMzA4LCA0NzYuMjU2OTZdLFxuICBbMTYyNC42MDMzLCA0NzUuMDYyNDRdLFxuICBbMTYyMC40NzEsIDQ3Ny4zOTYzNl0sXG4gIFsxNjIwLjc2NDQsIDQ3My41ODIwM10sXG4gIFsxNjIzLjg3MjcsIDQ3MS4yMTQyM10sXG4gIFsxNjIwLjIzNiwgNDY5LjkzNTNdLFxuICBbMTYxNi4yNzE5LCA0NjkuMDc0NTVdLFxuICBbMTYxNi41MDc2LCA0NzMuODQ0NDhdLFxuICBbMTYxMC45ODQ0LCA0NzQuMjQ2NTJdLFxuICBbMTYxMy43NDM5LCA0NzcuNDQwM10sXG4gIFsxNjE3LjMyNTQsIDQ3OS43MjMxXSxcbiAgWzE2MTguMTgxNCwgNDg0LjE2ODRdLFxuICBbMTYxNi43NTEyLCA0ODcuOTU0OTZdLFxuICBbMTYyMS45NTU3LCA0ODcuNjI5MV0sXG4gIFsxNjI2LjUwMiwgNDg3Ljg5NzNdLFxuICBbMTYyNS41NzI0LCA0ODQuMDI4NzVdLFxuICBbMTYyMS43NTgyLCA0ODIuNDU1MDVdLFxuICBbMTYyNC4zMjIzLCA0NzkuMTkwMjVdLFxuICBbMTYyOC4xNjgsIDQ4MC4zODM1XSxcbiAgWzE2MjkuODU5NywgNDgzLjk0NV0sXG4gIFsxNjM1Ljk4MzgsIDQ4OC4wNDgyOF0sXG4gIFsxNjM2LjM5NiwgNDkyLjE4ODQyXSxcbiAgWzE2MzkuNjcwMiwgNDkwLjQ2OTJdLFxuICBbMTY0MS4wMDU2LCA0OTMuOTQ3NDhdLFxuICBbMTY0My45OTM0LCA0OTEuNTI5MDJdLFxuICBbMTY0Ni40MzU1LCA0ODcuOTg2MzNdLFxuICBbMTY0My4wNTgxLCA0ODguMDQ5MjZdLFxuICBbMTY0MC4xNjcsIDQ4Ni42MDE4XSxcbiAgWzE2MzcuODYzLCA0ODQuMzE1ODZdLFxuICBbMTY0MS4yODIsIDQ4Mi4xNjQ2XSxcbiAgWzE2NDAuNzIxNiwgNDc4LjMzNjAzXSxcbiAgWzE2NDIuNTI1OCwgNDc1LjI4NTAzXSxcbiAgWzE2NDUuODU4LCA0NzYuMDcwODZdLFxuICBbMTY0OC45MzYzLCA0NzguNDA2OF0sXG4gIFsxNjUxLjc5MjYsIDQ4MC43NDQ3NV0sXG4gIFsxNjU1LjcyNSwgNDc5LjE4OTU0XSxcbiAgWzE2NTUuNTk2MywgNDc1LjM3ODVdLFxuICBbMTY1Mi4xNzg4LCA0NzYuMTk2MzVdLFxuICBbMTY0OS41MzgxLCA0NzMuNTY0ODhdLFxuICBbMTY1NC4xMDQsIDQ3MS42MzMwNl0sXG4gIFsxNjUxLjA3MjMsIDQ2OS4yOTY0OF0sXG4gIFsxNjU0Ljc1NDQsIDQ2NS45MTU2NV0sXG4gIFsxNjUwLjk3NDksIDQ2NS40MDMyNl0sXG4gIFsxNjQ4LjM2MzUsIDQ2Mi40NDU4Nl0sXG4gIFsxNjUyLjIzNzMsIDQ2MS42MDkxM10sXG4gIFsxNjU1LjkwMzYsIDQ2MS41NjkzXSxcbiAgWzE2NTkuMDkxOSwgNDU5Ljk4OTI2XSxcbiAgWzE2NjIuNTc0LCA0NjAuNTQ3Nl0sXG4gIFsxNjYxLjU0MDQsIDQ1Ni4xODg2XSxcbiAgWzE2NTguNDQsIDQ1My4yMDM2N10sXG4gIFsxNjUyLjIyMDcsIDQ1My45ODU0XSxcbiAgWzE2NTYuOTY2OCwgNDU2LjUyMjQ2XSxcbiAgWzE2NTQuODU2NCwgNDUxLjYwMzczXSxcbiAgWzE2NTcuNDg1MSwgNDQ4LjY0MzE2XSxcbiAgWzE2NjIuNDgzOCwgNDQ2LjU2OTgyXSxcbiAgWzE2NjEuNzQ4MywgNDQxLjQ2Mjc0XSxcbiAgWzE2NjQuMTc0OCwgNDM3LjI4MDEyXSxcbiAgWzE2NjEuMTc3MiwgNDMwLjE2OTYyXSxcbiAgWzE2NjAuODc1NSwgNDI1LjA2OTU1XSxcbiAgWzE2NTYuNjUzNiwgNDIxLjYzMTFdLFxuICBbMTY1MS43MjcsIDQxNy42Nzc2XSxcbiAgWzE2NDUuNTQ5MywgNDE3LjQ0Nzk3XSxcbiAgWzE2NDAuOTM4LCA0MTMuOTk1OF0sXG4gIFsxNjQxLjE3MiwgNDIwLjgwMzE2XSxcbiAgWzE2MzUuOTAxNiwgNDE5Ljc1MTFdLFxuICBbMTYzNy4yNTksIDQyNS4xMTA3OF0sXG4gIFsxNjQxLjE5MzYsIDQyOS4xNjYzNV0sXG4gIFsxNjQ1LjkxNjMsIDQzMC4xMDI0Ml0sXG4gIFsxNjQ5Ljg4MTcsIDQzMi4wOTE3NF0sXG4gIFsxNjUyLjgyNDMsIDQyNi43NjM5XSxcbiAgWzE2NDcuNTE1NSwgNDIzLjU2NjYyXSxcbiAgWzE2NTYuOTU5MiwgNDEzLjU0MTQ3XSxcbiAgWzE2NjIuNjY0OSwgNDE3LjUxOTEzXSxcbiAgWzE2NjMuMDM0NCwgNDA5LjYzMTg0XSxcbiAgWzE2NjcuNjY5LCA0MDUuMTM3MTVdLFxuICBbMTY3My40MDE5LCA0MDAuNDM0OTRdLFxuICBbMTY3MC4yNjUzLCAzOTcuNjM2MDVdLFxuICBbMTY3Mi4xMzY3LCAzOTMuMTkzNTRdLFxuICBbMTY3NS42ODMzLCAzOTAuMjIzMzZdLFxuICBbMTY3OS42MDA2LCAzODkuMDQ0NjVdLFxuICBbMTY3Ni4zNjI4LCAzOTUuODM2NjRdLFxuICBbMTY3OC4wMzQzLCA0MDAuODEzMDhdLFxuICBbMTY4MS4yODc1LCAzOTcuOTQ3ODhdLFxuICBbMTY4MC41NDQyLCAzOTMuNjA2NF0sXG4gIFsxNjg0LjcwMTgsIDM5My43MDkyM10sXG4gIFsxNjg2LjAxNDksIDM5Ny43MDc0XSxcbiAgWzE2ODguMTA2MiwgNDAxLjcxNzE2XSxcbiAgWzE2OTIuNjQ5MywgNDAwLjI1NzNdLFxuICBbMTY5MC43MzMzLCAzOTYuNzk0OThdLFxuICBbMTY4OS40OTA3LCAzOTMuMzY3MDNdLFxuICBbMTY4Ny4xODQ2LCAzOTAuNTk2OF0sXG4gIFsxNjgzLjQzMzUsIDM4OC45NjA2Nl0sXG4gIFsxNjg3LjA1MDcsIDM4Ni43Mjc1NF0sXG4gIFsxNjkxLjEzNiwgMzg4LjQ0OTU1XSxcbiAgWzE2OTUuMzMxMiwgMzg3LjQzMDQ4XSxcbiAgWzE2OTQuMjU3LCAzOTIuMzcxMV0sXG4gIFsxNjk1LjkxNTgsIDM5Ni43MTE2NF0sXG4gIFsxNjg4LjIzNzQsIDM4My4wNTAxNF0sXG4gIFsxNjg2LjU1NjQsIDM3OC4wOTUyOF0sXG4gIFsxNjkxLjIwNzgsIDM3Ni43MTYwNl0sXG4gIFsxNjkxLjIwMTIsIDM3MS45OTUwNl0sXG4gIFsxNjk2LjAzODgsIDM3NS4wNzE3Ml0sXG4gIFsxNjk5Ljc4NDksIDM3Ny44Mjg2N10sXG4gIFsxNjk5LjkzMDcsIDM4NC4wMDA5OF0sXG4gIFsxNjk5LjgyMjMsIDM4OS4xNDI1OF0sXG4gIFsxNjk5LjI5LCAzOTMuNzY1Ml0sXG4gIFsxNzA1LjM5MTUsIDM4Ny4wMzY0NF0sXG4gIFsxNzA0LjUyNjQsIDM5MS44MzkzXSxcbiAgWzE3MDQuNTc2LCAzOTcuMTE3NjVdLFxuICBbMTcwMC40OTQ5LCAzOTkuNjQzOF0sXG4gIFsxNjk2Ljk1MTQsIDQwMi4zMzkxN10sXG4gIFsxNjkxLjg5NjUsIDQwNS4wNDkwNF0sXG4gIFsxNjkwLjQ4NSwgNDEyLjU0MTVdLFxuICBbMTY4NC4xOTQ2LCA0MTEuOTk3MTNdLFxuICBbMTY4MC40Nzg1LCA0MDYuMzI5NTNdLFxuICBbMTY4My40NTE0LCA0MDIuMDYyNTZdLFxuICBbMTY3OC4xNTQ0LCA0MTEuNTc2NzJdLFxuICBbMTY3NS45Njg2LCA0MTYuNzU1MTNdLFxuICBbMTY3NC4zMjA5LCA0MDYuMzkwMl0sXG4gIFsxNjcwLjg2MzUsIDQxMS4yNzU4OF0sXG4gIFsxNjY4Ljk0ODIsIDQxNy4xMDcxOF0sXG4gIFsxNjY2LjU2NjQsIDQyNS4wNDE1XSxcbiAgWzE2NjYuMzM2MiwgNDMyLjM2NjUyXSxcbiAgWzE2NzAuNTU5MiwgNDI4LjgzOTY2XSxcbiAgWzE2NzUuMzk3NSwgNDMwLjQxOTU2XSxcbiAgWzE2ODAuNDQ1OCwgNDI5Ljc2MzY3XSxcbiAgWzE2ODQuMDI3NSwgNDMzLjkxMTMyXSxcbiAgWzE2ODIuNDg2NiwgNDM4LjAwNzU0XSxcbiAgWzE2NzguMzkyLCA0MzkuNDI0OV0sXG4gIFsxNjc3LjU1NzQsIDQzNS4xMDEwN10sXG4gIFsxNjcxLjkwMDEsIDQzNC40OTE3XSxcbiAgWzE2NjguODAxMSwgNDM4Ljc5NjU3XSxcbiAgWzE2NzMuNjk1NiwgNDM5Ljk2MzA3XSxcbiAgWzE2NzEuMTU4MiwgNDQ0LjAzMDE1XSxcbiAgWzE2NjYuMzY1LCA0NDMuNDA5NjRdLFxuICBbMTY2NS45MTIsIDQ0OS4zNjQzOF0sXG4gIFsxNjY5Ljc5MDMsIDQ0OC40MDYyMl0sXG4gIFsxNjY5LjMwMzcsIDQ1My44NTM2NF0sXG4gIFsxNjczLjE3MjksIDQ1My4yMTU1NV0sXG4gIFsxNjc0LjU4MTcsIDQ0OS40MjE1N10sXG4gIFsxNjc1LjUyNjYsIDQ0NS43NTM4NV0sXG4gIFsxNjc3Ljc5MTMsIDQ0My4xNjIwNV0sXG4gIFsxNjgxLjkwNzcsIDQ0My4xOTU5XSxcbiAgWzE2ODUuMjE1NywgNDQwLjk5NDQ4XSxcbiAgWzE2ODcuODE4NSwgNDQzLjI4NjFdLFxuICBbMTY4OS4xOTgxLCA0NDcuNDUzOTJdLFxuICBbMTY4OC4yNDI5LCA0MzcuMjYyOTRdLFxuICBbMTY5My4xNjYsIDQzMy41MTc4OF0sXG4gIFsxNjkyLjYzNzYsIDQzOC4zMzkzXSxcbiAgWzE2OTEuMjQsIDQ0Mi41MjUzNl0sXG4gIFsxNjk1LjI2OTMsIDQ0Mi4wNTY0Nl0sXG4gIFsxNjk5LjM0NjcsIDQ0MS42MDQ1XSxcbiAgWzE3MDMuMjkxMSwgNDQxLjc5MzMzXSxcbiAgWzE3MDEuODU5NiwgNDM2LjQ4ODVdLFxuICBbMTY5Ny4yOTQyLCA0MzcuMTA5M10sXG4gIFsxNjk4Ljc3ODMsIDQzMS43MTZdLFxuICBbMTcwMy45MjcsIDQyOS43MDM3NF0sXG4gIFsxNzA1LjczMzIsIDQzMy42ODM0N10sXG4gIFsxNzE0LjYwMTksIDQyOS44MzQ0NF0sXG4gIFsxNzEwLjI0NiwgNDM0LjQxODMzXSxcbiAgWzE3MTEuMTkzNSwgNDM4LjMwOTg4XSxcbiAgWzE3MTIuMzA2MiwgNDQxLjg5NjM2XSxcbiAgWzE3MTMuOTQ1NCwgNDQ1LjAzMjQ0XSxcbiAgWzE3MTUuMjMzNCwgNDQ4LjU2NV0sXG4gIFsxNzE5LjAyNjEsIDQ0Ny4xNjU3N10sXG4gIFsxNzIyLjY0NDIsIDQ0NC44NDk5OF0sXG4gIFsxNzIyLjU3NDMsIDQ0MC4zMTc4N10sXG4gIFsxNzIwLjA2NDUsIDQzNi4zNTkzXSxcbiAgWzE3MTguMTMzMywgNDQyLjQ0OTY4XSxcbiAgWzE3MTYuMTMxMywgNDM4Ljc0ODY2XSxcbiAgWzE3MTQuOTc5LCA0MzQuNTUyMjJdLFxuICBbMTcxOS4yODEyLCA0MzEuMzQ1NThdLFxuICBbMTcyMi4zNDQ1LCA0MjguMDQ4MDNdLFxuICBbMTcyNC4yMDAyLCA0MzMuOTI0Ml0sXG4gIFsxNzI2LjM3NjUsIDQzOC41MzIyM10sXG4gIFsxNzMwLjY4MTQsIDQzOS4wMDk1XSxcbiAgWzE3MzIuMTAyOSwgNDQyLjM1NjkzXSxcbiAgWzE3MzQuMjU0OSwgNDM2LjM5MDhdLFxuICBbMTcyOS4zODQ4LCA0MzQuNjUxMzddLFxuICBbMTcyNy42MDczLCA0MzAuMTg4MDVdLFxuICBbMTczMi42NjcsIDQzMC45NDEyMl0sXG4gIFsxNzM2LjkyNjgsIDQyOS4wNDYwOF0sXG4gIFsxNzM3LjEwMzEsIDQyNC41OTQ5XSxcbiAgWzE3MzMuODYwNywgNDIxLjEwODczXSxcbiAgWzE3MzEuNTk0NywgNDI1LjU2NDMzXSxcbiAgWzE3MjYuNTQ0NywgNDI1LjQ5OTRdLFxuICBbMTcyNi41MiwgNDIwLjYzOTZdLFxuICBbMTcyMC44NDE4LCA0MjIuNDM4NDJdLFxuICBbMTcxNi4yNDI5LCA0MjUuMjMwNjhdLFxuICBbMTcwOS42NDk3LCA0MjkuOTU2MTJdLFxuICBbMTcwNi40MjEzLCA0MzguMDY2MjJdLFxuICBbMTcwNy41NTgsIDQ0Mi4xMTQ3XSxcbiAgWzE3MDguODM2OSwgNDQ1Ljc4NzU0XSxcbiAgWzE3MTAuODkwNiwgNDQ5LjAwOTAzXSxcbiAgWzE3MDkuOTYxMywgNDUzLjEyMjc3XSxcbiAgWzE3MTIuNTQ0NCwgNDU2LjI4ODFdLFxuICBbMTcxNC4zNjk4LCA0NTIuNDQ1NV0sXG4gIFsxNzE4LjYyODQsIDQ1MS45NDQwM10sXG4gIFsxNzIyLjYyMjcsIDQ1MC40NDc3XSxcbiAgWzE3MjUuOTMyOSwgNDQ3Ljg2MTddLFxuICBbMTcyNy41NTQyLCA0NDMuNDQ1NV0sXG4gIFsxNzMzLjIxOCwgNDQ1LjkxNDNdLFxuICBbMTczMC4wNTk2LCA0NDguNDE4NTVdLFxuICBbMTczMS4yNzAzLCA0NTIuNTQ5NjVdLFxuICBbMTczNS4wMzM2LCA0NTEuNzUxMzRdLFxuICBbMTczNi45NzYzLCA0NDcuNTI3MDddLFxuICBbMTc0MC41NjQ3LCA0NDMuMzk1OF0sXG4gIFsxNzM2LjI5OTMsIDQ0MS4zMTAwNl0sXG4gIFsxNzQyLjE5MDIsIDQ0OC40MzQzM10sXG4gIFsxNzM5LjExMTgsIDQ1Mi42NzQzXSxcbiAgWzE3NDMuNDkxOCwgNDUzLjYyNjldLFxuICBbMTc0Ny4xMzIxLCA0NTYuOTI2OTddLFxuICBbMTc1MC44NDM2LCA0NTYuODYyNzZdLFxuICBbMTc0OC4zNjEsIDQ1MS4zODMwNl0sXG4gIFsxNzQ2LjEwOSwgNDQ1LjA5MTc0XSxcbiAgWzE3NTMuMjM1MSwgNDM5LjE3NTAyXSxcbiAgWzE3NDguNzg1OSwgNDQwLjcxNDk0XSxcbiAgWzE3NDQuMTQ5NCwgNDM4Ljk2OTQ1XSxcbiAgWzE3MzkuODA2NiwgNDM3LjM2OTIzXSxcbiAgWzE3MzcuNjYxNSwgNDMzLjUwMDNdLFxuICBbMTc0MS4zNTIsIDQzMC45OTA4XSxcbiAgWzE3NDQuNzU5NiwgNDMzLjU5MDMzXSxcbiAgWzE3NDkuMDIwOCwgNDM1LjE1ODg3XSxcbiAgWzE3NTMuNDA2OSwgNDMzLjk1ODkyXSxcbiAgWzE3NTguMTAyMiwgNDM2LjY5ODU4XSxcbiAgWzE3NTcuODI2MywgNDMxLjgxMzM1XSxcbiAgWzE3NjIuNzE0MiwgNDMyLjkzODA1XSxcbiAgWzE3NjMuNzU3NiwgNDM4LjAzMDY0XSxcbiAgWzE3NjcuNTUyLCA0NDIuMDUxMjddLFxuICBbMTc2Ni41MDkyLCA0NDcuNzM5MjZdLFxuICBbMTc2MC43MDE1LCA0NTIuOTU5NzhdLFxuICBbMTc2MC4wOTU3LCA0NDcuODE4N10sXG4gIFsxNzYyLjgwMTksIDQ0My42NjE3NF0sXG4gIFsxNzU4LjU1MDgsIDQ0MS40Njc2Ml0sXG4gIFsxNzU0Ljc5MDgsIDQ0NC40ODEwMl0sXG4gIFsxNzUwLjkyMzgsIDQ0Ni44NzE0Nl0sXG4gIFsxNzU0LjkwNjIsIDQ1MC40MjEwOF0sXG4gIFsxNzY0Ljk4NjYsIDQ1Ni45NjgyM10sXG4gIFsxNzY0LjI4MjUsIDQ2MS40NTYzXSxcbiAgWzE3NTkuNDQ2LCA0NTguMzY3XSxcbiAgWzE3NTUuMjIzOCwgNDU1LjA2NDgyXSxcbiAgWzE3NTMuOTg3NCwgNDU5LjkzMjA3XSxcbiAgWzE3NTYuODA3MSwgNDYyLjg3NDJdLFxuICBbMTc2MC4yNjAzLCA0NjMuNzg0M10sXG4gIFsxNzYzLjQzMDcsIDQ2Ni42NjMxOF0sXG4gIFsxNzYyLjY4MzYsIDQ3MS4wNzQ0Nl0sXG4gIFsxNzYyLjUzNzQsIDQ3NS4zMTgwOF0sXG4gIFsxNzY2LjQyNTMsIDQ3OC4wODAxNF0sXG4gIFsxNzcxLjY5OTUsIDQ3OS44MDQ4N10sXG4gIFsxNzcyLjk0NjMsIDQ4NS4yMTc4Nl0sXG4gIFsxNzY1LjI0NjMsIDQ4NC40NzM5N10sXG4gIFsxNzU5LjIxMTIsIDQ4MC41MzQ2XSxcbiAgWzE3NTYuOTIyMiwgNDc0LjAzNzE3XSxcbiAgWzE3NTguMTExMiwgNDY4LjYyMTkyXSxcbiAgWzE3NTMuNzgzLCA0NjUuNDMzNjVdLFxuICBbMTc1MC4yMjYyLCA0NjIuODYzODZdLFxuICBbMTc0Ni4yMzI1LCA0NjIuOTY3XSxcbiAgWzE3NDMuNjAyLCA0NTkuMTg0MDJdLFxuICBbMTczOS41MzYsIDQ1Ny43NjM1NV0sXG4gIFsxNzM1LjEzMjIsIDQ1Ni42NDE1NF0sXG4gIFsxNzI5Ljk0NTgsIDQ1Ni42NjY4NF0sXG4gIFsxNzI1LjQ5NDQsIDQ1OC4xMTU1NF0sXG4gIFsxNzI2LjYxNTUsIDQ1Mi45ODM2XSxcbiAgWzE3MjIuMDA0NCwgNDU1LjIxNDFdLFxuICBbMTcyMC44MjQyLCA0NTkuNDEyMzVdLFxuICBbMTcxNS45MjQ2LCA0NTkuOTUyMDNdLFxuICBbMTcxNy4yODEsIDQ1Ni4xNjkxNl0sXG4gIFsxNzE5LjA3NDUsIDQ2My4wNjM5XSxcbiAgWzE3MjMuODMzNiwgNDYyLjkyMzUyXSxcbiAgWzE3MjcuOTMwOSwgNDY2LjM2NzhdLFxuICBbMTczMS41NjE0LCA0NjguNTczMV0sXG4gIFsxNzI4LjI4NzEsIDQ2MS44MTYyOF0sXG4gIFsxNzMyLjQ3NzcsIDQ2MC4yMDkyM10sXG4gIFsxNzMyLjc2MjEsIDQ2NC40Nzk3XSxcbiAgWzE3MzYuODg5NiwgNDYyLjAyMDk0XSxcbiAgWzE3NDEuMDA1NSwgNDYzLjc3MTQyXSxcbiAgWzE3MzYuNTQ5NywgNDY3LjYwMTNdLFxuICBbMTc0MC43NTE3LCA0NjkuNzc2NThdLFxuICBbMTc0NC4zMDQ5LCA0NjcuNzMxN10sXG4gIFsxNzQ4LjUyNzYsIDQ2OC40NTA5XSxcbiAgWzE3NTMuMjE2MSwgNDY5LjUwNjY1XSxcbiAgWzE3NTAuNzk2MywgNDczLjU3NDY1XSxcbiAgWzE3NDUuNDQ0NSwgNDczLjgwMjU4XSxcbiAgWzE3NDEuNDM2LCA0NzcuMTMwNzRdLFxuICBbMTczNy45MTQ2LCA0NzMuNTA2NDRdLFxuICBbMTczMy40MDgzLCA0NzIuMTNdLFxuICBbMTcyOC45MTM2LCA0NzIuNTg3NTJdLFxuICBbMTcyNS4zNTk0LCA0NzAuNTIzMl0sXG4gIFsxNzI0LjkyOTYsIDQ3NS4yMzgxNl0sXG4gIFsxNzI5LjQ0ODUsIDQ3Ny42NTgwMl0sXG4gIFsxNzMzLjQ0NjMsIDQ3Ni4yODY3NF0sXG4gIFsxNzM2LjE1NiwgNDc5LjUwMl0sXG4gIFsxNzQwLjkyMTksIDQ4Mi43MjMyNF0sXG4gIFsxNzQwLjE0NzcsIDQ4OC45NzgxNV0sXG4gIFsxNzM2LjQ3NjMsIDQ5NS4xNTE2XSxcbiAgWzE3NDEuODYxOSwgNDk2LjQxNzldLFxuICBbMTc0NS43NzQ0LCA0OTEuOTY4NDhdLFxuICBbMTc0Ni4xMzYsIDQ4NS45MTAwM10sXG4gIFsxNzQ2Ljk1MzcsIDQ4MC4wMzYzMl0sXG4gIFsxNzUyLjU3MTksIDQ3OC4yODddLFxuICBbMTc1My4zNzc5LCA0ODQuMDQ2MzNdLFxuICBbMTc1OS4xMjIxLCA0ODguMjAxNjZdLFxuICBbMTc2My45MTg3LCA0OTMuMDE2MjRdLFxuICBbMTc2OS4yMjc5LCA0ODkuOTAwNjNdLFxuICBbMTc4Mi4zMjQyLCA0OTEuNDkxNjRdLFxuICBbMTc4NS40Mjk2LCA0OTYuNDM2NV0sXG4gIFsxNzc5LjQ3NzgsIDUwNy4zNTQ1XSxcbiAgWzE3ODMuMzE2OSwgNTAyLjk1NTg3XSxcbiAgWzE3NzguNjkwOCwgNDk3Ljk5Nzc0XSxcbiAgWzE3NTcuNTA5NSwgNTI1Ljc2ODRdLFxuICBbMTc1Mi40MTQxLCA1MjQuMDM0MDZdLFxuICBbMTc0Ny45Mzg0LCA1MjIuMTA1Ml0sXG4gIFsxNzQ5LjQ3OTIsIDQ5Ny4yODQyN10sXG4gIFsxNzU3LjczOCwgNTE5LjEzNzFdLFxuICBbMTc0NC45OTIyLCA1MTYuNjg0M10sXG4gIFsxNzM4LjM3NjMsIDUxNy43ODAzM10sXG4gIFsxNzMxLjcyOTYsIDUxNy41MTIyXSxcbiAgWzE3MjMuMjAwNCwgNTA0Ljc2ODY1XSxcbiAgWzE3MTcuMTYzNywgNTA2LjcxMzg3XSxcbiAgWzE3MTMuMjEyNiwgNTAyLjA3NjFdLFxuICBbMTcwNi45NjU4LCA1MDAuMzY0NTZdLFxuICBbMTcwMS4yNTUsIDQ5OS42NjkyOF0sXG4gIFsxNzAwLjUwOSwgNTAzLjc3ODRdLFxuICBbMTY5NS4yODA4LCA1MDEuNzU0XSxcbiAgWzE2OTcuMjkzLCA0OTYuODk5MV0sXG4gIFsxNzAyLjg1MjUsIDQ5NS4xODgzNV0sXG4gIFsxNzA3Ljc5NDQsIDQ5NC4xNTE2N10sXG4gIFsxNzEyLjk5MDcsIDQ5NS40NzIxXSxcbiAgWzE3MTkuNTkxMSwgNDk4LjU1MDM4XSxcbiAgWzE3MjYuNzYzNCwgNDk4LjYyNDczXSxcbiAgWzE3MzAuNTMxMiwgNDk0LjQyNDNdLFxuICBbMTcyNC4yMjM2LCA0OTIuMjM0XSxcbiAgWzE3MTguMjk3NiwgNDkyLjcwMTldLFxuICBbMTcxNC42NTAxLCA0ODkuMTE1OTRdLFxuICBbMTcwOS42NDM4LCA0ODkuNDIyNV0sXG4gIFsxNzExLjgyNTMsIDQ4NS4wODgxM10sXG4gIFsxNzEzLjAxNjgsIDQ4MC40ODA5M10sXG4gIFsxNzE3LjU4OTUsIDQ3OS41NzU5XSxcbiAgWzE3MTYuNTk0MiwgNDgzLjk5Mjk4XSxcbiAgWzE3MjAuMTcxNiwgNDg3LjY3MDldLFxuICBbMTcyMS40MzA1LCA0ODMuMDAzNjNdLFxuICBbMTcyNS4yNzc2LCA0ODYuMDA3OV0sXG4gIFsxNzI5LjQyODcsIDQ4OC40MjQzOF0sXG4gIFsxNzM0LjQ2MDMsIDQ4OS43NjE1N10sXG4gIFsxNzM1LjM5NzYsIDQ4NC43MDAzXSxcbiAgWzE3MzAuNjA2LCA0ODIuNzE1MDNdLFxuICBbMTcyNS45NDksIDQ4MC42Njg1OF0sXG4gIFsxNzIxLjg1NDUsIDQ3OC43MDNdLFxuICBbMTcxOS43NzM5LCA0NzUuMTE4NzRdLFxuICBbMTcyMC43NTY1LCA0NzEuMjk1MTRdLFxuICBbMTcyMy40NTE0LCA0NjcuMDg0NF0sXG4gIFsxNzE5LjU1NTgsIDQ2Ny4xMDQ4M10sXG4gIFsxNzE1Ljc0MzcsIDQ2NS4zMTE1Ml0sXG4gIFsxNzE2LjEzOSwgNDY5LjI3NjkyXSxcbiAgWzE3MTUuNTk0NiwgNDcyLjg2NDE0XSxcbiAgWzE3MTUuMjIyMiwgNDc2LjQ4M10sXG4gIFsxNzExLjQ2MzYsIDQ3NS43ODA3M10sXG4gIFsxNzA4LjkzNzksIDQ3Mi4yODM2Nl0sXG4gIFsxNzEyLjAwMzMsIDQ3MC42NTM1XSxcbiAgWzE3MTEuOTU4MywgNDY2Ljg1NTMyXSxcbiAgWzE3MTMuMTg0MywgNDYyLjczNjE4XSxcbiAgWzE3MTEuMDA1NCwgNDU5Ljc1ODM2XSxcbiAgWzE3MDcuNDIxMSwgNDU4LjE0NDEzXSxcbiAgWzE3MDYuMTMzLCA0NTQuNTg3NDZdLFxuICBbMTcwMi4xOTIxLCA0NTUuOTY4NV0sXG4gIFsxNjk3LjQxOTcsIDQ1NC44Mzc1XSxcbiAgWzE2OTkuMDA3MywgNDU5LjE3Mjk0XSxcbiAgWzE2OTQuNDY0MSwgNDU5LjA1NjU4XSxcbiAgWzE2OTIuMzMzNywgNDU1LjY0MzY1XSxcbiAgWzE2ODcuMjc2NCwgNDU1LjY1MjhdLFxuICBbMTY4OS40NSwgNDU5Ljg3MDQ4XSxcbiAgWzE2ODQuNjYwNSwgNDU5Ljg4NTA3XSxcbiAgWzE2ODIuNTI3MSwgNDU2LjYxNjAzXSxcbiAgWzE2ODIuNzA2MywgNDUyLjc2ODJdLFxuICBbMTY4NS45MTQxLCA0NTAuNzkxMzVdLFxuICBbMTY5MC4wODg1LCA0NTEuODYxNjZdLFxuICBbMTY5NC4yMzE0LCA0NTEuMjEyOThdLFxuICBbMTY5OC4xOTczLCA0NTAuMTgxNThdLFxuICBbMTcwMi4wMzQsIDQ1MS40Mzg0OF0sXG4gIFsxNzA2LjM1NjcsIDQ1MC4zNjAwNV0sXG4gIFsxNzA0LjU1OTYsIDQ0Ni41OTY4XSxcbiAgWzE3MDAuODE1MSwgNDQ2LjMzMDAyXSxcbiAgWzE2OTYuODU3NSwgNDQ2LjA5NjhdLFxuICBbMTY5My4wNDQ5LCA0NDYuODkxMzNdLFxuICBbMTY4NC44NTI1LCA0NDYuNjEyNV0sXG4gIFsxNjgwLjYwOTksIDQ0Ny40OTkxNV0sXG4gIFsxNjc4LjkxMzUsIDQ1MC44NzkyXSxcbiAgWzE2NzcuNTczNywgNDU0Ljc1NjQ3XSxcbiAgWzE2NzguODcsIDQ1OS4wMTk2XSxcbiAgWzE2NzUuOTcwNywgNDYyLjUzMTY4XSxcbiAgWzE2NzMuODg2NiwgNDU4LjA4MDldLFxuICBbMTY2OS44MjY0LCA0NTkuMjE4MzJdLFxuICBbMTY3MS4zNTgyLCA0NjMuNTc3NF0sXG4gIFsxNjc0LjMyMjMsIDQ2Ny4wMjMwN10sXG4gIFsxNjc4LjkzMDQsIDQ3MC4yMzY4XSxcbiAgWzE2NzguNjU5MiwgNDY2LjM1MzgyXSxcbiAgWzE2ODEuMDY3NiwgNDYyLjkwNTAzXSxcbiAgWzE2ODUuNTE5LCA0NjMuNzc1NzNdLFxuICBbMTY4OS4wMjE1LCA0NjQuODM4ODddLFxuICBbMTY5Mi40Njk1LCA0NjMuMjYwNl0sXG4gIFsxNjk2LjQwODcsIDQ2Mi45NTY4XSxcbiAgWzE3MDMuMTYzMSwgNDYwLjM2MDMyXSxcbiAgWzE3MDYuMzg5NSwgNDYyLjQ2NzQ3XSxcbiAgWzE3MDkuNDI2MSwgNDYzLjk2NDk3XSxcbiAgWzE3MDcuNjIyMywgNDY3Ljk4NzY0XSxcbiAgWzE3MDMuODQxMSwgNDY1Ljk1OTE3XSxcbiAgWzE3MDAuMTcxOSwgNDY0LjAzMDc2XSxcbiAgWzE3MDAuMzE4NSwgNDY4Ljg3NDE1XSxcbiAgWzE3MDQuMjg1MywgNDcwLjk3NDU1XSxcbiAgWzE3MDYuNzQ3LCA0NzUuMTQxNDVdLFxuICBbMTcwMy4xMzI3LCA0NzUuMzE5NTJdLFxuICBbMTY5OS41NTUzLCA0NzMuNjkxOTZdLFxuICBbMTcwMC4xMjg0LCA0NzguNDQ2MzhdLFxuICBbMTY5Ni4wMjY1LCA0NzcuNzgwMl0sXG4gIFsxNjk3LjQzMTQsIDQ4Mi40NTEzNV0sXG4gIFsxNjkzLjA4MDgsIDQ4NC4xMzUxXSxcbiAgWzE2OTIuNjI3MiwgNDgwLjIwMDJdLFxuICBbMTY4OC4wNjQ3LCA0ODIuMDA2NTNdLFxuICBbMTY4OC42MDk2LCA0ODUuNTE0OV0sXG4gIFsxNjg1LjQ1MjksIDQ4OC4wNDc5NF0sXG4gIFsxNjgzLjQ4NzMsIDQ5MS4xODUwM10sXG4gIFsxNjc5Ljk1ODUsIDQ5Mi45NDE3XSxcbiAgWzE2NzQuNTQ1NywgNDk4Ljk5MDA1XSxcbiAgWzE2NzAuNzk1NSwgNDk5Ljk5NDJdLFxuICBbMTY2NS4xNjkxLCA1MDUuNzg1OThdLFxuICBbMTY2OC45OTM4LCA1MDQuMDU1ODhdLFxuICBbMTY3NS40OTM1LCA1MDMuMjIzN10sXG4gIFsxNjc3LjU0NDcsIDUwNy4xNDg3NF0sXG4gIFsxNjczLjYzNzYsIDUxMC40NTU0XSxcbiAgWzE2NzIuNDg4NSwgNTA2LjAxOTFdLFxuICBbMTY2OC43NzY0LCA1MDkuMjY3MjddLFxuICBbMTY2NC41ODA4LCA1MTAuMzQ2NzRdLFxuICBbMTY2MS4wNjg2LCA1MDcuNzg3MzJdLFxuICBbMTY1Ny4zNTE4LCA1MTAuODUwMzRdLFxuICBbMTY2MC44NTI1LCA1MTIuOTI4XSxcbiAgWzE2NTcuMDQyMiwgNTE1LjY5NzhdLFxuICBbMTY2MC42Mjg0LCA1MTguMjUxNjVdLFxuICBbMTY1OS43MzI4LCA1MjMuNDY3MTZdLFxuICBbMTY1NC41NTI3LCA1MjMuNTQzM10sXG4gIFsxNjQ5LjMyNjQsIDUyMS45ODQyNV0sXG4gIFsxNjQ3LjYzMywgNTI3LjE3NzJdLFxuICBbMTY0Ni4zODM4LCA1MzMuMDg3M10sXG4gIFsxNjQwLjY0OTksIDUzMi45MjcxXSxcbiAgWzE2NDYuMTczNiwgNTM5LjY3MDk2XSxcbiAgWzE2NTEuNDQ1NCwgNTM2LjQxOTA3XSxcbiAgWzE2NTIuNzk0MiwgNTQyLjgyODI1XSxcbiAgWzE2NjAuMTg2MywgNTQxLjQyNjldLFxuICBbMTY1Ny44MTY5LCA1NDcuMDE2MjRdLFxuICBbMTY2MC4zNDQ2LCA1NTIuMTI0XSxcbiAgWzE2NjUuMzg0LCA1NTQuNjc5MV0sXG4gIFsxNjY1LjE5MTMsIDU2MC41ODA4XSxcbiAgWzE2NjAuNzMwNSwgNTU4LjA4Mjc2XSxcbiAgWzE2NTUuNzAyNCwgNTU0LjczMDQ3XSxcbiAgWzE2NTIuNjQ1NCwgNTUwLjEwOF0sXG4gIFsxNjQ3Ljg2OTMsIDU0Ni44NjVdLFxuICBbMTY0MS40NTc2LCA1NTMuMDY2NDddLFxuICBbMTY0Mi40NzMsIDU0OC41MDY3XSxcbiAgWzE2NDIuMzY3NywgNTQzLjU0ODFdLFxuICBbMTY0Ni41ODI1LCA1NTIuODM1OF0sXG4gIFsxNjU2LjI0NDYsIDU1OS42ODc0NF0sXG4gIFsxNjUxLjk1OTIsIDU2MC43NDRdLFxuICBbMTY1MC42NTM2LCA1NTUuNTAxN10sXG4gIFsxNjQ3LjgyMjYsIDU1OS40MTExM11cbl07IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvQ29sb3JQcmVzZXRzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICBTa2V0Y2ggdmFyaWFibGVzXG4gICovXG4gIFVzZVBlckJyYW5jaENvbG9yczogZmFsc2UsXG5cblxuICAvKipcbiAgICBTaW11bGF0aW9uIGNvbmZpZ3VyYXRpb25zXG4gICovXG5cbiAgVmVuYXRpb25UeXBlOiAnQ2xvc2VkJywgICAgICAgIC8vIHZlbmF0aW9uIGNhbiBiZSBcIk9wZW5cIiBvciBcIkNsb3NlZFwiXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgICAvLyBsZW5ndGggb2YgZWFjaCBicmFuY2ggc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiA1MCwgICAgICAgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXR0cmFjdG9yIHRoYXQgYXR0cmFjdHMgbm9kZXNcbiAgS2lsbERpc3RhbmNlOiA1LCAgICAgICAgICAgICAgIC8vIGRpc3RhbmNlIChkX2spIGJldHdlZW4gYXR0cmFjdG9yIGFuZCBub2RlcyB3aGVuIGJyYW5jaGVzIGFyZSBlbmRlZFxuICBJc1BhdXNlZDogZmFsc2UsICAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXG4gIEVuYWJsZUNhbmFsaXphdGlvbjogdHJ1ZSwgICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxuICBFbmFibGVPcGFjaXR5QmxlbmRpbmc6IGZhbHNlLCAgLy8gdHVybnMgb24vb2ZmIG9wYWNpdHlcblxuXG4gIC8qKlxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xuICAqL1xuXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xuICBTaG93QXR0cmFjdG9yczogdHJ1ZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcbiAgU2hvd05vZGVzOiB0cnVlLCAgICAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ24nXG4gIFNob3dUaXBzOiBmYWxzZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAneidcbiAgU2hvd0tpbGxab25lczogZmFsc2UsICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ2snXG4gIFNob3dJbmZsdWVuY2VMaW5lczogdHJ1ZSwgICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xuICBTaG93Qm91bmRzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcbiAgU2hvd09ic3RhY2xlczogZmFsc2UsICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ28nXG5cbiAgLy8gTW9kZXNcbiAgUmVuZGVyTW9kZTogJ0xpbmVzJywgIC8vIGRyYXcgYnJhbmNoIHNlZ21lbnRzIGFzIFwiTGluZXNcIiBvciBcIkRvdHNcIlxuXG4gIC8vIENvbG9yc1xuICBDb2xvcnM6IERhcmssXG5cbiAgLy8gTGluZSB0aGlja25lc3Nlc1xuICBCcmFuY2hUaGlja25lc3M6IDEsXG4gIFRpcFRoaWNrbmVzczogMixcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAxXG59IiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcbmltcG9ydCBOZXR3b3JrIGZyb20gJy4uLy4uLy4uL2NvcmUvTmV0d29yayc7XG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi8uLi9jb3JlL05vZGUnO1xuaW1wb3J0IEF0dHJhY3RvciBmcm9tICcuLi8uLi8uLi9jb3JlL0F0dHJhY3Rvcic7XG5pbXBvcnQgUGF0aCBmcm9tICcuLi8uLi8uLi9jb3JlL1BhdGgnO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xuaW1wb3J0IHsgc2V0dXBLZXlMaXN0ZW5lcnMgfSBmcm9tICcuLi8uLi8uLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL1NldHRpbmdzJztcbmltcG9ydCB7IEdyZWVrU3RhdHVlIH0gZnJvbSAnLi9BdHRyYWN0b3JQYXR0ZXJucyc7XG5cbmxldCBjYW52YXMsIGN0eDtcbmxldCBuZXR3b3JrO1xuXG5sZXQgc2hvd0hlbHAgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIGluaXRpYWwgY29uZGl0aW9ucyBmb3Igc2ltdWxhdGlvblxubGV0IHNldHVwID0gKCkgPT4ge1xuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tldGNoJyk7XG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIC8vIEluaXRpYWxpemUgc2ltdWxhdGlvbiBvYmplY3RcbiAgbmV0d29yayA9IG5ldyBOZXR3b3JrKGN0eCwgU2V0dGluZ3MpO1xuXG4gIC8vIEFkZCB0aGUgYm91bmRzLCBhdHRyYWN0b3JzLCBhbmQgcm9vdCBub2Rlc1xuICByZXNldE5ldHdvcmsoKTtcblxuICAvLyBTZXQgdXAgY29tbW9uIGtleWJvYXJkIGludGVyYWN0aW9uIGxpc3RlbmVyc1xuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcblxuICAvLyBCZWdpbiBhbmltYXRpb24gbG9vcFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcbn1cblxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcbiAgbmV0d29yay5yZXNldCgpO1xuICBhZGRBdHRyYWN0b3JzKCk7XG4gIGFkZFJvb3ROb2RlcygpO1xufVxuXG4gIGxldCBhZGRBdHRyYWN0b3JzID0gKCkgPT4ge1xuICAgIGxldCBhdHRyYWN0b3JzID0gW107XG5cbiAgICBmb3IobGV0IGNvb3JkcyBvZiBHcmVla1N0YXR1ZSkge1xuICAgICAgYXR0cmFjdG9ycy5wdXNoKFxuICAgICAgICBuZXcgQXR0cmFjdG9yKFxuICAgICAgICAgIG5ldyBWZWMyKFxuICAgICAgICAgICAgY29vcmRzWzBdKjEuMSAtIDc1MCxcbiAgICAgICAgICAgIGNvb3Jkc1sxXSoxLjEgLSA5MFxuICAgICAgICAgICksXG4gICAgICAgICAgY3R4LFxuICAgICAgICAgIFNldHRpbmdzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbmV0d29yay5hdHRyYWN0b3JzID0gYXR0cmFjdG9ycztcbiAgfVxuXG4gIC8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xuICBsZXQgYWRkUm9vdE5vZGVzID0gKCkgPT4ge1xuICAgIG5ldHdvcmsuYWRkTm9kZShcbiAgICAgIG5ldyBOb2RlKFxuICAgICAgICBudWxsLFxuICAgICAgICBuZXcgVmVjMihcbiAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aC8yIC0gNDQwLFxuICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodC8yICsgMTAwXG4gICAgICAgICksXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBjdHgsXG4gICAgICAgIFNldHRpbmdzXG4gICAgICApXG4gICAgKTtcblxuICAgIC8vIG5ldHdvcmsuYWRkTm9kZShcbiAgICAvLyAgIG5ldyBOb2RlKFxuICAgIC8vICAgICBudWxsLFxuICAgIC8vICAgICBuZXcgVmVjMihcbiAgICAvLyAgICAgICB3aW5kb3cuaW5uZXJXaWR0aC8yICsgMjAwLFxuICAgIC8vICAgICAgIHdpbmRvdy5pbm5lckhlaWdodC8yXG4gICAgLy8gICAgICksXG4gICAgLy8gICAgIGZhbHNlLFxuICAgIC8vICAgICBjdHgsXG4gICAgLy8gICAgIFNldHRpbmdzXG4gICAgLy8gICApXG4gICAgLy8gKTtcbiAgfVxuXG5sZXQgZHJhd1RleHQgPSAoKSA9PiB7XG4gIGxldCB0ZXh0ID0gW1xuICAgICdBdHRyYWN0b3JzIHBsYWNlZCBiYXNlZCBvbiBpbWFnZSBkYXRhLicsXG4gICAgJycsXG4gICAgJzEgPSBzcXVhcmUnLFxuICAgICcnLFxuICAgICdTcGFjZSA9IHRvZ2dsZSBwYXVzZScsXG4gICAgJ3IgPSByZXNldCcsXG4gICAgJ2MgPSB0b2dnbGUgY2FuYWxpemF0aW9uJyxcbiAgICAncCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nJyxcbiAgICAndiA9IHRvZ2dsZSBicmFuY2ggdmlzaWJpbGl0eScsXG4gICAgJ3MgPSB0b2dnbGUgYXR0cmFjdG9yIHZpc2liaWxpdHknLFxuICAgICdhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZXMnLFxuICAgICdrID0gdG9nZ2xlIGtpbGwgem9uZXMnLFxuICAgICd0ID0gdG9nZ2xlIHRpcHMnLFxuICAgICdpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcycsXG4gICAgJ2ggPSB0b2dnbGUgdGhpcyBoZWxwIHRleHQnXG4gIF07XG5cbiAgY3R4LmZvbnQgPSAnYm9sZCAyNHB4IHNhbnMtc2VyaWYnO1xuICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xuICBjdHguZmlsbFRleHQoJ0ltYWdlcycsIDIwLCA0MCk7XG5cbiAgY3R4LmZvbnQgPSAnMTZweCBzYW5zLXNlcmlmJztcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSc7XG4gIGZvcihsZXQgaT0wOyBpPHRleHQubGVuZ3RoOyBpKyspIHtcbiAgICBjdHguZmlsbFRleHQodGV4dFtpXSwgMjAsIDIyKmkgKyA4MCk7XG4gIH1cbn1cblxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcbmxldCB1cGRhdGUgPSAodGltZXN0YW1wKSA9PiB7XG4gIG5ldHdvcmsudXBkYXRlKCk7XG4gIG5ldHdvcmsuZHJhdygpO1xuXG4gIGlmKHNob3dIZWxwKSB7XG4gICAgZHJhd1RleHQoKTtcbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xufVxuXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgc3dpdGNoKGUua2V5KSB7XG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcbiAgICBjYXNlICdyJzpcbiAgICAgIHJlc2V0TmV0d29yaygpO1xuICAgICAgYnJlYWs7XG5cbiAgICAvLyBoID0gdG9nZ2xlIGhlbHAgdGV4dFxuICAgIGNhc2UgJ2gnOlxuICAgICAgc2hvd0hlbHAgPSAhc2hvd0hlbHA7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJzEnOlxuICAgICAgY3VycmVudEltYWdlID0gU1FVQVJFO1xuICAgICAgcmVzZXROZXR3b3JrKCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cblxuLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uXG5zZXR1cCgpOyIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhiLGMsZCl7dmFyIGU9bmV3IFhNTEh0dHBSZXF1ZXN0O2Uub3BlbihcIkdFVFwiLGIpLGUucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGUub25sb2FkPWZ1bmN0aW9uKCl7YShlLnJlc3BvbnNlLGMsZCl9LGUub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZS5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYSxiLGQsZSl7aWYoZT1lfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZSYmKGUuZG9jdW1lbnQudGl0bGU9ZS5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBhKXJldHVybiBjKGEsYixkKTt2YXIgZz1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09YS50eXBlLGg9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaT0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGl8fGcmJmgpJiZcIm9iamVjdFwiPT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGo9bmV3IEZpbGVSZWFkZXI7ai5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1qLnJlc3VsdDthPWk/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZT9lLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGU9bnVsbH0sai5yZWFkQXNEYXRhVVJMKGEpfWVsc2V7dmFyIGs9Zi5VUkx8fGYud2Via2l0VVJMLGw9ay5jcmVhdGVPYmplY3RVUkwoYSk7ZT9lLmxvY2F0aW9uPWw6bG9jYXRpb24uaHJlZj1sLGU9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5yZXZva2VPYmplY3RVUkwobCl9LDRFNCl9fSk7Zi5zYXZlQXM9YS5zYXZlQXM9YSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9YSl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJcbmltcG9ydCBzb3J0IGZyb20gJy4vc29ydCc7XG5pbXBvcnQgcmFuZ2UgZnJvbSAnLi9yYW5nZSc7XG5pbXBvcnQgd2l0aGluIGZyb20gJy4vd2l0aGluJztcblxuY29uc3QgZGVmYXVsdEdldFggPSBwID0+IHBbMF07XG5jb25zdCBkZWZhdWx0R2V0WSA9IHAgPT4gcFsxXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS0RCdXNoIHtcbiAgICBjb25zdHJ1Y3Rvcihwb2ludHMsIGdldFggPSBkZWZhdWx0R2V0WCwgZ2V0WSA9IGRlZmF1bHRHZXRZLCBub2RlU2l6ZSA9IDY0LCBBcnJheVR5cGUgPSBGbG9hdDY0QXJyYXkpIHtcbiAgICAgICAgdGhpcy5ub2RlU2l6ZSA9IG5vZGVTaXplO1xuICAgICAgICB0aGlzLnBvaW50cyA9IHBvaW50cztcblxuICAgICAgICBjb25zdCBJbmRleEFycmF5VHlwZSA9IHBvaW50cy5sZW5ndGggPCA2NTUzNiA/IFVpbnQxNkFycmF5IDogVWludDMyQXJyYXk7XG5cbiAgICAgICAgY29uc3QgaWRzID0gdGhpcy5pZHMgPSBuZXcgSW5kZXhBcnJheVR5cGUocG9pbnRzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNvb3JkcyA9IHRoaXMuY29vcmRzID0gbmV3IEFycmF5VHlwZShwb2ludHMubGVuZ3RoICogMik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkc1tpXSA9IGk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGldID0gZ2V0WChwb2ludHNbaV0pO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpICsgMV0gPSBnZXRZKHBvaW50c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0KGlkcywgY29vcmRzLCBub2RlU2l6ZSwgMCwgaWRzLmxlbmd0aCAtIDEsIDApO1xuICAgIH1cblxuICAgIHJhbmdlKG1pblgsIG1pblksIG1heFgsIG1heFkpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxuXG4gICAgd2l0aGluKHgsIHksIHIpIHtcbiAgICAgICAgcmV0dXJuIHdpdGhpbih0aGlzLmlkcywgdGhpcy5jb29yZHMsIHgsIHksIHIsIHRoaXMubm9kZVNpemUpO1xuICAgIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmFuZ2UoaWRzLCBjb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGxldCB4LCB5O1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeCA9IGNvb3Jkc1syICogaV07XG4gICAgICAgICAgICAgICAgeSA9IGNvb3Jkc1syICogaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtaW5YIDw9IHggOiBtaW5ZIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWF4WCA+PSB4IDogbWF4WSA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCByaWdodCwgZGVwdGgpIHtcbiAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSByZXR1cm47XG5cbiAgICBjb25zdCBtID0gKGxlZnQgKyByaWdodCkgPj4gMTtcblxuICAgIHNlbGVjdChpZHMsIGNvb3JkcywgbSwgbGVmdCwgcmlnaHQsIGRlcHRoICUgMik7XG5cbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBsZWZ0LCBtIC0gMSwgZGVwdGggKyAxKTtcbiAgICBzb3J0S0QoaWRzLCBjb29yZHMsIG5vZGVTaXplLCBtICsgMSwgcmlnaHQsIGRlcHRoICsgMSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbGVmdCwgcmlnaHQsIGluYykge1xuXG4gICAgd2hpbGUgKHJpZ2h0ID4gbGVmdCkge1xuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0ID4gNjAwKSB7XG4gICAgICAgICAgICBjb25zdCBuID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCB6ID0gTWF0aC5sb2cobik7XG4gICAgICAgICAgICBjb25zdCBzID0gMC41ICogTWF0aC5leHAoMiAqIHogLyAzKTtcbiAgICAgICAgICAgIGNvbnN0IHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgICAgICAgY29uc3QgbmV3TGVmdCA9IE1hdGgubWF4KGxlZnQsIE1hdGguZmxvb3IoayAtIG0gKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBjb25zdCBuZXdSaWdodCA9IE1hdGgubWluKHJpZ2h0LCBNYXRoLmZsb29yKGsgKyAobiAtIG0pICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgc2VsZWN0KGlkcywgY29vcmRzLCBrLCBuZXdMZWZ0LCBuZXdSaWdodCwgaW5jKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHQgPSBjb29yZHNbMiAqIGsgKyBpbmNdO1xuICAgICAgICBsZXQgaSA9IGxlZnQ7XG4gICAgICAgIGxldCBqID0gcmlnaHQ7XG5cbiAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGspO1xuICAgICAgICBpZiAoY29vcmRzWzIgKiByaWdodCArIGluY10gPiB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgcmlnaHQpO1xuXG4gICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgai0tO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaSArIGluY10gPCB0KSBpKys7XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBqICsgaW5jXSA+IHQpIGotLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb29yZHNbMiAqIGxlZnQgKyBpbmNdID09PSB0KSBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgaik7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGosIHJpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqIDw9IGspIGxlZnQgPSBqICsgMTtcbiAgICAgICAgaWYgKGsgPD0gaikgcmlnaHQgPSBqIC0gMTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKSB7XG4gICAgc3dhcChpZHMsIGksIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSwgMiAqIGopO1xuICAgIHN3YXAoY29vcmRzLCAyICogaSArIDEsIDIgKiBqICsgMSk7XG59XG5cbmZ1bmN0aW9uIHN3YXAoYXJyLCBpLCBqKSB7XG4gICAgY29uc3QgdG1wID0gYXJyW2ldO1xuICAgIGFycltpXSA9IGFycltqXTtcbiAgICBhcnJbal0gPSB0bXA7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhpbihpZHMsIGNvb3JkcywgcXgsIHF5LCByLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBjb25zdCByMiA9IHIgKiByO1xuXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBheGlzID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IHJpZ2h0ID0gc3RhY2sucG9wKCk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBzdGFjay5wb3AoKTtcblxuICAgICAgICBpZiAocmlnaHQgLSBsZWZ0IDw9IG5vZGVTaXplKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gbGVmdDsgaSA8PSByaWdodDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNxRGlzdChjb29yZHNbMiAqIGldLCBjb29yZHNbMiAqIGkgKyAxXSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICBjb25zdCB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgY29uc3QgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmIChzcURpc3QoeCwgeSwgcXgsIHF5KSA8PSByMikgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggLSByIDw9IHggOiBxeSAtIHIgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCArIHIgPj0geCA6IHF5ICsgciA+PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gKyAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocmlnaHQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzcURpc3QoYXgsIGF5LCBieCwgYnkpIHtcbiAgICBjb25zdCBkeCA9IGF4IC0gYng7XG4gICAgY29uc3QgZHkgPSBheSAtIGJ5O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBvaW50LCB2cykge1xuICAgIC8vIHJheS1jYXN0aW5nIGFsZ29yaXRobSBiYXNlZCBvblxuICAgIC8vIGh0dHA6Ly93d3cuZWNzZS5ycGkuZWR1L0hvbWVwYWdlcy93cmYvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcbiAgICBcbiAgICB2YXIgeCA9IHBvaW50WzBdLCB5ID0gcG9pbnRbMV07XG4gICAgXG4gICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwLCBqID0gdnMubGVuZ3RoIC0gMTsgaSA8IHZzLmxlbmd0aDsgaiA9IGkrKykge1xuICAgICAgICB2YXIgeGkgPSB2c1tpXVswXSwgeWkgPSB2c1tpXVsxXTtcbiAgICAgICAgdmFyIHhqID0gdnNbal1bMF0sIHlqID0gdnNbal1bMV07XG4gICAgICAgIFxuICAgICAgICB2YXIgaW50ZXJzZWN0ID0gKCh5aSA+IHkpICE9ICh5aiA+IHkpKVxuICAgICAgICAgICAgJiYgKHggPCAoeGogLSB4aSkgKiAoeSAtIHlpKSAvICh5aiAtIHlpKSArIHhpKTtcbiAgICAgICAgaWYgKGludGVyc2VjdCkgaW5zaWRlID0gIWluc2lkZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGluc2lkZTtcbn07XG4iLCJpbXBvcnQgdG9QYXRoIGZyb20gJy4vdG9QYXRoJztcbmltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcbmltcG9ydCB2YWxpZCBmcm9tICcuL3ZhbGlkJztcblxuZXhwb3J0IHsgdG9QYXRoLCB0b1BvaW50cywgdmFsaWQgfTsiLCJpbXBvcnQgdG9Qb2ludHMgZnJvbSAnLi90b1BvaW50cyc7XG5cbnZhciBwb2ludHNUb0QgPSBmdW5jdGlvbiBwb2ludHNUb0QocCkge1xuICB2YXIgZCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmaXJzdFBvaW50ID0gdm9pZCAwO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgcG9pbnQgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBfcG9pbnQkY3VydmUgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICBjdXJ2ZSA9IF9wb2ludCRjdXJ2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcG9pbnQkY3VydmUsXG4gICAgICAgICAgbW92ZVRvID0gcG9pbnQubW92ZVRvLFxuICAgICAgICAgIHggPSBwb2ludC54LFxuICAgICAgICAgIHkgPSBwb2ludC55O1xuXG4gICAgICB2YXIgaXNGaXJzdFBvaW50ID0gaSA9PT0gMCB8fCBtb3ZlVG87XG4gICAgICB2YXIgaXNMYXN0UG9pbnQgPSBpID09PSBwLmxlbmd0aCAtIDEgfHwgcFtpICsgMV0ubW92ZVRvO1xuICAgICAgdmFyIHByZXZQb2ludCA9IGkgPT09IDAgPyBudWxsIDogcFtpIC0gMV07XG5cbiAgICAgIGlmIChpc0ZpcnN0UG9pbnQpIHtcbiAgICAgICAgZmlyc3RQb2ludCA9IHBvaW50O1xuXG4gICAgICAgIGlmICghaXNMYXN0UG9pbnQpIHtcbiAgICAgICAgICBkICs9ICdNJyArIHggKyAnLCcgKyB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnZlKSB7XG4gICAgICAgIHN3aXRjaCAoY3VydmUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2FyYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMiA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9IF9wb2ludCRjdXJ2ZTIubGFyZ2VBcmNGbGFnLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZyA9IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBcixcbiAgICAgICAgICAgICAgICByeCA9IF9wb2ludCRjdXJ2ZTIucngsXG4gICAgICAgICAgICAgICAgcnkgPSBfcG9pbnQkY3VydmUyLnJ5LFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9IF9wb2ludCRjdXJ2ZTIuc3dlZXBGbGFnLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZyA9IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJHhBeGlzUm8gPSBfcG9pbnQkY3VydmUyLnhBeGlzUm90YXRpb24sXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbiA9IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbztcblxuICAgICAgICAgICAgZCArPSAnQScgKyByeCArICcsJyArIHJ5ICsgJywnICsgeEF4aXNSb3RhdGlvbiArICcsJyArIGxhcmdlQXJjRmxhZyArICcsJyArIHN3ZWVwRmxhZyArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3ViaWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTMgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBjeDEgPSBfcG9pbnQkY3VydmUzLngxLFxuICAgICAgICAgICAgICAgIGN5MSA9IF9wb2ludCRjdXJ2ZTMueTEsXG4gICAgICAgICAgICAgICAgY3gyID0gX3BvaW50JGN1cnZlMy54MixcbiAgICAgICAgICAgICAgICBjeTIgPSBfcG9pbnQkY3VydmUzLnkyO1xuXG4gICAgICAgICAgICBkICs9ICdDJyArIGN4MSArICcsJyArIGN5MSArICcsJyArIGN4MiArICcsJyArIGN5MiArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncXVhZHJhdGljJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmU0ID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgcXgxID0gX3BvaW50JGN1cnZlNC54MSxcbiAgICAgICAgICAgICAgICBxeTEgPSBfcG9pbnQkY3VydmU0LnkxO1xuXG4gICAgICAgICAgICBkICs9ICdRJyArIHF4MSArICcsJyArIHF5MSArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICAgIGQgKz0gJ1onO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTGFzdFBvaW50ICYmIHggPT09IGZpcnN0UG9pbnQueCAmJiB5ID09PSBmaXJzdFBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnWic7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54ICYmIHkgIT09IHByZXZQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ0wnICsgeCArICcsJyArIHk7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54KSB7XG4gICAgICAgIGQgKz0gJ0gnICsgeDtcbiAgICAgIH0gZWxzZSBpZiAoeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnVicgKyB5O1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkO1xufTtcblxudmFyIHRvUGF0aCA9IGZ1bmN0aW9uIHRvUGF0aChzKSB7XG4gIHZhciBpc1BvaW50cyA9IEFycmF5LmlzQXJyYXkocyk7XG4gIHZhciBpc0dyb3VwID0gaXNQb2ludHMgPyBBcnJheS5pc0FycmF5KHNbMF0pIDogcy50eXBlID09PSAnZyc7XG4gIHZhciBwb2ludHMgPSBpc1BvaW50cyA/IHMgOiBpc0dyb3VwID8gcy5zaGFwZXMubWFwKGZ1bmN0aW9uIChzaHApIHtcbiAgICByZXR1cm4gdG9Qb2ludHMoc2hwKTtcbiAgfSkgOiB0b1BvaW50cyhzKTtcblxuICBpZiAoaXNHcm91cCkge1xuICAgIHJldHVybiBwb2ludHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcG9pbnRzVG9EKHApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50c1RvRChwb2ludHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9QYXRoOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHRvUG9pbnRzID0gZnVuY3Rpb24gdG9Qb2ludHMoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsndHlwZSddKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21DaXJjbGUocHJvcHMpO1xuICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21FbGxpcHNlKHByb3BzKTtcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tTGluZShwcm9wcyk7XG4gICAgY2FzZSAncGF0aCc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBhdGgocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2x5Z29uKHByb3BzKTtcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKHByb3BzKTtcbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUmVjdChwcm9wcyk7XG4gICAgY2FzZSAnZyc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUcocHJvcHMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIHNoYXBlIHR5cGUnKTtcbiAgfVxufTtcblxudmFyIGdldFBvaW50c0Zyb21DaXJjbGUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tQ2lyY2xlKF9yZWYyKSB7XG4gIHZhciBjeCA9IF9yZWYyLmN4LFxuICAgICAgY3kgPSBfcmVmMi5jeSxcbiAgICAgIHIgPSBfcmVmMi5yO1xuXG4gIHJldHVybiBbeyB4OiBjeCwgeTogY3kgLSByLCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByLCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHIsIHJ5OiByLCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21FbGxpcHNlID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUVsbGlwc2UoX3JlZjMpIHtcbiAgdmFyIGN4ID0gX3JlZjMuY3gsXG4gICAgICBjeSA9IF9yZWYzLmN5LFxuICAgICAgcnggPSBfcmVmMy5yeCxcbiAgICAgIHJ5ID0gX3JlZjMucnk7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHJ5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByeSwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21MaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUxpbmUoX3JlZjQpIHtcbiAgdmFyIHgxID0gX3JlZjQueDEsXG4gICAgICB4MiA9IF9yZWY0LngyLFxuICAgICAgeTEgPSBfcmVmNC55MSxcbiAgICAgIHkyID0gX3JlZjQueTI7XG5cbiAgcmV0dXJuIFt7IHg6IHgxLCB5OiB5MSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeDIsIHk6IHkyIH1dO1xufTtcblxudmFyIHZhbGlkQ29tbWFuZHMgPSAvW01tTGxIaFZ2Q2NTc1FxVHRBYVp6XS9nO1xuXG52YXIgY29tbWFuZExlbmd0aHMgPSB7XG4gIEE6IDcsXG4gIEM6IDYsXG4gIEg6IDEsXG4gIEw6IDIsXG4gIE06IDIsXG4gIFE6IDQsXG4gIFM6IDQsXG4gIFQ6IDIsXG4gIFY6IDEsXG4gIFo6IDBcbn07XG5cbnZhciByZWxhdGl2ZUNvbW1hbmRzID0gWydhJywgJ2MnLCAnaCcsICdsJywgJ20nLCAncScsICdzJywgJ3QnLCAndiddO1xuXG52YXIgaXNSZWxhdGl2ZSA9IGZ1bmN0aW9uIGlzUmVsYXRpdmUoY29tbWFuZCkge1xuICByZXR1cm4gcmVsYXRpdmVDb21tYW5kcy5pbmRleE9mKGNvbW1hbmQpICE9PSAtMTtcbn07XG5cbnZhciBvcHRpb25hbEFyY0tleXMgPSBbJ3hBeGlzUm90YXRpb24nLCAnbGFyZ2VBcmNGbGFnJywgJ3N3ZWVwRmxhZyddO1xuXG52YXIgZ2V0Q29tbWFuZHMgPSBmdW5jdGlvbiBnZXRDb21tYW5kcyhkKSB7XG4gIHJldHVybiBkLm1hdGNoKHZhbGlkQ29tbWFuZHMpO1xufTtcblxudmFyIGdldFBhcmFtcyA9IGZ1bmN0aW9uIGdldFBhcmFtcyhkKSB7XG4gIHJldHVybiBkLnNwbGl0KHZhbGlkQ29tbWFuZHMpLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1swLTldKy0vZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLnNsaWNlKDAsIC0xKSArICcgLSc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1xcLlswLTldKy9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0gKyAnICc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnRyaW0oKTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYubGVuZ3RoID4gMDtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYuc3BsaXQoL1sgLF0rLykubWFwKHBhcnNlRmxvYXQpLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuICFpc05hTihuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBhdGggPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUGF0aChfcmVmNSkge1xuICB2YXIgZCA9IF9yZWY1LmQ7XG5cbiAgdmFyIGNvbW1hbmRzID0gZ2V0Q29tbWFuZHMoZCk7XG4gIHZhciBwYXJhbXMgPSBnZXRQYXJhbXMoZCk7XG5cbiAgdmFyIHBvaW50cyA9IFtdO1xuXG4gIHZhciBtb3ZlVG8gPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb21tYW5kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2ldO1xuICAgIHZhciB1cHBlckNhc2VDb21tYW5kID0gY29tbWFuZC50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBjb21tYW5kTGVuZ3RoID0gY29tbWFuZExlbmd0aHNbdXBwZXJDYXNlQ29tbWFuZF07XG4gICAgdmFyIHJlbGF0aXZlID0gaXNSZWxhdGl2ZShjb21tYW5kKTtcblxuICAgIGlmIChjb21tYW5kTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNvbW1hbmRQYXJhbXMgPSBwYXJhbXMuc2hpZnQoKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gY29tbWFuZFBhcmFtcy5sZW5ndGggLyBjb21tYW5kTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICB2YXIgcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBzd2l0Y2ggKHVwcGVyQ2FzZUNvbW1hbmQpIHtcbiAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIHZhciB4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICAgICAgbW92ZVRvID0geyB4OiB4LCB5OiB5IH07XG4gICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogcHJldlBvaW50LnlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiBwcmV2UG9pbnQueCxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyYycsXG4gICAgICAgICAgICAgICAgcng6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICByeTogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHhBeGlzUm90YXRpb246IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBsYXJnZUFyY0ZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBzd2VlcEZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG9wdGlvbmFsQXJjS2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdWydjdXJ2ZSddW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1YmljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB4MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHZhciBzeDIgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3ggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgdmFyIGRpZmYgPSB7fTtcblxuICAgICAgICAgICAgdmFyIHN4MSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBzeTEgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmIChwcmV2UG9pbnQuY3VydmUgJiYgcHJldlBvaW50LmN1cnZlLnR5cGUgPT09ICdjdWJpYycpIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngyID8gcHJldlBvaW50LnggLSBkaWZmLnggOiBwcmV2UG9pbnQueCArIGRpZmYueDtcbiAgICAgICAgICAgICAgc3kxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTIgPyBwcmV2UG9pbnQueSAtIGRpZmYueSA6IHByZXZQb2ludC55ICsgZGlmZi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMoc3ggLSBzeDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhzeSAtIHN5Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAnY3ViaWMnLCB4MTogc3gxLCB5MTogc3kxLCB4Mjogc3gyLCB5Mjogc3kyIH0sIHg6IHN4LCB5OiBzeSB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncXVhZHJhdGljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIHZhciB0eCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgdHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgdHgxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHR5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ3F1YWRyYXRpYycpIHtcbiAgICAgICAgICAgICAgdmFyIF9kaWZmID0ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGguYWJzKHByZXZQb2ludC54IC0gcHJldlBvaW50LmN1cnZlLngxKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55MSlcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueCA8IHByZXZQb2ludC5jdXJ2ZS54MSA/IHByZXZQb2ludC54IC0gX2RpZmYueCA6IHByZXZQb2ludC54ICsgX2RpZmYueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTEgPyBwcmV2UG9pbnQueSAtIF9kaWZmLnkgOiBwcmV2UG9pbnQueSArIF9kaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgY3VydmU6IHsgdHlwZTogJ3F1YWRyYXRpYycsIHgxOiB0eDEsIHkxOiB0eTEgfSwgeDogdHgsIHk6IHR5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3ByZXZQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gfHwgeyB4OiAwLCB5OiAwIH07XG5cbiAgICAgIGlmIChfcHJldlBvaW50LnggIT09IG1vdmVUby54IHx8IF9wcmV2UG9pbnQueSAhPT0gbW92ZVRvLnkpIHtcbiAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBtb3ZlVG8ueCwgeTogbW92ZVRvLnkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9seWdvbiA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5Z29uKF9yZWY2KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNi5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IHRydWUsIHBvaW50czogcG9pbnRzIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5bGluZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5bGluZShfcmVmNykge1xuICB2YXIgcG9pbnRzID0gX3JlZjcucG9pbnRzO1xuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tUG9pbnRzKHsgY2xvc2VkOiBmYWxzZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvaW50cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2ludHMoX3JlZjgpIHtcbiAgdmFyIGNsb3NlZCA9IF9yZWY4LmNsb3NlZCxcbiAgICAgIHBvaW50cyA9IF9yZWY4LnBvaW50cztcblxuICB2YXIgbnVtYmVycyA9IHBvaW50cy5zcGxpdCgvW1xccyxdKy8pLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG4pO1xuICB9KTtcblxuICB2YXIgcCA9IG51bWJlcnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHBvaW50LCBpKSB7XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBhcnIucHVzaCh7IHg6IHBvaW50IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJbKGkgLSAxKSAvIDJdLnkgPSBwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9LCBbXSk7XG5cbiAgaWYgKGNsb3NlZCkge1xuICAgIHAucHVzaChfZXh0ZW5kcyh7fSwgcFswXSkpO1xuICB9XG5cbiAgcFswXS5tb3ZlVG8gPSB0cnVlO1xuXG4gIHJldHVybiBwO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3QoX3JlZjkpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWY5LmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjkucngsXG4gICAgICByeSA9IF9yZWY5LnJ5LFxuICAgICAgd2lkdGggPSBfcmVmOS53aWR0aCxcbiAgICAgIHggPSBfcmVmOS54LFxuICAgICAgeSA9IF9yZWY5Lnk7XG5cbiAgaWYgKHJ4IHx8IHJ5KSB7XG4gICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyh7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHJ4OiByeCB8fCByeSxcbiAgICAgIHJ5OiByeSB8fCByeCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCh7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIHg6IHgsIHk6IHkgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21CYXNpY1JlY3QoX3JlZjEwKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMTAuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmMTAud2lkdGgsXG4gICAgICB4ID0gX3JlZjEwLngsXG4gICAgICB5ID0gX3JlZjEwLnk7XG5cbiAgcmV0dXJuIFt7IHg6IHgsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyhfcmVmMTEpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMS5oZWlnaHQsXG4gICAgICByeCA9IF9yZWYxMS5yeCxcbiAgICAgIHJ5ID0gX3JlZjExLnJ5LFxuICAgICAgd2lkdGggPSBfcmVmMTEud2lkdGgsXG4gICAgICB4ID0gX3JlZjExLngsXG4gICAgICB5ID0gX3JlZjExLnk7XG5cbiAgdmFyIGN1cnZlID0geyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9O1xuXG4gIHJldHVybiBbeyB4OiB4ICsgcngsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCAtIHJ4LCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgcnksIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCAtIHJ5IH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgKyBoZWlnaHQsIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyByeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgLSByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCwgeTogeSArIHJ5IH0sIHsgeDogeCArIHJ4LCB5OiB5LCBjdXJ2ZTogY3VydmUgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUcgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRyhfcmVmMTIpIHtcbiAgdmFyIHNoYXBlcyA9IF9yZWYxMi5zaGFwZXM7XG4gIHJldHVybiBzaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHRvUG9pbnRzKHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUG9pbnRzOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGdldEVycm9ycyA9IGZ1bmN0aW9uIGdldEVycm9ycyhzaGFwZSkge1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyhzaGFwZSk7XG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBydWxlcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbWF0Y2ggPSBfcmVmLm1hdGNoLFxuICAgICAgICBwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgICByZXF1aXJlZCA9IF9yZWYucmVxdWlyZWQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGU7XG5cbiAgICBpZiAodHlwZW9mIHNoYXBlW3Byb3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgaXMgcmVxdWlyZWQnICsgKHByb3AgPT09ICd0eXBlJyA/ICcnIDogJyBvbiBhICcgKyBzaGFwZS50eXBlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGVbcHJvcF0pKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSBhcnJheScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHNoYXBlW3Byb3BdKSAhPT0gdHlwZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9mIHR5cGUgJyArIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoKSkge1xuICAgICAgICBpZiAobWF0Y2guaW5kZXhPZihzaGFwZVtwcm9wXSkgPT09IC0xKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9uZSBvZiAnICsgbWF0Y2guam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzaGFwZS50eXBlID09PSAnZycgJiYgQXJyYXkuaXNBcnJheShzaGFwZS5zaGFwZXMpKSB7XG4gICAgdmFyIGNoaWxkRXJyb3JzID0gc2hhcGUuc2hhcGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGdldEVycm9ycyhzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KGVycm9ycywgY2hpbGRFcnJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IFt7XG4gICAgbWF0Y2g6IFsnY2lyY2xlJywgJ2VsbGlwc2UnLCAnbGluZScsICdwYXRoJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmVjdCcsICdnJ10sXG4gICAgcHJvcDogJ3R5cGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH1dO1xuXG4gIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDEnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneTInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdkJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3BvaW50cycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVjdCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2hlaWdodCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnd2lkdGgnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2cnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdzaGFwZXMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxudmFyIHZhbGlkID0gZnVuY3Rpb24gdmFsaWQoc2hhcGUpIHtcbiAgdmFyIGVycm9ycyA9IGdldEVycm9ycyhzaGFwZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IGVycm9ycyxcbiAgICB2YWxpZDogZXJyb3JzLmxlbmd0aCA9PT0gMFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWQ7IiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9