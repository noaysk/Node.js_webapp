const express = require("express");
const app = express();

app.use(express.static("public"));

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "progate",
//   password: "password",
//   database: "list_app",
// });

require("dotenv").config();

const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
})


// top
app.get("/", (req, res) => {
  res.render("top.ejs");
});

// list view
app.get("/index", (req, res) => {
  pool.query("SELECT * FROM items", (error, results) => {
    res.render("index.ejs", { items: results });
  });
});

// create
app.get('/new', (req, res) => {
  res.render('new.ejs');
});


// Code to start the server
app.listen(3000);

module,exports = pool.promise();

