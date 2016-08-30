angular.module('nasaApp').controller('mLandingsCtrl', function($scope, mainService){
$scope.sortColumn="mass";
$scope.reverseSort= false;
$scope.sortData = function(column){
  $scope.reverseSort = ($scope.sortColumn == column)? !$scope.reverseSort : false; $scope.sortColumn= column
}
$scope.getSortClass=function(column){
  if($scope.sortColumn == column){
    return $scope.reverseSort ? 'arrow-down': 'arrow-up'
  }
  return '';
}
// $scope.$watch("meteorite.reclong")
// $scope.$watch("meteorite.reclat")

// $scope.gridOptions = {
//         data: 'meteoriteData',
//         sortInfo: {fields: ['Mass', 'Type'], directions: ['asc']},
//         columnDefs: [
//           {field:'name', displayName:'Name'}, {field:'mass', displayName:'Mass(g)'},{field:'type', displayName:'Type'}]
//     };

  $scope.meteoriteLandings= function(query){
    var newQuery = $scope.query+ "-01-01T00:00:00"
    mainService.getLandings(newQuery).then(function(meteoriteData){
    $scope.meteoriteDataCenter = meteoriteData
      // $scope.latitude = response.data.reclat;
      // $scope.longitude = response.data.reclong;

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
