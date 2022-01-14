module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
  
    socket.emit('ola', 'Quem bom que você está aqui. Clique no PING!!');
  
    socket.on('ping', () => {
      console.log(`${socket.id} emitiu um ping!`)
      socket.emit('pong', `${socket.id} enviou um ping!`);
    })
  });
}