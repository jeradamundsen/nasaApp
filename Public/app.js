angular.module('nasaApp', ['ui.router', 'ngMaterial'])
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
                .state('mapPage',{
                    url:'/mapPage',
                    templateUrl: "./views/mapPage.html"
                })
                .state('login',{
                    url:'/login',
                    templateUrl:"./views/login.html"
                })
                .state('reportFireball',{
                    url:'/reportFireball',
                    templateUrl:"./views/reportFireball.html"

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
                  templateUrl: "./views/fireballEvents.html"

                })
                .state('meteoriteClassification',{
                  url: '/meteoriteClassification',
                  templateUrl:'./views/meteoriteClassification.html'
                })
});

// .directive('footer', function(){
//   return {
//     restrict: 'A',
//     templateUrl: "./dirs/footer.html",
//     controller: 'mainCtrl'
//   };
// });
