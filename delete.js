var Deleter = function() {

};

var mustache = require('mustache');
var fs = require('fs');
var pg = require('pg');

Deleter.prototype.remove = function(file) {

var util = require('util');
var exec = require('child_process').exec;

var tweetid = file.replace('.json', '');

var curlOptions = {
	fileUri: file,
	apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
	projectId: 'c5c7a69ed',
}

var command = mustache.render('curl -X DELETE "https://api.smartling.com/v1/file/delete?apiKey={{{apiKey}}}&projectId={{{projectId}}}&fileUri={{{file}}}"', curlOptions);


child = exec(command, function(error, stdout, stderr){


if(error !== null)
{
    console.log('whoops:' + error);
}
else
{
	console.log(stdout)
	var dbDelete = "DELETE FROM usertweets WHERE tweetid = " + tweetid + ";"
	console.log(dbDelete)
	  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	    client.query(dbDelete, function(err, result) {
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
module.exports = Deleter;