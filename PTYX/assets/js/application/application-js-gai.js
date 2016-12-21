;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('applicationGai', applicationGaiFn);

    applicationGaiFn.$inject = ['$scope', 'requestApi'];

    function applicationGaiFn($scope, requestApi) {
        var vm = $scope;
        vm.currentInfo = localStorage.getItem('ApCurSet') && JSON.parse(localStorage.getItem('ApCurSet')) || requestApi.dataErrorhandle();
        vm.settId = vm.currentInfo.id;
        vm.currentInfo.planRedAmount = '';

        vm.addRed = function () {
            if (vm.currentInfo.planRedAmount) {
                requestApi.getData('DeliveryApplyAction/addRed.htm', [vm.settId, vm.currentInfo.planRedAmount])
                    .then(function () {
                        setTimeout(function () {
                            requestApi.showTitle('结算记录');
                        }, 500);
                        vm.currentInfo.planRedAmount = -vm.currentInfo.planRedAmount;
                        localStorage.setItem('ApCurSet', JSON.stringify(vm.currentInfo));
                        requestApi.backAndRefresh();

                    });
            } else {
                window.bridge.callHandler('invokeHFAlert', {
                    'title': '友情提示',
                    'content': '请填写拟冲红金额',
                    'buttons': [
                        { name: '确认' }
                    ]
                });
            }

        };
    }
})();