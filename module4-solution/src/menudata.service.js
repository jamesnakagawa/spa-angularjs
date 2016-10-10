(function() {
"use strict";

angular.module('data')
.constant("ApiBaseUrl", "https://davids-restaurant.herokuapp.com/")
.service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http", "ApiBaseUrl"];
function MenuDataService($http, ApiBaseUrl) {
  this.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: ApiBaseUrl + "categories.json"
    }).then(function(result) {
      return result.data;
    });
  }
  this.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: 'GET',
      url: ApiBaseUrl + "menu_items.json",
      params: {
        category: categoryShortName
      }
    }).then(function(result) {
      return result.data;
    });
  }
}

})();
