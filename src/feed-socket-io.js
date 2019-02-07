const openSocket = require('socket.io-client');
const  socket = openSocket('http://localhost:8000');

const feed = (function () {

    //var socket = io();

    return {
        onChange: function(callback) {
            socket.on('stock', callback);
        },
        watch: function(symbols) {
            socket.emit('join', symbols);
        },
        unwatch: function(symbol) {
            socket.emit('leave', symbol);
        }
    };

}());

module.exports = {feed}