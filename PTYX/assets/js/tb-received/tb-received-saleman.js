 ;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('SaleMan', saleman)

    function saleman(requestApi) {
        var vm = this;

        vm.select = function(index, salemanId) {
            var id = localStorage.getItem('tbreceivedId');
            requestApi.getData('OrderReceiveAction/setSaleMan.htm', [id, salemanId])
                .then(function(data) {
                    requestApi.backAndRefresh();
                }, function (error) {
                    requestApi.alert(error);
                })

           return vm.liIndex = index;
        }

        // requestApi.getData('OrderReceiveAction/listSaleMan.htm', [])
        //     .then(function(data) {
        //         vm.items = data;
            //     console.log(data);
            //     requestApi.showTitle('选择销售代表');
            // }, function(error) {
            //     console.error(error);
            // })
    }
    
})();
