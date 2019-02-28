'use strict'
const data = require('../dataStore');

module.exports.funccoursecoursIdPARAMETERS = function funccoursecoursIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursecoursIdPARAMETERS'
  });
};

module.exports.courseGetId = function courseGetId(req, res, next) {
  const resultCourse = data.findById(req.coursId.value,"course");

	if (resultCourse === undefined)
	{
		res.sendStatus(404);
		console.log("could not find course with id: ",req.params.courseId);
	}
	else
	{
		res.json(data.getById(resultCourse,"course"));
		console.log("course get by id works");
	}
};