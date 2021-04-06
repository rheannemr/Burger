const mysql = require('mysql');
const util = require("util");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rr453329',
    database: 'burgers_db',
});
};

// Connect to mysql database
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
});

connection.query = util.promisify(connection.query);

module.exports = connection;