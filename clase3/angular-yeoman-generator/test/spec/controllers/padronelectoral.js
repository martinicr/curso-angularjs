'use strict';

describe('Controller: PadronelectoralCtrl', function () {

  // load the controller's module
  beforeEach(module('angularYeomanGeneratorApp'));

  var PadronelectoralCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PadronelectoralCtrl = $controller('PadronelectoralCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
