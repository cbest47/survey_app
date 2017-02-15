logApp.factory('userFactory', function($http){
	console.log("user factory loaded up");
	var factory = {};
	factory.loggedUser = {};
	factory.register = function(user, callback, errorCallback){
		console.log(user);
		$http.post('/users', user).then(callback, errorCallback);
		factory.loggedUser = user;
	}

	factory.login = function(logUser, callback, errorCallback){
		console.log(logUser);
		$http.post('/login', logUser).then(callback, errorCallback);
	}

	factory.setLogin = function(user){
		factory.loggedUser = user;
	}





	return factory;
})
