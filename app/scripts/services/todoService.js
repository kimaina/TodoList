'use strict';

/**
 * @ngdoc service
 * @name todoListApp.todoService
 * @description
 * # todoService
 * Service in the todoListApp.
 */
(function() {
angular.module('todoListApp')
  .service('todoService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
   var todoList= [
      { name: 'Introduction', description: 'Intro to Developers bla bla..' , status:20},
      { name: 'Orientation', description: 'Ampath Orientation bla bla..', status:70  },
      { name: 'Development', description: 'Setting up IDE and Environmentbla bla...', status:50 },
      { name: 'Network', description: 'Network config and deploymentbla bla...', status:10 },
      { name: 'Deployment', description: 'Network config and deploymentbla bla...', status:30 },
      { name: 'Foo', description: 'Network config and deploymentbla bla...', status:90 }

    ];
    this.getTodoList = function () {
      return  todoList;
    };
  });
}());
