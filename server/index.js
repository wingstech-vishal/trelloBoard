const http  = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const errorHandler = require('./api/middleware/errorHandler');
dotenv.config()
const server = http.createServer(app);

app.use(errorHandler)
const PORT = 3000 || process.env.APP_PORT
server.listen(PORT, () => console.log('Server is up and running'));

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