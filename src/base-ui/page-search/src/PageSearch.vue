<template>
  <div class="page-search">
    <ac-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="default">
            <el-icon><refresh /></el-icon>
            重置
          </el-button>
          <el-button type="primary">
            <el-icon><search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </ac-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AcForm from "@/base-ui/form";

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    AcForm
  },
  setup() {
    const formData = ref({
      id: "",
      name: "",
      password: "",
      sport: "",
      createTime: ""
    });
    return {
      formData
    };
  }
});
</script>

<style lang="less" scoped>
.header {
  text-align: center;
}

.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
