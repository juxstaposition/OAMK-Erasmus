'use strict'

var vargradesController = require('./gradesControllerService');

module.exports.gradePut = function gradePut(req, res, next) {
  vargradesController.gradePut(req.swagger.params, res, next);
};

module.exports.gradeDelete = function gradeDelete(req, res, next) {
  vargradesController.gradeDelete(req.swagger.params, res, next);
};

module.exports.gradePost = function gradePost(req, res, next) {
  vargradesController.gradePost(req.swagger.params, res, next);
};

module.exports.gradeGet = function gradeGet(req, res, next) {
  vargradesController.gradeGet(req.swagger.params, res, next);
};