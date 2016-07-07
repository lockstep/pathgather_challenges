var ctrl = ngModule('challenge.controllers');

var tileCtrl = [
  '$scope', 'Game',
  function($scope, Game) {
    var vm = this;

    vm.users = function() {
      return Game.users;
    }

    return vm;
  }
];

ctrl.controller('TileCtrl', tileCtrl);
