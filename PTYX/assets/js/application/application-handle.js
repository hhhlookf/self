;(function () {
  'use strict';

  angular.module('cgmall')
    .controller('appHandle', appHandle);

  appHandle.$inject = ['$scope', 'requestApi', 'getUrl'];

  function appHandle($scope, requestApi, getUrl) {
    var vm = $scope;
    vm.orderId = 643;
    //vm.orderId = getUrl.getParameter('applyId');

    // 点击日历
    vm.getDate = function () {
      //调原生日历
      // window.bridge.callHandler('invokeHFCalendar', {}, function (response) {
      //   $scope.$apply(function () {
      //     vm.deliveryDate  = response;
      //   })
      // });
      // vm.deliveryDate  = new Date().getTime();
    };

    // requestApi.getData('DeliveryApplyAction/getDetailForPurchase.htm', [vm.orderId])
    //   .then(function (data) {
        // setTimeout(function () {
        //     requestApi.showTitle('等待交收');
        // },500);
        vm.thisOrderInfo = {"fileUrls":["assets/images/banner/main.top/1.png"],"invoicesList":["assets/images/banner/main.top/2.png"],"settlementType":2,"receiverTel":"11111111111","invoiceInfo":"","orderNo":"N20160815-000060","totalPlanRedAmount":"0","settList":[],"receiverName":"zheng","totalRedAmount":"0","goodsList":[{"changeToPrice":5.5,"totalDeliveryQty":20,"finalQty":20,"orderId":1297,"purchaseCompanyId":2960,"goodsId":167879,"finalPrice":5.5,"detailId":2450,"bargain":false,"price":"5.5","createdTime":1471258994000,"orderQty":20,"manufactureId":93,"id":2450,"dimension":"2%500ml/瓶","goodsName":"测试商品","brand":"冠邦","createdById":3029,"updatedTime":1471259047000,"updatedBy":"Gzhenghf(XMGKZYC)","goodsSnapshotId":788635,"salePrice":5.5,"totalReturnQty":0,"manu":"德州名德消毒科技有限公司","updatedById":3062,"pack":"件","saleCompanyId":2993,"unit":"瓶","createdBy":"Czhenghf(XMGK)","brandId":5,"changeToNum":20}],"deliveryDay":"2016-12-07","leftMoney":"0","sendMoney":"110","deliveryList":[{"totalDeliveryQty":20,"orderId":1297,"purchaseCompanyId":2960,"goodsId":167879,"deliveryAmount":110,"deliveryId":742,"createdTime":1471259047000,"orderQty":20,"manufactureId":93,"id":1378,"dimension":"2%500ml/瓶","goodsName":"测试商品","brand":"冠邦","createdById":3062,"updatedTime":1471259047000,"deliveryQty":20,"updatedBy":"Gzhenghf(XMGKZYC)","goodsSnapshotId":788635,"returnQty":0,"salePrice":5.5,"deliveryNo":"T20160815-000055","updatedById":3062,"sendCount":0,"pack":"件","saleCompanyId":2993,"orderDetailId":2450,"manufacture":"德州名德消毒科技有限公司","unit":"瓶","createdBy":"Gzhenghf(XMGKZYC)","brandId":5}],"totalAmount":"110","accountId":47,"payMoney":"110","orderTime":1471259029000,"accountList":[{"accountDetail":"zheng 111-23232323232323232323-企业账户-建设银行","accountName":"zheng 111","bankAccount":"23232323232323232323","bankConfigId":5,"bankName":"建设银行","companyId":2993,"createdBy":"XMGKZYC(XMGKZYC)","createdById":3062,"createdTime":1469900950000,"id":3,"status":0,"type":1,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1471403606000},{"accountDetail":"111111-12121212121-企业账户-工商银行","accountName":"111111","bankAccount":"12121212121","bankConfigId":2,"bankName":"工商银行","companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1470368214000,"defaultAccount":false,"id":4,"status":1,"type":1,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1470368214000},{"accountDetail":"asdasdadddsadss-1231231221323444343434-个人账户-浦发银行","accountName":"asdasdadddsadss","bankAccount":"1231231221323444343434","bankConfigId":9,"bankName":"浦发银行","companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1471403576000,"defaultAccount":false,"id":47,"status":1,"type":2,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1471403576000},{"accountDetail":"qeqe-weqee-个人账户-平安银行","accountName":"qeqe","bankAccount":"weqee","bankConfigId":8,"bankName":"平安银行","companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1471403591000,"id":48,"status":0,"type":2,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1471403596000}],"fullAddress":"山西太原市精图","deliveryDetails":[{"orderId":1297,"purchaseCompanyId":2960,"goodsId":167879,"deliveryId":742,"createdTime":1471259047000,"manufactureId":93,"id":1378,"dimension":"2%500ml/瓶","goodsName":"测试商品","brand":"冠邦","createdById":3062,"deliveryMoney":"110","updatedTime":1471259047000,"deliveryQty":20,"updatedBy":"Gzhenghf(XMGKZYC)","goodsSnapshotId":788635,"returnQty":0,"salePrice":5.5,"deliveryNo":"T20160815-000055","updatedById":3062,"pack":"件","saleCompanyId":2993,"orderDetailId":2450,"manufacture":"德州名德消毒科技有限公司","unit":"瓶","createdBy":"Gzhenghf(XMGKZYC)","brandId":5}],"createdTime":1471258994000,"balanceList":[{"orderId":1297,"payTime":"","settlementDay":18,"settlementPeriod":"2天","type":0,"payType":3,"redAmount":0,"createdTime":1471259024000,"id":1274,"createdById":3029,"updatedTime":1472457666000,"settlementNo":"S20160815-000071","orderNo":"N20160815-000060","updatedBy":"Czhenghf(XMGK)","shouldPay":110,"payableAmountValue":"￥110.0","updatedById":3029,"version":3,"payToId":2993,"payFromId":2960,"computeMode":1,"refundSource":0,"projectId":19,"status":8,"projectChecked":false,"payableAmount":110,"contractSettlementTime":"","canRed":true,"settlementType":"按月付款","supplierChecked":false,"planRedAmount":0,"createdBy":"Czhenghf(XMGK)","refundFlag":false,"payForStatus":1,"accountAmount":110}]};                        // 所有信息
        vm.deliveryDate = new Date().getTime();         // 要提交的交货日期
        vm.settList = vm.thisOrderInfo.settList;        // 结算记录
        vm.accountList = vm.thisOrderInfo.accountList;  // 账户信息
        vm.photoUrl = '';

        // 结算明细
        vm.toDetail = function (index) {
          localStorage.setItem('appSettlData', JSON.stringify(vm.thisOrderInfo.balanceList[index]));
          requestApi.redirect('application-seller-jsdetail.html');
        };

        // 发货明细
        vm.getGoodsDetail = function() {
          localStorage.setItem('tdcurrentGoods', JSON.stringify(vm.thisOrderInfo.deliveryList[this.$index]));
          requestApi.redirect('application-delivery-goodsDetail.html');
        };

        // 拒绝交收
        vm.refuseApply = function () {
          localStorage.setItem('ahthisApplyId',vm.orderId);
          requestApi.redirect('application-reject.html');
        };

        // 同意交收
        vm.acceptApply = function () {
          // requestApi.getData('DeliveryApplyAction/acceptApply.htm', [vm.orderId,vm.deliveryDate])
          //   .then(function () {
              requestApi.alert('确认交收成功', function () {
                  requestApi.redirect('my2.html')
              });
            //   requestApi.gotoListPage();
            // })
        }

      // });
  }
})();