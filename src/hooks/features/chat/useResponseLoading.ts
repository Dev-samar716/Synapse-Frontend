

import { useContext } from "react";
import responseLoadingContext from "../../../context/features/chat/ResponseLoadingContext";

const useResponseLoading = () => {
  const context = useContext(responseLoadingContext);

  if (!context) {
    throw new Error(
      "useResponseLoading must be used within ResponseLoadingProvider"
    );
  }

  const { responseLoading, setResponseLoading } = context;

  return { responseLoading, setResponseLoading };
};

export default useResponseLoading;