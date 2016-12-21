;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleCredAddCtrl', HandleCredAddCtrlFn);

  HandleCredAddCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera'];
  function HandleCredAddCtrlFn($scope, requestApi, dataOpera) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
      window.bridge.callHandler('showNavBarRightItem', [
        {'text':'确定', 'link':'', 'linkType':3, 'flag': 'ok'}]
      );
      window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
        addSettlFn();
      });
    }, 500);

    vm.settlList = dataOpera.get('rghAddItemList');

    vm.addSettl = addSettlFn;

    function addSettlFn() {
      dataOpera.add('rghRedList', vm.settlList);
      requestApi.backAndRefresh(1);
    }
  }

})();