import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);

}
/*
function simulateChange(cb) {
  socket.on('stock', stock => cb(null, stock));
  socket.emit('simulateChange', 1000);

}
*/

/*
function onChange(cb) {
  socket.on('stock', cb);
}

function watch(symbols) {
  socket.emit('join', symbols);
}

function unwatch(symbol) {
  socket.emit('leave', symbol);
}
*/

//export { subscribeToTimer, simulateChange };
export { subscribeToTimer };
