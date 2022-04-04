import { ref } from "vue";
import AcPageContent from "@/base-ui/page-content";

export function userPageSearch() {
  const acPageContentRef = ref<InstanceType<typeof AcPageContent>>();
  const handleResetClick = (): void => {
    acPageContentRef.value?.getPageData();
  };

  const handleQueryClick = (queryInfo: any): void => {
    acPageContentRef.value?.getPageData(queryInfo);
  };

  return [acPageContentRef, handleResetClick, handleQueryClick];
}
