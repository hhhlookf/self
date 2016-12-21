;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('AppReject', appreject);

    appreject.$inject = ['$scope', 'requestApi'];

    function appreject ($scope, requestApi) {
        // setTimeout(function () {
        //     requestApi.showTitle('拒绝处理');
        // }, 500);

        var vm = $scope;
        vm.applyId = localStorage.getItem('ahthisApplyId') && JSON.parse(localStorage.getItem('ahthisApplyId')) || requestApi.dataErrorhandle();
        vm.reject = function () {
            if (vm.reason) {
                // requestApi.getData('DeliveryApplyAction/refuseApply.htm', [vm.applyId, vm.reason])
                //     .then(function () {
                      requestApi.alert('已拒绝', function () {
                          requestApi.redirect('my2.html');
                      });
                        // requestApi.gotoListPage();
                    // })
            } else {
                requestApi.alert('请填写理由！');
                // window.bridge.callHandler('invokeHFAlert', {
                //     'title': '友情提示',
                //     'content': '请填写理由！',
                //     'buttons': [
                //         { name: '确认' }
                //     ]
                // })
            }
        }
    }

})();