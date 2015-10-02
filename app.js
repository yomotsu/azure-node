var http = require('http');

var port = process.env.PORT || 80;
// var port = 80;

var express = require('express');
var app = express();
// var server = http.createServer(app);
var io = require('socket.io');

// io.set( 'transports', [ 'websocket' ] );
// io.set( 'origins', '*:*' );

// http.createServer(function(req, res) {

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World4\n');

// }).listen(port);


io.on( 'connection', function ( socket ) {

  // console.log( 'connected' );

  socket.on( 'msg', function( data ) {
    io.emit( 'msg', data );
  } );

  socket.on( 'disconnect', function () {
    // console.log( 'disconnected' );
  } );

});


io.listen( port );
