;(function () {
  'use strict';
  angular.module('cgmall')
    .controller('ActivityPopEd', ActivityPopEdFn);

  function ActivityPopEdFn($scope, requestApi, getUrl) {
    var vm = $scope;
    vm.ifShow = false; // 不显示页面

    // 进入页面先获取用户信息，以及是否点击了“不再显示”
    setTimeout( function () {
        // ----------------处理安卓获取不到window.bridge------------
        if (window.bridge === undefined) {
          var loginData = JSON.parse(JS.loginInfo());
          if(loginData.isValidLogin === true) {
            vm.pushId = loginData["pushId"]; // 用户唯一ID
          } else {
            vm.pushId = '';
          }
          var localData = JS.getLocalData();
          if(localData) {
            localData = JSON.parse(localData);
            if( localData['isClicked'] && ( loginData['pushId'] == vm.pushId) ){
              JS.closeWebView(); // 关闭弹窗
              return ;
            }
          }
          vm.$apply(function() {
            vm.ifShow = true;
          });
          return;
        }
        // ----------------处理安卓获取不到window.bridge------------

        // 获取用户信息
        window.bridge.callHandler('loginInfo', function (data) {
          if(data.isValidLogin === true) {
            vm.pushId = data["pushId"]; // 用户唯一ID
            // alert(vm.pushId);
          } else {
            vm.pushId = '';
          }
        });

        // 获取是否点击不再显示
        window.bridge.callHandler('getLocalData', function (data) {
          if(data){
            // 处理安卓传过来的数据
            if (typeof data === 'string') {
              data = JSON.parse(data);
            }
            // alert(data);
            // 判断是否点击“不再显示”，用户ID是否与上次进入这个页面的用户ID一致
            if( data['isClicked'] && ( data['pushId'] == vm.pushId) ){
              window.bridge.callHandler('closeWebView'); // 关闭弹窗
              return ;
            }
          }

          // 没有得到data并且用户ID与上次不一致 ， 打开弹窗
          vm.$apply(function() {
            vm.ifShow = true;
          });
        });
      }, 100);

    // 点击不再显示
    vm.ignore = function () {
      if (window.bridge) {
        window.bridge.callHandler('saveLocalData', {isClicked: true, pushId: vm.pushId});
      } else if(window.bridge === undefined) {
        JS.saveLocalData({isClicked: true, pushId: vm.pushId});
        JS.closeWebView(); // 关闭页面
        return;
      } else {
        alert('程序出现异常，请重新启动软件');
      }
      requestApi.back();
    };

    // 点击查看我的奖品
    vm.cha = function () {
      if (window.bridge) {
        requestApi.reloadCurrentActivityWebViewPage('luck-draw-activity.html');
      } else if (window.bridge === undefined) {
        JS.reloadCurrentActivityWebViewPage('luck-draw-activity.html');
      }

    };

    // 关闭弹窗
    vm.closeWebView = function () {
      if (window.bridge) {
        requestApi.back();
      } else if (window.bridge === undefined) {
        JS.closeWin();
      }
    }
  }
})();

