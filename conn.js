let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Musytaq411441",
  database: "testDB"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;