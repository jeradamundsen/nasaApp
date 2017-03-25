
class fireballsCtrl{
  constructor(fireballsService, $scope ){
    this.fireballs = fireballsService;
    this.allFireballs = [];


    this.scope = $scope;

  }

  getFireballs(){
     this.allFireballs = fireballs.getFireballs()
    }

  }


fireballsCtrl.$inject = ['fireballsService']
module.exports = fireballsCtrl;
