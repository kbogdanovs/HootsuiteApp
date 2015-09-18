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
var http = require('http')
var userInfo = {
	userId: 12698567,
	firstName: 'Kale',
	sourceLocale: 'en-EN',
	locales: ['fr-FR', 'de-DE']
};



app.get('/db', function (request, response) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM usertweets', function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { response.render('pages/db', {results: result.rows} ); console.log(result) }
    });
  });
})



app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use("/asset", express.static(__dirname + '/asset'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



app.post('/', function (req, res) {
   var getTweets = "SELECT * FROM usertweets WHERE userid = '" + userInfo.userId + "';"
   console.log(getTweets)
   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(getTweets, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else { 
      	var tweets = result.rows
      	console.log(tweets)
      	res.render('pages/demo', { userInfo: userInfo, tweets: tweets })
      }
    });
   });
    
});


app.get('/tweet', function (request, response) {
  var sourceText = url.parse(request.url,true).query
  var dbQuery = "INSERT INTO usertweets (userId, sourceLocale, sourceText) VALUES (" + userInfo.userId + ", 'en-EN', '" + sourceText.tweetContent + "')"
  console.log(dbQuery);
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(dbQuery, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else
       { console.log(result)}
    });
  });
   var getfilename = "SELECT * FROM usertweets WHERE sourceText = '" + sourceText.tweetContent + "';"
   console.log(getfilename)
   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(getfilename, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else { 
      	object = result.rows[0]
      	console.log(object)
      	var filename = object.tweetid.toString();
      	var jsonText = '{"text" : "' + object.sourcetext + '"}';
      	fs.writeFile(filename, jsonText);
      	var uploader = new Uploader;
      	uploader.upload(filename)
      }
    });
   });
   response.redirect('/');
 });






app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


