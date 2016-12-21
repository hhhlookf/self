;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('PurchaseDetail', PurchaseDetailFn);

    PurchaseDetailFn.$inject = ['$scope', 'requestApi', 'getUrl'];

    function PurchaseDetailFn($scope, requestApi, getUrl) {
        setTimeout(function () {
            window.bridge.callHandler("setNavigationBarTitle", {'title':'请购详情'});
        }, 500);
        var vm = $scope;

        // vm.purchaseId = 7;  // 临时ID
        vm.purchaseId = getUrl.getId();

        requestApi.getData('MyPlanReqAction/getOrderInfo.htm', [vm.purchaseId])
            .then(function(data) {
                vm.purchaseInfo = data;
                vm.goToGoodsDetail = function (itemId) {
                    // 进入商品明细，商品ID
                    localStorage.setItem('PurchItemId', JSON.stringify(itemId));
                    requestApi.redirect('purchase-goods-detail.html');

                }
            })
    }
})();


