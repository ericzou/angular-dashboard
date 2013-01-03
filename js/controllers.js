'use strict';

/* Controllers */


function TwitterController($scope, Twitter) {
  Twitter.search({}, function(data) {
    $scope.tweets = data.results;
  });
}

function GithubController($scope, Github) {
  $scope.events = Github.query();
}

function StackOverflowController($scope, StackOverflow) {
  StackOverflow.search({}, function(data) {
    $scope.questions = data.items;
  });
}

function RedditController($scope, Reddit) {
  Reddit.read({}, function(data) {
    $scope.posts = data.data.children.map(function(e) {
      return e.data;
    });
  });
}