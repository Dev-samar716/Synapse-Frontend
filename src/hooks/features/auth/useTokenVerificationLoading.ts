

import { useContext } from "react";
import {
  TokenVerificationLoadingContext,
} from "../../../context/features/auth/TokenVerificationLoadingContext";

export const useTokenVerificationLoading = () => {
  const context = useContext(TokenVerificationLoadingContext);

  if (!context) {
    throw new Error(
      "useTokenVerificationLoading must be used within a TokenVerificationLoadingProvider"
    );
  }

  const {isTokenVerificationLoading, setIsTokenVerificationLoading} = context;

  return {isTokenVerificationLoading, setIsTokenVerificationLoading};
};