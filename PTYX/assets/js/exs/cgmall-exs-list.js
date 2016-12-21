;(function() {
    'use strict';
    angular.module('cgmall')
        .controller('ExsCtrl', exscontroller)

    /**
     * 直通车控制器
     * author: yaodong
     */
    function exscontroller($scope, requestApi) {
        $scope.buy = function(event) {
            event.preventDefault();
            $scope.isPop = true;
            $scope.isShadow = true;
        };

        //close pop
        $scope.close = function() {
            $scope.isPop = false;
            $scope.isShadow = false;
        };

        //qty function
        $scope.plus = function() {
            $scope.count++;
        };

        $scope.reduce = function() {
            if ( $scope.count <= 1 ) return;
            $scope.count--;
        };

        //filter pop out
        $scope.filter = function() {
            $scope.isShadow = true;
            $scope.isFilterShow = true;
        }

        //filter close
        $scope.closeFilter = function() {
            $scope.isShadow = false;
            $scope.isFilterShow = false;

        }
    }
})();