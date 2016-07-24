angular.module('nasaApp').controller('chartMainCtrl', function($scope, $http, mainService) {



            $scope.getMeteoriteLandingByDate = function(query) {
              var newQuery = $scope.query + "-01-01T00:00:00";
                mainService.getMeteoriteLanding(newQuery).then(
                    function(response) {
                    //  console.log(response.data)
                        var total=0;
                        var landingList = [];

                      for (var i = 0; i < response.data.length; i++) {

                            if (response.data[i].year == newQuery.toString()) {
                                var name = response.data[i].name.replace(/[0-9]/g, '');
                                    var myObj = {
                                        longitude: response.data[i].reclong,
                                        latitude: response.data[i].reclat,
                                        name: name
                                    }  // closes object
                                      landingList.push(myObj);
                                        $scope.count = landingList.length;
                                        console.log(landingList.length)
                            }
                            console.log(landingList) // closes if statement
                            $scope.landingList = landingList;

                          }  mainService.generateMeteoriteLandingIds(landingList)
                              .then(function(response){
                                console.log(response)
                              }
                          )

                })
              }


          }) // closes the controller module
