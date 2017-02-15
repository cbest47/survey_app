logApp.controller('usersController', ['userFactory', '$cookies', '$location', function(userFactory, $cookies, $location){

	var signedin = $cookies.get('useridCookie');
	console.log("SIGNED IN: ", signedin)
	if(signedin) {
		console.log("User is logged in");
		$location.url('/surveys')
	}
	else{
		$location.url('/login');
	}

	var self = this;
	this.validationErrors;

	this.logged_in = function() {
		return $cookies.get('userIdCookie') != null
	}

	this.register = function(){
		// console.log(self.regUser);
		userFactory.register(self.regUser, function(data){
		userFactory.setLogin(data);
		$cookies.put('useridCookie', data.id);
		$cookies.put('usernameCookie', data.username)
			$location.url('/surveys');
		}, function(error){

			self.validationErrors = error.data.errors
		})
	}

	this.logout = function() {
		$cookies.remove('useridCookie')
		$location.url('/login')
	}

	this.login = function(){
		console.log(self.logUser);
		userFactory.login(self.logUser, function(response){
			let data = response.data;
			console.log("first cookie", data);
			userFactory.setLogin(data);
			$cookies.put('useridCookie', data._id);
			$cookies.put('usernameCookie', data.username)
			$location.url('/surveys');


		}, function(error){
			console.log("second callback");
			console.log(error);
			self.validationErrors = error.data.data.errors;
		})
	}
}])
