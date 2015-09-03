'use strict';

/**
 * @ngdoc function
 * @name todoListApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoListApp
 */
(function() {
angular.module('todoListApp')
  .controller('TodoCtrl', ['$scope','todoFactory', function ($scope, todoFactory) {
    function init ()
    {
      $scope.todoItems=todoFactory.getTodoList();
    }
    init ();
    $scope.completedItems =39;

  }]);
}());
