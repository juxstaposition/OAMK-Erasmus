'use strict'
const data = require('../dataStore');

module.exports.courseGet = function courseGet(req, res, next) {
  res.json(data.getAll("course"))
};

module.exports.coursePost = function coursePost(req, res, next) {
  res.send("course post works");
};