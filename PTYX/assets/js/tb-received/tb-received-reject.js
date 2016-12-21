;(function() {
    'use strict';
    
    angular.module('cgmall')
        .controller('Reject', reject)
    
    function reject(requestApi) {
        var vm = this;

        vm.ifShowimg = true;
        vm.val = function(val) {
            if ( val !== undefined ) {
                if (val.trim().length == 0) {
                    vm.ifShowimg = true;
                } else {
                    vm.ifShowimg = false;
                }
            }
        }

        //var id = '386'; //临时ID
        var id = localStorage.getItem('tbreceivedId');
        vm.sub = function(txt) {
            // requestApi.getData('OrderReceiveAction/rejectOrder.htm', [id, txt])
            //     .then(function(data) {
            //         requestApi.alert('提交成功', function() {
                        requestApi.alert('提交成功', function () {
                            requestApi.redirect('tb-received-detail.html');
                        });

                //     });
                // }, function(error) {
                //     console.error(error);
                // })
        }

    }
})();