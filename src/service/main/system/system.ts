import acRequest from "@/service";
import { IDataType } from "@/service/types";
export function getPageListData(url: string, queryInfo: any) {
  return acRequest.post<IDataType>({
    url: url,
    data: queryInfo
  });
}
