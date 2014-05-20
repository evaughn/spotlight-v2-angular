'use strict';

angular.module('spotlightApp').controller('SearchCtrl', ['$scope', '$http', function($scope, $http){
	$scope.artist = '';
	$scope.artistURISearch = 'http://ws.spotify.com/search/1/artist.json?q=';

	$scope.searchArtist = function(){
		$http({
			method: 'GET',
			url: $scope.artistURISearch + $scope.artist
		}).success(function(data, status, headers, config){
			$scope.saveArtist(data.artists[0]);
		});
	}

	$scope.saveArtist = function(artist){
		//console.log(window.location);
	}
}]);