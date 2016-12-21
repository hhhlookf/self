;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('SettlChooseCtrl', SettlChooseCtrlFn);

  SettlChooseCtrlFn.$inject = ['$scope'];

  function SettlChooseCtrlFn($scope) {
    var vm = $scope;

    vm.orderItemList = [
      {
        title: '结算方式',
        type: 'arrow',
        items: ['分期付款', '担保支付', '授信支付', '实时支付']
      },
      {
        title: '结算状态',
        type: 'arrow',
        items: ['待支付', '未支付']
      },
      {
        title: '应付金额',
        type: 'order',
        items: []
      }
    ];
    vm.currSelect = 0;
    vm.currOrderMode = 0;
    vm.settlMode = '';
    vm.settlState = '';

    vm.filterChoose = filterChooseFn;
    vm.closeMask = closeMaskFn;
    vm.filerItemChoose = filerItemChooseFn;

    function filterChooseFn() {
      if(this.$index == 0 || this.$index == 1) {
        if(vm.currSelect === this.$index+1) {
          vm.currSelect = 0;
        }else {
          vm.currSelect = this.$index+1
        }
      }else {
        vm.currOrderMode = vm.currOrderMode+1 > 2 ? 0 : vm.currOrderMode+1;
      }

    }
    function closeMaskFn() {
      vm.currSelect = 0;
    }
    function filerItemChooseFn() {
      if(this.$parent.$index == 0) {
        vm.settlMode = this.item;
      }else {
        vm.settlState = this.item;
      }
    }
  }

})();