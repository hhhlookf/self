;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('GoodsListCtrl', GoodsListCtrlFn);

  GoodsListCtrlFn.$inject = ['$scope', 'requestApi'];
  function GoodsListCtrlFn($scope, requestApi) {
    var vm = $scope;

    // setTimeout(function() {
    //   var title = document.getElementsByTagName('title')[0].innerHTML;
    //   requestApi.showTitle(title);
    // }, 500);

    vm.data = localStorage.rgItemList ? JSON.parse(localStorage.rgItemList) : requestApi.dataErrorhandle();

  }

})();