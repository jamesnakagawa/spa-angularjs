(function() {
"use strict";

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {

	$scope.userList = [];
	$scope.lunchCheckResult = "";

	$scope.parseList = function(str) {
		$scope.userList = str.split(',');
		for (var i = 0; i < $scope.userList.length; i++) {
			if ($scope.userList[i].trim() === "") {
				$scope.userList.splice(i--, 1);
			}
		}
	}
	$scope.checkIfTooMuch = function(list) {
		if (list.length > 3) {
			$scope.lunchCheckResult = "Too much!";
		} else if (list.length > 0) {
			$scope.lunchCheckResult = "Enjoy!";
		} else {
			$scope.lunchCheckResult = "Please enter data first";
		}
	}
}

})()