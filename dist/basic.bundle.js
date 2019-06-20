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
/* harmony import */ var _core_Segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Segment */ "./core/Segment.js");
/* harmony import */ var _core_Source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Source */ "./core/Source.js");
/* harmony import */ var _core_Utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Utilities */ "./core/Utilities.js");
/* harmony import */ var _core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/KeyboardInteractions */ "./core/KeyboardInteractions.js");







let canvas, ctx;
let network;

let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Initialize auxin sources
  for(let i=0; i<1500; i++) {
    network.sources.push(
      new _core_Source__WEBPACK_IMPORTED_MODULE_3__["default"](
        new vec2__WEBPACK_IMPORTED_MODULE_0__(
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerWidth), 
          Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_4__["random"])(window.innerHeight)
        ),
        ctx
      )
    );
  }

  // Add an initial root vein at the bottom center of the screen
  const rootSegment = new _core_Segment__WEBPACK_IMPORTED_MODULE_2__["default"](
                        null,
                        new vec2__WEBPACK_IMPORTED_MODULE_0__(window.innerWidth / 2, window.innerHeight),
                        new vec2__WEBPACK_IMPORTED_MODULE_0__(0, -1),
                        ctx
                      );
  network.segments.push(rootSegment);
  network.roots.push(rootSegment);

  network.initializeTrunks();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_5__["setupKeyListeners"])([network]);

  // Begin animation loop
  requestAnimationFrame(update);
}

let update = (timestamp) => {
  network.update();

  clear();
  network.draw();

  requestAnimationFrame(update);
}

let clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setup();

/***/ }),

/***/ "./core/Defaults.js":
/*!**************************!*\
  !*** ./core/Defaults.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * Simulation configurations
   */

  OpenCells: true,          // venation can be "open" (true) or "closed" (false)
  SegmentLength: 10,        // length of each vein segment. Smaller numbers mean smoother lines, but more computation cost
  AttractionDistance: 100,  // radius of influence (d_i) around each auxin source that attracts vein segments
  KillDistance: 10,         // distance (d_k) between auxin sources and segments when segments are ended
  IsPaused: false,


  /**
   * Rendering configurations
   */

  // Visibility toggles
  ShowSources: true,
  ShowVeins: true,

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Veins
  MinimumVeinThickness: 1,

  // Auxin sources
  AuxinRadius: 2
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
  document.addEventListener('keyup', (e) => {
    switch(e.key) {
      case " ":
        for(let network of networks) {
          network.togglePause();
        }

        break;

      case "r":

        break;

      case "v":
        for(let network of networks) {
          network.toggleVeins();
        }

        break;

      case "s":
        for(let network of networks) {
          network.toggleSources();
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


class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.sources = [];   // sources are locations of auxin, the growth hormone
    this.segments = [];  // segments are discrete line segments that form veins
    this.roots = [];     // roots are locations where growth begins
  }

  update() {
    if(!this.settings.IsPaused) {
      // For each auxin source ...
      for(let source of this.sources) {
        let closestSegment = null,
          record = this.settings.AttractionDistance;

        // Check if any vein segment is near enough to trigger removal of auxin source
        // TODO: implement knn searching by putting segments into spatial index
        for(let segment of this.segments) {
          let distance = source.position.distance(segment.position);

          if(distance < this.settings.KillDistance) {
            source.reached = true;
            closestSegment = null;
            break;
          } else if(distance < record) {
            closestSegment = segment;
            record = distance;
          }
        }

        // "Bend" the vein growth towards the nearest branch
        if(closestSegment != null) {
          let nextDirection = source.position.subtract(closestSegment.position, true);
          nextDirection.normalize();
          closestSegment.direction.add(nextDirection);
          closestSegment.count++;
        }
      }

      // Remove auxin sources as soon as a vein reaches them
      for(let [index, source] of this.sources.entries()) {
        if(source.reached) {
          this.sources.splice(index, 1);
        }
      }

      for(let segment of this.segments) {
        if(segment.count > 0) {
          segment.direction.divide(segment.count + 1);
          this.segments.push(segment.nextSegment());
          segment.reset();
        }
      }
    }
  }

  draw() {
    // Draw vein segments
    if(this.settings.ShowVeins) {
      for(let segment of this.segments) {
        segment.draw();
      }
    }

    // Draw auxin sources
    if(this.settings.ShowSources) {
      for(let source of this.sources) {
        source.draw();
      }
    }
  }

  initializeTrunks() {
    // For each root vein segment ...
    for(let root of this.roots) {
      let currentSegment = root;
      let found = false;

      // Start searching for auxin sources ...
      while(!found) {
        // Check if root segment is within kill distance of any auxin source
        for(let source of this.sources) {
          const distance = currentSegment.position.distance(source.position);

          if(distance < this.settings.KillDistance) {
            found = true;
          }
        }

        // If not in kill range of a source, grow the vein
        if(!found) {
          let nextSegment = currentSegment.nextSegment();
          currentSegment = nextSegment;
          this.segments.push(currentSegment);
        }

        // Prevent infinite loops caused by too few auxin sources
        if(currentSegment.position.x < 0 || currentSegment.position.x > window.innerWidth || currentSegment.position.y < 0 || currentSegment.position.y > window.innerHeight) {
          console.log("Missed all sources");
          break;
        }
      }
    }
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
  }

  toggleSources() {
    this.settings.ShowSources = !this.settings.ShowSources;
  }

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}

/***/ }),

/***/ "./core/Segment.js":
/*!*************************!*\
  !*** ./core/Segment.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Segment; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class Segment {
  constructor(parent, position, direction, ctx, settings) {
    this.parent = parent;
    this.position = position;
    this.direction = direction;

    this.originalDirection = this.direction.clone();
    this.count = 0;

    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);
  }

  draw() {
    if(this.settings.VeinRenderMode == 'Lines' && this.parent != null) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.position.x, this.position.y);
      this.ctx.lineTo(this.parent.position.x, this.parent.position.y);

      // TODO: vary vein thickness based on algorithm
      this.ctx.strokeStyle = '#333';
      this.ctx.lineWidth = this.settings.MinimumVeinThickness;
      this.ctx.stroke();
    } else if(this.settings.VeinRenderMode == 'Dots') {
      this.ctx.beginPath();
      this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);  // TODO: vary dot radius based on algorithm
  
      this.ctx.fillStyle = '#000';
      this.ctx.fill();
    }
  }

  reset() {
    this.direction = this.originalDirection;
    this.count = 0;
  }

  nextSegment() {
    let nextDirection = this.direction.multiply(this.settings.SegmentLength, true),
        nextPosition = this.position.add(nextDirection, true);
    return new Segment(this, nextPosition, this.direction.clone(), this.ctx, this.settings);
  }
}

/***/ }),

/***/ "./core/Source.js":
/*!************************!*\
  !*** ./core/Source.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Source; });
/* harmony import */ var _Defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Defaults */ "./core/Defaults.js");


class Source {
  constructor(position, ctx, settings = {}) {
    this.position = position;
    this.ctx = ctx;
    this.settings = Object.assign({}, _Defaults__WEBPACK_IMPORTED_MODULE_0__["default"], settings);

    this.reached = false;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.ellipse(this.position.x, this.position.y, this.settings.AuxinRadius, this.settings.AuxinRadius, 0, 0, Math.PI * 2);

    this.ctx.globalAlpha = .2;
    this.ctx.fillStyle = '#000';
    this.ctx.fill();
    this.ctx.globalAlpha = 1;
  }
}

/***/ }),

/***/ "./core/Utilities.js":
/*!***************************!*\
  !*** ./core/Utilities.js ***!
  \***************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmFzaWMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9EZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL2NvcmUvTmV0d29yay5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NlZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9Tb3VyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9VdGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZlYzIvdmVjMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFDWTtBQUNBO0FBQ0Y7QUFDTztBQUNxQjs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHFEQUFPOztBQUV2QjtBQUNBLGNBQWMsUUFBUTtBQUN0QjtBQUNBLFVBQVUsb0RBQU07QUFDaEIsWUFBWSxpQ0FBSTtBQUNoQixVQUFVLDhEQUFNO0FBQ2hCLFVBQVUsOERBQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixxREFBTztBQUNqQztBQUNBLDRCQUE0QixpQ0FBSTtBQUNoQyw0QkFBNEIsaUNBQUk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxFQUFFLG9GQUFpQjs7QUFFbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxROzs7Ozs7Ozs7Ozs7QUNsRUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBa0M7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLGlEQUFROztBQUU5QyxzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUFBO0FBQUE7QUFBa0M7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxFQUFFLGlEQUFRO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrSUFBa0k7O0FBRWxJO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQWtDOztBQUVuQjtBQUNmLDBDQUEwQztBQUMxQztBQUNBO0FBQ0Esb0NBQW9DLEVBQUUsaURBQVE7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNYQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsUUFBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMsVUFBVSxFQUFFOztBQUVqRDtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImJhc2ljLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmFzaWMvanMvZW50cnkuanNcIik7XG4iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgU2VnbWVudCBmcm9tICcuLi8uLi9jb3JlL1NlZ21lbnQnO1xyXG5pbXBvcnQgU291cmNlIGZyb20gJy4uLy4uL2NvcmUvU291cmNlJztcclxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSAnLi4vLi4vY29yZS9VdGlsaXRpZXMnO1xyXG5pbXBvcnQgeyBzZXR1cEtleUxpc3RlbmVycyB9IGZyb20gJy4uLy4uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMnXHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIFxyXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgc2ltdWxhdGlvbiBvYmplY3RcclxuICBuZXR3b3JrID0gbmV3IE5ldHdvcmsoY3R4KTtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBhdXhpbiBzb3VyY2VzXHJcbiAgZm9yKGxldCBpPTA7IGk8MTUwMDsgaSsrKSB7XHJcbiAgICBuZXR3b3JrLnNvdXJjZXMucHVzaChcclxuICAgICAgbmV3IFNvdXJjZShcclxuICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJXaWR0aCksIFxyXG4gICAgICAgICAgcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodClcclxuICAgICAgICApLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gQWRkIGFuIGluaXRpYWwgcm9vdCB2ZWluIGF0IHRoZSBib3R0b20gY2VudGVyIG9mIHRoZSBzY3JlZW5cclxuICBjb25zdCByb290U2VnbWVudCA9IG5ldyBTZWdtZW50KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmVjMih3aW5kb3cuaW5uZXJXaWR0aCAvIDIsIHdpbmRvdy5pbm5lckhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWZWMyKDAsIC0xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gIG5ldHdvcmsuc2VnbWVudHMucHVzaChyb290U2VnbWVudCk7XHJcbiAgbmV0d29yay5yb290cy5wdXNoKHJvb3RTZWdtZW50KTtcclxuXHJcbiAgbmV0d29yay5pbml0aWFsaXplVHJ1bmtzKCk7XHJcblxyXG4gIC8vIFNldCB1cCBjb21tb24ga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbGlzdGVuZXJzXHJcbiAgc2V0dXBLZXlMaXN0ZW5lcnMoW25ldHdvcmtdKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG5cclxuICBjbGVhcigpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IGNsZWFyID0gKCkgPT4ge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxufVxyXG5cclxuc2V0dXAoKTsiLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLyoqXHJcbiAgICogU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICAqL1xyXG5cclxuICBPcGVuQ2VsbHM6IHRydWUsICAgICAgICAgIC8vIHZlbmF0aW9uIGNhbiBiZSBcIm9wZW5cIiAodHJ1ZSkgb3IgXCJjbG9zZWRcIiAoZmFsc2UpXHJcbiAgU2VnbWVudExlbmd0aDogMTAsICAgICAgICAvLyBsZW5ndGggb2YgZWFjaCB2ZWluIHNlZ21lbnQuIFNtYWxsZXIgbnVtYmVycyBtZWFuIHNtb290aGVyIGxpbmVzLCBidXQgbW9yZSBjb21wdXRhdGlvbiBjb3N0XHJcbiAgQXR0cmFjdGlvbkRpc3RhbmNlOiAxMDAsICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDEwLCAgICAgICAgIC8vIGRpc3RhbmNlIChkX2spIGJldHdlZW4gYXV4aW4gc291cmNlcyBhbmQgc2VnbWVudHMgd2hlbiBzZWdtZW50cyBhcmUgZW5kZWRcclxuICBJc1BhdXNlZDogZmFsc2UsXHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAgKi9cclxuXHJcbiAgLy8gVmlzaWJpbGl0eSB0b2dnbGVzXHJcbiAgU2hvd1NvdXJjZXM6IHRydWUsXHJcbiAgU2hvd1ZlaW5zOiB0cnVlLFxyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFZlaW5SZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyB2ZWluIHNlZ21lbnRzIGFzIFwiTGluZXNcIiBvciBcIkRvdHNcIlxyXG5cclxuICAvLyBWZWluc1xyXG4gIE1pbmltdW1WZWluVGhpY2tuZXNzOiAxLFxyXG5cclxuICAvLyBBdXhpbiBzb3VyY2VzXHJcbiAgQXV4aW5SYWRpdXM6IDJcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3Jrcykge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgIHN3aXRjaChlLmtleSkge1xyXG4gICAgICBjYXNlIFwiIFwiOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiclwiOlxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJ2XCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVZlaW5zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZVNvdXJjZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29yayB7XHJcbiAgY29uc3RydWN0b3IoY3R4LCBzZXR0aW5ncykge1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTsgICAvLyBzb3VyY2VzIGFyZSBsb2NhdGlvbnMgb2YgYXV4aW4sIHRoZSBncm93dGggaG9ybW9uZVxyXG4gICAgdGhpcy5zZWdtZW50cyA9IFtdOyAgLy8gc2VnbWVudHMgYXJlIGRpc2NyZXRlIGxpbmUgc2VnbWVudHMgdGhhdCBmb3JtIHZlaW5zXHJcbiAgICB0aGlzLnJvb3RzID0gW107ICAgICAvLyByb290cyBhcmUgbG9jYXRpb25zIHdoZXJlIGdyb3d0aCBiZWdpbnNcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGlmKCF0aGlzLnNldHRpbmdzLklzUGF1c2VkKSB7XHJcbiAgICAgIC8vIEZvciBlYWNoIGF1eGluIHNvdXJjZSAuLi5cclxuICAgICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgICAgbGV0IGNsb3Nlc3RTZWdtZW50ID0gbnVsbCxcclxuICAgICAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgdmVpbiBzZWdtZW50IGlzIG5lYXIgZW5vdWdoIHRvIHRyaWdnZXIgcmVtb3ZhbCBvZiBhdXhpbiBzb3VyY2VcclxuICAgICAgICAvLyBUT0RPOiBpbXBsZW1lbnQga25uIHNlYXJjaGluZyBieSBwdXR0aW5nIHNlZ21lbnRzIGludG8gc3BhdGlhbCBpbmRleFxyXG4gICAgICAgIGZvcihsZXQgc2VnbWVudCBvZiB0aGlzLnNlZ21lbnRzKSB7XHJcbiAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBzb3VyY2UucG9zaXRpb24uZGlzdGFuY2Uoc2VnbWVudC5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgaWYoZGlzdGFuY2UgPCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICBzb3VyY2UucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNsb3Nlc3RTZWdtZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICAgICAgY2xvc2VzdFNlZ21lbnQgPSBzZWdtZW50O1xyXG4gICAgICAgICAgICByZWNvcmQgPSBkaXN0YW5jZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFwiQmVuZFwiIHRoZSB2ZWluIGdyb3d0aCB0b3dhcmRzIHRoZSBuZWFyZXN0IGJyYW5jaFxyXG4gICAgICAgIGlmKGNsb3Nlc3RTZWdtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIGxldCBuZXh0RGlyZWN0aW9uID0gc291cmNlLnBvc2l0aW9uLnN1YnRyYWN0KGNsb3Nlc3RTZWdtZW50LnBvc2l0aW9uLCB0cnVlKTtcclxuICAgICAgICAgIG5leHREaXJlY3Rpb24ubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICBjbG9zZXN0U2VnbWVudC5kaXJlY3Rpb24uYWRkKG5leHREaXJlY3Rpb24pO1xyXG4gICAgICAgICAgY2xvc2VzdFNlZ21lbnQuY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlbW92ZSBhdXhpbiBzb3VyY2VzIGFzIHNvb24gYXMgYSB2ZWluIHJlYWNoZXMgdGhlbVxyXG4gICAgICBmb3IobGV0IFtpbmRleCwgc291cmNlXSBvZiB0aGlzLnNvdXJjZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYoc291cmNlLnJlYWNoZWQpIHtcclxuICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yKGxldCBzZWdtZW50IG9mIHRoaXMuc2VnbWVudHMpIHtcclxuICAgICAgICBpZihzZWdtZW50LmNvdW50ID4gMCkge1xyXG4gICAgICAgICAgc2VnbWVudC5kaXJlY3Rpb24uZGl2aWRlKHNlZ21lbnQuY291bnQgKyAxKTtcclxuICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50Lm5leHRTZWdtZW50KCkpO1xyXG4gICAgICAgICAgc2VnbWVudC5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdmVpbiBzZWdtZW50c1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgICAgZm9yKGxldCBzZWdtZW50IG9mIHRoaXMuc2VnbWVudHMpIHtcclxuICAgICAgICBzZWdtZW50LmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgYXV4aW4gc291cmNlc1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93U291cmNlcykge1xyXG4gICAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgICBzb3VyY2UuZHJhdygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplVHJ1bmtzKCkge1xyXG4gICAgLy8gRm9yIGVhY2ggcm9vdCB2ZWluIHNlZ21lbnQgLi4uXHJcbiAgICBmb3IobGV0IHJvb3Qgb2YgdGhpcy5yb290cykge1xyXG4gICAgICBsZXQgY3VycmVudFNlZ21lbnQgPSByb290O1xyXG4gICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIFN0YXJ0IHNlYXJjaGluZyBmb3IgYXV4aW4gc291cmNlcyAuLi5cclxuICAgICAgd2hpbGUoIWZvdW5kKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgcm9vdCBzZWdtZW50IGlzIHdpdGhpbiBraWxsIGRpc3RhbmNlIG9mIGFueSBhdXhpbiBzb3VyY2VcclxuICAgICAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gY3VycmVudFNlZ21lbnQucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIG5vdCBpbiBraWxsIHJhbmdlIG9mIGEgc291cmNlLCBncm93IHRoZSB2ZWluXHJcbiAgICAgICAgaWYoIWZvdW5kKSB7XHJcbiAgICAgICAgICBsZXQgbmV4dFNlZ21lbnQgPSBjdXJyZW50U2VnbWVudC5uZXh0U2VnbWVudCgpO1xyXG4gICAgICAgICAgY3VycmVudFNlZ21lbnQgPSBuZXh0U2VnbWVudDtcclxuICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChjdXJyZW50U2VnbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQcmV2ZW50IGluZmluaXRlIGxvb3BzIGNhdXNlZCBieSB0b28gZmV3IGF1eGluIHNvdXJjZXNcclxuICAgICAgICBpZihjdXJyZW50U2VnbWVudC5wb3NpdGlvbi54IDwgMCB8fCBjdXJyZW50U2VnbWVudC5wb3NpdGlvbi54ID4gd2luZG93LmlubmVyV2lkdGggfHwgY3VycmVudFNlZ21lbnQucG9zaXRpb24ueSA8IDAgfHwgY3VycmVudFNlZ21lbnQucG9zaXRpb24ueSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJNaXNzZWQgYWxsIHNvdXJjZXNcIik7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVZlaW5zKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93VmVpbnMgPSAhdGhpcy5zZXR0aW5ncy5TaG93VmVpbnM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVTb3VyY2VzKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5TaG93U291cmNlcyA9ICF0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VnbWVudCB7XHJcbiAgY29uc3RydWN0b3IocGFyZW50LCBwb3NpdGlvbiwgZGlyZWN0aW9uLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG5cclxuICAgIHRoaXMub3JpZ2luYWxEaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbi5jbG9uZSgpO1xyXG4gICAgdGhpcy5jb3VudCA9IDA7XHJcblxyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzLlZlaW5SZW5kZXJNb2RlID09ICdMaW5lcycgJiYgdGhpcy5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgLy8gVE9ETzogdmFyeSB2ZWluIHRoaWNrbmVzcyBiYXNlZCBvbiBhbGdvcml0aG1cclxuICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSAnIzMzMyc7XHJcbiAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuTWluaW11bVZlaW5UaGlja25lc3M7XHJcbiAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCB0aGlzLnNldHRpbmdzLkF1eGluUmFkaXVzLCAwLCAwLCBNYXRoLlBJICogMik7ICAvLyBUT0RPOiB2YXJ5IGRvdCByYWRpdXMgYmFzZWQgb24gYWxnb3JpdGhtXHJcbiAgXHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjMDAwJztcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IHRoaXMub3JpZ2luYWxEaXJlY3Rpb247XHJcbiAgICB0aGlzLmNvdW50ID0gMDtcclxuICB9XHJcblxyXG4gIG5leHRTZWdtZW50KCkge1xyXG4gICAgbGV0IG5leHREaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbi5tdWx0aXBseSh0aGlzLnNldHRpbmdzLlNlZ21lbnRMZW5ndGgsIHRydWUpLFxyXG4gICAgICAgIG5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKG5leHREaXJlY3Rpb24sIHRydWUpO1xyXG4gICAgcmV0dXJuIG5ldyBTZWdtZW50KHRoaXMsIG5leHRQb3NpdGlvbiwgdGhpcy5kaXJlY3Rpb24uY2xvbmUoKSwgdGhpcy5jdHgsIHRoaXMuc2V0dGluZ3MpO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSB7XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGN0eCwgc2V0dGluZ3MgPSB7fSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLnJlYWNoZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMuc2V0dGluZ3MuQXV4aW5SYWRpdXMsIHRoaXMuc2V0dGluZ3MuQXV4aW5SYWRpdXMsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuXHJcbiAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IC4yO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJyMwMDAnO1xyXG4gICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSAxO1xyXG4gIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiByYW5kb20obWluLCBtYXgpIHtcclxuICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHtcclxuICAgIG1heCA9IG1pbjtcclxuICAgIG1pbiA9IDA7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG1pbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIG1heCAhPT0gJ251bWJlcicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFsbCBhcmd1bWVudHMgdG8gYmUgbnVtYmVycycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxufSIsIjsoZnVuY3Rpb24gaW5qZWN0KGNsZWFuLCBwcmVjaXNpb24sIHVuZGVmKSB7XG5cbiAgdmFyIGlzQXJyYXkgPSBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfTtcblxuICB2YXIgZGVmaW5lZCA9IGZ1bmN0aW9uKGEpIHtcbiAgICByZXR1cm4gYSAhPT0gdW5kZWY7XG4gIH07XG5cbiAgZnVuY3Rpb24gVmVjMih4LCB5KSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZlYzIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZlYzIoeCwgeSk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgIHkgPSB4WzFdO1xuICAgICAgeCA9IHhbMF07XG4gICAgfSBlbHNlIGlmKCdvYmplY3QnID09PSB0eXBlb2YgeCAmJiB4KSB7XG4gICAgICB5ID0geC55O1xuICAgICAgeCA9IHgueDtcbiAgICB9XG5cbiAgICB0aGlzLnggPSBWZWMyLmNsZWFuKHggfHwgMCk7XG4gICAgdGhpcy55ID0gVmVjMi5jbGVhbih5IHx8IDApO1xuICB9XG5cbiAgVmVjMi5wcm90b3R5cGUgPSB7XG4gICAgY2hhbmdlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMucHVzaChmbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbZm5dO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub2JzZXJ2ZXJzICYmIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpPXRoaXMub2JzZXJ2ZXJzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyc1tpXSh0aGlzLCBmbik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGlnbm9yZSA6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgaWYgKCFmbikge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG8gPSB0aGlzLm9ic2VydmVycywgbCA9IG8ubGVuZ3RoO1xuICAgICAgICAgIHdoaWxlKGwtLSkge1xuICAgICAgICAgICAgb1tsXSA9PT0gZm4gJiYgby5zcGxpY2UobCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gc2V0IHggYW5kIHlcbiAgICBzZXQ6IGZ1bmN0aW9uKHgsIHksIG5vdGlmeSkge1xuICAgICAgaWYoJ251bWJlcicgIT0gdHlwZW9mIHgpIHtcbiAgICAgICAgbm90aWZ5ID0geTtcbiAgICAgICAgeSA9IHgueTtcbiAgICAgICAgeCA9IHgueDtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy54ID09PSB4ICYmIHRoaXMueSA9PT0geSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIG9yaWcgPSBudWxsO1xuICAgICAgaWYgKG5vdGlmeSAhPT0gZmFsc2UgJiYgdGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIG9yaWcgPSB0aGlzLmNsb25lKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCk7XG4gICAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkpO1xuXG4gICAgICBpZihub3RpZnkgIT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShvcmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gcmVzZXQgeCBhbmQgeSB0byB6ZXJvXG4gICAgemVybyA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KDAsIDApO1xuICAgIH0sXG5cbiAgICAvLyByZXR1cm4gYSBuZXcgdmVjdG9yIHdpdGggdGhlIHNhbWUgY29tcG9uZW50IHZhbHVlc1xuICAgIC8vIGFzIHRoaXMgb25lXG4gICAgY2xvbmUgOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCwgdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gbmVnYXRlIHRoZSB2YWx1ZXMgb2YgdGhpcyB2ZWN0b3JcbiAgICBuZWdhdGUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueCwgLXRoaXMueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFkZCB0aGUgaW5jb21pbmcgYHZlYzJgIHZlY3RvciB0byB0aGlzIHZlY3RvclxuICAgIGFkZCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuXG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeCArPSB0aGlzLng7XG4gICAgICB5ICs9IHRoaXMueTtcblxuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gU3VidHJhY3QgdGhlIGluY29taW5nIGB2ZWMyYCBmcm9tIHRoaXMgdmVjdG9yXG4gICAgc3VidHJhY3QgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ID0gdGhpcy54IC0geDtcbiAgICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBSZXR1cm4gYSBuZXcgdmVjdG9yIGlmIGByZXR1cm5OZXdgIGlzIHRydXRoeVxuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTXVsdGlwbHkgdGhpcyB2ZWN0b3IgYnkgdGhlIGluY29taW5nIGB2ZWMyYFxuICAgIG11bHRpcGx5IDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIHggKj0gdGhpcy54O1xuICAgICAgeSAqPSB0aGlzLnk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSb3RhdGUgdGhpcyB2ZWN0b3IuIEFjY2VwdHMgYSBgUm90YXRpb25gIG9yIGFuZ2xlIGluIHJhZGlhbnMuXG4gICAgLy9cbiAgICAvLyBQYXNzaW5nIGEgdHJ1dGh5IGBpbnZlcnNlYCB3aWxsIGNhdXNlIHRoZSByb3RhdGlvbiB0b1xuICAgIC8vIGJlIHJldmVyc2VkLlxuICAgIC8vXG4gICAgLy8gSWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5LCBhIG5ld1xuICAgIC8vIGBWZWMyYCB3aWxsIGJlIGNyZWF0ZWQgd2l0aCB0aGUgdmFsdWVzIHJlc3VsdGluZyBmcm9tXG4gICAgLy8gdGhlIHJvdGF0aW9uLiBPdGhlcndpc2UgdGhlIHJvdGF0aW9uIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIHRvIHRoaXMgdmVjdG9yIGRpcmVjdGx5LCBhbmQgdGhpcyB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZC5cbiAgICByb3RhdGUgOiBmdW5jdGlvbihyLCBpbnZlcnNlLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgeCA9IHRoaXMueCxcbiAgICAgIHkgPSB0aGlzLnksXG4gICAgICBjb3MgPSBNYXRoLmNvcyhyKSxcbiAgICAgIHNpbiA9IE1hdGguc2luKHIpLFxuICAgICAgcngsIHJ5O1xuXG4gICAgICBpbnZlcnNlID0gKGludmVyc2UpID8gLTEgOiAxO1xuXG4gICAgICByeCA9IGNvcyAqIHggLSAoaW52ZXJzZSAqIHNpbikgKiB5O1xuICAgICAgcnkgPSAoaW52ZXJzZSAqIHNpbikgKiB4ICsgY29zICogeTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKShyeCwgcnkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJ4LCByeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgdmVjdG9yXG4gICAgbGVuZ3RoIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgbGVuZ3RoIHNxdWFyZWQuIEZvciBwZXJmb3JtYW5jZSwgdXNlIHRoaXMgaW5zdGVhZCBvZiBgVmVjMiNsZW5ndGhgIChpZiBwb3NzaWJsZSkuXG4gICAgbGVuZ3RoU3F1YXJlZCA6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG4gICAgICByZXR1cm4geCp4K3kqeTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZW4gdGhpcyBgVmVjMmAgYW5kIHRoZSBpbmNvbWluZyB2ZWMyIHZlY3RvclxuICAgIC8vIGFuZCByZXR1cm4gYSBzY2FsYXJcbiAgICBkaXN0YW5jZSA6IGZ1bmN0aW9uKHZlYzIpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54IC0gdmVjMi54O1xuICAgICAgdmFyIHkgPSB0aGlzLnkgLSB2ZWMyLnk7XG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIEFycmF5IG9mIFZlYzIsIGZpbmQgY2xvc2VzdCB0byB0aGlzIFZlYzIuXG4gICAgbmVhcmVzdCA6IGZ1bmN0aW9uKG90aGVycykge1xuICAgICAgdmFyXG4gICAgICBzaG9ydGVzdERpc3RhbmNlID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgIG5lYXJlc3QgPSBudWxsLFxuICAgICAgY3VycmVudERpc3RhbmNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gb3RoZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGN1cnJlbnREaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2Uob3RoZXJzW2ldKTtcbiAgICAgICAgaWYgKGN1cnJlbnREaXN0YW5jZSA8PSBzaG9ydGVzdERpc3RhbmNlKSB7XG4gICAgICAgICAgc2hvcnRlc3REaXN0YW5jZSA9IGN1cnJlbnREaXN0YW5jZTtcbiAgICAgICAgICBuZWFyZXN0ID0gb3RoZXJzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZWFyZXN0O1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IHRoaXMgdmVjdG9yIGludG8gYSB1bml0IHZlY3Rvci5cbiAgICAvLyBSZXR1cm5zIHRoZSBsZW5ndGguXG4gICAgbm9ybWFsaXplIDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuICAgICAgLy8gQ29sbGVjdCBhIHJhdGlvIHRvIHNocmluayB0aGUgeCBhbmQgeSBjb29yZHNcbiAgICAgIHZhciBpbnZlcnRlZExlbmd0aCA9IChsZW5ndGggPCBOdW1iZXIuTUlOX1ZBTFVFKSA/IDAgOiAxL2xlbmd0aDtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgY29vcmRzIHRvIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgICAgIC8vIGJ1dCBzbWFsbGVyIHRoYW4gb3IgZXF1YWwgdG8gMS4wXG4gICAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54ICogaW52ZXJ0ZWRMZW5ndGgsIHRoaXMueSAqIGludmVydGVkTGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGFub3RoZXIgYFZlYzJgJ3MgY29tcG9uZW50cyBtYXRjaCB0aGlzIG9uZSdzXG4gICAgLy8gYWxzbyBhY2NlcHRzIDIgc2NhbGFyc1xuICAgIGVxdWFsIDogZnVuY3Rpb24odiwgdykge1xuICAgICAgaWYgKHR5cGVvZiB2ICE9ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHYpKSB7XG4gICAgICAgICAgdyA9IHZbMV07XG4gICAgICAgICAgdiA9IHZbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdyA9IHYueTtcbiAgICAgICAgICB2ID0gdi54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoVmVjMi5jbGVhbih2KSA9PT0gdGhpcy54ICYmIFZlYzIuY2xlYW4odykgPT09IHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgdGhhdCBjb250YWlucyB0aGUgYWJzb2x1dGUgdmFsdWUgb2ZcbiAgICAvLyBlYWNoIG9mIHRoaXMgdmVjdG9yJ3MgcGFydHNcbiAgICBhYnMgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciB4ID0gTWF0aC5hYnModGhpcy54KSwgeSA9IE1hdGguYWJzKHRoaXMueSk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgc21hbGxlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWluIDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4IDwgdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5IDwgdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gYSBuZXcgYFZlYzJgIGNvbnNpc3Rpbmcgb2YgdGhlIGxhcmdlc3QgdmFsdWVzXG4gICAgLy8gZnJvbSB0aGlzIHZlY3RvciBhbmQgdGhlIGluY29taW5nXG4gICAgLy9cbiAgICAvLyBXaGVuIHJldHVybk5ldyBpcyB0cnV0aHksIGEgbmV3IGBWZWMyYCB3aWxsIGJlIHJldHVybmVkXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBtaW5pbXVtIHZhbHVlcyBpbiBlaXRoZXIgdGhpcyBvciBgdmAgd2lsbFxuICAgIC8vIGJlIGFwcGxpZWQgdG8gdGhpcyB2ZWN0b3IuXG4gICAgbWF4IDogZnVuY3Rpb24odiwgcmV0dXJuTmV3KSB7XG4gICAgICB2YXJcbiAgICAgIHR4ID0gdGhpcy54LFxuICAgICAgdHkgPSB0aGlzLnksXG4gICAgICB2eCA9IHYueCxcbiAgICAgIHZ5ID0gdi55LFxuICAgICAgeCA9IHR4ID4gdnggPyB0eCA6IHZ4LFxuICAgICAgeSA9IHR5ID4gdnkgPyB0eSA6IHZ5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDbGFtcCB2YWx1ZXMgaW50byBhIHJhbmdlLlxuICAgIC8vIElmIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIGFyZSBsb3dlciB0aGFuIHRoZSBgbG93YCdzXG4gICAgLy8gdmFsdWVzLCB0aGVuIHJhaXNlIHRoZW0uICBJZiB0aGV5IGFyZSBoaWdoZXIgdGhhblxuICAgIC8vIGBoaWdoYCdzIHRoZW4gbG93ZXIgdGhlbS5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgcmV0dXJuTmV3IGFzIHRydWUgd2lsbCBjYXVzZSBhIG5ldyBWZWMyIHRvIGJlXG4gICAgLy8gcmV0dXJuZWQuICBPdGhlcndpc2UsIHRoaXMgdmVjdG9yJ3MgdmFsdWVzIHdpbGwgYmUgY2xhbXBlZFxuICAgIGNsYW1wIDogZnVuY3Rpb24obG93LCBoaWdoLCByZXR1cm5OZXcpIHtcbiAgICAgIHZhciByZXQgPSB0aGlzLm1pbihoaWdoLCB0cnVlKS5tYXgobG93KTtcbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldChyZXQueCwgcmV0LnkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBQZXJmb3JtIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlY3RvcnNcbiAgICAvLyBhbW91bnQgaXMgYSBkZWNpbWFsIGJldHdlZW4gMCBhbmQgMVxuICAgIGxlcnAgOiBmdW5jdGlvbih2ZWMsIGFtb3VudCwgcmV0dXJuTmV3KSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGQodmVjLnN1YnRyYWN0KHRoaXMsIHRydWUpLm11bHRpcGx5KGFtb3VudCksIHJldHVybk5ldyk7XG4gICAgfSxcblxuICAgIC8vIEdldCB0aGUgc2tldyB2ZWN0b3Igc3VjaCB0aGF0IGRvdChza2V3X3ZlYywgb3RoZXIpID09IGNyb3NzKHZlYywgb3RoZXIpXG4gICAgc2tldyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KC10aGlzLnksIHRoaXMueClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKC10aGlzLnksIHRoaXMueCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBkb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnggKyBiLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIHBlcnBlbmRpY3VsYXIgZG90IHByb2R1Y3QgYmV0d2VlblxuICAgIC8vIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICBwZXJwRG90IDogZnVuY3Rpb24oYikge1xuICAgICAgcmV0dXJuIFZlYzIuY2xlYW4odGhpcy54ICogYi55IC0gdGhpcy55ICogYi54KTtcbiAgICB9LFxuXG4gICAgLy8gRGV0ZXJtaW5lIHRoZSBhbmdsZSBiZXR3ZWVuIHR3byB2ZWMyc1xuICAgIGFuZ2xlVG8gOiBmdW5jdGlvbih2ZWMpIHtcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMucGVycERvdCh2ZWMpLCB0aGlzLmRvdCh2ZWMpKTtcbiAgICB9LFxuXG4gICAgLy8gRGl2aWRlIHRoaXMgdmVjdG9yJ3MgY29tcG9uZW50cyBieSBhIHNjYWxhclxuICAgIGRpdmlkZSA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIHkgPSB4O1xuICAgICAgfVxuXG4gICAgICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGl2aXNpb24gYnkgemVybycpXG4gICAgICB9XG5cbiAgICAgIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHRoaXMueCAvIHgsIHRoaXMueSAvIHkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXQodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgfSxcblxuICAgIGlzUG9pbnRPbkxpbmUgOiBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gICAgICByZXR1cm4gKHN0YXJ0LnkgLSB0aGlzLnkpICogKHN0YXJ0LnggLSBlbmQueCkgPT09XG4gICAgICAgICAgICAgKHN0YXJ0LnkgLSBlbmQueSkgKiAoc3RhcnQueCAtIHRoaXMueCk7XG4gICAgfSxcblxuICAgIHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gICAgfSxcblxuICAgIGZyb21BcnJheTogZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChhcnJheVswXSwgYXJyYXlbMV0pO1xuICAgIH0sXG4gICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge3g6IHRoaXMueCwgeTogdGhpcy55fTtcbiAgICB9LFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAnKCcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJyknO1xuICAgIH0sXG4gICAgY29uc3RydWN0b3IgOiBWZWMyXG4gIH07XG5cbiAgVmVjMi5mcm9tQXJyYXkgPSBmdW5jdGlvbihhcnJheSwgY3Rvcikge1xuICAgIHJldHVybiBuZXcgKGN0b3IgfHwgVmVjMikoYXJyYXlbMF0sIGFycmF5WzFdKTtcbiAgfTtcblxuICAvLyBGbG9hdGluZyBwb2ludCBzdGFiaWxpdHlcbiAgVmVjMi5wcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgODtcbiAgdmFyIHAgPSBNYXRoLnBvdygxMCwgVmVjMi5wcmVjaXNpb24pO1xuXG4gIFZlYzIuY2xlYW4gPSBjbGVhbiB8fCBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYU4gZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRmluaXRlKHZhbCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdHkgZGV0ZWN0ZWQnKTtcbiAgICB9XG5cbiAgICBpZihNYXRoLnJvdW5kKHZhbCkgPT09IHZhbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiBwKS9wO1xuICB9O1xuXG4gIFZlYzIuaW5qZWN0ID0gaW5qZWN0O1xuXG4gIGlmKCFjbGVhbikge1xuICAgIFZlYzIuZmFzdCA9IGluamVjdChmdW5jdGlvbiAoaykgeyByZXR1cm4gazsgfSk7XG5cbiAgICAvLyBFeHBvc2UsIGJ1dCBhbHNvIGFsbG93IGNyZWF0aW5nIGEgZnJlc2ggVmVjMiBzdWJjbGFzcy5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IFZlYzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5WZWMyID0gd2luZG93LlZlYzIgfHwgVmVjMjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFZlYzI7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==