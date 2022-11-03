const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});
connection.connect((err) => {
  if (err) {
    console.error('error connected mysql !');
    return;
  }
  console.log('connected mysql...');
});
module.exports = connection;
