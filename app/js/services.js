angular.module('kitarin')
.provider('shipyard', function shipyardProvider(){

  var url = 'http://localhost:8080/shipyard';

  this.setUrl = function(newUrl){
    url = newUrl;
  }

  this.$get = ['$http', function($http){
    return {
      nodes: function(){
        return $http.get(url + "/api/nodes");
      }
    };
  }];
});
