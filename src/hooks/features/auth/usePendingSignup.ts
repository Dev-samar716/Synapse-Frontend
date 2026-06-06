

import { useContext } from "react";
import PendingSignupContext from "../../../context/features/auth/PendingSignUpContext";

const usePendingSignup = () => {
  const context = useContext(PendingSignupContext);

  if (!context) {
    throw new Error(
      "usePendingSignup must be used within PendingSignupProvider"
    );
  }

  const {pendingSignup, setPendingSignup} = context;

  return {pendingSignup, setPendingSignup};
};

export default usePendingSignup;