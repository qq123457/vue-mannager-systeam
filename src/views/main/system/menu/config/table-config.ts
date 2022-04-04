export const tableConfig = {
  title: "菜单列表",
  propList: [
    { prop: "name", label: "菜单名称", minWidth: "100", slotName: "name" },
    {
      prop: "type",
      label: "类型",
      minWidth: "60",
      slotName: "type"
    },
    {
      prop: "url",
      label: "菜单url",
      minWidth: "100",
      slotName: "url"
    },
    {
      prop: "icon",
      label: "菜单icon",
      minWidth: "100",
      slotName: "icon"
    },
    {
      prop: "permission",
      label: "按钮权限",
      minWidth: "100",
      slotName: "permission"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "220",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "220",
      slotName: "updateAt"
    },
    { label: "操作", minWidth: "120", slotName: "handler" }
  ],
  showIndexColumn: false,
  showSelectColumn: false,
  showFooter: false,
  childrenProps: {
    rowKey: "id",
    treepProp: {
      children: "children"
    }
  }
};
