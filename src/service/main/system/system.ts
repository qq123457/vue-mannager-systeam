import acRequest from "@/service";
import { IDataType } from "@/service/types";
export function getPageListData(url: string, queryInfo: any) {
  return acRequest.post<IDataType>({
    url: url,
    data: queryInfo
  });
}

// 删除指定数据
export function deletePageData(url: string) {
  return acRequest.delete<IDataType>({
    url: url
  });
}

export function createPageData(url: string, newData: any) {
  return acRequest.post<IDataType>({
    url: url,
    data: newData
  });
}

export function editPageData(url: string, newData: any) {
  return acRequest.put<IDataType>({
    url: url,
    data: newData
  });
}
