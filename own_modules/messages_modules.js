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
	var query = "SELECT message, dt, CASE sender WHEN @USER1@ THEN TRUE ELSE FALSE END AS you FROM messages" + 
		" WHERE (sender=@USER1@ AND receiver=@USER2@) OR (sender=@USER2@ AND receiver=@USER1@) ORDER BY dt DESC"
	query = query.replace(/@USER1@/g, user1);	
	query = query.replace(/@USER2@/g, user2);	
	var db = new Psql('localhost','5432','coalsce');
	console.log(query)
	db.query = query;
	db.exec(function(err, result) { 
		err && console.log("Error: ",err);
		err || callback(result.rows);
	});
}

module.exports = {
	create: _create,
	getAllMessages: _getAllMessages
}