<template>
  <div class="nav-header">
    <el-icon :size="30" style="cursor: pointer" @click="handleFoldClick">
      <expand v-if="isFold" />
      <fold v-else />
    </el-icon>
    <div class="content">
      <ac-bread-crumb :breadcrubms="breadcrums" />
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UserInfo from "./UserInfo.vue";
import AcBreadCrumb from "@/base-ui/breadcrumb";
import { pathMapBreadcrumbs } from "@/utils/map-menus";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    UserInfo,
    AcBreadCrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    // 控制菜单栏的收缩
    const isFold = ref(false);
    emit("foldChange", isFold.value);
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    // 面包屑的数据：[{name:, path:}]
    const store = useStore();
    const route = useRoute();

    const breadcrums = computed(() => {
      const userMenus = store.state.login.userMenus;
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });

    return {
      isFold,
      breadcrums,
      handleFoldClick
    };
  }
});
</script>

<style lang="less" scoped>
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
  .content {
    display: flex;
    flex: 1;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
