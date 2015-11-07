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
      
    }
}]);

