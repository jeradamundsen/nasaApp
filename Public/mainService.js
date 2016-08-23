angular.module('nasaApp')
.service('mainService', function($http,$stateParams){

  this.getImageInfo=function(){
    return $http({
      method:'GET',
      url: "https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk"
    })
  }

this.getAsteroidInfo=function(date){
  return $http({
    method:'GET',
    url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk?begin_date=" + date + "end_date=" + date
  })
}
//
// this.getMeteoriteLanding=function(query){
//   return $http({
//     method:'GET',
//     url:"https://data.nasa.gov/resource/y77d-th95.json?api_key=
// i-n8GaT-ioXykyOVTM4RWiykey_D-2cyr8dK?year="+ query
//
//   })
// }

// this.getMeteoriteMap=function(){
//   return $http({
//     method:'GET',
//     url:"https://data.nasa.gov/resource/gh4g-9sfh.json?fall=fell"
//
//   })
// }

this.getLandings = function(newQuery){
  return $http({
    method:'GET',
    url: "https://data.nasa.gov/resource/gh4g-9sfh.json?year="+ newQuery
  })
}
this.createUser=function(user){
  console.log(user);
  return $http({
    method:'POST',
    data: user,
    url:"/api/user"
  })
}
this.createReport = function(report){
  return $http({
    method:'POST',
    data: report,
    url:'/api/sightings'
  })
}

this.generateMeteoriteLandingIds = function(landingList){
  return $http({
    method:'PUT',
    data: {landingList: landingList},
    url: '/api/landingsOld'
  })
}

this.getReports = function(){
  return $http({
    method:'GET',
    url:'/api/sightings'
  })
}

})
