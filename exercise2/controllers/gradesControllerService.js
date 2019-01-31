'use strict'

module.exports.gradePut = function gradePut(req, res, next) {
  res.send({
    message: 'grade put works'
  });
};

module.exports.gradeDelete = function gradeDelete(req, res, next) {
  res.send({
    message: 'grade delete works'
  });
};

module.exports.gradePost = function gradePost(req, res, next) {
  res.send({
    message: 'grade post works'
  });
};

module.exports.gradeGet = function gradeGet(req, res, next) {
  res.send({
    message: 'grade get works'
  });
};