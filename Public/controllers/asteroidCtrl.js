angular.module('nasaApp').controller('asteroidCtrl', function($scope, mainService){

  $scope.getAsteroidInfo=function(){
    mainService.getAsteroidInfo().then(function(response){
          var nearMisses = [];
        for(var i=0; i<response.data.length; i++){
      if(response.data.near_earth_objects.close_approach_data.close_approach_date[i]){
        var astObj= {
          miss_distance: near_earth_objects.close_approach_data.miss_distance,
          name : near_earth_objects.name
        }
          nearMisses.push(astObj);
      }
    }
    $scope.nearMisses
    })
  }



})// closes controller
