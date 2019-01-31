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

module.exports.funccoursecoursIdPARAMETERS = function funccoursecoursIdPARAMETERS(req, res, next) {
  res.send({
    message: 'This is the mockup controller for funccoursecoursIdPARAMETERS'
  });
};

module.exports.courseGetId = function courseGetId(req, res, next) {
  res.send(courses[req.coursId.value]);
};