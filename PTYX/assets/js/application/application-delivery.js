;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('applicationDeliver', applicationDeliverFn);

    applicationDeliverFn.$inject = ['$scope', 'requestApi', 'getUrl'];

    function applicationDeliverFn($scope, requestApi, getUrl) {
        var vm = $scope;
        vm.orderId = 1825;
        //vm.orderId = getUrl.getId();
        // 点击日历
        vm.getDate = function () {
            //调原生日历
            // window.bridge.callHandler('invokeHFCalendar', {}, function (response) {
            //     $scope.$apply(function () {
            //         vm.jhTime  = response;
            //     })
            // });
            vm.jhTime  = new Date().getTime();
        };

        // requestApi.getData('DeliveryApplyAction/getDetailForSale.htm', [vm.orderId])
        //     .then(function (data) {
                // setTimeout(function () {
                //     requestApi.showTitle('交收申请');
                // },500);
                vm.thisOrderInfo = {"settlementType":2,"receiverTel":"13800000000","invoiceInfo":"","orderNo":"N20160911-000008","totalPlanRedAmount":"0","settList":[{"accountAmount":81,"canRed":true,"computeMode":1,"contractSettlementTime":1479139200000,"createdBy":"ptcggzs(ptcggzs)","createdById":3420,"createdTime":1473584177000,"deliveryTime":1473523200000,"dueDay":-23,"id":1761,"interestAmount":0,"orderId":1825,"orderNo":"N20160911-000008","overdueAmount":0,"payForStatus":1,"payFromId":3338,"payToId":3328,"payType":3,"payableAmount":81,"payableAmountValue":"￥81.0","planRedAmount":0,"projectChecked":false,"projectId":30,"redAmount":0,"refundFlag":false,"refundSource":0,"remark":"订单号:N20160911-000008,结算单:S20160911-000009","settlementDay":15,"settlementNo":"S20160911-000009","settlementPeriod":60,"settlementType":1,"shouldPay":81,"sign":"MzMzODMzMjg4MS4wODEuMDAuMDAuMA==_30e52ea4f661ca0bda6d95ca25c320dd","status":2,"supplierChecked":false,"supportPayType":1,"type":1,"updatedBy":"匿名用户","updatedById":0,"updatedTime":1478880000000,"version":3}],"receiverName":"ptcg","totalRedAmount":"0","goodsList":[{"changeToPrice":0.06,"totalDeliveryQty":200,"finalQty":200,"companyGoodsNo":"","orderId":1825,"purchaseCompanyId":3338,"goodsId":169746,"finalPrice":0.06,"detailId":3387,"bargain":true,"price":"0.06","createdTime":1473584081000,"orderQty":200,"manufactureId":204,"id":3387,"dimension":"10*100mm","goodsName":"一次性使用试管","brand":"康健","createdById":3420,"updatedTime":1473584476000,"updatedBy":"ptdsgzs(ptdsgzs)","goodsSnapshotId":789559,"salePrice":0.06,"totalReturnQty":0,"manu":"江苏康健医疗用品有限公司","updatedById":3409,"pack":"500支/包","saleCompanyId":3328,"unit":"支","createdBy":"ptcggzs(ptcggzs)","brandId":271,"changeToNum":200},{"changeToPrice":0.69,"totalDeliveryQty":100,"finalQty":100,"companyGoodsNo":"","orderId":1825,"purchaseCompanyId":3338,"goodsId":169747,"finalPrice":0.69,"detailId":3388,"bargain":true,"price":"0.69","createdTime":1473584081000,"orderQty":100,"manufactureId":204,"id":3388,"dimension":"2.7ml(血凝1:9)","goodsName":"真空采血管","brand":"康健","createdById":3420,"updatedTime":1473584476000,"updatedBy":"ptdsgzs(ptdsgzs)","goodsSnapshotId":789561,"salePrice":0.69,"totalReturnQty":0,"manu":"江苏康健医疗用品有限公司","updatedById":3409,"pack":"300支/包","saleCompanyId":3328,"unit":"支","createdBy":"ptcggzs(ptcggzs)","brandId":271,"changeToNum":100}],"leftMoney":"0","sendMoney":"81","deliveryList":[{"totalDeliveryQty":200,"companyGoodsNo":"","orderId":1825,"purchaseCompanyId":3338,"goodsId":169746,"deliveryAmount":12,"deliveryId":928,"createdTime":1473584476000,"productionNo":"20160910","orderQty":200,"manufactureId":204,"id":1724,"dimension":"10*100mm","goodsName":"一次性使用试管","brand":"康健","createdById":3409,"updatedTime":1473584476000,"deliveryQty":200,"updatedBy":"ptdsgzs(ptdsgzs)","goodsSnapshotId":789559,"returnQty":0,"salePrice":0.06,"deliveryNo":"T20160911-000003","updatedById":3409,"sendCount":0,"pack":"500支/包","saleCompanyId":3328,"orderDetailId":3387,"manufacture":"江苏康健医疗用品有限公司","unit":"支","createdBy":"ptdsgzs(ptdsgzs)","brandId":271,"validTime":"2018-09-10"},{"totalDeliveryQty":100,"companyGoodsNo":"","orderId":1825,"purchaseCompanyId":3338,"goodsId":169747,"deliveryAmount":69,"deliveryId":928,"createdTime":1473584476000,"productionNo":"2160910","orderQty":100,"manufactureId":204,"id":1725,"dimension":"2.7ml(血凝1:9)","goodsName":"真空采血管","brand":"康健","createdById":3409,"updatedTime":1473584476000,"deliveryQty":100,"updatedBy":"ptdsgzs(ptdsgzs)","goodsSnapshotId":789561,"returnQty":0,"salePrice":0.69,"deliveryNo":"T20160911-000003","updatedById":3409,"sendCount":0,"pack":"300支/包","saleCompanyId":3328,"orderDetailId":3388,"manufacture":"江苏康健医疗用品有限公司","unit":"支","createdBy":"ptdsgzs(ptdsgzs)","brandId":271,"validTime":"2018-09-10"}],"totalAmount":"81","payMoney":"81","orderTime":1473584196000,"accountList":[{"accountDetail":"zheng 111-23232323232323232323-企业账户-建设银行","accountName":"zheng 111","bankAccount":"23232323232323232323","bankConfigId":5,"bankName":"建设银行","companyId":2993,"createdBy":"XMGKZYC(XMGKZYC)","createdById":3062,"createdTime":1469900950000,"id":3,"status":0,"type":1,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1471403606000},{"accountDetail":"111111-12121212121-企业账户-工商银行","accountName":"111111","bankAccount":"12121212121","bankConfigId":2,"bankName":"工商银行","companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1470368214000,"defaultAccount":false,"id":4,"status":1,"type":1,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1470368214000},{"accountDetail":"asdasdadddsadss-1231231221323444343434-个人账户-浦发银行","accountName":"asdasdadddsadss","bankAccount":"1231231221323444343434","bankConfigId":9,"bankName":"浦发银行","companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1471403576000,"defaultAccount":false,"id":47,"status":1,"type":2,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1471403576000},{"accountDetail":"qeqe-weqee-个人账户-平安银行","accountName":"qeqe","bankAccount":"weqee","bankConfigId":8,"bankName":"平安银行","companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1471403591000,"id":48,"status":0,"type":2,"updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1471403596000}],"fullAddress":"福建莆田市清塘大道","createdTime":1473584081000,"balanceList":[{"orderId":1825,"payTime":"","settlementDay":15,"sign":"MzMzODMzMjg4MS4wODEuMDAuMDAuMA==_30e52ea4f661ca0bda6d95ca25c320dd","settlementPeriod":"60天","type":1,"payType":3,"redAmount":0,"createdTime":1473584177000,"id":1761,"createdById":3420,"updatedTime":1478880000000,"overdueAmount":0,"settlementNo":"S20160911-000009","orderNo":"N20160911-000008","updatedBy":"匿名用户","shouldPay":81,"payableAmountValue":"￥81.0","updatedById":0,"version":3,"payToId":3328,"payFromId":3338,"computeMode":1,"refundSource":0,"projectId":30,"status":2,"deliveryTime":1473523200000,"projectChecked":false,"remark":"订单号:N20160911-000008,结算单:S20160911-000009","dueDay":-23,"payableAmount":81,"contractSettlementTime":"2016-11-15","canRed":true,"supportPayType":1,"settlementType":"按月付款","interestAmount":0,"supplierChecked":false,"planRedAmount":0,"createdBy":"ptcggzs(ptcggzs)","refundFlag":false,"payForStatus":1,"accountAmount":81}]};                        // 所有信息
                vm.settList = vm.thisOrderInfo.settList;        // 结算记录
                vm.accountList = vm.thisOrderInfo.accountList;  // 账户信息
                vm.photoUrl = '';

                // 结算明细
                vm.toDetail = function (index) {
                  // localStorage.setItem('appHandlefromWhichPage', fromWhichPage);
                  localStorage.setItem('appSettlData', JSON.stringify(vm.thisOrderInfo.balanceList[index]));
                  requestApi.redirect('application-seller-jsdetail.html');
                };

                // 发货明细
                vm.getGoodsDetail = function() {
                  localStorage.setItem('tdcurrentGoods', JSON.stringify(vm.thisOrderInfo.deliveryList[this.$index]));
                  requestApi.redirect('application-delivery-goodsDetail.html');
                };

                // 上传凭证
                vm.upload = function () {
                  // window.bridge.callHandler('openNativePhoto', {}, function (data) {
                  //   $scope.$apply(function () {
                  //     // vm.photoUrl = data.imageUrl;
                  //   })
                  // });
                };

                vm.cancelApp =  function () {
                    requestApi.redirect('my.html')
                };
            // });
    }
})();