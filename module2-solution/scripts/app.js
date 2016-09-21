(function() {
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller("ShoppingListController", ShoppingListController)
.controller("AlreadyBoughtController", AlreadyBoughtController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

ShoppingListController.$inject = ["$scope", "ShoppingListCheckOffService"];
function ShoppingListController($scope, ShoppingListCheckOffService) {
	$scope.items = ShoppingListCheckOffService.getItemsToBuy();
	$scope.buyItem = ShoppingListCheckOffService.buyItem;
}

AlreadyBoughtController.$inject = ["$scope", "ShoppingListCheckOffService"];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
	$scope.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
	var service = this;
	service.itemsToBuy = [
		{
			name: "celery",
			quantity: "2 stalks"
		},
		{
			name: "carrots",
			quantity: "1 bunch"
		},
		{
			name: "onions",
			quantity: "2 medium"
		},
		{
			name: "chicken",
			quantity: "4 pounds"
		},
		{
			name: "lemons",
			quantity: "3"
		},
		{
			name: "oregano",
			quantity: "1 bunch"
		}
	];
	service.itemsBought = [];

	service.buyItem = function(ix) {
		service.itemsBought.push(service.itemsToBuy[ix]);
		service.itemsToBuy.splice(ix, 1);
	};
	service.getItemsToBuy = function() {
		return service.itemsToBuy;
	};
	service.getItemsBought = function() {
		return service.itemsBought;
	};
}

})()