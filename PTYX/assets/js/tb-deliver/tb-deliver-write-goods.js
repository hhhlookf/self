;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('tbDeliverWriteGoods', writeGoodsFn);

    writeGoodsFn.$inject = ['$scope', 'requestApi'];
    function writeGoodsFn($scope, requestApi) {
        setTimeout(function () {
            requestApi.showTitle('填写商品清单');
            window.bridge.callHandler('showNavBarRightItem', [
                {'text':'提交', 'link':'', 'linkType':3, 'flag': 'submit'}]
            );
            window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
                angular.forEach(vm.thisOrderGoods, function(value, index) {
                    if (this[index] === undefined) {
                        this[index] = {};
                    }
                    this[index].deliveryQty = value.sendCount;                               // 发货数量
                    this[index].goodsId = value.goodsId;                                   // 商品ID
                    this[index].productionNo = this[index].productionNo || '';                 // 生产批号
                    this[index].productionTime = this[index].productionTime || '';         // 生产时间
                    this[index].validMonth = this[index].validMonth || '';                 // 有效时间
                }, vm.submitDate.deliverGoodsInfo);
                console.log(vm.submitDate);

                requestApi.getData('DeliverySendAction/commitSend.htm', [
                    vm.submitDate.orderId,
                    vm.submitDate.deliverName,
                    vm.submitDate.deliverTel,
                    vm.submitDate.deliverTime,
                    vm.submitDate.deliverGoodsInfo
                ]).then(function () {
                    window.bridge.callHandler('invokeHFAlert', {
                        'title': '友情提示',
                        'content': '提交成功！',
                        'buttons': [
                            { name: '确认' }
                        ]
                    });
                    window.bridge.callHandler('backToRootCommonListVClr',{'needRefreshRootCommonListVClr':true})
                });
            }) ;
        },300);

        var vm = $scope;

        // 取填写的物流信息
        vm.wlInfo = localStorage.getItem('tdwlInfo') &&　JSON.parse(localStorage.getItem('tdwlInfo')) || requestApi.dataErrorhandle();
        // 取该订单的订单ID
        vm.wlOrderId = localStorage.getItem('tdwlOrderId') &&　JSON.parse(localStorage.getItem('tdwlOrderId')) || requestApi.dataErrorhandle();
        // 取该订单货物数据
        vm.thisOrderGoods = localStorage.getItem('tdorderGoods') && JSON.parse(localStorage.getItem('tdorderGoods')) || requestApi.dataErrorhandle();
        // 默认发货数量（不能大于它）
        vm.goodsDelNum = [];
        angular.forEach(vm.thisOrderGoods, function(value, index) {
            this.push(vm.thisOrderGoods[index].sendCount);
        }, vm.goodsDelNum);
        //提交的数据
        vm.submitDate = {
            orderId: vm.wlOrderId,
            deliverName: vm.wlInfo.delName,
            deliverTel: vm.wlInfo.delTel,
            deliverTime: vm.wlInfo.date,
            deliverGoodsInfo: []     //对象构成, {五个值}
        };

        vm.subInfo = vm.submitDate.deliverGoodsInfo;

        // 点击日历
         vm.getDate = function () {
            if (vm.subInfo[this.$index] === undefined) {
                vm.subInfo[this.$index] = {};
            }
            var subInfo = vm.subInfo[this.$index];
            window.bridge.callHandler('invokeHFCalendar', {}, function (response) {
                $scope.$apply(function () {
                    subInfo.productionTime  = response;
                })
            });
         };

        // 发货数量失去焦点(发货数量大于最大数就强制等于最大数)
        vm.blur = function () {
            if(vm.thisOrderGoods[this.$index].sendCount > vm.goodsDelNum[this.$index]) {
                vm.thisOrderGoods[this.$index].sendCount = vm.goodsDelNum[this.$index];
            }
        };

        // 点击提交
        // vm.submit = function () {
        //     angular.forEach(vm.thisOrderGoods, function(value, index) {
        //         if (this[index] === undefined) {
        //             this[index] = {};
        //         }
        //         this[index].deliveryQty = value.sendCount;                               // 发货数量
        //         this[index].goodsId = value.goodsId;                                   // 商品ID
        //         this[index].productionNo = this[index].productionNo || '';                 // 生产批号
        //         this[index].productionTime = this[index].productionTime || '';         // 生产时间
        //         this[index].validMonth = this[index].validMonth || '';                 // 有效时间
        //     }, vm.submitDate.deliverGoodsInfo);
        //     console.log(vm.submitDate);
        //
        //     requestApi.getData('DeliverySendAction/commitSend.htm', [
        //         vm.submitDate.orderId,
        //         vm.submitDate.deliverName,
        //         vm.submitDate.deliverTel,
        //         vm.submitDate.deliverTime,
        //         vm.submitDate.deliverGoodsInfo
        //     ]).then(function () {
        //         window.bridge.callHandler('invokeHFAlert', {
        //             'title': '友情提示',
        //             'content': '提交成功！',
        //             'cancleBtn': '确定'
        //         })
        //     });
        // }
    }
})();