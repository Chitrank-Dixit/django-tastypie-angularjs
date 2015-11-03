(function () {
  'use strict';

  angular
    .module('app.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
   * @name config
   * @desc Define valid application routes
   */
  function config($routeProvider) {
    $routeProvider.when('/', {
      controller: 'IndexController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
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
    });

    // $stateProvider
    // .state('index', {
    //   url: '/',
    //   templateUrl: '/static/templates/layout/index.html',
    //   controller: 'IndexController',
    //   controllerAs: 'vm'
    // })

    // .state('register', {
    //   url: '/register',
    //   templateUrl: '/static/templates/authentication/register.html',
    //   controller: 'RegisterController',
    //   controllerAs: 'vm'
    // })
    
    // .state('login', {
    //   url: '/login',
    //   templateUrl: '/static/templates/authentication/login.html',
    //   controller: 'LoginController',
    //   controllerAs: 'vm'
    // })

    // .state('+:username.settings', {
    //   url: '/+:username/settings',
    //   controller: 'AccountSettingsController',
    //   controllerAs: 'vm',
    //   templateUrl: '/static/templates/accounts/settings.html'
    // })

    // .state('+:username', {
    //   url: '/+:username',
    //   controller: 'AccountController',
    //   controllerAs: 'vm',
    //   templateUrl: '/static/templates/accounts/account.html'
    // })


    //$urlRouterProvider.otherwise('index');


    // .state('nav', {
    //   url: '/nav',
    //   templateUrl: 'nav/_nav.html',
    //   controller: 'NavCtrl'

    // })
    // .state('home', {
    //   url: '/home',
    //   templateUrl: 'home/_home.html',
    //   controller: 'MainCtrl',
    //   resolve: {
    //     postPromise: ['posts', function(posts){
    //       return posts.getAll();
    //     }],
    //     graphPromise: ['graphs', function(graphs){
    //       return graphs.getAll();
    //     }]
    //   }
    // })

    // .state('posts', {
    //   url: '/posts/{id}',
    //   templateUrl: 'posts/_posts.html',
    //   controller: 'PostsCtrl',
    //   resolve: {
    //     post: ['$stateParams', 'posts', function($stateParams, posts) {
    //     return posts.get($stateParams.id);
    //     }]
    //   }
    // })

    

    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'auth/_login.html',
    //   controller: 'AuthCtrl',
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //       Auth.currentUser().then(function (){
    //         $state.go('home');
    //       })
    //   }]
    // })
    // .state('register', {
    //   url: '/register',
    //   templateUrl: 'auth/_register.html',
    //   controller: 'AuthCtrl',
    //   onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //       $state.go('home');
    //     })
    //   }]
    // })
    // .state('create_graph', {
    //   url: '/graphs/create',
    //   templateUrl: 'graphs/_create_graph.html',
    //   controller: 'CreateGraphCtrl',
    //   /*onEnter: ['$state', 'Auth', function($state, Auth) {
    //     Auth.currentUser().then(function (){
    //       $state.go('home');
    //     })
    //   }]*/
    // })
    // .state('view_graph', {
    //   url: '/graphs/{id}',
    //   templateUrl: 'graphs/_view_graph.html',
    //   controller: 'ViewGraphCtrl',
    //   resolve: {
    //     graph: ['$stateParams', 'graphs', function($stateParams, graphs) {
    //     return graphs.get($stateParams.id);
    //     }]
    //   }
    // })
    // .state('delete_graph', {
    //   url: '/graphs/delete/{id}',
    //   templateUrl: 'graphs/_delete_graph.html',
    //   controller: 'DeleteGraphCtrl',
    //   resolve: {
    //     graph: ['$stateParams', 'graphs', function($stateParams, graphs) {
    //     return graphs.get($stateParams.id);
    //     }]
    //   }
    // })
    // .state('edit_graph', {
    //   url: '/graphs/edit/{id}',
    //   templateUrl: 'graphs/_edit_graph.html',
    //   controller: 'EditGraphCtrl',
    //   resolve: {
    //     graph: ['$stateParams', 'graphs', function($stateParams, graphs) {
    //     return graphs.get($stateParams.id);
    //     }]
    //   }
    // });

    



  }
})();
