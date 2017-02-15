var logApp = angular.module('myApp', ['ngRoute','ngCookies']);

logApp.config(function($routeProvider, $cookiesProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/users/login.html',
    controller: 'usersController',
    controllerAs: 'UC'
  })
  .when('/welcome', {
    templateUrl: 'partials/users/welcome.html',
    controller: 'usersController',
    controllerAs: 'UC'
  })
  .when('/surveys', {
    templateUrl: 'partials/surveys/surveylist.html',
    controller: 'surveysController',
    controllerAs: 'SC'
  })
  .when('/surveys/new', {
    templateUrl: 'partials/surveys/new.html',
    controller: 'surveysController',
    controllerAs: 'SC'
  })
  .when('/surveys/:id', {
    templateUrl: 'partials/surveys/show.html',
    controller: 'surveysController',
    controllerAs: 'SC'
  })


});
