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
  'ngAnimate',
  'challenge.controllers',
  'challenge.services',
  'challenge.directives'
]);

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

var directives = ngModule('challenge.directives');

directives.directive("game", [
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
      controller: 'GameCtrl as game',
      templateUrl: '/templates/game/layout.html'
    }
  }
]);

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
    var vm = this;

    vm.users = function() {
      return Game.users;
    }

    return vm;
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
      controller: 'TileCtrl as tile',
      templateUrl: '/templates/tiles/tile.html'
    }
  }
]);

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
