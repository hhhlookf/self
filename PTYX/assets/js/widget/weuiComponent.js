;(function() {
    'use strict';

    angular
        .module('cgmall')
        .factory('weui', weuiFn);

    weuiFn.$inject = ['$timeout'];

    function weuiFn($timeout) {
        return {
            toast  : toastFn,     // 提示框  2秒后自动移除
            loading: loadingFn,   // 加载中  返回一个对象，包含show和hide方法，分别用来显示和隐藏加载框
            alert  : alertFn,     // 警告框  参数：title标题、text内容
            confirm: confirmFn    // 对话框  参数：title标题、text内容、callback确定按钮的回调函数
        };

        function toastFn() {
            var node = document.createElement('div');
            node.setAttribute('id', 'toast');
            node.innerHTML = '\
                <div class="weui_mask_transparent"></div>\
                <div class="weui_toast">\
                    <i class="weui_icon_toast"></i>\
                    <p class="weui_toast_content">已完成</p>\
                </div>';
            document.body.appendChild(node);
            $timeout(function() {
                document.body.removeChild(node);
            }, 2000);
        }

        function loadingFn() {
            var node = document.createElement('div');
            node.setAttribute('id', 'loadingToast');
            node.setAttribute('class', 'weui_loading_toast');
            node.innerHTML = '\
                <div class="weui_mask_transparent"></div>\
                <div class="weui_toast">\
                    <div class="weui_loading">\
                    <div class="weui_loading_leaf weui_loading_leaf_0"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_1"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_2"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_3"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_4"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_5"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_6"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_7"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_8"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_9"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_10"></div>\
                        <div class="weui_loading_leaf weui_loading_leaf_11"></div>\
                    </div>\
                    <p class="weui_toast_content">数据加载中</p>\
                </div>';

            return {
                show: function() {
                    document.body.appendChild(node);
                },
                hide: function() {
                    document.body.removeChild(node);
                }
            }
        }

        function alertFn(title, text) {
            var node = document.createElement('div');
            node.setAttribute('class', 'weui_dialog_alert');
            node.innerHTML = '\
                <div class="weui_mask"></div>\
                    <div class="weui_dialog">\
                    <div class="weui_dialog_hd"><strong class="weui_dialog_title">'+ title +'</strong></div>\
                    <div class="weui_dialog_bd">'+ text +'</div>\
                    <div class="weui_dialog_ft">\
                        <a href="javascript:;" class="weui_btn_dialog primary">确定</a>\
                    </div>\
                </div>';
            document.body.appendChild(node);
            Hammer(node.querySelector('.weui_dialog_ft .primary')).on('tap', function() {
                document.body.removeChild(node);
            });
        }

        function confirmFn(title, text, callback) {
            var node = document.createElement('div');
            node.setAttribute('class', 'weui_dialog_confirm');
            node.innerHTML = '\
                <div class="weui_mask"></div>\
                <div class="weui_dialog">\
                    <div class="weui_dialog_hd"><strong class="weui_dialog_title">'+ title +'</strong></div>\
                    <div class="weui_dialog_bd">'+ text +'</div>\
                    <div class="weui_dialog_ft">\
                        <a href="javascript:;" class="weui_btn_dialog default">取消</a>\
                        <a href="javascript:;" class="weui_btn_dialog primary">确定</a>\
                    </div>\
                </div>';
            document.body.appendChild(node);
            Hammer(node.querySelector('.weui_dialog_ft .default')).on('tap', function() {
                document.body.removeChild(node);
            });
            Hammer(node.querySelector('.weui_dialog_ft .primary')).on('tap', function() {
                document.body.removeChild(node);
                callback && callback();
            });
        }
    }

})();