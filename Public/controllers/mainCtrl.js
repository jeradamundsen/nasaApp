angular.module('nasaApp')
    .controller('mainCtrl', function($scope, $http, $state, mainService, $stateParams) {
        // $scope.objects=[]

        $scope.getImageData = function() {
            mainService.getImageInfo().then(function(response) {
                $scope.imageData = response.data;
            })

        }
// $scope.date=marsData.earth_date
        $scope.getMarsData = function() {
            mainService.getMarsInfo().then(function(response) {
                console.log(response.data)
                $scope.marsData = response.data;

            })
        }



      

        $scope.createUser = function(user) {
          mainService.createUser(user);
        };



    });
