;(function () {
  'use strict';

  angular.module('cgmall')
    .controller('LuckDraw', LuckDraw);

  function LuckDraw($scope, requestApi, getUrl) {
    // alert(navigator.userAgent);

    var vm = $scope;
    vm.canClick = true;    // 抽奖按钮可点击
    vm.ifDisabled = false;  // 抽奖按钮非灰色状态
    vm.shoot = '中奖啦！';  // 标题
    vm.shootTit = '';      // 副标题
    vm.shootCon = '';      // 内容
    vm.prize = [           // 奖项
      {order: '您没有抽中任何奖品。', con: ''},
      {order: '恭喜您！抽中 特等奖', con: 'IPhone 7手机一部'},
      {order: '恭喜您！抽中 一等奖', con: '小米平板 2'},
      {order: '恭喜您！抽中 二等奖', con: '卡西欧手表男'},
      {order: '恭喜您！抽中 三等奖', con: '折叠自行车'},
      {order: '恭喜您！抽中 四等奖', con: '小米移动电源'},

      {order: '抱歉', con: '抽奖活动已结束'},
      {order: '抱歉', con: '您的抽奖次数没有了'},
      {order: '抱歉', con: '当前剩余奖品数不足'}
    ];
    //vm.haveActivityData = false; //存不存在上一次抽奖结果（默认不存在）


    // 关闭弹窗
    vm.closePop = function () {
      vm.ifPop = false;
      vm.canClick = true; // 让按钮恢复可点击
    };

    vm.backToPrev = function () {
      requestApi.back();
    };

    // 查看我的支付宝红包
    vm.seeMyRed = function () {
      if (vm.canClick === true ) {
        requestApi.getData('ActivityAction/showMyPacket.htm')
          .then(function (data) {
            vm.shoot = '我的红包';
            vm.shootCon = data;
            if (data) {
              vm.shootTit = '您的支付宝红包口令为：';
            } else {
              vm.shootTit = '您当前没有支付宝红包！';
            }
            vm.ifPop = true;
          }, function (error) {
            alert(error);
          });
      }
    };

    // 查看我的奖品
    vm.seeMyJp = function () {
      if (vm.canClick === true ) {
        requestApi.getData('ActivityAction/showMyPrize.htm')
          .then(function (data) {
            vm.shoot = '我的奖品';
            if (data) {
              vm.shootTit = '您获得的奖品为：';
              vm.shootCon = data.name;
            } else {
              vm.shootTit = '很遗憾，您没有抽中任何奖品。';
              vm.shootCon = '';
            }
            vm.ifPop = true;
          }, function (error) {
            alert(error);
          });
      }
    };

    // 点击抽奖按钮
    vm.start = function () {
      // 判断是否为第二次抽奖
      // if (localStorage.getItem('ActivityData')) {
      //   vm.haveActivityData = true;
      var style = document.getElementById('style');
      var deg = 0; // 初始化旋转角度


      // 后台返回数据
      // （360N + 0） 特等          1
      // （360N + 60）1等           2
      // （360N + 120）2等          3
      // （360N + 180）3等          4
      // （360N + 240）4等          5
      // （360N + 300）未中奖        0

      // 请求后台抽奖接口
      if (vm.canClick === true) { // 抽奖按钮可点击
        var time1 = new Date().getTime();
        requestApi.getData('ActivityAction/luckyDraw.htm')
          .then(function (data) {

            //
            // alert((time2 - time1) / 1000 + '秒');
            vm.canClick = false; // 让按钮不可点击
            // localStorage.setItem('ActivityData', data);//把当前获取来的获奖等级存入，以防止可以第二次抽奖，控制角度

            // if (vm.haveActivityData) { // 第二次以上的抽奖
            //   var initDeg = localStorage.getItem('ActivityData');
            //
            // } else { // 不存在上一次抽奖
            if (data === 1) {
              vm.shootTit = vm.prize[data].order;
              vm.shootCon = vm.prize[data].con;
              deg = 1080 + 360;
            } else if (data > 0 && data != 1 && data < 6) {
              vm.shootTit = vm.prize[data].order;
              vm.shootCon = vm.prize[data].con;
              deg = 1080 + (data - 1) * 60;
            } else if (data === 0 || data > 5) {
              vm.shoot = '很遗憾！';
              vm.shootTit = vm.prize[data].order;
              vm.shootCon = vm.prize[data].con;
              deg = 1080 + 300;
            } else if (data === -3 || data === -6) {
              vm.shoot = '提示';
              vm.shootTit = vm.prize[6].order;
              vm.shootCon = vm.prize[6].con;
              vm.ifPop = true;
              // vm.ifDisabled = true;
            } else if (data === -4) {
              vm.shoot = '提示';
              vm.shootTit = vm.prize[7].order;
              vm.shootCon = vm.prize[7].con;
              vm.ifPop = true;
              // vm.ifDisabled = true;
            } else if (data === -5) {
              vm.shoot = '提示';
              vm.shootTit = vm.prize[8].order;
              vm.shootCon = vm.prize[8].con;
              vm.ifPop = true;
              // vm.ifDisabled = true;
            }
            // }
            var time2 = new Date().getTime();
            // alert(data + '时间' + (time1 - time2) / 1000);
            vm.ifRotate = true;//转盘动画转起来
            style.innerHTML = '' +
              '@keyframes rotate-draw {' +
              'from {' +
              'transform: rotate(0deg);}' +
              'to{' +
              'transform: rotate(' + deg + 'deg);}}' +

              '@-o-keyframes rotate-draw {' +
              'from {-o-transform: rotate(0deg);}' +
              'to{-o-transform: rotate(' + deg + 'deg);}}' +

              '@-webkit-keyframes rotate-draw {' +
              'from {-webkit-transform: rotate(0deg);}' +
              'to{-webkit-transform: rotate(' + deg + 'deg);}}' +

              '@-moz-keyframes rotate-draw {' +
              'from {-moz-transform: rotate(0deg);}' +
              'to{-moz-transform: rotate(' + deg + 'deg);}}' +

              '@-ms-keyframes rotate-draw {' +
              'from {-ms-transform: rotate(0deg);}' +
              'to{-ms-transform: rotate(' + deg + 'deg);}}';

            // 可以抽奖的情况下动画转完后弹出抽奖结果
            if (data > 0 || data === 0) {
              setTimeout(function () {
                vm.$apply(function () {
                  vm.ifPop = true;     // 弹出弹窗
                  vm.ifRotate = false; // 移除转动动画类名
                  vm.ifDisabled = true; // 抽奖按钮灰色状态
                });//获奖结果弹出
              }, 4500+(time2-time1))
            }

          }, function (error) {
            alert(error);
          })
      }
    };

  }
})();
