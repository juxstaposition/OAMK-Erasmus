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

module.exports.courseGet = function courseGet(req, res, next) {
  res.send(courses);
};

module.exports.coursePost = function coursePost(req, res, next) {
  res.send("course post works");
};