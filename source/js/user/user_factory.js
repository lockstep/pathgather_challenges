var services = ngModule('challenge.services');

services.factory("UserFactory", ['$interval', 'Rules', function($interval, Rules) {
  var _user = function(attrs) {
    var user = this;

    function initialize() {
      user.points = 0;
      user.message = '';
      user.moving = false;
      user.currentTile = 1;
      user.color = randomRGBColor();

      for(var key in attrs) {
        user[key] = attrs[key];
      }
    }

    user.moveTo = function(tileNo) {
      var nextState = Rules.get(tileNo);

      this.moving = true;
      this.points += (nextState && nextState.points) || 0;
      this.message = nextState && nextState.message;

      user.moveInterval = $interval(function() {
        user.currentTile += 1;
        if (user.currentTile > 16) {
          user.currentTile = 1;
        }

        if (user.currentTile == tileNo) {
          user.moving = false;
          $interval.cancel(user.moveInterval);
        }
      }, 400);
    }

    function randomRGBComponent() {
      return Math.round(Math.random() * 255);
    }

    function randomRGBColor() {
      return 'rgb(' + randomRGBComponent() + ', ' + randomRGBComponent() + ', ' + randomRGBComponent() + ')';
    }

    initialize();
  };

  return _user;
}]);
