import { createApp } from "vue";
// 重置css样式
import "normalize.css";
import "./assets/css/index.less";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "@/service/axios_demo";
import App from "@/App.vue";

import router from "@/router";
import store from "@/store";
import { registerComponent } from "@/global";
// import acRequest from "./service";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(registerComponent);
// app.use(ElementPlus);

app.mount("#app");

// console.log(process.env.VUE_APP_BASE_URL);
// console.log(process.env.VUE_APP_BASE_NAME);

// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }

// acRequest
//   .request<DataType>({
//     url: "/post",
//     method: "POST",
//     data: {
//       name: "acwink",
//       age: "18"
//     },
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log("单独请求拦截");
//         return config;
//       },
//       responseInterceptor: (res) => {
//         console.log("单独返回值拦截");
//         return res;
//       }
//     },
//     showLoading: true
//   })
//   .then(
//     (res) => {
//       console.log(res);
//       // console.log(res.data);
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
