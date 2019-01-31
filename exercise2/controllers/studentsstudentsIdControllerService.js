'use strict'

const students = [
	{
		id: 1,
		name:"Student 1",
		adress:"Oulu, Ylioppilaantie 4, 1",
		class:"Web Interfaces"
	},
	{
		id: 2,
		name:"Student 2",
		adress:"Oulu, Ylioppilaantie 4, 2",
		class:"Hybrid Application Developement"
  }];

module.exports.funcstudentsstudentsIdPARAMETERS = function funcstudentsstudentsIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funcstudentsstudentsIdPARAMETERS'
  });
};

module.exports.getStudentId = function getStudentId(req, res, next) {
  res.send(students[req.studentsId.value]);
  res.send("student getById works");
};

module.exports.deleteStudent = function deleteStudent(req, res, next) {
  
  res.send("delete student works");
};

module.exports.studentsPut = function studentsPut(req, res, next) {
  res.send("put student works");
};