const DepartmentManager = () =>
  import("@/views/main/system/department/DepartmentManager.vue");
export default {
  path: "/main/system/department",
  name: "DepartmentManager",
  component: DepartmentManager,
  children: []
};
