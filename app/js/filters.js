'use strict';

/* Filters */
angular.module('angular.dashboard.filters', []).
  filter('autoLinkLite', function() {
    return function(text) {
      return String(text).replace(/(https?:\/\/[^\s]*)/g, "<a href=\"$1\">$1</a>");
    }
  }).
  filter('parseTwitterUserTag', function() {
    return function(text) {
      return String(text).replace(/\s@(.+)\b/g, "<a href=\"https://www.twitter.com/$1\"> @$1</a>")
    }
  }).
  filter('epochTime', function() {
    return function(text) {
      return new Date(text).getTime();
    }
  });
