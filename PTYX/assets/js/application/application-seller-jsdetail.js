;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('appSellerJsdetail', appSellerJsdetail);

  appSellerJsdetail.$inject = ['$scope', 'requestApi'];

  function appSellerJsdetail($scope, requestApi) {
    // setTimeout(function () {
    //   requestApi.showTitle('结算记录');
    // }, 500);

    var vm = $scope;

    // 将本地存储中的当前货物对象取出来,如果不存在就弹窗提示
    vm.currentGoodData = JSON.parse(localStorage.getItem('appSettlData'));
    console.log(vm.currentGoodData);

    // 去往提交冲红/退款页面
    vm.submitRed = function (type) {
      localStorage.setItem('jijiaoType', type);
      localStorage.setItem('tijiaoRedMoney', vm.currentGoodData.planRedAmount);
      localStorage.setItem('tijiaoRefundMoney', vm.currentGoodData.refundAmount);
      requestApi.redirect('application-submit-red-refund.html');
    };
  }
})();