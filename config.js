var express = require('express');
var router = express.Router();

var config = {
  maxChars : 4,
  BASE_CHARS: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#@",
  domain : 'https://fcvr-shortener.herokuapp.com/',
  storeToUse: 'redisStore',
  stores: {
    redis : {
      host: 'localhost',
      port: 6379,
      aith: null,
      envKeyName : 'REDIS_URL'
    }
  }
}

module.exports = config;
