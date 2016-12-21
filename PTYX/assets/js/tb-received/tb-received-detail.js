;(function() {
    angular.module('cgmall')
        .controller('TbReceivedDetail', tbReceivedDetail)

    function tbReceivedDetail(requestApi, getUrl) {
        var vm = this;

        //结算方式
        vm.payMethod = [
            '线上结算',
            '线下结算'
        ];
        
        vm.payPopout = function() {
            vm.ifShowPayMethod = true;
        };
        vm.paySelect = function(event, val) {
            event.stopPropagation();
            vm.init = val;
            vm.ifShowPayMethod = false;
        }

        //id为固定值
        //var id = '1801'; //待替换
        var id = getUrl.getId();
        //alert(id);
        // requestApi.getData('OrderReceiveAction/getOrderDetail.htm', [id])
            // .then(function(data) {
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
                // localStorage.setItem('tbreceivedId', id);
                localStorage.setItem('tbreceivedData', angular.toJson(vm.data));
                localStorage.setItem('tbreceivedAddRecord', angular.toJson(vm.data.totalAmount));
                localStorage.setItem('tbreceivedCreditInfo', angular.toJson(vm.data.creditInfo));
                localStorage.setItem('tbItemList', angular.toJson(vm.data.goodsList));
                // requestApi.showTitle('订单详情');
            // }, function(error) {
            //     console.log(error);
            // });

        vm.linkToGoodsList = function () {
            requestApi.redirect('tb-received-goodslist.html');
        }
        vm.goToRecord = function(index) {
            localStorage.setItem('tbreceivedRecordIndex', index);
            requestApi.redirect('tb-received-settl-detail.html');
        }

        vm.linkToGoodsInfo = function(index) {
            localStorage.setItem('tbreceivedGoodsInfoIndex', index);
            requestApi.redirect('tb-received-goodsinfo.html');
        }

        //添加结算记录
        vm.addRecord = function() {

            requestApi.redirect('tb-received-addrecord.html');
        }

        //拒绝接单
        vm.reject = function() {
            requestApi.redirect('tb-received-reject.html');
        }

        //指定销售代表
        vm.setSaleMan = function() {
            requestApi.redirect('tb-received-saleman.html');
        }

        //接受订单
        vm.receivedOrder = function() {
        //     requestApi.getData('OrderReceiveAction/acceptOrder.htm', [id])
        //         .then(function(data) {
                    requestApi.alert('接受订单成功', function() {
                        requestApi.redirect('my.html');
                    });

        //         }, function(error) {
        //             requestApi.alert(error);
        //         })
        }

        //提交
        vm.modifyOrder = function () {

            // if (vm.init == '线上结算') {
            //     settlementType = 1;
            // } else {
            //     settlementType = 2;
            // }
            // requestApi.getData('OrderReceiveAction/commitModify.htm', [
            //     id
            // ]).then(function (data) {
                requestApi.alert('修改成功', function() {
                    requestApi.redirect('my.html');
                });
            // }, function (error) {
            //     requestApi.alert(error);
            // })
        }
    }
})();
