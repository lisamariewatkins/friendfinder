//Routes
app.get('/api/friends', function(req,res){
	res.json();
})

app.post('/api/friends', function(req,res){
	var newFriend = req.body;
	newFriend.friendID = newFriend.friendName.replace(/\s+/g, '').toLowerCase();
	friends.push(newFriend);
	//write function to show best results
	for (var i = 0; i < friends.length; i++){
		for (var j = 0; j < friends[i].scores.length;j++){
			var differences = [];
			differences.push(Math.abs(userData.scores[j] - friends[i].scores[j]));
		}
	}
})