var http = require('http');
var port = process.env.PORT || 1337;

// var express = require('express');
// var app = express();
// var server = http.createServer(app);
var io = require('socket.io').listen( port );

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);


