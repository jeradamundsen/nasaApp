angular.module('nasaApp').controller('formController', function($scope, $state, mainService){

$scope.createReport = function(report){
 var count=0;
  mainService.createReport(report).then(function(result){
  count+=
    console.log("got Report")
    $scope.newReport = result.data;
    $state.go("thanks")
  })
$scope.count=count;
};

  });
