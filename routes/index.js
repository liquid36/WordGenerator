var express = require('express');
var router = express.Router();

var date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  var now = new Date();
  now = now.getTime();
  res.render('index', { diff:  Math.round( (now - date.getTime()) / 1000 ) });
}); 

module.exports = router;
