import { IForm } from "@/base-ui/form";

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名"
    },
    {
      field: "intro",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入角色介绍"
    }
    // {
    //   field: "roleId",
    //   type: "select",
    //   label: "选择角色",
    //   placeholder: "请选择角色",
    //   options: []
    // }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
};
