'use strict'
const data = require('../dataStore');

module.exports.funccoursecourseIdPARAMETERS = function funccoursecourseIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursecourseIdPARAMETERS'
  });
};

module.exports.courseDelete = function courseDelete(req, res, next) {
  const message = data.deleteById(req.courseId.value,"course");
	if (message === "could not find course"){
		res.sendStatus(404);
	}
	res.send(message);

};

module.exports.coursePut = function coursePut(req, res, next) {
  res.send({
    message: 'course put works'
  });
};