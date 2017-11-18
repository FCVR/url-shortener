var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function(req, res) {
  res.send('Welcome to url shortener');
});

router.get('/shorten', function(req, res){
  res.send('/foo');
});


module.exports = router;
