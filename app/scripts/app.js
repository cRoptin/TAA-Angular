'use strict';

/**
 * @ngdoc overview
 * @name webappApp
 * @description
 * # webappApp
 *
 * Main module of the application.
 */
angular
  .module('webappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/department', {
        templateUrl: 'views/department.html',
        controller: 'DepartmentCtrl',
        controllerAs: 'department'
      })
      .when('/addDepartment', {
        templateUrl: 'views/addDepartment.html',
        controller: 'AddDepartmentCtrl',
        controllerAs: 'addDepartment'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
