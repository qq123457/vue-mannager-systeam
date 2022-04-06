<template>
  <div class="pie-echart">
    <ac-base-echart :options="options"></ac-base-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import AcBaseEchart from "@/base-ui/echart";
import { IDataType } from "../types/index";

const props = defineProps<{
  pieData: IDataType[];
}>();

const options = computed(() => ({
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "horizontal",
    left: "left"
  },
  series: [
    {
      name: "分类数据",
      type: "pie",
      radius: "50%",
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }
  ]
}));
</script>

<style lang="less" scoped></style>
