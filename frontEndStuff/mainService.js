angular.module('nasaApp')
.service('mainService', function($http,$stateParams){

  this.getImageInfo=function(){
    return $http({
      method:'GET',
      url: "https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk"
    })
  }

this.getMarsInfo=function(){
  return $http({
    method:'GET',
    url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk"
  })
}

this.getBrowseAstroids=function(){
  return $http({
    method:'GET',
    url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk"
  })
}

this.getMeteoriteLanding=function(){
  return $http({
    method:'GET',
    url:"https://data.nasa.gov/resource/gh4g-9sfh.json"
  })
}

// this.getMap=function(){
//   return $http({
//     method:'GET',
//     url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-xnzXjoAGXWxkfeA-Agwt0L8Po87Zp4gAIzaSyC-xnzXjoAGXWxkfeA-Agwt0L8Po87Zp4g"
//   })
// }
})
