var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use("/asset", express.static(__dirname + '/asset'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/demo');
});

app.post('/', function (req, res) {
    res.render('pages/demo')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

