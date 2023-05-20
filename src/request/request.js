import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  });
  //1.请求拦截(拦截到本次的请求)
  instance.interceptors.request.use(
    (config) => {
      // console.log(config) //这里是本次请求的参数
      //作用
      //1.比如config中的一些信息不符合服务器的要求，那么就可以在这里处理
      //2.比如每次发送网络请求时，都希望在界面中显示一个请求图标
      //3.某些网络请求(比如登录(token)),必须携带一些特殊的信息
      return config; //如果不返回,外面就无法使用
    },
    (err) => {
      //拦截失败
      console.log(err);
    }
  );
  // 2.响应拦截(拦截到返回的结果)
  instance.interceptors.response.use(
    (result) => {
      // console.log(result) //获取到成功的数据
      //可以在这里先一步处理拦截到的数据，再返回出去
      return result.data; //如果不返回，外面接收不到数据
    },
    (err) => {
      //拦截失败
      console.log(err);
    }
  );

  return instance(config);
}
