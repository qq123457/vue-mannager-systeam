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
      page-name="users"
      ref="acPageContentRef"
    ></ac-page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AcPageSearch from "@/base-ui/page-search";
import AcPageContent from "@/base-ui/page-content";

import { formConfig } from "./config/search-config";
import { tableConfig } from "./config/table-config";

import { userPageSearch } from "@/hooks/usePageSearch";

export default defineComponent({
  name: "UserManager",
  components: {
    AcPageSearch,
    AcPageContent
  },
  setup() {
    const [acPageContentRef, handleResetClick, handleQueryClick] =
      userPageSearch();

    const selectChange = (value: any) => {
      console.log(value);
    };

    return {
      formConfig,
      tableConfig,
      acPageContentRef,
      handleResetClick,
      handleQueryClick,
      selectChange
    };
  }
});
</script>

<style lang="less" scoped></style>
