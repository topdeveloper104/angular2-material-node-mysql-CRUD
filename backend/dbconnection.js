var mysql = require('mysql');
var connection = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_db'
});

module.exports = connection;