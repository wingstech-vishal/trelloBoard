const http  = require('http');
const app = require('./app');
const server = http.createServer(app);


server.listen(3000, () => console.log('Server is up and running'));

// const app = require('express')();
// const PORT = 8080; 

// app.get('/login', (req, res) => {
//     res.status(200).send({
//         username: 'tanay',
//         password: '1234'
//     })
// });

// app.listen(
//     PORT,
//     () => console.log(`Server is up and running on ${PORT}`)
// )