const express = require("express");
const app = express();
app.get('/about', (req, res) => { res.send('aboutme'); })
app.get('/about/chirag', (req, res) => { res.send('aboutme_chirag'); })
app.get('/about/kaushik', (req, res) => { res.send('aboutme_kaushik'); })

const port = 5001;

app.listen(port, () => { console.log('listen port 5001'); })