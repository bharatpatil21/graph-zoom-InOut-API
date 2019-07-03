'use strict';

let _ = require('lodash');
let graphService = require('../services/graph');

module.exports = {
  initialize: initialize
};

function initialize(app) {
    graphService.loadDataAsync()
    .then(() => {
      // Also load inital config if it is not there
      return true;
    })
    .catch((e) => {
      throw e;
    })
}
