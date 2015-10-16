var express = require('express');
var app = express();
var fs = require('fs');
var request = require('request');
var mustache = require('mustache');
var Uploader = require('./upload')
var Refresher = require('./refresh')
var Downloader = require('./download')
var Deleter = require('./delete')
var Contextualizer = require('./contextualize')
var pg = require('pg');
var bodyParser = require('body-parser')
var url = require('url')
var ejs = require('ejs')
var http = require('http')
var jsSHA = require('jssha');

var userInfo = {
	userId: 12698567,
	firstName: 'Kale',
	sourceLocale: 'en-EN',
	locales: ['fr-FR', 'de-DE'],
  mainavatar: 'https://pbs.twimg.com/profile_images/638543851267952640/hFcxpMMY_bigger.png',
	hslocales: [
		 {
      code: 'frfr',
			smartlingCode: 'fr-FR'
      language: 'French',
			img: './asset/icons/France.png'
		},
		{
			code: 'dede',
      smartlingCode: 'de-DE'
			language: 'German',
			img: './asset/icons/Germany.png'
		}
	]
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


app.get('/', function (req, res) {
   var getTweets = "SELECT * FROM usertweets WHERE userid = '" + userInfo.userId + "' ORDER BY created DESC;"
   console.log(getTweets)
   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(getTweets, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else { 
      	var tweets = result.rows
      	res.render('pages/demo', { userInfo: userInfo, tweets: tweets })
      }
    });
   });    
});

app.post('/', function (req, res) {
   var getTweets = "SELECT * FROM usertweets WHERE userid = '" + userInfo.userId + "' ORDER BY created DESC;"
   console.log(getTweets)
   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(getTweets, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else { 
      	var tweets = result.rows
      	res.render('pages/demo', { userInfo: userInfo, tweets: tweets })
      }
    });
   });    
});


app.get('/tweet', function (request, response) {
  var sourceText = url.parse(request.url,true).query
  var tweetContent = sourceText.tweetContent.replace(/'/g, "\\'");
  var dbQuery = "INSERT INTO usertweets (userId, sourceLocale, sourceText, imageurl) VALUES (" + userInfo.userId + ", 'en-EN', '" + tweetContent + "', '" + sourceText.imageUrl + "')"
  console.log(dbQuery);
  
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(dbQuery, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else { 
        console.log(result);
      }
    });
  });
   var getfilename = "SELECT * FROM usertweets WHERE sourceText = '" + tweetContent + "';"
   console.log(getfilename)
   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query(getfilename, function(err, result) {
      done();
      if (err)
       { console.error(err); response.send("Error " + err); }
      else { 
      	var object = result.rows[0];
        console.log(result.rows[0]);
      	var filename = object.tweetid.toString();
      	var jsonText = '{"tweetText" : "' + object.sourcetext + '"}';
      	var fileupname = fs.writeFileSync(filename, jsonText);
      	var uploader = new Uploader;
      	uploader.upload(filename, tweetContent, userInfo.mainavatar, sourceText.imageUrl);
                
      }
    });
   });

   response.redirect('/');
 });


app.get('/translated', function (request, response) {
	var urlData = url.parse(request.url,true).query;
	var locale = urlData.locale;
	var fileUri = urlData.fileUri;
	var downloader = new Downloader;
	downloader.download(fileUri, locale);
	response.redirect('/');
});

app.get('/delete', function (request, response) {
	var urlData = url.parse(request.url,true).query;
	var fileUri = urlData.fileUri;
	var deleter = new Deleter;
	deleter.remove(fileUri);
	response.redirect('/');
})

app.get('/imageupload', function (request, response) {
  var urlData = url.parse(request.url,true).query;
  var timestamp = urlData.timestamp
  var imageurl = urlData.imageurl
  var mystring = "12698567" + timestamp + imageurl + "asadgwelakau8JEnwmdv3"
  console.log("mystring is" + mystring)
  var shaObj = new jsSHA(mystring, "TEXT");
  console.log("shaobj is" + shaObj)
  var mytoken = shaObj.getHash("SHA-512", "HEX");
  console.log("mytoken is" + mytoken);
  response.send(mytoken);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


