;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('ManageApplyCtrl', ManageApplyCtrlFn);

  ManageApplyCtrlFn.$inject = ['$scope', 'requestApi'];
  function ManageApplyCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
      window.bridge.callHandler('showNavBarRightItem', [
        {'text':'下一步', 'link':'', 'linkType':3, 'flag': 'next'}]
      );
      window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
        goToFillInfoFn();
      });
    }, 500);

    vm.currSupplier = 0;
    vm.goToFillInfo = goToFillInfoFn;

    localStorage.rgAddItemList && localStorage.removeItem('rgAddItemList');

    requestApi
      .getData('StockBackPurchaseAction/listAllSupplier.htm')
      .then(function(data) {
        vm.supplierList = data;
        vm.supplierList.unshift({
          id: 0,
          name: '--请选择供应商--'
        })
      });

    function goToFillInfoFn() {
      if(vm.currSupplier == 0) {
        requestApi.alert('请选择供应商');
        return;
      }else if(!vm.linkMan) {
        requestApi.alert('请填写联系人');
        return;
      }else if(!vm.mobile) {
        requestApi.alert('请填写联系电话');
        return;
      }
      localStorage.rgApplyInfo = JSON.stringify({
        linkMan: vm.linkMan,
        mobile: vm.mobile,
        supplier: vm.currSupplier,
        reason: vm.reason || ''
      });
      requestApi.redirect('goodsreject-manage-fill-info.html')
    }
  }

})();