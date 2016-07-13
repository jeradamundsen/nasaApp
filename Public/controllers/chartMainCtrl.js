angular.module('nasaApp').controller('chartMainCtrl', function($scope, $http, mainService) {

            $scope.getMeteoriteLandingByDate = function() {
                mainService.getMeteoriteLanding().then(
                      function(response) {
                        var landingList = [];
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data.year[i] === query.toString()) {
                                var myObj = {
                                    longitude: response.data.reclong[i],
                                    latitude: response.data.reclat[i],
                                    name: response.data.name[i]
                              }
                                landingList.push(myObj);
                            }
                          }
                          $scope.landingList
                        })

                }



            })// closes the controller module
