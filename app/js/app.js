'use strict';

angular
	.module('spotlightApp',['ngRoute'])
	.value('template', 'templates/')
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/:artist/',{
				templateUrl: '/templates/artist.html',
				controller: 'ArtistCtrl'
			})
	}]);