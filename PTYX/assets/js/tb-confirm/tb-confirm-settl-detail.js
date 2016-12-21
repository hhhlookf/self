;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('SettlDetailCtrl', settlDetailCtrl)

    function settlDetailCtrl($scope, requestApi) {


        // var id = localStorage.getItem('tbconfirmId');

        // requestApi.getData('OrderReceiveAction/getOrderDetail.htm', [id])
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
                var index = localStorage.getItem('tbconfirmRecordIndex');
                $scope.settlDetail = data.balanceList[index];
                // requestApi.showTitle('结算记录-详情');
                $scope.settlDelete = function() {
                    var id = data.balanceList[index].id;
                    requestApi.confirm('确定要删除结算记录', function() {
                        requestApi.getData('OrderReceiveAction/removeSettlement.htm', [id])
                            .then(function(data) {
                                requestApi.backAndRefresh();
                            }, function(error) {
                                console.error(error);
                            })

                    });

                }
            // }, function(error) {
            //     console.log(error);
            // });


    }
})();
