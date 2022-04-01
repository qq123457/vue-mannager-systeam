<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPanel from "./cpns/LoginPanel.vue";

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {};
  }
});
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/img/background_img.jpg) center center no-repeat;
  background-size: 100% 100%;

  // .content {
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   margin-top: -100px;
  //   h1 {
  //     text-align: center;
  //   }
  //   .el-tabs {
  //     width: 320px;
  //   }
  //   .login-select {
  //     display: flex;
  //     margin-top: 5px;
  //     color: yellowgreen;
  //     justify-content: space-between;
  //   }
  //   .login-commit {
  //     margin-top: 10px;
  //     width: 100%;
  //   }
  // }
}
</style>
