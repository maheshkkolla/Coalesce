var Psql = require("./psql.js").Psql;

var _create	= function(message, callback) {
	var db = new Psql('localhost','5432','coalsce');
	db.insert('messages',['message','sender','receiver','dt'],[message.text, message.sender, message.receiver, new Date()]);
	db.exec(function(err, result) {
		err && console.log("Error: ",err);
		err || callback(result.rows[0]);
	});
}

var _getAllMessages = function(user1, user2, callback) {
	var users = "@ROLE@=" + user1 + " OR @ROLE@=" + user2 + "";
	var condition =  users.replace(/@ROLE@/g,'sender') + " AND " + users.replace(/@ROLE@/g,'receiver')
	var db = new Psql('localhost','5432','coalsce');
	db.select('messages').where(condition,"ORDER BY dt");
	db.exec(function(err, result) {
		err && console.log("Error: ",err);
		err || callback(result.rows);
	});
}

module.exports = {
	create: _create,
	getAllMessages: _getAllMessages
}