;(function () {
  'use strict';
  angular.module('cgmall')
    .controller('ActivityPopUn', ActivityPopUnFn);

  function ActivityPopUnFn($scope, requestApi, getUrl) {
    var vm = $scope;

    vm.closeWebView = function () {
      requestApi.back();
    };
    vm.goToDraw = function () {
      requestApi.reloadCurrentActivityWebViewPage('luck-draw-activity.html');
    }
  }
})();

