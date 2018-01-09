angular.module('nasaApp').controller('formController', function($scope, $state, mainService){



$scope.getReports = function(){
  mainService.getReports().then( function(result){
console.log(result)

    $scope.reports =
      result.data;

})
}
$scope.reportCenter=[]
  $scope.createReport = function(report){
    mainService.createReport(report).then(function(result){
              //  count+=

              $scope.reportCenter= result;

        })
        
    }
});
