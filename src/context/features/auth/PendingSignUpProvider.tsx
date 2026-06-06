

import { useState } from "react";
import type { ReactNode } from "react";
import type { FormData } from "../../../types/AuthTypes";
import PendingSignupContext from "./PendingSignUpContext";

type PendingSignupProviderProps = {
  children: ReactNode;
};

const PendingSignupProvider = ({
  children,
}: PendingSignupProviderProps) => {
  const [pendingSignup, setPendingSignup] =
    useState<FormData>({
      username: "",
      email: "",
      password: "",
    });

  return (
    <PendingSignupContext.Provider
      value={{
        pendingSignup,
        setPendingSignup,
      }}
    >
      {children}
    </PendingSignupContext.Provider>
  );
};

export default PendingSignupProvider;