<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";
export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 1. 定义属性
    const isKeepPassword = ref(true);
    //                             设置为LoginAccount 导出来的对象类型, InstanceType 用于 创建一个指定类型的构造函数的实例
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    const phoneRef = ref<InstanceType<typeof LoginPhone>>();

    const currentTab = ref<string>("account");
    // 定义方法
    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        accountRef.value?.loginAction(isKeepPassword.value);
      } else {
        // phoneRef.value?.loginAction()
        console.log("调用phone组件中的登录逻辑");
      }
    };
    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      currentTab,
      handleLoginClick
    };
  }
});
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
}
.title {
  text-align: center;
}

.demo-tabs {
  width: 320px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}

.account-control {
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
}
</style>
