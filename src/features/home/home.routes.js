routes.$inject = ['$stateProvider'];

function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./home.html')

    });
}

module.exports = routes;
