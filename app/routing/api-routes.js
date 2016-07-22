var array = require('./../data/friends.js');

//Routes
module.exports = function(app){

	function add(a,b){
		return a + b;
	}

	var bestMatch;

	app.get('/api/friends', function(req,res){
		res.json();
	})

	app.post('/api/friends', function(req,res){
		var newFriend = req.body;
		newFriend.friendID = newFriend.friendName.replace(/\s+/g, '').toLowerCase();
		array.push(newFriend);
		//write function to show best results
		for (var i = 0; i < friends.length; i++){
			var differences = [];
			var totalDifference;
			var lastDif = 50;

			for (var j = 0; j < friends[i].scores.length;j++){	
				differences.push(Math.abs(userData.scores[j] - friends[i].scores[j]));
				
				totalDifference = differences.reduce(add, 0);
				
				if (totalDifference < lastDif){
					lastDif = totalDifference;
					bestMatch = friends[i];
				}
			}	
		};
	});

};





