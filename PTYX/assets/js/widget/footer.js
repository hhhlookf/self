;(function() {
    'use strict';

    angular
        .module('cgmall')
        .directive('mallFooter', mallFooterFn);

    function mallFooterFn() {
        return {
            restrict: 'E',
            templateUrl: 'widget/footer.html',
            link: linkFn
        };
        function linkFn(scope, ele, attrs) {
            scope.menuItemList = [
                {url: 'cgmall-index.html'   , className: 'index'  , text: '首页'},
                {url: 'cgmall-exs-list.html', className: 'car'    , text: '直通车'},
                {url: 'cgmall-shopcart.html', className: 'shopcar', text: '购物车'},
                {url: 'cgmall-user.html'    , className: 'my'     , text: '我的'}
            ];
            scope.currIndex = -1;
            var currFileName = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
            angular.forEach(scope.menuItemList, function(value, index) {
                if(value.url == currFileName) {
                    value.url = '';
                    scope.currIndex = index;
                }
            });
        }
    }

})();