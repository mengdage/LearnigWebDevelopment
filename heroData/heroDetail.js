angular.module('heroApp').component('heroDetail',{
  templateUrl: 'heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});

function HeroDetailController(){
  var ctrl = this;

  ctrl.delete = function(){
    ctrl.onDelete({hero:ctrl.hero});
  };
  ctrl.update = function(newProp, newValue){
    console.log(newProp+" "+newValue);
    ctrl.onUpdate({ hero: ctrl.hero, prop: newProp, value: newValue});
  };
}
