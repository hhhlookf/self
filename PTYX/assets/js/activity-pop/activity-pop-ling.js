;(function () {
  'use strict';

  angular.module('cgmall')
    .controller('GetRedPackage', GetRedPackageFn);

  function GetRedPackageFn($scope, requestApi, getUrl) {
    var vm = $scope;
    vm.ifshow = false;
    vm.kouling = '';
    vm.backToPrev = function () {
      if (window.bridge) {
        requestApi.back();
      } else if (window.bridge === undefined) {
        JS.closeWin();
      }
    };
    vm.getRed = function () {
      requestApi.getData('ActivityAction/receiveMyPackage.htm')
        .then(function (data) {
          // alert(data);
          vm.kouling = data;
          vm.ifshow = true;
          console.log(data);
        }, function (error) {
          console.error(error);
        })
    };
    vm.goToDraw = function () {
      requestApi.reloadCurrentActivityWebViewPage('luck-draw-activity.html')
    }

  }
})();
