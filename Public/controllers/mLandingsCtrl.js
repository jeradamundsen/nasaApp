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

$scope.display=true;
$scope.getLocation = function(){
  $scope.display = false;
}

$scope.showGeocode = function(){
  $('.displayGeocode').removeClass('.hidden')

}

$scope.geoDataCenter=[];
$scope.addGeoData= function(){
  $scope.geoDataCenter.push(buildGeos())
}
 function buildGeos(){
   return{
     lat: $scope.lat,
     lng: $scope.lng
   }
 }

$scope.latitudeCenter =[]
$scope.longitudeCenter =[]
// query meteorite api and match type for images//
$scope.quantity= 10
  $scope.meteoriteLandings= function(query){
    var newQuery = $scope.query+ "-01-01T00:00:00"
    mainService.getLandings(newQuery).then(function(meteoriteData){
    $scope.meteoriteDataCenter = meteoriteData;
    $scope.total =meteoriteData.length;

    for(var i=0; i<meteoriteData.length; i++){
      $scope.latitudeCenter.push(meteoriteData[i].latitude)
      $scope.longitudeCenter.push(meteoriteData[i].longitude)

    }

  }, function(err){
    $scope.errorMessage= err
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
