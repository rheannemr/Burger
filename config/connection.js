const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Rr453329',
    database: 'burgers_db',
});

// Connect to mysql database
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id: ${connection.threadId}`);
});

module.exports = connection;