angular.module('nasaApp').controller('landingsCtrl', function($scope, mainService){
$scope.sortProp = 'name'
$scope.sortDirection = false;
$scope.$watch("meteorite.reclong")
$scope.$watch("meteorite.reclat")
  $scope.meteoriteLandings= function(query){
    var newQuery = $scope.query+ "-01-01T00:00:00"
    mainService.getLandings(newQuery).then(function(response){
      console.log(response.data)
      $scope.meteorites=response.data;
      $scope.latitude = response.data.reclat;
      $scope.longitude = response.data.reclong;
    })

}



})
