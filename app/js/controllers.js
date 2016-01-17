angular.module('kitarin')
.controller('nodesCtrl', ['$scope', 'shipyard', function($scope, shipyard){
  $scope.nodes = {};

  $scope.showNode = function(node){
    console.log(node);
  }

  shipyard.nodes().then(function(response){
    $scope.nodes = response.data;
  }, function(error){
    console.log(error);
  });

}]);
