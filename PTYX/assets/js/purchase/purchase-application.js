;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('PurchaseApplication', PurchaseApplicationFn);

    PurchaseApplicationFn.$inject = ['$scope', 'requestApi'];

    function PurchaseApplicationFn($scope, requestApi, getUrl) {
        setTimeout(function () {
            window.bridge.callHandler("setNavigationBarTitle", {'title':'申请采购'});
            if(window.bridge) {
                window.bridge.callHandler('showNavBarRightItem', [
                    {'text':'下一步', 'link':'', 'linkType':3, 'flag': 'next'}]
                );
                window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
                    vm.nextStep();
                }) ;
            }
        }, 500);
        var vm = $scope;

        requestApi.getData('MyPlanReqAction/listCatalog.htm')
            .then(function(data) {
                vm.applicationData = data;
                vm.choosedId = [];              // 所选中项目的Id
                vm.choosedData = [];            // 所选中项目的所有信息

                // 进行多选点击
                vm.choose = function (id) {
                    if (vm.choosedId.indexOf(id) == -1) {
                        vm.choosedId.push(id);
                        vm.choosedData.push(vm.applicationData[id]);
                    } else {
                        vm.choosedId.splice(vm.choosedId.indexOf(id), 1);
                        vm.choosedData.splice(vm.choosedId.indexOf(id), 1);
                    }
                };
                // 点击下一步
                vm.nextStep = function () {
                    if (vm.choosedData.length == 0) {
                        window.bridge.callHandler('invokeHFAlert', {
                            'title': '友情提示',
                            'content': '未选中任何数据！',
                            'buttons': [
                                { name: '确认' }
                            ]
                        });
                    } else {
                        localStorage.setItem('ApplicationChooseData', JSON.stringify(vm.choosedData));
                        localStorage.removeItem('purSubmitData');
                        requestApi.redirect('purchase-catalog-confirm.html');
                    }
                };
            });
    }
})();


