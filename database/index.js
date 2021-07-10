const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'library',
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
