;(function() {
  'use strict';
    angular.element(document).ready(function() {
        angular.bootstrap(document, ["cgmall"]);
    });
  angular
    .module('cgmall')
    .controller('GoodsListCtrl', GoodsListCtrlFn);

  GoodsListCtrlFn.$inject = ['$scope', 'requestApi'];
  function GoodsListCtrlFn($scope, requestApi) {
    var vm = $scope;
    setTimeout(function() {
      requestApi.showTitle('商品清单');
      if (window.bridge) {
           window.bridge.callHandler('showNavBarRightItem', [
               {'text':'添加', 'link':'', 'linkType':3, 'flag': 'add'}]
           );
           window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
               itemAddFn();
           }) ;
      }

      requestApi.handleBackRefresh();

    }, 500);

    vm.goodsList = localStorage.tsItemList ? JSON.parse(localStorage.tsItemList) : requestApi.dataErrorhandle();
    vm.goToItemDetail = goToItemDetailFn;
    vm.itemAdd = itemAddFn;

    function goToItemDetailFn() {
      localStorage.tsItemDetail = JSON.stringify(this.item);
      requestApi.redirect('tb-submit-goods-detail.html');
    }

    function itemAddFn() {
      requestApi.redirect('tb-submit-goods-add.html');
    }
  }

})();