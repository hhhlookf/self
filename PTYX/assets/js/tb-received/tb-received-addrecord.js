;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('Addrecord', addrecord)

    function addrecord(requestApi, $scope) {
        var vm = this;

        //requestApi.showTitle('添加结算记录');

        //payment type
        // vm.paymentType = [
        //     {
        //         'name': '担保支付'
        //     },
        //     {
        //         'name': '授信支付'
        //     },
        //     {
        //         'name': '实时到账'
        //     },
        //     {
        //         'name': '分期付款'
        //     }
        // ]

        vm.paymentType = [
            {
                'name': '担保支付'
            },
            {
                'name': '账期支付'
            }
        ];

        //支付方式处理函数

        //init
        vm.liIndex = 0;
        vm.showpaytext = 'danbao';
        //END
        localStorage.setItem('tbpayType', 1); //设置默认
        var payType = '1'; //默认担保支付
        vm.selectType = function(index) {
            switch ( index ) {
                //担保
                case 0:
                    vm.showpaytext = 'danbao';
                    vm.dingdan = false;
                    vm.payrange = '本次支付额度';
                    vm.selectDate = false;
                    payType = '1';
                    localStorage.setItem('tbpayType', 1);
                    break;
                //账单支付
                case 1:
                    vm.dingdan = true;
                    vm.payrange = "支付额度";
                    vm.selectDate = true;
                    vm.showpaytext = 'dingdan';
                    payType = '4';
                    localStorage.setItem('tbpayType', 4);
                    break;
                // //授信
                // case 1:
                //     vm.showpaytext = 'shouxin';
                //     //显示授信金额
                //     vm.showShouxin = true;
                //     vm.payrange = '本次支付额度';
                //     vm.selectDate = false;
                //     payType = '3';
                //     break;
                // //实时到账
                // case 2:
                //     vm.showpaytext = '';
                //     vm.showShouxin = false;
                //     vm.selectDate = false;
                //     payType = '2';
                //     break;
                // //分期付款
                // case 3:
                //     vm.payrange = '本期支付';
                //     vm.selectDate = true;
                //     payType = '4';
                //     break;
            }
            return vm.liIndex = index;
        }

        //显示应付金额数据
         vm.totalAmount = localStorage.getItem('tbreceivedAddRecord');
        //显示授信额度
        // vm.creditInfo = parseFloat(angular.fromJson(localStorage.getItem('tbreceivedCreditInfo')));

        // var receivedData = localStorage.getItem('tbreceivedData');


        //判断无授信额度
        if (isNaN(vm.creditInfo)) {
            vm.creditInfo = 0;
        }
        //var id = '386'; //临时ID
        var id = localStorage.getItem('tbreceivedId');
        //获取应付金额
        // requestApi.getData('OrderCommitAction/getPayMoney.htm', [id])
        //     .then(function (data) {
                vm.shouldPay = 100;
            //     requestApi.showTitle('添加结算记录');
            // }, function (error) {
            //     requestApi.alert(error);
            // })


        //获取日历
        vm.getCalendar = function() {
            // requestApi.calendar({}, function(selectedDate) {
            //     if( selectedDate - new Date().getTime() > 8.64e7 ) {
            //         $scope.$apply(function() {
            //             $scope.payDate = selectedDate;
            //         })
            //     } else {
            //         requestApi.alert('结算日期必须大于2天');
            //     }
            // })

        }
        vm.addrecord = function(money, date) {
            // console.log('id', id);
            // alert('date', date);
            // console.log('money', money);
            if ( money == undefined ) {

                requestApi.alert('请填写金额');
            } else {
                if ( vm.creditInfo == 0 && vm.showpaytext == 'shouxin' ) {
                    requestApi.alert('无授信金额');
                } else {
                    alert('成功添加结算记录');
                    requestApi.redirect('tb-received-detail.html');
                    // requestApi.getData('OrderReceiveAction/addSettlement.htm', [
                    //     id,
                    //     localStorage.getItem('tbpayType'),
                    //     money,
                    //     date
                    // ]).then(function(data) {
                    //     requestApi.alert('成功添加结算记录', function() {
                        //     requestApi.backAndRefresh();
                        // });

                    // }, function(error) {
                    //     console.error(error);
                    // })
                }

            }
        }
    }
})()