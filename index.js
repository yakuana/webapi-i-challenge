// implement your API here

const express = require('express'); 
const server = express(); 

const db = require('./data/db.js'); 

server.post('/api/users', (req, res) => {
    
})

server.get('/api/users', (req, res) => {
  
})

server.get('/api/users/:id', (req, res) => {
    
})

server.delete('/api/users/:id', (req, res) => {
    
})

server.put('/api/users/:id', (req, res) => {
   
})

server.listen(8000, () => console.log('API running on port 8000'));