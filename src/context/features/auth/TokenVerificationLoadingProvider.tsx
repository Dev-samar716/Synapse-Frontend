

import { type ReactNode, useState } from "react";
import {
  TokenVerificationLoadingContext,
} from "./TokenVerificationLoadingContext";

interface TokenVerificationLoadingProviderProps {
  children: ReactNode;
}

export const TokenVerificationLoadingProvider = ({
  children,
}: TokenVerificationLoadingProviderProps) => {
  const [
    isTokenVerificationLoading,
    setIsTokenVerificationLoading,
  ] = useState<boolean>(true);

  return (
    <TokenVerificationLoadingContext.Provider
      value={{
        isTokenVerificationLoading,
        setIsTokenVerificationLoading,
      }}
    >
      {children}
    </TokenVerificationLoadingContext.Provider>
  );
};