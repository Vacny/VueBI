import axios from 'axios'
import store from "./store"

//axios设置
function setSource() {
  let CancelToken = axios.CancelToken;
  let source = CancelToken.source();
  return source
}

//请求超时时限 我设置1000毫秒
// axios.defaults.timeout = 1000;
//超时请求次数
axios.defaults.retry = 4;
//等待token请求次数
axios.defaults.retryT = 10;
//请求的间隙
axios.defaults.retryDelay = 1000;
//请求基本路径
axios.defaults.baseURL = 'http://192.168.0.106:8081/';
//允许携带Cookie
axios.defaults.withCredentials = true;
//设置请求头数据格式
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
//axios设置拦截器，更新token
axios.interceptors.request.use((config) => {
  config.source = setSource();
  config.cancelToken = config.source.token;
  // config.headers.Cookie = 'JSESSIONID=390BB92D56F658BDD611CBF365113E37';
  // console.log(config)
  return config;
  // 以防cookie失效，所以每次发请求都重新获取token
  if (store.state.token && !store.state.isLock) {
    config.headers.Authorization = 'token:' + store.state.token;
    return config
  } else {
    // console.log('cancel')
    //中断请求，连续请求
    config.source.cancel();

    var config = config;
    // Create new promise to handle exponential backoff
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1);
    });
    return backoff.then(function () {
      return axios(config);
    });
  }
}, (error) => {
  return Promise.reject(error)
});

axios.interceptors.response.use((res) => {
  let response = res;
  console.log(res)
  //token过期重发，等待token重发
  if (response.data.code == 100002) {
    // response = false
    window.postMessage("isLock", "*");
    store.state.isLock = true;

    var config = res.config;
    config.__retryCount = config.__retryCount || 0;

    if (config.__retryCount >= config.retryT) {
      // Reject with the error
      //window.location.reload();
      return Promise.reject(response);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        //console.log('resolve');
        resolve();
      }, config.retryDelay || 1);
    });
    return backoff.then(function () {
      return axios(config);
    });
  } else {
    return Promise.resolve(response);
  }

}, (error) => {
  /*请求错误时做些事*/
  // console.log(error.code)
  //请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
  // if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
  //   var config = error.config;
  //   config.__retryCount = config.__retryCount || 0;
  //
  //   if (config.__retryCount >= config.retry) {
  //     // Reject with the error
  //     //window.location.reload();
  //     return Promise.reject(error);
  //   }
  //
  //   // Increase the retry count
  //   config.__retryCount += 1;
  //
  //   // Create new promise to handle exponential backoff
  //   var backoff = new Promise(function (resolve) {
  //     setTimeout(function () {
  //       //console.log('resolve');
  //       resolve();
  //     }, config.retryDelay || 1);
  //   });
  //
  //   return backoff.then(function () {
  //     return axios(config);
  //   });
  // } else {
  //   return Promise.reject(error);
  // }
});

export default axios
