// context/AuthContext.ts

import { createContext } from "react";
import type { UserInfo } from "../../../types/AuthTypes";

export interface AuthContextType {
  userInfo: UserInfo | null;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;