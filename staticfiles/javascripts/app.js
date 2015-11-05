(function () {
  'use strict';

  angular.module('app', ['app.config','app.routes','app.accounts','app.authentication','app.layout','app.utils','ui.router']);

  angular.module('app.config',['ui.router']);

  angular.module('app.routes', ['ngRoute', 'ui.router']);

  angular.module('app')
    .run(run);

  run.$inject = ['$http'];

  /**
   * @name run
   * @desc Update xsrf $http headers to align with Django's defaults
   */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';

  }
})();
// angular.module('app', ['app.config','app.routes','app.accounts','app.authentication','app.layout','app.utils','ui.router'])
// .config('$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {


// })
// .run('$http', function($http) {
//     $http.defaults.xsrfHeaderName = 'X-CSRFToken';
//     $http.defaults.xsrfCookieName = 'csrftoken';
// });
