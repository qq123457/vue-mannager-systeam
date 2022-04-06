<template>
  <div class="goodsinfo">
    <ac-page-search
      :search-form-config="formConfigRef"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    >
    </ac-page-search>
    <ac-page-content
      :content-table-config="tableConfig"
      page-name="goods"
      @create-btn-click="handleCreateClick"
      @edit-btn-click="handleEditClick"
      ref="acPageContentRef"
    >
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

    <ac-page-modal
      :modal-config="modalConfigRef"
      :default-info="defaultInfo"
      ref="acModalRef"
      page-name="goods"
    ></ac-page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AcPageContent from "@/components/page-content";
import AcPageModal from "@/components/page-modal";
import AcPageSearch from "@/components/page-search";
import { tableConfig } from "./config/table-config";
import { modalConfig } from "./config/modal-config";
import { formConfig } from "./config/search-config";
import { usePageModal } from "@/hooks/usePageModal";
import { usePageSearch } from "@/hooks/usePageSearch";
import { computed } from "@vue/reactivity";
import { useStore } from "@/store";
export default defineComponent({
  name: "GoodsInfo",
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
      const categoryIdItem = modalConfig.formItems.find(
        (item: any) => item.field === "categoryId"
      );
      categoryIdItem!.options = store.state.entireCategory.map((item: any) => ({
        title: item.name,
        value: item.id
      }));
      return modalConfig;
    });

    const formConfigRef = computed(() => {
      const categoryIdItem = formConfig.formItems.find(
        (item: any) => item.field === "categoryId"
      );
      categoryIdItem!.options = store.state.entireCategory.map((item: any) => ({
        title: item.name,
        value: item.id
      }));
      return formConfig;
    });

    return {
      acModalRef,
      defaultInfo,
      handleCreateClick,
      handleEditClick,
      acPageContentRef,
      handleResetClick,
      handleQueryClick,
      tableConfig,
      modalConfigRef,
      formConfigRef
    };
  }
});
</script>

<style scoped></style>
