

import { useContext } from "react";
import UserPromptContext from "../../../context/features/chat/UserPromptContext";

const useUserPrompt = () => {
  const context = useContext(UserPromptContext);

  if (!context) {
    throw new Error(
      "useUserPrompt must be used within UserPromptProvider"
    );
  }

  const { prompt, setPrompt } = context;

  return { prompt, setPrompt };
};

export default useUserPrompt;