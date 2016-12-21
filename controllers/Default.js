'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.loginGET = function loginGET (req, res, next) {
  Default.loginGET(req.swagger.params, res, next);
};
