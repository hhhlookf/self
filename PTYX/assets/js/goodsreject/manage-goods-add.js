;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('ManageGoodsAddCtrl', ManageGoodsAddCtrlFn);

  ManageGoodsAddCtrlFn.$inject = ['$scope', 'requestApi'];
  function ManageGoodsAddCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
      window.bridge.callHandler('showNavBarRightItem', [
        {'text':'确定', 'link':'', 'linkType':3, 'flag': 'ok'}]
      );
      window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
        goodAddFn();
      });
    }, 500);

    var rgAddItemList = localStorage.rgAddItemList ? JSON.parse(localStorage.rgAddItemList) : null;
    vm.applyInfo = localStorage.rgApplyInfo ? JSON.parse(localStorage.rgApplyInfo) : requestApi.dataErrorhandle();
    vm.selectItems = {};

    vm.select = selectFn;
    vm.goodAdd = goodAddFn;

    requestApi
      .getData('StockBackPurchaseAction/listGoodsForAdd.htm', [vm.applyInfo.supplier])
      .then(function(data) {
        if(rgAddItemList) {
          for(var i = data.length-1; i >= 0; i--) {
            for(var j = 0; j < rgAddItemList.length; j++) {
              if(data[i].id === rgAddItemList[j].id) {
                data.splice(i, 1);
                break;
              }
            }
          }
        }
        vm.goodsList = data;
      });

    function selectFn() {
      var itemVal = vm.selectItems[this.item.id];
      // 已选 -> 未选
      if(itemVal) {
        delete vm.selectItems[this.item.id]
      } else {
        vm.selectItems[this.item.id] = this.item;
      }
    }
    function goodAddFn() {

      //对象值拼成数组
      rgAddItemList = rgAddItemList || [];
      for(var key in vm.selectItems) {
        rgAddItemList.push(vm.selectItems[key]);
      }

      if(rgAddItemList.length == 0) {
        requestApi.alert('请选择商品！');
      }else {
        localStorage.rgAddItemList = JSON.stringify(rgAddItemList);
        requestApi.backAndRefresh();
      }
    }

  }

})();