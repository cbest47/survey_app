var users = require('./../controllers/users.js');
var surveys = require('./../controllers/surveys.js');
var votes = require('./../controllers/votes.js');


module.exports = function(app){
	console.log('routes imported');
	app.post('/users', users.create);
	app.post('/login', users.create);
	app.get('/surveys', surveys.index);
	app.post('/surveys/new', surveys.create);
	app.get('/surveys/:id', surveys.show);
	app.post('/surveys/vote', votes.create); 
}
