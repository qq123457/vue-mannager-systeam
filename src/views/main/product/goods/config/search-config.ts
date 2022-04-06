import { IForm } from "@/base-ui/form";

export const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "newPrice",
      type: "input",
      label: "新价格",
      placeholder: "请输入新价格"
    },
    {
      field: "oldPrice",
      type: "input",
      label: "旧价格",
      placeholder: "请输入旧价格"
    },
    {
      field: "saleCount",
      type: "input",
      label: "销量",
      placeholder: "请输入销量"
    },
    {
      field: "inventoryCount",
      type: "input",
      label: "库存",
      placeholder: "请输入库存"
    },
    {
      field: "favorCount",
      type: "input",
      label: "收藏",
      placeholder: "请输入收藏"
    },
    {
      field: "categoryId",
      type: "select",
      label: "商品分类",
      placeholder: "选择商品分类",
      options: []
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
