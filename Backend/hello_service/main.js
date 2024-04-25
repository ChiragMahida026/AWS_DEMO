const express = require("express");
const app = express();
app.get('/hello_world', (req, res) => { res.send('Hello World'); })

const port = 5000;

app.listen(port, () => { console.log('listen port 5000'); })