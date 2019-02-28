'use strict'
const data = require('../dataStore');

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsstudentsIdPARAMETERS'
  });
};

module.exports.getStudentId = function getStudentId(req, res, next) {
	const studFound = data.findById(req.studentsId.value,"student");
	
	if (studFound === undefined)
	{
		res.sendStatus(404);
		console.log("could not get student with id: ",req.studentsId.value);
	}
	else
	{
		res.json(data.getById(studFound,"student"));
		console.log("student response send, id of student: ",req.studentsId.value);
	}
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {
	const studFound = data.findById(req.studentsId.value,"student");
	if( studFound === undefined){
		res.sendStatus(404);
		console.log("In the 'database' is no occurence of student with Id: ",req.studentsId.value);
	}
	else{
		data.deleteById(studFound,"student");
		res.send("Student deleted");
		console.log("deleted student with id: ",req.studentsId.value);
	}
};

module.exports.studentsPut = function studentsPut(req, res, next) {
  res.send("put student works");
};