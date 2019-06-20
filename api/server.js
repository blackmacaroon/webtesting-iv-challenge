const express = require('express');

const server = express();

server.use(express.json());

//sanity check
server.get('/', (req, res) => {
      res.status(200).json({ message: 'look what you did, you little jerk.' });
});

module.exports = server;