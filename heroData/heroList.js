angular.module('heroApp').component('heroList',{
  templateUrl: 'heroList.html',
  controller: HeroListController
});

function HeroListController($scope, $element, $attrs) {
  var ctrl=this;

  ctrl.list=[
    {
      name: 'Superman',
      location: ''
    },
    {
      name: 'Batman',
      location: 'Wayne Manor'
    }
  ];

  ctrl.updateHero = function(hero, prop, value){

    console.log(hero);
    console.log("value: " + value);
    console.log("prop: " + prop);
    hero[prop] = value;
  };

  ctrl.deleteHero = function(hero){
    var idx = ctrl.list.indexOf(hero);
    if(idx >= 0){
      ctrl.list.splice(idx, 1);
    }
  };
}
