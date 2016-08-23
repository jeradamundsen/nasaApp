angular.module('nasaApp').controller('chartMainCtrl', function($scope, $log, $http, mainService, $modal) {



            // $scope.getMeteoriteLandingByDate = function(query) {
            //   var newQuery = $scope.query + "-01-01T00:00:00";
            //     mainService.getMeteoriteLanding(newQuery).then(
            //         function(response) {
            //         //  console.log(response.data)
            //             var total=0;
            //             var landingList = [];
            //
            //           for (var i = 0; i<response.data.length; i++) {
            //
            //                 if (response.data[i].year == newQuery.toString()) {
            //                     var name = response.data[i].name.replace(/[0-9]/g, '');
            //                         var myObj = {
            //                             longitude: response.data[i].reclong,
            //                             latitude: response.data[i].reclat,
            //                             name: name,
            //                             classification: response.data[i].recclass
            //                         }
            //                           landingList.push(myObj);
            //                             // $scope.count = landingList.length;
            //                             console.log(landingList)
            //                  }
            //                 // console.log(landingList)
            //                 $scope.landingList = landingList;
            //               }
            //
            //     })
            //
            //
            //   }
            //   $scope.lat="landing.latitude";
            //   $scope.lng ="landing.longitude";
            //   $scope.initMap = function(lat, lng){
            //     var mapOptions = {
            //       center: new google.maps.LatLng(0, 0),
            //       zoom: 6
            //
            //     };
            //       var map= new google.maps.Map(document.getElementById('map'),mapOptions)
            //       var markerOptions = {
            //         position: new google.maps.LatLng(0,0)
            //       }
            //       var market = new google.maps.Marker(markerOptions);
            //       market.setMap(map)
            //     }






            //   $scope.makeClassificationModal =function(){}
            //
            //
            //     var chrondite = [];
            //     var rareChrondite = [];
            //     var achondrite = [];
            //     var Iron =[];
            //     var StonyIron = []
            //     for(var i=0; i<response.data.length; i++){
            //        if(response.data[i].recclass ==  "CH" || "CI" || "CK" || "CM" || "CO" || "CR" || "CV" || "C" || "EH" || "EL"){
            //          chrondite.push(response.data[i])
            //          $scope.chrondrite = chrondite;
            //          else if(response.data[i].recclass == "")
            //          console.log(chrondite)
            //     }
            //   }
            // }
            //   $scope.getMeteoriteIds =function(){
            //   mainService.generateMeteoriteLandingIds(landingList)
            //      .then(function(response){
            //        console.log(response)
            //      })
            //  }
              // $scope.initMap = (reclat, reclon) => {
              //     mainService.getMeteoriteMap().then(function(response) {
              //         console.log(response)
              //         for (var i = 0; i < response.data.length; i++) {
              //           console.log(response.data[i].name);
              //           console.log(parseFloat(response.data[i].reclat));
              //             new google.maps.Marker({
              //                 position: {
              //                     lat: parseFloat(response.data[i].reclat),
              //                     lng: parseFloat(response.data[i].reclong),
              //                 },
              //                 map: map,
              //                 title: response.data[i].name,
              //
              //             })
              //         }
              //
              //     })
              //     console.log(lat);
              //     console.log(lon);
              //     var mapOptions = {
              //       center: new google.maps.LatLng(lat, lon),
              //       zoom: 6,
              //     };
              //     var map = new google.maps.Map(
              //       document.getElementById('mapDiv'), mapOptions);
              // }


          }) // closes the controller module
