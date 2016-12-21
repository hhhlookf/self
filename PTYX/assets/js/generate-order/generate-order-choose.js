;(function() {
  'use strict';

  angular.module('cgmall')
    .controller('GenerateOrderChoose', GenerateOrderChooseFn);

  GenerateOrderChooseFn.$inject = ['$scope', 'requestApi'];

  function GenerateOrderChooseFn($scope, requestApi, getUrl) {
    setTimeout(function () {
      window.bridge.callHandler("setNavigationBarTitle", {'title':'生成订单'});
      if(window.bridge) {
        window.bridge.callHandler('showNavBarRightItem', [
          {'text':'下一步', 'link':'', 'linkType':3, 'flag': 'next'}]
        );
        window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
          vm.nextStep();
        }) ;
      }
    }, 500);
    var vm = $scope;

    requestApi.getData('PlanCatalogAction/listCatalogData.htm')
      .then(function(data) {
        console.log(data);
        vm.generateOrderData = data;
        vm.choosedId = [];              // 所选中项目的Id
        vm.choosedData = [];            // 所选中项目的所有信息

        // 进行多选点击
        vm.choose = function (id) {
          if (vm.choosedId.indexOf(id) == -1) {
            vm.choosedId.push(id);
            if (vm.generateOrderData[id].manufacture) {
              vm.choosedData.push(vm.generateOrderData[id]);
            }
          } else {
            vm.choosedId.splice(vm.choosedId.indexOf(id), 1);
            if (vm.generateOrderData[id].manufacture) {
              for (var i = 0; i < vm.choosedData.length; i++) {
                if (vm.generateOrderData[id].id === vm.choosedData[i].id) {
                  vm.deleteIndex = i;
                  break;
                }
              }
              vm.choosedData.splice(vm.deleteIndex, 1);
            }
          }
        };
        // 点击下一步
        vm.nextStep = function () {
          if (vm.choosedData.length == 0) {
            if (vm.choosedId.length > 0) {
              window.bridge.callHandler('invokeHFAlert', {
                'title': '友情提示',
                'content': '当前选择的目录无法配送商品记录！',
                'buttons': [
                  { name: '确认' }
                ]
              });
              // alert('当前选择的目录无法配送商品记录！');
              return;
            }
            // alert('未选中任何数据！');
            window.bridge.callHandler('invokeHFAlert', {
              'title': '友情提示',
              'content': '未选中任何数据！',
              'buttons': [
                { name: '确认' }
              ]
            });
          } else {
            // console.log(vm.choosedId);
            localStorage.setItem('GenerateChooseData', JSON.stringify(vm.choosedData));
            requestApi.redirect('generate-order-submit.html');
          }
        };
      });
  }
})();


