import { IForm } from "@/base-ui/form";

export const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "分类名称",
      placeholder: "请输入分类名称"
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
  itemStyle: {
    padding: "10px 40px"
  }
};
