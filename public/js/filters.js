'use strict';

/* Filters */

angular.module('spotifyApp.filters', []).
filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);