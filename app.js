const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // top 
  res.render('hello.ejs');
});

// Code to start the server
app.listen(3000);
