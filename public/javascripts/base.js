/**
 * <p></p>
 *
 * @className base.js
 * @author jiangyu
 * @create 2017-01-16 21:12
 * @version v1.0
 */

var jhonApp = angular.module("myapp",["ngRoute"]);

jhonApp .config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/users', {
            templateUrl: 'user/list.jade',
            controller: 'UserController'
        })
        .when('/login', {
            templateUrl: 'login/login.jade',
            controller: 'LoginController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});