// Set up mySQL Connection
const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'process.env.password',
    database: 'burgers_db'
})
};

// Connect to mySQL Database
connection.connect((err) =>  {
    if (err) {
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query = util.promisify(connection.query);

// Export connection for our ORM to use.
module.exports = connection;
