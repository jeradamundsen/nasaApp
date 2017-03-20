routing.$inject =['$stateProvider', '$urlRouterProvider'];

      function routing($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/about');

            $stateProvider
                .state('about', {
                    url: '/about',
                    templateUrl: "./views/about.html"
                })
                .state('hubbleTelescope', {
                    url: '/hubbleTelescope',
                    controller:'./controllers/mainCtrl',
                    templateUrl: "./views/hubbleTelescope.html"
                    // controller: 'mainCtrl'
                })
                .state('login',{
                    url:'/login',
                    controller: './controllers/mainCtrl',
                    templateUrl:"./views/login.html"
                })
                .state('reportFireball',{
                    url:'/reportFireball',
                    controller:'./controllers/formController.js',
                    templateUrl:"./views/reportFireball.html"
                })

                .state('fireballEvents',{
                  url:'/fireballEvents',
                  controller: './controllers/formController',
                  templateUrl: "./views/fireballEvents.html"

                })
                .state('meteoriteClassification',{
                  url: '/meteoriteClassification',
                  controller:'./controllers/mLandingsCtrl',
                  templateUrl:'./views/meteoriteClassification.html'
                })
});

module.exports = routing;
