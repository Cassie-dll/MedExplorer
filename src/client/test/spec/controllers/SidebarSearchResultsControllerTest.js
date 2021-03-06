// # Copyright (c) 2015 Northrop Grumman Systems Corporation. All Rights Reserved.
'use strict';

describe('Controller: SidebarSearchResultsController', function () {

  // load the controller's module
  beforeEach(module('MedExplorer'));

  var SidebarSearchResultsController,
    scope;

  // Initialize the controller and a mock scope

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebarSearchResultsController = $controller('SidebarSearchResultsController', {
      $scope: scope
    });
  }));


  it('has a SidebarSearchResultsController', function() {
		expect(SidebarSearchResultsController).not.toBeNull();
	});

  it('scope values should be not null', function () {
	    expect(scope.results).not.toBeNull();
	    expect(scope.searchTerm).not.toBeNull();
	  });
  
});
