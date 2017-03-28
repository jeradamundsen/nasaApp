
var angular = require('angular');

class FireballsService{
  constructor(){
    this.data = {
      fireballs: []
    };
  }

  loadFireballs(){
    return $http({
      method:'GET',
      url:'/api/sightings'
    }).then(fireballs => {
      console.log(fireballs)
      this.data.fireballs = fireballs.data;
    })
  }
}
module.exports = angular.module('services.fireball',[])
  .service('fireballsService', FireballsService)
  .name;
