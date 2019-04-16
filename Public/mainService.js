angular.module('nasaApp')
.service('mainService', function($http,$stateParams, $q){

  this.getImageInfo=function(){
    var def =$q.defer()
    return $http({
      method:'GET',
      url: "https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk"
    }).then(function(response){
      console.log(response)
      var hubble = response.data
      def.resolve(hubble)
    })
    return def.promise
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
    }
    meteoriteData.push(obj);
    }
if(meteoriteData.length >0)
    def.resolve(meteoriteData)
else{
  def.reject('Year Not Valid')
}

  })
  return def.promise;
};
this.getAsteroidInfo=function(date){
  return $http({
    method:'GET',
    url: "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk?begin_date=" + date + "end_date=" + date
  })
}

this.getMeteoriteType =function(meteoriteType){
  return $http({
    method:'GET',
    url: "https://data.nasa.gov/resource/y77d-th95.json?recclass="+ meteoriteType
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
var meteorites= []
})
