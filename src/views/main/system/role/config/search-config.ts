import { IForm } from "@/base-ui/form";

export const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      type: "input",
      label: "职业",
      placeholder: "请输入职业"
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      placeholder: "请选择创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange"
      }
    }
  ],
  labelWidth: "120px",
  // colLayout: {
  //   span: 8
  // },
  itemStyle: {
    padding: "10px 40px"
  }
};
