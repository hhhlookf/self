;(function() {
    'use strict';
    
    angular.module('cgmall')
        .controller('GoodsList', goodList)

    function goodList(requestApi) {
        //var id = '386'; //临时ID
        var vm = this;

        var id = localStorage.getItem('tbconfirmId');
        requestApi.getData('OrderConfirmAction/getOrderDetail.htm', [id])
            .then(function(data) {
                vm.info = data.goodsList;
                requestApi.showTitle('货物清单');
                console.log(data);
            }, function(error) {
                console.error(error);
            })

        vm.linkToGoodsInfo = function(index) {
            localStorage.setItem('tbconfirmGoodsInfoIndex', index);
            requestApi.redirect('tb-confirm-goodsinfo.html');
        }
    }
})();
