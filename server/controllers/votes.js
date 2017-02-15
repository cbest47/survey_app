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
            Vote.count({option_chosen: newVote.option_chosen}, function(err, count){
    				if(err){
    					console.log(err);
    					res.statusCode = 422;
    					res.json(err);
    				}
    				else{
              console.log('Vote Count: ', count);
              data = data.toJSON();
              data['vote_count'] = count;
              console.log(data);

              res.json(data);
    				}});
          }
			}
    )}
  }
}();
