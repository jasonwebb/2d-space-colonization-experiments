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









const leaf = __webpack_require__(/*! ../svg/leaf.svg */ "./bounds/svg/leaf.svg");

let canvas, ctx;
let network;

const SQUARE = 0;
const CIRCLE = 1;
const LEAF = 2;
let currentBoundsShape = LEAF;

// Create initial conditions for simulation
let setup = () => {
  // Initialize canvas and context
  canvas = document.getElementById('sketch');
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize simulation object
  network = new _core_Network__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

  // Add bounding shape
  addBounds();

  // Add auxin sources for veins to move towards
  addSources();

  // Add root veins
  addRootVeins();

  // Set up common keyboard interaction listeners
  Object(_core_KeyboardInteractions__WEBPACK_IMPORTED_MODULE_7__["setupKeyListeners"])(network);

  // Begin animation loop
  requestAnimationFrame(update);
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
  }
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

    return new _core_Path__WEBPACK_IMPORTED_MODULE_4__["default"](points, 'Bounds', ctx);
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

let addSources = () => {
  // Set up the auxin sources using pre-made patterns
  let randomSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getRandomSources(500, ctx, network.bounds);
  let gridSources = _core_SourcePatterns__WEBPACK_IMPORTED_MODULE_2__["default"].getGridOfSources(80, 80, ctx, network.bounds);

  network.sources = gridSources;
}

// Create the network with initial conditions
let addRootVeins = () => {
  switch(currentBoundsShape) {
    case SQUARE:
    case CIRCLE:
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
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;

    // b = toggle visibility of bounds
    case 'b':
      network.settings.ShowBounds = !network.settings.ShowBounds;
      break;

    case '1':
      currentBoundsShape = SQUARE;
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;

    case '2':
      currentBoundsShape = CIRCLE;
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
      break;

    case '3':
      currentBoundsShape = LEAF;
      network.reset();
      addBounds();
      addSources();
      addRootVeins();
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYm91bmRzL2pzL2VudHJ5LmpzIiwid2VicGFjazovLy8uL2JvdW5kcy9zdmcvbGVhZi5zdmciLCJ3ZWJwYWNrOi8vLy4vY29yZS9BdXhpblNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0NvbG9yUHJlc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL0RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL2NvcmUvS2V5Ym9hcmRJbnRlcmFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29yZS9OZXR3b3JrLmpzIiwid2VicGFjazovLy8uL2NvcmUvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NWR0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb3JlL1NvdXJjZVBhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2NvcmUvVXRpbGl0aWVzLmpzIiwid2VicGFjazovLy8uL2NvcmUvVmVpbk5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2tkYnVzaC9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMva2RidXNoL3NyYy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvaW50LWluLXBvbHlnb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1wYXRoZGF0YS9saWIvU1ZHUGF0aERhdGEubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92ZWMyL3ZlYzIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFxRDs7QUFFdEM7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsVUFBVSxtREFBSzs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDTjtBQUNDO0FBQ1E7O0FBRXRCO0FBQ2Y7QUFDQTtBQUNBLG9DQUFvQyxFQUFFLGlEQUFROztBQUU5QyxzQkFBc0I7QUFDdEIsb0JBQW9COztBQUVwQixvQkFBb0I7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxVQUFVLEVBQUU7O0FBRWpEO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYm91bmRzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYm91bmRzL2pzL2VudHJ5LmpzXCIpO1xuIiwiaW1wb3J0ICogYXMgVmVjMiBmcm9tICd2ZWMyJztcclxuaW1wb3J0IE5ldHdvcmsgZnJvbSAnLi4vLi4vY29yZS9OZXR3b3JrJztcclxuaW1wb3J0IFNvdXJjZVBhdHRlcm5zIGZyb20gJy4uLy4uL2NvcmUvU291cmNlUGF0dGVybnMnO1xyXG5pbXBvcnQgVmVpbk5vZGUgZnJvbSAnLi4vLi4vY29yZS9WZWluTm9kZSc7XHJcbmltcG9ydCBQYXRoIGZyb20gJy4uLy4uL2NvcmUvUGF0aCc7XHJcbmltcG9ydCBTVkdMb2FkZXIgZnJvbSAnLi4vLi4vY29yZS9TVkdMb2FkZXInO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuLi8uLi9jb3JlL1V0aWxpdGllcyc7XHJcbmltcG9ydCB7IHNldHVwS2V5TGlzdGVuZXJzIH0gZnJvbSAnLi4vLi4vY29yZS9LZXlib2FyZEludGVyYWN0aW9ucyc7XHJcblxyXG5jb25zdCBsZWFmID0gcmVxdWlyZSgnLi4vc3ZnL2xlYWYuc3ZnJyk7XHJcblxyXG5sZXQgY2FudmFzLCBjdHg7XHJcbmxldCBuZXR3b3JrO1xyXG5cclxuY29uc3QgU1FVQVJFID0gMDtcclxuY29uc3QgQ0lSQ0xFID0gMTtcclxuY29uc3QgTEVBRiA9IDI7XHJcbmxldCBjdXJyZW50Qm91bmRzU2hhcGUgPSBMRUFGO1xyXG5cclxuLy8gQ3JlYXRlIGluaXRpYWwgY29uZGl0aW9ucyBmb3Igc2ltdWxhdGlvblxyXG5sZXQgc2V0dXAgPSAoKSA9PiB7XHJcbiAgLy8gSW5pdGlhbGl6ZSBjYW52YXMgYW5kIGNvbnRleHRcclxuICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2tldGNoJyk7XHJcbiAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gIC8vIEluaXRpYWxpemUgc2ltdWxhdGlvbiBvYmplY3RcclxuICBuZXR3b3JrID0gbmV3IE5ldHdvcmsoY3R4KTtcclxuXHJcbiAgLy8gQWRkIGJvdW5kaW5nIHNoYXBlXHJcbiAgYWRkQm91bmRzKCk7XHJcblxyXG4gIC8vIEFkZCBhdXhpbiBzb3VyY2VzIGZvciB2ZWlucyB0byBtb3ZlIHRvd2FyZHNcclxuICBhZGRTb3VyY2VzKCk7XHJcblxyXG4gIC8vIEFkZCByb290IHZlaW5zXHJcbiAgYWRkUm9vdFZlaW5zKCk7XHJcblxyXG4gIC8vIFNldCB1cCBjb21tb24ga2V5Ym9hcmQgaW50ZXJhY3Rpb24gbGlzdGVuZXJzXHJcbiAgc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29yayk7XHJcblxyXG4gIC8vIEJlZ2luIGFuaW1hdGlvbiBsb29wXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbmxldCBhZGRCb3VuZHMgPSAoKSA9PiB7XHJcbiAgc3dpdGNoKGN1cnJlbnRCb3VuZHNTaGFwZSkge1xyXG4gICAgY2FzZSBTUVVBUkU6XHJcbiAgICAgIG5ldHdvcmsuYm91bmRzID0gZ2V0U3F1YXJlQm91bmRzKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQ0lSQ0xFOlxyXG4gICAgICBuZXR3b3JrLmJvdW5kcyA9IGdldENpcmNsZUJvdW5kcygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExFQUY6XHJcbiAgICAgIG5ldHdvcmsuYm91bmRzID0gZ2V0TGVhZkJvdW5kcygpO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbiAgbGV0IGdldFNxdWFyZUJvdW5kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gICAgY29uc3Qgc2lkZUxlbmd0aCA9IDgwMDtcclxuXHJcbiAgICByZXR1cm4gbmV3IFBhdGgoXHJcbiAgICAgIFtcclxuICAgICAgICBbY3ggLSBzaWRlTGVuZ3RoLzIsIGN5IC0gc2lkZUxlbmd0aC8yXSwgIC8vIHRvcCBsZWZ0IGNvcm5lclxyXG4gICAgICAgIFtjeCArIHNpZGVMZW5ndGgvMiwgY3kgLSBzaWRlTGVuZ3RoLzJdLCAgLy8gdG9wIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgIFtjeCArIHNpZGVMZW5ndGgvMiwgY3kgKyBzaWRlTGVuZ3RoLzJdLCAgLy8gYm90dG9tIHJpZ2h0IGNvcm5lclxyXG4gICAgICAgIFtjeCAtIHNpZGVMZW5ndGgvMiwgY3kgKyBzaWRlTGVuZ3RoLzJdICAgLy8gYm90dG9tIGxlZnQgY29ybmVyXHJcbiAgICAgIF0sXHJcbiAgICAgICdCb3VuZHMnLFxyXG4gICAgICBjdHhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0Q2lyY2xlQm91bmRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3ggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XHJcbiAgICBjb25zdCBjeSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbiAgICBjb25zdCByYWRpdXMgPSAzNTA7XHJcbiAgICBjb25zdCByZXNvbHV0aW9uID0gMTAwO1xyXG4gICAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZXNvbHV0aW9uOyBpKyspIHtcclxuICAgICAgbGV0IGFuZ2xlID0gMiAqIE1hdGguUEkgKiBpIC8gcmVzb2x1dGlvbjtcclxuICAgICAgbGV0IHggPSBjeCArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5jb3MoYW5nbGUpKTtcclxuICAgICAgbGV0IHkgPSBjeSArIE1hdGguZmxvb3IocmFkaXVzICogTWF0aC5zaW4oYW5nbGUpKTtcclxuXHJcbiAgICAgIHBvaW50cy5wdXNoKFt4LCB5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQYXRoKHBvaW50cywgJ0JvdW5kcycsIGN0eCk7XHJcbiAgfVxyXG5cclxuICBsZXQgZ2V0TGVhZkJvdW5kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGN4ID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgY29uc3QgY3kgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG4gICAgY29uc3Qgc2hhcGVXaWR0aCA9IDkwMDtcclxuICAgIGNvbnN0IHNoYXBlSGVpZ2h0ID0gOTAwO1xyXG5cclxuICAgIGxldCBwb2x5Z29uID0gU1ZHTG9hZGVyLmxvYWQobGVhZilbMF07XHJcblxyXG4gICAgLy8gVHJhbnNsYXRlIHRoZSBkZXNpZ24gdG8gdGhlIHNjcmVlbiBjZW50ZXJcclxuICAgIGZvcihsZXQgcG9pbnQgb2YgcG9seWdvbikge1xyXG4gICAgICBwb2ludFswXSA9IGN4IC0gc2hhcGVXaWR0aC8yICsgcG9pbnRbMF07XHJcbiAgICAgIHBvaW50WzFdID0gY3kgLSBzaGFwZUhlaWdodC8yICsgcG9pbnRbMV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQYXRoKHBvbHlnb24sICdCb3VuZHMnLCBjdHgpO1xyXG4gIH1cclxuXHJcbmxldCBhZGRTb3VyY2VzID0gKCkgPT4ge1xyXG4gIC8vIFNldCB1cCB0aGUgYXV4aW4gc291cmNlcyB1c2luZyBwcmUtbWFkZSBwYXR0ZXJuc1xyXG4gIGxldCByYW5kb21Tb3VyY2VzID0gU291cmNlUGF0dGVybnMuZ2V0UmFuZG9tU291cmNlcyg1MDAsIGN0eCwgbmV0d29yay5ib3VuZHMpO1xyXG4gIGxldCBncmlkU291cmNlcyA9IFNvdXJjZVBhdHRlcm5zLmdldEdyaWRPZlNvdXJjZXMoODAsIDgwLCBjdHgsIG5ldHdvcmsuYm91bmRzKTtcclxuXHJcbiAgbmV0d29yay5zb3VyY2VzID0gZ3JpZFNvdXJjZXM7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG5sZXQgYWRkUm9vdFZlaW5zID0gKCkgPT4ge1xyXG4gIHN3aXRjaChjdXJyZW50Qm91bmRzU2hhcGUpIHtcclxuICAgIGNhc2UgU1FVQVJFOlxyXG4gICAgY2FzZSBDSVJDTEU6XHJcbiAgICAgIC8vIEFkZCBhIHNldCBvZiByYW5kb20gcm9vdCB2ZWlucyB0aHJvdWdob3V0IHNjZW5lXHJcbiAgICAgIGZvcihsZXQgaT0wOyBpPDEwOyBpKyspIHtcclxuICAgICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgICAgbmV3IFZlaW5Ob2RlKFxyXG4gICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgICByYW5kb20od2luZG93LmlubmVyV2lkdGgpLFxyXG4gICAgICAgICAgICAgIHJhbmRvbSh3aW5kb3cuaW5uZXJIZWlnaHQpXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTEVBRjpcclxuICAgICAgLy8gUHV0IGEgc2luZ2xlIHJvb3Qgbm90ZSBhdCB0aGUgYmFzZSBvZiB0aGUgbGVhZlxyXG4gICAgICBuZXR3b3JrLmFkZFZlaW5Ob2RlKFxyXG4gICAgICAgIG5ldyBWZWluTm9kZShcclxuICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICBuZXcgVmVjMihcclxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyAyIC0gNSxcclxuICAgICAgICAgICAgd2luZG93LmlubmVySGVpZ2h0IC8gMiArIDIyMFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICBjdHhcclxuICAgICAgICApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbi8vIE1haW4gcHJvZ3JhbSBsb29wXHJcbmxldCB1cGRhdGUgPSAodGltZXN0YW1wKSA9PiB7XHJcbiAgbmV0d29yay51cGRhdGUoKTtcclxuICBuZXR3b3JrLmRyYXcoKTtcclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XHJcbn1cclxuXHJcbi8vIEtleSBjb21tYW5kcyBzcGVjaWZpYyB0byB0aGlzIHNrZXRjaFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgc3dpdGNoKGUua2V5KSB7XHJcbiAgICAvLyByID0gcmVzZXQgc2ltdWxhdGlvbiBieSByZWluaXRpYWxpemluZyB0aGUgbmV0d29yayB3aXRoIGluaXRpYWwgY29uZGl0aW9uc1xyXG4gICAgY2FzZSAncic6XHJcbiAgICAgIG5ldHdvcmsucmVzZXQoKTtcclxuICAgICAgYWRkQm91bmRzKCk7XHJcbiAgICAgIGFkZFNvdXJjZXMoKTtcclxuICAgICAgYWRkUm9vdFZlaW5zKCk7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIC8vIGIgPSB0b2dnbGUgdmlzaWJpbGl0eSBvZiBib3VuZHNcclxuICAgIGNhc2UgJ2InOlxyXG4gICAgICBuZXR3b3JrLnNldHRpbmdzLlNob3dCb3VuZHMgPSAhbmV0d29yay5zZXR0aW5ncy5TaG93Qm91bmRzO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcxJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gU1FVQVJFO1xyXG4gICAgICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgICAgIGFkZEJvdW5kcygpO1xyXG4gICAgICBhZGRTb3VyY2VzKCk7XHJcbiAgICAgIGFkZFJvb3RWZWlucygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICcyJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gQ0lSQ0xFO1xyXG4gICAgICBuZXR3b3JrLnJlc2V0KCk7XHJcbiAgICAgIGFkZEJvdW5kcygpO1xyXG4gICAgICBhZGRTb3VyY2VzKCk7XHJcbiAgICAgIGFkZFJvb3RWZWlucygpO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICczJzpcclxuICAgICAgY3VycmVudEJvdW5kc1NoYXBlID0gTEVBRjtcclxuICAgICAgbmV0d29yay5yZXNldCgpO1xyXG4gICAgICBhZGRCb3VuZHMoKTtcclxuICAgICAgYWRkU291cmNlcygpO1xyXG4gICAgICBhZGRSb290VmVpbnMoKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG4vLyBLaWNrIG9mZiB0aGUgYXBwbGljYXRpb25cclxuc2V0dXAoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxuczpkYz1cXFwiaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS9cXFwiIHhtbG5zOmNjPVxcXCJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNcXFwiIHhtbG5zOnJkZj1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zI1xcXCIgeG1sbnM6c3ZnPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczpzb2RpcG9kaT1cXFwiaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGRcXFwiIHhtbG5zOmlua3NjYXBlPVxcXCJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlXFxcIiBpZD1cXFwic3ZnMlxcXCIgc29kaXBvZGk6ZG9jbmFtZT1cXFwibGVhZi0yLnN2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDkwMC4wMDAwMiA4OTkuOTk5OTlcXFwiIHZlcnNpb249XFxcIjEuMVxcXCIgaW5rc2NhcGU6dmVyc2lvbj1cXFwiMC45Mi4zICgyNDA1NTQ2LCAyMDE4LTAzLTExKVxcXCI+PGcgaWQ9XFxcImxheWVyMVxcXCIgaW5rc2NhcGU6bGFiZWw9XFxcIkNhbHF1ZSAxXFxcIiBpbmtzY2FwZTpncm91cG1vZGU9XFxcImxheWVyXFxcIj48cGF0aCBpZD1cXFwicGF0aDMxODNcXFwiIGQ9XFxcIk0gNDUwLjIxODkxLDgyOS4wNzQzNiA0NTAuNDUxMDcsODI4LjIxNDYgNDUxLjA4MzE4LDgyNi40NTI2OCA0NTIuMDE4NjksODI0LjA0NTM1IDQ1My4xNjEwNSw4MjEuMjQ5MzMgNDU0LjU4NTk4LDgxNi41NTc2OSA0NTQuOTQ5MzgsODEwLjI4OTk4IDQ1NC4xOTg5NCw4MDAuMjQwNjcgNDUyLjI4MjM4LDc4NC4yMDQyMiA0NTAuNjI2MzIsNzY5LjgwNDc4IDQ0OC45NDE2NSw3NTIuNzc4MDYgNDQ3LjQyNTUsNzM1LjI1MiA0NDYuMjc0OTksNzE5LjM1NDU1IDQ0NS4zMTcyLDcwNS42NDgyOSA0NDQuMzI1NzIsNjk0LjA4ODg0IDQ0My40MTc1MSw2ODUuODkzMTkgNDQyLjcwOTU3LDY4Mi4yNzgzNSA0NDAuODY1OTksNjgxLjM4MTAxIDQzNi43MTA1NCw2ODAuOTI1ODEgNDMwLjIzMjE3LDY4MC45MTIyOCA0MjEuNDE5ODIsNjgxLjMzOTkzIDM3My41NjQ3Niw2ODQuNjUyNzggMzQzLjg1OTQ3LDY4Ny42Njc3OCAzMjIuODIzODEsNjkxLjcwMTk3IDMwMC45Nzc2Miw2OTguMDcyNDEgMjkxLjA3MDk5LDcwMC44Mzk3NSAyODEuMTkzNDIsNzAyLjczNDEyIDI2OS43MzQ0OCw3MDMuOTkzNTUgMjU1LjA4MzcyLDcwNC44NTYwNyAyNDMuODE1MTksNzA1LjIzMSAyMzQuMDM0Nyw3MDUuMzI2IDIyNi43OTA2Nyw3MDUuMTQ2MjggMjIzLjEzMTQ4LDcwNC42OTcwOSAyMjEuMzg2MDUsNzAzLjczNjg0IDIyMS4xNTgyLDcwMi4zOTg1IDIyMi42MjI1Nyw3MDAuMTc5ODMgMjI1Ljk1MzgxLDY5Ni41Nzg1NSAyMzEuMTk1MzYsNjkwLjA5MTk3IDIzNC41NzcsNjgzLjU5NTg5IDIzNS44ODY4Nyw2NzcuNjUyMDUgMjM0LjkxMzA4LDY3Mi44MjIxNyAyMjguODIyNjQsNjY3LjA5NDA0IDIxNi44NjE1NSw2NjAuODk3MjkgMTk5Ljg2ODQ4LDY1NC41OTM4MSAxNzguNjgyMTIsNjQ4LjU0NTUyIDE2Ni44NjA4NCw2NDUuNDU0MjcgMTU2Ljg5MjA1LDY0Mi42Mzg5NCAxNDkuODI0NTUsNjQwLjQxMDEyIDE0Ni43MDcwOSw2MzkuMDc4NDEgMTQ2Ljc0NjA1LDYzNy40MjYzNCAxNDguNTA3MTgsNjM0LjM1MDIzIDE1MS44Mjk3Miw2MzAuMDgyMzIgMTU2LjU1Mjg5LDYyNC44NTQ4NSAxNjMuMjkzNzcsNjE3LjQwMDIzIDE2Ny4wNDg1OCw2MTEuODQ2MzEgMTY4LjUwODU1LDYwNi43ODYwNSAxNjguMzY0OTYsNjAwLjgxMjQyIDE2NS44NTEzMiw1OTQuMjUwODcgMTU5LjE3OTUzLDU4Ni41NDE3NSAxNDcuNzMwODcsNTc3LjA5OTQ5IDEzMC44ODY2NCw1NjUuMzM4NSAxMjAuNDcwNTMsNTU4LjI5ODc3IDExMS45NDA2NCw1NTIuMzAxODIgMTA2LjE3NzE5LDU0Ny45ODI5MSAxMDQuMDYwNDQsNTQ1Ljk3NzI5IDEwNS4xMjY0Nyw1NDQuOTI0NDggMTA4LjAyOTAzLDU0My4xOTk3NSAxMTIuMzI0ODIsNTQxLjA0MjE1IDExNy41NzA1NCw1MzguNjkwNzcgMTMyLjQ2MTg5LDUzMS4zNzIxOSAxMzkuOTE5NjQsNTIzLjk1OTA1IDE0MS4xNjIzNCw1MTQuMDIxNCAxMzcuNDA4NSw0OTkuMTI5MjcgMTMyLjU5NzIxLDQ4My4yMjg2NSAxMjcuNjYzMiw0NjUuNDEyNzcgMTIzLjQwNCw0NDguNjc5MDQgMTIwLjYxNzE1LDQzNi4wMjQ5IDExNi40MDg3NSw0MTcuNDU2NjEgMTEwLjE5NDY5LDM5NC4xODUxNyAxMDMuNjk1ODIsMzcyLjMyMDc2IDk4LjYzMzAxNiwzNTcuOTczNTYgOTYuMDUwMTg3LDM1Mi45NzYwNiA5Mi41MDA0NzMsMzQ3LjI2ODQgODguNDUxODExLDM0MS41NTQwOSA4NC4zNzIxMzYsMzM2LjUzNjY1IDgwLjcyNjc1NiwzMzIuMTcyNDggNzcuODYwNTYyLDMyOC4yMzgxNyA3Ni4wNjA4NjIsMzI1LjE2NTIyIDc1LjYxNDk2NiwzMjMuMzg1MTQgOTQuNDY3MTg4LDMyMC40MDIwNCAxMzQuODkyMjIsMzIzLjk2OTg1IDE3OS42NTI4OCwzMzEuNzg1MjYgMjExLjUxMTk4LDM0MS41NDQ5NSAyMTYuODQ3MjIsMzQ0LjEwODI5IDIyMy42NDgwMywzNDcuMTcyNTUgMjMxLjA0MDIsMzUwLjM1MzE5IDIzOC4xNDk1NSwzNTMuMjY1NjEgMjQ1LjQwODM1LDM1Ni40MjQwOSAyNTMuMjA2MDIsMzYwLjI3NDY1IDI2MC42MDY0MSwzNjQuMzMwMzkgMjY2LjY3MzM3LDM2OC4xMDQzOCAyODQuNzc1NDcsMzc5LjIzNjU5IDI5Ni40NzE0NSwzODIuOTUzODMgMzAzLjEyNTA4LDM3OS4yNTc2MyAzMDYuMTAwMTMsMzY4LjE0OTU3IDMwNy45MDQ4MywzNTYuMjE2NzIgMzEwLjcxODQzLDM0My44MjQxIDMxNC4zMjEzMSwzMzEuODA3MjMgMzE4LjQ5MzgzLDMyMS4wMDE2MyAzMjAuNjU5MTcsMzE1LjExNTIzIDMyMy4xNjM4MiwzMDYuNzYxNjkgMzI1LjY5NzUxLDI5Ny4wNTM0NyAzMjcuOTQ5OTUsMjg3LjEwMzAzIDMzMC4zODc4NiwyNzQuNTgyNzcgMzMxLjUxNjU5LDI2Ni4xNDA0MyAzMzEuNDY2ODksMjYwLjAxMDQ3IDMzMC4zNjk1MywyNTQuNDI3MzkgMzI4LjAzNjk3LDI0NC4wMDYzNiAzMjkuMTAxOTYsMjM5LjcwMDI2IDMzNC43MDU1MiwyNDAuOTkzNTcgMzQ1Ljk4ODcxLDI0Ny4zNzA3NSAzNTUuNjg5MzIsMjUyLjU5NTc1IDM2NC40MTM2MywyNTYuMTU5MDEgMzcxLjE3NTExLDI1Ny43MzMzMSAzNzQuOTg3MiwyNTYuOTkxNDUgMzc1LjI3OTQ2LDI1NS44MjQ3NyAzNzUuMTM1MDEsMjUzLjU4ODM3IDM3NC41OTU5MywyNTAuNjAzNzcgMzczLjcwNDI4LDI0Ny4xOTI0OSAzNzIuNTE1MjQsMjQxLjg0OTA5IDM3Mi44NTY0MiwyMzYuMDQwODQgMzc1LjIwOTIsMjI3LjEzOTQ0IDM4MC4wNTQ5MywyMTIuNTE2NTkgMzg0LjA0MTU4LDIwMS42MDg3NyAzODguMjk4OSwxOTEuMjgyOTYgMzkyLjMyMjkyLDE4Mi42OTA0NiAzOTUuNjA5NjUsMTc2Ljk4MjU1IDQwMi4xNTIyMiwxNjcuMjc0MDcgNDEwLjA1MjEzLDE1NC42MzcgNDE5LjcyNDE3LDEzOC4zODk0OSA0MzEuNTgzMTIsMTE3Ljg0OTY3IDQ0NS4zNDczOSw5NC44ODgxNzkgNDU3LjA3NzU3LDc3LjYwMzg5NSA0NjYuMjQ0NzEsNjYuNzEwMTg4IDQ3Mi4zMTk4OSw2Mi45MjA0MjYgNDczLjUyOTI3LDYzLjYwNzI3MSA0NzQuMzI4ODksNjUuNzY3NzA0IDQ3NC43NDk1Myw2OS41NTE1NjcgNDc0LjgyMTk3LDc1LjEwODcwNiA0NzUuMDMyNjcsODAuNzk1MTE4IDQ3NS43MzMxNCw4Ny4yNjc3ODcgNDc2LjgxMzczLDkzLjczMDA3OSA0NzguMTY0NzcsOTkuMzg1MzU2IDQ4NC43NDc3NCwxMTYuOTEwNjkgNDk1LjA0MjUxLDEzOC41ODY1MiA1MDcuNDExNjYsMTYxLjIxMjU2IDUyMC4yMTc3NywxODEuNTg4NTMgNTI4LjcyMjY3LDE5My43MjEwOCA1MzQuMTY5OSwyMDAuNDE5NTEgNTM4LjEyMzYzLDIwMy4yNzMxMSA1NDIuMTQ4MDEsMjAzLjg3MTE0IDU0NS4xMTI5LDIwMy41OTk3MiA1NDguMjc4NjgsMjAyLjg2MDY5IDU1MS4yNjYzOSwyMDEuNzY2OTQgNTUzLjY5NzA0LDIwMC40MzEzMyA1NTYuNDY3MDcsMTk4LjYyNTg2IDU1OC4yNjc5LDE5OC4wNDI3MSA1NTkuNjY5MjQsMTk4LjY5NDAzIDU2MS4yNDA3OSwyMDAuNTkxOTcgNTYyLjQxMDc5LDIwMy44ODE0MyA1NjMuNTUwMTksMjEwLjE1NTI4IDU2NC41NjM1MSwyMTguNzU0MDcgNTY1LjM1NTMsMjI5LjAxODM3IDU2Ni4yODE1OCwyNDEuNzU4MyA1NjcuNDA4MjYsMjUwLjM0MTcyIDU2OC45OTEzNCwyNTYuMTI2MTEgNTcxLjI4NjgzLDI2MC40Njg5OSA1NzguMzY2OTcsMjcxLjY0MDYzIDU4My44MjUxOCwyODEuNzc2NzEgNTg3Ljk1MzU0LDI5MS40ODE0NyA1OTEuMDQ0MTUsMzAxLjM1OTE0IDU5Mi43MTI0OSwzMDcuMjE5MDYgNTk0LjQ0MDMzLDMxMi40NTM1OCA1OTYuMDIzNzYsMzE2LjQ5MTY0IDU5Ny4yNTg4MywzMTguNzYyMTcgNTk4LjU5MTY2LDMyMS4xNzAxIDYwMC40NDExNSwzMjUuNTgyMTQgNjAyLjU2MjcyLDMzMS4zNzAxMyA2MDQuNzExNzksMzM3LjkwNTk0IDYwNy4xOTczMywzNDYuOTM4ODcgNjA4Ljc4ODI5LDM1NS42OTE3NyA2MDkuNjcxNDgsMzY1LjU3MTY4IDYxMC4wMzM3MSwzNzcuOTg1NjMgNjEwLjg5MTIzLDQwMS40NjY1NiA2MTMuODk0NTcsNDEyLjc4NTY0IDYyMC43NDMzNCw0MTQuMTI2OSA2MzMuMTM3MTUsNDA3LjY3NDM3IDYzOC43OTM1MSw0MDQuMzEzOTcgNjQ0LjYxNjAyLDQwMS4wMjIxNSA2NDkuOTE5NDQsMzk4LjE3Njg2IDY1NC4wMTg1NiwzOTYuMTU2MDIgNjU4LjAyNCwzOTQuMjAzNTQgNjYzLjA3MTgzLDM5MS41NDQzOSA2NjguNTE1OTMsMzg4LjUyODA3IDY3My43MTAxNywzODUuNTA0MSA2ODQuNzk0NzQsMzc5Ljc2NiA2OTguNjIwNzYsMzc0LjE5MTY2IDcxNS4xMTEwMiwzNjguODA5MTEgNzM0LjE4ODMsMzYzLjY0NjQxIDc4MC45MTg5MSwzNTEuODU0OTggODExLjE3MTM0LDM0My41NTIxOCA4MzAuNTI2NDMsMzM3LjA3NTc2IDg0NC41NjQ5OSwzMzAuNzYzNDggODQ1LjE2ODYsMzMxLjA1NTkzIDg0NS42NjI5MSwzMzIuNDQxMiA4NDUuOTk2OTIsMzM0LjY5NTE4IDg0Ni4xMTk1OSwzMzcuNTkzNzggODQ1LjQ0ODAzLDM0Mi4yNDAxOCA4NDMuNDc2OTQsMzQ4LjY5MDEzIDg0MC4yNzE3MywzNTYuNzYwMTcgODM1Ljg5Nzc5LDM2Ni4yNjY4NCA4MzEuNDE5NTcsMzc1Ljk5Mjc5IDgyNi43ODI4MiwzODYuOTE1NzggODIyLjUzNDY3LDM5Ny42OTkwMSA4MTkuMjIyMjksNDA3LjAwNTY4IDgxMy42OTg4OCw0MjMuMjM5MjggODA3LjUxMDU2LDQ0MC4xNDcxOSA4MDAuMjI5NTUsNDU4Ljg2MDc2IDc5MS40MjgwOSw0ODAuNTExMzcgNzg2LjkxNDg4LDQ5MC43MzY0NCA3ODIuNjA3MjMsNDk4Ljg2OTYgNzc4LjExNjM4LDUwNS41NjYwNyA3NzMuMDUzNTQsNTExLjQ4MTA5IDc2OS4yMzA1OSw1MTUuNTk1MjcgNzY2LjA5OTkzLDUxOS4xNjgxMyA3NjMuOTg0NjMsNTIxLjgxNjU1IDc2My4yMDc3Myw1MjMuMTU3MzkgNzYzLjUwNjgzLDUyMy45NTQ2NiA3NjQuMzIxMjEsNTI1LjEyMjkgNzY1LjUyNjQ4LDUyNi41MDUwNyA3NjYuOTk4MjYsNTI3Ljk0NDEyIDc2OS40NDg4NSw1MjkuNDk3NjYgNzcyLjkxNjE0LDUzMC41NjM4MyA3NzcuNTcwMDgsNTMxLjE3Nzc3IDc4My41ODA2Nyw1MzEuMzc0NjEgNzg4LjU0NzUxLDUzMS40NjQ1MSA3OTIuNjE0OTMsNTMxLjcwOTI5IDc5NS4zNjMxOSw1MzIuMDcxNTYgNzk2LjM3MjU1LDUzMi41MTM5NCA3OTUuMTA1MTUsNTM2LjI2ODQxIDc5MS44MDMwMSw1NDIuMDQxMjQgNzg3LjIxNjIzLDU0OC42NTQ3NiA3ODIuMDk0ODksNTU0LjkzMTI5IDc3MC41ODk5OSw1NjguNTc5NyA3NTguNzU4MTMsNTgzLjg5OTMxIDc0OS4xNDUyNiw1OTcuNDYxOTIgNzQ0LjI5NzM1LDYwNS44MzkzIDc0My40NzM5MSw2MDguODIzNjIgNzQzLjIyMTE5LDYxMS40NzU5MiA3NDMuNTQwMzQsNjEzLjg4NDA3IDc0NC40MzI1LDYxNi4xMzU5NCA3NDguNTEwNDEsNjIwLjgzMzQ4IDc1NS40Njc3OCw2MjYuMjYwNjQgNzYzLjc4NTU5LDYzMS4zNjk3MyA3NzEuOTQ0NzksNjM1LjExMzA2IDc3NS4wMTU1OCw2MzYuMzkzNDkgNzc3LjY4Mzc2LDYzNy44NDE5OCA3NzkuNjYzMSw2MzkuMjgwNjggNzgwLjY2NzM1LDY0MC41MzE3OCA3ODAuMDc0NDYsNjQzLjAxNTM3IDc3Ny41MzA1LDY0NS45ODcyMSA3NzQuMDk0MjksNjQ4LjQ3OTggNzcwLjgyNDY1LDY0OS41MjU2NiA3NjguMjExMzQsNjUwLjM0Njg3IDc2Mi40NDQ0OSw2NTIuNTgyODQgNzU0LjM3NjIyLDY1NS44OTIxIDc0NC44NTg2Nyw2NTkuOTMzMiA3MTYuNDYwMDksNjcyLjY4MTE5IDY5OS4yOTU2NSw2ODEuOTc0NTcgNjkwLjg0NTEzLDY4OS40NjQ0OSA2ODguNTg4MzMsNjk2LjgwMjEyIDY5MC40MDEzOSw3MDMuMTk2MzYgNjk1LjE2OTUsNzExLjI5MTQ0IDcwMS44ODYwMiw3MTkuNjQ1MzkgNzA5LjU0NDM1LDcyNi44MTYyOCA3MTIuMDEzNDEsNzI5LjAxMzY0IDcxMy43ODYyOCw3MzEuMTI5OTkgNzE0LjcxNTQsNzMyLjk1MDM1IDcxNC42NTMxOCw3MzQuMjU5NzEgNzAyLjAwNDIzLDczNi4yMTUzMSA2NzQuNTkzNDcsNzM1Ljk1MTczIDY0Mi4zMDA2LDczMy44NTg5MSA2MTUuMDA1MzIsNzMwLjMyNjc4IDU5MC42MDIsNzI1LjQ5MzA1IDU3My4zODI2OSw3MjEuNjQzNzIgNTYxLjEzNjk0LDcxOC4yMzQxOCA1NTEuNjU0MjksNzE0LjcxOTgzIDU0NC41NjUwNiw3MTEuOTkwOTcgNTM1LjEyNjI0LDcwOC43NDQwNSA1MjQuNTY5NDMsNzA1LjM4NTgxIDUxNC4xMjYyMiw3MDIuMzIzMDIgNTAzLjgwMjcxLDY5OS4yNzk3MiA0OTMuNTcyOTcsNjk1Ljk3NDU1IDQ4NC42MTgxOSw2OTIuODA2MTggNDc4LjExOTU5LDY5MC4xNzMzIDQ3My4xNDA4Nyw2ODguMDcyMDggNDY4LjMyMjg1LDY4Ni4zNTEzNCA0NjQuMjE1MjIsNjg1LjE4ODY2IDQ2MS4zNjc2Miw2ODQuNzYxNjMgNDU4LjY0MTQxLDY4NS4wNTU1OCA0NTcuMTYzNDYsNjg2LjU2MzU5IDQ1Ni41NTQ2OSw2OTAuMjI0ODkgNDU2LjQzNjAxLDY5Ni45Nzg3MiA0NTcuMDg0NDksNzEzLjEyNzE4IDQ1OC44ODYxNiw3MzMuMTc2NzMgNDYxLjYyNTQyLDc1NS4xMzI5MSA0NjUuMDg2NjQsNzc3LjAwMTMgNDY4Ljg3NDU5LDc5OS41OTA2NSA0NzAuNDgzMDcsODEzLjUyNTM1IDQ3MC4wNTI1NCw4MjEuNDA2ODIgNDY3LjcyMzQ1LDgyNS44MzY1IDQ2My42OTc0Miw4MjguMTY0NDggNDU3LjgyMzEzLDgyOS43Nzg3MSA0NTIuNTIyNDgsODMwLjIzMTI2IDQ1MC4yMTc0LDgyOS4wNzQyMSA0NTAuMjE3NzgsODI5LjA3NDI1IDQ1MC4yMTgxNiw4MjkuMDc0MjggNDUwLjIxODUzLDgyOS4wNzQzMiBaXFxcIiBzdHlsZT1cXFwiZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjA3MjgwMTU5O3N0cm9rZS1vcGFjaXR5OjFcXFwiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9XFxcIjBcXFwiIHNvZGlwb2RpOm5vZGV0eXBlcz1cXFwiY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJpbXBvcnQgRGVmYXVsdHMgZnJvbSAnLi9EZWZhdWx0cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXhpblNvdXJjZSB7XHJcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGN0eCwgc2V0dGluZ3MgPSB7fSkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdHMsIHNldHRpbmdzKTtcclxuXHJcbiAgICB0aGlzLmluZmx1ZW5jaW5nTm9kZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICAvLyBEcmF3IHRoZSBhdHRyYWN0aW9uIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5BdHRyYWN0aW9uRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLkF0dHJhY3Rpb25ab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBraWxsIHpvbmVcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcykge1xyXG4gICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgdGhpcy5jdHguZWxsaXBzZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2UsIHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlLCAwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLktpbGxab25lQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBhdXhpbiBzb3VyY2VcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXMpIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4LmVsbGlwc2UodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDEsIDEsIDAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuU291cmNlQ29sb3I7XHJcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgY29uc3QgTGlnaHQgPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDAsMCwwLC41KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgwLDAsMCwxKScsXHJcbiAgVmVpblRpcENvbG9yOiAncmdiYSgyNTUsMCwwLDEpJyxcclxuICBBdHRyYWN0aW9uWm9uZUNvbG9yOiAncmdiYSgwLDI1NSwwLC4wMDIpJyxcclxuICBLaWxsWm9uZUNvbG9yOiAncmdiYSgyNTUsMCwwLC40KScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMCwwLDI1NSwxKScsXHJcbiAgQm91bmRzRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgwLDAsMCwuMSknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuNyknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXJrID0ge1xyXG4gIEJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjkpJyxcclxuICBTb3VyY2VDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjUpJyxcclxuICBWZWluQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyxcclxuICBWZWluVGlwQ29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXHJcbiAgQXR0cmFjdGlvblpvbmVDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjAwMiknLFxyXG4gIEtpbGxab25lQ29sb3I6ICdyZ2JhKDI1NSwwLDAsLjQpJyxcclxuICBJbmZsdWVuY2VMaW5lc0NvbG9yOiAncmdiYSgwLDAsMjU1LDEpJyxcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC4wNSknLFxyXG4gIEJvdW5kc0JvcmRlckNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwuMDUpJyxcclxuICBPYnN0YWNsZUZpbGxDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMSknXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b20gPSB7XHJcbiAgQmFja2dyb3VuZENvbG9yOiAncmdiKDI0MiwyNDIsMjQyKScsXHJcbiAgU291cmNlQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LC42KScsXHJcbiAgVmVpbkNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsXHJcbiAgSW5mbHVlbmNlTGluZXNDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsLjMpJyxcclxuICAvLyBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoNjEsODUsMTM2KScsXHJcbiAgLy8gQm91bmRzQm9yZGVyQ29sb3I6ICdyZ2IoNjEsODUsMTM2KSdcclxuICBCb3VuZHNGaWxsQ29sb3I6ICdyZ2IoNTcsIDEyNiwgODgpJyxcclxuICBCb3VuZHNCb3JkZXJDb2xvcjogJ3JnYigyMTAsIDgxLCA5NCknLFxyXG4gIE9ic3RhY2xlRmlsbENvbG9yOiAncmdiYSgwLDAsMCwuMSknXHJcbn0iLCJpbXBvcnQgeyBMaWdodCwgRGFyaywgQ3VzdG9tIH0gZnJvbSAnLi9Db2xvclByZXNldHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8qKlxyXG4gICAgU2ltdWxhdGlvbiBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIFZlbmF0aW9uVHlwZTogJ09wZW4nLCAgICAgLy8gdmVuYXRpb24gY2FuIGJlIFwiT3BlblwiIG9yIFwiQ2xvc2VkXCJcclxuICBTZWdtZW50TGVuZ3RoOiA1LCAgICAgICAgIC8vIGxlbmd0aCBvZiBlYWNoIHZlaW4gc2VnbWVudC4gU21hbGxlciBudW1iZXJzIG1lYW4gc21vb3RoZXIgbGluZXMsIGJ1dCBtb3JlIGNvbXB1dGF0aW9uIGNvc3RcclxuICBBdHRyYWN0aW9uRGlzdGFuY2U6IDIwMCwgIC8vIHJhZGl1cyBvZiBpbmZsdWVuY2UgKGRfaSkgYXJvdW5kIGVhY2ggYXV4aW4gc291cmNlIHRoYXQgYXR0cmFjdHMgdmVpbiBzZWdtZW50c1xyXG4gIEtpbGxEaXN0YW5jZTogNSwgICAgICAgICAgLy8gZGlzdGFuY2UgKGRfaykgYmV0d2VlbiBhdXhpbiBzb3VyY2VzIGFuZCBzZWdtZW50cyB3aGVuIHNlZ21lbnRzIGFyZSBlbmRlZFxyXG4gIElzUGF1c2VkOiBmYWxzZSwgICAgICAgICAgLy8gaW5pdGlhbCBwYXVzZS91bnBhdXNlIHN0YXRlXHJcblxyXG5cclxuICAvKipcclxuICAgIFJlbmRlcmluZyBjb25maWd1cmF0aW9uc1xyXG4gICovXHJcblxyXG4gIC8vIFZpc2liaWxpdHkgdG9nZ2xlc1xyXG4gIFNob3dTb3VyY2VzOiBmYWxzZSwgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAncydcclxuICBTaG93VmVpbnM6IHRydWUsICAgICAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ3YnXHJcbiAgU2hvd1ZlaW5UaXBzOiBmYWxzZSwgICAgICAgICAgLy8gdG9nZ2xlZCB3aXRoICd0J1xyXG4gIFNob3dBdHRyYWN0aW9uWm9uZXM6IGZhbHNlLCAgIC8vIHRvZ2dsZWQgd2l0aCAnYSdcclxuICBTaG93S2lsbFpvbmVzOiBmYWxzZSwgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ2snXHJcbiAgU2hvd0luZmx1ZW5jZUxpbmVzOiBmYWxzZSwgICAgLy8gdG9nZ2xlZCB3aXRoICdpJ1xyXG4gIFNob3dCb3VuZHM6IHRydWUsICAgICAgICAgICAgIC8vIHRvZ2dsZWQgd2l0aCAnYidcclxuICBTaG93T2JzdGFjbGVzOiB0cnVlLCAgICAgICAgICAvLyB0b2dnbGVkIHdpdGggJ28nXHJcblxyXG4gIC8vIE1vZGVzXHJcbiAgVmVpblJlbmRlck1vZGU6ICdMaW5lcycsICAvLyBkcmF3IHZlaW4gc2VnbWVudHMgYXMgXCJMaW5lc1wiIG9yIFwiRG90c1wiXHJcblxyXG4gIC8vIENvbG9yc1xyXG4gIENvbG9yczogTGlnaHQsXHJcblxyXG4gIC8vIExpbmUgdGhpY2tuZXNzZXNcclxuICBWZWluVGhpY2tuZXNzOiAxLFxyXG4gIFZlaW5UaXBUaGlja25lc3M6IDIsXHJcbiAgQm91bmRzQm9yZGVyVGhpY2tuZXNzOiAwXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2V0dXBLZXlMaXN0ZW5lcnMobmV0d29ya3MpIHtcclxuICBpZighKG5ldHdvcmtzIGluc3RhbmNlb2YgQXJyYXkpKSB7XHJcbiAgICBuZXR3b3JrcyA9IFtuZXR3b3Jrc107XHJcbiAgfVxyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XHJcbiAgICBzd2l0Y2goZS5rZXkpIHtcclxuICAgICAgLy8gU3BhY2UgPSBwYXVzZS91bnBhdXNlXHJcbiAgICAgIGNhc2UgJyAnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyB2ID0gdG9nZ2xlIHZlaW4gdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICd2JzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlVmVpbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gcyA9IHRvZ2dsZSBhdXhpbiBzb3VyY2UgdmlzaWJpbGl0eVxyXG4gICAgICBjYXNlICdzJzpcclxuICAgICAgICBmb3IobGV0IG5ldHdvcmsgb2YgbmV0d29ya3MpIHtcclxuICAgICAgICAgIG5ldHdvcmsudG9nZ2xlU291cmNlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBhID0gdG9nZ2xlIGF0dHJhY3Rpb24gem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2EnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVBdHRyYWN0aW9uWm9uZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gdCA9IHRvZ2dsZSB2ZWluIHRpcCB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ3QnOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVWZWluVGlwcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAvLyBrID0gdG9nZ2xlIGtpbGwgem9uZSB2aXNpYmlsaXR5XHJcbiAgICAgIGNhc2UgJ2snOlxyXG4gICAgICAgIGZvcihsZXQgbmV0d29yayBvZiBuZXR3b3Jrcykge1xyXG4gICAgICAgICAgbmV0d29yay50b2dnbGVLaWxsWm9uZXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gaSA9IHRvZ2dsZSBpbmZsdWVuY2UgbGluZXNcclxuICAgICAgY2FzZSAnaSc6XHJcbiAgICAgICAgZm9yKGxldCBuZXR3b3JrIG9mIG5ldHdvcmtzKSB7XHJcbiAgICAgICAgICBuZXR3b3JrLnRvZ2dsZUluZmx1ZW5jZUxpbmVzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuaW1wb3J0IEtEQnVzaCBmcm9tICdrZGJ1c2gnO1xyXG5pbXBvcnQgKiBhcyBWZWMyIGZyb20gJ3ZlYzInO1xyXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tICcuL1V0aWxpdGllcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXR3b3JrIHtcclxuICBjb25zdHJ1Y3RvcihjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG5cclxuICAgIHRoaXMuc291cmNlcyA9IFtdOyAgLy8gc291cmNlcyAoQXV4aW5Tb3VyY2VzKSBhdHRyYWN0IHZlaW4gbm9kZXNcclxuICAgIHRoaXMubm9kZXMgPSBbXTsgICAgLy8gbm9kZXMgKFZlaW5Ob2RlcykgYXJlIGNvbm5lY3RlZCB0byBmb3JtIHZlaW5zXHJcblxyXG4gICAgdGhpcy5ub2Rlc0luZGV4OyAgICAvLyBrZC1idXNoIHNwYXRpYWwgaW5kZXggZm9yIGFsbCBub2Rlc1xyXG5cclxuICAgIHRoaXMuYm91bmRzO1xyXG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vIFNraXAgaXRlcmF0aW9uIGlmIHBhdXNlZFxyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXNzb2NpYXRlIGF1eGluIHNvdXJjZXMgd2l0aCBuZWFyYnkgdmVpbiBub2RlcyB0byBmaWd1cmUgb3V0IHdoZXJlIGdyb3d0aCBzaG91bGQgb2NjdXJcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIG9ubHkgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggaXRzIGNsb3Nlc3QgdmVpbiBub2RlXHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBsZXQgY2xvc2VzdE5vZGUgPSB0aGlzLmdldENsb3Nlc3ROb2RlKHNvdXJjZSwgdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSk7XHJcblxyXG4gICAgICAgICAgaWYoY2xvc2VzdE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbG9zZXN0Tm9kZS5pbmZsdWVuY2VkQnkucHVzaChzb3VyY2VJRCk7XHJcbiAgICAgICAgICAgIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzID0gW2Nsb3Nlc3ROb2RlXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgYXNzb2NpYXRlIHRoaXMgc291cmNlIHdpdGggYWxsIG5vZGVzIGluIGl0cyByZWxhdGl2ZSBuZWlnaGJvcmhvb2RcclxuICAgICAgICBjYXNlICdDbG9zZWQnOlxyXG4gICAgICAgICAgbGV0IG5laWdoYm9yaG9vZE5vZGVzID0gdGhpcy5nZXRSZWxhdGl2ZU5laWdoYm9yTm9kZXMoc291cmNlKTtcclxuICAgICAgICAgIGxldCBub2Rlc0luS2lsbFpvbmUgPSB0aGlzLmdldE5vZGVzSW5LaWxsWm9uZShzb3VyY2UpO1xyXG5cclxuICAgICAgICAgIC8vIEV4Y2x1ZGUgbm9kZXMgdGhhdCBhcmUgaW4gdGhlIHNvdXJjZSdzIGtpbGwgem9uZSAodGhlc2Ugc2hvdWxkIHN0b3AgZ3Jvd2luZylcclxuICAgICAgICAgIGxldCBub2Rlc1RvR3JvdyA9IG5laWdoYm9yaG9vZE5vZGVzLmZpbHRlcigobmVpZ2hib3JOb2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhbm9kZXNJbktpbGxab25lLmluY2x1ZGVzKG5laWdoYm9yTm9kZSk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzb3VyY2UuaW5mbHVlbmNpbmdOb2RlcyA9IG5vZGVzVG9Hcm93O1xyXG5cclxuICAgICAgICAgIGZvcihsZXQgbm9kZSBvZiBub2Rlc1RvR3Jvdykge1xyXG4gICAgICAgICAgICBub2RlLmluZmx1ZW5jZWRCeS5wdXNoKHNvdXJjZUlEKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEdyb3cgdGhlIG5ldHdvcmsgYnkgYWRkaW5nIG5ldyB2ZWluIG5vZGVzIG9udG8gYW55IG5vZGVzIGJlaW5nIGluZmx1ZW5jZWQgYnkgc291cmNlc1xyXG4gICAgZm9yKGxldCBub2RlIG9mIHRoaXMubm9kZXMpIHtcclxuICAgICAgaWYobm9kZS5pbmZsdWVuY2VkQnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBhdmVyYWdlRGlyZWN0aW9uID0gdGhpcy5nZXRBdmVyYWdlRGlyZWN0aW9uKG5vZGUsIG5vZGUuaW5mbHVlbmNlZEJ5Lm1hcChpZCA9PiB0aGlzLnNvdXJjZXNbaWRdKSk7XHJcbiAgICAgICAgbGV0IG5leHROb2RlID0gbm9kZS5nZXROZXh0Tm9kZShhdmVyYWdlRGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgb2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBEb24ndCBncm93IGlmIHRoZSBuZXh0IG5vZGUgZ29lcyBvdXQgb2YgdGhlIHBhc3NlZCBib3VuZHNcclxuICAgICAgICBpZih0aGlzLmJvdW5kcyAhPSB1bmRlZmluZWQgJiYgIXRoaXMuYm91bmRzLmNvbnRhaW5zKG5leHROb2RlLnBvc2l0aW9uLngsIG5leHROb2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgZ3JvdyBpZiB0aGUgbmV4dCBub2RlIGdvZXMgaW5zaWRlIGFueSBwYXNzZWQgb2JzdGFjbGVcclxuICAgICAgICBpZih0aGlzLm9ic3RhY2xlcyAhPSB1bmRlZmluZWQgJiYgdGhpcy5vYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgICAgICBpZihvYnN0YWNsZS5jb250YWlucyhuZXh0Tm9kZS5wb3NpdGlvbi54LCBuZXh0Tm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9rKSB7XHJcbiAgICAgICAgICB0aGlzLm5vZGVzLnB1c2gobmV4dE5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbm9kZS5pbmZsdWVuY2VkQnkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgYW55IGF1eGluIHNvdXJjZXMgdGhhdCBoYXZlIGJlZW4gcmVhY2hlZCBieSB0aGVpciBhc3NvY2lhdGVkIHZlaW4gbm9kZXNcclxuICAgIGZvcihsZXQgW3NvdXJjZUlELCBzb3VyY2VdIG9mIHRoaXMuc291cmNlcy5lbnRyaWVzKCkpIHtcclxuICAgICAgc3dpdGNoKHRoaXMuc2V0dGluZ3MuVmVuYXRpb25UeXBlKSB7XHJcbiAgICAgICAgLy8gRm9yIG9wZW4gdmVuYXRpb24sIHJlbW92ZSB0aGUgc291cmNlIGFzIHNvb24gYXMgYW55IHZlaW4gbm9kZSByZWFjaGVzIGl0XHJcbiAgICAgICAgY2FzZSAnT3Blbic6XHJcbiAgICAgICAgICBpZihzb3VyY2UucmVhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgLy8gRm9yIGNsb3NlZCB2ZW5hdGlvbiwgcmVtb3ZlIHRoZSBzb3VyY2Ugb25seSB3aGVuIGFsbCBhc3NvY2lhdGVkIHZlaW4gbm9kZXMgaGF2ZSByZWFjaGVkIGl0XHJcbiAgICAgICAgY2FzZSAnQ2xvc2VkJzpcclxuICAgICAgICAgIGlmKHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdXJjZXMuc3BsaWNlKHNvdXJjZUlELCAxKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlYnVpbGQgc3BhdGlhbCBpbmRpY2VzXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XHJcbiAgICB0aGlzLmRyYXdCb3VuZHMoKTtcclxuICAgIHRoaXMuZHJhd09ic3RhY2xlcygpO1xyXG4gICAgdGhpcy5kcmF3U291cmNlcygpO1xyXG4gICAgdGhpcy5kcmF3VmVpbnMoKTtcclxuICB9XHJcblxyXG4gIGRyYXdCYWNrZ3JvdW5kKCkge1xyXG4gICAgLy8gRXJhc2UgdGhlIGNhbnZhc1xyXG4gICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBkcmF3Qm91bmRzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93Qm91bmRzICYmIHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmJvdW5kcy5kcmF3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkcmF3T2JzdGFjbGVzKCkge1xyXG4gICAgaWYodGhpcy5zZXR0aW5ncy5TaG93T2JzdGFjbGVzICYmIHRoaXMub2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiB0aGlzLm9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvcihsZXQgb2JzdGFjbGUgb2YgdGhpcy5vYnN0YWNsZXMpIHtcclxuICAgICAgICBvYnN0YWNsZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdWZWlucygpIHtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zKSB7XHJcbiAgICAgIGZvcihsZXQgbm9kZSBvZiB0aGlzLm5vZGVzKSB7XHJcbiAgICAgICAgbm9kZS5kcmF3KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdTb3VyY2VzKCkge1xyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5kcmF3KCk7XHJcblxyXG4gICAgICAvLyBEcmF3IGxpbmVzIGJldHdlZW4gZWFjaCBzb3VyY2UgYW5kIHRoZSBub2RlcyB0aGV5IGFyZSBpbmZsdWVuY2luZ1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyAmJiBzb3VyY2UuaW5mbHVlbmNpbmdOb2Rlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBub2RlIG9mIHNvdXJjZS5pbmZsdWVuY2luZ05vZGVzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbyhzb3VyY2UucG9zaXRpb24ueCwgc291cmNlLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVRvKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuSW5mbHVlbmNlTGluZXNDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmVsYXRpdmVOZWlnaGJvck5vZGVzKHNvdXJjZSkge1xyXG4gICAgbGV0IGZhaWw7XHJcblxyXG4gICAgbGV0IG5lYXJieU5vZGVzID0gdGhpcy5nZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKTtcclxuICAgIGxldCByZWxhdGl2ZU5laWdoYm9ycyA9IFtdO1xyXG4gICAgbGV0IHNvdXJjZVRvUDAsIHNvdXJjZVRvUDEsIHAwVG9QMTtcclxuXHJcbiAgICAvLyBwMCBpcyBhIHJlbGF0aXZlIG5laWdoYm9yIG9mIGF1eGluUG9zIGlmZlxyXG4gICAgLy8gZm9yIGFueSBwb2ludCBwMSB0aGF0IGlzIGNsb3NlciB0byBhdXhpblBvcyB0aGFuIGlzIHAwLFxyXG4gICAgLy8gcDAgaXMgY2xvc2VyIHRvIGF1eGluUG9zIHRoYW4gdG8gcDFcclxuICAgIGZvcihsZXQgcDAgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgZmFpbCA9IGZhbHNlO1xyXG4gICAgICBzb3VyY2VUb1AwID0gcDAucG9zaXRpb24uc3VidHJhY3Qoc291cmNlLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgIGZvcihsZXQgcDEgb2YgbmVhcmJ5Tm9kZXMpIHtcclxuICAgICAgICBpZihwMCA9PT0gcDEpIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc291cmNlVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHNvdXJjZS5wb3NpdGlvbiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmKHNvdXJjZVRvUDEubGVuZ3RoKCkgPiBzb3VyY2VUb1AwLmxlbmd0aCgpKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAwVG9QMSA9IHAxLnBvc2l0aW9uLnN1YnRyYWN0KHAwLnBvc2l0aW9uLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYoc291cmNlVG9QMC5sZW5ndGgoKSA+IHAwVG9QMS5sZW5ndGgoKSkge1xyXG4gICAgICAgICAgZmFpbCA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCFmYWlsKSB7XHJcbiAgICAgICAgcmVsYXRpdmVOZWlnaGJvcnMucHVzaChwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVsYXRpdmVOZWlnaGJvcnM7XHJcbiAgfVxyXG5cclxuICBnZXROb2Rlc0luQXR0cmFjdGlvblpvbmUoc291cmNlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub2Rlc0luZGV4LndpdGhpbihcclxuICAgICAgc291cmNlLnBvc2l0aW9uLngsXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi55LFxyXG4gICAgICB0aGlzLnNldHRpbmdzLkF0dHJhY3Rpb25EaXN0YW5jZVxyXG4gICAgKS5tYXAoXHJcbiAgICAgIGlkID0+IHRoaXMubm9kZXNbaWRdXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0Tm9kZXNJbktpbGxab25lKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIHRoaXMubm9kZXNJbmRleC53aXRoaW4oXHJcbiAgICAgIHNvdXJjZS5wb3NpdGlvbi54LFxyXG4gICAgICBzb3VyY2UucG9zaXRpb24ueSxcclxuICAgICAgdGhpcy5zZXR0aW5ncy5LaWxsRGlzdGFuY2VcclxuICAgICkubWFwKFxyXG4gICAgICBpZCA9PiB0aGlzLm5vZGVzW2lkXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3ROb2RlKHNvdXJjZSwgbmVhcmJ5Tm9kZXMpIHtcclxuICAgIGxldCBjbG9zZXN0Tm9kZSA9IG51bGwsXHJcbiAgICAgIHJlY29yZCA9IHRoaXMuc2V0dGluZ3MuQXR0cmFjdGlvbkRpc3RhbmNlO1xyXG5cclxuICAgIGZvcihsZXQgbm9kZSBvZiBuZWFyYnlOb2Rlcykge1xyXG4gICAgICBsZXQgZGlzdGFuY2UgPSBub2RlLnBvc2l0aW9uLmRpc3RhbmNlKHNvdXJjZS5wb3NpdGlvbik7XHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA8IHRoaXMuc2V0dGluZ3MuS2lsbERpc3RhbmNlKSB7XHJcbiAgICAgICAgc291cmNlLnJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIGNsb3Nlc3ROb2RlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIGlmKGRpc3RhbmNlIDwgcmVjb3JkKSB7XHJcbiAgICAgICAgY2xvc2VzdE5vZGUgPSBub2RlO1xyXG4gICAgICAgIHJlY29yZCA9IGRpc3RhbmNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNsb3Nlc3ROb2RlO1xyXG4gIH1cclxuXHJcbiAgZ2V0QXZlcmFnZURpcmVjdGlvbihub2RlLCBuZWFyYnlTb3VyY2VzKSB7XHJcbiAgICAvLyBBZGQgdXAgbm9ybWFsaXplZCB2ZWN0b3JzIHBvaW50aW5nIHRvIGVhY2ggYXV4aW4gc291cmNlXHJcbiAgICBsZXQgYXZlcmFnZURpcmVjdGlvbiA9IG5ldyBWZWMyKDAsMCk7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgbmVhcmJ5U291cmNlcykge1xyXG4gICAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChcclxuICAgICAgICBzb3VyY2UucG9zaXRpb24uc3VidHJhY3Qobm9kZS5wb3NpdGlvbiwgdHJ1ZSkubm9ybWFsaXplKClcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgc21hbGwgYW1vdW50IG9mIHJhbmRvbSBcImppdHRlclwiIHRvIGF2b2lkIGdldHRpbmcgc3R1Y2sgYmV0d2VlbiB0d28gYXV4aW4gc291cmNlcyBhbmQgZW5kbGVzc2x5IGdlbmVyYXRpbmcgbm9kZXMgaW4gdGhlIHNhbWUgcGxhY2VcclxuICAgIC8vIChDcmVkaXQgdG8gRGF2aWRlIFByYXRpIChlZGFwKSBmb3IgdGhlIGlkZWEsIHNlZW4gaW4gb2Z4U3BhY2VDb2xvbml6YXRpb24pXHJcbiAgICBhdmVyYWdlRGlyZWN0aW9uLmFkZChuZXcgVmVjMihyYW5kb20oLS4xLCAuMSksIHJhbmRvbSgtLjEsIC4xKSkpLm5vcm1hbGl6ZSgpO1xyXG5cclxuICAgIGF2ZXJhZ2VEaXJlY3Rpb24uZGl2aWRlKG5vZGUuaW5mbHVlbmNlZEJ5Lmxlbmd0aCkubm9ybWFsaXplKCk7XHJcblxyXG4gICAgcmV0dXJuIGF2ZXJhZ2VEaXJlY3Rpb247XHJcbiAgfVxyXG5cclxuICBhZGRWZWluTm9kZShub2RlKSB7XHJcbiAgICBsZXQgb2sgPSB0cnVlO1xyXG5cclxuICAgIC8vIE9ubHkgcHV0IHJvb3QgdmVpbnMgaW5zaWRlIHRoZSBib3VuZHNcclxuICAgIGlmKHRoaXMuYm91bmRzICE9IHVuZGVmaW5lZCAmJiAhdGhpcy5ib3VuZHMuY29udGFpbnMobm9kZS5wb3NpdGlvbi54LCBub2RlLnBvc2l0aW9uLnkpKSB7XHJcbiAgICAgIG9rID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG9uJ3QgcHV0IHJvb3QgdmVpbnMgaW5zaWRlIG9mIG9ic3RhY2xlc1xyXG4gICAgaWYodGhpcy5vYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIHRoaXMub2JzdGFjbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiB0aGlzLm9ic3RhY2xlcykge1xyXG4gICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKG5vZGUucG9zaXRpb24ueCwgbm9kZS5wb3NpdGlvbi55KSkge1xyXG4gICAgICAgICAgb2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihvaykge1xyXG4gICAgICB0aGlzLm5vZGVzLnB1c2gobm9kZSk7XHJcbiAgICAgIHRoaXMuYnVpbGRTcGF0aWFsSW5kaWNlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICB0aGlzLnNvdXJjZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmJ1aWxkU3BhdGlhbEluZGljZXMoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU3BhdGlhbEluZGljZXMoKSB7XHJcbiAgICB0aGlzLm5vZGVzSW5kZXggPSBuZXcgS0RCdXNoKHRoaXMubm9kZXMsIHAgPT4gcC5wb3NpdGlvbi54LCBwID0+IHAucG9zaXRpb24ueSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVWZWlucygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zID0gIXRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5zO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmVpblRpcHMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICF0aGlzLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuXHJcbiAgICBmb3IobGV0IG5vZGUgb2YgdGhpcy5ub2Rlcykge1xyXG4gICAgICBub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcyA9ICFub2RlLnNldHRpbmdzLlNob3dWZWluVGlwcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZVNvdXJjZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dTb3VyY2VzID0gIXRoaXMuc2V0dGluZ3MuU2hvd1NvdXJjZXM7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBdHRyYWN0aW9uWm9uZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dBdHRyYWN0aW9uWm9uZXMgPSAhdGhpcy5zZXR0aW5ncy5TaG93QXR0cmFjdGlvblpvbmVzO1xyXG5cclxuICAgIGZvcihsZXQgc291cmNlIG9mIHRoaXMuc291cmNlcykge1xyXG4gICAgICBzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcyA9ICFzb3VyY2Uuc2V0dGluZ3MuU2hvd0F0dHJhY3Rpb25ab25lcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUtpbGxab25lcygpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MuU2hvd0tpbGxab25lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dLaWxsWm9uZXM7XHJcblxyXG4gICAgZm9yKGxldCBzb3VyY2Ugb2YgdGhpcy5zb3VyY2VzKSB7XHJcbiAgICAgIHNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzID0gIXNvdXJjZS5zZXR0aW5ncy5TaG93S2lsbFpvbmVzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSW5mbHVlbmNlTGluZXMoKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcyA9ICF0aGlzLnNldHRpbmdzLlNob3dJbmZsdWVuY2VMaW5lcztcclxuICB9XHJcblxyXG4gIHRvZ2dsZVBhdXNlKCkge1xyXG4gICAgdGhpcy5zZXR0aW5ncy5Jc1BhdXNlZCA9ICF0aGlzLnNldHRpbmdzLklzUGF1c2VkO1xyXG4gIH1cclxufSIsImltcG9ydCBEZWZhdWx0cyBmcm9tICcuL0RlZmF1bHRzJztcclxuXHJcbmxldCBpbnNpZGUgPSByZXF1aXJlKCdwb2ludC1pbi1wb2x5Z29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXRoIHtcclxuICBjb25zdHJ1Y3Rvcihwb2x5Z29uLCB0eXBlLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBvbHlnb24gPSBwb2x5Z29uO1xyXG4gICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0cywgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbnMoeCwgeSkge1xyXG4gICAgcmV0dXJuIGluc2lkZShbeCwgeV0sIHRoaXMucG9seWdvbik7XHJcbiAgfVxyXG5cclxuICBkcmF3KCkge1xyXG4gICAgaWYoXHJcbiAgICAgICh0aGlzLnR5cGUgPT09ICdCb3VuZHMnICYmIHRoaXMuc2V0dGluZ3MuU2hvd0JvdW5kcykgfHxcclxuICAgICAgKHRoaXMudHlwZSA9PT0gJ09ic3RhY2xlJyAmJiB0aGlzLnNldHRpbmdzLlNob3dPYnN0YWNsZXMpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvbHlnb25bMF1bMF0sIHRoaXMucG9seWdvblswXVsxXSk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2x5Z29uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucG9seWdvbltpXVswXSwgdGhpcy5wb2x5Z29uW2ldWzFdKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucG9seWdvblswXVswXSwgdGhpcy5wb2x5Z29uWzBdWzFdKTtcclxuXHJcbiAgICAgIHN3aXRjaCh0aGlzLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdCb3VuZHMnOlxyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5Cb3VuZHNCb3JkZXJDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuQm91bmRzQm9yZGVyVGhpY2tuZXNzO1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuQm91bmRzRmlsbENvbG9yO1xyXG5cclxuICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcclxuXHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnT2JzdGFjbGUnOlxyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuT2JzdGFjbGVGaWxsQ29sb3I7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7U1ZHUGF0aERhdGF9IGZyb20gJy4uL25vZGVfbW9kdWxlcy9zdmctcGF0aGRhdGEnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHTG9hZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBsb2FkKHN2Z1N0cmluZykge1xyXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcclxuICAgIGxldCBzdmdOb2RlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdmdTdHJpbmcsICdpbWFnZS9zdmcreG1sJyk7XHJcblxyXG4gICAgbGV0IGlucHV0UGF0aHMgPSBzdmdOb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BhdGgnKSxcclxuICAgICAgcGF0aHMgPSBbXTtcclxuXHJcbiAgICAvLyBTY3JhcGUgYWxsIHBvaW50cyBmcm9tIGFsbCBwb2ludHMsIGFuZCByZWNvcmQgYnJlYWtwb2ludHNcclxuICAgIGZvcihsZXQgaW5wdXRQYXRoIG9mIGlucHV0UGF0aHMpIHtcclxuICAgICAgbGV0IHBhdGhEYXRhID0gbmV3IFNWR1BhdGhEYXRhKGlucHV0UGF0aC5nZXRBdHRyaWJ1dGUoJ2QnKSksXHJcbiAgICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICBsZXQgcHJldmlvdXNDb29yZHMgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmb3IobGV0IFtpbmRleCwgY29tbWFuZF0gb2YgcGF0aERhdGEuY29tbWFuZHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgc3dpdGNoKGNvbW1hbmQudHlwZSkge1xyXG4gICAgICAgICAgLy8gTW92ZSAoJ00nKSBhbmQgbGluZSAoJ0wnKSBjb21tYW5kcyBoYXZlIGJvdGggWCBhbmQgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5NT1ZFX1RPOlxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBjb21tYW5kLnldKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgLy8gSG9yaXpvbnRhbCBsaW5lICgnSCcpIGNvbW1hbmRzIG9ubHkgaGF2ZSBYLCB1c2luZyBwcmV2aW91cyBjb21tYW5kJ3MgWVxyXG4gICAgICAgICAgY2FzZSBTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPOlxyXG4gICAgICAgICAgICBwb2ludHMucHVzaChbY29tbWFuZC54LCBwcmV2aW91c0Nvb3Jkcy55XSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgIC8vIFZlcnRpY2FsIGxpbmUgKCdWJykgY29tbWFuZHMgb25seSBoYXZlIFksIHVzaW5nIHByZXZpb3VzIGNvbW1hbmQncyBYXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLlZFUlRfTElORV9UTzpcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goW3ByZXZpb3VzQ29vcmRzLngsIGNvbW1hbmQueV0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAvLyBDbG9zZVBhdGggKCdaJykgY29tbWFuZHMgYXJlIGEgbmFpdmUgaW5kaWNhdGlvbiB0aGF0IHRoZSBjdXJyZW50IHBhdGggY2FuIGJlIHByb2Nlc3NlZCBhbmQgYWRkZWQgdG8gdGhlIHdvcmxkXHJcbiAgICAgICAgICBjYXNlIFNWR1BhdGhEYXRhLkNMT1NFX1BBVEg6XHJcbiAgICAgICAgICAgIC8vIENhcHR1cmUgcGF0aCBpbiByZXR1cm4gb2JqZWN0XHJcbiAgICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgICAgcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVW5jbG9zZWQgcGF0aHMgbmV2ZXIgaGF2ZSBDTE9TRV9QQVRIIGNvbW1hbmRzLCBzbyB3cmFwIHVwIHRoZSBjdXJyZW50IHBhdGggd2hlbiB3ZSdyZSBhdCB0aGUgZW5kIG9mIHRoZSBwYXRoIGFuZCBoYXZlIG5vdCBmb3VuZCB0aGUgY29tbWFuZFxyXG4gICAgICAgIGlmKGluZGV4ID09IHBhdGhEYXRhLmNvbW1hbmRzLmxlbmd0aCAtIDEgJiYgY29tbWFuZC50eXBlICE9IFNWR1BhdGhEYXRhLkNMT1NFX1BBVEgpIHtcclxuICAgICAgICAgIHBhdGhzLnB1c2gocG9pbnRzKTtcclxuICAgICAgICAgIHBvaW50cyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBYIGNvb3JkaW5hdGUsIGlmIHRoZXJlIHdhcyBvbmVcclxuICAgICAgICBpZihjb21tYW5kLmhhc093blByb3BlcnR5KCd4JykpIHtcclxuICAgICAgICAgIHByZXZpb3VzQ29vcmRzLnggPSBjb21tYW5kLng7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDYXB0dXJlIFkgY29vcmRpbmF0ZSwgaWYgdGhlcmUgd2FzIG9uZVxyXG4gICAgICAgIGlmKGNvbW1hbmQuaGFzT3duUHJvcGVydHkoJ3knKSkge1xyXG4gICAgICAgICAgcHJldmlvdXNDb29yZHMueSA9IGNvbW1hbmQueTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGF0aHM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBBdXhpblNvdXJjZSBmcm9tICcuL0F1eGluU291cmNlJztcclxuaW1wb3J0IFZlYzIgZnJvbSAndmVjMic7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gJy4vVXRpbGl0aWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZVBhdHRlcm5zIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBnZXRSYW5kb21Tb3VyY2VzKG51bVNvdXJjZXMsIGN0eCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgbGV0IHgsIHk7XHJcbiAgICBsZXQgb2s7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8bnVtU291cmNlczsgaSsrKSB7XHJcbiAgICAgIHggPSByYW5kb20od2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICB5ID0gcmFuZG9tKHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgIG9rID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmKChib3VuZHMgIT0gdW5kZWZpbmVkICYmICFib3VuZHMuY29udGFpbnMoeCx5KSkpIHtcclxuICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZihvYnN0YWNsZXMgIT0gdW5kZWZpbmVkICYmIG9ic3RhY2xlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcclxuICAgICAgICAgIGlmKG9ic3RhY2xlLmNvbnRhaW5zKHgseSkpIHtcclxuICAgICAgICAgICAgb2sgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKG9rKSB7XHJcbiAgICAgICAgbm9kZXMucHVzaChcclxuICAgICAgICAgIG5ldyBBdXhpblNvdXJjZShcclxuICAgICAgICAgICAgbmV3IFZlYzIoeCx5KSxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBub2RlcztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRHcmlkT2ZTb3VyY2VzKG51bVJvd3MsIG51bUNvbHVtbnMsIGN0eCwgYm91bmRzID0gdW5kZWZpbmVkLCBvYnN0YWNsZXMgPSB1bmRlZmluZWQpIHtcclxuICAgIGxldCBub2RlcyA9IFtdO1xyXG4gICAgbGV0IHgsIHk7XHJcbiAgICBsZXQgb2s7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8PW51bVJvd3M7IGkrKykge1xyXG4gICAgICBmb3IobGV0IGo9MDsgajw9bnVtQ29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgeCA9ICh3aW5kb3cuaW5uZXJXaWR0aCAvIG51bUNvbHVtbnMpICogaiArIHJhbmRvbSgtMTAsMTApO1xyXG4gICAgICAgIHkgPSAod2luZG93LmlubmVySGVpZ2h0IC8gbnVtUm93cykgKiBpICsgcmFuZG9tKC0xMCwxMCk7XHJcbiAgICAgICAgb2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZigoYm91bmRzICE9IHVuZGVmaW5lZCAmJiAhYm91bmRzLmNvbnRhaW5zKHgseSkpKSB7XHJcbiAgICAgICAgICBvayA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob2JzdGFjbGVzICE9IHVuZGVmaW5lZCAmJiBvYnN0YWNsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yKGxldCBvYnN0YWNsZSBvZiBvYnN0YWNsZXMpIHtcclxuICAgICAgICAgICAgaWYob2JzdGFjbGUuY29udGFpbnMoeCx5KSkge1xyXG4gICAgICAgICAgICAgIG9rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9rKSB7XHJcbiAgICAgICAgICBub2Rlcy5wdXNoKFxyXG4gICAgICAgICAgICBuZXcgQXV4aW5Tb3VyY2UoXHJcbiAgICAgICAgICAgICAgbmV3IFZlYzIoeCx5KSxcclxuICAgICAgICAgICAgICBjdHhcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbm9kZXM7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbShtaW4sIG1heCkge1xyXG4gIGlmIChtYXggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgbWF4ID0gbWluO1xyXG4gICAgbWluID0gMDtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgbWluICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgbWF4ICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYWxsIGFyZ3VtZW50cyB0byBiZSBudW1iZXJzJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2lyY2xlT2ZQb2ludHMoY3gsIGN5LCByYWRpdXMsIHJlc29sdXRpb24pIHtcclxuICBsZXQgYW5nbGUsIHgsIHk7XHJcbiAgbGV0IHBvaW50cyA9IFtdO1xyXG5cclxuICBmb3IobGV0IGkgPSAwOyBpIDwgcmVzb2x1dGlvbjsgaSsrKSB7XHJcbiAgICBhbmdsZSA9IDIgKiBNYXRoLlBJICogaSAvIHJlc29sdXRpb247XHJcbiAgICB4ID0gY3ggKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguY29zKGFuZ2xlKSk7XHJcbiAgICB5ID0gY3kgKyBNYXRoLmZsb29yKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlKSk7XHJcblxyXG4gICAgcG9pbnRzLnB1c2goW3gsIHldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBwb2ludHM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTVkcobmV0d29yaykge1xyXG4gIC8vIFNldCB1cCA8c3ZnPiBlbGVtZW50XHJcbiAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnM6eGxpbmsnLCAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIHdpbmRvdy5pbm5lcldpZHRoICsgJyAnICsgd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgLy8gQ3JlYXRlIHBhdGhzIGZvciB2ZWluIHNlZ21lbnRzXHJcbiAgZm9yKGxldCBub2RlIG9mIG5ldHdvcmsubm9kZXMpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgcGF0aHMgZm9yIGJvdW5kc1xyXG4gIC8vIGZvcihsZXQgYm91bmQgb2YgbmV0d29yay5ib3VuZHMpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBDcmVhdGUgcGF0aHMgZm9yIG9ic3RhY2xlc1xyXG4gIC8vIGZvcihsZXQgb2JzdGFjbGUgb2YgbmV0d29yay5vYnN0YWNsZXMpIHtcclxuXHJcbiAgLy8gfVxyXG5cclxuICAvLyBGb3JjZSBkb3dubG9hZCBvZiAuc3ZnIGZpbGUgYmFzZWQgb24gaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvY2g3N2U3eWgvMVxyXG4gIGxldCBzdmdEb2NUeXBlID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnRUeXBlKCdzdmcnLCBcIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOXCIsIFwiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkXCIpO1xyXG4gIGxldCBzdmdEb2MgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudCgnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJywgc3ZnRG9jVHlwZSk7XHJcbiAgc3ZnRG9jLnJlcGxhY2VDaGlsZChzdmcsIHN2Z0RvYy5kb2N1bWVudEVsZW1lbnQpO1xyXG4gIGxldCBzdmdEYXRhID0gKG5ldyBYTUxTZXJpYWxpemVyKCkpLnNlcmlhbGl6ZVRvU3RyaW5nKHN2Z0RvYyk7XHJcblxyXG4gIGxldCBibG9iID0gbmV3IEJsb2IoW3N2Z0RhdGEucmVwbGFjZSgvPjwvZywgJz5cXG5cXHI8JyldKTtcclxuICBzYXZlQXMoYmxvYiwgJ3ZlbmF0aW9uLScgKyBEYXRlLm5vdygpICsgJy5zdmcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGF0aEVsRnJvbVBvaW50cyhwb2ludHMpIHtcclxuICBsZXQgcG9pbnRzU3RyaW5nID0gJyc7XHJcblxyXG4gIGZvcihsZXQgW2luZGV4LCBwb2ludF0gb2YgcG9pbnRzLmVudHJpZXMoKSkge1xyXG4gICAgcG9pbnRzU3RyaW5nICs9IHBvaW50WzBdICsgJywnICsgcG9pbnRbMV07XHJcblxyXG4gICAgaWYoaW5kZXggPCBwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICBwb2ludHNTdHJpbmcgKz0gJyAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbGV0IGQgPSB0b1BhdGgoe1xyXG4gICAgdHlwZTogJ3BvbHlsaW5lJyxcclxuICAgIHBvaW50czogcG9pbnRzU3RyaW5nXHJcbiAgfSk7XHJcblxyXG4gIGxldCBwYXRoRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJyk7XHJcbiAgcGF0aEVsLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xyXG4gIHBhdGhFbC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6IG5vbmU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMScpO1xyXG5cclxuICByZXR1cm4gcGF0aEVsO1xyXG59IiwiaW1wb3J0IERlZmF1bHRzIGZyb20gJy4vRGVmYXVsdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVpbk5vZGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmVudCwgcG9zaXRpb24sIGlzVGlwLCBjdHgsIHNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMuaXNUaXAgPSBpc1RpcDtcclxuICAgIHRoaXMuY3R4ID0gY3R4O1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERlZmF1bHRzLCBzZXR0aW5ncyk7XHJcblxyXG4gICAgdGhpcy5pbmZsdWVuY2VkQnkgPSBbXTtcclxuICB9XHJcblxyXG4gIGRyYXcoKSB7XHJcbiAgICBpZih0aGlzLnBhcmVudCAhPSBudWxsKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0xpbmVzJykge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGFyZW50LnBvc2l0aW9uLngsIHRoaXMucGFyZW50LnBvc2l0aW9uLnkpO1xyXG5cclxuICAgICAgICBpZih0aGlzLmlzVGlwICYmIHRoaXMuc2V0dGluZ3MuU2hvd1ZlaW5UaXBzKSB7XHJcbiAgICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMuc2V0dGluZ3MuVmVpblRpcFRoaWNrbmVzcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnNldHRpbmdzLkNvbG9ycy5WZWluQ29sb3I7XHJcbiAgICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnNldHRpbmdzLlZlaW5UaGlja25lc3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG5cclxuICAgICAgfSBlbHNlIGlmKHRoaXMuc2V0dGluZ3MuVmVpblJlbmRlck1vZGUgPT0gJ0RvdHMnKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguZWxsaXBzZShcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueCxcclxuICAgICAgICAgIHRoaXMucG9zaXRpb24ueSxcclxuICAgICAgICAgIDEsXHJcbiAgICAgICAgICAxLFxyXG4gICAgICAgICAgMCxcclxuICAgICAgICAgIDAsXHJcbiAgICAgICAgICBNYXRoLlBJICogMlxyXG4gICAgICAgICk7ICAvLyBUT0RPOiB2YXJ5IGRvdCByYWRpdXMgYmFzZWQgb24gYWxnb3JpdGhtXHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNUaXAgJiYgdGhpcy5zZXR0aW5ncy5TaG93VmVpblRpcHMpIHtcclxuICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2V0dGluZ3MuQ29sb3JzLlZlaW5UaXBDb2xvcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5zZXR0aW5ncy5Db2xvcnMuVmVpbkNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROZXh0Tm9kZShhdmVyYWdlU291cmNlRGlyZWN0aW9uKSB7XHJcbiAgICB0aGlzLmlzVGlwID0gZmFsc2U7XHJcbiAgICB0aGlzLm5leHRQb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uYWRkKGF2ZXJhZ2VTb3VyY2VEaXJlY3Rpb24ubXVsdGlwbHkodGhpcy5zZXR0aW5ncy5TZWdtZW50TGVuZ3RoKSwgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBWZWluTm9kZShcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcy5uZXh0UG9zaXRpb24sXHJcbiAgICAgIHRydWUsXHJcbiAgICAgIHRoaXMuY3R4LFxyXG4gICAgICB0aGlzLnNldHRpbmdzXHJcbiAgICApO1xyXG4gIH1cclxufSIsIlxuaW1wb3J0IHNvcnQgZnJvbSAnLi9zb3J0JztcbmltcG9ydCByYW5nZSBmcm9tICcuL3JhbmdlJztcbmltcG9ydCB3aXRoaW4gZnJvbSAnLi93aXRoaW4nO1xuXG5jb25zdCBkZWZhdWx0R2V0WCA9IHAgPT4gcFswXTtcbmNvbnN0IGRlZmF1bHRHZXRZID0gcCA9PiBwWzFdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLREJ1c2gge1xuICAgIGNvbnN0cnVjdG9yKHBvaW50cywgZ2V0WCA9IGRlZmF1bHRHZXRYLCBnZXRZID0gZGVmYXVsdEdldFksIG5vZGVTaXplID0gNjQsIEFycmF5VHlwZSA9IEZsb2F0NjRBcnJheSkge1xuICAgICAgICB0aGlzLm5vZGVTaXplID0gbm9kZVNpemU7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuXG4gICAgICAgIGNvbnN0IEluZGV4QXJyYXlUeXBlID0gcG9pbnRzLmxlbmd0aCA8IDY1NTM2ID8gVWludDE2QXJyYXkgOiBVaW50MzJBcnJheTtcblxuICAgICAgICBjb25zdCBpZHMgPSB0aGlzLmlkcyA9IG5ldyBJbmRleEFycmF5VHlwZShwb2ludHMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgY29vcmRzID0gdGhpcy5jb29yZHMgPSBuZXcgQXJyYXlUeXBlKHBvaW50cy5sZW5ndGggKiAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzW2ldID0gaTtcbiAgICAgICAgICAgIGNvb3Jkc1syICogaV0gPSBnZXRYKHBvaW50c1tpXSk7XG4gICAgICAgICAgICBjb29yZHNbMiAqIGkgKyAxXSA9IGdldFkocG9pbnRzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNvcnQoaWRzLCBjb29yZHMsIG5vZGVTaXplLCAwLCBpZHMubGVuZ3RoIC0gMSwgMCk7XG4gICAgfVxuXG4gICAgcmFuZ2UobWluWCwgbWluWSwgbWF4WCwgbWF4WSkge1xuICAgICAgICByZXR1cm4gcmFuZ2UodGhpcy5pZHMsIHRoaXMuY29vcmRzLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCB0aGlzLm5vZGVTaXplKTtcbiAgICB9XG5cbiAgICB3aXRoaW4oeCwgeSwgcikge1xuICAgICAgICByZXR1cm4gd2l0aGluKHRoaXMuaWRzLCB0aGlzLmNvb3JkcywgeCwgeSwgciwgdGhpcy5ub2RlU2l6ZSk7XG4gICAgfVxufVxuIiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYW5nZShpZHMsIGNvb3JkcywgbWluWCwgbWluWSwgbWF4WCwgbWF4WSwgbm9kZVNpemUpIHtcbiAgICBjb25zdCBzdGFjayA9IFswLCBpZHMubGVuZ3RoIC0gMSwgMF07XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgbGV0IHgsIHk7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ID0gY29vcmRzWzIgKiBpXTtcbiAgICAgICAgICAgICAgICB5ID0gY29vcmRzWzIgKiBpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKHggPj0gbWluWCAmJiB4IDw9IG1heFggJiYgeSA+PSBtaW5ZICYmIHkgPD0gbWF4WSkgcmVzdWx0LnB1c2goaWRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGxlZnQgKyByaWdodCkgLyAyKTtcblxuICAgICAgICB4ID0gY29vcmRzWzIgKiBtXTtcbiAgICAgICAgeSA9IGNvb3Jkc1syICogbSArIDFdO1xuXG4gICAgICAgIGlmICh4ID49IG1pblggJiYgeCA8PSBtYXhYICYmIHkgPj0gbWluWSAmJiB5IDw9IG1heFkpIHJlc3VsdC5wdXNoKGlkc1ttXSk7XG5cbiAgICAgICAgY29uc3QgbmV4dEF4aXMgPSAoYXhpcyArIDEpICUgMjtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IG1pblggPD0geCA6IG1pblkgPD0geSkge1xuICAgICAgICAgICAgc3RhY2sucHVzaChsZWZ0KTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSAtIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXh0QXhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBtYXhYID49IHggOiBtYXhZID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIHJpZ2h0LCBkZXB0aCkge1xuICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHJldHVybjtcblxuICAgIGNvbnN0IG0gPSAobGVmdCArIHJpZ2h0KSA+PiAxO1xuXG4gICAgc2VsZWN0KGlkcywgY29vcmRzLCBtLCBsZWZ0LCByaWdodCwgZGVwdGggJSAyKTtcblxuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIGxlZnQsIG0gLSAxLCBkZXB0aCArIDEpO1xuICAgIHNvcnRLRChpZHMsIGNvb3Jkcywgbm9kZVNpemUsIG0gKyAxLCByaWdodCwgZGVwdGggKyAxKTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KGlkcywgY29vcmRzLCBrLCBsZWZ0LCByaWdodCwgaW5jKSB7XG5cbiAgICB3aGlsZSAocmlnaHQgPiBsZWZ0KSB7XG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPiA2MDApIHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSByaWdodCAtIGxlZnQgKyAxO1xuICAgICAgICAgICAgY29uc3QgbSA9IGsgLSBsZWZ0ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHogPSBNYXRoLmxvZyhuKTtcbiAgICAgICAgICAgIGNvbnN0IHMgPSAwLjUgKiBNYXRoLmV4cCgyICogeiAvIDMpO1xuICAgICAgICAgICAgY29uc3Qgc2QgPSAwLjUgKiBNYXRoLnNxcnQoeiAqIHMgKiAobiAtIHMpIC8gbikgKiAobSAtIG4gLyAyIDwgMCA/IC0xIDogMSk7XG4gICAgICAgICAgICBjb25zdCBuZXdMZWZ0ID0gTWF0aC5tYXgobGVmdCwgTWF0aC5mbG9vcihrIC0gbSAqIHMgLyBuICsgc2QpKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JpZ2h0ID0gTWF0aC5taW4ocmlnaHQsIE1hdGguZmxvb3IoayArIChuIC0gbSkgKiBzIC8gbiArIHNkKSk7XG4gICAgICAgICAgICBzZWxlY3QoaWRzLCBjb29yZHMsIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBpbmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdCA9IGNvb3Jkc1syICogayArIGluY107XG4gICAgICAgIGxldCBpID0gbGVmdDtcbiAgICAgICAgbGV0IGogPSByaWdodDtcblxuICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgbGVmdCwgayk7XG4gICAgICAgIGlmIChjb29yZHNbMiAqIHJpZ2h0ICsgaW5jXSA+IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCByaWdodCk7XG5cbiAgICAgICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaSwgaik7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBqLS07XG4gICAgICAgICAgICB3aGlsZSAoY29vcmRzWzIgKiBpICsgaW5jXSA8IHQpIGkrKztcbiAgICAgICAgICAgIHdoaWxlIChjb29yZHNbMiAqIGogKyBpbmNdID4gdCkgai0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvb3Jkc1syICogbGVmdCArIGluY10gPT09IHQpIHN3YXBJdGVtKGlkcywgY29vcmRzLCBsZWZ0LCBqKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBzd2FwSXRlbShpZHMsIGNvb3JkcywgaiwgcmlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgICAgICBpZiAoayA8PSBqKSByaWdodCA9IGogLSAxO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc3dhcEl0ZW0oaWRzLCBjb29yZHMsIGksIGopIHtcbiAgICBzd2FwKGlkcywgaSwgaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpLCAyICogaik7XG4gICAgc3dhcChjb29yZHMsIDIgKiBpICsgMSwgMiAqIGogKyAxKTtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGksIGopIHtcbiAgICBjb25zdCB0bXAgPSBhcnJbaV07XG4gICAgYXJyW2ldID0gYXJyW2pdO1xuICAgIGFycltqXSA9IHRtcDtcbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aGluKGlkcywgY29vcmRzLCBxeCwgcXksIHIsIG5vZGVTaXplKSB7XG4gICAgY29uc3Qgc3RhY2sgPSBbMCwgaWRzLmxlbmd0aCAtIDEsIDBdO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGNvbnN0IHIyID0gciAqIHI7XG5cbiAgICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGF4aXMgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgcmlnaHQgPSBzdGFjay5wb3AoKTtcbiAgICAgICAgY29uc3QgbGVmdCA9IHN0YWNrLnBvcCgpO1xuXG4gICAgICAgIGlmIChyaWdodCAtIGxlZnQgPD0gbm9kZVNpemUpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3FEaXN0KGNvb3Jkc1syICogaV0sIGNvb3Jkc1syICogaSArIDFdLCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtID0gTWF0aC5mbG9vcigobGVmdCArIHJpZ2h0KSAvIDIpO1xuXG4gICAgICAgIGNvbnN0IHggPSBjb29yZHNbMiAqIG1dO1xuICAgICAgICBjb25zdCB5ID0gY29vcmRzWzIgKiBtICsgMV07XG5cbiAgICAgICAgaWYgKHNxRGlzdCh4LCB5LCBxeCwgcXkpIDw9IHIyKSByZXN1bHQucHVzaChpZHNbbV0pO1xuXG4gICAgICAgIGNvbnN0IG5leHRBeGlzID0gKGF4aXMgKyAxKSAlIDI7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IDAgPyBxeCAtIHIgPD0geCA6IHF5IC0gciA8PSB5KSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGxlZnQpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChtIC0gMSk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXhpcyA9PT0gMCA/IHF4ICsgciA+PSB4IDogcXkgKyByID49IHkpIHtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gobSArIDEpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChyaWdodCk7XG4gICAgICAgICAgICBzdGFjay5wdXNoKG5leHRBeGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNxRGlzdChheCwgYXksIGJ4LCBieSkge1xuICAgIGNvbnN0IGR4ID0gYXggLSBieDtcbiAgICBjb25zdCBkeSA9IGF5IC0gYnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocG9pbnQsIHZzKSB7XG4gICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uXG4gICAgLy8gaHR0cDovL3d3dy5lY3NlLnJwaS5lZHUvSG9tZXBhZ2VzL3dyZi9SZXNlYXJjaC9TaG9ydF9Ob3Rlcy9wbnBvbHkuaHRtbFxuICAgIFxuICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXTtcbiAgICBcbiAgICB2YXIgaW5zaWRlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSB2cy5sZW5ndGggLSAxOyBpIDwgdnMubGVuZ3RoOyBqID0gaSsrKSB7XG4gICAgICAgIHZhciB4aSA9IHZzW2ldWzBdLCB5aSA9IHZzW2ldWzFdO1xuICAgICAgICB2YXIgeGogPSB2c1tqXVswXSwgeWogPSB2c1tqXVsxXTtcbiAgICAgICAgXG4gICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpXG4gICAgICAgICAgICAmJiAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICBpZiAoaW50ZXJzZWN0KSBpbnNpZGUgPSAhaW5zaWRlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gaW5zaWRlO1xufTtcbiIsInZhciBleHRlbmRTdGF0aWNzPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8e19fcHJvdG9fXzpbXX1pbnN0YW5jZW9mIEFycmF5JiZmdW5jdGlvbih0LGEpe3QuX19wcm90b19fPWF9fHxmdW5jdGlvbih0LGEpe2Zvcih2YXIgciBpbiBhKWEuaGFzT3duUHJvcGVydHkocikmJih0W3JdPWFbcl0pfTtmdW5jdGlvbiBfX2V4dGVuZHModCxhKXtmdW5jdGlvbiByKCl7dGhpcy5jb25zdHJ1Y3Rvcj10fWV4dGVuZFN0YXRpY3ModCxhKSx0LnByb3RvdHlwZT1udWxsPT09YT9PYmplY3QuY3JlYXRlKGEpOihyLnByb3RvdHlwZT1hLnByb3RvdHlwZSxuZXcgcil9ZnVuY3Rpb24gcm90YXRlKHQsYSl7dmFyIHI9dFswXSxlPXRbMV07cmV0dXJuW3IqTWF0aC5jb3MoYSktZSpNYXRoLnNpbihhKSxyKk1hdGguc2luKGEpK2UqTWF0aC5jb3MoYSldfWZ1bmN0aW9uIGFzc2VydE51bWJlcnMoKXtmb3IodmFyIHQ9W10sYT0wO2E8YXJndW1lbnRzLmxlbmd0aDthKyspdFthXT1hcmd1bWVudHNbYV07Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspaWYoXCJudW1iZXJcIiE9dHlwZW9mIHRbcl0pdGhyb3cgbmV3IEVycm9yKFwiYXNzZXJ0TnVtYmVycyBhcmd1bWVudHNbXCIrcitcIl0gaXMgbm90IGEgbnVtYmVyLiBcIit0eXBlb2YgdFtyXStcIiA9PSB0eXBlb2YgXCIrdFtyXSk7cmV0dXJuITB9dmFyIFBJPU1hdGguUEk7ZnVuY3Rpb24gYW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKXt0LmxBcmNGbGFnPTA9PT10LmxBcmNGbGFnPzA6MSx0LnN3ZWVwRmxhZz0wPT09dC5zd2VlcEZsYWc/MDoxO3ZhciBlPXQuclgsbj10LnJZLGk9dC54LG89dC55O2U9TWF0aC5hYnModC5yWCksbj1NYXRoLmFicyh0LnJZKTt2YXIgcz1yb3RhdGUoWyhhLWkpLzIsKHItbykvMl0sLXQueFJvdC8xODAqUEkpLGg9c1swXSx1PXNbMV0sYz1NYXRoLnBvdyhoLDIpL01hdGgucG93KGUsMikrTWF0aC5wb3codSwyKS9NYXRoLnBvdyhuLDIpOzE8YyYmKGUqPU1hdGguc3FydChjKSxuKj1NYXRoLnNxcnQoYykpLHQuclg9ZSx0LnJZPW47dmFyIG09TWF0aC5wb3coZSwyKSpNYXRoLnBvdyh1LDIpK01hdGgucG93KG4sMikqTWF0aC5wb3coaCwyKSxfPSh0LmxBcmNGbGFnIT09dC5zd2VlcEZsYWc/MTotMSkqTWF0aC5zcXJ0KE1hdGgubWF4KDAsKE1hdGgucG93KGUsMikqTWF0aC5wb3cobiwyKS1tKS9tKSksVD1lKnUvbipfLE89LW4qaC9lKl8scD1yb3RhdGUoW1QsT10sdC54Um90LzE4MCpQSSk7dC5jWD1wWzBdKyhhK2kpLzIsdC5jWT1wWzFdKyhyK28pLzIsdC5waGkxPU1hdGguYXRhbjIoKHUtTykvbiwoaC1UKS9lKSx0LnBoaTI9TWF0aC5hdGFuMigoLXUtTykvbiwoLWgtVCkvZSksMD09PXQuc3dlZXBGbGFnJiZ0LnBoaTI+dC5waGkxJiYodC5waGkyLT0yKlBJKSwxPT09dC5zd2VlcEZsYWcmJnQucGhpMjx0LnBoaTEmJih0LnBoaTIrPTIqUEkpLHQucGhpMSo9MTgwL1BJLHQucGhpMio9MTgwL1BJfWZ1bmN0aW9uIGludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKHQsYSxyKXthc3NlcnROdW1iZXJzKHQsYSxyKTt2YXIgZT10KnQrYSphLXIqcjtpZigwPmUpcmV0dXJuW107aWYoMD09PWUpcmV0dXJuW1t0KnIvKHQqdCthKmEpLGEqci8odCp0K2EqYSldXTt2YXIgbj1NYXRoLnNxcnQoZSk7cmV0dXJuW1sodCpyK2EqbikvKHQqdCthKmEpLChhKnItdCpuKS8odCp0K2EqYSldLFsodCpyLWEqbikvKHQqdCthKmEpLChhKnIrdCpuKS8odCp0K2EqYSldXX12YXIgU1ZHUGF0aERhdGFUcmFuc2Zvcm1lcixERUc9TWF0aC5QSS8xODA7ZnVuY3Rpb24gbGVycCh0LGEscil7cmV0dXJuKDEtcikqdCtyKmF9ZnVuY3Rpb24gYXJjQXQodCxhLHIsZSl7cmV0dXJuIHQrTWF0aC5jb3MoZS8xODAqUEkpKmErTWF0aC5zaW4oZS8xODAqUEkpKnJ9ZnVuY3Rpb24gYmV6aWVyUm9vdCh0LGEscixlKXt2YXIgbj1hLXQsaT1yLWEsbz0zKm4rMyooZS1yKS02Kmkscz02KihpLW4pLGg9MypuO3JldHVybiBNYXRoLmFicyhvKTwxZS02P1staC9zXTpwcUZvcm11bGEocy9vLGgvbywxZS02KX1mdW5jdGlvbiBiZXppZXJBdCh0LGEscixlLG4pe3ZhciBpPTEtbjtyZXR1cm4gdCooaSppKmkpK2EqKDMqaSppKm4pK3IqKDMqaSpuKm4pK2UqKG4qbipuKX1mdW5jdGlvbiBwcUZvcm11bGEodCxhLHIpe3ZvaWQgMD09PXImJihyPTFlLTYpO3ZhciBlPXQqdC80LWE7aWYoZTwtcilyZXR1cm5bXTtpZihlPD1yKXJldHVyblstdC8yXTt2YXIgbj1NYXRoLnNxcnQoZSk7cmV0dXJuWy10LzItbiwtdC8yK25dfWZ1bmN0aW9uIGEyYyh0LGEscil7dmFyIGUsbixpLG87dC5jWHx8YW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKTtmb3IodmFyIHM9TWF0aC5taW4odC5waGkxLHQucGhpMiksaD1NYXRoLm1heCh0LnBoaTEsdC5waGkyKS1zLHU9TWF0aC5jZWlsKGgvOTApLGM9bmV3IEFycmF5KHUpLG09YSxfPXIsVD0wO1Q8dTtUKyspe3ZhciBPPWxlcnAodC5waGkxLHQucGhpMixUL3UpLHA9bGVycCh0LnBoaTEsdC5waGkyLChUKzEpL3UpLHk9cC1PLFM9NC8zKk1hdGgudGFuKHkqREVHLzQpLGY9W01hdGguY29zKE8qREVHKS1TKk1hdGguc2luKE8qREVHKSxNYXRoLnNpbihPKkRFRykrUypNYXRoLmNvcyhPKkRFRyldLFY9ZlswXSxOPWZbMV0sRD1bTWF0aC5jb3MocCpERUcpLE1hdGguc2luKHAqREVHKV0sUD1EWzBdLGw9RFsxXSx2PVtQK1MqTWF0aC5zaW4ocCpERUcpLGwtUypNYXRoLmNvcyhwKkRFRyldLEU9dlswXSxBPXZbMV07Y1tUXT17cmVsYXRpdmU6dC5yZWxhdGl2ZSx0eXBlOlNWR1BhdGhEYXRhLkNVUlZFX1RPfTt2YXIgZD1mdW5jdGlvbihhLHIpe3ZhciBlPXJvdGF0ZShbYSp0LnJYLHIqdC5yWV0sdC54Um90KSxuPWVbMF0saT1lWzFdO3JldHVyblt0LmNYK24sdC5jWStpXX07ZT1kKFYsTiksY1tUXS54MT1lWzBdLGNbVF0ueTE9ZVsxXSxuPWQoRSxBKSxjW1RdLngyPW5bMF0sY1tUXS55Mj1uWzFdLGk9ZChQLGwpLGNbVF0ueD1pWzBdLGNbVF0ueT1pWzFdLHQucmVsYXRpdmUmJihjW1RdLngxLT1tLGNbVF0ueTEtPV8sY1tUXS54Mi09bSxjW1RdLnkyLT1fLGNbVF0ueC09bSxjW1RdLnktPV8pLG09KG89W2NbVF0ueCxjW1RdLnldKVswXSxfPW9bMV19cmV0dXJuIGN9IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGEoKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmUmJih2b2lkIDAhPT10LngxJiYodC54MSs9YSksdm9pZCAwIT09dC55MSYmKHQueTErPXIpLHZvaWQgMCE9PXQueDImJih0LngyKz1hKSx2b2lkIDAhPT10LnkyJiYodC55Mis9ciksdm9pZCAwIT09dC54JiYodC54Kz1hKSx2b2lkIDAhPT10LnkmJih0LnkrPXIpLHQucmVsYXRpdmU9ITEpLHR9KX1mdW5jdGlvbiByKCl7dmFyIHQ9TmFOLGE9TmFOLHI9TmFOLGU9TmFOO3JldHVybiBuKGZ1bmN0aW9uKG4saSxvKXtyZXR1cm4gbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyYmKG4udHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyx0PWlzTmFOKHQpP2k6dCxhPWlzTmFOKGEpP286YSxuLngxPW4ucmVsYXRpdmU/aS10OjIqaS10LG4ueTE9bi5yZWxhdGl2ZT9vLWE6MipvLWEpLG4udHlwZSZTVkdQYXRoRGF0YS5DVVJWRV9UTz8odD1uLnJlbGF0aXZlP2krbi54MjpuLngyLGE9bi5yZWxhdGl2ZT9vK24ueTI6bi55Mik6KHQ9TmFOLGE9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8mJihuLnR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyxyPWlzTmFOKHIpP2k6cixlPWlzTmFOKGUpP286ZSxuLngxPW4ucmVsYXRpdmU/aS1yOjIqaS1yLG4ueTE9bi5yZWxhdGl2ZT9vLWU6MipvLWUpLG4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPPyhyPW4ucmVsYXRpdmU/aStuLngxOm4ueDEsZT1uLnJlbGF0aXZlP28rbi55MTpuLnkxKToocj1OYU4sZT1OYU4pLG59KX1mdW5jdGlvbiBlKCl7dmFyIHQ9TmFOLGE9TmFOO3JldHVybiBuKGZ1bmN0aW9uKHIsZSxuKXtpZihyLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8mJihyLnR5cGU9U1ZHUGF0aERhdGEuUVVBRF9UTyx0PWlzTmFOKHQpP2U6dCxhPWlzTmFOKGEpP246YSxyLngxPXIucmVsYXRpdmU/ZS10OjIqZS10LHIueTE9ci5yZWxhdGl2ZT9uLWE6MipuLWEpLHIudHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPKXt0PXIucmVsYXRpdmU/ZStyLngxOnIueDEsYT1yLnJlbGF0aXZlP24rci55MTpyLnkxO3ZhciBpPXIueDEsbz1yLnkxO3IudHlwZT1TVkdQYXRoRGF0YS5DVVJWRV9UTyxyLngxPSgoci5yZWxhdGl2ZT8wOmUpKzIqaSkvMyxyLnkxPSgoci5yZWxhdGl2ZT8wOm4pKzIqbykvMyxyLngyPShyLngrMippKS8zLHIueTI9KHIueSsyKm8pLzN9ZWxzZSB0PU5hTixhPU5hTjtyZXR1cm4gcn0pfWZ1bmN0aW9uIG4odCl7dmFyIGE9MCxyPTAsZT1OYU4sbj1OYU47cmV0dXJuIGZ1bmN0aW9uKGkpe2lmKGlzTmFOKGUpJiYhKGkudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7dmFyIG89dChpLGEscixlLG4pO3JldHVybiBpLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmKGE9ZSxyPW4pLHZvaWQgMCE9PWkueCYmKGE9aS5yZWxhdGl2ZT9hK2kueDppLngpLHZvaWQgMCE9PWkueSYmKHI9aS5yZWxhdGl2ZT9yK2kueTppLnkpLGkudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPJiYoZT1hLG49ciksb319ZnVuY3Rpb24gaSh0LGEscixlLGksbyl7cmV0dXJuIGFzc2VydE51bWJlcnModCxhLHIsZSxpLG8pLG4oZnVuY3Rpb24obixzLGgsdSl7dmFyIGM9bi54MSxtPW4ueDIsXz1uLnJlbGF0aXZlJiYhaXNOYU4odSksVD12b2lkIDAhPT1uLng/bi54Ol8/MDpzLE89dm9pZCAwIT09bi55P24ueTpfPzA6aDtmdW5jdGlvbiBwKHQpe3JldHVybiB0KnR9bi50eXBlJlNWR1BhdGhEYXRhLkhPUklaX0xJTkVfVE8mJjAhPT1hJiYobi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sbi55PW4ucmVsYXRpdmU/MDpoKSxuLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiYwIT09ciYmKG4udHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLG4ueD1uLnJlbGF0aXZlPzA6cyksdm9pZCAwIT09bi54JiYobi54PW4ueCp0K08qcisoXz8wOmkpKSx2b2lkIDAhPT1uLnkmJihuLnk9VCphK24ueSplKyhfPzA6bykpLHZvaWQgMCE9PW4ueDEmJihuLngxPW4ueDEqdCtuLnkxKnIrKF8/MDppKSksdm9pZCAwIT09bi55MSYmKG4ueTE9YyphK24ueTEqZSsoXz8wOm8pKSx2b2lkIDAhPT1uLngyJiYobi54Mj1uLngyKnQrbi55MipyKyhfPzA6aSkpLHZvaWQgMCE9PW4ueTImJihuLnkyPW0qYStuLnkyKmUrKF8/MDpvKSk7dmFyIHk9dCplLWEqcjtpZih2b2lkIDAhPT1uLnhSb3QmJigxIT09dHx8MCE9PWF8fDAhPT1yfHwxIT09ZSkpaWYoMD09PXkpZGVsZXRlIG4uclgsZGVsZXRlIG4uclksZGVsZXRlIG4ueFJvdCxkZWxldGUgbi5sQXJjRmxhZyxkZWxldGUgbi5zd2VlcEZsYWcsbi50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE87ZWxzZXt2YXIgUz1uLnhSb3QqTWF0aC5QSS8xODAsZj1NYXRoLnNpbihTKSxWPU1hdGguY29zKFMpLE49MS9wKG4uclgpLEQ9MS9wKG4uclkpLFA9cChWKSpOK3AoZikqRCxsPTIqZipWKihOLUQpLHY9cChmKSpOK3AoVikqRCxFPVAqZSplLWwqYSplK3YqYSphLEE9bCoodCplK2EqciktMiooUCpyKmUrdip0KmEpLGQ9UCpyKnItbCp0KnIrdip0KnQsRz0oTWF0aC5hdGFuMihBLEUtZCkrTWF0aC5QSSklTWF0aC5QSS8yLEM9TWF0aC5zaW4oRykseD1NYXRoLmNvcyhHKTtuLnJYPU1hdGguYWJzKHkpL01hdGguc3FydChFKnAoeCkrQSpDKngrZCpwKEMpKSxuLnJZPU1hdGguYWJzKHkpL01hdGguc3FydChFKnAoQyktQSpDKngrZCpwKHgpKSxuLnhSb3Q9MTgwKkcvTWF0aC5QSX1yZXR1cm4gdm9pZCAwIT09bi5zd2VlcEZsYWcmJjA+eSYmKG4uc3dlZXBGbGFnPSshbi5zd2VlcEZsYWcpLG59KX1mdW5jdGlvbiBvKCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBhPXt9O2Zvcih2YXIgciBpbiB0KWFbcl09dFtyXTtyZXR1cm4gYX19dC5ST1VORD1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKGEpe3JldHVybiBNYXRoLnJvdW5kKGEqdCkvdH1yZXR1cm4gdm9pZCAwPT09dCYmKHQ9MWUxMyksYXNzZXJ0TnVtYmVycyh0KSxmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dC54MSYmKHQueDE9YSh0LngxKSksdm9pZCAwIT09dC55MSYmKHQueTE9YSh0LnkxKSksdm9pZCAwIT09dC54MiYmKHQueDI9YSh0LngyKSksdm9pZCAwIT09dC55MiYmKHQueTI9YSh0LnkyKSksdm9pZCAwIT09dC54JiYodC54PWEodC54KSksdm9pZCAwIT09dC55JiYodC55PWEodC55KSksdH19LHQuVE9fQUJTPWEsdC5UT19SRUw9ZnVuY3Rpb24oKXtyZXR1cm4gbihmdW5jdGlvbih0LGEscil7cmV0dXJuIHQucmVsYXRpdmV8fCh2b2lkIDAhPT10LngxJiYodC54MS09YSksdm9pZCAwIT09dC55MSYmKHQueTEtPXIpLHZvaWQgMCE9PXQueDImJih0LngyLT1hKSx2b2lkIDAhPT10LnkyJiYodC55Mi09ciksdm9pZCAwIT09dC54JiYodC54LT1hKSx2b2lkIDAhPT10LnkmJih0LnktPXIpLHQucmVsYXRpdmU9ITApLHR9KX0sdC5OT1JNQUxJWkVfSFZaPWZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PWEmJihhPSEwKSx2b2lkIDA9PT1yJiYocj0hMCksbihmdW5jdGlvbihlLG4saSxvLHMpe2lmKGlzTmFOKG8pJiYhKGUudHlwZSZTVkdQYXRoRGF0YS5NT1ZFX1RPKSl0aHJvdyBuZXcgRXJyb3IoXCJwYXRoIG11c3Qgc3RhcnQgd2l0aCBtb3ZldG9cIik7cmV0dXJuIGEmJmUudHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS55PWUucmVsYXRpdmU/MDppKSxyJiZlLnR5cGUmU1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPJiYoZS50eXBlPVNWR1BhdGhEYXRhLkxJTkVfVE8sZS54PWUucmVsYXRpdmU/MDpuKSx0JiZlLnR5cGUmU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSCYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGUueD1lLnJlbGF0aXZlP28tbjpvLGUueT1lLnJlbGF0aXZlP3MtaTpzKSxlLnR5cGUmU1ZHUGF0aERhdGEuQVJDJiYoMD09PWUuclh8fDA9PT1lLnJZKSYmKGUudHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLGRlbGV0ZSBlLnJYLGRlbGV0ZSBlLnJZLGRlbGV0ZSBlLnhSb3QsZGVsZXRlIGUubEFyY0ZsYWcsZGVsZXRlIGUuc3dlZXBGbGFnKSxlfSl9LHQuTk9STUFMSVpFX1NUPXIsdC5RVF9UT19DPWUsdC5JTkZPPW4sdC5TQU5JVElaRT1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpO3ZhciBhPU5hTixyPU5hTixlPU5hTixpPU5hTjtyZXR1cm4gbihmdW5jdGlvbihuLG8scyxoLHUpe3ZhciBjPU1hdGguYWJzLG09ITEsXz0wLFQ9MDtpZihuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPJiYoXz1pc05hTihhKT8wOm8tYSxUPWlzTmFOKHIpPzA6cy1yKSxuLnR5cGUmKFNWR1BhdGhEYXRhLkNVUlZFX1RPfFNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyk/KGE9bi5yZWxhdGl2ZT9vK24ueDI6bi54MixyPW4ucmVsYXRpdmU/cytuLnkyOm4ueTIpOihhPU5hTixyPU5hTiksbi50eXBlJlNWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPPyhlPWlzTmFOKGUpP286MipvLWUsaT1pc05hTihpKT9zOjIqcy1pKTpuLnR5cGUmU1ZHUGF0aERhdGEuUVVBRF9UTz8oZT1uLnJlbGF0aXZlP28rbi54MTpuLngxLGk9bi5yZWxhdGl2ZT9zK24ueTE6bi55Mik6KGU9TmFOLGk9TmFOKSxuLnR5cGUmU1ZHUGF0aERhdGEuTElORV9DT01NQU5EU3x8bi50eXBlJlNWR1BhdGhEYXRhLkFSQyYmKDA9PT1uLnJYfHwwPT09bi5yWXx8IW4ubEFyY0ZsYWcpfHxuLnR5cGUmU1ZHUGF0aERhdGEuQ1VSVkVfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE98fG4udHlwZSZTVkdQYXRoRGF0YS5RVUFEX1RPfHxuLnR5cGUmU1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8pe3ZhciBPPXZvaWQgMD09PW4ueD8wOm4ucmVsYXRpdmU/bi54Om4ueC1vLHA9dm9pZCAwPT09bi55PzA6bi5yZWxhdGl2ZT9uLnk6bi55LXM7Xz1pc05hTihlKT92b2lkIDA9PT1uLngxP186bi5yZWxhdGl2ZT9uLng6bi54MS1vOmUtbyxUPWlzTmFOKGkpP3ZvaWQgMD09PW4ueTE/VDpuLnJlbGF0aXZlP24ueTpuLnkxLXM6aS1zO3ZhciB5PXZvaWQgMD09PW4ueDI/MDpuLnJlbGF0aXZlP24ueDpuLngyLW8sUz12b2lkIDA9PT1uLnkyPzA6bi5yZWxhdGl2ZT9uLnk6bi55Mi1zO2MoTyk8PXQmJmMocCk8PXQmJmMoXyk8PXQmJmMoVCk8PXQmJmMoeSk8PXQmJmMoUyk8PXQmJihtPSEwKX1yZXR1cm4gbi50eXBlJlNWR1BhdGhEYXRhLkNMT1NFX1BBVEgmJmMoby1oKTw9dCYmYyhzLXUpPD10JiYobT0hMCksbT9bXTpufSl9LHQuTUFUUklYPWksdC5ST1RBVEU9ZnVuY3Rpb24odCxhLHIpe3ZvaWQgMD09PWEmJihhPTApLHZvaWQgMD09PXImJihyPTApLGFzc2VydE51bWJlcnModCxhLHIpO3ZhciBlPU1hdGguc2luKHQpLG49TWF0aC5jb3ModCk7cmV0dXJuIGkobixlLC1lLG4sYS1hKm4rciplLHItYSplLXIqbil9LHQuVFJBTlNMQVRFPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHZvaWQgMD09PWEmJihhPTApLGFzc2VydE51bWJlcnModCxhKSxpKDEsMCwwLDEsdCxhKX0sdC5TQ0FMRT1mdW5jdGlvbih0LGEpe3JldHVybiB2b2lkIDA9PT1hJiYoYT10KSxhc3NlcnROdW1iZXJzKHQsYSksaSh0LDAsMCxhLDAsMCl9LHQuU0tFV19YPWZ1bmN0aW9uKHQpe3JldHVybiBhc3NlcnROdW1iZXJzKHQpLGkoMSwwLE1hdGguYXRhbih0KSwxLDAsMCl9LHQuU0tFV19ZPWZ1bmN0aW9uKHQpe3JldHVybiBhc3NlcnROdW1iZXJzKHQpLGkoMSxNYXRoLmF0YW4odCksMCwxLDAsMCl9LHQuWF9BWElTX1NZTU1FVFJZPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0wKSxhc3NlcnROdW1iZXJzKHQpLGkoLTEsMCwwLDEsdCwwKX0sdC5ZX0FYSVNfU1lNTUVUUlk9ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PTApLGFzc2VydE51bWJlcnModCksaSgxLDAsMCwtMSwwLHQpfSx0LkFfVE9fQz1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gU1ZHUGF0aERhdGEuQVJDPT09dC50eXBlP2EyYyh0LHQucmVsYXRpdmU/MDphLHQucmVsYXRpdmU/MDpyKTp0fSl9LHQuQU5OT1RBVEVfQVJDUz1mdW5jdGlvbigpe3JldHVybiBuKGZ1bmN0aW9uKHQsYSxyKXtyZXR1cm4gdC5yZWxhdGl2ZSYmKGE9MCxyPTApLFNWR1BhdGhEYXRhLkFSQz09PXQudHlwZSYmYW5ub3RhdGVBcmNDb21tYW5kKHQsYSxyKSx0fSl9LHQuQ0xPTkU9byx0LkNBTENVTEFURV9CT1VORFM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbih0KXt2YXIgYT17fTtmb3IodmFyIHIgaW4gdClhW3JdPXRbcl07cmV0dXJuIGF9LGk9YSgpLG89ZSgpLHM9cigpLGg9bihmdW5jdGlvbihhLHIsZSl7dmFyIG49cyhvKGkodChhKSkpKTtmdW5jdGlvbiB1KHQpe3Q+aC5tYXhYJiYoaC5tYXhYPXQpLHQ8aC5taW5YJiYoaC5taW5YPXQpfWZ1bmN0aW9uIGModCl7dD5oLm1heFkmJihoLm1heFk9dCksdDxoLm1pblkmJihoLm1pblk9dCl9aWYobi50eXBlJlNWR1BhdGhEYXRhLkRSQVdJTkdfQ09NTUFORFMmJih1KHIpLGMoZSkpLG4udHlwZSZTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPJiZ1KG4ueCksbi50eXBlJlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyYmYyhuLnkpLG4udHlwZSZTVkdQYXRoRGF0YS5MSU5FX1RPJiYodShuLngpLGMobi55KSksbi50eXBlJlNWR1BhdGhEYXRhLkNVUlZFX1RPKXt1KG4ueCksYyhuLnkpO2Zvcih2YXIgbT0wLF89YmV6aWVyUm9vdChyLG4ueDEsbi54MixuLngpO208Xy5sZW5ndGg7bSsrKTA8KEc9X1ttXSkmJjE+RyYmdShiZXppZXJBdChyLG4ueDEsbi54MixuLngsRykpO2Zvcih2YXIgVD0wLE89YmV6aWVyUm9vdChlLG4ueTEsbi55MixuLnkpO1Q8Ty5sZW5ndGg7VCsrKTA8KEc9T1tUXSkmJjE+RyYmYyhiZXppZXJBdChlLG4ueTEsbi55MixuLnksRykpfWlmKG4udHlwZSZTVkdQYXRoRGF0YS5BUkMpe3Uobi54KSxjKG4ueSksYW5ub3RhdGVBcmNDb21tYW5kKG4scixlKTtmb3IodmFyIHA9bi54Um90LzE4MCpNYXRoLlBJLHk9TWF0aC5jb3MocCkqbi5yWCxTPU1hdGguc2luKHApKm4uclgsZj0tTWF0aC5zaW4ocCkqbi5yWSxWPU1hdGguY29zKHApKm4uclksTj1uLnBoaTE8bi5waGkyP1tuLnBoaTEsbi5waGkyXTotMTgwPm4ucGhpMj9bbi5waGkyKzM2MCxuLnBoaTErMzYwXTpbbi5waGkyLG4ucGhpMV0sRD1OWzBdLFA9TlsxXSxsPWZ1bmN0aW9uKHQpe3ZhciBhPXRbMF0scj10WzFdLGU9MTgwKk1hdGguYXRhbjIocixhKS9NYXRoLlBJO3JldHVybiBlPEQ/ZSszNjA6ZX0sdj0wLEU9aW50ZXJzZWN0aW9uVW5pdENpcmNsZUxpbmUoZiwteSwwKS5tYXAobCk7djxFLmxlbmd0aDt2KyspKEc9RVt2XSk+RCYmRzxQJiZ1KGFyY0F0KG4uY1gseSxmLEcpKTtmb3IodmFyIEE9MCxkPWludGVyc2VjdGlvblVuaXRDaXJjbGVMaW5lKFYsLVMsMCkubWFwKGwpO0E8ZC5sZW5ndGg7QSsrKXt2YXIgRzsoRz1kW0FdKT5EJiZHPFAmJmMoYXJjQXQobi5jWSxTLFYsRykpfX1yZXR1cm4gYX0pO3JldHVybiBoLm1pblg9MS8wLGgubWF4WD0tMS8wLGgubWluWT0xLzAsaC5tYXhZPS0xLzAsaH19KFNWR1BhdGhEYXRhVHJhbnNmb3JtZXJ8fChTVkdQYXRoRGF0YVRyYW5zZm9ybWVyPXt9KSk7dmFyIF9hLF9hJDEsVHJhbnNmb3JtYWJsZVNWRz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXt9cmV0dXJuIHQucHJvdG90eXBlLnJvdW5kPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlJPVU5EKHQpKX0sdC5wcm90b3R5cGUudG9BYnM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UT19BQlMoKSl9LHQucHJvdG90eXBlLnRvUmVsPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuVE9fUkVMKCkpfSx0LnByb3RvdHlwZS5ub3JtYWxpemVIVlo9ZnVuY3Rpb24odCxhLHIpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLk5PUk1BTElaRV9IVloodCxhLHIpKX0sdC5wcm90b3R5cGUubm9ybWFsaXplU1Q9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5OT1JNQUxJWkVfU1QoKSl9LHQucHJvdG90eXBlLnF0VG9DPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUVRfVE9fQygpKX0sdC5wcm90b3R5cGUuYVRvQz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkFfVE9fQygpKX0sdC5wcm90b3R5cGUuc2FuaXRpemU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0FOSVRJWkUodCkpfSx0LnByb3RvdHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCxhKXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5UUkFOU0xBVEUodCxhKSl9LHQucHJvdG90eXBlLnNjYWxlPWZ1bmN0aW9uKHQsYSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuU0NBTEUodCxhKSl9LHQucHJvdG90eXBlLnJvdGF0ZT1mdW5jdGlvbih0LGEscil7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuUk9UQVRFKHQsYSxyKSl9LHQucHJvdG90eXBlLm1hdHJpeD1mdW5jdGlvbih0LGEscixlLG4saSl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuTUFUUklYKHQsYSxyLGUsbixpKSl9LHQucHJvdG90eXBlLnNrZXdYPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNLRVdfWCh0KSl9LHQucHJvdG90eXBlLnNrZXdZPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRyYW5zZm9ybShTVkdQYXRoRGF0YVRyYW5zZm9ybWVyLlNLRVdfWSh0KSl9LHQucHJvdG90eXBlLnhTeW1tZXRyeT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50cmFuc2Zvcm0oU1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5YX0FYSVNfU1lNTUVUUlkodCkpfSx0LnByb3RvdHlwZS55U3ltbWV0cnk9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuWV9BWElTX1NZTU1FVFJZKHQpKX0sdC5wcm90b3R5cGUuYW5ub3RhdGVBcmNzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudHJhbnNmb3JtKFNWR1BhdGhEYXRhVHJhbnNmb3JtZXIuQU5OT1RBVEVfQVJDUygpKX0sdH0oKSxpc1doaXRlU3BhY2U9ZnVuY3Rpb24odCl7cmV0dXJuXCIgXCI9PT10fHxcIlxcdFwiPT09dHx8XCJcXHJcIj09PXR8fFwiXFxuXCI9PT10fSxpc0RpZ2l0PWZ1bmN0aW9uKHQpe3JldHVyblwiMFwiLmNoYXJDb2RlQXQoMCk8PXQuY2hhckNvZGVBdCgwKSYmdC5jaGFyQ29kZUF0KDApPD1cIjlcIi5jaGFyQ29kZUF0KDApfSxTVkdQYXRoRGF0YVBhcnNlciQkMT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKCl7dmFyIGE9dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBhLmN1ck51bWJlcj1cIlwiLGEuY3VyQ29tbWFuZFR5cGU9LTEsYS5jdXJDb21tYW5kUmVsYXRpdmU9ITEsYS5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwLGEuY3VyTnVtYmVySGFzRXhwPSExLGEuY3VyTnVtYmVySGFzRXhwRGlnaXRzPSExLGEuY3VyTnVtYmVySGFzRGVjaW1hbD0hMSxhLmN1ckFyZ3M9W10sYX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXQmJih0PVtdKSx0aGlzLnBhcnNlKFwiIFwiLHQpLDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RofHwhdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IHRoZSBwYXRoIGVuZC5cIik7cmV0dXJuIHR9LGEucHJvdG90eXBlLnBhcnNlPWZ1bmN0aW9uKHQsYSl7dmFyIHI9dGhpczt2b2lkIDA9PT1hJiYoYT1bXSk7Zm9yKHZhciBlPWZ1bmN0aW9uKHQpe2EucHVzaCh0KSxyLmN1ckFyZ3MubGVuZ3RoPTAsci5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSEwfSxuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBpPXRbbl07aWYoaXNEaWdpdChpKSl0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0V4cERpZ2l0cz10aGlzLmN1ck51bWJlckhhc0V4cDtlbHNlIGlmKFwiZVwiIT09aSYmXCJFXCIhPT1pKWlmKFwiLVwiIT09aSYmXCIrXCIhPT1pfHwhdGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRXhwRGlnaXRzKWlmKFwiLlwiIT09aXx8dGhpcy5jdXJOdW1iZXJIYXNFeHB8fHRoaXMuY3VyTnVtYmVySGFzRGVjaW1hbCl7aWYodGhpcy5jdXJOdW1iZXImJi0xIT09dGhpcy5jdXJDb21tYW5kVHlwZSl7dmFyIG89TnVtYmVyKHRoaXMuY3VyTnVtYmVyKTtpZihpc05hTihvKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJJbnZhbGlkIG51bWJlciBlbmRpbmcgYXQgXCIrbik7aWYodGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkFSQylpZigwPT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8MT09PXRoaXMuY3VyQXJncy5sZW5ndGgpe2lmKDA+byl0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0V4cGVjdGVkIHBvc2l0aXZlIG51bWJlciwgZ290IFwiJytvKydcIiBhdCBpbmRleCBcIicrbisnXCInKX1lbHNlIGlmKCgzPT09dGhpcy5jdXJBcmdzLmxlbmd0aHx8ND09PXRoaXMuY3VyQXJncy5sZW5ndGgpJiZcIjBcIiE9PXRoaXMuY3VyTnVtYmVyJiZcIjFcIiE9PXRoaXMuY3VyTnVtYmVyKXRocm93IG5ldyBTeW50YXhFcnJvcignRXhwZWN0ZWQgYSBmbGFnLCBnb3QgXCInK3RoaXMuY3VyTnVtYmVyKydcIiBhdCBpbmRleCBcIicrbisnXCInKTt0aGlzLmN1ckFyZ3MucHVzaChvKSx0aGlzLmN1ckFyZ3MubGVuZ3RoPT09Q09NTUFORF9BUkdfQ09VTlRTW3RoaXMuY3VyQ29tbWFuZFR5cGVdJiYoU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/ZSh7dHlwZTpTVkdQYXRoRGF0YS5IT1JJWl9MSU5FX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHg6b30pOlNWR1BhdGhEYXRhLlZFUlRfTElORV9UTz09PXRoaXMuY3VyQ29tbWFuZFR5cGU/ZSh7dHlwZTpTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseTpvfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLk1PVkVfVE98fHRoaXMuY3VyQ29tbWFuZFR5cGU9PT1TVkdQYXRoRGF0YS5MSU5FX1RPfHx0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8/KGUoe3R5cGU6dGhpcy5jdXJDb21tYW5kVHlwZSxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4OnRoaXMuY3VyQXJnc1swXSx5OnRoaXMuY3VyQXJnc1sxXX0pLFNWR1BhdGhEYXRhLk1PVkVfVE89PT10aGlzLmN1ckNvbW1hbmRUeXBlJiYodGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPKSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLkNVUlZFX1RPP2Uoe3R5cGU6U1ZHUGF0aERhdGEuQ1VSVkVfVE8scmVsYXRpdmU6dGhpcy5jdXJDb21tYW5kUmVsYXRpdmUseDE6dGhpcy5jdXJBcmdzWzBdLHkxOnRoaXMuY3VyQXJnc1sxXSx4Mjp0aGlzLmN1ckFyZ3NbMl0seTI6dGhpcy5jdXJBcmdzWzNdLHg6dGhpcy5jdXJBcmdzWzRdLHk6dGhpcy5jdXJBcmdzWzVdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTz9lKHt0eXBlOlNWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UTyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSx4Mjp0aGlzLmN1ckFyZ3NbMF0seTI6dGhpcy5jdXJBcmdzWzFdLHg6dGhpcy5jdXJBcmdzWzJdLHk6dGhpcy5jdXJBcmdzWzNdfSk6dGhpcy5jdXJDb21tYW5kVHlwZT09PVNWR1BhdGhEYXRhLlFVQURfVE8/ZSh7dHlwZTpTVkdQYXRoRGF0YS5RVUFEX1RPLHJlbGF0aXZlOnRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlLHgxOnRoaXMuY3VyQXJnc1swXSx5MTp0aGlzLmN1ckFyZ3NbMV0seDp0aGlzLmN1ckFyZ3NbMl0seTp0aGlzLmN1ckFyZ3NbM119KTp0aGlzLmN1ckNvbW1hbmRUeXBlPT09U1ZHUGF0aERhdGEuQVJDJiZlKHt0eXBlOlNWR1BhdGhEYXRhLkFSQyxyZWxhdGl2ZTp0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZSxyWDp0aGlzLmN1ckFyZ3NbMF0sclk6dGhpcy5jdXJBcmdzWzFdLHhSb3Q6dGhpcy5jdXJBcmdzWzJdLGxBcmNGbGFnOnRoaXMuY3VyQXJnc1szXSxzd2VlcEZsYWc6dGhpcy5jdXJBcmdzWzRdLHg6dGhpcy5jdXJBcmdzWzVdLHk6dGhpcy5jdXJBcmdzWzZdfSkpLHRoaXMuY3VyTnVtYmVyPVwiXCIsdGhpcy5jdXJOdW1iZXJIYXNFeHBEaWdpdHM9ITEsdGhpcy5jdXJOdW1iZXJIYXNFeHA9ITEsdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSExLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMH1pZighaXNXaGl0ZVNwYWNlKGkpKWlmKFwiLFwiPT09aSYmdGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hKXRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMTtlbHNlIGlmKFwiK1wiIT09aSYmXCItXCIhPT1pJiZcIi5cIiE9PWkpe2lmKDAhPT10aGlzLmN1ckFyZ3MubGVuZ3RoKXRocm93IG5ldyBTeW50YXhFcnJvcihcIlVudGVybWluYXRlZCBjb21tYW5kIGF0IGluZGV4IFwiK24rXCIuXCIpO2lmKCF0aGlzLmNhblBhcnNlQ29tbWFuZE9yQ29tbWEpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicraSsnXCIgYXQgaW5kZXggJytuK1wiLiBDb21tYW5kIGNhbm5vdCBmb2xsb3cgY29tbWFcIik7aWYodGhpcy5jYW5QYXJzZUNvbW1hbmRPckNvbW1hPSExLFwielwiIT09aSYmXCJaXCIhPT1pKWlmKFwiaFwiPT09aXx8XCJIXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImhcIj09PWk7ZWxzZSBpZihcInZcIj09PWl8fFwiVlwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLlZFUlRfTElORV9UTyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cInZcIj09PWk7ZWxzZSBpZihcIm1cIj09PWl8fFwiTVwiPT09aSl0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLk1PVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJtXCI9PT1pO2Vsc2UgaWYoXCJsXCI9PT1pfHxcIkxcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5MSU5FX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwibFwiPT09aTtlbHNlIGlmKFwiY1wiPT09aXx8XCJDXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJjXCI9PT1pO2Vsc2UgaWYoXCJzXCI9PT1pfHxcIlNcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5TTU9PVEhfQ1VSVkVfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJzXCI9PT1pO2Vsc2UgaWYoXCJxXCI9PT1pfHxcIlFcIj09PWkpdGhpcy5jdXJDb21tYW5kVHlwZT1TVkdQYXRoRGF0YS5RVUFEX1RPLHRoaXMuY3VyQ29tbWFuZFJlbGF0aXZlPVwicVwiPT09aTtlbHNlIGlmKFwidFwiPT09aXx8XCJUXCI9PT1pKXRoaXMuY3VyQ29tbWFuZFR5cGU9U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8sdGhpcy5jdXJDb21tYW5kUmVsYXRpdmU9XCJ0XCI9PT1pO2Vsc2V7aWYoXCJhXCIhPT1pJiZcIkFcIiE9PWkpdGhyb3cgbmV3IFN5bnRheEVycm9yKCdVbmV4cGVjdGVkIGNoYXJhY3RlciBcIicraSsnXCIgYXQgaW5kZXggJytuK1wiLlwiKTt0aGlzLmN1ckNvbW1hbmRUeXBlPVNWR1BhdGhEYXRhLkFSQyx0aGlzLmN1ckNvbW1hbmRSZWxhdGl2ZT1cImFcIj09PWl9ZWxzZSBhLnB1c2goe3R5cGU6U1ZHUGF0aERhdGEuQ0xPU0VfUEFUSH0pLHRoaXMuY2FuUGFyc2VDb21tYW5kT3JDb21tYT0hMCx0aGlzLmN1ckNvbW1hbmRUeXBlPS0xfWVsc2UgdGhpcy5jdXJOdW1iZXI9aSx0aGlzLmN1ck51bWJlckhhc0RlY2ltYWw9XCIuXCI9PT1pfWVsc2UgdGhpcy5jdXJOdW1iZXIrPWksdGhpcy5jdXJOdW1iZXJIYXNEZWNpbWFsPSEwO2Vsc2UgdGhpcy5jdXJOdW1iZXIrPWk7ZWxzZSB0aGlzLmN1ck51bWJlcis9aSx0aGlzLmN1ck51bWJlckhhc0V4cD0hMH1yZXR1cm4gYX0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuY3JlYXRlKHRoaXMse3BhcnNlOnt2YWx1ZTpmdW5jdGlvbihhLHIpe3ZvaWQgMD09PXImJihyPVtdKTtmb3IodmFyIGU9MCxuPU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5wYXJzZS5jYWxsKHRoaXMsYSk7ZTxuLmxlbmd0aDtlKyspe3ZhciBpPW5bZV0sbz10KGkpO0FycmF5LmlzQXJyYXkobyk/ci5wdXNoLmFwcGx5KHIsbyk6ci5wdXNoKG8pfXJldHVybiByfX19KX0sYX0oVHJhbnNmb3JtYWJsZVNWRyksU1ZHUGF0aERhdGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gYShyKXt2YXIgZT10LmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIGUuY29tbWFuZHM9XCJzdHJpbmdcIj09dHlwZW9mIHI/YS5wYXJzZShyKTpyLGV9cmV0dXJuIF9fZXh0ZW5kcyhhLHQpLGEucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbigpe3JldHVybiBhLmVuY29kZSh0aGlzLmNvbW1hbmRzKX0sYS5wcm90b3R5cGUuZ2V0Qm91bmRzPWZ1bmN0aW9uKCl7dmFyIHQ9U1ZHUGF0aERhdGFUcmFuc2Zvcm1lci5DQUxDVUxBVEVfQk9VTkRTKCk7cmV0dXJuIHRoaXMudHJhbnNmb3JtKHQpLHR9LGEucHJvdG90eXBlLnRyYW5zZm9ybT1mdW5jdGlvbih0KXtmb3IodmFyIGE9W10scj0wLGU9dGhpcy5jb21tYW5kcztyPGUubGVuZ3RoO3IrKyl7dmFyIG49dChlW3JdKTtBcnJheS5pc0FycmF5KG4pP2EucHVzaC5hcHBseShhLG4pOmEucHVzaChuKX1yZXR1cm4gdGhpcy5jb21tYW5kcz1hLHRoaXN9LGEuZW5jb2RlPWZ1bmN0aW9uKHQpe3JldHVybiBlbmNvZGVTVkdQYXRoJCQxKHQpfSxhLnBhcnNlPWZ1bmN0aW9uKHQpe3ZhciBhPW5ldyBTVkdQYXRoRGF0YVBhcnNlciQkMSxyPVtdO3JldHVybiBhLnBhcnNlKHQsciksYS5maW5pc2gocikscn0sYS5DTE9TRV9QQVRIPTEsYS5NT1ZFX1RPPTIsYS5IT1JJWl9MSU5FX1RPPTQsYS5WRVJUX0xJTkVfVE89OCxhLkxJTkVfVE89MTYsYS5DVVJWRV9UTz0zMixhLlNNT09USF9DVVJWRV9UTz02NCxhLlFVQURfVE89MTI4LGEuU01PT1RIX1FVQURfVE89MjU2LGEuQVJDPTUxMixhLkxJTkVfQ09NTUFORFM9YS5MSU5FX1RPfGEuSE9SSVpfTElORV9UT3xhLlZFUlRfTElORV9UTyxhLkRSQVdJTkdfQ09NTUFORFM9YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPfGEuTElORV9UT3xhLkNVUlZFX1RPfGEuU01PT1RIX0NVUlZFX1RPfGEuUVVBRF9UT3xhLlNNT09USF9RVUFEX1RPfGEuQVJDLGF9KFRyYW5zZm9ybWFibGVTVkcpLENPTU1BTkRfQVJHX0NPVU5UUz0oKF9hPXt9KVtTVkdQYXRoRGF0YS5NT1ZFX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkxJTkVfVE9dPTIsX2FbU1ZHUGF0aERhdGEuSE9SSVpfTElORV9UT109MSxfYVtTVkdQYXRoRGF0YS5WRVJUX0xJTkVfVE9dPTEsX2FbU1ZHUGF0aERhdGEuQ0xPU0VfUEFUSF09MCxfYVtTVkdQYXRoRGF0YS5RVUFEX1RPXT00LF9hW1NWR1BhdGhEYXRhLlNNT09USF9RVUFEX1RPXT0yLF9hW1NWR1BhdGhEYXRhLkNVUlZFX1RPXT02LF9hW1NWR1BhdGhEYXRhLlNNT09USF9DVVJWRV9UT109NCxfYVtTVkdQYXRoRGF0YS5BUkNdPTcsX2EpLFdTUD1cIiBcIjtmdW5jdGlvbiBlbmNvZGVTVkdQYXRoJCQxKHQpe3ZhciBhPVwiXCI7QXJyYXkuaXNBcnJheSh0KXx8KHQ9W3RdKTtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGU9dFtyXTtpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5DTE9TRV9QQVRIKWErPVwielwiO2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuSE9SSVpfTElORV9UTylhKz0oZS5yZWxhdGl2ZT9cImhcIjpcIkhcIikrZS54O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuVkVSVF9MSU5FX1RPKWErPShlLnJlbGF0aXZlP1widlwiOlwiVlwiKStlLnk7ZWxzZSBpZihlLnR5cGU9PT1TVkdQYXRoRGF0YS5NT1ZFX1RPKWErPShlLnJlbGF0aXZlP1wibVwiOlwiTVwiKStlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLkxJTkVfVE8pYSs9KGUucmVsYXRpdmU/XCJsXCI6XCJMXCIpK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuQ1VSVkVfVE8pYSs9KGUucmVsYXRpdmU/XCJjXCI6XCJDXCIpK2UueDErV1NQK2UueTErV1NQK2UueDIrV1NQK2UueTIrV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX0NVUlZFX1RPKWErPShlLnJlbGF0aXZlP1wic1wiOlwiU1wiKStlLngyK1dTUCtlLnkyK1dTUCtlLngrV1NQK2UueTtlbHNlIGlmKGUudHlwZT09PVNWR1BhdGhEYXRhLlFVQURfVE8pYSs9KGUucmVsYXRpdmU/XCJxXCI6XCJRXCIpK2UueDErV1NQK2UueTErV1NQK2UueCtXU1ArZS55O2Vsc2UgaWYoZS50eXBlPT09U1ZHUGF0aERhdGEuU01PT1RIX1FVQURfVE8pYSs9KGUucmVsYXRpdmU/XCJ0XCI6XCJUXCIpK2UueCtXU1ArZS55O2Vsc2V7aWYoZS50eXBlIT09U1ZHUGF0aERhdGEuQVJDKXRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBjb21tYW5kIHR5cGUgXCInK2UudHlwZSsnXCIgYXQgaW5kZXggJytyK1wiLlwiKTthKz0oZS5yZWxhdGl2ZT9cImFcIjpcIkFcIikrZS5yWCtXU1ArZS5yWStXU1ArZS54Um90K1dTUCsgK2UubEFyY0ZsYWcrV1NQKyArZS5zd2VlcEZsYWcrV1NQK2UueCtXU1ArZS55fX1yZXR1cm4gYX12YXIgU1ZHUGF0aERhdGEkMT1mdW5jdGlvbih0KXtmdW5jdGlvbiBhKHIpe3ZhciBlPXQuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gZS5jb21tYW5kcz1cInN0cmluZ1wiPT10eXBlb2Ygcj9hLnBhcnNlKHIpOnIsZX1yZXR1cm4gX19leHRlbmRzKGEsdCksYS5wcm90b3R5cGUuZW5jb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGEuZW5jb2RlKHRoaXMuY29tbWFuZHMpfSxhLnByb3RvdHlwZS5nZXRCb3VuZHM9ZnVuY3Rpb24oKXt2YXIgdD1TVkdQYXRoRGF0YVRyYW5zZm9ybWVyLkNBTENVTEFURV9CT1VORFMoKTtyZXR1cm4gdGhpcy50cmFuc2Zvcm0odCksdH0sYS5wcm90b3R5cGUudHJhbnNmb3JtPWZ1bmN0aW9uKHQpe2Zvcih2YXIgYT1bXSxyPTAsZT10aGlzLmNvbW1hbmRzO3I8ZS5sZW5ndGg7cisrKXt2YXIgbj10KGVbcl0pO0FycmF5LmlzQXJyYXkobik/YS5wdXNoLmFwcGx5KGEsbik6YS5wdXNoKG4pfXJldHVybiB0aGlzLmNvbW1hbmRzPWEsdGhpc30sYS5lbmNvZGU9ZnVuY3Rpb24odCl7cmV0dXJuIGVuY29kZVNWR1BhdGgkJDEodCl9LGEucGFyc2U9ZnVuY3Rpb24odCl7dmFyIGE9bmV3IFNWR1BhdGhEYXRhUGFyc2VyJCQxLHI9W107cmV0dXJuIGEucGFyc2UodCxyKSxhLmZpbmlzaChyKSxyfSxhLkNMT1NFX1BBVEg9MSxhLk1PVkVfVE89MixhLkhPUklaX0xJTkVfVE89NCxhLlZFUlRfTElORV9UTz04LGEuTElORV9UTz0xNixhLkNVUlZFX1RPPTMyLGEuU01PT1RIX0NVUlZFX1RPPTY0LGEuUVVBRF9UTz0xMjgsYS5TTU9PVEhfUVVBRF9UTz0yNTYsYS5BUkM9NTEyLGEuTElORV9DT01NQU5EUz1hLkxJTkVfVE98YS5IT1JJWl9MSU5FX1RPfGEuVkVSVF9MSU5FX1RPLGEuRFJBV0lOR19DT01NQU5EUz1hLkhPUklaX0xJTkVfVE98YS5WRVJUX0xJTkVfVE98YS5MSU5FX1RPfGEuQ1VSVkVfVE98YS5TTU9PVEhfQ1VSVkVfVE98YS5RVUFEX1RPfGEuU01PT1RIX1FVQURfVE98YS5BUkMsYX0oVHJhbnNmb3JtYWJsZVNWRyksQ09NTUFORF9BUkdfQ09VTlRTJDE9KChfYSQxPXt9KVtTVkdQYXRoRGF0YSQxLk1PVkVfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkxJTkVfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkhPUklaX0xJTkVfVE9dPTEsX2EkMVtTVkdQYXRoRGF0YSQxLlZFUlRfTElORV9UT109MSxfYSQxW1NWR1BhdGhEYXRhJDEuQ0xPU0VfUEFUSF09MCxfYSQxW1NWR1BhdGhEYXRhJDEuUVVBRF9UT109NCxfYSQxW1NWR1BhdGhEYXRhJDEuU01PT1RIX1FVQURfVE9dPTIsX2EkMVtTVkdQYXRoRGF0YSQxLkNVUlZFX1RPXT02LF9hJDFbU1ZHUGF0aERhdGEkMS5TTU9PVEhfQ1VSVkVfVE9dPTQsX2EkMVtTVkdQYXRoRGF0YSQxLkFSQ109NyxfYSQxKTtleHBvcnR7U1ZHUGF0aERhdGEkMSBhcyBTVkdQYXRoRGF0YSxDT01NQU5EX0FSR19DT1VOVFMkMSBhcyBDT01NQU5EX0FSR19DT1VOVFMsZW5jb2RlU1ZHUGF0aCQkMSBhcyBlbmNvZGVTVkdQYXRoLFNWR1BhdGhEYXRhUGFyc2VyJCQxIGFzIFNWR1BhdGhEYXRhUGFyc2VyLFNWR1BhdGhEYXRhVHJhbnNmb3JtZXJ9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U1ZHUGF0aERhdGEubW9kdWxlLmpzLm1hcFxuIiwiOyhmdW5jdGlvbiBpbmplY3QoY2xlYW4sIHByZWNpc2lvbiwgdW5kZWYpIHtcblxuICB2YXIgaXNBcnJheSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICB9O1xuXG4gIHZhciBkZWZpbmVkID0gZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBhICE9PSB1bmRlZjtcbiAgfTtcblxuICBmdW5jdGlvbiBWZWMyKHgsIHkpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmVjMikpIHtcbiAgICAgIHJldHVybiBuZXcgVmVjMih4LCB5KTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgeSA9IHhbMV07XG4gICAgICB4ID0geFswXTtcbiAgICB9IGVsc2UgaWYoJ29iamVjdCcgPT09IHR5cGVvZiB4ICYmIHgpIHtcbiAgICAgIHkgPSB4Lnk7XG4gICAgICB4ID0geC54O1xuICAgIH1cblxuICAgIHRoaXMueCA9IFZlYzIuY2xlYW4oeCB8fCAwKTtcbiAgICB0aGlzLnkgPSBWZWMyLmNsZWFuKHkgfHwgMCk7XG4gIH1cblxuICBWZWMyLnByb3RvdHlwZSA9IHtcbiAgICBjaGFuZ2UgOiBmdW5jdGlvbihmbikge1xuICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKGZuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IFtmbl07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vYnNlcnZlcnMgJiYgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGk9dGhpcy5vYnNlcnZlcnMubGVuZ3RoLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldKHRoaXMsIGZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaWdub3JlIDogZnVuY3Rpb24oZm4pIHtcbiAgICAgIGlmICh0aGlzLm9ic2VydmVycykge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMub2JzZXJ2ZXJzLCBsID0gby5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUobC0tKSB7XG4gICAgICAgICAgICBvW2xdID09PSBmbiAmJiBvLnNwbGljZShsLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBzZXQgeCBhbmQgeVxuICAgIHNldDogZnVuY3Rpb24oeCwgeSwgbm90aWZ5KSB7XG4gICAgICBpZignbnVtYmVyJyAhPSB0eXBlb2YgeCkge1xuICAgICAgICBub3RpZnkgPSB5O1xuICAgICAgICB5ID0geC55O1xuICAgICAgICB4ID0geC54O1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnggPT09IHggJiYgdGhpcy55ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3JpZyA9IG51bGw7XG4gICAgICBpZiAobm90aWZ5ICE9PSBmYWxzZSAmJiB0aGlzLm9ic2VydmVycyAmJiB0aGlzLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgb3JpZyA9IHRoaXMuY2xvbmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0gVmVjMi5jbGVhbih4KTtcbiAgICAgIHRoaXMueSA9IFZlYzIuY2xlYW4oeSk7XG5cbiAgICAgIGlmKG5vdGlmeSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG9yaWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyByZXNldCB4IGFuZCB5IHRvIHplcm9cbiAgICB6ZXJvIDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoMCwgMCk7XG4gICAgfSxcblxuICAgIC8vIHJldHVybiBhIG5ldyB2ZWN0b3Igd2l0aCB0aGUgc2FtZSBjb21wb25lbnQgdmFsdWVzXG4gICAgLy8gYXMgdGhpcyBvbmVcbiAgICBjbG9uZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54LCB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICAvLyBuZWdhdGUgdGhlIHZhbHVlcyBvZiB0aGlzIHZlY3RvclxuICAgIG5lZ2F0ZSA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgtdGhpcy54LCAtdGhpcy55KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWRkIHRoZSBpbmNvbWluZyBgdmVjMmAgdmVjdG9yIHRvIHRoaXMgdmVjdG9yXG4gICAgYWRkIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG5cbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4ICs9IHRoaXMueDtcbiAgICAgIHkgKz0gdGhpcy55O1xuXG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTdWJ0cmFjdCB0aGUgaW5jb21pbmcgYHZlYzJgIGZyb20gdGhpcyB2ZWN0b3JcbiAgICBzdWJ0cmFjdCA6IGZ1bmN0aW9uKHgsIHksIHJldHVybk5ldykge1xuICAgICAgaWYgKHR5cGVvZiB4ICE9ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybk5ldyA9IHk7XG4gICAgICAgIGlmIChpc0FycmF5KHgpKSB7XG4gICAgICAgICAgeSA9IHhbMV07XG4gICAgICAgICAgeCA9IHhbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeSA9IHgueTtcbiAgICAgICAgICB4ID0geC54O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHggPSB0aGlzLnggLSB4O1xuICAgICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICAgIGlmICghcmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJldHVybiBhIG5ldyB2ZWN0b3IgaWYgYHJldHVybk5ld2AgaXMgdHJ1dGh5XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHgsIHkpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBseSB0aGlzIHZlY3RvciBieSB0aGUgaW5jb21pbmcgYHZlYzJgXG4gICAgbXVsdGlwbHkgOiBmdW5jdGlvbih4LCB5LCByZXR1cm5OZXcpIHtcbiAgICAgIGlmICh0eXBlb2YgeCAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICBpZiAoaXNBcnJheSh4KSkge1xuICAgICAgICAgIHkgPSB4WzFdO1xuICAgICAgICAgIHggPSB4WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHkgPSB4Lnk7XG4gICAgICAgICAgeCA9IHgueDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeSAhPSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm5OZXcgPSB5O1xuICAgICAgICB5ID0geDtcbiAgICAgIH1cblxuICAgICAgeCAqPSB0aGlzLng7XG4gICAgICB5ICo9IHRoaXMueTtcblxuICAgICAgaWYgKCFyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHgsIHkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJvdGF0ZSB0aGlzIHZlY3Rvci4gQWNjZXB0cyBhIGBSb3RhdGlvbmAgb3IgYW5nbGUgaW4gcmFkaWFucy5cbiAgICAvL1xuICAgIC8vIFBhc3NpbmcgYSB0cnV0aHkgYGludmVyc2VgIHdpbGwgY2F1c2UgdGhlIHJvdGF0aW9uIHRvXG4gICAgLy8gYmUgcmV2ZXJzZWQuXG4gICAgLy9cbiAgICAvLyBJZiBgcmV0dXJuTmV3YCBpcyB0cnV0aHksIGEgbmV3XG4gICAgLy8gYFZlYzJgIHdpbGwgYmUgY3JlYXRlZCB3aXRoIHRoZSB2YWx1ZXMgcmVzdWx0aW5nIGZyb21cbiAgICAvLyB0aGUgcm90YXRpb24uIE90aGVyd2lzZSB0aGUgcm90YXRpb24gd2lsbCBiZSBhcHBsaWVkXG4gICAgLy8gdG8gdGhpcyB2ZWN0b3IgZGlyZWN0bHksIGFuZCB0aGlzIHZlY3RvciB3aWxsIGJlIHJldHVybmVkLlxuICAgIHJvdGF0ZSA6IGZ1bmN0aW9uKHIsIGludmVyc2UsIHJldHVybk5ldykge1xuICAgICAgdmFyXG4gICAgICB4ID0gdGhpcy54LFxuICAgICAgeSA9IHRoaXMueSxcbiAgICAgIGNvcyA9IE1hdGguY29zKHIpLFxuICAgICAgc2luID0gTWF0aC5zaW4ociksXG4gICAgICByeCwgcnk7XG5cbiAgICAgIGludmVyc2UgPSAoaW52ZXJzZSkgPyAtMSA6IDE7XG5cbiAgICAgIHJ4ID0gY29zICogeCAtIChpbnZlcnNlICogc2luKSAqIHk7XG4gICAgICByeSA9IChpbnZlcnNlICogc2luKSAqIHggKyBjb3MgKiB5O1xuXG4gICAgICBpZiAocmV0dXJuTmV3KSB7XG4gICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKHJ4LCByeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQocngsIHJ5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyB2ZWN0b3JcbiAgICBsZW5ndGggOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBsZW5ndGggc3F1YXJlZC4gRm9yIHBlcmZvcm1hbmNlLCB1c2UgdGhpcyBpbnN0ZWFkIG9mIGBWZWMyI2xlbmd0aGAgKGlmIHBvc3NpYmxlKS5cbiAgICBsZW5ndGhTcXVhcmVkIDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcbiAgICAgIHJldHVybiB4KngreSp5O1xuICAgIH0sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlbiB0aGlzIGBWZWMyYCBhbmQgdGhlIGluY29taW5nIHZlYzIgdmVjdG9yXG4gICAgLy8gYW5kIHJldHVybiBhIHNjYWxhclxuICAgIGRpc3RhbmNlIDogZnVuY3Rpb24odmVjMikge1xuICAgICAgdmFyIHggPSB0aGlzLnggLSB2ZWMyLng7XG4gICAgICB2YXIgeSA9IHRoaXMueSAtIHZlYzIueTtcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcbiAgICB9LFxuXG4gICAgLy8gR2l2ZW4gQXJyYXkgb2YgVmVjMiwgZmluZCBjbG9zZXN0IHRvIHRoaXMgVmVjMi5cbiAgICBuZWFyZXN0IDogZnVuY3Rpb24ob3RoZXJzKSB7XG4gICAgICB2YXJcbiAgICAgIHNob3J0ZXN0RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFLFxuICAgICAgbmVhcmVzdCA9IG51bGwsXG4gICAgICBjdXJyZW50RGlzdGFuY2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBvdGhlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY3VycmVudERpc3RhbmNlID0gdGhpcy5kaXN0YW5jZShvdGhlcnNbaV0pO1xuICAgICAgICBpZiAoY3VycmVudERpc3RhbmNlIDw9IHNob3J0ZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICBzaG9ydGVzdERpc3RhbmNlID0gY3VycmVudERpc3RhbmNlO1xuICAgICAgICAgIG5lYXJlc3QgPSBvdGhlcnNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5lYXJlc3Q7XG4gICAgfSxcblxuICAgIC8vIENvbnZlcnQgdGhpcyB2ZWN0b3IgaW50byBhIHVuaXQgdmVjdG9yLlxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aC5cbiAgICBub3JtYWxpemUgOiBmdW5jdGlvbihyZXR1cm5OZXcpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuXG4gICAgICAvLyBDb2xsZWN0IGEgcmF0aW8gdG8gc2hyaW5rIHRoZSB4IGFuZCB5IGNvb3Jkc1xuICAgICAgdmFyIGludmVydGVkTGVuZ3RoID0gKGxlbmd0aCA8IE51bWJlci5NSU5fVkFMVUUpID8gMCA6IDEvbGVuZ3RoO1xuXG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICAvLyBDb252ZXJ0IHRoZSBjb29yZHMgdG8gYmUgZ3JlYXRlciB0aGFuIHplcm9cbiAgICAgICAgLy8gYnV0IHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byAxLjBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHRoaXMueCAqIGludmVydGVkTGVuZ3RoLCB0aGlzLnkgKiBpbnZlcnRlZExlbmd0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh0aGlzLnggKiBpbnZlcnRlZExlbmd0aCwgdGhpcy55ICogaW52ZXJ0ZWRMZW5ndGgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYW5vdGhlciBgVmVjMmAncyBjb21wb25lbnRzIG1hdGNoIHRoaXMgb25lJ3NcbiAgICAvLyBhbHNvIGFjY2VwdHMgMiBzY2FsYXJzXG4gICAgZXF1YWwgOiBmdW5jdGlvbih2LCB3KSB7XG4gICAgICBpZiAodHlwZW9mIHYgIT0gJ251bWJlcicpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkodikpIHtcbiAgICAgICAgICB3ID0gdlsxXTtcbiAgICAgICAgICB2ID0gdlswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ID0gdi55O1xuICAgICAgICAgIHYgPSB2Lng7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChWZWMyLmNsZWFuKHYpID09PSB0aGlzLnggJiYgVmVjMi5jbGVhbih3KSA9PT0gdGhpcy55KTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCB0aGF0IGNvbnRhaW5zIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZlxuICAgIC8vIGVhY2ggb2YgdGhpcyB2ZWN0b3IncyBwYXJ0c1xuICAgIGFicyA6IGZ1bmN0aW9uKHJldHVybk5ldykge1xuICAgICAgdmFyIHggPSBNYXRoLmFicyh0aGlzLngpLCB5ID0gTWF0aC5hYnModGhpcy55KTtcblxuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gbmV3ICh0aGlzLmNvbnN0cnVjdG9yKSh4LCB5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCh4LCB5KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIGEgbmV3IGBWZWMyYCBjb25zaXN0aW5nIG9mIHRoZSBzbWFsbGVzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtaW4gOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPCB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPCB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybiBhIG5ldyBgVmVjMmAgY29uc2lzdGluZyBvZiB0aGUgbGFyZ2VzdCB2YWx1ZXNcbiAgICAvLyBmcm9tIHRoaXMgdmVjdG9yIGFuZCB0aGUgaW5jb21pbmdcbiAgICAvL1xuICAgIC8vIFdoZW4gcmV0dXJuTmV3IGlzIHRydXRoeSwgYSBuZXcgYFZlYzJgIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAvLyBvdGhlcndpc2UgdGhlIG1pbmltdW0gdmFsdWVzIGluIGVpdGhlciB0aGlzIG9yIGB2YCB3aWxsXG4gICAgLy8gYmUgYXBwbGllZCB0byB0aGlzIHZlY3Rvci5cbiAgICBtYXggOiBmdW5jdGlvbih2LCByZXR1cm5OZXcpIHtcbiAgICAgIHZhclxuICAgICAgdHggPSB0aGlzLngsXG4gICAgICB0eSA9IHRoaXMueSxcbiAgICAgIHZ4ID0gdi54LFxuICAgICAgdnkgPSB2LnksXG4gICAgICB4ID0gdHggPiB2eCA/IHR4IDogdngsXG4gICAgICB5ID0gdHkgPiB2eSA/IHR5IDogdnk7XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoeCwgeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoeCwgeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENsYW1wIHZhbHVlcyBpbnRvIGEgcmFuZ2UuXG4gICAgLy8gSWYgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgYXJlIGxvd2VyIHRoYW4gdGhlIGBsb3dgJ3NcbiAgICAvLyB2YWx1ZXMsIHRoZW4gcmFpc2UgdGhlbS4gIElmIHRoZXkgYXJlIGhpZ2hlciB0aGFuXG4gICAgLy8gYGhpZ2hgJ3MgdGhlbiBsb3dlciB0aGVtLlxuICAgIC8vXG4gICAgLy8gUGFzc2luZyByZXR1cm5OZXcgYXMgdHJ1ZSB3aWxsIGNhdXNlIGEgbmV3IFZlYzIgdG8gYmVcbiAgICAvLyByZXR1cm5lZC4gIE90aGVyd2lzZSwgdGhpcyB2ZWN0b3IncyB2YWx1ZXMgd2lsbCBiZSBjbGFtcGVkXG4gICAgY2xhbXAgOiBmdW5jdGlvbihsb3csIGhpZ2gsIHJldHVybk5ldykge1xuICAgICAgdmFyIHJldCA9IHRoaXMubWluKGhpZ2gsIHRydWUpLm1heChsb3cpO1xuICAgICAgaWYgKHJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHJldC54LCByZXQueSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm0gbGluZWFyIGludGVycG9sYXRpb24gYmV0d2VlbiB0d28gdmVjdG9yc1xuICAgIC8vIGFtb3VudCBpcyBhIGRlY2ltYWwgYmV0d2VlbiAwIGFuZCAxXG4gICAgbGVycCA6IGZ1bmN0aW9uKHZlYywgYW1vdW50LCByZXR1cm5OZXcpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZCh2ZWMuc3VidHJhY3QodGhpcywgdHJ1ZSkubXVsdGlwbHkoYW1vdW50KSwgcmV0dXJuTmV3KTtcbiAgICB9LFxuXG4gICAgLy8gR2V0IHRoZSBza2V3IHZlY3RvciBzdWNoIHRoYXQgZG90KHNrZXdfdmVjLCBvdGhlcikgPT0gY3Jvc3ModmVjLCBvdGhlcilcbiAgICBza2V3IDogZnVuY3Rpb24ocmV0dXJuTmV3KSB7XG4gICAgICBpZiAoIXJldHVybk5ldykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoLXRoaXMueSwgdGhpcy54KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikoLXRoaXMueSwgdGhpcy54KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIGRvdCA6IGZ1bmN0aW9uKGIpIHtcbiAgICAgIHJldHVybiBWZWMyLmNsZWFuKHRoaXMueCAqIGIueCArIGIueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIC8vIGNhbGN1bGF0ZSB0aGUgcGVycGVuZGljdWxhciBkb3QgcHJvZHVjdCBiZXR3ZWVuXG4gICAgLy8gdGhpcyB2ZWN0b3IgYW5kIHRoZSBpbmNvbWluZ1xuICAgIHBlcnBEb3QgOiBmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gVmVjMi5jbGVhbih0aGlzLnggKiBiLnkgLSB0aGlzLnkgKiBiLngpO1xuICAgIH0sXG5cbiAgICAvLyBEZXRlcm1pbmUgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlYzJzXG4gICAgYW5nbGVUbyA6IGZ1bmN0aW9uKHZlYykge1xuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy5wZXJwRG90KHZlYyksIHRoaXMuZG90KHZlYykpO1xuICAgIH0sXG5cbiAgICAvLyBEaXZpZGUgdGhpcyB2ZWN0b3IncyBjb21wb25lbnRzIGJ5IGEgc2NhbGFyXG4gICAgZGl2aWRlIDogZnVuY3Rpb24oeCwgeSwgcmV0dXJuTmV3KSB7XG4gICAgICBpZiAodHlwZW9mIHggIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgaWYgKGlzQXJyYXkoeCkpIHtcbiAgICAgICAgICB5ID0geFsxXTtcbiAgICAgICAgICB4ID0geFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5ID0geC55O1xuICAgICAgICAgIHggPSB4Lng7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHkgIT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuTmV3ID0geTtcbiAgICAgICAgeSA9IHg7XG4gICAgICB9XG5cbiAgICAgIGlmICh4ID09PSAwIHx8IHkgPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXZpc2lvbiBieSB6ZXJvJylcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTmFOKHgpIHx8IGlzTmFOKHkpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmFOIGRldGVjdGVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXR1cm5OZXcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAodGhpcy5jb25zdHJ1Y3RvcikodGhpcy54IC8geCwgdGhpcy55IC8geSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnNldCh0aGlzLnggLyB4LCB0aGlzLnkgLyB5KTtcbiAgICB9LFxuXG4gICAgaXNQb2ludE9uTGluZSA6IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHJldHVybiAoc3RhcnQueSAtIHRoaXMueSkgKiAoc3RhcnQueCAtIGVuZC54KSA9PT1cbiAgICAgICAgICAgICAoc3RhcnQueSAtIGVuZC55KSAqIChzdGFydC54IC0gdGhpcy54KTtcbiAgICB9LFxuXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW3RoaXMueCwgdGhpcy55XTtcbiAgICB9LFxuXG4gICAgZnJvbUFycmF5OiBmdW5jdGlvbihhcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0KGFycmF5WzBdLCBhcnJheVsxXSk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7eDogdGhpcy54LCB5OiB0aGlzLnl9O1xuICAgIH0sXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICcoJyArIHRoaXMueCArICcsICcgKyB0aGlzLnkgKyAnKSc7XG4gICAgfSxcbiAgICBjb25zdHJ1Y3RvciA6IFZlYzJcbiAgfTtcblxuICBWZWMyLmZyb21BcnJheSA9IGZ1bmN0aW9uKGFycmF5LCBjdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoY3RvciB8fCBWZWMyKShhcnJheVswXSwgYXJyYXlbMV0pO1xuICB9O1xuXG4gIC8vIEZsb2F0aW5nIHBvaW50IHN0YWJpbGl0eVxuICBWZWMyLnByZWNpc2lvbiA9IHByZWNpc2lvbiB8fCA4O1xuICB2YXIgcCA9IE1hdGgucG93KDEwLCBWZWMyLnByZWNpc2lvbik7XG5cbiAgVmVjMi5jbGVhbiA9IGNsZWFuIHx8IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hTiBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmICghaXNGaW5pdGUodmFsKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0eSBkZXRlY3RlZCcpO1xuICAgIH1cblxuICAgIGlmKE1hdGgucm91bmQodmFsKSA9PT0gdmFsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIHApL3A7XG4gIH07XG5cbiAgVmVjMi5pbmplY3QgPSBpbmplY3Q7XG5cbiAgaWYoIWNsZWFuKSB7XG4gICAgVmVjMi5mYXN0ID0gaW5qZWN0KGZ1bmN0aW9uIChrKSB7IHJldHVybiBrOyB9KTtcblxuICAgIC8vIEV4cG9zZSwgYnV0IGFsc28gYWxsb3cgY3JlYXRpbmcgYSBmcmVzaCBWZWMyIHN1YmNsYXNzLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gVmVjMjtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LlZlYzIgPSB3aW5kb3cuVmVjMiB8fCBWZWMyO1xuICAgIH1cbiAgfVxuICByZXR1cm4gVmVjMjtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9