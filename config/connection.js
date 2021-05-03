// Set up mySQL Connection
const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: 'us-cdbr-east-03.cleardb.com',
    port: 3306,
    user: 'bb11a4f6bfe04b',
    password: '2645eaa0',
    database: 'heroku_a6ca20d3c23c4ad'
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
