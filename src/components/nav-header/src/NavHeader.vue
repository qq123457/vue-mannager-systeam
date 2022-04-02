<template>
  <div class="nav-header">
    <el-icon :size="30" style="cursor: pointer" @click="handleFoldClick">
      <expand v-if="isFold" />
      <fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(true);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    return {
      isFold,
      handleFoldClick
    };
  }
});
</script>

<style scoped></style>
