//first to init express ---- import express
const express = require('express');


// new instance of express
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
}) 





app.listen(port, () => {
    console.log('server started and listening on port 3000')
});