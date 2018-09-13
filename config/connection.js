//  npm dependencies
const mysql = require("mysql2");

console.log("DB_HOST:", process.env.HOST);
console.log("DB_USER:", process.env.DATABASE_USER);
console.log("DB_PASSWORD:", process.env.PASSWORD);
console.log("DB_DATABASE:", process.env.DATABASE);

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.HOST || process.env.JAWSDB_HOST,
  user: process.env.DATABASE_USER || process.env.JAWSDB_USERNAME,
  password: process.env.PASSWORD || process.env.JAWSDB_PASSWORD,
  database: process.env.DATABASE || process.env.DATABASE
});

module.exports = connection;
