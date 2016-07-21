friends = [
	{scores: [2,2,2,2,2,2,2]},
	{scores: [3,3,3,3,3,3,3]}
]

userData = {scores: [4,4,4,4,4,4,4]}



for (var i = 0; i < friends.length; i++){
		var differences = [];
		for (var j = 0; j < friends[i].scores.length;j++){	
			differences.push(Math.abs(userData.scores[j] - friends[i].scores[j]));
		}
		totalDifference = differences.reduce(add, 0);
		function add(a,b){
			return a + b;
		}
	console.log(totalDifference);
	};