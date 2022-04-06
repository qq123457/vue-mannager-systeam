<template>
  <div class="content">
    <ac-table
      :list-data="dataList"
      :list-count="listCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      @selection-change="selectChange"
    >
      <!-- 1.header 插槽 -->
      <template #header-handler>
        <el-button type="primary" v-if="isCreate" @click="handleCreateClick"
          >新键用户</el-button
        >
        <el-button>
          <el-icon><refresh /></el-icon>
        </el-button>
      </template>
      <!-- 2.列中的插槽 -->
      <template #status="scope">
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
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            type="text"
            size="small"
            v-if="isUpdate"
            @click="handleEditClick(scope.row)"
          >
            <el-icon><edit /></el-icon>编辑</el-button
          >
          <el-button
            type="text"
            size="small"
            v-if="isDelete"
            @click="handleDeleteClick(scope.row)"
          >
            <el-icon><delete /> </el-icon>删除</el-button
          >
        </div>
      </template>
      <!-- 3. 动态插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </ac-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from "vue";
import { useStore } from "@/store";
import AcTable from "@/base-ui/table/src/AcTable.vue";
import excludeSlotNames from "./config/exclude-solt";
import { usePermission } from "@/hooks/usePermission";
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  components: {
    AcTable
  },
  emits: ["selectChange", "createBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore();

    // 获取操作权限
    const isCreate = usePermission(props.pageName as string, "create");
    const isUpdate = usePermission(props.pageName as string, "update");
    const isDelete = usePermission(props.pageName as string, "delete");
    const isQuery = usePermission(props.pageName as string, "query");

    // 双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });

    watch(pageInfo, () => {
      getPageData();
    });
    // 发送网络请求
    const getPageData = (queryInfo: any = {}) => {
      if (!isQuery) return;
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      });
    };

    getPageData();

    //vuex 中获取数据
    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    );
    const listCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    );
    const selectChange = (value: any) => {
      emit("selectChange", value);
    };

    // 4. 获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (excludeSlotNames.includes(item.slotName)) return false;
        return true;
      }
    );

    // 5. 添加/删除/修改
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      });
    };
    const handleCreateClick = () => {
      emit("createBtnClick");
    };
    const handleEditClick = (item: any) => {
      emit("editBtnClick", item);
    };
    return {
      selectChange,
      getPageData,
      handleDeleteClick,
      handleCreateClick,
      handleEditClick,
      dataList,
      listCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery
    };
  }
});
</script>

<style lang="less" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
