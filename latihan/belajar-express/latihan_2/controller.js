'use strict'
var response = require('./res');
var qb = require('./conn');

exports.users = (req, res) => {
	qb.get('person', (err, output) => {
		if (err) {
            response.err({
            	message: 'terjadi error'
            }, res);
		}else{
            response.ok(output, res);
		}
	})    
}

exports.findUsers = (req, res) => {
	qb.where({
		id:req.params.user_id
	}).get('person', (err, output) => {
		if (err) {
			response.err({
            	message: err
            }, res);
		}else{
            response.ok(output, res);
		}
	});
}

exports.createUser = (req, res) => {
	var data = {
		first_name: req.body.first_name,
		last_name: req.body.last_name,
	};

	qb.insert('person', data, (err, output) => {
		if (err) {
			response.err({
            	message: err
            }, res);
		}else{
			var hasil = {
				message: "Berhasil menambah person",
				result: {
					InID: output.insertId
				},
			}
            response.ok(hasil, res);
		}
	});
}

exports.index = (req, res) => {
    response.ok('Selamat datang di belajar RestApi dengan Express', res);
}