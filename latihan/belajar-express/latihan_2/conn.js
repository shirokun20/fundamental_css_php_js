var mysql = require('mysql');
var data = {
    host: "localhost",
    user: "root",
    password: "",
    database: "belajar",
};
var con = mysql.createConnection(data);
con.connect((err) => {
    if (err) throw err;
});
module.exports = con;