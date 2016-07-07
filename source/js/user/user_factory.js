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
