var ctrls = ngModule('challenge.controllers');

var boardCtrl = [
  '$scope', 'Game',
  function($scope, Game) {
    $scope.currentTile = function() {
      return Game.currentTile;
    }
  }
];

ctrls.controller("BoardCtrl", boardCtrl);
