

meteoriteLandings.$inject['$scope','mainService','imageService'];
function meteoriteLandings(mainService, imageService){
  var landings = this;
landings.sortColumn="mass";
landings.myGeo = {};
landings.reverseSort= false;
landings.sortData = function(column){
landings.reverseSort = (landings.sortColumn == column)? !landings.reverseSort : false; landings.sortColumn= column
}
landings.getSortClass=function(column){
  if(landings.sortColumn == column){
    return landings.reverseSort ? 'arrow-down': 'arrow-up'
  }
  return '';
}
// $scope.makeLocationObj=function(location){
//   $scope.locationObj={
//     lat: location.latitude,
//     lng: location.longitude
//   }
// }
landings.display=true;
landings.getLocation = function(){
landings.display = false;
}

landings.showGeocode = function(){
landings.$apply = function(){
  $('.displayGeocode').removeClass('.hidden')
  }
}

landings.geoDataCenter=[];
landings.addGeoData= function(myGeo){

var geoObj=
    {
      lat: parseFloat(myGeo.lat),
      lng: parseFloat(myGeo.lng)
    }
landings.geoDataCenter.push(geoObj)
}


// $(document).ready(function(){
//   $('#seeImages').on('click', 'button', function(){
//     $(this).find('.imageToUse').slideDown();
//   });
//   $('#seeImages').on('click', 'viewMeteoriteImage',function(){
//     $(this).closest('.imageToUse').find('img').show()
//   })
// })

landings.latitudeCenter =[]
landings.longitudeCenter =[]
// query meteorite api and match type for images//
landings.meteoriteLandings= function(query){
    var newQuery = $scope.query+ "-01-01T00:00:00"
    mainService.getLandings(newQuery).then(function(meteoriteData){
    landings.meteoriteDataCenter = meteoriteData;
    landings.total =meteoriteData.length;

    for(var i=0; i<meteoriteData.length; i++){
      landings.latitudeCenter.push(meteoriteData[i].latitude)
      landings.longitudeCenter.push(meteoriteData[i].longitude)

    }

  })
}


landings.getImage = function(metType) {
  var correctImage =[];
  var meteoriteImages = imageService.getMeteoriteImages()
  console.log(meteoriteImages);
  for(i=0; i<meteoriteImages.length; i++){
    if(meteoriteImages[i].type== metType){
      correctImage=meteoriteImages[i].imageUrl;
    }
  }
landings.correctImage=correctImage;
}
}

module.exports = meteoriteLandings;
