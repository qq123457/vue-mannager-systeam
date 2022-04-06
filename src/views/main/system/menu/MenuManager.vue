<template>
  <div class="menumanager">
    <ac-page-content
      :content-table-config="tableConfig"
      page-name="menu"
    ></ac-page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AcPageContent from "@/components/page-content";

import { tableConfig } from "./config/table-config";

export default defineComponent({
  name: "MenuManager",
  components: {
    AcPageContent
  },
  setup() {
    return { tableConfig };
  }
});
</script>

<style scoped></style>
