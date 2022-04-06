import { ref } from "vue";
import AcPageModal from "@/components/page-modal";
type CallbackType = (item?: any) => void;
// 控制modal 的显示与隐藏
export function usePageModal(
  newCallback?: CallbackType,
  editCallback?: CallbackType
) {
  const acModalRef = ref<InstanceType<typeof AcPageModal>>();
  const defaultInfo = ref();
  const handleCreateClick = () => {
    defaultInfo.value = {};

    if (acModalRef.value) {
      acModalRef.value.dialogVisible = true;
    }
    newCallback && newCallback();
  };
  const handleEditClick = (item: any) => {
    defaultInfo.value = { ...item };

    if (acModalRef.value) {
      acModalRef.value.dialogVisible = true;
    }
    editCallback && editCallback(item);
  };
  return [acModalRef, defaultInfo, handleCreateClick, handleEditClick];
}
