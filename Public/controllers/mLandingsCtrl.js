angular.module('nasaApp').controller('mLandingsCtrl', function($scope, mainService){

$scope.sortProp = '-name'
$scope.sortDirection = false;
// $scope.$watch("meteorite.reclong")
// $scope.$watch("meteorite.reclat")

$scope.gridOptions = {
        data: 'meteoriteData',
        sortInfo: {fields: ['Mass', 'Type'], directions: ['asc']},
        columnDefs: [
          {field:'name', displayName:'Name'}, {field:'mass', displayName:'Mass(g)'},{field:'type', displayName:'Type'}]
    };

  $scope.meteoriteLandings= function(query){
    var newQuery = $scope.query+ "-01-01T00:00:00"
    mainService.getLandings(newQuery).then(function(meteoriteData){
      console.log(meteoriteData)
      // $scope.latitude = response.data.reclat;
      // $scope.longitude = response.data.reclong;
$scope.meteoriteData=meteoriteData;
    })
}
    // $scope.meteoriteTypes= function(meteoriteType){
    // mainService.getMeteoriteType(meteoriteType).then(function(response){
    //   $scope.meteoriteType=response.data.recclass
    // })
    // }


//modal for meteorite types//
// $scope.open = function (size) {
//
//   var modalInstance = $uibModal.open({
//     animation: $scope.animationsEnabled,
//     templateUrl: 'myModalContent.html',
//     controller: 'ModalInstanceCtrl',
//     size: size,
//     resolve: {
//       items: function () {
//         return $scope.items;
//       }
//     }
//   });
//
//   modalInstance.result.then(function (selectedItem) {
//     $scope.selected = selectedItem;
//   }, function () {
//     $log.info('Modal dismissed at: ' + new Date());
//   });
// };
//
// $scope.toggleAnimation = function () {
//   $scope.animationsEnabled = !$scope.animationsEnabled;
// };

})
