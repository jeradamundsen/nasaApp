'use strict';

fireballCtrl.$inject['$scope','$state','mainService']
function fireballCtrl(){
  $scope.getReports = function(){
    return mainService.getReports().then( function(result){
       console.log(result)
       return result.data;

    })
    return result.data = $scope.reports;
  }
module.exports = fireballCtrl;
