import { ILoginState } from "./login/types";
import { ISystemSate } from "./main/system/types";
import { IDashboardState } from "./main/analysis/types";
export interface IRootState {
  name: string;
  age: number;
  entireDepartment: any[];
  entireRole: any[];
  entireMenu: any[];
  entireUser: any[];
  entireCategory: any[];
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemSate;
  dashboard: IDashboardState;
}

export type IStoreType = IRootState & IRootWithModule;
