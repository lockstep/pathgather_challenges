var ctrls = ngModule('challenge.controllers');

var moveCtrl = [
  '$scope', 'Game', 'UserFactory',
  function($scope, Game, UserFactory) {
    var user = new UserFactory({ name: 'Karun' });

    Game.users.push(user);

    $scope.move = function() {
      var nextState = Game.move(user);
      $scope.currentMessage = (nextState || {}).message;
    }

    $scope.points = function() {
      return user.points;
    }
  }
];

ctrls.controller("MoveCtrl", moveCtrl);
