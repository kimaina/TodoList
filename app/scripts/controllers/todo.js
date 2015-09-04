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

    init ();


    function init ()
    {
      var todoItems=todoFactory.getTodoList();
      $scope.todoItems=todoItems;
      $scope.completedItems=todoItems.length;

    }

  }]);
}());
