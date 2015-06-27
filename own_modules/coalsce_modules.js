var Psql = require("./psql.js").Psql;

var _getAllOrganisations = function(callback) {
	var db = new Psql('localhost','5432','coalsce');
	db.select("organisations");
	db.exec(function(err, result) {
		callback(result.rows);
	});
}


module.exports = {
	getAllOrganisations: _getAllOrganisations
}