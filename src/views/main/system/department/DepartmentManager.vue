<template>
  <div class="departmentmanager">
    <ac-page-search
      :search-form-config="formConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></ac-page-search>
    <ac-page-content
      page-name="department"
      ref="acPageContentRef"
      :content-table-config="tableConfig"
      @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick"
    >
      <template #parentId="scope">
        {{ mapIdToLeaderName(scope.row.parentId) }}
      </template>
    </ac-page-content>

    <ac-page-modal
      :modal-config="modalConfigRef"
      :default-info="defaultInfo"
      ref="acModalRef"
      page-name="department"
    >
    </ac-page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import AcPageContent from "@/components/page-content";
import AcPageModal from "@/components/page-modal";
import AcPageSearch from "@/components/page-search";
import { tableConfig } from "./config/table-config";
import { modalConfig } from "./config/modal-config";
import { formConfig } from "./config/search-config";
import { usePageModal } from "@/hooks/usePageModal";
import { usePageSearch } from "@/hooks/usePageSearch";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "DepartmentManager",
  components: {
    AcPageContent,
    AcPageModal,
    AcPageSearch
  },
  setup() {
    const [acModalRef, defaultInfo, handleCreateClick, handleEditClick] =
      usePageModal();
    const [acPageContentRef, handleResetClick, handleQueryClick] =
      usePageSearch();
    const store = useStore();
    const modalConfigRef = computed(() => {
      const parentId = modalConfig.formItems.find(
        (item: any) => item.field === "parentId"
      );

      parentId!.options = store.state.entireUser.map((item: any) => ({
        title: item.name,
        value: item.id
      }));

      return modalConfig;
    });

    const mapIdToLeaderName = (id: number) => {
      const leader = store.state.entireUser.find((item: any) => item.id === id);

      return leader?.name;
    };
    return {
      tableConfig,
      modalConfigRef,
      acModalRef,
      defaultInfo,
      handleCreateClick,
      handleEditClick,
      formConfig,
      acPageContentRef,
      handleResetClick,
      handleQueryClick,
      mapIdToLeaderName
    };
  }
});
</script>

<style scoped></style>
