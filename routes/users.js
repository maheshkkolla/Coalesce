var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
	res.send("Create");
});

router.get('/delete', function(req, res, next) {
	res.send("Delete");
});

router.get('/update', function(req, res, next) {
	res.send("Update");
});

module.exports = router;
