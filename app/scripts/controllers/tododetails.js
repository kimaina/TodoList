'use strict';

/**
 * @ngdoc function
 * @name todoListApp.controller:TododetailsCtrl
 * @description
 * # TododetailsCtrl
 * Controller of the todoListApp
 */
(function() {
angular.module('todoListApp')
  .controller('TododetailsCtrl', ['$scope','$routeParams', function ($scope, $routeParams ){
    var todoItem={};
    todoItem.name=$routeParams.name;
    todoItem.status=$routeParams.status;
    $scope.todoItem=todoItem;

  }]);
}());
