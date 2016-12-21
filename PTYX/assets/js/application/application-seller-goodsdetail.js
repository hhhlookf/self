;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('appsellerGdetail', appsellerGdetail);

  appsellerGdetail.$inject = ['$scope', 'requestApi'];

  function appsellerGdetail($scope, requestApi) {
    // setTimeout(function () {
    //   requestApi.showTitle('商品详情');
    // },500);
    var vm = $scope;

    // 将本地存储中的当前货物对象取出来,如果不存在就弹窗提示
    vm.currentGoodData = localStorage.getItem('tdcurrentGoods') && JSON.parse(localStorage.getItem('tdcurrentGoods')) || requestApi.dataErrorhandle();
  }
})();