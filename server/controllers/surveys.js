var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = function(){
	console.log("users controller loaded up");
	return {
		create: function(req,res){
			console.log(req.body);
			var newSurvey = new Survey(req.body);
			newSurvey.save(function(err, data){
				if(err){
					console.log("*****GOT ERROR*****")
					console.log(err);
					res.status(422);
					res.json(err);
				}
				else{
					console.log(data);
					res.json(data);
				}
			})
		},
    index: function(req, res){
      Survey.find({}, function(err, results){
        res.json(results);
      });
    },

		show: function(req, res){
			Survey.findOne({_id: req.params.id}, function(err, survey){
				if(err){
					console.log(err);
					res.statusCode = 422;
					res.json(err);
				}
				else{
					res.json(survey);
				}

			});
		}




	}
}();
