'use strict';

describe('Controller: HelloWorldController', function () {

  // load the controller's module
  beforeEach(module('MedExplorer'));

  var HelloWorldController,
    scope;

  // Initialize the controller and a mock scope
  /*
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HelloWorldController = $controller('HelloWorldController', {
      $scope: scope
    });
  }));
  */

/*
  it('message should read "Hello World!"', function () {
    expect(scope.message).toBe('Hello World!');
  });
  */

  it('this is a test', function () {
      assert.equal(1,1);
  });

  it('this is another test (which should fail)', function () {
      assert.equal(1,0);
  });

});
