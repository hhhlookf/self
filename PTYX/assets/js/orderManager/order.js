
;(function() {
    'use strict';

    angular.module('cgmall')
        .controller('Order', function order(requestApi, getUrl) {
            var vm = this;

            //var id = getUrl.getId();
            localStorage.setItem('id', id);
            var id = '366';

            // requestApi.getData('OrderManageAction/getOrderDetail.htm', [id])
            //     .then(function(data) {
                    vm.data= {"receiverTel":"15260291344","buyerSealFlag":false,"goodsList":[{"totalDeliveryQty":0,"finalQty":3,"companyGoodsNo":"03","orderId":366,"goodsId":2553,"finalPrice":8.2,"detailId":945,"bargain":false,"price":"8.2","createdTime":1465354876000,"orderQty":3,"manufactureId":10,"id":945,"dimension":"2%，100ml","goodsName":"测试产品1","brand":"测试商品01","createdById":1689,"updatedTime":1465354876000,"updatedBy":"Yzm19770407(Yzm19770407)","goodsSnapshotId":518196,"salePrice":8.2,"totalReturnQty":0,"manu":"小燕生产厂家","updatedById":1689,"bargainPrice":0,"unit":"瓶","createdBy":"Yzm19770407(Yzm19770407)","brandId":36}],"cityId":"341","orderTime":"","supplier":"测试轻轻","createdTime":"2016-06-08","id":366,"createdById":1689,"creditInfo":"无授信数据","updatedTime":1465354876000,"orderNo":"N20160608-000007","updatedBy":"Yzm19770407(Yzm19770407)","balanceStatus":1,"totalRedAmount":0,"updatedById":1689,"provinceId":"14","receiverAddress":"仙游县度尾镇中心卫生院","totalAmount":24.6,"companyId":1688,"balanceList":[],"supplierSealFlag":false,"status":1,"supplierId":2870,"payMoney":"24.6","invoiceInfo":"发票.出库清单.一式三份，随货 到.","receiverName":"游志敏","deliverys":[],"createdBy":"Yzm19770407(Yzm19770407)","supplierTel":""};
                    localStorage.setItem('orderData', angular.toJson(vm.data)); //存储数据
                    // requestApi.showTitle('订单详情');
                // }, function(error) {
                //     console.error(error);
                // })

            vm.cancelOrder = function() {
                window.bridge.callHandler('closeWebView', {}, function(response) {
                    console.log(response);
                })
            }

            vm.moreOrder = function() {
                requestApi.getData('OrderManageAction/againOrderForPurchase.htm', [id])
                    .then(function(data) {
                        window.bridge.callHandler('invokeHFAlert',{
                            'title':'友情提示',
                            'content': '是否确定再一单',
                            'cancleBtn':'取消',
                            'buttons': [
                                {
                                    'name': '确定'
                                }
                            ]
                        }, function(res) {
                            window.bridge.callHandler('pushToCommonListVClr',{'port':'OrderCommitAction.listOrders'}) ;
                        }) ;

                    }, function(data) {
                        console.error(data);
                    })

            }

            //全部商品
            vm.goodsList = function() {
                // window.bridge.callHandler('openWebView', {'linkUrl': 'order-list.html' }, function(response) {
                //     console.log(response);
                // })
            }

            //跳转至商品货物详情页
            vm.linkToList = function(index) {
                localStorage.setItem('orderListIndex', index);
                requestApi.redirect('order-goodsinfo.html');
            }
        })
})();