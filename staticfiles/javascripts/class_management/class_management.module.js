(function () {
  'use strict';

  angular
    .module('app.class_management', [
      'app.class_management.controllers',
      'app.class_management.directives',
      'app.class_management.services'
    ]);

  angular
    .module('app.class_management.controllers', []);

  angular
    .module('app.class_management.directives', ['ngDialog']);

  angular
    .module('app.class_management.services', []);
})();
