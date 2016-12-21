;(function() {
  'use strict';

  angular.element(document).ready(function() {
      angular.bootstrap(document, ["cgmall"]);
  });
  angular
    .module('cgmall')
    .controller('GoodsAddCtrl', GoodsAddCtrlFn);

  GoodsAddCtrlFn.$inject = ['$scope', 'requestApi'];
  function GoodsAddCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      requestApi.showTitle('添加商品');
      if(window.bridge) {
        window.bridge.callHandler('showNavBarRightItem', [
          {'text':'下一步', 'link':'', 'linkType':3, 'flag': 'next'}]
        );
        window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
          nextFn();
        }) ;
      }
    }, 500);

    var orderId = localStorage.orderId ? JSON.parse(localStorage.orderId) : requestApi.dataErrorhandle();
    var itemList = localStorage.tsItemList ? JSON.parse(localStorage.tsItemList) : null;
    var itemUpdateData = null;

    vm.select = selectFn;
    vm.next = nextFn;

    requestApi
      .getData('OrderCommitAction/listGoods.htm', [orderId])
      .then(function(data) {
        if(itemList) {
          for(var i = data.length-1; i >= 0; i--) {
            for(var j = 0; j < itemList.length; j++) {
              if(data[i].id === itemList[j].goodsId) {
                data.splice(i, 1);
                break;
              }
            }
          }
        }
        vm.goodsList = data;
      });

    function selectFn() {
      itemUpdateData = this.item;
    }

    function nextFn() {
      if(!itemUpdateData) return requestApi.alert('请选择一件商品');
      itemUpdateData.orderQty = 0;
      localStorage.tsItemUpdateData = JSON.stringify(itemUpdateData);
      requestApi.redirect('tb-submit-goods-update.html');
    }

  }


})();