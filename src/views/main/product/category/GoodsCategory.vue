<template>
  <div class="goodscategory">
    <ac-page-search
      :search-form-config="formConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></ac-page-search>
    <ac-page-content
      :content-table-config="tableConfig"
      page-name="category"
      @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick"
      ref="acPageContentRef"
    ></ac-page-content>

    <ac-page-modal
      :modal-config="modalConfig"
      page-name="category"
      ref="acModalRef"
      :default-info="defaultInfo"
    ></ac-page-modal>
  </div>
</template>

<script lang="ts" setup>
import AcPageContent from "@/components/page-content";
import AcPageModal from "@/components/page-modal";
import AcPageSearch from "@/components/page-search";
import { tableConfig } from "./config/table-config";
import { modalConfig } from "./config/modal-config";
import { formConfig } from "./config/search-config";
import { usePageModal } from "@/hooks/usePageModal";
import { usePageSearch } from "@/hooks/usePageSearch";
const [acModalRef, defaultInfo, handleCreateClick, handleEditClick] =
  usePageModal();
const [acPageContentRef, handleResetClick, handleQueryClick] = usePageSearch();
</script>

<style scoped></style>
