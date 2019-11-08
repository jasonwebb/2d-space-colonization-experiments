import Defaults from './Defaults';
import KDBush from 'kdbush';
import * as Vec2 from 'vec2';
import { random } from './Utilities';
import { Delaunay } from 'd3-delaunay';

export default class Network {
  constructor(ctx, settings) {
    this.ctx = ctx;
    this.settings = Object.assign({}, Defaults, settings);

    this.sources = [];  // sources (AuxinSources) attract vein nodes
    this.nodes = [];    // nodes (VeinNodes) are connected to form veins

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
        // For open venation, only associate the closest vein node
        case "Open":
          let nearbyNodes = this.getNearbyNodes(source),
            closestNode = this.getClosestNode(source, nearbyNodes);

          // Associate it with this auxin source
          if(closestNode != null) {
            closestNode.influencedBy.push(sourceID);
          }

          break;


        // For closed venation, associate with nodes within relative neighborhood
        case "Closed":
          let nodesWithSource = this.nodes.concat(source);

          // Only move forward if a Delaunay triangulation is possible
          if(nodesWithSource.length < 3) {
            continue;
          }

          let delaunay = Delaunay.from(nodesWithSource, p => p.position.x, p => p.position.y),
            adjacentNeighbors = delaunay.neighbors(nodesWithSource.length - 1),
            adjacentNeighborIDs = [];  // get neighbors adjacent to source

          for(let id of adjacentNeighbors) {
            adjacentNeighborIDs.push(id);
          }

          for(let [nodeID, testNode] of adjacentNeighborIDs.map(id => this.nodes[id]).entries()) {  // testNode = v
            for(let secondNode of adjacentNeighborIDs.map(id => this.nodes[id])) {  // secondNode = u
              const vsDistance = testNode.position.distance(source.position),     // ||v - s||
                usDistance = secondNode.position.distance(source.position),       // ||u - s||
                vuDistance = testNode.position.distance(secondNode.position);  // ||v - u||

              // testNode is a relative neighbor of source if and only if
              // ||v - s|| < max{||u - s||, ||v - u||}
              if(vsDistance < Math.max(usDistance, vuDistance)) {
                if(vsDistance < this.settings.AttractionDistance) {
                  testNode.influencedBy.push(source);  // influencedBy helps to point next vein node in the right direction
                  source.isInfluencing.push(nodeID);   // isInfluencing helps to track when nodes have reached their sources

                  if(vsDistance < this.settings.KillDistance) {
                    testNode.hasReachedSource = true;
                  }
                }
              }
            }
          }

          break;
      }
    }

    // Grow the network by adding new vein nodes onto any nodes being influenced by sources
    for(let node of this.nodes) {
      if(this.nodes.length < 2) {
        this.nodes.push(node.getNextNode());

      } else if(node.influencedBy.length > 0) {
        let averageDirection = this.getAverageDirection(node, node.influencedBy.map(id => this.sources[id]));
        let nextNode = node.getNextNode(averageDirection);
        this.nodes.push(nextNode);
      }
    }

    // Remove any auxin sources that have been reached by their associated vein nodes
    for(let [sourceID, source] of this.sources.entries()) {
      switch(this.settings.VenationType) {
        // For open venation, remove the source as soon as any vein node reaches it
        case "Open":
          if(source.reached) {
            this.sources.splice(sourceID, 1);
          }

          break;

        // For closed venation, remove the source only when all associated vein nodes have reached it
        case "Closed":
          if(source.isInfluencing.length > 0) {
            let allNodesReached = true;

            for(let node of source.isInfluencing.map(id => this.nodes[id])) {
              if(!node.hasReachedSource) {
                allNodesReached = false;
              }
            }

            if(allNodesReached) {
              this.sources.splice(sourceID, 1);
            }

            source.isInfluencing = [];
          }

          break;
      }
    }

    // Rebuild spatial indices
    this.buildSpatialIndices();
  }

  draw() {
    // Draw vein nodes
    if(this.settings.ShowVeins) {
      for(let node of this.nodes) {
        node.draw();
      }
    }

    // Draw auxin sources
    if(this.settings.ShowSources) {
      for(let source of this.sources) {
        source.draw();
      }
    }
  }

  getNearbyNodes(source) {
    return this.nodesIndex.within(
      source.position.x,
      source.position.y,
      this.settings.AttractionDistance
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
    let averageDirection = new Vec2(0,0);

    // for(let source of node.influencedBy.map(id => this.sources[id])) {
    // for(let source of node.influencedBy) {
    for(let source of nearbySources) {
      averageDirection.add(source.position.subtract(node.position, true).normalize());
    }

    // Add small amount of random "jitter" to avoid getting stuck between two auxin sources and endlessly generating nodes in the same place
    // (Credit to Davide Prati (edap) for the idea, seen in ofxSpaceColonization)
    averageDirection.add(new Vec2(random(-.1, .1), random(-.1, .1))).normalize();

    averageDirection.divide(node.influencedBy.length).normalize();

    return averageDirection;
  }

  buildSpatialIndices() {
    this.nodesIndex = new KDBush(this.nodes, p => p.position.x, p => p.position.y);
  }

  toggleVeins() {
    this.settings.ShowVeins = !this.settings.ShowVeins;
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

  togglePause() {
    this.settings.IsPaused = !this.settings.IsPaused;
  }
}