/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

// this will only work on chrome
// native websocket constructor
var ws = new WebSocket("ws://localhost:3000");

ws.onopen = function() {
  setTitle("connected to wayback chat");
}

ws.onclose = function() {
  setTitle("Disconnected");
}

ws.onmessage = function(payload) {
  printMessage(payload.data);
}

document.forms[0].onsubmit = function() {
  // clear the value
  var input = document.getElementById('message');
  // send the thing back to the server
  ws.send(input.value);
  input.value = '';
}

function setTitle(title) {
  document.querySelector('h1').innerHTML = title;
}

function printMessage(msg) {
  //alert(msg);
  var p = document.createElement('p');
  p.innerText = msg;
  document.querySelector('div.chatlog').appendChild(p);
}

