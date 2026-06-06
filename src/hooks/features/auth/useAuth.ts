

// hooks/useAuth.ts

import { useContext } from "react";
import AuthContext from "../../../context/features/auth/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  const { userInfo, setUserInfo } = context;

  return { userInfo, setUserInfo };
};

export default useAuth;