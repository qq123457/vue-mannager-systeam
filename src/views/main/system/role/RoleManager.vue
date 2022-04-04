<template>
  <div class="rolemanager">
    <ac-page-search :search-form-config="formConfig"></ac-page-search>
    <ac-page-content
      :content-table-config="tableConfig"
      page-name="role"
    ></ac-page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AcPageSearch from "@/base-ui/page-search";
import AcPageContent from "@/base-ui/page-content";

import { tableConfig } from "./config/table-config";
import { formConfig } from "./config/search-config";

export default defineComponent({
  name: "RoleManager",
  components: { AcPageSearch, AcPageContent },
  setup() {
    return { formConfig, tableConfig };
  }
});
</script>

<style scoped></style>
