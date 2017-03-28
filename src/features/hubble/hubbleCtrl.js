class hubbleCtrl {
  constructor(hubbleService){
    this.displayPod = hubbleService;
    this.pod = []
  }
  getPod(){
    this.pod = displayPod.loadPod()
  }
}

hubbleCtrl.$inject = ['hubbleService']
module.exports = hubbleCtrl;
