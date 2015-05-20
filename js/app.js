var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  	$routeProvider.when('/', {
  		templateURL: 'js/home/homeTmpl.html',
  		controller: 'homeCtrl'
  	});

  	$routeProvider.when('/teams/:team',	{
  		templateURL: 'js/teams/teamTmpl.html',
  		controller: 'teamCtrl', 
      resolve:  {
        teamData: function($route, teamService)  {
           return teamService.getTeamData($routeParams.current.params.team);
        }.otherwise ({
          redirectTo: '/'
        })
      }
  	});
  	

});