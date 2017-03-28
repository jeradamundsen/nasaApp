routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
  $stateProvider
    .state('fireball', {
      url: '/fireball',
      template: require('./fireball.html'),
      controller: 'fireballsCtrl',
      controllerAs: 'reports'
    })
    .state('fireball.reports', {
      url: '/reports',
      template: require('./fireball.reports.html'),
      controller: 'fireballsCtrl',
      controllerAs: 'reports'
    })
    .state('fireball.newFireball', {
      url: '/newFireball',
      template: require('./fireball.newFireball.html'),
      controller: 'fireballsCtrl',
      controllerAs: 'reports'
    });
}
module.exports = routes;
