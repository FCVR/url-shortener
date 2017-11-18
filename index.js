var express = require('express');
var co = require('co');
var MongoClient = require('mongodb').MongoClient;
Long = require('mongodb').Long;
var LRU = require("lru-cache");

var app = express();
cache = LRU(500);
app.set('port', (process.env.PORT || 4000));

//static data
app.use(express.static(__dirname + '/public'));

function init(){
  app.use('/', require('./routes/app'));
}

function start(){
  app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });
}

init();
start();
