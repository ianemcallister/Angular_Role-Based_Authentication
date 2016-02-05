angular.module("yourApp").config(function ($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
    resolve: {
      //...
    }
  });

  $routeProvider.when('/app', {
    templateUrl: 'app.html',
    controller: 'AppController'
    resolve: {
      //...
    }
  });

});

angular.moduel("yourApp").run(function ($rootScope, $location, AuthenticationService) {

//enumerate routes that don't need authentication
var routesThatDontRequireAuth = ['/login'];

//check if current location matches route
var routeClean = function(route) {
  return _.find(routesThatDontRequireAuth, 
    function (noAuthRoute) {
      return _.str.startsWith(route, noAuthRoute);
    });
};

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    //if route requires auth and user is not logged in 
    if (!routeClean($locaiton.url()) && !AuthenticationService.isLoggedIn()) {
      //redirect back to login
      $locaiton.path('/login');
    }

  });

});