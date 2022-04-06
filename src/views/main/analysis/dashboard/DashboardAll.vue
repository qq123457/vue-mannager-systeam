<template>
  <div class="dashboardall">
    <el-row :gutter="10">
      <el-col :xl="7" :lg="7" :md="12" :xs="24" :sm="24">
        <ac-card title="分类商品数量(饼图)">
          <ac-pie-echart :pie-data="categoryGoodsCount"></ac-pie-echart>
        </ac-card>
      </el-col>
      <el-col :xl="10" :lg="10" :md="12" :xs="24" :sm="24">
        <ac-card title="不同城市商品销量">
          <ac-map-echart :map-data="addressGoodsSale"></ac-map-echart>
        </ac-card>
      </el-col>
      <el-col :xl="7" :lg="7" :md="12" :xs="24" :sm="24">
        <ac-card title="分类商品数量(玫瑰图)">
          <ac-rose-echart :rose-data="categoryGoodsCount"></ac-rose-echart>
        </ac-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :xl="12" :lg="12" :md="12" :xs="24" :sm="24">
        <ac-card title="分类商品数量">
          <ac-line-echart title="" v-bind="categoryGoodsSale"></ac-line-echart>
        </ac-card>
      </el-col>
      <el-col :xl="12" :lg="12" :md="12" :xs="24" :sm="24">
        <ac-card title="分类商品收藏">
          <ac-bar-echart v-bind="categoryGoodsFavor"></ac-bar-echart>
        </ac-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { useStore } from "@/store";
import AcCard from "@/base-ui/card";
import {
  AcPieEchart,
  AcRoseEchart,
  AcLineEchart,
  AcBarEchart,
  AcMapEchart
} from "@/components/page-echarts";

export default defineComponent({
  name: "DashboardAll",
  components: {
    AcCard,
    AcPieEchart,
    AcRoseEchart,
    AcLineEchart,
    AcBarEchart,
    AcMapEchart
  },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getDashboardDataAction");

    const categoryGoodsCount = computed(() =>
      store.state.dashboard.categoryGoodsCount.map((item: any) => ({
        name: item.name,
        value: item.goodsCount
      }))
    );

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];

      store.state.dashboard.categoryGoodsSale.forEach((item: any) => {
        xLabels.push(item.name);
        values.push(item.goodsCount);
      });
      return {
        xLabels,
        values
      };
    });

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const values: any[] = [];

      store.state.dashboard.categoryGoodsFavor.forEach((item: any) => {
        xLabels.push(item.name);
        values.push(item.goodsFavor);
      });
      return {
        xLabels,
        values
      };
    });

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => ({
        name: item.address,
        value: item.count
      }));
    });
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    };
  }
});
</script>

<style scoped></style>
