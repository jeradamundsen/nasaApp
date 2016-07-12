angular.module('nasaApp', ['ui.router'])
    .config(
      function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('about', {
                    url: '/',
                    templateUrl: "./views/about.html"
                })
                .state('trenzalore', {
                    url: '/trenzalore',
                    templateUrl: "./views/trenzalore.html"
                    // controller: 'mainCtrl'
                })
                .state('spacerocks', {
                    url: '/spacerocks',
                    templateUrl: "./views/spacerocks.html"
                    // controller: 'mainCtrl'
                })
                .state('launch', {
                    url: '/launch',
                    templateUrl: "./views/launch.html"
                    // controller: 'mainCtrl'
                })
                .state('meteoriteMap', {
                        url: '/meteoriteMap',
                        templateUrl: "./views/listMeteoriteInfo.html"
                        // controller: 'mapController'
                })
                .state('chartMain', {
                        url: '/chartMain',
                        templateUrl:"./views/chart-main.html"
                })
});
