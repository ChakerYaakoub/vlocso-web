import { User } from "../User";

export interface DataUser {
  user: User;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginRegister {
  message: string;
  data: DataUser;
}
