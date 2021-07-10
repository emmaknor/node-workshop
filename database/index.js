const mysql = require('mysql');

var connection = mysql.createConnection({
  user: '',
  host: '',
  password: '',
  database: '',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('successful mysql connection!');
  }
});

module.exports = connection;
