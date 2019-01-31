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
  
module.exports.getAllStudents = function getAllStudents(req, res, next) {
  res.send(students);
};

module.exports.studentsPost = function studentsPost(req, res, next) {
  students.push({
    id:students.length+1,
    name: req.body
  });
  res.send("student post works");
};