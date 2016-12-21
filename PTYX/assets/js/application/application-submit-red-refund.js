;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('appSubmitRR', appSubmitRR);

  appSubmitRR.$inject = ['$scope', 'requestApi'];

  function appSubmitRR($scope, requestApi) {
    // setTimeout(function () {
    //   requestApi.showTitle('结算记录');
    // }, 500);

    var vm = $scope;

    // 将本地存储中的当前货物对象取出来,如果不存在就弹窗提示
    vm.tijiaoType = localStorage.getItem('tijiaoType') && JSON.parse(localStorage.getItem('tijiaoType')) || requestApi.dataErrorhandle();
    console.log(vm.tijiaoType);
    if (vm.tijiaoType == 1) {
      vm.money = localStorage.getItem('tijiaoRedMoney') && JSON.parse(localStorage.getItem('tijiaoRedMoney')) || requestApi.dataErrorhandle();
    } else if (vm.tijiaoType == 2) {
      vm.money = localStorage.getItem('tijiaoRefundMoney') && JSON.parse(localStorage.getItem('tijiaoRefundMoney')) || requestApi.dataErrorhandle();
    }
  }
})();