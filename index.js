var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var mustache = require('mustache');
var Uploader = require('./upload')
var pg = require('pg');
var bodyParser = require('body-parser')
var url = require('url')
var ejs = require('ejs')



app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM tweets', function(err, result) {
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
    var queryObject = url.parse(req.url,true).query;
    var userId = queryObject.uid
    var userInfo = {
    	id: 1234,
    	name: 'Kale'
    }
    var tweets = [
    			{
    			id: 'tweet1',
    			time : 'Lets work this out later',
    			sourceLocale: 'en-EN',
    			sourceText: 'Here is a tweet',
    			translations: [
    				['fr-FR', 'Here is a tweet en Francais'],
    				['de-DE', '']
    				]
    			},
    			{
    			id: 'tweet2',
    			time : 'Lets work this out later',
    			sourceLocale: 'en-EN',
    			sourceText: 'Here is another tweet',
    			translations: [
    				['fr-FR', ''],
    				['de-DE', 'Here is another tweet auf Deutsch']
    				]
    			}
    		];
    res.render('pages/demo', { userInfo: userInfo, tweets: tweets })
});

app.get('/upload', function (req, res) {
    var uploader = new Uploader;
    uploader.upload('./test2.json');
    res.render('pages/uploadresult');
});



app.get('/tweet', function (request, response) {
  var sourceText = url.parse(request.url,true).query
  var dbQuery = "INSERT INTO tweets (sourceLocale, sourceText) VALUES ('en-EN', '" + sourceText + "');"
  console.log(dbQuery)
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(dbQuery, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); }
    });
  });
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


