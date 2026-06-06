

// context/AuthProvider.tsx

import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import type { UserInfo } from "../../../types/AuthTypes";
import verifyTokenAPI from "../../../services/features/auth/verifyTokenAPI";
import { useTokenVerificationLoading } from "../../../hooks/features/auth/useTokenVerificationLoading";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const { setIsTokenVerificationLoading } = useTokenVerificationLoading();

  useEffect(() => {
    const verifyToken = async() => {
       try {
        const data = await verifyTokenAPI();

        if(data.success) {
          setUserInfo(data.userInfo);
        }
       } catch(error) {
        console.log(error);
        setUserInfo(null)
       } finally {
          setIsTokenVerificationLoading(false)
       }
    }
    verifyToken();
  }, [])

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;