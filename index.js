var express = require("express");
var socket = require("socket.io");
var app = express();
var server = app.listen(4000);
var io = socket(server);

app.use(express.static("public"));
io.sockets.on("connection", newConnec);

function newConnec(socket)
{
    console.log("New connection : " + socket.id);
    socket.on("from_client", function(data){
      console.log(data);
	  socket.broadcast.emit("from_server", data);
    });
    socket.on("disconnect", function(){
	     console.log("Client " + socket.id + " has disconnected");
    })
}
