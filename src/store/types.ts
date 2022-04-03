import { ILoginState } from "./login/types";
import { ISystemSate } from "./main/system/types";
export interface IRootState {
  name: string;
  age: number;
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemSate;
}

export type IStoreType = IRootState & IRootWithModule;
