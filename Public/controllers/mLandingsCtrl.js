angular.module('nasaApp').controller('mLandingsCtrl', function($scope, mainService, imageService){

$scope.sortColumn="mass";
$scope.reverseSort= false;
$scope.sortData = function(column){
  $scope.reverseSort = ($scope.sortColumn == column)? !$scope.reverseSort : false; $scope.sortColumn= column
}
$scope.getSortClass=function(column){
  if($scope.sortColumn == column){
    return $scope.reverseSort ? 'arrow-down': 'arrow-up'
  }
  return '';
}
// $scope.makeLocationObj=function(location){
//   $scope.locationObj={
//     lat: location.latitude,
//     lng: location.longitude
//   }
// }
$scope.display=true;
$scope.getLocation = function(){
  $scope.display = false;
}


// $(document).ready(function(){
//   $('#seeImages').on('click', 'button', function(){
//     $(this).find('.imageToUse').slideDown();
//   });
//   $('#seeImages').on('click', 'viewMeteoriteImage',function(){
//     $(this).closest('.imageToUse').find('img').show()
//   })
// })

$scope.latitudeCenter =[]
$scope.longitudeCenter =[]
// query meteorite api and match type for images//
  $scope.meteoriteLandings= function(query){
    var newQuery = $scope.query+ "-01-01T00:00:00"
    mainService.getLandings(newQuery).then(function(meteoriteData){
    $scope.meteoriteDataCenter = meteoriteData;
    $scope.total =meteoriteData.length;

    for(var i=0; i<meteoriteData.length; i++){
      $scope.latitudeCenter.push(meteoriteData[i].latitude)
      $scope.longitudeCenter.push(meteoriteData[i].longitude)

    }

  })
}


$scope.getImage = function(metType) {
  var correctImage =[];
var meteoriteImages = imageService.getMeteoriteImages()
  console.log(meteoriteImages);
for(i=0; i<meteoriteImages.length; i++){
  if(meteoriteImages[i].type== metType){
    correctImage=meteoriteImages[i].imageUrl;
  }

}
$scope.correctImage=correctImage;
}


})
