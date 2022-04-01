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
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm, FormInstance } from "element-plus";
import { defineComponent } from "vue";
import { reactive, ref } from "vue";
import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    });

    const formRef = ref<FormInstance>();

    const loginAction = async () => {
      await formRef.value?.validate((valid, fields) => {
        if (valid) {
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
