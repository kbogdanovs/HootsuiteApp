  
 function attach(imageurl, imagename, imageextension) {
  var timesec = Math.floor(Date.now() / 1000)
  var timestamp = timesec.toString() 
  url= "imageupload?imageurl=" + imageurl + "&timestamp=" + timestamp

$.ajax({
  url: url,
  type: "GET",
  data: {
  },
  dataType: "script",
}).always(function (resp) {
  response = JSON.parse(resp)
  hsp.attachFileToMessage ({
    url: imageurl,
    name: imagename, 
    extension: imageextension, 
    timestamp: timesec, 
    token: response.token
  });
});

}