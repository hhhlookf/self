;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleSettlChooseCtrl', HandleSettlChooseCtrlFn);

  HandleSettlChooseCtrlFn.$inject = ['$scope', 'requestApi'];
  function HandleSettlChooseCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
      window.bridge.callHandler('showNavBarRightItem', [
        {'text':'下一步', 'link':'', 'linkType':3, 'flag': 'next'}]
      );
      window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
        nextFn();
      });
    }, 500);

    vm.orderItemList = [
      {
        title: '结算方式',
        type: 'arrow',
        items: [
          { label: '全部', value: 0 },
          { label: '担保支付', value: 1 },
          { label: '实时支付', value: 2 },
          { label: '授信支付', value: 3 },
          { label: '分期付款', value: 4 }
        ]
      },
      {
        title: '结算状态',
        type: 'arrow',
        items: [
          { label: '全部', value: 0 },
          { label: '未支付', value: 1 },
          { label: '已支付', value: 2 }
        ]
      },
      {
        title: '应付金额',
        type: 'order',
        items: []
      }
    ];
    vm.currSelect = 0;     // 当前打开了哪个的下拉框  0没打开 1结算方式 2结算状态
    vm.orderMode = 0;      // 排序方式  0默认 1降序 2升序
    vm.settlMode = {       // 结算方式  0全部 1担保 2实时 3授信 4分期
      label: '全部',
      value: 0
    };
    vm.settlState = {      // 结算状态  0全部 1未支付 2已支付
      label: '全部',
      value: 0
    };
    vm.selectItems = {};

    vm.filterChoose = filterChooseFn;
    vm.closeMask = closeMaskFn;
    vm.filerItemChoose = filerItemChooseFn;
    vm.select = selectFn;
    vm.next = nextFn;

    findSettlList(vm.settlMode.value, vm.settlState.value, vm.orderMode);

    function filterChooseFn() {
      if(this.$index == 0 || this.$index == 1) {
        if(vm.currSelect === this.$index+1) {
          vm.currSelect = 0;
        }else {
          vm.currSelect = this.$index+1
        }
      }else {
        vm.orderMode = vm.orderMode+1 > 2 ? 0 : vm.orderMode+1;
        findSettlList(vm.settlMode.value, vm.settlState.value, vm.orderMode);
      }

    }
    function closeMaskFn() {
      vm.currSelect = 0;
    }
    function filerItemChooseFn() {
      if(this.$parent.$index == 0) {
        vm.settlMode = this.item;
      }else {
        vm.settlState = this.item;
      }
      findSettlList(vm.settlMode.value, vm.settlState.value, vm.orderMode);
    }
    function findSettlList(mode, state, order) {
      requestApi
        .getData('StockBackSaleAction/listSettlement.htm', [mode, state, order])
        .then(function(data) {
          vm.settlList = data;
          vm.selectItems = {};
        });
    }
    function selectFn() {
      var itemVal = vm.selectItems[this.settl.id];
      // 已选 -> 未选
      if(itemVal) {
        delete vm.selectItems[this.settl.id]
      } else {
        vm.selectItems[this.settl.id] = this.settl;
      }
    }
    function nextFn() {
      var settlList =  [];
      for(var key in vm.selectItems) {
        settlList.push(vm.selectItems[key]);
      }
      if(settlList.length == 0) {
        requestApi.alert('请选择结算记录！');
      }else {
        localStorage.rghAddItemList = JSON.stringify(settlList);
        requestApi.redirect('goodsreject-handle-cred-add.html');
      }
    }
  }

})();