;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('applicationRedShow', applicationRedShowFn);

    applicationRedShowFn.$inject = ['$scope', 'requestApi'];

    function applicationRedShowFn($scope, requestApi) {
        setTimeout(function () {
            requestApi.showTitle('冲红记录');
        }, 500);

        var vm = $scope;
        vm.currentRed = localStorage.getItem('ahCurRedRecord') && JSON.parse(localStorage.getItem('ahCurRedRecord')) || requestApi.dataErrorhandle();
        console.log(vm.currentRed);
    }
})();