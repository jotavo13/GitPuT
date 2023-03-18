//first to init express ---- import express
const express = require('express');

// Models - Database stuff
// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// new instance of express
const app = express();

const port = 3000;



// Middleware 
// This is a view engine that is looking for EJS files to be rendered. It also sets up that ALL the EJS files for my frontend will be located in a file named views
app.set('view engine', 'ejs')





app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
}) 

// Routes
app.get('/drinks', (req, res) => {
    res.render('index.ejs');
})





app.listen(port, () => {
    console.log('server started and listening on port 3000')
});