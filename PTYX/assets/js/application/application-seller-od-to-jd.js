;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('appSellerToJd', appSellerToJd);

  appSellerToJd.$inject = ['$scope', 'requestApi'];

  function appSellerToJd($scope, requestApi) {
    // setTimeout(function () {
    //   requestApi.showTitle('结算记录');
    // }, 500);

    var vm = $scope;

    // 将本地存储中的当前货物对象取出来,如果不存在就弹窗提示
    vm.currentGoodData = localStorage.getItem('appSettlToJdData') && JSON.parse(localStorage.getItem('appSettlToJdData')) || requestApi.dataErrorhandle();
    console.log(vm.currentGoodData);
  }
})();