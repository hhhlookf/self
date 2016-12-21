;(function() {
    'use strict';

    angular
        .module('cgmall')
        .directive('mallHeader', mallHeaderFn);

    mallHeaderFn.$inject = ['$parse'];
    function mallHeaderFn($parse) {
        return {
            scope: {
                placeholder: '@'
            },
            restrict: 'E',
            templateUrl: 'widget/header.html',
            transclude: true,
            controller: ['$transclude', '$scope', ctrlFn],
            link: linkFn
        };

        function ctrlFn($transclude, $scope) {
            $scope.longInput = false;
            $transclude(function(eles) {
                if(eles.length == 0) {
                    $scope.longInput = true;
                }
            })
        }

        function linkFn(scope, ele, attrs) {
            ele.find('input').attr('placeholder', scope.placeholder);
            scope.focus = focusFn;
            //scope.blur = blurFn;
            scope.reset = resetFn;
            function focusFn() {
                ele.find('i').css('display', 'block');
            }
            //function blurFn() {
            //    ele.find('i').css('display', 'none');
            //}
            function resetFn() {
                ele.find('input').val('');
            }

        }
    }

})();