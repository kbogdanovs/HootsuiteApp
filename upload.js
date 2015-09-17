

var Uploader = function() {

};
var mustache = require('mustache');

Uploader.prototype.upload = function(file) {

var util = require('util');
var exec = require('child_process').exec;

var locales = ["de-DE", "fr-FR"];
var authLocales = ''
for (x=0; x < locales.length; x++) {
	authLocales += ' -F "localesToApprove=' + locales[x] + '"';
}

var curlOptions = {
	filepath: file,
	localesToApprove: authLocales,
	callbackUrl: 'http://requestb.in/vneb0tvn',
	apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
	projectId: 'c5c7a69ed'
}

var command = mustache.render('curl -F "file=@{{{filepath}}};type=text/plain" -F "apiKey={{{apiKey}}}" -F "projectId={{{projectId}}}" -F "fileType=json" -F "fileUri={{{filepath}}}" {{{localesToApprove}}} -F "callbackUrl={{{callbackUrl}}}" "https://api.smartling.com/v1/file/upload"', curlOptions);


child = exec(command, function(error, stdout, stderr){

console.log('stdout: ' + stdout);

if(error !== null)
{
    console.log('whoops:' + error);
}
else
{
	console.log('Hooray!')
}
var newbody = stdout

});
};
module.exports = Uploader;