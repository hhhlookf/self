;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('HandleGoodsListCtrl', HandleGoodsListCtrlFn);

  HandleGoodsListCtrlFn.$inject = ['$scope', 'requestApi'];
  function HandleGoodsListCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
    }, 500);

    vm.data = localStorage.rghItemList ? JSON.parse(localStorage.rghItemList) : requestApi.dataErrorhandle();

  }

})();