const express = require('express');
const res = require('express/lib/response');
const app = express();
// const routes = require('./routes/cards');
const { MONGOURI } = require('./keys');

// const login = require('./api/routes/login');
const students = require('./api/routes/students');
const users = require('./api/routes/user');
const cards = require('./api/routes/cards');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.dxrpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', err => {
    console.log('Connection Failed!');
})

mongoose.connection.on('connected', connected => {
    console.log('Connected Successfully with Database');
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/login', login);
app.use('/students', students);
app.use('/users', users);
app.use('/cards', cards);


// app.use((req, res, next) => (
//     res.status(200).json({
//         message: 'app is running'
//     })
// ))

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Bad Request'
    })
})

module.exports = app;