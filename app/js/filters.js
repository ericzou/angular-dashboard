'use strict';

/* Filters */
angular.module('angular.dashboard.filters', []).
  filter('autoLinkLite', function() {
    return function(text) {
      return String(text).replace(/(https?:\/\/[^\s]*)/, "<a href=\"$1\">$1</a>");
    }
  });
