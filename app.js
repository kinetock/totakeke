"use strict";
var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = app;