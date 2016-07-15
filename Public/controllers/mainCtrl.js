angular.module('nasaApp')
    .controller('mainCtrl', function($scope, $http, $state, mainService, $stateParams) {
        // $scope.objects=[]
var curretUser;
        $scope.getImageData = function() {
            mainService.getImageInfo().then(function(response) {
                $scope.imageData = response.data;
            })

        }
// $scope.date=marsData.earth_date
        // $scope.getMarsData = function() {
        //     mainService.getMarsInfo().then(function(response) {
        //         console.log(response.data)
        //         $scope.marsData = response.data;
        //
        //     })
        // }





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
          mainService.createReport(report,currentUser._id).then(function(result){
                console.log(result)
          })
        }


    });
