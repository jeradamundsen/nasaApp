angular.module('nasaApp').controller('asteroidCtrl', function($scope, mainService){

  $scope.getAsteroidInfo=function(date){
    mainService.getAsteroidInfo(date).then(function(response){
          console.log(response.date)
          var nearMisses = [];
        for(var i=0; i<response.data.length; i++){
      if(response.data[i].near_earth_objects.close_approach_data.close_approach_date){
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
