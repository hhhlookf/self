;(function() {
  'use strict';

  angular
    .module('cgmall')
    .controller('CredDetailCtrl', CredDetailCtrlFn);

  CredDetailCtrlFn.$inject = ['$scope', 'requestApi'];
  function CredDetailCtrlFn($scope, requestApi) {
    var vm = $scope;

    // setTimeout(function() {
    //   requestApi.showTitle('冲红记录');
    // }, 500);

    vm.red = localStorage.rgRed ? JSON.parse(localStorage.rgRed) : requestApi.dataErrorhandle();
  }

})();