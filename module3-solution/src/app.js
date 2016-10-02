(function() {
"use strict";

angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('MenuApiUrl', 'https://davids-restaurant.herokuapp.com/')
  .directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'src/founditems.template.html',
    restrict: 'E',
    scope: {
      items: "<foundItems",
      onRemove: "&"
    },
    controller: FoundItemsDirCtrl,
    controllerAs: 'fidc',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirCtrl() {
  var fidc = this;
}

MenuSearchService.$inject = ['$http', 'MenuApiUrl'];
function MenuSearchService($http, MenuApiUrl) {
  this.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: 'GET',
      url: MenuApiUrl + 'menu_items.json'
    }).then(function(result) {
      var items = result.data.menu_items;
      var found = items.filter(function(el) {
        return el.description.indexOf(searchTerm) !== -1 ||
          el.name.indexOf(searchTerm) !== -1;
      });
      return found;
    });
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nid = this;

  nid.foundItems = [];

  nid.search = function(term) {
    MenuSearchService.getMatchedMenuItems(term).then(result => {
      nid.foundItems = result;
    });
  }

  nid.removeItem = function(index) {
    nid.foundItems.splice(index, 1);
  }
}

})();
