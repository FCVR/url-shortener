var express = require('express');
var router = express.Router();
var config = require('../config');
var utils = require('../utils');
var store = require('./stores/memoryStore.js');

router.get('/', function(req, res) {
  res.send('Welcome to url shortener');
});

router.get('/shorten', function(req, res){
  var inputUrl = req.query.url;
  if(inputUrl){
    var id =  utils.getBase64FromBase10(utils.generateRandomNumber(config.maxNum))
    store.put(id, inputUrl)
    res.send(config.domain+id)
  }else{
      res.status(400).send('Please send a valid url in url parameter');
  }
});

router.get('/all', function(req,res){
  res.send(store.getAll());
});

router.get('/:id', function(req,res){
  var id = req.params.id;
  var url = store.get(id);
  if(url){
      res.redirect(url);
  }else{
      res.status(404).send('Not found');
  }
});

module.exports = router;
