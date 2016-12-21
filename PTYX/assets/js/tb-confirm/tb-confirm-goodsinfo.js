;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('GoodsInfo', goodsInfo)

    function goodsInfo($scope, requestApi) {
        var data = angular.fromJson(localStorage.getItem('tbconfirmData'));
        var index = angular.fromJson(localStorage.getItem('tbconfirmGoodsInfoIndex'));
        $scope.currentGoodData = data.goodsList[index];
        // window.setTimeout(function() {
        //     requestApi.showTitle('商品详情');
        // }, 500);
    }
})();