const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app).listen(80);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/main', function (req, res) {
  res.sendFile(path.join(__dirname, 'main.html'));
});

app.get('/guide', function (req, res) {
  res.sendFile(path.join(__dirname, 'guide.html'));
});

app.get('/game1', function (req, res) {
  res.sendFile(path.join(__dirname, 'game1.html'));
});

app.get('/game2', function (req, res) {
  res.sendFile(path.join(__dirname, 'game2.html'));
});

app.get('/game3', function (req, res) {
  res.sendFile(path.join(__dirname, 'game3.html'));
});

app.get('/gameover', function (req, res) {
  res.sendFile(path.join(__dirname, 'gameover.html'));
});

app.get('/win', function (req, res) {
  res.sendFile(path.join(__dirname, 'win.html'));
});
