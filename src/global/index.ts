import { App } from "vue";

import {
  Expand,
  Fold,
  Cellphone,
  UserFilled,
  Menu
} from "@element-plus/icons-vue";

const components = [Expand, Cellphone, UserFilled, Menu, Fold];

export function registerComponent(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
