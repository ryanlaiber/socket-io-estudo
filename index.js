const express = require('express');

const app = express();
const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://127.0.0.1:3000',
    methods: ['GET', 'POST'],
  }
});

app.use(express.static(__dirname + '/public'))

require('./sockets/ping')(io);
require('./sockets/chat')(io);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/chat.html');
});

http.listen(3000, () => {
  console.log('Servidor Iniciado na porta 3000');
});
