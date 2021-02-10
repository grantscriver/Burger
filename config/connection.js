var mysql = require("mysql");

// For the user and password put your MySQL credentials in quotes for it to work locally, it works in deployment with the config.js which is ignored by GitHub, put user and password with no quotes when deploying.
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: user,
    password: password,
    database: "burgers_db",
  });
}


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
