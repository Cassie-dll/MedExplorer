// # Copyright (c) 2015 Northrop Grumman Systems Corporation. All Rights Reserved.
'use strict';

angular.module('MedExplorer')
  .controller('MainController', ['$scope', '$state', '$stateParams', '$filter', function ($scope, $state, $stateParams, $filter) {
    $stateParams.breadCrumbName = 'Home';
    $scope.update = function() {
    	$state.go('home.search', {
          'source': 'drug',
          'type': 'label',
          'field': 'openfda.brand_name',
          'value': '\"' + $filter('title')($scope.search.value) + '\"',
          'limit': 25,
          'breadCrumbName': $filter('title')($scope.search.value)
        });
      };
  }]);
