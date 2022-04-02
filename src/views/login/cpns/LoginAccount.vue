<template>
  <div class="login-account">
    <el-form
      :model="account"
      label-position="left"
      label-width="60px"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { FormInstance } from "element-plus";
import { defineComponent } from "vue";
import { reactive, ref } from "vue";
import { rules } from "../config/account-config";
import localCache from "@/utils/cache";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const account = reactive({
      name: localCache.getCache("name") ?? "",
      password: localCache.getCache("password") ?? ""
    });

    const formRef = ref<FormInstance>();

    const loginAction = async (isKeepPassword: boolean) => {
      await formRef.value?.validate((valid, fields) => {
        if (valid) {
          // 1. 判断是否记住密码
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache("name", account.name);
            localCache.setCache("password", account.password);
          } else {
            localCache.deleteCache("name");
            localCache.deleteCache("password");
          }

          // 2. 开始进行登录验证
          store.dispatch("login/accountLogin", { ...account });

          console.log("submit!");
        } else {
          console.log("error", fields);
        }
      });
    };

    return {
      account,
      formRef,
      rules,
      loginAction
    };
  }
});
</script>

<style scoped></style>
