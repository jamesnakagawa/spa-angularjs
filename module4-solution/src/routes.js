(function() {
"use strict";

angular.module('MenuApp')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: 'Welcome to the restaurant!'
    })
    .state('categories', {
      url: '/categories/',
      template: '<categories menu-categories="$ctrl.data"></categories>',
      resolve: { // data to inject into controller
        categoriesData: ['MenuDataService', function(MenuDataService) { // minification protection
          return MenuDataService.getAllCategories(); // returns Promise
        }]
      },
      controller: ['categoriesData', function(categoriesData) {
        this.data = categoriesData;
      }],
      controllerAs: '$ctrl'
    })
    .state('categories.items', {
      url: '{categoryId}',
      template: '<items menu-items="$ctrl.items" category="$ctrl.category"></items>',
      resolve: { // data to inject into controller
        itemsData: [
          'MenuDataService', '$stateParams',// minification protection
          function(MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.categoryId); // returns Promise
          }
        ]
      },
      controller: ['itemsData', function(itemsData) {
        this.items = itemsData.menu_items;
        this.category = itemsData.category;
      }],
      controllerAs: '$ctrl'
    });
});

})();
