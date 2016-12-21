;(function() {
    'use strict';



    /**
     * author:yaodong
     * 详情页控制器
     */
    angular.module('cgmall-detail', ['cgmall', 'ngSanitize'])
        .controller('ExsDetail', exsDetailController)
        .directive('bxSlider', imageLoopDirective)
        .directive('bxSliderReview', imageLoopReviewDirective)

    function exsDetailController($scope, requestApi, getUrl, $http) {

        $scope.catalogTxt = '';
        localStorage.setItem('yjPrice', ''); //清空议价填写的数据
        //qty function
        $scope.plus = function() {
            $scope.count++;
        };

        $scope.reduce = function() {
            if ( $scope.count <= 0 ) return;
            $scope.count--;
        };

        /**
         * add collection function
         */
        $scope.addYijia = function() {
            $scope.isShadow = true;
            $scope.isCollection = true;
        }
        //议价确定按钮
        var yjPrice;
        $scope.confirmYijia = function(count, qwprice, remarks) {
            //some ajax here...
            if ( !(/^[0-9]*$/.test(qwprice)) ) {
                requestApi.alert('请输入正确的期望价格');
                // window.bridge.callHandler('invokeHFAlert', {'content': '请输入正确的期望价格', 'buttons': [{'name': '确定'}] }, function(response) {
                //     console.log(response);
                // })
            } else if (remarks.trim().length == 0) {
                requestApi.alert('请填写议价备注');
                // window.bridge.callHandler('invokeHFAlert', {'content': '请填写议价备注', 'buttons': [{'name': '确定'}] }, function(response) {
                //     console.log(response);
                // })
            } else if ( !(/^[0-9]*$/.test(count)) )  {
                requestApi.alert('请输入数量');
                // window.bridge.callHandler('invokeHFAlert', {'content': '请输入数量', 'buttons': [{'name': '确定'}] }, function(response) {
                //     console.log(response);
                // })
            } else {
                yjPrice = {
                    count: count,
                    qwprice: qwprice,
                    remarks: remarks
                }
                localStorage.setItem('yjPrice', angular.toJson(yjPrice));


                // requestApi.getData('ShoppingAction/addCarItem.htm', [id, count, qwprice, remarks])
                //     .then(function(data) {
                        $scope.isShadow = false; //close shadow
                        $scope.isCollection = false; //close collection contain

                        // if (data == 'needLogin') {
                        //     requestApi.login();
                        // } else {
                            requestApi.alert('议价成功');
                        // }
                    // }, function(error) {
                    //     console.log(error);
                    // })
            }


        };

        //cancel collection pop
        $scope.cancelYijia = function() {
            $scope.isShadow = false; //close shadow
            $scope.isCollection = false; //close collection contain
            localStorage.setItem('yjPrice', ''); //清空议价填写的数据
        };

        //close review img
        $scope.closeReviewImg = function() {
            $scope.ifShowReview = false;
        };

        //open review img
        $scope.showImgReview = function() {
            $scope.ifShowReview = true;
        }

        //var id = '169799';
        if ( getUrl.getId() ) {
            var id = getUrl.getId();
        } else {
            var id = localStorage.getItem('goodsId');
        }

        // requestApi.getData('GoodsAction/getGoodsDetail.htm', [id])
        //     .then(function(data) {
        //         console.log(JSON.stringify(data));
                var data = {"salePrice":"165","isFavor":false,"saleCode":"444","manufactor":"德国费森尤斯","bargain":true,"imageUrls":["assets/images/index/index-goods.png","assets/images/index/index-demo.png"],"name":"血液透析导管穿刺包","minPurchaseNum":1,"company":"ptds","tel":"15013760005","purchaseNum":0,"dimension":"注明具体规格"}
                $scope.goods = data;
                $scope.goodsDetail = data.details;
                $scope.imageItems = data.imageUrls;

                $scope.count = data.purchaseNum;

                localStorage.setItem('purchaseNum', data.purchaseNum); //设置购物车数量


                /**
                 * 供应商电话号码 聊天框电话参数
                 */
                localStorage.setItem('detailTel', data.tel);

                //显示或者隐藏议价


                if ( data.bargain ) {
                    $scope.ifBargain = true;

                } else {
                    $scope.ifBargain = false;
                }
                //判断是否收藏
                if ( data.isFavor ) {
                    $scope.ifCollected = 1;
                }

                // setTimeout(function() {
                //     requestApi.showTitle('详情页');
                // }, 300);

            // }, function(error) {
            //     console.error(error);
            // });

        //收藏分类
        $scope.addCollect = function(event) {
            /**
             * 获得所有收藏分类
             */
            // requestApi.getData('GoodsAction/listFavorTypes.htm', [])
            //     .then(function(data) {
                        $scope.isShadow = true;
                        $scope.isShoucang = true;
                        $scope.items = [{"companyId":2993,"createdBy":"Gzhenghf(XMGKZYC)","createdById":3062,"createdTime":1474371814000,"id":121,"name":"我的收藏","updatedBy":"Gzhenghf(XMGKZYC)","updatedById":3062,"updatedTime":1474371814000}];
                // }, function(error) {
                //     requestApi.alert(error);
                // })
        }



        //目录弹出层
        $scope.addCatalog = function () {
            /**
             * 获取目录id
             */
            // requestApi.getData('MyPlanReqAction/listCatalog.htm')
            //     .then(function (data) {
                        var data = [{"goodsId":48,"departmentId":14,"belongCompany":"厦门感康制药厂","type":"分类2","shareDown":true,"createdTime":1474180290000,"disabled":false,"editabled":false,"id":17,"dimension":"2% 500","goodsNum":0,"createdById":3029,"updatedTime":1479347580000,"updatedBy":"Czhenghf(XMGK)","salePrice":3.66,"planCatalogGoodsNum":5,"shareUp":true,"bargainNote":"1","dept":"科室2","updatedById":3029,"ptPrice":111,"bargainPrice":1,"manufacture":"小燕生产厂家","companyId":2960,"unit":"瓶","createdBy":"Czhenghf(XMGK)","name":"0918目录2","planCategoryId":16},{"departmentId":13,"type":"分类1","shareDown":true,"createdTime":1474180059000,"disabled":false,"editabled":false,"id":15,"dimension":"33","goodsNum":0,"createdById":3029,"updatedTime":1474180110000,"updatedBy":"Czhenghf(XMGK)","planCatalogGoodsNum":3,"shareUp":true,"dept":"科室1","updatedById":3029,"companyId":2960,"unit":"33","createdBy":"Czhenghf(XMGK)","name":"0918目录","planCategoryId":15},{"departmentId":12,"type":"采购目录1","shareDown":true,"createdTime":1474099829000,"disabled":false,"editabled":false,"id":12,"dimension":"2%500ml/瓶","goodsNum":0,"createdById":3029,"updatedTime":1474099829000,"updatedBy":"Czhenghf(XMGK)","planCatalogGoodsNum":0,"shareUp":true,"dept":"皮肤科","updatedById":3029,"companyId":2960,"unit":"瓶","createdBy":"Czhenghf(XMGK)","name":"测试商品","planCategoryId":8},{"departmentId":12,"type":"采购目录1","shareDown":true,"createdTime":1474095512000,"disabled":false,"editabled":false,"id":11,"dimension":"规格1","goodsNum":0,"createdById":3029,"updatedTime":1474095512000,"updatedBy":"Czhenghf(XMGK)","planCatalogGoodsNum":0,"shareUp":true,"dept":"皮肤科","updatedById":3029,"companyId":2960,"unit":"盒","createdBy":"Czhenghf(XMGK)","name":"合并1","planCategoryId":8},{"departmentId":2,"type":"药品","shareDown":false,"createdTime":1472803846000,"disabled":false,"editabled":true,"id":3,"dimension":"222","goodsNum":0,"createdById":3062,"updatedTime":1472803846000,"updatedBy":"Gzhenghf(XMGKZYC)","planCatalogGoodsNum":2,"shareUp":false,"dept":"骨科","updatedById":3062,"companyId":2993,"unit":"22","createdBy":"Gzhenghf(XMGKZYC)","name":"22","planCategoryId":2},{"departmentId":56456456,"type":"111","shareDown":false,"createdTime":1472800747000,"disabled":false,"editabled":true,"id":2,"dimension":"6544","goodsNum":0,"createdById":3062,"updatedTime":1472800747000,"updatedBy":"Gzhenghf(XMGKZYC)","planCatalogGoodsNum":3,"shareUp":false,"updatedById":3062,"companyId":2993,"unit":"65454","createdBy":"Gzhenghf(XMGKZYC)","name":"44654","planCategoryId":5}];
                        var catalogId = data[0].id;
                        $scope.catalogname = data;
                        localStorage.setItem('catalogId', catalogId);
                        $scope.isCatalog = true;
                        $scope.isShadow = true;

                // }, function (error) {
                //     requestApi.alert(error);
                // })


        }


        //目录取消
        $scope.cancelCatalog = function () {
            $scope.isCatalog = false;
            $scope.isShadow = false;
        }

        //目录确认
        $scope.confirmCatalog = function (catalogName, bargainPrice, catalogTxt) {
            var catalogId = localStorage.getItem('catalogId');


            if ( catalogName == undefined ) {
                requestApi.alert('请选择目录');
                // window.bridge.callHandler('invokeHFAlert', {'content': '请选择目录', 'buttons': [{'name': '确定'}] }, function(response) {
                //     console.log(response);
                // })
            } else if ( !(/^[0-9]*$/.test(bargainPrice)) ) {
                requestApi.alert('请输入数字');
                // window.bridge.callHandler('invokeHFAlert', {'content': '请输入数字', 'buttons': [{'name': '确定'}] }, function(response) {
                //     console.log(response);
                // })
            } else if (catalogTxt.trim().length == 0) {
                requestApi.alert('请填写议价备注');
                // window.bridge.callHandler('invokeHFAlert', {'content': '请填写议价备注', 'buttons': [{'name': '确定'}] }, function(response) {
                //     console.log(response);
                // })
            } else {
                // requestApi.getData('GoodsAction/addGoodsToCatalog.htm', [catalogId, id, bargainPrice, catalogTxt])
                //     .then(function (data) {
                        requestApi.alert('保存成功');
                        $scope.isCatalog = false;
                        $scope.isShadow = false;
                    // }, function(error) {
                    //     requestApi.alert(error);
                    // })
            }
        }

        //收藏弹出框退出
        $scope.cancelCollection = function() {
            $scope.isShadow = false;
            $scope.isShoucang = false;
        }


        //收藏确认按钮
        $scope.confirmCollection = function(type, name, code, dimension, notes) {
            if (name == undefined) {
                requestApi.alert('请填写商品名');
            } else if (code == undefined){
                requestApi.alert('请填写商品编码');
            } else if (dimension == undefined) {
                requestApi.alert('请填写商品规格');
            } else if (notes == undefined) {
                requestApi.alert('请填写备注');
            } else {
                // requestApi.getData('GoodsAction/addFavorite.htm', [{"goodsId": id, "name": name, "code": code, "dimension": dimension, "type": type, "notes": notes}])
                //     .then(function(data) {
                        requestApi.alert('收藏成功');
                        window.location.reload();
                        //关闭弹出框
                        $scope.isShadow = false;
                        $scope.isShoucang = false;
                    // }, function(error) {
                    //     requestApi.alert(error);
                    // })
            }

        }
        //加入清单按钮
        // $scope.addList = function(count, qwprice, remarks) {
        //
        //     requestApi.getData('ShoppingAction/addCarItem.htm', [id, count, qwprice, remarks])
        //         .then(function(data) {
        //             window.bridge.callHandler('invokeHFAlert', {'content': '成功加入清单', 'buttons': [{'name': '确定'}] }, function(response) {
        //                 console.log(response);
        //             })
        //         }, function(error) {
        //             console.log(error);
        //         })
        // }

        // requestApi.getData('GoodsAction/listCustomServiceByGoods.htm', [id])
        //             .then(function (data) {
                          var data = [];
                          var tel = localStorage.getItem('detailTel');

                        // console.log(data);
                        // if (data.length == 0) {
                        //     $scope.chat.isOnline = false;
                        // } else if (data.length >= 1) {
                        //     $scope.chat = data;
                        // }
                        angular.fromJson(data).forEach(function(item) {
                            item.goodsId = id;
                            item.phoneString = tel;
                        })

                        localStorage.setItem('chatData', angular.toJson(data));
                    // }, function (error) {
                    //     requestApi.alert(error);
                    // })


        //聊天调用
        $scope.chat = function () {
            var chatData = localStorage.getItem('chatData');

            requestApi.chat(angular.fromJson(chatData));

        }

        //加入购物车
        $scope.addShop = function (count, qwprice, remarks) {
            var purchaseNum = localStorage.getItem('purchaseNum');

            if(count == 0) {
                requestApi.alert('请修改数量');
            } else {
                if (purchaseNum.length != 0) {
                    // requestApi.getData('ShoppingAction/updateCar.htm', [id, count])
                    //     .then(function (data) {
                            requestApi.alert('加入购物车成功');
                        // }, function(error) {
                        //     requestApi.alert(error);
                        // })
                } else {
                    // requestApi.getData('ShoppingAction/addCarItem.htm', [id, count, qwprice, remarks])
                    // then(function (data) {
                        requestApi.alert('加入购物车成功');
                    // }, function (error) {
                    //     requestApi.alert(error);
                    // })
                }
            }



        }

    }
    //imageloop directive
    function imageLoopDirective($log) {
        return {
            restrict: 'A',
            link: function(scope, element, atts) {
                element.addClass('bxslider');


                 $('.bxslider').bxSlider({
                    onSliderLoad: function(currentIndex) {
                        $('.bx-wrapper').css({
                            'margin': 0,
                            'margin-bottom': 0.74 + 'rem'
                        });
                        $('.bx-pager').hide();

                        var len = $('.bxslider li').length - 2;
                        $('.cgmall-imgloop-index span').eq(2).text(len);
                    },
                    onSlideAfter: function($slideElement, oldIndex, newIndex) {
                        $('.cgmall-imgloop-index span').eq(0).text(newIndex+1);
                    }
                })

            }
        }
    }
    //imageloopreview directive
    function imageLoopReviewDirective() {
        return {
            restrict: 'A',
            link: function(scope, element, atts) {
                element.addClass('bxslider_copy');

                var bxslider = $('.bxslider_copy').bxSlider({
                    onSliderLoad: function(currentIndex) {
                        $('.bx-wrapper').css({
                            'margin': 0,
                            'margin-bottom': 0.74 + 'rem'
                        });
                        $('.bx-pager').hide();
                    }
                })
            }
        }
    }
})();
