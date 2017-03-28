var angular = require('angular');

class HubbleService{
    constructor(){
      this.data = {
        pod:[]
      };
    }
    loadPicOfDay(){
      return $http({
      method:'GET',
      url: "https://api.nasa.gov/planetary/apod?api_key=zIlXift9VAR1yyq399jiX6ix21xmDhjf4LL2p0Sk"
    }).then(pod => {
      console.log(pod)
      this.data.pod = pod.data;
    })
  }
}
module.exports = angular.module('services.hubble',[])
  .service('hubbleService', HubbleService)
  .name;
