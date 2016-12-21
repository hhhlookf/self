;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('appsellerGoodsList', appsellerGoodsList);

  appsellerGoodsList.$inject = ['$scope', 'requestApi'];

  function appsellerGoodsList($scope, requestApi) {
    var vm = $scope;

    // setTimeout(function () {
    //   requestApi.showTitle('全部商品');
    // },500);

    vm.goodsListData = localStorage.getItem('tdgoodsListData') && JSON.parse(localStorage.getItem('tdgoodsListData')) || requestApi.dataErrorhandle();
    console.log(vm.goodsListData);

    // 将当前点击的货物对象存入本地存储，跳转至货物详情页
    vm.getGoodsDetail = function() {
      localStorage.setItem('tdcurrentGoods', JSON.stringify(vm.goodsListData[this.$index]));
      requestApi.redirect('application-seller-goodsdetail.html');
    };
  }

})();