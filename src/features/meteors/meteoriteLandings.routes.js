routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('meteoriteLandings', {
      url: '/meteoriteLandings',
      template: require('./meteoriteLandings.html'),
      controller: 'meteoriteLandings',
      controllerAs: 'meteors'
    });
}
