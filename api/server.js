const express = require('express');

const db = require('../zipzorps/zipzorpModel.js');

const server = express();

server.use(express.json());

//sanity check
server.get('/', (req, res) => {
      res.status(200).json({ message: 'look what you did, you little jerk.' });
});

//GET
server
      .get('/zipzorps', async (req, res) => {
            try {
                  const zipzorps = await db.getAll('zipzorps')
                  res.status(200).json(zipzorps)
            } catch(error) {
                        console.log(error);
                        res.status(500).json({message: 'Bodag the chintsies!'})
            }
      })
      

//CREATE
      .post('/zipzorps', async (req, res) => {
            const zipzorp = req.body;
            if(zipzorp.zipzorp){
                  try{
                        const inserted = await db.insert(zipzorp)
                        res.status(201).json({ message: 'Ot!' });
                  } catch(error) {
                        res.status(500).json(error)
                  }
            } else {
                  res.status(400).json({ message: 'syzzygy?'})
            }
      })
      


//DELETE
      .delete('/zipzorps/:id', (req, res) => {
            const id = req.params.id;
            db.remove(id)
                  .then(count => {
                        if(count > 0){
                              res.status(204).json({ message: 'Vag ot!' })
                        } else {
                              res.status(404).json({ message: "Nope." })
                        }
                  })
                  .catch(err => {
                        res.status(500).json(err)
                  })
      })


module.exports = server;