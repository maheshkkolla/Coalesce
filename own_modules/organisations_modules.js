var Psql = require("./psql.js").Psql;
var host = "localhost";
var port = "5432";
var dataBase = "organisations"

var _create = function(organisation, callback) {
	var db = new Psql(host,port,dataBase);
	var values = [organisation.email, organisation.name, organisation.siteName];
	db.insert('organisations',['email','name','site_name'],values);
	db.exec(callback);
}

module.exports = {
	create: _create
};