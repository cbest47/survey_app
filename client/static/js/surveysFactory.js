logApp.factory('surveysFactory', function($http){
	console.log("survey factory loaded up");

	var factory = {};
	var surveys = {};
	factory.surveySubmit = function(survey, callback, errorCallback){
		console.log(survey);
		$http.post('/surveys/new', survey).then(callback, errorCallback);

	}

	factory.getAll = function(callback){
		$http.get('/surveys').then(function(response){
			surveys = response.data;
			callback(surveys);
		})
	}

	factory.showsurvey = function(id, callback){
		$http.get(`/surveys/${id}`).then(function(response){
			console.log('hi', response);
			callback(response.data);
		})
	}

	factory.vote = function(vote, callback, errorCallback){
		console.log(vote);
		$http.post('/surveys/vote', vote).then(callback, errorCallback);
	}


	return factory;
})
