import { App } from "vue";
import { registerComponent } from "./register-el-icon";
import { registerProperties } from "./register-properties";

export function register(app: App) {
  app.use(registerComponent);
  app.use(registerProperties);
}
