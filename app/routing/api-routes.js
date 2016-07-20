//Routes

app.get('/api/friends', function(req,res){
	res.json();
})

app.post('/api/friends', function(req,res){
	var newFriend = req.body;
	newFriend.friendID = newFriend.friendName.replace(/\s+/g, '').toLowerCase();
	friends.push(newFriend);
	res.json(newFriend);
})