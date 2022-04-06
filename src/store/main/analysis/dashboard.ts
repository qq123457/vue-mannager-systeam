import { Module } from "vuex";
import { IDashboardState } from "./types";
import { IRootState } from "@/store/types";
import {
  getAddressGoodsSale,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getCategoryGoodsCount
} from "@/service/main/analysis/dashboard";
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsFavor: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsFavor(state, list: any[]) {
      state.categoryGoodsFavor = list;
    },
    changeAddressGoodsSale(state, list: any[]) {
      state.addressGoodsSale = list;
    },
    changeCategoryGoodsCount(state, list: any[]) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list: any[]) {
      state.categoryGoodsSale = list;
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryAddressSaeResult = await getAddressGoodsSale();
      commit("changeAddressGoodsSale", categoryAddressSaeResult.data);
      const categoryGoodsCountResult = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", categoryGoodsCountResult.data);
      const categoryGoodsFavorResult = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", categoryGoodsFavorResult.data);
      const categoryGoodsSaleResult = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", categoryGoodsSaleResult.data);
    }
  }
};

export default dashboardModule;
