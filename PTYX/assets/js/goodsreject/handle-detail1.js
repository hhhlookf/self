;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleDetail1Ctrl', HandleDetail1CtrlFn);

  HandleDetail1CtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera', 'getUrl'];
  function HandleDetail1CtrlFn($scope, requestApi, dataOpera, getUrl) {
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
    vm.refuse = refuseFn;
    vm.agree = agreeFn;

    requestApi
      .getData('StockBackSaleAction/getDetail.htm', [orderId])
      .then(function(data) {
        vm.data = data;
      });

    function goToGoodsListFn() {
      localStorage.rghItemList = JSON.stringify(vm.data.goodsList);
      requestApi.redirect('goodsreject-handle-goods-list.html');
    }
    function goToItemDetailFn() {
      localStorage.rghItem = JSON.stringify(this.item);
      requestApi.redirect('goodsreject-handle-goods-detail.html');
    }
    function refuseFn() {
      requestApi
        .getData('StockBackSaleAction/refuseBackOrder.htm', [vm.data.id])
        .then(function() {
          requestApi.alert('拒绝退货操作成功！');
          requestApi.gotoListPage();
        })
    }
    function agreeFn() {
      requestApi
        .getData('StockBackSaleAction/acceptBackOrder.htm', [vm.data.id])
        .then(function() {
          requestApi.alert('同意退货操作成功！');
          requestApi.gotoListPage();
        })
    }
  }

})();