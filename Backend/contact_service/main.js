const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/contact', (req, res) => { res.send('contact'); })

const port = 5002;

app.listen(port, () => { console.log('listen port 5002'); })