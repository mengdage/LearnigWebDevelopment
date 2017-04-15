(function(){
  'use strict';

  angular.module('ShoppingList')
  .controller('MainShoppingListController', MainShoppingListController);

  MainShoppingListController.$inject = ['items', '$rootScope'];
  function MainShoppingListController(items, $rootScope){
    var mainList = this;
    mainList.items = items;
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
      console.log(event);
      console.log('from' + fromState + 'to' + toState);

    });


  }
})();
