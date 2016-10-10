(function() {
"use strict";

angular.module('MenuApp').component("items", {
  template: `
    <a ui-sref="categories" style="float: right"><span class="glyphicon glyphicon-remove"></span> Close</a>
    <div>
      <h2>{{$ctrl.category.name}}</h2>
      <em>{{$ctrl.category.special_instructions}}</em>
    </div>
    <ul class="menu-items">
      <li ng-repeat="item in $ctrl.menuItems" data-id="{{item.id}}">
        <big>{{item.name}}</big>
        &ensp;
        <em>
          <span ng-if="item.price_large">
            {{item.price_large | currency}}<span ng-if="item.large_portion_name">/{{item.large_portion_name}}</span>
          </span>&ensp;
          <span ng-if="item.price_small">
            {{item.price_small | currency}}<span ng-if="item.small_portion_name">/{{item.small_portion_name}}</span>
          </span>
        </em><br>
        {{item.description}}<br>
      </li>
    </ul>
  `,
  bindings: {
    menuItems: "<",
    category: "<"
  }
});

})();
