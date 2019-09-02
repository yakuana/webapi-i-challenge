// implement your API here

// imports 
const express = require('express'); 
const db = require('./data/db.js'); 

// create server 
const server = express(); 

// middleware
server.use(express.json());

// post a new user 
server.post('/api/users', (req, res) => {
    const newUser = req.body; 
    console.log('newUser', newUser)

    db.insert(newUser)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({
            error: "There was an error while saving the user to the database", 
            err: err
        })
    })
})

// get all users 
server.get('/api/users', (req, res) => {
    db.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json({ 
            error: "The users information could not be retrieved.", 
            err: err
        })
    })
})

// get a specific user 
server.get('/api/users/:id', (req, res) => {
    db.findById()
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.sendStatus(404).json({error: err})
    })
})

// delete a single user 
// server.delete('/api/users/:id', (req, res) => {
    
// })

// put/edit a user 
// server.put('/api/users/:id', (req, res) => {
   
// })

server.listen(4000, () => console.log('Server is running on port 4000'));