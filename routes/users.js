var express = require('express');
var router = express.Router();
var users = require("../own_modules/users_module.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
	var user = {email:"mahesh2@gmail.com",name:"mahesh", password: "mahesh"};
	users.create(user ,function(user){
		res.json(user);
	});
});

router.get('/delete', function(req, res, next) {
	res.send("Delete");
});

router.get('/update', function(req, res, next) {
	res.send("Update");
});

router.get('/:id', function(req, res, next) {
	users.get(req.params.id,function(user) {
		res.json(user);
	});
});

module.exports = router;
