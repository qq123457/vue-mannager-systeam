import { App } from "vue";

import { Expand, Cellphone, UserFilled } from "@element-plus/icons-vue";

const components = [Expand, Cellphone, UserFilled];

export function registerComponent(app: App) {
  for (const component of components) {
    app.component(component.name, component);
  }
}
