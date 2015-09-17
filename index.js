var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var mustache = require('mustache');
var Uploader = require('./upload')
var pg = require('pg');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json

app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM test_table', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
})

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

app.get('/upload', function (req, res) {
    var uploader = new Uploader;
    uploader.upload('./test2.json');
    res.render('pages/uploadresult');
});

app.post('/tweet', jsonParser, function (req, res) {
	var body = req.body.tweetContent;
	var jsonText = '{"text" : "' + body + '"}';
	fs.writeFile('tweet1.json', jsonText);
	uploader.upload('tweet1.json');
	res.render ('pages/index')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


