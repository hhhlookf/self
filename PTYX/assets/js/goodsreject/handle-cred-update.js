;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleCredUpdateCtrl', HandleCredUpdateCtrlFn);

  HandleCredUpdateCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera'];
  function HandleCredUpdateCtrlFn($scope, requestApi, dataOpera) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
    }, 500);

    vm.red = dataOpera.get('rghRed');
    vm.red.planRedAmount = parseFloat(vm.red.planRedAmount);

    vm.update = updateFn;

    function updateFn() {
      dataOpera.set('rghRed', vm.red);
      dataOpera.update('rghRedList', vm.red);
      requestApi.backAndRefresh();
    }
  }

})();