'use strict'
var response = require('./res');
var qb = require('./conn');
var Joi = require('joi');
// Multer
var multer = require('multer');
// Path
var path = require('path');
//set storage engine
const storage = multer.diskStorage({
    destination: path.join(__dirname + '/public/images/'),
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
//init upload
const upload = multer({
    storage: storage
}).single('gambar');
// Mengambil data
exports.uploads = (req, res) => {
    qb.get('tuplod', (err, output) => {
        if (err) {
            response.err({
                message: 'terjadi error'
            }, res);
        } else {
            response.ok(output, res);
        }
    })
}
// exports.findUsers = (req, res) => {
//     qb.where({
//         id: req.params.user_id
//     }).get('person', (err, output) => {
//         if (err) {
//             response.err({
//                 message: err
//             }, res);
//         } else {
//             response.ok(output, res);
//         }
//     });
// }
// exports.updateUser = (req, res) => {
//  const {error} = validasi(req.body);
//     if (error) return response.err({
//                 message: error.details[0].message
//             }, res);
//     var data = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name,
//     };
//     var whereNya = {
//         id: req.params.user_id
//     };
//     qb.where(whereNya).update('person', data, (err, output) => {
//         if (err) {
//             response.err({
//                 message: err
//             }, res);
//         } else {
//             var {
//                 affectedRows
//             } = output;
//             if (affectedRows == 1) {
//                 var hasil = {
//                     message: "Berhasil mengubah person",
//                 }
//                 response.ok(hasil, res);
//             } else {
//                 var hasil = {
//                     message: "Gagal mengubah person",
//                 }
//                 response.err(hasil, res);
//             }
//         }
//     });
// }
// exports.deleteUser = (req, res) => {
//     var whereNya = {
//         id: req.params.user_id
//     };
//     qb.where(whereNya).delete('person', (err, output) => {
//         if (err) {
//             response.err({
//                 message: err
//             }, res);
//         } else {
//             var {
//                 affectedRows
//             } = output;
//             if (affectedRows == 1) {
//                 var hasil = {
//                     message: "Berhasil menghapus person",
//                 }
//                 response.ok(hasil, res);
//             } else {
//                 var hasil = {
//                     message: "Gagal menghapus person",
//                 }
//                 response.err(hasil, res);
//             }
//         }
//     });
// }
exports.createUpload = (req, res) => {
    // const {error} = validasi(req.body);
    // if (error) return response.err({
    //             message: error.details[0].message
    //         }, res);
    var data = {
        image: ""
    }
    qb.insert('tuplod', data, (err, output) => {
        if (err) {
            response.err({
                message: err
            }, res);
        } else {
            var h = {
                req: req,
                res: res,
            };
            var d = {
                field: "image",
                tabel: "tuplod",
                tipe: "menambah",
                output: "T Uploads",
                menghapus: true,
            }
            var id = output.insertId;
            menguploadSatu(h, d, {
                id: id
            });
            var hasil = {
                message: "Berhasil menambah person",
                result: {
                    InID: id
                },
            }
            response.ok(hasil, res);
        }
    });
}
const validasi = (belajar) => {
    const schema = {
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required()
    };
    return Joi.validate(belajar, schema);
}
const menguploadSatu = (hasil, data, where) => {
    upload(hasil.req, hasil.res, (err) => {
        if (err) {
            console.log('Gagal upload');
            if (data.menghapus == true) {
                qb.where(where).delete(data.tabel, (err, output) => {
                    if (err) {
                        console.log('Gagal');
                    } else {
                        var {
                            affectedRows
                        } = output;
                        if (affectedRows == 1) {
                            console.log('Gagal');
                        } else {
                            console.log('Gagal');
                        }
                    }
                });
            }
        } else {
            // var dataNya = `${} = ${  }`;
            qb.where(where).from(data.tabel).set(data.field, hasil.req.file.filename).update(null, null, null, (error, output) => {
                if (err) {
                    console.log('Gagal');
                } else {
                    var {
                        affectedRows
                    } = output;
                    if (affectedRows == 1) {
                        console.log('Berhasil');
                    } else {
                        console.log('Gagal');
                    }
                }
            });
        }
    })
}
exports.index = (req, res) => {
    response.ok('Selamat datang di belajar RestApi dengan Express', res);
}