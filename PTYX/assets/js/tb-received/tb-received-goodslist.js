;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('GoodsList', goodList)

    function goodList(requestApi) {
        var vm = this;

        var id = localStorage.getItem('tbreceivedId');
        // requestApi.getData('OrderReceiveAction/getOrderDetail.htm', [id])
        //     .then(function(data) {
                vm.data = {
            orderNo: 'N23948723794',
            receiverName: '某某',
            receiverTel: 13100000000,
            receiverAddress: '软件园二期',
            totalAmount: 100,
            goodsList: [
                {goodsName: '感冒灵颗粒',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},
                {goodsName: 'AAA',dimension: '包/盒',orderQty: 30,price:100,brand: '某某制药',manu:'某某药厂',bargainPrice:101,changeToPrice:102,bargainNotes:'fgndfgh'},
                {goodsName: 'BBB',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},
                {goodsName: 'CCC',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},
                {goodsName: 'DDD',dimension: '包/盒',orderQty: 50,price:60,brand: '哈药制药',manu:'厦门感康',bargainPrice:65,changeToPrice:70,bargainNotes:'asfdasdf'},

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
                // requestApi.showTitle('货物清单');
            //     window.bridge.callHandler('showNavBarRightItem', [
            //         {
            //             'text': '添加',
            //             'link': 'tb-received-goods-add.html',
            //             'linkType': 1,
            //             'flag': 'next'
            //         }
            //     ]);
            // }, function(error) {
            //     console.log(error);
            // })

        vm.linkToGoodsInfo = function(index) {
            localStorage.setItem('tbreceivedGoodsInfoIndex', index);
            requestApi.redirect('tb-received-goodsinfo.html');
        }
    }
})();