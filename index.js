var express = require(‘express’);


var app = express():



app.get(‘/’, function (req, res) {

res.send(‘hello This is my Nodejs Task ’);

});



app.listen(process.env.PORT || 80);


module.exports = app;


execute shell- npm install

