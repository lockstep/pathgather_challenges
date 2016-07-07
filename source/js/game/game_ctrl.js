var ctrls = ngModule('challenge.controllers');

var gameCtrl = [
  '$scope', 'Game', 'UserFactory',
  function($scope, Game, UserFactory) {
    var vm = this;

    vm.users = [
      new UserFactory({ name: 'Paul' }),
      new UserFactory({ name: 'Jan' }),
      new UserFactory({ name: 'Mac' })
    ]

    angular.forEach(vm.users, function(u) {
      Game.users.push(u);
    })

    vm.move = Game.move;

    return vm;
  }
];

ctrls.controller("GameCtrl", gameCtrl);
