angular.module('nasaApp')
    .controller('mapController', function($scope, mainService) {

        $scope.initMap = (lat, lon) => {
            mainService.getMeteoriteMap().then(function(response, req) {
                console.log(response)
                for (var i = 0; i < response.data.length; i++) {
                  console.log(response.data[i].name);
                  // console.log(parseFloat(response.data[i].reclat));
                    new google.maps.Marker({
                        position: {
                            lat: parseFloat(response.data[i].reclat),
                            lng: parseFloat(response.data[i].reclong),
                        },
                        map: map,
                        title: response.data[i].name,

                    })
                }

            })
            console.log(lat);
            console.log(lon);
            var mapOptions = {
              center: new google.maps.LatLng(lat, lon),
              zoom: 6,
            };
            var map = new google.maps.Map(
              document.getElementById('mapDiv'), mapOptions);
        }
    })
