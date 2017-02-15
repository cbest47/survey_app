var mongoose = require("mongoose");


var VoteSchema = new mongoose.Schema({
	option_chosen: {
		type: String,
		required: [true, "Please, give your first name"]
	},
	survey_question:{
		type: String,
		required: [true, "No survey was listed"]
	}
});


mongoose.model('Vote', VoteSchema);
