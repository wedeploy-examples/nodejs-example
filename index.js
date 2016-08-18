var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function () {
  console.log('Listening on port 80');
});