var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('ping::ts::connection', function (data) {
        console.log('pinged', data);
        socket.send('ping:accepted');
    });

});

http.listen(3131, function(){
    console.log('listening on *:3131');
});