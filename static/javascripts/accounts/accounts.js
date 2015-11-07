angular.module('app')
.controller('AccountController', ['$scope','$location', '$routeParams','Account', 'Snackbar', function($scope,$location, $routeParams,Account, Snackbar) {
	  var vm = this;

    vm.account = undefined;
    //vm.posts = [];

    
    $scope.activate = function() {
      var username = $routeParams.username.substr(1);

      Account.get(username).then(accountSuccessFn, accountErrorFn);
      //Posts.get(username).then(postsSuccessFn, postsErrorFn);

      /**
      * @name accountSuccessAccount
      * @desc Update `account` on viewmodel
      */
      function accountSuccessFn(data, status, headers, config) {
        vm.account = data.data;
      }


      /**
      * @name accountErrorFn
      * @desc Redirect to index and show error Snackbar
      */
      function accountErrorFn(data, status, headers, config) {
        $location.url('/');
        Snackbar.error('That user does not exist.');
      }


      /**
        * @name postsSucessFn
        * @desc Update `posts` on viewmodel
        */
      // function postsSuccessFn(data, status, headers, config) {
      //   vm.posts = data.data;
      // }


      // *
      //   * @name postsErrorFn
      //   * @desc Show error snackbar
        
      // function postsErrorFn(data, status, headers, config) {
      //   Snackbar.error(data.data.error);
      // }
    }
    $scope.activate();
  

}])

.controller('AccountSettingsController', ['$scope','$location', '$routeParams', 'Authentication', 'Account', 'Snackbar' , function($scope,$location, $routeParams, Authentication, Account, Snackbar) {
	var vm = this;

    vm.destroy = destroy;
    vm.update = update;

    


    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated.
     * @memberOf app.accounts.controllers.AccountSettingsController
     */
    $scope.activate = function() {
      var authenticatedAccount = Authentication.getAuthenticatedAccount();
      var username = $routeParams.username.substr(1);

      // Redirect if not logged in
      if (!authenticatedAccount) {
        $location.url('/');
        Snackbar.error('You are not authorized to view this page.');
      } else {
        // Redirect if logged in, but not the owner of this account.
        if (authenticatedAccount.username !== username) {
          debugger;
          $location.url('/');
          Snackbar.error('You are not authorized to view this page.');
        }
      }

      Account.get(username).then(accountSuccessFn, accountErrorFn);

      /**
       * @name accountSuccessFn
       * @desc Update `account` for view
       */
      function accountSuccessFn(data, status, headers, config) {
        vm.account = data.data;
      }

      /**
       * @name accountErrorFn
       * @desc Redirect to index
       */
      function accountErrorFn(data, status, headers, config) {
        $location.url('/');
        Snackbar.error('That user does not exist.');
      }
    }


    /**
     * @name destroy
     * @desc Destroy this account
     * @memberOf app.accounts.controllers.AccountSettingsController
     */
     $scope.destroy = function() {
      Account.destroy(vm.account.username).then(accountSuccessFn, accountErrorFn);

      /**
       * @name accountSuccessFn
       * @desc Redirect to index and display success snackbar
       */
      function accountSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        window.location = '/';

        Snackbar.show('Your account has been deleted.');
      }


      /**
       * @name accountErrorFn
       * @desc Display error snackbar
       */
      function accountErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }


    /**
     * @name update
     * @desc Update this account
     * @memberOf app.accounts.controllers.AccountSettingsController
     */
    $scope.update = function() {
      var username = $routeParams.username.substr(1);

      Account.update(username, vm.account).then(accountSuccessFn, accountErrorFn);

      /**
       * @name accountSuccessFn
       * @desc Show success snackbar
       */
      function accountSuccessFn(data, status, headers, config) {
        Snackbar.show('Your account has been updated.');
      }


      /**
       * @name accountErrorFn
       * @desc Show error snackbar
       */
      function accountErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    $scope.activate();
  
}])
.factory('Account' ,['$http' ,function($http) {
	var Account = {
      destroy: destroy,
      get: get,
      update: update
    };

    return Account;

    /////////////////////

    /**
     * @name destroy
     * @desc Destroys the account with username `username`
     * @param {string} username The username of the account to be destroyed
     * @returns {Promise}
     * @memberOf app.accounts.services.Account
     */
    function destroy(username) {
      return $http.delete('/api/v1/accounts/' + username + '/');
    }


    /**
     * @name get
     * @desc Gets the account with username `username`
     * @param {string} username The username of the account to get
     * @returns {Promise}
     * @memberOf app.accounts.services.Account
     */
    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/');
    }


    /**
     * @name update
     * @desc Update the account with username `username`
     * @param {string} username The username of the account to be updated
     * @param {Object} account The updated account model
     * @returns {Promise}
     * @memberOf app.accounts.services.Account
     */
    function update(username, account) {
      return $http.put('/api/v1/accounts/' + username + '/', account);
    }
}]);