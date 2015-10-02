var http = require('http');
var port = process.env.PORT || 80;

var express = require('express');
// var app = express();
// var server = http.createServer(app);
// var io = require('socket.io')(server);

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);

