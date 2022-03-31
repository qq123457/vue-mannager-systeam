import axios from "axios";

// axios 实例对象

axios.defaults.baseURL = "https://httpbin.org";
axios.defaults.timeout = 100000;
axios.interceptors.request.use(
  (config) => {
    // 做想做的操作
    // 1. 添加 token
    // 2. 添加 loading
    console.log("请求拦截成功");
    return config;
  },
  (err) => {
    console.log("请求发生错误");
    return err;
  }
);
axios.interceptors.response.use(
  (res) => {
    console.log("响应拦截成功");
    return res;
  },
  (err) => {
    console.log("服务器响应失败");
    return err;
  }
);

axios
  .all([
    axios.get("/get", { params: { name: "acwink" } }),
    axios.post("/post", { data: { name: "acwink" } })
  ])
  .then((res) => {
    console.log(res);
  });
