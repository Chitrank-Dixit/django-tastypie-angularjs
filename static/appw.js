angular.module('app', ['ui.router','ngCookies'])
.config([
'$stateProvider',
'$urlRouterProvider',
'$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

  
  $stateProvider
    .state('index', {
      url: '/index',
      templateUrl: 'templates/layout/index.html',
      controller: 'IndexController',
      controllerAs: 'vm'
    })

    .state('register', {
      url: '/register',
      templateUrl: 'templates/authentication/register.html',
      controller: 'RegisterController',
      controllerAs: 'vm'
    })
    
    .state('login', {
      url: '/login',
      templateUrl: 'templates/authentication/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    })

    .state('+:username.settings', {
      url: '/+:username/settings',
      controller: 'AccountSettingsController',
      controllerAs: 'vm',
      templateUrl: 'templates/accounts/settings.html'
    })

    .state('+:username', {
      url: '/+:username',
      controller: 'AccountController',
      controllerAs: 'vm',
      templateUrl: 'templates/accounts/account.html'
    })

    .state('attendence', {
        url: '/attendence',
        controller: 'AttendenceController',
        controllerAs: 'vm',
        templateUrl: 'templates/class_management/class_management.html'
    });


    $urlRouterProvider.otherwise('index');


  
}]);


