'use strict';


angular.module('spotifyApp', [
  'spotifyApp.controllers',
  'spotifyApp.filters',
  'spotifyApp.services',
  'spotifyApp.directives',
  'ngRoute'
]).
config(function ($routeProvider, $locationProvider, $sceDelegateProvider) {
	
	$sceDelegateProvider.resourceUrlWhitelist(['self',
	                                            new RegExp('^(http[s]?):\/\/p\.scdn\.co\/mp3-preview/.+$')
	                                          , new RegExp('^(http[s]?):\/\/i\.scdn\.co\/image/.+$')]);	
  
	//https://i.scdn.co/image/af048aba253087970988645c291e098376a5b5e8 
	$routeProvider.
    when('/', {
      templateUrl: 'partials/search',
      controller: 'spotifyController'
    }).
    when('/albums', {
        templateUrl: 'partials/albumList',
         controller: 'albumController'
      }).
      when('/favourites', {
          templateUrl: 'partials/favourites',
           controller: 'favouritesController'
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