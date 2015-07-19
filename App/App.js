var webAdminApp = angular.module('webAdminApp', ['ngRoute']);
webAdminApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {controller:'IndexController',templateUrl:'App/Partials/home.html'})
    .when('/about', {controller:'IndexController',templateUrl:'App/Partials/about.html'})
    .when('/login', {controller:'AccountController',templateUrl:'App/Partials/login.html'})
    .when('/register', {controller:'AccountController',templateUrl:'App/Partials/register.html'})
    .when('/userhome', { controller: 'AccountController', templateUrl: 'App/Partials/userhome.html' })
    .when('/logout', { controller: 'AccountController', templateUrl: 'App/Partials/logout.html' })
    .when('/register',{controller:'AccountController',templateUrl:'App/Partials/register.html'})
    .otherwise({redirectTo:'/'});
});