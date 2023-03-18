//first to init express ---- import express
const express = require('express');
const app = express();

const drinks = require('./models/Drinks');
// console.log(models);



// Models - Database stuff
// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// new instance of express
const port = 3000;



// const drinks = require('drink');

// Middleware 
// This is a view engine that is looking for EJS files to be rendered. It also sets up that ALL the EJS files for my frontend will be located in a file named views
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
}) 

// Routes
app.get('/drinks', (req, res) => {
    res.render('index', {drinks});
})

app.get('drinks/:id', (req, res) => {
    res.render(req.params.id);
})

app.get('/plants/:id', (req, res) => {
    console.log({req: req.params})
    const id = req.params.id
    res.send(plants[id])
})




app.listen(port, () => {
    console.log('server started and listening on port 3000')
});