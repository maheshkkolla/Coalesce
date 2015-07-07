var express = require('express');
var router = express.Router();
var organisations = require("../own_modules/organisations_modules.js");


router.post("/create", function(req, res, next) {
	organisations.create(req.body, function(error, result) {
		var created = result.rows[0];
		res.redirect("/"+created.site_name);
	});
});

module.exports = router;