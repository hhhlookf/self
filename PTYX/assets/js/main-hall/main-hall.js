;(function() {
    'use strict';
    angular.module('cgmall')
        .controller('MainHall', mainHall)

    function mainHall(requestApi, $window) {
        var vm = this;
        //var themeCode = localStorage.getItem('theme-code');
        var themeWhich = localStorage.getItem('theme-which');
        // requestApi.getData('MainAction/getTheme.htm', [themeCode,0,100])
        //     .then(function(data) {
                var data1 = {"banner":[{"image":"assets/images/banner/theme.drug/1.png"}],"title":"医药馆","items":[{"period":false,"bargainAble":true,"goodsId":168551,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":16,"name":"测试商品11","options":[{"val":"gys1","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"gys1","id":168551,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168416,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}]}
                var data2 = {"banner":[{"image":"assets/images/banner/theme.machine/1.png"}],"title":"器械馆","items":[{"period":false,"bargainAble":true,"goodsId":168323,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":5,"name":"测试商品11","options":[{"val":"吴洪浦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"吴洪浦供应商","id":168323,"supplierTel":"18059586010","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}]};
                var data3 = {"banner":[{"image":"assets/images/banner/theme.material/1.png"}],"title":"耗材馆","items":[{"image":"3899108d7806422f9d8c3f6d7f1bb688","period":false,"bargainAble":true,"goodsId":169884,"format":"注明具体规格","collected":false,"saleable":true,"salenum":0,"unit":"套","price":165,"imageUrl":"http://imgtest.ptyxjy.com/3899108d7806422f9d8c3f6d7f1bb688?OSSAccessKeyId=z…oYieQKMe09X1&Signature=/TnV6%2BdQKRmr1qBOPcpWgZ4wCuk%3D&Expires=1481167248","name":"血液透析导管穿刺包","options":[{"val":"ptds","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"注明具体规格","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"套","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"ptds","id":169884,"supplierTel":"15013760005","dimension":"注明具体规格","goodsName":"血液透析导管穿刺包","oemflag":false,"bargainType":2}]};
                var data4 = {"banner":[{"image":"assets/images/banner/theme.man/1.png"}],"title":"男科馆","items":[{"period":false,"bargainAble":true,"goodsId":168244,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":12,"name":"测试商品11","options":[{"val":"苏靖涵供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"苏靖涵供应商","id":168244,"supplierTel":"13959553558","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168022,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":8,"name":"测试商品11","options":[{"val":"zhuzxgys1","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"zhuzxgys1","id":168022,"supplierTel":"18359126879","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168223,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":30,"name":"测试商品11","options":[{"val":"GuoJPgys","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"GuoJPgys","id":168223,"supplierTel":"15160266541","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}]};
                var data5 = {"banner":[{"image":"assets/images/banner/theme.woman/1.png"}],"title":"妇科馆","items":[
                    {"period":false,"bargainAble":true,"goodsId":168008,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":20,"name":"测试商品11","options":[{"val":"陈杰龙供应商1","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"10","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":10,"company":"陈杰龙供应商1","id":168008,"supplierTel":"18950784058","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}
                    ]};
                var data6 = {"banner":[{"image":"assets/images/banner/theme.pretty/1.png"}],"title":"美容馆","items":[
                    {"period":false,"bargainAble":true,"goodsId":168008,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":20,"name":"测试商品11","options":[{"val":"陈杰龙供应商1","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"10","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":10,"company":"陈杰龙供应商1","id":168002,"supplierTel":"18950784058","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}
                ]};
                var dataArr = [data1,data2,data3,data4,data5,data6];
                var data = dataArr[themeWhich];
                console.log(data);
                vm.banners = angular.fromJson(data.banner);
                vm.items = data.items;

                // requestApi.showTitle('主题馆');

                //mock data

            // })

        var scrollHeight = document.body.scrollHeight;

        window.onscroll = function() {
            var bodyHeight = document.body.clientHeight,
                scrollDis = bodyHeight - scrollHeight;
            if ( document.body.scrollTop > scrollDis - 20 ) {

            }
        }

        //link to detail
        vm.linkToDetail = function(id) {

            localStorage.setItem('goodsId', id);
            //setupWebViewJavascriptBridge(function(bridge) {
            //    bridge.callHandler('openWebView', {'linkUrl': 'detail.html' }, function(response) {
            //        console.log(response);
            //    })
            //})
            // window.bridge.callHandler('openWebView', {'linkUrl': 'detail.html' }, function(response) {
            //     console.log(response);
            // })
            requestApi.redirect('detail.html');
        }
    }

})();
