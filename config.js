var express = require('express');
var router = express.Router();

var config = {
  maxChars : 4,
  BASE_CHARS: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@",
  domain : 'https://fcvr-shortener.herokuapp.com/'
}

module.exports = config;
