;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleGoodsDetailCtrl', HandleGoodsDetailCtrlFn);

  HandleGoodsDetailCtrlFn.$inject = ['$scope', 'requestApi'];
  function HandleGoodsDetailCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
    }, 500);

    vm.item = localStorage.rghItem ? JSON.parse(localStorage.rghItem) : requestApi.dataErrorhandle();

  }

})();