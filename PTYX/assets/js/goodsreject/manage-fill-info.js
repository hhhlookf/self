;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('ManageFillInfoCtrl', ManageFillInfoCtrlFn);

  ManageFillInfoCtrlFn.$inject = ['$scope', 'requestApi'];
  function ManageFillInfoCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
      window.bridge.callHandler('showNavBarRightItem', [
        {'text':'添加', 'link':'', 'linkType':3, 'flag': 'add'}]
      );
      window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
        goToAddGoodsFn();
      });
    }, 500);

    var applyInfo = localStorage.rgApplyInfo ? JSON.parse(localStorage.rgApplyInfo) : requestApi.dataErrorhandle();
    vm.goodsList = localStorage.rgAddItemList ? JSON.parse(localStorage.rgAddItemList) : [];

    totalHandle();

    vm.goToAddGoods = goToAddGoodsFn;
    vm.inputChangeHandle = inputChangeHandleFn;
    vm.delete = deleteFn;
    vm.submit = submitFn;

    function goToAddGoodsFn() {
      requestApi.redirect('goodsreject-manage-goods-add.html');
    }
    function inputChangeHandleFn(e) {
      var inputObj = angular.element(e.target);
      var modelstr = inputObj.attr('ng-model');
      var modelVal = this.item[modelstr.substring(modelstr.indexOf('.')+1)];

      modelVal = modelVal || 0;
      inputObj.val(modelVal);
      totalHandle();
    }
    function submitFn() {
      var detailItems = [];
      angular.forEach(vm.goodsList, function(value) {
        detailItems.push({
          stockId: value.id,
          num: value.rgNum || 0,
          price: value.rgPrice || 0,
          appendParam: value.appendParam || ''
        })
      });
      requestApi
        .getData('StockBackPurchaseAction/commitOrUpdate.htm', [{
          supplierCompanyId: applyInfo.supplier,
          linkMan: applyInfo.linkMan,
          mobile: applyInfo.mobile,
          notes: applyInfo.reason,
          money: vm.totalAmount,
          detailItems: detailItems
        }])
        .then(function() {
          requestApi.alert('提交成功！');
          requestApi.gotoListPage();
        })
    }
    function deleteFn() {
      console.log(this.$index);
      var delItem = vm.goodsList.splice(this.$index, 1);
      localStorage.rgAddItemList = JSON.stringify(vm.goodsList);
      totalHandle();
    }

    function totalHandle() {
      vm.totalAmount = 0;
      angular.forEach(vm.goodsList, function(value) {
        vm.totalAmount += (value.rgPrice || 0) * (value.rgNum || 0);
      });
    }
  }

})();