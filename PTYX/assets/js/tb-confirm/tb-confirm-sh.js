;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('DetailSh', detailSh)


    function detailSh(requestApi) {
        var vm = this;
        var deliverId = '312'; //临时ID
        requestApi.getData('DeliveryReceiveAction/getDeliveryDetail.htm', [deliverId])
            .then(function(data) {
                vm.data = data;
                console.log(data);
                setTimeout(function () {
                    requestApi.showTitle('收货详情');
                },500);
            }, function(error) {
                console.error(error);
            })
    }
})();