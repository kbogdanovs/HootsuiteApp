var Downloader = function() {

};

var mustache = require('mustache');
var fs = require('fs');
var pg = require('pg');

Downloader.prototype.download = function(file, locale) {

var util = require('util');
var exec = require('child_process').exec;

var tweetid = file.replace('.json', '');

var curlOptions = {
	fileUri: file,
	locale: locale,
	apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
	projectId: 'c5c7a69ed',
	retrievalType: 'published'
}

var command = mustache.render('curl -d "apiKey={{{apiKey}}}&fileUri={{{fileUri}}}&projectId={{{projectId}}}&locale={{{locale}}}&retrievalType={{{retrievalType}}}" "https://api.smartling.com/v1/file/get"', curlOptions);


child = exec(command, function(error, stdout, stderr){

var parsed = JSON.parse(stdout)
tweetText = parsed["tweetText"]
console.log('its the test variable ' + tweetText)

if(error !== null)
{
    console.log('whoops:' + error);
}
else
{
	var dbDownload = "INSERT INTO usertweets (" + locale + ") VALUES (" + tweetText + " WHERE tweetid = '" + tweetid + "';"

	  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query(dbDownload, function(err, result) {
	      done();
	      if (err)
	       { console.error(err); console.log("Error " + err); }
	      else
	       { console.log(result)}
	    });
	  });


}



});
};
module.exports = Downloader;