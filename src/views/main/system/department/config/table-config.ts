export const tableConfig = {
  title: "部门列表",
  propList: [
    { prop: "name", label: "部门名称", minWidth: "100", slotName: "name" },
    {
      prop: "leader",
      label: "部门领导",
      minWidth: "100",
      slotName: "leader"
    },
    {
      prop: "parentId",
      label: "上级",
      minWidth: "100",
      slotName: "parentId"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],
  showIndexColumn: true,
  showSelectColumn: true,
  showFooter: true
};
