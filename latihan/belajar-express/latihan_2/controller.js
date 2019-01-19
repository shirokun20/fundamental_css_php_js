
'use strict'

var response = require('./res');
var connection = require('./conn');

exports.users = (req, res) => {
	connection.query('SELECT * FROM person', (error, rows, fields) => {
		if (error) {
			return console.log(error);
		} else {
			response.ok(rows, res);
		}
	});
}

exports.index = (req, res) => {
	response.ok('Selamat datang di belajar RestApi dengan Express', res);
}