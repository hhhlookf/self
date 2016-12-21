;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('GoodsEdit', goodsEdit)

    function goodsEdit() {
        var vm = this;

        vm.add = function() {
            vm.qty++;
        }

        vm.reduce = function() {
            if (vm.qty > 1) {
                vm.qty--;
            }
        }

        vm.majorSupply = function(index) {
            return vm.ifSelect = index;
        }
    }
})();
