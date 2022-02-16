const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set('view-engine', 'ejs')
// const routes = require('./routes/cards');
// const { MONGOURI } = require('./keys');
// const { JWT_SECRET } = require('./keys')

// const login = require('./api/routes/login');
const students = require('./api/routes/students');
const users = require('./api/routes/user');
const cards = require('./api/routes/cards');
const columns = require('./api/routes/columns');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://admin:admin1234@cluster0.dxrpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', err => {
    console.log('Connection Failed!');
})

mongoose.connection.on('connected', connected => {
    console.log('Connected Successfully with Database');
})

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use('/login', login);
app.use('/students', students);
app.use('/users', users);
app.use('/cards', cards);
app.use('/columns', columns);


// app.use((req, res, next) => (
//     res.status(200).json({
//         message: 'app is running'
//     })
// ))

app.use((req, res, next) => {
    res.status(404).json({
        error: 'Bad Request'
    })
    
    // res.render('index.ejs');
})

// app.use('/signup', (req, res, next) => {
//     res.render('signup.ejs')
// })

// app.get('/users/signup', (req, res, next) => {
//     res.render('signup.ejs')
// })

module.exports = app;