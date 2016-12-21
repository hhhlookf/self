;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('PurchaseConfirm', PurchaseConfirmFn);

    PurchaseConfirmFn.$inject = ['$scope', 'requestApi'];

    function PurchaseConfirmFn($scope, requestApi) {
        setTimeout(function () {
            window.bridge.callHandler("setNavigationBarTitle", {'title':'采购目录确认'});
            if(window.bridge) {
                window.bridge.callHandler('showNavBarRightItem', [
                    {'text':'提交', 'link':'', 'linkType':3, 'flag': 'next'}]
                );
                window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
                    vm.submitHandle();
                }) ;
            }
        }, 500);
        var vm = $scope;

        // 采购目录列表数据
        vm.catalogData = localStorage.getItem('ApplicationChooseData') ? JSON.parse(localStorage.getItem('ApplicationChooseData')) : requestApi.dataErrorhandle();

        vm.submitData = JSON.parse(localStorage.getItem('purSubmitData')) || [];

        angular.forEach(vm.catalogData, function (value,index) {
            if (this[index] == undefined) {
                this[index] = {};
                this[index].planCatalogId = vm.catalogData[index].id;
            }
        }, vm.submitData);

        vm.setNeedTime = function (index) {
            if (vm.submitData[index] == undefined) {
                vm.submitData[index] = {};
            }
            window.bridge.callHandler('invokeHFCalendar', {}, function (response) {
                $scope.$apply(function () {
                    vm.submitData[index].reqDate  = response;
                })
            });
        };

        // 点击推荐商品
        vm.goChoose = function (id, index) {
            // 传一个ID下个页面调接口
            localStorage.setItem('purCatalogId', id);
            // 传一个index：点击的是第几个目录
            localStorage.setItem('purCataIndex', index);
            localStorage.setItem('purSubmitData', JSON.stringify(vm.submitData));
            requestApi.redirect('purchase-choose-goods.html');
        };

        vm.submitHandle = function () {
            // 提交数据
            console.log(vm.submitData);
            for(var i=0; i<vm.submitData.length; i++) {
                if (!vm.submitData[i].goodsId || !vm.submitData[i].reqDate || !vm.submitData[i].num) {
                    window.bridge.callHandler('invokeHFAlert', {
                        'title': '友情提示',
                        'content': '数量、日期、推荐商品为必填项！',
                        'buttons': [
                            { name: '确认' }
                        ]
                    });
                    vm.toSubmit = false;
                    break;
                } else {
                    vm.toSubmit = true;
                }
            }
            submitServer();
            function submitServer() {
                if (vm.toSubmit) {
                    requestApi.getData('MyPlanReqAction/commit.htm', [vm.submitData])
                        .then(function(data) {
                            window.bridge.callHandler('invokeHFAlert', {
                                'title': '友情提示',
                                'content': '已提交',
                                'buttons': [
                                    { name: '确认' }
                                ]
                            });
                            window.bridge.callHandler('backToRootCommonListVClr',{'needRefreshRootCommonListVClr':true});
                        });
                }
            }

        }
    }
})();


