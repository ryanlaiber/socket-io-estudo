module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('clientMessage', (message) => {
      console.log(`Mensagem: ${message}`);
      io.emit('serverMessage', message);
    })

    socket.on('disconnect', (socket) => {
      console.log(`${socket.id} desconectado`);
      io.emit('serverMessage', `${socket.id} desconectado`);
    });
  });
};