
var Refresher = function () {

};

Refresher.prototype.refresh = function() {

var options = {
    host: __dirname,
    path: '/',
    method: 'POST'
};

var req = http.request(options, function(res){
    console.log('status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk){
        console.log("body: " + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
};
module.exports = Refresher