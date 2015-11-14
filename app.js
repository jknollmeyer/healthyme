var app = angular.module('RCapp', [
  'ui.router']);

app.controller('qCtrl', ["$scope", function($scope){
  $scope.master = {};

  $scope.update = function(user){
    $scope.master = angular.copy(user);
  };

}]);

app.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/index');
  $stateProvider

  .state('questions',
  {
    url:'/index',
    templateUrl:'index.html'
  })

  .state('results',
  {
    url:'/results',
    templateUrl:'results.html'
  });
});
