/**
 * Posts
 * @namespace app.posts.directives
 */
(function () {
  'use strict';

  angular
    .module('app.posts.directives')
    .directive('posts', posts);

  /**
   * @namespace Posts
   */
  function posts() {
    /**
     * @name directive
     * @desc The directive to be returned
     * @memberOf app.posts.directives.Posts
     */
    var directive = {
      controller: 'PostsController',
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
        posts: '='
      },
      templateUrl: '/static/templates/posts/posts.html'
    };

    return directive;
  }
})();
