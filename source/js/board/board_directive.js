var directives = ngModule('challenge.directives');

var boardDirective = function() {
  return {
    restrict: 'E',
    templateUrl: '/templates/board/board.html',
    controller: 'BoardCtrl'
  }
}

directives.directive("board", boardDirective);
