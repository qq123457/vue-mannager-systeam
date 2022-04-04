<template>
  <div class="goodsinfo">
    <ac-page-content :content-table-config="tableConfig" page-name="goods">
      <template #imgUrl="scope">
        <el-image
          preview-teleported
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="4"
          fit="cover"
        />
      </template>
      <template #oldPrice="scope"> ￥{{ scope.row.oldPrice }} </template>
    </ac-page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AcPageContent from "@/base-ui/page-content";
import { tableConfig } from "./config/table-config";

export default defineComponent({
  name: "GoodsInfo",
  components: {
    AcPageContent
  },
  setup() {
    return {
      tableConfig
    };
  }
});
</script>

<style scoped></style>
