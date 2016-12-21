;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('OrderDetailCtrl', OrderDetailCtrlFn);

  OrderDetailCtrlFn.$inject = ['$scope', '$location', 'requestApi', 'dataOpera', 'getUrl'];
  function OrderDetailCtrlFn($scope, $location, requestApi, dataOpera, getUrl) {
    var vm = $scope;
    vm.orderId = getUrl.getId();
    var orderId = vm.orderId = getUrl.getId();
    if(orderId) {
      dataOpera.set('orderId', orderId);
    }else {
      orderId = dataOpera.get('orderId');
    }

    vm.isAllowAdd = true;
    vm.settleTypes = [
      {name: '线上结算', value: 2},
      {name: '线下结算', value: 1}
    ];

    vm.goToItemList = goToItemListFn;       //跳转到商品列表页
    vm.goToItemDetail = goToItemDetailFn;   //跳转到商品详情页
    vm.goToSettlAdd = goToSettlAddFn;       //跳转到添加结算记录页
    vm.goToSettlDetail = goToSettlDetailFn; //跳转到结算记录详情页
    vm.goToAddressManage = goToAddressManageFn; //跳转到地址管理页

    vm.cancelOrder = cancelOrderFn;
    vm.commitOrder = commitOrderFn;
    requestApi
      .getData('OrderCommitAction/getOrderDetail.htm', [orderId])
      .then(function(data) {
        vm.data = data;
        vm.receiverAddress = data.receiverAddress || undefined; //收货地址
        vm.addressInfoData = {
            people: data.receiverName,
            phone: data.receiverTel,
            address: data.receiverAddress,
            invoice: data.invoiceInfo
        };
        vm.data.settlementType = vm.data.settlementType || 2; //设置默认结算方式
        vm.isAllowAdd = judgeIsAllowAdd() > 0;                //判断是否可以添加结算记录
        // 本存储orderId和授信金额
        localStorage.tsCreditInfo = vm.data.creditInfo;
        setTimeout(function() {
          requestApi.showTitle('订单详情');
        }, 500);
      });

    // 判断是否可以添加结算记录
    function judgeIsAllowAdd() {
      var payableAmount = angular.copy(vm.data.totalAmount);
      angular.forEach(vm.data.balanceList, function(value) {
        payableAmount -= value.accountAmount;
      });
      return payableAmount.toFixed(2);
    }

    function goToItemListFn() {
      localStorage.tsItemList = JSON.stringify(vm.data.goodsList);
      requestApi.redirect('tb-submit-goods-list.html');
    }
    function goToItemDetailFn() {
      localStorage.tsItemDetail = JSON.stringify(this.item);
      requestApi.redirect('tb-submit-goods-detail.html');
    }
    function goToSettlAddFn() {
      localStorage.tsPayableAmount = judgeIsAllowAdd();
      localStorage.totalAmount_guoc = vm.data.totalAmount;
      localStorage.payMoney_guoc = vm.data.payMoney;
      requestApi.redirect('tb-submit-settl-add.html');
    }
    function goToSettlDetailFn() {
      this.info.totalAmount = vm.data.totalAmount;
      localStorage.tsSettlDetail = JSON.stringify(this.info);
      requestApi.redirect('tb-submit-settl-detail.html');
    }
    function cancelOrderFn() {
      requestApi.confirm('确定要取消该订单？', function() {
        requestApi
          .getData('OrderCommitAction/cancelOrder.htm', [orderId])
          .then(function() {
            requestApi.alert('取消订单成功！');
            requestApi.gotoListPage();
          })
      })
    }
    function commitOrderFn() {
      requestApi
        .getData('OrderCommitAction/commitOrder.htm', [
          vm.data.id,
          vm.data.settlementType,
          vm.data.notes || ''
        ])
        .then(function() {
          requestApi.alert('订单提交成功！');
          requestApi.gotoListPage();
        })
    }
    function goToAddressManageFn() {
      if (window.bridge) {
          window.bridge.callHandler("openAddressManageUI",{'ID':vm.orderId},function(data) {
              if( null === data ){
                  return ;
              }
              // alert(JSON.parse(data).addrId);
              requestApi.getData('OrderCommitAction/selectAddr.htm',[
                  vm.orderId,
                  JSON.parse(data).addrId
              ]).then(function (data) {
                  window.bridge.callHandler("reloadCurrentWebView") ;
              });
          }) ;
      } else {
          alert('程序出现异常，请重新启动软件');
      }
    }
  }

})();