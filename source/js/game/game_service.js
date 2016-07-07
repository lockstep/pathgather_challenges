var services = ngModule('challenge.services');

services.service("Game", function() {
  var _game;
  function rollDice() {
    return Math.floor((Math.random() * 6) + 1);
  }

  function move(user) {
    var moves = rollDice();
    var nextTile = user.currentTile + moves;

    nextTile = nextTile % 16;

    if (nextTile == 0) {
      nextTile = 1;
    }

    user.moveTo(nextTile);
  }

  _game = {
    currentTile: 1,
    move: move,
    users: []
  }

  return _game;
});
