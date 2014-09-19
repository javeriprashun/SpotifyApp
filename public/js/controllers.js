'use strict';

/* Controllers */
var albumList={};
var trackList={};

angular.module('spotifyApp.controllers', [ ]).

  controller('albumController',['$scope','spotifyService',
	                             function($scope, spotifyService)  {
		  						 	$scope.albums=albumList;
	  								$scope.clickAlbumEvent = function(obj) {
	  								var albumId=obj.target.alt;
	  								$scope.tracks = spotifyService.getTrackByAlbum(albumId);
	  							  
	  								if($scope.tracks){
	 	                        	 trackList=$scope.tracks;
	 	                           }
	 	                         else{
	 	                        	 console.log("no tracks returned ..");
	 	                           };
	  							};   
  }]).
  controller('trackController',['$scope','spotifyService',
                                function($scope, spotifyService)  {
        	                         $scope.tracks=trackList; 
          }]).
  controller('spotifyController', ['$scope', 'spotifyService',
                   function($scope,spotifyService)  {
	                   
	               $scope.search = function() {
		                    $scope.performers = spotifyService.getArtists($scope.keywords);
	                     };  
	                     
	               $scope.clickEvent = function(obj) {
	                         var artistId=obj.target.alt;  
	                         $scope.albums = spotifyService.getAlbumsByArtist(artistId);
	                         if($scope.albums){
	                        	 albumList=$scope.albums;
	                         }
	                         else{
	                        	 console.log("no albums returned ..");
	                         };
	                     };
	          
  }]);