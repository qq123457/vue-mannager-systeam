<template>
  <div class="usermanager">
    <ac-page-search
      :search-form-config="formConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></ac-page-search>

    <ac-page-content
      :contentTableConfig="tableConfig"
      @selectChange="selectChange"
      @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick"
      page-name="users"
      ref="acPageContentRef"
    ></ac-page-content>

    <ac-page-modal
      :modal-config="modalConfigRef"
      ref="acModalRef"
      :defaultInfo="defaultInfo"
      page-name="users"
    ></ac-page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import AcPageSearch from "@/components/page-search";
import AcPageContent from "@/components/page-content";
import AcPageModal from "@/components/page-modal";

import { formConfig } from "./config/search-config";
import { tableConfig } from "./config/table-config";
import { modalConfig } from "./config/modal-config";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModal } from "@/hooks/usePageModal";
import { useStore } from "@/store";
export default defineComponent({
  name: "UserManager",
  components: {
    AcPageSearch,
    AcPageContent,
    AcPageModal
  },
  setup() {
    const [acPageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();
    // pageModal 相关的hook逻辑
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = false;
    };

    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === "password"
      );
      passwordItem!.isHidden = true;
    };
    const [acModalRef, defaultInfo, handleCreateClick, handleEditClick] =
      usePageModal(newCallback, editCallback);
    const selectChange = (value: any) => {
      console.log(value);
    };

    // 2. 动态添加部门和角色列表
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "departmentId"
      );

      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { title: item.name, value: item.id };
        }
      );

      const roleItem = modalConfig.formItems.find(
        (item) => item.field === "roleId"
      );

      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id };
      });
      return modalConfig;
    });

    return {
      formConfig,
      tableConfig,
      modalConfigRef,
      acPageContentRef,
      handleResetClick,
      handleQueryClick,
      acModalRef,
      defaultInfo,
      selectChange,
      handleCreateClick,
      handleEditClick
    };
  }
});
</script>

<style lang="less" scoped></style>
