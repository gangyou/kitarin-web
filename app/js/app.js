angular.module('kitarin', ['ngRoute'])
.config(['$httpProvider', function($httpProvider){
  // Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;
}]);
