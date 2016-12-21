;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('SettlDetailCtrl', SettlDetailCtrlFn);

  SettlDetailCtrlFn.$inject = ['$scope', 'requestApi'];
  function SettlDetailCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      requestApi.showTitle('结算记录详情');
    }, 500);

    vm.settlDetail = localStorage.tsSettlDetail ? JSON.parse(localStorage.tsSettlDetail) : requestApi.dataErrorhandle();

    vm.settlDelete = settlDeleteFn;

    function settlDeleteFn() {
      requestApi.confirm('确定要删除结算记录？', function() {
        requestApi
          .getData('OrderCommitAction/removeSettlement.htm', [vm.settlDetail.id])
          .then(function() {
            requestApi.backAndRefresh();
          })
      })
    }
  }

})();