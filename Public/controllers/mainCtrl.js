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
          var count=0;
          report.reportedBy =currentUser._id; // creatingreportedby propety on report object
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
