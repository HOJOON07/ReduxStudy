const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1007',
  port: '3306',
  database: 'mydb1',
});

connection.connect();

module.exports = connection;
