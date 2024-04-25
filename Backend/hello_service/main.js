const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/hello_world', (req, res) => {
    res.send('Hello World');
});

const port = 5000;

app.listen(port, () => {
    console.log('Server is listening on port 5000');
});
