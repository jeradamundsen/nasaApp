angular.module('nasaApp', ['ui.router', 'ui.filters'])
    .config(
      function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/about');

            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: "./views/about.html"
                })
                .state('trenzalore', {
                    url: '/trenzalore',
                    templateUrl: "./views/trenzalore.html"
                    // controller: 'mainCtrl'
                })
                .state('asteroidInfo', {
                    url: '/asteroidInfo',
                    templateUrl: "./views/asteroidInfo.html"
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
                .state('meteoriteChart', {
                        url: '/meteoriteChart',
                        templateUrl:"./views/chart-main.html"
                })
                .state('login',{
                    url:'/login',
                    templateUrl:"./views/login.html"
                })
                .state('reportFireball',{
                    url:'/reportFireball',
                    templateUrl:"./views/reportFireball.html",
                    controller: "mainCtrl"
                })
                .state('thanks',{
                    url:'/thanks',
                    templateUrl:"./views/thanks.html",
                    controller: "mainCtrl"
                })
});