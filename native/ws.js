/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// websocket server
var WebSocketServer = require("ws").Server;

var wss = new WebSocketServer({port: 3000});
console.log("websocket server running on 3000");

wss.on("connection", function(ws) {
  // each new connected socket will be passed as ws and cause the function to fire

  ws.on("message", function(msg) {
    if (msg.toLowerCase() === "exit")
    {
      ws.close();
    }
    else
    {
      wss.clients.forEach(function(client) {
        // will happen for all client
        client.send(msg);
        console.log(msg);
      });
    }

  });

  ws.send("Welcome to wayback-chat");

});

// get messages when they come in

