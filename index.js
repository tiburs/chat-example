var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 80;
var path = require('path');

//app.get('/', function(req, res){
//	res.sendFile(__dirname + '/index.html');
//});

app.use(express.static(__dirname));

io.on('connection', function(socket){
	console.log("Client connected: " + socket.id);
	socket.on('chat message', function(msg){
		//console.log('Blah: ' + msg);
		io.emit('chat message', msg);
	});
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});
