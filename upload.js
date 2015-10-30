

var Uploader = function() {

};

var mustache = require('mustache');
var Contextualizer = require('./contextualize');

Uploader.prototype.upload = function(file, text, avatar, image) {

var util = require('util');
var exec = require('child_process').exec;

var locales = ["de-DE", "fr-FR"];
var authLocales = ''
for (x=0; x < locales.length; x++) {
	authLocales += ' -F "localesToApprove=' + locales[x] + '"';
}

var options = { method: 'POST',
  url: 'https://api.smartling.com/v1/file/upload',
  qs: 
   { file: '@' + file,
     apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
     projectId: 'c5c7a69ed',
     fileType: 'json',
     fileUri: file,
     localesToApprove: authLocales,
     callbackUrl: 'https://hsnodesmartlingsocial.herokuapp.com/translated/',
 };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  var contextualizer = new Contextualizer;
  contextualizer.contextualize(text, avatar, image);
});

module.exports = Uploader;