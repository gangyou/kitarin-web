angular.module('kitarin')
.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/nodes', {
    templateUrl: 'templates/pages/nodes.html',
    controller: 'nodesCtrl',
  }).when('/view2', {
    templateUrl: 'templates/pages/view2.html',
  }).otherwise({
    redirectTo: '/view1',
  });
}]);
