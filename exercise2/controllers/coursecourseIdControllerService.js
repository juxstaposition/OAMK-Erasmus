'use strict'

const courses = [
  {
  id: 1,
  name:"Web Interfaces",
  description:"Learning api, REST, express, cordova"
  },
  {
  id: 2,
  name:"Mobile Physics",
  description:"Learning data processing of sensors inside mobile devices"
  },
  {
  id: 3,
  name:"Hybrid app developements",
  description:"App developements"
  }
]

module.exports.funccoursecourseIdPARAMETERS = function funccoursecourseIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursecourseIdPARAMETERS'
  });
};

module.exports.courseDelete = function courseDelete(req, res, next) {
  courses.splice(req.courseId.value, 1);
  res.send("course delete works");
};

module.exports.coursePut = function coursePut(req, res, next) {
  res.send({
    message: 'course put works'
  });
};