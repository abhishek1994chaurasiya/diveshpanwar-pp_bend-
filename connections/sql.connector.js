var mysql = require('promise-mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'divesh',
  database: 'saroj'
});

module.exports = connection;
