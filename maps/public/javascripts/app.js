angular.module('LoginApp', [])
.controller('LoginController', [
	'$scope', '$http', '$window',
	function($scope, $http, $window){
		$scope.startSession = function(){
//			This will open a new tab with directions from google maps
//			source first, destination second
			$window.open("https://www.google.com/maps/dir/40.7608+-111.891/40.2235984+-111.7374736");
			return $http.get("/user/:" + $scope.name + "/:" + $scope.password);
		};
	}
]);
