// Require MySQL and establish connection variable
var mysql = require("mysql");
var connection;

// Establish connection parameters based on whether or nor JawsDB is being used
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        passwork: 'YourRootPassword',
        database: 'burgers_db'
    });
};
// Boot up connection
connection.connect();

// Export connection for use in other files
module.exports = connection;