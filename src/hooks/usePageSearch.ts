import { ref } from "vue";
import AcPageContent from "@/components/page-content";

export function usePageSearch() {
  const acPageContentRef = ref<InstanceType<typeof AcPageContent>>();
  const handleResetClick = (): void => {
    acPageContentRef.value?.getPageData();
  };

  const handleQueryClick = (queryInfo: any): void => {
    acPageContentRef.value?.getPageData(queryInfo);
  };

  return [acPageContentRef, handleResetClick, handleQueryClick];
}
