const express = require('express');
const http = require('http');
const socket = require('socket.io');
const app = express();

const Server = http.createServer(app);

const PORT = process.env.PORT || 3000;
Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});