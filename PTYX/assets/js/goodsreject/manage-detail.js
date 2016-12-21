;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('ManageDetailCtrl', ManageDetailCtrlFn);

  ManageDetailCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera', 'getUrl'];
  function ManageDetailCtrlFn($scope, requestApi, dataOpera, getUrl) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
    }, 500);

    var orderId = getUrl.getId();
    if(orderId) {
      dataOpera.set('orderId', orderId);
    }else {
      orderId = dataOpera.get('orderId');
    }

    vm.goToGoodsList = goToGoodsListFn;
    vm.goToItemDetail = goToItemDetailFn;
    vm.revoke = revokeFn;

    requestApi
      .getData('StockBackPurchaseAction/getDetail.htm', [orderId])
      .then(function(data) {
        vm.data = data;
      });

    function goToGoodsListFn() {
      localStorage.rgmItemList = JSON.stringify(vm.data.goodsList);
      requestApi.redirect('goodsreject-manage-goods-list.html');
    }
    function goToItemDetailFn() {
      localStorage.rgmItem = JSON.stringify(this.item);
      requestApi.redirect('goodsreject-manage-goods-detail.html');
    }
    function revokeFn() {
      requestApi
        .getData('StockBackPurchaseAction/cancelBack.htm', [vm.data.id])
        .then(function() {
          requestApi.alert('撤销成功！');
          requestApi.gotoListPage();
        })
    }
  }

})();