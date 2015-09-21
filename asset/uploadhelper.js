  
 function attach(imageurl, imagename, imageextension) {
  var timesec = Math.floor(Date.now() / 1000)
  var timestamp = timesec.toString() 
  url= "imageupload?imageurl=" + imageurl + "&timestamp=" + timestamp

$.ajax({
  url: "imageupload",
  type: "GET",
  data: {
    url: imageurl,
    timestamp: timestamp
  },
  dataType: "script",
}).always(function (resp) {
  hsp.attachFileToMessage ({
    url: imageurl,
    name: imagename, 
    extension: imageextension, 
    timestamp: timesec, 
    token: resp.token
  });
});

}