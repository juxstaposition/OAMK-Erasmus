'use strict'

var varstudentsController = require('./studentsControllerService');

module.exports.getAllStudents = function getAllStudents(req, res, next) {
  varstudentsController.getAllStudents(req.swagger.params, res, next);
};

module.exports.studentsPost = function studentsPost(req, res, next) {
  varstudentsController.studentsPost(req.swagger.params, res, next);
};