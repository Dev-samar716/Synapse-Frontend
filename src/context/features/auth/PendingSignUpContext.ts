

import { createContext } from "react";
import type { FormData } from "../../../types/AuthTypes";

type PendingSignupContextType = {
  pendingSignup: FormData;
  setPendingSignup: React.Dispatch<
    React.SetStateAction<FormData>
  >;
};

const PendingSignupContext =
  createContext<PendingSignupContextType | null>(null);

export default PendingSignupContext;