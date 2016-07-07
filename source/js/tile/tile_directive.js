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
