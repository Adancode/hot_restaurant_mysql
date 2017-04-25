// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  // port: 3306,
  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "hot_restaurant_db"
  host: process.env.db_host || "localhost",
  user: process.env.db_user || "root",
  password: process.env.db_pw || "",
  database: process.env.db || "hot_restaurant_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
