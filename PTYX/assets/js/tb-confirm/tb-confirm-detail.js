;(function() {
    'use strict';
    
    angular.module('cgmall')
        .controller('Detail', detail)


    function detail(requestApi, getUrl) {
        var vm = this;
        //var id = '1567';
        // var id = getUrl.getId();
        // requestApi.getData('DeliveryReceiveAction/getOrderDetail.htm', [id])
        //     .then(function(data) {
                var data = {
                    orderNo: 'N23948723794',
                    receiverName: '某某',
                    receiverTel: 13100000000,
                    receiverAddress: '软件园二期',
                    totalAmount: 100,
                    goodsList: [
                        {id: 1,goodsName: '感冒灵颗粒',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},
                        {id: 2,goodsName: 'AAA',dimension: '包/盒',orderQty: 30,price:100,brand: '某某制药',manu:'某某药厂',bargainPrice:101,changeToPrice:102,bargainNotes:'fgndfgh'},
                        {id: 3,goodsName: 'BBB',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},
                        {id: 4,goodsName: 'CCC',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},
                        {id: 5,goodsName: 'DDD',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'}
                        ,
                    ],
                    balanceList: [
                        {settlementNo: '2345624563457',accountAmount: 5000,payType: '1',payableAmount:5000,redAmount:200,payState:'待支付'},
                        {settlementNo: '23456235846746',accountAmount: 6000,payType: '3',payableAmount:6000,redAmount:300,payState:'待支付'},
                        {settlementNo: '23454678797',accountAmount: 7000,payType: '1',payableAmount:7000,redAmount:500,payState:'待支付'}

                    ],
                    saleManName: 'ak',
                    saleManTel: 15600000000,
                    orderNotes: 'agq3r4'
                };
                vm.data = data;
                // localStorage.setItem('tbconfirmId', id);
                localStorage.setItem('tbconfirmData', angular.toJson(data));
                // requestApi.showTitle('订单详情');
            // }, function(error) {
            //     console.error(error);
            // })

        vm.linkToGoodsList = function () {
            requestApi.redirect('tb-confirm-goodslist.html');
        }

        vm.linkToGoodsInfo = function (index) {
            localStorage.setItem('tbconfirmGoodsInfoIndex', index);
            requestApi.redirect('tb-confirm-goodsinfo.html');
        }
        
        //结算记录
        vm.linkToRecord = function (index) {
            localStorage.setItem('tbconfirmRecordIndex', index);
            requestApi.redirect('tb-confirm-settl-detail.html');
        }

        //取消订单
        vm.cancelOrder = function () {
            requestApi.getData('OrderConfirmAction/cancelOrder.htm', [id])
                .then(function (data) {
                    requestApi.alert('取消成功');
                    requestApi.backAndRefresh();
                }, function (error) {
                    requestApi.alert(error);
                })
        }

        //提交订单
        vm.submitOrder = function () {
            requestApi.getData('OrderConfirmAction/acceptOrder.htm', [id])
                .then(function (data) {
                    requestApi.alert("提交成功");
                    requestApi.backAndRefresh();
                }, function () {
                    requestApi.alert(error);
                })
        }

        //撤回订单

        vm.getBackOrder = function () {
            requestApi.getData('OrderManageAction/recallOrder.htm', [id])
                .then(function (data) {
                    requestApi.alert("撤回成功");
                    requestApi.backAndRefresh();
                }, function () {
                    requestApi.alert(error);
                })
        }
    }
})();
