(function(){
  'use strict';

  angular.module('Spinner')
  .component('loadingSpinner', {
    templateUrl: 'src/spinner/loadingspinner.template.html',
    controller: SpinnerController
  });


  SpinnerController.$inject = ['$rootScope'];
  function SpinnerController($rootScope){
    var $ctrl = this;
    var cancelList = [];

    $ctrl.$onInit = function(){
      var cancel = $rootScope.$on('$stateChangeStart', function(){
        $ctrl.showSpinner = true;
      });
      cancelList.push(cancel);

      cancel = $rootScope.$on('$stateChangeSuccess', function(){
        $ctrl.showSpinner = false;
      })
      cancelList.push(cancel);

      cancel = $rootScope.$on('$stateChangeError', function(){
        $ctrl.showSpinner = false;
      });
      cancelList.push(cancel);
    }

    $ctrl.$onDestroy = function(){
      cancelList.forEach(function(e){
        e();
      });

    }

  }


})();
