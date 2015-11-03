/**
 * Post
 * @namespace app.posts.directives
 */
(function () {
  'use strict';

  angular
    .module('app.class_management.directives')
    .directive('post', post);

  /**
   * @namespace Post
   */
  function post() {
    /**
     * @name directive
     * @desc The directive to be returned
     * @memberOf app.class_management.directives.Post
     */
    var directive = {
      restrict: 'E',
      scope: {
        post: '='
      },
      templateUrl: '/static/templates/class_management/post.html'
    };

    return directive;
  }
})();
