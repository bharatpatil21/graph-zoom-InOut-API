'use strict';

let mongoose = require('mongoose');
let _ = require('lodash');
let getenv = require('getenv');

module.exports = {
  initialize: initialize
};

let isInitialized = false, conn;

function initialize(app) {
  if (!isInitialized) {
    mongoose.Promise = global.Promise;
    const DB_USER = 'graphUser';
    const PASSWORD = encodeURIComponent('gslab@123');
    //mongodb://username:password@host:port/database
    let dbUrl = `mongodb://${DB_USER}:${PASSWORD}@ds345937.mlab.com:45937/mygraph`;
    mongoose.connect(dbUrl, (err, database) => {
      if (err) {
        throw err;
      }
      conn = database;
    });
    isInitialized = true;
  }

  app.use((req, res, next) => {
    req.conn = conn;
    next();
  });
}
