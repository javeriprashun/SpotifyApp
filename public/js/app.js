'use strict';

// Declare app level module which depends on filters, and services

angular.module('spotifyApp', [
  'spotifyApp.controllers',
  'spotifyApp.filters',
  'spotifyApp.services',
  'spotifyApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/search',
      controller: 'spotifyController'
    }).
    when('/albums', {
        templateUrl: 'partials/albumList',
         controller: 'albumController'
      }).
      when('/tracks', {
          templateUrl: 'partials/trackList',
           controller: 'trackController'
        }).
    otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});