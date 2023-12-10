const express = require('express');
const app = express();

app.use(express.static('public'));

// top
app.get('/', (req, res) => {
  res.render('top.ejs');
});

// list view
app.get('/index', (req, res) => {
  res.render('index.ejs');
});

// Code to start the server
app.listen(3000);
