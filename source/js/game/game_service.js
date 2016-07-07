var services = ngModule('challenge.services');

services.service("Game", [
  'Rules',
  function(Rules) {
    var _game;
    function dice() {
      return Math.floor((Math.random() * 6) + 1);
    }

    function move(user) {
      var moves = dice();
      var nextTile = user.currentTile + moves;

      nextTile = nextTile % 16;

      if (nextTile == 0) {
        nextTile = 1;
      }

      user.currentTile = nextTile;

      var nextState = Rules.get(user.currentTile);
      user.points += nextState.points;

      return nextState;
    }

    _game = {
      currentTile: 1,
      move: move,
      users: []
    }

    return _game;
  }
]);
