angular.module('app1',['ui.router', 'ngCookies', 'ngRoute'])
.config(['$stateProvider','$urlRouterProvider','$locationProvider','$httpProvider', '$routeProvider' ,function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $routeProvider) {

  
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

  $routeProvider.when('/', {
      controller: 'IndexController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/index.html'
    }).when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login/', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/+:username', {
      controller: 'AccountController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/accounts/account.html'
    }).when('/+:username/settings', {
      controller: 'AccountSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/accounts/settings.html'
    }).when('/attendence', {
        controller: 'AttendenceController',
        controllerAs: 'vm',
        templateUrl: '/static/templates/class_management/class_management.html'
    }).otherwise('/');

  // $stateProvider
  //   .state('index', {
  //     url: '/index',
  //     templateUrl: '/static/templates/layout/index.html',
  //     controller: 'IndexController',
  //     controllerAs: 'vm'
  //   })

  //   .state('register', {
  //     url: '/register',
  //     templateUrl: '/static/templates/authentication/register.html',
  //     controller: 'RegisterController',
  //     controllerAs: 'vm'
  //   })
    
  //   .state('login', {
  //     url: '/login',
  //     templateUrl: '/static/templates/authentication/login.html',
  //     controller: 'LoginController',
  //     controllerAs: 'vm'
  //   })

  //   .state('+:username.settings', {
  //     url: '/+:username/settings',
  //     controller: 'AccountSettingsController',
  //     controllerAs: 'vm',
  //     templateUrl: '/static/templates/accounts/settings.html'
  //   })

  //   .state('+:username', {
  //     url: '/+:username',
  //     controller: 'AccountController',
  //     controllerAs: 'vm',
  //     templateUrl: '/static/templates/accounts/account.html'
  //   })

  //   .state('attendence', {
  //       url: '/attendence',
  //       controller: 'AttendenceController',
  //       controllerAs: 'vm',
  //       templateUrl: '/static/templates/class_management/class_management.html'
  //   });


  //   $urlRouterProvider.otherwise('index');


}])
.run(function() {
     //  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
     // $http.defaults.xsrfCookieName = 'csrftoken';
     console.log("Working Angualr");
});
