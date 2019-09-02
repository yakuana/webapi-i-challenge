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
    // console.log('newUser', newUser["name"], newUser["bio"])

    if (newUser["name"] && newUser["bio"]) {
        db.insert(newUser)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(500).json({
                    message: "There was an error while saving the user to the database", 
                    error: err
                })
            })
    } else {
        res.status(400).json({
            message: "Please provide name and bio for the user." 
        })
    }
})

// get all users 
server.get('/api/users', (req, res) => {
    db.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).json({ 
                message: "The users information could not be retrieved.", 
                error: err
            })
        })
})

// get a specific user 
server.get('/api/users/:id', (req, res) => {
    const { id } = req.params; // OR const id = req.params.id;

    if (id) {
        db.findById(id)
            .then(user => {
                res.json(user)
            })
            .catch(err => {
                res.sendStatus(500).json({ 
                    message: "The user information could not be retrieved.",
                    error: err
                })
            })
    } else {
        res.sendStatus(404).json({
            message: "The user with the specified ID does not exist.",
        })
    }
})

// delete a single user 
server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params; // OR const id = req.params.id;

    if (id) {
        db.remove(id) 
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.sendStatus(500).json({
                message: "The user could not be removed",
                error: err
            })
        })
    } else {
        res.sendStatus(404).json({
            message: "The user with the specified ID does not exist.",
        })
    }
})

// put/edit a user 
// server.put('/api/users/:id', (req, res) => {
   
// })

server.listen(4000, () => console.log('Server is running on port 4000'));