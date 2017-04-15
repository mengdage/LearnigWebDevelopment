(function(){
  'use strict';

  angular.module('ShoppingList')
  .controller('ItemDetailController', ItemDetailController);

  ItemDetailController.$inject = ['items', 'itemId'];
  function ItemDetailController(items,itemId){
    var itemDetail = this;

    var item = items[itemId];

    itemDetail.name = item.name;
    itemDetail.quantity = item.quantity;
    itemDetail.description = item.description;

  }
})();
