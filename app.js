var app = angular.module('RCapp', [
  'ui.router']);

app.controller('qCtrl', ["$scope", function($scope){
  $scope.master = {};

  $scope.update = function(user){
    $scope.master = angular.copy(user);
  };

}]);

app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/');
  $stateProvider

  .state('questions',
  {
    url:'/questions',
    templateUrl:'partial_views/question_form.html'
  })

  .state('results',
  {
    url:'/results',
    templateUrl:'partial_views/results.html'
  });
});
