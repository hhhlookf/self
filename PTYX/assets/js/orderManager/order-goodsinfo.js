;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('tbDeliverGdetail', tbdelivergdetail)

        function tbdelivergdetail($scope, requestApi) {
            var data = angular.fromJson(localStorage.getItem('orderData'));
            var index = angular.fromJson(localStorage.getItem('orderListIndex'));
            $scope.currentGoodData = data.goodsList[index];
            // window.setTimeout(function() {
            //     requestApi.showTitle('商品详情');
            // }, 500);
        }
})();