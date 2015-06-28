var express = require('express');
var router = express.Router();
var organisations = require("../own_modules/organisations_modules.js");


router.post("/create", function(req, res, next) {
	organisations.create(organisation, function(created_org) {
		res.redirect(created_org.name+".localhost.com");
	});
});

module.exports = router;