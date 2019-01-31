'use strict'

var varstudentsstudentsIdController = require('./studentsstudentsIdControllerService');

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  varstudentsstudentsIdController.funcstudentsstudentsIdPARAMETERS(req.swagger.params, res, next);
};

module.exports.getStudentId = function getStudentId(req, res, next) {
  varstudentsstudentsIdController.getStudentId(req.swagger.params, res, next);
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {
  varstudentsstudentsIdController.deleteStudent(req.swagger.params, res, next);
};

module.exports.studentsPut = function studentsPut(req, res, next) {
  varstudentsstudentsIdController.studentsPut(req.swagger.params, res, next);
};