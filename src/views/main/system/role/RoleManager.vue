<template>
  <div class="rolemanager">
    <ac-page-search
      :search-form-config="formConfig"
      @query-btn-click="handleQueryClick"
      @reset-btn-click="handleResetClick"
    ></ac-page-search>
    <ac-page-content
      :content-table-config="tableConfig"
      page-name="role"
      @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick"
      ref="acPageContentRef"
    ></ac-page-content>
    <ac-page-modal
      :modal-config="modalConfig"
      page-name="role"
      ref="acModalRef"
      :default-info="defaultInfo"
      :other-info="otherInfo"
    >
      <div class="menu-tree">
        <el-tree
          :data="menus"
          ref="elfTreeRef"
          show-checkbox
          node-key="id"
          @check="handleCheckChange"
          :props="{ children: 'children', label: 'name' }"
        />
      </div>
    </ac-page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue";
import AcPageSearch from "@/components/page-search";
import AcPageContent from "@/components/page-content";
import AcPageModal from "@/components/page-modal";
import { tableConfig } from "./config/table-config";
import { formConfig } from "./config/search-config";
import { modalConfig } from "./config/modal-config";
import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModal } from "@/hooks/usePageModal";
import { menuMapLeafKeys } from "@/utils/map-menus";
import { useStore } from "@/store";
import { ElTree } from "element-plus";
export default defineComponent({
  name: "RoleManager",
  components: { AcPageSearch, AcPageContent, AcPageModal },
  setup() {
    const [acPageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();

    // 1. 处理pageModal 的 hook
    const elfTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList);
      nextTick(() => {
        console.log(leafKeys);
        elfTreeRef.value?.setCheckedKeys(leafKeys, false);
      });
    };
    const [acModalRef, defaultInfo, handleCreateClick, handleEditClick] =
      usePageModal(undefined, editCallback);

    const store = useStore();
    const menus = computed(() => store.state.entireMenu);
    const otherInfo = ref({});

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
      console.log(otherInfo.value);
    };
    return {
      formConfig,
      tableConfig,
      modalConfig,
      acModalRef,
      defaultInfo,
      menus,
      otherInfo,
      handleCreateClick,
      handleEditClick,
      acPageContentRef,
      handleResetClick,
      handleQueryClick,
      elfTreeRef,
      handleCheckChange
    };
  }
});
</script>

<style lang="less" scoped>
.menu-tree {
  margin-left: 22px;
}
</style>
