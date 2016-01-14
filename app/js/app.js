angular.module('myApp', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/view1', {
    templateUrl: 'templates/pages/view1.html',
  }).when('/view2', {
    templateUrl: 'templates/pages/view2.html',
  }).otherwise({
    redirectTo: '/view1',
  });
}]);
