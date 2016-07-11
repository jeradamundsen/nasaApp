angular.module('nasaApp', ['ui.router'])
    .config(
      function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('about', {
                    url: '/',
                    templateUrl: "/views/about-tmpl.html"
                })
                .state('trenzalore', {
                    url: '/trenzalore',
                    templateUrl: "/views/trenzalore-tmpl.html",
                    // controller: 'mainCtrl'
                })
                .state('spacerocks', {
                    url: '/spacerocks',
                    templateUrl: "/views/spacerocks-tmpl.html",
                    // controller: 'mainCtrl'
                })
                .state('launch', {
                    url: '/launch',
                    templateUrl: "/views/launch-tmpl.html",
                    // controller: 'mainCtrl'
                })
                .state('meteoriteMap', {
                        url: '/meteoriteMap',
                        templateUrl: "/views/listMeteoriteInfo-tmpl.html",
                        controller: 'mapController'
                })
});
