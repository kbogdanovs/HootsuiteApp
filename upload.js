

var Uploader = function() {

};

var mustache = require('mustache');
var Contextualizer = require('./contextualize');
var request = require('request')

Uploader.prototype.upload = function(file, text, avatar, image) {

var filename = file;
var options = { 
  method: 'POST',
  url: 'https://api.smartling.com/v1/file/upload',
  qs:
   { file: '@' + filename + ';type=text/plain',
     apiKey: 'd39e8d85-3d7b-46f5-ad79-30edf0ccf7b3',
     projectId: 'c5c7a69ed',
     fileType: 'json',
     fileUri: filename,
     localesToApprove: 'fr-FR',
     localesToApprove: 'de-DE',
     callbackUrl: 'https://hsnodesmartlingsocial.herokuapp.com/translated/'
 }
};

console.log(options.qs.file)

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  var contextualizer = new Contextualizer;
  contextualizer.contextualize(text, avatar, image);
});

};

module.exports = Uploader;