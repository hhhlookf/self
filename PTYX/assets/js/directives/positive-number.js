;(function() {
  'use strict';

  angular
    .module('cgmall')
    .directive('positiveNumber', positiveNumberFn);

  function positiveNumberFn() {
    return {
      restrict: 'A',
      require: '^?ngModel',
      link: linkFn
    };
    function linkFn(scope, ele, attrs, ctrl) {
      ctrl.$parsers.push(function(value) {
        var newVal = Math.abs(value || 0);
        ctrl.$setViewValue(newVal);
        return newVal;
      });
      ele.on('blur', function() {
        var val = angular.element(this).val();
        if(val.indexOf('-') !== -1) {
          ele.val(ctrl.$viewValue)
        }
      })
    }
  }

})();