var Psql = require("./psql.js").Psql;

var getTimeStamp = function() {
	return("[" + String(new Date()) + "]");
}

var logError = function(error) {
	console.log(getTimeStamp() + "Error:", error);
}

var _create = function(user, callback){
	var db = new Psql('localhost','5432','coalsce');
	db.insert('users',['email','name','password'],[user.email,user.name,user.password]);
	db.exec(function(err, result) {
		callback(result.rows[0]);
	});
}

module.exports = {
	create: _create
}