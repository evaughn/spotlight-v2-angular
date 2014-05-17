'use strict';

angular.module('spotlightApp').controller('SearchCtrl', ['$scope', function($scope){
	$scope.artist = '';

	$scope.searchArtist = function(){
		console.log('the artist name is ', $scope.artist);
	}
}]);