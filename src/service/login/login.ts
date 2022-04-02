import acRequest from "..";
import { IAccount, ILoginResult, IDataType } from "./type";

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users", // /users/{id}
  UserMenus = "/role" // 用法：role/{id}/menu
}

export function accountLoginRequest(account: IAccount) {
  return acRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  });
}

export function useInfoByIdRequest(id: number) {
  return acRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + `/${id}`
  });
}

export function userMenuByIdRequest(id: number) {
  return acRequest.get<IDataType>({
    url: LoginAPI.UserMenus + `/${id}/menu`
  });
}
