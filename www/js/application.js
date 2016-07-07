function ngModule(name, dependencies) {
  try {
    return angular.module(name);
  }
  catch (err) {
    dependencies = typeof dependencies !== 'undefined' ? dependencies : [];
    return angular.module(name, dependencies);
  }
}

angular.module('FEChallenge', [
  'challenge.controllers',
  'challenge.services',
  'challenge.directives'
]);

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

var directives = ngModule('challenge.directives');

var boardDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/board/board.html',
    controller: 'BoardCtrl'
  }
}

directives.directive("board", boardDirective);

var app = ngModule('challenge.services');

app.service("Rules", function() {
  var _rules = {
    "1": { "message": "Roll again.", "points": 0 },
    "2": { "message": "Learned something new today!", "points": 1 },
    "3": { "message": "Family lunch day!", "points": 1 },
    "4": { "message": "Distracted by fundraising...", "points": -1 },
    "5": { "message": "Worked too many hours, fell asleep on subway...", "points": -2 }, "6": { "message": "New JS framework released, time to relearn everything...",
    "points": -1 },
    "7": { "message": "New JS framework released, time to relearn everything!",
    "points": 2 },
    "8": { "message": "Closed a new customer!", "points": 1 },
    "9": { "message": "Production is broken, oops...", "points": -1 },
    "10": { "message": "Roll again.", "points": 0 },
    "12": { "message": "New team member!", "points": 2 },
    "13": { "message": "Learned something new today!", "points": 1 },
    "14": { "message": "Need to get through all my emails...", "points": -1 }, "15": { "message": "Landed that open source PR!", "points": 2 },
    "16": { "message": "Awesome thank you email from a user!", "points": 1 }
  }

  var _service = {
    get: function(number) {
      return _rules["" + number];
    },
    message: function(number) {
      return this.get(number).message;
    }
  }

  return _service;
});

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

var directives = ngModule('challenge.directives');

directives.directive("tile", [
  function() {
    var linkFn = function(scope, element, attrs) {
    }

    return {
      restrict: 'E',
      link: linkFn,
      scope: {
        tileNumber: '=',
        position: '@'
      },
      replace: true,
      controller: 'TileCtrl',
      templateUrl: '/templates/tiles/tile.html'
    }
  }
]);

var services = ngModule('challenge.services');

services.factory("UserFactory", function() {
  var _user = function(attrs) {
    this.points = 0;

    for(var key in attrs) {
      this.name = attrs[key];
    }

    this.currentTile = 1;
  };

  return _user;
});
