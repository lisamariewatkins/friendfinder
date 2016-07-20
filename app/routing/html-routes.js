//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = expres();
var PORT = 8080;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json()); //JSONifys something
app.use(bodyParser.urlencoded({extended: true})); //
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Routes

app.get("/survey", function(req,res){
	res.sendFile(path.join(__dirname, "../public/survey.html"))
})
