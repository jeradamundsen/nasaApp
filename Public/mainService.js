angular.module('nasaApp')
.service('mainService', function($http,$stateParams, $q){

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

// this.getMeteoriteMap=function(){
//   return $http({
//     method:'GET',
//     url:"https://data.nasa.gov/resource/gh4g-9sfh.json?fall=fell"
//
//   })
// }
this.getMeteoriteType =function(meteoriteType){
  return $http({
    method:'GET',
    url: "https://data.nasa.gov/resource/y77d-th95.json?recclass="+ meteoriteType
  })
}
this.getLandings = function(newQuery){
  var def =$q.defer();
   $http.get('https://data.nasa.gov/resource/y77d-th95.json?year='+ newQuery
 ).then(function(response){
    var myResponse = response.data
    console.log(myResponse)
    var meteoriteData = []
    for(var i = 0; i < myResponse.length; i++){
      var obj = {
        name: myResponse[i].name,
        mass: parseFloat(myResponse[i].mass),
        type: myResponse[i].recclass,
      latitude: myResponse[i].reclat,
      longititude: myResponse[i].reclong
      };
      // if(myResponse[i].reclat=== 0.00) && (myResponse[i].reclong=== 0.00){
      //   return "not found"
      // }
      meteoriteData.push(obj);
    }
    def.resolve(meteoriteData)
  })
  return def.promise;
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
var meteorites= []
})
