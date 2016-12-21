;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('AppSellerOdetail', AppSellerOdetail);

  AppSellerOdetail.$inject = ['$scope', 'requestApi', 'getUrl'];

  function AppSellerOdetail($scope, requestApi, getUrl) {
    // setTimeout(function () {
    //   requestApi.showTitle('订单详情');
    // }, 500);
    var vm = $scope;

    vm.detailId = 1056;  // 临时订单ID
    // vm.detailId = getUrl.getId();

    requestApi.getData('DeliverySendAction/getOrderDetail.htm', [vm.detailId])
      .then(function(data) {
        console.log(data);
        vm.appSellOdetailData = data;   //订单详情

        vm.balanceList = data.balanceList;  //订单结算记录

        vm.tbDeliverGoods = data.goodsList; //订单货物清单

        // 将当前点击的货物对象存入本地存储，跳转至货物详情页
        vm.getGoodsDetail = function() {
          localStorage.setItem('tdcurrentGoods', JSON.stringify(vm.tbDeliverGoods[this.$index]));
          requestApi.redirect('application-seller-goodsdetail.html');
        };

        // 点击全部商品
        vm.goToGoodList = function() {
          localStorage.setItem('tdgoodsListData', JSON.stringify(vm.tbDeliverGoods));
          requestApi.redirect('application-seller-goodslist.html');
        };

        // 点击结算记录
        vm.goToSettl = function() {
          localStorage.setItem('appSettlToJdData', JSON.stringify(vm.balanceList[this.$index]));
          requestApi.redirect('application-seller-od-to-jd.html');
        }
      })
  }
})();


