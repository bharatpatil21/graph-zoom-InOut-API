'use strict';

let _ = require('lodash');
let Promise = require('bluebird');
let GraphsModel = require('../models/graph').graphModel;
let customError = require('../shared/custom-error');

var data = require('../upload/input-data.json')

module.exports = {
	getGraphData: getGraphData,
	loadData: loadData
};

function getGraphData(cb) {
	// TODO: Might be getting db connection error
	// return GraphsModel.find()
	// 	.then((graph) => {
	// 		if (!states) {
	// 			cb(new customError({ 'custom_error': 'notFound', 'message': 'Graph data not found.' }));
	// 		} else {
	// 			let graphData = [];
	// 			graph.forEach((item) => {
	// 				graphData.push({
	// 					x : item.date,
	// 					y: item.value
	// 					});
	// 			})
	// 			return stateList;
	// 		}
	// 	})
	// 	.then((res) => cb(null, res))
	// 	.catch((err) => cb(err));

	// TODO: local json
	let graphData = [];
	data.forEach((item) => {
		graphData.push({
			x: new Date(item.x),
			y: item.y
		});
	});
	cb(null, graphData);
}

function loadData(cb) {
	let graphObj = new GraphsModel();
	let item = { "x": "2019-10-20T13:05:59.110Z", "y": "73.3" };
	graphObj['data'] = new Date(item.x);
	graphObj['value'] = item.y;
	return graphObj.saveAsync();
	// return Promise.map(data, (item) => {
	// 	console.log('item-----',item)
	// 	let graphObj = new GraphsModel();
	// 	graphObj['data'] = new Date(item.x);
	// 	graphObj['value'] = item.y;
	// 	return graphObj.saveAsync();
	// })
	// 	.then(() => {
	// 		cb();
	// 	});
}

Promise.promisifyAll(module.exports);
