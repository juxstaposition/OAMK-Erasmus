'use strict'

var vargradesstudentIdController = require('./gradesstudentIdControllerService');

module.exports.funcgradesstudentIdPARAMETERS = function funcgradesstudentIdPARAMETERS(req, res, next) {
  vargradesstudentIdController.funcgradesstudentIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.gradeGetId = function gradeGetId(req, res, next) {
  vargradesstudentIdController.gradeGetId(req.swagger.params, res, next);
};