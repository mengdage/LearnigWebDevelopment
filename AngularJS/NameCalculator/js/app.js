(function(){
  'use strict';

  angular.module("NameCalculator",[])
  .controller("NameCalculatorController", NameCalculatorController)
  .filter("doubleContent", doubleContentFilterFactory)
  .factory("myFactory", myFactory)
  .service("myService", myService)
  ;

  NameCalculatorController.$inject = ["myFactory", "myService"];
  function NameCalculatorController(myFactory, myService){
    var $ctrl = this;
    $ctrl.name = "Taylor Swift";
    $ctrl.artistData = "";
    $ctrl.nameValue = 0;
    myFactory.setArtist($ctrl.name);
    $ctrl.artist = myFactory.getArtist();
    $ctrl.submitArtist = function(){
      myFactory.callItunes()
        .then(function(result){
          $ctrl.artistData = result;
        }).catch(function(error){
          console.error(error);
        });
    };
    // $ctrl.artist = "123";

    $ctrl.calculateNameValue = function(){
      // var sum = 0;
      $scope.nameValue = calculateNumericValueForString($scope.name);
    }




    function calculateNumericValueForString(input) {
      var val = 0;
      for(var i = 0; i < input.length; i++){
        val += input.charCodeAt(i);
      }
      return val;
    }

  }

  function doubleContentFilterFactory(){
    return function(input){
      return input +""+input;
    }
  }

  myFactory.$inject = ["$http", "$q", "$sce"];
  function myFactory($http, $q, $sce){
    var service = {};
    var baseUrl = "https://itunes.apple.com/search?term=";
    var _artist = "";
    var _finalUrl = "";

    var makeUrl = function(){
      _artist = _artist.split(" ").join('+');
      _finalUrl = baseUrl + _artist;
      return _finalUrl;
    }


    service.getArtist = function(){
      return _artist;
    }
    service.setArtist = function(a){
      _artist = a;
    }
    service.callItunes = function(){
      makeUrl();
      var deferred = $q.defer();

      $http({
        method: "JSONP",
        url: $sce.trustAsResourceUrl(_finalUrl)
      }).then(function(response){
        deferred.resolve(response);
      }).catch(function(response){
        deferred.reject(response);
      });

      return deferred.promise;
    }

    return service;
  }

  function myService(){
    var _artist = "";
    var service = this;

    service.getArtist = function(){
      return _artist;
    }
    service.setArtist = function(a){
      _artist = a;
    }
  }

})();
