;(function() {
    'use strict';
    angular.module('cgmall')
        .controller('OrderList', orderList)

    function orderList(requestApi, getUrl) {
        var vm = this;
        // var id = getUrl.getId();
        // var id = '366';

        requestApi.getData('OrderManageAction/getOrderDetail.htm', [localStorage.getItem('id')])
            .then(function(data) {
                console.log(data);
                vm.data= data;
                requestApi.showTitle('货物清单');
            }, function(error) {
                console.error(error);
            })

        vm.linkToList = function() {
            requestApi.redirect('order-goodsinfo.html');
        }
    }
})();