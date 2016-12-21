;(function() {
  'use strict';

  angular
    .module('cgmall')
    .factory('dataOpera', function() {

      /**
       * 获取localStorage上的值
       * @param key{String}  键
       * @returns {Object}   返回key对应的值
       * @example
       *   var itemList = dataOpera.get('itemList');
       */
      function getFn(key) {
        if(localStorage[key]) {
          return JSON.parse(localStorage.getItem(key))
        }
        return null;
      }

      /**
       * 给localStorage设置一个值
       * @param key{String}    键
       * @param value{*}       JSON对象值
       * @example
       *   dataOpera.set('itemList', {name: 'xxx'})
       */
      function setFn(key, value) {
        try {
          localStorage.setItem(key, JSON.stringify(value))
        }catch(e) {
          console.error('参数异常');
        }
      }

      /**
       * 如果是对象，【添加】一个属性值。如果是数组，push一个值，其他不能添加，重复的会覆盖
       * @param key{String}         键
       * @param value{Object|Array} JSON对象值
       * @param [flag='id']{String} 用于识别是否相同的属性值
       * @example
       *   dataOpera.add('itemList', {id: 4, name: 'aaaa'})
       */
      function addFn(key, value, flag) {
        flag = flag || 'id';
        var oldVal = getFn(key);
        try {
          if(Object.prototype.toString.call(oldVal).indexOf('Array') > -1) {
            if(Object.prototype.toString.call(value).indexOf('Array') == -1) {
              value = [value];
            }
            for(var i = oldVal.length-1; i >= 0; i--) {
              for(var j = 0; j < value.length; j++) {
                if(oldVal[i][flag] == value[j][flag]) {
                  oldVal.splice(i, 1);
                }
              }
            }
            oldVal = oldVal.concat(value);
          }else if(Object.prototype.toString.call(oldVal).indexOf('Object') > -1) {
            oldVal[value[flag]] = value;
          }else {
            console.error('您传的值不是数组或对象，不能添加');
          }
          setFn(key, oldVal);
        }catch(e) {
          console.error('参数异常')
        }

      }

      /**
       * 根据flag值【修改】值
       * @param key{String}          键
       * @param value{Object|Array}  JSON对象值
       * @param [flag='id'] {String} 可选，用于识别是否相同的属性值，默认是id
       * @example
       *   dataOpera.update('itemList', {id: 4, name: 'aaaa'})
       */
      function updateFn(key, value, flag) {
        flag = flag || 'id';
        var oldVal = getFn(key);
        try {
          if (Object.prototype.toString.call(oldVal).indexOf('Array') > -1) {
            angular.forEach(oldVal, function (v, index) {
              if (v[flag] == value[flag]) {
                oldVal[index] = value;
              }
            });
          } else if (Object.prototype.toString.call(oldVal).indexOf('Object') > -1) {
            oldVal[flag] = value;
          } else {
            oldVal = value;
          }
          setFn(key, oldVal);
        }catch(e) {
          console.error('参数异常！')
        }
      }

      /**
       * 根据flag值【删除】值
       * @param key{String}         键
       * @param delVal{*}           JSON对象值
       * @param [flag='id']{String} 可选，用于识别是否相同的属性值，默认是id
       * @example
       *   dataOpera.delete('itemList', 4)
       */
      function deleteFn(key, delVal, flag) {
        flag = flag || 'id';
        var oldVal = getFn(key);
        try {
          if (Object.prototype.toString.call(oldVal).indexOf('Array') > -1) {
            angular.forEach(oldVal, function (v, index) {
              if (v[flag] == delVal) {
                oldVal.splice(index, 1);
              }
            });
          } else if (Object.prototype.toString.call(oldVal).indexOf('Object') > -1) {
            delete oldVal[delVal];
          } else {
            console.error('该条数据不是一个数组或对象')
          }
          setFn(key, oldVal);
        }catch(e) {
          console.error('参数异常！')
        }
      }

      return {
        get: getFn,
        set: setFn,
        add: addFn,
        update: updateFn,
        delete: deleteFn
      }
    })

})();