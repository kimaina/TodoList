'use strict';

describe('Directive: filterControl', function () {

  // load the directive's module
  beforeEach(module('todoListApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<filter-control></filter-control>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the filterControl directive');
  }));
});
