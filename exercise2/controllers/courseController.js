'use strict'

var varcourseController = require('./courseControllerService');

module.exports.courseGet = function courseGet(req, res, next) {
  varcourseController.courseGet(req.swagger.params, res, next);
};

module.exports.coursePost = function coursePost(req, res, next) {
  varcourseController.coursePost(req.swagger.params, res, next);
};