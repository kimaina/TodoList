'use strict';

/**
 * @ngdoc service
 * @name todoListApp.todoFactory
 * @description
 * # todoFactory
 * Factory in the todoListApp.
 */
(function() {
angular.module('todoListApp')
  .factory('todoFactory', function () {
    // Service logic
    // ...
    var todoList= [
      { name: 'Introduction', description: 'Intro to Developers bla bla..' , status:20},
      { name: 'Orientation', description: 'Ampath Orientation bla bla..', status:70  },
      { name: 'Development', description: 'Setting up IDE and Environmentbla bla...', status:50 },
      { name: 'Network', description: 'Network config and deploymentbla bla...', status:10 },
      { name: 'Network', description: 'Network config and deploymentbla bla...', status:30 },
      { name: 'Network', description: 'Network config and deploymentbla bla...', status:90 }

    ];

    // Public API here
    return {
      getTodoList: function () {
        return todoList;
      }
    };
  });
}());
