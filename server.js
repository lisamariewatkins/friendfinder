var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

//SETS UP DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var api = require('./app/routing/api-routes.js');
var html = require('./app/routing/html-routes.js');

//call route functions
api(app);
html(app);

//LISTEN
app.listen(PORT, function(){
	console.log('APP LISTENING AT PORT ' + PORT)
})