angular.module('nasaApp', ['ui.router', 'ui.filters'])
    .config(
      function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/about');

            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: "./views/about.html"
                })
                .state('hubbleTelescope', {
                    url: '/hubbleTelescope',
                    templateUrl: "./views/hubbleTelescope.html"
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
                .state('verifyFireball',{
                    url:'/verifyFireball',
                    templateUrl: "./views/verifyFireball.html",
                    controller: "mainCtrl"
                })
                .state('home',{
                  url:'/home',
                  templateUrl: "./views/verifyFireball.html",
                  controller: "mainCtrl"
                })
                .state('fireballEvents',{
                  url:'/fireballEvents',
                  templateUrl: "./views/fireballEvents.html",
                  controller:"mainCtrl"
                })
});

// .directive('footer', function(){
//   return {
//     restrict: 'A',
//     templateUrl: "./dirs/footer.html",
//     controller: 'mainCtrl'
//   };
// });
