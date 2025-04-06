var express = require('express');
var router = express.Router();
var fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));


/* GET users listing. */


router.get('/:userId', function(req, res, next) {
  res.send(data[req.params.userId]);
});

router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
