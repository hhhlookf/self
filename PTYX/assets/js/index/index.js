;(function() {
  'use strict';

    angular.module('cgmall')
        .controller('Index', index)


    function index($scope, requestApi, $window) {
        var vm = this;

        vm.tabItem = [
            {
                'title': '中西药品'
            },
            {
                'title': '医疗器械'
            },
            {
                'title': '医用耗材'
            }
        ];

        vm.ifSelect = 0;
        vm.tab = function(index) {
            vm.ifSelect = index;
        }

        //获取中西药品 医疗器械 耗材数据
        // requestApi.getData('MainAction/getTheme.htm', ['theme.shop.drug', 0, 100])
        //     .then(function(data) {
                var data = {"title":"中西药品","items":[
                    {"period":false,"bargainAble":true,"goodsId":168416,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168176,"format":"5g","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":1,"name":"板蓝根","options":[{"val":"梁丽婷供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"5g","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"梁丽婷供应商","id":168176,"supplierTel":"18850998507","dimension":"5g","goodsName":"板蓝根","oemflag":false,"bargainType":2}
                    ,{"period":false,"bargainAble":true,"goodsId":1616,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168176,"format":"5g","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":1,"name":"板蓝根","options":[{"val":"梁丽婷供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"5g","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"梁丽婷供应商","id":168176,"supplierTel":"18850998507","dimension":"5g","goodsName":"板蓝根","oemflag":false,"bargainType":2}
                    ,{"period":false,"bargainAble":true,"goodsId":116,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168176,"format":"5g","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":1,"name":"板蓝根","options":[{"val":"梁丽婷供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"5g","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"梁丽婷供应商","id":168176,"supplierTel":"18850998507","dimension":"5g","goodsName":"板蓝根","oemflag":false,"bargainType":2}
                ]};
                vm.infoitems_0 = data.items;
              // })

        // requestApi.getData('MainAction/getTheme.htm', ['theme.shop.machine', 0, 100])
        //     .then(function(data) {
                var data2 = {"title":"医疗器械","items":[{"period":false,"bargainAble":true,"goodsId":10,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168176,"format":"5g","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":1,"name":"板蓝根","options":[{"val":"梁丽婷供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"5g","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"梁丽婷供应商","id":168176,"supplierTel":"18850998507","dimension":"5g","goodsName":"板蓝根","oemflag":false,"bargainType":2}
                    ,{"period":false,"bargainAble":true,"goodsId":168323,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":5,"name":"测试商品11","options":[{"val":"吴洪浦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"吴洪浦供应商","id":168323,"supplierTel":"18059586010","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}]};
                vm.infoitems_1 = data2.items;
            // });

        // requestApi.getData('MainAction/getTheme.htm', ['theme.shop.material', 0, 100])
        //     .then(function(data) {
                var data3 = {"title":"医用耗材","items":[{"period":false,"bargainAble":true,"goodsId":125,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168176,"format":"5g","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":1,"name":"板蓝根","options":[{"val":"梁丽婷供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"5g","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"梁丽婷供应商","id":168176,"supplierTel":"18850998507","dimension":"5g","goodsName":"板蓝根","oemflag":false,"bargainType":2}
                    ,{"period":false,"bargainAble":true,"goodsId":16622,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":15,"name":"测试商品11","options":[{"val":"黄丽钦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"黄丽钦供应商","id":168416,"supplierTel":"18060488071","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2},{"period":false,"bargainAble":true,"goodsId":168176,"format":"5g","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":1,"name":"板蓝根","options":[{"val":"梁丽婷供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"5g","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"梁丽婷供应商","id":168176,"supplierTel":"18850998507","dimension":"5g","goodsName":"板蓝根","oemflag":false,"bargainType":2}
                    ,{"period":false,"bargainAble":true,"goodsId":168323,"format":"10ml*12","collected":false,"saleable":true,"salenum":0,"unit":"盒","price":5,"name":"测试商品11","options":[{"val":"吴洪浦供应商","prop":"s3","title":"供应商"},{"val":"测试0806","prop":"s4","title":"采购渠道"},{"val":"10ml*12","prop":"s5","title":"规格"},{"val":"1","prop":"s10","title":"起批量"},{"val":"盒","prop":"s6","title":"单位"}],"minPurchaseNum":1,"company":"吴洪浦供应商","id":168323,"supplierTel":"18059586010","dimension":"10ml*12","goodsName":"测试商品11","oemflag":false,"bargainType":2}]};
                vm.infoitems_2 = data3.items;
            // })

        //获取顶部banner
        // requestApi.getData('MainAction/getBanner.htm', ['app.main.top'])
        //     .then(function(data) {
                var data4 = [{},{},{},{}];
                vm.items = data4;
            // }, function(error) {
            //     console.log(error);
            // });

        //获取主题馆
        // requestApi.getData('MainAction/getBanner.htm', ['app.main.theme'])
        //     .then(function(data) {
                var data5 =[{"code":"theme.drug","title":"药品馆"},{"code":"theme.machine","title":"器械馆"},{"code":"theme.material","title":"耗材馆"},{"code":"theme.man","title":"男科馆"},{"code":"theme.woman","title":"妇科馆"},{"code":"theme.pretty","title":"美容馆"}];
                vm.themes = data5;
            // }, function(error) {
            //     console.log(error);
            // })

        //跳转到主题馆
        vm.linkToTheme = function(which) {
            // angular.toJson(code);
            // localStorage.setItem('theme-code', code);
            localStorage.setItem('theme-which', which);
            requestApi.redirect('main-hall.html');
        }

        vm.linkToDetail = function(goodsId) {
            localStorage.setItem('goodsId', goodsId);
            requestApi.redirect('detail.html');
        }
    }
})();

