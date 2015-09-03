'use strict';

describe('Controller: TododetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('todoListApp'));

  var TododetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TododetailsCtrl = $controller('TododetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TododetailsCtrl.awesomeThings.length).toBe(3);
  });
});
