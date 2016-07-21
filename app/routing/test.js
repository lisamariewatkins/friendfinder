friends = [
	{scores: [2,2,2,2,2,2,2]},
	{scores: [3,3,3,3,3,3,3]}
]

userData = [4,4,4,4,4,4,4]


for (var i = 0; i < friends.length; i++){
		for (var j = 0; j < friends[i].scores.length;j++){
			var differences = [];
			differences.push(Math.abs(userData.scores[j] - friends[i].scores[j]));
			console.log(differences);
		}
	};