import { App } from "vue";
import { formatUtcString } from "@/utils/data-format";

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log("foo");
    },
    formatTime(value: string, pattern?: string) {
      return formatUtcString(value, pattern);
    }
  };
}
