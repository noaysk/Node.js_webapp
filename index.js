const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
require("dotenv").config();

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
});

// top
app.get("/", (req, res) => {
  res.render("top.ejs");
});

// list view
app.get("/index", (req, res) => {
  connection.query("SELECT * FROM items", (error, results) => {
    res.render("index.ejs", { items: results });
  });
});

// create
app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/create", (req, res) => {
  connection.query(
    "insert into items (number, name) values(?, ?)",
    [req.body.itemNum, req.body.itemName],
    (error, results) => {
      res.redirect("/index");
    }
  );
});

// Code to start the server
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening to port ${port}`));
