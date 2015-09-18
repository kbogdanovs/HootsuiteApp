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
    var queryObject = url.parse(req.url,true).query;
    var userId = queryObject.uid
    var userInfo = {
    	id: 1234,
    	name: 'Kale'
    }
    var userTweets = {
    	id: 1234,
    	tweets: {
    		tweet2: {
    			time : 'Lets work this out later',
    			source: {locale: 'en-EN', text: 'Here is a tweet in English'},
    			translations: [
    				{locale: 'fr-FR', text: 'Here is another tweet en Francais'},
    				{locale: 'de-DE', text: ''}
    				]
    			},
    		tweet2: {
    			time : 'Lets work this out later',
    			source: {locale: 'en-EN', text: 'Here is a tweet in English'},
    			translations: [
    				{locale: 'fr-FR', text: 'Here is another tweet en Francais'},
    				{locale: 'de-DE', text: ''}		
    				]
    			}
    		}
    	};
    res.render('pages/demo', { userInfo: userInfo, tweets: tweets })
});

app.get('/upload', function (req, res) {
    var uploader = new Uploader;
    uploader.upload('./test2.json');
    res.render('pages/uploadresult');
});

app.get('/tweet', function (req, res) {
	var queryObject = url.parse(req.url,true).query;
	var jsonText = '{"text" : "' + queryObject.tweetContent + '"}';
	var x = 0
	filename = ''
	fs.writeFile('tweet1.json', jsonText);
	var uploader = new Uploader;
	uploader.upload('tweet1.json');
	res.redirect()
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


