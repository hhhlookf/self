/**
 * Created by chargo on 2015/6/6.
 */
var myHTML = document.querySelector("html"),
  myWidth = myHTML.clientWidth;

myHTML.style.fontSize = 3 * myWidth / 80 + 'px';

window.onresize = function () {
  var myHTML = document.querySelector("html"),
    myWidth = myHTML.clientWidth;
  myHTML.style.fontSize = 3 * myWidth / 80 + 'px';
};


//交互方法
function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }
  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
setupWebViewJavascriptBridge(
  function (bridge) {
    window.bridge = bridge;
  }
)

angular.module('cgmall', ['hmTouchEvents'])
  .factory('getUrl', function () {
    var url = window.location.search.substring(1);
    var paramsStr = url.split('&');
    var params = {};

    for (var i in paramsStr) {
      params[paramsStr[i].split('=')[0]] = paramsStr[i].split('=')[1]
    }

    function getId() {
      return params.id
    }

    function getParameter(key) {
      return params[key]
    }

    return {
      getId: getId,
      getParameter: getParameter
    }
  })
  .factory('requestApi', ['$http', '$q', function ($http, $q) {

    /**
     * 调用接口
     * @param url {String}    接口地址
     * @param params {Array}  参数列表
     * @returns {d.promise|*|promise|d}
     * @example
     *   requestApi
     *     .getData('OrderCommitAction/listOrders.htm', ['参数1','参数2'])
     *     .then(function(data) {
       *       // 成功
       *     }, function(reason) {
       *       // 失败
       *     })
     */

    function getData(url, params) {
      var defer = $q.defer();
       var baseUrl = 'http://192.168.1.58:9092/app/appinvoke';
      //var baseUrl = 'http://123.56.3.4:9092/app/appinvoke';
      //var baseUrl = 'http://' + window.location.host + '/app/appinvoke';

      var paramsObj = {
        data: {
          port: '',
          args: [],
          //sid: 'MjJhYjNiNjI1N2M2NGZjMWE5ZWI4NDczNDZiN2I3OWI=_fe4ea51a794a5cd9c59e9a6e8f48f2b6' //买家
          sid: 'Mzc0MzFkMWU4YTE2NDFiMTg2M2JiYzE3NWE5ZDljNzE=_33ea97158be2e5dfb920cf138acb6788'  //卖家
          //sid: sid
        }
      };
      url = url.substring(0, url.length - 4);

      //设置参数
      paramsObj.data.args = params || [];
      paramsObj.data.port = (url.split('/')[0] + '.' + url.split('/')[1]) || '';

      $http({
        method: 'GET',
        url: baseUrl,
        params: paramsObj
      }).success(function (data) {
        if (data.success) {
          defer.resolve(data.data);
        }
        // else if (data.errorCode == 'needLogin') {
        //   window.bridge.callHandler('showLoginUI');
        // } else if (data.errorCode == 'showMessage') {
        //   window.bridge.callHandler('invokeHFAlert', {
        //     'title': '友情提示',
        //     'content': data.errorMsg,
        //     'buttons': [
        //       {'name': '确定'}
        //     ]
        //   })
        // }
        // else {
        //   window.bridge.callHandler('invokeHFAlert', {
        //     'title': '友情提示',
        //     'content': '系统未知异常',
        //     'buttons': [
        //       {'name': '确定'}
        //     ]
        //   })
        // }
      }).error(function (reason) {
        defer.reject('接口调用异常！');
      });
      return defer.promise;

      // setupWebViewJavascriptBridge(function (bridge) {
      //   bridge.callHandler('getSid', {}, function (sid) {
      //
      //   })
      // });


    }

    /**
     * 客服聊天
     */
    function chat(arr) {
      if (window.bridge) {
        var paramArr = arr || [];
        window.bridge.callHandler("openChatUI", {"chatInfoList": paramArr});
        // window.bridge.callHandler("openChatUI", function(resultValue){
        //
        // }) ;
      } else {
        alert('客服服务调用失败');
      }
    }

    /**
     * 登录
     */
    function login() {
      window.bridge.callHandler('showLoginUI');
    }

    /**
     * 页面跳转
     */
    function redirectFn(url, callback) {
      if (window.bridge) {
        window.bridge.callHandler('openWebView', {'linkUrl': url}, callback)
      } else {
        location.href = url;
        callback && callback();
      }
    }

    /**
     * 日历调用
     */
    function calendarFn(timeFormat, callback) {
      if (window.bridge) {
        window.bridge.callHandler('invokeHFCalendar', timeFormat, callback);
      } else {
        window.alert('日历不存在');
      }
    }

    /**
     * localstorage数据不存在的时候
     */
    function dataErrorhandleFn() {
      if (window.bridge) {
        window.bridge.callHandler('invokeHFAlert', {
          'title': '友情提示',
          'content': '程序出现异常，请重新启动软件',
          'buttons': [
            {'name': '确定'}
          ]
        }, back)
      } else {
        window.alert('程序出现异常，请重新启动软件')
      }
    }

    /**
     * 页面关闭
     */
    function backFn() {
      if (window.bridge) {
        window.bridge.callHandler("closeWebView");
      } else {
        history.back();
      }
    }

    /**
     * 后退并刷新，根据index值绝对后退几步,0代表后退一步，1代表后退两步，以此类推，默认是0
     * @param index
     */
    function backAndRefreshFn(index) {
      index = index || 0;
      if (window.bridge) {
        window.bridge.callHandler("closeWebViewAndReloadPreviousWebView", {
          previousWebViewIndex: index
        });
      } else {
        history.go(-index - 1);
      }
    }

    function alertFn(msg, callback) {
      if (window.bridge) {
        window.bridge.callHandler('invokeHFAlert', {
          'title': '友情提示',
          'content': msg,
          'buttons': [
            {'name': '确定'}
          ]
        }, function (flag) {
          callback && callback();
        })
      } else {
        window.alert(msg);
        callback && callback();
      }
    }

    function confirmFn(msg, callback) {
      if (window.bridge) {
        window.bridge.callHandler('invokeHFAlert', {
          'title': '友情提示',
          'content': msg,
          'cancelBtn': '取消',
          'buttons': [
            {'name': '确定'}
          ]
        }, function (flag) {
          if (flag !== 'cancel') {
            callback && callback(flag);
          }
        })
      } else {
        if (window.confirm(msg)) {
          callback && callback();
        }
      }
    }

    function showTitle(title, callback) {
      if (window.bridge) {
        window.bridge.callHandler("setNavigationBarTitle", {'title': title}, callback);
      } else {
        alert('程序出现异常，请重新启动软件');
      }
    }

    function handleBackRefreshFn() {
      window.bridge.registerHandler('nativeCallHandler_notificationHfiveWillBackPreviousWebView',
        function (responseData, callback) {
          if (callback) {
            callback();
          }
          window.bridge.callHandler("webViewAndReloadPreviousWebView", {
            previousWebViewIndex: 0
          });
        }
      );

    }

    function gotoListPageFn() {
      window.bridge.callHandler('backToRootCommonListVClr', {'needRefreshRootCommonListVClr': true});
    }

    function saveLocalDataFn(data) {
      if (window.bridge) {
        window.bridge.callHandler('saveLocalData', data);
      } else {
        alert('程序出现异常，请重新启动软件');
      }
    }

    function getLocalDataFn(callback) {
      if (window.bridge) {
        window.bridge.callHandler('getLocalData', callback);
      } else {
        // alert('程序出现异常，请重新启动软件');
      }
    }

    function reloadCurrentActivityWebViewPageFn(path, pathType) {
      if (window.bridge) {
        window.bridge.callHandler('reloadCurrentActivityWebViewPage', {"path": path, "pathType": pathType});
      } else {
        // alert('程序出现异常，请重新启动软件');
      }
    }

    return {
      getData: getData,                       //调用服务器接口
      redirect: redirectFn,                   //跳转
      dataErrorhandle: dataErrorhandleFn,     //数据丢失处理

      back: backFn,                           //后退
      backAndRefresh: backAndRefreshFn,         //后退并刷新
      handleBackRefresh: handleBackRefreshFn, //点击左上角的返回时返回并刷新上一个页面
      gotoListPage: gotoListPageFn,           //返回原生做的列表页
      saveLocalData: saveLocalDataFn,       //保存红包不显示的标志，传true表示不显示，传false表示可以显示
      getLocalData: getLocalDataFn,          // 获取本地数据
      reloadCurrentActivityWebViewPage: reloadCurrentActivityWebViewPageFn, //刷新当前页面
      alert: alertFn,                         //警告框
      confirm: confirmFn,                     //确认框
      calendar: calendarFn,
      showTitle: showTitle,
      login: login,
      chat: chat                             //聊天

    }
  }
  ]);