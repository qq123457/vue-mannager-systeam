import { IForm } from "@/base-ui/form";

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "desc",
      type: "input",
      label: "商品描述",
      placeholder: "请输入商品描述"
    },
    {
      field: "imgUrl",
      type: "input",
      label: "图片链接",
      placeholder: "请填入图片链接"
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
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {}
};
