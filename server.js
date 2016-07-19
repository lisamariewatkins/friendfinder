var express = require('express');
var bodyParse = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;

//SETS UP DATA PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//LISTEN
app.listen(PORT, function(){
	console.log('APP LISTENING AT PORT ' + PORT)
})