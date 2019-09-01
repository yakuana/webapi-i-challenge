// implement your API here

const express = require('express'); 
const server = express(); 

const db = require('./data/db.js'); 

server.post('/api/users', (res, req) => {
   
})

server.get('/api/users', (res, req) => {
  
})

server.get('/api/users/:id', (res, req) => {
    
})

server.delete('/api/users/:id', (res, req) => {
    
})

server.put('/api/users/:id', (res, req) => {
   
})

server.listen(8000, () => console.log('API running on port 8000'));