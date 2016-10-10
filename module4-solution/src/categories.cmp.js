(function() {
"use strict";

angular.module('MenuApp').component("categories", {
  template: `
    <ul class="list-group col-md-3">
      <li class="list-group-item"
          ng-repeat="category in $ctrl.menuCategories"
          ui-sref="categories.items({ categoryId: category.short_name })"
          ui-sref-active="active">
        {{category.name}}
      </li>
    </ul>
    <ui-view class="col-md-9"></ui-view>
  `,
  bindings: {
    menuCategories: "<"
  }
});

})();
