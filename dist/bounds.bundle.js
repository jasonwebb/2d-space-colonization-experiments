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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bounds/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bounds/js/Settings.js":
/*!*******************************!*\
  !*** ./bounds/js/Settings.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/ColorPresets */ "./core/ColorPresets.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /**
    Sketch variables
  */
  UsePerVeinColors: true,


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
  Colors: _core_ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Dark"],

  // Line thicknesses
  VeinThickness: 1,
  VeinTipThickness: 2,
  BoundsBorderThickness: 1
});

/***/ }),

/***/ "./bounds/js/entry.js":
/*!****************************!*\
  !*** ./bounds/js/entry.js ***!
  \****************************/
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
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Settings */ "./bounds/js/Settings.js");










const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./bounds/svg/leaf.svg");
const veinsText = __webpack_require__(/*! ../svg/veins-text.svg */ "./bounds/svg/veins-text.svg");

let canvas, ctx;
let network;

const SQUARE = 0;
const CIRCLE = 1;
const LEAF = 2;
const VEINSTEXT = 3;
let currentBoundsShape = CIRCLE;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _Settings__WEBPACK_IMPORTED_MODULE_8__["default"]);

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
  addSources();
  addRootVeins();
}

  let addBounds = () => {
    switch(currentBoundsShape) {
      case SQUARE:
        network.bounds = getSquareBounds();
        break;

      case CIRCLE:
        network.bounds = getCircleBounds();
        break;

      case LEAF:
        network.bounds = getLeafBounds();
        break;

      case VEINSTEXT:
        network.bounds = getVeinsTextBounds();
        break;
    }
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
        ctx,
        _Settings__WEBPACK_IMPORTED_MODULE_8__["default"]
      )];
    }

    let getCircleBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const radius = 350;
      const resolution = 100;
      let points = [];

      for(let i = 0; i < resolution; i++) {
        let angle = 2 * Math.PI * i / resolution;
        let x = cx + Math.floor(radius * Math.cos(angle));
        let y = cy + Math.floor(radius * Math.sin(angle));

        points.push([x, y]);
      }

      return [new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](points, 'Bounds', ctx, _Settings__WEBPACK_IMPORTED_MODULE_8__["default"])];
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

      return [new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](polygon, 'Bounds', ctx, _Settings__WEBPACK_IMPORTED_MODULE_8__["default"])];
    }

    let getVeinsTextBounds = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const shapeWidth = 900;
      const shapeHeight = 900;

      let polygons = _core_SVGLoader__WEBPACK_IMPORTED_MODULE_5__["default"].load(veinsText);
      let bounds = [];

      for(let polygon of polygons) {
        // Translate the design to the screen center
        for(let point of polygon) {
          point[0] = cx - shapeWidth/2 + point[0];
          point[1] = cy - shapeHeight/2 + point[1];
        }

        bounds.push(new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](polygon, 'Bounds', ctx, _Settings__WEBPACK_IMPORTED_MODULE_8__["default"]));
      }

      return bounds;
    }

  let addSources = () => {
    // Set up the auxin sources using pre-made patterns
    let randomSources = Object(_core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["getRandomSources"])(500, ctx, 10, network.bounds);
    let gridSources = Object(_core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["getGridOfSources"])(150, 150, ctx, 10, network.bounds);

    network.sources = gridSources;
  }

  // Create the network with initial conditions
  let addRootVeins = () => {
    let veinColors = [
      _Settings__WEBPACK_IMPORTED_MODULE_8__["default"].UsePerVeinColors ? 'rgb(' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ')' : undefined,
      _Settings__WEBPACK_IMPORTED_MODULE_8__["default"].UsePerVeinColors ? 'rgb(' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ')' : undefined,
      _Settings__WEBPACK_IMPORTED_MODULE_8__["default"].UsePerVeinColors ? 'rgb(' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ')' : undefined,
      _Settings__WEBPACK_IMPORTED_MODULE_8__["default"].UsePerVeinColors ? 'rgb(' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ')' : undefined,
      _Settings__WEBPACK_IMPORTED_MODULE_8__["default"].UsePerVeinColors ? 'rgb(' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ',' + Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(100,255) + ')' : undefined
    ];

    switch(currentBoundsShape) {
      case SQUARE:
      case CIRCLE:
        // Add a set of random root veins throughout scene
        for(let i=0; i<13; i++) {
          network.addVeinNode(
            new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
              null,
              new vec2__WEBPACK_IMPORTED_MODULE_0__(
                Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(window.innerWidth),
                Object(_core_Utilities__WEBPACK_IMPORTED_MODULE_6__["random"])(window.innerHeight)
              ),
              true,
              ctx,
              _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
              veinColors[i % veinColors.length]
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
            ctx,
            _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
            veinColors[0]
          )
        );

        break;

      case VEINSTEXT:
        // V
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              window.innerWidth / 2 - 330,
              window.innerHeight / 2 + 70
            ),
            true,
            ctx,
            _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
            veinColors[0]
          )
        );

        // E
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              window.innerWidth / 2 - 200,
              window.innerHeight / 2
            ),
            true,
            ctx,
            _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
            veinColors[1]
          )
        );

        // I
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              window.innerWidth / 2,
              window.innerHeight / 2
            ),
            true,
            ctx,
            _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
            veinColors[2]
          )
        );

        // N
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              window.innerWidth / 2 + 100,
              window.innerHeight / 2
            ),
            true,
            ctx,
            _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
            veinColors[3]
          )
        );

        // S
        network.addVeinNode(
          new _core_VeinNode__WEBPACK_IMPORTED_MODULE_3__["default"](
            null,
            new vec2__WEBPACK_IMPORTED_MODULE_0__(
              window.innerWidth / 2 + 410,
              window.innerHeight / 2
            ),
            true,
            ctx,
            _Settings__WEBPACK_IMPORTED_MODULE_8__["default"],
            veinColors[4]
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
      currentBoundsShape = SQUARE;
      resetNetwork();
      break;

    case '2':
      currentBoundsShape = CIRCLE;
      resetNetwork();
      break;

    case '3':
      currentBoundsShape = LEAF;
      resetNetwork();
      break;

    case '4':
      currentBoundsShape = VEINSTEXT;
      resetNetwork();
      break;
  }
});


// Kick off the application
setup();

/***/ }),

/***/ "./bounds/svg/leaf.svg":
/*!*****************************!*\
  !*** ./bounds/svg/leaf.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" id=\"svg2\" sodipodi:docname=\"leaf-2.svg\" viewBox=\"0 0 900.00002 899.99999\" version=\"1.1\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\"><g id=\"layer1\" inkscape:label=\"Calque 1\" inkscape:groupmode=\"layer\"><path id=\"path3183\" d=\"M 450.21891,829.07436 450.45107,828.2146 451.08318,826.45268 452.01869,824.04535 453.16105,821.24933 454.58598,816.55769 454.94938,810.28998 454.19894,800.24067 452.28238,784.20422 450.62632,769.80478 448.94165,752.77806 447.4255,735.252 446.27499,719.35455 445.3172,705.64829 444.32572,694.08884 443.41751,685.89319 442.70957,682.27835 440.86599,681.38101 436.71054,680.92581 430.23217,680.91228 421.41982,681.33993 373.56476,684.65278 343.85947,687.66778 322.82381,691.70197 300.97762,698.07241 291.07099,700.83975 281.19342,702.73412 269.73448,703.99355 255.08372,704.85607 243.81519,705.231 234.0347,705.326 226.79067,705.14628 223.13148,704.69709 221.38605,703.73684 221.1582,702.3985 222.62257,700.17983 225.95381,696.57855 231.19536,690.09197 234.577,683.59589 235.88687,677.65205 234.91308,672.82217 228.82264,667.09404 216.86155,660.89729 199.86848,654.59381 178.68212,648.54552 166.86084,645.45427 156.89205,642.63894 149.82455,640.41012 146.70709,639.07841 146.74605,637.42634 148.50718,634.35023 151.82972,630.08232 156.55289,624.85485 163.29377,617.40023 167.04858,611.84631 168.50855,606.78605 168.36496,600.81242 165.85132,594.25087 159.17953,586.54175 147.73087,577.09949 130.88664,565.3385 120.47053,558.29877 111.94064,552.30182 106.17719,547.98291 104.06044,545.97729 105.12647,544.92448 108.02903,543.19975 112.32482,541.04215 117.57054,538.69077 132.46189,531.37219 139.91964,523.95905 141.16234,514.0214 137.4085,499.12927 132.59721,483.22865 127.6632,465.41277 123.404,448.67904 120.61715,436.0249 116.40875,417.45661 110.19469,394.18517 103.69582,372.32076 98.633016,357.97356 96.050187,352.97606 92.500473,347.2684 88.451811,341.55409 84.372136,336.53665 80.726756,332.17248 77.860562,328.23817 76.060862,325.16522 75.614966,323.38514 94.467188,320.40204 134.89222,323.96985 179.65288,331.78526 211.51198,341.54495 216.84722,344.10829 223.64803,347.17255 231.0402,350.35319 238.14955,353.26561 245.40835,356.42409 253.20602,360.27465 260.60641,364.33039 266.67337,368.10438 284.77547,379.23659 296.47145,382.95383 303.12508,379.25763 306.10013,368.14957 307.90483,356.21672 310.71843,343.8241 314.32131,331.80723 318.49383,321.00163 320.65917,315.11523 323.16382,306.76169 325.69751,297.05347 327.94995,287.10303 330.38786,274.58277 331.51659,266.14043 331.46689,260.01047 330.36953,254.42739 328.03697,244.00636 329.10196,239.70026 334.70552,240.99357 345.98871,247.37075 355.68932,252.59575 364.41363,256.15901 371.17511,257.73331 374.9872,256.99145 375.27946,255.82477 375.13501,253.58837 374.59593,250.60377 373.70428,247.19249 372.51524,241.84909 372.85642,236.04084 375.2092,227.13944 380.05493,212.51659 384.04158,201.60877 388.2989,191.28296 392.32292,182.69046 395.60965,176.98255 402.15222,167.27407 410.05213,154.637 419.72417,138.38949 431.58312,117.84967 445.34739,94.888179 457.07757,77.603895 466.24471,66.710188 472.31989,62.920426 473.52927,63.607271 474.32889,65.767704 474.74953,69.551567 474.82197,75.108706 475.03267,80.795118 475.73314,87.267787 476.81373,93.730079 478.16477,99.385356 484.74774,116.91069 495.04251,138.58652 507.41166,161.21256 520.21777,181.58853 528.72267,193.72108 534.1699,200.41951 538.12363,203.27311 542.14801,203.87114 545.1129,203.59972 548.27868,202.86069 551.26639,201.76694 553.69704,200.43133 556.46707,198.62586 558.2679,198.04271 559.66924,198.69403 561.24079,200.59197 562.41079,203.88143 563.55019,210.15528 564.56351,218.75407 565.3553,229.01837 566.28158,241.7583 567.40826,250.34172 568.99134,256.12611 571.28683,260.46899 578.36697,271.64063 583.82518,281.77671 587.95354,291.48147 591.04415,301.35914 592.71249,307.21906 594.44033,312.45358 596.02376,316.49164 597.25883,318.76217 598.59166,321.1701 600.44115,325.58214 602.56272,331.37013 604.71179,337.90594 607.19733,346.93887 608.78829,355.69177 609.67148,365.57168 610.03371,377.98563 610.89123,401.46656 613.89457,412.78564 620.74334,414.1269 633.13715,407.67437 638.79351,404.31397 644.61602,401.02215 649.91944,398.17686 654.01856,396.15602 658.024,394.20354 663.07183,391.54439 668.51593,388.52807 673.71017,385.5041 684.79474,379.766 698.62076,374.19166 715.11102,368.80911 734.1883,363.64641 780.91891,351.85498 811.17134,343.55218 830.52643,337.07576 844.56499,330.76348 845.1686,331.05593 845.66291,332.4412 845.99692,334.69518 846.11959,337.59378 845.44803,342.24018 843.47694,348.69013 840.27173,356.76017 835.89779,366.26684 831.41957,375.99279 826.78282,386.91578 822.53467,397.69901 819.22229,407.00568 813.69888,423.23928 807.51056,440.14719 800.22955,458.86076 791.42809,480.51137 786.91488,490.73644 782.60723,498.8696 778.11638,505.56607 773.05354,511.48109 769.23059,515.59527 766.09993,519.16813 763.98463,521.81655 763.20773,523.15739 763.50683,523.95466 764.32121,525.1229 765.52648,526.50507 766.99826,527.94412 769.44885,529.49766 772.91614,530.56383 777.57008,531.17777 783.58067,531.37461 788.54751,531.46451 792.61493,531.70929 795.36319,532.07156 796.37255,532.51394 795.10515,536.26841 791.80301,542.04124 787.21623,548.65476 782.09489,554.93129 770.58999,568.5797 758.75813,583.89931 749.14526,597.46192 744.29735,605.8393 743.47391,608.82362 743.22119,611.47592 743.54034,613.88407 744.4325,616.13594 748.51041,620.83348 755.46778,626.26064 763.78559,631.36973 771.94479,635.11306 775.01558,636.39349 777.68376,637.84198 779.6631,639.28068 780.66735,640.53178 780.07446,643.01537 777.5305,645.98721 774.09429,648.4798 770.82465,649.52566 768.21134,650.34687 762.44449,652.58284 754.37622,655.8921 744.85867,659.9332 716.46009,672.68119 699.29565,681.97457 690.84513,689.46449 688.58833,696.80212 690.40139,703.19636 695.1695,711.29144 701.88602,719.64539 709.54435,726.81628 712.01341,729.01364 713.78628,731.12999 714.7154,732.95035 714.65318,734.25971 702.00423,736.21531 674.59347,735.95173 642.3006,733.85891 615.00532,730.32678 590.602,725.49305 573.38269,721.64372 561.13694,718.23418 551.65429,714.71983 544.56506,711.99097 535.12624,708.74405 524.56943,705.38581 514.12622,702.32302 503.80271,699.27972 493.57297,695.97455 484.61819,692.80618 478.11959,690.1733 473.14087,688.07208 468.32285,686.35134 464.21522,685.18866 461.36762,684.76163 458.64141,685.05558 457.16346,686.56359 456.55469,690.22489 456.43601,696.97872 457.08449,713.12718 458.88616,733.17673 461.62542,755.13291 465.08664,777.0013 468.87459,799.59065 470.48307,813.52535 470.05254,821.40682 467.72345,825.8365 463.69742,828.16448 457.82313,829.77871 452.52248,830.23126 450.2174,829.07421 450.21778,829.07425 450.21816,829.07428 450.21853,829.07432 Z\" style=\"fill:none;stroke:#000000;stroke-width:2.07280159;stroke-opacity:1\" inkscape:connector-curvature=\"0\" sodipodi:nodetypes=\"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

/***/ }),

/***/ "./bounds/svg/veins-text.svg":
/*!***********************************!*\
  !*** ./bounds/svg/veins-text.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns:svg=\"http://www.w3.org/2000/svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\" xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\" viewBox=\"0 0 900 900\" version=\"1.1\" id=\"svg8\" inkscape:version=\"0.92.3 (2405546, 2018-03-11)\" sodipodi:docname=\"veins-text.svg\"><g inkscape:label=\"Layer 1\" inkscape:groupmode=\"layer\" id=\"layer1\"><path inkscape:connector-curvature=\"0\" id=\"path819\" style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:73.76278687px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:&#x27;sans-serif Bold&#x27;;letter-spacing:-4.81582928px;word-spacing:0px;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.4907496;stroke-opacity:1\" d=\"M 11.792498,345.67081 H 65.87876 L 121.22284,499.68391 176.42717,345.67081 H 230.51343 L 153.22738,554.3292 H 89.078553 Z\" sodipodi:nodetypes=\"cccccccc\"></path><path inkscape:connector-curvature=\"0\" id=\"path821\" style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:73.76278687px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:&#x27;sans-serif Bold&#x27;;letter-spacing:-4.81582928px;word-spacing:0px;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.4907496;stroke-opacity:1\" d=\"M 239.35871,345.67081 H 384.56706 V 386.34037 H 293.16546 V 425.19303 H 379.11652 V 465.86253 H 293.16546 V 513.6597 H 387.64172 V 554.3292 H 239.35871 Z\" sodipodi:nodetypes=\"ccccccccccccc\"></path><path inkscape:connector-curvature=\"0\" id=\"path823\" style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:73.76278687px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:&#x27;sans-serif Bold&#x27;;letter-spacing:-4.81582928px;word-spacing:0px;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.4907496;stroke-opacity:1\" d=\"M 416.33261,345.67081 H 470.13935 V 554.3292 H 416.33261 Z\" sodipodi:nodetypes=\"ccccc\"></path><path inkscape:connector-curvature=\"0\" id=\"path825\" style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:73.76278687px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:&#x27;sans-serif Bold&#x27;;letter-spacing:-4.81582928px;word-spacing:0px;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.4907496;stroke-opacity:1\" d=\"M 504.42055,345.67081 H 564.51638 L 640.40485,488.78282 V 345.67081 H 691.41644 V 554.3292 H 631.32061 L 555.43214,411.21724 V 554.3292 H 504.42055 Z\" sodipodi:nodetypes=\"ccccccccccc\"></path><path inkscape:connector-curvature=\"0\" id=\"path827\" style=\"font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:73.76278687px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:&#x27;sans-serif Bold&#x27;;letter-spacing:-4.81582928px;word-spacing:0px;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.4907496;stroke-opacity:1\" d=\"M 870.76621,352.09963 V 363.14048 374.18133 385.22227 396.26313 L 862.22355,392.65563 853.78566,389.51982 845.45261,386.8557 837.22437,384.66323 829.16209,382.95116 821.32693,381.72827 813.71885,380.99454 806.33788,380.74996 797.32352,381.08188 789.56697,382.07765 783.06824,383.73731 777.82731,386.06081 773.7918,389.08305 770.9093,392.83905 769.1798,397.32879 768.6033,402.55221 768.98765,406.51783 770.14065,410.02926 772.0623,413.08646 774.75265,415.68946 778.52612,417.91685 783.55739,419.987 789.84647,421.89997 797.39341,423.65566 803.12349,424.80866 808.85353,425.96166 814.58362,427.11466 820.31366,428.26766 836.45568,432.21582 850.08208,437.0724 861.19282,442.83741 869.78794,449.51084 876.20806,457.38969 880.79388,466.77093 883.54534,477.65456 884.4625,490.04061 883.17846,506.20009 879.32637,520.15841 872.90625,531.91554 863.91809,541.47147 852.36189,548.80875 838.09783,554.04968 821.12601,557.19422 801.44637,558.24241 791.51482,558.00657 781.56585,557.29907 771.59934,556.11983 761.61541,554.46895 751.6227,552.3551 741.63004,549.78706 731.63734,546.76479 721.64467,543.28832 V 531.933 520.57768 509.22236 497.86704 L 731.54999,502.85466 741.28066,507.19586 750.83659,510.89071 760.21783,513.93918 769.49426,516.26264 778.596,517.9223 787.52301,518.91807 796.27533,519.24999 804.56472,518.88314 811.82338,517.78253 818.05135,515.94822 823.24859,513.38014 827.34524,510.13079 830.2714,506.25251 832.02713,501.74532 832.61236,496.60923 832.21056,491.99723 831.00517,487.94423 828.99613,484.4503 826.18351,481.51537 822.24409,478.92987 816.71489,476.4841 809.59599,474.1781 800.88733,472.01186 795.68137,470.85886 790.47536,469.70586 785.26939,468.55286 780.06343,467.39986 765.45876,463.54778 752.95044,458.69993 742.53846,452.8563 734.22288,446.01691 727.92503,438.04198 723.4266,428.79174 720.72752,418.26623 719.82783,406.46545 721.08563,391.78213 724.8591,378.89819 731.14822,367.81364 739.95296,358.52848 751.11613,351.1912 764.48045,345.95029 780.04596,342.80574 797.81268,341.75755 806.46891,341.92351 815.24746,342.4214 824.14828,343.25125 833.1714,344.41298 842.33426,345.83675 851.65435,347.59244 861.13166,349.68009 Z\" sodipodi:nodetypes=\"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc\"></path></g></svg>"

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
  ShowBounds: true,            // toggled with 'b'
  ShowObstacles: false,         // toggled with 'o'

  // Modes
  VeinRenderMode: 'Lines',  // draw vein segments as "Lines" or "Dots"

  // Colors
  Colors: _ColorPresets__WEBPACK_IMPORTED_MODULE_0__["Light"],

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

    this.transformedPolygon = polygon;
    this.origin = {x:0, y:0};   // origin point used for translation
    this.scale = 1;
    this.width = -1;
    this.height = -1;
    this.isCentered = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYm91bmRzL2pzL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2JvdW5kcy9qcy9lbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9ib3VuZHMvc3ZnL2xlYWYuc3ZnIiwid2VicGFjazovLy8uL2JvdW5kcy9zdmcvdmVpbnMtdGV4dC5zdmciLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NvdXJjZVBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZpbGUtc2F2ZXIvZGlzdC9GaWxlU2F2ZXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3JhbmdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9rZGJ1c2gvc3JjL3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wb2ludC1pbi1wb2x5Z29uL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zaW1wbGV4LW5vaXNlL3NpbXBsZXgtbm9pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YS9saWIvU1ZHUGF0aERhdGEubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmctcG9pbnRzL21vZHVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wb2ludHMvbW9kdWxlcy90b1BvaW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXBvaW50cy9tb2R1bGVzL3ZhbGlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7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Q0EsV0FBVzs7QUFFWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixpQ0FBSTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLGlDQUFJLENBQUMseURBQU0sV0FBVyx5REFBTTs7QUFFekQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsOENBQU07QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNyYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQztBQUNMOztBQUU3QixhQUFhLG1CQUFPLENBQUMsa0VBQWtCOztBQUV4QjtBQUNmO0FBQ0EsMkJBQTJCO0FBQzNCLG1CQUFtQjtBQUNuQixxQkFBcUI7O0FBRXJCO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0NBQW9DLEVBQUUsaURBQVE7O0FBRTlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDLHFCQUFxQixpQ0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlDQUFJO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtDQUFrQztBQUNsRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNoS0E7QUFBQTtBQUFBO0FBQXlEOztBQUUxQztBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsc0VBQVc7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzRUFBVztBQUMxQixlQUFlLHNFQUFXO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNFQUFXO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNFQUFXO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHNFQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFBb0Usc0VBQVc7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0M7QUFDaEI7QUFDa0I7QUFDMUMsbUJBQW1CLG1CQUFPLENBQUMsb0VBQWU7O0FBRW5DO0FBQ1A7QUFDQTtBQUNBOztBQUVBLGNBQWMsY0FBYztBQUM1QixRQUFRLHlEQUFNO0FBQ2QsUUFBUSx5REFBTTtBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCLGNBQWMsMkNBQUk7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLGNBQWMsWUFBWTtBQUMxQixnQkFBZ0IsZUFBZTtBQUMvQixpREFBaUQseURBQU07QUFDdkQsK0NBQStDLHlEQUFNO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsb0RBQVc7QUFDekIsZ0JBQWdCLDJDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsY0FBYyxjQUFjO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsb0RBQVc7QUFDckIsWUFBWSwyQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsZUFBZTtBQUNqQyxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0EsWUFBWSxvREFBVztBQUN2QixjQUFjLDJDQUFJO0FBQ2xCLDJDQUEyQyxzREFBRztBQUM5QywyQ0FBMkMsc0RBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ0E7O0FBRXBDO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7O0FBRUEsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekMsa0JBQWtCLHVCQUF1QjtBQUN6QyxrQkFBa0IsZ0JBQWdCO0FBQ2xDLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxzQkFBc0IsR0FBRztBQUMvRSxFQUFFLHlEQUFNO0FBQ1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLHlEQUFNO0FBQ2xCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSw2Q0FBNkMsZUFBZTs7QUFFNUQ7QUFDQSxHOzs7Ozs7Ozs7Ozs7QUN4SUE7QUFBQTtBQUFBO0FBQWtDOztBQUVuQjtBQUNmO0FBQ0EseUJBQXlCO0FBQ3pCLDZCQUE2QixPQUFPLEtBQUs7QUFDekMsdUJBQXVCLGFBQWE7QUFDcEMsbUJBQW1CO0FBQ25CLG9DQUFvQyxFQUFFLGlEQUFRO0FBQzlDLHVCQUF1Qjs7QUFFdkIsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQ3hGQSw2SkFBZSxHQUFHLElBQXFDLENBQUMsaUNBQU8sRUFBRSxvQ0FBQyxDQUFDO0FBQUE7QUFBQTtBQUFBLG9HQUFDLENBQUMsS0FBSyxFQUE2RSxDQUFDLGtCQUFrQixhQUFhLGdCQUFnQiwrQkFBK0IsV0FBVyw0RkFBNEYsV0FBVyxrRUFBa0UsNERBQTRELFlBQVksSUFBSSxrQkFBa0IseUJBQXlCLDBEQUEwRCxrQkFBa0Isc0JBQXNCLHlDQUF5QyxVQUFVLGNBQWMseUJBQXlCLG9CQUFvQixJQUFJLFNBQVMsVUFBVSxvQ0FBb0MsY0FBYyxJQUFJLHlDQUF5QyxTQUFTLDBDQUEwQywwRkFBMEYscU9BQXFPLDBEQUEwRCx1REFBdUQsaU5BQWlOLDBCQUEwQiw0QkFBNEIsS0FBSyxLQUFLLGdEQUFnRCxtRkFBbUYsc0JBQXNCLEtBQUssa0NBQWtDLGlEQUFpRCxLQUFLLEdBQUcsbUJBQW1CLDhIQUE4SCxvSUFBb0ksMkNBQTJDLHFCQUFxQix1QkFBdUIsZUFBZSwwQkFBMEIsR0FBRyx3QkFBd0IseUNBQXlDLG9CQUFvQixLQUFLLGdEQUFnRCw0REFBNEQscUJBQXFCLE9BQU8sRUFBRSxvQkFBb0IsS0FBMEIscUJBQXFCOztBQUVuZ0YseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEMEI7QUFDRTtBQUNFOztBQUU5QjtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHFEQUFJO0FBQ1o7O0FBRUE7QUFDQSxlQUFlLHNEQUFLO0FBQ3BCOztBQUVBO0FBQ0EsZUFBZSx1REFBTTtBQUNyQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0NBQXNDLGVBQWU7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFD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QUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ3hkRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUMiLCJmaWxlIjoiYm91bmRzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYm91bmRzL2pzL2VudHJ5LmpzXCIpO1xuIiwiaW1wb3J0IHsgTGlnaHQsIERhcmssIEN1c3RvbSB9IGZyb20gJy4uLy4uL2NvcmUvQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNrZXRjaCB2YXJpYWJsZXNcclxuICAqL1xyXG4gIFVzZVBlclZlaW5Db2xvcnM6IHRydWUsXHJcblxyXG5cclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDMwLCAgICAgICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiBmYWxzZSwgICAgIC8vIHR1cm5zIG9uL29mZiBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgRW5hYmxlT3BhY2l0eUJsZW5kaW5nOiBmYWxzZSwgIC8vIHR1cm5zIG9uL29mZiBvcGFjaXR5XHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dTb3VyY2VzOiBmYWxzZSwgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdzJ1xyXG4gIFNob3dWZWluczogdHJ1ZSwgICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd2J1xyXG4gIFNob3dWZWluVGlwczogZmFsc2UsICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgLy8gdG9nZ2xlZCB3aXRoICdhJ1xyXG4gIFNob3dLaWxsWm9uZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdrJ1xyXG4gIFNob3dJbmZsdWVuY2VMaW5lczogZmFsc2UsICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IHRydWUsICAgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdiJ1xyXG4gIFNob3dPYnN0YWNsZXM6IGZhbHNlLCAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICdvJ1xyXG5cclxuICAvLyBNb2Rlc1xyXG4gIFZlaW5SZW5kZXJNb2RlOiAnTGluZXMnLCAgLy8gZHJhdyB2ZWluIHNlZ21lbnRzIGFzIFwiTGluZXNcIiBvciBcIkRvdHNcIlxyXG5cclxuICAvLyBDb2xvcnNcclxuICBDb2xvcnM6IERhcmssXHJcblxyXG4gIC8vIExpbmUgdGhpY2tuZXNzZXNcclxuICBWZWluVGhpY2tuZXNzOiAxLFxyXG4gIFZlaW5UaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAxXHJcbn0iLCJpbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgTmV0d29yayBmcm9tICcuLi8uLi9jb3JlL05ldHdvcmsnO1xyXG5pbXBvcnQgeyBnZXRSYW5kb21Tb3VyY2VzLCBnZXRHcmlkT2ZTb3VyY2VzIH0gZnJvbSAnLi4vLi4vY29yZS9Tb3VyY2VQYXR0ZXJucyc7XHJcbmltcG9ydCBWZWluTm9kZSBmcm9tICcuLi8uLi9jb3JlL1ZlaW5Ob2RlJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi4vLi4vY29yZS9QYXRoJztcclxuaW1wb3J0IFNWR0xvYWRlciBmcm9tICcuLi8uLi9jb3JlL1NWR0xvYWRlcic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4uLy4uL2NvcmUvVXRpbGl0aWVzJztcclxuaW1wb3J0IHsgc2V0dXBLZXlMaXN0ZW5lcnMgfSBmcm9tICcuLi8uLi9jb3JlL0tleWJvYXJkSW50ZXJhY3Rpb25zJztcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vU2V0dGluZ3MnO1xyXG5cclxuY29uc3QgbGVhZiA9IHJlcXVpcmUoJy4uL3N2Zy9sZWFmLnN2ZycpO1xyXG5jb25zdCB2ZWluc1RleHQgPSByZXF1aXJlKCcuLi9zdmcvdmVpbnMtdGV4dC5zdmcnKTtcclxuXHJcbmxldCBjYW52YXMsIGN0eDtcclxubGV0IG5ldHdvcms7XHJcblxyXG5jb25zdCBTUVVBUkUgPSAwO1xyXG5jb25zdCBDSVJDTEUgPSAxO1xyXG5jb25zdCBMRUFGID0gMjtcclxuY29uc3QgVkVJTlNURVhUID0gMztcclxubGV0IGN1cnJlbnRCb3VuZHNTaGFwZSA9IENJUkNMRTtcclxuXHJcbi8vIENyZWF0ZSBpbml0aWFsIGNvbmRpdGlvbnMgZm9yIHNpbXVsYXRpb25cclxubGV0IHNldHVwID0gKCkgPT4ge1xyXG4gIC8vIEluaXRpYWxpemUgY2FudmFzIGFuZCBjb250ZXh0XHJcbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NrZXRjaCcpO1xyXG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAvLyBJbml0aWFsaXplIHNpbXVsYXRpb24gb2JqZWN0XHJcbiAgbmV0d29yayA9IG5ldyBOZXR3b3JrKGN0eCwgU2V0dGluZ3MpO1xyXG5cclxuICAvLyBBZGQgdGhlIGJvdW5kcywgc291cmNlcywgYW5kIHJvb3Qgbm9kZXNcclxuICByZXNldE5ldHdvcmsoKTtcclxuXHJcbiAgLy8gU2V0IHVwIGNvbW1vbiBrZXlib2FyZCBpbnRlcmFjdGlvbiBsaXN0ZW5lcnNcclxuICBzZXR1cEtleUxpc3RlbmVycyhuZXR3b3JrKTtcclxuXHJcbiAgLy8gQmVnaW4gYW5pbWF0aW9uIGxvb3BcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxubGV0IHJlc2V0TmV0d29yayA9ICgpID0+IHtcclxuICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgYWRkQm91bmRzKCk7XHJcbiAgYWRkU291cmNlcygpO1xyXG4gIGFkZFJvb3RWZWlucygpO1xyXG59XHJcblxyXG4gIGxldCBhZGRCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2goY3VycmVudEJvdW5kc1NoYXBlKSB7XHJcbiAgICAgIGNhc2UgU1FVQVJFOlxyXG4gICAgICAgIG5ldHdvcmsuYm91bmRzID0gZ2V0U3F1YXJlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIENJUkNMRTpcclxuICAgICAgICBuZXR3b3JrLmJvdW5kcyA9IGdldENpcmNsZUJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMRUFGOlxyXG4gICAgICAgIG5ldHdvcmsuYm91bmRzID0gZ2V0TGVhZkJvdW5kcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBWRUlOU1RFWFQ6XHJcbiAgICAgICAgbmV0d29yay5ib3VuZHMgPSBnZXRWZWluc1RleHRCb3VuZHMoKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgbGV0IGdldFNxdWFyZUJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc2lkZUxlbmd0aCA9IDgwMDtcclxuXHJcbiAgICAgIHJldHVybiBbbmV3IFBhdGgoXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgW2N4IC0gc2lkZUxlbmd0aC8yLCBjeSAtIHNpZGVMZW5ndGgvMl0sICAvLyB0b3AgbGVmdCBjb3JuZXJcclxuICAgICAgICAgIFtjeCArIHNpZGVMZW5ndGgvMiwgY3kgLSBzaWRlTGVuZ3RoLzJdLCAgLy8gdG9wIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgICAgW2N4ICsgc2lkZUxlbmd0aC8yLCBjeSArIHNpZGVMZW5ndGgvMl0sICAvLyBib3R0b20gcmlnaHQgY29ybmVyXHJcbiAgICAgICAgICBbY3ggLSBzaWRlTGVuZ3RoLzIsIGN5ICsgc2lkZUxlbmd0aC8yXSAgIC8vIGJvdHRvbSBsZWZ0IGNvcm5lclxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgJ0JvdW5kcycsXHJcbiAgICAgICAgY3R4LFxyXG4gICAgICAgIFNldHRpbmdzXHJcbiAgICAgICldO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBnZXRDaXJjbGVCb3VuZHMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICAgIGNvbnN0IHJhZGl1cyA9IDM1MDtcclxuICAgICAgY29uc3QgcmVzb2x1dGlvbiA9IDEwMDtcclxuICAgICAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlc29sdXRpb247IGkrKykge1xyXG4gICAgICAgIGxldCBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICAgICAgbGV0IHggPSBjeCArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgICAgICBsZXQgeSA9IGN5ICsgTWF0aC5mbG9vcihyYWRpdXMgKiBNYXRoLnNpbihhbmdsZSkpO1xyXG5cclxuICAgICAgICBwb2ludHMucHVzaChbeCwgeV0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gW25ldyBQYXRoKHBvaW50cywgJ0JvdW5kcycsIGN0eCwgU2V0dGluZ3MpXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0TGVhZkJvdW5kcyA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcclxuICAgICAgY29uc3Qgc2hhcGVXaWR0aCA9IDkwMDtcclxuICAgICAgY29uc3Qgc2hhcGVIZWlnaHQgPSA5MDA7XHJcblxyXG4gICAgICBsZXQgcG9seWdvbiA9IFNWR0xvYWRlci5sb2FkKGxlYWYpWzBdO1xyXG5cclxuICAgICAgLy8gVHJhbnNsYXRlIHRoZSBkZXNpZ24gdG8gdGhlIHNjcmVlbiBjZW50ZXJcclxuICAgICAgZm9yKGxldCBwb2ludCBvZiBwb2x5Z29uKSB7XHJcbiAgICAgICAgcG9pbnRbMF0gPSBjeCAtIHNoYXBlV2lkdGgvMiArIHBvaW50WzBdO1xyXG4gICAgICAgIHBvaW50WzFdID0gY3kgLSBzaGFwZUhlaWdodC8yICsgcG9pbnRbMV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBbbmV3IFBhdGgocG9seWdvbiwgJ0JvdW5kcycsIGN0eCwgU2V0dGluZ3MpXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ2V0VmVpbnNUZXh0Qm91bmRzID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjeCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gICAgICBjb25zdCBzaGFwZVdpZHRoID0gOTAwO1xyXG4gICAgICBjb25zdCBzaGFwZUhlaWdodCA9IDkwMDtcclxuXHJcbiAgICAgIGxldCBwb2x5Z29ucyA9IFNWR0xvYWRlci5sb2FkKHZlaW5zVGV4dCk7XHJcbiAgICAgIGxldCBib3VuZHMgPSBbXTtcclxuXHJcbiAgICAgIGZvcihsZXQgcG9seWdvbiBvZiBwb2x5Z29ucykge1xyXG4gICAgICAgIC8vIFRyYW5zbGF0ZSB0aGUgZGVzaWduIHRvIHRoZSBzY3JlZW4gY2VudGVyXHJcbiAgICAgICAgZm9yKGxldCBwb2ludCBvZiBwb2x5Z29uKSB7XHJcbiAgICAgICAgICBwb2ludFswXSA9IGN4IC0gc2hhcGVXaWR0aC8yICsgcG9pbnRbMF07XHJcbiAgICAgICAgICBwb2ludFsxXSA9IGN5IC0gc2hhcGVIZWlnaHQvMiArIHBvaW50WzFdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYm91bmRzLnB1c2gobmV3IFBhdGgocG9seWdvbiwgJ0JvdW5kcycsIGN0eCwgU2V0dGluZ3MpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGJvdW5kcztcclxuICAgIH1cclxuXHJcbiAgbGV0IGFkZFNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAvLyBTZXQgdXAgdGhlIGF1eGluIHNvdXJjZXMgdXNpbmcgcHJlLW1hZGUgcGF0dGVybnNcclxuICAgIGxldCByYW5kb21Tb3VyY2VzID0gZ2V0UmFuZG9tU291cmNlcyg1MDAsIGN0eCwgMTAsIG5ldHdvcmsuYm91bmRzKTtcclxuICAgIGxldCBncmlkU291cmNlcyA9IGdldEdyaWRPZlNvdXJjZXMoMTUwLCAxNTAsIGN0eCwgMTAsIG5ldHdvcmsuYm91bmRzKTtcclxuXHJcbiAgICBuZXR3b3JrLnNvdXJjZXMgPSBncmlkU291cmNlcztcclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gIGxldCBhZGRSb290VmVpbnMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdmVpbkNvbG9ycyA9IFtcclxuICAgICAgU2V0dGluZ3MuVXNlUGVyVmVpbkNvbG9ycyA/ICdyZ2IoJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcpJyA6IHVuZGVmaW5lZCxcclxuICAgICAgU2V0dGluZ3MuVXNlUGVyVmVpbkNvbG9ycyA/ICdyZ2IoJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcpJyA6IHVuZGVmaW5lZCxcclxuICAgICAgU2V0dGluZ3MuVXNlUGVyVmVpbkNvbG9ycyA/ICdyZ2IoJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcpJyA6IHVuZGVmaW5lZCxcclxuICAgICAgU2V0dGluZ3MuVXNlUGVyVmVpbkNvbG9ycyA/ICdyZ2IoJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcpJyA6IHVuZGVmaW5lZCxcclxuICAgICAgU2V0dGluZ3MuVXNlUGVyVmVpbkNvbG9ycyA/ICdyZ2IoJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcsJyArIHJhbmRvbSgxMDAsMjU1KSArICcpJyA6IHVuZGVmaW5lZFxyXG4gICAgXTtcclxuXHJcbiAgICBzd2l0Y2goY3VycmVudEJvdW5kc1NoYXBlKSB7XHJcbiAgICAgIGNhc2UgU1FVQVJFOlxyXG4gICAgICBjYXNlIENJUkNMRTpcclxuICAgICAgICAvLyBBZGQgYSBzZXQgb2YgcmFuZG9tIHJvb3QgdmVpbnMgdGhyb3VnaG91dCBzY2VuZVxyXG4gICAgICAgIGZvcihsZXQgaT0wOyBpPDEzOyBpKyspIHtcclxuICAgICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG5ldyBWZWluTm9kZShcclxuICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgICAgcmFuZG9tKHdpbmRvdy5pbm5lcldpZHRoKSxcclxuICAgICAgICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgICBTZXR0aW5ncyxcclxuICAgICAgICAgICAgICB2ZWluQ29sb3JzW2kgJSB2ZWluQ29sb3JzLmxlbmd0aF1cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMRUFGOlxyXG4gICAgICAgIC8vIFB1dCBhIHNpbmdsZSByb290IG5vdGUgYXQgdGhlIGJhc2Ugb2YgdGhlIGxlYWZcclxuICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSA1LFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDIgKyAyMjBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBTZXR0aW5ncyxcclxuICAgICAgICAgICAgdmVpbkNvbG9yc1swXVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBWRUlOU1RFWFQ6XHJcbiAgICAgICAgLy8gVlxyXG4gICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIDMzMCxcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICsgNzBcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBTZXR0aW5ncyxcclxuICAgICAgICAgICAgdmVpbkNvbG9yc1swXVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIEVcclxuICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSAyMDAsXHJcbiAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIFNldHRpbmdzLFxyXG4gICAgICAgICAgICB2ZWluQ29sb3JzWzFdXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gSVxyXG4gICAgICAgIG5ldHdvcmsuYWRkVmVpbk5vZGUoXHJcbiAgICAgICAgICBuZXcgVmVpbk5vZGUoXHJcbiAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gMixcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIGN0eCxcclxuICAgICAgICAgICAgU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIHZlaW5Db2xvcnNbMl1cclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBOXHJcbiAgICAgICAgbmV0d29yay5hZGRWZWluTm9kZShcclxuICAgICAgICAgIG5ldyBWZWluTm9kZShcclxuICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgbmV3IFZlYzIoXHJcbiAgICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAyICsgMTAwLFxyXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAvIDJcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICBTZXR0aW5ncyxcclxuICAgICAgICAgICAgdmVpbkNvbG9yc1szXVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIFNcclxuICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgKyA0MTAsXHJcbiAgICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICBjdHgsXHJcbiAgICAgICAgICAgIFNldHRpbmdzLFxyXG4gICAgICAgICAgICB2ZWluQ29sb3JzWzRdXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gTWFpbiBwcm9ncmFtIGxvb3BcclxubGV0IHVwZGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcclxuICBuZXR3b3JrLnVwZGF0ZSgpO1xyXG4gIG5ldHdvcmsuZHJhdygpO1xyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlKTtcclxufVxyXG5cclxuLy8gS2V5IGNvbW1hbmRzIHNwZWNpZmljIHRvIHRoaXMgc2tldGNoXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcclxuICBzd2l0Y2goZS5rZXkpIHtcclxuICAgIC8vIHIgPSByZXNldCBzaW11bGF0aW9uIGJ5IHJlaW5pdGlhbGl6aW5nIHRoZSBuZXR3b3JrIHdpdGggaW5pdGlhbCBjb25kaXRpb25zXHJcbiAgICBjYXNlICdyJzpcclxuICAgICAgcmVzZXROZXR3b3JrKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgJzEnOlxyXG4gICAgICBjdXJyZW50Qm91bmRzU2hhcGUgPSBTUVVBUkU7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcyJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gQ0lSQ0xFO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnMyc6XHJcbiAgICAgIGN1cnJlbnRCb3VuZHNTaGFwZSA9IExFQUY7XHJcbiAgICAgIHJlc2V0TmV0d29yaygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICc0JzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gVkVJTlNURVhUO1xyXG4gICAgICByZXNldE5ldHdvcmsoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBLaWNrIG9mZiB0aGUgYXBwbGljYXRpb25cclxuc2V0dXAoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiBpZD1cXFwic3ZnMlxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwibGVhZi0yLnN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDkwMC4wMDAwMiA4OTkuOTk5OTlcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKVxcXCI+PGcgaWQ9XFxcImxheWVyMVxcXCIgaW5rc2NhcGU6bGFiZWw9XFxcIkNhbHF1ZSAxXFxcIiBpbmtzY2FwZTpncm91cG1vZGU9XFxcImxheWVyXFxcIj48cGF0aCBpZD1cXFwicGF0aDMxODNcXFwiIGQ9XFxcIk0gNDUwLjIxODkxLDgyOS4wNzQzNiA0NTAuNDUxMDcsODI4LjIxNDYgNDUxLjA4MzE4LDgyNi40NTI2OCA0NTIuMDE4NjksODI0LjA0NTM1IDQ1My4xNjEwNSw4MjEuMjQ5MzMgNDU0LjU4NTk4LDgxNi41NTc2OSA0NTQuOTQ5MzgsODEwLjI4OTk4IDQ1NC4xOTg5NCw4MDAuMjQwNjcgNDUyLjI4MjM4LDc4NC4yMDQyMiA0NTAuNjI2MzIsNzY5LjgwNDc4IDQ0OC45NDE2NSw3NTIuNzc4MDYgNDQ3LjQyNTUsNzM1LjI1MiA0NDYuMjc0OTksNzE5LjM1NDU1IDQ0NS4zMTcyLDcwNS42NDgyOSA0NDQuMzI1NzIsNjk0LjA4ODg0IDQ0My40MTc1MSw2ODUuODkzMTkgNDQyLjcwOTU3LDY4Mi4yNzgzNSA0NDAuODY1OTksNjgxLjM4MTAxIDQzNi43MTA1NCw2ODAuOTI1ODEgNDMwLjIzMjE3LDY4MC45MTIyOCA0MjEuNDE5ODIsNjgxLjMzOTkzIDM3My41NjQ3Niw2ODQuNjUyNzggMzQzLjg1OTQ3LDY4Ny42Njc3OCAzMjIuODIzODEsNjkxLjcwMTk3IDMwMC45Nzc2Miw2OTguMDcyNDEgMjkxLjA3MDk5LDcwMC44Mzk3NSAyODEuMTkzNDIsNzAyLjczNDEyIDI2OS43MzQ0OCw3MDMuOTkzNTUgMjU1LjA4MzcyLDcwNC44NTYwNyAyNDMuODE1MTksNzA1LjIzMSAyMzQuMDM0Nyw3MDUuMzI2IDIyNi43OTA2Nyw3MDUuMTQ2MjggMjIzLjEzMTQ4LDcwNC42OTcwOSAyMjEuMzg2MDUsNzAzLjczNjg0IDIyMS4xNTgyLDcwMi4zOTg1IDIyMi42MjI1Nyw3MDAuMTc5ODMgMjI1Ljk1MzgxLDY5Ni41Nzg1NSAyMzEuMTk1MzYsNjkwLjA5MTk3IDIzNC41NzcsNjgzLjU5NTg5IDIzNS44ODY4Nyw2NzcuNjUyMDUgMjM0LjkxMzA4LDY3Mi44MjIxNyAyMjguODIyNjQsNjY3LjA5NDA0IDIxNi44NjE1NSw2NjAuODk3MjkgMTk5Ljg2ODQ4LDY1NC41OTM4MSAxNzguNjgyMTIsNjQ4LjU0NTUyIDE2Ni44NjA4NCw2NDUuNDU0MjcgMTU2Ljg5MjA1LDY0Mi42Mzg5NCAxNDkuODI0NTUsNjQwLjQxMDEyIDE0Ni43MDcwOSw2MzkuMDc4NDEgMTQ2Ljc0NjA1LDYzNy40MjYzNCAxNDguNTA3MTgsNjM0LjM1MDIzIDE1MS44Mjk3Miw2MzAuMDgyMzIgMTU2LjU1Mjg5LDYyNC44NTQ4NSAxNjMuMjkzNzcsNjE3LjQwMDIzIDE2Ny4wNDg1OCw2MTEuODQ2MzEgMTY4LjUwODU1LDYwNi43ODYwNSAxNjguMzY0OTYsNjAwLjgxMjQyIDE2NS44NTEzMiw1OTQuMjUwODcgMTU5LjE3OTUzLDU4Ni41NDE3NSAxNDcuNzMwODcsNTc3LjA5OTQ5IDEzMC44ODY2NCw1NjUuMzM4NSAxMjAuNDcwNTMsNTU4LjI5ODc3IDExMS45NDA2NCw1NTIuMzAxODIgMTA2LjE3NzE5LDU0Ny45ODI5MSAxMDQuMDYwNDQsNTQ1Ljk3NzI5IDEwNS4xMjY0Nyw1NDQuOTI0NDggMTA4LjAyOTAzLDU0My4xOTk3NSAxMTIuMzI0ODIsNTQxLjA0MjE1IDExNy41NzA1NCw1MzguNjkwNzcgMTMyLjQ2MTg5LDUzMS4zNzIxOSAxMzkuOTE5NjQsNTIzLjk1OTA1IDE0MS4xNjIzNCw1MTQuMDIxNCAxMzcuNDA4NSw0OTkuMTI5MjcgMTMyLjU5NzIxLDQ4My4yMjg2NSAxMjcuNjYzMiw0NjUuNDEyNzcgMTIzLjQwNCw0NDguNjc5MDQgMTIwLjYxNzE1LDQzNi4wMjQ5IDExNi40MDg3NSw0MTcuNDU2NjEgMTEwLjE5NDY5LDM5NC4xODUxNyAxMDMuNjk1ODIsMzcyLjMyMDc2IDk4LjYzMzAxNiwzNTcuOTczNTYgOTYuMDUwMTg3LDM1Mi45NzYwNiA5Mi41MDA0NzMsMzQ3LjI2ODQgODguNDUxODExLDM0MS41NTQwOSA4NC4zNzIxMzYsMzM2LjUzNjY1IDgwLjcyNjc1NiwzMzIuMTcyNDggNzcuODYwNTYyLDMyOC4yMzgxNyA3Ni4wNjA4NjIsMzI1LjE2NTIyIDc1LjYxNDk2NiwzMjMuMzg1MTQgOTQuNDY3MTg4LDMyMC40MDIwNCAxMzQuODkyMjIsMzIzLjk2OTg1IDE3OS42NTI4OCwzMzEuNzg1MjYgMjExLjUxMTk4LDM0MS41NDQ5NSAyMTYuODQ3MjIsMzQ0LjEwODI5IDIyMy42NDgwMywzNDcuMTcyNTUgMjMxLjA0MDIsMzUwLjM1MzE5IDIzOC4xNDk1NSwzNTMuMjY1NjEgMjQ1LjQwODM1LDM1Ni40MjQwOSAyNTMuMjA2MDIsMzYwLjI3NDY1IDI2MC42MDY0MSwzNjQuMzMwMzkgMjY2LjY3MzM3LDM2OC4xMDQzOCAyODQuNzc1NDcsMzc5LjIzNjU5IDI5Ni40NzE0NSwzODIuOTUzODMgMzAzLjEyNTA4LDM3OS4yNTc2MyAzMDYuMTAwMTMsMzY4LjE0OTU3IDMwNy45MDQ4MywzNTYuMjE2NzIgMzEwLjcxODQzLDM0My44MjQxIDMxNC4zMjEzMSwzMzEuODA3MjMgMzE4LjQ5MzgzLDMyMS4wMDE2MyAzMjAuNjU5MTcsMzE1LjExNTIzIDMyMy4xNjM4MiwzMDYuNzYxNjkgMzI1LjY5NzUxLDI5Ny4wNTM0NyAzMjcuOTQ5OTUsMjg3LjEwMzAzIDMzMC4zODc4NiwyNzQuNTgyNzcgMzMxLjUxNjU5LDI2Ni4xNDA0MyAzMzEuNDY2ODksMjYwLjAxMDQ3IDMzMC4zNjk1MywyNTQuNDI3MzkgMzI4LjAzNjk3LDI0NC4wMDYzNiAzMjkuMTAxOTYsMjM5LjcwMDI2IDMzNC43MDU1MiwyNDAuOTkzNTcgMzQ1Ljk4ODcxLDI0Ny4zNzA3NSAzNTUuNjg5MzIsMjUyLjU5NTc1IDM2NC40MTM2MywyNTYuMTU5MDEgMzcxLjE3NTExLDI1Ny43MzMzMSAzNzQuOTg3MiwyNTYuOTkxNDUgMzc1LjI3OTQ2LDI1NS44MjQ3NyAzNzUuMTM1MDEsMjUzLjU4ODM3IDM3NC41OTU5MywyNTAuNjAzNzcgMzczLjcwNDI4LDI0Ny4xOTI0OSAzNzIuNTE1MjQsMjQxLjg0OTA5IDM3Mi44NTY0MiwyMzYuMDQwODQgMzc1LjIwOTIsMjI3LjEzOTQ0IDM4MC4wNTQ5MywyMTIuNTE2NTkgMzg0LjA0MTU4LDIwMS42MDg3NyAzODguMjk4OSwxOTEuMjgyOTYgMzkyLjMyMjkyLDE4Mi42OTA0NiAzOTUuNjA5NjUsMTc2Ljk4MjU1IDQwMi4xNTIyMiwxNjcuMjc0MDcgNDEwLjA1MjEzLDE1NC42MzcgNDE5LjcyNDE3LDEzOC4zODk0OSA0MzEuNTgzMTIsMTE3Ljg0OTY3IDQ0NS4zNDczOSw5NC44ODgxNzkgNDU3LjA3NzU3LDc3LjYwMzg5NSA0NjYuMjQ0NzEsNjYuNzEwMTg4IDQ3Mi4zMTk4OSw2Mi45MjA0MjYgNDczLjUyOTI3LDYzLjYwNzI3MSA0NzQuMzI4ODksNjUuNzY3NzA0IDQ3NC43NDk1Myw2OS41NTE1NjcgNDc0LjgyMTk3LDc1LjEwODcwNiA0NzUuMDMyNjcsODAuNzk1MTE4IDQ3NS43MzMxNCw4Ny4yNjc3ODcgNDc2LjgxMzczLDkzLjczMDA3OSA0NzguMTY0NzcsOTkuMzg1MzU2IDQ4NC43NDc3NCwxMTYuOTEwNjkgNDk1LjA0MjUxLDEzOC41ODY1MiA1MDcuNDExNjYsMTYxLjIxMjU2IDUyMC4yMTc3NywxODEuNTg4NTMgNTI4LjcyMjY3LDE5My43MjEwOCA1MzQuMTY5OSwyMDAuNDE5NTEgNTM4LjEyMzYzLDIwMy4yNzMxMSA1NDIuMTQ4MDEsMjAzLjg3MTE0IDU0NS4xMTI5LDIwMy41OTk3MiA1NDguMjc4NjgsMjAyLjg2MDY5IDU1MS4yNjYzOSwyMDEuNzY2OTQgNTUzLjY5NzA0LDIwMC40MzEzMyA1NTYuNDY3MDcsMTk4LjYyNTg2IDU1OC4yNjc5LDE5OC4wNDI3MSA1NTkuNjY5MjQsMTk4LjY5NDAzIDU2MS4yNDA3OSwyMDAuNTkxOTcgNTYyLjQxMDc5LDIwMy44ODE0MyA1NjMuNTUwMTksMjEwLjE1NTI4IDU2NC41NjM1MSwyMTguNzU0MDcgNTY1LjM1NTMsMjI5LjAxODM3IDU2Ni4yODE1OCwyNDEuNzU4MyA1NjcuNDA4MjYsMjUwLjM0MTcyIDU2OC45OTEzNCwyNTYuMTI2MTEgNTcxLjI4NjgzLDI2MC40Njg5OSA1NzguMzY2OTcsMjcxLjY0MDYzIDU4My44MjUxOCwyODEuNzc2NzEgNTg3Ljk1MzU0LDI5MS40ODE0NyA1OTEuMDQ0MTUsMzAxLjM1OTE0IDU5Mi43MTI0OSwzMDcuMjE5MDYgNTk0LjQ0MDMzLDMxMi40NTM1OCA1OTYuMDIzNzYsMzE2LjQ5MTY0IDU5Ny4yNTg4MywzMTguNzYyMTcgNTk4LjU5MTY2LDMyMS4xNzAxIDYwMC40NDExNSwzMjUuNTgyMTQgNjAyLjU2MjcyLDMzMS4zNzAxMyA2MDQuNzExNzksMzM3LjkwNTk0IDYwNy4xOTczMywzNDYuOTM4ODcgNjA4Ljc4ODI5LDM1NS42OTE3NyA2MDkuNjcxNDgsMzY1LjU3MTY4IDYxMC4wMzM3MSwzNzcuOTg1NjMgNjEwLjg5MTIzLDQwMS40NjY1NiA2MTMuODk0NTcsNDEyLjc4NTY0IDYyMC43NDMzNCw0MTQuMTI2OSA2MzMuMTM3MTUsNDA3LjY3NDM3IDYzOC43OTM1MSw0MDQuMzEzOTcgNjQ0LjYxNjAyLDQwMS4wMjIxNSA2NDkuOTE5NDQsMzk4LjE3Njg2IDY1NC4wMTg1NiwzOTYuMTU2MDIgNjU4LjAyNCwzOTQuMjAzNTQgNjYzLjA3MTgzLDM5MS41NDQzOSA2NjguNTE1OTMsMzg4LjUyODA3IDY3My43MTAxNywzODUuNTA0MSA2ODQuNzk0NzQsMzc5Ljc2NiA2OTguNjIwNzYsMzc0LjE5MTY2IDcxNS4xMTEwMiwzNjguODA5MTEgNzM0LjE4ODMsMzYzLjY0NjQxIDc4MC45MTg5MSwzNTEuODU0OTggODExLjE3MTM0LDM0My41NTIxOCA4MzAuNTI2NDMsMzM3LjA3NTc2IDg0NC41NjQ5OSwzMzAuNzYzNDggODQ1LjE2ODYsMzMxLjA1NTkzIDg0NS42NjI5MSwzMzIuNDQxMiA4NDUuOTk2OTIsMzM0LjY5NTE4IDg0Ni4xMTk1OSwzMzcuNTkzNzggODQ1LjQ0ODAzLDM0Mi4yNDAxOCA4NDMuNDc2OTQsMzQ4LjY5MDEzIDg0MC4yNzE3MywzNTYuNzYwMTcgODM1Ljg5Nzc5LDM2Ni4yNjY4NCA4MzEuNDE5NTcsMzc1Ljk5Mjc5IDgyNi43ODI4MiwzODYuOTE1NzggODIyLjUzNDY3LDM5Ny42OTkwMSA4MTkuMjIyMjksNDA3LjAwNTY4IDgxMy42OTg4OCw0MjMuMjM5MjggODA3LjUxMDU2LDQ0MC4xNDcxOSA4MDAuMjI5NTUsNDU4Ljg2MDc2IDc5MS40MjgwOSw0ODAuNTExMzcgNzg2LjkxNDg4LDQ5MC43MzY0NCA3ODIuNjA3MjMsNDk4Ljg2OTYgNzc4LjExNjM4LDUwNS41NjYwNyA3NzMuMDUzNTQsNTExLjQ4MTA5IDc2OS4yMzA1OSw1MTUuNTk1MjcgNzY2LjA5OTkzLDUxOS4xNjgxMyA3NjMuOTg0NjMsNTIxLjgxNjU1IDc2My4yMDc3Myw1MjMuMTU3MzkgNzYzLjUwNjgzLDUyMy45NTQ2NiA3NjQuMzIxMjEsNTI1LjEyMjkgNzY1LjUyNjQ4LDUyNi41MDUwNyA3NjYuOTk4MjYsNTI3Ljk0NDEyIDc2OS40NDg4NSw1MjkuNDk3NjYgNzcyLjkxNjE0LDUzMC41NjM4MyA3NzcuNTcwMDgsNTMxLjE3Nzc3IDc4My41ODA2Nyw1MzEuMzc0NjEgNzg4LjU0NzUxLDUzMS40NjQ1MSA3OTIuNjE0OTMsNTMxLjcwOTI5IDc5NS4zNjMxOSw1MzIuMDcxNTYgNzk2LjM3MjU1LDUzMi41MTM5NCA3OTUuMTA1MTUsNTM2LjI2ODQxIDc5MS44MDMwMSw1NDIuMDQxMjQgNzg3LjIxNjIzLDU0OC42NTQ3NiA3ODIuMDk0ODksNTU0LjkzMTI5IDc3MC41ODk5OSw1NjguNTc5NyA3NTguNzU4MTMsNTgzLjg5OTMxIDc0OS4xNDUyNiw1OTcuNDYxOTIgNzQ0LjI5NzM1LDYwNS44MzkzIDc0My40NzM5MSw2MDguODIzNjIgNzQzLjIyMTE5LDYxMS40NzU5MiA3NDMuNTQwMzQsNjEzLjg4NDA3IDc0NC40MzI1LDYxNi4xMzU5NCA3NDguNTEwNDEsNjIwLjgzMzQ4IDc1NS40Njc3OCw2MjYuMjYwNjQgNzYzLjc4NTU5LDYzMS4zNjk3MyA3NzEuOTQ0NzksNjM1LjExMzA2IDc3NS4wMTU1OCw2MzYuMzkzNDkgNzc3LjY4Mzc2LDYzNy44NDE5OCA3NzkuNjYzMSw2MzkuMjgwNjggNzgwLjY2NzM1LDY0MC41MzE3OCA3ODAuMDc0NDYsNjQzLjAxNTM3IDc3Ny41MzA1LDY0NS45ODcyMSA3NzQuMDk0MjksNjQ4LjQ3OTggNzcwLjgyNDY1LDY0OS41MjU2NiA3NjguMjExMzQsNjUwLjM0Njg3IDc2Mi40NDQ0OSw2NTIuNTgyODQgNzU0LjM3NjIyLDY1NS44OTIxIDc0NC44NTg2Nyw2NTkuOTMzMiA3MTYuNDYwMDksNjcyLjY4MTE5IDY5OS4yOTU2NSw2ODEuOTc0NTcgNjkwLjg0NTEzLDY4OS40NjQ0OSA2ODguNTg4MzMsNjk2LjgwMjEyIDY5MC40MDEzOSw3MDMuMTk2MzYgNjk1LjE2OTUsNzExLjI5MTQ0IDcwMS44ODYwMiw3MTkuNjQ1MzkgNzA5LjU0NDM1LDcyNi44MTYyOCA3MTIuMDEzNDEsNzI5LjAxMzY0IDcxMy43ODYyOCw3MzEuMTI5OTkgNzE0LjcxNTQsNzMyLjk1MDM1IDcxNC42NTMxOCw3MzQuMjU5NzEgNzAyLjAwNDIzLDczNi4yMTUzMSA2NzQuNTkzNDcsNzM1Ljk1MTczIDY0Mi4zMDA2LDczMy44NTg5MSA2MTUuMDA1MzIsNzMwLjMyNjc4IDU5MC42MDIsNzI1LjQ5MzA1IDU3My4zODI2OSw3MjEuNjQzNzIgNTYxLjEzNjk0LDcxOC4yMzQxOCA1NTEuNjU0MjksNzE0LjcxOTgzIDU0NC41NjUwNiw3MTEuOTkwOTcgNTM1LjEyNjI0LDcwOC43NDQwNSA1MjQuNTY5NDMsNzA1LjM4NTgxIDUxNC4xMjYyMiw3MDIuMzIzMDIgNTAzLjgwMjcxLDY5OS4yNzk3MiA0OTMuNTcyOTcsNjk1Ljk3NDU1IDQ4NC42MTgxOSw2OTIuODA2MTggNDc4LjExOTU5LDY5MC4xNzMzIDQ3My4xNDA4Nyw2ODguMDcyMDggNDY4LjMyMjg1LDY4Ni4zNTEzNCA0NjQuMjE1MjIsNjg1LjE4ODY2IDQ2MS4zNjc2Miw2ODQuNzYxNjMgNDU4LjY0MTQxLDY4NS4wNTU1OCA0NTcuMTYzNDYsNjg2LjU2MzU5IDQ1Ni41NTQ2OSw2OTAuMjI0ODkgNDU2LjQzNjAxLDY5Ni45Nzg3MiA0NTcuMDg0NDksNzEzLjEyNzE4IDQ1OC44ODYxNiw3MzMuMTc2NzMgNDYxLjYyNTQyLDc1NS4xMzI5MSA0NjUuMDg2NjQsNzc3LjAwMTMgNDY4Ljg3NDU5LDc5OS41OTA2NSA0NzAuNDgzMDcsODEzLjUyNTM1IDQ3MC4wNTI1NCw4MjEuNDA2ODIgNDY3LjcyMzQ1LDgyNS44MzY1IDQ2My42OTc0Miw4MjguMTY0NDggNDU3LjgyMzEzLDgyOS43Nzg3MSA0NTIuNTIyNDgsODMwLjIzMTI2IDQ1MC4yMTc0LDgyOS4wNzQyMSA0NTAuMjE3NzgsODI5LjA3NDI1IDQ1MC4yMTgxNiw4MjkuMDc0MjggNDUwLjIxODUzLDgyOS4wNzQzMiBaXFxcIiBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjA3MjgwMTU5O3N0cm9rZS1vcGFjaXR5OjFcXFwiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiIHNvZGlwb2RpOm5vZGV0eXBlcz1cXFwiY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiB2aWV3Qm94PVxcXCIwIDAgOTAwIDkwMFxcXCIgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwic3ZnOFxcXCIgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKVxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwidmVpbnMtdGV4dC5zdmdcXFwiPjxnIGlua3NjYXBlOmxhYmVsPVxcXCJMYXllciAxXFxcIiBpbmtzY2FwZTpncm91cG1vZGU9XFxcImxheWVyXFxcIiBpZD1cXFwibGF5ZXIxXFxcIj48cGF0aCBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPVxcXCIwXFxcIiBpZD1cXFwicGF0aDgxOVxcXCIgc3R5bGU9XFxcImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTo3My43NjI3ODY4N3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOiYjeDI3O3NhbnMtc2VyaWYgQm9sZCYjeDI3OztsZXR0ZXItc3BhY2luZzotNC44MTU4MjkyOHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjQ5MDc0OTY7c3Ryb2tlLW9wYWNpdHk6MVxcXCIgZD1cXFwiTSAxMS43OTI0OTgsMzQ1LjY3MDgxIEggNjUuODc4NzYgTCAxMjEuMjIyODQsNDk5LjY4MzkxIDE3Ni40MjcxNywzNDUuNjcwODEgSCAyMzAuNTEzNDMgTCAxNTMuMjI3MzgsNTU0LjMyOTIgSCA4OS4wNzg1NTMgWlxcXCIgc29kaXBvZGk6bm9kZXR5cGVzPVxcXCJjY2NjY2NjY1xcXCI+PC9wYXRoPjxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiIGlkPVxcXCJwYXRoODIxXFxcIiBzdHlsZT1cXFwiZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjczLjc2Mjc4Njg3cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246JiN4Mjc7c2Fucy1zZXJpZiBCb2xkJiN4Mjc7O2xldHRlci1zcGFjaW5nOi00LjgxNTgyOTI4cHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNDkwNzQ5NjtzdHJva2Utb3BhY2l0eToxXFxcIiBkPVxcXCJNIDIzOS4zNTg3MSwzNDUuNjcwODEgSCAzODQuNTY3MDYgViAzODYuMzQwMzcgSCAyOTMuMTY1NDYgViA0MjUuMTkzMDMgSCAzNzkuMTE2NTIgViA0NjUuODYyNTMgSCAyOTMuMTY1NDYgViA1MTMuNjU5NyBIIDM4Ny42NDE3MiBWIDU1NC4zMjkyIEggMjM5LjM1ODcxIFpcXFwiIHNvZGlwb2RpOm5vZGV0eXBlcz1cXFwiY2NjY2NjY2NjY2NjY1xcXCI+PC9wYXRoPjxwYXRoIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiIGlkPVxcXCJwYXRoODIzXFxcIiBzdHlsZT1cXFwiZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpib2xkO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjczLjc2Mjc4Njg3cHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246JiN4Mjc7c2Fucy1zZXJpZiBCb2xkJiN4Mjc7O2xldHRlci1zcGFjaW5nOi00LjgxNTgyOTI4cHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNDkwNzQ5NjtzdHJva2Utb3BhY2l0eToxXFxcIiBkPVxcXCJNIDQxNi4zMzI2MSwzNDUuNjcwODEgSCA0NzAuMTM5MzUgViA1NTQuMzI5MiBIIDQxNi4zMzI2MSBaXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjXFxcIj48L3BhdGg+PHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgaWQ9XFxcInBhdGg4MjVcXFwiIHN0eWxlPVxcXCJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NzMuNzYyNzg2ODdweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjomI3gyNztzYW5zLXNlcmlmIEJvbGQmI3gyNzs7bGV0dGVyLXNwYWNpbmc6LTQuODE1ODI5MjhweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS40OTA3NDk2O3N0cm9rZS1vcGFjaXR5OjFcXFwiIGQ9XFxcIk0gNTA0LjQyMDU1LDM0NS42NzA4MSBIIDU2NC41MTYzOCBMIDY0MC40MDQ4NSw0ODguNzgyODIgViAzNDUuNjcwODEgSCA2OTEuNDE2NDQgViA1NTQuMzI5MiBIIDYzMS4zMjA2MSBMIDU1NS40MzIxNCw0MTEuMjE3MjQgViA1NTQuMzI5MiBIIDUwNC40MjA1NSBaXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjXFxcIj48L3BhdGg+PHBhdGggaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT1cXFwiMFxcXCIgaWQ9XFxcInBhdGg4MjdcXFwiIHN0eWxlPVxcXCJmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6NzMuNzYyNzg2ODdweDtsaW5lLWhlaWdodDoxLjI1O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjomI3gyNztzYW5zLXNlcmlmIEJvbGQmI3gyNzs7bGV0dGVyLXNwYWNpbmc6LTQuODE1ODI5MjhweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS40OTA3NDk2O3N0cm9rZS1vcGFjaXR5OjFcXFwiIGQ9XFxcIk0gODcwLjc2NjIxLDM1Mi4wOTk2MyBWIDM2My4xNDA0OCAzNzQuMTgxMzMgMzg1LjIyMjI3IDM5Ni4yNjMxMyBMIDg2Mi4yMjM1NSwzOTIuNjU1NjMgODUzLjc4NTY2LDM4OS41MTk4MiA4NDUuNDUyNjEsMzg2Ljg1NTcgODM3LjIyNDM3LDM4NC42NjMyMyA4MjkuMTYyMDksMzgyLjk1MTE2IDgyMS4zMjY5MywzODEuNzI4MjcgODEzLjcxODg1LDM4MC45OTQ1NCA4MDYuMzM3ODgsMzgwLjc0OTk2IDc5Ny4zMjM1MiwzODEuMDgxODggNzg5LjU2Njk3LDM4Mi4wNzc2NSA3ODMuMDY4MjQsMzgzLjczNzMxIDc3Ny44MjczMSwzODYuMDYwODEgNzczLjc5MTgsMzg5LjA4MzA1IDc3MC45MDkzLDM5Mi44MzkwNSA3NjkuMTc5OCwzOTcuMzI4NzkgNzY4LjYwMzMsNDAyLjU1MjIxIDc2OC45ODc2NSw0MDYuNTE3ODMgNzcwLjE0MDY1LDQxMC4wMjkyNiA3NzIuMDYyMyw0MTMuMDg2NDYgNzc0Ljc1MjY1LDQxNS42ODk0NiA3NzguNTI2MTIsNDE3LjkxNjg1IDc4My41NTczOSw0MTkuOTg3IDc4OS44NDY0Nyw0MjEuODk5OTcgNzk3LjM5MzQxLDQyMy42NTU2NiA4MDMuMTIzNDksNDI0LjgwODY2IDgwOC44NTM1Myw0MjUuOTYxNjYgODE0LjU4MzYyLDQyNy4xMTQ2NiA4MjAuMzEzNjYsNDI4LjI2NzY2IDgzNi40NTU2OCw0MzIuMjE1ODIgODUwLjA4MjA4LDQzNy4wNzI0IDg2MS4xOTI4Miw0NDIuODM3NDEgODY5Ljc4Nzk0LDQ0OS41MTA4NCA4NzYuMjA4MDYsNDU3LjM4OTY5IDg4MC43OTM4OCw0NjYuNzcwOTMgODgzLjU0NTM0LDQ3Ny42NTQ1NiA4ODQuNDYyNSw0OTAuMDQwNjEgODgzLjE3ODQ2LDUwNi4yMDAwOSA4NzkuMzI2MzcsNTIwLjE1ODQxIDg3Mi45MDYyNSw1MzEuOTE1NTQgODYzLjkxODA5LDU0MS40NzE0NyA4NTIuMzYxODksNTQ4LjgwODc1IDgzOC4wOTc4Myw1NTQuMDQ5NjggODIxLjEyNjAxLDU1Ny4xOTQyMiA4MDEuNDQ2MzcsNTU4LjI0MjQxIDc5MS41MTQ4Miw1NTguMDA2NTcgNzgxLjU2NTg1LDU1Ny4yOTkwNyA3NzEuNTk5MzQsNTU2LjExOTgzIDc2MS42MTU0MSw1NTQuNDY4OTUgNzUxLjYyMjcsNTUyLjM1NTEgNzQxLjYzMDA0LDU0OS43ODcwNiA3MzEuNjM3MzQsNTQ2Ljc2NDc5IDcyMS42NDQ2Nyw1NDMuMjg4MzIgViA1MzEuOTMzIDUyMC41Nzc2OCA1MDkuMjIyMzYgNDk3Ljg2NzA0IEwgNzMxLjU0OTk5LDUwMi44NTQ2NiA3NDEuMjgwNjYsNTA3LjE5NTg2IDc1MC44MzY1OSw1MTAuODkwNzEgNzYwLjIxNzgzLDUxMy45MzkxOCA3NjkuNDk0MjYsNTE2LjI2MjY0IDc3OC41OTYsNTE3LjkyMjMgNzg3LjUyMzAxLDUxOC45MTgwNyA3OTYuMjc1MzMsNTE5LjI0OTk5IDgwNC41NjQ3Miw1MTguODgzMTQgODExLjgyMzM4LDUxNy43ODI1MyA4MTguMDUxMzUsNTE1Ljk0ODIyIDgyMy4yNDg1OSw1MTMuMzgwMTQgODI3LjM0NTI0LDUxMC4xMzA3OSA4MzAuMjcxNCw1MDYuMjUyNTEgODMyLjAyNzEzLDUwMS43NDUzMiA4MzIuNjEyMzYsNDk2LjYwOTIzIDgzMi4yMTA1Niw0OTEuOTk3MjMgODMxLjAwNTE3LDQ4Ny45NDQyMyA4MjguOTk2MTMsNDg0LjQ1MDMgODI2LjE4MzUxLDQ4MS41MTUzNyA4MjIuMjQ0MDksNDc4LjkyOTg3IDgxNi43MTQ4OSw0NzYuNDg0MSA4MDkuNTk1OTksNDc0LjE3ODEgODAwLjg4NzMzLDQ3Mi4wMTE4NiA3OTUuNjgxMzcsNDcwLjg1ODg2IDc5MC40NzUzNiw0NjkuNzA1ODYgNzg1LjI2OTM5LDQ2OC41NTI4NiA3ODAuMDYzNDMsNDY3LjM5OTg2IDc2NS40NTg3Niw0NjMuNTQ3NzggNzUyLjk1MDQ0LDQ1OC42OTk5MyA3NDIuNTM4NDYsNDUyLjg1NjMgNzM0LjIyMjg4LDQ0Ni4wMTY5MSA3MjcuOTI1MDMsNDM4LjA0MTk4IDcyMy40MjY2LDQyOC43OTE3NCA3MjAuNzI3NTIsNDE4LjI2NjIzIDcxOS44Mjc4Myw0MDYuNDY1NDUgNzIxLjA4NTYzLDM5MS43ODIxMyA3MjQuODU5MSwzNzguODk4MTkgNzMxLjE0ODIyLDM2Ny44MTM2NCA3MzkuOTUyOTYsMzU4LjUyODQ4IDc1MS4xMTYxMywzNTEuMTkxMiA3NjQuNDgwNDUsMzQ1Ljk1MDI5IDc4MC4wNDU5NiwzNDIuODA1NzQgNzk3LjgxMjY4LDM0MS43NTc1NSA4MDYuNDY4OTEsMzQxLjkyMzUxIDgxNS4yNDc0NiwzNDIuNDIxNCA4MjQuMTQ4MjgsMzQzLjI1MTI1IDgzMy4xNzE0LDM0NC40MTI5OCA4NDIuMzM0MjYsMzQ1LjgzNjc1IDg1MS42NTQzNSwzNDcuNTkyNDQgODYxLjEzMTY2LDM0OS42ODAwOSBaXFxcIiBzb2RpcG9kaTpub2RldHlwZXM9XFxcImNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjXFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV4aW5Tb3VyY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uLCBjdHgsIHNldHRpbmdzID0ge30pIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAgIC8vIHZlYzIgb2YgdGhpcyBzb3VyY2UncyBwb3NpdGlvblxyXG4gICAgdGhpcy5jdHggPSBjdHg7ICAgICAgICAgICAgICAgLy8gZ2xvYmFsIGNhbnZhcyBjb250ZXh0XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jaW5nTm9kZXMgPSBbXTsgICAvLyByZWZlcmVuY2VzIHRvIG5vZGVzIHRoaXMgc291cmNlIGlzIGluZmx1ZW5jaW5nIGVhY2ggZnJhbWVcclxuICAgIHRoaXMuZnJlc2ggPSB0cnVlOyAgICAgICAgICAgIC8vIGZsYWcgdXNlZCB0byBwcmV2ZW50IHNvdXJjZXMgZnJvbSBiZWluZyByZW1vdmVkIGR1cmluZyBmaXJzdCBmcmFtZSBvZiBDbG9zZWQgdmVuYXRpb24gbW9kZVxyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIC8vIERyYXcgdGhlIGF0dHJhY3Rpb24gem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQXR0cmFjdGlvblpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGtpbGwgem9uZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93S2lsbFpvbmVzKSB7XHJcbiAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICB0aGlzLmN0eC5lbGxpcHNlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuS2lsbFpvbmVDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGF1eGluIHNvdXJjZVxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93U291cmNlcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMSwgMSwgMCwgMCwgTWF0aC5QSSAqIDIpO1xyXG4gICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Tb3VyY2VDb2xvcjtcclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImV4cG9ydCBjb25zdCBMaWdodCA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMCwwLDAsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDAsMCwwLDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDI1NSwwLDAsMSknLFxyXG4gIEF0dHJhY3Rpb25ab25lQ29sb3I6ICdyZ2JhKDAsMjU1LDAsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDAsMCwwLC4xKScsXHJcbiAgT2JzdGFjbGVGaWxsQ29sb3I6ICdyZ2JhKDAsMCwwLC43KSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERhcmsgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuOSknLFxyXG4gIFNvdXJjZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuNSknLFxyXG4gIFZlaW5Db2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4yKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKScsXHJcbiAgQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMiknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBSZWFsaXN0aWMgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgLy8gVmVpbkNvbG9yOiAncmdiYSgwLDAsMCwuMiknLFxyXG4gIFZlaW5UaXBDb2xvcjogJ3JnYmEoMjU1LDAsMCwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMCwyNTUsMCwuMDAyKScsXHJcbiAgS2lsbFpvbmVDb2xvcjogJ3JnYmEoMjU1LDAsMCwuNCknLFxyXG4gIEluZmx1ZW5jZUxpbmVzQ29sb3I6ICdyZ2JhKDAsMCwyNTUsMSknLFxyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYmEoNjEsMTY2LDEyLDEpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKSdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEN1c3RvbSA9IHtcclxuICBCYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQyLDI0MiwyNDIpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjYpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMyknLFxyXG4gIC8vIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYig2MSw4NSwxMzYpJyxcclxuICAvLyBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYig2MSw4NSwxMzYpJ1xyXG4gIEJvdW5kc0ZpbGxDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiKDIxMCwgODEsIDk0KSdcclxufSIsImltcG9ydCB7IExpZ2h0LCBEYXJrLCBSZWFsaXN0aWMsIEN1c3RvbSB9IGZyb20gJy4vQ29sb3JQcmVzZXRzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgIFNpbXVsYXRpb24gY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICBWZW5hdGlvblR5cGU6ICdPcGVuJywgICAgICAgICAvLyB2ZW5hdGlvbiBjYW4gYmUgXCJPcGVuXCIgb3IgXCJDbG9zZWRcIlxyXG4gIFNlZ21lbnRMZW5ndGg6IDUsICAgICAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDMwLCAgICAgICAvLyByYWRpdXMgb2YgaW5mbHVlbmNlIChkX2kpIGFyb3VuZCBlYWNoIGF1eGluIHNvdXJjZSB0aGF0IGF0dHJhY3RzIHZlaW4gc2VnbWVudHNcclxuICBLaWxsRGlzdGFuY2U6IDUsICAgICAgICAgICAgICAvLyBkaXN0YW5jZSAoZF9rKSBiZXR3ZWVuIGF1eGluIHNvdXJjZXMgYW5kIHNlZ21lbnRzIHdoZW4gc2VnbWVudHMgYXJlIGVuZGVkXHJcbiAgSXNQYXVzZWQ6IGZhbHNlLCAgICAgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcbiAgRW5hYmxlQ2FuYWxpemF0aW9uOiB0cnVlLCAgICAgLy8gdHVybnMgb24vb2ZmIGF1eGluIGZsdXggY2FuYWxpemF0aW9uIChsaW5lIHNlZ21lbnQgdGhpY2tlbmluZylcclxuICBFbmFibGVPcGFjaXR5QmxlbmRpbmc6IHRydWUsICAvLyB0dXJucyBvbi9vZmYgb3BhY2l0eVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICBSZW5kZXJpbmcgY29uZmlndXJhdGlvbnNcclxuICAqL1xyXG5cclxuICAvLyBWaXNpYmlsaXR5IHRvZ2dsZXNcclxuICBTaG93U291cmNlczogZmFsc2UsICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAncydcclxuICBTaG93VmVpbnM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndidcclxuICBTaG93VmVpblRpcHM6IGZhbHNlLCAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAndCdcclxuICBTaG93QXR0cmFjdGlvblpvbmVzOiBmYWxzZSwgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnaydcclxuICBTaG93SW5mbHVlbmNlTGluZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnaSdcclxuICBTaG93Qm91bmRzOiB0cnVlLCAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiBmYWxzZSwgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ28nXHJcblxyXG4gIC8vIE1vZGVzXHJcbiAgVmVpblJlbmRlck1vZGU6ICdMaW5lcycsICAvLyBkcmF3IHZlaW4gc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogTGlnaHQsXHJcblxyXG4gIC8vIExpbmUgdGhpY2tuZXNzZXNcclxuICBWZWluVGhpY2tuZXNzOiAxLjUsXHJcbiAgVmVpblRpcFRoaWNrbmVzczogMixcclxuICBCb3VuZHNCb3JkZXJUaGlja25lc3M6IDFcclxufSIsImltcG9ydCB7IGV4cG9ydFNWRyB9IGZyb20gXCIuL1V0aWxpdGllc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwS2V5TGlzdGVuZXJzKG5ldHdvcmspIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlUGF1c2UoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHYgPSB0b2dnbGUgdmVpbiB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3YnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpbnMoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHMgPSB0b2dnbGUgYXV4aW4gc291cmNlIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAncyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVTb3VyY2VzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQXR0cmFjdGlvblpvbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB0ID0gdG9nZ2xlIHZlaW4gdGlwIHZpc2liaWxpdHlcclxuICAgICAgY2FzZSAndCc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVWZWluVGlwcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gayA9IHRvZ2dsZSBraWxsIHpvbmUgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdrJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUtpbGxab25lcygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gaSA9IHRvZ2dsZSBpbmZsdWVuY2UgbGluZXMgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdpJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZUluZmx1ZW5jZUxpbmVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBiID0gdG9nZ2xlIGJvdW5kcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2InOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlQm91bmRzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBvID0gdG9nZ2xlIG9ic3RhY2xlcyB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgIG5ldHdvcmsudG9nZ2xlT2JzdGFjbGVzKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBlID0gZXhwb3J0IGFuIFNWRyBmaWxlIG9mIGFsbCB2aXNpYmxlIGdlb21ldHJ5XHJcbiAgICAgIGNhc2UgJ2UnOlxyXG4gICAgICAgIGV4cG9ydFNWRyhuZXR3b3JrKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIGMgPSB0b2dnbGUgYXV4aW4gZmx1eCBjYW5hbGl6YXRpb25cclxuICAgICAgY2FzZSAnYyc6XHJcbiAgICAgICAgbmV0d29yay50b2dnbGVDYW5hbGl6YXRpb24oKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIHAgPSB0b2dnbGUgb3BhY2l0eSBibGVuZGluZ1xyXG4gICAgICBjYXNlICdwJzpcclxuICAgICAgICBuZXR3b3JrLnRvZ2dsZU9wYWNpdHlCbGVuZGluZygpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgS0RCdXNoIGZyb20gJ2tkYnVzaCc7XHJcbmltcG9ydCAqIGFzIFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuaW1wb3J0IFBhdGggZnJvbSAnLi9QYXRoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmsge1xyXG4gIGNvbnN0cnVjdG9yKGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5zb3VyY2VzID0gW107ICAvLyBzb3VyY2VzIChBdXhpblNvdXJjZXMpIGF0dHJhY3QgdmVpbiBub2Rlc1xyXG4gICAgdGhpcy5ub2RlcyA9IFtdOyAgICAvLyBub2RlcyAoVmVpbk5vZGVzKSBhcmUgY29ubmVjdGVkIHRvIGZvcm0gdmVpbnNcclxuXHJcbiAgICB0aGlzLm5vZGVzSW5kZXg7ICAgIC8vIGtkLWJ1c2ggc3BhdGlhbCBpbmRleCBmb3IgYWxsIG5vZGVzXHJcblxyXG4gICAgdGhpcy5ib3VuZHMgPSBbXTtcclxuICAgIHRoaXMub2JzdGFjbGVzID0gW107XHJcblxyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICAvLyBTa2lwIGl0ZXJhdGlvbiBpZiBwYXVzZWRcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuSXNQYXVzZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFzc29jaWF0ZSBhdXhpbiBzb3VyY2VzIHdpdGggbmVhcmJ5IHZlaW4gbm9kZXMgdG8gZmlndXJlIG91dCB3aGVyZSBncm93dGggc2hvdWxkIG9jY3VyXHJcbiAgICBmb3IobGV0IFtzb3VyY2VJRCwgc291cmNlXSBvZiB0aGlzLnNvdXJjZXMuZW50cmllcygpKSB7XHJcbiAgICAgIHN3aXRjaCh0aGlzLnNldHRpbmdzLlZlbmF0aW9uVHlwZSkge1xyXG4gICAgICAgIC8vIEZvciBvcGVuIHZlbmF0aW9uLCBvbmx5IGFzc29jaWF0ZSB0aGlzIHNvdXJjZSB3aXRoIGl0cyBjbG9zZXN0IHZlaW4gbm9kZVxyXG4gICAgICAgIGNhc2UgJ09wZW4nOlxyXG4gICAgICAgICAgbGV0IGNsb3Nlc3ROb2RlID0gdGhpcy5nZXRDbG9zZXN0Tm9kZShzb3VyY2UsIHRoaXMuZ2V0Tm9kZXNJbkF0dHJhY3Rpb25ab25lKHNvdXJjZSkpO1xyXG5cclxuICAgICAgICAgIGlmKGNsb3Nlc3ROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xvc2VzdE5vZGUuaW5mbHVlbmNlZEJ5LnB1c2goc291cmNlSUQpO1xyXG4gICAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IFtjbG9zZXN0Tm9kZV07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIC8vIEZvciBjbG9zZWQgdmVuYXRpb24sIGFzc29jaWF0ZSB0aGlzIHNvdXJjZSB3aXRoIGFsbCBub2RlcyBpbiBpdHMgcmVsYXRpdmUgbmVpZ2hib3Job29kXHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGxldCBuZWlnaGJvcmhvb2ROb2RlcyA9IHRoaXMuZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKHNvdXJjZSk7XHJcbiAgICAgICAgICBsZXQgbm9kZXNJbktpbGxab25lID0gdGhpcy5nZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKTtcclxuXHJcbiAgICAgICAgICAvLyBFeGNsdWRlIG5vZGVzIHRoYXQgYXJlIGluIHRoZSBzb3VyY2UncyBraWxsIHpvbmUgKHRoZXNlIHNob3VsZCBzdG9wIGdyb3dpbmcpXHJcbiAgICAgICAgICBsZXQgbm9kZXNUb0dyb3cgPSBuZWlnaGJvcmhvb2ROb2Rlcy5maWx0ZXIoKG5laWdoYm9yTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIW5vZGVzSW5LaWxsWm9uZS5pbmNsdWRlcyhuZWlnaGJvck5vZGUpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc291cmNlLmluZmx1ZW5jaW5nTm9kZXMgPSBuZWlnaGJvcmhvb2ROb2RlcztcclxuXHJcbiAgICAgICAgICBpZihub2Rlc1RvR3Jvdy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNvdXJjZS5mcmVzaCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBub2RlIG9mIG5vZGVzVG9Hcm93KSB7XHJcbiAgICAgICAgICAgICAgbm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBHcm93IHRoZSBuZXR3b3JrIGJ5IGFkZGluZyBuZXcgdmVpbiBub2RlcyBvbnRvIGFueSBub2RlcyBiZWluZyBpbmZsdWVuY2VkIGJ5IHNvdXJjZXNcclxuICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgIGlmKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IHRoaXMuZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBub2RlLmluZmx1ZW5jZWRCeS5tYXAoaWQgPT4gdGhpcy5zb3VyY2VzW2lkXSkpO1xyXG4gICAgICAgIGxldCBuZXh0Tm9kZSA9IG5vZGUuZ2V0TmV4dE5vZGUoYXZlcmFnZURpcmVjdGlvbik7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55Qm91bmRzID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhbGxvdyByb290IHZlaW5zIGluc2lkZSBvZiBkZWZpbmVkIGJvdW5kc1xyXG4gICAgICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiB0aGlzLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgICAgIGlmKGJvdW5kLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICAgICAgaXNJbnNpZGVBbnlCb3VuZHMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBOT1RFOiBkaXNhYmxpbmcgdGhpcyBjaGVjayBsZXRzIHZlaW5zIGdyb3cgYWNyb3NzIGdhcHMgaW4gYm91bmRzIC0gY29vbCBlZmZlY3QhXHJcbiAgICAgICAgaWYoXHJcbiAgICAgICAgICAoaXNJbnNpZGVBbnlCb3VuZHMgfHwgdGhpcy5ib3VuZHMubGVuZ3RoID09PSAwKSAmJlxyXG4gICAgICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMubm9kZXMucHVzaChuZXh0Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBub2RlLmluZmx1ZW5jZWRCeSA9IFtdO1xyXG5cclxuICAgICAgLy8gUGVyZm9ybSBhdXhpbiBmbHV4IGNhbmFsaXphdGlvbiAobGluZSBzZWdtZW50IHRoaWNrZW5pbmcpXHJcbiAgICAgIGlmKG5vZGUuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24pIHtcclxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBub2RlO1xyXG5cclxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgLy8gV2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgY2hpbGQgdmVpbnMsIHVzZSB0aGUgdGhpY2tlc3Qgb2YgdGhlbSBhbGxcclxuICAgICAgICAgIGlmKGN1cnJlbnROb2RlLnBhcmVudC50aGlja25lc3MgPCBjdXJyZW50Tm9kZS50aGlja25lc3MgKyAuMDcpIHtcclxuICAgICAgICAgICAgY3VycmVudE5vZGUucGFyZW50LnRoaWNrbmVzcyA9IGN1cnJlbnROb2RlLnRoaWNrbmVzcyArIC4wMztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF1eGluIHNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIHZlaW4gbm9kZXNcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIGFzIHNvb24gYXMgYW55IHZlaW4gbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihzb3VyY2UucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2Ugb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIHZlaW4gbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDAgJiYgIXNvdXJjZS5mcmVzaCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsTm9kZXNSZWFjaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcykge1xyXG4gICAgICAgICAgICAgIGlmKG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKSA+IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxOb2Rlc1JlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGFsbE5vZGVzUmVhY2hlZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc291cmNlcy5zcGxpY2Uoc291cmNlSUQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWJ1aWxkIHNwYXRpYWwgaW5kaWNlc1xyXG4gICAgdGhpcy5idWlsZFNwYXRpYWxJbmRpY2VzKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xyXG4gICAgdGhpcy5kcmF3Qm91bmRzKCk7XHJcbiAgICB0aGlzLmRyYXdPYnN0YWNsZXMoKTtcclxuICAgIHRoaXMuZHJhd1NvdXJjZXMoKTtcclxuICAgIHRoaXMuZHJhd1ZlaW5zKCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QmFja2dyb3VuZCgpIHtcclxuICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZHJhd0JvdW5kcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyAmJiB0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBib3VuZCBvZiB0aGlzLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd09ic3RhY2xlcygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd09ic3RhY2xlcyAmJiB0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1ZlaW5zKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93VmVpbnMpIHtcclxuICAgICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgICBub2RlLmRyYXcoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd1NvdXJjZXMoKSB7XHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiB0aGlzLnNvdXJjZXMpIHtcclxuICAgICAgc291cmNlLmRyYXcoKTtcclxuXHJcbiAgICAgIC8vIERyYXcgbGluZXMgYmV0d2VlbiBlYWNoIHNvdXJjZSBhbmQgdGhlIG5vZGVzIHRoZXkgYXJlIGluZmx1ZW5jaW5nXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0luZmx1ZW5jZUxpbmVzICYmIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG5vZGUgb2Ygc291cmNlLmluZmx1ZW5jaW5nTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubW92ZVRvKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lVG8obm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5JbmZsdWVuY2VMaW5lc0NvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKSB7XHJcbiAgICBsZXQgZmFpbDtcclxuXHJcbiAgICBsZXQgbmVhcmJ5Tm9kZXMgPSB0aGlzLmdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpO1xyXG4gICAgbGV0IHJlbGF0aXZlTmVpZ2hib3JzID0gW107XHJcbiAgICBsZXQgc291cmNlVG9QMCwgc291cmNlVG9QMSwgcDBUb1AxO1xyXG5cclxuICAgIC8vIHAwIGlzIGEgcmVsYXRpdmUgbmVpZ2hib3Igb2YgYXV4aW5Qb3MgaWZmXHJcbiAgICAvLyBmb3IgYW55IHBvaW50IHAxIHRoYXQgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gaXMgcDAsXHJcbiAgICAvLyBwMCBpcyBjbG9zZXIgdG8gYXV4aW5Qb3MgdGhhbiB0byBwMVxyXG4gICAgZm9yKGxldCBwMCBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBmYWlsID0gZmFsc2U7XHJcbiAgICAgIHNvdXJjZVRvUDAgPSBwMC5wb3NpdGlvbi5zdWJ0cmFjdChzb3VyY2UucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgZm9yKGxldCBwMSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICAgIGlmKHAwID09PSBwMSkge1xyXG4gICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb3VyY2VUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMS5sZW5ndGgoKSA+IHNvdXJjZVRvUDAubGVuZ3RoKCkpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcDBUb1AxID0gcDEucG9zaXRpb24uc3VidHJhY3QocDAucG9zaXRpb24sIHRydWUpO1xyXG5cclxuICAgICAgICBpZihzb3VyY2VUb1AwLmxlbmd0aCgpID4gcDBUb1AxLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBmYWlsID0gdHJ1ZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIWZhaWwpIHtcclxuICAgICAgICByZWxhdGl2ZU5laWdoYm9ycy5wdXNoKHAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZWxhdGl2ZU5laWdoYm9ycztcclxuICB9XHJcblxyXG4gIGdldE5vZGVzSW5BdHRyYWN0aW9uWm9uZShzb3VyY2UpIHtcclxuICAgIHJldHVybiB0aGlzLm5vZGVzSW5kZXgud2l0aGluKFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueCxcclxuICAgICAgc291cmNlLnBvc2l0aW9uLnksXHJcbiAgICAgIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlXHJcbiAgICApLm1hcChcclxuICAgICAgaWQgPT4gdGhpcy5ub2Rlc1tpZF1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luS2lsbFpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLktpbGxEaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdE5vZGUoc291cmNlLCBuZWFyYnlOb2Rlcykge1xyXG4gICAgbGV0IGNsb3Nlc3ROb2RlID0gbnVsbCxcclxuICAgICAgcmVjb3JkID0gdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2U7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5lYXJieU5vZGVzKSB7XHJcbiAgICAgIGxldCBkaXN0YW5jZSA9IG5vZGUucG9zaXRpb24uZGlzdGFuY2Uoc291cmNlLnBvc2l0aW9uKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UpIHtcclxuICAgICAgICBzb3VyY2UucmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYoZGlzdGFuY2UgPCByZWNvcmQpIHtcclxuICAgICAgICBjbG9zZXN0Tm9kZSA9IG5vZGU7XHJcbiAgICAgICAgcmVjb3JkID0gZGlzdGFuY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2xvc2VzdE5vZGU7XHJcbiAgfVxyXG5cclxuICBnZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5lYXJieVNvdXJjZXMpIHtcclxuICAgIC8vIEFkZCB1cCBub3JtYWxpemVkIHZlY3RvcnMgcG9pbnRpbmcgdG8gZWFjaCBhdXhpbiBzb3VyY2VcclxuICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gbmV3IFZlYzIoMCwwKTtcclxuXHJcbiAgICBmb3IobGV0IHNvdXJjZSBvZiBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKFxyXG4gICAgICAgIHNvdXJjZS5wb3NpdGlvbi5zdWJ0cmFjdChub2RlLnBvc2l0aW9uLCB0cnVlKS5ub3JtYWxpemUoKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzbWFsbCBhbW91bnQgb2YgcmFuZG9tIFwiaml0dGVyXCIgdG8gYXZvaWQgZ2V0dGluZyBzdHVjayBiZXR3ZWVuIHR3byBhdXhpbiBzb3VyY2VzIGFuZCBlbmRsZXNzbHkgZ2VuZXJhdGluZyBub2RlcyBpbiB0aGUgc2FtZSBwbGFjZVxyXG4gICAgLy8gKENyZWRpdCB0byBEYXZpZGUgUHJhdGkgKGVkYXApIGZvciB0aGUgaWRlYSwgc2VlbiBpbiBvZnhTcGFjZUNvbG9uaXphdGlvbilcclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uYWRkKG5ldyBWZWMyKHJhbmRvbSgtLjEsIC4xKSwgcmFuZG9tKC0uMSwgLjEpKSkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgYXZlcmFnZURpcmVjdGlvbi5kaXZpZGUobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoKS5ub3JtYWxpemUoKTtcclxuXHJcbiAgICByZXR1cm4gYXZlcmFnZURpcmVjdGlvbjtcclxuICB9XHJcblxyXG4gIGFkZFZlaW5Ob2RlKG5vZGUpIHtcclxuICAgIGxldCBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgbGV0IGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5ib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IGJvdW5kIG9mIHRoaXMuYm91bmRzKSB7XHJcbiAgICAgICAgaWYoYm91bmQuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgYWxsb3cgYW55IHJvb3QgdmVpbnMgdGhhdCBhcmUgaW5zaWRlIG9mIGFuIG9ic3RhY2xlXHJcbiAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIHRoaXMub2JzdGFjbGVzKSB7XHJcbiAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihcclxuICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IHRoaXMuYm91bmRzLmxlbmd0aCA9PT0gMCkgJiZcclxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IHRoaXMub2JzdGFjbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICkge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmVpblRpcHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICFub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVNvdXJjZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93U291cmNlcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZUJvdW5kcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcyA9ICF0aGlzLnNldHRpbmdzLlNob3dCb3VuZHM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPYnN0YWNsZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQ2FuYWxpemF0aW9uKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb24gPSAhdGhpcy5zZXR0aW5ncy5FbmFibGVDYW5hbGl6YXRpb247XHJcblxyXG4gICAgaWYoIXRoaXMuc2V0dGluZ3MuRW5hYmxlQ2FuYWxpemF0aW9uKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS50aGlja25lc3MgPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGFjaXR5QmxlbmRpbmcoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9ICF0aGlzLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLkVuYWJsZU9wYWNpdHlCbGVuZGluZyA9IHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlUGF1c2UoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLklzUGF1c2VkID0gIXRoaXMuc2V0dGluZ3MuSXNQYXVzZWQ7XHJcbiAgfVxyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5cclxubGV0IGluc2lkZSA9IHJlcXVpcmUoJ3BvaW50LWluLXBvbHlnb24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhdGgge1xyXG4gIGNvbnN0cnVjdG9yKHBvbHlnb24sIHR5cGUsIGN0eCwgc2V0dGluZ3MpIHtcclxuICAgIHRoaXMucG9seWdvbiA9IHBvbHlnb247ICAgICAvLyBhcnJheSBvZiBhcnJheXMgY29udGFpbmluZyBjb29yZGluYXRlcyBkZWZpbmluZyBhIHBvbHlnb24gKFtbeDAseTBdLFt4MSx5MV0sLi4uXSlcclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHRcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7ICAgICAgICAgICAvLyBzdHJpbmcgZWl0aGVyICdCb3VuZHMnIG9yICdPYnN0YWNsZSdcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbiA9IHBvbHlnb247XHJcbiAgICB0aGlzLm9yaWdpbiA9IHt4OjAsIHk6MH07ICAgLy8gb3JpZ2luIHBvaW50IHVzZWQgZm9yIHRyYW5zbGF0aW9uXHJcbiAgICB0aGlzLnNjYWxlID0gMTtcclxuICAgIHRoaXMud2lkdGggPSAtMTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gLTE7XHJcbiAgICB0aGlzLmlzQ2VudGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIHByb3ZpZGVkIGNvb3JkaW5hdGVzIGFyZSBpbnNpZGUgcG9seWdvbiBkZWZpbmVkIGJ5IHRoaXMgUGF0aFxyXG4gIGNvbnRhaW5zKHgsIHkpIHtcclxuICAgIHJldHVybiBpbnNpZGUoW3gsIHldLCB0aGlzLnBvbHlnb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVsYXRpdmUgdHJhbnNsYXRpb25cclxuICBtb3ZlQnkoeCwgeSkge1xyXG4gICAgdGhpcy5vcmlnaW4ueCArPSB4O1xyXG4gICAgdGhpcy5vcmlnaW4ueSArPSB5O1xyXG5cclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgfVxyXG5cclxuICAvLyBBYnNvbHV0ZSB0cmFuc2xhdGlvblxyXG4gIG1vdmVUbyh4LCB5KSB7XHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5vcmlnaW4ueCA9IHggLSB0aGlzLndpZHRoLzI7XHJcbiAgICAgIHRoaXMub3JpZ2luLnkgPSB5IC0gdGhpcy5oZWlnaHQvMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3JpZ2luLnggPSB4O1xyXG4gICAgICB0aGlzLm9yaWdpbi55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpO1xyXG4gIH1cclxuXHJcbiAgc2V0U2NhbGUoZmFjdG9yKSB7XHJcbiAgICB0aGlzLnNjYWxlICo9IGZhY3RvcjtcclxuICAgIHRoaXMuY3JlYXRlVHJhbnNmb3JtZWRQb2x5Z29uKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZURpbWVuc2lvbnMoKTtcclxuXHJcbiAgICBpZih0aGlzLmlzQ2VudGVyZWQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG8od2luZG93LmlubmVyV2lkdGgvMiwgd2luZG93LmlubmVySGVpZ2h0LzIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIHBhdGggbGVuZ3RoIGJ5IGFkZGluZyB1cCBhbGwgbGluZSBzZWdtZW50IGxlbmd0aHMgKGRpc3RhbmNlcyBiZXR3ZWVuIHBvbHlnb24gcG9pbnRzKVxyXG4gIGdldFRvdGFsTGVuZ3RoKCkge1xyXG4gICAgbGV0IHRvdGFsTGVuZ3RoID0gMDtcclxuXHJcbiAgICBmb3IobGV0IGk9MTsgaTx0aGlzLnBvbHlnb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG90YWxMZW5ndGggKz0gVmVjMihcclxuICAgICAgICB0aGlzLnBvbHlnb25baV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgIHRoaXMucG9seWdvbltpXVsxXSAqIHRoaXMuc2NhbGVcclxuICAgICAgKS5kaXN0YW5jZShcclxuICAgICAgICBWZWMyKFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMF0gKiB0aGlzLnNjYWxlLFxyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ktMV1bMV0gKiB0aGlzLnNjYWxlXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZURpbWVuc2lvbnMoKSB7XHJcbiAgICBsZXQgbGVmdE1vc3RDb29yZGluYXRlID0gdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMF0sXHJcbiAgICAgIHJpZ2h0TW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSxcclxuICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXSxcclxuICAgICAgYm90dG9tTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVsxXTtcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnRyYW5zZm9ybWVkUG9seWdvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVswXSA8IGxlZnRNb3N0Q29vcmRpbmF0ZSkge1xyXG4gICAgICAgIGxlZnRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9IGVsc2UgaWYodGhpcy50cmFuc2Zvcm1lZFBvbHlnb25baV1bMF0gPiByaWdodE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgcmlnaHRNb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSA8IHRvcE1vc3RDb29yZGluYXRlKSB7XHJcbiAgICAgICAgdG9wTW9zdENvb3JkaW5hdGUgPSB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXTtcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdID4gYm90dG9tTW9zdENvb3JkaW5hdGUpIHtcclxuICAgICAgICBib3R0b21Nb3N0Q29vcmRpbmF0ZSA9IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53aWR0aCA9IE1hdGguYWJzKHJpZ2h0TW9zdENvb3JkaW5hdGUgLSBsZWZ0TW9zdENvb3JkaW5hdGUpO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBNYXRoLmFicyhib3R0b21Nb3N0Q29vcmRpbmF0ZSAtIHRvcE1vc3RDb29yZGluYXRlKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRyYW5zZm9ybWVkUG9seWdvbigpIHtcclxuICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uID0gW107XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8dGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLnB1c2goXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgdGhpcy5wb2x5Z29uW2ldWzBdICogdGhpcy5zY2FsZSArIHRoaXMub3JpZ2luLngsXHJcbiAgICAgICAgICB0aGlzLnBvbHlnb25baV1bMV0gKiB0aGlzLnNjYWxlICsgdGhpcy5vcmlnaW4ueVxyXG4gICAgICAgIF1cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZihcclxuICAgICAgdGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMudHlwZSA9PSAnQm91bmRzJyB8fFxyXG4gICAgICB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMgJiYgdGhpcy50eXBlID09ICdPYnN0YWNsZXMnXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgLy8gRHJhdyBzZXF1ZW50aWFsIGxpbmVzIHRvIGFsbCBwb2ludHMgb2YgdGhlIHBvbHlnb25cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMudHJhbnNmb3JtZWRQb2x5Z29uW2ldWzBdLCB0aGlzLnRyYW5zZm9ybWVkUG9seWdvbltpXVsxXSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIERyYXcgbGluZSBiYWNrIHRvIGZpcnN0IHBvaW50IHRvIGNsb3NlIHRoZSBwb2x5Z29uXHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnRyYW5zZm9ybWVkUG9seWdvblswXVswXSwgdGhpcy50cmFuc2Zvcm1lZFBvbHlnb25bMF1bMV0pO1xyXG5cclxuICAgICAgc3dpdGNoKHRoaXMudHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0JvdW5kcyc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkJvdW5kc0JvcmRlckNvbG9yO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5Cb3VuZHNCb3JkZXJUaGlja25lc3M7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNGaWxsQ29sb3I7XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdPYnN0YWNsZSc6XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5PYnN0YWNsZUZpbGxDb2xvcjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGJvdW5kaW5nIGJveFxyXG4gICAgICAvLyB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgLy8gdGhpcy5jdHgubW92ZVRvKHRoaXMub3JpZ2luLngsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCArIHRoaXMud2lkdGgsIHRoaXMub3JpZ2luLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LmxpbmVUbyh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAvLyB0aGlzLmN0eC5saW5lVG8odGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XHJcbiAgICAgIC8vIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMSknO1xyXG4gICAgICAvLyB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJpbXBvcnQge1NWR1BhdGhEYXRhfSBmcm9tICcuLi9ub2RlX21vZHVsZXMvc3ZnLXBhdGhkYXRhJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0xvYWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzdGF0aWMgbG9hZChzdmdTdHJpbmcpIHtcclxuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XHJcbiAgICBsZXQgc3ZnTm9kZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3ZnU3RyaW5nLCAnaW1hZ2Uvc3ZnK3htbCcpO1xyXG5cclxuICAgIGxldCBpbnB1dFBhdGhzID0gc3ZnTm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdwYXRoJyksXHJcbiAgICAgIHBhdGhzID0gW107XHJcblxyXG4gICAgLy8gU2NyYXBlIGFsbCBwb2ludHMgZnJvbSBhbGwgcGF0aHMsIGFuZCByZWNvcmQgYnJlYWtwb2ludHNcclxuICAgIGZvcihsZXQgaW5wdXRQYXRoIG9mIGlucHV0UGF0aHMpIHtcclxuICAgICAgbGV0IHBhdGhEYXRhID0gbmV3IFNWR1BhdGhEYXRhKGlucHV0UGF0aC5nZXRBdHRyaWJ1dGUoJ2QnKSksXHJcbiAgICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICBsZXQgcHJldmlvdXNDb29yZHMgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IobGV0IFtpbmRleCwgY29tbWFuZF0gb2YgcGF0aERhdGEuY29tbWFuZHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgc3dpdGNoKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgLy8gTW92ZSAoJ00nKSBhbmQgbGluZSAoJ0wnKSBjb21tYW5kcyBoYXZlIGJvdGggWCBhbmQgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5NT1ZFX1RPOlxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBjb21tYW5kLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICgnSCcpIGNvbW1hbmRzIG9ubHkgaGF2ZSBYLCB1c2luZyBwcmV2aW91cyBjb21tYW5kJ3MgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBwcmV2aW91c0Nvb3Jkcy55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIFZlcnRpY2FsIGxpbmUgKCdWJykgY29tbWFuZHMgb25seSBoYXZlIFksIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBYXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLlZFUlRfTElORV9UTzpcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzQ29vcmRzLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBDbG9zZVBhdGggKCdaJykgY29tbWFuZHMgYXJlIGEgbmFpdmUgaW5kaWNhdGlvbiB0aGF0IHRoZSBjdXJyZW50IHBhdGggY2FuIGJlIHByb2Nlc3NlZCBhbmQgYWRkZWQgdG8gdGhlIHdvcmxkXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkNMT1NFX1BBVEg6XHJcbiAgICAgICAgICAgIC8vIENhcHR1cmUgcGF0aCBpbiByZXR1cm4gb2JqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW5jbG9zZWQgcGF0aHMgbmV2ZXIgaGF2ZSBDTE9TRV9QQVRIIGNvbW1hbmRzLCBzbyB3cmFwIHVwIHRoZSBjdXJyZW50IHBhdGggd2hlbiB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBwYXRoIGFuZCBoYXZlIG5vdCBmb3VuZCB0aGUgY29tbWFuZFxyXG4gICAgICAgIGlmKGluZGV4ID09IHBhdGhEYXRhLmNvbW1hbmRzLmxlbmd0aCAtIDEgJiYgY29tbWFuZC50eXBlICE9IFNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpIHtcclxuICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgIHBvaW50cyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBYIGNvb3JkaW5hdGUsIGlmIHRoZXJlIHdhcyBvbmVcclxuICAgICAgICBpZihjb21tYW5kLmhhc093blByb3BlcnR5KCd4JykpIHtcclxuICAgICAgICAgIHByZXZpb3VzQ29vcmRzLnggPSBjb21tYW5kLng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFkgY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3knKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueSA9IGNvbW1hbmQueTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBBdXhpblNvdXJjZSBmcm9tICcuL0F1eGluU291cmNlJztcclxuaW1wb3J0IFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSwgbWFwIH0gZnJvbSAnLi9VdGlsaXRpZXMnO1xyXG52YXIgU2ltcGxleE5vaXNlID0gcmVxdWlyZSgnc2ltcGxleC1ub2lzZScpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVNvdXJjZXMobnVtU291cmNlcywgY3R4LCBib3VuZHMgPSB1bmRlZmluZWQsIG9ic3RhY2xlcyA9IHVuZGVmaW5lZCkge1xyXG4gIGxldCBzb3VyY2VzID0gW107XHJcbiAgbGV0IHgsIHk7XHJcbiAgbGV0IGlzSW5zaWRlQW55Qm91bmRzLCBpc0luc2lkZUFueU9ic3RhY2xlLCBpc09uU2NyZWVuO1xyXG5cclxuICBmb3IobGV0IGk9MDsgaTxudW1Tb3VyY2VzOyBpKyspIHtcclxuICAgIHggPSByYW5kb20od2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgeSA9IHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgaXNJbnNpZGVBbnlCb3VuZHMgPSBmYWxzZTtcclxuICAgIGlzSW5zaWRlQW55T2JzdGFjbGUgPSBmYWxzZTtcclxuICAgIGlzT25TY3JlZW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHNvdXJjZXMgdGhhdCBhcmUgaW4gdGhlIHZpZXdwb3J0XHJcbiAgICBpZihcclxuICAgICAgeCA+IDAgJiZcclxuICAgICAgeCA8IHdpbmRvdy5pbm5lcldpZHRoICYmXHJcbiAgICAgIHkgPiAwICYmXHJcbiAgICAgIHkgPCB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICkge1xyXG4gICAgICBpc09uU2NyZWVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGFsbG93IHJvb3QgdmVpbnMgaW5zaWRlIG9mIGRlZmluZWQgYm91bmRzXHJcbiAgICBpZihib3VuZHMgIT0gdW5kZWZpbmVkICYmIGJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgYm91bmQgb2YgYm91bmRzKSB7XHJcbiAgICAgICAgaWYoYm91bmQuY29udGFpbnMoeCwgeSkpIHtcclxuICAgICAgICAgIGlzSW5zaWRlQW55Qm91bmRzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGVcclxuICAgIGlmKG9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgb2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcclxuICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoXHJcbiAgICAgIChpc0luc2lkZUFueUJvdW5kcyB8fCBib3VuZHMgPT09IHVuZGVmaW5lZCkgJiZcclxuICAgICAgKCFpc0luc2lkZUFueU9ic3RhY2xlIHx8IG9ic3RhY2xlcyA9PT0gdW5kZWZpbmVkKVxyXG4gICAgKSB7XHJcbiAgICAgIHNvdXJjZXMucHVzaChcclxuICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICBuZXcgVmVjMih4LHkpLFxyXG4gICAgICAgICAgY3R4XHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNvdXJjZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRHcmlkT2ZTb3VyY2VzKG51bVJvd3MsIG51bUNvbHVtbnMsIGN0eCwgaml0dGVyUmFuZ2UgPSAwLCBib3VuZHMgPSB1bmRlZmluZWQsIG9ic3RhY2xlcyA9IHVuZGVmaW5lZCkge1xyXG4gIGxldCBzb3VyY2VzID0gW107XHJcbiAgbGV0IHgsIHk7XHJcbiAgbGV0IGlzSW5zaWRlQW55Qm91bmRzLCBpc0luc2lkZUFueU9ic3RhY2xlLCBpc09uU2NyZWVuO1xyXG5cclxuICBmb3IobGV0IGk9MDsgaTw9bnVtUm93czsgaSsrKSB7XHJcbiAgICBmb3IobGV0IGo9MDsgajw9bnVtQ29sdW1uczsgaisrKSB7XHJcbiAgICAgIHggPSAod2luZG93LmlubmVyV2lkdGggLyBudW1Db2x1bW5zKSAqIGogKyByYW5kb20oLWppdHRlclJhbmdlLCBqaXR0ZXJSYW5nZSk7XHJcbiAgICAgIHkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cykgKiBpICsgcmFuZG9tKC1qaXR0ZXJSYW5nZSwgaml0dGVyUmFuZ2UpO1xyXG4gICAgICBpc0luc2lkZUFueUJvdW5kcyA9IGZhbHNlO1xyXG4gICAgICBpc0luc2lkZUFueU9ic3RhY2xlID0gZmFsc2U7XHJcbiAgICAgIGlzT25TY3JlZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgIC8vIE9ubHkgYWxsb3cgc291cmNlcyB0aGF0IGFyZSBpbiB0aGUgdmlld3BvcnRcclxuICAgICAgaWYoXHJcbiAgICAgICAgeCA+IDAgJiZcclxuICAgICAgICB4IDwgd2luZG93LmlubmVyV2lkdGggJiZcclxuICAgICAgICB5ID4gMCAmJlxyXG4gICAgICAgIHkgPCB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXNPblNjcmVlbiA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE9ubHkgYWxsb3cgc291cmNlcyBpbnNpZGUgb2YgYW55IG9mIHRoZSBkZWZpbmVkIGJvdW5kcyAoaWYgdXNlZClcclxuICAgICAgaWYoYm91bmRzICE9IHVuZGVmaW5lZCAmJiBib3VuZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcihsZXQgYm91bmQgb2YgYm91bmRzKSB7XHJcbiAgICAgICAgICBpZihib3VuZC5jb250YWlucyh4LCB5KSkge1xyXG4gICAgICAgICAgICBpc0luc2lkZUFueUJvdW5kcyA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBEb24ndCBhbGxvdyBhbnkgcm9vdCB2ZWlucyB0aGF0IGFyZSBpbnNpZGUgb2YgYW4gb2JzdGFjbGUgKGlmIHVzZWQpXHJcbiAgICAgIGlmKG9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgb2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IobGV0IG9ic3RhY2xlIG9mIG9ic3RhY2xlcykge1xyXG4gICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMoeCwgeSkpIHtcclxuICAgICAgICAgICAgaXNJbnNpZGVBbnlPYnN0YWNsZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihcclxuICAgICAgICBpc09uU2NyZWVuICYmXHJcbiAgICAgICAgKGlzSW5zaWRlQW55Qm91bmRzIHx8IGJvdW5kcyA9PT0gdW5kZWZpbmVkKSAmJlxyXG4gICAgICAgICghaXNJbnNpZGVBbnlPYnN0YWNsZSB8fCBvYnN0YWNsZXMgPT09IHVuZGVmaW5lZClcclxuICAgICAgKSB7XHJcbiAgICAgICAgc291cmNlcy5wdXNoKFxyXG4gICAgICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgICAgICBuZXcgVmVjMih4LHkpLFxyXG4gICAgICAgICAgICBjdHhcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBoeWxsb3RheGlzU291cmNlcyhjdHgpIHtcclxuICBsZXQgc291cmNlcyA9IFtdO1xyXG4gIGxldCBudW1DaXJjbGVzID0gNTAwMCxcclxuICBnb2xkZW5fcmF0aW8gPSAoTWF0aC5zcXJ0KDUpKzEpLzIgLSAxLFxyXG4gIGdvbGRlbl9hbmdsZSA9IGdvbGRlbl9yYXRpbyAqICgyKk1hdGguUEkpLFxyXG4gIGNpcmNsZV9yYWQgPSB3aW5kb3cuaW5uZXJXaWR0aC8yO1xyXG5cclxuXHJcbiAgZm9yKGxldCBpPTA7IGk8bnVtQ2lyY2xlczsgaSsrKSB7XHJcbiAgICBsZXQgcmF0aW8gPSBpIC8gbnVtQ2lyY2xlcyxcclxuICAgICAgYW5nbGUgPSBpICogZ29sZGVuX2FuZ2xlLFxyXG4gICAgICBzcGlyYWxfcmFkID0gcmF0aW8gKiBjaXJjbGVfcmFkO1xyXG5cclxuICAgIHNvdXJjZXMucHVzaChcclxuICAgICAgbmV3IEF1eGluU291cmNlKFxyXG4gICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgd2luZG93LmlubmVyV2lkdGgvMiArIE1hdGguY29zKGFuZ2xlKSAqIHNwaXJhbF9yYWQsXHJcbiAgICAgICAgICB3aW5kb3cuaW5uZXJIZWlnaHQvMiArIE1hdGguc2luKGFuZ2xlKSAqIHNwaXJhbF9yYWRcclxuICAgICAgICApLFxyXG4gICAgICAgIGN0eFxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNvdXJjZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXYXZlT2ZTb3VyY2VzKGN0eCkge1xyXG4gIGxldCBzb3VyY2VzID0gW107XHJcbiAgbGV0IG51bVJvd3MgPSA3MDtcclxuICBsZXQgbnVtQ29sdW1ucyA9IDEwMDtcclxuICBsZXQgcm93U3BhY2luZyA9IHdpbmRvdy5pbm5lckhlaWdodCAvIG51bVJvd3M7XHJcbiAgbGV0IGNvbFNwYWNpbmcgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnM7XHJcblxyXG4gIGZvcihsZXQgcm93ID0gMDsgcm93IDwgbnVtUm93czsgcm93KyspIHtcclxuICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgbnVtQ29sdW1uczsgY29sKyspIHtcclxuICAgICAgc291cmNlcy5wdXNoKFxyXG4gICAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgIG5ldyBWZWMyKFxyXG4gICAgICAgICAgICAoY29sICogY29sU3BhY2luZykgKyAoTWF0aC5zaW4obWFwKGNvbCwgMCwgbnVtQ29sdW1ucywgMCwgTWF0aC5QSSAqIDIpKSAqIDIwMCksXHJcbiAgICAgICAgICAgIChyb3cgKiByb3dTcGFjaW5nKSArIChNYXRoLnNpbihtYXAocm93LCAwLCBudW1Sb3dzLCAwLCBNYXRoLlBJICogMikpICogNTApXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgY3R4XHJcbiAgICAgICAgKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc291cmNlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5Tm9pc2Uoc291cmNlcykge1xyXG4gIGxldCBub2lzZSA9IG5ldyBTaW1wbGV4Tm9pc2UoKTtcclxuXHJcbiAgZm9yKGxldCBzb3VyY2Ugb2Ygc291cmNlcykge1xyXG4gICAgc291cmNlLnBvc2l0aW9uLnggKz0gbm9pc2Uubm9pc2UyRChzb3VyY2UucG9zaXRpb24ueCwgc291cmNlLnBvc2l0aW9uLnkpICogMTA7XHJcbiAgICBzb3VyY2UucG9zaXRpb24ueSArPSBub2lzZS5ub2lzZTJEKHNvdXJjZS5wb3NpdGlvbi54LCBzb3VyY2UucG9zaXRpb24ueSkgKiAxMDtcclxuICB9XHJcblxyXG4gIHJldHVybiBzb3VyY2VzO1xyXG59IiwiaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IHRvUGF0aCB9IGZyb20gJ3N2Zy1wb2ludHMnO1xyXG5cclxuLy8gcmFuZG9tKCksIHNpbWlsYXIgdG8gUHJvY2Vzc2luZydzXHJcbi8vIElmIHR3byBwYXJhbWV0ZXJzIGFyZSBwYXNzZWQsIHRoZXkgYXJlIGludGVycHJldGVkIGFzIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIG9mIHRoZSBkZXNpcmVkIHJhbmdlXHJcbi8vIElmIG9ubHkgb25lIHBhcmFtZXRlciBpcyBwYXNzZWQsIGl0IGlzIGludGVycHJldGVkIGFzIHRoZSBtYXhpbXVtLCB3aGlsZSB6ZXJvIGlzIHVzZWQgYXMgdGhlIG1pbmltdW1cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG4vLyBDb252ZXJ0cyBhIG51bWJlciBmcm9tIG9uZSByYW5nZSB0byBhbm90aGVyXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG9yaWdpbmFsTG93ZXIsIG9yaWdpbmFsVXBwZXIsIG5ld0xvd2VyLCBuZXdVcHBlcikge1xyXG4gIHJldHVybiBuZXdMb3dlciArIChuZXdVcHBlciAtIG5ld0xvd2VyKSAqICgodmFsdWUgLSBvcmlnaW5hbExvd2VyKSAvIChvcmlnaW5hbFVwcGVyIC0gb3JpZ2luYWxMb3dlcikpO1xyXG59XHJcblxyXG4vLyBSZXR1cm5zIGFuIGFycmF5IG9mIHBvaW50IGNvb3JkaW5hdGVzIChhbHNvIGFycmF5cywgd2l0aCB0d28gZW50cmllcykgZm9yIHBvaW50cyBhcnJhbmdlZCBpbiBhIGNpcmNsZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY2xlT2ZQb2ludHMoY3gsIGN5LCByYWRpdXMsIHJlc29sdXRpb24pIHtcclxuICBsZXQgYW5nbGUsIHgsIHk7XHJcbiAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICB4ID0gY3ggKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICB5ID0gY3kgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb2ludHM7XHJcbn1cclxuXHJcbi8vIENyZWF0ZXMgYW4gU1ZHIGRvY3VtZW50IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSB2aXNpYmxlIGdlb21ldHJ5LCB0aGVuIHB1c2hlcyBpdCB0byB0aGUgY2xpZW50XHJcbi8vIC0gVHJpZ2dlcmVkIGJ5IHByZXNzaW5nIGBlYCBpbiBhbnkgc2tldGNoLiBTZWUgS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMgZm9yIGRlZmluaXRpb25cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNWRyhuZXR3b3JrKSB7XHJcbiAgLy8gU2V0IHVwIDxzdmc+IGVsZW1lbnRcclxuICBsZXQgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICBzdmcuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvJywgJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZU5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsICd4bWxuczp4bGluaycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgd2luZG93LmlubmVyV2lkdGggKyAnICcgKyB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAvLyBDcmVhdGUgPGxpbmU+cyBmb3IgZWFjaCB2ZWluIHNlZ21lbnRcclxuICBpZihuZXR3b3JrLnNldHRpbmdzLlNob3dWZWlucykge1xyXG4gICAgbGV0IG5vZGVMaW5lc0dyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcblxyXG4gICAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5wYXJlbnQgIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsaW5lTm9kZSA9IGBcclxuICAgICAgICAgIDxsaW5lXHJcbiAgICAgICAgICAgIHgxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi54fVwiXHJcbiAgICAgICAgICAgIHkxPVwiJHtub2RlLnBhcmVudC5wb3NpdGlvbi55fVwiXHJcbiAgICAgICAgICAgIHgyPVwiJHtub2RlLnBvc2l0aW9uLnh9XCJcclxuICAgICAgICAgICAgeTI9XCIke25vZGUucG9zaXRpb24ueX1cIlxyXG4gICAgICAgICAgICBzdHJva2U9XCJibGFja1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIG5vZGVMaW5lc0dyb3VwLmlubmVySFRNTCArPSBsaW5lTm9kZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hcHBlbmRDaGlsZChub2RlTGluZXNHcm91cCk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3IgYm91bmRzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93Qm91bmRzKSB7XHJcbiAgICBpZihuZXR3b3JrLmJvdW5kcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBib3VuZHNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBib3VuZCBvZiBuZXR3b3JrLmJvdW5kcykge1xyXG4gICAgICAgIGJvdW5kc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhib3VuZC5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChib3VuZHNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgPHBhdGg+cyBmb3Igb2JzdGFjbGVzXHJcbiAgaWYobmV0d29yay5zZXR0aW5ncy5TaG93T2JzdGFjbGVzKSB7XHJcbiAgICBpZihuZXR3b3JrLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBvYnN0YWNsZXNHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG5cclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBuZXR3b3JrLm9ic3RhY2xlcykge1xyXG4gICAgICAgIG9ic3RhY2xlc0dyb3VwLmFwcGVuZENoaWxkKFxyXG4gICAgICAgICAgZ2V0UGF0aEVsRnJvbVBvaW50cyhvYnN0YWNsZS5wb2x5Z29uKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChvYnN0YWNsZXNHcm91cCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBHZW5lcmF0ZSB0aGUgZG9jdW1lbnQgYXMgYSBCbG9iIGFuZCBmb3JjZSBhIGRvd25sb2FkIGFzIGEgdGltZXN0YW1wZWQgLnN2ZyBmaWxlXHJcbiAgY29uc3Qgc3ZnRG9jdHlwZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiIHN0YW5kYWxvbmU9XCJub1wiPz4nO1xyXG4gIGNvbnN0IHNlcmlhbGl6ZWRTdmcgPSAobmV3IFhNTFNlcmlhbGl6ZXIoKSkuc2VyaWFsaXplVG9TdHJpbmcoc3ZnKTtcclxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3N2Z0RvY3R5cGUsIHNlcmlhbGl6ZWRTdmddLCB7IHR5cGU6ICdpbWFnZS9zdmcreG1sOycgfSlcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuICAvLyBDcmVhdGUgYSA8cGF0aD4gZWxlbWVudCB3aXRoIGEgcHJvcGVybHktZm9ybWF0dGVkIGBkYCBhdHRyaWJ1dGUgY29udGFpbmluZyBhbGwgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBwYXNzZWQgcG9pbnRzXHJcbiAgZnVuY3Rpb24gZ2V0UGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICAgIGxldCBwb2ludHNTdHJpbmcgPSAnJztcclxuXHJcbiAgICBmb3IobGV0IFtpbmRleCwgcG9pbnRdIG9mIHBvaW50cy5lbnRyaWVzKCkpIHtcclxuICAgICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgICBpZihpbmRleCA8IHBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgcG9pbnRzU3RyaW5nICs9ICcgJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBjbG9zZXBhdGggY29tbWFuZCB0byBhdXRvbWF0aWNhbGx5IGRyYXcgbGluZSBiYWNrIHRvIGluaXRpYWwgcG9pbnRcclxuICAgIHBvaW50c1N0cmluZyArPSAnICcgKyBwb2ludHNbMF1bMF0gKyAnLCcgKyBwb2ludHNbMF1bMV07XHJcblxyXG4gICAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgICB0eXBlOiAncG9seWxpbmUnLFxyXG4gICAgICBwb2ludHM6IHBvaW50c1N0cmluZ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHBhdGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gICAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDogbm9uZTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAxJyk7XHJcblxyXG4gICAgcmV0dXJuIHBhdGhFbDtcclxuICB9IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzLCBjb2xvciA9IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7ICAgICAgIC8vIHJlZmVyZW5jZSB0byBwYXJlbnQgbm9kZSwgbmVjZXNzYXJ5IGZvciB2ZWluIHRoaWNrZW5pbmcgbGF0ZXJcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjsgICAvLyB7dmVjMn0gb2YgdGhpcyBub2RlJ3MgcG9zaXRpb25cclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDsgICAgICAgICAvLyB7Ym9vbGVhbn1cclxuICAgIHRoaXMuY3R4ID0gY3R4OyAgICAgICAgICAgICAvLyBnbG9iYWwgY2FudmFzIGNvbnRleHQgZm9yIGRyYXdpbmdcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yOyAgICAgICAgIC8vIGNvbG9yLCB1c3VhbGx5IHBhc3NlZCBkb3duIGZyb20gcGFyZW50XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTsgICAgIC8vIHJlZmVyZW5jZXMgdG8gYWxsIEF1eGluU291cmNlcyBpbmZsdWVuY2luZyB0aGlzIG5vZGUgZWFjaCBmcmFtZVxyXG4gICAgdGhpcy50aGlja25lc3MgPSAwOyAgICAgICAgIC8vIHRoaWNrbmVzcyAtIHRoaXMgaXMgaW5jcmVhc2VkIGR1cmluZyB2ZWluIHRoaWNrZW5pbmcgcHJvY2Vzc1xyXG4gIH1cclxuXHJcbiAgZHJhdygpIHtcclxuICAgIGlmKHRoaXMucGFyZW50ICE9IG51bGwpIHtcclxuICAgICAgLy8gU21vb3RobHkgcmFtcCB1cCBvcGFjaXR5IGJhc2VkIG9uIHZlaW4gdGhpY2tuZXNzXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuRW5hYmxlT3BhY2l0eUJsZW5kaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZ2xvYmFsQWxwaGEgPSB0aGlzLnRoaWNrbmVzcyAvIDMgKyAuMjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gXCJMaW5lc1wiIHJlbmRlciBtb2RlXHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRpcFRoaWNrbmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYodGhpcy5jb2xvciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy5zZXR0aW5ncy5WZWluVGhpY2tuZXNzICsgdGhpcy50aGlja25lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgLy8gXCJEb3RzXCIgcmVuZGVyIG1vZGVcclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEgKyB0aGlzLnRoaWNrbmVzcyAvIDIsXHJcbiAgICAgICAgICAxICsgdGhpcy50aGlja25lc3MgLyAyLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vIENoYW5nZSBjb2xvciBvciBcInRpcFwiIG5vZGVzXHJcbiAgICAgICAgaWYodGhpcy5pc1RpcCAmJiB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcykge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpblRpcENvbG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFJlc2V0IGdsb2JhbCBvcGFjaXR5IGlmIGl0IHdhcyBjaGFuZ2VkIGR1ZSB0byBvcGFjaXR5IGdyYWRpZW50IGZsYWdcclxuICAgICAgaWYodGhpcy5zZXR0aW5ncy5FbmFibGVPcGFjaXR5QmxlbmRpbmcpIHtcclxuICAgICAgICB0aGlzLmN0eC5nbG9iYWxBbHBoYSA9IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENyZWF0ZSBhIG5ldyBub2RlIGluIHRoZSBwcm92aWRlZCBkaXJlY3Rpb24gYW5kIGEgcHJlLWRlZmluZWQgZGlzdGFuY2UgKFNlZ21lbnRMZW5ndGgpXHJcbiAgZ2V0TmV4dE5vZGUoYXZlcmFnZVNvdXJjZURpcmVjdGlvbikge1xyXG4gICAgdGhpcy5pc1RpcCA9IGZhbHNlO1xyXG4gICAgdGhpcy5uZXh0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLmFkZChhdmVyYWdlU291cmNlRGlyZWN0aW9uLm11bHRpcGx5KHRoaXMuc2V0dGluZ3MuU2VnbWVudExlbmd0aCksIHRydWUpO1xyXG5cclxuICAgIHJldHVybiBuZXcgVmVpbk5vZGUoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIHRoaXMubmV4dFBvc2l0aW9uLFxyXG4gICAgICB0cnVlLFxyXG4gICAgICB0aGlzLmN0eCxcclxuICAgICAgdGhpcy5zZXR0aW5ncyxcclxuICAgICAgdGhpcy5jb2xvclxyXG4gICAgKTtcclxuICB9XHJcbn0iLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYixjLGQpe3ZhciBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJHRVRcIixiKSxlLnJlc3BvbnNlVHlwZT1cImJsb2JcIixlLm9ubG9hZD1mdW5jdGlvbigpe2EoZS5yZXNwb25zZSxjLGQpfSxlLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGUuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLnNhdmVBc3x8KFwib2JqZWN0XCIhPXR5cGVvZiB3aW5kb3d8fHdpbmRvdyE9PWY/ZnVuY3Rpb24oKXt9OlwiZG93bmxvYWRcImluIEhUTUxBbmNob3JFbGVtZW50LnByb3RvdHlwZT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGEsYixkLGUpe2lmKGU9ZXx8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGUmJihlLmRvY3VtZW50LnRpdGxlPWUuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYSlyZXR1cm4gYyhhLGIsZCk7dmFyIGc9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWEudHlwZSxoPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGk9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChpfHxnJiZoKSYmXCJvYmplY3RcIj09dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBqPW5ldyBGaWxlUmVhZGVyO2oub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ai5yZXN1bHQ7YT1pP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGU/ZS5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxlPW51bGx9LGoucmVhZEFzRGF0YVVSTChhKX1lbHNle3ZhciBrPWYuVVJMfHxmLndlYmtpdFVSTCxsPWsuY3JlYXRlT2JqZWN0VVJMKGEpO2U/ZS5sb2NhdGlvbj1sOmxvY2F0aW9uLmhyZWY9bCxlPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2sucmV2b2tlT2JqZWN0VVJMKGwpfSw0RTQpfX0pO2Yuc2F2ZUFzPWEuc2F2ZUFzPWEsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWEpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiXG5pbXBvcnQgc29ydCBmcm9tICcuL3NvcnQnO1xuaW1wb3J0IHJhbmdlIGZyb20gJy4vcmFuZ2UnO1xuaW1wb3J0IHdpdGhpbiBmcm9tICcuL3dpdGhpbic7XG5cbmNvbnN0IGRlZmF1bHRHZXRYID0gcCA9PiBwWzBdO1xuY29uc3QgZGVmYXVsdEdldFkgPSBwID0+IHBbMV07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtEQnVzaCB7XG4gICAgY29uc3RydWN0b3IocG9pbnRzLCBnZXRYID0gZGVmYXVsdEdldFgsIGdldFkgPSBkZWZhdWx0R2V0WSwgbm9kZVNpemUgPSA2NCwgQXJyYXlUeXBlID0gRmxvYXQ2NEFycmF5KSB7XG4gICAgICAgIHRoaXMubm9kZVNpemUgPSBub2RlU2l6ZTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG5cbiAgICAgICAgY29uc3QgSW5kZXhBcnJheVR5cGUgPSBwb2ludHMubGVuZ3RoIDwgNjU1MzYgPyBVaW50MTZBcnJheSA6IFVpbnQzMkFycmF5O1xuXG4gICAgICAgIGNvbnN0IGlkcyA9IHRoaXMuaWRzID0gbmV3IEluZGV4QXJyYXlUeXBlKHBvaW50cy5sZW5ndGgpO1xuICAgICAgICBjb25zdCBjb29yZHMgPSB0aGlzLmNvb3JkcyA9IG5ldyBBcnJheVR5cGUocG9pbnRzLmxlbmd0aCAqIDIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZHNbaV0gPSBpO1xuICAgICAgICAgICAgY29vcmRzWzIgKiBpXSA9IGdldFgocG9pbnRzW2ldKTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaSArIDFdID0gZ2V0WShwb2ludHNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIDAsIGlkcy5sZW5ndGggLSAxLCAwKTtcbiAgICB9XG5cbiAgICByYW5nZShtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKSB7XG4gICAgICAgIHJldHVybiByYW5nZSh0aGlzLmlkcywgdGhpcy5jb29yZHMsIG1pblgsIG1pblksIG1heFgsIG1heFksIHRoaXMubm9kZVNpemUpO1xuICAgIH1cblxuICAgIHdpdGhpbih4LCB5LCByKSB7XG4gICAgICAgIHJldHVybiB3aXRoaW4odGhpcy5pZHMsIHRoaXMuY29vcmRzLCB4LCB5LCByLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhbmdlKGlkcywgY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBub2RlU2l6ZSkge1xuICAgIGNvbnN0IHN0YWNrID0gWzAsIGlkcy5sZW5ndGggLSAxLCAwXTtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICBsZXQgeCwgeTtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHggPSBjb29yZHNbMiAqIGldO1xuICAgICAgICAgICAgICAgIHkgPSBjb29yZHNbMiAqIGkgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoeCA+PSBtaW5YICYmIHggPD0gbWF4WCAmJiB5ID49IG1pblkgJiYgeSA8PSBtYXhZKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW21dKTtcblxuICAgICAgICBjb25zdCBuZXh0QXhpcyA9IChheGlzICsgMSkgJSAyO1xuXG4gICAgICAgIGlmIChheGlzID09PSAwID8gbWluWCA8PSB4IDogbWluWSA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1heFggPj0geCA6IG1heFkgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgcmlnaHQsIGRlcHRoKSB7XG4gICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbSA9IChsZWZ0ICsgcmlnaHQpID4+IDE7XG5cbiAgICBzZWxlY3QoaWRzLCBjb29yZHMsIG0sIGxlZnQsIHJpZ2h0LCBkZXB0aCAlIDIpO1xuXG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbGVmdCwgbSAtIDEsIGRlcHRoICsgMSk7XG4gICAgc29ydEtEKGlkcywgY29vcmRzLCBub2RlU2l6ZSwgbSArIDEsIHJpZ2h0LCBkZXB0aCArIDEpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QoaWRzLCBjb29yZHMsIGssIGxlZnQsIHJpZ2h0LCBpbmMpIHtcblxuICAgIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA+IDYwMCkge1xuICAgICAgICAgICAgY29uc3QgbiA9IHJpZ2h0IC0gbGVmdCArIDE7XG4gICAgICAgICAgICBjb25zdCBtID0gayAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgeiA9IE1hdGgubG9nKG4pO1xuICAgICAgICAgICAgY29uc3QgcyA9IDAuNSAqIE1hdGguZXhwKDIgKiB6IC8gMyk7XG4gICAgICAgICAgICBjb25zdCBzZCA9IDAuNSAqIE1hdGguc3FydCh6ICogcyAqIChuIC0gcykgLyBuKSAqIChtIC0gbiAvIDIgPCAwID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xlZnQgPSBNYXRoLm1heChsZWZ0LCBNYXRoLmZsb29yKGsgLSBtICogcyAvIG4gKyBzZCkpO1xuICAgICAgICAgICAgY29uc3QgbmV3UmlnaHQgPSBNYXRoLm1pbihyaWdodCwgTWF0aC5mbG9vcihrICsgKG4gLSBtKSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIHNlbGVjdChpZHMsIGNvb3JkcywgaywgbmV3TGVmdCwgbmV3UmlnaHQsIGluYyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0ID0gY29vcmRzWzIgKiBrICsgaW5jXTtcbiAgICAgICAgbGV0IGkgPSBsZWZ0O1xuICAgICAgICBsZXQgaiA9IHJpZ2h0O1xuXG4gICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBrKTtcbiAgICAgICAgaWYgKGNvb3Jkc1syICogcmlnaHQgKyBpbmNdID4gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIHJpZ2h0KTtcblxuICAgICAgICB3aGlsZSAoaSA8IGopIHtcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBpLCBqKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGkgKyBpbmNdIDwgdCkgaSsrO1xuICAgICAgICAgICAgd2hpbGUgKGNvb3Jkc1syICogaiArIGluY10gPiB0KSBqLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29vcmRzWzIgKiBsZWZ0ICsgaW5jXSA9PT0gdCkgc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGxlZnQsIGopO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHN3YXBJdGVtKGlkcywgY29vcmRzLCBqLCByaWdodCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA8PSBrKSBsZWZ0ID0gaiArIDE7XG4gICAgICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaikge1xuICAgIHN3YXAoaWRzLCBpLCBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGksIDIgKiBqKTtcbiAgICBzd2FwKGNvb3JkcywgMiAqIGkgKyAxLCAyICogaiArIDEpO1xufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaSwgaikge1xuICAgIGNvbnN0IHRtcCA9IGFycltpXTtcbiAgICBhcnJbaV0gPSBhcnJbal07XG4gICAgYXJyW2pdID0gdG1wO1xufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoaW4oaWRzLCBjb29yZHMsIHF4LCBxeSwgciwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgY29uc3QgcjIgPSByICogcjtcblxuICAgIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgYXhpcyA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCByaWdodCA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBjb25zdCBsZWZ0ID0gc3RhY2sucG9wKCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0IC0gbGVmdCA8PSBub2RlU2l6ZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGxlZnQ7IGkgPD0gcmlnaHQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzcURpc3QoY29vcmRzWzIgKiBpXSwgY29vcmRzWzIgKiBpICsgMV0sIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChsZWZ0ICsgcmlnaHQpIC8gMik7XG5cbiAgICAgICAgY29uc3QgeCA9IGNvb3Jkc1syICogbV07XG4gICAgICAgIGNvbnN0IHkgPSBjb29yZHNbMiAqIG0gKyAxXTtcblxuICAgICAgICBpZiAoc3FEaXN0KHgsIHksIHF4LCBxeSkgPD0gcjIpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4IC0gciA8PSB4IDogcXkgLSByIDw9IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobGVmdCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG0gLSAxKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAwID8gcXggKyByID49IHggOiBxeSArIHIgPj0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChtICsgMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKHJpZ2h0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobmV4dEF4aXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc3FEaXN0KGF4LCBheSwgYngsIGJ5KSB7XG4gICAgY29uc3QgZHggPSBheCAtIGJ4O1xuICAgIGNvbnN0IGR5ID0gYXkgLSBieTtcbiAgICByZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwb2ludCwgdnMpIHtcbiAgICAvLyByYXktY2FzdGluZyBhbGdvcml0aG0gYmFzZWQgb25cbiAgICAvLyBodHRwOi8vd3d3LmVjc2UucnBpLmVkdS9Ib21lcGFnZXMvd3JmL1Jlc2VhcmNoL1Nob3J0X05vdGVzL3BucG9seS5odG1sXG4gICAgXG4gICAgdmFyIHggPSBwb2ludFswXSwgeSA9IHBvaW50WzFdO1xuICAgIFxuICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHZzLmxlbmd0aCAtIDE7IGkgPCB2cy5sZW5ndGg7IGogPSBpKyspIHtcbiAgICAgICAgdmFyIHhpID0gdnNbaV1bMF0sIHlpID0gdnNbaV1bMV07XG4gICAgICAgIHZhciB4aiA9IHZzW2pdWzBdLCB5aiA9IHZzW2pdWzFdO1xuICAgICAgICBcbiAgICAgICAgdmFyIGludGVyc2VjdCA9ICgoeWkgPiB5KSAhPSAoeWogPiB5KSlcbiAgICAgICAgICAgICYmICh4IDwgKHhqIC0geGkpICogKHkgLSB5aSkgLyAoeWogLSB5aSkgKyB4aSk7XG4gICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnNpZGU7XG59O1xuIiwiLypcbiAqIEEgZmFzdCBqYXZhc2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHNpbXBsZXggbm9pc2UgYnkgSm9uYXMgV2FnbmVyXG5cbkJhc2VkIG9uIGEgc3BlZWQtaW1wcm92ZWQgc2ltcGxleCBub2lzZSBhbGdvcml0aG0gZm9yIDJELCAzRCBhbmQgNEQgaW4gSmF2YS5cbldoaWNoIGlzIGJhc2VkIG9uIGV4YW1wbGUgY29kZSBieSBTdGVmYW4gR3VzdGF2c29uIChzdGVndUBpdG4ubGl1LnNlKS5cbldpdGggT3B0aW1pc2F0aW9ucyBieSBQZXRlciBFYXN0bWFuIChwZWFzdG1hbkBkcml6emxlLnN0YW5mb3JkLmVkdSkuXG5CZXR0ZXIgcmFuayBvcmRlcmluZyBtZXRob2QgYnkgU3RlZmFuIEd1c3RhdnNvbiBpbiAyMDEyLlxuXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTggSm9uYXMgV2FnbmVyXG5cbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiBTT0ZUV0FSRS5cbiAqL1xuKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIEYyID0gMC41ICogKE1hdGguc3FydCgzLjApIC0gMS4wKTtcbiAgdmFyIEcyID0gKDMuMCAtIE1hdGguc3FydCgzLjApKSAvIDYuMDtcbiAgdmFyIEYzID0gMS4wIC8gMy4wO1xuICB2YXIgRzMgPSAxLjAgLyA2LjA7XG4gIHZhciBGNCA9IChNYXRoLnNxcnQoNS4wKSAtIDEuMCkgLyA0LjA7XG4gIHZhciBHNCA9ICg1LjAgLSBNYXRoLnNxcnQoNS4wKSkgLyAyMC4wO1xuXG4gIGZ1bmN0aW9uIFNpbXBsZXhOb2lzZShyYW5kb21PclNlZWQpIHtcbiAgICB2YXIgcmFuZG9tO1xuICAgIGlmICh0eXBlb2YgcmFuZG9tT3JTZWVkID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJhbmRvbSA9IHJhbmRvbU9yU2VlZDtcbiAgICB9XG4gICAgZWxzZSBpZiAocmFuZG9tT3JTZWVkKSB7XG4gICAgICByYW5kb20gPSBhbGVhKHJhbmRvbU9yU2VlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuICAgIH1cbiAgICB0aGlzLnAgPSBidWlsZFBlcm11dGF0aW9uVGFibGUocmFuZG9tKTtcbiAgICB0aGlzLnBlcm0gPSBuZXcgVWludDhBcnJheSg1MTIpO1xuICAgIHRoaXMucGVybU1vZDEyID0gbmV3IFVpbnQ4QXJyYXkoNTEyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDUxMjsgaSsrKSB7XG4gICAgICB0aGlzLnBlcm1baV0gPSB0aGlzLnBbaSAmIDI1NV07XG4gICAgICB0aGlzLnBlcm1Nb2QxMltpXSA9IHRoaXMucGVybVtpXSAlIDEyO1xuICAgIH1cblxuICB9XG4gIFNpbXBsZXhOb2lzZS5wcm90b3R5cGUgPSB7XG4gICAgZ3JhZDM6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDEsIDAsXG4gICAgICAtMSwgMSwgMCxcbiAgICAgIDEsIC0xLCAwLFxuXG4gICAgICAtMSwgLTEsIDAsXG4gICAgICAxLCAwLCAxLFxuICAgICAgLTEsIDAsIDEsXG5cbiAgICAgIDEsIDAsIC0xLFxuICAgICAgLTEsIDAsIC0xLFxuICAgICAgMCwgMSwgMSxcblxuICAgICAgMCwgLTEsIDEsXG4gICAgICAwLCAxLCAtMSxcbiAgICAgIDAsIC0xLCAtMV0pLFxuICAgIGdyYWQ0OiBuZXcgRmxvYXQzMkFycmF5KFswLCAxLCAxLCAxLCAwLCAxLCAxLCAtMSwgMCwgMSwgLTEsIDEsIDAsIDEsIC0xLCAtMSxcbiAgICAgIDAsIC0xLCAxLCAxLCAwLCAtMSwgMSwgLTEsIDAsIC0xLCAtMSwgMSwgMCwgLTEsIC0xLCAtMSxcbiAgICAgIDEsIDAsIDEsIDEsIDEsIDAsIDEsIC0xLCAxLCAwLCAtMSwgMSwgMSwgMCwgLTEsIC0xLFxuICAgICAgLTEsIDAsIDEsIDEsIC0xLCAwLCAxLCAtMSwgLTEsIDAsIC0xLCAxLCAtMSwgMCwgLTEsIC0xLFxuICAgICAgMSwgMSwgMCwgMSwgMSwgMSwgMCwgLTEsIDEsIC0xLCAwLCAxLCAxLCAtMSwgMCwgLTEsXG4gICAgICAtMSwgMSwgMCwgMSwgLTEsIDEsIDAsIC0xLCAtMSwgLTEsIDAsIDEsIC0xLCAtMSwgMCwgLTEsXG4gICAgICAxLCAxLCAxLCAwLCAxLCAxLCAtMSwgMCwgMSwgLTEsIDEsIDAsIDEsIC0xLCAtMSwgMCxcbiAgICAgIC0xLCAxLCAxLCAwLCAtMSwgMSwgLTEsIDAsIC0xLCAtMSwgMSwgMCwgLTEsIC0xLCAtMSwgMF0pLFxuICAgIG5vaXNlMkQ6IGZ1bmN0aW9uKHhpbiwgeWluKSB7XG4gICAgICB2YXIgcGVybU1vZDEyID0gdGhpcy5wZXJtTW9kMTI7XG4gICAgICB2YXIgcGVybSA9IHRoaXMucGVybTtcbiAgICAgIHZhciBncmFkMyA9IHRoaXMuZ3JhZDM7XG4gICAgICB2YXIgbjAgPSAwOyAvLyBOb2lzZSBjb250cmlidXRpb25zIGZyb20gdGhlIHRocmVlIGNvcm5lcnNcbiAgICAgIHZhciBuMSA9IDA7XG4gICAgICB2YXIgbjIgPSAwO1xuICAgICAgLy8gU2tldyB0aGUgaW5wdXQgc3BhY2UgdG8gZGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggY2VsbCB3ZSdyZSBpblxuICAgICAgdmFyIHMgPSAoeGluICsgeWluKSAqIEYyOyAvLyBIYWlyeSBmYWN0b3IgZm9yIDJEXG4gICAgICB2YXIgaSA9IE1hdGguZmxvb3IoeGluICsgcyk7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoeWluICsgcyk7XG4gICAgICB2YXIgdCA9IChpICsgaikgKiBHMjtcbiAgICAgIHZhciBYMCA9IGkgLSB0OyAvLyBVbnNrZXcgdGhlIGNlbGwgb3JpZ2luIGJhY2sgdG8gKHgseSkgc3BhY2VcbiAgICAgIHZhciBZMCA9IGogLSB0O1xuICAgICAgdmFyIHgwID0geGluIC0gWDA7IC8vIFRoZSB4LHkgZGlzdGFuY2VzIGZyb20gdGhlIGNlbGwgb3JpZ2luXG4gICAgICB2YXIgeTAgPSB5aW4gLSBZMDtcbiAgICAgIC8vIEZvciB0aGUgMkQgY2FzZSwgdGhlIHNpbXBsZXggc2hhcGUgaXMgYW4gZXF1aWxhdGVyYWwgdHJpYW5nbGUuXG4gICAgICAvLyBEZXRlcm1pbmUgd2hpY2ggc2ltcGxleCB3ZSBhcmUgaW4uXG4gICAgICB2YXIgaTEsIGoxOyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgKG1pZGRsZSkgY29ybmVyIG9mIHNpbXBsZXggaW4gKGksaikgY29vcmRzXG4gICAgICBpZiAoeDAgPiB5MCkge1xuICAgICAgICBpMSA9IDE7XG4gICAgICAgIGoxID0gMDtcbiAgICAgIH0gLy8gbG93ZXIgdHJpYW5nbGUsIFhZIG9yZGVyOiAoMCwwKS0+KDEsMCktPigxLDEpXG4gICAgICBlbHNlIHtcbiAgICAgICAgaTEgPSAwO1xuICAgICAgICBqMSA9IDE7XG4gICAgICB9IC8vIHVwcGVyIHRyaWFuZ2xlLCBZWCBvcmRlcjogKDAsMCktPigwLDEpLT4oMSwxKVxuICAgICAgLy8gQSBzdGVwIG9mICgxLDApIGluIChpLGopIG1lYW5zIGEgc3RlcCBvZiAoMS1jLC1jKSBpbiAoeCx5KSwgYW5kXG4gICAgICAvLyBhIHN0ZXAgb2YgKDAsMSkgaW4gKGksaikgbWVhbnMgYSBzdGVwIG9mICgtYywxLWMpIGluICh4LHkpLCB3aGVyZVxuICAgICAgLy8gYyA9ICgzLXNxcnQoMykpLzZcbiAgICAgIHZhciB4MSA9IHgwIC0gaTEgKyBHMjsgLy8gT2Zmc2V0cyBmb3IgbWlkZGxlIGNvcm5lciBpbiAoeCx5KSB1bnNrZXdlZCBjb29yZHNcbiAgICAgIHZhciB5MSA9IHkwIC0gajEgKyBHMjtcbiAgICAgIHZhciB4MiA9IHgwIC0gMS4wICsgMi4wICogRzI7IC8vIE9mZnNldHMgZm9yIGxhc3QgY29ybmVyIGluICh4LHkpIHVuc2tld2VkIGNvb3Jkc1xuICAgICAgdmFyIHkyID0geTAgLSAxLjAgKyAyLjAgKiBHMjtcbiAgICAgIC8vIFdvcmsgb3V0IHRoZSBoYXNoZWQgZ3JhZGllbnQgaW5kaWNlcyBvZiB0aGUgdGhyZWUgc2ltcGxleCBjb3JuZXJzXG4gICAgICB2YXIgaWkgPSBpICYgMjU1O1xuICAgICAgdmFyIGpqID0gaiAmIDI1NTtcbiAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udHJpYnV0aW9uIGZyb20gdGhlIHRocmVlIGNvcm5lcnNcbiAgICAgIHZhciB0MCA9IDAuNSAtIHgwICogeDAgLSB5MCAqIHkwO1xuICAgICAgaWYgKHQwID49IDApIHtcbiAgICAgICAgdmFyIGdpMCA9IHBlcm1Nb2QxMltpaSArIHBlcm1bampdXSAqIDM7XG4gICAgICAgIHQwICo9IHQwO1xuICAgICAgICBuMCA9IHQwICogdDAgKiAoZ3JhZDNbZ2kwXSAqIHgwICsgZ3JhZDNbZ2kwICsgMV0gKiB5MCk7IC8vICh4LHkpIG9mIGdyYWQzIHVzZWQgZm9yIDJEIGdyYWRpZW50XG4gICAgICB9XG4gICAgICB2YXIgdDEgPSAwLjUgLSB4MSAqIHgxIC0geTEgKiB5MTtcbiAgICAgIGlmICh0MSA+PSAwKSB7XG4gICAgICAgIHZhciBnaTEgPSBwZXJtTW9kMTJbaWkgKyBpMSArIHBlcm1bamogKyBqMV1dICogMztcbiAgICAgICAgdDEgKj0gdDE7XG4gICAgICAgIG4xID0gdDEgKiB0MSAqIChncmFkM1tnaTFdICogeDEgKyBncmFkM1tnaTEgKyAxXSAqIHkxKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MiA9IDAuNSAtIHgyICogeDIgLSB5MiAqIHkyO1xuICAgICAgaWYgKHQyID49IDApIHtcbiAgICAgICAgdmFyIGdpMiA9IHBlcm1Nb2QxMltpaSArIDEgKyBwZXJtW2pqICsgMV1dICogMztcbiAgICAgICAgdDIgKj0gdDI7XG4gICAgICAgIG4yID0gdDIgKiB0MiAqIChncmFkM1tnaTJdICogeDIgKyBncmFkM1tnaTIgKyAxXSAqIHkyKTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCBjb250cmlidXRpb25zIGZyb20gZWFjaCBjb3JuZXIgdG8gZ2V0IHRoZSBmaW5hbCBub2lzZSB2YWx1ZS5cbiAgICAgIC8vIFRoZSByZXN1bHQgaXMgc2NhbGVkIHRvIHJldHVybiB2YWx1ZXMgaW4gdGhlIGludGVydmFsIFstMSwxXS5cbiAgICAgIHJldHVybiA3MC4wICogKG4wICsgbjEgKyBuMik7XG4gICAgfSxcbiAgICAvLyAzRCBzaW1wbGV4IG5vaXNlXG4gICAgbm9pc2UzRDogZnVuY3Rpb24oeGluLCB5aW4sIHppbikge1xuICAgICAgdmFyIHBlcm1Nb2QxMiA9IHRoaXMucGVybU1vZDEyO1xuICAgICAgdmFyIHBlcm0gPSB0aGlzLnBlcm07XG4gICAgICB2YXIgZ3JhZDMgPSB0aGlzLmdyYWQzO1xuICAgICAgdmFyIG4wLCBuMSwgbjIsIG4zOyAvLyBOb2lzZSBjb250cmlidXRpb25zIGZyb20gdGhlIGZvdXIgY29ybmVyc1xuICAgICAgLy8gU2tldyB0aGUgaW5wdXQgc3BhY2UgdG8gZGV0ZXJtaW5lIHdoaWNoIHNpbXBsZXggY2VsbCB3ZSdyZSBpblxuICAgICAgdmFyIHMgPSAoeGluICsgeWluICsgemluKSAqIEYzOyAvLyBWZXJ5IG5pY2UgYW5kIHNpbXBsZSBza2V3IGZhY3RvciBmb3IgM0RcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcih4aW4gKyBzKTtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcih5aW4gKyBzKTtcbiAgICAgIHZhciBrID0gTWF0aC5mbG9vcih6aW4gKyBzKTtcbiAgICAgIHZhciB0ID0gKGkgKyBqICsgaykgKiBHMztcbiAgICAgIHZhciBYMCA9IGkgLSB0OyAvLyBVbnNrZXcgdGhlIGNlbGwgb3JpZ2luIGJhY2sgdG8gKHgseSx6KSBzcGFjZVxuICAgICAgdmFyIFkwID0gaiAtIHQ7XG4gICAgICB2YXIgWjAgPSBrIC0gdDtcbiAgICAgIHZhciB4MCA9IHhpbiAtIFgwOyAvLyBUaGUgeCx5LHogZGlzdGFuY2VzIGZyb20gdGhlIGNlbGwgb3JpZ2luXG4gICAgICB2YXIgeTAgPSB5aW4gLSBZMDtcbiAgICAgIHZhciB6MCA9IHppbiAtIFowO1xuICAgICAgLy8gRm9yIHRoZSAzRCBjYXNlLCB0aGUgc2ltcGxleCBzaGFwZSBpcyBhIHNsaWdodGx5IGlycmVndWxhciB0ZXRyYWhlZHJvbi5cbiAgICAgIC8vIERldGVybWluZSB3aGljaCBzaW1wbGV4IHdlIGFyZSBpbi5cbiAgICAgIHZhciBpMSwgajEsIGsxOyAvLyBPZmZzZXRzIGZvciBzZWNvbmQgY29ybmVyIG9mIHNpbXBsZXggaW4gKGksaixrKSBjb29yZHNcbiAgICAgIHZhciBpMiwgajIsIGsyOyAvLyBPZmZzZXRzIGZvciB0aGlyZCBjb3JuZXIgb2Ygc2ltcGxleCBpbiAoaSxqLGspIGNvb3Jkc1xuICAgICAgaWYgKHgwID49IHkwKSB7XG4gICAgICAgIGlmICh5MCA+PSB6MCkge1xuICAgICAgICAgIGkxID0gMTtcbiAgICAgICAgICBqMSA9IDA7XG4gICAgICAgICAgazEgPSAwO1xuICAgICAgICAgIGkyID0gMTtcbiAgICAgICAgICBqMiA9IDE7XG4gICAgICAgICAgazIgPSAwO1xuICAgICAgICB9IC8vIFggWSBaIG9yZGVyXG4gICAgICAgIGVsc2UgaWYgKHgwID49IHowKSB7XG4gICAgICAgICAgaTEgPSAxO1xuICAgICAgICAgIGoxID0gMDtcbiAgICAgICAgICBrMSA9IDA7XG4gICAgICAgICAgaTIgPSAxO1xuICAgICAgICAgIGoyID0gMDtcbiAgICAgICAgICBrMiA9IDE7XG4gICAgICAgIH0gLy8gWCBaIFkgb3JkZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaTEgPSAwO1xuICAgICAgICAgIGoxID0gMDtcbiAgICAgICAgICBrMSA9IDE7XG4gICAgICAgICAgaTIgPSAxO1xuICAgICAgICAgIGoyID0gMDtcbiAgICAgICAgICBrMiA9IDE7XG4gICAgICAgIH0gLy8gWiBYIFkgb3JkZXJcbiAgICAgIH1cbiAgICAgIGVsc2UgeyAvLyB4MDx5MFxuICAgICAgICBpZiAoeTAgPCB6MCkge1xuICAgICAgICAgIGkxID0gMDtcbiAgICAgICAgICBqMSA9IDA7XG4gICAgICAgICAgazEgPSAxO1xuICAgICAgICAgIGkyID0gMDtcbiAgICAgICAgICBqMiA9IDE7XG4gICAgICAgICAgazIgPSAxO1xuICAgICAgICB9IC8vIFogWSBYIG9yZGVyXG4gICAgICAgIGVsc2UgaWYgKHgwIDwgejApIHtcbiAgICAgICAgICBpMSA9IDA7XG4gICAgICAgICAgajEgPSAxO1xuICAgICAgICAgIGsxID0gMDtcbiAgICAgICAgICBpMiA9IDA7XG4gICAgICAgICAgajIgPSAxO1xuICAgICAgICAgIGsyID0gMTtcbiAgICAgICAgfSAvLyBZIFogWCBvcmRlclxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpMSA9IDA7XG4gICAgICAgICAgajEgPSAxO1xuICAgICAgICAgIGsxID0gMDtcbiAgICAgICAgICBpMiA9IDE7XG4gICAgICAgICAgajIgPSAxO1xuICAgICAgICAgIGsyID0gMDtcbiAgICAgICAgfSAvLyBZIFggWiBvcmRlclxuICAgICAgfVxuICAgICAgLy8gQSBzdGVwIG9mICgxLDAsMCkgaW4gKGksaixrKSBtZWFucyBhIHN0ZXAgb2YgKDEtYywtYywtYykgaW4gKHgseSx6KSxcbiAgICAgIC8vIGEgc3RlcCBvZiAoMCwxLDApIGluIChpLGosaykgbWVhbnMgYSBzdGVwIG9mICgtYywxLWMsLWMpIGluICh4LHkseiksIGFuZFxuICAgICAgLy8gYSBzdGVwIG9mICgwLDAsMSkgaW4gKGksaixrKSBtZWFucyBhIHN0ZXAgb2YgKC1jLC1jLDEtYykgaW4gKHgseSx6KSwgd2hlcmVcbiAgICAgIC8vIGMgPSAxLzYuXG4gICAgICB2YXIgeDEgPSB4MCAtIGkxICsgRzM7IC8vIE9mZnNldHMgZm9yIHNlY29uZCBjb3JuZXIgaW4gKHgseSx6KSBjb29yZHNcbiAgICAgIHZhciB5MSA9IHkwIC0gajEgKyBHMztcbiAgICAgIHZhciB6MSA9IHowIC0gazEgKyBHMztcbiAgICAgIHZhciB4MiA9IHgwIC0gaTIgKyAyLjAgKiBHMzsgLy8gT2Zmc2V0cyBmb3IgdGhpcmQgY29ybmVyIGluICh4LHkseikgY29vcmRzXG4gICAgICB2YXIgeTIgPSB5MCAtIGoyICsgMi4wICogRzM7XG4gICAgICB2YXIgejIgPSB6MCAtIGsyICsgMi4wICogRzM7XG4gICAgICB2YXIgeDMgPSB4MCAtIDEuMCArIDMuMCAqIEczOyAvLyBPZmZzZXRzIGZvciBsYXN0IGNvcm5lciBpbiAoeCx5LHopIGNvb3Jkc1xuICAgICAgdmFyIHkzID0geTAgLSAxLjAgKyAzLjAgKiBHMztcbiAgICAgIHZhciB6MyA9IHowIC0gMS4wICsgMy4wICogRzM7XG4gICAgICAvLyBXb3JrIG91dCB0aGUgaGFzaGVkIGdyYWRpZW50IGluZGljZXMgb2YgdGhlIGZvdXIgc2ltcGxleCBjb3JuZXJzXG4gICAgICB2YXIgaWkgPSBpICYgMjU1O1xuICAgICAgdmFyIGpqID0gaiAmIDI1NTtcbiAgICAgIHZhciBrayA9IGsgJiAyNTU7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRyaWJ1dGlvbiBmcm9tIHRoZSBmb3VyIGNvcm5lcnNcbiAgICAgIHZhciB0MCA9IDAuNiAtIHgwICogeDAgLSB5MCAqIHkwIC0gejAgKiB6MDtcbiAgICAgIGlmICh0MCA8IDApIG4wID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTAgPSBwZXJtTW9kMTJbaWkgKyBwZXJtW2pqICsgcGVybVtra11dXSAqIDM7XG4gICAgICAgIHQwICo9IHQwO1xuICAgICAgICBuMCA9IHQwICogdDAgKiAoZ3JhZDNbZ2kwXSAqIHgwICsgZ3JhZDNbZ2kwICsgMV0gKiB5MCArIGdyYWQzW2dpMCArIDJdICogejApO1xuICAgICAgfVxuICAgICAgdmFyIHQxID0gMC42IC0geDEgKiB4MSAtIHkxICogeTEgLSB6MSAqIHoxO1xuICAgICAgaWYgKHQxIDwgMCkgbjEgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMSA9IHBlcm1Nb2QxMltpaSArIGkxICsgcGVybVtqaiArIGoxICsgcGVybVtrayArIGsxXV1dICogMztcbiAgICAgICAgdDEgKj0gdDE7XG4gICAgICAgIG4xID0gdDEgKiB0MSAqIChncmFkM1tnaTFdICogeDEgKyBncmFkM1tnaTEgKyAxXSAqIHkxICsgZ3JhZDNbZ2kxICsgMl0gKiB6MSk7XG4gICAgICB9XG4gICAgICB2YXIgdDIgPSAwLjYgLSB4MiAqIHgyIC0geTIgKiB5MiAtIHoyICogejI7XG4gICAgICBpZiAodDIgPCAwKSBuMiA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kyID0gcGVybU1vZDEyW2lpICsgaTIgKyBwZXJtW2pqICsgajIgKyBwZXJtW2trICsgazJdXV0gKiAzO1xuICAgICAgICB0MiAqPSB0MjtcbiAgICAgICAgbjIgPSB0MiAqIHQyICogKGdyYWQzW2dpMl0gKiB4MiArIGdyYWQzW2dpMiArIDFdICogeTIgKyBncmFkM1tnaTIgKyAyXSAqIHoyKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MyA9IDAuNiAtIHgzICogeDMgLSB5MyAqIHkzIC0gejMgKiB6MztcbiAgICAgIGlmICh0MyA8IDApIG4zID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTMgPSBwZXJtTW9kMTJbaWkgKyAxICsgcGVybVtqaiArIDEgKyBwZXJtW2trICsgMV1dXSAqIDM7XG4gICAgICAgIHQzICo9IHQzO1xuICAgICAgICBuMyA9IHQzICogdDMgKiAoZ3JhZDNbZ2kzXSAqIHgzICsgZ3JhZDNbZ2kzICsgMV0gKiB5MyArIGdyYWQzW2dpMyArIDJdICogejMpO1xuICAgICAgfVxuICAgICAgLy8gQWRkIGNvbnRyaWJ1dGlvbnMgZnJvbSBlYWNoIGNvcm5lciB0byBnZXQgdGhlIGZpbmFsIG5vaXNlIHZhbHVlLlxuICAgICAgLy8gVGhlIHJlc3VsdCBpcyBzY2FsZWQgdG8gc3RheSBqdXN0IGluc2lkZSBbLTEsMV1cbiAgICAgIHJldHVybiAzMi4wICogKG4wICsgbjEgKyBuMiArIG4zKTtcbiAgICB9LFxuICAgIC8vIDREIHNpbXBsZXggbm9pc2UsIGJldHRlciBzaW1wbGV4IHJhbmsgb3JkZXJpbmcgbWV0aG9kIDIwMTItMDMtMDlcbiAgICBub2lzZTREOiBmdW5jdGlvbih4LCB5LCB6LCB3KSB7XG4gICAgICB2YXIgcGVybSA9IHRoaXMucGVybTtcbiAgICAgIHZhciBncmFkNCA9IHRoaXMuZ3JhZDQ7XG5cbiAgICAgIHZhciBuMCwgbjEsIG4yLCBuMywgbjQ7IC8vIE5vaXNlIGNvbnRyaWJ1dGlvbnMgZnJvbSB0aGUgZml2ZSBjb3JuZXJzXG4gICAgICAvLyBTa2V3IHRoZSAoeCx5LHosdykgc3BhY2UgdG8gZGV0ZXJtaW5lIHdoaWNoIGNlbGwgb2YgMjQgc2ltcGxpY2VzIHdlJ3JlIGluXG4gICAgICB2YXIgcyA9ICh4ICsgeSArIHogKyB3KSAqIEY0OyAvLyBGYWN0b3IgZm9yIDREIHNrZXdpbmdcbiAgICAgIHZhciBpID0gTWF0aC5mbG9vcih4ICsgcyk7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoeSArIHMpO1xuICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKHogKyBzKTtcbiAgICAgIHZhciBsID0gTWF0aC5mbG9vcih3ICsgcyk7XG4gICAgICB2YXIgdCA9IChpICsgaiArIGsgKyBsKSAqIEc0OyAvLyBGYWN0b3IgZm9yIDREIHVuc2tld2luZ1xuICAgICAgdmFyIFgwID0gaSAtIHQ7IC8vIFVuc2tldyB0aGUgY2VsbCBvcmlnaW4gYmFjayB0byAoeCx5LHosdykgc3BhY2VcbiAgICAgIHZhciBZMCA9IGogLSB0O1xuICAgICAgdmFyIFowID0gayAtIHQ7XG4gICAgICB2YXIgVzAgPSBsIC0gdDtcbiAgICAgIHZhciB4MCA9IHggLSBYMDsgLy8gVGhlIHgseSx6LHcgZGlzdGFuY2VzIGZyb20gdGhlIGNlbGwgb3JpZ2luXG4gICAgICB2YXIgeTAgPSB5IC0gWTA7XG4gICAgICB2YXIgejAgPSB6IC0gWjA7XG4gICAgICB2YXIgdzAgPSB3IC0gVzA7XG4gICAgICAvLyBGb3IgdGhlIDREIGNhc2UsIHRoZSBzaW1wbGV4IGlzIGEgNEQgc2hhcGUgSSB3b24ndCBldmVuIHRyeSB0byBkZXNjcmliZS5cbiAgICAgIC8vIFRvIGZpbmQgb3V0IHdoaWNoIG9mIHRoZSAyNCBwb3NzaWJsZSBzaW1wbGljZXMgd2UncmUgaW4sIHdlIG5lZWQgdG9cbiAgICAgIC8vIGRldGVybWluZSB0aGUgbWFnbml0dWRlIG9yZGVyaW5nIG9mIHgwLCB5MCwgejAgYW5kIHcwLlxuICAgICAgLy8gU2l4IHBhaXItd2lzZSBjb21wYXJpc29ucyBhcmUgcGVyZm9ybWVkIGJldHdlZW4gZWFjaCBwb3NzaWJsZSBwYWlyXG4gICAgICAvLyBvZiB0aGUgZm91ciBjb29yZGluYXRlcywgYW5kIHRoZSByZXN1bHRzIGFyZSB1c2VkIHRvIHJhbmsgdGhlIG51bWJlcnMuXG4gICAgICB2YXIgcmFua3ggPSAwO1xuICAgICAgdmFyIHJhbmt5ID0gMDtcbiAgICAgIHZhciByYW5reiA9IDA7XG4gICAgICB2YXIgcmFua3cgPSAwO1xuICAgICAgaWYgKHgwID4geTApIHJhbmt4Kys7XG4gICAgICBlbHNlIHJhbmt5Kys7XG4gICAgICBpZiAoeDAgPiB6MCkgcmFua3grKztcbiAgICAgIGVsc2UgcmFua3orKztcbiAgICAgIGlmICh4MCA+IHcwKSByYW5reCsrO1xuICAgICAgZWxzZSByYW5rdysrO1xuICAgICAgaWYgKHkwID4gejApIHJhbmt5Kys7XG4gICAgICBlbHNlIHJhbmt6Kys7XG4gICAgICBpZiAoeTAgPiB3MCkgcmFua3krKztcbiAgICAgIGVsc2UgcmFua3crKztcbiAgICAgIGlmICh6MCA+IHcwKSByYW5reisrO1xuICAgICAgZWxzZSByYW5rdysrO1xuICAgICAgdmFyIGkxLCBqMSwgazEsIGwxOyAvLyBUaGUgaW50ZWdlciBvZmZzZXRzIGZvciB0aGUgc2Vjb25kIHNpbXBsZXggY29ybmVyXG4gICAgICB2YXIgaTIsIGoyLCBrMiwgbDI7IC8vIFRoZSBpbnRlZ2VyIG9mZnNldHMgZm9yIHRoZSB0aGlyZCBzaW1wbGV4IGNvcm5lclxuICAgICAgdmFyIGkzLCBqMywgazMsIGwzOyAvLyBUaGUgaW50ZWdlciBvZmZzZXRzIGZvciB0aGUgZm91cnRoIHNpbXBsZXggY29ybmVyXG4gICAgICAvLyBzaW1wbGV4W2NdIGlzIGEgNC12ZWN0b3Igd2l0aCB0aGUgbnVtYmVycyAwLCAxLCAyIGFuZCAzIGluIHNvbWUgb3JkZXIuXG4gICAgICAvLyBNYW55IHZhbHVlcyBvZiBjIHdpbGwgbmV2ZXIgb2NjdXIsIHNpbmNlIGUuZy4geD55Pno+dyBtYWtlcyB4PHosIHk8dyBhbmQgeDx3XG4gICAgICAvLyBpbXBvc3NpYmxlLiBPbmx5IHRoZSAyNCBpbmRpY2VzIHdoaWNoIGhhdmUgbm9uLXplcm8gZW50cmllcyBtYWtlIGFueSBzZW5zZS5cbiAgICAgIC8vIFdlIHVzZSBhIHRocmVzaG9sZGluZyB0byBzZXQgdGhlIGNvb3JkaW5hdGVzIGluIHR1cm4gZnJvbSB0aGUgbGFyZ2VzdCBtYWduaXR1ZGUuXG4gICAgICAvLyBSYW5rIDMgZGVub3RlcyB0aGUgbGFyZ2VzdCBjb29yZGluYXRlLlxuICAgICAgaTEgPSByYW5reCA+PSAzID8gMSA6IDA7XG4gICAgICBqMSA9IHJhbmt5ID49IDMgPyAxIDogMDtcbiAgICAgIGsxID0gcmFua3ogPj0gMyA/IDEgOiAwO1xuICAgICAgbDEgPSByYW5rdyA+PSAzID8gMSA6IDA7XG4gICAgICAvLyBSYW5rIDIgZGVub3RlcyB0aGUgc2Vjb25kIGxhcmdlc3QgY29vcmRpbmF0ZS5cbiAgICAgIGkyID0gcmFua3ggPj0gMiA/IDEgOiAwO1xuICAgICAgajIgPSByYW5reSA+PSAyID8gMSA6IDA7XG4gICAgICBrMiA9IHJhbmt6ID49IDIgPyAxIDogMDtcbiAgICAgIGwyID0gcmFua3cgPj0gMiA/IDEgOiAwO1xuICAgICAgLy8gUmFuayAxIGRlbm90ZXMgdGhlIHNlY29uZCBzbWFsbGVzdCBjb29yZGluYXRlLlxuICAgICAgaTMgPSByYW5reCA+PSAxID8gMSA6IDA7XG4gICAgICBqMyA9IHJhbmt5ID49IDEgPyAxIDogMDtcbiAgICAgIGszID0gcmFua3ogPj0gMSA/IDEgOiAwO1xuICAgICAgbDMgPSByYW5rdyA+PSAxID8gMSA6IDA7XG4gICAgICAvLyBUaGUgZmlmdGggY29ybmVyIGhhcyBhbGwgY29vcmRpbmF0ZSBvZmZzZXRzID0gMSwgc28gbm8gbmVlZCB0byBjb21wdXRlIHRoYXQuXG4gICAgICB2YXIgeDEgPSB4MCAtIGkxICsgRzQ7IC8vIE9mZnNldHMgZm9yIHNlY29uZCBjb3JuZXIgaW4gKHgseSx6LHcpIGNvb3Jkc1xuICAgICAgdmFyIHkxID0geTAgLSBqMSArIEc0O1xuICAgICAgdmFyIHoxID0gejAgLSBrMSArIEc0O1xuICAgICAgdmFyIHcxID0gdzAgLSBsMSArIEc0O1xuICAgICAgdmFyIHgyID0geDAgLSBpMiArIDIuMCAqIEc0OyAvLyBPZmZzZXRzIGZvciB0aGlyZCBjb3JuZXIgaW4gKHgseSx6LHcpIGNvb3Jkc1xuICAgICAgdmFyIHkyID0geTAgLSBqMiArIDIuMCAqIEc0O1xuICAgICAgdmFyIHoyID0gejAgLSBrMiArIDIuMCAqIEc0O1xuICAgICAgdmFyIHcyID0gdzAgLSBsMiArIDIuMCAqIEc0O1xuICAgICAgdmFyIHgzID0geDAgLSBpMyArIDMuMCAqIEc0OyAvLyBPZmZzZXRzIGZvciBmb3VydGggY29ybmVyIGluICh4LHkseix3KSBjb29yZHNcbiAgICAgIHZhciB5MyA9IHkwIC0gajMgKyAzLjAgKiBHNDtcbiAgICAgIHZhciB6MyA9IHowIC0gazMgKyAzLjAgKiBHNDtcbiAgICAgIHZhciB3MyA9IHcwIC0gbDMgKyAzLjAgKiBHNDtcbiAgICAgIHZhciB4NCA9IHgwIC0gMS4wICsgNC4wICogRzQ7IC8vIE9mZnNldHMgZm9yIGxhc3QgY29ybmVyIGluICh4LHkseix3KSBjb29yZHNcbiAgICAgIHZhciB5NCA9IHkwIC0gMS4wICsgNC4wICogRzQ7XG4gICAgICB2YXIgejQgPSB6MCAtIDEuMCArIDQuMCAqIEc0O1xuICAgICAgdmFyIHc0ID0gdzAgLSAxLjAgKyA0LjAgKiBHNDtcbiAgICAgIC8vIFdvcmsgb3V0IHRoZSBoYXNoZWQgZ3JhZGllbnQgaW5kaWNlcyBvZiB0aGUgZml2ZSBzaW1wbGV4IGNvcm5lcnNcbiAgICAgIHZhciBpaSA9IGkgJiAyNTU7XG4gICAgICB2YXIgamogPSBqICYgMjU1O1xuICAgICAgdmFyIGtrID0gayAmIDI1NTtcbiAgICAgIHZhciBsbCA9IGwgJiAyNTU7XG4gICAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRyaWJ1dGlvbiBmcm9tIHRoZSBmaXZlIGNvcm5lcnNcbiAgICAgIHZhciB0MCA9IDAuNiAtIHgwICogeDAgLSB5MCAqIHkwIC0gejAgKiB6MCAtIHcwICogdzA7XG4gICAgICBpZiAodDAgPCAwKSBuMCA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kwID0gKHBlcm1baWkgKyBwZXJtW2pqICsgcGVybVtrayArIHBlcm1bbGxdXV1dICUgMzIpICogNDtcbiAgICAgICAgdDAgKj0gdDA7XG4gICAgICAgIG4wID0gdDAgKiB0MCAqIChncmFkNFtnaTBdICogeDAgKyBncmFkNFtnaTAgKyAxXSAqIHkwICsgZ3JhZDRbZ2kwICsgMl0gKiB6MCArIGdyYWQ0W2dpMCArIDNdICogdzApO1xuICAgICAgfVxuICAgICAgdmFyIHQxID0gMC42IC0geDEgKiB4MSAtIHkxICogeTEgLSB6MSAqIHoxIC0gdzEgKiB3MTtcbiAgICAgIGlmICh0MSA8IDApIG4xID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTEgPSAocGVybVtpaSArIGkxICsgcGVybVtqaiArIGoxICsgcGVybVtrayArIGsxICsgcGVybVtsbCArIGwxXV1dXSAlIDMyKSAqIDQ7XG4gICAgICAgIHQxICo9IHQxO1xuICAgICAgICBuMSA9IHQxICogdDEgKiAoZ3JhZDRbZ2kxXSAqIHgxICsgZ3JhZDRbZ2kxICsgMV0gKiB5MSArIGdyYWQ0W2dpMSArIDJdICogejEgKyBncmFkNFtnaTEgKyAzXSAqIHcxKTtcbiAgICAgIH1cbiAgICAgIHZhciB0MiA9IDAuNiAtIHgyICogeDIgLSB5MiAqIHkyIC0gejIgKiB6MiAtIHcyICogdzI7XG4gICAgICBpZiAodDIgPCAwKSBuMiA9IDAuMDtcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgZ2kyID0gKHBlcm1baWkgKyBpMiArIHBlcm1bamogKyBqMiArIHBlcm1ba2sgKyBrMiArIHBlcm1bbGwgKyBsMl1dXV0gJSAzMikgKiA0O1xuICAgICAgICB0MiAqPSB0MjtcbiAgICAgICAgbjIgPSB0MiAqIHQyICogKGdyYWQ0W2dpMl0gKiB4MiArIGdyYWQ0W2dpMiArIDFdICogeTIgKyBncmFkNFtnaTIgKyAyXSAqIHoyICsgZ3JhZDRbZ2kyICsgM10gKiB3Mik7XG4gICAgICB9XG4gICAgICB2YXIgdDMgPSAwLjYgLSB4MyAqIHgzIC0geTMgKiB5MyAtIHozICogejMgLSB3MyAqIHczO1xuICAgICAgaWYgKHQzIDwgMCkgbjMgPSAwLjA7XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGdpMyA9IChwZXJtW2lpICsgaTMgKyBwZXJtW2pqICsgajMgKyBwZXJtW2trICsgazMgKyBwZXJtW2xsICsgbDNdXV1dICUgMzIpICogNDtcbiAgICAgICAgdDMgKj0gdDM7XG4gICAgICAgIG4zID0gdDMgKiB0MyAqIChncmFkNFtnaTNdICogeDMgKyBncmFkNFtnaTMgKyAxXSAqIHkzICsgZ3JhZDRbZ2kzICsgMl0gKiB6MyArIGdyYWQ0W2dpMyArIDNdICogdzMpO1xuICAgICAgfVxuICAgICAgdmFyIHQ0ID0gMC42IC0geDQgKiB4NCAtIHk0ICogeTQgLSB6NCAqIHo0IC0gdzQgKiB3NDtcbiAgICAgIGlmICh0NCA8IDApIG40ID0gMC4wO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBnaTQgPSAocGVybVtpaSArIDEgKyBwZXJtW2pqICsgMSArIHBlcm1ba2sgKyAxICsgcGVybVtsbCArIDFdXV1dICUgMzIpICogNDtcbiAgICAgICAgdDQgKj0gdDQ7XG4gICAgICAgIG40ID0gdDQgKiB0NCAqIChncmFkNFtnaTRdICogeDQgKyBncmFkNFtnaTQgKyAxXSAqIHk0ICsgZ3JhZDRbZ2k0ICsgMl0gKiB6NCArIGdyYWQ0W2dpNCArIDNdICogdzQpO1xuICAgICAgfVxuICAgICAgLy8gU3VtIHVwIGFuZCBzY2FsZSB0aGUgcmVzdWx0IHRvIGNvdmVyIHRoZSByYW5nZSBbLTEsMV1cbiAgICAgIHJldHVybiAyNy4wICogKG4wICsgbjEgKyBuMiArIG4zICsgbjQpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFBlcm11dGF0aW9uVGFibGUocmFuZG9tKSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIHAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICAgIGZvciAoaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgICAgcFtpXSA9IGk7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCAyNTU7IGkrKykge1xuICAgICAgdmFyIHIgPSBpICsgfn4ocmFuZG9tKCkgKiAoMjU2IC0gaSkpO1xuICAgICAgdmFyIGF1eCA9IHBbaV07XG4gICAgICBwW2ldID0gcFtyXTtcbiAgICAgIHBbcl0gPSBhdXg7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9XG4gIFNpbXBsZXhOb2lzZS5fYnVpbGRQZXJtdXRhdGlvblRhYmxlID0gYnVpbGRQZXJtdXRhdGlvblRhYmxlO1xuXG4gIGZ1bmN0aW9uIGFsZWEoKSB7XG4gICAgLy8gSm9oYW5uZXMgQmFhZ8O4ZSA8YmFhZ29lQGJhYWdvZS5jb20+LCAyMDEwXG4gICAgdmFyIHMwID0gMDtcbiAgICB2YXIgczEgPSAwO1xuICAgIHZhciBzMiA9IDA7XG4gICAgdmFyIGMgPSAxO1xuXG4gICAgdmFyIG1hc2ggPSBtYXNoZXIoKTtcbiAgICBzMCA9IG1hc2goJyAnKTtcbiAgICBzMSA9IG1hc2goJyAnKTtcbiAgICBzMiA9IG1hc2goJyAnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzMCAtPSBtYXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICBpZiAoczAgPCAwKSB7XG4gICAgICAgIHMwICs9IDE7XG4gICAgICB9XG4gICAgICBzMSAtPSBtYXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICBpZiAoczEgPCAwKSB7XG4gICAgICAgIHMxICs9IDE7XG4gICAgICB9XG4gICAgICBzMiAtPSBtYXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICBpZiAoczIgPCAwKSB7XG4gICAgICAgIHMyICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIG1hc2ggPSBudWxsO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB0ID0gMjA5MTYzOSAqIHMwICsgYyAqIDIuMzI4MzA2NDM2NTM4Njk2M2UtMTA7IC8vIDJeLTMyXG4gICAgICBzMCA9IHMxO1xuICAgICAgczEgPSBzMjtcbiAgICAgIHJldHVybiBzMiA9IHQgLSAoYyA9IHQgfCAwKTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1hc2hlcigpIHtcbiAgICB2YXIgbiA9IDB4ZWZjODI0OWQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIGRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbiArPSBkYXRhLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIHZhciBoID0gMC4wMjUxOTYwMzI4MjQxNjkzOCAqIG47XG4gICAgICAgIG4gPSBoID4+PiAwO1xuICAgICAgICBoIC09IG47XG4gICAgICAgIGggKj0gbjtcbiAgICAgICAgbiA9IGggPj4+IDA7XG4gICAgICAgIGggLT0gbjtcbiAgICAgICAgbiArPSBoICogMHgxMDAwMDAwMDA7IC8vIDJeMzJcbiAgICAgIH1cbiAgICAgIHJldHVybiAobiA+Pj4gMCkgKiAyLjMyODMwNjQzNjUzODY5NjNlLTEwOyAvLyAyXi0zMlxuICAgIH07XG4gIH1cblxuICAvLyBhbWRcbiAgaWYgKHR5cGVvZiBkZWZpbmUgIT09ICd1bmRlZmluZWQnICYmIGRlZmluZS5hbWQpIGRlZmluZShmdW5jdGlvbigpIHtyZXR1cm4gU2ltcGxleE5vaXNlO30pO1xuICAvLyBjb21tb24ganNcbiAgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykgZXhwb3J0cy5TaW1wbGV4Tm9pc2UgPSBTaW1wbGV4Tm9pc2U7XG4gIC8vIGJyb3dzZXJcbiAgZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHdpbmRvdy5TaW1wbGV4Tm9pc2UgPSBTaW1wbGV4Tm9pc2U7XG4gIC8vIG5vZGVqc1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFNpbXBsZXhOb2lzZTtcbiAgfVxuXG59KSgpO1xuIiwidmFyIGV4dGVuZFN0YXRpY3M9T2JqZWN0LnNldFByb3RvdHlwZU9mfHx7X19wcm90b19fOltdfWluc3RhbmNlb2YgQXJyYXkmJmZ1bmN0aW9uKHQsYSl7dC5fX3Byb3RvX189YX18fGZ1bmN0aW9uKHQsYSl7Zm9yKHZhciByIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShyKSYmKHRbcl09YVtyXSl9O2Z1bmN0aW9uIF9fZXh0ZW5kcyh0LGEpe2Z1bmN0aW9uIHIoKXt0aGlzLmNvbnN0cnVjdG9yPXR9ZXh0ZW5kU3RhdGljcyh0LGEpLHQucHJvdG90eXBlPW51bGw9PT1hP09iamVjdC5jcmVhdGUoYSk6KHIucHJvdG90eXBlPWEucHJvdG90eXBlLG5ldyByKX1mdW5jdGlvbiByb3RhdGUodCxhKXt2YXIgcj10WzBdLGU9dFsxXTtyZXR1cm5bcipNYXRoLmNvcyhhKS1lKk1hdGguc2luKGEpLHIqTWF0aC5zaW4oYSkrZSpNYXRoLmNvcyhhKV19ZnVuY3Rpb24gYXNzZXJ0TnVtYmVycygpe2Zvcih2YXIgdD1bXSxhPTA7YTxhcmd1bWVudHMubGVuZ3RoO2ErKyl0W2FdPWFyZ3VtZW50c1thXTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKylpZihcIm51bWJlclwiIT10eXBlb2YgdFtyXSl0aHJvdyBuZXcgRXJyb3IoXCJhc3NlcnROdW1iZXJzIGFyZ3VtZW50c1tcIityK1wiXSBpcyBub3QgYSBudW1iZXIuIFwiK3R5cGVvZiB0W3JdK1wiID09IHR5cGVvZiBcIit0W3JdKTtyZXR1cm4hMH12YXIgUEk9TWF0aC5QSTtmdW5jdGlvbiBhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpe3QubEFyY0ZsYWc9MD09PXQubEFyY0ZsYWc/MDoxLHQuc3dlZXBGbGFnPTA9PT10LnN3ZWVwRmxhZz8wOjE7dmFyIGU9dC5yWCxuPXQuclksaT10Lngsbz10Lnk7ZT1NYXRoLmFicyh0LnJYKSxuPU1hdGguYWJzKHQuclkpO3ZhciBzPXJvdGF0ZShbKGEtaSkvMiwoci1vKS8yXSwtdC54Um90LzE4MCpQSSksaD1zWzBdLHU9c1sxXSxjPU1hdGgucG93KGgsMikvTWF0aC5wb3coZSwyKStNYXRoLnBvdyh1LDIpL01hdGgucG93KG4sMik7MTxjJiYoZSo9TWF0aC5zcXJ0KGMpLG4qPU1hdGguc3FydChjKSksdC5yWD1lLHQuclk9bjt2YXIgbT1NYXRoLnBvdyhlLDIpKk1hdGgucG93KHUsMikrTWF0aC5wb3cobiwyKSpNYXRoLnBvdyhoLDIpLF89KHQubEFyY0ZsYWchPT10LnN3ZWVwRmxhZz8xOi0xKSpNYXRoLnNxcnQoTWF0aC5tYXgoMCwoTWF0aC5wb3coZSwyKSpNYXRoLnBvdyhuLDIpLW0pL20pKSxUPWUqdS9uKl8sTz0tbipoL2UqXyxwPXJvdGF0ZShbVCxPXSx0LnhSb3QvMTgwKlBJKTt0LmNYPXBbMF0rKGEraSkvMix0LmNZPXBbMV0rKHIrbykvMix0LnBoaTE9TWF0aC5hdGFuMigodS1PKS9uLChoLVQpL2UpLHQucGhpMj1NYXRoLmF0YW4yKCgtdS1PKS9uLCgtaC1UKS9lKSwwPT09dC5zd2VlcEZsYWcmJnQucGhpMj50LnBoaTEmJih0LnBoaTItPTIqUEkpLDE9PT10LnN3ZWVwRmxhZyYmdC5waGkyPHQucGhpMSYmKHQucGhpMis9MipQSSksdC5waGkxKj0xODAvUEksdC5waGkyKj0xODAvUEl9ZnVuY3Rpb24gaW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUodCxhLHIpe2Fzc2VydE51bWJlcnModCxhLHIpO3ZhciBlPXQqdCthKmEtcipyO2lmKDA+ZSlyZXR1cm5bXTtpZigwPT09ZSlyZXR1cm5bW3Qqci8odCp0K2EqYSksYSpyLyh0KnQrYSphKV1dO3ZhciBuPU1hdGguc3FydChlKTtyZXR1cm5bWyh0KnIrYSpuKS8odCp0K2EqYSksKGEqci10Km4pLyh0KnQrYSphKV0sWyh0KnItYSpuKS8odCp0K2EqYSksKGEqcit0Km4pLyh0KnQrYSphKV1dfXZhciBTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLERFRz1NYXRoLlBJLzE4MDtmdW5jdGlvbiBsZXJwKHQsYSxyKXtyZXR1cm4oMS1yKSp0K3IqYX1mdW5jdGlvbiBhcmNBdCh0LGEscixlKXtyZXR1cm4gdCtNYXRoLmNvcyhlLzE4MCpQSSkqYStNYXRoLnNpbihlLzE4MCpQSSkqcn1mdW5jdGlvbiBiZXppZXJSb290KHQsYSxyLGUpe3ZhciBuPWEtdCxpPXItYSxvPTMqbiszKihlLXIpLTYqaSxzPTYqKGktbiksaD0zKm47cmV0dXJuIE1hdGguYWJzKG8pPDFlLTY/Wy1oL3NdOnBxRm9ybXVsYShzL28saC9vLDFlLTYpfWZ1bmN0aW9uIGJlemllckF0KHQsYSxyLGUsbil7dmFyIGk9MS1uO3JldHVybiB0KihpKmkqaSkrYSooMyppKmkqbikrciooMyppKm4qbikrZSoobipuKm4pfWZ1bmN0aW9uIHBxRm9ybXVsYSh0LGEscil7dm9pZCAwPT09ciYmKHI9MWUtNik7dmFyIGU9dCp0LzQtYTtpZihlPC1yKXJldHVybltdO2lmKGU8PXIpcmV0dXJuWy10LzJdO3ZhciBuPU1hdGguc3FydChlKTtyZXR1cm5bLXQvMi1uLC10LzIrbl19ZnVuY3Rpb24gYTJjKHQsYSxyKXt2YXIgZSxuLGksbzt0LmNYfHxhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpO2Zvcih2YXIgcz1NYXRoLm1pbih0LnBoaTEsdC5waGkyKSxoPU1hdGgubWF4KHQucGhpMSx0LnBoaTIpLXMsdT1NYXRoLmNlaWwoaC85MCksYz1uZXcgQXJyYXkodSksbT1hLF89cixUPTA7VDx1O1QrKyl7dmFyIE89bGVycCh0LnBoaTEsdC5waGkyLFQvdSkscD1sZXJwKHQucGhpMSx0LnBoaTIsKFQrMSkvdSkseT1wLU8sUz00LzMqTWF0aC50YW4oeSpERUcvNCksZj1bTWF0aC5jb3MoTypERUcpLVMqTWF0aC5zaW4oTypERUcpLE1hdGguc2luKE8qREVHKStTKk1hdGguY29zKE8qREVHKV0sVj1mWzBdLE49ZlsxXSxEPVtNYXRoLmNvcyhwKkRFRyksTWF0aC5zaW4ocCpERUcpXSxQPURbMF0sbD1EWzFdLHY9W1ArUypNYXRoLnNpbihwKkRFRyksbC1TKk1hdGguY29zKHAqREVHKV0sRT12WzBdLEE9dlsxXTtjW1RdPXtyZWxhdGl2ZTp0LnJlbGF0aXZlLHR5cGU6U1ZHUGF0aERhdGEuQ1VSVkVfVE99O3ZhciBkPWZ1bmN0aW9uKGEscil7dmFyIGU9cm90YXRlKFthKnQuclgscip0LnJZXSx0LnhSb3QpLG49ZVswXSxpPWVbMV07cmV0dXJuW3QuY1grbix0LmNZK2ldfTtlPWQoVixOKSxjW1RdLngxPWVbMF0sY1tUXS55MT1lWzFdLG49ZChFLEEpLGNbVF0ueDI9blswXSxjW1RdLnkyPW5bMV0saT1kKFAsbCksY1tUXS54PWlbMF0sY1tUXS55PWlbMV0sdC5yZWxhdGl2ZSYmKGNbVF0ueDEtPW0sY1tUXS55MS09XyxjW1RdLngyLT1tLGNbVF0ueTItPV8sY1tUXS54LT1tLGNbVF0ueS09XyksbT0obz1bY1tUXS54LGNbVF0ueV0pWzBdLF89b1sxXX1yZXR1cm4gY30hZnVuY3Rpb24odCl7ZnVuY3Rpb24gYSgpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKHZvaWQgMCE9PXQueDEmJih0LngxKz1hKSx2b2lkIDAhPT10LnkxJiYodC55MSs9ciksdm9pZCAwIT09dC54MiYmKHQueDIrPWEpLHZvaWQgMCE9PXQueTImJih0LnkyKz1yKSx2b2lkIDAhPT10LngmJih0LngrPWEpLHZvaWQgMCE9PXQueSYmKHQueSs9ciksdC5yZWxhdGl2ZT0hMSksdH0pfWZ1bmN0aW9uIHIoKXt2YXIgdD1OYU4sYT1OYU4scj1OYU4sZT1OYU47cmV0dXJuIG4oZnVuY3Rpb24obixpLG8pe3JldHVybiBuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPJiYobi50eXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHQ9aXNOYU4odCk/aTp0LGE9aXNOYU4oYSk/bzphLG4ueDE9bi5yZWxhdGl2ZT9pLXQ6MippLXQsbi55MT1uLnJlbGF0aXZlP28tYToyKm8tYSksbi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPPyh0PW4ucmVsYXRpdmU/aStuLngyOm4ueDIsYT1uLnJlbGF0aXZlP28rbi55MjpuLnkyKToodD1OYU4sYT1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyYmKG4udHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHI9aXNOYU4ocik/aTpyLGU9aXNOYU4oZSk/bzplLG4ueDE9bi5yZWxhdGl2ZT9pLXI6MippLXIsbi55MT1uLnJlbGF0aXZlP28tZToyKm8tZSksbi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8/KHI9bi5yZWxhdGl2ZT9pK24ueDE6bi54MSxlPW4ucmVsYXRpdmU/bytuLnkxOm4ueTEpOihyPU5hTixlPU5hTiksbn0pfWZ1bmN0aW9uIGUoKXt2YXIgdD1OYU4sYT1OYU47cmV0dXJuIG4oZnVuY3Rpb24ocixlLG4pe2lmKHIudHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyYmKHIudHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHQ9aXNOYU4odCk/ZTp0LGE9aXNOYU4oYSk/bjphLHIueDE9ci5yZWxhdGl2ZT9lLXQ6MiplLXQsci55MT1yLnJlbGF0aXZlP24tYToyKm4tYSksci50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE8pe3Q9ci5yZWxhdGl2ZT9lK3IueDE6ci54MSxhPXIucmVsYXRpdmU/bityLnkxOnIueTE7dmFyIGk9ci54MSxvPXIueTE7ci50eXBlPVNWR1BhdGhEYXRhLkNVUlZFX1RPLHIueDE9KChyLnJlbGF0aXZlPzA6ZSkrMippKS8zLHIueTE9KChyLnJlbGF0aXZlPzA6bikrMipvKS8zLHIueDI9KHIueCsyKmkpLzMsci55Mj0oci55KzIqbykvM31lbHNlIHQ9TmFOLGE9TmFOO3JldHVybiByfSl9ZnVuY3Rpb24gbih0KXt2YXIgYT0wLHI9MCxlPU5hTixuPU5hTjtyZXR1cm4gZnVuY3Rpb24oaSl7aWYoaXNOYU4oZSkmJiEoaS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8pKXRocm93IG5ldyBFcnJvcihcInBhdGggbXVzdCBzdGFydCB3aXRoIG1vdmV0b1wiKTt2YXIgbz10KGksYSxyLGUsbik7cmV0dXJuIGkudHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiYoYT1lLHI9biksdm9pZCAwIT09aS54JiYoYT1pLnJlbGF0aXZlP2EraS54OmkueCksdm9pZCAwIT09aS55JiYocj1pLnJlbGF0aXZlP3IraS55OmkueSksaS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8mJihlPWEsbj1yKSxvfX1mdW5jdGlvbiBpKHQsYSxyLGUsaSxvKXtyZXR1cm4gYXNzZXJ0TnVtYmVycyh0LGEscixlLGksbyksbihmdW5jdGlvbihuLHMsaCx1KXt2YXIgYz1uLngxLG09bi54MixfPW4ucmVsYXRpdmUmJiFpc05hTih1KSxUPXZvaWQgMCE9PW4ueD9uLng6Xz8wOnMsTz12b2lkIDAhPT1uLnk/bi55Ol8/MDpoO2Z1bmN0aW9uIHAodCl7cmV0dXJuIHQqdH1uLnR5cGUmU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyYmMCE9PWEmJihuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxuLnk9bi5yZWxhdGl2ZT8wOmgpLG4udHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJjAhPT1yJiYobi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sbi54PW4ucmVsYXRpdmU/MDpzKSx2b2lkIDAhPT1uLngmJihuLng9bi54KnQrTypyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueSYmKG4ueT1UKmErbi55KmUrKF8/MDpvKSksdm9pZCAwIT09bi54MSYmKG4ueDE9bi54MSp0K24ueTEqcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkxJiYobi55MT1jKmErbi55MSplKyhfPzA6bykpLHZvaWQgMCE9PW4ueDImJihuLngyPW4ueDIqdCtuLnkyKnIrKF8/MDppKSksdm9pZCAwIT09bi55MiYmKG4ueTI9bSphK24ueTIqZSsoXz8wOm8pKTt2YXIgeT10KmUtYSpyO2lmKHZvaWQgMCE9PW4ueFJvdCYmKDEhPT10fHwwIT09YXx8MCE9PXJ8fDEhPT1lKSlpZigwPT09eSlkZWxldGUgbi5yWCxkZWxldGUgbi5yWSxkZWxldGUgbi54Um90LGRlbGV0ZSBuLmxBcmNGbGFnLGRlbGV0ZSBuLnN3ZWVwRmxhZyxuLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTztlbHNle3ZhciBTPW4ueFJvdCpNYXRoLlBJLzE4MCxmPU1hdGguc2luKFMpLFY9TWF0aC5jb3MoUyksTj0xL3Aobi5yWCksRD0xL3Aobi5yWSksUD1wKFYpKk4rcChmKSpELGw9MipmKlYqKE4tRCksdj1wKGYpKk4rcChWKSpELEU9UCplKmUtbCphKmUrdiphKmEsQT1sKih0KmUrYSpyKS0yKihQKnIqZSt2KnQqYSksZD1QKnIqci1sKnQqcit2KnQqdCxHPShNYXRoLmF0YW4yKEEsRS1kKStNYXRoLlBJKSVNYXRoLlBJLzIsQz1NYXRoLnNpbihHKSx4PU1hdGguY29zKEcpO24uclg9TWF0aC5hYnMoeSkvTWF0aC5zcXJ0KEUqcCh4KStBKkMqeCtkKnAoQykpLG4uclk9TWF0aC5hYnMoeSkvTWF0aC5zcXJ0KEUqcChDKS1BKkMqeCtkKnAoeCkpLG4ueFJvdD0xODAqRy9NYXRoLlBJfXJldHVybiB2b2lkIDAhPT1uLnN3ZWVwRmxhZyYmMD55JiYobi5zd2VlcEZsYWc9KyFuLnN3ZWVwRmxhZyksbn0pfWZ1bmN0aW9uIG8oKXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGE9e307Zm9yKHZhciByIGluIHQpYVtyXT10W3JdO3JldHVybiBhfX10LlJPVU5EPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoYSl7cmV0dXJuIE1hdGgucm91bmQoYSp0KS90fXJldHVybiB2b2lkIDA9PT10JiYodD0xZTEzKSxhc3NlcnROdW1iZXJzKHQpLGZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10LngxJiYodC54MT1hKHQueDEpKSx2b2lkIDAhPT10LnkxJiYodC55MT1hKHQueTEpKSx2b2lkIDAhPT10LngyJiYodC54Mj1hKHQueDIpKSx2b2lkIDAhPT10LnkyJiYodC55Mj1hKHQueTIpKSx2b2lkIDAhPT10LngmJih0Lng9YSh0LngpKSx2b2lkIDAhPT10LnkmJih0Lnk9YSh0LnkpKSx0fX0sdC5UT19BQlM9YSx0LlRPX1JFTD1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZXx8KHZvaWQgMCE9PXQueDEmJih0LngxLT1hKSx2b2lkIDAhPT10LnkxJiYodC55MS09ciksdm9pZCAwIT09dC54MiYmKHQueDItPWEpLHZvaWQgMCE9PXQueTImJih0LnkyLT1yKSx2b2lkIDAhPT10LngmJih0LngtPWEpLHZvaWQgMCE9PXQueSYmKHQueS09ciksdC5yZWxhdGl2ZT0hMCksdH0pfSx0Lk5PUk1BTElaRV9IVlo9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMCksdm9pZCAwPT09YSYmKGE9ITApLHZvaWQgMD09PXImJihyPSEwKSxuKGZ1bmN0aW9uKGUsbixpLG8scyl7aWYoaXNOYU4obykmJiEoZS50eXBlJlNWR1BhdGhEYXRhLk1PVkVfVE8pKXRocm93IG5ldyBFcnJvcihcInBhdGggbXVzdCBzdGFydCB3aXRoIG1vdmV0b1wiKTtyZXR1cm4gYSYmZS50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLnk9ZS5yZWxhdGl2ZT8wOmkpLHImJmUudHlwZSZTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8mJihlLnR5cGU9U1ZHUGF0aERhdGEuTElORV9UTyxlLng9ZS5yZWxhdGl2ZT8wOm4pLHQmJmUudHlwZSZTVkdQYXRoRGF0YS5DTE9TRV9QQVRIJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS54PWUucmVsYXRpdmU/by1uOm8sZS55PWUucmVsYXRpdmU/cy1pOnMpLGUudHlwZSZTVkdQYXRoRGF0YS5BUkMmJigwPT09ZS5yWHx8MD09PWUuclkpJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZGVsZXRlIGUuclgsZGVsZXRlIGUuclksZGVsZXRlIGUueFJvdCxkZWxldGUgZS5sQXJjRmxhZyxkZWxldGUgZS5zd2VlcEZsYWcpLGV9KX0sdC5OT1JNQUxJWkVfU1Q9cix0LlFUX1RPX0M9ZSx0LklORk89bix0LlNBTklUSVpFPWZ1bmN0aW9uKHQpe3ZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCk7dmFyIGE9TmFOLHI9TmFOLGU9TmFOLGk9TmFOO3JldHVybiBuKGZ1bmN0aW9uKG4sbyxzLGgsdSl7dmFyIGM9TWF0aC5hYnMsbT0hMSxfPTAsVD0wO2lmKG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8mJihfPWlzTmFOKGEpPzA6by1hLFQ9aXNOYU4ocik/MDpzLXIpLG4udHlwZSYoU1ZHUGF0aERhdGEuQ1VSVkVfVE98U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPKT8oYT1uLnJlbGF0aXZlP28rbi54MjpuLngyLHI9bi5yZWxhdGl2ZT9zK24ueTI6bi55Mik6KGE9TmFOLHI9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8/KGU9aXNOYU4oZSk/bzoyKm8tZSxpPWlzTmFOKGkpP3M6MipzLWkpOm4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPPyhlPW4ucmVsYXRpdmU/bytuLngxOm4ueDEsaT1uLnJlbGF0aXZlP3Mrbi55MTpuLnkyKTooZT1OYU4saT1OYU4pLG4udHlwZSZTVkdQYXRoRGF0YS5MSU5FX0NPTU1BTkRTfHxuLnR5cGUmU1ZHUGF0aERhdGEuQVJDJiYoMD09PW4uclh8fDA9PT1uLnJZfHwhbi5sQXJjRmxhZyl8fG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UT3x8bi50eXBlJlNWR1BhdGhEYXRhLlFVQURfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyl7dmFyIE89dm9pZCAwPT09bi54PzA6bi5yZWxhdGl2ZT9uLng6bi54LW8scD12b2lkIDA9PT1uLnk/MDpuLnJlbGF0aXZlP24ueTpuLnktcztfPWlzTmFOKGUpP3ZvaWQgMD09PW4ueDE/XzpuLnJlbGF0aXZlP24ueDpuLngxLW86ZS1vLFQ9aXNOYU4oaSk/dm9pZCAwPT09bi55MT9UOm4ucmVsYXRpdmU/bi55Om4ueTEtczppLXM7dmFyIHk9dm9pZCAwPT09bi54Mj8wOm4ucmVsYXRpdmU/bi54Om4ueDItbyxTPXZvaWQgMD09PW4ueTI/MDpuLnJlbGF0aXZlP24ueTpuLnkyLXM7YyhPKTw9dCYmYyhwKTw9dCYmYyhfKTw9dCYmYyhUKTw9dCYmYyh5KTw9dCYmYyhTKTw9dCYmKG09ITApfXJldHVybiBuLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmYyhvLWgpPD10JiZjKHMtdSk8PXQmJihtPSEwKSxtP1tdOm59KX0sdC5NQVRSSVg9aSx0LlJPVEFURT1mdW5jdGlvbih0LGEscil7dm9pZCAwPT09YSYmKGE9MCksdm9pZCAwPT09ciYmKHI9MCksYXNzZXJ0TnVtYmVycyh0LGEscik7dmFyIGU9TWF0aC5zaW4odCksbj1NYXRoLmNvcyh0KTtyZXR1cm4gaShuLGUsLWUsbixhLWEqbityKmUsci1hKmUtcipuKX0sdC5UUkFOU0xBVEU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdm9pZCAwPT09YSYmKGE9MCksYXNzZXJ0TnVtYmVycyh0LGEpLGkoMSwwLDAsMSx0LGEpfSx0LlNDQUxFPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHZvaWQgMD09PWEmJihhPXQpLGFzc2VydE51bWJlcnModCxhKSxpKHQsMCwwLGEsMCwwKX0sdC5TS0VXX1g9ZnVuY3Rpb24odCl7cmV0dXJuIGFzc2VydE51bWJlcnModCksaSgxLDAsTWF0aC5hdGFuKHQpLDEsMCwwKX0sdC5TS0VXX1k9ZnVuY3Rpb24odCl7cmV0dXJuIGFzc2VydE51bWJlcnModCksaSgxLE1hdGguYXRhbih0KSwwLDEsMCwwKX0sdC5YX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCksaSgtMSwwLDAsMSx0LDApfSx0LllfQVhJU19TWU1NRVRSWT1mdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9MCksYXNzZXJ0TnVtYmVycyh0KSxpKDEsMCwwLC0xLDAsdCl9LHQuQV9UT19DPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiBTVkdQYXRoRGF0YS5BUkM9PT10LnR5cGU/YTJjKHQsdC5yZWxhdGl2ZT8wOmEsdC5yZWxhdGl2ZT8wOnIpOnR9KX0sdC5BTk5PVEFURV9BUkNTPWZ1bmN0aW9uKCl7cmV0dXJuIG4oZnVuY3Rpb24odCxhLHIpe3JldHVybiB0LnJlbGF0aXZlJiYoYT0wLHI9MCksU1ZHUGF0aERhdGEuQVJDPT09dC50eXBlJiZhbm5vdGF0ZUFyY0NvbW1hbmQodCxhLHIpLHR9KX0sdC5DTE9ORT1vLHQuQ0FMQ1VMQVRFX0JPVU5EUz1mdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKHQpe3ZhciBhPXt9O2Zvcih2YXIgciBpbiB0KWFbcl09dFtyXTtyZXR1cm4gYX0saT1hKCksbz1lKCkscz1yKCksaD1uKGZ1bmN0aW9uKGEscixlKXt2YXIgbj1zKG8oaSh0KGEpKSkpO2Z1bmN0aW9uIHUodCl7dD5oLm1heFgmJihoLm1heFg9dCksdDxoLm1pblgmJihoLm1pblg9dCl9ZnVuY3Rpb24gYyh0KXt0PmgubWF4WSYmKGgubWF4WT10KSx0PGgubWluWSYmKGgubWluWT10KX1pZihuLnR5cGUmU1ZHUGF0aERhdGEuRFJBV0lOR19DT01NQU5EUyYmKHUociksYyhlKSksbi50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJnUobi54KSxuLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiZjKG4ueSksbi50eXBlJlNWR1BhdGhEYXRhLkxJTkVfVE8mJih1KG4ueCksYyhuLnkpKSxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE8pe3Uobi54KSxjKG4ueSk7Zm9yKHZhciBtPTAsXz1iZXppZXJSb290KHIsbi54MSxuLngyLG4ueCk7bTxfLmxlbmd0aDttKyspMDwoRz1fW21dKSYmMT5HJiZ1KGJlemllckF0KHIsbi54MSxuLngyLG4ueCxHKSk7Zm9yKHZhciBUPTAsTz1iZXppZXJSb290KGUsbi55MSxuLnkyLG4ueSk7VDxPLmxlbmd0aDtUKyspMDwoRz1PW1RdKSYmMT5HJiZjKGJlemllckF0KGUsbi55MSxuLnkyLG4ueSxHKSl9aWYobi50eXBlJlNWR1BhdGhEYXRhLkFSQyl7dShuLngpLGMobi55KSxhbm5vdGF0ZUFyY0NvbW1hbmQobixyLGUpO2Zvcih2YXIgcD1uLnhSb3QvMTgwKk1hdGguUEkseT1NYXRoLmNvcyhwKSpuLnJYLFM9TWF0aC5zaW4ocCkqbi5yWCxmPS1NYXRoLnNpbihwKSpuLnJZLFY9TWF0aC5jb3MocCkqbi5yWSxOPW4ucGhpMTxuLnBoaTI/W24ucGhpMSxuLnBoaTJdOi0xODA+bi5waGkyP1tuLnBoaTIrMzYwLG4ucGhpMSszNjBdOltuLnBoaTIsbi5waGkxXSxEPU5bMF0sUD1OWzFdLGw9ZnVuY3Rpb24odCl7dmFyIGE9dFswXSxyPXRbMV0sZT0xODAqTWF0aC5hdGFuMihyLGEpL01hdGguUEk7cmV0dXJuIGU8RD9lKzM2MDplfSx2PTAsRT1pbnRlcnNlY3Rpb25Vbml0Q2lyY2xlTGluZShmLC15LDApLm1hcChsKTt2PEUubGVuZ3RoO3YrKykoRz1FW3ZdKT5EJiZHPFAmJnUoYXJjQXQobi5jWCx5LGYsRykpO2Zvcih2YXIgQT0wLGQ9aW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUoViwtUywwKS5tYXAobCk7QTxkLmxlbmd0aDtBKyspe3ZhciBHOyhHPWRbQV0pPkQmJkc8UCYmYyhhcmNBdChuLmNZLFMsVixHKSl9fXJldHVybiBhfSk7cmV0dXJuIGgubWluWD0xLzAsaC5tYXhYPS0xLzAsaC5taW5ZPTEvMCxoLm1heFk9LTEvMCxofX0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcnx8KFNWR1BhdGhEYXRhVHJhbnNmb3JtZXI9e30pKTt2YXIgX2EsX2EkMSxUcmFuc2Zvcm1hYmxlU1ZHPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe31yZXR1cm4gdC5wcm90b3R5cGUucm91bmQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUk9VTkQodCkpfSx0LnByb3RvdHlwZS50b0Ficz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRPX0FCUygpKX0sdC5wcm90b3R5cGUudG9SZWw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UT19SRUwoKSl9LHQucHJvdG90eXBlLm5vcm1hbGl6ZUhWWj1mdW5jdGlvbih0LGEscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTk9STUFMSVpFX0hWWih0LGEscikpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVTVD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk5PUk1BTElaRV9TVCgpKX0sdC5wcm90b3R5cGUucXRUb0M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5RVF9UT19DKCkpfSx0LnByb3RvdHlwZS5hVG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQV9UT19DKCkpfSx0LnByb3RvdHlwZS5zYW5pdGl6ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TQU5JVElaRSh0KSl9LHQucHJvdG90eXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0LGEpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlRSQU5TTEFURSh0LGEpKX0sdC5wcm90b3R5cGUuc2NhbGU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5TQ0FMRSh0LGEpKX0sdC5wcm90b3R5cGUucm90YXRlPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ST1RBVEUodCxhLHIpKX0sdC5wcm90b3R5cGUubWF0cml4PWZ1bmN0aW9uKHQsYSxyLGUsbixpKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5NQVRSSVgodCxhLHIsZSxuLGkpKX0sdC5wcm90b3R5cGUuc2tld1g9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0tFV19YKHQpKX0sdC5wcm90b3R5cGUuc2tld1k9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0tFV19ZKHQpKX0sdC5wcm90b3R5cGUueFN5bW1ldHJ5PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlhfQVhJU19TWU1NRVRSWSh0KSl9LHQucHJvdG90eXBlLnlTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5ZX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS5hbm5vdGF0ZUFyY3M9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5BTk5PVEFURV9BUkNTKCkpfSx0fSgpLGlzV2hpdGVTcGFjZT1mdW5jdGlvbih0KXtyZXR1cm5cIiBcIj09PXR8fFwiXFx0XCI9PT10fHxcIlxcclwiPT09dHx8XCJcXG5cIj09PXR9LGlzRGlnaXQ9ZnVuY3Rpb24odCl7cmV0dXJuXCIwXCIuY2hhckNvZGVBdCgwKTw9dC5jaGFyQ29kZUF0KDApJiZ0LmNoYXJDb2RlQXQoMCk8PVwiOVwiLmNoYXJDb2RlQXQoMCl9LFNWR1BhdGhEYXRhUGFyc2VyJCQxPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoKXt2YXIgYT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGEuY3VyTnVtYmVyPVwiXCIsYS5jdXJDb21tYW5kVHlwZT0tMSxhLmN1ckNvbW1hbmRSZWxhdGl2ZT0hMSxhLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITAsYS5jdXJOdW1iZXJIYXNFeHA9ITEsYS5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsYS5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLGEuY3VyQXJncz1bXSxhfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24odCl7aWYodm9pZCAwPT09dCYmKHQ9W10pLHRoaXMucGFyc2UoXCIgXCIsdCksMCE9PXRoaXMuY3VyQXJncy5sZW5ndGh8fCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgdGhlIHBhdGggZW5kLlwiKTtyZXR1cm4gdH0sYS5wcm90b3R5cGUucGFyc2U9ZnVuY3Rpb24odCxhKXt2YXIgcj10aGlzO3ZvaWQgMD09PWEmJihhPVtdKTtmb3IodmFyIGU9ZnVuY3Rpb24odCl7YS5wdXNoKHQpLHIuY3VyQXJncy5sZW5ndGg9MCxyLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITB9LG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIGk9dFtuXTtpZihpc0RpZ2l0KGkpKXRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzPXRoaXMuY3VyTnVtYmVySGFzRXhwO2Vsc2UgaWYoXCJlXCIhPT1pJiZcIkVcIiE9PWkpaWYoXCItXCIhPT1pJiZcIitcIiE9PWl8fCF0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHMpaWYoXCIuXCIhPT1pfHx0aGlzLmN1ck51bWJlckhhc0V4cHx8dGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsKXtpZih0aGlzLmN1ck51bWJlciYmLTEhPT10aGlzLmN1ckNvbW1hbmRUeXBlKXt2YXIgbz1OdW1iZXIodGhpcy5jdXJOdW1iZXIpO2lmKGlzTmFOKG8pKXRocm93IG5ldyBTeW50YXhFcnJvcihcIkludmFsaWQgbnVtYmVyIGVuZGluZyBhdCBcIituKTtpZih0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQVJDKWlmKDA9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHwxPT09dGhpcy5jdXJBcmdzLmxlbmd0aCl7aWYoMD5vKXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgcG9zaXRpdmUgbnVtYmVyLCBnb3QgXCInK28rJ1wiIGF0IGluZGV4IFwiJytuKydcIicpfWVsc2UgaWYoKDM9PT10aGlzLmN1ckFyZ3MubGVuZ3RofHw0PT09dGhpcy5jdXJBcmdzLmxlbmd0aCkmJlwiMFwiIT09dGhpcy5jdXJOdW1iZXImJlwiMVwiIT09dGhpcy5jdXJOdW1iZXIpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdFeHBlY3RlZCBhIGZsYWcsIGdvdCBcIicrdGhpcy5jdXJOdW1iZXIrJ1wiIGF0IGluZGV4IFwiJytuKydcIicpO3RoaXMuY3VyQXJncy5wdXNoKG8pLHRoaXMuY3VyQXJncy5sZW5ndGg9PT1DT01NQU5EX0FSR19DT1VOVFNbdGhpcy5jdXJDb21tYW5kVHlwZV0mJihTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9lKHt0eXBlOlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDpvfSk6U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPPT09dGhpcy5jdXJDb21tYW5kVHlwZT9lKHt0eXBlOlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx5Om99KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuTU9WRV9UT3x8dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkxJTkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTz8oZSh7dHlwZTp0aGlzLmN1ckNvbW1hbmRUeXBlLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6dGhpcy5jdXJBcmdzWzBdLHk6dGhpcy5jdXJBcmdzWzFdfSksU1ZHUGF0aERhdGEuTU9WRV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGUmJih0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8pKTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQ1VSVkVfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5DVVJWRV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4MTp0aGlzLmN1ckFyZ3NbMF0seTE6dGhpcy5jdXJBcmdzWzFdLHgyOnRoaXMuY3VyQXJnc1syXSx5Mjp0aGlzLmN1ckFyZ3NbM10seDp0aGlzLmN1ckFyZ3NbNF0seTp0aGlzLmN1ckFyZ3NbNV19KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgyOnRoaXMuY3VyQXJnc1swXSx5Mjp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuUVVBRF9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLlFVQURfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4OnRoaXMuY3VyQXJnc1syXSx5OnRoaXMuY3VyQXJnc1szXX0pOnRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5BUkMmJmUoe3R5cGU6U1ZHUGF0aERhdGEuQVJDLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHJYOnRoaXMuY3VyQXJnc1swXSxyWTp0aGlzLmN1ckFyZ3NbMV0seFJvdDp0aGlzLmN1ckFyZ3NbMl0sbEFyY0ZsYWc6dGhpcy5jdXJBcmdzWzNdLHN3ZWVwRmxhZzp0aGlzLmN1ckFyZ3NbNF0seDp0aGlzLmN1ckFyZ3NbNV0seTp0aGlzLmN1ckFyZ3NbNl19KSksdGhpcy5jdXJOdW1iZXI9XCJcIix0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz0hMSx0aGlzLmN1ck51bWJlckhhc0V4cD0hMSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITEsdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfWlmKCFpc1doaXRlU3BhY2UoaSkpaWYoXCIsXCI9PT1pJiZ0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExO2Vsc2UgaWYoXCIrXCIhPT1pJiZcIi1cIiE9PWkmJlwiLlwiIT09aSl7aWYoMCE9PXRoaXMuY3VyQXJncy5sZW5ndGgpdGhyb3cgbmV3IFN5bnRheEVycm9yKFwiVW50ZXJtaW5hdGVkIGNvbW1hbmQgYXQgaW5kZXggXCIrbitcIi5cIik7aWYoIXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytpKydcIiBhdCBpbmRleCAnK24rXCIuIENvbW1hbmQgY2Fubm90IGZvbGxvdyBjb21tYVwiKTtpZih0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWE9ITEsXCJ6XCIhPT1pJiZcIlpcIiE9PWkpaWYoXCJoXCI9PT1pfHxcIkhcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiaFwiPT09aTtlbHNlIGlmKFwidlwiPT09aXx8XCJWXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwidlwiPT09aTtlbHNlIGlmKFwibVwiPT09aXx8XCJNXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuTU9WRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cIm1cIj09PWk7ZWxzZSBpZihcImxcIj09PWl8fFwiTFwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJsXCI9PT1pO2Vsc2UgaWYoXCJjXCI9PT1pfHxcIkNcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImNcIj09PWk7ZWxzZSBpZihcInNcIj09PWl8fFwiU1wiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInNcIj09PWk7ZWxzZSBpZihcInFcIj09PWl8fFwiUVwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlFVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJxXCI9PT1pO2Vsc2UgaWYoXCJ0XCI9PT1pfHxcIlRcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInRcIj09PWk7ZWxzZXtpZihcImFcIiE9PWkmJlwiQVwiIT09aSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1VuZXhwZWN0ZWQgY2hhcmFjdGVyIFwiJytpKydcIiBhdCBpbmRleCAnK24rXCIuXCIpO3RoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuQVJDLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwiYVwiPT09aX1lbHNlIGEucHVzaCh7dHlwZTpTVkdQYXRoRGF0YS5DTE9TRV9QQVRIfSksdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwLHRoaXMuY3VyQ29tbWFuZFR5cGU9LTF9ZWxzZSB0aGlzLmN1ck51bWJlcj1pLHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbD1cIi5cIj09PWl9ZWxzZSB0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9ITA7ZWxzZSB0aGlzLmN1ck51bWJlcis9aTtlbHNlIHRoaXMuY3VyTnVtYmVyKz1pLHRoaXMuY3VyTnVtYmVySGFzRXhwPSEwfXJldHVybiBhfSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcyx7cGFyc2U6e3ZhbHVlOmZ1bmN0aW9uKGEscil7dm9pZCAwPT09ciYmKHI9W10pO2Zvcih2YXIgZT0wLG49T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpLnBhcnNlLmNhbGwodGhpcyxhKTtlPG4ubGVuZ3RoO2UrKyl7dmFyIGk9bltlXSxvPXQoaSk7QXJyYXkuaXNBcnJheShvKT9yLnB1c2guYXBwbHkocixvKTpyLnB1c2gobyl9cmV0dXJuIHJ9fX0pfSxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxTVkdQYXRoRGF0YT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9hLnBhcnNlKHIpOnIsZX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxhLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD1TVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxyPTAsZT10aGlzLmNvbW1hbmRzO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj10KGVbcl0pO0FycmF5LmlzQXJyYXkobik/YS5wdXNoLmFwcGx5KGEsbik6YS5wdXNoKG4pfXJldHVybiB0aGlzLmNvbW1hbmRzPWEsdGhpc30sYS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVNWR1BhdGgkJDEodCl9LGEucGFyc2U9ZnVuY3Rpb24odCl7dmFyIGE9bmV3IFNWR1BhdGhEYXRhUGFyc2VyJCQxLHI9W107cmV0dXJuIGEucGFyc2UodCxyKSxhLmZpbmlzaChyKSxyfSxhLkNMT1NFX1BBVEg9MSxhLk1PVkVfVE89MixhLkhPUklaX0xJTkVfVE89NCxhLlZFUlRfTElORV9UTz04LGEuTElORV9UTz0xNixhLkNVUlZFX1RPPTMyLGEuU01PT1RIX0NVUlZFX1RPPTY0LGEuUVVBRF9UTz0xMjgsYS5TTU9PVEhfUVVBRF9UTz0yNTYsYS5BUkM9NTEyLGEuTElORV9DT01NQU5EUz1hLkxJTkVfVE98YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPLGEuRFJBV0lOR19DT01NQU5EUz1hLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE98YS5MSU5FX1RPfGEuQ1VSVkVfVE98YS5TTU9PVEhfQ1VSVkVfVE98YS5RVUFEX1RPfGEuU01PT1RIX1FVQURfVE98YS5BUkMsYX0oVHJhbnNmb3JtYWJsZVNWRyksQ09NTUFORF9BUkdfQ09VTlRTPSgoX2E9e30pW1NWR1BhdGhEYXRhLk1PVkVfVE9dPTIsX2FbU1ZHUGF0aERhdGEuTElORV9UT109MixfYVtTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPXT0xLF9hW1NWR1BhdGhEYXRhLlZFUlRfTElORV9UT109MSxfYVtTVkdQYXRoRGF0YS5DTE9TRV9QQVRIXT0wLF9hW1NWR1BhdGhEYXRhLlFVQURfVE9dPTQsX2FbU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE9dPTIsX2FbU1ZHUGF0aERhdGEuQ1VSVkVfVE9dPTYsX2FbU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPXT00LF9hW1NWR1BhdGhEYXRhLkFSQ109NyxfYSksV1NQPVwiIFwiO2Z1bmN0aW9uIGVuY29kZVNWR1BhdGgkJDEodCl7dmFyIGE9XCJcIjtBcnJheS5pc0FycmF5KHQpfHwodD1bdF0pO2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgZT10W3JdO2lmKGUudHlwZT09PVNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpYSs9XCJ6XCI7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPKWErPShlLnJlbGF0aXZlP1wiaFwiOlwiSFwiKStlLng7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJ2XCI6XCJWXCIpK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLk1PVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJtXCI6XCJNXCIpK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cImxcIjpcIkxcIikrZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5DVVJWRV9UTylhKz0oZS5yZWxhdGl2ZT9cImNcIjpcIkNcIikrZS54MStXU1ArZS55MStXU1ArZS54MitXU1ArZS55MitXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJzXCI6XCJTXCIpK2UueDIrV1NQK2UueTIrV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuUVVBRF9UTylhKz0oZS5yZWxhdGl2ZT9cInFcIjpcIlFcIikrZS54MStXU1ArZS55MStXU1ArZS54K1dTUCtlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5TTU9PVEhfUVVBRF9UTylhKz0oZS5yZWxhdGl2ZT9cInRcIjpcIlRcIikrZS54K1dTUCtlLnk7ZWxzZXtpZihlLnR5cGUhPT1TVkdQYXRoRGF0YS5BUkMpdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGNvbW1hbmQgdHlwZSBcIicrZS50eXBlKydcIiBhdCBpbmRleCAnK3IrXCIuXCIpO2ErPShlLnJlbGF0aXZlP1wiYVwiOlwiQVwiKStlLnJYK1dTUCtlLnJZK1dTUCtlLnhSb3QrV1NQKyArZS5sQXJjRmxhZytXU1ArICtlLnN3ZWVwRmxhZytXU1ArZS54K1dTUCtlLnl9fXJldHVybiBhfXZhciBTVkdQYXRoRGF0YSQxPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEocil7dmFyIGU9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBlLmNvbW1hbmRzPVwic3RyaW5nXCI9PXR5cGVvZiByP2EucGFyc2Uocik6cixlfXJldHVybiBfX2V4dGVuZHMoYSx0KSxhLnByb3RvdHlwZS5lbmNvZGU9ZnVuY3Rpb24oKXtyZXR1cm4gYS5lbmNvZGUodGhpcy5jb21tYW5kcyl9LGEucHJvdG90eXBlLmdldEJvdW5kcz1mdW5jdGlvbigpe3ZhciB0PVNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQ0FMQ1VMQVRFX0JPVU5EUygpO3JldHVybiB0aGlzLnRyYW5zZm9ybSh0KSx0fSxhLnByb3RvdHlwZS50cmFuc2Zvcm09ZnVuY3Rpb24odCl7Zm9yKHZhciBhPVtdLHI9MCxlPXRoaXMuY29tbWFuZHM7cjxlLmxlbmd0aDtyKyspe3ZhciBuPXQoZVtyXSk7QXJyYXkuaXNBcnJheShuKT9hLnB1c2guYXBwbHkoYSxuKTphLnB1c2gobil9cmV0dXJuIHRoaXMuY29tbWFuZHM9YSx0aGlzfSxhLmVuY29kZT1mdW5jdGlvbih0KXtyZXR1cm4gZW5jb2RlU1ZHUGF0aCQkMSh0KX0sYS5wYXJzZT1mdW5jdGlvbih0KXt2YXIgYT1uZXcgU1ZHUGF0aERhdGFQYXJzZXIkJDEscj1bXTtyZXR1cm4gYS5wYXJzZSh0LHIpLGEuZmluaXNoKHIpLHJ9LGEuQ0xPU0VfUEFUSD0xLGEuTU9WRV9UTz0yLGEuSE9SSVpfTElORV9UTz00LGEuVkVSVF9MSU5FX1RPPTgsYS5MSU5FX1RPPTE2LGEuQ1VSVkVfVE89MzIsYS5TTU9PVEhfQ1VSVkVfVE89NjQsYS5RVUFEX1RPPTEyOCxhLlNNT09USF9RVUFEX1RPPTI1NixhLkFSQz01MTIsYS5MSU5FX0NPTU1BTkRTPWEuTElORV9UT3xhLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE8sYS5EUkFXSU5HX0NPTU1BTkRTPWEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UT3xhLkxJTkVfVE98YS5DVVJWRV9UT3xhLlNNT09USF9DVVJWRV9UT3xhLlFVQURfVE98YS5TTU9PVEhfUVVBRF9UT3xhLkFSQyxhfShUcmFuc2Zvcm1hYmxlU1ZHKSxDT01NQU5EX0FSR19DT1VOVFMkMT0oKF9hJDE9e30pW1NWR1BhdGhEYXRhJDEuTU9WRV9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuTElORV9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuSE9SSVpfTElORV9UT109MSxfYSQxW1NWR1BhdGhEYXRhJDEuVkVSVF9MSU5FX1RPXT0xLF9hJDFbU1ZHUGF0aERhdGEkMS5DTE9TRV9QQVRIXT0wLF9hJDFbU1ZHUGF0aERhdGEkMS5RVUFEX1RPXT00LF9hJDFbU1ZHUGF0aERhdGEkMS5TTU9PVEhfUVVBRF9UT109MixfYSQxW1NWR1BhdGhEYXRhJDEuQ1VSVkVfVE9dPTYsX2EkMVtTVkdQYXRoRGF0YSQxLlNNT09USF9DVVJWRV9UT109NCxfYSQxW1NWR1BhdGhEYXRhJDEuQVJDXT03LF9hJDEpO2V4cG9ydHtTVkdQYXRoRGF0YSQxIGFzIFNWR1BhdGhEYXRhLENPTU1BTkRfQVJHX0NPVU5UUyQxIGFzIENPTU1BTkRfQVJHX0NPVU5UUyxlbmNvZGVTVkdQYXRoJCQxIGFzIGVuY29kZVNWR1BhdGgsU1ZHUGF0aERhdGFQYXJzZXIkJDEgYXMgU1ZHUGF0aERhdGFQYXJzZXIsU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TVkdQYXRoRGF0YS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgdG9QYXRoIGZyb20gJy4vdG9QYXRoJztcbmltcG9ydCB0b1BvaW50cyBmcm9tICcuL3RvUG9pbnRzJztcbmltcG9ydCB2YWxpZCBmcm9tICcuL3ZhbGlkJztcblxuZXhwb3J0IHsgdG9QYXRoLCB0b1BvaW50cywgdmFsaWQgfTsiLCJpbXBvcnQgdG9Qb2ludHMgZnJvbSAnLi90b1BvaW50cyc7XG5cbnZhciBwb2ludHNUb0QgPSBmdW5jdGlvbiBwb2ludHNUb0QocCkge1xuICB2YXIgZCA9ICcnO1xuICB2YXIgaSA9IDA7XG4gIHZhciBmaXJzdFBvaW50ID0gdm9pZCAwO1xuXG4gIHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gIHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IHBbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgcG9pbnQgPSBfc3RlcC52YWx1ZTtcbiAgICAgIHZhciBfcG9pbnQkY3VydmUgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICBjdXJ2ZSA9IF9wb2ludCRjdXJ2ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcG9pbnQkY3VydmUsXG4gICAgICAgICAgbW92ZVRvID0gcG9pbnQubW92ZVRvLFxuICAgICAgICAgIHggPSBwb2ludC54LFxuICAgICAgICAgIHkgPSBwb2ludC55O1xuXG4gICAgICB2YXIgaXNGaXJzdFBvaW50ID0gaSA9PT0gMCB8fCBtb3ZlVG87XG4gICAgICB2YXIgaXNMYXN0UG9pbnQgPSBpID09PSBwLmxlbmd0aCAtIDEgfHwgcFtpICsgMV0ubW92ZVRvO1xuICAgICAgdmFyIHByZXZQb2ludCA9IGkgPT09IDAgPyBudWxsIDogcFtpIC0gMV07XG5cbiAgICAgIGlmIChpc0ZpcnN0UG9pbnQpIHtcbiAgICAgICAgZmlyc3RQb2ludCA9IHBvaW50O1xuXG4gICAgICAgIGlmICghaXNMYXN0UG9pbnQpIHtcbiAgICAgICAgICBkICs9ICdNJyArIHggKyAnLCcgKyB5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGN1cnZlKSB7XG4gICAgICAgIHN3aXRjaCAoY3VydmUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2FyYyc6XG4gICAgICAgICAgICB2YXIgX3BvaW50JGN1cnZlMiA9IHBvaW50LmN1cnZlLFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9IF9wb2ludCRjdXJ2ZTIubGFyZ2VBcmNGbGFnLFxuICAgICAgICAgICAgICAgIGxhcmdlQXJjRmxhZyA9IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBciA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkbGFyZ2VBcixcbiAgICAgICAgICAgICAgICByeCA9IF9wb2ludCRjdXJ2ZTIucngsXG4gICAgICAgICAgICAgICAgcnkgPSBfcG9pbnQkY3VydmUyLnJ5LFxuICAgICAgICAgICAgICAgIF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9IF9wb2ludCRjdXJ2ZTIuc3dlZXBGbGFnLFxuICAgICAgICAgICAgICAgIHN3ZWVwRmxhZyA9IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkc3dlZXBGbCxcbiAgICAgICAgICAgICAgICBfcG9pbnQkY3VydmUyJHhBeGlzUm8gPSBfcG9pbnQkY3VydmUyLnhBeGlzUm90YXRpb24sXG4gICAgICAgICAgICAgICAgeEF4aXNSb3RhdGlvbiA9IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbyA9PT0gdW5kZWZpbmVkID8gMCA6IF9wb2ludCRjdXJ2ZTIkeEF4aXNSbztcblxuICAgICAgICAgICAgZCArPSAnQScgKyByeCArICcsJyArIHJ5ICsgJywnICsgeEF4aXNSb3RhdGlvbiArICcsJyArIGxhcmdlQXJjRmxhZyArICcsJyArIHN3ZWVwRmxhZyArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnY3ViaWMnOlxuICAgICAgICAgICAgdmFyIF9wb2ludCRjdXJ2ZTMgPSBwb2ludC5jdXJ2ZSxcbiAgICAgICAgICAgICAgICBjeDEgPSBfcG9pbnQkY3VydmUzLngxLFxuICAgICAgICAgICAgICAgIGN5MSA9IF9wb2ludCRjdXJ2ZTMueTEsXG4gICAgICAgICAgICAgICAgY3gyID0gX3BvaW50JGN1cnZlMy54MixcbiAgICAgICAgICAgICAgICBjeTIgPSBfcG9pbnQkY3VydmUzLnkyO1xuXG4gICAgICAgICAgICBkICs9ICdDJyArIGN4MSArICcsJyArIGN5MSArICcsJyArIGN4MiArICcsJyArIGN5MiArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncXVhZHJhdGljJzpcbiAgICAgICAgICAgIHZhciBfcG9pbnQkY3VydmU0ID0gcG9pbnQuY3VydmUsXG4gICAgICAgICAgICAgICAgcXgxID0gX3BvaW50JGN1cnZlNC54MSxcbiAgICAgICAgICAgICAgICBxeTEgPSBfcG9pbnQkY3VydmU0LnkxO1xuXG4gICAgICAgICAgICBkICs9ICdRJyArIHF4MSArICcsJyArIHF5MSArICcsJyArIHggKyAnLCcgKyB5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNMYXN0UG9pbnQgJiYgeCA9PT0gZmlyc3RQb2ludC54ICYmIHkgPT09IGZpcnN0UG9pbnQueSkge1xuICAgICAgICAgIGQgKz0gJ1onO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTGFzdFBvaW50ICYmIHggPT09IGZpcnN0UG9pbnQueCAmJiB5ID09PSBmaXJzdFBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnWic7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54ICYmIHkgIT09IHByZXZQb2ludC55KSB7XG4gICAgICAgIGQgKz0gJ0wnICsgeCArICcsJyArIHk7XG4gICAgICB9IGVsc2UgaWYgKHggIT09IHByZXZQb2ludC54KSB7XG4gICAgICAgIGQgKz0gJ0gnICsgeDtcbiAgICAgIH0gZWxzZSBpZiAoeSAhPT0gcHJldlBvaW50LnkpIHtcbiAgICAgICAgZCArPSAnVicgKyB5O1xuICAgICAgfVxuXG4gICAgICBpKys7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkO1xufTtcblxudmFyIHRvUGF0aCA9IGZ1bmN0aW9uIHRvUGF0aChzKSB7XG4gIHZhciBpc1BvaW50cyA9IEFycmF5LmlzQXJyYXkocyk7XG4gIHZhciBpc0dyb3VwID0gaXNQb2ludHMgPyBBcnJheS5pc0FycmF5KHNbMF0pIDogcy50eXBlID09PSAnZyc7XG4gIHZhciBwb2ludHMgPSBpc1BvaW50cyA/IHMgOiBpc0dyb3VwID8gcy5zaGFwZXMubWFwKGZ1bmN0aW9uIChzaHApIHtcbiAgICByZXR1cm4gdG9Qb2ludHMoc2hwKTtcbiAgfSkgOiB0b1BvaW50cyhzKTtcblxuICBpZiAoaXNHcm91cCkge1xuICAgIHJldHVybiBwb2ludHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICByZXR1cm4gcG9pbnRzVG9EKHApO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBvaW50c1RvRChwb2ludHMpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9QYXRoOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIHRvUG9pbnRzID0gZnVuY3Rpb24gdG9Qb2ludHMoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsndHlwZSddKTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdjaXJjbGUnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21DaXJjbGUocHJvcHMpO1xuICAgIGNhc2UgJ2VsbGlwc2UnOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21FbGxpcHNlKHByb3BzKTtcbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tTGluZShwcm9wcyk7XG4gICAgY2FzZSAncGF0aCc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBhdGgocHJvcHMpO1xuICAgIGNhc2UgJ3BvbHlnb24nOlxuICAgICAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2x5Z29uKHByb3BzKTtcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbVBvbHlsaW5lKHByb3BzKTtcbiAgICBjYXNlICdyZWN0JzpcbiAgICAgIHJldHVybiBnZXRQb2ludHNGcm9tUmVjdChwcm9wcyk7XG4gICAgY2FzZSAnZyc6XG4gICAgICByZXR1cm4gZ2V0UG9pbnRzRnJvbUcocHJvcHMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHZhbGlkIHNoYXBlIHR5cGUnKTtcbiAgfVxufTtcblxudmFyIGdldFBvaW50c0Zyb21DaXJjbGUgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tQ2lyY2xlKF9yZWYyKSB7XG4gIHZhciBjeCA9IF9yZWYyLmN4LFxuICAgICAgY3kgPSBfcmVmMi5jeSxcbiAgICAgIHIgPSBfcmVmMi5yO1xuXG4gIHJldHVybiBbeyB4OiBjeCwgeTogY3kgLSByLCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByLCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHIsIHJ5OiByLCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHIsIGN1cnZlOiB7IHR5cGU6ICdhcmMnLCByeDogciwgcnk6IHIsIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21FbGxpcHNlID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUVsbGlwc2UoX3JlZjMpIHtcbiAgdmFyIGN4ID0gX3JlZjMuY3gsXG4gICAgICBjeSA9IF9yZWYzLmN5LFxuICAgICAgcnggPSBfcmVmMy5yeCxcbiAgICAgIHJ5ID0gX3JlZjMucnk7XG5cbiAgcmV0dXJuIFt7IHg6IGN4LCB5OiBjeSAtIHJ5LCBtb3ZlVG86IHRydWUgfSwgeyB4OiBjeCwgeTogY3kgKyByeSwgY3VydmU6IHsgdHlwZTogJ2FyYycsIHJ4OiByeCwgcnk6IHJ5LCBzd2VlcEZsYWc6IDEgfSB9LCB7IHg6IGN4LCB5OiBjeSAtIHJ5LCBjdXJ2ZTogeyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21MaW5lID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbUxpbmUoX3JlZjQpIHtcbiAgdmFyIHgxID0gX3JlZjQueDEsXG4gICAgICB4MiA9IF9yZWY0LngyLFxuICAgICAgeTEgPSBfcmVmNC55MSxcbiAgICAgIHkyID0gX3JlZjQueTI7XG5cbiAgcmV0dXJuIFt7IHg6IHgxLCB5OiB5MSwgbW92ZVRvOiB0cnVlIH0sIHsgeDogeDIsIHk6IHkyIH1dO1xufTtcblxudmFyIHZhbGlkQ29tbWFuZHMgPSAvW01tTGxIaFZ2Q2NTc1FxVHRBYVp6XS9nO1xuXG52YXIgY29tbWFuZExlbmd0aHMgPSB7XG4gIEE6IDcsXG4gIEM6IDYsXG4gIEg6IDEsXG4gIEw6IDIsXG4gIE06IDIsXG4gIFE6IDQsXG4gIFM6IDQsXG4gIFQ6IDIsXG4gIFY6IDEsXG4gIFo6IDBcbn07XG5cbnZhciByZWxhdGl2ZUNvbW1hbmRzID0gWydhJywgJ2MnLCAnaCcsICdsJywgJ20nLCAncScsICdzJywgJ3QnLCAndiddO1xuXG52YXIgaXNSZWxhdGl2ZSA9IGZ1bmN0aW9uIGlzUmVsYXRpdmUoY29tbWFuZCkge1xuICByZXR1cm4gcmVsYXRpdmVDb21tYW5kcy5pbmRleE9mKGNvbW1hbmQpICE9PSAtMTtcbn07XG5cbnZhciBvcHRpb25hbEFyY0tleXMgPSBbJ3hBeGlzUm90YXRpb24nLCAnbGFyZ2VBcmNGbGFnJywgJ3N3ZWVwRmxhZyddO1xuXG52YXIgZ2V0Q29tbWFuZHMgPSBmdW5jdGlvbiBnZXRDb21tYW5kcyhkKSB7XG4gIHJldHVybiBkLm1hdGNoKHZhbGlkQ29tbWFuZHMpO1xufTtcblxudmFyIGdldFBhcmFtcyA9IGZ1bmN0aW9uIGdldFBhcmFtcyhkKSB7XG4gIHJldHVybiBkLnNwbGl0KHZhbGlkQ29tbWFuZHMpLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1swLTldKy0vZywgZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLnNsaWNlKDAsIC0xKSArICcgLSc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnJlcGxhY2UoL1xcLlswLTldKy9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgcmV0dXJuIG0gKyAnICc7XG4gICAgfSk7XG4gIH0pLm1hcChmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB2LnRyaW0oKTtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYubGVuZ3RoID4gMDtcbiAgfSkubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHYuc3BsaXQoL1sgLF0rLykubWFwKHBhcnNlRmxvYXQpLmZpbHRlcihmdW5jdGlvbiAobikge1xuICAgICAgcmV0dXJuICFpc05hTihuKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBhdGggPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tUGF0aChfcmVmNSkge1xuICB2YXIgZCA9IF9yZWY1LmQ7XG5cbiAgdmFyIGNvbW1hbmRzID0gZ2V0Q29tbWFuZHMoZCk7XG4gIHZhciBwYXJhbXMgPSBnZXRQYXJhbXMoZCk7XG5cbiAgdmFyIHBvaW50cyA9IFtdO1xuXG4gIHZhciBtb3ZlVG8gPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBjb21tYW5kcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY29tbWFuZCA9IGNvbW1hbmRzW2ldO1xuICAgIHZhciB1cHBlckNhc2VDb21tYW5kID0gY29tbWFuZC50b1VwcGVyQ2FzZSgpO1xuICAgIHZhciBjb21tYW5kTGVuZ3RoID0gY29tbWFuZExlbmd0aHNbdXBwZXJDYXNlQ29tbWFuZF07XG4gICAgdmFyIHJlbGF0aXZlID0gaXNSZWxhdGl2ZShjb21tYW5kKTtcblxuICAgIGlmIChjb21tYW5kTGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGNvbW1hbmRQYXJhbXMgPSBwYXJhbXMuc2hpZnQoKTtcbiAgICAgIHZhciBpdGVyYXRpb25zID0gY29tbWFuZFBhcmFtcy5sZW5ndGggLyBjb21tYW5kTGVuZ3RoO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICB2YXIgcHJldlBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSB8fCB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICBzd2l0Y2ggKHVwcGVyQ2FzZUNvbW1hbmQpIHtcbiAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIHZhciB4ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHZhciB5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKGogPT09IDApIHtcbiAgICAgICAgICAgICAgbW92ZVRvID0geyB4OiB4LCB5OiB5IH07XG4gICAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgeDogeCwgeTogeSwgbW92ZVRvOiB0cnVlIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiB4LCB5OiB5IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgeDogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgeTogcHJldlBvaW50LnlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICB4OiBwcmV2UG9pbnQueCxcbiAgICAgICAgICAgICAgeTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2FyYycsXG4gICAgICAgICAgICAgICAgcng6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICByeTogY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICAgIHhBeGlzUm90YXRpb246IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBsYXJnZUFyY0ZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICBzd2VlcEZsYWc6IGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIF9pdGVyYXRvciA9IG9wdGlvbmFsQXJjS2V5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgayA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV1bJ2N1cnZlJ11ba10gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdWydjdXJ2ZSddW2tdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgIF9kaWRJdGVyYXRvckVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgICAgICAgICBfaXRlcmF0b3IucmV0dXJuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBwb2ludHMucHVzaCh7XG4gICAgICAgICAgICAgIGN1cnZlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1YmljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB4MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MjogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIHZhciBzeDIgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5MiA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC55IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgc3ggPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuICAgICAgICAgICAgdmFyIHN5ID0gKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgdmFyIGRpZmYgPSB7fTtcblxuICAgICAgICAgICAgdmFyIHN4MSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBzeTEgPSB2b2lkIDA7XG5cbiAgICAgICAgICAgIGlmIChwcmV2UG9pbnQuY3VydmUgJiYgcHJldlBvaW50LmN1cnZlLnR5cGUgPT09ICdjdWJpYycpIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMocHJldlBvaW50LnggLSBwcmV2UG9pbnQuY3VydmUueDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54IDwgcHJldlBvaW50LmN1cnZlLngyID8gcHJldlBvaW50LnggLSBkaWZmLnggOiBwcmV2UG9pbnQueCArIGRpZmYueDtcbiAgICAgICAgICAgICAgc3kxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTIgPyBwcmV2UG9pbnQueSAtIGRpZmYueSA6IHByZXZQb2ludC55ICsgZGlmZi55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlmZi54ID0gTWF0aC5hYnMoc3ggLSBzeDIpO1xuICAgICAgICAgICAgICBkaWZmLnkgPSBNYXRoLmFicyhzeSAtIHN5Mik7XG4gICAgICAgICAgICAgIHN4MSA9IHByZXZQb2ludC54O1xuICAgICAgICAgICAgICBzeTEgPSBwcmV2UG9pbnQueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyBjdXJ2ZTogeyB0eXBlOiAnY3ViaWMnLCB4MTogc3gxLCB5MTogc3kxLCB4Mjogc3gyLCB5Mjogc3kyIH0sIHg6IHN4LCB5OiBzeSB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdRJzpcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgY3VydmU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAncXVhZHJhdGljJyxcbiAgICAgICAgICAgICAgICB4MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnggOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKSxcbiAgICAgICAgICAgICAgICB5MTogKHJlbGF0aXZlID8gcHJldlBvaW50LnkgOiAwKSArIGNvbW1hbmRQYXJhbXMuc2hpZnQoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB4OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueCA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpLFxuICAgICAgICAgICAgICB5OiAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIHZhciB0eCA9IChyZWxhdGl2ZSA/IHByZXZQb2ludC54IDogMCkgKyBjb21tYW5kUGFyYW1zLnNoaWZ0KCk7XG4gICAgICAgICAgICB2YXIgdHkgPSAocmVsYXRpdmUgPyBwcmV2UG9pbnQueSA6IDApICsgY29tbWFuZFBhcmFtcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICB2YXIgdHgxID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHR5MSA9IHZvaWQgMDtcblxuICAgICAgICAgICAgaWYgKHByZXZQb2ludC5jdXJ2ZSAmJiBwcmV2UG9pbnQuY3VydmUudHlwZSA9PT0gJ3F1YWRyYXRpYycpIHtcbiAgICAgICAgICAgICAgdmFyIF9kaWZmID0ge1xuICAgICAgICAgICAgICAgIHg6IE1hdGguYWJzKHByZXZQb2ludC54IC0gcHJldlBvaW50LmN1cnZlLngxKSxcbiAgICAgICAgICAgICAgICB5OiBNYXRoLmFicyhwcmV2UG9pbnQueSAtIHByZXZQb2ludC5jdXJ2ZS55MSlcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueCA8IHByZXZQb2ludC5jdXJ2ZS54MSA/IHByZXZQb2ludC54IC0gX2RpZmYueCA6IHByZXZQb2ludC54ICsgX2RpZmYueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50LnkgPCBwcmV2UG9pbnQuY3VydmUueTEgPyBwcmV2UG9pbnQueSAtIF9kaWZmLnkgOiBwcmV2UG9pbnQueSArIF9kaWZmLnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0eDEgPSBwcmV2UG9pbnQueDtcbiAgICAgICAgICAgICAgdHkxID0gcHJldlBvaW50Lnk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHsgY3VydmU6IHsgdHlwZTogJ3F1YWRyYXRpYycsIHgxOiB0eDEsIHkxOiB0eTEgfSwgeDogdHgsIHk6IHR5IH0pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX3ByZXZQb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0gfHwgeyB4OiAwLCB5OiAwIH07XG5cbiAgICAgIGlmIChfcHJldlBvaW50LnggIT09IG1vdmVUby54IHx8IF9wcmV2UG9pbnQueSAhPT0gbW92ZVRvLnkpIHtcbiAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBtb3ZlVG8ueCwgeTogbW92ZVRvLnkgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBvaW50cztcbn07XG5cbnZhciBnZXRQb2ludHNGcm9tUG9seWdvbiA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5Z29uKF9yZWY2KSB7XG4gIHZhciBwb2ludHMgPSBfcmVmNi5wb2ludHM7XG5cbiAgcmV0dXJuIGdldFBvaW50c0Zyb21Qb2ludHMoeyBjbG9zZWQ6IHRydWUsIHBvaW50czogcG9pbnRzIH0pO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21Qb2x5bGluZSA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2x5bGluZShfcmVmNykge1xuICB2YXIgcG9pbnRzID0gX3JlZjcucG9pbnRzO1xuXG4gIHJldHVybiBnZXRQb2ludHNGcm9tUG9pbnRzKHsgY2xvc2VkOiBmYWxzZSwgcG9pbnRzOiBwb2ludHMgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbVBvaW50cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21Qb2ludHMoX3JlZjgpIHtcbiAgdmFyIGNsb3NlZCA9IF9yZWY4LmNsb3NlZCxcbiAgICAgIHBvaW50cyA9IF9yZWY4LnBvaW50cztcblxuICB2YXIgbnVtYmVycyA9IHBvaW50cy5zcGxpdCgvW1xccyxdKy8pLm1hcChmdW5jdGlvbiAobikge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG4pO1xuICB9KTtcblxuICB2YXIgcCA9IG51bWJlcnMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHBvaW50LCBpKSB7XG4gICAgaWYgKGkgJSAyID09PSAwKSB7XG4gICAgICBhcnIucHVzaCh7IHg6IHBvaW50IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJbKGkgLSAxKSAvIDJdLnkgPSBwb2ludDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyO1xuICB9LCBbXSk7XG5cbiAgaWYgKGNsb3NlZCkge1xuICAgIHAucHVzaChfZXh0ZW5kcyh7fSwgcFswXSkpO1xuICB9XG5cbiAgcFswXS5tb3ZlVG8gPSB0cnVlO1xuXG4gIHJldHVybiBwO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0ID0gZnVuY3Rpb24gZ2V0UG9pbnRzRnJvbVJlY3QoX3JlZjkpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWY5LmhlaWdodCxcbiAgICAgIHJ4ID0gX3JlZjkucngsXG4gICAgICByeSA9IF9yZWY5LnJ5LFxuICAgICAgd2lkdGggPSBfcmVmOS53aWR0aCxcbiAgICAgIHggPSBfcmVmOS54LFxuICAgICAgeSA9IF9yZWY5Lnk7XG5cbiAgaWYgKHJ4IHx8IHJ5KSB7XG4gICAgcmV0dXJuIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyh7XG4gICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgIHJ4OiByeCB8fCByeSxcbiAgICAgIHJ5OiByeSB8fCByeCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCh7IGhlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGgsIHg6IHgsIHk6IHkgfSk7XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUJhc2ljUmVjdCA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21CYXNpY1JlY3QoX3JlZjEwKSB7XG4gIHZhciBoZWlnaHQgPSBfcmVmMTAuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmMTAud2lkdGgsXG4gICAgICB4ID0gX3JlZjEwLngsXG4gICAgICB5ID0gX3JlZjEwLnk7XG5cbiAgcmV0dXJuIFt7IHg6IHgsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgfSwgeyB4OiB4LCB5OiB5IH1dO1xufTtcblxudmFyIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyA9IGZ1bmN0aW9uIGdldFBvaW50c0Zyb21SZWN0V2l0aENvcm5lclJhZGl1cyhfcmVmMTEpIHtcbiAgdmFyIGhlaWdodCA9IF9yZWYxMS5oZWlnaHQsXG4gICAgICByeCA9IF9yZWYxMS5yeCxcbiAgICAgIHJ5ID0gX3JlZjExLnJ5LFxuICAgICAgd2lkdGggPSBfcmVmMTEud2lkdGgsXG4gICAgICB4ID0gX3JlZjExLngsXG4gICAgICB5ID0gX3JlZjExLnk7XG5cbiAgdmFyIGN1cnZlID0geyB0eXBlOiAnYXJjJywgcng6IHJ4LCByeTogcnksIHN3ZWVwRmxhZzogMSB9O1xuXG4gIHJldHVybiBbeyB4OiB4ICsgcngsIHk6IHksIG1vdmVUbzogdHJ1ZSB9LCB7IHg6IHggKyB3aWR0aCAtIHJ4LCB5OiB5IH0sIHsgeDogeCArIHdpZHRoLCB5OiB5ICsgcnksIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyB3aWR0aCwgeTogeSArIGhlaWdodCAtIHJ5IH0sIHsgeDogeCArIHdpZHRoIC0gcngsIHk6IHkgKyBoZWlnaHQsIGN1cnZlOiBjdXJ2ZSB9LCB7IHg6IHggKyByeCwgeTogeSArIGhlaWdodCB9LCB7IHg6IHgsIHk6IHkgKyBoZWlnaHQgLSByeSwgY3VydmU6IGN1cnZlIH0sIHsgeDogeCwgeTogeSArIHJ5IH0sIHsgeDogeCArIHJ4LCB5OiB5LCBjdXJ2ZTogY3VydmUgfV07XG59O1xuXG52YXIgZ2V0UG9pbnRzRnJvbUcgPSBmdW5jdGlvbiBnZXRQb2ludHNGcm9tRyhfcmVmMTIpIHtcbiAgdmFyIHNoYXBlcyA9IF9yZWYxMi5zaGFwZXM7XG4gIHJldHVybiBzaGFwZXMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHRvUG9pbnRzKHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvUG9pbnRzOyIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIGdldEVycm9ycyA9IGZ1bmN0aW9uIGdldEVycm9ycyhzaGFwZSkge1xuICB2YXIgcnVsZXMgPSBnZXRSdWxlcyhzaGFwZSk7XG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBydWxlcy5tYXAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgbWF0Y2ggPSBfcmVmLm1hdGNoLFxuICAgICAgICBwcm9wID0gX3JlZi5wcm9wLFxuICAgICAgICByZXF1aXJlZCA9IF9yZWYucmVxdWlyZWQsXG4gICAgICAgIHR5cGUgPSBfcmVmLnR5cGU7XG5cbiAgICBpZiAodHlwZW9mIHNoYXBlW3Byb3BdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgIGVycm9ycy5wdXNoKHByb3AgKyAnIHByb3AgaXMgcmVxdWlyZWQnICsgKHByb3AgPT09ICd0eXBlJyA/ICcnIDogJyBvbiBhICcgKyBzaGFwZS50eXBlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoc2hhcGVbcHJvcF0pKSB7XG4gICAgICAgICAgICBlcnJvcnMucHVzaChwcm9wICsgJyBwcm9wIG11c3QgYmUgb2YgdHlwZSBhcnJheScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfdHlwZW9mKHNoYXBlW3Byb3BdKSAhPT0gdHlwZSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgdmFsaWQtdHlwZW9mXG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9mIHR5cGUgJyArIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG1hdGNoKSkge1xuICAgICAgICBpZiAobWF0Y2guaW5kZXhPZihzaGFwZVtwcm9wXSkgPT09IC0xKSB7XG4gICAgICAgICAgZXJyb3JzLnB1c2gocHJvcCArICcgcHJvcCBtdXN0IGJlIG9uZSBvZiAnICsgbWF0Y2guam9pbignLCAnKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChzaGFwZS50eXBlID09PSAnZycgJiYgQXJyYXkuaXNBcnJheShzaGFwZS5zaGFwZXMpKSB7XG4gICAgdmFyIGNoaWxkRXJyb3JzID0gc2hhcGUuc2hhcGVzLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGdldEVycm9ycyhzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KGVycm9ycywgY2hpbGRFcnJvcnMpO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbnZhciBnZXRSdWxlcyA9IGZ1bmN0aW9uIGdldFJ1bGVzKHNoYXBlKSB7XG4gIHZhciBydWxlcyA9IFt7XG4gICAgbWF0Y2g6IFsnY2lyY2xlJywgJ2VsbGlwc2UnLCAnbGluZScsICdwYXRoJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmVjdCcsICdnJ10sXG4gICAgcHJvcDogJ3R5cGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHR5cGU6ICdzdHJpbmcnXG4gIH1dO1xuXG4gIHN3aXRjaCAoc2hhcGUudHlwZSkge1xuICAgIGNhc2UgJ2NpcmNsZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncicsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnZWxsaXBzZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2N4JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdjeScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3J5JywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdsaW5lJzpcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneDEnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gyJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdudW1iZXInIH0pO1xuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICd5MScsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAneTInLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BhdGgnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdkJywgcmVxdWlyZWQ6IHRydWUsIHR5cGU6ICdzdHJpbmcnIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwb2x5Z29uJzpcbiAgICBjYXNlICdwb2x5bGluZSc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3BvaW50cycsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnc3RyaW5nJyB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncmVjdCc6XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ2hlaWdodCcsIHJlcXVpcmVkOiB0cnVlLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncngnLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAncnknLCB0eXBlOiAnbnVtYmVyJyB9KTtcbiAgICAgIHJ1bGVzLnB1c2goeyBwcm9wOiAnd2lkdGgnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3gnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBydWxlcy5wdXNoKHsgcHJvcDogJ3knLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ251bWJlcicgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2cnOlxuICAgICAgcnVsZXMucHVzaCh7IHByb3A6ICdzaGFwZXMnLCByZXF1aXJlZDogdHJ1ZSwgdHlwZTogJ2FycmF5JyB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHJ1bGVzO1xufTtcblxudmFyIHZhbGlkID0gZnVuY3Rpb24gdmFsaWQoc2hhcGUpIHtcbiAgdmFyIGVycm9ycyA9IGdldEVycm9ycyhzaGFwZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IGVycm9ycyxcbiAgICB2YWxpZDogZXJyb3JzLmxlbmd0aCA9PT0gMFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWQ7IiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9