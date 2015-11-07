'use strict';

/**
 * @ngdoc overview
 * @name minovateApp
 * @description
 * # minovateApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngCookies',
    'ui.router',
  ])
  .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {

      event.targetScope.$watch('$viewContentLoaded', function () {

        angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);

        setTimeout(function () {
          angular.element('#wrap').css('visibility','visible');

          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
      $rootScope.containerClass = toState.containerClass;
    });
  }])

  // configuration for ngtagsinput
  // .config(['tagsInputConfigProvider' ,function(tagsInputConfigProvider) {
  //   tagsInputConfigProvider.setDefaults('tagsInput', {
  //       placeholder: 'Add Recepients'
  //   });
  // }])

  // .config(['uiSelectConfig', function (uiSelectConfig) {
  //   uiSelectConfig.theme = 'bootstrap';
  // }])

  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }])

  // .config(['localStorageServiceProvider', function(localStorageServiceProvider)  {
  //   localStorageServiceProvider
  //   .setStorageType('localStorage')
  //   .setNotify(true, true);
  // }])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //$urlRouterProvider.otherwise('/core/exam_view');

    $stateProvider

    .state('app.index', {
      url: '/dashboard',
      controller: 'DashboardCtrl',
      templateUrl: 'templates/index.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/datatables/datatables.bootstrap.min.css'
          ]);
        }]
      }
    })

    .state('app.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'templates/authentication/login.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/datatables/datatables.bootstrap.min.css'
          ]);
        }]
      }
    })

    .state('app.register', {
      url: '/register',
      controller: 'RegisterController',
      templateUrl: 'templates/authentication/register.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/datatables/datatables.bootstrap.min.css'
          ]);
        }]
      }
    })

    // .state('app', {
    //   abstract: true,
    //   url: '/app',
    //   templateUrl: 'static/templates/index.html'
    // })
    //dashboard
    
    .state('app.branch', {
      url: '/branch',
      controller: 'BranchesCtrl',
      templateUrl: 'views/tmpl/branch.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/datatables/datatables.bootstrap.min.css'
          ]);
        }]
      }
    })
    .state('app.teacher', {
      url: '/teacher',
      controller: 'TeachersCtrl',
      templateUrl: 'views/tmpl/teacher.html',
      resolve: {
        plugins: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load([
            'scripts/vendor/datatables/datatables.bootstrap.min.css'
          ]);
        }]
      }
    })
    
    
  }]);

