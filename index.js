const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

const catagories = require('./Data/Catagories.json')

app.use(cors())

app.get('/', (req, res) =>{
    res.send('News API Running')
})

app.get('/news-catagories', (req, res) =>{
    res.send(catagories);
})

app.listen(port, ()=>{
    console.log('Dragon News Server On Running Port', port);
})