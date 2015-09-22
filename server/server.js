var express = require('express');
// var morgan = require('morgan'); // used for logging incoming request
// var bodyParser = require('body-parser');

var app = express();


// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

// app.use(express.static(__dirname + '/../../images'));

app.listen(8000);
console.log('Listening on port 8000');
