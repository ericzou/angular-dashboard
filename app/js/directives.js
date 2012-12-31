'use strict';

/* Directives */


angular.module('angular.dashboard.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
