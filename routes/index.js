var express = require('express');
var router = express.Router();

var allRoutes = require('./allRoutes');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('coalsce/index');
});

router.use('/:organisation', allRoutes);

module.exports = router;
