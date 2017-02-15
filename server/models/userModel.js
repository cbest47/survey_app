var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please, give your first name"]
	}
});


mongoose.model('User', UserSchema);
