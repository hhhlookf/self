;(function () {
    'use strict';

    angular.module('cgmall')
        .controller('tbDeliverWriteInfo', writeInfoFn);

    writeInfoFn.$inject = ['$scope', 'requestApi', 'getUrl'];
    function writeInfoFn($scope, requestApi, getUrl) {
        var vm = $scope;

        vm.orderId = 540;
        // vm.orderId = getUrl.getId();


        requestApi.getData('DeliverySendAction/getGoodsList.htm', [vm.orderId])
            .then(function(data) {
              console.log(data);
              vm.data = data;

              vm.submitGoodsListData = []; // 所有商品发货明细列表

              // 处理所有商品发货明细列表数据（处理需提交的goodsBatch）
              angular.forEach(vm.data, function(value,index) {
                if (this[index] === undefined) {
                  this[index] = {};
                }
                this[index].goodsId = value.goodsId;                     // 此商品ID
                this[index].batchList =  [{
                  productionNo: '',
                  validTime: '',
                  deliveryQty: ''
                }];               // 此商品批次列表
              }, vm.submitGoodsListData);

              vm.submitData = {
                orderId: vm.orderId,                            // 订单ID
                sender: '',                             // 发货人
                tel: '',                              // 发货人电话
                sendDate: '',                             // 发货日期
                logisticsCode: '',                               // 物流单号
                logisticsName: '',                                // 物流企业
                logisticsTel: '',                               // 物流电话
                logisticsRemark: '',                               // 物流说明
                goodsBatch: vm.submitGoodsListData       // 所有商品发货明细列表
              };
            });
            // setTimeout(function () {
                //     requestApi.showTitle('填写物流信息');
                //     window.bridge.callHandler('showNavBarRightItem', [
                //         {'text':'下一步', 'link':'', 'linkType':3, 'flag': 'nextStep'}]
                //     );
                //     window.bridge.registerHandler('nativeCallHandler_navBarRightItemOnClick',function(flag){
                //         if (flag == 'nextStep') {
                //             if (vm.delName == '' || vm.delTel == '' || vm.date == '') {
                //                 window.bridge.callHandler('invokeHFAlert', {
                //                     'title': '友情提示',
                //                     'content': '信息填写不正确！',
                //                     'buttons': [
                //                         { name: '确认' }
                //                     ]
                //                 });
                //             } else {
                //                 !/^\d{5,}$/i.test(vm.delTel)
                //                     ? window.bridge.callHandler('invokeHFAlert', {
                //                     'title': '友情提示',
                //                     'content': '手机格式不正确！',
                //                     'buttons': [
                //                         { name: '确认' }
                //                     ]
                //                 })
                //                     : vm.toSave()
                //             }
                //         }
                //     }) ;
                // },0);
                // vm.data = {
                //   orderId:111,
                //   goodsList:[
                //       {
                //         goodsId:1,
                //         name: 'adsf',
                //         format: 'ssss',
                //         orderNum: '0/10',
                //         number: 10,
                //         pp: 'xxxx',
                //         product: 'kkkk'
                //       },
                //       {
                //         goodsId:2,
                //         name: 'sdfsd',
                //         format: 'ggggg',
                //         orderNum: '0/10',
                //         number: 10,
                //         pp: 'gddddd',
                //         product: 'nnnnnn'
                //       }
                //     ]
                // };

        // 删除新批次
        vm.deleteNew = function (index) {
            vm.submitData.goodsBatch[index].batchList.pop();
        };

        // 点击添加新批次
        vm.addNewPici = function (index) {
            vm.submitData.goodsBatch[index].batchList.push({
              productionNo: '',
              validTime: '',
              deliveryQty: ''
            });
        };

        vm.submit = function () {
          requestApi.getData('DeliverySendAction/commitSend.htm', [vm.submitData])
              .then(function(data) {
                    console.log('success');
              });
          console.log(vm.submitData);
        };

        // 点击日历
        vm.getDate = function () {
            // window.bridge.callHandler('invokeHFCalendar', {}, function (response) {
            //     $scope.$apply(function () {
            //         vm.date  = response;
            //     })
            // });
          vm.submitData.sendDate = 1470898237000;
        };

        // 点击下方日历
        vm.getSmallDate = function (parentIndex, index) {
          vm.submitData.goodsBatch[parentIndex].batchList[index].validTime = 1470898237000;
        };
    }
})();