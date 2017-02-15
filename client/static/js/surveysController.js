logApp.controller('surveysController', ['surveysFactory', '$routeParams', '$cookies', '$location', function(surveysFactory, $routeParams, $cookies, $location){





var self = this;
this.validationErrors;
this.surveys = [];
this.oneSurvey = [];

var signedin = $cookies.get('useridCookie');
this.username = $cookies.get('usernameCookie');

this.surveySubmit = function(){
  console.log("In the survey controller")
  self.newSurvey.username = $cookies.get('usernameCookie');
  console.log(self.newSurvey);
  self.newSurvey.date_created = Date.now();
  surveysFactory.surveySubmit(self.newSurvey, function(data){
  $location.url('/surveys');
  })
}


this.getAll = function(){
  surveysFactory.getAll(function(surveys){
    self.surveys = surveys;
  })
}

this.showsurvey = function(){
  surveysFactory.showsurvey($routeParams.id, function(survey){
  self.oneSurvey = survey;
  console.log('one survey', survey);
  })
}

this.vote = function(data){
  console.log("New vote", data);
  newVote = {};
  if(data == 'option1'){
    newVote.option_chosen = 'option_one'
    newVote.survey_question = self.oneSurvey.survey_question;
    surveysFactory.vote(newVote, function(data){
      $location.url('/surveys');
    })
  }
  else if(data == 'option2'){
    newVote.option_chosen = 'option_two'
    newVote.survey_question = self.oneSurvey.survey_question;
    surveysFactory.vote(newVote, function(data){
      $location.url('/surveys');
    })
  }
  else if(data == 'option3'){
    newVote.option_chosen = 'option_three'
    newVote.survey_question = self.oneSurvey.survey_question;
    surveysFactory.vote(newVote, function(data){
      $location.url('/surveys');
    })
  }
  else if(data == 'option4'){
    newVote.option_chosen = 'option_four'
    newVote.survey_question = self.oneSurvey.survey_question;
    surveysFactory.vote(newVote, function(data){
      $location.url('/surveys');
    })
  }

}



}])
