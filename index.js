// index.js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3002;
const cors = require('cors');

const jsonData = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Jim', age: 63 },
    { id: 5, name: 'Fat Tony', age: 58 },
    { id: 6, name: 'Fat Bob', age: 45 },
    { id: 7, name: 'Fat John', age: 78 },
    { id: 8, name: 'Ross', age: 68 },
    { id: 9, name: 'Karen', age: 49 },
    {id: 10, name: 'Potato', age: 33},
    {id: 11, name: 'Peach', age: 21},
];

app.use(cors());

app.get('/senddata', async (req, res) => {
 try {
    console.log('senddata endpoint hit');
    await axios.put('http://localhost:3000/api/insertdogdata', jsonData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    res.send('Data sent successfully');
 } catch (error) {
    console.error(error);
    res.status(500).send('Error sending data');
 }
});

app.listen(port, () => {
 console.log(`Express.js server running at http://localhost:${port}`);
});
