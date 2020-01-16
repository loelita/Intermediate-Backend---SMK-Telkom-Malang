var http = require("https");
var express = require('express');
var app = express();

var propinsi = {
  "method": "GET",
  "hostname": "api.rajaongkir.com",
  "port": null,
  "path": "/starter/province",
  "headers": {
    "key": "0df6d5bf733214af6c6644eb8717c92c"
  }
};

var kota = {
  "method": "GET",
  "hostname": "api.rajaongkir.com",
  "port": null,
  "path": "/starter/city",
  "headers": {
    "key": "0df6d5bf733214af6c6644eb8717c92c"
  }
};

var req = http.request(propinsi, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

  var req = http.request(kota, function (res) {
    var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();

// app.listen(8000, () => {
//     console.log('Server is running at port 8000');
//   });
