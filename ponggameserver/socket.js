module.exports = function(http) {
    var io = require('socket.io')(http);
  
    io.on('connection', function (socket) {
      console.log('a user connected');
  
      socket.emit('connected', 'connection established'); 
  
      socket.on('CHAT MESSAGE', function (data) {
        io.emit('CHAT MESSAGE', data);
      });
  
      socket.on('disconnect', function () {
        console.log('disconnected');
      });
    });
  };