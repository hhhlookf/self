;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('applicationModify', applicationModifyFn);

    applicationModifyFn.$inject = ['$scope', 'requestApi'];

    function applicationModifyFn($scope, requestApi) {
        var vm = $scope;
        setTimeout(function () {
            requestApi.showTitle('结算记录');
            requestApi.handleBackRefresh()
        }, 500);

        // 跳转到（添加）修改冲红页面
        vm.goGai = function () {
            requestApi.redirect('application-js-gai.html');
        };


        // 取当前数据
        vm.currentInfo = localStorage.getItem('ApCurSet') && JSON.parse(localStorage.getItem('ApCurSet')) || requestApi.dataErrorhandle();
    }
})();