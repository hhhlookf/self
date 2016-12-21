;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleDetail2Ctrl', HandleDetail2CtrlFn);

  HandleDetail2CtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera', 'getUrl'];
  function HandleDetail2CtrlFn($scope, requestApi, dataOpera, getUrl) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
      window.bridge.registerHandler(
        'nativeCallHandler_notificationHfiveWillBackPreviousWebView' ,
        function(responseData , callback){
          callback && callback();
          localStorage.removeItem('rghRedList');
        }
      ) ;
    }, 500);

    var orderId = getUrl.getId();
    if(orderId) {
      dataOpera.set('orderId', orderId);
    }else {
      orderId = dataOpera.get('orderId');
    }


    vm.goToGoodsList = goToGoodsListFn;
    vm.goToItemDetail = goToItemDetailFn;
    vm.goToRedDetail = goToRedDetailFn;
    vm.goToSettlChoose = goToSettlChooseFn;
    vm.submit = submitFn;

    requestApi
      .getData('StockBackSaleAction/getDetail.htm', [orderId])
      .then(function(data) {
        vm.data = data;
        var redList = dataOpera.get('rghRedList');
        if(redList) {
          vm.redList = redList
        }else {
          vm.redList = data.redList;
          dataOpera.set('rghRedList', vm.redList)
        }
      });

    function goToGoodsListFn() {
      localStorage.rghItemList = JSON.stringify(vm.data.goodsList);
      requestApi.redirect('goodsreject-handle-goods-list.html');
    }
    function goToItemDetailFn() {
      localStorage.rghItem = JSON.stringify(this.item);
      requestApi.redirect('goodsreject-handle-goods-detail.html');
    }
    function goToRedDetailFn() {
      localStorage.rghRed = JSON.stringify(this.red);
      requestApi.redirect('goodsreject-handle-cred-detail.html');
    }
    function goToSettlChooseFn() {
      requestApi.redirect('goodsreject-handle-settl-choose.html');
    }
    function submitFn() {
      var redItems = [];
      angular.forEach(vm.redList, function(value) {
        redItems.push({
          id: value.id,
          amount: value.planRedAmount
        })
      });
      requestApi
        .getData('StockBackSaleAction/commit.htm', [{
          id: vm.data.id,
          redItems: redItems
        }])
        .then(function() {
          requestApi.alert('退货提交成功！');
          localStorage.removeItem('rghRedList');
          requestApi.gotoListPage();
        })
    }
  }

})();