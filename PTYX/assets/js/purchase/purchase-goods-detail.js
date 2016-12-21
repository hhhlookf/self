;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('PurchaseGoodsDetail', PurchaseGoodsDetailFn);

    PurchaseGoodsDetailFn.$inject = ['$scope', 'requestApi', 'getUrl'];

    function PurchaseGoodsDetailFn($scope, requestApi) {
        setTimeout(function () {
            window.bridge.callHandler("setNavigationBarTitle", {'title':'商品明细'});
        }, 500);
        var vm = $scope;

        // 商品ID
        vm.itemId = localStorage.getItem('PurchItemId') && JSON.parse(localStorage.getItem('PurchItemId')) || requestApi.dataErrorhandle();  // 临时ID

        requestApi.getData('MyPlanReqAction/getOrderDetail.htm', [vm.itemId])
            .then(function(data) {
                vm.itemInfo = data;
            });
    }
})();


