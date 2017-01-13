// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

/**
  * Defines a model configuration which attaches a model to a facet and a
  * dataSource. It also can extend a model definition with additional configuration.
  *
  * @class ModelConfig
  */
module.exports = function(ModelConfig) {
  ModelConfig.on('dataSourceAttached', function(eventData) {
    ModelConfig.create = function(data, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }
      const id = data.id;
      const connector = ModelConfig.getConnector();
      // TODO(Deepak) - add response handling later
      connector.createModelConfig(options.workpaceId, id, data, cb);
    };
    ModelConfig.find = function(filter, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }
      const id = filter.where.id;
      const connector = ModelConfig.getConnector();
      // TODO(Deepak) - add response handling later
      connector.findModelConfig(options.workpaceId, id, cb);
    };
    ModelConfig.updateAttributes = function(id, data, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }
      const connector = ModelConfig.getConnector();
      connector.updateModelConfig(options.workpaceId, id, data, cb);
    };
  });
};
