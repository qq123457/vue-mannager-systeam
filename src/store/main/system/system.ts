import { IRootState } from "@/store/types";
import { Module } from "vuex";
import { ISystemSate } from "./types";
import { getPageListData } from "@/service/main/system/system";
const systemModule: Module<ISystemSate, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    };
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList;
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      );

      const { list, totalCount } = pageResult.data;
      commit("changeUserList", list);
      commit("changeUserCount", totalCount);
    }
  }
};

export default systemModule;
