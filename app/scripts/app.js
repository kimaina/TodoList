'use strict';

/**
 * @ngdoc overview
 * @name todoListApp
 * @description
 * # todoListApp
 *
 * Main module of the application.
 */
angular
  .module('todoListApp', [
    'ngAnimate',
    'ngRoute'
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
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'


      })
      .when('/todoDetails/:name/:status', {
        templateUrl: 'views/tododetails.html',
        controller: 'TododetailsCtrl'


      })
      .otherwise({
        redirectTo: '/'
      });
  });
