const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/style1.css', function (req, res) {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'style1.css'));
  }, 1000);
});

app.get('/style2.css', function (req, res) {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'style2.css'));
  }, 0);
});

app.get('/script.js', function (req, res) {
  setTimeout(() => {
    res.sendFile(path.resolve(__dirname, 'script.js'));
  }, 4000);
});

app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);
