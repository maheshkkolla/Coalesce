var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('coalsce/index');
});

router.get("/create", function(req, res, next) {
	res.render('coalsce/create');
});

module.exports = router;
