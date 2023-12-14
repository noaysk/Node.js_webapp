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

// require("dotenv").config();

// const mysql = require("mysql2");
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
// });

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
    'insert into items (number, name) values(?, ?)',            
    [req.body.itemNum, req.body.itemName],            
     (error, results) => {            
      connection.query(   
        'SELECT * FROM items',            
        (error, results) => {     
          console.log(req.body.itemNum, req.body.itemName);       
         res.render('index.ejs', {items: results});            
     }            
    );              
     }            
   );  

  
  
});

// Code to start the server
app.listen(3000);

// module, (exports = pool.promise());
