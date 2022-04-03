<template>
  <div class="usermanager">
    <ac-page-search :search-form-config="formConfig"></ac-page-search>

    <page-content
      :contentTableConfig="tableConfig"
      @selectChange="selectChange"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AcPageSearch from "@/base-ui/page-search";
import PageContent from "@/base-ui/page-content";

import { formConfig } from "./config/search-config";
import { tableConfig } from "./config/table-config";

export default defineComponent({
  name: "UserManager",
  components: {
    AcPageSearch,
    PageContent
  },
  setup() {
    const selectChange = (value: any) => {
      console.log(value);
    };

    return {
      formConfig,
      tableConfig,
      selectChange
    };
  }
});
</script>

<style lang="less" scoped></style>
