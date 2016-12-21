;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('GoodsDetailCtrl', GoodsDetailCtrlFn);

  GoodsDetailCtrlFn.$inject = ['$scope', 'requestApi'];
  function GoodsDetailCtrlFn($scope, requestApi) {
    var vm = $scope;


    vm.itemDetail = localStorage.tsItemDetail ? JSON.parse(localStorage.tsItemDetail) : requestApi.dataErrorhandle();

    vm.itemDelete = itemDeleteFn;
    vm.goToItemUpdate = goToItemUpdateFn;
    setTimeout(function() {
      requestApi.showTitle('商品详情');
      requestApi.handleBackRefresh();
    }, 500);
    function itemDeleteFn() {
      requestApi.confirm('确定要删除该商品？', function() {
        requestApi
          .getData('OrderCommitAction/removeGoods.htm', [vm.itemDetail.id])
          .then(function (data) {
            localStorage.tsItemList = JSON.stringify(data);
            requestApi.backAndRefresh();
          })
      })

    }
    function goToItemUpdateFn() {
      localStorage.tsItemUpdateData = JSON.stringify(vm.itemDetail);
      requestApi.redirect('tb-submit-goods-update.html');
    }

  }

})();