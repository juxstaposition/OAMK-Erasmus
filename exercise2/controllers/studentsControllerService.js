'use strict'
const data = require('../dataStore');
  
module.exports.getAllStudents = function getAllStudents(req, res, next) {
	res.json(data.getAll("student"));
	console.log("get students works"); 
};

module.exports.studentsPost = function studentsPost(req, res, next) {

  res.send("student post works");
};