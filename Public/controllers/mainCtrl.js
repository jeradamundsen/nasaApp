angular.module('nasaApp')
    .controller('mainCtrl', function($scope, $http, $state, mainService, $stateParams) {

    $scope.getImageData = function() {
        mainService.getImageInfo().then(function(response) {
          $scope.imageData = response.data;
            })
        }
    $scope.createUser = function(user) {

          mainService.createUser(user).then(function(result){
            console.log("hit")
            $scope.newUser=result.data;
            currentUser = $scope.newUser;
            console.log(currentUser)
            $state.go("reportFireball")
          });
        };

    $scope.createReport = function(report){
      mainService.createReport(report).then(function(result){
                //  count+=
                console.log(result)
                console.log("got Report")
                $scope.newReport = result.data;
                $state.go("verifyFireball")
          })
          //  $scope.count=count;
        }

    });
