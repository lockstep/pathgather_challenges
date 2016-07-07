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
