var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(80, function () {
  console.log('Listening on port 80');
});
