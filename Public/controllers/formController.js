angular.module('nasaApp').controller('formController', function($scope, $state, mainService){


$scope.reportCenter=[]
$scope.getReports = function(){
  mainService.getReports().then( function(result){
console.log(result)

    $scope.reports =
      result.data;

})
}

  $scope.createReport = function(report){
    mainService.createReport(report).then(function(result){
              //  count+=
              console.log(result)
              console.log("got Report")
              $scope.newReport= result.data
              $scope.reportCenter.push($scope.newReport);

        })
        //  $scope.count=count;
    }
});
