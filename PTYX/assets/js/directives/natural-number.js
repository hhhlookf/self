;(function() {
  'use strict';

  angular
    .module('cgmall')
    .directive('naturalNumber', naturalNumberFn);

  function naturalNumberFn() {
    return {
      restrict: 'A',
      require: '^?ngModel',
      link: linkFn
    };
    function linkFn(scope, ele, attrs, ctrl) {
      ctrl.$parsers.push(function(value) {
        var newVal = Math.abs(parseInt(value || 0));
        ctrl.$setViewValue(newVal);
        return newVal;
      });
      ele.on('blur', function() {
        var val = angular.element(this).val();
        if(val.indexOf('.') !== -1 || val.indexOf('-') !== -1 || val === '') {
          ele.val(ctrl.$viewValue)
        }
      })
    }
  }

})();