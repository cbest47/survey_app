var mongoose = require("mongoose");


var SurveySchema = new mongoose.Schema({
	username: {
		type: String,
	},
	survey_question: {
		type: String,
		required: [true, "Please, write a question"]
	},
	option_one: {
		type: String,
		required: [true, "Please, give an option"]
	},
	option_two: {
		type: String,
		required: [true, "Please, give an option"]
	},
	option_three: {
		type: String,
		required: [true, "Please, give an option"]
	},
	option_four: {
		type: String,
		required: [true, "Please, give an option"]
	},
	date_created: {
		type: Date
	}
});


mongoose.model('Survey', SurveySchema);
