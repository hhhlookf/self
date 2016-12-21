;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('ManageGoodsListCtrl', ManageGoodsListCtrlFn);

  ManageGoodsListCtrlFn.$inject = ['$scope', 'requestApi'];
  function ManageGoodsListCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
    }, 500);

    vm.data = localStorage.rgmItemList ? JSON.parse(localStorage.rgmItemList) : requestApi.dataErrorhandle();

  }

})();