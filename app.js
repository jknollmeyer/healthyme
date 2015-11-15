var app = angular.module('RCapp', [
  'ui.router']);

app.controller('qCtrl', ["$scope", "$state", function($scope, $state) {
  $scope.master = {};
  $scope.risks = ["Heart Disease", "Cancer", "Swag Overdose"];
  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    $state.go('results');
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();

}]);

app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/');
  $stateProvider
  .state('default',
  {
    url:'/',
    templateUrl:'partial_views/default.html'
  })
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
