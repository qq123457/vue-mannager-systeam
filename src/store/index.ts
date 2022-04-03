import { createStore, useStore as useVueStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import login from "./login/login";
import system from "./main/system/system";
import { Store } from "element-plus/es/components/table/src/store";

const store = createStore<IRootState>({
  state() {
    return {
      name: "acwink",
      age: 18
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login,
    system
  }
});

export function setupStore() {
  store.dispatch("login/loadLocalStora");
}

export function useStore(): Store<IStoreType> {
  return useVueStore();
}
export default store;
