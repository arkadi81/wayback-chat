/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

/** socketIO defaults to long polling if newer methods dont work, so it will live even 
* on older browsers
*/

var express = require("express");
var path = require("path");
var http = require("http"); // sockets will live on http
var app = express();
var socket = require("socket.io");

// trick - our socketIO will live on the express app
var server = http.createServer(app).listen(3000);


var io = require("socket.io")(server); // function, will listen for connections on the http server

app.use(express.static(path.join(__dirname, 'public')));

io.sockets.on('connection', function () {
  console.log('socket is live!');
});

io.on('connection', function(socket){
  socket.on('client_msg', function(msg) {
    console.log('Recieved message from client: ', msg);
    io.emit('message', `<p>${msg}</p>`);
  });
  console.log('a user connected');
  
  socket.on('disconnect', function(){
  console.log('user disconnected');
   });
}); 




module.exports = app;

console.log("Socket App listening on 3000");

//npm install socket.io-client exists too!