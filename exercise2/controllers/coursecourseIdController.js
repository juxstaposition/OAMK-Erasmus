'use strict'

var varcoursecourseIdController = require('./coursecourseIdControllerService');

module.exports.funccoursecourseIdPARAMETERS = function funccoursecourseIdPARAMETERS(req, res, next) {
  varcoursecourseIdController.funccoursecourseIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.courseDelete = function courseDelete(req, res, next) {
  varcoursecourseIdController.courseDelete(req.swagger.params, res, next);
};

module.exports.coursePut = function coursePut(req, res, next) {
  varcoursecourseIdController.coursePut(req.swagger.params, res, next);
};