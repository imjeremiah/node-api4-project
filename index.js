require('dotenv').config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5001;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  res.send(`<h2>Hello from API4 Project!</h2>`);
});

server.get('/api/users', (req, res) => {
    res.json({ message: "Welcome to the USERS page!" })
})

server.get('/api/register', (req, res) => {
    res.json({ message: "Welcome to the REGISTER page!" })
})

server.get('/api/login', (req, res) => {
    res.json({ message: "Welcome to the LOGIN page!" })
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});