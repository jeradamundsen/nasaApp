angular.module('nasaApp')
    .controller('mapController', function($scope, mainService) {

        $scope.initMap = () => {
            mainService.getMeteoriteLanding().then(function(response) {
                console.log(response)
                for (var i = 0; i < response.data.length; i++) {
                    new google.maps.Marker({
                        position: {
                            lat: parseInt(response.data[i].reclat),
                            lng: parseInt(response.data[i].reclong),
                        },
                        map: map,
                        title: response.data[i].name,

                    })
                }

            })

            var mapOptions = {
                center: new google.maps.LatLng(0, 0),
                zoom: 3,
            };

        }
        var map = new google.maps.Map(
            document.getElementById('mapDiv'), mapOptions);
    })



})
