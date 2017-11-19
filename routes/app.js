var express = require('express');
var appRoot = require('app-root-path');
var router = express.Router();
var config = require(appRoot +'/config');
var utils = require(appRoot +'/utils');
var store = require(appRoot +'/routes/stores/'+config.storeToUse);

router.get('/', function(req, res) {
  res.send('Welcome to url shortener. v1.0');
});

router.get('/shorten', function(req, res){
  var inputUrl = req.query.url;
  if(inputUrl){
    var id = utils.getRandomBaseString();
    store.put(id, inputUrl, function(error){
        if(error){
            res.status(500).send(error);
        }else{
            console.log('Saved to store successfully');
            res.send(config.domain+id)
        }
    })
  }else{
      res.status(400).send('Please send a valid url in url parameter');
  }
});

router.get('/all', function(req,res){
  store.getAll(function(result, error){
    if(error){
      res.status(500).send(error);
    }else{
        res.send(result);
    }
  });
});

router.get('/:id', function(req,res){
  var id = req.params.id;
  store.get(id, function(result, error){
    if(error){
      res.status(500).send(error);
    }else{
        if(result){
          res.redirect(result);
        }else{
            res.status(404).send('Not found');
        }
    }
  });
});

module.exports = router;
