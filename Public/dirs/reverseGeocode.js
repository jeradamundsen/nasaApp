// angular.module('nasaApp')
//     .directive('reverseGeocode', function () {
//         return {
//             restrict: 'EA',
//             template: '<div></div>',
//             link: function (scope, element, attrs) {
//                 var geocoder = new google.maps.Geocoder();
//                 var latlng = new google.maps.LatLng(attrs.lat, attrs.lng);
//                 geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//                     if (status == google.maps.GeocoderStatus.OK) {
//                         if (results[1]) {
//                             element.text(results[1].formatted_address);
//                         } else {
//                             element.text('Location not found');
//                         }
//                     } else {
//                         element.text('Geocoder failed due to: ' + status);
//                     }
//                 });
//             },
//             replace: true
//         }
//     });
