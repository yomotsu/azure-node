// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {});

// io.set( 'transports', [ 'websocket' ] );
// io.set( 'origins', '*:*' );

io.on( 'connection', function ( socket ) {

  // console.log( 'connected' );

  socket.on( 'msg', function( data ) {
    io.emit( 'msg', data );
  } );

  socket.on( 'disconnect', function () {
    // console.log( 'disconnected' );
  } );

});
