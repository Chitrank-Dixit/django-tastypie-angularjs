angular.module('app')
.controller('NavbarController' , [ '$scope', 'Authentication', function($scope, Authentication) {
	var vm = this;

    vm.logout = logout;

    /**
     * @name logout
     * @desc Log the user out
     * @memberOf app.layout.controllers.NavbarController
     */
    function logout() {
      Authentication.logout();
    }
}])

.controller('IndexController' , [ '$scope', 'Authentication', 'Snackbar', function($scope, Authentication, Snackbar) {
	var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.posts = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.layout.controllers.IndexController
     */
    function activate() {
      // Posts.all().then(postsSuccessFn, postsErrorFn);

      // $scope.$on('post.created', function (event, post) {
      //   vm.posts.unshift(post);
      // });

      // $scope.$on('post.created.error', function () {
      //   vm.posts.shift();
      // });


      // *
      //  * @name postsSuccessFn
      //  * @desc Update thoughts array on view
       
      // function postsSuccessFn(data, status, headers, config) {
      //   vm.posts = data.data;
      // }


      // /**
      //  * @name postsErrorFn
      //  * @desc Show snackbar with error
      //  */
      // function postsErrorFn(data, status, headers, config) {
      //   Snackbar.error(data.error);
      // }
    }
}]);

