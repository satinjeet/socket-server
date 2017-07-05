var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var players = {};

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('ping::ts::connection', function (data) {
        console.log('pinged', data);
        socket.send('ping:accepted');
    });

    socket.on('player::connected', function(player) {
        console.log('Player connected: ', arguments);
        players[player.name] = player;

        console.log(players);
        socket.broadcast.emit('player::connected::update', player);
    })

});

http.listen(3131, function(){
    console.log('listening on *:3131');
});