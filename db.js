// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Scooby2012',
//     database: 'petclinic',
// });

// pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('Database connection failed:', err);
//     } else {
//       console.log('Database connected successfully');
//       connection.release();
//     }
//   });

// module.exports = pool.promise();

const mysql = require('mysql2');
require("dotenv").config();

// const pool = mysql.createPool({
//     host: 'srv1327.hstgr.io',
//     user: 'u323893650_isuru',
//     password: 'Scooby2012#',
//     database: 'u323893650_petclinic',
// });

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

pool.getConnection((err, connection) => {
    if (err) {
      console.error('Database connection failed:', err);
    } else {
      console.log('Database connected successfully');
      connection.release();
    }
  });

module.exports = pool.promise();