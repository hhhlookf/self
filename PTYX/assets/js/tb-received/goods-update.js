/**
 * Created by Administrator on 2016/10/8.
 */
;(function() {
    'use strict';
    angular
        .module('cgmall')
        .controller('GoodsUpdateCtrl', GoodsUpdateCtrlFn);

    GoodsUpdateCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera'];
    function GoodsUpdateCtrlFn($scope, requestApi, dataOpera) {
        var vm = $scope;

        // setTimeout(function() {
        //     requestApi.showTitle('商品修改');
        // }, 500);

        vm.orderId = localStorage.getItem('tbreceivedId');
        vm.data = dataOpera.get('tsItemUpdateData');
        vm.numReduce = numReduceFn;
        vm.numAdd = numAddFn;
        vm.back = backFn;
        vm.confirm = confirmFn;

        vm.redIsDis = vm.data.orderQty == 0;
        vm.addIsDis = false;
        $scope.$watch('data.orderQty', function(newVal, oldVal) {
            vm.redIsDis = newVal == 0;
        });

        $scope.majorSupply = function(event, index) {
            event.stopPropagation();
            return $scope.ifSelect = index;
        };

        function numReduceFn() {
            if(!vm.redIsDis) {
                vm.data.orderQty--;
            }
        }
        function numAddFn(e) {
            if(!vm.addIsDis) {
                vm.data.orderQty++;
            }
        }
        
        $scope.minNumReduce = function () {
            if(!vm.redIsDis) {
                vm.data.minNum--;
            }
        }
        
        $scope.minNumAdd = function () {
            if(!vm.addIsDis) {
                vm.data.minNum++;
            }
        }
        
        $scope.ifNumber = function (value) {
            if (!/^[1-9]*$/.test(value)) {
                vm.data.minNum = 1;
                requestApi.alert('请输入数值');
            }
        }
        function backFn() {
            requestApi.back();
        }
        function confirmFn() {
            // 从商品详情进来
            requestApi.redirect('tb-received-detail.html');
            // if ($scope.ifSelect == undefined && vm.data.bargain)  {
            //     requestApi.alert('请选择是否生成专供');
            // } else if(vm.data.detailId) {
            //     requestApi
            //         .getData('OrderReceiveAction/updateGoods.htm', [
            //             vm.data.detailId,
            //             vm.data.orderQty,
            //             vm.data.changeToPrice || '', //price,
            //             $scope.ifSelect,
            //             vm.data.minNum
            //         ])
            //         .then(function(data) {
            //             // dataOpera.set('tsItemDetail', vm.data);
            //             // dataOpera.update('tsItemList', vm.data);
            //             requestApi.alert('修改成功', function() {
            //                 requestApi.redirect('tb-received-goodsinfo.html');
            //             })
            //
            //         })
            // }
            // // 从添加商品进来
            // else {
            //     requestApi
            //         .getData('OrderReceiveAction/addGoods.htm', [
            //             vm.orderId,
            //             vm.data.goodsId,
            //             vm.data.orderQty,
            //             vm.data.changeToPrice || 0,
            //             vm.data.bargainNotes || '',
            //             $scope.ifSelect,
            //             vm.data.minNum
            //         ])
            //         .then(function(data) {
            //             localStorage.tsItemList = JSON.stringify(data);
            //             requestApi.alert('修改成功', function() {
            //                 requestApi.backAndRefresh(1);
            //             })
            //         })
            // }
        }
    }
})();