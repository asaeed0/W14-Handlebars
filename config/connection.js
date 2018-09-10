//  npm dependencies
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost', // process.env.HOST,
  user: 'root',  // process.env.DATABASE_USER,
  password: 'password', // process.env.PASSWORD,
  database: 'pizza_db', // process.env.DATABASE,
});

module.exports = connection;