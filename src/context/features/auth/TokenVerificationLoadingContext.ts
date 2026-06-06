

import { createContext } from "react";

export interface TokenVerificationLoadingContextType {
  isTokenVerificationLoading: boolean;
  setIsTokenVerificationLoading: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export const TokenVerificationLoadingContext = createContext<TokenVerificationLoadingContextType | null>(null);