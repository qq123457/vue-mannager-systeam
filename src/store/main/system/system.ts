import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ISystemSate } from "./types";
import { getPageListData } from "@/service/main/system/system";
import { firstUpperCase } from "@/utils/data-format";
const systemModule: Module<ISystemSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    };
  },
  mutations: {
    changeUsersList(state, usersList: any[]) {
      state.usersList = usersList;
    },
    changeUsersCount(state, usersCount: number) {
      state.usersCount = usersCount;
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList;
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount;
    },
    changeGoodsList(state, goodsList: any[]) {
      state.goodsList = goodsList;
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount;
    },
    changeMenuList(state, menuList: any[]) {
      state.menuList = menuList;
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;

      // switch (pageName) {
      //   case "users":
      //     pageUrl = "/users/list";
      //     break;
      //   case "role":
      //     pageUrl = "/role/list";
      //     break;
      // }

      // 2. 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      // 3. 将数据存储到state
      const { list, totalCount } = pageResult.data;

      commit(`change${firstUpperCase(pageName)}List`, list);
      commit(`change${firstUpperCase(pageName)}Count`, totalCount);
    }
  }
};

export default systemModule;
