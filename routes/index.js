var express = require('express');
var router = express.Router();
var coalsce = require("../own_modules/coalsce_modules.js");

/* GET home page. */
router.get('/', function(req, res, next) {
	coalsce.getAllOrganisations( function(organisations) {
		res.render('coalsce/index', {organisations: organisations});
	});
});

router.get("/create", function(req, res, next) {
	res.render('coalsce/create');
});

module.exports = router;
