var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'chill',
  host: 'localhost',
  database: 'Planner'
});

module.exports = connection;