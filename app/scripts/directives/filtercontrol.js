'use strict';

/**
 * @ngdoc directive
 * @name todoListApp.directive:filterControl
 * @description
 * # filterControl
 */
(function(){
angular.module('todoListApp')
  .directive('filterControl', function () {
    return {

      restrict: 'EA',
      scope:false,
      templateUrl: 'views/filtercontrol.html'

    };
  });
}());
