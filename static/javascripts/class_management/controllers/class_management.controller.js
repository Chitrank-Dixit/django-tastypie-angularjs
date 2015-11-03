/**
 * PostsController
 * @namespace app.class_management.controllers
 */
(function () {
  'use strict';

  angular
    .module('app.class_management.controllers')
    .controller('class_managementController', class_managementController);

  class_managementController.$inject = ['$scope'];

  /**
   * @namespace class_managementController
   */
  function class_managementController($scope) {
    var vm = this;

    vm.columns = [];

    activate();


    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf app.class_management.controllers.class_managementController
     */
    function activate() {
      $scope.$watchCollection(function () { return $scope.class_management; }, render);
      $scope.$watch(function () { return $(window).width(); }, render);
    }
    

    /**
     * @name calculateNumberOfColumns
     * @desc Calculate number of columns based on screen width
     * @returns {Number} The number of columns containing class_management
     * @memberOf app.class_management.controllers.class_managementControllers
     */
    function calculateNumberOfColumns() {
      var width = $(window).width();

      if (width >= 1200) {
        return 4;
      } else if (width >= 992) {
        return 3;
      } else if (width >= 768) {
        return 2;
      } else {
        return 1;
      }
    }


    /**
     * @name approximateShortestColumn
     * @desc An algorithm for approximating which column is shortest
     * @returns The index of the shortest column
     * @memberOf app.class_management.controllers.class_managementController
     */
    function approximateShortestColumn() {
      var scores = vm.columns.map(columnMapFn);

      return scores.indexOf(Math.min.apply(this, scores));

      
      /**
       * @name columnMapFn
       * @desc A map function for scoring column heights
       * @returns The approximately normalized height of a given column
       */
      function columnMapFn(column) {
        var lengths = column.map(function (element) {
          return element.content.length;
        });

        return lengths.reduce(sum, 0) * column.length;
      }


      /**
       * @name sum
       * @desc Sums two numbers
       * @params {Number} m The first number to be summed
       * @params {Number} n The second number to be summed
       * @returns The sum of two numbers
       */
      function sum(m, n) {
        return m + n;
      }
    }


    /**
     * @name render
     * @desc Renders class_management into columns of approximately equal height
     * @param {Array} current The current value of `vm.class_management`
     * @param {Array} original The value of `vm.class_management` before it was updated
     * @memberOf app.class_management.controllers.class_managementController
     */
    function render(current, original) {
      if (current !== original) {
        vm.columns = [];

        for (var i = 0; i < calculateNumberOfColumns(); ++i) {
          vm.columns.push([]);
        }

        for (var i = 0; i < current.length; ++i) {
          var column = approximateShortestColumn();

          vm.columns[column].push(current[i]);
        }
      }
    }
  }
})();
