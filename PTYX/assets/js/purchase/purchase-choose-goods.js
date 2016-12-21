;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('PurchaseChooseGoods', PurchaseChooseGoodsFn);

    PurchaseChooseGoodsFn.$inject = ['$scope', 'requestApi', 'dataOpera'];

    function PurchaseChooseGoodsFn($scope, requestApi, dataOpera) {
        setTimeout(function () {
            window.bridge.callHandler("setNavigationBarTitle", {'title':'选择商品'});
            if(window.bridge) {
                window.bridge.callHandler('showNavBarRightItem', [
                    {'text':'确定', 'link':'', 'linkType':3, 'flag': 'next'}]
                );
                window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
                    vm.sureBack();
                }) ;
            }
        }, 500);
        var vm = $scope;

        // 选择商品推荐商品的ID
        vm.catalogId = localStorage.getItem('purCatalogId') ? JSON.parse(localStorage.getItem('purCatalogId')) : requestApi.dataErrorhandle();
        // 操作第几个目录（是第几个跳转过来的）
        vm.purCataIndex = localStorage.getItem('purCataIndex') ? JSON.parse(localStorage.getItem('purCataIndex')) : requestApi.dataErrorhandle();
        // 获取上个页面需要提交的数据（一个数组由对象构成）
        vm.purSubmitData = JSON.parse(localStorage.getItem('purSubmitData'));
        console.log(vm.purSubmitData );
        requestApi.getData('MyPlanReqAction/listGoodsFromCatalog.htm', [vm.catalogId])
            .then(function(data) {
                vm.catalogGoodsData = data;
                // 单选（选择推荐商品）
                vm.choose = function (index) {
                    // 设置上个页面需要提交的数组中，第几个目录的数据
                    if (vm.purSubmitData[vm.purCataIndex] == undefined) {
                        vm.purSubmitData[vm.purCataIndex] = {};
                    }
                    vm.purSubmitData[vm.purCataIndex].goodsId = vm.catalogGoodsData[index].id;
                    vm.purSubmitData[vm.purCataIndex].goodsName = vm.catalogGoodsData[index].name;
                    console.log(vm.purSubmitData);
                };

                vm.sureBack = function () {
                    // 将上个页面需要提交的数组重新存入本地存储
                    localStorage.setItem('purSubmitData', JSON.stringify(vm.purSubmitData));
                    requestApi.backAndRefresh();
                }
            });
    }
})();


