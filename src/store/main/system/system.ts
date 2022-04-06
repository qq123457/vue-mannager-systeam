import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ISystemSate } from "./types";
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/main/system/system";
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
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
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
    },
    changeDepartmentCount(state, departmentCount: number) {
      state.departmentCount = departmentCount;
    },
    changeDepartmentList(state, departmentList: any[]) {
      state.departmentList = departmentList;
    },
    changeCategoryList(state, categoryList: any[]) {
      state.categoryList = categoryList;
    },
    changeCategoryCount(state, categoryCount: number) {
      state.categoryCount = categoryCount;
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

      // 2. 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo);
      // 3. 将数据存储到state
      const { list, totalCount } = pageResult.data;

      commit(`change${firstUpperCase(pageName)}List`, list);
      commit(`change${firstUpperCase(pageName)}Count`, totalCount);
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      const pageName = payload.pageName;
      const id = payload.id;
      const pathUrl = `${pageName}/${id}`;
      await deletePageData(pathUrl);

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async createPageDataAction({ dispatch }, payload: any) {
      // 1. 创建数据请求
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;

      await createPageData(pageUrl, newData);

      // 2. 请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    },
    async editPageDataAction({ dispatch }, payload: any) {
      // 1. 编辑数据请求
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      await editPageData(pageUrl, editData);

      // 2. 请求最新数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      });
    }
  }
};

export default systemModule;
