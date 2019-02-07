const io = require('socket.io')();
const feed = require('./feed')

io.on('connection', (client) => {
  
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
  
  /*
  client.on('simulateChange', (interval) => {
    console.log('client is subscribing to simulateChange with interval ', interval);
    setInterval(() => {
      console.log('feed',feed)
      client.emit('feed', feed);
    }, interval);
  });
  */
 client.on('join', function (rooms) {
  console.log('Socket %s subscribed to %s', client.id, rooms);
  if (Array.isArray(rooms)) {
      rooms.forEach(function(room) {
          client.join(room);
      });
  } else {
      client.join(rooms);
  }
});

client.on('leave', function (rooms) {
  console.log('Socket %s unsubscribed from %s', client.id, rooms);
  if (Array.isArray(rooms)) {
      rooms.forEach(function(room) {
          client.leave(room);
      });
  } else {
      client.leave(rooms);
  }
});





  /////////////////////
});


feed.start(function(room, type, message) {
  //console.log('type','message', type,message)
  io.to(room).emit(type, message);
});





const port = 8000;
io.listen(port);
console.log('listening on port ', port);
