```
TODO: introduction
```

## About space colonization

```
TODO: technical description of algorithm and application structure
```

See `./core` for common modules:
* Segment - a single segment of a vein
* Source - source of auxin growth hormone
* Network - manages the growth of vein segments based on auxin sources

A couple additional helper modules are also included there:
* KeyboardInteractions - a structure for handling common keyboard commands that every sketch should have
* Utilities - small helper functions like `random` and `lerp`

## Features
* Native [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), specifically the [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) interface, for all drawing
* Vanilla ES6 JavaScript
* Webpack build system with live-reloading dev server

## Packages used
* [vec2](https://www.npmjs.com/package/vec2) for simple, fast 2D vector math
* [Webpack](https://webpack.js.org/) for modern JS (ES6) syntax, code modularization, bundling, and serving locally.

## Install and run notes
1. Run `npm install` to get all packages
2. Run `npm run serve` to start up Webpack and launch the application in a browser window

## TODO
- [X] Create most basic implementation
- [ ] Add configurable support for open vs. closed venation patterns
  * Closed patterns emerge when more than one vein is allowed to grow towards the same auxin source, as though they are "sharing" the auxin.
  * Must also modify the criteria for auxin source removal to wait for all veins to reach, or exit the proximity threshold.
- [ ] Implement configurable birth rates and kill rates
- [ ] Implement static boundary shape (leaf shape) from SVG design
- [ ] Implement dynamic boundary shape to simulate leaf growth
  - [ ] Uniform growth via scaling
  - [ ] Non-uniform growth via shape interpolation (?)
- [ ] Add support for optional environmental force vector (see [ofxSpaceColonization::grow()](https://github.com/edap/ofxSpaceColonization/blob/master/src/ofxSpaceColonization.cpp#L97-L101))
- [ ] Ensure that multiple vein networks can grow independently
- [ ] Document all modules with JSDoc
- [ ] Add support for obstacles that growth must avoid
- [ ] Implement different auxin placement schemes
  - [ ] Random at start of simulation
  - [ ] Place using patterned noise, like Perlin
  - [ ] Place using perfect grid pattern
  - [ ] Inserted in random locations during simulation (perhaps tied to auxin removal?)
  - [ ] Added along margin of shape only
- [ ] Implement spatial index to enable fast knn searching of nearby auxin sources and vein segments
- [ ] Implement varying vein widths
  * Start by setting the terminal vein segments to a minimum thickness, then increasing it gradually as it propagates back through parents
  * Also add jump in thickness between "levels" of veins, i.e. when branches merge (parent has multiple children)

## References
_Articles and papers:_
* [Modeling and visualization of leaf venation patterns](http://algorithmicbotany.org/papers/venation.sig2005.pdf) (PDF) paper by Adam Runions, Martin Fuhrer, Brendan Lane, Pavol Federl, Anne−Gaëlle Rolland−Lagan, and Przemyslaw Prusinkiewicz
* [Modeling Trees with a Space Colonization Algorithm](http://algorithmicbotany.org/papers/colonization.egwnp2007.large.pdf) (PDF) paper by Adam Runions, Brendan Lane, and Przemyslaw Prusinkiewicz
* [Procedurally Generated Trees with Space Colonization Algorithm in XNA C#](http://www.jgallant.com/procedurally-generating-trees-with-space-colonization-algorithm-in-xna/) by Jon Gallant
* [Part 26: Trees](http://www.sea-of-memes.com/LetsCode26/LetsCode26.html) by Michael Goodfellow
* [Hyphae](https://github.com/inconvergent/hyphae) (Python) by Anders Hoff (inconvergent) ([live examples and short writeup](https://inconvergent.net/generative/hyphae/))

_Creative projects:_
* [Hyphae](https://n-e-r-v-o-u-s.com/shop/line.php?code=8) and [Xylem](https://n-e-r-v-o-u-s.com/shop/line.php?code=6) series by Nervous System
  * Also see their [Xylem Experiments and Improvements](https://n-e-r-v-o-u-s.com/blog/?p=1218) write-up
* [Bromeliad](https://n-e-r-v-o-u-s.com/shop/product.php?code=286) and [Calyx](https://n-e-r-v-o-u-s.com/shop/product.php?code=285&search=download) lamps by Nervous System

_Code projects:_
* [ofxSpaceColoinzation](https://github.com/edap/ofxSpaceColonization) add-on for openFrameworks
* [space-colonization](https://github.com/nicknikolov/space-colonization) (JavaScript) by Nick Nikolov
* [Dendrite](https://github.com/mattatz/Dendrite) (Unity) by mattatz

_Videos:_
* [Coding Challenge #17: Fractal Trees - Space Colonization](https://www.youtube.com/watch?v=kKT0v3qhIQY) by Daniel Shiffman ([Github repo](https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_017_SpaceColonizer) with source code for p5.js and Processing)

## Screenshots

```
TODO: screenshots of various experiments
```