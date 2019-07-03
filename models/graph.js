'use strict';

let _ = require('lodash');
let Promise = require('bluebird');
let mongoose = require('mongoose');
mongoose.Promise = Promise;
let mongooseSchema = mongoose.Schema;
Promise.promisifyAll(mongoose);

let Graph = new mongooseSchema({
	date: { type: Date, index: true },
	value: { type: String }
});

Graph.methods.formatResponse = function (dataObj) {
	return _.omit(dataObj, ['__v']);
};

module.exports = {
	graphModel: mongoose.model('graphs', Graph),
};