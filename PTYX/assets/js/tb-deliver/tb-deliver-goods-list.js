;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('tbDeliverGoodsList', tbDeliverGoodsList);

    tbDeliverGoodsList.$inject = ['$scope', 'requestApi'];

    function tbDeliverGoodsList($scope, requestApi) {
        var vm = $scope;

        // setTimeout(function () {
        //     requestApi.showTitle('全部商品');
        // },500);

        vm.goodsListData = JSON.parse(localStorage.getItem('tdgoodsListData'));
        // console.log(vm.goodsListData);

        // 将当前点击的货物对象存入本地存储，跳转至货物详情页
        vm.getGoodsDetail = function() {
            localStorage.setItem('tdcurrentGoods', JSON.stringify(vm.goodsListData[this.$index]));
            requestApi.redirect('tb-deliver-gdetail.html');
        };
    }

})();