const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const spinController = require('./spinController')

// const cors = require('cors')
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io =  socketIo(server);

let users = {};

io.on('connection',(socket)=>{
  const userId = socket.id
  users[userId] = {id:userId};
  console.log(`User Connected with id: ${socket.id}`);

  io.emit('userConnected',{id:userId});

  socket.on('spin',()=>{
    const result = spinController.spinWheel();
    io.emit('spinResult',  {userId,result});
  })

  socket.on('disconnect' ,()=>{
    console.log(`User disconnected with ID: ${userId}`);
    delete users[userId];
    io.emit('userDisconnected' , {id: userId});
  })

});




// io.on('connection' ,(socket)=>{
//   console.log(`Player Connected : ${socket.io}`)

//   socket.on('spin', () => {
//     const result = spinController.spinWheel();
//     io.emit('spinResult', result);
//   });

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// })


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});