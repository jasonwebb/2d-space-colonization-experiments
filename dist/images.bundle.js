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
/******/ 	return __webpack_require__(__webpack_require__.s = "./from-images/js/entry.js");
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

/***/ "./from-images/js/AttractorPatterns.js":
/*!*********************************************!*\
  !*** ./from-images/js/AttractorPatterns.js ***!
  \*********************************************/
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

/***/ "./from-images/js/Settings.js":
/*!************************************!*\
  !*** ./from-images/js/Settings.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ColorPresets */ "./core/ColorPresets.js");


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

/***/ "./from-images/js/entry.js":
/*!*********************************!*\
  !*** ./from-images/js/entry.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vec2 */ "./node_modules/vec2/vec2.js");
/* harmony import */ var vec2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vec2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_Network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Network */ "./core/Network.js");
/* harmony import */ var _core_Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Node */ "./core/Node.js");
/* harmony import */ var _core_Attractor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Attractor */ "./core/Attractor.js");
/* harmony import */ var _core_Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Path */ "./core/Path.js");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Settings */ "./from-images/js/Settings.js");
/* harmony import */ var _AttractorPatterns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AttractorPatterns */ "./from-images/js/AttractorPatterns.js");










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
            coords[0]*1.5 - 1300,
            coords[1]*1.5 - 200
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdHRyYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9Db2xvclByZXNldHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9EZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvcmUvTmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9QYXRoLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2Zyb20taW1hZ2VzL2pzL0F0dHJhY3RvclBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2Zyb20taW1hZ2VzL2pzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2Zyb20taW1hZ2VzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9maWxlLXNhdmVyL2Rpc3QvRmlsZVNhdmVyLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9yYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy9zb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3dpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9pbnQtaW4tcG9seWdvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9QYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvdG9Qb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy92YWxpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdmVjMi92ZWMyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBa0M7O0FBRW5CO0FBQ2YsMENBQTBDO0FBQzFDLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsb0NBQW9DLEVBQUUsaURBQVE7O0FBRTlDLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQWdFOztBQUVqRDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxrREFBSTs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBd0M7O0FBRWpDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ047QUFDQztBQUNROztBQUV0QjtBQUNmO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUMseUJBQXlCO0FBQ3pCLG9CQUFvQjs7QUFFcEIsb0JBQW9COztBQUVwQixxQkFBcUI7QUFDckIsd0JBQXdCOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsaUNBQUk7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixpQ0FBSSxDQUFDLHlEQUFNLFdBQVcseURBQU07O0FBRXpEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDhDQUFNO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcGFBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbkI7QUFDZjtBQUNBLHlCQUF5QjtBQUN6Qiw2QkFBNkIsT0FBTyxLQUFLO0FBQ3pDLHVCQUF1QixhQUFhO0FBQ3BDLG1CQUFtQjtBQUNuQixvQ0FBb0MsRUFBRSxpREFBUTtBQUM5Qyx1QkFBdUI7O0FBRXZCLDJCQUEyQjtBQUMzQix1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDTDs7QUFFN0IsYUFBYSxtQkFBTyxDQUFDLGtFQUFrQjs7QUFFeEI7QUFDZjtBQUNBLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIscUJBQXFCOztBQUVyQixzQ0FBc0M7QUFDdEMsbUJBQW1CLFVBQVU7QUFDN0IsbUJBQW1CO0FBQ25CLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIsNEJBQTRCOztBQUU1QixvQ0FBb0MsRUFBRSxpREFBUTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1QkFBdUI7QUFDdkMscUJBQXFCLGlDQUFJO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUNBQUk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixrQ0FBa0M7QUFDbEQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNsS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNBOztBQUVwQztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDLGtCQUFrQix1QkFBdUI7QUFDekMsa0JBQWtCLGdCQUFnQjtBQUNsQyxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Qsc0JBQXNCLEdBQUc7QUFDL0UsRUFBRSx5REFBTTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSx5REFBTTtBQUNsQjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsNkNBQTZDLGVBQWU7O0FBRTVEO0FBQ0EsRzs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ25xUEE7QUFBQTtBQUE4RDs7QUFFL0M7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLHVEQUFJOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDWTtBQUNOO0FBQ1U7QUFDVjtBQUNXO0FBQ3NCO0FBQ2xDO0FBQ2dCOztBQUVsRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBTyxNQUFNLGlEQUFROztBQUVyQztBQUNBOztBQUVBO0FBQ0EsRUFBRSxvRkFBaUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCLDhEQUFXO0FBQ2pDO0FBQ0EsWUFBWSx1REFBUztBQUNyQixjQUFjLGlDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpREFBUTtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtEQUFJO0FBQ2Q7QUFDQSxZQUFZLGlDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyxlQUFlO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxROzs7Ozs7Ozs7OztBQzNKQSw2SkFBZSxHQUFHLElBQXFDLENBQUMsaUNBQU8sRUFBRSxvQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUFBLG9HQUFDLENBQUMsS0FBSyxFQUE2RSxDQUFDLGtCQUFrQixhQUFhLGdCQUFnQiwrQkFBK0IsV0FBVyw0RkFBNEYsV0FBVyxrRUFBa0UsNERBQTRELFlBQVksSUFBSSxrQkFBa0IseUJBQXlCLDBEQUEwRCxrQkFBa0Isc0JBQXNCLHlDQUF5QyxVQUFVLGNBQWMseUJBQXlCLG9CQUFvQixJQUFJLFNBQVMsVUFBVSxvQ0FBb0MsY0FBYyxJQUFJLHlDQUF5QyxTQUFTLDBDQUEwQywwRkFBMEYscU9BQXFPLDBEQUEwRCx1REFBdUQsaU5BQWlOLDBCQUEwQiw0QkFBNEIsS0FBSyxLQUFLLGdEQUFnRCxtRkFBbUYsc0JBQXNCLEtBQUssa0NBQWtDLGlEQUFpRCxLQUFLLEdBQUcsbUJBQW1CLDhIQUE4SCxvSUFBb0ksMkNBQTJDLHFCQUFxQix1QkFBdUIsZUFBZSwwQkFBMEIsR0FBRyx3QkFBd0IseUNBQXlDLG9CQUFvQixLQUFLLGdEQUFnRCw0REFBNEQscUJBQXFCLE9BQU8sRUFBRSxvQkFBb0IsS0FBMEIscUJBQXFCOztBQUVuZ0YseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEMEI7QUFDRTtBQUNFOztBQUU5QjtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHFEQUFJO0FBQ1o7O0FBRUE7QUFDQSxlQUFlLHNEQUFLO0FBQ3BCOztBQUVBO0FBQ0EsZUFBZSx1REFBTTtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ0k7QUFDTjs7Ozs7Ozs7Ozs7Ozs7QUNGNUI7QUFBQTtBQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELGdFQUFnRTtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlEQUFRO0FBQ25CLEdBQUcsSUFBSSx5REFBUTs7QUFFZjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFZSxxRUFBTSxFOzs7Ozs7Ozs7Ozs7QUNoSHJCO0FBQUEsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVAsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVcsaUNBQWlDLEdBQUcsMkJBQTJCLDBDQUEwQyxFQUFFLEdBQUcsMkJBQTJCLDBDQUEwQyxFQUFFO0FBQ2hNOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxrQ0FBa0MsR0FBRyw0QkFBNEIsNENBQTRDLEVBQUUsR0FBRyw0QkFBNEIsNENBQTRDLEVBQUU7QUFDdk07O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDZCQUE2QixHQUFHLGVBQWU7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsT0FBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGdCQUFnQjtBQUNyQyxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCLDJCQUEyQiwyQkFBMkI7QUFDdEQsYUFBYTtBQUNiLDJCQUEyQixhQUFhO0FBQ3hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkUsZ0VBQWdFO0FBQzdJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVMsb0RBQW9ELGdCQUFnQjs7QUFFdEc7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVMsc0NBQXNDLGdCQUFnQjs7QUFFeEY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFEQUFxRDs7QUFFckQ7QUFDQSxxQkFBcUIsMkJBQTJCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOEJBQThCLCtCQUErQjtBQUM3RDs7QUFFQTtBQUNBOztBQUVBLDhCQUE4QixnQ0FBZ0M7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQixLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlDQUFpQywyQ0FBMkM7QUFDNUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDJCQUEyQixHQUFHLHFCQUFxQixHQUFHLDhCQUE4QixHQUFHLHNCQUFzQixHQUFHLGFBQWE7QUFDeEk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTs7QUFFZixXQUFXLGdDQUFnQyxHQUFHLDBCQUEwQixHQUFHLHdDQUF3QyxHQUFHLG1DQUFtQyxHQUFHLGlEQUFpRCxHQUFHLDJCQUEyQixHQUFHLHlDQUF5QyxHQUFHLGtCQUFrQixHQUFHLGdDQUFnQztBQUMvVTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNyWXZCO0FBQUEsb0dBQW9HLG1CQUFtQixFQUFFLG1CQUFtQiw4SEFBOEg7O0FBRTFRO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNENBQTRDO0FBQzlEOztBQUVBO0FBQ0Esa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRDs7QUFFQTtBQUNBLGtCQUFrQiw2Q0FBNkM7QUFDL0Qsa0JBQWtCLDZDQUE2QztBQUMvRCxrQkFBa0IsNkNBQTZDO0FBQy9ELGtCQUFrQiw2Q0FBNkM7QUFDL0Q7O0FBRUE7QUFDQSxrQkFBa0IsNENBQTRDO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsaURBQWlEO0FBQ25FOztBQUVBO0FBQ0Esa0JBQWtCLGlEQUFpRDtBQUNuRSxrQkFBa0IsNkJBQTZCO0FBQy9DLGtCQUFrQiw2QkFBNkI7QUFDL0Msa0JBQWtCLGdEQUFnRDtBQUNsRSxrQkFBa0IsNENBQTRDO0FBQzlELGtCQUFrQiw0Q0FBNEM7QUFDOUQ7O0FBRUE7QUFDQSxrQkFBa0IsZ0RBQWdEO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRTs7Ozs7Ozs7Ozs7QUM5R3BCLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3hkRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiaW1hZ2VzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZnJvbS1pbWFnZXMvanMvZW50cnkuanNcIik7XG4iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyYWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjdHgsIHNldHRpbmdzID0ge30pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAgIC8vIHZlYzIgb2YgdGhpcyBhdHRyYWN0b3IncyBwb3NpdGlvblxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jaW5nTm9kZXMgPSBbXTsgICAvLyByZWZlcmVuY2VzIHRvIG5vZGVzIHRoaXMgYXR0cmFjdG9yIGlzIGluZmx1ZW5jaW5nIGVhY2ggZnJhbWVcclxuICAgIHRoaXMuZnJlc2ggPSB0cnVlOyAgICAgICAgICAgIC8vIGZsYWcgdXNlZCB0byBwcmV2ZW50IGF0dHJhY3RvcnMgZnJvbSBiZWluZyByZW1vdmVkIGR1cmluZyBmaXJzdCBmcmFtZSBvZiBDbG9zZWQgdmVuYXRpb24gbW9kZVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdGlvblpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGtpbGwgem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuS2lsbFpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3RvclxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG9BdHRyYWN0b3JzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxLCAxLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3RvckNvbG9yO1xyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNvbnN0IExpZ2h0ID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgwLDAsMCwuNSknLFxyXG4gIEJyYW5jaENvbG9yOiAncmdiYSgwLDAsMCwxKScsXHJcbiAgVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC43KSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhcmsgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxyXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxyXG4gIEJyYW5jaENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjIpJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVhbGlzdGljID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIEF0dHJhY3RvckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgLy8gQnJhbmNoQ29sb3I6ICdyZ2JhKDAsMCwwLC4yKScsXHJcbiAgVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDYxLDE2NiwxMiwxKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b20gPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwyNDIsMjQyKScsXHJcbiAgQXR0cmFjdG9yQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgQnJhbmNoQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxyXG4gIC8vIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYig2MSw4NSwxMzYpJyxcclxuICAvLyBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYig2MSw4NSwxMzYpJ1xyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDIxMCwgODEsIDk0KSdcclxufSIsImltcG9ydCB7IExpZ2h0LCBEYXJrLCBSZWFsaXN0aWMsIEN1c3RvbSB9IGZyb20gJy4vQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIGJyYW5jaCBzZWdtZW50LiBTbWFsbGVyIG51bWJlcnMgbWVhbiBzbW9vdGhlciBsaW5lcywgYnV0IG1vcmUgY29tcHV0YXRpb24gY29zdFxyXG4gIEF0dHJhY3Rpb25EaXN0YW5jZTogMzAsICAgICAgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXR0cmFjdG9yIHRoYXQgYXR0cmFjdHMgbm9kZXNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF0dHJhY3RvcnMgYW5kIG5vZGVzIHdoZW4gYnJhbmNoZXMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiB0cnVlLCAgICAgLy8gdHVybnMgb24vb2ZmIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICBFbmFibGVPcGFjaXR5QmxlbmRpbmc6IHRydWUsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93QXR0cmFjdG9yczogZmFsc2UsICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93Tm9kZXM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbidcclxuICBTaG93VGlwczogZmFsc2UsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAneidcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBSZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyBicmFuY2ggc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogRGFyayxcclxuXHJcbiAgLy8gTGluZSB0aGlja25lc3Nlc1xyXG4gIEJyYW5jaFRoaWNrbmVzczogMS41LFxyXG4gIFRpcFRoaWNrbmVzczogMixcclxuICBCb3VuZHNCb3JkZXJUaGlja25lc3M6IDFcclxufSIsImltcG9ydCB7IGV4cG9ydFNWRyB9IGZyb20gXCIuL1V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGIgPSB0b2dnbGUgYnJhbmNoIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVCcmFuY2hlcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYSA9IHRvZ2dsZSBhdHRyYWN0b3IgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdhJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUF0dHJhY3RvcnMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHogPSB0b2dnbGUgYXR0cmFjdGlvbiB6b25lIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAneic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVBdHRyYWN0aW9uWm9uZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHQgPSB0b2dnbGUgdGlwIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVUaXBzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBrID0gdG9nZ2xlIGtpbGwgem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlS2lsbFpvbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2knOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlSW5mbHVlbmNlTGluZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGIgPSB0b2dnbGUgYm91bmRzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnYic6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIG8gPSB0b2dnbGUgb2JzdGFjbGVzIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAnbyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVPYnN0YWNsZXMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGUgPSBleHBvcnQgYW4gU1ZHIGZpbGUgb2YgYWxsIHZpc2libGUgZ2VvbWV0cnlcclxuICAgICAgY2FzZSAnZSc6XHJcbiAgICAgICAgZXhwb3J0U1ZHKG5ldHdvcmspO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gYyA9IHRvZ2dsZSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvblxyXG4gICAgICBjYXNlICdjJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUNhbmFsaXphdGlvbigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gcCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nXHJcbiAgICAgIGNhc2UgJ3AnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlT3BhY2l0eUJsZW5kaW5nKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0iLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcbmltcG9ydCBLREJ1c2ggZnJvbSAna2RidXNoJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmF0dHJhY3RvcnMgPSBbXTsgIC8vIGF0dHJhY3RvcnMgaW5mbHVlbmNlIG5vZGUgZ3Jvd3RoXHJcbiAgICB0aGlzLm5vZGVzID0gW107ICAgICAgIC8vIG5vZGVzIGFyZSBjb25uZWN0ZWQgdG8gZm9ybSBicmFuY2hlc1xyXG5cclxuICAgIHRoaXMubm9kZXNJbmRleDsgICAgICAgLy8ga2QtYnVzaCBzcGF0aWFsIGluZGV4IGZvciBhbGwgbm9kZXNcclxuXHJcbiAgICB0aGlzLmJvdW5kcyA9IFtdOyAgICAgIC8vIGFycmF5IG9mIFBhdGggb2JqZWN0cyB0aGF0IGJyYW5jaGVzIGNhbm5vdCBncm93IG91dHNpZGUgb2ZcclxuICAgIHRoaXMub2JzdGFjbGVzID0gW107ICAgLy8gYXJyYXkgb2YgUGF0aCBvYmplY3RzIHRoYXQgYnJhbmNoZXMgbXVzdCBhdm9pZFxyXG5cclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgLy8gU2tpcCBpdGVyYXRpb24gaWYgcGF1c2VkXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBc3NvY2lhdGUgYXR0cmFjdG9ycyB3aXRoIG5lYXJieSBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW2F0dHJhY3RvcklELCBhdHRyYWN0b3JdIG9mIHRoaXMuYXR0cmFjdG9ycy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgYXR0cmFjdG9yIHdpdGggaXRzIGNsb3Nlc3Qgbm9kZVxyXG4gICAgICAgIGNhc2UgJ09wZW4nOlxyXG4gICAgICAgICAgbGV0IGNsb3Nlc3ROb2RlID0gdGhpcy5nZXRDbG9zZXN0Tm9kZShhdHRyYWN0b3IsIHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKGF0dHJhY3RvcikpO1xyXG5cclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goYXR0cmFjdG9ySUQpO1xyXG4gICAgICAgICAgICBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2RlcyA9IFtjbG9zZXN0Tm9kZV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIGFzc29jaWF0ZSB0aGlzIGF0dHJhY3RvciB3aXRoIGFsbCBub2RlcyBpbiBpdHMgcmVsYXRpdmUgbmVpZ2hib3Job29kXHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGxldCBuZWlnaGJvcmhvb2ROb2RlcyA9IHRoaXMuZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKGF0dHJhY3Rvcik7XHJcbiAgICAgICAgICBsZXQgbm9kZXNJbktpbGxab25lID0gdGhpcy5nZXROb2Rlc0luS2lsbFpvbmUoYXR0cmFjdG9yKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGNsdWRlIG5vZGVzIHRoYXQgYXJlIGluIHRoZSBhdHRyYWN0b3IncyBraWxsIHpvbmUgKHRoZXNlIHNob3VsZCBzdG9wIGdyb3dpbmcpXHJcbiAgICAgICAgICBsZXQgbm9kZXNUb0dyb3cgPSBuZWlnaGJvcmhvb2ROb2Rlcy5maWx0ZXIoKG5laWdoYm9yTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIW5vZGVzSW5LaWxsWm9uZS5pbmNsdWRlcyhuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMgPSBuZWlnaGJvcmhvb2ROb2RlcztcclxuXHJcbiAgICAgICAgICBpZihub2Rlc1RvR3Jvdy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGF0dHJhY3Rvci5mcmVzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzVG9Hcm93KSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5pbmZsdWVuY2VkQnkucHVzaChhdHRyYWN0b3JJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm93IHRoZSBuZXR3b3JrIGJ5IGFkZGluZyBuZXcgbm9kZXMgb250byBhbnkgbm9kZXMgYmVpbmcgaW5mbHVlbmNlZCBieSBhdHRyYWN0b3JzXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBpZihub2RlLmluZmx1ZW5jZWRCeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGF2ZXJhZ2VEaXJlY3Rpb24gPSB0aGlzLmdldEF2ZXJhZ2VEaXJlY3Rpb24obm9kZSwgbm9kZS5pbmZsdWVuY2VkQnkubWFwKGlkID0+IHRoaXMuYXR0cmFjdG9yc1tpZF0pKTtcclxuICAgICAgICBsZXQgbmV4dE5vZGUgPSBub2RlLmdldE5leHROb2RlKGF2ZXJhZ2VEaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIE9ubHkgYWxsb3cgcm9vdCBub2RlcyBpbnNpZGUgb2YgZGVmaW5lZCBib3VuZHNcclxuICAgICAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgICAgICBpZihib3VuZC5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3Qgbm9kZXMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICAgICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobmV4dE5vZGUucG9zaXRpb24ueCwgbmV4dE5vZGUucG9zaXRpb24ueSkpIHtcclxuICAgICAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTk9URTogZGlzYWJsaW5nIHRoaXMgY2hlY2sgbGV0cyBub2RlcyBncm93IGFjcm9zcyBnYXBzIGluIGJvdW5kcyAtIGNvb2wgZWZmZWN0IVxyXG4gICAgICAgIGlmKFxyXG4gICAgICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbm9kZS5pbmZsdWVuY2VkQnkgPSBbXTtcclxuXHJcbiAgICAgIC8vIFBlcmZvcm0gYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gICAgICBpZihub2RlLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcclxuXHJcbiAgICAgICAgd2hpbGUoY3VycmVudE5vZGUucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIC8vIFdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIGNoaWxkIG5vZGVzLCB1c2UgdGhlIHRoaWNrZXN0IG9mIHRoZW0gYWxsXHJcbiAgICAgICAgICBpZihjdXJyZW50Tm9kZS5wYXJlbnQudGhpY2tuZXNzIDwgY3VycmVudE5vZGUudGhpY2tuZXNzICsgLjA3KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPSBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlIGFueSBhdHRyYWN0b3JzIHRoYXQgaGF2ZSBiZWVuIHJlYWNoZWQgYnkgdGhlaXIgYXNzb2NpYXRlZCBub2Rlc1xyXG4gICAgZm9yKGxldCBbYXR0cmFjdG9ySUQsIGF0dHJhY3Rvcl0gb2YgdGhpcy5hdHRyYWN0b3JzLmVudHJpZXMoKSkge1xyXG4gICAgICBzd2l0Y2godGhpcy5zZXR0aW5ncy5WZW5hdGlvblR5cGUpIHtcclxuICAgICAgICAvLyBGb3Igb3BlbiB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBhdHRyYWN0b3IgYXMgc29vbiBhcyBhbnkgbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihhdHRyYWN0b3IucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmF0dHJhY3RvcnMuc3BsaWNlKGF0dHJhY3RvcklELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBhdHRyYWN0b3Igb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIG5vZGVzIGhhdmUgcmVhY2hlZCBpdFxyXG4gICAgICAgIGNhc2UgJ0Nsb3NlZCc6XHJcbiAgICAgICAgICBpZihhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwICYmICFhdHRyYWN0b3IuZnJlc2gpIHtcclxuICAgICAgICAgICAgbGV0IGFsbE5vZGVzUmVhY2hlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IG5vZGUgb2YgYXR0cmFjdG9yLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgICAgICBpZihub2RlLnBvc2l0aW9uLmRpc3RhbmNlKGF0dHJhY3Rvci5wb3NpdGlvbikgPiB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYWxsTm9kZXNSZWFjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihhbGxOb2Rlc1JlYWNoZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmF0dHJhY3RvcnMuc3BsaWNlKGF0dHJhY3RvcklELCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVidWlsZCBzcGF0aWFsIGluZGljZXNcclxuICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcclxuICAgIHRoaXMuZHJhd0JvdW5kcygpO1xyXG4gICAgdGhpcy5kcmF3T2JzdGFjbGVzKCk7XHJcbiAgICB0aGlzLmRyYXdhdHRyYWN0b3JzKCk7XHJcbiAgICB0aGlzLmRyYXdOb2RlcygpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JhY2tncm91bmQoKSB7XHJcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGRyYXdCb3VuZHMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgJiYgdGhpcy5ib3VuZHMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgdGhpcy5ib3VuZHMpIHtcclxuICAgICAgICBib3VuZC5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdPYnN0YWNsZXMoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdOb2RlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd05vZGVzKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdhdHRyYWN0b3JzKCkge1xyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgdGhpcy5hdHRyYWN0b3JzKSB7XHJcbiAgICAgIGF0dHJhY3Rvci5kcmF3KCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGxpbmVzIGJldHdlZW4gZWFjaCBhdHRyYWN0b3IgYW5kIHRoZSBub2RlcyB0aGV5IGFyZSBpbmZsdWVuY2luZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyAmJiBhdHRyYWN0b3IuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBub2RlIG9mIGF0dHJhY3Rvci5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhhdHRyYWN0b3IucG9zaXRpb24ueCwgYXR0cmFjdG9yLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuSW5mbHVlbmNlTGluZXNDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKGF0dHJhY3Rvcikge1xyXG4gICAgbGV0IGZhaWw7XHJcblxyXG4gICAgbGV0IG5lYXJieU5vZGVzID0gdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKTtcclxuICAgIGxldCByZWxhdGl2ZU5laWdoYm9ycyA9IFtdO1xyXG4gICAgbGV0IGF0dHJhY3RvclRvUDAsIGF0dHJhY3RvclRvUDEsIHAwVG9QMTtcclxuXHJcbiAgICAvLyBwMCBpcyBhIHJlbGF0aXZlIG5laWdoYm9yIG9mIGF1eGluUG9zIGlmZlxyXG4gICAgLy8gZm9yIGFueSBwb2ludCBwMSB0aGF0IGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIGlzIHAwLFxyXG4gICAgLy8gcDAgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gdG8gcDFcclxuICAgIGZvcihsZXQgcDAgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgZmFpbCA9IGZhbHNlO1xyXG4gICAgICBhdHRyYWN0b3JUb1AwID0gcDAucG9zaXRpb24uc3VidHJhY3QoYXR0cmFjdG9yLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgIGZvcihsZXQgcDEgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgICBpZihwMCA9PT0gcDEpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0cmFjdG9yVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KGF0dHJhY3Rvci5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKGF0dHJhY3RvclRvUDEubGVuZ3RoKCkgPiBhdHRyYWN0b3JUb1AwLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAwVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHAwLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoYXR0cmFjdG9yVG9QMC5sZW5ndGgoKSA+IHAwVG9QMS5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgZmFpbCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFmYWlsKSB7XHJcbiAgICAgICAgcmVsYXRpdmVOZWlnaGJvcnMucHVzaChwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVsYXRpdmVOZWlnaGJvcnM7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoYXR0cmFjdG9yKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgYXR0cmFjdG9yLnBvc2l0aW9uLngsXHJcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbktpbGxab25lKGF0dHJhY3Rvcikge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIGF0dHJhY3Rvci5wb3NpdGlvbi54LFxyXG4gICAgICBhdHRyYWN0b3IucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3ROb2RlKGF0dHJhY3RvciwgbmVhcmJ5Tm9kZXMpIHtcclxuICAgIGxldCBjbG9zZXN0Tm9kZSA9IG51bGwsXHJcbiAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKGF0dHJhY3Rvci5wb3NpdGlvbik7XHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgYXR0cmFjdG9yLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb3Nlc3ROb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBuZWFyYnlhdHRyYWN0b3JzKSB7XHJcbiAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXR0cmFjdG9yXHJcbiAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IG5ldyBWZWMyKDAsMCk7XHJcblxyXG4gICAgZm9yKGxldCBhdHRyYWN0b3Igb2YgbmVhcmJ5YXR0cmFjdG9ycykge1xyXG4gICAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChcclxuICAgICAgICBhdHRyYWN0b3IucG9zaXRpb24uc3VidHJhY3Qobm9kZS5wb3NpdGlvbiwgdHJ1ZSkubm9ybWFsaXplKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc21hbGwgYW1vdW50IG9mIHJhbmRvbSBcImppdHRlclwiIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2sgYmV0d2VlbiB0d28gYXR0cmFjdG9ycyBhbmQgZW5kbGVzc2x5IGdlbmVyYXRpbmcgbm9kZXMgaW4gdGhlIHNhbWUgcGxhY2VcclxuICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChuZXcgVmVjMihyYW5kb20oLS4xLCAuMSksIHJhbmRvbSgtLjEsIC4xKSkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uZGl2aWRlKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIGF2ZXJhZ2VEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBhZGROb2RlKG5vZGUpIHtcclxuICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHJvb3Qgbm9kZXMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgaWYoYm91bmQuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3Qgbm9kZXMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLmF0dHJhY3RvcnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVOb2RlcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd05vZGVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd05vZGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVGlwcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1RpcHMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dUaXBzID0gIW5vZGUuc2V0dGluZ3MuU2hvd1RpcHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVhdHRyYWN0b3JzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93YXR0cmFjdG9ycyA9ICF0aGlzLnNldHRpbmdzLlNob3dhdHRyYWN0b3JzO1xyXG5cclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd2F0dHJhY3RvcnMgPSAhYXR0cmFjdG9yLnNldHRpbmdzLlNob3dhdHRyYWN0b3JzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQXR0cmFjdGlvblpvbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuXHJcbiAgICBmb3IobGV0IGF0dHJhY3RvciBvZiB0aGlzLmF0dHJhY3RvcnMpIHtcclxuICAgICAgYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhYXR0cmFjdG9yLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVLaWxsWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgYXR0cmFjdG9yIG9mIHRoaXMuYXR0cmFjdG9ycykge1xyXG4gICAgICBhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICFhdHRyYWN0b3Iuc2V0dGluZ3MuU2hvd0tpbGxab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUluZmx1ZW5jZUxpbmVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93SW5mbHVlbmNlTGluZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVCb3VuZHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dCb3VuZHMgPSAhdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT2JzdGFjbGVzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzID0gIXRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUNhbmFsaXphdGlvbigpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uID0gIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uO1xyXG5cclxuICAgIGlmKCF0aGlzLnNldHRpbmdzLkVuYWJsZUNhbmFsaXphdGlvbikge1xyXG4gICAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICAgIG5vZGUudGhpY2tuZXNzID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlT3BhY2l0eUJsZW5kaW5nKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcgPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmc7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgbm9kZS5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcgPSB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzLCBjb2xvciA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7ICAgICAgIC8vIHJlZmVyZW5jZSB0byBwYXJlbnQgbm9kZSwgbmVjZXNzYXJ5IGZvciB2ZWluIHRoaWNrZW5pbmcgbGF0ZXJcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAvLyB7dmVjMn0gb2YgdGhpcyBub2RlJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDsgICAgICAgICAvLyB7Ym9vbGVhbn1cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmdcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yOyAgICAgICAgIC8vIGNvbG9yLCB1c3VhbGx5IHBhc3NlZCBkb3duIGZyb20gcGFyZW50XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTsgICAgIC8vIHJlZmVyZW5jZXMgdG8gYWxsIEF0dHJhY3RvcnMgaW5mbHVlbmNpbmcgdGhpcyBub2RlIGVhY2ggZnJhbWVcclxuICAgIHRoaXMudGhpY2tuZXNzID0gMDsgICAgICAgICAvLyB0aGlja25lc3MgLSB0aGlzIGlzIGluY3JlYXNlZCBkdXJpbmcgdmVpbiB0aGlja2VuaW5nIHByb2Nlc3NcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIC8vIFNtb290aGx5IHJhbXAgdXAgb3BhY2l0eSBiYXNlZCBvbiB2ZWluIHRoaWNrbmVzc1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZykge1xyXG4gICAgICAgIHRoaXMuY3R4Lmdsb2JhbEFscGhhID0gdGhpcy50aGlja25lc3MgLyAzICsgLjI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFwiTGluZXNcIiByZW5kZXIgbW9kZVxyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1RpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVGlwQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlRpcFRoaWNrbmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYodGhpcy5jb2xvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5CcmFuY2hDb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLkJyYW5jaFRoaWNrbmVzcyArIHRoaXMudGhpY2tuZXNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuXHJcbiAgICAgIC8vIFwiRG90c1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnNldHRpbmdzLlJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAxICsgdGhpcy50aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBjb2xvciBvciBcInRpcFwiIG5vZGVzXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dUaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5UaXBDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQnJhbmNoQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlc2V0IGdsb2JhbCBvcGFjaXR5IGlmIGl0IHdhcyBjaGFuZ2VkIGR1ZSB0byBvcGFjaXR5IGdyYWRpZW50IGZsYWdcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBub2RlIGluIHRoZSBwcm92aWRlZCBkaXJlY3Rpb24gYW5kIGEgcHJlLWRlZmluZWQgZGlzdGFuY2UgKFNlZ21lbnRMZW5ndGgpXHJcbiAgZ2V0TmV4dE5vZGUoYXZlcmFnZUF0dHJhY3RvckRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5pc1RpcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXh0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChhdmVyYWdlQXR0cmFjdG9yRGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc2V0dGluZ3MuU2VnbWVudExlbmd0aCksIHRydWUpO1xyXG5cclxuICAgIHJldHVybiBuZXcgTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLFxyXG4gICAgICB0aGlzLmNvbG9yXHJcbiAgICApO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuXHJcbmxldCBpbnNpZGUgPSByZXF1aXJlKCdwb2ludC1pbi1wb2x5Z29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uLCB0eXBlLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBvbHlnb24gPSBwb2x5Z29uOyAgICAgLy8gYXJyYXkgb2YgYXJyYXlzIGNvbnRhaW5pbmcgY29vcmRpbmF0ZXMgZGVmaW5pbmcgYSBwb2x5Z29uIChbW3gwLHkwXSxbeDEseTFdLC4uLl0pXHJcbiAgICB0aGlzLmN0eCA9IGN0eDsgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlOyAgICAgICAgICAgLy8gc3RyaW5nIGVpdGhlciAnQm91bmRzJyBvciAnT2JzdGFjbGUnXHJcblxyXG4gICAgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb24gPSBwb2x5Z29uOyAgLy8gUGF0aHMgYXJlIGluaXRpYWxpemVkIHdpdGhvdXQgYW55IHRyYW5zZm9ybWF0aW9ucyBieSBkZWZhdWx0XHJcbiAgICB0aGlzLm9yaWdpbiA9IHt4OjAsIHk6MH07ICAgICAgICAgICAvLyBvcmlnaW4gcG9pbnQgdXNlZCBmb3IgdHJhbnNsYXRpb25cclxuICAgIHRoaXMuc2NhbGUgPSAxOyAgICAgICAgICAgICAgICAgICAgIC8vIG11bHRpcGxpY2F0aW9uIGZhY3RvciBmb3IgcG9seWdvbiBjb29yZGluYXRlc1xyXG4gICAgdGhpcy53aWR0aCA9IC0xOyAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGggb2YgdHJhbnNmb3JtZWQgcG9seWdvbiAtIHdpbGwgYmUgY2FsY3VsYXRlZCB1c2luZyB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKVxyXG4gICAgdGhpcy5oZWlnaHQgPSAtMTsgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0IG9mIHRyYW5zZm9ybWVkIHBvbHlnb24gLSB3aWxsIGJlIGNhbGN1bGF0ZWQgdXNpbmcgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb25zKClcclxuICAgIHRoaXMuaXNDZW50ZXJlZCA9IGZhbHNlOyAgICAgICAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGF1dG9tYXRpY2FsbHkgdHJhbnNsYXRlIHRvIHNjcmVlbiBjZW50ZXJcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHByb3ZpZGVkIGNvb3JkaW5hdGVzIGFyZSBpbnNpZGUgcG9seWdvbiBkZWZpbmVkIGJ5IHRoaXMgUGF0aFxyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHJldHVybiBpbnNpZGUoW3gsIHldLCB0aGlzLnBvbHlnb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVsYXRpdmUgdHJhbnNsYXRpb25cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy5vcmlnaW4ueCArPSB4O1xyXG4gICAgdGhpcy5vcmlnaW4ueSArPSB5O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICAvLyBBYnNvbHV0ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHggLSB0aGlzLndpZHRoLzI7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5IC0gdGhpcy5oZWlnaHQvMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnggPSB4O1xyXG4gICAgICB0aGlzLm9yaWdpbi55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2NhbGUoZmFjdG9yKSB7XHJcbiAgICB0aGlzLnNjYWxlICo9IGZhY3RvcjtcclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG8od2luZG93LmlubmVyV2lkdGgvMiwgd2luZG93LmlubmVySGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIHBhdGggbGVuZ3RoIGJ5IGFkZGluZyB1cCBhbGwgbGluZSBzZWdtZW50IGxlbmd0aHMgKGRpc3RhbmNlcyBiZXR3ZWVuIHBvbHlnb24gcG9pbnRzKVxyXG4gIGdldFRvdGFsTGVuZ3RoKCkge1xyXG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGk9MTsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxMZW5ndGggKz0gVmVjMihcclxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgKS5kaXN0YW5jZShcclxuICAgICAgICBWZWMyKFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMV0gKiB0aGlzLnNjYWxlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxuICB9XHJcblxyXG4gIC8vIENhbGN1bGF0ZXMgdGhlIHJlYWwgd2lkdGggYW5kIGhlaWdodCBvZiB0aGUgdHJhbnNmb3JtZWQgcG9seWdvblxyXG4gIGNhbGN1bGF0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICBsZXQgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXHJcbiAgICAgIHJpZ2h0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSxcclxuICAgICAgYm90dG9tTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA8IGxlZnRNb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGxlZnRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0gPiByaWdodE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSA8IHRvcE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXTtcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdID4gYm90dG9tTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE1hdGguYWJzKHJpZ2h0TW9zdENvb3JkaW5hdGUgLSBsZWZ0TW9zdENvb3JkaW5hdGUpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBNYXRoLmFicyhib3R0b21Nb3N0Q29vcmRpbmF0ZSAtIHRvcE1vc3RDb29yZGluYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBjb29yZGluYXRlcyBmb3IgdGhlIFwidHJhbnNmb3JtZWRcIiB2ZXJzaW9uIG9mIHRoaXMgcGF0aCwgdGFraW5nIGludG8gY29uc2lkZXJhdGlvbiB0cmFuc2xhdGlvbiBhbmQgc2NhbGluZ1xyXG4gIGNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLnB1c2goXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzBdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLngsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMV0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueVxyXG4gICAgICAgIF1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZihcclxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMudHlwZSA9PSAnQm91bmRzJyB8fFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy50eXBlID09ICdPYnN0YWNsZXMnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgLy8gRHJhdyBzZXF1ZW50aWFsIGxpbmVzIHRvIGFsbCBwb2ludHMgb2YgdGhlIHBvbHlnb25cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERyYXcgbGluZSBiYWNrIHRvIGZpcnN0IHBvaW50IHRvIGNsb3NlIHRoZSBwb2x5Z29uXHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JvdW5kcyc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0JvcmRlckNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5Cb3VuZHNCb3JkZXJUaGlja25lc3M7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNGaWxsQ29sb3I7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPYnN0YWNsZSc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5PYnN0YWNsZUZpbGxDb2xvcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGJvdW5kaW5nIGJveFxyXG4gICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgLy8gdGhpcy5jdHgubW92ZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xyXG4gICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgdG9QYXRoIH0gZnJvbSAnc3ZnLXBvaW50cyc7XHJcblxyXG4vLyByYW5kb20oKSwgc2ltaWxhciB0byBQcm9jZXNzaW5nJ3NcclxuLy8gSWYgdHdvIHBhcmFtZXRlcnMgYXJlIHBhc3NlZCwgdGhleSBhcmUgaW50ZXJwcmV0ZWQgYXMgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gb2YgdGhlIGRlc2lyZWQgcmFuZ2VcclxuLy8gSWYgb25seSBvbmUgcGFyYW1ldGVyIGlzIHBhc3NlZCwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdGhlIG1heGltdW0sIHdoaWxlIHplcm8gaXMgdXNlZCBhcyB0aGUgbWluaW11bVxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KSB7XHJcbiAgaWYgKG1heCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBtYXggPSBtaW47XHJcbiAgICBtaW4gPSAwO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBtaW4gIT09ICdudW1iZXInIHx8IHR5cGVvZiBtYXggIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhbGwgYXJndW1lbnRzIHRvIGJlIG51bWJlcnMnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbn1cclxuXHJcbi8vIENvbnZlcnRzIGEgbnVtYmVyIGZyb20gb25lIHJhbmdlIHRvIGFub3RoZXJcclxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgb3JpZ2luYWxMb3dlciwgb3JpZ2luYWxVcHBlciwgbmV3TG93ZXIsIG5ld1VwcGVyKSB7XHJcbiAgcmV0dXJuIG5ld0xvd2VyICsgKG5ld1VwcGVyIC0gbmV3TG93ZXIpICogKCh2YWx1ZSAtIG9yaWdpbmFsTG93ZXIpIC8gKG9yaWdpbmFsVXBwZXIgLSBvcmlnaW5hbExvd2VyKSk7XHJcbn1cclxuXHJcbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgcG9pbnQgY29vcmRpbmF0ZXMgKGFsc28gYXJyYXlzLCB3aXRoIHR3byBlbnRyaWVzKSBmb3IgcG9pbnRzIGFycmFuZ2VkIGluIGEgY2lyY2xlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaXJjbGVPZlBvaW50cyhjeCwgY3ksIHJhZGl1cywgcmVzb2x1dGlvbikge1xyXG4gIGxldCBhbmdsZSwgeCwgeTtcclxuICBsZXQgcG9pbnRzID0gW107XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcclxuICAgIGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpIC8gcmVzb2x1dGlvbjtcclxuICAgIHggPSBjeCArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgIHkgPSBjeSArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICBwb2ludHMucHVzaChbeCwgeV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBvaW50cztcclxufVxyXG5cclxuLy8gQ3JlYXRlcyBhbiBTVkcgZG9jdW1lbnQgY29udGFpbmluZyBhbGwgb2YgdGhlIHZpc2libGUgZ2VvbWV0cnksIHRoZW4gcHVzaGVzIGl0IHRvIHRoZSBjbGllbnRcclxuLy8gLSBUcmlnZ2VyZWQgYnkgcHJlc3NpbmcgYGVgIGluIGFueSBza2V0Y2guIFNlZSBLZXlib2FyZEludGVyYWN0aW9ucy5qcyBmb3IgZGVmaW5pdGlvblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0U1ZHKG5ldHdvcmspIHtcclxuICAvLyBTZXQgdXAgPHN2Zz4gZWxlbWVudFxyXG4gIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy8nLCAneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zOnhsaW5rJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyB3aW5kb3cuaW5uZXJXaWR0aCArICcgJyArIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gIC8vIENyZWF0ZSA8bGluZT5zIGZvciBlYWNoIGJyYW5jaCBzZWdtZW50XHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93QnJhbmNoZXMpIHtcclxuICAgIGxldCBub2RlTGluZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZXR3b3JrLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgICBsZXQgbGluZU5vZGUgPSBgXHJcbiAgICAgICAgICA8bGluZVxyXG4gICAgICAgICAgICB4MT1cIiR7bm9kZS5wYXJlbnQucG9zaXRpb24ueH1cIlxyXG4gICAgICAgICAgICB5MT1cIiR7bm9kZS5wYXJlbnQucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICB4Mj1cIiR7bm9kZS5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkyPVwiJHtub2RlLnBvc2l0aW9uLnl9XCJcclxuICAgICAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICBub2RlTGluZXNHcm91cC5pbm5lckhUTUwgKz0gbGluZU5vZGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQobm9kZUxpbmVzR3JvdXApO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIDxwYXRoPnMgZm9yIGJvdW5kc1xyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd0JvdW5kcykge1xyXG4gICAgaWYobmV0d29yay5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgYm91bmRzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgbmV0d29yay5ib3VuZHMpIHtcclxuICAgICAgICBib3VuZHNHcm91cC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIGdldFBhdGhFbEZyb21Qb2ludHMoYm91bmQucG9seWdvbilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQoYm91bmRzR3JvdXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIDxwYXRoPnMgZm9yIG9ic3RhY2xlc1xyXG4gIGlmKG5ldHdvcmsuc2V0dGluZ3MuU2hvd09ic3RhY2xlcykge1xyXG4gICAgaWYobmV0d29yay5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBsZXQgb2JzdGFjbGVzR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuXHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgbmV0d29yay5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZXNHcm91cC5hcHBlbmRDaGlsZChcclxuICAgICAgICAgIGdldFBhdGhFbEZyb21Qb2ludHMob2JzdGFjbGUucG9seWdvbilcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQob2JzdGFjbGVzR3JvdXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gR2VuZXJhdGUgdGhlIGRvY3VtZW50IGFzIGEgQmxvYiBhbmQgZm9yY2UgYSBkb3dubG9hZCBhcyBhIHRpbWVzdGFtcGVkIC5zdmcgZmlsZVxyXG4gIGNvbnN0IHN2Z0RvY3R5cGUgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIGVuY29kaW5nPVwiVVRGLThcIiBzdGFuZGFsb25lPVwibm9cIj8+JztcclxuICBjb25zdCBzZXJpYWxpemVkU3ZnID0gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Zyk7XHJcbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtzdmdEb2N0eXBlLCBzZXJpYWxpemVkU3ZnXSwgeyB0eXBlOiAnaW1hZ2Uvc3ZnK3htbDsnIH0pXHJcbiAgc2F2ZUFzKGJsb2IsICd2ZW5hdGlvbi0nICsgRGF0ZS5ub3coKSArICcuc3ZnJyk7XHJcbn1cclxuXHJcbiAgLy8gQ3JlYXRlIGEgPHBhdGg+IGVsZW1lbnQgd2l0aCBhIHByb3Blcmx5LWZvcm1hdHRlZCBgZGAgYXR0cmlidXRlIGNvbnRhaW5pbmcgYWxsIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgcGFzc2VkIHBvaW50c1xyXG4gIGZ1bmN0aW9uIGdldFBhdGhFbEZyb21Qb2ludHMocG9pbnRzKSB7XHJcbiAgICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XHJcblxyXG4gICAgZm9yKGxldCBbaW5kZXgsIHBvaW50XSBvZiBwb2ludHMuZW50cmllcygpKSB7XHJcbiAgICAgIHBvaW50c1N0cmluZyArPSBwb2ludFswXSArICcsJyArIHBvaW50WzFdO1xyXG5cclxuICAgICAgaWYoaW5kZXggPCBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHBvaW50c1N0cmluZyArPSAnICc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgY2xvc2VwYXRoIGNvbW1hbmQgdG8gYXV0b21hdGljYWxseSBkcmF3IGxpbmUgYmFjayB0byBpbml0aWFsIHBvaW50XHJcbiAgICBwb2ludHNTdHJpbmcgKz0gJyAnICsgcG9pbnRzWzBdWzBdICsgJywnICsgcG9pbnRzWzBdWzFdO1xyXG5cclxuICAgIGxldCBkID0gdG9QYXRoKHtcclxuICAgICAgdHlwZTogJ3BvbHlsaW5lJyxcclxuICAgICAgcG9pbnRzOiBwb2ludHNTdHJpbmdcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBwYXRoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3BhdGgnKTtcclxuICAgIHBhdGhFbC5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcclxuICAgIHBhdGhFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6IG5vbmU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMScpO1xyXG5cclxuICAgIHJldHVybiBwYXRoRWw7XHJcbiAgfSIsImV4cG9ydCBsZXQgR3JlZWtTdGF0dWUgPSBbXHJcbiAgWzE3MTEuMjEwMSwgMjgyLjk5NjRdLFxyXG4gIFsxNzEwLjgyMDEsIDI3OC4zNDgyN10sXHJcbiAgWzE3MTAuNjMzOCwgMjg3LjI3NzkyXSxcclxuICBbMTcwNC4wNTkxLCAyODUuMjU0NDZdLFxyXG4gIFsxNzAxLjk2ODUsIDI5MS4xMTM1M10sXHJcbiAgWzE2OTguMjA1MywgMjg2LjU4Mzk4XSxcclxuICBbMTY5My4zNTE2LCAyODguNTE1XSxcclxuICBbMTY5MS4wNzM1LCAyODEuOTc0NzNdLFxyXG4gIFsxNjg5LjA5OTUsIDI4Ni4zMjIyXSxcclxuICBbMTY4OC4wNjY4LCAyOTEuMDIwNjZdLFxyXG4gIFsxNjg3LjMxOTUsIDI5NS4xNDA1XSxcclxuICBbMTY4NC4yNDg3LCAyOTcuMzQzMjZdLFxyXG4gIFsxNjkyLjY2ODUsIDI5NS43MzMxNV0sXHJcbiAgWzE2OTAuMDI5NSwgMjk5LjI3NTc2XSxcclxuICBbMTY4Ny42NTQzLCAzMDIuMTQ1MjZdLFxyXG4gIFsxNjgzLjkwODgsIDMwMS45NjEzXSxcclxuICBbMTY4Ni42ODU1LCAzMDYuOTI3MDZdLFxyXG4gIFsxNjgzLjM2MjcsIDMwOS41NjQ4Ml0sXHJcbiAgWzE2NzkuODA2MywgMzA5Ljk3OTU4XSxcclxuICBbMTY4NS42NDkyLCAzMTMuMDI2MzRdLFxyXG4gIFsxNjkxLjU3NSwgMzExLjkwNTNdLFxyXG4gIFsxNjk2LjAwNzcsIDMwOS41NzgyOF0sXHJcbiAgWzE2OTEuNTQxNSwgMzA0Ljk2MjUyXSxcclxuICBbMTY5NC40NDQyLCAzMDEuMTI5Ml0sXHJcbiAgWzE2OTguMDI4MiwgMjk5LjA2MjVdLFxyXG4gIFsxNzAzLjAxNzIsIDMwMC40NjIxXSxcclxuICBbMTY5OS44NDQ2LCAyOTUuMDUyMDZdLFxyXG4gIFsxNjk2LjI3MTEsIDI5My4zOTUyXSxcclxuICBbMTcwMy4zNDQ3LCAyOTYuNjMxMjNdLFxyXG4gIFsxNzA2LjAwOTgsIDI5NC4wNDM1OF0sXHJcbiAgWzE3MDcuOTI2NiwgMjk4LjUxMTg0XSxcclxuICBbMTcxMC40NTczLCAyOTQuMjkxNzVdLFxyXG4gIFsxNzA3LjM1OTksIDI5MC4zMDg3OF0sXHJcbiAgWzE3MTMuMzYwNiwgMjkwLjYzODAzXSxcclxuICBbMTcxNS4zMjAxLCAyOTQuMzg4OF0sXHJcbiAgWzE3MTMuMTM3OCwgMjk4LjEwNzgyXSxcclxuICBbMTcxOS42ODc3LCAyOTUuNDI4MzhdLFxyXG4gIFsxNzE4Ljc5OTYsIDI5OS45NDk2Ml0sXHJcbiAgWzE3MTUuNjUxMiwgMzAzLjU5NjJdLFxyXG4gIFsxNzE5LjQ2NDgsIDMwOS40MTQ1XSxcclxuICBbMTcxOS45MzY4LCAzMDQuNDE1MDddLFxyXG4gIFsxNzI0LjcxMDcsIDMwNC4zNDkzXSxcclxuICBbMTcyNS4wMTM1LCAzMDguNzY5MjZdLFxyXG4gIFsxNzI0LjA2NjgsIDI5OS40MTkzNF0sXHJcbiAgWzE3MzAuNTA0MiwgMzA3LjcyMDg2XSxcclxuICBbMTc0Mi4zMTQ4LCAzMDguMTc1NzJdLFxyXG4gIFsxNzUwLjQzNjIsIDMwNS4xNzQxXSxcclxuICBbMTc1MS42ODQsIDI5OC4zNzgzXSxcclxuICBbMTc1OS4yMTc0LCAzMDIuMDc3MThdLFxyXG4gIFsxNzYzLjc5NjYsIDMyMy41ODkxNF0sXHJcbiAgWzE3NTUuODYxNiwgMzI1LjE5NjVdLFxyXG4gIFsxNzU5LjY2NDcsIDMzMC44OTE1NF0sXHJcbiAgWzE3NTEuNjUyMSwgMzMwLjU1NjldLFxyXG4gIFsxNzQxLjcxNDQsIDMzOC4xMzUwN10sXHJcbiAgWzE3NDAuNzgzNywgMzUzLjI4MzA1XSxcclxuICBbMTczNS41OTUxLCAzNTAuOTc3NzhdLFxyXG4gIFsxNzQ1LjA3NDEsIDMzMi4zODYzXSxcclxuICBbMTcxOS42MjYsIDMyNS4xMTA3Ml0sXHJcbiAgWzE3MTQuMjc2MSwgMzIxLjI1MjQ3XSxcclxuICBbMTcxMy4zNjk5LCAzMTYuMDU4M10sXHJcbiAgWzE3MDcuODYxNiwgMzE0Ljc5MjA1XSxcclxuICBbMTcwNy41NjksIDMxOS41MTM4NV0sXHJcbiAgWzE3MDEuNDg5NiwgMzE5LjU4NTMzXSxcclxuICBbMTY5Ny4wNTMsIDMxNi42NTQ2Nl0sXHJcbiAgWzE2OTUuODQ1OCwgMzIxLjg5Mzk1XSxcclxuICBbMTY5Ny4xOTg5LCAzMjYuODk3NDZdLFxyXG4gIFsxNjk0LjM0MDMsIDMzMC4zMDU3M10sXHJcbiAgWzE2OTAuMzQxNiwgMzI5LjQwMDczXSxcclxuICBbMTY5MC4wOTAzLCAzMjQuNDU0N10sXHJcbiAgWzE2OTMuNDQ0MywgMzI2LjMzMDI2XSxcclxuICBbMTcwMC4wNjg1LCAzMjQuMTIzNV0sXHJcbiAgWzE3MDQuNjU3NSwgMzI0LjExNjldLFxyXG4gIFsxNzAxLjQyODEsIDMyOC43NjZdLFxyXG4gIFsxNzA1Ljc1NDUsIDMyOC43MzE1N10sXHJcbiAgWzE3MDkuNjA5LCAzMzIuNjQ2MTJdLFxyXG4gIFsxNzA0Ljg5MjgsIDMzMy4wNTIzXSxcclxuICBbMTcwMC43Mzg4LCAzMzMuNTA2MTZdLFxyXG4gIFsxNjk3Ljk4MTcsIDMzMC45NDI5Nl0sXHJcbiAgWzE2OTYuMDg3NCwgMzM0LjUyMTg1XSxcclxuICBbMTY5Ni4wNjQyLCAzMzguMjUyOTNdLFxyXG4gIFsxNjkyLjE0ODcsIDMzMy40NTM5OF0sXHJcbiAgWzE2ODguNzc4OCwgMzM1LjE4NDRdLFxyXG4gIFsxNjg3LjAxNzEsIDMzMi4xNDk3Ml0sXHJcbiAgWzE2ODYuNDQzNSwgMzI4LjU4MDMyXSxcclxuICBbMTY4NS4wMTU5LCAzMjUuMjY2NDVdLFxyXG4gIFsxNjc4LjY5MTgsIDMxMy45MjgxM10sXHJcbiAgWzE2NzIuODIzLCAzMTYuODA0NzVdLFxyXG4gIFsxNjY5LjAzMDMsIDMxNC45ODg2NV0sXHJcbiAgWzE2NzMuODI1NywgMzEzLjIwMTc4XSxcclxuICBbMTY3Ni43MDUxLCAzMTguMDE5MTddLFxyXG4gIFsxNjgwLjQxNzIsIDMyNC4wNzQzN10sXHJcbiAgWzE2ODEuOTM4MSwgMzI5LjQ0NzQ1XSxcclxuICBbMTY3Ny40MjE2LCAzMjguMjU3N10sXHJcbiAgWzE2NzEuNzI4MSwgMzI5LjE4OTAzXSxcclxuICBbMTY3MC43NTc5LCAzMzMuNzI1MDRdLFxyXG4gIFsxNjc1LjU5MTQsIDMzMi41Njc1N10sXHJcbiAgWzE2NzkuNzU5OSwgMzMzLjgzMTU0XSxcclxuICBbMTY4My43ODMsIDMzNC4xMDE3XSxcclxuICBbMTY4Mi4wOTg5LCAzMzguNDg3NV0sXHJcbiAgWzE2ODYuNTE0NCwgMzM4LjU0NTk2XSxcclxuICBbMTY4OS42MzA5LCAzNDIuNDQ1MTZdLFxyXG4gIFsxNjkxLjUzMDUsIDMzNy44MzU0OF0sXHJcbiAgWzE2OTMuNTM5MiwgMzQxLjIyNzddLFxyXG4gIFsxNjk2LjkwMjIsIDM0My4zMjUxM10sXHJcbiAgWzE2OTcuNTg4MywgMzQ4LjIwODc0XSxcclxuICBbMTcwMy40NDQ2LCAzNDcuNjEzNzddLFxyXG4gIFsxNzAyLjQ3MzQsIDM0Mi4xOTYyM10sXHJcbiAgWzE2OTkuNzA4OSwgMzM3LjgxOTQ2XSxcclxuICBbMTcwMy42OTAyLCAzMzcuMjYyNF0sXHJcbiAgWzE3MDcuOTM3MSwgMzM3LjkwODAyXSxcclxuICBbMTcxMy4zNTIsIDMzNy41MTg4XSxcclxuICBbMTcyNi45NjIzLCAzMzkuNDIzNjVdLFxyXG4gIFsxNzMyLjQ1OTIsIDM0NC4yNzEyNF0sXHJcbiAgWzE3MTguNjE4NywgMzU4LjE3MTg0XSxcclxuICBbMTcxNi41NzMxLCAzNjUuNDg0MzhdLFxyXG4gIFsxNzEyLjA3MywgMzY0LjU2ODA4XSxcclxuICBbMTcxNi4wMjEsIDM3MC4yNzY3M10sXHJcbiAgWzE3MjAuODc1NiwgMzY3LjM4NDI1XSxcclxuICBbMTcyMS4wODkyLCAzNjIuMzcxM10sXHJcbiAgWzE3MjEuODA0LCAzNTYuMDAwOTVdLFxyXG4gIFsxNzI0Ljc1MSwgMzUyLjc1NjU2XSxcclxuICBbMTcyOC45MjU4LCAzNDkuODE2MjVdLFxyXG4gIFsxNzI0LjE3NzUsIDM0Ni4wMTE0XSxcclxuICBbMTcxOC40NjczLCAzNDYuMDYxOThdLFxyXG4gIFsxNzE5LjUxNTEsIDM1MS4yNjI0NV0sXHJcbiAgWzE3MTQuMDM0OCwgMzUwLjM2MTA1XSxcclxuICBbMTcwOS4yNjI3LCAzNDkuMTgyODZdLFxyXG4gIFsxNzE1LjIxOTcsIDM1NS4zMTkyN10sXHJcbiAgWzE3MTUuMjI1NiwgMzYwLjUxOF0sXHJcbiAgWzE3MTEuMTI0OCwgMzU5LjU3MzU1XSxcclxuICBbMTcwOS43Mzg4LCAzNTQuNTAxMTZdLFxyXG4gIFsxNzA1LjIwMzQsIDM1Mi4zNDIzXSxcclxuICBbMTcwMy41MzkyLCAzNTYuMzM4XSxcclxuICBbMTcwNi44MTk3LCAzNTkuMTA3XSxcclxuICBbMTcwNi40MDUzLCAzNjMuMjQ2OV0sXHJcbiAgWzE3MDEuNDI0MSwgMzYwLjgyMjc1XSxcclxuICBbMTcwMC4wMzgyLCAzNTMuNTI2NDZdLFxyXG4gIFsxNjkzLjc2OTUsIDM1Mi41NTYzNF0sXHJcbiAgWzE2ODAuOTM3LCAzNDcuNjczNTVdLFxyXG4gIFsxNjg0Ljc5LCAzNDMuMzEyODRdLFxyXG4gIFsxNjcyLjI3MzcsIDM0OC4zMjE3NV0sXHJcbiAgWzE2NzEuMTE2MSwgMzQzLjMyOTA3XSxcclxuICBbMTY2Ny42MzA0LCAzNDUuOTE0OThdLFxyXG4gIFsxNjc2LjQ0MTMsIDM0Ni40ODA0N10sXHJcbiAgWzE2NzkuODkwOSwgMzQyLjUxNzg4XSxcclxuICBbMTY3NS4wOTYzLCAzNDEuNDY5NDJdLFxyXG4gIFsxNjc3LjU3NCwgMzM3LjYwOTJdLFxyXG4gIFsxNjczLjY1MiwgMzM2LjY4ODk2XSxcclxuICBbMTY3MC4xOSwgMzM4LjgxMzc4XSxcclxuICBbMTY2Ni4zNTA2LCAzNDAuNzU4ODhdLFxyXG4gIFsxNjY1LjkyMTUsIDMzNi4xODE4NV0sXHJcbiAgWzE2NjYuOTMwOCwgMzMyLjE4NTE4XSxcclxuICBbMTY2Ny4wOSwgMzI4LjM0MDI3XSxcclxuICBbMTY2OS42MjYzLCAzMjQuNzI5NThdLFxyXG4gIFsxNjc0LjAzMTksIDMyNC45NTAzMl0sXHJcbiAgWzE2NzMuMDQ5OCwgMzIxLjAyNTI3XSxcclxuICBbMTY2OS4zMTA5LCAzMTkuNjI5NTJdLFxyXG4gIFsxNjY2LjQ0NDEsIDMyMS45OTg5Nl0sXHJcbiAgWzE2NjQuNTkwMiwgMzI1LjA5MjQ0XSxcclxuICBbMTY2Mi40NjYzLCAzMjguMzMyMTJdLFxyXG4gIFsxNjYyLjM5MDksIDMzMS45Mjg0NF0sXHJcbiAgWzE2NjEuMDk5NSwgMzM1LjQwNzI2XSxcclxuICBbMTY1Ny4zMDgzLCAzMzcuNzg0M10sXHJcbiAgWzE2NjEuODM4MSwgMzM5LjMzMzRdLFxyXG4gIFsxNjYzLjQ0NjcsIDM0My44MjY2Nl0sXHJcbiAgWzE2NTkuMDc1LCAzNDIuODU0NDZdLFxyXG4gIFsxNjYwLjU1NjQsIDM0Ny42MTRdLFxyXG4gIFsxNjY0LjY4MTksIDM0OC44ODQxMl0sXHJcbiAgWzE2NzYuMTgyNCwgMzUyLjI0NDJdLFxyXG4gIFsxNjg5LjYyMTgsIDM1Ni43NjAyMl0sXHJcbiAgWzE2OTcuMTE3LCAzNTcuNjMzNV0sXHJcbiAgWzE2OTUuOTQ4NywgMzYyLjQxMzAyXSxcclxuICBbMTY5OS44ODU0LCAzNjUuNzg1ODZdLFxyXG4gIFsxNjk2LjYwMDgsIDM3MC4yOTEzMl0sXHJcbiAgWzE3MDAuNzI5MSwgMzcxLjQ0MTYyXSxcclxuICBbMTcwMy43NTk4LCAzNzQuNDM1MTVdLFxyXG4gIFsxNzA3LjIxNDgsIDM3Mi4wMTc1OF0sXHJcbiAgWzE3MDMuOTc0LCAzNjcuOTAzMzJdLFxyXG4gIFsxNzA4LjQwODQsIDM2Ny43MTk0OF0sXHJcbiAgWzE3MTIuMDQ2MSwgMzY5LjIyOTk4XSxcclxuICBbMTcxMi4xNzkyLCAzNzMuNTM5MThdLFxyXG4gIFsxNzEwLjc2MDcsIDM4NS41MDA4XSxcclxuICBbMTcxNS43OTA0LCAzODIuMzk5NzVdLFxyXG4gIFsxNzM0LjEyOTksIDM4MS4zMjc0NV0sXHJcbiAgWzE3MjYuMDUxNiwgMzY0LjkwODY2XSxcclxuICBbMTcyNi44NTQ1LCAzNTkuODg1MzVdLFxyXG4gIFsxNzMwLjY3MTgsIDM1Ni4yNjE0XSxcclxuICBbMTc0OC41NjUsIDM2OC44MDk4XSxcclxuICBbMTc0NC4yOTgxLCAzNzMuMjY1MTRdLFxyXG4gIFsxNzM3LjI4NTMsIDM3NS4zMTk0M10sXHJcbiAgWzE3MjMuODczOSwgMzc2LjkxMzU0XSxcclxuICBbMTczOC41NzQsIDM4NC45MTk0XSxcclxuICBbMTc1MC4wNTc0LCAzOTIuOTUyMTVdLFxyXG4gIFsxNzQ1LjM2MzgsIDM5NC44NzY3XSxcclxuICBbMTc0NS44MTI3LCAzOTkuNTU0MDJdLFxyXG4gIFsxNzQxLjU3NTMsIDM5Ni42MzA0Nl0sXHJcbiAgWzE3NDIuNTIxNSwgNDAxLjkxNDE4XSxcclxuICBbMTc0MS4xMTE1LCA0MDYuMDY5Ml0sXHJcbiAgWzE3MzguMDc2NCwgNDAyLjUyNDZdLFxyXG4gIFsxNzM2Ljc5MzUsIDQwNy42MTcyOF0sXHJcbiAgWzE3MzMuNjkwOCwgNDExLjI5ODhdLFxyXG4gIFsxNzM0Ljc0OTQsIDQxNi4wMjM1M10sXHJcbiAgWzE3MzguNzA1OSwgNDEzLjkzMjYyXSxcclxuICBbMTc0MC4wMzE1LCA0MTAuNDQzODVdLFxyXG4gIFsxNzQ0LjA1MjUsIDQwOS44NDczNV0sXHJcbiAgWzE3NDUuNTUxOCwgNDA2LjI3MThdLFxyXG4gIFsxNzQ3LjM5ODksIDQwMy4wNjk5XSxcclxuICBbMTc1MS4xMDkxLCA0MDEuMjEwMDJdLFxyXG4gIFsxNzU1LjQ2NzQsIDM5OS42MDU1M10sXHJcbiAgWzE3NDguOTIwOCwgMzk3LjQ0Njg0XSxcclxuICBbMTc1Mi41Njk1LCAzOTYuNzg2NjJdLFxyXG4gIFsxNzU1LjY1ODQsIDM5NC43NjU4N10sXHJcbiAgWzE3NTQuMTcyNiwgMzkwLjkyNzZdLFxyXG4gIFsxNzU4LjczNjgsIDM5MS4xODIxXSxcclxuICBbMTc2Mi40NDk4LCAzOTIuODk1MDhdLFxyXG4gIFsxNzY2LjgxMjcsIDM5MC4zNDkwNl0sXHJcbiAgWzE3NzAuODk0MywgMzg3LjExODldLFxyXG4gIFsxNzcwLjUxNjIsIDM4My4xMjI4Nl0sXHJcbiAgWzE3NzUuODYxMiwgMzgzLjM4NjldLFxyXG4gIFsxNzc1LjMyNTgsIDM4Ny42Njg0Nl0sXHJcbiAgWzE3NzguOTc4MywgMzkwLjUwNzhdLFxyXG4gIFsxNzgyLjg3OTIsIDM4OS4yNzQ0OF0sXHJcbiAgWzE3ODYuOTUxMiwgMzg4LjUzMzAyXSxcclxuICBbMTc5MS45MzQ4LCAzODguMzA4MTddLFxyXG4gIFsxNzkzLjYyNjIsIDM4My43NDU3M10sXHJcbiAgWzE3OTMuNjkxOSwgMzk0LjM2MzddLFxyXG4gIFsxNzkwLjAxODEsIDM5Mi43MDEzNV0sXHJcbiAgWzE3ODUuMzc5MiwgMzkzLjc2NDddLFxyXG4gIFsxNzgwLjc1MzQsIDM5NC44NDA4XSxcclxuICBbMTc3Ni4zNDEsIDM5NS4wMjkzNl0sXHJcbiAgWzE3NzQuOTMwOSwgMzkxLjc4MTddLFxyXG4gIFsxNzcxLjE0MzMsIDM5MS41NjA4XSxcclxuICBbMTc2OS4yMzEyLCAzOTUuMzM5MTddLFxyXG4gIFsxNzY1LjYyNzQsIDM5NC45NzQ4XSxcclxuICBbMTc3Mi42MjQxLCAzOTYuOTcyMDVdLFxyXG4gIFsxNzcxLjMwNzcsIDQwMC45NzYzOF0sXHJcbiAgWzE3NzEuODM2NywgNDA1LjM2Ml0sXHJcbiAgWzE3NzUuNDgxOCwgNDAyLjg1MzI0XSxcclxuICBbMTc3Ni41OTM2LCAzOTguOTUxNl0sXHJcbiAgWzE3ODAuNDYwNCwgMzk5Ljg2NDg0XSxcclxuICBbMTc4NC40MzQzLCAzOTguNDQ4NTVdLFxyXG4gIFsxNzg4LjYyOTksIDM5Ny44ODY2Nl0sXHJcbiAgWzE3OTIuNjY2NSwgMzk4LjU3MzNdLFxyXG4gIFsxNzk2LjgwMzcsIDQwMS4wNDA0N10sXHJcbiAgWzE3OTcuMjUzMiwgMzk3LjE4NjM0XSxcclxuICBbMTgwMC42MTg3LCAzOTUuMzMxOF0sXHJcbiAgWzE4MDIuMDU3NywgMzkxLjUwMDU1XSxcclxuICBbMTgwNS43OTM3LCAzOTYuMjEyNl0sXHJcbiAgWzE4MDIuMTY5MSwgNDAwLjAzODNdLFxyXG4gIFsxODAzLjE4ODcsIDQwNS4wMDg5N10sXHJcbiAgWzE4MDcuMTUzMiwgNDA2Ljg5MjAzXSxcclxuICBbMTgxMC45MzQzLCA0MDguNTY2MjhdLFxyXG4gIFsxODE0LjIwNTEsIDQxMS42MDc4XSxcclxuICBbMTgxOC43NDgzLCA0MTEuMDQ3OTddLFxyXG4gIFsxODI0LjUxMjgsIDQwOC41NTI2XSxcclxuICBbMTgyOS45Nzc3LCA0MDcuODMxNjNdLFxyXG4gIFsxODM0Ljc3ODcsIDQwNS4zNjVdLFxyXG4gIFsxODQwLjI0NjYsIDQxMS44NTE0NF0sXHJcbiAgWzE4MzUuNzAyOSwgNDEwLjE2N10sXHJcbiAgWzE4MzUuMjE2NiwgNDE1Ljk1MTYzXSxcclxuICBbMTgzOS45NjM3LCA0MTcuNDk5MzZdLFxyXG4gIFsxODQ0LjI0OTQsIDQxNS41MV0sXHJcbiAgWzE4NDcuNTk0NywgNDE5LjExMDU3XSxcclxuICBbMTg0OS42Mjk0LCA0MjQuMzI5Ml0sXHJcbiAgWzE4NDQuNzkzLCA0MjMuMTgxMTVdLFxyXG4gIFsxODQwLjgxNywgNDIyLjU2MDldLFxyXG4gIFsxODQxLjEyMywgNDI3LjU1Mjk1XSxcclxuICBbMTg0NS43NzQyLCA0MjkuNDEyODRdLFxyXG4gIFsxODUxLjU4MzEsIDQyOC42Mjg0OF0sXHJcbiAgWzE4NTQuNTY5MiwgNDMyLjg0Nzk2XSxcclxuICBbMTg0OC43NjUsIDQzNC4wMDI2Ml0sXHJcbiAgWzE4NDMuOTc0NywgNDM1Ljg5MDA4XSxcclxuICBbMTg0Ny4yOTM1LCA0NDAuNDE0XSxcclxuICBbMTg1Mi4zNzc4LCA0MzguMDQ4OTJdLFxyXG4gIFsxODUzLjY5MDQsIDQ0My4yMzI0Ml0sXHJcbiAgWzE4NDguNTc1NywgNDQ2LjQ0MDAzXSxcclxuICBbMTg0Mi43MTUxLCA0NDkuNjM3OF0sXHJcbiAgWzE4MzguNzY1OSwgNDU0LjUzNDg4XSxcclxuICBbMTgzNC4yMzczLCA0NzAuNjk5MjJdLFxyXG4gIFsxODI4Ljc1ODgsIDQ3NS4zNTc1XSxcclxuICBbMTgyOS40MDYxLCA0NjUuNzMxMDJdLFxyXG4gIFsxODQxLjUwNzYsIDQ2Ni44NDM1N10sXHJcbiAgWzE4MzYuMjU0MiwgNDYyLjUyMTgyXSxcclxuICBbMTgzMS41MTU2LCA0NTcuNTQ4ODNdLFxyXG4gIFsxODI0LjU5MzUsIDQ2MC45MjM5XSxcclxuICBbMTgxOS4zMzAxLCA0NTYuOTc3MDVdLFxyXG4gIFsxODEzLjk1MDEsIDQ1My4wOTAzM10sXHJcbiAgWzE4MTQuNjc3LCA0NDUuOTAyMDRdLFxyXG4gIFsxODIwLjU4MTUsIDQ0OC4xNjQ1Ml0sXHJcbiAgWzE4MjUuNzMwMiwgNDUyLjY3MzgzXSxcclxuICBbMTgyOC41MjgxLCA0NDYuMDA0NzNdLFxyXG4gIFsxODMyLjcyMzksIDQ1MC42NTk2NF0sXHJcbiAgWzE4MzYuOTEzMSwgNDQ2LjM1OTddLFxyXG4gIFsxODM0LjgxNjIsIDQ0MS4yMDEyM10sXHJcbiAgWzE4MjkuODUwMywgNDQwLjM3MDgyXSxcclxuICBbMTgyNC4yMDc0LCA0NDEuNjE1NDJdLFxyXG4gIFsxODE5LjE4MDUsIDQ0MC44NDA0Ml0sXHJcbiAgWzE4MTQuMTEsIDQzOS4yNjM2XSxcclxuICBbMTgwOS41MzQ0LCA0NDIuNjY4ODJdLFxyXG4gIFsxODA4LjQ5MjYsIDQ0OC41NDY2XSxcclxuICBbMTgxMy4xNzcsIDQ2MS4zNzEyMl0sXHJcbiAgWzE4MjMuOTA1NiwgNDcwLjUyODddLFxyXG4gIFsxODE4LjYxMTEsIDQ2Ni43NzA0XSxcclxuICBbMTgxMi41MjA4LCA0NzAuMDU1NDJdLFxyXG4gIFsxODA2LjA3MTgsIDQ2Ni41NTk1N10sXHJcbiAgWzE4MDUuNzI1LCA0NjAuMzc0NjNdLFxyXG4gIFsxODA3LjQ3OTIsIDQ1NC45MTI5Nl0sXHJcbiAgWzE4MDEuOTA4OSwgNDUxLjQwNjddLFxyXG4gIFsxNzk5LjQ3NTMsIDQ1Ny4zMDkxN10sXHJcbiAgWzE3OTkuNDEwNCwgNDY0LjI3MTldLFxyXG4gIFsxNzkzLjQyNDksIDQ2Ni45MDgzXSxcclxuICBbMTc4Ny44NTQyLCA0NjQuNjE4NzRdLFxyXG4gIFsxNzkzLjI1OTUsIDQ1OS42MzIzXSxcclxuICBbMTc5NC4yODAyLCA0NTIuNTk3OTZdLFxyXG4gIFsxNzg4Ljg4OTIsIDQ1NC40MDI3N10sXHJcbiAgWzE3ODYuNDE3NCwgNDU5LjM0MTA2XSxcclxuICBbMTc4OC40MTAyLCA0NDkuMDM3N10sXHJcbiAgWzE3OTIuMjM5MywgNDQ0LjM3NzI2XSxcclxuICBbMTgwMC4wOTk5LCA0MzguMDUxMzNdLFxyXG4gIFsxODA0LjAzMjMsIDQzNC41OTY5Ml0sXHJcbiAgWzE4MDguMTYzLCA0MzEuMzYyMzddLFxyXG4gIFsxODA3LjY4MjksIDQyMy40ODE5XSxcclxuICBbMTgwNS40NzI5LCA0MjYuOTQ5M10sXHJcbiAgWzE4MDIuNjM2NiwgNDI5LjY2NjcyXSxcclxuICBbMTc5OS4zMDA1LCA0MzIuNDc1MDRdLFxyXG4gIFsxNzk1LjQ0ODQsIDQzMy4xMjQ4NV0sXHJcbiAgWzE3OTAuNzg5MiwgNDM0LjA0MTddLFxyXG4gIFsxNzg3LjUzNzUsIDQzMC44NDg0XSxcclxuICBbMTc4Mi45MzA1LCA0MjguNTc5NDRdLFxyXG4gIFsxNzg1Ljc0ODIsIDQyMi43ODk5XSxcclxuICBbMTc4OS4yMDAxLCA0MjUuOTQwNV0sXHJcbiAgWzE3OTMuODE1OCwgNDI4LjU3Nzk3XSxcclxuICBbMTc5My45ODksIDQyMy42MTVdLFxyXG4gIFsxNzkwLjQwNTMsIDQyMC4zNDExM10sXHJcbiAgWzE3OTQuOTA0NywgNDE4LjMwMTk3XSxcclxuICBbMTc5NS4xMTM0LCA0MTQuMTU2NDNdLFxyXG4gIFsxNzkwLjc1ODQsIDQwOC43NzUxNV0sXHJcbiAgWzE3ODYuMzM0MiwgNDA2LjkzMzE3XSxcclxuICBbMTc4Mi4zMTYyLCA0MDguMjU5MTZdLFxyXG4gIFsxNzc5LjEwNzQsIDQxMC45OTk3XSxcclxuICBbMTc4My42MDAxLCA0MTMuMzMyMzRdLFxyXG4gIFsxNzg3LjExOTYsIDQxMS4zNzE1Ml0sXHJcbiAgWzE3OTAuNTI2MSwgNDE0LjY1MzVdLFxyXG4gIFsxNzg2LjYwMzUsIDQxNy4yNzQxN10sXHJcbiAgWzE3ODIuMzQ0NiwgNDE5LjEwNzQ4XSxcclxuICBbMTc3OS45MDIzLCA0MTUuNjEyMTVdLFxyXG4gIFsxNzc2LjA2MzUsIDQxMy45NzgyN10sXHJcbiAgWzE3NzMuMDI0OCwgNDE2Ljg3MTFdLFxyXG4gIFsxNzcyLjE1NjIsIDQyMS4wMDc2Nl0sXHJcbiAgWzE3NzcuMDk0LCA0MTkuOTg5MDddLFxyXG4gIFsxNzgwLjg3MDgsIDQyMy43MjQ5OF0sXHJcbiAgWzE3NzYuNzU4OCwgNDI1Ljk0NTVdLFxyXG4gIFsxNzgzLjg4MTYsIDQzNC44NDIzNV0sXHJcbiAgWzE3NzguNTcyLCA0MzcuMDExOTNdLFxyXG4gIFsxNzc4LjI4NTksIDQzMS4xMzgxNV0sXHJcbiAgWzE3NzIuMTU3OCwgNDMwLjIzMjhdLFxyXG4gIFsxNzcyLjE4NzEsIDQyNS43NjRdLFxyXG4gIFsxNzY4LjI0MjEsIDQyMy45MzExXSxcclxuICBbMTc2Ni43MTUzLCA0MTkuNjI5ODJdLFxyXG4gIFsxNzY4LjY2NzUsIDQxNS44MTMxXSxcclxuICBbMTc2NS45ODgzLCA0MTIuNjE5N10sXHJcbiAgWzE3NjEuNDcyLCA0MTEuNzY5XSxcclxuICBbMTc1Ny4yMzE2LCA0MTAuOTA0MTddLFxyXG4gIFsxNzU2Ljc3NzcsIDQwNy4wMzMxN10sXHJcbiAgWzE3NTQuMzMzNywgNDAzLjg4Mjc1XSxcclxuICBbMTc1MC4yOTc0LCA0MDUuOTc4MTJdLFxyXG4gIFsxNzUyLjg0NzksIDQwOC45MjQ0NF0sXHJcbiAgWzE3NTMuMTgwMiwgNDEyLjg5ODM4XSxcclxuICBbMTc1MC41NzEsIDQyMC4xOTEyNV0sXHJcbiAgWzE3NTIuMzMwMSwgNDI0LjI3MzA0XSxcclxuICBbMTc0Ni45MzgsIDQyMy44ODQwM10sXHJcbiAgWzE3NDYuMTEzMiwgNDE4LjkxMDEzXSxcclxuICBbMTc0OC45MzI3LCA0MTQuOTkwNjZdLFxyXG4gIFsxNzQ4LjQzMTUsIDQxMC4zNTg3XSxcclxuICBbMTc0NC40ODU4LCA0MTMuODQ0NTRdLFxyXG4gIFsxNzQxLjk5OTQsIDQxNy4wODg4N10sXHJcbiAgWzE3MzguMjU0NiwgNDE5LjI5NTM4XSxcclxuICBbMTc0Mi4wNjMxLCA0MjEuODYxM10sXHJcbiAgWzE3NDEuNDQyNCwgNDI2LjAwNzE3XSxcclxuICBbMTc0NS4xNDM0LCA0MjguMjI1MDddLFxyXG4gIFsxNzQ5LjE1NDksIDQyOS40MjYwM10sXHJcbiAgWzE3NTMuMzExMywgNDI5LjMwOTQyXSxcclxuICBbMTc1Ni42MDc3LCA0MjYuOTUwMzJdLFxyXG4gIFsxNzU4LjE3MzIsIDQyMy4zODA4Nl0sXHJcbiAgWzE3NTYuMzA1NCwgNDE5Ljc4NzJdLFxyXG4gIFsxNzUzLjE5NDUsIDQxNi45MjM5XSxcclxuICBbMTc1OC4wMzUyLCA0MTUuNDUzOTVdLFxyXG4gIFsxNzYyLjg2ODIsIDQxNi4zMDc5Ml0sXHJcbiAgWzE3NjEuNjE0NywgNDIwLjQ2MDg4XSxcclxuICBbMTc2My43NzI3LCA0MjQuNTE5MzhdLFxyXG4gIFsxNzYxLjE2NjEsIDQyOC4xMTldLFxyXG4gIFsxNzY2LjcyNzMsIDQyOC45MTI4XSxcclxuICBbMTc2Ny45ODk0LCA0MzQuMDAyMDRdLFxyXG4gIFsxNzc0LjI3MDEsIDQzNC42MTYzM10sXHJcbiAgWzE3NzAuODExNSwgNDM3LjgyNzg1XSxcclxuICBbMTc3My4xMjc5LCA0NDEuNTQ4NjVdLFxyXG4gIFsxNzcxLjg5NiwgNDQ2LjI3MjQzXSxcclxuICBbMTc3MS44MzUsIDQ1MS4zNzUzN10sXHJcbiAgWzE3NjYuMzA0MiwgNDUyLjUwNzc1XSxcclxuICBbMTc3MS40MDEyLCA0NTYuMTkzMzNdLFxyXG4gIFsxNzcwLjA3OTEsIDQ2MC43ODVdLFxyXG4gIFsxNzY4LjMzOTgsIDQ2NC45OTQzNV0sXHJcbiAgWzE3NjguMDUxOCwgNDcwLjA1NjUyXSxcclxuICBbMTc3MC45MzkzLCA0NzMuODY5NTddLFxyXG4gIFsxNzc3LjAwMTcsIDQ3Ni41MTQ5OF0sXHJcbiAgWzE3NzguMjcsIDQ3MS4wNjM4XSxcclxuICBbMTc3My45NTE0LCA0NjYuNzU1M10sXHJcbiAgWzE3NzUuNzQ3NCwgNDYwLjYzMzI0XSxcclxuICBbMTc4MC43NzE5LCA0NTguNjU0MjddLFxyXG4gIFsxNzgzLjEzMzksIDQ1My4yNDMxXSxcclxuICBbMTc4MS45NjUxLCA0NDcuNTY2MDRdLFxyXG4gIFsxNzc2Ljc3MTIsIDQ0OC41MjEyNF0sXHJcbiAgWzE3NzcuMDkzNSwgNDU0LjEzMzM2XSxcclxuICBbMTc3Ny44NDUsIDQ0Mi44NDMyXSxcclxuICBbMTc4Mi45NDU3LCA0NDAuNjQ3ODNdLFxyXG4gIFsxNzg2LjU0NTksIDQ0NC4wNDI0NV0sXHJcbiAgWzE3ODguODI2MiwgNDM4Ljk1MzU4XSxcclxuICBbMTc5NC41MTgxLCA0MzguMzQ2NTNdLFxyXG4gIFsxNzk3LjgyMTMsIDQ0Mi42NzU3NV0sXHJcbiAgWzE3OTcuMDM0OCwgNDQ3Ljk2NjA2XSxcclxuICBbMTgwMy4xMDAyLCA0NDUuMjEyMjhdLFxyXG4gIFsxODA0Ljg1MDgsIDQ0MC4wOTU2NF0sXHJcbiAgWzE4MDguODMzMywgNDM2Ljg1MTU2XSxcclxuICBbMTgxMi43MjUzLCA0MzMuOTc5NzRdLFxyXG4gIFsxODE0LjQ5NDEsIDQyOS42ODI3XSxcclxuICBbMTgxMC45MTY2LCA0MjcuMTE5MzJdLFxyXG4gIFsxODEyLjAwNzgsIDQyMi4yMDg1Nl0sXHJcbiAgWzE4MTUuODM2OCwgNDI0LjA2OTA2XSxcclxuICBbMTgxOS4zMDUzLCA0MjEuOTgyNl0sXHJcbiAgWzE4MjAuNDk3MywgNDE3LjIyMDI4XSxcclxuICBbMTgxNi4wNjc3LCA0MTYuNjA0MzRdLFxyXG4gIFsxODEyLjA1NDksIDQxNy44NjI2N10sXHJcbiAgWzE4MDkuNDc1MSwgNDEzLjY0ODVdLFxyXG4gIFsxODA0LjgyNDcsIDQxMC45MjA3Ml0sXHJcbiAgWzE4MDQuNTc1MiwgNDE1Ljc1MDY3XSxcclxuICBbMTgwNy4yNzMxLCA0MTkuMDM1XSxcclxuICBbMTgwMi45NjMzLCA0MjIuMjk2MzNdLFxyXG4gIFsxNzk4Ljk0OTUsIDQyNi41MTQxNl0sXHJcbiAgWzE3OTguMjA4NCwgNDIxLjcyOTJdLFxyXG4gIFsxODAwLjIxMzYsIDQxNy42NDg2NV0sXHJcbiAgWzE4MDAuMDc3OSwgNDEzLjE1MDQ1XSxcclxuICBbMTgwMC4zNTg5LCA0MDguNTgxXSxcclxuICBbMTc5OC44MTE0LCA0MDQuMzc0MDhdLFxyXG4gIFsxNzk1Ljk1MjEsIDQwOS45NDJdLFxyXG4gIFsxNzk0LjQ2ODMsIDQwNi4xOTUwNF0sXHJcbiAgWzE3OTIuNDM5NSwgNDAyLjg5ODg2XSxcclxuICBbMTc4OC41NDI1LCA0MDMuMDg4MTNdLFxyXG4gIFsxNzg0LjA1MjEsIDQwMy4wNjEyNV0sXHJcbiAgWzE3NzkuOTA5NCwgNDA0LjExNDddLFxyXG4gIFsxNzc3LjI3NTYsIDQwNi45NTI4NV0sXHJcbiAgWzE3NzQuMjE4OCwgNDA5LjE3OTYzXSxcclxuICBbMTc3MS43MTM2LCA0MTIuNDY2OThdLFxyXG4gIFsxNzY5LjIwMzcsIDQwOS4wNDc1NV0sXHJcbiAgWzE3NjQuOTQ0MiwgNDA4LjE2NTEzXSxcclxuICBbMTc2MS4xNDkzLCA0MDcuMDg1NV0sXHJcbiAgWzE3NjMuMzYxNywgNDAyLjgyOTU2XSxcclxuICBbMTc2Ny40NDYsIDQwNC40MTU2NV0sXHJcbiAgWzE3NjcuMTMxMywgMzk5LjcyODVdLFxyXG4gIFsxNzYyLjk4ODUsIDM5OC4xMTY1Ml0sXHJcbiAgWzE3NTguODQxMiwgNDAzLjQ4NTk2XSxcclxuICBbMTc1OS40MzAzLCAzOTkuODY0OTNdLFxyXG4gIFsxNzU5LjIxLCAzOTUuODc4NTRdLFxyXG4gIFsxNzU3LjE4MTMsIDM4Ni43MTQ1NF0sXHJcbiAgWzE3NjIuNDcwNSwgMzg4LjI1ODVdLFxyXG4gIFsxNzY2LjE4MDMsIDM4NS4yMzk3XSxcclxuICBbMTc2MC44MTQyLCAzODMuNjEyOF0sXHJcbiAgWzE3NjQuMzU5MSwgMzc1LjAwMDM0XSxcclxuICBbMTc2My4zMzc5LCAzODAuMjMxNF0sXHJcbiAgWzE3NjguNDM3NCwgMzc1LjAwMzVdLFxyXG4gIFsxNzcyLjIzNDksIDM3Ni43MTExMl0sXHJcbiAgWzE3NjcuNTg2MiwgMzY5LjE4Nzg0XSxcclxuICBbMTc3MS41NDc1LCAzNzEuNzY4Ml0sXHJcbiAgWzE3NzMuMzA5OCwgMzY3LjAyNTVdLFxyXG4gIFsxNzc1LjUwNDksIDM3Mi44OTk2XSxcclxuICBbMTc4My43MzEsIDM3MC4wOTcyM10sXHJcbiAgWzE3ODQuMDgxOCwgMzc1LjI0NzkyXSxcclxuICBbMTc4MC42ODUzLCAzODAuMTY4MDZdLFxyXG4gIFsxNzg0LjA4NTksIDM4My4yMTAwMl0sXHJcbiAgWzE3ODguNTI1NSwgMzgzLjU1MzI4XSxcclxuICBbMTc3OS44NTYxLCAzODUuNDI4NjVdLFxyXG4gIFsxNzY3Ljg0NjksIDM3OS44MjIyNF0sXHJcbiAgWzE3NzMuNTQ5OCwgMzgwLjI5ODE2XSxcclxuICBbMTc3Ny4xODY5LCAzNzcuNzU4M10sXHJcbiAgWzE3NzkuOTAzOCwgMzczLjg2Nzc3XSxcclxuICBbMTc3OC42NzM1LCAzNjguNTg5NTRdLFxyXG4gIFsxNzg5LjA3NjksIDM3MC4wODc0Nl0sXHJcbiAgWzE3OTMuNDcyMiwgMzczLjM1NzI3XSxcclxuICBbMTc4Ny4wMzk4LCAzNzcuNzg3MzVdLFxyXG4gIFsxNzkxLjI5MDgsIDM3OC43Mzc1Ml0sXHJcbiAgWzE3OTYuMjE5NywgMzc5LjE5NzVdLFxyXG4gIFsxNzk5Ljc1MTIsIDM4Mi45NDUzN10sXHJcbiAgWzE3OTcuNDg4OSwgMzg3LjI1MzZdLFxyXG4gIFsxNzk2Ljc1MzIsIDM5MS40NDQ5XSxcclxuICBbMTgwMy4yMDkxLCAzODYuOTQ3XSxcclxuICBbMTgwNC42NjQ4LCAzODEuNTAzMzZdLFxyXG4gIFsxODA5LjAzNDcsIDM4Ni41Njk0Nl0sXHJcbiAgWzE4MTUuMjI5NywgMzg5LjM2MDg0XSxcclxuICBbMTgxOS43NTcyLCAzOTQuMzU4MjhdLFxyXG4gIFsxODIxLjY3ODcsIDM5OS45MjUzNV0sXHJcbiAgWzE4MjUuOTY2MywgMzk3LjAxMDY4XSxcclxuICBbMTgzMC41NTQ3LCA0MDEuNTQxOF0sXHJcbiAgWzE4MjUuOTM2OCwgNDAzLjUxNjMzXSxcclxuICBbMTgxNi44NDAzLCA0MDEuMDg4MzhdLFxyXG4gIFsxODE0Ljg2NDYsIDM5Ni43MDE0Ml0sXHJcbiAgWzE4MTEuNDQ2MywgMzkzLjAyNTM2XSxcclxuICBbMTgwNi45OTYyLCAzOTEuMjIyM10sXHJcbiAgWzE4MTAuMjEwMiwgMzk4LjM4NDIyXSxcclxuICBbMTgwNi44OTA3LCA0MDEuOTE1MzRdLFxyXG4gIFsxODExLjk0ODcsIDQwMy4zNDcxXSxcclxuICBbMTgxNi4wNjkyLCA0MDYuMzM1MDJdLFxyXG4gIFsxODIwLjgwMSwgNDA1LjY1M10sXHJcbiAgWzE4MjIuNTE1MSwgNDEzLjA1NTldLFxyXG4gIFsxODIzLjg1MTEsIDQyMS42ODkyXSxcclxuICBbMTgyNS40MzkyLCA0MTcuMDQ3NThdLFxyXG4gIFsxODI3LjE3NjMsIDQxMi40ODddLFxyXG4gIFsxODMxLjQ1NjgsIDQxMy4yNDc1XSxcclxuICBbMTgzMC4wMTU0LCA0MTcuNjI5MjddLFxyXG4gIFsxODI4LjQ1MDIsIDQyMS42NDE2Nl0sXHJcbiAgWzE4MzMuMDU1OSwgNDIxLjI0NTJdLFxyXG4gIFsxODM2Ljk1NjksIDQyMC43NDg3OF0sXHJcbiAgWzE4MzYuNTM1NCwgNDI1LjUwMTddLFxyXG4gIFsxODMwLjczMDgsIDQyNS40MzU0XSxcclxuICBbMTgyNi41Mjg2LCA0MjUuOTcxMl0sXHJcbiAgWzE4MjIuMzI2MywgNDI3LjE2MDg2XSxcclxuICBbMTgxOC44NjI0LCA0MjkuMDA3MjZdLFxyXG4gIFsxODE3Ljc0MDcsIDQzNC42MjY0M10sXHJcbiAgWzE4MjIuNTA3OCwgNDM0LjY5MDY0XSxcclxuICBbMTgyNy40MTA5LCA0MzUuOTE2MzJdLFxyXG4gIFsxODI1Ljg4ODksIDQzMC43MzQzOF0sXHJcbiAgWzE4MzAuNTA0MywgNDMxLjMzMDMyXSxcclxuICBbMTgzMy4xMzAxLCA0MzUuNDEzMDZdLFxyXG4gIFsxODMzLjE1MTksIDQyOC4xMTA4XSxcclxuICBbMTgzNi4zODQ1LCA0MzAuOTkyNzRdLFxyXG4gIFsxODQwLjg3NDMsIDQzMi4zMzQ1M10sXHJcbiAgWzE4MzguMDQ2MywgNDM2LjI5Njg4XSxcclxuICBbMTg0MC42MjE1LCA0NDAuNDU5NTNdLFxyXG4gIFsxODQzLjA5NjcsIDQ0NC40Mjc4XSxcclxuICBbMTg0Ny4wNzg5LCA0NTMuNzE5MzNdLFxyXG4gIFsxODUyLjk0MjksIDQ1Ni40OTA4XSxcclxuICBbMTg1My43MjEsIDQ0OS44ODkxM10sXHJcbiAgWzE4NTkuMjgxLCA0NDUuMjgxN10sXHJcbiAgWzE4NjAuMTY2LCA0NTEuNzExNTVdLFxyXG4gIFsxODYwLjg4ODcsIDQ1OC4wOTY5XSxcclxuICBbMTg0NC4xNjA5LCA0NjAuMDI1NV0sXHJcbiAgWzE4NDguMjUzNCwgNDY2LjQ0MDI4XSxcclxuICBbMTg2OS42OTU4LCA1MDIuMDIwMjNdLFxyXG4gIFsxODI4LjQ3NiwgNTI2LjYxNDI2XSxcclxuICBbMTgxMy4xNjMzLCA1MTMuNjI3ODddLFxyXG4gIFsxODA5LjgzOTEsIDUwOC40MTUyOF0sXHJcbiAgWzE4MTQuNDk4OCwgNDkyLjcxMTY0XSxcclxuICBbMTgyMC43NTc5LCA0OTIuMzE4MDhdLFxyXG4gIFsxODI1LjIwNzMsIDQ4MS4xNjc2Nl0sXHJcbiAgWzE4MTkuMjY0NiwgNDc2LjY1NjU2XSxcclxuICBbMTgxNC43NjUsIDQ4NC42NDMwNF0sXHJcbiAgWzE4MjAuNzc3NSwgNDg1LjYxMTYzXSxcclxuICBbMTgwOS4yNSwgNDg5Ljg1NDM0XSxcclxuICBbMTgwNy44ODQsIDQ4My4yODQxOF0sXHJcbiAgWzE4MDIuODAzMiwgNDc5LjE2NTZdLFxyXG4gIFsxODA1LjQyNDIsIDQ3My4xNDM1NV0sXHJcbiAgWzE3OTguNTk2MywgNDcxLjkyNjVdLFxyXG4gIFsxNzk1LjczMzksIDQ3OC4zMjQ0XSxcclxuICBbMTc5MS4xNjkyLCA0NzMuNTU1M10sXHJcbiAgWzE3ODUuMDY1NywgNDcwLjIxNTldLFxyXG4gIFsxNzgwLjkyMTQsIDQ2NC44NDc0N10sXHJcbiAgWzE3ODQuMzcwNywgNDc3LjExNjI3XSxcclxuICBbMTc3OC44NDUzLCA0ODIuMDk5OV0sXHJcbiAgWzE3ODQuMDIwMywgNDg0LjkxMTA3XSxcclxuICBbMTc4OS44ODM4LCA0ODEuNzcxM10sXHJcbiAgWzE3OTMuMTg4NSwgNDg3LjY4MjgzXSxcclxuICBbMTc5Ny44MzMxLCA0ODQuMTEwNzhdLFxyXG4gIFsxODAyLjc5NSwgNDg3LjYxNDhdLFxyXG4gIFsxNzk3Ljg1MjMsIDQ5MS45MTZdLFxyXG4gIFsxODAwLjA4MjksIDQ5Ny41MDUyMl0sXHJcbiAgWzE3OTUuNDkwNSwgNDk4LjY0NjFdLFxyXG4gIFsxNzkyLjAxNjEsIDQ5NC42ODYzN10sXHJcbiAgWzE3ODkuMDQ5MSwgNTAwLjcwNjQyXSxcclxuICBbMTc5My4zNDA3LCA1MDMuNjMwODZdLFxyXG4gIFsxNzg4LjYxNTIsIDUwNy42ODk1OF0sXHJcbiAgWzE3OTguNzc4LCA1MDQuMDMwMzNdLFxyXG4gIFsxODA4LjU4NjgsIDUwMy4zNDYyOF0sXHJcbiAgWzE4MDQuODMzMSwgNDk0LjA3NTJdLFxyXG4gIFsxODAzLjkyMiwgNTAwLjUzOTE1XSxcclxuICBbMTgxNS40NDg1LCA1MDYuMTE1MzZdLFxyXG4gIFsxODIwLjg3MjMsIDUxMy41NzldLFxyXG4gIFsxODE3LjA4MDksIDUxOS40MDMzXSxcclxuICBbMTgyMi4wMDM4LCA1MjQuNzYwNDRdLFxyXG4gIFsxODA1Ljg4MjYsIDUzMC4zODg0XSxcclxuICBbMTgwNi44ODI4LCA1MTguNDE1OTVdLFxyXG4gIFsxODA1LjY1MzEsIDUxMi42MTkyNl0sXHJcbiAgWzE4MDEuNTIzNCwgNTI0LjYwNTk2XSxcclxuICBbMTc5NC45Mjg1LCA1MjkuMDc4NzRdLFxyXG4gIFsxNzg4LjU5NjcsIDUyNC4zMjczM10sXHJcbiAgWzE3OTQuODM5NiwgNTIxLjQ1MjE1XSxcclxuICBbMTc4NC41NjIxLCA1MTIuMjY5NTNdLFxyXG4gIFsxNzg4LjI3MDQsIDUxNy42MTk4XSxcclxuICBbMTc5My4yODcsIDUxNC4yMjM3NV0sXHJcbiAgWzE3OTQuODEyLCA1MDguODk1NV0sXHJcbiAgWzE3OTkuODkzOCwgNTEwLjkzMTEyXSxcclxuICBbMTgwMy41Nzk4LCA1MDYuNTQ2NTddLFxyXG4gIFsxODAwLjA2NTIsIDUxNy4xODA4XSxcclxuICBbMTgwOS4zNDUyLCA1MjMuNjExMl0sXHJcbiAgWzE4MTIuNzE3MiwgNTMzLjQ2ODZdLFxyXG4gIFsxODI3LjY1NzIsIDUzMy40NjZdLFxyXG4gIFsxODM1LjQwODEsIDUzMS41NTEzXSxcclxuICBbMTg2Ni40NjQ4LCA1NjEuOTk0OTNdLFxyXG4gIFsxODczLjg5NTgsIDU3NC4zMTU0XSxcclxuICBbMTg3Ni43NzU1LCA1NjUuMjM0MjVdLFxyXG4gIFsxODgxLjU5MjMsIDU2My43MjgxNV0sXHJcbiAgWzE4ODMuODkxMSwgNTU4LjEyNTA2XSxcclxuICBbMTg4Ni40OTM0LCA1NjQuNzc1M10sXHJcbiAgWzE4OTEuODM2OSwgNTYzLjQ1ODNdLFxyXG4gIFsxODk3LjI4OCwgNTU1LjI5ODM0XSxcclxuICBbMTg4OS44NzY1LCA1NDEuNTgwNTddLFxyXG4gIFsxODgzLjY5NjUsIDUzNi45Mzc1XSxcclxuICBbMTg4MC45NjI4LCA1NDMuMjU0N10sXHJcbiAgWzE4NzQuMDE5OSwgNTQxLjkyODFdLFxyXG4gIFsxODczLjE4NDIsIDU1NC45MTQwNl0sXHJcbiAgWzE4NzcuNjc4MiwgNTUyLjk3NDI0XSxcclxuICBbMTg4Mi4zODI5LCA1NTIuNDI2OF0sXHJcbiAgWzE4ODYuMjEyMiwgNTQ4LjgxOTk1XSxcclxuICBbMTg5MS41NDc3LCA1NTAuMjE2MjVdLFxyXG4gIFsxODg5Ljg4NDIsIDU1Ny4xMTFdLFxyXG4gIFsxODc3Ljg4NCwgNTU5LjIxMjFdLFxyXG4gIFsxODY3LjQxMjQsIDU1Ni40NDg3XSxcclxuICBbMTg3MS45NzM0LCA1NjQuNjA2NzVdLFxyXG4gIFsxODczLjMyNjksIDU2OS43MzgzXSxcclxuICBbMTg3Mi4xODIzLCA1NTkuODc1MDZdLFxyXG4gIFsxODY3LjQ4NzgsIDU2Ny41Nzg2XSxcclxuICBbMTg2Ny42MTExLCA1NzIuOTQ5XSxcclxuICBbMTg2Mi42NjE1LCA1NzAuNTY3Nl0sXHJcbiAgWzE4NjEuMTE0LCA1NjUuMDIyMDNdLFxyXG4gIFsxODUxLjc4NTksIDU2OS43NDY0Nl0sXHJcbiAgWzE4NTcuMTM1MywgNTcwLjk3NzddLFxyXG4gIFsxODU5LjgwOTMsIDU3NS42MTMzNF0sXHJcbiAgWzE4NTQuNTEyMywgNTc3LjQ2NTNdLFxyXG4gIFsxODQ5LjQ1MDksIDU3NS4xNjUxNl0sXHJcbiAgWzE4NDQuODA1NSwgNTc4LjM0NDRdLFxyXG4gIFsxODUwLjAwODksIDU4MS40MDY0M10sXHJcbiAgWzE4NTIuNzYsIDU4Ni4xOTA4XSxcclxuICBbMTg1NS43NjEyLCA1ODMuNDMzOTZdLFxyXG4gIFsxODYwLjYxMTgsIDU4NS4wNDU4NF0sXHJcbiAgWzE4NTkuOTUxMywgNTgwLjU3Ml0sXHJcbiAgWzE4NjQuNTQ5NiwgNTc3LjYwOTVdLFxyXG4gIFsxODcwLjIwMiwgNTc2Ljk0NDJdLFxyXG4gIFsxODY4LjgxMDMsIDU4MS4wNjExNl0sXHJcbiAgWzE4NjUuNDIxOSwgNTgzLjgxMjZdLFxyXG4gIFsxODY5LjYzMDcsIDU4Ny4xNDgzXSxcclxuICBbMTg3Mi45OTU4LCA1ODQuMDA3OF0sXHJcbiAgWzE4NzYuMTU1NiwgNTg4Ljc0NDE0XSxcclxuICBbMTg4MC41MjY2LCA1ODYuNDMyN10sXHJcbiAgWzE4ODIuNDY3OSwgNTkxLjQzODddLFxyXG4gIFsxODc1LjgxODUsIDU5NC42Mzg5XSxcclxuICBbMTg3MS43MjEsIDU5MS43MzQyXSxcclxuICBbMTg2OC43MzM4LCA1OTcuNDE2MjZdLFxyXG4gIFsxODYyLjcxMDQsIDU5NC41NjkzXSxcclxuICBbMTg2Ni45NjM5LCA1OTEuOTc5NF0sXHJcbiAgWzE4NjMuODksIDU4OC42OTcxNF0sXHJcbiAgWzE4NTkuMjM3LCA1ODkuNjc4N10sXHJcbiAgWzE4NTUuNjMwMSwgNTkwLjIwODNdLFxyXG4gIFsxODUyLjE2LCA1OTEuMTE4OTZdLFxyXG4gIFsxODQ5LjI1MjcsIDU4Ny41NDAzNF0sXHJcbiAgWzE4NDYuMzI0NywgNTg1LjY2MDc3XSxcclxuICBbMTg0My40MjIxLCA1ODMuNDQ0Nl0sXHJcbiAgWzE4MzkuMzUwNiwgNTgxLjI5OTldLFxyXG4gIFsxODM3LjIwNTMsIDU4NS43MTkxXSxcclxuICBbMTg0MS40MzkyLCA1ODguMzgzMDZdLFxyXG4gIFsxODM3LjY2MTQsIDU5MC44NzU1XSxcclxuICBbMTgzMi42NjcyLCA1ODguNjk4N10sXHJcbiAgWzE4MjkuOTA4OSwgNTkzLjQzOThdLFxyXG4gIFsxODI1LjQ5MjQsIDU5NS44NTI3XSxcclxuICBbMTgzMC4wNDQyLCA1OTguOTg5MjZdLFxyXG4gIFsxODI2LjI4MDUsIDYwMS4zNTc3XSxcclxuICBbMTgyMS41MDIzLCA2MDAuMTkyN10sXHJcbiAgWzE4MTYuMTcwNywgNjAwLjc5NzldLFxyXG4gIFsxODExLjUxNzYsIDYwMS40OTg0XSxcclxuICBbMTgxMC4yODQ5LCA2MDQuODMyNzZdLFxyXG4gIFsxODA3LjY5MDksIDYwNi4zMzE1NF0sXHJcbiAgWzE4MDcuMTIzNSwgNjEwLjEzMTVdLFxyXG4gIFsxODA0LjAzOTYsIDYwNy44NTIzNl0sXHJcbiAgWzE4MDIuNjgyMSwgNjExLjE1NTVdLFxyXG4gIFsxNzk4LjU3NjMsIDYxMS42NDQ0XSxcclxuICBbMTc5OS43NDgsIDYwNy41MjMyNV0sXHJcbiAgWzE3OTQuNjgwNCwgNjA5LjQ3NzldLFxyXG4gIFsxNzk0LjQ5MjYsIDYxMy43OTQ5XSxcclxuICBbMTc5MC4zNDExLCA2MTMuODMwN10sXHJcbiAgWzE3OTAuMDIxNywgNjE5LjIyMTZdLFxyXG4gIFsxNzg2LjE1NywgNjE3LjM1NjU3XSxcclxuICBbMTc4My4yNjUxLCA2MjEuNjU3MzVdLFxyXG4gIFsxNzc4LjQ3MzYsIDYyMy44OTc2XSxcclxuICBbMTc4MS4wNjg0LCA2MjcuNzA3NDZdLFxyXG4gIFsxNzc5LjczMzMsIDYzMi43OTU2XSxcclxuICBbMTc4NC43NDYxLCA2MzEuNTkwN10sXHJcbiAgWzE3ODUuMzAyMiwgNjI2LjY3NTNdLFxyXG4gIFsxNzg4LjEzNCwgNjIzLjUzNDldLFxyXG4gIFsxNzkyLjM3NzgsIDYyNC41OTldLFxyXG4gIFsxNzk0LjkxNjMsIDYyOC44NDM3NV0sXHJcbiAgWzE3ODkuNTYzNywgNjI5LjkxODE1XSxcclxuICBbMTc5My4zMTEyLCA2MzMuMzczM10sXHJcbiAgWzE3OTAuMTk2LCA2MzYuNDkwMV0sXHJcbiAgWzE3ODUuODE0MSwgNjM2LjEwMDM0XSxcclxuICBbMTc4MS40MTcxLCA2MzYuOTk1MjRdLFxyXG4gIFsxNzc3Ljg3MTYsIDYzOS40ODldLFxyXG4gIFsxNzc1LjgzOCwgNjM2LjExNjFdLFxyXG4gIFsxNzczLjcwMTQsIDYzMi4zMzYyXSxcclxuICBbMTc3Ni43NDQ5LCA2MjkuMjM3M10sXHJcbiAgWzE3NzMuMzg4NCwgNjI2LjQ0NTA3XSxcclxuICBbMTc2OC40NTg3LCA2MjcuNTU4OTZdLFxyXG4gIFsxNzY5LjM2ODQsIDYzMS44NTU4XSxcclxuICBbMTc3MC44MzcyLCA2MzYuNTg5OTddLFxyXG4gIFsxNzYzLjIyMDIsIDYzOC43NjgwN10sXHJcbiAgWzE3NTguNzk4MywgNjM4LjYwODE1XSxcclxuICBbMTc1OS42NDQ5LCA2NDMuNTY1Nl0sXHJcbiAgWzE3NjUuOTgxMiwgNjM1LjUxNjFdLFxyXG4gIFsxNzY0LjA1OTQsIDYzMC42ODk0NV0sXHJcbiAgWzE3NTkuOTg0NCwgNjMzLjc3OTRdLFxyXG4gIFsxNzU0LjEzMywgNjM2Ljc4MjFdLFxyXG4gIFsxNzU0LjcyMzksIDY0MS43MDE4NF0sXHJcbiAgWzE3NDkuMTE2LCA2NDIuNDQ5MV0sXHJcbiAgWzE3NTIuNDIwNywgNjQ2LjAyNzFdLFxyXG4gIFsxNzU2LjE2MTQsIDY0Ny41MDExNl0sXHJcbiAgWzE3NTkuOTczNiwgNjUyLjM0NzUzXSxcclxuICBbMTc2OC44NDc5LCA2NTAuNDM1MV0sXHJcbiAgWzE3NjguNDk2MiwgNjQ2LjI0ODldLFxyXG4gIFsxNzc0LjIzMDUsIDY0OS44NjQ1Nl0sXHJcbiAgWzE3NzcuMTA2NCwgNjU0LjE2MThdLFxyXG4gIFsxNzgwLjQ1NzksIDY1Ny43MDE4XSxcclxuICBbMTc4NC42NDIxLCA2NTkuNDE1MzRdLFxyXG4gIFsxNzg4Ljc5MzYsIDY1NS44MDM5XSxcclxuICBbMTc4My45NywgNjUzLjYyMzU0XSxcclxuICBbMTc4MC43MzgsIDY1MC4yOTkzXSxcclxuICBbMTc4MS42NjQxLCA2NDYuMDk2XSxcclxuICBbMTc4Ni42NTU5LCA2NDYuOTI3M10sXHJcbiAgWzE3ODkuNDU3OSwgNjUwLjg3MDRdLFxyXG4gIFsxNzk0LjM2MDIsIDY1OC40OTI3NF0sXHJcbiAgWzE3OTkuOTYxNSwgNjU5LjY5MTddLFxyXG4gIFsxNzk0LjgzODksIDY1My4yODc2Nl0sXHJcbiAgWzE3OTQuNjMyNCwgNjYzLjk3NzddLFxyXG4gIFsxNzk1LjU5ODksIDY2OS42NTM3NV0sXHJcbiAgWzE4MDEuNDc3OSwgNjY3LjUyXSxcclxuICBbMTgwMy45NTgxLCA2NzMuMTMzMDZdLFxyXG4gIFsxODA4Ljk0LCA2NjguNjc4MTZdLFxyXG4gIFsxODE1LjE5MDYsIDY3MS44MjA4XSxcclxuICBbMTg1Ni43Nzk1LCA3MDMuMDczNl0sXHJcbiAgWzE4NjMuNDQzNiwgNzAyLjIxOTY3XSxcclxuICBbMTg2MS43ODA0LCA2OTQuOTk4OTZdLFxyXG4gIFsxODU1Ljc1NTksIDY5MC4xNjZdLFxyXG4gIFsxODYwLjM2MTEsIDY4Ni42ODQzXSxcclxuICBbMTg3MC4zMjg0LCA2ODQuMjA0M10sXHJcbiAgWzE4NzMuNTY1LCA2ODAuMDYyMV0sXHJcbiAgWzE4NzYuNTg4OSwgNjkxLjQyMDZdLFxyXG4gIFsxODcyLjA3OTgsIDY4OC42NDVdLFxyXG4gIFsxODY1LjcyMzEsIDY4OC44NTA2XSxcclxuICBbMTg2OC45NjQsIDY5My4yMzldLFxyXG4gIFsxODY4LjUyNDQsIDY5OS4wNTY4XSxcclxuICBbMTg3NC4zODk5LCA2OTcuODc5NjRdLFxyXG4gIFsxODc2LjU2OTIsIDY4NS4xNzIzNl0sXHJcbiAgWzE4NzkuMzEwOCwgNjgwLjQ5NDldLFxyXG4gIFsxODgxLjY1NzIsIDY4Ni44NDU5NV0sXHJcbiAgWzE4ODMuMjIzOSwgNjkxLjg3NV0sXHJcbiAgWzE4ODYuNzA4OSwgNjk3Ljg4NTEzXSxcclxuICBbMTg3OS45Mzc5LCA2OTUuNjc1M10sXHJcbiAgWzE4ODEuMDIyMiwgNzAxLjA5MTddLFxyXG4gIFsxODc2LjIyMjgsIDcwNC43MjgxNV0sXHJcbiAgWzE4NzAuMTQ3OCwgNzA1LjgxNDQ1XSxcclxuICBbMTg2Ny44NTQsIDcxMS4zMDQxXSxcclxuICBbMTg2OC4zNDY3LCA3MTYuODk2MV0sXHJcbiAgWzE4NjkuMzMyOCwgNzIzLjE4NzVdLFxyXG4gIFsxODY3LjE1NSwgNzI5LjQ2ODRdLFxyXG4gIFsxODcxLjI4MTcsIDczNC40OTIzXSxcclxuICBbMTg2OS43NjMyLCA3NDIuMjE1Ml0sXHJcbiAgWzE4NzYuMTkxLCA3MTEuNjE3Nl0sXHJcbiAgWzE4NzQuNDAwOSwgNzE4LjA3OTgzXSxcclxuICBbMTkwMS4yMzE0LCA3MDUuMjc3MDRdLFxyXG4gIFsxOTA5LjQxNTksIDcwOC4yMzgwNF0sXHJcbiAgWzE5MTcuMDY4NiwgNzExLjQ5Njc3XSxcclxuICBbMTkwNy4yMTgsIDczMC45NjA5NF0sXHJcbiAgWzE5NTIuNTYzNiwgNzM3Ljg5NDUzXSxcclxuICBbMTk1NS41MTM5LCA3MjguNjA4M10sXHJcbiAgWzE5NjMuNjUwMSwgNzI2Ljg3NV0sXHJcbiAgWzE5NjAuMDE3OCwgNzIxLjE0ODFdLFxyXG4gIFsxOTY3LjA0ODEsIDcxOS42MjIzXSxcclxuICBbMTk2Ny42ODczLCA3MTMuNjk3NDVdLFxyXG4gIFsxOTc1LjEwOTEsIDcxNi4wMjk0XSxcclxuICBbMTk3OS43NjAxLCA3MDYuMDc4Nl0sXHJcbiAgWzE5NzMuNzMwNiwgNzA5LjI2Mjk0XSxcclxuICBbMTk5MS43NjM0LCA2OTguOTM3Ml0sXHJcbiAgWzE5ODUuNzQyOSwgNzAyLjE0MjZdLFxyXG4gIFsxOTYzLjk5NzEsIDY2MS41MDU4Nl0sXHJcbiAgWzE5NTYuMzg0MywgNjYxLjk4NTA1XSxcclxuICBbMTk1Mi4zOTg5LCA2NTYuNzQxMTVdLFxyXG4gIFsxOTQ5LjQ0NSwgNjYzLjI2Nzk0XSxcclxuICBbMTk0Mi43MjczLCA2NjMuMjY4N10sXHJcbiAgWzE5NTMuOTg1NywgNjUxLjM0OF0sXHJcbiAgWzE5NDguMzc5NiwgNjUwLjI1Njk2XSxcclxuICBbMTk0Mi41NDQyLCA2NTEuNTA3NDVdLFxyXG4gIFsxOTQ1Ljg4NiwgNjU2LjgxNDZdLFxyXG4gIFsxOTM5Ljg2MSwgNjU3LjQ1NThdLFxyXG4gIFsxOTM0LjkyMjYsIDY1OC42ODgzXSxcclxuICBbMTkzNi4yMDcyLCA2NjQuOTk4OF0sXHJcbiAgWzE5MzAuMzk0NSwgNjY3LjQ2NzY1XSxcclxuICBbMTkzMC4wNTY0LCA2NjAuODY2M10sXHJcbiAgWzE5MjQuNTM0NSwgNjYwLjg4MTFdLFxyXG4gIFsxOTI1LjMzMjUsIDY1NS42MTc1XSxcclxuICBbMTkyNy4wMDY3LCA2NTAuNjQzOV0sXHJcbiAgWzE5MjMuNjc2LCA2NDcuMTM1MjVdLFxyXG4gIFsxOTI2Ljk1MDQsIDY0MS41OTkzXSxcclxuICBbMTkyNi4xNTU4LCA2MzUuMjEwMV0sXHJcbiAgWzE5MzIuMDgyMywgNjI5LjE4MzJdLFxyXG4gIFsxOTM0LjQ0ODYsIDYyMy41OTI0XSxcclxuICBbMTkzMi43NzgyLCA2MTEuMjE4MV0sXHJcbiAgWzE5MzEuNTMyMiwgNjE3LjA5NTM0XSxcclxuICBbMTkyNC40NjE3LCA2MTIuNTg4NF0sXHJcbiAgWzE5MjEuOTA2MiwgNjAyLjYxNjFdLFxyXG4gIFsxOTIyLjc3ODMsIDU5NC4yNTU1XSxcclxuICBbMTkyOS41MTkyLCA1OTguOTQ0MzRdLFxyXG4gIFsxOTI4LjM0MTgsIDYwNS44NzIxXSxcclxuICBbMTkzNi44OTg5LCA2MDQuNzIyNl0sXHJcbiAgWzE5NDEuMzc2MiwgNjEwLjc0MDJdLFxyXG4gIFsxOTQ5LjQ2MDcsIDYxMC4wNDc2XSxcclxuICBbMTk0Ny40MjgxLCA2MTYuMTczNF0sXHJcbiAgWzE5NDQuODE2MiwgNjIxLjY2NjVdLFxyXG4gIFsxOTM4Ljg5NDcsIDYxNy45MjU5XSxcclxuICBbMTk0MC41MTQ2LCA2MjUuNjAyOF0sXHJcbiAgWzE5MzcuOTA1MywgNjMwLjgwMjM3XSxcclxuICBbMTk0Mi45MzkyLCA2MzMuNzI5XSxcclxuICBbMTk0Ny43NDA3LCA2MzYuMTg4MV0sXHJcbiAgWzE5NTIuMzIxNCwgNjM5LjgxXSxcclxuICBbMTk1NC42MzE4LCA2MzUuMDY5N10sXHJcbiAgWzE5NTEuNjIxMywgNjMwLjQzOTFdLFxyXG4gIFsxOTQ2LjA3MywgNjI4LjUzNDZdLFxyXG4gIFsxOTUwLjk2NDEsIDYyMy40OTY4XSxcclxuICBbMTk1NS4yNjUxLCA2MTguNTEzMV0sXHJcbiAgWzE5NTkuMDA1NCwgNjEzLjc5NTM1XSxcclxuICBbMTk2Ni4yNzM3LCA2MTkuMDE4NDNdLFxyXG4gIFsxOTYyLjI3MDUsIDYyMy44MzI0XSxcclxuICBbMTk1Ni44NjcyLCA2MjYuMDAxMl0sXHJcbiAgWzE5NTkuNDQ4MiwgNjMxLjk5N10sXHJcbiAgWzE5NjkuOTUxMiwgNjI2LjkyMl0sXHJcbiAgWzE5NjUuNDY2MiwgNjMxLjA5MDhdLFxyXG4gIFsxOTY3LjczNDcsIDY0Mi40NjNdLFxyXG4gIFsxOTYzLjYzODcsIDYzNy40NTE0XSxcclxuICBbMTk1OC4yMDkyLCA2NDAuMDU2OV0sXHJcbiAgWzE5NTIuMzUwNSwgNjQ1LjI4OTU1XSxcclxuICBbMTk1Ny4zNTU1LCA2NDYuMTY5NDNdLFxyXG4gIFsxOTYyLjQ3NzUsIDY0NC45Mjk3XSxcclxuICBbMTk2NS44NDU2LCA2NTAuMDcxNl0sXHJcbiAgWzE5NjkuMzE5MywgNjU0Ljg2NzNdLFxyXG4gIFsxOTY5LjI4NzEsIDY2My41NTc2XSxcclxuICBbMTk2MS4zNjksIDY1Ni4yNDQ3NV0sXHJcbiAgWzE5NTkuNTI0MiwgNjUxLjQ5MjU1XSxcclxuICBbMTk0Ny42NDA1LCA2NDIuNDcyOTZdLFxyXG4gIFsxOTQzLjcxNTEsIDY0NS42OTA3M10sXHJcbiAgWzE5NDEuNjczNiwgNjQwLjE0MjhdLFxyXG4gIFsxOTM3LjM5NjEsIDYzNi43MzE5XSxcclxuICBbMTkzMS43OTE1LCA2MzUuMjY5MzVdLFxyXG4gIFsxOTMzLjQ4NjgsIDY0MS4xNDU1XSxcclxuICBbMTkzNy43MTQ3LCA2NDUuNTI5NjZdLFxyXG4gIFsxOTMxLjQ3MzQsIDY1My45MzkxXSxcclxuICBbMTkzNi42ODksIDY1MS41OTU2XSxcclxuICBbMTkzMS4yODAyLCA2NDYuOTI1OV0sXHJcbiAgWzE5MjAuNDY3NSwgNjQyLjM0MTldLFxyXG4gIFsxOTE3LjIxNDgsIDY0Ny42NTA3Nl0sXHJcbiAgWzE5MTIuMzQ1LCA2NDguMjY3OF0sXHJcbiAgWzE5MTkuOTA1OCwgNjUyLjM0MDZdLFxyXG4gIFsxOTE5LjIxMDcsIDY1Ny41OTMzXSxcclxuICBbMTkxMy40OTgzLCA2NTQuNjIxXSxcclxuICBbMTkwNy4wNzg1LCA2NTYuNDU5NV0sXHJcbiAgWzE5MTAuNjAxOCwgNjYwLjUyMDRdLFxyXG4gIFsxOTE1LjAyNTksIDY2MS40Nzg3XSxcclxuICBbMTkxOS4zMTQxLCA2NjMuOTM1MDZdLFxyXG4gIFsxOTI0LjM2NjEsIDY2Ni4zNjNdLFxyXG4gIFsxOTE3LjQ2ODksIDY2OS44MDAwNV0sXHJcbiAgWzE5MTIuMDA1NiwgNjY3LjIxNDZdLFxyXG4gIFsxOTA2LjU1NjQsIDY2OC43OTMyXSxcclxuICBbMTg5Ny43MTAxLCA2ODMuMTY1N10sXHJcbiAgWzE4OTkuMjA2NSwgNjkwLjA4OTg0XSxcclxuICBbMTkwMy4zMjEsIDY4Ni4wODk1XSxcclxuICBbMTg4OC4wOCwgNjkxLjE0OTg0XSxcclxuICBbMTg5Mi43OTMsIDY5MS4wNTI2XSxcclxuICBbMTg5My4yODU2LCA2ODYuMzhdLFxyXG4gIFsxODkxLjc4OTcsIDY4MS4zOTcwM10sXHJcbiAgWzE4ODcuMzY4NCwgNjg1LjY4NzldLFxyXG4gIFsxODg0LjA0MjIsIDY4MS41Njg2Nl0sXHJcbiAgWzE4ODcuODQwOCwgNjc4LjMzODRdLFxyXG4gIFsxODk2LjAzNDgsIDY2Ny44Mzc2NV0sXHJcbiAgWzE4OTAuNjE3OSwgNjY2LjgwMzddLFxyXG4gIFsxODg4LjgxLCA2NzIuNjIwMDZdLFxyXG4gIFsxODgyLjkyNjksIDY3NS40NzEwN10sXHJcbiAgWzE4NzguMzI2OSwgNjY5LjEwOTZdLFxyXG4gIFsxODgzLjM3MjYsIDY2NC4yMTk0XSxcclxuICBbMTg4OC44Mjg0LCA2NjEuNzE2NTVdLFxyXG4gIFsxOTAwLjkzNDIsIDY2NS43OTQwN10sXHJcbiAgWzE5MDYuMDUyNywgNjYyLjg3NDE1XSxcclxuICBbMTkwMC42NzI2LCA2NjAuMzAxMV0sXHJcbiAgWzE5MDEuMjcwMSwgNjU1Ljg0MDldLFxyXG4gIFsxODk0Ljg3ODksIDY2MS40MDQ5N10sXHJcbiAgWzE4ODAuMTY4NSwgNjE2LjU3NTQ0XSxcclxuICBbMTg3My41NTA5LCA2MTUuNjRdLFxyXG4gIFsxODYzLjkyOTgsIDYyNC44NDQ2XSxcclxuICBbMTg2OS41MDM0LCA2MjAuNTkwNDVdLFxyXG4gIFsxODY0LjI0OTUsIDYxOS43NTcxXSxcclxuICBbMTg2MS4xMTIsIDYxNS43ODY2XSxcclxuICBbMTg2OC4xMjYyLCA2MTUuMzk3OTVdLFxyXG4gIFsxODY0LjYxNjcsIDYxMS42MDEzXSxcclxuICBbMTg2OS44OTkzLCA2MDkuMTY1MzRdLFxyXG4gIFsxODc2LjQ4OTUsIDYxMC43ODQ0XSxcclxuICBbMTg4My4xMzY1LCA2MTAuNTg5MDVdLFxyXG4gIFsxODg5LjE2NTgsIDYwMS42MDNdLFxyXG4gIFsxODg0LjIxOTIsIDYwNC4yODQ2N10sXHJcbiAgWzE4ODguODY0OSwgNTg4LjMwOTYzXSxcclxuICBbMTg4NC45OTA3LCA1ODUuNTY3MV0sXHJcbiAgWzE4ODguMDI4MiwgNTgxLjM5ODhdLFxyXG4gIFsxODgyLjkzODgsIDU4MS4xMDk4Nl0sXHJcbiAgWzE4NzcuODEzNSwgNTgzLjAwOF0sXHJcbiAgWzE4NzQuNDA1LCA1NzkuNDE5MDddLFxyXG4gIFsxODc4Ljg2MjcsIDU3OC4wODQwNV0sXHJcbiAgWzE4NzguNzA3NiwgNTczLjI1ODJdLFxyXG4gIFsxODgwLjI5NTMsIDU2OS4wNTMzNF0sXHJcbiAgWzE4ODUuMTQwNywgNTcwLjkyMzM0XSxcclxuICBbMTg4OC4zODk5LCA1NzUuNjU5NjddLFxyXG4gIFsxODgzLjQ1NzgsIDU3Ni4xMjc4XSxcclxuICBbMTg5Mi42NTczLCA1NzkuMjAwM10sXHJcbiAgWzE4OTQuNDA0OCwgNTc0LjQ3XSxcclxuICBbMTg5MC44MTM3LCA1NjkuODU3MzZdLFxyXG4gIFsxODk2Ljk2MTMsIDU2OS4yNjAxXSxcclxuICBbMTg5Ny45Njk4LCA1NjMuMTQ2OV0sXHJcbiAgWzE5MDIuNTU0MiwgNTcxLjEyNV0sXHJcbiAgWzE4OTkuNTE4OSwgNTc2LjQ4OTI2XSxcclxuICBbMTg5OC4zNjAxLCA1ODEuOTczMTRdLFxyXG4gIFsxODkzLjE2MjEsIDU4NC44NzE3XSxcclxuICBbMTkwMC43MTc1LCA1OTcuMzldLFxyXG4gIFsxOTE2LjA4NTksIDU5Ni44ODgyXSxcclxuICBbMTg5NS45NDYsIDYwMy43OTI3XSxcclxuICBbMTg4OS4xOTU2LCA2MDcuODczMTddLFxyXG4gIFsxODc4Ljc3MjgsIDYwNS40MTVdLFxyXG4gIFsxODc1LjUxOTksIDU5OS44NDM0XSxcclxuICBbMTg3Mi40MzgxLCA2MDQuMDg0XSxcclxuICBbMTg2Ni45NDE1LCA2MDIuMzgwODZdLFxyXG4gIFsxODYzLjMyMzQsIDYwNS44Mzk4NF0sXHJcbiAgWzE4NTkuMjI2NiwgNjA5Ljk5MTFdLFxyXG4gIFsxODU3LjQyMzIsIDYwNS4xODJdLFxyXG4gIFsxODU1LjE0MjYsIDYwMS4wODQ4NF0sXHJcbiAgWzE4NjEuMTk0MSwgNjAwLjE3ODgzXSxcclxuICBbMTg1OC4wNDI1LCA1OTUuNTM3MzVdLFxyXG4gIFsxODU0LjE3MTksIDU5NS42Mzg0XSxcclxuICBbMTg1MC45ODksIDU5OC41MDk5XSxcclxuICBbMTg0OS4zNzg0LCA2MDEuNzM5XSxcclxuICBbMTg0NS40ODc1LCA2MDMuNTUxNjRdLFxyXG4gIFsxODQyLjAxMTUsIDU5OC40NjE4XSxcclxuICBbMTg0Ni4wNDgxLCA1OTguODgyM10sXHJcbiAgWzE4NDYuNDc5LCA1OTUuMTM3Nl0sXHJcbiAgWzE4NTAuMjM2OCwgNTk0LjY0NjddLFxyXG4gIFsxODQ4LjE5MzgsIDU5MS4zMjY2Nl0sXHJcbiAgWzE4NDQuODI3NCwgNTkwLjM4MDVdLFxyXG4gIFsxODQyLjQ4NDksIDU5My43MzQ0NF0sXHJcbiAgWzE4MzguNzY5MiwgNTk1LjQ1NjldLFxyXG4gIFsxODM0LjQ5NDksIDU5NC4yNDc5XSxcclxuICBbMTgzNC4zMzYyLCA1OTguNDU4Ml0sXHJcbiAgWzE4MzcuNzcxNiwgNjAwLjUwNjg0XSxcclxuICBbMTg0MS4yOSwgNjAyLjg3NTZdLFxyXG4gIFsxODQyLjkwMzMsIDYwNy41NDddLFxyXG4gIFsxODQ3LjY5MTgsIDYwOS4yNTA3M10sXHJcbiAgWzE4NTAuODE3MywgNjA1LjM2NzI1XSxcclxuICBbMTg1My4yNTc0LCA2MDkuMjEyM10sXHJcbiAgWzE4NTUuNjczNiwgNjEzLjY0ODZdLFxyXG4gIFsxODUwLjM5NDcsIDYxNC42NjAzNF0sXHJcbiAgWzE4NDUuNTY0NSwgNjE3LjcyMzldLFxyXG4gIFsxODQ1LjM0MTgsIDYxMy4yOTU0XSxcclxuICBbMTg0MS4xODY1LCA2MTIuNDI4Nl0sXHJcbiAgWzE4MzYuNDQ0OCwgNjE0LjQ0NzldLFxyXG4gIFsxODM3LjE5NDcsIDYwOS45NTY4NV0sXHJcbiAgWzE4MzMuMjM0LCA2MDcuODAxNzZdLFxyXG4gIFsxODM3Ljg1NiwgNjA1LjU0Mzk1XSxcclxuICBbMTgzMy4yOTc3LCA2MDMuMDU2XSxcclxuICBbMTgyNC4zNTU2LCA2MDUuOTY0N10sXHJcbiAgWzE4MjAuMzUxMSwgNjA1LjI5OTFdLFxyXG4gIFsxODE3LjEzNywgNjA0LjU0MzQ2XSxcclxuICBbMTgxMy43NjIyLCA2MDUuMDU5OF0sXHJcbiAgWzE4MTEuNjE2MiwgNjA4LjM2NjddLFxyXG4gIFsxODEwLjgzMzcsIDYxMS40NDAwNl0sXHJcbiAgWzE4MTEuMzk1OSwgNjE0LjkzNV0sXHJcbiAgWzE4MTQuNDgxOCwgNjEyLjAxMzddLFxyXG4gIFsxODE2LjI3NjYsIDYwOC42NzQyXSxcclxuICBbMTgyMC41NTQxLCA2MTAuMDY2Ml0sXHJcbiAgWzE4MjkuMDkyNSwgNjA1Ljg3MzY2XSxcclxuICBbMTgyNi4xODE0LCA2MTAuNzUxN10sXHJcbiAgWzE4MzEuMTgwOSwgNjEyLjI2MTg0XSxcclxuICBbMTgyNy43Nzc1LCA2MTYuNTQwM10sXHJcbiAgWzE4MzUuNzk0MiwgNjIzLjkyN10sXHJcbiAgWzE4MzAuOTIyNiwgNjI3LjMzNl0sXHJcbiAgWzE4MjkuODE0LCA2MjEuOTU0ODNdLFxyXG4gIFsxODMzLjM5MTIsIDYxOC4xMjg1XSxcclxuICBbMTgzOS45MzUsIDYxOC43NDU4XSxcclxuICBbMTg0NS41NTczLCA2MjIuMjU1Nl0sXHJcbiAgWzE4NTAuMzI0NywgNjIwLjc0Nzc0XSxcclxuICBbMTg1NC41NDU3LCA2MTguMzY5NF0sXHJcbiAgWzE4NTguNzg0MiwgNjE5Ljg5MDddLFxyXG4gIFsxODU5LjUyNywgNjIzLjYzMjFdLFxyXG4gIFsxODU0LjcxODgsIDYyMy43Nzg3XSxcclxuICBbMTg1MC42ODczLCA2MjYuMTE3Ml0sXHJcbiAgWzE4NDUuOTY2MSwgNjI3LjIzNTg0XSxcclxuICBbMTg0MS4yMTQ4LCA2MjQuNDMzXSxcclxuICBbMTgzOS4zMjkzLCA2MjkuMTQxXSxcclxuICBbMTgzNC41MjYxLCA2MzEuMTI5NjRdLFxyXG4gIFsxODM2Ljg1MzEsIDYzNy4zNjU0XSxcclxuICBbMTgzMS45NDI2LCA2NDEuMDkxMl0sXHJcbiAgWzE4MzYuNzY5OCwgNjQyLjk3M10sXHJcbiAgWzE4NDAuNzczMSwgNjM0Ljg1MTI2XSxcclxuICBbMTg0NC43MDUsIDYzMi4xMDY1N10sXHJcbiAgWzE4NDkuNjkxOCwgNjMxLjg5MjE1XSxcclxuICBbMTg1My45Mjg3LCA2MzAuMDUyNzNdLFxyXG4gIFsxODU4LjMxNTcsIDYyNy45MzU2N10sXHJcbiAgWzE4NTguMzg3NywgNjMzLjE3ODRdLFxyXG4gIFsxODU0LjA5NTgsIDYzNi4xOTQ3Nl0sXHJcbiAgWzE4NDkuMDcwMywgNjM3LjE2ODJdLFxyXG4gIFsxODQ1LjE0MywgNjM4LjU1NDJdLFxyXG4gIFsxODQxLjg2NzcsIDY0MS41MzI3XSxcclxuICBbMTg0MC44MjAxLCA2NDcuMDE5NF0sXHJcbiAgWzE4MzUuODIwOCwgNjQ4LjQxOTg2XSxcclxuICBbMTgzMC45ODYzLCA2NDcuNTQ3N10sXHJcbiAgWzE4MjYuNDA0NywgNjQzLjU4NzRdLFxyXG4gIFsxODI1LjMxNDIsIDYzNy43Mzk1XSxcclxuICBbMTgzMC44Nzc5LCA2MzUuNDY3NF0sXHJcbiAgWzE4MjcuMjIwNSwgNjMxLjk1NjFdLFxyXG4gIFsxODI1LjMwNDMsIDYyNy4wOTUxXSxcclxuICBbMTgyNC43MjkyLCA2MjIuMzA4NTNdLFxyXG4gIFsxODIyLjk4NDYsIDYxOC4zMDYzNF0sXHJcbiAgWzE4MjIuNTg2MiwgNjE0LjA0MDA0XSxcclxuICBbMTgxNy42MDc3LCA2MTMuODQ4MTRdLFxyXG4gIFsxODE4LjQ2ODksIDYxNy42NjQyXSxcclxuICBbMTgxOS42MzUzLCA2MjIuMDc1Ml0sXHJcbiAgWzE4MjAuMjIwMiwgNjI2Ljk1NF0sXHJcbiAgWzE4MjEuNDcwOCwgNjMyLjA1NjE1XSxcclxuICBbMTgxOC41NTgzLCA2MzYuNzY0ODNdLFxyXG4gIFsxODIwLjg1NzIsIDY0MS4xNTI1XSxcclxuICBbMTgyMS45MDk3LCA2NDYuNDA0M10sXHJcbiAgWzE4MTcuODk3MSwgNjUwLjQ2NDhdLFxyXG4gIFsxODE1LjgyMTgsIDY0NC40NjQ2Nl0sXHJcbiAgWzE4MDkuOTAzMSwgNjQyLjY0NDldLFxyXG4gIFsxODA0LjEyNTUsIDY0NC4zMTg1XSxcclxuICBbMTgwNS4yOTA4LCA2NDkuODQyOF0sXHJcbiAgWzE3OTcuODIwMywgNjQzLjQ0NjJdLFxyXG4gIFsxNzk5LjA2ODYsIDY0OC42NTZdLFxyXG4gIFsxODAxLjA2NjMsIDY1NC4zNTc0XSxcclxuICBbMTgwNi40MDcyLCA2NTUuOTAyNV0sXHJcbiAgWzE4MTEuMTMwNiwgNjUyLjA3OTRdLFxyXG4gIFsxODEwLjYzMTcsIDY0Ny4yNDUzXSxcclxuICBbMTgxMy43NCwgNjM5LjIxNjg2XSxcclxuICBbMTgxMS41Mjg2LCA2MzQuODIyNV0sXHJcbiAgWzE4MDEuMzM1NywgNjM4LjkxNzFdLFxyXG4gIFsxODAyLjQzMzMsIDYzMy44Nzc5XSxcclxuICBbMTgwNi45NjYyLCA2MzguNzk3N10sXHJcbiAgWzE4MDYuNzIxMiwgNjM0LjAxOTUzXSxcclxuICBbMTgwOS40MzEyLCA2MzAuNDI1Nl0sXHJcbiAgWzE4MTUuOTk0LCA2MzMuMjg2Nl0sXHJcbiAgWzE4MTUuNDA3OCwgNjI5LjQ2OTZdLFxyXG4gIFsxODE1LjczODMsIDYyNS4wMjExXSxcclxuICBbMTgxNS4wNjEyLCA2MjAuOTAyNDddLFxyXG4gIFsxODE0LjA3NSwgNjE3LjAyNDldLFxyXG4gIFsxODExLjE1OTIsIDYyMy41MzI1XSxcclxuICBbMTgxMS41Nzg5LCA2MjcuMjM5MjZdLFxyXG4gIFsxODEwLjg4NiwgNjE5LjY3OTNdLFxyXG4gIFsxODA3Ljc2NjIsIDYxNy4zMzE4XSxcclxuICBbMTgwNy43OTgzLCA2MTMuNjU0Ml0sXHJcbiAgWzE4MDQuNDMwNSwgNjE0LjUxMzhdLFxyXG4gIFsxODAwLjcxMTMsIDYxNS40MDAyN10sXHJcbiAgWzE3OTcuMTA2NiwgNjE2LjYxNzhdLFxyXG4gIFsxNzk0LjE2NywgNjE5LjU0MjVdLFxyXG4gIFsxNzk3LjAyNTgsIDYyNC4xMDU2XSxcclxuICBbMTc5OS41MTc4LCA2MjAuMzM3MTZdLFxyXG4gIFsxODAzLjcxNzgsIDYxOC41MzY1Nl0sXHJcbiAgWzE4MDcuMjExNywgNjIxLjQ1NzE1XSxcclxuICBbMTgwNi45NjQ3LCA2MjUuODE4NTRdLFxyXG4gIFsxODA0LjQ4ODYsIDYyOS4zODY2Nl0sXHJcbiAgWzE4MDMuNDgxOSwgNjIyLjY1OF0sXHJcbiAgWzE4MDEuMzc5NCwgNjI1LjcxMzI2XSxcclxuICBbMTc5OS40NjI2LCA2MjkuNTg3MzRdLFxyXG4gIFsxNzk3LjkyODIsIDYzNC4yNThdLFxyXG4gIFsxNzk1LjQ3NjEsIDYzOC42MTcyXSxcclxuICBbMTc5MS44NTM4LCA2NDIuMzA0NzVdLFxyXG4gIFsxNzkzLjIwOTQsIDY0Ny4xMDAxNl0sXHJcbiAgWzE3ODcuNDA2LCA2NDEuMzYyNl0sXHJcbiAgWzE3ODMuMDYxNCwgNjQxLjU3ODU1XSxcclxuICBbMTc3OC40OTMyLCA2NDIuOTRdLFxyXG4gIFsxNzc2LjI4NDIsIDY0Ni4wNzE5XSxcclxuICBbMTc3Mi4wMDE2LCA2NDQuOTE3NV0sXHJcbiAgWzE3NzMuNTMwMywgNjQwLjcyMTldLFxyXG4gIFsxNzY4LjU1NTIsIDY0MC42OTA1NV0sXHJcbiAgWzE3NjQuNzg3NCwgNjQyLjkxMjg0XSxcclxuICBbMTc2NC4yMDc2LCA2NDcuMDg2Ml0sXHJcbiAgWzE3NjAuMzY1LCA2NDguMzM4MTNdLFxyXG4gIFsxNzY0LjM0OTksIDY1MS42MzQxNl0sXHJcbiAgWzE3NjYuMjQ2OCwgNjU1LjYwNDFdLFxyXG4gIFsxNzY4LjQzNTgsIDY1OS40Nzg1XSxcclxuICBbMTc2OC43MDE1LCA2NjQuMDI3MTZdLFxyXG4gIFsxNzY3LjIzMDUsIDY2Ny42NDQ5Nl0sXHJcbiAgWzE3NjQuNDY5NywgNjY0LjcyOThdLFxyXG4gIFsxNzYxLjE3MDQsIDY2Mi44NTExNF0sXHJcbiAgWzE3NTcuMDc4MSwgNjYyLjU2ODZdLFxyXG4gIFsxNzU1LjMxNTgsIDY2Ni4wNDA2NV0sXHJcbiAgWzE3NTEuMTMyOCwgNjY2LjYwODNdLFxyXG4gIFsxNzQ5LjcyMTYsIDY3MC43ODddLFxyXG4gIFsxNzM2LjQyMjEsIDY2OS4yMzU4NF0sXHJcbiAgWzE3NDIuMjIzNiwgNjY1LjEwODhdLFxyXG4gIFsxNzQ2LjQ1NjMsIDY2My4zODI3XSxcclxuICBbMTc0Mi43MTczLCA2NTguNTMyNF0sXHJcbiAgWzE3MzguMDAyNiwgNjU4LjExMTNdLFxyXG4gIFsxNzQwLjE0NSwgNjUyLjEzMzFdLFxyXG4gIFsxNzQ1Ljc1MywgNjUzLjI0OTYzXSxcclxuICBbMTc1MS4xMDg0LCA2NTUuOTk4MzVdLFxyXG4gIFsxNzUxLjU3NDIsIDY2MS41NDAzXSxcclxuICBbMTc0Ny40OTc2LCA2NTguNTIwOV0sXHJcbiAgWzE3MzguMDEyMywgNjYzLjgxMzNdLFxyXG4gIFsxNzMzLjEwMTksIDY2Mi43NDE0XSxcclxuICBbMTczMS4xNzE5LCA2NjguMDczODVdLFxyXG4gIFsxNzI2LjkzODEsIDY3MC44MzI0XSxcclxuICBbMTczMS41ODYyLCA2NzQuMDQ3XSxcclxuICBbMTcyOS4zOTA2LCA2NzkuNTUzMzRdLFxyXG4gIFsxNzI0LjYxOTQsIDY3Ni4xNDI3XSxcclxuICBbMTcxOC45MjU4LCA2NzguODA5Nl0sXHJcbiAgWzE3MjMuNDQwMiwgNjgyLjk2NzhdLFxyXG4gIFsxNzE0LjE4ODUsIDY5Mi43NTAyXSxcclxuICBbMTcxMC4yODU2LCA3MDYuMzI0MTZdLFxyXG4gIFsxNzA5LjM0MjQsIDcxNC40NDI4XSxcclxuICBbMTc0Ni4yMDkxLCA3MDQuNzg5OV0sXHJcbiAgWzE3NDUuNDUwNywgNjk2LjM4NTddLFxyXG4gIFsxNzQ2LjYzNzMsIDY4OS45Mjg3XSxcclxuICBbMTc0Ny43NzgxLCA2ODQuNTAxODNdLFxyXG4gIFsxNzQ4LjY0NTksIDY3NS40MDYxXSxcclxuICBbMTc1MS4yNDg4LCA2NzkuOTM5XSxcclxuICBbMTc2MC41MjU0LCA2NzkuMTEyOV0sXHJcbiAgWzE3NTYuNjYxMSwgNjc5Ljk2MjQ2XSxcclxuICBbMTc1NC41OTA4LCA2ODQuMjUwNl0sXHJcbiAgWzE3NTEuODEyOSwgNjk0LjUwNjddLFxyXG4gIFsxNzUzLjU3NjcsIDY4OS4xMjY4M10sXHJcbiAgWzE3NjAuNjUwNSwgNjg1LjMyMTRdLFxyXG4gIFsxNzY1LjAwNTQsIDY4MC42MjM1NF0sXHJcbiAgWzE3NjkuNDY4NCwgNjg1LjgxMzFdLFxyXG4gIFsxNzcwLjc5MDgsIDY4MC4zNTIyM10sXHJcbiAgWzE3NjcuODQ2OSwgNjc1LjIyMTA3XSxcclxuICBbMTc2My40MzMyLCA2NzUuMzMxNF0sXHJcbiAgWzE3NTkuMDM0OSwgNjc0LjMwOTFdLFxyXG4gIFsxNzU0LjM2ODcsIDY3NS40MDI0XSxcclxuICBbMTc1NS40MzQ2LCA2NzAuNTk5Nl0sXHJcbiAgWzE3NTkuNTQyMiwgNjY2LjcwMDg3XSxcclxuICBbMTc2MS41NDM3LCA2NzAuMDg1N10sXHJcbiAgWzE3NjUuMzU3MiwgNjcxLjI1MjldLFxyXG4gIFsxNzcwLjA0MjcsIDY3MC45Mjg2XSxcclxuICBbMTc3Mi43OTk5LCA2NjcuODAyODZdLFxyXG4gIFsxNzc3LjU2MzgsIDY2Ny4yNzc3XSxcclxuICBbMTc4My4xMTQ1LCA2NjkuNzE4OTNdLFxyXG4gIFsxNzg1LjUxNDYsIDY3NC40NjczXSxcclxuICBbMTc4MC4zMDc2LCA2NzcuNTEwODZdLFxyXG4gIFsxNzc2LjExNDcsIDY4MC43NjE5Nl0sXHJcbiAgWzE3NzUuOTUwMiwgNjg2LjQxNTQ3XSxcclxuICBbMTc3OC40NzU1LCA2OTIuMzg3Ml0sXHJcbiAgWzE3ODIuMDk2NCwgNjg4LjU3ODU1XSxcclxuICBbMTc4MS41NjQ1LCA2ODMuODY2OTRdLFxyXG4gIFsxNzg0Ljc1NTYsIDY4MC4zNzkyXSxcclxuICBbMTc4OS42OTcsIDY3OC45NzE5XSxcclxuICBbMTc5MS41MTksIDY3My45Mjc1NV0sXHJcbiAgWzE3ODkuNDIzOCwgNjY4LjgwMzFdLFxyXG4gIFsxNzg5LjYzODQsIDY2MS4yNjU2XSxcclxuICBbMTc4NS43NzI3LCA2NjQuODcxN10sXHJcbiAgWzE3ODAuNTg3MywgNjYzLjE1NTFdLFxyXG4gIFsxNzc1LjY3NTUsIDY2My41NjA5XSxcclxuICBbMTc3Mi4wMzA2LCA2NjIuNTU2MzRdLFxyXG4gIFsxNzc2LjU2NDEsIDY1OS40ODg0Nl0sXHJcbiAgWzE3NzIuNzE0NywgNjU3Ljk2MDNdLFxyXG4gIFsxNzcxLjI2ODMsIDY1NC4xMTM5NV0sXHJcbiAgWzE3NjQuMTAxMywgNjU5Ljg1OTRdLFxyXG4gIFsxNzU5LjI1NTYsIDY1OS4wNDkzXSxcclxuICBbMTc2MS4zNTMzLCA2NTUuODk1OV0sXHJcbiAgWzE3NTQuODA4OCwgNjU5LjAxMzU1XSxcclxuICBbMTc1Ni4yODIxLCA2NTUuNDkxOTRdLFxyXG4gIFsxNzU1LjY1MSwgNjUxLjc2Njk3XSxcclxuICBbMTc1MS4yMzQ0LCA2NTEuNDk5MTVdLFxyXG4gIFsxNzQ3Ljk5MjgsIDY0OC4xNzI2XSxcclxuICBbMTc0My41MzQ5LCA2NDYuODM3NV0sXHJcbiAgWzE3MTguMjUwNSwgNjIzLjk3MjUzXSxcclxuICBbMTcxMi45NDU2LCA2MTQuMDMxMDddLFxyXG4gIFsxNzE4LjM3MDQsIDYxNi45MDg0NV0sXHJcbiAgWzE3MjQuMTYsIDYyMC4zMDA5XSxcclxuICBbMTcyNC4yODEsIDYxMy4zOTFdLFxyXG4gIFsxNzI3LjY0NTYsIDYwNi44NTU4M10sXHJcbiAgWzE3MzEuMzExMywgNjEwLjU5Nzk2XSxcclxuICBbMTczNi4yODEyLCA2MTMuOTY2Ml0sXHJcbiAgWzE3MzkuNzQxMiwgNjA4LjAyODI2XSxcclxuICBbMTc1MC4xNzUzLCA2MDMuMzA3NF0sXHJcbiAgWzE3NTYuMjMwMiwgNjAzLjQwMDc2XSxcclxuICBbMTc0Ni4yMjE3LCA2MDguMzg0NzddLFxyXG4gIFsxNzQzLjY4NywgNjAyLjc3NzZdLFxyXG4gIFsxNzM1LjI0MDEsIDYwNS4wODAzXSxcclxuICBbMTcyOS40NTAxLCA1OTMuMDMzOV0sXHJcbiAgWzE3MjYuMzgwNCwgNTg3Ljk5MjU1XSxcclxuICBbMTcyMi44NywgNTkyLjIyXSxcclxuICBbMTcyNS4xMjcsIDU5Ni42ODU3XSxcclxuICBbMTcxOS43MjYzLCA2MDAuODYyMDZdLFxyXG4gIFsxNzE4LjU5MTcsIDU5NS4zMzIzXSxcclxuICBbMTcxNy4yOTQ4LCA1ODkuMDc2NV0sXHJcbiAgWzE3MjIuMDk2LCA1ODcuNTIyNzddLFxyXG4gIFsxNzIwLjc5NDEsIDU4My43NTUwN10sXHJcbiAgWzE3MTkuMjczNiwgNTc5LjUyOTZdLFxyXG4gIFsxNzI3Ljc1MDEsIDU4Mi41MzIxXSxcclxuICBbMTcyNC43MjU2LCA1NzguNjY2MTRdLFxyXG4gIFsxNzMwLjY1NCwgNTc2LjYxNjFdLFxyXG4gIFsxNzM0LjgwMSwgNTcxLjk0ODg1XSxcclxuICBbMTczOS4xMzc3LCA1NjcuNTA1NzRdLFxyXG4gIFsxNzM0LjE0ODYsIDU2NC4xODY0Nl0sXHJcbiAgWzE3MjguNDg1NywgNTYxLjA1MjJdLFxyXG4gIFsxNzMwLjYwMjgsIDU1My43MzkxNF0sXHJcbiAgWzE3MzUuMTgyMywgNTU2LjYzODU1XSxcclxuICBbMTczOS4xNjExLCA1NjAuMDI4NTZdLFxyXG4gIFsxNzQzLjA4MTQsIDU2Mi40NjMyXSxcclxuICBbMTc0Ni4yOTgsIDU2Ni43MDU3XSxcclxuICBbMTc0OC45NzA2LCA1NjEuNzM1ODRdLFxyXG4gIFsxNzQ2LjAxMjcsIDU1Ny40NzMzXSxcclxuICBbMTc0Mi42MjAxLCA1NTQuMjQ5NjNdLFxyXG4gIFsxNzQ2LjU5NTUsIDU0OC41NDQ0XSxcclxuICBbMTc0OS42MTExLCA1NTIuNzc2NV0sXHJcbiAgWzE3NTYuNTQ1NywgNTUzLjUyMjZdLFxyXG4gIFsxNzUyLjUzNiwgNTU3LjA5MThdLFxyXG4gIFsxNzY1LjA4MTMsIDU2MS42NTg1N10sXHJcbiAgWzE3NTkuNzI2MywgNTY0LjkzMV0sXHJcbiAgWzE3NjcuNTkxNiwgNTY3LjIyMjA1XSxcclxuICBbMTc2Ny44MjU3LCA1NzYuMTg2N10sXHJcbiAgWzE3NjEuNjcxNiwgNTgzLjUwOTVdLFxyXG4gIFsxNzYzLjI5OTMsIDU4OS4xMTU4XSxcclxuICBbMTc1Ni42NTk1LCA1ODguMTM1ODZdLFxyXG4gIFsxNzU4LjgzNjMsIDU5NC42NjMxXSxcclxuICBbMTc1My43NjI4LCA1OTcuMDAyNzVdLFxyXG4gIFsxNzQ4LjI4OTEsIDU4NS4yOTk3XSxcclxuICBbMTc1MC41NTk2LCA1ODAuMzI1NF0sXHJcbiAgWzE3NDMuNTQwMiwgNTcxLjY5NzVdLFxyXG4gIFsxNzQwLjU1OCwgNTc1LjYzMV0sXHJcbiAgWzE3MzYuNjI5NiwgNTc4LjczMzldLFxyXG4gIFsxNzMzLjg3NjUsIDU4Mi44OTA3NV0sXHJcbiAgWzE3MzEuMTEzOCwgNTg3LjI5ODE2XSxcclxuICBbMTczNS42MzcxLCA1ODkuMjY2N10sXHJcbiAgWzE3NDAuNTI0NSwgNTg4Ljc3NjFdLFxyXG4gIFsxNzQwLjM2MzksIDU4My44NTQzXSxcclxuICBbMTc0NC4xMzcsIDU4MC4wMjg3XSxcclxuICBbMTc0OC4yMDEsIDU3NS44MTM1XSxcclxuICBbMTc1NS45MjgyLCA1ODEuNDM5N10sXHJcbiAgWzE3NjEuMzk1NCwgNTc3LjQzN10sXHJcbiAgWzE3NjMuNTIzLCA1NzEuMzM0N10sXHJcbiAgWzE3NTguMDc2NCwgNTcwLjExODQ3XSxcclxuICBbMTc1NC45OTU0LCA1NzQuODAyMDZdLFxyXG4gIFsxNzQ5LjkwNjIsIDU3MS4xNjY1XSxcclxuICBbMTc1Mi45ODk3LCA1NjcuMTQ1OF0sXHJcbiAgWzE3NTQuNDQ0NSwgNTYxLjk4MThdLFxyXG4gIFsxNzU5LjU2NDUsIDU1OC41NjMxXSxcclxuICBbMTc2NC4xMTYyLCA1NTMuNzY5M10sXHJcbiAgWzE3NjkuOTcxNCwgNTU1Ljk5MzNdLFxyXG4gIFsxNzcwLjI4NDksIDU0OC40NzI4NF0sXHJcbiAgWzE3NjMuOTg2MSwgNTQ1Ljc1MDZdLFxyXG4gIFsxNzY3Ljg2NjUsIDU0MC42NjEyNV0sXHJcbiAgWzE3NjUuMDQ4MiwgNTMzLjM1Mzc2XSxcclxuICBbMTc1OS4wMzgxLCA1MzIuMTIzMTddLFxyXG4gIFsxNzUzLjA2MDUsIDUzMS4wNTU4XSxcclxuICBbMTc2MC41NDg1LCA1MzguOTYxOF0sXHJcbiAgWzE3NTkuNDg4NCwgNTQ4LjkxNjRdLFxyXG4gIFsxNzUzLjA2MTksIDU0OC4wNDA5XSxcclxuICBbMTc1Ni41MzYxLCA1NDMuMTQyMV0sXHJcbiAgWzE3NDcuMzUyOSwgNTI5LjY5OTQ2XSxcclxuICBbMTc0MS40MzYyLCA1MjkuNDg1Nl0sXHJcbiAgWzE3NDIuODMxLCA1MjMuNDY0Nl0sXHJcbiAgWzE3MzYuODQxMywgNTIzLjEzMzldLFxyXG4gIFsxNzMwLjQ1NjMsIDUyNC4yMjgzXSxcclxuICBbMTcyMy45MTQ5LCA1MjUuMzg0NzddLFxyXG4gIFsxNzIzLjk5NTUsIDUzMS43NzU2M10sXHJcbiAgWzE3MjcuMjk1MiwgNTM2Ljk4MDJdLFxyXG4gIFsxNzMwLjY2LCA1MzEuMzM0Nl0sXHJcbiAgWzE3MzUuNjYwOSwgNTI4LjY0OTddLFxyXG4gIFsxNzM3LjY1NTYsIDUzNC42MTA5XSxcclxuICBbMTczMy40MTc3LCA1MzguNDk1OF0sXHJcbiAgWzE3MzguMTUzNiwgNTQxLjY0NjNdLFxyXG4gIFsxNzI5LjEyNzcsIDU0Mi41OTY4Nl0sXHJcbiAgWzE3MzIuMzk2NSwgNTQ2LjQzMDg1XSxcclxuICBbMTczNS45OTE2LCA1NDkuMTczMTZdLFxyXG4gIFsxNzI2LjI5NTksIDU0OC44NjQ4N10sXHJcbiAgWzE3MjMuMDg4LCA1NDIuNDg1OV0sXHJcbiAgWzE3MTkuMzg0NSwgNTM2LjkyNjRdLFxyXG4gIFsxNzEyLjMxMDUsIDUzNy4xNTAyN10sXHJcbiAgWzE3MTUuODU1LCA1NDMuNTE0MV0sXHJcbiAgWzE3MjAuMDc2OCwgNTQ4Ljc2Nl0sXHJcbiAgWzE3MTcuOTcwMywgNTU0LjczOTE0XSxcclxuICBbMTcyNC40MTU4LCA1NTUuMjk1Nl0sXHJcbiAgWzE3MjEuNDUyMywgNTYwLjk2ODJdLFxyXG4gIFsxNzIyLjgzMDcsIDU2Ny4wMjM5XSxcclxuICBbMTcyOS4wOTc0LCA1NjguMDgwMl0sXHJcbiAgWzE3MjUuMzY3MiwgNTcyLjgxOTE1XSxcclxuICBbMTcxOS45NDQzLCA1NzQuOTY0Nl0sXHJcbiAgWzE3MTguMTc4NywgNTcwLjAzNjU2XSxcclxuICBbMTcxNC4zMzg2LCA1NzUuNjYyOV0sXHJcbiAgWzE3MTUuMzEzLCA1ODIuNDczOV0sXHJcbiAgWzE3MTIuNjM0MywgNTg4LjAyOTddLFxyXG4gIFsxNzEzLjQwOCwgNTk1LjA0OTEzXSxcclxuICBbMTcwNy4yODY2LCA1OTguMTc3OF0sXHJcbiAgWzE2OTguNDE3NSwgNjAyLjI4NDRdLFxyXG4gIFsxNzAwLjYzMjIsIDU5Ni4zNTgxXSxcclxuICBbMTcwMy43MzQ1LCA1OTIuMzMxMV0sXHJcbiAgWzE3MDkuMDMzOSwgNTkyLjA5ODVdLFxyXG4gIFsxNzAxLjIxMDEsIDU4Ny43MzUyXSxcclxuICBbMTY5Ny4xODgsIDU5MC40NTY5XSxcclxuICBbMTY5NS4zMDE1LCA1OTUuMjY2OF0sXHJcbiAgWzE2OTEuMTQxNywgNTkxLjc0NzQ0XSxcclxuICBbMTY4Ni44NjYsIDU4OC40MjI2N10sXHJcbiAgWzE2ODguMzY5NCwgNTgzLjgxMzddLFxyXG4gIFsxNjk3LjUyNjYsIDU4My45MDcyXSxcclxuICBbMTY5Mi45NTg1LCA1ODYuOTcwNl0sXHJcbiAgWzE2OTIuMzg5NiwgNTgxLjI5MzRdLFxyXG4gIFsxNjkwLjU1ODMsIDU3NS4yNTcxXSxcclxuICBbMTY5OS45NzgsIDU3MC45NTkzNV0sXHJcbiAgWzE3MDQuNzI1NywgNTY5LjM0ODldLFxyXG4gIFsxNjk2LjM2MTcsIDU3My40ODI0XSxcclxuICBbMTY5NS40MjM4LCA1NzguMDM0NjddLFxyXG4gIFsxNzAwLjA5NzIsIDU3OC45NTMxXSxcclxuICBbMTcwMy40NTMyLCA1ODIuODQyM10sXHJcbiAgWzE3MDYuNDEsIDU4Ny4zMDA2Nl0sXHJcbiAgWzE3MDkuNjE4NCwgNTgzLjczMjg1XSxcclxuICBbMTcxMC45NDM0LCA1NzkuMTA3NF0sXHJcbiAgWzE3MDYuMTk1OCwgNTc4Ljc2NDRdLFxyXG4gIFsxNzAyLjk0ODYsIDU3NS4wNDI1XSxcclxuICBbMTcwOC40ODA4LCA1NzMuNDk0Nl0sXHJcbiAgWzE3MTIuOTExMSwgNTcwLjE5NTA3XSxcclxuICBbMTcwOS4yNjQ5LCA1NjUuOTQ1OV0sXHJcbiAgWzE3MTUuNDQ1MywgNTYzLjc0NjZdLFxyXG4gIFsxNzEyLjcxMDIsIDU1Ny4wNzA2XSxcclxuICBbMTcwOC4wNzI1LCA1NTkuODEzXSxcclxuICBbMTcwMy44MjUsIDU2My4xODk1XSxcclxuICBbMTY5OS44MTI3LCA1NjUuNDE4OV0sXHJcbiAgWzE2OTUuODIzMSwgNTYxLjI1ODZdLFxyXG4gIFsxNzAxLjM1MzMsIDU1OC4xMDg3XSxcclxuICBbMTY5OS44Nzk2LCA1NTIuNTY2NjVdLFxyXG4gIFsxNzA2LjM3MTgsIDU1Mi44NzA2XSxcclxuICBbMTcxMi4zMTY5LCA1NDkuNzYzMzddLFxyXG4gIFsxNzA4LjE1MjMsIDU0My44NDNdLFxyXG4gIFsxNzAwLjUxMDUsIDU0MS4yMDg1Nl0sXHJcbiAgWzE3MDIuMzg5MywgNTQ3LjE2MzFdLFxyXG4gIFsxNjk1LjI2MzcsIDU0OC41NDk0NF0sXHJcbiAgWzE2ODUuNjQ1NiwgNTQ5LjIwNzldLFxyXG4gIFsxNjg5LjkwNDMsIDU1My4yMjc1XSxcclxuICBbMTY5NS4wNDE2LCA1NTUuNzY3M10sXHJcbiAgWzE2OTUuNDY4NSwgNTY3LjE3NjNdLFxyXG4gIFsxNjkxLjYzNSwgNTcwLjE2NzhdLFxyXG4gIFsxNjg2LjM3MDgsIDU3OC43MjY0NF0sXHJcbiAgWzE2ODQuOTkyNCwgNTczLjQyNTZdLFxyXG4gIFsxNjg2LjM5MDQsIDU2OC41NDU1M10sXHJcbiAgWzE2ODQuOTM4MiwgNTYzLjI2XSxcclxuICBbMTY5MC42OTE5LCA1NjQuMzkxNjZdLFxyXG4gIFsxNjg5LjI4NDIsIDU1OS4wNzU2XSxcclxuICBbMTY4My4yNDc4LCA1NTYuNDk2MTVdLFxyXG4gIFsxNjg1LjAxNzMsIDU0MS4yMzc1NV0sXHJcbiAgWzE2ODAuMTMwNywgNTQ5Ljg0MjZdLFxyXG4gIFsxNjc2LjI4LCA1NTMuMTE1OF0sXHJcbiAgWzE2NzAuMTI2MSwgNTUxLjQ2NTQ1XSxcclxuICBbMTY2NC43NDI3LCA1NDcuNDUzNF0sXHJcbiAgWzE2NjYuNDEzNiwgNTQxLjI3MTVdLFxyXG4gIFsxNjczLjMzOTgsIDUzOS43MDFdLFxyXG4gIFsxNjY4LjcwNzksIDUzNS44OTI5NF0sXHJcbiAgWzE2NjMuMjk5MywgNTM0LjMxOThdLFxyXG4gIFsxNjU3LjE1NjQsIDUzNi4yODY0XSxcclxuICBbMTY1Mi42NjksIDUyOS44NTQyNV0sXHJcbiAgWzE2NTguMjMwMiwgNTI5Ljg3XSxcclxuICBbMTY2My40NDczLCA1MjcuNjQ0MDRdLFxyXG4gIFsxNjY4LjQ3MzYsIDUyOC43ODYxXSxcclxuICBbMTY3Mi45NTM2LCA1MjUuMjA4NDRdLFxyXG4gIFsxNjcwLjk0NTQsIDUxOS41NTQ0NF0sXHJcbiAgWzE2NjYuMDY3NywgNTIyLjA0ODAzXSxcclxuICBbMTY2NS4yMSwgNTE1LjI1OTc3XSxcclxuICBbMTY3MC4wODUsIDUxNC4wMzZdLFxyXG4gIFsxNjc2LjY3ODEsIDUxOS43OTk0XSxcclxuICBbMTY4Mi4zMTE4LCA1MTkuNDIzMl0sXHJcbiAgWzE2NzkuMzU3NCwgNTI0LjQ0OTc3XSxcclxuICBbMTY3NS40NDE5LCA1MTUuMjY1NV0sXHJcbiAgWzE2NzguNTkyMiwgNTExLjU1OTA4XSxcclxuICBbMTY4MS40OTU2LCA1MTUuMDY2NjVdLFxyXG4gIFsxNjg3LjAwNzksIDUxNS4yMDE2Nl0sXHJcbiAgWzE2OTIuNDA0MiwgNTE1Ljc5OTc0XSxcclxuICBbMTcwMS41NzUsIDUyMC40MjYxNV0sXHJcbiAgWzE3MDguNzE0MiwgNTIwLjg5MDVdLFxyXG4gIFsxNzA1LjYzODUsIDUxNC4yMTgzXSxcclxuICBbMTcxMi44MjY1LCA1MTQuMTU3NjVdLFxyXG4gIFsxNzA5Ljg2NzIsIDUwNy44MzAzXSxcclxuICBbMTcwMy43MjIyLCA1MDguMDUxMjddLFxyXG4gIFsxNjk2LjgzMDEsIDUwNi4zNDUxOF0sXHJcbiAgWzE2OTYuODEyNSwgNTEwLjczNTE3XSxcclxuICBbMTY5MS4wODc0LCA1MTAuOTI2ODhdLFxyXG4gIFsxNjkxLjkzMjQsIDUwNi4xNDIxXSxcclxuICBbMTY4OS44MTE0LCA1MDIuMDI5MzZdLFxyXG4gIFsxNjg4LjE3MTMsIDQ5Ny4yODg2NF0sXHJcbiAgWzE2OTIuNDgwNywgNDk4LjE4MDAyXSxcclxuICBbMTY5MS43MzM0LCA0OTMuODE4MThdLFxyXG4gIFsxNjk1LjYwNTEsIDQ5Mi41MzgzXSxcclxuICBbMTY5OS44ODcyLCA0OTEuNTcwMjhdLFxyXG4gIFsxNzA0LjU0MDMsIDQ4OS43NzA2XSxcclxuICBbMTcwNi4wNTU3LCA0ODUuMjI5XSxcclxuICBbMTcwOC43NDM1LCA0ODIuMTgxMjRdLFxyXG4gIFsxNzA4LjYwMjgsIDQ3OC41MDM0OF0sXHJcbiAgWzE3MDQuNjI0MywgNDc5LjcyMzVdLFxyXG4gIFsxNzAxLjkzOTUsIDQ4Mi43NTM4NV0sXHJcbiAgWzE3MDAuOTE1NSwgNDg2Ljc0MDc4XSxcclxuICBbMTY5Ni44MDI2LCA0ODcuNDAwODhdLFxyXG4gIFsxNjkyLjk3LCA0ODguNTA0MzNdLFxyXG4gIFsxNjg5LjU1NDMsIDQ4OS42NTI3N10sXHJcbiAgWzE2ODcuNTAyMiwgNDkyLjc0NDcyXSxcclxuICBbMTY4NC4zNTUsIDQ5NS4wMzQ3M10sXHJcbiAgWzE2ODEuNzg3LCA0OTcuNDQ2NjZdLFxyXG4gIFsxNjg0LjkzMDMsIDUwMC4wODk3Ml0sXHJcbiAgWzE2ODYuMDQwOSwgNTA0LjI2NDc0XSxcclxuICBbMTY4Ny4yNTkzLCA1MDguMzc2NTNdLFxyXG4gIFsxNjgzLjUzMjMsIDUxMC44ODUwN10sXHJcbiAgWzE2ODIuMDc5NywgNTA3LjAyMDJdLFxyXG4gIFsxNjgxLjQ5NjYsIDUwMy4yNDg5Nl0sXHJcbiAgWzE2NzkuMDIxOSwgNTAwLjk4MDA0XSxcclxuICBbMTY3OC4yNDY4LCA0OTcuNDE4MTVdLFxyXG4gIFsxNjc2LjI2OTUsIDQ5NC41NzM5N10sXHJcbiAgWzE2NzYuMDU1MiwgNDkwLjU3MDc0XSxcclxuICBbMTY3Mi40ODYsIDQ5NC43MzkwN10sXHJcbiAgWzE2NjguMTc2OCwgNDk2LjMwMjhdLFxyXG4gIFsxNjY5Ljg2LCA0OTEuODg4NTJdLFxyXG4gIFsxNjczLjM0MTEsIDQ4Ny45Mjk3OF0sXHJcbiAgWzE2NjkuMzQ0NywgNDg3LjY0NDZdLFxyXG4gIFsxNjY2LjAzMzQsIDQ4OS43OTAyNV0sXHJcbiAgWzE2NjYuNjksIDQ4NC40MDI1M10sXHJcbiAgWzE2NzEuMDMwMywgNDgzLjY3MDFdLFxyXG4gIFsxNjc1LjExNzcsIDQ4Mi45NjAwNV0sXHJcbiAgWzE2NzcuNzYxNiwgNDg1Ljk2Mzg3XSxcclxuICBbMTY4MC42MDU3LCA0ODguMzgxNF0sXHJcbiAgWzE2ODMuMjE2MywgNDg0LjUxNDk4XSxcclxuICBbMTY3OS42Mjc3LCA0ODEuODU0NThdLFxyXG4gIFsxNjg0LjIxMzksIDQ4MC4yOTc4Ml0sXHJcbiAgWzE2ODguODM3NSwgNDc4LjM2MTU0XSxcclxuICBbMTY5MS43NTgzLCA0NzUuNTcyMV0sXHJcbiAgWzE2OTQuOTYxNywgNDczLjgyNzI3XSxcclxuICBbMTY5Ni4yNDYzLCA0NzAuNjkxNV0sXHJcbiAgWzE2OTUuOTkzNCwgNDY2LjkxOTNdLFxyXG4gIFsxNjkwLjUxNTksIDQ3MS42MTUwNV0sXHJcbiAgWzE2OTIuMDEwNCwgNDY4LjAwNTU1XSxcclxuICBbMTY4Ny4yOTE3LCA0NjguNDg1MDVdLFxyXG4gIFsxNjgyLjk2MjYsIDQ2Ny41MTEzMl0sXHJcbiAgWzE2ODQuODk4OSwgNDcxLjYyNjZdLFxyXG4gIFsxNjgxLjEyMTYsIDQ3My4zMzI5XSxcclxuICBbMTY4Ny41ODk2LCA0NzQuODA2NTJdLFxyXG4gIFsxNjg0LjE2MDQsIDQ3Ni4yMjI3OF0sXHJcbiAgWzE2ODAuMzQwMSwgNDc3LjYxODA0XSxcclxuICBbMTY3Ni4xNzY4LCA0NzguNDYzMl0sXHJcbiAgWzE2NzIuMjc4MSwgNDc5LjIxMjRdLFxyXG4gIFsxNjY4LjM1NCwgNDc5LjY0NjU1XSxcclxuICBbMTY2NC42MTk4LCA0ODAuNTA2N10sXHJcbiAgWzE2NjIuNDk1OCwgNDgzLjQyMjU4XSxcclxuICBbMTY2My4yMTY5LCA0ODcuMzQyNDddLFxyXG4gIFsxNjYxLjgxMTQsIDQ5MS40MDM0XSxcclxuICBbMTY1NC44NzgyLCA0OTUuMDQ0OV0sXHJcbiAgWzE2NTYuNjQ4LCA0OTcuOTI3NjddLFxyXG4gIFsxNjU1LjYwNSwgNTAxLjYzNDE2XSxcclxuICBbMTY1Mi4yNDM1LCA1MDIuMjcxN10sXHJcbiAgWzE2NTIuNzQ0LCA0OTguNzA1OF0sXHJcbiAgWzE2NDkuMTAxLCA1MDAuNTI3MDRdLFxyXG4gIFsxNjQ4LjE4NzMsIDQ5Ny40MjA0N10sXHJcbiAgWzE2NTAuODgyOCwgNDk1Ljc0MDIzXSxcclxuICBbMTY1MS44Nzg0LCA0OTIuNzIxOV0sXHJcbiAgWzE2NDguOTE5MywgNDkwLjU0ODc3XSxcclxuICBbMTY0Ny40NjUxLCA0OTMuNDQyMzJdLFxyXG4gIFsxNjQ0LjYyMTYsIDQ5NS41ODFdLFxyXG4gIFsxNjQ1LjA4MTMsIDQ5OS4zMTc2XSxcclxuICBbMTYzNy40MjQzLCA0OTkuNzM0NDRdLFxyXG4gIFsxNjM4LjkyOTIsIDUwMy41MTU0N10sXHJcbiAgWzE2NDEuODM3NSwgNTAxLjU4MDAyXSxcclxuICBbMTY0MS4zODEzLCA0OTcuOTk4OTZdLFxyXG4gIFsxNjM4LjM0MjMsIDQ5NS45NzkwNl0sXHJcbiAgWzE2MzUuMjY3NSwgNDk1Ljc2NDgzXSxcclxuICBbMTYzMi44Nzk1LCA0OTAuMzU0NThdLFxyXG4gIFsxNjMyLjA1MSwgNDkzLjU5MzddLFxyXG4gIFsxNjMyLjA0MjEsIDQ5Ni45OTk3XSxcclxuICBbMTYzMy4xMzc3LCA1MDAuMDE4M10sXHJcbiAgWzE2MzQuODU1NywgNTAzLjAwMDk4XSxcclxuICBbMTYzMi4wODk0LCA1MDUuNzkxNTZdLFxyXG4gIFsxNjI5Ljg3MTEsIDUwMi40MjI2N10sXHJcbiAgWzE2MjguMzQ4OCwgNDk4LjYzODk4XSxcclxuICBbMTYyOC4xMDc1LCA0OTQuNzgxOThdLFxyXG4gIFsxNjI4Ljc2NTUsIDQ5MC44NTE2Ml0sXHJcbiAgWzE2MzEuMTcxMSwgNDg3LjMwMDc4XSxcclxuICBbMTYzMi44ODk0LCA0ODAuODEyMjNdLFxyXG4gIFsxNjM0LjEwODIsIDQ4NC40Mjc0M10sXHJcbiAgWzE2MzcuMDY4OCwgNDgwLjY2NjVdLFxyXG4gIFsxNjM1Ljk4NzUsIDQ3Ni44OTI0M10sXHJcbiAgWzE2MzguOTM0MSwgNDc0LjA0MzA2XSxcclxuICBbMTYzNS42NDM5LCA0NzIuMzEzNDVdLFxyXG4gIFsxNjI2LjE0MjEsIDQ2OC45OTUxMl0sXHJcbiAgWzE2MjguMTMyOSwgNDcyLjI2NzldLFxyXG4gIFsxNjMxLjI3OSwgNDcwLjIwMTNdLFxyXG4gIFsxNjMyLjI4ODEsIDQ2Ni4yNjM1Ml0sXHJcbiAgWzE2MzIuODgzNSwgNDYyLjI3MTQ4XSxcclxuICBbMTYzNi4xNjI3LCA0NjEuMTk0OV0sXHJcbiAgWzE2NDEuMzcwNCwgNDU3LjA3NDM0XSxcclxuICBbMTY0My41NzQ1LCA0NTkuOTc0MzNdLFxyXG4gIFsxNjQ2Ljg3OTIsIDQ1OC44NTQ2XSxcclxuICBbMTY1MC4wMTg5LCA0NTcuNjQwNl0sXHJcbiAgWzE2NTMuNzgzNywgNDU3Ljc0MDcyXSxcclxuICBbMTY0OC41OTAxLCA0NTIuOTg4OTVdLFxyXG4gIFsxNjQ1LjMyNjIsIDQ1NS4yNzA5NF0sXHJcbiAgWzE2NDIuNTg3OSwgNDUyLjI0NjAzXSxcclxuICBbMTY0NS45NTI4LCA0NDkuODYyODVdLFxyXG4gIFsxNjQ3LjI5OTEsIDQ0Ni4zMjk1Nl0sXHJcbiAgWzE2NDEuNzg0OSwgNDQ3LjU5NDgyXSxcclxuICBbMTY0My4zNzE3LCA0NDMuODI4NTVdLFxyXG4gIFsxNjM4LjUyNCwgNDQzLjQ4NzhdLFxyXG4gIFsxNjQwLjk3ODYsIDQzOS42MTI5OF0sXHJcbiAgWzE2MzUuOTM4NywgNDM5LjQyODUzXSxcclxuICBbMTYzMi43MjU4LCA0MzUuNjM4NzNdLFxyXG4gIFsxNjMwLjg5NjksIDQzOS44OTYwNl0sXHJcbiAgWzE2MzMuNzQ0MSwgNDQ0LjA0OTEzXSxcclxuICBbMTYzNy4wNTM3LCA0NDcuMTA5NDRdLFxyXG4gIFsxNjMzLjkyMDUsIDQ0OS40MzYyMl0sXHJcbiAgWzE2MzguNDg2OCwgNDUwLjY0MjY0XSxcclxuICBbMTYzOC44MDU4LCA0NTQuMjEyOTVdLFxyXG4gIFsxNjM3LjI5NzYsIDQ1Ny42MjI5XSxcclxuICBbMTYzMy4yNzY5LCA0NTcuOTE1MzddLFxyXG4gIFsxNjM0LjQ1MzYsIDQ1My41OTI0XSxcclxuICBbMTYzMC4wODg3LCA0NTUuNTQ1Nl0sXHJcbiAgWzE2MjguOTU0NiwgNDU5LjQ4MjM2XSxcclxuICBbMTYyNi4wNzI1LCA0NjIuODQxOV0sXHJcbiAgWzE2MjAuNjk4MiwgNDU3LjUxNTg3XSxcclxuICBbMTYyMS43NTIzLCA0NTMuNjIwOF0sXHJcbiAgWzE2MTcuMzQ5NiwgNDU1LjczNzZdLFxyXG4gIFsxNjE3LjQ3MiwgNDUxLjk4Njc2XSxcclxuICBbMTYxNi40ODA3LCA0NDguMDgxMzZdLFxyXG4gIFsxNjIwLjM5ODQsIDQ0OS4xNTM3NV0sXHJcbiAgWzE2MTcuODMyNCwgNDQ0LjEzODNdLFxyXG4gIFsxNjIyLjM0MywgNDQ1LjQ2NDM2XSxcclxuICBbMTYyNS44NTUyLCA0NDIuMDk0MzZdLFxyXG4gIFsxNjIyLjE5NDEsIDQ0MC42MDc0OF0sXHJcbiAgWzE2MTguMTkwNiwgNDM5LjMxNTg2XSxcclxuICBbMTYxMy45MzEsIDQ0MC4zMDczXSxcclxuICBbMTYxMS4yOTgxLCA0NDMuNDM4NzJdLFxyXG4gIFsxNjA5LjI5OTgsIDQzOS40MzAxNV0sXHJcbiAgWzE2MDkuNDMyMSwgNDM1LjcxMjI1XSxcclxuICBbMTYwNS4wNjc2LCA0MzMuNzg5NjddLFxyXG4gIFsxNjAzLjcxMiwgNDM2LjkyMjE4XSxcclxuICBbMTYwMC4zODUsIDQzMi43MDk0NF0sXHJcbiAgWzE1OTYuMzc4OCwgNDMzLjE2NzI0XSxcclxuICBbMTYwMC40NjI5LCA0MjcuMjIwODNdLFxyXG4gIFsxNjA4LjE1MDUsIDQzMS4zMTk4XSxcclxuICBbMTYxMC4yMzg0LCA0MjcuOTg1Ml0sXHJcbiAgWzE2MDkuMjUzOSwgNDIzLjc4OTY0XSxcclxuICBbMTYwMy42MTI4LCA0MzAuMDYyNjhdLFxyXG4gIFsxNjA1LjQxMzEsIDQyNi40MTg5XSxcclxuICBbMTYxNC43NDQsIDQyNi4xODcyM10sXHJcbiAgWzE2MTcuMTk4MiwgNDIwLjQ0MTgzXSxcclxuICBbMTYxNy45ODczLCA0MzAuNDE5NzddLFxyXG4gIFsxNjEzLjA0NjUsIDQzMS43NjY1NF0sXHJcbiAgWzE2MTQuOTgwNywgNDM1LjY2OTQzXSxcclxuICBbMTYyMS4wNTE2LCA0MzUuNjk4MV0sXHJcbiAgWzE2MjYuOTEwNCwgNDM3LjI4MTU2XSxcclxuICBbMTYyOS4zNDIyLCA0NDMuNzU1NjhdLFxyXG4gIFsxNjMwLjUzNDgsIDQ0Ny41MTg3N10sXHJcbiAgWzE2MjYuNTAzNSwgNDQ3LjE0MjJdLFxyXG4gIFsxNjI0LjQxNTMsIDQ1MC4yMjQ3M10sXHJcbiAgWzE2MjkuODk4NCwgNDUxLjQyNTc4XSxcclxuICBbMTYyNi40NTMsIDQ1My40MTA2XSxcclxuICBbMTYyNS4zODM1LCA0NTYuODkwMzhdLFxyXG4gIFsxNjIzLjY3MjEsIDQ1OS45NzY2Ml0sXHJcbiAgWzE2MjEuODY1MiwgNDYzLjIyMzM2XSxcclxuICBbMTYxOS4wNTQ3LCA0NjEuMjkzNTVdLFxyXG4gIFsxNjE2LjA5ODEsIDQ1OS42MTAxN10sXHJcbiAgWzE2MTIuNjg2NSwgNDYxLjE1NTI0XSxcclxuICBbMTYwOC44NDY0LCA0NjEuNDkwMTddLFxyXG4gIFsxNjA1Ljc0NzIsIDQ2My40MTI4NF0sXHJcbiAgWzE2MDIuMzE1NCwgNDY1LjU0MjE4XSxcclxuICBbMTYwNS40ODk5LCA0NjcuOTY2OTJdLFxyXG4gIFsxNjA5LjUwMjcsIDQ2Ni4wNzUzXSxcclxuICBbMTYwOS4zOTIxLCA0NTcuNjExOV0sXHJcbiAgWzE2MDkuMDcxNywgNDUzLjg0ODQ1XSxcclxuICBbMTYwOC40MDIsIDQ1MC4xMzcwNV0sXHJcbiAgWzE2MDcuODAxOCwgNDQ2LjI5NTM1XSxcclxuICBbMTYwNC4zNzQ4LCA0NDguOTIxN10sXHJcbiAgWzE2MDQuNTg2OCwgNDUzLjI5MTFdLFxyXG4gIFsxNjAwLjczMTksIDQ1NS4zNTA5Ml0sXHJcbiAgWzE2MDUuMzk5MiwgNDU3LjUyNV0sXHJcbiAgWzE2MTMuMTE3NCwgNDU2LjkyNzJdLFxyXG4gIFsxNjEzLjYyMDQsIDQ1My40OTY2NF0sXHJcbiAgWzE2MTIuNjEyMywgNDUwLjI5ODY4XSxcclxuICBbMTYxMi44MDY2LCA0NDYuNTU4MTddLFxyXG4gIFsxNjA2LjU1OTcsIDQ0Mi41ODc3NF0sXHJcbiAgWzE2MDIuMTI3NywgNDQ1LjIxNTldLFxyXG4gIFsxNTk5LjIwMjksIDQ0MS42NTgxNF0sXHJcbiAgWzE1OTUuNTc5MiwgNDQzLjQyMTddLFxyXG4gIFsxNjAzLjM2MjMsIDQ0MC40NjM5M10sXHJcbiAgWzE1OTguOTQzNywgNDM3LjA5MDc2XSxcclxuICBbMTU5NC45MzY0LCA0MzkuMzU1OTZdLFxyXG4gIFsxNTk3LjYxMjgsIDQ0Ny4wMjc2OF0sXHJcbiAgWzE2MDAuNjkzOCwgNDUwLjQ0MDAzXSxcclxuICBbMTU5Ny4wMzgxLCA0NTEuOTE2NTZdLFxyXG4gIFsxNTk1LjQ3NjEsIDQ1NS40MTM3Nl0sXHJcbiAgWzE1OTguMTAxMSwgNDU4LjcwMTRdLFxyXG4gIFsxNjAyLjY4OTUsIDQ2MC4xNzEyXSxcclxuICBbMTU5OS41MzI3LCA0NjIuNDg5NDRdLFxyXG4gIFsxNTk1LjMwNTcsIDQ2Mi4zMjU2Ml0sXHJcbiAgWzE1OTMuMDMyMSwgNDU4Ljc3NzgzXSxcclxuICBbMTU4OS4zMjEsIDQ2MC45MDE3XSxcclxuICBbMTU5MS4yNzI1LCA0NjMuOTg5Ml0sXHJcbiAgWzE1OTQuMzcwNywgNDY2LjUwMDU1XSxcclxuICBbMTU4OS4zMDE1LCA0NjcuNjkwNF0sXHJcbiAgWzE1ODUuNjM3OCwgNDYwLjgyMjYzXSxcclxuICBbMTU4Ni4zNjMsIDQ2NC43ODM5XSxcclxuICBbMTU4Mi4zNTM1LCA0NjUuNzMxNjNdLFxyXG4gIFsxNTc4LjcwMDQsIDQ2Ni4zNTg5OF0sXHJcbiAgWzE1NzYuMzA3MSwgNDY5Ljc3MzI1XSxcclxuICBbMTU3Mi40MTk3LCA0NjkuOTM3ODRdLFxyXG4gIFsxNTcwLjMxOSwgNDY2LjQ4MjI0XSxcclxuICBbMTU2Ny45NDgsIDQ3MC41NDFdLFxyXG4gIFsxNTcwLjQwNDIsIDQ3NC4yNzM3N10sXHJcbiAgWzE1NjMuNzg1NCwgNDcyLjcyMDhdLFxyXG4gIFsxNTY0LjQ0OTEsIDQ2OC4zMDQ2M10sXHJcbiAgWzE1NjYuNzc1NCwgNDY1LjE2MjIzXSxcclxuICBbMTU2My4xNzY4LCA0NjQuMDg5NTddLFxyXG4gIFsxNTY1LjA5MzEsIDQ2MC41OTMzMl0sXHJcbiAgWzE1NjguNzI1OCwgNDYxLjgwMjVdLFxyXG4gIFsxNTcyLjE5MDIsIDQ2Mi40NTQzNV0sXHJcbiAgWzE1NzQuODQwMywgNDY1LjI3M10sXHJcbiAgWzE1NzguMzA1NCwgNDYxLjk5MDQyXSxcclxuICBbMTU4MS45Mjk5LCA0NjAuOTYxMDNdLFxyXG4gIFsxNTg0LjgyODEsIDQ1Ny4wODc2NV0sXHJcbiAgWzE1ODEuNTkyOCwgNDU1LjQyMDNdLFxyXG4gIFsxNTc4LjE1MjUsIDQ1Ny40MjE2XSxcclxuICBbMTU3NS4wMTQyLCA0NTkuNzgzMTRdLFxyXG4gIFsxNTcxLjcxMjYsIDQ1Ny44NDQ5NF0sXHJcbiAgWzE1NjguMzE2NCwgNDU3Ljk3MThdLFxyXG4gIFsxNTY1Ljg1MDEsIDQ1NS44MTYxM10sXHJcbiAgWzE1NjIuMzg3MiwgNDU1LjA1OThdLFxyXG4gIFsxNTYwLjg5ODcsIDQ1Mi4wMDg0OF0sXHJcbiAgWzE1NTcuNDAxNCwgNDUxLjIwOTddLFxyXG4gIFsxNTU2LjY0ODMsIDQ1My45NjQ1NF0sXHJcbiAgWzE1NTguODUyLCA0NTYuNjYyNTddLFxyXG4gIFsxNTYyLjQyNDksIDQ1OC43MDcwM10sXHJcbiAgWzE1NTkuNzc4NiwgNDYwLjI5NjQ4XSxcclxuICBbMTU1Ni41MTgzLCA0NjAuODA3OTVdLFxyXG4gIFsxNTU2LjI2NiwgNDY1LjI4NzIzXSxcclxuICBbMTU1OS42MzM0LCA0NjMuNDA0NDJdLFxyXG4gIFsxNTU5Ljk3NzgsIDQ2Ni44NjU0Ml0sXHJcbiAgWzE1NjAuOTY5OCwgNDcwLjI2ODQzXSxcclxuICBbMTU1Ny4xNjgsIDQ3MC4wNzIyNF0sXHJcbiAgWzE1NTQuMDEzOCwgNDY4LjcxMTNdLFxyXG4gIFsxNTUyLjEzMDksIDQ2Ni4xMDMzM10sXHJcbiAgWzE1NTMuMjM1MiwgNDYyLjk5ODRdLFxyXG4gIFsxNTUzLjMwODYsIDQ1OS42MTQyXSxcclxuICBbMTU1NS4wNTk4LCA0NTYuNzc2NV0sXHJcbiAgWzE1NTIuNzM0NiwgNDUzLjE1MDc2XSxcclxuICBbMTU1MS40NDI5LCA0NTYuNjk4MzZdLFxyXG4gIFsxNTQ4LjczNzUsIDQ1NC4xNTg1XSxcclxuICBbMTU1MC4wOTA4LCA0NTAuMDc4Ml0sXHJcbiAgWzE1NTEuODEsIDQ0Ni40ODQ0N10sXHJcbiAgWzE1NTMuNTMzNCwgNDQ5LjcyMDQ2XSxcclxuICBbMTU1Ni4yMjQ2LCA0NDguMzM2Nl0sXHJcbiAgWzE1NTYuMzAxNiwgNDQ1LjE5NTldLFxyXG4gIFsxNTUzLjI5ODgsIDQ0My4xODgxXSxcclxuICBbMTU1Mi43NTk5LCA0MzkuNjE1MjNdLFxyXG4gIFsxNTUyLjgwMDQsIDQzNS43MDg1XSxcclxuICBbMTU1Ni42Njk3LCA0NDEuMTA3ODhdLFxyXG4gIFsxNTU2LjQ4MzYsIDQzNy44MDUxOF0sXHJcbiAgWzE1NTcuMTIwNSwgNDM0LjU5NTk1XSxcclxuICBbMTU2MC41MTY3LCA0MzcuNzkxOF0sXHJcbiAgWzE1NTkuNTg2OSwgNDQyLjYzMDM3XSxcclxuICBbMTU2My4yNjY0LCA0NDEuNjYyMDhdLFxyXG4gIFsxNTY0LjMxOTMsIDQzOC4xOTQwNl0sXHJcbiAgWzE1NjcuMTk2LCA0MzYuNTQwNDddLFxyXG4gIFsxNTcwLjU0OTgsIDQzNS41NDI5NF0sXHJcbiAgWzE1NzQuMjI0NiwgNDM3LjQ3NTkyXSxcclxuICBbMTU3Ny4xMTQxLCA0MzkuNTAzNF0sXHJcbiAgWzE1ODAuNjA0MiwgNDQxLjUwNzddLFxyXG4gIFsxNTc3LjQzNTcsIDQ0OS42OTIwMl0sXHJcbiAgWzE1NzcuNzA0MywgNDUzLjI0OTI0XSxcclxuICBbMTU3My45ODQxLCA0NTQuNjQ3NTVdLFxyXG4gIFsxNTY5LjYyNzcsIDQ1My40NDcyN10sXHJcbiAgWzE1NzIuODI2MiwgNDUwLjM2NTZdLFxyXG4gIFsxNTc0LjY3ODcsIDQ0Ni42ODczNV0sXHJcbiAgWzE1NzAuNjA5LCA0NDUuMTE2NF0sXHJcbiAgWzE1NjguNjY2LCA0NDguOTMyMl0sXHJcbiAgWzE1NjUuNTQzNSwgNDUxLjg2MDA1XSxcclxuICBbMTU2My42MDEzLCA0NDguODAyNl0sXHJcbiAgWzE1NTkuNjQ1NiwgNDQ3LjcxN10sXHJcbiAgWzE1NjIuMjQwNywgNDQ1LjIxNDE3XSxcclxuICBbMTU2Ni4xODg0LCA0NDUuNDU2Nl0sXHJcbiAgWzE1NjcuNDU4NSwgNDQxLjU3NzgyXSxcclxuICBbMTU3MC42MzU2LCA0MzkuNzY4MjVdLFxyXG4gIFsxNTczLjc3NDcsIDQ0Mi4yNzUwMl0sXHJcbiAgWzE1NzcuNTQ2NiwgNDQzLjY5MTY1XSxcclxuICBbMTU3OS45NDY4LCA0NDYuNzk4N10sXHJcbiAgWzE1ODEuODkzMSwgNDUxLjA0NjU3XSxcclxuICBbMTU4Ni4zMTkxLCA0NTMuMDM5MTVdLFxyXG4gIFsxNTg5LjA0NjksIDQ1Ni43MjZdLFxyXG4gIFsxNTkxLjQ1NDMsIDQ1My40NzY5M10sXHJcbiAgWzE1OTMuNzA4NSwgNDQ5LjgyOTFdLFxyXG4gIFsxNTkyLjQ5MzIsIDQ0Ni4xNzY2XSxcclxuICBbMTU5MS42MzA1LCA0NDIuMzI0M10sXHJcbiAgWzE1OTAuMjU4NSwgNDM4LjcwMDE2XSxcclxuICBbMTU4Ny43NTUsIDQ0Mi4yMzQyNV0sXHJcbiAgWzE1ODguMDQwOSwgNDQ1LjcyNTQzXSxcclxuICBbMTU4OS40MzA4LCA0NDkuNjEyNDNdLFxyXG4gIFsxNTg1LjI1NDQsIDQ0OC44NTIwNV0sXHJcbiAgWzE1ODMuMzQ4OSwgNDQ1LjQxMjc4XSxcclxuICBbMTU4NC4xNDcyLCA0NDEuOTI0XSxcclxuICBbMTU4Ni4xNDMzLCA0MzguOTE0NV0sXHJcbiAgWzE1ODYuNTE4MSwgNDM1LjczNTcyXSxcclxuICBbMTU4Ny4zODQzLCA0MzIuMzg1NjhdLFxyXG4gIFsxNTgyLjc2MjUsIDQzNC4wODM2OF0sXHJcbiAgWzE1ODIuNjc3MiwgNDM3Ljk0MjQ3XSxcclxuICBbMTU3OS41MzIsIDQzNi42OTAwM10sXHJcbiAgWzE1NzQuMjk0OSwgNDMzLjYyODE0XSxcclxuICBbMTU3NC41MzYxLCA0MjkuODgyNzVdLFxyXG4gIFsxNTcwLjg3MDgsIDQzMS43MTExMl0sXHJcbiAgWzE1NjYuOTg2MSwgNDMyLjE1NzU2XSxcclxuICBbMTU2My41OTAyLCA0MzMuNzEzOF0sXHJcbiAgWzE1NjAuMjc1OSwgNDMzLjA3MjZdLFxyXG4gIFsxNTU3LjIwOSwgNDMwLjY4MDYzXSxcclxuICBbMTU2MS40MzYsIDQyOS4xNTM0XSxcclxuICBbMTU2NS4zNjc4LCA0MjguNDY4NzJdLFxyXG4gIFsxNTYzLjUzNjMsIDQyNS4wOTUyOF0sXHJcbiAgWzE1NjguMjg5NCwgNDI0LjM0MjEzXSxcclxuICBbMTU2OS4yNDIsIDQyOC4zNDNdLFxyXG4gIFsxNTcyLjM3MzgsIDQyNi44Njk3NV0sXHJcbiAgWzE1NzUuODI3NSwgNDIxLjQ5MDQ4XSxcclxuICBbMTU3Ni42OTUzLCA0MjYuMzg3MDJdLFxyXG4gIFsxNTc4LjU3NzMsIDQzMC41MzU2XSxcclxuICBbMTU3Ny45Mjk5LCA0MzQuMDE1MzhdLFxyXG4gIFsxNTgzLjEzNDYsIDQzMC44NjIyN10sXHJcbiAgWzE1ODEuMTY2NiwgNDI3LjQyOTE3XSxcclxuICBbMTU3OS44MDY2LCA0MjQuMDA1NTVdLFxyXG4gIFsxNTc5LjU0OTcsIDQyMC41NDYwMl0sXHJcbiAgWzE1ODMuMzg3MSwgNDIwLjQyNDNdLFxyXG4gIFsxNTg1LjcxNDgsIDQxNi43MTU0NV0sXHJcbiAgWzE1ODMuOTgwMiwgNDEzLjAyNDA1XSxcclxuICBbMTU4Ni42OTY4LCA0MDkuNzI5OTJdLFxyXG4gIFsxNTg5LjUzMywgNDEzLjI0Mzg3XSxcclxuICBbMTU5MC4xMTA2LCA0MTcuMzEzOTNdLFxyXG4gIFsxNTg3LjU4OTcsIDQyMS4yNTkxXSxcclxuICBbMTU4NC45MDIyLCA0MjQuNTg2ODhdLFxyXG4gIFsxNTg3LjIyNTYsIDQyOC43MzU4XSxcclxuICBbMTU5MC40Mjk0LCA0MzQuOTQwNjddLFxyXG4gIFsxNTk0LjAyODEsIDQzNS43NjQ0N10sXHJcbiAgWzE1OTEuOTkzLCA0MzEuMDQ5NTNdLFxyXG4gIFsxNTkwLjYwMywgNDI1LjA3NDk1XSxcclxuICBbMTU5MS45MTMyLCA0MjEuMDg4MzhdLFxyXG4gIFsxNTk1LjE4MjUsIDQxOC43OTgzNF0sXHJcbiAgWzE1OTUuNDQ2LCA0MjMuODQ3OV0sXHJcbiAgWzE1OTkuMjg0MywgNDIxLjM4ODM3XSxcclxuICBbMTU5OS4xMTgyLCA0MTYuNTI3MTZdLFxyXG4gIFsxNjAzLjI4NTksIDQxNS4zODQ3XSxcclxuICBbMTYwNS4zMzA4LCA0MTAuNzQ5MzNdLFxyXG4gIFsxNjA4LjY2MTYsIDQxNC43ODY5M10sXHJcbiAgWzE1OTkuNDI1MiwgNDExLjM0MzIzXSxcclxuICBbMTU5NC40NzM0LCA0MTQuNjk0NTJdLFxyXG4gIFsxNTk0Ljg2MzksIDQxMC44NDA0NV0sXHJcbiAgWzE1OTEuNTk2OCwgNDA5LjA0OV0sXHJcbiAgWzE1ODkuODIxLCA0MDUuOTcxNTZdLFxyXG4gIFsxNTg2LjQxOTIsIDQwNC43OTc2N10sXHJcbiAgWzE1ODMuMzUwNiwgNDA2LjUyMzVdLFxyXG4gIFsxNTgxLjIyOTUsIDQwOS40NzM1XSxcclxuICBbMTU3OS42MDIzLCA0MDQuODQ1N10sXHJcbiAgWzE1NzMuNDU4MywgNDA5LjIzNzI0XSxcclxuICBbMTU3Ni45NDg5LCA0MDguMDk2MzddLFxyXG4gIFsxNTc4Ljk1MzIsIDQwMS4xMDQ3XSxcclxuICBbMTU4My43MjI5LCA0MDEuODUzMTJdLFxyXG4gIFsxNTg5LjM1NzIsIDQwMS44NDg0OF0sXHJcbiAgWzE1ODkuMTAwOCwgMzk4LjU0MDE2XSxcclxuICBbMTU5My45ODQsIDM5OS4zNjc3NF0sXHJcbiAgWzE1OTMuNjYyMSwgNDA0LjA0MTMyXSxcclxuICBbMTU5Ny4wNTEzLCA0MDYuODkzMTZdLFxyXG4gIFsxNjAxLjYwNjcsIDQwNS4zNTg3Nl0sXHJcbiAgWzE2MDUuNDQ1MSwgNDAyLjM1NTNdLFxyXG4gIFsxNjAyLjEzNiwgMzk5LjIzNzUyXSxcclxuICBbMTU5OS4wODY0LCAzOTYuMjM0M10sXHJcbiAgWzE1OTcuMzA0NywgMzkxLjUyNTg4XSxcclxuICBbMTU5OC4wMDg1LCA0MDEuNzM1M10sXHJcbiAgWzE1OTUuMDE4MSwgMzk1LjA5NDI0XSxcclxuICBbMTU5MS4yMDMxLCAzOTUuNTg5NDJdLFxyXG4gIFsxNTg3LjU3OCwgMzk0LjY0MzhdLFxyXG4gIFsxNTg4LjI5MDksIDM5MS4wNDI5N10sXHJcbiAgWzE1ODguODc2NywgMzg3LjY0NDQ3XSxcclxuICBbMTU4NC44OTE0LCAzODguNDk1NTddLFxyXG4gIFsxNTgxLjMwMjcsIDM4Ny4xNjcxOF0sXHJcbiAgWzE1ODAuMTk0NiwgMzgzLjgwOTY2XSxcclxuICBbMTU4My4yOTEsIDM4My4zNjExOF0sXHJcbiAgWzE1ODYuMjI3OSwgMzg1LjE3MzNdLFxyXG4gIFsxNTkzLjE1OTgsIDM3Ny41NzIzNl0sXHJcbiAgWzE1OTcuNTYzLCAzNzguNzkzNThdLFxyXG4gIFsxNjA4LjA0MDIsIDM3OS4xMDI3OF0sXHJcbiAgWzE2MDUuODA0LCAzNzUuMTA0MzRdLFxyXG4gIFsxNjAyLjQzNzcsIDM3OC42NDYzM10sXHJcbiAgWzE1OTkuODkxMSwgMzc0LjkwMjNdLFxyXG4gIFsxNTk5Ljc2MDEsIDM2Ni44NzE4M10sXHJcbiAgWzE1OTcuMjU4MywgMzcwLjIzNDg2XSxcclxuICBbMTU5NS4zODI2LCAzNzQuMTUzNDRdLFxyXG4gIFsxNTg5LjA0NjYsIDM3NS4wNDMyN10sXHJcbiAgWzE1ODkuNjAwNiwgMzc5LjM4M10sXHJcbiAgWzE1ODYuNjI0NSwgMzgxLjU5OTldLFxyXG4gIFsxNTg0Ljk0NzUsIDM3OC4yNjg2NV0sXHJcbiAgWzE1ODMuOTUxNCwgMzc0LjU3MTVdLFxyXG4gIFsxNTgwLjY1OTksIDM3MS4xMzg4XSxcclxuICBbMTU4Ni40MjcsIDM3MS4xNDg5XSxcclxuICBbMTU4NC4yNzE1LCAzNjcuMjM0ODZdLFxyXG4gIFsxNTc2LjM2MzMsIDM2OC41Mjc0XSxcclxuICBbMTU3NS45ODE0LCAzNzMuNDI4Ml0sXHJcbiAgWzE1NzIuMTA2MywgMzcwLjkzMzM1XSxcclxuICBbMTU3MS44NzY1LCAzNzUuMzc5Nl0sXHJcbiAgWzE1NjguMTY5OSwgMzcyLjc4NTI1XSxcclxuICBbMTU2NS41NjYsIDM2OS43NjUzNV0sXHJcbiAgWzE1NjguNjc4MywgMzY3LjMyXSxcclxuICBbMTU3Mi40OTE1LCAzNjYuMjA0NDddLFxyXG4gIFsxNTc0Ljg1MDEsIDM2Mi43NTkzN10sXHJcbiAgWzE1NzguMjIzOSwgMzYxLjA1NjgyXSxcclxuICBbMTU4MC40MjIyLCAzNTcuNjI5ODhdLFxyXG4gIFsxNTc2Ljk5MDEsIDM1NC44MzcwNF0sXHJcbiAgWzE1NzIuNjU4MSwgMzU3LjQwNzQ3XSxcclxuICBbMTU2NS44NTYyLCAzNTcuNzIyNzJdLFxyXG4gIFsxNTYwLjczMjQsIDM2MS4xNzI4Ml0sXHJcbiAgWzE1NjUuNzExMiwgMzYzLjQ5ODAyXSxcclxuICBbMTU3MC4wNjUzLCAzNjEuNDg5NDddLFxyXG4gIFsxNTc5Ljg5ODcsIDM2NS45Njk5N10sXHJcbiAgWzE1ODMuMTcwNCwgMzYyLjA4NDRdLFxyXG4gIFsxNTg3Ljc2MTUsIDM2My41NzgzN10sXHJcbiAgWzE1ODkuMjU5NiwgMzY3LjM4MTM1XSxcclxuICBbMTU5MS44NDExLCAzNzEuMzI2NDhdLFxyXG4gIFsxNTkzLjYzMDksIDM2Ni44MDI1NV0sXHJcbiAgWzE1OTcuNDU2NSwgMzYzLjgzNzE2XSxcclxuICBbMTU5OS45MzMzLCAzNjAuNjY4OF0sXHJcbiAgWzE1OTQuMTc3LCAzNjIuNDE0MTVdLFxyXG4gIFsxNTkxLjI3NDcsIDM2MC44NjUxXSxcclxuICBbMTU4Ny41NTM3LCAzNTkuMDIzMTNdLFxyXG4gIFsxNTg0LjMwNTQsIDM1Ni44NzIzXSxcclxuICBbMTU4Mi42ODcsIDM1Mi41MDE5XSxcclxuICBbMTU4Ny45Mzc1LCAzNTMuNjI3OF0sXHJcbiAgWzE1OTEuNzk0LCAzNTYuNDQyMjZdLFxyXG4gIFsxNTk2LjE0NzcsIDM1Ny44MDQ1N10sXHJcbiAgWzE1OTMuMDU3MSwgMzUyLjMwOTNdLFxyXG4gIFsxNTk3Ljc4MjYsIDM1My4yNjFdLFxyXG4gIFsxNjAxLjk0OTgsIDM1Mi4yNTkwM10sXHJcbiAgWzE2MDkuMjc2NSwgMzUzLjkwODYzXSxcclxuICBbMTYwNS41MTg4LCAzNTUuNzU0MjRdLFxyXG4gIFsxNjAxLjQsIDM1Ni45ODY4XSxcclxuICBbMTYwNS4yMzEsIDM2MC43MzI4OF0sXHJcbiAgWzE2MDMuMDYyNSwgMzYzLjg2MDY2XSxcclxuICBbMTYwMy44OTA5LCAzNjguMDAzNzJdLFxyXG4gIFsxNjAyLjMwMDMsIDM3MS42OTAxMl0sXHJcbiAgWzE2MDcuNjc1OCwgMzcwLjk3NzA1XSxcclxuICBbMTYxMS44NTA4LCAzNjkuMzc4MzZdLFxyXG4gIFsxNjExLjI5ODIsIDM3NS4xOTY2XSxcclxuICBbMTYxNS4yNDM0LCAzNzMuMDQ2NTddLFxyXG4gIFsxNjE3LjU3NDUsIDM2OS45NTAzOF0sXHJcbiAgWzE2MTguMDcxLCAzNjYuMTM1OTNdLFxyXG4gIFsxNjIxLjA5NDQsIDM2My43MTU5NF0sXHJcbiAgWzE2MjQuODA1NywgMzY0Ljc4MzA1XSxcclxuICBbMTYyMi4zNTg0LCAzNjguODg4NTVdLFxyXG4gIFsxNjI2LjE1MDMsIDM3MS43MTM1Nl0sXHJcbiAgWzE2MjguMDMxLCAzNjcuMjY5Nl0sXHJcbiAgWzE2MjguMzQyNSwgMzYxLjg5MDI2XSxcclxuICBbMTYzNi4xNjU5LCAzNTMuMjIxNTNdLFxyXG4gIFsxNjMxLjgzODQsIDM1My41NjU2NF0sXHJcbiAgWzE2MjguMDE1LCAzNTIuNzg3NzJdLFxyXG4gIFsxNjI0LjIzNTIsIDM1Mi41MzQ4XSxcclxuICBbMTYyOC45MDk3LCAzNDguNDUzODZdLFxyXG4gIFsxNjMzLjUxNDksIDM0OC4zNjE4XSxcclxuICBbMTYzMi4yMzAzLCAzNDMuNjg2NjVdLFxyXG4gIFsxNjM2LjY1ODIsIDM0MS44Mzk1N10sXHJcbiAgWzE2MzcuNzE1MSwgMzM1LjQyNjg1XSxcclxuICBbMTY0MC40NjY0LCAzMjguODYyOF0sXHJcbiAgWzE2NDMuNzMxLCAzMjEuMjk1OV0sXHJcbiAgWzE2NDcuNzc2NCwgMzE2LjAxMjJdLFxyXG4gIFsxNjUxLjg1ODIsIDMxNi4wMDcyXSxcclxuICBbMTY1My42NjM3LCAzMTIuMTQxMl0sXHJcbiAgWzE2NTAuMDQ1MiwgMzEwLjQ4NTM1XSxcclxuICBbMTY1MC42MzM5LCAzMDYuMDAwNl0sXHJcbiAgWzE2NTUuMzMyNSwgMzA4LjA3NDI4XSxcclxuICBbMTY2MC42ODUyLCAzMDQuNzMyMjddLFxyXG4gIFsxNjU3LjMyOTgsIDMwMy4zMjE3OF0sXHJcbiAgWzE2NTMuOTMwOSwgMzAzLjY4ODhdLFxyXG4gIFsxNjU0LjkwNCwgMjk4LjU3NDg2XSxcclxuICBbMTY1NC44MDgyLCAyOTMuNTcwMjhdLFxyXG4gIFsxNjU4LjYzMzMsIDI5NC40Mjc5Ml0sXHJcbiAgWzE2NjIuNDgxOSwgMjkwLjczNzQzXSxcclxuICBbMTY2MC45ODI0LCAyODYuNzU0MV0sXHJcbiAgWzE2NjQuNDcyMiwgMjg0LjA4NzFdLFxyXG4gIFsxNjY2LjgyMzIsIDI4Ny42MjUxMl0sXHJcbiAgWzE2NzAuNTgyMywgMjkwLjQ2NDE0XSxcclxuICBbMTY3My44ODMzLCAyOTMuMDk0MDJdLFxyXG4gIFsxNjc3LjE3MywgMjg5LjM0MTQzXSxcclxuICBbMTY3Mi43NTUxLCAyODYuNTEyMjRdLFxyXG4gIFsxNjY5LjA3MTMsIDI4My4zMTQyXSxcclxuICBbMTY2NS40MzE2LCAyNzkuNDc4MDZdLFxyXG4gIFsxNjY3Ljg0NywgMjc1LjIzMDRdLFxyXG4gIFsxNjcwLjgyMzEsIDI3MS4wNjEzN10sXHJcbiAgWzE2NzMuNDk2MSwgMjc2LjEwNDk4XSxcclxuICBbMTY3MC40MzU3LCAyNzkuMDY5Nl0sXHJcbiAgWzE2NzQuNDE5OCwgMjgxLjc2MjNdLFxyXG4gIFsxNjc4LjgxNjQsIDI4NC42NjkwNF0sXHJcbiAgWzE2NzkuMjYwOSwgMjc5LjY4NjVdLFxyXG4gIFsxNjc4LjAzNzgsIDI3NS41NTYzXSxcclxuICBbMTY4Mi4wMjA1LCAyNzQuMjUxNV0sXHJcbiAgWzE2ODMuNjAwMywgMjY5Ljk3NTY1XSxcclxuICBbMTY4Ny4yODAyLCAyNzIuNTc5NV0sXHJcbiAgWzE2OTEuMTY4NywgMjcwLjc4NjVdLFxyXG4gIFsxNjg3LjU5ODQsIDI2OC40MTg0Nl0sXHJcbiAgWzE2ODUuMTYyOCwgMjY1LjUxNzJdLFxyXG4gIFsxNjgxLjUzMTksIDI2My44MjMwNl0sXHJcbiAgWzE2ODAuNDE2NywgMjY3LjE5MDNdLFxyXG4gIFsxNjc5LjE3MiwgMjcwLjYzMzczXSxcclxuICBbMTY3NS4zNjg0LCAyNzIuMDAzNV0sXHJcbiAgWzE2NzQuNjgxMiwgMjY3Ljg0ODAyXSxcclxuICBbMTY3MC4xMTg0LCAyNjUuODg3NF0sXHJcbiAgWzE2NjYuMTQ0MywgMjcwLjU0MTA1XSxcclxuICBbMTY2MC45Njg1LCAyNzcuNzQwNTddLFxyXG4gIFsxNjU1LjYyMjMsIDI4Ny43MDQxNl0sXHJcbiAgWzE2NTguMjYzMiwgMjkwLjQ4NjQyXSxcclxuICBbMTY1Ni45NzIzLCAyODMuNzY4N10sXHJcbiAgWzE2NjAuODAyNywgMjgxLjg4NjY2XSxcclxuICBbMTY2Mi45NDE3LCAyNzMuODA5NjNdLFxyXG4gIFsxNjU1LjkwNjIsIDI3Mi4xOTA5NV0sXHJcbiAgWzE2NTMuNDY2NCwgMjY2LjkyNl0sXHJcbiAgWzE2NDkuMDc3NCwgMjYxLjk5NjQzXSxcclxuICBbMTY0MC4wMDIyLCAyNTAuNTU1Ml0sXHJcbiAgWzE2NDQuNDAxMiwgMjQ2Ljk4MjkxXSxcclxuICBbMTY0OS44MTAzLCAyNDMuMTM0MTZdLFxyXG4gIFsxNjQ0Ljk4MjUsIDIzOS42MjAxMl0sXHJcbiAgWzE2MzkuOTgyLCAyNDMuMDg5NjNdLFxyXG4gIFsxNjM5Ljc3NDcsIDIzNS45Njc3NF0sXHJcbiAgWzE2NDUuMzU3OSwgMjMzLjg3NDc0XSxcclxuICBbMTY0Mi41MjcxLCAyMjkuMDE0MTZdLFxyXG4gIFsxNjQ3LjE2NTYsIDIyNi44NzA4OF0sXHJcbiAgWzE2NTEuNjQzMiwgMjI4Ljk0MTAxXSxcclxuICBbMTY0OS45NDQxLCAyMjEuNzE5MjhdLFxyXG4gIFsxNjU2LjEyNzcsIDIyMC4wMzkyOF0sXHJcbiAgWzE2NjAuOTI3NiwgMjE2LjM3ODM0XSxcclxuICBbMTY2Mi44NzE4LCAyMjAuODgxOTRdLFxyXG4gIFsxNjY0LjgxNDEsIDIyOC42OTAxNl0sXHJcbiAgWzE2NjIuODQzNSwgMjMyLjY3NzA2XSxcclxuICBbMTY2NS44OTI4LCAyMzguNjQ3OTJdLFxyXG4gIFsxNjcwLjI0MSwgMjQxLjQyOTI0XSxcclxuICBbMTY2OC43NDc4LCAyMzMuMjE4NV0sXHJcbiAgWzE2NzQuMjE4LCAyMzQuNzI1NDNdLFxyXG4gIFsxNjc2LjA3NjcsIDIzOS4zMzkwMl0sXHJcbiAgWzE2NzcuMjEyMywgMjQzLjcwNTA4XSxcclxuICBbMTY3MS4xNzI0LCAyNDcuMzc0MTVdLFxyXG4gIFsxNjcyLjkzMjQsIDI1Mi4xMzQ0XSxcclxuICBbMTY3MC4wMzk3LCAyNTYuMDkxXSxcclxuICBbMTY2Ni45MDk1LCAyNTIuODkxODldLFxyXG4gIFsxNjY1Ljc0MDUsIDI0Ni41MjUyNF0sXHJcbiAgWzE2NjAuMjI5OSwgMjQ1Ljg2ODldLFxyXG4gIFsxNjYyLjUxMzQsIDI0MS4zMDU5N10sXHJcbiAgWzE2NTkuNTEyMiwgMjM2LjI1OTA4XSxcclxuICBbMTY2MC4zNTc3LCAyMjUuMzc3ODVdLFxyXG4gIFsxNjU1LjM4OTQsIDIyNS4zNzM0XSxcclxuICBbMTY1MC4xMDA2LCAyMzUuOTE5MjVdLFxyXG4gIFsxNjUzLjkzMDIsIDIzOC4zMTc1XSxcclxuICBbMTY1Ny41ODQ4LCAyNDAuNzYyMTJdLFxyXG4gIFsxNjU0Ljc4ODEsIDI0NC43ODA0M10sXHJcbiAgWzE2NTUuMDY5OCwgMjUwLjE4ODIzXSxcclxuICBbMTY0OS45OTgzLCAyNTAuODM5N10sXHJcbiAgWzE2NTMuNDg5MSwgMjU2LjEwNzk0XSxcclxuICBbMTY1NS44MTk1LCAyNjEuNzMwMTNdLFxyXG4gIFsxNjYwLjI2MDEsIDI2OC41NjQ5N10sXHJcbiAgWzE2NjEuMzI4NiwgMjYzLjU4MDE0XSxcclxuICBbMTY2NS42NDM2LCAyNjYuMDQ1OV0sXHJcbiAgWzE2NjYuMzYwOCwgMjYwLjIxMDhdLFxyXG4gIFsxNjcwLjU2NjksIDI2MS4wMzcxNF0sXHJcbiAgWzE2NzQuMTA1LCAyNTguNzkwNjVdLFxyXG4gIFsxNjc2LjUyNzEsIDI1NS40ODYxOV0sXHJcbiAgWzE2NzQuMDUxMSwgMjYzLjQyNjddLFxyXG4gIFsxNjc3LjY4OTIsIDI2NC41MTczM10sXHJcbiAgWzE2NzcuNTQyLCAyNjAuMjQ0MDJdLFxyXG4gIFsxNjgxLjAzMSwgMjYwLjI5OTI2XSxcclxuICBbMTY4MC4zNTg2LCAyNTYuNjg3NzddLFxyXG4gIFsxNjc5LjgzODcsIDI1Mi43NDA3OF0sXHJcbiAgWzE2ODEuNzc3NiwgMjQ5LjE2MjYzXSxcclxuICBbMTY4Mi45ODI5LCAyNDUuNDA0NF0sXHJcbiAgWzE2ODYuNzk3OSwgMjQzLjI2NTg1XSxcclxuICBbMTY4Mi4zMDA5LCAyNDAuMDM5NDddLFxyXG4gIFsxNjgwLjUyNDIsIDIzNS43MjE5OF0sXHJcbiAgWzE2NzguMDkxOSwgMjI1LjgyMzI3XSxcclxuICBbMTY4Mi44MDcsIDIyNS4xODYyXSxcclxuICBbMTY4My42NjgsIDIyMC4yNDkxOF0sXHJcbiAgWzE2NzkuMjkyOCwgMjIwLjcwNDg4XSxcclxuICBbMTY3Ni41OTY0LCAyMTYuNjk1NTZdLFxyXG4gIFsxNjcxLjUyMTQsIDIxNS45MjY0Ml0sXHJcbiAgWzE2NjYuNjY0MSwgMjE2LjIwMjc2XSxcclxuICBbMTY2OC42NDk4LCAyMjAuNDcwODldLFxyXG4gIFsxNjczLjQyODcsIDIyMS44ODYxN10sXHJcbiAgWzE2NzIuNDIxOSwgMjI4LjM3MjVdLFxyXG4gIFsxNjc4LjIxNTYsIDIzMC43NTQ1OF0sXHJcbiAgWzE2OTAuMDAxMSwgMjI5LjMyNjc1XSxcclxuICBbMTY5Mi45NDY1LCAyMjIuODQ5MzVdLFxyXG4gIFsxNjg4LjI3ODksIDIyNC4zNjIxN10sXHJcbiAgWzE2ODQuNzc2MSwgMjMwLjYzNDQ5XSxcclxuICBbMTY4Ni4yMzUsIDIzNS4zMTkzN10sXHJcbiAgWzE2ODguNDk0NCwgMjM5LjA2MzQ2XSxcclxuICBbMTY5MS42NzIxLCAyMzUuMDY3NDddLFxyXG4gIFsxNjk1LjMzMDEsIDIzMS45MjUxXSxcclxuICBbMTY5Ny4wNjk3LCAyMzYuOTU3NTddLFxyXG4gIFsxNjk5LjI3ODMsIDIzMy44MDkwMl0sXHJcbiAgWzE2OTkuODI5NywgMjMwLjA0MzgyXSxcclxuICBbMTY5OS43MDQzLCAyMjYuMDk5MDldLFxyXG4gIFsxNjk1LjEyNzMsIDIyNi40MjMwMl0sXHJcbiAgWzE2OTYuMzk2NywgMjE4LjgyNzg4XSxcclxuICBbMTY5Mi4zNzE3LCAyMTcuODAxN10sXHJcbiAgWzE2ODguODU4NSwgMjE5LjQ3OTgzXSxcclxuICBbMTY4NS45ODA1LCAyMTYuMzczNjNdLFxyXG4gIFsxNjg5LjQzNTUsIDIxMy40Mzk5MV0sXHJcbiAgWzE2OTQuNTMxNSwgMjE0LjIyODMyXSxcclxuICBbMTY5Ny40ODI5LCAyMTEuMDgwOThdLFxyXG4gIFsxNjk4LjMwNjksIDIwNi41ODk3XSxcclxuICBbMTY5NS4zNTI1LCAyMDIuNTc3MjRdLFxyXG4gIFsxNjkwLjU5MDYsIDIwMy42NjIwNV0sXHJcbiAgWzE2OTEuNzkyNCwgMjA4LjE5MzRdLFxyXG4gIFsxNjg1LjU4MjksIDIwOS45NjgxMV0sXHJcbiAgWzE2ODYuMDQ1MiwgMjA0Ljk0OTVdLFxyXG4gIFsxNjgxLjcxNTEsIDIxNC43MDE2OV0sXHJcbiAgWzE2NzkuMjYwNSwgMjEwLjQ3NjczXSxcclxuICBbMTY4MC44NDYzLCAyMDYuMDExMV0sXHJcbiAgWzE2ODIuOTM0NywgMjAwLjU3OTU5XSxcclxuICBbMTY4Ny40ODM1LCAxOTkuMDQzMzddLFxyXG4gIFsxNjkxLjkzNiwgMTk4Ljc5MDQ1XSxcclxuICBbMTY5NC44Njg0LCAxOTUuNzc1OTldLFxyXG4gIFsxNjk4LjY3NDksIDE5Ny4yMTgwNV0sXHJcbiAgWzE3MDMuMDYzNSwgMTk1LjE4NTQ5XSxcclxuICBbMTcwOC42OTQ2LCAxOTUuMzU3MzZdLFxyXG4gIFsxNzA4LjczMzgsIDE4OC4yMjMwMl0sXHJcbiAgWzE3MDUuNjI1NSwgMTkxLjU1NTI0XSxcclxuICBbMTcxMS4wNzY0LCAxOTIuMjAxNDVdLFxyXG4gIFsxNzE0LjgxMywgMTkxLjk0MTE2XSxcclxuICBbMTcxNS44MDQ3LCAxOTUuNzg4MTJdLFxyXG4gIFsxNzEyLjI1ODMsIDE5Ny43MTk4M10sXHJcbiAgWzE3MjAuNTU4MiwgMjA2Ljk2MTA2XSxcclxuICBbMTcyMC44MTgsIDIwMS40N10sXHJcbiAgWzE3MTkuMjQxNSwgMTkzLjU5NzQ2XSxcclxuICBbMTcxOC42OTYyLCAxODkuNjk3N10sXHJcbiAgWzE3MTcuMDIzMywgMTc3LjI4XSxcclxuICBbMTcyMS4yOTc5LCAxODAuMjE0NDZdLFxyXG4gIFsxNzIyLjQxMjYsIDE3NS4xNjcxNl0sXHJcbiAgWzE3MjYuODI0NywgMTc2Ljg0ODUxXSxcclxuICBbMTczMS40MDE1LCAxNzUuNTc5NV0sXHJcbiAgWzE3MzYuMzk1NiwgMTc2LjAxMTY0XSxcclxuICBbMTc0NS40ODA3LCAxNzYuNzIwOTNdLFxyXG4gIFsxNzQwLjc5MzcsIDE3Ni44NTY5Ml0sXHJcbiAgWzE3MzIuNjQ3MiwgMTc5LjYyMjM4XSxcclxuICBbMTczNy40MDgyLCAxODIuMzUxNzhdLFxyXG4gIFsxNzMyLjYxMTUsIDE4OC40MTgwOF0sXHJcbiAgWzE3MzcuNzM1LCAxODguMTAzNTJdLFxyXG4gIFsxNzQyLjkxOTQsIDE4OC45Mzk3M10sXHJcbiAgWzE3NDIuMTA5MSwgMTgzLjQ5MDUyXSxcclxuICBbMTc0Ni43NDQ5LCAxODQuNjM2MTFdLFxyXG4gIFsxNzQ4Ljk1NTYsIDE4OC42MjI5N10sXHJcbiAgWzE3NTMuMTY1LCAxOTEuMDM2MDFdLFxyXG4gIFsxNzU3LjIxODEsIDE4Ny4zNjk4NF0sXHJcbiAgWzE3NTYuMjcyMiwgMTgzLjI5ODc1XSxcclxuICBbMTc1Mi42NTU5LCAxODIuMTQ3XSxcclxuICBbMTc0OS42Mjg4LCAxNzguNzM2NDVdLFxyXG4gIFsxNzUxLjU1MzgsIDE3NC42NDQwMV0sXHJcbiAgWzE3NTYuMDgwMSwgMTc2LjgyMzQzXSxcclxuICBbMTc2MC4xOTc1LCAxNzkuNTMzMzNdLFxyXG4gIFsxNzYxLjA5OTcsIDE4My43MTIxM10sXHJcbiAgWzE3NjMuMjcwOSwgMTg3LjA2Njk5XSxcclxuICBbMTc2Ni40Mjk0LCAxODMuOTU2MjRdLFxyXG4gIFsxNzYzLjMwNDksIDE3NS42MzQyMl0sXHJcbiAgWzE3NjYuMTg3OSwgMTc5LjAwMjhdLFxyXG4gIFsxNzcxLjMzMSwgMTgxLjYxNzYxXSxcclxuICBbMTc3NS42MzAyLCAxNzguMzY4NTZdLFxyXG4gIFsxNzgxLjEwODMsIDE3OS42NDVdLFxyXG4gIFsxNzc1LjkwOTcsIDE4NC45Mzc5N10sXHJcbiAgWzE3NzEuMTUxNywgMTg3LjQyODU3XSxcclxuICBbMTc2Ny4xMTMsIDE4OS4zNTc3N10sXHJcbiAgWzE3NzAuNzExLCAyMTEuOTM3MDZdLFxyXG4gIFsxNzY1LjE1ODcsIDIxNC40MzIzMV0sXHJcbiAgWzE3ODQuOTQ5OCwgMjA2LjY2MDE5XSxcclxuICBbMTc3MS40NDE0LCAyMjcuNDcwMl0sXHJcbiAgWzE3NzYuMDI4NiwgMjE1Ljk3MjUzXSxcclxuICBbMTc5NC43NTY2LCAyNDguMzUyMTddLFxyXG4gIFsxODAyLjYzMjcsIDI2MC4yMzY2M10sXHJcbiAgWzE3NjAuNDA5NCwgMjQ5LjE0NjE1XSxcclxuICBbMTc2My43NDQ0LCAyNTYuODM1NjNdLFxyXG4gIFsxNzU0LjU4NDQsIDI0OC4zOTI1Ml0sXHJcbiAgWzE3NDkuMzgwNiwgMjQ4LjQwOTE1XSxcclxuICBbMTc1NC45NDc1LCAyNDIuNzMxOThdLFxyXG4gIFsxNzY1LjM3NzksIDI0NS42NjUyXSxcclxuICBbMTc2MC45Njg1LCAyNDIuNDAxMTJdLFxyXG4gIFsxNzU2Ljg5NzEsIDIzOC4yODI0N10sXHJcbiAgWzE3NTAuNjUyMiwgMjM3LjkzOTczXSxcclxuICBbMTc1NC44ODA0LCAyMzMuMTMzNThdLFxyXG4gIFsxNzQ4LjQ0MDcsIDIzMy4yMjhdLFxyXG4gIFsxNzQzLjUwOTgsIDIzNS44MzEwNV0sXHJcbiAgWzE3NDQuNTQ0OCwgMjQwLjUwNjU4XSxcclxuICBbMTc0OS40MjQzLCAyNDMuMDAyMDhdLFxyXG4gIFsxNzM3Ljk0NjQsIDIzNy4yOTIzM10sXHJcbiAgWzE3MzkuNjkxOCwgMjMxLjc1NjMzXSxcclxuICBbMTczNC41Mzk5LCAyMzAuNTk3MTVdLFxyXG4gIFsxNzMyLjgxNTYsIDIzNi40Njg0M10sXHJcbiAgWzE3MzAuMTgxOCwgMjMyLjU3MTU4XSxcclxuICBbMTcyNS43MDMyLCAyMzMuODg3NDJdLFxyXG4gIFsxNzIxLjg5NiwgMjM2LjI3ODU2XSxcclxuICBbMTcyOC4yODIxLCAyMjguNzIxMTJdLFxyXG4gIFsxNzIzLjY0MjcsIDIyOS42MTI0XSxcclxuICBbMTcxMS40MzA3LCAyMjcuNDI3NDZdLFxyXG4gIFsxNzExLjg4NzIsIDIzMy4wNTQxMV0sXHJcbiAgWzE3MDcuOTE5MiwgMjMwLjY4NjJdLFxyXG4gIFsxNzAzLjkxMzYsIDIyNy45NzI1XSxcclxuICBbMTcwNy40MjMsIDIyNS45NjI4MV0sXHJcbiAgWzE3MDMuNTExNCwgMjIyLjYwMDA0XSxcclxuICBbMTY5OS4xMTUsIDIyMi4wMzcyMl0sXHJcbiAgWzE2OTkuOTk3NiwgMjE1LjE1MTNdLFxyXG4gIFsxNzAyLjc5NzQsIDIxMC4xMzI5OF0sXHJcbiAgWzE3MDQuNTQ1MywgMjA1LjgyMjcyXSxcclxuICBbMTcwMS4xMTYyLCAyMDEuOTc0NjRdLFxyXG4gIFsxNjk5LjQ1NjgsIDE5Mi4zMTI1NV0sXHJcbiAgWzE2OTQuNDA1NiwgMTkxLjA2NjddLFxyXG4gIFsxNjg5Ljg2NDMsIDE5My4zNzkyMV0sXHJcbiAgWzE2OTEuMDQyMSwgMTg2Ljc4OF0sXHJcbiAgWzE2OTcuNzU5OSwgMTg0LjAzMjIzXSxcclxuICBbMTY5Ny45NzgsIDE4Ny44Nzc1XSxcclxuICBbMTcwMy4xMDk0LCAxODcuNDYyMzFdLFxyXG4gIFsxNzAzLjE2MTQsIDE4Mi4xNjgxMl0sXHJcbiAgWzE3MDguMDA1MiwgMTgzLjM3NTE3XSxcclxuICBbMTcxMy40NTE4LCAxODYuODQyMDRdLFxyXG4gIFsxNzE4LjE3NSwgMTg0LjM2MzFdLFxyXG4gIFsxNzIyLjcyMDIsIDE4NS4yNjY2M10sXHJcbiAgWzE3MjYuNzg1NiwgMTgyLjg0NDQyXSxcclxuICBbMTczMi42MzQsIDE4NC4wNjI5XSxcclxuICBbMTcyNy44MDg4LCAxODguMTYzNV0sXHJcbiAgWzE3MjMuMzE4MSwgMTkwLjk3NjYyXSxcclxuICBbMTcyMi45NTI0LCAxOTYuMjkxNjNdLFxyXG4gIFsxNzI2Ljc0MDIsIDE5My4yNjYzNF0sXHJcbiAgWzE3MzEuNzY2NSwgMTk0LjcyODhdLFxyXG4gIFsxNzI3LjQ4MzksIDE5OC4xNzE2M10sXHJcbiAgWzE3MzQuNDQ4OSwgMTk4Ljg3MzkzXSxcclxuICBbMTc0My4wODY0LCAxOTkuMDA2NTJdLFxyXG4gIFsxNzM4Ljk4MzksIDIwNC45MjE3Ml0sXHJcbiAgWzE3MzIuNjAxNywgMjAzLjkwNTI0XSxcclxuICBbMTczOC40NDc1LCAxOTYuOTE0NDldLFxyXG4gIFsxNzI1LjU5MzEsIDIwMy4wMjczMV0sXHJcbiAgWzE3MjcuOTY0MiwgMjA2LjkyMzkyXSxcclxuICBbMTcyNC4xODk1LCAyMTAuMjIyNjNdLFxyXG4gIFsxNzE5LjIzNjEsIDIyMC40Mzk4Ml0sXHJcbiAgWzE3MjIuMzA3NiwgMjE1LjUyMTQyXSxcclxuICBbMTcxOC43MDU4LCAyMTIuMDI2ODZdLFxyXG4gIFsxNzE0LjIxODYsIDIwOS4wMDc3OF0sXHJcbiAgWzE3MTAuMDMwOSwgMjE0LjI2NDc3XSxcclxuICBbMTcwOC43OTg2LCAyMDguNzE1OTFdLFxyXG4gIFsxNzA1LjI1MzMsIDIxMy41OTIzM10sXHJcbiAgWzE3MDUuMDMzNywgMjE4LjI1NDYyXSxcclxuICBbMTcxMC4wOTM5LCAyMjIuNzQ3ODVdLFxyXG4gIFsxNzEzLjY1MjMsIDIyMC42ODM5Nl0sXHJcbiAgWzE3MTUuNDM1LCAyMjUuMDUwNjldLFxyXG4gIFsxNzE1LjIwMDksIDIyOS41NjkzNF0sXHJcbiAgWzE3MjAuMTQ1LCAyMjYuMjE0ODldLFxyXG4gIFsxNzE5LjY2MzEsIDIzMC43ODQ0NV0sXHJcbiAgWzE3MTcuMDYyLCAyMzQuMTkxNDddLFxyXG4gIFsxNzE0LjYwNzksIDIzNy43MTI5Ml0sXHJcbiAgWzE3MTAuNTg2NCwgMjM3LjU5ODgyXSxcclxuICBbMTcwOS41MzUsIDI0MS4yOTU4Ml0sXHJcbiAgWzE3MDUuNTg1NywgMjM5LjkxNjc1XSxcclxuICBbMTcwNi44Nzg3LCAyMzUuNzIyOTVdLFxyXG4gIFsxNzAzLjc2OTcsIDIzMi42NjFdLFxyXG4gIFsxNzAyLjIzNjEsIDIzNi43ODU4Nl0sXHJcbiAgWzE3MDEuMjAzNCwgMjQwLjYxMTEzXSxcclxuICBbMTY5Ny4yNjQ5LCAyNDEuNDQ5OThdLFxyXG4gIFsxNjkzLjY5MjUsIDIzOS4zMjc3NF0sXHJcbiAgWzE2OTEuNjYxNiwgMjQyLjU4MTM5XSxcclxuICBbMTY4OS44MDYsIDI0Ni4wMTkwNF0sXHJcbiAgWzE2ODYuNjk2OCwgMjQ4LjM4OTI4XSxcclxuICBbMTY4NC40MzQ5LCAyNTEuNTExNjZdLFxyXG4gIFsxNjg0LjE1MjIsIDI1NC44Nzk5NF0sXHJcbiAgWzE2ODQuNDcyOSwgMjU4LjI4OTAzXSxcclxuICBbMTY4NC41NjkzLCAyNjEuNzU1ODZdLFxyXG4gIFsxNjg4LjExMTksIDI2MS4zNjU0NV0sXHJcbiAgWzE2OTIuNjA4NCwgMjU2LjI5NTRdLFxyXG4gIFsxNjg4LjM4NDgsIDI1Ny4zMDIxMl0sXHJcbiAgWzE2ODguMjU3NiwgMjUyLjkxNTQ3XSxcclxuICBbMTY5MS43MTU4LCAyNTAuMTY4MzddLFxyXG4gIFsxNjk0Ljc2NTUsIDI0NS41MjU2Ml0sXHJcbiAgWzE2OTkuNTE2OCwgMjQ2LjU4OTM0XSxcclxuICBbMTcwMy45MzM4LCAyNDUuMDAyNjddLFxyXG4gIFsxNzA4LjY1ODYsIDI0Ni4yNTMzM10sXHJcbiAgWzE3MTQuMjg2NiwgMjQyLjM3Njk1XSxcclxuICBbMTcxOC42MTY3LCAyMzkuNzM3NDNdLFxyXG4gIFsxNzIwLjQwODcsIDI0NC4wMjU3Nl0sXHJcbiAgWzE3MjQuMjM5NywgMjQxLjI4MTcxXSxcclxuICBbMTcyOC4xMDQxLCAyMzguNzMyNzFdLFxyXG4gIFsxNzMyLjg5OCwgMjQyLjEzMjhdLFxyXG4gIFsxNzM4LjU1MDgsIDI0My44MTcyNl0sXHJcbiAgWzE3MjcuOTIzNSwgMjQ1LjUzNDk3XSxcclxuICBbMTczMy4zNTk1LCAyNTEuNjI4NF0sXHJcbiAgWzE3NDUuOTc0OSwgMjUyLjg2MzA4XSxcclxuICBbMTc0My42OTg2LCAyNDYuMzUxOTNdLFxyXG4gIFsxNzM5LjcyNjksIDI1MS4wOTk2N10sXHJcbiAgWzE3MzcuNjYwMywgMjU2Ljc5NDI1XSxcclxuICBbMTczNy4zODg5LCAyNjMuNTM2NjhdLFxyXG4gIFsxNzMyLjU5MjIsIDI1OC45MTFdLFxyXG4gIFsxNzMwLjExMTUsIDI2NC41MDI4XSxcclxuICBbMTcyNy45MDE5LCAyNzEuMTA1NzddLFxyXG4gIFsxNzI2LjczNDUsIDI3Ny43MjA4M10sXHJcbiAgWzE3MjIuMjUyOSwgMjc5LjM3MTc3XSxcclxuICBbMTcyNS41ODc2LCAyODMuNDk1NV0sXHJcbiAgWzE3MzEuMTgxNSwgMjc1LjYwMThdLFxyXG4gIFsxNzM1Ljg5MzcsIDI3NC4zMzMzN10sXHJcbiAgWzE3MzMuMzY0LCAyNjguODYxNzJdLFxyXG4gIFsxNzM5LjY4ODIsIDI2OC45MzU3M10sXHJcbiAgWzE3MzUuMDMwNSwgMjgwLjg2NTQyXSxcclxuICBbMTczMC4yMjE0LCAyODEuOTI3OTJdLFxyXG4gIFsxNzM1LjAwMTcsIDI4OC4zMzAyNl0sXHJcbiAgWzE3MjguOTYsIDI4Ny45NDE5Nl0sXHJcbiAgWzE3MjMuNjk0OCwgMjkzLjI1NDVdLFxyXG4gIFsxNzIwLjI1MywgMjgzLjYxMl0sXHJcbiAgWzE3MjIuNjIzOCwgMjg3LjE1NTI0XSxcclxuICBbMTcxNi4xOTA5LCAyODUuODIyNjNdLFxyXG4gIFsxNzE2LjMwNDMsIDI4MC4yODg5N10sXHJcbiAgWzE3MTMuMDY5MiwgMjc0Ljg4MjA4XSxcclxuICBbMTcyMy4zMzY5LCAyNzMuODU1NTNdLFxyXG4gIFsxNzE3Ljc3NzcsIDI3NS40NTA1M10sXHJcbiAgWzE3MDkuMzc3NiwgMjY3LjIxNTFdLFxyXG4gIFsxNzEzLjc5MjcsIDI3MC4xOTQ2XSxcclxuICBbMTcxOS40MjU3LCAyNzAuMDc5OV0sXHJcbiAgWzE3MjQuMzgxOCwgMjY2LjY4NTldLFxyXG4gIFsxNzA4LjgzMjksIDI1NC4zNzkxMl0sXHJcbiAgWzE3MDguMjI1MywgMjYwLjU4MjJdLFxyXG4gIFsxNzA0LjMxNzcsIDI2NS40ODk0XSxcclxuICBbMTcwMS4zMzkxLCAyNjEuNjg5N10sXHJcbiAgWzE3MDMuMjQzMywgMjU2Ljk3NjYyXSxcclxuICBbMTY5Ny4yOTYzLCAyNTguMzEzNzVdLFxyXG4gIFsxNjkyLjI3MjgsIDI2MC44OTA1XSxcclxuICBbMTY5Ni4zMzE4LCAyNjIuODQwOTRdLFxyXG4gIFsxNjkzLjkwMDksIDI2Ni41NTY2NF0sXHJcbiAgWzE2ODkuODQwMSwgMjY1LjA3NTY1XSxcclxuICBbMTY5NS4xMjE1LCAyNzEuNzE5NDhdLFxyXG4gIFsxNjk4Ljk5NDUsIDI2Ni43NjU0NF0sXHJcbiAgWzE2OTkuMjQ3OSwgMjcxLjMxODddLFxyXG4gIFsxNzA4LjI4NzgsIDI3My42Mzc3Nl0sXHJcbiAgWzE3MDQuOTI1OCwgMjc2LjkyMDcyXSxcclxuICBbMTcwNi40NDAxLCAyODAuNzExXSxcclxuICBbMTcwNC4wMjM4LCAyNzAuNzg1NjRdLFxyXG4gIFsxNzAxLjM2MDYsIDI3NS4zNDc1XSxcclxuICBbMTY5Ny44MDUzLCAyNzcuMTMzNjddLFxyXG4gIFsxNzAxLjA0NDgsIDI4MS4xOTUzN10sXHJcbiAgWzE2OTUuOTExNCwgMjgyLjI3MDI2XSxcclxuICBbMTY5My44MzQsIDI3Ni44NDMyXSxcclxuICBbMTY4OS44Njc0LCAyNzYuNTkyNzRdLFxyXG4gIFsxNjg1LjMyNTMsIDI3Ni4xNzYyXSxcclxuICBbMTY4NS4yMDg0LCAyODAuMDc1MzVdLFxyXG4gIFsxNjg0LjYxOTQsIDI4NC4yOTkwN10sXHJcbiAgWzE2ODIuOTU0MywgMjg4LjY0MDhdLFxyXG4gIFsxNjgxLjY0ODEsIDI5Mi44ODIwOF0sXHJcbiAgWzE2NzcuODE2MiwgMjk1LjMwMjZdLFxyXG4gIFsxNjgwLjczODIsIDI5OC43NDA0OF0sXHJcbiAgWzE2NzguMzIxNSwgMzAxLjEzMjA1XSxcclxuICBbMTY3My40NzkyLCAzMDYuMjExMTJdLFxyXG4gIFsxNjc1Ljc2NDUsIDMwOS44MTg3XSxcclxuICBbMTY3OC4wNjksIDMwNS45NzA0XSxcclxuICBbMTY4MS45MjExLCAzMDUuMTc3OF0sXHJcbiAgWzE2NzUuMjAzOSwgMzAyLjU4MDM4XSxcclxuICBbMTY3My43NDUxLCAyOTguMDIzXSxcclxuICBbMTY2OS4xNTU2LCAyOTkuMTA4NThdLFxyXG4gIFsxNjcxLjM5MDEsIDMwMi4wNzk5Nl0sXHJcbiAgWzE2NjguNTg3OSwgMzA1LjQwMjVdLFxyXG4gIFsxNjY2LjUwNjYsIDMwMi4yMTMzOF0sXHJcbiAgWzE2NjkuMjE2OCwgMjk1LjI1MTddLFxyXG4gIFsxNjY2LjYyMSwgMjkxLjg0OThdLFxyXG4gIFsxNjYzLjkxNjQsIDI5NC42MTE0NV0sXHJcbiAgWzE2NjUuMDIxLCAyOTguMTgzMDRdLFxyXG4gIFsxNjYwLjc0OTQsIDI5Ny4wNjI5XSxcclxuICBbMTY1OS4xOTMyLCAzMDAuMDA5NTVdLFxyXG4gIFsxNjYyLjgxODcsIDMwMS42NjM1NF0sXHJcbiAgWzE2NjQuMDYwMywgMzA2LjM4MzczXSxcclxuICBbMTY2NS45NTAzLCAzMDkuNTcyMDJdLFxyXG4gIFsxNjYyLjIxMTUsIDMxMS44NDEwNl0sXHJcbiAgWzE2NTkuNzEzNCwgMzA4LjQ5NDldLFxyXG4gIFsxNjU4LjM0MiwgMzEzLjM2OTc4XSxcclxuICBbMTY1Ni44ODE1LCAzMTcuODk4NjJdLFxyXG4gIFsxNjYyLjI2NTksIDMyMS41MDc1NF0sXHJcbiAgWzE2NjAuMTA2OCwgMzI1LjEyNzk2XSxcclxuICBbMTY1Ny43MTg1LCAzMjguNzg0XSxcclxuICBbMTY1Ny4xMTgyLCAzMzIuOTUyMjddLFxyXG4gIFsxNjU1LjUxMDUsIDMyMy40NDYyM10sXHJcbiAgWzE2NTIuODkzMSwgMzI3LjI3MzM1XSxcclxuICBbMTY1Mi4zNDU3LCAzMzEuNTgxMjRdLFxyXG4gIFsxNjQ4LjI1MzgsIDMzNC4zMjQ2OF0sXHJcbiAgWzE2NDUuNDI2LCAzMzguMDkzMl0sXHJcbiAgWzE2NDIuNTcwOCwgMzQxLjU2MzJdLFxyXG4gIFsxNjQwLjE5OTgsIDM0NS4yMjY3OF0sXHJcbiAgWzE2NDMuNjg4NywgMzQ3LjU3MzldLFxyXG4gIFsxNjQ3LjIzNiwgMzQ0LjE0MzJdLFxyXG4gIFsxNjUwLjAzOTYsIDMzOS45NjI0Nl0sXHJcbiAgWzE2NTIuOTI2NSwgMzM2LjI3NDMyXSxcclxuICBbMTY1NC45MjcxLCAzNDEuMzM2MzZdLFxyXG4gIFsxNjUxLjk3MDIsIDM0NC42ODk3XSxcclxuICBbMTY1Ni4yNTYzLCAzNDYuNjQyODhdLFxyXG4gIFsxNjUyLjYzMzQsIDM0OS40MzM3XSxcclxuICBbMTY0OC4zNjk5LCAzNDkuMDk4NzJdLFxyXG4gIFsxNjQ0Ljk0NjUsIDM1Mi4xMDgxNV0sXHJcbiAgWzE2NDAuNDk3LCAzNTEuOTU1MTRdLFxyXG4gIFsxNjM3Ljg1NzcsIDM0OC40MTUwNF0sXHJcbiAgWzE2MjQuMDQ5MywgMzQ3LjkwNl0sXHJcbiAgWzE2MjAuNjM1OSwgMzUwLjgxMzFdLFxyXG4gIFsxNjE3LjA2MTgsIDM1Mi44NjYzM10sXHJcbiAgWzE2MTMuODk5NCwgMzU0Ljk2NzYyXSxcclxuICBbMTYxMS40NDgyLCAzNTcuMjI3MzZdLFxyXG4gIFsxNjA4LjU5NTcsIDM1OS4wNzA3NF0sXHJcbiAgWzE2MTYuODg2MiwgMzU3LjU3Njg3XSxcclxuICBbMTYxNi44OCwgMzYyLjE3NjI3XSxcclxuICBbMTYxMy42NDI2LCAzNjUuNTUxNTddLFxyXG4gIFsxNjA5Ljk0NzMsIDM2My4wMzQyN10sXHJcbiAgWzE2MDcuNjk1NywgMzY2LjAwNjQ0XSxcclxuICBbMTYxMy4zNDY3LCAzNjAuNTc0MzRdLFxyXG4gIFsxNjIxLjEyOTYsIDM1NS41Mzk5Ml0sXHJcbiAgWzE2MjAuMjg1NiwgMzU5LjU3MDg2XSxcclxuICBbMTYyNC4xMTU1LCAzNjAuMTE4MDRdLFxyXG4gIFsxNjI2LjM0NTIsIDM1Ni44MDg0NF0sXHJcbiAgWzE2MzAuOTcxOSwgMzU4LjQ1NzI0XSxcclxuICBbMTYzOS4zMzQ2LCAzNTcuMTQ0NDddLFxyXG4gIFsxNjQzLjM0OTIsIDM1Ni4zMTU5OF0sXHJcbiAgWzE2NDcuNDEyLCAzNTguNDI3OThdLFxyXG4gIFsxNjUyLjgwOTEsIDM1OC44NDY4Nl0sXHJcbiAgWzE2NDUuNTc0NywgMzY4LjAxMzUyXSxcclxuICBbMTYzOS42ODg4LCAzNjguMDM2NjJdLFxyXG4gIFsxNjM4Ljg0NjksIDM2Mi41NTUxNV0sXHJcbiAgWzE2MzUuMDcwOCwgMzU4LjAxOTFdLFxyXG4gIFsxNjQzLjU3NTcsIDM2MS43ODAwM10sXHJcbiAgWzE2NDkuNTgzNywgMzYzLjU1Njg1XSxcclxuICBbMTY0OS4yMTg1LCAzNTQuMjU3NjZdLFxyXG4gIFsxNjUzLjc1NzMsIDM1My45Nzc4N10sXHJcbiAgWzE2NTcuNjcwOCwgMzUxLjUwNjZdLFxyXG4gIFsxNjYyLjE0NywgMzUzLjEyMjUzXSxcclxuICBbMTY1OC4xNTQ0LCAzNTYuOTA2ODNdLFxyXG4gIFsxNjcyLjI2MzQsIDM1Ny45NzU3XSxcclxuICBbMTY3MC44MjA2LCAzNjQuNzI3NV0sXHJcbiAgWzE2ODUuMDc2NCwgMzczLjU2ODQyXSxcclxuICBbMTY4MS4xMDExLCAzNzYuNjk3NV0sXHJcbiAgWzE2NzYuMzIwNiwgMzc1LjUwOTc0XSxcclxuICBbMTY3MC4zOTA5LCAzODguNDgzMjJdLFxyXG4gIFsxNjY2LjY4MTUsIDM5My42Njc5N10sXHJcbiAgWzE2NjQuNjczOCwgMzk4Ljg5NjQ4XSxcclxuICBbMTY1OC44NzgzLCAzOTkuNTAyNTNdLFxyXG4gIFsxNjU1LjA4OTcsIDQwNC45NTczNF0sXHJcbiAgWzE2NDcuODE2LCAzOTUuNzkwNDddLFxyXG4gIFsxNjQwLjc0NTcsIDM5Ni4yNzM4XSxcclxuICBbMTYzMy44MTgxLCAzOTkuNzA2M10sXHJcbiAgWzE2NDQuMjc5OCwgMzg5LjYyMDM2XSxcclxuICBbMTY0MC4yOTA4LCAzNzMuNjkwOTJdLFxyXG4gIFsxNjM0LjU5NTUsIDM3Ny4wOTA4OF0sXHJcbiAgWzE2MjcuMzU0NSwgMzc2LjI5MzY0XSxcclxuICBbMTYzMC4xNjU1LCAzODIuMjQ2OTVdLFxyXG4gIFsxNjI2Ljc1NTQsIDM4Ny4zODMwM10sXHJcbiAgWzE2MjAuNzEsIDM4OC43MTg0NF0sXHJcbiAgWzE2MTguNTQ0OSwgMzgyLjcwNzJdLFxyXG4gIFsxNjIyLjY2MiwgMzc5LjU4Nzk4XSxcclxuICBbMTYyMS40MDYyLCAzNzQuMTIwOTddLFxyXG4gIFsxNjE3LjM1OTEsIDM3Ny4yNTk0Nl0sXHJcbiAgWzE2MTMuMzIwMywgMzgwLjM1OTJdLFxyXG4gIFsxNjA5LjA1NiwgMzgzLjgxMTM0XSxcclxuICBbMTYwOC44Mjc2LCAzODguNzc3N10sXHJcbiAgWzE2MDQuOTE0OCwgMzg3LjMyMTYyXSxcclxuICBbMTYwOS42NjE0LCAzOTIuNTg5MDVdLFxyXG4gIFsxNjEzLjQ2MjQsIDM4Ni4yNzQ2XSxcclxuICBbMTYwNC41NzkxLCAzODIuNTY5OTJdLFxyXG4gIFsxNjAwLjU5MDgsIDM4My4yNzQ3NV0sXHJcbiAgWzE1OTYuODgxNSwgMzgzLjA2MDE1XSxcclxuICBbMTU5My40MTA5LCAzODIuMzc0NzNdLFxyXG4gIFsxNTkwLjE5NTEsIDM4NC4wMDIyNl0sXHJcbiAgWzE1OTIuMzg0LCAzOTEuNjY5MDRdLFxyXG4gIFsxNTkyLjgwNjUsIDM4Ny42NzE0NV0sXHJcbiAgWzE1OTYuNDg1MSwgMzg3LjIxNjldLFxyXG4gIFsxNjAwLjU1MDMsIDM4Ny41ODAyXSxcclxuICBbMTYwMS45NjcyLCAzOTEuNDM3MV0sXHJcbiAgWzE2MDQuNTU5NiwgMzkzLjk4MTY2XSxcclxuICBbMTYwNy4wOTUzLCAzOTcuNDExNl0sXHJcbiAgWzE2MTAuMjY2NiwgNDAxLjMwODg0XSxcclxuICBbMTYxMy42OTM0LCAzOTguMDI5NjNdLFxyXG4gIFsxNjE3LjkzOTcsIDQwMC40NTY2XSxcclxuICBbMTYxNS4wODEzLCA0MDMuNTk5OTVdLFxyXG4gIFsxNjE4LjcwMDksIDM5NS4xOTA1NV0sXHJcbiAgWzE2MjQuMzA0NywgMzk0LjQ0NDNdLFxyXG4gIFsxNjI3LjQ4NjgsIDM5OC45ODc4NV0sXHJcbiAgWzE2MjIuMzU5MywgNDAwLjU2NjYyXSxcclxuICBbMTYyNS42MzgxLCA0MjMuNzQ5OTRdLFxyXG4gIFsxNjIwLjg4NjUsIDQyNS45ODI4NV0sXHJcbiAgWzE2MjkuODI2OCwgNDE5Ljk1MzgzXSxcclxuICBbMTYzMS42MTQsIDQyNC4zNjA0XSxcclxuICBbMTYzOC45ODI1LCA0MzQuOTE1OV0sXHJcbiAgWzE2NDQuMzA3NiwgNDM1Ljc2NzU1XSxcclxuICBbMTY0Ni4wNDEzLCA0NDAuNDU1NzhdLFxyXG4gIFsxNjQ5LjI4OTYsIDQzNy4wNjc3Ml0sXHJcbiAgWzE2NTUuNzA1MSwgNDMxLjU5OTU4XSxcclxuICBbMTY1OS41NjgxLCA0MzUuOTYwM10sXHJcbiAgWzE2NTYuOTkwOCwgNDQwLjU2ODgyXSxcclxuICBbMTY1NC4zNTY5LCA0MzYuNTMwODJdLFxyXG4gIFsxNjUyLjI5NTcsIDQ0MC41OTg2M10sXHJcbiAgWzE2NDkuNDc3OSwgNDQzLjM0NDgyXSxcclxuICBbMTY1MS4yOTE5LCA0NDguOTcwMDZdLFxyXG4gIFsxNjUzLjc3NTksIDQ0NS4yNDUxOF0sXHJcbiAgWzE2NTguMjg2MSwgNDQ0LjcyNDczXSxcclxuICBbMTY2MS41NzYyLCA0NTEuMDU3NjhdLFxyXG4gIFsxNjY0Ljk2NDcsIDQ1My41NTFdLFxyXG4gIFsxNjY2LjAyODMsIDQ1Ny40OTc4Nl0sXHJcbiAgWzE2NjYuMTkxMiwgNDYyLjE1Mjc3XSxcclxuICBbMTY2Ny40NTI5LCA0NjYuMTU2OThdLFxyXG4gIFsxNjY2LjQyMTUsIDQ3MC44Mzg4XSxcclxuICBbMTY3MC4zNTQ3LCA0NjkuNTgxMDVdLFxyXG4gIFsxNjc2LjY1LCA0NzQuNDg4OTVdLFxyXG4gIFsxNjc0LjMyMTgsIDQ3MS4yNTA1NV0sXHJcbiAgWzE2NzEuNTQ3NSwgNDc0Ljc2NzUyXSxcclxuICBbMTY2Ny4yODcsIDQ3NS4yMTk1NF0sXHJcbiAgWzE2NjMuNDQ5LCA0NzcuMDQ2NzJdLFxyXG4gIFsxNjYyLjc1NDksIDQ3My4yODldLFxyXG4gIFsxNjYyLjIzNzMsIDQ2OS4xMzU0NF0sXHJcbiAgWzE2NjIuOTk2MiwgNDY1LjMxNDc2XSxcclxuICBbMTY1OS4xMTc0LCA0NjQuNDk3NDRdLFxyXG4gIFsxNjU3LjYxNywgNDY4LjUwNTk4XSxcclxuICBbMTY1OC41NzMsIDQ3Mi4xNjI5XSxcclxuICBbMTY1OS4yNTg1LCA0NzYuMDc4NDZdLFxyXG4gIFsxNjYwLjI0MzUsIDQ3OS43MzQxM10sXHJcbiAgWzE2NTkuNTQ5OCwgNDg1LjYxODEzXSxcclxuICBbMTY1OC45OTI5LCA0ODguOTkwNDJdLFxyXG4gIFsxNjU1LjgwNDksIDQ4Ni43ODg4Ml0sXHJcbiAgWzE2NTguMTcwOCwgNDgyLjU4MTNdLFxyXG4gIFsxNjU0Ljg5MzYsIDQ4Mi45MjIzNl0sXHJcbiAgWzE2NTIuMjgzMiwgNDg0LjkzOTE1XSxcclxuICBbMTY0OC4zODA2LCA0ODMuMjg1NF0sXHJcbiAgWzE2NDUuMjUzMiwgNDgwLjI5ODE2XSxcclxuICBbMTY0NC40MzA4LCA0ODQuNDA1MTJdLFxyXG4gIFsxNjQ5LjU3NywgNDg2Ljg2NTU3XSxcclxuICBbMTY1Mi40ODc5LCA0ODguOTUzNV0sXHJcbiAgWzE2NTUuMjIyMywgNDkwLjgyODFdLFxyXG4gIFsxNjU3Ljg3ODgsIDQ5Mi41ODA3XSxcclxuICBbMTY1OS45ODU2LCA0OTUuMTUwMTJdLFxyXG4gIFsxNjYwLjYzODQsIDQ5OC42MzI4N10sXHJcbiAgWzE2NjMuNzcxMiwgNDk3LjM1MDk1XSxcclxuICBbMTY2NC44ODAxLCA0OTMuNjc2MV0sXHJcbiAgWzE2NjYuMjE4MywgNTAwLjYxNDg3XSxcclxuICBbMTY2Mi41MTg2LCA1MDIuNTQ3NjddLFxyXG4gIFsxNjU4LjgxMiwgNTAxLjAzODVdLFxyXG4gIFsxNjU4Ljg4MTEsIDUwNC4zODUxM10sXHJcbiAgWzE2NTcuMDE2LCA1MDcuMzA1NzNdLFxyXG4gIFsxNjU0LjQzMjMsIDUwNS4wMzU2XSxcclxuICBbMTY1My40Mjg1LCA1MDkuMTAxMjZdLFxyXG4gIFsxNjUzLjkyMzgsIDUxMy4wNTVdLFxyXG4gIFsxNjUwLjUxNTUsIDUxMy4xNjI0XSxcclxuICBbMTY0OC45OTc4LCA1MTYuNzQwNl0sXHJcbiAgWzE2NTMuMzk3MSwgNTE4LjMwNTI0XSxcclxuICBbMTY0NS4zNTg2LCA1MTguMjUyOF0sXHJcbiAgWzE2NDMuNzk0OSwgNTIyLjYxMDE3XSxcclxuICBbMTY0MC4zODk5LCA1MTguNDUwNl0sXHJcbiAgWzE2NDMuMjc1NSwgNTE0LjYyNDE1XSxcclxuICBbMTY0Ni41MzEyLCA1MTIuNTYzMl0sXHJcbiAgWzE2NDMuNjQ5NCwgNTA5Ljc5MzQ2XSxcclxuICBbMTY0Ni43OTIsIDUwNy4wMTAzNV0sXHJcbiAgWzE2NDkuMzE4NSwgNTA5LjYzMjc1XSxcclxuICBbMTY1MS4wMDcsIDUwNi4zNzEyMl0sXHJcbiAgWzE2NDkuMTEyOCwgNTAzLjg5Mzc0XSxcclxuICBbMTY0NS44NjM4LCA1MDIuNzQ1MV0sXHJcbiAgWzE2NDMuNTA4NSwgNTA1LjE4NzQ3XSxcclxuICBbMTY0MC43NjgyLCA1MDYuOTYyNl0sXHJcbiAgWzE2MzYuNDg0NSwgNTA2LjQyODI4XSxcclxuICBbMTYzOC43MDk0LCA1MDkuNjI4NDJdLFxyXG4gIFsxNjQwLjEyMTgsIDUxMy4wNDc2N10sXHJcbiAgWzE2MzUuODI0NywgNTEyLjQ4NV0sXHJcbiAgWzE2MzQuMDU4MiwgNTA5LjM0NDk0XSxcclxuICBbMTYzMS4zNTc5LCA1MTMuMzk1XSxcclxuICBbMTYzMS44ODIyLCA1MTcuMDM2MTNdLFxyXG4gIFsxNjM2LjU4NzYsIDUxNi4wNjQ5NF0sXHJcbiAgWzE2MzUuMTEwMSwgNTIwLjA4NDddLFxyXG4gIFsxNjM4LjMyMSwgNTIzLjU4MzFdLFxyXG4gIFsxNjQxLjcwOTIsIDUyNy43MjIzXSxcclxuICBbMTYzNC45Njk3LCA1MzQuMDYzNV0sXHJcbiAgWzE2MzUuMzcxMywgNTI4LjU5NDY3XSxcclxuICBbMTYzMi43MDIsIDUyNC4xODQxNF0sXHJcbiAgWzE2MjUuNDI5LCA1MjIuNTc4XSxcclxuICBbMTYyOS40NDIzLCA1MjAuNjQ2NV0sXHJcbiAgWzE2MjguNzM1OCwgNTI2Ljk2MThdLFxyXG4gIFsxNjI0LjQyNDksIDUyOS41ODc0XSxcclxuICBbMTYyOS45MzQxLCA1MzIuMjk1N10sXHJcbiAgWzE2MjEuMjI4OSwgNTMzLjk1NjU0XSxcclxuICBbMTYyMy42MTkzLCA1NDMuMDA4NjddLFxyXG4gIFsxNjMyLjY5MjYsIDU0NC41MzEzXSxcclxuICBbMTYzNy4zNDI4LCA1NDQuNzkwMzRdLFxyXG4gIFsxNjM5LjIzOTEsIDUzOC41NjIzXSxcclxuICBbMTYzMi42ODI0LCA1MzkuNDQ3OF0sXHJcbiAgWzE2MzIuNTAyNCwgNTQ4LjgyNzldLFxyXG4gIFsxNjM3LjI2NjQsIDU1MC4zMjEwNF0sXHJcbiAgWzE2MjguMjgzOSwgNTU1LjAyMDc1XSxcclxuICBbMTYyNC40NDQzLCA1NTYuOTk1ODVdLFxyXG4gIFsxNjIwLjk4NywgNTU5Ljg0Njc0XSxcclxuICBbMTYxNi43NTc4LCA1NjIuMzc0Ml0sXHJcbiAgWzE2MTkuMzc4NCwgNTY0LjcyOTddLFxyXG4gIFsxNjIyLjc3MzQsIDU2NC4xMDM0NV0sXHJcbiAgWzE2MjUuMTE0LCA1NjYuNzY2MzZdLFxyXG4gIFsxNjI4LjYzMTcsIDU2Ny41MTA0XSxcclxuICBbMTYzMS4xNDA0LCA1NzAuMDI3OV0sXHJcbiAgWzE2MzQuODM1MiwgNTY5LjEwODddLFxyXG4gIFsxNjM1LjgzMTksIDU3My4zMDddLFxyXG4gIFsxNjMzLjYzMDEsIDU3Ni44OTIxXSxcclxuICBbMTYzMi45NDkyLCA1ODAuOTc4NjRdLFxyXG4gIFsxNjMzLjUxODQsIDU4NS40ODA4M10sXHJcbiAgWzE2MzguMDQ5OCwgNTg2LjM2MDFdLFxyXG4gIFsxNjM3Ljc3NjEsIDU4MS42ODU5XSxcclxuICBbMTYzOC44OTE4LCA1NzcuNzI1MV0sXHJcbiAgWzE2NDAuNzQwOCwgNTc0LjI5OTc0XSxcclxuICBbMTY0NC45MjQ2LCA1NzQuNTY2OV0sXHJcbiAgWzE2NDkuMDY5MSwgNTczLjg5MzddLFxyXG4gIFsxNjQ3LjMyNDIsIDU2OS4xMTQ0XSxcclxuICBbMTY0Mi42MzQ0LCA1NjYuNzY0Ml0sXHJcbiAgWzE2NDIuODgyOCwgNTcwLjY2NDVdLFxyXG4gIFsxNjM4Ljc3NTYsIDU2OS42MTY0Nl0sXHJcbiAgWzE2MzcuNzc0OCwgNTY1LjIwMTk3XSxcclxuICBbMTYzMy40ODM5LCA1NjUuMzE3MjZdLFxyXG4gIFsxNjI5Ljc3LCA1NjMuNjIxOV0sXHJcbiAgWzE2MjUuNzA3OCwgNTYxLjU1MTNdLFxyXG4gIFsxNjI5LjI0NjEsIDU1OS41NzAyXSxcclxuICBbMTYzMi4zMzM3LCA1NTcuMDk1NDZdLFxyXG4gIFsxNjMyLjY4NzUsIDU1Mi45MjA4XSxcclxuICBbMTYzNi40ODU0LCA1NTUuNjYwMDNdLFxyXG4gIFsxNjM0LjE0ODgsIDU2MC45NDUzXSxcclxuICBbMTYzOC4wODE4LCA1NjAuNDAxMjVdLFxyXG4gIFsxNjQwLjMxNjMsIDU1Ny4wNDUwNF0sXHJcbiAgWzE2NDQuMDQ5MiwgNTU3Ljk3MTldLFxyXG4gIFsxNjQxLjIwODksIDU2Mi41NDU1M10sXHJcbiAgWzE2NDQuODcwNywgNTYzLjA0NV0sXHJcbiAgWzE2NDguMzkyNywgNTY0LjQxNTRdLFxyXG4gIFsxNjUxLjgxNzEsIDU2Ni41OTg0XSxcclxuICBbMTY1NS43ODYxLCA1NjQuNTExMzVdLFxyXG4gIFsxNjYwLjMyMTUsIDU2My43NDAxXSxcclxuICBbMTY2NC40NTgsIDU2Ni41MTVdLFxyXG4gIFsxNjYwLjUxNzEsIDU2OS40NjIzXSxcclxuICBbMTY1Ni4wNDc0LCA1NjkuNDE3Nl0sXHJcbiAgWzE2NTIuNTM4NSwgNTcxLjg5ODddLFxyXG4gIFsxNjUyLjg2NCwgNTc4LjAyNV0sXHJcbiAgWzE2NDcuNzQwNywgNTc4LjY0MTM2XSxcclxuICBbMTY1NC4yNzQ5LCA1ODQuNjk5OTVdLFxyXG4gIFsxNjQ4LjU4NzMsIDU4My42OTMzNl0sXHJcbiAgWzE2NTAuNzEyNSwgNTg4LjgwMDNdLFxyXG4gIFsxNjQ5LjAxMTIsIDU5My4yMjg3Nl0sXHJcbiAgWzE2NTUuNjI0NiwgNTkxLjI5MDY1XSxcclxuICBbMTY2MC43NjE1LCA1OTIuMzM1M10sXHJcbiAgWzE2NTkuODM5MiwgNTg2LjA5MTg2XSxcclxuICBbMTY2NS4wODk0LCA1ODcuNTMxNl0sXHJcbiAgWzE2NjQuMzY0OSwgNTgwLjM5NThdLFxyXG4gIFsxNjU4LjE5NjIsIDU4MC4yNjQzNF0sXHJcbiAgWzE2NTguMDA3NywgNTc0Ljk5NTldLFxyXG4gIFsxNjYzLjU0NjEsIDU3My43NzA1XSxcclxuICBbMTY2OC44MTQ3LCA1NzUuNjU2NF0sXHJcbiAgWzE2NjguMzg3NSwgNTY5LjY4MDVdLFxyXG4gIFsxNjczLjcyMDUsIDU3MC45MzkxXSxcclxuICBbMTY3NC4wNTIyLCA1NjUuMDc2OTddLFxyXG4gIFsxNjY5LjI1ODUsIDU2My42OTQ2XSxcclxuICBbMTY3MC43ODgxLCA1NTcuOTIwM10sXHJcbiAgWzE2NzYuMjU3OCwgNTU5LjAxMzRdLFxyXG4gIFsxNjc5Ljg2NTcsIDU2Mi4yNDg1NF0sXHJcbiAgWzE2NzkuODQ2OSwgNTY3Ljc0MzY1XSxcclxuICBbMTY3OS4zMDYyLCA1NzIuOTM3Ml0sXHJcbiAgWzE2NzQuOTk5NiwgNTc2Ljc3NDddLFxyXG4gIFsxNjgwLjI1MjgsIDU3OC45MzA5XSxcclxuICBbMTY4Mi44MzM1LCA1ODQuMDM3MDVdLFxyXG4gIFsxNjgxLjIxMjQsIDU4OS4zODIxXSxcclxuICBbMTY3NS40OTA1LCA1OTAuNTYwOF0sXHJcbiAgWzE2NzYuNzE1MSwgNTg0LjQxNzZdLFxyXG4gIFsxNjcxLjM5ODgsIDU4MS4wMzk4Nl0sXHJcbiAgWzE2NzAuNDc4NSwgNTg2LjMzNzldLFxyXG4gIFsxNjY5Ljg1MTYsIDU5Mi4xNTI4M10sXHJcbiAgWzE2NjUuNzMxOSwgNTk0LjAzMjFdLFxyXG4gIFsxNjYzLjE2NzIsIDU5Ny44OTc5NV0sXHJcbiAgWzE2NzIuNTEsIDU5Ni4xODI0XSxcclxuICBbMTY3Ny4xOTA0LCA1OTYuNTczXSxcclxuICBbMTY3NC40ODk2LCA2MDEuMTM0NzddLFxyXG4gIFsxNjc5Ljg3NzYsIDYwMS40MTA0XSxcclxuICBbMTY4NC4yODM4LCA2MDQuMDY1NzNdLFxyXG4gIFsxNjg4Ljc2NjUsIDYwMi42MzY1XSxcclxuICBbMTY5My42MjUyLCA2MDAuNjA2NzVdLFxyXG4gIFsxNjg1Ljk3ODMsIDU5My4zNjU3XSxcclxuICBbMTY4MS4xNTE1LCA1OTQuNjYwMDNdLFxyXG4gIFsxNjg0LjY3OTIsIDU5OC44NDg1XSxcclxuICBbMTY4OS44NzU5LCA1OTcuMDU4N10sXHJcbiAgWzE2OTIuMjY4MiwgNjA2LjgyNTVdLFxyXG4gIFsxNjk2Ljc1MjksIDYwOC44NTkxM10sXHJcbiAgWzE2ODYuODczMywgNjA4Ljc0MTQ2XSxcclxuICBbMTY4OS44MzEzLCA2MTMuNDEzOF0sXHJcbiAgWzE2ODIuMTUxNywgNjEzLjM1NDddLFxyXG4gIFsxNjgwLjk3NjMsIDYwNy43NTE5NV0sXHJcbiAgWzE2NzYuMDYwNSwgNjA2LjM3NDc2XSxcclxuICBbMTY3NS4zMjQ3LCA2MTIuMDkyM10sXHJcbiAgWzE2NjUuMjM3LCA2MjAuNjc4ODNdLFxyXG4gIFsxNjY4LjAsIDYzNy4zNjkyNl0sXHJcbiAgWzE2NzkuMjA1MywgNjM1LjI1MjZdLFxyXG4gIFsxNjczLjcyMzgsIDY0MS41NDM5NV0sXHJcbiAgWzE2NzAuMjI2MywgNjQ2LjU3ODI1XSxcclxuICBbMTY3OS44ODM0LCA2NDIuNzAzMDZdLFxyXG4gIFsxNjg1LjMzNTksIDYzOC4zNjM2XSxcclxuICBbMTY4Ny4yNDU3LCA2MzEuOTQ1OF0sXHJcbiAgWzE2OTIuMDk3NCwgNjM3LjQ2MDddLFxyXG4gIFsxNjk2LjY0NTQsIDY0NC41NDUwNF0sXHJcbiAgWzE2OTguNTgwOCwgNjM4LjI0OThdLFxyXG4gIFsxNjk1LjEwNDcsIDYzMS41MTcxXSxcclxuICBbMTcwNS43MjM5LCA2MjQuODkxN10sXHJcbiAgWzE3MTEuMzEzMiwgNjIwLjA2MDFdLFxyXG4gIFsxNzExLjgyODYsIDYyNS45MTk0M10sXHJcbiAgWzE3MTUuMjA3LCA2MzAuOTM4MV0sXHJcbiAgWzE3MDguOTI0LCA2MzEuODI1MjZdLFxyXG4gIFsxNzAxLjk3NDYsIDYzMC44NDA1XSxcclxuICBbMTY4OS41MTQyLCA2NDMuOTcyMTddLFxyXG4gIFsxNjkwLjI5NjQsIDY1MS45MTI5Nl0sXHJcbiAgWzE2NzYuNTc4NiwgNjQ5LjM0Mzc1XSxcclxuICBbMTY4My44NDQxLCA2NDcuMTk4MDZdLFxyXG4gIFsxNjgzLjg3NTUsIDY1My40NzY1XSxcclxuICBbMTY3OS44Njg5LCA2NTcuMjU5NDZdLFxyXG4gIFsxNjczLjk2NzUsIDY1Ni4yNDc5XSxcclxuICBbMTY2OC45MjAzLCA2NTIuOTgxMV0sXHJcbiAgWzE2NjguMDQ0NiwgNjU5LjcyMzJdLFxyXG4gIFsxNjYyLjgwMSwgNjU2LjQ3OTNdLFxyXG4gIFsxNjU4Ljg5OTcsIDY1Mi4xOTAwNl0sXHJcbiAgWzE2NjQuODk4LCA2NDIuNDM0MjddLFxyXG4gIFsxNjY0LjE5MzYsIDY0OS4yMTk1XSxcclxuICBbMTY1OC45NDI1LCA2NDUuNzY2MjRdLFxyXG4gIFsxNjU5LjAzNTgsIDYzOS43NTRdLFxyXG4gIFsxNjU0LjMxMDMsIDYzNi4yMTA4XSxcclxuICBbMTY0Ny45OTAyLCA2MzguMTAwNF0sXHJcbiAgWzE2NDEuNjk3OSwgNjIzLjI4NDVdLFxyXG4gIFsxNjQ5LjM1NTUsIDYyNC45MTI3XSxcclxuICBbMTY1NC4wOTEyLCA2MTkuOTQ5MV0sXHJcbiAgWzE2NTkuNjI5NCwgNjE4LjM0ODRdLFxyXG4gIFsxNjY0LjkxLCA2MTQuMTM0OF0sXHJcbiAgWzE2NjkuNzU4OSwgNjEyLjUzNDldLFxyXG4gIFsxNjYwLjY2OTEsIDYxMi41MzQzXSxcclxuICBbMTY1Ni4zNzQ1LCA2MTIuNTEyOF0sXHJcbiAgWzE2NTUuMDUyNiwgNjA3LjQ2MDddLFxyXG4gIFsxNjQ5LjYwMywgNjA3LjUzNzddLFxyXG4gIFsxNjQ3Ljc5MzcsIDYwMy4wNTY3Nl0sXHJcbiAgWzE2NTIuNzAzOSwgNjAxLjY3OTkzXSxcclxuICBbMTY1Ni45ODA3LCA2MDMuMDYzMV0sXHJcbiAgWzE2NjEuNDkyMSwgNjA3LjUzNjNdLFxyXG4gIFsxNjY3LjQxOTgsIDYwOC4wNTI1NV0sXHJcbiAgWzE2NzAuOTMxNCwgNjA0LjU4NzJdLFxyXG4gIFsxNjY4LjY4OCwgNTk5LjEyMjI1XSxcclxuICBbMTY2NS41MDE4LCA2MDMuMTY2XSxcclxuICBbMTY2MC45MDY3LCA2MDEuOTg3NzNdLFxyXG4gIFsxNjU3Ljc4NDksIDU5Ny40MDY1XSxcclxuICBbMTY1My4xNTYxLCA1OTYuMjE4NF0sXHJcbiAgWzE2NDguNjExOCwgNTk4LjE2ODFdLFxyXG4gIFsxNjQ0LjExMzgsIDU5OS43OTI5XSxcclxuICBbMTY0MC4yMTYyLCA2MDEuMTI0OV0sXHJcbiAgWzE2MzUuNTUsIDU5OS43MzQzXSxcclxuICBbMTYzNC41NzEsIDU5NS4yODY2XSxcclxuICBbMTYzOS40OTQ2LCA1OTUuOTk5NV0sXHJcbiAgWzE2NDQuMDg0NywgNTk0LjU4MDQ0XSxcclxuICBbMTY0NS4xMjE3LCA1ODkuMzQ0ODVdLFxyXG4gIFsxNjQzLjIzNDQsIDU4MC4yOTIzNl0sXHJcbiAgWzE2NDIuNzg1MiwgNTg1LjE4NTFdLFxyXG4gIFsxNjM5LjcyMTMsIDU5MC45NDJdLFxyXG4gIFsxNjM0LjYxMDQsIDU5MC40MjI0XSxcclxuICBbMTYzMC4zODY0LCA1OTMuMTgyODZdLFxyXG4gIFsxNjI2LjI2NjYsIDU5NC41OTQwNl0sXHJcbiAgWzE2MjIuMTU3MiwgNTkzLjk0NDldLFxyXG4gIFsxNjIwLjI2OTMsIDU5MC4zNDI0XSxcclxuICBbMTYyMi4yOTIyLCA1ODcuMDkyODNdLFxyXG4gIFsxNjE5LjM5MjgsIDU4NC42NDE0XSxcclxuICBbMTYxNS4yOTY2LCA1ODMuNDg2N10sXHJcbiAgWzE2MTAuODk0NCwgNTgzLjE0ODQ0XSxcclxuICBbMTYwNy4wNTY2LCA1ODIuMDgwOTNdLFxyXG4gIFsxNjAzLjY2MywgNTc5LjM5ODc0XSxcclxuICBbMTU5OC45MTUzLCA1ODMuMTEyNTVdLFxyXG4gIFsxNTk5LjY0NjIsIDU3OC40MTFdLFxyXG4gIFsxNTk5LjM4MjIsIDU3NC4yMzg3XSxcclxuICBbMTYwNi43OTU4LCA1NjguODgwNTVdLFxyXG4gIFsxNjExLjQ1MTgsIDU2NS42NzU5XSxcclxuICBbMTYxMi4zNTgzLCA1NzAuMjA5N10sXHJcbiAgWzE2MjEuMzEwOSwgNTc0Ljg4OTVdLFxyXG4gIFsxNjIzLjYxMDgsIDU3OS41OTA1XSxcclxuICBbMTYxOS4xODQ5LCA1ODAuMjIwNjRdLFxyXG4gIFsxNjE2Ljk3NDQsIDU3Ni43NTVdLFxyXG4gIFsxNjEzLjEzNzIsIDU3OS4yMzZdLFxyXG4gIFsxNjEyLjg3ODIsIDU3NC43MTEyNF0sXHJcbiAgWzE2MDguNDk3OCwgNTc3LjU0OF0sXHJcbiAgWzE2MDguNTk0MiwgNTcyLjg4MDldLFxyXG4gIFsxNjA0LjE3OTYsIDU3NC4xMzY4NF0sXHJcbiAgWzE2MDEuMTMxMywgNTY5LjY5OTQ2XSxcclxuICBbMTU5Ni4xMjEzLCA1NjcuMjUyNV0sXHJcbiAgWzE1OTkuMjI4MywgNTY0LjM1NjE0XSxcclxuICBbMTYwMy41MTk4LCA1NjUuNzY0NjVdLFxyXG4gIFsxNjA3LjEwNzcsIDU2My40MTY3NV0sXHJcbiAgWzE2MTAuMDg3OSwgNTYwLjgzMzJdLFxyXG4gIFsxNjEzLjgwMDUsIDU2MC45NDE5Nl0sXHJcbiAgWzE2MTUuOTM2OSwgNTY3LjI5MDM0XSxcclxuICBbMTYxNy4yMDk2LCA1NzIuMTE2Nl0sXHJcbiAgWzE2MjAuNzAyMSwgNTY5LjE4Nl0sXHJcbiAgWzE2MjUuMDA5LCA1NzEuMjgxXSxcclxuICBbMTYyNS45NTgzLCA1NzUuNTA1NV0sXHJcbiAgWzE2MzAuMDAwNywgNTczLjc1ODI0XSxcclxuICBbMTYyOC41ODI4LCA1NzkuMTQyNl0sXHJcbiAgWzE2MjQuODY0LCA1ODMuOTM5MzNdLFxyXG4gIFsxNjI5LjAzMzcsIDU4My45NjQxXSxcclxuICBbMTYyOS44MjEzLCA1ODguNTcxMTddLFxyXG4gIFsxNjI1LjYyNDYsIDU4OS41Njg1NF0sXHJcbiAgWzE2MTcuNzM1NywgNTk0LjE4NTldLFxyXG4gIFsxNjE1Ljk3NTMsIDU5OC4yNTI0NF0sXHJcbiAgWzE2MjIuNjMyMywgNTk4LjUyMzNdLFxyXG4gIFsxNjE5LjY3MzUsIDYwMi4zOTg0NF0sXHJcbiAgWzE2MTguMTk5MywgNjA3LjMwNjRdLFxyXG4gIFsxNjE5LjY1ODgsIDYxMi4xODM4XSxcclxuICBbMTYyNC44ODU1LCA2MTEuMjM5NV0sXHJcbiAgWzE2MzAuNjA5MywgNjE0LjYxOTI2XSxcclxuICBbMTYyMy41NjU0LCA2MDYuMjM2M10sXHJcbiAgWzE2MjYuNTEyLCA2MDIuMjA2Nl0sXHJcbiAgWzE2MjkuNjY5MiwgNTk4LjIyNTNdLFxyXG4gIFsxNjMyLjI4MDgsIDYwMy40MjE2M10sXHJcbiAgWzE2MjkuMTk3OSwgNjA3Ljc4Ml0sXHJcbiAgWzE2MzQuNDkyNCwgNjA5LjU4NF0sXHJcbiAgWzE2MzcuODI0LCA2MDUuNDA5NjddLFxyXG4gIFsxNjQzLjQ3MjQsIDYwNi4xMDA0Nl0sXHJcbiAgWzE2NDAuMzkwNiwgNjEwLjgxNjRdLFxyXG4gIFsxNjQ2LjA3ODYsIDYxMS44MjQ2XSxcclxuICBbMTY1MS42MDUsIDYxMy4xNDQxXSxcclxuICBbMTY0OC4wOTMxLCA2MTguNTI2NV0sXHJcbiAgWzE2NDIuNTQsIDYxNy4wNzM4NV0sXHJcbiAgWzE2MzYuNzc1NSwgNjE1Ljk4OTg3XSxcclxuICBbMTYzMy44ODYsIDYyMS4zMzM3NF0sXHJcbiAgWzE2MjUuMTI2MywgNjE2LjU1MjA2XSxcclxuICBbMTYyNy4zMDk5LCA2MjIuNjEzOF0sXHJcbiAgWzE2MjQuNjM4MywgNjI5LjMxODI0XSxcclxuICBbMTYxOC4xNzg2LCA2MzEuMTExNzZdLFxyXG4gIFsxNjE5LjI1OTUsIDYyNS44MzQ3XSxcclxuICBbMTYxMy4xMDg2LCA2MjYuNDc0Nl0sXHJcbiAgWzE2MTIuMTM1NywgNjMxLjQwNTZdLFxyXG4gIFsxNjA4LjAwMjQsIDYzNC45MDEyNV0sXHJcbiAgWzE2MDQuMDE3NiwgNjMwLjg1NTk2XSxcclxuICBbMTYwNy45ODQ1LCA2MjguNTY2OV0sXHJcbiAgWzE2MDguNTIwOCwgNjIzLjE3MzZdLFxyXG4gIFsxNjEyLjM0MDUsIDYyMS4wOTg3NV0sXHJcbiAgWzE2MTYuNzE2NywgNjIxLjAxNDgzXSxcclxuICBbMTYyMS44Njk0LCA2MjAuNTI0Nl0sXHJcbiAgWzE2MTcuNjIwOCwgNjE2LjE5OTZdLFxyXG4gIFsxNjEyLjQzMzMsIDYxNi4yNzcyXSxcclxuICBbMTYxMy42NTE3LCA2MTEuNTA0OTRdLFxyXG4gIFsxNjA0LjQ1NzgsIDYxMC4zMTM4NF0sXHJcbiAgWzE2MDguMTM4NywgNjEzLjE4ODg0XSxcclxuICBbMTYwNy44MjA2LCA2MTcuNzU1ODZdLFxyXG4gIFsxNjA0LjE0MjUsIDYyMC40MjcxXSxcclxuICBbMTYwNC40OTI2LCA2MjQuOTQ4Nl0sXHJcbiAgWzE2MDAuODgyMiwgNjI2Ljk0NTA3XSxcclxuICBbMTU5Ni43Mjg0LCA2MjQuNzc4NDRdLFxyXG4gIFsxNTkzLjEzMjYsIDYyNy4zNjU4NF0sXHJcbiAgWzE1OTQuMjc1NSwgNjMyLjMzMzVdLFxyXG4gIFsxNTg3LjkxOCwgNjI4LjQwNl0sXHJcbiAgWzE1OTEuNTA3OSwgNjIxLjYwMTddLFxyXG4gIFsxNTg2LjUxMDMsIDYxNy4xODI4Nl0sXHJcbiAgWzE1OTEuMzM3NiwgNjE0Ljg1ODldLFxyXG4gIFsxNTg2LjA3MiwgNjA5Ljc2MDldLFxyXG4gIFsxNTgwLjMxNjUsIDYxMi42NDYwNl0sXHJcbiAgWzE1ODAuMzgyMSwgNjA1Ljk1NzhdLFxyXG4gIFsxNTg1LjAyNDksIDYwMy40MTYxNF0sXHJcbiAgWzE1ODEuMzI2OSwgNTk5LjU1MjFdLFxyXG4gIFsxNTgzLjY4MDIsIDU5NS4wMjEzNl0sXHJcbiAgWzE1ODkuMTg4LCA1OTQuMDM0NF0sXHJcbiAgWzE1ODguMzA0MiwgNTk4Ljg2NDhdLFxyXG4gIFsxNTkwLjQwNDIsIDYwMy43ODJdLFxyXG4gIFsxNTkxLjU5NjIsIDYwOS4wMTI3Nl0sXHJcbiAgWzE1OTYuMTAxMywgNjExLjE4OTY0XSxcclxuICBbMTYwMC4yMTQxLCA2MTIuNDM3MTNdLFxyXG4gIFsxNjAyLjY0NjcsIDYxNi4wMTUyNl0sXHJcbiAgWzE1OTkuNTg4NywgNjIxLjE2NjldLFxyXG4gIFsxNTk2LjM2NzIsIDYxNy4zODM1XSxcclxuICBbMTYwMC4zMjkxLCA2MDYuODc0Nl0sXHJcbiAgWzE1OTUuODgxMywgNjA1LjE4MTVdLFxyXG4gIFsxNTk1LjY1NDUsIDYwMC4yMDQ0XSxcclxuICBbMTU5NC4xNjEzLCA1OTYuMTg4ODRdLFxyXG4gIFsxNTkzLjYwMjUsIDU5MS4yNDc0XSxcclxuICBbMTU5OC42MDczLCA1OTMuMjU5Ml0sXHJcbiAgWzE2MDIuNjY5NiwgNTk2Ljg2MDUzXSxcclxuICBbMTYwMS4xODY4LCA2MDEuMzA0Ml0sXHJcbiAgWzE2MDQuOTUyNCwgNjA0Ljk1OTRdLFxyXG4gIFsxNjA5LjAwMTIsIDYwNy45NTIxNV0sXHJcbiAgWzE2MTMuMTg3NywgNjA2LjMyMzVdLFxyXG4gIFsxNjEzLjU4OTEsIDYwMS43ODg5NF0sXHJcbiAgWzE2MDguMDY4NSwgNjAxLjQ5OTFdLFxyXG4gIFsxNjA4Ljk3OTIsIDU5Ni45MjY2NF0sXHJcbiAgWzE2MDQuNTUyNSwgNTkyLjI1ODU0XSxcclxuICBbMTYwOS4xMjMzLCA1OTEuNzY4OF0sXHJcbiAgWzE2MTMuMTQwOSwgNTkzLjc1XSxcclxuICBbMTYxNi4yMTY5LCA1ODguOTUwOF0sXHJcbiAgWzE2MTIuMTc0MSwgNTg3Ljg2NzRdLFxyXG4gIFsxNjA3LjMzMzcsIDU4Ny4yOTMxXSxcclxuICBbMTYwMy4zNDQ1LCA1ODQuOTQzODVdLFxyXG4gIFsxNjAwLjk5MzcsIDU4OC43ODI5Nl0sXHJcbiAgWzE1OTYuNDk0NiwgNTg3LjIwN10sXHJcbiAgWzE1OTMuNTQ1OCwgNTgyLjI2MzM3XSxcclxuICBbMTU5Mi4yMDY4LCA1ODYuMTQ4MjVdLFxyXG4gIFsxNTg5LjI4MDMsIDU4OC44MjE1XSxcclxuICBbMTU4NS41NDg1LCA1OTAuNjM3M10sXHJcbiAgWzE1ODIuMjg3MiwgNTg4LjA1Njk1XSxcclxuICBbMTU3OC4xNjEsIDU4OC40MjUwNV0sXHJcbiAgWzE1NzguNzUwNSwgNTg0LjMzODNdLFxyXG4gIFsxNTc0LjkxOTQsIDU4Mi40NDNdLFxyXG4gIFsxNTcxLjI4NiwgNTgyLjQ0MTJdLFxyXG4gIFsxNTY4LjIyMDUsIDU4MC4xODk1XSxcclxuICBbMTU3MC43MTA4LCA1NzcuNzU1Nl0sXHJcbiAgWzE1NzIuMzM0NiwgNTc0LjQxMjddLFxyXG4gIFsxNTc0Ljk4ODYsIDU3OC4xMjA2N10sXHJcbiAgWzE1NzkuNjc4NywgNTc2LjI1OTAzXSxcclxuICBbMTU4MC4xMTE1LCA1NzIuNTcyXSxcclxuICBbMTU4MS40MTk3LCA1NjguOTE3Nl0sXHJcbiAgWzE1ODYuMDIzNywgNTY3LjIyNThdLFxyXG4gIFsxNTgzLjc2NzIsIDU2Mi45MDQ2XSxcclxuICBbMTU4My4yNjc4LCA1NTUuMDA4NTRdLFxyXG4gIFsxNTgzLjEyMTMsIDU1OS4xMjgzXSxcclxuICBbMTU3OC43MzA1LCA1NjEuMzQ5XSxcclxuICBbMTU3OC45Nzk0LCA1NTcuMzEzMjNdLFxyXG4gIFsxNTc1LjkyNjksIDU1NS4wMjAzXSxcclxuICBbMTU3NS44NjY2LCA1NTAuNjA0NF0sXHJcbiAgWzE1NzEuOTAxMiwgNTQ5LjgzMjk1XSxcclxuICBbMTU2OC4zMDEzLCA1NDguMTMzNF0sXHJcbiAgWzE1NjguMzA2OSwgNTQ0LjE2ODc2XSxcclxuICBbMTU3MS42Mjc0LCA1NDEuODE1Ml0sXHJcbiAgWzE1NzYuMTkxNCwgNTQxLjMwMTY0XSxcclxuICBbMTU3OC41Nzg5LCA1NDQuNDk2Nl0sXHJcbiAgWzE1NzkuNjIzNSwgNTQ4LjIzNzldLFxyXG4gIFsxNTgwLjI5ODEsIDU1Mi4yODk5XSxcclxuICBbMTU3My44OTMxLCA1NDUuODA0MV0sXHJcbiAgWzE1NjQuMDU1MiwgNTQ2LjI3NzA0XSxcclxuICBbMTU2My42OTY4LCA1NDEuOTg2M10sXHJcbiAgWzE1NjIuNjQwOSwgNTM3Ljc5NjldLFxyXG4gIFsxNTY3LjIyNjksIDUzOS45NzYzXSxcclxuICBbMTU3MC40MTg1LCA1MzcuNTAyN10sXHJcbiAgWzE1NzEuMzUyNSwgNTMzLjk2NTJdLFxyXG4gIFsxNTczLjk0NzksIDUzNy45NDg3XSxcclxuICBbMTU2Ni43NzUzLCA1MzYuMTkwOF0sXHJcbiAgWzE1NjUuMjE2LCA1MzMuMTAyM10sXHJcbiAgWzE1NjguNjY0NiwgNTMyLjIwNTRdLFxyXG4gIFsxNTY5LjMyNTQsIDUyNS44ODcxNV0sXHJcbiAgWzE1NjQuNDI4LCA1MjAuMDE0NDddLFxyXG4gIFsxNTY0Ljg4NDgsIDUyNC43NDcxXSxcclxuICBbMTU2Ny4yOTk2LCA1MjguOTA1MzNdLFxyXG4gIFsxNTYzLjUzNDQsIDUyOS41MDIxXSxcclxuICBbMTU2MC43MDAzLCA1MjYuNjU3Ml0sXHJcbiAgWzE1NjAuMTY2MywgNTIyLjY0NDFdLFxyXG4gIFsxNTU5LjI4ODMsIDUxOC4yNDQ0NV0sXHJcbiAgWzE1NTcuMTQ2MiwgNTE0LjI5NzA2XSxcclxuICBbMTU1NC41MDQ1LCA1MDkuMDIwNF0sXHJcbiAgWzE1NTcuODIyNSwgNTA1LjgxNzU3XSxcclxuICBbMTU2MS40Nzg2LCA1MDMuMTg4MV0sXHJcbiAgWzE1NjUuNzMwMSwgNTAyLjI4NzJdLFxyXG4gIFsxNTY4LjU5NDUsIDQ5OS4yOTk4N10sXHJcbiAgWzE1NzIuNTU3MywgNDk3LjU3ODk1XSxcclxuICBbMTU3Ni4xMjIxLCA0OTQuNjU4N10sXHJcbiAgWzE1ODMuNDU3OSwgNDg5LjEwNTUzXSxcclxuICBbMTU4OC43ODMxLCA0OTEuMDY5OV0sXHJcbiAgWzE1OTIuNzQ5LCA0ODguNjc2MTVdLFxyXG4gIFsxNTk0LjMxMDgsIDQ5Mi43Njc1OF0sXHJcbiAgWzE1OTUuNjE1NCwgNDk3LjYwMzUyXSxcclxuICBbMTU5MC4yMTM5LCA0OTUuNjc0NDRdLFxyXG4gIFsxNTg1LjAzNzEsIDQ5NC4xOTE2NV0sXHJcbiAgWzE1ODAuNTA5NSwgNDk3LjExOTddLFxyXG4gIFsxNTc2LjI4MzgsIDUwMC41MDg2XSxcclxuICBbMTU4MC45NDI0LCA1MDIuMTM2OF0sXHJcbiAgWzE1NzcuOTc3LCA1MDYuMzY5ODddLFxyXG4gIFsxNTczLjUxMzcsIDUwNy4xNzUyM10sXHJcbiAgWzE1NzEuODMxLCA1MDIuMjk0OTJdLFxyXG4gIFsxNTY4LjYwOTcsIDUwNS45Nzg1OF0sXHJcbiAgWzE1NjMuNjg4NSwgNTA3LjIyMTE2XSxcclxuICBbMTU2MC40NTA3LCA1MTAuNjA2MjZdLFxyXG4gIFsxNTYzLjU1MTgsIDUxNS4wMzUzXSxcclxuICBbMTU2Ny45MzUyLCA1MTEuMDk2NF0sXHJcbiAgWzE1NzMuNzA2NCwgNTEzLjAwMzFdLFxyXG4gIFsxNTc5LjIyNCwgNTEzLjAxOThdLFxyXG4gIFsxNTgxLjg2MzMsIDUwOS4yMTE4OF0sXHJcbiAgWzE1ODUuOTY4NSwgNTExLjA1NzQ2XSxcclxuICBbMTU5MC41MzIzLCA1MTEuMDYxNzddLFxyXG4gIFsxNTk0LjcwNCwgNTE0LjA3NTU2XSxcclxuICBbMTU5NS4wMTcsIDUxOS43NDI5XSxcclxuICBbMTU4OS4yODk4LCA1MTYuNDgxOV0sXHJcbiAgWzE1ODEuNTgwNiwgNTIwLjIzODRdLFxyXG4gIFsxNTgzLjg1MzUsIDUxNS43NjA4Nl0sXHJcbiAgWzE1NzcuNzc3LCA1MTcuMzM4Nl0sXHJcbiAgWzE1NzMuNTM4MiwgNTE5LjE1OTg1XSxcclxuICBbMTU2OS4wMzU2LCA1MTYuNzAwNDRdLFxyXG4gIFsxNTY5LjA5NjQsIDUyMS42MDY2XSxcclxuICBbMTU3My4yOTExLCA1MjQuMjg4NjRdLFxyXG4gIFsxNTc3LjU5NiwgNTIyLjc1MDddLFxyXG4gIFsxNTc5Ljk5MywgNTI2Ljc2OTE3XSxcclxuICBbMTU4My43Njk3LCA1MjQuNzM0MjVdLFxyXG4gIFsxNTg2LjM1OTQsIDUyMC43M10sXHJcbiAgWzE1OTAuOTA4NywgNTIxLjQ5ODhdLFxyXG4gIFsxNTg5LjEzOTIsIDUyNS41MzM1N10sXHJcbiAgWzE1ODYuNjgxOSwgNTI4LjgwOTddLFxyXG4gIFsxNTgyLjU1LCA1MzAuMTkxOTZdLFxyXG4gIFsxNTg1LjQ2MjYsIDUzMy4yNzk1NF0sXHJcbiAgWzE1ODguMTU0MywgNTM3LjAxNDldLFxyXG4gIFsxNTgzLjgxMzcsIDUzNy4xNDU1XSxcclxuICBbMTU4MS4wMTI3LCA1MzQuNDEyODRdLFxyXG4gIFsxNTc4LjMwODMsIDUzMS40ODczXSxcclxuICBbMTU3NS45NTQ4LCA1MjcuOTAxNzNdLFxyXG4gIFsxNTcyLjA3NSwgNTI5LjM0NDI0XSxcclxuICBbMTU3NC42NTM0LCA1MzIuOTMxXSxcclxuICBbMTU3Ny4xMzkyLCA1MzYuMDcyOTRdLFxyXG4gIFsxNTc5Ljg4MjMsIDUzOC44ODQwM10sXHJcbiAgWzE1ODIuMTE2NiwgNTQyLjI2NzZdLFxyXG4gIFsxNTgzLjk4MzQsIDU0Ni41NDA1XSxcclxuICBbMTU4NS44MTUsIDU0MC43MTYxXSxcclxuICBbMTU4OC4xMzA5LCA1NDQuMTQ4ODZdLFxyXG4gIFsxNTkwLjc3MDgsIDU0MS4wNjUzN10sXHJcbiAgWzE1OTQuMTQ5MiwgNTQ0LjcxNzk2XSxcclxuICBbMTU5OC44NjQzLCA1NDIuMDg4NTZdLFxyXG4gIFsxNjAyLjMxNjgsIDUzOC43MDc0XSxcclxuICBbMTYwMi4yMDk4LCA1MzMuOTY0N10sXHJcbiAgWzE2MDcuMTI4NywgNTM5LjM5NjddLFxyXG4gIFsxNjA2LjgzMjMsIDUzNS4yNjY1NF0sXHJcbiAgWzE2MDUuODg0NCwgNTMwLjc1NzldLFxyXG4gIFsxNjE0LjUwNjYsIDUyNS43NzAxNF0sXHJcbiAgWzE2MDkuODY1NSwgNTI3LjY4OTMzXSxcclxuICBbMTYwOS43NzA4LCA1MjEuNjA1OV0sXHJcbiAgWzE2MDQuOTk1NCwgNTE2LjUzMzFdLFxyXG4gIFsxNTk5LjQ3MDUsIDUxOC4zNTUxXSxcclxuICBbMTU5OS4xMTA4LCA1MjQuMjcyMV0sXHJcbiAgWzE1OTYuOTQzMSwgNTI4LjU5MjY1XSxcclxuICBbMTU5NC4yMjI3LCA1MjUuMDA3Ml0sXHJcbiAgWzE1OTIuMzAyNywgNTI5LjI0MjddLFxyXG4gIFsxNTg5LjQ1NjIsIDUzMi41NjM5XSxcclxuICBbMTU5My44ODUsIDUzMy4zNTM4XSxcclxuICBbMTU5Mi4yNDA3LCA1MzYuNzk0NTZdLFxyXG4gIFsxNTk1LjAwNTUsIDU0MC4wMzA0XSxcclxuICBbMTU5Ny44MzcyLCA1MzYuOTM5MV0sXHJcbiAgWzE1OTcuOTE4MiwgNTMyLjYyXSxcclxuICBbMTYwMS4zNzg5LCA1MjkuMDg4M10sXHJcbiAgWzE2MDQuOTMzMSwgNTI1Ljk0NjRdLFxyXG4gIFsxNjAzLjY1MywgNTIxLjQxNjFdLFxyXG4gIFsxNjAwLjM3NDgsIDUxMy43NjA3XSxcclxuICBbMTYwMy45MTA0LCA1MTAuMzc2MDddLFxyXG4gIFsxNjA4LjI0NDEsIDUxMS4yODIzXSxcclxuICBbMTYwOS41Njc0LCA1MTYuMDY2MDRdLFxyXG4gIFsxNjEzLjc5MiwgNTE3LjE1Nl0sXHJcbiAgWzE2MTguMTEzMywgNTE1LjU3MDRdLFxyXG4gIFsxNjE4LjA0NDgsIDUxMC45MjYxMl0sXHJcbiAgWzE2MTQuNTM2NCwgNTA3Ljc2MzRdLFxyXG4gIFsxNjEzLjE5NDMsIDUxMi4wODU0NV0sXHJcbiAgWzE2MDkuODEzMSwgNTA2Ljg5ODc0XSxcclxuICBbMTYwNS4zNDg0LCA1MDQuOTU1MjZdLFxyXG4gIFsxNjAxLjA2ODUsIDUwNi4zMjExN10sXHJcbiAgWzE1OTcuOTczMywgNTA5LjYyMjNdLFxyXG4gIFsxNTkzLjk5MjQsIDUwNy40NjRdLFxyXG4gIFsxNTg5LjI5OTYsIDUwNS41NTU0XSxcclxuICBbMTU4NC44NjM4LCA1MDQuODAzNTZdLFxyXG4gIFsxNTg1LjQ2MTgsIDQ5OS4yNTY4NF0sXHJcbiAgWzE1ODkuODU3NSwgNTAwLjIzMzY0XSxcclxuICBbMTU5My40OTg0LCA1MDIuMTk4MV0sXHJcbiAgWzE1OTcuMzg4NSwgNTAzLjI4OTNdLFxyXG4gIFsxNjAxLjA2NjksIDUwMS4yNTEzNF0sXHJcbiAgWzE2MDQuNDk5LCA0OTguOTYyMjhdLFxyXG4gIFsxNjA3Ljc3NzgsIDQ5Ni40MTY3XSxcclxuICBbMTYxMC40MywgNDkyLjg2NzU1XSxcclxuICBbMTYxMS44MjE1LCA0OTguMzAwNjZdLFxyXG4gIFsxNjA4LjQ3MzQsIDUwMS42NzUxN10sXHJcbiAgWzE2MTIuODg2MSwgNTAzLjAwMjhdLFxyXG4gIFsxNjE1LjIzMDEsIDQ5Ni4wOTE1XSxcclxuICBbMTYxNS40NzcsIDQ5Mi4xMTU3OF0sXHJcbiAgWzE2MTEuOTk3OCwgNDg4LjI5NTE0XSxcclxuICBbMTYwOS4yMTcsIDQ4NC43MzA5XSxcclxuICBbMTYwNS4wNjA5LCA0ODMuODYwNzJdLFxyXG4gIFsxNjAwLjYzODcsIDQ4NC4wMzc1N10sXHJcbiAgWzE2MDEuNTI5LCA0NzkuNzc2ODZdLFxyXG4gIFsxNjA1LjMwNzksIDQ3OS41ODIzN10sXHJcbiAgWzE2MDcuNzEyNiwgNDc2LjY1NzQ0XSxcclxuICBbMTYxMC4wMDMyLCA0ODAuMjUzMjNdLFxyXG4gIFsxNjEzLjcxOTUsIDQ4My4xNzA3NV0sXHJcbiAgWzE2MjAuMTg4NywgNDkxLjkyODk2XSxcclxuICBbMTYyNC40NDYsIDQ5Mi40NTI0OF0sXHJcbiAgWzE2MjQuMTM4LCA0OTcuNDE2NV0sXHJcbiAgWzE2MTkuOTY0NCwgNDk2LjQ1NTJdLFxyXG4gIFsxNjIxLjQwNjUsIDUwMS42ODIyNV0sXHJcbiAgWzE2MTYuOTA4NCwgNTAwLjE1Njk4XSxcclxuICBbMTYxNy4wNDExLCA1MDQuMjg0MDZdLFxyXG4gIFsxNjIwLjA0ODUsIDUwNi40NzA5NV0sXHJcbiAgWzE2MjIuNDQ1MSwgNTA5Ljk1MDkzXSxcclxuICBbMTYyNS42ODg3LCA1MDIuMTA4MzRdLFxyXG4gIFsxNjI0LjM0NjMsIDUwNi4yNzI5NV0sXHJcbiAgWzE2MjguMDk0LCA1MDYuNTA1NDZdLFxyXG4gIFsxNjMwLjIxMTUsIDUwOS43ODg4XSxcclxuICBbMTYyNi42MDc4LCA1MTEuNDkxNjddLFxyXG4gIFsxNjI2Ljc2NzYsIDUxNi40ODk2XSxcclxuICBbMTYyMi42MDYyLCA1MTQuMTIzNl0sXHJcbiAgWzE2MjEuNzk5MSwgNTE5LjAwNzhdLFxyXG4gIFsxNjE2LjQ1MTIsIDUyMC45NzU5NV0sXHJcbiAgWzE2MjAuODgwNSwgNTI0LjQ4ODM0XSxcclxuICBbMTYxOC44OTA2LCA1MjkuMTcyMzZdLFxyXG4gIFsxNjE2Ljg5NDMsIDUzNi40NDY1XSxcclxuICBbMTYxNC45NDY3LCA1MzEuOTczNzVdLFxyXG4gIFsxNjEwLjUyODYsIDUzMi40NTJdLFxyXG4gIFsxNjExLjg2MTYsIDUzNi45NzFdLFxyXG4gIFsxNjEzLjc3NjcsIDU0MC45MDIzXSxcclxuICBbMTYxOC43MTQ3LCA1NDAuNjcyNl0sXHJcbiAgWzE2MjAuNDExLCA1NDUuNjM3Ml0sXHJcbiAgWzE2MjIuMzg4OCwgNTM4LjYwMDE2XSxcclxuICBbMTYyNi42NTUsIDUzNi4wMzkxXSxcclxuICBbMTYyNy42ODUzLCA1NDAuODA3MDddLFxyXG4gIFsxNjI4LjIzMjIsIDU0NS40MDddLFxyXG4gIFsxNjI4LjIwOCwgNTUwLjMzMjldLFxyXG4gIFsxNjI0LjExMDUsIDU0Ny44NDY3NF0sXHJcbiAgWzE2MjQuMTQxOCwgNTUyLjM3MDA2XSxcclxuICBbMTYxOS42NzQ4LCA1NTAuNzc5NF0sXHJcbiAgWzE2MjAuMTgzNSwgNTU0Ljk1NjNdLFxyXG4gIFsxNjE2Ljk4NzMsIDU1Ny42NDg4XSxcclxuICBbMTYxNS4xODAyLCA1NTMuNzI1Ml0sXHJcbiAgWzE2MTIuNDIyMSwgNTU2LjYxMTldLFxyXG4gIFsxNjA4Ljc0MywgNTU2LjIwMjddLFxyXG4gIFsxNjA1LjI3MjMsIDU1My4zMDJdLFxyXG4gIFsxNjA5Ljg1NjksIDU1MS40NDA5XSxcclxuICBbMTYxNC4yNzMyLCA1NTAuMjkzXSxcclxuICBbMTYxNi45NzM0LCA1NDcuNzIzM10sXHJcbiAgWzE2MTYuMjgyNywgNTQ0LjAwNDQ2XSxcclxuICBbMTYxMi4yNTIyLCA1NDYuNDQzXSxcclxuICBbMTYwNy41OTY5LCA1NDcuMDM1Nl0sXHJcbiAgWzE2MDkuNjM0MywgNTQyLjY2MDVdLFxyXG4gIFsxNjAzLjkzNzMsIDU0My40NDExXSxcclxuICBbMTYwMy41ODM1LCA1NDguODUyM10sXHJcbiAgWzE1OTkuNTI2NCwgNTQ2LjQyODY1XSxcclxuICBbMTU5Ny4yMTAyLCA1NTAuMTgzOTZdLFxyXG4gIFsxNTg5LjI1ODUsIDU0OC4wNjk0Nl0sXHJcbiAgWzE1ODUuNTQ0NiwgNTUxLjE5MThdLFxyXG4gIFsxNTkwLjU2MTIsIDU1My4yNTA4NV0sXHJcbiAgWzE1OTMuNDEwOSwgNTQ5LjI0ODddLFxyXG4gIFsxNTk1LjMzODcsIDU1NC45MjY0XSxcclxuICBbMTYwMC41NTY0LCA1NTIuNjA1Ml0sXHJcbiAgWzE2MDAuNTk5NywgNTU2Ljg0Njg2XSxcclxuICBbMTYwNS4zNTg0LCA1NTguMzA0Ml0sXHJcbiAgWzE2MDIuNDQ1LCA1NjEuMTcxNjNdLFxyXG4gIFsxNTk3LjA0NzQsIDU1OS44MTI2XSxcclxuICBbMTU5NC4wNDMyLCA1NjMuMjcxNTVdLFxyXG4gIFsxNTkxLjgwNjgsIDU1OC44ODcxXSxcclxuICBbMTU4Ny40Mzc2LCA1NTYuNzAxMDVdLFxyXG4gIFsxNTg3LjU5OCwgNTYxLjUxMTddLFxyXG4gIFsxNTkwLjEyODksIDU2NS4wMDQxXSxcclxuICBbMTU5MS44MzI1LCA1NjkuNDIwNTNdLFxyXG4gIFsxNTk2LjA3NSwgNTcxLjM2NDZdLFxyXG4gIFsxNTkzLjc3NjYsIDU3NC45Nzc1NF0sXHJcbiAgWzE1OTUuMjU1OSwgNTc4LjgyNThdLFxyXG4gIFsxNTg4LjE0MjYsIDU3MS4wMzQ5XSxcclxuICBbMTU4OS4yMzcyLCA1NzQuODcwN10sXHJcbiAgWzE1ODkuMjk0LCA1NzguOTUyNF0sXHJcbiAgWzE1ODguNzIxNCwgNTgyLjc2MTk2XSxcclxuICBbMTU4NS44MTM1LCA1ODUuNDI5XSxcclxuICBbMTU4My4yNjI1LCA1ODIuMDk4MTRdLFxyXG4gIFsxNTc5LjMxNzYsIDU4MC4wODc3N10sXHJcbiAgWzE1ODQuNDE1OSwgNTc3LjM4NDE2XSxcclxuICBbMTU4NC4zMDU0LCA1NzIuNTIyMV0sXHJcbiAgWzE1NzYuMDkzNSwgNTczLjU4MDE0XSxcclxuICBbMTU3Ni44NTI1LCA1NjkuMzAwOV0sXHJcbiAgWzE1ODEuNjQ0OCwgNTY1LjM1MDJdLFxyXG4gIFsxNTc3Ljg0NCwgNTY1LjUzNl0sXHJcbiAgWzE1NzQuODEsIDU2My4xMzYxN10sXHJcbiAgWzE1NzAuOTU3MiwgNTYyLjU1MzddLFxyXG4gIFsxNTczLjc5MDgsIDU1OS4wNjI4N10sXHJcbiAgWzE1NzEuODQ5NCwgNTU0LjYwMDA0XSxcclxuICBbMTU2Ny44MTE5LCA1NTIuODc2NV0sXHJcbiAgWzE1NjMuOTMzNiwgNTU1LjM0OTI0XSxcclxuICBbMTU2NC4wMDY4LCA1NTAuMzAzNDddLFxyXG4gIFsxNTU0LjM1MzksIDU0Ny40MzYzNF0sXHJcbiAgWzE1NTEuODkyMSwgNTUwLjkzMjg2XSxcclxuICBbMTU1My4zNDQyLCA1NTQuNTMzNTddLFxyXG4gIFsxNTUwLjM1OTksIDU1Ny4yODU3N10sXHJcbiAgWzE1NTIuMzMwMSwgNTYxLjA5M10sXHJcbiAgWzE1NTUuMTQ2LCA1NjYuMDc0Ml0sXHJcbiAgWzE1NTguMjc4MiwgNTY5LjgzNjU1XSxcclxuICBbMTU2MS43MzIyLCA1NzEuMTAyM10sXHJcbiAgWzE1NjUuMTYzNSwgNTcxLjk3MjE3XSxcclxuICBbMTU2NS43NzQ3LCA1NjguMzI1Nl0sXHJcbiAgWzE1NjkuMTg0NiwgNTY2LjY2NjFdLFxyXG4gIFsxNTczLjIzODUsIDU2Ni43NDYzXSxcclxuICBbMTU3Mi45NzEsIDU3MC41NDMzXSxcclxuICBbMTU2OS4yODIsIDU3MC43NTExXSxcclxuICBbMTU2OC4yNjQ5LCA1NzQuMTIzM10sXHJcbiAgWzE1NjYuMDk1NywgNTc2LjcxNjA2XSxcclxuICBbMTU2Mi44MDY0LCA1NzQuOTQwMDZdLFxyXG4gIFsxNTU5LjI5MzgsIDU3My43OTM0Nl0sXHJcbiAgWzE1NTUuODg0MywgNTczLjUwOTVdLFxyXG4gIFsxNTUxLjI5NzYsIDU3OS43Njg2XSxcclxuICBbMTU1My42NzA0LCA1NzcuMjE1NDVdLFxyXG4gIFsxNTU3LjAxMTcsIDU3Ni43Nzk0XSxcclxuICBbMTU1OS45MTgyLCA1NzcuNzg5NV0sXHJcbiAgWzE1NjIuNDksIDU3OC45OTFdLFxyXG4gIFsxNTY0LjY0NTEsIDU4MC41MTI0NV0sXHJcbiAgWzE1NjUuNzUwOSwgNTgzLjM5NTc1XSxcclxuICBbMTU2OC41MzQ5LCA1ODUuMjc3OV0sXHJcbiAgWzE1NzAuMDYzLCA1ODguNDM0M10sXHJcbiAgWzE1NjkuMTU5OCwgNTkyLjUzODE1XSxcclxuICBbMTU2NC43ODgsIDU5MS4wNDZdLFxyXG4gIFsxNTY0LjkzNDQsIDU4Ny4yNjk4XSxcclxuICBbMTU2MS44OTUxLCA1ODQuNDQyMTRdLFxyXG4gIFsxNTU5LjY5OTUsIDU4Mi4xMDU5Nl0sXHJcbiAgWzE1NTYuODU5NSwgNTgwLjM4NjJdLFxyXG4gIFsxNTU0LjA2OTgsIDU4Mi4wMzk3XSxcclxuICBbMTU1Ni42MzEsIDU4NS4yNjA5XSxcclxuICBbMTU1Ni41OTM1LCA1ODkuNDQxMV0sXHJcbiAgWzE1NjAuNjAzNiwgNTg4LjQ1NTFdLFxyXG4gIFsxNTU5Ljk0NzUsIDU5My4yMzcwNl0sXHJcbiAgWzE1NjUuMTY2NSwgNTk1LjUyMTY3XSxcclxuICBbMTU2MC42MjU3LCA1OTguNDg1M10sXHJcbiAgWzE1NTkuODQxLCA2MDQuNjMzNjddLFxyXG4gIFsxNTU5LjYwOTQsIDYxMC45NTg0NF0sXHJcbiAgWzE1NTIuMjc5MiwgNjE4LjEzNDE2XSxcclxuICBbMTU1Ny42NTExLCA2MTYuMzE3MTRdLFxyXG4gIFsxNTU4Ljg5MjcsIDYyNy44NzZdLFxyXG4gIFsxNTY1LjYyNiwgNjMwLjYxMjldLFxyXG4gIFsxNTYyLjEwODIsIDYzNC41MjM0NF0sXHJcbiAgWzE1NjIuNDczOCwgNjQwLjczNzZdLFxyXG4gIFsxNTY5LjUzODEsIDYzOC4wMjUyXSxcclxuICBbMTU4Mi43OTA1LCA2MzIuNzQ1MDZdLFxyXG4gIFsxNTc4Ljg5NTMsIDYyNi45NjA5XSxcclxuICBbMTU4NC44NTUsIDYyNC4wMV0sXHJcbiAgWzE1ODEuMTgxNSwgNjE4Ljg0NTVdLFxyXG4gIFsxNTc2LjA0MTYsIDYyMC42NDcyXSxcclxuICBbMTU3My4yMDksIDYxNS4xNTEzN10sXHJcbiAgWzE1NzQuMjQzOSwgNjA5LjgxNzE0XSxcclxuICBbMTU3NS40MDE0LCA2MDQuOTI5NTddLFxyXG4gIFsxNTc1LjQ0OTEsIDYwMC40NDA3M10sXHJcbiAgWzE1NzcuMzEyMywgNTk2LjE3NTIzXSxcclxuICBbMTU3OS41NDYxLCA1OTIuNDYxNF0sXHJcbiAgWzE1NzQuMDU4OCwgNTg2LjkyMTI2XSxcclxuICBbMTU3NC4zMDI2LCA1OTEuNTg3NzddLFxyXG4gIFsxNTcyLjU2MDUsIDU5NS42ODI1XSxcclxuICBbMTU2OS42ODEyLCA1OTguNzAzXSxcclxuICBbMTU2NS4xMTExLCA2MDAuODQyNF0sXHJcbiAgWzE1NzAuMDQ0MiwgNjA0LjA4ODZdLFxyXG4gIFsxNTY0LjU5NjMsIDYwNi40ODU3XSxcclxuICBbMTU2OC4wMTE0LCA2MTAuNTc1NDRdLFxyXG4gIFsxNTY0LjcwOTUsIDYxNS4wODU5NF0sXHJcbiAgWzE1NjIuMjcyMywgNjIwLjI0ODA1XSxcclxuICBbMTU2NC45ODYxLCA2MjUuMDYwODVdLFxyXG4gIFsxNTY4Ljg2MjgsIDYyMC4wNjA3XSxcclxuICBbMTU3Mi4wMDg1LCA2MjUuNTUwNV0sXHJcbiAgWzE1NzEuMDg0MiwgNjMxLjEzNjk2XSxcclxuICBbMTU3Ni4yNTEyLCA2MzMuMzIxN10sXHJcbiAgWzE1NzcuMTA5NiwgNjM5LjIxMzc1XSxcclxuICBbMTU3NC42NzU4LCA2NDUuMDc2NTRdLFxyXG4gIFsxNTgxLjI4MTcsIDY0Ni41ODU2M10sXHJcbiAgWzE1ODMuMDc1OCwgNjM5Ljk5MDk3XSxcclxuICBbMTU4OS4wMDkzLCA2MzMuOTg3MzddLFxyXG4gIFsxNTg4LjYzNjEsIDYzOS4zODg4XSxcclxuICBbMTU4Ny41MjM5LCA2NDUuOTQ2NTNdLFxyXG4gIFsxNTkyLjU3NzgsIDY0My41OTkyXSxcclxuICBbMTU5Ny4xNDA5LCA2NDIuNjQ2OV0sXHJcbiAgWzE1OTQuNjMxLCA2MzcuNDI2NzZdLFxyXG4gIFsxNTk4LjY2NjksIDYzMS40Nzc5XSxcclxuICBbMTYwMi4wNzU5LCA2MzUuMTczOV0sXHJcbiAgWzE2MDAuMzE4LCA2MzkuNDUxNF0sXHJcbiAgWzE2MDAuNTc5MSwgNjQ2Ljc4MDVdLFxyXG4gIFsxNjA2LjEwMTYsIDY1MC4zNTQ0XSxcclxuICBbMTYwNy4xOTU0LCA2NDUuMDM4Nl0sXHJcbiAgWzE2MDUuMjMzMiwgNjM5Ljk4NDI1XSxcclxuICBbMTYxMS4wMywgNjQwLjQxNzhdLFxyXG4gIFsxNjE0LjcwNzUsIDYzNS44ODE1XSxcclxuICBbMTYzNC4yMzY5LCA2MzMuOTA4NTddLFxyXG4gIFsxNjMxLjQ3NDYsIDYyOC4wMV0sXHJcbiAgWzE2NDEuMTU3NywgNjM3LjAyNjg2XSxcclxuICBbMTYzNC43MjU1LCA2NDAuNDc1MDRdLFxyXG4gIFsxNjI4Ljg5OTgsIDY0My43NTc1N10sXHJcbiAgWzE2MzEuMjE0NCwgNjUwLjE3NDFdLFxyXG4gIFsxNjIzLjU0NCwgNjUwLjYyNDldLFxyXG4gIFsxNjEyLjczMDcsIDY1OS40NjEyXSxcclxuICBbMTYxNi4zNjA4LCA2NjUuMjcwNV0sXHJcbiAgWzE2MTAuMzIyMSwgNjcwLjM0Njg2XSxcclxuICBbMTYwNy40MzMzLCA2NjQuMjYzNTVdLFxyXG4gIFsxNjAwLjY5NzMsIDY2NS4zMzk4XSxcclxuICBbMTYwMS44MjU4LCA2NTkuMTIwNjddLFxyXG4gIFsxNTk1LjI1NzgsIDY2MS45NjgyNl0sXHJcbiAgWzE1OTguNzI3NSwgNjUzLjY1OTY3XSxcclxuICBbMTU5My42OTA5LCA2NDkuNTYwOF0sXHJcbiAgWzE1ODYuNjk2NSwgNjUyLjU2NTNdLFxyXG4gIFsxNTc2LjE2MDksIDY1OS4wNTI2XSxcclxuICBbMTU4Mi42OTQ2LCA2NTkuNDY2NTVdLFxyXG4gIFsxNTg3Ljg2ODQsIDY2MS4zNzE5NV0sXHJcbiAgWzE1OTAuMjgwOSwgNjY2LjAyNjM3XSxcclxuICBbMTU5NC4xMjc3LCA2NjkuMjAyM10sXHJcbiAgWzE1OTguNTc0MSwgNjcxLjEzMjU3XSxcclxuICBbMTYwNC4xMDc0LCA2NzEuODIzXSxcclxuICBbMTYwOC4xNTM0LCA2NzYuOTkxNzZdLFxyXG4gIFsxNjE0LjY1MjgsIDY3OC40Njk0XSxcclxuICBbMTYxNi4wOTUzLCA2NzIuNjg2NDZdLFxyXG4gIFsxNjIyLjQxOTcsIDY3MS44MDIyNV0sXHJcbiAgWzE2MjYuODA1OCwgNjY3LjI5ODddLFxyXG4gIFsxNjIzLjQ1NTgsIDY2Mi4zNTYyXSxcclxuICBbMTYyOC4zNTEzLCA2NTcuMTE3MDddLFxyXG4gIFsxNjM3LjYyMDcsIDY0NS45MDk0XSxcclxuICBbMTY0NC4zMTg0LCA2NDMuODA4ODRdLFxyXG4gIFsxNjUyLjA5NSwgNjQzLjE1ODU3XSxcclxuICBbMTY1MS44MDczLCA2NTMuNzYxMl0sXHJcbiAgWzE2NTYuNDU1OCwgNjU3LjU1NjY0XSxcclxuICBbMTY1NC4xOTA4LCA2NDguODc2XSxcclxuICBbMTY0OC4xNzI0LCA2NDguNzhdLFxyXG4gIFsxNjQyLjM0NjksIDY1MC41OTgxXSxcclxuICBbMTYzNi43NzMsIDY1My4wOTUyXSxcclxuICBbMTYzOS41NTg4LCA2NjUuNzA4NzRdLFxyXG4gIFsxNjM3LjU4OTgsIDY3Mi4zNjgzXSxcclxuICBbMTYzMC4xMDIzLCA2NzMuMDMyOTZdLFxyXG4gIFsxNjMyLjU1MTMsIDY2NS4xOTg4NV0sXHJcbiAgWzE2MzQuNzcwMywgNjU5LjE3ODJdLFxyXG4gIFsxNjQxLjAzNTksIDY1OC42NTE3M10sXHJcbiAgWzE2NDYuMDEyNywgNjU1LjQ4MTE0XSxcclxuICBbMTY0NS44MzMxLCA2NjMuMzk0Nl0sXHJcbiAgWzE2NTAuMzQ0OCwgNjU5LjY0NDldLFxyXG4gIFsxNjU0LjgzNTcsIDY2My40MzMxN10sXHJcbiAgWzE2NTEuMDUwOCwgNjY3Ljk2NzgzXSxcclxuICBbMTY0NS4wMzIxLCA2NzAuMzgzOF0sXHJcbiAgWzE2MzYuOTUxOCwgNjg1LjY2MDVdLFxyXG4gIFsxNjM1LjE0OTgsIDY5Mi43MjA0XSxcclxuICBbMTYyNy41MywgNjkyLjA3MDA3XSxcclxuICBbMTYyMS4xNjY5LCA2OTcuMDIyMl0sXHJcbiAgWzE2MTUuMDIwOCwgNjk4LjIxNzddLFxyXG4gIFsxNjA1LjUyNTQsIDY5NS4xNzExNF0sXHJcbiAgWzE2MTAuNzAyMSwgNjkzLjEyNjZdLFxyXG4gIFsxNjE1LjI4MzcsIDY5MC4wNzQ0Nl0sXHJcbiAgWzE2MjEuMTY0MiwgNjkwLjQzNjQ2XSxcclxuICBbMTYyNC44NzQ4LCA2ODUuMzU4MzRdLFxyXG4gIFsxNjMxLjEwNDEsIDY4Ni4yNjM3XSxcclxuICBbMTYzMy42OTgsIDY3OS4zNDEyXSxcclxuICBbMTYyNy4zMzc1LCA2NzkuMzEzMjNdLFxyXG4gIFsxNjIxLjE3NDYsIDY3OC42Mjk2NF0sXHJcbiAgWzE2MTguMTc1MywgNjg0LjI1MzFdLFxyXG4gIFsxNjExLjU1NTIsIDY4My41MDk0XSxcclxuICBbMTYwNy45MTcsIDY4Ny40Njg3NV0sXHJcbiAgWzE2MDQuMDYyMSwgNjgyLjA3NjRdLFxyXG4gIFsxNTk5LjcxNzMsIDY3Ny4xOTg1NV0sXHJcbiAgWzE1OTguNjk4OSwgNjg2LjExODFdLFxyXG4gIFsxNjAyLjY4MjYsIDY5MC4xMDU2XSxcclxuICBbMTU5OS43NDM0LCA2OTYuMTMwODZdLFxyXG4gIFsxNTk1LjU1LCA2OTIuMTA2N10sXHJcbiAgWzE1OTEuMjc3MywgNjg3LjQyMjZdLFxyXG4gIFsxNTg4LjY2ODIsIDY4MC41NDFdLFxyXG4gIFsxNTk0Ljk2MDIsIDY4MS44MDc4Nl0sXHJcbiAgWzE1OTMuMDgxNCwgNjc1LjgzNDg0XSxcclxuICBbMTU4OC4xNTY5LCA2NzIuMjkzMl0sXHJcbiAgWzE1ODMuNjA3LCA2NzUuNDAyMl0sXHJcbiAgWzE1NzkuNTQ3NiwgNjcxLjIwNTVdLFxyXG4gIFsxNTg0LjE3NTMsIDY2Ny4wOTYwN10sXHJcbiAgWzE1NzguMzk2OSwgNjY0LjkwMjQ3XSxcclxuICBbMTU3MS44MjE5LCA2NjQuMzM3MTZdLFxyXG4gIFsxNTczLjU5NzcsIDY2OS43MDg3NF0sXHJcbiAgWzE1NzQuODM3NiwgNjc1LjE2MjZdLFxyXG4gIFsxNTc4LjEyNjIsIDY3OS4zNjc4Nl0sXHJcbiAgWzE1ODIuODQ0MiwgNjgxLjI0OTc2XSxcclxuICBbMTU4NC4yMTEzLCA2ODYuNzg4MV0sXHJcbiAgWzE1ODYuOTc5NiwgNjkyLjMwMDk2XSxcclxuICBbMTU4MC40OTA2LCA2OTMuNDY0M10sXHJcbiAgWzE1NzQuMTU5MywgNjk1LjIzNDI1XSxcclxuICBbMTU4NS41NTkxLCA2OTguNjUyMDRdLFxyXG4gIFsxNTkxLjM5NjcsIDY5Ni43Nzk1XSxcclxuICBbMTU5NS43Mjk2LCA3MDAuODc1NF0sXHJcbiAgWzE2MDEuMzc3MywgNzAyLjI4NDY3XSxcclxuICBbMTU5Ny4yOTQ3LCA3MDguMzY0MTRdLFxyXG4gIFsxNTg1LjAxNzEsIDcwNS4xNjU5NV0sXHJcbiAgWzE1OTEuMTQ2LCA3MDQuMjg1MDNdLFxyXG4gIFsxNTc5LjMzMDEsIDcwMC4zOTM3XSxcclxuICBbMTU2Ny4wOTI4LCA2OTguNDk0NV0sXHJcbiAgWzE1NjAuODcyNiwgNjk5LjA1NTRdLFxyXG4gIFsxNTU0Ljk0OTMsIDY5OC4zMzIxNV0sXHJcbiAgWzE1NTkuODc1OSwgNjkzLjMzMDFdLFxyXG4gIFsxNTY1LjcyMjksIDY5Mi4wMDAxXSxcclxuICBbMTU3MS42MDYsIDY4OS44MzM4Nl0sXHJcbiAgWzE1NzcuNTY1MywgNjg3LjE1MTA2XSxcclxuICBbMTU3My4wMDc5LCA2ODIuMjM4OF0sXHJcbiAgWzE1NjcuNzg4MiwgNjg0LjgyNTldLFxyXG4gIFsxNTYzLjk2MzcsIDY4MC43Njg3NF0sXHJcbiAgWzE1NjkuMzM5NiwgNjc2Ljc1NzldLFxyXG4gIFsxNTY3LjgxODEsIDY2OS43Njc4XSxcclxuICBbMTU2My45MDUsIDY3NC4yNjQ0XSxcclxuICBbMTU1OS40MTYsIDY3OC4xMjQ1XSxcclxuICBbMTU2MS42NDA5LCA2ODYuMjk2MV0sXHJcbiAgWzE1NTAuNzIxNywgNjgyLjA0NTNdLFxyXG4gIFsxNTQ5LjU0NTcsIDY4NS40NjcwNF0sXHJcbiAgWzE1NDUuMjQ0NiwgNjgyLjk0MjldLFxyXG4gIFsxNTQ2LjI3MTIsIDY4Ny44OTI3Nl0sXHJcbiAgWzE1NDguMjQ0OSwgNjkxLjcwN10sXHJcbiAgWzE1NDguNjk1OCwgNjk1LjcwMjFdLFxyXG4gIFsxNTQ2LjcwODMsIDcwNS44MzE1NF0sXHJcbiAgWzE1NDQuMjY3NiwgNjk4LjkxNjE0XSxcclxuICBbMTU0OS4yMDUxLCA3MDAuMzMxNjddLFxyXG4gIFsxNTUzLjc2NywgNjkzLjQwOTM2XSxcclxuICBbMTU1Mi4yMDI5LCA2ODguNTI4NDRdLFxyXG4gIFsxNTU2Ljk3MywgNjg5LjIwNjJdLFxyXG4gIFsxNTU2LjI2LCA2ODQuMjY4MjVdLFxyXG4gIFsxNTU0Ljk5ODUsIDY3OS45NTAzXSxcclxuICBbMTU1NC4wMjY3LCA2NzQuOTY3OV0sXHJcbiAgWzE1NTguMjc5MywgNjcxLjk5MjNdLFxyXG4gIFsxNTYyLjAyMzcsIDY2Ny44MDUzXSxcclxuICBbMTU2NS40Nzk3LCA2NjMuMjExMDZdLFxyXG4gIFsxNTYwLjA3MTIsIDY2MC42MzgzN10sXHJcbiAgWzE1NTMuMzgyNCwgNjYxLjc2MDU2XSxcclxuICBbMTU1Ni45MDk0LCA2NjUuNzI2OV0sXHJcbiAgWzE1NTIuOTI0MywgNjY4LjkyOTQ0XSxcclxuICBbMTU0OC45MjU0LCA2NzIuOTUxMDVdLFxyXG4gIFsxNTQ5LjY0ODcsIDY3Ny45MjAxXSxcclxuICBbMTU0NC45MTE0LCA2NzguMjYxNTRdLFxyXG4gIFsxNTQzLjc4OTgsIDY3My44MTIyNl0sXHJcbiAgWzE1NDcuOTMzOCwgNjY3LjYxOTNdLFxyXG4gIFsxNTQyLjY0NjcsIDY2OS40OTc3XSxcclxuICBbMTU0Ni45MTgzLCA2NjMuMTU2ODZdLFxyXG4gIFsxNTQ4LjAxNzYsIDY1OC4zNDA0XSxcclxuICBbMTU0NC4zMDEsIDY1NS40MjY5XSxcclxuICBbMTU0OC41ODc1LCA2NTEuNjc2NF0sXHJcbiAgWzE1NDUuMDEwMywgNjQ4LjExNjFdLFxyXG4gIFsxNTQyLjAwOCwgNjQzLjI4Mjk2XSxcclxuICBbMTUzNy45MzAyLCA2MzkuNjgxN10sXHJcbiAgWzE1NDIuODUxMSwgNjMwLjY1Mzc1XSxcclxuICBbMTU0My4zMDU4LCA2MzcuNTI1NzZdLFxyXG4gIFsxNTQ5LjE2NTgsIDYzNS4yOTg2NV0sXHJcbiAgWzE1NTYuMDE4NiwgNjM0Ljg2OTRdLFxyXG4gIFsxNTUyLjcyOTIsIDYzMC4wNjc0XSxcclxuICBbMTU0Ny42MjI4LCA2MjcuNTMxM10sXHJcbiAgWzE1NDIuNzcwMSwgNjI0LjUxMTA1XSxcclxuICBbMTU0Ny45NTMsIDYyMS4wOTk1NV0sXHJcbiAgWzE1NTIuNjkyNCwgNjI0LjI4NjVdLFxyXG4gIFsxNTU3LjM0NTYsIDYyMS45OTIyXSxcclxuICBbMTU0NC4wNDEsIDYxOC40NTk5Nl0sXHJcbiAgWzE1MzkuNTg0MSwgNjIwLjE4Njk1XSxcclxuICBbMTUzNS42NDU1LCA2MTQuNzE5XSxcclxuICBbMTUyNy45OTAyLCA2MTUuNzY0NDddLFxyXG4gIFsxNTMxLjE2NjksIDYxMy4yMDUxXSxcclxuICBbMTUyOS4yMDc1LCA2MDguNTI2ODZdLFxyXG4gIFsxNTM5LjU5NzMsIDYxNC43NTM5XSxcclxuICBbMTUzNy4wNDc0LCA2MDguNTI1M10sXHJcbiAgWzE1MzkuNzc4OCwgNjA0LjUxMThdLFxyXG4gIFsxNTQ0LjgxMjMsIDYwNC4wMjg3XSxcclxuICBbMTU0NC42OTU5LCA1OTkuMjgyMTddLFxyXG4gIFsxNTQ0LjgxODgsIDU5NC42Njk3XSxcclxuICBbMTU0My4wNTQzLCA1OTAuMzk3MV0sXHJcbiAgWzE1NDcuMjczLCA1ODQuMTA0ODZdLFxyXG4gIFsxNTQxLjA0MjcsIDU4MS40OTAwNV0sXHJcbiAgWzE1NDQuNDY0OCwgNTgwLjQzOTddLFxyXG4gIFsxNTQ4LjE1NzYsIDU4MC40NzczXSxcclxuICBbMTU0My41MDM3LCA1ODUuMTM0OTVdLFxyXG4gIFsxNTQwLjEzOCwgNTg3LjI4NDddLFxyXG4gIFsxNTQ3LjI1NzcsIDU4OC4xMzIyNl0sXHJcbiAgWzE1NDguNzcyNywgNTkyLjEzNDk1XSxcclxuICBbMTU1MC4yMzUyLCA1OTYuODkzOV0sXHJcbiAgWzE1NTIuMTQzMywgNTg4LjI1NTFdLFxyXG4gIFsxNTUxLjMxNDcsIDU4NC40MjhdLFxyXG4gIFsxNTUzLjc1MjMsIDU5Mi41Njg2XSxcclxuICBbMTU1NS43NDgzLCA1OTYuMjg0NjddLFxyXG4gIFsxNTUwLjE4NjUsIDYwMi4zMjAwN10sXHJcbiAgWzE1NTUuNjI0NSwgNjAxLjA0NzFdLFxyXG4gIFsxNTUzLjE2NSwgNjEyLjUzM10sXHJcbiAgWzE1NTQuNTk1NiwgNjA2Ljg4MjU3XSxcclxuICBbMTU0OS41MDM0LCA2MDguMTU4XSxcclxuICBbMTU0NS4wNTQ2LCA2MDguNzEwNl0sXHJcbiAgWzE1NDguMjI1NiwgNjE0LjE1MDZdLFxyXG4gIFsxNTQzLjc4NjMsIDYxMy42MDU4M10sXHJcbiAgWzE1NDAuODY0NywgNjA5LjY4NjA0XSxcclxuICBbMTUzMy43MjE0LCA2MTAuMzk0OV0sXHJcbiAgWzE1MzIuOTQzNCwgNjA1LjcyNzNdLFxyXG4gIFsxNTM1LjQwMDYsIDYwMi4wMTUxNF0sXHJcbiAgWzE1MzQuNzI3NywgNTk2LjkzODIzXSxcclxuICBbMTUzOS40NzgzLCA1OTkuNjIxMV0sXHJcbiAgWzE1MzkuOTE4NSwgNTk0LjgwNTY2XSxcclxuICBbMTUzNy4yMjUxLCA1OTEuNjEyNTVdLFxyXG4gIFsxNTMyLjYyNTUsIDU5MS44MjgzN10sXHJcbiAgWzE1MjguMjYxNywgNTkyLjMyN10sXHJcbiAgWzE1MjkuODY0NCwgNTk2Ljg2NTM2XSxcclxuICBbMTUzMC43NTU5LCA2MDEuMjk4Ml0sXHJcbiAgWzE1MjcuMjk0LCA2MDQuOTA4MTRdLFxyXG4gIFsxNTI1LjkwOTMsIDYwMC40OTFdLFxyXG4gIFsxNTI0Ljg3MTEsIDU5Ni4yMjE1Nl0sXHJcbiAgWzE1MjIuMjE4LCA1OTIuMzM0OTZdLFxyXG4gIFsxNTE5LjYyMzcsIDU5NS42ODhdLFxyXG4gIFsxNTIyLjYzOTksIDYwNC41MjUxNV0sXHJcbiAgWzE1MjAuODgxMSwgNjAwLjIzNzNdLFxyXG4gIFsxNTE4LjE1MTksIDYwNS43OTY2M10sXHJcbiAgWzE1MDcuNTE2OCwgNjA2LjkyNjRdLFxyXG4gIFsxNTA4Ljk5MzIsIDYxMS4yODM5NF0sXHJcbiAgWzE1MDQuNzcyMiwgNjEwLjkwODQ1XSxcclxuICBbMTUwMS4zNTU3LCA2MDkuNDQ2MTddLFxyXG4gIFsxNTA1LjY5MiwgNjE1LjI0MTJdLFxyXG4gIFsxNTA0LjgxMzUsIDYxOS4xMzAwN10sXHJcbiAgWzE1MTAuMjczNiwgNjE1LjQwMDNdLFxyXG4gIFsxNTEyLjIyOSwgNjE4LjU4MDE0XSxcclxuICBbMTUwOC41NzMsIDYxOS43ODgxNV0sXHJcbiAgWzE1MDcuMTQxLCA2MjcuNDQ0Ml0sXHJcbiAgWzE1MDkuMDc3NCwgNjI0LjM1NDZdLFxyXG4gIFsxNTEyLjI0MjYsIDYyMy4wMjI3XSxcclxuICBbMTUxMi4yOTA1LCA2MjguMDY2MV0sXHJcbiAgWzE1MDguNTgzNywgNjMwLjc4MDQ2XSxcclxuICBbMTUxMi4xMTYzLCA2MzMuMDQ5NDRdLFxyXG4gIFsxNTE1Ljk1MDQsIDYzMi4xNjI2XSxcclxuICBbMTUxNi42NTkyLCA2MjguNjExOF0sXHJcbiAgWzE1MTkuMjUzOSwgNjI1LjkzNTVdLFxyXG4gIFsxNTIxLjI4OTYsIDYyMy4wMV0sXHJcbiAgWzE1MTUuNzI5LCA2MjQuMjg4NV0sXHJcbiAgWzE1MTUuNTIyLCA2MTkuNzNdLFxyXG4gIFsxNTE4Ljc3MzksIDYyMC4xNTc2XSxcclxuICBbMTUyMi42NDczLCA2MTkuMTA1OTZdLFxyXG4gIFsxNTE5LjU5ODMsIDYxNS4zNjM4XSxcclxuICBbMTUxNS42MjMsIDYxNS40MDcyXSxcclxuICBbMTUxMy4zMDg3LCA2MTIuMDc3MTVdLFxyXG4gIFsxNTEyLjgyOTEsIDYwNy43NDAxXSxcclxuICBbMTUxMi4wNTE2LCA2MDIuNTIyN10sXHJcbiAgWzE1MDcuNTYzLCA2MDEuMjcxODVdLFxyXG4gIFsxNTAzLjMzNDgsIDYwNC42MTYzM10sXHJcbiAgWzE0OTkuMjIwOCwgNjAxLjA3ODg2XSxcclxuICBbMTQ5Ni4zMzczLCA1OTYuOTI0NDRdLFxyXG4gIFsxNDkzLjE5ODcsIDYwMC40Mjc1XSxcclxuICBbMTQ5MC4xMjAyLCA2MDMuNzc5MV0sXHJcbiAgWzE0ODcuODgwNywgNTk5LjU4NjRdLFxyXG4gIFsxNDgzLjIxOTcsIDYwMS4zNjQyXSxcclxuICBbMTQ4MC41MDY4LCA1OTguOTE4MTVdLFxyXG4gIFsxNDc2Ljk4ODQsIDU5OS41MDgwNl0sXHJcbiAgWzE0NzUuMjQ1NSwgNjAyLjM4MzhdLFxyXG4gIFsxNDc1LjYwOTksIDYwNi4yNTAxXSxcclxuICBbMTQ3OC4zMDI1LCA2MDguNzk0NF0sXHJcbiAgWzE0NzYuMDkxMywgNjEyLjAzNDRdLFxyXG4gIFsxNDczLjIyOTIsIDYwOS41MDAxXSxcclxuICBbMTQ2OS45MTE2LCA2MDcuOTgxNDVdLFxyXG4gIFsxNDcxLjkzMTIsIDYwNC44MDU2Nl0sXHJcbiAgWzE0NzAuOTA5MywgNjAxLjAyODFdLFxyXG4gIFsxNDY3Ljc0OCwgNjAzLjY2NTVdLFxyXG4gIFsxNDY1Ljg5MDEsIDYwNy4wMzg1XSxcclxuICBbMTQ2MS45NjcyLCA2MDYuMjI0M10sXHJcbiAgWzE0NTkuMjU3LCA2MDkuNjM1MjVdLFxyXG4gIFsxNDU2LjM0OTEsIDYxMi4xOTQ2XSxcclxuICBbMTQ1Mi43NDMyLCA2MTAuNTk5XSxcclxuICBbMTQ1My45NjU1LCA2MDYuODkyMzNdLFxyXG4gIFsxNDU3LjY2NzcsIDYwNS43MDk3XSxcclxuICBbMTQ1OC45MDcyLCA2MDEuNDc0MzddLFxyXG4gIFsxNDYzLjE2MTEsIDYwMi4yNDkyN10sXHJcbiAgWzE0NjYuNTA5NCwgNTk5Ljg1ODFdLFxyXG4gIFsxNDczLjIzMDYsIDU5OC4xNjU1XSxcclxuICBbMTQ3MC4xODgsIDU5MC40Nzc5N10sXHJcbiAgWzE0NzAuMTYzMSwgNTkzLjc3MzZdLFxyXG4gIFsxNDYzLjEyMzgsIDU4OC43NDM4XSxcclxuICBbMTQ2OS4zODgsIDU4Ny42MzQ1XSxcclxuICBbMTQ2OS40OTU0LCA1ODMuOTMwNjZdLFxyXG4gIFsxNDczLjM5NjcsIDU4Ni42MjYzNF0sXHJcbiAgWzE0NzcuMjY3MywgNTg3LjMzMDNdLFxyXG4gIFsxNDczLjAwNTksIDU4Mi4zNDA0NV0sXHJcbiAgWzE0NzYuOTA2MiwgNTgyLjM0MTQzXSxcclxuICBbMTQ4MC41NDUzLCA1ODUuNDAzNTZdLFxyXG4gIFsxNDg0LjA0NywgNTgyLjc2MTZdLFxyXG4gIFsxNDg2LjMxNzYsIDU3OC42NDM0M10sXHJcbiAgWzE0ODAuODQ2NywgNTgwLjA4Mjc2XSxcclxuICBbMTQ2MC40MjE1LCA1ODUuNjU4OTRdLFxyXG4gIFsxNDY0LjY3MjksIDU4My41OTU1XSxcclxuICBbMTQ2Ni4xNDA0LCA1ODYuNTY0OF0sXHJcbiAgWzE0NjYuNDY2NiwgNTkxLjExMDk2XSxcclxuICBbMTQ2Ni4zNTc5LCA1OTUuMTk2OV0sXHJcbiAgWzE0NjkuMzU4LCA1OTcuMzEwNTVdLFxyXG4gIFsxNDczLjcwNiwgNTk0LjU2Mjg3XSxcclxuICBbMTQ3Ny4xMDExLCA1OTUuNjgyNF0sXHJcbiAgWzE0NzMuNzk5MSwgNTkwLjY5Ml0sXHJcbiAgWzE0NzcuNjk3NiwgNTkxLjM1NDldLFxyXG4gIFsxNDgwLjkxNjUsIDU5NC42NzUyXSxcclxuICBbMTQ4Mi4wMzMyLCA1OTAuNzg3OTZdLFxyXG4gIFsxNDg0LjM1OTYsIDU4Ny42NjA0XSxcclxuICBbMTQ4OC41NzQ4LCA1ODguODEzN10sXHJcbiAgWzE0ODYuODgwOSwgNTkyLjkwNTE1XSxcclxuICBbMTQ4NC42NTA5LCA1OTYuNjM1XSxcclxuICBbMTQ5MS4xMDM4LCA1OTUuODA2NDZdLFxyXG4gIFsxNDkyLjI3MzMsIDU5MS4yMzM4XSxcclxuICBbMTQ5Ny43NDEzLCA1ODYuMzU4M10sXHJcbiAgWzE1MDEuNTQxLCA1ODkuMDE3NV0sXHJcbiAgWzE0OTYuNjQ2MiwgNTkxLjgxMzddLFxyXG4gIFsxNTAwLjkwMDgsIDU5NC41MTA0XSxcclxuICBbMTUwMS4xOTk3LCA1ODEuNzA2NjddLFxyXG4gIFsxNDkyLjkyNjksIDU4Ni4zMDI2XSxcclxuICBbMTQ4Ny45MDQzLCA1ODQuNDczNV0sXHJcbiAgWzE0OTAuNjI1NywgNTgxLjI1NDc2XSxcclxuICBbMTQ5Mi4wNTA0LCA1NzYuNjQzMV0sXHJcbiAgWzE0OTUuODM0MiwgNTgwLjk1NThdLFxyXG4gIFsxNDk3LjkwNTMsIDU3NS45OTExNV0sXHJcbiAgWzE1MDEuMzExOCwgNTY3LjgyNTQ0XSxcclxuICBbMTUwNi4yMjY2LCA1NjguNDM3NF0sXHJcbiAgWzE1MDcuMzYxNywgNTcyLjk1ODFdLFxyXG4gIFsxNTA5Ljk0MzQsIDU3Ni42OTc0XSxcclxuICBbMTUxMy45Njg4LCA1NzMuOTcxM10sXHJcbiAgWzE1MTkuNTY5MywgNTcyLjI5MDFdLFxyXG4gIFsxNTIyLjgwNDcsIDU3NS4xNjg5XSxcclxuICBbMTUxOS44ODgxLCA1NjguMDMwNF0sXHJcbiAgWzE1MjIuMjU0NiwgNTY0Ljc0ODJdLFxyXG4gIFsxNTIxLjI1NDUsIDU2MC40ODM0XSxcclxuICBbMTUyNi4wNjAyLCA1NTcuOTY3NV0sXHJcbiAgWzE1MjUuMDU5MiwgNTYxLjY1XSxcclxuICBbMTUyOS4yMjc3LCA1NjEuMjgxM10sXHJcbiAgWzE1MzIuOTQsIDU2Mi43ODUwM10sXHJcbiAgWzE1MzcuMDc0NSwgNTY0LjA0NDU2XSxcclxuICBbMTU0MC41MjgzLCA1NjIuNzYyOTRdLFxyXG4gIFsxNTQ0LjMyMjgsIDU2NC4wMzQ5XSxcclxuICBbMTU0MC4zMTcsIDU2Ny4zODY4NF0sXHJcbiAgWzE1MzQuNzMwNywgNTY3LjIyNV0sXHJcbiAgWzE1MzcuMTI3MywgNTcwLjU2OThdLFxyXG4gIFsxNTM0LjY2MDIsIDU3NC42NDgzXSxcclxuICBbMTUzMS45NTM0LCA1NzAuOTIxXSxcclxuICBbMTUzMC4xNzg1LCA1NjYuNzM1Nl0sXHJcbiAgWzE1MjYuNTUyNSwgNTY1LjU0M10sXHJcbiAgWzE1MjMuODgwMiwgNTY5LjI2NDZdLFxyXG4gIFsxNTI2Ljk4ODMsIDU3MS4zNjQ0XSxcclxuICBbMTUyOS4yMDA0LCA1NzQuODU2NTddLFxyXG4gIFsxNTMxLjExNzcsIDU3OC4zMjY5N10sXHJcbiAgWzE1MzQuODY3MiwgNTc5LjE2NzRdLFxyXG4gIFsxNTM4LjM1NjQsIDU3OC4yNDkyN10sXHJcbiAgWzE1NDIuMTIxOCwgNTc2LjU0NjE0XSxcclxuICBbMTUzOS4xMDk0LCA1NzQuMDA0OF0sXHJcbiAgWzE1NDIuMjQsIDU3MS4zNDI4XSxcclxuICBbMTU0NS42MzU5LCA1NzIuOTUyNzZdLFxyXG4gIFsxNTQ1LjkwMzYsIDU3Ni43Mjc5XSxcclxuICBbMTU0OS41NzA0LCA1NzYuMTgwOV0sXHJcbiAgWzE1NTIuNTc1LCA1NzMuMjY0M10sXHJcbiAgWzE1NTQuNzg2NSwgNTY5LjkzOTldLFxyXG4gIFsxNTU4Ljc1MDEsIDU2NS44OTUxXSxcclxuICBbMTU2MS45NTQsIDU2Ny41MTc2XSxcclxuICBbMTU2NC4zMDkxLCA1NjQuNTg4NzVdLFxyXG4gIFsxNTY3LjMwNywgNTYyLjU4NzddLFxyXG4gIFsxNTY4LjczOTksIDU1Ny45ODY0NV0sXHJcbiAgWzE1NjQuNDQ1NCwgNTU5LjYyNDc2XSxcclxuICBbMTU2MC4xNDc4LCA1NTguNTEzN10sXHJcbiAgWzE1NjAuNTIwMSwgNTUyLjE1MjM0XSxcclxuICBbMTU1OC45OTM5LCA1NDguMDYwOF0sXHJcbiAgWzE1NTYuMTQ5MywgNTUxLjM0OTNdLFxyXG4gIFsxNTU4LjEyMTgsIDU1NS4yMDM3NF0sXHJcbiAgWzE1NTUuMjk5MSwgNTU4LjIzMzNdLFxyXG4gIFsxNTYwLjk3MzEsIDU2Mi41NDI3XSxcclxuICBbMTU1Ni43MTUzLCA1NjIuMTMxODRdLFxyXG4gIFsxNTUxLjkzNjUsIDU2NC42NDk5XSxcclxuICBbMTU1MS40MjI2LCA1NjguNjIwOF0sXHJcbiAgWzE1NDkuNDMyNCwgNTcyLjMyOTZdLFxyXG4gIFsxNTQ3Ljc5NCwgNTY5LjE2MDldLFxyXG4gIFsxNTQ0LjY0MjEsIDU2Ny44NTM2XSxcclxuICBbMTU0OC4yNjc4LCA1NjQuNzk4MTZdLFxyXG4gIFsxNTQ4LjAxNzIsIDU2MC42NTNdLFxyXG4gIFsxNTQzLjg2MzMsIDU2MC4wNTgzNV0sXHJcbiAgWzE1NDUuNTc2NywgNTU2LjU4MjAzXSxcclxuICBbMTU0OC40ODA1LCA1NTMuMzk5NF0sXHJcbiAgWzE1NDkuMzA1NCwgNTQ4LjQ0MjVdLFxyXG4gIFsxNTQ2Ljg5MDQsIDU0NC45NjkzNl0sXHJcbiAgWzE1NTEuMTM1NCwgNTQ0LjM3OTk0XSxcclxuICBbMTU2MC4wMTUsIDU0NC40MjU5XSxcclxuICBbMTU1NS41NTEzLCA1NDMuMzg5NV0sXHJcbiAgWzE1NTEuNDE4LCA1MzkuODE2ODNdLFxyXG4gIFsxNTU1LjQ4MTgsIDUzOC43ODczXSxcclxuICBbMTU1OS4yMzE2LCA1NDAuMzM4XSxcclxuICBbMTU1OC4xMTAxLCA1MzUuMzYzM10sXHJcbiAgWzE1NjEuODAxOCwgNTMzLjc3OTA1XSxcclxuICBbMTU1NS4xMDM2LCA1MzEuMDU2N10sXHJcbiAgWzE1NTIuOTY1NywgNTM1LjI3OTU0XSxcclxuICBbMTU0Ny42NzE0LCA1MzUuNDYzODddLFxyXG4gIFsxNTU5LjE1MDQsIDUzMC41NTI4Nl0sXHJcbiAgWzE1NTYuMTQ1NSwgNTI2LjI1MzY2XSxcclxuICBbMTU1NS41Nzg2LCA1MjEuNjU0MDVdLFxyXG4gIFsxNTUxLjQ3OTUsIDUyMy4wNzk4M10sXHJcbiAgWzE1NDguNjE4MiwgNTIwLjMwMzhdLFxyXG4gIFsxNTQ1LjAyOSwgNTE4Ljc5NTA0XSxcclxuICBbMTU0OS4xNDcyLCA1MTUuODgxODRdLFxyXG4gIFsxNTQ1LjIyMTIsIDUxNC40Njk2XSxcclxuICBbMTU0Mi43NTE1LCA1MTEuNzI3OV0sXHJcbiAgWzE1MzkuODY3NywgNTA4Ljc5MDM0XSxcclxuICBbMTUzNS45NTczLCA1MDcuNTcwOV0sXHJcbiAgWzE1MzMuODAxMywgNTA0LjA3MDEzXSxcclxuICBbMTUzNy44OTgsIDUwMC44OTYyNF0sXHJcbiAgWzE1MzkuNjAzOCwgNTE0LjE5NjldLFxyXG4gIFsxNTQxLjM3MTUsIDUxNi44NTAzNF0sXHJcbiAgWzE1NDAuNTY5MywgNTIwLjEzMTJdLFxyXG4gIFsxNTM4LjAzNjYsIDUyMi42ODU4NV0sXHJcbiAgWzE1MzcuOTk2MywgNTI2LjcyNjFdLFxyXG4gIFsxNTM2LjYwMjUsIDUzMC42NjU4M10sXHJcbiAgWzE1MzEuMjk2MSwgNTMzLjIxNTE1XSxcclxuICBbMTUzMS4xMzIyLCA1MjguMzgwMV0sXHJcbiAgWzE1MjguNzc4NiwgNTIzLjcwMTddLFxyXG4gIFsxNTIwLjE1MzksIDUyOC4zNjMzNF0sXHJcbiAgWzE1MjUuNDg5NywgNTMyLjAxNjhdLFxyXG4gIFsxNTI1LjE4MjcsIDUyNy4wOTIzXSxcclxuICBbMTUyMy40Nzc5LCA1MjIuMTAwOTVdLFxyXG4gIFsxNTI2LjMyODEsIDUxNy40MzAzXSxcclxuICBbMTUyOS4wMzA1LCA1MTMuNDMzOTZdLFxyXG4gIFsxNTMyLjg2NDMsIDUxNS43ODg4XSxcclxuICBbMTUzNi4zNTA3LCA1MTguNDQ3MV0sXHJcbiAgWzE1MzEuMzU5MSwgNTE5LjgyNDddLFxyXG4gIFsxNTMzLjg3MTMsIDUyNC4wNzA0M10sXHJcbiAgWzE1MzYuNDMyMSwgNTEyLjkyMzFdLFxyXG4gIFsxNTMyLjg1NjksIDUxMC43NzA4XSxcclxuICBbMTUzMC4zMSwgNTA3LjU0NjIzXSxcclxuICBbMTUwNy43Nzc2LCA1MTEuNzM0MV0sXHJcbiAgWzE1MDkuMDM5MSwgNTA0LjUwNjNdLFxyXG4gIFsxNTE0LjYyMTUsIDUwMS44MzU4Ml0sXHJcbiAgWzE1MTguMDU2NCwgNDk3Ljc3MTM2XSxcclxuICBbMTUxMS4zMTE1LCA0OTcuMTc4M10sXHJcbiAgWzE1MDAuMDE5NSwgNDk3LjMzNjhdLFxyXG4gIFsxNDk1LjQ3NjEsIDQ5My40Nzc2M10sXHJcbiAgWzE0OTcuODIyNSwgNDg3LjQ2MTI3XSxcclxuICBbMTUwMC43NjUxLCA0ODIuNzI5NzRdLFxyXG4gIFsxNDkxLjk4NSwgNDg3Ljg5MTQyXSxcclxuICBbMTQ4Ni44MjczLCA0ODkuNzIxNTNdLFxyXG4gIFsxNDgyLjIyNzgsIDQ4Ni44MTkxNV0sXHJcbiAgWzE0ODEuODczMywgNDkxLjkyOTI2XSxcclxuICBbMTQ3Ny40NzIsIDQ4OS45MzY3N10sXHJcbiAgWzE0NzMuNjI5OSwgNDg4LjE4N10sXHJcbiAgWzE0NzIuMzE3MywgNDkyLjc4MzVdLFxyXG4gIFsxNDY4LjI4NDksIDQ5Ni4wMDc1N10sXHJcbiAgWzE0NzIuNDM4NywgNDk5LjQ0NDkyXSxcclxuICBbMTQ3Ny4zMjY0LCA0OTYuMDZdLFxyXG4gIFsxNDgzLjc4OSwgNTA4LjM4Mzg1XSxcclxuICBbMTQ4OC4wOTk2LCA1MTIuNjIyMjVdLFxyXG4gIFsxNDg1Ljk3OTIsIDUyNS45NjA3NV0sXHJcbiAgWzE0ODMuMjMwNSwgNTMyLjY3MTk0XSxcclxuICBbMTQ3NS4zNTAxLCA1MzMuODM3M10sXHJcbiAgWzE0NjcuNTI5NSwgNTM2LjA1MDY2XSxcclxuICBbMTQ1OS4xNTg3LCA1MzEuODcyN10sXHJcbiAgWzE0NjQuMzkzMywgNTI3LjcxNDNdLFxyXG4gIFsxNDcxLjEyMTEsIDUyNi41NTU4NV0sXHJcbiAgWzE0NzcuOTU0MSwgNTI0LjUxODU1XSxcclxuICBbMTQ4Ni4xNDYxLCA1MTkuNTE0NV0sXHJcbiAgWzE0OTMuMzcwMiwgNTIzLjg0MDldLFxyXG4gIFsxNTAyLjMxNzYsIDUxMy4yODgxNV0sXHJcbiAgWzE0OTYuNDQwOSwgNTA5Ljg5MzA3XSxcclxuICBbMTQ5MC44OTcyLCA1MDYuNDQ4NDNdLFxyXG4gIFsxNTAyLjE3NzUsIDUwNS44NjQ4XSxcclxuICBbMTUwNS4yNTM0LCA0OTkuMzcxM10sXHJcbiAgWzE1MTUuODk1OSwgNDkyLjA0MzA2XSxcclxuICBbMTUyMS4wMDk0LCA0OTMuNDA3N10sXHJcbiAgWzE1MjQuMTU3NiwgNDk2LjgzNjldLFxyXG4gIFsxNTIzLjk1MjEsIDUwMS4xNjIwNV0sXHJcbiAgWzE1MjcuNDkyMSwgNTA0LjYxMzI1XSxcclxuICBbMTUzMC4wMDQ1LCA1MDEuMjk2ODRdLFxyXG4gIFsxNTI4LjYzMTYsIDQ5Ny4zNzQ4Ml0sXHJcbiAgWzE1MzQuMDQ5OCwgNDk5LjY0XSxcclxuICBbMTUzMy4zMDMxLCA0OTUuNjM0MjhdLFxyXG4gIFsxNTMwLjE4NzUsIDQ5Mi45NTc0Nl0sXHJcbiAgWzE1MjUuOTQ4MiwgNDkyLjY5MDQzXSxcclxuICBbMTUyNy41MTgyLCA0ODguNzIwNTVdLFxyXG4gIFsxNTIyLjE0MTIsIDQ4OS4yOTQzXSxcclxuICBbMTUyMy42Njg1LCA0ODUuNjA5NDddLFxyXG4gIFsxNTI3LjI2ODksIDQ4My43MDE0Ml0sXHJcbiAgWzE1MjguODI2MiwgNDgwLjAyNDVdLFxyXG4gIFsxNTMyLjY1NCwgNDc4LjczMjEyXSxcclxuICBbMTUzMi42NTY0LCA0NzQuNjAyMDVdLFxyXG4gIFsxNTM1Ljc0NzgsIDQ3MS45NTQ5M10sXHJcbiAgWzE1MzMuMTU4MywgNDY4LjQ4ODQ2XSxcclxuICBbMTUzMC4zNDA1LCA0NzEuMTUyMzRdLFxyXG4gIFsxNTI4LjMyMDEsIDQ3NS4zMDM2NV0sXHJcbiAgWzE1MjUuMDM1MiwgNDc4LjM1MjcyXSxcclxuICBbMTUyMi4yNjEsIDQ4MS42ODkxOF0sXHJcbiAgWzE1MDkuNDIxOSwgNDc5LjQxNDE4XSxcclxuICBbMTUwNC45MTkyLCA0NzguMzQ1NjRdLFxyXG4gIFsxNTEwLjExNjUsIDQ3My41NzE4N10sXHJcbiAgWzE1MTEuNjU0OCwgNDY4LjExODldLFxyXG4gIFsxNTA2Ljg0MiwgNDY4LjMzODJdLFxyXG4gIFsxNTA2LjUwMDIsIDQ2My43ODMwNV0sXHJcbiAgWzE1MTAuMzUsIDQ2Mi4yMjg1OF0sXHJcbiAgWzE1MTQuNDI1OSwgNDYzLjQ1MzFdLFxyXG4gIFsxNTExLjYzNDUsIDQ1NC43MjgzNl0sXHJcbiAgWzE1MTMuOTU5NywgNDU4LjcwNzM0XSxcclxuICBbMTUxNy4zMzUzLCA0NTYuNTQ1M10sXHJcbiAgWzE1MTguODYxNSwgNDYyLjE3MjJdLFxyXG4gIFsxNTE2LjU3MTMsIDQ2Ny40OTAzNl0sXHJcbiAgWzE1MTYuMzgyMywgNDcyLjc1OTQ2XSxcclxuICBbMTUyMy4yMjE0LCA0NzQuMjMwNjhdLFxyXG4gIFsxNTI1Ljg3NTcsIDQ3MS4xMzc5NF0sXHJcbiAgWzE1MjcuNTYyNSwgNDY3LjU5NDldLFxyXG4gIFsxNTMwLjk0MDksIDQ2NS4zMzY0XSxcclxuICBbMTUyNy42MzQsIDQ2My4zOTg1Nl0sXHJcbiAgWzE1MjMuNjA5NSwgNDY1LjIwMjZdLFxyXG4gIFsxNTIzLjU1NDEsIDQ2MC42NDMxM10sXHJcbiAgWzE1MjEuMzY3NywgNDU2Ljk0Njg3XSxcclxuICBbMTUxOS4yOTYzLCA0NTIuNTM3NF0sXHJcbiAgWzE1MTQuODkyLCA0NTIuOTg0Ml0sXHJcbiAgWzE1MTkuMzI2MiwgNDQ4LjE0MDE0XSxcclxuICBbMTUxOS4yNDYyLCA0NDQuNDkwNzhdLFxyXG4gIFsxNTE3LjgwODgsIDQ0MC44MTg0Ml0sXHJcbiAgWzE1MTUuNTAxMiwgNDM3LjczOTcyXSxcclxuICBbMTUxOS4yNjA2LCA0MzYuMzg2Ml0sXHJcbiAgWzE1MjIuNTc1NiwgNDM4LjY2OTI1XSxcclxuICBbMTUyMi4xNTU1LCA0NDIuMjE0NTRdLFxyXG4gIFsxNTI2LjM0NTcsIDQ0My4wOTcxNF0sXHJcbiAgWzE1MjYuNTA0MywgNDM3LjUzNTgzXSxcclxuICBbMTUzMC45NTEzLCA0MzYuNzQzMzhdLFxyXG4gIFsxNTM1LjE2NjMsIDQzNS4zMjgyXSxcclxuICBbMTUzOC4yMTc3LCA0MzEuODEyMjNdLFxyXG4gIFsxNTM0LjAyMywgNDI5Ljc5MTc1XSxcclxuICBbMTUzMC45Mjk0LCA0MzIuNDgyNzNdLFxyXG4gIFsxNTIyLjgwODMsIDQzMy45OTM3XSxcclxuICBbMTUyNi42MDEzLCA0MzIuODgyMDJdLFxyXG4gIFsxNTI3Ljg4NjYsIDQyOC45Mzk5NF0sXHJcbiAgWzE1MzAuNTIsIDQyNi4wMTgyNV0sXHJcbiAgWzE1MzQuMjk3NywgNDI1LjA5NDldLFxyXG4gIFsxNTM3LjcwOTIsIDQyMi42NjQ1XSxcclxuICBbMTUzOC44ODc3LCA0MTguNjU1MDNdLFxyXG4gIFsxNTM0Ljg1NzQsIDQxNi41OTU5XSxcclxuICBbMTUzNy4xNzc2LCA0MTMuNjA3MDNdLFxyXG4gIFsxNTMyLjkxOSwgNDEyLjM0ODAyXSxcclxuICBbMTUyOC44ODEyLCA0MTIuNzEzNjhdLFxyXG4gIFsxNTI1LjE0ODIsIDQxMi44MjM3XSxcclxuICBbMTUyMy43NTgsIDQxNi4zODY2Nl0sXHJcbiAgWzE1MjAuMTkwNCwgNDE3LjczMDJdLFxyXG4gIFsxNTE3LjM3MzgsIDQyMC41NjgzNl0sXHJcbiAgWzE1MTkuMzY1NSwgNDI0Ljk4MzIyXSxcclxuICBbMTUyMi4wNiwgNDIyLjMzMDc4XSxcclxuICBbMTUyNS40MTgsIDQyMC4zNTcwM10sXHJcbiAgWzE1MjcuNzk1OSwgNDE3LjMzMTg1XSxcclxuICBbMTUzMS4wNTUyLCA0MTYuMzkyMDNdLFxyXG4gIFsxNTMzLjY0NjcsIDQyMC40MTg1NV0sXHJcbiAgWzE1MjkuNjc0LCA0MjEuNzM0NTZdLFxyXG4gIFsxNTI1LjY4NTgsIDQyNC45OTcxNl0sXHJcbiAgWzE1MjIuNzE1LCA0MjguNzY1MzJdLFxyXG4gIFsxNTE5LjEzMDEsIDQzMS45Nzk5OF0sXHJcbiAgWzE1MTcuNTgyOSwgNDI4LjY2MjhdLFxyXG4gIFsxNTE0LjY2MTQsIDQyNi4wNTg0XSxcclxuICBbMTUxMy41ODAzLCA0MjIuNDYzNV0sXHJcbiAgWzE1MDkuMzgxLCA0MjAuNjkxNF0sXHJcbiAgWzE1MDkuODU2NywgNDI2Ljc5NjAyXSxcclxuICBbMTUwOC45NDQ2LCA0MzEuODQ4Nl0sXHJcbiAgWzE1MTMuMzg4OCwgNDMwLjU5NjRdLFxyXG4gIFsxNTE1LjI2NDIsIDQzNC4wNDYyXSxcclxuICBbMTUxMS4wMTMyLCA0MzUuOTU4NDRdLFxyXG4gIFsxNTEyLjg2NzcsIDQzOS44ODIyXSxcclxuICBbMTUxMi44Mzc5LCA0NDMuMTc2MV0sXHJcbiAgWzE1MTUuNzUxMiwgNDQ1LjA2ODQ4XSxcclxuICBbMTUxNS43NzQ0LCA0NDkuMzM4MV0sXHJcbiAgWzE1MjMuMjg3OCwgNDQ2LjEzODldLFxyXG4gIFsxNTIyLjcyMjUsIDQ0OS45NjJdLFxyXG4gIFsxNTI0LjUyMzcsIDQ1Mi44ODcyXSxcclxuICBbMTUyOC43ODUzLCA0NTIuNzg0NzNdLFxyXG4gIFsxNTI2LjEwMzgsIDQ1Ni4yMDYzNl0sXHJcbiAgWzE1MjkuODkzOCwgNDU3LjI3ODYzXSxcclxuICBbMTUyNy4wMDkyLCA0NDguMjEwNTddLFxyXG4gIFsxNTMwLjY3NjUsIDQ0OS4yNzcwNF0sXHJcbiAgWzE1MzYuMTA3MywgNDQzLjgxMjhdLFxyXG4gIFsxNTQwLjgyNzEsIDQ0NC4zMDE3XSxcclxuICBbMTU0NC45NDQ1LCA0NDMuNzg1MzddLFxyXG4gIFsxNTQ1LjM2ODQsIDQ0MC4xNTUwM10sXHJcbiAgWzE1NDQuNjIwMSwgNDM2LjQwMTVdLFxyXG4gIFsxNTQ1Ljk1NDMsIDQzMS4zMjA1M10sXHJcbiAgWzE1NTMuMDI2LCA0MjguMjU0MjddLFxyXG4gIFsxNTUzLjk3NywgNDMyLjIzMDQ0XSxcclxuICBbMTU1MC41MjczLCA0MzEuNTE4XSxcclxuICBbMTU0OC4zMzk2LCA0MzQuMjkxXSxcclxuICBbMTU0OS4xODQ5LCA0MzcuMzExOV0sXHJcbiAgWzE1NDguODk3MSwgNDQwLjMxNTI4XSxcclxuICBbMTU0OS4zMDY2LCA0NDMuMzU0Nl0sXHJcbiAgWzE1NDcuODY5OCwgNDQ2Ljc1MjYyXSxcclxuICBbMTU0NC4zNzMzLCA0NDcuNTQxODddLFxyXG4gIFsxNTQxLjA3NDcsIDQ0OC41ODMyNV0sXHJcbiAgWzE1MzguMDIyLCA0NDcuMDU3N10sXHJcbiAgWzE1MzYuODgwMSwgNDUwLjU0MDRdLFxyXG4gIFsxNTM3LjYyNiwgNDU0LjExOTI2XSxcclxuICBbMTUzNC44NzkzLCA0NTUuNDM3ODRdLFxyXG4gIFsxNTQwLjMyNzksIDQ1Mi4xNzQyNl0sXHJcbiAgWzE1NDEuMjA1OCwgNDU1Ljg0NzZdLFxyXG4gIFsxNTQzLjU2NTksIDQ1MS40MDE3XSxcclxuICBbMTU0NC43OTMyLCA0NTQuNTIzMl0sXHJcbiAgWzE1NDYuODcyLCA0NTAuODE1MjVdLFxyXG4gIFsxNTQ2LjAwMSwgNDU3LjU1OTddLFxyXG4gIFsxNTQzLjM5NDUsIDQ1OS4wODMyXSxcclxuICBbMTU0OC42NTU2LCA0NTguNDU5OTNdLFxyXG4gIFsxNTUwLjA5NSwgNDYxLjMzNzRdLFxyXG4gIFsxNTQ2LjM0MDEsIDQ2Mi4wNTA3OF0sXHJcbiAgWzE1NDMuMDk3OCwgNDYzLjMyOTM1XSxcclxuICBbMTUzNy42MTQxLCA0NTcuODM2MDZdLFxyXG4gIFsxNTQwLjM3MjMsIDQ2MC4xMDA1Ml0sXHJcbiAgWzE1MzcuMjEyNiwgNDYxLjYyODA1XSxcclxuICBbMTUzOS42MDc1LCA0NjQuNTIxODVdLFxyXG4gIFsxNTQyLjM4OTIsIDQ2Ny42Mzg5XSxcclxuICBbMTU0NS45NzgzLCA0NjYuOTA5OTddLFxyXG4gIFsxNTQ4Ljk0NTYsIDQ2NC45NjA5XSxcclxuICBbMTU1MC4wNjcxLCA0NjkuMzY4NjJdLFxyXG4gIFsxNTQ2LjgzMzYsIDQ3MC45ODUzXSxcclxuICBbMTU0My41NjE1LCA0NzIuMTY1ODNdLFxyXG4gIFsxNTM5Ljk1NzUsIDQ3MC44MTA0XSxcclxuICBbMTUzNy43MTI2LCA0NjguMDc3NF0sXHJcbiAgWzE1MzUuNTM3NCwgNDY1LjM1OTI1XSxcclxuICBbMTUzMC44MzU3LCA0NjEuMDE5MV0sXHJcbiAgWzE1MjcuNTMyMiwgNDU5LjY1NDNdLFxyXG4gIFsxNTMzLjc5MTksIDQ2Mi41NjU5Ml0sXHJcbiAgWzE1MzMuOTM0MSwgNDU4LjkwMjI4XSxcclxuICBbMTUzMS44NDI4LCA0NTUuMjAyMzNdLFxyXG4gIFsxNTMzLjM5NzUsIDQ1MS45MjUyM10sXHJcbiAgWzE1MzQuMTMyNiwgNDQ3LjU0XSxcclxuICBbMTUzMC44ODEzLCA0NDQuOTEwMDNdLFxyXG4gIFsxNTI5LjQzMTMsIDQ0MC43ODUyNV0sXHJcbiAgWzE1MzMuNDY0LCA0NDAuNjAyNzVdLFxyXG4gIFsxNTM3LjQxMTYsIDQzOS44MzE5N10sXHJcbiAgWzE1NDEuNTEzOSwgNDQwLjM5NTMyXSxcclxuICBbMTUzOS44NTIzLCA0MzYuNDAwNDVdLFxyXG4gIFsxNTQyLjI5OTYsIDQzMi45NzQxMl0sXHJcbiAgWzE1NDIuNjI0LCA0MjguNDQ5OV0sXHJcbiAgWzE1MzguNDc4MSwgNDI3LjI0Njc3XSxcclxuICBbMTU0Mi4xMTkxLCA0MjMuMTg4NDVdLFxyXG4gIFsxNTQ3LjMxMzQsIDQyMS42MzMwNl0sXHJcbiAgWzE1NDUuNzc0NywgNDI1LjQ2NTgyXSxcclxuICBbMTU0OC41MjE0LCA0MjguMjE0NTddLFxyXG4gIFsxNTUwLjQ0NzMsIDQyNC43NTUyXSxcclxuICBbMTU1MS43NjEsIDQyMS4wNDE1XSxcclxuICBbMTU1Mi42NTE1LCA0MTcuNjg2MjJdLFxyXG4gIFsxNTQ3Ljg0NTIsIDQxNy41MDU4M10sXHJcbiAgWzE1NDguNTU0NiwgNDE0LjA5NDY3XSxcclxuICBbMTU0My43NTYzLCA0MTguNjY5OTJdLFxyXG4gIFsxNTQxLjQ5ODIsIDQxNC45NDQ0XSxcclxuICBbMTU0NC44MTM2LCA0MTIuMzA4MDddLFxyXG4gIFsxNTQ3LjExNzcsIDQwNy41OTAxOF0sXHJcbiAgWzE1MzkuODA4NywgNDEwLjU4MTg1XSxcclxuICBbMTUzNS40Mjg3LCA0MDguOTIzNjVdLFxyXG4gIFsxNTMwLjc4NSwgNDA4LjU5NTY3XSxcclxuICBbMTUyNi44OTgzLCA0MDguOTg5NTZdLFxyXG4gIFsxNTI1LjQ2NDgsIDQwNS4yNjAzOF0sXHJcbiAgWzE1MjQuMjMwMiwgNDAxLjM0NDU3XSxcclxuICBbMTUyNS42NTQ4LCAzOTcuODAzNTZdLFxyXG4gIFsxNTIyLjI4NzcsIDM5NS42NzkyNl0sXHJcbiAgWzE1MjIuOTI3LCAzOTEuMjU3Ml0sXHJcbiAgWzE1MjQuMTY5MywgMzg2LjM4NTQ0XSxcclxuICBbMTUyNi44MTkzLCAzODIuNDcxNjVdLFxyXG4gIFsxNTMwLjQ0NzUsIDM3OC43NDkxNV0sXHJcbiAgWzE1MzUuNDI2MSwgMzgxLjI5Mzk1XSxcclxuICBbMTUzMS4zNDU3LCAzODUuMzMyNl0sXHJcbiAgWzE1MjcuOTU2MiwgMzg5LjEzMDddLFxyXG4gIFsxNTMxLjkyNzcsIDM5MS4yMDMwNl0sXHJcbiAgWzE1MzYuMjAyMywgMzg2LjY3MV0sXHJcbiAgWzE1MzUuMDY0MiwgMzc1LjI1MDM0XSxcclxuICBbMTU0MC4yODMsIDM3OC4wMzAxXSxcclxuICBbMTU0NS41MDE3LCAzNzUuNDMwNF0sXHJcbiAgWzE1NDEuMDIzLCAzNzIuNjY1MjJdLFxyXG4gIFsxNTQ1LjAzMjYsIDM2OC45MjAyNl0sXHJcbiAgWzE1NDguODczLCAzNjUuNjI1OF0sXHJcbiAgWzE1NTMuNzMzNCwgMzY0Ljc0MTgyXSxcclxuICBbMTU1Ny45NzAzLCAzNjYuMDE4ODZdLFxyXG4gIFsxNTYyLjI4MzksIDM2Ny4xNDM3N10sXHJcbiAgWzE1NjIuODMwNiwgMzczLjAwOTVdLFxyXG4gIFsxNTU4LjQwNjcsIDM3MS41MzA5OF0sXHJcbiAgWzE1NTMuNTE1OSwgMzcwLjMxMDE1XSxcclxuICBbMTU0OS44Njg3LCAzNzMuMTAxMDRdLFxyXG4gIFsxNTU0LjQzMDQsIDM3Ni4zNjExOF0sXHJcbiAgWzE1NDkuNjQ4LCAzNzguOTcwMV0sXHJcbiAgWzE1NDUuMTg3LCAzODEuMzU2MjZdLFxyXG4gIFsxNTQwLjU1NzksIDM4My41MDM0OF0sXHJcbiAgWzE1NDEuMjAwNiwgMzg4LjQ5NTk3XSxcclxuICBbMTU0NS44NDk5LCAzODYuODkxMV0sXHJcbiAgWzE1NTAuNDY4MywgMzg0LjM2NTE3XSxcclxuICBbMTU1NC4zNjI3LCAzODEuNTYxNDZdLFxyXG4gIFsxNTU3Ljk5MzcsIDM4NC4zNTQ3NF0sXHJcbiAgWzE1NTkuODE1LCAzODAuNTQ0OThdLFxyXG4gIFsxNTU4Ljg5NTEsIDM3Ni40MTIzXSxcclxuICBbMTU2My4wMjMsIDM3Ny42MzAyXSxcclxuICBbMTU2Ni43Mjg4LCAzNzYuMTk5NjhdLFxyXG4gIFsxNTY5LjYxMjMsIDM3OC42OTc0OF0sXHJcbiAgWzE1NjkuNjQ3MSwgMzgyLjMyNDIyXSxcclxuICBbMTU3My4xMDk0LCAzNzkuNDA0NDhdLFxyXG4gIFsxNTc2LjQ0MDIsIDM3Ny45NTgxM10sXHJcbiAgWzE1NzkuODE4NSwgMzc1Ljc1NjNdLFxyXG4gIFsxNTgxLjExMzUsIDM3OS43MDQ5XSxcclxuICBbMTU3Ny42OTY0LCAzODEuNjY3OTddLFxyXG4gIFsxNTc3LjgzOTQsIDM4NS45MjEwMl0sXHJcbiAgWzE1NzYuNzMwMiwgMzg4Ljg5NDddLFxyXG4gIFsxNTc5LjAyNjEsIDM5MC44Mjg4Nl0sXHJcbiAgWzE1ODIuMDc2NSwgMzkwLjUyNzgzXSxcclxuICBbMTU4NC42MTUxLCAzOTIuOTA2ODZdLFxyXG4gIFsxNTg1LjM3ODksIDM5Ny44ODMzNl0sXHJcbiAgWzE1ODEuODgyNCwgMzk4LjA2MzldLFxyXG4gIFsxNTgxLjQ1MTksIDM5NC4zNjAzNV0sXHJcbiAgWzE1NzcuODc2MiwgMzkzLjkzMDczXSxcclxuICBbMTU3OC4xMjU3LCAzOTcuMzgyNV0sXHJcbiAgWzE1NzQuNTA1OSwgMzk5LjUwMjldLFxyXG4gIFsxNTc0Ljk0MjQsIDQwMy42ODE0Nl0sXHJcbiAgWzE1NzQuNTk5MiwgMzk1LjE5NTA3XSxcclxuICBbMTU3NC45MjMxLCAzOTEuNjc1MjNdLFxyXG4gIFsxNTcxLjAwODIsIDM5Mi41NDddLFxyXG4gIFsxNTY3LjI3ODQsIDM5NC4wNjMyXSxcclxuICBbMTU3MS40NzUyLCAzOTYuNjAyNl0sXHJcbiAgWzE1NjguNDYwNywgMzk4LjEyNjldLFxyXG4gIFsxNTY1LjAxMzUsIDM5OC41NDczM10sXHJcbiAgWzE1NjMuNTEsIDM5Mi44MjA2Ml0sXHJcbiAgWzE1NjUuOTkyNiwgMzg5LjY3NTQ4XSxcclxuICBbMTU2OS4zODA0LCAzODguNzkzNDZdLFxyXG4gIFsxNTcyLjc1MzIsIDM4OC45NTcxNV0sXHJcbiAgWzE1NzQuNjE3MSwgMzg2LjE5NjVdLFxyXG4gIFsxNTc0LjQxNTgsIDM4Mi43MzIwM10sXHJcbiAgWzE1NzEuMzAxNiwgMzg1LjE4MzQ0XSxcclxuICBbMTU2Ni45NTI2LCAzODUuNDA1XSxcclxuICBbMTU2Ni4wMDE3LCAzODAuNTQwNzddLFxyXG4gIFsxNTYzLjIyNzgsIDM4My4zMDQwMl0sXHJcbiAgWzE1NjIuNjIzMywgMzg3LjMzNzVdLFxyXG4gIFsxNTU5LjEzNSwgMzg4LjkyMjQ1XSxcclxuICBbMTU1NS4wMzI1LCAzODguMjk4NjVdLFxyXG4gIFsxNTUwLjg2MDEsIDM4OC45MjU0XSxcclxuICBbMTU0Ny44MTc1LCAzOTEuOTc1ODNdLFxyXG4gIFsxNTQzLjg0NDEsIDM5Mi45NDkxXSxcclxuICBbMTU0Mi45OTk1LCAzOTguNDc1OF0sXHJcbiAgWzE1NDYuNDgyOSwgMzk2Ljg3NDI0XSxcclxuICBbMTU1MC4xNDg3LCAzOTYuNzE2OTJdLFxyXG4gIFsxNTUxLjQyNzIsIDQwMC40NjkwNl0sXHJcbiAgWzE1NTQuNjYyOCwgMzk3Ljc5OTg3XSxcclxuICBbMTU1Ny45NzUsIDQwMC4yNDI4XSxcclxuICBbMTU2Mi41MDQ0LCA0MDEuODQ0MV0sXHJcbiAgWzE1NjAuODU5NCwgMzk3LjI1OTgzXSxcclxuICBbMTU2MC4wNjkxLCAzOTMuMDUwMV0sXHJcbiAgWzE1NTYuNTcwOCwgMzkzLjk0MDNdLFxyXG4gIFsxNTUyLjQ2ODUsIDM5My4yNDY0XSxcclxuICBbMTU1NC42NjEzLCA0MDMuMjI0MzddLFxyXG4gIFsxNTU4Ljc3MzYsIDQwNC4zMjgzXSxcclxuICBbMTU1Ny45OTY3LCA0MTEuMTE0ODddLFxyXG4gIFsxNTYxLjU4OCwgNDEwLjg0NjA0XSxcclxuICBbMTU2MC4wMjg4LCA0MDcuOTEzOV0sXHJcbiAgWzE1NjMuMDExMiwgNDA1Ljg2NTMzXSxcclxuICBbMTU2Ni44MDc5LCA0MDMuOTAzMDhdLFxyXG4gIFsxNTcwLjQxNjMsIDQwMS41MjY5NV0sXHJcbiAgWzE1NzEuMDE2NCwgNDA1Ljg1NzQ4XSxcclxuICBbMTU2NS43NDgsIDQwOC41NjM5Nl0sXHJcbiAgWzE1NjkuMjIzMywgNDA5LjkxMTk2XSxcclxuICBbMTU2NC44MTkxLCA0MTcuMTcxMjNdLFxyXG4gIFsxNTY0Ljg3ODUsIDQyMS41Mzc0XSxcclxuICBbMTU2OC4xOTc4LCA0MTkuNDAxNl0sXHJcbiAgWzE1NzEuMzQ2NCwgNDIxLjA2MTc3XSxcclxuICBbMTU3My4yOTkxLCA0MjMuOTA2MDddLFxyXG4gIFsxNTcyLjYzODcsIDQxNy4yOTAxNl0sXHJcbiAgWzE1NzYuNjU0NywgNDE3LjM2OTIzXSxcclxuICBbMTU4MC45MDU1LCA0MTYuNjQxNDhdLFxyXG4gIFsxNTc5LjI3MjcsIDQxMi44MTU2XSxcclxuICBbMTU3NS42NTk0LCA0MTMuMjEzOTNdLFxyXG4gIFsxNTcxLjg4MTMsIDQxMy4wNzY0Ml0sXHJcbiAgWzE1NjkuMDQwNSwgNDE1LjUyNV0sXHJcbiAgWzE1NjYuNjc2LCA0MTMuMjkxXSxcclxuICBbMTU2My44OTg0LCA0MTIuNTc2ODRdLFxyXG4gIFsxNTYwLjg5ODIsIDQxNS4wMDk0Nl0sXHJcbiAgWzE1NjEuMjgzOSwgNDE4LjY0MjE4XSxcclxuICBbMTU2MC4zNzU2LCA0MjEuNzkwNzddLFxyXG4gIFsxNTU5LjM0MiwgNDI1LjA4MDc4XSxcclxuICBbMTU1Ny4wODMsIDQyNy40NzIwMl0sXHJcbiAgWzE1NTQuNjA2NCwgNDI0LjUyOTU0XSxcclxuICBbMTU1Ni4xOTg0LCA0MjEuMzQ5MzNdLFxyXG4gIFsxNTU3LjEyMzUsIDQxNy45NTAwNF0sXHJcbiAgWzE1NTYuODU5NCwgNDE0LjQ1MTldLFxyXG4gIFsxNTUyLjc0OTksIDQxNC4yODg4Ml0sXHJcbiAgWzE1NDkuODEyMSwgNDEwLjY2ODk1XSxcclxuICBbMTU1NC4wOTQ3LCA0MTAuOTc3MzZdLFxyXG4gIFsxNTU1Ljg0NDUsIDQwNy40MTY4N10sXHJcbiAgWzE1NTEuOTE4OCwgNDA3LjMzNjRdLFxyXG4gIFsxNTUwLjE5MTksIDQwNC4yMjA4M10sXHJcbiAgWzE1NDcuMTg3NiwgNDAxLjM1MDldLFxyXG4gIFsxNTQ0LjUxOTgsIDQwMy45OTAyM10sXHJcbiAgWzE1NDEuMDM0NSwgNDAyLjQxNTI4XSxcclxuICBbMTU0Mi44ODI2LCA0MDcuOTExMDddLFxyXG4gIFsxNTM4Ljk5OSwgNDA2LjIwNzZdLFxyXG4gIFsxNTM2LjAxNjYsIDQwMy44ODkzN10sXHJcbiAgWzE1MzIuODM5NywgNDA1LjE2MTg3XSxcclxuICBbMTUzMy4yNzUxLCA0MDAuMzE0NTRdLFxyXG4gIFsxNTM3LjUzNjMsIDQwMC4zNzkxNV0sXHJcbiAgWzE1MzkuMTIwOCwgMzk3LjAwMjVdLFxyXG4gIFsxNTM5LjcyODQsIDM5My4xNTI4M10sXHJcbiAgWzE1MzYuMjExOCwgMzkxLjIyMTUzXSxcclxuICBbMTUzNC43NjUxLCAzOTUuNzgwNTJdLFxyXG4gIFsxNTMwLjQ1MTMsIDM5Ni40MTkxM10sXHJcbiAgWzE1MjcuMjk1NywgMzkzLjYzNDZdLFxyXG4gIFsxNTI5LjA1OTEsIDQwMC41OTY2NV0sXHJcbiAgWzE1MjkuMjQ5NSwgNDA0LjQ0ODNdLFxyXG4gIFsxNTIyLjcwNDYsIDQwOC42MDg1OF0sXHJcbiAgWzE1MTguNDE1NCwgNDA5LjEzMzM2XSxcclxuICBbMTUyMC45NTg2LCA0MTIuOTA2MV0sXHJcbiAgWzE1MTYuNDA4LCA0MTQuMTUzNzVdLFxyXG4gIFsxNTEzLjI1NjEsIDQxNy41NTMyMl0sXHJcbiAgWzE1MTMuNTc5NywgNDA5LjYxOTI2XSxcclxuICBbMTUxNi4yNjkzLCA0MDQuNDU5OTNdLFxyXG4gIFsxNTIwLjkyNiwgNDA0LjI4ODQ1XSxcclxuICBbMTUxOS4wMDMyLCAzOTkuNjM2NzhdLFxyXG4gIFsxNTE3LjYyMDYsIDM5NC4xOTYxXSxcclxuICBbMTUxMS41NzUyLCA0MDMuNDE3Nl0sXHJcbiAgWzE1MDkuOTg4OSwgNDEzLjk5NTEyXSxcclxuICBbMTUwNS4zNzI5LCA0MjMuNDQwODZdLFxyXG4gIFsxNTA0LjMxMjMsIDQyOC4zNjk3Ml0sXHJcbiAgWzE1MDQuMjU3LCA0MzIuOTk5MzNdLFxyXG4gIFsxNTA2LjMzODUsIDQzNi44MTMwOF0sXHJcbiAgWzE1MDguODIyMywgNDQwLjQ1NDIyXSxcclxuICBbMTUwNC4xNDI1LCA0NDAuNzc0NjZdLFxyXG4gIFsxNTA2LjQwNTgsIDQ0NC4xNDVdLFxyXG4gIFsxNTAyLjgwNTcsIDQ0NS43NDE2NF0sXHJcbiAgWzE1MDIuNzA0NiwgNDUwLjYyMDQ1XSxcclxuICBbMTUwNi44ODQ1LCA0NDguNTMwODVdLFxyXG4gIFsxNTA5LjcxNjksIDQ0NS4xNjc0NV0sXHJcbiAgWzE1MTIuNDQwNywgNDQ3LjUyMDZdLFxyXG4gIFsxNTEwLjgxNDYsIDQ1MC42NTc3OF0sXHJcbiAgWzE1MDcuMjkxNywgNDUyLjk3NDg1XSxcclxuICBbMTUwNC4wNTE1LCA0NTUuMjE1MDZdLFxyXG4gIFsxNTA1LjY2MiwgNDU5LjM0MTkyXSxcclxuICBbMTUwOS4xNDUzLCA0NTcuNTg5MzJdLFxyXG4gIFsxNTAyLjI0NzMsIDQ2Mi40NjQwOF0sXHJcbiAgWzE1MDIuMTI1NywgNDY2LjczMzI1XSxcclxuICBbMTUwMS4wNDQyLCA0NTguNzM0NV0sXHJcbiAgWzE0OTkuNDg1NiwgNDU0Ljc1MzU0XSxcclxuICBbMTQ5Ny45MzMxLCA0NTEuMDI4NzVdLFxyXG4gIFsxNDk4LjgwMzMsIDQ0Ni42NDI1Ml0sXHJcbiAgWzE0OTQuMTMyOSwgNDQ4LjgxNTc3XSxcclxuICBbMTQ5NC4zMjc0LCA0NTQuMzE3MjNdLFxyXG4gIFsxNDkwLjA3NTIsIDQ1MS43OTYxXSxcclxuICBbMTQ4Mi45NDQ4LCA0NTguMDI3OF0sXHJcbiAgWzE0NzkuNDEwMiwgNDYwLjkxNl0sXHJcbiAgWzE0ODAuNjQ1OCwgNDQ3LjY1MDAyXSxcclxuICBbMTQ4NS4yNTQ5LCA0NDMuMTcwNzVdLFxyXG4gIFsxNDkwLjYxMDEsIDQ0MC41MDc5XSxcclxuICBbMTQ5NS4xNzYxLCA0MzYuODgyMzJdLFxyXG4gIFsxNTAwLjg3NjgsIDQzNi42MjQ3Nl0sXHJcbiAgWzE1MDAuMTMxNiwgNDQxLjAzOTldLFxyXG4gIFsxNDk2LjcyNDYsIDQ0Mi4wNzYyM10sXHJcbiAgWzE0OTMuNzExNCwgNDQ0LjE1MTI1XSxcclxuICBbMTQ4OS43NjQ2LCA0NDYuMjUyMl0sXHJcbiAgWzE0ODUuNzU3MywgNDQ4LjQ1MTc4XSxcclxuICBbMTQ4NC4zMTA4LCA0NTIuODE2NTNdLFxyXG4gIFsxNDc5LjM0MDcsIDQ1My41Mzk5Ml0sXHJcbiAgWzE0NzUuMjIyOSwgNDU2LjQ0MDY0XSxcclxuICBbMTQ3Mi43NTk4LCA0NjAuNDI4NTNdLFxyXG4gIFsxNDY4LjE3MTQsIDQ2MS41OTMyNl0sXHJcbiAgWzE0NjUuNDkyMiwgNDY1LjA0NDk4XSxcclxuICBbMTQ2MS42MDIyLCA0NjcuMzA2Nl0sXHJcbiAgWzE0NjQuMDA0NiwgNDcxLjE4NjE2XSxcclxuICBbMTQ1OS44NTc5LCA0NzMuMTk0MzRdLFxyXG4gIFsxNDYzLjU0NjUsIDQ3Ni4wMTA2Ml0sXHJcbiAgWzE0NjcuOTQ4NCwgNDc2LjE1MzNdLFxyXG4gIFsxNDY4LjI5NTIsIDQ3Mi45MDczMl0sXHJcbiAgWzE0NjguMDk0NywgNDY4Ljg4NDM0XSxcclxuICBbMTQ3MS41NzQxLCA0NjYuMDk2NjhdLFxyXG4gIFsxNDcyLjQwMDMsIDQ3MS42Njg0M10sXHJcbiAgWzE0NzIuMDE2LCA0NzYuODIyODhdLFxyXG4gIFsxNDY3LjI1MjksIDQ3OS41NjE1Ml0sXHJcbiAgWzE0NjMuMjEwOCwgNDgwLjUwMzRdLFxyXG4gIFsxNDU4LjM0OTEsIDQ3Ny43Mzc0M10sXHJcbiAgWzE0NTkuMjQxNywgNDgxLjk1ODkyXSxcclxuICBbMTQ2My4zMjM1LCA0ODUuNzYwODZdLFxyXG4gIFsxNDY2LjgyNjksIDQ4NC4wMTkxM10sXHJcbiAgWzE0NzAuNDkwNSwgNDgxLjI2OTM1XSxcclxuICBbMTQ3NC42NzAyLCA0ODEuMjE2OThdLFxyXG4gIFsxNDc2LjA1MTQsIDQ3Ny40NzYzMl0sXHJcbiAgWzE0NzYuNDc2OSwgNDczLjU0MTJdLFxyXG4gIFsxNDc2LjMwNzksIDQ2OS4wMTc2N10sXHJcbiAgWzE0NzYuMTAwMiwgNDY0LjIzMzI4XSxcclxuICBbMTQ4MC43NjQ2LCA0NjYuNzM3NzZdLFxyXG4gIFsxNDg0LjYzNiwgNDY0LjQ3Mzk0XSxcclxuICBbMTQ4Ny42NjQ5LCA0NjEuMjk3OTddLFxyXG4gIFsxNDg3Ljk4ODIsIDQ1Ni4xOTM2Nl0sXHJcbiAgWzE0OTIuMDIyMSwgNDU4LjQ2OTU0XSxcclxuICBbMTQ5Ni42NTM4LCA0NTguOTI4Ml0sXHJcbiAgWzE0OTcuOTAxMSwgNDYzLjY2NTg2XSxcclxuICBbMTQ5OS42Mjk5LCA0NzAuMTM5NDddLFxyXG4gIFsxNTA0LjIzNTUsIDQ3Mi41NjAwNl0sXHJcbiAgWzE0OTkuNzAxNywgNDc2LjUxNjJdLFxyXG4gIFsxNDk1LjgzNzUsIDQ3Mi4zNzU4Ml0sXHJcbiAgWzE0OTUuMDQ2OSwgNDY3LjY2MjldLFxyXG4gIFsxNDkyLjg0MTIsIDQ2My4wODg2OF0sXHJcbiAgWzE0ODkuNzQyNiwgNDY2Ljg1NTE2XSxcclxuICBbMTQ4NS44NjA4LCA0NzAuMTM0XSxcclxuICBbMTQ5MC43NzIsIDQ3Mi4xODE1OF0sXHJcbiAgWzE0ODkuNTI3MywgNDc3LjUyMjM0XSxcclxuICBbMTQ4NC42Nzc1LCA0NzkuNjcxNTddLFxyXG4gIFsxNDg3LjgwNywgNDgzLjQxNDE4XSxcclxuICBbMTQ5NC4wNTY2LCA0ODEuOTUzNTVdLFxyXG4gIFsxNDk0LjUyNTYsIDQ3Ni44MTk1Ml0sXHJcbiAgWzE0ODUuMjUxNSwgNDc0LjkyMjk0XSxcclxuICBbMTQ4MS4wNzk2LCA0NzEuNTk3MzhdLFxyXG4gIFsxNDgwLjU3MzYsIDQ3Ni4xNjE5M10sXHJcbiAgWzE0NzkuMzQxOCwgNDgwLjExMzc3XSxcclxuICBbMTQ4MS43NDQ5LCA0ODMuMDQ5ODddLFxyXG4gIFsxNDc3LjEwNjcsIDQ4NC44NDA4Ml0sXHJcbiAgWzE0NzEuNzkzNiwgNDg0Ljc0Mzg3XSxcclxuICBbMTQ2OC45NDUxLCA0ODguMDk2ODZdLFxyXG4gIFsxNDY2LjQ4NjMsIDQ5MS4wNzMxXSxcclxuICBbMTQ2Mi4zOTcxLCA0ODkuOTI5MTRdLFxyXG4gIFsxNDU5LjEyOTUsIDQ5Mi4xMTU3XSxcclxuICBbMTQ1NS44NjMzLCA0OTQuNDA3NF0sXHJcbiAgWzE0NTIuMTA1OCwgNDkyLjUxOTE3XSxcclxuICBbMTQ0Ny42ODA3LCA0OTEuODQ4ODJdLFxyXG4gIFsxNDQ5LjQyMTgsIDQ4Mi41MDgyNF0sXHJcbiAgWzE0NTQuNjYzMSwgNDc0LjQ1NDM1XSxcclxuICBbMTQ1Mi44NjI1LCA0NzguODExNTJdLFxyXG4gIFsxNDU0LjcwOTIsIDQ4My40MzUwNl0sXHJcbiAgWzE0NTguODg5NiwgNDg2LjQ3MzE0XSxcclxuICBbMTQ1NS4yMjk3LCA0ODguNzI1Nl0sXHJcbiAgWzE0NTAuOTk2NiwgNDg3LjQ3NDgyXSxcclxuICBbMTQ0Ni4zOTUzLCA0ODcuMjM2NV0sXHJcbiAgWzE0MzYuNTk1NSwgNDkwLjIwNjczXSxcclxuICBbMTQ0Mi4wMzk2LCA0OTAuMjI1OF0sXHJcbiAgWzE0NDAuMDgwMiwgNDk0LjY4NzFdLFxyXG4gIFsxNDQ0LjM1MzgsIDQ5NS4yNDE5XSxcclxuICBbMTQ1MC4xMDk3LCA0OTYuODY1OF0sXHJcbiAgWzE0NDUuODAzNywgNDk5LjUyXSxcclxuICBbMTQ0MS40OCwgNTAyLjMxMzQ1XSxcclxuICBbMTQzOC4zNjIzLCA0OTguOTI5M10sXHJcbiAgWzE0MzUuNDYzOSwgNDk0Ljg0NjUzXSxcclxuICBbMTQzMS42NDk0LCA0OTIuMzM2MzZdLFxyXG4gIFsxNDI4LjkyNywgNDk2LjM1NTldLFxyXG4gIFsxNDMzLjI4OCwgNDk4LjU4NjczXSxcclxuICBbMTQzMS4wMzAzLCA1MDIuMzY0XSxcclxuICBbMTQzNS45MTUzLCA1MDMuMjc5NjZdLFxyXG4gIFsxNDM4Ljk4MTIsIDUwNy40MDE5Ml0sXHJcbiAgWzE0NDQuNTIwMywgNTA4LjQyMTk3XSxcclxuICBbMTQ0Ni43NTc2LCA1MDQuMzAxNTddLFxyXG4gIFsxNDUxLjUxMDYsIDUwMi4xMjc4XSxcclxuICBbMTQ1NS4wNDExLCA0OTkuMTYzOV0sXHJcbiAgWzE0NTkuNjkwNCwgNDk4LjI3NzA0XSxcclxuICBbMTQ2My4zNTY0LCA0OTUuMTM2OF0sXHJcbiAgWzE0NjQuODI0MywgNTAxLjA1ODA3XSxcclxuICBbMTQ2NC44OTExLCA1MDcuNDIwMzVdLFxyXG4gIFsxNDU4LjQ0MTIsIDUwNC44MDEyNF0sXHJcbiAgWzE0NTIuMjAwMSwgNTA3LjM3OF0sXHJcbiAgWzE0NDkuMjIzLCA1MTIuNDU0XSxcclxuICBbMTQ0MC40MjU0LCA1MTIuNzQyOF0sXHJcbiAgWzE0MzcuMTcyLCA1MTYuNzc3MzRdLFxyXG4gIFsxNDM0LjM3MDEsIDUxMi40NDIxXSxcclxuICBbMTQzMy43NDM3LCA1MDcuODU0ODNdLFxyXG4gIFsxNDI5LjMxMzIsIDUwNi41OTUwM10sXHJcbiAgWzE0MjQuODU3MiwgNTA2Ljc5MzNdLFxyXG4gIFsxNDI4LjUwOTgsIDUxMS40ODQ2XSxcclxuICBbMTQzMS41MTM1LCA1MTYuNjEyM10sXHJcbiAgWzE0MzEuNzY5LCA1MjQuNTExMV0sXHJcbiAgWzE0MzQuMzM3OSwgNTIxLjExNjE1XSxcclxuICBbMTQzOC43MzA3LCA1MjIuMDI3ODNdLFxyXG4gIFsxNDQyLjM4MTIsIDUxOS4wOTcxXSxcclxuICBbMTQ0NS45MzQ0LCA1MTYuMjI5NzRdLFxyXG4gIFsxNDQ4LjY0ODYsIDUyMi4yNzA3XSxcclxuICBbMTQ0My45NTY1LCA1MjQuNzIwNjRdLFxyXG4gIFsxNDU1LjAzNTMsIDUyNi43MzkyNl0sXHJcbiAgWzE0NDkuMDgyNSwgNTI4Ljc4NTE2XSxcclxuICBbMTQ0My43OTEzLCA1MzAuOTc5XSxcclxuICBbMTQzNS40OTIsIDUyNy45NTg2XSxcclxuICBbMTQzOS42OTc5LCA1MjcuMDg2OV0sXHJcbiAgWzE0MzguODEzNiwgNTMzLjUwMDI0XSxcclxuICBbMTQzMy45NDU0LCA1MzIuODM1N10sXHJcbiAgWzE0MzAuNTYxOCwgNTM2LjA1MjNdLFxyXG4gIFsxNDMwLjYzMywgNTI4Ljk1MDRdLFxyXG4gIFsxNDI3LjQ2MzYsIDUzMS44MzA1N10sXHJcbiAgWzE0MjIuOTM4NywgNTMzLjIyODddLFxyXG4gIFsxNDE4LjMzMzksIDUzNy4yNzUxXSxcclxuICBbMTM5Mi41MzA4LCA1MzMuOTU0Ml0sXHJcbiAgWzEzOTkuNTU1NCwgNTMxLjEyNzddLFxyXG4gIFsxMzk1LjA5MzMsIDUyNy44OTQ0XSxcclxuICBbMTM5NC41MDYzLCA1MjMuMjA4MjVdLFxyXG4gIFsxMzk2LjUzMywgNTE5LjA3NjVdLFxyXG4gIFsxNDAwLjI2ODMsIDUyMy42NDc0Nl0sXHJcbiAgWzE0MDEuMzY3MiwgNTE4LjA5MTNdLFxyXG4gIFsxMzk4LjkzMDIsIDUxNS4wNzhdLFxyXG4gIFsxMzk1LjIwMzQsIDUxNC40MjgyXSxcclxuICBbMTM5Mi4zNjU3LCA1MTYuMzI5XSxcclxuICBbMTM5Mi42Njc2LCA1MDcuMjA2NDJdLFxyXG4gIFsxMzkyLjEwNiwgNTExLjM4MDU1XSxcclxuICBbMTM5Ni43MjQ5LCA1MTAuOTM2OThdLFxyXG4gIFsxMzk5LjczMywgNTA4LjUzNTY0XSxcclxuICBbMTQwMS42MTYsIDUxMi4wOTQ4NV0sXHJcbiAgWzE0MDkuMjA1LCA1MTIuNjM2ODRdLFxyXG4gIFsxNDA4LjkyMjQsIDUwNy44NTAwN10sXHJcbiAgWzE0MTAuOTgzNiwgNTA0LjQ1NjQ4XSxcclxuICBbMTQxMi44ODc4LCA1MTAuODkyM10sXHJcbiAgWzE0MTMuNTQ5NiwgNTE1LjY1OF0sXHJcbiAgWzE0MTUuODQ3NywgNTIwLjE3MV0sXHJcbiAgWzE0MTcuOTk3MSwgNTI0LjYzMDZdLFxyXG4gIFsxNDIyLjc2NzgsIDUyMi4zMDQyNl0sXHJcbiAgWzE0MjIuMzQ2MywgNTE3LjkwOTJdLFxyXG4gIFsxNDE4LjUyMjEsIDUxNi40NTgxXSxcclxuICBbMTQxNy43NzY5LCA1MTEuOTE0NzNdLFxyXG4gIFsxNDIyLjU5MzUsIDUxMS43OTYwMl0sXHJcbiAgWzE0MjYuMzEwNCwgNTE1Ljc2MzJdLFxyXG4gIFsxNDI4LjMxMjMsIDUyMC41MjQ5XSxcclxuICBbMTQyNy4wMzQyLCA1MjUuNTkzMjZdLFxyXG4gIFsxNDIyLjgxODgsIDUyNy45MTU1XSxcclxuICBbMTQxNy44ODg3LCA1MzAuNzU2Nl0sXHJcbiAgWzE0MTMuMTg0MSwgNTI5LjIxNDVdLFxyXG4gIFsxNDEyLjQxNzUsIDUyNC4xODExNV0sXHJcbiAgWzE0MTAuMzUwNSwgNTIwLjM5MTldLFxyXG4gIFsxNDA5LjAyMDgsIDUxNi41OTYxXSxcclxuICBbMTQwNS44Njc5LCA1MjMuNzI0NV0sXHJcbiAgWzE0MDguNTY2NCwgNTI4LjQ4MzY0XSxcclxuICBbMTQwMy45NDg3LCA1MjkuMDc1N10sXHJcbiAgWzE0MDUuMjA5NCwgNTE5LjQxMTVdLFxyXG4gIFsxNDA0Ljk0MzIsIDUxNC44MDMzXSxcclxuICBbMTQwNS41NzUsIDUxMC41NzA5OF0sXHJcbiAgWzE0MDMuNzE4MywgNTA2Ljk2MDMzXSxcclxuICBbMTQwNS43MzEyLCA1MDMuNTcxNV0sXHJcbiAgWzE0MDcuNTMxMiwgNTAwLjA0OTA0XSxcclxuICBbMTQwNS42MDQ3LCA0OTYuMTEwNTNdLFxyXG4gIFsxNDAxLjY2NzcsIDQ5NC4wOTk1OF0sXHJcbiAgWzE0MDEuNDY0NiwgNDk3Ljg0Mzg0XSxcclxuICBbMTQwMS43NjU1LCA1MDEuMTU1MTVdLFxyXG4gIFsxMzk5LjgzNzQsIDUwNC4zMjg2N10sXHJcbiAgWzEzOTYuMTA5LCA1MDYuMTk0NDNdLFxyXG4gIFsxMzkyLjk4MDcsIDUwMi40NTFdLFxyXG4gIFsxMzk2LjU3NDIsIDUwMC42MjQ5N10sXHJcbiAgWzEzOTcuMzM4LCA0OTYuNDAzOV0sXHJcbiAgWzE0MDAuNDk2LCA0OTAuMjg4MjddLFxyXG4gIFsxNDA1LjAzMzYsIDQ5MC43NzU0XSxcclxuICBbMTQwOS4xNTQ1LCA0OTIuMDA3MDJdLFxyXG4gIFsxNDExLjkyNjMsIDUwMC4xMTkzNV0sXHJcbiAgWzE0MTUuNDgwNiwgNTA3LjY4NTc2XSxcclxuICBbMTQyMC4wNjY5LCA1MDYuMjQ3NF0sXHJcbiAgWzE0MTUuOTI5MSwgNTAyLjk3NDczXSxcclxuICBbMTQxNS4yNzg2LCA0OTcuNTg4Nl0sXHJcbiAgWzE0MTguOTU4LCA0OTguNjIxMjJdLFxyXG4gIFsxNDIyLjQ3OTIsIDUwMS4zMzldLFxyXG4gIFsxNDI2LjcxNCwgNTAwLjU2NzhdLFxyXG4gIFsxNDE5LjY0NTYsIDQ5MS42NzEzNl0sXHJcbiAgWzE0MjIuNzk2OCwgNDk1LjcyMzM2XSxcclxuICBbMTQyNS45OTcsIDQ5MS45NDc0NV0sXHJcbiAgWzE0MjQuMTkxOCwgNDg3LjI2OTUzXSxcclxuICBbMTQxOS4wNTUyLCA0ODYuMzU0NzRdLFxyXG4gIFsxNDE0LjE4MzcsIDQ4NC40MjU2M10sXHJcbiAgWzE0MTQuMDc2MiwgNDg5LjQyNTYzXSxcclxuICBbMTQxNC44MTgxLCA0OTMuNjI5ODJdLFxyXG4gIFsxNDEwLjM0NzIsIDQ5NS44NzgwMl0sXHJcbiAgWzE0MDkuMzY4OSwgNDg3LjYwM10sXHJcbiAgWzE0MDUuMDM3NiwgNDg1LjQyNF0sXHJcbiAgWzE0MDEuODQ5NCwgNDg2Ljc4ODJdLFxyXG4gIFsxMzk4LjAyMiwgNDg1Ljg3Njc3XSxcclxuICBbMTM5NC43OTcsIDQ4OC40NjA0NV0sXHJcbiAgWzEzOTcuMzIwNiwgNDkyLjE2MjldLFxyXG4gIFsxMzkzLjE2OTQsIDQ5Mi42NTkyN10sXHJcbiAgWzEzOTIuNjU2NiwgNDk2LjQ4OTA3XSxcclxuICBbMTM5MC4wMDAyLCA0OTkuMDU0MjZdLFxyXG4gIFsxMzg2LjE4MTIsIDQ5Ny4yNTQxNV0sXHJcbiAgWzEzODguMTAwOCwgNDkzLjA3MTUzXSxcclxuICBbMTM5MC4xOTc4LCA0ODkuMDk0NzNdLFxyXG4gIFsxMzkzLjE3MTYsIDQ4NC4zMjMxOF0sXHJcbiAgWzEzODQuNjA1MiwgNDg3LjM5MDVdLFxyXG4gIFsxMzgzLjY2OTksIDQ5MS4zMjY4NF0sXHJcbiAgWzEzODIuNzYxLCA0OTUuNDM1NV0sXHJcbiAgWzEzNzkuNDkyMSwgNDkxLjg1NjJdLFxyXG4gIFsxMzgwLjAzNywgNDg3LjA4MDI2XSxcclxuICBbMTM3Ni4wNTYzLCA0ODkuODI3OTddLFxyXG4gIFsxMzc3LjYyMjQsIDQ5NS4zNjE0Ml0sXHJcbiAgWzEzNzkuOTA3OCwgNDk4LjU1NzU2XSxcclxuICBbMTM4Mi4yMzI5LCA1MDEuNTY2NzddLFxyXG4gIFsxMzg2LjEyNjgsIDUwMS41MzE4Nl0sXHJcbiAgWzEzODkuMDY4OCwgNTAzLjk0ODU1XSxcclxuICBbMTM4OC45MzY5LCA1MDcuODI1Ml0sXHJcbiAgWzEzODcuMzEyNCwgNTEwLjYyNjQ2XSxcclxuICBbMTM4OC42NjA0LCA1MTQuOTEwOTVdLFxyXG4gIFsxMzg1LjU3MTksIDUxOC40MDgyXSxcclxuICBbMTM5MC41NDQ5LCA1MTkuNzc0OV0sXHJcbiAgWzEzODMuMTY5OSwgNTIyLjE4NTA2XSxcclxuICBbMTM4My44MTU0LCA1MjcuNTAwODVdLFxyXG4gIFsxMzc5LjE3MDIsIDUyNy44OTUxNF0sXHJcbiAgWzEzNzguMTA3OSwgNTIyLjkxOTA3XSxcclxuICBbMTM3OC45OTU0LCA1MTguMjU3N10sXHJcbiAgWzEzODEuOTU0MywgNTE1LjYyMzhdLFxyXG4gIFsxMzg0LjcyMjQsIDUxMy4zMDUwNV0sXHJcbiAgWzEzODIuMzk5NSwgNTA5LjYzMTFdLFxyXG4gIFsxMzg0Ljc1MjIsIDUwNS45NTkwOF0sXHJcbiAgWzEzODAuMTQ1NSwgNTA1LjU3NzgyXSxcclxuICBbMTM3Ny4zMDMyLCA1MDIuMTg4MjNdLFxyXG4gIFsxMzc1LjM1MTQsIDQ5OC45MDYyMl0sXHJcbiAgWzEzNzIuMDE4MSwgNDk3LjEwNzE4XSxcclxuICBbMTM3NC4wMjgzLCA0OTMuNTM4NTRdLFxyXG4gIFsxMzcxLjA0MzUsIDQ5MC45NzddLFxyXG4gIFsxMzY3LjUyMDUsIDQ5MC4zODcwNV0sXHJcbiAgWzEzNjQuMDg0LCA0OTIuMzExXSxcclxuICBbMTM2My42NTQyLCA0OTYuMTY5NDNdLFxyXG4gIFsxMzYwLjM1MDIsIDQ5MC4zNzg3NV0sXHJcbiAgWzEzNjUuMjI1NSwgNDg2LjgwMjI1XSxcclxuICBbMTM2OS42MTE1LCA0ODUuMjMyOF0sXHJcbiAgWzEzNzIuNjI4LCA0ODcuNzcxMzZdLFxyXG4gIFsxMzYxLjM4MTEsIDQ4NS4xODM4XSxcclxuICBbMTM1Ni45MDIxLCA0ODUuMDQ3MTJdLFxyXG4gIFsxMzUyLjEwMDMsIDQ4Ny4xMzMzNl0sXHJcbiAgWzEzNDguMzA4LCA0ODkuNTExODRdLFxyXG4gIFsxMzQ3LjYxMjgsIDQ4NC45OTgwMl0sXHJcbiAgWzEzNDQuNDkzMywgNDg3Ljc3MDk0XSxcclxuICBbMTM0Ny4xMzk0LCA0OTMuMTVdLFxyXG4gIFsxMzQzLjU5OTIsIDQ5MS4zMDgzXSxcclxuICBbMTM0Mi41MTMxLCA0OTguMjMyMzZdLFxyXG4gIFsxMzQzLjgxOTYsIDUwMS45MDQwMl0sXHJcbiAgWzEzNDMuNjQxNCwgNDk0Ljg0ODM2XSxcclxuICBbMTM0Ni44OTcyLCA0OTcuNDIxNzJdLFxyXG4gIFsxMzQ4LjQwMjYsIDUwMS4wNzIyN10sXHJcbiAgWzEzNTAuOTE1LCA1MDUuNTY1MDZdLFxyXG4gIFsxMzQ2Ljk2MTksIDUwNS4wMzE3NF0sXHJcbiAgWzEzNTMuODg4LCA1MDEuODc0ODhdLFxyXG4gIFsxMzUxLjkxNDMsIDQ5OC41NjI0NF0sXHJcbiAgWzEzNTAuNDg5NCwgNDk1LjA1MDIzXSxcclxuICBbMTM1Mi4wODQsIDQ5MS41NzI4XSxcclxuICBbMTM1NS4yMjAyLCA0OTQuNTI1XSxcclxuICBbMTM1Ni4xODM4LCA0ODkuNjk3NzJdLFxyXG4gIFsxMzU5LjU2MDksIDQ5NS4xMTA1N10sXHJcbiAgWzEzNTcuMTMxMSwgNDk4LjYzODk4XSxcclxuICBbMTM1OC41OTAzLCA1MDIuNzI4NzNdLFxyXG4gIFsxMzYyLjQwNTYsIDUwNC41MDA2XSxcclxuICBbMTM2Mi40MjM4LCA0OTkuOTcwOTJdLFxyXG4gIFsxMzU1LjI4MTUsIDUwNi4wMDk1OF0sXHJcbiAgWzEzNTguNzQ1NywgNTA4LjM3NDAyXSxcclxuICBbMTM2My41NjYzLCA1MDguNzg1MV0sXHJcbiAgWzEzNjYuNTc2MywgNTA1LjQ2MTI3XSxcclxuICBbMTM2Ny4yOTExLCA1MDEuODE0Ml0sXHJcbiAgWzEzNjcuNDkyNywgNDk4LjEyNTkyXSxcclxuICBbMTM2OC43NDMsIDQ5NC42MzVdLFxyXG4gIFsxMzcxLjg5MTUsIDUwMS4zNTEzOF0sXHJcbiAgWzEzNzAuOTAzMiwgNTA1LjUxMzc2XSxcclxuICBbMTM3NS4xMzY1LCA1MDUuNDY3NV0sXHJcbiAgWzEzNzcuNDQ2MiwgNTA5LjE3MzE2XSxcclxuICBbMTM3OS4xMzEsIDUxMi44MTMyM10sXHJcbiAgWzEzNzUuMTkxNywgNTE0LjExMTc2XSxcclxuICBbMTM3NC4xMjg1LCA1MTguNDE5ODZdLFxyXG4gIFsxMzcyLjg3NjYsIDUyMi44MTM1XSxcclxuICBbMTM2NC41NjMsIDUyNS4yNTYzNV0sXHJcbiAgWzEzNjkuMjc2NiwgNTI2LjYzMzZdLFxyXG4gIFsxMzc0LjQ2ODQsIDUyOC4wNjk0Nl0sXHJcbiAgWzEzNzEuMDU3NywgNTMxLjc3ODQ0XSxcclxuICBbMTM3OC40MjgzLCA1MzMuNDc2MV0sXHJcbiAgWzEzODUuMzMyNSwgNTMzLjQxOTI1XSxcclxuICBbMTM4OC42MzE2LCA1MjMuNzgyN10sXHJcbiAgWzEzODkuMTg0NCwgNTI4Ljc1NzQ1XSxcclxuICBbMTM4Ni43MzYsIDU2MC41MDY3XSxcclxuICBbMTM4MC45OTk4LCA1NTguMzYzOV0sXHJcbiAgWzEzNzUuMjE0OCwgNTYxLjY3ODFdLFxyXG4gIFsxMzczLjc2MTgsIDU2Ni4xNjAxNl0sXHJcbiAgWzEzNjkuNjUyNiwgNTY3LjIxNDZdLFxyXG4gIFsxMzcyLjg5OTcsIDU3MS4xMjFdLFxyXG4gIFsxMzcyLjgzMjgsIDU3NS41MjMzXSxcclxuICBbMTM3MS41MjI1LCA1NzkuNTE0OTVdLFxyXG4gIFsxMzcyLjUzNDQsIDU4My42OTY5XSxcclxuICBbMTM3Ni40ODAxLCA1ODMuNjA1OF0sXHJcbiAgWzEzNzkuNjkxNCwgNTg2LjE5M10sXHJcbiAgWzEzNzkuNzcyOCwgNTkwLjU1NDQ0XSxcclxuICBbMTM3NS44MjI4LCA1OTIuNTg0N10sXHJcbiAgWzEzNzEuMjMwOCwgNTkxLjk0Nl0sXHJcbiAgWzEzNjkuNTkzOSwgNTg3LjEwNTddLFxyXG4gIFsxMzc0LjY0NDMsIDU4OC4wMzM2XSxcclxuICBbMTM2Ni42NTUzLCA1OTAuNTI4Ml0sXHJcbiAgWzEzNjIuMzk4LCA1ODkuNDU1MV0sXHJcbiAgWzEzNTQuODk4NiwgNTkxLjM3NjE2XSxcclxuICBbMTM1OC4yNDY4LCA1ODguNjY4MzNdLFxyXG4gIFsxMzYyLjYyNjMsIDU5NC4yNjVdLFxyXG4gIFsxMzY3LjMxMDUsIDU5NS4zNjk0XSxcclxuICBbMTM1Ny45MTMxLCA1OTQuMTQ4MV0sXHJcbiAgWzEzNTkuNjkyNywgNTk4LjQ2NjQzXSxcclxuICBbMTM2MC45NTc4LCA2MDMuMTU1NzZdLFxyXG4gIFsxMzY0LjM0ODksIDU5OS4yODldLFxyXG4gIFsxMzYxLjY2NSwgNjA3LjQwNzFdLFxyXG4gIFsxMzYxLjQxMTYsIDYxMS42MzA4XSxcclxuICBbMTM1Ni43MjIyLCA2MTAuMzA5NF0sXHJcbiAgWzEzNTIuNjA3MiwgNjEzLjI3MzQ0XSxcclxuICBbMTM0OS42MDQ3LCA2MTcuMTU2OF0sXHJcbiAgWzEzNTEuMTEzOSwgNjIxLjcxMThdLFxyXG4gIFsxMzU0LjEzNTcsIDYxNy43OTI2Nl0sXHJcbiAgWzEzNTcuODU2LCA2MTQuOTA0Ml0sXHJcbiAgWzEzNTguMDg3OSwgNjIwLjAyMzg2XSxcclxuICBbMTM2MS40MDk0LCA2MTguMjQzM10sXHJcbiAgWzEzNjMuNDE3NywgNjIyLjA1NjE1XSxcclxuICBbMTM1NS4zMzIsIDYyMy4wMDkwM10sXHJcbiAgWzEzNTIuOTA2NCwgNjI2LjE4MTRdLFxyXG4gIFsxMzQ4LjYyNjEsIDYyNi4yMjYyNl0sXHJcbiAgWzEzNDMuOTM3NiwgNjI0Ljc2NTI2XSxcclxuICBbMTM0Ni41MTM0LCA2MjEuNTUzNl0sXHJcbiAgWzEzNDUuMDc5NSwgNjE3LjY0Mzg2XSxcclxuICBbMTM0Ni4yNDUxLCA2MTMuODUwNjVdLFxyXG4gIFsxMzQ4Ljc3NzgsIDYxMC43NTk1XSxcclxuICBbMTM1Mi4xMzU2LCA2MDcuODAwOTZdLFxyXG4gIFsxMzQ3LjQ1NzUsIDYwNi4wMjFdLFxyXG4gIFsxMzQ1LjU5MiwgNjAxLjkzNjk1XSxcclxuICBbMTM1MS4xODMxLCA2MDIuNDY1OTRdLFxyXG4gIFsxMzU2LjMyNjQsIDYwNi4wMjM1Nl0sXHJcbiAgWzEzNTYuMzQ4NCwgNjAyLjA4NTZdLFxyXG4gIFsxMzU0LjM5OTgsIDU5OC4zOTk1XSxcclxuICBbMTM0OC41Mjk0LCA1OTcuOTc2OV0sXHJcbiAgWzEzNTIuMDg0NSwgNTk0Ljk1NjJdLFxyXG4gIFsxMzUwLjQzMTQsIDU5MC44OTE5N10sXHJcbiAgWzEzNDcuMTM0OCwgNTg4LjQwMDc2XSxcclxuICBbMTM0NS4wODk0LCA1ODQuNjc0ODddLFxyXG4gIFsxMzQyLjQyMzYsIDU4OC45ODk2XSxcclxuICBbMTM0Ni42MTcsIDU5My4zNjM5NV0sXHJcbiAgWzEzNTMuMDUzLCA1ODcuMzc1MV0sXHJcbiAgWzEzNTUuNDI0MSwgNTg0LjA2NTRdLFxyXG4gIFsxMzYwLjI4MDYsIDU4NC4zNTgzXSxcclxuICBbMTM2NC44NTgyLCA1ODUuMzIwN10sXHJcbiAgWzEzNjguMzUyLCA1ODIuNDI1N10sXHJcbiAgWzEzNjQuNjUyOCwgNTgwLjMwNzNdLFxyXG4gIFsxMzYwLjk5MjIsIDU3OS44MTI1XSxcclxuICBbMTM1OS4yODQsIDU3NS42NzQ4N10sXHJcbiAgWzEzNjMuODc2LCA1NzQuOTcyNF0sXHJcbiAgWzEzNjcuNjgwOCwgNTc3LjQxNDldLFxyXG4gIFsxMzY4Ljg1MzEsIDU3My40MDYyNV0sXHJcbiAgWzEzNjYuNDAzLCA1NzAuNDczNjNdLFxyXG4gIFsxMzY0LjgyMzUsIDU2Ni40Nzk2XSxcclxuICBbMTM2NC4wOTksIDU2Mi4zMzA0NF0sXHJcbiAgWzEzNjYuNDI5MiwgNTU3LjU1NDJdLFxyXG4gIFsxMzY5LjU0NzksIDU2Mi4wODk5N10sXHJcbiAgWzEzNzEuOTIzMSwgNTU2Ljk1ODhdLFxyXG4gIFsxMzc3LjcxNCwgNTUzLjE0ODVdLFxyXG4gIFsxMzc2LjM5MywgNTU3LjU0MjJdLFxyXG4gIFsxMzczLjU0MDgsIDU1MC4xNzQ5XSxcclxuICBbMTM2Ni4wNjYsIDU0Mi42MTIyNF0sXHJcbiAgWzEzNjYuMjQ0OSwgNTM0LjcyMDY0XSxcclxuICBbMTM2NC41NDg2LCA1MzAuMDE1ODddLFxyXG4gIFsxMzU5Ljk4NjgsIDUzMy41ODY3M10sXHJcbiAgWzEzNTYuNDkwMiwgNTMwLjMwMTldLFxyXG4gIFsxMzU5LjcyNzksIDUyNi42ODU0XSxcclxuICBbMTM1Ny42ODMsIDUyMS45NDYyXSxcclxuICBbMTM2Mi4zOTc3LCA1MjEuMjA1OTNdLFxyXG4gIFsxMzY0LjcwNywgNTE2Ljg5MTM2XSxcclxuICBbMTM2Ny43NjM0LCA1MjEuMjk0Ml0sXHJcbiAgWzEzNjkuNTU4NiwgNTE3LjMxMjRdLFxyXG4gIFsxMzcwLjY5NzEsIDUxMy4zNTIyM10sXHJcbiAgWzEzNzMuMTI2LCA1MDkuNzIwMjhdLFxyXG4gIFsxMzY4LjUyMiwgNTA5LjI0OTg4XSxcclxuICBbMTM2Ni4xMDM2LCA1MTIuODA1M10sXHJcbiAgWzEzNjEuMzU0NCwgNTEyLjY5NTddLFxyXG4gIFsxMzU5LjkyNDIsIDUxNy4xMTQ5XSxcclxuICBbMTM1NS4yMjE0LCA1MTcuNDI4OF0sXHJcbiAgWzEzNTEuMzk0NywgNTE0LjYxNTddLFxyXG4gIFsxMzU2LjY1ODksIDUxMy4wOTQ0XSxcclxuICBbMTM1My4yMzE3LCA1MTAuMTY5MjVdLFxyXG4gIFsxMzQ4LjQzMjEsIDUxMC40NTkxN10sXHJcbiAgWzEzNDQuMjQzNywgNTA3Ljg5NDYyXSxcclxuICBbMTM0MC42OTM0LCA1MDQuNTg4NjhdLFxyXG4gIFsxMzM5LjUzNjcsIDUwOS4wMzk4XSxcclxuICBbMTMzNC45NjY2LCA1MDkuMzY1OF0sXHJcbiAgWzEzMzYuMDcwMywgNTA0LjQ5NzU2XSxcclxuICBbMTMzOC42MjM3LCA1MDAuMDQ5M10sXHJcbiAgWzEzMzYuMjQyNywgNDk2LjMyMDJdLFxyXG4gIFsxMzM5LjgwMiwgNDk0LjUzOTVdLFxyXG4gIFsxMzM3LjAyMTIsIDQ5MC43NDQ5M10sXHJcbiAgWzEzNDAuNDk4LCA0ODkuNDQ5OTVdLFxyXG4gIFsxMzM4LjIzNDEsIDQ4Ni4wNDkzOF0sXHJcbiAgWzEzMzQuNTY1MywgNDg2LjM2MjRdLFxyXG4gIFsxMzMxLjQ4NzIsIDQ4OC4xNDQxM10sXHJcbiAgWzEzMjcuMzkzNiwgNDg4LjA1MDAyXSxcclxuICBbMTMyMi45Mzk1LCA0ODguMjMxMzhdLFxyXG4gIFsxMzI1LjEyNTksIDQ4My4wMjE2N10sXHJcbiAgWzEzMjAuNzgxNCwgNDg0LjA0MTQ0XSxcclxuICBbMTMxNy4yMDY1LCA0ODcuMzMwNV0sXHJcbiAgWzEzMTkuNzAzNiwgNDkyLjQyOTI2XSxcclxuICBbMTMxNi4xNDg5LCA0OTYuNDYxMThdLFxyXG4gIFsxMzExLjcxMDQsIDQ5OC43MTA3NV0sXHJcbiAgWzEzMDYuOTUyOSwgNDk5Ljc0NTU3XSxcclxuICBbMTMwMS42NDU0LCA1MDIuMTMxMTZdLFxyXG4gIFsxMzAyLjYxMjQsIDUwNy4xOTc0OF0sXHJcbiAgWzEzMDEuNjY5LCA1MTIuMjAxM10sXHJcbiAgWzEzMDEuMTExNiwgNTE2LjkxNjldLFxyXG4gIFsxMzA1LjcyOTYsIDUxNS42MjYxXSxcclxuICBbMTMwNi4zMzQ3LCA1MTAuNTc4OF0sXHJcbiAgWzEzMDguMDk1OCwgNTA1LjkyMjE4XSxcclxuICBbMTMxMC43MzAxLCA1MTIuNDQ2OTZdLFxyXG4gIFsxMzEwLjcwOSwgNTE3LjA3MzI0XSxcclxuICBbMTMwNy44NDc4LCA1MTkuODQ3N10sXHJcbiAgWzEzMDQuMTg4NSwgNTIxLjU0NDddLFxyXG4gIFsxMjk3LjgzODQsIDUxOC45NjcwNF0sXHJcbiAgWzEyOTYuMDE1OSwgNTIxLjk1OTZdLFxyXG4gIFsxMzAwLjYwNzQsIDUyMy4wNDEyNl0sXHJcbiAgWzEzMDAuNTMwMywgNTI3Ljk1MDddLFxyXG4gIFsxMjk2LjcxLCA1MjUuNzIxOV0sXHJcbiAgWzEyOTEuOTE1NCwgNTI3LjMzNTNdLFxyXG4gIFsxMjg3Ljk5MTMsIDUyOC43NjA1Nl0sXHJcbiAgWzEyODQuODI5NywgNTI1LjQ2MjY1XSxcclxuICBbMTI4Ny40NiwgNTIwLjI2NzQ2XSxcclxuICBbMTI4OC42MjUyLCA1MjQuMTAyNF0sXHJcbiAgWzEyOTIuNDU0MSwgNTIzLjQ3NzY2XSxcclxuICBbMTI5Mi4zNTQ2LCA1MTkuNDMwMDVdLFxyXG4gIFsxMjkwLjY1MSwgNTE1Ljg4OTM0XSxcclxuICBbMTI5NS40MzY1LCA1MTUuNTg5NF0sXHJcbiAgWzEyOTcuMzMxMywgNTExLjYzMDNdLFxyXG4gIFsxMjk3LjkyNjYsIDUwNi45ODc1XSxcclxuICBbMTI5NS44MzMxLCA1MDIuNjc2ODhdLFxyXG4gIFsxMjkzLjA4MzQsIDUwNi43Mzk5M10sXHJcbiAgWzEyODguNjQwNiwgNTA3Ljk4MDkzXSxcclxuICBbMTI5Mi42OTk4LCA1MTEuMzY5MV0sXHJcbiAgWzEyODguNDUsIDUxMi4zNzM2Nl0sXHJcbiAgWzEyODQuODMzMSwgNTEwLjYzODI0XSxcclxuICBbMTI4Ni4wMzU4LCA1MTUuNzU1MV0sXHJcbiAgWzEyODMuNDQzNSwgNTE4LjY4MDddLFxyXG4gIFsxMjgxLjk0OTYsIDUyMi4zMTc1N10sXHJcbiAgWzEyODAuMjQ4MywgNTI2LjE0MzQzXSxcclxuICBbMTI3Ni40MzY0LCA1MjcuMzg5NjVdLFxyXG4gIFsxMjc2Ljc1MTYsIDUyMi40ODc1NV0sXHJcbiAgWzEyNzYuNjI1NywgNTE0LjA4MTg1XSxcclxuICBbMTI3MS4xMDYsIDUxNC43NzU2XSxcclxuICBbMTI2Ni44NjI5LCA1MTcuNjQzNDNdLFxyXG4gIFsxMjY0LjYzOSwgNTIxLjU0NjVdLFxyXG4gIFsxMjYwLjMwNSwgNTIyLjQxNzM2XSxcclxuICBbMTI1Ni42MTg3LCA1MTkuOTgzNjRdLFxyXG4gIFsxMjU2LjM5NDQsIDUxNS4zMTY4XSxcclxuICBbMTI1NS45ODgyLCA1MTAuNzQyMjhdLFxyXG4gIFsxMjU4LjkwNSwgNTA3LjQ0Nzk0XSxcclxuICBbMTI2MC42MjUxLCA1MDMuNTQwNzddLFxyXG4gIFsxMjU4LjgxOTYsIDQ5OS4zMDA2Nl0sXHJcbiAgWzEyNTQuMTYxMSwgNTAwLjkzMjk4XSxcclxuICBbMTI1NC4zMTM3LCA1MDUuNjAxODddLFxyXG4gIFsxMjUwLjAwMDksIDUwNy41OThdLFxyXG4gIFsxMjQ4LjYyNTYsIDUwMy4wNDc0NV0sXHJcbiAgWzEyNDguOTMxMywgNDk4LjgwOTddLFxyXG4gIFsxMjUyLjczOSwgNDk1Ljk1MzI1XSxcclxuICBbMTI1Mi43ODcsIDQ5MS4yMzc2N10sXHJcbiAgWzEyNTUuMDg0MiwgNDg3LjE1MzVdLFxyXG4gIFsxMjQ4LjU2OTMsIDQ4MS42Mzc5NF0sXHJcbiAgWzEyNTAuMzc2LCA0ODYuMTY2MDJdLFxyXG4gIFsxMjUzLjcxODQsIDQ4Mi40OTk2M10sXHJcbiAgWzEyNTguNjM5OSwgNDkwLjkzMDFdLFxyXG4gIFsxMjU3LjM3NTIsIDQ5NS4yMzg3NF0sXHJcbiAgWzEyNjMuMTI5MiwgNDk0LjQ3MTc0XSxcclxuICBbMTI2My42MTEsIDQ4OC45NDk5NV0sXHJcbiAgWzEyNTkuMjk3NywgNDg1LjgwNzIyXSxcclxuICBbMTI1Ni4wNTY4LCA0NzYuOTU2MThdLFxyXG4gIFsxMjUxLjMyNTEsIDQ3NS4wMTVdLFxyXG4gIFsxMjQ2LjYwMTksIDQ3My45NjA3NV0sXHJcbiAgWzEyNDQuNjM2NiwgNDc4Ljg2NDA3XSxcclxuICBbMTIzOS41NDU5LCA0ODQuODM5NTRdLFxyXG4gIFsxMjM1LjcyMjQsIDQ4Ni4zNTcxOF0sXHJcbiAgWzEyMzguMDkxOCwgNDgwLjgwODY1XSxcclxuICBbMTIyNy43NzUsIDQ4MS45NTgyMl0sXHJcbiAgWzEyMjEuOTE2NiwgNDgxLjUxNzldLFxyXG4gIFsxMjIwLjA2ODYsIDQ4NS45MDA4NV0sXHJcbiAgWzEyMjIuMTQwNCwgNDkwLjE2ODNdLFxyXG4gIFsxMjE3LjQ3NDEsIDQ5MC4wMDExNl0sXHJcbiAgWzEyMTIuMDcxNywgNDk0LjQ3MTYyXSxcclxuICBbMTIwOC45NTM5LCA0OTUuODE0NjRdLFxyXG4gIFsxMjA3LjQ3MTYsIDQ5OS4xNDE4XSxcclxuICBbMTIwNy4xMjI5LCA1MDIuODA0ODddLFxyXG4gIFsxMjA3LjQxMjgsIDUwNi43Mzg5NV0sXHJcbiAgWzEyMDQuMDk1NywgNTA5LjQyMTg4XSxcclxuICBbMTIwMi40ODEyLCA0OTguMzY3OF0sXHJcbiAgWzEyMDIuNTA2MSwgNTAyLjg4NTc0XSxcclxuICBbMTIwMC4yNDA4LCA1MDYuNzYwOTNdLFxyXG4gIFsxMTk1LjMxNjksIDUwNy4zMDkzXSxcclxuICBbMTE5OC4zMDIsIDUxMS41Mjg3NV0sXHJcbiAgWzExOTMuOTA0NCwgNTEyLjQ1MDI2XSxcclxuICBbMTE4OC42MzQzLCA1MTIuODIxNl0sXHJcbiAgWzExOTAuODQ5NywgNTA4LjY2OV0sXHJcbiAgWzExODguMjczOCwgNTA1LjM0MzkzXSxcclxuICBbMTE4Ny4zNzQzLCA1MDEuNTc1NjVdLFxyXG4gIFsxMTg2LjQwMDQsIDQ5Ny40NzEwN10sXHJcbiAgWzExODkuNjY1MiwgNDk1LjEyNTFdLFxyXG4gIFsxMTkxLjY1MzgsIDQ5OS4yMTA0XSxcclxuICBbMTE5Mi43OTM4LCA1MDMuMjMyNl0sXHJcbiAgWzExOTcuNTE1NywgNTAyLjY0MjU4XSxcclxuICBbMTE5Ny40NDY0LCA0OTguMzAyMzddLFxyXG4gIFsxMTk0LjM1MTYsIDQ5NS41NjQ2N10sXHJcbiAgWzExOTcuMjEwOCwgNDkyLjA3ODNdLFxyXG4gIFsxMjAwLjQsIDQ5NC40MDkzXSxcclxuICBbMTIwNS4wODQ3LCA0OTQuMzc0NjNdLFxyXG4gIFsxMjA4LjExMTMsIDQ5MC41NjcyXSxcclxuICBbMTIxMy4yOTI2LCA0OTAuNzE0M10sXHJcbiAgWzEyMTEuNjE5MywgNDg3LjAzMDU4XSxcclxuICBbMTIxNS45MTg2LCA0ODQuNTIwNl0sXHJcbiAgWzEyMTMuOTY5NSwgNDc1LjgyNDE2XSxcclxuICBbMTIyNS4xNDkzLCA0ODUuOTQyNzJdLFxyXG4gIFsxMjMxLjA5MTMsIDQ4NS43NDQ1N10sXHJcbiAgWzEyMjcuODQyMywgNDkwLjA4ODVdLFxyXG4gIFsxMjMyLjU5MjMsIDQ5MC42NjQ1Ml0sXHJcbiAgWzEyMzcuMzM5LCA0OTIuNjA5ODZdLFxyXG4gIFsxMjQwLjY2NzUsIDQ4OS4wNDI0NV0sXHJcbiAgWzEyNDIuODEzOCwgNDkzLjM0NDQyXSxcclxuICBbMTI0My40MjUzLCA0OTguODk1MTRdLFxyXG4gIFsxMjM4LjAwODgsIDQ5Ny43NjYwOF0sXHJcbiAgWzEyMzkuMTUzMywgNTAyLjc3NDE0XSxcclxuICBbMTIzNS43NTYxLCA1MDYuMzk4NjVdLFxyXG4gIFsxMjMxLjIwMDYsIDUwNy4zNzUzXSxcclxuICBbMTIyNi44NTM4LCA1MDUuNTY5NjddLFxyXG4gIFsxMjIyLjA4MiwgNTA3LjU2OTc2XSxcclxuICBbMTIxNy44NTc5LCA1MDQuNjI3OTNdLFxyXG4gIFsxMjE4LjUzLCA0OTkuNzkwMDRdLFxyXG4gIFsxMjIzLjUxODgsIDUwMC45NzYyNl0sXHJcbiAgWzEyMjcuODE5NywgNDk1LjkzNTZdLFxyXG4gIFsxMjI4Ljk0NiwgNTAwLjU0MjA1XSxcclxuICBbMTIzMy42MDk1LCA1MDEuNTQ2NjNdLFxyXG4gIFsxMjMyLjc2NjIsIDQ5NS44MDM0NF0sXHJcbiAgWzEyMjQuNjAyLCA0OTMuNzk3NThdLFxyXG4gIFsxMjIxLjAzNzIsIDQ5NS42ODAzXSxcclxuICBbMTIxNi41NjIsIDQ5NC44Mjg4Nl0sXHJcbiAgWzEyMTMuNjQ3NiwgNDk5LjAzMTQ2XSxcclxuICBbMTIxMi4wMjgzLCA1MDIuOTMxNDZdLFxyXG4gIFsxMjEzLjIxOTcsIDUwNy40NTYxMl0sXHJcbiAgWzEyMTYuNTksIDUxMS4zOTk3Ml0sXHJcbiAgWzEyMTguODU2MSwgNTE2LjI3NjddLFxyXG4gIFsxMjEyLjQ4NDksIDUxNS40NDYxN10sXHJcbiAgWzEyMDkuMDY1MSwgNTE5LjMyODNdLFxyXG4gIFsxMjA0LjM5MjEsIDUxOC43ODI2XSxcclxuICBbMTIwNi45Mjg2LCA1MTQuNjAyMjNdLFxyXG4gIFsxMjA5Ljg1MDEsIDUxMS4wMDIxNF0sXHJcbiAgWzEyMDIuNjAwMSwgNTEzLjE5OV0sXHJcbiAgWzEyMDAuNDAyNywgNTE2LjQzNDYzXSxcclxuICBbMTE5Ni4yMTM0LCA1MTcuNDg5Nl0sXHJcbiAgWzExOTEuOTE2MywgNTE2LjY0Nl0sXHJcbiAgWzExOTEuNzI3MiwgNTIxLjkzNjY1XSxcclxuICBbMTE5My45MzMzLCA1MjcuNjMxN10sXHJcbiAgWzExOTYuMzI5OCwgNTIzLjUxNTU2XSxcclxuICBbMTIwMC4xOTM2LCA1MjEuMTUzMl0sXHJcbiAgWzEyMDUuMjkzNSwgNTIzLjQ0MzI0XSxcclxuICBbMTIxMC41NDU3LCA1MjkuMzczNTRdLFxyXG4gIFsxMjE0LjQ3NzksIDUzMi4zODM0XSxcclxuICBbMTIxOS4xMTYsIDUzNS4wMzk4XSxcclxuICBbMTIyNy40NzIsIDUzNi43MTMyNl0sXHJcbiAgWzEyMjMuOTA0LCA1MzIuOTIxNDVdLFxyXG4gIFsxMjI3LjM5OTQsIDUyMy42NDUxNF0sXHJcbiAgWzEyMjIuNzA4NCwgNTI2LjA1NzI1XSxcclxuICBbMTIyNy4wNTc0LCA1MjkuMDM2ODddLFxyXG4gIFsxMjMwLjc4OTEsIDUzMi41MTQ4XSxcclxuICBbMTIzMy4zNjU2LCA1MzcuOTI3ODZdLFxyXG4gIFsxMjQxLjg2MDQsIDU0NC43NDA2Nl0sXHJcbiAgWzEyNDcuMTk3OSwgNTQ2LjQyMjddLFxyXG4gIFsxMjQzLjM2NjcsIDU1MS4zNjhdLFxyXG4gIFsxMjM4LjcxMTQsIDU0MC41MDk3N10sXHJcbiAgWzEyMzkuMjUxNiwgNTM1Ljk0NjldLFxyXG4gIFsxMjM1Ljk4MzYsIDUzMy4yMTddLFxyXG4gIFsxMjM1LjE4NjUsIDUyOC44OTQyXSxcclxuICBbMTIzMS42Njk0LCA1MjYuNjk4OF0sXHJcbiAgWzEyMzMuNjUzNywgNTIyLjMwODY1XSxcclxuICBbMTIzOS4yMjQ2LCA1MjcuNjA2Ml0sXHJcbiAgWzEyMzguOTg4LCA1MjMuMTgxMzRdLFxyXG4gIFsxMjM3LjcwNzgsIDUxNy44MzEyXSxcclxuICBbMTIzNS40MDc2LCA1MTEuNzE2NTVdLFxyXG4gIFsxMjQwLjk2OTYsIDUxMy40NzQwNl0sXHJcbiAgWzEyMzMuMDM3OCwgNTE2LjExNDg3XSxcclxuICBbMTIyOC41MzIxLCA1MTIuMTkwN10sXHJcbiAgWzEyMjMuMzA5OSwgNTEzLjAzOV0sXHJcbiAgWzEyMjguODE3NSwgNTE4LjYxNDU2XSxcclxuICBbMTIyMy44NjgzLCA1MTkuMTRdLFxyXG4gIFsxMjE5Ljc0NzcsIDUyMi4xNDQ1M10sXHJcbiAgWzEyMTUuOTA3MiwgNTI2LjIzNzNdLFxyXG4gIFsxMjE5LjQ5MjEsIDUyOS44NTA2NV0sXHJcbiAgWzEyMTUuNTA5OCwgNTE5LjU4MDE0XSxcclxuICBbMTIxMi41OTM1LCA1MjIuMjkyXSxcclxuICBbMTIwOS42ODMxLCA1MjUuMjkxNl0sXHJcbiAgWzEyMDguNjk4NywgNTMzLjg3MDJdLFxyXG4gIFsxMjA0LjI1OTYsIDUzMy4xMTc4XSxcclxuICBbMTIwNS4wNTA0LCA1MjguNTQzM10sXHJcbiAgWzEyMDAuNjMzLCA1MjYuMTkyNzVdLFxyXG4gIFsxMjA1LjQzOTIsIDUzOS41NzgzN10sXHJcbiAgWzExOTcuODQ5NiwgNTM5LjM0NDRdLFxyXG4gIFsxMTk4Ljc2NjYsIDUzMC43NDYwM10sXHJcbiAgWzEyMDAuODM4NiwgNTM1Ljg4MTA0XSxcclxuICBbMTIxMS4yNDQ5LCA1MzcuNTk2NV0sXHJcbiAgWzEyMTYuMjU4MiwgNTM5LjE1NjQzXSxcclxuICBbMTIxMS44MDUzLCA1NDMuNDA0OF0sXHJcbiAgWzEyMTcuNjkyOSwgNTQ1LjQ4MzE1XSxcclxuICBbMTIyMi4zMDE1LCA1MzkuNjgwOF0sXHJcbiAgWzEyMjQuMTQ2MSwgNTQ1LjM5OTldLFxyXG4gIFsxMjI5LjEyODMsIDU0Mi4xNjZdLFxyXG4gIFsxMjI5LjQ4NjMsIDU0OS4yNzY1XSxcclxuICBbMTIzNC43NzMsIDU0NC42MzI3NV0sXHJcbiAgWzEyMzcuMzkyOCwgNTUwLjA1MjddLFxyXG4gIFsxMjM5LjAwMTIsIDU1Ny4zMTM1XSxcclxuICBbMTIzMi45ODIzLCA1NTQuNzE3OV0sXHJcbiAgWzEyNDIuMjQ0NCwgNTYxLjUyNTRdLFxyXG4gIFsxMjM3LjY4ODUsIDU2NC44ODY0XSxcclxuICBbMTIzMi44MDMsIDU2MS4yOTk3XSxcclxuICBbMTIzMS44MjkxLCA1NjcuNTY4MV0sXHJcbiAgWzEyNDEuMDg4LCA1NjkuMDEyMTVdLFxyXG4gIFsxMjQwLjY5ODksIDU3Ny4wNzE1XSxcclxuICBbMTIzNi4wNzY1LCA1NzYuNzI4MTVdLFxyXG4gIFsxMjM2LjQ3MDUsIDU3MS41NDI4NV0sXHJcbiAgWzEyMjkuNjUxOSwgNTczLjQ3Mjk2XSxcclxuICBbMTIzMi44NDgsIDU4MC4zOTg4XSxcclxuICBbMTIzMi4wNzI1LCA1ODYuMzgzM10sXHJcbiAgWzEyMjYuNjc5OSwgNTkwLjA3NDhdLFxyXG4gIFsxMjI5LjExMTgsIDYwNS40NDZdLFxyXG4gIFsxMjMzLjIxMzMsIDYwNy40NDg1XSxcclxuICBbMTIzNy40OTM0LCA2MDQuMzIyN10sXHJcbiAgWzEyNDIuMTg4MiwgNjA1LjI3MzRdLFxyXG4gIFsxMjQ2LjQyNywgNjAzLjg1MDQ2XSxcclxuICBbMTI0NC4xODY5LCA2MDkuMTUxMzddLFxyXG4gIFsxMjQ3LjI4NTYsIDYwNy43MTE0XSxcclxuICBbMTI1MC43NzAzLCA2MDguNDc0MjRdLFxyXG4gIFsxMjUyLjMyMjMsIDYxMi40OTIyXSxcclxuICBbMTI0OC4yNzk3LCA2MTIuMTI2NF0sXHJcbiAgWzEyNDEuMTMwOSwgNjEwLjgyMjRdLFxyXG4gIFsxMjM4LjQyMjUsIDYwOC4zMzE0XSxcclxuICBbMTIzNS40OTQsIDYxMS4wMDY4XSxcclxuICBbMTIzNS4yNzMzLCA2MTUuOTQ5NDZdLFxyXG4gIFsxMjI5LjQ5MDcsIDYxNy4zNzcyXSxcclxuICBbMTIyOS41MjczLCA2MTEuNjM3MV0sXHJcbiAgWzEyMzIuNDg0NywgNjEzLjYyOTldLFxyXG4gIFsxMjI1LjM3NzcsIDYxNC42MzI4XSxcclxuICBbMTIyNC4zNjY4LCA2MTguNjc5NDRdLFxyXG4gIFsxMjI5LjExNiwgNjIyLjAzODE1XSxcclxuICBbMTIzMi40OTgzLCA2MjQuMTQzOV0sXHJcbiAgWzEyMzcuMzM4OSwgNjI2Ljg3MDFdLFxyXG4gIFsxMjM5LjUyNzUsIDYyMy40OTY2XSxcclxuICBbMTI0Mi42MDM4LCA2MjYuNzg3OTZdLFxyXG4gIFsxMjQ0LjkzMDIsIDYzMC4yMTU2NF0sXHJcbiAgWzEyNDEuNjAwMywgNjM2LjkwNjFdLFxyXG4gIFsxMjQ0LjQ5NjYsIDY0MC42Mjg2XSxcclxuICBbMTI0Ni4yNjQ0LCA2MzUuNTg5MDVdLFxyXG4gIFsxMjUwLjQ1NjksIDYzNC40NDA5XSxcclxuICBbMTI0OC44OTg3LCA2MzEuMTczN10sXHJcbiAgWzEyNDcuODgyMSwgNjI3LjQzMjg2XSxcclxuICBbMTI0Ni44MTU2LCA2MjMuODc1MzddLFxyXG4gIFsxMjQzLjIsIDYyMy4zODY3XSxcclxuICBbMTI0NC45MDUzLCA2MjAuNTE5M10sXHJcbiAgWzEyNTAuODE0NiwgNjI0LjUxMzddLFxyXG4gIFsxMjUzLjc5NTgsIDYyMS4yMTg3XSxcclxuICBbMTI1MC4yOTI4LCA2MjAuNjcyMzZdLFxyXG4gIFsxMjQ3LjY0MjcsIDYxOS4yNzIzNF0sXHJcbiAgWzEyNDIuODYwNiwgNjE3LjcyMTldLFxyXG4gIFsxMjQxLjI4ODUsIDYxNS4xMzQ2NF0sXHJcbiAgWzEyNDEuMDExNCwgNjIwLjMxNzddLFxyXG4gIFsxMjM3Ljk4MywgNjE4LjU5MjE2XSxcclxuICBbMTIzNi4wNTgzLCA2MjIuNzk2MTRdLFxyXG4gIFsxMjMzLjQxNDcsIDYxOS41Mzk1NV0sXHJcbiAgWzEyMzguMzU4MywgNjEzLjU4NDk2XSxcclxuICBbMTI0NC41MjE1LCA2MTIuOTA4NV0sXHJcbiAgWzEyNDUuOTIwMiwgNjE2LjA2MTY1XSxcclxuICBbMTI0OS41ODI1LCA2MTUuOTQ0N10sXHJcbiAgWzEyNTYuMDAzOCwgNjEzLjQ1MzNdLFxyXG4gIFsxMjU5LjQ0NjQsIDYxNS4zODM1XSxcclxuICBbMTI1Mi45MjMzLCA2MTYuODI5OF0sXHJcbiAgWzEyNTYuMjg5MywgNjE4LjIwNTddLFxyXG4gIFsxMjYzLjAyOSwgNjE0LjAxNjg1XSxcclxuICBbMTI1OS4wODEzLCA2MTAuMzQ5NV0sXHJcbiAgWzEyNjAuODI1NCwgNjA1Ljk4NzldLFxyXG4gIFsxMjYwLjE5NTEsIDYwMS4zNzg4NV0sXHJcbiAgWzEyNTkuMzQ4OSwgNTk2LjQ3MzldLFxyXG4gIFsxMjU2LjIwOTUsIDU5MS45OTM2NV0sXHJcbiAgWzEyNTAuMDQ2MSwgNTg5Ljg0ODYzXSxcclxuICBbMTI1MS45ODk5LCA1OTQuMjIzMl0sXHJcbiAgWzEyNTUuMjEwNCwgNTk2LjYxODRdLFxyXG4gIFsxMjU1LjgwNjQsIDYwMC44MTQ0XSxcclxuICBbMTI1Ni40MDIxLCA2MDQuOTQwMl0sXHJcbiAgWzEyNTQuODA5LCA2MDguNjIwMjRdLFxyXG4gIFsxMjUxLjMyMDcsIDU5OS40MjU5XSxcclxuICBbMTI1MS40MTMyLCA2MDMuOTkyNl0sXHJcbiAgWzEyNDEuNTExNywgNjAwLjUyOTA1XSxcclxuICBbMTI0Ni43MTIsIDU5OS45MDAxXSxcclxuICBbMTI0Ny43MDEsIDU5NS4xNDM0M10sXHJcbiAgWzEyMzguMDc2OSwgNTgyLjc2NzMzXSxcclxuICBbMTI0My42MjU0LCA1ODEuNTA0NzZdLFxyXG4gIFsxMjQ1LjM0OTIsIDU4OC4wMjczNF0sXHJcbiAgWzEyNDUuNTU3NCwgNTc2LjcxNDhdLFxyXG4gIFsxMjQzLjA5MywgNTcyLjc2MDEzXSxcclxuICBbMTI0NC4zMzY4LCA1NjUuNzUwMjRdLFxyXG4gIFsxMjQ3Ljc0MjQsIDU2OC43NDk2M10sXHJcbiAgWzEyNDcuODQwOCwgNTcyLjQ0MDU1XSxcclxuICBbMTI1My41MzM5LCA1NzguMDQzOTVdLFxyXG4gIFsxMjU2LjExODcsIDU4MS40MjE2M10sXHJcbiAgWzEyNTguMTc0MywgNTc3LjI1MjU2XSxcclxuICBbMTI2MC4zOTA2LCA1NzIuNDE4N10sXHJcbiAgWzEyNTYuMDY1OCwgNTY3Ljg1MTJdLFxyXG4gIFsxMjYwLjAzNjEsIDU2OC4yNDIyXSxcclxuICBbMTI2NC4yNjQyLCA1NjguOTg3NTVdLFxyXG4gIFsxMjY5LjAxLCA1NjcuOTk4OF0sXHJcbiAgWzEyNjkuOTQyLCA1NjMuNzAyNjRdLFxyXG4gIFsxMjY4LjkxMzUsIDU1OS4zNzk5XSxcclxuICBbMTI2OS40MzM2LCA1NTQuNjQ3NF0sXHJcbiAgWzEyNzMuOTgyOCwgNTU0LjQ5MTk0XSxcclxuICBbMTI3NC44ODM3LCA1NjAuMjI1MzRdLFxyXG4gIFsxMjgwLjMwMTgsIDU2MC41NDYxNF0sXHJcbiAgWzEyODUuNTgyMywgNTYwLjU0MzVdLFxyXG4gIFsxMjg5Ljk1MSwgNTYzLjI5MzRdLFxyXG4gIFsxMjkxLjM3MjYsIDU2Ny43NDZdLFxyXG4gIFsxMjg0LjkyOSwgNTY1LjkwNjc0XSxcclxuICBbMTI4MS45MjQxLCA1NzAuMzgxN10sXHJcbiAgWzEyNzkuMTgzMiwgNTY1LjYzNTc0XSxcclxuICBbMTI3NC4wMzI4LCA1NjYuNTIwMV0sXHJcbiAgWzEyNzcuMDQ1NCwgNTcwLjg1MjJdLFxyXG4gIFsxMjcyLjY4MjYsIDU3MS43NDgxXSxcclxuICBbMTI3NC4zMzk3LCA1NzYuMzg4M10sXHJcbiAgWzEyNzEuOTcwNywgNTgwLjIyNThdLFxyXG4gIFsxMjcwLjIxNjIsIDU4My43ODYxM10sXHJcbiAgWzEyNjUuOTQ0MiwgNTgyLjUyNzE2XSxcclxuICBbMTI2Ni42NjYzLCA1NzguMzM2M10sXHJcbiAgWzEyNjkuODAyNCwgNTc1Ljc1NzddLFxyXG4gIFsxMjY4LjE0NDQsIDU3MS45MTA5XSxcclxuICBbMTI2NC43NjI2LCA1NzMuNDU0MV0sXHJcbiAgWzEyNjIuNDMwMywgNTc2LjQwNTE1XSxcclxuICBbMTI2MS43NTk2LCA1ODAuMjk1MTddLFxyXG4gIFsxMjYwLjAwODQsIDU4My42MTE1XSxcclxuICBbMTI2My40Njc4LCA1ODYuNTE3NDZdLFxyXG4gIFsxMjY3LjMyMTgsIDU4OC4wMzI2NV0sXHJcbiAgWzEyNjguNDcwMiwgNTkzLjUyMDU3XSxcclxuICBbMTI2OC43NzQ0LCA1OTcuMjM5NTZdLFxyXG4gIFsxMjcyLjc1MzksIDYwMC4wOTAxNV0sXHJcbiAgWzEyNzkuNTc5OCwgNTkzLjg3MDhdLFxyXG4gIFsxMjc2LjkzNiwgNTg5LjYzOTldLFxyXG4gIFsxMjgxLjIwODYsIDU4Ny45MDQ5XSxcclxuICBbMTI4NC4zMjY4LCA1ODQuNDE2NV0sXHJcbiAgWzEyODkuMzc1NSwgNTg0LjY5NjM1XSxcclxuICBbMTI4Ni43MTI2LCA1NzkuNjQ0M10sXHJcbiAgWzEyOTEuMjczOSwgNTgwLjAzNjNdLFxyXG4gIFsxMjk0LjgxMTMsIDU4Mi45NjE4XSxcclxuICBbMTI5My44MDgyLCA1ODguMTE5NF0sXHJcbiAgWzEyODguNjc0NCwgNTg5LjY2Mzk0XSxcclxuICBbMTI4NC4zNDM1LCA1OTAuOTY3Ml0sXHJcbiAgWzEyODEuMDQ2OSwgNTk5LjI1ODJdLFxyXG4gIFsxMjc2Ljk1OTIsIDU5OC43NTE5XSxcclxuICBbMTI3My45MDcsIDU5NS41MTg5XSxcclxuICBbMTI3Mi44MjMsIDU5MS43ODA5XSxcclxuICBbMTI3MS44NjksIDU4OC4wMzUyXSxcclxuICBbMTI3NC42ODI1LCA1ODQuODgwMV0sXHJcbiAgWzEyNzguOTQ3NCwgNTg0LjE2Nzg1XSxcclxuICBbMTI3Ny4yNzUxLCA1ODAuMjI0XSxcclxuICBbMTI4Mi4wNTQ5LCA1NzkuNDkzMDRdLFxyXG4gIFsxMjg0LjI3MzQsIDU3NC43ODE2XSxcclxuICBbMTI3OC45MjgzLCA1NzUuMzQ0MDZdLFxyXG4gIFsxMjg3LjU1NDIsIDU3MC43MTI2XSxcclxuICBbMTI4OS42ODQzLCA1NzUuMTkxOV0sXHJcbiAgWzEyOTMuNjY2OSwgNTcxLjk5NF0sXHJcbiAgWzEyOTUuNDIyNiwgNTY0LjU4MDNdLFxyXG4gIFsxMjk3LjY5NTMsIDU2OS4wMjg3XSxcclxuICBbMTMwMC43MSwgNTY1LjMwODM1XSxcclxuICBbMTI5OS4zMjA4LCA1NjAuNzc0NTRdLFxyXG4gIFsxMjk3Ljk0MTQsIDU1Ni41MjEwNl0sXHJcbiAgWzEyOTQuNDA2LCA1NTkuNzkzMl0sXHJcbiAgWzEyOTAuMTUwOCwgNTU4LjI3OTM2XSxcclxuICBbMTI4Ny41MjE2LCA1NTQuNjM2NTRdLFxyXG4gIFsxMjgyLjkzNDIsIDU1NS45NDYzXSxcclxuICBbMTI3OC42ODM3LCA1NTQuMDc0MDRdLFxyXG4gIFsxMjgzLjgwMDgsIDU1MC43MTQzNl0sXHJcbiAgWzEyODAuNDE3NywgNTQ3LjU4NzldLFxyXG4gIFsxMjc1Ljc4NTYsIDU0OS4xNzI0XSxcclxuICBbMTI3MC45NzQ5LCA1NDkuNDUzOV0sXHJcbiAgWzEyNjcuMTUzMSwgNTQ1LjMwMDNdLFxyXG4gIFsxMjY1LjQwNzIsIDU0MC41ODEwNV0sXHJcbiAgWzEyNjAuMzc0LCA1MzkuNjQxXSxcclxuICBbMTI2My4wOTk1LCA1MzUuNjQ2MDZdLFxyXG4gIFsxMjYyLjA2NzMsIDUzMC45MDI3XSxcclxuICBbMTI1OC40MDExLCA1MzQuMjU0M10sXHJcbiAgWzEyNTUuNjk5NiwgNTM4LjExMDM1XSxcclxuICBbMTI1Mi4zNjQ1LCA1NDEuMzMyOV0sXHJcbiAgWzEyNTIuNDc2NCwgNTQ2LjMzNjNdLFxyXG4gIFsxMjU3LjMwMiwgNTQ0LjEyNjk1XSxcclxuICBbMTI2Mi4yMjA4LCA1NDQuNTMzMTRdLFxyXG4gIFsxMjYxLjM2MiwgNTQ5LjI5MjhdLFxyXG4gIFsxMjY2LjIyODYsIDU1MC4yOTM5NV0sXHJcbiAgWzEyNjQuMzY5MSwgNTU1LjE1Nzg0XSxcclxuICBbMTI2My4xNjU0LCA1NTkuOTUwMl0sXHJcbiAgWzEyNjQuNDU5MSwgNTY0LjUwODZdLFxyXG4gIFsxMjU4Ljg1MjksIDU2My45MTgxXSxcclxuICBbMTI1Ny44MjgyLCA1NTkuNDkyMjVdLFxyXG4gIFsxMjU4Ljk1NDUsIDU1NC41NzQxXSxcclxuICBbMTI1Ni4wOTc5LCA1NTAuMDk0M10sXHJcbiAgWzEyNTAuMjgxNywgNTUxLjYxMDg0XSxcclxuICBbMTI1My4xMTkxLCA1NTYuNDE3MV0sXHJcbiAgWzEyNDYuMTA2MywgNTU2LjMzMzg2XSxcclxuICBbMTI1My40ODUsIDU2Mi4xMTI3XSxcclxuICBbMTI0Ny45MzYyLCA1NjAuNzAzMV0sXHJcbiAgWzEyNDkuMjA1NywgNTY0LjU4OTg0XSxcclxuICBbMTI1Mi4zNDc5LCA1NjcuMjA1OTNdLFxyXG4gIFsxMjUyLjY1NTMsIDU3MS42MjUxXSxcclxuICBbMTI1Ni4xOTY5LCA1NzMuMzUwNl0sXHJcbiAgWzEyNTAuNTA1NCwgNTc1LjQwNzM1XSxcclxuICBbMTI0OC43MTYzLCA1NzkuNTA4NF0sXHJcbiAgWzEyNTAuNTY3NCwgNTgzLjE0Njg1XSxcclxuICBbMTI1NC4wNzM1LCA1ODYuODE3NV0sXHJcbiAgWzEyNTguNjMxNSwgNTg4LjE1OTJdLFxyXG4gIFsxMjYxLjcwMjEsIDU5MS4zMzg1Nl0sXHJcbiAgWzEyNjMuNTQwMywgNTk1LjA3NF0sXHJcbiAgWzEyNjQuMDgwOSwgNTk4Ljc2NThdLFxyXG4gIFsxMjY0LjQ2MTIsIDYwMi44MTFdLFxyXG4gIFsxMjY4LjQ0MTUsIDYwMS4wNDQyXSxcclxuICBbMTI2OS41Mjk5LCA2MDQuNTQ0NDNdLFxyXG4gIFsxMjcwLjQwMTYsIDYwOC43MzQ3NF0sXHJcbiAgWzEyNzMuNTEyNywgNjA0LjYzMTk2XSxcclxuICBbMTI3Ny40NzY0LCA2MDMuMzk5NTRdLFxyXG4gIFsxMjgxLjM0NTEsIDYwNC43NDY1XSxcclxuICBbMTI5MC44NDQyLCA2MDUuMDIwN10sXHJcbiAgWzEyODYuNjI0NCwgNjA2LjIyMDM0XSxcclxuICBbMTI5Mi4yNiwgNjA5LjUzNzIzXSxcclxuICBbMTI5NS4zMDM3LCA2MTIuOTkxMV0sXHJcbiAgWzEyOTguOTE0MSwgNjIwLjg0ODc1XSxcclxuICBbMTI5OC40MDIzLCA2MjQuNjgwOTddLFxyXG4gIFsxMjk1LjMzMDYsIDYyNy4wOTU2NF0sXHJcbiAgWzEzMDIuMTA2NCwgNjI3LjE2N10sXHJcbiAgWzEzMDIuNjU5NywgNjIzLjM3OThdLFxyXG4gIFsxMzA2LjE0NjEsIDYyNi4xODU0XSxcclxuICBbMTMwNC40NzIyLCA2MzAuMTI1OF0sXHJcbiAgWzEzMDcuOTc0NiwgNjMxLjE5MDVdLFxyXG4gIFsxMzA0LjUzMTQsIDYzNC40NjI1XSxcclxuICBbMTMwNS40MjAyLCA2MzguNTM4N10sXHJcbiAgWzEzMDguNzI5MSwgNjM1LjQ1MzJdLFxyXG4gIFsxMzEwLjA3NTYsIDYzOS41NjE3N10sXHJcbiAgWzEzMDYuODU0NywgNjQyLjQ4OTg3XSxcclxuICBbMTMwMy4wMzU0LCA2NDQuMDk4OV0sXHJcbiAgWzEzMDYuNjk5OCwgNjQ3LjA1MjI1XSxcclxuICBbMTMxMC44MTY5LCA2NDQuMjAxNTRdLFxyXG4gIFsxMzA4LjczNDQsIDY1MC43ODU5NV0sXHJcbiAgWzEzMTIuMTIzLCA2NDguNDE0ODZdLFxyXG4gIFsxMzE1LjU2MzEsIDY0NS44ODQ1XSxcclxuICBbMTMxOS41OTk0LCA2NDcuMDc4NTVdLFxyXG4gIFsxMzIzLjU5MzMsIDY0NS45MTQ4XSxcclxuICBbMTMyOS42NjcyLCA2NDkuNTc2ODRdLFxyXG4gIFsxMzMzLjQ5NzMsIDY0OC45NDQ2NF0sXHJcbiAgWzEzMzYuNDYwNCwgNjU1LjQxMDk1XSxcclxuICBbMTMzNy4xMjc5LCA2NTEuMzQxNDNdLFxyXG4gIFsxMzQxLjE0NTgsIDY0OS4wNTIzN10sXHJcbiAgWzEzNDUuNTYyNywgNjUwLjc4Nl0sXHJcbiAgWzEzNDEuNjUyMywgNjU0LjE5NDhdLFxyXG4gIFsxMzQ2LjU4NywgNjU1LjU4MzI1XSxcclxuICBbMTM1MC4zMzcsIDY1Mi41MTZdLFxyXG4gIFsxMzUyLjI2NTksIDY1Ni42MDQ2XSxcclxuICBbMTM1Ni4xODk3LCA2NTMuMzE1NV0sXHJcbiAgWzEzNjEuMzA1OSwgNjUyLjgzMzVdLFxyXG4gIFsxMzY0LjMxNzEsIDY1Ni44OTQ0XSxcclxuICBbMTM1OC4yMywgNjU4LjE3MTk0XSxcclxuICBbMTM2Mi4wMjcsIDY2MS44NjY4XSxcclxuICBbMTM1Ni41NDc0LCA2NjQuODk3XSxcclxuICBbMTM2MS4wNTE4LCA2NjcuMDU3NF0sXHJcbiAgWzEzNjMuNjQ2NywgNjcxLjM4NThdLFxyXG4gIFsxMzU3Ljk3NzgsIDY3MS41Nzk2NV0sXHJcbiAgWzEzNTMuMjg5MywgNjcwLjEyNzldLFxyXG4gIFsxMzQ4LjMyODUsIDY2OS4xODAzNl0sXHJcbiAgWzEzNTAuNjgzOCwgNjY0Ljk1NjI0XSxcclxuICBbMTM1My43MjczLCA2NjAuODg5MzRdLFxyXG4gIFsxMzQ4LjMzMDksIDY2MC4zNzg4XSxcclxuICBbMTM0My42MjAyLCA2NTkuNjkxXSxcclxuICBbMTMzOS4xNzM1LCA2NTguNzAxN10sXHJcbiAgWzEzMzQuMTI3MiwgNjU5LjU2MzFdLFxyXG4gIFsxMzM0LjcxNjksIDY2NC40MzIyNV0sXHJcbiAgWzEzMjkuMzY2MiwgNjYyLjcxMDk0XSxcclxuICBbMTMyNy4xNzcyLCA2NjcuNTQ5XSxcclxuICBbMTMzMi4wMDk1LCA2NjguMzE0M10sXHJcbiAgWzEzMjQuNzgzNCwgNjcyLjY2Mzk0XSxcclxuICBbMTMyOS42MTUyLCA2NzMuNTEzN10sXHJcbiAgWzEzMzQuMjg4MSwgNjcyLjUyODU2XSxcclxuICBbMTMzNC4zNzI4LCA2NzguMTM4MjRdLFxyXG4gIFsxMzM3LjI3NzgsIDY4My4zMTkyXSxcclxuICBbMTM0My4zMDI1LCA2ODQuMDc1NTZdLFxyXG4gIFsxMzQ3Ljg2LCA2NzkuODc2NV0sXHJcbiAgWzEzNDEuNTUyNSwgNjc3LjU3OV0sXHJcbiAgWzEzMzguNzMxOSwgNjczLjA5MjQ3XSxcclxuICBbMTMzOC43NTI0LCA2NjcuOTA4MV0sXHJcbiAgWzEzMzkuODAwOCwgNjYzLjE5NTI1XSxcclxuICBbMTM0NC42NjgxLCA2NjUuMjM3NzNdLFxyXG4gIFsxMzQzLjQyMDQsIDY3MS4wMDc3XSxcclxuICBbMTM0Ny42ODYzLCA2NzQuNDcxN10sXHJcbiAgWzEzNTMuMDIyNSwgNjc2LjUyNl0sXHJcbiAgWzEzNTguMjk3MSwgNjc3LjE0NjJdLFxyXG4gIFsxMzYxLjUwODgsIDY4Mi4xNjM0XSxcclxuICBbMTM1OS44NTE4LCA2ODYuOTYyMV0sXHJcbiAgWzEzNTQuNzQxMywgNjgzLjE1ODFdLFxyXG4gIFsxMzQ5LjU0MjgsIDY4NS44NjU2Nl0sXHJcbiAgWzEzNDEuMDA0OSwgNjg5LjgzMl0sXHJcbiAgWzEzNDguNzcxOSwgNjkxLjU2MTddLFxyXG4gIFsxMzQxLjU5MDcsIDcwMi40NjIzNF0sXHJcbiAgWzEzMzUuOTU0NiwgNjk1LjQ1MDg3XSxcclxuICBbMTMzNC41OTk2LCA3MDEuNjk4MjRdLFxyXG4gIFsxMzI4LjUzMDYsIDcwMS4zODgzXSxcclxuICBbMTMyMi43ODU5LCA3MDIuMTk1N10sXHJcbiAgWzEzMjkuMzAzLCA2OTUuMTYxNV0sXHJcbiAgWzEzMjMuMDA2NiwgNjk0LjYxNjQ2XSxcclxuICBbMTMxNi43NTEyLCA2OTIuNTQ3Nl0sXHJcbiAgWzEzMTguMDY4MiwgNjk4LjM4NjRdLFxyXG4gIFsxMzEyLjQ0NTIsIDY5Ny42ODY3XSxcclxuICBbMTMwNy4wMDc0LCA2OTUuMDk0MV0sXHJcbiAgWzEzMTEuMDM2NywgNjkwLjY5ODZdLFxyXG4gIFsxMzA1LjUwMjcsIDY5MC4yNDE2XSxcclxuICBbMTMwMS4zMTE4LCA2ODIuOTU5NV0sXHJcbiAgWzEyOTguMzI5NiwgNjc5LjAzMDQ2XSxcclxuICBbMTI5NS4wNjI3LCA2NzQuNTQwNjVdLFxyXG4gIFsxMzAwLjU3ODYsIDY3NC40OTEzXSxcclxuICBbMTMwNS4wODU5LCA2NzkuMzE0Ml0sXHJcbiAgWzEzMDkuMzgwMSwgNjc2LjQwMzQ0XSxcclxuICBbMTMxMy44NTM1LCA2NzguODg1XSxcclxuICBbMTMyMS43NDQ1LCA2NjkuMjU3XSxcclxuICBbMTMxNy45MTE1LCA2NjcuMzAwMl0sXHJcbiAgWzEzMTQuMjIyOSwgNjY5Ljc5NTZdLFxyXG4gIFsxMzEzLjk0MzUsIDY3NC4wMTgwN10sXHJcbiAgWzEzMTguNTY1NywgNjc0LjM1MTZdLFxyXG4gIFsxMzIyLjE5ODUsIDY3Ny41MTUxNF0sXHJcbiAgWzEzMjcuODQ1LCA2NzguMzgwOV0sXHJcbiAgWzEzMzAuNTU2NiwgNjgzLjU1NzZdLFxyXG4gIFsxMzM0LjAyMTIsIDY4OS4yMDU4XSxcclxuICBbMTMyMC44ODYyLCA2ODcuODYzOV0sXHJcbiAgWzEzMjcuMjI5MiwgNjg5LjAwMTk1XSxcclxuICBbMTMyNC4xMTYyLCA2ODMuMTA1OTZdLFxyXG4gIFsxMzE4LjA2NzYsIDY4MS43NTEyXSxcclxuICBbMTMxNC43MzY4LCA2ODYuNTAwNF0sXHJcbiAgWzEzMTAuNDU0OCwgNjgyLjgyXSxcclxuICBbMTMwNi4zNDMsIDY4NS4zMDcyNV0sXHJcbiAgWzEzMDAuNjI3NywgNjg4LjAxNzNdLFxyXG4gIFsxMjk1LjU5NDcsIDY5MC4zNDc4NF0sXHJcbiAgWzEzMDAuNjY5MiwgNjkzLjM3NzddLFxyXG4gIFsxMzAxLjkyMTgsIDY5OC41ODg2XSxcclxuICBbMTMwNi43Njc2LCA3MDAuODI3NzZdLFxyXG4gIFsxMjk2LjQwOTQsIDY5Ny41MzY1XSxcclxuICBbMTI5MS4yNjU3LCA2OTguMzY1NF0sXHJcbiAgWzEyODMuOTM4NCwgNjk1LjE5OTddLFxyXG4gIFsxMjc3Ljg0MjksIDY5My40NTI0XSxcclxuICBbMTI3NS4xNjYsIDY4OC4xMzE4NF0sXHJcbiAgWzEyNzkuNTg0MSwgNjg0LjI0ODVdLFxyXG4gIFsxMjc0LjQ2NTgsIDY4MC44NzI5XSxcclxuICBbMTI2OC43MDQzLCA2ODAuNjI5XSxcclxuICBbMTI2OS4wNzU4LCA2ODYuOTU3NV0sXHJcbiAgWzEyNjIuMzc2NiwgNjgzLjczNThdLFxyXG4gIFsxMjU3LjYzNTUsIDY3OC42ODkzM10sXHJcbiAgWzEyNTIuMzI0MiwgNjczLjQ0OTFdLFxyXG4gIFsxMjQzLjU3MjQsIDY3NC40NTc0XSxcclxuICBbMTI0Ny43MzI1LCA2NjkuNjg4NF0sXHJcbiAgWzEyNDIuOTM4MiwgNjY2LjI3ODE0XSxcclxuICBbMTI0Ni4wNzY4LCA2NjAuNjI3M10sXHJcbiAgWzEyNDkuNzQyOCwgNjY0LjE3NzczXSxcclxuICBbMTI0MC4xNzMxLCA2NjEuMjM4MDRdLFxyXG4gIFsxMjM4LjEwMjgsIDY2OS44MTcyNl0sXHJcbiAgWzEyMzUuMjE1MywgNjY0LjM2ODhdLFxyXG4gIFsxMjMyLjg5MzMsIDY1OS4wMjUzXSxcclxuICBbMTIzNC45MjE5LCA2NTMuMTI3OV0sXHJcbiAgWzEyMzguMDE0NCwgNjU2LjcwOTg0XSxcclxuICBbMTI0My4zNTU2LCA2NTUuNjMzM10sXHJcbiAgWzEyNDUuODYxNywgNjUwLjc5ODM0XSxcclxuICBbMTI1MC42NjM3LCA2NDkuMDAyM10sXHJcbiAgWzEyNTIuODEwOCwgNjUyLjM4MDVdLFxyXG4gIFsxMjQ4Ljk0ODcsIDY1NS41OTU3XSxcclxuICBbMTI1Mi41NDM4LCA2NTkuNzM5NV0sXHJcbiAgWzEyNTUuNDM3NiwgNjU1LjkzNDI3XSxcclxuICBbMTI1Mi41MzA1LCA2NDUuMzMyMzRdLFxyXG4gIFsxMjUzLjkxNywgNjQxLjQyNjY0XSxcclxuICBbMTI1Ny42MDY3LCA2MzkuMzc3Ml0sXHJcbiAgWzEyNjEuNjk2NywgNjQwLjY0MTg1XSxcclxuICBbMTI2Mi44NTM1LCA2NDQuNzI3NV0sXHJcbiAgWzEyNTcuNzg3NSwgNjQ0Ljg0NzRdLFxyXG4gIFsxMjU2Ljg0NzMsIDY0OS40MDM3XSxcclxuICBbMTI2Mi40MjYzLCA2NDkuMDQ4Nl0sXHJcbiAgWzEyNjcuNDE5NywgNjUwLjA1NDFdLFxyXG4gIFsxMjY3LjYxNzgsIDY0NS4xMjgyXSxcclxuICBbMTI2Ni44MDIyLCA2NDAuODEzMjNdLFxyXG4gIFsxMjcxLjgzNjksIDY0Ni40NjMxM10sXHJcbiAgWzEyNzYuMTczMywgNjQ4Ljk4NDRdLFxyXG4gIFsxMjgwLjc3MjcsIDY0OC43OTE1XSxcclxuICBbMTI4NC44MjA3LCA2NDguNzQ4ODRdLFxyXG4gIFsxMjg4LjUyNDcsIDY0Ni41Nzk0N10sXHJcbiAgWzEyOTIuMjIxOSwgNjQ4LjgxMjg3XSxcclxuICBbMTI5Ni4zMzQ0LCA2NDkuNDddLFxyXG4gIFsxMjk5LjI0MjcsIDY1Mi41NDcxXSxcclxuICBbMTI5My43ODM4LCA2NTQuMTUyM10sXHJcbiAgWzEyOTQuMzA3NCwgNjU5LjI1NTldLFxyXG4gIFsxMjk5LjE1NjQsIDY2MS4wNTUyNF0sXHJcbiAgWzEyOTkuNzc0NCwgNjY1LjI2Nzc2XSxcclxuICBbMTMwNC4wODE3LCA2NjQuNDIzMDNdLFxyXG4gIFsxMzAzLjY4MiwgNjYwLjE1MzU2XSxcclxuICBbMTI5OC45NzI5LCA2NTYuNjY3MzZdLFxyXG4gIFsxMjk0Ljk1MDIsIDY2NC40NTc2XSxcclxuICBbMTI5MC4yNDA4LCA2NjIuODkwNzVdLFxyXG4gIFsxMjg5LjA5NzUsIDY1Ny4zNDE3XSxcclxuICBbMTI4NS4yNDIzLCA2NjAuODE1N10sXHJcbiAgWzEyODUuOTIyNiwgNjY1Ljc5MjFdLFxyXG4gIFsxMjgwLjQwMzYsIDY2NS4yNjY1XSxcclxuICBbMTI4MS45NDAzLCA2NjkuNzQ1NV0sXHJcbiAgWzEyNzcuMzg3MSwgNjcwLjc3OTY2XSxcclxuICBbMTI3NS4wNjUzLCA2NjcuODMxODVdLFxyXG4gIFsxMjcwLjg3NCwgNjY3LjE3ODk2XSxcclxuICBbMTI3MC4yODI1LCA2NjEuMDk4NDVdLFxyXG4gIFsxMjY1LjM3NDUsIDY1OS4yOTk4N10sXHJcbiAgWzEyNTkuODI1NCwgNjU4LjM5MjddLFxyXG4gIFsxMjU5LjU1NjMsIDY1My4zMDg1XSxcclxuICBbMTI2NC4wMTU5LCA2NTQuMTY2NDRdLFxyXG4gIFsxMjY4LjM3NjcsIDY1NS4zMDY5XSxcclxuICBbMTI3Mi4yOTM1LCA2NTYuNjA3NF0sXHJcbiAgWzEyNzIuMjYzLCA2NTEuNjM2NjZdLFxyXG4gIFsxMjc1Ljc5MywgNjU5LjI0OThdLFxyXG4gIFsxMjc2LjQ2NjgsIDY1NS4wNDUwNF0sXHJcbiAgWzEyNzkuNDYsIDY1Mi42ODc3XSxcclxuICBbMTI4OC45NiwgNjUxLjk3NzRdLFxyXG4gIFsxMjg0Ljc3MzEsIDY1My43MzQ0XSxcclxuICBbMTI4MS44MzM3LCA2NTYuOTA5Ml0sXHJcbiAgWzEyODAuMDkxNiwgNjYwLjk2OTFdLFxyXG4gIFsxMjc0Ljk5MDEsIDY2My4zNTEyXSxcclxuICBbMTI2Ny4xLCA2NzAuODM2OV0sXHJcbiAgWzEyNjEuNjM2NSwgNjY4LjA2ODM2XSxcclxuICBbMTI2Ni40NzY3LCA2NjQuOTIzOTVdLFxyXG4gIFsxMjYxLjg3MjEsIDY2Mi45NzY1Nl0sXHJcbiAgWzEyNTYuODU5NywgNjYzLjEwNjJdLFxyXG4gIFsxMjU0LjAyMTUsIDY2Ny4zOTQzXSxcclxuICBbMTI1Ny4zNTc3LCA2NzEuNDA0M10sXHJcbiAgWzEyNjEuNTc4NCwgNjc0LjEzMjldLFxyXG4gIFsxMjY1LjY1OTMsIDY3Ni42NzM3XSxcclxuICBbMTI3Mi4wMzQ5LCA2NzQuMTQwNl0sXHJcbiAgWzEyNzcuNjQ4NiwgNjc1LjQ1OF0sXHJcbiAgWzEyODEuMzU2LCA2NzkuNTI3NDddLFxyXG4gIFsxMjg1LjgzODYsIDY4My43OTM3XSxcclxuICBbMTI4Mi41OTY2LCA2ODguODU1MzVdLFxyXG4gIFsxMjg3Ljg1ODksIDY5MC4xNzc3XSxcclxuICBbMTI5MS42NjE1LCA2OTMuMjYwNF0sXHJcbiAgWzEyOTAuOTU5NiwgNjg1LjY0NTRdLFxyXG4gIFsxMjk2LjA2MjYsIDY4NC42MjgyXSxcclxuICBbMTI5Mi43NTcsIDY3OS45NjA0NV0sXHJcbiAgWzEyODkuODkwMywgNjc0LjQ4MTI2XSxcclxuICBbMTI4Ny4zMDk0LCA2NzguODg4NzNdLFxyXG4gIFsxMjgzLjQxMDIsIDY3NC44MjYzNV0sXHJcbiAgWzEyODYuNDY3NCwgNjcwLjk2OTldLFxyXG4gIFsxMjkwLjUzNTIsIDY2OC41MjA0XSxcclxuICBbMTI5NC42NDMzLCA2NjkuNTA0NV0sXHJcbiAgWzEyOTguODE0NSwgNjY5LjY2MzQ1XSxcclxuICBbMTMwMy40MDEyLCA2NjkuNDc2XSxcclxuICBbMTMwNS4zNDUsIDY3My42NTEyXSxcclxuICBbMTMwOS41Mzk2LCA2NzAuOTA3NV0sXHJcbiAgWzEzMDcuNjg5LCA2NjcuMjI1MV0sXHJcbiAgWzEzMDguODk3NywgNjYzLjAzNzJdLFxyXG4gIFsxMzA3Ljk0NjcsIDY1OS4xODM1XSxcclxuICBbMTMxMy45NDc1LCA2NjEuNDQ1OV0sXHJcbiAgWzEzMTMuMDA5OSwgNjY1LjU1NDQ0XSxcclxuICBbMTMxOS4wMjE3LCA2NjIuMDAxNF0sXHJcbiAgWzEzMjMuNTk3NCwgNjY0LjA3OTFdLFxyXG4gIFsxMzE2LjQ1MjksIDY1Ny4xNDg4Nl0sXHJcbiAgWzEzMjAuNjUxMSwgNjU2LjA0NDQzXSxcclxuICBbMTMyNC4zMTcxLCA2NTkuMjcyXSxcclxuICBbMTMyOS4yNzQsIDY1Ny42Nzc4XSxcclxuICBbMTMzMS45NjQxLCA2NTMuNzkyMzZdLFxyXG4gIFsxMzI2LjA3NSwgNjU0LjExMTc2XSxcclxuICBbMTMyNS44MjUxLCA2NDkuNDM3NzRdLFxyXG4gIFsxMzIxLjc2MDEsIDY1MS4zMzAyXSxcclxuICBbMTMxNy4wMDc0LCA2NTEuMTkyNzVdLFxyXG4gIFsxMzEzLjE1NTgsIDY1My4xMjM0XSxcclxuICBbMTMxMS45NDg1LCA2NTcuNjA0XSxcclxuICBbMTMwOC40MTYxLCA2NTQuODQ3MV0sXHJcbiAgWzEzMDMuNzU4OCwgNjU1Ljg4MDddLFxyXG4gIFsxMzA0LjM0ODgsIDY1MS44NDAyXSxcclxuICBbMTMwMi4wLCA2NDguNjQ3NV0sXHJcbiAgWzEyOTkuMDE5LCA2NDYuMDY4MzZdLFxyXG4gIFsxMjk4LjQzNDIsIDY0Mi4wNDFdLFxyXG4gIFsxMzAxLjY4ODQsIDY0MC4xNjcwNV0sXHJcbiAgWzEzMDAuNTc4NywgNjM2LjY2NTk1XSxcclxuICBbMTI5Ny4xMDY3LCA2MzUuMTgzNV0sXHJcbiAgWzEzMDAuODg4MywgNjMyLjI1OTY0XSxcclxuICBbMTI5OS4wMDczLCA2MjguNzE5MjRdLFxyXG4gIFsxMjk2LjM5NTYsIDYzMS40NTM3NF0sXHJcbiAgWzEyOTEuODM4MSwgNjI0Ljg4NF0sXHJcbiAgWzEyODYuODkyOCwgNjIyLjc0ODldLFxyXG4gIFsxMjg4LjQwNDgsIDYyNi43NDA3XSxcclxuICBbMTI4NS40NTUxLCA2MjkuMTcwNV0sXHJcbiAgWzEyODguOTk5MSwgNjMxLjczNjJdLFxyXG4gIFsxMjkyLjQ1NzgsIDYyOS44MTc3XSxcclxuICBbMTI5Mi44MzE0LCA2MzQuNTY1NTVdLFxyXG4gIFsxMjkxLjU0MzgsIDYzOC42NzUwNV0sXHJcbiAgWzEyOTUuNjg3NywgNjM5LjIwNDA0XSxcclxuICBbMTI5NC44NTEzLCA2NDQuNTY2NDddLFxyXG4gIFsxMjkxLjIxNzgsIDY0My4wNjE1XSxcclxuICBbMTI4Ny41NjEsIDY0MC42MzAwN10sXHJcbiAgWzEyODguMDY5MSwgNjM2LjE1MDRdLFxyXG4gIFsxMjg0LjY0ODksIDYzNC4wMTg4XSxcclxuICBbMTI4MS40MjY5LCA2MzAuOTg2Ml0sXHJcbiAgWzEyNzcuMzU3MywgNjMxLjczNjYzXSxcclxuICBbMTI3My42ODUzLCA2MjkuOTcwOTVdLFxyXG4gIFsxMjcyLjY2OSwgNjI0LjUxNF0sXHJcbiAgWzEyNjkuNzQzOCwgNjIwLjc1NTg2XSxcclxuICBbMTI2Ny43OTUsIDYyNS4zOTE2XSxcclxuICBbMTI2NS41NDkxLCA2MjIuMTYwMTZdLFxyXG4gIFsxMjYxLjcxNCwgNjIzLjIyODRdLFxyXG4gIFsxMjYzLjYzNjEsIDYyNy4xODI0XSxcclxuICBbMTI1OS4yNDksIDYyNi44NjMzXSxcclxuICBbMTI1Ny4xMzIyLCA2MjkuOTI0OV0sXHJcbiAgWzEyNTMuNjI5NiwgNjMyLjAxNjldLFxyXG4gIFsxMjUyLjU1MjEsIDYyOC4zMDU1NF0sXHJcbiAgWzEyNTQuOTc5MiwgNjI1LjM2MzhdLFxyXG4gIFsxMjU3LjYwOTksIDYyMi42Nzk1N10sXHJcbiAgWzEyNTkuODE0LCA2MTkuNTFdLFxyXG4gIFsxMjYzLjQ2MjIsIDYxOC40ODc0XSxcclxuICBbMTI2Ny40NjA3LCA2MTcuMjExNTVdLFxyXG4gIFsxMjY3LjM5MDQsIDYxMy4wNTQyXSxcclxuICBbMTI2NS44NzYyLCA2MDYuNDYwNl0sXHJcbiAgWzEyNjMuODk0OSwgNjA5LjU5NTAzXSxcclxuICBbMTI3MS43NzY0LCA2MTQuNjEwNV0sXHJcbiAgWzEyNzYuNzU3NiwgNjE0LjkyMzddLFxyXG4gIFsxMjc2LjM1OTcsIDYwOC4yMThdLFxyXG4gIFsxMjczLjcxMTQsIDYxOC45MTMyN10sXHJcbiAgWzEyNzYuODUsIDYyMi40NDM2XSxcclxuICBbMTI3OS4yMzM2LCA2MTguNzY4MDddLFxyXG4gIFsxMjg0LjAzMzIsIDYxOS4wNTY1XSxcclxuICBbMTI4MS44NjY1LCA2MjMuMDA2ODRdLFxyXG4gIFsxMjgyLjExNTIsIDYyNi44MDQyXSxcclxuICBbMTI3Ny4zNDY0LCA2MjYuODgwMV0sXHJcbiAgWzEyNjkuODY5OSwgNjI4LjU2NjA0XSxcclxuICBbMTI2NS45NDIxLCA2MzEuMDk4NF0sXHJcbiAgWzEyNzAuMDM1NiwgNjMzLjE2MDddLFxyXG4gIFsxMjc0LjYwMDIsIDYzNS42OTE4XSxcclxuICBbMTI3Ny45NjE4LCA2MzkuNTQzOTVdLFxyXG4gIFsxMjgwLjAzODgsIDYzNS40NjM3XSxcclxuICBbMTI4My4yMzg0LCA2MzkuMDAxN10sXHJcbiAgWzEyODQuNzk3NSwgNjQzLjg1MjA1XSxcclxuICBbMTI4MC41NzMyLCA2NDMuOTE1NjVdLFxyXG4gIFsxMjc2LjE3MjIsIDY0NC4xNzYzXSxcclxuICBbMTI3Mi41OTc1LCA2NDEuMTI3OV0sXHJcbiAgWzEyNzAuMDEsIDYzNy41MTQ5NV0sXHJcbiAgWzEyNjUuNDQxOCwgNjM2LjAzMzhdLFxyXG4gIFsxMjYxLjIyNDUsIDYzNi4yMDU5XSxcclxuICBbMTI2MS41NzU2LCA2MzEuNTY3NzVdLFxyXG4gIFsxMjU3LjY0MzYsIDYzNC4yNDIzXSxcclxuICBbMTI1NC4yMDE3LCA2MzYuNTQxOF0sXHJcbiAgWzEyNTAuMjc4NCwgNjM4LjIyMDhdLFxyXG4gIFsxMjQ4Ljg0NzcsIDY0MS41NzQ3XSxcclxuICBbMTI0Ny4xNDI2LCA2NDUuNTk4NDVdLFxyXG4gIFsxMjQyLjYzMTcsIDY0NS44OTU0NV0sXHJcbiAgWzEyMzkuNjI4NywgNjQwLjgwNTJdLFxyXG4gIFsxMjM0Ljc2NTYsIDY0MS4zOTI5NF0sXHJcbiAgWzEyMjkuOTU2LCA2NDIuNjExNzZdLFxyXG4gIFsxMjMyLjc4NDQsIDYzMy44MjM4XSxcclxuICBbMTIzNi45MzU3LCA2MzYuMDUyMl0sXHJcbiAgWzEyNDIuMjAxLCA2MzMuMjA5MV0sXHJcbiAgWzEyNDAuMDQzMiwgNjMwLjI3ODZdLFxyXG4gIFsxMjM2LjEyNzYsIDYzMS4xNjA1XSxcclxuICBbMTIzMi41MDYxLCA2MjguMzMxXSxcclxuICBbMTIyNy43NzY0LCA2MjYuODQzOV0sXHJcbiAgWzEyMjUuMjIxMiwgNjIyLjYwNjNdLFxyXG4gIFsxMjIwLjAxODYsIDYyMS4zNTM4XSxcclxuICBbMTIyMi42NDc3LCA2MjUuMTAyMl0sXHJcbiAgWzEyMjIuMjY2NCwgNjI4LjM3NDJdLFxyXG4gIFsxMjE4LjkxMTQsIDYyOS41OTMyNl0sXHJcbiAgWzEyMTcuODc1NCwgNjMzLjA2MDVdLFxyXG4gIFsxMjEzLjU4MDIsIDYzMy40MzQxXSxcclxuICBbMTIxNC42MzcyLCA2MjkuMDEyNjNdLFxyXG4gIFsxMjExLjc0MDUsIDYyNC44Nzg3XSxcclxuICBbMTIwOS45MDA5LCA2MjkuNDkzMDRdLFxyXG4gIFsxMjEwLjIzOCwgNjM1LjYyNV0sXHJcbiAgWzEyMDYuMDQ4OCwgNjM2Ljg1MDQ2XSxcclxuICBbMTIwNi4xMjgsIDYzMS42Nzg3XSxcclxuICBbMTIwMi4wNjgxLCA2MjguOTk2M10sXHJcbiAgWzEyMDUuNzcxOSwgNjI1LjIwMjNdLFxyXG4gIFsxMjA5LjAwMzIsIDYyMC4zODQyXSxcclxuICBbMTIwMS4wNzAxLCA2MjEuNTEzOF0sXHJcbiAgWzExOTguMzU2NCwgNjI1Ljk2MThdLFxyXG4gIFsxMTk3LjQyMTgsIDYzMS40NDg3XSxcclxuICBbMTE5Mi43MTIyLCA2MzEuOTc2NTZdLFxyXG4gIFsxMTg5Ljg4LCA2MzUuODI3MTVdLFxyXG4gIFsxMTg2LjgxODgsIDYzMi40MDEwNl0sXHJcbiAgWzExODMuNTg1NiwgNjI5LjEyNzNdLFxyXG4gIFsxMTg5LjI3MjEsIDYyOC40NzczNl0sXHJcbiAgWzExOTMuNDc3OSwgNjI2LjMzMTY3XSxcclxuICBbMTE5MC4xNzg1LCA2MjEuOTQ4XSxcclxuICBbMTE4NS4yMTg4LCA2MjAuOTM3MV0sXHJcbiAgWzExOTEuMDg1OSwgNjE2Ljc4MTQzXSxcclxuICBbMTE5NS4zOTcyLCA2MjEuMDcyMV0sXHJcbiAgWzExOTYuOTk4OCwgNjE2LjQ0MzFdLFxyXG4gIFsxMTk5LjkwOTIsIDYxMi42MzEzNV0sXHJcbiAgWzEyMDQuMzM0NywgNjE4LjIzOTg3XSxcclxuICBbMTIwNS4xMjk2LCA2MTMuOTUxXSxcclxuICBbMTIwOS40MDU4LCA2MTMuMDI2MjVdLFxyXG4gIFsxMjEyLjg5MDcsIDYxNi40NDQyXSxcclxuICBbMTIxNC45MzgsIDYyMC43MzQ2XSxcclxuICBbMTIxNy40MDc3LCA2MjUuMjM4OV0sXHJcbiAgWzEyMTkuMjkzNSwgNjE2LjgwMDY2XSxcclxuICBbMTIyMS43MTI2LCA2MTEuNzEwOF0sXHJcbiAgWzEyMjYuMDc3NiwgNjA5LjQyOTNdLFxyXG4gIFsxMjIzLjE4ODYsIDYwNS42MTQzXSxcclxuICBbMTIxOC43MzI0LCA2MDcuMzcwMzZdLFxyXG4gIFsxMjE0LjMwMDgsIDYwNS41OTc0XSxcclxuICBbMTIxMy4yNTEzLCA2MTAuMTU2XSxcclxuICBbMTIxNi45NDQsIDYxMi44MjAzXSxcclxuICBbMTIwOC42MDExLCA2MDYuNTM1MV0sXHJcbiAgWzEyMDQuNTIxMiwgNjA5LjI0MDddLFxyXG4gIFsxMjAxLjIyMjMsIDYwNS45OTQ5XSxcclxuICBbMTE5Ni4xMzMzLCA2MDcuMjUzNF0sXHJcbiAgWzExOTMuMzA2NSwgNjExLjg0MTldLFxyXG4gIFsxMTg3LjcyMDgsIDYxMS43NjY5N10sXHJcbiAgWzExOTAuMjkzNiwgNjA3LjAxNDNdLFxyXG4gIFsxMTg0LjI0NiwgNjA4LjM3OTJdLFxyXG4gIFsxMTg2LjEyNzksIDYxNi40ODMzXSxcclxuICBbMTE4Mi4zNzE2LCA2MTMuMjc0XSxcclxuICBbMTE3OC45ODUxLCA2MDkuODczOTZdLFxyXG4gIFsxMTc0LjE0OTksIDYxMC41MTQwNF0sXHJcbiAgWzExNzIuNTg3MiwgNjE1LjQxNjE0XSxcclxuICBbMTE3Ny41MTA2LCA2MTQuODYzODNdLFxyXG4gIFsxMTgxLjMzNjQsIDYxOC4zOTk1NF0sXHJcbiAgWzExNzYuODkzNiwgNjE5LjYzMjU3XSxcclxuICBbMTE3MS44MTgsIDYyMC4xMTgzNV0sXHJcbiAgWzExNjguNzg2MywgNjI5LjA1NzhdLFxyXG4gIFsxMTc0LjMyNDgsIDYyOS4zOTU0NV0sXHJcbiAgWzExNzguODM0NSwgNjI4Ljc1NzZdLFxyXG4gIFsxMTg2LjA5MTksIDYyNS4zMDc0XSxcclxuICBbMTE4MS4wMjAxLCA2MjQuMDM1MTZdLFxyXG4gIFsxMTc2LjExNDYsIDYyNC4xOTIyNl0sXHJcbiAgWzExNzEuODIwNiwgNjI1LjIxMjldLFxyXG4gIFsxMTY3LjQzNiwgNjIzLjg3Mjg2XSxcclxuICBbMTE2Ni42NzA0LCA2MTkuNDYwOTRdLFxyXG4gIFsxMTY3LjAyOSwgNjE0LjgxMjI2XSxcclxuICBbMTE2OS40NzIsIDYxMS4zMzk1XSxcclxuICBbMTE2Mi4yNjg3LCA2MTYuNDAyOTVdLFxyXG4gIFsxMTU4Ljc1OTMsIDYxMS40ODNdLFxyXG4gIFsxMTYzLjkwNjIsIDYxMC4zMzY3XSxcclxuICBbMTE1OS4yOTcyLCA1OTUuNjYxNTZdLFxyXG4gIFsxMTYwLjM3MjQsIDU5MC4zMDE0NV0sXHJcbiAgWzExNjcuMTA5MywgNTkwLjU5MzldLFxyXG4gIFsxMTY4LjIzMjMsIDU4MS45Nzc4XSxcclxuICBbMTE3MC4wMDYyLCA1NzYuMzE0N10sXHJcbiAgWzExNzQuNjA1OCwgNTc0LjIwNV0sXHJcbiAgWzExNzUuNTc3MywgNTY4Ljg4OTY1XSxcclxuICBbMTE4MC4wMDA3LCA1NjQuNjU3NF0sXHJcbiAgWzExODUuNzQzMywgNTYyLjI5OTldLFxyXG4gIFsxMTg5LjE2OTQsIDU1OC4wNTI5XSxcclxuICBbMTE4Ni4xNzExLCA1NTMuMjgyMzVdLFxyXG4gIFsxMTg4LjU3ODksIDU0OC4wNDI1XSxcclxuICBbMTE5MC4wMzQsIDUzNy4zMjZdLFxyXG4gIFsxMTk0Ljg0LCA1MzQuNjEzOV0sXHJcbiAgWzExOTAuNzY4NCwgNTMxLjI3MzEzXSxcclxuICBbMTE4Ni4yMDAzLCA1MzIuMTgyMV0sXHJcbiAgWzExODQuMzA3OSwgNTM2LjU1Nzc0XSxcclxuICBbMTE4Ny42Nzc1LCA1MjYuMzgzMjRdLFxyXG4gIFsxMTg2LjE5NzgsIDUyMS43Nzc2NV0sXHJcbiAgWzExODcuNTUwMiwgNTE3LjUxMjFdLFxyXG4gIFsxMTgyLjUwNiwgNTE4LjU5NzUzXSxcclxuICBbMTE3Ny41ODY3LCA1MTkuMTIxMV0sXHJcbiAgWzExODEuNjUxNCwgNTI0LjA1OTJdLFxyXG4gIFsxMTc2LjU5NzcsIDUyNy42NzMzXSxcclxuICBbMTE3Mi4wNDY4LCA1MjkuNDU1Ml0sXHJcbiAgWzExNzYuNDczLCA1MjIuNzU0OF0sXHJcbiAgWzExNzQuNzU3NywgNTE2LjE2NTFdLFxyXG4gIFsxMTcxLjgyNzUsIDUyMy4xMzY3XSxcclxuICBbMTE3MC44OTUsIDUxOC40Nzc2XSxcclxuICBbMTE3NS43OTMsIDUxMS40MjQyNl0sXHJcbiAgWzExNzMuMTE4OCwgNTA3LjM1MjYzXSxcclxuICBbMTE3My44Mjg5LCA1MDMuMzQ5OF0sXHJcbiAgWzExNzguNDUwMSwgNTAyLjM5ODU2XSxcclxuICBbMTE3Ny44OTg3LCA1MDYuODcwNTddLFxyXG4gIFsxMTgwLjcwMzcsIDUxMC4yOTM2N10sXHJcbiAgWzExNzkuMzkxMiwgNTE0Ljg2NDRdLFxyXG4gIFsxMTg0LjAxNjEsIDUxMy44MjA5XSxcclxuICBbMTE4NS4zOTUzLCA1MDkuMTAzODhdLFxyXG4gIFsxMTgyLjg4MDUsIDUwNS4zMDAzOF0sXHJcbiAgWzExODIuODQ5MiwgNTAwLjY0NjI0XSxcclxuICBbMTE3OC45ODA2LCA0OTcuNjkzODJdLFxyXG4gIFsxMTgyLjcyMiwgNDk1LjcxMjRdLFxyXG4gIFsxMTc5Ljk1OTQsIDQ5Mi4zNTcxOF0sXHJcbiAgWzExNzUuNjEyNSwgNDkzLjk0MDI4XSxcclxuICBbMTE3My4yMzkxLCA0ODkuOTQ3NjNdLFxyXG4gIFsxMTY4LjQ5NDgsIDQ5MC4yNDEwNl0sXHJcbiAgWzExNjQuODY5OCwgNDkzLjI4ODMzXSxcclxuICBbMTE2MC4wOTMzLCA0OTMuMzcyMjhdLFxyXG4gIFsxMTU2LjA1OSwgNDkxLjk1NzAzXSxcclxuICBbMTE2Mi4wODYzLCA0OTcuMjEwNTRdLFxyXG4gIFsxMTY0LjM0OTQsIDUwNS4wMDY2OF0sXHJcbiAgWzExNjMuMTQxMSwgNTAxLjM3ODc4XSxcclxuICBbMTE1OC4zNTIsIDUwMC42NjUxM10sXHJcbiAgWzExNTguNzE1OCwgNTA0LjY2MzNdLFxyXG4gIFsxMTYxLjAwNywgNTA3LjQ5MjRdLFxyXG4gIFsxMTU5LjMwODIsIDUxMC45NjQ5NF0sXHJcbiAgWzExNTguMDAwMiwgNTE0Ljc3MzEzXSxcclxuICBbMTE1NC40NDkxLCA1MTEuOTMxODVdLFxyXG4gIFsxMTU1LjAzNzQsIDUwNy42NjAxNl0sXHJcbiAgWzExNTQuMDA1NCwgNTAzLjMyODIyXSxcclxuICBbMTE1Mi42MjQ1LCA0OTkuMzgxMV0sXHJcbiAgWzExNTYuOTczOCwgNDk2LjgxODgyXSxcclxuICBbMTE1Mi41MTIsIDQ5NS4xMDg2XSxcclxuICBbMTE0Ny40MTc3LCA0OTkuMzk4MzJdLFxyXG4gIFsxMTQ5LjQ4NTYsIDUwNC4zODZdLFxyXG4gIFsxMTQ5Ljg2MjcsIDUwOS40MjQxNl0sXHJcbiAgWzExNDQuOTk2MywgNTA2LjU1ODQ0XSxcclxuICBbMTE0NC44NjI0LCA1MTEuODcxNThdLFxyXG4gIFsxMTQwLjg5MjUsIDUxNC40MzgyXSxcclxuICBbMTE0MC44NDE4LCA1MjQuODk5NTRdLFxyXG4gIFsxMTQ2LjI1MTIsIDUyNy42NzY3Nl0sXHJcbiAgWzExNDkuODY5NiwgNTMwLjgzNTJdLFxyXG4gIFsxMTU0LjQ4MzQsIDUzMi41ODNdLFxyXG4gIFsxMTU2Ljg4ODIsIDUyOC4yOTg5NV0sXHJcbiAgWzExNjEuNTIzMiwgNTI0LjYwMDM0XSxcclxuICBbMTE2Ni43NzQsIDUyMS40NDQyXSxcclxuICBbMTE2Ny4yMDU3LCA1MjYuNDQ1M10sXHJcbiAgWzExNzIuNzkzNywgNTM0LjczNzg1XSxcclxuICBbMTE3Ny45Nzg0LCA1MzMuNjMyNF0sXHJcbiAgWzExODAuNjEyOCwgNTM4LjQwNDI0XSxcclxuICBbMTE4Mi43NzY5LCA1NDcuNTcxMV0sXHJcbiAgWzExODUuMTgwOSwgNTQyLjc2NzMzXSxcclxuICBbMTE3OS42MzkzLCA1NDMuMjYwNDRdLFxyXG4gIFsxMTc3LjE1MzIsIDU0Ny44OTgzXSxcclxuICBbMTE3My45Njc4LCA1NDQuMTAxM10sXHJcbiAgWzExNjguOTU4MywgNTQ2LjgyNjM1XSxcclxuICBbMTE3Mi4yMTU4LCA1NDkuNjkyNF0sXHJcbiAgWzExNzUuNzE0NiwgNTUzLjY4MDY2XSxcclxuICBbMTE4MC42NDgzLCA1NTIuMzYxMl0sXHJcbiAgWzExODAuOTAwNSwgNTU3Ljk1OTY2XSxcclxuICBbMTE3NS45MjA1LCA1NjAuMjQ3ODZdLFxyXG4gIFsxMTcyLjAxNDksIDU1Ny41OTA3XSxcclxuICBbMTE2OS4zMjI5LCA1NTMuNzY0NF0sXHJcbiAgWzExNjUuNTAxNSwgNTUxLjA4NzY1XSxcclxuICBbMTE2NC4wMTc4LCA1NDcuMDkxNV0sXHJcbiAgWzExNTkuNzc5MywgNTQ2LjcwODA3XSxcclxuICBbMTE1NS4wMDk4LCA1NDcuNTQ5MjZdLFxyXG4gIFsxMTQ2LjUxNzYsIDU0Ny42MzI3NV0sXHJcbiAgWzExNDIuMzY4NSwgNTQ4Ljg0NDJdLFxyXG4gIFsxMTM3Ljk3MTMsIDU0Ni45OTQ4XSxcclxuICBbMTEzOS43OTk2LCA1NDMuMDMyN10sXHJcbiAgWzExNDQuODY2NSwgNTQzLjE2MzI3XSxcclxuICBbMTE1MC4xNTM4LCA1NDQuOTgyNjddLFxyXG4gIFsxMTUzLjAzMTIsIDU0Mi4xMjg4NV0sXHJcbiAgWzExNTYuNTg5NSwgNTQyLjQ3ODldLFxyXG4gIFsxMTYwLjQzOTIsIDU0MS43NjA0XSxcclxuICBbMTE2NC44MDA4LCA1NDIuMjA4NTZdLFxyXG4gIFsxMTY5LjA3MzIsIDU0Mi4yNjgyXSxcclxuICBbMTE3Mi4wNjkzLCA1MzkuMjk1MzVdLFxyXG4gIFsxMTc2LjM5MzYsIDUzOS4xMTQxNF0sXHJcbiAgWzExNjguMDAxMiwgNTMyLjE4ODZdLFxyXG4gIFsxMTY3LjczNTYsIDUzNy4zNjg5Nl0sXHJcbiAgWzExNjIuNDk3OSwgNTM3LjgxOTY0XSxcclxuICBbMTE2NC4xNTcyLCA1MzQuMDU1Ml0sXHJcbiAgWzExNjIuNzQyLCA1MjkuNDMzOTZdLFxyXG4gIFsxMTU5LjQ3MTMsIDUzMi45NTUxNF0sXHJcbiAgWzExNTcuODI5NSwgNTM3LjIwODI1XSxcclxuICBbMTE1My42OTQ2LCA1MzcuNjQ4NDRdLFxyXG4gIFsxMTQ5Ljk5NDYsIDUzNS4yODY4N10sXHJcbiAgWzExNDkuMzQ2LCA1NDAuMzQ1M10sXHJcbiAgWzExNDYuMTY1LCA1MzguMjAyNzZdLFxyXG4gIFsxMTQ1LjEyNTIsIDUzMy43OTIzNl0sXHJcbiAgWzExNDIuMjUyMSwgNTMwLjI5NThdLFxyXG4gIFsxMTM4LjkwMTksIDUzNC4zNDU1XSxcclxuICBbMTE0MS45ODEsIDUzOC40MzE5NV0sXHJcbiAgWzExMzcuMDQ3MiwgNTM4LjkxMjg0XSxcclxuICBbMTEzMi45OTU2LCA1NDEuMTcxXSxcclxuICBbMTEzMy42Mjk0LCA1NDUuNTEyOF0sXHJcbiAgWzExMzQuMDc3MSwgNTUwLjQ2MDRdLFxyXG4gIFsxMTM4LjE1ODQsIDU1Mi40NTc1XSxcclxuICBbMTE0Ny4xNjc0LCA1NTguMzIxNl0sXHJcbiAgWzExNDUuNDExNCwgNTY0LjAwODldLFxyXG4gIFsxMTUxLjAzNTUsIDU2Mi42MTMxNl0sXHJcbiAgWzExNTcuMzkwOSwgNTY1LjMwNzRdLFxyXG4gIFsxMTU1Ljk5NzksIDU2MS4xMzQ2XSxcclxuICBbMTE1OC44MzcsIDU1Ny42MTE0NV0sXHJcbiAgWzExNjIuNTMyMSwgNTYxLjg1OTRdLFxyXG4gIFsxMTY5LjI1MjgsIDU2OC44OTYzNl0sXHJcbiAgWzExNzMuMDEzNywgNTY0LjM5OTY2XSxcclxuICBbMTE2OC4yNDU2LCA1NjIuNTIwNl0sXHJcbiAgWzExNjYuMTA2NywgNTU3LjczMzFdLFxyXG4gIFsxMTYyLjQyNTMsIDU1NC42MTU3XSxcclxuICBbMTE1OC42MTY2LCA1NTEuNTI1OF0sXHJcbiAgWzExNTMuNjE3NCwgNTUzLjEyMTddLFxyXG4gIFsxMTUyLjU3MDcsIDU1Ny4zOTk2XSxcclxuICBbMTE1MC43Mzk2LCA1NDkuNTc5ODNdLFxyXG4gIFsxMTQ3LjI2MzEsIDU1Mi45MTkyNV0sXHJcbiAgWzExNDIuNDE5MiwgNTU0LjUwNF0sXHJcbiAgWzExMzMuNTA0MywgNTU2LjEyNTldLFxyXG4gIFsxMTM3LjMwNjksIDU1Ny45MzAyNF0sXHJcbiAgWzExNDEuOTgzOSwgNTU5Ljc5MDldLFxyXG4gIFsxMTM4LjAzMDMsIDU2My4wMDAzXSxcclxuICBbMTEzMi41MjA1LCA1NjIuMjQyNV0sXHJcbiAgWzExMjguOTM4NSwgNTY2LjkyODddLFxyXG4gIFsxMTI2LjU5MzEsIDU2Mi4xNDU2XSxcclxuICBbMTEyOC42ODg4LCA1NTcuOTg2NF0sXHJcbiAgWzExMjIuNzY0NSwgNTU2Ljg4MV0sXHJcbiAgWzExMjEuOTgzOSwgNTYxLjcxNzNdLFxyXG4gIFsxMTIyLjI0ODIsIDU2Ni4yMTg2XSxcclxuICBbMTExNi4xNjU4LCA1NjQuMjc0ODRdLFxyXG4gIFsxMTE4LjEyNDMsIDU2MC4wNjQ0XSxcclxuICBbMTExMy4xMTAxLCA1NjAuMjg5NV0sXHJcbiAgWzExMTAuMTgwOSwgNTYyLjY5NDM0XSxcclxuICBbMTEwNy42MzMsIDU2NS44MjY5N10sXHJcbiAgWzExMDUuMzY3OSwgNTYyLjE0NDY1XSxcclxuICBbMTEwMC44MTc0LCA1NjIuMDc3NzZdLFxyXG4gIFsxMTAyLjg3NjEsIDU2Ni4xMjgwNV0sXHJcbiAgWzEwOTguMjYxOCwgNTY2Ljc4MDRdLFxyXG4gIFsxMDkyLjA2NiwgNTY3LjkyMTVdLFxyXG4gIFsxMDk1LjQzMDUsIDU3MC42NjE3NF0sXHJcbiAgWzEwOTcuNTg0NCwgNTc0LjY3Mjg1XSxcclxuICBbMTEwMC40ODg2LCA1NzAuODk3NDZdLFxyXG4gIFsxMTA1LjA0OTYsIDU2OS43NjQ0XSxcclxuICBbMTEwMy45NDA4LCA1NzQuMDc4M10sXHJcbiAgWzExMDAuODU5NCwgNTc3LjMwMDldLFxyXG4gIFsxMTAyLjQxODgsIDU4My41NzQwNF0sXHJcbiAgWzExMDQuNDQzNywgNTc5LjU3MjhdLFxyXG4gIFsxMTEyLjkzNDMsIDU3Ni44MTMwNV0sXHJcbiAgWzExMTMuMDgwNywgNTgyLjExNTldLFxyXG4gIFsxMTA4LjY2ODcsIDU4MS4xOTQ3XSxcclxuICBbMTEwOC4wMzM0LCA1NzYuODMwNDRdLFxyXG4gIFsxMTA5LjExMzIsIDU3My4xMjQ0XSxcclxuICBbMTEwOS41NDkxLCA1NjkuNDE3MzZdLFxyXG4gIFsxMTEyLjgzMDgsIDU2Ny4wNzU3XSxcclxuICBbMTExNC4yMjA2LCA1NzIuMTMwOF0sXHJcbiAgWzExMTguMDIxNywgNTY4LjY1MjgzXSxcclxuICBbMTExOS40ODE0LCA1NzMuMTcxNzVdLFxyXG4gIFsxMTE3LjQyOTIsIDU3OC4xMDUxXSxcclxuICBbMTExOC4wMjI1LCA1ODMuNTc3XSxcclxuICBbMTEyMi43MDk4LCA1ODQuMDI3MzRdLFxyXG4gIFsxMTIyLjEzMzMsIDU3OC43OTA0XSxcclxuICBbMTEyNC40NTUzLCA1NzQuODIwOV0sXHJcbiAgWzExMjQuNzY4LCA1NzAuMDY2NV0sXHJcbiAgWzExMjguOTgxMSwgNTczLjc1ODhdLFxyXG4gIFsxMTMzLjEwNjIsIDU3MS42ODc0NF0sXHJcbiAgWzExMzUuMDYyMSwgNTY3LjI5NzVdLFxyXG4gIFsxMTM5LjE4NjUsIDU3Mi4yNDIzXSxcclxuICBbMTE0MC45NjM5LCA1NjcuMTc3ODZdLFxyXG4gIFsxMTUwLjI4OSwgNTY3LjUzMTRdLFxyXG4gIFsxMTQ1LjE2NTIsIDU3MC43MDUxXSxcclxuICBbMTE0OS42OTY4LCA1NzQuMjU2OTZdLFxyXG4gIFsxMTU1LjEzNTksIDU3MC41MzgyXSxcclxuICBbMTE2Mi43ODcsIDU2Ny44MTAyXSxcclxuICBbMTE2NS41NTI3LCA1NzIuNTg4NDRdLFxyXG4gIFsxMTY0LjU2ODQsIDU3Ny41MTE1XSxcclxuICBbMTE1OS41MTksIDU3My40MDcxXSxcclxuICBbMTE1OS4yMjYxLCA1NzguOTMxNF0sXHJcbiAgWzExNjIuNDY3OCwgNTgyLjQyNzg2XSxcclxuICBbMTE2NC4zMjA5LCA1ODYuNTEyMV0sXHJcbiAgWzExNTcuODA5NywgNTg0LjkyMzM0XSxcclxuICBbMTE1NC43Njc2LCA1OTAuNjM3OF0sXHJcbiAgWzExNDkuNDc2NiwgNTg4LjU0NjddLFxyXG4gIFsxMTUyLjc0MjgsIDU4NC4wMDM1NF0sXHJcbiAgWzExNTQuMTY5MiwgNTc3LjkxNjc1XSxcclxuICBbMTE0Ny43NzU0LCA1ODEuMDMxNV0sXHJcbiAgWzExNDIuOTc1LCA1NzcuMzU1NV0sXHJcbiAgWzExMzYuNzk1OSwgNTc3LjA1NzZdLFxyXG4gIFsxMTMxLjk3NTYsIDU3OC4zMjM2XSxcclxuICBbMTEyNy4xODI1LCA1ODAuMTY1OV0sXHJcbiAgWzExMjYuOTA5MiwgNTg2LjEzMzU0XSxcclxuICBbMTEyNS45NTU4LCA1OTEuMzUxNTZdLFxyXG4gIFsxMTI5LjMxMzEsIDU5Ni4yMjk5XSxcclxuICBbMTEzMi4xOTM2LCA2MDAuNTQyMzZdLFxyXG4gIFsxMTM3Ljk1MzksIDU5OS4xNzM5NV0sXHJcbiAgWzExNDMuMzQwNywgNTk5LjkwNDNdLFxyXG4gIFsxMTM1LjgwNzUsIDU5Mi4xMDg1XSxcclxuICBbMTEzMS4zNzIsIDU5MC4wODM5XSxcclxuICBbMTEzMS45Mjc0LCA1ODQuMzM3NjVdLFxyXG4gIFsxMTM2LjYzNzUsIDU4My4zMDkyXSxcclxuICBbMTE0MS4wNjI2LCA1ODQuMzUwM10sXHJcbiAgWzExNDQuNzYyMywgNTg3LjMzNjRdLFxyXG4gIFsxMTQwLjgwMTMsIDU5Mi40OTAyXSxcclxuICBbMTE0Ni4wNzczLCA1OTQuMTk0N10sXHJcbiAgWzExNTEuNjYyOCwgNTk1LjA4OTk3XSxcclxuICBbMTE1NS43NzQsIDU5OS43MjMyXSxcclxuICBbMTE0OS4yNTUyLCA2MDAuNzE4MTRdLFxyXG4gIFsxMTUyLjM0OTQsIDYwNS41NjA2N10sXHJcbiAgWzExNTcuNjM4NywgNjE3LjczODE2XSxcclxuICBbMTE1My4wNTI0LCA2MTUuNjA4NDZdLFxyXG4gIFsxMTUxLjU0MiwgNjIwLjI4MTldLFxyXG4gIFsxMTQ2LjMwMTMsIDYyMC42MjY0Nl0sXHJcbiAgWzExNTQuMTM2MSwgNjI1Ljg1NDQzXSxcclxuICBbMTE1Ni45OTkxLCA2MjIuNTE0MV0sXHJcbiAgWzExNjEuOTY2NywgNjIyLjM1MTI2XSxcclxuICBbMTE2My41NDQ5LCA2MjYuOTgwMzVdLFxyXG4gIFsxMTU4LjcxNjcsIDYyOC45NjIwNF0sXHJcbiAgWzExNjAuOTgzOCwgNjM1LjU3MjI3XSxcclxuICBbMTE2Ny4xMjQ4LCA2MzYuNzY2Ml0sXHJcbiAgWzExNjQuNTQ4LCA2MzEuOTM2NzddLFxyXG4gIFsxMTcxLjIxMDYsIDYzMy41MThdLFxyXG4gIFsxMTc2LjE4ODgsIDYzNC4xODI4Nl0sXHJcbiAgWzExODAuOTgxOSwgNjMzLjMwOTFdLFxyXG4gIFsxMTg0LjQ3MTgsIDYzNi41MjY1NV0sXHJcbiAgWzExODguMTg4NywgNjQwLjU3MjldLFxyXG4gIFsxMTkyLjQ0NTcsIDY0NC4zNzYwNF0sXHJcbiAgWzExOTcuMjU1NCwgNjQzLjAyNl0sXHJcbiAgWzExOTMuMDgwNiwgNjM5LjM3OTY0XSxcclxuICBbMTE5Ni4yOTQzLCA2MzYuNDYzMjZdLFxyXG4gIFsxMjAxLjY1NjEsIDYzNC42MDI4XSxcclxuICBbMTIwMC41ODA0LCA2MzkuMTc0ODddLFxyXG4gIFsxMjAyLjM2NjEsIDY0My4zODQwM10sXHJcbiAgWzEyMDAuODg3NSwgNjQ3LjczNjJdLFxyXG4gIFsxMTk2LjQxOTgsIDY0OS4xMTddLFxyXG4gIFsxMTk1LjkwNCwgNjU0Ljg3OTVdLFxyXG4gIFsxMjAxLjUzNTUsIDY1NC4yMDk2XSxcclxuICBbMTIwNC41NTQ5LCA2NTAuOTgyODVdLFxyXG4gIFsxMjA4Ljk3NTIsIDY1MC45Nzk0M10sXHJcbiAgWzEyMTMuNzQzLCA2NTEuNDY5NF0sXHJcbiAgWzEyMTYuNzI3NywgNjQ3LjgwMDldLFxyXG4gIFsxMjE5Ljk2NTYsIDY0NC41NTg3XSxcclxuICBbMTIxOS4yMDg3LCA2NDAuNjU0Ml0sXHJcbiAgWzEyMTQuOTY5MiwgNjQzLjI1NzVdLFxyXG4gIFsxMjExLjUzMDQsIDY0Ni40NzAzXSxcclxuICBbMTIwNi43MzA2LCA2NDUuOTM1MjRdLFxyXG4gIFsxMjA1Ljk5NTQsIDY0MC45OTY4XSxcclxuICBbMTIxMC40Njc3LCA2NDEuMDk3NV0sXHJcbiAgWzEyMTQuMjYyMSwgNjM4LjYwMTldLFxyXG4gIFsxMjE3LjgwNTQsIDYzNi43MzY5NF0sXHJcbiAgWzEyMjIuMDgwOCwgNjM2LjgxMTQ2XSxcclxuICBbMTIyMi40NzI5LCA2MzMuMDg2NF0sXHJcbiAgWzEyMjUuNTI3OCwgNjMwLjg2NjNdLFxyXG4gIFsxMjI5LjIwMTksIDYzMS45NTIxNV0sXHJcbiAgWzEyMzEuMzY3NywgNjM4LjAyMTddLFxyXG4gIFsxMjI3LjAzNjUsIDYzNi41MTVdLFxyXG4gIFsxMjI0LjMyMzcsIDY0MC4yOTM4XSxcclxuICBbMTIyNS4xODEsIDY0NC4xMTE0NV0sXHJcbiAgWzEyMjguODEwNywgNjQ3LjQ0MTldLFxyXG4gIFsxMjMzLjk3MTIsIDY0Ny42OTcyN10sXHJcbiAgWzEyMzcuOTY3OSwgNjQ1LjQ4MTJdLFxyXG4gIFsxMjM5LjkxOSwgNjUwLjc4OThdLFxyXG4gIFsxMjMwLjM5MjgsIDY1Mi4zNjMxXSxcclxuICBbMTIyOC4wNzc5LCA2NTYuODM5N10sXHJcbiAgWzEyMjguNTk2OSwgNjYzLjY1MDI3XSxcclxuICBbMTIzMS4zNDMzLCA2NzAuMTM0MTZdLFxyXG4gIFsxMjIyLjE1NjQsIDY2NC41NjU1NV0sXHJcbiAgWzEyMTYuMjczLCA2NjMuODg4OV0sXHJcbiAgWzEyMTEuNjQ1NiwgNjYxLjUwMDddLFxyXG4gIFsxMjI0LjE1ODcsIDY1OS43MDMyNV0sXHJcbiAgWzEyMTguOTQ4OSwgNjUxLjk5NjM0XSxcclxuICBbMTIyMi41NTg1LCA2NDguMDc4Nl0sXHJcbiAgWzEyMjUuNTc0LCA2NTEuNDAyNl0sXHJcbiAgWzEyMjIuNjY5OSwgNjU0Ljc3OTY2XSxcclxuICBbMTIxOS4wMTg0LCA2NTguNDA1NF0sXHJcbiAgWzEyMTUuMDM1LCA2NTYuMjY0MzRdLFxyXG4gIFsxMjA5LjkzNjUsIDY1NS44NzYzNF0sXHJcbiAgWzEyMDUuNzE1NiwgNjU5Ljc5ODE2XSxcclxuICBbMTE5OS44MDcsIDY1OS41MTIxNV0sXHJcbiAgWzExOTQuNDgxNywgNjYyLjA3NzVdLFxyXG4gIFsxMTkwLjQ4OSwgNjU2Ljc0NzVdLFxyXG4gIFsxMTg3LjQzNjUsIDY2MS4wMzI1XSxcclxuICBbMTE3Ni43NTI5LCA2NjMuMzY5NF0sXHJcbiAgWzExNzcuMDcwOSwgNjU2LjA0OTJdLFxyXG4gIFsxMTcxLjY2NywgNjYwLjE2Mzk0XSxcclxuICBbMTE1NS40NDIsIDYzOS42OTU1XSxcclxuICBbMTE1NS45NjcyLCA2MzQuMjM3NTVdLFxyXG4gIFsxMTUyLjI0NjMsIDYzMC40OTQzXSxcclxuICBbMTE0OC40NTQ3LCA2MjUuNzMyMDZdLFxyXG4gIFsxMTQ1LjcxNDQsIDYzMC43MjE1XSxcclxuICBbMTE0MS41MDM3LCA2MjYuMjYwNl0sXHJcbiAgWzExMzkuNDEzNSwgNjMyLjE2MjddLFxyXG4gIFsxMTQzLjcxOTYsIDYzNi45ODg2NV0sXHJcbiAgWzExNDkuNzE2NCwgNjM1LjcwOTRdLFxyXG4gIFsxMTQ4LjUyMDksIDY0Mi42MjM2Nl0sXHJcbiAgWzExNDEuNjczNSwgNjQ0LjI1ODJdLFxyXG4gIFsxMTM4LjAyOTcsIDYzOS43OTE1Nl0sXHJcbiAgWzExMzUuMDQ5OCwgNjQ1Ljk2NThdLFxyXG4gIFsxMTMxLjY4NiwgNjQxLjU3NjU0XSxcclxuICBbMTEyOC42MzQ4LCA2MzcuMTU1M10sXHJcbiAgWzExMjIuNTcwMywgNjM3Ljg4NTRdLFxyXG4gIFsxMTE5LjE1NzUsIDY0Ny43NjM1NV0sXHJcbiAgWzExMTkuMzE3OSwgNjQyLjYxMDk2XSxcclxuICBbMTEyMy4xMTY4LCA2NjMuNjg5NV0sXHJcbiAgWzExMTcuNDI2NCwgNjY0LjU4NjJdLFxyXG4gIFsxMTEwLjg1NiwgNjY0LjYzODczXSxcclxuICBbMTEwOC42NjExLCA2NTkuMDQ4M10sXHJcbiAgWzExMTQuNTMyNywgNjU5LjI0ODhdLFxyXG4gIFsxMTA1LjAwODksIDY2NC40OTMxNl0sXHJcbiAgWzExMDAuODAzOCwgNjY4LjU5MTU1XSxcclxuICBbMTA5NC4yMzMsIDY2Ni44OTk0XSxcclxuICBbMTEwMy4xNzgyLCA2NzUuNzkxMjZdLFxyXG4gIFsxMDk4LjUzNzYsIDY3My4yNTc1N10sXHJcbiAgWzEwOTMuODI5MiwgNjc0LjAyMDU3XSxcclxuICBbMTA4OC41NDMyLCA2NzUuMzk4Ml0sXHJcbiAgWzEwODQuNDg5NiwgNjgwLjE0NzJdLFxyXG4gIFsxMDkxLjE0MzMsIDY4MC41MTMyXSxcclxuICBbMTA5Ny44ODcxLCA2ODAuMzUxNDRdLFxyXG4gIFsxMTA3LjEzNjIsIDY3MC43MTc3XSxcclxuICBbMTEwOC40NDE3LCA2NzcuNDQwOV0sXHJcbiAgWzExMTIuOTUwOCwgNjczLjYwNjE0XSxcclxuICBbMTExMy40OTk5LCA2NjkuMDQxXSxcclxuICBbMTExOS4zMTY0LCA2NzAuMDAxNl0sXHJcbiAgWzExMjUuMjI5MSwgNjY5LjUyNzhdLFxyXG4gIFsxMTI4LjQxMjUsIDY2NC4yMTkyXSxcclxuICBbMTEzNi4zNzYzLCA2NTEuOTA4NDVdLFxyXG4gIFsxMTI4Ljk2NTIsIDY0OC4zODE4NF0sXHJcbiAgWzExMjUuNjk3NiwgNjQzLjQxMTI1XSxcclxuICBbMTEzNC42ODYyLCA2MzUuNTk1Nl0sXHJcbiAgWzExMzEuNzA2OSwgNjMxLjQ5MTddLFxyXG4gIFsxMTM0LjUyMywgNjI3LjQwMjJdLFxyXG4gIFsxMTE2Ljg0OTUsIDYxNC4xMzYyXSxcclxuICBbMTEyOC4yOTgzLCA2MDcuMTA5NV0sXHJcbiAgWzExMjQuMTE2MSwgNjAxLjM2MTE1XSxcclxuICBbMTEyMi4yNDY1LCA1OTUuMTc0OV0sXHJcbiAgWzExMjAuMTkwMiwgNTg5LjI4NzIzXSxcclxuICBbMTExNy4yMDIxLCA1OTguNzI0MzddLFxyXG4gIFsxMTEwLjM3NjUsIDU5OC4wMzM1N10sXHJcbiAgWzExMTUuMjcsIDU5Mi43NDI3XSxcclxuICBbMTExNC4wMDI5LCA1ODcuMjgwNjRdLFxyXG4gIFsxMTA5LjQzNjQsIDU5MS4xNjZdLFxyXG4gIFsxMTA3LjkyNDYsIDU4NS44NzY4XSxcclxuICBbMTEwMy4yMjEzLCA1ODguOTQ2NTNdLFxyXG4gIFsxMDk4LjI4ODUsIDU4Ni42MDMxXSxcclxuICBbMTA5My44MDg1LCA1ODIuMDQ1N10sXHJcbiAgWzEwOTcuODY0MywgNTgwLjU3MjRdLFxyXG4gIFsxMDkzLjkyNDIsIDU4OC4xOTkyXSxcclxuICBbMTA5My4xMjkzLCA1OTMuMzcwN10sXHJcbiAgWzEwOTguOTg3OCwgNTkzLjQ3MzE0XSxcclxuICBbMTEwNC43ODE5LCA1OTQuNjU1Ml0sXHJcbiAgWzExMDMuMzI0MywgNjAwLjA5NTddLFxyXG4gIFsxMTA3Ljc1MTUsIDYwNC45MDNdLFxyXG4gIFsxMTAyLjc4NiwgNjA4LjgyM10sXHJcbiAgWzEwOTcuNzIwNywgNjExLjg1Nzg1XSxcclxuICBbMTA5MC40NzAzLCA2MTIuNjE3NV0sXHJcbiAgWzEwODkuMzU5NCwgNjE5Ljk1ODZdLFxyXG4gIFsxMDg0Ljg0ODMsIDYzMi4yMDk3XSxcclxuICBbMTA4OC4zMjk4LCA2MzcuOTE3MzZdLFxyXG4gIFsxMDgwLjQ1NiwgNjQyLjkzNTU1XSxcclxuICBbMTA3Ni4yNzE3LCA2MzkuOTE4Nl0sXHJcbiAgWzEwODIuMDQ0NCwgNjM3LjI5N10sXHJcbiAgWzEwNzYuOTkzOCwgNjI2LjUwOTAzXSxcclxuICBbMTA3Ni45MTcyLCA2MjAuNTQ3NV0sXHJcbiAgWzEwODIuODI5LCA2MjAuMTAxODddLFxyXG4gIFsxMDg0LjcwNDgsIDYxNC45NjIxXSxcclxuICBbMTA3Ny42ODA1LCA2MTQuNTYwNV0sXHJcbiAgWzEwNzYuNjY4MiwgNjAzLjI0NDddLFxyXG4gIFsxMDc1Ljk4NDcsIDU5My42ODU4XSxcclxuICBbMTA3OS41NzM5LCA1OTEuMjYxXSxcclxuICBbMTA4NC4xMjc4LCA1ODkuNTgwMV0sXHJcbiAgWzEwODguODA0NiwgNTg4LjU5NTJdLFxyXG4gIFsxMDg4LjM1MjksIDU5NC4yNDU2XSxcclxuICBbMTA4Mi41NSwgNTk1LjA1M10sXHJcbiAgWzEwODUuNzczNiwgNTk5LjAwOTAzXSxcclxuICBbMTA5MS4wMDEyLCA2MDAuNzAzMDZdLFxyXG4gIFsxMDk1Ljg4OCwgNTk4LjM0NzY2XSxcclxuICBbMTA5OC40OTM1LCA2MDMuNTA2MV0sXHJcbiAgWzEwOTMuODA0LCA2MDYuOTE0MzddLFxyXG4gIFsxMDg3Ljk2NDcsIDYwNi4xMzUyNV0sXHJcbiAgWzEwODMuMDc0NSwgNjA5LjQwNThdLFxyXG4gIFsxMDc2Ljk5NTYsIDYwOC43NDkyN10sXHJcbiAgWzEwODIuMzM0NSwgNjAyLjkzMzNdLFxyXG4gIFsxMDc3LjY4MDgsIDU5OC4yNDA1XSxcclxuICBbMTA3Ni4xMDg5LCA1ODcuOTY5ODVdLFxyXG4gIFsxMDgwLjM2ODUsIDU4NS43OTM4XSxcclxuICBbMTA4NC43OTMsIDU4NC4xODYwNF0sXHJcbiAgWzEwODkuNzEwOSwgNTgzLjUzNDddLFxyXG4gIFsxMDg1Ljc3ODYsIDU3OS40MDk0XSxcclxuICBbMTA4OS41MTc4LCA1NzcuNzM5NzVdLFxyXG4gIFsxMDkzLjcyNDYsIDU3Ni4yODUzNF0sXHJcbiAgWzEwOTAuMDgxNywgNTcyLjQ3NDJdLFxyXG4gIFsxMDg1LjU3NjIsIDU2OS42MjkzM10sXHJcbiAgWzEwODMuNzQwNCwgNTc0LjE4NjA0XSxcclxuICBbMTA4MS4wMzEyLCA1NzkuMjQ3N10sXHJcbiAgWzEwNzYuNTU0OSwgNTgyLjU5MjldLFxyXG4gIFsxMDc2LjQwNTMsIDU3Ny40MDkxXSxcclxuICBbMTA3Ny4yNDY4LCA1NzMuMDE5NjVdLFxyXG4gIFsxMDc5LjMzODEsIDU2OS4wMTk5XSxcclxuICBbMTA4Mi43NDM3LCA1NjUuNDA1NV0sXHJcbiAgWzEwODguMDk5OSwgNTY1LjUyNTVdLFxyXG4gIFsxMDg2LjE4NTQsIDU2MS42NDQzXSxcclxuICBbMTA5MC4yNjk1LCA1NjAuODMwOF0sXHJcbiAgWzEwOTIuOTE2NCwgNTYzLjg2NDc1XSxcclxuICBbMTA5Ni43MTIyLCA1NjIuODM5OTddLFxyXG4gIFsxMDk0LjY3NDcsIDU1OS4wODddLFxyXG4gIFsxMDk4LjgyNjMsIDU1OC4xMDExXSxcclxuICBbMTEwMS44MTU0LCA1NTQuMTYwN10sXHJcbiAgWzExMDMuMzg5NCwgNTU3LjkxMDVdLFxyXG4gIFsxMTA3Ljc5MDksIDU1OC4zNTUwNF0sXHJcbiAgWzExMTAuNzIxMSwgNTU1LjUwNTNdLFxyXG4gIFsxMTE0LjcyMjksIDU1Ni40MTU0XSxcclxuICBbMTExOC4wMzE1LCA1NTQuNDc0NV0sXHJcbiAgWzExMTkuODMzNCwgNTUwLjU3NjNdLFxyXG4gIFsxMTI0LjE3ODcsIDU0Ny42NDg2XSxcclxuICBbMTEyNS4yMzIsIDU1My4wNDkyNl0sXHJcbiAgWzExMzAuMDI4LCA1NTMuMzE5M10sXHJcbiAgWzExMjkuMDgyMywgNTQ4LjY2NjE0XSxcclxuICBbMTEyOC41MTkyLCA1NDMuNTQ3MV0sXHJcbiAgWzExMjMuNzQxMywgNTQxLjczMDJdLFxyXG4gIFsxMTE5LjU1MTksIDU0NC40NDQzNF0sXHJcbiAgWzExMTUuMjc5LCA1NDcuMjM4OF0sXHJcbiAgWzExMTIuMTc2NSwgNTUwLjk4NzM3XSxcclxuICBbMTEwNi42NTYxLCA1NTMuMTMwODZdLFxyXG4gIFsxMTA1LjY4MDksIDU0OC4zMzUxNF0sXHJcbiAgWzExMTAuMDA0NSwgNTQ1LjM3NTRdLFxyXG4gIFsxMTE0LjU0NTcsIDU0MS41Njk4XSxcclxuICBbMTExOS4zMDg4LCA1MzguMDg0Ml0sXHJcbiAgWzExMjMuNTE2MSwgNTM0Ljg5MjZdLFxyXG4gIFsxMTI3LjM3ODQsIDUzOC4wMTc2XSxcclxuICBbMTEzMi4yODg4LCA1MzYuNDk0NTddLFxyXG4gIFsxMTMzLjc0NTgsIDUzMi4xNDYzNl0sXHJcbiAgWzExMzcuMzI1NywgNTI4Ljk4NzU1XSxcclxuICBbMTEyNy44NTI1LCA1MzIuMDAxOV0sXHJcbiAgWzExMzAuODY5MywgNTI3LjczMDgzXSxcclxuICBbMTEzNC44NzMsIDUyNC4yMDAxXSxcclxuICBbMTEzNy40MywgNTE5LjYwNjRdLFxyXG4gIFsxMTQyLjM3NTksIDUxOS42NjU3XSxcclxuICBbMTE0Ni42MjEyLCA1MTcuMzQ4Nl0sXHJcbiAgWzExNTAuMTM4NCwgNTE0LjM3OTZdLFxyXG4gIFsxMTU0LjA0ODgsIDUxNy4xMTYzM10sXHJcbiAgWzExNTEuMTM0NSwgNTIwLjcwNTkzXSxcclxuICBbMTE0Ni40Njc4LCA1MjIuODc5NjRdLFxyXG4gIFsxMTUxLjYzNjUsIDUyNi4xODkxNV0sXHJcbiAgWzExNTYuMDcyNiwgNTIzLjE5NTNdLFxyXG4gIFsxMTU4LjI5MDYsIDUxOS4yMjE5XSxcclxuICBbMTE2Mi42MjYyLCA1MTkuODg4XSxcclxuICBbMTE2Mi4zNzcsIDUxNS4yMDI5XSxcclxuICBbMTE2My43ODA5LCA1MTAuNTIzMzhdLFxyXG4gIFsxMTY3LjEzOTYsIDUxMi4xMjQ0XSxcclxuICBbMTE2Ni42NTIzLCA1MTYuMzE2MzVdLFxyXG4gIFsxMTcxLjMxNTEsIDUxMy45NDRdLFxyXG4gIFsxMTcwLjc5NDQsIDUxMC4xNzI1NV0sXHJcbiAgWzExNjcuNjg5NSwgNTA3LjQzNDRdLFxyXG4gIFsxMTY4LjgzNSwgNTAzLjI5NjJdLFxyXG4gIFsxMTcwLjc2MjYsIDQ5OS4zODYxXSxcclxuICBbMTE3NC43MzcyLCA0OTguNjI5Nl0sXHJcbiAgWzExNzAuNDg2NiwgNDk0LjY0OTM1XSxcclxuICBbMTE2Ni42Njc2LCA0OTguMTk2NjZdLFxyXG4gIFsxMTY0LjIxNjIsIDQ4OC4wNDQzXSxcclxuICBbMTE2MC4wODc5LCA0ODguNDIxODRdLFxyXG4gIFsxMTY0LjIzNjIsIDQ4My4zMTIzNV0sXHJcbiAgWzExNjguNTMzMiwgNDg1LjMwMjk1XSxcclxuICBbMTE3My4zNzE1LCA0ODQuNjkwMl0sXHJcbiAgWzExNjkuODYxNSwgNDgwLjAyMTM2XSxcclxuICBbMTE3NC4zNzI2LCA0NzYuOTU1NV0sXHJcbiAgWzExNzkuMDMxLCA0NzQuMDA3NzVdLFxyXG4gIFsxMTgzLjIzMDUsIDQ3Ni42MTc2OF0sXHJcbiAgWzExODIuMTI0NiwgNDgzLjI4MjkzXSxcclxuICBbMTE3Ny42NjcsIDQ4MS40MTVdLFxyXG4gIFsxMTc3LjgzOTcsIDQ4Ny43MTAzM10sXHJcbiAgWzExODIuNjkyOSwgNDg4LjQxMzRdLFxyXG4gIFsxMTg1LjcyNDQsIDQ5Mi4yMjA4XSxcclxuICBbMTE4Ny40NzY4LCA0ODUuNTkyODZdLFxyXG4gIFsxMTg2LjQzODIsIDQ4MC41NjUyNV0sXHJcbiAgWzExOTAuNzQ3MywgNDgxLjU3NTE2XSxcclxuICBbMTE5My4xNzU5LCA0ODUuMDY2OTZdLFxyXG4gIFsxMTk3Ljk5NzksIDQ4NC4xMzEyM10sXHJcbiAgWzEyMDAuMDY1OSwgNDc5Ljk4NDM4XSxcclxuICBbMTE5NC44Mzc4LCA0NzguODU3MTJdLFxyXG4gIFsxMTg4Ljc4ODUsIDQ3NS4zMzA1XSxcclxuICBbMTE5MC40MTU4LCA0NjkuODE1NTVdLFxyXG4gIFsxMTk0LjQyMjcsIDQ3My44MDkwMl0sXHJcbiAgWzExOTYuODgzNSwgNDY5LjU4Ml0sXHJcbiAgWzEyMDMuMjgwNiwgNDY5LjQ0NTk4XSxcclxuICBbMTIwMC4zNzQzLCA0NzQuMzQ3NTNdLFxyXG4gIFsxMjA0LjMyNTksIDQ3Ny42OTk5XSxcclxuICBbMTIwOS4xMjQ2LCA0NzkuMjA5MV0sXHJcbiAgWzEyMDcuNzIzOSwgNDczLjYwNTM1XSxcclxuICBbMTIwOS41OTQ1LCA0NjYuODIxNl0sXHJcbiAgWzEyMTUuMjY2OCwgNDY0LjY0MTk0XSxcclxuICBbMTIyMS40NTA0LCA0NjcuMzA1XSxcclxuICBbMTIyNS41NTY1LCA0NjQuMzEyMDddLFxyXG4gIFsxMjMxLjA1NTQsIDQ2Mi44MDJdLFxyXG4gIFsxMjQxLjMyNzQsIDQ2NC44NzkxXSxcclxuICBbMTIzNi4zMDAzLCA0NjQuMjA5ODRdLFxyXG4gIFsxMjQ2LjEyNiwgNDY4LjYzMDY4XSxcclxuICBbMTI1MC42NzQyLCA0NjguMzQ5OF0sXHJcbiAgWzEyNTQuOTg0NCwgNDY5LjY3NjE1XSxcclxuICBbMTI2NC40Mjg4LCA0NzAuMjY0MV0sXHJcbiAgWzEyNjkuODk4MywgNDY5LjUwNzY2XSxcclxuICBbMTI2OC43Mzg4LCA0NzQuNTM4MjddLFxyXG4gIFsxMjU5LjMxNTgsIDQ3Mi42ODkwNl0sXHJcbiAgWzEyNTkuNDA5OSwgNDY2Ljk0ODFdLFxyXG4gIFsxMjQ2Ljg2ODQsIDQ2My43OTRdLFxyXG4gIFsxMjQxLjg2MjcsIDQ3MC4zOTcxXSxcclxuICBbMTIzNi4wNzY0LCA0NzAuMDAxMDddLFxyXG4gIFsxMjMwLjIyMzEsIDQ2OS4wNTg4XSxcclxuICBbMTIzMi45NSwgNDgwLjcyNjE3XSxcclxuICBbMTI0My4xNDYxLCA0ODIuODcyOV0sXHJcbiAgWzEyNDUuMjI3NywgNDg2LjU3OTI4XSxcclxuICBbMTI0Ny42MTg0LCA0OTAuMTY3NTRdLFxyXG4gIFsxMjQ3LjYxNDUsIDQ5NC42MTIxNV0sXHJcbiAgWzEyNDMuODkyMywgNTA0LjQxOTk4XSxcclxuICBbMTI0MC4yODU2LCA1MDguNTM2OTZdLFxyXG4gIFsxMjQ1LjQ5NTYsIDUwOS4yNTUwN10sXHJcbiAgWzEyNDYuMzg2NiwgNTEzLjc5NjRdLFxyXG4gIFsxMjUxLjI5NjMsIDUxMi40MTk5XSxcclxuICBbMTI1Mi4xNjg3LCA1MTcuNjYxNTZdLFxyXG4gIFsxMjQ3LjkyMTMsIDUxOC41NDFdLFxyXG4gIFsxMjQyLjgyMjQsIDUxOC4zMTA4NV0sXHJcbiAgWzEyNDQuMjkyOCwgNTIyLjgwMjFdLFxyXG4gIFsxMjQ4LjQ3MzUsIDUyNC4zODk3XSxcclxuICBbMTI1Mi4yNjUxLCA1MjIuNDI0MV0sXHJcbiAgWzEyNTUuODY3NywgNTI0Ljg4MjQ1XSxcclxuICBbMTI1Mi4wNzcsIDUyNy44MTk0XSxcclxuICBbMTI0OC42NjQsIDUzMC4zNjExXSxcclxuICBbMTI0NC40MjE1LCA1MjcuNjU5OF0sXHJcbiAgWzEyNDEuNDk2MywgNTMxLjc2NzY0XSxcclxuICBbMTI0NS44OTk5LCA1MzMuNjI5Nl0sXHJcbiAgWzEyNDMuNzAwMiwgNTM3Ljg4ODhdLFxyXG4gIFsxMjQ3LjExNjgsIDU0MS4wNDU2NV0sXHJcbiAgWzEyNDkuOTI0MiwgNTM2LjY0OTU0XSxcclxuICBbMTI1My4wNzk2LCA1MzMuMzE2MzVdLFxyXG4gIFsxMjU2LjMxNzYsIDUyOS45ODcyXSxcclxuICBbMTI1OS40NjY2LCA1MjcuMDUzNl0sXHJcbiAgWzEyNjMuNTMzOCwgNTI2LjA0OTldLFxyXG4gIFsxMjY2Ljc3ODEsIDUyOC4yNTA4XSxcclxuICBbMTI2Ny4xNjQxLCA1MzIuNTIyXSxcclxuICBbMTI3MC45MTI4LCA1MjkuNjMwNDNdLFxyXG4gIFsxMjcyLjY4NDEsIDUyNS4zMDQxXSxcclxuICBbMTI2OC40NTY3LCA1MjMuOTMwMDVdLFxyXG4gIFsxMjcxLjQxMjYsIDUyMC4zNjgyXSxcclxuICBbMTI3NC44OTYxLCA1MTguMTE2N10sXHJcbiAgWzEyNzkuMjczOCwgNTE4LjM2MTFdLFxyXG4gIFsxMjgxLjQ4MTgsIDUxNC4xNjE1XSxcclxuICBbMTI4MS4xNTk3LCA1MDkuNDM5MjddLFxyXG4gIFsxMjc3LjQwNDUsIDUwOS40MjkzOF0sXHJcbiAgWzEyNzMuMzE0MiwgNTEwLjM4MDhdLFxyXG4gIFsxMjY5LjE2NTgsIDUwOC42MTI0M10sXHJcbiAgWzEyNjYuMzE1OCwgNTEyLjc1NDJdLFxyXG4gIFsxMjYxLjQ4MjgsIDUxNy40MTddLFxyXG4gIFsxMjYxLjI2NTUsIDUxMi41Mjg1XSxcclxuICBbMTI2My45OTcxLCA1MDcuNzIzOTddLFxyXG4gIFsxMjY3LjY2MywgNTAzLjQ2NDU0XSxcclxuICBbMTI2My43MDk3LCA0OTkuODcwMzNdLFxyXG4gIFsxMjY3Ljk0MTksIDQ5Ny41OTQzXSxcclxuICBbMTI3Mi44MjA3LCA0OTkuOTY2OF0sXHJcbiAgWzEyNzMuMzY2NiwgNTA1LjAwMDE4XSxcclxuICBbMTI3OC41MTU1LCA1MDQuNTgyNDZdLFxyXG4gIFsxMjgzLjA2NjgsIDUwNS41NTA1XSxcclxuICBbMTI4Ni44NjM5LCA1MDQuMjAzMjJdLFxyXG4gIFsxMjkwLjM1NjEsIDUwMi4yNTg0OF0sXHJcbiAgWzEyOTIuNzE5MSwgNDk3LjgzMDM4XSxcclxuICBbMTI4OC4wNzUyLCA0OTUuMzY1MV0sXHJcbiAgWzEyODQuMjk5NywgNTAwLjU5MzQ4XSxcclxuICBbMTI4MS44MzQsIDQ5Ni41ODAyNl0sXHJcbiAgWzEyNzguMzk3LCA1MDAuMDYxMjVdLFxyXG4gIFsxMjc2LjU3OTgsIDQ5NS4wNzQ3XSxcclxuICBbMTI3MS45NDE0LCA0OTQuMTgwNDJdLFxyXG4gIFsxMjY4LjIxMzcsIDQ5MS4xNTI0XSxcclxuICBbMTI3My4xMTg3LCA0NzcuNzQxOF0sXHJcbiAgWzEyNzguMDg3OSwgNDc3Ljg0MTVdLFxyXG4gIFsxMjc1LjA1MDcsIDQ3Mi45Nzk3NF0sXHJcbiAgWzEyNzkuNjY5MiwgNDcwLjQ2MTI0XSxcclxuICBbMTI4NC41MzY0LCA0NzEuMzUyMV0sXHJcbiAgWzEyODkuODg0NSwgNDcyLjQ0MTFdLFxyXG4gIFsxMjk3Ljg3MTUsIDQ4MC4wMzExXSxcclxuICBbMTMwMC43NDI5LCA0ODUuNDA4OF0sXHJcbiAgWzEzMDUuMTEwMSwgNDg5LjIyMDI4XSxcclxuICBbMTMwMy45MjAzLCA0OTUuNjE0NDRdLFxyXG4gIFsxMjk4LjM3NDgsIDQ5Ny4xMjg1XSxcclxuICBbMTI5OS43NzM2LCA0OTEuNjExNDJdLFxyXG4gIFsxMjkzLjk4ODMsIDQ5Mi44NjExNV0sXHJcbiAgWzEyOTUuNTAxMiwgNDg2LjgzMDYzXSxcclxuICBbMTI5MS40NjQ4LCA0ODMuMzM0OV0sXHJcbiAgWzEyODguNDc1MywgNDc5LjIxNzg2XSxcclxuICBbMTI4NS43MTk4LCA0NzUuOTMyNV0sXHJcbiAgWzEyODEuMTM0LCA0NzUuMjcwOTRdLFxyXG4gIFsxMjkzLjEyOTUsIDQ3Ny4wNDM4XSxcclxuICBbMTMwNS4zNjY1LCA0ODIuNDU1M10sXHJcbiAgWzEzMTIuOTkxMywgNDgzLjQ2ODMyXSxcclxuICBbMTMwOS42MTAxLCA0ODYuNzQ4MTRdLFxyXG4gIFsxMzA5LjMzODEsIDQ5My41MzkxMl0sXHJcbiAgWzEzMTMuODcxMSwgNDkxLjAwNDU4XSxcclxuICBbMTMyNS4wNTk4LCA0OTIuODExMjhdLFxyXG4gIFsxMzI3LjI5MDIsIDQ5Ni42NTcwN10sXHJcbiAgWzEzMjcuMDAwMiwgNTAwLjcxNjk4XSxcclxuICBbMTMzMS43NDI3LCA0OTYuNjkyMzJdLFxyXG4gIFsxMzI5LjcxODMsIDQ5Mi41NTc3XSxcclxuICBbMTMzMy44NDcsIDQ5Mi40NjY1XSxcclxuICBbMTMzMy4zNDg4LCA1MDAuNDQ0M10sXHJcbiAgWzEzMzAuNzQ1NywgNTA0LjM4OF0sXHJcbiAgWzEzMzAuMzExNSwgNTA4LjkxMjU3XSxcclxuICBbMTMyOC42NDY2LCA1MTIuODcwMV0sXHJcbiAgWzEzMzMuMzM4NCwgNTEzLjg5MTldLFxyXG4gIFsxMzM1LjkxNTQsIDUxNy44Mjk2NV0sXHJcbiAgWzEzMzguNzMwNSwgNTIxLjU4NDk2XSxcclxuICBbMTM0MS4xMjk2LCA1MjUuMTc3MzddLFxyXG4gIFsxMzQ0Ljc2OTMsIDUyNi40MTk0XSxcclxuICBbMTM0OC4zNjgyLCA1MjguNTUxN10sXHJcbiAgWzEzNDguNzQwMiwgNTIzLjY1MTM3XSxcclxuICBbMTM0OS4xLCA1MTguNzk3MDZdLFxyXG4gIFsxMzQ2LjM0NTUsIDUxNS4zMjUxXSxcclxuICBbMTM0My4xOTcsIDUxMi4yOTc0XSxcclxuICBbMTMzOC4zNDIsIDUxMy41NTUyXSxcclxuICBbMTM0MS4zOTM3LCA1MTcuMTc1Ml0sXHJcbiAgWzEzNDQuNDI3NSwgNTIwLjY4MDRdLFxyXG4gIFsxMzUyLjkwMDYsIDUyMS4xMTgzXSxcclxuICBbMTM1My45MDIxLCA1MjUuNzA1OTNdLFxyXG4gIFsxMzUyLjE0MjYsIDUzMC4yMzddLFxyXG4gIFsxMzQ5Ljg1ODQsIDUzMy4zNTc2N10sXHJcbiAgWzEzNTQuMzUxNywgNTM0Ljc3NTFdLFxyXG4gIFsxMzU3LjY3MzMsIDUzOC4yMTA3NV0sXHJcbiAgWzEzNjIuNTYzOCwgNTM4LjY1MzFdLFxyXG4gIFsxMzYwLjM5MzMsIDU0Mi43OTgwM10sXHJcbiAgWzEzNjIuNTI2MSwgNTQ3LjMzODg3XSxcclxuICBbMTM2Ny44NDczLCA1NDcuOTE2OV0sXHJcbiAgWzEzNzEuNDMxOSwgNTQ0LjkxOTI1XSxcclxuICBbMTM2OS4zNDI5LCA1NTMuMTA3MjRdLFxyXG4gIFsxMzY0Ljg1NjMsIDU1MS44NDg0XSxcclxuICBbMTM1Ny41MTIzLCA1NDYuNTk2ODZdLFxyXG4gIFsxMzU1LjU5OSwgNTQyLjUzNDY3XSxcclxuICBbMTM1Mi45MjE2LCA1MzkuMDE2N10sXHJcbiAgWzEzNDguODI5MSwgNTQwLjU3MDNdLFxyXG4gIFsxMzQ5LjE2NSwgNTM2Ljg0NjI1XSxcclxuICBbMTM0NC43Nzc2LCA1MzUuNjkwN10sXHJcbiAgWzEzNDUuMjY4NiwgNTM5LjMzNzM0XSxcclxuICBbMTM0NC4wOTIzLCA1NDIuNzQzMV0sXHJcbiAgWzEzNDAuOTc0NywgNTQxLjg1XSxcclxuICBbMTMzNy42NjkyLCA1NDAuMzIwN10sXHJcbiAgWzEzNDEuMTQzMywgNTM4LjAxNjM2XSxcclxuICBbMTM0MC43NjYyLCA1MzQuMTE0OF0sXHJcbiAgWzEzNDUuOTUwNywgNTMyLjIyMV0sXHJcbiAgWzEzNDIuNjU2NSwgNTMwLjExOV0sXHJcbiAgWzEzMzguNjE1NywgNTI5LjcwNjRdLFxyXG4gIFsxMzM2Ljk5NTgsIDUyNi4xMTJdLFxyXG4gIFsxMzMzLjMxOTEsIDUyNi45MTAzXSxcclxuICBbMTMzNC4xNzI0LCA1MjIuNjM1MTNdLFxyXG4gIFsxMzMxLjQ0MzEsIDUxOS43NDAxXSxcclxuICBbMTMyOC45MDg0LCA1MTYuOTMxNl0sXHJcbiAgWzEzMjMuNzMzNiwgNTEzLjQzOThdLFxyXG4gIFsxMzI1LjE3MTEsIDUwOS4yNzY3M10sXHJcbiAgWzEzMjQuNDgxMywgNTA0LjcwMjZdLFxyXG4gIFsxMzIyLjA5NjksIDQ5Ny4xMzQxXSxcclxuICBbMTMxOS45ODE2LCA1MDEuNDQyODddLFxyXG4gIFsxMzE0Ljk0MzcsIDUwMy4yNzE0Ml0sXHJcbiAgWzEzMTMuMTU5NywgNTA4LjQzNTA2XSxcclxuICBbMTMxOS43ODM0LCA1MDguNDAzOTNdLFxyXG4gIFsxMzI0LjY0NTEsIDUxOC4xMTgwNF0sXHJcbiAgWzEzMjYuNzU5NiwgNTIxLjkzMjFdLFxyXG4gIFsxMzI5Ljg0MjgsIDUyNC41MDFdLFxyXG4gIFsxMzMwLjM5NjYsIDUyOS41Mzg3Nl0sXHJcbiAgWzEzMjcuNzEzNSwgNTMyLjQ2MDQ1XSxcclxuICBbMTMyNy4wNzMsIDUyNy42MjU5XSxcclxuICBbMTMyMy44MDE1LCA1MjUuODY4NV0sXHJcbiAgWzEzMjEuNzc1NCwgNTIyLjg3NzZdLFxyXG4gIFsxMzIwLjE3NzcsIDUxOC45OTYzXSxcclxuICBbMTMxOS44MzI1LCA1MTQuODcyN10sXHJcbiAgWzEzMTYuMzk5OSwgNTEyLjAwMjZdLFxyXG4gIFsxMzE1LjE0NzMsIDUxNi43NjMxXSxcclxuICBbMTMxMi45OTc4LCA1MjEuODg4NF0sXHJcbiAgWzEzMTcuMjY5MywgNTIyLjM4MzU0XSxcclxuICBbMTMxNS4wNTU1LCA1MjcuMTM2MzVdLFxyXG4gIFsxMzEwLjU1MzYsIDUyNy44MDg2NV0sXHJcbiAgWzEzMDguODk0LCA1MjMuOTkwM10sXHJcbiAgWzEzMDUuMDQxMywgNTI3LjA0MjY2XSxcclxuICBbMTMwMi41NTg3LCA1MzIuMjY5NjVdLFxyXG4gIFsxMzA3LjYxNTEsIDUzMS40NDAyNV0sXHJcbiAgWzEzMTIuNTc2NCwgNTMyLjIwOTUzXSxcclxuICBbMTMxOS41MDI5LCA1MjcuNzIwMzRdLFxyXG4gIFsxMzIxLjg4MTMsIDUzMy40Mzg3XSxcclxuICBbMTMyMy43MTE4LCA1MzAuMTU0Ml0sXHJcbiAgWzEzMTcuNjI3MSwgNTMyLjQ2MTJdLFxyXG4gIFsxMzE5LjM3MjQsIDUzOC4wMjgzXSxcclxuICBbMTMyNC4yOTM4LCA1MzYuNjQxMV0sXHJcbiAgWzEzMjcuMzU3MywgNTQ0LjUwODRdLFxyXG4gIFsxMzMxLjAwNzYsIDU0NS45NjMyNl0sXHJcbiAgWzEzMzQuNTk0NSwgNTQyLjk3MzE0XSxcclxuICBbMTMzNS4yNjIyLCA1NDcuMTM1Nl0sXHJcbiAgWzEzMzYuMTMyNiwgNTM3LjMyODVdLFxyXG4gIFsxMzM2LjgwMjcsIDUzMy41MjgyXSxcclxuICBbMTMzMy44NzUsIDUzMS4wOTIwNF0sXHJcbiAgWzEzMzIuMzc5NCwgNTM1LjMwNjddLFxyXG4gIFsxMzMxLjkzMzEsIDU0MC4zMzI0XSxcclxuICBbMTMyOC42Mzk0LCA1MzYuMjEzXSxcclxuICBbMTMyNy43MjA4LCA1NDAuMDk1XSxcclxuICBbMTMyMy4xOTc1LCA1NDEuMjMzXSxcclxuICBbMTMxOS4yNDYxLCA1NDMuODA1OV0sXHJcbiAgWzEzMTUuNjA3NCwgNTQxLjI5MDJdLFxyXG4gIFsxMzExLjgzMDgsIDU0Mi4xMzQ2NF0sXHJcbiAgWzEzMTAuOTgwOCwgNTQ2LjIwNzVdLFxyXG4gIFsxMzExLjcyNjMsIDU1MC4xNjU0N10sXHJcbiAgWzEzMTEuOTg1MiwgNTUzLjY5MDM3XSxcclxuICBbMTMxMi40MDYyLCA1NTcuMzc3XSxcclxuICBbMTMxMy44Mzc5LCA1NjAuOTk4MDVdLFxyXG4gIFsxMzE1LjAzNDMsIDU2NS4yNjg3XSxcclxuICBbMTMxNy43NTc2LCA1NjguOTU5OF0sXHJcbiAgWzEzMTcuNjE2MywgNTcyLjk5MDg0XSxcclxuICBbMTMyMi42NzMzLCA1NzEuOTY1NF0sXHJcbiAgWzEzMjAuOTg5MSwgNTc1Ljc1Nl0sXHJcbiAgWzEzMjEuMjg3LCA1NzkuOTgxM10sXHJcbiAgWzEzMTcuNjM2NiwgNTgxLjYwOTVdLFxyXG4gIFsxMzIxLjIyNDcsIDU4NC40Njc1XSxcclxuICBbMTMyNC4zMjU3LCA1ODcuMzA0XSxcclxuICBbMTMyOC4yMzQxLCA1ODcuNDg1NV0sXHJcbiAgWzEzMzEuMzE3MywgNTg1LjgxMDY3XSxcclxuICBbMTMzNC42NDAzLCA1ODQuMzMyMl0sXHJcbiAgWzEzMzYuOTU4MSwgNTgxLjA0NjNdLFxyXG4gIFsxMzMyLjQ0NzksIDU4MS4yMzQ2XSxcclxuICBbMTMzMy40NDYsIDU3Ny43NTU3NF0sXHJcbiAgWzEzMzcuMDk1OCwgNTc2LjIwNzldLFxyXG4gIFsxMzI4Ljk5LCA1NzguMzkyMzNdLFxyXG4gIFsxMzI4Ljk5OCwgNTgyLjc4NTE2XSxcclxuICBbMTMyNS40MTI2LCA1ODQuMDc1M10sXHJcbiAgWzEzMjUuMzg3OCwgNTgwLjY2MDc3XSxcclxuICBbMTMyNC44MDIyLCA1NzYuOTg5MjZdLFxyXG4gIFsxMzI2LjczMDIsIDU3My41ODcxNl0sXHJcbiAgWzEzMzAuNDc5MSwgNTc0LjcwNjhdLFxyXG4gIFsxMzM0LjE4NjgsIDU3My42MTY1XSxcclxuICBbMTM0MC43OTQzLCA1NzQuNTEzNTVdLFxyXG4gIFsxMzQ0LjAyMzksIDU3Mi4xMjE3N10sXHJcbiAgWzEzNDAuMjEwNywgNTc4LjgxMzFdLFxyXG4gIFsxMzM3Ljk0MTUsIDU4NS45OTE4XSxcclxuICBbMTM0MC43OTc1LCA1ODMuOTQ4XSxcclxuICBbMTM0My4zNjIzLCA1ODAuNzc4NDRdLFxyXG4gIFsxMzQ5Ljg3OCwgNTg0LjI1MTddLFxyXG4gIFsxMzUyLjA0NDQsIDU4MC4xNzEyXSxcclxuICBbMTM0Ny40NjQ1LCA1ODAuMjEyMTZdLFxyXG4gIFsxMzQ0Ljc3NzgsIDU3Ni40ODA5Nl0sXHJcbiAgWzEzNDkuNjMyMywgNTc2LjA5NDldLFxyXG4gIFsxMzU2Ljc3NTQsIDU4MC4wNDk3XSxcclxuICBbMTM1NC42MTc5LCA1NzYuMDY3XSxcclxuICBbMTM1Ni45Mzc5LCA1NzEuNTExOV0sXHJcbiAgWzEzNjEuNjQ0NCwgNTcwLjkxNjE0XSxcclxuICBbMTM1OS42NzMxLCA1NjcuMDA1OF0sXHJcbiAgWzEzNTguOTYzNiwgNTYyLjkzMDg1XSxcclxuICBbMTM1Ni41NzU0LCA1NTkuNTA5M10sXHJcbiAgWzEzNTcuMzIxOSwgNTU1LjU1NTRdLFxyXG4gIFsxMzYxLjUwNDksIDU1OC40NTQ5Nl0sXHJcbiAgWzEzNjEuNTcwOSwgNTU0LjAxMjk0XSxcclxuICBbMTM1OC41MzkxLCA1NTAuODM3MTZdLFxyXG4gIFsxMzUzLjkwMjIsIDU1My40NzQzN10sXHJcbiAgWzEzNTIuNjE5OCwgNTU3Ljc3NDldLFxyXG4gIFsxMzQ5LjY2NzUsIDU1NS4xMjQ5XSxcclxuICBbMTM0Ni4yMDM0LCA1NTQuMjkzM10sXHJcbiAgWzEzNDYuNTEzNSwgNTUwLjIwMzg2XSxcclxuICBbMTM1NC4xMjY3LCA1NDkuNzM2M10sXHJcbiAgWzEzNTIuODk5OSwgNTQ2LjQwOTI0XSxcclxuICBbMTM1MS4yOTA0LCA1NDMuMTg1OF0sXHJcbiAgWzEzNTAuMTc2NSwgNTUwLjkxMjFdLFxyXG4gIFsxMzQ5LjA1NjUsIDU0Ny4wNTY5XSxcclxuICBbMTM0Ny4yNDQ5LCA1NDMuODc4NTRdLFxyXG4gIFsxMzQ1LjAwOTQsIDU0Ni44MjA3XSxcclxuICBbMTM0MS42NTM4LCA1NDUuODE4MV0sXHJcbiAgWzEzMzguMjUzOSwgNTQ0LjU3OF0sXHJcbiAgWzEzMjkuNTkwNywgNTUwLjQ0MjE0XSxcclxuICBbMTMzMy4zMDgsIDU1MC42ODI3NF0sXHJcbiAgWzEzMzcuNDg1NiwgNTUxLjYwMDM0XSxcclxuICBbMTMzNS4xNzA0LCA1NTQuNjM4NV0sXHJcbiAgWzEzMzMuNzcwOSwgNTU4LjQ4Nzg1XSxcclxuICBbMTM0MC45ODEsIDU2NC43OTNdLFxyXG4gIFsxMzQyLjIwMDEsIDU2MC41NTY0XSxcclxuICBbMTM0NS4yMzEyLCA1NTcuODk1NzVdLFxyXG4gIFsxMzQ5LjIwMzksIDU2MC4yMTU3XSxcclxuICBbMTM1My43MTIyLCA1NjIuNjgyNl0sXHJcbiAgWzEzNTQuNzEyNiwgNTY3LjE0MjJdLFxyXG4gIFsxMzQ5Ljk5NDksIDU2OC42MTU2XSxcclxuICBbMTM0OS44MTcxLCA1NjQuNzExODVdLFxyXG4gIFsxMzQ1LjU2OTYsIDU2My4xNTIyXSxcclxuICBbMTM0NS41MDg1LCA1NjcuNTc0XSxcclxuICBbMTM1Mi41MDQyLCA1NzIuMDU5M10sXHJcbiAgWzEzNDcuODMyNSwgNTcyLjE3NjY0XSxcclxuICBbMTM0MS40MjM2LCA1NjkuMDI1NDVdLFxyXG4gIFsxMzM4LjE4NzUsIDU3MS40MDUxXSxcclxuICBbMTMzNC4zOTUsIDU2OS44MzcxNl0sXHJcbiAgWzEzMzcuMTAyOSwgNTY2Ljc5MzNdLFxyXG4gIFsxMzM0Ljc2NDYsIDU2My4yNzQxXSxcclxuICBbMTMzNy44OTM4LCA1NjEuMjI2OV0sXHJcbiAgWzEzMzkuMTA0OSwgNTU3LjQxMjFdLFxyXG4gIFsxMzQwLjg3NzcsIDU1NC40MjddLFxyXG4gIFsxMzQzLjQ5OTEsIDU1Mi41NTc1Nl0sXHJcbiAgWzEzNDIuMjg3NywgNTQ5LjY3ODM0XSxcclxuICBbMTMzOS4wODM5LCA1NDguNjc0NzRdLFxyXG4gIFsxMzI4Ljc2NDMsIDU1OS41NDQzXSxcclxuICBbMTMyOS44Mzg5LCA1NTQuOTUzNl0sXHJcbiAgWzEzMjUuMzgxMywgNTU2LjQ3NTM0XSxcclxuICBbMTMyMy4zNzc5LCA1NjEuMjQ2MV0sXHJcbiAgWzEzMjYuMzc4OSwgNTY0LjM0NDJdLFxyXG4gIFsxMzMwLjc2NDMsIDU2Mi44NDIxXSxcclxuICBbMTMzMS41NDY0LCA1NjYuNzEzODddLFxyXG4gIFsxMzMwLjI2NjgsIDU3MC42NDIzM10sXHJcbiAgWzEzMjYuNjY4NSwgNTY4Ljc0MTJdLFxyXG4gIFsxMzIyLjQ2NjYsIDU2Ny43Nzk5N10sXHJcbiAgWzEzMTkuOTA0MiwgNTY0LjkxODFdLFxyXG4gIFsxMzE4LjUzOTcsIDU2MS4xMTgwNF0sXHJcbiAgWzEzMTYuNjU0OSwgNTU3LjE4OTQ1XSxcclxuICBbMTMyMC43ODQ4LCA1NTYuNjkzN10sXHJcbiAgWzEzMjIuMjI2NiwgNTUyLjM4MzNdLFxyXG4gIFsxMzI1Ljk4MzMsIDU1MC40MzE2XSxcclxuICBbMTMyMy40MTQzLCA1NDYuNDMyNV0sXHJcbiAgWzEzMTkuNDAzLCA1NDguNzk3Ml0sXHJcbiAgWzEzMTUuMjc0MiwgNTQ2Ljg5MTg1XSxcclxuICBbMTMxNi43MDU5LCA1NTIuNTMyN10sXHJcbiAgWzEzMDguMTIzMiwgNTU2LjQwNDU0XSxcclxuICBbMTMwNi45MTM1LCA1NTIuNTcyMV0sXHJcbiAgWzEyOTguNDM1MywgNTUyLjI0MzNdLFxyXG4gIFsxMjkzLjAwMzQsIDU1NC4yMjY3XSxcclxuICBbMTI4OC43MzQ5LCA1NDkuOTc4MTVdLFxyXG4gIFsxMjkyLjI0OTgsIDU0Ny42NzY5XSxcclxuICBbMTI5NS4xNjg1LCA1NTAuMDkxMV0sXHJcbiAgWzEyOTkuNDQ0MSwgNTQ3LjUxMjk0XSxcclxuICBbMTI5NS42ODk1LCA1NDQuNzExOF0sXHJcbiAgWzEyOTYuNTcwNiwgNTQwLjI0NDQ1XSxcclxuICBbMTMwMC40Njc4LCA1NDIuMzQ2NTZdLFxyXG4gIFsxMjkyLjAzMjYsIDU0MC41NDAxNl0sXHJcbiAgWzEyODkuNzk4NSwgNTQ0LjE5Njg0XSxcclxuICBbMTI4NS4xMTE2LCA1NDUuMjAxMjNdLFxyXG4gIFsxMjgxLjExLCA1NDEuMzE2M10sXHJcbiAgWzEyODYuMTc1OSwgNTM5Ljg4MDg2XSxcclxuICBbMTI4Mi41OTc4LCA1MzUuOTQ4ODVdLFxyXG4gIFsxMjc3Ljg3NjUsIDUzNi4zMzgyNl0sXHJcbiAgWzEyNzUuMjI1MSwgNTM5Ljc2MjRdLFxyXG4gIFsxMjc2Ljk5MzcsIDU0NC4wNjU2XSxcclxuICBbMTI3Mi4xMzQ4LCA1NDQuNTU2OV0sXHJcbiAgWzEyNzAuNDg4OCwgNTQwLjE5NV0sXHJcbiAgWzEyNjcuODE1LCA1MzYuNjI1NF0sXHJcbiAgWzEyNzIuMzkwNywgNTM1LjEwOTg2XSxcclxuICBbMTI3NC44NTc3LCA1MzEuNTIyOTVdLFxyXG4gIFsxMjc5LjA2NzksIDUzMS44NzFdLFxyXG4gIFsxMjgyLjI5MjUsIDUyOS42MDE3NV0sXHJcbiAgWzEyODQuOTgwNSwgNTMxLjU0MzhdLFxyXG4gIFsxMjg3LjI0MDEsIDUzNC4yOTE1XSxcclxuICBbMTI4OS44NjE2LCA1MzYuODgyMV0sXHJcbiAgWzEyOTMuOTcwNywgNTM1LjU5MjVdLFxyXG4gIFsxMjkxLjQ1OSwgNTMxLjkwMTldLFxyXG4gIFsxMjk1LjM1NjEsIDUyOS40Mzc4XSxcclxuICBbMTI5Ny43OTEzLCA1MzIuMTg5NjRdLFxyXG4gIFsxMjk4LjA1OTgsIDUzNi4yMzM2NF0sXHJcbiAgWzEzMDEuNzY4MSwgNTM3LjQ0MjFdLFxyXG4gIFsxMzA1LjI1MzQsIDUzOS45NjcyXSxcclxuICBbMTMwNi4zNzExLCA1MzUuNDYwNV0sXHJcbiAgWzEzMTQuNzY5OSwgNTM2LjQ2Mjc3XSxcclxuICBbMTMxMC4zMDYyLCA1MzcuNjA4NzZdLFxyXG4gIFsxMzA3Ljc5MywgNTQzLjExMTJdLFxyXG4gIFsxMzAzLjc2MTYsIDU0NS4wMDg4NV0sXHJcbiAgWzEzMDcuMjU5NSwgNTQ4LjEyMzRdLFxyXG4gIFsxMzAzLjE3NTIsIDU0OS42NjAyXSxcclxuICBbMTMwMi4yOTg1LCA1NTMuODY1NjZdLFxyXG4gIFsxMzAzLjU4MDIsIDU1Ny42MjQ5NF0sXHJcbiAgWzEzMDMuOTk0LCA1NjEuOTU1Ml0sXHJcbiAgWzEzMDguMTQ1MSwgNTYwLjQ2MTg1XSxcclxuICBbMTMxMC4zNTY5LCA1NjMuNDg3N10sXHJcbiAgWzEzMTAuNjQzLCA1NjcuMzAyNzNdLFxyXG4gIFsxMzEzLjI1MTEsIDU3MC42Njg3XSxcclxuICBbMTMxMi4zNjI4LCA1NzUuMDE1ODddLFxyXG4gIFsxMzE2LjgxNTQsIDU3Ny4yMTc4M10sXHJcbiAgWzEzMTMuNTY4OCwgNTgwLjE0MjddLFxyXG4gIFsxMzEyLjE0NjQsIDU4NC4yNzcxXSxcclxuICBbMTMwNy40MzgsIDU4My40MjY0NV0sXHJcbiAgWzEzMDkuMzA5NCwgNTc5LjEwMDA0XSxcclxuICBbMTMwNy4yNjYsIDU3NC44MTQxNV0sXHJcbiAgWzEzMDcuOTgxMiwgNTcwLjcwNTI2XSxcclxuICBbMTMwNS44NzI5LCA1NjYuMDkwOTRdLFxyXG4gIFsxMzAyLjg0NDYsIDU3MC4xNjIyM10sXHJcbiAgWzEzMDIuNjM5OCwgNTc1LjAwNV0sXHJcbiAgWzEyOTguNTIwMywgNTczLjk4MzM0XSxcclxuICBbMTI5NC44MTUzLCA1NzYuOTU3MzRdLFxyXG4gIFsxMjk4Ljk2NjQsIDU3OS42ODA2Nl0sXHJcbiAgWzEzMDQuMjkxNSwgNTc5LjE3NDU2XSxcclxuICBbMTMwMi40MTIsIDU4My40MDQ4XSxcclxuICBbMTI5OC43MzQxLCA1ODUuOTU0MV0sXHJcbiAgWzEyOTguOTcxMiwgNTkwLjYzMTk2XSxcclxuICBbMTI5Ny4xMTA1LCA1OTUuMDcxMl0sXHJcbiAgWzEyOTMuMjcwOCwgNTkzLjEyMjU2XSxcclxuICBbMTI4OS4zODYyLCA1OTUuMzE0N10sXHJcbiAgWzEyODQuODI0NywgNTk2LjA2NzQ0XSxcclxuICBbMTI4NC43NjU1LCA2MDEuODA5OV0sXHJcbiAgWzEyODguOTUyOCwgNjAwLjU3NjJdLFxyXG4gIFsxMjkzLjQ2NTEsIDU5OS42OTI3XSxcclxuICBbMTI5OC4wNzAzLCA1OTkuMzE5NF0sXHJcbiAgWzEzMDIuNjc4LCA2MDEuMTE5M10sXHJcbiAgWzEzMDEuODk4LCA2MDYuMTY2OF0sXHJcbiAgWzEzMDYuMjMyNywgNjA0LjMwNzg2XSxcclxuICBbMTMwNi4wMzEsIDYwOC40MTQ4XSxcclxuICBbMTI5OC4zNzUsIDYwMy42NDUxNF0sXHJcbiAgWzEyOTQuODU0OSwgNjA1LjI1NjddLFxyXG4gIFsxMjk3LjgwMjQsIDYwOS4wNjQ2XSxcclxuICBbMTMwMi4yNjExLCA2MTAuODYxOV0sXHJcbiAgWzEyOTkuMjAzNSwgNjEzLjY5MTE2XSxcclxuICBbMTMwNi40NTc1LCA2MTIuODA4NV0sXHJcbiAgWzEzMTAuMzU2MywgNjIwLjAzMjZdLFxyXG4gIFsxMzEwLjUxOCwgNjI4LjAwOTE2XSxcclxuICBbMTMyMC4wMTg2LCA2MjMuMzM1MV0sXHJcbiAgWzEzMTYuNzIzOCwgNjIxLjEwMjVdLFxyXG4gIFsxMzEzLjQzMDcsIDYxOS41OTU2NF0sXHJcbiAgWzEzMTMuOTQ4MiwgNjI0Ljc5Njc1XSxcclxuICBbMTMxOC4zMTU0LCA2MjcuOTIwNl0sXHJcbiAgWzEzMTYuODkyNywgNjMzLjY4OTMzXSxcclxuICBbMTMyMC43MTE1LCA2MzYuOTUwOF0sXHJcbiAgWzEzMjEuMDQ2OSwgNjMyLjEwOF0sXHJcbiAgWzEzMjUuNDkxMiwgNjMyLjgxMTVdLFxyXG4gIFsxMzI0LjYxNywgNjM3LjEyMDM2XSxcclxuICBbMTMxNy4wNzAxLCA2MzguNDM3Nl0sXHJcbiAgWzEzMTMuMjM0NywgNjM2LjYzMDg2XSxcclxuICBbMTMxNC40MDQ3LCA2NDEuNTQxMTRdLFxyXG4gIFsxMzE5LjQzMDksIDY0Mi4yOTA2XSxcclxuICBbMTMyMy43ODMzLCA2NDEuNTQ0OV0sXHJcbiAgWzEzMjguMDg0OCwgNjQ0Ljg2NTk3XSxcclxuICBbMTMzMi40NDYzLCA2NDQuNDMzMTddLFxyXG4gIFsxMzM2LjU2NjcsIDY0MS45MTA1XSxcclxuICBbMTMzNy4wMDU2LCA2NDYuNDc3N10sXHJcbiAgWzEzNDAuODk0MywgNjQ0LjE2MjRdLFxyXG4gIFsxMzQ1LjEzMywgNjQ1Ljg3NjgzXSxcclxuICBbMTM0OS40NjIsIDY0Ny42NDM5XSxcclxuICBbMTM0OS41ODc2LCA2NDMuMDUwMDVdLFxyXG4gIFsxMzQ5LjMwMzMsIDYzOC40OTk0XSxcclxuICBbMTM0NC43NzE1LCA2MzYuMzM2XSxcclxuICBbMTM0NS4wMDQsIDY0MS4xNTAzXSxcclxuICBbMTM0MC42NzI0LCA2MzkuNzU4ODVdLFxyXG4gIFsxMzQxLjMzODksIDYzMi4wMjM5XSxcclxuICBbMTM0MC40NzA4LCA2MzUuNTgwM10sXHJcbiAgWzEzMzYuNjU5LCA2MzcuMjUyOV0sXHJcbiAgWzEzMzMuMTg0OSwgNjM1LjAzMTc0XSxcclxuICBbMTMyOS4wMjgxLCA2MzYuMjQyXSxcclxuICBbMTMyOC4xMTA2LCA2NDAuNDI3MzddLFxyXG4gIFsxMzMyLjU0NywgNjM5LjcyNTM0XSxcclxuICBbMTMzNi40NjM2LCA2MzIuMjY4Ml0sXHJcbiAgWzEzMzAuMjE1NiwgNjMyLjA0NDJdLFxyXG4gIFsxMzI3LjQzNzcsIDYyOC42MjYwNF0sXHJcbiAgWzEzMjMuMDQ2MSwgNjI3Ljg3NDVdLFxyXG4gIFsxMzE0Ljc4NjQsIDYyOS43Mzk0NF0sXHJcbiAgWzEzMTIuMDI4NywgNjMyLjUzMDJdLFxyXG4gIFsxMzA5LjQ4MzUsIDYyMy44NzQzXSxcclxuICBbMTMwNy43MDc1LCA2MTcuMDA2OV0sXHJcbiAgWzEzMDYuNDU0MiwgNjIxLjAzMDZdLFxyXG4gIFsxMzAzLjIxNzksIDYxOS4zNzA2XSxcclxuICBbMTI5NC45NjgxLCA2MjIuMDg5MjNdLFxyXG4gIFsxMjkxLjAyNTksIDYyMC4yMzMzXSxcclxuICBbMTI4Ny42NDg3LCA2MTcuMTkzN10sXHJcbiAgWzEyODIuMzIyOSwgNjE0LjkzODk2XSxcclxuICBbMTI4Ni45OTksIDYxMi4zMzM4Nl0sXHJcbiAgWzEyOTEuMjksIDYxNC43ODddLFxyXG4gIFsxMjk1LjE4NDMsIDYxNy41MDg2N10sXHJcbiAgWzEyOTkuNjc3NSwgNjE3LjM1NTk2XSxcclxuICBbMTMwMy40ODgsIDYxNS40MjA5XSxcclxuICBbMTMxMC43MTMxLCA2MTQuNDU2MDVdLFxyXG4gIFsxMzEzLjc1NTQsIDYxMS4yODI3XSxcclxuICBbMTMxOC45NTA0LCA2MTYuNTczMV0sXHJcbiAgWzEzMTQuNjUwNiwgNjE1Ljc5MzQ2XSxcclxuICBbMTMwOS43NTk1LCA2MTAuMDYxMV0sXHJcbiAgWzEzMTEuMjA1MiwgNjA2LjM0NzldLFxyXG4gIFsxMzE4LjA2MDIsIDYwMy45NzU5XSxcclxuICBbMTMxNS42MTc0LCA2MDcuNDYwMl0sXHJcbiAgWzEzMTguMDM2LCA2MTIuMDk5MV0sXHJcbiAgWzEzMTkuOTM3NiwgNjA4LjAzNTldLFxyXG4gIFsxMzIzLjY1ODksIDYwNi42MTMyXSxcclxuICBbMTMyMi41NjkxLCA2MTEuOTE5NTZdLFxyXG4gIFsxMzI1LjU1OTYsIDYxNS4yNDE3XSxcclxuICBbMTMyNy40MTM2LCA2MTAuODYzNDZdLFxyXG4gIFsxMzMxLjQ0NzMsIDYwNy44OTE1XSxcclxuICBbMTMyNy41OTE4LCA2MDYuMDQxNzVdLFxyXG4gIFsxMzI2LjM1MSwgNjAyLjA3MTA0XSxcclxuICBbMTMzMS41NjE1LCA2MDMuODU0OF0sXHJcbiAgWzEzMzEuMDg4OSwgNjAwLjEzMjJdLFxyXG4gIFsxMzM0LjM2NSwgNTkzLjIxMjRdLFxyXG4gIFsxMzMyLjY5NTcsIDU5Ni42OTY4XSxcclxuICBbMTMyOS4wNjk1LCA1OTQuNzE5N10sXHJcbiAgWzEzMjQuNTI5MywgNTk0Ljk0Nl0sXHJcbiAgWzEzMjYuNzM1MiwgNTk4LjI3MzZdLFxyXG4gIFsxMzIxLjkwNzcsIDYwMi4xNjU4XSxcclxuICBbMTMyMS4yMjAxLCA1OTcuODgwNl0sXHJcbiAgWzEzMjAuNzIyMiwgNTkzLjU4MTJdLFxyXG4gIFsxMzE3LjIxNTIsIDU5Mi4yMTk4XSxcclxuICBbMTMxNi4wNjc2LCA1OTYuMDU2NjRdLFxyXG4gIFsxMzE2Ljg1NzMsIDU5OS43NzddLFxyXG4gIFsxMzEzLjYyNDMsIDYwMi41NDA1XSxcclxuICBbMTMwOS4zNjUxLCA2MDEuODg5Ml0sXHJcbiAgWzEzMTEuNDEwOCwgNTk3LjUxNDRdLFxyXG4gIFsxMzA2LjQ0NTMsIDU5Ny45NzIzXSxcclxuICBbMTMwMS45MjQxLCA1OTYuMDY1MjVdLFxyXG4gIFsxMzAzLjc0ODgsIDU5Mi4xMjU4NV0sXHJcbiAgWzEzMDQuNDU3NCwgNTg3Ljc0ODRdLFxyXG4gIFsxMzA5LjUyMjMsIDU4OC4zMDQyNl0sXHJcbiAgWzEzMDguMDk5NCwgNTkzLjEyNDQ1XSxcclxuICBbMTMxMi41NDY5LCA1OTIuNjUzMl0sXHJcbiAgWzEzMTQuNTMzMiwgNTg4LjcwMDg3XSxcclxuICBbMTMxNi43MjkyLCA1ODUuMzI3OF0sXHJcbiAgWzEzMTkuNjQyNiwgNTg4LjYyMDddLFxyXG4gIFsxMzIzLjI0OSwgNTkwLjU1OTk0XSxcclxuICBbMTMyNi44NjMyLCA1OTEuMjkwMTZdLFxyXG4gIFsxMzMwLjg2NzQsIDU5MC45MzA4XSxcclxuICBbMTMzNC4wNzU5LCA1ODguNjM3Nl0sXHJcbiAgWzEzMzcuODExNiwgNTg5LjYwNTM1XSxcclxuICBbMTMzOC42NDk0LCA1OTIuOTMwMV0sXHJcbiAgWzEzNDIuNDAxMSwgNTkzLjc3Ml0sXHJcbiAgWzEzNDMuMTU5NywgNTk3LjkzMjU2XSxcclxuICBbMTM0MC4zODk5LCA2MDEuNzg1NjRdLFxyXG4gIFsxMzM4LjA4NzYsIDU5Ni45MjhdLFxyXG4gIFsxMzM1LjgxMDMsIDYwMC4zODAzXSxcclxuICBbMTMzNi4zMzQxLCA2MDQuNjY5MDddLFxyXG4gIFsxMzM2LjExOCwgNjA4LjQwNDddLFxyXG4gIFsxMzM5LjcwOTEsIDYwOS45ODQzXSxcclxuICBbMTM0NC4xNjcxLCA2MTAuMDAyM10sXHJcbiAgWzEzNDEuODYzMywgNjA1Ljk4NzU1XSxcclxuICBbMTMzMi45OTkzLCA2MTEuMzcxNF0sXHJcbiAgWzEzMzEuMDI5NSwgNjE0LjM2NjQ2XSxcclxuICBbMTMyOS45MTIyLCA2MTcuNzc1Ml0sXHJcbiAgWzEzMzYuMTAxNiwgNjE3LjQyNjFdLFxyXG4gIFsxMzM2LjYxMDcsIDYxMy40ODYyN10sXHJcbiAgWzEzNDEuMjAzOSwgNjE0LjM3ODA1XSxcclxuICBbMTM0MS4xNzMzLCA2MTguNzI1NDZdLFxyXG4gIFsxMzQwLjM2MDYsIDYyMi4wODM3NF0sXHJcbiAgWzEzNDUuMjI3LCA2MzAuMTQyOF0sXHJcbiAgWzEzNDguMjgxMiwgNjMzLjY5MzM2XSxcclxuICBbMTM1Mi4wNzA0LCA2MzAuNTMzNV0sXHJcbiAgWzEzNTYuNjU5MywgNjI4Ljc5MDgzXSxcclxuICBbMTM1OS4yMDEzLCA2MjQuNDc1N10sXHJcbiAgWzEzNjIuMDgxLCA2MjYuOTQ5Nl0sXHJcbiAgWzEzNjYuMTI1NywgNjI1Ljg0ODldLFxyXG4gIFsxMzY4LjYyODIsIDYyMi4zNDA2XSxcclxuICBbMTM2Ni45NjIsIDYxOC4xNjYxNF0sXHJcbiAgWzEzNjMuOTI2LCA2MTUuMTk1N10sXHJcbiAgWzEzNjYuMTU1NCwgNjExLjYwNTA0XSxcclxuICBbMTM2Ni45MDgyLCA2MDcuNjMxOTZdLFxyXG4gIFsxMzY1Ljg2NiwgNjAzLjczMjldLFxyXG4gIFsxMzY5LjQ0MzQsIDYwMC40OTI0M10sXHJcbiAgWzEzNzEuOTEzLCA1OTYuOTQ4OF0sXHJcbiAgWzEzNzUuOTE5NywgNTk3LjMzMDkzXSxcclxuICBbMTM3OS41OTA1LCA1OTkuNzg2NF0sXHJcbiAgWzEzODAuNjU3NiwgNTk1LjMwNzJdLFxyXG4gIFsxMzg0LjU4MDYsIDU5Mi4zMjM0XSxcclxuICBbMTM4My43ODMyLCA1ODguMDY1MV0sXHJcbiAgWzEzODcuOTYzOSwgNTg4LjEzNThdLFxyXG4gIFsxMzg0LjQxMjIsIDU4My42OTU5XSxcclxuICBbMTM4Ny44MzI2LCA1ODAuODM3NjVdLFxyXG4gIFsxMzkxLjEyNSwgNTc1LjgyOTFdLFxyXG4gIFsxMzg3Ljg3MDUsIDU3MC44ODMyXSxcclxuICBbMTM4Mi4wMzkzLCA1NjguNjY5M10sXHJcbiAgWzEzODIuNDc1NywgNTczLjA4OTFdLFxyXG4gIFsxMzg2LjQ3MywgNTc1Ljc4NzFdLFxyXG4gIFsxMzgyLjY2MzIsIDU3OC4yMTMxM10sXHJcbiAgWzEzNzkuOTk4NSwgNTgxLjI0MTMzXSxcclxuICBbMTM3NS44ODI2LCA1NzkuMTEwOF0sXHJcbiAgWzEzNzcuOTY2MSwgNTc1LjIyMTVdLFxyXG4gIFsxMzc3LjQxNDQsIDU3MC41MzU3N10sXHJcbiAgWzEzNzguMTg1MiwgNTY1LjYyNjgzXSxcclxuICBbMTM4MS42NjMsIDU2Mi44NTIzXSxcclxuICBbMTM4NS43MjQyLCA1NjUuOTcxM10sXHJcbiAgWzEzOTAuNTQ5LCA1NjUuNjYxOF0sXHJcbiAgWzEzOTMuMjI4LCA1NzAuMzc0OTRdLFxyXG4gIFsxMzk2Ljk4MTYsIDU3My4yMjI3XSxcclxuICBbMTQwMC42OTI2LCA1NzYuNzQ4OF0sXHJcbiAgWzE0MDIuMzYyNSwgNTgwLjg4NDc3XSxcclxuICBbMTQwNi4yOTEzLCA1NzkuOTQ3NF0sXHJcbiAgWzE0MDUuOTEyNywgNTg0LjQ3NTM0XSxcclxuICBbMTQwOS45OTI2LCA1ODMuODgyNzVdLFxyXG4gIFsxNDAxLjMyNDUsIDU4NS4zMjgyXSxcclxuICBbMTQwMC40MTgsIDU4OS43MzEyNl0sXHJcbiAgWzE0MDQuODYyLCA1ODguOTExXSxcclxuICBbMTQwOC45NDM2LCA1ODguMzk1Nl0sXHJcbiAgWzE0MTIuODQxNiwgNTg3LjU5MDQ1XSxcclxuICBbMTQxMS42MTk0LCA1OTEuODg1OF0sXHJcbiAgWzE0MDcuNjQzOCwgNTkyLjczMjJdLFxyXG4gIFsxNDAzLjY0MTcsIDU5My41NTE0XSxcclxuICBbMTM5OS41NjkxLCA1OTQuODkwNV0sXHJcbiAgWzEzOTYuNDk5NSwgNTkxLjg4MTM1XSxcclxuICBbMTM5Ni4yNTMsIDU4Ni40MTE3NF0sXHJcbiAgWzEzOTcuODA4OCwgNTgxLjc3OTNdLFxyXG4gIFsxMzk1LjQ0NDYsIDU3Ny42ODQ3XSxcclxuICBbMTM5Mi43MzI4LCA1ODEuNDc2M10sXHJcbiAgWzEzOTEuMDA2NiwgNTg1LjM4MV0sXHJcbiAgWzEzOTIuNjU1MywgNTg5Ljk4Mzk1XSxcclxuICBbMTM4OS4yODUsIDU5My4yOTFdLFxyXG4gIFsxMzg1Ljk2NjgsIDU5Ni41MTY2XSxcclxuICBbMTM4NC4zNTcyLCA2MDAuMTM0NF0sXHJcbiAgWzEzODEuNzg2OSwgNjAzLjk2Njg2XSxcclxuICBbMTM3OC44NjM2LCA2MDcuNDA1MTVdLFxyXG4gIFsxMzc1LjU3NjcsIDYwMi43OTY2XSxcclxuICBbMTM3MS4zMTY0LCA2MDQuODg4MzddLFxyXG4gIFsxMzc0LjkyMDcsIDYwOC44NDAzM10sXHJcbiAgWzEzNzQuNTU0OSwgNjE0LjM3MzE3XSxcclxuICBbMTM3MC45NTgxLCA2MDkuOTQ5Nl0sXHJcbiAgWzEzNjkuNzQ1NCwgNjE0LjI4MTA3XSxcclxuICBbMTM3MS42OTUyLCA2MTguMzkzMDddLFxyXG4gIFsxMzc2LjA0MDMsIDYxOS42NjcxXSxcclxuICBbMTM3OS4xODEyLCA2MTcuMDk2NTZdLFxyXG4gIFsxMzgzLjIwMTQsIDYxOS4zMDc1XSxcclxuICBbMTM4MS4xMzU3LCA2MjcuNTcwMjVdLFxyXG4gIFsxMzc3LjkxMDYsIDYzMC43NDZdLFxyXG4gIFsxMzc2LjIwNDEsIDYzNS4zNTk2XSxcclxuICBbMTM3MS4yMDgxLCA2MzQuOTkxNzZdLFxyXG4gIFsxMzY3LjI2MDcsIDYzMy45MzgyM10sXHJcbiAgWzEzNjcuODY1OCwgNjM5LjA1OTYzXSxcclxuICBbMTM2My41MzIsIDY0MS4wODg4N10sXHJcbiAgWzEzNjIuODc0NSwgNjM1Ljc2ODZdLFxyXG4gIFsxMzU4LjU5NiwgNjM4LjUwODNdLFxyXG4gIFsxMzU5LjI2ODYsIDY0My4zODg3M10sXHJcbiAgWzEzNjcuMTAyNSwgNjQ1LjE5OTA0XSxcclxuICBbMTM2My4wMjk4LCA2NDcuMzI1MTNdLFxyXG4gIFsxMzU4LjQxMDYsIDY0OC40MDEyXSxcclxuICBbMTM1My43MDcyLCA2NDkuMjcxODVdLFxyXG4gIFsxMzU0LjM4OTYsIDY0NC44Njk0XSxcclxuICBbMTM1NC4xNDU0LCA2NDAuMzc0NF0sXHJcbiAgWzEzNTMuMTA2LCA2MzUuNjc5Ml0sXHJcbiAgWzEzNTcuMzEzNCwgNjMzLjc2MzJdLFxyXG4gIFsxMzYwLjUzMzQsIDYzMS4xNjk0M10sXHJcbiAgWzEzNjQuNTUyOSwgNjMwLjYyMDddLFxyXG4gIFsxMzY4LjU3MjksIDYyOS42Njg3XSxcclxuICBbMTM3My4xNSwgNjMwLjU4NjM2XSxcclxuICBbMTM3MS4yMzczLCA2MjYuMzgwMV0sXHJcbiAgWzEzNzMuNDI5LCA2MjIuODI2OV0sXHJcbiAgWzEzNzkuNjc4NywgNjIyLjcyMjM1XSxcclxuICBbMTM3Ni4yNjY3LCA2MjYuMzY2OF0sXHJcbiAgWzEzODQuNjA3OSwgNjI0LjMyODc0XSxcclxuICBbMTM4OC4yNjA1LCA2MjcuMTI0Ml0sXHJcbiAgWzEzOTAuNzAxMiwgNjIzLjQxMDRdLFxyXG4gIFsxMzkxLjc2MjMsIDYxOC42NTg3XSxcclxuICBbMTM5NS42NjI1LCA2MTYuMzkzNV0sXHJcbiAgWzEzODcuMzczMiwgNjIwLjQ4ODE2XSxcclxuICBbMTM4Ny40Mzg3LCA2MTUuNzU3NF0sXHJcbiAgWzEzODMuMTk1LCA2MTMuOTYwNl0sXHJcbiAgWzEzNzguODAwMywgNjEyLjI4OTI1XSxcclxuICBbMTM4My41NDg4LCA2MDguNjUxMDZdLFxyXG4gIFsxMzg3LjU2NTcsIDYxMC40MTE0NF0sXHJcbiAgWzEzOTEuNjk3MywgNjEzLjIwOTddLFxyXG4gIFsxMzk1LjIwMDcsIDYxMC4yNTI3NV0sXHJcbiAgWzEzOTEuNDAyMSwgNjA3LjE1OTVdLFxyXG4gIFsxMzkzLjU5OTYsIDYwMi45MTI2XSxcclxuICBbMTM4Ny41MDk1LCA2MDQuMDQ0MDddLFxyXG4gIFsxMzkwLjE3ODYsIDU5OS4zNTc4NV0sXHJcbiAgWzEzOTMuMjU4LCA1OTUuNDYzNl0sXHJcbiAgWzEzOTYuNDAyMiwgNTk4LjM2NzhdLFxyXG4gIFsxMzk4Ljg1NDQsIDYwMS44MjZdLFxyXG4gIFsxMzk3LjkzMjYsIDYwNi4wNTA1NF0sXHJcbiAgWzE0MDMuMjU2MywgNjAzLjA4NzNdLFxyXG4gIFsxNDAyLjM5MywgNTk4LjUzMTI1XSxcclxuICBbMTQwNi40Njk0LCA1OTcuMjExM10sXHJcbiAgWzE0MTAuMzc5OCwgNTk2LjI5NTddLFxyXG4gIFsxNDE0Ljg5NjksIDU5My4yMDkxN10sXHJcbiAgWzE0MTYuMjUwOSwgNTkwLjU4NTldLFxyXG4gIFsxNDE0LjM0NjksIDU5Ni4zODE2NV0sXHJcbiAgWzE0MDcuODY3OSwgNjAxLjAzNjZdLFxyXG4gIFsxNDEyLjY5NzksIDU5OS45OTQzXSxcclxuICBbMTQxMS42MjU5LCA2MDMuODM4Ml0sXHJcbiAgWzE0MDcuMjYxNywgNjA1LjY5MDhdLFxyXG4gIFsxNDEwLjQwNTUsIDYwOC43NjEzNV0sXHJcbiAgWzE0MDYuODYzNCwgNjExLjkxMTI1XSxcclxuICBbMTQwMy4wMjg5LCA2MTIuODQ3M10sXHJcbiAgWzE0MDMuMzIzNiwgNjA3Ljg1MTU2XSxcclxuICBbMTM5OS40NTUxLCA2MTAuNTM5Nl0sXHJcbiAgWzEzOTkuNTk4OCwgNjE1Ljg1NTZdLFxyXG4gIFsxNDAwLjE0NzIsIDYyMS40NDMxXSxcclxuICBbMTM5NS42MDUzLCA2MjIuNDAyMzRdLFxyXG4gIFsxMzk4LjkwMTksIDYyNy42MzE1XSxcclxuICBbMTM5My43MDE0LCA2MjcuNDUzOV0sXHJcbiAgWzEzOTUuMDE3MSwgNjMyLjQyMDg0XSxcclxuICBbMTM5OS43NjI1LCA2MzQuMTE4N10sXHJcbiAgWzE0MDMuNjE3MSwgNjMwLjgwNTRdLFxyXG4gIFsxNDA0LjIxMzcsIDYyNi4wMjI4XSxcclxuICBbMTQwNS41MDQzLCA2MjEuODE4OF0sXHJcbiAgWzE0MDQuNDQ0MSwgNjE3LjE5NDZdLFxyXG4gIFsxNDA5LjQwODksIDYxOC4zMDcyNV0sXHJcbiAgWzE0MTAuOTc4MywgNjEzLjg5MjFdLFxyXG4gIFsxNDE0Ljk1NDMsIDYxMS4xMDY3XSxcclxuICBbMTQxOS40MTk5LCA2MTIuMDY2OV0sXHJcbiAgWzE0MTQuNjk0MSwgNjA2Ljg0NF0sXHJcbiAgWzE0MTYuNjY4MiwgNjAzLjE2MTRdLFxyXG4gIFsxNDE3LjQ4OTEsIDU5OS4xMzY3XSxcclxuICBbMTQxOC4zNDY0LCA1OTUuMDkxMDZdLFxyXG4gIFsxNDIyLjI4MzgsIDU5OC4zMzgxM10sXHJcbiAgWzE0MjAuODg5MiwgNjAyLjM3ODA1XSxcclxuICBbMTQyNS4yNjQ5LCA2MDIuMzk5OF0sXHJcbiAgWzE0MjcuNTQ2NSwgNTk5LjMwMDM1XSxcclxuICBbMTQyNi40OTE1LCA1OTUuOTY5MjRdLFxyXG4gIFsxNDMxLjk0NzQsIDU5OC4xMTc5XSxcclxuICBbMTQzNy40MjY2LCA1OTkuMTQ3Ml0sXHJcbiAgWzE0NDIuNTI2NCwgNjAxLjM3MDZdLFxyXG4gIFsxNDQyLjc0MjMsIDU5Ny40MjY3XSxcclxuICBbMTQ0NS4wMzI3LCA1OTQuMDIyXSxcclxuICBbMTQ0Ny41Mzg3LCA1OTAuMjYxMV0sXHJcbiAgWzE0NTEuOTEsIDU4OC45NzA3Nl0sXHJcbiAgWzE0NTUuNTkxMiwgNTg1LjY2MV0sXHJcbiAgWzE0NTYuNjgwNSwgNTg5LjMzMjE1XSxcclxuICBbMTQ1OS43NjMzLCA1OTEuNTM3N10sXHJcbiAgWzE0NjIuODU1MiwgNTkzLjM2NzJdLFxyXG4gIFsxNDYzLjEwNTEsIDU5Ny43MDE0XSxcclxuICBbMTQ1OS4xNDg5LCA1OTYuOTM4OTZdLFxyXG4gIFsxNDU0LjQ4OSwgNjAyLjI2NjA1XSxcclxuICBbMTQ1NC4xNTMsIDU5OC4xNDE2XSxcclxuICBbMTQ1NS40NDAxLCA1OTMuNjEyMl0sXHJcbiAgWzE0NTAuNjM3MywgNTk0LjQyNjY0XSxcclxuICBbMTQ0OC4xODkyLCA1OTguNjkyNl0sXHJcbiAgWzE0NTAuNTQzNSwgNjAyLjg1MjU0XSxcclxuICBbMTQ0Ni4xOTgsIDYwMy41Mjg2XSxcclxuICBbMTQ0MS44MjQ3LCA2MDUuNzQyOV0sXHJcbiAgWzE0NDEuNzQxNywgNjA5LjkxNjhdLFxyXG4gIFsxNDQ1LjQ4MjksIDYwOC4yMDM4Nl0sXHJcbiAgWzE0NDkuNTc3NSwgNjA3LjIyODddLFxyXG4gIFsxNDQ4LjU2ODEsIDYxMS40MTc0XSxcclxuICBbMTQ0Ny45NDYzLCA2MTUuNjA5OF0sXHJcbiAgWzE0NDQuMTYwNCwgNjE2Ljg5MTA1XSxcclxuICBbMTQ0My4zMTMsIDYyMC42NTI4M10sXHJcbiAgWzE0MzkuNjMsIDYyMS42MTY3XSxcclxuICBbMTQ0MC4zMzk3LCA2MTguMDE4OF0sXHJcbiAgWzE0NDEuMDI2NiwgNjE0LjM0MDc2XSxcclxuICBbMTQ0NC43Mjc1LCA2MTIuNzc1M10sXHJcbiAgWzE0NTEuOTM3LCA2MTQuNTU2Ml0sXHJcbiAgWzE0NDcuNDM2OSwgNjE5LjUwNl0sXHJcbiAgWzE0NDUuNzIzNCwgNjIzLjM1MDJdLFxyXG4gIFsxNDQ3Ljk5MDgsIDYyNi4yNDA4NF0sXHJcbiAgWzE0NTAuMjY3LCA2MjIuMzc2Ml0sXHJcbiAgWzE0NTEuODI3LCA2MTguNjU4MV0sXHJcbiAgWzE0NTYuMTA1NywgNjE2LjcwODU2XSxcclxuICBbMTQ2MC41MjcxLCA2MTQuNDQzN10sXHJcbiAgWzE0NjAuMzA3NiwgNjE5LjA0N10sXHJcbiAgWzE0NjQuODY1NywgNjE5LjUxNDY1XSxcclxuICBbMTQ2My41MTY3LCA2MjMuMTM2OV0sXHJcbiAgWzE0NjIuMTUxMSwgNjI3LjA4Nzc3XSxcclxuICBbMTQ2NC40MTM2LCA2MzAuOTE4OV0sXHJcbiAgWzE0NjguNjA1OCwgNjMwLjc3N10sXHJcbiAgWzE0NjcuNzA3OSwgNjM1LjM3NzVdLFxyXG4gIFsxNDY4Ljk3NCwgNjQwLjMyMTRdLFxyXG4gIFsxNDcyLjE0MTEsIDYzNy4xODQyXSxcclxuICBbMTQ3Ni4xNDIsIDYzOS4wMDkzXSxcclxuICBbMTQ3NC4zODMsIDY0Mi44MzA0XSxcclxuICBbMTQ3OC40MDY2LCA2NDUuMzk3MDNdLFxyXG4gIFsxNDc4Ljc0NzYsIDY1MC44MzY0XSxcclxuICBbMTQ4Mi43ODE2LCA2NTIuNDc4NF0sXHJcbiAgWzE0ODEuNTMzOSwgNjU3LjQzODM1XSxcclxuICBbMTQ3NS41MjQzLCA2NTQuMDY2NjVdLFxyXG4gIFsxNDczLjg0NDIsIDY0OC40NzkyNV0sXHJcbiAgWzE0NzAuMzQ2LCA2NDUuMjIxMV0sXHJcbiAgWzE0NjcuNDc3MywgNjQ5LjQ5MjRdLFxyXG4gIFsxNDcwLjgyMzUsIDY1My4yNTRdLFxyXG4gIFsxNDU4Ljc1MTcsIDY1NS4yOTg3XSxcclxuICBbMTQ2MS4yNzIzLCA2NTAuMTkwNV0sXHJcbiAgWzE0NjIuNjI1LCA2NDYuNjkyNTddLFxyXG4gIFsxNDY1Ljg1MjIsIDY0My45ODUyXSxcclxuICBbMTQ2MC41MTc2LCA2NDIuODMxM10sXHJcbiAgWzE0NjMuNjYwOSwgNjM5LjI0NDE0XSxcclxuICBbMTQ2Mi44MjAxLCA2MzQuODU3N10sXHJcbiAgWzE0NTguNDM4NSwgNjM1LjIwNTU3XSxcclxuICBbMTQ1OS41NDU3LCA2MzAuNjAzMV0sXHJcbiAgWzE0NTkuMTE5OCwgNjIzLjczNDVdLFxyXG4gIFsxNDU2LjI3MzYsIDYyNy4yMjk5XSxcclxuICBbMTQ1Mi41NzM2LCA2MjUuMzk2Ml0sXHJcbiAgWzE0NTUuNDY5LCA2MjEuNDU4NV0sXHJcbiAgWzE0NTEuNDE3NCwgNjI5LjU1Njc2XSxcclxuICBbMTQ1NS4wMTg2LCA2MzIuMDg3NjVdLFxyXG4gIFsxNDUwLjM2MjMsIDYzMy44OTk2Nl0sXHJcbiAgWzE0NDcuMzYxOCwgNjM3Ljc1NDVdLFxyXG4gIFsxNDQzLjAzMzksIDY0MC42OTA2XSxcclxuICBbMTQ0Mi42MDA4LCA2MzYuNDg3MzddLFxyXG4gIFsxNDM4LjgyNjcsIDYzNS4yNjg3XSxcclxuICBbMTQzNi4xODI1LCA2MzIuNjc1MzVdLFxyXG4gIFsxNDQyLjQxNTUsIDYzMi4wMjA0XSxcclxuICBbMTQ0Ni4yMTUxLCA2MzMuNjE4M10sXHJcbiAgWzE0NDYuOTM1MywgNjI5Ljg5NTJdLFxyXG4gIFsxNDQzLjQyMSwgNjI3Ljc2NjFdLFxyXG4gIFsxNDQxLjcwNDcsIDYyNC43NDM0N10sXHJcbiAgWzE0MzcuNzMzNSwgNjI0Ljk4NzM3XSxcclxuICBbMTQzOS4zMzkxLCA2MjkuNDM1MzZdLFxyXG4gIFsxNDM1LjY1NSwgNjI3Ljk1MTk3XSxcclxuICBbMTQzMi4wNzIzLCA2MjcuNTc4NTVdLFxyXG4gIFsxNDMyLjg3LCA2MzEuNTYwOV0sXHJcbiAgWzE0MjkuMDU3NywgNjMyLjAxNjddLFxyXG4gIFsxNDI0LjU3MjMsIDYyOS45NTkyXSxcclxuICBbMTQyOC4zMjg3LCA2MjguMzIxMV0sXHJcbiAgWzE0MjkuNjY5NCwgNjI0LjQ1Nzc2XSxcclxuICBbMTQyNy45ODM1LCA2MjEuMzZdLFxyXG4gIFsxNDI3LjgwMTYsIDYxNy40NDZdLFxyXG4gIFsxNDI0LjUzMzIsIDYxNC4yOTI4XSxcclxuICBbMTQyMy45NDA5LCA2MTAuMTI3MjZdLFxyXG4gIFsxNDMyLjA3NSwgNjE5LjA4OTddLFxyXG4gIFsxNDI5LjgyNDcsIDYxNC4yOTIxXSxcclxuICBbMTQzMy40MzM3LCA2MTUuMjQ1XSxcclxuICBbMTQzMy4zOTkyLCA2MjMuNDQ1M10sXHJcbiAgWzE0MzYuMDQ0NiwgNjIwLjkwMTVdLFxyXG4gIFsxNDM2LjY5OTgsIDYxNy41MTI4XSxcclxuICBbMTQzNy4wMTAzLCA2MTQuMTExOF0sXHJcbiAgWzE0MzMuNzUxNSwgNjEwLjk4ODFdLFxyXG4gIFsxNDMyLjYyOCwgNjA2LjgxNTU1XSxcclxuICBbMTQzNy4xODI5LCA2MDcuMzc4NV0sXHJcbiAgWzE0MzguMzY2MSwgNjExLjEwODAzXSxcclxuICBbMTQzOC4yNjg5LCA2MDMuMjk1NTNdLFxyXG4gIFsxNDM0LjE4NDgsIDYwMi40MTM4XSxcclxuICBbMTQzMC4wMjY5LCA2MDIuNzQ4NTRdLFxyXG4gIFsxNDI3LjgyNjcsIDYwNi42ODMxN10sXHJcbiAgWzE0MjguNzkzMiwgNjEwLjY1MDQ1XSxcclxuICBbMTQyMy40NjI4LCA2MDYuMDU5Ml0sXHJcbiAgWzE0MTkuMzEzMiwgNjA3LjM1M10sXHJcbiAgWzE0MjAuMDQyNCwgNjE2LjQxMDJdLFxyXG4gIFsxNDE1LjE1OTQsIDYxNi4xMjcxXSxcclxuICBbMTQxNC4xMDYxLCA2MjAuNTgxMDVdLFxyXG4gIFsxNDEwLjYxODQsIDYyMy43ODU1XSxcclxuICBbMTQwOS4yOTExLCA2MjguMDExOTZdLFxyXG4gIFsxNDE0Ljg1NzIsIDYyOS45NDQ2NF0sXHJcbiAgWzE0MjAuMjM4NSwgNjI3LjY3ODZdLFxyXG4gIFsxNDE2LjE0MywgNjI1LjE0MjE1XSxcclxuICBbMTQxOC44NjIzLCA2MjAuNzc2NTVdLFxyXG4gIFsxNDIzLjg3ODcsIDYxOS4zNzEyXSxcclxuICBbMTQyMi4yNDg1LCA2MjMuNDk5MTVdLFxyXG4gIFsxNDI1LjQ0LCA2MjUuNDYwNzVdLFxyXG4gIFsxNDIwLjkxMzgsIDYzMi4wMjE2XSxcclxuICBbMTQxNy43MTA3LCA2MzQuNjI1XSxcclxuICBbMTQxNi4xNzExLCA2MzkuMTQwNl0sXHJcbiAgWzE0MjAuMjI4MywgNjQxLjQzMjFdLFxyXG4gIFsxNDIyLjI2NDYsIDYzNi44OTgxXSxcclxuICBbMTQyNS44OTM4LCA2MzQuNDY4NV0sXHJcbiAgWzE0MjcuOTc4MywgNjM4LjY2NTE2XSxcclxuICBbMTQzMS4zMjE4LCA2MzUuODEzMV0sXHJcbiAgWzE0MzQuOTg1MSwgNjM3Ljc2MjJdLFxyXG4gIFsxNDMyLjQ4MTQsIDY0MS41NTExXSxcclxuICBbMTQzMS43ODM3LCA2NDYuNTUzMV0sXHJcbiAgWzE0MzMuMzM3OSwgNjUwLjkxMTVdLFxyXG4gIFsxNDI4LjYwMDcsIDY1MS4wMzQzXSxcclxuICBbMTQyNC4wNTExLCA2NTIuMjgzOTRdLFxyXG4gIFsxNDE5LjI3MSwgNjUzLjQ0NzE0XSxcclxuICBbMTQxNi42NDI2LCA2NDkuMjM5ODddLFxyXG4gIFsxNDIxLjIwMDMsIDY0Ni44Mjk5XSxcclxuICBbMTQyNS43NTYsIDY0Ny4yMDk1XSxcclxuICBbMTQyOC4wOTQ3LCA2NDMuNTAyMl0sXHJcbiAgWzE0MjQuMjQ2OCwgNjQxLjUxNDQ3XSxcclxuICBbMTQxNi4zNDY3LCA2NDMuOTc1NF0sXHJcbiAgWzE0MTIuMzU2NywgNjQ1LjYzNzhdLFxyXG4gIFsxNDEwLjQ0MDIsIDYzOS45NzYxNF0sXHJcbiAgWzE0MTIuNjM3MiwgNjM1LjMyMTldLFxyXG4gIFsxNDA5LjE2ODEsIDYzMi40NTgyNV0sXHJcbiAgWzE0MDUuNTc4NiwgNjM1LjgyMjddLFxyXG4gIFsxNDA0Ljk0NTgsIDY0MC4zNjU2XSxcclxuICBbMTQwMC4zNjY4LCA2MzkuNjM0NzddLFxyXG4gIFsxMzk1LjY2NzEsIDYzOC4wOTM1XSxcclxuICBbMTM5MC45NDAyLCA2MzYuNzk1NV0sXHJcbiAgWzEzODYuMTcxLCA2MzUuMzcwMV0sXHJcbiAgWzEzODkuODc3MiwgNjMxLjUxNTc1XSxcclxuICBbMTM4NC42NzA3LCA2MzAuNDQ0N10sXHJcbiAgWzEzODEuMDY2OSwgNjM0LjE1NF0sXHJcbiAgWzEzODIuMzk5NywgNjM4LjkzMjFdLFxyXG4gIFsxMzc3LjY0NDUsIDY0MC44NDAyXSxcclxuICBbMTM3My4wNzUsIDYzOS4zMjc5XSxcclxuICBbMTM3MS40OTc3LCA2NDMuNTg3NjVdLFxyXG4gIFsxMzcxLjQ3NDksIDY0OS4yNTQyXSxcclxuICBbMTM2Ni41MzQ3LCA2NTEuNDE2NzVdLFxyXG4gIFsxMzcwLjQzNDcsIDY1NS4xMTddLFxyXG4gIFsxMzc0LjcxMDEsIDY1OC40MzE1XSxcclxuICBbMTM3Mi43NzQ3LCA2NjQuMTEwMzVdLFxyXG4gIFsxMzc4LjM1MDUsIDY2My43Njk5Nl0sXHJcbiAgWzEzNzkuODg5OSwgNjcwLjAwOTZdLFxyXG4gIFsxMzc0Ljk3OTEsIDY2OS44NzI5XSxcclxuICBbMTM2OS44NTc5LCA2NjkuNTgwMl0sXHJcbiAgWzEzNjYuNDI0MywgNjY1LjYzNDFdLFxyXG4gIFsxMzY4LjQ2ODgsIDY2MC40NzM2M10sXHJcbiAgWzEzNzYuMTgwNCwgNjUyLjU4NzE2XSxcclxuICBbMTM3Ni4xMzQzLCA2NDYuMTg3MjZdLFxyXG4gIFsxMzgxLjg3NywgNjQ0LjUzNDNdLFxyXG4gIFsxMzgwLjcwMDYsIDY0OS41MTk1M10sXHJcbiAgWzEzODIuMTI5MywgNjUzLjkxMTg3XSxcclxuICBbMTM4MC4wMzIzLCA2NTguMjUzMzZdLFxyXG4gIFsxMzg0LjQ1MDgsIDY2MC45MTFdLFxyXG4gIFsxMzgzLjQ3NDksIDY2NS44NDhdLFxyXG4gIFsxMzg4LjM5ODQsIDY2Ni40NTcxNV0sXHJcbiAgWzEzODkuNTg5OCwgNjYxLjY4MV0sXHJcbiAgWzEzOTEuNzI0NywgNjU3Ljc5MTRdLFxyXG4gIFsxMzg2LjY4OTMsIDY1NS44NDkwNl0sXHJcbiAgWzEzOTIuMTU0NywgNjUyLjIzNDI1XSxcclxuICBbMTM5NS4zNTg4LCA2NjEuMTk0OV0sXHJcbiAgWzEzOTMuMzQ4NiwgNjY1Ljk1MTldLFxyXG4gIFsxMzk3LjQ5ODcsIDY2Ny4wNTUyNF0sXHJcbiAgWzEzOTkuNTcxNywgNjYzLjk0OTZdLFxyXG4gIFsxNDAxLjY4NjksIDY2OS4wOTldLFxyXG4gIFsxNDA1LjQ0NDgsIDY2NS40MTYyNl0sXHJcbiAgWzE0MDMuMTIxOCwgNjYyLjcxOTNdLFxyXG4gIFsxNDAwLjI2MDcsIDY1OS40NjIwNF0sXHJcbiAgWzEzOTYuODI0NSwgNjU1Ljk0NDZdLFxyXG4gIFsxNDAzLjY3OCwgNjU2LjEyNzE0XSxcclxuICBbMTQwNi40NzgxLCA2NjAuMjgwNjRdLFxyXG4gIFsxNDA5LjYxMzQsIDY2NC4wMjY1NV0sXHJcbiAgWzE0MTEuODY0OSwgNjYwLjE4ODFdLFxyXG4gIFsxNDA5LjMwMjQsIDY1Ni4zMTc3NV0sXHJcbiAgWzE0MDYuNjQ1OCwgNjUyLjgwMjM3XSxcclxuICBbMTQwMC44ODEyLCA2NTIuNDQ0Ml0sXHJcbiAgWzEzOTYuOTY4OSwgNjQ5Ljc4NjU2XSxcclxuICBbMTM5Mi4yMDQxLCA2NDcuMzUyOTddLFxyXG4gIFsxMzg2LjY0OTIsIDY0OC40NjYwNl0sXHJcbiAgWzEzODcuMTU2NywgNjQxLjUwMjldLFxyXG4gIFsxMzkxLjkxMzgsIDY0Mi4yNzM2XSxcclxuICBbMTM5Ni42MjcsIDY0NC4wMTMyXSxcclxuICBbMTQwMS4wNTgxLCA2NDUuNjUxMDZdLFxyXG4gIFsxNDA0LjIwODUsIDY0OC45NDA0XSxcclxuICBbMTQwNi43Nzk0LCA2NDQuMTgxMV0sXHJcbiAgWzE0MDguNzQ1LCA2NDguNjY2OF0sXHJcbiAgWzE0MTEuNjQ3NywgNjUxLjYwMDddLFxyXG4gIFsxNDE0LjE0NTUsIDY1NS40OTAwNV0sXHJcbiAgWzE0MTcuMjM2MiwgNjU5LjkwNDM2XSxcclxuICBbMTQyMi4xNjQ4LCA2NjMuMDQwN10sXHJcbiAgWzE0MjMuMTkyNiwgNjU3LjQ2NzE2XSxcclxuICBbMTQyOS43MTE4LCA2NTUuOTYyMDRdLFxyXG4gIFsxNDMyLjY1NjUsIDY2MS4zMjE3XSxcclxuICBbMTQyNy40MjAyLCA2NjAuNDg2OTRdLFxyXG4gIFsxNDI3Ljk2ODUsIDY2NS41NDI3XSxcclxuICBbMTQyNi44Mzk2LCA2NjkuOTI4OTZdLFxyXG4gIFsxNDIyLjcyOTIsIDY2Ny43NjA1Nl0sXHJcbiAgWzE0MTguMjYzNywgNjY1Ljk5NjddLFxyXG4gIFsxNDE0LjQ5OTksIDY2NC4wOTI3XSxcclxuICBbMTQxMi4xMTY1LCA2NjcuNjU5MV0sXHJcbiAgWzE0MTUuMTkwMiwgNjcwLjEyNzFdLFxyXG4gIFsxNDE4LjkzNCwgNjcxLjE0MzVdLFxyXG4gIFsxNDIyLjUxODksIDY3Mi42NDYzXSxcclxuICBbMTQyNS43Mjk3LCA2NzQuNDAzXSxcclxuICBbMTQyOC43NywgNjc2LjA2MjhdLFxyXG4gIFsxNDMyLjY3NjMsIDY3NS44MDM3XSxcclxuICBbMTQzMC44NjUxLCA2NzEuNjkwM10sXHJcbiAgWzE0MzMuMzg3NSwgNjY3LjI4NzIzXSxcclxuICBbMTQzNy43NTM5LCA2NjQuMDcwOF0sXHJcbiAgWzE0MzcuNjQxNiwgNjU5LjMzMDFdLFxyXG4gIFsxNDM1LjMxNjIsIDY1NS4wOTYyXSxcclxuICBbMTQ0MC43ODc1LCA2NTUuMzE1N10sXHJcbiAgWzE0NDIuODkzMSwgNjUwLjc2MzRdLFxyXG4gIFsxNDM4LjEyMzUsIDY0OS44Nzg4XSxcclxuICBbMTQzNi41OTEzLCA2NDQuOTU3M10sXHJcbiAgWzE0MzguNTI0NCwgNjQwLjUyNTE1XSxcclxuICBbMTQ0MS45MzkyLCA2NDUuNDUzMjVdLFxyXG4gIFsxNDQ3LjA2MDUsIDY0Mi4zNjQ3NV0sXHJcbiAgWzE0NTEuNDIyMSwgNjQwLjM1NF0sXHJcbiAgWzE0NTMuNTAzLCA2MzYuNzA5XSxcclxuICBbMTQ1Ny42OTM3LCA2MzkuMjAzODZdLFxyXG4gIFsxNDU1LjQzMTIsIDY0Mi44NzAzNl0sXHJcbiAgWzE0NTYuODYyMywgNjQ2LjkwMzc1XSxcclxuICBbMTQ1Ny4wODM0LCA2NTEuMDU1NjZdLFxyXG4gIFsxNDUyLjE2MDIsIDY0OS43NDA2Nl0sXHJcbiAgWzE0NTEuNDI4LCA2NDUuMTkxMDRdLFxyXG4gIFsxNDQ2LjgyNjQsIDY0Ni44NzI4XSxcclxuICBbMTQ0Ny40OTI4LCA2NTEuMzAxOV0sXHJcbiAgWzE0NDkuOTk0OSwgNjU0Ljk0MzVdLFxyXG4gIFsxNDU0LjI1MDIsIDY1NC40NjA3XSxcclxuICBbMTQ1Mi4yMDY1LCA2NTguODQ4MjddLFxyXG4gIFsxNDU2Ljk3NjEsIDY1OS45MDAxNV0sXHJcbiAgWzE0NTcuOTI3MiwgNjY0Ljg3NjRdLFxyXG4gIFsxNDYxLjYxMzMsIDY2Mi4zNDQ4NV0sXHJcbiAgWzE0NjIuMzU0NSwgNjU3LjgwODg0XSxcclxuICBbMTQ2My45OTA3LCA2NTMuMTgwNV0sXHJcbiAgWzE0NjcuMjcwNCwgNjU2LjQ1NjU0XSxcclxuICBbMTQ3MS42NTU1LCA2NTkuMTk3MjddLFxyXG4gIFsxNDc2LjYwMjgsIDY1OS4xMjI0NF0sXHJcbiAgWzE0ODAuMzcyOCwgNjYzLjA2MzIzXSxcclxuICBbMTQ4NS42MTY3LCA2NjMuODIzMzZdLFxyXG4gIFsxNDg3LjE4MzgsIDY1OS4xNTk3XSxcclxuICBbMTQ4Ni42NjM4LCA2NTQuNzE4MjZdLFxyXG4gIFsxNDkwLjAzMjIsIDY1MS44NTE0NF0sXHJcbiAgWzE0OTQuMjE0NSwgNjUwLjU1MDldLFxyXG4gIFsxNDk3Ljc1MSwgNjUyLjc4MTRdLFxyXG4gIFsxNTAyLjA0OTcsIDY1MS42MjkyXSxcclxuICBbMTUwNS4xNDE0LCA2NTUuNDg5MTRdLFxyXG4gIFsxNTA4LjcwMzEsIDY1OS40MzkyXSxcclxuICBbMTUxMi4xODA4LCA2NjMuNjg0NDVdLFxyXG4gIFsxNTEwLjg4ODQsIDY2OC45OTQ3XSxcclxuICBbMTUxMS42MDA1LCA2NzQuMTQ5NTRdLFxyXG4gIFsxNTE2LjE5MTQsIDY3MS42MzAxXSxcclxuICBbMTUxNi42OTA3LCA2NjYuNjcyMV0sXHJcbiAgWzE1MTcuNzExNCwgNjYxLjM5NzQ2XSxcclxuICBbMTUxOS40Mzc3LCA2NTUuNDQxMzVdLFxyXG4gIFsxNTE2Ljk0OTgsIDY1MC45OTU2XSxcclxuICBbMTUxNy45NzI5LCA2NDUuMjIyMTddLFxyXG4gIFsxNTIxLjU2MzIsIDY0OC45NjQ5N10sXHJcbiAgWzE1MjIuNzc4NCwgNjQzLjczNDVdLFxyXG4gIFsxNTMxLjM0MjMsIDYzOS4zNTAzXSxcclxuICBbMTUzNC4yNjcyLCA2MzUuOTc2NzVdLFxyXG4gIFsxNTI4LjcyLCA2MzYuNDY4NV0sXHJcbiAgWzE1MjUuODk0MywgNjMzLjUxNDZdLFxyXG4gIFsxNTIwLjkwMTIsIDYzMC4zNDAyXSxcclxuICBbMTUyMC45OCwgNjM0LjIxMThdLFxyXG4gIFsxNTE3LjQzNDEsIDYzNS45Mzk0XSxcclxuICBbMTUxNC4xNjEzLCA2MzcuNTUwOTZdLFxyXG4gIFsxNTEwLjU4MTIsIDYzNy4wOTU2NF0sXHJcbiAgWzE1MDcuMDM1MiwgNjM4Ljc1MjNdLFxyXG4gIFsxNTA1LjIzNjUsIDY0Mi4wNTNdLFxyXG4gIFsxNTAyLjYyNjMsIDY0NS4yOTg4XSxcclxuICBbMTQ5OS4wNTYyLCA2NDcuNDU4Nl0sXHJcbiAgWzE0OTUuMDU1MywgNjQ2LjAzNjZdLFxyXG4gIFsxNDkwLjYwODQsIDY0Ni44MzU2M10sXHJcbiAgWzE0ODYuNjkzNCwgNjQ4Ljg3MTE1XSxcclxuICBbMTQ4Mi43OTI1LCA2NDcuNDU1NF0sXHJcbiAgWzE0ODIuOTE4NiwgNjQzLjIyMjM1XSxcclxuICBbMTQ4MC4zODc3LCA2MzkuOTUxOF0sXHJcbiAgWzE0NzkuNjQ2LCA2MzUuODg4ODVdLFxyXG4gIFsxNDc1LjgyMTMsIDYzMy45Mjg1XSxcclxuICBbMTQ3Mi4zMjEzLCA2MzIuMTExNF0sXHJcbiAgWzE0NjcuMDE4NywgNjI2Ljg1OTQ0XSxcclxuICBbMTQ2Ny45OTkzLCA2MjIuOTc3OV0sXHJcbiAgWzE0NjguODI2NSwgNjE5LjAyNTVdLFxyXG4gIFsxNDY0LjkxNDQsIDYxNS40ODddLFxyXG4gIFsxNDYzLjU2LCA2MTEuMDQwODNdLFxyXG4gIFsxNDY3LjgyODEsIDYxMS4xNzczXSxcclxuICBbMTQ2OC45MzQ3LCA2MTQuNzQ5OV0sXHJcbiAgWzE0NzIuMzM3NCwgNjEzLjIxMzFdLFxyXG4gIFsxNDcyLjI0OTksIDYxNy4xOTNdLFxyXG4gIFsxNDcyLjczNjcsIDYyMC45MjI4XSxcclxuICBbMTQ3MS41MDc2LCA2MjQuMjgyOTZdLFxyXG4gIFsxNDcyLjA1NjQsIDYyNy43NDg4XSxcclxuICBbMTQ3NS43MTE3LCA2MjQuMzU2Ml0sXHJcbiAgWzE0NzYuMzc4MiwgNjI5LjA2Nzc1XSxcclxuICBbMTQ4MC4xMzI4LCA2MzEuNjc4N10sXHJcbiAgWzE0ODMuODk5NCwgNjM0LjI2NzFdLFxyXG4gIFsxNDg1LjExMDQsIDYzOS4wNzg1XSxcclxuICBbMTQ4Ny41MzYxLCA2NDMuNDYzNTZdLFxyXG4gIFsxNDkyLjY1MjIsIDY0Mi41MjQyXSxcclxuICBbMTQ5MC4xNjA4LCA2MzkuMjU5M10sXHJcbiAgWzE0ODguMzUyNSwgNjM2LjAyMDQ1XSxcclxuICBbMTQ4OC4zNzQxLCA2MzIuMjc3M10sXHJcbiAgWzE0ODUuNzM1NCwgNjI5LjMyNTQ0XSxcclxuICBbMTQ4Mi4xNDk0LCA2MjguNDQyNzVdLFxyXG4gIFsxNDc5LjQxMzMsIDYyNi4wMTkyXSxcclxuICBbMTQ3OS41MywgNjIyLjA4ODEzXSxcclxuICBbMTQ3Ni4zNTY5LCA2MTkuNzUxN10sXHJcbiAgWzE0NzUuOTg2OSwgNjE1Ljg5NTZdLFxyXG4gIFsxNDc5Ljg4NDgsIDYxNy40NDQ5NV0sXHJcbiAgWzE0NzkuODkyMywgNjEzLjIwNjRdLFxyXG4gIFsxNDg0LjMxMDQsIDYxMy4wMzMxNF0sXHJcbiAgWzE0ODIuMzc5OSwgNjA3Ljk1MDldLFxyXG4gIFsxNDc5LjYxNywgNjAzLjk1MDg3XSxcclxuICBbMTQ4NS41ODQ3LCA2MDQuMTUyMl0sXHJcbiAgWzE0ODcuNjk0OCwgNjA3LjkyMjI0XSxcclxuICBbMTQ5Mi4xOTI3LCA2MDguMDAyNl0sXHJcbiAgWzE0OTUuMTEzMywgNjA0LjY4NjE2XSxcclxuICBbMTQ5OS4wNDQsIDYwNi4xMDQ2XSxcclxuICBbMTQ5Ni44NDc5LCA2MTAuMTYzN10sXHJcbiAgWzE0OTMuNDY1MywgNjEyLjMwMTVdLFxyXG4gIFsxNDg5LjE0ODIsIDYxMi4yNjU3NV0sXHJcbiAgWzE0OTYuMzM0MiwgNjE2LjEwNTFdLFxyXG4gIFsxNTAwLjYyMDQsIDYxMy43Njc2NF0sXHJcbiAgWzE1MDEuMTIzNywgNjE3LjcxNjldLFxyXG4gIFsxNTA1LjM3MzUsIDYyMy4xNTUxXSxcclxuICBbMTUwMS40NjMzLCA2MjIuMDEwNl0sXHJcbiAgWzE0OTguNzM2NywgNjI1LjAwMDVdLFxyXG4gIFsxNDk1LjE1OTcsIDYyMy42NzI3XSxcclxuICBbMTQ5MS4yNjc2LCA2MjQuMjUyNzVdLFxyXG4gIFsxNDg3LjgzOTEsIDYyMC43MjMxNF0sXHJcbiAgWzE0OTIuNzM3MywgNjIwLjI1MzFdLFxyXG4gIFsxNDk3LjUxOTMsIDYyMC4yMTUxXSxcclxuICBbMTQ5MS40MjAyLCA2MTYuNjcwMl0sXHJcbiAgWzE0ODcuNTk0MiwgNjE2LjIxNzY1XSxcclxuICBbMTQ4NC4xNTA0LCA2MTcuMzI5NF0sXHJcbiAgWzE0ODMuMDY2NywgNjIwLjY0NzNdLFxyXG4gIFsxNDgzLjgyMTgsIDYyNC4zNDI2NV0sXHJcbiAgWzE0ODcuNjExOSwgNjI1LjMxNzQ0XSxcclxuICBbMTQ5Mi43MDY1LCA2MzMuNjMwNzRdLFxyXG4gIFsxNDkwLjcyNjcsIDYyOC44OTIyXSxcclxuICBbMTQ5NC43NTc5LCA2MjcuOTM2N10sXHJcbiAgWzE0OTYuNTM3MiwgNjMxLjc5MzFdLFxyXG4gIFsxNDk5LjU3MjYsIDYyOS4wNTMyXSxcclxuICBbMTUwMi45NjE5LCA2MjYuNDg2MTVdLFxyXG4gIFsxNTAzLjkwMjMsIDYzMC45NDI3NV0sXHJcbiAgWzE1MDAuNzcxNSwgNjMzLjY5MzVdLFxyXG4gIFsxNDk3LjcxMTgsIDYzNi4yMDcxNV0sXHJcbiAgWzE0OTQuMzAzNiwgNjM4LjExNTNdLFxyXG4gIFsxNDk3LjcxMDQsIDY0Mi4wMTIxXSxcclxuICBbMTUwMS4yMzkxLCA2MzkuNDU3OV0sXHJcbiAgWzE1MDMuOTEzLCA2MzYuMTYzMjddLFxyXG4gIFsxNTA3LjQ4OTksIDYzNC4zMTg2XSxcclxuICBbMTUxMC4zMzY0LCA2NDEuNTU2NDZdLFxyXG4gIFsxNTA3Ljk4MDcsIDY0NS44ODc0NV0sXHJcbiAgWzE1MDYuNjcxOSwgNjUwLjAzMDRdLFxyXG4gIFsxNTExLjA2MDcsIDY1My4zMTE1XSxcclxuICBbMTUxMi43MTQ1LCA2NDguOTE2Nl0sXHJcbiAgWzE1MTIuODQwNywgNjQ0Ljk1OTUzXSxcclxuICBbMTUxNS41MjU2LCA2NDEuMjk0MDddLFxyXG4gIFsxNTE5Ljg1NDUsIDYzOS43NTY0XSxcclxuICBbMTUyMy42NzEzLCA2MzcuMzMzMV0sXHJcbiAgWzE1MjUuOTkxNSwgNjQwLjU1MDU0XSxcclxuICBbMTUyOC43OTQsIDY0My42NjIyM10sXHJcbiAgWzE1MjYuMzExNiwgNjQ3LjY3MTYzXSxcclxuICBbMTUyNC4yMTM3LCA2NTMuMjkzMzNdLFxyXG4gIFsxNTIzLjQxNjYsIDY1OS4yMTU2XSxcclxuICBbMTUyMi42NjE5LCA2NjQuMjc4M10sXHJcbiAgWzE1MjEuNDk5MywgNjY5LjE1MjgzXSxcclxuICBbMTUyMS4yMDc2LCA2NzMuODM5Nl0sXHJcbiAgWzE1MjMuMjk5OSwgNjc3LjkwMTczXSxcclxuICBbMTUyNC41OTE4LCA2ODIuMzgzNF0sXHJcbiAgWzE1MjguMDQwMywgNjg1LjMyMjI3XSxcclxuICBbMTUzMi42OTY1LCA2ODUuNzcwMTRdLFxyXG4gIFsxNTMzLjEzNDksIDY5MS4wNDQxXSxcclxuICBbMTUyOC42MTYzLCA2OTAuODQ5Nl0sXHJcbiAgWzE1MzcuOTQyOSwgNjkxLjE4OTldLFxyXG4gIFsxNTI0LjE4ODIsIDY5NC44ODEyXSxcclxuICBbMTUyMy43NTczLCA2OTAuMDM5OV0sXHJcbiAgWzE1MjEuNjc5NiwgNjg2LjU4NzRdLFxyXG4gIFsxNTE2LjYzOTQsIDY4OC4xNTMzXSxcclxuICBbMTUwNi41NzU2LCA2OTAuNTk1OTVdLFxyXG4gIFsxNTAxLjQ4MDEsIDY4Ny41OTI0XSxcclxuICBbMTQ5My4wOTkxLCA2ODMuMzA3NzRdLFxyXG4gIFsxNDk4LjU0MjEsIDY4Mi43NDUyNF0sXHJcbiAgWzE1MDMuNzQ0NiwgNjgwLjEwNTldLFxyXG4gIFsxNTA2LjM1OTQsIDY4NC4xNjExM10sXHJcbiAgWzE1MTEuMjY1MSwgNjg1LjgwNjhdLFxyXG4gIFsxNTE1LjQzLCA2ODIuNzE0MzZdLFxyXG4gIFsxNTE5LjY5MTQsIDY4Mi4wNjkxXSxcclxuICBbMTUxNy4yNjAzLCA2NzYuOTMwN10sXHJcbiAgWzE1MTIuODAwNCwgNjc5LjI3MDc1XSxcclxuICBbMTUwOC41NzY0LCA2NzguOTM0OTRdLFxyXG4gIFsxNTA1LjkyMywgNjc0LjE3ODJdLFxyXG4gIFsxNTAwLjg2MTIsIDY3Ni43ODUzXSxcclxuICBbMTQ5Ni4xMTA4LCA2NzcuMzQxXSxcclxuICBbMTQ5My43OTMsIDY3Mi40ODI5XSxcclxuICBbMTQ5OS44NDA1LCA2NzEuODY3M10sXHJcbiAgWzE1MDAuOTU2LCA2NjYuMzQwN10sXHJcbiAgWzE1MDUuNDA4NywgNjY5LjMyODhdLFxyXG4gIFsxNTA2LjQ1NDYsIDY2NC4zNzg4XSxcclxuICBbMTUwMi41MDEyLCA2NjAuNTAwOF0sXHJcbiAgWzE0OTUuMjY0NCwgNjY3Ljg0MDY0XSxcclxuICBbMTQ5Ny4wOTE2LCA2NjIuNzY5ODRdLFxyXG4gIFsxNDk4LjAwNzgsIDY1Ny40Njc4XSxcclxuICBbMTQ5Mi41NDg2LCA2NTUuNjk5Nl0sXHJcbiAgWzE0OTIuNDY5NiwgNjYwLjE2ODc2XSxcclxuICBbMTQ5MS4zMTMsIDY2NC41ODM4Nl0sXHJcbiAgWzE0ODguMjEwMSwgNjY4Ljc1MTZdLFxyXG4gIFsxNDgxLjE4NTUsIDY2OC41NjEwNF0sXHJcbiAgWzE0ODQuMjI4NSwgNjcyLjI4MzddLFxyXG4gIFsxNDg4Ljc3OTgsIDY3NC4zOTkwNV0sXHJcbiAgWzE0OTEuMjA4NywgNjc4LjM5NTI2XSxcclxuICBbMTQ4Ny4wMTE4LCA2ODEuMzMxOV0sXHJcbiAgWzE0ODEuODk4MywgNjgwLjk2NjJdLFxyXG4gIFsxNDgzLjE1OTksIDY3Ni42Nzc4Nl0sXHJcbiAgWzE0NzguMDg3MiwgNjc0Ljk5MDNdLFxyXG4gIFsxNDczLjk2MzEsIDY3OS44OTM2XSxcclxuICBbMTQ3MS45MjMzLCA2NzYuNzUwODVdLFxyXG4gIFsxNDY3Ljc0MDUsIDY4MS4wMjM4XSxcclxuICBbMTQ2Ny40NDY3LCA2NzUuMzE5NjRdLFxyXG4gIFsxNDY1Ljg5NDksIDY2Ni42MjQ5NF0sXHJcbiAgWzE0NjYuMTgwNywgNjYxLjM3ODldLFxyXG4gIFsxNDcwLjM1NDYsIDY2NC4yMzgwNF0sXHJcbiAgWzE0NzUuMjE3MywgNjY0LjkxNTA0XSxcclxuICBbMTQ3NS45MzUsIDY2OS44Njc2XSxcclxuICBbMTQ3Mi4yOTQ3LCA2NzIuODE0OF0sXHJcbiAgWzE0NjkuNTE2NSwgNjY5LjU2NzU3XSxcclxuICBbMTQ2NC4xMjQsIDY3Mi4yMDM4Nl0sXHJcbiAgWzE0NTkuMjkyMiwgNjcyLjE2NjVdLFxyXG4gIFsxNDYyLjgyMzksIDY3Ny41ODVdLFxyXG4gIFsxNDU4LjA5OTksIDY3Ni41NTc4Nl0sXHJcbiAgWzE0NTMuOTA2LCA2NzMuNTU4ODRdLFxyXG4gIFsxNDYxLjY3NTgsIDY2Ny42OTNdLFxyXG4gIFsxNDU1LjcxNywgNjY4LjkyNDJdLFxyXG4gIFsxNDUwLjg3MjMsIDY2OC4yNzVdLFxyXG4gIFsxNDUzLjExNTIsIDY2My45ODU4NF0sXHJcbiAgWzE0NDguMjQ4NywgNjYyLjE0ODc0XSxcclxuICBbMTQ0NS44MzQsIDY1Ni40NTI1XSxcclxuICBbMTQ0My4xMzIyLCA2NjAuNTkxODZdLFxyXG4gIFsxNDQyLjg1MzMsIDY2NS4yOTQ4Nl0sXHJcbiAgWzE0NDYuMjc1NCwgNjY3Ljg4MzldLFxyXG4gIFsxNDQ4LjQ2MTQsIDY3Mi45MDZdLFxyXG4gIFsxNDQzLjA5MzMsIDY3Mi40NDFdLFxyXG4gIFsxNDM5LjQxOTcsIDY2OC45NDA2XSxcclxuICBbMTQzNi4yMzI3LCA2NzIuNTU4XSxcclxuICBbMTQzNi4zNDU1LCA2NzcuMjY4Ml0sXHJcbiAgWzE0NDAuMTA5OSwgNjc3LjA1MzhdLFxyXG4gIFsxNDQ0LjkwODksIDY3Ny42ODQzXSxcclxuICBbMTQ1MS4wMjcxLCA2NzcuMzcxMzRdLFxyXG4gIFsxNDQ3LjMzMTcsIDY4MC45MDMxXSxcclxuICBbMTQ0Ny41Mjk0LCA2ODQuMzY0NV0sXHJcbiAgWzE0NDcuNjExLCA2ODcuMzA4Ml0sXHJcbiAgWzE0NDQuNzYyNSwgNjg5LjA5NDY3XSxcclxuICBbMTQ0MS43ODIzLCA2OTAuMDMwM10sXHJcbiAgWzE0MzguMDE0LCA2OTAuMDA4NV0sXHJcbiAgWzE0MzUuNjcwNywgNjg2LjU1NDQ0XSxcclxuICBbMTQzMi43MTIzLCA2ODQuMzI0OF0sXHJcbiAgWzE0MjguNjE3LCA2ODQuNDQ2OV0sXHJcbiAgWzE0MjUuMDM4MSwgNjgzLjY5OTldLFxyXG4gIFsxNDIxLjAwMTEsIDY4Mi40MzM4XSxcclxuICBbMTQxNy4xOTczLCA2ODAuNzU2MTZdLFxyXG4gIFsxNDEzLjA5NjIsIDY4MC44NzQ3Nl0sXHJcbiAgWzE0MDkuMDU5OSwgNjgwLjI2MTU0XSxcclxuICBbMTQwOC4yNTQsIDY4Ni4wNjY5XSxcclxuICBbMTQxMy41NjIsIDY4NS44NDg0XSxcclxuICBbMTQxNy45MDY2LCA2ODYuNzI0OF0sXHJcbiAgWzE0MjIuNDkyMiwgNjg3LjMzOTZdLFxyXG4gIFsxNDI1Ljg1NTUsIDY5MC4wMzM3XSxcclxuICBbMTQzMC4yMjAyLCA2ODguMjQzNV0sXHJcbiAgWzE0MjkuNzc3OCwgNjkzLjg4MDc0XSxcclxuICBbMTQyNC42NCwgNjk1LjE1MTFdLFxyXG4gIFsxNDE5LjI2NjcsIDY5Mi4xMzY2Nl0sXHJcbiAgWzE0MTUuMzQ3NywgNjk2LjgxMTRdLFxyXG4gIFsxNDIxLjYxNjMsIDY5OS4zMTgxXSxcclxuICBbMTQyNy42MDAzLCA3MDEuODQ5NTVdLFxyXG4gIFsxNDMxLjI4LCA3MDYuMjAxNjZdLFxyXG4gIFsxNDM2LjgxOTMsIDcwNC42Njk5XSxcclxuICBbMTQ0NC43NjQ5LCA3MDYuOTQ0MV0sXHJcbiAgWzE0NDAuMzM1MywgNzA5LjkxNjddLFxyXG4gIFsxNDQwLjk3MDIsIDcxNS40NDgxXSxcclxuICBbMTQzMy44NzU1LCA3MTYuNDYzNzVdLFxyXG4gIFsxNDM0Ljk4MTQsIDcxMC43OTE0NF0sXHJcbiAgWzE0MjkuNDY0NCwgNzExLjczMjFdLFxyXG4gIFsxNDI3LjYzNCwgNzE2LjUyNTc2XSxcclxuICBbMTQyNy4yMzE0LCA3MjEuNDY5N10sXHJcbiAgWzE0MjEuMTMxMSwgNzIwLjMzNjM2XSxcclxuICBbMTQxOC40NjI4LCA3MTYuMDE3Ml0sXHJcbiAgWzE0MTMuNDczOCwgNzE5Ljk3NTZdLFxyXG4gIFsxNDA0LjU4MDMsIDcxNS41NDczNl0sXHJcbiAgWzEzOTguNDEwOCwgNzE1LjUyMTM2XSxcclxuICBbMTM5Mi4zNTYzLCA3MTQuMjM2M10sXHJcbiAgWzEzODcuMDk0LCA3MTYuNDU2NjddLFxyXG4gIFsxMzg0LjgwMDUsIDcwOS42NTc2NV0sXHJcbiAgWzEzNzguMDk4NCwgNzA4LjE0MDI2XSxcclxuICBbMTM3MC42MTY1LCA3MDcuOTcxODZdLFxyXG4gIFsxMzY3LjMwMDksIDcwMi4xMjkzXSxcclxuICBbMTM2Ny42MDA4LCA2OTUuODMzNDRdLFxyXG4gIFsxMzYyLjk0NzYsIDY5Mi40Mjk4XSxcclxuICBbMTM1NS45NDczLCA2OTEuMTg0M10sXHJcbiAgWzEzNjcuNDI3NCwgNjg2LjgxMzddLFxyXG4gIFsxMzY3Ljk4OTcsIDY4MC43MDM1NV0sXHJcbiAgWzEzNjMuNTI2LCA2NzcuMDc3OF0sXHJcbiAgWzEzNjcuNzk4OCwgNjc0LjUxODJdLFxyXG4gIFsxMzcyLjMzMywgNjc1LjgxMzM1XSxcclxuICBbMTM3My43MDI2LCA2ODIuMDE2ODVdLFxyXG4gIFsxMzc5LjY2MjcsIDY4My4wMDg2N10sXHJcbiAgWzEzNzMuNjM0NiwgNjg4LjcwMDRdLFxyXG4gIFsxMzc1LjU5MTEsIDY5NC44NDFdLFxyXG4gIFsxMzc0LjU4MzMsIDcwMS40NDgzNl0sXHJcbiAgWzEzODEuMzE2OCwgNzAyLjI3NzVdLFxyXG4gIFsxMzg3LjU2ODQsIDcwMS42OTNdLFxyXG4gIFsxMzkwLjIzMjksIDcwNy4yOTAzXSxcclxuICBbMTM5NS43ODk0LCA3MDguMDEwMl0sXHJcbiAgWzE0MDAuODQ2MiwgNzA5LjIyMjE3XSxcclxuICBbMTQwNS41MzY2LCA3MDcuNTI3Ml0sXHJcbiAgWzE0MTAuMTY0NywgNzA4LjU1MTQ1XSxcclxuICBbMTQxNC45MDUyLCA3MDcuODQ2M10sXHJcbiAgWzE0MDkuNTMwMywgNzE0Ljk2NDVdLFxyXG4gIFsxNDE0LjU1OTYsIDcxMy4yNTA3XSxcclxuICBbMTQxOS43NzM5LCA3MDkuNjk0Ml0sXHJcbiAgWzE0MjMuMzc0OCwgNzEzLjYwODRdLFxyXG4gIFsxNDI1LjczMzIsIDcwOC4yMzMxNV0sXHJcbiAgWzE0MjIuMzM3NiwgNzA0Ljc0ODJdLFxyXG4gIFsxNDE2LjY0NjIsIDcwMy4yNTgyXSxcclxuICBbMTQwOS42NzkyLCA3MDEuNjExM10sXHJcbiAgWzE0MDYuNTAxLCA2OTUuMTE1NjZdLFxyXG4gIFsxNDEyLjM1NTcsIDY5MS4zNDA3Nl0sXHJcbiAgWzE0MDEuOTMzNSwgNzAxLjU5MzQ0XSxcclxuICBbMTM5NC43NzQyLCA3MDEuMDk4NV0sXHJcbiAgWzEzOTguNTg3MywgNjk0LjU3NjA1XSxcclxuICBbMTM5My4wNTI3LCA2OTAuMzUxNV0sXHJcbiAgWzEzODkuOTAwNiwgNjk1LjE4NDk0XSxcclxuICBbMTM4My4wOTE4LCA2OTUuNjIxMzRdLFxyXG4gIFsxMzgwLjk5MjMsIDY4OS4zNzkxNV0sXHJcbiAgWzEzODcuMDkxMiwgNjg3LjYyMDNdLFxyXG4gIFsxMzg1LjcyMzgsIDY4MS4zNzQ0XSxcclxuICBbMTM4Mi4xODczLCA2NzYuNDQ4N10sXHJcbiAgWzEzNzcuMjk1NywgNjc2LjA3NDJdLFxyXG4gIFsxMzg0Ljk4MzksIDY3MS4xNjMxXSxcclxuICBbMTM5MC45NTgzLCA2NzAuOTE4N10sXHJcbiAgWzEzODcuODc1NSwgNjc1LjU1MzFdLFxyXG4gIFsxMzkxLjE5OSwgNjc5LjI2NjI0XSxcclxuICBbMTM5Mi40MzI0LCA2ODQuMTUzN10sXHJcbiAgWzEzOTcuODk1OCwgNjg3LjAzMzk0XSxcclxuICBbMTQwMy41Nzc2LCA2ODkuMTAyNF0sXHJcbiAgWzE0MDQuODQ1MiwgNjgwLjczMTldLFxyXG4gIFsxNDAxLjM0MTEsIDY4Mi45MDU3Nl0sXHJcbiAgWzEzOTYuOTc0NSwgNjgwLjAzMDRdLFxyXG4gIFsxMzk0LjMyNjIsIDY3NS4yMDEwNV0sXHJcbiAgWzEzOTYuODI5MSwgNjcxLjI4Ml0sXHJcbiAgWzE0MDAuNjQzOCwgNjc1LjcwMTFdLFxyXG4gIFsxNDA2LjIzNzgsIDY3NS44NzM5XSxcclxuICBbMTQwNC43OTAyLCA2NzEuOTcxMDddLFxyXG4gIFsxNDA3LjY1MTQsIDY2OC41ODc5NV0sXHJcbiAgWzE0MTAuNjExMywgNjcyLjAxMTg0XSxcclxuICBbMTQxMS4zOTk5LCA2NzYuMDk1Nl0sXHJcbiAgWzE0MTUuMzA1NSwgNjc1LjIzMDZdLFxyXG4gIFsxNDE5LjA2NjksIDY3Ni4xMjk0XSxcclxuICBbMTQyMi4yMjIsIDY3Ny44NDQzNl0sXHJcbiAgWzE0MjUuMzk1MywgNjc5LjQ1MDQ0XSxcclxuICBbMTQyOC45NDYsIDY4MC4xOTkxXSxcclxuICBbMTQzMi4zMDk2LCA2ODAuMDk1OF0sXHJcbiAgWzE0MzUuNTg1OCwgNjgxLjA1NjddLFxyXG4gIFsxNDM4LjIzOTcsIDY4Mi41NTI0XSxcclxuICBbMTQ0MS44MzY0LCA2ODEuMTg0MV0sXHJcbiAgWzE0NDMuOTU1MywgNjg0LjQ3OTRdLFxyXG4gIFsxNDQwLjIwNzgsIDY4Ni4wMDU1XSxcclxuICBbMTQzMy40ODA1LCA2OTAuNzE4NzVdLFxyXG4gIFsxNDM2LjA1NjIsIDY5NC4xODJdLFxyXG4gIFsxNDM3LjQxNjUsIDY5OC44MzA1N10sXHJcbiAgWzE0NDAuOTg0OSwgNjk0LjYyNDVdLFxyXG4gIFsxNDQ1LjE2NTksIDY5NC44MjAyNV0sXHJcbiAgWzE0NDkuNDkyNCwgNjkzLjgzODhdLFxyXG4gIFsxNDUxLjAwMDcsIDY4Ny41MDMyXSxcclxuICBbMTQ1NC43MzgzLCA2ODcuMTkzMzZdLFxyXG4gIFsxNDUyLjc3NDcsIDY5MS4wNDkyXSxcclxuICBbMTQ0OC4yMjk1LCA2OTAuNzQ2Nl0sXHJcbiAgWzE0NTQuMDQ2NiwgNjk1LjI0MDddLFxyXG4gIFsxNDU3LjE5MiwgNjkxLjc3ODU2XSxcclxuICBbMTQ2MS44MjYyLCA2OTQuNzAxNTRdLFxyXG4gIFsxNDU4LjA0MjYsIDY5Ny4xNjg0XSxcclxuICBbMTQ0OS42Nzk0LCA2OTcuMzkwMV0sXHJcbiAgWzE0NDcuMjU2NiwgNzAxLjIyODk0XSxcclxuICBbMTQ1Mi43Njg4LCA3MDAuNzgxMV0sXHJcbiAgWzE0NTcuMTU0NywgNzAyLjMwNzI1XSxcclxuICBbMTQ2Mi41MzgxLCA3MDAuNzE0MzZdLFxyXG4gIFsxNDY3LjA3OTYsIDY5OC44MDIxXSxcclxuICBbMTQ2Ny42NjYsIDcwNC4zNzUyNF0sXHJcbiAgWzE0ODUuNDMxLCA3MTEuMDIzMTNdLFxyXG4gIFsxNDg5LjAxOTgsIDcxNC41NDQwN10sXHJcbiAgWzE0OTguNjE1NywgNzE5LjcyNzk3XSxcclxuICBbMTQ5NS4wNTYsIDcxMy40NjUzM10sXHJcbiAgWzE1MDguMjEzNCwgNjk2LjQ4MTkzXSxcclxuICBbMTUxMi43MzQ0LCA2OTIuNDAyNl0sXHJcbiAgWzE1MTQuODUzLCA2OTguOTU0Nl0sXHJcbiAgWzE1MTguNzcyNSwgNjkzLjkzNzRdLFxyXG4gIFsxNTIyLjQwMTIsIDcwMC4xMTM1XSxcclxuICBbMTUyOC4zMDI1LCA2OTcuMzY3MV0sXHJcbiAgWzE1MzEuMjE0NiwgNzAxLjIzNDc0XSxcclxuICBbMTUzMy42OTg1LCA2OTUuOTQyOF0sXHJcbiAgWzE1MzguNzY3OCwgNjk2LjcwMl0sXHJcbiAgWzE1MzYuNjM2MiwgNzAwLjc2MDc0XSxcclxuICBbMTU0MS4zOTg0LCA3MDMuMTAxM10sXHJcbiAgWzE1NDIuNTk0MiwgNjk0Ljc3NTldLFxyXG4gIFsxNTQzLjIxMDQsIDY5MS4xNjU2NV0sXHJcbiAgWzE1NDEuNzg3LCA2ODYuODY5NV0sXHJcbiAgWzE1MzcuMzQxNiwgNjg1Ljg2MzQ2XSxcclxuICBbMTU0MC4zNjkxLCA2ODEuODc3M10sXHJcbiAgWzE1MzkuMzg2NCwgNjc3LjQzNV0sXHJcbiAgWzE1MzguMDk2MiwgNjcyLjk5MDZdLFxyXG4gIFsxNTM2Ljg1NjcsIDY2OC4zNzQ3Nl0sXHJcbiAgWzE1MzEuOTgzNCwgNjY5LjY4NDddLFxyXG4gIFsxNTMzLjc5MjYsIDY3NS42NTI5XSxcclxuICBbMTUzNC42MzY0LCA2ODAuOTAxNzNdLFxyXG4gIFsxNTI5LjE5OTcsIDY3OS45MzI3NF0sXHJcbiAgWzE1MjkuMDMwOCwgNjc1LjE4MzRdLFxyXG4gIFsxNTI1Ljk4NDcsIDY3Mi4zMzg4XSxcclxuICBbMTUyNy4wMTE1LCA2NjcuNjkxMTZdLFxyXG4gIFsxNTI5LjEwMTMsIDY2My4wNTE2XSxcclxuICBbMTUyNy45NTgsIDY1Ny4zNDE1XSxcclxuICBbMTUyOS4zNzQsIDY1MS44MjM2N10sXHJcbiAgWzE1MzEuOTMxOSwgNjQ3LjE4MjA3XSxcclxuICBbMTUzNC43NzMsIDY1MS40MjA2XSxcclxuICBbMTUzMi43NDA3LCA2NTcuMzU1NF0sXHJcbiAgWzE1MzQuOTkwNSwgNjYzLjAxMTRdLFxyXG4gIFsxNTQxLjAyMjUsIDY2NS4wNDIzNl0sXHJcbiAgWzE1NDAuOTc4OSwgNjYwLjAzMjg0XSxcclxuICBbMTUzNy4zOTk5LCA2NTYuMzgxMV0sXHJcbiAgWzE1NDAuOTE1LCA2NTIuNTMzNDVdLFxyXG4gIFsxNTM5LjQzMzYsIDY0OC40OTc4XSxcclxuICBbMTUzNi43ODU5LCA2NDUuMjI2Ml0sXHJcbiAgWzE1MzMuODM3NCwgNjQyLjMxMTJdLFxyXG4gIFsxNTM4LjczMDYsIDYzNC41MjEyXSxcclxuICBbMTUzNy4xMjk2LCA2MjUuMzk3NV0sXHJcbiAgWzE1MzUuMzIzMSwgNjIwLjI1MTY1XSxcclxuICBbMTUzMS43ODgsIDYxNy45NDgzNl0sXHJcbiAgWzE1MjcuMTYyMSwgNjE5Ljg0MzE0XSxcclxuICBbMTUzMS4wNjU5LCA2MjMuMDc3NV0sXHJcbiAgWzE1MjcuNzc5LCA2MjUuNzY3MzNdLFxyXG4gIFsxNTMyLjI5MDksIDYyNy41NDI4NV0sXHJcbiAgWzE1MzYuMDQyLCA2MzAuNDcyNF0sXHJcbiAgWzE1MzEuMzc4MiwgNjMyLjYxMjFdLFxyXG4gIFsxNTI4LjcwMDYsIDYyOS43MTU3Nl0sXHJcbiAgWzE1MjQuOTM4MSwgNjI5Ljg3NjJdLFxyXG4gIFsxNTIzLjM4ODIsIDYyNi41MzYyNV0sXHJcbiAgWzE1MjUuMjg2NiwgNjIyLjgzMTJdLFxyXG4gIFsxNTIzLjU4MDYsIDYxNC45MDFdLFxyXG4gIFsxNTIyLjk1NjgsIDYwOS4xNDAxXSxcclxuICBbMTUyNi42MzA5LCA2MTEuNTM0Nl0sXHJcbiAgWzE1MTcuOTA3MSwgNjEwLjcyNzY2XSxcclxuICBbMTUxNi4zNTMzLCA2MDEuOTUyMl0sXHJcbiAgWzE1MTUuNTU1NywgNTk3Ljg4ODldLFxyXG4gIFsxNTEwLjE0NDgsIDU5Ny4wMjQ2Nl0sXHJcbiAgWzE1MDQuMTg4NCwgNTk4LjA2Mjc0XSxcclxuICBbMTUwNi4wODA4LCA1OTMuMDUxNF0sXHJcbiAgWzE1MTMuOTQxNCwgNTkzLjkwNDldLFxyXG4gIFsxNTE3LjEzMDcsIDU5MC43OTQzXSxcclxuICBbMTUxMC42NjIxLCA1OTAuNzMzMDNdLFxyXG4gIFsxNTA1Ljg3MTYsIDU4Ny4zNDUyXSxcclxuICBbMTUxMy4zMDY4LCA1ODAuMjg3M10sXHJcbiAgWzE1MjEuNTIzOSwgNTg2Ljg0NjZdLFxyXG4gIFsxNTI1LjIyNTMsIDU4OS40OTA4NF0sXHJcbiAgWzE1MjguMDEzMiwgNTg2LjcxNzddLFxyXG4gIFsxNTMxLjg2NzgsIDU4Ny4xMjI3NF0sXHJcbiAgWzE1MzUuOTQzOCwgNTg3LjQwMDYzXSxcclxuICBbMTUzMy41OTI0LCA1ODMuMDQxNV0sXHJcbiAgWzE1MzcuNzY5OSwgNTgzLjI1MTNdLFxyXG4gIFsxNTI5LjM3NTUsIDU4Mi4zNTIwNV0sXHJcbiAgWzE1MjUuNjExOSwgNTc4LjUxMTRdLFxyXG4gIFsxNTI0LjQ4LCA1ODMuMDMzNDVdLFxyXG4gIFsxNTE5LjY1MDYsIDU4MS4wNjAyXSxcclxuICBbMTUxNy42MzEyLCA1NzYuODc3Nl0sXHJcbiAgWzE1MTYuNTc2OSwgNTg1LjQyNDZdLFxyXG4gIFsxNTExLjQwMzYsIDU4NS41NTA5XSxcclxuICBbMTUwNy4yMTMxLCA1ODEuNDk3NF0sXHJcbiAgWzE1MDQuMTQ5NywgNTc3LjIyMjZdLFxyXG4gIFsxNTAxLjg0MTYsIDU3Mi42ODc3NF0sXHJcbiAgWzE0OTUuODc0NSwgNTcwLjU1NjldLFxyXG4gIFsxNDk2LjczOTksIDU2NS4yNzU2M10sXHJcbiAgWzE1MDAuMjM2MywgNTYyLjM5MzU1XSxcclxuICBbMTUwNC45MDE0LCA1NjMuNDM3N10sXHJcbiAgWzE1MDguNTIwOCwgNTYwLjIxNDg0XSxcclxuICBbMTUwOS42MDE4LCA1NjQuNjM5NF0sXHJcbiAgWzE1MTEuMDczLCA1NjkuODA4Nl0sXHJcbiAgWzE1MTUuOTMzLCA1NjkuNTk2N10sXHJcbiAgWzE1MTMuNzk4MSwgNTY1Ljk4ODY1XSxcclxuICBbMTUxNy43ODYsIDU2NC4yMDUxXSxcclxuICBbMTUxNy4yNTIyLCA1NTkuNzUxXSxcclxuICBbMTUxMy40MDUsIDU2MS43NDYyXSxcclxuICBbMTUxMy4zNTQsIDU1Ny41ODM5XSxcclxuICBbMTUwOS42NTY1LCA1NTUuODY5MjZdLFxyXG4gIFsxNTA3Ljc3NTEsIDU1Mi4wNDMzM10sXHJcbiAgWzE1MDUuMzAxLCA1NTcuMTgxM10sXHJcbiAgWzE1MDEuMjYwNywgNTU4LjI5MzhdLFxyXG4gIFsxNTAzLjY1OTIsIDU1Mi42MTVdLFxyXG4gIFsxNTA2LjU5NCwgNTQ3LjQyNzVdLFxyXG4gIFsxNTExLjA2OTMsIDU0OC43MTc5XSxcclxuICBbMTUxMi43NDY1LCA1NTIuNDQzMV0sXHJcbiAgWzE1MTYuMzgyNiwgNTU0LjIwNDQ3XSxcclxuICBbMTUxOS4zMDgyLCA1NTYuMTc3NTVdLFxyXG4gIFsxNTIyLjk1MjQsIDU1Ni4wMDIzXSxcclxuICBbMTUyNi4wNDgsIDU1Mi42ODc2XSxcclxuICBbMTUyOS4wMTE1LCA1NDkuMDM0NTVdLFxyXG4gIFsxNTMyLjc3OTMsIDU0Ny40NTg4Nl0sXHJcbiAgWzE1NDAuMjk1MywgNTUwLjE4MDldLFxyXG4gIFsxNTM2LjE0NDgsIDU1MC42NjQzN10sXHJcbiAgWzE1MzYuNzQzNSwgNTU0Ljg4NTEzXSxcclxuICBbMTUzMi4yNDQzLCA1NTIuNjg0NjNdLFxyXG4gIFsxNTI5LjE4MTQsIDU1NS42NzY4XSxcclxuICBbMTUzMi42NDExLCA1NTcuNjc2M10sXHJcbiAgWzE1MzYuMjkyLCA1NTkuNTg1MTRdLFxyXG4gIFsxNTQwLjE2MjEsIDU1OC40NjMyNl0sXHJcbiAgWzE1NDEuMDgyOSwgNTU0Ljc5MTU2XSxcclxuICBbMTU0My45MjgyLCA1NTIuNjMwOV0sXHJcbiAgWzE1NDUuODg4OCwgNTQ5Ljg1MjY2XSxcclxuICBbMTU0My40MjYzLCA1NDcuMTM2MzVdLFxyXG4gIFsxNTQwLjQyMzgsIDU0NC45MDM3XSxcclxuICBbMTUzNy4wNzA4LCA1NDYuMzMzNV0sXHJcbiAgWzE1MzQuNjg5NywgNTQyLjcwNjg1XSxcclxuICBbMTUzMC40NjA5LCA1NDMuMDUwNjZdLFxyXG4gIFsxNTI2LjY1MTUsIDU0NC4xOTY2Nl0sXHJcbiAgWzE1MjIuNzUyOSwgNTQxLjgzMDU3XSxcclxuICBbMTUyMC41NTk2LCA1NDYuNDE2Nl0sXHJcbiAgWzE1MjQuNjE3MywgNTQ4LjE5MDU1XSxcclxuICBbMTUyMS4yNjY1LCA1NTEuNjcyNl0sXHJcbiAgWzE1MTcuMTA0NCwgNTQ5Ljk5OTJdLFxyXG4gIFsxNTE1LjQzNywgNTQ2LjM0Mjk2XSxcclxuICBbMTUxMS44MjUsIDU0NC40OTYzNF0sXHJcbiAgWzE1MTIuNzY0LCA1NDAuMDU5Ml0sXHJcbiAgWzE1MTUuNjEzNSwgNTM2Ljk1NDZdLFxyXG4gIFsxNTE3LjM1NDksIDUzMi4yNzk0XSxcclxuICBbMTUxNy42NTgsIDU0Mi4wMTgyXSxcclxuICBbMTUyMC4wNDg2LCA1MzYuODE4NF0sXHJcbiAgWzE1MjMuODM3MywgNTM2LjMzODRdLFxyXG4gIFsxNTI3LjM3NzgsIDUzOC40Ml0sXHJcbiAgWzE1MzEuMjc2NywgNTM4LjA1ODJdLFxyXG4gIFsxNTM1LjEwMDIsIDUzNy44NjE5XSxcclxuICBbMTUzOC4wNDU1LCA1MzQuOTk5MTVdLFxyXG4gIFsxNTM4Ljg4OTgsIDU0MC40OTY0Nl0sXHJcbiAgWzE1NDMuMzU4OCwgNTQxLjk0ODZdLFxyXG4gIFsxNTQ3LjMyLCA1NDAuNTMxNTZdLFxyXG4gIFsxNTQyLjgwNTksIDUzNy40NDldLFxyXG4gIFsxNTQyLjczLCA1MzIuNTg0ODRdLFxyXG4gIFsxNTQyLjMzMDEsIDUyNy44ODEwNF0sXHJcbiAgWzE1NDMuMTk5NiwgNTIzLjE2NzVdLFxyXG4gIFsxNTQ3LjAxMjIsIDUyNS4wNzU4N10sXHJcbiAgWzE1NDYuODAyNywgNTI5LjgzNTddLFxyXG4gIFsxNTUwLjYxMiwgNTMxLjY5NzI3XSxcclxuICBbMTU1MS41NjYsIDUyNy4zODk4XSxcclxuICBbMTU1My40MDE2LCA1MTcuODQ5NF0sXHJcbiAgWzE1NTIuNTkyNSwgNTEzLjEyNTI0XSxcclxuICBbMTU0OC43NzUxLCA1MTAuODcwNTRdLFxyXG4gIFsxNTQ0Ljk1NjMsIDUwOC43MTU5XSxcclxuICBbMTU0OC4yMDA2LCA1MDYuMDE4NzRdLFxyXG4gIFsxNTUxLjg5NDMsIDUwNS4xMjk5N10sXHJcbiAgWzE1NTQuMDM0MywgNTAxLjg0NTRdLFxyXG4gIFsxNTU4LjA3NTksIDUwMC44MjUyNl0sXHJcbiAgWzE1NTUuNjc3NCwgNDk3LjQ2MzU2XSxcclxuICBbMTU1MS4zMjMsIDQ5Ny43NzUwMl0sXHJcbiAgWzE1NDguODE3OSwgNTAwLjYxMDA4XSxcclxuICBbMTU0NC45MTYzLCA1MDEuNjMyOTNdLFxyXG4gIFsxNTQzLjM2MDYsIDUwNS4xMzA4Nl0sXHJcbiAgWzE1MzkuNTQwNSwgNTA0LjE2MjcyXSxcclxuICBbMTU0MS41NjQsIDQ5OC42NzI1NV0sXHJcbiAgWzE1NDUuNjI2NSwgNDk2LjkwOV0sXHJcbiAgWzE1NDguODgsIDQ5My45ODEyXSxcclxuICBbMTU0NC44MjI4LCA0OTIuNTg1N10sXHJcbiAgWzE1NDEuMDQyNiwgNDkzLjc0MDE3XSxcclxuICBbMTUzNy42NDExLCA0OTYuMzYxOTRdLFxyXG4gIFsxNTM2LjQzOTcsIDQ5Mi4wMjQ2XSxcclxuICBbMTUzOS40NjUxLCA0ODkuMjQ3NjVdLFxyXG4gIFsxNTMyLjkxMzgsIDQ4OS45OTc2NV0sXHJcbiAgWzE1MzEuMDY2MiwgNDg2LjUwMjQ0XSxcclxuICBbMTUzMi40MjE4LCA0ODMuMDg0N10sXHJcbiAgWzE1MzYuMzMxOCwgNDgxLjYxODZdLFxyXG4gIFsxNTM5Ljg5MzIsIDQ3OS41MDIxN10sXHJcbiAgWzE1NDQuMDM5MywgNDgwLjc1NzAyXSxcclxuICBbMTUzNi40NTA0LCA0NzYuNzQwNDVdLFxyXG4gIFsxNTM5Ljc5NTQsIDQ3NC42NjUzNF0sXHJcbiAgWzE1NDMuMTgzMiwgNDc2LjczNzg4XSxcclxuICBbMTU0Ni42NjQsIDQ3NS42MjA4Ml0sXHJcbiAgWzE1NDkuOTU4NywgNDczLjg0NDJdLFxyXG4gIFsxNTUzLjM5MDksIDQ3Mi4zNzI5Ml0sXHJcbiAgWzE1NTUuODk3MiwgNDc1LjAxNjFdLFxyXG4gIFsxNTU5LjMyOTgsIDQ3NC4wNDAyMl0sXHJcbiAgWzE1NjIuMjkwNSwgNDc2Ljc4ODA2XSxcclxuICBbMTU1OS4yMDksIDQ3OS4xOTE5Nl0sXHJcbiAgWzE1NTUuNTc2NCwgNDc5LjA4NDddLFxyXG4gIFsxNTUyLjA1MSwgNDc3LjIyODY0XSxcclxuICBbMTU0OC40Njk3LCA0NzkuMTMyNTddLFxyXG4gIFsxNTUyLjUwNSwgNDgxLjk3MDJdLFxyXG4gIFsxNTU3LjQ3NCwgNDgzLjMyNTRdLFxyXG4gIFsxNTYyLjQzNzQsIDQ4MS42MDk1Nl0sXHJcbiAgWzE1NjUuNDUzOSwgNDc5Ljc5ODA3XSxcclxuICBbMTU2Ni41NDQ2LCA0NzUuMzQyNjVdLFxyXG4gIFsxNTY5LjA1NDMsIDQ3OC42OTQ0M10sXHJcbiAgWzE1NzIuNjM1OSwgNDc5LjMxNjldLFxyXG4gIFsxNTc1LjE2NTMsIDQ4Mi42NTk2N10sXHJcbiAgWzE1NzMuNDYyNCwgNDg1Ljg1Nzg1XSxcclxuICBbMTU2OS4zNzc0LCA0ODYuOTMzNl0sXHJcbiAgWzE1NjcuOTAxNiwgNDkwLjgyMzU4XSxcclxuICBbMTU2NC4zMTY5LCA0OTMuNjUzN10sXHJcbiAgWzE1NjAuNjk2NSwgNDkxLjg5NDE3XSxcclxuICBbMTU2My44NDM4LCA0ODkuNjAwMDddLFxyXG4gIFsxNTY1LjY2NDEsIDQ4Ni4wNTM3XSxcclxuICBbMTU2OC45NzM4LCA0ODIuOTM4NDVdLFxyXG4gIFsxNTYyLjI4NTgsIDQ4NC44MzM1XSxcclxuICBbMTU1OS45MzIsIDQ4Ny4yOTI0NV0sXHJcbiAgWzE1NTcuMTE4NSwgNDg5LjIwMDY1XSxcclxuICBbMTU1NC4xNDU4LCA0ODYuMTIxOTVdLFxyXG4gIFsxNTQ5Ljc5MjIsIDQ4NS45MjQ4N10sXHJcbiAgWzE1NDcuOTU3LCA0ODIuODE5NTVdLFxyXG4gIFsxNTQ0LjYzMTEsIDQ4NS4wMTI4OF0sXHJcbiAgWzE1NDAuMTk0NiwgNDg0LjIwMDkzXSxcclxuICBbMTUzNi4wNzIsIDQ4Ni41MDA0M10sXHJcbiAgWzE1NDIuODk0OCwgNDg4LjUxMTg0XSxcclxuICBbMTU0Ni44NTk5LCA0ODkuMDU2N10sXHJcbiAgWzE1NTAuNTAwNywgNDg5Ljg1ODFdLFxyXG4gIFsxNTUzLjc2MjIsIDQ5MC41MzEyNV0sXHJcbiAgWzE1NTIuOTQ2NywgNDk0LjE2NDU1XSxcclxuICBbMTU1Ni44OTQ1LCA0OTMuMjc4OTNdLFxyXG4gIFsxNTU5LjgzMDEsIDQ5NS44NTAyXSxcclxuICBbMTU2Mi4wNDIyLCA0OTguODE0M10sXHJcbiAgWzE1NjUuMTI5MywgNDk3LjI2MDY4XSxcclxuICBbMTU2OC4zOTQ1LCA0OTQuOTU0MTZdLFxyXG4gIFsxNTcxLjkzMzEsIDQ5My4zMzE2N10sXHJcbiAgWzE1NzIuMjg2OSwgNDg5Ljc3NTk0XSxcclxuICBbMTU3Ni40NjM3LCA0ODkuNzU1NzRdLFxyXG4gIFsxNTgwLjIxOCwgNDkyLjI0OTYzXSxcclxuICBbMTU3OS4wMTEyLCA0ODYuMjc4MTddLFxyXG4gIFsxNTg3LjU0NzQsIDQ4Ni41OTcwMl0sXHJcbiAgWzE1OTEuMTk5NywgNDg0LjUzNTI1XSxcclxuICBbMTU5Mi45MzA5LCA0ODAuOTE4N10sXHJcbiAgWzE1OTEuMDk2OSwgNDc3Ljc2MzRdLFxyXG4gIFsxNTg3LjM1NjMsIDQ3Ni45MjA5Nl0sXHJcbiAgWzE1ODQuMzY5NiwgNDc0LjAwMzQ4XSxcclxuICBbMTU4My43NjIyLCA0NzkuMzE4MjRdLFxyXG4gIFsxNTg3Ljg1NjgsIDQ4MS42MjEwNl0sXHJcbiAgWzE1ODMuNDIwNCwgNDg0LjA2NzFdLFxyXG4gIFsxNTc5LjYxNzksIDQ4MS40NDU4Nl0sXHJcbiAgWzE1NzYuODQ0NiwgNDc4LjExMzFdLFxyXG4gIFsxNTgwLjg4NzIsIDQ3Ni4yNDk2XSxcclxuICBbMTU3NC4wMjg5LCA0NzQuNTkwOF0sXHJcbiAgWzE1NzcuODExNiwgNDczLjYzNjFdLFxyXG4gIFsxNTgwLjg4MzksIDQ3MC43NjU5Nl0sXHJcbiAgWzE1ODQuODMwMSwgNDY5LjI3ODMyXSxcclxuICBbMTU4Ny45Njc4LCA0NzEuNzEzNDddLFxyXG4gIFsxNTkwLjg1NjQsIDQ3My45MTU1M10sXHJcbiAgWzE1OTIuNTkzNSwgNDY5Ljk5NDk2XSxcclxuICBbMTU5NC45NzM4LCA0NzMuMTkzOV0sXHJcbiAgWzE1OTQuODg4NSwgNDc2LjkwOTVdLFxyXG4gIFsxNTk3LjUxOTgsIDQ3OS42MTEwMl0sXHJcbiAgWzE1OTYuODk0NSwgNDgyLjU2Nzg3XSxcclxuICBbMTU5NS4yNzQzLCA0ODUuMzI1M10sXHJcbiAgWzE1OTcuNzU2OCwgNDg4LjIzNDQ0XSxcclxuICBbMTU5OS4xNDM2LCA0OTIuMzQyOTZdLFxyXG4gIFsxNjAwLjM4OTQsIDQ5Ni40NjE2XSxcclxuICBbMTYwNC40NDksIDQ5My4xMDM3M10sXHJcbiAgWzE2MDIuMzU2OCwgNDg4LjM0MTQzXSxcclxuICBbMTYwNi44Nzk0LCA0ODguOTAyMzRdLFxyXG4gIFsxNjAyLjk1MSwgNDc1LjMyOTZdLFxyXG4gIFsxNTk5LjAwOTUsIDQ3Ni40NTM1OF0sXHJcbiAgWzE1OTkuMTk0OCwgNDczLjA2ODJdLFxyXG4gIFsxNTk3LjI4NjksIDQ2OS43ODk2NF0sXHJcbiAgWzE1OTguNTAzMywgNDY2LjI5Njg4XSxcclxuICBbMTYwMS45NjQ1LCA0NzAuMjQzMzhdLFxyXG4gIFsxNjA1Ljg3NzIsIDQ3Mi44MDQzXSxcclxuICBbMTYwOC44MjgxLCA0NzAuMjc1XSxcclxuICBbMTYxMi43ODc3LCA0NzAuMzMxNTRdLFxyXG4gIFsxNjEzLjA4OCwgNDY1LjM2MjVdLFxyXG4gIFsxNjE2LjU1OTcsIDQ2NC4zNjY5NF0sXHJcbiAgWzE2MTkuNzE3OSwgNDY2LjM5MDZdLFxyXG4gIFsxNjIzLjc5MzEsIDQ2Ni40MDU3XSxcclxuICBbMTYyOC4zODk5LCA0NjYuODg2NzJdLFxyXG4gIFsxNjI5LjU2OTMsIDQ2My40MDIyOF0sXHJcbiAgWzE2MzkuOTUyNCwgNDYxLjQ3NzQ4XSxcclxuICBbMTY0NC41MjUsIDQ2My42OTA2N10sXHJcbiAgWzE2NDcuMjI3NSwgNDY2Ljk1OTg0XSxcclxuICBbMTY0Ni43MDU4LCA0NzEuMTk1NV0sXHJcbiAgWzE2NDIuNzUzMiwgNDcxLjgyODM0XSxcclxuICBbMTY0My40MDQ1LCA0NjguMTM2NTddLFxyXG4gIFsxNjQwLjc4OTgsIDQ2NS4zOTM0M10sXHJcbiAgWzE2MzkuMDg4MywgNDY5LjQzMzU2XSxcclxuICBbMTYzNi42NTY1LCA0NjUuMjIxMjVdLFxyXG4gIFsxNjM1LjA1NTgsIDQ2OC42ODc5M10sXHJcbiAgWzE2MzIuMjgxLCA0NzQuMDUyOTJdLFxyXG4gIFsxNjMxLjczNzUsIDQ3Ny42MTIwNl0sXHJcbiAgWzE2MjguMjMwOCwgNDc2LjI1Njk2XSxcclxuICBbMTYyNC42MDMzLCA0NzUuMDYyNDRdLFxyXG4gIFsxNjIwLjQ3MSwgNDc3LjM5NjM2XSxcclxuICBbMTYyMC43NjQ0LCA0NzMuNTgyMDNdLFxyXG4gIFsxNjIzLjg3MjcsIDQ3MS4yMTQyM10sXHJcbiAgWzE2MjAuMjM2LCA0NjkuOTM1M10sXHJcbiAgWzE2MTYuMjcxOSwgNDY5LjA3NDU1XSxcclxuICBbMTYxNi41MDc2LCA0NzMuODQ0NDhdLFxyXG4gIFsxNjEwLjk4NDQsIDQ3NC4yNDY1Ml0sXHJcbiAgWzE2MTMuNzQzOSwgNDc3LjQ0MDNdLFxyXG4gIFsxNjE3LjMyNTQsIDQ3OS43MjMxXSxcclxuICBbMTYxOC4xODE0LCA0ODQuMTY4NF0sXHJcbiAgWzE2MTYuNzUxMiwgNDg3Ljk1NDk2XSxcclxuICBbMTYyMS45NTU3LCA0ODcuNjI5MV0sXHJcbiAgWzE2MjYuNTAyLCA0ODcuODk3M10sXHJcbiAgWzE2MjUuNTcyNCwgNDg0LjAyODc1XSxcclxuICBbMTYyMS43NTgyLCA0ODIuNDU1MDVdLFxyXG4gIFsxNjI0LjMyMjMsIDQ3OS4xOTAyNV0sXHJcbiAgWzE2MjguMTY4LCA0ODAuMzgzNV0sXHJcbiAgWzE2MjkuODU5NywgNDgzLjk0NV0sXHJcbiAgWzE2MzUuOTgzOCwgNDg4LjA0ODI4XSxcclxuICBbMTYzNi4zOTYsIDQ5Mi4xODg0Ml0sXHJcbiAgWzE2MzkuNjcwMiwgNDkwLjQ2OTJdLFxyXG4gIFsxNjQxLjAwNTYsIDQ5My45NDc0OF0sXHJcbiAgWzE2NDMuOTkzNCwgNDkxLjUyOTAyXSxcclxuICBbMTY0Ni40MzU1LCA0ODcuOTg2MzNdLFxyXG4gIFsxNjQzLjA1ODEsIDQ4OC4wNDkyNl0sXHJcbiAgWzE2NDAuMTY3LCA0ODYuNjAxOF0sXHJcbiAgWzE2MzcuODYzLCA0ODQuMzE1ODZdLFxyXG4gIFsxNjQxLjI4MiwgNDgyLjE2NDZdLFxyXG4gIFsxNjQwLjcyMTYsIDQ3OC4zMzYwM10sXHJcbiAgWzE2NDIuNTI1OCwgNDc1LjI4NTAzXSxcclxuICBbMTY0NS44NTgsIDQ3Ni4wNzA4Nl0sXHJcbiAgWzE2NDguOTM2MywgNDc4LjQwNjhdLFxyXG4gIFsxNjUxLjc5MjYsIDQ4MC43NDQ3NV0sXHJcbiAgWzE2NTUuNzI1LCA0NzkuMTg5NTRdLFxyXG4gIFsxNjU1LjU5NjMsIDQ3NS4zNzg1XSxcclxuICBbMTY1Mi4xNzg4LCA0NzYuMTk2MzVdLFxyXG4gIFsxNjQ5LjUzODEsIDQ3My41NjQ4OF0sXHJcbiAgWzE2NTQuMTA0LCA0NzEuNjMzMDZdLFxyXG4gIFsxNjUxLjA3MjMsIDQ2OS4yOTY0OF0sXHJcbiAgWzE2NTQuNzU0NCwgNDY1LjkxNTY1XSxcclxuICBbMTY1MC45NzQ5LCA0NjUuNDAzMjZdLFxyXG4gIFsxNjQ4LjM2MzUsIDQ2Mi40NDU4Nl0sXHJcbiAgWzE2NTIuMjM3MywgNDYxLjYwOTEzXSxcclxuICBbMTY1NS45MDM2LCA0NjEuNTY5M10sXHJcbiAgWzE2NTkuMDkxOSwgNDU5Ljk4OTI2XSxcclxuICBbMTY2Mi41NzQsIDQ2MC41NDc2XSxcclxuICBbMTY2MS41NDA0LCA0NTYuMTg4Nl0sXHJcbiAgWzE2NTguNDQsIDQ1My4yMDM2N10sXHJcbiAgWzE2NTIuMjIwNywgNDUzLjk4NTRdLFxyXG4gIFsxNjU2Ljk2NjgsIDQ1Ni41MjI0Nl0sXHJcbiAgWzE2NTQuODU2NCwgNDUxLjYwMzczXSxcclxuICBbMTY1Ny40ODUxLCA0NDguNjQzMTZdLFxyXG4gIFsxNjYyLjQ4MzgsIDQ0Ni41Njk4Ml0sXHJcbiAgWzE2NjEuNzQ4MywgNDQxLjQ2Mjc0XSxcclxuICBbMTY2NC4xNzQ4LCA0MzcuMjgwMTJdLFxyXG4gIFsxNjYxLjE3NzIsIDQzMC4xNjk2Ml0sXHJcbiAgWzE2NjAuODc1NSwgNDI1LjA2OTU1XSxcclxuICBbMTY1Ni42NTM2LCA0MjEuNjMxMV0sXHJcbiAgWzE2NTEuNzI3LCA0MTcuNjc3Nl0sXHJcbiAgWzE2NDUuNTQ5MywgNDE3LjQ0Nzk3XSxcclxuICBbMTY0MC45MzgsIDQxMy45OTU4XSxcclxuICBbMTY0MS4xNzIsIDQyMC44MDMxNl0sXHJcbiAgWzE2MzUuOTAxNiwgNDE5Ljc1MTFdLFxyXG4gIFsxNjM3LjI1OSwgNDI1LjExMDc4XSxcclxuICBbMTY0MS4xOTM2LCA0MjkuMTY2MzVdLFxyXG4gIFsxNjQ1LjkxNjMsIDQzMC4xMDI0Ml0sXHJcbiAgWzE2NDkuODgxNywgNDMyLjA5MTc0XSxcclxuICBbMTY1Mi44MjQzLCA0MjYuNzYzOV0sXHJcbiAgWzE2NDcuNTE1NSwgNDIzLjU2NjYyXSxcclxuICBbMTY1Ni45NTkyLCA0MTMuNTQxNDddLFxyXG4gIFsxNjYyLjY2NDksIDQxNy41MTkxM10sXHJcbiAgWzE2NjMuMDM0NCwgNDA5LjYzMTg0XSxcclxuICBbMTY2Ny42NjksIDQwNS4xMzcxNV0sXHJcbiAgWzE2NzMuNDAxOSwgNDAwLjQzNDk0XSxcclxuICBbMTY3MC4yNjUzLCAzOTcuNjM2MDVdLFxyXG4gIFsxNjcyLjEzNjcsIDM5My4xOTM1NF0sXHJcbiAgWzE2NzUuNjgzMywgMzkwLjIyMzM2XSxcclxuICBbMTY3OS42MDA2LCAzODkuMDQ0NjVdLFxyXG4gIFsxNjc2LjM2MjgsIDM5NS44MzY2NF0sXHJcbiAgWzE2NzguMDM0MywgNDAwLjgxMzA4XSxcclxuICBbMTY4MS4yODc1LCAzOTcuOTQ3ODhdLFxyXG4gIFsxNjgwLjU0NDIsIDM5My42MDY0XSxcclxuICBbMTY4NC43MDE4LCAzOTMuNzA5MjNdLFxyXG4gIFsxNjg2LjAxNDksIDM5Ny43MDc0XSxcclxuICBbMTY4OC4xMDYyLCA0MDEuNzE3MTZdLFxyXG4gIFsxNjkyLjY0OTMsIDQwMC4yNTczXSxcclxuICBbMTY5MC43MzMzLCAzOTYuNzk0OThdLFxyXG4gIFsxNjg5LjQ5MDcsIDM5My4zNjcwM10sXHJcbiAgWzE2ODcuMTg0NiwgMzkwLjU5NjhdLFxyXG4gIFsxNjgzLjQzMzUsIDM4OC45NjA2Nl0sXHJcbiAgWzE2ODcuMDUwNywgMzg2LjcyNzU0XSxcclxuICBbMTY5MS4xMzYsIDM4OC40NDk1NV0sXHJcbiAgWzE2OTUuMzMxMiwgMzg3LjQzMDQ4XSxcclxuICBbMTY5NC4yNTcsIDM5Mi4zNzExXSxcclxuICBbMTY5NS45MTU4LCAzOTYuNzExNjRdLFxyXG4gIFsxNjg4LjIzNzQsIDM4My4wNTAxNF0sXHJcbiAgWzE2ODYuNTU2NCwgMzc4LjA5NTI4XSxcclxuICBbMTY5MS4yMDc4LCAzNzYuNzE2MDZdLFxyXG4gIFsxNjkxLjIwMTIsIDM3MS45OTUwNl0sXHJcbiAgWzE2OTYuMDM4OCwgMzc1LjA3MTcyXSxcclxuICBbMTY5OS43ODQ5LCAzNzcuODI4NjddLFxyXG4gIFsxNjk5LjkzMDcsIDM4NC4wMDA5OF0sXHJcbiAgWzE2OTkuODIyMywgMzg5LjE0MjU4XSxcclxuICBbMTY5OS4yOSwgMzkzLjc2NTJdLFxyXG4gIFsxNzA1LjM5MTUsIDM4Ny4wMzY0NF0sXHJcbiAgWzE3MDQuNTI2NCwgMzkxLjgzOTNdLFxyXG4gIFsxNzA0LjU3NiwgMzk3LjExNzY1XSxcclxuICBbMTcwMC40OTQ5LCAzOTkuNjQzOF0sXHJcbiAgWzE2OTYuOTUxNCwgNDAyLjMzOTE3XSxcclxuICBbMTY5MS44OTY1LCA0MDUuMDQ5MDRdLFxyXG4gIFsxNjkwLjQ4NSwgNDEyLjU0MTVdLFxyXG4gIFsxNjg0LjE5NDYsIDQxMS45OTcxM10sXHJcbiAgWzE2ODAuNDc4NSwgNDA2LjMyOTUzXSxcclxuICBbMTY4My40NTE0LCA0MDIuMDYyNTZdLFxyXG4gIFsxNjc4LjE1NDQsIDQxMS41NzY3Ml0sXHJcbiAgWzE2NzUuOTY4NiwgNDE2Ljc1NTEzXSxcclxuICBbMTY3NC4zMjA5LCA0MDYuMzkwMl0sXHJcbiAgWzE2NzAuODYzNSwgNDExLjI3NTg4XSxcclxuICBbMTY2OC45NDgyLCA0MTcuMTA3MThdLFxyXG4gIFsxNjY2LjU2NjQsIDQyNS4wNDE1XSxcclxuICBbMTY2Ni4zMzYyLCA0MzIuMzY2NTJdLFxyXG4gIFsxNjcwLjU1OTIsIDQyOC44Mzk2Nl0sXHJcbiAgWzE2NzUuMzk3NSwgNDMwLjQxOTU2XSxcclxuICBbMTY4MC40NDU4LCA0MjkuNzYzNjddLFxyXG4gIFsxNjg0LjAyNzUsIDQzMy45MTEzMl0sXHJcbiAgWzE2ODIuNDg2NiwgNDM4LjAwNzU0XSxcclxuICBbMTY3OC4zOTIsIDQzOS40MjQ5XSxcclxuICBbMTY3Ny41NTc0LCA0MzUuMTAxMDddLFxyXG4gIFsxNjcxLjkwMDEsIDQzNC40OTE3XSxcclxuICBbMTY2OC44MDExLCA0MzguNzk2NTddLFxyXG4gIFsxNjczLjY5NTYsIDQzOS45NjMwN10sXHJcbiAgWzE2NzEuMTU4MiwgNDQ0LjAzMDE1XSxcclxuICBbMTY2Ni4zNjUsIDQ0My40MDk2NF0sXHJcbiAgWzE2NjUuOTEyLCA0NDkuMzY0MzhdLFxyXG4gIFsxNjY5Ljc5MDMsIDQ0OC40MDYyMl0sXHJcbiAgWzE2NjkuMzAzNywgNDUzLjg1MzY0XSxcclxuICBbMTY3My4xNzI5LCA0NTMuMjE1NTVdLFxyXG4gIFsxNjc0LjU4MTcsIDQ0OS40MjE1N10sXHJcbiAgWzE2NzUuNTI2NiwgNDQ1Ljc1Mzg1XSxcclxuICBbMTY3Ny43OTEzLCA0NDMuMTYyMDVdLFxyXG4gIFsxNjgxLjkwNzcsIDQ0My4xOTU5XSxcclxuICBbMTY4NS4yMTU3LCA0NDAuOTk0NDhdLFxyXG4gIFsxNjg3LjgxODUsIDQ0My4yODYxXSxcclxuICBbMTY4OS4xOTgxLCA0NDcuNDUzOTJdLFxyXG4gIFsxNjg4LjI0MjksIDQzNy4yNjI5NF0sXHJcbiAgWzE2OTMuMTY2LCA0MzMuNTE3ODhdLFxyXG4gIFsxNjkyLjYzNzYsIDQzOC4zMzkzXSxcclxuICBbMTY5MS4yNCwgNDQyLjUyNTM2XSxcclxuICBbMTY5NS4yNjkzLCA0NDIuMDU2NDZdLFxyXG4gIFsxNjk5LjM0NjcsIDQ0MS42MDQ1XSxcclxuICBbMTcwMy4yOTExLCA0NDEuNzkzMzNdLFxyXG4gIFsxNzAxLjg1OTYsIDQzNi40ODg1XSxcclxuICBbMTY5Ny4yOTQyLCA0MzcuMTA5M10sXHJcbiAgWzE2OTguNzc4MywgNDMxLjcxNl0sXHJcbiAgWzE3MDMuOTI3LCA0MjkuNzAzNzRdLFxyXG4gIFsxNzA1LjczMzIsIDQzMy42ODM0N10sXHJcbiAgWzE3MTQuNjAxOSwgNDI5LjgzNDQ0XSxcclxuICBbMTcxMC4yNDYsIDQzNC40MTgzM10sXHJcbiAgWzE3MTEuMTkzNSwgNDM4LjMwOTg4XSxcclxuICBbMTcxMi4zMDYyLCA0NDEuODk2MzZdLFxyXG4gIFsxNzEzLjk0NTQsIDQ0NS4wMzI0NF0sXHJcbiAgWzE3MTUuMjMzNCwgNDQ4LjU2NV0sXHJcbiAgWzE3MTkuMDI2MSwgNDQ3LjE2NTc3XSxcclxuICBbMTcyMi42NDQyLCA0NDQuODQ5OThdLFxyXG4gIFsxNzIyLjU3NDMsIDQ0MC4zMTc4N10sXHJcbiAgWzE3MjAuMDY0NSwgNDM2LjM1OTNdLFxyXG4gIFsxNzE4LjEzMzMsIDQ0Mi40NDk2OF0sXHJcbiAgWzE3MTYuMTMxMywgNDM4Ljc0ODY2XSxcclxuICBbMTcxNC45NzksIDQzNC41NTIyMl0sXHJcbiAgWzE3MTkuMjgxMiwgNDMxLjM0NTU4XSxcclxuICBbMTcyMi4zNDQ1LCA0MjguMDQ4MDNdLFxyXG4gIFsxNzI0LjIwMDIsIDQzMy45MjQyXSxcclxuICBbMTcyNi4zNzY1LCA0MzguNTMyMjNdLFxyXG4gIFsxNzMwLjY4MTQsIDQzOS4wMDk1XSxcclxuICBbMTczMi4xMDI5LCA0NDIuMzU2OTNdLFxyXG4gIFsxNzM0LjI1NDksIDQzNi4zOTA4XSxcclxuICBbMTcyOS4zODQ4LCA0MzQuNjUxMzddLFxyXG4gIFsxNzI3LjYwNzMsIDQzMC4xODgwNV0sXHJcbiAgWzE3MzIuNjY3LCA0MzAuOTQxMjJdLFxyXG4gIFsxNzM2LjkyNjgsIDQyOS4wNDYwOF0sXHJcbiAgWzE3MzcuMTAzMSwgNDI0LjU5NDldLFxyXG4gIFsxNzMzLjg2MDcsIDQyMS4xMDg3M10sXHJcbiAgWzE3MzEuNTk0NywgNDI1LjU2NDMzXSxcclxuICBbMTcyNi41NDQ3LCA0MjUuNDk5NF0sXHJcbiAgWzE3MjYuNTIsIDQyMC42Mzk2XSxcclxuICBbMTcyMC44NDE4LCA0MjIuNDM4NDJdLFxyXG4gIFsxNzE2LjI0MjksIDQyNS4yMzA2OF0sXHJcbiAgWzE3MDkuNjQ5NywgNDI5Ljk1NjEyXSxcclxuICBbMTcwNi40MjEzLCA0MzguMDY2MjJdLFxyXG4gIFsxNzA3LjU1OCwgNDQyLjExNDddLFxyXG4gIFsxNzA4LjgzNjksIDQ0NS43ODc1NF0sXHJcbiAgWzE3MTAuODkwNiwgNDQ5LjAwOTAzXSxcclxuICBbMTcwOS45NjEzLCA0NTMuMTIyNzddLFxyXG4gIFsxNzEyLjU0NDQsIDQ1Ni4yODgxXSxcclxuICBbMTcxNC4zNjk4LCA0NTIuNDQ1NV0sXHJcbiAgWzE3MTguNjI4NCwgNDUxLjk0NDAzXSxcclxuICBbMTcyMi42MjI3LCA0NTAuNDQ3N10sXHJcbiAgWzE3MjUuOTMyOSwgNDQ3Ljg2MTddLFxyXG4gIFsxNzI3LjU1NDIsIDQ0My40NDU1XSxcclxuICBbMTczMy4yMTgsIDQ0NS45MTQzXSxcclxuICBbMTczMC4wNTk2LCA0NDguNDE4NTVdLFxyXG4gIFsxNzMxLjI3MDMsIDQ1Mi41NDk2NV0sXHJcbiAgWzE3MzUuMDMzNiwgNDUxLjc1MTM0XSxcclxuICBbMTczNi45NzYzLCA0NDcuNTI3MDddLFxyXG4gIFsxNzQwLjU2NDcsIDQ0My4zOTU4XSxcclxuICBbMTczNi4yOTkzLCA0NDEuMzEwMDZdLFxyXG4gIFsxNzQyLjE5MDIsIDQ0OC40MzQzM10sXHJcbiAgWzE3MzkuMTExOCwgNDUyLjY3NDNdLFxyXG4gIFsxNzQzLjQ5MTgsIDQ1My42MjY5XSxcclxuICBbMTc0Ny4xMzIxLCA0NTYuOTI2OTddLFxyXG4gIFsxNzUwLjg0MzYsIDQ1Ni44NjI3Nl0sXHJcbiAgWzE3NDguMzYxLCA0NTEuMzgzMDZdLFxyXG4gIFsxNzQ2LjEwOSwgNDQ1LjA5MTc0XSxcclxuICBbMTc1My4yMzUxLCA0MzkuMTc1MDJdLFxyXG4gIFsxNzQ4Ljc4NTksIDQ0MC43MTQ5NF0sXHJcbiAgWzE3NDQuMTQ5NCwgNDM4Ljk2OTQ1XSxcclxuICBbMTczOS44MDY2LCA0MzcuMzY5MjNdLFxyXG4gIFsxNzM3LjY2MTUsIDQzMy41MDAzXSxcclxuICBbMTc0MS4zNTIsIDQzMC45OTA4XSxcclxuICBbMTc0NC43NTk2LCA0MzMuNTkwMzNdLFxyXG4gIFsxNzQ5LjAyMDgsIDQzNS4xNTg4N10sXHJcbiAgWzE3NTMuNDA2OSwgNDMzLjk1ODkyXSxcclxuICBbMTc1OC4xMDIyLCA0MzYuNjk4NThdLFxyXG4gIFsxNzU3LjgyNjMsIDQzMS44MTMzNV0sXHJcbiAgWzE3NjIuNzE0MiwgNDMyLjkzODA1XSxcclxuICBbMTc2My43NTc2LCA0MzguMDMwNjRdLFxyXG4gIFsxNzY3LjU1MiwgNDQyLjA1MTI3XSxcclxuICBbMTc2Ni41MDkyLCA0NDcuNzM5MjZdLFxyXG4gIFsxNzYwLjcwMTUsIDQ1Mi45NTk3OF0sXHJcbiAgWzE3NjAuMDk1NywgNDQ3LjgxODddLFxyXG4gIFsxNzYyLjgwMTksIDQ0My42NjE3NF0sXHJcbiAgWzE3NTguNTUwOCwgNDQxLjQ2NzYyXSxcclxuICBbMTc1NC43OTA4LCA0NDQuNDgxMDJdLFxyXG4gIFsxNzUwLjkyMzgsIDQ0Ni44NzE0Nl0sXHJcbiAgWzE3NTQuOTA2MiwgNDUwLjQyMTA4XSxcclxuICBbMTc2NC45ODY2LCA0NTYuOTY4MjNdLFxyXG4gIFsxNzY0LjI4MjUsIDQ2MS40NTYzXSxcclxuICBbMTc1OS40NDYsIDQ1OC4zNjddLFxyXG4gIFsxNzU1LjIyMzgsIDQ1NS4wNjQ4Ml0sXHJcbiAgWzE3NTMuOTg3NCwgNDU5LjkzMjA3XSxcclxuICBbMTc1Ni44MDcxLCA0NjIuODc0Ml0sXHJcbiAgWzE3NjAuMjYwMywgNDYzLjc4NDNdLFxyXG4gIFsxNzYzLjQzMDcsIDQ2Ni42NjMxOF0sXHJcbiAgWzE3NjIuNjgzNiwgNDcxLjA3NDQ2XSxcclxuICBbMTc2Mi41Mzc0LCA0NzUuMzE4MDhdLFxyXG4gIFsxNzY2LjQyNTMsIDQ3OC4wODAxNF0sXHJcbiAgWzE3NzEuNjk5NSwgNDc5LjgwNDg3XSxcclxuICBbMTc3Mi45NDYzLCA0ODUuMjE3ODZdLFxyXG4gIFsxNzY1LjI0NjMsIDQ4NC40NzM5N10sXHJcbiAgWzE3NTkuMjExMiwgNDgwLjUzNDZdLFxyXG4gIFsxNzU2LjkyMjIsIDQ3NC4wMzcxN10sXHJcbiAgWzE3NTguMTExMiwgNDY4LjYyMTkyXSxcclxuICBbMTc1My43ODMsIDQ2NS40MzM2NV0sXHJcbiAgWzE3NTAuMjI2MiwgNDYyLjg2Mzg2XSxcclxuICBbMTc0Ni4yMzI1LCA0NjIuOTY3XSxcclxuICBbMTc0My42MDIsIDQ1OS4xODQwMl0sXHJcbiAgWzE3MzkuNTM2LCA0NTcuNzYzNTVdLFxyXG4gIFsxNzM1LjEzMjIsIDQ1Ni42NDE1NF0sXHJcbiAgWzE3MjkuOTQ1OCwgNDU2LjY2Njg0XSxcclxuICBbMTcyNS40OTQ0LCA0NTguMTE1NTRdLFxyXG4gIFsxNzI2LjYxNTUsIDQ1Mi45ODM2XSxcclxuICBbMTcyMi4wMDQ0LCA0NTUuMjE0MV0sXHJcbiAgWzE3MjAuODI0MiwgNDU5LjQxMjM1XSxcclxuICBbMTcxNS45MjQ2LCA0NTkuOTUyMDNdLFxyXG4gIFsxNzE3LjI4MSwgNDU2LjE2OTE2XSxcclxuICBbMTcxOS4wNzQ1LCA0NjMuMDYzOV0sXHJcbiAgWzE3MjMuODMzNiwgNDYyLjkyMzUyXSxcclxuICBbMTcyNy45MzA5LCA0NjYuMzY3OF0sXHJcbiAgWzE3MzEuNTYxNCwgNDY4LjU3MzFdLFxyXG4gIFsxNzI4LjI4NzEsIDQ2MS44MTYyOF0sXHJcbiAgWzE3MzIuNDc3NywgNDYwLjIwOTIzXSxcclxuICBbMTczMi43NjIxLCA0NjQuNDc5N10sXHJcbiAgWzE3MzYuODg5NiwgNDYyLjAyMDk0XSxcclxuICBbMTc0MS4wMDU1LCA0NjMuNzcxNDJdLFxyXG4gIFsxNzM2LjU0OTcsIDQ2Ny42MDEzXSxcclxuICBbMTc0MC43NTE3LCA0NjkuNzc2NThdLFxyXG4gIFsxNzQ0LjMwNDksIDQ2Ny43MzE3XSxcclxuICBbMTc0OC41Mjc2LCA0NjguNDUwOV0sXHJcbiAgWzE3NTMuMjE2MSwgNDY5LjUwNjY1XSxcclxuICBbMTc1MC43OTYzLCA0NzMuNTc0NjVdLFxyXG4gIFsxNzQ1LjQ0NDUsIDQ3My44MDI1OF0sXHJcbiAgWzE3NDEuNDM2LCA0NzcuMTMwNzRdLFxyXG4gIFsxNzM3LjkxNDYsIDQ3My41MDY0NF0sXHJcbiAgWzE3MzMuNDA4MywgNDcyLjEzXSxcclxuICBbMTcyOC45MTM2LCA0NzIuNTg3NTJdLFxyXG4gIFsxNzI1LjM1OTQsIDQ3MC41MjMyXSxcclxuICBbMTcyNC45Mjk2LCA0NzUuMjM4MTZdLFxyXG4gIFsxNzI5LjQ0ODUsIDQ3Ny42NTgwMl0sXHJcbiAgWzE3MzMuNDQ2MywgNDc2LjI4Njc0XSxcclxuICBbMTczNi4xNTYsIDQ3OS41MDJdLFxyXG4gIFsxNzQwLjkyMTksIDQ4Mi43MjMyNF0sXHJcbiAgWzE3NDAuMTQ3NywgNDg4Ljk3ODE1XSxcclxuICBbMTczNi40NzYzLCA0OTUuMTUxNl0sXHJcbiAgWzE3NDEuODYxOSwgNDk2LjQxNzldLFxyXG4gIFsxNzQ1Ljc3NDQsIDQ5MS45Njg0OF0sXHJcbiAgWzE3NDYuMTM2LCA0ODUuOTEwMDNdLFxyXG4gIFsxNzQ2Ljk1MzcsIDQ4MC4wMzYzMl0sXHJcbiAgWzE3NTIuNTcxOSwgNDc4LjI4N10sXHJcbiAgWzE3NTMuMzc3OSwgNDg0LjA0NjMzXSxcclxuICBbMTc1OS4xMjIxLCA0ODguMjAxNjZdLFxyXG4gIFsxNzYzLjkxODcsIDQ5My4wMTYyNF0sXHJcbiAgWzE3NjkuMjI3OSwgNDg5LjkwMDYzXSxcclxuICBbMTc4Mi4zMjQyLCA0OTEuNDkxNjRdLFxyXG4gIFsxNzg1LjQyOTYsIDQ5Ni40MzY1XSxcclxuICBbMTc3OS40Nzc4LCA1MDcuMzU0NV0sXHJcbiAgWzE3ODMuMzE2OSwgNTAyLjk1NTg3XSxcclxuICBbMTc3OC42OTA4LCA0OTcuOTk3NzRdLFxyXG4gIFsxNzU3LjUwOTUsIDUyNS43Njg0XSxcclxuICBbMTc1Mi40MTQxLCA1MjQuMDM0MDZdLFxyXG4gIFsxNzQ3LjkzODQsIDUyMi4xMDUyXSxcclxuICBbMTc0OS40NzkyLCA0OTcuMjg0MjddLFxyXG4gIFsxNzU3LjczOCwgNTE5LjEzNzFdLFxyXG4gIFsxNzQ0Ljk5MjIsIDUxNi42ODQzXSxcclxuICBbMTczOC4zNzYzLCA1MTcuNzgwMzNdLFxyXG4gIFsxNzMxLjcyOTYsIDUxNy41MTIyXSxcclxuICBbMTcyMy4yMDA0LCA1MDQuNzY4NjVdLFxyXG4gIFsxNzE3LjE2MzcsIDUwNi43MTM4N10sXHJcbiAgWzE3MTMuMjEyNiwgNTAyLjA3NjFdLFxyXG4gIFsxNzA2Ljk2NTgsIDUwMC4zNjQ1Nl0sXHJcbiAgWzE3MDEuMjU1LCA0OTkuNjY5MjhdLFxyXG4gIFsxNzAwLjUwOSwgNTAzLjc3ODRdLFxyXG4gIFsxNjk1LjI4MDgsIDUwMS43NTRdLFxyXG4gIFsxNjk3LjI5MywgNDk2Ljg5OTFdLFxyXG4gIFsxNzAyLjg1MjUsIDQ5NS4xODgzNV0sXHJcbiAgWzE3MDcuNzk0NCwgNDk0LjE1MTY3XSxcclxuICBbMTcxMi45OTA3LCA0OTUuNDcyMV0sXHJcbiAgWzE3MTkuNTkxMSwgNDk4LjU1MDM4XSxcclxuICBbMTcyNi43NjM0LCA0OTguNjI0NzNdLFxyXG4gIFsxNzMwLjUzMTIsIDQ5NC40MjQzXSxcclxuICBbMTcyNC4yMjM2LCA0OTIuMjM0XSxcclxuICBbMTcxOC4yOTc2LCA0OTIuNzAxOV0sXHJcbiAgWzE3MTQuNjUwMSwgNDg5LjExNTk0XSxcclxuICBbMTcwOS42NDM4LCA0ODkuNDIyNV0sXHJcbiAgWzE3MTEuODI1MywgNDg1LjA4ODEzXSxcclxuICBbMTcxMy4wMTY4LCA0ODAuNDgwOTNdLFxyXG4gIFsxNzE3LjU4OTUsIDQ3OS41NzU5XSxcclxuICBbMTcxNi41OTQyLCA0ODMuOTkyOThdLFxyXG4gIFsxNzIwLjE3MTYsIDQ4Ny42NzA5XSxcclxuICBbMTcyMS40MzA1LCA0ODMuMDAzNjNdLFxyXG4gIFsxNzI1LjI3NzYsIDQ4Ni4wMDc5XSxcclxuICBbMTcyOS40Mjg3LCA0ODguNDI0MzhdLFxyXG4gIFsxNzM0LjQ2MDMsIDQ4OS43NjE1N10sXHJcbiAgWzE3MzUuMzk3NiwgNDg0LjcwMDNdLFxyXG4gIFsxNzMwLjYwNiwgNDgyLjcxNTAzXSxcclxuICBbMTcyNS45NDksIDQ4MC42Njg1OF0sXHJcbiAgWzE3MjEuODU0NSwgNDc4LjcwM10sXHJcbiAgWzE3MTkuNzczOSwgNDc1LjExODc0XSxcclxuICBbMTcyMC43NTY1LCA0NzEuMjk1MTRdLFxyXG4gIFsxNzIzLjQ1MTQsIDQ2Ny4wODQ0XSxcclxuICBbMTcxOS41NTU4LCA0NjcuMTA0ODNdLFxyXG4gIFsxNzE1Ljc0MzcsIDQ2NS4zMTE1Ml0sXHJcbiAgWzE3MTYuMTM5LCA0NjkuMjc2OTJdLFxyXG4gIFsxNzE1LjU5NDYsIDQ3Mi44NjQxNF0sXHJcbiAgWzE3MTUuMjIyMiwgNDc2LjQ4M10sXHJcbiAgWzE3MTEuNDYzNiwgNDc1Ljc4MDczXSxcclxuICBbMTcwOC45Mzc5LCA0NzIuMjgzNjZdLFxyXG4gIFsxNzEyLjAwMzMsIDQ3MC42NTM1XSxcclxuICBbMTcxMS45NTgzLCA0NjYuODU1MzJdLFxyXG4gIFsxNzEzLjE4NDMsIDQ2Mi43MzYxOF0sXHJcbiAgWzE3MTEuMDA1NCwgNDU5Ljc1ODM2XSxcclxuICBbMTcwNy40MjExLCA0NTguMTQ0MTNdLFxyXG4gIFsxNzA2LjEzMywgNDU0LjU4NzQ2XSxcclxuICBbMTcwMi4xOTIxLCA0NTUuOTY4NV0sXHJcbiAgWzE2OTcuNDE5NywgNDU0LjgzNzVdLFxyXG4gIFsxNjk5LjAwNzMsIDQ1OS4xNzI5NF0sXHJcbiAgWzE2OTQuNDY0MSwgNDU5LjA1NjU4XSxcclxuICBbMTY5Mi4zMzM3LCA0NTUuNjQzNjVdLFxyXG4gIFsxNjg3LjI3NjQsIDQ1NS42NTI4XSxcclxuICBbMTY4OS40NSwgNDU5Ljg3MDQ4XSxcclxuICBbMTY4NC42NjA1LCA0NTkuODg1MDddLFxyXG4gIFsxNjgyLjUyNzEsIDQ1Ni42MTYwM10sXHJcbiAgWzE2ODIuNzA2MywgNDUyLjc2ODJdLFxyXG4gIFsxNjg1LjkxNDEsIDQ1MC43OTEzNV0sXHJcbiAgWzE2OTAuMDg4NSwgNDUxLjg2MTY2XSxcclxuICBbMTY5NC4yMzE0LCA0NTEuMjEyOThdLFxyXG4gIFsxNjk4LjE5NzMsIDQ1MC4xODE1OF0sXHJcbiAgWzE3MDIuMDM0LCA0NTEuNDM4NDhdLFxyXG4gIFsxNzA2LjM1NjcsIDQ1MC4zNjAwNV0sXHJcbiAgWzE3MDQuNTU5NiwgNDQ2LjU5NjhdLFxyXG4gIFsxNzAwLjgxNTEsIDQ0Ni4zMzAwMl0sXHJcbiAgWzE2OTYuODU3NSwgNDQ2LjA5NjhdLFxyXG4gIFsxNjkzLjA0NDksIDQ0Ni44OTEzM10sXHJcbiAgWzE2ODQuODUyNSwgNDQ2LjYxMjVdLFxyXG4gIFsxNjgwLjYwOTksIDQ0Ny40OTkxNV0sXHJcbiAgWzE2NzguOTEzNSwgNDUwLjg3OTJdLFxyXG4gIFsxNjc3LjU3MzcsIDQ1NC43NTY0N10sXHJcbiAgWzE2NzguODcsIDQ1OS4wMTk2XSxcclxuICBbMTY3NS45NzA3LCA0NjIuNTMxNjhdLFxyXG4gIFsxNjczLjg4NjYsIDQ1OC4wODA5XSxcclxuICBbMTY2OS44MjY0LCA0NTkuMjE4MzJdLFxyXG4gIFsxNjcxLjM1ODIsIDQ2My41Nzc0XSxcclxuICBbMTY3NC4zMjIzLCA0NjcuMDIzMDddLFxyXG4gIFsxNjc4LjkzMDQsIDQ3MC4yMzY4XSxcclxuICBbMTY3OC42NTkyLCA0NjYuMzUzODJdLFxyXG4gIFsxNjgxLjA2NzYsIDQ2Mi45MDUwM10sXHJcbiAgWzE2ODUuNTE5LCA0NjMuNzc1NzNdLFxyXG4gIFsxNjg5LjAyMTUsIDQ2NC44Mzg4N10sXHJcbiAgWzE2OTIuNDY5NSwgNDYzLjI2MDZdLFxyXG4gIFsxNjk2LjQwODcsIDQ2Mi45NTY4XSxcclxuICBbMTcwMy4xNjMxLCA0NjAuMzYwMzJdLFxyXG4gIFsxNzA2LjM4OTUsIDQ2Mi40Njc0N10sXHJcbiAgWzE3MDkuNDI2MSwgNDYzLjk2NDk3XSxcclxuICBbMTcwNy42MjIzLCA0NjcuOTg3NjRdLFxyXG4gIFsxNzAzLjg0MTEsIDQ2NS45NTkxN10sXHJcbiAgWzE3MDAuMTcxOSwgNDY0LjAzMDc2XSxcclxuICBbMTcwMC4zMTg1LCA0NjguODc0MTVdLFxyXG4gIFsxNzA0LjI4NTMsIDQ3MC45NzQ1NV0sXHJcbiAgWzE3MDYuNzQ3LCA0NzUuMTQxNDVdLFxyXG4gIFsxNzAzLjEzMjcsIDQ3NS4zMTk1Ml0sXHJcbiAgWzE2OTkuNTU1MywgNDczLjY5MTk2XSxcclxuICBbMTcwMC4xMjg0LCA0NzguNDQ2MzhdLFxyXG4gIFsxNjk2LjAyNjUsIDQ3Ny43ODAyXSxcclxuICBbMTY5Ny40MzE0LCA0ODIuNDUxMzVdLFxyXG4gIFsxNjkzLjA4MDgsIDQ4NC4xMzUxXSxcclxuICBbMTY5Mi42MjcyLCA0ODAuMjAwMl0sXHJcbiAgWzE2ODguMDY0NywgNDgyLjAwNjUzXSxcclxuICBbMTY4OC42MDk2LCA0ODUuNTE0OV0sXHJcbiAgWzE2ODUuNDUyOSwgNDg4LjA0Nzk0XSxcclxuICBbMTY4My40ODczLCA0OTEuMTg1MDNdLFxyXG4gIFsxNjc5Ljk1ODUsIDQ5Mi45NDE3XSxcclxuICBbMTY3NC41NDU3LCA0OTguOTkwMDVdLFxyXG4gIFsxNjcwLjc5NTUsIDQ5OS45OTQyXSxcclxuICBbMTY2NS4xNjkxLCA1MDUuNzg1OThdLFxyXG4gIFsxNjY4Ljk5MzgsIDUwNC4wNTU4OF0sXHJcbiAgWzE2NzUuNDkzNSwgNTAzLjIyMzddLFxyXG4gIFsxNjc3LjU0NDcsIDUwNy4xNDg3NF0sXHJcbiAgWzE2NzMuNjM3NiwgNTEwLjQ1NTRdLFxyXG4gIFsxNjcyLjQ4ODUsIDUwNi4wMTkxXSxcclxuICBbMTY2OC43NzY0LCA1MDkuMjY3MjddLFxyXG4gIFsxNjY0LjU4MDgsIDUxMC4zNDY3NF0sXHJcbiAgWzE2NjEuMDY4NiwgNTA3Ljc4NzMyXSxcclxuICBbMTY1Ny4zNTE4LCA1MTAuODUwMzRdLFxyXG4gIFsxNjYwLjg1MjUsIDUxMi45MjhdLFxyXG4gIFsxNjU3LjA0MjIsIDUxNS42OTc4XSxcclxuICBbMTY2MC42Mjg0LCA1MTguMjUxNjVdLFxyXG4gIFsxNjU5LjczMjgsIDUyMy40NjcxNl0sXHJcbiAgWzE2NTQuNTUyNywgNTIzLjU0MzNdLFxyXG4gIFsxNjQ5LjMyNjQsIDUyMS45ODQyNV0sXHJcbiAgWzE2NDcuNjMzLCA1MjcuMTc3Ml0sXHJcbiAgWzE2NDYuMzgzOCwgNTMzLjA4NzNdLFxyXG4gIFsxNjQwLjY0OTksIDUzMi45MjcxXSxcclxuICBbMTY0Ni4xNzM2LCA1MzkuNjcwOTZdLFxyXG4gIFsxNjUxLjQ0NTQsIDUzNi40MTkwN10sXHJcbiAgWzE2NTIuNzk0MiwgNTQyLjgyODI1XSxcclxuICBbMTY2MC4xODYzLCA1NDEuNDI2OV0sXHJcbiAgWzE2NTcuODE2OSwgNTQ3LjAxNjI0XSxcclxuICBbMTY2MC4zNDQ2LCA1NTIuMTI0XSxcclxuICBbMTY2NS4zODQsIDU1NC42NzkxXSxcclxuICBbMTY2NS4xOTEzLCA1NjAuNTgwOF0sXHJcbiAgWzE2NjAuNzMwNSwgNTU4LjA4Mjc2XSxcclxuICBbMTY1NS43MDI0LCA1NTQuNzMwNDddLFxyXG4gIFsxNjUyLjY0NTQsIDU1MC4xMDhdLFxyXG4gIFsxNjQ3Ljg2OTMsIDU0Ni44NjVdLFxyXG4gIFsxNjQxLjQ1NzYsIDU1My4wNjY0N10sXHJcbiAgWzE2NDIuNDczLCA1NDguNTA2N10sXHJcbiAgWzE2NDIuMzY3NywgNTQzLjU0ODFdLFxyXG4gIFsxNjQ2LjU4MjUsIDU1Mi44MzU4XSxcclxuICBbMTY1Ni4yNDQ2LCA1NTkuNjg3NDRdLFxyXG4gIFsxNjUxLjk1OTIsIDU2MC43NDRdLFxyXG4gIFsxNjUwLjY1MzYsIDU1NS41MDE3XSxcclxuICBbMTY0Ny44MjI2LCA1NTkuNDExMTNdXHJcbl07IiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4uLy4uL2NvcmUvQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNrZXRjaCB2YXJpYWJsZXNcclxuICAqL1xyXG4gIFVzZVBlckJyYW5jaENvbG9yczogZmFsc2UsXHJcblxyXG5cclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdDbG9zZWQnLCAgICAgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgICAgICAgLy8gbGVuZ3RoIG9mIGVhY2ggYnJhbmNoIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiA1MCwgICAgICAgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXR0cmFjdG9yIHRoYXQgYXR0cmFjdHMgbm9kZXNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdHRyYWN0b3IgYW5kIG5vZGVzIHdoZW4gYnJhbmNoZXMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgIC8vIGluaXRpYWwgcGF1c2UvdW5wYXVzZSBzdGF0ZVxyXG4gIEVuYWJsZUNhbmFsaXphdGlvbjogdHJ1ZSwgICAgICAvLyB0dXJucyBvbi9vZmYgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb24gKGxpbmUgc2VnbWVudCB0aGlja2VuaW5nKVxyXG4gIEVuYWJsZU9wYWNpdHlCbGVuZGluZzogZmFsc2UsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93QXR0cmFjdG9yczogdHJ1ZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93Tm9kZXM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbidcclxuICBTaG93VGlwczogZmFsc2UsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAneidcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IHRydWUsICAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnbydcclxuXHJcbiAgLy8gTW9kZXNcclxuICBSZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyBicmFuY2ggc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogRGFyayxcclxuXHJcbiAgLy8gTGluZSB0aGlja25lc3Nlc1xyXG4gIEJyYW5jaFRoaWNrbmVzczogMSxcclxuICBUaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAxXHJcbn0iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgTm9kZSBmcm9tICcuLi8uLi9jb3JlL05vZGUnO1xyXG5pbXBvcnQgQXR0cmFjdG9yIGZyb20gJy4uLy4uL2NvcmUvQXR0cmFjdG9yJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi4vLi4vY29yZS9QYXRoJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9TZXR0aW5ncyc7XHJcbmltcG9ydCB7IEdyZWVrU3RhdHVlIH0gZnJvbSAnLi9BdHRyYWN0b3JQYXR0ZXJucyc7XHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxubGV0IHNob3dIZWxwID0gZmFsc2U7XHJcblxyXG4vLyBDcmVhdGUgaW5pdGlhbCBjb25kaXRpb25zIGZvciBzaW11bGF0aW9uXHJcbmxldCBzZXR1cCA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIGNhbnZhcyBhbmQgY29udGV4dFxyXG4gIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2V0Y2gnKTtcclxuICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBzaW11bGF0aW9uIG9iamVjdFxyXG4gIG5ldHdvcmsgPSBuZXcgTmV0d29yayhjdHgsIFNldHRpbmdzKTtcclxuXHJcbiAgLy8gQWRkIHRoZSBib3VuZHMsIGF0dHJhY3RvcnMsIGFuZCByb290IG5vZGVzXHJcbiAgcmVzZXROZXR3b3JrKCk7XHJcblxyXG4gIC8vIFNldCB1cCBjb21tb24ga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbGlzdGVuZXJzXHJcbiAgc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yayk7XHJcblxyXG4gIC8vIEJlZ2luIGFuaW1hdGlvbiBsb29wXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbmxldCByZXNldE5ldHdvcmsgPSAoKSA9PiB7XHJcbiAgbmV0d29yay5yZXNldCgpO1xyXG4gIGFkZEF0dHJhY3RvcnMoKTtcclxuICBhZGRSb290Tm9kZXMoKTtcclxufVxyXG5cclxuICBsZXQgYWRkQXR0cmFjdG9ycyA9ICgpID0+IHtcclxuICAgIGxldCBhdHRyYWN0b3JzID0gW107XHJcblxyXG4gICAgZm9yKGxldCBjb29yZHMgb2YgR3JlZWtTdGF0dWUpIHtcclxuICAgICAgYXR0cmFjdG9ycy5wdXNoKFxyXG4gICAgICAgIG5ldyBBdHRyYWN0b3IoXHJcbiAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgY29vcmRzWzBdKjEuNSAtIDEzMDAsXHJcbiAgICAgICAgICAgIGNvb3Jkc1sxXSoxLjUgLSAyMDBcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXR3b3JrLmF0dHJhY3RvcnMgPSBhdHRyYWN0b3JzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgbGV0IGFkZFJvb3ROb2RlcyA9ICgpID0+IHtcclxuICAgIG5ldHdvcmsuYWRkTm9kZShcclxuICAgICAgbmV3IE5vZGUoXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoLzIgLSA0NDAsXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIDEwMFxyXG4gICAgICAgICksXHJcbiAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIFNldHRpbmdzXHJcbiAgICAgIClcclxuICAgICk7XHJcblxyXG4gICAgLy8gbmV0d29yay5hZGROb2RlKFxyXG4gICAgLy8gICBuZXcgTm9kZShcclxuICAgIC8vICAgICBudWxsLFxyXG4gICAgLy8gICAgIG5ldyBWZWMyKFxyXG4gICAgLy8gICAgICAgd2luZG93LmlubmVyV2lkdGgvMiArIDIwMCxcclxuICAgIC8vICAgICAgIHdpbmRvdy5pbm5lckhlaWdodC8yXHJcbiAgICAvLyAgICAgKSxcclxuICAgIC8vICAgICBmYWxzZSxcclxuICAgIC8vICAgICBjdHgsXHJcbiAgICAvLyAgICAgU2V0dGluZ3NcclxuICAgIC8vICAgKVxyXG4gICAgLy8gKTtcclxuICB9XHJcblxyXG5sZXQgZHJhd1RleHQgPSAoKSA9PiB7XHJcbiAgbGV0IHRleHQgPSBbXHJcbiAgICAnQXR0cmFjdG9ycyBwbGFjZWQgYmFzZWQgb24gaW1hZ2UgZGF0YS4nLFxyXG4gICAgJycsXHJcbiAgICAnMSA9IHNxdWFyZScsXHJcbiAgICAnJyxcclxuICAgICdTcGFjZSA9IHRvZ2dsZSBwYXVzZScsXHJcbiAgICAnciA9IHJlc2V0JyxcclxuICAgICdjID0gdG9nZ2xlIGNhbmFsaXphdGlvbicsXHJcbiAgICAncCA9IHRvZ2dsZSBvcGFjaXR5IGJsZW5kaW5nJyxcclxuICAgICd2ID0gdG9nZ2xlIGJyYW5jaCB2aXNpYmlsaXR5JyxcclxuICAgICdzID0gdG9nZ2xlIGF0dHJhY3RvciB2aXNpYmlsaXR5JyxcclxuICAgICdhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZXMnLFxyXG4gICAgJ2sgPSB0b2dnbGUga2lsbCB6b25lcycsXHJcbiAgICAndCA9IHRvZ2dsZSB0aXBzJyxcclxuICAgICdpID0gdG9nZ2xlIGluZmx1ZW5jZSBsaW5lcycsXHJcbiAgICAnaCA9IHRvZ2dsZSB0aGlzIGhlbHAgdGV4dCdcclxuICBdO1xyXG5cclxuICBjdHguZm9udCA9ICdib2xkIDI0cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJztcclxuICBjdHguZmlsbFRleHQoJ0ltYWdlcycsIDIwLCA0MCk7XHJcblxyXG4gIGN0eC5mb250ID0gJzE2cHggc2Fucy1zZXJpZic7XHJcbiAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LC41KSc7XHJcbiAgZm9yKGxldCBpPTA7IGk8dGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KHRleHRbaV0sIDIwLCAyMippICsgODApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICBpZihzaG93SGVscCkge1xyXG4gICAgZHJhd1RleHQoKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xyXG59XHJcblxyXG4vLyBLZXkgY29tbWFuZHMgc3BlY2lmaWMgdG8gdGhpcyBza2V0Y2hcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gIHN3aXRjaChlLmtleSkge1xyXG4gICAgLy8gciA9IHJlc2V0IHNpbXVsYXRpb24gYnkgcmVpbml0aWFsaXppbmcgdGhlIG5ldHdvcmsgd2l0aCBpbml0aWFsIGNvbmRpdGlvbnNcclxuICAgIGNhc2UgJ3InOlxyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgLy8gaCA9IHRvZ2dsZSBoZWxwIHRleHRcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICBzaG93SGVscCA9ICFzaG93SGVscDtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnMSc6XHJcbiAgICAgIGN1cnJlbnRJbWFnZSA9IFNRVUFSRTtcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLy8gS2ljayBvZmYgdGhlIGFwcGxpY2F0aW9uXHJcbnNldHVwKCk7IiwiKGZ1bmN0aW9uKGEsYil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxiKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzKWIoKTtlbHNle2IoKSxhLkZpbGVTYXZlcj17ZXhwb3J0czp7fX0uZXhwb3J0c319KSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gYihhLGIpe3JldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBiP2I9e2F1dG9Cb206ITF9Olwib2JqZWN0XCIhPXR5cGVvZiBiJiYoY29uc29sZS53YXJuKFwiRGVwcmVjYXRlZDogRXhwZWN0ZWQgdGhpcmQgYXJndW1lbnQgdG8gYmUgYSBvYmplY3RcIiksYj17YXV0b0JvbTohYn0pLGIuYXV0b0JvbSYmL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYS50eXBlKT9uZXcgQmxvYihbXCJcXHVGRUZGXCIsYV0se3R5cGU6YS50eXBlfSk6YX1mdW5jdGlvbiBjKGIsYyxkKXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYiksZS5yZXNwb25zZVR5cGU9XCJibG9iXCIsZS5vbmxvYWQ9ZnVuY3Rpb24oKXthKGUucmVzcG9uc2UsYyxkKX0sZS5vbmVycm9yPWZ1bmN0aW9uKCl7Y29uc29sZS5lcnJvcihcImNvdWxkIG5vdCBkb3dubG9hZCBmaWxlXCIpfSxlLnNlbmQoKX1mdW5jdGlvbiBkKGEpe3ZhciBiPW5ldyBYTUxIdHRwUmVxdWVzdDtiLm9wZW4oXCJIRUFEXCIsYSwhMSk7dHJ5e2Iuc2VuZCgpfWNhdGNoKGEpe31yZXR1cm4gMjAwPD1iLnN0YXR1cyYmMjk5Pj1iLnN0YXR1c31mdW5jdGlvbiBlKGEpe3RyeXthLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKSl9Y2F0Y2goYyl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJNb3VzZUV2ZW50c1wiKTtiLmluaXRNb3VzZUV2ZW50KFwiY2xpY2tcIiwhMCwhMCx3aW5kb3csMCwwLDAsODAsMjAsITEsITEsITEsITEsMCxudWxsKSxhLmRpc3BhdGNoRXZlbnQoYil9fXZhciBmPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy53aW5kb3c9PT13aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PXR5cGVvZiBzZWxmJiZzZWxmLnNlbGY9PT1zZWxmP3NlbGY6XCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsLmdsb2JhbD09PWdsb2JhbD9nbG9iYWw6dm9pZCAwLGE9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGU/ZnVuY3Rpb24oYixnLGgpe3ZhciBpPWYuVVJMfHxmLndlYmtpdFVSTCxqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2c9Z3x8Yi5uYW1lfHxcImRvd25sb2FkXCIsai5kb3dubG9hZD1nLGoucmVsPVwibm9vcGVuZXJcIixcInN0cmluZ1wiPT10eXBlb2YgYj8oai5ocmVmPWIsai5vcmlnaW49PT1sb2NhdGlvbi5vcmlnaW4/ZShqKTpkKGouaHJlZik/YyhiLGcsaCk6ZShqLGoudGFyZ2V0PVwiX2JsYW5rXCIpKTooai5ocmVmPWkuY3JlYXRlT2JqZWN0VVJMKGIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtpLnJldm9rZU9iamVjdFVSTChqLmhyZWYpfSw0RTQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGopfSwwKSl9OlwibXNTYXZlT3JPcGVuQmxvYlwiaW4gbmF2aWdhdG9yP2Z1bmN0aW9uKGYsZyxoKXtpZihnPWd8fGYubmFtZXx8XCJkb3dubG9hZFwiLFwic3RyaW5nXCIhPXR5cGVvZiBmKW5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGIoZixoKSxnKTtlbHNlIGlmKGQoZikpYyhmLGcsaCk7ZWxzZXt2YXIgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtpLmhyZWY9ZixpLnRhcmdldD1cIl9ibGFua1wiLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlKGkpfSl9fTpmdW5jdGlvbihhLGIsZCxlKXtpZihlPWV8fG9wZW4oXCJcIixcIl9ibGFua1wiKSxlJiYoZS5kb2N1bWVudC50aXRsZT1lLmRvY3VtZW50LmJvZHkuaW5uZXJUZXh0PVwiZG93bmxvYWRpbmcuLi5cIiksXCJzdHJpbmdcIj09dHlwZW9mIGEpcmV0dXJuIGMoYSxiLGQpO3ZhciBnPVwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI9PT1hLnR5cGUsaD0vY29uc3RydWN0b3IvaS50ZXN0KGYuSFRNTEVsZW1lbnQpfHxmLnNhZmFyaSxpPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtpZigoaXx8ZyYmaCkmJlwib2JqZWN0XCI9PXR5cGVvZiBGaWxlUmVhZGVyKXt2YXIgaj1uZXcgRmlsZVJlYWRlcjtqLm9ubG9hZGVuZD1mdW5jdGlvbigpe3ZhciBhPWoucmVzdWx0O2E9aT9hOmEucmVwbGFjZSgvXmRhdGE6W147XSo7LyxcImRhdGE6YXR0YWNobWVudC9maWxlO1wiKSxlP2UubG9jYXRpb24uaHJlZj1hOmxvY2F0aW9uPWEsZT1udWxsfSxqLnJlYWRBc0RhdGFVUkwoYSl9ZWxzZXt2YXIgaz1mLlVSTHx8Zi53ZWJraXRVUkwsbD1rLmNyZWF0ZU9iamVjdFVSTChhKTtlP2UubG9jYXRpb249bDpsb2NhdGlvbi5ocmVmPWwsZT1udWxsLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJldm9rZU9iamVjdFVSTChsKX0sNEU0KX19KTtmLnNhdmVBcz1hLnNhdmVBcz1hLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJihtb2R1bGUuZXhwb3J0cz1hKX0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1GaWxlU2F2ZXIubWluLmpzLm1hcCIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsImltcG9ydCB0b1BhdGggZnJvbSAnLi90b1BhdGgnO1xuaW1wb3J0IHRvUG9pbnRzIGZyb20gJy4vdG9Qb2ludHMnO1xuaW1wb3J0IHZhbGlkIGZyb20gJy4vdmFsaWQnO1xuXG5leHBvcnQgeyB0b1BhdGgsIHRvUG9pbnRzLCB2YWxpZCB9OyIsImltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcblxudmFyIHBvaW50c1RvRCA9IGZ1bmN0aW9uIHBvaW50c1RvRChwKSB7XG4gIHZhciBkID0gJyc7XG4gIHZhciBpID0gMDtcbiAgdmFyIGZpcnN0UG9pbnQgPSB2b2lkIDA7XG5cbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgdmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcFtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgIHZhciBwb2ludCA9IF9zdGVwLnZhbHVlO1xuICAgICAgdmFyIF9wb2ludCRjdXJ2ZSA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgIGN1cnZlID0gX3BvaW50JGN1cnZlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9wb2ludCRjdXJ2ZSxcbiAgICAgICAgICBtb3ZlVG8gPSBwb2ludC5tb3ZlVG8sXG4gICAgICAgICAgeCA9IHBvaW50LngsXG4gICAgICAgICAgeSA9IHBvaW50Lnk7XG5cbiAgICAgIHZhciBpc0ZpcnN0UG9pbnQgPSBpID09PSAwIHx8IG1vdmVUbztcbiAgICAgIHZhciBpc0xhc3RQb2ludCA9IGkgPT09IHAubGVuZ3RoIC0gMSB8fCBwW2kgKyAxXS5tb3ZlVG87XG4gICAgICB2YXIgcHJldlBvaW50ID0gaSA9PT0gMCA/IG51bGwgOiBwW2kgLSAxXTtcblxuICAgICAgaWYgKGlzRmlyc3RQb2ludCkge1xuICAgICAgICBmaXJzdFBvaW50ID0gcG9pbnQ7XG5cbiAgICAgICAgaWYgKCFpc0xhc3RQb2ludCkge1xuICAgICAgICAgIGQgKz0gJ00nICsgeCArICcsJyArIHk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY3VydmUpIHtcbiAgICAgICAgc3dpdGNoIChjdXJ2ZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSAnYXJjJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmUyID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRsYXJnZUFyID0gX3BvaW50JGN1cnZlMi5sYXJnZUFyY0ZsYWcsXG4gICAgICAgICAgICAgICAgbGFyZ2VBcmNGbGFnID0gX3BvaW50JGN1cnZlMiRsYXJnZUFyID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRsYXJnZUFyLFxuICAgICAgICAgICAgICAgIHJ4ID0gX3BvaW50JGN1cnZlMi5yeCxcbiAgICAgICAgICAgICAgICByeSA9IF9wb2ludCRjdXJ2ZTIucnksXG4gICAgICAgICAgICAgICAgX3BvaW50JGN1cnZlMiRzd2VlcEZsID0gX3BvaW50JGN1cnZlMi5zd2VlcEZsYWcsXG4gICAgICAgICAgICAgICAgc3dlZXBGbGFnID0gX3BvaW50JGN1cnZlMiRzd2VlcEZsID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiRzd2VlcEZsLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9IF9wb2ludCRjdXJ2ZTIueEF4aXNSb3RhdGlvbixcbiAgICAgICAgICAgICAgICB4QXhpc1JvdGF0aW9uID0gX3BvaW50JGN1cnZlMiR4QXhpc1JvID09PSB1bmRlZmluZWQgPyAwIDogX3BvaW50JGN1cnZlMiR4QXhpc1JvO1xuXG4gICAgICAgICAgICBkICs9ICdBJyArIHJ4ICsgJywnICsgcnkgKyAnLCcgKyB4QXhpc1JvdGF0aW9uICsgJywnICsgbGFyZ2VBcmNGbGFnICsgJywnICsgc3dlZXBGbGFnICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjdWJpYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMyA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIGN4MSA9IF9wb2ludCRjdXJ2ZTMueDEsXG4gICAgICAgICAgICAgICAgY3kxID0gX3BvaW50JGN1cnZlMy55MSxcbiAgICAgICAgICAgICAgICBjeDIgPSBfcG9pbnQkY3VydmUzLngyLFxuICAgICAgICAgICAgICAgIGN5MiA9IF9wb2ludCRjdXJ2ZTMueTI7XG5cbiAgICAgICAgICAgIGQgKz0gJ0MnICsgY3gxICsgJywnICsgY3kxICsgJywnICsgY3gyICsgJywnICsgY3kyICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdxdWFkcmF0aWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTQgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBxeDEgPSBfcG9pbnQkY3VydmU0LngxLFxuICAgICAgICAgICAgICAgIHF5MSA9IF9wb2ludCRjdXJ2ZTQueTE7XG5cbiAgICAgICAgICAgIGQgKz0gJ1EnICsgcXgxICsgJywnICsgcXkxICsgJywnICsgeCArICcsJyArIHk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0xhc3RQb2ludCAmJiB4ID09PSBmaXJzdFBvaW50LnggJiYgeSA9PT0gZmlyc3RQb2ludC55KSB7XG4gICAgICAgICAgZCArPSAnWic7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICBkICs9ICdaJztcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LnggJiYgeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnTCcgKyB4ICsgJywnICsgeTtcbiAgICAgIH0gZWxzZSBpZiAoeCAhPT0gcHJldlBvaW50LngpIHtcbiAgICAgICAgZCArPSAnSCcgKyB4O1xuICAgICAgfSBlbHNlIGlmICh5ICE9PSBwcmV2UG9pbnQueSkge1xuICAgICAgICBkICs9ICdWJyArIHk7XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgX2l0ZXJhdG9yLnJldHVybigpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2RpZEl0ZXJhdG9yRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGQ7XG59O1xuXG52YXIgdG9QYXRoID0gZnVuY3Rpb24gdG9QYXRoKHMpIHtcbiAgdmFyIGlzUG9pbnRzID0gQXJyYXkuaXNBcnJheShzKTtcbiAgdmFyIGlzR3JvdXAgPSBpc1BvaW50cyA/IEFycmF5LmlzQXJyYXkoc1swXSkgOiBzLnR5cGUgPT09ICdnJztcbiAgdmFyIHBvaW50cyA9IGlzUG9pbnRzID8gcyA6IGlzR3JvdXAgPyBzLnNoYXBlcy5tYXAoZnVuY3Rpb24gKHNocCkge1xuICAgIHJldHVybiB0b1BvaW50cyhzaHApO1xuICB9KSA6IHRvUG9pbnRzKHMpO1xuXG4gIGlmIChpc0dyb3VwKSB7XG4gICAgcmV0dXJuIHBvaW50cy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICAgIHJldHVybiBwb2ludHNUb0QocCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzVG9EKHBvaW50cyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1BhdGg7IiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgdG9Qb2ludHMgPSBmdW5jdGlvbiB0b1BvaW50cyhfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWyd0eXBlJ10pO1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUNpcmNsZShwcm9wcyk7XG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUVsbGlwc2UocHJvcHMpO1xuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21MaW5lKHByb3BzKTtcbiAgICBjYXNlICdwYXRoJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUGF0aChwcm9wcyk7XG4gICAgY2FzZSAncG9seWdvbic6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlnb24ocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUG9seWxpbmUocHJvcHMpO1xuICAgIGNhc2UgJ3JlY3QnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0KHByb3BzKTtcbiAgICBjYXNlICdnJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tRyhwcm9wcyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IGEgdmFsaWQgc2hhcGUgdHlwZScpO1xuICB9XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUNpcmNsZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21DaXJjbGUoX3JlZjIpIHtcbiAgdmFyIGN4ID0gX3JlZjIuY3gsXG4gICAgICBjeSA9IF9yZWYyLmN5LFxuICAgICAgciA9IF9yZWYyLnI7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHIsIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gciwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByLCByeTogciwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUVsbGlwc2UgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRWxsaXBzZShfcmVmMykge1xuICB2YXIgY3ggPSBfcmVmMy5jeCxcbiAgICAgIGN5ID0gX3JlZjMuY3ksXG4gICAgICByeCA9IF9yZWYzLnJ4LFxuICAgICAgcnkgPSBfcmVmMy5yeTtcblxuICByZXR1cm4gW3sgeDogY3gsIHk6IGN5IC0gcnksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IGN4LCB5OiBjeSArIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH0sIHsgeDogY3gsIHk6IGN5IC0gcnksIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH0gfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUxpbmUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tTGluZShfcmVmNCkge1xuICB2YXIgeDEgPSBfcmVmNC54MSxcbiAgICAgIHgyID0gX3JlZjQueDIsXG4gICAgICB5MSA9IF9yZWY0LnkxLFxuICAgICAgeTIgPSBfcmVmNC55MjtcblxuICByZXR1cm4gW3sgeDogeDEsIHk6IHkxLCBtb3ZlVG86IHRydWUgfSwgeyB4OiB4MiwgeTogeTIgfV07XG59O1xuXG52YXIgdmFsaWRDb21tYW5kcyA9IC9bTW1MbEhoVnZDY1NzUXFUdEFhWnpdL2c7XG5cbnZhciBjb21tYW5kTGVuZ3RocyA9IHtcbiAgQTogNyxcbiAgQzogNixcbiAgSDogMSxcbiAgTDogMixcbiAgTTogMixcbiAgUTogNCxcbiAgUzogNCxcbiAgVDogMixcbiAgVjogMSxcbiAgWjogMFxufTtcblxudmFyIHJlbGF0aXZlQ29tbWFuZHMgPSBbJ2EnLCAnYycsICdoJywgJ2wnLCAnbScsICdxJywgJ3MnLCAndCcsICd2J107XG5cbnZhciBpc1JlbGF0aXZlID0gZnVuY3Rpb24gaXNSZWxhdGl2ZShjb21tYW5kKSB7XG4gIHJldHVybiByZWxhdGl2ZUNvbW1hbmRzLmluZGV4T2YoY29tbWFuZCkgIT09IC0xO1xufTtcblxudmFyIG9wdGlvbmFsQXJjS2V5cyA9IFsneEF4aXNSb3RhdGlvbicsICdsYXJnZUFyY0ZsYWcnLCAnc3dlZXBGbGFnJ107XG5cbnZhciBnZXRDb21tYW5kcyA9IGZ1bmN0aW9uIGdldENvbW1hbmRzKGQpIHtcbiAgcmV0dXJuIGQubWF0Y2godmFsaWRDb21tYW5kcyk7XG59O1xuXG52YXIgZ2V0UGFyYW1zID0gZnVuY3Rpb24gZ2V0UGFyYW1zKGQpIHtcbiAgcmV0dXJuIGQuc3BsaXQodmFsaWRDb21tYW5kcykubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvWzAtOV0rLS9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0uc2xpY2UoMCwgLTEpICsgJyAtJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYucmVwbGFjZSgvXFwuWzAtOV0rL2csIGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbSArICcgJztcbiAgICB9KTtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5sZW5ndGggPiAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdi5zcGxpdCgvWyAsXSsvKS5tYXAocGFyc2VGbG9hdCkuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICByZXR1cm4gIWlzTmFOKG4pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUGF0aCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21QYXRoKF9yZWY1KSB7XG4gIHZhciBkID0gX3JlZjUuZDtcblxuICB2YXIgY29tbWFuZHMgPSBnZXRDb21tYW5kcyhkKTtcbiAgdmFyIHBhcmFtcyA9IGdldFBhcmFtcyhkKTtcblxuICB2YXIgcG9pbnRzID0gW107XG5cbiAgdmFyIG1vdmVUbyA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjb21tYW5kID0gY29tbWFuZHNbaV07XG4gICAgdmFyIHVwcGVyQ2FzZUNvbW1hbmQgPSBjb21tYW5kLnRvVXBwZXJDYXNlKCk7XG4gICAgdmFyIGNvbW1hbmRMZW5ndGggPSBjb21tYW5kTGVuZ3Roc1t1cHBlckNhc2VDb21tYW5kXTtcbiAgICB2YXIgcmVsYXRpdmUgPSBpc1JlbGF0aXZlKGNvbW1hbmQpO1xuXG4gICAgaWYgKGNvbW1hbmRMZW5ndGggPiAwKSB7XG4gICAgICB2YXIgY29tbWFuZFBhcmFtcyA9IHBhcmFtcy5zaGlmdCgpO1xuICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjb21tYW5kUGFyYW1zLmxlbmd0aCAvIGNvbW1hbmRMZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaXRlcmF0aW9uczsgaisrKSB7XG4gICAgICAgIHZhciBwcmV2UG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdIHx8IHsgeDogMCwgeTogMCB9O1xuXG4gICAgICAgIHN3aXRjaCAodXBwZXJDYXNlQ29tbWFuZCkge1xuICAgICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgICAgdmFyIHggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICAgICAgICBtb3ZlVG8gPSB7IHg6IHgsIHk6IHkgfTtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5LCBtb3ZlVG86IHRydWUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwb2ludHMucHVzaCh7IHg6IHgsIHk6IHkgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnTCc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiBwcmV2UG9pbnQueVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnVic6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIHg6IHByZXZQb2ludC54LFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXJjJyxcbiAgICAgICAgICAgICAgICByeDogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHJ5OiBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbjogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZzogY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gb3B0aW9uYWxBcmNLZXlzW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBrID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXVsnY3VydmUnXVtrXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgX2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICBfaXRlcmF0b3JFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uICYmIF9pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAgICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBfaXRlcmF0b3JFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3ViaWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHgyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkyOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgdmFyIHN4MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kyID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciBzeCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3kgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgZGlmZiA9IHt9O1xuXG4gICAgICAgICAgICB2YXIgc3gxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHN5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ2N1YmljJykge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhwcmV2UG9pbnQueCAtIHByZXZQb2ludC5jdXJ2ZS54Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50LnggPCBwcmV2UG9pbnQuY3VydmUueDIgPyBwcmV2UG9pbnQueCAtIGRpZmYueCA6IHByZXZQb2ludC54ICsgZGlmZi54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MiA/IHByZXZQb2ludC55IC0gZGlmZi55IDogcHJldlBvaW50LnkgKyBkaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaWZmLnggPSBNYXRoLmFicyhzeCAtIHN4Mik7XG4gICAgICAgICAgICAgIGRpZmYueSA9IE1hdGguYWJzKHN5IC0gc3kyKTtcbiAgICAgICAgICAgICAgc3gxID0gcHJldlBvaW50Lng7XG4gICAgICAgICAgICAgIHN5MSA9IHByZXZQb2ludC55O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7IGN1cnZlOiB7IHR5cGU6ICdjdWJpYycsIHgxOiBzeDEsIHkxOiBzeTEsIHgyOiBzeDIsIHkyOiBzeTIgfSwgeDogc3gsIHk6IHN5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1EnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICBjdXJ2ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdxdWFkcmF0aWMnLFxuICAgICAgICAgICAgICAgIHgxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHkxOiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHg6IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCksXG4gICAgICAgICAgICAgIHk6IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgdmFyIHR4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB0eSA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciB0eDEgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdHkxID0gdm9pZCAwO1xuXG4gICAgICAgICAgICBpZiAocHJldlBvaW50LmN1cnZlICYmIHByZXZQb2ludC5jdXJ2ZS50eXBlID09PSAncXVhZHJhdGljJykge1xuICAgICAgICAgICAgICB2YXIgX2RpZmYgPSB7XG4gICAgICAgICAgICAgICAgeDogTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDEpLFxuICAgICAgICAgICAgICAgIHk6IE1hdGguYWJzKHByZXZQb2ludC55IC0gcHJldlBvaW50LmN1cnZlLnkxKVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngxID8gcHJldlBvaW50LnggLSBfZGlmZi54IDogcHJldlBvaW50LnggKyBfZGlmZi54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueSA8IHByZXZQb2ludC5jdXJ2ZS55MSA/IHByZXZQb2ludC55IC0gX2RpZmYueSA6IHByZXZQb2ludC55ICsgX2RpZmYueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHR4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICB0eTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAncXVhZHJhdGljJywgeDE6IHR4MSwgeTE6IHR5MSB9LCB4OiB0eCwgeTogdHkgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgaWYgKF9wcmV2UG9pbnQueCAhPT0gbW92ZVRvLnggfHwgX3ByZXZQb2ludC55ICE9PSBtb3ZlVG8ueSkge1xuICAgICAgICBwb2ludHMucHVzaCh7IHg6IG1vdmVUby54LCB5OiBtb3ZlVG8ueSB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5Z29uID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlnb24oX3JlZjYpIHtcbiAgdmFyIHBvaW50cyA9IF9yZWY2LnBvaW50cztcblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvaW50cyh7IGNsb3NlZDogdHJ1ZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvbHlsaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKF9yZWY3KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNy5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IGZhbHNlLCBwb2ludHM6IHBvaW50cyB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9pbnRzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVBvaW50cyhfcmVmOCkge1xuICB2YXIgY2xvc2VkID0gX3JlZjguY2xvc2VkLFxuICAgICAgcG9pbnRzID0gX3JlZjgucG9pbnRzO1xuXG4gIHZhciBudW1iZXJzID0gcG9pbnRzLnNwbGl0KC9bXFxzLF0rLykubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobik7XG4gIH0pO1xuXG4gIHZhciBwID0gbnVtYmVycy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcG9pbnQsIGkpIHtcbiAgICBpZiAoaSAlIDIgPT09IDApIHtcbiAgICAgIGFyci5wdXNoKHsgeDogcG9pbnQgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyclsoaSAtIDEpIC8gMl0ueSA9IHBvaW50O1xuICAgIH1cblxuICAgIHJldHVybiBhcnI7XG4gIH0sIFtdKTtcblxuICBpZiAoY2xvc2VkKSB7XG4gICAgcC5wdXNoKF9leHRlbmRzKHt9LCBwWzBdKSk7XG4gIH1cblxuICBwWzBdLm1vdmVUbyA9IHRydWU7XG5cbiAgcmV0dXJuIHA7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3QgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUmVjdChfcmVmOSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjkuaGVpZ2h0LFxuICAgICAgcnggPSBfcmVmOS5yeCxcbiAgICAgIHJ5ID0gX3JlZjkucnksXG4gICAgICB3aWR0aCA9IF9yZWY5LndpZHRoLFxuICAgICAgeCA9IF9yZWY5LngsXG4gICAgICB5ID0gX3JlZjkueTtcblxuICBpZiAocnggfHwgcnkpIHtcbiAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKHtcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgcng6IHJ4IHx8IHJ5LFxuICAgICAgcnk6IHJ5IHx8IHJ4LFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tQmFzaWNSZWN0KHsgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeSB9KTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tQmFzaWNSZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdChfcmVmMTApIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMC5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aCxcbiAgICAgIHggPSBfcmVmMTAueCxcbiAgICAgIHkgPSBfcmVmMTAueTtcblxuICByZXR1cm4gW3sgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3RXaXRoQ29ybmVyUmFkaXVzKF9yZWYxMSkge1xuICB2YXIgaGVpZ2h0ID0gX3JlZjExLmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjExLnJ4LFxuICAgICAgcnkgPSBfcmVmMTEucnksXG4gICAgICB3aWR0aCA9IF9yZWYxMS53aWR0aCxcbiAgICAgIHggPSBfcmVmMTEueCxcbiAgICAgIHkgPSBfcmVmMTEueTtcblxuICB2YXIgY3VydmUgPSB7IHR5cGU6ICdhcmMnLCByeDogcngsIHJ5OiByeSwgc3dlZXBGbGFnOiAxIH07XG5cbiAgcmV0dXJuIFt7IHg6IHggKyByeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgfSwgeyB4OiB4ICsgd2lkdGgsIHk6IHkgKyByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgaGVpZ2h0IC0gcnkgfSwgeyB4OiB4ICsgd2lkdGggLSByeCwgeTogeSArIGhlaWdodCwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCArIHJ4LCB5OiB5ICsgaGVpZ2h0IH0sIHsgeDogeCwgeTogeSArIGhlaWdodCAtIHJ5LCBjdXJ2ZTogY3VydmUgfSwgeyB4OiB4LCB5OiB5ICsgcnkgfSwgeyB4OiB4ICsgcngsIHk6IHksIGN1cnZlOiBjdXJ2ZSB9XTtcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tRyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21HKF9yZWYxMikge1xuICB2YXIgc2hhcGVzID0gX3JlZjEyLnNoYXBlcztcbiAgcmV0dXJuIHNoYXBlcy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdG9Qb2ludHMocyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9Qb2ludHM7IiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgZ2V0RXJyb3JzID0gZnVuY3Rpb24gZ2V0RXJyb3JzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IGdldFJ1bGVzKHNoYXBlKTtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHJ1bGVzLm1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBtYXRjaCA9IF9yZWYubWF0Y2gsXG4gICAgICAgIHByb3AgPSBfcmVmLnByb3AsXG4gICAgICAgIHJlcXVpcmVkID0gX3JlZi5yZXF1aXJlZCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZTtcblxuICAgIGlmICh0eXBlb2Ygc2hhcGVbcHJvcF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBpcyByZXF1aXJlZCcgKyAocHJvcCA9PT0gJ3R5cGUnID8gJycgOiAnIG9uIGEgJyArIHNoYXBlLnR5cGUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFwZVtwcm9wXSkpIHtcbiAgICAgICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgbXVzdCBiZSBvZiB0eXBlIGFycmF5Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF90eXBlb2Yoc2hhcGVbcHJvcF0pICE9PSB0eXBlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSB2YWxpZC10eXBlb2ZcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSAnICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWF0Y2gpKSB7XG4gICAgICAgIGlmIChtYXRjaC5pbmRleE9mKHNoYXBlW3Byb3BdKSA9PT0gLTEpIHtcbiAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb25lIG9mICcgKyBtYXRjaC5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHNoYXBlLnR5cGUgPT09ICdnJyAmJiBBcnJheS5pc0FycmF5KHNoYXBlLnNoYXBlcykpIHtcbiAgICB2YXIgY2hpbGRFcnJvcnMgPSBzaGFwZS5zaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZ2V0RXJyb3JzKHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBbXS5jb25jYXQuYXBwbHkoZXJyb3JzLCBjaGlsZEVycm9ycyk7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufTtcblxudmFyIGdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoc2hhcGUpIHtcbiAgdmFyIHJ1bGVzID0gW3tcbiAgICBtYXRjaDogWydjaXJjbGUnLCAnZWxsaXBzZScsICdsaW5lJywgJ3BhdGgnLCAncG9seWdvbicsICdwb2x5bGluZScsICdyZWN0JywgJ2cnXSxcbiAgICBwcm9wOiAndHlwZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgdHlwZTogJ3N0cmluZydcbiAgfV07XG5cbiAgc3dpdGNoIChzaGFwZS50eXBlKSB7XG4gICAgY2FzZSAnY2lyY2xlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdlbGxpcHNlJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnY3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmUnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd4MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3kxJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGF0aCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2QnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ3N0cmluZycgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgIGNhc2UgJ3BvbHlsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncG9pbnRzJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnaGVpZ2h0JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeCcsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdyeScsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd3aWR0aCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZyc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3NoYXBlcycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnYXJyYXknIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gcnVsZXM7XG59O1xuXG52YXIgdmFsaWQgPSBmdW5jdGlvbiB2YWxpZChzaGFwZSkge1xuICB2YXIgZXJyb3JzID0gZ2V0RXJyb3JzKHNoYXBlKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yczogZXJyb3JzLFxuICAgIHZhbGlkOiBlcnJvcnMubGVuZ3RoID09PSAwXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZDsiLCI7KGZ1bmN0aW9uIGluamVjdChjbGVhbiwgcHJlY2lzaW9uLCB1bmRlZikge1xuXG4gIHZhciBpc0FycmF5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gIH07XG5cbiAgdmFyIGRlZmluZWQgPSBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGEgIT09IHVuZGVmO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFZlYzIoeCwgeSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWZWMyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWZWMyKHgsIHkpO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICB5ID0geFsxXTtcbiAgICAgIHggPSB4WzBdO1xuICAgIH0gZWxzZSBpZignb2JqZWN0JyA9PT0gdHlwZW9mIHggJiYgeCkge1xuICAgICAgeSA9IHgueTtcbiAgICAgIHggPSB4Lng7XG4gICAgfVxuXG4gICAgdGhpcy54ID0gVmVjMi5jbGVhbih4IHx8IDApO1xuICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSB8fCAwKTtcbiAgfVxuXG4gIFZlYzIucHJvdG90eXBlID0ge1xuICAgIGNoYW5nZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goZm4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW2ZuXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgZm9yICh2YXIgaT10aGlzLm9ic2VydmVycy5sZW5ndGgtMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnNbaV0odGhpcywgZm4pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBpZ25vcmUgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgIGlmICghZm4pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5vYnNlcnZlcnMsIGwgPSBvLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZShsLS0pIHtcbiAgICAgICAgICAgIG9bbF0gPT09IGZuICYmIG8uc3BsaWNlKGwsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIHNldCB4IGFuZCB5XG4gICAgc2V0OiBmdW5jdGlvbih4LCB5LCBub3RpZnkpIHtcbiAgICAgIGlmKCdudW1iZXInICE9IHR5cGVvZiB4KSB7XG4gICAgICAgIG5vdGlmeSA9IHk7XG4gICAgICAgIHkgPSB4Lnk7XG4gICAgICAgIHggPSB4Lng7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMueCA9PT0geCAmJiB0aGlzLnkgPT09IHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcmlnID0gbnVsbDtcbiAgICAgIGlmIChub3RpZnkgIT09IGZhbHNlICYmIHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBvcmlnID0gdGhpcy5jbG9uZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHgpO1xuICAgICAgdGhpcy55ID0gVmVjMi5jbGVhbih5KTtcblxuICAgICAgaWYobm90aWZ5ICE9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2Uob3JpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHJlc2V0IHggYW5kIHkgdG8gemVyb1xuICAgIHplcm8gOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldCgwLCAwKTtcbiAgICB9LFxuXG4gICAgLy8gcmV0dXJuIGEgbmV3IHZlY3RvciB3aXRoIHRoZSBzYW1lIGNvbXBvbmVudCB2YWx1ZXNcbiAgICAvLyBhcyB0aGlzIG9uZVxuICAgIGNsb25lIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLngsIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIG5lZ2F0ZSB0aGUgdmFsdWVzIG9mIHRoaXMgdmVjdG9yXG4gICAgbmVnYXRlIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLngsIC10aGlzLnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBBZGQgdGhlIGluY29taW5nIGB2ZWMyYCB2ZWN0b3IgdG8gdGhpcyB2ZWN0b3JcbiAgICBhZGQgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcblxuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggKz0gdGhpcy54O1xuICAgICAgeSArPSB0aGlzLnk7XG5cblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFN1YnRyYWN0IHRoZSBpbmNvbWluZyBgdmVjMmAgZnJvbSB0aGlzIHZlY3RvclxuICAgIHN1YnRyYWN0IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCA9IHRoaXMueCAtIHg7XG4gICAgICB5ID0gdGhpcy55IC0geTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmV0dXJuIGEgbmV3IHZlY3RvciBpZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHlcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIE11bHRpcGx5IHRoaXMgdmVjdG9yIGJ5IHRoZSBpbmNvbWluZyBgdmVjMmBcbiAgICBtdWx0aXBseSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICB4ICo9IHRoaXMueDtcbiAgICAgIHkgKj0gdGhpcy55O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUm90YXRlIHRoaXMgdmVjdG9yLiBBY2NlcHRzIGEgYFJvdGF0aW9uYCBvciBhbmdsZSBpbiByYWRpYW5zLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyBhIHRydXRoeSBgaW52ZXJzZWAgd2lsbCBjYXVzZSB0aGUgcm90YXRpb24gdG9cbiAgICAvLyBiZSByZXZlcnNlZC5cbiAgICAvL1xuICAgIC8vIElmIGByZXR1cm5OZXdgIGlzIHRydXRoeSwgYSBuZXdcbiAgICAvLyBgVmVjMmAgd2lsbCBiZSBjcmVhdGVkIHdpdGggdGhlIHZhbHVlcyByZXN1bHRpbmcgZnJvbVxuICAgIC8vIHRoZSByb3RhdGlvbi4gT3RoZXJ3aXNlIHRoZSByb3RhdGlvbiB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyB0byB0aGlzIHZlY3RvciBkaXJlY3RseSwgYW5kIHRoaXMgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgcm90YXRlIDogZnVuY3Rpb24ociwgaW52ZXJzZSwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHggPSB0aGlzLngsXG4gICAgICB5ID0gdGhpcy55LFxuICAgICAgY29zID0gTWF0aC5jb3MociksXG4gICAgICBzaW4gPSBNYXRoLnNpbihyKSxcbiAgICAgIHJ4LCByeTtcblxuICAgICAgaW52ZXJzZSA9IChpbnZlcnNlKSA/IC0xIDogMTtcblxuICAgICAgcnggPSBjb3MgKiB4IC0gKGludmVyc2UgKiBzaW4pICogeTtcbiAgICAgIHJ5ID0gKGludmVyc2UgKiBzaW4pICogeCArIGNvcyAqIHk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikocngsIHJ5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyeCwgcnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIHZlY3RvclxuICAgIGxlbmd0aCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIGxlbmd0aCBzcXVhcmVkLiBGb3IgcGVyZm9ybWFuY2UsIHVzZSB0aGlzIGluc3RlYWQgb2YgYFZlYzIjbGVuZ3RoYCAoaWYgcG9zc2libGUpLlxuICAgIGxlbmd0aFNxdWFyZWQgOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIHgqeCt5Knk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VuIHRoaXMgYFZlYzJgIGFuZCB0aGUgaW5jb21pbmcgdmVjMiB2ZWN0b3JcbiAgICAvLyBhbmQgcmV0dXJuIGEgc2NhbGFyXG4gICAgZGlzdGFuY2UgOiBmdW5jdGlvbih2ZWMyKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCAtIHZlYzIueDtcbiAgICAgIHZhciB5ID0gdGhpcy55IC0gdmVjMi55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkpO1xuICAgIH0sXG5cbiAgICAvLyBHaXZlbiBBcnJheSBvZiBWZWMyLCBmaW5kIGNsb3Nlc3QgdG8gdGhpcyBWZWMyLlxuICAgIG5lYXJlc3QgOiBmdW5jdGlvbihvdGhlcnMpIHtcbiAgICAgIHZhclxuICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICBuZWFyZXN0ID0gbnVsbCxcbiAgICAgIGN1cnJlbnREaXN0YW5jZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG90aGVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjdXJyZW50RGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlKG90aGVyc1tpXSk7XG4gICAgICAgIGlmIChjdXJyZW50RGlzdGFuY2UgPD0gc2hvcnRlc3REaXN0YW5jZSkge1xuICAgICAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBjdXJyZW50RGlzdGFuY2U7XG4gICAgICAgICAgbmVhcmVzdCA9IG90aGVyc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmVhcmVzdDtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCB0aGlzIHZlY3RvciBpbnRvIGEgdW5pdCB2ZWN0b3IuXG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoLlxuICAgIG5vcm1hbGl6ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cbiAgICAgIC8vIENvbGxlY3QgYSByYXRpbyB0byBzaHJpbmsgdGhlIHggYW5kIHkgY29vcmRzXG4gICAgICB2YXIgaW52ZXJ0ZWRMZW5ndGggPSAobGVuZ3RoIDwgTnVtYmVyLk1JTl9WQUxVRSkgPyAwIDogMS9sZW5ndGg7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvb3JkcyB0byBiZSBncmVhdGVyIHRoYW4gemVyb1xuICAgICAgICAvLyBidXQgc21hbGxlciB0aGFuIG9yIGVxdWFsIHRvIDEuMFxuICAgICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSBpZiBhbm90aGVyIGBWZWMyYCdzIGNvbXBvbmVudHMgbWF0Y2ggdGhpcyBvbmUnc1xuICAgIC8vIGFsc28gYWNjZXB0cyAyIHNjYWxhcnNcbiAgICBlcXVhbCA6IGZ1bmN0aW9uKHYsIHcpIHtcbiAgICAgIGlmICh0eXBlb2YgdiAhPSAnbnVtYmVyJykge1xuICAgICAgICBpZiAoaXNBcnJheSh2KSkge1xuICAgICAgICAgIHcgPSB2WzFdO1xuICAgICAgICAgIHYgPSB2WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHcgPSB2Lnk7XG4gICAgICAgICAgdiA9IHYueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFZlYzIuY2xlYW4odikgPT09IHRoaXMueCAmJiBWZWMyLmNsZWFuKHcpID09PSB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIHRoYXQgY29udGFpbnMgdGhlIGFic29sdXRlIHZhbHVlIG9mXG4gICAgLy8gZWFjaCBvZiB0aGlzIHZlY3RvcidzIHBhcnRzXG4gICAgYWJzIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgeCA9IE1hdGguYWJzKHRoaXMueCksIHkgPSBNYXRoLmFicyh0aGlzLnkpO1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIHNtYWxsZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1pbiA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA8IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA8IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBsYXJnZXN0IHZhbHVlc1xuICAgIC8vIGZyb20gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIC8vXG4gICAgLy8gV2hlbiByZXR1cm5OZXcgaXMgdHJ1dGh5LCBhIG5ldyBgVmVjMmAgd2lsbCBiZSByZXR1cm5lZFxuICAgIC8vIG90aGVyd2lzZSB0aGUgbWluaW11bSB2YWx1ZXMgaW4gZWl0aGVyIHRoaXMgb3IgYHZgIHdpbGxcbiAgICAvLyBiZSBhcHBsaWVkIHRvIHRoaXMgdmVjdG9yLlxuICAgIG1heCA6IGZ1bmN0aW9uKHYsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB0eCA9IHRoaXMueCxcbiAgICAgIHR5ID0gdGhpcy55LFxuICAgICAgdnggPSB2LngsXG4gICAgICB2eSA9IHYueSxcbiAgICAgIHggPSB0eCA+IHZ4ID8gdHggOiB2eCxcbiAgICAgIHkgPSB0eSA+IHZ5ID8gdHkgOiB2eTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xhbXAgdmFsdWVzIGludG8gYSByYW5nZS5cbiAgICAvLyBJZiB0aGlzIHZlY3RvcidzIHZhbHVlcyBhcmUgbG93ZXIgdGhhbiB0aGUgYGxvd2Anc1xuICAgIC8vIHZhbHVlcywgdGhlbiByYWlzZSB0aGVtLiAgSWYgdGhleSBhcmUgaGlnaGVyIHRoYW5cbiAgICAvLyBgaGlnaGAncyB0aGVuIGxvd2VyIHRoZW0uXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIHJldHVybk5ldyBhcyB0cnVlIHdpbGwgY2F1c2UgYSBuZXcgVmVjMiB0byBiZVxuICAgIC8vIHJldHVybmVkLiAgT3RoZXJ3aXNlLCB0aGlzIHZlY3RvcidzIHZhbHVlcyB3aWxsIGJlIGNsYW1wZWRcbiAgICBjbGFtcCA6IGZ1bmN0aW9uKGxvdywgaGlnaCwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5taW4oaGlnaCwgdHJ1ZSkubWF4KGxvdyk7XG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocmV0LngsIHJldC55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGVyZm9ybSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWN0b3JzXG4gICAgLy8gYW1vdW50IGlzIGEgZGVjaW1hbCBiZXR3ZWVuIDAgYW5kIDFcbiAgICBsZXJwIDogZnVuY3Rpb24odmVjLCBhbW91bnQsIHJldHVybk5ldykge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkKHZlYy5zdWJ0cmFjdCh0aGlzLCB0cnVlKS5tdWx0aXBseShhbW91bnQpLCByZXR1cm5OZXcpO1xuICAgIH0sXG5cbiAgICAvLyBHZXQgdGhlIHNrZXcgdmVjdG9yIHN1Y2ggdGhhdCBkb3Qoc2tld192ZWMsIG90aGVyKSA9PSBjcm9zcyh2ZWMsIG90aGVyKVxuICAgIHNrZXcgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy55LCB0aGlzLngpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy55LCB0aGlzLngpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgZG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi54ICsgYi55ICogdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBwZXJwZW5kaWN1bGFyIGRvdCBwcm9kdWN0IGJldHdlZW5cbiAgICAvLyB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgcGVycERvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueSAtIHRoaXMueSAqIGIueCk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gdmVjMnNcbiAgICBhbmdsZVRvIDogZnVuY3Rpb24odmVjKSB7XG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnBlcnBEb3QodmVjKSwgdGhpcy5kb3QodmVjKSk7XG4gICAgfSxcblxuICAgIC8vIERpdmlkZSB0aGlzIHZlY3RvcidzIGNvbXBvbmVudHMgYnkgYSBzY2FsYXJcbiAgICBkaXZpZGUgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpdmlzaW9uIGJ5IHplcm8nKVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNOYU4oeCkgfHwgaXNOYU4oeSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgIH0sXG5cbiAgICBpc1BvaW50T25MaW5lIDogZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgICAgcmV0dXJuIChzdGFydC55IC0gdGhpcy55KSAqIChzdGFydC54IC0gZW5kLngpID09PVxuICAgICAgICAgICAgIChzdGFydC55IC0gZW5kLnkpICogKHN0YXJ0LnggLSB0aGlzLngpO1xuICAgIH0sXG5cbiAgICB0b0FycmF5OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICAgIH0sXG5cbiAgICBmcm9tQXJyYXk6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgICB9LFxuICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHt4OiB0aGlzLngsIHk6IHRoaXMueX07XG4gICAgfSxcbiAgICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gJygnICsgdGhpcy54ICsgJywgJyArIHRoaXMueSArICcpJztcbiAgICB9LFxuICAgIGNvbnN0cnVjdG9yIDogVmVjMlxuICB9O1xuXG4gIFZlYzIuZnJvbUFycmF5ID0gZnVuY3Rpb24oYXJyYXksIGN0b3IpIHtcbiAgICByZXR1cm4gbmV3IChjdG9yIHx8IFZlYzIpKGFycmF5WzBdLCBhcnJheVsxXSk7XG4gIH07XG5cbiAgLy8gRmxvYXRpbmcgcG9pbnQgc3RhYmlsaXR5XG4gIFZlYzIucHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDg7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIFZlYzIucHJlY2lzaW9uKTtcblxuICBWZWMyLmNsZWFuID0gY2xlYW4gfHwgZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpc0Zpbml0ZSh2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXR5IGRldGVjdGVkJyk7XG4gICAgfVxuXG4gICAgaWYoTWF0aC5yb3VuZCh2YWwpID09PSB2YWwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsICogcCkvcDtcbiAgfTtcblxuICBWZWMyLmluamVjdCA9IGluamVjdDtcblxuICBpZighY2xlYW4pIHtcbiAgICBWZWMyLmZhc3QgPSBpbmplY3QoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGs7IH0pO1xuXG4gICAgLy8gRXhwb3NlLCBidXQgYWxzbyBhbGxvdyBjcmVhdGluZyBhIGZyZXNoIFZlYzIgc3ViY2xhc3MuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBWZWMyO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuVmVjMiA9IHdpbmRvdy5WZWMyIHx8IFZlYzI7XG4gICAgfVxuICB9XG4gIHJldHVybiBWZWMyO1xufSkoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=