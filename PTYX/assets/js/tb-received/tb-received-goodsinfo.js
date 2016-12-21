;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('GoodsDetailCtrl', goodsInfo)

    function goodsInfo($scope, requestApi) {
        // var data = angular.fromJson(localStorage.getItem('tbreceivedData'));
        var index = angular.fromJson(localStorage.getItem('tbreceivedGoodsInfoIndex'));
        // $scope.itemDetail = data.goodsList[index];

        var id = localStorage.getItem('tbreceivedId');
        // requestApi.getData('OrderReceiveAction/getOrderDetail.htm', [id])
        //     .then(function (data) {
                var data = {
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
                $scope.itemDetail = data.goodsList[index];
            // }, function (error) {
            //     requestApi.alert(error);
            // });

        // alert(angular.toJson($scope.itemDetail));
        $scope.itemDelete = itemDeleteFn;
        $scope.goToItemUpdate = goToItemUpdateFn;
        // setTimeout(function() {
        //     requestApi.showTitle('商品详情');
        //     requestApi.handleBackRefresh();
        // }, 500);

        function itemDeleteFn() {
            // requestApi.confirm('确定要删除该商品？', function() {
            //     requestApi
            //         .getData('OrderReceiveAction/removeGoods.htm', [$scope.itemDetail.id])
            //         .then(function (data) {
            //             localStorage.tsItemList = JSON.stringify(data);
            //             requestApi.redirect('tb-received-detail.html');
            //         })
            // })
        }
        function goToItemUpdateFn() {
            localStorage.tsItemUpdateData = JSON.stringify($scope.itemDetail);
            requestApi.redirect('tb-received-goods-update.html');
        }

    }
})();
