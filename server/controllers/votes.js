var mongoose = require('mongoose');
var Vote = mongoose.model('Vote');

module.exports = function(){
	console.log("users controller loaded up");
	return {
		create: function(req,res){
			console.log(req.body);
			var newVote = new Vote(req.body);
			newVote.save(function(err, data){
				if(err){
					console.log("*****GOT ERROR*****")
					console.log(err);
					res.status(422);
					res.json(err);
				}
				else{
          votes = Vote.count();
          
          console.log('Vote Count: ', votes);
          data.vote_count = votes;
					console.log(data);
					res.json(data);
				}
			})
		}




	}
}();
