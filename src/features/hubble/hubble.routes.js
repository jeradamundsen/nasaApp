routes.$inject = ['$stateProvider'];

function routes($stateProvider){
  $stateProvider
    .state('hubble',{
      url: '/hubble',
      template: require('./hubble.html'),
      controller: 'hubbleCtrl',
      controllerAs: 'hubble'
    });
}
module.exports = routes;
