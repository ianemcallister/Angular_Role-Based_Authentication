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