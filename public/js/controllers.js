'use strict';

/* Controllers */
var albumList={};
var trackList={};

var favTrackList=new Array();
var favArtistList=new Array();
var favAlbumsList=new Array();

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
	  							$scope.clickAddtoFavouriteAlbumsEvent=function(obj){
	  		                 		favAlbumsList.push(obj.target.attributes.data.value);
	  							};
	  						
  }]).
  controller('trackController',['$scope','spotifyService',
                                function($scope, spotifyService)  {
        	                         $scope.tracks=trackList; 
        	                         $scope.clickAddtoFavouriteTracksEvent= function(obj){
        	                        	favTrackList.push(obj.target.attributes.data.value);
        	                        
        	                         };
          }
  

  ]).
  controller('favouritesController',['$scope','spotifyService',
                                function($scope, spotifyService)  {
        	                    var set=new Util.datastructures.Set();
        	                        if(favArtistList.length > 0){
        	                        	set.clear();
        	                        	set.addAll(favArtistList);
        	                        	$scope.performers=set.list();
        	                        
        	                        }
        	                        else{
        	                        	console.log("No artist Added to Favourites..")
        	                        }
        	                        
        	                        if(favAlbumsList.length > 0){
        	                        	set.clear();
        	                        	set.addAll(favAlbumsList);
        	                        	$scope.albums=set.list();
        	                        }
        	                        else{
        	                        	console.log("No albums Added to Favourites..")
        	                        }
        	                        
        	                        if(favTrackList.length > 0){
        	                        	    set.clear();
        	                        		set.addAll(favTrackList);
        	                        		$scope.tracks=set.list();
        	                        }
        	                        else{
        	                        	console.log("No Tracks Added to Favourites..")
        	                        }
          }
  ]).
  controller('spotifyController', ['$scope', 'spotifyService',
                   function($scope,spotifyService)  {
	                   
	               $scope.search = function() {
		                    $scope.performers = spotifyService.getArtists($scope.keywords);
	                     };  
	                     
	                $scope.clickAddtoFavouriteArtistsEvent=function(obj){
	                 		favArtistList.push(obj.target.attributes.data.value);
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
  }
  
  ]);