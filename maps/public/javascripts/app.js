angular.module('MapsApp', ['ngDialog'])
.controller('MainCtrl', [
	'$scope', '$http',
	function($scope, $http){
		$scope.getLogin = function(){
			$http.get('/login').success(function(response){
				$('#login').html(response);
//				$scope.user = '';
//				$scope.login = response;
			});
		}

		$scope.getLogin();
	}
])
.controller('LoginController', [
	'$scope', '$http',
	function($scope, $http){
		$scope.startSession = function(){
			console.log("Starting session");
			$http.get('/testMap').success(function(response){
				$('#user').html(response);
				$('#login').html('');
				console.log(response);
//				$scope.login = '';
//				$scope.user = response;
			});
		};
	}
])
.controller('MapsController', [
	'$scope', '$http',
	function($scope, $http, ngDialog){
		$scope.landmarks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
		$scope.contacts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
	}
]);
