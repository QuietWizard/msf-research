var myApp = angular.module('myApp', [
  'ngRoute',
  'researchControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'partials/_reHome.html',
        controller: 'researchController'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);
