routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
  $stateProvider
    .state('fireball', {
      url: '/fireball',
      template: require('./fireball.html'),
      controller: 'fireballCtrl',
      controllerAs: 'reports'
    });
    .state('fireball.reports', {
      url: '/fireballReports',
      template: require('./fireball.reports.html'),
      controller: 'fireballCtrl',
      controllerAs: 'reports'
    });
    .state('fireball.newFireball', {
      url: '/newFireball',
      template: require('./newFireball.html'),
      controller: 'fireballCtrl',
      controllerAs: 'reports'
    });
}
module.exports = routes;
