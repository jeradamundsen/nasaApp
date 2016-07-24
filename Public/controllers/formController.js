angular.module('nasaApp').controller('formController', function($scope, $state, mainService){


$scope.reports =[];
$scope.getReports = function(){
  mainService.getReports().then( function(result){
console.log(result)

    $scope.reports =
      result.data;


  } )
}

$scope.getReports()
  });
