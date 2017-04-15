(function(){
  'use strict'
  angular.module('ShoppingList')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // home page
    .state('home', {
      url: '/',
      templateUrl: 'src/shoppinglist/templates/home.template.html'
    })

    // list page
    .state('mainList', {
      url: '/main-list',
      templateUrl: 'src/shoppinglist/templates/main-list.template.html',
      controller: 'MainShoppingListController as mainList',
      resolve: {
        items: ['ShoppingListService', function(ShoppingListService){
          return ShoppingListService.getItems();
        }]
      }
    })

    // mainList.itemDetail page
    .state('mainList.itemDetail', {
      url: '/item-detail/{itemId}',
      templateUrl: 'src/shoppingList/templates/item-detail.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        itemId: ['$stateParams', function($stateParams){
          return $stateParams.itemId;
        }]

      }
    })
  }
})();
