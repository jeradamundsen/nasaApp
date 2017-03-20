
    nasaApp.controller('mainCtrl', [ '$scope','$http','$state','mainService','$stateParams', function($scope, $http, $state, mainService, $stateParams) {

    var getImageData = function() {
        mainService.getImageInfo().then(function(response) {
          $scope.imageData = response.data;
            })
        }
    getImageData();
    $scope.createUser = function(user) {

          mainService.createUser(user).then(function(result){
            console.log("hit")
            $scope.newUser=result.data;
            currentUser = $scope.newUser;
            console.log(currentUser)
            $state.go("reportFireball")
          });
        };



    }]);
