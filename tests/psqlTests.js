var Psql = require("../own_modules/psql.js").Psql;
var assert = require('assert');

describe("Psql", function() {

	describe("Psql constructor", function() {
		it("should make the connection string and keep it in db connStr", function(done) {
			var db = new Psql('localhost','5432','test');
			assert.equal(db.connStr, "postgres://localhost:5432/test");
			done();
		});
		it("should make the query to empty string", function(done) {
			var db = new Psql('localhost','5432','test');
			assert.equal(db.query, "");
			done();
		});
	});

	describe("insert", function() {
		it("should make insert query with the sended parameters", function(done) {
			var db = new Psql('localhost','5432','test');
			db.insert("users",["email","name","password"],["c@c.com","random","secret"]);
			assert.equal(db.query, "INSERT INTO users(email,name,password) VALUES($1,$2,$3) RETURNING *");
			done();
		});		
		it("should put the values in db values", function(done) {
			var db = new Psql('localhost','5432','test');
			db.insert("users",["email","name","password"],["c@c.com","random","secret"]);
			assert.deepEqual(db.values, ["c@c.com","random","secret"]);
			done();
		});
		// it("should throw the error if table name is missing in parameters", function(done) {
			
		// });
	});

	describe("select", function() {
		it('should make the select query with the sended table name', function(done) {
			var db = new Psql('localhost','5432','test');
			db.select("users");
			assert.equal(db.query,"SELECT * FROM users");
			done();
		});
		it("should make the select query with table name and given columns", function(done) {
			var db = new Psql('localhost','5432',"test");
			db.select("users",["name","password"]);
			assert.equal(db.query, "SELECT name,password FROM users");
			done();
		});
	});
});