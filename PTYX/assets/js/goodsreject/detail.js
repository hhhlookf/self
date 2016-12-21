;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('DetailCtrl', DetailCtrlFn);

  DetailCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera', 'getUrl'];
  function DetailCtrlFn($scope, requestApi, dataOpera, getUrl) {
    var vm = $scope;

    // setTimeout(function() {
    //   var title = document.getElementsByTagName('title')[0].innerHTML;
    //   requestApi.showTitle(title);
    // }, 500);

    var orderId = 100;
    // var orderId = getUrl.getId();
    if(orderId) {
      dataOpera.set('orderId', orderId);
    }else {
      orderId = dataOpera.get('orderId');
    }

    vm.goToGoodsList = goToGoodsListFn;
    vm.goToItemDetail = goToItemDetailFn;
    vm.goToRedDetail = goToRedDetailFn;
    vm.fallback = fallbackFn;
    vm.revoke = revokeFn;
    vm.agree = agreeFn;

    // requestApi
    //   .getData('StockBackPurchaseAction/getDetail.htm', [orderId])
    //   .then(function(data) {
        vm.data = {"updatedTime":1470465925000,"supplierCompanyId":3241,"notes":"","updatedBy":"市场李楠(市场李楠)","mobile":"18118225252","goodsList":[{"stockBackOrderId":100,"updatedTime":1470464091000,"supplierCompanyId":3241,"updatedBy":"市场李楠(市场李楠)","num":2,"updatedById":3249,"pack":"6瓶/件","companyId":3208,"unit":"瓶 件","createdBy":"市场李楠(市场李楠)","price":"80","brandId":9,"stockId":91,"createdTime":1470464091000,"id":89,"dimension":"400ML","goodsName":"普天牌消毒剂2","createdById":3249,"manufactorId":10}],"redList":[{"orderId":665,"settlementDay":5,"settlementPeriod":5,"type":0,"payType":"3","redAmount":"-360","createdTime":1470456173000,"id":543,"createdById":3249,"updatedTime":1472745603000,"settlementNo":"S20160806-000063","orderNo":"N20160806-000049","updatedBy":"匿名用户","shouldPay":262,"payableAmountValue":"￥262.0","updatedById":0,"version":10,"payToId":3241,"payFromId":3208,"computeMode":1,"refundSource":0,"projectId":30,"status":"2","projectChecked":false,"dueDay":-94,"payableAmount":"262","contractSettlementTime":1473004800000,"canRed":true,"settlementType":1,"supplierChecked":false,"planRedAmount":"0","createdBy":"市场李楠(市场李楠)","settlementTime":"2016-09-05","refundFlag":false,"payForStatus":1,"accountAmount":622}],"updatedById":3249,"linkMan":"null(市场李楠)","buyer":"市场李楠","companyId":3208,"money":160,"createdBy":"市场李楠(市场李楠)","supplier":"linangys1","createdTime":1470464091000,"id":100,"cancelAble":false,"createdById":3249,"status":8,"stockBackOrderNo":"R20160806-000038"};
      // });
    function goToGoodsListFn() {
      localStorage.rgItemList = JSON.stringify(vm.data.goodsList);
      requestApi.redirect('goodsreject-goods-list.html');
    }
    function goToItemDetailFn() {
      localStorage.rgItem = JSON.stringify(this.item);
      requestApi.redirect('goodsreject-goods-detail.html');
    }
    function goToRedDetailFn() {
      localStorage.rgRed = JSON.stringify(this.red);
      requestApi.redirect('goodsreject-cred-detail.html');
    }

    function fallbackFn() {
      // requestApi
      //   .getData('StockBackPurchaseAction/returnBackMoney.htm', [vm.data.id])
      //   .then(function() {
          requestApi.alert('回退成功！');
          // requestApi.gotoListPage();
        // })
    }
    function revokeFn() {
      // requestApi
      //   .getData('StockBackPurchaseAction/cancelBack.htm', [vm.data.id])
      //   .then(function() {
          requestApi.alert('撤销成功！');
          // requestApi.gotoListPage();
        // })
    }
    function agreeFn() {
      // requestApi
      //   .getData('StockBackPurchaseAction/acceptBackMoney.htm', [vm.data.id])
      //   .then(function() {
          requestApi.alert('已同意退货！');
        //   requestApi.gotoListPage();
        // })
    }
  }

})();