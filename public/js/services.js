'use strict';

/* Services */

var result = {};
var albums={};
var tracks={};
// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('spotifyApp.services', ['ngResource'])
.config(function($httpProvider){

        /* Enable CORS */
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.value('version', '0.1')
.service('spotifyService', function ($http) { 	
	          
	    		 this.getArtists= function(keywords) {
	    			 var apiUrl = "https://api.spotify.com/v1/search?query="+keywords+"&offset=0&limit=20&type=artist&market=US";
	    		  $http({
	    			  method: "GET",
		    	      url: apiUrl
		    	    }).
		    	    success(function (data, status, headers, config) {
		    	      result=data;
		    	    }).
		    	    error(function (data, status, headers, config) {
		    	    	 console.log(data);
		    	    });
		
	                  return result;
	                  
	    		  };

	    	
	    		  this.getAlbumsByArtist= function(artistId) {
	 
		    			 var apiUrl = "https://api.spotify.com/v1/artists/"+artistId+"/albums?market=ES";
		    		    $http({
		    			  method: "GET",
			    	      url: apiUrl
			    	    }).
			    	    success(function (data, status, headers, config) {
			    	    	albums=data;	
			    	        console.log(albums);
			    	    }).
			    	    error(function (data, status, headers, config) {
			    	    	 console.log(data);
			    	    });
		                  return albums;
		    		  };
		    		  
		    		  this.getTrackByAlbum= function(albumId) {
		    			  
			    		  var apiUrl = "https://api.spotify.com/v1/albums/"+albumId+"/tracks";
			    		  $http({
			    			  method: "GET",
				    	      url: apiUrl
				    	    }).
				    	    success(function (data, status, headers, config) {
				    	      tracks=data;
				    	    }).
				    	    error(function (data, status, headers, config) {
				    	    	 console.log(data);
				    	    });
				console.log(tracks);
			                  return tracks;
			    		  };	  
});