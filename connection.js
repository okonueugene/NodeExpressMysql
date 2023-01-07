const mysql = require('mysql');

let connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Students'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

});

module.exports = connection;