;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('ToBeDeliverOdetail', ToBeDeliver);

    ToBeDeliver.$inject = ['$scope', 'requestApi', 'getUrl'];

    function ToBeDeliver($scope, requestApi, getUrl) {
        // setTimeout(function () {
        //     requestApi.showTitle('订单详情');
        // }, 500);
        var vm = $scope;

          //vm.detailId = 1056;  // 临时订单ID
        // vm.detailId = getUrl.getId();

        // requestApi.getData('DeliverySendAction/getOrderDetail.htm', [vm.detailId])
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
                vm.tbDeliverData = data;   //订单详情

                vm.balanceList = data.balanceList;  //订单结算记录

                vm.tbDeliverGoods = data.goodsList; //订单货物清单

                // 将当前点击的货物对象存入本地存储，跳转至货物详情页
                vm.getGoodsDetail = function() {
                    localStorage.setItem('tdcurrentGoods', JSON.stringify(vm.tbDeliverGoods[this.$index]));
                    requestApi.redirect('tb-deliver-gdetail.html');
                };

                // 点击全部商品
                vm.goToGoodList = function() {
                    localStorage.setItem('tdgoodsListData', JSON.stringify(vm.tbDeliverGoods));
                    requestApi.redirect('tb-deliver-goods-list.html');
                };

                // 点击结算记录
                vm.goToSettl = function() {
                    localStorage.setItem('tdSettlData', JSON.stringify(vm.balanceList[this.$index]));
                    requestApi.redirect('tb-deliver-settl-detail.html');
                }
            // })
    }
})();


