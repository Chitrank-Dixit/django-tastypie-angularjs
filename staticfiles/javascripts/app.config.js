(function () {
  'use strict';

  angular
    .module('app.config')
    .config(config);

  config.$inject = ['$locationProvider', '$httpProvider'];

  /**
   * @name config
   * @desc Enable HTML5 routing
   */
   
   
  function config($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common['X-Requested-With'];
  }

})();
