<template>
  <div class="content">
    <ac-table
      :list-data="userList"
      v-bind="contentTableConfig"
      @selection-change="selectChange"
    >
      <!-- 1.header 插槽 -->
      <template #header-handler>
        <el-button type="primary">新键用户</el-button>
        <el-button>
          <el-icon><refresh /></el-icon>
        </el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #enable="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button type="text" size="small">
            <el-icon><edit /></el-icon>编辑</el-button
          >
          <el-button type="text" size="small">
            <el-icon><delete /> </el-icon>删除</el-button
          >
        </div>
      </template>
    </ac-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import AcTable from "@/base-ui/table/src/AcTable.vue";
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    }
  },
  components: {
    AcTable
  },
  emits: ["selectChange"],
  setup(props, { emit }) {
    const store = useStore();
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    });

    const userList = computed(() => store.state.system.userList);
    const userCount = computed(() => store.state.system.userCount);

    const selectChange = (value: any) => {
      emit("selectChange", value);
    };

    return { selectChange, userList, userCount };
  }
});
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
