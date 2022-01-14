const socket = window.io();

const button = document.querySelector('#pingButton');
const messageUl = document.querySelector('#messages');

button.addEventListener('click', (e) => {
  socket.emit('ping');
  return false;
});

const createMessage = (message) => {
  const li = document.createElement('li');
  li.innerText = message;
  messageUl.appendChild(li);
};

socket.on('ola', (message) => createMessage(message));
socket.on('pong', (message) => createMessage(message));
