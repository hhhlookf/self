;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('ManageGoodsDetailCtrl', ManageGoodsDetailCtrlFn);

  ManageGoodsDetailCtrlFn.$inject = ['$scope', 'requestApi'];
  function ManageGoodsDetailCtrlFn($scope, requestApi) {
    var vm = $scope;

    setTimeout(function() {
      var title = document.getElementsByTagName('title')[0].innerHTML;
      requestApi.showTitle(title);
    }, 500);

    vm.item = localStorage.rgmItem ? JSON.parse(localStorage.rgmItem) : requestApi.dataErrorhandle();


  }

})();