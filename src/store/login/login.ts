import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import {
  accountLoginRequest,
  useInfoByIdRequest,
  userMenuByIdRequest
} from "@/service/login/login";
import { IAccount } from "@/service/login/type";
import localCache from "@/utils/cache";
import router from "@/router";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any[]) {
      state.userMenus = userMenus;
    }
  },
  getters: {},
  actions: {
    async accountLogin({ commit }, palyload: IAccount) {
      // 1. 登录逻辑实现
      const loginResult = await accountLoginRequest(palyload);
      const { id, token } = loginResult.data;
      console.log(loginResult);
      // 拿到后台的 token， 保存到 vuex
      commit("changeToken", token);
      // 将token保存到本地storage
      localCache.setCache("token", token);
      // 2. 请求用户信息
      const userInfoResult = await useInfoByIdRequest(id);
      const userInfo = userInfoResult.data;
      commit("changeUserInfo", userInfo);
      // 缓存用户信息
      localCache.setCache("userInfo", userInfo);

      // 3. 获取用户菜单
      const userMenuResult = await userMenuByIdRequest(id);
      const userMenus = userMenuResult.data;
      commit("changeUserMenus", userMenus);
      localCache.setCache("userMenus", userMenus);

      // 4. 跳转到首页
      router.push("/main");
    },
    // phoneLoginAction({ commit }, palyload: any) {
    //   console.log("执行phoneLoginAction");
    // }
    loadLocalStora({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const userMenus = localCache.getCache("userMenus");
      if (userMenus) {
        commit("changeUserMenus", userMenus);
      }
    }
  }
};

export default loginModule;