const express = require("express");
const app = express();
app.get('/contact', (req, res) => { res.send('contact'); })

const port = 5002;

app.listen(port, () => { console.log('listen port 5002'); })