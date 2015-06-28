var Psql = require("./psql.js").Psql;
var host = "localhost";
var port = "5432";
var dataBase = "organisations"

var _create = function(organisation) {
	var db = new Psql(host,port,dataBase);
}

module.exports = {
	create: _create
};