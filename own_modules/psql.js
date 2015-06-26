var pg = require('pg');
var INSERT_CMD = "INSERT INTO @TABLE_NAME@(@COLUMNS@) VALUES (@VALUES@) RETURNING *"; 

var getTimeStamp = function() {
	return("[" + String(new Date()) + "]");
}

var logError = function(error) {
	console.log(getTimeStamp() + "Error:", error);
}

var throwErrorWith = function(errorMessage){
	throw new Error(getTimeStamp() + errorMessage);
}

var validateInsertParameters = function(tableName, columns, values) {
	(tableName && columns && values) || throwErrorWith("Some parameters are missing at insert");
	(columns.length == values.length) || throwErrorWith("Given columns and values are in different number");
}

var getVlaues = function(length) {
	var values = "$1"
	for(var value=2; value<=length; value++){
		values += ", $" + value;
	};
	return values;
}

var _insert = function(tableName, columns, values) {
	validateInsertParameters(tableName, columns, values);
	this.values = values;
	this.query = INSERT_CMD.replace(/@TABLE_NAME@/g, tableName); 
	this.query = this.query.replace(/@COLUMNS@/g, columns.toString()); 
	this.query = this.query.replace(/@VALUES@/g, getVlaues(values.length)); 
}

var _exec = function(callback) {
	var qry = this.query;
	var values = this.values;
	pg.connect(this.connStr, function(error, client, done){
		error && logError(error);
		client.query(qry, values, callback);
		done();
	});
}

var Psql = function(host, port, db) {
	this.query = "";
	this.connStr = "postgres://" + host + ":" + port + "/" + db;
}

exports.Psql = Psql;

Psql.prototype = {
	insert: _insert,
	exec: _exec
}