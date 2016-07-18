var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = require('./router.js');

var app = express();
var port = 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', router);
// below may change to compiled folder for react
app.use(express.static(__dirname + '/../client')); 


app.listen(port, function() {
  console.log('Server listening on port', port);
});