;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('GoodsDetailCtrl', GoodsDetailCtrlFn);

  GoodsDetailCtrlFn.$inject = ['$scope', 'requestApi'];
  function GoodsDetailCtrlFn($scope, requestApi) {
    var vm = $scope;

    // setTimeout(function() {
    //   var title = document.getElementsByTagName('title')[0].innerHTML;
    //   requestApi.showTitle(title);
    // }, 500);

    vm.item = localStorage.rgItem ? JSON.parse(localStorage.rgItem) : requestApi.dataErrorhandle();


  }

})();