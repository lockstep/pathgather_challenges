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
