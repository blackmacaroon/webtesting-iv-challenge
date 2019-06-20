const express = require('express');

const ZipZorps = require('../zipzorps/zipzorpModel.js');

const server = express();

server.use(express.json());

//sanity check
server.get('/', (req, res) => {
      res.status(200).json({ message: 'look what you did, you little jerk.' });
});

//GET
server.get('/zipzorps', (req, res) => {
      ZipZorps.getAll()
            .then(zipzorps => {
                  res.status(200).json(zipzorps);
            })
            .catch(err => {
                  res.status(500).json({message: 'Bodag the chintsies!'})
            })
})
//CREATE
server.post('/zipzorps', (req, res) => {
      ZipZorps.insert(req.body)
            .then(zipzorp => {
                  res.status(201).json({ message: 'Ot!'});
            })
            .catch(err => {
                  res.status(500).json({ error: 'Zeg.'})
            })
      
      
})

//DELETE

module.exports = server;