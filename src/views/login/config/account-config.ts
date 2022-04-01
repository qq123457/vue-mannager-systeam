export const rules = {
  name: [
    {
      required: true,
      message: "账号不能为空",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur"
    },
    { min: 6, max: 16, message: "密码长度应该为 6 ~ 16", trigger: "blur" }
  ]
};
