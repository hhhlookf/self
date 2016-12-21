;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('GenerateOrderSubmit', GenerateOrderSubmitFn);

  GenerateOrderSubmitFn.$inject = ['$scope', 'requestApi'];

  function GenerateOrderSubmitFn($scope, requestApi) {
    setTimeout(function () {
      // requestApi.handleBackRefresh();
      window.bridge.callHandler("setNavigationBarTitle", {'title':'生成订单'});
      if(window.bridge) {
        window.bridge.callHandler('showNavBarRightItem', [
          {'text':'提交', 'link':'', 'linkType':3, 'flag': 'next'}]
        );
        window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
          vm.submit();
        }) ;
      }
    }, 500);
    var vm = $scope;

    // 采购目录列表数据
    // vm.GenerateChooseData = localStorage.getItem('GenerateChooseData') ? JSON.parse(localStorage.getItem('GenerateChooseData')) : alert('没有GenerateChooseData');
    vm.GenerateChooseData = localStorage.getItem('GenerateChooseData') ? JSON.parse(localStorage.getItem('GenerateChooseData')) : requestApi.dataErrorhandle();

    console.log(vm.GenerateChooseData);

    // 提交给后台数据初始化
    vm.submitData = [];

    angular.forEach(vm.GenerateChooseData, function (value,index) {
      if (this[index] == undefined) {
        this[index] = {};
        this[index].planCatalogId = vm.GenerateChooseData[index].id;
      }
    }, vm.submitData);

    // 提交数据
    vm.submit = function () {
      console.log(vm.submitData);
      for(var i=0; i<vm.submitData.length; i++) {
        if (!vm.submitData[i].planCatalogId || !vm.submitData[i].num) {
          window.bridge.callHandler('invokeHFAlert', {
            'title': '友情提示',
            'content': '请填写采购数量！',
            'buttons': [
              { name: '确认' }
            ]
          });
          // alert('请填写采购数量！');
          vm.toSubmit = false;
          break;
        } else {
          vm.toSubmit = true;
        }
      }
      submitServer();
      function submitServer() {
        if (vm.toSubmit) {
          requestApi.getData('PlanCatalogAction/createOrder.htm', [vm.submitData])
            .then(function(data) {
              window.bridge.callHandler('invokeHFAlert', {
                'title': '提示',
                'content': '订单已生成，请到待提交再次提交',
                'buttons': [
                  { name: '确认' }
                ]
              });
              // alert('订单已生成，请到待提交再次提交');
              window.bridge.callHandler('backToRootCommonListVClr',{'needRefreshRootCommonListVClr':true});
            });
        }
      }

    }
  }
})();


