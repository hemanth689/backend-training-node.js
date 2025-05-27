"use strict";

var jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = function (req, res, next) {
  var authHeader = req.headers.authorization;
  var token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

  if (!token) return res.status(401).json({
    message: 'Token not provided'
  });
  jwt.verify(token, process.env.JWT_SECRET, function (err, user) {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({
          message: 'Expired: Your token is expired'
        });
      }
      return res.status(401).json({
        message: 'Signature: invalid user'
      });
    }
    req.user = user; // Contains id and username
    next();
  });
};