const mysql = require("mysql");
const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root1234",
	database: "lostnfound"
});

//open the MySQL connection
conn.connect(error => {
	if (error) throw error;
	console.log("Successfully connected to the database.");
});

module.exports = conn;