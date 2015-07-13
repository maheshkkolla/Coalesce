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
		err && console.log("Error: ",err);
		err || callback(result.rows[0]);
	});
}

var _get = function(email, callback) {
	var db = new Psql('localhost', '5432','coalsce');
	db.select('users').where("email='"+email+"'");
	db.exec(function(err, result) {
		err && console.log("Error: ",err);
		err || callback(result.rows[0]);
	});
}	

module.exports = {
	create: _create,
	get: _get
}