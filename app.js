// Get dependencies
var express     = require('express');
var morgan      = require('morgan');

var app = express();
var server = require('http').Server(app);
port = process.env.PORT || 80;

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
