// Get dependencies
const express     = require('express');
const morgan      = require('morgan');

const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 80;

// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.send("hello world!!");
});
app.get('/health', (req, res) => {
  res.send({
    ok: true
   });
});

// use morgan to log requests to the console
app.use(morgan('dev')); 

server.listen(port);
console.log('App running at http://localhost:' + port);
