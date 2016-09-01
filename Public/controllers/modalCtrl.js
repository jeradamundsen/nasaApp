angular.module('nasaApp').controller('modalCtrl',function($scope, $log, $modal){


  this.modalUpdate = function (size, selectedLocation) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: './dirs/map_model-templ.html',
      controller: function ($scope, $uibModalInstance, locations) {
        $scope.location=location;
      },
      size: size,
      resolve: {
        items: function () {
          return selectedLocation;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
})
