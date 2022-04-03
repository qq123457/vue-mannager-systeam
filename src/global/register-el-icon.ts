import { App } from "vue";

import {
  Expand,
  Fold,
  Cellphone,
  UserFilled,
  Menu,
  ArrowDown,
  Search,
  Refresh,
  Edit,
  Delete
} from "@element-plus/icons-vue";

const components = [
  Expand,
  Cellphone,
  UserFilled,
  Menu,
  Fold,
  ArrowDown,
  Search,
  Refresh,
  Edit,
  Delete
];

export function registerComponent(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
