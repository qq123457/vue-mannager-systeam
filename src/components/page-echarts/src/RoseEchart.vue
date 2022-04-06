<template>
  <div class="rose-echart">
    <ac-base-echart :options="options"></ac-base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import AcBaseEchart from "@/base-ui/echart";
import { IDataType } from "../types/index";

const props = defineProps<{
  roseData: IDataType[];
}>();

const options = computed(() => ({
  // legend: {
  //   orient: "horizontal",
  //   top: "bottom"
  // },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [10, 100],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 8
      },
      data: props.roseData
    }
  ]
}));
</script>

<style lang="less" scoped></style>
