var mysql = require("mysql");
const credentials = require('./config');

// const { user, password } = require("./config");

if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: credentials.user,
    password: credentials.password,
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
