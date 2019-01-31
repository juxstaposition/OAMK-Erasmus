'use strict'

var varcoursecoursIdController = require('./coursecoursIdControllerService');

module.exports.funccoursecoursIdPARAMETERS = function funccoursecoursIdPARAMETERS(req, res, next) {
  varcoursecoursIdController.funccoursecoursIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.courseGetId = function courseGetId(req, res, next) {
  varcoursecoursIdController.courseGetId(req.swagger.params, res, next);
};