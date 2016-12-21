;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleCredDetailCtrl', HandleCredDetailCtrlFn);

  HandleCredDetailCtrlFn.$inject = ['$scope', 'requestApi', 'dataOpera'];
  function HandleCredDetailCtrlFn($scope, requestApi, dataOpera) {
    var vm = $scope;

    // setTimeout(function() {
    //   var title = document.getElementsByTagName('title')[0].innerHTML;
    //   requestApi.showTitle(title);
    //   requestApi.handleBackRefresh();
    // }, 500);

    vm.red = dataOpera.get('rghRed');

    vm.delete = deleteFn;
    vm.goToRedUpdate = goToRedUpdateFn;

    function deleteFn() {
      requestApi.confirm('确定要删除？', function() {
        dataOpera.delete('rghRedList', vm.red.id);
        requestApi.backAndRefresh()
      })
    }
    function goToRedUpdateFn() {
      requestApi.redirect('goodsreject-handle-cred-update.html');
    }
  }

})();