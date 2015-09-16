var express = require('express');
var app = express();
var fs = require('fs')
var request = require('request')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use("/asset", express.static(__dirname + '/asset'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/demo');
});

app.post('/', function(req, res) {
	res.render('pages/demo')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


app.get('/test/', function(req, res) {
	var formData = {
		apiKey: '6b300dd6-1896-4663-a5e8-121aabb9ae21',
		projectId: '51df0cf05',
		file: [fs.createReadStream(__dirname + '/test.properties')],
		fileURI: 'test.properties'
	}
	request.post({url:'https://api.smartling.com/v1/file/upload', formData: formData}, function optionalCallback(err, httpResponse, body) {
  if (err) {
    return console.error('upload failed:', err);
  }
  console.log('Upload successful!  Server responded with:', body);
});
	res.render('pages/demo')
})