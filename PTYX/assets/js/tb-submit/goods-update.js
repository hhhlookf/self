;(function() {
  'use strict';
  angular
    .module('cgmall')
    .controller('GoodsUpdateCtrl', GoodsUpdateCtrlFn);

  GoodsUpdateCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera'];
  function GoodsUpdateCtrlFn($scope, requestApi, dataOpera) {
    var vm = $scope;

    setTimeout(function() {
      requestApi.showTitle('商品修改');
    }, 500);

    vm.orderId = dataOpera.get('orderId');
    vm.data = dataOpera.get('tsItemUpdateData');
    

    vm.numReduce = numReduceFn;
    vm.numAdd = numAddFn;
    vm.back = backFn;
    vm.confirm = confirmFn;


    vm.redIsDis = vm.data.finalQty == 0;
    vm.addIsDis = false;
    $scope.$watch('data.finalQty', function(newVal, oldVal) {
      vm.redIsDis = newVal == 0;
    });

    function numReduceFn() {
      if(!vm.redIsDis) {
        vm.data.finalQty--;
      }
    }
    function numAddFn(e) {
      if(!vm.addIsDis) {
        vm.data.finalQty++;
      }
    }
    function backFn() {
      requestApi.back();
    }
    function confirmFn() {
      // 从商品详情进来
      if(vm.data.detailId) {
        requestApi
          .getData('OrderCommitAction/updateGoods.htm', [
            vm.data.detailId,
            vm.data.finalQty,
            vm.data.bargainPrice || '',
            vm.data.bargainNotes || ''
          ])
          .then(function(data) {
            dataOpera.set('tsItemDetail', vm.data);
            dataOpera.update('tsItemList', vm.data);
            requestApi.alert('修改成功');
            requestApi.backAndRefresh(1);
          })
      }
      // 从添加商品进来
      else {
        requestApi
          .getData('OrderCommitAction/addGoods.htm', [
            vm.orderId,
            vm.data.goodsId,
            vm.data.finalQty,
            vm.data.bargainPrice || '',
            vm.data.bargainNotes || ''
          ])
          .then(function(data) {
            localStorage.tsItemList = JSON.stringify(data);
            requestApi.alert('修改成功');
            requestApi.backAndRefresh(1);
          })
      }
    }
  }
})();