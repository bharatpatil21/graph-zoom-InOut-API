'use strict';
var multer = require('multer');

let graphService = require('../../services/graph');
let commonService = require('../../services/common');

module.exports = {
	getGraphData: getGraphData
};

function getGraphData(req, res, next) {
	graphService.getGraphDataAsync()
		.then((result) => {
			res.json(commonService.resJson('Graphs fetched successfully.', result));
		})
		.catch(next);
}
