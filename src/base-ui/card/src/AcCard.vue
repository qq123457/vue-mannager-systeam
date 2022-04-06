<template>
  <div class="msi-card">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          {{ title }}
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AcCard",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.msi-card {
  margin-bottom: 10px;
}
.card-header {
  text-align: left;
  font-weight: bold;
}
</style>
