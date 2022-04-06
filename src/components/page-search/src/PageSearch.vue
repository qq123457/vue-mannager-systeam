<template>
  <div class="page-search">
    <ac-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="default" @click="handleResetClick">
            <el-icon><refresh /></el-icon>
            重置
          </el-button>
          <el-button type="primary" @click="handleQuery">
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
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    // 1. form 中的属性动态来决定
    const formItems = props.searchFormConfig?.formItems ?? [];
    const formOriginData: any = {};
    for (const item of formItems) {
      formOriginData[item.field] = "";
    }
    const formData = ref(formOriginData);

    // 2. 重置 操作
    const handleResetClick = () => {
      Object.keys(formOriginData).forEach((key) => {
        formData.value[key] = formOriginData[key];
      });
      emit("resetBtnClick");
    };
    // 3. 搜索
    const handleQuery = () => {
      emit("queryBtnClick", formData.value);
    };
    return {
      formData,
      handleResetClick,
      handleQuery
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
