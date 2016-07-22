var array = require('../data/friends.js');
var bodyParser = require('body-parser');
var path = require('path');

//Routes
module.exports = function(app){

	app.get('/api/friends', function(req,res){
		res.json(array);
	});

	app.post('/api/friends', function(req,res){
		
		//write function to show best results
		var lastDiff = 50;
		var bestMatch;
		array.forEach(function(item){
			console.log(item);
			var diff = 0;
			for(i=0;i<item.scores.length;i++){
				diff += Math.abs(item.scores[i] - req.body.scores[i])
			}
			if(diff <=lastDiff){
				lastDiff = diff;
				bestMatch = item;
			}
		});
		res.json(bestMatch);
		array.push(req.body);
	});

};





