var ctrl = ngModule('challenge.controllers');

var tileCtrl = [
  '$scope', 'Game',
  function($scope, Game) {
    $scope.isOnThisTile = function() {
      var user = Game.users[0];
      return user.currentTile == $scope.tileNumber;
    }
  }
];

ctrl.controller('TileCtrl', tileCtrl);
