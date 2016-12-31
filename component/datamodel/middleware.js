'use strict';
const Node = require('./graph').Node;

/**
 * @class Middleware
 *
 * Represents a Middleware in the Workspace graph.
 */
class Middleware extends Node {
  constructor(Workspace, name, data) {
    super(Workspace, 'Middleware', name, data);
    Workspace.addNode(this);
  }
  getFunction() {
    return this._content['function'];
  }
  getConfig() {
    return this._content;
  }
};

module.exports = Middleware;
