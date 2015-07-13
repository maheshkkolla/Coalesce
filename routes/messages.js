var express = require('express');
var router = express.Router();
var messages = require("../own_modules/messages_modules.js");


router.get('/new', function(req, res, next) {
	var user = 1;
	var message = {
		text: "Hai How are you", 
		sender: user,
		receiver: 4
	};
	messages.create(message, function(msg) {
		res.json(msg);
	});
});


router.get('/:userId',function(req, res, next) {
	var user = 1;
	var other = 4;
	messages.getAllMessages(user, other ,function(allMessages) {
		res.json(allMessages);
	});
});

module.exports = router;
