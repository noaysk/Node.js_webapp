const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/top', (req, res) => {
  // top 
  res.render('top.ejs');
});

// list view
app.get('/index', (req, res) => {
  res.render('index.ejs');
});

// Code to start the server
app.listen(3000);
