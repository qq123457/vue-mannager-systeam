<template>
  <div>
    <el-form
      :model="phone"
      label-position="left"
      label-width="60px"
      :rules="rules"
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <div class="get-code">
          <el-input v-model="phone.code" />
          <el-button class="get-code-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/phone-config";

export default defineComponent({
  setup() {
    const phone = reactive({
      number: "",
      code: ""
    });
    return {
      phone,
      rules
    };
  }
});
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 20px;
}
</style>
