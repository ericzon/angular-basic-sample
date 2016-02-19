(function() {
	angular.module('mainApp', [])
		.controller('mainController', ['$scope', function($scope) {
			console.log("mainController loaded");
			$scope.message = "Hello Angular";
		}]);
})();