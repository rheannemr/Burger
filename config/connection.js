// Set up mySQL Connection
const mysql = require('mysql');
const util = require('util');
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 connection = mysql.createConnection({
    host: 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'idwd2sk4p30w3k6k',
    password: 'id4teman75ijiqjb',
    database: 't5y5s7s29n3gdmpu'
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
