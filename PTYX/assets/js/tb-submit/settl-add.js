;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('SettlAddCtrl', SettlAddCtrlFn);

  SettlAddCtrlFn.$inject = ['$scope', '$filter', 'requestApi'];
  function SettlAddCtrlFn($scope, $filter, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      requestApi.showTitle('添加支付方式');
    }, 500);

    vm.creditInfo = localStorage.tsCreditInfo || requestApi.dataErrorhandle();
    if(parseFloat(vm.creditInfo)) {
      vm.creditInfo = '¥' + $filter('number')(vm.creditInfo, 2);
    }

    vm.data = {};
    vm.data.payType = 1;
    vm.payTypes = [
      { label: '担保支付', value: 1 },
      { label: '账期支付', value: 4 }
    ];
    vm.data.orderId = localStorage.orderId ? JSON.parse(localStorage.orderId) : requestApi.dataErrorhandle();
    vm.payableAmount = localStorage.tsPayableAmount ? parseFloat(localStorage.tsPayableAmount) : requestApi.dataErrorhandle();
    vm.totalAmount_guoc = localStorage.totalAmount_guoc ? JSON.parse(localStorage.totalAmount_guoc) : requestApi.dataErrorhandle();
    vm.payMoney_guoc = localStorage.payMoney_guoc ? JSON.parse(localStorage.payMoney_guoc) : requestApi.dataErrorhandle();
    vm.payTypechoose = payTypechooseFn;
    vm.settlAdd = settlAddFn;

    vm.jhTime = '';
    // 调用日历
    vm.getDate = function () {
      //调原生日历
      window.bridge.callHandler('invokeHFCalendar', {}, function (response) {
          $scope.$apply(function () {
              vm.jhTime  = response;
          })
      });
    };

    function payTypechooseFn() {
      vm.data.payType = this.item.value;
    }
    function settlAddFn() {
      if(!vm.data.money) {
        requestApi.alert('支付额度必须是非零数字');
      }else if(vm.data.money > vm.payableAmount) {
        requestApi.alert('支付金额超过应付金额')
      }else {
        requestApi
          .getData('OrderCommitAction/addSettlement.htm', [
            vm.data.orderId,
            vm.data.payType,
            vm.data.money,
            vm.jhTime
          ])
          .then(function(data) {
            requestApi.backAndRefresh()
          });
      }
    }
  }

})();