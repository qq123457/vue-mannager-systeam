import { createStore, useStore as useVueStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import login from "./login/login";
import system from "./main/system/system";
import dashboard from "./main/analysis/dashboard";
import { Store } from "element-plus/es/components/table/src/store";
import { getPageListData } from "@/service/main/system/system";
const store = createStore<IRootState>({
  state() {
    return {
      name: "acwink",
      age: 18,
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
      entireUser: [],
      entireCategory: []
    };
  },
  mutations: {
    changeEntireDepartment(state, entireDepartment: any[]) {
      state.entireDepartment = entireDepartment;
    },
    changeEntireRole(state, entireRole: any[]) {
      state.entireRole = entireRole;
    },
    changeEntireMenu(state, entireMenu: any[]) {
      state.entireMenu = entireMenu;
    },
    changeEntireUser(state, entireUser: any[]) {
      state.entireUser = entireUser;
    },
    changeEntireCategory(state, entireCategory: any[]) {
      state.entireCategory = entireCategory;
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 1. 请求部门和角色数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 100
      });
      const { list: departmentList } = departmentResult.data;

      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 100
      });
      const { list: roleList } = roleResult.data;

      const menuResult = await getPageListData("/menu/list", {});
      const { list: menuList } = menuResult.data;

      const usersResult = await getPageListData("/users/list", {});
      const { list: userList } = usersResult.data;

      const categoryResult = await getPageListData("/category/list", {});
      const { list: categoryList } = categoryResult.data;

      // 2. 保存数据

      commit("changeEntireDepartment", departmentList);
      commit("changeEntireRole", roleList);
      commit("changeEntireMenu", menuList);
      commit("changeEntireUser", userList);
      commit("changeEntireCategory", categoryList);
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
});

export function setupStore() {
  store.dispatch("login/loadLocalStora");
  store.dispatch("getInitialDataAction");
}

export function useStore(): Store<IStoreType> {
  return useVueStore();
}
export default store;
